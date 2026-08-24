"use server";

import { revalidatePath } from "next/cache";
import { getSavedIds, writeSavedIds } from "@/lib/saved";
import { createClient } from "@/lib/supabase/server";

/**
 * Toggle a save.
 *
 * Records the save as an event for the organisation's dashboard figures.
 * The event carries a listing id, a kind and a date, and nothing else: the
 * brief rules out building a behavioural profile around what are often
 * sensitive searches, so there is deliberately nothing here to join a
 * person to.
 *
 * Unsaving is not recorded. The figure an organisation sees is how many
 * women thought this was worth coming back to, not a net balance.
 */
export async function toggleSave(listingId: string) {
  const saved = await getSavedIds();
  const already = saved.includes(listingId);

  await writeSavedIds(
    already ? saved.filter((id) => id !== listingId) : [...saved, listingId],
  );

  if (!already) {
    const supabase = await createClient();
    await supabase
      .from("listing_events")
      .insert({ listing_id: listingId, kind: "save" });
  }

  revalidatePath("/results");
  revalidatePath("/saved");

  return !already;
}
