/**
 * The platform ships as three sites on one deployment, split by subdomain:
 *
 *   organisations.<root>   the organisation portal
 *   administrator.<root>   the HWS admin tools
 *   <root> and www.<root>  the woman-facing flow and the landing page
 *
 * Middleware rewrites the hostname onto an internal path prefix, so each
 * site is an ordinary route tree under src/app and nothing about the
 * subdomain leaks into the components.
 */

export const SITES = ["organisations", "admin", "women"] as const;
export type Site = (typeof SITES)[number];

/** Internal path prefix each site's routes live under. */
export const SITE_PREFIX: Record<Site, string> = {
  organisations: "/organisations",
  admin: "/admin",
  women: "/women",
};

/** Subdomain label that selects each site. `women` is the bare root. */
const SUBDOMAIN: Record<string, Site> = {
  organisations: "organisations",
  administrator: "admin",
};

/**
 * Resolve a site from a Host header.
 *
 * Handles `organisations.localhost:3000` in development and
 * `organisations.example.com` in production identically, because in both
 * cases the site is decided by the first label. `www` is treated as bare.
 */
export function siteFromHost(host: string | null): Site {
  if (!host) return "women";

  const hostname = host.split(":")[0].toLowerCase();
  const labels = hostname.split(".");

  // A bare host (`localhost`, `example.com`) has no site label to read.
  if (labels.length < 2) return "women";

  const first = labels[0];
  if (first === "www") return "women";

  return SUBDOMAIN[first] ?? "women";
}
