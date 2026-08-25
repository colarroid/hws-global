import "server-only";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";

/**
 * Saving works immediately, with no account.
 *
 * Signed out, the list lives in a session cookie: no Max-Age and no Expires,
 * so it dies when the browser closes. That is not a shortcut, it is the
 * promise. The platform says nothing is remembered between visits without an
 * account, and a persistent cookie would quietly make that untrue.
 *
 * Signed in, the list lives in `saved_items` and the cookie stops being the
 * source. That is the single thing an account buys, and the only reason it
 * exists.
 */
const COOKIE = "hws_saved";

/** A long list means something is wrong, not that someone is thorough. */
const MAX_SAVED = 50;

async function currentUserId(): Promise<string | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user?.id ?? null;
}

async function cookieIds(): Promise<string[]> {
  const store = await cookies();
  const raw = store.get(COOKIE)?.value ?? "";
  return raw.split(",").filter(Boolean).slice(0, MAX_SAVED);
}

/** Writes the session list. Only callable from a server action or route. */
export async function writeCookieIds(ids: string[]) {
  const store = await cookies();
  const unique = [...new Set(ids)].slice(0, MAX_SAVED);

  if (unique.length === 0) {
    store.delete(COOKIE);
    return;
  }

  store.set(COOKIE, unique.join(","), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    // Deliberately no maxAge and no expires: a session cookie.
  });
}

export async function getSavedIds(): Promise<string[]> {
  const userId = await currentUserId();
  if (!userId) return cookieIds();

  const supabase = await createClient();
  const { data } = await supabase
    .from("saved_items")
    .select("listing_id")
    .order("saved_at", { ascending: false });

  return (data ?? []).map((row) => row.listing_id);
}

export async function toggleSavedId(listingId: string): Promise<boolean> {
  const userId = await currentUserId();

  if (!userId) {
    const ids = await cookieIds();
    const already = ids.includes(listingId);
    await writeCookieIds(
      already ? ids.filter((id) => id !== listingId) : [...ids, listingId],
    );
    return !already;
  }

  const supabase = await createClient();
  const { data: existing } = await supabase
    .from("saved_items")
    .select("listing_id")
    .eq("listing_id", listingId)
    .maybeSingle();

  if (existing) {
    await supabase.from("saved_items").delete().eq("listing_id", listingId);
    return false;
  }

  await supabase
    .from("saved_items")
    .insert({ user_id: userId, listing_id: listingId });
  return true;
}

/**
 * Carry the session list into the account, once, at sign-in.
 *
 * She saved those things before signing in, which is the whole point of the
 * order these screens come in. Losing them at the moment she creates an
 * account to keep them would be the worst possible time to drop anything.
 */
export async function adoptSessionSaves(userId: string) {
  const ids = await cookieIds();
  if (ids.length === 0) return;

  const supabase = await createClient();
  await supabase
    .from("saved_items")
    .upsert(
      ids.map((listing_id) => ({ user_id: userId, listing_id })),
      { onConflict: "user_id,listing_id", ignoreDuplicates: true },
    );

  await writeCookieIds([]);
}
