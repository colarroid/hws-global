-- =============================================================================
-- One account can be both a woman and an organisation.
--
-- WHAT HAPPENED. A loans officer at NatWest Social & Community Capital was
-- sent the main site, typed her work address into the sign-in box, and got a
-- code. That box creates the account, so hers was stamped `role = 'woman'` a
-- tenth of a second later. A fortnight on she went to register her
-- organisation, filled in the form, pressed save, and the database told her
-- "This account cannot create an organisation" — a sentence she could do
-- nothing about, at the end of the work rather than the start. Her role had
-- been decided at first touch by a box that was only trying to email her a
-- code, and nothing had reconsidered it since.
--
-- HWS also asked for this directly, and for a better reason than unblocking
-- one person: somebody who lists a service wants to search for it the way a
-- woman would, and needing a second email address to look at your own listing
-- is a daft thing to ask of the people whose content the platform is made of.
--
-- WHY THIS IS A SMALL CHANGE, which was worth checking before making it.
-- `role` gates four things in the whole schema: is_admin(), this function,
-- the older copy of it in 0012, and the invitation flow. Nothing anywhere
-- requires `role = 'woman'` — not saving, not reminders, not search. So the
-- column never really said what a person is allowed to do; it said which door
-- they came in by, and then one function treated that as a permission.
--
-- The precedent is already here. Accepting a colleague's invitation runs
-- `update profiles set role = 'organisation' ... where role <> 'admin'`,
-- described in 0014 as "a promotion from woman, never to admin". A woman who
-- is invited into an organisation has been allowed to become one since
-- September. This does the same thing for a woman who starts one herself,
-- which is the same event arriving by a different door.
--
-- WHAT STILL REFUSES. One organisation per person, unchanged: colleagues
-- arrive by invitation rather than by making a second entry with the same
-- name. Admins keep their role rather than being demoted into an
-- organisation. And nobody signed out gets anywhere.
-- =============================================================================

create or replace function create_organisation(
  p_name    text,
  p_types   text[],
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

  -- One organisation per person. Colleagues arrive by invitation, not by
  -- making a second organisation with the same name.
  if exists (select 1 from organisation_members where user_id = auth.uid()) then
    raise exception 'This account already belongs to an organisation';
  end if;

  insert into organisations (name, types, website, place, blurb, status)
  values (p_name, p_types, p_website, p_place, p_blurb, 'pending')
  returning id into new_id;

  insert into organisation_members (organisation_id, user_id, role)
  values (new_id, auth.uid(), 'owner');

  -- Starting an organisation makes you an organisation account, exactly as
  -- accepting an invitation does, and by the same rule: never an admin, who
  -- keeps the role that lets them into the admin tool.
  --
  -- It takes nothing away. Her saved list, her reminders and her searches are
  -- keyed on her id and not on this column, so the same person keeps using
  -- the women's side with the same account — which is the point of the
  -- change rather than a side effect of it.
  update profiles
     set role = 'organisation'
   where id = auth.uid() and role <> 'admin';

  return new_id;
end;
$fn$;

comment on function create_organisation is
  'Creates an organisation and makes the caller its owner in one statement. '
  'Any signed-in account may call it: a woman who lists a service keeps one '
  'account for both sides, and being stamped woman by the sign-in box no '
  'longer locks somebody out of registering. See migration 0026.';
