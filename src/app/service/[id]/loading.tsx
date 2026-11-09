import { LoadingPage } from "@/components/ui/LoadingScreen";
import { getTranslator } from "@/lib/i18n";

/**
 * One listing, waiting.
 *
 * A single thing rather than a list, so two taller blocks rather than a stack
 * of equal ones.
 */
export default async function Loading() {
  const { t } = await getTranslator();

  return (
    <LoadingPage label={t("loading.listing")} width={780} count={2} height={160} />
  );
}
