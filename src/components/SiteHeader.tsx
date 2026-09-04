import Image from "next/image";
import Link from "next/link";
import { Bookmark, Settings } from "lucide-react";
import { MobileNav } from "@/components/ui/MobileNav";
import { getSavedIds } from "@/lib/saved";
import { getAccount } from "@/lib/data/account";
import { LanguageMenu } from "@/components/LanguageMenu";
import { getLocale } from "@/lib/i18n";

/**
 * Shared by the desktop row and the mobile panel, so the two cannot drift.
 */
function SavedLink({
  count,
  inPanel = false,
}: {
  count: number;
  inPanel?: boolean;
}) {
  return (
    <Link href="/saved" className={inPanel ? PANEL_ROW : PILL}>
      <Bookmark
        size={17}
        strokeWidth={2}
        className="text-gold-500"
        fill="currentColor"
        aria-hidden="true"
      />
      <span>Saved</span>
      <span className="rounded-full bg-gold-200 px-2 py-[2px] text-[13px] font-bold text-gold-700">
        {count}
      </span>
    </Link>
  );
}

const PILL =
  "inline-flex min-h-[44px] items-center gap-2 rounded-full shadow-hairline bg-surface " +
  "px-4 py-[9px] text-[15px] font-semibold text-ink no-underline " +
  "transition-[color,background-color,box-shadow] duration-150 ease-out hover:shadow-hairline-gold";

/* In the panel the sheet is already a raised white surface, so a ringed
   white pill on it reads as flat. Rows there instead. */
const PANEL_ROW =
  "inline-flex w-full min-h-[44px] items-center gap-3 rounded-control px-3 py-[10px] " +
  "text-[15px] font-medium text-ink-70 no-underline " +
  "transition-[color,background-color] duration-150 ease-out hover:bg-gold-200/60 hover:text-ink";

function SettingsLink({ withLabel = false }: { withLabel?: boolean }) {
  return (
    <Link
      href="/settings"
      aria-label={withLabel ? undefined : "Reminders and account settings"}
      className={
        withLabel
          ? PANEL_ROW
          : "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full shadow-hairline bg-surface text-ink no-underline transition-[color,background-color,box-shadow] duration-150 ease-out hover:shadow-hairline-gold"
      }
    >
      <Settings size={17} strokeWidth={2} aria-hidden="true" />
      {/* In the panel there is room for words, so the icon stops carrying
          the whole meaning on its own. */}
      {withLabel ? <span>Reminders and settings</span> : null}
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

  const hasSaved = saved.length > 0;
  const hasControls = hasSaved || Boolean(account);

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
          <div className="flex items-center gap-2">
            {hasControls ? (
              <>
                <div className="hidden items-center gap-2 lg:flex">
                  {hasSaved ? <SavedLink count={saved.length} /> : null}
                  {account ? <SettingsLink /> : null}
                </div>

                <MobileNav label="menu">
                  {hasSaved ? <SavedLink count={saved.length} inPanel /> : null}
                  {account ? <SettingsLink withLabel /> : null}
                </MobileNav>
              </>
            ) : null}

            <LanguageMenu current={locale.code} />
          </div>
        </div>
      </div>
    </header>
  );
}
