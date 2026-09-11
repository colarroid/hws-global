import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import organisationsFigure from "@/images/organisations-figure.webp";
import { Testimonials } from "@/components/Testimonials";
import { TESTIMONIALS } from "@/lib/design/testimonials";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Ban,
  Lock,
  MessageSquareText,
  Users,
} from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { getZonesWithCounts } from "@/lib/data/discover";
import { portalLink, portalUrl } from "@/lib/portal";

export const metadata: Metadata = pageMetadata({
  title: "For organisations",
  description:
    "List what you run on HWS Path Grid and reach the women it actually suits. Free, checked once, and nobody pays to appear.",
  path: "/for-organisations",
  indexable: true,
});

/**
 * The organisations page: the platform, explained to the people who run
 * things in it.
 *
 * It lived at /community and was called Community in the nav, which was the
 * wrong word twice over. On a platform for women, "Community" reads as other
 * women -- a forum, peer support, somewhere she is not alone -- and this is a
 * pitch to charities. The one person who must never be sent down a corridor
 * marked with somebody else's name is her.
 *
 * Everything else on this site is written to a woman. This is the one page
 * written to the people who run things, and the difference is what it has to
 * argue. She needs to be told what to do next; they need to be told why this
 * is worth their afternoon when they already have a website nobody finds.
 *
 * Three rules held throughout.
 *
 * No numbers. The obvious thing would be to open with how many organisations
 * and listings are on the platform, and every one of those figures is
 * currently demo data attributed to real organisations. Quoting them at
 * prospective partners is the one audience for whom being caught would cost
 * most. When the roster is real, the counts can come back.
 *
 * No promises about traffic. Nobody can honestly say how many women will
 * arrive, and an organisation that has been sold a number once will not
 * answer the second email. What can be promised is what is measured and what
 * it costs, so that is what this says.
 *
 * The obligations are on the page, not in the small print. Keeping a listing
 * current and being straight about who you cannot help are the two things
 * that make this work, and an organisation that will not do them is better
 * off knowing before it signs up than after.
 */
