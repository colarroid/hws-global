import { SkeletonPage } from "@/components/ui/Skeleton";

/** The saved list, waiting. Reads the account before it can show anything. */
export default function Loading() {
  return <SkeletonPage label="Loading your saved list" width={780} cards={3} />;
}
