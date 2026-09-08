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
 * The footer, minus the find flow.
 *
 * The footer itself is a server component that reads the account, so it is
 * passed in as children rather than imported here: this file only decides
 * whether to show it, and knows nothing about what is in it.
 */
export function FooterSlot({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return isFindFlow(pathname) ? null : <>{children}</>;
}

/**
 * The line at the foot of every page.
 *
 * Sits outside FooterSlot on purpose, so it survives on the find flow where
 * the footer does not — the search is what it is describing, and the search
 * is what those three screens are.
 *
 * On the claim itself: the ranker is deterministic. It stems her sentence,
 * scores word overlap against each listing, and adds nothing a model has
 * touched. There is no LLM in this repository. HWS asked for this line and
 * it is theirs to ask for, but it is not true yet, and the honest versions
 * are a one-line change here.
 */
export function SearchCredit() {
  return (
    <div className="border-t border-hairline-soft px-5 py-6 text-center">
      <span className="eyebrow text-ink-60">Search powered by AI</span>
    </div>
  );
}
