import "server-only";
import { cookies } from "next/headers";

/**
 * Saving works immediately, with no account.
 *
 * The list lives in a session cookie: no Max-Age and no Expires, so it dies
 * when the browser closes. That is not a shortcut, it is the promise. The
 * platform says nothing is remembered between visits without an account, and
 * a persistent cookie would quietly make that untrue.
 *
 * The account, when it arrives, exists for exactly one thing: making this
 * list outlive the window. At that point these ids get copied into
 * saved_items and the cookie stops being the source.
 */
const COOKIE = "hws_saved";

/** Five results, five possible saves. A long cookie means something is wrong. */
const MAX_SAVED = 50;

export async function getSavedIds(): Promise<string[]> {
  const store = await cookies();
  const raw = store.get(COOKIE)?.value ?? "";
  return raw.split(",").filter(Boolean).slice(0, MAX_SAVED);
}

export async function isSaved(listingId: string): Promise<boolean> {
  return (await getSavedIds()).includes(listingId);
}

/** Writes the session list. Only callable from a server action or route. */
export async function writeSavedIds(ids: string[]) {
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
