import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Page } from "@/components/ui/Page";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Start over, confirmed once.
 *
 * The only destructive control in the woman-facing flow. It confirms because
 * losing three answers to a mis-tap on a phone is a small disaster for
 * someone with twenty minutes between appointments, and it confirms only
 * once because a second prompt would be nagging rather than care.
 *
 * Saved items are untouched. Only the answers go.
 */
export default async function StartOverPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const params = await searchParams;
  const back = new URLSearchParams(
    Object.entries(params).filter(([, v]) => v) as [string, string][],
  );

  return (
    <Page width={520} top={72} gap={24}>
      <Link
        href={`/results?${back}`}
        className="inline-flex min-h-[44px] items-center gap-[6px] self-start text-[14px] font-bold text-ink no-underline"
      >
        <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        Back to results
      </Link>

      <h1 className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[38px] sm:leading-[1.1]">
        This clears your answers. Start again?
      </h1>

      <p className="m-0 max-w-[62ch] text-[17px] leading-[1.6] text-ink-70">
        Anything you have saved stays where it is. Only what you told us about
        what you need goes.
      </p>

      <div className="flex flex-col gap-3">
        <ButtonLink href="/find">Yes, start again</ButtonLink>
        <ButtonLink
          href={`/results?${back}`}
          variant="secondary"
          className="w-full"
        >
          Keep my answers
        </ButtonLink>
      </div>
    </Page>
  );
}
