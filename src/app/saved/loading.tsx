import { LoadingScreen } from "@/components/ui/LoadingScreen";

/** The saved list, waiting. Reads the account before it can show anything. */
export default function Loading() {
  return <LoadingScreen title="Getting your saved list…" count={3} />;
}
