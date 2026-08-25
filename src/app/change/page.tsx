import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { ButtonLink } from "@/components/ui/Button";
import { getSituationLabels } from "@/lib/data/situations";

/**
 * Screen 7. Change answers.
 *
 * Shows her that she was understood, in her own words, and sets the
 * expectation that the answer will be short before she sees it.
 *
 * It does double duty: a checkpoint before the first search, and the edit
 * surface reached from the results header afterwards. Each "Change" returns
 * to that one question and comes straight back here.
 */
export default async function ChangePage({
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
  const need = params.need ?? "";
  const place = params.place ?? "";
  const situations = params.situations?.split(",").filter(Boolean) ?? [];

  const labels = await getSituationLabels();

  const query = new URLSearchParams(
    Object.entries(params).filter(([, v]) => v) as [string, string][],
  );

  const rows = [
    {
      label: "You need help with",
      value: need,
      empty: "Not given yet",
      href: `/find?${query}`,
    },
    {
      label: "Looking in",
      value: place,
      empty: "Anywhere in Scotland",
      href: `/find/where?${query}`,
    },
    {
      label: "Your situation",
      value: situations.map((s) => labels.get(s) ?? s).join(", "),
      empty: "Not given, add if you'd like",
      href: `/find/situation?${query}`,
    },
  ];

  return (
    <Page width={660} top={56} gap={28}>
      <Link
        href={`/results?${query}`}
        className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        Back to results
      </Link>

      <h1 className="m-0 font-display text-[30px] font-medium leading-[1.15] tracking-[-0.01em] sm:text-[42px] sm:leading-[1.1]">
        Here&apos;s what we heard
      </h1>

      <div className="flex flex-col gap-[14px]">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-wrap items-center justify-between gap-4 rounded-card border border-ring bg-surface px-[22px] py-5"
          >
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-60">
                {row.label}
              </span>
              <span
                className={`text-[17px] leading-[1.5] ${row.value ? "" : "text-ink-60 italic"}`}
              >
                {row.value || row.empty}
              </span>
            </div>
            <Link
              href={row.href}
              className="p-1 text-[15px] font-bold text-gold-700 no-underline"
            >
              Change
            </Link>
          </div>
        ))}
      </div>

      {/* Sets the expectation before she sees the answer, and states the
          neutrality where it is a promise about her rather than about us. */}
      <p className="m-0 max-w-[62ch] text-[17px] leading-[1.6] text-ink-70">
        We&apos;ll show you a small number of next steps, strongest match
        first. Nobody pays to appear here.
      </p>

      <div className="flex flex-col gap-3">
        <ButtonLink href={`/results?${query}`}>Update my search</ButtonLink>
        <ButtonLink href="/start-over" variant="text" size="bare" className="self-center">
          Start over
        </ButtonLink>
      </div>
    </Page>
  );
}
