# Handoff: HWS Portal — Organisation side

## Overview

The organisation-facing half of the HWS Portal. Organisations onboard, get verified, and post solutions that women find through the search flow on the other side of the platform.

Their primary goal is to post solutions. Onboarding is therefore the shortest path to a first listing, not a profile-building exercise.

The commercial and editorial constraints that shape every screen here:

- **Listing is free and there is no paid placement.** Ranking is neutral and the results screen says so where women can read it.
- **Listings are reviewed before going live.** The verified stamp on the woman-facing side is the platform's whole trust mechanism, and it means nothing if organisations self-publish.
- **Verification gates publishing, not access.** Organisations draft immediately and publish once confirmed, so nobody sits waiting.
- **Access Zones are admin-owned.** Organisations select from them; only an HWS administrator creates, renames or retires them.

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly.

The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, whatever is in place) using its established patterns, component library, and conventions. If no environment exists yet, choose the most appropriate framework and implement there.

Do not ship the HTML. Do not port `support.js` — it is a design-tool runtime, included only so the prototype opens and runs.

## Fidelity

**High-fidelity.** Colors, typography, spacing, and interaction states are final. This prototype shares its token set exactly with the woman-facing prototype, so build both against one set of primitives.

Content is placeholder: every organisation name, listing, figure and date is invented.

## Design Tokens

Identical to the woman-facing handoff. Repeated here so this bundle stands alone.

### Colors

| Token | Value | Use |
| --- | --- | --- |
| Page ground | `#F9F6F1` | Body, header, footer |
| Surface | `#FFFFFF` | Cards, inputs, chips at rest |
| Ink | `#120902` | Primary text, primary buttons, selected chips |
| Ink 70% | `rgba(18, 9, 2, 0.7)` | Body copy, sub-lines |
| Ink 65% | `rgba(18, 9, 2, 0.65)` | Card metadata |
| Ink 60% | `rgba(18, 9, 2, 0.6)` | Eyebrow labels, hints, footer |
| Ink 40% | `rgba(18, 9, 2, 0.4)` | Input placeholders |
| Ring | `rgba(18, 9, 2, 0.16)` | Default borders |
| Hairline | `rgba(18, 9, 2, 0.1)` | Section dividers, header/footer rules |
| Hairline soft | `rgba(18, 9, 2, 0.08)` | Within-card dividers, progress track |
| Gold 500 | `#8E7B49` | Accent, focus ring, save icon, progress fill |
| Gold 700 | `#5F5230` | Accent text and links (AA-safe at small sizes) |
| Gold 200 | `#F7F3EB` | Info panels, "In review" status, Google button, secondary zone |
| Gold 300 | `#DED1B0` | Border on gold-200 surfaces |
| Sage 200 | `#EEF2EF` | Tags, "Live" status pill |
| Green 700 | `#14672F` | Verified state, "Live" status text, success |
| Red 50 | `#FDEEEB` | Freshness warning background |
| Red 200 | `#F1C7C0` | Border on red surfaces |
| Red 700 | `#B91C1C` | Validation errors, freshness warning, destructive action |
| Closed pill | `rgba(18, 9, 2, 0.06)` fill, ink 65% text | Expired listing status |

Never use gold 500 for small text. Gold 700 is the text weight.

### Typography

**Playfair Display** (400–700) for headings and stat figures. **Inter** (300–700) for everything else.

| Role | Size | Weight | Notes |
| --- | --- | --- | --- |
| Page heading | 40–44px / 1.1 | 500 | Playfair, `letter-spacing: -0.01em` |
| Section heading | 28px / 1.2 | 500 | Playfair |
| Stat figure | 34px / 1 | 600 | Playfair |
| Card title | 20px / 1.3 | 700 | Inter |
| Zone card title | 17px / 1.3 | 700 | Inter |
| Body | 17px / 1.55–1.6 | 400 | Inter, `max-width: 62ch` on long paragraphs |
| Field label | 15px | 600 | Inter |
| Metadata | 15px | 400 | Inter, ink 65% |
| Eyebrow label | 11px | 700 | Inter, `letter-spacing: 0.14em`, uppercase |
| Button | 15–17px | 700 | Inter |
| Hint / fine print | 14px / 1.5 | 400 | Inter, ink 60% |

### Spacing, radius, shadow

