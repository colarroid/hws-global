import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/images/hero-women.webp";
import organisationsFigure from "@/images/organisations-figure.webp";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  Lock,
  MessageSquareText,
} from "lucide-react";
import { getTranslator } from "@/lib/i18n";
import { getZonesWithCounts } from "@/lib/data/discover";
import { portalUrl } from "@/lib/portal";
import { SummitPhotos } from "@/components/SummitPhotos";
import { Testimonials } from "@/components/Testimonials";
import { TESTIMONIALS } from "@/lib/design/testimonials";

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
  const [zones, translation] = await Promise.all([
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
            24MB PNG is a 173KB WebP at 2560 wide, and Next derives AVIF and
            every smaller width from it per request, so a phone is served a
            fraction of that. */}
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          // The three of them stand between 44% and 90% across, faces a
          // little above the middle. The frame is 16:9, so an ordinary
          // laptop crops it horizontally and barely at all; a phone keeps
          // only about a quarter of the width, which is why that one holds
          // at 72% — centred on the group rather than on the frame, or the
          // hero becomes a photograph of an empty foyer.
          className="-z-20 object-cover object-[72%_45%] sm:object-[60%_42%]"
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
            even.

            These numbers are much lower than the ones they replaced, and the
            reason is the photograph rather than a change of mind. Measured
            across the band the type sits in, the previous image ran to a mean
            luminance of about 150 of 255 and needed 0.90 at the left edge to
            hold white text. This one is a dark foyer: 22 to 78 over almost
            all of that band, and the single bright patch is the daylight in
            the glass doors at the far left, which reads about 140. 0.62 there
            brings that patch to 53 and leaves everything past a third of the
            way across nearly untouched. Carrying the old values over would
            have crushed a photograph that was already dark to begin with —
            which is a thing worth checking every time one of these is
            swapped, because the scrim is tuned to an image and not to a
            layout. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,9,2,0.38)_0%,rgba(18,9,2,0.58)_100%)] sm:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 hidden bg-[linear-gradient(100deg,rgba(18,9,2,0.62)_0%,rgba(18,9,2,0.44)_30%,rgba(18,9,2,0.12)_55%,rgba(18,9,2,0)_75%)] sm:block"
        />

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

      {/* How it works: the claim, and then the two people it is a claim
          about.

          These were two sections. The first argued that knowing a thing
          exists is not knowing it is open to you; the second showed the
          steps that close that gap. Split, the argument sat above a heading
          that repeated it, and the reader met two headings before any
          content. Together the heading states the problem and the columns
          under it are the answer, which is what both sections were for.

          The branches run in parallel, so her first step and their first
          step sit level and the pair reads across as well as down. What that
          shows is that the checking happens on their side before anything
          reaches hers, which is the argument the platform rests on and is
          hard to make in a sentence.

          The steps are numbered because they are a sequence, and numbered in
          the component rather than in nine catalogues, so nobody has to
          translate the word "One". */}
      <section className="mx-auto w-full max-w-[1180px] border-t border-hairline px-5 py-24 sm:px-10 sm:py-32">
        <div className="flex flex-col gap-3">
          <span className="eyebrow text-gold-700">{t("why.eyebrow")}</span>
          <h2 className="m-0 max-w-[26ch] font-display text-[30px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[42px]">
            {t("why.title")}
          </h2>
        </div>

        <div className="mt-[62px] grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-0">
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
              className={`flex flex-col items-start gap-8 ${
                // The rule between them is dashed and only drawn on the
                // second, so it is one line between two columns rather than
                // an edge on each.
                //
                // The padding is on the inside edges only. Padding both
                // columns evenly indented the first one, which put "For
                // women" a third of an inch right of the heading it sits
                // under and lost the section its left edge.
                index === 1
                  ? "sm:border-l sm:border-dashed sm:border-ink/20 sm:pl-10"
                  : "sm:pr-10"
              }`}
            >
              <h3 className="m-0 font-display text-[24px] font-normal leading-[1.2]">
                {branch.title}
              </h3>

              <ol className="m-0 flex list-none flex-col gap-9 p-0">
                {branch.steps.map((step, position) => (
                  <li
                    key={step.title}
                    className="flex flex-col items-start gap-2"
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

      {/* Where it came from.

          Everything above this is the platform explaining itself: what it
          does, and the order it does it in. This is the only part of the page
          that answers why anybody built it, and it is placed here because the
          section above ends on the claim that knowing a thing exists is not
          knowing it is open to you. That claim is abstract until somebody has
          watched it happen in a room, which is what the paragraphs describe
          and what the photographs are evidence of.

          White rather than the page's cream, between a cream section and the
          dark band. It is the one place on the page where the ground changes
          under a light section, and it earns that by being the one place that
          is about the summit rather than about the platform.

          The photographs are the summit's own, of women who were actually
          there — see the note in SummitPhotos, which has a consent question
          in it that is HWS's to answer before launch. */}
      <section className="border-y border-hairline bg-surface">
        {/* The padding is on the inner box rather than on the section, which
            looks like a detail and is the difference between this heading
            lining up with the one above it and sitting 40px to its left.

            The page has two section shapes. A container section carries
            max-w-[1180px] and its own padding, so its content starts 40px
            inside 1180. A full-bleed one — the hero, the dark band — puts the
            padding on the section so the background reaches the edges, and
            its content starts at 1180 exactly. The two do not line up, and
            they have not lined up for a while.

            This band needs a full-bleed background and a container left edge,
            so it takes the background from one and the measure from the
            other. Placed as it is, directly under a container section, that
            puts the only edge that shows against a change of colour at the
            dark band below, where it is nearly invisible.

            The underlying mismatch is still there and is worth fixing across
            the page one day. Doing it here would have moved two sections
            nobody asked about and reflowed their columns. */}
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-12 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-2 lg:gap-16">
          <div>
            {/* Same gap between eyebrow and heading as the section above, and
                the same two sizes, because the two are peers: one states the
                problem, this one says where we watched it happen. */}
            <div className="flex flex-col gap-3">
              <span className="eyebrow text-gold-700">{t("origin.eyebrow")}</span>
              <h2 className="m-0 max-w-[20ch] font-display text-[30px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[42px]">
                {t("origin.title")}
              </h2>
            </div>

            {/* 1.6 rather than the 1.5 the hero and the zones paragraphs use.
                Those are one paragraph each and this is two, and two stacked
                paragraphs at 1.5 read as a wall. */}
            <div className="mt-7 flex max-w-[512px] flex-col gap-5">
              <p className="m-0 text-[16px] leading-[1.6] text-ink-70">
                {t("origin.bodyOne")}
              </p>
              <p className="m-0 text-[16px] leading-[1.6] text-ink-70">
                {t("origin.bodyTwo")}
              </p>
            </div>
          </div>

          <SummitPhotos />
        </div>
      </section>

      {/* The one dark band on the page, back where the how-it-works section
          used to sit. The zones are the platform's own vocabulary — the eight
          words everything on it is filed under — and they are worth the
          contrast in a way that a list of steps was not. */}
      <section className="bg-ink px-5 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex flex-col gap-3">
          {/* The count used to sit here, beside the label rather than in
              front of the heading's noun, because glued to a translated
              phrase it was ungrammatical in three of the nine languages.
              HWS has taken it off entirely, which settles that. */}
          <span className="eyebrow text-gold-300">{t("zones.eyebrow")}</span>
          <h2 className="m-0 max-w-[24ch] font-display text-[30px] font-normal leading-[1.1] tracking-[-0.01em] text-white sm:text-[42px]">
            {t("zones.title")}
          </h2>
          {/* Set exactly as the hero's paragraph is: 16px on a 512px measure
              at 1.5, white at 80%. The two are the same kind of sentence
              doing the same job, and they were two different sizes. */}
          <p className="m-0 max-w-[512px] text-[16px] leading-[1.5] text-white/80">
            {t("zones.body")}
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-[10px]">
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

        <Link
          href="/discover"
          className="mt-8 inline-flex min-h-[44px] items-center gap-2 p-1 text-[17px] font-bold text-gold-300 no-underline"
        >
          <Compass size={18} strokeWidth={2} aria-hidden="true" />
          {t("zones.browse")}
          <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
        </Link>
        </div>
      </section>

      {/* The questions somebody asks before typing a sentence about her own
          life into a website, and then the people who typed one.

          A proper section now, on the same padding as the rest of the page:
          it was a stray block hanging off the bottom of the dark band with
          only its own bottom margin. The three promises answer the questions
          in our voice; the quotes under them are the same three claims in
          somebody else's, which is the only reason they are in the same
          section rather than a new one. */}
      <section className="mx-auto w-full max-w-[1180px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-x-12">
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
              className="flex flex-col gap-3"
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

        {/* Renders nothing while the array is empty, which is how this ships
            the day the placeholder quotes come out and the real ones are not
            ready yet. */}
        <Testimonials items={TESTIMONIALS} />
      </section>

      {/* The other audience. Kept to one block at the foot, because a woman
          looking for help should not have to scroll past a pitch to
          organisations to reach anything that is for her. */}
      <section className="mx-auto w-full max-w-[1180px] px-5 pb-24 sm:px-10">
        {/* The card keeps even padding and the words sit centred in it. The
            drawing is pulled down by exactly that padding so it still stands
            on the card's edge — bottom-aligning the whole row instead put
            all the slack above the heading and none under the button. */}
        <div className="mx-auto flex max-w-[880px] flex-col gap-5 overflow-hidden rounded-card bg-surface p-8 shadow-hairline sm:flex-row sm:items-stretch sm:justify-between sm:gap-10 sm:p-10">
          <div className="flex flex-col items-start justify-center gap-3">
            <h2 className="m-0 max-w-[22ch] font-display text-[26px] font-normal leading-[1.15] sm:text-[32px]">
              {t("orgs.title")}
            </h2>
            {/* Set as the Access Zones paragraph is: 16px on a 512px measure
                at 1.5. They are the same kind of sentence and they were two
                different sizes. */}
            <p className="m-0 max-w-[512px] text-[16px] leading-[1.5] text-ink-70">
              {t("orgs.body")}
            </p>

            <Link
              href={portalUrl()}
              className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-8 py-[17px] text-[17px] font-bold text-white no-underline transition-opacity duration-150 ease-out hover:opacity-90"
            >
              {t("orgs.cta")}
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          {/* Decorative, so alt is empty. The drawing is white-on-white line
              art sitting on the card's own surface, which is why it needs no
              frame and no rounding of its own — the card's overflow does the
              cropping where it meets the edge.

              Hidden on a phone. It is the last block on a long page and it
              is ornament: another 200px of scroll between her and the footer
              is a poor trade for it. */}
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
