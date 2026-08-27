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

**3. ~~Three subdomains on one deployment.~~ Deployment model superseded by 19.
Hosts corrected below.**
This entry recorded `organisations.` for the portal and the bare domain for the
woman-facing flow. Both are wrong. Verified against DNS on 27 August 2026:

| Front end | Host |
| --- | --- |
| Woman-facing and landing | `www.hwspathgrid.com` — the apex 308-redirects here |
| Organisation portal | `organisation.hwspathgrid.com`, **singular** |
| Admin tools | `administrator.hwspathgrid.com` |

`organisations.` plural does not resolve at all and never has.

This is not a documentation nicety. The plural was copied into Supabase's
**Redirect URLs** allow-list, so `emailRedirectTo` never matched and Supabase
silently fell back to the Site URL: every organisation confirmation email
landed a woman-facing page holding an auth code it has no route for. Password
reset failed the same way, through `redirectTo` in `src/app/actions.ts`.

Anything that hard-codes a host — the allow-list, the Site URL, email
templates — must be checked against this table, not against prose.

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

**22. `design.md` is adopted for form, not for contrast or text size.**
`design.md` reverse-engineers unlistedhomes.com, the site this brand's visual
language comes from. Most of it was already in place, since the handoff draws
on the same source. Where the two disagree, its type scale and geometry are
adopted and its colour and sizing decisions are not:

*Adopted.* Headings are Playfair at weight 400 and never bold, with a single
italic word for emphasis. Card titles move from Inter 700 to the same serif.
Eyebrows go from 11px/700/0.14em to 12px/500/0.22em. One card radius at 12px
and one control radius at 6px, replacing 14/10. Edges are drawn with a 1px
`box-shadow` ring rather than a real border.

*Held back.* Gold stays `#8E7B49` and `#5F5230`. `design.md`'s `#BEA461`
measures 2.2:1 on the cream ground, which fails even the 3:1 bar for icons
and focus rings; the two in use measure 3.79:1 and 7.05:1. Body copy stays at
17-18px against its 16px, and the 15px floor stands. Eyebrows keep ink 60%
(5.05:1) rather than its 50% (3.60:1, below AA). Button weight stays 700 —
`design.md` contradicts itself there, saying 400 in the type scale and 500 in
the cheat sheet, and neither is worth the affordance on this audience.

The reason is the audience, not taste: `UX.txt` describes women with low
digital confidence who are sometimes time-poor and often reluctant. Every
value held back is one where `design.md` optimises for editorial elegance on
a property-marketing site and this platform cannot afford to.

The ring also removed a defect. Chips and fields swapped between 1px and
2px/1.5px borders on selection, so the box shifted under the pointer as she
picked. Rings are drawn outside the box, so the geometry now holds still.

**23. Organisation onboarding counts to three, not four.**
The brief says "four-step onboarding" and lists three: about the
organisation, Access Zones, verification evidence, "then straight to the
dashboard". The shell counted the dashboard as the fourth so the progress bar
could fill, and the counter beside it therefore read "Step 1 of 4" across
three forms.

Confirmed as three by HWS. The bar fills just as completely in thirds, and
the counter now describes what is actually in front of them.

This is decision 5 a second time. There the approved screens labelled the
woman's three questions "of 4" and the same answer was given. The brief's
sentence is the likelier origin of both, so it is worth reading as prose
rather than as a specification wherever it counts something.

---

## Technical

**9. ~~One Next.js app, not a monorepo.~~ Superseded by 19.**
Originally: three sites, one deploy, one Supabase client, one token set,
routed by hostname in `src/proxy.ts`.

**19. Three repositories, three Vercel projects.**
`hws-global` (woman-facing and landing), `hws-organization`, `hws-admin`. One
Supabase database behind all three. `src/proxy.ts` and `src/lib/sites.ts` are
gone, since each front end now owns its domain outright.

Done at the point where only the organisation flow existed, which is by far
the cheapest moment: splitting after all three were built would have been
several times the work.

