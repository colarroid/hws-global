import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, BadgeCheck, Flag } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { ColdArrivalBar, ColdArrivalPanel } from "@/components/find/ColdArrival";
import { SaveButton } from "@/components/find/SaveButton";
import { getSavedIds } from "@/lib/saved";
import { track } from "@/lib/track";
import { getService, applyHost } from "@/lib/data/service";
import { COSTS, FORMATS, SOLUTION_KINDS, labelFor } from "@/lib/design/taxonomy";

const LONG = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

type Params = { params: Promise<{ id: string }> };
type Search = {
  searchParams: Promise<Record<string, string | undefined>>;
};

/**
 * Most traffic reaches this page from a search engine rather than from a
 * search here, so it has to stand on its own in a results listing.
 */
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const service = await getService(id);
  if (!service) return { title: "Not found" };

  const where = [service.place, service.organisationName]
    .filter(Boolean)
    .join(", ");

  return {
    title: `${service.name} · ${service.organisationName}`,
    description:
      service.blurb ??
      `Support for women${where ? ` in ${where}` : " in Scotland"}.`,
  };
}

/** One labelled fact. Empty ones are dropped rather than shown blank. */
function Fact({ label, value }: { label: string; value: string | null }) {
  if (!value?.trim()) return null;
  return (
    <div className="flex flex-col gap-2 border-t border-hairline-soft pt-5">
      <dt className="eyebrow text-ink-60">
        {label}
      </dt>
      <dd className="m-0 max-w-[62ch] text-[17px] leading-[1.6]">{value}</dd>
    </div>
  );
}

/**
 * The service detail page, behind "Learn more".
 *
 * The most-visited page in the product, and the last one the platform
 * controls before she leaves for the organisation's own site. Two things
 * shape it.
 *
 * First, she usually arrives cold from a search engine with no answers
 * behind her. There is therefore no "why this matched you" here: that
 * sentence is written from her answers, and inventing one for a visitor who
 * never answered anything would be a lie. Instead a cold arrival is offered
 * the search, above the fold, because a service page with the invitation
 * below the fold makes this a directory to everyone who finds it via Google.
 *
 * Second, this is where the platform states what it cannot do. It cannot
 * decide whether she qualifies, and it says so next to the button rather
 * than burying it.
 */
