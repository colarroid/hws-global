"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

/**
 * Page analytics, with her words stripped out before anything leaves the
 * browser.
 *
 * WHY THIS ONE. Vercel Web Analytics sets no cookie, stores no identifier,
 * and follows nobody between sites. That is not a preference here, it is what
 * the privacy policy already promises: "we will never use what you searched
 * for to build a profile of you, or to target advertising at you", and the
 * cookie notice says "we use a few cookies, and none of them watch you".
 * Google Analytics would make both of those sentences false the day it
 * shipped, and under PECR it would need a real consent gate with a working
 * reject button, which the current notice is not.
 *
 * WHAT beforeSend IS FOR, and it is the important part. On this platform the
 * query string is the sensitive bit:
 *
 *   /results?need=leaving+my+husband&place=...   her own sentence
 *   /account/code?email=...                      her address
 *   /talk?need=...                               both, on the way to a call
 *
 * Any analytics product that records a URL records those. So the query string
 * is removed from every event before it is sent, everywhere, rather than on a
 * list of routes somebody has to remember to extend. What survives is the
 * path — which pages get used and in what order — which is the whole of what
 * this is for.
 *
 * Paths themselves are safe: /service/<id> and /organisation/<id> are public
 * pages about an organisation, not about her.
 *
 * It only reports anything at all once Web Analytics is enabled for the
 * project in the Vercel dashboard. Until then the script 404s and the site
 * carries on, which is the right failure.
 */
export function Analytics() {
  return (
    <VercelAnalytics
      beforeSend={(event) => {
        try {
          const url = new URL(event.url);
          if (!url.search) return event;
          url.search = "";
          return { ...event, url: url.toString() };
        } catch {
          // An unparseable URL is not worth reporting, and guessing at how to
          // clean it is how her sentence ends up in a dashboard.
          return null;
        }
      }}
    />
  );
}
