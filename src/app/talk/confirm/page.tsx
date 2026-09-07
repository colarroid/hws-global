import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { BookingForm } from "@/components/find/BookingForm";
import { pageMetadata } from "@/lib/seo";
import { isSlotFree } from "@/lib/data/booking";
import { getAccount } from "@/lib/data/account";

export const metadata: Metadata = pageMetadata({
  title: "Confirm your call",
  description: "The last step before your call is booked.",
  path: "/talk/confirm",
});

const WHEN = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/London",
});

/**
 * The last step: who to call, and how.
 *
 * The slot is re-checked here rather than trusted from the link. She may have
 * had this page open for twenty minutes, or come back to it tomorrow from her
 * history, and being told at the last moment that a time went is better than
 * being told after she has typed her name.
 *
 * Two fields are asked for and two are offered. A name and an email are the
 * least that makes a call possible; a phone number and a note are hers to
 * give or not. Nothing here is a profile, and there is no account at the end
 * of it.
 *
 * Signed in, the email is filled in already. It is the one thing we know and
 * asking for it again reads as not having noticed.
 */
export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{
    slot?: string;
    need?: string;
    place?: string;
    situations?: string;
  }>;
}) {
  const params = await searchParams;
  if (!params.slot) redirect("/talk");

  const free = await isSlotFree(params.slot);
  if (!free) redirect("/talk?gone=1");

  const account = await getAccount().catch(() => null);
  const back = new URLSearchParams(
    Object.entries({
      need: params.need ?? "",
      place: params.place ?? "",
      situations: params.situations ?? "",
    }).filter(([, v]) => v) as [string, string][],
  );

  return (
    <Page width={520} top={56} gap={26}>
      <Link
        href={`/talk?${back}`}
        className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        Pick a different time
      </Link>

      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[28px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[36px] sm:leading-[1.1]">
          Confirm your call
        </h1>
        <p className="m-0 flex items-center gap-2 text-[18px] leading-[1.6] text-ink">
          <CalendarDays
            size={19}
            strokeWidth={2}
            className="shrink-0 text-gold-700"
            aria-hidden="true"
          />
          <strong className="font-semibold">
            {WHEN.format(new Date(params.slot))}
          </strong>
        </p>
      </div>

      <BookingForm
        slot={params.slot}
        need={params.need ?? ""}
        place={params.place ?? ""}
        situations={params.situations ?? ""}
        email={account?.email ?? ""}
      />

      <p className="m-0 border-t border-hairline pt-5 text-[14px] leading-[1.6] text-ink-60">
        We use your name and email to make the call and nothing else. No
        account is created, and this is not added to any list.
      </p>
    </Page>
  );
}