What it buys:

- **Blast radius.** The woman-facing site is the whole trust promise. An
  organisation-portal mistake can no longer take it down.
- **Real preview deployments** per front end. Under one project, `*.vercel.app`
  previews carry no subdomain, so every preview resolved to the woman-facing
  site and the organisation portal could not be reviewed on a preview at all.
- **Separate access control**, so the admin deployment can be locked at the
  edge independently.

**20. The schema lives in `hws-global` and nowhere else.**
One migration history and one seed script for one database. Three
repositories writing migrations against the same database would diverge, and
unpicking that later is far more expensive than the small inconvenience of
raising schema changes in one place.

**21. The shared layer is duplicated across the three repositories, not
published.**
Tokens, UI primitives, Supabase clients and the fixed taxonomies exist three
times. A private registry costs more than it returns before launch.

The cost is named rather than hidden: a change to the token layer has to be
applied three times. The surface is deliberately small and stable. If it
starts drifting, extract it to a package rather than letting three versions
diverge quietly. The woman-facing result card is the one component that is
genuinely shared rather than incidentally duplicated, since the organisation
preview screen renders the real card.

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

**17. The database is hosted in Frankfurt, `eu-central-1`.**
Confirmed by HWS after the alternative was put to them. Lawful under UK GDPR:
the UK's adequacy regulations cover the EEA, so data flows from the UK to
Germany without additional safeguards, and the brief's requirement is
"UK/approved-region hosting" rather than UK-only.

*Caveat, recorded so it is not a surprise later:* Scottish public-sector
buyers frequently make UK data residency a hard tender requirement. Supabase
cannot change a project's region in place, so satisfying such a requirement
after launch means a new project and a migration window. The cost of moving
was roughly ten minutes while the database was empty.

**24. Reserved addresses are refused in `sendEmail`, and the seed scripts
must name their project.**
`dev-organisation@example.org` and `dev-woman@example.org` are in production,
and the cron jobs read whatever address sits on a user, so both were being
emailed on a schedule and bouncing every time. Bounce rate is what decides
whether the mail that matters reaches an inbox or a spam folder, and
providers suspend senders over it.

Two changes, at two different depths:

- `sendEmail` refuses anything under the domains RFC 2606 and 6761 reserve
  for documentation and testing. Refused centrally rather than per caller, so
  a reserved address cannot reach the provider by way of a route nobody
  thought to guard. All four senders already go through it.
- `scripts/guard.mjs` makes both seed scripts take the project reference on
  the command line and match it against the URL. The old check confirmed the
  credentials existed, never which project they opened, which is how test
  organisations reached production in the first place: one careless
  `--env-file` is all it took, and `hws-global/.env.local` points at
  production.

`seed:clean` now exists. The seed's header had promised it since it was
written, which is the likeliest reason the seeded rows are still there.

**18. Roles are never self-assignable beyond `organisation`.**
`handle_new_user` reads the requested role from sign-up metadata, which is
attacker-controlled: anyone can post arbitrary `options.data` to the public
auth endpoint. Honouring a claimed `admin` there would let a stranger mint an
admin account and read every table gated by `is_admin()`, including
verification evidence and the review queue. The trigger resolves anything
other than `organisation` to `woman`. Admin is granted by hand.

---

## Open

- ~~**The four categories with no Access Zone.**~~ **Closed by the admin
  tool.** Housing, safety and rights, support for new Scots, and caring and
  family life had no zone. Access Zone management now exists: an admin sees
  every zone, edits them and creates new ones without a release, so covering
  these is an afternoon's content decision rather than anything the build is
  waiting on. Confirmed by HWS on 27 August 2026 as the answer to it.

  Recorded once and not raised again: the hand-routing escape the brief
  describes was never built. `hand_routing_requests` is in the schema and
  nothing reads it. The zones step advertised it through a link to a route
  that does not exist, and that panel was removed rather than left pointing at
  a 404. Creating the zones is the route now.
