import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { Page } from "@/components/ui/Page";
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
}: {
  answers: Answers;
  widenCount: number;
  onlineCount: number;
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
        <h1 className="m-0 font-display text-[30px] font-medium leading-[1.15] tracking-[-0.01em] sm:text-[42px] sm:leading-[1.1]">
          We haven&apos;t found a close match yet
        </h1>
        <p className="m-0 text-[18px] leading-[1.6] text-ink-70">
          That doesn&apos;t mean there&apos;s no help. It means we don&apos;t
          have something that fits your search right now. Here&apos;s what
          we&apos;d try next.
        </p>
      </div>

      {widenCount > 0 ? (
        <div className="flex flex-col items-start gap-3 rounded-card border-2 border-ink p-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-700">
            Try this first
          </span>
          <span className="text-[21px] font-bold leading-[1.3]">
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
            className="flex flex-col gap-2 rounded-card border border-ring bg-surface p-5 no-underline"
          >
            <span className="text-[17px] font-bold text-ink">{option.title}</span>
            <span className="text-[15px] leading-[1.5] text-ink-65">
              {option.note}
            </span>
          </Link>
        ))}
      </div>

      {/* Must reach a person, not another search. */}
      <div className="flex flex-col gap-3 rounded-card bg-ink p-6 text-white">
        <span className="text-[19px] font-bold">Rather talk to a person?</span>
        <p className="m-0 text-[16px] leading-[1.6] text-white/75">
          We can help with almost anything, and might know who else to ask.
        </p>
        <Link
          href="/help"
          className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-control bg-surface px-5 py-3 text-[16px] font-bold text-ink no-underline"
        >
          <Phone size={17} strokeWidth={2} aria-hidden="true" />
          Contact our support
        </Link>
        <span className="text-[14px] text-white/75">
          Free, by phone, Monday to Friday
        </span>
      </div>
    </Page>
  );
}
