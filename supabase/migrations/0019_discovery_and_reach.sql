-- =============================================================================
-- Organisations become findable, and the figures start meaning something.
--
-- Two things arrive together because they are the same thing seen from both
-- ends. A woman can now browse organisations by Access Zone and read one's
-- profile, and an organisation can see how many women that reached.
--
-- The dangerous part is the profile view. `organisations` holds verification
-- evidence — registration numbers, funder notes, a named contact and their
-- phone number, and whatever an admin wrote when declining. None of that is
-- a woman's business, and the table is one join away from every public page.
-- So the view below is an allowlist, written out column by column, and the
-- test for adding one is not "is it harmless" but "is she meant to see it".
-- =============================================================================

-- -----------------------------------------------------------------------------
-- Profile visits
-- -----------------------------------------------------------------------------

create type organisation_event_kind as enum ('profile_view');

-- Shaped exactly like listing_events, and for the same reason: an id, a kind
-- and a date. No user id, no session id, nothing that could reassemble one
-- woman's path. What she looks at here is frequently sensitive and the brief
-- rules out building a behavioural profile around it.
create table organisation_events (
  id              bigint generated always as identity primary key,
  organisation_id uuid not null references organisations (id) on delete cascade,
  kind            organisation_event_kind not null,
  occurred_on     date not null default current_date
);

create index organisation_events_org_idx
  on organisation_events (organisation_id, occurred_on);

alter table organisation_events enable row level security;

-- Anyone may record one; nobody may read the rows back. The organisation sees
-- counts through the view below, which is the only shape these are useful in.
create policy organisation_events_insert on organisation_events
  for insert with check (true);

create policy organisation_events_admin_read on organisation_events
  for select using (is_admin());

-- -----------------------------------------------------------------------------
-- What an organisation sees on its overview
--
-- Weeks and months are calendar ones, not rolling windows, because the screen
-- says "this week" and "this month". A rolling seven days answers a question
-- nobody asked and makes Monday's figure smaller than Sunday's for no reason
-- anybody can see.
--
-- security_invoker stays off, because the event tables are deliberately
-- unreadable to an organisation. The `where` clause is what does the job RLS
-- would otherwise do, and it must stay: without it this view would hand every
-- signed-in account every organisation's figures.
-- -----------------------------------------------------------------------------

create view organisation_stats
  with (security_invoker = off) as
  with reach as (
    select
      l.organisation_id,
      count(*) filter (where e.kind = 'clickthrough') as all_time,
      count(*) filter (
        where e.kind = 'clickthrough'
          and e.occurred_on >= date_trunc('week', current_date)::date
      ) as this_week,
      count(*) filter (
        where e.kind = 'clickthrough'
          and e.occurred_on >= date_trunc('month', current_date)::date
      ) as this_month
    from listing_events e
    join listings l on l.id = e.listing_id
    group by l.organisation_id
  ),
  seen as (
    select
      l.organisation_id,
      count(*) filter (where e.kind = 'view') as all_time,
      count(*) filter (
        where e.kind = 'view'
          and e.occurred_on >= date_trunc('week', current_date)::date
      ) as this_week,
      count(*) filter (
        where e.kind = 'view'
          and e.occurred_on >= date_trunc('month', current_date)::date
      ) as this_month
    from listing_events e
    join listings l on l.id = e.listing_id
    group by l.organisation_id
  ),
  profile as (
    select
      organisation_id,
      count(*) as all_time,
      count(*) filter (
        where occurred_on >= date_trunc('week', current_date)::date
      ) as this_week,
      count(*) filter (
        where occurred_on >= date_trunc('month', current_date)::date
      ) as this_month
    from organisation_events
    where kind = 'profile_view'
    group by organisation_id
  )
  select
    o.id as organisation_id,
    coalesce(r.all_time,   0) as reached_all,
    coalesce(r.this_week,  0) as reached_week,
    coalesce(r.this_month, 0) as reached_month,
    coalesce(s.all_time,   0) as seen_all,
    coalesce(s.this_week,  0) as seen_week,
    coalesce(s.this_month, 0) as seen_month,
    coalesce(p.all_time,   0) as profile_views_all,
    coalesce(p.this_week,  0) as profile_views_week,
    coalesce(p.this_month, 0) as profile_views_month
  from organisations o
  left join reach   r on r.organisation_id = o.id
  left join seen    s on s.organisation_id = o.id
  left join profile p on p.organisation_id = o.id
  where is_org_member(o.id) or is_admin();

comment on view organisation_stats is
  'One row of figures per organisation, for its own overview. Reached counts '
  'clickthroughs: a woman who went on to the organisation. security_invoker '
  'is off because the event tables are unreadable by design, so the where '
  'clause is the whole access control. Removing it would publish every '
  'organisation''s figures to every signed-in account.';

grant select on organisation_stats to authenticated;

-- -----------------------------------------------------------------------------
-- The public profile
--
-- An allowlist. Everything omitted is omitted on purpose: registration_number,
-- funder_note, contact_name, contact_role, contact_phone, review_note, status,
-- verified_by, posting_frequency, and every timestamp about the review itself.
-- -----------------------------------------------------------------------------

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

-- -----------------------------------------------------------------------------
-- Browsing by Access Zone
--
-- One row per organisation per zone, which is the shape the zone page wants.
-- Carries only what a card shows, so the profile view above stays the one
-- place with the full picture and there is one list of columns to check.
-- -----------------------------------------------------------------------------

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
