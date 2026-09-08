import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { getService } from "@/lib/data/service";

export const metadata: Metadata = pageMetadata({
  title: "Talk to a person",
  description:
    "If you cannot find what you need, or something here looks wrong, tell us. We would rather hear from you than have you give up on it.",
  path: "/help",
  indexable: true,
});

/**
 * Contact our support, and the "something wrong?" reporting loop.
 *
 * Reached from three places: the no-match screen, a closed listing, and the
 * report link on every service page. All three are moments where the
 * platform has run out of things it can do on its own, so this page has to
 * reach a person rather than another search.
 *
 * The red 999 panel that used to head the page has gone, at HWS's request.
 * What it was doing has not: the brief is explicit that the platform must
 * distinguish navigation from crisis support and must never imply HWS is
 * monitoring anyone, so that statement now sits in plain text under "What we
 * cannot do". It matters more here than it did, not less — the page offers a
 * booked call rather than a phone number, and "talk to somebody" would
 * otherwise read as somebody being there now.
 */
export default async function HelpPage({
  searchParams,
}: {
  searchParams: Promise<{ about?: string }>;
}) {
  const { about } = await searchParams;
  const service = about ? await getService(about) : null;

  return (
    <Page width={660} top={56} gap={26}>
      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[42px] sm:leading-[1.1]">
          Talk to a person
        </h1>
        <p className="m-0 max-w-[62ch] text-[18px] leading-[1.6] text-ink-70">
          If you cannot find what you need, or something here looks wrong, we
          would rather hear from you than have you give up on it.
        </p>
      </div>

      {service ? (
        <div className="flex flex-col gap-2 rounded-card shadow-hairline bg-surface px-[22px] py-5">
          <span className="eyebrow text-ink-60">
            About this listing
          </span>
          <Link
            href={`/service/${service.id}`}
            className="font-display text-[19px] font-normal leading-[1.3] text-ink no-underline hover:underline"
          >
            {service.name}
          </Link>
          <p className="m-0 text-[16px] leading-[1.6] text-ink-70">
            Tell us what is out of date and we will check it with{" "}
            {service.organisationName}. Women spot a wrong date long before we
            do, and the date on that card is the whole reason it can be
            trusted.
          </p>
        </div>
      ) : null}

      {/* A time she can actually pick, instead of a number that was never
          filled in. "Phone number to be confirmed" is worse than nothing: it
          is the platform admitting, on the page somebody reaches when
          everything else has failed, that there is nobody at the end of it.
          The calendar is real, so this is real. */}
      <div className="flex flex-col items-start gap-3 rounded-card bg-ink p-6 text-white">
        <span className="font-display text-[19px] font-normal">
          Talk to somebody
        </span>
        <p className="m-0 max-w-[62ch] text-[16px] leading-[1.6] text-white/75">
          We can help with almost anything, and might know who else to ask. If
          what you need is not on the platform yet, telling us is how it gets
          there.
        </p>
        <Link
          href="/talk"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-control bg-surface px-5 py-3 text-[16px] font-bold text-ink no-underline"
        >
          <CalendarDays size={17} strokeWidth={2} aria-hidden="true" />
          Book an appointment
        </Link>
        <span className="text-[14px] text-white/75">
          Free. Pick a time that suits you and we will call.
        </span>
      </div>

      {/* Honesty about limits, in the place where it matters most. */}
      <div className="flex flex-col gap-2 border-t border-hairline pt-6">
        <span className="eyebrow text-ink-60">
          What we cannot do
        </span>
        <p className="m-0 max-w-[62ch] text-[16px] leading-[1.6] text-ink-70">
          We cannot decide whether you qualify for anything, and we do not
          apply on your behalf. Each organisation decides that themselves. What
          we can do is help you work out where to go next.
        </p>
        {/* Kept, and moved here in plain text rather than left as the red
            panel above. It is a different thing from a warning: the page now
            offers a booked call rather than a number, so saying that nobody
            is sitting here waiting is what stops "talk to somebody" reading
            as "somebody is listening now". */}
        <p className="m-0 max-w-[62ch] text-[16px] leading-[1.6] text-ink-70">
          We are not an emergency service and nobody is monitoring this page.
          An appointment is a time we call you, not somebody waiting at the
          other end of it.
        </p>
      </div>

      <Link
        href="/find"
        className="self-start p-1 text-[16px] font-bold text-gold-700 no-underline"
      >
        Back to search
      </Link>
    </Page>
  );
}
