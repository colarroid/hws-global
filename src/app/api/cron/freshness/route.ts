import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendEmail } from "@/lib/email";
import { listingRecheck, type StaleListing } from "@/emails/listing-recheck";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/** Six months, matching FRESHNESS_MONTHS and the dashboard banner. */
const STALE_MONTHS = 6;

/** Leave at least this long between asks. Nagging weekly is how this gets ignored. */
const QUIET_DAYS = 30;

/**
 * The six-monthly re-confirmation prompt.
 *
 * Runs weekly. Finds live listings nobody has confirmed in six months and
 * emails the organisations that own them, once a month at most.
 *
 * This exists because the dashboard banner was the only prompt, and it asks
 * an organisation to notice something on a page it has no particular reason
 * to open. The verified stamp is the platform's whole trust mechanism and it
 * is worth exactly what the re-check cadence is worth, so the prompt has to
 * travel to them rather than wait to be found.
 */
export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Not authorised" }, { status: 401 });
  }

  const portal = process.env.NEXT_PUBLIC_ORG_PORTAL_URL;
  if (!portal) {
    return NextResponse.json(
      { error: "NEXT_PUBLIC_ORG_PORTAL_URL is not set." },
      { status: 500 },
    );
  }

  const supabase = createAdminClient();

  const staleBefore = new Date();
  staleBefore.setMonth(staleBefore.getMonth() - STALE_MONTHS);

  const quietSince = new Date();
  quietSince.setDate(quietSince.getDate() - QUIET_DAYS);

  const { data: listings, error } = await supabase
    .from("listings")
    .select("id, name, last_confirmed_at, organisation_id")
    .eq("status", "live");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // A live listing nobody has ever confirmed counts as stale. Women see that
  // date, so a missing one is as damaging as an old one.
  const stale = (listings ?? []).filter(
    (listing) =>
      !listing.last_confirmed_at ||
      new Date(listing.last_confirmed_at) < staleBefore,
  );

  const byOrganisation = new Map<string, StaleListing[]>();
  for (const listing of stale) {
    const list = byOrganisation.get(listing.organisation_id) ?? [];
    list.push({ name: listing.name, lastConfirmed: listing.last_confirmed_at });
    byOrganisation.set(listing.organisation_id, list);
  }

  let sent = 0;
  const skipped: string[] = [];
  const failures: string[] = [];

  for (const [organisationId, items] of byOrganisation) {
    const { data: organisation, error: lookupError } = await supabase
      .from("organisations")
      .select("name, last_recheck_email_at")
      .eq("id", organisationId)
      .maybeSingle();

    // A failed lookup is not the same as an organisation with nothing to do.
    // Treating the two alike is how a job reports success while quietly
    // sending nothing, which is the worst way for this particular job to
    // fail: the freshness prompt going missing is invisible until a woman
    // turns up to something that stopped running.
    if (lookupError) {
      failures.push(`${organisationId}: ${lookupError.message}`);
      continue;
    }

    if (!organisation) {
      failures.push(`${organisationId}: organisation not found`);
      continue;
    }

    if (
      organisation.last_recheck_email_at &&
      new Date(organisation.last_recheck_email_at) > quietSince
    ) {
      skipped.push(`${organisation.name}: asked within the last ${QUIET_DAYS} days`);
      continue;
    }

    const { data: members } = await supabase
      .from("organisation_members")
      .select("user_id")
      .eq("organisation_id", organisationId);

    // Everyone who can act on it gets told. Sending only to whoever first
    // registered is how this lands with someone who has left.
    const addresses: string[] = [];
    for (const member of members ?? []) {
      const { data } = await supabase.auth.admin.getUserById(member.user_id);
      if (data.user?.email) addresses.push(data.user.email);
    }

    if (addresses.length === 0) {
      skipped.push(`${organisation.name}: no member addresses`);
      continue;
    }

    const { subject, html, text } = listingRecheck(
      organisation.name,
      items,
      `${portal}/dashboard`,
    );

    let delivered = false;
    for (const address of addresses) {
      const result = await sendEmail({ to: address, subject, html, text });
      if (result.ok) delivered = true;
      else failures.push(`${address}: ${result.error}`);
    }

    if (!delivered) continue;

    // Stamped only after something got through, so a total failure is retried
    // next week rather than counted as an ask.
    await supabase
      .from("organisations")
      .update({ last_recheck_email_at: new Date().toISOString() })
      .eq("id", organisationId);

    sent += 1;
  }

  return NextResponse.json({ organisationsEmailed: sent, skipped, failures });
}
