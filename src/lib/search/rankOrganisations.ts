import type { Answers } from "@/lib/search/rank";
import type { Market, SearchableOrganisation } from "@/lib/data/search";

/**
 * Ranking organisations, as against listings.
 *
 * The platform could only ever answer with a listing, and a large part of
 * HWS's own map will never post one. Business Gateway, NHS Inform, Skills
 * Development Scotland and Fife College are standing services, not
 * opportunities with closing dates. A woman who said "I want to retrain"
 * could be shown a course at Fife College and never Fife College.
 *
 * So this runs beside the listing ranker rather than inside it. Listings stay
 * the answer when there is one — a specific thing with a date and a way in
 * beats a general one every time — and organisations are offered underneath
 * as the other kind of answer.
 *
 * Same discipline as the listing ranker: rules, readable, in one file, and
 * nothing here can be bought.
 */

export type RankedOrganisation = {
  organisation: SearchableOrganisation;
  score: number;
  /** Follows "Why this matched you:", so it is lower case and continues it. */
  why: string;
};

/** Fewer than the listing cap. This is the second answer, not the first. */
export const MAX_ORGANISATIONS = 4;

const SCORES = {
  /** She said this about herself and the organisation is set up for it. */
  audience: 30,
  /** HWS said this organisation can help with that. */
  market: 26,
  needWord: 6,
  needWordCap: 24,
  placeExact: 20,
  coverageWide: 12,
};

/**
 * What she said about herself, mapped to who an organisation says it serves.
 *
 * Two vocabularies that grew apart: `situations` is how a woman describes her
 * circumstances, `audiences` is how an organisation describes the women it is
 * set up for. They overlap without matching, and pretending one is the other
 * would either drop real matches or invent them.
 *
 * Only the honest pairs are here. "Recently graduated" has no audience, and
 * inventing one would be worse than the gap.
 */
const SITUATION_TO_AUDIENCE: Record<string, string[]> = {
  "returning-to-work": ["women_returning_to_work"],
  "unpaid-carer": ["carers"],
  "pregnant-or-new-parent": ["single_parents"],
  "new-to-scotland": ["refugees_and_new_scots"],
  "financial-difficulty": ["women_on_low_income"],
};

/**
 * And to what she is likely to be after.
 *
 * A situation is not a need — "unpaid carer" is who she is, "return to work"
 * is what she wants — so this is deliberately sparse. Where a situation
 * strongly implies a market it is worth the points; where it does not, her
 * own words do the work instead.
 */
const SITUATION_TO_MARKET: Record<string, string[]> = {
  "returning-to-work": ["return-to-work", "jobs-and-careers"],
  "unpaid-carer": ["carers"],
  "starting-or-growing": ["start-and-grow-a-business"],
  "looking-for-funding": ["funding-and-investment"],
  "changing-career": ["jobs-and-careers", "skills-and-retraining"],
  "new-to-scotland": ["new-scots-and-inclusion"],
  "financial-difficulty": ["financial-wellbeing"],
  "looking-after-my-health": ["health-and-wellbeing"],
};

const STOP_WORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "from",
  "get", "getting", "had", "has", "have", "how", "i", "in", "is", "it", "its",
  "me", "my", "need", "of", "on", "or", "so", "that", "the", "then", "there",
  "this", "to", "up", "want", "was", "we", "what", "when", "where", "which",
  "who", "will", "with", "would", "you", "your",
]);

