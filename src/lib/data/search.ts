import "server-only";
import { createClient } from "@/lib/supabase/server";
import {
  FALLBACK_SUGGESTIONS,
  MARKET_SUGGESTIONS,
  MAX_SUGGESTIONS,
  SITUATION_SUGGESTIONS,
} from "@/lib/design/suggestions";

/** A listing women can reach, with everything the ranker and the card need. */
export type SearchableListing = {
  id: string;
  name: string;
  kind: string | null;
  blurb: string | null;
  who_for: string | null;
  what_to_expect: string | null;
  cost: string | null;
  formats: string[];
  place: string | null;
  deadline: string | null;
  apply_url: string | null;
  /** "live" or "closed". Closed ones stay findable, far down. */
  status: string;
  last_confirmed_at: string | null;
  /** When the organisation last changed what the listing says. */
  updated_at: string | null;
  organisationName: string;
  organisationPlace: string | null;
  situationSlugs: string[];
};

/**
 * Every listing women can reach: live, plus closed ones the ranker sinks.
 *
 * Phase One ranks in application code over the whole live set rather than in
 * SQL. At 40 to 75 listings that is not a performance question, and it buys
 * two things that matter more: the ranking is inspectable, and the reason a
 * listing scored is produced by the same code that scored it. HWS has to be
 * able to explain why something surfaced, and a scoring expression buried in
 * SQL cannot explain itself.
 *
 * Reads public_listing_cards rather than listings directly: that view is where
 * live-only filtering and the safe organisation columns are enforced, so no
 * verification evidence can reach this side of the platform.
 */
export async function getLiveListings(): Promise<SearchableListing[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("public_listing_cards")
    .select("*");

  if (error) throw error;

  type Row = Omit<
    SearchableListing,
    "organisationName" | "organisationPlace" | "situationSlugs"
  > & {
    organisation_name: string | null;
    organisation_place: string | null;
    situation_slugs: string[] | null;
  };

  return ((data ?? []) as unknown as Row[]).map((row) => ({
    id: row.id,
    name: row.name,
    kind: row.kind,
    blurb: row.blurb,
    who_for: row.who_for,
    what_to_expect: row.what_to_expect,
    cost: row.cost,
    formats: row.formats ?? [],
    place: row.place,
    deadline: row.deadline,
    apply_url: row.apply_url,
    status: row.status,
    last_confirmed_at: row.last_confirmed_at,
    updated_at: row.updated_at,
    organisationName: row.organisation_name ?? "",
    organisationPlace: row.organisation_place,
    situationSlugs: row.situation_slugs ?? [],
  }));
}

/**
 * Record a search that returned nothing useful.
 *
 * No user id, by design. This is the evidence HWS needs about where provision
 * is thin, and the brief rules out building profiles around what are often
 * sensitive searches.
 */
export async function recordUnmetSearch(input: {
  need: string;
  place: string;
  situations: string[];
  resultCount: number;
  /**
   * The score of the first result she sees, or null when nothing matched.
   *
   * Not quite the maximum: rank.ts sorts open listings above closed ones
   * before it sorts by score, so a closed listing can score higher and still
   * sit further down. That is the right number to keep anyway. What matters
   * is the quality of what she is actually shown first, not the best score
   * present somewhere in the list.
   */
  topScore?: number | null;
  organisationCount?: number;
}) {
  const supabase = await createClient();
  const { error } = await supabase.from("unmet_searches").insert({
    need: input.need || null,
    place: input.place || null,
    situations: input.situations,
    result_count: input.resultCount,
    top_score: input.topScore ?? null,
    organisation_count: input.organisationCount ?? 0,
  });

  /*
   * Reported, never thrown. A failure here costs HWS evidence and costs her
   * nothing, so it must not take down the results screen, but it must not be
   * silent either: migration 0015 was missed for weeks precisely because the
   * code that depended on it swallowed the error, and a table that has
   * quietly stopped recording looks exactly like a platform nobody is
   * failing to match.
   */
  if (error) {
    console.error("unmet_searches insert failed:", error.message);
  }
}

/**
 * The score below which a search is worth recording even though it returned
 * something.
 *
 * Read against the weights in rank.ts. A single situation is 40 and an exact
 * place is 25, so anything she agreed with us about clears this on its own.
 * What falls under it is a result ranked on word overlap and geography with
 * no agreement about her situation at all: a few of her words appeared in a
 * listing somewhere near her, which is the weakest thing the ranker can
 * return while still returning something.
 *
 * A guess, and deliberately a recorded one. `top_score` goes into the row, so
 * once there are real searches behind this the line can be moved to wherever
 * the data says it belongs rather than wherever it seemed to belong today.
 */
export const WEAK_MATCH_SCORE = 45;

