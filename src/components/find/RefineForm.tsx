"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Chip, ChipGroup } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { SCOPES, FILTERS, type Answers, type Scope } from "@/lib/search/rank";
import { useCount, useT } from "@/lib/i18n/client";
import type { ClientMessageKey } from "@/lib/i18n/client-keys";

/*
 * Slugs are the stored value and go in the URL; these are what she reads.
 *
 * Written out rather than derived from the slug, so a renamed slug is a
 * compile error here instead of a scope that quietly loses its name in
 * eleven languages and keeps it in English.
 */
const SCOPE_KEY: Record<string, ClientMessageKey> = {
  "my-area": "scope.myArea",
  nearby: "scope.nearby",
  "all-scotland": "scope.allScotland",
  online: "scope.online",
};

const FILTER_KEY: Record<string, ClientMessageKey> = {
  free: "filter.free",
  "open-now": "filter.openNow",
  "no-forms": "filter.noForms",
};

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
  const t = useT();
  const n = useCount();
  const router = useRouter();
  const [scope, setScope] = useState<Scope>(answers.scope);
  const [filters, setFilters] = useState<string[]>(answers.filters);

  const count = counts[key(scope, filters)] ?? 0;
  /* Not lowercased any more. It used to be, to read inside "in my area";
     the sentence is its own now, and forcing lower case on a translated
     noun is a decision English has no business making for Punjabi. */
  const scopeLabel = t(SCOPE_KEY[scope]);

  /**
   * When filters empty the list, name the one to remove rather than saying
   * zero and stopping. She stays on this screen: sending her to an empty
   * results page would be a dead end she has to reverse out of.
   */
  const culprit = filters.find(
    (f) => counts[key(scope, filters.filter((x) => x !== f))] > 0,
  );
  const culpritLabel = culprit ? t(FILTER_KEY[culprit]) : undefined;

  return (
    <>
      {/* Leaving without updating discards these changes. Nothing is lost,
          so there is no warning. */}
      <Link
        href={resultsHref(answers, answers.scope, answers.filters)}
        className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        {t("refine.back")}
      </Link>

      <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[42px] sm:leading-[1.1]">
        {t("refine.title")}
      </h1>

      <div className="flex flex-col gap-3">
        <span className="eyebrow text-ink-60">{t("refine.howFar")}</span>
        <ChipGroup label={t("refine.howFar")} multi={false}>
          {SCOPES.map((option) => (
            <Chip
              key={option.slug}
              label={t(SCOPE_KEY[option.slug])}
              selected={scope === option.slug}
              multi={false}
              showCheck
              onToggle={() => setScope(option.slug as Scope)}
            />
          ))}
        </ChipGroup>
      </div>

      <div className="flex flex-col gap-3">
        <span className="eyebrow text-ink-60">{t("refine.onlyShow")}</span>
        {/* Clearing happens by deselecting. There is no reset control. */}
        <ChipGroup label={t("refine.onlyShow")}>
          {FILTERS.map((option) => (
            <Chip
              key={option.slug}
              label={t(FILTER_KEY[option.slug])}
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
{/* Two short sentences rather than one long one, in English as well.
            The old version put a count, a second count and a scope name
            inside a single clause, and a clause like that cannot be
            translated without the second half agreeing with the first —
            which is a thing Polish and Arabic do and English does not. */}
        {count === 0
          ? `${t("refine.nothingMatches")} ${
              culpritLabel
                ? t("refine.tryRemoving", culpritLabel)
                : t("refine.tryWiden")
            }`
          : `${n("count.showingSteps", count)} ${
              filters.length > 0
                ? n("count.withFilters", filters.length)
                : t("refine.inScope", scopeLabel)
            }`}
      </p>

      <Button
        onClick={() => router.push(resultsHref(answers, scope, filters))}
        aria-disabled={count === 0}
        className={count === 0 ? "opacity-40" : undefined}
      >
        {t("refine.update")}
      </Button>
    </>
  );
}
