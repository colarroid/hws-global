/**
 * Demo seed: a roster shaped like the real thing.
 *
 * Creates the organisations in demo-data.mjs, rewrites the ones already there
 * so nothing is called "jjnj", and posts a few dozen listings across them. It
 * is idempotent: run it twice and it updates rather than duplicating.
 *
 * The names come from the HWS PathGrid map. Everything else is written for the
 * demo, and these pages carry a "Checked by HWS" stamp against text nobody at
 * those organisations has seen. That is fine while nobody has been sent here
 * and stops being fine the day somebody is. `npm run demo:clean` removes it.
 *
 * Uses the service role key and bypasses RLS, so the project has to be named
 * on the command line. See guard.mjs.
 *
 *   node --env-file=.env.local scripts/seed-demo.mjs --project <ref>
 */

import { createClient } from "@supabase/supabase-js";
import { requireNamedProject } from "./guard.mjs";
import { ORGANISATIONS, REWRITES, LISTING_REWRITES } from "./demo-data.mjs";

const { url, serviceKey } = requireNamedProject();

const db = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const daysFromNow = (n) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};

function die(message) {
  console.error(`\n${message}\n`);
  process.exit(1);
}

/**
 * Every slug the roster uses, checked against the database before anything is
 * written. A slug that does not exist would otherwise be silently dropped by
 * the filters below, and the result would be a listing that never matches
 * anything with no sign that it was meant to.
 */
async function loadVocabularies() {
  const [{ data: zones }, { data: markets }, { data: situations }] =
    await Promise.all([
      db.from("access_zones").select("id, slug").is("retired_at", null),
      db.from("secondary_markets").select("id, slug").is("retired_at", null),
      db.from("situations").select("id, slug").is("retired_at", null),
    ]);

  if (!markets?.length) {
    die("No secondary_markets. Run migration 0020 before seeding.");
  }

  const zoneBySlug = new Map(zones.map((z) => [z.slug, z.id]));
  const marketBySlug = new Map(markets.map((m) => [m.slug, m.id]));
  const situationBySlug = new Map(situations.map((s) => [s.slug, s.id]));

  const bad = [];
  const check = (entry) => {
    if (entry.zone && !zoneBySlug.has(entry.zone)) {
      bad.push(`${entry.name}: zone "${entry.zone}"`);
    }
    for (const slug of entry.alsoZones ?? []) {
      if (!zoneBySlug.has(slug)) bad.push(`${entry.name}: also zone "${slug}"`);
    }
    for (const slug of entry.markets ?? []) {
      if (!marketBySlug.has(slug)) bad.push(`${entry.name}: market "${slug}"`);
    }
    for (const listing of entry.listings ?? []) {
      for (const slug of listing.situations ?? []) {
        if (!situationBySlug.has(slug)) {
          bad.push(`${entry.name} / ${listing.name}: situation "${slug}"`);
        }
      }
    }
  };

  [...ORGANISATIONS, ...REWRITES].forEach(check);

  if (bad.length > 0) {
    die(
      `Unknown slugs in demo-data.mjs. Nothing has been written.\n\n  ` +
        bad.join("\n  "),
    );
  }

  return { zoneBySlug, marketBySlug, situationBySlug };
}

function profileFields(entry) {
  return {
    name: entry.name,
    types: entry.types,
    place: entry.place ?? null,
    website: entry.website ?? null,
    blurb: entry.blurb ?? null,
    mission: entry.mission ?? null,
    unique_offer: entry.uniqueOffer ?? null,
    audiences: entry.audiences ?? [],
    service_kinds: entry.serviceKinds ?? [],
    access_routes: entry.accessRoutes ?? [],
    cost_options: entry.costOptions ?? [],
    cost_note: entry.costNote ?? null,
    coverage: entry.coverage ?? null,
    coverage_note: entry.coverageNote ?? null,
    eligibility: entry.eligibility ?? null,
    not_eligible: entry.notEligible ?? null,
    availability: entry.availability ?? null,
    availability_note: entry.availabilityNote ?? null,
    posting_frequency: entry.postingFrequency ?? null,
    status: "verified",
    verified_at: new Date().toISOString(),
    profile_updated_at: new Date().toISOString(),
  };
}

