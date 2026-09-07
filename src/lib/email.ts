import "server-only";

/**
 * Addresses reserved by RFC 2606 and RFC 6761 for documentation and testing.
 * Nothing behind them can receive mail, so every send is a guaranteed bounce.
 *
 * The seed script creates accounts under `example.org`, and the cron jobs
 * read whatever address sits on a user and send to it. Left alone, that is a
 * bounce on a schedule, and bounce rate is what decides whether the mail that
 * matters — a confirmation link, a deadline reminder — reaches an inbox or a
 * spam folder. Providers also suspend senders over it.
 */
const UNDELIVERABLE = /@(?:[^@]*\.)?(?:example\.(?:com|net|org)|test|invalid|localhost|local)$/i;

/** Exported so a caller can skip the work of composing a message at all. */
export function isUndeliverable(address: string) {
  return UNDELIVERABLE.test(address.trim());
}

/**
 * Send one email through Resend.
 *
 * Sender name and subject are the caller's responsibility and both must stay
 * neutral. These land in inboxes that other people read on shared devices,
 * and a subject line naming a category of support could tell someone
 * something she has not chosen to tell them. That is a safety property, not
 * a style preference.
 */
export async function sendEmail({
  to,
  subject,
  html,
  text,
  attachments,
}: {
  to: string;
  subject: string;
  html: string;
  text: string;
  /**
   * Optional files, sent as UTF-8 text. Added for the calendar invitation
   * that goes with a booking: an .ics is how an appointment reaches the
   * adviser's own diary and her phone without connecting either of them to
   * anything. Content is a plain string, because everything this sends is
   * text and base64 would only be a thing to get wrong.
   */
  attachments?: { filename: string; content: string }[];
}): Promise<{ ok: boolean; error?: string }> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!key || !from) {
    return { ok: false, error: "RESEND_API_KEY or EMAIL_FROM is not set." };
  }

  // Refused here rather than at each caller, so a reserved address cannot
  // reach the provider by way of a route nobody thought to guard.
  if (isUndeliverable(to)) {
    return { ok: false, error: `Refused to send to a reserved address: ${to}` };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      text,
      ...(attachments?.length
        ? {
            attachments: attachments.map((file) => ({
              filename: file.filename,
              content: Buffer.from(file.content, "utf8").toString("base64"),
            })),
          }
        : {}),
    }),
  });

  if (!response.ok) {
    return { ok: false, error: `Resend returned ${response.status}: ${await response.text()}` };
  }

  return { ok: true };
}
