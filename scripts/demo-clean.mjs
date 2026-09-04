/**
 * Remove the demo roster.
 *
 * Two different jobs, because the two halves are not the same.
 *
 * The organisations this seed created are deleted outright, and their
 * listings go with them by cascade.
 *
 * The ones it rewrote are not. Those existed before the seed and have real
 * accounts attached, so deleting them would lock somebody out of a portal
 * they signed up for. Their demo listings are removed and the organisation
 * is left, with a note saying what is still there to tidy by hand.
 *
 *   node --env-file=.env.local scripts/demo-clean.mjs --project <ref>
 */

import { createClient } from "@supabase/supabase-js";
import { requireNamedProject } from "./guard.mjs";
import { ORGANISATIONS, REWRITES } from "./demo-data.mjs";

const { url, serviceKey } = requireNamedProject();

const db = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const names = ORGANISATIONS.map((o) => o.name);

const { data: seeded } = await db
  .from("organisations")
  .select("id, name")
  .in("name", names);

let removed = 0;

for (const organisation of seeded ?? []) {
  const { error } = await db
    .from("organisations")
    .delete()
    .eq("id", organisation.id);

  if (error) {
    console.error(`  could not remove ${organisation.name}: ${error.message}`);
  } else {
    console.log(`  removed ${organisation.name}`);
    removed += 1;
  }
}

let listingsRemoved = 0;
const kept = [];

for (const entry of REWRITES) {
  const { data: organisation } = await db
    .from("organisations")
    .select("id, name")
    .eq("name", entry.name)
    .maybeSingle();

  if (!organisation) continue;

  for (const listing of entry.listings ?? []) {
    const { error } = await db
      .from("listings")
      .delete()
      .eq("organisation_id", organisation.id)
      .eq("name", listing.name);

    if (!error) listingsRemoved += 1;
  }

  kept.push(organisation.name);
}

console.log(
  `\n${removed} organisations removed, ${listingsRemoved} listings removed from rewritten ones.`,
);

if (kept.length > 0) {
  console.log(
    `\nStill there, because somebody has an account for them:\n  ` +
      kept.join("\n  ") +
      `\n\nTheir profiles are demo text. Edit or clear those by hand.\n`,
  );
}