async function setZones(organisationId, entry, zoneBySlug) {
  await db
    .from("organisation_zones")
    .delete()
    .eq("organisation_id", organisationId);

  const rows = [
    { organisation_id: organisationId, zone_id: zoneBySlug.get(entry.zone), role: "primary" },
    ...(entry.alsoZones ?? []).map((slug) => ({
      organisation_id: organisationId,
      zone_id: zoneBySlug.get(slug),
      role: "also",
    })),
  ];

  const { error } = await db.from("organisation_zones").insert(rows);
  if (error) die(`${entry.name}: zones failed — ${error.message}`);
}

async function setMarkets(organisationId, entry, marketBySlug) {
  await db
    .from("organisation_markets")
    .delete()
    .eq("organisation_id", organisationId);

  const rows = (entry.markets ?? []).map((slug) => ({
    organisation_id: organisationId,
    market_id: marketBySlug.get(slug),
  }));

  if (rows.length === 0) return;

  const { error } = await db.from("organisation_markets").insert(rows);
  if (error) die(`${entry.name}: markets failed — ${error.message}`);
}

/**
 * Listings, matched on name within the organisation so a second run updates
 * rather than piling up duplicates a woman would then see twice.
 */
async function setListings(organisationId, entry, situationBySlug) {
  let written = 0;

  for (const listing of entry.listings ?? []) {
    const fields = {
      organisation_id: organisationId,
      name: listing.name,
      kind: listing.kind,
      blurb: listing.blurb ?? null,
      who_for: listing.whoFor ?? null,
      what_to_expect: listing.whatToExpect ?? null,
      cost: listing.cost,
      formats: listing.formats ?? [],
      place: listing.place ?? null,
      deadline:
        listing.deadlineDays == null ? null : daysFromNow(listing.deadlineDays),
      apply_url: listing.applyUrl ?? null,
      status: "live",
      last_confirmed_at: new Date().toISOString(),
      hidden_at: null,
      hidden_by: null,
      hidden_reason: null,
    };

    const { data: existing } = await db
      .from("listings")
      .select("id")
      .eq("organisation_id", organisationId)
      .eq("name", listing.name)
      .maybeSingle();

    let listingId;

    if (existing) {
      const { error } = await db
        .from("listings")
        .update(fields)
        .eq("id", existing.id);
      if (error) die(`${listing.name}: update failed — ${error.message}`);
      listingId = existing.id;
    } else {
      const { data, error } = await db
        .from("listings")
        .insert(fields)
        .select("id")
        .single();
      if (error) die(`${listing.name}: insert failed — ${error.message}`);
      listingId = data.id;
    }

    await db.from("listing_situations").delete().eq("listing_id", listingId);

    const tags = (listing.situations ?? []).map((slug) => ({
      listing_id: listingId,
      situation_id: situationBySlug.get(slug),
    }));

    if (tags.length > 0) {
      const { error } = await db.from("listing_situations").insert(tags);
      if (error) die(`${listing.name}: tags failed — ${error.message}`);
    }

    written += 1;
  }

  return written;
}

