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
import { labelFor, type Vocabulary } from "@/lib/design/taxonomy";

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

export type Translate = (key: MessageKey) => string;

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
}> {
  const locale = await getLocale();
  const table = MESSAGES[locale.code] ?? {};
  const english = MESSAGES[DEFAULT_LOCALE];
  const words = LABELS[locale.code] ?? {};

  return {
    locale,
    t: (key) => table[key] ?? english[key] ?? key,

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
