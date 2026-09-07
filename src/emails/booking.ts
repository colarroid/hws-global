import { emailLayout, emailText, escapeHtml } from "@/emails/layout";

/**
 * The two emails a booking sends: one to her, one to whoever will take it.
 *
 * Hers stays neutral. It lands in an inbox other people read, and the subject
 * is the part that shows in a list without being opened, so it says a time
 * and nothing about why. `sendEmail` already refuses to let a subject name a
 * kind of support; this is the same rule applied to a subject that could
 * easily have said "your support appointment".
 *
 * Theirs carries everything, because the point of keeping this calendar off a
 * scheduling company is that the person taking the call opens it already
 * knowing what she searched for and that nothing came back.
 */

const WHEN = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/London",
});

export function bookingConfirmation(input: {
  name: string;
  slotAt: Date;
  minutes: number;
  reference: string;
}) {
  const when = WHEN.format(input.slotAt);

  return {
    // Neutral on purpose. Read over a shoulder, this is a time and a name.
    subject: `Your call on ${when}`,
    html: emailLayout({
      preheader: `${when}, ${input.minutes} minutes.`,
      heading: "That is booked",
      body:
        emailText(
          `Thanks ${escapeHtml(input.name)}. We will call you on <strong>${escapeHtml(when)}</strong>, and it should take about ${input.minutes} minutes.`,
        ) +
        emailText(
          "There is nothing to prepare. Whoever calls will have read what you were looking for, so you will not have to start from the beginning.",
          "muted",
        ) +
        emailText(
          `Your reference is <strong>${escapeHtml(input.reference)}</strong>. There is a calendar file attached, so you can add it to your phone.`,
          "muted",
        ),
      footnote:
        "If the time no longer suits, reply to this email and we will move it.",
    }),
    text: [
      "That is booked.",
      "",
      `${when}, about ${input.minutes} minutes.`,
      `Reference: ${input.reference}`,
      "",
      "Whoever calls will have read what you were looking for.",
      "If the time no longer suits, reply to this email and we will move it.",
    ].join("\n"),
  };
}

export function bookingNotice(input: {
  name: string;
  email: string;
  phone: string | null;
  slotAt: Date;
  minutes: number;
  reference: string;
  need: string | null;
  place: string | null;
  situations: string[];
  note: string | null;
}) {
  const when = WHEN.format(input.slotAt);

  const facts: [string, string | null][] = [
    ["Name", input.name],
    ["Email", input.email],
    ["Phone", input.phone],
    ["Searched for", input.need],
    ["Where", input.place],
    ["Told us", input.situations.length > 0 ? input.situations.join(", ") : null],
    ["She added", input.note],
  ];

  const rows = facts
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#6b625c;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:4px 0;font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#120902;">${escapeHtml(value as string)}</td></tr>`,
    )
    .join("");

  return {
    subject: `Booking ${input.reference} · ${when}`,
    html: emailLayout({
      preheader: `${input.name}, ${when}.`,
      heading: "Somebody has booked a call",
      body:
        emailText(`<strong>${escapeHtml(when)}</strong>, ${input.minutes} minutes.`) +
        `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:18px 0 0;">${rows}</table>` +
        emailText(
          "She reached this from a search that found nothing. Everything she told us is above, so she does not need to explain it again.",
          "muted",
        ),
      footnote: `Reference ${input.reference}. The calendar file is attached.`,
    }),
    text: [
      `Booking ${input.reference}`,
      `${when}, ${input.minutes} minutes.`,
      "",
      ...facts
        .filter(([, value]) => value)
        .map(([label, value]) => `${label}: ${value}`),
      "",
      "She reached this from a search that found nothing.",
    ].join("\n"),
  };
}
