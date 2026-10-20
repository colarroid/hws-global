/**
 * One demo organisation, with a real login, for showing the portal.
 *
 * Written because the roster in demo-data.mjs is the wrong tool for this. That
 * one creates twenty-eight organisations under the names of real Scottish
 * bodies — Business Gateway, Skills Development Scotland — which is fine for a
 * screen recording nobody outside sees and became a problem the moment the
 * site was opened to search engines. This creates one, under a name that
 * belongs to nobody, and hands back credentials somebody can actually sign in
 * with.
 *
 * WHAT IT MAKES
 *
 *   * An account with a password, confirmed, role organisation.
 *   * An organisation it owns, left `pending`.
 *   * Two listings, left `draft`.
 *
 * PENDING AND DRAFT ARE DELIBERATE. Verifying it is the demo: approving it in
 * the admin tool is the thing worth showing, and it is also the moment
 * somebody decides this fictional organisation should be publicly visible.
 * Seeding it already verified would put invented content into Discover and
 * the sitemap without anybody choosing that, which is the exact mistake the
 * demo roster made.
 *
 * Website is example.org on purpose. It is the domain IANA reserves for
 * documentation, so it cannot ever be somebody's real site.
 *
 *   node --env-file=.env.local scripts/seed-demo-org.mjs --project <ref>
 *
 * Remove it again with --remove.
 */

import { createClient } from "@supabase/supabase-js";
import { requireNamedProject } from "./guard.mjs";

const { url, serviceKey } = requireNamedProject();
const db = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const EMAIL = "Temporg@test.com";
const PASSWORD = "Test_org91";
const NAME = "Thistlebank Women's Enterprise";

const remove = process.argv.includes("--remove");

/* ------------------------------------------------------------ removal ---- */

if (remove) {
  const { data: org } = await db
    .from("organisations")
    .select("id")
    .eq("name", NAME)
    .maybeSingle();

  if (org) {
    // Listings, members, zones and markets all cascade off this.
    await db.from("organisations").delete().eq("id", org.id);
    console.log(`removed ${NAME}`);
  }

  const {
    data: { users },
  } = await db.auth.admin.listUsers({ perPage: 1000 });
  const account = users.find(
    (u) => (u.email ?? "").toLowerCase() === EMAIL.toLowerCase(),
  );
  if (account) {
    await db.auth.admin.deleteUser(account.id);
    console.log(`removed ${EMAIL}`);
  }

  process.exit(0);
}

/* ------------------------------------------------------------ the account -- */

const {
  data: { users },
} = await db.auth.admin.listUsers({ perPage: 1000 });
let account = users.find(
  (u) => (u.email ?? "").toLowerCase() === EMAIL.toLowerCase(),
);

if (account) {
  // Idempotent: reset the password rather than refusing, so running this
  // twice leaves known-good credentials either way.
  await db.auth.admin.updateUserById(account.id, {
    password: PASSWORD,
    email_confirm: true,
  });
  console.log(`account existed, password reset: ${EMAIL}`);
} else {
  const { data, error } = await db.auth.admin.createUser({
    email: EMAIL,
    password: PASSWORD,
    email_confirm: true,
    user_metadata: { role: "organisation", first_name: "Rhona", last_name: "Baird" },
  });
  if (error) {
    console.error(`could not create the account: ${error.message}`);
    process.exit(1);
  }
  account = data.user;
  console.log(`created ${EMAIL}`);
}

// The signup trigger sets this from the metadata, but only on insert, so an
// account that already existed under another role would keep it.
await db
  .from("profiles")
  .update({ role: "organisation", first_name: "Rhona", last_name: "Baird" })
  .eq("id", account.id);

/* ------------------------------------------------------- the organisation -- */

const { data: existing } = await db
  .from("organisations")
  .select("id")
  .eq("name", NAME)
  .maybeSingle();

let organisationId = existing?.id;

