-- =============================================================================
-- What an organisation is, beyond its name.
--
-- The platform matches a woman on five things: need, location, situation,
-- eligibility and how she can reach something. Until now it knew all five per
-- listing and almost nothing about the organisation behind them, so it could
-- not say who an organisation serves, how far it reaches, or how often it
-- shows up. An admin verifying one was reading a name and a sentence.
--
-- This is the profile that fixes that. It sits after onboarding rather than
-- inside it: onboarding stays three short steps, and this is where the real
-- picture is filled in.
--
-- Everything here is nullable. A half-finished profile is a normal state,
-- not an error, and the portal saves section by section.
-- =============================================================================

alter table organisations
  -- Mission and offer
  add column mission          text,
  add column unique_offer     text,
  add column audiences        text[] not null default '{}',
  add column audiences_other  text,

  -- What they provide
  add column service_kinds    text[] not null default '{}',
  add column access_routes    text[] not null default '{}',
  add column cost_options     text[] not null default '{}',
  add column cost_note        text,

  -- Eligibility and coverage
  add column coverage         text,
  add column coverage_note    text,
  add column eligibility      text,
  add column not_eligible     text,

  -- Availability and rhythm
  add column posting_frequency text,
  add column availability      text,
  add column availability_note text,

  -- Logo. A path in the organisation-logos bucket, never a remote URL: an
  -- organisation's icon fetched from their own site would vanish the day
  -- they redesign it, and hotlinking makes every listing depend on somebody
  -- else's server staying up.
  add column logo_path        text,
  -- 'fetched' or 'uploaded'. Worth knowing, because a fetched favicon is
  -- often 32px and an admin looking at a poor logo should be able to tell
  -- whether the organisation chose it.
  add column logo_source      text,

  -- Set when the organisation last saved the profile with the fields that
  -- matter filled in. Drives the prompt on their dashboard and the
  -- completeness signal an admin sees before verifying.
  add column profile_updated_at timestamptz;

-- -----------------------------------------------------------------------------
-- Vocabularies
--
-- Labels live in src/lib/design/taxonomy.ts in all three apps. These
-- constraints and that file have to change together.
-- -----------------------------------------------------------------------------

alter table organisations
  add constraint organisations_audiences_known check (
    audiences <@ array[
      'any_woman', 'women_returning_to_work', 'carers', 'single_parents',
      'survivors_of_abuse', 'refugees_and_new_scots', 'disabled_women',
      'women_on_low_income', 'young_women', 'women_over_50',
      'women_leaving_prison'
    ]::text[]
  ),
  add constraint organisations_service_kinds_known check (
    service_kinds <@ array[
      'course_or_programme', 'grant_or_fund', 'advice_or_one_to_one',
      'drop_in', 'event', 'mentoring'
    ]::text[]
  ),
  add constraint organisations_access_routes_known check (
    access_routes <@ array[
      'in_person', 'online', 'by_phone', 'evenings_or_weekends'
    ]::text[]
  ),
  add constraint organisations_cost_options_known check (
    cost_options <@ array['free', 'free_to_apply', 'there_is_a_cost']::text[]
  ),
  add constraint organisations_coverage_known check (
    coverage is null or coverage in (
      'one_area', 'local_authority', 'several_areas',
      'scotland_wide', 'online_only'
    )
  ),
  add constraint organisations_posting_frequency_known check (
    posting_frequency is null or posting_frequency in (
      'weekly', 'monthly', 'quarterly', 'few_times_a_year',
      'when_funding_allows'
    )
  ),
  add constraint organisations_availability_known check (
    availability is null or availability in (
      'year_round', 'term_time', 'seasonal', 'funding_dependent'
    )
  ),
  add constraint organisations_logo_source_known check (
    logo_source is null or logo_source in ('fetched', 'uploaded')
  );

comment on column organisations.audiences is
  'Who this organisation says it is set up to serve. Context for an admin '
  'and for the organisation page; the per-woman matching is done from '
  'situations on each listing, not from this.';

comment on column organisations.posting_frequency is
  'How often they expect to post. Not a promise and not enforced: it is what '
  'lets the freshness reminders keep a different rhythm for an organisation '
  'that posts when funding allows than for one that posts most weeks.';

comment on column organisations.logo_path is
  'Object path in the organisation-logos bucket. Never a remote URL.';

