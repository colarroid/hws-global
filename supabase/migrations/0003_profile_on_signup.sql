-- =============================================================================
-- Create a profile row whenever an auth user is created.
--
-- organisation_members.user_id references profiles, not auth.users, so
-- without this the first onboarding step fails on a foreign key. A trigger
-- rather than an app-side insert, because an app-side insert can be skipped:
-- by a Google sign-in on the woman-facing side, by an admin invited through
-- the dashboard, or by any future entry point nobody remembers to patch.
-- =============================================================================

create function handle_new_user() returns trigger
  language plpgsql security definer set search_path = public as $fn$
  declare
    requested text := nullif(new.raw_user_meta_data ->> 'role', '');
    resolved  user_role;
    full_name text := nullif(new.raw_user_meta_data ->> 'full_name', '');
  begin
    -- Only 'organisation' and 'woman' are self-assignable. Sign-up metadata
    -- is attacker-controlled: anyone can pass arbitrary options.data through
    -- the public auth endpoint, so honouring 'admin' here would let a
    -- stranger mint themselves an admin account and read every table that
    -- is_admin() unlocks. Admin is granted by hand, never claimed.
    resolved := case requested
      when 'organisation' then 'organisation'::user_role
      else 'woman'::user_role
    end;

    insert into public.profiles (id, role, first_name, last_name)
    values (
      new.id,
      resolved,
      -- Google pre-fills the name on the woman-facing side. Everything here
      -- is optional, and nothing on the profile screen is required.
      coalesce(
        nullif(new.raw_user_meta_data ->> 'first_name', ''),
        split_part(full_name, ' ', 1)
      ),
      coalesce(
        nullif(new.raw_user_meta_data ->> 'last_name', ''),
        nullif(substr(full_name, length(split_part(full_name, ' ', 1)) + 2), '')
      )
    )
    on conflict (id) do nothing;

    return new;
  end;
  $fn$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- Backfill anyone who signed up before this ran.
insert into public.profiles (id, role)
select u.id, 'woman'::user_role
from auth.users u
left join public.profiles p on p.id = u.id
where p.id is null
on conflict (id) do nothing;
