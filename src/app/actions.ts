"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
 *
 * Saving needs an account. Signed out, the listing is held and she is sent to
 * sign in, and the save completes itself on the way back, so the press she
 * made is not thrown away at the one moment she is being asked for something.
 */
export async function toggleSave(listingId: string) {
  const result = await toggleSavedId(listingId);

  if (!result.ok) redirect("/account?save=1");

  // Unsaving is not recorded. The figure an organisation sees is how many
  // women thought this worth coming back to, not a net balance.
  if (result.saved) await track(listingId, "save");

  revalidatePath("/results");
  revalidatePath("/saved");

  return result.saved;
}
