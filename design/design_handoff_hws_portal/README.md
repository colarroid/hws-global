# Handoff: HWS Portal — Find Support & Account

## Overview

A navigation platform that helps women in Scotland find relevant support. She answers three short questions (what she needs, where she is, her situation), and gets a short ranked list of next steps with a reason attached to each. An optional account saves those opportunities and reminds her before deadlines pass.

The product promise, which every implementation decision should defend:

- **No account is ever required** to search, read, or apply. The account only makes a saved list outlive the browser session.
- **Navigation, not a directory.** The answer is a handful of ranked results, not a filterable index. If a user needs filters to get a useful answer, the ranking is wrong.
- **Neutral ranking.** No paid placement, ever.
- **Never a dead end.** Every empty state offers a pre-counted widening or a route to a human.

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly.

The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, SwiftUI, native, whatever is in place) using its established patterns, component library, and conventions. If no environment exists yet, choose the most appropriate framework for the project and implement there.

Do not ship the HTML. Do not port the custom template runtime (`support.js`) — it is a design-tool artifact, included only so the prototypes open and run for reference.

## Fidelity

**High-fidelity.** Colors, typography, spacing, and interaction states are final and specified exactly below. Recreate the UI faithfully using the codebase's existing libraries.

Two caveats:

- The desktop prototype is the **approved reference**. The mobile board is an annotated spec, not a working prototype.
- Content is placeholder. Every organisation, grant, and date is invented for layout purposes. Real listings come from HWS.

## Platforms

| File | What it is | Use it for |
| --- | --- | --- |
| `Womens Navigation Desktop.dc.html` | Working clickable desktop prototype, 12 screens | Layout, type scale, interaction behavior, state logic |
| `Womens Navigation Flow.dc.html` | Annotated mobile board, same 12 screens | Mobile layout, plus purpose / hierarchy / states / risks per screen |

Build both. The desktop layout is a centred single column that caps out; the mobile layout is the same content in a 360px-wide stack. There is no separate tablet design — the column simply narrows.

## Design Tokens

### Colors

| Token | Value | Use |
| --- | --- | --- |
| Page ground | `#F9F6F1` | Body background, header, footer |
| Surface | `#FFFFFF` | Cards, inputs, chips at rest |
| Surface subtle | `#FCFCFA` | Applied/dimmed saved-list cards |
| Ink | `#120902` | Primary text, primary buttons, selected chips |
| Ink 70% | `rgba(18, 9, 2, 0.7)` | Body copy, sub-lines |
| Ink 65% | `rgba(18, 9, 2, 0.65)` | Card metadata |
| Ink 60% | `rgba(18, 9, 2, 0.6)` | Eyebrow labels, footer, hints |
| Ink 40% | `rgba(18, 9, 2, 0.4)` | Input placeholders |
| Ring | `rgba(18, 9, 2, 0.16)` | Default borders on cards, inputs, chips |
| Hairline | `rgba(18, 9, 2, 0.1)` | Section dividers, header/footer rules |
| Hairline soft | `rgba(18, 9, 2, 0.08)` | Within-card dividers, progress track |
| Gold 500 | `#8E7B49` | Accent rule, focus ring, save icon, progress fill |
| Gold 700 | `#5F5230` | Accent text and links (AA-safe at small sizes) |
| Gold 200 | `#F7F3EB` | "Why this matched" panel, neutral status pills, Google button |
| Gold 300 | `#DED1B0` | Border on gold-200 surfaces |
| Sage 200 | `#EEF2EF` | Tag chips, answer chips, applied pills |
| Green 700 | `#14672F` | Verified stamps, applied status |
| Red 50 | `#FDEEEB` | Urgent deadline pill background |
| Red 200 | `#F1C7C0` | Border on red surfaces |
| Red 700 | `#B91C1C` | Urgent deadline text, destructive action |

Never use gold 500 for small text — it fails AA on the cream ground. Gold 700 is the text weight.

### Typography

Two families, loaded from Google Fonts:

- **Playfair Display** (400/500/600/700) — all headings and numeric screen labels
- **Inter** (300/400/500/600/700) — all UI, body, labels, buttons

