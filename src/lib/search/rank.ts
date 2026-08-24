import type { SearchableListing } from "@/lib/data/search";

export type Scope = "my-area" | "nearby" | "all-scotland" | "online";

export type Answers = {
  need: string;
  place: string;
  /** Situation slugs she picked on question 3. */
  situations: string[];
  scope: Scope;
  /** Slugs from the refine screen: free, open-now, no-forms, women-only. */
  filters: string[];
};

export type RankedListing = {
  listing: SearchableListing;
  score: number;
  /**
   * The sentence that follows "Why this matched you:". Lower case, because it
   * continues that label rather than starting a new sentence.
   */
  why: string;
};

/** Cap. If she needs more than five, the ranking is the problem. */
export const MAX_RESULTS = 5;

/**
 * Words too common to say anything about what she needs. Kept deliberately
 * short: over-stemming her words is how a platform stops hearing them.
 */
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

/** Crude but honest stemming: enough to match "caring" against "carer". */
function stem(word: string): string {
  return word
    .replace(/(ing|ers|er|ed|es|s)$/, "")
    .replace(/i$/, "y");
}

const SCORES = {
  /** Eligibility is the strongest signal we have: she said this about herself. */
  situation: 40,
  /** Her words appearing in the listing's own words. */
  needWord: 8,
  needWordCap: 32,
  /** Same place, or reachable from it. */
  placeExact: 25,
  placeOnline: 15,
  scotlandWide: 10,
  /** A listing nobody has confirmed in six months is a worse bet. */
  stalePenalty: -12,
};

function isOnline(listing: SearchableListing) {
  return (
    listing.formats.includes("online") ||
    listing.formats.includes("by_phone") ||
    (listing.place ?? "").toLowerCase().includes("online")
  );
}

function isScotlandWide(listing: SearchableListing) {
  const place = (listing.place ?? "").toLowerCase();
  return place.includes("scotland") || place.includes("nationwide");
}

/**
 * Does this listing run somewhere she can reach?
 *
 * Her answer arrives as every level of the place at once, because question 2
 * accepts any precision: "EH48 · Bathgate, West Lothian". Each level is
 * tested separately. Matching only the first would fail the most ordinary
 * case in the product, a woman typing her own postcode, since listings
 * record the town they run in rather than the postcodes around it.
 *
 * The postcode itself is skipped: a listing never says "EH48", so testing it
 * can only produce a false match against some unrelated string.
 */
function placeMatches(listing: SearchableListing, place: string) {
  if (!place) return false;

  const haystack = [listing.place, listing.organisationPlace]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (!haystack.trim()) return false;

  return place
    .toLowerCase()
    .split(/[·,]/)
    .map((part) => part.trim())
    .filter((part) => part.length > 2 && !/^[a-z]{1,2}\d/.test(part))
    .some((part) => haystack.includes(part) || part.includes(haystack.trim()));
}

function isStale(listing: SearchableListing) {
  if (!listing.last_confirmed_at) return true;
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - 6);
  return new Date(listing.last_confirmed_at) < cutoff;
}

/**
 * Turn the factors that actually scored into her sentence.
 *
 * Never more than two clauses. The point is that she can tell at a glance why
 * this is in front of her, and a list of five reasons reads as a machine
 * justifying itself rather than someone explaining.
 */
function explain(
  listing: SearchableListing,
  answers: Answers,
  matchedSituations: string[],
  matchedWords: string[],
  /** Slug to second-person phrase, from situations.match_phrase. */
  situationPhrases: Map<string, string>,
): string {
  const about: string[] = [];

  if (matchedSituations.length > 0) {
    // At most two. A list of every factor reads as a machine justifying
    // itself rather than someone explaining.
    const phrases = matchedSituations
      .map((slug) => situationPhrases.get(slug))
      .filter((p): p is string => Boolean(p))
      .slice(0, 2);

    if (phrases.length === 1) {
      about.push(`you told us ${phrases[0]}`);
    } else if (phrases.length > 1) {
      about.push(`you told us ${phrases[0]} and ${phrases[1]}`);
    }
  } else if (matchedWords.length > 0) {
    about.push(`you asked about ${matchedWords.slice(0, 2).join(" and ")}`);
  }

  const where = placeMatches(listing, answers.place)
    ? `this runs in ${listing.place ?? answers.place}`
    : isOnline(listing)
      ? "this one is online, so where you are doesn't matter"
      : isScotlandWide(listing)
        ? "this is open across Scotland"
        : null;

  if (where) about.push(where);

  if (about.length === 0) {
    // Everything is explainable or it does not belong in her results.
    return `it's one of the closest things we have to what you described.`;
  }

  return `${about.join(", and ")}.`;
}

/**
 * Rank live listings against her three answers.
 *
 * Deliberately rules-based and readable. The brief requires HWS to be able to
 * explain the basis on which anything surfaced, and forbids paid placement:
 * nothing here can be bought, and every factor is visible in this file.
 */
export function rank(
  listings: SearchableListing[],
  answers: Answers,
  /** Slug to second-person phrase. See situations.match_phrase. */
  situationPhrases: Map<string, string>,
): RankedListing[] {
  const needStems = new Set(words(answers.need).map(stem));

  const scored = listings.map((listing) => {
    let score = 0;

    const matchedSituations = listing.situationSlugs.filter((slug) =>
      answers.situations.includes(slug),
    );
    score += matchedSituations.length * SCORES.situation;

    const listingText = [
      listing.name,
      listing.blurb,
      listing.who_for,
      listing.what_to_expect,
    ]
      .filter(Boolean)
      .join(" ");

    const listingStems = new Set(words(listingText).map(stem));
    const matchedWords = [...needStems].filter((s) => listingStems.has(s));
    score += Math.min(
      matchedWords.length * SCORES.needWord,
      SCORES.needWordCap,
    );

    if (answers.scope === "online") {
      if (!isOnline(listing)) return { listing, score: -1, why: "" };
      score += SCORES.placeOnline;
    } else if (placeMatches(listing, answers.place)) {
      score += SCORES.placeExact;
    } else if (isOnline(listing)) {
      score += SCORES.placeOnline;
    } else if (isScotlandWide(listing)) {
      score += SCORES.scotlandWide;
    } else if (answers.scope === "my-area" && answers.place) {
      // Somewhere else entirely, and she asked to look close to home.
      return { listing, score: -1, why: "" };
    }

    if (isStale(listing)) score += SCORES.stalePenalty;

    if (answers.filters.includes("free") && listing.cost !== "free") {
      return { listing, score: -1, why: "" };
    }
    if (answers.filters.includes("no-forms") && listing.apply_url?.startsWith("http")) {
      return { listing, score: -1, why: "" };
    }

    return {
      listing,
      score,
      why: explain(
        listing,
        answers,
        matchedSituations,
        // Report her words, not the stems we matched on.
        words(answers.need).filter((w) => listingStems.has(stem(w))),
        situationPhrases,
      ),
    };
  });

  return scored
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.listing.name.localeCompare(b.listing.name))
    .slice(0, MAX_RESULTS);
}

/**
 * How many listings a widening would return.
 *
 * The no-match screen only ever offers a widening that has something in it,
 * so the count has to be computed before that screen renders. Offering a
 * widening that turns out to be empty is just a second dead end.
 */
export function countForScope(
  listings: SearchableListing[],
  answers: Answers,
  scope: Scope,
): number {
  return rank(listings, { ...answers, scope }, new Map()).length;
}
