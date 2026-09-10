/**
 * Empty the platform of content and accounts, keeping the admins.
 *
 * Written for the pre-launch reset on 10 September 2026 and left here
 * because the next one will want it too. It is not reversible. Run
 * wipe-audit.mjs first and read the KEPT list.
 *
 * WHAT SURVIVES, and why:
 *
 *   * The taxonomies: access_zones, situations, places, secondary_markets.
 *     These are the platform's own vocabulary, seeded by migration 0002 and
 *     owned by admin. Deleting them does not empty the platform, it breaks
 *     it: the three questions have nothing to offer and Discover has nothing
 *     to list. Restoring them means re-running a migration.
 *
 *   * Auth users whose profile role is admin, minus any named on the command
 *     line with --also-delete.
 *
 * Everything else goes. Most of it goes by cascade rather than by name,
 * which is deliberate: organisations own listings, members, zones, markets,
 * invitations and events, and auth users own profiles, saved items and
 * reminders. Deleting the two parents is both shorter and harder to get
 * subtly wrong than eleven separate deletes in the right order.
 *
 *   node --env-file=.env.local scripts/wipe.mjs --project <ref> \
 *     --also-delete temp_admin@example.com
 */

import { createClient } from "@supabase/supabase-js";
import { requireNamedProject } from "./guard.mjs";

const { url, serviceKey } = requireNamedProject();
const db = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

/** Admin accounts to remove anyway, by email. */
const alsoDelete = new Set(
  process.argv
    .flatMap((arg, i) => (arg === "--also-delete" ? [process.argv[i + 1]] : []))
    .filter(Boolean)
    .map((email) => email.toLowerCase()),
);

/** Standalone tables: nothing cascades into these, so they are named. */
const STANDALONE = [
  "unmet_searches",
  "bookings",
  "booking_blocks",
  "booking_availability",
  "hand_routing_requests",
];

const count = async (table) => {
  const { count: n } = await db.from(table).select("*", { count: "exact", head: true });
  return n ?? 0;
};

console.log("Emptying standalone tables\n");
for (const table of STANDALONE) {
  const was = await count(table);
  const { error } = await db.from(table).delete().not("id", "is", null);
  console.log(
    `  ${table.padEnd(24)} ${was} -> ${error ? "ERROR " + error.message : await count(table)}`,
  );
}

console.log("\nDeleting organisations (listings and the rest cascade)\n");
const orgsWas = await count("organisations");
const listingsWas = await count("listings");
{
  const { error } = await db.from("organisations").delete().not("id", "is", null);
  if (error) console.error("  ERROR " + error.message);
}
console.log(`  organisations            ${orgsWas} -> ${await count("organisations")}`);
console.log(`  listings                 ${listingsWas} -> ${await count("listings")}`);

console.log("\nDeleting accounts (profiles and saved items cascade)\n");
const { data: profiles } = await db.from("profiles").select("id, role");
const adminIds = new Set((profiles ?? []).filter((p) => p.role === "admin").map((p) => p.id));

const {
  data: { users },
} = await db.auth.admin.listUsers({ perPage: 1000 });

let deleted = 0;
const kept = [];

for (const user of users) {
  const email = (user.email ?? "").toLowerCase();
  const isAdmin = adminIds.has(user.id) && !alsoDelete.has(email);

  if (isAdmin) {
    kept.push(user.email);
    continue;
  }

  const { error } = await db.auth.admin.deleteUser(user.id);
  if (error) console.error(`  could not delete ${user.email}: ${error.message}`);
  else deleted += 1;
}

console.log(`  ${deleted} accounts deleted, ${kept.length} kept\n`);
console.log("KEPT:");
for (const email of kept) console.log(`  ${email}`);

console.log("\nRemaining\n");
for (const table of [
  "organisations",
  "listings",
  "profiles",
  "saved_items",
  "listing_events",
  "organisation_events",
  ...STANDALONE,
  "access_zones",
  "situations",
  "places",
  "secondary_markets",
]) {
  console.log(`  ${table.padEnd(24)} ${await count(table)}`);
}