| Role | Desktop | Mobile | Weight | Notes |
| --- | --- | --- | --- | --- |
| Page heading | 44–46px / 1.1 | 27–30px / 1.15 | 500 | Playfair, `letter-spacing: -0.01em` |
| Section heading | 24px | 21px | 600 | Playfair |
| Card title | 23px / 1.25 | 18–19px / 1.25 | 700 | Inter |
| Body | 17–18px / 1.55–1.6 | 15–16px / 1.55 | 400 | Inter, `max-width: 62ch` on long paragraphs |
| Metadata | 15px | 14px | 400 | Inter, ink 65% |
| Eyebrow label | 11px | 11px | 700 | Inter, `letter-spacing: 0.14em`, uppercase |
| Button | 17–18px | 16–17px | 700 | Inter |
| Fine print | 13–14px | 12–13px | 400 | Inter, ink 60% |

Minimum body size 15px. Never smaller than 12px for any text.

### Spacing, radius, shadow

- Spacing scale: 4 / 6 / 8 / 10 / 12 / 14 / 16 / 20 / 24 / 28 / 32 / 40 / 56 / 72 / 96
- Layout gaps: 28px between major blocks, 14px between cards, 8–10px between chips
- Radius: `999px` pills, `14px` cards, `10px` inputs and buttons, `8px` status pills, `6px` tags, `26px` mobile device frame
- Card shadow: `0 4px 6px -1px rgba(18, 9, 2, 0.1), 0 2px 4px -2px rgba(18, 9, 2, 0.1)`
- Content max-widths (desktop): 460px sign-in, 520px profile, 600px settings, 660px questions and refine and change, 720px no-match, 780px saved list, 820px results, 1100px header and footer
- Page padding: 40px horizontal desktop, 18–20px mobile

### Icons

**Lucide**, 2px stroke, `round` caps and joins, `currentColor`. Sizes: 14px in fine print, 15–17px inline with text.

| Icon | Where |
| --- | --- |
| `bookmark` | Header saved-list button; Save on each result card (fills solid when saved) |
| `settings` | Header settings button |
| `arrow-left` | Every back link |
| `check` | Selected chips, filters, scopes, tabs |
| `sliders-horizontal` | "Refine or widen" chip |
| `map-pin` | "Anywhere in Scotland" |
| `globe` | "Online support only" |
| `lock` | Sign-in privacy line |
| `badge-check` | Verified stamp (green 700) |
| `phone` | "Contact our support" |
| `trash-2` | Delete account |
| `log-out` | Sign out |

## Screens / Views

Twelve screens. Desktop numbering matches the mobile board.

### 1. Question 1 — need

**Purpose:** Let her describe her need in her own words, then translate it into something matchable.

**Layout:** Progress bar (33%) full-bleed under the header. Centred 660px column, 72px top padding. Counter row → heading → sub-line → textarea → suggestions → Next.

**Components:**
- Counter: "Question 1 of 3", 14px, weight 600, ink 60%
- Heading: "What do you need help with?" 46px Playfair 500
- Sub-line: "In your own words. There's no wrong answer." 18px, ink 70%
- Textarea: 3 rows, `1.5px solid #120902`, radius 10px, 18px padding, 18px text, vertical resize only. Placeholder: "e.g. getting back to work after caring for my mum"
- Eyebrow "SUGGESTIONS", then up to 3 pill buttons, 16px, white, ring border, radius 999px, 12px/18px padding
- Next: full-width, ink fill, white text, 18px weight 700, 19px padding, radius 10px

**Behavior:** Textarea autofocuses on load. Suggestions are visible **before** she types — this is the single most important detail on the screen. Tapping a suggestion sets the need and advances. Suggestions refresh after a typing pause, not per keystroke.

**States:**
- Empty: suggestions become five common needs; Next disabled with hint text. Never a red error.
- Unrecognised words: keep her text verbatim, show "We'll search on what you wrote"
- Submitted blank: inline message above the field, focus moved to it — "Add a few words so we know where to look."

### 2. Question 2 — where

**Purpose:** Accept any level of geographic precision, and make "I don't mind" a first-class answer.

**Layout:** Progress 66%. Centred 660px. Back + counter row → heading → sub-line → input → match list → "Or" escapes → Next.

**Components:**
- Heading: "Where should we look for support?" 46px Playfair 500
- Sub-line: "A town, a postcode, or your council area."
- Input: `1.5px solid #120902`, radius 10px, 18px padding. Placeholder "e.g. EH48"
- Match list: white card, ring border, radius 10px, rows divided by hairline-soft. Each row 17px, 16/18px padding, place name bold + qualifier in ink 60% ("· Bathgate, West Lothian", "· council area", "· town"). Full-width left-aligned buttons.
- Escapes: "Anywhere in Scotland" (map-pin), "Online support only" (globe) as pills

