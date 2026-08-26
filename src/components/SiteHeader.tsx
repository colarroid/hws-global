import Link from "next/link";
import { Bookmark, Settings } from "lucide-react";
import { MobileNav } from "@/components/ui/MobileNav";
import { getSavedIds } from "@/lib/saved";
import { getAccount } from "@/lib/data/account";

/**
 * Shared by the desktop row and the mobile panel, so the two cannot drift.
 */
function SavedLink({ count }: { count: number }) {
  return (
    <Link
      href="/saved"
      className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ring bg-surface px-4 py-[9px] text-[15px] font-semibold text-ink no-underline transition-colors duration-150 ease-out hover:border-gold-500"
    >
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

function SettingsLink({ withLabel = false }: { withLabel?: boolean }) {
  return (
    <Link
      href="/settings"
      aria-label={withLabel ? undefined : "Reminders and account settings"}
      className={
        withLabel
          ? "inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ring bg-surface px-4 py-[9px] text-[15px] font-semibold text-ink no-underline transition-colors duration-150 ease-out hover:border-gold-500"
          : "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-ring bg-surface text-ink no-underline transition-colors duration-150 ease-out hover:border-gold-500"
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
  const [saved, account] = await Promise.all([getSavedIds(), getAccount()]);

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
        <div className="flex w-full items-center justify-between gap-6 px-5 py-[18px] sm:px-8 lg:px-10">
          <Link
            href="/"
            className="text-[15px] font-bold uppercase tracking-[0.14em] text-ink no-underline"
          >
            Logo
          </Link>

          {hasControls ? (
            <>
              <div className="hidden items-center gap-2 lg:flex">
                {hasSaved ? <SavedLink count={saved.length} /> : null}
                {account ? <SettingsLink /> : null}
              </div>

              <MobileNav label="menu">
                {hasSaved ? <SavedLink count={saved.length} /> : null}
                {account ? <SettingsLink withLabel /> : null}
              </MobileNav>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}
