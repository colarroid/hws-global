import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Check } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Your call is booked",
  description: "What happens next.",
  path: "/talk/booked",
});

/**
 * Booked.
 *
 * The reference is here rather than only in the email, because the email may
 * take a minute and she is looking at this now. It is also the one thing she
 * can write on the back of an envelope.
 *
 * No time is shown. This page is reachable from a browser history days later
 * and a stale time read as current is worse than no time at all; the email is
 * the record, and it says so.
 *
 * The search is deliberately dropped here. She has told us what she needed
 * and somebody is calling about it, so carrying her words into a URL she may
 * leave open on a shared computer buys nothing.
 */
export default async function BookedPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  if (!ref) redirect("/talk");

  return (
    <Page width={560} top={72} gap={26}>
      <span className="flex size-[46px] items-center justify-center rounded-full bg-sage-200 text-green-700">
        <Check size={24} strokeWidth={2.5} aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[40px] sm:leading-[1.1]">
          That is booked
        </h1>
        <p className="m-0 text-[18px] leading-[1.6] text-ink-70">
          We have sent the time to your inbox, with a calendar file you can tap
          to add it to your phone. It can take a minute to arrive.
        </p>
      </div>

      <div className="flex flex-col gap-1 rounded-card bg-surface p-6 shadow-hairline">
        <span className="eyebrow text-ink-60">Your reference</span>
        <span className="font-display text-[32px] font-normal tracking-[0.12em] text-ink">
          {ref}
        </span>
      </div>

      <div className="flex flex-col gap-3 border-t border-hairline pt-6">
        <p className="m-0 max-w-[58ch] text-[17px] leading-[1.6] text-ink-70">
          There is nothing to prepare. Whoever calls will have read what you
          were looking for, so you will not have to start from the beginning.
        </p>
        <p className="m-0 max-w-[58ch] text-[17px] leading-[1.6] text-ink-70">
          If the time stops suiting you, reply to that email and we will move
          it.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/find"
          className="inline-flex min-h-[44px] items-center rounded-control bg-ink px-6 py-[14px] text-[16px] font-bold text-white no-underline"
        >
          Keep looking in the meantime
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center rounded-control bg-surface px-6 py-[14px] text-[16px] font-bold text-ink no-underline shadow-hairline"
        >
          Back to the start
        </Link>
      </div>
    </Page>
  );
}
