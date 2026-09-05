"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bookmark, ChevronDown, LogOut, Settings, User } from "lucide-react";
import { signOut } from "@/app/account/actions";

/**
 * Her account, behind one control.
 *
 * The header used to carry a "Saved" pill and a settings cog side by side.
 * Two controls for one idea, and the cog was the weaker of them: a gear is
 * the icon every site uses for a different set of things, so it read as
 * configuration rather than as her account.
 *
 * One person-shaped button now, opening onto the two places that are hers.
 *
 * Built the same way as the language menu, deliberately, so the header has
 * one dropdown behaviour rather than two: Escape closes and returns focus to
 * the button, a click outside closes, and the list is unmounted rather than
 * hidden so nothing inside it can be tabbed to while it is shut.
 *
 * The dot on the button is the one thing kept from the old pill. The count
 * itself belongs on the row where there is room to say what it counts, but
 * something has to survive out here: a woman who saved a listing last week
 * needs to see that it is still there without opening anything, and a header
 * that gives no sign of it is a header that quietly forgets for her.
 */
export function AccountMenu({ savedCount }: { savedCount: number }) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      trigger.current?.focus();
    }

    function onPointer(event: MouseEvent) {
      if (box.current && !box.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  const row =
    "inline-flex w-full min-h-[44px] items-center gap-[10px] rounded-control px-3 py-2 " +
    "text-[14px] font-medium text-ink-70 no-underline " +
    "transition-colors duration-150 ease-out hover:bg-gold-200/60 hover:text-ink";

  return (
    <div ref={box} className="relative">
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen((was) => !was)}
        aria-expanded={open}
        aria-haspopup="menu"
        /* Says what is behind it rather than "account menu", and names the
           count, because for a screen reader the dot is not there. */
        aria-label={
          savedCount > 0
            ? `Your account. ${savedCount} saved.`
            : "Your account"
        }
        /* The language control's button, exactly: no ground, no ring, and
           the gold wash on hover. They sit next to each other and do the
           same job, so anything that makes one look heavier than the other
           reads as one of them being more important. */
        className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border-0 bg-transparent px-[10px] py-2 text-[14px] font-semibold text-ink transition-colors duration-150 ease-out hover:bg-gold-200"
      >
        {/* The dot hangs off the icon rather than the button, so it stays on
            her shoulder rather than drifting into the padding now that there
            is no pill edge for it to sit against. */}
        <span className="relative flex">
          <User size={18} strokeWidth={2} aria-hidden="true" />
          {savedCount > 0 ? (
            <span
              aria-hidden="true"
              className="absolute -end-[3px] -top-[2px] size-[7px] rounded-full bg-gold-500"
            />
          ) : null}
        </span>
        <ChevronDown
          size={15}
          strokeWidth={2.5}
          aria-hidden="true"
          className={`text-ink-60 transition-transform duration-150 ease-out ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open ? (
        <div
          role="menu"
          /* end rather than right, so it stays inside the bar when the
             document is flipped for Arabic or Urdu. */
          className="panel-in absolute end-0 top-[calc(100%+6px)] z-30 flex min-w-[210px] flex-col gap-[2px] rounded-card bg-surface p-2 shadow-panel"
        >
          <Link
            href="/saved"
            role="menuitem"
            onClick={() => setOpen(false)}
            className={row}
          >
            <Bookmark
              size={17}
              strokeWidth={2}
              className="shrink-0 text-gold-500"
              fill="currentColor"
              aria-hidden="true"
            />
            <span className="flex-1">Saved</span>
            {savedCount > 0 ? (
              <span className="rounded-full bg-gold-200 px-2 py-[2px] text-[13px] font-bold tabular-nums text-gold-700">
                {savedCount}
              </span>
            ) : null}
          </Link>

          <Link
            href="/settings"
            role="menuitem"
            onClick={() => setOpen(false)}
            className={row}
          >
            <Settings
              size={17}
              strokeWidth={2}
              className="shrink-0 text-ink-60"
              aria-hidden="true"
            />
            {/* "Settings" rather than the panel's "Reminders and settings":
                at this width the longer one wraps to two lines, and a
                two-line row in a two-row menu reads as a mistake. The panel
                has the room, so it keeps the fuller wording. */}
            <span className="flex-1">Settings</span>
          </Link>

          {/* Ruled off, because it is the one row that does something rather
              than going somewhere. Mixing it into the list is how somebody
              reaching for Settings signs herself out instead. */}
          <form
            action={signOut}
            onSubmit={() => setOpen(false)}
            className="mt-[2px] border-t border-hairline-soft pt-[6px]"
          >
            <button type="submit" role="menuitem" className={`${row} cursor-pointer border-0 bg-transparent text-start`}>
              <LogOut
                size={17}
                strokeWidth={2}
                className="shrink-0 text-ink-60"
                aria-hidden="true"
              />
              <span className="flex-1">Sign out</span>
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}
