/**
 * Does every language still say everything, and does every translation still
 * belong to something?
 *
 * WHY THIS EXISTS
 *
 * labels.ts keys the example sentences by their English text, because that is
 * already this codebase's identity for them: getNeedSuggestions
 * de-duplicates on the sentence, so two slugs that suggest the same thing are
 * one chip. The cost of that choice is that editing a word in suggestions.ts
 * silently orphans eleven translations, and nothing breaks — the chip simply
 * reverts to English in every language, which is exactly the failure nobody
 * notices because it looks like working software.
 *
 * So the check is the other half of the design. Run it after touching any
 * English wording in taxonomy.ts or suggestions.ts.
 *
 *   npm run check:i18n
 *
 * WHAT IS AN ERROR AND WHAT IS A GAP
 *
 * An error is structural: a translation pointing at nothing, two vocabularies
 * sharing a slug, a language in one file and not the other. These cannot be
 * intended and the script exits 1.
 *
 * A gap is a missing translation. Also an exit 1, because locales.ts is
 * explicit that "an entry that opens a half-translated page is worse than no
 * entry at all" and a gap that only prints is a gap nobody fixes. Pass
 * --gaps-ok while a language is deliberately mid-translation.
 *
 * It reads the real modules rather than parsing the files, so it cannot drift
 * from what ships.
 */

import { LOCALES, DEFAULT_LOCALE } from "../src/lib/i18n/locales.ts";
import { MESSAGES } from "../src/lib/i18n/messages.ts";
import { LABELS } from "../src/lib/i18n/labels.ts";
import * as taxonomy from "../src/lib/design/taxonomy.ts";
import { PLURALS, ENGLISH_PLURALS } from "../src/lib/i18n/plurals.ts";
import {
  SITUATION_SUGGESTIONS,
  MARKET_SUGGESTIONS,
  FALLBACK_SUGGESTIONS,
} from "../src/lib/design/suggestions.ts";

const gapsOk = process.argv.includes("--gaps-ok");

const errors = [];
const gaps = [];

/* ------------------------------------------------ what English provides -- */

/** Every exported vocabulary, found by shape rather than by a list to keep. */
const vocabularies = Object.entries(taxonomy).filter(
  ([, value]) =>
    Array.isArray(value) &&
    value.length > 0 &&
    typeof value[0] === "object" &&
    value[0] !== null &&
    "slug" in value[0] &&
    "label" in value[0],
);

/** slug -> the vocabulary it came from, which is also the uniqueness check. */
const slugs = new Map();
for (const [name, entries] of vocabularies) {
  for (const entry of entries) {
    const already = slugs.get(entry.slug);
    if (already) {
      errors.push(
        `slug "${entry.slug}" is in both ${already} and ${name}. labels.ts ` +
          `keys by slug alone, so one of these would silently take the ` +
          `other's translation. Rename one, or key labels by group.`,
      );
    }
    slugs.set(entry.slug, name);
  }
}

const chips = new Set([
  ...Object.values(SITUATION_SUGGESTIONS),
  ...Object.values(MARKET_SUGGESTIONS),
  ...FALLBACK_SUGGESTIONS,
]);

for (const sentence of chips) {
  if (slugs.has(sentence)) {
    errors.push(
      `the sentence "${sentence}" is also a taxonomy slug. One table holds ` +
        `both, so they would collide.`,
    );
  }
}

const wanted = [...slugs.keys(), ...chips];
const messageKeys = Object.keys(MESSAGES[DEFAULT_LOCALE]);

/* --------------------------------------------------- what each language -- */

const translatable = LOCALES.filter((l) => l.code !== DEFAULT_LOCALE);

for (const code of Object.keys(LABELS)) {
  if (!LOCALES.some((l) => l.code === code)) {
    errors.push(`labels.ts has "${code}", which is not a locale in locales.ts.`);
  }
}

for (const code of Object.keys(MESSAGES)) {
  if (!LOCALES.some((l) => l.code === code)) {
    errors.push(
      `messages.ts has "${code}", which is not a locale in locales.ts.`,
    );
  }
}

/* ------------------------------------------------------- the counts ---- */

/*
 * Plurals are checked separately because they fail differently.
 *
 * A missing message falls back to English, which is legible. A missing
 * `other` form throws, because there is nothing to fall back to inside the
 * key — and it throws on a page that is counting something, which is the
 * moment a woman is deciding whether it is worth her bus fare.
 */
const pluralKeys = Object.keys(ENGLISH_PLURALS);

for (const code of Object.keys(PLURALS)) {
  if (!LOCALES.some((l) => l.code === code)) {
    errors.push(`plurals.ts has "${code}", which is not a locale in locales.ts.`);
  }
}

