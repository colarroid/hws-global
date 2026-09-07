"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { bookSlot } from "@/lib/data/booking";
import { buildIcs } from "@/lib/ics";
import { sendEmail } from "@/lib/email";
import { bookingConfirmation, bookingNotice } from "@/emails/booking";

export type BookingState = { error?: string } | null;

const schema = z.object({
  slot: z.string().min(1),
  name: z.string().trim().min(1, "Add your name, or what you would like to be called."),
  email: z
    .string()
    .trim()
    .min(1, "Add an email address so we can confirm the time.")
    .email("That doesn't look like an email address. Check it and try again."),
  phone: z.string().trim().max(40).optional(),
  note: z.string().trim().max(2000).optional(),
});

/**
 * Take the slot, then tell both people about it.
 *
 * The booking is the work and the emails are how anybody finds out, so they
 * are not allowed to undo it. A confirmation that fails to send is a call
 * still in the diary, and the alternative, rolling back a booking because
 * Resend was down for ten seconds, loses her the slot she chose for a reason
 * that is nothing to do with her.
 *
 * The calendar file is where "do we need to connect Google Calendar" is
 * answered. Both messages carry the same .ics, so the adviser's diary and her
 * phone both know, with nothing connected to anything.
 */
export async function makeBooking(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const parsed = schema.safeParse({
    slot: formData.get("slot"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    note: formData.get("note") || undefined,
  });

  if (!parsed.success) return { error: parsed.error.issues[0].message };

  const need = String(formData.get("need") ?? "").trim() || null;
  const place = String(formData.get("place") ?? "").trim() || null;
  const situations = String(formData.get("situations") ?? "")
    .split(",")
    .filter(Boolean);

  const result = await bookSlot({
    slotAt: parsed.data.slot,
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone ?? null,
    need,
    place,
    situations,
    note: parsed.data.note ?? null,
  });

  if (!result.ok) {
    return {
      error:
        "Somebody took that time while you were filling this in. Choose another and nothing else is lost.",
    };
  }

  const slotAt = new Date(parsed.data.slot);
  const minutes = 30;

  const ics = buildIcs({
    reference: result.reference,
    start: slotAt,
    minutes,
    summary: "Call with HWS Path Grid",
    description: `Reference ${result.reference}.`,
  });

  const attachments = [{ filename: "appointment.ics", content: ics }];

  const hers = bookingConfirmation({
    name: parsed.data.name,
    slotAt,
    minutes,
    reference: result.reference,
  });

  // Not awaited together with the redirect below: she should not wait on a
  // mail provider to be told her call is booked.
  void sendEmail({ to: parsed.data.email, ...hers, attachments });

  const notify = process.env.BOOKING_NOTIFY_EMAIL?.trim();
  if (notify) {
    const theirs = bookingNotice({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      slotAt,
      minutes,
      reference: result.reference,
      need,
      place,
      situations,
      note: parsed.data.note ?? null,
    });
    void sendEmail({ to: notify, ...theirs, attachments });
  } else {
    // Loud, because a booking nobody is told about is a woman waiting by a
    // phone that will not ring.
    console.error(
      "BOOKING_NOTIFY_EMAIL is not set: booking",
      result.reference,
      "was taken and nobody at HWS has been told.",
    );
  }

  redirect(`/talk/booked?ref=${encodeURIComponent(result.reference)}`);
}
