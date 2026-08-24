-- =============================================================================
-- The read surface a woman searches against.
--
-- 0001 deliberately gave `organisations` no public read policy, because that
-- table holds verification evidence: registration numbers, funder notes, and
-- a contact phone number the organisation was promised is "only used by us,
-- and never shown to women using the platform".
--
-- The comment there said a woman reaches organisation details through a live
-- listing, "served by a view rather than direct table access". This is that
-- view, which was missing. Without it the organisation join returned null for
-- anonymous readers and every result card lost the organisation's name, which
-- is the thing that makes a listing trustworthy in the first place.
--
-- Postgres RLS cannot restrict columns, only rows. So the boundary is drawn
-- here instead: this view names the safe columns explicitly and nothing else
-- can be selected through it.
-- =============================================================================

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
    l.last_confirmed_at,
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
  where l.status = 'live'
  group by l.id, o.name, o.place;

comment on view public_listing_cards is
  'Live listings joined to the two organisation columns women are allowed to '
  'see. security_invoker is off deliberately: the view owner reads through '
  'the organisations RLS policy, and the column list is what keeps '
  'verification evidence out. Do not add columns without checking that a '
  'woman is meant to see them.';

-- Searching requires no account, so anon reads this too.
grant select on public_listing_cards to anon, authenticated;
