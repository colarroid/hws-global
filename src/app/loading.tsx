import { LoadingPage } from "@/components/ui/LoadingScreen";

/**
 * The wait, for every route that does not name its own.
 *
 * Sitting at the root means the header and the language stay put while it
 * shows: only the middle of the page is waiting, which is both truthful and
 * far less alarming than a screen that empties.
 *
 * Deliberately generic. A shape that guesses wrong makes the real page look
 * like it moved, so this commits to nothing more than a heading and some
 * things underneath, which every screen here has.
 */
export default function Loading() {
  return <LoadingPage label="Loading this page" />;
}