**States:**
- Partial postcode resolves to district. Never demand a full postcode.
- Unrecognised: "We don't know that place. Try a nearby town, or search anywhere in Scotland." with both escape buttons.
- Ambiguous (two Newtons): list both with council names.
- Location services: never requested.

### 3. Question 3 — situation

**Purpose:** Unlock eligibility-based matches without feeling like a means test.

**Layout:** Progress 100%. Centred 780px (wider, to let twelve chips wrap in fewer rows).

**Components:**
- Heading: "What best describes your situation?"
- Sub-line: "This helps us spot support you may qualify for. You can pick more than one."
- Twelve multi-select chips in one wrapping group, 10px gap
- Next, then fine print: "We don't store your answers or share them with the organisations we show you."

**Chip options, in order:** Returning to work · Unpaid carer · Pregnant or new parent · Starting or growing a business · Looking for funding · Changing career · Recently graduated · New to Scotland · Rural or island community · Experiencing financial difficulty · Looking after my health · Prefer not to say

**Chip states:**
- Rest: white fill, `1px solid rgba(18,9,2,0.16)`, ink text, weight 400
- Hover: border becomes gold 500
- **Selected: ink `#120902` fill, white text, `2px solid #120902`, weight 600, leading `check` icon**

**Behavior:** Next always proceeds, including with nothing selected. Nothing nags.

**States:**
- Nothing selected or "Prefer not to say": results run on need and place only, and eligibility-based matches drop out of the list.
- "Prefer not to say" is remembered for the session so we don't re-ask.

**Note on the counter:** the approved Figma screens label these "of 4", implying a fourth question that does not exist in the approved set. The prototype reads "of 3" and the progress bar is thirds. If a fourth question is coming, both need changing back together.

### 4. Working it out (loading)

**Purpose:** Hold attention on a slow connection without a spinner that could mean anything.

**Layout:** Centred 780px, 96px vertical padding. Heading, three stacked skeleton blocks (120px tall, radius 12px, tinted sage / gold-200 / surface-subtle), then "This usually takes a couple of seconds."

**Behavior:** Heading names her place — "Looking for support near Bathgate…". Auto-advances to results after ~1.5s.

**States:**
- Under 1s: skip this screen entirely
- Over 6s: add "Still looking. You can wait, or see online support now" with a button
- Failure: error state that preserves every answer — **not yet designed, needed before build**
- Announce to screen readers via a polite live region
- Never persist this screen: a reload mid-load must land on results, not trap the user

### 5. Next steps (results) — the core screen

**Purpose:** The whole proposition. A short, ordered set of next steps, each with a reason.

**Layout:** Centred 820px. Back link → heading → answer chips row → result cards (14px gap) → footer actions.

**Header block:**
- "← Change answers" back link
- Heading "Next steps for you" 44px Playfair 500
- Answer chips: one per answer, sage-200 fill, hairline border, 14px, radius 999px — plus a "Refine or widen" chip in white with a gold 500 border, gold 700 text, weight 700, `sliders-horizontal` icon

**Result card** (white, radius 14px, 28px padding, 14px internal gap):

1. **Title row:** name (23px weight 700) + source line (15px ink 65%) on the left; Save button top-right
2. **Blurb:** 17px / 1.6, `max-width: 62ch`
3. **Tags:** sage-200 chips, 13px weight 600, radius 6px. Deadline tag uses gold-200 fill with gold-700 text
4. **Detail grid:** two columns, 16px/32px gap, divided above by hairline-soft. "WHO IT'S FOR" and "WHAT TO EXPECT" eyebrow labels with 15px values
5. **Why panel:** gold-200 fill, radius 10px, 14/16px padding, 15px gold-700 text, "**Why this matched you:** …"
6. **Action row:** "Learn more" (ink fill, 15px/32px padding) on the left; verified stamp on the right — `badge-check` icon + "Verified · last checked 4 August 2026" in **green 700**

**The first card carries `2px solid #120902`; all others `1px solid ring`.** That border is the only thing marking the strongest match — the "Start here / strongest match" label was removed. Do not add a badge back without asking.

**Save button:** white fill, ring border, radius 10px, 12/16px padding, `bookmark` icon in gold 500 + label. Outline icon and "Save" at rest; **solid-filled icon and "Saved"** when saved. Toggling updates the header counter immediately.

**Footer actions:** "That's everything that fits closely. You can widen the search or change what you told us." then three buttons — "Show support across Scotland", "Change my answers", "Start over" (text-only, gold 700).

