-- =============================================================================
-- Secondary markets, and organisations that exist without an account.
--
-- Two changes that come from the same document: HWS's own map of who is on
-- the platform, what each one is primarily for, and the four or five other
-- things each can connect a woman into.
--
-- The map forces two admissions.
--
-- The first is that an Access Zone is not enough. A zone is where an
-- organisation lives; a market is what it can actually help with, and the
-- two are different lists. Business Gateway's zone is Enterprise, but a woman
-- who needs funding, or digital skills, or help with procurement should reach
-- it. One zone per organisation plus two more was never going to carry that.
--
-- The second is that most of this map will never sign up. Business Gateway,
-- NHS Inform, Public Health Scotland and Skills Development Scotland are
-- standing infrastructure, not people who will make an account and fill in a
-- form. HWS enters them. So an organisation must be able to exist with no
-- user behind it, and be verified, findable and complete without one.
--
-- Markets are admin-assigned, deliberately. Zones are what an organisation
-- says about itself; markets are HWS's judgment about what it can be used
-- for, and a woman is trusting that judgment rather than the organisation's
-- own marketing.
-- =============================================================================

-- -----------------------------------------------------------------------------
-- The vocabulary
--
-- A table rather than a constant, like access_zones and situations, so HWS can
-- add, rename or retire one without a release. Unlike the taxonomy in
-- src/lib/design/taxonomy.ts, this list is expected to move.
-- -----------------------------------------------------------------------------

