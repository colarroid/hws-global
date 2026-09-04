import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ExternalLink,
  MapPin,
  Ban,
} from "lucide-react";
import { Page } from "@/components/ui/Page";
import {
  getOrganisationProfile,
  getZonesForOrganisation,
  getListingsForOrganisation,
} from "@/lib/data/discover";
import { trackOrganisation } from "@/lib/track";
import {
  AUDIENCES,
  AVAILABILITY,
  COSTS,
  COVERAGE,
  FORMATS,
  ORGANISATION_TYPES,
  SOLUTION_KINDS,
  labelFor,
  labelsFor,
} from "@/lib/design/taxonomy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const organisation = await getOrganisationProfile(id);
  if (!organisation) return { title: "Not found" };

  return {
    title: `${organisation.name} · HWS Path Grid`,
    description: organisation.blurb ?? organisation.mission ?? undefined,
  };
}

/** A block of the page, only rendered when there is something in it. */
function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3 border-t border-hairline pt-7">
      <h2 className="m-0 eyebrow text-ink-60">{title}</h2>
      {children}
    </section>
  );
}

function Prose({ children }: { children: string }) {
  return (
    <p className="m-0 max-w-[62ch] text-[17px] leading-[1.65] text-ink">
      {children}
    </p>
  );
}

