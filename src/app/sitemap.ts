import type { MetadataRoute } from "next";
import { getZonesWithCounts, getNeedsWithCounts } from "@/lib/data/discover";
import { getLiveListings, getSearchableOrganisations } from "@/lib/data/search";
import { indexingAllowed, siteUrl } from "@/lib/seo";

/**
 * The map handed to search engines.
 *
 * Only the pages that are about the platform. Everything downstream of a
 * woman's answers is about her: her results, her saved list, her settings,
 * every step carrying what she typed. None of it belongs in an index and some
 * of it would be a disclosure, so the list here is built by naming what goes
 * in rather than by filtering what comes out. A sitemap assembled by
 * exclusion grows a private page the first time somebody adds a route and
 * forgets this file.
 *
 * Built from the same public views the pages read, so a listing that comes
 * down or an organisation that is unverified leaves the sitemap on its own.
 *
 * Empty while indexing is closed. robots.txt already says stay out; handing a
 * crawler a list of everything to fetch at the same time is the sort of mixed
 * message that gets a site indexed anyway.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!indexingAllowed()) return [];

  const base = siteUrl();
  const now = new Date();

  const fixed: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${base}/find`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/discover`, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${base}/faq`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/help`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/privacy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly" as const, priority: 0.3 },
  ].map((entry) => ({ ...entry, lastModified: now }));

  // One failure here must not take the whole sitemap down, so each list is
  // allowed to come back empty rather than throw.
  const [zones, needs, organisations, listings] = await Promise.all([
    getZonesWithCounts().catch(() => []),
    getNeedsWithCounts().catch(() => []),
    getSearchableOrganisations().catch(() => []),
    getLiveListings().catch(() => []),
  ]);

  return [
    ...fixed,
    ...zones.map((zone) => ({
      url: `${base}/discover/${zone.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...needs.map((need) => ({
      url: `${base}/discover/need/${need.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...organisations.map((organisation) => ({
      url: `${base}/organisation/${organisation.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...listings.map((listing) => ({
      url: `${base}/service/${listing.id}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}
