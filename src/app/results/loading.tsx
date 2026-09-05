import { LoadingScreen } from "@/components/ui/LoadingScreen";

/**
 * Screen 4. Working it out.
 *
 * Streamed while the search runs, and gone the moment it resolves, so under a
 * second she never sees it. It is not a route, which is what stops a reload
 * mid-search trapping her on a loading screen with nowhere to go.
 *
 * A named wait rather than a spinner: a spinner could mean anything, and on a
 * patchy connection "anything" reads as broken.
 *
 * The screen is unchanged; it now comes from the shared component, because
 * this was the pattern every other wait on the platform was made to follow.
 */
export default function Loading() {
  return <LoadingScreen title="Looking for support…" />;
}