for (const locale of translatable) {
  const table = PLURALS[locale.code] ?? {};

  for (const key of Object.keys(table)) {
    if (!pluralKeys.includes(key)) {
      errors.push(`${locale.code}: plural key "${key}" is not in the English table.`);
    }
    if (!table[key].other) {
      errors.push(
        `${locale.code}: plural "${key}" has no \`other\` form. Every other ` +
          `form falls back to it, so without it there is nothing to show.`,
      );
    }
  }

  const missingCounts = pluralKeys.filter((key) => !table[key]);
  if (missingCounts.length > 0) {
    gaps.push({ locale, missingWords: [], missingSaid: missingCounts });
  }
}

/* --------------------------------------------- the one placeholder ----- */

/*
 * A key whose English carries "#" must carry it in every language, or the
 * number or name simply never appears: "Question of 3", "Closes", "Continue
 * to". Nothing throws and nothing looks broken, which is why this is checked
 * rather than left to review.
 */
for (const key of messageKeys) {
  if (!MESSAGES[DEFAULT_LOCALE][key].includes("#")) continue;

  for (const locale of translatable) {
    const text = MESSAGES[locale.code]?.[key];
    if (text && !text.includes("#")) {
      errors.push(
        `${locale.code}: "${key}" has lost its # placeholder, so the value ` +
          `the component supplies would never be shown.`,
      );
    }
  }
}

for (const key of pluralKeys) {
  for (const locale of translatable) {
    const forms = PLURALS[locale.code]?.[key];
    if (!forms) continue;
    for (const [form, text] of Object.entries(forms)) {
      /*
       * zero, one and two are allowed to spell the quantity in words, and
       * in several languages they should: Arabic says "خدمة واحدة" and
       * "خدمتان" rather than putting a digit in front of a noun, and
       * English says "Show me that one". The categories that can only mean
       * "several" are the ones that must carry the number.
       */
      if (form === "zero" || form === "one" || form === "two") continue;
      if (!text.includes("#")) {
        errors.push(
          `${locale.code}: plural "${key}" form "${form}" has no #, so the ` +
            `count would never be shown.`,
        );
      }
    }
  }
}

const rows = [];

for (const locale of translatable) {
  const words = LABELS[locale.code] ?? {};
  const said = MESSAGES[locale.code] ?? {};

  for (const key of Object.keys(words)) {
    if (!slugs.has(key) && !chips.has(key)) {
      errors.push(
        `${locale.code}: "${key}" translates nothing. Either a slug was ` +
          `renamed in taxonomy.ts, or an English sentence was reworded in ` +
          `suggestions.ts and this translation was left behind.`,
      );
    }
  }

  for (const key of Object.keys(said)) {
    if (!messageKeys.includes(key)) {
      errors.push(`${locale.code}: message key "${key}" is not in the English catalogue.`);
    }
  }

  const missingWords = wanted.filter((key) => !words[key]);
  const missingSaid = messageKeys.filter((key) => !said[key]);

  if (missingWords.length > 0 || missingSaid.length > 0) {
    gaps.push({ locale, missingWords, missingSaid });
  }

  rows.push({
    code: locale.code,
    english: locale.english,
    words: `${wanted.length - missingWords.length}/${wanted.length}`,
    said: `${messageKeys.length - missingSaid.length}/${messageKeys.length}`,
    whole: missingWords.length === 0 && missingSaid.length === 0,
  });
}

/* ----------------------------------------------------------- the report -- */

console.log(
  `\n${translatable.length} languages besides English, ` +
    `${wanted.length} labels, ${messageKeys.length} messages and ` +
    `${pluralKeys.length} counts each.\n`,
);

const pad = (s, n) => String(s).padEnd(n);
console.log(`  ${pad("", 5)}${pad("language", 22)}${pad("labels", 10)}messages`);
for (const row of rows) {
  console.log(
    `  ${row.whole ? "ok   " : "GAP  "}${pad(row.english, 22)}${pad(row.words, 10)}${row.said}`,
  );
}

if (gaps.length > 0) {
  console.log("");
  for (const { locale, missingWords, missingSaid } of gaps) {
    console.log(`${locale.english} (${locale.code}) is missing:`);
    for (const key of [...missingWords, ...missingSaid]) {
      console.log(`    ${key}`);
    }
  }
}

if (errors.length > 0) {
  console.log(`\n${errors.length} problem${errors.length === 1 ? "" : "s"}:\n`);
  for (const line of errors) console.log(`  - ${line}\n`);
}

if (errors.length > 0) {
  console.log("Fix the problems above. Nothing here is a judgement call.\n");
  process.exit(1);
}

if (gaps.length > 0 && !gapsOk) {
  console.log(
    "\nEvery language in the menu is a promise that the page behind it is\n" +
      "readable. Fill the gaps, or take the language out of locales.ts until\n" +
      "you can. Pass --gaps-ok if one is deliberately mid-translation.\n",
  );
  process.exit(1);
}

console.log("\nEvery language says everything, and nothing translates a ghost.\n");
