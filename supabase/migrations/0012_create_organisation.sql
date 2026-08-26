-- =============================================================================
-- Let an organisation account create its own organisation.
--
-- 0001 gave `organisations` SELECT and UPDATE for members and ALL for admins,
-- and no INSERT for anyone else. Onboarding step 1 creates the organisation,
-- so it failed for every real sign-up with "new row violates row-level
-- security policy". `organisation_members` had the same gap immediately
-- after, which would have failed next.
--
-- This went unnoticed because the development organisation was seeded with
-- the service role, which bypasses RLS, so the path a real person takes was
-- never exercised.
--
-- A function rather than two permissive INSERT policies. Creating the
-- organisation and joining it are one act: a policy pair can leave an
-- organisation with no members if the second insert fails, and writing a
-- membership policy that inspects organisation_members from inside
-- organisation_members risks recursive evaluation. Here the rules are
-- explicit and the two writes succeed or fail together.
-- =============================================================================

create function create_organisation(
  p_name    text,
  p_type    text,
  p_website text default null,
  p_place   text default null,
  p_blurb   text default null
) returns uuid
  language plpgsql
  security definer
  set search_path = public
as $fn$
declare
  new_id uuid;
begin
  if auth.uid() is null then
    raise exception 'Not signed in';
  end if;

  -- Only an organisation account. A woman's account reaching this would be a
  -- bug elsewhere, and it should stop here rather than quietly succeed.
  if not exists (
    select 1 from profiles
    where id = auth.uid() and role = 'organisation'
  ) then
    raise exception 'This account cannot create an organisation';
  end if;

  -- One organisation per person in the current scope. Colleagues arrive by
  -- invitation, not by making a second organisation with the same name.
  if exists (select 1 from organisation_members where user_id = auth.uid()) then
    raise exception 'This account already belongs to an organisation';
  end if;

  insert into organisations (name, type, website, place, blurb, status)
  values (p_name, p_type, p_website, p_place, p_blurb, 'pending')
  returning id into new_id;

  insert into organisation_members (organisation_id, user_id, role)
  values (new_id, auth.uid(), 'owner');

  return new_id;
end;
$fn$;

comment on function create_organisation is
  'Creates an organisation and makes the caller its owner, atomically. Exists '
  'because organisations and organisation_members have no INSERT policies, '
  'deliberately: this is the only sanctioned way to create one.';

revoke all on function create_organisation(text, text, text, text, text) from public, anon;
grant execute on function create_organisation(text, text, text, text, text) to authenticated;
