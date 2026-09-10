/**
 * The testimonials on the landing page.
 *
 * ────────────────────────────────────────────────────────────────────
 * EVERY QUOTE BELOW IS INVENTED. NOBODY SAID ANY OF IT.
 *
 * The platform has no users yet, so there is nothing real to quote. These
 * exist so HWS can see and approve the design, in the same way the demo
 * organisations exist, and they carry the same obligation: they must be
 * replaced with real, permitted quotes or deleted before anybody outside
 * the team is sent to the site.
 *
 * A fabricated testimonial is worse than fabricated demo data. Demo data
 * misrepresents a service; this misrepresents a person, on a platform whose
 * entire argument is that somebody checked. If real quotes are not ready by
 * launch, empty the array — the section then renders the three promises on
 * their own and nothing looks unfinished.
 * ────────────────────────────────────────────────────────────────────
 *
 * When the real ones arrive:
 *
 *   * Get written permission, and keep it. A woman who used this platform
 *     is by definition someone who was looking for help, and her name next
 *     to that fact is disclosure whether or not she thinks of it that way.
 *   * A first name and a place is usually enough attribution and is a lot
 *     safer than a full name. Ask what she wants shown.
 *   * Four is the maximum the slider will show. Any more are ignored, so
 *     the strongest four go at the top.
 */

export type Testimonial = {
  /** Her words. One or two sentences: longer does not get read. */
  quote: string;
  /** How she is credited. First name, or first name and place. */
  name: string;
  /** Optional context, e.g. what she was looking for. */
  context?: string;
};

/** The slider shows at most this many, whatever the array holds. */
export const MAX_TESTIMONIALS = 4;

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I had been looking for months and kept landing on pages that were out of date. Here it told me the date somebody last checked, so I knew which ones were worth an afternoon.",
    name: "Placeholder — not a real quote",
    context: "Returning to work",
  },
  {
    quote:
      "I did not know what to call what I needed. I typed it the way I would say it out loud and it still found things.",
    name: "Placeholder — not a real quote",
    context: "Money is tight",
  },
  {
    quote:
      "It told me who each thing was not for, which sounds small. It meant I stopped applying for things that were never going to take me.",
    name: "Placeholder — not a real quote",
    context: "Starting a business",
  },
  {
    quote:
      "Nothing came back the first time, and instead of an empty page it offered me a call. Somebody rang when they said they would.",
    name: "Placeholder — not a real quote",
    context: "New to Scotland",
  },
];
