/**
 * Does every zone and situation have a name in every language?
 *
 * check-i18n.mjs does this for the words that live in files. These live in
 * the database, because they are admin-owned, so they need their own check
 * and it has to open the database to do it.
 *
 *   node --env-file=.env.local scripts/check-vocab.mjs --project <ref>
 *
 * WHAT IT CATCHES, and why each one is invisible without it:
 *
 *   * A zone or situation added by an admin and never translated. It will
 *     appear in English in the middle of an otherwise Arabic page, and the
 *     only person who would notice is the one who cannot read it.
 *   * A translation whose slug no longer names anything, left behind when a
 *     slug was renamed. Harmless on the page and permanent in the table.
 *   * A locale in the table that is not in locales.ts, which is a typo that
 *     nothing will ever read.
 *
 * It is read-only and safe to run against production.
 */

import { createClient } from "@supabase/supabase-js";
import { requireNamedProject } from "./guard.mjs";
import { LOCALES, DEFAULT_LOCALE } from "../src/lib/i18n/locales.ts";

const { url, serviceKey } = requireNamedProject();
const db = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const FIELDS = {
  access_zone: ["name", "focus"],
  situation: ["label", "match_phrase"],
};

const [{ data: zones }, { data: situations }, { data: rows, error }] =
  await Promise.all([
    db.from("access_zones").select("slug, name").is("retired_at", null),
    db.from("situations").select("slug, label, match_phrase").is("retired_at", null),
    db.from("vocabulary_translations").select("entity, slug, field, locale"),
  ]);

if (error) {
  console.error(
    `Could not read vocabulary_translations: ${error.message}\n` +
      `If the table does not exist yet, apply migration 0027 first.`,
  );
  process.exit(1);
}

const parents = {
  access_zone: (zones ?? []).map((z) => ({ slug: z.slug, fields: ["name", "focus"] })),
  situation: (situations ?? []).map((s) => ({
    slug: s.slug,
    // A situation with no English phrase has nothing to translate, so it is
    // not a gap. "Prefer not to say" is the only one today.
    fields: s.match_phrase ? ["label", "match_phrase"] : ["label"],
  })),
};

const have = new Set(
  (rows ?? []).map((r) => `${r.entity}|${r.slug}|${r.field}|${r.locale}`),
);

const translatable = LOCALES.filter((l) => l.code !== DEFAULT_LOCALE);
const errors = [];
const gaps = [];

/* ------------------------------------------------------------ orphans -- */

const knownSlugs = {
  access_zone: new Set(parents.access_zone.map((p) => p.slug)),
  situation: new Set(parents.situation.map((p) => p.slug)),
};

for (const row of rows ?? []) {
  if (!LOCALES.some((l) => l.code === row.locale)) {
    errors.push(`locale "${row.locale}" is not in locales.ts (${row.entity} ${row.slug}).`);
  }
  if (!FIELDS[row.entity]) {
    errors.push(`entity "${row.entity}" is not one this platform knows.`);
    continue;
  }
  if (!knownSlugs[row.entity].has(row.slug)) {
    errors.push(
      `${row.locale}: ${row.entity} "${row.slug}" translates nothing. The slug ` +
        `was renamed or retired and this row was left behind.`,
    );
  }
}

/* --------------------------------------------------------------- gaps -- */

const rowsPer = parents.access_zone.reduce((n, p) => n + p.fields.length, 0) +
  parents.situation.reduce((n, p) => n + p.fields.length, 0);

const report = [];

for (const locale of translatable) {
  const missing = [];
  for (const [entity, list] of Object.entries(parents)) {
    for (const parent of list) {
      for (const field of parent.fields) {
        if (!have.has(`${entity}|${parent.slug}|${field}|${locale.code}`)) {
          missing.push(`${entity} ${parent.slug}.${field}`);
        }
      }
    }
  }
  if (missing.length > 0) gaps.push({ locale, missing });
  report.push({ locale, done: rowsPer - missing.length });
}

/* ------------------------------------------------------------- report -- */

console.log(
  `\n${parents.access_zone.length} Access Zones and ` +
    `${parents.situation.length} situations, ` +
    `${rowsPer} translatable strings in each of ${translatable.length} languages.\n`,
);

const pad = (s, n) => String(s).padEnd(n);
for (const row of report) {
  const whole = row.done === rowsPer;
  console.log(
    `  ${whole ? "ok   " : "GAP  "}${pad(row.locale.english, 22)}${row.done}/${rowsPer}`,
  );
}

if (gaps.length > 0) {
  console.log("");
  for (const { locale, missing } of gaps) {
    console.log(`${locale.english} (${locale.code}) is missing:`);
    for (const m of missing) console.log(`    ${m}`);
  }
  console.log(
    "\nA zone or situation with no translation shows in English on an " +
      "otherwise translated page. Add it in the admin tool, or run " +
      "scripts/seed-vocabulary.mjs if it belongs in the shipped set.",
  );
}

if (errors.length > 0) {
  console.log(`\n${errors.length} problem${errors.length === 1 ? "" : "s"}:\n`);
  for (const line of errors) console.log(`  - ${line}\n`);
}

process.exit(errors.length > 0 || gaps.length > 0 ? 1 : 0);
