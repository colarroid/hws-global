import type { Metadata } from "next";
import { translatedMetadata } from "@/lib/seo";
import { QuestionShell } from "@/components/QuestionShell";
import { PlaceForm } from "@/components/find/PlaceForm";
import { getTranslator } from "@/lib/i18n";

export function generateMetadata(): Promise<Metadata> {
  return translatedMetadata({
    titleKey: "q2.title",
    descriptionKey: "meta.where.desc",
    path: "/find/where",
  });
}

/**
 * Question 2. Where to look.
 *
 * Accepts any level of precision and never demands a full postcode.
 * "Anywhere in Scotland" is a first-class answer, not a fallback, and
 * location services are never requested.
 */
export default async function WherePage({
  searchParams,
}: {
  searchParams: Promise<{ need?: string; place?: string }>;
}) {
  const [{ need = "", place = "" }, { t }] = await Promise.all([
    searchParams,
    getTranslator(),
  ]);

  return (
    <QuestionShell
      step={2}
      backHref={`/find?need=${encodeURIComponent(need)}`}
      title={t("q2.title")}
      subline={t("q2.subline")}
    >
      <PlaceForm need={need} initialPlace={place} />
    </QuestionShell>
  );
}
