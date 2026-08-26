-- =============================================================================
-- Track when an organisation was last asked to re-confirm its listings.
--
-- Six-monthly re-confirmation is one of the three mechanisms holding up the
-- verified stamp. Until now the only prompt was a banner on the dashboard,
-- which asks an organisation to notice something on a page it has no reason
-- to visit. A stale listing damages the organisation and the platform at the
-- same time, so the prompt has to travel to them.
--
-- One column rather than a table: there is nothing to remember here except
-- the last time we asked, and asking again is the whole point.
-- =============================================================================

alter table organisations add column last_recheck_email_at timestamptz;

comment on column organisations.last_recheck_email_at is
  'When the freshness prompt was last emailed. The job leaves at least a '
  'month between asks, so an organisation that ignores one is reminded '
  'again without being harassed weekly.';
