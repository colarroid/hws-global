/**
 * The testimonials on the landing page and the organisations page.
 *
 * ────────────────────────────────────────────────────────────────────
 * READ THIS BEFORE LAUNCH.
 *
 * EVERY QUOTE BELOW IS INVENTED. NOBODY SAID ANY OF IT. The names are
 * invented too. The platform has no users yet, so there is nothing real to
 * quote, and these exist only so the design can be seen and approved.
 *
 * They used to be attributed to "Placeholder, not a real quote", which made
 * that obvious on the page itself. HWS asked for realistic content instead,
 * so nothing on the page now says these are invented. That warning lives
 * here and only here.
 *
 * They must be replaced with real, permitted quotes or deleted before
 * anybody outside the team is sent to the site. If real ones are not ready,
 * empty the array: both sections then render the three promises on their
 * own and nothing looks unfinished.
 *
 * A fabricated testimonial is worse than the fabricated demo listings in the
 * database. Those misrepresent a service. These misrepresent a person, on a
 * platform whose entire argument is that somebody checked.
 * ────────────────────────────────────────────────────────────────────
 *
 * When the real ones arrive:
 *
 *   * Get written permission and keep it. A woman who used this platform is
 *     by definition somebody who was looking for help, and her name beside
 *     that fact is a disclosure whether or not she thinks of it that way.
 *   * A first name and a place is enough, and is a great deal safer than a
 *     full name. Ask her what she wants shown. The shape below is already
 *     that shape.
 *   * Four is the maximum the slider shows. Any more are ignored, so the
 *     strongest four go at the top.
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
      "I had been looking for months and kept landing on pages that were out of date. This one told me when somebody last checked, so I knew which ones were worth an afternoon.",
    name: "Amara, Glasgow",
    context: "Returning to work",
  },
  {
    quote:
      "I did not know what to call what I needed. I typed it the way I would have said it out loud, and it still found things.",
    name: "Shona, Dundee",
    context: "Money is tight",
  },
  {
    quote:
      "It told me who each thing was not for. That sounds like a small thing. It meant I stopped applying for schemes that were never going to take me.",
    name: "Priya, Paisley",
    context: "Starting a business",
  },
  {
    quote:
      "Nothing came back the first time I searched. Instead of an empty page it offered me a call, and somebody rang when they said they would.",
    name: "Kateryna, Aberdeen",
    context: "New to Scotland",
  },
];
