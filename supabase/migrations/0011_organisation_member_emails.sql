-- =============================================================================
-- Let an admin reach the people who can act on a review decision.
--
-- Telling an organisation its listing was published, or needs changes, means
-- emailing its members. Those addresses live in auth.users, which no ordinary
-- session can read, and the obvious shortcut is to put the service role key
-- into the admin deployment. That key bypasses RLS entirely: anyone who
-- obtained it could read every organisation's verification evidence and every
-- woman's saved list.
--
-- So the capability is narrowed to exactly this instead. Security definer, one
-- organisation at a time, addresses only, and gated on is_admin() inside the
-- body so a non-admin calling it directly gets no rows rather than an error
-- that tells them the function is worth attacking.
-- =============================================================================

create function organisation_member_emails(org uuid)
  returns table (email text)
  language sql
  stable
  security definer
  set search_path = public, auth
as $fn$
  select u.email::text
  from organisation_members m
  join auth.users u on u.id = m.user_id
  where m.organisation_id = org
    and u.email is not null
    and is_admin();
$fn$;

comment on function organisation_member_emails(uuid) is
  'Member email addresses for one organisation, for admins only. Exists so '
  'the admin deployment never needs the service role key. The is_admin() '
  'check is inside the body: do not remove it.';

revoke all on function organisation_member_emails(uuid) from public, anon;
grant execute on function organisation_member_emails(uuid) to authenticated;
