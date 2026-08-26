export type StaleListing = {
  name: string;
  lastConfirmed: string | null;
};

const DATE = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/**
 * The six-monthly re-confirmation prompt, emailed to an organisation.
 *
 * Framed as costing them applications rather than as an admin chore, which
 * is the same framing as the dashboard banner and for the same reason: the
 * date is visible to women, so an old one puts people off applying before
 * anyone at the organisation knows there is a problem.
 *
 * No neutrality constraint here. This goes to a work address about a public
 * listing, not to a woman about what she is looking for.
 */
export function listingRecheck(
  organisationName: string,
  listings: StaleListing[],
  dashboardUrl: string,
) {
  const one = listings.length === 1;

  const subject = one
    ? "One of your listings needs checking"
    : `${listings.length} of your listings need checking`;

  const lines = listings.map((listing) => {
    const when = listing.lastConfirmed
      ? `last confirmed ${DATE.format(new Date(listing.lastConfirmed))}`
      : "never confirmed";
    return `${listing.name} — ${when}.`;
  });

  const opening = one
    ? `A listing from ${organisationName} has not been confirmed in over six months.`
    : `${listings.length} listings from ${organisationName} have not been confirmed in over six months.`;

  const text = [
    opening,
    "",
    ...lines,
    "",
    "Women see the date each listing was last checked, so an old one costs",
    "you applications. Confirming takes a moment if nothing has changed.",
    "",
    `Your dashboard: ${dashboardUrl}`,
  ].join("\n");

  const rows = listings
    .map(
      (listing) => `
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid rgba(18,9,2,0.08);">
          <div style="font-size:17px;font-weight:700;">${escapeHtml(listing.name)}</div>
          <div style="color:#B91C1C;font-size:15px;padding-top:4px;">
            ${listing.lastConfirmed ? `Last confirmed ${DATE.format(new Date(listing.lastConfirmed))}` : "Never confirmed"}
          </div>
        </td>
      </tr>`,
    )
    .join("");

  const html = `<!doctype html>
<html lang="en-GB">
<body style="margin:0;background:#F9F6F1;font-family:Helvetica,Arial,sans-serif;color:#120902;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F9F6F1;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#FFFFFF;border:1px solid rgba(18,9,2,0.16);border-radius:14px;padding:28px;">
        <tr><td>
          <p style="margin:0 0 20px;font-size:18px;line-height:1.6;">${escapeHtml(opening)}</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
          <p style="margin:20px 0 0;font-size:16px;line-height:1.6;color:rgba(18,9,2,0.7);">
            Women see the date each listing was last checked, so an old one
            costs you applications. Confirming takes a moment if nothing has
            changed.
          </p>
          <p style="margin:24px 0 0;">
            <a href="${dashboardUrl}" style="display:inline-block;background:#120902;color:#FFFFFF;font-size:16px;font-weight:700;text-decoration:none;padding:14px 24px;border-radius:10px;">Check my listings</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return { subject, html, text };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
