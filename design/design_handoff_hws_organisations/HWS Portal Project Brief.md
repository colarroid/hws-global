# Women's Navigation & Access Platform

**Project brief, version 2. Updated 24 August 2026.**

A platform that helps women in Scotland find the support that fits them, and helps the organisations offering that support get found by the women who need it.

> **The whole product exists to prove one sentence.** A woman can tell us what she needs, in her own words, and quickly find a trusted, relevant next step. Everything below is in service of that sentence, and anything that does not serve it is out of scope.

---

## The problem

Support for women in Scotland exists in quantity: employability programmes, grants, business advice, health services, carers' centres, training. Very little of it is findable by the women who qualify for it. The barriers are consistent:

- Organisations describe themselves in sector language. Women search in their own words, and the two rarely meet.
- Eligibility is buried, so women either self-exclude from support they qualify for, or spend time applying for support they do not.
- Existing directories return long undifferentiated lists, which pushes the work of judgement onto the person with the least time and information.
- Listings go stale. One wrong date or dead link costs the platform its credibility permanently.

The walkthrough case the design is built against: **a 42-year-old woman in West Lothian**, out of paid work while caring for her mother, wanting to return to work. Older Android phone, patchy signal, twenty minutes between appointments. She has never heard of most of the organisations that could help her, and she does not know the words they use for themselves.

---

## Principles

These are load-bearing. Each one is a decision that gets challenged during build, and each has a cost attached to breaking it.

**1. No account is ever required to search, read, or apply.**
The account exists only to make a saved list outlive the browser session. The moment a sign-in prompt appears before results, the promise reads as a bait and switch and the platform loses the women with the least digital confidence, who are the ones it is for.

**2. Navigation, not a directory.**
The answer is a handful of ranked next steps with a reason attached to each, capped at five. If a woman needs filters to get a useful answer, the ranking is wrong and the filters are covering for it.

**3. Neutral ranking. No paid placement, ever.**
This is stated on the results screen where women can see it. It also constrains the revenue model, which needs resolving separately.

**4. Never a dead end.**
Every empty state offers a pre-counted widening or a route to a person. The words "no results" never appear. Counts are computed before the screen renders, so a suggested widening is never itself another dead end.

**5. Her words, not ours.**
Free text is accepted verbatim and translated behind the scenes. Where the platform's own taxonomy appears on screen, it is rewritten into plain language and the taxonomy stays invisible.

**6. WCAG 2.2 AA, in the interface and not only in the code.**
44px minimum targets, adjustable text and contrast, a low-data mode for older phones, and errors that move focus rather than flashing a red border.

**7. Honesty about limits.**
The platform says what it cannot do: it cannot decide entitlement, and the exit control does not clear browser history. Overclaiming on either costs more than the feature is worth.

---

## Two audiences, one platform

The platform has two distinct products sharing one database, and their incentives are not identical. Women want fewer, better-matched results. Organisations want visibility. The ranking resolves that tension in the woman's favour, every time.

| | Women seeking support | Organisations |
| --- | --- | --- |
| **Primary goal** | Find one next step worth taking | Post solutions and be found |
| **Entry** | Three questions, no account | Four-step onboarding, account required |
| **Authentication** | One-time passcode or Google, no password | Email, password, confirmed address, or Google |
| **Device** | Mobile first, often older hardware | Desktop, at work |
| **Data held** | Email, saved items, save dates. Nothing else. | Organisation record, listings, verification evidence |

A third audience matters and is not yet designed for: **helpers**. Support workers, advisers, and family members search on someone else's behalf, and they are expected to be a large share of early traffic. They need the same flow with a pronoun change and a way to hand the results over.

---

## Access Zones

The platform's category architecture is the Access Zones. They describe where an *organisation* sits in the ecosystem, so organisations select from them during onboarding and women are never asked. Each organisation picks one primary zone and up to two more it works across.

**Access Zones are created and maintained by an HWS administrator.** They are not fixed in code and not editable by organisations. An admin can add a zone, rename one, retire one, or change its description, so the taxonomy can grow as the ecosystem does without a release. That has three consequences for the build:

