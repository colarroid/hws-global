-- =============================================================================
-- The read surface for the service detail page.
--
-- A second view rather than a change to public_listing_cards, deliberately.
-- Replacing that one would have meant the deployed site broke in the window
-- between the code shipping and this migration running, and it would have
-- meant closed listings briefly ranking if the two landed the other way
-- round. Two views, two purposes, no ordering hazard:
--
--   public_listing_cards  live only, what the ranker scores
--   public_service_pages  live and closed, what she reads
--
-- Closed listings belong here because a saved item never silently
-- disappears. When a deadline passes the listing stays reachable, marked
-- closed, with a route to ask when the next one runs.
--
-- The organisation's one-line description and website are exposed alongside.
-- Both are things a woman is meant to see: the description is collected on
-- onboarding step 1 as "what women see next to every solution you post", and
-- the website is where she goes to apply. Verification evidence stays out,
-- which is the whole reason these views exist instead of table access.
-- =============================================================================

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
  'columns without checking that a woman is meant to see them. Never rank '
  'from this view; it contains closed listings. Use public_listing_cards.';

grant select on public_service_pages to anon, authenticated;
