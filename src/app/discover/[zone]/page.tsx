import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building2 } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { getZone, getOrganisationsInZone } from "@/lib/data/discover";
import { COVERAGE, SOLUTION_KINDS, labelFor, labelsFor } from "@/lib/design/taxonomy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ zone: string }>;
}): Promise<Metadata> {
  const { zone: slug } = await params;
  const zone = await getZone(slug);
  if (!zone) return { title: "Not found" };

  return {
    title: `${zone.name} · organisations in Scotland`,
    description: zone.focus,
  };
}

/**
 * Everyone working in one Access Zone.
 *
 * Ordered with the organisations that named this zone as their own first.
 * That is accuracy rather than favouritism: a zone is somebody's whole reason
 * for existing before it is somebody else's third answer, and a woman reading
 * down the page should meet them in that order. The ones for whom it is a
 * secondary zone are separated by a heading rather than dropped, because they
 * are still real answers.
 */
export default async function ZonePage({
  params,
}: {
  params: Promise<{ zone: string }>;
}) {
  const { zone: slug } = await params;
  const zone = await getZone(slug);
  if (!zone) notFound();

  const organisations = await getOrganisationsInZone(zone.id);
  const primary = organisations.filter((o) => o.isPrimary);
  const also = organisations.filter((o) => !o.isPrimary);

  return (
    <Page width={880} top={48} gap={26}>
      <Link
        href="/discover"
        className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        All Access Zones
      </Link>

      <div className="flex flex-col gap-3">
        <span className="eyebrow text-gold-700">Access Zone</span>
        <h1 className="m-0 font-display text-[34px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[46px]">
          {zone.name}
        </h1>
        <p className="m-0 max-w-[58ch] text-[18px] leading-[1.6] text-ink-70">
          {zone.focus}
        </p>
      </div>

      {organisations.length === 0 ? (
        <div className="flex flex-col items-start gap-4 rounded-card bg-surface p-7 shadow-hairline">
          <span className="flex text-gold-500">
            <Building2 size={30} strokeWidth={1.5} aria-hidden="true" />
          </span>
          <p className="m-0 max-w-[52ch] text-[17px] leading-[1.6] text-ink-70">
            Nobody is listed in this zone yet. That does not mean there is no
            help — tell us what you need and we will look across everything we
            have, not just this one zone.
          </p>
          <Link
            href="/find"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-7 py-4 text-[17px] font-bold text-white no-underline"
          >
            Tell us what you need
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      ) : (
        <>
          <OrganisationList organisations={primary} />

          {also.length > 0 ? (
            <>
              <h2 className="m-0 mt-2 font-display text-[24px] font-normal leading-[1.2]">
                Also works in this zone
              </h2>
              <OrganisationList organisations={also} />
            </>
          ) : null}
        </>
      )}
    </Page>
  );
}

function OrganisationList({
  organisations,
}: {
  organisations: Awaited<ReturnType<typeof getOrganisationsInZone>>;
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      {organisations.map((organisation) => (
        <Link
          key={organisation.id}
          href={`/organisation/${organisation.id}`}
          className="group flex gap-5 rounded-card bg-surface p-6 no-underline shadow-hairline transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-[2px] hover:shadow-panel"
        >
          {/* Always drawn, logo or not, so a row without one does not sit at
              a different indent to the rows around it. */}
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

            <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-ink-60">
              {[
                organisation.place,
                labelFor(COVERAGE, organisation.coverage),
                labelsFor(SOLUTION_KINDS, organisation.serviceKinds)
                  .slice(0, 3)
                  .join(", "),
                organisation.liveListings > 0
                  ? organisation.liveListings +
                    (organisation.liveListings === 1
                      ? " thing open"
                      : " things open")
                  : null,
              ]
                .filter(Boolean)
                .map((fact, index) => (
                  <span key={index}>{fact}</span>
                ))}
            </span>
          </span>

          <ArrowRight
            size={18}
            strokeWidth={2}
            className="mt-1 shrink-0 self-start text-gold-700 transition-transform duration-150 ease-out group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      ))}
    </div>
  );
}
