import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { QuestionShell } from "@/components/QuestionShell";
import { NeedForm } from "@/components/find/NeedForm";
import { getNeedSuggestions } from "@/lib/data/search";
import { getTranslator } from "@/lib/i18n";

export const metadata: Metadata = pageMetadata({
  title: "What do you need help with?",
  description:
    "Tell us what you need in your own words. Three questions, no account needed, and we look across every organisation in Scotland we have checked.",
  path: "/find",
  indexable: true,
});

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
  const [{ need }, suggestions, { t }] = await Promise.all([
    searchParams,
    getNeedSuggestions(),
    getTranslator(),
  ]);

  return (
    <QuestionShell
      step={1}
      title={t("q1.title")}
      subline={t("q1.subline")}
    >
      <NeedForm initialNeed={need ?? ""} suggestions={suggestions} />
    </QuestionShell>
  );
}
