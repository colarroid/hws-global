import type { Metadata } from "next";
import { translatedMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";
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
export default function TermsPage() {
  return <LegalPage title="Terms of use" document={TERMS} />;
}
