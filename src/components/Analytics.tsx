"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/**
 * Strip the query string off an event before it is sent.
 *
 * THE POINT OF THIS FILE. On this platform the query string is the sensitive
 * part:
 *
 *   /results?need=leaving+my+husband&place=...   her own sentence
 *   /account/code?email=...                      her address
 *   /talk?need=...                               both, on the way to a call
 *
 * Any product that records a URL records those. So it is removed from every
 * event, everywhere, rather than on a list of routes somebody has to remember
 * to extend when a screen is added. What survives is the path — which pages
 * get used and in what order — which is the whole of what this is for.
 *
 * Paths themselves are safe: /service/<id> and /organisation/<id> are public
 * pages about an organisation, not about her.
 *
 * Shared by both reporters below rather than written twice, because the two
 * drifting apart is exactly the sort of thing nobody would notice until a
 * dashboard had a woman's sentence in it.
 */
function withoutQuery<T extends { url: string }>(event: T): T | null {
  try {
    const url = new URL(event.url);
    if (!url.search) return event;
    url.search = "";
    return { ...event, url: url.toString() };
  } catch {
    // An unparseable URL is not worth reporting, and guessing at how to clean
    // it is how her sentence ends up somewhere it should not be.
    return null;
  }
}

/**
 * Page analytics and real-visitor performance, with her words taken out.
 *
 * WHY VERCEL AND NOT GOOGLE. Neither of these sets a cookie, stores an
 * identifier, or follows anybody between sites. That is not a preference, it
 * is what the privacy policy already promises — "we will never use what you
 * searched for to build a profile of you, or to target advertising at you" —
 * and what the cookie notice says: "none of them watch you". Google Analytics
 * would make both sentences false the day it shipped, and under PECR would
 * need a real consent gate with a working reject button, which that notice is
 * not.
 *
 * Analytics answers which pages get used. Speed Insights answers how they
 * actually performed for a real visitor on a real phone, which matters here
 * more than most: a lot of this platform is read on old Android handsets on
 * mobile data, and a lab score on a developer's laptop says nothing about
 * that.
 *
 * Neither reports anything until it is enabled for the project in the Vercel
 * dashboard. Until then the scripts 404 and the site carries on, which is the
 * right failure.
 */
export function Analytics() {
  return (
    <>
      <VercelAnalytics beforeSend={withoutQuery} />
      <SpeedInsights beforeSend={withoutQuery} />
    </>
  );
}
