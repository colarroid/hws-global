/**
 * The line under the three questions.
 *
 * It sits inside the question column rather than at the foot of the page,
 * so it reads as a note about the box directly above it. Along the bottom
 * of the window it read as a footer item, which made it a claim about the
 * platform rather than about the search.
 *
 * On the claim itself: the ranker is deterministic. It stems her sentence,
 * scores word overlap against each listing, and adds nothing a model has
 * touched. There is no LLM in this repository. HWS asked for this line and
 * it is theirs to ask for, but it is not true yet, and the honest versions
 * are a one-line change here.
 */
export function SearchCredit() {
  return (
    <span className="eyebrow self-center text-ink-60">Search powered by AI</span>
  );
}