- Scale: 4 / 5 / 6 / 8 / 10 / 12 / 14 / 16 / 18 / 20 / 22 / 24 / 26 / 28 / 30 / 40 / 44 / 56 / 72 / 80 / 88 / 96
- Radius: `999px` pills, `14px` large cards, `12px` cards and panels, `10px` inputs and buttons, `8px` status pills, `6px` tags
- Card shadow: `0 4px 6px -1px rgba(18, 9, 2, 0.1), 0 2px 4px -2px rgba(18, 9, 2, 0.1)`
- `box-sizing: border-box` globally. Content max-widths: 480px auth, 520px confirm, 620px verify, 660px about and organisation, 720px post-a-solution, 760px zones, 820px preview, 900px dashboard, 1100px header and footer
- Page padding: 40px horizontal, 56–88px top depending on screen

### Chip pattern

Used for organisation type, solution kind, cost, format, situation tags, dashboard tabs. One shared component:

- **Rest:** white fill, `1px solid rgba(18,9,2,0.16)`, ink text, weight 400, radius 999px, 12px/18px padding
- **Selected:** ink `#120902` fill, white text, `2px solid #120902`, weight 600

Single-select and multi-select share the visual; only the toggle behavior differs.

### Icons

**Lucide**, 2px stroke, round caps and joins, `currentColor`.

| Icon | Where |
| --- | --- |
| `layout-dashboard` | Header, "My solutions" |
| `building-2` | Header, "Organisation" |
| `plus` | Header, "Post a solution" |
| `arrow-left` | Every back link |
| `clock` | Verification-in-progress banner |
| `triangle-alert` | Freshness warning banner |
| `file-plus-2` | Empty dashboard state |
| `bookmark` | Save control in the preview card |
| `badge-check` | Verified stamps, submitted confirmation, verification row |
| `mail` | Email confirmation and password-reset screens |
| `user-plus` | Invite a colleague |

## Screens / Views

Thirteen screens across three groups.

### Group A — Account creation and recovery

#### 1. List your support (sign up)

**Purpose:** Convert an organisation that has heard about the platform. Leads with what they get, not what we need.

**Layout:** Centred 480px, 80px top padding.

**Components:**
- Heading "List your support", sub-line naming the offer: reach women across Scotland, listing is free, nobody pays for placement
- **Work email address** — `1.5px solid #120902`. Hint: "Use an address at your organisation's domain if you have one. It speeds up verification."
- **Create a password** — hint with live feedback (see below)
- **Confirm password** — border turns `1.5px solid #B91C1C` on mismatch, with "These do not match yet." beneath
- "Create account" (ink fill), then "I already have an account"
- "or" divider, then "Continue with Google" (gold-200 fill, gold-300 border), with a note that Google skips both the password and the confirmation email
- Closing panel, "What listing involves": four steps to set up, about ten minutes per solution, review before going live, six-monthly re-confirmation

**Password validation (live, on every keystroke):**
- Empty: "Ten characters or more. A short phrase you will remember beats a complicated word." in ink 60%
- Under 10: "Too short. N more to go." in red 700
- 10 or more: "Long enough." in green 700

Set expectations honestly on this screen. An organisation that discovers the review step after writing three listings is an organisation that stops.

#### 2. Confirm your email

**Purpose:** Establish that the person posting works at the organisation.

**Layout:** Centred 520px. `mail` icon in gold 500, heading, then the address in bold.

**Components:**
- "We sent a link to **{email}**. Open it to finish setting up your account. The link works for 24 hours."
- Panel, "Why we confirm it": every listing carries the organisation's name, so confirming the address is the first check that the person posting works there
- "I have confirmed it" (prototype shortcut; production waits for the real link)
- "Send it again" with a 60-second countdown, and "Use a different address"
- Closing hint about spam folders and organisation mail filters

**Production note:** the prototype's "I have confirmed it" stands in for arriving back via the emailed link. Build the real thing as a token-verified route.

#### 3. Sign in

**Purpose:** Return path for existing organisations.

**Layout:** Centred 480px. Email, password, "Forgotten your password?", "Sign in", Google alternative, and a route to first-time listing.

#### 4. Reset your password (request)

**Purpose:** Recovery without disclosing whether an account exists.

Two states in one screen:

- **Request:** email field, "Send me a reset link", plus "Your listings stay live while you sort this out. Nothing is taken down." Say this — an organisation locked out of its account will assume its listings went down with it.
- **Sent:** `mail` icon, "Check your email", and the deliberately conditional wording **"If there is an account for {email}, we have sent a link to set a new password. It works for one hour."** Identical response either way, always.

#### 5. Set a new password

**Purpose:** Complete recovery.

Same two password fields and the same live validation as sign-up. Sub-line warns "Setting this signs you out on other devices."

### Group B — Onboarding (4 steps, progress bar at 25/50/75/100%)

#### 6. About your organisation (step 1)

**Purpose:** Collect what women see next to every listing. Framed that way on the screen.

