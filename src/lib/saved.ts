import "server-only";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";

/**
 * Saving belongs to an account.
 *
 * It used to work signed out, in a session cookie that died with the window.
 * That made the saved list a thing you could build and lose without ever
 * being told, and it meant the header could say "Saved 3" to somebody who
 * would have nothing tomorrow. An account is now the price of saving, and it
 * is the only thing on the platform that has one.
 *
 * Nothing else changed. Searching, reading and applying still need no
 * account, which is the promise that actually matters, and the whole flow up
 * to the moment she presses Save is untouched.
 *
 * The cookie survives for one job: remembering the listing she pressed Save
 * on while she goes and signs in, so the press is not thrown away. It is
 * written just before the redirect and read once on the way back.
 */
const PENDING = "hws_pending_save";

/** A long list means something is wrong, not that someone is thorough. */
const MAX_SAVED = 50;

async function currentUserId(): Promise<string | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user?.id ?? null;
}

export async function getSavedIds(): Promise<string[]> {
  const userId = await currentUserId();
  if (!userId) return [];

  const supabase = await createClient();
  const { data } = await supabase
    .from("saved_items")
    .select("listing_id")
    .order("saved_at", { ascending: false })
    .limit(MAX_SAVED);

  return (data ?? []).map((row) => row.listing_id);
}

export type SaveResult =
  | { ok: true; saved: boolean }
  /** She is not signed in. The listing is held; send her to the account. */
  | { ok: false; reason: "signed-out" };

export async function toggleSavedId(listingId: string): Promise<SaveResult> {
  const userId = await currentUserId();

  if (!userId) {
    await holdPendingSave(listingId);
    return { ok: false, reason: "signed-out" };
  }

  const supabase = await createClient();
  const { data: existing } = await supabase
    .from("saved_items")
    .select("listing_id")
    .eq("listing_id", listingId)
    .maybeSingle();

  if (existing) {
    await supabase.from("saved_items").delete().eq("listing_id", listingId);
    return { ok: true, saved: false };
  }

  await supabase
    .from("saved_items")
    .insert({ user_id: userId, listing_id: listingId });

  return { ok: true, saved: true };
}

/**
 * Remember the one listing she pressed Save on, while she signs in.
 *
 * A session cookie, so it dies with the window: a save she abandoned
 * halfway through should not be waiting for her in a fortnight. httpOnly,
 * because nothing on the client has any business reading it.
 */
export async function holdPendingSave(listingId: string) {
  const store = await cookies();
  store.set(PENDING, listingId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    // Deliberately no maxAge and no expires: a session cookie.
  });
}

export async function clearPendingSave() {
  const store = await cookies();
  store.delete(PENDING);
}

export async function readPendingSave(): Promise<string | null> {
  const store = await cookies();
  return store.get(PENDING)?.value ?? null;
}

/**
 * Finish the save she started before signing in.
 *
 * Called once, at the moment the account exists. Losing the press that sent
 * her to sign in would be the worst possible time to drop anything, and it
 * is the only reason the pending cookie exists at all.
 *
 * Returns the listing so the screen after sign-in can say what was saved.
 */
export async function completePendingSave(userId: string): Promise<string | null> {
  const listingId = await readPendingSave();
  if (!listingId) return null;

  await clearPendingSave();

  const supabase = await createClient();
  await supabase
    .from("saved_items")
    .upsert(
      { user_id: userId, listing_id: listingId },
      { onConflict: "user_id,listing_id", ignoreDuplicates: true },
    );

  return listingId;
}
