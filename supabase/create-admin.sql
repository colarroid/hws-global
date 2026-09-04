-- =============================================================================
-- Create an admin account from nothing.
--
-- The sibling of grant-admin.sql. That one promotes somebody who already has
-- an account; this makes the account too, for a staff address that has never
-- signed up. Same rule behind both: admin is granted by hand and is never
-- self-assignable. `handle_new_user` resolves any role claimed at sign-up to
-- `woman` unless it is `organisation`, so the promotion below is the only way
-- the role is ever set.
--
-- Deliberately not a migration, and deliberately not committed with a real
-- password in it. Fill the two values in, run it in the SQL editor, and do
-- not save the filled-in copy anywhere.
--
-- Writing straight into auth.users is doing GoTrue's job by hand, so three
-- things have to be right or the account exists and cannot sign in:
--
--   * encrypted_password must be a bcrypt hash. pgcrypto is already installed
--     by migration 0001, so crypt(..., gen_salt('bf')) is available.
--   * email_confirmed_at must be set. An unconfirmed account is refused at
--     sign-in, and there is no confirmation mail to click on this path.
--   * a row in auth.identities must exist. Current GoTrue looks the identity
--     up on password sign-in and fails without one, which is the single most
--     common reason a hand-made account bounces with "invalid credentials".
--
-- The Supabase dashboard does all of this for you under Authentication ->
-- Users -> Add user, with Auto Confirm ticked. Prefer that where you can.
-- =============================================================================

do $$
declare
  -- <<< the two values, and the only two lines to change
  target_email text := 'admin@example.org';
  target_pass  text := 'change-me-before-running';

  new_id uuid := gen_random_uuid();
begin
  if exists (select 1 from auth.users where lower(email) = lower(target_email)) then
    raise exception
      'An account already exists for %. Use grant-admin.sql to promote it instead.',
      target_email;
  end if;

  if length(target_pass) < 12 then
    raise exception
      'Use a longer password. This account can read every organisation''s '
      'verification evidence and a named contact''s phone number.';
  end if;

  insert into auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    -- Confirmed on creation. There is no email to click on this path, and an
    -- unconfirmed account is refused at sign-in.
    email_confirmed_at,
    raw_app_meta_data,
    -- Empty on purpose. handle_new_user reads `role` out of here, and
    -- anything it found would be ignored anyway: only 'organisation' is
    -- self-assignable, so this account is created `woman` and promoted below.
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    recovery_token,
    email_change,
    email_change_token_new
  )
  values (
    '00000000-0000-0000-0000-000000000000',
    new_id,
    'authenticated',
    'authenticated',
    lower(target_email),
    crypt(target_pass, gen_salt('bf')),
    now(),
    '{"provider":"email","providers":["email"]}'::jsonb,
    '{}'::jsonb,
    now(),
    now(),
    '', '', '', ''
  );

  -- Without this the account exists and every sign-in is rejected.
  insert into auth.identities (
    id,
    user_id,
    identity_data,
    provider,
    provider_id,
    last_sign_in_at,
    created_at,
    updated_at
  )
  values (
    gen_random_uuid(),
    new_id,
    jsonb_build_object(
      'sub', new_id::text,
      'email', lower(target_email),
      'email_verified', true,
      'phone_verified', false
    ),
    'email',
    new_id::text,
    null,
    now(),
    now()
  );

  -- handle_new_user has already inserted the profile as `woman`. This is the
  -- grant, and it is the only place the role is ever set to admin.
  insert into public.profiles (id, role)
  values (new_id, 'admin')
  on conflict (id) do update set role = 'admin';

  raise notice 'Created % (%) and granted admin.', target_email, new_id;
end;
$$;

-- ---------------------------------------------------------------------------
-- Confirm. Expect one row per admin, and check you recognise every one.
-- ---------------------------------------------------------------------------

select u.email,
       p.role,
       u.email_confirmed_at is not null as confirmed,
       exists (
         select 1 from auth.identities i where i.user_id = u.id
       ) as can_sign_in,
       u.created_at
  from profiles p
  join auth.users u on u.id = p.id
 where p.role = 'admin'
 order by u.created_at;

-- ---------------------------------------------------------------------------
-- When the temporary account is finished with, remove it outright rather
-- than demoting it. A dormant admin is worth more to somebody else than to
-- you, and the cascade takes the profile and the identity with it.
--
--   delete from auth.users where lower(email) = lower('admin@example.org');
-- ---------------------------------------------------------------------------
