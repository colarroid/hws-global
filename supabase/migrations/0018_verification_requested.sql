-- =============================================================================
-- When an organisation actually asked to be verified.
--
-- Until now an organisation was created `pending` and stayed `pending`, so
-- "made an account ten minutes ago and abandoned it" and "gave us everything
-- and is waiting on us" looked identical in the admin queue. An admin either
-- reviewed half-empty records or learned to ignore the list.
--
-- Finishing onboarding is what asks to be verified, so checking can start
-- while the organisation is still writing its profile. This is the moment
-- they asked. Null means they walked away partway through signing up and
-- there is nothing to review.
-- =============================================================================

alter table organisations add column verification_requested_at timestamptz;

comment on column organisations.verification_requested_at is
  'Set when the organisation finished onboarding, which is what asks for '
  'verification. Null means they never finished signing up and are not in the '
  'queue. Also what the admin queue measures its waiting time from: created_at '
  'measured how long ago the account was made, which is a different question '
  'and not one anybody was asking.';

create index organisations_awaiting_review_idx
  on organisations (verification_requested_at)
  where verification_requested_at is not null;

-- Everyone who submitted under the old rules, where finishing onboarding step
-- 3 was the request. Dated from sign-up, which is the closest thing on record.
update organisations
   set verification_requested_at = created_at
 where contact_name is not null;
