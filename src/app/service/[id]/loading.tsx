import { LoadingScreen } from "@/components/ui/LoadingScreen";

/**
 * One listing, waiting.
 *
 * A single thing rather than a list, so one tall block and a shorter one
 * under it rather than a stack of equal ones.
 */
export default function Loading() {
  return <LoadingScreen title="Opening this listing…" count={2} height={150} />;
}
