import "server-only";
import { createClient } from "@/lib/supabase/server";
import { getVocabulary, translated, translatedOrNull } from "@/lib/data/vocabulary";

export type Situation = {
  id: string;
  slug: string;
  label: string;
  match_phrase: string | null;
};

/**
 * The twelve chips on question 3.
 *
 * Includes "Prefer not to say", which is `woman_only`: an answer she can
 * give, but never a tag a listing can hold. The organisation side reads the
 * same table with that one filtered out, so the lists cannot drift apart.
 */
export async function getSituations(): Promise<Situation[]> {
  const supabase = await createClient();
  const [{ data, error }, vocabulary] = await Promise.all([
    supabase
      .from("situations")
      .select("id, slug, label, match_phrase")
      .is("retired_at", null)
      .order("sort_order"),
    getVocabulary(),
  ]);

  if (error) throw error;

  /* Resolved here rather than at every call site, so a chip, the answer
     shown back to her and the match reason cannot end up in three
     different languages. See lib/data/vocabulary.ts. */
  return (data ?? []).map((situation) => ({
    ...situation,
    label: translated(vocabulary, "situation", situation.slug, "label", situation.label),
    match_phrase: translatedOrNull(
      vocabulary,
      "situation",
      situation.slug,
      "match_phrase",
      situation.match_phrase,
    ),
  }));
}

/** Slug to label, for showing her answers back to her as chips. */
export async function getSituationLabels(): Promise<Map<string, string>> {
  const situations = await getSituations();
  return new Map(situations.map((s) => [s.slug, s.label]));
}

/**
 * Slug to the second-person phrase used in the match reason.
 *
 * Falls back to the label so a situation added without a phrase still
 * produces a reason, just a blunter one.
 */
export async function getSituationPhrases(): Promise<Map<string, string>> {
  const situations = await getSituations();
  return new Map(
    situations.map((s) => [s.slug, s.match_phrase ?? s.label.toLowerCase()]),
  );
}
