import "server-only";
import { createClient } from "@/lib/supabase/server";

export type Service = {
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
  /** When the organisation last changed what this says. */
  updated_at: string | null;
  status: "live" | "closed";
  organisationName: string;
  organisationPlace: string | null;
  organisationBlurb: string | null;
  organisationWebsite: string | null;
  situationSlugs: string[];
};

/**
 * One service, live or closed.
 *
 * Closed listings resolve rather than 404, because a woman may have saved
 * this one or followed a link to it months later. The page marks it closed
 * and offers a way onward; it does not pretend it was never there.
 */
export async function getService(id: string): Promise<Service | null> {
  const supabase = await createClient();

  const { data } = await supabase
    .from("public_service_pages")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!data) return null;

  return {
    id: data.id,
    name: data.name,
    kind: data.kind,
    blurb: data.blurb,
    who_for: data.who_for,
    what_to_expect: data.what_to_expect,
    cost: data.cost,
    formats: data.formats ?? [],
    place: data.place,
    deadline: data.deadline,
    apply_url: data.apply_url,
    last_confirmed_at: data.last_confirmed_at,
    updated_at: data.updated_at,
    status: data.status,
    organisationName: data.organisation_name ?? "",
    organisationPlace: data.organisation_place,
    organisationBlurb: data.organisation_blurb,
    organisationWebsite: data.organisation_website,
    situationSlugs: data.situation_slugs ?? [],
  };
}

/** The host a handover will send her to, for naming it before she goes. */
export function applyHost(url: string | null): string | null {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}
