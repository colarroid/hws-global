"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * The routes that go without a footer: the three questions, and sign-in.
 *
 * Both are screens with a single job and one field, and both are where
 * somebody is most likely to give up. A column of links underneath is a way
 * out of a task she has already half finished, and the women this is
 * hardest for are the ones most likely to take it.
 */
function isBare(pathname: string) {
  return (
    pathname === "/find" ||
    pathname.startsWith("/find/") ||
    pathname === "/account" ||
    pathname.startsWith("/account/")
  );
}

/**
 * The foot of the page: the footer, or nothing at all.
 *
 * The footer is a server component that reads the account, so it arrives as
 * a prop rather than an import. This file only decides whether to show it
 * and knows nothing about what is in it.
 */
export function SiteBottom({ footer }: { footer: ReactNode }) {
  const pathname = usePathname();
  return isBare(pathname) ? null : <>{footer}</>;
}
