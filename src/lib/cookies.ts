import { cookies } from "next/headers";

/**
 * The cookie that records somebody has read the cookie notice.
 *
 * A year, because being told the same thing on every visit is its own kind of
 * disrespect. Not httpOnly: nothing here is a secret, and a page may want to
 * know without asking the server.
 */
export const NOTICE_COOKIE = "hws_cookie_notice";

const YEAR = 60 * 60 * 24 * 365;

export async function hasSeenCookieNotice(): Promise<boolean> {
  const store = await cookies();
  return store.get(NOTICE_COOKIE)?.value === "seen";
}

export async function markCookieNoticeSeen(): Promise<void> {
  const store = await cookies();
  store.set(NOTICE_COOKIE, "seen", {
    path: "/",
    maxAge: YEAR,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}
