-- =============================================================================
-- Grant admin to an existing account.
--
-- Deliberately not a migration. Decision 18 says admin is granted by hand and
-- is never self-assignable: `handle_new_user` resolves any role claimed at
-- sign-up to `woman` unless it is `organisation`. A migration carrying a real
-- address would run itself on every deployment and put that grant in version
-- control, which is the opposite of by hand.
--
-- Run it in the SQL editor, with the address swapped in.
--
-- The account keeps whatever password it already has: the admin portal signs
-- in with email and password, so an organisation account promoted this way
-- can sign in immediately with the credentials it already uses.
--
-- Promoting an organisation account does not remove it from its organisation.
-- It will still appear under "Who can post" there, and it will now also reach
-- the admin tools. If that is not what you want, use a separate address.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. Check who you are about to promote. Run this on its own first.
-- ---------------------------------------------------------------------------

select u.id,
       u.email,
       p.role                as current_role,
       o.name                as organisation,
       u.last_sign_in_at
  from auth.users u
  left join profiles p            on p.id = u.id
  left join organisation_members m on m.user_id = u.id
  left join organisations o        on o.id = m.organisation_id
 where lower(u.email) = lower('you@example.org');   -- <<< the address

-- ---------------------------------------------------------------------------
-- 2. Promote. One row, and it fails loudly rather than quietly doing nothing
--    if the address does not exist.
-- ---------------------------------------------------------------------------

do $$
declare
  target_email text := 'you@example.org';          -- <<< the same address
  target_id    uuid;
begin
  select id into target_id
    from auth.users
   where lower(email) = lower(target_email);

  if target_id is null then
    raise exception 'No account with the address %', target_email;
  end if;

  -- The profile row is created by handle_new_user at sign-up. Upserted here
  -- so this also works for an account that somehow has none.
  insert into profiles (id, role)
  values (target_id, 'admin')
  on conflict (id) do update set role = 'admin';

  raise notice 'Granted admin to % (%)', target_email, target_id;
end;
$$;

-- ---------------------------------------------------------------------------
-- 3. Confirm.
-- ---------------------------------------------------------------------------

select u.email, p.role
  from profiles p
  join auth.users u on u.id = p.id
 where p.role = 'admin'
 order by u.email;

-- ---------------------------------------------------------------------------
-- To take it away again:
--
--   update profiles set role = 'organisation'
--    where id = (select id from auth.users where lower(email) = lower('you@example.org'));
--
-- Use 'woman' instead if the account does not belong to an organisation.
-- ---------------------------------------------------------------------------
