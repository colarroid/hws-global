/**
 * The two legal documents, as content rather than markup.
 *
 * The wording of these is not a developer's to write, so it lives here on its
 * own: paste the approved text into `sections` and the page builds itself,
 * with the contents list, the anchors and the spacing following from it. No
 * JSX to edit and nothing to break by pasting a paragraph into the wrong
 * place.
 *
 * How to fill one in:
 *
 *   * `updated` is the date on the approved document, written out in full,
 *     e.g. "18 September 2026". Leave it null until there is one. It is shown
 *     to the reader, so it must be the date the wording changed, not the date
 *     the file was touched.
 *   * `lead` is one or two sentences under the title, in plain words. It is
 *     not part of the legal text and should not try to be.
 *   * each section is a heading and its paragraphs. One string per paragraph.
 *     Headings become anchors, so a section can be linked to directly.
 *
 * Until `sections` has something in it the page says so plainly rather than
 * showing an empty document, because a blank privacy policy is worse than an
 * absent one.
 */

export type LegalSection = {
  /** The heading. Also the anchor, lower-cased and hyphenated. */
  title: string;
  /** One string per paragraph. */
  body: string[];
};

export type LegalDocument = {
  /** The date on the approved wording, or null while there is none. */
  updated: string | null;
  /** Plain-words summary under the title. Not part of the legal text. */
  lead: string;
  sections: LegalSection[];
};

export const PRIVACY: LegalDocument = {
  updated: null,
  lead:
    "What we collect when you use this site, why we collect it, and what we will never do with it.",
  // Paste the approved privacy policy here, one section per heading.
  sections: [],
};

export const TERMS: LegalDocument = {
  updated: null,
  lead:
    "The rules for using this site, for the women who search it and the organisations who list on it.",
  // Paste the approved terms of use here, one section per heading.
  sections: [],
};

/** The anchor for a section heading. */
export function anchorFor(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
