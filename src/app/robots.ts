import type { MetadataRoute } from "next";

/**
 * Search engines, kept out until somebody says otherwise.
 *
 * The platform carries a "Checked by HWS" stamp beside every organisation,
 * and while it is being built that stamp sits against demo text written by
 * nobody at those organisations. Business Gateway and NHS Inform have not
 * agreed to anything here yet. A crawler indexing that is how an invented
 * programme ends up in somebody's search results with a real charity's name
 * on it, and it outlives the seed data by months.
 *
 * So the default is closed and opening it is deliberate: set
 * NEXT_PUBLIC_ALLOW_INDEXING=true in the environment when the data is real.
 * A default of open would have meant remembering to close it, which is the
 * wrong way round for a mistake nobody can take back.
 */
export default function robots(): MetadataRoute.Robots {
  const live = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

  return live
    ? { rules: { userAgent: "*", allow: "/" } }
    : { rules: { userAgent: "*", disallow: "/" } };
}
