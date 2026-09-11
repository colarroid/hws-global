-- =============================================================================
-- Open every day, closed on the days somebody says so.
--
-- 0023 built the calendar as a repeating week: an admin said "Tuesdays, ten
-- to four" and nothing else was ever open. HWS has asked for the opposite
-- default — the month is available, and the admin marks the days they are
-- not.
--
-- WHAT CHANGES
--
-- `booking_availability.weekday` is dropped. What is left is the hours
-- themselves, and they now apply to every date rather than to one day of the
-- week. One row is the normal case: ten to four, half-hour slots. More than
-- one row is two spans of a day, a morning and an afternoon with lunch
-- between them, and they apply to every date the same way.
--
-- Closing is `booking_blocks`, which already existed and already did exactly
-- this. A whole-day block is a day off. A part-day block is an hour in the
-- middle of a day that is otherwise open. Nothing about that table changes.
--
-- WHY THIS SHAPE IS THE SAFER ONE
--
-- The weekly pattern could not run out, and neither can this. A list of open
-- dates could: forget to fill in next month and the booking page tells every
-- woman there is nothing free, correctly and silently. Defaulting to open
-- means the failure is in the other direction — a day offered that somebody
-- then has to decline — and of the two that is the one you can apologise for.
--
-- The cost is that a day nobody is available on is open until somebody closes
-- it, weekends included. Closing every Saturday is a monthly job rather than
-- a standing rule. That is the trade HWS asked for and it is worth writing
-- down: if closing weekends becomes a chore somebody forgets, the thing to
-- add is a standing weekday exclusion, not a return to opening dates by hand.
--
-- SAFE TO RUN DESTRUCTIVELY
--
-- All three booking tables were empty when this was written — the platform
-- was wiped on 10 September 2026 and no availability had been set since. So
-- the column is dropped rather than migrated.
-- =============================================================================

alter table booking_availability
  drop column if exists weekday;

-- Exact duplicates only. Two spans are legitimate — a morning and an
-- afternoon — so this stops the same span being saved twice rather than
-- stopping a second span.
--
-- Overlapping spans are still possible (10:00-16:00 and 12:00-14:00) and
-- would generate the same instant twice. `free_slots` de-duplicates below
-- rather than the table forbidding it, because the overlap is not wrong: it
-- is two ways of saying the same hour is open.
create unique index if not exists booking_availability_span_idx
  on booking_availability (start_minute, end_minute);

comment on table booking_availability is
  'The hours HWS is open, on every date, in local Europe/London time so they '
  'do not drift when the clocks change. A date is open unless booking_blocks '
  'closes it.';

-- -----------------------------------------------------------------------------
-- Free slots, from hours that apply to every day
--
-- The generate_series over days stays, because the days are still what the
-- slots are built on. What goes is the join that asked which weekday it was:
-- every day in the range now takes every span.
-- -----------------------------------------------------------------------------
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
    cross join public.booking_availability a
    cross join lateral generate_series(
      a.start_minute, a.end_minute - a.slot_minutes, a.slot_minutes
    ) as m
  )
  -- distinct on, because two overlapping spans produce the same instant twice
  -- and she would see eleven o'clock listed twice. The shorter slot wins,
  -- which is the safer of the two to offer.
  select distinct on (c.at) c.at, c.slot_minutes
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
   order by c.at, c.slot_minutes;
end;
$$;

revoke all on function public.free_slots(date, date) from public;
grant execute on function public.free_slots(date, date) to anon, authenticated;
