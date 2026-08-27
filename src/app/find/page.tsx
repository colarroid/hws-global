import type { Metadata } from "next";
import { QuestionShell } from "@/components/QuestionShell";
import { NeedForm } from "@/components/find/NeedForm";

export const metadata: Metadata = { title: "What do you need help with?" };

/**
 * Question 1. What she needs, in her own words.
 *
 * The single most important detail on this screen is that the suggestions
 * render before she types. A blank box is where digital confidence bites, and
 * seeing the kind of thing that can be typed is what gets past it.
 */
export default async function NeedPage({
  searchParams,
}: {
  searchParams: Promise<{ need?: string }>;
}) {
  const { need } = await searchParams;

  return (
    <QuestionShell
      step={1}
      title="What do you need help with?"
      subline="In your own words. There's no wrong answer."
    >
      <NeedForm initialNeed={need ?? ""} />
    </QuestionShell>
  );
}
