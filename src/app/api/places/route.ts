import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

const NOTES: Record<string, string> = {
  town: "town",
  council_area: "council area",
  postcode_district: "postcode area",
};

/**
 * Place lookup for question 2.
 *
 * Matches on any prefix, so a partial postcode resolves to its district and
 * she is never asked for a full one.
 *
 * Each match carries two strings. `name` and `note` are what she reads.
 * `value` is what gets carried into the search, and it deliberately keeps
 * every level of the place: a postcode on its own matches nothing, because
 * listings record the town they run in, not the postcodes around it.
 *
 * Places are not personal data, so this is readable signed out.
 */
export async function GET(request: NextRequest) {
  const query = (request.nextUrl.searchParams.get("q") ?? "").trim();
  if (query.length < 2) return NextResponse.json([]);

  const supabase = await createClient();
  const { data } = await supabase
    .from("places")
    .select("name, kind, council_area")
    .ilike("name", `${query}%`)
    .order("kind")
    .limit(6);

  return NextResponse.json(
    (data ?? []).map((place) => ({
      name: place.name,
      note: place.council_area ?? NOTES[place.kind] ?? place.kind,
      value: [place.name, place.council_area].filter(Boolean).join(" · "),
    })),
  );
}
