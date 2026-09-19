import type { Metadata } from "next";

/**
 * One place that decides what a page tells a search engine and a link
 * preview.
 *
 * Two reasons it is centralised rather than written out on each screen.
 *
 * The first is that half of these pages must never be indexed and it is not
 * obvious which half. Anything downstream of a woman's answers is about her,
 * not about the platform: her results, her saved list, her settings, the
 * screen that carries her situation in a query string. None of it is useful
 * to a stranger arriving from a search engine and some of it would be a
 * disclosure. `indexable: false` is therefore the safer default to reach for,
 * and the flag is named so that leaving it out on a private page is visible
 * in review.
 *
 * The second is that a link to this platform is often pasted into a message
 * by a support worker, a friend or a group chat. What unfurls there is the
 * whole of the first impression, and a preview that says nothing but the
 * domain wastes it.
 */

export const SITE_NAME = "HWS Path Grid";

/**
 * The public origin, for canonical URLs and absolute preview images.
 *
 * Falls back to the root domain used to link the three subdomains together,
 * and finally to localhost so a developer preview does not emit canonicals
 * pointing at production.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  /*
   * Vercel's own name for this project's production domain.
   *
   * This exists because of a real failure, found on 19 September while
   * opening the site to search engines: neither variable below was set in
   * production, so every deployed page had been serving
   *
   *     <link rel="canonical" href="http://localhost:3000/faq">
   *
   * and og:url to match. A canonical is a page naming its own true address,
   * and this one named an address nobody outside the machine can reach. The
   * sitemap would have listed the same host, which search engines reject
   * outright because a sitemap may only contain URLs on its own domain.
   *
   * Nothing warned. It renders, it deploys, it looks right in a browser, and
   * it only bites the moment a crawler is let in — which was the very next
   * step. So the fallback is no longer a developer's localhost but the
   * platform's own answer, which is correct without anybody setting it.
   *
   * VERCEL_PROJECT_PRODUCTION_URL rather than VERCEL_URL: the latter is the
   * unique per-deployment hostname, which changes every push and is the
   * wrong thing to canonicalise to. This one is the domain the project is
   * actually served on, and it reads the same from a preview build.
   *
   * NEXT_PUBLIC_SITE_URL still wins, and is worth setting anyway so the
   * apex-versus-www choice is written down rather than inferred.
   */
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  const root = process.env.NEXT_PUBLIC_ROOT_DOMAIN?.trim();
  if (root) {
    const scheme = root.startsWith("localhost") ? "http" : "https";
    return `${scheme}://${root}`;
  }

  return "http://localhost:3000";
}

/**
 * True when this deployment is allowed into search results at all.
 *
 * The single definition. robots.ts used to read the variable itself, which
 * meant two places could disagree about whether the site was open — and the
 * failure mode of disagreeing is a page that tells crawlers to stay out while
 * robots.txt waves them in, or the reverse.
 *
 * WHY THE DEPLOYMENT DECIDES, and not a variable somebody remembers to set.
 *
 * Until 19 September this was one flag, default closed, because the platform
 * carried demo listings under real organisations' names and a crawler
 * indexing those outlives the seed data by months. That danger is gone: the
 * demo roster was removed and HWS asked for the site to be opened.
 *
 * What replaces it is the distinction that actually matters. Production is
 * the only deployment that should ever be indexed. Preview builds are the
 * real hazard now — every branch gets its own public URL, and an indexed
 * preview is duplicate content competing with the live site under a hostname
 * nobody meant to publish. Keying on VERCEL_ENV gets that right by itself,
 * where "set NEXT_PUBLIC_ALLOW_INDEXING=true" in a dashboard is one wrong
 * scope box away from opening every preview too.
 *
 * The variable still wins when set, in both directions, so "true" opens a
 * non-production deployment for testing and "false" is a kill switch that
 * closes production without a code change.
 */
export function indexingAllowed(): boolean {
  const flag = process.env.NEXT_PUBLIC_ALLOW_INDEXING;
  if (flag === "true") return true;
  if (flag === "false") return false;

  return process.env.VERCEL_ENV === "production";
}

type PageMetadataInput = {
  /** The page title, without the site suffix. The layout template adds it. */
  title: string;
  /** One or two sentences. Written for a person, not for a crawler. */
  description: string;
  /** Path from the root, e.g. "/discover". Used for the canonical URL. */
  path?: string;
  /**
   * Whether this page belongs in search results.
   *
   * False for anything that is about one woman rather than about the
   * platform: her results, her saved list, her account, her settings, and
   * every step that carries her answers.
   */
  indexable?: boolean;
  /** Overrides the default preview image for this page. */
  image?: string;
};

/**
 * The metadata for one page.
 *
 * Even on an indexable page the robots directive is held shut while the whole
 * deployment is, so opening the site to search engines is one environment
 * variable rather than a sweep through every file.
 */
export function pageMetadata({
  title,
  description,
  path,
  indexable = false,
  image,
}: PageMetadataInput): Metadata {
  const index = indexable && indexingAllowed();
  const url = path ? `${siteUrl()}${path}` : undefined;

  /*
   * The generated preview image, named rather than inherited.
   *
   * Next attaches app/opengraph-image automatically only to pages that do not
   * declare an openGraph block of their own. Every page that calls this does
   * declare one, to get its own title and description into the preview, and
   * that silently dropped the image everywhere but the landing page. Naming
   * it here is what puts it back, and it stays one file rather than one per
   * page.
   */
  const preview = image ?? "/opengraph-image";
  const images = [{ url: preview, width: 1200, height: 630, alt: title }];

  return {
    title,
    description,
    ...(path ? { alternates: { canonical: path } } : {}),
    robots: {
      index,
      follow: index,
      googleBot: { index, follow: index },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
      title,
      description,
      ...(url ? { url } : {}),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [preview],
    },
  };
}
