/**
 * Load the Access Zone and situation translations into the database.
 *
 * WHAT OWNS WHAT, AFTER THIS RUNS
 *
 * The database does. These translations are admin-editable by design, for
 * the same reason the zones themselves are: HWS can rename a zone without a
 * deploy, and renaming it in English without being able to rename it in
 * Arabic would be half a feature.
 *
 * So supabase/seed/vocabulary-translations.json is the starting set, not the
 * source of truth. It is what the eleven languages shipped with, kept in the
 * repository so the wording can be reviewed in a pull request rather than
 * only in a database. Once an admin edits a translation, this file is behind
 * — and that is fine, as long as nobody re-runs it blindly.
 *
 * Which is why this is an insert that skips what is already there rather
 * than an upsert. Running it twice is safe; running it after somebody has
 * corrected a translation will not quietly undo their correction.
 *
 *   node --env-file=.env.local scripts/seed-vocabulary.mjs --project <ref>
 *
 * Pass --force to overwrite existing rows, which is what you want after
 * editing the JSON and before anybody has edited the database.
 *
 * English is never written. It lives in access_zones and situations and the
 * table's own check constraint refuses a row for it.
 */

import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { requireNamedProject } from "./guard.mjs";

const { url, serviceKey } = requireNamedProject();
const db = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const force = process.argv.includes("--force");

const here = path.dirname(new URL(import.meta.url).pathname.slice(1));
const seed = JSON.parse(
  fs.readFileSync(
    path.join(here, "..", "supabase", "seed", "vocabulary-translations.json"),
    "utf8",
  ),
);

/** Which column each pair in the JSON belongs to. */
const FIELDS = {
  access_zone: ["name", "focus"],
  situation: ["label", "match_phrase"],
};

/* --------------------------------------------------- check the parents -- */

/*
 * Every slug in the file has to name something that exists, or the row is
 * a translation of nothing: invisible, unreported, and only discovered when
 * somebody wonders why a zone is still English.
 */
const [{ data: zones }, { data: situations }] = await Promise.all([
  db.from("access_zones").select("slug"),
  db.from("situations").select("slug"),
]);

const known = {
  access_zone: new Set((zones ?? []).map((z) => z.slug)),
  situation: new Set((situations ?? []).map((s) => s.slug)),
};

const rows = [];
const orphans = [];

for (const [locale, entities] of Object.entries(seed)) {
  for (const [entity, bySlug] of Object.entries(entities)) {
    for (const [slug, values] of Object.entries(bySlug)) {
      if (!known[entity]?.has(slug)) {
        orphans.push(`${locale} ${entity} ${slug}`);
        continue;
      }
      FIELDS[entity].forEach((field, i) => {
        const value = values[i];
        if (value) rows.push({ entity, slug, field, locale, value });
      });
    }
  }
}

if (orphans.length > 0) {
  console.error(
    `${orphans.length} translations name a slug that does not exist:\n  ` +
      orphans.join("\n  ") +
      "\n\nNothing was written. Fix the slugs or the seed file.",
  );
  // Emptying the list is what makes this "nothing was written" true, and
  // leaves the process to exit on its own. See the note on the exit code
  // in check-vocab.mjs: killing it here reports 127 rather than this.
  process.exitCode = 1;
  rows.length = 0;
}

/* ------------------------------------------------------------- write ---- */

if (!force) {
  const { data: existing } = await db
    .from("vocabulary_translations")
    .select("entity, slug, field, locale");

  const have = new Set(
    (existing ?? []).map((r) => `${r.entity}|${r.slug}|${r.field}|${r.locale}`),
  );

  const before = rows.length;
  const fresh = rows.filter(
    (r) => !have.has(`${r.entity}|${r.slug}|${r.field}|${r.locale}`),
  );

  if (fresh.length < before) {
    console.log(
      `${before - fresh.length} already in the database, left alone. ` +
        `Use --force to overwrite them.`,
    );
  }
  rows.length = 0;
  rows.push(...fresh);
}

if (rows.length === 0) {
  console.log("Nothing to write.");
}

const { error } = rows.length
  ? await db
      .from("vocabulary_translations")
      .upsert(rows, { onConflict: "entity,slug,field,locale" })
  : { error: null };

if (error) {
  console.error(`Could not write the translations: ${error.message}`);
  process.exitCode = 1;
}

const byLocale = rows.reduce((tally, r) => {
  tally[r.locale] = (tally[r.locale] ?? 0) + 1;
  return tally;
}, {});

console.log(`Wrote ${rows.length} translations.`);
for (const [locale, n] of Object.entries(byLocale)) {
  console.log(`  ${locale.padEnd(4)} ${n}`);
}
