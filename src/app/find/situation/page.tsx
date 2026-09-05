import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { QuestionShell } from "@/components/QuestionShell";
import { SituationForm } from "@/components/find/SituationForm";
import { getSituations } from "@/lib/data/situations";

export const metadata: Metadata = pageMetadata({
  title: "What best describes your situation?",
  description:
    "Pick anything that fits. It changes what we put in front of you.",
  path: "/find/situation",
});

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
  const { need = "", place = "", situations = "" } = await searchParams;
  const options = await getSituations();

  return (
    <QuestionShell
      step={3}
      backHref={`/find/where?need=${encodeURIComponent(need)}&place=${encodeURIComponent(place)}`}
      title="What best describes your situation?"
      subline="This helps us spot support you may qualify for. You can pick more than one."
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
