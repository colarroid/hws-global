import "server-only";

/**
 * Where "talk to someone" goes.
 *
 * Deliberately a URL in the environment rather than a vendor in the code.
 * Calendly, Cal.com, SimplyBook and the rest all hand you one link, so
 * nothing here needs to know which one HWS picked, and changing it later is
 * a redeploy rather than a rewrite.
 *
 * WHY IT IS A LINK AND NOT AN EMBED
 *
 * Every scheduler offers an inline widget, and on this screen it would be a
 * privacy leak rather than a convenience. The no-match screen renders at
 * /results?need=...&place=..., so her sentence is in the address bar. A
 * third-party script on that page receives the full URL, along with her IP,
 * by way of the referrer and its own telemetry. "I need to leave my husband"
 * is not a thing to hand a scheduling company because it was easier to embed
 * than to link.
 *
 * It would also make the cookie notice untrue. That notice says there is no
 * third party and nothing that follows anybody across sites, and it says so
 * on the strength of there being exactly three cookies. An embed puts that
 * back on the table and turns a notice into a consent gate.
 *
 * So: a link, opened in a new tab, and `rel="noreferrer"` on it, which is the
 * part that actually matters. Without it the scheduler still learns what she
 * searched for, from the Referer header, the moment she clicks.
 */
export function bookingUrl(): string | null {
  const raw = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  if (!raw) return null;

  // A bare host would resolve as a relative path and send her nowhere.
  // Refused rather than guessed at, so a mis-set variable fails here and not
  // in front of somebody who has just been told nothing matched.
  if (!/^https:\/\//i.test(raw)) return null;

  return raw;
}
