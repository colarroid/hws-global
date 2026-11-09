import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { TalkToSomeone } from "@/components/find/TalkToSomeone";
import type { Answers } from "@/lib/search/rank";
import { getTranslator } from "@/lib/i18n";

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
export async function NoMatch({
  answers,
  widenCount,
  onlineCount,
}: {
  answers: Answers;
  widenCount: number;
  onlineCount: number;
}) {
  const { t, count } = await getTranslator();

  const base = {
    need: answers.need,
    place: answers.place,
    situations: answers.situations.join(","),
  };

  const widenHref = `/results?${new URLSearchParams({ ...base, scope: "all-scotland" })}`;
  const onlineHref = `/results?${new URLSearchParams({ ...base, scope: "online" })}`;

  const others = [
    onlineCount > 0 && {
      title: t("nomatch.onlineTitle"),
      note: count("count.servicesOnline", onlineCount),
      href: onlineHref,
    },
    {
      title: t("nomatch.changeTitle"),
      note: t("nomatch.changeNote"),
      href: `/find?need=${encodeURIComponent(answers.need)}`,
    },
    {
      title: t("nomatch.startTitle"),
      note: t("nomatch.startNote"),
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
        {t("flow.changeAnswers")}
      </Link>

      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[42px] sm:leading-[1.1]">
          {t("nomatch.title")}
        </h1>
        <p className="m-0 max-w-[54ch] text-[18px] leading-[1.6] text-ink-70">
          {t("nomatch.body")}
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
      {widenCount === 0 ? <TalkToSomeone answers={answers} /> : null}

      {widenCount > 0 ? (
        <div className="flex flex-col items-start gap-3 rounded-card shadow-hairline-ink p-6">
          <span className="eyebrow text-gold-700">{t("nomatch.tryFirst")}</span>
          <span className="font-display text-[21px] font-normal leading-[1.3]">
            {t("nomatch.widen")}
          </span>
          {/* Two sentences, in English too. It was one clause joined by a
              comma, and the half after the comma had to agree with the half
              before it — which no translator can do once the first half is
              a number whose form they do not control. */}
          <span className="text-[17px] leading-[1.6] text-ink-70">
            {count("count.servicesSupport", widenCount)}
            {onlineCount > 0 ? ` ${count("count.ofThoseOnline", onlineCount)}` : ""}
          </span>
          <Link
            href={widenHref}
            className="inline-flex min-h-[44px] items-center rounded-control bg-ink px-7 py-4 text-[17px] font-bold text-white no-underline"
          >
            {count("count.showThose", widenCount)}
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
      {widenCount > 0 ? <TalkToSomeone answers={answers} /> : null}
    </Page>
  );
}