if (!organisationId) {
  const { data, error } = await db
    .from("organisations")
    .insert({
      name: NAME,
      types: ["social_enterprise", "network_or_group"],
      website: "https://www.example.org/thistlebank",
      place: "Glasgow",
      blurb:
        "A women-led enterprise hub in the south side of Glasgow. We run start-up " +
        "programmes, one-to-one business advice and a small grants fund for women " +
        "turning an idea into something that pays.",
      status: "pending",
      registration_number: "SC000000",
      contact_name: "Rhona Baird",
      contact_role: "Programmes Lead",
      contact_phone: "0141 496 0000",
      verification_requested_at: new Date().toISOString(),
    })
    .select("id")
    .single();

  if (error) {
    console.error(`could not create the organisation: ${error.message}`);
    process.exit(1);
  }
  organisationId = data.id;
  console.log(`created ${NAME}`);
}

await db
  .from("organisation_members")
  .upsert(
    { organisation_id: organisationId, user_id: account.id, role: "owner" },
    { onConflict: "organisation_id,user_id" },
  );

/* ----------------------------------------------------------- the profile -- */

/*
 * The eight answers profileGaps() counts, plus the ones that make the
 * organisation page read like somebody wrote it.
 *
 * Filled from here rather than left for somebody to type into the portal,
 * because a half-finished profile is what an admin sees when deciding whether
 * to verify, and a demo that opens on "3 profile answers missing" is
 * demonstrating the wrong thing.
 *
 * Every array value is checked against the constraints in migration 0017.
 */
await db
  .from("organisations")
  .update({
    mission:
      "Thistlebank exists so that a woman on the south side of Glasgow with an idea " +
      "does not have to already understand how business works before she can start. " +
      "We take people from a first conversation to a first paying customer, and we " +
      "stay with them after that.",
    unique_offer:
      "We pay for childcare during the sessions themselves, and our grants need no " +
      "match funding and no business plan.",
    audiences: [
      "any_woman",
      "women_returning_to_work",
      "single_parents",
      "women_on_low_income",
    ],
    service_kinds: [
      "course_or_programme",
      "grant_or_fund",
      "advice_or_one_to_one",
      "mentoring",
    ],
    access_routes: ["in_person", "online", "evenings_or_weekends"],
    cost_options: ["free", "free_to_apply"],
    cost_note:
      "Everything we run is free to attend. The grants are free to apply for and you " +
      "keep the money if you get it.",
    coverage: "local_authority",
    coverage_note:
      "Glasgow City, with a few places each block kept for women travelling in from " +
      "East Renfrewshire and North Lanarkshire.",
    eligibility:
      "Women over 18 who live in or near Glasgow. You do not need to be trading yet, " +
      "you do not need a business plan, and you do not need to have done anything like " +
      "this before.",
    not_eligible:
      "We cannot help with personal debt, immigration or legal advice, or businesses " +
      "already turning over more than £100,000 a year. For those we will point you " +
      "somewhere that can.",
    posting_frequency: "monthly",
    availability: "year_round",
    availability_note:
      "Programmes run in three blocks a year. One-to-one advice and the grants are " +
      "open year round.",
    profile_updated_at: new Date().toISOString(),
  })
  .eq("id", organisationId);

/* ------------------------------------------------------------- the zones -- */

const { data: zones } = await db
  .from("access_zones")
  .select("id, slug")
  .in("slug", ["enterprise-business-growth", "funding-finance"]);

const zoneId = (slug) => zones?.find((z) => z.slug === slug)?.id;

for (const [slug, role] of [
  ["enterprise-business-growth", "primary"],
  ["funding-finance", "also"],
]) {
  const id = zoneId(slug);
  if (!id) continue;
  await db
    .from("organisation_zones")
    .upsert(
      { organisation_id: organisationId, zone_id: id, role },
      { onConflict: "organisation_id,zone_id" },
    );
}

/* ---------------------------------------------------------- the listings -- */

