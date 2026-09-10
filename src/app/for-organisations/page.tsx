import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Ban,
  Compass,
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
      {/* The hero, in the landing page's language rather than its own:
          the headline at a 1.3 line-height instead of a tight 1.03, a short
          sans paragraph on a 512px measure, and the two ways in as a ruled
          question over two equal cards.

          No photograph behind it, per HWS. The landing hero was built to
          hold on the cream before the picture arrived, so the same structure
          works here unchanged — the type stays ink and the cards keep the
          platform's own surface and hairline instead of frosted glass, which
          only reads as glass over an image. */}
      <section className="mx-auto w-full max-w-[1180px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="flex max-w-[576px] flex-col gap-6">
          <span className="eyebrow text-gold-700">For organisations</span>

          <h1 className="m-0 font-display text-[38px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[60px] sm:leading-[1.3]">
            The women you are for, without them having to find you
          </h1>

          <p className="m-0 max-w-[512px] text-[16px] leading-[1.5] text-ink-70">
            You already do the work. The problem is that a woman has to know
            your name to find your website. Here she describes her situation,
            and we put you in front of her because you are the right answer,
            not because she guessed.
          </p>

          <div className="mt-2 flex items-center gap-4">
            <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
            <span className="font-display text-[16px] font-normal italic text-ink-70">
              Where would you like to begin?
            </span>
            <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
            <a
              href={portalLink("/sign-up")}
              className="flex min-h-[52px] items-center justify-center rounded-card bg-surface px-4 py-3 text-center font-display text-[20px] font-normal leading-[1.33] text-ink no-underline shadow-hairline transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-[1px] hover:shadow-hairline-gold sm:min-h-[64px] sm:px-5 sm:py-4 sm:text-[22px]"
            >
              Meet the women
            </a>
            <a
              href={portalUrl()}
              className="flex min-h-[52px] items-center justify-center rounded-card bg-surface px-4 py-3 text-center font-display text-[20px] font-normal leading-[1.33] text-ink no-underline shadow-hairline transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-[1px] hover:shadow-hairline-gold sm:min-h-[64px] sm:px-5 sm:py-4 sm:text-[22px]"
            >
              I already have an account
            </a>
          </div>

          <p className="m-0 text-[15px] leading-[1.6] text-ink-60">
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

      <section className="mx-auto w-full max-w-[1180px] px-5 pb-32 sm:px-10">
        <div className="mx-auto flex max-w-[880px] flex-col items-start gap-5 rounded-card bg-ink p-8 text-white sm:p-11">
          <h2 className="m-0 max-w-[22ch] font-display text-[26px] font-normal leading-[1.15] sm:text-[34px]">
            Do you run something women should know about?
          </h2>
          <p className="m-0 max-w-[512px] text-[16px] leading-[1.5] text-white/75">
            Ten minutes to sign up, one check by a person, and then it reaches
            the women it actually suits rather than whoever happens to find
            your website.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={portalLink("/sign-up")}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-surface px-7 py-[15px] text-[17px] font-bold text-ink no-underline"
            >
              Meet the women
              <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
            </a>
            <Link
              href="/discover"
              className="inline-flex min-h-[44px] items-center gap-2 p-1 text-[16px] font-bold text-gold-300 no-underline"
            >
              <Compass size={17} strokeWidth={2} aria-hidden="true" />
              See who is already listed
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
