import Link from "next/link";

/**
 * The invitation to search, for someone who landed here from a search engine
 * rather than from a search here.
 *
 * Most traffic arrives that way. The handoff is blunt about the consequence:
 * if the invitation sits below the fold, the platform is a directory to
 * everyone who finds it through Google. So this is a slim strip directly
 * under the header, above everything else on the page.
 */
export function ColdArrivalBar() {
  return (
    <div className="border-b border-gold-300 bg-gold-200">
      <div className="mx-auto flex max-w-[720px] flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-10">
        <span className="text-[15px] leading-[1.5] text-gold-700">
          Looking for something else? Tell us what you need in your own words.
        </span>
        <Link
          href="/find"
          className="inline-flex min-h-[44px] items-center rounded-control bg-ink px-5 py-[10px] text-[15px] font-bold text-white no-underline"
        >
          Find solution
        </Link>
      </div>
    </div>
  );
}

/**
 * The fuller invitation, at the end of the page.
 *
 * She has read the whole thing by this point, so this one can say what the
 * search actually does rather than just naming it.
 */
export function ColdArrivalPanel() {
  return (
    <div className="flex flex-col items-start gap-3 rounded-card-lg shadow-hairline bg-surface p-7">
      <h2 className="m-0 font-display text-[26px] font-normal leading-[1.2]">
        Not quite what you needed?
      </h2>
      <p className="m-0 max-w-[62ch] text-[17px] leading-[1.6] text-ink-70">
        Answer three short questions and we will show you a few next steps that
        fit your situation, with a reason attached to each. No account needed.
      </p>
      <Link
        href="/find"
        className="inline-flex min-h-[44px] items-center rounded-control bg-ink px-7 py-4 text-[17px] font-bold text-white no-underline"
      >
        Find solution
      </Link>
    </div>
  );
}