**Layout:** Centred 660px. Back link and "Step 1 of 4" counter row.

**Fields:**
- Organisation name (primary, `1.5px` border)
- "What kind of organisation are you?" — single-select chips: Charity, Social enterprise, Public body, Business, Network or group, College or university
- Website and "Where you are based", side by side
- "In one sentence, what does your organisation do?" — textarea, hint: "Plain words work best. Women searching may not know the terms your sector uses."

#### 7. Where do you fit? (step 2, Access Zones)

**Purpose:** Place the organisation in the ecosystem taxonomy.

**Layout:** Centred 760px. Two-column grid of eight zone cards, 12px gap.

**Zone card:** radius 12px, 18px padding, title 17px weight 700 with a status tag right-aligned, and the zone's focus line beneath at 14px, `opacity: 0.75`.

| State | Fill | Border | Text | Tag |
| --- | --- | --- | --- | --- |
| Unselected | White | `1px` ring | Ink | none |
| Primary | Ink `#120902` | `2px solid #120902` | White | "PRIMARY" at 75% white |
| Also | Gold 200 | `1px solid #DED1B0` | Ink | "ALSO" in gold 700 |

**Selection logic:** first tap sets the primary zone. Subsequent taps add secondary zones, capped at two. Tapping the primary clears it; tapping a secondary removes it. A live summary line below states what to do next: "Choose your primary zone first", "Primary zone set. You can add N more that you work across", or "Primary zone and two others set. Tap one to remove it."

**The eight zones** (name, then focus line):

1. Enterprise & Business Growth — Growth, scaling, entrepreneurship, procurement
2. Funding & Finance — Access to capital, financial resilience
3. Career, Confidence & Employability — Employment pathways, workforce participation, professional growth
4. Health & Wellbeing — Sustainable participation through health and wellbeing
5. Education & Pathways — Learning, capability development, lifelong skills
6. Business Infrastructure & Professional Services — Practical services to start, operate and grow
7. Women's Voice, Leadership & Civic Influence — Representation, leadership, civic participation
8. Visibility, Marketplace & Opportunities — Reaching audiences, creating opportunities

**Critical:** zones come from the database, not a hard-coded list. An HWS admin can add, rename, retire, or re-describe them. Listings hold a stable zone reference that survives a rename, and retiring a zone needs a defined path for whatever is attached to it.

**"None of these fit?" panel** (gold 200, always visible): housing, safety and rights, support for new Scots, and caring and family life have no zone yet. The panel promises hand-routing. This is load-bearing — it is the only way an organisation in those areas can list at all, and it must reach a person.

#### 8. Let us verify you (step 3)

**Purpose:** Establish the organisation is real, once.

**Layout:** Centred 620px.

**Fields:** charity or company number (primary), with "Not registered? Tell us who funds you instead and we will follow up." Then name and role side by side, then a contact number marked "Only used by us, and never shown to women using the platform."

**Closing line:** "You can start drafting solutions straight away. They go live once we have verified you, usually within two working days."

Open the screen by explaining why: every listing carries a verified stamp, and it is why women trust what they find.

### Group C — Posting and management

#### 9. Dashboard

**Purpose:** See listing performance, act on what needs attention, post more.

**Layout:** Centred 900px.

**Components in order:**

1. **Verification banner** (gold 200, `clock` icon), while pending: "Verification in progress. You can draft and submit solutions now. They publish as soon as we confirm your details."
2. **Heading** — "My solutions" once populated, otherwise the organisation name. Sub-line counts by status.
3. **Stats grid** — three cards: women who saw the listings this month, saves, click-throughs. Playfair figures at 34px over 14px labels.
4. **Freshness banner** (red 50, `triangle-alert`) when a listing is over six months old: "One listing needs checking. We last confirmed {name} on {date}. Women see the date, so an old one costs you applications." Dismissed by a "Still accurate" button. Frame this as costing them applications, never as an admin chore.
5. **Status tabs** — All, Live, In review, Closed
6. **Listing cards** — status pill above the name, name at 20px weight 700, meta line, then Edit and Preview buttons. Live listings show three inline figures beneath a divider: views, saves, click-throughs.

**Status pills:** Live = sage 200 / green 700. In review = gold 200 / gold 700. Closed = `rgba(18,9,2,0.06)` / ink 65%.

**Empty state:** a single card with a `file-plus-2` icon, "Post your first solution", and the definition that does the real work — "A solution is one thing a woman can act on: a course, a grant, a drop-in, an advice line. Post them separately rather than as one listing, so each can be matched to the woman who needs it." Then the primary button.

