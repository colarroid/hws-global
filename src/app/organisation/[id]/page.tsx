import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  ExternalLink,
  MapPin,
  Ban,
} from "lucide-react";
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

/**
 * One section of the reading column, only rendered when there is something
 * in it.
 *
 * The rule sits above the eyebrow rather than under the heading, so a run of
 * these reads as a stack of separate things rather than one long article with
 * headings in it. On white the hairline is doing more work than it did on
 * cream, so it is the soft one.
 */
function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3 border-t border-hairline-soft pt-8 first:border-0 first:pt-0">
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

/** One line of the practical panel. */
function Fact({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[5px] border-t border-hairline-soft pt-4 first:border-0 first:pt-0">
      <dt className="eyebrow text-ink-60">{label}</dt>
      <dd className="m-0 text-[16px] leading-[1.55] text-ink">{children}</dd>
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
 * Two grounds, and the split between them is the point. The white one carries
 * who they are and what they will do for her, in one reading column with the
 * practical facts alongside rather than interleaved. The cream band at the
 * foot carries what is actually open, so the one part of the page she can act
 * on today is the one part that changes colour under her.
 *
 * "Who they cannot help" is given its own panel and is not buried. It is the
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

  // The options and the note are two different sentences and were being run
  // together: "Free, There is a cost · free for the first six months" reads
  // as a contradiction until you get to the end of it. The options say which
  // doors exist and the note says what it costs, so they get a line each.
  const costNote = organisation.costNote?.trim() || null;
  const hasFacts = Boolean(
    where || when || costs.length > 0 || costNote || routes.length > 0,
  );

  // The panel earns a column of its own only if it has something in it.
  // Otherwise the reading column takes the full width rather than sitting in
  // half a page beside nothing.
  const hasPanel = hasFacts || zones.length > 0;

  return (
    <div className="flex flex-1 flex-col bg-surface">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-5 pb-16 pt-8 sm:px-10 sm:pt-10">
        {/* A way back out. The profile is reached from a results page, a
            search or a zone, and until now the only exit was the browser. */}
        <Link
          href="/discover"
          className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
        >
          <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
          All organisations
        </Link>

        <header className="mt-4 flex flex-col gap-7">
          <div className="flex flex-wrap items-start gap-5 sm:gap-6">
            <span className="flex size-[84px] shrink-0 items-center justify-center overflow-hidden rounded-card bg-surface shadow-hairline">
              {organisation.logoUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={organisation.logoUrl}
                  alt=""
                  width={84}
                  height={84}
                  className="size-full object-contain p-2"
                />
              ) : (
                <Building2
                  size={32}
                  strokeWidth={1.5}
                  className="text-ink-40"
                  aria-hidden="true"
                />
              )}
            </span>

            <div className="flex min-w-[260px] flex-1 flex-col gap-3">
              <h1 className="m-0 font-display text-[34px] font-normal leading-[1.05] tracking-[-0.015em] sm:text-[46px]">
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
                    {labelsFor(ORGANISATION_TYPES, organisation.types).join(
                      ", ",
                    )}
                  </span>
                ) : null}
              </div>
            </div>
          </div>

          {/* The blurb is the one line she is most likely to read, so it is
              set as a line rather than as body copy. */}
          {organisation.blurb ? (
            <p className="m-0 max-w-[62ch] font-display text-[21px] font-normal leading-[1.45] text-ink sm:text-[24px]">
              {organisation.blurb}
            </p>
          ) : null}

          {/* Above the fold on a phone, because a woman who has decided is
              not served by scrolling past the whole profile to act. */}
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
        </header>

        <div
          className={[
            "mt-12 grid gap-x-16 gap-y-12 border-t border-hairline pt-10",
            hasPanel ? "lg:grid-cols-[minmax(0,1fr)_300px]" : "",
          ].join(" ")}
        >
          <div className="flex flex-col gap-8">
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

            {kinds.length > 0 ? (
              <Block title="What they offer">
                <Tags items={kinds} />
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
          </div>

          {/* The practical facts, lifted out of the reading. Somebody checking
              whether an organisation covers her island is answering one
              question, and she should not have to read three paragraphs to
              find it. Sticky on a wide screen so it stays with her as she
              reads down the column beside it. */}
          {hasPanel ? (
            <aside className="flex flex-col gap-8 self-start lg:sticky lg:top-8">
              {hasFacts ? (
                <dl className="m-0 flex flex-col gap-4 rounded-card border border-hairline bg-ground p-6">
                  {where ? <Fact label="Where">{where}</Fact> : null}
                  {when ? <Fact label="When">{when}</Fact> : null}
                  {costs.length > 0 || costNote ? (
                    <Fact label="Cost">
                      {costs.length > 0 ? costs.join(" · ") : null}
                      {costNote ? (
                        <span className="mt-[3px] block text-[15px] leading-[1.5] text-ink-70">
                          {costNote}
                        </span>
                      ) : null}
                    </Fact>
                  ) : null}
                  {routes.length > 0 ? (
                    <Fact label="How to reach them">{routes.join(", ")}</Fact>
                  ) : null}
                </dl>
              ) : null}

              {zones.length > 0 ? (
                <div className="flex flex-col gap-3">
                  <h2 className="m-0 eyebrow text-ink-60">Access Zones</h2>
                  {/* Stacked rather than wrapped. A zone name is long and the
                      column is narrow, so chips in a row would break mid-name
                      and the marker on the main one would land on its own
                      line half the time anyway. */}
                  <div className="flex flex-col gap-2">
                    {zones.map((zone) => (
                      <Link
                        key={zone.slug}
                        href={`/discover/${zone.slug}`}
                        className="flex flex-col gap-[2px] rounded-pill-sm bg-ground px-[13px] py-[9px] text-[15px] font-semibold text-ink no-underline shadow-hairline transition-[box-shadow] duration-150 ease-out hover:shadow-hairline-gold"
                      >
                        <span className="leading-[1.35]">{zone.name}</span>
                        {zone.isPrimary ? (
                          <span className="text-[13px] font-medium text-ink-60">
                            Their main one
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          ) : null}
        </div>
      </div>

      {/* The cream band, as it was. Everything above is reference; this is the
          part she can do something about today, and the change of ground is
          what says so.

          It takes the slack on a short profile rather than leaving a strip of
          white under it, so the band always closes the page. */}
      <div className="flex flex-1 flex-col border-t border-hairline bg-ground">
        <div className="mx-auto w-full max-w-[1080px] px-5 py-14 sm:px-10 sm:py-16">
          <section id="open" className="flex flex-col gap-4">
            <h2 className="m-0 eyebrow text-ink-60">
              {listings.length === 0 ? "Nothing open right now" : "Open now"}
            </h2>

            {listings.length === 0 ? (
              <p className="m-0 max-w-[58ch] text-[17px] leading-[1.6] text-ink-70">
                They have nothing running at the moment. Tell us what you need
                and we will look across every organisation, not just this one.
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
              className="mt-1 inline-flex min-h-[44px] items-center gap-2 self-start p-1 text-[16px] font-bold text-gold-700 no-underline"
            >
              Or tell us what you need and we will match you
              <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
