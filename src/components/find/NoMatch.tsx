import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { TalkToSomeone } from "@/components/find/TalkToSomeone";
import type { Answers } from "@/lib/search/rank";

/**
 * Screen 8. Nothing matched.
 *
 * The highest-risk screen in the product. If it reads as failure she will not
 * come back, and she will tell other women it does not work. So: never the
 * words "no results", never a full stop, and every route out has a real count
 * behind it rather than a hopeful suggestion.
 *
 * The counts arrive already computed. Offering a widening that turns out to
 * be empty is just a second dead end.
 */
export function NoMatch({
  answers,
  widenCount,
  onlineCount,
  bookingHref,
}: {
  answers: Answers;
  widenCount: number;
  onlineCount: number;
  /** Null until NEXT_PUBLIC_BOOKING_URL is set, and then it is the contact page. */
  bookingHref: string | null;
}) {
  const base = {
    need: answers.need,
    place: answers.place,
    situations: answers.situations.join(","),
  };

  const widenHref = `/results?${new URLSearchParams({ ...base, scope: "all-scotland" })}`;
  const onlineHref = `/results?${new URLSearchParams({ ...base, scope: "online" })}`;

  const others = [
    onlineCount > 0 && {
      title: "Online support only",
      note: `${onlineCount} ${onlineCount === 1 ? "service works" : "services work"} by phone or online, wherever you are.`,
      href: onlineHref,
    },
    {
      title: "Change what you asked for",
      note: "Different words sometimes find different things. It is worth one more try.",
      href: `/find?need=${encodeURIComponent(answers.need)}`,
    },
    {
      title: "Start again",
      note: "Clear everything and begin from the first question.",
      href: "/find",
    },
  ].filter((o): o is { title: string; note: string; href: string } => Boolean(o));

  return (
    <Page width={720} top={56} gap={28}>
      <Link
        href={`/find?need=${encodeURIComponent(answers.need)}`}
        className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        Change answers
      </Link>

      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[42px] sm:leading-[1.1]">
          We couldn&apos;t find anything for you right now
        </h1>
        <p className="m-0 max-w-[54ch] text-[18px] leading-[1.6] text-ink-70">
          That doesn&apos;t mean there&apos;s no help. It means we don&apos;t
          have something that fits what you asked for today.
        </p>
      </div>

      {/*
        Where this sits is the whole judgement.

        When there is somewhere to widen to, that goes first: a real count of
        real things she can open now beats a conversation on Thursday, and
        this screen has always led with a number rather than a hopeful
        suggestion. When there is nothing to widen to, there is nothing to
        lead with, and a person is the honest answer rather than the
        consolation prize at the foot of the page.
      */}
      {widenCount === 0 ? <TalkToSomeone bookingHref={bookingHref} /> : null}

      {widenCount > 0 ? (
        <div className="flex flex-col items-start gap-3 rounded-card shadow-hairline-ink p-6">
          <span className="eyebrow text-gold-700">
            Try this first
          </span>
          <span className="font-display text-[21px] font-normal leading-[1.3]">
            Widen to all of Scotland
          </span>
          <span className="text-[17px] leading-[1.6] text-ink-70">
            {widenCount} {widenCount === 1 ? "service supports" : "services support"}{" "}
            this
            {onlineCount > 0
              ? `, and ${onlineCount} of them work by phone or online`
              : ""}
            .
          </span>
          <Link
            href={widenHref}
            className="inline-flex min-h-[44px] items-center rounded-control bg-ink px-7 py-4 text-[17px] font-bold text-white no-underline"
          >
            Show me {widenCount === 1 ? "that one" : `those ${widenCount}`}
          </Link>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
        {others.map((option) => (
          <Link
            key={option.title}
            href={option.href}
            className="flex flex-col gap-2 rounded-card shadow-hairline bg-surface p-5 no-underline"
          >
            <span className="text-[17px] font-bold text-ink">{option.title}</span>
            <span className="text-[15px] leading-[1.5] text-ink-65">
              {option.note}
            </span>
          </Link>
        ))}
      </div>

      {/* Already shown above when there was nothing to widen to. */}
      {widenCount > 0 ? <TalkToSomeone bookingHref={bookingHref} /> : null}
    </Page>
  );
}