const LISTINGS = [
  {
    name: "Start It Up: eight weeks to your first customer",
    kind: "course_or_programme",
    blurb:
      "An eight-week evening programme for women with an idea and no idea what to do next. " +
      "You leave with a tested offer, a price you can say out loud, and a first customer.",
    who_for:
      "Women over 18 living in Glasgow or the surrounding area who are not yet trading, " +
      "or who have been trading under a year.",
    what_to_expect:
      "One evening a week for eight weeks, in person in Govanhill, with a small group. " +
      "Apply online, then a fifteen minute call with us before you are offered a place.",
    cost: "free",
    formats: ["in_person", "evenings_or_weekends"],
    place: "Glasgow",
    situations: ["starting-or-growing", "changing-career", "returning-to-work"],
  },
  {
    name: "Thistlebank Seed Grants",
    kind: "grant_or_fund",
    blurb:
      "Grants of £500 to £2,000 for women starting or growing a small business in Glasgow. " +
      "No match funding and no interest, because the point is to remove a barrier rather than add one.",
    who_for:
      "Women-led businesses under three years old, based in Glasgow. We cannot fund " +
      "organisations with a turnover over £100,000, or anything already funded by us this year.",
    what_to_expect:
      "A short written application, no business plan required. We decide within three weeks " +
      "and tell you either way, with a reason.",
    cost: "free_to_apply",
    formats: ["online"],
    place: "Glasgow",
    deadline: new Date(Date.now() + 56 * 86_400_000).toISOString().slice(0, 10),
    situations: ["looking-for-funding", "starting-or-growing", "financial-difficulty"],
  },
];

const { data: situations } = await db.from("situations").select("id, slug");
const situationId = (slug) => situations?.find((s) => s.slug === slug)?.id;

for (const listing of LISTINGS) {
  const { situations: slugs, ...fields } = listing;

  const { data: already } = await db
    .from("listings")
    .select("id")
    .eq("organisation_id", organisationId)
    .eq("name", fields.name)
    .maybeSingle();

  let listingId = already?.id;

  if (!listingId) {
    const { data, error } = await db
      .from("listings")
      .insert({ ...fields, organisation_id: organisationId, status: "draft" })
      .select("id")
      .single();

    if (error) {
      console.error(`  listing "${fields.name}" failed: ${error.message}`);
      continue;
    }
    listingId = data.id;
  }

  for (const slug of slugs) {
    const id = situationId(slug);
    if (!id) continue;
    await db
      .from("listing_situations")
      .upsert(
        { listing_id: listingId, situation_id: id },
        { onConflict: "listing_id,situation_id" },
      );
  }

  console.log(`  listing ready: ${fields.name}`);
}

/* ------------------------------------------------------------- verifying -- */

/*
 * --verify marks it checked, which is what opens the rest of the portal.
 *
 * Behind a flag rather than on by default, because it is the one step here
 * with a consequence outside the demo: a verified organisation appears in
 * Discover, and the site is now open to search engines. Thistlebank does not
 * exist, so anything of its that reaches an index is a fictional organisation
 * in Glasgow that a real woman can find.
 *
 * The listings stay draft either way. That matters more than it looks:
 * verifying publishes nothing, so what becomes public is an organisation page
 * with no offers on it, rather than a grant fund somebody could apply to.
 * Publishing those is a separate decision and is deliberately not automated.
 *
 * verified_by is left null. It is a foreign key to whoever made the decision,
 * and no person made this one.
 */
if (process.argv.includes("--verify")) {
  const { error } = await db
    .from("organisations")
    .update({ status: "verified", verified_at: new Date().toISOString() })
    .eq("id", organisationId);

  console.log(
    error ? `  could not verify: ${error.message}` : "  verified, portal unlocked",
  );
}

console.log(`
Done.

  Portal    https://organisation.hwspathgrid.com/sign-in
  Email     ${EMAIL}
  Password  ${PASSWORD}

Both listings are drafts, so no offer of Thistlebank's is public. Publishing
them is a separate decision and this script will not do it.

Remove it all again with:
  node --env-file=.env.local scripts/seed-demo-org.mjs --project <ref> --remove
`);
