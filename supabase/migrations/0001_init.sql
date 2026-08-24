-- =============================================================================
-- HWS Portal, initial schema.
--
-- Covers the organisation portal, the woman-facing saved list, and the admin
-- review tools. Written so the organisation flow can ship first while the
-- woman-facing tables sit dormant but present, since retrofitting the event
-- tables later would mean losing the first cohort's figures.
-- =============================================================================

create extension if not exists "pgcrypto";

-- -----------------------------------------------------------------------------
-- Roles and helpers
-- -----------------------------------------------------------------------------

-- One row per auth user. `role` separates the three audiences that share the
-- database: a woman searching, a person posting for an organisation, and HWS
-- staff. An account is one role only.
create type user_role as enum ('woman', 'organisation', 'admin');

create table profiles (
  id                uuid primary key references auth.users (id) on delete cascade,
  role              user_role   not null,
  first_name        text,
  last_name         text,
  -- Optional, and never shown to organisations. Kept per the decision to
  -- retain the field on the woman-facing profile screen.
  phone             text,
  reminders_enabled boolean     not null default true,
  reminder_days     int         not null default 7,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create function is_admin() returns boolean
  language sql stable security definer set search_path = public as $fn$
    select exists (
      select 1 from profiles
      where id = auth.uid() and role = 'admin'
    );
  $fn$;

-- -----------------------------------------------------------------------------
-- Taxonomy: admin-owned, therefore data rather than enumerated types
-- -----------------------------------------------------------------------------

-- Access Zones. An HWS admin can add, rename, re-describe or retire one
-- without a release. `slug` is the stable reference a listing holds, so a
-- rename never orphans anything.
create table access_zones (
  id           uuid primary key default gen_random_uuid(),
  slug         text        not null unique,
  name         text        not null,
  focus        text        not null,
  sort_order   int         not null default 0,
  retired_at   timestamptz,
  -- Where organisations and listings move when this zone is retired.
  -- Retiring without a destination is what strands a listing, so the admin
  -- tool requires this before it will set retired_at.
  successor_id uuid        references access_zones (id) on delete set null,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  constraint successor_is_not_self check (successor_id is null or successor_id <> id)
);

create index access_zones_active_idx on access_zones (sort_order) where retired_at is null;

-- The situation chips. One source feeds woman-facing question 3 and the
-- "Which situations does this suit?" field on the organisation form.
-- `woman_only` carries "Prefer not to say", which is an answer she can give
-- but never a tag a listing can hold.
create table situations (
  id         uuid primary key default gen_random_uuid(),
  slug       text        not null unique,
  label      text        not null,
  sort_order int         not null default 0,
  woman_only boolean     not null default false,
  retired_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- -----------------------------------------------------------------------------
-- Organisations
-- -----------------------------------------------------------------------------

create type verification_status as enum (
  'pending',        -- evidence submitted, awaiting an admin
  'verified',
  'more_evidence',  -- admin has asked for something further
  'rejected'
);

create table organisations (
  id     uuid primary key default gen_random_uuid(),
  name   text not null,
  -- Slugs, with labels held in src/lib/design/taxonomy.ts. Unlike zones this
  -- list is not admin-editable, so a check constraint is correct.
  type   text not null check (type in (
           'charity', 'social_enterprise', 'public_body',
           'business', 'network_or_group', 'college_or_university')),
  website text,
  place   text,
  blurb   text,

  -- Verification evidence. Never shown to women.
  status              verification_status not null default 'pending',
  registration_number text,
  funder_note         text,
  contact_name        text,
  contact_role        text,
  contact_phone       text,
  verified_at         timestamptz,
  verified_by         uuid references profiles (id) on delete set null,
  review_note         text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create type zone_role as enum ('primary', 'also');

create table organisation_zones (
  organisation_id uuid not null references organisations (id) on delete cascade,
  zone_id         uuid not null references access_zones (id) on delete restrict,
  role            zone_role not null,
  primary key (organisation_id, zone_id)
);

-- Exactly one primary zone per organisation.
create unique index organisation_zones_one_primary
  on organisation_zones (organisation_id) where role = 'primary';

-- Secondary zones capped at two, per the selection logic on onboarding step 2.
create function enforce_also_zone_cap() returns trigger
  language plpgsql as $fn$
  begin
    if new.role = 'also' and (
      select count(*) from organisation_zones
      where organisation_id = new.organisation_id
        and role = 'also'
        and zone_id <> new.zone_id
    ) >= 2 then
      raise exception 'An organisation can work across at most two further zones';
    end if;
    return new;
  end;
  $fn$;

create trigger organisation_zones_also_cap
  before insert or update on organisation_zones
  for each row execute function enforce_also_zone_cap();

-- Verification stays with the organisation, not the person, so membership is
-- its own table and an invited colleague inherits the organisation's status.
create table organisation_members (
  organisation_id uuid not null references organisations (id) on delete cascade,
  user_id         uuid not null references profiles (id) on delete cascade,
  role            text not null default 'member' check (role in ('owner', 'member')),
  invited_by      uuid references profiles (id) on delete set null,
  invited_at      timestamptz,
  joined_at       timestamptz not null default now(),
  primary key (organisation_id, user_id)
);

create index organisation_members_user_idx on organisation_members (user_id);

create function is_org_member(org uuid) returns boolean
  language sql stable security definer set search_path = public as $fn$
    select exists (
      select 1 from organisation_members
      where organisation_id = org and user_id = auth.uid()
    );
  $fn$;

-- -----------------------------------------------------------------------------
-- Listings
-- -----------------------------------------------------------------------------

-- draft -> in_review -> live, with changes_requested looping back and closed
-- as the terminal state a passed deadline lands in. A closed listing stays
-- visible on a woman's saved list rather than disappearing.
create type listing_status as enum (
  'draft', 'in_review', 'changes_requested', 'live', 'closed'
);

create table listings (
  id              uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references organisations (id) on delete cascade,

  -- The eleven fields a woman-facing result card renders.
  name           text not null,
  kind           text check (kind in (
                   'course_or_programme', 'grant_or_fund', 'advice_or_one_to_one',
                   'drop_in', 'event', 'mentoring')),
  blurb          text,
  who_for        text,
  what_to_expect text,
  cost           text check (cost in ('free', 'free_to_apply', 'there_is_a_cost')),
  formats        text[] not null default '{}',
  place          text,
  deadline       date,
  apply_url      text,

  status         listing_status not null default 'draft',
  -- Drives the six-monthly freshness prompt and the "last checked" date
  -- women see on the result card.
  last_confirmed_at timestamptz,
  published_at      timestamptz,
  closed_at         timestamptz,

  created_by uuid references profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint formats_are_known check (
    formats <@ array['in_person', 'online', 'by_phone', 'evenings_or_weekends']::text[]
  )
);

create index listings_org_idx    on listings (organisation_id);
create index listings_live_idx   on listings (status, deadline) where status = 'live';
create index listings_stale_idx  on listings (last_confirmed_at) where status = 'live';

create table listing_situations (
  listing_id   uuid not null references listings (id) on delete cascade,
  situation_id uuid not null references situations (id) on delete restrict,
  primary key (listing_id, situation_id)
);

create index listing_situations_situation_idx on listing_situations (situation_id);

-- A listing inherits its organisation's zones by default. This table exists
-- for the case where one listing sits in a different zone from its parent.
create table listing_zones (
  listing_id uuid not null references listings (id) on delete cascade,
  zone_id    uuid not null references access_zones (id) on delete restrict,
  primary key (listing_id, zone_id)
);

-- Append-only. HWS may edit wording for clarity and the organisation must be
-- told, so every action leaves a row and nothing is edited silently.
create type review_action as enum (
  'submitted', 'approved', 'changes_requested', 'edited',
  'closed', 'reopened', 'reconfirmed'
);

create table listing_reviews (
  id         uuid primary key default gen_random_uuid(),
  listing_id uuid not null references listings (id) on delete cascade,
  actor_id   uuid references profiles (id) on delete set null,
  action     review_action not null,
  note       text,
  -- { field: { from, to } } for any wording an admin changed.
  changes    jsonb,
  created_at timestamptz not null default now()
);

create index listing_reviews_listing_idx on listing_reviews (listing_id, created_at desc);

-- -----------------------------------------------------------------------------
-- The woman-facing side
-- -----------------------------------------------------------------------------

-- The reason the account exists. `applied_at` is hers to set and never
-- inferred, because we cannot see what the organisation does.
create table saved_items (
  user_id    uuid not null references profiles (id) on delete cascade,
  listing_id uuid not null references listings (id) on delete cascade,
  saved_at   timestamptz not null default now(),
  applied_at timestamptz,
  primary key (user_id, listing_id)
);

create index saved_items_user_idx on saved_items (user_id, saved_at desc);

-- Places for question 2. Accepts a town, a partial postcode, or a council
-- area, and never demands a full postcode.
create table places (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  kind         text not null check (kind in ('town', 'council_area', 'postcode_district')),
  council_area text,
  latitude     double precision,
  longitude    double precision,
  created_at   timestamptz not null default now()
);

create index places_name_idx on places (lower(name));

-- -----------------------------------------------------------------------------
-- Measurement, kept in aggregate rather than as behavioural profiles
-- -----------------------------------------------------------------------------

-- Feeds the three dashboard figures. Deliberately carries no user id: the
-- brief rules out building profiles around sensitive searches.
create type listing_event_kind as enum ('view', 'save', 'clickthrough');

create table listing_events (
  id          bigint generated always as identity primary key,
  listing_id  uuid not null references listings (id) on delete cascade,
  kind        listing_event_kind not null,
  occurred_on date not null default current_date
);

create index listing_events_rollup_idx on listing_events (listing_id, occurred_on, kind);

create view listing_stats as
  select
    listing_id,
    count(*) filter (where kind = 'view')         as views,
    count(*) filter (where kind = 'save')         as saves,
    count(*) filter (where kind = 'clickthrough') as clickthroughs
  from listing_events
  group by listing_id;

-- Unmet navigation demand. What women looked for and did not find, which the
-- no-match screen feeds and which is strategic evidence for HWS about where
-- provision is thin. No user id, by design.
create table unmet_searches (
  id           bigint generated always as identity primary key,
  need         text,
  place        text,
  situations   text[] not null default '{}',
  result_count int not null default 0,
  occurred_on  date not null default current_date
);

-- -----------------------------------------------------------------------------
-- Hand routing
-- -----------------------------------------------------------------------------

-- The escape for the four categories with no Access Zone: housing, safety and
-- rights, support for new Scots, and caring and family life. Load-bearing on
-- both sides, and it must reach a person rather than another search.
create table hand_routing_requests (
  id                uuid primary key default gen_random_uuid(),
  source            text not null check (source in ('woman', 'organisation')),
  email             text,
  organisation_name text,
  need              text,
  place             text,
  note              text,
  status            text not null default 'new'
                      check (status in ('new', 'in_progress', 'resolved')),
  handled_by        uuid references profiles (id) on delete set null,
  created_at        timestamptz not null default now(),
  resolved_at       timestamptz
);

-- -----------------------------------------------------------------------------
-- updated_at
-- -----------------------------------------------------------------------------

create function touch_updated_at() returns trigger
  language plpgsql as $fn$
  begin
    new.updated_at = now();
    return new;
  end;
  $fn$;

create trigger profiles_touch      before update on profiles      for each row execute function touch_updated_at();
create trigger access_zones_touch  before update on access_zones  for each row execute function touch_updated_at();
create trigger situations_touch    before update on situations    for each row execute function touch_updated_at();
create trigger organisations_touch before update on organisations for each row execute function touch_updated_at();
create trigger listings_touch      before update on listings      for each row execute function touch_updated_at();

-- -----------------------------------------------------------------------------
-- Row level security
-- -----------------------------------------------------------------------------

alter table profiles              enable row level security;
alter table access_zones          enable row level security;
alter table situations            enable row level security;
alter table organisations         enable row level security;
alter table organisation_zones    enable row level security;
alter table organisation_members  enable row level security;
alter table listings              enable row level security;
alter table listing_situations    enable row level security;
alter table listing_zones         enable row level security;
alter table listing_reviews       enable row level security;
alter table saved_items           enable row level security;
alter table places                enable row level security;
alter table listing_events        enable row level security;
alter table unmet_searches        enable row level security;
alter table hand_routing_requests enable row level security;

-- Profiles: your own, plus admin.
create policy profiles_self_read   on profiles for select using (id = auth.uid() or is_admin());
create policy profiles_self_write  on profiles for update using (id = auth.uid()) with check (id = auth.uid());
create policy profiles_self_insert on profiles for insert with check (id = auth.uid());
create policy profiles_admin_all   on profiles for all using (is_admin()) with check (is_admin());

-- Taxonomy: readable by anyone, including signed-out women. Admin writes.
create policy zones_public_read      on access_zones for select using (retired_at is null or is_admin());
create policy zones_admin_write      on access_zones for all using (is_admin()) with check (is_admin());
create policy situations_public_read on situations   for select using (retired_at is null or is_admin());
create policy situations_admin_write on situations   for all using (is_admin()) with check (is_admin());
create policy places_public_read     on places       for select using (true);
create policy places_admin_write     on places       for all using (is_admin()) with check (is_admin());

-- Organisations: members manage their own, admin sees all. Public read is
-- deliberately absent; a woman reaches organisation details through a live
-- listing, which is served by a view rather than direct table access.
create policy orgs_member_read  on organisations for select using (is_org_member(id) or is_admin());
create policy orgs_member_write on organisations for update using (is_org_member(id)) with check (is_org_member(id));
create policy orgs_admin_all    on organisations for all using (is_admin()) with check (is_admin());

create policy org_zones_member on organisation_zones for all
  using (is_org_member(organisation_id) or is_admin())
  with check (is_org_member(organisation_id) or is_admin());

create policy org_members_read  on organisation_members for select
  using (is_org_member(organisation_id) or is_admin());
create policy org_members_admin on organisation_members for all
  using (is_admin()) with check (is_admin());

-- Listings: live ones are public, drafts belong to the organisation.
create policy listings_public_read on listings for select
  using (status = 'live' or is_org_member(organisation_id) or is_admin());
create policy listings_member_write on listings for all
  using (is_org_member(organisation_id))
  with check (is_org_member(organisation_id));
create policy listings_admin_all on listings for all
  using (is_admin()) with check (is_admin());

create policy listing_situations_read  on listing_situations for select using (true);
create policy listing_situations_write on listing_situations for all
  using (exists (select 1 from listings l where l.id = listing_id
                 and (is_org_member(l.organisation_id) or is_admin())))
  with check (exists (select 1 from listings l where l.id = listing_id
                 and (is_org_member(l.organisation_id) or is_admin())));

create policy listing_zones_read  on listing_zones for select using (true);
create policy listing_zones_write on listing_zones for all
  using (exists (select 1 from listings l where l.id = listing_id
                 and (is_org_member(l.organisation_id) or is_admin())))
  with check (exists (select 1 from listings l where l.id = listing_id
                 and (is_org_member(l.organisation_id) or is_admin())));

-- The organisation can read its own audit trail, since it is told about edits.
create policy listing_reviews_read  on listing_reviews for select
  using (exists (select 1 from listings l where l.id = listing_id
                 and (is_org_member(l.organisation_id) or is_admin())));
create policy listing_reviews_admin on listing_reviews for all
  using (is_admin()) with check (is_admin());

-- Saved items are hers alone. Admin is deliberately excluded.
create policy saved_items_own on saved_items for all
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Events are write-only from the client and read only in aggregate by staff.
create policy listing_events_insert     on listing_events  for insert with check (true);
create policy listing_events_admin_read on listing_events  for select using (is_admin());
create policy unmet_searches_insert     on unmet_searches  for insert with check (true);
create policy unmet_searches_admin_read on unmet_searches  for select using (is_admin());

create policy hand_routing_insert on hand_routing_requests for insert with check (true);
create policy hand_routing_admin  on hand_routing_requests for all
  using (is_admin()) with check (is_admin());
