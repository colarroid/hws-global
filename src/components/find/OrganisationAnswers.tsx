import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import type { RankedOrganisation } from "@/lib/search/rankOrganisations";

/**
 * Organisations offered under the listings.
 *
 * A deliberately quieter block than the result cards. What is above is a
 * specific thing with a date and a way in; this is "these people can help
 * with this", which is a real answer and a weaker one. Making the two look
 * the same would flatten that difference and send her to the general answer
 * when a specific one was sitting above it.
 *
 * The reason is shown here too. A woman is owed the same explanation for an
 * organisation appearing as for a listing, and it is written from the same
 * factors that scored it.
 */
export function OrganisationAnswers({
  organisations,
}: {
  organisations: RankedOrganisation[];
}) {
  return (
    <section className="flex flex-col gap-4 border-t border-hairline pt-7">
      <div className="flex flex-col gap-[6px]">
        <h2 className="m-0 font-display text-[24px] font-normal leading-[1.2] sm:text-[28px]">
          These people can help too
        </h2>
        <p className="m-0 max-w-[58ch] text-[16px] leading-[1.55] text-ink-70">
          Organisations working on what you asked about. They may not have
          anything open right now, but you can go to them directly.
        </p>
      </div>

      <div className="flex flex-col gap-[14px]">
        {organisations.map(({ organisation, why }) => (
          <Link
            key={organisation.id}
            href={`/organisation/${organisation.id}`}
            className="group flex gap-5 rounded-card bg-surface p-6 no-underline shadow-hairline transition-[box-shadow,transform] duration-150 ease-out hover:-translate-y-[2px] hover:shadow-panel"
          >
            <span className="flex size-[52px] shrink-0 items-center justify-center overflow-hidden rounded-control bg-ground">
              {organisation.logoUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={organisation.logoUrl}
                  alt=""
                  width={52}
                  height={52}
                  loading="lazy"
                  className="size-full object-contain"
                />
              ) : (
                <Building2
                  size={22}
                  strokeWidth={1.5}
                  className="text-ink-40"
                  aria-hidden="true"
                />
              )}
            </span>

            <span className="flex min-w-0 flex-1 flex-col gap-2">
              <span className="font-display text-[20px] font-normal leading-[1.25] text-ink">
                {organisation.name}
              </span>

              {organisation.blurb ? (
                <span className="text-[16px] leading-[1.55] text-ink-70">
                  {organisation.blurb}
                </span>
              ) : null}

              <span className="text-[15px] leading-[1.5] text-ink-65">
                <span className="font-semibold text-ink">
                  Why this matched you:
                </span>{" "}
                {why}
              </span>

              {organisation.liveListings > 0 ? (
                <span className="text-[14px] text-ink-60">
                  {organisation.liveListings === 1
                    ? "1 thing open"
                    : `${organisation.liveListings} things open`}
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
        ))}
      </div>
    </section>
  );
}
