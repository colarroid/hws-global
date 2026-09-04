import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { getZonesWithCounts } from "@/lib/data/discover";

export const metadata: Metadata = {
  title: "Discover organisations across Scotland",
  description:
    "Browse the organisations working with women across Scotland, by the kind of support they offer.",
};

/**
 * Browsing, for a woman who cannot yet name what she needs.
 *
 * Search is still the front door and this page says so with its own weight:
 * the search control is the largest thing on the screen and everything below
 * it is offered as the second option, because three questions and an answer
 * beats reading eight zone cards for almost everybody.
 *
 * The zones are what she reads if that is not her. They are laid out as a
 * grid of cards with their own focus line, and each carries its count, so a
 * zone with nothing behind it says so before she taps rather than after.
 */
export default async function DiscoverPage() {
  const zones = await getZonesWithCounts();

  return (
    <div className="flex flex-1 flex-col">
      {/*
        A darker band at the top, and the only one on the site. Discover is a
        front door rather than a step inside a flow, and the ink ground is
        what separates it from the cream pages that carry her search. The
        cards below sit on cream again, so the eye lands here and then moves
        down rather than across a single even field.
      */}
      <section className="bg-ink px-5 pb-16 pt-14 sm:px-10 sm:pb-20 sm:pt-20">
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-start gap-7">
          <span className="eyebrow text-gold-300">Discover</span>

          <h1 className="m-0 max-w-[16ch] font-display text-[38px] font-normal leading-[1.05] tracking-[-0.015em] text-white sm:text-[64px]">
            Who is working for women in Scotland
          </h1>

          <p className="m-0 max-w-[54ch] text-[18px] leading-[1.6] text-white/70">
            Every organisation here has been checked by us. Tell us what you
            need and we will match you, or read your way through the eight
            Access Zones below.
          </p>

          {/*
            A link dressed as a search field, not a form. There is nothing to
            search from this page: the matching lives in three questions that
            need her situation and her area, and a box here would collect one
            word and then ask for the rest anyway. So it says what happens.
          */}
          <Link
            href="/find"
            className="group mt-1 flex w-full max-w-[620px] items-center gap-4 rounded-full bg-surface px-6 py-[18px] text-ink no-underline shadow-panel transition-transform duration-150 ease-out hover:-translate-y-[2px] sm:gap-5 sm:px-8 sm:py-6"
          >
            <Search
              size={26}
              strokeWidth={2}
              className="shrink-0 text-gold-700"
              aria-hidden="true"
            />
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-[19px] font-bold leading-[1.2] sm:text-[23px]">
                Tell us what you need
              </span>
              <span className="text-[15px] leading-[1.4] text-ink-65">
                Three questions. No account, and nothing is shared.
              </span>
            </span>
            <span className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform duration-150 ease-out group-hover:translate-x-1 sm:size-[52px]">
              <ArrowRight size={22} strokeWidth={2} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[900px] px-5 py-14 sm:px-10 sm:py-16">
        <div className="flex flex-col gap-2">
          <h2 className="m-0 font-display text-[28px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[34px]">
            Or browse by Access Zone
          </h2>
          <p className="m-0 max-w-[58ch] text-[17px] leading-[1.6] text-ink-70">
            The eight kinds of support the platform is built around. Each one
            leads to the organisations working in it.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-[14px] sm:grid-cols-2">
          {zones.map((zone) => {
            const empty = zone.organisationCount === 0;
            return (
              <Link
                key={zone.id}
                href={`/discover/${zone.slug}`}
                aria-disabled={empty || undefined}
                className={[
                  "group flex flex-col gap-3 rounded-card bg-surface p-6 no-underline shadow-hairline",
                  "transition-[box-shadow,transform] duration-150 ease-out",
                  empty
                    ? "opacity-70"
                    : "hover:-translate-y-[2px] hover:shadow-panel",
                ].join(" ")}
              >
                <span className="font-display text-[22px] font-normal leading-[1.2] text-ink">
                  {zone.name}
                </span>
                <span className="flex-1 text-[16px] leading-[1.55] text-ink-70">
                  {zone.focus}
                </span>
                <span className="flex items-center justify-between gap-3 pt-1">
                  <span className="text-[14px] font-semibold text-ink-60">
                    {empty
                      ? "Nobody here yet"
                      : `${zone.organisationCount} organisation${zone.organisationCount === 1 ? "" : "s"}`}
                  </span>
                  {empty ? null : (
                    <ArrowRight
                      size={18}
                      strokeWidth={2}
                      className="shrink-0 text-gold-700 transition-transform duration-150 ease-out group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
