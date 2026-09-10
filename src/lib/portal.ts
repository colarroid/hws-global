import "server-only";

/**
 * The organisation portal's origin, for every link that leaves for it.
 *
 * The host is singular: organisation.hwspathgrid.com. The plural does not
 * resolve, and on 10 September 2026 ORG_PORTAL_URL in production was set to
 * it, which pointed every CTA on the marketing pages and every button in the
 * freshness email at a host that fails to connect. Nothing errored: a
 * well-formed URL to a dead name looks exactly like a working link until
 * somebody presses it.
 *
 * This was read raw in four places with `?? "https://organisation…"` after
 * it, which only defends against the variable being absent. A wrong value
 * beats the fallback every time, so the fallback never fired.
 *
 * What this can and cannot do. It refuses a value with no scheme, because a
 * bare host renders as a relative path and resolves against whatever page it
 * is on — that is the failure hws-admin's lib/portal.ts was written for. It
 * cannot tell a correct hostname from a plausible typo, so the value in
 * Vercel still has to be right. What it does do is put the rule in one place
 * with the correct host beside it.
 */
const CANONICAL = "https://organisation.hwspathgrid.com";

export function portalUrl(): string {
  const raw = process.env.ORG_PORTAL_URL?.trim();
  if (!raw) return CANONICAL;

  // A bare host would be treated as a relative path by both the browser and
  // any mail client, so it is refused rather than guessed at.
  if (!/^https?:\/\//i.test(raw)) return CANONICAL;

  return raw.replace(/\/+$/, "");
}

/** One absolute link into the portal. Pass a path with its leading slash. */
export function portalLink(path: string): string {
  return `${portalUrl()}${path}`;
}
