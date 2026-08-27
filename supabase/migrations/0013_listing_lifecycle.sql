-- =============================================================================
-- The end of a listing's life.
--
-- A deadline is a promise about a date, so when it passes the listing closes
-- itself. The organisation is not asked to confirm: they already said so by
-- giving us the date, and asking again turns a fact into a chore. Extending
-- is editing the deadline, which is where they would go anyway.
--
-- Closed listings stay findable. A woman who saved something, or who arrives
-- from a search engine months later, should meet the thing marked "Closed"
-- with an honest date on it rather than a 404. The ranker drops them far down
-- rather than filtering them out, so they can never crowd out something she
-- can still act on.
--
-- `updated_at` joins the card so she can see when the organisation last
-- changed what it says, which is a different promise from "last confirmed".
-- =============================================================================

-- -----------------------------------------------------------------------------
-- Close what has expired
-- -----------------------------------------------------------------------------

create function close_expired_listings() returns integer
  language plpgsql
  security definer
  set search_path = public
as $fn$
declare
  closed_count integer;
begin
  -- `deadline < current_date` and not `<=`: a listing closing on the 31st is
  -- open all of the 31st. Dates here are plain dates, so this is the whole
  -- day in whatever timezone the reader is in, which is the generous reading
  -- and the right one.
  with expired as (
    update listings
       set status    = 'closed',
           closed_at = now()
     where status   = 'live'
       and deadline is not null
       and deadline < current_date
    returning 1
  )
  select count(*) into closed_count from expired;

  return closed_count;
end;
$fn$;

comment on function close_expired_listings is
  'Flips live listings past their deadline to closed. Idempotent, so the cron '
  'can run as often as it likes. Security definer because the cron runs with '
  'no session and listings are otherwise writable only by their own '
  'organisation.';

revoke execute on function close_expired_listings() from public, anon, authenticated;

-- -----------------------------------------------------------------------------
-- Closed listings become visible to search
-- -----------------------------------------------------------------------------

-- Dropped rather than replaced: `create or replace view` cannot add a column
-- anywhere except the end, and status belongs beside the rest of the card.
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
  group by l.id, o.name, o.place;

comment on view public_listing_cards is
  'Live and closed listings joined to the two organisation columns women are '
  'allowed to see. Closed ones are here so a saved or linked listing stays '
  'reachable and honest rather than vanishing; the ranker is what keeps them '
  'from competing with anything still open. security_invoker is off '
  'deliberately: the view owner reads through the organisations RLS policy, '
  'and the column list is what keeps verification evidence out. Do not add '
  'columns without checking that a woman is meant to see them.';

-- Searching requires no account, so anon reads this too.
grant select on public_listing_cards to anon, authenticated;

-- -----------------------------------------------------------------------------
-- The service page carries the same date
-- -----------------------------------------------------------------------------

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
  group by l.id, o.name, o.place, o.blurb, o.website;

comment on view public_service_pages is
  'One service as a woman reads it, live or closed. security_invoker is off '
  'deliberately: the view owner reads through the organisations RLS policy, '
  'and the column list is what keeps verification evidence out. Do not add '
  'columns without checking that a woman is meant to see them. Both views now '
  'carry closed listings; what separates them is that this one is a single '
  'service by id and the other is the set the ranker reads.';

grant select on public_service_pages to anon, authenticated;
