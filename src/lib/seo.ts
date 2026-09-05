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

  const root = process.env.NEXT_PUBLIC_ROOT_DOMAIN?.trim();
  if (root) {
    const scheme = root.startsWith("localhost") ? "http" : "https";
    return `${scheme}://${root}`;
  }

  return "http://localhost:3000";
}

/** True when this deployment is allowed into search results at all. */
export function indexingAllowed(): boolean {
  return process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
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