That definition is the most important copy in the organisation flow. Organisations naturally bundle everything into one listing, which destroys matching.

#### 10. Post a solution

**Purpose:** Collect exactly the eleven fields a woman-facing result card needs, and explain why each matters.

**Layout:** Centred 720px, 22px between field groups.

**Fields in order:**

| Field | Control | Hint |
| --- | --- | --- |
| What is it called? | Text, primary border | — |
| What kind of thing is it? | Single-select chips: Course or programme, Grant or fund, Advice or one to one, Drop in, Event, Mentoring | — |
| What does it do? | Textarea, 3 rows | Live word count: "N words. Around 30 reads best on a phone." |
| Who is it for? | Textarea, 2 rows | "Be specific about eligibility. A woman who does not qualify but applies anyway loses her time and yours." |
| What should she expect after she applies? | Textarea, 2 rows | "Not knowing what happens next is the most common reason women do not apply." |
| Cost | Single-select: Free, Free to apply, There is a cost | — |
| How does she take part? | Multi-select: In person, Online, By phone, Evenings or weekends | — |
| Where / Closing date | Two text fields side by side | "Leave the date blank if it runs all year. We remind women seven days before a closing date, and we will ask you to confirm the listing when it passes." |
| Where should she go to apply? | Text | — |
| Which situations does this suit? | Multi-select, eleven chips | "We match on these. Pick only the ones that genuinely apply, or your listing shows up in searches it does not fit." |

**Situation chips:** Returning to work · Unpaid carer · Pregnant or new parent · Starting or growing a business · Looking for funding · Changing career · Recently graduated · New to Scotland · Rural or island community · Experiencing financial difficulty · Looking after my health

These map exactly to the woman-facing question 3. Keep the two lists in sync from one source.

**Actions:** "Preview as she will see it" (primary) and "Save as draft".

Every hint explains a consequence for the woman rather than stating a rule. That is deliberate: organisations write better listings when they can see who is affected.

#### 11. Preview as she will see it

**Purpose:** Quality control that a style guide cannot do. Show the real woman-facing card.

**Layout:** Centred 820px.

**Components:**
- Heading "How she will see it", with the sub-line "This is the card in her results. The match reason is written by us from her answers, not by you." — sets that expectation before anyone asks to control it
- **The actual result card**, rendered exactly as the woman-facing prototype renders it: `2px solid #120902`, 28px padding, title, source line, Save control, blurb, tags, the two-column who/expect grid, the gold-200 "Why this matched you" panel, "Learn more" button, and the verified stamp reading "Verified once we check this listing"
- Empty fields show as "Not filled in yet" rather than collapsing, so gaps are visible
- **Gaps panel** (red 50) listing what is missing, each with its consequence:
  - "Who it is for is empty. Without it she cannot tell whether she qualifies, and this is the field women read first."
  - "What to expect is empty. Not knowing what happens next is the most common reason a woman does not apply."
  - "No situations picked, so we can only match this on your words and location."
- "Submit for review" and "Keep editing"

Warnings, not blocks. An organisation can submit an incomplete listing; review catches it.

#### 12. Submitted for review

**Purpose:** Confirm, and say what happens next.

`badge-check` in green 700, "Submitted for review", "We read every listing before it goes live, usually within two working days. We will email you when it publishes, or if we need to ask you something."

**Panel, "What we check":** eligibility clear, dates real, link working, plain-language description matching what is actually run. Plus: "We may edit wording for clarity and will tell you if we do." Never edit silently.

Actions: "Post another solution" (primary) and "Back to my solutions".

#### 13. Organisation

**Purpose:** Verification status, the public-facing details, and who can post.

**Layout:** Centred 660px, four groups:

- **Verification** — status row with `badge-check`, coloured green 700 when verified and gold 700 while pending. Label reads "Verified · confirmed {date}" or "Verification in progress", with "View details" or "Chase this" alongside.
- **Details women see** — organisation name, location, primary zone, each with Change
- **Who can post** — current user, "Invite a colleague" with `user-plus`, and the note "Anyone you invite can post and edit listings for this organisation. Verification stays with the organisation, not the person."
- (No account-removal section by current decision.)

## Interactions & Behavior

### Navigation

```
sign up → confirm email → about → zones → verify → dashboard (empty)
                                                        ↓
                                    post a solution → preview → submitted
                                                        ↓
                                              dashboard (populated) → organisation

sign in → dashboard
sign in → forgot password → (sent) → set new password → dashboard
```

Header navigation appears only once signed in: My solutions (with a live count), Organisation, and Post a solution as the primary action.

### Global rules

