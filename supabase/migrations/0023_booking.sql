-- =============================================================================
-- Booking a conversation, on this platform rather than somebody else's.
--
-- The no-match screen offers a person. Sending her to a third-party scheduler
-- was the cheap way to do that and it was the wrong one: the screen renders
-- at /results?need=..., so her sentence is in the address, and the moment
-- somebody else's script or booking form is involved that sentence is theirs
-- too. Keeping the calendar here means she picks a time, we know what she
-- searched for, and nobody outside HWS learns either.
--
-- THE SHAPE
--
-- Availability is a weekly pattern, not a list of open slots. An admin says
-- "Tuesdays, ten to four, half-hour slots" once, rather than opening dates
-- forever. Absence is the exception: `booking_blocks` closes a date, or part
-- of one, and that is what an admin actually reaches for. Holidays, a full
-- afternoon, one meeting.
--
-- Slots are therefore never stored. They are computed from the pattern, minus
-- the blocks, minus what is already booked. Nothing to keep in step and no
-- table that quietly rots when somebody changes their hours.
--
-- TIME
--
-- Availability is a weekday and minutes past midnight in Europe/London,
-- because that is how a person says it and it must not drift when the clocks
-- change. Bookings are timestamptz, because that is an instant. The
-- conversion happens once, in `free_slots`, rather than in three places that
-- disagree by an hour for half the year.
--
-- WHAT SHE NEVER SEES
--
-- She must know which slots are taken without knowing who took them, so she
-- never reads `bookings` at all. `free_slots` is security definer and returns
-- times, nothing else. `book_slot` is the only way in, and it re-checks the
-- slot inside the same statement that takes it, so two women pressing the
-- same eleven o'clock cannot both get it.
-- =============================================================================

-- -----------------------------------------------------------------------------
-- When HWS is available, as a weekly pattern
-- -----------------------------------------------------------------------------

create table if not exists booking_availability (
  id            uuid primary key default gen_random_uuid(),
  -- 0 is Sunday, matching extract(dow), so nothing has to be translated.
  weekday       int not null check (weekday between 0 and 6),
  -- Minutes past midnight, Europe/London. 600 is ten in the morning.
  start_minute  int not null check (start_minute between 0 and 1439),
  end_minute    int not null check (end_minute between 1 and 1440),
  slot_minutes  int not null default 30 check (slot_minutes between 10 and 240),
  created_at    timestamptz not null default now(),
  check (end_minute > start_minute)
);

comment on table booking_availability is
  'The weekly pattern HWS is open for conversations. Local Europe/London '
  'time, so it does not drift when the clocks change.';

-- -----------------------------------------------------------------------------
-- When they are not, despite the pattern
-- -----------------------------------------------------------------------------

create table if not exists booking_blocks (
  id           uuid primary key default gen_random_uuid(),
  on_date      date not null,
  -- Null start and end means the whole day. Otherwise the closed span.
  start_minute int check (start_minute between 0 and 1439),
  end_minute   int check (end_minute between 1 and 1440),
  -- Why, for the admin's own benefit. Never leaves the admin tool: a woman
  -- has no business knowing somebody is at a funeral on Thursday.
  reason       text,
  created_at   timestamptz not null default now(),
  check (
    (start_minute is null and end_minute is null)
    or (start_minute is not null and end_minute is not null and end_minute > start_minute)
  )
);

create index if not exists booking_blocks_date_idx on booking_blocks (on_date);

comment on table booking_blocks is
  'Dates or parts of dates closed despite the weekly pattern. The reason is '
  'for the admin and is never exposed to a woman choosing a time.';

-- -----------------------------------------------------------------------------
-- What she booked
-- -----------------------------------------------------------------------------

create table if not exists bookings (
  id            uuid primary key default gen_random_uuid(),
  -- Short, unambiguous, and hers to quote. No 0/O or 1/I.
  reference     text not null unique,
  slot_at       timestamptz not null unique,
  slot_minutes  int not null default 30,

  name          text not null,
  email         text not null,
  phone         text,

  -- Why she is here. The point of keeping this on our own platform: whoever
  -- takes the call opens it knowing what she searched for and that nothing
  -- came back, so she does not have to explain it from the beginning.
  need          text,
  place         text,
  situations    text[] not null default '{}',
  note          text,

  status        text not null default 'booked'
                check (status in ('booked', 'cancelled', 'done')),
  cancelled_at  timestamptz,
  created_at    timestamptz not null default now()
);

create index if not exists bookings_slot_idx on bookings (slot_at);

comment on table bookings is
  'One conversation. slot_at is unique, so the calendar cannot double-book '
  'even if two women press the same time in the same second.';

comment on column bookings.need is
  'What she searched for when nothing matched. The reason this calendar is '
  'ours rather than a scheduling company''s.';

-- -----------------------------------------------------------------------------
-- Row level security
--
-- Everything is closed to her. She reads no row of any of these three tables;
-- the two functions below are her entire surface.
-- -----------------------------------------------------------------------------

alter table booking_availability enable row level security;
alter table booking_blocks       enable row level security;
alter table bookings             enable row level security;

create policy availability_admin on booking_availability for all
  using (is_admin()) with check (is_admin());

create policy blocks_admin on booking_blocks for all
  using (is_admin()) with check (is_admin());

create policy bookings_admin on bookings for all
  using (is_admin()) with check (is_admin());

-- -----------------------------------------------------------------------------
-- The two things she can do
-- -----------------------------------------------------------------------------

