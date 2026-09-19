/**
 * Fail if a page that says it belongs in search results is missing from the
 * sitemap.
 *
 * WHY THIS EXISTS. sitemap.ts is built by naming what goes in rather than by
 * filtering what comes out, and that is deliberate: a sitemap assembled by
 * exclusion grows a private page the first time somebody adds a route and
 * forgets this file, and on this platform the private routes are the ones
 * carrying what a woman typed about her own life. Naming them is the safe
 * direction to be wrong in.
 *
 * The cost of that choice is the other kind of drift. Add a new public page,
 * forget the sitemap, and nothing breaks, nothing warns, and the page simply
 * never gets crawled. Nobody notices for months because the symptom is
 * absence.
 *
 * So the two lists are checked against each other here instead of trusted to
 * match. The rule is one line: every page whose metadata says
 * `indexable: true` must appear in sitemap.ts, and this fails loudly when one
 * does not.
 *
 * It deliberately does not check the reverse. The sitemap is allowed to carry
 * things no page.tsx declares.
 *
 *   node scripts/check-sitemap.mjs
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const APP = join(import.meta.dirname, "..", "src", "app");
const SITEMAP = join(APP, "sitemap.ts");

/** Every page.tsx under src/app, as absolute paths. */
function pages(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) found.push(...pages(full));
    else if (entry === "page.tsx") found.push(full);
  }
  return found;
}

/** "src/app/discover/[zone]/page.tsx" becomes "/discover/[zone]". */
function routeOf(file) {
  const rel = relative(APP, file).split(sep).slice(0, -1);
  // Route groups, (like this), are organisational and not part of the URL.
  const segments = rel.filter((s) => !(s.startsWith("(") && s.endsWith(")")));
  return "/" + segments.join("/");
}

/**
 * Whether sitemap.ts mentions this route.
 *
 * A static route has to appear as a literal. A dynamic one cannot, because
 * the sitemap builds those from the database, so what is looked for is the
 * prefix it builds them under: /organisation/[id] is covered by the file
 * containing `/organisation/${`.
 */
function covered(route, source) {
  const dynamic = route.indexOf("/[");
  if (dynamic === -1) {
    return (
      source.includes(`\${base}${route}\``) ||
      source.includes(`\${base}${route}"`) ||
      source.includes(`\${base}${route} `)
    );
  }
  return source.includes(`\${base}${route.slice(0, dynamic)}/\${`);
}

const source = readFileSync(SITEMAP, "utf8");

const indexable = pages(APP)
  .filter((file) => /indexable:\s*true/.test(readFileSync(file, "utf8")))
  .map(routeOf)
  .sort();

const missing = indexable.filter((route) => !covered(route, source));

for (const route of indexable) {
  console.log(`  ${missing.includes(route) ? "MISSING" : "ok     "}  ${route}`);
}

if (missing.length > 0) {
  console.error(
    `\n${missing.length} page(s) say indexable: true and are not in sitemap.ts:\n` +
      missing.map((r) => `  ${r}`).join("\n") +
      `\n\nAdd them there, or take indexable off the page. A public page that is\n` +
      `in neither place is one nobody will ever find.\n`,
  );
  process.exit(1);
}

console.log(`\n${indexable.length} indexable pages, all present in the sitemap.`);