export default async function CommunityPage() {
  // The zones are real, unlike the counts. They describe the shape of the
  // platform rather than claiming a size.
  const zones = await getZonesWithCounts();

  const gains = [
    {
      icon: Users,
      title: "Women who were looking for what you do",
      body: "She describes her situation in her own words. We match it against who you are set up for, what you offer, where you work and what it costs. She arrives already knowing whether she qualifies.",
    },
    {
      icon: BarChart3,
      title: "Numbers you can take to a funder",
      body: "How many women were sent to your own site, how many read your organisation page, and how each thing you posted performed. Not a vanity figure: the first one counts people who clicked through to you.",
    },
    {
      icon: BadgeCheck,
      title: "Checked once, not per listing",
      body: "We verify you against a public register or your funder when you join. After that you post what you like, when you like, without waiting on us.",
    },
    {
      icon: Ban,
      title: "Fewer of the wrong enquiries",
      body: "You say who you cannot help, and we show it. Women rule themselves out before they contact you, which is time back for whoever answers your inbox.",
    },
  ];

  const steps = [
    {
      title: "Tell us who you are",
      body: "A few questions about what you do, who you serve and where. Ten minutes, and you can stop partway and come back.",
    },
    {
      title: "We check you",
      body: "Against a public register, or your funder. One check, done by a person.",
    },
    {
      title: "Post what is open",
      body: "A course, a grant, a drop-in, a mentoring scheme. Anything with a way in for a woman.",
    },
    {
      title: "She finds it when it fits",
      body: "Not because she searched your name. Because what she described matched what you run.",
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      {/* Dark, and full bleed, so the bar can float on it. The header is
          fixed over this page now, which is why the top padding is larger
          than it looks like it needs to be: it is clearing a 60px bar that
          is no longer taking up any room of its own. */}
      <section className="bg-ink px-5 pb-20 pt-28 sm:px-10 sm:pb-28 sm:pt-36">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-7">
          <span className="eyebrow text-gold-300">For organisations</span>

          <h1 className="m-0 max-w-[19ch] font-display text-[38px] font-normal leading-[1.03] tracking-[-0.02em] text-white sm:text-[68px]">
            The women you are for, without them having to find you
          </h1>

          {/* Set as the landing hero's paragraph is: 16px on a 512px measure
              at 1.5. They are the same sentence doing the same job to two
              different audiences and they were two different sizes. */}
          <p className="m-0 max-w-[512px] text-[16px] leading-[1.5] text-white/80">
            You already do the work. The problem is that a woman has to know
            your name to find your website. Here she describes her situation,
            and we put you in front of her because you are the right answer,
            not because she guessed.
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-4">
            <a
              href={portalLink("/sign-up")}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-surface px-8 py-[17px] text-[18px] font-bold text-ink no-underline transition-opacity duration-150 ease-out hover:opacity-90"
            >
              Meet the women
              <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
            </a>
            <a
              href={portalUrl()}
              className="inline-flex min-h-[44px] items-center gap-2 p-1 text-[16px] font-bold text-gold-300 no-underline"
            >
              I already have an account
            </a>
          </div>

          <p className="m-0 text-[15px] leading-[1.6] text-white/60">
            Free. No paid placement, no advertising, and nobody pays to appear
            higher.
          </p>
        </div>
      </section>

      {/* Off the dark band. The page now spends that contrast on the zones,
          the way the landing page does, and two dark bands on one page is a
          page that shouts twice. */}
      <section className="mx-auto w-full max-w-[1180px] border-t border-hairline px-5 py-24 sm:px-10 sm:py-32">
        <div className="flex w-full flex-col gap-12">
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-gold-700">What you get</span>
            <h2 className="m-0 max-w-[22ch] font-display text-[30px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[42px]">
              Reach, and a way to prove it
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-9 sm:grid-cols-2">
            {gains.map((gain) => (
              <div key={gain.title} className="flex flex-col gap-3">
                <gain.icon
                  size={22}
                  strokeWidth={1.75}
                  className="text-gold-700"
                  aria-hidden="true"
                />
                <span className="font-display text-[22px] font-normal leading-[1.2] text-ink">
                  {gain.title}
                </span>
                <p className="m-0 max-w-[46ch] text-[16px] leading-[1.5] text-ink-70">
                  {gain.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] border-t border-hairline px-5 py-24 sm:px-10 sm:py-32">
        <div className="flex flex-col gap-3">
          <span className="eyebrow text-gold-700">How it works</span>
          <h2 className="m-0 max-w-[24ch] font-display text-[30px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[42px]">
            Four steps, and one of them is ours
          </h2>
        </div>

        <ol className="m-0 mt-[62px] grid list-none grid-cols-1 gap-x-12 gap-y-9 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-2">
              {/* Numbered in the component, as the landing page's tree is, so
                  the word "One" never has to be translated. */}
              <span className="text-[16px] font-bold text-ink">
                {index + 1}. {step.title}
              </span>
              <p className="m-0 max-w-[38ch] text-[15px] leading-[1.6] text-ink-70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* The page's one dark band, on the same section as the landing
          page's, with the same chips: the ring lights and the fill sweeps in
          from the left over 600ms. The count comes off the eyebrow for the
          reason it came off there — glued to a translated phrase it was
          ungrammatical in three of the nine languages. */}
      <section className="bg-ink px-5 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex flex-col gap-3">
          <span className="eyebrow text-gold-300">Access Zones</span>
          <h2 className="m-0 max-w-[26ch] font-display text-[30px] font-normal leading-[1.1] tracking-[-0.01em] text-white sm:text-[42px]">
            Where you would sit
          </h2>
          <p className="m-0 max-w-[512px] text-[16px] leading-[1.5] text-white/80">
            You pick your own, one main and up to two others. Most women need
            more than one at a time and most services only do one, which is the
            gap this exists to close.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-[10px]">
          {zones.map((zone) => (
            <Link
              key={zone.id}
              href={`/discover/${zone.slug}`}
              className="zone-chip inline-flex min-h-[44px] items-center rounded-full px-[18px] py-[12px] text-[16px] font-semibold text-white no-underline"
            >
              {zone.name}
            </Link>
          ))}
        </div>
        </div>
      </section>

      {/* The three promises and the quotes, as the landing page carries
          them, so an organisation reads the same undertakings a woman does
          rather than a version written for it.

          Worth knowing that they are in her voice, not theirs: "you do not
          need an account to search" is addressed to her. On this page that
          is the point — it is what an organisation is being told the women
          get — but it does mean the middle promise reads slightly oddly to
          somebody who is here to list a service.

          Written out rather than read from the trust.* keys for the same
          reason as the card below: this page is hardcoded English, and one
          translated block inside it would change language on its own. */}
      <section className="mx-auto w-full max-w-[1180px] px-5 py-24 sm:px-10 sm:py-32">
        {/* Three up from 768 rather than 640. At 640 the container is 600
            wide and three columns with a 48px gap are 168px each, which is
            about 21 characters a line for a paragraph of 180: a ribbon, not a
            column. Below that breakpoint one column runs 75 to 90 characters,
            which is long but readable, and that is the better of the two
            failures. */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-x-12">
          {[
            {
              icon: BadgeCheck,
              title: "Verified content",
              body: "Every organisation here has been verified against a public register or its funder before it could post anything. Each listing carries the date it was last confirmed.",
            },
            {
              icon: Lock,
              title: "Information is private",
              body: "You do not need an account to search, read or apply. What you type is used to rank your results and is not sold, passed on, or used to build a profile of you.",
            },
            {
              icon: MessageSquareText,
              title: "No sponsored content",
              body: "There is no paid placement and no advertising. Results are ordered by how well they fit what you told us, and every listing says why it matched.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
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

        {/* Renders nothing while the array is empty, which is how this ships
            the day the placeholder quotes come out and the real ones are not
            ready yet. */}
        <Testimonials items={TESTIMONIALS} />
      </section>

      {/* The same closing card the landing page ends on, so an organisation
          that arrives here from there is asked in the same words and by the
          same object rather than by a dark panel that appears nowhere else.

          The copy is written out rather than read from the orgs.* keys the
          landing page uses. This page is hardcoded English throughout, and
          one translated block inside it would switch language on its own
          when somebody chose Polish. If this page is ever translated, these
          three strings should become those keys. */}
      <section className="mx-auto w-full max-w-[1180px] px-5 pb-24 sm:px-10">
        <div className="mx-auto flex max-w-[880px] flex-col gap-5 overflow-hidden rounded-card bg-surface p-8 shadow-hairline sm:flex-row sm:items-stretch sm:justify-between sm:gap-10 sm:p-10">
          <div className="flex flex-col items-start justify-center gap-3">
            <h2 className="m-0 max-w-[22ch] font-display text-[26px] font-normal leading-[1.15] sm:text-[32px]">
              Do you run something women should know about?
            </h2>
            <p className="m-0 max-w-[512px] text-[16px] leading-[1.5] text-ink-70">
              List it here and it reaches the women it actually suits, rather
              than whoever happens to find your website. Free, and we check you
              once rather than checking every listing.
            </p>

            <a
              href={portalLink("/sign-up")}
              className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-8 py-[17px] text-[17px] font-bold text-white no-underline transition-opacity duration-150 ease-out hover:opacity-90"
            >
              Meet the women
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          {/* Decorative, so alt is empty, and hidden on a phone: it is the
              last block on a long page and it is ornament. */}
          <Image
            src={organisationsFigure}
            alt=""
            sizes="(min-width: 1024px) 215px, 160px"
            className="-mb-8 hidden h-auto w-[160px] shrink-0 self-end sm:-mb-10 sm:block lg:w-[215px]"
          />
        </div>
      </section>
    </div>
  );
}
