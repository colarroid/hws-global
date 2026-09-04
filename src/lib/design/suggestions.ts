/**
 * The example sentences under question 1.
 *
 * Which of these appear is decided by what is actually on the platform. The
 * wording is here rather than in the database because it is woman-facing copy
 * and belongs with the rest of it; the selection is a query, so the list
 * changes on its own as listings come and go and there is nothing for anybody
 * to keep in step.
 *
 * Two sources, because they answer different halves of the question.
 * Situations are tagged on listings, so a situation with listings behind it
 * means there is something open to find. Markets are assigned to
 * organisations, so a market with organisations behind it means there is
 * somebody to go to even when nothing is open. Situations come first for that
 * reason: a specific thing beats a general one.
 *
 * Every sentence is written the way a woman would say it out loud, in the
 * first person and lower case, so it reads as an example of what to type
 * rather than a category to pick.
 */

/** Situation slug to the sentence it suggests. */
export const SITUATION_SUGGESTIONS: Record<string, string> = {
  "returning-to-work": "getting back to work after a break",
  "unpaid-carer": "support while I care for someone",
  "pregnant-or-new-parent": "help as a new parent",
  "starting-or-growing": "starting my own business",
  "looking-for-funding": "finding funding for my business",
  "changing-career": "changing career",
  "recently-graduated": "finding work after graduating",
  "new-to-scotland": "settling in Scotland",
  "rural-or-island": "something near me in a rural area",
  "financial-difficulty": "help when money is tight",
  "looking-after-my-health": "looking after my health",
};

/**
 * Market slug to the sentence it suggests.
 *
 * Only the markets that say something the situations do not. Funding, carers
 * and the rest are deliberately absent: a woman would type one sentence for
 * both, and offering it twice reads as a list padded out rather than chosen.
 */
export const MARKET_SUGGESTIONS: Record<string, string> = {
  "skills-and-retraining": "retraining for something new",
  "jobs-and-careers": "finding a job",
  "digital-and-ai": "learning computers and AI",
  "leadership-and-networks": "meeting people in my line of work",
  "womens-health": "women's health support",
  "workplace-culture": "a problem at work",
  "marketplace-and-procurement": "finding customers or contracts",
  "business-infrastructure": "practical help running my business",
  "social-enterprise": "starting a social enterprise",
  "community-and-third-sector": "starting a community group",
  "media-and-visibility": "getting my work seen",
  "policy-and-advocacy": "having a say on things that affect me",
  "research-and-innovation": "research or innovation support",
};

/** As many as fit two rows on a phone without becoming a wall. */
export const MAX_SUGGESTIONS = 6;

/**
 * Shown only if the platform has nothing at all.
 *
 * A blank box with no examples is the exact problem this screen exists to
 * solve, and on an empty platform every suggestion returns nothing anyway,
 * so these are no less true than a computed list would be.
 */
export const FALLBACK_SUGGESTIONS = [
  "getting back to work after a break",
  "starting my own business",
  "finding money for a course",
  "changing career",
  "meeting people near me",
];