- Zones are data rather than an enumerated type.
- Every listing keeps a stable reference to its zone through a rename.
- Retiring a zone needs a defined path for the organisations and listings attached to it.

The eight below are the current set.

| Zone | Focus |
| --- | --- |
| Enterprise & Business Growth | Growth, scaling, entrepreneurship, procurement |
| Funding & Finance | Access to capital, financial resilience |
| Career, Confidence & Employability | Employment pathways, workforce participation |
| Health & Wellbeing | Sustainable participation through health |
| Education & Pathways | Learning, capability development, lifelong skills |
| Business Infrastructure & Professional Services | Practical services to start, operate and grow |
| Women's Voice, Leadership & Civic Influence | Representation, leadership, civic participation |
| Visibility, Marketplace & Opportunities | Reaching audiences, creating opportunities |

> **Open decision: four categories have no zone.**
> Housing, safety and rights, support for new Scots and integration, and caring and family life all appear in the original category list but sit outside the eight zones. An admin can create zones to cover them, and that is the obvious fix, but the decision about whether to is HWS's. Until it is made, a hand-routing escape is load-bearing on both sides of the platform: it is the only path for a woman whose need falls in the gap, and the only way an organisation working in those areas can list at all. That escape must reach a person, not another search.

---

## The woman-facing flow

Twelve approved screens. Three questions, then a short ranked list, then an optional account.

**1 to 3. The three questions.** What she needs (free text, with interpreted suggestions visible before she types), where to look (any precision, with "anywhere in Scotland" as a first-class answer), and her situation (twelve optional chips). One decision per screen, and Next always proceeds.

**4. Working it out.** A named wait, "Looking for support near Bathgate", skipped entirely under a second.

**5. Next steps.** The core screen. Up to five cards, strongest match first and carrying a heavier border. Every card holds eleven pieces of information in a fixed order: name, source, plain description, tags, who it is for, what to expect, any deadline, why it matched her, the action, the verified stamp, and the data source. The action is always "Learn more" with Save beside it. Never "Apply", because applying happens on the organisation's own site.

**6 and 7. Refine or widen, and Change answers.** Both full pages reached from the results header. Refining is additive and reversible, never destructive, and answers persist for the session.

**8. Nothing matched.** The highest-risk screen in the product. Honest explanation, then the one widening most likely to work with a real count attached, then three other routes, then a named route to a person.

**9 to 12. The account.** Reached only after she saves something. Passcode sign-in, a name to greet her by, the saved list ordered by what closes first, and settings that state exactly what is held and delete it in two taps.

Saving works immediately without an account, for the session. The account only makes the list outlive the window, and adds one email per deadline, seven days out. Nothing else is ever sent.

---

## The organisation flow

Their primary goal is to post solutions, so onboarding is the shortest path to a first listing rather than a profile-building exercise.

**Sign up and confirm.** Work email, password with confirmation, then a confirmed address. Google skips both. The confirmation is framed by its reason: every listing carries the organisation's name.

**Four onboarding steps.** About the organisation, Access Zones, verification evidence, then straight to the dashboard. Drafting starts immediately; verification gates publishing, not access.

**Post a solution.** One thing a woman can act on, posted separately rather than bundled. The form collects exactly the eleven card fields, with prompts explaining why each matters: vague eligibility wastes her time, and not knowing what happens next is the most common reason women do not apply.

**Preview as she will see it.** The real woman-facing card, with gaps flagged in red before submission. This screen does the quality work that a style guide cannot.

**Dashboard.** Listings by status, performance figures, and the freshness prompt: "one listing needs checking", framed as costing them applications rather than as an admin chore.

Listings are reviewed before going live. The verified stamp on the woman-facing side is the platform's whole trust mechanism, and it means nothing if organisations self-publish. Review is a staffing commitment, not a feature.

---

## Trust, and how it is maintained

The verified stamp and its "last checked" date carry the platform's credibility. Three mechanisms keep them honest, and all three need an owner before launch:

