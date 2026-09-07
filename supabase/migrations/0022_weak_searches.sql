-- =============================================================================
-- Widen unmet_searches from "found nothing" to "found nothing good".
--
-- The table only ever recorded a search when both rankers came back empty, so
-- a total failure was captured and a near miss was not. A woman who got three
-- mediocre results looked identical to one who got three perfect ones, which
-- means the one population worth studying, searches the ranking handled
-- badly, was invisible.
--
-- That matters beyond tuning. `rank.ts` scores her sentence by word overlap,
-- capped at 32, and a search that scored only on words and geography is
-- exactly the case a better reading of her sentence would improve. Those rows
-- are the evidence for whether that is worth building, and there was no way
-- to collect them.
--
-- Two columns rather than one, because the threshold is a guess today and
-- should not stay one. Recording the score the search actually reached means
-- the cut-off can be re-derived from real rows later instead of being argued
-- about now.
--
-- Still no user id, and still nothing that could say who searched. The
-- sentences here can be the most private thing a woman types on this
-- platform, and the reason this table is worth having is also the reason it
-- must never become a history of anybody.
-- =============================================================================

alter table unmet_searches
  -- The best score any listing reached. Null when nothing matched at all,
  -- which is the case this table used to record on its own.
  add column if not exists top_score int,
  -- Organisations rank separately and are the second answer on the results
  -- screen, so "nothing open, but three people who can help" is a different
  -- outcome from "nothing at all" and should not read the same here.
  add column if not exists organisation_count int not null default 0;

comment on column unmet_searches.top_score is
  'Score of the first listing she was shown, or null if none matched. Not '
  'quite the maximum: open listings sort above closed ones before score, so '
  'a closed listing can score higher and sit lower. What is shown first is '
  'the number worth keeping. Lets the weak-match threshold be re-derived '
  'from real searches rather than staying the guess it starts as.';

comment on column unmet_searches.organisation_count is
  'Organisations that matched, which rank separately from listings.';

-- The name is now wrong in a way worth saying out loud rather than renaming
-- a table with rows in it: it holds weak searches as well as empty ones.
comment on table unmet_searches is
  'Searches that returned nothing, or nothing that scored well. Evidence for '
  'where provision is thin and where the ranking reads her badly. No user id, '
  'by design, and never to gain one.';
