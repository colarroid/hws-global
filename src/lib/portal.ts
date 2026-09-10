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

/**
 * The environment may only move this to a machine on this machine.
 *
 * ORG_PORTAL_URL used to win outright, and in production it was set to the
 * plural host, so every CTA and every freshness email pointed somewhere that
 * refuses the connection. Validating the value could not catch that: the
 * plural is a perfectly well-formed URL, it just does not exist.
 *
 * So the production host is a constant of the product rather than a
 * deployment setting, and the variable is what it is actually used for —
 * pointing a developer at the portal running beside them on another port. A
 * non-local value is ignored, which means a typo in a dashboard can no
 * longer take the organisation-facing half of the platform off the air.
 *
 * The cost is that moving the portal to a new domain is a code change. That
 * is the right cost: it is reviewable, and it is one line.
 */
function developmentOverride(): string | null {
  const raw = process.env.ORG_PORTAL_URL?.trim();
  if (!raw) return null;

  try {
    const url = new URL(raw);
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    return local ? raw.replace(/\/+$/, "") : null;
  } catch {
    // Not a URL at all. A bare host is the common way to get this wrong, and
    // it would render as a relative path in a page and in a mail client.
    return null;
  }
}

export function portalUrl(): string {
  return developmentOverride() ?? CANONICAL;
}

/** One absolute link into the portal. Pass a path with its leading slash. */
export function portalLink(path: string): string {
  return `${portalUrl()}${path}`;
}
