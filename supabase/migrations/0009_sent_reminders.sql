-- =============================================================================
-- Record which deadline reminders have gone out.
--
-- The account exists to keep a saved list and to warn her before something
-- closes. That warning is the only email the platform ever sends her, so
-- sending it twice is not a small bug: it is the whole relationship.
--
-- Keyed on the deadline as well as the listing. If an organisation extends a
-- closing date, that is genuinely a new thing to warn her about, and the key
-- lets exactly one more reminder through rather than blocking it forever.
-- =============================================================================

create table sent_reminders (
  user_id    uuid not null references profiles (id) on delete cascade,
  listing_id uuid not null references listings (id) on delete cascade,
  deadline   date not null,
  sent_at    timestamptz not null default now(),
  primary key (user_id, listing_id, deadline)
);

create index sent_reminders_user_idx on sent_reminders (user_id, sent_at desc);

alter table sent_reminders enable row level security;

-- She can see what she was sent. Nothing writes through this policy: the
-- reminder job runs with the service role, outside RLS entirely.
create policy sent_reminders_own on sent_reminders for select
  using (user_id = auth.uid());

create policy sent_reminders_admin on sent_reminders for all
  using (is_admin()) with check (is_admin());
