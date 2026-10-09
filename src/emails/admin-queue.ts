import { emailButton, emailLayout, emailText, escapeHtml } from "@/emails/layout";

export type WaitingOrganisation = {
  name: string;
  place: string | null;
  /** Whole days since they asked, not since the row was made. */
  days: number;
};

export type WaitingRequest = {
  source: string;
  days: number;
};

const plural = (n: number, one: string, many: string) =>
  n === 1 ? `1 ${one}` : `${n} ${many}`;

/**
 * What is sitting in the admin queue, emailed to whoever checks it.
 *
 * WHY THIS EXISTS. An organisation waited fourteen days to be verified
 * because the queue is a page somebody has to decide to open, and for two
 * weeks nobody did. Nothing was broken; there was simply no reason to look.
 * This is the reason to look, and it arrives on its own.
 *
 * It repeats daily while anything is waiting rather than firing once on
 * arrival, which is the part that actually fixes the failure. A single
 * notification at submission can be missed, filtered or read on a phone and
 * forgotten, and then the thing rots exactly as before. A message that comes
 * back every morning cannot be missed twice.
 *
 * The oldest age is in the subject line for the same reason. "2 organisations
 * waiting" reads the same on day one and day thirty; "oldest 14 days" does
 * not, and it is the number that should make somebody uncomfortable.
 *
 * No neutrality constraint, unlike almost every other email this platform
 * sends. This goes to an HWS work address about HWS's own backlog, not to a
 * woman about what she is looking for, so it can say plainly what is in it.
 */
export function adminQueue(
  organisations: WaitingOrganisation[],
  requests: WaitingRequest[],
  adminUrl: string,
) {
  const oldest = Math.max(
    0,
    ...organisations.map((o) => o.days),
    ...requests.map((r) => r.days),
  );

  const parts: string[] = [];
  if (organisations.length > 0) {
    parts.push(plural(organisations.length, "organisation", "organisations"));
  }
  if (requests.length > 0) {
    parts.push(plural(requests.length, "request", "requests"));
  }

  const subject = `${parts.join(" and ")} waiting, oldest ${plural(oldest, "day", "days")}`;

  const body: string[] = [];

  if (organisations.length > 0) {
    body.push(
      emailText(
        organisations.length === 1
          ? "One organisation has asked to be verified and is still waiting."
          : `${organisations.length} organisations have asked to be verified and are still waiting.`,
      ),
    );

    const lines = organisations
      .map((o) => {
        const where = o.place ? `, ${escapeHtml(o.place)}` : "";
        return `${escapeHtml(o.name)}${where} — ${plural(o.days, "day", "days")}`;
      })
      .join("<br>");

    body.push(emailText(lines));
  }

  if (requests.length > 0) {
    body.push(
      emailText(
        `${plural(requests.length, "person has", "people have")} asked to be put in touch with somebody and nobody has picked it up.`,
      ),
    );
    body.push(
      emailText(
        requests
          .map((r) => `From a ${escapeHtml(r.source)} — ${plural(r.days, "day", "days")}`)
          .join("<br>"),
      ),
    );
  }

  body.push(emailButton("Open the queue", adminUrl));
  body.push(
    emailText(
      "This arrives every morning while anything is waiting, and stops on its own once the queue is clear.",
      "muted",
    ),
  );

  /*
   * The plain-text half, built from the same data rather than by stripping
   * tags off the HTML. Escaping runs the other way there, so a stripped
   * version turns an organisation called "Mum & Co" into "Mum &amp; Co".
   */
  const text = [
    organisations.length > 0 ? "Waiting to be verified:" : null,
    ...organisations.map(
      (o) => `  ${o.name}${o.place ? `, ${o.place}` : ""} — ${plural(o.days, "day", "days")}`,
    ),
    requests.length > 0 ? "\nWaiting to be put in touch with somebody:" : null,
    ...requests.map((r) => `  From a ${r.source} — ${plural(r.days, "day", "days")}`),
    `\nOpen the queue: ${adminUrl}`,
    "\nThis arrives every morning while anything is waiting, and stops on its own once the queue is clear.",
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  return {
    subject,
    text,
    html: emailLayout({
      preheader: subject,
      heading: "Waiting for you",
      body: body.join(""),
    }),
  };
}
