/**
 * The languages the platform offers.
 *
 * Chosen from what people in Scotland actually speak rather than from what is
 * easy to translate. English first because it is what most of the site is
 * written in; then the two indigenous languages, which are not here for
 * completeness — Gaelic has its own Act and Scots is the first language of a
 * large part of the country; then the languages of the communities the
 * platform is most likely to reach that English does not.
 *
 * Every name is written in its own language. A dropdown listing "Polish" and
 * "Arabic" in English is asking somebody to find their language in a language
 * they may not read.
 *
 * The list is deliberately short. Each entry is a promise that the pages
 * behind it are readable, and an entry that opens a half-translated page is
 * worse than no entry at all.
 */

export type Locale = {
  code: string;
  /** In its own language. */
  name: string;
  /** In English, for the accessible name of the control. */
  english: string;
  dir: "ltr" | "rtl";
  /**
   * The tag Intl formats dates and numbers with.
   *
   * Separate from `code` because the two answer different questions. `code`
   * is our key for a catalogue; this is a BCP-47 tag a browser recognises,
   * and for three of these they differ: English is en-GB because a date
   * reading "December 31" to a woman in Glasgow is wrong whatever language
   * it is in, and simplified Chinese needs its script named.
   *
   * Scots has no CLDR data. Intl falls back to English for it, which is the
   * right answer: a Scots speaker reads an English date without friction,
   * and inventing one would be worse than borrowing one.
   */
  intl: string;
  /** Two or three letters, shown beside the badge. */
  short: string;
  /**
   * Which badge to draw. A flag where one is unambiguous; a letter from the
   * language's own script where it is not.
   *
   * Arabic and Punjabi have no honest flag. Arabic is spoken across twenty-odd
   * countries and picking one of them tells most Arabic speakers this was not
   * built with them in mind; Punjab is split between India and Pakistan, so
   * either flag misidentifies half the people who would reach for it. Those
   * two get their own first letter instead, at the same size and in the same
   * circle, so the row still reads as one set.
   *
   * Somali and Tigrinya are here for the same reason. Somali is spoken across
   * Somalia, Somaliland, Djibouti, Ethiopia and Kenya, and the Somalia flag
   * takes a side in a dispute a woman in Glasgow did not ask to be part of.
   * Tigrinya is Eritrea and Tigray, which is a harder version of the same
   * problem. Romanian keeps a flag because Romania is where it comes from and
   * nobody is misidentified by it.
   */
  badge:
    | "uk"
    | "scotland"
    | "poland"
    | "ukraine"
    | "pakistan"
    | "china"
    | "romania"
    | string;
};

export const LOCALES: Locale[] = [
  { code: "en", name: "English", english: "English", intl: "en-GB", dir: "ltr", short: "EN", badge: "uk" },
  { code: "gd", name: "Gàidhlig", english: "Scottish Gaelic", intl: "gd-GB", dir: "ltr", short: "GD", badge: "scotland" },
  { code: "sco", name: "Scots", english: "Scots", intl: "en-GB", dir: "ltr", short: "SCO", badge: "scotland" },
  { code: "pl", name: "Polski", english: "Polish", intl: "pl-PL", dir: "ltr", short: "PL", badge: "poland" },
  { code: "uk", name: "Українська", english: "Ukrainian", intl: "uk-UA", dir: "ltr", short: "UK", badge: "ukraine" },
  { code: "ar", name: "العربية", english: "Arabic", intl: "ar", dir: "rtl", short: "AR", badge: "ع" },
  { code: "ur", name: "اردو", english: "Urdu", intl: "ur-PK", dir: "rtl", short: "UR", badge: "pakistan" },
  { code: "pa", name: "ਪੰਜਾਬੀ", english: "Punjabi", intl: "pa-IN", dir: "ltr", short: "PA", badge: "ਪ" },
  { code: "zh", name: "简体中文", english: "Chinese, simplified", intl: "zh-Hans", dir: "ltr", short: "ZH", badge: "china" },
  { code: "ro", name: "Română", english: "Romanian", intl: "ro-RO", dir: "ltr", short: "RO", badge: "romania" },
  { code: "so", name: "Soomaali", english: "Somali", intl: "so-SO", dir: "ltr", short: "SO", badge: "So" },
  { code: "ti", name: "ትግርኛ", english: "Tigrinya", intl: "ti-ER", dir: "ltr", short: "TI", badge: "ት" },
];

export const DEFAULT_LOCALE = "en";

/** The cookie the choice lives in. Read on the server, so no flash. */
export const LOCALE_COOKIE = "hws_locale";

export function isLocale(code: string | undefined): code is string {
  return Boolean(code && LOCALES.some((l) => l.code === code));
}

export function localeFor(code: string | undefined): Locale {
  return (
    LOCALES.find((l) => l.code === code) ??
    LOCALES.find((l) => l.code === DEFAULT_LOCALE)!
  );
}
