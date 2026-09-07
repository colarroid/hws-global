import { createClient } from "@/lib/supabase/server";

/**
 * The booking calendar, as she sees it.
 *
 * Two calls, and both are database functions rather than table reads. She is
 * not allowed to read `bookings`, `booking_availability` or `booking_blocks`,
 * so the only things she can learn are which times are free and whether the
 * one she chose is still hers. A taken slot is simply absent: nobody can map
 * out HWS's week by watching what disappears.
 */

export type Slot = {
  /** The instant, as ISO. Carried through the flow in the URL. */
  at: string;
  minutes: number;
};

/** A day with something free on it. Days with nothing are not returned. */
export type SlotDay = {
  /** Europe/London calendar date, YYYY-MM-DD, for grouping and headings. */
  date: string;
  slots: Slot[];
};

/** How far ahead she can book. The function caps it again at sixty. */
export const BOOKING_HORIZON_DAYS = 21;

const LONDON = "Europe/London";

/** The Europe/London calendar date of an instant, as YYYY-MM-DD. */
function londonDate(iso: string): string {
  // en-CA gives ISO order, which is what we want for a key rather than a
  // label. Doing it through Intl is what keeps British Summer Time right.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: LONDON,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(iso));
}

/**
 * Every free slot from today to the horizon, grouped by day.
 *
 * Grouped here rather than in the page, because the grouping has to happen in
 * London time and that is a decision worth making once. A page that grouped
 * by the server's own idea of a day would split an evening in two for half
 * the year.
 */
export async function getFreeDays(): Promise<SlotDay[]> {
  const supabase = await createClient();

  const from = londonDate(new Date().toISOString());
  const to = londonDate(
    new Date(Date.now() + BOOKING_HORIZON_DAYS * 86_400_000).toISOString(),
  );

  const { data, error } = await supabase.rpc("free_slots", {
    p_from: from,
    p_to: to,
  });

  // Thrown rather than swallowed. An empty calendar and a broken calendar
  // look identical to her, and the first is a thing to say plainly while the
  // second is a thing to fix. Migration 0015 was missed for weeks because a
  // read like this returned nothing instead of complaining.
  if (error) throw new Error(`free_slots failed: ${error.message}`);

  const days = new Map<string, Slot[]>();

  for (const row of (data ?? []) as { slot_at: string; slot_minutes: number }[]) {
    const key = londonDate(row.slot_at);
    const list = days.get(key) ?? [];
    list.push({ at: row.slot_at, minutes: row.slot_minutes });
    days.set(key, list);
  }

  return [...days.entries()].map(([date, slots]) => ({ date, slots }));
}

/** True when that exact instant is still free. Checked again on booking. */
export async function isSlotFree(iso: string): Promise<boolean> {
  const days = await getFreeDays();
  return days.some((day) => day.slots.some((slot) => slot.at === iso));
}

export type BookingResult =
  | { ok: true; reference: string }
  | { ok: false; reason: "taken" };

/**
 * Take the slot.
 *
 * The database re-checks and takes it in one statement, so two women pressing
 * the same eleven o'clock end with one booking and one honest answer. A
 * refusal here is always "that time has gone" and never anything about who
 * has it.
 */
export async function bookSlot(input: {
  slotAt: string;
  name: string;
  email: string;
  phone?: string | null;
  need?: string | null;
  place?: string | null;
  situations?: string[];
  note?: string | null;
}): Promise<BookingResult> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("book_slot", {
    p_slot: input.slotAt,
    p_name: input.name,
    p_email: input.email,
    p_phone: input.phone ?? null,
    p_need: input.need ?? null,
    p_place: input.place ?? null,
    p_situations: input.situations ?? [],
    p_note: input.note ?? null,
  });

  if (error) throw new Error(`book_slot failed: ${error.message}`);

  // The function returns null for a slot that is no longer free, which is the
  // one failure she is ever shown.
  return data ? { ok: true, reference: data as string } : { ok: false, reason: "taken" };
}
