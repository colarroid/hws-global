/**
 * A calendar invitation, as a file rather than an integration.
 *
 * The question this answers is "don't we need to connect Google Calendar".
 * For the calendar a woman picks from, no: that is ours, computed from the
 * availability an admin sets, and an outside service would only be somewhere
 * else for it to live.
 *
 * What an outside service would genuinely give is the adviser's own diary
 * knowing about it, and an .ics attachment does that with no OAuth, no token
 * refresh, no webhook to renew and no third party holding anybody's name.
 * Every mail client turns one into a calendar entry with a tap. She gets one
 * too, so the appointment is on her phone rather than in an email she has to
 * find again.
 *
 * What this does not do is notice that the adviser has booked a dentist in
 * Google and close that slot. Nothing here can know that. Blocking the time
 * in the admin tool is how that is said, and if it turns out to be a daily
 * annoyance rather than an occasional one, that is the point at which a real
 * two-way sync earns its keep.
 */

/** RFC 5545 wants CRLF, and some clients genuinely refuse anything else. */
const CRLF = "\r\n";

/** 20260910T100000Z. Always UTC, so no VTIMEZONE block is needed. */
function stamp(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

/**
 * Commas, semicolons and backslashes carry meaning in a property value, and
 * a newline has to become a literal \n. An unescaped comma in an
 * organisation's name is enough to make a client drop the rest of the line.
 */
function escapeText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

/**
 * Folded at 75 octets, continuing with a leading space.
 *
 * Measured in bytes rather than characters on purpose: the limit is octets,
 * and a description carrying her own words may well be outside ASCII.
 */
function fold(line: string): string {
  const bytes = Buffer.from(line, "utf8");
  if (bytes.length <= 75) return line;

  const parts: string[] = [];
  let start = 0;

  while (start < bytes.length) {
    // 75 on the first line, 74 after, because the continuation costs a space.
    const limit = parts.length === 0 ? 75 : 74;
    let end = Math.min(start + limit, bytes.length);

    // Never split a multi-byte character: continuation bytes are 10xxxxxx.
    while (end > start && end < bytes.length && (bytes[end] & 0xc0) === 0x80) {
      end -= 1;
    }

    parts.push(bytes.subarray(start, end).toString("utf8"));
    start = end;
  }

  return parts.join(`${CRLF} `);
}

export function buildIcs(input: {
  /** The booking reference, which makes the event stable across resends. */
  reference: string;
  start: Date;
  minutes: number;
  summary: string;
  description: string;
  /** The domain the UID is scoped to. Any stable string will do. */
  domain?: string;
}): string {
  const end = new Date(input.start.getTime() + input.minutes * 60_000);

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//HWS Path Grid//Booking//EN",
    "CALSCALE:GREGORIAN",
    // PUBLISH rather than REQUEST: this is a note of an arrangement already
    // made, not an invitation waiting on somebody to accept it. REQUEST puts
    // accept and decline buttons on something that is already booked.
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${input.reference}@${input.domain ?? "hwspathgrid.com"}`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(input.start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${escapeText(input.summary)}`,
    `DESCRIPTION:${escapeText(input.description)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.map(fold).join(CRLF) + CRLF;
}
