# Decisions

Running log of calls made during the build, with the reason attached. Where a
decision contradicts one of the source documents, the reason says which
document and why the decision wins.

Sources, in order of authority:

1. The design handoff bundles and prototypes (`design_handoff_hws_portal`,
   `design_handoff_hws_organisations`). **These override the documents.**
2. `HWS Portal Project Brief.md`, version 2, 24 August 2026.
3. `HWS_Womens_Navigation_Access_Platform_Product_Brief_v1.0.docx`,
   12 August 2026. Superseded wherever it disagrees with the above.

---

## Product

**1. Designs override the documents.**
Confirmed by HWS. Where the v1.0 brief and the approved designs disagree, the
designs win without further discussion.

**2. Build order: organisations, women, admin, landing.**
The organisation portal ships first, so there is something for women to find.

**3. Three subdomains on one deployment.**
`organisations.` for the portal, `administrator.` for the admin tools, and the
bare domain for the woman-facing flow and the landing page. Resolved in
`src/proxy.ts`, which rewrites the host onto an internal path prefix.

**4. Accounts are in scope, and the saved list is their purpose.**
The v1.0 brief said no accounts in Phase One. Superseded: four woman-facing
account screens are designed and approved. The account exists to make a saved
list outlive the browser session, and for nothing else.

**5. The question count is three.**
The approved Figma screens read "of 4", implying a fourth question that does
not exist. The prototype reads "of 3" and the progress bar moves in thirds.
Confirmed as three.

**6. The phone field stays on the woman-facing profile, optional.**
The handoff recommended cutting it, since it has no use in current scope.
Overruled by HWS. It is optional, never required, and never shown to
organisations.

**7. No Google sign-in for organisations.**
Removed from sign up and sign in. Every organisation account now goes through
a work email address plus a confirmed link, so the "does this person work
there?" check is uniform and there is no weaker path to audit. This also
closes the open question about whether Google needed domain matching alongside
it.

*Consequence:* the confirm-email screen is now on the critical path for every
organisation, with no bypass. A broken email means nobody can create an
account at all, so transactional email is a launch dependency rather than a
later one. The woman-facing side keeps Google, per its designs.

**8. `reviewBeforePublish` is on. `showPerformanceStats` is on.**
Both are exposed as switches in the prototype and both default true. Review
off is a one-way door: turning it back on means auditing everything published
in between.

---

## Technical

**9. One Next.js app, not a monorepo.**
Three sites, one deploy, one Supabase client, one token set. At the current
timeline a monorepo buys separation nobody needs yet.

**10. Access Zones and situations are database rows, not enumerated types.**
An HWS admin can add, rename, re-describe or retire a zone without a release.
Listings hold a stable `slug`, so a rename never orphans anything, and
`successor_id` is where anything attached to a retired zone moves.

Everything else fixed by the design (organisation type, solution kind, cost,
format) is a check constraint with labels in `src/lib/design/taxonomy.ts`,
because those lists are not admin-editable.

**11. The situation list is one table, shared by both sides.**
Eleven situations are shared: a woman picks them on question 3 and an
organisation tags a listing with them. "Prefer not to say" is the twelfth and
is `woman_only`, because it is an answer she can give but never a tag a
listing can hold.

**12. Zone display order follows the prototype, not the brief's table.**
The prototype's `ZONES` array puts Career first; the brief's table puts
Enterprise first. Designs override, and `sort_order` is admin-editable
regardless.

**13. Listing events carry no user id.**
The three dashboard figures come from an append-only event table with a
listing id, a kind and a date. The brief rules out building behavioural
profiles around sensitive searches, so there is nothing to join a person to.
`unmet_searches` is the same shape.

*Consequence:* the dashboard's three figures will read zero until the
woman-facing flow ships, because that is where the events are generated. The
table exists now so the first cohort's figures are not lost to a retrofit.

**14. The result card is built during the organisation phase.**
Screen 11, "Preview as she will see it", renders the real woman-facing card
rather than a mock of it. The component therefore comes out of phase one and
the woman-facing flow inherits it.

**15. Review actions are append-only.**
`listing_reviews` records every submission, approval, requested change and
wording edit, with a `changes` JSON payload. Screen 12 promises the
organisation is told when HWS edits wording, and a promise like that needs a
record behind it.

**16. Saved items are excluded from admin read policies.**
Admin RLS covers most tables. `saved_items` is deliberately not one of them.

---

## Open

- **The four categories with no Access Zone.** Housing, safety and rights,
  support for new Scots, and caring and family life. An admin can create zones
  for them; whether they belong in the zone model is HWS's call. Until it is
  made, `hand_routing_requests` is the only path for an organisation working
  in those areas, and it must reach a person.
- **Supabase region.** Must be UK for the hosting requirement in the brief,
  and the region is fixed at project creation.
