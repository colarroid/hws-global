/**
 * Refuse to touch a project the operator has not named.
 *
 * Both seed scripts use the service role key and bypass RLS, and both take
 * their target from whichever `.env.local` happens to be loaded. That is one
 * careless `--env-file` away from writing test organisations into production,
 * which is how `dev-organisation@example.org` came to exist there: the script
 * checked that the credentials were present, never which project they opened.
 *
 * So the project reference has to be typed out on the command line and match
 * the URL. Local Supabase is exempt, since there is nothing there to lose.
 *
 *   node --env-file=.env.local scripts/seed-dev.mjs --project abcdefghijklm
 */
export function requireNamedProject() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    console.error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.\n" +
        "Run with: node --env-file=.env.local scripts/<script>.mjs",
    );
    process.exit(1);
  }

  const { hostname } = new URL(url);

  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return { url, serviceKey, project: hostname };
  }

  // https://<ref>.supabase.co
  const ref = hostname.split(".")[0];
  const flag = process.argv.indexOf("--project");
  const named = flag === -1 ? null : process.argv[flag + 1];

  if (named !== ref) {
    console.error(
      `Refusing to run against ${hostname}.\n\n` +
        "This script writes with the service role key and bypasses RLS. Name\n" +
        "the project on the command line so it cannot happen by accident:\n\n" +
        `  node --env-file=.env.local ${process.argv[1]} --project ${ref}\n\n` +
        "If that is the production project, that is the point of this message.",
    );
    process.exit(1);
  }

  return { url, serviceKey, project: ref };
}
