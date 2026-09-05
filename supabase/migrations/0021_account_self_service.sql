-- =============================================================================
-- Let a woman delete her own account, properly.
--
-- The settings screen has always had a button reading "Delete my account and
-- everything in it", and a confirmation naming "your saved items and your
-- email address. This can't be undone." What the action behind it actually
-- did was delete the saved_items rows, delete the profiles row, and sign her
-- out. The row in auth.users stayed exactly where it was, holding the one
-- thing the confirmation promised to remove.
--
-- So the account survived its own deletion. She could sign in again on the
-- same address and find an empty account waiting, which is both the clearest
-- possible sign that the promise was not kept and, on a platform whose whole
-- argument is that it holds almost nothing and lets you leave, the single
-- worst thing to be wrong about.
--
-- Deleting from auth.users needs privileges no signed-in session has. The two
-- ways to get them are the service-role key and a security-definer function.
-- This is the function, for two reasons:
--
--   * src/lib/supabase/admin.ts says in as many words that the service-role
--     client is "never reachable from a request a woman makes", and deleting
--     an account is exactly such a request. Reaching for it here would make
--     that comment false and put an RLS-bypassing key on a public path.
--   * This function can only ever delete auth.uid(). There is no argument to
--     get wrong and no id to pass, so the worst a caller can do, however they
--     call it, is delete themselves.
--
-- The cascade does the rest: profiles.id references auth.users on delete
-- cascade, and saved_items.user_id references profiles the same way, so one
-- delete takes the account, the profile and every saved item with it.
-- =============================================================================

create or replace function public.delete_own_account()
returns void
language plpgsql
security definer
-- Empty search_path so nothing here resolves through a schema a caller
-- controls. Every name below is written out in full.
set search_path = ''
as $$
declare
  me uuid := auth.uid();
begin
  -- Anonymous callers have nothing to delete. Raising rather than returning
  -- quietly, because a silent success here would look identical to a real
  -- deletion from the outside.
  if me is null then
    raise exception 'Not signed in.' using errcode = '28000';
  end if;

  delete from auth.users where id = me;
end;
$$;

-- Nobody but a signed-in caller, and even then only on themselves.
revoke all on function public.delete_own_account() from public, anon;
grant execute on function public.delete_own_account() to authenticated;

comment on function public.delete_own_account() is
  'Deletes the calling user''s own account. Cascades to profiles and '
  'saved_items. Takes no argument on purpose: there is no id to get wrong.';
