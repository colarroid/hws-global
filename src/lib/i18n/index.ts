import "server-only";
import { cookies } from "next/headers";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  isLocale,
  localeFor,
  type Locale,
} from "@/lib/i18n/locales";
import { MESSAGES, type MessageKey } from "@/lib/i18n/messages";
import { LABELS } from "@/lib/i18n/labels";
import { FAQ, type FaqEntry } from "@/lib/i18n/faq";
import { PLURALS, ENGLISH_PLURALS, type PluralKey } from "@/lib/i18n/plurals";
import {
  CLIENT_KEYS,
  CLIENT_PLURAL_KEYS,
  type ClientPluralKey,
  type ClientStrings,
} from "@/lib/i18n/client-keys";
import type { ClientBundle } from "@/lib/i18n/client";
import type { PluralForms } from "@/lib/i18n/plurals";
import { labelFor, type Vocabulary } from "@/lib/design/taxonomy";

/**
 * The one placeholder in this system.
 *
 * A number or a name the component supplies, already formatted for her
 * locale. One character, no braces, no indexes, no escaping — a translator
 * who has never seen a template language can still see where the number
 * goes. Where a string needs two, it is the wrong string and should be two.
 */
const SLOT = "#";

function fill(text: string, value: string | number, tag: string): string {
  const shown =
    typeof value === "number" ? new Intl.NumberFormat(tag).format(value) : value;
  return text.replace(SLOT, shown);
}

/**
 * Which plural form a count takes, in her language.
 *
 * Intl.PluralRules knows every language's rule, so this never has to. A form
 * the table does not carry falls back to `other`, and a language that does
 * not carry the key at all falls back to English.
 */
export function pluralise(
  code: string,
  tag: string,
  key: PluralKey,
  n: number,
): string {
  const forms = PLURALS[code]?.[key] ?? ENGLISH_PLURALS[key];
  const rule = new Intl.PluralRules(tag).select(n) as keyof typeof forms;
  return fill(forms[rule] ?? forms.other, n, tag);
}

/**
 * Reading the chosen language, and the strings that go with it.
 *
 * Server-side, from a cookie, so the page arrives already in her language.
 * The alternative — rendering English and swapping it on the client — shows
 * everybody a flash of a language they may not read, which is worst for
 * exactly the people this is for.
 *
 * A missing translation falls back to English rather than to the key. A
 * screen reading "landing.hero.title" is broken; a screen reading English is
 * merely untranslated, and one of those is recoverable by the woman looking
 * at it.
 */

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const chosen = store.get(LOCALE_COOKIE)?.value;
  return localeFor(isLocale(chosen) ? chosen : DEFAULT_LOCALE);
}

/**
 * `value` fills the "#" in the few keys that carry one. Numbers arrive
 * formatted for her locale, so Punjabi and Arabic get their own digits if
 * that is what Intl decides they use.
 */
export type Translate = (key: MessageKey, value?: string | number) => string;

/**
 * The same translator, for the fixed vocabularies and the example sentences.
 *
 * Separate from `t` because these are looked up by a value rather than by a
 * key written at the call site: a slug that came out of the database, or the
 * English sentence that is this codebase's identity for a chip. Folding them
 * into MessageKey would mean a union of every slug in the schema and a
 * compile error every time HWS added one.
 *
 * Both fall back to English rather than to the raw value, so an untranslated
 * entry reads "Free to apply" and never `free_to_apply`.
 */
export type TranslateLabel = (
  vocabulary: Vocabulary,
  slug: string | null,
) => string;

export type TranslateLabels = (
  vocabulary: Vocabulary,
  slugs: readonly string[] | null,
) => string[];

/**
 * Dates and numbers in her language, which is a separate job from words.
 *
 * Every one of these used to be pinned to en-GB. A woman reading the site in
 * Arabic was being told a listing closes "31 December" in English, in the
 * middle of an Arabic sentence, and a deadline is the one thing on a card
 * she cannot afford to misread.
 *
 * Built once per request rather than per call. Intl.DateTimeFormat is
 * expensive to construct and a results page formats one of these per card.
 */
