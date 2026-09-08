-- -----------------------------------------------------------------------------
-- listing_stats: give it the access control every other view already has.
--
-- This view was written in 0001, before the pattern the rest of the platform
-- follows. It aggregates listing_events, which is deliberately unreadable —
-- the table has RLS on and a select policy of `is_admin()` only. But a view
-- runs as its owner unless told otherwise, and this one was never told, so it
-- read straight through that policy and had no `where` clause of its own to
-- replace it.
--
-- Supabase's default privileges on the public schema then granted select to
-- anon, so the figures were readable with the key that ships in the browser:
-- every listing on the platform, with its views, saves and clickthroughs,
-- available to anybody including the organisations competing with it. Nothing
-- personal — listing_events carries no user id by design — but an
-- organisation's performance is its own business, and a funder-facing number
-- that any rival can read is not a number HWS should be publishing.
--
-- organisation_stats in 0019 already solved this exact problem, and its
-- comment says why the `where` clause must stay. This applies the same
-- treatment one level down.
--
-- security_invoker stays off for the same reason it is off there: the events
-- table has to stay unreadable, so the view owner does the reading and the
-- `where` clause does the job RLS would otherwise do. Removing that clause
-- republishes every organisation's figures.
--
-- No application change is needed. All three callers already pass an explicit
-- list of listing ids they are entitled to, so the clause only removes rows
-- they were never supposed to receive.
-- -----------------------------------------------------------------------------

drop view if exists listing_stats;

create view listing_stats
  with (security_invoker = off) as
  select
    e.listing_id,
    count(*) filter (where e.kind = 'view')         as views,
    count(*) filter (where e.kind = 'save')         as saves,
    count(*) filter (where e.kind = 'clickthrough') as clickthroughs
  from listing_events e
  join listings l on l.id = e.listing_id
  where is_org_member(l.organisation_id) or is_admin()
  group by e.listing_id;

comment on view listing_stats is
  'Per-listing figures for the organisation that owns the listing, and for '
  'admins. security_invoker is off because listing_events is unreadable by '
  'design, so the where clause is the whole access control. Removing it '
  'would publish every listing''s figures to anyone holding the anon key.';

-- Recreating the view re-applies the schema's default privileges, which on
-- Supabase include anon. Revoke first, then grant only what is needed: a
-- signed-out visitor has no listing of her own and no reason to read these.
revoke all on listing_stats from public;
revoke all on listing_stats from anon;
grant select on listing_stats to authenticated;
