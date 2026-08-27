/**
 * Removes what seed-dev.mjs creates.
 *
 * The seed's header has promised this since it was written, and it did not
 * exist, which is the likeliest reason a seeded organisation is still sitting
 * in production being emailed by the cron jobs.
 *
 * Deletes only rows reachable from the one seeded address, in foreign-key
 * order. Anything else that happens to use a reserved domain is reported and
 * left alone: this script undoes the seed, it does not sweep the database.
 *
 *   node --env-file=.env.local scripts/seed-clean.mjs --project <ref>
 */

import { createClient } from "@supabase/supabase-js";
import { requireNamedProject } from "./guard.mjs";

const EMAIL = "dev-organisation@example.org";

/** Reserved by RFC 2606 and 6761, so nothing behind them can receive mail. */
const RESERVED = /@(?:[^@]*\.)?(?:example\.(?:com|net|org)|test|invalid|localhost|local)$/i;

const { url, serviceKey } = requireNamedProject();

const supabase = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function main() {
  const { data: list } = await supabase.auth.admin.listUsers();
  const users = list?.users ?? [];
  const user = users.find((u) => u.email === EMAIL);

  if (!user) {
    console.log(`No ${EMAIL}. Nothing seeded here.`);
  } else {
    const { data: membership } = await supabase
      .from("organisation_members")
      .select("organisation_id")
      .eq("user_id", user.id)
      .maybeSingle();

    const organisationId = membership?.organisation_id;

    if (organisationId) {
      // Children first. Nothing here cascades, so an organisation deleted
      // ahead of its listings would fail on the foreign key and leave the
      // account half removed.
      for (const table of ["listings", "organisation_zones", "organisation_members"]) {
        const { error, count } = await supabase
          .from(table)
          .delete({ count: "exact" })
          .eq("organisation_id", organisationId);
        if (error) throw error;
        console.log(`${table.padEnd(20)} ${count ?? 0} removed`);
      }

      const { error } = await supabase
        .from("organisations")
        .delete()
        .eq("id", organisationId);
      if (error) throw error;
      console.log(`${"organisations".padEnd(20)} 1 removed`);
    }

    // The profile row goes with the user via the trigger's cascade, but it is
    // deleted explicitly so a schema change cannot silently leave it behind.
    await supabase.from("profiles").delete().eq("id", user.id);

    const { error: userError } = await supabase.auth.admin.deleteUser(user.id);
    if (userError) throw userError;
    console.log(`${"auth user".padEnd(20)} ${EMAIL} removed`);
  }

  const others = users.filter((u) => u.email && u.email !== EMAIL && RESERVED.test(u.email));

  if (others.length) {
    console.log(
      `\n${others.length} other account(s) on a reserved domain. This script did\n` +
        "not create them, so it has not touched them. Mail to these can never\n" +
        "be delivered, and every attempt counts against sender reputation:\n",
    );
    for (const u of others) console.log(`  ${u.email}`);
    console.log("\nRemove them by hand if they are yours to remove.");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
