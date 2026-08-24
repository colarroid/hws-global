-- =============================================================================
-- Let organisations write the review actions that are theirs.
--
-- 0001 gave organisation members SELECT on listing_reviews and gave admins
-- ALL, which left no INSERT path for a member. Two things an organisation
-- does are audit events it must be able to record itself:
--
--   submitted    pressing "Submit for review" on the preview screen
--   reconfirmed  pressing "Still accurate" on the dashboard freshness banner
--
-- Without this the row was silently dropped by RLS: the listing's
-- last_confirmed_at updated, the banner cleared, and nothing was recorded.
-- Six-monthly re-confirmation is one of the three mechanisms holding up the
-- verified stamp, so an unevidenced confirmation is worse than none.
--
-- The remaining actions (approved, changes_requested, edited, closed,
-- reopened) stay admin-only, because they are HWS's judgements about the
-- listing and an organisation must not be able to assert them about itself.
-- =============================================================================

create policy listing_reviews_member_insert on listing_reviews for insert
  with check (
    action in ('submitted', 'reconfirmed')
    and actor_id = auth.uid()
    and exists (
      select 1 from listings l
      where l.id = listing_id
        and is_org_member(l.organisation_id)
    )
  );
