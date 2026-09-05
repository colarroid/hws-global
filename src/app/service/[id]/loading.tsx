import { LoadingPage } from "@/components/ui/LoadingScreen";

/**
 * One listing, waiting.
 *
 * A single thing rather than a list, so two taller blocks rather than a stack
 * of equal ones.
 */
export default function Loading() {
  return (
    <LoadingPage label="Loading this listing" width={780} count={2} height={160} />
  );
}
