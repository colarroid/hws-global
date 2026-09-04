import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { COVERAGE, SOLUTION_KINDS, labelFor, labelsFor } from "@/lib/design/taxonomy";
import type { OrganisationCard } from "@/lib/data/discover";

/**
 * One organisation in a list.
 *
 * Shared between the zone pages and the search results so the two cannot
 * drift into looking like different kinds of thing. They are the same thing
 * reached two ways.
 */
export function OrganisationRow({
  organisation,
}: {
  organisation: OrganisationCard;
}) {
  const facts = [
    organisation.place,
    labelFor(COVERAGE, organisation.coverage),
    labelsFor(SOLUTION_KINDS, organisation.serviceKinds).slice(0, 3).join(", "),
    organisation.liveListings > 0
      ? organisation.liveListings +
        (organisation.liveListings === 1 ? " thing open" : " things open")
      : null,
  ].filter(Boolean);

  return (
    <Link
      href={`/organisation/${organisation.id}`}
      className="group flex gap-5 rounded-card bg-surface p-6 no-underline shadow-hairline transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-[2px] hover:shadow-panel"
    >
      {/* Always drawn, logo or not, so a row without one does not sit at a
          different indent to the rows around it. */}
      <span className="flex size-[56px] shrink-0 items-center justify-center overflow-hidden rounded-control bg-ground">
        {organisation.logoUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={organisation.logoUrl}
            alt=""
            width={56}
            height={56}
            loading="lazy"
            className="size-full object-contain"
          />
        ) : (
          <Building2
            size={24}
            strokeWidth={1.5}
            className="text-ink-40"
            aria-hidden="true"
          />
        )}
      </span>

      <span className="flex min-w-0 flex-1 flex-col gap-2">
        <span className="font-display text-[21px] font-normal leading-[1.25] text-ink">
          {organisation.name}
        </span>

        {organisation.blurb ? (
          <span className="text-[16px] leading-[1.55] text-ink-70">
            {organisation.blurb}
          </span>
        ) : null}

        {facts.length > 0 ? (
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-ink-60">
            {facts.map((fact, index) => (
              <span key={index}>{fact}</span>
            ))}
          </span>
        ) : null}
      </span>

      <ArrowRight
        size={18}
        strokeWidth={2}
        className="mt-1 shrink-0 self-start text-gold-700 transition-transform duration-150 ease-out group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
