import "server-only";
import { createClient } from "@/lib/supabase/server";

/**
 * Browsing, as opposed to searching.
 *
 * Search answers "I need this". Discover answers "who is out there", which is
 * a different question and often an earlier one: a woman who cannot yet name
 * what she needs has nothing to type into three questions. Access Zones are
 * the way in because they are how HWS already divides the work, so what she
 * browses matches what the platform actually knows.
 *
 * Everything here reads a public view. `organisations` and
 * `organisation_zones` are member-only tables, so these views are the only
 * route from a woman who is not signed in to who works where. See migration
 * 0019 for what those views are allowed to carry.
 */

export type Zone = {
  id: string;
  slug: string;
  name: string;
  focus: string;
  /** Verified organisations working in this zone, primary or otherwise. */
  organisationCount: number;
};

export type OrganisationCard = {
  id: string;
  name: string;
  place: string | null;
  blurb: string | null;
  logoUrl: string | null;
  coverage: string | null;
  serviceKinds: string[];
  audiences: string[];
  liveListings: number;
  /** True when this zone is the one they named as their own. */
  isPrimary: boolean;
};

export type OrganisationProfile = {
  id: string;
  name: string;
  types: string[];
  place: string | null;
  blurb: string | null;
  mission: string | null;
  uniqueOffer: string | null;
  audiences: string[];
  audiencesOther: string | null;
  serviceKinds: string[];
  accessRoutes: string[];
  costOptions: string[];
  costNote: string | null;
  coverage: string | null;
  coverageNote: string | null;
  eligibility: string | null;
  notEligible: string | null;
  availability: string | null;
  availabilityNote: string | null;
  website: string | null;
  logoUrl: string | null;
  verifiedAt: string | null;
  liveListings: number;
};

function logoUrl(
  supabase: Awaited<ReturnType<typeof createClient>>,
  path: string | null | undefined,
): string | null {
  if (!path) return null;
  return supabase.storage.from("organisation-logos").getPublicUrl(path).data
    .publicUrl;
}

/**
 * Every zone, with how many organisations are in it.
 *
 * The count is on the card because a zone with nothing behind it is a dead
 * end, and finding that out after a tap is the sort of thing that teaches a
 * woman the site is not worth exploring.
 */
export async function getZonesWithCounts(): Promise<Zone[]> {
  const supabase = await createClient();

  const { data: zones, error } = await supabase
    .from("access_zones")
    .select("id, slug, name, focus")
    .is("retired_at", null)
    .order("sort_order");

  if (error) throw error;

  const { data: memberships, error: membershipError } = await supabase
    .from("public_organisation_cards")
    .select("zone_id, id");

  // Not swallowed. A failed query and an empty platform both render as
  // "Nobody here yet" on every card, which is the most convincing way to
  // tell a woman there is no help for her.
  if (membershipError) throw membershipError;

  const counts = new Map<string, Set<string>>();
  for (const row of memberships ?? []) {
    // A set rather than a tally: an organisation appears once per zone, but
    // counting rows would still be wrong the moment the view gains a join.
    const seen = counts.get(row.zone_id) ?? new Set<string>();
    seen.add(row.id);
    counts.set(row.zone_id, seen);
  }

  return (zones ?? []).map((zone) => ({
    ...zone,
    organisationCount: counts.get(zone.id)?.size ?? 0,
  }));
}

export async function getZone(slug: string): Promise<Zone | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("access_zones")
    .select("id, slug, name, focus")
    .eq("slug", slug)
    .is("retired_at", null)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  const { count, error: countError } = await supabase
    .from("public_organisation_cards")
    .select("id", { count: "exact", head: true })
    .eq("zone_id", data.id);

  if (countError) throw countError;

  return { ...data, organisationCount: count ?? 0 };
}

/**
 * Who works in one zone, the ones who named it as their own first.
 *
 * An organisation lists up to three zones: one primary and two it also
 * covers. Leading with the primary is not favouritism, it is accuracy — a
 * zone is somebody's whole reason for existing before it is somebody else's
 * third answer, and a woman reading top to bottom should meet them in that
 * order.
 */
