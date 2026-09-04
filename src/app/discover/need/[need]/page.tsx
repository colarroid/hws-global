import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building2 } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { OrganisationRow } from "@/components/discover/OrganisationRow";
import { getNeed, getOrganisationsForNeed } from "@/lib/data/discover";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ need: string }>;
}): Promise<Metadata> {
  const { need: slug } = await params;
  const need = await getNeed(slug);
  if (!need) return { title: "Not found" };

  return {
    title: `${need.label} · organisations in Scotland`,
    description: `Organisations across Scotland working on ${need.label.toLowerCase()}.`,
  };
}

/**
 * Everyone who can help with one need.
 *
 * The counterpart to the zone pages, and the one a woman is more likely to
 * use. A zone is where an organisation lives; a need is what she came for,
 * and an organisation appears here because HWS said it can help with this
 * rather than because it filed itself under it.
 *
 * Ordered by whether anything is open. Somebody who has come this far wants a
 * next step, and one that exists beats one that might.
 */
export default async function NeedPage({
  params,
}: {
  params: Promise<{ need: string }>;
}) {
  const { need: slug } = await params;
  const need = await getNeed(slug);
  if (!need) notFound();

  const organisations = await getOrganisationsForNeed(slug);

  return (
    <Page width={1180} top={48} gap={26}>
      <Link
        href="/discover"
        className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        Everything you can browse
      </Link>

      <div className="flex flex-col gap-3">
        <span className="eyebrow text-gold-700">What you need</span>
        <h1 className="m-0 font-display text-[34px] font-normal leading-[1.1] tracking-[-0.01em] sm:text-[46px]">
          {need.label}
        </h1>
        <p className="m-0 max-w-[58ch] text-[18px] leading-[1.6] text-ink-70">
          {organisations.length === 0
            ? "Nobody is listed against this yet."
            : `${organisations.length} organisation${organisations.length === 1 ? "" : "s"} across Scotland work on this. The ones with something open are first.`}
        </p>
      </div>

      {organisations.length === 0 ? (
        <div className="flex flex-col items-start gap-4 rounded-card bg-surface p-7 shadow-hairline">
          <span className="flex text-gold-500">
            <Building2 size={30} strokeWidth={1.5} aria-hidden="true" />
          </span>
          <p className="m-0 max-w-[52ch] text-[17px] leading-[1.6] text-ink-70">
            Nobody is listed against this yet. That does not mean there is no
            help. Tell us what you need in your own words and we will look across
            everything we have.
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
        <div className="flex flex-col gap-[14px]">
          {organisations.map((organisation) => (
            <OrganisationRow key={organisation.id} organisation={organisation} />
          ))}
        </div>
      )}
    </Page>
  );
}