async function upsertOrganisation(entry, matchName, vocab) {
  // Either name. A rewrite renames the organisation, so a second run has to
  // find it under the new name as well as the old one — matching only on the
  // old one is how the first version of this created a duplicate of every
  // organisation it had just renamed.
  const wanted = matchName === entry.name ? [entry.name] : [matchName, entry.name];

  const { data: matches } = await db
    .from("organisations")
    .select("id, organisation_members ( user_id )")
    .in("name", wanted);

  // The one somebody has an account for wins. If the duplicate ever happens
  // again, this keeps the real organisation and updates that.
  const found =
    (matches ?? []).sort(
      (a, b) =>
        (b.organisation_members?.length ?? 0) - (a.organisation_members?.length ?? 0),
    )[0] ?? null;

  let id;

  if (found) {
    const { error } = await db
      .from("organisations")
      .update(profileFields(entry))
      .eq("id", found.id);
    if (error) die(`${entry.name}: update failed — ${error.message}`);
    id = found.id;
  } else {
    const { data, error } = await db
      .from("organisations")
      .insert(profileFields(entry))
      .select("id")
      .single();
    if (error) die(`${entry.name}: insert failed — ${error.message}`);
    id = data.id;
  }

  await setZones(id, entry, vocab.zoneBySlug);
  await setMarkets(id, entry, vocab.marketBySlug);
  const listings = await setListings(id, entry, vocab.situationBySlug);

  return { id, listings, existed: Boolean(found) };
}

/** The three that were already there, matched by id because their names were
 *  part of the problem. */
async function rewriteListings(situationBySlug) {
  for (const listing of LISTING_REWRITES) {
    const { error } = await db
      .from("listings")
      .update({
        name: listing.name,
        kind: listing.kind,
        blurb: listing.blurb,
        who_for: listing.whoFor,
        what_to_expect: listing.whatToExpect,
        cost: listing.cost,
        formats: listing.formats,
        place: listing.place,
        deadline:
          listing.deadlineDays == null ? null : daysFromNow(listing.deadlineDays),
        apply_url: listing.applyUrl,
        status: "live",
        last_confirmed_at: new Date().toISOString(),
      })
      .eq("id", listing.id);

    // Not fatal. These three exist in one database and nowhere else, so a
    // fresh project simply has nothing to rewrite.
    if (error) {
      console.log(`  skipped "${listing.name}" — ${error.message}`);
      continue;
    }

    await db.from("listing_situations").delete().eq("listing_id", listing.id);
    const tags = (listing.situations ?? []).map((slug) => ({
      listing_id: listing.id,
      situation_id: situationBySlug.get(slug),
    }));
    if (tags.length > 0) await db.from("listing_situations").insert(tags);

    console.log(`  ` + listing.name);
  }
}

async function main() {
  const vocab = await loadVocabularies();

  let created = 0;
  let updated = 0;
  let listings = 0;

  console.log("Rewriting the organisations already there:\n");
  for (const entry of REWRITES) {
    const result = await upsertOrganisation(entry, entry.match, vocab);
    listings += result.listings;
    if (result.existed) {
      updated += 1;
      const renamed = entry.match === entry.name ? "" : `  (was "${entry.match}")`;
      console.log(`  ${entry.name}${renamed}  ${result.listings} listings`);
    } else {
      created += 1;
      console.log(`  ${entry.name}  created, ${result.listings} listings`);
    }
  }

  console.log("\nRewriting the three listings that were already there:\n");
  await rewriteListings(vocab.situationBySlug);

  console.log("\nThe demo roster:\n");
  for (const entry of ORGANISATIONS) {
    const result = await upsertOrganisation(entry, entry.name, vocab);
    listings += result.listings;
    if (result.existed) updated += 1;
    else created += 1;
    console.log(
      `  ${entry.name}  ${result.existed ? "updated" : "created"}, ${result.listings} listings`,
    );
  }

  const { count: total } = await db
    .from("listings")
    .select("id", { count: "exact", head: true })
    .eq("status", "live");

  console.log(
    `\n${created} created, ${updated} updated, ${listings} listings written.` +
      `\n${total} live listings on the platform.\n` +
      `\nThese carry a "Checked by HWS" stamp against text written for a demo.` +
      `\nRun npm run demo:clean before anybody real is sent here.\n`,
  );
}

main();
