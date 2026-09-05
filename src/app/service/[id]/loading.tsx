import { SkeletonPage } from "@/components/ui/Skeleton";

/**
 * One listing, waiting.
 *
 * A single thing rather than a list, so one wide block and a couple of
 * panels under it rather than a stack of equal cards.
 */
export default function Loading() {
  return (
    <SkeletonPage label="Loading this listing" width={780} cards={2} lines={3} />
  );
}
