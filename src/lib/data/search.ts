import "server-only";
import { createClient } from "@/lib/supabase/server";

/** A live listing with everything the ranker and the card need. */
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
  last_confirmed_at: string | null;
  organisationName: string;
  organisationPlace: string | null;
  situationSlugs: string[];
};

/**
 * Every live listing.
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
    last_confirmed_at: row.last_confirmed_at,
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