/*
 * Every free slot between two dates.
 *
 * Security definer because it reads three tables she is not allowed to read,
 * and returns only the one thing she needs from them: times. A taken slot is
 * absent rather than marked, so the shape of HWS's day is not a thing that
 * can be read off this by asking repeatedly.
 *
 * `p_from` and `p_to` are dates in Europe/London. The horizon is capped in
 * the function rather than trusted from the caller, so nobody can ask for
 * five years of slots and make the database do the work.
 */
create or replace function public.free_slots(p_from date, p_to date)
returns table (slot_at timestamptz, slot_minutes int)
language plpgsql
security definer
set search_path = ''
stable
as $$
declare
  first_day date := greatest(p_from, (now() at time zone 'Europe/London')::date);
  last_day  date := least(p_to, first_day + 60);
begin
  return query
  with days as (
    select d::date as on_date
      from generate_series(first_day, last_day, interval '1 day') as d
  ),
  candidate as (
    select
      -- Built in local time, then anchored to an instant. Doing it this way
      -- round is what makes 10am stay 10am across the October change.
      ((days.on_date + make_interval(mins => m))::timestamp
        at time zone 'Europe/London') as at,
      a.slot_minutes,
      days.on_date,
      m as minute_of_day
    from days
    join public.booking_availability a
      on a.weekday = extract(dow from days.on_date)::int
    cross join lateral generate_series(
      a.start_minute, a.end_minute - a.slot_minutes, a.slot_minutes
    ) as m
  )
  select c.at, c.slot_minutes
    from candidate c
   where
     -- Never the next two hours. A conversation somebody has to be at needs
     -- more notice than that, on both sides.
     c.at > now() + interval '2 hours'
     and not exists (
       select 1 from public.booking_blocks b
        where b.on_date = c.on_date
          and (
            b.start_minute is null
            or (c.minute_of_day >= b.start_minute and c.minute_of_day < b.end_minute)
          )
     )
     and not exists (
       select 1 from public.bookings bk
        where bk.slot_at = c.at
          and bk.status <> 'cancelled'
     )
   order by c.at;
end;
$$;

revoke all on function public.free_slots(date, date) from public;
grant execute on function public.free_slots(date, date) to anon, authenticated;

/*
 * Take a slot.
 *
 * Security definer, and it re-checks rather than trusting what she was shown.
 * The page she chose from may be minutes old, and the unique index on
 * `slot_at` is the last word: two women pressing the same eleven o'clock end
 * with one booking and one honest "that one has just gone".
 *
 * Returns the reference, or null when the slot is no longer free, so the
 * caller can say which happened without being told anything about who took
 * it.
 */
create or replace function public.book_slot(
  p_slot       timestamptz,
  p_name       text,
  p_email      text,
  p_phone      text,
  p_need       text,
  p_place      text,
  p_situations text[],
  p_note       text
)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  ok         boolean;
  new_ref    text;
  slot_len   int;
  tries      int := 0;
begin
  if coalesce(trim(p_name), '') = '' or coalesce(trim(p_email), '') = '' then
    raise exception 'A name and an email address are needed.' using errcode = '22023';
  end if;

  -- Still free, and still a slot the pattern actually offers. Asked of the
  -- same function she was shown, so there is one definition of "free".
  select true, f.slot_minutes into ok, slot_len
    from public.free_slots(
           (p_slot at time zone 'Europe/London')::date,
           (p_slot at time zone 'Europe/London')::date
         ) f
   where f.slot_at = p_slot
   limit 1;

  if not coalesce(ok, false) then
    return null;
  end if;

  /*
   * Unambiguous when read down a phone: md5 gives hex, and 0 and 1 are
   * translated out so nothing can be misheard as O or I.
   *
   * md5 and random rather than gen_random_bytes on purpose. pgcrypto lives
   * in the `extensions` schema on Supabase, and this function runs with an
   * empty search_path, so the unqualified call would not resolve at all.
   *
   * Retried rather than left to chance. Six characters from fourteen symbols
   * is enough for a long time but not forever, and a reference collision
   * must not come back to her as "that slot has gone", which is what the
   * handler below would otherwise turn it into.
   */
  loop
    new_ref := upper(
      substr(translate(md5(random()::text || clock_timestamp()::text), '01', 'zy'), 1, 6)
    );
    exit when not exists (
      select 1 from public.bookings where reference = new_ref
    );
    tries := tries + 1;
    if tries >= 5 then
      raise exception 'Could not allocate a booking reference.' using errcode = '55000';
    end if;
  end loop;

  insert into public.bookings (
    reference, slot_at, slot_minutes, name, email, phone,
    need, place, situations, note
  )
  values (
    new_ref, p_slot, coalesce(slot_len, 30), trim(p_name), lower(trim(p_email)),
    nullif(trim(coalesce(p_phone, '')), ''),
    nullif(trim(coalesce(p_need, '')), ''),
    nullif(trim(coalesce(p_place, '')), ''),
    coalesce(p_situations, '{}'),
    nullif(trim(coalesce(p_note, '')), '')
  );

  return new_ref;
exception
  -- Somebody took the slot between the check above and the insert. The
  -- unique index on slot_at is what catches it, and the answer is the same
  -- as for a slot that had already gone: it is gone. The reference cannot
  -- reach here, because the loop above settles it before the insert.
  when unique_violation then
    return null;
end;
$$;

revoke all on function public.book_slot(timestamptz, text, text, text, text, text, text[], text) from public;
grant execute on function public.book_slot(timestamptz, text, text, text, text, text, text[], text)
  to anon, authenticated;
