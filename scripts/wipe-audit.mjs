/**
 * Count what a wipe would remove, and name every account it would keep.
 *
 * Read-only. Run this before wipe.mjs and read the output: the admin list it
 * prints is exactly what survives, and if a name is missing from it that
 * account is about to be deleted.
 *
 *   node --env-file=.env.local scripts/wipe-audit.mjs --project <ref>
 */

import { createClient } from "@supabase/supabase-js";
import { requireNamedProject } from "./guard.mjs";

const { url, serviceKey } = requireNamedProject();
const db = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const TABLES = [
  "organisations",
  "listings",
  "profiles",
  "saved_items",
  "listing_events",
  "organisation_events",
  "unmet_searches",
  "bookings",
  "booking_blocks",
  "booking_availability",
  "hand_routing_requests",
];

console.log("Rows now\n");
for (const table of TABLES) {
  const { count, error } = await db
    .from(table)
    .select("*", { count: "exact", head: true });
  console.log(
    `  ${table.padEnd(24)} ${error ? "error: " + error.message : count}`,
  );
}

const { data: profiles } = await db
  .from("profiles")
  .select("id, role, first_name, last_name");

const byRole = {};
for (const p of profiles ?? []) byRole[p.role] = (byRole[p.role] ?? 0) + 1;
console.log("\nProfiles by role\n");
for (const [role, n] of Object.entries(byRole)) {
  console.log(`  ${role.padEnd(24)} ${n}`);
}

const {
  data: { users },
} = await db.auth.admin.listUsers({ perPage: 1000 });

const adminIds = new Set(
  (profiles ?? []).filter((p) => p.role === "admin").map((p) => p.id),
);

console.log(`\nAuth users: ${users.length}\n`);
console.log("KEPT (role = admin):");
for (const u of users.filter((u) => adminIds.has(u.id))) {
  console.log(`  ${u.email}`);
}

const doomed = users.filter((u) => !adminIds.has(u.id));
console.log(`\nDELETED (${doomed.length}):`);
for (const u of doomed) {
  const p = (profiles ?? []).find((x) => x.id === u.id);
  const confirmed = u.email_confirmed_at ? "confirmed" : "unconfirmed";
  console.log(`  ${(u.email ?? "(no email)").padEnd(38)} ${p?.role ?? "no profile"}  ${confirmed}`);
}
