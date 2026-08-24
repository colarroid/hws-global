import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { getService, applyHost } from "@/lib/data/service";

/**
 * The handover interstitial.
 *
 * The last screen the platform controls. Its whole job is that she is not
 * surprised: she is told whose site she is about to land on, what she will
 * find there, and what this platform can and cannot do for her once she has
 * gone.
 *
 * It is a real page rather than a modal so that back works, and so the
 * handover is somewhere in her history if she wants to retrace it.
 */
export default async function HandoverPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = await getService(id);

  if (!service || !service.apply_url) notFound();

  const host = applyHost(service.apply_url);

  return (
    <Page width={620} top={72} gap={24}>
      <Link
        href={`/service/${service.id}`}
        className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        Back
      </Link>

      <div className="flex flex-col gap-3">
        <h1 className="m-0 font-display text-[30px] font-medium leading-[1.15] tracking-[-0.01em] sm:text-[38px] sm:leading-[1.1]">
          You&apos;re leaving to apply
        </h1>
        <p className="m-0 max-w-[62ch] text-[18px] leading-[1.6] text-ink-70">
          {service.name} is run by {service.organisationName}, and you apply on
          their own website{host ? `, ${host}` : ""}.
        </p>
      </div>

      {service.what_to_expect ? (
        <div className="flex flex-col gap-2 rounded-card bg-gold-200 px-[22px] py-5">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-700">
            What happens next
          </span>
          <p className="m-0 text-[16px] leading-[1.6] text-gold-700">
            {service.what_to_expect}
          </p>
        </div>
      ) : null}

      <a
        href={service.apply_url}
        rel="noopener noreferrer"
        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-control bg-ink px-8 py-[19px] text-[18px] font-bold text-white no-underline"
      >
        Continue{host ? ` to ${host}` : ""}
        <ExternalLink size={18} strokeWidth={2} aria-hidden="true" />
      </a>

      <div className="flex flex-col gap-2 border-t border-hairline pt-5">
        <p className="m-0 max-w-[62ch] text-[15px] leading-[1.6] text-ink-60">
          From here on you are dealing with {service.organisationName} directly.
          We don&apos;t see what you send them, and we can&apos;t decide whether
          you qualify, so if you are unsure it is worth asking them before you
          fill anything in.
        </p>
        <Link
          href={`/service/${service.id}`}
          className="self-start p-1 text-[15px] font-bold text-gold-700 no-underline"
        >
          Read the details again first
        </Link>
      </div>
    </Page>
  );
}
