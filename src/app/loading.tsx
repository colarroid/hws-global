import { LoadingScreen } from "@/components/ui/LoadingScreen";

/**
 * The wait, for every route that does not name its own.
 *
 * At the root, so the header, the footer and the language stay put while it
 * shows: only the middle of the page is waiting, which is both truthful and
 * far less alarming than a screen that empties.
 *
 * The wording is the vaguest on the site, because this stands in for any
 * screen. Anywhere the wait can be named properly, it is named in that
 * route's own loading.tsx instead.
 */
export default function Loading() {
  return <LoadingScreen title="One moment…" count={2} />;
}