function Tags({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-pill-sm bg-gold-200 px-[13px] py-[8px] text-[15px] font-semibold text-gold-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/**
 * One organisation, as a woman reads it.
 *
 * Reads a view that lists its columns out one by one. The organisations table
 * holds a named contact's phone number and whatever an admin wrote when
 * declining somebody, so nothing arrives here that was not deliberately let
 * through. An unverified organisation is absent from that view entirely,
 * which is why this 404s rather than showing an empty page: not yet checked
 * and does not exist should look the same from outside.
 *
 * "Who they cannot help" is given its own block and is not buried. It is the
 * one thing on the page that can save her an afternoon.
 */
export default async function OrganisationProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const organisation = await getOrganisationProfile(id);
  if (!organisation) notFound();

  const [zones, listings] = await Promise.all([
    getZonesForOrganisation(organisation.id),
    getListingsForOrganisation(organisation.id),
  ]);

  // Counted for the organisation's own overview. A date and a count, nothing
  // that could say who was here.
  await trackOrganisation(organisation.id, "profile_view");

  const kinds = labelsFor(SOLUTION_KINDS, organisation.serviceKinds);
  const routes = labelsFor(FORMATS, organisation.accessRoutes);
  const costs = labelsFor(COSTS, organisation.costOptions);
  const audiences = [
    ...labelsFor(AUDIENCES, organisation.audiences),
    ...(organisation.audiencesOther ? [organisation.audiencesOther] : []),
  ];

  const where = [
    labelFor(COVERAGE, organisation.coverage),
    organisation.coverageNote,
  ]
    .filter(Boolean)
    .join(" · ");

  const when = [
    labelFor(AVAILABILITY, organisation.availability),
    organisation.availabilityNote,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <Page width={820} top={48} gap={28}>
      <div className="flex flex-wrap items-start gap-5">
        <span className="flex size-[76px] shrink-0 items-center justify-center overflow-hidden rounded-card bg-surface shadow-hairline">
          {organisation.logoUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={organisation.logoUrl}
              alt=""
              width={76}
              height={76}
              className="size-full object-contain p-2"
            />
          ) : (
            <Building2
              size={30}
              strokeWidth={1.5}
              className="text-ink-40"
              aria-hidden="true"
            />
          )}
        </span>

        <div className="flex min-w-[260px] flex-1 flex-col gap-3">
          <h1 className="m-0 font-display text-[34px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[44px]">
            {organisation.name}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[16px] text-ink-70">
            <span className="flex items-center gap-[6px] font-semibold text-green-700">
              <BadgeCheck size={17} strokeWidth={2} aria-hidden="true" />
              Checked by HWS
            </span>
            {organisation.place ? (
              <span className="flex items-center gap-[6px]">
                <MapPin size={16} strokeWidth={2} aria-hidden="true" />
                {organisation.place}
              </span>
            ) : null}
            {organisation.types.length > 0 ? (
              <span>
                {labelsFor(ORGANISATION_TYPES, organisation.types).join(", ")}
              </span>
            ) : null}
          </div>

          {organisation.blurb ? (
            <p className="m-0 max-w-[58ch] text-[18px] leading-[1.6] text-ink-70">
              {organisation.blurb}
            </p>
          ) : null}
        </div>
      </div>

      {/* Above the fold on a phone, because a woman who has decided is not
          served by scrolling past the whole profile to act. */}
      <div className="flex flex-wrap gap-3">
        {listings.length > 0 ? (
          <a
            href="#open"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-7 py-4 text-[17px] font-bold text-white no-underline"
          >
            {listings.length === 1
              ? "See what is open"
              : `See all ${listings.length} things open`}
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </a>
        ) : null}

        {organisation.website ? (
          <a
            href={organisation.website}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-surface px-7 py-4 text-[17px] font-bold text-ink no-underline shadow-hairline transition-[box-shadow] duration-150 ease-out hover:shadow-hairline-gold"
          >
            Their website
            <ExternalLink size={17} strokeWidth={2} aria-hidden="true" />
          </a>
        ) : null}
      </div>

      {organisation.mission ? (
        <Block title="What they do">
          <Prose>{organisation.mission}</Prose>
          {organisation.uniqueOffer ? (
            <p className="m-0 max-w-[62ch] text-[17px] leading-[1.65] text-ink-70">
              {organisation.uniqueOffer}
            </p>
          ) : null}
        </Block>
      ) : null}

      {audiences.length > 0 ? (
        <Block title="Who they work with">
          <Tags items={audiences} />
        </Block>
      ) : null}

      {organisation.eligibility ? (
        <Block title="Who they can help">
          <Prose>{organisation.eligibility}</Prose>
        </Block>
      ) : null}

      {organisation.notEligible ? (
        <section className="flex gap-3 rounded-card border border-red-200 bg-red-50 p-6">
          <Ban
            size={20}
            strokeWidth={2}
            className="mt-[3px] shrink-0 text-red-700"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-1">
            <span className="text-[16px] font-bold text-red-700">
              Who they cannot help
            </span>
            <p className="m-0 max-w-[58ch] text-[16px] leading-[1.6] text-red-700">
              {organisation.notEligible}
            </p>
          </div>
        </section>
      ) : null}

      {kinds.length > 0 || routes.length > 0 || costs.length > 0 ? (
        <Block title="What they offer">
          <div className="flex flex-col gap-4">
            {kinds.length > 0 ? <Tags items={kinds} /> : null}
            {routes.length > 0 ? (
              <p className="m-0 text-[16px] leading-[1.6] text-ink-70">
                <strong className="font-semibold text-ink">How to reach them:</strong>{" "}
                {routes.join(", ")}
              </p>
            ) : null}
            {costs.length > 0 ? (
              <p className="m-0 text-[16px] leading-[1.6] text-ink-70">
                <strong className="font-semibold text-ink">Cost:</strong>{" "}
                {[costs.join(", "), organisation.costNote]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            ) : null}
          </div>
        </Block>
      ) : null}

      {where || when ? (
        <Block title="Where and when">
          {where ? (
            <p className="m-0 text-[17px] leading-[1.6] text-ink">{where}</p>
          ) : null}
          {when ? (
            <p className="m-0 text-[17px] leading-[1.6] text-ink-70">{when}</p>
          ) : null}
        </Block>
      ) : null}

      {zones.length > 0 ? (
        <Block title="Access Zones">
          <div className="flex flex-wrap gap-2">
            {zones.map((zone) => (
              <Link
                key={zone.slug}
                href={`/discover/${zone.slug}`}
                className="rounded-pill-sm bg-surface px-[13px] py-[8px] text-[15px] font-semibold text-ink no-underline shadow-hairline transition-[box-shadow] duration-150 ease-out hover:shadow-hairline-gold"
              >
                {zone.name}
                {zone.isPrimary ? (
                  <span className="text-ink-60"> · their main one</span>
                ) : null}
              </Link>
            ))}
          </div>
        </Block>
      ) : null}

      <section id="open" className="flex flex-col gap-4 border-t border-hairline pt-7">
        <h2 className="m-0 eyebrow text-ink-60">
          {listings.length === 0 ? "Nothing open right now" : "Open now"}
        </h2>

        {listings.length === 0 ? (
          <p className="m-0 max-w-[58ch] text-[17px] leading-[1.6] text-ink-70">
            They have nothing running at the moment. Tell us what you need and
            we will look across every organisation, not just this one.
          </p>
        ) : (
          <div className="flex flex-col gap-[14px]">
            {listings.map((listing) => (
              <Link
                key={listing.id}
                href={`/service/${listing.id}`}
                className="group flex items-start justify-between gap-4 rounded-card bg-surface p-6 no-underline shadow-hairline transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-[2px] hover:shadow-panel"
              >
                <span className="flex min-w-0 flex-col gap-2">
                  <span className="font-display text-[20px] font-normal leading-[1.25] text-ink">
                    {listing.name}
                  </span>
                  {listing.blurb ? (
                    <span className="text-[16px] leading-[1.55] text-ink-70">
                      {listing.blurb}
                    </span>
                  ) : null}
                  <span className="text-[14px] text-ink-60">
                    {[
                      labelFor(SOLUTION_KINDS, listing.kind),
                      labelFor(COSTS, listing.cost),
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  strokeWidth={2}
                  className="mt-1 shrink-0 text-gold-700 transition-transform duration-150 ease-out group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        )}

        <Link
          href="/find"
          className="inline-flex min-h-[44px] items-center gap-2 self-start p-1 text-[16px] font-bold text-gold-700 no-underline"
        >
          Or tell us what you need and we will match you
          <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
        </Link>
      </section>
    </Page>
  );
}
