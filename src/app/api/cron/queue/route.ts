import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendEmail } from "@/lib/email";
import { adminQueue } from "@/emails/admin-queue";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * Where the daily queue email goes.
 *
 * Defaulted rather than left to an environment variable alone, deliberately.
 * The failure this job exists to fix was something going unnoticed for two
 * weeks; a notifier that silently does nothing because a variable was never
 * set would be the same bug wearing a different hat. ADMIN_NOTIFY_EMAIL still
 * wins when set.
 */
const NOTIFY =
  process.env.ADMIN_NOTIFY_EMAIL?.trim() ||
  "ifydada@theholisticwellbeingsummit.org";

/** Where somebody lands when they press the button. */
const ADMIN_URL =
  process.env.ADMIN_URL?.trim() || "https://admin.hwspathgrid.com";

const daysSince = (iso: string) =>
  Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);

/**
 * The morning nudge: anything sitting in the queue waiting on a person.
 *
 * WHY. An organisation waited fourteen days to be verified because the queue
 * is a page somebody has to decide to open, and nobody did. Nothing alerted,
 * nothing escalated, and the only thing standing between a real organisation
 * and being forgotten was a habit.
 *
 * Daily while anything waits, silent when nothing does. That shape matters:
 * a notification that fires once on arrival can be missed, and then the thing
 * rots exactly as it did before. One that returns every morning cannot be
 * missed twice, and one that stays quiet on an empty queue stays worth
 * reading.
 *
 * WHAT COUNTS AS WAITING, which is the part that is easy to get wrong.
 *
 * `status = 'pending'` is not it. An organisation is created pending the
 * moment somebody starts onboarding, so half the pending rows are people
 * still filling the form in and nobody is waiting on us at all. The signal is
 * `verification_requested_at`: it is set once, when they press submit, and
 * never again. Checked against production while writing this — two
 * organisations were pending, one had asked and one was mid-signup, and the
 * admin screen was right to show one.
 *
 * Hand-routing requests are in here too, and they are the worse case: they
 * are somebody asking to be put in touch with a person, and the admin app has
 * no screen for them at all. Until it does, this email is the only way anyone
 * learns they exist.
 */
export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const auth = request.headers.get("authorization");

  // Vercel Cron sends this header. Without the secret set, refuse rather than
  // leave a route that emails people open to anyone who finds it.
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Not authorised" }, { status: 401 });
  }

  const supabase = createAdminClient();

  const { data: pending, error: orgError } = await supabase
    .from("organisations")
    .select("name, place, verification_requested_at")
    .eq("status", "pending")
    .not("verification_requested_at", "is", null)
    .order("verification_requested_at");

  if (orgError) {
    return NextResponse.json({ error: orgError.message }, { status: 500 });
  }

  const { data: routing, error: routingError } = await supabase
    .from("hand_routing_requests")
    .select("source, created_at")
    .eq("status", "new")
    .order("created_at");

  if (routingError) {
    return NextResponse.json({ error: routingError.message }, { status: 500 });
  }

  const organisations = (pending ?? []).map((row) => ({
    name: row.name as string,
    place: (row.place as string | null) ?? null,
    days: daysSince(row.verification_requested_at as string),
  }));

  const requests = (routing ?? []).map((row) => ({
    source: row.source as string,
    days: daysSince(row.created_at as string),
  }));

  // Nothing waiting is the normal state and deserves silence. An email every
  // morning saying there is nothing to do is an email somebody stops opening,
  // and then the one that matters is unread too.
  if (organisations.length === 0 && requests.length === 0) {
    return NextResponse.json({ waiting: 0, sent: false });
  }

  const { subject, html, text } = adminQueue(organisations, requests, ADMIN_URL);
  const result = await sendEmail({ to: NOTIFY, subject, html, text });

  return NextResponse.json({
    organisations: organisations.length,
    requests: requests.length,
    oldestDays: Math.max(
      0,
      ...organisations.map((o) => o.days),
      ...requests.map((r) => r.days),
    ),
    sent: result.ok,
    error: result.ok ? undefined : result.error,
  });
}
