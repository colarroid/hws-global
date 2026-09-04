import type { Metadata } from "next";
import { QuestionShell } from "@/components/QuestionShell";
import { NeedForm } from "@/components/find/NeedForm";
import { getNeedSuggestions } from "@/lib/data/search";

export const metadata: Metadata = { title: "What do you need help with?" };

/**
 * Question 1. What she needs, in her own words.
 *
 * The single most important detail on this screen is that the suggestions
 * render before she types. A blank box is where digital confidence bites, and
 * seeing the kind of thing that can be typed is what gets past it.
 *
 * They are computed from what the platform actually holds rather than written
 * down here, so pressing one never lands her on an empty results page. A
 * suggestion that finds nothing teaches her the platform is empty, which is
 * the opposite of what this screen is for.
 */
export default async function NeedPage({
  searchParams,
}: {
  searchParams: Promise<{ need?: string }>;
}) {
  const [{ need }, suggestions] = await Promise.all([
    searchParams,
    getNeedSuggestions(),
  ]);

  return (
    <QuestionShell
      step={1}
      title="What do you need help with?"
      subline="In your own words. There's no wrong answer."
    >
      <NeedForm initialNeed={need ?? ""} suggestions={suggestions} />
    </QuestionShell>
  );
}
