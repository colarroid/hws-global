/**
 * Would reading her sentence properly have found her anything?
 *
 * This is the business case for putting a model in front of the ranker, and
 * it is deliberately not that model. Nothing here runs in a woman's request,
 * nothing here changes what anybody sees, and it can be deleted without
 * touching a line of the platform. It reads the searches that already went
 * badly, asks what a comprehension layer would have made of them, re-runs the
 * real search with that understanding, and counts what changed.
 *
 * WHY THIS RATHER THAN BUILDING IT
 *
 * `rank.ts` scores her sentence by word overlap, capped at 32. "Learning
 * computers" scored 33. "Finding money for a course" scored 31. Those are the
 * searches worth improving, and until now there was no way to know whether
 * improving them was worth the cost, the latency and the third party. An
 * afternoon here decides a fortnight there.
 *
 * WHAT IT DOES
 *
 *   1. Reads the distinct sentences out of unmet_searches.
 *   2. Asks a model to map each onto the platform's own vocabulary: 12
 *      situations and 20 markets, read live from the database so this cannot
 *      drift from what the rankers accept.
 *   3. Refuses any slug that is not in that vocabulary, because a model that
 *      invents a category is a model whose output must not reach a ranker.
 *   4. Runs the real /results page twice, once as she searched and once with
 *      the situations it inferred, and compares what came back.
 *
 * PRIVACY, BEFORE YOU RUN THIS ON REAL ROWS
 *
 * These sentences are the most private thing a woman types here. Today the
 * table holds test data and this is harmless. The moment it holds real
 * searches, running this sends them to a model provider, which is exactly the
 * "passed on" the site promises never happens. That needs to be true in the
 * privacy policy first, and the provider needs a zero-retention agreement.
 * The script says so again on startup rather than trusting anybody to
 * remember.
 *
 * SWAPPING THE PROVIDER
 *
 * One function, `extract`. Nothing else here knows or cares which model it is.
 *
 * Usage:
 *   node --env-file=.env.local scripts/evaluate-comprehension.mjs
 *   node --env-file=.env.local scripts/evaluate-comprehension.mjs --limit 20
 */

const SUPABASE = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ANTHROPIC = process.env.ANTHROPIC_API_KEY;
const BASE = process.env.EVAL_BASE_URL ?? "http://localhost:3000";

/** Cheap, fast, and correct for a 40-label classification. */
const MODEL = "claude-haiku-4-5-20251001";

const args = process.argv.slice(2);
const limitArg = args.indexOf("--limit");
const LIMIT = limitArg >= 0 ? Number(args[limitArg + 1]) : 40;

/**
 * Everything except the model call.
 *
 * Prints the vocabulary that would be sent and the sentences that would be
 * sent with it, and runs the searches as they stand. Deliberately does not
 * stand in for the model with keyword matching: a stub that pretends to
 * understand would produce a number, and a number from a stub is worse than
 * no number because somebody will quote it.
 */
const DRY = args.includes("--dry");

if (!SUPABASE || !SERVICE) {
  console.error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}
if (!ANTHROPIC && !DRY) {
  console.error(
    "Set ANTHROPIC_API_KEY. This script is the only thing that uses it, and\n" +
      "nothing in the app does: the live path does not exist yet, which is the\n" +
      "whole point of measuring first.",
  );
  process.exit(1);
}

const db = async (path) => {
  const r = await fetch(`${SUPABASE}/rest/v1/${path}`, {
    headers: { apikey: SERVICE, Authorization: `Bearer ${SERVICE}` },
  });
  if (!r.ok) throw new Error(`${path}: ${r.status} ${await r.text()}`);
  return r.json();
};

// ---------------------------------------------------------------------------
// The vocabulary, read live so it cannot drift from what the rankers accept
// ---------------------------------------------------------------------------

