import Link from "next/link";
import { Phone, TriangleAlert } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { getService } from "@/lib/data/service";

/**
 * Contact our support, and the "something wrong?" reporting loop.
 *
 * Reached from three places: the no-match screen, a closed listing, and the
 * report link on every service page. All three are moments where the
 * platform has run out of things it can do on its own, so this page has to
 * reach a person rather than another search.
 *
 * The emergency line sits above everything else. The brief is explicit that
 * the platform must distinguish navigation from crisis support, and must
 * never imply HWS is monitoring anyone or providing an emergency response.
 */
export default async function HelpPage({
  searchParams,
}: {
  searchParams: Promise<{ about?: string }>;
}) {
  const { about } = await searchParams;
  const service = about ? await getService(about) : null;

  return (
    <Page width={660} top={56} gap={26}>
      <div className="flex flex-col gap-[10px]">
        <h1 className="m-0 font-display text-[30px] font-medium leading-[1.15] tracking-[-0.01em] sm:text-[42px] sm:leading-[1.1]">
          Talk to a person
        </h1>
        <p className="m-0 max-w-[62ch] text-[18px] leading-[1.6] text-ink-70">
          If you cannot find what you need, or something here looks wrong, we
          would rather hear from you than have you give up on it.
        </p>
      </div>

      {/* Never buried. This is the one thing on the page that cannot wait. */}
      <div className="flex flex-col gap-2 rounded-card border border-red-200 bg-red-50 px-[22px] py-5">
        <span className="inline-flex items-center gap-2 text-[16px] font-bold text-red-700">
          <TriangleAlert size={18} strokeWidth={2} aria-hidden="true" />
          If you are in danger right now
        </span>
        <p className="m-0 text-[16px] leading-[1.6] text-red-700">
          Call 999. We are not an emergency service, nobody here is monitoring
          this page, and we cannot help quickly enough if you are at risk.
        </p>
      </div>

      {service ? (
        <div className="flex flex-col gap-2 rounded-card border border-ring bg-surface px-[22px] py-5">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-60">
            About this listing
          </span>
          <Link
            href={`/service/${service.id}`}
            className="text-[19px] font-bold leading-[1.3] text-ink no-underline hover:underline"
          >
            {service.name}
          </Link>
          <p className="m-0 text-[16px] leading-[1.6] text-ink-70">
            Tell us what is out of date and we will check it with{" "}
            {service.organisationName}. Women spot a wrong date long before we
            do, and the date on that card is the whole reason it can be
            trusted.
          </p>
        </div>
      ) : null}

      <div className="flex flex-col items-start gap-3 rounded-card bg-ink p-6 text-white">
        <span className="text-[19px] font-bold">Contact our support</span>
        <p className="m-0 max-w-[62ch] text-[16px] leading-[1.6] text-white/75">
          We can help with almost anything, and might know who else to ask. If
          what you need is not on the platform yet, telling us is how it gets
          there.
        </p>
        <span className="inline-flex min-h-[44px] items-center gap-2 rounded-control bg-surface px-5 py-3 text-[16px] font-bold text-ink">
          <Phone size={17} strokeWidth={2} aria-hidden="true" />
          Phone number to be confirmed
        </span>
        <span className="text-[14px] text-white/75">
          Free, Monday to Friday. Hours to be confirmed.
        </span>
      </div>

      {/* Honesty about limits, in the place where it matters most. */}
      <div className="flex flex-col gap-2 border-t border-hairline pt-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-60">
          What we cannot do
        </span>
        <p className="m-0 max-w-[62ch] text-[16px] leading-[1.6] text-ink-70">
          We cannot decide whether you qualify for anything, and we do not
          apply on your behalf. Each organisation decides that themselves. What
          we can do is help you work out where to go next.
        </p>
      </div>

      <Link
        href="/find"
        className="self-start p-1 text-[16px] font-bold text-gold-700 no-underline"
      >
        Back to search
      </Link>
    </Page>
  );
}