**Behavior:**
- Cap the list at five results
- "Learn more" goes to a service detail page — **not yet designed**
- Applying always happens on the organisation's own site, so **no results card is ever labelled "Apply"**
- Removing an answer chip re-runs the search in place and keeps scroll position

**States:** Fewer than three matches → the list is simply shorter, no padding. Nothing at all → screen 8. Widened → banner reading "Now showing support across Scotland — back to West Lothian".

### 6. Refine or widen

**Purpose:** Widen or narrow without re-answering anything.

**Layout:** Centred 660px. Back to results → heading → "HOW FAR TO LOOK" scope group (single-select: My area / Nearby areas / All Scotland / Online only) → "ONLY SHOW" filter group (multi-select: Free / Open now / No forms / Women only) → live count → "Update my search".

**Behavior:** A full page, not a bottom sheet. Answers persist for the session; this screen only ever adds or relaxes. Clearing happens by deselecting — there is no separate reset control.

**States:**
- Live count updates as selections change: "Showing 3 next steps with 2 filters." / "Showing all 3 next steps in my area."
- Filter empties results: stay here, show "0 with these filters. Try removing 'No forms'."
- Back to results discards unapplied changes without warning, since nothing is lost

**Keep this shallow.** Filters are how a directory thinks.

### 7. Change answers

**Purpose:** Show she was understood in her own words, and set expectations for a short answer.

**Layout:** Centred 660px. Three editable rows, each a white card with the eyebrow label above the value and a "Change" text button right-aligned. Then the expectation line, "Update my search", and "Start over".

**Rows:** "You need help with" / "Looking in" / "Your situation"

**Behavior:** Each "Change" returns to that one question and comes straight back here. Does double duty: a checkpoint before the first search, and the edit surface reached from the results header afterwards. Back returns to whichever the user came from.

**States:** Q3 unanswered → third row reads "Not given, add if you'd like". Start over confirms once: "This clears your answers. Start again?"

### 8. Nothing matched

**Purpose:** Turn absence into a next step. **Never the words "no results", never a full stop.**

**Layout:** Centred 720px. Back → heading → honest explanation → "Try this first" card → 2×2 grid of other routes → human fallback.

**Components:**
- Heading: "We haven't found a close match yet"
- Explanation: "That doesn't mean there's no help. It means we don't have something that fits your search right now. Here's what we'd try next."
- Primary card: `2px solid #120902`, radius 12px, 24px padding. Eyebrow "TRY THIS FIRST" in gold 700, then "Widen to all of Scotland" (21px weight 700), then **a real count** — "4 services support this, and 3 of them work by phone or online" — then "Show me those 4"
- Grid: three white cards (Online support only / Nearby areas / Change what you asked for), each a title plus a note
- Fallback: "Rather talk to a person?" → ink-filled block, `phone` icon, "Contact our support", "Free, by phone, Monday to Friday"

**Counts must be computed before this screen renders.** Only ever offer a widening that has something in it — otherwise it's another dead end.

**States:** Nothing anywhere in Scotland → drop the widening block, lead with Contact our support. Outside opening hours → the button still works and says when someone will answer.

**This is the highest-risk screen in the product.** If it reads as failure she won't come back, and she'll tell other women it doesn't work.

### 9. Access your account

**Purpose:** Smallest possible entry point. One screen serves both signing up and signing back in.

**Layout:** Centred 460px, 80px top padding.

**Components:**
- Heading "Access your account", sub-line "We'll send you a one-time passcode to sign in."
- Email field, `1.5px solid #120902`
- "Send me a sign-in code" (ink fill)
- "or" divider with hairline rules either side
- "Continue with Google" — gold-200 fill, gold-300 border
- Privacy line with `lock` icon: "Your email is kept private and secure."
- "Just search without signing in" text button

**Reached only when she asks to save something or be reminded.** Never before results, never as a wall.

**States:** Existing address gets the identical screen and message — never reveal whether an account exists. Malformed address: inline above the field, never a bare red border. New accounts continue to the profile screen; returning users go straight to the saved list.

**Not yet designed, needed before build:** the six-digit passcode entry screen. Spec: code valid 15 minutes, resend after 60 seconds, auto-submit on the sixth digit, paste fills all six, wrong code shows inline with three attempts before a 60-second wait, expired code offers a fresh one on tap with nothing re-typed.

### 10. Set up your profile

**Purpose:** A name to greet her by. Nothing here is required.

**Layout:** Centred 520px. First name and last name side by side, then optional phone, then Continue.

