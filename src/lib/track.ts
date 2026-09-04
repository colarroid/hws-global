import "server-only";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";

type Kind = "view" | "save" | "clickthrough";

/**
 * Most traffic reaches service pages from search engines, so those pages are
 * crawled heavily. The organisation dashboard labels this figure "women who
 * saw your listings this month", and counting crawlers as women would not
 * just be inaccurate, it would be a number HWS repeats to funders.
 *
 * A user-agent test is not airtight. It is enough to keep the obvious
 * robots out of a figure that is meant to describe people.
 */
const BOT = /bot|crawler|spider|crawling|slurp|curl|wget|headless|preview|fetch|monitor|lighthouse/i;

async function looksLikeARobot() {
  const agent = (await headers()).get("user-agent") ?? "";
  return agent === "" || BOT.test(agent);
}

/**
 * Record one listing event for the organisation's dashboard figures.
 *
 * A listing id, a kind and a date. No user id, no session id, nothing that
 * could reassemble one woman's path: the brief rules out building
 * behavioural profiles around what are frequently sensitive searches.
 *
 * Never throws. A figure on someone else's dashboard is not worth failing
 * her page render for.
 */
export async function track(listingId: string, kind: Kind) {
  try {
    if (await looksLikeARobot()) return;

    const supabase = await createClient();
    await supabase.from("listing_events").insert({ listing_id: listingId, kind });
  } catch {
    // Deliberately swallowed. See above.
  }
}

/**
 * Record one organisation event, for its own overview figures.
 *
 * Separate from `track` because an organisation profile is not a listing and
 * counting a visit to one as a listing view would inflate a figure HWS
 * repeats to funders. Same shape and the same silence: an id, a kind, a date,
 * and never an exception that could cost her the page.
 */
export async function trackOrganisation(
  organisationId: string,
  kind: "profile_view",
) {
  try {
    if (await looksLikeARobot()) return;

    const supabase = await createClient();
    await supabase
      .from("organisation_events")
      .insert({ organisation_id: organisationId, kind });
  } catch {
    // Deliberately swallowed. See above.
  }
}
