import Link from "next/link";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { ResultCard, type ResultCardData } from "@/components/ResultCard";
import { NoMatch } from "@/components/find/NoMatch";
import { getLiveListings, recordUnmetSearch } from "@/lib/data/search";
import { getSituationLabels, getSituationPhrases } from "@/lib/data/situations";
import { rank, countForScope, type Answers, type Scope } from "@/lib/search/rank";
import { COSTS, FORMATS, SOLUTION_KINDS, labelFor } from "@/lib/design/taxonomy";

const DATE = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const SHORT = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long" });

const SCOPES: Scope[] = ["my-area", "nearby", "all-scotland", "online"];

function parseAnswers(params: {
  need?: string;
  place?: string;
  situations?: string;
  scope?: string;
  filters?: string;
}): Answers {
  return {
    need: params.need ?? "",
    place: params.place ?? "",
    situations: params.situations?.split(",").filter(Boolean) ?? [],
    scope: SCOPES.includes(params.scope as Scope)
      ? (params.scope as Scope)
      : "my-area",
    filters: params.filters?.split(",").filter(Boolean) ?? [],
  };
}

/**
 * Screen 5. Next steps.
 *
 * The whole proposition: a short, ordered set of next steps, each with a
 * reason attached. Capped at five, strongest first.
 *
 * Order is now the only thing conveying rank. The handoff gave the first card
 * a permanent heavy border as the strongest-match marker, and that was
 * removed by decision because it read as a selected state rather than a
 * ranking. The heavy edge is a hover and focus affordance instead.
 *
 * Server-rendered from the URL, so back, refresh, sharing and printing all
 * behave. There is no loading route to get trapped on: loading.tsx streams
 * the named wait while this runs, and disappears on its own.
 */
export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{
    need?: string;
    place?: string;
    situations?: string;
    scope?: string;
    filters?: string;
  }>;
}) {
  const params = await searchParams;
  const answers = parseAnswers(params);

  const [listings, situationLabels, situationPhrases] = await Promise.all([
    getLiveListings(),
    getSituationLabels(),
    getSituationPhrases(),
  ]);

  // Phrases build the reason; labels show her answers back as chips.
  const ranked = rank(listings, answers, situationPhrases);

  if (ranked.length === 0) {
    // Counts are computed before the screen renders, so a suggested widening
    // is never itself another dead end.
    const widenCount = countForScope(listings, answers, "all-scotland");
    const onlineCount = countForScope(listings, answers, "online");

    await recordUnmetSearch({
      need: answers.need,
      place: answers.place,
      situations: answers.situations,
      resultCount: 0,
    });

    return (
      <NoMatch
        answers={answers}
        widenCount={widenCount}
        onlineCount={onlineCount}
      />
    );
  }

  const chips = [
    answers.need,
    answers.place,
    ...answers.situations.map((s) => situationLabels.get(s) ?? s),
  ].filter(Boolean);

  const changeHref = `/find?need=${encodeURIComponent(answers.need)}`;

  return (
    <Page width={820} top={56} gap={28}>
      <div className="flex flex-col gap-[14px]">
        <Link
          href={changeHref}
          className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
        >
          <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
          Change answers
        </Link>

        <h1 className="m-0 font-display text-[30px] font-medium leading-[1.15] tracking-[-0.01em] sm:text-[44px] sm:leading-[1.1]">
          Next steps for you
        </h1>

        <div className="flex flex-wrap items-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-hairline bg-sage-200 px-[14px] py-2 text-[14px]"
            >
              {chip}
            </span>
          ))}
          <Link
            href={`/refine?${new URLSearchParams(params as Record<string, string>)}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-gold-500 bg-surface px-[14px] py-2 text-[14px] font-bold text-gold-700 no-underline"
          >
            <SlidersHorizontal size={15} strokeWidth={2} aria-hidden="true" />
            Refine or widen
          </Link>
        </div>

        {/* Stated where she can see it, because it is a promise about her. */}
        <p className="m-0 text-[14px] leading-[1.5] text-ink-60">
          Ordered by how well they fit what you told us. Nobody pays to appear
          here.
        </p>
      </div>

      <div className="flex flex-col gap-[14px]">
        {ranked.map(({ listing, why }) => {
          const card: ResultCardData = {
            name: listing.name,
            source: [listing.organisationName, listing.place]
              .filter(Boolean)
              .join(" · "),
            blurb: listing.blurb ?? "",
            tags: [
              labelFor(SOLUTION_KINDS, listing.kind),
              labelFor(COSTS, listing.cost),
              ...listing.formats.map((f) => labelFor(FORMATS, f)),
            ].filter(Boolean),
            deadline: listing.deadline
              ? `Closes ${SHORT.format(new Date(listing.deadline))}`
              : null,
            whoFor: listing.who_for ?? "",
            whatToExpect: listing.what_to_expect ?? "",
            why,
            verified: listing.last_confirmed_at
              ? `Verified · last checked ${DATE.format(new Date(listing.last_confirmed_at))}`
              : "Verified",
          };

          return (
            <ResultCard
              key={listing.id}
              data={card}
              interactive
              actionSlot={
                <Link
                  /* Her answers travel with her, so the service page can
                     offer a way back to these results and knows not to
                     treat her as a cold arrival. */
                  href={`/service/${listing.id}?${new URLSearchParams(
                    Object.entries(params).filter(([, v]) => v) as [
                      string,
                      string,
                    ][],
                  )}`}
                  className="inline-flex min-h-[44px] items-center rounded-control bg-ink px-8 py-[15px] text-[17px] font-bold text-white no-underline"
                >
                  Learn more
                </Link>
              }
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-[14px] border-t border-hairline pt-6">
        <p className="m-0 text-[17px] leading-[1.6] text-ink-70">
          That&apos;s everything that fits closely. You can widen the search or
          change what you told us.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`/results?${new URLSearchParams({ ...params, scope: "all-scotland" } as Record<string, string>)}`}
            className="inline-flex min-h-[44px] items-center rounded-control border border-ring bg-surface px-5 py-3 text-[16px] font-bold text-ink no-underline"
          >
            Show support across Scotland
          </Link>
          <Link
            href={changeHref}
            className="inline-flex min-h-[44px] items-center rounded-control border border-ring bg-surface px-5 py-3 text-[16px] font-bold text-ink no-underline"
          >
            Change my answers
          </Link>
          <Link
            href="/find"
            className="inline-flex min-h-[44px] items-center p-1 text-[16px] font-bold text-gold-700 no-underline"
          >
            Start over
          </Link>
        </div>
      </div>
    </Page>
  );
}
