"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon, CloseIcon } from "@/components/ui/NavIcons";

/**
 * The header navigation below the desktop breakpoint.
 *
 * A full-height sheet under the bar. The page goes, the rows are large
 * enough to hit without aiming, and what she can do next sits at the bottom
 * where her thumb already is.
 *
 * It was a disclosure that pushed the page down, chosen so nothing was
 * covered and there was no scroll lock to get wrong. Covering the page is now
 * the point, so the lock comes with it — by an attribute and one rule in the
 * stylesheet rather than scroll maths in JavaScript.
 *
 * It closes on Escape, on any navigation, and returns focus to the button,
 * so a keyboard user is never left somewhere they cannot see.
 *
 * What it still does not do is trap focus or hide the page behind it from a
 * screen reader. That was true of the disclosure too and matters more now the
 * sheet covers things: a reader not following the visual order can still walk
 * into the page underneath. It is the piece worth doing next.
 */
export function MobileNav({
  label,
  children,
}: {
  /** Names the navigation for anyone who cannot see the icon. */
  label: string;
  children: React.ReactNode;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // The panel remembers which page it was opened on, so navigating anywhere
  // closes it without an effect watching the route. Leaving it open over the
  // new page is disorienting, and on a phone it hides what she just asked for.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  const close = () => setOpenedOn(null);

  useEffect(() => {
    if (!open) return;

    // Read by the stylesheet, which locks the page behind the sheet and puts
    // the header's ground back under the mark. Done with an attribute and one
    // rule rather than by measuring scroll positions in JavaScript, which is
    // the part of this that usually breaks.
    document.documentElement.dataset.navOpen = "true";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      close();
      buttonRef.current?.focus();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      delete document.documentElement.dataset.navOpen;
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpenedOn(open ? null : pathname)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? `Close ${label}` : `Open ${label}`}
        data-open={open}
        className="menu-trigger inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-control text-ink transition-[color,background-color,box-shadow] duration-150 ease-out lg:hidden"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/*
        Rendered only when open rather than hidden with CSS, so the links are
        not in the tab order while the sheet is shut.

        top-[60px] is the bar's own height. The sheet starts under the bar
        rather than over it, so the mark and the close button stay exactly
        where they were and she is not hunting for the way out.
      */}
      {open ? (
        <nav
          id="mobile-nav"
          aria-label={label}
          className="nav-sheet panel-in fixed inset-x-0 bottom-0 top-[60px] z-40 overflow-y-auto overscroll-contain bg-surface px-5 pb-10 pt-2 lg:hidden"
        >
          {children}
        </nav>
      ) : null}
    </>
  );
}