- **Organisation verification** at onboarding, against charity or company registration.
- **Listing review** before publishing: eligibility clear, dates real, link working, description matching what is actually run.
- **Six-monthly re-confirmation**, prompted on the organisation dashboard, plus a "something wrong?" reporting loop on the woman-facing side.

A saved item never silently disappears. A closed listing stays visible marked "Closed", with alternatives and an invitation to ask when the next one starts.

Two related commitments sit alongside this. Nothing is remembered between visits without an account, and the platform says so rather than implying privacy it cannot guarantee. And because passcodes and deadline reminders both arrive by email, which may be read by someone else on a shared device, sender names and subject lines stay neutral and never name a category of support.

---

## Design direction

Warm editorial rather than institutional. A cream paper ground, warm near-black ink at graded opacities, a muted gold accent, sage for neutral status and a restrained red reserved for real urgency. Playfair Display for headings, Inter for interface and body. Generous whitespace, no gradients, no decorative illustration.

The intent is that the platform reads as trustworthy and human rather than governmental. Nothing about a woman's experience here should feel like filling in a form for a council.

---

## Status

**Designed and approved.** Twelve woman-facing screens, annotated for mobile and built as a working desktop prototype. Nine organisation screens covering onboarding, sign-in with password recovery, solution posting, preview, and the dashboard. A developer handoff package with tokens, per-screen specifications, and the state model.

**Still to design.** Each of these is reachable from an approved screen, so the flow has gaps without them:

1. The **service detail page** behind "Learn more". Likely the most-visited page in the product, and the last one the platform controls.
2. The **handover interstitial** to the organisation's own site.
3. The **passcode entry screen** for women signing in.
4. The **deadline reminder email**, one per deadline even when several close in the same week.
5. **Error and offline states**, including search failure, which must preserve every answer.
6. The **landing page**, and **cold arrivals** from a search engine landing directly on a service page. Most traffic will arrive this way, so if the invitation to search sits below the fold the platform is a directory to everyone who finds it through Google.
7. **Sensitive-category handling**, which puts a human route above the results for health, safety, abuse and hardship, and the first-visit explainer for the persistent **Close** control, which states plainly that it does not clear browser history.
8. **Helper mode** for support workers and family.
9. **Reading and access controls**: text size, contrast, language, low-data mode.
10. The **admin tools**: the listing review queue, organisation verification, and Access Zone management. All three are internal, the model depends on them, and none has been specified.

---

## Decisions needed

1. **Reconcile the Access Zones with the four missing categories.** An admin can create new zones for them, so this is a question of whether the four belong in the zone model at all, not a technical blocker. It still blocks the category architecture on both sides until answered.
2. **Who staffs review and support?** Listing review, six-monthly re-confirmation, the hand-routing escape, and the "Contact our support" line on the no-match screen all resolve to a person answering. That is a resourcing decision, not a design one.
3. **Does the question count stay at three?** The approved screens label the questions "of 4", implying a fourth that does not exist. The prototype reads "of 3".
4. **Keep or cut the phone field** on the woman-facing profile screen. It has no use in the current scope, and an unexplained request for a phone number is the kind of thing that loses a woman who was promised the platform asks for nothing.
5. **Reconcile Google sign-in with the privacy promise.** "Your email is kept private and secure" currently sits directly above a button that hands an identifier to a third party.
6. **How is this funded?** No paid placement is a principle worth keeping, and it rules out the obvious revenue model.

---

## How success is measured

Not traffic. The platform succeeds when women act, so the measures follow the action rather than the visit:

- **Completion rate through the three questions**, and where women drop out. The free-text box on question one and the twelve chips on question three are the two most likely stalling points.
- **Proportion of searches returning at least one close match.** This is a measure of listing coverage, and it is what the no-match screen's feedback loop feeds.
- **Click-through to organisations, and completion on their side.** Measuring only the click hides the drop-off that matters, at a third-party form the platform does not control.
- **Return rate after a deadline reminder**, which is the only thing the account has to justify.
- **Listing freshness**: the share of live listings confirmed in the last six months.

---

*All organisations, services, grants and dates used in the designs are invented examples for layout purposes. Real listings come from HWS and from the organisations themselves.*
