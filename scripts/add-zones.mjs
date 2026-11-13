/**
 * Add Access Zones, with their translations, in one go.
 *
 * Zones are admin-owned and the admin tool can create them. This exists for
 * the case the admin tool cannot do on its own: adding a zone *and* its
 * eleven translations together, so a new zone never spends a day showing in
 * English to every woman who does not read it.
 *
 *   node --env-file=.env.local scripts/add-zones.mjs --project <ref> --file <name.json>
 *
 * The file lives in supabase/seed and carries both halves. See
 * new-zones-2026-11.json for the shape.
 *
 * Idempotent: a slug already in the table is left exactly as it is, name,
 * focus, sort_order and all, because by then an admin may have edited it.
 * Translations for an existing zone are still filled in if missing, which is
 * what makes this safe to re-run after adding a language.
 */

import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { requireNamedProject } from "./guard.mjs";

const { url, serviceKey } = requireNamedProject();
const db = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const fileArg = process.argv[process.argv.indexOf("--file") + 1];
if (!fileArg || fileArg.startsWith("--")) {
  console.error("Pass --file <name.json> from supabase/seed.");
  process.exitCode = 1;
}

const here = path.dirname(new URL(import.meta.url).pathname.slice(1));
const spec = JSON.parse(
  fs.readFileSync(path.join(here, "..", "supabase", "seed", fileArg), "utf8"),
);

/* --------------------------------------------------------- the zones --- */

const { data: already } = await db.from("access_zones").select("slug");
const have = new Set((already ?? []).map((z) => z.slug));

const fresh = spec.zones.filter((z) => !have.has(z.slug));
const skipped = spec.zones.filter((z) => have.has(z.slug));

for (const zone of skipped) {
  console.log(`${zone.slug}: already exists, left alone`);
}

if (fresh.length > 0) {
  const { error } = await db.from("access_zones").insert(
    fresh.map((z) => ({
      slug: z.slug,
      name: z.name,
      focus: z.focus,
      sort_order: z.sort_order,
    })),
  );
  if (error) {
    console.error(`Could not add the zones: ${error.message}`);
    process.exitCode = 1;
  } else {
    for (const z of fresh) console.log(`added ${z.slug} (${z.name})`);
  }
}

/* -------------------------------------------------- the translations --- */

const wanted = [];
for (const [locale, bySlug] of Object.entries(spec.translations ?? {})) {
  for (const [slug, [name, focus]] of Object.entries(bySlug)) {
    if (!spec.zones.some((z) => z.slug === slug)) {
      console.error(`  !! ${locale}: "${slug}" is not one of the zones in this file`);
      process.exitCode = 1;
      continue;
    }
    wanted.push(
      { entity: "access_zone", slug, field: "name", locale, value: name },
      { entity: "access_zone", slug, field: "focus", locale, value: focus },
    );
  }
}

const { data: existing } = await db
  .from("vocabulary_translations")
  .select("entity, slug, field, locale")
  .eq("entity", "access_zone");

const known = new Set(
  (existing ?? []).map((r) => `${r.slug}|${r.field}|${r.locale}`),
);

// Same rule as seed-vocabulary: never overwrite a translation somebody may
// have corrected in the admin tool.
const toWrite = wanted.filter((r) => !known.has(`${r.slug}|${r.field}|${r.locale}`));

if (toWrite.length > 0) {
  const { error } = await db.from("vocabulary_translations").insert(toWrite);
  if (error) {
    console.error(`Could not add the translations: ${error.message}`);
    process.exitCode = 1;
  } else {
    console.log(`\nwrote ${toWrite.length} translations`);
  }
} else {
  console.log("\nno translations needed");
}

if (wanted.length > toWrite.length) {
  console.log(`${wanted.length - toWrite.length} already there, left alone`);
}
