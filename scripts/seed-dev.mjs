/**
 * Development seed.
 *
 * Creates one confirmed organisation account with listings covering every
 * dashboard state, so the screens can be exercised without going through the
 * email confirmation loop each time.
 *
 * Dev only. It uses the service role key and bypasses RLS. Everything it
 * creates is namespaced under the address below, so `npm run seed:clean`
 * removes it again.
 *
 * The project has to be named on the command line, so this cannot be pointed
 * at production by loading the wrong env file. See guard.mjs.
 *
 *   node --env-file=.env.local scripts/seed-dev.mjs --project <ref>
 */

import { createClient } from "@supabase/supabase-js";
import { requireNamedProject } from "./guard.mjs";

const EMAIL = "dev-organisation@example.org";
const PASSWORD = "a memorable phrase";

const { url, serviceKey } = requireNamedProject();

const supabase = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const monthsAgo = (n) => {
  const d = new Date();
  d.setMonth(d.getMonth() - n);
  return d.toISOString();
};

const daysFromNow = (n) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};

async function findOrCreateUser() {
  const { data: list } = await supabase.auth.admin.listUsers();
  const existing = list?.users.find((u) => u.email === EMAIL);
  if (existing) return existing;

  const { data, error } = await supabase.auth.admin.createUser({
    email: EMAIL,
    password: PASSWORD,
    email_confirm: true,
    user_metadata: { role: "organisation" },
  });

  if (error) throw error;
  return data.user;
}

async function main() {
  const user = await findOrCreateUser();
  console.log(`user      ${user.email}`);

  // The profile row is created by the handle_new_user trigger. Make sure the
  // role landed as organisation rather than the woman default.
  await supabase
    .from("profiles")
    .upsert({ id: user.id, role: "organisation" }, { onConflict: "id" });

  const { data: existingMembership } = await supabase
    .from("organisation_members")
    .select("organisation_id")
    .eq("user_id", user.id)
    .maybeSingle();

  let organisationId = existingMembership?.organisation_id;

  if (!organisationId) {
    const { data: org, error } = await supabase
      .from("organisations")
      .insert({
        name: "West Lothian Women's Network",
        type: "charity",
        website: "https://example.org",
        place: "Bathgate",
        blurb:
          "We help women in West Lothian get back into work, training and business.",
        status: "pending",
        registration_number: "SC000000",
        contact_name: "Dev Seed",
        contact_role: "Coordinator",
      })
      .select("id")
      .single();

    if (error) throw error;
    organisationId = org.id;

    await supabase
      .from("organisation_members")
      .insert({ organisation_id: organisationId, user_id: user.id, role: "owner" });

    const { data: zones } = await supabase
      .from("access_zones")
      .select("id, slug")
      .is("retired_at", null)
      .order("sort_order");

    const pick = (slug) => zones.find((z) => z.slug === slug)?.id;

    await supabase.from("organisation_zones").insert([
      {
        organisation_id: organisationId,
        zone_id: pick("career-confidence-employability"),
        role: "primary",
      },
      {
        organisation_id: organisationId,
        zone_id: pick("education-pathways"),
        role: "also",
      },
    ]);
  }

  console.log(`org       ${organisationId}`);

  const { count } = await supabase
    .from("listings")
    .select("id", { count: "exact", head: true })
    .eq("organisation_id", organisationId);

  if (count && count > 0) {
    console.log(`listings  ${count} already present, left alone`);
    return;
  }

  const { error } = await supabase.from("listings").insert([
    {
      organisation_id: organisationId,
      name: "Return to Work programme",
      kind: "course_or_programme",
      blurb:
        "A twelve-week programme for women coming back to paid work after time out, with one-to-one support throughout.",
      who_for:
        "Women in West Lothian who have been out of paid work for six months or more. No qualifications needed.",
      what_to_expect:
        "A phone call within a week, then a first session in Bathgate. You can bring someone with you.",
      cost: "free",
      formats: ["in_person"],
      place: "Bathgate",
      deadline: daysFromNow(42),
      apply_url: "https://example.org/return-to-work",
      status: "live",
      // Older than the six-month window, so the freshness banner fires.
      last_confirmed_at: monthsAgo(7),
      published_at: monthsAgo(9),
      created_by: user.id,
    },
    {
      organisation_id: organisationId,
      name: "Wednesday drop in",
      kind: "drop_in",
      blurb:
        "An open session every Wednesday morning. Come with a question, or come for the company.",
      who_for: "Any woman in West Lothian. No appointment, no referral.",
      what_to_expect: "Tea, a chat, and someone who can point you somewhere useful.",
      cost: "free",
      formats: ["in_person"],
      place: "Bathgate",
      deadline: null,
      apply_url: "https://example.org/drop-in",
      status: "live",
      last_confirmed_at: monthsAgo(1),
      published_at: monthsAgo(4),
      created_by: user.id,
    },
    {
      organisation_id: organisationId,
      name: "Mentoring for women changing career",
      kind: "mentoring",
      blurb: "Six sessions with a mentor working in the field you want to move into.",
      who_for: "Women considering a change of career, at any stage.",
      what_to_expect: "We match you within a month and email you an introduction.",
      cost: "free",
      formats: ["online", "evenings_or_weekends"],
      place: "Online",
      deadline: null,
      apply_url: "https://example.org/mentoring",
      status: "in_review",
      created_by: user.id,
    },
    {
      organisation_id: organisationId,
      name: "Travel costs grant",
      kind: "grant_or_fund",
      blurb: "Up to £300 towards travel while you are training or job hunting.",
      who_for: "Women on a low income in West Lothian.",
      what_to_expect: "A decision within three weeks, paid straight to your account.",
      cost: "free_to_apply",
      formats: ["online"],
      place: "West Lothian",
      deadline: "2026-03-31",
      apply_url: "https://example.org/travel-grant",
      status: "closed",
      last_confirmed_at: monthsAgo(2),
      closed_at: monthsAgo(5),
      created_by: user.id,
    },
  ]);

  if (error) throw error;

  console.log("listings  4 created (live, live, in review, closed)");
  // The portal is its own repository and its own deployment now, so there is
  // no single URL this script can name. Decision 19.
  console.log(`\nSign in to the organisation portal as:`);
  console.log(`  ${EMAIL}`);
  console.log(`  ${PASSWORD}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
