import { Page } from "@/components/ui/Page";

/**
 * Screen 4. Working it out.
 *
 * Streamed while the search runs, and gone the moment it resolves, so under a
 * second she never sees it. It is not a route, which is what stops a reload
 * mid-search trapping her on a loading screen with nowhere to go.
 *
 * A named wait rather than a spinner: a spinner could mean anything, and on a
 * patchy connection "anything" reads as broken.
 */
export default function Loading() {
  return (
    <Page width={780} top={96}>
      <h1
        aria-live="polite"
        className="m-0 font-display text-[30px] font-medium leading-[1.15] tracking-[-0.01em] sm:text-[44px] sm:leading-[1.1]"
      >
        Looking for support…
      </h1>

      <div className="flex flex-col gap-[14px]" aria-hidden="true">
        <div className="h-[120px] rounded-card bg-sage-200" />
        <div className="h-[120px] rounded-card bg-gold-200" />
        <div className="h-[120px] rounded-card bg-surface-subtle" />
      </div>

      <p className="m-0 text-[17px] leading-[1.6] text-ink-70">
        This usually takes a couple of seconds.
      </p>
    </Page>
  );
}