- Back is one step, labelled with its destination
- Scroll to top on every navigation
- Focus ring `2px solid #8E7B49`, 2px offset
- Chip hover: border to gold 500
- Onboarding progress bar full-bleed under the header at 25/50/75/100%
- No motion beyond simple state changes. This is a work tool used at speed.

### Validation

Live and inline, never on blur alone. Password length and match feedback update per keystroke; the word count on the description updates as they type. Errors sit beneath their field in red 700, with the field border changing to `1.5px solid #B91C1C`. Never a bare red border with no message.

## State Management

```
screen        signup | confirm | signin | forgot | reset | about | zones |
              verify | dash | new | preview | submitted | org
email         string
pw, pw2       string          validated live, never persisted in production
resetSent     boolean         toggles the two states of the forgot screen
orgName       string
orgType       string          single-select
orgSite       string
orgPlace      string
orgBlurb      string
primaryZone   string          one zone id
alsoZones     string[]        max 2
verified      boolean
tab           'All' | 'Live' | 'In review' | 'Closed'
recheckDone   boolean         dismisses the freshness banner
posted        string[]        listing ids
form          { name, kind, blurb, who, expect, cost, formats[],
                place, deadline, link, tags[] }
```

**Two behavioral switches** are exposed in the prototype as props, and both are real product decisions:

- `reviewBeforePublish` (default true) — switches the submit button between "Submit for review" and "Publish now", changes the confirmation screen, and removes the "In review" status and tab. The unreviewed copy states the tradeoff explicitly: the verified stamp then covers the organisation but not the listing.
- `showPerformanceStats` (default true) — gates the dashboard stats grid.

**Persistence:** the prototype writes everything to `localStorage` under one key. Production holds the organisation record, listings, and verification evidence server-side. **Never persist passwords client-side.**

**Data fetching:** zones come from the database. Listing submission needs a status workflow (draft → in review → live → closed) with an audit trail, since HWS may edit wording and the organisation must be told.

## Accessibility

WCAG 2.2 AA. Minimum 44×44px targets, `2px` focus rings, errors inline with focus moved to the message.

**Two known prototype shortcuts to fix in the build:**

1. All field labels are `<span>` with no `<label for>` association. Every field needs a real label tied to its input.
2. The four inputs on the verification step are uncontrolled, with no value or change binding.

Also for the build: zone cards are `<button>` elements and need `aria-pressed` plus an accessible name that includes their primary or secondary state, since the state is currently conveyed by colour and a small text tag.

## Assets

- **Fonts:** Playfair Display and Inter, Google Fonts. Self-host in production.
- **Icons:** Lucide.
- **Images:** none. No logo asset yet — the header shows the text "Logo" as a placeholder, beside a "For organisations" badge.

## Still to design

1. **The admin tools.** The listing review queue, organisation verification, and Access Zone management. All three are internal, the whole trust model depends on them, and none has been specified. This is the largest gap in the project.
2. **Notification emails to organisations:** listing published, listing needs changes, six-monthly re-confirmation prompt, colleague invitation.
3. **The invite-a-colleague flow** beyond the button.
4. **Edit an existing listing**, including what happens to a live listing while an edit is in review.
5. **Verification rejected or needing more evidence.**
6. **The listing-closed path**, when a deadline passes and the organisation is asked to confirm, extend, or close.
7. **Analytics beyond the three headline figures**, if organisations ask for more.

## Risks worth carrying into the build

- **Review is a staffing commitment, not a feature.** Two working days is a promise made on screen. Listing review, six-monthly re-confirmation, hand-routing for the four uncovered categories, and the woman-facing support line all resolve to a person answering.
- **The four categories with no zone** make the "None of these fit?" escape load-bearing. An organisation working in housing or safety currently cannot list itself properly.
- **Organisations will bundle.** Everything in the copy pushes against posting one catch-all listing, because bundling destroys matching. Watch for it in the first cohort.
- **Stale listings are the failure mode.** The verified date is visible to women, so an unmaintained listing actively damages both the organisation and the platform. The dashboard prompt is the only mechanism, and it depends on organisations logging in.
- **Google sign-in skips both the password and the email confirmation**, which weakens the "does this person work there?" check. Worth deciding whether domain matching should be required alongside it.
- **`reviewBeforePublish` is a one-way door.** Turning review off is easy and turning it back on means auditing everything published in between.

## Files

| File | Notes |
| --- | --- |
| `Organisation Portal Desktop.dc.html` | The prototype. Open in a browser and click through from sign-up. |
| `HWS Portal Project Brief.md` | Full project brief covering both sides of the platform, principles, and open decisions. |
| `support.js` | Design-tool runtime. Required for the prototype to open. **Do not port.** |
