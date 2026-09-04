-- =============================================================================
-- An organisation is allowed to be more than one thing.
--
-- `type` was a single slug, which forced a choice that is often false: a
-- social enterprise is frequently also a charity, and a college runs a
-- business arm. Making an organisation pick one meant the wrong label sat
-- beside it in the admin tools, and made the answer noise rather than signal.
--
-- The column becomes an array. Existing rows carry their single answer over,
-- so nothing is lost and nobody has to re-answer.
-- =============================================================================

alter table organisations add column types text[];

update organisations set types = array[type];

alter table organisations
  alter column types set not null,
  -- At least one, and every entry a slug the app knows. Unlike zones this
  -- list is not admin-editable, so a check constraint is still correct.
  add constraint organisations_types_known check (
    array_length(types, 1) between 1 and 6
    and types <@ array[
      'charity', 'social_enterprise', 'public_body',
      'business', 'network_or_group', 'college_or_university'
    ]::text[]
  );

comment on column organisations.types is
  'What kind of organisation this is, one or more. Labels live in '
  'src/lib/design/taxonomy.ts. Never shown to women: it is context for an '
  'admin deciding whether to verify.';

-- The old single column would otherwise drift out of date the first time an
-- organisation edited its answers, and a stale duplicate of the truth is
-- worse than no duplicate.
alter table organisations drop column type;

-- -----------------------------------------------------------------------------
-- Creating an organisation now takes the array
-- -----------------------------------------------------------------------------

-- Dropped rather than replaced: the argument type changes, so `create or
-- replace` would leave the old signature behind as a second overload that
-- still writes the column that no longer exists.
drop function if exists create_organisation(text, text, text, text, text);

create function create_organisation(
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

  insert into organisations (name, types, website, place, blurb, status)
  values (p_name, p_types, p_website, p_place, p_blurb, 'pending')
  returning id into new_id;

  insert into organisation_members (organisation_id, user_id, role)
  values (new_id, auth.uid(), 'owner');

  return new_id;
end;
$fn$;

comment on function create_organisation is
  'Creates an organisation and makes the caller its owner in one statement. '
  'Two separate inserts can half succeed, leaving an organisation nobody '
  'belongs to and therefore nobody can reach. See migration 0012.';

revoke execute on function create_organisation(text, text[], text, text, text)
  from public, anon;
grant execute on function create_organisation(text, text[], text, text, text)
  to authenticated;
