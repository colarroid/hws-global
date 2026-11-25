-- =============================================================================
-- Deleting your own account must not delete somebody's organisation.
--
-- WHAT HAPPENED. On 24 November 2026 the Communications and Engagement
-- Officer at Firstport signed in on the women's side with the address her
-- organisation account uses, believing it was a second, personal account she
-- had made by mistake. She pressed "Delete my account and everything in it".
--
-- It deleted her row in auth.users, which is what that button is for. The
-- cascade then took her profile, and organisation_members.user_id references
-- profiles on delete cascade, so it took her membership too. Firstport itself
-- survived: verified, with a live listing, and with nobody in it. From the
-- portal the organisation had simply vanished, because getMyOrganisation()
-- starts from the membership row. Its listing stayed on the women's side,
-- answerable by no one.
--
-- WHY IT WAS POSSIBLE. Migration 0026 made one account serve both sides, on
-- purpose and for good reasons. This screen was written before that, when a
-- woman's account could not be an organisation's account, and so the
-- confirmation it shows — "your saved items and your email address" — became
-- an understatement without a line of it changing. The promise stayed the
-- same while what the button could reach grew.
--
-- WHAT THIS DOES. Refuses, rather than deletes, when the caller belongs to an
-- organisation. The account is hers to delete and she must still be able to;
-- what she cannot do from a screen that only talks about saved items is take
-- an organisation, its listings and any colleagues with her. The portal is
-- where an organisation is closed or handed on, and that is where the
-- settings screen now sends her.
--
-- The errcode is deliberate. 28000 already means "not signed in" here, so a
-- separate one is what lets the action tell the two refusals apart and say
-- something true about each. PostgREST passes the SQLSTATE through as
-- error.code.
--
-- This is the backstop, not the fix. The screen does not offer the button to
-- an account that belongs to an organisation; a function that can only ever
-- delete auth.uid() should still refuse rather than rely on a page being
-- right.
-- =============================================================================

create or replace function public.delete_own_account()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  me uuid := auth.uid();
begin
  if me is null then
    raise exception 'Not signed in.' using errcode = '28000';
  end if;

  if exists (
    select 1 from public.organisation_members where user_id = me
  ) then
    raise exception 'This account belongs to an organisation.'
      using errcode = '42501';
  end if;

  delete from auth.users where id = me;
end;
$$;

comment on function public.delete_own_account() is
  'Deletes the calling user''s own account. Cascades to profiles and '
  'saved_items. Takes no argument on purpose: there is no id to get wrong. '
  'Refuses when the caller belongs to an organisation, because the cascade '
  'would take its membership and leave the organisation with no owner. '
  'See migration 0028.';