export async function getOrganisationsInZone(
  zoneId: string,
): Promise<OrganisationCard[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("public_organisation_cards")
    .select(
      "id, name, place, blurb, logo_path, coverage, service_kinds, audiences, role, live_listings",
    )
    .eq("zone_id", zoneId)
    .order("name");

  if (error) throw error;

  type Row = {
    id: string;
    name: string;
    place: string | null;
    blurb: string | null;
    logo_path: string | null;
    coverage: string | null;
    service_kinds: string[] | null;
    audiences: string[] | null;
    role: string;
    live_listings: number | null;
  };

  return ((data ?? []) as Row[])
    .map((row) => ({
      id: row.id,
      name: row.name,
      place: row.place,
      blurb: row.blurb,
      logoUrl: logoUrl(supabase, row.logo_path),
      coverage: row.coverage,
      serviceKinds: row.service_kinds ?? [],
      audiences: row.audiences ?? [],
      liveListings: row.live_listings ?? 0,
      isPrimary: row.role === "primary",
    }))
    .sort(
      (a, b) =>
        Number(b.isPrimary) - Number(a.isPrimary) || a.name.localeCompare(b.name),
    );
}

/** One organisation's public page, or null if it is not verified. */
export async function getOrganisationProfile(
  id: string,
): Promise<OrganisationProfile | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("public_organisation_profiles")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  return {
    id: data.id,
    name: data.name,
    types: data.types ?? [],
    place: data.place,
    blurb: data.blurb,
    mission: data.mission,
    uniqueOffer: data.unique_offer,
    audiences: data.audiences ?? [],
    audiencesOther: data.audiences_other,
    serviceKinds: data.service_kinds ?? [],
    accessRoutes: data.access_routes ?? [],
    costOptions: data.cost_options ?? [],
    costNote: data.cost_note,
    coverage: data.coverage,
    coverageNote: data.coverage_note,
    eligibility: data.eligibility,
    notEligible: data.not_eligible,
    availability: data.availability,
    availabilityNote: data.availability_note,
    website: data.website,
    logoUrl: logoUrl(supabase, data.logo_path),
    verifiedAt: data.verified_at,
    liveListings: data.live_listings ?? 0,
  };
}

/** The zones one organisation works in, for its own page. */
export async function getZonesForOrganisation(
  organisationId: string,
): Promise<{ name: string; slug: string; isPrimary: boolean }[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("public_organisation_cards")
    .select("zone_id, role")
    .eq("id", organisationId);

  if (error) throw error;

  const ids = (data ?? []).map((row) => row.zone_id);
  if (ids.length === 0) return [];

  const { data: zones } = await supabase
    .from("access_zones")
    .select("id, name, slug")
    .in("id", ids)
    .is("retired_at", null)
    .order("sort_order");

  const roles = new Map((data ?? []).map((row) => [row.zone_id, row.role]));

  return (zones ?? []).map((zone) => ({
    name: zone.name,
    slug: zone.slug,
    isPrimary: roles.get(zone.id) === "primary",
  }));
}

/** The live listings one organisation has, for the foot of its page. */
export async function getListingsForOrganisation(organisationId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("public_listing_cards")
    .select("id, name, blurb, kind, cost, deadline, status")
    .eq("organisation_id", organisationId)
    .eq("status", "live")
    .order("name");

  if (error) throw error;

  return data ?? [];
}

/**
 * The search term, made safe to interpolate.
 *
 * PostgREST parses its filters out of the query string, so a comma or a
 * bracket typed into a search box is a syntax error at best and somebody
 * else's filter at worst. `%` and `_` are LIKE wildcards, which would let a
 * search match things it does not look like it should. None of them are worth
 * supporting in a name search, so they are dropped rather than escaped.
 */
