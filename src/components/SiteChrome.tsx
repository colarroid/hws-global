"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Whether a route is one of the three questions.
 *
 * The find flow is the one place on the platform with a single job on the
 * screen. Everything else can afford a footer; here a column of links under
 * the question is somewhere to go instead of answering it, and the women
 * this is hardest for are the ones most likely to take it.
 */
function isFindFlow(pathname: string) {
  return pathname === "/find" || pathname.startsWith("/find/");
}

/**
 * Whether a route is the sign-in flow: the email box, the code box, and the
 * name she is asked for once.
 *
 * Bare for the same reason as the questions. Signing in is three screens
 * with one field each, and this is the point in the platform where somebody
 * is most likely to give up: a wall of links under the box is a way out of
 * a task she has already half finished. Unlike the questions it gets no
 * line at the foot either, because there is no search on the screen to
 * describe.
 */
function isAccountFlow(pathname: string) {
  return pathname === "/account" || pathname.startsWith("/account/");
}

/**
 * The line under the three questions.
 *
 * Scoped to the find flow, so it appears beside the thing it describes and
 * nowhere else. On a page about an organisation, or the privacy policy, it
 * would read as a claim about the platform rather than about the search.
 *
 * On the claim itself: the ranker is deterministic. It stems her sentence,
 * scores word overlap against each listing, and adds nothing a model has
 * touched. There is no LLM in this repository. HWS asked for this line and
 * it is theirs to ask for, but it is not true yet, and the honest versions
 * are a one-line change here.
 */
function SearchCredit() {
  return (
    <div className="border-t border-hairline-soft px-5 py-6 text-center">
      <span className="eyebrow text-ink-60">Search powered by AI</span>
    </div>
  );
}

/**
 * The foot of the page. Three outcomes, one of them nothing at all: the
 * search credit on the three questions, bare through sign-in, the footer
 * everywhere else.
 *
 * The footer is a server component that reads the account, so it arrives as
 * a prop rather than an import. This file only decides what to show and
 * knows nothing about what is in it.
 */
export function SiteBottom({ footer }: { footer: ReactNode }) {
  const pathname = usePathname();
  if (isFindFlow(pathname)) return <SearchCredit />;
  if (isAccountFlow(pathname)) return null;
  return <>{footer}</>;
}
