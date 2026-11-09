import type { Metadata } from "next";
import { translatedMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";
import { getTranslator } from "@/lib/i18n";
import { PRIVACY } from "@/lib/design/legal";

export function generateMetadata(): Promise<Metadata> {
  return translatedMetadata({
    titleKey: "footer.privacy",
    descriptionKey: "meta.privacy.desc",
    path: "/privacy",
    indexable: true,
  });
}

/**
 * The privacy policy.
 *
 * The wording lives in lib/design/legal.ts. This file only says which
 * document it is.
 */
export default async function PrivacyPage() {
  const { t } = await getTranslator();
  return <LegalPage title={t("footer.privacy")} which="privacy" document={PRIVACY} />;
}