const situations = await db(
  "situations?select=slug,label,match_phrase&retired_at=is.null&order=sort_order",
);
const markets = await db(
  "secondary_markets?select=slug,label,match_phrase&retired_at=is.null&order=sort_order",
);

const validSituations = new Set(situations.map((s) => s.slug));
const validMarkets = new Set(markets.map((m) => m.slug));

const vocabulary = [
  "SITUATIONS (things true about her):",
  ...situations.map(
    (s) => `  ${s.slug} — ${s.label}${s.match_phrase ? ` (${s.match_phrase})` : ""}`,
  ),
  "",
  "MARKETS (kinds of help):",
  ...markets.map(
    (m) => `  ${m.slug} — ${m.label}${m.match_phrase ? ` (${m.match_phrase})` : ""}`,
  ),
].join("\n");

// ---------------------------------------------------------------------------
// The one function that knows which model this is
// ---------------------------------------------------------------------------

/**
 * Her sentence to the platform's own vocabulary.
 *
 * Told to return nothing rather than guess, because a wrong situation is
 * worse than no situation: it scores 40 and would put the wrong thing at the
 * top of her results with a confident sentence under it.
 */
async function extract(sentence) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": ANTHROPIC,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 300,
      system:
        "You map what a woman in Scotland has written about her situation onto a fixed vocabulary, " +
        "for a service that helps her find support.\n\n" +
        vocabulary +
        "\n\nReturn only JSON: {\"situations\":[slugs],\"markets\":[slugs]}.\n" +
        "Use only slugs from the lists above, exactly as written.\n" +
        "Choose nothing rather than guessing. An empty array is the right answer " +
        "when she has not said enough. A wrong situation is worse than none, because " +
        "it puts the wrong thing at the top of her results.\n" +
        "At most three of each.",
      messages: [{ role: "user", content: sentence }],
    }),
  });

  if (!response.ok) {
    throw new Error(`model: ${response.status} ${await response.text()}`);
  }

  const body = await response.json();
  const text = body.content?.map((c) => c.text ?? "").join("") ?? "";
  const json = text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);

  let parsed;
  try {
    parsed = JSON.parse(json);
  } catch {
    return { situations: [], markets: [], invalid: ["unparseable"] };
  }

  // Anything not in the vocabulary is dropped and counted. A model that
  // invents a category is a model whose output must never reach a ranker.
  const invalid = [];
  const keep = (list, valid) =>
    (Array.isArray(list) ? list : []).filter((slug) => {
      if (valid.has(slug)) return true;
      invalid.push(slug);
      return false;
    });

  return {
    situations: keep(parsed.situations, validSituations),
    markets: keep(parsed.markets, validMarkets),
    invalid,
  };
}

// ---------------------------------------------------------------------------
// Running the real search, twice
// ---------------------------------------------------------------------------

const strip = (html) =>
  html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/\s+/g, " ");