function words(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

function stem(word: string): string {
  return word.replace(/(ing|ers|er|ed|es|s)$/, "").replace(/i$/, "y");
}

function placeParts(place: string): string[] {
  return place
    .toLowerCase()
    .split(/[·,]/)
    .map((part) => part.trim())
    .filter((part) => part.length > 2 && !/^[a-z]{1,2}\d/.test(part));
}

function placeMatches(organisation: SearchableOrganisation, place: string) {
  if (!place) return false;
  const haystack = (organisation.place ?? "").toLowerCase().trim();
  if (!haystack) return false;
  return placeParts(place).some(
    (part) => haystack.includes(part) || part.includes(haystack),
  );
}

function reachesEverywhere(organisation: SearchableOrganisation) {
  return (
    organisation.coverage === "scotland_wide" ||
    organisation.coverage === "online_only"
  );
}

/**
 * Her sentence, built only from what actually scored.
 *
 * Two clauses at most, same as the listing one. A list of every factor reads
 * as a machine justifying itself rather than someone explaining.
 */
function explain(
  organisation: SearchableOrganisation,
  matchedMarkets: string[],
  matchedWords: string[],
  markets: Market[],
  near: boolean,
): string {
  const about: string[] = [];

  if (matchedMarkets.length > 0) {
    const bySlug = new Map(markets.map((m) => [m.slug, m.label]));
    const labels = matchedMarkets
      .map((slug) => bySlug.get(slug)?.toLowerCase())
      .filter((l): l is string => Boolean(l))
      .slice(0, 2);

    if (labels.length === 1) {
      about.push(`they work on ${labels[0]}`);
    } else if (labels.length > 1) {
      about.push(`they work on ${labels[0]} and ${labels[1]}`);
    }
  } else if (matchedWords.length > 0) {
    about.push(`you asked about ${matchedWords.slice(0, 2).join(" and ")}`);
  }

  if (near) {
    about.push(`they are in ${organisation.place}`);
  } else if (organisation.coverage === "online_only") {
    about.push("they work online, so where you are doesn't matter");
  } else if (organisation.coverage === "scotland_wide") {
    about.push("they cover the whole of Scotland");
  }

  if (about.length === 0) {
    return "they are one of the closest matches we have to what you described.";
  }

  return `${about.join(", and ")}.`;
}

export function rankOrganisations(
  organisations: SearchableOrganisation[],
  answers: Answers,
  markets: Market[],
): RankedOrganisation[] {
  const needStems = new Set(words(answers.need).map(stem));

  const wantedAudiences = new Set(
    answers.situations.flatMap((slug) => SITUATION_TO_AUDIENCE[slug] ?? []),
  );
  const wantedMarkets = new Set(
    answers.situations.flatMap((slug) => SITUATION_TO_MARKET[slug] ?? []),
  );

  // Her own words can name a market too. "I want to learn AI" should reach
  // Digital & AI without her having ticked anything, which is the whole
  // point of asking in her words first.
  for (const market of markets) {
    const marketStems = new Set(words(market.matchText).map(stem));
    if ([...needStems].some((s) => marketStems.has(s))) wantedMarkets.add(market.slug);
  }

  const scored = organisations.map((organisation) => {
    let score = 0;

    const matchedAudiences = organisation.audiences.filter((slug) =>
      wantedAudiences.has(slug),
    );
    score += matchedAudiences.length * SCORES.audience;

    // "Any woman" is a real answer, but it says nothing about her in
    // particular, so it does not score as though it did.
    if (
      matchedAudiences.length === 0 &&
      organisation.audiences.includes("any_woman")
    ) {
      score += 6;
    }

    const matchedMarkets = organisation.marketSlugs.filter((slug) =>
      wantedMarkets.has(slug),
    );
    score += matchedMarkets.length * SCORES.market;

    const text = [
      organisation.name,
      organisation.blurb,
      organisation.mission,
      organisation.uniqueOffer,
      organisation.eligibility,
      ...organisation.marketSlugs.map(
        (slug) => markets.find((m) => m.slug === slug)?.label ?? "",
      ),
    ]
      .filter(Boolean)
      .join(" ");

    const textStems = new Set(words(text).map(stem));
    const matchedWords = [...needStems].filter((s) => textStems.has(s));
    score += Math.min(matchedWords.length * SCORES.needWord, SCORES.needWordCap);

    const near = placeMatches(organisation, answers.place);

    if (answers.scope === "online") {
      // She asked for things she can reach without going anywhere.
      if (
        organisation.coverage !== "online_only" &&
        !organisation.accessRoutes.includes("online") &&
        !organisation.accessRoutes.includes("by_phone")
      ) {
        return { organisation, score: -1, why: "" };
      }
      score += SCORES.coverageWide;
    } else if (near) {
      score += SCORES.placeExact;
    } else if (reachesEverywhere(organisation)) {
      score += SCORES.coverageWide;
    } else if (
      (answers.scope === "my-area" || answers.scope === "nearby") &&
      answers.place
    ) {
      // Somewhere else entirely, and she asked to look close to home.
      return { organisation, score: -1, why: "" };
    }

    return {
      organisation,
      score,
      why: explain(organisation, matchedMarkets, matchedWords, markets, near),
    };
  });

  return scored
    .filter((r) => r.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        // A tie broken by who has something running, then by name, so the
        // order is stable rather than whatever the database returned.
        b.organisation.liveListings - a.organisation.liveListings ||
        a.organisation.name.localeCompare(b.organisation.name),
    )
    .slice(0, MAX_ORGANISATIONS);
}
