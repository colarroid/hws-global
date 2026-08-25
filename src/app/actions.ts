"use server";

import { revalidatePath } from "next/cache";
import { toggleSavedId } from "@/lib/saved";
import { track } from "@/lib/track";

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
  const nowSaved = await toggleSavedId(listingId);

  // Unsaving is not recorded. The figure an organisation sees is how many
  // women thought this worth coming back to, not a net balance.
  if (nowSaved) await track(listingId, "save");

  revalidatePath("/results");
  revalidatePath("/saved");

  return nowSaved;
}
