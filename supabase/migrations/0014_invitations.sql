-- =============================================================================
-- Inviting a colleague into an organisation.
--
-- Verification belongs to the organisation, not the person who happened to
-- sign up first, so a colleague joining inherits it rather than starting
-- again. That makes this membership plumbing and nothing more.
--
-- The organisation portal holds no service role key, deliberately, so this
-- cannot create an auth user. It does not need to: the invitation is a row
-- keyed by email, and the person accepts it by signing in or signing up
-- normally. Whichever way they arrive, redemption checks that the address
-- they are signed in as is the address that was invited.
-- =============================================================================

create table organisation_invitations (
  id              uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references organisations (id) on delete cascade,

  -- Stored lower-cased. Addresses are compared case-insensitively at
  -- redemption, and normalising on the way in keeps that comparison honest.
  email           text not null,

  -- The secret in the emailed link. Long and random: it is the only thing
  -- standing between a forwarded email and a seat in the organisation.
  token           text not null unique,

  invited_by      uuid references profiles (id) on delete set null,
  created_at      timestamptz not null default now(),
  expires_at      timestamptz not null default now() + interval '14 days',
  accepted_at     timestamptz,
  accepted_by     uuid references profiles (id) on delete set null,

  constraint invitation_email_is_lower check (email = lower(email))
);

create index organisation_invitations_org_idx
  on organisation_invitations (organisation_id);

-- One live invitation per address per organisation. Re-inviting someone
-- replaces the old row rather than leaving two working links.
create unique index organisation_invitations_pending_idx
  on organisation_invitations (organisation_id, email)
  where accepted_at is null;

alter table organisation_invitations enable row level security;

-- Members manage their own organisation's invitations, and admins can see
-- them. Nobody reads by token through RLS: that path goes through the
-- function below, which returns only what the invited person needs to see.
create policy invitations_member_read on organisation_invitations
  for select using (is_org_member(organisation_id));

create policy invitations_member_write on organisation_invitations
  for insert with check (is_org_member(organisation_id));

create policy invitations_member_revoke on organisation_invitations
  for delete using (is_org_member(organisation_id));

create policy invitations_admin on organisation_invitations
  for all using (is_admin()) with check (is_admin());

-- -----------------------------------------------------------------------------
-- Reading one, before signing in
-- -----------------------------------------------------------------------------

create function invitation_details(p_token text)
  returns table (organisation_name text, email text, expired boolean, accepted boolean)
  language sql
  security definer
  set search_path = public
as $fn$
  select o.name,
         i.email,
         i.expires_at < now(),
         i.accepted_at is not null
    from organisation_invitations i
    join organisations o on o.id = i.organisation_id
   where i.token = p_token;
$fn$;

comment on function invitation_details is
  'What the invitation screen needs before there is a session: who invited '
  'them and whether the link is still good. Returns nothing for an unknown '
  'token, so guessing one tells you only that it was wrong.';

grant execute on function invitation_details(text) to anon, authenticated;

-- -----------------------------------------------------------------------------
-- Accepting one
-- -----------------------------------------------------------------------------

create function redeem_invitation(p_token text) returns uuid
  language plpgsql
  security definer
  set search_path = public
as $fn$
declare
  inv    organisation_invitations;
  caller_email text;
begin
  if auth.uid() is null then
    raise exception 'Not signed in';
  end if;

  select * into inv
    from organisation_invitations
   where token = p_token
     for update;

  -- `not found` rather than `inv is null`: a record variable only tests null
  -- when every column is, which is not the same question.
  if not found then
    raise exception 'That invitation link is not valid';
  end if;

  if inv.accepted_at is not null then
    raise exception 'That invitation has already been used';
  end if;

  if inv.expires_at < now() then
    raise exception 'That invitation has expired';
  end if;

  select lower(email) into caller_email from auth.users where id = auth.uid();

  -- The token alone is not enough. An invitation is to a person, and a
  -- forwarded email should not hand a seat to whoever opened it.
  if caller_email is distinct from inv.email then
    raise exception 'This invitation was sent to a different email address';
  end if;

  -- Already in, which is not a failure worth showing anyone. Mark the
  -- invitation used and let them through.
  if not exists (
    select 1 from organisation_members
     where organisation_id = inv.organisation_id and user_id = auth.uid()
  ) then
    insert into organisation_members (organisation_id, user_id, role, invited_by, invited_at)
    values (inv.organisation_id, auth.uid(), 'member', inv.invited_by, inv.created_at);
  end if;

  -- A colleague joining an organisation is an organisation account, whatever
  -- the sign-up metadata claimed. This is a promotion from `woman`, never to
  -- `admin`, which stays granted by hand.
  update profiles
     set role = 'organisation'
   where id = auth.uid() and role <> 'admin';

  update organisation_invitations
     set accepted_at = now(), accepted_by = auth.uid()
   where id = inv.id;

  return inv.organisation_id;
end;
$fn$;

comment on function redeem_invitation is
  'Joins the signed-in user to the invited organisation, if the address they '
  'are signed in as is the one that was invited. Security definer because a '
  'member cannot otherwise write a membership row for an organisation they '
  'do not yet belong to.';

grant execute on function redeem_invitation(text) to authenticated;
