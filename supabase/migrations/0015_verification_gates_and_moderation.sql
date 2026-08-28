-- =============================================================================
-- Trust moves from the listing to the organisation.
--
-- Until now every listing was reviewed before it could go live, and an
-- unverified organisation could still draft and submit. That is reversed
-- here, by decision:
--
--   * An organisation that is not verified cannot create a listing at all,
--     and cannot invite anyone. Verification is the gate, and it is now a
--     real one rather than a gate on publishing only.
--   * A verified organisation publishes without waiting for anyone. Its
--     listings are moderated after the fact rather than approved before it.
--
-- The verified stamp still means something, because it is now the thing
-- being checked. What changes is when the checking happens.
--
-- Moderation is a hide, not a delete. A listing an admin takes down stays in
-- the organisation's own dashboard with the reason on it, so they can see
-- what happened and fix it, and a deletion cannot be mistaken for a bug.
-- =============================================================================

-- -----------------------------------------------------------------------------
-- Hiding a listing from women
-- -----------------------------------------------------------------------------

-- The review log is append-only and every action is on it, so a takedown
-- needs somewhere to be recorded.
--
-- Safe inside the migration's transaction: Postgres only forbids *using* a
-- new enum value in the transaction that added it, and nothing here writes
-- one. The app does, long afterwards.
alter type review_action add value if not exists 'hidden';
alter type review_action add value if not exists 'unhidden';

alter table listings
  add column hidden_at     timestamptz,
  add column hidden_by     uuid references profiles (id) on delete set null,
  add column hidden_reason text;

comment on column listings.hidden_at is
  'Set by an admin moderating after publication. A hidden listing is gone '
  'from every woman-facing surface but still visible to its own organisation, '
  'with the reason, so being taken down is legible rather than mysterious.';

create index listings_hidden_idx on listings (hidden_at) where hidden_at is not null;

-- -----------------------------------------------------------------------------
-- Both public views drop hidden listings
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
    o.name  as organisation_name,
    o.place as organisation_place,
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
  group by l.id, o.name, o.place;

comment on view public_listing_cards is
  'Live and closed listings that no admin has hidden, joined to the two '
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
    o.name    as organisation_name,
    o.place   as organisation_place,
    o.blurb   as organisation_blurb,
    o.website as organisation_website,
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
  group by l.id, o.name, o.place, o.blurb, o.website;

comment on view public_service_pages is
  'One service as a woman reads it, live or closed, and never one an admin '
  'has hidden. A hidden listing 404s here rather than showing an empty page, '
  'which is the honest outcome: it is not currently offered. security_invoker '
  'is off deliberately, and the column list is what keeps verification '
  'evidence out.';

grant select on public_service_pages to anon, authenticated;

-- -----------------------------------------------------------------------------
-- Verification becomes the gate
-- -----------------------------------------------------------------------------

create function is_verified_org_member(org uuid) returns boolean
  language sql
  stable
  security definer
  set search_path = public
as $fn$
  select exists (
    select 1
      from organisation_members m
      join organisations o on o.id = m.organisation_id
     where m.organisation_id = org
       and m.user_id = auth.uid()
       and o.status = 'verified'
  );
$fn$;

comment on function is_verified_org_member is
  'Membership of an organisation HWS has verified. The gate on creating '
  'listings and inviting colleagues, enforced here rather than only in the '
  'portal so it holds against anything holding an anon key.';

grant execute on function is_verified_org_member(uuid) to authenticated;

-- Creating a listing now needs a verified organisation. Updating one does
-- not: an organisation that was verified and later had it withdrawn should
-- still be able to correct what is already published, and a draft written
-- before verification is not lost.
drop policy if exists listings_member_write on listings;

create policy listings_member_read on listings for select
  using (is_org_member(organisation_id));

create policy listings_member_create on listings for insert
  with check (is_verified_org_member(organisation_id));

create policy listings_member_update on listings for update
  using (is_org_member(organisation_id))
  with check (is_org_member(organisation_id));

create policy listings_member_delete on listings for delete
  using (is_org_member(organisation_id));

-- Inviting a colleague needs the same. An unverified organisation cannot
-- grow itself before anyone has checked that it is what it says it is.
drop policy if exists invitations_member_write on organisation_invitations;

create policy invitations_member_write on organisation_invitations
  for insert with check (is_verified_org_member(organisation_id));