export default async function ServicePage({ params, searchParams }: Params & Search) {
  const { id } = await params;
  const query = await searchParams;
  const [service, savedIds] = await Promise.all([getService(id), getSavedIds()]);

  if (!service) notFound();

  // One of the three figures an organisation sees. Not awaited: the count
  // must never delay what she is trying to read.
  void track(service.id, "view");

  // She came from a search if her answers are still in the URL.
  const fromSearch = Boolean(query.need || query.place || query.situations);
  const backToResults = fromSearch
    ? `/results?${new URLSearchParams(
        Object.entries(query).filter(([, v]) => v) as [string, string][],
      )}`
    : null;

  const closed = service.status === "closed";
  const host = applyHost(service.apply_url);

  const tags = [
    labelFor(SOLUTION_KINDS, service.kind),
    labelFor(COSTS, service.cost),
    ...service.formats.map((f) => labelFor(FORMATS, f)),
  ].filter(Boolean);

  const similarHref = `/results?${new URLSearchParams({
    need: service.name,
    place: service.place ?? "",
    situations: service.situationSlugs.join(","),
    scope: "all-scotland",
  })}`;

  return (
    <>
      {!fromSearch ? <ColdArrivalBar /> : null}

      <Page width={720} top={fromSearch ? 40 : 32} gap={26}>
        {backToResults ? (
          <Link
            href={backToResults}
            className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
          >
            <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
            Back to your results
          </Link>
        ) : null}

        <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-3">
          {closed ? (
            <span className="self-start rounded-pill-sm bg-closed px-[11px] py-[7px] text-[13px] font-bold text-ink-65">
              Closed
              {service.deadline
                ? ` ${LONG.format(new Date(service.deadline))}`
                : ""}
            </span>
          ) : null}

          <h1 className="m-0 font-display text-[32px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[44px] sm:leading-[1.1]">
            {service.name}
          </h1>
          <p className="m-0 text-[17px] text-ink-65">
            {[service.organisationName, service.place].filter(Boolean).join(" · ")}
          </p>
        </div>

          <SaveButton
            listingId={service.id}
            saved={savedIds.includes(service.id)}
            name={service.name}
          />
        </div>

        {service.blurb ? (
          <p className="m-0 max-w-[62ch] text-[19px] leading-[1.6]">
            {service.blurb}
          </p>
        ) : null}

        {tags.length > 0 || service.deadline ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-tag bg-sage-200 px-[10px] py-[6px] text-[13px] font-semibold"
              >
                {tag}
              </span>
            ))}
            {service.deadline && !closed ? (
              <span className="rounded-tag bg-gold-200 px-[10px] py-[6px] text-[13px] font-semibold text-gold-700">
                Closes {LONG.format(new Date(service.deadline))}
              </span>
            ) : null}
          </div>
        ) : null}

        <dl className="m-0 flex flex-col gap-5">
          <Fact label="Who it's for" value={service.who_for} />
          <Fact label="What to expect" value={service.what_to_expect} />
          <Fact label="Cost" value={labelFor(COSTS, service.cost) || null} />
          <Fact
            label="How to take part"
            value={
              service.formats.map((f) => labelFor(FORMATS, f)).join(", ") || null
            }
          />
          <Fact label="Where" value={service.place} />
        </dl>

        {closed ? (
          /* A closed listing is never a dead end either. */
          <div className="flex flex-col items-start gap-3 rounded-card shadow-hairline bg-surface p-6">
            <span className="font-display text-[19px] font-normal">This one has closed</span>
            <p className="m-0 max-w-[62ch] text-[17px] leading-[1.6] text-ink-70">
              It may run again. {service.organisationName} can tell you when the
              next one opens, and there may be something similar available now.
            </p>
            <div className="flex flex-wrap gap-3">
              {service.organisationWebsite ? (
                <a
                  href={service.organisationWebsite}
                  className="inline-flex min-h-[44px] items-center rounded-control bg-ink px-6 py-4 text-[16px] font-bold text-white no-underline"
                  rel="noopener noreferrer"
                >
                  Ask when the next one starts
                </a>
              ) : null}
              <Link
                href={similarHref}
                className="inline-flex min-h-[44px] items-center rounded-control shadow-hairline bg-surface px-6 py-4 text-[16px] font-bold text-ink no-underline"
              >
                Find similar support
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 border-t border-hairline pt-6">
            <Link
              href={`/go/${service.id}`}
              className="inline-flex min-h-[44px] items-center justify-center self-start rounded-control bg-ink px-9 py-[19px] text-[18px] font-bold text-white no-underline"
            >
              {host ? `Continue to ${host}` : "How to take part"}
            </Link>
            {/* Honesty about limits, next to the button rather than buried. */}
            <p className="m-0 max-w-[62ch] text-[15px] leading-[1.55] text-ink-60">
              This takes you to {service.organisationName}, who run it. We
              can&apos;t decide whether you qualify, and we don&apos;t see
              anything you send them.
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-card bg-gold-200 px-[22px] py-5">
          <div className="flex flex-col gap-1">
            <span className="inline-flex items-center gap-2 text-[15px] text-green-700">
              <BadgeCheck size={17} strokeWidth={2} aria-hidden="true" />
              {service.last_confirmed_at
                ? `Verified · last checked ${LONG.format(new Date(service.last_confirmed_at))}`
                : "Verified"}
            </span>
            {/* A different promise from the checked date above it. That one
                says HWS confirmed this is still true; this one says the
                organisation changed what it says, and when. */}
            {service.updated_at ? (
              <span className="text-[14px] text-gold-700">
                Updated {LONG.format(new Date(service.updated_at))}
              </span>
            ) : null}
          </div>
          {/* The reporting loop. The verified stamp is only worth what the
              re-check cadence is worth, and women spot staleness first. */}
          <Link
            href={`/help?about=${service.id}`}
            className="inline-flex min-h-[44px] items-center gap-2 p-1 text-[15px] font-bold text-gold-700 no-underline"
          >
            <Flag size={15} strokeWidth={2} aria-hidden="true" />
            Something wrong with this?
          </Link>
        </div>

        {service.organisationBlurb ? (
          <div className="flex flex-col gap-2 border-t border-hairline pt-6">
            <span className="eyebrow text-ink-60">
              About {service.organisationName}
            </span>
            <p className="m-0 max-w-[62ch] text-[17px] leading-[1.6] text-ink-70">
              {service.organisationBlurb}
            </p>
          </div>
        ) : null}

        {!fromSearch ? <ColdArrivalPanel /> : null}
      </Page>
    </>
  );
}
