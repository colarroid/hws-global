"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/** Past this many pixels the bar has left the hero and needs its ground back. */
const THRESHOLD = 24;

/**
 * The bar itself: where it sits, and what colour it is.
 *
 * Only the landing page has anything for a transparent header to sit on. Its
 * hero is a dark photograph running to the top of the document, so the bar
 * floats on it and the page scrolls underneath. Everywhere else the ground is
 * cream, and a transparent bar there would be white text on nothing — so the
 * header stays exactly as it was, in flow, with its hairline.
 *
 * The colour change is done with a data attribute and a handful of rules in
 * globals.css rather than by threading a prop through the header, the mobile
 * panel, the account menu and the language picker. Those are four components
 * with their own tokens, and the alternative was an `overlay` boolean in all
 * of them that only one page ever sets.
 *
 * With JavaScript off this stays transparent, which is the safe failure: the
 * top of the hero is dark, so a light bar on it is still readable. The bar
 * only has to change because the cream arrives underneath it.
 *
 * Sticky rather than in flow everywhere else, so the phone sheet — which is
 * positioned 60px from the top of the window — always meets the bottom of a
 * bar that is actually there. In flow, opening the menu part-way down a page
 * left the sheet hanging under a header that had scrolled away.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const overlay = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;

    const onScroll = () => setScrolled(window.scrollY > THRESHOLD);
    // Run once on mount: a reload partway down the page, or a back
    // navigation, both restore the scroll position without firing an event.
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const transparent = overlay && !scrolled;

  return (
    <header
      data-chrome={transparent ? "overlay" : "solid"}
      className={[
        "z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ease-out",
        overlay ? "fixed inset-x-0 top-0" : "sticky top-0",
        transparent
          ? "border-transparent bg-transparent"
          : "border-hairline bg-ground",
      ].join(" ")}
    >
      {children}
    </header>
  );
}
