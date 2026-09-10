import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/ui/MobileNav";
import { HeaderShell } from "@/components/HeaderShell";
import { AccountMenu } from "@/components/AccountMenu";
import { getSavedIds } from "@/lib/saved";
import { signOut } from "@/app/account/actions";
import { getAccount } from "@/lib/data/account";
import { LanguageMenu } from "@/components/LanguageMenu";
import { LanguageRows } from "@/components/LanguageRows";
import { getLocale } from "@/lib/i18n";

/**
 * Saved, as a row in the phone panel.
 *
 * The panel is the phone's version of the account menu, so it carries the
 * same rows in the same order: Saved, Settings, then sign out under a rule.
 * It used to have a pill variant for the desktop row as well; that row is
 * now one control, so the pill has gone with it rather than staying as a
 * branch nothing takes.
 */
function SavedLink({ count }: { count: number }) {
  return (
    <Link href="/saved" className={PANEL_ROW}>
      <span className="flex-1">Saved</span>
      {count > 0 ? (
        <span className="rounded-full bg-gold-200 px-[10px] py-[3px] text-[15px] font-bold tabular-nums text-gold-700">
          {count}
        </span>
      ) : null}
    </Link>
  );
}

/** The places in the header, written once for the row and the phone panel. */
const PLACES = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/for-organisations", label: "For organisations" },
  { href: "/faq", label: "FAQ" },
];

/*
 * The sheet's rows, in the style HWS pointed at: set large, ruled off from
 * each other, and tall enough to hit without aiming. Sans rather than the
 * display face, because a navigation list is a set of controls and not a
 * piece of writing, however big the type is.
 *
 * The rule is on the bottom of every row, so the list reads as one ruled
 * block rather than as rows that each own an edge.
 */
const PANEL_ROW =
  "flex w-full min-h-[62px] items-center gap-3 border-b border-hairline " +
  "text-[26px] font-normal leading-[1.15] tracking-[-0.015em] text-ink no-underline " +
  "transition-colors duration-150 ease-out active:text-gold-700";

/** The two things to do, at the foot where her thumb already is. */
const SHEET_BUTTON =
  "flex min-h-[52px] w-full items-center justify-center rounded-control " +
  "text-[16px] font-bold no-underline transition-opacity duration-150 ease-out";

/** Settings, as a row in the phone panel. In words: there is room for them. */
function SettingsLink() {
  return (
    <Link href="/settings" className={PANEL_ROW}>
      <span className="flex-1">Reminders and settings</span>
    </Link>
  );
}

/**
 * Sign out, as the sheet's quiet button rather than a row.
 *
 * A form rather than a link, because it does something. Down with the
 * buttons for the same reason it was ruled off in the list: it is the one
 * control here that does not take her somewhere, and a woman reaching for
 * Settings should not be able to land on it by a thumb's width.
 */
function SignOutButton() {
  return (
    <form action={signOut} className="w-full">
      <button
        type="submit"
        className={`${SHEET_BUTTON} cursor-pointer border-0 bg-transparent text-ink shadow-hairline`}
      >
        Sign out
      </button>
    </form>
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
    <HeaderShell>
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
              {/* Both when she is signed in, so the sheet lists what the
                  account menu lists. Saved used to appear only once there
                  was something in it, which meant the way back to an empty
                  list was through a page she had no route to. */}
              {account ? <SavedLink count={saved.length} /> : null}
              {account ? <SettingsLink /> : null}

              {/* The two things to do, under the list. Searching is the
                  filled one on every screen of this platform and this is no
                  exception; the quiet one is whichever half of the account
                  she is on. */}
              <div className="flex flex-col gap-3 pt-7">
                <Link
                  href="/find"
                  className={`${SHEET_BUTTON} bg-ink text-white`}
                >
                  Find your next step
                </Link>
                {account ? (
                  <SignOutButton />
                ) : (
                  <Link
                    href="/account"
                    className={`${SHEET_BUTTON} bg-transparent text-ink shadow-hairline`}
                  >
                    Sign in
                  </Link>
                )}
              </div>

              {/* Last, under a rule: it is the one group here that is not a
                  place to go and not a thing to do. */}
              <LanguageRows current={locale.code} />
            </MobileNav>

            {/* The bar keeps a language control only where there is no panel
                to put it in. Below lg it lives inside the list, so the phone
                header is a mark and one button. */}
            <div className="hidden lg:block">
              <LanguageMenu current={locale.code} />
            </div>
          </div>
        </div>
      </div>
    </HeaderShell>
  );
}
