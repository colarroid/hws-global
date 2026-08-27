import type { Metadata } from "next";
import { QuestionShell } from "@/components/QuestionShell";
import { PlaceForm } from "@/components/find/PlaceForm";

export const metadata: Metadata = { title: "Where should we look for support?" };

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
  const { need = "", place = "" } = await searchParams;

  return (
    <QuestionShell
      step={2}
      backHref={`/find?need=${encodeURIComponent(need)}`}
      title="Where should we look for support?"
      subline="A town, a postcode, or your council area."
    >
      <PlaceForm need={need} initialPlace={place} />
    </QuestionShell>
  );
}
