import type { Metadata } from "next";
import { translatedMetadata } from "@/lib/seo";
import { QuestionShell } from "@/components/QuestionShell";
import { SituationForm } from "@/components/find/SituationForm";
import { getSituations } from "@/lib/data/situations";
import { getTranslator } from "@/lib/i18n";

export function generateMetadata(): Promise<Metadata> {
  return translatedMetadata({
    titleKey: "q3.title",
    descriptionKey: "meta.situation.desc",
    path: "/find/situation",
  });
}

/**
 * Question 3. Her situation.
 *
 * Unlocks eligibility-based matches without feeling like a means test. Every
 * chip is optional and Next always proceeds, including with nothing picked.
 */
export default async function SituationPage({
  searchParams,
}: {
  searchParams: Promise<{ need?: string; place?: string; situations?: string }>;
}) {
  const [{ need = "", place = "", situations = "" }, options, { t }] =
    await Promise.all([searchParams, getSituations(), getTranslator()]);

  return (
    <QuestionShell
      step={3}
      backHref={`/find/where?need=${encodeURIComponent(need)}&place=${encodeURIComponent(place)}`}
      title={t("q3.title")}
      subline={t("q3.subline")}
      width={780}
    >
      <SituationForm
        need={need}
        place={place}
        options={options}
        initial={situations ? situations.split(",").filter(Boolean) : []}
      />
    </QuestionShell>
  );
}
