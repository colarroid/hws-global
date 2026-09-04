import { emailButton, emailLayout, emailText, escapeHtml } from "@/emails/layout";


export type ClosingSoon = {
  name: string;
  organisationName: string;
  deadline: string;
  url: string;
};

const DATE = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
});

/**
 * The deadline reminder. The only email the platform ever sends her.
 *
 * The subject never names a category of support, and neither does the sender.
 * These arrive in inboxes other people read on shared devices, and a subject
 * line saying which kind of help she is looking for could tell someone
 * something she has not chosen to tell them.
 *
 * The body names what she saved, because by then she has opened it herself.
 *
 * Deliberately plain: no images, no tracking pixel, no marketing footer. It
 * has one job and it is read on an older phone, often on a poor connection.
 */
export function deadlineReminder(items: ClosingSoon[], savedUrl: string) {
  const one = items.length === 1;

  const subject = one
    ? "Something you saved closes soon"
    : "Some things you saved close soon";

  const lines = items.map(
    (item) =>
      `${item.name}, ${item.organisationName}. Closes ${DATE.format(new Date(item.deadline))}.`,
  );

  const text = [
    one
      ? "Something on your saved list closes soon."
      : "A few things on your saved list close soon.",
    "",
    ...lines,
    "",
    `Your list: ${savedUrl}`,
    "",
    "We only email you about closing dates. To stop these, open your list and",
    "turn reminders off in settings.",
  ].join("\n");

  const rows = items
    .map(
      (item) => `
      <tr>
        <td style="padding:16px 0;border-bottom:1px solid rgba(18,9,2,0.08);">
          <a href="${item.url}" style="color:#120902;font-size:17px;font-weight:700;text-decoration:none;">${escapeHtml(item.name)}</a>
          <div style="color:rgba(18,9,2,0.65);font-size:15px;padding-top:4px;">${escapeHtml(item.organisationName)}</div>
          <div style="color:#5F5230;font-size:15px;font-weight:600;padding-top:6px;">Closes ${DATE.format(new Date(item.deadline))}</div>
        </td>
      </tr>`,
    )
    .join("");

  const html = emailLayout({
    preheader: one
      ? "One closing date on your saved list."
      : `${items.length} closing dates on your saved list.`,
    heading: one ? "Something you saved closes soon" : "Some things close soon",
    body:
      emailText(
        one
          ? "Something on your saved list closes soon."
          : "A few things on your saved list close soon.",
      ) +
      `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 0;">${rows}</table>` +
      emailButton("See your list", savedUrl),
    footnote:
      "We only email you about closing dates. To stop these, open your list and turn reminders off in settings.",
  });

  return { subject, html, text };
}