-- -----------------------------------------------------------------------------
-- The logo bucket
--
-- Public read, because a logo appears beside a listing to a woman who may not
-- be signed in. Writes are restricted to members of the organisation the
-- first path segment names, so one organisation cannot overwrite another's.
-- -----------------------------------------------------------------------------

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'organisation-logos',
  'organisation-logos',
  true,
  524288,  -- 512 KB. A logo larger than this is a photograph by mistake.
  array['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml', 'image/x-icon', 'image/vnd.microsoft.icon']
)
on conflict (id) do nothing;

create policy organisation_logos_read on storage.objects
  for select using (bucket_id = 'organisation-logos');

create policy organisation_logos_write on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'organisation-logos'
    and is_org_member((storage.foldername(name))[1]::uuid)
  );

create policy organisation_logos_update on storage.objects
  for update to authenticated
  using (
    bucket_id = 'organisation-logos'
    and is_org_member((storage.foldername(name))[1]::uuid)
  );

create policy organisation_logos_delete on storage.objects
  for delete to authenticated
  using (
    bucket_id = 'organisation-logos'
    and is_org_member((storage.foldername(name))[1]::uuid)
  );

-- -----------------------------------------------------------------------------
-- The logo reaches women; nothing else here does
--
-- Both views are rebuilt to carry one extra column. The rest of the profile
-- stays on the private table: it is verification context and an organisation's
-- own words about itself, not something a woman needs while deciding whether
-- one listing is worth her afternoon.
-- -----------------------------------------------------------------------------

drop view if exists public_listing_cards;

create view public_listing_cards
  with (security_invoker = off) as
  select
    l.id,
    l.name,
    l.kind,
    l.blurb,
    l.who_for,
    l.what_to_expect,
    l.cost,
    l.formats,
    l.place,
    l.deadline,
    l.apply_url,
    l.status,
    l.last_confirmed_at,
    l.updated_at,
    l.organisation_id,
    o.name      as organisation_name,
    o.place     as organisation_place,
    o.logo_path as organisation_logo_path,
    coalesce(
      array_agg(s.slug) filter (where s.slug is not null),
      '{}'::text[]
    ) as situation_slugs
  from listings l
  join organisations o on o.id = l.organisation_id
  left join listing_situations ls on ls.listing_id = l.id
  left join situations s on s.id = ls.situation_id and s.retired_at is null
  where l.status in ('live', 'closed')
    and l.hidden_at is null
  group by l.id, o.name, o.place, o.logo_path;

comment on view public_listing_cards is
  'Live and closed listings that no admin has hidden, joined to the three '
  'organisation columns women are allowed to see. Closed ones are here so a '
  'saved or linked listing stays reachable and honest rather than vanishing; '
  'the ranker is what keeps them from competing with anything still open. '
  'security_invoker is off deliberately: the view owner reads through the '
  'organisations RLS policy, and the column list is what keeps verification '
  'evidence out. Do not add columns without checking that a woman is meant to '
  'see them.';

grant select on public_listing_cards to anon, authenticated;

drop view if exists public_service_pages;

create view public_service_pages
  with (security_invoker = off) as
  select
    l.id,
    l.name,
    l.kind,
    l.blurb,
    l.who_for,
    l.what_to_expect,
    l.cost,
    l.formats,
    l.place,
    l.deadline,
    l.apply_url,
    l.last_confirmed_at,
    l.updated_at,
    l.status,
    l.organisation_id,
    o.name      as organisation_name,
    o.place     as organisation_place,
    o.blurb     as organisation_blurb,
    o.website   as organisation_website,
    o.logo_path as organisation_logo_path,
    coalesce(
      array_agg(s.slug) filter (where s.slug is not null),
      '{}'::text[]
    ) as situation_slugs
  from listings l
  join organisations o on o.id = l.organisation_id
  left join listing_situations ls on ls.listing_id = l.id
  left join situations s on s.id = ls.situation_id and s.retired_at is null
  where l.status in ('live', 'closed')
    and l.hidden_at is null
  group by l.id, o.name, o.place, o.blurb, o.website, o.logo_path;

comment on view public_service_pages is
  'One service as a woman reads it, live or closed, and never one an admin '
  'has hidden. A hidden listing 404s here rather than showing an empty page, '
  'which is the honest outcome: it is not currently offered. security_invoker '
  'is off deliberately, and the column list is what keeps verification '
  'evidence out.';

grant select on public_service_pages to anon, authenticated;
