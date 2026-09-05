import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Page } from "@/components/ui/Page";
import { RefineForm } from "@/components/find/RefineForm";
import { getLiveListings } from "@/lib/data/search";
import {
  countMatches,
  SCOPES,
  FILTERS,
  type Answers,
  type Scope,
} from "@/lib/search/rank";

const SCOPE_SLUGS = SCOPES.map((s) => s.slug) as readonly string[];

/** Every combination of one scope and any set of filters. */
function combinations(): { scope: Scope; filters: string[] }[] {
  const sets: string[][] = [[]];
  for (const filter of FILTERS) {
    for (const existing of [...sets]) sets.push([...existing, filter.slug]);
  }
  return SCOPES.flatMap((scope) =>
    sets.map((filters) => ({ scope: scope.slug as Scope, filters })),
  );
}

export const countKey = (scope: string, filters: string[]) =>
  `${scope}|${[...filters].sort().join(",")}`;

export const metadata: Metadata = pageMetadata({
  title: "Refine or widen",
  description:
    "Narrow your search or open it up, when the first set of results is not the right one.",
  path: "/refine",
});

/**
 * Screen 6. Refine or widen.
 *
 * A full page, not a bottom sheet, so back behaves and the choice is not
 * something she makes through a letterbox.
 *
 * Every count is computed here, before the screen renders, and handed to the
 * client as a lookup. Four scopes and three filters is thirty-two totals over
 * a set of tens of listings, which costs nothing, and it means the number
 * beside her choices is instant rather than a round trip on a patchy signal.
 * It is the same principle the no-match screen already works to: never offer
 * a widening without knowing what is behind it.
 *
 * Kept deliberately shallow. Filters are how a directory thinks, and if she
 * needs them to get a useful answer then the ranking is what is wrong.
 */
export default async function RefinePage({
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

  const answers: Answers = {
    need: params.need ?? "",
    place: params.place ?? "",
    situations: params.situations?.split(",").filter(Boolean) ?? [],
    scope: SCOPE_SLUGS.includes(params.scope ?? "")
      ? (params.scope as Scope)
      : "my-area",
    filters: params.filters?.split(",").filter(Boolean) ?? [],
  };

  const listings = await getLiveListings();

  const counts: Record<string, number> = {};
  for (const { scope, filters } of combinations()) {
    counts[countKey(scope, filters)] = countMatches(listings, {
      ...answers,
      scope,
      filters,
    });
  }

  return (
    <Page width={660} top={56} gap={28}>
      <RefineForm answers={answers} counts={counts} />
    </Page>
  );
}
