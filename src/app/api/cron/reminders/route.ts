import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendEmail } from "@/lib/email";
import { deadlineReminder, type ClosingSoon } from "@/emails/deadline-reminder";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * Deadline reminders. Runs once a day.
 *
 * One email per woman per run, covering everything of hers closing inside her
 * reminder window, rather than one email per listing. Several things closing
 * in the same week is exactly when she is busiest, and three separate emails
 * is how a service that promised to send almost nothing starts feeling like
 * one that does not.
 *
 * Runs with the service role because it reads across every account, which no
 * signed-in session could be allowed to do. Nothing about a woman leaves this
 * function except an email to her own address.
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
  const origin = request.nextUrl.origin;

  const { data: profiles, error: profileError } = await supabase
    .from("profiles")
    .select("id, reminders_enabled, reminder_days")
    .eq("role", "woman")
    .eq("reminders_enabled", true);

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 500 });
  }

  let sent = 0;
  const failures: string[] = [];

  for (const profile of profiles ?? []) {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() + (profile.reminder_days ?? 7));
    const cutoffDate = cutoff.toISOString().slice(0, 10);
    const today = new Date().toISOString().slice(0, 10);

    const { data: saved } = await supabase
      .from("saved_items")
      .select("listing_id, listings ( id, name, deadline, status, organisations ( name ) )")
      .eq("user_id", profile.id);

    type Row = {
      listings: {
        id: string;
        name: string;
        deadline: string | null;
        status: string;
        organisations: { name: string } | null;
      } | null;
    };

    const closing = ((saved ?? []) as unknown as Row[])
      .map((row) => row.listings)
      .filter(
        (listing): listing is NonNullable<Row["listings"]> =>
          Boolean(listing) &&
          listing!.status === "live" &&
          Boolean(listing!.deadline) &&
          listing!.deadline! >= today &&
          listing!.deadline! <= cutoffDate,
      );

    if (closing.length === 0) continue;

    // Anything already warned about at this exact date is dropped. A date
    // that has since moved counts as new, which is the point of the key.
    const { data: alreadySent } = await supabase
      .from("sent_reminders")
      .select("listing_id, deadline")
      .eq("user_id", profile.id);

    const seen = new Set(
      (alreadySent ?? []).map((r) => `${r.listing_id}|${r.deadline}`),
    );

    const fresh = closing.filter(
      (listing) => !seen.has(`${listing.id}|${listing.deadline}`),
    );

    if (fresh.length === 0) continue;

    const { data: user } = await supabase.auth.admin.getUserById(profile.id);
    const address = user.user?.email;
    if (!address) continue;

    const items: ClosingSoon[] = fresh
      .sort((a, b) => a.deadline!.localeCompare(b.deadline!))
      .map((listing) => ({
        name: listing.name,
        organisationName: listing.organisations?.name ?? "",
        deadline: listing.deadline!,
        url: `${origin}/service/${listing.id}`,
      }));

    const { subject, html, text } = deadlineReminder(items, `${origin}/saved`);
    const result = await sendEmail({ to: address, subject, html, text });

    if (!result.ok) {
      failures.push(`${profile.id}: ${result.error}`);
      continue;
    }

    // Recorded only after the send succeeded, so a failure is retried
    // tomorrow rather than silently swallowed.
    await supabase.from("sent_reminders").insert(
      fresh.map((listing) => ({
        user_id: profile.id,
        listing_id: listing.id,
        deadline: listing.deadline!,
      })),
    );

    sent += 1;
  }

  return NextResponse.json({ sent, failures });
}
