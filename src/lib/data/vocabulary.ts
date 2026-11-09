import "server-only";
import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";

/**
 * Access Zone and situation names, in the language she is reading.
 *
 * The rest of the platform's words are translated in src/lib/i18n, because
 * the rest of them are fixed by the design. These two are not: they are
 * admin-owned so HWS can add, rename or retire one without a deploy, which
 * is exactly why their translations are rows rather than a file. See
 * migration 0027.
 *
 * ONE READ PER REQUEST. `cache` is React's per-request memo, so a results
 * page that resolves a dozen situation names still makes one query. Without
 * it this would be the cheapest possible way to make every page slower.
 *
 * ENGLISH NEVER COMES FROM HERE. The parent row is the English, so a missing
 * translation falls back to the name the admin typed, and the page reads as
 * untranslated rather than empty. In English the whole lookup is skipped.
 */

type Key = `${string}|${string}|${string}`;

const key = (entity: string, slug: string, field: string): Key =>
  `${entity}|${slug}|${field}`;

/**
 * Every translation for the current language, as a flat lookup.
 *
 * Returns an empty map for English, and on an error: a results page that
 * loses its translations is worse in English than it is broken, so this
 * never throws.
 */
export const getVocabulary = cache(async (): Promise<Map<Key, string>> => {
  const locale = await getLocale();
  if (locale.code === "en") return new Map();

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("vocabulary_translations")
    .select("entity, slug, field, value")
    .eq("locale", locale.code);

  if (error) {
    // Deliberately not thrown. The caller has English to fall back to, and
    // a zone list in English beats a zone list that 500s.
    console.error(`[vocabulary] ${locale.code}: ${error.message}`);
    return new Map();
  }

  return new Map(
    (data ?? []).map((row) => [key(row.entity, row.slug, row.field), row.value]),
  );
});

/** What a zone or situation is called, in her language or in English. */
export function translated(
  vocabulary: Map<Key, string>,
  entity: "access_zone" | "situation",
  slug: string,
  field: string,
  english: string,
): string {
  return vocabulary.get(key(entity, slug, field)) ?? english;
}

/** The same, for a column that is allowed to be null. */
export function translatedOrNull(
  vocabulary: Map<Key, string>,
  entity: "access_zone" | "situation",
  slug: string,
  field: string,
  english: string | null,
): string | null {
  return vocabulary.get(key(entity, slug, field)) ?? english;
}