async function search({ need, place, situations: sits, scope }) {
  const params = new URLSearchParams(
    Object.entries({
      need: need ?? "",
      place: place ?? "",
      situations: (sits ?? []).join(","),
      scope: scope ?? "all-scotland",
    }).filter(([, v]) => v),
  );

  let html;
  try {
    html = strip(await (await fetch(`${BASE}/results?${params}`)).text());
  } catch {
    // The measurement is the real page, not a copy of the ranker, so the app
    // has to be up. Said plainly rather than as a stack trace about sockets.
    console.error(
      `\nCould not reach ${BASE}. Start the app first (npm run dev), or set\n` +
        "EVAL_BASE_URL to wherever it is running.\n",
    );
    process.exit(1);
  }

  return {
    deadEnd: html.includes("find anything for you right now"),
    listings: (html.match(/href="\/service\/[0-9a-f-]{36}/g) ?? []).length,
    organisations: (html.match(/href="\/organisation\/[0-9a-f-]{36}/g) ?? []).length,
  };
}

// ---------------------------------------------------------------------------
// The run
// ---------------------------------------------------------------------------

console.log(
  "\nThese sentences are the most private thing a woman types here.\n" +
    "Running this sends them to a model provider. Make sure that is true in\n" +
    "the privacy policy, and that the provider retains nothing.\n",
);

const rows = await db(
  "unmet_searches?select=need,place,situations,top_score,result_count&need=not.is.null&order=id.desc&limit=400",
);

// One call per distinct sentence: 89 rows, far fewer sentences.
const seen = new Map();
for (const row of rows) {
  const key = row.need.trim().toLowerCase();
  if (!seen.has(key)) seen.set(key, row);
}
const cases = [...seen.values()].slice(0, LIMIT);

console.log(
  `${rows.length} logged searches, ${seen.size} distinct sentences, ` +
    `evaluating ${cases.length}.\n`,
);

if (DRY) {
  console.log(
    `VOCABULARY sent with every sentence: ${situations.length} situations, ` +
      `${markets.length} markets\n`,
  );
  console.log(vocabulary);
  console.log("\nSENTENCES that would be sent, and what they find today:\n");

  for (const row of cases) {
    const before = await search({
      need: row.need,
      place: row.place,
      situations: row.situations,
    });
    console.log(
      `  ${before.deadEnd ? "dead end" : `${before.listings} listings`}`.padEnd(14) +
        `${before.organisations} orgs`.padEnd(9) +
        `top ${row.top_score ?? "-"}`.padEnd(9) +
        `"${row.need}"`,
    );
  }

  console.log(
    "\nDry run: no model was called and nothing was sent anywhere.\n" +
      "Set ANTHROPIC_API_KEY and drop --dry for the real measurement.\n",
  );
  process.exit(0);
}

const tally = { rescued: 0, improved: 0, same: 0, worse: 0, nothing: 0 };
const invalidSlugs = new Set();
const notable = [];

for (const row of cases) {
  const facets = await extract(row.need);
  facets.invalid.forEach((s) => invalidSlugs.add(s));

  const before = await search({
    need: row.need,
    place: row.place,
    situations: row.situations,
  });

  // Only the situations feed the ranker today; markets are recorded to show
  // what a fuller integration would additionally have to offer.
  const merged = [...new Set([...(row.situations ?? []), ...facets.situations])];

  const after =
    merged.length === (row.situations ?? []).length
      ? before
      : await search({ need: row.need, place: row.place, situations: merged });

  const gained = after.listings - before.listings;
  let verdict;
  if (before.deadEnd && !after.deadEnd) verdict = "rescued";
  else if (gained > 0) verdict = "improved";
  else if (gained < 0) verdict = "worse";
  else if (facets.situations.length === 0 && facets.markets.length === 0)
    verdict = "nothing";
  else verdict = "same";

  tally[verdict] += 1;

  if (verdict !== "same" || facets.situations.length > 0) {
    notable.push({
      need: row.need,
      inferred: facets.situations,
      markets: facets.markets,
      before: before.listings,
      after: after.listings,
      verdict,
    });
  }
}

console.log("VERDICTS");
for (const [k, v] of Object.entries(tally)) {
  console.log(`  ${k.padEnd(10)} ${v}`);
}

if (notable.length > 0) {
  console.log("\nWHAT IT UNDERSTOOD");
  for (const n of notable.slice(0, 25)) {
    console.log(`\n  "${n.need}"`);
    console.log(
      `    inferred: ${n.inferred.join(", ") || "nothing"}` +
        (n.markets.length ? `  |  markets: ${n.markets.join(", ")}` : ""),
    );
    console.log(`    listings ${n.before} → ${n.after}  (${n.verdict})`);
  }
}

if (invalidSlugs.size > 0) {
  console.log(
    `\nINVENTED SLUGS, refused: ${[...invalidSlugs].join(", ")}\n` +
      "Every one of these would have been a category the rankers do not know.",
  );
} else {
  console.log("\nNo invented slugs. Everything returned was in the vocabulary.");
}

console.log("");
