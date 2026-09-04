import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { OrganisationRow } from "@/components/discover/OrganisationRow";
import {
  getNeedsWithCounts,
  getZonesWithCounts,
  searchOrganisations,
} from "@/lib/data/discover";

export const metadata: Metadata = {
  title: "Discover organisations across Scotland",
  description:
    "Browse the organisations working with women across Scotland, by the kind of support they offer.",
};

/**
 * Browsing, as opposed to searching for a match.
 *
 * Two different things are called search on this platform and they must not
 * be confused. The three questions match a woman to one listing worth her
 * afternoon, weighing her situation and her area. The box on this page finds
 * an organisation by what it is called or what it does. This page offers the
 * second and points at the first, because most of the time the first is what
 * she actually wants.
 *
 * A plain GET form, so a search is a URL: shareable, bookmarkable, and still
 * there after a back button.
 */
export default async function DiscoverPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q: rawQ } = await searchParams;
  const q = (rawQ ?? "").trim();

  const [zones, needs, results] = await Promise.all([
    getZonesWithCounts(),
    getNeedsWithCounts(),
    q ? searchOrganisations(q) : Promise.resolve([]),
  ]);

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
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-7">
          <span className="eyebrow text-gold-300">Discover</span>

          <h1 className="m-0 max-w-[18ch] font-display text-[38px] font-normal leading-[1.05] tracking-[-0.015em] text-white sm:text-[64px]">
            Who is working for women in Scotland
          </h1>

          <p className="m-0 max-w-[58ch] text-[18px] leading-[1.6] text-white/70">
            Every organisation here has been checked by us. Search for one by
            name, or read your way down by what you need.
          </p>

          <form
            role="search"
            action="/discover"
            className="mt-1 flex w-full max-w-[760px] items-center gap-3 rounded-full bg-surface py-2 pl-6 pr-2 shadow-panel sm:gap-4 sm:pl-8 sm:pr-3"
          >
            <label htmlFor="q" className="sr-only">
              Search organisations by name or by what they do
            </label>
            <Search
              size={24}
              strokeWidth={2}
              className="shrink-0 text-gold-700"
              aria-hidden="true"
            />
            <input
              id="q"
              name="q"
              type="search"
              defaultValue={q}
              placeholder="Search organisations"
              autoComplete="off"
              className="min-w-0 flex-1 border-0 bg-transparent py-[14px] text-[18px] text-ink outline-none placeholder:text-ink-60 sm:py-[18px] sm:text-[21px]"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex size-[46px] shrink-0 items-center justify-center rounded-full border-0 bg-ink text-white transition-transform duration-150 ease-out hover:translate-x-[2px] sm:size-[52px]"
            >
              <ArrowRight size={22} strokeWidth={2} aria-hidden="true" />
            </button>
          </form>

          {/* The matching engine, offered as the other thing rather than the
              same thing. A name search cannot weigh her situation, and a page
              that blurred the two would send her to the weaker one. */}
          <Link
            href="/find"
            className="inline-flex min-h-[44px] items-center gap-2 p-1 text-[16px] font-bold text-gold-300 no-underline"
          >
            Or answer three questions and we will match you
            <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-10 sm:py-16">
        {q ? (
          <div className="mb-14 flex flex-col gap-5">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="m-0 font-display text-[28px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[34px]">
                {results.length === 0
                  ? `Nothing matches “${q}”`
                  : `${results.length} organisation${results.length === 1 ? "" : "s"} matching “${q}”`}
              </h2>
              <Link
                href="/discover"
                className="inline-flex min-h-[44px] items-center gap-[6px] p-1 text-[15px] font-bold text-ink no-underline"
              >
                <X size={16} strokeWidth={2} aria-hidden="true" />
                Clear
              </Link>
            </div>

            {results.length === 0 ? (
              <p className="m-0 max-w-[58ch] text-[17px] leading-[1.6] text-ink-70">
                This box only looks at names and descriptions. If you are
                trying to describe a situation rather than find a particular
                organisation,{" "}
                <Link href="/find" className="font-bold text-gold-700">
                  the three questions
                </Link>{" "}
                will do far better.
              </p>
            ) : (
              <div className="flex flex-col gap-[14px]">
                {results.map((organisation) => (
                  <OrganisationRow
                    key={organisation.id}
                    organisation={organisation}
                  />
                ))}
              </div>
            )}
          </div>
        ) : null}

        <div className="flex flex-col gap-2">
          <h2 className="m-0 font-display text-[28px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[34px]">
            Browse by Access Zone
          </h2>
          <p className="m-0 max-w-[58ch] text-[17px] leading-[1.6] text-ink-70">
            The eight kinds of support the platform is built around. Each one
            leads to the organisations working in it.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((zone) => {
            const empty = zone.organisationCount === 0;
            return (
              <Link
                key={zone.id}
                href={`/discover/${zone.slug}`}
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

        {/* Both ways in, zones first. A zone is how HWS divides the work
            and a need is a sentence somebody says out loud. Either can be
            the one she recognises, so both are on the page. */}
        <div className="mt-14 flex flex-col gap-2">
          <h2 className="m-0 font-display text-[28px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[34px]">
            Browse by what you need
          </h2>
          <p className="m-0 max-w-[58ch] text-[17px] leading-[1.6] text-ink-70">
            Say it the way you would say it out loud.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-[10px]">
          {needs.map((need) => {
            const empty = need.organisationCount === 0;
            return empty ? (
              <span
                key={need.slug}
                className="inline-flex items-center gap-2 rounded-full bg-surface px-[18px] py-[12px] text-[16px] text-ink-60 opacity-70 shadow-hairline"
              >
                {need.label}
              </span>
            ) : (
              <Link
                key={need.slug}
                href={`/discover/need/${need.slug}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-surface px-[18px] py-[12px] text-[16px] font-semibold text-ink no-underline shadow-hairline transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-[1px] hover:shadow-hairline-gold"
              >
                {need.label}
                <span className="rounded-full bg-gold-200 px-2 py-[2px] text-[13px] font-bold tabular-nums text-gold-700">
                  {need.organisationCount}
                </span>
              </Link>
            );
          })}
        </div>

      </section>
    </div>
  );
}
