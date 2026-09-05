import { Page } from "@/components/ui/Page";
import { LoadingBlocks } from "@/components/ui/LoadingScreen";

/**
 * Screen 4. Working it out.
 *
 * Streamed while the search runs, and gone the moment it resolves, so under a
 * second she never sees it. It is not a route, which is what stops a reload
 * mid-search trapping her on a loading screen with nowhere to go.
 *
 * A named wait rather than a spinner: a spinner could mean anything, and on a
 * patchy connection "anything" reads as broken. This is the one screen with
 * words on it, because this is the one wait somebody is actually sitting
 * through: she has just answered three questions and is waiting on the
 * answer. Everywhere else is a page fetch, and a sentence there is something
 * to read in the half second before it is replaced.
 *
 * The blocks come from the shared kit so the colours stay in one place. The
 * screen is otherwise exactly as it was.
 */
export default function Loading() {
  return (
    <Page width={780} top={96}>
      <h1
        aria-live="polite"
        className="m-0 font-display text-[30px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[44px] sm:leading-[1.1]"
      >
        Looking for support…
      </h1>

      <LoadingBlocks count={3} />

      <p className="m-0 text-[17px] leading-[1.6] text-ink-70">
        This usually takes a couple of seconds.
      </p>
    </Page>
  );
}