/**
 * One verified organisation, with everything the organisation ranker scores.
 *
 * Reads `public_organisation_search`, which is the same allowlist discipline
 * as the profile view: the organisations table holds verification evidence
 * and a named contact's phone number, and none of it is here.
 */
export type SearchableOrganisation = {
  id: string;
  name: string;
  place: string | null;
  blurb: string | null;
  mission: string | null;
  uniqueOffer: string | null;
  eligibility: string | null;
  coverage: string | null;
  audiences: string[];
  serviceKinds: string[];
  accessRoutes: string[];
  logoUrl: string | null;
  marketSlugs: string[];
  zoneSlugs: string[];
  liveListings: number;
};

export async function getSearchableOrganisations(): Promise<
  SearchableOrganisation[]
> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("public_organisation_search")
    .select("*");

  if (error) throw error;

  type Row = {
    id: string;
    name: string;
    place: string | null;
    blurb: string | null;
    mission: string | null;
    unique_offer: string | null;
    eligibility: string | null;
    coverage: string | null;
    audiences: string[] | null;
    service_kinds: string[] | null;
    access_routes: string[] | null;
    logo_path: string | null;
    market_slugs: string[] | null;
    zone_slugs: string[] | null;
    live_listings: number | null;
  };

  return ((data ?? []) as Row[]).map((row) => ({
    id: row.id,
    name: row.name,
    place: row.place,
    blurb: row.blurb,
    mission: row.mission,
    uniqueOffer: row.unique_offer,
    eligibility: row.eligibility,
    coverage: row.coverage,
    audiences: row.audiences ?? [],
    serviceKinds: row.service_kinds ?? [],
    accessRoutes: row.access_routes ?? [],
    logoUrl: row.logo_path
      ? supabase.storage.from("organisation-logos").getPublicUrl(row.logo_path)
          .data.publicUrl
      : null,
    marketSlugs: row.market_slugs ?? [],
    zoneSlugs: row.zone_slugs ?? [],
    liveListings: row.live_listings ?? 0,
  }));
}

export type Market = {
  slug: string;
  label: string;
  /**
   * The label plus what a woman is likely to type, for matching only. Kept
   * apart from the label because the label goes into her sentence, and
   * "they work on digital ai artificial intelligence tech coding" is not a
   * sentence anybody wrote.
   */
  matchText: string;
};

/** The market vocabulary, in admin-set order. */
export async function getMarkets(): Promise<Market[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("secondary_markets")
    .select("slug, label, match_phrase")
    .is("retired_at", null)
    .order("sort_order");

  if (error) throw error;

  return (data ?? []).map((row) => ({
    slug: row.slug,
    label: row.label,
    matchText: [row.label, row.match_phrase].filter(Boolean).join(" "),
  }));
}

/**
 * The example sentences to offer under question 1.
 *
 * Chosen from what is actually on the platform, so a suggestion never leads
 * to an empty results page. That is the whole point: the screen exists to
 * show a woman the kind of thing she can type, and teaching her that the
 * platform has nothing for it would be worse than showing her nothing.
 *
 * Situations first, because a situation with live listings behind it means
 * there is something open to find. Markets fill the rest, because a market
 * with organisations behind it means there is somebody to go to even when
 * nothing is open.
 *
 * Ordered by how much sits behind each, so the list leads with what the
 * platform is strongest at and reorders itself as that changes.
 */
export async function getNeedSuggestions(): Promise<string[]> {
  const supabase = await createClient();

  const [{ data: listings }, { data: organisations }] = await Promise.all([
    supabase
      .from("public_listing_cards")
      .select("situation_slugs")
      .eq("status", "live"),
    supabase.from("public_organisation_search").select("market_slugs"),
  ]);

  const count = (rows: { [k: string]: unknown }[] | null, key: string) => {
    const tally = new Map<string, number>();
    for (const row of rows ?? []) {
      for (const slug of (row[key] as string[] | null) ?? []) {
        tally.set(slug, (tally.get(slug) ?? 0) + 1);
      }
    }
    return tally;
  };

  const bySituation = count(listings, "situation_slugs");
  const byMarket = count(organisations, "market_slugs");

  const ranked = (
    tally: Map<string, number>,
    phrases: Record<string, string>,
  ) =>
    [...tally.entries()]
      .filter(([slug, n]) => n > 0 && phrases[slug])
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([slug]) => phrases[slug]);

  // A sentence that appears in both lists is only worth offering once.
  const suggestions = [
    ...ranked(bySituation, SITUATION_SUGGESTIONS),
    ...ranked(byMarket, MARKET_SUGGESTIONS),
  ];

  const unique = [...new Set(suggestions)].slice(0, MAX_SUGGESTIONS);

  return unique.length > 0
    ? unique
    : FALLBACK_SUGGESTIONS.slice(0, MAX_SUGGESTIONS);
}
