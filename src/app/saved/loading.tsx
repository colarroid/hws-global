import { LoadingPage } from "@/components/ui/LoadingScreen";
import { getTranslator } from "@/lib/i18n";

/** The saved list, waiting. Reads the account before it can show anything. */
export default async function Loading() {
  const { t } = await getTranslator();

  return <LoadingPage label={t("loading.saved")} width={780} count={3} />;
}
