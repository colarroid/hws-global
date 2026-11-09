import type { Metadata } from "next";
import { translatedMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";
import { getTranslator } from "@/lib/i18n";
import { TERMS } from "@/lib/design/legal";

export function generateMetadata(): Promise<Metadata> {
  return translatedMetadata({
    titleKey: "footer.terms",
    descriptionKey: "meta.terms.desc",
    path: "/terms",
    indexable: true,
  });
}

/**
 * The terms of use.
 *
 * The wording lives in lib/design/legal.ts. This file only says which
 * document it is.
 */
export default async function TermsPage() {
  const { t } = await getTranslator();
  return <LegalPage title={t("footer.terms")} which="terms" document={TERMS} />;
}
