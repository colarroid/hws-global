import Link from "next/link";
import { Bookmark } from "lucide-react";
import { getSavedIds } from "@/lib/saved";

/**
 * The woman-facing header.
 *
 * Deliberately almost nothing. There is no sign-in control here: the account
 * is the only ask in the whole flow, and it appears after she saves
 * something, never before. A sign-in prompt in the header would make the
 * no-login promise read as a bait and switch.
 *
 * The saved count only appears once there is something in it, so the header
 * stays empty for a woman who has just arrived.
 */
export async function SiteHeader() {
  const saved = await getSavedIds();

  return (
    <header className="border-b border-hairline bg-ground">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-6 px-5 py-[18px] sm:px-10">
        <Link
          href="/"
          className="text-[15px] font-bold uppercase tracking-[0.14em] text-ink no-underline"
        >
          Logo
        </Link>

        {saved.length > 0 ? (
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
              {saved.length}
            </span>
          </Link>
        ) : null}
      </div>
    </header>
  );
}
