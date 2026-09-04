import "server-only";
import { createClient } from "@/lib/supabase/server";

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
}) {
  const supabase = await createClient();
  await supabase.from("unmet_searches").insert({
    need: input.need || null,
    place: input.place || null,
    situations: input.situations,
    result_count: input.resultCount,
  });
}

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
