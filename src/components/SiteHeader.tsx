import Image from "next/image";
import Link from "next/link";
import { Bookmark, Settings } from "lucide-react";
import { MobileNav } from "@/components/ui/MobileNav";
import { AccountMenu } from "@/components/AccountMenu";
import { getSavedIds } from "@/lib/saved";
import { getAccount } from "@/lib/data/account";
import { LanguageMenu } from "@/components/LanguageMenu";
import { getLocale } from "@/lib/i18n";

/**
 * Saved, as a row in the phone panel.
 *
 * The panel is the phone's version of the account menu, so it lists the same
 * two places in the same order. It used to have a pill variant for the
 * desktop row as well; that row is now one control, so the pill has gone
 * with it rather than staying as a branch nothing takes.
 */
function SavedLink({ count }: { count: number }) {
  return (
    <Link href="/saved" className={PANEL_ROW}>
      <Bookmark
        size={17}
        strokeWidth={2}
        className="shrink-0 text-gold-500"
        fill="currentColor"
        aria-hidden="true"
      />
      <span className="flex-1">Saved</span>
      {count > 0 ? (
        <span className="rounded-full bg-gold-200 px-2 py-[2px] text-[13px] font-bold tabular-nums text-gold-700">
          {count}
        </span>
      ) : null}
    </Link>
  );
}

/** Discover and the FAQ, written once for the row and the phone panel. */
const PLACES = [
  { href: "/discover", label: "Discover" },
  { href: "/faq", label: "FAQ" },
];

const PANEL_ROW =
  "inline-flex w-full min-h-[44px] items-center gap-3 rounded-control px-3 py-[10px] " +
  "text-[15px] font-medium text-ink-70 no-underline " +
  "transition-[color,background-color] duration-150 ease-out hover:bg-gold-200/60 hover:text-ink";

/** Settings, as a row in the phone panel. In words: there is room for them. */
function SettingsLink() {
  return (
    <Link href="/settings" className={PANEL_ROW}>
      <Settings
        size={17}
        strokeWidth={2}
        className="shrink-0 text-ink-60"
        aria-hidden="true"
      />
      <span className="flex-1">Reminders and settings</span>
    </Link>
  );
}

/**
 * The woman-facing header.
 *
 * Deliberately almost nothing. There is no sign-in control here: the account
 * is the only ask in the whole flow, and it appears after she saves
 * something, never before. A sign-in prompt in the header would make the
 * no-login promise read as a bait and switch.
 *
 * Nothing shows until there is something to show, so a woman who has just
 * arrived sees only the logo, and the menu button does not appear either.
 * That matters more here than on the other two: this is the first screen of
 * a platform for people with low digital confidence, and an empty control is
 * one more thing to wonder about.
 */
export async function SiteHeader() {
  const [saved, account, locale] = await Promise.all([
    getSavedIds(),
    getAccount(),
    getLocale(),
  ]);

  return (
    <header className="border-b border-hairline bg-ground">
      {/* relative so the mobile panel can hang off the bottom edge. */}
      <div className="relative">
        {/*
          Full width rather than a centred 1100px column, matching the other
          two headers. It is furniture: capping it leaves the logo floating
          mid-screen while the page beneath runs to the edges.
        */}
        {/*
          Sized off the controls rather than padded around them. A 44px tap
          target is the floor, so the padding is the only thing that can give,
          and every pixel here is one fewer for the results she came to read
          on a small screen. min-h keeps it steady when the controls are
          absent and only the logo is left.
        */}
        <div className="flex min-h-[60px] w-full items-center justify-between gap-6 px-5 py-2 sm:px-8 lg:px-10">
          {/* The name is on the link and alt is empty, so it is announced
              once, as the thing it does, rather than twice. */}
          <Link
            href="/"
            aria-label="HWS Pathgrid, home"
            className="flex items-center no-underline"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={100}
              height={36}
              priority
              // Served as authored. The image optimiser does not process SVG,
              // and there is nothing to gain from it on a 5KB vector.
              unoptimized
            />
          </Link>

          {/* The language control is always here, unlike everything else. The
              rule for this header is that nothing shows until there is
              something to show, and this is the exception that proves it:
              somebody who cannot read the page has something to do from the
              moment she arrives, and hiding the way to fix that until she has
              saved a listing is backwards. */}
          {/* Centre, between the mark and the controls. Two links only: this
              header stays close to empty on purpose, and anything more turns
              the way in to the search into one option among several. */}
          <nav
            aria-label="Sections"
            className="hidden items-center gap-1 lg:flex"
          >
            {PLACES.map((place) => (
              <Link
                key={place.href}
                href={place.href}
                className="inline-flex min-h-[44px] items-center rounded-full px-4 py-[9px] text-[15px] font-semibold text-ink no-underline transition-colors duration-150 ease-out hover:bg-gold-200"
              >
                {place.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Signed out, this is a way back in for somebody returning to a
                saved list, not a wall in front of the search. Quiet rather
                than a filled button for that reason, and gone entirely once
                she is signed in, when Saved and Settings say it better. */}
            {account ? null : (
              <Link
                href="/account"
                className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full px-3 py-[9px] text-[15px] font-semibold text-ink no-underline transition-colors duration-150 ease-out hover:bg-gold-200 sm:px-4"
              >
                Sign in
              </Link>
            )}

            {/* One control for both of her places, rather than a Saved pill
                and a cog beside it. The cog was the weaker half: a gear is
                what every other site puts configuration behind, so it read
                as settings-in-general rather than as her account. */}
            {account ? (
              <div className="hidden lg:block">
                <AccountMenu savedCount={saved.length} />
              </div>
            ) : null}

            {/* Always now, because there are always two places to go. It used
                to appear only once she had saved something, back when the
                panel would otherwise have opened onto nothing. */}
            <MobileNav label="menu">
              {PLACES.map((place) => (
                <Link key={place.href} href={place.href} className={PANEL_ROW}>
                  {place.label}
                </Link>
              ))}
              {/* Both when she is signed in, so the panel lists what the
                  account menu lists. Saved used to appear only once there
                  was something in it, which meant the way back to an empty
                  list was through a page she had no route to. */}
              {account ? <SavedLink count={saved.length} /> : null}
              {account ? <SettingsLink /> : null}
            </MobileNav>

            <LanguageMenu current={locale.code} />
          </div>
        </div>
      </div>
    </header>
  );
}