**Behavior:** Continue works with every field untouched. Arriving via Google pre-fills the name.

**Two things corrected from the approved screens** — both need signing off:

1. The Figma screen labels **both** name fields "First name". Corrected to "Last name" here.
2. Its body copy reads "One email address is all we need. No name, no postcode" directly above a name request. Rewritten to "Just a name to greet you by. Nothing here is required."

The phone field has no use in the current scope — no SMS, no sharing. The prototype adds "We only use this if you ask us to call you back" because an unexplained field is worse. **Recommend cutting the field** unless a callback flow is actually planned.

### 11. Your saved list

**Purpose:** The reason the account exists. Ordered by what closes first, so the list itself does the prompting.

**Layout:** Centred 780px. Heading → tabs → item cards → footer actions.

**Components:**
- Heading: "Your saved list", or "Jean's saved list" when a first name is set
- Tabs: "All 4" / "Closing soon" / "Applied", pills with a leading `check` when active
- Item card: white, radius 12px, 24px padding, content left and actions right, wrapping on narrow widths
  - **Status pill above the name** — this is the hierarchy point. Urgent (red-50 fill, red-700 text): "Closes in 8 days · 26 September". Neutral (gold-200/gold-700): "Closes 31 October" or "No closing date". Applied (sage-200/green-700): "✓ You marked this applied"
  - Name 20px weight 700, meta 15px ink 65%
  - Actions: "Apply" (ink fill) and "Mark applied" (white, ring border)
- Footer: "Print my list", "Share", "Reminders and account settings"

**Behavior:** Sort by closing date; applied items sink to the bottom and take surface-subtle backgrounds. **"Apply" is correct here** — she has already read the detail and decided. "Mark applied" is hers to set and never inferred; we can't see what the organisation does.

**States:**
- Empty: "When you find something worth coming back to, press Save on it. It'll wait here, and we'll tell you before it closes." plus a "Find support" button that starts a **fresh** search
- Deadline passed: the card stays, marked "Closed 26 September", with "Ask when the next one starts" and two alternatives. **A saved item never silently disappears.**
- Service stopped running: marked "No longer running" with alternatives
- Details changed since saving: "The dates for this changed on 12 September"

Keep Print and Share on the signed-in list — support workers and family often act on her behalf.

### 12. Settings

**Purpose:** State exactly what we hold, and make leaving as easy as joining. Four controls, no dashboard.

**Layout:** Centred 600px. Back → heading → Reminders group → Email group → Your data group → Sign out.

**Components:**
- Reminders: "Before a deadline" toggle row (On/Off in gold 700), "How far ahead: 7 days", then "We send nothing else. No newsletter, no suggestions."
- Email: current address with a "Change" text button
- Your data: "We hold your email address, your saved items, and the dates you saved them. Nothing else." then the destructive button — white fill, `1.5px solid #B91C1C`, red-700 text, `trash-2` icon
- "Sign out on this device" with `log-out` icon

**States:** Delete confirms once, naming the actual count ("Your 4 saved items and your email address. This can't be undone."), completes immediately, and returns to a plain search screen **with no win-back prompt**. Reminders off still shows deadline status in the list. Email change is confirmed at the new address before taking effect.

**Deliberately absent:** profiles beyond a name, interests, following organisations, activity history, recommendations. Each would make the account a reason to hold data we don't need.

## Interactions & Behavior

### Navigation

```
Q1 need → Q2 where → Q3 situation → loading → results → organisation's own site

results ──(Refine chip)──→ refine ──→ results
results ──(header back)──→ change answers ──→ loading → results
results ──(no matches)───→ nothing matched
Save on any card ────────→ sign in → profile (first time only) → saved list → settings
```

### Global rules

- **Back is always one step**, labelled with where it goes ("Change answers", "Back to results"), and never loses typed input
- **Refine happens in place.** Answer chips are removable; removing one re-runs the search and keeps scroll position
- **Widen is additive and reversible**, with a banner naming current scope and a one-tap return
- **Start over** is always available, confirms once, and is never the only way forward
- **State belongs in the URL** so back, refresh, sharing, and printing all work and the browser's own back button behaves. The prototype uses local state plus `localStorage`; production should use real routing.
- **Saving never requires an account.** The bookmark works immediately for the session; the account only makes the list outlive the window.
- Every scroll-to-top on navigation

### Transitions

The prototype uses none. Keep motion minimal: opacity/transform fades under 200ms at most. No slide-in page transitions — they cost time on older Android hardware, which is the target device.