create table secondary_markets (
  id         uuid primary key default gen_random_uuid(),
  slug       text not null unique,
  label      text not null,
  -- What a woman would say to mean this. Read by the ranker, not shown.
  match_phrase text,
  sort_order int not null default 0,
  retired_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index secondary_markets_active_idx
  on secondary_markets (sort_order) where retired_at is null;

create trigger secondary_markets_touch
  before update on secondary_markets
  for each row execute function touch_updated_at();

comment on table secondary_markets is
  'What an organisation can help with, as against where it lives. Assigned by '
  'an admin, never self-selected: a woman is trusting HWS''s judgment about '
  'what an organisation is useful for, not its own account of itself.';

create table organisation_markets (
  organisation_id uuid not null references organisations (id) on delete cascade,
  market_id       uuid not null references secondary_markets (id) on delete restrict,
  created_at      timestamptz not null default now(),
  primary key (organisation_id, market_id)
);

create index organisation_markets_market_idx
  on organisation_markets (market_id);

alter table secondary_markets    enable row level security;
alter table organisation_markets enable row level security;

create policy markets_public_read on secondary_markets
  for select using (retired_at is null or is_admin());

create policy markets_admin_write on secondary_markets
  for all using (is_admin()) with check (is_admin());

-- Readable by anyone: which markets an organisation covers is the whole point
-- of the Discover pages, and none of it is sensitive. Writable by admins only.
create policy organisation_markets_read on organisation_markets
  for select using (true);

create policy organisation_markets_admin_write on organisation_markets
  for all using (is_admin()) with check (is_admin());

-- -----------------------------------------------------------------------------
-- The twenty
--
-- From the PathGrid document. The per-organisation rows there use about fifty
-- terms; this is the list they normalise into, and the one a woman sees.
--
-- match_phrase is what she is likely to type. It is not a synonym list and it
-- is not exhaustive: the ranker also reads her words against an organisation's
-- own prose, and this is only what a market itself is worth matching on.
-- -----------------------------------------------------------------------------

insert into secondary_markets (slug, label, match_phrase, sort_order) values
  ('start-and-grow-a-business', 'Start & Grow a Business',
   'start a business set up self employed grow my business enterprise', 10),
  ('funding-and-investment', 'Funding & Investment',
   'funding grant money investment capital finance loan', 20),
  ('skills-and-retraining', 'Skills & Retraining',
   'retrain training course qualification learn new skills', 30),
  ('jobs-and-careers', 'Jobs & Careers',
   'job work employment career vacancy apply for work', 40),
  ('return-to-work', 'Return to Work',
   'return to work back to work career break after time out', 50),
  ('digital-and-ai', 'Digital & AI',
   'digital ai artificial intelligence tech coding computer online skills', 60),
  ('health-and-wellbeing', 'Health & Wellbeing',
   'health wellbeing mental health wellness support', 70),
  ('womens-health', 'Women''s Health', 'womens health menopause maternity', 80),
  ('social-enterprise', 'Social Enterprise',
   'social enterprise community business not for profit', 90),
  ('community-and-third-sector', 'Community & Third Sector',
   'charity voluntary community group third sector', 100),
  ('new-scots-and-inclusion', 'New Scots & Inclusion',
   'new to scotland refugee asylum migrant inclusion', 110),
  ('carers', 'Carers', 'carer caring looking after someone unpaid care', 120),
  ('leadership-and-networks', 'Leadership & Networks',
   'leadership network mentoring peer support connections', 130),
  ('policy-and-advocacy', 'Policy & Advocacy',
   'policy advocacy campaigning rights influence', 140),
  ('marketplace-and-procurement', 'Marketplace & Procurement',
   'sell contracts procurement tender marketplace customers', 150),
  ('business-infrastructure', 'Business Infrastructure',
   'accounting legal premises admin back office business support', 160),
  ('research-and-innovation', 'Research & Innovation',
   'research innovation evidence data development', 170),
  ('workplace-culture', 'Workplace Culture',
   'workplace culture flexible working discrimination employer', 180),
  ('financial-wellbeing', 'Financial Wellbeing',
   'money worries debt budgeting benefits cost of living', 190),
  ('media-and-visibility', 'Media & Visibility',
   'media visibility publicity marketing profile audience', 200);

-- -----------------------------------------------------------------------------
-- Organisations HWS entered
--
-- Zones were writable only by members, which made an organisation with no
-- members unclassifiable — and therefore invisible on every Discover page.
-- Admins get the same write.
-- -----------------------------------------------------------------------------

create policy org_zones_admin on organisation_zones
  for all using (is_admin()) with check (is_admin());

-- True when nobody holds an account for this organisation. Not a column,
-- because a column would be a second copy of a fact the membership table
-- already holds, and the two would part company the first time somebody was
-- invited.
create function organisation_is_unclaimed(org uuid) returns boolean
  language sql
  stable
  security definer
  set search_path = public
as $fn$
  select not exists (
    select 1 from organisation_members m where m.organisation_id = org
  );
$fn$;

comment on function organisation_is_unclaimed is
  'No account behind this organisation: HWS entered it. Derived rather than '
  'stored, so it stops being true the moment somebody is invited in.';

grant execute on function organisation_is_unclaimed(uuid) to authenticated;

-- -----------------------------------------------------------------------------
-- The public views gain markets
--
-- Rebuilt rather than altered, since a view's column list cannot be extended
-- in place. The allowlist rule stands: everything here is here on purpose,
-- and the test for a new column is "is she meant to see it".
-- -----------------------------------------------------------------------------

drop view if exists public_organisation_profiles;

create view public_organisation_profiles
  with (security_invoker = off) as
  select
    o.id,
    o.name,
    o.types,
    o.place,
    o.blurb,
    o.mission,
    o.unique_offer,
    o.audiences,
    o.audiences_other,
    o.service_kinds,
    o.access_routes,
    o.cost_options,
    o.cost_note,
    o.coverage,
    o.coverage_note,
    o.eligibility,
    -- Deliberately public. It is the field that saves a woman an afternoon.
    o.not_eligible,
    o.availability,
    o.availability_note,
    o.website,
    o.logo_path,
    o.verified_at,
    coalesce(
      (
        select array_agg(m.slug order by m.sort_order)
          from organisation_markets om
          join secondary_markets m on m.id = om.market_id
         where om.organisation_id = o.id
           and m.retired_at is null
      ),
      '{}'::text[]
    ) as market_slugs,
    (
      select count(*)
        from listings l
       where l.organisation_id = o.id
         and l.status = 'live'
         and l.hidden_at is null
    ) as live_listings
  from organisations o
  where o.status = 'verified';

comment on view public_organisation_profiles is
  'One verified organisation as a woman reads it. An allowlist, not a '
  'subtraction: the organisations table holds verification evidence and a '
  'named contact''s phone number, so the test for adding a column here is '
  '"is she meant to see it", never "is it harmless". Unverified organisations '
  'are absent entirely, so their pages 404 rather than existing quietly.';

grant select on public_organisation_profiles to anon, authenticated;

drop view if exists public_organisation_cards;

create view public_organisation_cards
  with (security_invoker = off) as
  select
    o.id,
    o.name,
    o.place,
    o.blurb,
    o.logo_path,
    o.coverage,
    o.service_kinds,
    o.audiences,
    z.zone_id,
    -- 'primary' or 'also'. The zone page leads with the organisations that
    -- called this zone their own.
    z.role,
    (
      select count(*)
        from listings l
       where l.organisation_id = o.id
         and l.status = 'live'
         and l.hidden_at is null
    ) as live_listings
  from organisations o
  join organisation_zones z on z.organisation_id = o.id
  where o.status = 'verified';

comment on view public_organisation_cards is
  'Verified organisations, one row per Access Zone they work in, for the '
  'Discover pages. organisation_zones is member-only, so this view is how a '
  'woman who is not signed in sees who works where.';

grant select on public_organisation_cards to anon, authenticated;

-- -----------------------------------------------------------------------------
-- Organisations as an answer in their own right
--
-- Everything the ranker needs to score one organisation against what a woman
-- typed. One row each, unlike the cards view, and carrying the prose her own
-- words are matched against.
--
-- This exists because the platform could only answer with listings, and half
-- of HWS's map will never post one. A woman who says "I want to retrain"
-- could be shown a course at Fife College but never Fife College.
-- -----------------------------------------------------------------------------

create view public_organisation_search
  with (security_invoker = off) as
  select
    o.id,
    o.name,
    o.place,
    o.blurb,
    o.mission,
    o.unique_offer,
    o.eligibility,
    o.coverage,
    o.audiences,
    o.service_kinds,
    o.access_routes,
    o.logo_path,
    coalesce(
      (
        select array_agg(m.slug order by m.sort_order)
          from organisation_markets om
          join secondary_markets m on m.id = om.market_id
         where om.organisation_id = o.id and m.retired_at is null
      ),
      '{}'::text[]
    ) as market_slugs,
    coalesce(
      (
        select array_agg(z.slug)
          from organisation_zones oz
          join access_zones z on z.id = oz.zone_id
         where oz.organisation_id = o.id and z.retired_at is null
      ),
      '{}'::text[]
    ) as zone_slugs,
    (
      select count(*)
        from listings l
       where l.organisation_id = o.id
         and l.status = 'live'
         and l.hidden_at is null
    ) as live_listings
  from organisations o
  where o.status = 'verified';

comment on view public_organisation_search is
  'Verified organisations with the prose and the slugs the ranker scores '
  'against. Same allowlist discipline as the profile view.';

grant select on public_organisation_search to anon, authenticated;
