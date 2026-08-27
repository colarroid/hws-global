"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Chip, ChipGroup } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { SCOPES, FILTERS, type Answers, type Scope } from "@/lib/search/rank";

const key = (scope: string, filters: string[]) =>
  `${scope}|${[...filters].sort().join(",")}`;

function resultsHref(answers: Answers, scope: Scope, filters: string[]) {
  const params = new URLSearchParams({ need: answers.need, place: answers.place });
  if (answers.situations.length) params.set("situations", answers.situations.join(","));
  if (scope !== "my-area") params.set("scope", scope);
  if (filters.length) params.set("filters", filters.join(","));
  return `/results?${params}`;
}

export function RefineForm({
  answers,
  counts,
}: {
  answers: Answers;
  /** Every scope and filter combination, counted before this rendered. */
  counts: Record<string, number>;
}) {
  const router = useRouter();
  const [scope, setScope] = useState<Scope>(answers.scope);
  const [filters, setFilters] = useState<string[]>(answers.filters);

  const count = counts[key(scope, filters)] ?? 0;
  const scopeLabel =
    SCOPES.find((s) => s.slug === scope)?.label.toLowerCase() ?? "";

  /**
   * When filters empty the list, name the one to remove rather than saying
   * zero and stopping. She stays on this screen: sending her to an empty
   * results page would be a dead end she has to reverse out of.
   */
  const culprit = filters.find(
    (f) => counts[key(scope, filters.filter((x) => x !== f))] > 0,
  );
  const culpritLabel = FILTERS.find((f) => f.slug === culprit)?.label;

  return (
    <>
      {/* Leaving without updating discards these changes. Nothing is lost,
          so there is no warning. */}
      <Link
        href={resultsHref(answers, answers.scope, answers.filters)}
        className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        Back to results
      </Link>

      <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[42px] sm:leading-[1.1]">
        Refine or widen
      </h1>

      <div className="flex flex-col gap-3">
        <span className="eyebrow text-ink-60">
          How far to look
        </span>
        <ChipGroup label="How far to look" multi={false}>
          {SCOPES.map((option) => (
            <Chip
              key={option.slug}
              label={option.label}
              selected={scope === option.slug}
              multi={false}
              showCheck
              onToggle={() => setScope(option.slug as Scope)}
            />
          ))}
        </ChipGroup>
      </div>

      <div className="flex flex-col gap-3">
        <span className="eyebrow text-ink-60">
          Only show
        </span>
        {/* Clearing happens by deselecting. There is no reset control. */}
        <ChipGroup label="Only show">
          {FILTERS.map((option) => (
            <Chip
              key={option.slug}
              label={option.label}
              selected={filters.includes(option.slug)}
              showCheck
              onToggle={() =>
                setFilters(
                  filters.includes(option.slug)
                    ? filters.filter((f) => f !== option.slug)
                    : [...filters, option.slug],
                )
              }
            />
          ))}
        </ChipGroup>
      </div>

      <p aria-live="polite" className="m-0 text-[17px] leading-[1.6] text-ink-70">
        {count === 0 ? (
          <>
            Nothing matches with these filters.{" "}
            {culpritLabel ? (
              <>Try removing &ldquo;{culpritLabel}&rdquo;.</>
            ) : (
              <>Try widening how far to look.</>
            )}
          </>
        ) : filters.length > 0 ? (
          <>
            Showing {count} {count === 1 ? "next step" : "next steps"} with{" "}
            {filters.length} {filters.length === 1 ? "filter" : "filters"}.
          </>
        ) : (
          <>
            Showing all {count} {count === 1 ? "next step" : "next steps"} in{" "}
            {scopeLabel}.
          </>
        )}
      </p>

      <Button
        onClick={() => router.push(resultsHref(answers, scope, filters))}
        aria-disabled={count === 0}
        className={count === 0 ? "opacity-40" : undefined}
      >
        Update my search
      </Button>
    </>
  );
}