### Focus and hover

- Focus ring: `2px solid #8E7B49` with `2px` offset, on all interactive elements
- Chip hover: border to gold 500
- Buttons: no transform on hover; darken fills slightly if the codebase has a convention for it

## State Management

```
screen        one of: q1, q2, q3, loading, results, refine, change,
                     nomatch, signin, profile, saved, settings
need          string
place         string
situation     string[]        multi-select, from the twelve options
scope         string          single-select, default 'My area'
filters       string[]        multi-select
saved         string[]        service ids
applied       string[]        service ids
savedTab      'All' | 'Closing soon' | 'Applied'
email         string
first, last   string
reminders     boolean
```

**Transitions:** every screen change is a route. `loading` auto-advances after ~1.5s (real implementation: on search resolution, skipping the screen entirely under 1s). `startOver` clears need, place, situation, filters, scope. `deleteAccount` clears saved, applied, and name fields.

**Persistence:** the prototype writes everything to `localStorage` under one key and sanitises `loading` to `results` on read, so a reload mid-search can't trap the user. Production should persist saved items and account data server-side, keyed to the account; search answers can stay in the URL and session.

**Data fetching:** search takes need text, place, and situations, and returns ranked results. Each result needs all eleven card fields including the `why` string — the match reason is generated server-side alongside the ranking, since only the ranker knows why something scored.

## Accessibility

WCAG 2.2 AA is a requirement, not an aspiration.

- Minimum target size **44×44px** everywhere
- Keyboard order: skip link, back, then content
- Loading announced via a polite live region
- Errors appear inline above the field with focus moved to the message, never a bare red border
- All text meets AA on the cream ground (this is why gold 700 replaces gold 500 for small text)
- Real semantic elements: `<button>` for actions, `<a>` for navigation, `<article>` for result cards, one `<h1>` per screen
- The mobile board specifies reading controls (text size, contrast, language, low-data mode) that are **not yet designed**

## Assets

- **Fonts:** Playfair Display and Inter, Google Fonts. Self-host in production.
- **Icons:** Lucide. Use the codebase's existing Lucide package if present.
- **Images:** none. No logo asset yet — the header shows the text "Logo" as a placeholder.

## Still to design

The flow has real gaps. Each of these is reachable from an approved screen:

1. **Passcode entry** (behind "Send me a sign-in code") — spec is in section 9
2. **Service detail page** (behind "Learn more") — the most-visited page in the product, and the last one we control
3. **Handover interstitial** to the organisation's site
4. **Deadline reminder email** — one per deadline, seven days out, one email even when several close the same week
5. **Error and offline states** — including search failure, which must preserve every answer
6. **Landing page** — the prototype opens straight on Q1
7. **Sensitive-category handling** — health, safety, abuse, hardship. Needs an immediate human route above results and a documented exit control.
8. **Helper mode** — support workers and family searching on someone's behalf
9. **Cold arrivals** from a search engine landing on a service page
10. **Reading and access controls** — text size, contrast, language, low-data mode

## Risks worth carrying into the build

- **Q1's blank box** is where digital confidence bites. Suggestions must render before she types.
- **Q3 has twelve chips and no Skip button.** The approved design removed it; Next still proceeds with nothing selected, but that is no longer stated. Watch this in testing.
- **Result cards carry eleven pieces of information.** If scroll fatigue shows, collapse the lower half of cards below the first — never the first card, never behind a login.
- **"Contact our support" is a staffing commitment.** Someone has to answer Monday to Friday, and the queue is now HWS's.
- **The account is the only ask in the flow.** If the sign-in prompt drifts earlier — onto results, or before she has saved anything — the no-login promise reads as a bait and switch.
- **A passcode still needs email access on the same phone**, a real barrier on borrowed or shared devices. And any email from us could be read by someone else in the house: neutral sender name and subject, signed off with a safety partner.
- **"Kept private and secure" sits directly above a Google button** that hands an identifier to a third party. Reconcile the copy or the option.
- **Data freshness is the trust mechanism.** The verified stamp is only as good as the re-check cadence. It needs an owner, plus a "something wrong?" reporting loop.

## Files

| File | Notes |
| --- | --- |
| `Womens Navigation Desktop.dc.html` | Desktop prototype. Open in a browser and click through. |
| `Womens Navigation Flow.dc.html` | Mobile annotated board. Pan and zoom; each screen has purpose / hierarchy / states / risks beneath it. |
| `support.js` | Design-tool runtime. Required for the prototypes to open. **Do not port.** |
