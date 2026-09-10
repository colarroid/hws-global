import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Compass,
  Lock,
  MessageSquareText,
} from "lucide-react";
import { getTranslator } from "@/lib/i18n";
import { getPlatformCounts, getZonesWithCounts } from "@/lib/data/discover";
import { portalUrl } from "@/lib/portal";

export const metadata: Metadata = pageMetadata({
  title: "Find support for women in Scotland",
  description:
    "Tell us what you need in your own words and we will show you a few next steps worth taking. Every organisation is checked. No account needed.",
  path: "/",
  indexable: true,
});

/**
 * The landing page.
 *
 * It was one line and a button, and the reasoning behind that still holds:
 * most traffic arrives from a search engine, and the handoff is blunt that if
 * the invitation to search sits below the fold, the platform is a directory
 * to everyone who finds it through Google. So the invitation is still the
 * first thing, still above the fold, and still the largest thing on screen.
 *
 * What has changed is that there is now something behind it worth describing.
 * Everything under the hero answers questions somebody asks before trusting a
 * site with a sentence about their own life: who is behind this, how were
 * these chosen, what happens to what I type, and is anybody paying to be here.
 *
 * The figures are counted, not written. A number in a heading that somebody
 * typed is wrong within a month, and on a page whose whole argument is "we
 * checked" that is the worst thing to be wrong about.
 */