function safeTerm(raw: string) {
  return raw
    .replace(/[,.()*\%_"']/g, " ")
    .trim()
    .slice(0, 80);
}

/**
 * Organisations matching what she typed.
 *
 * Searches the name, the one-line description and the mission, because a
 * woman browsing rarely knows an organisation by name — she knows what it
 * does. Place is in there too, since "Fife" is a reasonable thing to type
 * into a box on a page about who works where.
 *
 * This is not the matching engine. That lives in three questions and weighs
 * her situation, her area and her own words; this is a text search over
 * organisations, and the page says so rather than implying otherwise.
 */
export async function searchOrganisations(
  raw: string,
): Promise<OrganisationCard[]> {
  const term = safeTerm(raw);
  if (!term) return [];

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("public_organisation_profiles")
    .select(
      "id, name, place, blurb, mission, logo_path, coverage, service_kinds, audiences, live_listings",
    )
    .or(
      [
        `name.ilike.%${term}%`,
        `blurb.ilike.%${term}%`,
        `mission.ilike.%${term}%`,
        `place.ilike.%${term}%`,
      ].join(","),
    )
    .order("name")
    .limit(50);

  if (error) throw error;

  type Row = {
    id: string;
    name: string;
    place: string | null;
    blurb: string | null;
    logo_path: string | null;
    coverage: string | null;
    service_kinds: string[] | null;
    audiences: string[] | null;
    live_listings: number | null;
  };

  return ((data ?? []) as Row[]).map((row) => ({
    id: row.id,
    name: row.name,
    place: row.place,
    blurb: row.blurb,
    logoUrl: logoUrl(supabase, row.logo_path),
    coverage: row.coverage,
    serviceKinds: row.service_kinds ?? [],
    audiences: row.audiences ?? [],
    liveListings: row.live_listings ?? 0,
    // Meaningless outside a zone page, where it decides the order.
    isPrimary: false,
  }));
}

export type Need = {
  slug: string;
  label: string;
  organisationCount: number;
};

/**
 * The practical needs, with how many organisations cover each.
 *
 * Offered above the Access Zones on Discover, because a zone is HWS's way of
 * dividing the work and a need is hers. "I want to return to work" is a
 * sentence somebody says; "Career, Confidence & Employability" is a heading
 * in a strategy document. Both are on the page, in that order.
 */
export async function getNeedsWithCounts(): Promise<Need[]> {
  const supabase = await createClient();

  const { data: markets, error } = await supabase
    .from("secondary_markets")
    .select("slug, label")
    .is("retired_at", null)
    .order("sort_order");

  if (error) throw error;

  const { data: rows, error: rowsError } = await supabase
    .from("public_organisation_search")
    .select("id, market_slugs");

  if (rowsError) throw rowsError;

  const counts = new Map<string, number>();
  for (const row of rows ?? []) {
    for (const slug of (row.market_slugs as string[] | null) ?? []) {
      counts.set(slug, (counts.get(slug) ?? 0) + 1);
    }
  }

  return (markets ?? []).map((market) => ({
    slug: market.slug,
    label: market.label,
    organisationCount: counts.get(market.slug) ?? 0,
  }));
}

export async function getNeed(slug: string): Promise<Need | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("secondary_markets")
    .select("slug, label")
    .eq("slug", slug)
    .is("retired_at", null)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  const all = await getOrganisationsForNeed(slug);
  return { slug: data.slug, label: data.label, organisationCount: all.length };
}

/**
 * Everyone HWS says can help with one need.
 *
 * Ordered by whether they have something open, because a woman who has come
 * this far is looking for a next step and one that exists beats one that
 * might. Then alphabetically, so the order is stable rather than whatever
 * the database returned.
 */
export async function getOrganisationsForNeed(
  slug: string,
): Promise<OrganisationCard[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("public_organisation_search")
    .select(
      "id, name, place, blurb, logo_path, coverage, service_kinds, audiences, market_slugs, live_listings",
    )
    .contains("market_slugs", [slug])
    .order("name");

  if (error) throw error;

  type Row = {
    id: string;
    name: string;
    place: string | null;
    blurb: string | null;
    logo_path: string | null;
    coverage: string | null;
    service_kinds: string[] | null;
    audiences: string[] | null;
    live_listings: number | null;
  };

  return ((data ?? []) as Row[])
    .map((row) => ({
      id: row.id,
      name: row.name,
      place: row.place,
      blurb: row.blurb,
      logoUrl: logoUrl(supabase, row.logo_path),
      coverage: row.coverage,
      serviceKinds: row.service_kinds ?? [],
      audiences: row.audiences ?? [],
      liveListings: row.live_listings ?? 0,
      // Meaningless outside a zone page, where it decides the order.
      isPrimary: false,
    }))
    .sort(
      (a, b) =>
        b.liveListings - a.liveListings || a.name.localeCompare(b.name),
    );
}
