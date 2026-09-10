import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/images/hero-women.webp";
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

          The photograph came after the structure did, which is the right way
          round: the hero was built to hold on the cream first, so nothing on
          it depends on the image being there. Take the picture away and the
          only edits are the type going back to ink and the cards back to
          surface. That matters because a hero whose legibility rests on one
          file is a hero that breaks the day the file does. */}
      {/* svh, not vh: on a phone vh is the height with the browser chrome
          hidden, so a 100vh hero is taller than the screen it is on and the
          cards sit under the address bar until she scrolls. svh is the small
          viewport — the height she actually has with the toolbars showing —
          and dvh would resize the hero as they slide away, moving the cards
          under her thumb as she reaches for one.

          The header is out of flow above this, so the section already runs
          under it and there is nothing to subtract.

          The padding is smaller than it looks like it should be because it
          only ever bites on a short screen. Tall ones centre the column and
          never reach it; a 620px laptop window reaches it immediately, and
          at the old spacing the two cards were cut off by the bottom of the
          screen. The handoff is blunt that if the invitation to search is
          below the fold the platform is a directory, and a card you have to
          scroll to find is below the fold. */}
      <section className="relative isolate flex min-h-svh items-center overflow-hidden px-5 py-14 sm:px-10 sm:py-20">
        {/* Decorative, so alt is empty: the photograph carries no information
            the page depends on, and describing it to a screen reader would
            only put furniture between her and the headline.

            priority because this is the largest thing above the fold and
            therefore the LCP element; without it Next lazy-loads the hero and
            the page scores itself badly for the one image that matters. The
            21MB PNG is a 131KB WebP at 2560 wide, and Next derives AVIF and
            every smaller width from it per request, so a phone is served a
            fraction of that. */}
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          // The four of them stand right of centre with their faces in the
          // upper third. A wide viewport crops the frame vertically, so what
          // matters there is holding the faces above the crop; a phone crops
          // it horizontally instead, so it has to hold further right or the
          // hero becomes a photograph of an empty sofa.
          className="-z-20 object-cover object-[75%_38%] sm:object-[60%_34%]"
        />

        {/* One scrim, and which one depends on the shape of the screen. They
            are separate elements rather than one with responsive background
            utilities because two backgrounds on a single element resolve by
            stylesheet order in this codebase, not by the order written.

            Wide: the gradient runs left to right because the type does. It is
            heaviest where the words are and has cleared by the time it
            reaches her, so the photograph stays a photograph rather than a
            texture behind a scrim.

            Narrow: the text crosses the whole frame, so the shading has to be
            even. Stacking the horizontal gradient and a flat overlay was the
            first attempt and it came to 0.97 at the left edge, which is not a
            photograph at all — it is a black rectangle that costs 131KB. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,9,2,0.55)_0%,rgba(18,9,2,0.70)_100%)] sm:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 hidden bg-[linear-gradient(100deg,rgba(18,9,2,0.88)_0%,rgba(18,9,2,0.60)_32%,rgba(18,9,2,0.18)_54%,rgba(18,9,2,0)_74%)] sm:block"
        />

        {/* A flat layer over both gradients rather than steeper gradients.
            The gradients protect the words, which is a job that only applies
            where the words are; this one lowers the whole frame so the room
            sits behind the page instead of competing with it, and so the
            paragraph stays readable where it runs past the column and over
            the group. Same value at every width, so what changes between
            screens is only the shading that follows the text. */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/25" />

        <div className="mx-auto w-full max-w-[1180px]">
          <div className="flex max-w-[576px] flex-col gap-6">
            <h1 className="m-0 font-display text-[38px] font-normal leading-[1.15] tracking-[-0.01em] text-white sm:text-[60px] sm:leading-[1.3]">
              {t("hero.title")}
            </h1>

            <p className="m-0 max-w-[512px] text-[16px] leading-[1.5] text-white/80">
              {t("hero.body")}
            </p>

            {/* Asked, rather than announced. The rules either side are what
                keep it a label and not a third thing to press. */}
            <div className="mt-2 flex items-center gap-4">
              <span className="h-px flex-1 bg-white/25" aria-hidden="true" />
              <span className="font-display text-[16px] font-normal italic text-white/80">
                {t("hero.begin")}
              </span>
              <span className="h-px flex-1 bg-white/25" aria-hidden="true" />
            </div>

            {/* 256 + 40 + 256 is the original's measure, kept. They stack
                below that, because two cards of half the width would be two
                cards nobody can read the label of.

                Frosted glass, which is what the reference used and what was
                dropped when there was no photograph for it to sit on. It
                works here for the same reason it worked there: the blur keeps
                the ink legible over whatever part of the image lands behind
                it, without hiding the image. */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
              {[
                { href: "/find", label: t("hero.beginFind") },
                { href: "/discover", label: t("hero.beginBrowse") },
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="flex min-h-[52px] items-center justify-center rounded-card bg-white/75 px-4 py-3 sm:min-h-[64px] sm:px-5 sm:py-4 text-center font-display text-[20px] font-normal leading-[1.33] text-ink sm:text-[22px] no-underline shadow-[0_0_0_1px_rgba(255,255,255,0.9)] backdrop-blur-[4px] transition-[background-color,transform] duration-150 ease-out hover:-translate-y-[1px] hover:bg-white/90"
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

      {/* How it works, as a tree: one question splitting into the two people
          who ask it.

          The section used to be three steps in a row, and those three steps
          were hers. That made the organisation's side of the platform
          invisible on the page where an organisation is most likely to be
          deciding whether to bother — the two audiences are the whole shape
          of this thing, and a single column said there was one.

          The steps are numbered because they are a sequence, and they are
          numbered in the component rather than in nine catalogues, so nobody
          has to translate the word "One".

          The branches are set to run in parallel: her first step and their
          first step sit level, and the pair reads across as well as down.
          What that shows is that the checking happens on their side before
          anything reaches hers, which is the argument the whole platform
          rests on and is hard to make in a sentence. */}
      <section className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-10 sm:py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="eyebrow text-gold-700">{t("how.eyebrow")}</span>
          <h2 className="m-0 max-w-[24ch] font-display text-[30px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[38px]">
            {t("how.title")}
          </h2>
          <p className="m-0 max-w-[56ch] text-[17px] leading-[1.6] text-ink-70">
            {t("how.body")}
          </p>
        </div>

        {/* The fork. Drawn rather than decorated: a stem down from the
            heading, a bar spanning the two column centres, and a drop onto
            each. It is hidden below the breakpoint because there is nothing
            to fork into once the branches stack. */}
        <div className="mt-9 hidden sm:block" aria-hidden="true">
          <span className="mx-auto block h-8 w-px bg-ink/25" />
          <div className="relative mx-auto h-8 w-1/2">
            <span className="absolute inset-x-0 top-0 h-px bg-ink/25" />
            <span className="absolute left-0 top-0 h-8 w-px bg-ink/25" />
            <span className="absolute right-0 top-0 h-8 w-px bg-ink/25" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 sm:mt-0 sm:grid-cols-2 sm:gap-0">
          {[
            {
              key: "women",
              title: t("how.forWomen"),
              steps: [
                { title: t("how.oneTitle"), body: t("how.oneBody") },
                { title: t("how.twoTitle"), body: t("how.twoBody") },
                { title: t("how.threeTitle"), body: t("how.threeBody") },
              ],
            },
            {
              key: "organisations",
              title: t("how.forOrgs"),
              steps: [
                { title: t("how.orgOneTitle"), body: t("how.orgOneBody") },
                { title: t("how.orgTwoTitle"), body: t("how.orgTwoBody") },
                { title: t("how.orgThreeTitle"), body: t("how.orgThreeBody") },
              ],
            },
          ].map((branch, index) => (
            <div
              key={branch.key}
              className={`flex flex-col items-center gap-8 sm:px-8 ${
                // The rule between them is dashed and only drawn on the
                // second, so it is one line between two columns rather than
                // an edge on each.
                index === 1
                  ? "sm:border-l sm:border-dashed sm:border-ink/20"
                  : ""
              }`}
            >
              <h3 className="m-0 font-display text-[24px] font-normal leading-[1.2]">
                {branch.title}
              </h3>

              <ol className="m-0 flex list-none flex-col gap-9 p-0">
                {branch.steps.map((step, position) => (
                  <li
                    key={step.title}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <span className="text-[16px] font-bold text-ink">
                      {position + 1}. {step.title}
                    </span>
                    <p className="m-0 max-w-[38ch] text-[15px] leading-[1.6] text-ink-70">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
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
