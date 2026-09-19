import type { MetadataRoute } from "next";
import { indexingAllowed, siteUrl } from "@/lib/seo";

/**
 * What crawlers are told.
 *
 * The decision itself lives in `indexingAllowed`, which is also what the
 * page-level robots directives read. This file used to test the environment
 * variable on its own, and two places deciding the same thing separately is
 * how a site ends up serving a robots.txt that says come in above pages that
 * say stay out.
 *
 * Open on production, closed everywhere else. The disallow on a preview is
 * the point rather than an afterthought: every branch gets a public URL, and
 * an indexed preview is the live site's own duplicate competing with it.
 *
 * The sitemap is named here as well as submitted by hand in Search Console,
 * because a crawler that arrives from a link rather than from the console
 * should still be told where the map is. It is only pointed at when the site
 * is open; advertising a map while refusing entry is a mixed message, and
 * `sitemap.ts` returns nothing in that state anyway.
 */
export default function robots(): MetadataRoute.Robots {
  if (!indexingAllowed()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      /*
       * The routes that carry what a woman typed, kept out of search results
       * even though the site is open.
       *
       * Every one of these already says noindex for itself through
       * pageMetadata, and that is the control that actually binds. This is
       * the second line: noindex only works on a page a crawler has already
       * fetched, and these URLs have her own sentence, her place and her
       * situation in the query string. Being asked not to fetch them at all
       * is a stronger promise than being asked to forget them afterwards.
       */
      disallow: [
        "/results",
        "/refine",
        "/talk",
        "/saved",
        "/settings",
        "/account",
        "/change",
        "/start-over",
        "/go/",
      ],
    },
    sitemap: `${siteUrl()}/sitemap.xml`,
  };
}