export default async function Landing() {
  const [counts, zones, translation] = await Promise.all([
    getPlatformCounts(),
    getZonesWithCounts(),
    getTranslator(),
  ]);
  const { t } = translation;

  return (
    <div className="flex flex-1 flex-col">
      {/* The hero, rebuilt to the structure HWS pointed at: a left-aligned
          column, a serif headline at a 1.3 line-height rather than the tight
          1.03 it had, a short sans paragraph on a narrower measure, then a
          ruled label introducing two equal cards.

          The two cards replace a filled button beside a quiet text link. That
          pairing said one of these is the real route and the other is for
          people who could not manage it, which was never true — browsing is
          for the woman who cannot yet name what she needs, and that is not a
          lesser way in. Two cards of the same size say so.

          What the ruled label does is ask her a question before she has to
          pick, which is worth more here than a heading would be. The rules
          either side are what stop it reading as a third button.

          No background image: HWS asked for the structure without it, and the
          photograph is what made the original's text white. On the cream the
          type goes back to ink, and the cards become the platform's own card —
          surface, 12px, hairline ring — rather than the frosted glass that
          only works over a photo. */}
      <section className="px-5 pb-16 pt-20 sm:px-10 sm:pb-24 sm:pt-28">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="flex max-w-[576px] flex-col gap-6">
            <h1 className="m-0 font-display text-[38px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[60px] sm:leading-[1.3]">
              {t("hero.title")}
            </h1>

            <p className="m-0 max-w-[512px] text-[16px] leading-[1.5] text-ink-70">
              {t("hero.body")}
            </p>

            {/* Asked, rather than announced. The rules either side are what
                keep it a label and not a third thing to press. */}
            <div className="mt-2 flex items-center gap-4">
              <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
              <span className="font-display text-[16px] font-normal italic text-ink-70">
                {t("hero.begin")}
              </span>
              <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
            </div>

            {/* 256 + 40 + 256 is the original's measure, kept. They stack
                below that, because two cards of half the width would be two
                cards nobody can read the label of. */}
            <div className="grid grid-cols-1 gap-[40px] sm:grid-cols-2">
              {[
                { href: "/find", label: t("hero.beginFind") },
                { href: "/discover", label: t("hero.beginBrowse") },
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="flex min-h-[128px] items-center justify-center rounded-card bg-surface p-8 text-center font-display text-[24px] font-normal leading-[1.33] text-ink no-underline shadow-hairline transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-[1px] hover:shadow-hairline-gold"
                >
                  {card.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Positioning, and the only part of this page written at an objection
          rather than at a question.

          The objection is "why would she not just ask a chatbot", and it is
          a fair one: a general model will happily describe every fund in
          Scotland. What it cannot do is know that one closed in March. That
          is the whole difference and it is worth stating plainly, so this
          says it without naming a competitor — putting the alternative in
          her head on our own front page argues for it.

          The second paragraph is Ifeyinwa's, near enough verbatim: any woman
          at any life stage, and she does not have to arrive knowing the name
          of her own problem. It reads as reassurance. It is also the
          product: the three questions exist to turn a sentence into
          something that can be searched, which is the one thing a woman who
          cannot name her situation cannot do for herself. */}
      <section className="mx-auto w-full max-w-[1180px] border-t border-hairline px-5 py-16 sm:px-10 sm:py-20">
        <div className="flex flex-col gap-3">
          <span className="eyebrow text-gold-700">{t("why.eyebrow")}</span>
          <h2 className="m-0 max-w-[26ch] font-display text-[30px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[42px]">
            {t("why.title")}
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2">
          <p className="m-0 max-w-[52ch] text-[18px] leading-[1.6] text-ink-70">
            {t("why.body")}
          </p>
          <p className="m-0 max-w-[52ch] text-[18px] leading-[1.6] text-ink-70">
            {t("why.audience")}
          </p>
        </div>
      </section>

      {/* The five things a match is made on. This is the platform's actual
          argument, so it gets the one dark band on the page. */}
      <section className="bg-ink px-5 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-gold-300">{t("how.eyebrow")}</span>
            <h2 className="m-0 max-w-[22ch] font-display text-[30px] font-normal leading-[1.1] tracking-[-0.01em] text-white sm:text-[42px]">
              {t("how.title")}
            </h2>
            <p className="m-0 max-w-[58ch] text-[18px] leading-[1.6] text-white/70">
              {t("how.body")}
            </p>
          </div>

          <ol className="m-0 grid list-none grid-cols-1 gap-x-10 gap-y-8 p-0 sm:grid-cols-3">
            {[
              { step: t("how.one"), title: t("how.oneTitle"), body: t("how.oneBody") },
              { step: t("how.two"), title: t("how.twoTitle"), body: t("how.twoBody") },
              {
                step: t("how.three"),
                title: t("how.threeTitle"),
                body: t("how.threeBody"),
              },
            ].map((item) => (
              <li key={item.step} className="flex flex-col gap-2">
                <span className="eyebrow text-gold-300">{item.step}</span>
                <span className="font-display text-[23px] font-normal leading-[1.2] text-white">
                  {item.title}
                </span>
                <span className="text-[16px] leading-[1.6] text-white/70">
                  {item.body}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-10 sm:py-20">
        <div className="flex flex-col gap-3">
          {/* The count sits in the eyebrow rather than in front of the
              heading's noun. Glued to the front of a translated phrase it
              was ungrammatical in three of the nine languages and could not
              be fixed by translating harder: Polish and Ukrainian change the
              noun's ending at five, Arabic changes it again at eleven, and
              the number here is live. Beside the label it agrees with
              nothing. */}
          <span className="eyebrow text-gold-700">
            {t("zones.eyebrow")} · {counts.zones}
          </span>
          <h2 className="m-0 max-w-[24ch] font-display text-[30px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[42px]">
            {t("zones.title")}
          </h2>
          <p className="m-0 max-w-[58ch] text-[18px] leading-[1.6] text-ink-70">
            {t("zones.body")}
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-[10px]">
          {zones.map((zone) => (
            <Link
              key={zone.id}
              href={`/discover/${zone.slug}`}
              className="inline-flex min-h-[44px] items-center rounded-full bg-surface px-[18px] py-[12px] text-[16px] font-semibold text-ink no-underline shadow-hairline transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-[1px] hover:shadow-hairline-gold"
            >
              {zone.name}
            </Link>
          ))}
        </div>

        <Link
          href="/discover"
          className="mt-8 inline-flex min-h-[44px] items-center gap-2 p-1 text-[17px] font-bold text-gold-700 no-underline"
        >
          <Compass size={18} strokeWidth={2} aria-hidden="true" />
          {t("zones.browse")}
          <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
        </Link>
      </section>

      {/* The questions somebody asks before typing a sentence about her own
          life into a website. Answering them is the whole job of this block. */}
      <section className="mx-auto w-full max-w-[1180px] px-5 pb-16 sm:px-10 sm:pb-20">
        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-3">
          {[
            {
              icon: BadgeCheck,
              title: t("trust.checkedTitle"),
              body: t("trust.checkedBody"),
            },
            {
              icon: Lock,
              title: t("trust.privateTitle"),
              body: t("trust.privateBody"),
            },
            {
              icon: MessageSquareText,
              title: t("trust.paidTitle"),
              body: t("trust.paidBody"),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-card bg-surface p-6 shadow-hairline"
            >
              <span className="flex text-gold-700">
                <item.icon size={22} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="font-display text-[21px] font-normal leading-[1.2]">
                {item.title}
              </span>
              <span className="text-[16px] leading-[1.6] text-ink-70">
                {item.body}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* The other audience. Kept to one block at the foot, because a woman
          looking for help should not have to scroll past a pitch to
          organisations to reach anything that is for her. */}
      <section className="mx-auto w-full max-w-[1180px] px-5 pb-24 sm:px-10">
        <div className="flex flex-col gap-5 rounded-card bg-surface p-8 shadow-hairline sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex flex-col gap-3">
            <span className="flex text-gold-700">
              <Building2 size={24} strokeWidth={2} aria-hidden="true" />
            </span>
            <h2 className="m-0 max-w-[22ch] font-display text-[26px] font-normal leading-[1.15] sm:text-[32px]">
              {t("orgs.title")}
            </h2>
            <p className="m-0 max-w-[54ch] text-[17px] leading-[1.6] text-ink-70">
              {t("orgs.body")}
            </p>
          </div>

          <Link
            href={portalUrl()}
            className="inline-flex min-h-[44px] shrink-0 items-center gap-2 self-start rounded-full bg-ink px-8 py-[17px] text-[17px] font-bold text-white no-underline transition-opacity duration-150 ease-out hover:opacity-90 sm:self-auto"
          >
            {t("orgs.cta")}
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
