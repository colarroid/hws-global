import { LoadingPage } from "@/components/ui/LoadingScreen";

/** The saved list, waiting. Reads the account before it can show anything. */
export default function Loading() {
  return <LoadingPage label="Loading your saved list" width={780} count={3} />;
}