export type Formats = {
  /** "31 December 2026". */
  date: (value: string | Date) => string;
  /** "31 December", for a deadline in the current year. */
  dateShort: (value: string | Date) => string;
  /**
   * "Tuesday, 31 December", for the call calendar.
   *
   * Pinned to Europe/London, unlike the two above. A call slot is a real
   * moment in a real office, and a woman reading from Warsaw has to see the
   * hour the phone will actually ring rather than the hour it would be
   * where she is. The page says so in words as well.
   */
  dayWithWeekday: (value: string | Date) => string;
  /** "14:30", UK time, for the same reason. */
  timeOfDay: (value: string | Date) => string;
  number: (n: number) => string;
};

export function formatsFor(tag: string): Formats {
  const long = new Intl.DateTimeFormat(tag, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const short = new Intl.DateTimeFormat(tag, { day: "numeric", month: "long" });
  const day = new Intl.DateTimeFormat(tag, {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/London",
  });
  const time = new Intl.DateTimeFormat(tag, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/London",
  });
  const number = new Intl.NumberFormat(tag);

  const asDate = (value: string | Date) =>
    typeof value === "string" ? new Date(value) : value;

  return {
    date: (value) => long.format(asDate(value)),
    dateShort: (value) => short.format(asDate(value)),
    dayWithWeekday: (value) => day.format(asDate(value)),
    timeOfDay: (value) => time.format(asDate(value)),
    number: (n) => number.format(n),
  };
}

/**
 * The translator for one request.
 *
 * Returns a plain function rather than a component or a hook, so a server
 * component can call it inline and nothing about the language has to travel
 * to the browser.
 */
export async function getTranslator(): Promise<{
  locale: Locale;
  t: Translate;
  label: TranslateLabel;
  labels: TranslateLabels;
  chip: (english: string) => string;
  count: (key: PluralKey, n: number) => string;
  fmt: Formats;
  faq: (entry: FaqEntry) => FaqEntry;
}> {
  const locale = await getLocale();
  const table = MESSAGES[locale.code] ?? {};
  const english = MESSAGES[DEFAULT_LOCALE];
  const words = LABELS[locale.code] ?? {};
  const questions = FAQ[locale.code] ?? {};

  return {
    locale,
    t: (key, value) => {
      const text = table[key] ?? english[key] ?? key;
      return value === undefined ? text : fill(text, value, locale.intl);
    },

    count: (key, n) => pluralise(locale.code, locale.intl, key, n),

    fmt: formatsFor(locale.intl),

    /* Both halves together, or neither. A translated question above an
       English answer would read as a page half-built; falling back to the
       English pair reads as a page not yet translated, which is what it
       is. */
    faq: (entry) => questions[entry.q] ?? entry,

    label: (vocabulary, slug) =>
      !slug ? "" : (words[slug] ?? labelFor(vocabulary, slug)),

    /* In the vocabulary's order rather than hers, the same as labelsFor, so
       two women who picked the same things in a different order see the same
       card. */
    labels: (vocabulary, slugs) =>
      !slugs || slugs.length === 0
        ? []
        : vocabulary
            .filter((entry) => slugs.includes(entry.slug))
            .map((entry) => words[entry.slug] ?? entry.label),

    chip: (sentence) => words[sentence] ?? sentence,
  };
}

/**
 * The strings the browser gets, resolved to one language.
 *
 * Called once, in the root layout, and handed to StringsProvider. Fallback
 * to English happens here rather than in the browser, so what crosses the
 * boundary is a finished table and the client never needs a second
 * catalogue to fall back to.
 */
export async function getClientBundle(): Promise<ClientBundle> {
  const { t, locale } = await getTranslator();

  const strings = Object.fromEntries(
    CLIENT_KEYS.map((key) => [key, t(key)]),
  ) as ClientStrings;

  // Resolved here too, so the browser never needs a second table to fall
  // back to and a language missing a form behaves the same on both sides.
  const plurals = Object.fromEntries(
    CLIENT_PLURAL_KEYS.map((key) => [
      key,
      PLURALS[locale.code]?.[key] ?? ENGLISH_PLURALS[key],
    ]),
  ) as Record<ClientPluralKey, PluralForms>;

  return { strings, plurals, tag: locale.intl };
}
