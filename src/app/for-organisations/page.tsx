import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Ban,
  ClipboardCheck,
  Compass,
  MessageSquareText,
  Users,
} from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { getZonesWithCounts } from "@/lib/data/discover";

export const metadata: Metadata = pageMetadata({
  title: "For organisations",
  description:
    "List what you run on HWS Path Grid and reach the women it actually suits. Free, checked once, and nobody pays to appear.",
  path: "/for-organisations",
  indexable: true,
});

const portal = () =>
  process.env.ORG_PORTAL_URL ?? "https://organisation.hwspathgrid.com";

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
      <section className="px-5 pb-14 pt-16 sm:px-10 sm:pb-20 sm:pt-24">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-7">
          <span className="eyebrow text-gold-700">For organisations</span>

          <h1 className="m-0 max-w-[19ch] font-display text-[38px] font-normal leading-[1.03] tracking-[-0.02em] sm:text-[68px]">
            The women you are for, without them having to find you
          </h1>

          <p className="m-0 max-w-[60ch] text-[19px] leading-[1.6] text-ink-70 sm:text-[21px]">
            You already do the work. The problem is that a woman has to know
            your name to find your website. Here she describes her situation,
            and we put you in front of her because you are the right answer,
            not because she guessed.
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-4">
            <a
              href={`${portal()}/sign-up`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-8 py-[17px] text-[18px] font-bold text-white no-underline"
            >
              List your support
              <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
            </a>
            <a
              href={portal()}
              className="inline-flex min-h-[44px] items-center gap-2 p-1 text-[16px] font-bold text-gold-700 no-underline"
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

      <section className="bg-ink px-5 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-gold-300">What you get</span>
            <h2 className="m-0 max-w-[22ch] font-display text-[30px] font-normal leading-[1.1] tracking-[-0.01em] text-white sm:text-[42px]">
              Reach, and a way to prove it
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-9 sm:grid-cols-2">
            {gains.map((gain) => (
              <div key={gain.title} className="flex flex-col gap-3">
                <gain.icon
                  size={22}
                  strokeWidth={1.75}
                  className="text-gold-300"
                  aria-hidden="true"
                />
                <span className="font-display text-[22px] font-normal leading-[1.2] text-white">
                  {gain.title}
                </span>
                <p className="m-0 max-w-[46ch] text-[17px] leading-[1.6] text-white/70">
                  {gain.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-10 sm:py-20">
        <div className="flex flex-col gap-3">
          <span className="eyebrow text-gold-700">How it works</span>
          <h2 className="m-0 max-w-[24ch] font-display text-[30px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[42px]">
            Four steps, and one of them is ours
          </h2>
        </div>

        <ol className="m-0 mt-10 grid list-none grid-cols-1 gap-x-10 gap-y-8 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3">
              <span className="eyebrow text-gold-700">
                {["One", "Two", "Three", "Four"][index]}
              </span>
              <span className="font-display text-[21px] font-normal leading-[1.2] text-ink">
                {step.title}
              </span>
              <p className="m-0 text-[16px] leading-[1.6] text-ink-70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 pb-16 sm:px-10 sm:pb-20">
        <div className="flex flex-col gap-3">
          <span className="eyebrow text-gold-700">
            Access Zones · {zones.length}
          </span>
          <h2 className="m-0 max-w-[26ch] font-display text-[28px] font-normal leading-[1.12] tracking-[-0.01em] sm:text-[36px]">
            Where you would sit
          </h2>
          <p className="m-0 max-w-[62ch] text-[17px] leading-[1.6] text-ink-70">
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
              className="inline-flex min-h-[44px] items-center rounded-full bg-surface px-[18px] py-[12px] text-[16px] font-semibold text-ink no-underline shadow-hairline transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-[1px] hover:shadow-hairline-gold"
            >
              {zone.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Said before they sign up rather than after. An organisation that will
          not keep a listing current is one whose entry sends a woman to a
          closed door, and it is fairer to everybody to say so here. */}
      <section className="mx-auto w-full max-w-[1180px] px-5 pb-16 sm:px-10 sm:pb-20">
        <div className="flex flex-col gap-6 rounded-card bg-surface p-7 shadow-hairline sm:p-9">
          <div className="flex items-center gap-3">
            <ClipboardCheck
              size={22}
              strokeWidth={1.75}
              className="shrink-0 text-gold-700"
              aria-hidden="true"
            />
            <h2 className="m-0 font-display text-[24px] font-normal leading-[1.2] sm:text-[28px]">
              What we ask of you
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <span className="text-[17px] font-bold text-ink">
                Keep it current
              </span>
              <p className="m-0 max-w-[46ch] text-[16px] leading-[1.6] text-ink-70">
                Every listing carries the date it was last confirmed, and she
                can see it. We will email you when something needs a look. A
                listing nobody has confirmed in months ranks below one that has
                been.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[17px] font-bold text-ink">
                Be straight about who you cannot help
              </span>
              <p className="m-0 max-w-[46ch] text-[16px] leading-[1.6] text-ink-70">
                It is a field on your profile and it is shown plainly. It saves
                a woman an afternoon and saves you an enquiry you were only
                going to turn down.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 pb-24 sm:px-10">
        <div className="flex flex-col items-start gap-5 rounded-card bg-ink p-8 text-white sm:p-11">
          <h2 className="m-0 max-w-[22ch] font-display text-[26px] font-normal leading-[1.15] sm:text-[34px]">
            Do you run something women should know about?
          </h2>
          <p className="m-0 max-w-[56ch] text-[17px] leading-[1.6] text-white/75">
            Ten minutes to sign up, one check by a person, and then it reaches
            the women it actually suits rather than whoever happens to find
            your website.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`${portal()}/sign-up`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-surface px-7 py-[15px] text-[17px] font-bold text-ink no-underline"
            >
              List your support
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

          <p className="m-0 flex items-center gap-2 text-[15px] text-white/70">
            <MessageSquareText size={16} strokeWidth={2} aria-hidden="true" />
            Not sure it is for you?{" "}
            <Link href="/faq" className="font-bold text-white underline">
              The questions organisations ask
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
