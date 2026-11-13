/**
 * The landing page, in every language the platform offers.
 *
 * WHAT NEEDS DOING BEFORE LAUNCH
 *
 * Every non-English block below was written without a native speaker, and
 * that is still true after an editing pass on 5 September 2026. Read this as
 * a good second draft rather than a finished thing.
 *
 * It matters more here than on most sites. The whole argument of this page is
 * that somebody checked, and a page that is visibly machine-translated
 * undermines that before a word of the content is read.
 *
 * WHAT THE PASS FIXED, so a reviewer knows where to look hardest:
 *
 *   * A numeral-agreement bug that no amount of translating could have
 *     fixed. The zones heading used to be rendered as a live count followed
 *     by this file's noun phrase. Polish and Ukrainian change that noun's
 *     ending above four, Arabic changes it again above ten, and the count
 *     moves as zones are added. The number now sits in the eyebrow on its
 *     own and `zones.title` is a whole phrase each language owns.
 *   * Punctuation from the em-dash sweep. It had put Latin commas into
 *     Arabic and Urdu sentences and left ", , " visible in the Chinese.
 *   * Punjabi was addressing a man. Arabic and Urdu use feminine forms
 *     throughout, which is the point; Punjabi had slipped into masculine
 *     agreement in four places. That is exactly the kind of thing that tells
 *     a reader the page was not written for her.
 *   * Guillemets in Urdu and Punjabi, which neither language uses. They had
 *     been copied from the Ukrainian and Arabic, where they are correct.
 *   * Polish step labels. "Raz, dwa, trzy" is how you count out loud; above
 *     a heading, "Raz" reads as "once".
 *
 * NEWER THAN THE PASS: the four `why.*` keys were added on 8 September
 * 2026 and no native speaker has seen any of them, English aside. They
 * carry the platform's argument for existing at all, so they are the block
 * where a stiff translation costs most. Read them first.
 *
 * NEWER STILL: the four `origin.*` keys were added on 10 September 2026,
 * also with no speaker for anything but the English. They are the origin
 * story, so they carry a voice rather than an instruction, and a voice is
 * the thing that goes stiffest in translation. The English is deliberately
 * plainer in sentence shape than it wants to be, so that the other eight had
 * less to lose.
 *
 * NEWER AGAIN: Romanian, Somali and Tigrinya were added on 9 November 2026,
 * taking the list to twelve. They come from the interpretation-demand
 * evidence rather than from the census alone, which is why Somali and
 * Tigrinya are on it at all: both communities are small in headcount and
 * large in need, and both are among the languages Scottish public services
 * most often have to find an interpreter for.
 *
 * READ THIS BEFORE QUOTING THE NUMBER TWELVE. Confidence in these three is
 * not equal and should not be presented as if it were.
 *
 *   * Romanian is the strongest of the three. Latin script, close to
 *     languages this file already carries, and the diacritics are correct.
 *   * Somali is a reasonable draft. Standard Latin orthography, but the
 *     register may read stiff and some compound phrases will want a speaker.
 *   * Tigrinya is the one to have checked first. Ge'ez script, and the
 *     verb morphology carries the gender of the person being addressed —
 *     every one of these strings is addressed to a woman, so a wrong form
 *     is not a typo, it tells her the page was not written for her. Treat
 *     it as a starting point for a translator, not as finished work.
 *
 * None of the three has been read by a native speaker. Neither has any of
 * the eight before them. The honest sentence for a funder is "twelve
 * languages, three of them pending native review" rather than "twelve
 * languages", and the cheapest way to fix that is to ask the organisations
 * serving these communities to read their own.
 *
 * THE FLOW, ADDED 9 NOVEMBER 2026. The first 41 keys were the landing page.
 * The 151 after them are the three questions, the results, the card, the
 * no-match screen, discover, saved, the service page, the call booking and
 * the account screens — everything a woman actually walks through, which
 * until now was English behind a translated front door.
 *
 * ONE PLACEHOLDER, AND IT IS "#". A handful of these carry a number or a
 * name the component supplies: "Question # of 3", "Closes #", "Continue
 * to #". The hash is replaced with the value, already formatted for her
 * locale. There is no other interpolation syntax anywhere in this file, and
 * a translator never has to handle braces, indexes or escaping.
 *
 * COUNTS ARE NOT HERE. Anything whose wording changes with a number lives in
 * plurals.ts, because "1 service" and "2 services" is a two-way choice in
 * English and a four-way one in Polish, and a key that can only hold one
 * string cannot express that.
 *
 * WHAT STILL NEEDS A SPEAKER, in order of how likely it is to be wrong:
 *
 *   * Scots. Untouched by the pass, because the line between written Scots
 *     and English with Scots spellings is an editorial decision a Scots
 *     speaker should make. "Naebody pays tae kythe" is the one to ask about
 *     first: "kythe" is real but literary, and may read as costume.
 *   * Gaelic. Untouched for the same reason. Register varies a lot by region
 *     and this is likely too formal.
 *   * Everything else. The pass caught what was wrong, not everything that
 *     is merely stiff, and stiffness is what a reader notices.
 *
 * Keys are namespaced by where they appear. Nothing is interpolated: the two
 * places a number goes are assembled in the component, so no translator has
 * to handle placeholder syntax.
 */

export type MessageKey =
  | "language.label"
  | "hero.title"
  | "hero.body"
  | "hero.cta"
  | "hero.browse"
  | "hero.begin"
  | "hero.beginFind"
  | "hero.beginBrowse"
  | "why.eyebrow"
  | "why.title"
  | "how.forWomen"
  | "how.forOrgs"
  | "how.oneTitle"
  | "how.oneBody"
  | "how.twoTitle"
  | "how.twoBody"
  | "how.threeTitle"
  | "how.threeBody"
  | "how.orgOneTitle"
  | "how.orgOneBody"
  | "how.orgTwoTitle"
  | "how.orgTwoBody"
  | "how.orgThreeTitle"
  | "how.orgThreeBody"
  | "origin.eyebrow"
  | "origin.title"
  | "origin.bodyOne"
  | "origin.bodyTwo"
  | "zones.eyebrow"
  | "zones.title"
  | "zones.body"
  | "zones.browse"
  | "trust.checkedTitle"
  | "trust.checkedBody"
  | "trust.privateTitle"
  | "trust.privateBody"
  | "trust.paidTitle"
  | "trust.paidBody"
  | "orgs.title"
  | "orgs.body"
  | "orgs.cta"
  | "flow.back"
  | "flow.questionOf"
  | "flow.next"
  | "flow.changeAnswers"
  | "flow.searchCredit"
  | "flow.orgPrompt"
  | "flow.orgLink"
  | "q1.title"
  | "q1.subline"
  | "q1.placeholder"
  | "q1.blank"
  | "q1.searchOn"
  | "q1.suggestions"
  | "q2.title"
  | "q2.subline"
  | "q2.placeholder"
  | "q2.unknown"
  | "q2.or"
  | "q2.anywhere"
  | "q2.onlineOnly"
  | "q2.hint"
  | "q3.title"
  | "q3.subline"
  | "q3.hint"
  | "q3.privacy"
  | "results.title"
  | "results.refine"
  | "results.ordered"
  | "results.orgsOnly"
  | "results.thatsAll"
  | "results.showScotland"
  | "results.changeMine"
  | "results.startOver"
  | "card.bestMatch"
  | "card.save"
  | "card.saved"
  | "card.saveAria"
  | "card.savedAria"
  | "card.whoFor"
  | "card.whatToExpect"
  | "card.whyMatched"
  | "card.learnMore"
  | "card.missing"
  | "card.closes"
  | "card.closed"
  | "card.verified"
  | "card.verifiedOn"
  | "nomatch.title"
  | "nomatch.body"
  | "nomatch.tryFirst"
  | "nomatch.widen"
  | "nomatch.onlineTitle"
  | "nomatch.changeTitle"
  | "nomatch.changeNote"
  | "nomatch.startTitle"
  | "nomatch.startNote"
  | "orgsAnswer.title"
  | "orgsAnswer.body"
  | "talkcta.title"
  | "talkcta.body"
  | "talkcta.cta"
  | "talkcta.note"
  | "talkcta.today"
  | "refine.back"
  | "refine.title"
  | "refine.howFar"
  | "refine.onlyShow"
  | "refine.nothingMatches"
  | "refine.tryRemoving"
  | "refine.inScope"
  | "refine.tryWiden"
  | "refine.update"
  | "scope.myArea"
  | "scope.nearby"
  | "scope.allScotland"
  | "scope.online"
  | "filter.free"
  | "filter.openNow"
  | "filter.noForms"
  | "saved.title"
  | "saved.titleNamed"
  | "saved.emptyBody"
  | "saved.emptyCta"
  | "saved.soonest"
  | "saved.seeWhatElse"
  | "saved.findSomethingElse"
  | "saved.settings"
  | "saved.noClosingDate"
  | "saved.noLongerRunning"
  | "service.backToResults"
  | "service.cost"
  | "service.where"
  | "service.howToTakePart"
  | "service.continueTo"
  | "service.closedTitle"
  | "service.closedBody"
  | "service.askNext"
  | "service.findSimilar"
  | "service.somethingWrong"
  | "discover.title"
  | "discover.lede"
  | "discover.searchLabel"
  | "discover.searchButton"
  | "discover.orAnswer"
  | "discover.byZone"
  | "discover.byZoneNote"
  | "discover.nobodyYet"
  | "discover.byNeed"
  | "discover.byNeedNote"
  | "zone.allZones"
  | "zone.eyebrow"
  | "zone.empty"
  | "zone.tellUs"
  | "zone.alsoWorks"
  | "need.everything"
  | "need.eyebrow"
  | "discover.eyebrow"
  | "discover.searchAria"
  | "discover.clear"
  | "discover.nothingMatches"
  | "discover.forQuery"
  | "discover.searchNote"
  | "discover.tryQuestions"
  | "need.emptyShort"
  | "need.workOnThis"
  | "need.empty"
  | "talk.title"
  | "talk.pickTime"
  | "talk.pickBody"
  | "talk.noneTitle"
  | "talk.noneBody"
  | "talk.otherWays"
  | "talk.ukTime"
  | "talk.todayInstead"
  | "booking.name"
  | "booking.nameNote"
  | "booking.email"
  | "booking.emailNote"
  | "booking.phone"
  | "booking.phoneNote"
  | "booking.notes"
  | "booking.notesNote"
  | "booking.optional"
  | "booking.submit"
  | "confirm.title"
  | "confirm.pickDifferent"
  | "confirm.privacy"
  | "booked.title"
  | "booked.sent"
  | "booked.reference"
  | "booked.prepare"
  | "booked.move"
  | "booked.keepLooking"
  | "booked.backToStart"
  | "account.title"
  | "account.saveIt"
  | "account.saveBody"
  | "account.otp"
  | "account.emailPrivate"
  | "account.carryOn"
  | "account.signInHere"
  | "code.title"
  | "code.sentTo"
  | "code.justSearch"
  | "code.enterBelow"
  | "code.arrive"
  | "code.different"
  | "profile.title"
  | "nav.home"
  | "nav.discover"
  | "nav.forOrgs"
  | "nav.faq"
  | "nav.signIn"
  | "nav.signOut"
  | "nav.saved"
  | "nav.settings"
  | "nav.remindersSettings"
  | "nav.sections"
  | "nav.menu"
  | "nav.homeAria"
  | "nav.findNext"
  | "footer.label"
  | "footer.tagline"
  | "footer.free"
  | "footer.forYou"
  | "footer.find"
  | "footer.discover"
  | "footer.faq"
  | "footer.help"
  | "footer.forOrgs"
  | "footer.meetWomen"
  | "footer.whyList"
  | "footer.whoListed"
  | "footer.legal"
  | "footer.privacy"
  | "footer.terms"
  | "footer.talk"
  | "cookie.region"
  | "cookie.claim"
  | "cookie.detail"
  | "cookie.more"
  | "cookie.okay"
  | "loading.page"
  | "loading.organisations"
  | "loading.organisation"
  | "loading.saved"
  | "loading.listing"
  | "faq.title"
  | "faq.lede"
  | "faq.notHere"
  | "faq.talkPerson"
  | "faq.forWomen"
  | "faq.forOrgs"
  | "profile.subline"
  | "meta.home.title"
  | "meta.home.desc"
  | "meta.find.desc"
  | "meta.where.desc"
  | "meta.situation.desc"
  | "meta.results.desc"
  | "meta.refine.desc"
  | "meta.change.title"
  | "meta.change.desc"
  | "meta.startOver.desc"
  | "meta.discover.title"
  | "meta.discover.desc"
  | "meta.faq.desc"
  | "meta.orgs.desc"
  | "meta.go.title"
  | "meta.go.desc"
  | "meta.help.desc"
  | "meta.saved.desc"
  | "meta.privacy.desc"
  | "meta.terms.desc"
  | "meta.talk.desc"
  | "meta.confirm.desc"
  | "meta.booked.title"
  | "meta.booked.desc"
  | "meta.account.desc"
  | "meta.accountCode.desc"
  | "meta.profile.desc"
  | "meta.settings.desc"
  | "meta.emailChange.title"
  | "meta.emailChange.desc"
  | "meta.emailCode.title"
  | "meta.emailCode.desc"
  | "settings.savedList"
  | "settings.reminders"
  | "settings.howFar"
  | "settings.nothingElse"
  | "settings.neverName"
  | "settings.emailChanged"
  | "reminders.beforeDeadline"
  | "change.heard"
  | "change.weWillShow"
  | "startover.confirm"
  | "startover.note"
  | "startover.yes"
  | "startover.keep"
  | "legal.onThisPage"
  | "legal.questions"
  | "legal.draftTitle"
  | "legal.draftBody"
  | "legal.draftAsk"
  | "legal.pendingTitle"
  | "legal.pendingBody"
  | "legal.pendingAsk"
  | "photos.aria"
  | "photos.credit"
  | "testimonials.aria"
  | "testimonials.prev"
  | "testimonials.next"
  | "form.sendCode"
  | "form.yourCode"
  | "form.codeWorks"
  | "form.newCodeSent"
  | "form.sendNewCode"
  | "form.theCodeWeSent"
  | "form.newEmail"
  | "form.sendToNew"
  | "form.firstName"
  | "form.lastName"
  | "form.phoneOptional"
  | "form.phoneNote"
  | "form.continue"
  | "org.allOrgs"
  | "org.checked"
  | "org.website"
  | "org.whatTheyDo"
  | "org.whatTheyOffer"
  | "org.whoTheyWorkWith"
  | "org.whoTheyCanHelp"
  | "org.whoTheyCannot"
  | "org.when"
  | "org.howToReach"
  | "org.zones"
  | "org.mainOne"
  | "org.nothingRunning"
  | "org.orTellUs"
  | "orgpage.heroTitle"
  | "orgpage.heroBody"
  | "orgpage.haveAccount"
  | "orgpage.freeNote"
  | "orgpage.whatYouGet"
  | "orgpage.reach"
  | "orgpage.gain1Title"
  | "orgpage.gain1Body"
  | "orgpage.gain2Title"
  | "orgpage.gain2Body"
  | "orgpage.gain3Title"
  | "orgpage.gain3Body"
  | "orgpage.gain4Title"
  | "orgpage.gain4Body"
  | "orgpage.fourSteps"
  | "orgpage.step1Title"
  | "orgpage.step1Body"
  | "orgpage.step2Title"
  | "orgpage.step2Body"
  | "orgpage.step3Title"
  | "orgpage.step3Body"
  | "orgpage.step4Title"
  | "orgpage.step4Body"
  | "orgpage.whereYouSit"
  | "orgpage.zonesBody"
  | "legal.englishApplies"
  | "legal.askInYourLanguage"
  | "reason.youToldUs"
  | "reason.and"
  | "reason.youAskedAbout"
  | "reason.runsIn"
  | "reason.isOnline"
  | "reason.acrossScotland"
  | "reason.closest"
  | "reason.clauseJoin";

type Catalogue = Partial<Record<MessageKey, string>>;

const en: Record<MessageKey, string> = {
  "language.label": "Language",
  "hero.title": "Helping women with the support they need",
  "hero.body":
    "Tell us what you need in your own words, and we will show you a few next steps worth taking. Three questions, no account needed.",
  "hero.cta": "Find solution",
  "hero.browse": "Or see who is out there",
  "why.eyebrow": "How it works",
  "why.title":
    "Knowing something exists is not the same as knowing it is open to you",
  "hero.begin": "Where would you like to start?",
  "hero.beginFind": "Find your next step",
  "hero.beginBrowse": "See who is out there",
  "how.oneTitle": "Tell us, in your words",
  "how.oneBody":
    "What you need, roughly where you are, and anything about your situation. Just three questions.",
  "how.twoTitle": "We weigh it up",
  "how.twoBody":
    "Against what each thing is for, who it is open to, where it runs and how you can reach it. The result is AI powered.",
  "how.threeTitle": "You get a few real options",
  "how.threeBody":
    "A handful, not a hundred, each with why it matched, what it costs, who it is for, and exactly what happens after you engage.",
  "how.forWomen": "For women",
  "how.forOrgs": "For organisations",
  "how.orgOneTitle": "Tell us who you are",
  "how.orgOneBody":
    "A few questions about what you do, people you want to provide solutions to and where. Onboarding is swift.",
  "how.orgTwoTitle": "We check you, once",
  "how.orgTwoBody":
    "Against a public register or based on your track record. After that verification, you post what you like, when you like.",
  "how.orgThreeTitle": "She finds it when it fits",
  "how.orgThreeBody":
    "Not because she searched your name, but because what she described matched the solution you are offering.",
  "origin.eyebrow": "Why this exists",
  "origin.title": "It started in a room like this one",
  "origin.bodyOne":
    "The Holistic Wellbeing Summit puts women in a room with the people who can actually help them. Somebody makes an introduction. Somebody says the name of a fund you had never heard of, and now you know it is there.",
  "origin.bodyTwo":
    "Then the room empties. The organisations go back to their work, and the women still need it. This platform is that room with the doors left open, for every woman who was never in it.",
  "zones.eyebrow": "Access Zones",
  "zones.title": "Every kind of support, one platform",
  "zones.body":
    "Work, money, learning, health, enterprise, having a say. Most women need more than one at a time, and most services only do one, which is the gap this exists to close.",
  "zones.browse": "Browse everyone on the platform",
  "trust.checkedTitle": "Verified content",
  "trust.checkedBody":
    "Every organisation here has been verified against a public register or its funder before it could post anything. Each listing carries the date it was last confirmed.",
  "trust.privateTitle": "Information is private",
  "trust.privateBody":
    "You do not need an account to search, read or apply. What you type is used to rank your results and is not sold, passed on, or used to build a profile of you.",
  "trust.paidTitle": "No sponsored content",
  "trust.paidBody":
    "There is no paid placement and no advertising. Results are ordered by how well they fit what you told us, and every listing says why it matched.",
  "orgs.title": "Do you run something women should know about?",
  "orgs.body":
    "List it here and it reaches the women it actually suits, rather than whoever happens to find your website. Free, and we check you once rather than checking every listing.",
  "orgs.cta": "Meet the women",

  "flow.back": "Back",
  "flow.questionOf": "Question # of 3",
  "flow.next": "Next",
  "flow.changeAnswers": "Change answers",
  "flow.searchCredit": "Search powered by AI",
  "flow.orgPrompt":
    "Are you an organisation or individual providing solutions for women?",
  "flow.orgLink": "For organisations",
  "q1.title": "What do you need help with?",
  "q1.subline": "In your own words. There's no wrong answer.",
  "q1.placeholder": "e.g. getting back to work after caring for my mum",
  "q1.blank": "Add a few words so we know where to look.",
  "q1.searchOn": "We'll search on what you wrote.",
  "q1.suggestions": "Suggestions",
  "q2.title": "Where should we look for support?",
  "q2.subline": "A town, a postcode, or your council area.",
  "q2.placeholder": "e.g. EH48",
  "q2.unknown":
    "We don't know that place. Try a nearby town, or search anywhere in Scotland.",
  "q2.or": "Or",
  "q2.anywhere": "Anywhere in Scotland",
  "q2.onlineOnly": "Online support only",
  "q2.hint": "Type a place, or choose one of the two options above.",
  "q3.title": "What best describes your situation?",
  "q3.subline":
    "This helps us spot support you may qualify for. You can pick more than one.",
  "q3.hint": "Pick anything that applies, or choose Prefer not to say.",
  "q3.privacy":
    "We don't store your answers or share them with the organisations we show you.",
  "results.title": "Next steps for you",
  "results.refine": "Refine or widen",
  "results.ordered":
    "Ordered by how well they fit what you told us. Nobody pays to appear here.",
  "results.orgsOnly":
    "Nothing open fits closely enough to put in front of you, but these organisations work on what you asked about.",
  "results.thatsAll":
    "That's everything that fits closely. You can widen the search or change what you told us.",
  "results.showScotland": "Show support across Scotland",
  "results.changeMine": "Change my answers",
  "results.startOver": "Start over",
  "card.bestMatch": "Best match",
  "card.save": "Save",
  "card.saved": "Saved",
  "card.saveAria": "Save #",
  "card.savedAria": "Saved: #",
  "card.whoFor": "Who it's for",
  "card.whatToExpect": "What to expect",
  "card.whyMatched": "Why this matched you:",
  "card.learnMore": "Learn more",
  "card.missing": "Not filled in yet",
  "card.closes": "Closes #",
  "card.closed": "Closed #",
  "card.verified": "Verified",
  "card.verifiedOn": "Verified · last updated #",
  "nomatch.title": "We couldn't find anything for you right now",
  "nomatch.body":
    "That doesn't mean there's no help. It means we don't have something that fits what you asked for today.",
  "nomatch.tryFirst": "Try this first",
  "nomatch.widen": "Widen to all of Scotland",
  "nomatch.onlineTitle": "Online support only",
  "nomatch.changeTitle": "Change what you asked for",
  "nomatch.changeNote":
    "Different words sometimes find different things. It is worth one more try.",
  "nomatch.startTitle": "Start again",
  "nomatch.startNote": "Clear everything and begin from the first question.",
  "orgsAnswer.title": "These people can help too",
  "orgsAnswer.body":
    "Organisations working on what you asked about. They may not have anything open right now, but you can go to them directly.",
  "talkcta.title": "Do you want to talk to someone?",
  "talkcta.body":
    "Somebody who knows what is out there, and can point you in the right direction. Pick a time that suits you. It costs nothing, and you do not need an account.",
  "talkcta.cta": "See available times",
  "talkcta.note":
    "We will already know what you searched for, so you will not have to explain it again.",
  "talkcta.today": "Need help today? Talk to us now.",
  "refine.back": "Back to results",
  "refine.title": "Refine or widen",
  "refine.howFar": "How far to look",
  "refine.onlyShow": "Only show",
  "refine.nothingMatches": "Nothing matches with these filters.",
  "refine.tryRemoving": "Try removing “#”.",
  "refine.inScope": "Looking in #.",
  "refine.tryWiden": "Try widening how far to look.",
  "refine.update": "Update my search",
  "scope.myArea": "My area",
  "scope.nearby": "Nearby areas",
  "scope.allScotland": "All Scotland",
  "scope.online": "Online only",
  "filter.free": "Free",
  "filter.openNow": "Open now",
  "filter.noForms": "No forms",
  "saved.title": "Your saved list",
  "saved.titleNamed": "#'s saved list",
  "saved.emptyBody":
    "When you find something worth coming back to, press Save on it. It will be here, and we will tell you before it closes.",
  "saved.emptyCta": "Find support",
  "saved.soonest": "Soonest to close first.",
  "saved.seeWhatElse": "See what else",
  "saved.findSomethingElse": "Find something else",
  "saved.settings": "Reminders and account settings",
  "saved.noClosingDate": "No closing date",
  "saved.noLongerRunning": "No longer running",
  "service.backToResults": "Back to your results",
  "service.cost": "Cost",
  "service.where": "Where",
  "service.howToTakePart": "How to take part",
  "service.continueTo": "Continue to #",
  "service.closedTitle": "This one has closed",
  "service.closedBody":
    "It may run again. # can tell you when the next one opens, and there may be something similar available now.",
  "service.askNext": "Ask when the next one starts",
  "service.findSimilar": "Find similar support",
  "service.somethingWrong": "Something wrong with this?",
  "discover.title": "Who is working for women in Scotland",
  "discover.lede":
    "Every organisation here has been checked by us. Search for one by name, or read your way down by what you need.",
  "discover.searchLabel": "Search organisations by name or by what they do",
  "discover.searchButton": "Search organisations",
  "discover.orAnswer": "Or answer three questions and we will match you",
  "discover.byZone": "Browse by Access Zone",
  "discover.byZoneNote":
    "The kinds of support the platform is built around. Each one leads to the organisations working in it.",
  "discover.nobodyYet": "Nobody here yet",
  "discover.byNeed": "Browse by what you need",
  "discover.byNeedNote": "Say it the way you would say it out loud.",
  "zone.allZones": "All Access Zones",
  "zone.eyebrow": "Access Zone",
  "zone.empty":
    "Nobody is listed in this zone yet. That does not mean there is no help, so tell us what you need and we will look across everything we have.",
  "zone.tellUs": "Tell us what you need",
  "zone.alsoWorks": "Also works in this zone",
  "need.everything": "Everything you can browse",
  "need.eyebrow": "What you need",
  "discover.eyebrow": "Discover",
  "discover.searchAria": "Search",
  "discover.clear": "Clear",
  "discover.nothingMatches": "Nothing matches \u201c#\u201d",
  "discover.forQuery": "for \u201c#\u201d",
  "discover.searchNote":
    "This box only looks at names and descriptions. If you are trying to describe a situation rather than find a particular organisation, the three questions will do far better.",
  "discover.tryQuestions": "Try the three questions.",
  "need.emptyShort": "Nobody is listed against this yet.",
  "need.workOnThis": "The ones with something open are first.",
  "need.empty":
    "Nobody is listed against this yet. That does not mean there is no help, so tell us what you need and we will look across everything we have.",
  "talk.title": "Talk to someone",
  "talk.pickTime": "Pick a time that suits you",
  "talk.pickBody":
    "We will call you. It takes about half an hour, it costs nothing, and you do not need an account.",
  "talk.noneTitle": "Nothing free in the next few weeks",
  "talk.noneBody":
    "That is unusual, and it does not mean nobody can help. Get in touch and we will find a time that is not on this calendar.",
  "talk.otherWays": "Other ways to reach us",
  "talk.ukTime": "All times are UK time.",
  "talk.todayInstead":
    "Need help today rather than at a booked time? There are quicker ways to reach us.",
  "booking.name": "Your name",
  "booking.nameNote": "What you would like to be called",
  "booking.email": "Email address",
  "booking.emailNote": "We send the time here, with a calendar file you can tap.",
  "booking.phone": "Phone number",
  "booking.phoneNote": "Only if you would rather we rang you than emailed you.",
  "booking.notes": "Anything you want us to know first",
  "booking.notesNote":
    "Optional. Nobody reads this but the person who calls you.",
  "booking.optional": "Optional",
  "booking.submit": "Book this time",
  "confirm.title": "Confirm your call",
  "confirm.pickDifferent": "Pick a different time",
  "confirm.privacy":
    "We use your name and email to make the call and nothing else. No account is created, and this is not added to any list.",
  "booked.title": "That is booked",
  "booked.sent":
    "We have sent the time to your inbox, with a calendar file you can tap to add it to your phone. It can take a minute to arrive.",
  "booked.reference": "Your reference",
  "booked.prepare":
    "There is nothing to prepare. Whoever calls will have read what you were looking for, so you will not have to start from the beginning.",
  "booked.move":
    "If the time stops suiting you, reply to that email and we will move it.",
  "booked.keepLooking": "Keep looking in the meantime",
  "booked.backToStart": "Back to the start",
  "account.title": "Access your account",
  "account.saveIt": "Sign in to save it",
  "account.saveBody":
    "Saving is the one thing here that needs an account, so your list is still there next time. We have kept hold of what you just pressed Save on, and it will be waiting once you are in.",
  "account.otp":
    "We'll send you a one-time passcode to sign in. No password to remember.",
  "account.emailPrivate": "Your email is kept private and secure.",
  "account.carryOn": "Carry on without saving",
  "account.signInHere": "Sign in here",
  "code.title": "Check your email",
  "code.sentTo": "We sent a sign-in code to:",
  "code.justSearch": "Just search without signing in",
  "code.enterBelow": "Enter it below and you're in.",
  "code.arrive":
    "It should arrive within a minute. If it has not, check your spam or junk folder.",
  "code.different": "Use a different address",
  "profile.title": "Set up your profile",
  "profile.subline": "Just a name to greet you by. Nothing here is required.",

  "nav.home": "Home",
  "nav.discover": "Discover",
  "nav.forOrgs": "For organisations",
  "nav.faq": "FAQ",
  "nav.signIn": "Sign in",
  "nav.signOut": "Sign out",
  "nav.saved": "Saved",
  "nav.settings": "Settings",
  "nav.remindersSettings": "Reminders and settings",
  "nav.sections": "Sections",
  "nav.menu": "menu",
  "nav.homeAria": "HWS Pathgrid, home",
  "nav.findNext": "Find your next step",
  "footer.label": "Footer",
  "footer.tagline":
    "Connecting women to opportunity - beyond one room, one postcode or one day.",
  "footer.free":
    "Free to use, and you never need an account to search, read or apply.",
  "footer.forYou": "For you",
  "footer.find": "Find solution",
  "footer.discover": "Discover organisations",
  "footer.faq": "Frequently asked questions",
  "footer.help": "Help",
  "footer.forOrgs": "For organisations",
  "footer.meetWomen": "Meet the women",
  "footer.whyList": "Why list with us",
  "footer.whoListed": "Who is already listed",
  "footer.legal": "Legal",
  "footer.privacy": "Privacy policy",
  "footer.terms": "Terms of use",
  "footer.talk": "Talk to a person",
  "cookie.region": "About cookies",
  "cookie.claim": "We use a few cookies, and none of them watch you.",
  "cookie.detail":
    "They keep you signed in and remember your language. Nothing is tracked or sold.",
  "cookie.more": "More in the privacy policy",
  "cookie.okay": "Okay",
  "loading.page": "Loading this page",
  "loading.organisations": "Loading organisations",
  "loading.organisation": "Loading this organisation",
  "loading.saved": "Loading your saved list",
  "loading.listing": "Loading this listing",
  "faq.title": "Frequently asked questions",
  "faq.lede":
    "HWS Path Grid connects women across Scotland to the support that actually suits them, and gives the organisations behind it one place to be found.",
  "faq.notHere": "If the answer you need is not here, we answer every message.",
  "faq.talkPerson": "Talk to a person.",
  "faq.forWomen": "If you are looking for support",
  "faq.forOrgs": "If you are an organisation",

  "meta.home.title": "Find support for women in Scotland",
  "meta.home.desc":
    "Tell us what you need in your own words and we will show you a few next steps worth taking. Every organisation is checked. No account needed.",
  "meta.find.desc":
    "Tell us what you need in your own words. Three questions, no account needed, and we look across every organisation in Scotland we have checked.",
  "meta.where.desc":
    "Tell us where you are so we can put what is near you first, and still show you what is open to everyone.",
  "meta.situation.desc":
    "Pick anything that fits. It changes what we put in front of you.",
  "meta.results.desc":
    "The support we found for you, with the reason each one is here.",
  "meta.refine.desc":
    "Narrow your search or open it up, when the first set of results is not the right one.",
  "meta.change.title": "Change your answers",
  "meta.change.desc":
    "Change what you told us and we will look again across every organisation.",
  "meta.startOver.desc":
    "Clear your answers and begin the three questions again.",
  "meta.discover.title": "Discover organisations across Scotland",
  "meta.discover.desc":
    "Browse the organisations working with women across Scotland, by the kind of support they offer or by what you need.",
  "meta.faq.desc":
    "What women ask before they use this site, and what organisations ask before they list on it. Answered plainly.",
  "meta.orgs.desc":
    "List what you run on HWS Path Grid and reach the women it actually suits. Free, checked once, and nobody pays to appear.",
  "meta.go.title": "Leaving to apply",
  "meta.go.desc":
    "Taking you to the organisation's own page so you can apply with them.",
  "meta.help.desc":
    "If you cannot find what you need, or something here looks wrong, tell us. We would rather hear from you than have you give up on it.",
  "meta.saved.desc": "Everything you have saved, in one place.",
  "meta.privacy.desc":
    "What HWS Path Grid collects when you use the site, why, and what we will never do with it.",
  "meta.terms.desc":
    "The rules for using HWS Path Grid, for the women who search it and the organisations who list on it.",
  "meta.talk.desc":
    "Book a free call with somebody who can point you in the right direction.",
  "meta.confirm.desc": "The last step before your call is booked.",
  "meta.booked.title": "Your call is booked",
  "meta.booked.desc": "What happens next.",
  "meta.account.desc":
    "Sign in, or make an account, so the support you save is there next time you come back.",
  "meta.accountCode.desc": "We have sent you a six digit code to sign in with.",
  "meta.profile.desc":
    "Add your name so we can address you properly. Nothing here is required.",
  "meta.settings.desc":
    "Your reminders, your language, and what happens to your account.",
  "meta.emailChange.title": "Change your email address",
  "meta.emailChange.desc":
    "Move your account, and everything saved on it, to another address.",
  "meta.emailCode.title": "Check your new inbox",
  "meta.emailCode.desc": "Enter the code we sent to your new address.",

  "settings.savedList": "My saved list",
  "settings.reminders": "Reminders",
  "settings.howFar": "How far ahead",
  "settings.nothingElse": "We send nothing else. No newsletter, no suggestions.",
  "settings.neverName":
    "Reminder emails never name the kind of support, in case someone else reads your inbox.",
  "settings.emailChanged":
    "Done. Your account is on this address now, and your saved list came with it.",
  "reminders.beforeDeadline": "Before a deadline",
  "change.heard": "Here's what we heard",
  "change.weWillShow":
    "We'll show you a small number of next steps, strongest match first. Nobody pays to appear here.",
  "startover.confirm": "This clears your answers. Start again?",
  "startover.note":
    "Anything you have saved stays where it is. Only what you told us about what you need goes.",
  "startover.yes": "Yes, start again",
  "startover.keep": "Keep my answers",
  "legal.onThisPage": "On this page",
  "legal.questions": "Questions about any of this go to a person, not a form.",
  "legal.draftTitle": "This is a draft",
  "legal.draftBody":
    "The wording below describes exactly how the platform works today, but it has not yet been through a final review. It is published so you can read it and hold us to it, not because it is finished.",
  "legal.draftAsk":
    "If anything here matters to a decision you are making, ask us.",
  "legal.pendingTitle": "This one is still being written",
  "legal.pendingBody":
    "The wording is with us and will be published here before the platform opens. Nothing on this page is in force until it is.",
  "legal.pendingAsk":
    "If you want to know what happens to what you type in the meantime, ask us and we will tell you plainly.",
  "photos.aria": "Photographs from the Holistic Wellbeing Summit",
  "photos.credit": "The Holistic Wellbeing Summit",
  "testimonials.aria": "What women say",
  "testimonials.prev": "Previous quote",
  "testimonials.next": "Next quote",
  "form.sendCode": "Send me a sign-in code",
  "form.yourCode": "Your sign-in code",
  "form.codeWorks": "The code works for 15 minutes.",
  "form.newCodeSent": "New code sent. It can take a minute to arrive.",
  "form.sendNewCode": "Send a new code",
  "form.theCodeWeSent": "The code we sent",
  "form.newEmail": "New email address",
  "form.sendToNew": "Send a code to the new address",
  "form.firstName": "First name",
  "form.lastName": "Last name",
  "form.phoneOptional": "Phone number (optional)",
  "form.phoneNote": "We only use this if you ask us to call you back.",
  "form.continue": "Continue",
  "org.allOrgs": "All organisations",
  "org.checked": "Checked by HWS",
  "org.website": "Their website",
  "org.whatTheyDo": "What they do",
  "org.whatTheyOffer": "What they offer",
  "org.whoTheyWorkWith": "Who they work with",
  "org.whoTheyCanHelp": "Who they can help",
  "org.whoTheyCannot": "Who they cannot help",
  "org.when": "When",
  "org.howToReach": "How to reach them",
  "org.zones": "Access Zones",
  "org.mainOne": "Their main one",
  "org.nothingRunning":
    "They have nothing running at the moment. Tell us what you need and we will look across everything we have.",
  "org.orTellUs": "Or tell us what you need and we will match you",

  "orgpage.heroTitle": "The women you are for, without them having to find you",
  "orgpage.heroBody":
    "You already do the work. The problem is that a woman has to know your name to find your website. Here she describes her situation, and we put you in front of her because you are the right answer, not because she guessed.",
  "orgpage.haveAccount": "I already have an account",
  "orgpage.freeNote":
    "Free. No paid placement, no advertising, and nobody pays to appear higher.",
  "orgpage.whatYouGet": "What you get",
  "orgpage.reach": "Reach, and a way to prove it",
  "orgpage.gain1Title": "Women who were looking for what you do",
  "orgpage.gain1Body":
    "She describes her situation in her own words. We match it against who you are set up for, what you offer, where you work and what it costs. She arrives already knowing whether she qualifies.",
  "orgpage.gain2Title": "Numbers you can take to a funder",
  "orgpage.gain2Body":
    "How many women were sent to your own site, how many read your organisation page, and how each thing you posted performed. Not a vanity figure: the first one counts people who clicked through to you.",
  "orgpage.gain3Title": "Checked once, not per listing",
  "orgpage.gain3Body":
    "We verify you against a public register or your funder when you join. After that you post what you like, when you like, without waiting on us.",
  "orgpage.gain4Title": "Fewer of the wrong enquiries",
  "orgpage.gain4Body":
    "You say who you cannot help, and we show it. Women rule themselves out before they contact you, which is time back for whoever answers your inbox.",
  "orgpage.fourSteps": "Four steps, and one of them is ours",
  "orgpage.step1Title": "Tell us who you are",
  "orgpage.step1Body":
    "A few questions about what you do, who you serve and where. Ten minutes, and you can stop partway and come back.",
  "orgpage.step2Title": "We check you",
  "orgpage.step2Body":
    "Against a public register, or your funder. One check, done by a person.",
  "orgpage.step3Title": "Post what is open",
  "orgpage.step3Body":
    "A course, a grant, a drop-in, a mentoring scheme. Anything with a way in for a woman.",
  "orgpage.step4Title": "She finds it when it fits",
  "orgpage.step4Body":
    "Not because she searched your name. Because what she described matched what you run.",
  "orgpage.whereYouSit": "Where you would sit",
  "orgpage.zonesBody":
    "You pick your own, one main and up to two others. Most women need more than one at a time and most services only do one, which is the gap this exists to close.",

  "legal.englishApplies":
    "The headings on this page are in your language. The wording itself is in English, and the English is the version that applies.",
  "legal.askInYourLanguage": "Ask us about any part of it and we will answer.",

  "reason.youToldUs": "you told us #",
  "reason.and": "and",
  "reason.youAskedAbout": "you asked about #",
  "reason.runsIn": "this runs in #",
  "reason.isOnline": "this one is online, so where you are doesn't matter",
  "reason.acrossScotland": "this is open across Scotland",
  "reason.closest":
    "it's one of the closest things we have to what you described.",
  "reason.clauseJoin": ", and ",
};

const gd: Catalogue = {
  "language.label": "Cànan",
  "hero.title": "A' cuideachadh bhoireannach leis an taic a tha a dhìth orra",
  "hero.body":
    "Innis dhuinn dè tha a dhìth ort nad fhaclan fhèin, agus seallaidh sinn dhut beagan cheumannan a b’ fhiach a ghabhail. Trì ceistean, gun fheum air cunntas.",
  "hero.cta": "Lorg fuasgladh",
  "hero.browse": "No faic cò tha ann",
  "why.eyebrow": "Mar a tha e ag obair",
  "why.title":
    "Chan ionann fios gu bheil rudeigin ann agus fios gu bheil e fosgailte dhut",
  "hero.begin": "Càite am bu toil leat tòiseachadh?",
  "hero.beginFind": "Lorg do chiad cheum",
  "hero.beginBrowse": "Faic cò tha ann",
  "how.oneTitle": "Innis dhuinn nad fhaclan fhèin",
  "how.oneBody":
    "Na tha a dhìth ort, gu ìre mhath càite a bheil thu, agus rud sam bith mun t-suidheachadh agad. Dìreach trì ceistean.",
  "how.twoTitle": "Bidh sinn ga mheasadh",
  "how.twoBody":
    "An aghaidh na tha gach rud air a shon, cò dha a tha e fosgailte, càite an ruith e agus mar a ruigeas tu e. Tha an toradh air a chumhachdachadh le IF.",
  "how.threeTitle": "Gheibh thu beagan roghainnean fìor",
  "how.threeBody":
    "Dòrlach, chan e ceud, gach fear le carson a fhreagair e, dè a chosgas e, cò dha a tha e, agus dè dìreach a thachras às dèidh dhut dol an sàs.",
  "how.forWomen": "Do bhoireannaich",
  "how.forOrgs": "Do bhuidhnean",
  "how.orgOneTitle": "Innis dhuinn cò sibh",
  "how.orgOneBody":
    "Beagan cheistean mu na nì sibh, cò dha a tha sibh airson fuasglaidhean a thoirt, agus càite. Tha an clàradh luath.",
  "how.orgTwoTitle": "Bidh sinn gur dearbhadh, aon turas",
  "how.orgTwoBody":
    "An aghaidh clàr poblach no stèidhichte air ur clàr-obrach. Às dèidh an dearbhaidh sin, postaichidh sibh na thogras sibh, cuin a thogras sibh.",
  "how.orgThreeTitle": "Lorgaidh i e nuair a fhreagras e",
  "how.orgThreeBody":
    "Chan ann air sgàth gun do lorg i ur n-ainm, ach air sgàth gu robh na thuirt i a' freagairt air an fhuasgladh a tha sibh a' tabhann.",
  "origin.eyebrow": "Carson a tha seo ann",
  "origin.title": "Thòisich e ann an seòmar mar seo",
  "origin.bodyOne":
    "Bidh an Holistic Wellbeing Summit a' toirt bhoireannach còmhla ris na daoine as urrainn dhaibh cuideachadh. Bidh cuideigin a' dèanamh ceangal. Bidh cuideigin ag ainmeachadh maoin nach cuala tu roimhe, agus a-nis tha fios agad gu bheil i ann.",
  "origin.bodyTwo":
    "An uairsin bidh an seòmar falamh. Tillidh na buidhnean gu an obair, agus tha na boireannaich fhathast feumach oirre. Is e an t-àrd-ùrlar seo an seòmar sin leis na dorsan fosgailte, do gach boireannach nach robh a-riamh ann.",
  "zones.eyebrow": "Raointean Inntrigidh",
  "zones.title": "Gach seòrsa taic, aon àrd-ùrlar",
  "zones.body":
    "Obair, airgead, ionnsachadh, slàinte, gnìomhachas, guth a bhith agad. Feumaidh a’ mhòr-chuid de bhoireannaich barrachd air aon dhiubh aig an aon àm, agus chan eil a’ mhòr-chuid de sheirbheisean a’ dèanamh ach aon, agus is e sin am beàrn a tha seo ann airson a dhùnadh.",
  "zones.browse": "Rùraich a h-uile duine air an àrd-ùrlar",
  "trust.checkedTitle": "Susbaint dhearbhte",
  "trust.checkedBody":
    "Chaidh gach buidheann an seo a dhearbhadh an aghaidh clàr poblach no am maoinichear mus b’ urrainn dhaibh dad a phostadh. Tha an ceann-latha mu dheireadh a chaidh a dhearbhadh air gach liosta.",
  "trust.privateTitle": "Tha am fiosrachadh prìobhaideach",
  "trust.privateBody":
    "Chan fheum thu cunntas gus sireadh, leughadh no iarrtas a chur a-steach. Thathar a’ cleachdadh na sgrìobhas tu gus na toraidhean agad a rangachadh, agus cha tèid a reic, a thoirt seachad, no a chleachdadh gus pròifil a thogail mu do dhèidhinn.",
  "trust.paidTitle": "Gun susbaint phàighte",
  "trust.paidBody":
    "Chan eil suidheachadh pàighte no sanasachd ann. Tha na toraidhean air an òrdachadh a rèir cho math ’s a fhreagras iad na dh’innis thu dhuinn, agus tha gach liosta ag innse carson a fhreagair e.",
  "orgs.title": "A bheil thu a’ ruith rudeigin a bu chòir fios a bhith aig boireannaich mu dheidhinn?",
  "orgs.body":
    "Cuir an liosta e an seo agus ruigidh e na boireannaich dhan freagair e, seach ge bith cò a lorgas an làrach-lìn agad. An-asgaidh, agus bidh sinn gad dhearbhadh aon turas seach a bhith a’ sgrùdadh gach liosta.",
  "orgs.cta": "Coinnich na boireannaich",

  "flow.back": "Air ais",
  "flow.questionOf": "Ceist # à 3",
  "flow.next": "Air adhart",
  "flow.changeAnswers": "Atharraich na freagairtean",
  "flow.searchCredit": "Lorg le taic IF",
  "flow.orgPrompt":
    "A bheil thu nad bhuidheann no nad neach a tha a' tabhann fhuasglaidhean do bhoireannaich?",
  "flow.orgLink": "Do bhuidhnean",
  "q1.title": "Dè an cuideachadh a tha a dhìth ort?",
  "q1.subline": "Nad fhaclan fhèin. Chan eil freagairt cheàrr ann.",
  "q1.placeholder":
    "m.e. a' tilleadh a dh'obair às dèidh dhomh cùram a ghabhail de mo mhàthair",
  "q1.blank":
    "Cuir beagan fhaclan ann, gus am bi fios againn càite an coimhead sinn.",
  "q1.searchOn": "Nì sinn lorg air na sgrìobh thu.",
  "q1.suggestions": "Molaidhean",
  "q2.title": "Càite an coimhead sinn airson taic?",
  "q2.subline": "Baile, còd-puist, no sgìre na comhairle agad.",
  "q2.placeholder": "m.e. EH48",
  "q2.unknown":
    "Chan aithne dhuinn an t-àite sin. Feuch baile faisg ort, no lorg air feadh Alba.",
  "q2.or": "No",
  "q2.anywhere": "Àite sam bith ann an Alba",
  "q2.onlineOnly": "Taic air-loidhne a-mhàin",
  "q2.hint": "Sgrìobh àite, no tagh fear den dà roghainn gu h-àrd.",
  "q3.title": "Dè as fheàrr a mhìnicheas do shuidheachadh?",
  "q3.subline":
    "Cuidichidh seo sinn gus taic fhaicinn a dh'fhaodadh a bhith agad. Faodaidh tu barrachd air aon a thaghadh.",
  "q3.hint": "Tagh rud sam bith a fhreagras, no tagh Chan eil mi airson innse.",
  "q3.privacy":
    "Chan eil sinn a' cumail do fhreagairtean no gan toirt dha na buidhnean a sheallas sinn dhut.",
  "results.title": "Na h-ath cheumannan dhut",
  "results.refine": "Teannaich no leudaich",
  "results.ordered":
    "Air an òrdachadh a rèir cho math 's a fhreagras iad ris na dh'innis thu dhuinn. Chan eil duine a' pàigheadh airson nochdadh an seo.",
  "results.orgsOnly":
    "Chan eil dad fosgailte a' freagairt gu math gu leòr, ach tha na buidhnean seo ag obair air na dh'fhaighnich thu mu dheidhinn.",
  "results.thatsAll":
    "Sin a h-uile dad a fhreagras gu dlùth. Faodaidh tu an lorg a leudachadh no na dh'innis thu dhuinn atharrachadh.",
  "results.showScotland": "Seall taic air feadh Alba",
  "results.changeMine": "Atharraich na freagairtean agam",
  "results.startOver": "Tòisich às ùr",
  "card.bestMatch": "An fhreagairt as fheàrr",
  "card.save": "Sàbhail",
  "card.saved": "Air a shàbhaladh",
  "card.saveAria": "Sàbhail #",
  "card.savedAria": "Air a shàbhaladh: #",
  "card.whoFor": "Cò dha a tha e",
  "card.whatToExpect": "Dè ri shùileachadh",
  "card.whyMatched": "Carson a fhreagair seo riut:",
  "card.learnMore": "Barrachd fiosrachaidh",
  "card.missing": "Gun lìonadh fhathast",
  "card.closes": "A' dùnadh #",
  "card.closed": "Dùinte #",
  "card.verified": "Dearbhte",
  "card.verifiedOn": "Dearbhte · ùrachadh mu dheireadh #",
  "nomatch.title": "Cha do lorg sinn dad dhut an-dràsta",
  "nomatch.body":
    "Cha chiall sin nach eil cuideachadh ann. Is e a tha e a' ciallachadh nach eil rud againn an-diugh a fhreagras ris na dh'iarr thu.",
  "nomatch.tryFirst": "Feuch seo an toiseach",
  "nomatch.widen": "Leudaich gu Alba gu lèir",
  "nomatch.onlineTitle": "Taic air-loidhne a-mhàin",
  "nomatch.changeTitle": "Atharraich na dh'iarr thu",
  "nomatch.changeNote":
    "Bidh faclan eile uaireannan a' lorg rudan eile. Is fhiach aon oidhirp eile.",
  "nomatch.startTitle": "Tòisich a-rithist",
  "nomatch.startNote": "Glan a h-uile dad agus tòisich leis a' chiad cheist.",
  "orgsAnswer.title": "Faodaidh na daoine seo cuideachadh cuideachd",
  "orgsAnswer.body":
    "Buidhnean a tha ag obair air na dh'fhaighnich thu mu dheidhinn. Dh'fhaodadh nach eil dad fosgailte aca an-dràsta, ach faodaidh tu dhol thuca gu dìreach.",
  "talkcta.title": "A bheil thu airson bruidhinn ri cuideigin?",
  "talkcta.body":
    "Cuideigin aig a bheil fios dè tha ann, agus a chuireas air an t-slighe cheart thu. Tagh àm a fhreagras ort. Chan eil e a' cosg dad agus chan eil cunntas a dhìth.",
  "talkcta.cta": "Seall na h-amannan a tha saor",
  "talkcta.note":
    "Bidh fios againn mu thràth dè bha thu a' lorg, agus mar sin cha leig thu leas a mhìneachadh a-rithist.",
  "talkcta.today":
    "A bheil cuideachadh a dhìth ort an-diugh? Bruidhinn rinn a-nis.",
  "refine.back": "Air ais dha na toraidhean",
  "refine.title": "Teannaich no leudaich",
  "refine.howFar": "Dè cho fada 's a choimheadas sinn",
  "refine.onlyShow": "Na seall ach",
  "refine.nothingMatches": "Chan eil dad a' freagairt leis na criathragan seo.",
  "refine.tryRemoving": "Feuch ri “#” a thoirt air falbh.",
  "refine.inScope": "A' coimhead ann an: #.",
  "refine.tryWiden": "Feuch ris an raon a leudachadh.",
  "refine.update": "Ùraich an lorg agam",
  "scope.myArea": "An sgìre agam",
  "scope.nearby": "Sgìrean faisg orm",
  "scope.allScotland": "Alba gu lèir",
  "scope.online": "Air-loidhne a-mhàin",
  "filter.free": "An-asgaidh",
  "filter.openNow": "Fosgailte a-nis",
  "filter.noForms": "Gun fhoirmean",
  "saved.title": "An liosta shàbhailte agad",
  "saved.titleNamed": "An liosta shàbhailte aig #",
  "saved.emptyBody":
    "Nuair a lorgas tu rud as fhiach tilleadh thuige, brùth Sàbhail air. Bidh e an seo, agus innsidh sinn dhut mus dùin e.",
  "saved.emptyCta": "Lorg taic",
  "saved.soonest": "An rud a dhùineas an toiseach air a' mhullach.",
  "saved.seeWhatElse": "Seall dè eile",
  "saved.findSomethingElse": "Lorg rudeigin eile",
  "saved.settings": "Cuimhneachain agus roghainnean a' chunntais",
  "saved.noClosingDate": "Gun cheann-latha dùnaidh",
  "saved.noLongerRunning": "Chan eil e a' ruith tuilleadh",
  "service.backToResults": "Air ais dha na toraidhean agad",
  "service.cost": "Cosgais",
  "service.where": "Càite",
  "service.howToTakePart": "Mar a ghabhas tu pàirt",
  "service.continueTo": "Lean air adhart gu #",
  "service.closedTitle": "Tha seo air dùnadh",
  "service.closedBody":
    "Dh'fhaodadh e ruith a-rithist. Innsidh # dhut cuin a dh'fhosglas an ath fhear, agus dh'fhaodadh rudeigin coltach a bhith ri fhaighinn a-nis.",
  "service.askNext": "Faighnich cuin a thòisicheas an ath fhear",
  "service.findSimilar": "Lorg taic choltach ris",
  "service.somethingWrong": "A bheil rudeigin ceàrr an seo?",
  "discover.title": "Cò tha ag obair do bhoireannaich ann an Alba",
  "discover.lede":
    "Chaidh gach buidheann an seo a dhearbhadh leinn. Lorg fear le ainm, no leugh sìos a rèir na tha a dhìth ort.",
  "discover.searchLabel": "Lorg buidhnean a rèir ainm no a rèir na nì iad",
  "discover.searchButton": "Lorg buidhnean",
  "discover.orAnswer": "No freagair trì ceistean agus lorgaidh sinn rud dhut",
  "discover.byZone": "Rùraich a rèir Raon Ruigsinneachd",
  "discover.byZoneNote":
    "Na seòrsaichean taice air a bheil an t-àrd-ùrlar air a thogail. Bheir gach fear thu dha na buidhnean a tha ag obair ann.",
  "discover.nobodyYet": "Chan eil duine an seo fhathast",
  "discover.byNeed": "Rùraich a rèir na tha a dhìth ort",
  "discover.byNeedNote": "Abair e mar a chanadh tu a-mach e.",
  "zone.allZones": "Na Raointean Ruigsinneachd uile",
  "zone.eyebrow": "Raon Ruigsinneachd",
  "zone.empty":
    "Chan eil duine air a liostadh san raon seo fhathast. Cha chiall sin nach eil cuideachadh ann, mar sin innis dhuinn dè tha a dhìth ort agus coimheadaidh sinn thairis air a h-uile dad a tha againn.",
  "zone.tellUs": "Innis dhuinn dè tha a dhìth ort",
  "zone.alsoWorks": "Ag obair san raon seo cuideachd",
  "need.everything": "A h-uile dad as urrainn dhut rùrachadh",
  "need.eyebrow": "Dè tha a dhìth ort",
  "discover.eyebrow": "Rùraich",
  "discover.searchAria": "Lorg",
  "discover.clear": "Glan",
  "discover.nothingMatches": "Chan eil dad a' freagairt ri “#”",
  "discover.forQuery": "airson “#”",
  "discover.searchNote":
    "Chan eil am bogsa seo a' coimhead ach air ainmean agus tuairisgeulan. Ma tha thu a' feuchainn ri suidheachadh a mhìneachadh seach buidheann àraidh a lorg, nì na trì ceistean fada nas fheàrr.",
  "discover.tryQuestions": "Feuch na trì ceistean.",
  "need.emptyShort": "Chan eil duine air a liostadh an seo fhathast.",
  "need.workOnThis":
    "Tha an fheadhainn aig a bheil rudeigin fosgailte air thoiseach.",
  "need.empty":
    "Chan eil duine air a liostadh an seo fhathast. Cha chiall sin nach eil cuideachadh ann, mar sin innis dhuinn dè tha a dhìth ort agus coimheadaidh sinn thairis air a h-uile dad a tha againn.",
  "talk.title": "Bruidhinn ri cuideigin",
  "talk.pickTime": "Tagh àm a fhreagras ort",
  "talk.pickBody":
    "Cuiridh sinn fòn thugad. Mairidh e mu leth-uair a thìde, chan eil e a' cosg dad, agus chan eil cunntas a dhìth.",
  "talk.noneTitle": "Chan eil dad saor sna seachdainean a tha romhainn",
  "talk.noneBody":
    "Tha sin neo-àbhaisteach, agus cha chiall e nach urrainn do dhuine cuideachadh. Cuir fios thugainn agus lorgaidh sinn àm nach eil air a' mhìosachan seo.",
  "talk.otherWays": "Dòighean eile air fios a chur thugainn",
  "talk.ukTime": "Tha a h-uile àm ann an àm na Rìoghachd Aonaichte.",
  "talk.todayInstead":
    "A bheil cuideachadh a dhìth ort an-diugh seach aig àm suidhichte? Tha dòighean nas luaithe air fios a chur thugainn.",
  "booking.name": "D' ainm",
  "booking.nameNote": "Dè bu toil leat a bhith air do ghairm",
  "booking.email": "Seòladh puist-d",
  "booking.emailNote":
    "Cuiridh sinn an t-àm an seo, le faidhle mìosachain as urrainn dhut bruthadh air.",
  "booking.phone": "Àireamh fòn",
  "booking.phoneNote":
    "Dìreach ma b' fheàrr leat gun cuireadh sinn fòn thugad seach post-d.",
  "booking.notes": "Rud sam bith a tha thu airson innse dhuinn ro làimh",
  "booking.notesNote":
    "Roghainneil. Chan eil duine ga leughadh ach an neach a chuireas fòn thugad.",
  "booking.optional": "Roghainneil",
  "booking.submit": "Cuir an t-àm seo air dòigh",
  "confirm.title": "Dearbh a' ghairm agad",
  "confirm.pickDifferent": "Tagh àm eile",
  "confirm.privacy":
    "Chan eil sinn a' cleachdadh d' ainm agus do phost-d ach gus an gairm a dhèanamh. Chan eil cunntas ga chruthachadh, agus chan eil seo ga chur ri liosta sam bith.",
  "booked.title": "Tha sin air a chur air dòigh",
  "booked.sent":
    "Chuir sinn an t-àm dhan bhogsa agad, le faidhle mìosachain as urrainn dhut bruthadh air gus a chur ris an fhòn agad. Faodaidh e mionaid a thoirt.",
  "booked.reference": "D' àireamh-iomraidh",
  "booked.prepare":
    "Chan eil dad ri ullachadh. Bidh an neach a chuireas fòn air na bha thu a' lorg a leughadh mu thràth, agus cha leig thu leas tòiseachadh bhon toiseach.",
  "booked.move":
    "Ma sguireas an t-àm de bhith freagarrach, freagair am post-d sin agus gluaisidh sinn e.",
  "booked.keepLooking": "Cùm ort a' coimhead san eadar-ama",
  "booked.backToStart": "Air ais dhan toiseach",
  "account.title": "Faigh gu do chunntas",
  "account.saveIt": "Clàraich a-steach gus a shàbhaladh",
  "account.saveBody":
    "Is e sàbhaladh an aon rud an seo air a bheil cunntas a dhìth, gus am bi do liosta ann an ath-thuras. Chùm sinn grèim air na bhrùth thu Sàbhail air, agus bidh e a' feitheamh ort nuair a bhios tu a-staigh.",
  "account.otp":
    "Cuiridh sinn còd aon-turais thugad gus clàradh a-steach. Chan eil facal-faire ri chuimhneachadh.",
  "account.emailPrivate":
    "Tha do phost-d air a chumail prìobhaideach agus tèarainte.",
  "account.carryOn": "Lean ort gun sàbhaladh",
  "account.signInHere": "Clàraich a-steach an seo",
  "code.title": "Thoir sùil air do phost-d",
  "code.sentTo": "Chuir sinn còd clàraidh gu:",
  "code.justSearch": "Dìreach lorg gun chlàradh a-steach",
  "code.enterBelow": "Cuir a-steach gu h-ìosal e agus tha thu a-staigh.",
  "code.arrive":
    "Bu chòir dha tighinn taobh a-staigh mionaid. Mura tàinig, thoir sùil air a' phasgan spama agad.",
  "code.different": "Cleachd seòladh eile",
  "profile.title": "Cuir do phròifil air dòigh",
  "profile.subline":
    "Dìreach ainm gus fàilte a chur ort. Chan eil dad an seo riatanach.",

  "nav.home": "Dachaigh",
  "nav.discover": "Rùraich",
  "nav.forOrgs": "Do bhuidhnean",
  "nav.faq": "CÀC",
  "nav.signIn": "Clàraich a-steach",
  "nav.signOut": "Clàraich a-mach",
  "nav.saved": "Air a shàbhaladh",
  "nav.settings": "Roghainnean",
  "nav.remindersSettings": "Cuimhneachain agus roghainnean",
  "nav.sections": "Earrannan",
  "nav.menu": "clàr-taice",
  "nav.homeAria": "HWS Pathgrid, dachaigh",
  "nav.findNext": "Lorg an ath cheum agad",
  "footer.label": "Bonn na duilleige",
  "footer.tagline":
    "A' ceangal bhoireannach ri cothrom — nas fhaide na aon seòmar, aon chòd-puist no aon latha.",
  "footer.free":
    "An-asgaidh ri chleachdadh, agus cha leig thu leas cunntas gus lorg, leughadh no tagradh.",
  "footer.forYou": "Dhutsa",
  "footer.find": "Lorg fuasgladh",
  "footer.discover": "Rùraich buidhnean",
  "footer.faq": "Ceistean cumanta",
  "footer.help": "Cuideachadh",
  "footer.forOrgs": "Do bhuidhnean",
  "footer.meetWomen": "Coinnich na boireannaich",
  "footer.whyList": "Carson a chlàradh leinn",
  "footer.whoListed": "Cò tha air a chlàradh mar-thà",
  "footer.legal": "Laghail",
  "footer.privacy": "Poileasaidh prìobhaideachd",
  "footer.terms": "Cumhaichean cleachdaidh",
  "footer.talk": "Bruidhinn ri duine",
  "cookie.region": "Mu bhriosgaidean",
  "cookie.claim":
    "Bidh sinn a' cleachdadh beagan bhriosgaidean, agus chan eil gin dhiubh gad choimhead.",
  "cookie.detail":
    "Cumaidh iad thu clàraichte a-steach agus cuimhnichidh iad do chànan. Chan eil dad ga lorg no ga reic.",
  "cookie.more": "Barrachd sa phoileasaidh prìobhaideachd",
  "cookie.okay": "Ceart gu le\u00f2r",
  "loading.page": "A' luchdachadh na duilleige seo",
  "loading.organisations": "A' luchdachadh nam buidhnean",
  "loading.organisation": "A' luchdachadh a' bhuidhinn seo",
  "loading.saved": "A' luchdachadh na liosta sh\u00e0bhailte agad",
  "loading.listing": "A' luchdachadh a' chl\u00e0raidh seo",

  "faq.title": "Ceistean cumanta",
  "faq.lede":
    "Bidh HWS Path Grid a' ceangal bhoireannach air feadh Alba ris an taic a tha dha-rìribh freagarrach dhaibh, agus a' toirt dha na buidhnean air a cùlaibh aon àite far an lorgar iad.",
  "faq.notHere":
    "Mura h-eil am freagairt a tha a dhìth ort an seo, freagraidh sinn a h-uile teachdaireachd.",
  "faq.talkPerson": "Bruidhinn ri duine.",
  "faq.forWomen": "Ma tha thu a' lorg taic",
  "faq.forOrgs": "Ma tha thu nad bhuidheann",

  "meta.home.title": "Lorg taic do bhoireannaich ann an Alba",
  "meta.home.desc":
    "Innis dhuinn nad fhaclan fhèin dè tha a dhìth ort agus seallaidh sinn dhut beagan cheumannan as fhiach a ghabhail. Tha gach buidheann air a dhearbhadh. Chan eil cunntas a dhìth.",
  "meta.find.desc":
    "Innis dhuinn nad fhaclan fhèin dè tha a dhìth ort. Trì ceistean, gun chunntas, agus bidh sinn a' coimhead thairis air gach buidheann ann an Alba a dhearbh sinn.",
  "meta.where.desc":
    "Innis dhuinn càite a bheil thu gus an cuir sinn na tha faisg ort an toiseach, agus sealltainn fhathast dhut na tha fosgailte dha na h-uile.",
  "meta.situation.desc":
    "Tagh rud sam bith a fhreagras. Atharraichidh e na chuireas sinn romhad.",
  "meta.results.desc":
    "An taic a lorg sinn dhut, leis an adhbhar a tha gach tè an seo.",
  "meta.refine.desc":
    "Teannaich an lorg agad no fosgail e, nuair nach e a' chiad seata de thoraidhean am fear ceart.",
  "meta.change.title": "Atharraich na freagairtean agad",
  "meta.change.desc":
    "Atharraich na dh'innis thu dhuinn agus coimheadaidh sinn a-rithist thairis air gach buidheann.",
  "meta.startOver.desc":
    "Glan na freagairtean agad agus tòisich na trì ceistean a-rithist.",
  "meta.discover.title": "Rùraich buidhnean air feadh Alba",
  "meta.discover.desc":
    "Rùraich na buidhnean a tha ag obair le boireannaich air feadh Alba, a rèir an seòrsa taic a tha iad a' tabhann no a rèir na tha a dhìth ort.",
  "meta.faq.desc":
    "Na bhios boireannaich a' faighneachd mus cleachd iad an làrach seo, agus na bhios buidhnean a' faighneachd mus clàraich iad air. Air am freagairt gu soilleir.",
  "meta.orgs.desc":
    "Clàraich na bhios tu a' ruith air HWS Path Grid agus ruig na boireannaich a fhreagras air dha-rìribh. An-asgaidh, air a dhearbhadh aon turas, agus chan eil duine a' pàigheadh gus nochdadh.",
  "meta.go.title": "A' fàgail gus tagradh",
  "meta.go.desc":
    "Gad thoirt gu duilleag na buidhne fhèin gus an urrainn dhut tagradh còmhla riutha.",
  "meta.help.desc":
    "Mura lorg thu na tha a dhìth ort, no ma tha rudeigin an seo a' coimhead ceàrr, innis dhuinn. B' fheàrr leinn cluinntinn bhuat na gun leigeadh tu seachad e.",
  "meta.saved.desc": "A h-uile dad a shàbhail thu, ann an aon àite.",
  "meta.privacy.desc":
    "Na bhios HWS Path Grid a' cruinneachadh nuair a chleachdas tu an làrach, carson, agus na nach dèan sinn a-chaoidh leis.",
  "meta.terms.desc":
    "Na riaghailtean airson HWS Path Grid a chleachdadh, dha na boireannaich a lorgas e agus dha na buidhnean a chlàraicheas air.",
  "meta.talk.desc":
    "Cuir air dòigh gairm an-asgaidh le cuideigin a chuireas air an t-slighe cheart thu.",
  "meta.confirm.desc":
    "An ceum mu dheireadh mus tèid a' ghairm agad a chur air dòigh.",
  "meta.booked.title": "Tha a' ghairm agad air a cur air dòigh",
  "meta.booked.desc": "Dè thachras an ath rud.",
  "meta.account.desc":
    "Clàraich a-steach, no dèan cunntas, gus am bi an taic a shàbhaileas tu ann an ath-thuras a thilleas tu.",
  "meta.accountCode.desc":
    "Chuir sinn còd sia àireamhan thugad gus clàradh a-steach leis.",
  "meta.profile.desc":
    "Cuir d' ainm ris gus an urrainn dhuinn bruidhinn riut mar bu chòir. Chan eil dad an seo riatanach.",
  "meta.settings.desc":
    "Na cuimhneachain agad, do chànan, agus dè thachras dhan chunntas agad.",
  "meta.emailChange.title": "Atharraich an seòladh puist-d agad",
  "meta.emailChange.desc":
    "Gluais an cunntas agad, agus a h-uile dad a tha air a shàbhaladh air, gu seòladh eile.",
  "meta.emailCode.title": "Thoir sùil air a' bhogsa ùr agad",
  "meta.emailCode.desc":
    "Cuir a-steach an còd a chuir sinn dhan t-seòladh ùr agad.",

  "settings.savedList": "An liosta shàbhailte agam",
  "settings.reminders": "Cuimhneachain",
  "settings.howFar": "Dè cho fada ro làimh",
  "settings.nothingElse":
    "Chan eil sinn a' cur dad eile. Gun chuairt-litir, gun mholaidhean.",
  "settings.neverName":
    "Chan ainmich post-d cuimhneachaidh a-riamh an seòrsa taic, air eagal gun leugh cuideigin eile am bogsa agad.",
  "settings.emailChanged":
    "Deiseil. Tha an cunntas agad air an t-seòladh seo a-nis, agus thàinig an liosta shàbhailte agad leis.",
  "reminders.beforeDeadline": "Ro cheann-latha",
  "change.heard": "Seo na chuala sinn",
  "change.weWillShow":
    "Seallaidh sinn dhut beagan de na h-ath cheumannan, am fear as fheàrr a fhreagras an toiseach. Chan eil duine a' pàigheadh gus nochdadh an seo.",
  "startover.confirm":
    "Glanaidh seo na freagairtean agad. Tòiseachadh a-rithist?",
  "startover.note":
    "Fanaidh rud sam bith a shàbhail thu far a bheil e. Chan fhalbh ach na dh'innis thu dhuinn mun na tha a dhìth ort.",
  "startover.yes": "Seadh, tòisich a-rithist",
  "startover.keep": "Cùm na freagairtean agam",
  "legal.onThisPage": "Air an duilleag seo",
  "legal.questions":
    "Thèid ceistean mu rud sam bith dheth seo gu duine, chan ann gu foirm.",
  "legal.draftTitle": "Is e dreachd a tha seo",
  "legal.draftBody":
    "Tha na faclan gu h-ìosal a' mìneachadh dìreach mar a tha an t-àrd-ùrlar ag obair an-diugh, ach cha deach iad tro sgrùdadh deireannach fhathast. Tha e air fhoillseachadh gus an urrainn dhut a leughadh agus ar cumail ris, chan ann air sgàth gu bheil e deiseil.",
  "legal.draftAsk":
    "Ma tha rud sam bith an seo cudromach do cho-dhùnadh a tha thu a' dèanamh, faighnich dhuinn.",
  "legal.pendingTitle": "Tha am fear seo fhathast ga sgrìobhadh",
  "legal.pendingBody":
    "Tha na faclan againne agus thèid am foillseachadh an seo mus fosgail an t-àrd-ùrlar. Chan eil dad air an duilleag seo an gnìomh gus an tèid.",
  "legal.pendingAsk":
    "Ma tha thu airson faighinn a-mach dè thachras dhan na sgrìobhas tu san eadar-ama, faighnich dhuinn agus innsidh sinn dhut gu soilleir.",
  "photos.aria": "Dealbhan bhon Holistic Wellbeing Summit",
  "photos.credit": "An Holistic Wellbeing Summit",
  "testimonials.aria": "Na tha boireannaich ag ràdh",
  "testimonials.prev": "An iomradh roimhe",
  "testimonials.next": "An ath iomradh",
  "form.sendCode": "Cuir thugam còd clàraidh a-steach",
  "form.yourCode": "An còd clàraidh a-steach agad",
  "form.codeWorks": "Bidh an còd ag obair airson 15 mionaidean.",
  "form.newCodeSent": "Chaidh còd ùr a chur. Faodaidh e mionaid a thoirt.",
  "form.sendNewCode": "Cuir còd ùr",
  "form.theCodeWeSent": "An còd a chuir sinn",
  "form.newEmail": "Seòladh puist-d ùr",
  "form.sendToNew": "Cuir còd dhan t-seòladh ùr",
  "form.firstName": "Ainm",
  "form.lastName": "Sloinneadh",
  "form.phoneOptional": "Àireamh fòn (roghainneil)",
  "form.phoneNote":
    "Cha chleachd sinn seo ach ma dh'iarras tu oirnn fònadh air ais thugad.",
  "form.continue": "Lean air adhart",
  "org.allOrgs": "A h-uile buidheann",
  "org.checked": "Air a dhearbhadh le HWS",
  "org.website": "An làrach-lìn aca",
  "org.whatTheyDo": "Dè bhios iad a' dèanamh",
  "org.whatTheyOffer": "Dè tha iad a' tabhann",
  "org.whoTheyWorkWith": "Cò leis a bhios iad ag obair",
  "org.whoTheyCanHelp": "Cò as urrainn dhaibh cuideachadh",
  "org.whoTheyCannot": "Cò nach urrainn dhaibh cuideachadh",
  "org.when": "Cuin",
  "org.howToReach": "Mar a ruigeas tu iad",
  "org.zones": "Raointean Ruigsinneachd",
  "org.mainOne": "Am prìomh fhear aca",
  "org.nothingRunning":
    "Chan eil dad aca a' ruith an-dràsta. Innis dhuinn dè tha a dhìth ort agus coimheadaidh sinn thairis air a h-uile dad a tha againn.",
  "org.orTellUs":
    "No innis dhuinn dè tha a dhìth ort agus lorgaidh sinn rud dhut",

  "orgpage.heroTitle":
    "Na boireannaich a tha sibh air an son, gun aca ri ur lorg",
  "orgpage.heroBody":
    "Tha sibh a' dèanamh na h-obrach mu thràth. Is e an duilgheadas gum feum boireannach ur n-ainm a bhith aice gus an làrach agaibh a lorg. An seo bidh i a' mìneachadh a suidheachadh, agus cuiridh sinn sibhse mu coinneimh air sgàth gur sibhse am freagairt ceart, chan ann air sgàth gun do thomhais i.",
  "orgpage.haveAccount": "Tha cunntas agam mu thràth",
  "orgpage.freeNote":
    "An-asgaidh. Gun àite pàighte, gun sanasachd, agus chan eil duine a' pàigheadh gus nochdadh nas àirde.",
  "orgpage.whatYouGet": "Na gheibh sibh",
  "orgpage.reach": "Ruigsinneachd, agus dòigh air a dhearbhadh",
  "orgpage.gain1Title": "Boireannaich a bha a' lorg na tha sibh a' dèanamh",
  "orgpage.gain1Body":
    "Bidh i a' mìneachadh a suidheachadh nam faclan aice fhèin. Cothromaichidh sinn e an aghaidh cò dha a tha sibh deiseil, dè tha sibh a' tabhann, càite am bi sibh ag obair agus dè tha e a' cosg. Thig i thugaibh mu thràth a' tuigsinn a bheil i airidh.",
  "orgpage.gain2Title":
    "Àireamhan as urrainn dhuibh a thoirt gu neach-maoineachaidh",
  "orgpage.gain2Body":
    "Cia mheud boireannach a chaidh a chur chun na làraich agaibh fhèin, cia mheud a leugh duilleag na buidhne agaibh, agus mar a chaidh dha gach rud a chuir sibh suas. Chan e figear faoin: tha a' chiad fhear a' cunntadh dhaoine a bhrùth troimhe thugaibh.",
  "orgpage.gain3Title": "Air a dhearbhadh aon turas, chan ann gach clàradh",
  "orgpage.gain3Body":
    "Bidh sinn gur dearbhadh an aghaidh clàir phoblaich no an luchd-maoineachaidh agaibh nuair a thig sibh a-steach. Às dèidh sin cuiridh sibh suas na thogras sibh, nuair a thogras sibh, gun a bhith a' feitheamh oirnn.",
  "orgpage.gain4Title": "Nas lugha de na ceistean ceàrr",
  "orgpage.gain4Body":
    "Innsidh sibh cò nach urrainn dhuibh a chuideachadh, agus seallaidh sinn e. Cuiridh boireannaich iad fhèin a-mach mus cuir iad fios thugaibh, agus is e sin ùine air ais dhan neach a fhreagras am bogsa agaibh.",
  "orgpage.fourSteps": "Ceithir ceumannan, agus is e fear dhiubh am fear againne",
  "orgpage.step1Title": "Innis dhuinn cò sibh",
  "orgpage.step1Body":
    "Beagan cheistean mu na nì sibh, cò dha a bhios sibh ag obair agus càite. Deich mionaidean, agus faodaidh sibh stad letheach slighe agus tilleadh.",
  "orgpage.step2Title": "Nì sinn sgrùdadh oirbh",
  "orgpage.step2Body":
    "An aghaidh clàir phoblaich, no an luchd-maoineachaidh agaibh. Aon sgrùdadh, air a dhèanamh le duine.",
  "orgpage.step3Title": "Cuiribh suas na tha fosgailte",
  "orgpage.step3Body":
    "Cùrsa, tabhartas, tadhal a-steach, sgeama treòrachaidh. Rud sam bith aig a bheil slighe a-steach do bhoireannach.",
  "orgpage.step4Title": "Lorgaidh i e nuair a fhreagras e",
  "orgpage.step4Body":
    "Chan ann air sgàth gun do lorg i ur n-ainm. Air sgàth gun do fhreagair na mhìnich i ris na tha sibh a' ruith.",
  "orgpage.whereYouSit": "Càite am biodh sibh",
  "orgpage.zonesBody":
    "Taghaidh sibh fhèin, aon phrìomh fhear agus suas ri dhà eile. Tha feum aig a' mhòr-chuid de bhoireannaich air barrachd air aon aig an aon àm agus chan eil a' mhòr-chuid de sheirbheisean a' dèanamh ach aon, agus is e sin am beàrn a tha seo ann gus a dhùnadh.",

  "legal.englishApplies":
    "Tha na ceann-sgrìobhaidhean air an duilleag seo nad chànan fhèin. Tha na faclan fhèin sa Bheurla, agus is e an tionndadh Beurla a tha an sàs.",
  "legal.askInYourLanguage":
    "Faighnich dhuinn mu phàirt sam bith dheth agus freagraidh sinn.",

  "reason.youToldUs": "dh'innis thu dhuinn #",
  "reason.and": "agus",
  "reason.youAskedAbout": "dh'fhaighnich thu mu #",
  "reason.runsIn": "tha seo a' ruith ann an #",
  "reason.isOnline":
    "tha am fear seo air-loidhne, agus mar sin chan eil e gu diofar càite a bheil thu",
  "reason.acrossScotland": "tha seo fosgailte air feadh Alba",
  "reason.closest":
    "is e seo fear de na rudan as fhaisge a th' againn air na mhìnich thu.",
  "reason.clauseJoin": ", agus ",
};

const sco: Catalogue = {
  "language.label": "Leid",
  "hero.title": "Helpin weemen wi the support they need",
  "hero.body":
    "Tell us whit ye need in yer ain wirds, an we’ll shaw ye a wheen o next steps worth takkin. Three questions, nae accoont needit.",
  "hero.cta": "Finn solution",
  "hero.browse": "Or see wha’s oot there",
  "why.eyebrow": "Hoo it warks",
  "why.title":
    "Kennin somethin exists isna the same as kennin it's open tae ye",
  "hero.begin": "Whaur wad ye like tae stert?",
  "hero.beginFind": "Finn yer neist step",
  "hero.beginBrowse": "See wha's oot there",
  "how.oneTitle": "Tell us, in yer ain wirds",
  "how.oneBody":
    "Whit ye need, roughly whaur ye are, an onythin aboot yer situation. Jist three questions.",
  "how.twoTitle": "We wey it up",
  "how.twoBody":
    "Agin whit ilka thing is for, wha it's open tae, whaur it rins an hou ye can win tae it. The result is AI pouered.",
  "how.threeTitle": "Ye get a wheen o real options",
  "how.threeBody":
    "A haundfu, no a hunner, ilka ane wi why it matched, whit it costs, wha it's for, an exactly whit happens efter ye engage.",
  "how.forWomen": "For weemen",
  "how.forOrgs": "For organisations",
  "how.orgOneTitle": "Tell us wha ye are",
  "how.orgOneBody":
    "A wheen o questions aboot whit ye dae, the fowk ye want tae gie solutions tae, an whaur. Onboardin is swith.",
  "how.orgTwoTitle": "We check ye, the ance",
  "how.orgTwoBody":
    "Agin a public register or on yer track record. Efter that verification, ye post whit ye like, whan ye like.",
  "how.orgThreeTitle": "She finns it whan it fits",
  "how.orgThreeBody":
    "No acause she socht yer name, but acause whit she describit matched the solution ye're offerin.",
  "origin.eyebrow": "Whit wey this is here",
  "origin.title": "It stertit in a room like this ane",
  "origin.bodyOne":
    "The Holistic Wellbeing Summit pits weemen in a room wi the fowk that can actually help thaim. Somebody maks an introduction. Somebody says the name o a fund ye niver kent aboot, an nou ye ken it's there.",
  "origin.bodyTwo":
    "Syne the room teems. The organisations gang back tae thair wark, an the weemen still need it. This platform is that same room wi the doors left open, for ilka wumman that wis niver in it.",
  "zones.eyebrow": "Access Zones",
  "zones.title": "Ilka kind o support, ae platform",
  "zones.body":
    "Wark, siller, learnin, health, enterprise, haein a say. Maist weemen need mair nor ane at a time, an maist services anly dae ane, an that’s the gap this is here tae steek.",
  "zones.browse": "Brouse awbody on the platform",
  "trust.checkedTitle": "Verifeed content",
  "trust.checkedBody":
    "Ilka organisation here has been verified agin a public register or its funder afore it could post onythin. Ilka listin cairries the date it wis last confirmed.",
  "trust.privateTitle": "Information is private",
  "trust.privateBody":
    "Ye dinnae need an accoont tae seek, read or apply. Whit ye type is uised tae rank yer results an isnae selt, passed on, or uised tae build a profile o ye.",
  "trust.paidTitle": "Nae sponsort content",
  "trust.paidBody":
    "There’s nae paid placement an nae advertisin. Results are ordert by hoo weel they fit whit ye telt us, an ilka listin says why it matched.",
  "orgs.title": "Dae ye rin somethin weemen should ken aboot?",
  "orgs.body":
    "List it here an it reaches the weemen it actually suits, raither nor whaever happens tae finn yer wabsite. Free, an we check ye the aince raither nor checkin ilka listin.",
  "orgs.cta": "Meet the weemen",

  "flow.back": "Back",
  "flow.questionOf": "Quaisten # o 3",
  "flow.next": "Neist",
  "flow.changeAnswers": "Chynge yer answers",
  "flow.searchCredit": "Sairch pouered bi AI",
  "flow.orgPrompt":
    "Are ye an organisation or body offerin solutions for weemen?",
  "flow.orgLink": "For organisations",
  "q1.title": "Whit dae ye need help wi?",
  "q1.subline": "In yer ain wirds. There's nae wrang answer.",
  "q1.placeholder": "e.g. gettin back tae wark efter luikin efter ma mither",
  "q1.blank": "Pit in a wheen wirds, sae we ken whaur tae luik.",
  "q1.searchOn": "We'll sairch on whit ye wrote.",
  "q1.suggestions": "Suggestions",
  "q2.title": "Whaur shid we luik for support?",
  "q2.subline": "A toun, a postcode, or yer cooncil airt.",
  "q2.placeholder": "e.g. EH48",
  "q2.unknown":
    "We dinna ken that place. Try a toun nearhaund, or sairch onywhaur in Scotland.",
  "q2.or": "Or",
  "q2.anywhere": "Onywhaur in Scotland",
  "q2.onlineOnly": "Online support ainly",
  "q2.hint": "Type a place, or wale ane o the twa options abuin.",
  "q3.title": "Whit describes yer situation best?",
  "q3.subline":
    "This helps us spy support ye micht qualify for. Ye can wale mair nor ane.",
  "q3.hint": "Wale onythin that fits, or chuse Raither no say.",
  "q3.privacy":
    "We dinna keep yer answers nor gie thaim tae the organisations we shaw ye.",
  "results.title": "Neist steps for ye",
  "results.refine": "Nairrae or widen",
  "results.ordered":
    "Ordert bi hou weel thay fit whit ye telt us. Naebody pays tae kythe here.",
  "results.orgsOnly":
    "Naethin open fits close eneuch tae pit afore ye, but thir organisations wark on whit ye speired aboot.",
  "results.thatsAll":
    "That's aw that fits close. Ye can widen the sairch or chynge whit ye telt us.",
  "results.showScotland": "Shaw support ower Scotland",
  "results.changeMine": "Chynge ma answers",
  "results.startOver": "Stert ower",
  "card.bestMatch": "Best match",
  "card.save": "Save",
  "card.saved": "Saved",
  "card.saveAria": "Save #",
  "card.savedAria": "Saved: #",
  "card.whoFor": "Wha it's for",
  "card.whatToExpect": "Whit tae expect",
  "card.whyMatched": "Hou this matched ye:",
  "card.learnMore": "Lairn mair",
  "card.missing": "No filled in yet",
  "card.closes": "Closes #",
  "card.closed": "Closed #",
  "card.verified": "Verified",
  "card.verifiedOn": "Verified · hindmaist update #",
  "nomatch.title": "We couldna find onythin for ye the nou",
  "nomatch.body":
    "That disna mean there's nae help. It means we dinna hae somethin that fits whit ye speired for the day.",
  "nomatch.tryFirst": "Try this first",
  "nomatch.widen": "Widen tae aw o Scotland",
  "nomatch.onlineTitle": "Online support ainly",
  "nomatch.changeTitle": "Chynge whit ye speired for",
  "nomatch.changeNote":
    "Different wirds whiles find different things. It's worth ae mair try.",
  "nomatch.startTitle": "Stert again",
  "nomatch.startNote": "Redd awthing and begin frae the first quaisten.",
  "orgsAnswer.title": "Thir fowk can help an aw",
  "orgsAnswer.body":
    "Organisations warkin on whit ye speired aboot. Thay micht no hae onythin open the nou, but ye can gang tae thaim direct.",
  "talkcta.title": "Dae ye want tae speak tae somebody?",
  "talkcta.body":
    "Somebody that kens whit's oot there, and can pynt ye the richt wey. Wale a time that suits ye. It costs naethin, and ye dinna need an accoont.",
  "talkcta.cta": "See available times",
  "talkcta.note":
    "We'll awreadies ken whit ye sairched for, sae ye'll no hae tae explain it again.",
  "talkcta.today": "Need help the day? Speak tae us nou.",
  "refine.back": "Back tae results",
  "refine.title": "Nairrae or widen",
  "refine.howFar": "Hou faur tae luik",
  "refine.onlyShow": "Ainly shaw",
  "refine.nothingMatches": "Naethin matches wi thae filters.",
  "refine.tryRemoving": "Try takkin awa “#”.",
  "refine.inScope": "Luikin in: #.",
  "refine.tryWiden": "Try widenin hou faur tae luik.",
  "refine.update": "Update ma sairch",
  "scope.myArea": "Ma airt",
  "scope.nearby": "Airts nearhaund",
  "scope.allScotland": "Aw Scotland",
  "scope.online": "Online ainly",
  "filter.free": "Free",
  "filter.openNow": "Open nou",
  "filter.noForms": "Nae forms",
  "saved.title": "Yer saved leet",
  "saved.titleNamed": "#'s saved leet",
  "saved.emptyBody":
    "Whan ye find somethin worth comin back tae, press Save on it. It'll be here, and we'll tell ye afore it closes.",
  "saved.emptyCta": "Find support",
  "saved.soonest": "Whit closes suinest comes first.",
  "saved.seeWhatElse": "See whit else",
  "saved.findSomethingElse": "Find somethin else",
  "saved.settings": "Mindins and accoont settins",
  "saved.noClosingDate": "Nae closin date",
  "saved.noLongerRunning": "No rinnin ony mair",
  "service.backToResults": "Back tae yer results",
  "service.cost": "Cost",
  "service.where": "Whaur",
  "service.howToTakePart": "Hou tae tak pairt",
  "service.continueTo": "Cairry on tae #",
  "service.closedTitle": "This ane has closed",
  "service.closedBody":
    "It micht rin again. # can tell ye whan the neist ane opens, and there micht be somethin siclike available nou.",
  "service.askNext": "Speir whan the neist ane sterts",
  "service.findSimilar": "Find siclike support",
  "service.somethingWrong": "Somethin wrang wi this?",
  "discover.title": "Wha's warkin for weemen in Scotland",
  "discover.lede":
    "Ilka organisation here has been checkit bi us. Sairch for ane bi name, or read yer wey doun bi whit ye need.",
  "discover.searchLabel": "Sairch organisations bi name or bi whit thay dae",
  "discover.searchButton": "Sairch organisations",
  "discover.orAnswer": "Or answer three quaistens and we'll match ye",
  "discover.byZone": "Brouse bi Access Zone",
  "discover.byZoneNote":
    "The kinds o support the platform is biggit roond. Ilk ane leads tae the organisations warkin in it.",
  "discover.nobodyYet": "Naebody here yet",
  "discover.byNeed": "Brouse bi whit ye need",
  "discover.byNeedNote": "Say it the wey ye'd say it oot loud.",
  "zone.allZones": "Aw Access Zones",
  "zone.eyebrow": "Access Zone",
  "zone.empty":
    "Naebody's leetit in this zone yet. That disna mean there's nae help, sae tell us whit ye need and we'll luik ower awthing we hae.",
  "zone.tellUs": "Tell us whit ye need",
  "zone.alsoWorks": "Warks in this zone an aw",
  "need.everything": "Awthing ye can brouse",
  "need.eyebrow": "Whit ye need",
  "discover.eyebrow": "Discover",
  "discover.searchAria": "Sairch",
  "discover.clear": "Redd",
  "discover.nothingMatches": "Naethin matches “#”",
  "discover.forQuery": "for “#”",
  "discover.searchNote":
    "This box ainly luiks at names and descriptions. Gin ye're tryin tae describe a situation raither nor find a particular organisation, the three quaistens will dae faur better.",
  "discover.tryQuestions": "Try the three quaistens.",
  "need.emptyShort": "Naebody's leetit again this yet.",
  "need.workOnThis": "The anes wi somethin open come first.",
  "need.empty":
    "Naebody's leetit again this yet. That disna mean there's nae help, sae tell us whit ye need and we'll luik ower awthing we hae.",
  "talk.title": "Speak tae somebody",
  "talk.pickTime": "Wale a time that suits ye",
  "talk.pickBody":
    "We'll caw ye. It taks aboot hauf an oor, it costs naethin, and ye dinna need an accoont.",
  "talk.noneTitle": "Naethin free in the neist wheen weeks",
  "talk.noneBody":
    "That's unco, and it disna mean naebody can help. Get in touch and we'll find ye a time that's no on this calendar.",
  "talk.otherWays": "Ither weys tae reach us",
  "talk.ukTime": "Aw times are UK time.",
  "talk.todayInstead":
    "Need help the day raither nor at a buikit time? There's quicker weys tae reach us.",
  "booking.name": "Yer name",
  "booking.nameNote": "Whit ye'd like tae be cawed",
  "booking.email": "Email address",
  "booking.emailNote": "We send the time here, wi a calendar file ye can tap.",
  "booking.phone": "Phone nummer",
  "booking.phoneNote": "Ainly gin ye'd raither we rang ye nor emailed ye.",
  "booking.notes": "Onythin ye want us tae ken first",
  "booking.notesNote": "Optional. Naebody reads this but the body that caws ye.",
  "booking.optional": "Optional",
  "booking.submit": "Buik this time",
  "confirm.title": "Confirm yer caw",
  "confirm.pickDifferent": "Wale a different time",
  "confirm.privacy":
    "We uise yer name and email tae mak the caw and naethin else. Nae accoont is made, and this is no addit tae ony leet.",
  "booked.title": "That's buikit",
  "booked.sent":
    "We hae sent the time tae yer inbox, wi a calendar file ye can tap tae add it tae yer phone. It can tak a meenit tae come.",
  "booked.reference": "Yer reference",
  "booked.prepare":
    "There's naethin tae get ready. Whaiver caws will hae read whit ye were luikin for, sae ye'll no hae tae stert frae the beginnin.",
  "booked.move":
    "Gin the time stops suitin ye, repone tae that email and we'll shift it.",
  "booked.keepLooking": "Keep luikin in the meantime",
  "booked.backToStart": "Back tae the stert",
  "account.title": "Access yer accoont",
  "account.saveIt": "Sign in tae save it",
  "account.saveBody":
    "Savin is the ae thing here that needs an accoont, sae yer leet is still there neist time. We've keepit haud o whit ye juist pressed Save on, and it'll be waitin aince ye're in.",
  "account.otp":
    "We'll send ye a ane-time passcode tae sign in. Nae passwird tae mind.",
  "account.emailPrivate": "Yer email is keepit private and siccar.",
  "account.carryOn": "Cairry on wioot savin",
  "account.signInHere": "Sign in here",
  "code.title": "Check yer email",
  "code.sentTo": "We sent a sign-in code tae:",
  "code.justSearch": "Juist sairch wioot signin in",
  "code.enterBelow": "Pit it in ablow and ye're in.",
  "code.arrive":
    "It shid come inside a meenit. Gin it hasna, check yer spam or junk folder.",
  "code.different": "Uise a different address",
  "profile.title": "Set up yer profile",
  "profile.subline": "Juist a name tae greet ye bi. Naethin here is needit.",

  "nav.home": "Hame",
  "nav.discover": "Discover",
  "nav.forOrgs": "For organisations",
  "nav.faq": "FAQ",
  "nav.signIn": "Sign in",
  "nav.signOut": "Sign oot",
  "nav.saved": "Saved",
  "nav.settings": "Settins",
  "nav.remindersSettings": "Mindins and settins",
  "nav.sections": "Sections",
  "nav.menu": "menu",
  "nav.homeAria": "HWS Pathgrid, hame",
  "nav.findNext": "Find yer neist step",
  "footer.label": "Fuiter",
  "footer.tagline":
    "Connectin weemen tae opportunity — ayont ae room, ae postcode or ae day.",
  "footer.free":
    "Free tae uise, and ye niver need an accoont tae sairch, read or apply.",
  "footer.forYou": "For ye",
  "footer.find": "Find solution",
  "footer.discover": "Discover organisations",
  "footer.faq": "Quaistens fowk speir",
  "footer.help": "Help",
  "footer.forOrgs": "For organisations",
  "footer.meetWomen": "Meet the weemen",
  "footer.whyList": "Hou tae leet wi us",
  "footer.whoListed": "Wha's leetit awreadies",
  "footer.legal": "Legal",
  "footer.privacy": "Privacy policy",
  "footer.terms": "Terms o uise",
  "footer.talk": "Speak tae a body",
  "cookie.region": "Aboot cookies",
  "cookie.claim": "We uise a wheen cookies, and nane o thaim watch ye.",
  "cookie.detail":
    "Thay keep ye signed in and mind yer language. Naethin is trackit or selt.",
  "cookie.more": "Mair in the privacy policy",
  "cookie.okay": "Richt",
  "loading.page": "Loadin this page",
  "loading.organisations": "Loadin organisations",
  "loading.organisation": "Loadin this organisation",
  "loading.saved": "Loadin yer saved leet",
  "loading.listing": "Loadin this leetin",

  "faq.title": "Quaistens fowk speir",
  "faq.lede":
    "HWS Path Grid connects weemen ower Scotland tae the support that raelly suits thaim, and gies the organisations ahint it ae place tae be fund.",
  "faq.notHere": "Gin the answer ye need isna here, we answer ilka message.",
  "faq.talkPerson": "Speak tae a body.",
  "faq.forWomen": "Gin ye're luikin for support",
  "faq.forOrgs": "Gin ye're an organisation",

  "meta.home.title": "Find support for weemen in Scotland",
  "meta.home.desc":
    "Tell us whit ye need in yer ain wirds and we'll shaw ye a wheen neist steps worth takkin. Ilka organisation is checkit. Nae accoont needit.",
  "meta.find.desc":
    "Tell us whit ye need in yer ain wirds. Three quaistens, nae accoont needit, and we luik ower ilka organisation in Scotland we've checkit.",
  "meta.where.desc":
    "Tell us whaur ye are sae we can pit whit's near ye first, and still shaw ye whit's open tae awbody.",
  "meta.situation.desc":
    "Wale onythin that fits. It chynges whit we pit afore ye.",
  "meta.results.desc":
    "The support we fund for ye, wi the raeson ilk ane is here.",
  "meta.refine.desc":
    "Nairrae yer sairch or open it up, whan the first set o results isna the richt ane.",
  "meta.change.title": "Chynge yer answers",
  "meta.change.desc":
    "Chynge whit ye telt us and we'll luik again ower ilka organisation.",
  "meta.startOver.desc": "Redd yer answers and begin the three quaistens again.",
  "meta.discover.title": "Discover organisations ower Scotland",
  "meta.discover.desc":
    "Brouse the organisations warkin wi weemen ower Scotland, bi the kind o support thay offer or bi whit ye need.",
  "meta.faq.desc":
    "Whit weemen speir afore thay uise this site, and whit organisations speir afore thay leet on it. Answert plain.",
  "meta.orgs.desc":
    "Leet whit ye rin on HWS Path Grid and reach the weemen it raelly suits. Free, checkit aince, and naebody pays tae kythe.",
  "meta.go.title": "Leavin tae apply",
  "meta.go.desc":
    "Takkin ye tae the organisation's ain page sae ye can apply wi thaim.",
  "meta.help.desc":
    "Gin ye canna find whit ye need, or somethin here luiks wrang, tell us. We'd raither hear frae ye nor hae ye gie up on it.",
  "meta.saved.desc": "Awthing ye hae saved, in ae place.",
  "meta.privacy.desc":
    "Whit HWS Path Grid collects whan ye uise the site, hou, and whit we'll niver dae wi it.",
  "meta.terms.desc":
    "The rules for uisin HWS Path Grid, for the weemen that sairch it and the organisations that leet on it.",
  "meta.talk.desc": "Buik a free caw wi somebody that can pynt ye the richt wey.",
  "meta.confirm.desc": "The hindmaist step afore yer caw is buikit.",
  "meta.booked.title": "Yer caw is buikit",
  "meta.booked.desc": "Whit happens neist.",
  "meta.account.desc":
    "Sign in, or mak an accoont, sae the support ye save is there neist time ye come back.",
  "meta.accountCode.desc": "We hae sent ye a sax digit code tae sign in wi.",
  "meta.profile.desc":
    "Add yer name sae we can address ye richt. Naethin here is needit.",
  "meta.settings.desc":
    "Yer mindins, yer language, and whit happens tae yer accoont.",
  "meta.emailChange.title": "Chynge yer email address",
  "meta.emailChange.desc":
    "Muive yer accoont, and awthing saved on it, tae anither address.",
  "meta.emailCode.title": "Check yer new inbox",
  "meta.emailCode.desc": "Pit in the code we sent tae yer new address.",

  "settings.savedList": "Ma saved leet",
  "settings.reminders": "Mindins",
  "settings.howFar": "Hou lang afore",
  "settings.nothingElse":
    "We send naethin else. Nae newsletter, nae suggestions.",
  "settings.neverName":
    "Mindin emails niver name the kind o support, in case somebody else reads yer inbox.",
  "settings.emailChanged":
    "Duin. Yer accoont is on this address nou, and yer saved leet cam wi it.",
  "reminders.beforeDeadline": "Afore a deadline",
  "change.heard": "Here's whit we heard",
  "change.weWillShow":
    "We'll shaw ye a smaw nummer o neist steps, strangest match first. Naebody pays tae kythe here.",
  "startover.confirm": "This redds yer answers. Stert again?",
  "startover.note":
    "Onythin ye hae saved bides whaur it is. Ainly whit ye telt us aboot whit ye need gangs.",
  "startover.yes": "Aye, stert again",
  "startover.keep": "Keep ma answers",
  "legal.onThisPage": "On this page",
  "legal.questions": "Quaistens aboot ony o this gang tae a body, no a form.",
  "legal.draftTitle": "This is a draft",
  "legal.draftBody":
    "The wirdin ablow describes exactly hou the platform warks the day, but it hasna yet been throu a final review. It's published sae ye can read it and haud us tae it, no acause it's feenished.",
  "legal.draftAsk":
    "Gin onythin here maitters tae a decision ye're makkin, speir at us.",
  "legal.pendingTitle": "This ane is still bein written",
  "legal.pendingBody":
    "The wirdin is wi us and will be published here afore the platform opens. Naethin on this page is in force till it is.",
  "legal.pendingAsk":
    "Gin ye want tae ken whit happens tae whit ye type in the meantime, speir at us and we'll tell ye plain.",
  "photos.aria": "Photies frae the Holistic Wellbeing Summit",
  "photos.credit": "The Holistic Wellbeing Summit",
  "testimonials.aria": "Whit weemen say",
  "testimonials.prev": "Previous quote",
  "testimonials.next": "Neist quote",
  "form.sendCode": "Send me a sign-in code",
  "form.yourCode": "Yer sign-in code",
  "form.codeWorks": "The code warks for 15 meenits.",
  "form.newCodeSent": "New code sent. It can tak a meenit tae come.",
  "form.sendNewCode": "Send a new code",
  "form.theCodeWeSent": "The code we sent",
  "form.newEmail": "New email address",
  "form.sendToNew": "Send a code tae the new address",
  "form.firstName": "First name",
  "form.lastName": "Last name",
  "form.phoneOptional": "Phone nummer (optional)",
  "form.phoneNote": "We ainly uise this gin ye speir at us tae caw ye back.",
  "form.continue": "Cairry on",
  "org.allOrgs": "Aw organisations",
  "org.checked": "Checkit bi HWS",
  "org.website": "Thair wabsite",
  "org.whatTheyDo": "Whit thay dae",
  "org.whatTheyOffer": "Whit thay offer",
  "org.whoTheyWorkWith": "Wha thay wark wi",
  "org.whoTheyCanHelp": "Wha thay can help",
  "org.whoTheyCannot": "Wha thay canna help",
  "org.when": "Whan",
  "org.howToReach": "Hou tae reach thaim",
  "org.zones": "Access Zones",
  "org.mainOne": "Thair main ane",
  "org.nothingRunning":
    "Thay hae naethin rinnin the nou. Tell us whit ye need and we'll luik ower awthing we hae.",
  "org.orTellUs": "Or tell us whit ye need and we'll match ye",

  "orgpage.heroTitle": "The weemen ye're for, wioot thaim haein tae find ye",
  "orgpage.heroBody":
    "Ye awreadies dae the wark. The bather is that a wumman has tae ken yer name tae find yer wabsite. Here she describes her situation, and we pit ye afore her acause ye're the richt answer, no acause she guessed.",
  "orgpage.haveAccount": "A hae an accoont awreadies",
  "orgpage.freeNote":
    "Free. Nae peyed placement, nae advertisin, and naebody pays tae kythe heicher.",
  "orgpage.whatYouGet": "Whit ye get",
  "orgpage.reach": "Reach, and a wey tae pruive it",
  "orgpage.gain1Title": "Weemen that were luikin for whit ye dae",
  "orgpage.gain1Body":
    "She describes her situation in her ain wirds. We match it again wha ye're set up for, whit ye offer, whaur ye wark and whit it costs. She comes awreadies kennin whether she qualifies.",
  "orgpage.gain2Title": "Nummers ye can tak tae a funder",
  "orgpage.gain2Body":
    "Hou mony weemen were sent tae yer ain site, hou mony read yer organisation page, and hou ilka thing ye postit did. No a vanity figure: the first ane coonts fowk that clickit throu tae ye.",
  "orgpage.gain3Title": "Checkit aince, no per leetin",
  "orgpage.gain3Body":
    "We verify ye again a public register or yer funder whan ye jyne. Efter that ye post whit ye like, whan ye like, wioot waitin on us.",
  "orgpage.gain4Title": "Fewer o the wrang speirins",
  "orgpage.gain4Body":
    "Ye say wha ye canna help, and we shaw it. Weemen rule thairsels oot afore thay contact ye, whilk is time back for whaever answers yer inbox.",
  "orgpage.fourSteps": "Fower steps, and ane o thaim is oors",
  "orgpage.step1Title": "Tell us wha ye are",
  "orgpage.step1Body":
    "A wheen quaistens aboot whit ye dae, wha ye serve and whaur. Ten meenits, and ye can stap haufwey and come back.",
  "orgpage.step2Title": "We check ye",
  "orgpage.step2Body":
    "Again a public register, or yer funder. Ae check, duin bi a body.",
  "orgpage.step3Title": "Post whit is open",
  "orgpage.step3Body":
    "A coorse, a grant, a drap-in, a mentorin scheme. Onythin wi a wey in for a wumman.",
  "orgpage.step4Title": "She finds it whan it fits",
  "orgpage.step4Body":
    "No acause she sairched yer name. Acause whit she described matched whit ye rin.",
  "orgpage.whereYouSit": "Whaur ye wad sit",
  "orgpage.zonesBody":
    "Ye wale yer ain, ae main ane and up tae twa ithers. Maist weemen need mair nor ane at a time and maist services ainly dae ane, whilk is the gap this exists tae close.",

  "legal.englishApplies":
    "The heidins on this page are in yer ain language. The wirdin itsel is in English, and the English is the version that applies.",
  "legal.askInYourLanguage": "Speir at us aboot ony pairt o it and we'll answer.",

  "reason.youToldUs": "ye telt us #",
  "reason.and": "and",
  "reason.youAskedAbout": "ye speired aboot #",
  "reason.runsIn": "this rins in #",
  "reason.isOnline": "this ane is online, sae whaur ye are disna maitter",
  "reason.acrossScotland": "this is open ower Scotland",
  "reason.closest": "it's ane o the closest things we hae tae whit ye described.",
  "reason.clauseJoin": ", and ",
};

const pl: Catalogue = {
  "language.label": "Język",
  "hero.title": "Pomagamy kobietom znaleźć wsparcie, którego potrzebują",
  "hero.body":
    "Powiedz nam własnymi słowami, czego potrzebujesz, a pokażemy Ci kilka kolejnych kroków wartych podjęcia. Trzy pytania, bez zakładania konta.",
  "hero.cta": "Znajdź rozwiązanie",
  "hero.browse": "Albo zobacz, kto tu jest",
  "why.eyebrow": "Jak to działa",
  "why.title":
    "Wiedzieć, że coś istnieje, to nie to samo, co wiedzieć, że jest dla ciebie",
  "hero.begin": "Od czego chcesz zacząć?",
  "hero.beginFind": "Znajdź swój następny krok",
  "hero.beginBrowse": "Zobacz, kto tu jest",
  "how.oneTitle": "Powiedz nam własnymi słowami",
  "how.oneBody":
    "Czego potrzebujesz, mniej więcej gdzie jesteś i cokolwiek o twojej sytuacji. Tylko trzy pytania.",
  "how.twoTitle": "Rozważamy to",
  "how.twoBody":
    "Pod kątem tego, czemu służy każda rzecz, dla kogo jest otwarta, gdzie działa i jak możesz z niej skorzystać. Wynik wspiera sztuczna inteligencja.",
  "how.threeTitle": "Dostajesz kilka realnych opcji",
  "how.threeBody":
    "Kilka propozycji, nie sto, każda z informacją, dlaczego pasuje, ile kosztuje, dla kogo jest i co dokładnie dzieje się po nawiązaniu kontaktu.",
  "how.forWomen": "Dla kobiet",
  "how.forOrgs": "Dla organizacji",
  "how.orgOneTitle": "Powiedzcie nam, kim jesteście",
  "how.orgOneBody":
    "Kilka pytań o to, czym się zajmujecie, komu chcecie oferować rozwiązania i gdzie. Rejestracja jest szybka.",
  "how.orgTwoTitle": "Sprawdzamy was raz",
  "how.orgTwoBody":
    "W publicznym rejestrze albo na podstawie waszego dorobku. Po tej weryfikacji publikujecie, co chcecie i kiedy chcecie.",
  "how.orgThreeTitle": "Znajdzie was, gdy będziecie pasować",
  "how.orgThreeBody":
    "Nie dlatego, że szukała waszej nazwy, ale dlatego, że to, co opisała, pasuje do rozwiązania, które oferujecie.",
  "origin.eyebrow": "Dlaczego to powstało",
  "origin.title": "Zaczęło się w takiej sali jak ta",
  "origin.bodyOne":
    "Holistic Wellbeing Summit gromadzi kobiety w jednej sali z ludźmi, którzy naprawdę mogą im pomóc. Ktoś kogoś przedstawia. Ktoś wymienia nazwę programu, o którym nigdy nie słyszałaś, i teraz już wiesz, że istnieje.",
  "origin.bodyTwo":
    "Potem sala pustoszeje. Organizacje wracają do swojej pracy, a kobiety nadal potrzebują wsparcia. Ta platforma to ta sama sala z otwartymi drzwiami, dla każdej kobiety, której na niej nie było.",
  "zones.eyebrow": "Strefy dostępu",
  "zones.title": "Każdy rodzaj wsparcia, jedna platforma",
  "zones.body":
    "Praca, pieniądze, nauka, zdrowie, przedsiębiorczość, głos w sprawach publicznych. Większość kobiet potrzebuje więcej niż jednej rzeczy naraz, a większość usług robi tylko jedną, i to jest luka, którą to wypełnia.",
  "zones.browse": "Przeglądaj wszystkich na platformie",
  "trust.checkedTitle": "Zweryfikowane treści",
  "trust.checkedBody":
    "Każda organizacja została zweryfikowana w publicznym rejestrze albo u swojego finansującego, zanim mogła cokolwiek opublikować. Każde ogłoszenie zawiera datę ostatniego potwierdzenia.",
  "trust.privateTitle": "Twoje dane są prywatne",
  "trust.privateBody":
    "Nie potrzebujesz konta, żeby szukać, czytać ani składać wniosków. To, co wpiszesz, służy do uszeregowania wyników i nie jest sprzedawane, przekazywane ani używane do budowania Twojego profilu.",
  "trust.paidTitle": "Żadnych treści sponsorowanych",
  "trust.paidBody":
    "Nie ma płatnych miejsc ani reklam. Wyniki są uporządkowane według tego, jak dobrze pasują do tego, co nam powiedziałaś, a każde ogłoszenie mówi, dlaczego zostało dopasowane.",
  "orgs.title": "Prowadzisz coś, o czym kobiety powinny wiedzieć?",
  "orgs.body":
    "Dodaj to tutaj, a dotrze do kobiet, którym faktycznie odpowiada, zamiast do przypadkowych osób, które trafią na Twoją stronę. Bezpłatnie, i sprawdzamy Cię raz, a nie każde ogłoszenie osobno.",
  "orgs.cta": "Poznaj te kobiety",

  "flow.back": "Wstecz",
  "flow.questionOf": "Pytanie # z 3",
  "flow.next": "Dalej",
  "flow.changeAnswers": "Zmień odpowiedzi",
  "flow.searchCredit": "Wyszukiwanie wspierane przez AI",
  "flow.orgPrompt":
    "Czy jesteś organizacją lub osobą oferującą rozwiązania dla kobiet?",
  "flow.orgLink": "Dla organizacji",
  "q1.title": "W czym możemy pomóc?",
  "q1.subline": "Własnymi słowami. Nie ma złej odpowiedzi.",
  "q1.placeholder": "np. powrót do pracy po opiece nad mamą",
  "q1.blank": "Napisz kilka słów, żebyśmy wiedzieli, czego szukać.",
  "q1.searchOn": "Będziemy szukać na podstawie tego, co napisałaś.",
  "q1.suggestions": "Podpowiedzi",
  "q2.title": "Gdzie mamy szukać wsparcia?",
  "q2.subline": "Miasto, kod pocztowy albo twoja gmina.",
  "q2.placeholder": "np. EH48",
  "q2.unknown":
    "Nie znamy tego miejsca. Spróbuj pobliskiego miasta albo poszukaj w całej Szkocji.",
  "q2.or": "Albo",
  "q2.anywhere": "Gdziekolwiek w Szkocji",
  "q2.onlineOnly": "Tylko wsparcie online",
  "q2.hint": "Wpisz miejsce albo wybierz jedną z dwóch opcji powyżej.",
  "q3.title": "Co najlepiej opisuje twoją sytuację?",
  "q3.subline":
    "To pomaga nam znaleźć wsparcie, które może ci przysługiwać. Możesz wybrać więcej niż jedno.",
  "q3.hint": "Zaznacz wszystko, co pasuje, albo wybierz Wolę nie mówić.",
  "q3.privacy":
    "Nie przechowujemy twoich odpowiedzi ani nie przekazujemy ich organizacjom, które ci pokazujemy.",
  "results.title": "Kolejne kroki dla ciebie",
  "results.refine": "Zawęź lub poszerz",
  "results.ordered":
    "Uporządkowane według tego, jak pasują do tego, co nam powiedziałaś. Nikt nie płaci za to, by się tu znaleźć.",
  "results.orgsOnly":
    "Nic otwartego nie pasuje na tyle blisko, by ci to pokazać, ale te organizacje zajmują się tym, o co pytałaś.",
  "results.thatsAll":
    "To wszystko, co pasuje blisko. Możesz poszerzyć wyszukiwanie albo zmienić to, co nam powiedziałaś.",
  "results.showScotland": "Pokaż wsparcie w całej Szkocji",
  "results.changeMine": "Zmień moje odpowiedzi",
  "results.startOver": "Zacznij od nowa",
  "card.bestMatch": "Najlepsze dopasowanie",
  "card.save": "Zapisz",
  "card.saved": "Zapisane",
  "card.saveAria": "Zapisz #",
  "card.savedAria": "Zapisane: #",
  "card.whoFor": "Dla kogo",
  "card.whatToExpect": "Czego się spodziewać",
  "card.whyMatched": "Dlaczego to do ciebie pasuje:",
  "card.learnMore": "Dowiedz się więcej",
  "card.missing": "Jeszcze nieuzupełnione",
  "card.closes": "Zamyka się #",
  "card.closed": "Zamknięte #",
  "card.verified": "Zweryfikowane",
  "card.verifiedOn": "Zweryfikowane · ostatnia aktualizacja #",
  "nomatch.title": "Na razie nie znaleźliśmy dla ciebie niczego",
  "nomatch.body":
    "To nie znaczy, że nie ma pomocy. To znaczy, że dziś nie mamy czegoś, co pasuje do tego, o co prosiłaś.",
  "nomatch.tryFirst": "Spróbuj najpierw tego",
  "nomatch.widen": "Poszerz na całą Szkocję",
  "nomatch.onlineTitle": "Tylko wsparcie online",
  "nomatch.changeTitle": "Zmień to, o co prosiłaś",
  "nomatch.changeNote":
    "Inne słowa czasem znajdują co innego. Warto spróbować jeszcze raz.",
  "nomatch.startTitle": "Zacznij od nowa",
  "nomatch.startNote": "Wyczyść wszystko i zacznij od pierwszego pytania.",
  "orgsAnswer.title": "Ci ludzie też mogą pomóc",
  "orgsAnswer.body":
    "Organizacje zajmujące się tym, o co pytałaś. Mogą nie mieć teraz nic otwartego, ale możesz zwrócić się do nich bezpośrednio.",
  "talkcta.title": "Chcesz z kimś porozmawiać?",
  "talkcta.body":
    "Z kimś, kto wie, co jest dostępne, i może wskazać ci właściwy kierunek. Wybierz dogodną porę. Nic nie kosztuje i nie potrzebujesz konta.",
  "talkcta.cta": "Zobacz dostępne terminy",
  "talkcta.note":
    "Będziemy już wiedzieć, czego szukałaś, więc nie będziesz musiała tłumaczyć tego od nowa.",
  "talkcta.today": "Potrzebujesz pomocy dzisiaj? Napisz do nas teraz.",
  "refine.back": "Wróć do wyników",
  "refine.title": "Zawęź lub poszerz",
  "refine.howFar": "Jak daleko szukać",
  "refine.onlyShow": "Pokaż tylko",
  "refine.nothingMatches": "Nic nie pasuje przy tych filtrach.",
  "refine.tryRemoving": "Spróbuj usunąć „#”.",
  "refine.inScope": "Szukamy w: #.",
  "refine.tryWiden": "Spróbuj poszerzyć zasięg wyszukiwania.",
  "refine.update": "Zaktualizuj wyszukiwanie",
  "scope.myArea": "Moja okolica",
  "scope.nearby": "Pobliskie okolice",
  "scope.allScotland": "Cała Szkocja",
  "scope.online": "Tylko online",
  "filter.free": "Bezpłatne",
  "filter.openNow": "Otwarte teraz",
  "filter.noForms": "Bez formularzy",
  "saved.title": "Twoja lista zapisanych",
  "saved.titleNamed": "Lista zapisanych: #",
  "saved.emptyBody":
    "Kiedy znajdziesz coś, do czego warto wrócić, naciśnij Zapisz. Będzie tutaj, a my powiemy ci, zanim się zamknie.",
  "saved.emptyCta": "Znajdź wsparcie",
  "saved.soonest": "Najpierw to, co zamyka się najwcześniej.",
  "saved.seeWhatElse": "Zobacz, co jeszcze",
  "saved.findSomethingElse": "Znajdź coś innego",
  "saved.settings": "Przypomnienia i ustawienia konta",
  "saved.noClosingDate": "Bez daty zamknięcia",
  "saved.noLongerRunning": "Już nie działa",
  "service.backToResults": "Wróć do swoich wyników",
  "service.cost": "Koszt",
  "service.where": "Gdzie",
  "service.howToTakePart": "Jak wziąć udział",
  "service.continueTo": "Przejdź do #",
  "service.closedTitle": "To się już zakończyło",
  "service.closedBody":
    "Może się powtórzyć. # może ci powiedzieć, kiedy ruszy następna edycja, a teraz może być dostępne coś podobnego.",
  "service.askNext": "Zapytaj, kiedy ruszy następna edycja",
  "service.findSimilar": "Znajdź podobne wsparcie",
  "service.somethingWrong": "Coś się tu nie zgadza?",
  "discover.title": "Kto pracuje na rzecz kobiet w Szkocji",
  "discover.lede":
    "Każda organizacja tutaj została przez nas sprawdzona. Wyszukaj po nazwie albo przeglądaj według tego, czego potrzebujesz.",
  "discover.searchLabel":
    "Szukaj organizacji po nazwie albo po tym, czym się zajmuje",
  "discover.searchButton": "Szukaj organizacji",
  "discover.orAnswer":
    "Albo odpowiedz na trzy pytania, a my dopasujemy coś dla ciebie",
  "discover.byZone": "Przeglądaj według Strefy Dostępu",
  "discover.byZoneNote":
    "Rodzaje wsparcia, wokół których zbudowana jest platforma. Każdy prowadzi do organizacji, które się nim zajmują.",
  "discover.nobodyYet": "Jeszcze nikogo tu nie ma",
  "discover.byNeed": "Przeglądaj według tego, czego potrzebujesz",
  "discover.byNeedNote": "Powiedz to tak, jak powiedziałabyś na głos.",
  "zone.allZones": "Wszystkie Strefy Dostępu",
  "zone.eyebrow": "Strefa Dostępu",
  "zone.empty":
    "Nikogo jeszcze nie ma w tej strefie. To nie znaczy, że nie ma pomocy, więc powiedz nam, czego potrzebujesz, a poszukamy we wszystkim, co mamy.",
  "zone.tellUs": "Powiedz nam, czego potrzebujesz",
  "zone.alsoWorks": "Działa też w tej strefie",
  "need.everything": "Wszystko, co możesz przeglądać",
  "need.eyebrow": "Czego potrzebujesz",
  "discover.eyebrow": "Odkrywaj",
  "discover.searchAria": "Szukaj",
  "discover.clear": "Wyczyść",
  "discover.nothingMatches": "Nic nie pasuje do „#”",
  "discover.forQuery": "dla „#”",
  "discover.searchNote":
    "To pole przeszukuje tylko nazwy i opisy. Jeśli próbujesz opisać swoją sytuację, a nie znaleźć konkretną organizację, trzy pytania poradzą sobie znacznie lepiej.",
  "discover.tryQuestions": "Spróbuj trzech pytań.",
  "need.emptyShort": "Nikogo jeszcze tu nie przypisano.",
  "need.workOnThis": "Te, które mają coś otwartego, są pierwsze.",
  "need.empty":
    "Nikogo jeszcze tu nie przypisano. To nie znaczy, że nie ma pomocy, więc powiedz nam, czego potrzebujesz, a poszukamy we wszystkim, co mamy.",
  "talk.title": "Porozmawiaj z kimś",
  "talk.pickTime": "Wybierz dogodną porę",
  "talk.pickBody":
    "Zadzwonimy do ciebie. Trwa to około pół godziny, nic nie kosztuje i nie potrzebujesz konta.",
  "talk.noneTitle": "Brak wolnych terminów w najbliższych tygodniach",
  "talk.noneBody":
    "To rzadkie i nie znaczy, że nikt nie może pomóc. Napisz do nas, a znajdziemy termin spoza tego kalendarza.",
  "talk.otherWays": "Inne sposoby kontaktu",
  "talk.ukTime": "Wszystkie godziny są czasem brytyjskim.",
  "talk.todayInstead":
    "Potrzebujesz pomocy dzisiaj, a nie w umówionym terminie? Są szybsze sposoby kontaktu.",
  "booking.name": "Twoje imię",
  "booking.nameNote": "Jak chcesz, żebyśmy się do ciebie zwracali",
  "booking.email": "Adres e-mail",
  "booking.emailNote":
    "Wyślemy tu termin razem z plikiem kalendarza, który możesz dodać jednym dotknięciem.",
  "booking.phone": "Numer telefonu",
  "booking.phoneNote": "Tylko jeśli wolisz, żebyśmy zadzwonili, zamiast napisać.",
  "booking.notes": "Coś, co powinniśmy wiedzieć wcześniej",
  "booking.notesNote":
    "Opcjonalne. Przeczyta to tylko osoba, która do ciebie zadzwoni.",
  "booking.optional": "Opcjonalne",
  "booking.submit": "Zarezerwuj ten termin",
  "confirm.title": "Potwierdź rozmowę",
  "confirm.pickDifferent": "Wybierz inny termin",
  "confirm.privacy":
    "Twojego imienia i adresu e-mail używamy wyłącznie po to, żeby zadzwonić. Nie zakładamy konta i nie dopisujemy cię do żadnej listy.",
  "booked.title": "Zarezerwowane",
  "booked.sent":
    "Wysłaliśmy termin na twoją skrzynkę razem z plikiem kalendarza, który możesz dodać do telefonu jednym dotknięciem. Może to potrwać minutę.",
  "booked.reference": "Twój numer zgłoszenia",
  "booked.prepare":
    "Nie musisz się przygotowywać. Osoba, która zadzwoni, przeczyta wcześniej, czego szukałaś, więc nie zaczniesz od zera.",
  "booked.move":
    "Jeśli termin przestanie ci pasować, odpisz na tego e-maila, a przełożymy rozmowę.",
  "booked.keepLooking": "Szukaj dalej w międzyczasie",
  "booked.backToStart": "Wróć na początek",
  "account.title": "Dostęp do twojego konta",
  "account.saveIt": "Zaloguj się, żeby to zapisać",
  "account.saveBody":
    "Zapisywanie to jedyna rzecz, która wymaga tu konta, dzięki czemu twoja lista będzie na miejscu następnym razem. Zachowaliśmy to, co właśnie zapisałaś, i będzie czekać, gdy się zalogujesz.",
  "account.otp":
    "Wyślemy ci jednorazowy kod do zalogowania. Żadnego hasła do zapamiętania.",
  "account.emailPrivate": "Twój adres e-mail jest prywatny i bezpieczny.",
  "account.carryOn": "Przejdź dalej bez zapisywania",
  "account.signInHere": "Zaloguj się tutaj",
  "code.title": "Sprawdź pocztę",
  "code.sentTo": "Wysłaliśmy kod logowania na:",
  "code.justSearch": "Szukaj dalej bez logowania",
  "code.enterBelow": "Wpisz go poniżej i gotowe.",
  "code.arrive":
    "Powinien dotrzeć w ciągu minuty. Jeśli nie dotarł, sprawdź folder ze spamem.",
  "code.different": "Użyj innego adresu",
  "profile.title": "Uzupełnij swój profil",
  "profile.subline":
    "Tylko imię, żebyśmy mogli się do ciebie zwracać. Nic tu nie jest wymagane.",

  "nav.home": "Strona główna",
  "nav.discover": "Odkrywaj",
  "nav.forOrgs": "Dla organizacji",
  "nav.faq": "FAQ",
  "nav.signIn": "Zaloguj się",
  "nav.signOut": "Wyloguj się",
  "nav.saved": "Zapisane",
  "nav.settings": "Ustawienia",
  "nav.remindersSettings": "Przypomnienia i ustawienia",
  "nav.sections": "Sekcje",
  "nav.menu": "menu",
  "nav.homeAria": "HWS Pathgrid, strona główna",
  "nav.findNext": "Znajdź swój kolejny krok",
  "footer.label": "Stopka",
  "footer.tagline":
    "Łączymy kobiety z możliwościami — poza jedną salą, jednym kodem pocztowym i jednym dniem.",
  "footer.free":
    "Bezpłatne, a konto nie jest potrzebne, żeby szukać, czytać ani się zgłaszać.",
  "footer.forYou": "Dla ciebie",
  "footer.find": "Znajdź rozwiązanie",
  "footer.discover": "Odkrywaj organizacje",
  "footer.faq": "Najczęstsze pytania",
  "footer.help": "Pomoc",
  "footer.forOrgs": "Dla organizacji",
  "footer.meetWomen": "Poznaj kobiety",
  "footer.whyList": "Dlaczego warto się zgłosić",
  "footer.whoListed": "Kto już się zgłosił",
  "footer.legal": "Informacje prawne",
  "footer.privacy": "Polityka prywatności",
  "footer.terms": "Warunki korzystania",
  "footer.talk": "Porozmawiaj z człowiekiem",
  "cookie.region": "O plikach cookie",
  "cookie.claim": "Używamy kilku plików cookie i żaden z nich cię nie śledzi.",
  "cookie.detail":
    "Utrzymują twoje zalogowanie i pamiętają twój język. Nic nie jest śledzone ani sprzedawane.",
  "cookie.more": "Więcej w polityce prywatności",
  "cookie.okay": "W porz\u0105dku",
  "loading.page": "Wczytywanie strony",
  "loading.organisations": "Wczytywanie organizacji",
  "loading.organisation": "Wczytywanie organizacji",
  "loading.saved": "Wczytywanie zapisanej listy",
  "loading.listing": "Wczytywanie tej oferty",

  "faq.title": "Najczęstsze pytania",
  "faq.lede":
    "HWS Path Grid łączy kobiety w całej Szkocji ze wsparciem, które naprawdę do nich pasuje, a organizacjom daje jedno miejsce, w którym można je znaleźć.",
  "faq.notHere":
    "Jeśli nie ma tu odpowiedzi, której szukasz, odpowiadamy na każdą wiadomość.",
  "faq.talkPerson": "Porozmawiaj z człowiekiem.",
  "faq.forWomen": "Jeśli szukasz wsparcia",
  "faq.forOrgs": "Jeśli jesteś organizacją",

  "meta.home.title": "Znajdź wsparcie dla kobiet w Szkocji",
  "meta.home.desc":
    "Powiedz nam własnymi słowami, czego potrzebujesz, a pokażemy ci kilka kolejnych kroków wartych zrobienia. Każda organizacja jest sprawdzona. Konto niepotrzebne.",
  "meta.find.desc":
    "Powiedz nam własnymi słowami, czego potrzebujesz. Trzy pytania, bez konta, a my przeszukamy każdą sprawdzoną przez nas organizację w Szkocji.",
  "meta.where.desc":
    "Powiedz nam, gdzie jesteś, żebyśmy mogli pokazać najpierw to, co blisko ciebie, nie pomijając tego, co otwarte dla wszystkich.",
  "meta.situation.desc":
    "Zaznacz wszystko, co pasuje. To zmienia, co ci pokażemy.",
  "meta.results.desc":
    "Wsparcie, które dla ciebie znaleźliśmy, z powodem, dla którego każde z nich tu jest.",
  "meta.refine.desc":
    "Zawęź wyszukiwanie albo je poszerz, gdy pierwszy zestaw wyników nie jest tym właściwym.",
  "meta.change.title": "Zmień swoje odpowiedzi",
  "meta.change.desc":
    "Zmień to, co nam powiedziałaś, a my jeszcze raz przejrzymy wszystkie organizacje.",
  "meta.startOver.desc": "Wyczyść odpowiedzi i zacznij trzy pytania od nowa.",
  "meta.discover.title": "Odkrywaj organizacje w całej Szkocji",
  "meta.discover.desc":
    "Przeglądaj organizacje pracujące z kobietami w całej Szkocji, według rodzaju wsparcia albo według tego, czego potrzebujesz.",
  "meta.faq.desc":
    "O co pytają kobiety, zanim skorzystają z tej strony, i o co pytają organizacje, zanim się na niej zgłoszą. Odpowiedzi bez owijania.",
  "meta.orgs.desc":
    "Zgłoś to, co prowadzisz, na HWS Path Grid i dotrzyj do kobiet, którym to naprawdę pasuje. Bezpłatnie, sprawdzane raz, i nikt nie płaci za obecność.",
  "meta.go.title": "Przechodzisz, żeby się zgłosić",
  "meta.go.desc":
    "Przenosimy cię na stronę samej organizacji, żebyś mogła zgłosić się u niej.",
  "meta.help.desc":
    "Jeśli nie możesz znaleźć tego, czego potrzebujesz, albo coś tu wygląda źle, powiedz nam. Wolimy usłyszeć od ciebie, niż żebyś z tego zrezygnowała.",
  "meta.saved.desc": "Wszystko, co zapisałaś, w jednym miejscu.",
  "meta.privacy.desc":
    "Co HWS Path Grid zbiera, kiedy korzystasz ze strony, dlaczego i czego nigdy z tym nie zrobimy.",
  "meta.terms.desc":
    "Zasady korzystania z HWS Path Grid, dla kobiet, które tu szukają, i organizacji, które się zgłaszają.",
  "meta.talk.desc":
    "Umów bezpłatną rozmowę z kimś, kto wskaże ci właściwy kierunek.",
  "meta.confirm.desc": "Ostatni krok przed zarezerwowaniem rozmowy.",
  "meta.booked.title": "Twoja rozmowa jest zarezerwowana",
  "meta.booked.desc": "Co dalej.",
  "meta.account.desc":
    "Zaloguj się albo załóż konto, żeby zapisane wsparcie było na miejscu, gdy wrócisz.",
  "meta.accountCode.desc": "Wysłaliśmy ci sześciocyfrowy kod do zalogowania.",
  "meta.profile.desc":
    "Dodaj imię, żebyśmy mogli zwracać się do ciebie właściwie. Nic tu nie jest wymagane.",
  "meta.settings.desc":
    "Twoje przypomnienia, twój język i to, co dzieje się z twoim kontem.",
  "meta.emailChange.title": "Zmień adres e-mail",
  "meta.emailChange.desc":
    "Przenieś konto, razem ze wszystkim, co na nim zapisane, na inny adres.",
  "meta.emailCode.title": "Sprawdź nową skrzynkę",
  "meta.emailCode.desc": "Wpisz kod, który wysłaliśmy na twój nowy adres.",

  "settings.savedList": "Moja zapisana lista",
  "settings.reminders": "Przypomnienia",
  "settings.howFar": "Z jakim wyprzedzeniem",
  "settings.nothingElse":
    "Nie wysyłamy nic więcej. Żadnego newslettera, żadnych propozycji.",
  "settings.neverName":
    "E-maile z przypomnieniem nigdy nie nazywają rodzaju wsparcia, na wypadek gdyby ktoś inny czytał twoją skrzynkę.",
  "settings.emailChanged":
    "Gotowe. Twoje konto jest teraz na tym adresie, a zapisana lista przeszła razem z nim.",
  "reminders.beforeDeadline": "Przed terminem",
  "change.heard": "Oto, co usłyszeliśmy",
  "change.weWillShow":
    "Pokażemy ci niewielką liczbę kolejnych kroków, od najlepiej pasującego. Nikt nie płaci za to, by się tu znaleźć.",
  "startover.confirm": "To wyczyści twoje odpowiedzi. Zacząć od nowa?",
  "startover.note":
    "Wszystko, co zapisałaś, zostaje na miejscu. Znika tylko to, co nam powiedziałaś o swoich potrzebach.",
  "startover.yes": "Tak, zacznij od nowa",
  "startover.keep": "Zachowaj moje odpowiedzi",
  "legal.onThisPage": "Na tej stronie",
  "legal.questions":
    "Pytania o cokolwiek z tego trafiają do człowieka, nie do formularza.",
  "legal.draftTitle": "To jest wersja robocza",
  "legal.draftBody":
    "Poniższy tekst opisuje dokładnie to, jak platforma działa dzisiaj, ale nie przeszedł jeszcze końcowej weryfikacji. Publikujemy go, żebyś mogła go przeczytać i trzymać nas za słowo, a nie dlatego, że jest skończony.",
  "legal.draftAsk":
    "Jeśli cokolwiek tutaj ma znaczenie dla decyzji, którą podejmujesz, zapytaj nas.",
  "legal.pendingTitle": "Ten dokument jest jeszcze pisany",
  "legal.pendingBody":
    "Tekst jest u nas i zostanie tu opublikowany, zanim platforma ruszy. Nic na tej stronie nie obowiązuje, dopóki to nie nastąpi.",
  "legal.pendingAsk":
    "Jeśli chcesz w międzyczasie wiedzieć, co dzieje się z tym, co wpisujesz, zapytaj nas, a powiemy ci wprost.",
  "photos.aria": "Zdjęcia z Holistic Wellbeing Summit",
  "photos.credit": "Holistic Wellbeing Summit",
  "testimonials.aria": "Co mówią kobiety",
  "testimonials.prev": "Poprzedni cytat",
  "testimonials.next": "Następny cytat",
  "form.sendCode": "Wyślij mi kod do logowania",
  "form.yourCode": "Twój kod do logowania",
  "form.codeWorks": "Kod działa przez 15 minut.",
  "form.newCodeSent": "Wysłano nowy kod. Może dotrzeć w ciągu minuty.",
  "form.sendNewCode": "Wyślij nowy kod",
  "form.theCodeWeSent": "Kod, który wysłaliśmy",
  "form.newEmail": "Nowy adres e-mail",
  "form.sendToNew": "Wyślij kod na nowy adres",
  "form.firstName": "Imię",
  "form.lastName": "Nazwisko",
  "form.phoneOptional": "Numer telefonu (opcjonalnie)",
  "form.phoneNote": "Używamy go tylko wtedy, gdy poprosisz, żebyśmy oddzwonili.",
  "form.continue": "Dalej",
  "org.allOrgs": "Wszystkie organizacje",
  "org.checked": "Sprawdzone przez HWS",
  "org.website": "Ich strona",
  "org.whatTheyDo": "Czym się zajmują",
  "org.whatTheyOffer": "Co oferują",
  "org.whoTheyWorkWith": "Z kim pracują",
  "org.whoTheyCanHelp": "Komu mogą pomóc",
  "org.whoTheyCannot": "Komu nie mogą pomóc",
  "org.when": "Kiedy",
  "org.howToReach": "Jak się z nimi skontaktować",
  "org.zones": "Strefy Dostępu",
  "org.mainOne": "Ich główna",
  "org.nothingRunning":
    "W tej chwili nic nie prowadzą. Powiedz nam, czego potrzebujesz, a poszukamy we wszystkim, co mamy.",
  "org.orTellUs":
    "Albo powiedz nam, czego potrzebujesz, a my dopasujemy coś dla ciebie",

  "orgpage.heroTitle":
    "Kobiety, dla których jesteście, bez tego, żeby musiały was znaleźć",
  "orgpage.heroBody":
    "Pracę już wykonujecie. Problem w tym, że kobieta musi znać waszą nazwę, żeby trafić na waszą stronę. Tutaj opisuje swoją sytuację, a my stawiamy was przed nią, bo jesteście właściwą odpowiedzią, nie dlatego, że zgadła.",
  "orgpage.haveAccount": "Mam już konto",
  "orgpage.freeNote":
    "Bezpłatnie. Żadnych płatnych miejsc, żadnych reklam, i nikt nie płaci za wyższą pozycję.",
  "orgpage.whatYouGet": "Co otrzymujecie",
  "orgpage.reach": "Zasięg i sposób, żeby to udowodnić",
  "orgpage.gain1Title": "Kobiety, które szukały właśnie tego, co robicie",
  "orgpage.gain1Body":
    "Opisuje swoją sytuację własnymi słowami. Zestawiamy to z tym, dla kogo jesteście, co oferujecie, gdzie działacie i ile to kosztuje. Przychodzi już wiedząc, czy się kwalifikuje.",
  "orgpage.gain2Title": "Liczby, które możecie pokazać finansującemu",
  "orgpage.gain2Body":
    "Ile kobiet trafiło na waszą własną stronę, ile przeczytało stronę organizacji i jak poradziło sobie każde zgłoszenie. Nie wskaźnik na pokaz: pierwszy z nich liczy osoby, które kliknęły i przeszły do was.",
  "orgpage.gain3Title": "Sprawdzenie raz, nie przy każdym wpisie",
  "orgpage.gain3Body":
    "Weryfikujemy was w publicznym rejestrze albo u finansującego, kiedy dołączacie. Potem publikujecie, co chcecie i kiedy chcecie, bez czekania na nas.",
  "orgpage.gain4Title": "Mniej niewłaściwych zapytań",
  "orgpage.gain4Body":
    "Mówicie, komu nie możecie pomóc, a my to pokazujemy. Kobiety same się wykluczają, zanim do was napiszą, a to czas odzyskany przez tego, kto odbiera waszą pocztę.",
  "orgpage.fourSteps": "Cztery kroki, a jeden z nich jest nasz",
  "orgpage.step1Title": "Powiedzcie nam, kim jesteście",
  "orgpage.step1Body":
    "Kilka pytań o to, czym się zajmujecie, komu służycie i gdzie. Dziesięć minut, a można przerwać w połowie i wrócić.",
  "orgpage.step2Title": "Sprawdzamy was",
  "orgpage.step2Body":
    "W publicznym rejestrze albo u waszego finansującego. Jedno sprawdzenie, wykonane przez człowieka.",
  "orgpage.step3Title": "Publikujecie to, co otwarte",
  "orgpage.step3Body":
    "Kurs, dotacja, dyżur otwarty, program mentoringowy. Cokolwiek, do czego kobieta ma wejście.",
  "orgpage.step4Title": "Ona znajduje to, gdy pasuje",
  "orgpage.step4Body":
    "Nie dlatego, że szukała waszej nazwy. Dlatego, że to, co opisała, pasowało do tego, co prowadzicie.",
  "orgpage.whereYouSit": "Gdzie byście się znaleźli",
  "orgpage.zonesBody":
    "Wybieracie sami, jedną główną i do dwóch kolejnych. Większość kobiet potrzebuje więcej niż jednej naraz, a większość usług robi tylko jedną, i to jest luka, którą to zamyka.",

  "legal.englishApplies":
    "Nagłówki na tej stronie są w twoim języku. Sam tekst jest po angielsku i to wersja angielska obowiązuje.",
  "legal.askInYourLanguage": "Zapytaj nas o dowolny jego fragment, a odpowiemy.",

  "reason.youToldUs": "powiedziałaś nam, że #",
  "reason.and": "i",
  "reason.youAskedAbout": "pytałaś o #",
  "reason.runsIn": "to odbywa się w: #",
  "reason.isOnline": "to jest online, więc nie ma znaczenia, gdzie jesteś",
  "reason.acrossScotland": "to jest otwarte w całej Szkocji",
  "reason.closest":
    "to jedna z najbliższych rzeczy, jakie mamy, do tego, co opisałaś.",
  "reason.clauseJoin": ", oraz ",
};

const uk: Catalogue = {
  "language.label": "Мова",
  "hero.title": "Допомагаємо жінкам отримати підтримку, якої вони потребують",
  "hero.body":
    "Розкажіть своїми словами, що вам потрібно, і ми покажемо кілька наступних кроків, які варто зробити. Три питання, обліковий запис не потрібен.",
  "hero.cta": "Знайти рішення",
  "hero.browse": "Або подивіться, хто тут є",
  "why.eyebrow": "Як це працює",
  "why.title":
    "Знати, що щось існує, — не те саме, що знати, що воно доступне вам",
  "hero.begin": "З чого хочете почати?",
  "hero.beginFind": "Знайдіть наступний крок",
  "hero.beginBrowse": "Подивіться, хто тут є",
  "how.oneTitle": "Розкажіть своїми словами",
  "how.oneBody":
    "Що вам потрібно, приблизно де ви є, і будь-що про вашу ситуацію. Лише три запитання.",
  "how.twoTitle": "Ми це зважуємо",
  "how.twoBody":
    "За тим, для чого призначена кожна річ, кому вона доступна, де діє і як до неї звернутися. Результат працює на основі ШІ.",
  "how.threeTitle": "Ви отримуєте кілька справжніх варіантів",
  "how.threeBody":
    "Кілька варіантів, не сотня, кожен із поясненням, чому він підійшов, скільки коштує, для кого він і що саме буде після звернення.",
  "how.forWomen": "Для жінок",
  "how.forOrgs": "Для організацій",
  "how.orgOneTitle": "Розкажіть, хто ви",
  "how.orgOneBody":
    "Кілька запитань про те, чим ви займаєтеся, кому хочете пропонувати рішення і де. Реєстрація швидка.",
  "how.orgTwoTitle": "Ми перевіряємо вас один раз",
  "how.orgTwoBody":
    "За публічним реєстром або на основі вашого досвіду. Після цієї перевірки ви публікуєте що хочете й коли хочете.",
  "how.orgThreeTitle": "Вона знайде вас, коли ви підійдете",
  "how.orgThreeBody":
    "Не тому, що шукала вашу назву, а тому, що описане нею збіглося з рішенням, яке ви пропонуєте.",
  "origin.eyebrow": "Навіщо це існує",
  "origin.title": "Усе почалося в такій самій залі",
  "origin.bodyOne":
    "Holistic Wellbeing Summit збирає жінок в одній залі з людьми, які справді можуть допомогти. Хтось когось знайомить. Хтось називає програму, про яку ви ніколи не чули, і тепер ви знаєте, що вона є.",
  "origin.bodyTwo":
    "Потім зала порожніє. Організації повертаються до своєї роботи, а жінкам підтримка потрібна й далі. Ця платформа і є та сама зала з відчиненими дверима, для кожної жінки, якої там не було.",
  "zones.eyebrow": "Зони доступу",
  "zones.title": "Кожен вид підтримки, одна платформа",
  "zones.body":
    "Робота, гроші, навчання, здоров’я, підприємництво, право голосу. Більшості жінок потрібно більше ніж одне водночас, а більшість служб робить лише щось одне, саме цю прогалину це й закриває.",
  "zones.browse": "Переглянути всіх на платформі",
  "trust.checkedTitle": "Перевірений вміст",
  "trust.checkedBody":
    "Кожну організацію перевірено за публічним реєстром або через її донора, перш ніж вона змогла щось опублікувати. У кожній пропозиції вказано дату останнього підтвердження.",
  "trust.privateTitle": "Інформація залишається приватною",
  "trust.privateBody":
    "Обліковий запис не потрібен, щоб шукати, читати чи подавати заявку. Написане вами використовується лише для впорядкування результатів і не продається, не передається і не використовується для створення вашого профілю.",
  "trust.paidTitle": "Жодного спонсорованого вмісту",
  "trust.paidBody":
    "Немає платного розміщення й реклами. Результати впорядковані за тим, наскільки вони відповідають сказаному вами, і кожна пропозиція пояснює, чому вона підійшла.",
  "orgs.title": "Ви керуєте чимось, про що жінкам варто знати?",
  "orgs.body":
    "Додайте це сюди, і воно дійде до жінок, яким справді підходить, а не до випадкових відвідувачів вашого сайту. Безкоштовно, і ми перевіряємо вас один раз, а не кожну пропозицію окремо.",
  "orgs.cta": "Познайомтеся з жінками",

  "flow.back": "Назад",
  "flow.questionOf": "Питання # з 3",
  "flow.next": "Далі",
  "flow.changeAnswers": "Змінити відповіді",
  "flow.searchCredit": "Пошук за підтримки ШІ",
  "flow.orgPrompt": "Ви організація або особа, яка пропонує рішення для жінок?",
  "flow.orgLink": "Для організацій",
  "q1.title": "З чим вам потрібна допомога?",
  "q1.subline": "Своїми словами. Неправильної відповіді не буває.",
  "q1.placeholder": "напр. повернення до роботи після догляду за мамою",
  "q1.blank": "Напишіть кілька слів, щоб ми знали, де шукати.",
  "q1.searchOn": "Шукатимемо за тим, що ви написали.",
  "q1.suggestions": "Підказки",
  "q2.title": "Де нам шукати підтримку?",
  "q2.subline": "Місто, поштовий індекс або ваша громада.",
  "q2.placeholder": "напр. EH48",
  "q2.unknown":
    "Ми не знаємо такого місця. Спробуйте сусіднє місто або шукайте по всій Шотландії.",
  "q2.or": "Або",
  "q2.anywhere": "Будь-де в Шотландії",
  "q2.onlineOnly": "Лише підтримка онлайн",
  "q2.hint": "Введіть місце або оберіть один із двох варіантів вище.",
  "q3.title": "Що найкраще описує вашу ситуацію?",
  "q3.subline":
    "Це допомагає нам помітити підтримку, на яку ви можете мати право. Можна обрати кілька.",
  "q3.hint": "Оберіть усе, що підходить, або натисніть Волію не казати.",
  "q3.privacy":
    "Ми не зберігаємо ваші відповіді й не передаємо їх організаціям, які вам показуємо.",
  "results.title": "Наступні кроки для вас",
  "results.refine": "Звузити або розширити",
  "results.ordered":
    "Упорядковано за тим, наскільки це відповідає тому, що ви нам сказали. Ніхто не платить за появу тут.",
  "results.orgsOnly":
    "Нічого відкритого не підходить достатньо близько, але ці організації працюють саме над тим, про що ви питали.",
  "results.thatsAll":
    "Це все, що підходить близько. Можна розширити пошук або змінити те, що ви нам сказали.",
  "results.showScotland": "Показати підтримку по всій Шотландії",
  "results.changeMine": "Змінити мої відповіді",
  "results.startOver": "Почати спочатку",
  "card.bestMatch": "Найкращий збіг",
  "card.save": "Зберегти",
  "card.saved": "Збережено",
  "card.saveAria": "Зберегти #",
  "card.savedAria": "Збережено: #",
  "card.whoFor": "Для кого",
  "card.whatToExpect": "Чого очікувати",
  "card.whyMatched": "Чому це вам підходить:",
  "card.learnMore": "Дізнатися більше",
  "card.missing": "Ще не заповнено",
  "card.closes": "Закривається #",
  "card.closed": "Закрито #",
  "card.verified": "Перевірено",
  "card.verifiedOn": "Перевірено · останнє оновлення #",
  "nomatch.title": "Поки що ми нічого для вас не знайшли",
  "nomatch.body":
    "Це не означає, що допомоги немає. Це означає, що сьогодні ми не маємо нічого, що відповідає вашому запиту.",
  "nomatch.tryFirst": "Спробуйте спершу це",
  "nomatch.widen": "Розширити на всю Шотландію",
  "nomatch.onlineTitle": "Лише підтримка онлайн",
  "nomatch.changeTitle": "Змінити те, про що ви просили",
  "nomatch.changeNote":
    "Інші слова іноді знаходять інше. Варто спробувати ще раз.",
  "nomatch.startTitle": "Почати заново",
  "nomatch.startNote": "Очистити все й почати з першого питання.",
  "orgsAnswer.title": "Ці люди теж можуть допомогти",
  "orgsAnswer.body":
    "Організації, які працюють над тим, про що ви питали. Можливо, зараз у них нічого не відкрито, але до них можна звернутися напряму.",
  "talkcta.title": "Хочете з кимось поговорити?",
  "talkcta.body":
    "З кимось, хто знає, що є, і може підказати напрямок. Оберіть зручний час. Це безкоштовно, і обліковий запис не потрібен.",
  "talkcta.cta": "Переглянути вільний час",
  "talkcta.note":
    "Ми вже знатимемо, що ви шукали, тож не доведеться пояснювати все спочатку.",
  "talkcta.today": "Потрібна допомога сьогодні? Напишіть нам зараз.",
  "refine.back": "Назад до результатів",
  "refine.title": "Звузити або розширити",
  "refine.howFar": "Як далеко шукати",
  "refine.onlyShow": "Показувати лише",
  "refine.nothingMatches": "За цими фільтрами нічого не знайдено.",
  "refine.tryRemoving": "Спробуйте прибрати «#».",
  "refine.inScope": "Шукаємо тут: #.",
  "refine.tryWiden": "Спробуйте розширити зону пошуку.",
  "refine.update": "Оновити пошук",
  "scope.myArea": "Мій район",
  "scope.nearby": "Сусідні райони",
  "scope.allScotland": "Уся Шотландія",
  "scope.online": "Лише онлайн",
  "filter.free": "Безкоштовно",
  "filter.openNow": "Відкрито зараз",
  "filter.noForms": "Без анкет",
  "saved.title": "Ваш список збереженого",
  "saved.titleNamed": "Список збереженого: #",
  "saved.emptyBody":
    "Коли знайдете щось, до чого варто повернутися, натисніть Зберегти. Воно буде тут, і ми попередимо вас, перш ніж воно закриється.",
  "saved.emptyCta": "Знайти підтримку",
  "saved.soonest": "Спершу те, що закривається найраніше.",
  "saved.seeWhatElse": "Подивитися, що ще є",
  "saved.findSomethingElse": "Знайти щось інше",
  "saved.settings": "Нагадування та налаштування облікового запису",
  "saved.noClosingDate": "Без дати закриття",
  "saved.noLongerRunning": "Більше не діє",
  "service.backToResults": "Назад до ваших результатів",
  "service.cost": "Вартість",
  "service.where": "Де",
  "service.howToTakePart": "Як узяти участь",
  "service.continueTo": "Перейти до #",
  "service.closedTitle": "Це вже завершилося",
  "service.closedBody":
    "Це може повторитися. # може сказати вам, коли відкриється наступний набір, а зараз може бути щось схоже.",
  "service.askNext": "Запитати, коли буде наступний",
  "service.findSimilar": "Знайти схожу підтримку",
  "service.somethingWrong": "Тут щось не так?",
  "discover.title": "Хто працює для жінок у Шотландії",
  "discover.lede":
    "Кожну організацію тут ми перевірили. Шукайте за назвою або переглядайте за тим, що вам потрібно.",
  "discover.searchLabel":
    "Шукати організацію за назвою або за тим, чим вона займається",
  "discover.searchButton": "Шукати організації",
  "discover.orAnswer":
    "Або дайте відповідь на три питання, і ми підберемо для вас",
  "discover.byZone": "Переглядати за Зоною доступу",
  "discover.byZoneNote":
    "Види підтримки, навколо яких побудовано платформу. Кожен веде до організацій, що ним займаються.",
  "discover.nobodyYet": "Тут поки нікого немає",
  "discover.byNeed": "Переглядати за тим, що вам потрібно",
  "discover.byNeedNote": "Скажіть так, як сказали б уголос.",
  "zone.allZones": "Усі Зони доступу",
  "zone.eyebrow": "Зона доступу",
  "zone.empty":
    "У цій зоні поки нікого немає. Це не означає, що допомоги немає, тож скажіть, що вам потрібно, і ми пошукаємо в усьому, що маємо.",
  "zone.tellUs": "Скажіть, що вам потрібно",
  "zone.alsoWorks": "Також працює в цій зоні",
  "need.everything": "Усе, що можна переглянути",
  "need.eyebrow": "Що вам потрібно",
  "discover.eyebrow": "Огляд",
  "discover.searchAria": "Шукати",
  "discover.clear": "Очистити",
  "discover.nothingMatches": "Нічого не знайдено за «#»",
  "discover.forQuery": "за запитом «#»",
  "discover.searchNote":
    "Це поле шукає лише за назвами та описами. Якщо ви описуєте свою ситуацію, а не шукаєте конкретну організацію, три питання впораються значно краще.",
  "discover.tryQuestions": "Спробуйте три питання.",
  "need.emptyShort": "Сюди поки нікого не внесено.",
  "need.workOnThis": "Ті, у кого щось відкрито, — першими.",
  "need.empty":
    "Сюди поки нікого не внесено. Це не означає, що допомоги немає, тож скажіть, що вам потрібно, і ми пошукаємо в усьому, що маємо.",
  "talk.title": "Поговорити з людиною",
  "talk.pickTime": "Оберіть зручний для вас час",
  "talk.pickBody":
    "Ми вам зателефонуємо. Це займає близько півгодини, нічого не коштує, і обліковий запис не потрібен.",
  "talk.noneTitle": "Найближчими тижнями вільного часу немає",
  "talk.noneBody":
    "Це нетипово і не означає, що ніхто не може допомогти. Напишіть нам, і ми знайдемо час поза цим календарем.",
  "talk.otherWays": "Інші способи зв'язатися з нами",
  "talk.ukTime": "Усі години вказано за британським часом.",
  "talk.todayInstead":
    "Потрібна допомога сьогодні, а не в призначений час? Є швидші способи зв'язатися з нами.",
  "booking.name": "Ваше ім'я",
  "booking.nameNote": "Як до вас звертатися",
  "booking.email": "Адреса електронної пошти",
  "booking.emailNote":
    "Надішлемо сюди час разом із файлом календаря, який можна додати одним дотиком.",
  "booking.phone": "Номер телефону",
  "booking.phoneNote":
    "Лише якщо вам зручніше, щоб ми зателефонували, а не написали.",
  "booking.notes": "Що нам варто знати заздалегідь",
  "booking.notesNote":
    "Необов'язково. Це прочитає лише людина, яка вам зателефонує.",
  "booking.optional": "Необов'язково",
  "booking.submit": "Забронювати цей час",
  "confirm.title": "Підтвердіть розмову",
  "confirm.pickDifferent": "Обрати інший час",
  "confirm.privacy":
    "Ваше ім'я та електронну пошту ми використовуємо тільки для дзвінка. Обліковий запис не створюється, і вас не додають до жодного списку.",
  "booked.title": "Заброньовано",
  "booked.sent":
    "Ми надіслали час на вашу пошту разом із файлом календаря, який можна додати до телефону одним дотиком. Це може зайняти хвилину.",
  "booked.reference": "Ваш номер",
  "booked.prepare":
    "Готуватися не потрібно. Людина, яка зателефонує, уже прочитає, що ви шукали, тож починати з нуля не доведеться.",
  "booked.move":
    "Якщо час перестане вам підходити, дайте відповідь на той лист, і ми його перенесемо.",
  "booked.keepLooking": "Тим часом продовжуйте шукати",
  "booked.backToStart": "На початок",
  "account.title": "Вхід до вашого облікового запису",
  "account.saveIt": "Увійдіть, щоб зберегти",
  "account.saveBody":
    "Збереження — єдине, для чого тут потрібен обліковий запис, щоб ваш список був на місці наступного разу. Ми зберегли те, що ви щойно натиснули, і воно чекатиме після входу.",
  "account.otp":
    "Надішлемо вам одноразовий код для входу. Жодного пароля запам'ятовувати не треба.",
  "account.emailPrivate":
    "Ваша електронна пошта залишається приватною та захищеною.",
  "account.carryOn": "Продовжити без збереження",
  "account.signInHere": "Увійти тут",
  "code.title": "Перевірте пошту",
  "code.sentTo": "Ми надіслали код для входу на:",
  "code.justSearch": "Просто шукати без входу",
  "code.enterBelow": "Введіть його нижче — і ви всередині.",
  "code.arrive":
    "Він має прийти протягом хвилини. Якщо ні, перевірте папку зі спамом.",
  "code.different": "Використати іншу адресу",
  "profile.title": "Налаштуйте свій профіль",
  "profile.subline":
    "Лише ім'я, щоб до вас звертатися. Нічого тут не є обов'язковим.",

  "nav.home": "Головна",
  "nav.discover": "Огляд",
  "nav.forOrgs": "Для організацій",
  "nav.faq": "Питання",
  "nav.signIn": "Увійти",
  "nav.signOut": "Вийти",
  "nav.saved": "Збережене",
  "nav.settings": "Налаштування",
  "nav.remindersSettings": "Нагадування та налаштування",
  "nav.sections": "Розділи",
  "nav.menu": "меню",
  "nav.homeAria": "HWS Pathgrid, головна",
  "nav.findNext": "Знайдіть свій наступний крок",
  "footer.label": "Нижній колонтитул",
  "footer.tagline":
    "Поєднуємо жінок з можливостями — не лише одна кімната, один індекс чи один день.",
  "footer.free":
    "Безкоштовно, і обліковий запис не потрібен, щоб шукати, читати чи подавати заявку.",
  "footer.forYou": "Для вас",
  "footer.find": "Знайти рішення",
  "footer.discover": "Огляд організацій",
  "footer.faq": "Поширені питання",
  "footer.help": "Допомога",
  "footer.forOrgs": "Для організацій",
  "footer.meetWomen": "Познайомтеся з жінками",
  "footer.whyList": "Навіщо бути тут",
  "footer.whoListed": "Хто вже тут",
  "footer.legal": "Правова інформація",
  "footer.privacy": "Політика конфіденційності",
  "footer.terms": "Умови користування",
  "footer.talk": "Поговорити з людиною",
  "cookie.region": "Про файли cookie",
  "cookie.claim":
    "Ми використовуємо кілька файлів cookie, і жоден з них за вами не стежить.",
  "cookie.detail":
    "Вони тримають вас у системі та памʼятають вашу мову. Нічого не відстежується і не продається.",
  "cookie.more": "Докладніше в політиці конфіденційності",
  "cookie.okay": "\u0413\u0430\u0440\u0430\u0437\u0434",
  "loading.page": "\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u0442\u044c\u0441\u044f",
  "loading.organisations": "\u041e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u0457 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u044e\u0442\u044c\u0441\u044f",
  "loading.organisation": "\u041e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u0442\u044c\u0441\u044f",
  "loading.saved": "\u0412\u0430\u0448 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u0442\u044c\u0441\u044f",
  "loading.listing": "\u0417\u0430\u043f\u0438\u0441 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u0442\u044c\u0441\u044f",

  "faq.title": "Поширені питання",
  "faq.lede":
    "HWS Path Grid поєднує жінок по всій Шотландії з підтримкою, яка їм справді підходить, а організаціям дає одне місце, де їх можна знайти.",
  "faq.notHere":
    "Якщо потрібної відповіді тут немає, ми відповідаємо на кожне повідомлення.",
  "faq.talkPerson": "Поговоріть з людиною.",
  "faq.forWomen": "Якщо ви шукаєте підтримку",
  "faq.forOrgs": "Якщо ви організація",

  "meta.home.title": "Знайдіть підтримку для жінок у Шотландії",
  "meta.home.desc":
    "Розкажіть своїми словами, що вам потрібно, і ми покажемо кілька наступних кроків, які варто зробити. Кожну організацію перевірено. Обліковий запис не потрібен.",
  "meta.find.desc":
    "Розкажіть своїми словами, що вам потрібно. Три питання, без облікового запису, і ми переглянемо кожну перевірену нами організацію в Шотландії.",
  "meta.where.desc":
    "Скажіть, де ви, щоб ми могли показати спершу те, що поруч, і водночас не пропустити того, що відкрите для всіх.",
  "meta.situation.desc":
    "Оберіть усе, що підходить. Це змінює те, що ми вам покажемо.",
  "meta.results.desc":
    "Підтримка, яку ми для вас знайшли, із причиною, чому кожна з них тут.",
  "meta.refine.desc":
    "Звузьте пошук або розширте його, коли перший набір результатів виявився не тим.",
  "meta.change.title": "Змініть свої відповіді",
  "meta.change.desc":
    "Змініть те, що ви нам сказали, і ми ще раз переглянемо всі організації.",
  "meta.startOver.desc": "Очистіть відповіді й почніть три питання спочатку.",
  "meta.discover.title": "Огляд організацій по всій Шотландії",
  "meta.discover.desc":
    "Перегляньте організації, що працюють з жінками по всій Шотландії, за видом підтримки або за тим, що вам потрібно.",
  "meta.faq.desc":
    "Що питають жінки, перш ніж скористатися цим сайтом, і що питають організації, перш ніж тут зареєструватися. Відповіді прямо.",
  "meta.orgs.desc":
    "Розмістіть те, що ви проводите, на HWS Path Grid і досягніть жінок, яким це справді підходить. Безкоштовно, перевірка один раз, і ніхто не платить за появу.",
  "meta.go.title": "Переходите, щоб подати заявку",
  "meta.go.desc":
    "Переводимо вас на власну сторінку організації, щоб ви могли подати заявку в них.",
  "meta.help.desc":
    "Якщо ви не можете знайти потрібне або щось тут виглядає не так, скажіть нам. Ми радше почуємо від вас, ніж щоб ви від цього відмовилися.",
  "meta.saved.desc": "Усе, що ви зберегли, в одному місці.",
  "meta.privacy.desc":
    "Що HWS Path Grid збирає, коли ви користуєтеся сайтом, навіщо, і чого ми ніколи з цим не зробимо.",
  "meta.terms.desc":
    "Правила користування HWS Path Grid — для жінок, які тут шукають, і для організацій, які тут представлені.",
  "meta.talk.desc":
    "Забронюйте безкоштовну розмову з тим, хто підкаже правильний напрямок.",
  "meta.confirm.desc": "Останній крок перед бронюванням розмови.",
  "meta.booked.title": "Вашу розмову заброньовано",
  "meta.booked.desc": "Що далі.",
  "meta.account.desc":
    "Увійдіть або створіть обліковий запис, щоб збережена підтримка була на місці, коли ви повернетеся.",
  "meta.accountCode.desc": "Ми надіслали вам шестизначний код для входу.",
  "meta.profile.desc":
    "Додайте імʼя, щоб ми могли звертатися до вас належно. Нічого тут не є обовʼязковим.",
  "meta.settings.desc":
    "Ваші нагадування, ваша мова і те, що відбувається з вашим обліковим записом.",
  "meta.emailChange.title": "Змінити адресу електронної пошти",
  "meta.emailChange.desc":
    "Перенесіть обліковий запис і все збережене на ньому на іншу адресу.",
  "meta.emailCode.title": "Перевірте нову скриньку",
  "meta.emailCode.desc": "Введіть код, який ми надіслали на вашу нову адресу.",

  "settings.savedList": "Мій збережений список",
  "settings.reminders": "Нагадування",
  "settings.howFar": "За скільки часу",
  "settings.nothingElse":
    "Більше нічого не надсилаємо. Жодних розсилок, жодних порад.",
  "settings.neverName":
    "Листи-нагадування ніколи не називають вид підтримки, на випадок, якщо вашу пошту читає хтось інший.",
  "settings.emailChanged":
    "Готово. Ваш обліковий запис тепер на цій адресі, і збережений список перейшов разом з ним.",
  "reminders.beforeDeadline": "Перед кінцевим терміном",
  "change.heard": "Ось що ми почули",
  "change.weWillShow":
    "Ми покажемо невелику кількість наступних кроків, від того, що підходить найкраще. Ніхто не платить за появу тут.",
  "startover.confirm": "Це очистить ваші відповіді. Почати спочатку?",
  "startover.note":
    "Усе збережене залишається на місці. Зникає лише те, що ви розповіли про свої потреби.",
  "startover.yes": "Так, почати спочатку",
  "startover.keep": "Залишити мої відповіді",
  "legal.onThisPage": "На цій сторінці",
  "legal.questions": "Питання про будь-що з цього йдуть до людини, а не у форму.",
  "legal.draftTitle": "Це чернетка",
  "legal.draftBody":
    "Текст нижче описує саме те, як платформа працює сьогодні, але він ще не пройшов остаточної перевірки. Його опубліковано, щоб ви могли прочитати й тримати нас за слово, а не тому, що він завершений.",
  "legal.draftAsk":
    "Якщо щось тут важливе для рішення, яке ви приймаєте, запитайте нас.",
  "legal.pendingTitle": "Цей документ ще пишеться",
  "legal.pendingBody":
    "Текст у нас і буде опублікований тут до відкриття платформи. Ніщо на цій сторінці не чинне, доки цього не станеться.",
  "legal.pendingAsk":
    "Якщо ви хочете тим часом знати, що відбувається з тим, що ви пишете, запитайте нас, і ми скажемо прямо.",
  "photos.aria": "Фотографії з Holistic Wellbeing Summit",
  "photos.credit": "Holistic Wellbeing Summit",
  "testimonials.aria": "Що кажуть жінки",
  "testimonials.prev": "Попередня цитата",
  "testimonials.next": "Наступна цитата",
  "form.sendCode": "Надішліть мені код для входу",
  "form.yourCode": "Ваш код для входу",
  "form.codeWorks": "Код діє 15 хвилин.",
  "form.newCodeSent": "Новий код надіслано. Він може прийти за хвилину.",
  "form.sendNewCode": "Надіслати новий код",
  "form.theCodeWeSent": "Код, який ми надіслали",
  "form.newEmail": "Нова адреса електронної пошти",
  "form.sendToNew": "Надіслати код на нову адресу",
  "form.firstName": "Імʼя",
  "form.lastName": "Прізвище",
  "form.phoneOptional": "Номер телефону (необовʼязково)",
  "form.phoneNote":
    "Ми використовуємо його, лише якщо ви попросите передзвонити.",
  "form.continue": "Далі",
  "org.allOrgs": "Усі організації",
  "org.checked": "Перевірено HWS",
  "org.website": "Їхній сайт",
  "org.whatTheyDo": "Чим вони займаються",
  "org.whatTheyOffer": "Що пропонують",
  "org.whoTheyWorkWith": "З ким працюють",
  "org.whoTheyCanHelp": "Кому можуть допомогти",
  "org.whoTheyCannot": "Кому не можуть допомогти",
  "org.when": "Коли",
  "org.howToReach": "Як з ними звʼязатися",
  "org.zones": "Зони доступу",
  "org.mainOne": "Їхня основна",
  "org.nothingRunning":
    "Зараз у них нічого не відбувається. Скажіть, що вам потрібно, і ми пошукаємо в усьому, що маємо.",
  "org.orTellUs": "Або скажіть, що вам потрібно, і ми підберемо для вас",

  "orgpage.heroTitle":
    "Жінки, для яких ви працюєте, без того, щоб їм довелося вас шукати",
  "orgpage.heroBody":
    "Роботу ви вже робите. Проблема в тому, що жінка має знати вашу назву, щоб знайти ваш сайт. Тут вона описує свою ситуацію, і ми показуємо їй вас, бо ви — правильна відповідь, а не тому, що вона вгадала.",
  "orgpage.haveAccount": "У мене вже є обліковий запис",
  "orgpage.freeNote":
    "Безкоштовно. Без платного розміщення, без реклами, і ніхто не платить за вищу позицію.",
  "orgpage.whatYouGet": "Що ви отримуєте",
  "orgpage.reach": "Охоплення — і спосіб це довести",
  "orgpage.gain1Title": "Жінки, які шукали саме те, що ви робите",
  "orgpage.gain1Body":
    "Вона описує свою ситуацію своїми словами. Ми зіставляємо це з тим, для кого ви працюєте, що пропонуєте, де працюєте і скільки це коштує. Вона приходить, уже знаючи, чи підходить.",
  "orgpage.gain2Title": "Цифри, які можна показати донору",
  "orgpage.gain2Body":
    "Скільки жінок перейшло на ваш власний сайт, скільки прочитало сторінку організації і як спрацювало кожне ваше розміщення. Не показник для вигляду: перший рахує людей, які перейшли саме до вас.",
  "orgpage.gain3Title": "Перевірка один раз, а не до кожного запису",
  "orgpage.gain3Body":
    "Ми перевіряємо вас у публічному реєстрі або у вашого донора, коли ви приєднуєтеся. Далі ви публікуєте що хочете і коли хочете, не чекаючи на нас.",
  "orgpage.gain4Title": "Менше звернень не за адресою",
  "orgpage.gain4Body":
    "Ви кажете, кому не можете допомогти, і ми це показуємо. Жінки відсіюють себе самі ще до звернення, і це повернений час для того, хто читає вашу пошту.",
  "orgpage.fourSteps": "Чотири кроки, і один з них наш",
  "orgpage.step1Title": "Розкажіть, хто ви",
  "orgpage.step1Body":
    "Кілька питань про те, чим ви займаєтеся, кому допомагаєте і де. Десять хвилин, і можна зупинитися на півдорозі та повернутися.",
  "orgpage.step2Title": "Ми вас перевіряємо",
  "orgpage.step2Body":
    "У публічному реєстрі або у вашого донора. Одна перевірка, яку робить людина.",
  "orgpage.step3Title": "Публікуєте те, що відкрите",
  "orgpage.step3Body":
    "Курс, грант, відкритий прийом, менторська програма. Будь-що, куди жінка має вхід.",
  "orgpage.step4Title": "Вона знаходить це, коли воно підходить",
  "orgpage.step4Body":
    "Не тому, що шукала вашу назву. А тому, що описане нею збіглося з тим, що ви проводите.",
  "orgpage.whereYouSit": "Де б ви були",
  "orgpage.zonesBody":
    "Ви обираєте самі: одну основну і ще до двох. Більшості жінок потрібно кілька водночас, а більшість сервісів робить лише одне — і саме цю прогалину це закриває.",

  "legal.englishApplies":
    "Заголовки на цій сторінці — вашою мовою. Сам текст англійською, і саме англійська версія є чинною.",
  "legal.askInYourLanguage":
    "Запитайте нас про будь-яку його частину, і ми відповімо.",

  "reason.youToldUs": "ви сказали, що #",
  "reason.and": "і",
  "reason.youAskedAbout": "ви питали про #",
  "reason.runsIn": "це відбувається в: #",
  "reason.isOnline": "це онлайн, тож не має значення, де ви",
  "reason.acrossScotland": "це відкрито по всій Шотландії",
  "reason.closest": "це одне з найближчого, що ми маємо, до того, що ви описали.",
  "reason.clauseJoin": ", а також ",
};

const ar: Catalogue = {
  "language.label": "اللغة",
  "hero.title": "نساعد النساء على الحصول على الدعم الذي يحتجن إليه",
  "hero.body":
    "أخبرينا بكلماتك عمّا تحتاجين إليه، وسنعرض عليك بضع خطوات تالية تستحق أن تُتخذ. ثلاثة أسئلة، ولا حاجة إلى حساب.",
  "hero.cta": "ابحثي عن حل",
  "hero.browse": "أو اطّلعي على الجهات الموجودة",
  "why.eyebrow": "طريقة العمل",
  "why.title":
    "أن تعرفي بوجود شيء ما ليس كأن تعرفي أنه متاح لكِ",
  "hero.begin": "من أين تحبين أن تبدئي؟",
  "hero.beginFind": "ابحثي عن خطوتك التالية",
  "hero.beginBrowse": "اطّلعي على الجهات الموجودة",
  "how.oneTitle": "أخبرينا بكلماتك",
  "how.oneBody":
    "ما تحتاجينه، وأين أنتِ تقريبًا، وأي شيء عن وضعك. ثلاثة أسئلة فقط.",
  "how.twoTitle": "ندرس الأمر",
  "how.twoBody":
    "وفق ما وُضع له كل خيار، ولمن هو متاح، وأين يعمل، وكيف تصلين إليه. النتيجة مدعومة بالذكاء الاصطناعي.",
  "how.threeTitle": "تحصلين على بضعة خيارات حقيقية",
  "how.threeBody":
    "حفنة، لا مئة، لكل منها سبب تطابقه وكلفته ولمن هو وما الذي يحدث تحديدًا بعد تواصلك.",
  "how.forWomen": "للنساء",
  "how.forOrgs": "للجهات والمؤسسات",
  "how.orgOneTitle": "أخبرونا من أنتم",
  "how.orgOneBody":
    "أسئلة قليلة عمّا تقدّمونه، ولمن تريدون تقديم الحلول، وأين. التسجيل سريع.",
  "how.orgTwoTitle": "نتحقّق منكم مرة واحدة",
  "how.orgTwoBody":
    "عبر سجل عام أو استنادًا إلى سجل أعمالكم. بعد هذا التحقق تنشرون ما تشاؤون ومتى تشاؤون.",
  "how.orgThreeTitle": "تجدكم حين تناسبونها",
  "how.orgThreeBody":
    "ليس لأنها بحثت عن اسمكم، بل لأن ما وصفته يطابق الحل الذي تقدّمونه.",
  "origin.eyebrow": "لماذا وُجد هذا",
  "origin.title": "بدأ الأمر في قاعة مثل هذه",
  "origin.bodyOne":
    "يجمع Holistic Wellbeing Summit النساء في قاعة واحدة مع من يستطيعون مساعدتهن فعلاً. تعرّفكِ إحداهن على شخص. وتذكر إحداهن اسم برنامج لم تسمعي به من قبل، فتعرفين الآن أنه موجود.",
  "origin.bodyTwo":
    "ثم تفرغ القاعة. تعود المنظمات إلى عملها، وتبقى النساء بحاجة إلى الدعم. هذه المنصة هي القاعة نفسها وقد تُركت أبوابها مفتوحة، لكل امرأة لم تكن فيها.",
  "zones.eyebrow": "مجالات الوصول",
  "zones.title": "كل أنواع الدعم، منصة واحدة",
  "zones.body":
    "العمل، والمال، والتعلّم، والصحة، وريادة الأعمال، وإسماع الصوت. معظم النساء يحتجن إلى أكثر من واحد في الوقت نفسه، ومعظم الخدمات تقدّم واحدًا فقط، وهذه هي الفجوة التي وُجدت هذه المنصة لسدّها.",
  "zones.browse": "تصفّحي جميع الجهات على المنصة",
  "trust.checkedTitle": "محتوى موثّق",
  "trust.checkedBody":
    "كل منظمة هنا جرى التحقق منها في سجل عام أو لدى الجهة الممولة قبل أن تتمكن من نشر أي شيء. وكل إعلان يحمل تاريخ آخر تأكيد له.",
  "trust.privateTitle": "معلوماتك خاصة",
  "trust.privateBody":
    "لا تحتاجين إلى حساب للبحث أو القراءة أو التقديم. ما تكتبينه يُستخدم لترتيب نتائجك فقط، ولا يُباع ولا يُمرَّر ولا يُستخدم لبناء ملف عنك.",
  "trust.paidTitle": "لا محتوى مموّل",
  "trust.paidBody":
    "لا يوجد إدراج مدفوع ولا إعلانات. تُرتَّب النتائج حسب مدى ملاءمتها لما أخبرتِنا به، وكل إعلان يوضّح سبب مطابقته.",
  "orgs.title": "هل تديرين شيئًا ينبغي أن تعرف عنه النساء؟",
  "orgs.body":
    "أدرجيه هنا ليصل إلى النساء اللواتي يناسبهن فعلًا، بدلًا من أي شخص يصادف موقعك. مجانًا، ونتحقق منك مرة واحدة بدلًا من التحقق من كل إعلان.",
  "orgs.cta": "تعرّفوا على النساء",

  "flow.back": "رجوع",
  "flow.questionOf": "السؤال # من 3",
  "flow.next": "التالي",
  "flow.changeAnswers": "غيّري إجاباتك",
  "flow.searchCredit": "بحث مدعوم بالذكاء الاصطناعي",
  "flow.orgPrompt": "هل أنتم جهة أو شخص يقدّم حلولاً للنساء؟",
  "flow.orgLink": "للجهات",
  "q1.title": "ما الذي تحتاجين المساعدة فيه؟",
  "q1.subline": "بكلماتك أنتِ. لا توجد إجابة خاطئة.",
  "q1.placeholder": "مثلاً: العودة إلى العمل بعد رعاية أمي",
  "q1.blank": "اكتبي بضع كلمات حتى نعرف أين نبحث.",
  "q1.searchOn": "سنبحث بناءً على ما كتبتِه.",
  "q1.suggestions": "اقتراحات",
  "q2.title": "أين نبحث عن الدعم؟",
  "q2.subline": "بلدة أو رمز بريدي أو منطقة بلديتك.",
  "q2.placeholder": "مثلاً EH48",
  "q2.unknown":
    "لا نعرف هذا المكان. جرّبي بلدة قريبة، أو ابحثي في جميع أنحاء اسكتلندا.",
  "q2.or": "أو",
  "q2.anywhere": "أي مكان في اسكتلندا",
  "q2.onlineOnly": "دعم عبر الإنترنت فقط",
  "q2.hint": "اكتبي مكاناً، أو اختاري أحد الخيارين أعلاه.",
  "q3.title": "ما الذي يصف وضعك أفضل وصف؟",
  "q3.subline":
    "هذا يساعدنا على ملاحظة دعم قد يحق لكِ. يمكنك اختيار أكثر من واحد.",
  "q3.hint": "اختاري كل ما ينطبق، أو اختاري أفضّل عدم القول.",
  "q3.privacy": "لا نحتفظ بإجاباتك ولا نشاركها مع الجهات التي نعرضها عليك.",
  "results.title": "خطواتك التالية",
  "results.refine": "تضييق أو توسيع",
  "results.ordered":
    "مرتّبة حسب مدى ملاءمتها لما أخبرتِنا به. لا أحد يدفع ليظهر هنا.",
  "results.orgsOnly":
    "لا يوجد شيء مفتوح يناسبك بما يكفي، لكن هذه الجهات تعمل على ما سألتِ عنه.",
  "results.thatsAll":
    "هذا كل ما يناسبك عن قرب. يمكنك توسيع البحث أو تغيير ما أخبرتِنا به.",
  "results.showScotland": "أظهري الدعم في كل اسكتلندا",
  "results.changeMine": "غيّري إجاباتي",
  "results.startOver": "ابدئي من جديد",
  "card.bestMatch": "أفضل تطابق",
  "card.save": "حفظ",
  "card.saved": "محفوظ",
  "card.saveAria": "حفظ #",
  "card.savedAria": "محفوظ: #",
  "card.whoFor": "لمن هذا",
  "card.whatToExpect": "ما الذي تتوقعينه",
  "card.whyMatched": "لماذا ناسبك هذا:",
  "card.learnMore": "اعرفي المزيد",
  "card.missing": "لم يُملأ بعد",
  "card.closes": "يُغلق في #",
  "card.closed": "أُغلق في #",
  "card.verified": "موثّق",
  "card.verifiedOn": "موثّق · آخر تحديث #",
  "nomatch.title": "لم نجد لكِ شيئاً في الوقت الحالي",
  "nomatch.body":
    "هذا لا يعني أنه لا توجد مساعدة. يعني أنه ليس لدينا اليوم شيء يناسب ما طلبتِه.",
  "nomatch.tryFirst": "جرّبي هذا أولاً",
  "nomatch.widen": "وسّعي إلى كل اسكتلندا",
  "nomatch.onlineTitle": "دعم عبر الإنترنت فقط",
  "nomatch.changeTitle": "غيّري ما طلبتِه",
  "nomatch.changeNote":
    "الكلمات المختلفة تجد أحياناً أشياء مختلفة. تستحق محاولة أخرى.",
  "nomatch.startTitle": "ابدئي من جديد",
  "nomatch.startNote": "امسحي كل شيء وابدئي من السؤال الأول.",
  "orgsAnswer.title": "هؤلاء يمكنهم المساعدة أيضاً",
  "orgsAnswer.body":
    "جهات تعمل على ما سألتِ عنه. قد لا يكون لديها شيء مفتوح الآن، لكن يمكنك التوجه إليها مباشرة.",
  "talkcta.title": "هل تريدين التحدث إلى شخص؟",
  "talkcta.body":
    "شخص يعرف ما هو متاح، ويمكنه أن يدلّك على الاتجاه الصحيح. اختاري وقتاً يناسبك. لا يكلّف شيئاً ولا تحتاجين إلى حساب.",
  "talkcta.cta": "اطّلعي على الأوقات المتاحة",
  "talkcta.note": "سنعرف مسبقاً ما الذي بحثتِ عنه، فلن تضطري إلى شرحه من جديد.",
  "talkcta.today": "تحتاجين مساعدة اليوم؟ تحدثي إلينا الآن.",
  "refine.back": "العودة إلى النتائج",
  "refine.title": "تضييق أو توسيع",
  "refine.howFar": "إلى أي مدى نبحث",
  "refine.onlyShow": "اعرضي فقط",
  "refine.nothingMatches": "لا شيء يطابق هذه المرشّحات.",
  "refine.tryRemoving": "جرّبي إزالة «#».",
  "refine.inScope": "نبحث في: #.",
  "refine.tryWiden": "جرّبي توسيع نطاق البحث.",
  "refine.update": "حدّثي بحثي",
  "scope.myArea": "منطقتي",
  "scope.nearby": "المناطق القريبة",
  "scope.allScotland": "كل اسكتلندا",
  "scope.online": "عبر الإنترنت فقط",
  "filter.free": "مجاني",
  "filter.openNow": "مفتوح الآن",
  "filter.noForms": "بلا استمارات",
  "saved.title": "قائمتك المحفوظة",
  "saved.titleNamed": "قائمة # المحفوظة",
  "saved.emptyBody":
    "عندما تجدين شيئاً يستحق العودة إليه، اضغطي حفظ. سيكون هنا، وسنخبرك قبل أن يُغلق.",
  "saved.emptyCta": "ابحثي عن دعم",
  "saved.soonest": "الأقرب إلى الإغلاق أولاً.",
  "saved.seeWhatElse": "انظري ما الذي يوجد أيضاً",
  "saved.findSomethingElse": "ابحثي عن شيء آخر",
  "saved.settings": "التذكيرات وإعدادات الحساب",
  "saved.noClosingDate": "بلا موعد إغلاق",
  "saved.noLongerRunning": "لم يعد قائماً",
  "service.backToResults": "العودة إلى نتائجك",
  "service.cost": "التكلفة",
  "service.where": "أين",
  "service.howToTakePart": "كيف تشاركين",
  "service.continueTo": "تابعي إلى #",
  "service.closedTitle": "هذا قد أُغلق",
  "service.closedBody":
    "قد يُعاد تنظيمه. يمكن لـ # أن تخبرك متى يفتح التالي، وقد يتوفر الآن شيء مشابه.",
  "service.askNext": "اسألي متى يبدأ التالي",
  "service.findSimilar": "ابحثي عن دعم مشابه",
  "service.somethingWrong": "هل هناك خطأ في هذا؟",
  "discover.title": "من يعمل من أجل النساء في اسكتلندا",
  "discover.lede":
    "كل جهة هنا تم التحقق منها من قِبلنا. ابحثي عن واحدة بالاسم، أو تصفّحي حسب ما تحتاجين.",
  "discover.searchLabel": "ابحثي عن جهة بالاسم أو بما تقوم به",
  "discover.searchButton": "ابحثي عن جهات",
  "discover.orAnswer": "أو أجيبي عن ثلاثة أسئلة وسنجد لكِ ما يناسبك",
  "discover.byZone": "تصفّحي حسب مجال الوصول",
  "discover.byZoneNote":
    "أنواع الدعم التي بُنيت عليها المنصة. كل واحد يقودك إلى الجهات العاملة فيه.",
  "discover.nobodyYet": "لا أحد هنا بعد",
  "discover.byNeed": "تصفّحي حسب ما تحتاجين",
  "discover.byNeedNote": "قوليها كما تقولينها بصوت عالٍ.",
  "zone.allZones": "كل مجالات الوصول",
  "zone.eyebrow": "مجال الوصول",
  "zone.empty":
    "لا أحد مدرج في هذا المجال بعد. هذا لا يعني أنه لا توجد مساعدة، فأخبرينا بما تحتاجين وسنبحث في كل ما لدينا.",
  "zone.tellUs": "أخبرينا بما تحتاجين",
  "zone.alsoWorks": "تعمل في هذا المجال أيضاً",
  "need.everything": "كل ما يمكنك تصفّحه",
  "need.eyebrow": "ما تحتاجين",
  "discover.eyebrow": "استكشفي",
  "discover.searchAria": "بحث",
  "discover.clear": "مسح",
  "discover.nothingMatches": "لا شيء يطابق «#»",
  "discover.forQuery": "لـ «#»",
  "discover.searchNote":
    "هذا الحقل يبحث في الأسماء والأوصاف فقط. إن كنتِ تحاولين وصف وضعك بدلاً من إيجاد جهة بعينها، فالأسئلة الثلاثة ستفي بالغرض أفضل بكثير.",
  "discover.tryQuestions": "جرّبي الأسئلة الثلاثة.",
  "need.emptyShort": "لا أحد مدرج هنا بعد.",
  "need.workOnThis": "الجهات التي لديها شيء مفتوح تأتي أولاً.",
  "need.empty":
    "لا أحد مدرج هنا بعد. هذا لا يعني أنه لا توجد مساعدة، فأخبرينا بما تحتاجين وسنبحث في كل ما لدينا.",
  "talk.title": "تحدثي إلى شخص",
  "talk.pickTime": "اختاري وقتاً يناسبك",
  "talk.pickBody":
    "سنتصل بكِ. يستغرق الأمر نحو نصف ساعة، ولا يكلّف شيئاً، ولا تحتاجين إلى حساب.",
  "talk.noneTitle": "لا يوجد وقت متاح في الأسابيع القليلة القادمة",
  "talk.noneBody":
    "هذا غير معتاد، ولا يعني أن لا أحد يستطيع المساعدة. تواصلي معنا وسنجد وقتاً خارج هذا التقويم.",
  "talk.otherWays": "طرق أخرى للتواصل معنا",
  "talk.ukTime": "كل الأوقات بتوقيت المملكة المتحدة.",
  "talk.todayInstead":
    "تحتاجين مساعدة اليوم بدلاً من موعد محجوز؟ هناك طرق أسرع للتواصل معنا.",
  "booking.name": "اسمك",
  "booking.nameNote": "كيف تحبين أن نناديك",
  "booking.email": "البريد الإلكتروني",
  "booking.emailNote": "سنرسل الموعد إلى هنا، مع ملف تقويم يمكنك إضافته بلمسة.",
  "booking.phone": "رقم الهاتف",
  "booking.phoneNote": "فقط إن كنتِ تفضّلين أن نتصل بكِ بدلاً من مراسلتك.",
  "booking.notes": "أي شيء تودّين إخبارنا به مسبقاً",
  "booking.notesNote": "اختياري. لا يقرأ هذا أحد سوى الشخص الذي سيتصل بكِ.",
  "booking.optional": "اختياري",
  "booking.submit": "احجزي هذا الموعد",
  "confirm.title": "أكّدي مكالمتك",
  "confirm.pickDifferent": "اختاري موعداً آخر",
  "confirm.privacy":
    "نستخدم اسمك وبريدك الإلكتروني لإجراء المكالمة فقط. لا يُنشأ أي حساب، ولا تُضافين إلى أي قائمة.",
  "booked.title": "تم الحجز",
  "booked.sent":
    "أرسلنا الموعد إلى بريدك، مع ملف تقويم يمكنك إضافته إلى هاتفك بلمسة. قد يستغرق وصوله دقيقة.",
  "booked.reference": "رقمك المرجعي",
  "booked.prepare":
    "لا شيء تحتاجين إلى تحضيره. من سيتصل بكِ سيكون قد قرأ ما كنتِ تبحثين عنه، فلن تبدئي من الصفر.",
  "booked.move": "إن لم يعد الموعد مناسباً، ردّي على تلك الرسالة وسننقله.",
  "booked.keepLooking": "واصلي البحث في الأثناء",
  "booked.backToStart": "العودة إلى البداية",
  "account.title": "الدخول إلى حسابك",
  "account.saveIt": "سجّلي الدخول لحفظه",
  "account.saveBody":
    "الحفظ هو الشيء الوحيد هنا الذي يحتاج إلى حساب، لتبقى قائمتك موجودة في المرة القادمة. احتفظنا بما ضغطتِ حفظ عليه للتو، وسينتظرك بمجرد دخولك.",
  "account.otp": "سنرسل لكِ رمز دخول لمرة واحدة. لا كلمة مرور لتتذكّريها.",
  "account.emailPrivate": "بريدك الإلكتروني يبقى خاصاً وآمناً.",
  "account.carryOn": "تابعي دون حفظ",
  "account.signInHere": "سجّلي الدخول من هنا",
  "code.title": "تفقّدي بريدك",
  "code.sentTo": "أرسلنا رمز الدخول إلى:",
  "code.justSearch": "ابحثي فقط دون تسجيل الدخول",
  "code.enterBelow": "أدخليه أدناه وستدخلين.",
  "code.arrive":
    "من المفترض أن يصل خلال دقيقة. إن لم يصل، تفقّدي مجلد الرسائل غير المرغوب فيها.",
  "code.different": "استخدمي عنواناً آخر",
  "profile.title": "أنشئي ملفك",
  "profile.subline": "اسم فقط لنخاطبك به. لا شيء هنا إلزامي.",

  "nav.home": "الرئيسية",
  "nav.discover": "استكشفي",
  "nav.forOrgs": "للجهات",
  "nav.faq": "أسئلة شائعة",
  "nav.signIn": "تسجيل الدخول",
  "nav.signOut": "تسجيل الخروج",
  "nav.saved": "المحفوظات",
  "nav.settings": "الإعدادات",
  "nav.remindersSettings": "التذكيرات والإعدادات",
  "nav.sections": "الأقسام",
  "nav.menu": "القائمة",
  "nav.homeAria": "HWS Pathgrid، الرئيسية",
  "nav.findNext": "اعرفي خطوتك التالية",
  "footer.label": "تذييل الصفحة",
  "footer.tagline":
    "نصل النساء بالفرص — أبعد من غرفة واحدة أو رمز بريدي واحد أو يوم واحد.",
  "footer.free":
    "الاستخدام مجاني، ولا تحتاجين إلى حساب للبحث أو القراءة أو التقديم.",
  "footer.forYou": "لكِ",
  "footer.find": "ابحثي عن حل",
  "footer.discover": "استكشفي الجهات",
  "footer.faq": "الأسئلة الشائعة",
  "footer.help": "مساعدة",
  "footer.forOrgs": "للجهات",
  "footer.meetWomen": "تعرّفوا على النساء",
  "footer.whyList": "لماذا تُدرجون معنا",
  "footer.whoListed": "من المُدرج بالفعل",
  "footer.legal": "الشؤون القانونية",
  "footer.privacy": "سياسة الخصوصية",
  "footer.terms": "شروط الاستخدام",
  "footer.talk": "تحدثي إلى شخص",
  "cookie.region": "عن ملفات تعريف الارتباط",
  "cookie.claim": "نستخدم بضعة ملفات تعريف ارتباط، ولا شيء منها يراقبك.",
  "cookie.detail": "تُبقيك مسجّلة الدخول وتتذكّر لغتك. لا شيء يُتتبّع ولا يُباع.",
  "cookie.more": "المزيد في سياسة الخصوصية",
  "cookie.okay": "\u062d\u0633\u0646\u0627\u064b",
  "loading.page": "\u064a\u062c\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062d\u0629",
  "loading.organisations": "\u064a\u062c\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u062c\u0647\u0627\u062a",
  "loading.organisation": "\u064a\u062c\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0647\u0630\u0647 \u0627\u0644\u062c\u0647\u0629",
  "loading.saved": "\u064a\u062c\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0642\u0627\u0626\u0645\u062a\u0643 \u0627\u0644\u0645\u062d\u0641\u0648\u0638\u0629",
  "loading.listing": "\u064a\u062c\u0631\u064a \u062a\u062d\u0645\u064a\u0644 \u0647\u0630\u0627 \u0627\u0644\u0639\u0631\u0636",

  "faq.title": "الأسئلة الشائعة",
  "faq.lede":
    "يصل HWS Path Grid النساء في اسكتلندا بالدعم الذي يناسبهن فعلاً، ويمنح الجهات التي تقف خلفه مكاناً واحداً يُعثر عليها فيه.",
  "faq.notHere": "إن لم تكن الإجابة التي تحتاجينها هنا، فنحن نردّ على كل رسالة.",
  "faq.talkPerson": "تحدثي إلى شخص.",
  "faq.forWomen": "إن كنتِ تبحثين عن دعم",
  "faq.forOrgs": "إن كنتم جهة",

  "meta.home.title": "ابحثي عن دعم للنساء في اسكتلندا",
  "meta.home.desc":
    "أخبرينا بكلماتك ما الذي تحتاجينه ونعرض عليك بضع خطوات تالية تستحق أن تُتخذ. كل جهة مُتحقَّق منها. ولا حاجة إلى حساب.",
  "meta.find.desc":
    "أخبرينا بكلماتك ما الذي تحتاجينه. ثلاثة أسئلة، بلا حساب، ونبحث في كل جهة في اسكتلندا تحققنا منها.",
  "meta.where.desc":
    "أخبرينا أين أنتِ لنضع ما هو قريب منك أولاً، ونعرض عليك في الوقت نفسه ما هو مفتوح للجميع.",
  "meta.situation.desc": "اختاري ما ينطبق. هذا يغيّر ما نضعه أمامك.",
  "meta.results.desc": "الدعم الذي وجدناه لكِ، مع سبب وجود كل عرض هنا.",
  "meta.refine.desc":
    "ضيّقي بحثك أو وسّعيه، حين لا تكون المجموعة الأولى من النتائج هي المناسبة.",
  "meta.change.title": "غيّري إجاباتك",
  "meta.change.desc": "غيّري ما أخبرتِنا به وسنبحث من جديد في كل الجهات.",
  "meta.startOver.desc": "امسحي إجاباتك وابدئي الأسئلة الثلاثة من جديد.",
  "meta.discover.title": "استكشفي الجهات في أنحاء اسكتلندا",
  "meta.discover.desc":
    "تصفّحي الجهات التي تعمل مع النساء في أنحاء اسكتلندا، حسب نوع الدعم الذي تقدّمه أو حسب ما تحتاجينه.",
  "meta.faq.desc":
    "ما تسأل عنه النساء قبل استخدام هذا الموقع، وما تسأل عنه الجهات قبل الإدراج فيه. بإجابات واضحة.",
  "meta.orgs.desc":
    "أدرجوا ما تقدّمونه على HWS Path Grid وصِلوا إلى النساء اللواتي يناسبهن فعلاً. مجاناً، والتحقق مرة واحدة، ولا أحد يدفع ليظهر.",
  "meta.go.title": "مغادرة للتقديم",
  "meta.go.desc": "ننقلك إلى صفحة الجهة نفسها لتتمكني من التقديم لديها.",
  "meta.help.desc":
    "إن لم تجدي ما تحتاجينه، أو بدا شيء هنا خاطئاً، أخبرينا. نفضّل أن نسمع منك على أن تتخلي عن الأمر.",
  "meta.saved.desc": "كل ما حفظتِه، في مكان واحد.",
  "meta.privacy.desc":
    "ما يجمعه HWS Path Grid عند استخدامك الموقع، ولماذا، وما لن نفعله به أبداً.",
  "meta.terms.desc":
    "قواعد استخدام HWS Path Grid، للنساء اللواتي يبحثن فيه وللجهات المدرجة عليه.",
  "meta.talk.desc":
    "احجزي مكالمة مجانية مع شخص يمكنه أن يدلّك على الاتجاه الصحيح.",
  "meta.confirm.desc": "الخطوة الأخيرة قبل حجز مكالمتك.",
  "meta.booked.title": "تم حجز مكالمتك",
  "meta.booked.desc": "ما الذي يحدث بعد ذلك.",
  "meta.account.desc":
    "سجّلي الدخول، أو أنشئي حساباً، ليبقى ما تحفظينه موجوداً في المرة القادمة التي تعودين فيها.",
  "meta.accountCode.desc": "أرسلنا إليك رمزاً من ستة أرقام لتسجيل الدخول به.",
  "meta.profile.desc": "أضيفي اسمك لنخاطبك كما ينبغي. لا شيء هنا إلزامي.",
  "meta.settings.desc": "تذكيراتك، ولغتك، وما يحدث لحسابك.",
  "meta.emailChange.title": "تغيير بريدك الإلكتروني",
  "meta.emailChange.desc": "انقلي حسابك، وكل ما حُفظ عليه، إلى عنوان آخر.",
  "meta.emailCode.title": "تفقّدي بريدك الجديد",
  "meta.emailCode.desc": "أدخلي الرمز الذي أرسلناه إلى عنوانك الجديد.",

  "settings.savedList": "قائمتي المحفوظة",
  "settings.reminders": "التذكيرات",
  "settings.howFar": "قبل الموعد بكم",
  "settings.nothingElse": "لا نرسل شيئاً غير ذلك. لا نشرة بريدية ولا اقتراحات.",
  "settings.neverName":
    "رسائل التذكير لا تذكر أبداً نوع الدعم، تحسّباً لأن يقرأ بريدك شخص آخر.",
  "settings.emailChanged":
    "تم. حسابك الآن على هذا العنوان، وقائمتك المحفوظة انتقلت معه.",
  "reminders.beforeDeadline": "قبل الموعد النهائي",
  "change.heard": "هذا ما فهمناه",
  "change.weWillShow":
    "سنعرض عليك عدداً صغيراً من الخطوات التالية، الأنسب أولاً. لا أحد يدفع ليظهر هنا.",
  "startover.confirm": "هذا يمسح إجاباتك. نبدأ من جديد؟",
  "startover.note":
    "كل ما حفظتِه يبقى مكانه. يذهب فقط ما أخبرتِنا به عمّا تحتاجينه.",
  "startover.yes": "نعم، ابدئي من جديد",
  "startover.keep": "احتفظي بإجاباتي",
  "legal.onThisPage": "في هذه الصفحة",
  "legal.questions": "الأسئلة عن أي من هذا تصل إلى شخص، لا إلى استمارة.",
  "legal.draftTitle": "هذه مسودة",
  "legal.draftBody":
    "النص أدناه يصف بالضبط كيف تعمل المنصة اليوم، لكنه لم يمر بعد بمراجعة نهائية. نُشر لتقرئيه وتحاسبينا عليه، لا لأنه مكتمل.",
  "legal.draftAsk": "إن كان أي شيء هنا يهم قراراً تتخذينه، اسألينا.",
  "legal.pendingTitle": "هذه لا تزال قيد الكتابة",
  "legal.pendingBody":
    "النص لدينا وسيُنشر هنا قبل أن تفتح المنصة. لا شيء في هذه الصفحة سارٍ حتى ذلك الحين.",
  "legal.pendingAsk":
    "إن أردتِ أن تعرفي في هذه الأثناء ما يحدث لما تكتبينه، اسألينا وسنخبرك بوضوح.",
  "photos.aria": "صور من Holistic Wellbeing Summit",
  "photos.credit": "Holistic Wellbeing Summit",
  "testimonials.aria": "ما تقوله النساء",
  "testimonials.prev": "الاقتباس السابق",
  "testimonials.next": "الاقتباس التالي",
  "form.sendCode": "أرسلوا لي رمز دخول",
  "form.yourCode": "رمز الدخول الخاص بك",
  "form.codeWorks": "الرمز صالح لمدة 15 دقيقة.",
  "form.newCodeSent": "أُرسل رمز جديد. قد يستغرق وصوله دقيقة.",
  "form.sendNewCode": "أرسلوا رمزاً جديداً",
  "form.theCodeWeSent": "الرمز الذي أرسلناه",
  "form.newEmail": "عنوان البريد الجديد",
  "form.sendToNew": "أرسلوا رمزاً إلى العنوان الجديد",
  "form.firstName": "الاسم الأول",
  "form.lastName": "اسم العائلة",
  "form.phoneOptional": "رقم الهاتف (اختياري)",
  "form.phoneNote": "لا نستخدمه إلا إن طلبتِ منّا الاتصال بك.",
  "form.continue": "متابعة",
  "org.allOrgs": "كل الجهات",
  "org.checked": "مُتحقَّق منها من HWS",
  "org.website": "موقعهم",
  "org.whatTheyDo": "ما الذي يفعلونه",
  "org.whatTheyOffer": "ما الذي يقدّمونه",
  "org.whoTheyWorkWith": "مع من يعملون",
  "org.whoTheyCanHelp": "من يمكنهم مساعدته",
  "org.whoTheyCannot": "من لا يمكنهم مساعدته",
  "org.when": "متى",
  "org.howToReach": "كيف تصلين إليهم",
  "org.zones": "مجالات الوصول",
  "org.mainOne": "مجالهم الأساسي",
  "org.nothingRunning":
    "لا يوجد لديهم شيء قائم في الوقت الحالي. أخبرينا بما تحتاجينه وسنبحث في كل ما لدينا.",
  "org.orTellUs": "أو أخبرينا بما تحتاجينه وسنجد لكِ ما يناسبك",

  "orgpage.heroTitle": "النساء اللواتي تعملون لأجلهن، دون أن يضطررن للبحث عنكم",
  "orgpage.heroBody":
    "أنتم تقومون بالعمل أصلاً. المشكلة أن على المرأة أن تعرف اسمكم لتصل إلى موقعكم. هنا تصف وضعها، ونضعكم أمامها لأنكم الإجابة الصحيحة، لا لأنها خمّنت.",
  "orgpage.haveAccount": "لدي حساب بالفعل",
  "orgpage.freeNote":
    "مجاناً. لا مكان مدفوع، ولا إعلانات، ولا أحد يدفع ليظهر أعلى.",
  "orgpage.whatYouGet": "ما الذي تحصلون عليه",
  "orgpage.reach": "وصول، وطريقة لإثباته",
  "orgpage.gain1Title": "نساء كنّ يبحثن عمّا تقدّمونه",
  "orgpage.gain1Body":
    "تصف وضعها بكلماتها. نطابقه مع من أنتم مهيّأون له، وما تقدّمونه، وأين تعملون، وكم يكلّف. تصل إليكم وهي تعرف مسبقاً ما إذا كانت مؤهّلة.",
  "orgpage.gain2Title": "أرقام يمكنكم عرضها على ممول",
  "orgpage.gain2Body":
    "كم امرأة وصلت إلى موقعكم، وكم قرأت صفحة جهتكم، وكيف أدّى كل ما نشرتموه. ليس رقماً للمباهاة: الأول يحصي من نقرن ووصلن إليكم.",
  "orgpage.gain3Title": "تحقّق مرة واحدة، لا مع كل عرض",
  "orgpage.gain3Body":
    "نتحقق منكم في سجل عام أو لدى مموّلكم عند انضمامكم. بعدها تنشرون ما تشاؤون، متى تشاؤون، دون انتظارنا.",
  "orgpage.gain4Title": "استفسارات خاطئة أقل",
  "orgpage.gain4Body":
    "تقولون من لا تستطيعون مساعدته، ونحن نعرضه. تستبعد النساء أنفسهن قبل التواصل معكم، وهذا وقت يعود لمن يردّ على بريدكم.",
  "orgpage.fourSteps": "أربع خطوات، واحدة منها لنا",
  "orgpage.step1Title": "أخبرونا من أنتم",
  "orgpage.step1Body":
    "بضعة أسئلة عمّا تفعلونه، ولمن تقدّمونه، وأين. عشر دقائق، ويمكنكم التوقف في المنتصف والعودة.",
  "orgpage.step2Title": "نتحقق منكم",
  "orgpage.step2Body": "في سجل عام، أو لدى مموّلكم. تحقق واحد، يقوم به شخص.",
  "orgpage.step3Title": "انشروا ما هو مفتوح",
  "orgpage.step3Body":
    "دورة، منحة، زيارة بلا موعد، برنامج إرشاد. أي شيء فيه مدخل لامرأة.",
  "orgpage.step4Title": "تجده حين يناسبها",
  "orgpage.step4Body":
    "ليس لأنها بحثت عن اسمكم، بل لأن ما وصفته طابق ما تقدّمونه.",
  "orgpage.whereYouSit": "أين سيكون موقعكم",
  "orgpage.zonesBody":
    "تختارون بأنفسكم، مجالاً رئيسياً وما يصل إلى اثنين آخرين. أغلب النساء يحتجن أكثر من واحد في الوقت نفسه، وأغلب الخدمات تقدّم واحداً فقط، وهذه هي الفجوة التي وُجد هذا لسدّها.",

  "legal.englishApplies":
    "العناوين في هذه الصفحة بلغتك. أما النص نفسه فبالإنجليزية، والنسخة الإنجليزية هي النسخة السارية.",
  "legal.askInYourLanguage": "اسألينا عن أي جزء منه وسنجيب.",

  "reason.youToldUs": "أخبرتِنا #",
  "reason.and": "و",
  "reason.youAskedAbout": "سألتِ عن #",
  "reason.runsIn": "هذا يُقام في #",
  "reason.isOnline": "هذا عبر الإنترنت، فلا يهم أين أنتِ",
  "reason.acrossScotland": "هذا مفتوح في كل اسكتلندا",
  "reason.closest": "هذا من أقرب ما لدينا إلى ما وصفتِه.",
  "reason.clauseJoin": "، و",
};

const ur: Catalogue = {
  "language.label": "زبان",
  "hero.title": "خواتین کو وہ مدد دلانے میں معاون جس کی انہیں ضرورت ہے",
  "hero.body":
    "اپنے الفاظ میں بتائیں کہ آپ کو کیا چاہیے، اور ہم آپ کو چند اگلے قدم دکھائیں گے جو اٹھانے کے قابل ہیں۔ تین سوال، کوئی اکاؤنٹ درکار نہیں۔",
  "hero.cta": "حل تلاش کریں",
  "hero.browse": "یا دیکھیں کون کون موجود ہے",
  "why.eyebrow": "یہ کیسے کام کرتا ہے",
  "why.title":
    "کسی چیز کے موجود ہونے کا علم اور اس کے آپ کے لیے دستیاب ہونے کا علم ایک بات نہیں",
  "hero.begin": "آپ کہاں سے شروع کرنا چاہیں گی؟",
  "hero.beginFind": "اپنا اگلا قدم تلاش کریں",
  "hero.beginBrowse": "دیکھیں کون کون موجود ہے",
  "how.oneTitle": "اپنے الفاظ میں بتائیں",
  "how.oneBody":
    "آپ کو کیا چاہیے، تقریباً آپ کہاں ہیں، اور آپ کی صورتحال کے بارے میں کچھ بھی۔ صرف تین سوالات۔",
  "how.twoTitle": "ہم اسے پرکھتے ہیں",
  "how.twoBody":
    "اس بنیاد پر کہ ہر چیز کس لیے ہے، کن کے لیے کھلی ہے، کہاں چلتی ہے اور آپ اس تک کیسے پہنچ سکتی ہیں۔ نتیجہ اے آئی سے چلتا ہے۔",
  "how.threeTitle": "آپ کو چند حقیقی اختیارات ملتے ہیں",
  "how.threeBody":
    "مٹھی بھر، سو نہیں، ہر ایک کے ساتھ یہ کہ وہ کیوں موزوں ہے، اس کی لاگت، کن کے لیے ہے، اور رابطہ کرنے کے بعد بالکل کیا ہوتا ہے۔",
  "how.forWomen": "خواتین کے لیے",
  "how.forOrgs": "اداروں کے لیے",
  "how.orgOneTitle": "ہمیں بتائیں آپ کون ہیں",
  "how.orgOneBody":
    "چند سوالات کہ آپ کیا کرتے ہیں، کن لوگوں کو حل فراہم کرنا چاہتے ہیں، اور کہاں۔ رجسٹریشن تیز ہے۔",
  "how.orgTwoTitle": "ہم ایک بار آپ کی جانچ کرتے ہیں",
  "how.orgTwoBody":
    "کسی سرکاری رجسٹر کے ذریعے یا آپ کے سابقہ کام کی بنیاد پر۔ اس تصدیق کے بعد آپ جو چاہیں، جب چاہیں شائع کریں۔",
  "how.orgThreeTitle": "وہ آپ کو تب پائے گی جب آپ موزوں ہوں",
  "how.orgThreeBody":
    "اس لیے نہیں کہ اس نے آپ کا نام تلاش کیا، بلکہ اس لیے کہ اس نے جو بیان کیا وہ آپ کے پیش کردہ حل سے میل کھاتا ہے۔",
  "origin.eyebrow": "یہ کیوں موجود ہے",
  "origin.title": "اس کی شروعات ایسے ہی ایک کمرے سے ہوئی",
  "origin.bodyOne":
    "Holistic Wellbeing Summit خواتین کو ایک کمرے میں ان لوگوں کے ساتھ لاتی ہے جو واقعی مدد کر سکتے ہیں۔ کوئی آپ کا تعارف کراتی ہے۔ کوئی ایسے پروگرام کا نام لیتی ہے جس کے بارے میں آپ نے کبھی نہیں سنا، اور اب آپ کو معلوم ہے کہ وہ موجود ہے۔",
  "origin.bodyTwo":
    "پھر کمرہ خالی ہو جاتا ہے۔ ادارے اپنے کام پر لوٹ جاتے ہیں، اور خواتین کو مدد کی ضرورت باقی رہتی ہے۔ یہ پلیٹ فارم وہی کمرہ ہے جس کے دروازے کھلے چھوڑ دیے گئے ہیں، ہر اُس عورت کے لیے جو وہاں کبھی نہیں تھی۔",
  "zones.eyebrow": "رسائی کے شعبے",
  "zones.title": "ہر قسم کی مدد، ایک پلیٹ فارم",
  "zones.body":
    "کام، پیسہ، تعلیم، صحت، کاروبار، اپنی بات کہنے کا حق۔ زیادہ تر خواتین کو ایک وقت میں ایک سے زیادہ کی ضرورت ہوتی ہے، اور زیادہ تر خدمات صرف ایک ہی کام کرتی ہیں، یہی وہ خلا ہے جسے پُر کرنے کے لیے یہ موجود ہے۔",
  "zones.browse": "پلیٹ فارم پر سب کو دیکھیں",
  "trust.checkedTitle": "تصدیق شدہ مواد",
  "trust.checkedBody":
    "یہاں ہر ادارے کی کسی عوامی رجسٹر یا اس کے فنڈ دینے والے کے ذریعے تصدیق کی گئی ہے، اس سے پہلے کہ وہ کچھ شائع کر سکے۔ ہر اندراج پر آخری تصدیق کی تاریخ درج ہے۔",
  "trust.privateTitle": "معلومات نجی رہتی ہیں",
  "trust.privateBody":
    "تلاش کرنے، پڑھنے یا درخواست دینے کے لیے آپ کو اکاؤنٹ کی ضرورت نہیں۔ آپ جو لکھتی ہیں وہ صرف آپ کے نتائج ترتیب دینے کے لیے استعمال ہوتا ہے، اسے بیچا، آگے دیا، یا آپ کا پروفائل بنانے کے لیے استعمال نہیں کیا جاتا۔",
  "trust.paidTitle": "کوئی سپانسر شدہ مواد نہیں",
  "trust.paidBody":
    "کوئی ادا شدہ جگہ یا اشتہار نہیں ہے۔ نتائج اس بنیاد پر ترتیب دیے جاتے ہیں کہ وہ آپ کی بتائی ہوئی بات سے کتنے مطابق ہیں، اور ہر اندراج بتاتا ہے کہ وہ کیوں موزوں ہے۔",
  "orgs.title": "کیا آپ کچھ ایسا چلا رہی ہیں جس کے بارے میں خواتین کو معلوم ہونا چاہیے؟",
  "orgs.body":
    "اسے یہاں درج کریں اور یہ ان خواتین تک پہنچے گا جن کے لیے یہ واقعی موزوں ہے، نہ کہ جو اتفاق سے آپ کی ویب سائٹ تک پہنچ جائے۔ مفت، اور ہم آپ کی ایک بار تصدیق کرتے ہیں، ہر اندراج کی نہیں۔",
  "orgs.cta": "خواتین سے ملیں",

  "flow.back": "واپس",
  "flow.questionOf": "سوال # از 3",
  "flow.next": "آگے",
  "flow.changeAnswers": "اپنے جواب بدلیں",
  "flow.searchCredit": "تلاش بذریعہ اے آئی",
  "flow.orgPrompt":
    "کیا آپ ایک ادارہ یا فرد ہیں جو خواتین کے لیے حل فراہم کرتا ہے؟",
  "flow.orgLink": "اداروں کے لیے",
  "q1.title": "آپ کو کس چیز میں مدد چاہیے؟",
  "q1.subline": "اپنے الفاظ میں۔ کوئی جواب غلط نہیں ہوتا۔",
  "q1.placeholder": "مثلاً امی کی دیکھ بھال کے بعد کام پر واپسی",
  "q1.blank": "چند الفاظ لکھیں تاکہ ہمیں معلوم ہو کہ کہاں دیکھنا ہے۔",
  "q1.searchOn": "ہم اسی پر تلاش کریں گے جو آپ نے لکھا۔",
  "q1.suggestions": "تجاویز",
  "q2.title": "ہم مدد کہاں تلاش کریں؟",
  "q2.subline": "کوئی قصبہ، پوسٹ کوڈ، یا آپ کا کونسل علاقہ۔",
  "q2.placeholder": "مثلاً EH48",
  "q2.unknown":
    "ہم یہ جگہ نہیں جانتے۔ کوئی قریبی قصبہ آزمائیں، یا پورے سکاٹ لینڈ میں تلاش کریں۔",
  "q2.or": "یا",
  "q2.anywhere": "سکاٹ لینڈ میں کہیں بھی",
  "q2.onlineOnly": "صرف آن لائن مدد",
  "q2.hint": "کوئی جگہ لکھیں، یا اوپر دیے گئے دو میں سے ایک منتخب کریں۔",
  "q3.title": "آپ کی صورتحال کو بہترین طور پر کیا بیان کرتا ہے؟",
  "q3.subline":
    "اس سے ہمیں ایسی مدد تلاش کرنے میں آسانی ہوتی ہے جس کی آپ اہل ہو سکتی ہیں۔ آپ ایک سے زیادہ منتخب کر سکتی ہیں۔",
  "q3.hint": "جو کچھ بھی لاگو ہو منتخب کریں، یا 'بتانا نہیں چاہتی' چنیں۔",
  "q3.privacy":
    "ہم آپ کے جوابات محفوظ نہیں کرتے اور نہ ہی انہیں ان اداروں کو دیتے ہیں جو ہم آپ کو دکھاتے ہیں۔",
  "results.title": "آپ کے لیے اگلے قدم",
  "results.refine": "محدود یا وسیع کریں",
  "results.ordered":
    "اس ترتیب سے کہ یہ آپ کی بتائی ہوئی بات سے کتنا میل کھاتے ہیں۔ یہاں آنے کے لیے کوئی پیسے نہیں دیتا۔",
  "results.orgsOnly":
    "کوئی کھلی چیز اتنی قریب سے میل نہیں کھاتی کہ آپ کے سامنے رکھی جائے، لیکن یہ ادارے اسی پر کام کرتے ہیں جس کا آپ نے پوچھا۔",
  "results.thatsAll":
    "یہی سب کچھ ہے جو قریب سے میل کھاتا ہے۔ آپ تلاش کو وسیع کر سکتی ہیں یا اپنی بات بدل سکتی ہیں۔",
  "results.showScotland": "پورے سکاٹ لینڈ کی مدد دکھائیں",
  "results.changeMine": "میرے جواب بدلیں",
  "results.startOver": "دوبارہ شروع کریں",
  "card.bestMatch": "بہترین مطابقت",
  "card.save": "محفوظ کریں",
  "card.saved": "محفوظ ہے",
  "card.saveAria": "# محفوظ کریں",
  "card.savedAria": "محفوظ: #",
  "card.whoFor": "یہ کس کے لیے ہے",
  "card.whatToExpect": "کیا توقع رکھیں",
  "card.whyMatched": "یہ آپ سے کیوں میل کھایا:",
  "card.learnMore": "مزید جانیں",
  "card.missing": "ابھی پُر نہیں کیا گیا",
  "card.closes": "# کو بند ہوگا",
  "card.closed": "# کو بند ہوا",
  "card.verified": "تصدیق شدہ",
  "card.verifiedOn": "تصدیق شدہ · آخری تازہ کاری #",
  "nomatch.title": "ہمیں اس وقت آپ کے لیے کچھ نہیں ملا",
  "nomatch.body":
    "اس کا مطلب یہ نہیں کہ مدد موجود نہیں۔ اس کا مطلب ہے کہ آج ہمارے پاس ایسا کچھ نہیں جو آپ کی مانگی ہوئی چیز سے میل کھائے۔",
  "nomatch.tryFirst": "پہلے یہ آزمائیں",
  "nomatch.widen": "پورے سکاٹ لینڈ تک وسیع کریں",
  "nomatch.onlineTitle": "صرف آن لائن مدد",
  "nomatch.changeTitle": "جو آپ نے مانگا اسے بدلیں",
  "nomatch.changeNote":
    "مختلف الفاظ کبھی کبھی مختلف چیزیں تلاش کر لیتے ہیں۔ ایک اور کوشش کرنا بنتا ہے۔",
  "nomatch.startTitle": "دوبارہ شروع کریں",
  "nomatch.startNote": "سب کچھ صاف کریں اور پہلے سوال سے شروع کریں۔",
  "orgsAnswer.title": "یہ لوگ بھی مدد کر سکتے ہیں",
  "orgsAnswer.body":
    "وہ ادارے جو اسی پر کام کرتے ہیں جس کا آپ نے پوچھا۔ ہو سکتا ہے ابھی ان کے پاس کچھ کھلا نہ ہو، لیکن آپ براہِ راست ان سے رابطہ کر سکتی ہیں۔",
  "talkcta.title": "کیا آپ کسی سے بات کرنا چاہتی ہیں؟",
  "talkcta.body":
    "کوئی جو جانتا ہو کہ کیا دستیاب ہے، اور آپ کو صحیح سمت دکھا سکے۔ اپنی سہولت کا وقت چنیں۔ کچھ خرچ نہیں ہوتا اور اکاؤنٹ کی ضرورت نہیں۔",
  "talkcta.cta": "دستیاب اوقات دیکھیں",
  "talkcta.note":
    "ہمیں پہلے سے معلوم ہوگا کہ آپ نے کیا تلاش کیا، اس لیے دوبارہ وضاحت نہیں کرنی پڑے گی۔",
  "talkcta.today": "آج مدد چاہیے؟ ابھی ہم سے بات کریں۔",
  "refine.back": "نتائج پر واپس",
  "refine.title": "محدود یا وسیع کریں",
  "refine.howFar": "کتنی دور تک دیکھیں",
  "refine.onlyShow": "صرف یہ دکھائیں",
  "refine.nothingMatches": "ان فلٹرز کے ساتھ کچھ نہیں ملتا۔",
  "refine.tryRemoving": "«#» ہٹا کر دیکھیں۔",
  "refine.inScope": "یہاں دیکھ رہے ہیں: #۔",
  "refine.tryWiden": "تلاش کا دائرہ وسیع کر کے دیکھیں۔",
  "refine.update": "میری تلاش تازہ کریں",
  "scope.myArea": "میرا علاقہ",
  "scope.nearby": "قریبی علاقے",
  "scope.allScotland": "پورا سکاٹ لینڈ",
  "scope.online": "صرف آن لائن",
  "filter.free": "مفت",
  "filter.openNow": "ابھی کھلا",
  "filter.noForms": "فارم کے بغیر",
  "saved.title": "آپ کی محفوظ فہرست",
  "saved.titleNamed": "# کی محفوظ فہرست",
  "saved.emptyBody":
    "جب آپ کو کوئی ایسی چیز ملے جس پر واپس آنا بنتا ہو، اس پر محفوظ کریں دبائیں۔ وہ یہیں رہے گی، اور بند ہونے سے پہلے ہم آپ کو بتا دیں گے۔",
  "saved.emptyCta": "مدد تلاش کریں",
  "saved.soonest": "جو سب سے پہلے بند ہو رہا ہے وہ پہلے۔",
  "saved.seeWhatElse": "اور کیا ہے دیکھیں",
  "saved.findSomethingElse": "کچھ اور تلاش کریں",
  "saved.settings": "یاد دہانیاں اور اکاؤنٹ کی ترتیبات",
  "saved.noClosingDate": "بند ہونے کی تاریخ نہیں",
  "saved.noLongerRunning": "اب نہیں چل رہا",
  "service.backToResults": "اپنے نتائج پر واپس",
  "service.cost": "قیمت",
  "service.where": "کہاں",
  "service.howToTakePart": "شرکت کیسے کریں",
  "service.continueTo": "# پر جائیں",
  "service.closedTitle": "یہ بند ہو چکا ہے",
  "service.closedBody":
    "یہ دوبارہ ہو سکتا ہے۔ # آپ کو بتا سکتے ہیں کہ اگلا کب کھلے گا، اور ابھی کچھ ملتا جلتا دستیاب ہو سکتا ہے۔",
  "service.askNext": "پوچھیں اگلا کب شروع ہوگا",
  "service.findSimilar": "ملتی جلتی مدد تلاش کریں",
  "service.somethingWrong": "اس میں کچھ غلط ہے؟",
  "discover.title": "سکاٹ لینڈ میں خواتین کے لیے کون کام کر رہا ہے",
  "discover.lede":
    "یہاں موجود ہر ادارے کی ہم نے جانچ کی ہے۔ نام سے تلاش کریں، یا اپنی ضرورت کے مطابق نیچے پڑھتی جائیں۔",
  "discover.searchLabel": "ادارے نام سے یا ان کے کام سے تلاش کریں",
  "discover.searchButton": "ادارے تلاش کریں",
  "discover.orAnswer": "یا تین سوالوں کے جواب دیں اور ہم آپ کے لیے تلاش کریں گے",
  "discover.byZone": "رسائی زون کے حساب سے دیکھیں",
  "discover.byZoneNote":
    "مدد کی وہ اقسام جن پر یہ پلیٹ فارم بنا ہے۔ ہر ایک آپ کو اس میں کام کرنے والے اداروں تک لے جاتی ہے۔",
  "discover.nobodyYet": "ابھی یہاں کوئی نہیں",
  "discover.byNeed": "اپنی ضرورت کے حساب سے دیکھیں",
  "discover.byNeedNote": "جیسے آپ بول کر کہتیں، ویسے ہی کہیں۔",
  "zone.allZones": "تمام رسائی زون",
  "zone.eyebrow": "رسائی زون",
  "zone.empty":
    "اس زون میں ابھی کوئی درج نہیں۔ اس کا مطلب یہ نہیں کہ مدد موجود نہیں، اس لیے ہمیں بتائیں آپ کو کیا چاہیے اور ہم اپنی ہر چیز میں دیکھیں گے۔",
  "zone.tellUs": "ہمیں بتائیں آپ کو کیا چاہیے",
  "zone.alsoWorks": "اس زون میں بھی کام کرتے ہیں",
  "need.everything": "جو کچھ آپ دیکھ سکتی ہیں",
  "need.eyebrow": "آپ کو کیا چاہیے",
  "discover.eyebrow": "دریافت کریں",
  "discover.searchAria": "تلاش",
  "discover.clear": "صاف کریں",
  "discover.nothingMatches": "«#» سے کچھ نہیں ملتا",
  "discover.forQuery": "«#» کے لیے",
  "discover.searchNote":
    "یہ خانہ صرف ناموں اور تفصیلات میں دیکھتا ہے۔ اگر آپ کسی مخصوص ادارے کے بجائے اپنی صورتحال بیان کرنا چاہتی ہیں تو تین سوال کہیں بہتر کام کریں گے۔",
  "discover.tryQuestions": "تین سوال آزمائیں۔",
  "need.emptyShort": "ابھی اس کے خلاف کوئی درج نہیں۔",
  "need.workOnThis": "جن کے پاس کچھ کھلا ہے وہ پہلے ہیں۔",
  "need.empty":
    "ابھی اس کے خلاف کوئی درج نہیں۔ اس کا مطلب یہ نہیں کہ مدد موجود نہیں، اس لیے ہمیں بتائیں آپ کو کیا چاہیے اور ہم اپنی ہر چیز میں دیکھیں گے۔",
  "talk.title": "کسی سے بات کریں",
  "talk.pickTime": "اپنی سہولت کا وقت چنیں",
  "talk.pickBody":
    "ہم آپ کو فون کریں گے۔ تقریباً آدھا گھنٹہ لگتا ہے، کچھ خرچ نہیں ہوتا، اور اکاؤنٹ کی ضرورت نہیں۔",
  "talk.noneTitle": "آنے والے چند ہفتوں میں کوئی وقت خالی نہیں",
  "talk.noneBody":
    "یہ غیر معمولی بات ہے، اور اس کا مطلب یہ نہیں کہ کوئی مدد نہیں کر سکتا۔ ہم سے رابطہ کریں اور ہم اس کیلنڈر سے باہر کوئی وقت نکالیں گے۔",
  "talk.otherWays": "ہم تک پہنچنے کے دوسرے راستے",
  "talk.ukTime": "تمام اوقات برطانوی وقت کے مطابق ہیں۔",
  "talk.todayInstead":
    "طے شدہ وقت کے بجائے آج مدد چاہیے؟ ہم تک پہنچنے کے تیز تر راستے موجود ہیں۔",
  "booking.name": "آپ کا نام",
  "booking.nameNote": "آپ کو کس نام سے پکاریں",
  "booking.email": "ای میل پتہ",
  "booking.emailNote":
    "ہم وقت یہیں بھیجتے ہیں، ساتھ ایک کیلنڈر فائل جسے آپ ایک ٹیپ سے شامل کر سکتی ہیں۔",
  "booking.phone": "فون نمبر",
  "booking.phoneNote": "صرف اگر آپ ای میل کے بجائے فون کال کو ترجیح دیں۔",
  "booking.notes": "کچھ جو آپ پہلے ہمیں بتانا چاہیں",
  "booking.notesNote": "اختیاری۔ اسے صرف وہی شخص پڑھے گا جو آپ کو فون کرے گا۔",
  "booking.optional": "اختیاری",
  "booking.submit": "یہ وقت بُک کریں",
  "confirm.title": "اپنی کال کی تصدیق کریں",
  "confirm.pickDifferent": "کوئی اور وقت چنیں",
  "confirm.privacy":
    "ہم آپ کا نام اور ای میل صرف کال کرنے کے لیے استعمال کرتے ہیں۔ کوئی اکاؤنٹ نہیں بنتا، اور آپ کو کسی فہرست میں شامل نہیں کیا جاتا۔",
  "booked.title": "بُک ہو گیا",
  "booked.sent":
    "ہم نے وقت آپ کے ان باکس میں بھیج دیا ہے، ساتھ ایک کیلنڈر فائل جسے آپ ایک ٹیپ سے اپنے فون میں شامل کر سکتی ہیں۔ پہنچنے میں ایک منٹ لگ سکتا ہے۔",
  "booked.reference": "آپ کا حوالہ نمبر",
  "booked.prepare":
    "تیاری کی ضرورت نہیں۔ جو آپ کو فون کرے گا وہ پہلے ہی پڑھ چکا ہوگا کہ آپ کیا تلاش کر رہی تھیں، تو شروع سے بتانا نہیں پڑے گا۔",
  "booked.move":
    "اگر وقت مناسب نہ رہے تو اسی ای میل کا جواب دیں، ہم اسے بدل دیں گے۔",
  "booked.keepLooking": "اس دوران تلاش جاری رکھیں",
  "booked.backToStart": "شروع پر واپس",
  "account.title": "اپنے اکاؤنٹ تک رسائی",
  "account.saveIt": "محفوظ کرنے کے لیے سائن اِن کریں",
  "account.saveBody":
    "یہاں صرف محفوظ کرنے کے لیے اکاؤنٹ درکار ہے، تاکہ اگلی بار آپ کی فہرست موجود ہو۔ جس چیز پر آپ نے ابھی محفوظ دبایا، وہ ہم نے روک رکھی ہے اور اندر آتے ہی مل جائے گی۔",
  "account.otp":
    "ہم آپ کو سائن اِن کے لیے ایک بار کا کوڈ بھیجیں گے۔ کوئی پاس ورڈ یاد نہیں رکھنا پڑے گا۔",
  "account.emailPrivate": "آپ کا ای میل نجی اور محفوظ رکھا جاتا ہے۔",
  "account.carryOn": "محفوظ کیے بغیر آگے بڑھیں",
  "account.signInHere": "یہاں سائن اِن کریں",
  "code.title": "اپنا ای میل دیکھیں",
  "code.sentTo": "ہم نے سائن اِن کوڈ یہاں بھیجا ہے:",
  "code.justSearch": "سائن اِن کیے بغیر صرف تلاش کریں",
  "code.enterBelow": "نیچے درج کریں اور آپ اندر ہیں۔",
  "code.arrive":
    "ایک منٹ کے اندر پہنچ جانا چاہیے۔ اگر نہ پہنچے تو اپنا سپیم یا جنک فولڈر دیکھیں۔",
  "code.different": "کوئی اور پتہ استعمال کریں",
  "profile.title": "اپنا پروفائل بنائیں",
  "profile.subline":
    "بس ایک نام تاکہ ہم آپ کو پکار سکیں۔ یہاں کچھ بھی لازمی نہیں۔",

  "nav.home": "ہوم",
  "nav.discover": "دریافت",
  "nav.forOrgs": "اداروں کے لیے",
  "nav.faq": "عام سوالات",
  "nav.signIn": "سائن اِن",
  "nav.signOut": "سائن آؤٹ",
  "nav.saved": "محفوظ",
  "nav.settings": "ترتیبات",
  "nav.remindersSettings": "یاد دہانیاں اور ترتیبات",
  "nav.sections": "حصے",
  "nav.menu": "مینو",
  "nav.homeAria": "HWS Pathgrid، ہوم",
  "nav.findNext": "اپنا اگلا قدم تلاش کریں",
  "footer.label": "فوٹر",
  "footer.tagline":
    "خواتین کو مواقع سے جوڑنا — ایک کمرے، ایک پوسٹ کوڈ یا ایک دن سے آگے۔",
  "footer.free":
    "استعمال مفت ہے، اور تلاش، پڑھنے یا درخواست کے لیے اکاؤنٹ کی ضرورت نہیں۔",
  "footer.forYou": "آپ کے لیے",
  "footer.find": "حل تلاش کریں",
  "footer.discover": "ادارے دریافت کریں",
  "footer.faq": "اکثر پوچھے گئے سوالات",
  "footer.help": "مدد",
  "footer.forOrgs": "اداروں کے لیے",
  "footer.meetWomen": "خواتین سے ملیں",
  "footer.whyList": "ہمارے ساتھ کیوں درج ہوں",
  "footer.whoListed": "کون پہلے سے درج ہے",
  "footer.legal": "قانونی",
  "footer.privacy": "رازداری کی پالیسی",
  "footer.terms": "استعمال کی شرائط",
  "footer.talk": "کسی شخص سے بات کریں",
  "cookie.region": "کوکیز کے بارے میں",
  "cookie.claim":
    "ہم چند کوکیز استعمال کرتے ہیں، اور ان میں سے کوئی آپ کی نگرانی نہیں کرتی۔",
  "cookie.detail":
    "یہ آپ کو سائن اِن رکھتی ہیں اور آپ کی زبان یاد رکھتی ہیں۔ کچھ ٹریک یا فروخت نہیں ہوتا۔",
  "cookie.more": "مزید رازداری کی پالیسی میں",
  "cookie.okay": "\u0679\u06be\u06cc\u06a9 \u06c1\u06d2",
  "loading.page": "\u06cc\u06c1 \u0635\u0641\u062d\u06c1 \u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u0627 \u06c1\u06d2",
  "loading.organisations": "\u0627\u062f\u0627\u0631\u06d2 \u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u06d2 \u06c1\u06cc\u06ba",
  "loading.organisation": "\u06cc\u06c1 \u0627\u062f\u0627\u0631\u06c1 \u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u0627 \u06c1\u06d2",
  "loading.saved": "\u0622\u067e \u06a9\u06cc \u0645\u062d\u0641\u0648\u0638 \u0641\u06c1\u0631\u0633\u062a \u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u06cc \u06c1\u06d2",
  "loading.listing": "\u06cc\u06c1 \u0627\u0646\u062f\u0631\u0627\u062c \u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u0627 \u06c1\u06d2",

  "faq.title": "اکثر پوچھے گئے سوالات",
  "faq.lede":
    "HWS Path Grid سکاٹ لینڈ بھر میں خواتین کو ایسی مدد سے جوڑتا ہے جو واقعی اُن کے لیے موزوں ہو، اور اداروں کو ایک جگہ دیتا ہے جہاں انہیں ڈھونڈا جا سکے۔",
  "faq.notHere":
    "اگر آپ کا مطلوبہ جواب یہاں نہیں ہے تو ہم ہر پیغام کا جواب دیتے ہیں۔",
  "faq.talkPerson": "کسی شخص سے بات کریں۔",
  "faq.forWomen": "اگر آپ مدد تلاش کر رہی ہیں",
  "faq.forOrgs": "اگر آپ ایک ادارہ ہیں",

  "meta.home.title": "سکاٹ لینڈ میں خواتین کے لیے مدد تلاش کریں",
  "meta.home.desc":
    "اپنے الفاظ میں بتائیں کہ آپ کو کیا چاہیے اور ہم آپ کو چند ایسے اگلے قدم دکھائیں گے جو اٹھانے کے قابل ہوں۔ ہر ادارہ جانچا ہوا ہے۔ اکاؤنٹ کی ضرورت نہیں۔",
  "meta.find.desc":
    "اپنے الفاظ میں بتائیں کہ آپ کو کیا چاہیے۔ تین سوال، اکاؤنٹ کے بغیر، اور ہم سکاٹ لینڈ کے ہر جانچے ہوئے ادارے میں دیکھیں گے۔",
  "meta.where.desc":
    "بتائیں آپ کہاں ہیں تاکہ ہم پہلے وہ دکھائیں جو آپ کے قریب ہے، اور وہ بھی جو سب کے لیے کھلا ہے۔",
  "meta.situation.desc":
    "جو کچھ بھی لاگو ہو منتخب کریں۔ اس سے بدلتا ہے کہ ہم آپ کے سامنے کیا رکھتے ہیں۔",
  "meta.results.desc":
    "وہ مدد جو ہم نے آپ کے لیے تلاش کی، اس وجہ کے ساتھ کہ ہر ایک یہاں کیوں ہے۔",
  "meta.refine.desc":
    "اپنی تلاش محدود کریں یا وسیع کریں، جب نتائج کا پہلا سیٹ درست نہ ہو۔",
  "meta.change.title": "اپنے جواب بدلیں",
  "meta.change.desc":
    "جو آپ نے ہمیں بتایا اسے بدلیں اور ہم تمام اداروں میں دوبارہ دیکھیں گے۔",
  "meta.startOver.desc": "اپنے جواب صاف کریں اور تینوں سوال دوبارہ شروع کریں۔",
  "meta.discover.title": "سکاٹ لینڈ بھر کے ادارے دریافت کریں",
  "meta.discover.desc":
    "سکاٹ لینڈ بھر میں خواتین کے ساتھ کام کرنے والے ادارے دیکھیں، ان کی پیش کردہ مدد کی قسم کے حساب سے یا اپنی ضرورت کے حساب سے۔",
  "meta.faq.desc":
    "یہ سائٹ استعمال کرنے سے پہلے خواتین کیا پوچھتی ہیں، اور درج ہونے سے پہلے ادارے کیا پوچھتے ہیں۔ صاف جواب۔",
  "meta.orgs.desc":
    "جو آپ چلاتے ہیں اسے HWS Path Grid پر درج کریں اور ان خواتین تک پہنچیں جن کے لیے وہ واقعی موزوں ہے۔ مفت، ایک بار جانچ، اور کوئی ظاہر ہونے کے لیے پیسے نہیں دیتا۔",
  "meta.go.title": "درخواست کے لیے جا رہی ہیں",
  "meta.go.desc":
    "ہم آپ کو ادارے کے اپنے صفحے پر لے جا رہے ہیں تاکہ آپ وہیں درخواست دے سکیں۔",
  "meta.help.desc":
    "اگر آپ کو مطلوبہ چیز نہ ملے، یا یہاں کچھ غلط لگے، تو ہمیں بتائیں۔ ہم چاہیں گے کہ آپ ہم سے کہیں بجائے اس کے کہ آپ ہمت ہار جائیں۔",
  "meta.saved.desc": "جو کچھ آپ نے محفوظ کیا، ایک ہی جگہ۔",
  "meta.privacy.desc":
    "جب آپ سائٹ استعمال کرتی ہیں تو HWS Path Grid کیا جمع کرتا ہے، کیوں، اور اس کے ساتھ ہم کبھی کیا نہیں کریں گے۔",
  "meta.terms.desc":
    "HWS Path Grid کے استعمال کے اصول، ان خواتین کے لیے جو یہاں تلاش کرتی ہیں اور ان اداروں کے لیے جو یہاں درج ہیں۔",
  "meta.talk.desc":
    "کسی ایسے شخص کے ساتھ مفت کال بُک کریں جو آپ کو صحیح سمت دکھا سکے۔",
  "meta.confirm.desc": "آپ کی کال بُک ہونے سے پہلے آخری قدم۔",
  "meta.booked.title": "آپ کی کال بُک ہو گئی",
  "meta.booked.desc": "آگے کیا ہوگا۔",
  "meta.account.desc":
    "سائن اِن کریں یا اکاؤنٹ بنائیں، تاکہ آپ کی محفوظ کردہ مدد اگلی بار آنے پر موجود ہو۔",
  "meta.accountCode.desc":
    "ہم نے آپ کو سائن اِن کے لیے چھ ہندسوں کا کوڈ بھیجا ہے۔",
  "meta.profile.desc":
    "اپنا نام شامل کریں تاکہ ہم آپ کو ٹھیک طرح مخاطب کر سکیں۔ یہاں کچھ بھی لازمی نہیں۔",
  "meta.settings.desc":
    "آپ کی یاد دہانیاں، آپ کی زبان، اور آپ کے اکاؤنٹ کے ساتھ کیا ہوتا ہے۔",
  "meta.emailChange.title": "اپنا ای میل پتہ بدلیں",
  "meta.emailChange.desc":
    "اپنا اکاؤنٹ، اور اس پر محفوظ سب کچھ، کسی اور پتے پر منتقل کریں۔",
  "meta.emailCode.title": "اپنا نیا اِن باکس دیکھیں",
  "meta.emailCode.desc": "وہ کوڈ درج کریں جو ہم نے آپ کے نئے پتے پر بھیجا ہے۔",

  "settings.savedList": "میری محفوظ فہرست",
  "settings.reminders": "یاد دہانیاں",
  "settings.howFar": "کتنا پہلے",
  "settings.nothingElse":
    "ہم اس کے علاوہ کچھ نہیں بھیجتے۔ نہ نیوز لیٹر، نہ تجاویز۔",
  "settings.neverName":
    "یاد دہانی کی ای میلز کبھی مدد کی قسم کا نام نہیں لیتیں، اس صورت میں کہ آپ کا ان باکس کوئی اور پڑھے۔",
  "settings.emailChanged":
    "ہو گیا۔ آپ کا اکاؤنٹ اب اسی پتے پر ہے، اور آپ کی محفوظ فہرست بھی ساتھ آ گئی۔",
  "reminders.beforeDeadline": "آخری تاریخ سے پہلے",
  "change.heard": "ہم نے یہ سمجھا",
  "change.weWillShow":
    "ہم آپ کو تھوڑے سے اگلے قدم دکھائیں گے، سب سے زیادہ موزوں پہلے۔ یہاں آنے کے لیے کوئی پیسے نہیں دیتا۔",
  "startover.confirm": "اس سے آپ کے جواب صاف ہو جائیں گے۔ دوبارہ شروع کریں؟",
  "startover.note":
    "جو کچھ آپ نے محفوظ کیا وہ اپنی جگہ رہے گا۔ صرف وہ جاتا ہے جو آپ نے اپنی ضرورت کے بارے میں بتایا۔",
  "startover.yes": "ہاں، دوبارہ شروع کریں",
  "startover.keep": "میرے جواب رہنے دیں",
  "legal.onThisPage": "اس صفحے پر",
  "legal.questions":
    "ان میں سے کسی بھی چیز کے سوال کسی شخص تک جاتے ہیں، فارم تک نہیں۔",
  "legal.draftTitle": "یہ ایک مسودہ ہے",
  "legal.draftBody":
    "نیچے دی گئی عبارت بالکل وہی بیان کرتی ہے جیسے پلیٹ فارم آج کام کرتا ہے، مگر یہ ابھی حتمی جائزے سے نہیں گزری۔ یہ اس لیے شائع کی گئی ہے کہ آپ اسے پڑھ سکیں اور ہمیں اس کا پابند ٹھہرا سکیں، اس لیے نہیں کہ یہ مکمل ہے۔",
  "legal.draftAsk":
    "اگر یہاں کی کوئی بات آپ کے کسی فیصلے کے لیے اہم ہے تو ہم سے پوچھیں۔",
  "legal.pendingTitle": "یہ ابھی لکھی جا رہی ہے",
  "legal.pendingBody":
    "عبارت ہمارے پاس ہے اور پلیٹ فارم کھلنے سے پہلے یہاں شائع کر دی جائے گی۔ تب تک اس صفحے پر کچھ بھی نافذ العمل نہیں۔",
  "legal.pendingAsk":
    "اگر آپ اس دوران جاننا چاہیں کہ آپ جو لکھتی ہیں اس کا کیا ہوتا ہے تو ہم سے پوچھیں، ہم صاف بتا دیں گے۔",
  "photos.aria": "Holistic Wellbeing Summit کی تصاویر",
  "photos.credit": "Holistic Wellbeing Summit",
  "testimonials.aria": "خواتین کیا کہتی ہیں",
  "testimonials.prev": "پچھلا اقتباس",
  "testimonials.next": "اگلا اقتباس",
  "form.sendCode": "مجھے سائن اِن کوڈ بھیجیں",
  "form.yourCode": "آپ کا سائن اِن کوڈ",
  "form.codeWorks": "کوڈ 15 منٹ تک کام کرتا ہے۔",
  "form.newCodeSent": "نیا کوڈ بھیج دیا گیا۔ پہنچنے میں ایک منٹ لگ سکتا ہے۔",
  "form.sendNewCode": "نیا کوڈ بھیجیں",
  "form.theCodeWeSent": "وہ کوڈ جو ہم نے بھیجا",
  "form.newEmail": "نیا ای میل پتہ",
  "form.sendToNew": "نئے پتے پر کوڈ بھیجیں",
  "form.firstName": "پہلا نام",
  "form.lastName": "آخری نام",
  "form.phoneOptional": "فون نمبر (اختیاری)",
  "form.phoneNote":
    "ہم یہ صرف اس وقت استعمال کرتے ہیں جب آپ کہیں کہ ہم واپس فون کریں۔",
  "form.continue": "جاری رکھیں",
  "org.allOrgs": "تمام ادارے",
  "org.checked": "HWS کی جانچ شدہ",
  "org.website": "ان کی ویب سائٹ",
  "org.whatTheyDo": "وہ کیا کرتے ہیں",
  "org.whatTheyOffer": "وہ کیا پیش کرتے ہیں",
  "org.whoTheyWorkWith": "وہ کن کے ساتھ کام کرتے ہیں",
  "org.whoTheyCanHelp": "وہ کن کی مدد کر سکتے ہیں",
  "org.whoTheyCannot": "وہ کن کی مدد نہیں کر سکتے",
  "org.when": "کب",
  "org.howToReach": "ان تک کیسے پہنچیں",
  "org.zones": "رسائی زون",
  "org.mainOne": "ان کا بنیادی زون",
  "org.nothingRunning":
    "اس وقت ان کے پاس کچھ نہیں چل رہا۔ ہمیں بتائیں آپ کو کیا چاہیے اور ہم اپنی ہر چیز میں دیکھیں گے۔",
  "org.orTellUs": "یا ہمیں بتائیں آپ کو کیا چاہیے اور ہم آپ کے لیے تلاش کریں گے",

  "orgpage.heroTitle":
    "وہ خواتین جن کے لیے آپ ہیں، بغیر اس کے کہ انہیں آپ کو ڈھونڈنا پڑے",
  "orgpage.heroBody":
    "کام تو آپ پہلے ہی کر رہے ہیں۔ مسئلہ یہ ہے کہ کسی خاتون کو آپ کا نام معلوم ہونا چاہیے تاکہ وہ آپ کی ویب سائٹ تک پہنچے۔ یہاں وہ اپنی صورتحال بیان کرتی ہے، اور ہم آپ کو اس کے سامنے رکھتے ہیں کیونکہ آپ صحیح جواب ہیں، نہ کہ اس لیے کہ اس نے اندازہ لگایا۔",
  "orgpage.haveAccount": "میرا پہلے سے اکاؤنٹ ہے",
  "orgpage.freeNote":
    "مفت۔ نہ ادائیگی والی جگہ، نہ اشتہار، اور کوئی اوپر آنے کے لیے پیسے نہیں دیتا۔",
  "orgpage.whatYouGet": "آپ کو کیا ملتا ہے",
  "orgpage.reach": "رسائی، اور اسے ثابت کرنے کا طریقہ",
  "orgpage.gain1Title": "وہ خواتین جو وہی ڈھونڈ رہی تھیں جو آپ کرتے ہیں",
  "orgpage.gain1Body":
    "وہ اپنی صورتحال اپنے الفاظ میں بیان کرتی ہے۔ ہم اسے اس سے ملاتے ہیں کہ آپ کن کے لیے ہیں، کیا پیش کرتے ہیں، کہاں کام کرتے ہیں اور اس کی قیمت کیا ہے۔ وہ پہلے سے جانتے ہوئے آتی ہے کہ وہ اہل ہے یا نہیں۔",
  "orgpage.gain2Title": "ایسے اعداد جو آپ فنڈ دینے والے کو دکھا سکیں",
  "orgpage.gain2Body":
    "کتنی خواتین آپ کی اپنی سائٹ تک بھیجی گئیں، کتنوں نے آپ کے ادارے کا صفحہ پڑھا، اور آپ کی ہر پوسٹ نے کیسا کام کیا۔ یہ دکھاوے کا عدد نہیں: پہلا ان لوگوں کو گنتا ہے جنہوں نے کلک کر کے آپ تک رسائی کی۔",
  "orgpage.gain3Title": "ایک بار جانچ، ہر اندراج پر نہیں",
  "orgpage.gain3Body":
    "شامل ہوتے وقت ہم آپ کو کسی عوامی رجسٹر یا آپ کے فنڈ دینے والے کے ذریعے جانچتے ہیں۔ اس کے بعد آپ جو چاہیں، جب چاہیں شائع کریں، ہمارا انتظار کیے بغیر۔",
  "orgpage.gain4Title": "غلط استفسارات کم",
  "orgpage.gain4Body":
    "آپ بتاتے ہیں کہ آپ کن کی مدد نہیں کر سکتے، اور ہم یہ دکھاتے ہیں۔ خواتین آپ سے رابطہ کرنے سے پہلے خود کو خارج کر لیتی ہیں، جو آپ کا ان باکس سنبھالنے والے کا وقت بچاتا ہے۔",
  "orgpage.fourSteps": "چار قدم، اور ان میں سے ایک ہمارا ہے",
  "orgpage.step1Title": "ہمیں بتائیں آپ کون ہیں",
  "orgpage.step1Body":
    "چند سوال کہ آپ کیا کرتے ہیں، کن کی خدمت کرتے ہیں اور کہاں۔ دس منٹ، اور آپ بیچ میں رک کر واپس آ سکتے ہیں۔",
  "orgpage.step2Title": "ہم آپ کو جانچتے ہیں",
  "orgpage.step2Body":
    "کسی عوامی رجسٹر، یا آپ کے فنڈ دینے والے کے ذریعے۔ ایک جانچ، جو ایک شخص کرتا ہے۔",
  "orgpage.step3Title": "جو کھلا ہے وہ شائع کریں",
  "orgpage.step3Body":
    "ایک کورس، ایک گرانٹ، ایک کھلی نشست، ایک رہنمائی کا پروگرام۔ کوئی بھی چیز جس میں کسی خاتون کے لیے راستہ ہو۔",
  "orgpage.step4Title": "وہ اسے تب ڈھونڈتی ہے جب وہ موزوں ہو",
  "orgpage.step4Body":
    "اس لیے نہیں کہ اس نے آپ کا نام تلاش کیا۔ بلکہ اس لیے کہ جو اس نے بیان کیا وہ آپ کے کام سے میل کھایا۔",
  "orgpage.whereYouSit": "آپ کہاں ہوں گے",
  "orgpage.zonesBody":
    "آپ خود چنتے ہیں، ایک بنیادی اور دو تک مزید۔ زیادہ تر خواتین کو بیک وقت ایک سے زیادہ کی ضرورت ہوتی ہے اور زیادہ تر خدمات صرف ایک کرتی ہیں، اور یہی وہ خلا ہے جسے یہ پُر کرنے کے لیے موجود ہے۔",

  "legal.englishApplies":
    "اس صفحے کی سرخیاں آپ کی زبان میں ہیں۔ عبارت خود انگریزی میں ہے، اور انگریزی نسخہ ہی نافذ العمل ہے۔",
  "legal.askInYourLanguage":
    "اس کے کسی بھی حصے کے بارے میں ہم سے پوچھیں، ہم جواب دیں گے۔",

  "reason.youToldUs": "آپ نے ہمیں بتایا کہ #",
  "reason.and": "اور",
  "reason.youAskedAbout": "آپ نے # کے بارے میں پوچھا",
  "reason.runsIn": "یہ # میں ہوتا ہے",
  "reason.isOnline": "یہ آن لائن ہے، اس لیے آپ کہاں ہیں اس سے فرق نہیں پڑتا",
  "reason.acrossScotland": "یہ پورے سکاٹ لینڈ میں کھلا ہے",
  "reason.closest": "جو آپ نے بیان کیا، اس کے قریب ترین چیزوں میں سے یہ ایک ہے۔",
  "reason.clauseJoin": "، اور ",
};

const pa: Catalogue = {
  "language.label": "ਭਾਸ਼ਾ",
  "hero.title": "ਔਰਤਾਂ ਨੂੰ ਉਹ ਸਹਾਇਤਾ ਦਿਵਾਉਣਾ ਜਿਸ ਦੀ ਉਨ੍ਹਾਂ ਨੂੰ ਲੋੜ ਹੈ",
  "hero.body":
    "ਸਾਨੂੰ ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸੋ ਕਿ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ, ਅਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਕੁਝ ਅਗਲੇ ਕਦਮ ਦਿਖਾਵਾਂਗੇ ਜੋ ਚੁੱਕਣ ਯੋਗ ਹਨ। ਤਿੰਨ ਸਵਾਲ, ਕੋਈ ਖਾਤਾ ਨਹੀਂ ਚਾਹੀਦਾ।",
  "hero.cta": "ਹੱਲ ਲੱਭੋ",
  "hero.browse": "ਜਾਂ ਵੇਖੋ ਕੌਣ ਮੌਜੂਦ ਹੈ",
  "why.eyebrow": "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
  "why.title":
    "ਕਿਸੇ ਚੀਜ਼ ਦੇ ਹੋਣ ਦਾ ਪਤਾ ਹੋਣਾ ਤੇ ਉਸ ਦੇ ਤੁਹਾਡੇ ਲਈ ਖੁੱਲ੍ਹੀ ਹੋਣ ਦਾ ਪਤਾ ਹੋਣਾ ਇੱਕੋ ਗੱਲ ਨਹੀਂ",
  "hero.begin": "ਤੁਸੀਂ ਕਿੱਥੋਂ ਸ਼ੁਰੂ ਕਰਨਾ ਚਾਹੋਗੇ?",
  "hero.beginFind": "ਆਪਣਾ ਅਗਲਾ ਕਦਮ ਲੱਭੋ",
  "hero.beginBrowse": "ਵੇਖੋ ਕੌਣ ਮੌਜੂਦ ਹੈ",
  "how.oneTitle": "ਸਾਨੂੰ ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸੋ",
  "how.oneBody":
    "ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ, ਲਗਭਗ ਤੁਸੀਂ ਕਿੱਥੇ ਹੋ, ਅਤੇ ਤੁਹਾਡੀ ਸਥਿਤੀ ਬਾਰੇ ਕੁਝ ਵੀ। ਸਿਰਫ਼ ਤਿੰਨ ਸਵਾਲ।",
  "how.twoTitle": "ਅਸੀਂ ਇਸ ਨੂੰ ਤੋਲਦੇ ਹਾਂ",
  "how.twoBody":
    "ਇਸ ਆਧਾਰ ਉੱਤੇ ਕਿ ਹਰ ਚੀਜ਼ ਕਿਸ ਲਈ ਹੈ, ਕਿਸ ਲਈ ਖੁੱਲ੍ਹੀ ਹੈ, ਕਿੱਥੇ ਚੱਲਦੀ ਹੈ ਤੇ ਤੁਸੀਂ ਉਸ ਤੱਕ ਕਿਵੇਂ ਪਹੁੰਚ ਸਕਦੇ ਹੋ। ਨਤੀਜਾ ਏਆਈ ਨਾਲ ਚੱਲਦਾ ਹੈ।",
  "how.threeTitle": "ਤੁਹਾਨੂੰ ਕੁਝ ਅਸਲੀ ਵਿਕਲਪ ਮਿਲਦੇ ਹਨ",
  "how.threeBody":
    "ਮੁੱਠੀ ਭਰ, ਸੌ ਨਹੀਂ, ਹਰ ਇੱਕ ਨਾਲ ਇਹ ਕਿ ਉਹ ਕਿਉਂ ਮੇਲ ਖਾਂਦਾ ਹੈ, ਕੀ ਖ਼ਰਚ ਹੈ, ਕਿਸ ਲਈ ਹੈ, ਅਤੇ ਸੰਪਰਕ ਕਰਨ ਤੋਂ ਬਾਅਦ ਬਿਲਕੁਲ ਕੀ ਹੁੰਦਾ ਹੈ।",
  "how.forWomen": "ਔਰਤਾਂ ਲਈ",
  "how.forOrgs": "ਸੰਸਥਾਵਾਂ ਲਈ",
  "how.orgOneTitle": "ਸਾਨੂੰ ਦੱਸੋ ਤੁਸੀਂ ਕੌਣ ਹੋ",
  "how.orgOneBody":
    "ਕੁਝ ਸਵਾਲ ਕਿ ਤੁਸੀਂ ਕੀ ਕਰਦੇ ਹੋ, ਕਿਨ੍ਹਾਂ ਨੂੰ ਹੱਲ ਦੇਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਤੇ ਕਿੱਥੇ। ਰਜਿਸਟਰੇਸ਼ਨ ਤੇਜ਼ ਹੈ।",
  "how.orgTwoTitle": "ਅਸੀਂ ਇੱਕ ਵਾਰ ਤੁਹਾਡੀ ਜਾਂਚ ਕਰਦੇ ਹਾਂ",
  "how.orgTwoBody":
    "ਕਿਸੇ ਜਨਤਕ ਰਜਿਸਟਰ ਰਾਹੀਂ ਜਾਂ ਤੁਹਾਡੇ ਕੰਮ ਦੇ ਰਿਕਾਰਡ ਦੇ ਆਧਾਰ ਉੱਤੇ। ਉਸ ਪੁਸ਼ਟੀ ਤੋਂ ਬਾਅਦ ਜੋ ਚਾਹੋ, ਜਦੋਂ ਚਾਹੋ ਪੋਸਟ ਕਰੋ।",
  "how.orgThreeTitle": "ਉਹ ਤੁਹਾਨੂੰ ਉਦੋਂ ਲੱਭੇਗੀ ਜਦੋਂ ਤੁਸੀਂ ਢੁਕਵੇਂ ਹੋਵੋਗੇ",
  "how.orgThreeBody":
    "ਇਸ ਲਈ ਨਹੀਂ ਕਿ ਉਸ ਨੇ ਤੁਹਾਡਾ ਨਾਂ ਖੋਜਿਆ, ਸਗੋਂ ਇਸ ਲਈ ਕਿ ਉਸ ਦੀ ਦੱਸੀ ਗੱਲ ਤੁਹਾਡੇ ਪੇਸ਼ ਕੀਤੇ ਹੱਲ ਨਾਲ ਮੇਲ ਖਾਂਦੀ ਹੈ।",
  "origin.eyebrow": "ਇਹ ਕਿਉਂ ਹੈ",
  "origin.title": "ਇਸ ਦੀ ਸ਼ੁਰੂਆਤ ਅਜਿਹੇ ਹੀ ਇੱਕ ਕਮਰੇ ਤੋਂ ਹੋਈ",
  "origin.bodyOne":
    "Holistic Wellbeing Summit ਔਰਤਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਲੋਕਾਂ ਨਾਲ ਇੱਕ ਕਮਰੇ ਵਿੱਚ ਲਿਆਉਂਦਾ ਹੈ ਜੋ ਸੱਚਮੁੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹਨ। ਕੋਈ ਤੁਹਾਡੀ ਜਾਣ-ਪਛਾਣ ਕਰਾਉਂਦੀ ਹੈ। ਕੋਈ ਅਜਿਹੀ ਸਕੀਮ ਦਾ ਨਾਂ ਲੈਂਦੀ ਹੈ ਜਿਸ ਬਾਰੇ ਤੁਸੀਂ ਕਦੇ ਨਹੀਂ ਸੁਣਿਆ, ਅਤੇ ਹੁਣ ਤੁਹਾਨੂੰ ਪਤਾ ਹੈ ਕਿ ਉਹ ਮੌਜੂਦ ਹੈ।",
  "origin.bodyTwo":
    "ਫਿਰ ਕਮਰਾ ਖਾਲੀ ਹੋ ਜਾਂਦਾ ਹੈ। ਸੰਸਥਾਵਾਂ ਆਪਣੇ ਕੰਮ 'ਤੇ ਵਾਪਸ ਚਲੀਆਂ ਜਾਂਦੀਆਂ ਹਨ, ਅਤੇ ਔਰਤਾਂ ਨੂੰ ਮਦਦ ਦੀ ਲੋੜ ਬਣੀ ਰਹਿੰਦੀ ਹੈ। ਇਹ ਪਲੇਟਫਾਰਮ ਉਹੀ ਕਮਰਾ ਹੈ ਜਿਸ ਦੇ ਦਰਵਾਜ਼ੇ ਖੁੱਲ੍ਹੇ ਛੱਡ ਦਿੱਤੇ ਗਏ ਹਨ, ਹਰ ਉਸ ਔਰਤ ਲਈ ਜੋ ਕਦੇ ਉੱਥੇ ਨਹੀਂ ਸੀ।",
  "zones.eyebrow": "ਪਹੁੰਚ ਖੇਤਰ",
  "zones.title": "ਹਰ ਕਿਸਮ ਦੀ ਸਹਾਇਤਾ, ਇੱਕ ਪਲੇਟਫਾਰਮ",
  "zones.body":
    "ਕੰਮ, ਪੈਸਾ, ਸਿੱਖਿਆ, ਸਿਹਤ, ਕਾਰੋਬਾਰ, ਆਪਣੀ ਗੱਲ ਕਹਿਣ ਦਾ ਹੱਕ। ਜ਼ਿਆਦਾਤਰ ਔਰਤਾਂ ਨੂੰ ਇੱਕੋ ਸਮੇਂ ਇੱਕ ਤੋਂ ਵੱਧ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ, ਅਤੇ ਜ਼ਿਆਦਾਤਰ ਸੇਵਾਵਾਂ ਸਿਰਫ਼ ਇੱਕ ਹੀ ਕਰਦੀਆਂ ਹਨ, ਇਹੀ ਉਹ ਪਾੜਾ ਹੈ ਜਿਸ ਨੂੰ ਭਰਨ ਲਈ ਇਹ ਮੌਜੂਦ ਹੈ।",
  "zones.browse": "ਪਲੇਟਫਾਰਮ ’ਤੇ ਸਾਰਿਆਂ ਨੂੰ ਵੇਖੋ",
  "trust.checkedTitle": "ਪ੍ਰਮਾਣਿਤ ਸਮੱਗਰੀ",
  "trust.checkedBody":
    "ਇੱਥੇ ਹਰ ਸੰਸਥਾ ਦੀ ਕਿਸੇ ਜਨਤਕ ਰਜਿਸਟਰ ਜਾਂ ਉਸ ਦੇ ਫੰਡ ਦੇਣ ਵਾਲੇ ਰਾਹੀਂ ਪੁਸ਼ਟੀ ਕੀਤੀ ਗਈ ਹੈ, ਇਸ ਤੋਂ ਪਹਿਲਾਂ ਕਿ ਉਹ ਕੁਝ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰ ਸਕੇ। ਹਰ ਇੰਦਰਾਜ਼ ’ਤੇ ਆਖਰੀ ਪੁਸ਼ਟੀ ਦੀ ਤਾਰੀਖ ਹੁੰਦੀ ਹੈ।",
  "trust.privateTitle": "ਜਾਣਕਾਰੀ ਨਿੱਜੀ ਰਹਿੰਦੀ ਹੈ",
  "trust.privateBody":
    "ਖੋਜਣ, ਪੜ੍ਹਨ ਜਾਂ ਅਰਜ਼ੀ ਦੇਣ ਲਈ ਤੁਹਾਨੂੰ ਖਾਤੇ ਦੀ ਲੋੜ ਨਹੀਂ। ਤੁਸੀਂ ਜੋ ਲਿਖਦੀਆਂ ਹੋ ਉਹ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਨਤੀਜੇ ਕ੍ਰਮਬੱਧ ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਵੇਚਿਆ, ਅੱਗੇ ਦਿੱਤਾ ਜਾਂ ਤੁਹਾਡਾ ਪ੍ਰੋਫਾਈਲ ਬਣਾਉਣ ਲਈ ਨਹੀਂ ਵਰਤਿਆ ਜਾਂਦਾ।",
  "trust.paidTitle": "ਕੋਈ ਸਪਾਂਸਰ ਕੀਤੀ ਸਮੱਗਰੀ ਨਹੀਂ",
  "trust.paidBody":
    "ਕੋਈ ਅਦਾਇਗੀ ਵਾਲੀ ਥਾਂ ਜਾਂ ਇਸ਼ਤਿਹਾਰ ਨਹੀਂ ਹੈ। ਨਤੀਜੇ ਇਸ ਆਧਾਰ ’ਤੇ ਕ੍ਰਮਬੱਧ ਹੁੰਦੇ ਹਨ ਕਿ ਉਹ ਤੁਹਾਡੀ ਦੱਸੀ ਗੱਲ ਨਾਲ ਕਿੰਨੇ ਮੇਲ ਖਾਂਦੇ ਹਨ, ਅਤੇ ਹਰ ਇੰਦਰਾਜ਼ ਦੱਸਦਾ ਹੈ ਕਿ ਉਹ ਕਿਉਂ ਢੁਕਵਾਂ ਹੈ।",
  "orgs.title": "ਕੀ ਤੁਸੀਂ ਕੁਝ ਅਜਿਹਾ ਚਲਾ ਰਹੀਆਂ ਹੋ ਜਿਸ ਬਾਰੇ ਔਰਤਾਂ ਨੂੰ ਪਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ?",
  "orgs.body":
    "ਇਸ ਨੂੰ ਇੱਥੇ ਦਰਜ ਕਰੋ ਅਤੇ ਇਹ ਉਨ੍ਹਾਂ ਔਰਤਾਂ ਤੱਕ ਪਹੁੰਚੇਗਾ ਜਿਨ੍ਹਾਂ ਲਈ ਇਹ ਸੱਚਮੁੱਚ ਢੁਕਵਾਂ ਹੈ, ਨਾ ਕਿ ਜੋ ਕੋਈ ਵੀ ਤੁਹਾਡੀ ਵੈੱਬਸਾਈਟ ’ਤੇ ਪਹੁੰਚ ਜਾਵੇ। ਮੁਫ਼ਤ, ਅਤੇ ਅਸੀਂ ਤੁਹਾਡੀ ਇੱਕ ਵਾਰ ਜਾਂਚ ਕਰਦੇ ਹਾਂ, ਹਰ ਇੰਦਰਾਜ਼ ਦੀ ਨਹੀਂ।",
  "orgs.cta": "ਔਰਤਾਂ ਨੂੰ ਮਿਲੋ",

  "flow.back": "ਪਿੱਛੇ",
  "flow.questionOf": "ਸਵਾਲ # / 3",
  "flow.next": "ਅੱਗੇ",
  "flow.changeAnswers": "ਆਪਣੇ ਜਵਾਬ ਬਦਲੋ",
  "flow.searchCredit": "ਖੋਜ ਏਆਈ ਦੀ ਮਦਦ ਨਾਲ",
  "flow.orgPrompt": "ਕੀ ਤੁਸੀਂ ਕੋਈ ਅਦਾਰਾ ਜਾਂ ਵਿਅਕਤੀ ਹੋ ਜੋ ਔਰਤਾਂ ਲਈ ਹੱਲ ਦਿੰਦਾ ਹੈ?",
  "flow.orgLink": "ਅਦਾਰਿਆਂ ਲਈ",
  "q1.title": "ਤੁਹਾਨੂੰ ਕਿਸ ਚੀਜ਼ ਵਿੱਚ ਮਦਦ ਚਾਹੀਦੀ ਹੈ?",
  "q1.subline": "ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ। ਕੋਈ ਜਵਾਬ ਗਲਤ ਨਹੀਂ ਹੁੰਦਾ।",
  "q1.placeholder": "ਜਿਵੇਂ ਮਾਂ ਦੀ ਸੰਭਾਲ ਤੋਂ ਬਾਅਦ ਕੰਮ ਤੇ ਵਾਪਸੀ",
  "q1.blank": "ਕੁਝ ਸ਼ਬਦ ਲਿਖੋ ਤਾਂ ਜੋ ਸਾਨੂੰ ਪਤਾ ਲੱਗੇ ਕਿੱਥੇ ਵੇਖਣਾ ਹੈ।",
  "q1.searchOn": "ਅਸੀਂ ਉਸੇ ਉੱਤੇ ਖੋਜ ਕਰਾਂਗੇ ਜੋ ਤੁਸੀਂ ਲਿਖਿਆ।",
  "q1.suggestions": "ਸੁਝਾਅ",
  "q2.title": "ਅਸੀਂ ਸਹਾਰਾ ਕਿੱਥੇ ਲੱਭੀਏ?",
  "q2.subline": "ਕੋਈ ਕਸਬਾ, ਪੋਸਟ ਕੋਡ, ਜਾਂ ਤੁਹਾਡਾ ਕੌਂਸਲ ਇਲਾਕਾ।",
  "q2.placeholder": "ਜਿਵੇਂ EH48",
  "q2.unknown":
    "ਸਾਨੂੰ ਇਹ ਥਾਂ ਨਹੀਂ ਪਤਾ। ਕੋਈ ਨੇੜਲਾ ਕਸਬਾ ਅਜ਼ਮਾਓ, ਜਾਂ ਪੂਰੇ ਸਕਾਟਲੈਂਡ ਵਿੱਚ ਲੱਭੋ।",
  "q2.or": "ਜਾਂ",
  "q2.anywhere": "ਸਕਾਟਲੈਂਡ ਵਿੱਚ ਕਿਤੇ ਵੀ",
  "q2.onlineOnly": "ਸਿਰਫ਼ ਆਨਲਾਈਨ ਸਹਾਰਾ",
  "q2.hint": "ਕੋਈ ਥਾਂ ਲਿਖੋ, ਜਾਂ ਉੱਪਰ ਦਿੱਤੇ ਦੋ ਵਿੱਚੋਂ ਇੱਕ ਚੁਣੋ।",
  "q3.title": "ਤੁਹਾਡੀ ਹਾਲਤ ਨੂੰ ਸਭ ਤੋਂ ਵਧੀਆ ਕੀ ਬਿਆਨ ਕਰਦਾ ਹੈ?",
  "q3.subline":
    "ਇਸ ਨਾਲ ਸਾਨੂੰ ਉਹ ਸਹਾਰਾ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਮਿਲਦੀ ਹੈ ਜਿਸ ਦੇ ਤੁਸੀਂ ਹੱਕਦਾਰ ਹੋ ਸਕਦੇ ਹੋ। ਤੁਸੀਂ ਇੱਕ ਤੋਂ ਵੱਧ ਚੁਣ ਸਕਦੇ ਹੋ।",
  "q3.hint": "ਜੋ ਵੀ ਲਾਗੂ ਹੁੰਦਾ ਹੈ ਚੁਣੋ, ਜਾਂ 'ਦੱਸਣਾ ਨਹੀਂ ਚਾਹੁੰਦੀ' ਚੁਣੋ।",
  "q3.privacy":
    "ਅਸੀਂ ਤੁਹਾਡੇ ਜਵਾਬ ਨਾ ਸੰਭਾਲਦੇ ਹਾਂ ਤੇ ਨਾ ਹੀ ਉਨ੍ਹਾਂ ਅਦਾਰਿਆਂ ਨੂੰ ਦਿੰਦੇ ਹਾਂ ਜੋ ਅਸੀਂ ਤੁਹਾਨੂੰ ਦਿਖਾਉਂਦੇ ਹਾਂ।",
  "results.title": "ਤੁਹਾਡੇ ਲਈ ਅਗਲੇ ਕਦਮ",
  "results.refine": "ਸੀਮਤ ਕਰੋ ਜਾਂ ਵਧਾਓ",
  "results.ordered":
    "ਇਸ ਤਰਤੀਬ ਨਾਲ ਕਿ ਇਹ ਤੁਹਾਡੀ ਦੱਸੀ ਗੱਲ ਨਾਲ ਕਿੰਨਾ ਮੇਲ ਖਾਂਦੇ ਹਨ। ਇੱਥੇ ਆਉਣ ਲਈ ਕੋਈ ਪੈਸੇ ਨਹੀਂ ਦਿੰਦਾ।",
  "results.orgsOnly":
    "ਕੋਈ ਖੁੱਲ੍ਹੀ ਚੀਜ਼ ਇੰਨੀ ਨੇੜਿਓਂ ਮੇਲ ਨਹੀਂ ਖਾਂਦੀ, ਪਰ ਇਹ ਅਦਾਰੇ ਉਸੇ ਉੱਤੇ ਕੰਮ ਕਰਦੇ ਹਨ ਜਿਸ ਬਾਰੇ ਤੁਸੀਂ ਪੁੱਛਿਆ।",
  "results.thatsAll":
    "ਇਹੀ ਸਭ ਕੁਝ ਹੈ ਜੋ ਨੇੜਿਓਂ ਮੇਲ ਖਾਂਦਾ ਹੈ। ਤੁਸੀਂ ਖੋਜ ਵਧਾ ਸਕਦੇ ਹੋ ਜਾਂ ਆਪਣੀ ਗੱਲ ਬਦਲ ਸਕਦੇ ਹੋ।",
  "results.showScotland": "ਪੂਰੇ ਸਕਾਟਲੈਂਡ ਦਾ ਸਹਾਰਾ ਦਿਖਾਓ",
  "results.changeMine": "ਮੇਰੇ ਜਵਾਬ ਬਦਲੋ",
  "results.startOver": "ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ",
  "card.bestMatch": "ਸਭ ਤੋਂ ਵਧੀਆ ਮੇਲ",
  "card.save": "ਸੰਭਾਲੋ",
  "card.saved": "ਸੰਭਾਲਿਆ",
  "card.saveAria": "# ਸੰਭਾਲੋ",
  "card.savedAria": "ਸੰਭਾਲਿਆ: #",
  "card.whoFor": "ਇਹ ਕਿਸ ਲਈ ਹੈ",
  "card.whatToExpect": "ਕੀ ਉਮੀਦ ਰੱਖਣੀ ਹੈ",
  "card.whyMatched": "ਇਹ ਤੁਹਾਡੇ ਨਾਲ ਕਿਉਂ ਮੇਲ ਖਾਇਆ:",
  "card.learnMore": "ਹੋਰ ਜਾਣੋ",
  "card.missing": "ਅਜੇ ਭਰਿਆ ਨਹੀਂ",
  "card.closes": "# ਨੂੰ ਬੰਦ ਹੋਵੇਗਾ",
  "card.closed": "# ਨੂੰ ਬੰਦ ਹੋਇਆ",
  "card.verified": "ਤਸਦੀਕਸ਼ੁਦਾ",
  "card.verifiedOn": "ਤਸਦੀਕਸ਼ੁਦਾ · ਆਖ਼ਰੀ ਅੱਪਡੇਟ #",
  "nomatch.title": "ਇਸ ਵੇਲੇ ਸਾਨੂੰ ਤੁਹਾਡੇ ਲਈ ਕੁਝ ਨਹੀਂ ਮਿਲਿਆ",
  "nomatch.body":
    "ਇਸ ਦਾ ਮਤਲਬ ਇਹ ਨਹੀਂ ਕਿ ਮਦਦ ਹੈ ਹੀ ਨਹੀਂ। ਮਤਲਬ ਇਹ ਹੈ ਕਿ ਅੱਜ ਸਾਡੇ ਕੋਲ ਅਜਿਹਾ ਕੁਝ ਨਹੀਂ ਜੋ ਤੁਹਾਡੀ ਮੰਗ ਨਾਲ ਮੇਲ ਖਾਵੇ।",
  "nomatch.tryFirst": "ਪਹਿਲਾਂ ਇਹ ਅਜ਼ਮਾਓ",
  "nomatch.widen": "ਪੂਰੇ ਸਕਾਟਲੈਂਡ ਤੱਕ ਵਧਾਓ",
  "nomatch.onlineTitle": "ਸਿਰਫ਼ ਆਨਲਾਈਨ ਸਹਾਰਾ",
  "nomatch.changeTitle": "ਜੋ ਤੁਸੀਂ ਮੰਗਿਆ ਉਹ ਬਦਲੋ",
  "nomatch.changeNote":
    "ਵੱਖਰੇ ਸ਼ਬਦ ਕਈ ਵਾਰ ਵੱਖਰੀਆਂ ਚੀਜ਼ਾਂ ਲੱਭ ਲੈਂਦੇ ਹਨ। ਇੱਕ ਹੋਰ ਕੋਸ਼ਿਸ਼ ਬਣਦੀ ਹੈ।",
  "nomatch.startTitle": "ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ",
  "nomatch.startNote": "ਸਭ ਕੁਝ ਸਾਫ਼ ਕਰੋ ਤੇ ਪਹਿਲੇ ਸਵਾਲ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ।",
  "orgsAnswer.title": "ਇਹ ਲੋਕ ਵੀ ਮਦਦ ਕਰ ਸਕਦੇ ਹਨ",
  "orgsAnswer.body":
    "ਉਹ ਅਦਾਰੇ ਜੋ ਉਸੇ ਉੱਤੇ ਕੰਮ ਕਰਦੇ ਹਨ ਜਿਸ ਬਾਰੇ ਤੁਸੀਂ ਪੁੱਛਿਆ। ਹੋ ਸਕਦਾ ਹੈ ਹੁਣ ਉਨ੍ਹਾਂ ਕੋਲ ਕੁਝ ਖੁੱਲ੍ਹਾ ਨਾ ਹੋਵੇ, ਪਰ ਤੁਸੀਂ ਸਿੱਧਾ ਉਨ੍ਹਾਂ ਕੋਲ ਜਾ ਸਕਦੇ ਹੋ।",
  "talkcta.title": "ਕੀ ਤੁਸੀਂ ਕਿਸੇ ਨਾਲ ਗੱਲ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
  "talkcta.body":
    "ਕੋਈ ਜੋ ਜਾਣਦਾ ਹੈ ਕਿ ਕੀ ਉਪਲਬਧ ਹੈ, ਤੇ ਤੁਹਾਨੂੰ ਸਹੀ ਰਾਹ ਦਿਖਾ ਸਕਦਾ ਹੈ। ਆਪਣੀ ਸਹੂਲਤ ਦਾ ਸਮਾਂ ਚੁਣੋ। ਕੁਝ ਖ਼ਰਚ ਨਹੀਂ ਹੁੰਦਾ ਤੇ ਖਾਤੇ ਦੀ ਲੋੜ ਨਹੀਂ।",
  "talkcta.cta": "ਉਪਲਬਧ ਸਮੇਂ ਵੇਖੋ",
  "talkcta.note":
    "ਸਾਨੂੰ ਪਹਿਲਾਂ ਹੀ ਪਤਾ ਹੋਵੇਗਾ ਕਿ ਤੁਸੀਂ ਕੀ ਲੱਭ ਰਹੇ ਸੀ, ਇਸ ਲਈ ਦੁਬਾਰਾ ਸਮਝਾਉਣਾ ਨਹੀਂ ਪਵੇਗਾ।",
  "talkcta.today": "ਅੱਜ ਮਦਦ ਚਾਹੀਦੀ ਹੈ? ਹੁਣੇ ਸਾਡੇ ਨਾਲ ਗੱਲ ਕਰੋ।",
  "refine.back": "ਨਤੀਜਿਆਂ ਤੇ ਵਾਪਸ",
  "refine.title": "ਸੀਮਤ ਕਰੋ ਜਾਂ ਵਧਾਓ",
  "refine.howFar": "ਕਿੰਨੀ ਦੂਰ ਤੱਕ ਵੇਖਣਾ ਹੈ",
  "refine.onlyShow": "ਸਿਰਫ਼ ਇਹ ਦਿਖਾਓ",
  "refine.nothingMatches": "ਇਨ੍ਹਾਂ ਫਿਲਟਰਾਂ ਨਾਲ ਕੁਝ ਨਹੀਂ ਮਿਲਦਾ।",
  "refine.tryRemoving": "“#” ਹਟਾ ਕੇ ਵੇਖੋ।",
  "refine.inScope": "ਇੱਥੇ ਵੇਖ ਰਹੇ ਹਾਂ: #।",
  "refine.tryWiden": "ਖੋਜ ਦਾ ਘੇਰਾ ਵਧਾ ਕੇ ਵੇਖੋ।",
  "refine.update": "ਮੇਰੀ ਖੋਜ ਅੱਪਡੇਟ ਕਰੋ",
  "scope.myArea": "ਮੇਰਾ ਇਲਾਕਾ",
  "scope.nearby": "ਨੇੜਲੇ ਇਲਾਕੇ",
  "scope.allScotland": "ਸਾਰਾ ਸਕਾਟਲੈਂਡ",
  "scope.online": "ਸਿਰਫ਼ ਆਨਲਾਈਨ",
  "filter.free": "ਮੁਫ਼ਤ",
  "filter.openNow": "ਹੁਣ ਖੁੱਲ੍ਹਾ",
  "filter.noForms": "ਫਾਰਮ ਬਿਨਾਂ",
  "saved.title": "ਤੁਹਾਡੀ ਸੰਭਾਲੀ ਸੂਚੀ",
  "saved.titleNamed": "# ਦੀ ਸੰਭਾਲੀ ਸੂਚੀ",
  "saved.emptyBody":
    "ਜਦੋਂ ਤੁਹਾਨੂੰ ਕੋਈ ਅਜਿਹੀ ਚੀਜ਼ ਮਿਲੇ ਜਿਸ ਤੇ ਵਾਪਸ ਆਉਣਾ ਬਣਦਾ ਹੋਵੇ, ਉਸ ਉੱਤੇ ਸੰਭਾਲੋ ਦਬਾਓ। ਉਹ ਇੱਥੇ ਰਹੇਗੀ, ਤੇ ਬੰਦ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਅਸੀਂ ਤੁਹਾਨੂੰ ਦੱਸਾਂਗੇ।",
  "saved.emptyCta": "ਸਹਾਰਾ ਲੱਭੋ",
  "saved.soonest": "ਜੋ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਬੰਦ ਹੋ ਰਿਹਾ ਹੈ, ਉਹ ਪਹਿਲਾਂ।",
  "saved.seeWhatElse": "ਹੋਰ ਕੀ ਹੈ ਵੇਖੋ",
  "saved.findSomethingElse": "ਕੁਝ ਹੋਰ ਲੱਭੋ",
  "saved.settings": "ਯਾਦ-ਦਹਾਨੀਆਂ ਤੇ ਖਾਤੇ ਦੀਆਂ ਸੈਟਿੰਗਾਂ",
  "saved.noClosingDate": "ਬੰਦ ਹੋਣ ਦੀ ਤਾਰੀਖ਼ ਨਹੀਂ",
  "saved.noLongerRunning": "ਹੁਣ ਨਹੀਂ ਚੱਲ ਰਿਹਾ",
  "service.backToResults": "ਆਪਣੇ ਨਤੀਜਿਆਂ ਤੇ ਵਾਪਸ",
  "service.cost": "ਖਰਚਾ",
  "service.where": "ਕਿੱਥੇ",
  "service.howToTakePart": "ਹਿੱਸਾ ਕਿਵੇਂ ਲੈਣਾ ਹੈ",
  "service.continueTo": "# ਤੇ ਜਾਓ",
  "service.closedTitle": "ਇਹ ਬੰਦ ਹੋ ਚੁੱਕਾ ਹੈ",
  "service.closedBody":
    "ਇਹ ਮੁੜ ਹੋ ਸਕਦਾ ਹੈ। # ਤੁਹਾਨੂੰ ਦੱਸ ਸਕਦੇ ਹਨ ਕਿ ਅਗਲਾ ਕਦੋਂ ਖੁੱਲ੍ਹੇਗਾ, ਤੇ ਹੁਣ ਕੁਝ ਮਿਲਦਾ-ਜੁਲਦਾ ਉਪਲਬਧ ਹੋ ਸਕਦਾ ਹੈ।",
  "service.askNext": "ਪੁੱਛੋ ਅਗਲਾ ਕਦੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ",
  "service.findSimilar": "ਮਿਲਦਾ-ਜੁਲਦਾ ਸਹਾਰਾ ਲੱਭੋ",
  "service.somethingWrong": "ਇਸ ਵਿੱਚ ਕੁਝ ਗਲਤ ਹੈ?",
  "discover.title": "ਸਕਾਟਲੈਂਡ ਵਿੱਚ ਔਰਤਾਂ ਲਈ ਕੌਣ ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ",
  "discover.lede":
    "ਇੱਥੇ ਹਰ ਅਦਾਰੇ ਦੀ ਅਸੀਂ ਜਾਂਚ ਕੀਤੀ ਹੈ। ਨਾਮ ਨਾਲ ਲੱਭੋ, ਜਾਂ ਆਪਣੀ ਲੋੜ ਮੁਤਾਬਕ ਹੇਠਾਂ ਪੜ੍ਹਦੇ ਜਾਓ।",
  "discover.searchLabel": "ਅਦਾਰੇ ਨਾਮ ਨਾਲ ਜਾਂ ਉਨ੍ਹਾਂ ਦੇ ਕੰਮ ਨਾਲ ਲੱਭੋ",
  "discover.searchButton": "ਅਦਾਰੇ ਲੱਭੋ",
  "discover.orAnswer": "ਜਾਂ ਤਿੰਨ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦਿਓ ਤੇ ਅਸੀਂ ਤੁਹਾਡੇ ਲਈ ਲੱਭਾਂਗੇ",
  "discover.byZone": "ਪਹੁੰਚ ਖੇਤਰ ਮੁਤਾਬਕ ਵੇਖੋ",
  "discover.byZoneNote":
    "ਸਹਾਰੇ ਦੀਆਂ ਉਹ ਕਿਸਮਾਂ ਜਿਨ੍ਹਾਂ ਦੁਆਲੇ ਇਹ ਪਲੇਟਫਾਰਮ ਬਣਿਆ ਹੈ। ਹਰ ਇੱਕ ਉਸ ਵਿੱਚ ਕੰਮ ਕਰਦੇ ਅਦਾਰਿਆਂ ਤੱਕ ਲੈ ਜਾਂਦੀ ਹੈ।",
  "discover.nobodyYet": "ਅਜੇ ਇੱਥੇ ਕੋਈ ਨਹੀਂ",
  "discover.byNeed": "ਆਪਣੀ ਲੋੜ ਮੁਤਾਬਕ ਵੇਖੋ",
  "discover.byNeedNote": "ਜਿਵੇਂ ਤੁਸੀਂ ਬੋਲ ਕੇ ਕਹਿੰਦੇ, ਉਵੇਂ ਹੀ ਕਹੋ।",
  "zone.allZones": "ਸਾਰੇ ਪਹੁੰਚ ਖੇਤਰ",
  "zone.eyebrow": "ਪਹੁੰਚ ਖੇਤਰ",
  "zone.empty":
    "ਇਸ ਖੇਤਰ ਵਿੱਚ ਅਜੇ ਕੋਈ ਦਰਜ ਨਹੀਂ। ਇਸ ਦਾ ਮਤਲਬ ਇਹ ਨਹੀਂ ਕਿ ਮਦਦ ਹੈ ਹੀ ਨਹੀਂ, ਇਸ ਲਈ ਸਾਨੂੰ ਦੱਸੋ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ ਤੇ ਅਸੀਂ ਆਪਣੀ ਹਰ ਚੀਜ਼ ਵਿੱਚ ਵੇਖਾਂਗੇ।",
  "zone.tellUs": "ਸਾਨੂੰ ਦੱਸੋ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ",
  "zone.alsoWorks": "ਇਸ ਖੇਤਰ ਵਿੱਚ ਵੀ ਕੰਮ ਕਰਦੇ ਹਨ",
  "need.everything": "ਜੋ ਕੁਝ ਤੁਸੀਂ ਵੇਖ ਸਕਦੇ ਹੋ",
  "need.eyebrow": "ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ",
  "discover.eyebrow": "ਖੋਜੋ",
  "discover.searchAria": "ਖੋਜ",
  "discover.clear": "ਸਾਫ਼ ਕਰੋ",
  "discover.nothingMatches": "“#” ਨਾਲ ਕੁਝ ਨਹੀਂ ਮਿਲਦਾ",
  "discover.forQuery": "“#” ਲਈ",
  "discover.searchNote":
    "ਇਹ ਖਾਨਾ ਸਿਰਫ਼ ਨਾਵਾਂ ਤੇ ਵੇਰਵਿਆਂ ਵਿੱਚ ਵੇਖਦਾ ਹੈ। ਜੇ ਤੁਸੀਂ ਕਿਸੇ ਖ਼ਾਸ ਅਦਾਰੇ ਦੀ ਥਾਂ ਆਪਣੀ ਹਾਲਤ ਬਿਆਨ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਤਿੰਨ ਸਵਾਲ ਕਿਤੇ ਬਿਹਤਰ ਕੰਮ ਕਰਨਗੇ।",
  "discover.tryQuestions": "ਤਿੰਨ ਸਵਾਲ ਅਜ਼ਮਾਓ।",
  "need.emptyShort": "ਅਜੇ ਇਸ ਲਈ ਕੋਈ ਦਰਜ ਨਹੀਂ।",
  "need.workOnThis": "ਜਿਨ੍ਹਾਂ ਕੋਲ ਕੁਝ ਖੁੱਲ੍ਹਾ ਹੈ, ਉਹ ਪਹਿਲਾਂ ਹਨ।",
  "need.empty":
    "ਅਜੇ ਇਸ ਲਈ ਕੋਈ ਦਰਜ ਨਹੀਂ। ਇਸ ਦਾ ਮਤਲਬ ਇਹ ਨਹੀਂ ਕਿ ਮਦਦ ਹੈ ਹੀ ਨਹੀਂ, ਇਸ ਲਈ ਸਾਨੂੰ ਦੱਸੋ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ ਤੇ ਅਸੀਂ ਆਪਣੀ ਹਰ ਚੀਜ਼ ਵਿੱਚ ਵੇਖਾਂਗੇ।",
  "talk.title": "ਕਿਸੇ ਨਾਲ ਗੱਲ ਕਰੋ",
  "talk.pickTime": "ਆਪਣੀ ਸਹੂਲਤ ਦਾ ਸਮਾਂ ਚੁਣੋ",
  "talk.pickBody":
    "ਅਸੀਂ ਤੁਹਾਨੂੰ ਫ਼ੋਨ ਕਰਾਂਗੇ। ਲਗਭਗ ਅੱਧਾ ਘੰਟਾ ਲੱਗਦਾ ਹੈ, ਕੁਝ ਖ਼ਰਚ ਨਹੀਂ ਹੁੰਦਾ, ਤੇ ਖਾਤੇ ਦੀ ਲੋੜ ਨਹੀਂ।",
  "talk.noneTitle": "ਆਉਣ ਵਾਲੇ ਕੁਝ ਹਫ਼ਤਿਆਂ ਵਿੱਚ ਕੋਈ ਸਮਾਂ ਖਾਲੀ ਨਹੀਂ",
  "talk.noneBody":
    "ਇਹ ਆਮ ਨਹੀਂ, ਤੇ ਇਸ ਦਾ ਮਤਲਬ ਇਹ ਨਹੀਂ ਕਿ ਕੋਈ ਮਦਦ ਨਹੀਂ ਕਰ ਸਕਦਾ। ਸਾਡੇ ਨਾਲ ਰਾਬਤਾ ਕਰੋ ਤੇ ਅਸੀਂ ਇਸ ਕੈਲੰਡਰ ਤੋਂ ਬਾਹਰ ਕੋਈ ਸਮਾਂ ਕੱਢਾਂਗੇ।",
  "talk.otherWays": "ਸਾਡੇ ਤੱਕ ਪਹੁੰਚਣ ਦੇ ਹੋਰ ਰਾਹ",
  "talk.ukTime": "ਸਾਰੇ ਸਮੇਂ ਬਰਤਾਨਵੀ ਸਮੇਂ ਮੁਤਾਬਕ ਹਨ।",
  "talk.todayInstead":
    "ਤੈਅ ਸਮੇਂ ਦੀ ਥਾਂ ਅੱਜ ਮਦਦ ਚਾਹੀਦੀ ਹੈ? ਸਾਡੇ ਤੱਕ ਪਹੁੰਚਣ ਦੇ ਤੇਜ਼ ਰਾਹ ਵੀ ਹਨ।",
  "booking.name": "ਤੁਹਾਡਾ ਨਾਮ",
  "booking.nameNote": "ਤੁਹਾਨੂੰ ਕਿਸ ਨਾਮ ਨਾਲ ਬੁਲਾਈਏ",
  "booking.email": "ਈਮੇਲ ਪਤਾ",
  "booking.emailNote":
    "ਅਸੀਂ ਸਮਾਂ ਇੱਥੇ ਭੇਜਦੇ ਹਾਂ, ਨਾਲ ਇੱਕ ਕੈਲੰਡਰ ਫਾਈਲ ਜੋ ਤੁਸੀਂ ਇੱਕ ਟੈਪ ਨਾਲ ਜੋੜ ਸਕਦੇ ਹੋ।",
  "booking.phone": "ਫ਼ੋਨ ਨੰਬਰ",
  "booking.phoneNote": "ਸਿਰਫ਼ ਜੇ ਤੁਸੀਂ ਈਮੇਲ ਦੀ ਥਾਂ ਫ਼ੋਨ ਕਾਲ ਪਸੰਦ ਕਰਦੇ ਹੋ।",
  "booking.notes": "ਕੁਝ ਜੋ ਤੁਸੀਂ ਸਾਨੂੰ ਪਹਿਲਾਂ ਦੱਸਣਾ ਚਾਹੋ",
  "booking.notesNote": "ਇਖ਼ਤਿਆਰੀ। ਇਹ ਸਿਰਫ਼ ਉਹੀ ਪੜ੍ਹੇਗਾ ਜੋ ਤੁਹਾਨੂੰ ਫ਼ੋਨ ਕਰੇਗਾ।",
  "booking.optional": "ਇਖ਼ਤਿਆਰੀ",
  "booking.submit": "ਇਹ ਸਮਾਂ ਬੁੱਕ ਕਰੋ",
  "confirm.title": "ਆਪਣੀ ਕਾਲ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
  "confirm.pickDifferent": "ਕੋਈ ਹੋਰ ਸਮਾਂ ਚੁਣੋ",
  "confirm.privacy":
    "ਅਸੀਂ ਤੁਹਾਡਾ ਨਾਮ ਤੇ ਈਮੇਲ ਸਿਰਫ਼ ਕਾਲ ਕਰਨ ਲਈ ਵਰਤਦੇ ਹਾਂ। ਕੋਈ ਖਾਤਾ ਨਹੀਂ ਬਣਦਾ, ਤੇ ਤੁਹਾਨੂੰ ਕਿਸੇ ਸੂਚੀ ਵਿੱਚ ਨਹੀਂ ਪਾਇਆ ਜਾਂਦਾ।",
  "booked.title": "ਬੁੱਕ ਹੋ ਗਿਆ",
  "booked.sent":
    "ਅਸੀਂ ਸਮਾਂ ਤੁਹਾਡੇ ਇਨਬਾਕਸ ਵਿੱਚ ਭੇਜ ਦਿੱਤਾ ਹੈ, ਨਾਲ ਇੱਕ ਕੈਲੰਡਰ ਫਾਈਲ ਜੋ ਤੁਸੀਂ ਇੱਕ ਟੈਪ ਨਾਲ ਆਪਣੇ ਫ਼ੋਨ ਵਿੱਚ ਜੋੜ ਸਕਦੇ ਹੋ। ਪਹੁੰਚਣ ਵਿੱਚ ਇੱਕ ਮਿੰਟ ਲੱਗ ਸਕਦਾ ਹੈ।",
  "booked.reference": "ਤੁਹਾਡਾ ਹਵਾਲਾ ਨੰਬਰ",
  "booked.prepare":
    "ਤਿਆਰੀ ਦੀ ਲੋੜ ਨਹੀਂ। ਜੋ ਤੁਹਾਨੂੰ ਫ਼ੋਨ ਕਰੇਗਾ ਉਹ ਪਹਿਲਾਂ ਹੀ ਪੜ੍ਹ ਚੁੱਕਾ ਹੋਵੇਗਾ ਕਿ ਤੁਸੀਂ ਕੀ ਲੱਭ ਰਹੇ ਸੀ, ਇਸ ਲਈ ਸ਼ੁਰੂ ਤੋਂ ਦੱਸਣਾ ਨਹੀਂ ਪਵੇਗਾ।",
  "booked.move":
    "ਜੇ ਸਮਾਂ ਠੀਕ ਨਾ ਰਹੇ ਤਾਂ ਉਸੇ ਈਮੇਲ ਦਾ ਜਵਾਬ ਦਿਓ, ਅਸੀਂ ਇਸ ਨੂੰ ਬਦਲ ਦੇਵਾਂਗੇ।",
  "booked.keepLooking": "ਇਸ ਦੌਰਾਨ ਲੱਭਦੇ ਰਹੋ",
  "booked.backToStart": "ਸ਼ੁਰੂ ਤੇ ਵਾਪਸ",
  "account.title": "ਆਪਣੇ ਖਾਤੇ ਤੱਕ ਪਹੁੰਚ",
  "account.saveIt": "ਸੰਭਾਲਣ ਲਈ ਸਾਈਨ ਇਨ ਕਰੋ",
  "account.saveBody":
    "ਇੱਥੇ ਸਿਰਫ਼ ਸੰਭਾਲਣ ਲਈ ਖਾਤੇ ਦੀ ਲੋੜ ਹੈ, ਤਾਂ ਜੋ ਅਗਲੀ ਵਾਰ ਤੁਹਾਡੀ ਸੂਚੀ ਮੌਜੂਦ ਹੋਵੇ। ਜਿਸ ਚੀਜ਼ ਤੇ ਤੁਸੀਂ ਹੁਣੇ ਸੰਭਾਲੋ ਦਬਾਇਆ, ਉਹ ਅਸੀਂ ਰੱਖ ਲਈ ਹੈ ਤੇ ਅੰਦਰ ਆਉਂਦਿਆਂ ਹੀ ਮਿਲ ਜਾਵੇਗੀ।",
  "account.otp":
    "ਅਸੀਂ ਤੁਹਾਨੂੰ ਸਾਈਨ ਇਨ ਲਈ ਇੱਕ ਵਾਰ ਦਾ ਕੋਡ ਭੇਜਾਂਗੇ। ਕੋਈ ਪਾਸਵਰਡ ਯਾਦ ਨਹੀਂ ਰੱਖਣਾ ਪਵੇਗਾ।",
  "account.emailPrivate": "ਤੁਹਾਡਾ ਈਮੇਲ ਨਿੱਜੀ ਤੇ ਸੁਰੱਖਿਅਤ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ।",
  "account.carryOn": "ਸੰਭਾਲੇ ਬਿਨਾਂ ਅੱਗੇ ਵਧੋ",
  "account.signInHere": "ਇੱਥੇ ਸਾਈਨ ਇਨ ਕਰੋ",
  "code.title": "ਆਪਣਾ ਈਮੇਲ ਵੇਖੋ",
  "code.sentTo": "ਅਸੀਂ ਸਾਈਨ ਇਨ ਕੋਡ ਇੱਥੇ ਭੇਜਿਆ ਹੈ:",
  "code.justSearch": "ਸਾਈਨ ਇਨ ਕੀਤੇ ਬਿਨਾਂ ਹੀ ਲੱਭੋ",
  "code.enterBelow": "ਹੇਠਾਂ ਦਰਜ ਕਰੋ ਤੇ ਤੁਸੀਂ ਅੰਦਰ ਹੋ।",
  "code.arrive":
    "ਇਹ ਇੱਕ ਮਿੰਟ ਵਿੱਚ ਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਜੇ ਨਾ ਆਇਆ ਤਾਂ ਆਪਣਾ ਸਪੈਮ ਜਾਂ ਜੰਕ ਫੋਲਡਰ ਵੇਖੋ।",
  "code.different": "ਕੋਈ ਹੋਰ ਪਤਾ ਵਰਤੋ",
  "profile.title": "ਆਪਣਾ ਪ੍ਰੋਫਾਈਲ ਬਣਾਓ",
  "profile.subline":
    "ਬੱਸ ਇੱਕ ਨਾਮ ਤਾਂ ਜੋ ਅਸੀਂ ਤੁਹਾਨੂੰ ਬੁਲਾ ਸਕੀਏ। ਇੱਥੇ ਕੁਝ ਵੀ ਲਾਜ਼ਮੀ ਨਹੀਂ।",

  "nav.home": "ਘਰ",
  "nav.discover": "ਖੋਜੋ",
  "nav.forOrgs": "ਅਦਾਰਿਆਂ ਲਈ",
  "nav.faq": "ਆਮ ਸਵਾਲ",
  "nav.signIn": "ਸਾਈਨ ਇਨ",
  "nav.signOut": "ਸਾਈਨ ਆਊਟ",
  "nav.saved": "ਸੰਭਾਲੇ",
  "nav.settings": "ਸੈਟਿੰਗਾਂ",
  "nav.remindersSettings": "ਯਾਦ-ਦਹਾਨੀਆਂ ਤੇ ਸੈਟਿੰਗਾਂ",
  "nav.sections": "ਹਿੱਸੇ",
  "nav.menu": "ਮੀਨੂ",
  "nav.homeAria": "HWS Pathgrid, ਘਰ",
  "nav.findNext": "ਆਪਣਾ ਅਗਲਾ ਕਦਮ ਲੱਭੋ",
  "footer.label": "ਫੁੱਟਰ",
  "footer.tagline":
    "ਔਰਤਾਂ ਨੂੰ ਮੌਕਿਆਂ ਨਾਲ ਜੋੜਨਾ — ਇੱਕ ਕਮਰੇ, ਇੱਕ ਪੋਸਟ ਕੋਡ ਜਾਂ ਇੱਕ ਦਿਨ ਤੋਂ ਅੱਗੇ।",
  "footer.free":
    "ਵਰਤੋਂ ਮੁਫ਼ਤ ਹੈ, ਤੇ ਲੱਭਣ, ਪੜ੍ਹਨ ਜਾਂ ਅਰਜ਼ੀ ਦੇਣ ਲਈ ਖਾਤੇ ਦੀ ਲੋੜ ਨਹੀਂ।",
  "footer.forYou": "ਤੁਹਾਡੇ ਲਈ",
  "footer.find": "ਹੱਲ ਲੱਭੋ",
  "footer.discover": "ਅਦਾਰੇ ਖੋਜੋ",
  "footer.faq": "ਆਮ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",
  "footer.help": "ਮਦਦ",
  "footer.forOrgs": "ਅਦਾਰਿਆਂ ਲਈ",
  "footer.meetWomen": "ਔਰਤਾਂ ਨੂੰ ਮਿਲੋ",
  "footer.whyList": "ਸਾਡੇ ਨਾਲ ਕਿਉਂ ਦਰਜ ਹੋਵੋ",
  "footer.whoListed": "ਕੌਣ ਪਹਿਲਾਂ ਹੀ ਦਰਜ ਹੈ",
  "footer.legal": "ਕਾਨੂੰਨੀ",
  "footer.privacy": "ਪਰਦੇਦਾਰੀ ਨੀਤੀ",
  "footer.terms": "ਵਰਤੋਂ ਦੀਆਂ ਸ਼ਰਤਾਂ",
  "footer.talk": "ਕਿਸੇ ਵਿਅਕਤੀ ਨਾਲ ਗੱਲ ਕਰੋ",
  "cookie.region": "ਕੂਕੀਜ਼ ਬਾਰੇ",
  "cookie.claim":
    "ਅਸੀਂ ਕੁਝ ਕੂਕੀਜ਼ ਵਰਤਦੇ ਹਾਂ, ਤੇ ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕੋਈ ਤੁਹਾਡੀ ਨਿਗਰਾਨੀ ਨਹੀਂ ਕਰਦੀ।",
  "cookie.detail":
    "ਇਹ ਤੁਹਾਨੂੰ ਸਾਈਨ ਇਨ ਰੱਖਦੀਆਂ ਹਨ ਤੇ ਤੁਹਾਡੀ ਭਾਸ਼ਾ ਯਾਦ ਰੱਖਦੀਆਂ ਹਨ। ਕੁਝ ਟਰੈਕ ਜਾਂ ਵੇਚਿਆ ਨਹੀਂ ਜਾਂਦਾ।",
  "cookie.more": "ਹੋਰ ਪਰਦੇਦਾਰੀ ਨੀਤੀ ਵਿੱਚ",
  "cookie.okay": "\u0a20\u0a40\u0a15 \u0a39\u0a48",
  "loading.page": "\u0a07\u0a39 \u0a38\u0a2b\u0a3c\u0a3e \u0a32\u0a4b\u0a21 \u0a39\u0a4b \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48",
  "loading.organisations": "\u0a05\u0a26\u0a3e\u0a30\u0a47 \u0a32\u0a4b\u0a21 \u0a39\u0a4b \u0a30\u0a39\u0a47 \u0a39\u0a28",
  "loading.organisation": "\u0a07\u0a39 \u0a05\u0a26\u0a3e\u0a30\u0a3e \u0a32\u0a4b\u0a21 \u0a39\u0a4b \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48",
  "loading.saved": "\u0a24\u0a41\u0a39\u0a3e\u0a21\u0a40 \u0a38\u0a70\u0a2d\u0a3e\u0a32\u0a40 \u0a38\u0a42\u0a1a\u0a40 \u0a32\u0a4b\u0a21 \u0a39\u0a4b \u0a30\u0a39\u0a40 \u0a39\u0a48",
  "loading.listing": "\u0a07\u0a39 \u0a07\u0a70\u0a26\u0a30\u0a3e\u0a1c \u0a32\u0a4b\u0a21 \u0a39\u0a4b \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48",

  "faq.title": "ਆਮ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",
  "faq.lede":
    "HWS Path Grid ਸਕਾਟਲੈਂਡ ਭਰ ਦੀਆਂ ਔਰਤਾਂ ਨੂੰ ਉਸ ਸਹਾਰੇ ਨਾਲ ਜੋੜਦਾ ਹੈ ਜੋ ਸੱਚਮੁੱਚ ਉਨ੍ਹਾਂ ਲਈ ਢੁਕਵਾਂ ਹੋਵੇ, ਤੇ ਪਿੱਛੇ ਖੜ੍ਹੇ ਅਦਾਰਿਆਂ ਨੂੰ ਇੱਕ ਥਾਂ ਦਿੰਦਾ ਹੈ ਜਿੱਥੇ ਉਨ੍ਹਾਂ ਨੂੰ ਲੱਭਿਆ ਜਾ ਸਕੇ।",
  "faq.notHere":
    "ਜੇ ਤੁਹਾਡਾ ਲੋੜੀਂਦਾ ਜਵਾਬ ਇੱਥੇ ਨਹੀਂ ਹੈ, ਤਾਂ ਅਸੀਂ ਹਰ ਸੁਨੇਹੇ ਦਾ ਜਵਾਬ ਦਿੰਦੇ ਹਾਂ।",
  "faq.talkPerson": "ਕਿਸੇ ਵਿਅਕਤੀ ਨਾਲ ਗੱਲ ਕਰੋ।",
  "faq.forWomen": "ਜੇ ਤੁਸੀਂ ਸਹਾਰਾ ਲੱਭ ਰਹੇ ਹੋ",
  "faq.forOrgs": "ਜੇ ਤੁਸੀਂ ਇੱਕ ਅਦਾਰਾ ਹੋ",

  "meta.home.title": "ਸਕਾਟਲੈਂਡ ਵਿੱਚ ਔਰਤਾਂ ਲਈ ਸਹਾਰਾ ਲੱਭੋ",
  "meta.home.desc":
    "ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸੋ ਕਿ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ ਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਕੁਝ ਅਜਿਹੇ ਅਗਲੇ ਕਦਮ ਦਿਖਾਵਾਂਗੇ ਜੋ ਚੁੱਕਣ ਦੇ ਲਾਇਕ ਹਨ। ਹਰ ਅਦਾਰਾ ਜਾਂਚਿਆ ਹੋਇਆ ਹੈ। ਖਾਤੇ ਦੀ ਲੋੜ ਨਹੀਂ।",
  "meta.find.desc":
    "ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸੋ ਕਿ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ। ਤਿੰਨ ਸਵਾਲ, ਖਾਤੇ ਬਿਨਾਂ, ਤੇ ਅਸੀਂ ਸਕਾਟਲੈਂਡ ਦੇ ਹਰ ਜਾਂਚੇ ਅਦਾਰੇ ਵਿੱਚ ਵੇਖਾਂਗੇ।",
  "meta.where.desc":
    "ਦੱਸੋ ਤੁਸੀਂ ਕਿੱਥੇ ਹੋ ਤਾਂ ਜੋ ਅਸੀਂ ਪਹਿਲਾਂ ਉਹ ਰੱਖੀਏ ਜੋ ਤੁਹਾਡੇ ਨੇੜੇ ਹੈ, ਤੇ ਉਹ ਵੀ ਦਿਖਾਈਏ ਜੋ ਸਭ ਲਈ ਖੁੱਲ੍ਹਾ ਹੈ।",
  "meta.situation.desc":
    "ਜੋ ਵੀ ਢੁਕਦਾ ਹੈ ਚੁਣੋ। ਇਸ ਨਾਲ ਬਦਲਦਾ ਹੈ ਕਿ ਅਸੀਂ ਤੁਹਾਡੇ ਅੱਗੇ ਕੀ ਰੱਖਦੇ ਹਾਂ।",
  "meta.results.desc":
    "ਉਹ ਸਹਾਰਾ ਜੋ ਅਸੀਂ ਤੁਹਾਡੇ ਲਈ ਲੱਭਿਆ, ਨਾਲ ਇਹ ਕਾਰਨ ਕਿ ਹਰ ਇੱਕ ਇੱਥੇ ਕਿਉਂ ਹੈ।",
  "meta.refine.desc":
    "ਆਪਣੀ ਖੋਜ ਸੀਮਤ ਕਰੋ ਜਾਂ ਵਧਾਓ, ਜਦੋਂ ਨਤੀਜਿਆਂ ਦਾ ਪਹਿਲਾ ਸੈੱਟ ਠੀਕ ਨਾ ਹੋਵੇ।",
  "meta.change.title": "ਆਪਣੇ ਜਵਾਬ ਬਦਲੋ",
  "meta.change.desc":
    "ਜੋ ਤੁਸੀਂ ਸਾਨੂੰ ਦੱਸਿਆ ਉਹ ਬਦਲੋ ਤੇ ਅਸੀਂ ਸਾਰੇ ਅਦਾਰਿਆਂ ਵਿੱਚ ਦੁਬਾਰਾ ਵੇਖਾਂਗੇ।",
  "meta.startOver.desc": "ਆਪਣੇ ਜਵਾਬ ਸਾਫ਼ ਕਰੋ ਤੇ ਤਿੰਨੋ ਸਵਾਲ ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ।",
  "meta.discover.title": "ਸਕਾਟਲੈਂਡ ਭਰ ਦੇ ਅਦਾਰੇ ਖੋਜੋ",
  "meta.discover.desc":
    "ਸਕਾਟਲੈਂਡ ਭਰ ਵਿੱਚ ਔਰਤਾਂ ਨਾਲ ਕੰਮ ਕਰਦੇ ਅਦਾਰੇ ਵੇਖੋ, ਉਨ੍ਹਾਂ ਵੱਲੋਂ ਦਿੱਤੇ ਸਹਾਰੇ ਦੀ ਕਿਸਮ ਮੁਤਾਬਕ ਜਾਂ ਆਪਣੀ ਲੋੜ ਮੁਤਾਬਕ।",
  "meta.faq.desc":
    "ਔਰਤਾਂ ਇਹ ਸਾਈਟ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਕੀ ਪੁੱਛਦੀਆਂ ਹਨ, ਤੇ ਅਦਾਰੇ ਦਰਜ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਕੀ ਪੁੱਛਦੇ ਹਨ। ਸਿੱਧੇ ਜਵਾਬ।",
  "meta.orgs.desc":
    "ਜੋ ਤੁਸੀਂ ਚਲਾਉਂਦੇ ਹੋ ਉਹ HWS Path Grid ਉੱਤੇ ਦਰਜ ਕਰੋ ਤੇ ਉਨ੍ਹਾਂ ਔਰਤਾਂ ਤੱਕ ਪਹੁੰਚੋ ਜਿਨ੍ਹਾਂ ਲਈ ਉਹ ਸੱਚਮੁੱਚ ਢੁਕਵਾਂ ਹੈ। ਮੁਫ਼ਤ, ਇੱਕ ਵਾਰ ਜਾਂਚ, ਤੇ ਕੋਈ ਦਿਸਣ ਲਈ ਪੈਸੇ ਨਹੀਂ ਦਿੰਦਾ।",
  "meta.go.title": "ਅਰਜ਼ੀ ਲਈ ਜਾ ਰਹੇ ਹੋ",
  "meta.go.desc":
    "ਅਸੀਂ ਤੁਹਾਨੂੰ ਅਦਾਰੇ ਦੇ ਆਪਣੇ ਸਫ਼ੇ ਤੇ ਲੈ ਜਾ ਰਹੇ ਹਾਂ ਤਾਂ ਜੋ ਤੁਸੀਂ ਉੱਥੇ ਅਰਜ਼ੀ ਦੇ ਸਕੋ।",
  "meta.help.desc":
    "ਜੇ ਤੁਹਾਨੂੰ ਲੋੜੀਂਦੀ ਚੀਜ਼ ਨਾ ਮਿਲੇ, ਜਾਂ ਇੱਥੇ ਕੁਝ ਗਲਤ ਲੱਗੇ, ਤਾਂ ਸਾਨੂੰ ਦੱਸੋ। ਅਸੀਂ ਚਾਹਾਂਗੇ ਕਿ ਤੁਸੀਂ ਸਾਨੂੰ ਕਹੋ, ਨਾ ਕਿ ਹਾਰ ਮੰਨ ਲਵੋ।",
  "meta.saved.desc": "ਜੋ ਕੁਝ ਤੁਸੀਂ ਸੰਭਾਲਿਆ, ਇੱਕੋ ਥਾਂ।",
  "meta.privacy.desc":
    "ਜਦੋਂ ਤੁਸੀਂ ਸਾਈਟ ਵਰਤਦੇ ਹੋ ਤਾਂ HWS Path Grid ਕੀ ਇਕੱਠਾ ਕਰਦਾ ਹੈ, ਕਿਉਂ, ਤੇ ਉਸ ਨਾਲ ਅਸੀਂ ਕਦੇ ਕੀ ਨਹੀਂ ਕਰਾਂਗੇ।",
  "meta.terms.desc":
    "HWS Path Grid ਵਰਤਣ ਦੇ ਨਿਯਮ, ਉਨ੍ਹਾਂ ਔਰਤਾਂ ਲਈ ਜੋ ਇੱਥੇ ਲੱਭਦੀਆਂ ਹਨ ਤੇ ਉਨ੍ਹਾਂ ਅਦਾਰਿਆਂ ਲਈ ਜੋ ਇੱਥੇ ਦਰਜ ਹਨ।",
  "meta.talk.desc":
    "ਕਿਸੇ ਅਜਿਹੇ ਵਿਅਕਤੀ ਨਾਲ ਮੁਫ਼ਤ ਕਾਲ ਬੁੱਕ ਕਰੋ ਜੋ ਤੁਹਾਨੂੰ ਸਹੀ ਰਾਹ ਦਿਖਾ ਸਕੇ।",
  "meta.confirm.desc": "ਤੁਹਾਡੀ ਕਾਲ ਬੁੱਕ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਆਖ਼ਰੀ ਕਦਮ।",
  "meta.booked.title": "ਤੁਹਾਡੀ ਕਾਲ ਬੁੱਕ ਹੋ ਗਈ",
  "meta.booked.desc": "ਅੱਗੇ ਕੀ ਹੁੰਦਾ ਹੈ।",
  "meta.account.desc":
    "ਸਾਈਨ ਇਨ ਕਰੋ ਜਾਂ ਖਾਤਾ ਬਣਾਓ, ਤਾਂ ਜੋ ਤੁਹਾਡਾ ਸੰਭਾਲਿਆ ਸਹਾਰਾ ਅਗਲੀ ਵਾਰ ਆਉਣ ਤੇ ਮੌਜੂਦ ਹੋਵੇ।",
  "meta.accountCode.desc": "ਅਸੀਂ ਤੁਹਾਨੂੰ ਸਾਈਨ ਇਨ ਲਈ ਛੇ ਅੰਕਾਂ ਦਾ ਕੋਡ ਭੇਜਿਆ ਹੈ।",
  "meta.profile.desc":
    "ਆਪਣਾ ਨਾਮ ਜੋੜੋ ਤਾਂ ਜੋ ਅਸੀਂ ਤੁਹਾਨੂੰ ਠੀਕ ਤਰ੍ਹਾਂ ਸੰਬੋਧਨ ਕਰ ਸਕੀਏ। ਇੱਥੇ ਕੁਝ ਵੀ ਲਾਜ਼ਮੀ ਨਹੀਂ।",
  "meta.settings.desc":
    "ਤੁਹਾਡੀਆਂ ਯਾਦ-ਦਹਾਨੀਆਂ, ਤੁਹਾਡੀ ਭਾਸ਼ਾ, ਤੇ ਤੁਹਾਡੇ ਖਾਤੇ ਨਾਲ ਕੀ ਹੁੰਦਾ ਹੈ।",
  "meta.emailChange.title": "ਆਪਣਾ ਈਮੇਲ ਪਤਾ ਬਦਲੋ",
  "meta.emailChange.desc":
    "ਆਪਣਾ ਖਾਤਾ, ਤੇ ਉਸ ਉੱਤੇ ਸੰਭਾਲਿਆ ਸਭ ਕੁਝ, ਕਿਸੇ ਹੋਰ ਪਤੇ ਤੇ ਲੈ ਜਾਓ।",
  "meta.emailCode.title": "ਆਪਣਾ ਨਵਾਂ ਇਨਬਾਕਸ ਵੇਖੋ",
  "meta.emailCode.desc": "ਉਹ ਕੋਡ ਦਰਜ ਕਰੋ ਜੋ ਅਸੀਂ ਤੁਹਾਡੇ ਨਵੇਂ ਪਤੇ ਤੇ ਭੇਜਿਆ ਹੈ।",

  "settings.savedList": "ਮੇਰੀ ਸੰਭਾਲੀ ਸੂਚੀ",
  "settings.reminders": "ਯਾਦ-ਦਹਾਨੀਆਂ",
  "settings.howFar": "ਕਿੰਨਾ ਪਹਿਲਾਂ",
  "settings.nothingElse":
    "ਅਸੀਂ ਇਸ ਤੋਂ ਇਲਾਵਾ ਕੁਝ ਨਹੀਂ ਭੇਜਦੇ। ਨਾ ਨਿਊਜ਼ਲੈਟਰ, ਨਾ ਸੁਝਾਅ।",
  "settings.neverName":
    "ਯਾਦ-ਦਹਾਨੀ ਦੀਆਂ ਈਮੇਲਾਂ ਕਦੇ ਸਹਾਰੇ ਦੀ ਕਿਸਮ ਦਾ ਨਾਮ ਨਹੀਂ ਲੈਂਦੀਆਂ, ਇਸ ਸੂਰਤ ਵਿੱਚ ਕਿ ਤੁਹਾਡਾ ਇਨਬਾਕਸ ਕੋਈ ਹੋਰ ਪੜ੍ਹੇ।",
  "settings.emailChanged":
    "ਹੋ ਗਿਆ। ਤੁਹਾਡਾ ਖਾਤਾ ਹੁਣ ਇਸੇ ਪਤੇ ਤੇ ਹੈ, ਤੇ ਤੁਹਾਡੀ ਸੰਭਾਲੀ ਸੂਚੀ ਵੀ ਨਾਲ ਆ ਗਈ।",
  "reminders.beforeDeadline": "ਆਖ਼ਰੀ ਤਾਰੀਖ਼ ਤੋਂ ਪਹਿਲਾਂ",
  "change.heard": "ਅਸੀਂ ਇਹ ਸਮਝਿਆ",
  "change.weWillShow":
    "ਅਸੀਂ ਤੁਹਾਨੂੰ ਥੋੜ੍ਹੇ ਜਿਹੇ ਅਗਲੇ ਕਦਮ ਦਿਖਾਵਾਂਗੇ, ਸਭ ਤੋਂ ਢੁਕਵਾਂ ਪਹਿਲਾਂ। ਇੱਥੇ ਆਉਣ ਲਈ ਕੋਈ ਪੈਸੇ ਨਹੀਂ ਦਿੰਦਾ।",
  "startover.confirm": "ਇਸ ਨਾਲ ਤੁਹਾਡੇ ਜਵਾਬ ਸਾਫ਼ ਹੋ ਜਾਣਗੇ। ਮੁੜ ਸ਼ੁਰੂ ਕਰੀਏ?",
  "startover.note":
    "ਜੋ ਕੁਝ ਤੁਸੀਂ ਸੰਭਾਲਿਆ ਉਹ ਆਪਣੀ ਥਾਂ ਰਹੇਗਾ। ਸਿਰਫ਼ ਉਹ ਜਾਂਦਾ ਹੈ ਜੋ ਤੁਸੀਂ ਆਪਣੀ ਲੋੜ ਬਾਰੇ ਦੱਸਿਆ।",
  "startover.yes": "ਹਾਂ, ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ",
  "startover.keep": "ਮੇਰੇ ਜਵਾਬ ਰਹਿਣ ਦਿਓ",
  "legal.onThisPage": "ਇਸ ਸਫ਼ੇ ਉੱਤੇ",
  "legal.questions":
    "ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਵੀ ਗੱਲ ਦੇ ਸਵਾਲ ਕਿਸੇ ਵਿਅਕਤੀ ਤੱਕ ਜਾਂਦੇ ਹਨ, ਫਾਰਮ ਤੱਕ ਨਹੀਂ।",
  "legal.draftTitle": "ਇਹ ਇੱਕ ਖਰੜਾ ਹੈ",
  "legal.draftBody":
    "ਹੇਠਾਂ ਦਿੱਤੀ ਇਬਾਰਤ ਬਿਲਕੁਲ ਉਹੀ ਦੱਸਦੀ ਹੈ ਜਿਵੇਂ ਪਲੇਟਫਾਰਮ ਅੱਜ ਕੰਮ ਕਰਦਾ ਹੈ, ਪਰ ਇਹ ਅਜੇ ਆਖ਼ਰੀ ਜਾਂਚ ਵਿੱਚੋਂ ਨਹੀਂ ਲੰਘੀ। ਇਹ ਇਸ ਲਈ ਛਾਪੀ ਗਈ ਹੈ ਕਿ ਤੁਸੀਂ ਇਸ ਨੂੰ ਪੜ੍ਹ ਸਕੋ ਤੇ ਸਾਨੂੰ ਇਸ ਦਾ ਪਾਬੰਦ ਰੱਖ ਸਕੋ, ਇਸ ਲਈ ਨਹੀਂ ਕਿ ਇਹ ਮੁਕੰਮਲ ਹੈ।",
  "legal.draftAsk":
    "ਜੇ ਇੱਥੇ ਦੀ ਕੋਈ ਗੱਲ ਤੁਹਾਡੇ ਕਿਸੇ ਫ਼ੈਸਲੇ ਲਈ ਅਹਿਮ ਹੈ ਤਾਂ ਸਾਨੂੰ ਪੁੱਛੋ।",
  "legal.pendingTitle": "ਇਹ ਅਜੇ ਲਿਖੀ ਜਾ ਰਹੀ ਹੈ",
  "legal.pendingBody":
    "ਇਬਾਰਤ ਸਾਡੇ ਕੋਲ ਹੈ ਤੇ ਪਲੇਟਫਾਰਮ ਖੁੱਲ੍ਹਣ ਤੋਂ ਪਹਿਲਾਂ ਇੱਥੇ ਛਾਪ ਦਿੱਤੀ ਜਾਵੇਗੀ। ਉਦੋਂ ਤੱਕ ਇਸ ਸਫ਼ੇ ਉੱਤੇ ਕੁਝ ਵੀ ਲਾਗੂ ਨਹੀਂ।",
  "legal.pendingAsk":
    "ਜੇ ਤੁਸੀਂ ਇਸ ਦੌਰਾਨ ਜਾਣਨਾ ਚਾਹੋ ਕਿ ਤੁਹਾਡੇ ਲਿਖੇ ਦਾ ਕੀ ਬਣਦਾ ਹੈ ਤਾਂ ਸਾਨੂੰ ਪੁੱਛੋ, ਅਸੀਂ ਸਾਫ਼ ਦੱਸਾਂਗੇ।",
  "photos.aria": "Holistic Wellbeing Summit ਦੀਆਂ ਤਸਵੀਰਾਂ",
  "photos.credit": "Holistic Wellbeing Summit",
  "testimonials.aria": "ਔਰਤਾਂ ਕੀ ਕਹਿੰਦੀਆਂ ਹਨ",
  "testimonials.prev": "ਪਿਛਲਾ ਹਵਾਲਾ",
  "testimonials.next": "ਅਗਲਾ ਹਵਾਲਾ",
  "form.sendCode": "ਮੈਨੂੰ ਸਾਈਨ ਇਨ ਕੋਡ ਭੇਜੋ",
  "form.yourCode": "ਤੁਹਾਡਾ ਸਾਈਨ ਇਨ ਕੋਡ",
  "form.codeWorks": "ਕੋਡ 15 ਮਿੰਟ ਤੱਕ ਕੰਮ ਕਰਦਾ ਹੈ।",
  "form.newCodeSent": "ਨਵਾਂ ਕੋਡ ਭੇਜ ਦਿੱਤਾ। ਪਹੁੰਚਣ ਵਿੱਚ ਇੱਕ ਮਿੰਟ ਲੱਗ ਸਕਦਾ ਹੈ।",
  "form.sendNewCode": "ਨਵਾਂ ਕੋਡ ਭੇਜੋ",
  "form.theCodeWeSent": "ਉਹ ਕੋਡ ਜੋ ਅਸੀਂ ਭੇਜਿਆ",
  "form.newEmail": "ਨਵਾਂ ਈਮੇਲ ਪਤਾ",
  "form.sendToNew": "ਨਵੇਂ ਪਤੇ ਤੇ ਕੋਡ ਭੇਜੋ",
  "form.firstName": "ਪਹਿਲਾ ਨਾਮ",
  "form.lastName": "ਆਖ਼ਰੀ ਨਾਮ",
  "form.phoneOptional": "ਫ਼ੋਨ ਨੰਬਰ (ਇਖ਼ਤਿਆਰੀ)",
  "form.phoneNote":
    "ਅਸੀਂ ਇਹ ਸਿਰਫ਼ ਤਾਂ ਵਰਤਦੇ ਹਾਂ ਜੇ ਤੁਸੀਂ ਕਹੋ ਕਿ ਅਸੀਂ ਵਾਪਸ ਫ਼ੋਨ ਕਰੀਏ।",
  "form.continue": "ਜਾਰੀ ਰੱਖੋ",
  "org.allOrgs": "ਸਾਰੇ ਅਦਾਰੇ",
  "org.checked": "HWS ਵੱਲੋਂ ਜਾਂਚਿਆ",
  "org.website": "ਉਨ੍ਹਾਂ ਦੀ ਵੈੱਬਸਾਈਟ",
  "org.whatTheyDo": "ਉਹ ਕੀ ਕਰਦੇ ਹਨ",
  "org.whatTheyOffer": "ਉਹ ਕੀ ਪੇਸ਼ ਕਰਦੇ ਹਨ",
  "org.whoTheyWorkWith": "ਉਹ ਕਿਨ੍ਹਾਂ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹਨ",
  "org.whoTheyCanHelp": "ਉਹ ਕਿਨ੍ਹਾਂ ਦੀ ਮਦਦ ਕਰ ਸਕਦੇ ਹਨ",
  "org.whoTheyCannot": "ਉਹ ਕਿਨ੍ਹਾਂ ਦੀ ਮਦਦ ਨਹੀਂ ਕਰ ਸਕਦੇ",
  "org.when": "ਕਦੋਂ",
  "org.howToReach": "ਉਨ੍ਹਾਂ ਤੱਕ ਕਿਵੇਂ ਪਹੁੰਚੀਏ",
  "org.zones": "ਪਹੁੰਚ ਖੇਤਰ",
  "org.mainOne": "ਉਨ੍ਹਾਂ ਦਾ ਮੁੱਖ ਖੇਤਰ",
  "org.nothingRunning":
    "ਇਸ ਵੇਲੇ ਉਨ੍ਹਾਂ ਕੋਲ ਕੁਝ ਨਹੀਂ ਚੱਲ ਰਿਹਾ। ਸਾਨੂੰ ਦੱਸੋ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ ਤੇ ਅਸੀਂ ਆਪਣੀ ਹਰ ਚੀਜ਼ ਵਿੱਚ ਵੇਖਾਂਗੇ।",
  "org.orTellUs": "ਜਾਂ ਸਾਨੂੰ ਦੱਸੋ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ ਤੇ ਅਸੀਂ ਤੁਹਾਡੇ ਲਈ ਲੱਭਾਂਗੇ",

  "orgpage.heroTitle":
    "ਉਹ ਔਰਤਾਂ ਜਿਨ੍ਹਾਂ ਲਈ ਤੁਸੀਂ ਹੋ, ਬਿਨਾਂ ਇਸ ਦੇ ਕਿ ਉਨ੍ਹਾਂ ਨੂੰ ਤੁਹਾਨੂੰ ਲੱਭਣਾ ਪਵੇ",
  "orgpage.heroBody":
    "ਕੰਮ ਤਾਂ ਤੁਸੀਂ ਪਹਿਲਾਂ ਹੀ ਕਰਦੇ ਹੋ। ਮੁਸ਼ਕਲ ਇਹ ਹੈ ਕਿ ਕਿਸੇ ਔਰਤ ਨੂੰ ਤੁਹਾਡਾ ਨਾਮ ਪਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ ਤਾਂ ਜੋ ਉਹ ਤੁਹਾਡੀ ਵੈੱਬਸਾਈਟ ਤੱਕ ਪਹੁੰਚੇ। ਇੱਥੇ ਉਹ ਆਪਣੀ ਹਾਲਤ ਬਿਆਨ ਕਰਦੀ ਹੈ, ਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਉਸ ਦੇ ਸਾਹਮਣੇ ਰੱਖਦੇ ਹਾਂ ਕਿਉਂਕਿ ਤੁਸੀਂ ਸਹੀ ਜਵਾਬ ਹੋ, ਨਾ ਕਿ ਇਸ ਲਈ ਕਿ ਉਸ ਨੇ ਅੰਦਾਜ਼ਾ ਲਾਇਆ।",
  "orgpage.haveAccount": "ਮੇਰਾ ਪਹਿਲਾਂ ਹੀ ਖਾਤਾ ਹੈ",
  "orgpage.freeNote":
    "ਮੁਫ਼ਤ। ਨਾ ਪੈਸੇ ਵਾਲੀ ਥਾਂ, ਨਾ ਇਸ਼ਤਿਹਾਰ, ਤੇ ਕੋਈ ਉੱਪਰ ਆਉਣ ਲਈ ਪੈਸੇ ਨਹੀਂ ਦਿੰਦਾ।",
  "orgpage.whatYouGet": "ਤੁਹਾਨੂੰ ਕੀ ਮਿਲਦਾ ਹੈ",
  "orgpage.reach": "ਪਹੁੰਚ, ਤੇ ਉਸ ਨੂੰ ਸਾਬਤ ਕਰਨ ਦਾ ਤਰੀਕਾ",
  "orgpage.gain1Title": "ਉਹ ਔਰਤਾਂ ਜੋ ਉਹੀ ਲੱਭ ਰਹੀਆਂ ਸਨ ਜੋ ਤੁਸੀਂ ਕਰਦੇ ਹੋ",
  "orgpage.gain1Body":
    "ਉਹ ਆਪਣੀ ਹਾਲਤ ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸਦੀ ਹੈ। ਅਸੀਂ ਉਸ ਨੂੰ ਇਸ ਨਾਲ ਮਿਲਾਉਂਦੇ ਹਾਂ ਕਿ ਤੁਸੀਂ ਕਿਨ੍ਹਾਂ ਲਈ ਹੋ, ਕੀ ਪੇਸ਼ ਕਰਦੇ ਹੋ, ਕਿੱਥੇ ਕੰਮ ਕਰਦੇ ਹੋ ਤੇ ਇਸ ਦਾ ਖਰਚਾ ਕੀ ਹੈ। ਉਹ ਪਹਿਲਾਂ ਹੀ ਜਾਣਦੀ ਹੋਈ ਆਉਂਦੀ ਹੈ ਕਿ ਉਹ ਹੱਕਦਾਰ ਹੈ ਜਾਂ ਨਹੀਂ।",
  "orgpage.gain2Title": "ਉਹ ਅੰਕੜੇ ਜੋ ਤੁਸੀਂ ਫੰਡ ਦੇਣ ਵਾਲੇ ਨੂੰ ਦਿਖਾ ਸਕੋ",
  "orgpage.gain2Body":
    "ਕਿੰਨੀਆਂ ਔਰਤਾਂ ਤੁਹਾਡੀ ਆਪਣੀ ਸਾਈਟ ਤੇ ਭੇਜੀਆਂ ਗਈਆਂ, ਕਿੰਨੀਆਂ ਨੇ ਤੁਹਾਡੇ ਅਦਾਰੇ ਦਾ ਸਫ਼ਾ ਪੜ੍ਹਿਆ, ਤੇ ਤੁਹਾਡੀ ਹਰ ਪੋਸਟ ਨੇ ਕਿਵੇਂ ਕੰਮ ਕੀਤਾ। ਇਹ ਦਿਖਾਵੇ ਦਾ ਅੰਕੜਾ ਨਹੀਂ: ਪਹਿਲਾ ਉਨ੍ਹਾਂ ਲੋਕਾਂ ਨੂੰ ਗਿਣਦਾ ਹੈ ਜਿਨ੍ਹਾਂ ਨੇ ਕਲਿੱਕ ਕਰ ਕੇ ਤੁਹਾਡੇ ਤੱਕ ਪਹੁੰਚ ਕੀਤੀ।",
  "orgpage.gain3Title": "ਇੱਕ ਵਾਰ ਜਾਂਚ, ਹਰ ਇੰਦਰਾਜ ਤੇ ਨਹੀਂ",
  "orgpage.gain3Body":
    "ਜਦੋਂ ਤੁਸੀਂ ਜੁੜਦੇ ਹੋ ਤਾਂ ਅਸੀਂ ਤੁਹਾਨੂੰ ਜਨਤਕ ਰਜਿਸਟਰ ਜਾਂ ਤੁਹਾਡੇ ਫੰਡ ਦੇਣ ਵਾਲੇ ਰਾਹੀਂ ਜਾਂਚਦੇ ਹਾਂ। ਉਸ ਤੋਂ ਬਾਅਦ ਤੁਸੀਂ ਜੋ ਚਾਹੋ, ਜਦੋਂ ਚਾਹੋ ਪਾਓ, ਸਾਡੀ ਉਡੀਕ ਕੀਤੇ ਬਿਨਾਂ।",
  "orgpage.gain4Title": "ਗਲਤ ਪੁੱਛਗਿੱਛ ਘੱਟ",
  "orgpage.gain4Body":
    "ਤੁਸੀਂ ਦੱਸਦੇ ਹੋ ਕਿ ਤੁਸੀਂ ਕਿਨ੍ਹਾਂ ਦੀ ਮਦਦ ਨਹੀਂ ਕਰ ਸਕਦੇ, ਤੇ ਅਸੀਂ ਇਹ ਦਿਖਾਉਂਦੇ ਹਾਂ। ਔਰਤਾਂ ਤੁਹਾਡੇ ਨਾਲ ਰਾਬਤਾ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਆਪਣੇ ਆਪ ਨੂੰ ਬਾਹਰ ਕਰ ਲੈਂਦੀਆਂ ਹਨ, ਜੋ ਤੁਹਾਡਾ ਇਨਬਾਕਸ ਸੰਭਾਲਣ ਵਾਲੇ ਦਾ ਸਮਾਂ ਬਚਾਉਂਦਾ ਹੈ।",
  "orgpage.fourSteps": "ਚਾਰ ਕਦਮ, ਤੇ ਉਨ੍ਹਾਂ ਵਿੱਚੋਂ ਇੱਕ ਸਾਡਾ ਹੈ",
  "orgpage.step1Title": "ਸਾਨੂੰ ਦੱਸੋ ਤੁਸੀਂ ਕੌਣ ਹੋ",
  "orgpage.step1Body":
    "ਕੁਝ ਸਵਾਲ ਕਿ ਤੁਸੀਂ ਕੀ ਕਰਦੇ ਹੋ, ਕਿਨ੍ਹਾਂ ਦੀ ਸੇਵਾ ਕਰਦੇ ਹੋ ਤੇ ਕਿੱਥੇ। ਦਸ ਮਿੰਟ, ਤੇ ਤੁਸੀਂ ਵਿਚਾਲੇ ਰੁਕ ਕੇ ਵਾਪਸ ਆ ਸਕਦੇ ਹੋ।",
  "orgpage.step2Title": "ਅਸੀਂ ਤੁਹਾਨੂੰ ਜਾਂਚਦੇ ਹਾਂ",
  "orgpage.step2Body":
    "ਜਨਤਕ ਰਜਿਸਟਰ, ਜਾਂ ਤੁਹਾਡੇ ਫੰਡ ਦੇਣ ਵਾਲੇ ਰਾਹੀਂ। ਇੱਕ ਜਾਂਚ, ਜੋ ਇੱਕ ਵਿਅਕਤੀ ਕਰਦਾ ਹੈ।",
  "orgpage.step3Title": "ਜੋ ਖੁੱਲ੍ਹਾ ਹੈ ਉਹ ਪਾਓ",
  "orgpage.step3Body":
    "ਇੱਕ ਕੋਰਸ, ਇੱਕ ਗ੍ਰਾਂਟ, ਇੱਕ ਖੁੱਲ੍ਹੀ ਬੈਠਕ, ਇੱਕ ਰਹਿਨੁਮਾਈ ਸਕੀਮ। ਕੋਈ ਵੀ ਚੀਜ਼ ਜਿਸ ਵਿੱਚ ਕਿਸੇ ਔਰਤ ਲਈ ਰਾਹ ਹੋਵੇ।",
  "orgpage.step4Title": "ਉਹ ਇਸ ਨੂੰ ਉਦੋਂ ਲੱਭਦੀ ਹੈ ਜਦੋਂ ਇਹ ਢੁਕਦਾ ਹੈ",
  "orgpage.step4Body":
    "ਇਸ ਲਈ ਨਹੀਂ ਕਿ ਉਸ ਨੇ ਤੁਹਾਡਾ ਨਾਮ ਲੱਭਿਆ। ਸਗੋਂ ਇਸ ਲਈ ਕਿ ਜੋ ਉਸ ਨੇ ਦੱਸਿਆ ਉਹ ਤੁਹਾਡੇ ਕੰਮ ਨਾਲ ਮੇਲ ਖਾਇਆ।",
  "orgpage.whereYouSit": "ਤੁਸੀਂ ਕਿੱਥੇ ਹੋਵੋਗੇ",
  "orgpage.zonesBody":
    "ਤੁਸੀਂ ਆਪ ਚੁਣਦੇ ਹੋ, ਇੱਕ ਮੁੱਖ ਤੇ ਦੋ ਤੱਕ ਹੋਰ। ਬਹੁਤੀਆਂ ਔਰਤਾਂ ਨੂੰ ਇੱਕੋ ਵੇਲੇ ਇੱਕ ਤੋਂ ਵੱਧ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ ਤੇ ਬਹੁਤੀਆਂ ਸੇਵਾਵਾਂ ਸਿਰਫ਼ ਇੱਕ ਕਰਦੀਆਂ ਹਨ, ਤੇ ਇਹੀ ਉਹ ਪਾੜਾ ਹੈ ਜਿਸ ਨੂੰ ਇਹ ਪੂਰਨ ਲਈ ਹੈ।",

  "legal.englishApplies":
    "ਇਸ ਸਫ਼ੇ ਦੀਆਂ ਸੁਰਖੀਆਂ ਤੁਹਾਡੀ ਭਾਸ਼ਾ ਵਿੱਚ ਹਨ। ਇਬਾਰਤ ਆਪ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਹੈ, ਤੇ ਅੰਗਰੇਜ਼ੀ ਵਾਲਾ ਰੂਪ ਹੀ ਲਾਗੂ ਹੁੰਦਾ ਹੈ।",
  "legal.askInYourLanguage":
    "ਇਸ ਦੇ ਕਿਸੇ ਵੀ ਹਿੱਸੇ ਬਾਰੇ ਸਾਨੂੰ ਪੁੱਛੋ, ਅਸੀਂ ਜਵਾਬ ਦੇਵਾਂਗੇ।",

  "reason.youToldUs": "ਤੁਸੀਂ ਸਾਨੂੰ ਦੱਸਿਆ ਕਿ #",
  "reason.and": "ਤੇ",
  "reason.youAskedAbout": "ਤੁਸੀਂ # ਬਾਰੇ ਪੁੱਛਿਆ",
  "reason.runsIn": "ਇਹ # ਵਿੱਚ ਚੱਲਦਾ ਹੈ",
  "reason.isOnline": "ਇਹ ਆਨਲਾਈਨ ਹੈ, ਸੋ ਤੁਸੀਂ ਕਿੱਥੇ ਹੋ ਇਸ ਨਾਲ ਫ਼ਰਕ ਨਹੀਂ ਪੈਂਦਾ",
  "reason.acrossScotland": "ਇਹ ਪੂਰੇ ਸਕਾਟਲੈਂਡ ਵਿੱਚ ਖੁੱਲ੍ਹਾ ਹੈ",
  "reason.closest":
    "ਜੋ ਤੁਸੀਂ ਦੱਸਿਆ, ਉਸ ਦੇ ਸਭ ਤੋਂ ਨੇੜੇ ਦੀਆਂ ਚੀਜ਼ਾਂ ਵਿੱਚੋਂ ਇਹ ਇੱਕ ਹੈ।",
  "reason.clauseJoin": ", ਤੇ ",
};

const zh: Catalogue = {
  "language.label": "语言",
  "hero.title": "帮助女性获得她们需要的支持",
  "hero.body":
    "用你自己的话告诉我们你需要什么，我们会为你列出几个值得迈出的下一步。三个问题，无需注册账户。",
  "hero.cta": "寻找方案",
  "hero.browse": "或看看有哪些机构",
  "why.eyebrow": "运作方式",
  "why.title": "知道某项支持存在，不等于知道它对你开放",
  "hero.begin": "你想从哪里开始？",
  "hero.beginFind": "找到你的下一步",
  "hero.beginBrowse": "看看有哪些机构",
  "how.oneTitle": "用你自己的话告诉我们",
  "how.oneBody":
    "你需要什么、你大概在哪里，以及关于你处境的任何情况。只有三个问题。",
  "how.twoTitle": "我们来权衡",
  "how.twoBody":
    "依据每一项支持的用途、面向谁开放、在哪里运作，以及你如何联系。结果由 AI 驱动。",
  "how.threeTitle": "你会得到几个真正可行的选择",
  "how.threeBody":
    "几个，而不是一百个，每一个都说明为什么匹配、费用多少、面向谁，以及你联系之后具体会发生什么。",
  "how.forWomen": "为女性",
  "how.forOrgs": "为机构",
  "how.orgOneTitle": "告诉我们你们是谁",
  "how.orgOneBody":
    "几个问题：你们做什么、想为哪些人提供解决方案、在哪里。入驻很快。",
  "how.orgTwoTitle": "我们只核实你们一次",
  "how.orgTwoBody":
    "通过公开登记，或依据你们过往的记录。完成核实后，你们想发什么、什么时候发，都可以。",
  "how.orgThreeTitle": "她会在合适的时候找到你们",
  "how.orgThreeBody":
    "不是因为她搜索了你们的名字，而是因为她描述的情况与你们提供的解决方案相符。",
  "origin.eyebrow": "我们为什么做这件事",
  "origin.title": "一切始于这样一个房间",
  "origin.bodyOne":
    "Holistic Wellbeing Summit 把女性和真正能帮到她们的人聚在同一个房间里。有人为你引荐。有人提到一个你从未听说过的资助项目，你这才知道它存在。",
  "origin.bodyTwo":
    "然后房间空了。机构回到各自的工作，而女性依然需要帮助。这个平台就是那个房间，只是门一直开着，为每一位当时不在场的女性而开。",
  "zones.eyebrow": "支持领域",
  "zones.title": "各类支持，一个平台",
  "zones.body":
    "工作、金钱、学习、健康、创业、发声。大多数女性同时需要不止一项，而大多数服务只做其中一项，这正是这个平台要填补的空白。",
  "zones.browse": "浏览平台上的所有机构",
  "trust.checkedTitle": "经过核实的内容",
  "trust.checkedBody":
    "这里的每一家机构，在能够发布任何内容之前，都已通过公开登记册或其资助方核实。每条信息都标有最近一次确认的日期。",
  "trust.privateTitle": "你的信息是私密的",
  "trust.privateBody":
    "搜索、阅读或申请都不需要账户。你输入的内容仅用于为你排序结果，不会被出售、转交，也不会用来建立关于你的档案。",
  "trust.paidTitle": "没有赞助内容",
  "trust.paidBody":
    "没有付费推广，也没有广告。结果按照与你所述的契合程度排序，每条信息都会说明它为何匹配。",
  "orgs.title": "你是否在做一些女性应该知道的事？",
  "orgs.body":
    "把它登记在这里，它就能触达真正合适的女性，而不是碰巧找到你网站的人。免费，而且我们只核实你一次，不必逐条审核。",
  "orgs.cta": "认识这些女性",

  "flow.back": "返回",
  "flow.questionOf": "第 # 题，共 3 题",
  "flow.next": "下一步",
  "flow.changeAnswers": "修改你的回答",
  "flow.searchCredit": "搜索由人工智能提供支持",
  "flow.orgPrompt": "你是为女性提供支持的机构或个人吗？",
  "flow.orgLink": "面向机构",
  "q1.title": "你需要什么方面的帮助？",
  "q1.subline": "用你自己的话。没有错误的答案。",
  "q1.placeholder": "例如：照顾母亲后重返工作",
  "q1.blank": "写几个字，让我们知道该从哪里找起。",
  "q1.searchOn": "我们会根据你写的内容来搜索。",
  "q1.suggestions": "参考说法",
  "q2.title": "我们该在哪里为你寻找支持？",
  "q2.subline": "一个城镇、一个邮编，或你所在的地方政府辖区。",
  "q2.placeholder": "例如 EH48",
  "q2.unknown": "我们不认识这个地方。试试附近的城镇，或者搜索全苏格兰。",
  "q2.or": "或者",
  "q2.anywhere": "苏格兰任何地方",
  "q2.onlineOnly": "仅限线上支持",
  "q2.hint": "输入一个地点，或者选择上面两个选项之一。",
  "q3.title": "哪一项最符合你的情况？",
  "q3.subline": "这能帮我们找到你可能符合条件的支持。可以多选。",
  "q3.hint": "选择所有符合的，或者选择「不想说」。",
  "q3.privacy": "我们不会保存你的回答，也不会把它们交给我们展示给你的机构。",
  "results.title": "为你推荐的下一步",
  "results.refine": "缩小或扩大范围",
  "results.ordered": "按照与你所说内容的契合程度排序。没有人付费出现在这里。",
  "results.orgsOnly": "目前开放的项目中没有足够贴近的，但这些机构正在做你所询问的事。",
  "results.thatsAll": "贴近的就这些了。你可以扩大搜索范围，或者修改你告诉我们的内容。",
  "results.showScotland": "显示全苏格兰的支持",
  "results.changeMine": "修改我的回答",
  "results.startOver": "重新开始",
  "card.bestMatch": "最佳匹配",
  "card.save": "保存",
  "card.saved": "已保存",
  "card.saveAria": "保存 #",
  "card.savedAria": "已保存：#",
  "card.whoFor": "适合谁",
  "card.whatToExpect": "会是什么样",
  "card.whyMatched": "为什么匹配到你：",
  "card.learnMore": "了解更多",
  "card.missing": "尚未填写",
  "card.closes": "# 截止",
  "card.closed": "已于 # 截止",
  "card.verified": "已核实",
  "card.verifiedOn": "已核实 · 最后更新于 #",
  "nomatch.title": "目前我们没有为你找到合适的",
  "nomatch.body": "这并不代表没有帮助。只是今天我们没有符合你所提要求的内容。",
  "nomatch.tryFirst": "先试试这个",
  "nomatch.widen": "扩大到全苏格兰",
  "nomatch.onlineTitle": "仅限线上支持",
  "nomatch.changeTitle": "换个说法再试",
  "nomatch.changeNote": "换一种说法有时会找到不同的结果。值得再试一次。",
  "nomatch.startTitle": "重新开始",
  "nomatch.startNote": "清空全部，从第一题开始。",
  "orgsAnswer.title": "这些机构也能帮上忙",
  "orgsAnswer.body": "正在做你所询问之事的机构。他们现在可能没有开放的项目，但你可以直接联系他们。",
  "talkcta.title": "想和人聊一聊吗？",
  "talkcta.body": "一位了解有哪些资源、能为你指明方向的人。挑一个你方便的时间。不收费，也不需要账户。",
  "talkcta.cta": "查看可预约时间",
  "talkcta.note": "我们已经知道你搜索过什么，所以你不必再解释一遍。",
  "talkcta.today": "今天就需要帮助？现在就联系我们。",
  "refine.back": "返回结果",
  "refine.title": "缩小或扩大范围",
  "refine.howFar": "搜索范围多远",
  "refine.onlyShow": "只显示",
  "refine.nothingMatches": "使用这些筛选条件没有找到结果。",
  "refine.tryRemoving": "试着去掉「#」。",
  "refine.inScope": "搜索范围：#。",
  "refine.tryWiden": "试着扩大搜索范围。",
  "refine.update": "更新我的搜索",
  "scope.myArea": "我所在的地区",
  "scope.nearby": "附近地区",
  "scope.allScotland": "全苏格兰",
  "scope.online": "仅限线上",
  "filter.free": "免费",
  "filter.openNow": "现在开放",
  "filter.noForms": "无需填表",
  "saved.title": "你保存的清单",
  "saved.titleNamed": "# 保存的清单",
  "saved.emptyBody": "当你找到值得回头再看的内容时，按一下保存。它会留在这里，截止前我们会提醒你。",
  "saved.emptyCta": "寻找支持",
  "saved.soonest": "最先截止的排在前面。",
  "saved.seeWhatElse": "看看还有什么",
  "saved.findSomethingElse": "找点别的",
  "saved.settings": "提醒与账户设置",
  "saved.noClosingDate": "没有截止日期",
  "saved.noLongerRunning": "已不再进行",
  "service.backToResults": "返回你的结果",
  "service.cost": "费用",
  "service.where": "地点",
  "service.howToTakePart": "如何参加",
  "service.continueTo": "前往 #",
  "service.closedTitle": "这一期已经结束",
  "service.closedBody": "它可能会再次开办。# 可以告诉你下一期何时开放，现在也可能有类似的项目。",
  "service.askNext": "询问下一期何时开始",
  "service.findSimilar": "寻找类似的支持",
  "service.somethingWrong": "这里有问题吗？",
  "discover.title": "谁在苏格兰为女性工作",
  "discover.lede": "这里的每一家机构都经过我们核实。可以按名称搜索，也可以按你的需要一路往下看。",
  "discover.searchLabel": "按名称或按机构所做的事搜索",
  "discover.searchButton": "搜索机构",
  "discover.orAnswer": "或者回答三个问题，我们为你匹配",
  "discover.byZone": "按访问领域浏览",
  "discover.byZoneNote": "平台围绕的各类支持。每一类都通向在该领域工作的机构。",
  "discover.nobodyYet": "这里还没有机构",
  "discover.byNeed": "按你的需要浏览",
  "discover.byNeedNote": "就像你说出口那样说。",
  "zone.allZones": "所有访问领域",
  "zone.eyebrow": "访问领域",
  "zone.empty": "这个领域暂时还没有机构。这并不代表没有帮助，告诉我们你需要什么，我们会在全部内容中为你查找。",
  "zone.tellUs": "告诉我们你需要什么",
  "zone.alsoWorks": "也在这个领域工作",
  "need.everything": "你可以浏览的全部内容",
  "need.eyebrow": "你需要什么",
  "discover.eyebrow": "探索",
  "discover.searchAria": "搜索",
  "discover.clear": "清除",
  "discover.nothingMatches": "没有与「#」相符的结果",
  "discover.forQuery": "与「#」相符",
  "discover.searchNote": "这个搜索框只查找名称和简介。如果你想描述自己的处境，而不是找某一家特定机构，那三个问题的效果会好得多。",
  "discover.tryQuestions": "试试那三个问题。",
  "need.emptyShort": "这里暂时还没有机构。",
  "need.workOnThis": "有开放项目的排在前面。",
  "need.empty": "这里暂时还没有机构。这并不代表没有帮助，告诉我们你需要什么，我们会在全部内容中为你查找。",
  "talk.title": "和人聊一聊",
  "talk.pickTime": "挑一个你方便的时间",
  "talk.pickBody": "我们会打给你。大约半小时，不收费，也不需要账户。",
  "talk.noneTitle": "未来几周没有空档",
  "talk.noneBody": "这不常见，也不代表没有人能帮你。联系我们，我们会另外安排日历之外的时间。",
  "talk.otherWays": "其他联系方式",
  "talk.ukTime": "所有时间均为英国时间。",
  "talk.todayInstead": "今天就需要帮助，而不是等预约时间？还有更快的联系方式。",
  "booking.name": "你的名字",
  "booking.nameNote": "你希望我们怎么称呼你",
  "booking.email": "电子邮箱",
  "booking.emailNote": "我们会把时间发到这里，并附上一个一点即可添加的日历文件。",
  "booking.phone": "电话号码",
  "booking.phoneNote": "只有在你更希望我们打电话而不是发邮件时才需要填。",
  "booking.notes": "有什么想先让我们知道的",
  "booking.notesNote": "选填。除了给你打电话的人，没有别人会看。",
  "booking.optional": "选填",
  "booking.submit": "预约这个时间",
  "confirm.title": "确认你的通话",
  "confirm.pickDifferent": "换一个时间",
  "confirm.privacy": "我们只用你的名字和邮箱来完成这次通话。不会创建账户，也不会把你加入任何名单。",
  "booked.title": "已经预约好了",
  "booked.sent": "我们已把时间发到你的邮箱，并附上一个一点即可加入手机日历的文件。可能需要一分钟才会收到。",
  "booked.reference": "你的参考编号",
  "booked.prepare": "不需要做任何准备。打电话给你的人已经读过你在找什么，你不必从头讲起。",
  "booked.move": "如果时间不合适了，回复那封邮件，我们会帮你改期。",
  "booked.keepLooking": "这期间继续找找看",
  "booked.backToStart": "回到首页",
  "account.title": "进入你的账户",
  "account.saveIt": "登录以保存",
  "account.saveBody": "这里只有保存需要账户，这样下次你的清单还在。你刚才按下保存的内容我们已经留住了，登录后就能看到。",
  "account.otp": "我们会给你发一个一次性登录码。不用记密码。",
  "account.emailPrivate": "你的邮箱会被妥善保密。",
  "account.carryOn": "不保存，继续浏览",
  "account.signInHere": "在此登录",
  "code.title": "查看你的邮箱",
  "code.sentTo": "我们已将登录码发送至：",
  "code.justSearch": "不登录，只是搜索",
  "code.enterBelow": "在下方输入即可进入。",
  "code.arrive": "一分钟内应该就会收到。如果没有，请查看垃圾邮件文件夹。",
  "code.different": "换一个邮箱地址",
  "profile.title": "设置你的资料",
  "profile.subline": "只要一个称呼就好。这里没有必填项。",

  "nav.home": "首页",
  "nav.discover": "探索",
  "nav.forOrgs": "面向机构",
  "nav.faq": "常见问题",
  "nav.signIn": "登录",
  "nav.signOut": "退出登录",
  "nav.saved": "已保存",
  "nav.settings": "设置",
  "nav.remindersSettings": "提醒与设置",
  "nav.sections": "栏目",
  "nav.menu": "菜单",
  "nav.homeAria": "HWS Pathgrid，首页",
  "nav.findNext": "找到你的下一步",
  "footer.label": "页脚",
  "footer.tagline": "把女性与机会连起来——不止于一个房间、一个邮编或一天。",
  "footer.free": "免费使用，搜索、阅读或申请都不需要账户。",
  "footer.forYou": "给你",
  "footer.find": "寻找方案",
  "footer.discover": "探索机构",
  "footer.faq": "常见问题",
  "footer.help": "帮助",
  "footer.forOrgs": "面向机构",
  "footer.meetWomen": "认识这些女性",
  "footer.whyList": "为什么在这里登记",
  "footer.whoListed": "已经登记的机构",
  "footer.legal": "法律信息",
  "footer.privacy": "隐私政策",
  "footer.terms": "使用条款",
  "footer.talk": "和真人聊聊",
  "cookie.region": "关于 Cookie",
  "cookie.claim": "我们使用少量 Cookie，没有一个会监视你。",
  "cookie.detail": "它们让你保持登录，并记住你的语言。不追踪，也不出售。",
  "cookie.more": "详见隐私政策",
  "cookie.okay": "\u77e5\u9053\u4e86",
  "loading.page": "\u6b63\u5728\u52a0\u8f7d\u9875\u9762",
  "loading.organisations": "\u6b63\u5728\u52a0\u8f7d\u673a\u6784",
  "loading.organisation": "\u6b63\u5728\u52a0\u8f7d\u8be5\u673a\u6784",
  "loading.saved": "\u6b63\u5728\u52a0\u8f7d\u4f60\u4fdd\u5b58\u7684\u6e05\u5355",
  "loading.listing": "\u6b63\u5728\u52a0\u8f7d\u8be5\u9879\u76ee",

  "faq.title": "常见问题",
  "faq.lede": "HWS Path Grid 把苏格兰各地的女性与真正适合她们的支持连接起来，也让背后的机构有一个可以被找到的地方。",
  "faq.notHere": "如果这里没有你要的答案，我们会回复每一条留言。",
  "faq.talkPerson": "和真人聊聊。",
  "faq.forWomen": "如果你在寻找支持",
  "faq.forOrgs": "如果你是一家机构",

  "meta.home.title": "为苏格兰的女性寻找支持",
  "meta.home.desc": "用你自己的话告诉我们你需要什么，我们会给你几个值得去走的下一步。每家机构都经过核实。无需账户。",
  "meta.find.desc": "用你自己的话告诉我们你需要什么。三个问题，无需账户，我们会在每一家经我们核实的苏格兰机构中查找。",
  "meta.where.desc": "告诉我们你在哪里，这样我们可以把离你近的排在前面，同时也让你看到面向所有人的项目。",
  "meta.situation.desc": "选择所有符合的。这会改变我们呈现给你的内容。",
  "meta.results.desc": "我们为你找到的支持，并说明每一项为什么在这里。",
  "meta.refine.desc": "当第一批结果不合适时，缩小或扩大你的搜索范围。",
  "meta.change.title": "修改你的回答",
  "meta.change.desc": "修改你告诉我们的内容，我们会在所有机构中重新查找。",
  "meta.startOver.desc": "清空你的回答，重新开始这三个问题。",
  "meta.discover.title": "探索苏格兰各地的机构",
  "meta.discover.desc": "按提供的支持类型，或按你的需要，浏览在苏格兰各地与女性一起工作的机构。",
  "meta.faq.desc": "女性在使用本站前会问什么，机构在登记前会问什么。直接作答。",
  "meta.orgs.desc": "把你们开展的项目登记在 HWS Path Grid 上，触及真正适合的女性。免费，核实一次，没有人付费出现。",
  "meta.go.title": "正在离开以申请",
  "meta.go.desc": "正把你带到该机构自己的页面，以便你在那里申请。",
  "meta.help.desc": "如果你找不到需要的内容，或者这里有什么看起来不对，请告诉我们。我们宁愿听到你的反馈，也不希望你就此放弃。",
  "meta.saved.desc": "你保存的全部内容，集中在一处。",
  "meta.privacy.desc": "你使用本站时 HWS Path Grid 会收集什么、为什么，以及我们绝不会拿它做什么。",
  "meta.terms.desc": "使用 HWS Path Grid 的规则，适用于在此搜索的女性和在此登记的机构。",
  "meta.talk.desc": "预约一次免费通话，与能为你指明方向的人聊聊。",
  "meta.confirm.desc": "预约通话前的最后一步。",
  "meta.booked.title": "你的通话已预约",
  "meta.booked.desc": "接下来会发生什么。",
  "meta.account.desc": "登录或创建账户，这样你保存的支持在下次回来时还在。",
  "meta.accountCode.desc": "我们已给你发送了一个六位登录码。",
  "meta.profile.desc": "填写你的名字，好让我们用合适的称呼。这里没有必填项。",
  "meta.settings.desc": "你的提醒、你的语言，以及你的账户会发生什么。",
  "meta.emailChange.title": "更改你的电子邮箱",
  "meta.emailChange.desc": "把你的账户，以及上面保存的一切，迁移到另一个邮箱地址。",
  "meta.emailCode.title": "查看你的新邮箱",
  "meta.emailCode.desc": "输入我们发送到你新邮箱地址的验证码。",

  "settings.savedList": "我保存的清单",
  "settings.reminders": "提醒",
  "settings.howFar": "提前多久",
  "settings.nothingElse": "我们不会发送其他内容。没有通讯，也没有推荐。",
  "settings.neverName": "提醒邮件从不写明支持的类型，以防别人看到你的邮箱。",
  "settings.emailChanged": "完成。你的账户现在在这个邮箱上，保存的清单也一起转过来了。",
  "reminders.beforeDeadline": "截止前",
  "change.heard": "我们听到的是",
  "change.weWillShow": "我们会给你少量的下一步，最匹配的排在前面。没有人付费出现在这里。",
  "startover.confirm": "这会清空你的回答。要重新开始吗？",
  "startover.note": "你保存过的内容都不会动。只有你告诉我们的需求会被清空。",
  "startover.yes": "是的，重新开始",
  "startover.keep": "保留我的回答",
  "legal.onThisPage": "本页内容",
  "legal.questions": "关于这些的任何问题都会交到人手上，而不是一个表单。",
  "legal.draftTitle": "这是一份草稿",
  "legal.draftBody":
    "下面的文字准确描述了平台今天的运作方式，但尚未经过最终审阅。公开它是为了让你阅读并据此监督我们，而不是因为它已经定稿。",
  "legal.draftAsk": "如果这里的任何内容关系到你正在做的决定，请问我们。",
  "legal.pendingTitle": "这一份仍在撰写中",
  "legal.pendingBody": "文字在我们手上，会在平台开放前发布于此。在那之前，本页上的任何内容都不具效力。",
  "legal.pendingAsk": "如果你想在此期间了解你输入的内容会怎样，请问我们，我们会直截了当地告诉你。",
  "photos.aria": "来自 Holistic Wellbeing Summit 的照片",
  "photos.credit": "Holistic Wellbeing Summit",
  "testimonials.aria": "女性的评价",
  "testimonials.prev": "上一条",
  "testimonials.next": "下一条",
  "form.sendCode": "给我发送登录码",
  "form.yourCode": "你的登录码",
  "form.codeWorks": "验证码有效期为 15 分钟。",
  "form.newCodeSent": "新验证码已发送。可能需要一分钟才会收到。",
  "form.sendNewCode": "重新发送验证码",
  "form.theCodeWeSent": "我们发送的验证码",
  "form.newEmail": "新的电子邮箱",
  "form.sendToNew": "向新邮箱发送验证码",
  "form.firstName": "名",
  "form.lastName": "姓",
  "form.phoneOptional": "电话号码（选填）",
  "form.phoneNote": "只有在你要求我们回电时才会使用。",
  "form.continue": "继续",
  "org.allOrgs": "全部机构",
  "org.checked": "经 HWS 核实",
  "org.website": "他们的网站",
  "org.whatTheyDo": "他们做什么",
  "org.whatTheyOffer": "他们提供什么",
  "org.whoTheyWorkWith": "他们与谁合作",
  "org.whoTheyCanHelp": "他们能帮谁",
  "org.whoTheyCannot": "他们帮不了谁",
  "org.when": "时间",
  "org.howToReach": "如何联系他们",
  "org.zones": "访问领域",
  "org.mainOne": "他们的主要领域",
  "org.nothingRunning": "他们目前没有在进行的项目。告诉我们你需要什么，我们会在全部内容中为你查找。",
  "org.orTellUs": "或者告诉我们你需要什么，我们为你匹配",

  "orgpage.heroTitle": "你们服务的女性，不必先找到你们",
  "orgpage.heroBody":
    "工作你们已经在做。问题是，一位女性必须先知道你们的名字，才能找到你们的网站。在这里她描述自己的处境，而我们把你们呈现给她——因为你们就是对的答案，不是因为她猜对了。",
  "orgpage.haveAccount": "我已经有账户",
  "orgpage.freeNote": "免费。没有付费排位，没有广告，也没有人付费排得更靠前。",
  "orgpage.whatYouGet": "你们会得到什么",
  "orgpage.reach": "触达，以及证明它的方式",
  "orgpage.gain1Title": "正在寻找你们所做之事的女性",
  "orgpage.gain1Body":
    "她用自己的话描述处境。我们把它与你们服务的对象、提供的内容、工作的地点和费用一一比对。她来到你们面前时，已经知道自己是否符合条件。",
  "orgpage.gain2Title": "可以拿给资助方看的数字",
  "orgpage.gain2Body":
    "多少女性被引荐到你们自己的网站，多少人读过你们的机构页面，以及你们发布的每一项表现如何。不是面子数据：第一项统计的是真正点击进入你们页面的人。",
  "orgpage.gain3Title": "只核实一次，不是每条都核",
  "orgpage.gain3Body":
    "你们加入时，我们通过公共登记处或你们的资助方核实。之后你们想发什么就发什么，想什么时候发就什么时候发，不必等我们。",
  "orgpage.gain4Title": "更少不对路的咨询",
  "orgpage.gain4Body": "你们说明自己帮不了谁，我们把它展示出来。女性在联系你们之前就会自行排除，这为处理你们邮箱的人省下时间。",
  "orgpage.fourSteps": "四个步骤，其中一个是我们的",
  "orgpage.step1Title": "告诉我们你们是谁",
  "orgpage.step1Body": "关于你们做什么、服务谁、在哪里的几个问题。十分钟，中途可以停下，之后再回来。",
  "orgpage.step2Title": "我们核实你们",
  "orgpage.step2Body": "通过公共登记处，或你们的资助方。一次核实，由人完成。",
  "orgpage.step3Title": "发布开放的项目",
  "orgpage.step3Body": "一门课程、一笔资助、一次免预约到访、一个辅导计划。任何为女性留有入口的东西。",
  "orgpage.step4Title": "在合适的时候她会找到它",
  "orgpage.step4Body": "不是因为她搜索了你们的名字，而是因为她描述的内容与你们所做的相符。",
  "orgpage.whereYouSit": "你们会在哪里",
  "orgpage.zonesBody":
    "你们自己选，一个主要领域，最多再加两个。大多数女性同时需要不止一个，而大多数服务只做一个——这正是本平台要填补的空白。",

  "legal.englishApplies": "本页的标题已译成你的语言。正文仍为英文，并且以英文版本为准。",
  "legal.askInYourLanguage": "其中任何一部分，都可以来问我们，我们会回答。",

  "reason.youToldUs": "你告诉我们#",
  "reason.and": "和",
  "reason.youAskedAbout": "你问到#",
  "reason.runsIn": "它在#进行",
  "reason.isOnline": "这一项在线上，所以你在哪里都没关系",
  "reason.acrossScotland": "这一项面向全苏格兰开放",
  "reason.closest": "在你描述的情况里，这是我们能找到的最接近的之一。",
  "reason.clauseJoin": "，而且",
};

const ro: Catalogue = {
  "language.label": "Limbă",
  "hero.title": "Sprijinim femeile să găsească ajutorul de care au nevoie",
  "hero.body":
    "Spune-ne de ce ai nevoie, cu cuvintele tale, și îți vom arăta câțiva pași următori care merită făcuți. Trei întrebări, fără cont.",
  "hero.cta": "Găsește o soluție",
  "hero.browse": "Sau vezi cine există",
  "why.eyebrow": "Cum funcționează",
  "why.title":
    "A ști că ceva există nu înseamnă a ști că îți este deschis",
  "hero.begin": "De unde ai vrea să începi?",
  "hero.beginFind": "Găsește pasul următor",
  "hero.beginBrowse": "Vezi cine există",
  "origin.eyebrow": "De ce există platforma",
  "origin.title": "A început într-o încăpere ca aceasta",
  "origin.bodyOne":
    "Holistic Wellbeing Summit adună femeile în aceeași încăpere cu oamenii care chiar le pot ajuta. Cineva face o prezentare. Cineva spune numele unui fond despre care nu auziseși, și acum știi că există.",
  "origin.bodyTwo":
    "Apoi încăperea se golește. Organizațiile se întorc la munca lor, iar femeile au în continuare nevoie de ajutor. Această platformă este acea încăpere cu ușile lăsate deschise, pentru fiecare femeie care nu a fost acolo.",
  "how.oneTitle": "Spune-ne, cu cuvintele tale",
  "how.oneBody":
    "De ce ai nevoie, aproximativ unde ești și orice ține de situația ta. Doar trei întrebări.",
  "how.twoTitle": "Cântărim totul",
  "how.twoBody":
    "În funcție de ce este fiecare lucru, cui îi este deschis, unde se desfășoară și cum poți ajunge acolo. Rezultatul este generat cu ajutorul inteligenței artificiale.",
  "how.threeTitle": "Primești câteva opțiuni reale",
  "how.threeBody":
    "Câteva, nu o sută, fiecare cu motivul pentru care se potrivește, cât costă, cui i se adresează și ce se întâmplă exact după ce iei legătura.",
  "how.forWomen": "Pentru femei",
  "how.forOrgs": "Pentru organizații",
  "how.orgOneTitle": "Spuneți-ne cine sunteți",
  "how.orgOneBody":
    "Câteva întrebări despre ce faceți, cui vreți să oferiți soluții și unde. Înscrierea este rapidă.",
  "how.orgTwoTitle": "Vă verificăm, o singură dată",
  "how.orgTwoBody":
    "Într-un registru public sau pe baza activității voastre de până acum. După verificare, publicați ce vreți, când vreți.",
  "how.orgThreeTitle": "Ea vă găsește când i se potrivește",
  "how.orgThreeBody":
    "Nu pentru că v-a căutat numele, ci pentru că ceea ce a descris s-a potrivit cu soluția pe care o oferiți.",
  "zones.eyebrow": "Zone de acces",
  "zones.title": "Orice fel de sprijin, într-un singur loc",
  "zones.body":
    "Muncă, bani, învățare, sănătate, antreprenoriat, dreptul la opinie. Majoritatea femeilor au nevoie de mai multe deodată, iar majoritatea serviciilor acoperă doar unul. Acesta este golul pe care platforma există să îl închidă.",
  "zones.browse": "Vezi pe toată lumea de pe platformă",
  "trust.checkedTitle": "Conținut verificat",
  "trust.checkedBody":
    "Fiecare organizație de aici a fost verificată într-un registru public sau la finanțatorul ei înainte de a putea publica ceva. Fiecare anunț poartă data ultimei confirmări.",
  "trust.privateTitle": "Informațiile sunt private",
  "trust.privateBody":
    "Nu ai nevoie de cont ca să cauți, să citești sau să aplici. Ce scrii este folosit doar pentru a ordona rezultatele și nu este vândut, transmis mai departe sau folosit ca să se construiască un profil despre tine.",
  "trust.paidTitle": "Fără conținut sponsorizat",
  "trust.paidBody":
    "Nu există plasare plătită și nici publicitate. Rezultatele sunt ordonate după cât de bine se potrivesc cu ce ne-ai spus, iar fiecare anunț explică de ce s-a potrivit.",
  "orgs.title": "Conduceți ceva despre care femeile ar trebui să știe?",
  "orgs.body":
    "Publicați aici și ajunge la femeile cărora li se potrivește cu adevărat, nu doar la cine vă găsește din întâmplare site-ul. Gratuit, și vă verificăm o dată, nu la fiecare anunț.",
  "orgs.cta": "Cunoașteți femeile",

  "flow.back": "Înapoi",
  "flow.questionOf": "Întrebarea # din 3",
  "flow.next": "Continuă",
  "flow.changeAnswers": "Schimbă răspunsurile",
  "flow.searchCredit": "Căutare susținută de inteligență artificială",
  "flow.orgPrompt":
    "Ești o organizație sau o persoană care oferă soluții pentru femei?",
  "flow.orgLink": "Pentru organizații",
  "q1.title": "Cu ce te putem ajuta?",
  "q1.subline": "Cu cuvintele tale. Nu există un răspuns greșit.",
  "q1.placeholder": "de ex. revenirea la muncă după ce am avut grijă de mama",
  "q1.blank": "Scrie câteva cuvinte, ca să știm unde să căutăm.",
  "q1.searchOn": "Vom căuta după ce ai scris.",
  "q1.suggestions": "Sugestii",
  "q2.title": "Unde să căutăm sprijin?",
  "q2.subline": "Un oraș, un cod poștal sau zona ta administrativă.",
  "q2.placeholder": "de ex. EH48",
  "q2.unknown":
    "Nu cunoaștem locul acesta. Încearcă un oraș din apropiere sau caută oriunde în Scoția.",
  "q2.or": "Sau",
  "q2.anywhere": "Oriunde în Scoția",
  "q2.onlineOnly": "Doar sprijin online",
  "q2.hint": "Scrie un loc sau alege una dintre cele două opțiuni de mai sus.",
  "q3.title": "Ce descrie cel mai bine situația ta?",
  "q3.subline":
    "Asta ne ajută să găsim sprijin la care ai putea avea dreptul. Poți alege mai multe.",
  "q3.hint": "Alege tot ce ți se potrivește sau apasă Prefer să nu spun.",
  "q3.privacy":
    "Nu păstrăm răspunsurile tale și nu le transmitem organizațiilor pe care ți le arătăm.",
  "results.title": "Pașii următori pentru tine",
  "results.refine": "Restrânge sau extinde",
  "results.ordered":
    "Ordonate după cât de bine se potrivesc cu ce ne-ai spus. Nimeni nu plătește ca să apară aici.",
  "results.orgsOnly":
    "Nimic deschis nu se potrivește îndeajuns de bine, dar aceste organizații se ocupă exact de ce ai întrebat.",
  "results.thatsAll":
    "Asta este tot ce se potrivește îndeaproape. Poți extinde căutarea sau schimba ce ne-ai spus.",
  "results.showScotland": "Arată sprijin din toată Scoția",
  "results.changeMine": "Schimbă răspunsurile mele",
  "results.startOver": "Ia-o de la capăt",
  "card.bestMatch": "Cea mai bună potrivire",
  "card.save": "Salvează",
  "card.saved": "Salvat",
  "card.saveAria": "Salvează #",
  "card.savedAria": "Salvat: #",
  "card.whoFor": "Pentru cine este",
  "card.whatToExpect": "La ce să te aștepți",
  "card.whyMatched": "De ce ți se potrivește:",
  "card.learnMore": "Află mai multe",
  "card.missing": "Încă necompletat",
  "card.closes": "Se închide pe #",
  "card.closed": "Închis pe #",
  "card.verified": "Verificat",
  "card.verifiedOn": "Verificat · ultima actualizare #",
  "nomatch.title": "Deocamdată nu am găsit nimic pentru tine",
  "nomatch.body":
    "Asta nu înseamnă că nu există ajutor. Înseamnă că astăzi nu avem ceva care să se potrivească cu ce ai cerut.",
  "nomatch.tryFirst": "Încearcă întâi asta",
  "nomatch.widen": "Extinde la toată Scoția",
  "nomatch.onlineTitle": "Doar sprijin online",
  "nomatch.changeTitle": "Schimbă ce ai cerut",
  "nomatch.changeNote":
    "Alte cuvinte găsesc uneori alte lucruri. Merită încă o încercare.",
  "nomatch.startTitle": "Începe din nou",
  "nomatch.startNote": "Șterge tot și pornește de la prima întrebare.",
  "orgsAnswer.title": "Și acești oameni te pot ajuta",
  "orgsAnswer.body":
    "Organizații care se ocupă de ce ai întrebat. S-ar putea să nu aibă nimic deschis acum, dar poți merge direct la ele.",
  "talkcta.title": "Vrei să vorbești cu cineva?",
  "talkcta.body":
    "Cineva care știe ce există și te poate îndruma în direcția potrivită. Alege o oră care îți convine. Nu costă nimic și nu ai nevoie de cont.",
  "talkcta.cta": "Vezi orele disponibile",
  "talkcta.note":
    "Vom ști deja ce ai căutat, așa că nu va trebui să explici din nou.",
  "talkcta.today": "Ai nevoie de ajutor astăzi? Scrie-ne acum.",
  "refine.back": "Înapoi la rezultate",
  "refine.title": "Restrânge sau extinde",
  "refine.howFar": "Cât de departe căutăm",
  "refine.onlyShow": "Arată doar",
  "refine.nothingMatches": "Nimic nu se potrivește cu aceste filtre.",
  "refine.tryRemoving": "Încearcă să scoți „#”.",
  "refine.inScope": "Căutăm în: #.",
  "refine.tryWiden": "Încearcă să cauți mai departe.",
  "refine.update": "Actualizează căutarea",
  "scope.myArea": "Zona mea",
  "scope.nearby": "Zonele din apropiere",
  "scope.allScotland": "Toată Scoția",
  "scope.online": "Doar online",
  "filter.free": "Gratuit",
  "filter.openNow": "Deschis acum",
  "filter.noForms": "Fără formulare",
  "saved.title": "Lista ta de salvate",
  "saved.titleNamed": "Lista de salvate a lui #",
  "saved.emptyBody":
    "Când găsești ceva la care merită să revii, apasă Salvează. Va fi aici, iar noi îți spunem înainte să se închidă.",
  "saved.emptyCta": "Găsește sprijin",
  "saved.soonest": "Primele sunt cele care se închid cel mai curând.",
  "saved.seeWhatElse": "Vezi ce mai este",
  "saved.findSomethingElse": "Găsește altceva",
  "saved.settings": "Memento-uri și setările contului",
  "saved.noClosingDate": "Fără dată de închidere",
  "saved.noLongerRunning": "Nu se mai desfășoară",
  "service.backToResults": "Înapoi la rezultatele tale",
  "service.cost": "Cost",
  "service.where": "Unde",
  "service.howToTakePart": "Cum participi",
  "service.continueTo": "Continuă pe #",
  "service.closedTitle": "Aceasta s-a încheiat",
  "service.closedBody":
    "S-ar putea să se repete. # îți poate spune când începe următoarea, iar acum ar putea exista ceva asemănător.",
  "service.askNext": "Întreabă când începe următoarea",
  "service.findSimilar": "Găsește sprijin asemănător",
  "service.somethingWrong": "Este ceva greșit aici?",
  "discover.title": "Cine lucrează pentru femei în Scoția",
  "discover.lede":
    "Fiecare organizație de aici a fost verificată de noi. Caut-o după nume sau citește în jos după ce ai nevoie.",
  "discover.searchLabel": "Caută o organizație după nume sau după ce face",
  "discover.searchButton": "Caută organizații",
  "discover.orAnswer":
    "Sau răspunde la trei întrebări și îți găsim noi ceva potrivit",
  "discover.byZone": "Caută după Zona de acces",
  "discover.byZoneNote":
    "Felurile de sprijin în jurul cărora este construită platforma. Fiecare duce la organizațiile care lucrează acolo.",
  "discover.nobodyYet": "Încă nu este nimeni aici",
  "discover.byNeed": "Caută după ce ai nevoie",
  "discover.byNeedNote": "Spune-o așa cum ai spune-o cu voce tare.",
  "zone.allZones": "Toate Zonele de acces",
  "zone.eyebrow": "Zonă de acces",
  "zone.empty":
    "Încă nu este nimeni listat în această zonă. Asta nu înseamnă că nu există ajutor, așa că spune-ne de ce ai nevoie și căutăm în tot ce avem.",
  "zone.tellUs": "Spune-ne de ce ai nevoie",
  "zone.alsoWorks": "Lucrează și în această zonă",
  "need.everything": "Tot ce poți răsfoi",
  "need.eyebrow": "De ce ai nevoie",
  "discover.eyebrow": "Descoperă",
  "discover.searchAria": "Caută",
  "discover.clear": "Șterge",
  "discover.nothingMatches": "Nimic nu se potrivește cu „#”",
  "discover.forQuery": "pentru „#”",
  "discover.searchNote":
    "Căsuța aceasta caută doar prin nume și descrieri. Dacă încerci să descrii o situație, nu să găsești o anumită organizație, cele trei întrebări se descurcă mult mai bine.",
  "discover.tryQuestions": "Încearcă cele trei întrebări.",
  "need.emptyShort": "Încă nu este nimeni aici.",
  "need.workOnThis": "Primele sunt cele care au ceva deschis.",
  "need.empty":
    "Încă nu este nimeni aici. Asta nu înseamnă că nu există ajutor, așa că spune-ne de ce ai nevoie și căutăm în tot ce avem.",
  "talk.title": "Vorbește cu cineva",
  "talk.pickTime": "Alege o oră care îți convine",
  "talk.pickBody":
    "Te sunăm noi. Durează aproximativ o jumătate de oră, nu costă nimic și nu ai nevoie de cont.",
  "talk.noneTitle": "Nimic liber în următoarele săptămâni",
  "talk.noneBody":
    "Este neobișnuit și nu înseamnă că nimeni nu te poate ajuta. Scrie-ne și găsim o oră în afara acestui calendar.",
  "talk.otherWays": "Alte moduri de a ne contacta",
  "talk.ukTime": "Toate orele sunt ora Marii Britanii.",
  "talk.todayInstead":
    "Ai nevoie de ajutor astăzi, nu la o oră programată? Există moduri mai rapide de a ne contacta.",
  "booking.name": "Numele tău",
  "booking.nameNote": "Cum ai vrea să ți se spună",
  "booking.email": "Adresa de e-mail",
  "booking.emailNote":
    "Trimitem ora aici, cu un fișier de calendar pe care îl poți adăuga dintr-o atingere.",
  "booking.phone": "Număr de telefon",
  "booking.phoneNote": "Doar dacă preferi să te sunăm în loc să îți scriem.",
  "booking.notes": "Ceva ce ar trebui să știm dinainte",
  "booking.notesNote":
    "Opțional. Nu citește nimeni asta în afară de persoana care te sună.",
  "booking.optional": "Opțional",
  "booking.submit": "Rezervă această oră",
  "confirm.title": "Confirmă apelul",
  "confirm.pickDifferent": "Alege altă oră",
  "confirm.privacy":
    "Folosim numele și adresa ta de e-mail doar ca să te sunăm. Nu se creează niciun cont și nu ești adăugată pe nicio listă.",
  "booked.title": "Este rezervat",
  "booked.sent":
    "Am trimis ora în căsuța ta de e-mail, cu un fișier de calendar pe care îl poți adăuga pe telefon dintr-o atingere. Poate dura un minut.",
  "booked.reference": "Numărul tău de referință",
  "booked.prepare":
    "Nu trebuie să pregătești nimic. Persoana care te sună va fi citit deja ce căutai, așa că nu o iei de la zero.",
  "booked.move":
    "Dacă ora nu îți mai convine, răspunde la acel e-mail și o mutăm.",
  "booked.keepLooking": "Caută mai departe între timp",
  "booked.backToStart": "Înapoi la început",
  "account.title": "Intră în contul tău",
  "account.saveIt": "Conectează-te ca să salvezi",
  "account.saveBody":
    "Salvarea este singurul lucru de aici care are nevoie de cont, ca lista ta să fie acolo data viitoare. Am păstrat ce tocmai ai salvat și te așteaptă după ce intri.",
  "account.otp":
    "Îți trimitem un cod de unică folosință ca să intri. Nicio parolă de ținut minte.",
  "account.emailPrivate": "Adresa ta de e-mail rămâne privată și în siguranță.",
  "account.carryOn": "Continuă fără să salvezi",
  "account.signInHere": "Conectează-te aici",
  "code.title": "Verifică-ți e-mailul",
  "code.sentTo": "Am trimis un cod de conectare la:",
  "code.justSearch": "Caută mai departe fără să te conectezi",
  "code.enterBelow": "Scrie-l mai jos și ai intrat.",
  "code.arrive":
    "Ar trebui să ajungă într-un minut. Dacă nu a ajuns, verifică folderul spam.",
  "code.different": "Folosește altă adresă",
  "profile.title": "Completează-ți profilul",
  "profile.subline":
    "Doar un nume cu care să te salutăm. Nimic de aici nu este obligatoriu.",

  "nav.home": "Acasă",
  "nav.discover": "Descoperă",
  "nav.forOrgs": "Pentru organizații",
  "nav.faq": "Întrebări",
  "nav.signIn": "Conectează-te",
  "nav.signOut": "Deconectează-te",
  "nav.saved": "Salvate",
  "nav.settings": "Setări",
  "nav.remindersSettings": "Memento-uri și setări",
  "nav.sections": "Secțiuni",
  "nav.menu": "meniu",
  "nav.homeAria": "HWS Pathgrid, acasă",
  "nav.findNext": "Găsește pasul tău următor",
  "footer.label": "Subsol",
  "footer.tagline":
    "Conectăm femeile cu oportunități — dincolo de o încăpere, un cod poștal sau o zi.",
  "footer.free":
    "Gratuit, și nu ai nevoie de cont ca să cauți, să citești sau să aplici.",
  "footer.forYou": "Pentru tine",
  "footer.find": "Găsește o soluție",
  "footer.discover": "Descoperă organizații",
  "footer.faq": "Întrebări frecvente",
  "footer.help": "Ajutor",
  "footer.forOrgs": "Pentru organizații",
  "footer.meetWomen": "Cunoașteți femeile",
  "footer.whyList": "De ce să vă înscrieți",
  "footer.whoListed": "Cine este deja înscris",
  "footer.legal": "Legal",
  "footer.privacy": "Politica de confidențialitate",
  "footer.terms": "Termeni de utilizare",
  "footer.talk": "Vorbește cu o persoană",
  "cookie.region": "Despre cookie-uri",
  "cookie.claim": "Folosim câteva cookie-uri și niciunul nu te urmărește.",
  "cookie.detail":
    "Te țin conectată și îți rețin limba. Nimic nu este urmărit sau vândut.",
  "cookie.more": "Mai multe în politica de confidențialitate",
  "cookie.okay": "Bine",
  "loading.page": "Se \u00eencarc\u0103 pagina",
  "loading.organisations": "Se \u00eencarc\u0103 organiza\u021biile",
  "loading.organisation": "Se \u00eencarc\u0103 organiza\u021bia",
  "loading.saved": "Se \u00eencarc\u0103 lista ta de salvate",
  "loading.listing": "Se \u00eencarc\u0103 acest anun\u021b",

  "faq.title": "Întrebări frecvente",
  "faq.lede":
    "HWS Path Grid conectează femeile din toată Scoția cu sprijinul care li se potrivește cu adevărat și oferă organizațiilor din spate un singur loc în care pot fi găsite.",
  "faq.notHere":
    "Dacă răspunsul de care ai nevoie nu este aici, noi răspundem la fiecare mesaj.",
  "faq.talkPerson": "Vorbește cu o persoană.",
  "faq.forWomen": "Dacă ești în căutare de sprijin",
  "faq.forOrgs": "Dacă sunteți o organizație",

  "meta.home.title": "Găsește sprijin pentru femei în Scoția",
  "meta.home.desc":
    "Spune-ne cu cuvintele tale de ce ai nevoie și îți arătăm câțiva pași următori care merită făcuți. Fiecare organizație este verificată. Fără cont.",
  "meta.find.desc":
    "Spune-ne cu cuvintele tale de ce ai nevoie. Trei întrebări, fără cont, și căutăm în fiecare organizație din Scoția pe care am verificat-o.",
  "meta.where.desc":
    "Spune-ne unde ești, ca să punem primele lucrurile din apropiere și să îți arătăm totuși ce este deschis pentru toată lumea.",
  "meta.situation.desc":
    "Alege tot ce ți se potrivește. Asta schimbă ce îți punem în față.",
  "meta.results.desc":
    "Sprijinul pe care l-am găsit pentru tine, cu motivul pentru care fiecare este aici.",
  "meta.refine.desc":
    "Restrânge căutarea sau extinde-o, când primul set de rezultate nu este cel potrivit.",
  "meta.change.title": "Schimbă-ți răspunsurile",
  "meta.change.desc":
    "Schimbă ce ne-ai spus și căutăm din nou în toate organizațiile.",
  "meta.startOver.desc":
    "Șterge răspunsurile și ia cele trei întrebări de la capăt.",
  "meta.discover.title": "Descoperă organizații din toată Scoția",
  "meta.discover.desc":
    "Răsfoiește organizațiile care lucrează cu femei în toată Scoția, după felul de sprijin pe care îl oferă sau după ce ai nevoie.",
  "meta.faq.desc":
    "Ce întreabă femeile înainte să folosească acest site și ce întreabă organizațiile înainte să se înscrie. Răspunsuri pe șleau.",
  "meta.orgs.desc":
    "Înscrieți ce organizați pe HWS Path Grid și ajungeți la femeile cărora li se potrivește cu adevărat. Gratuit, verificat o dată, și nimeni nu plătește ca să apară.",
  "meta.go.title": "Pleci ca să aplici",
  "meta.go.desc":
    "Te ducem pe pagina organizației, ca să poți aplica direct la ea.",
  "meta.help.desc":
    "Dacă nu găsești ce îți trebuie, sau ceva de aici pare greșit, spune-ne. Preferăm să auzim de la tine decât să renunți.",
  "meta.saved.desc": "Tot ce ai salvat, într-un singur loc.",
  "meta.privacy.desc":
    "Ce colectează HWS Path Grid când folosești site-ul, de ce, și ce nu vom face niciodată cu aceste date.",
  "meta.terms.desc":
    "Regulile de folosire a HWS Path Grid, pentru femeile care caută aici și pentru organizațiile înscrise.",
  "meta.talk.desc":
    "Rezervă un apel gratuit cu cineva care te poate îndruma în direcția potrivită.",
  "meta.confirm.desc": "Ultimul pas înainte ca apelul tău să fie rezervat.",
  "meta.booked.title": "Apelul tău este rezervat",
  "meta.booked.desc": "Ce urmează.",
  "meta.account.desc":
    "Conectează-te sau creează un cont, ca sprijinul salvat să fie acolo data viitoare când revii.",
  "meta.accountCode.desc": "Ți-am trimis un cod din șase cifre pentru conectare.",
  "meta.profile.desc":
    "Adaugă-ți numele ca să ne putem adresa cum se cuvine. Nimic de aici nu este obligatoriu.",
  "meta.settings.desc":
    "Memento-urile tale, limba ta și ce se întâmplă cu contul tău.",
  "meta.emailChange.title": "Schimbă-ți adresa de e-mail",
  "meta.emailChange.desc":
    "Mută-ți contul, și tot ce este salvat pe el, pe altă adresă.",
  "meta.emailCode.title": "Verifică noua ta căsuță",
  "meta.emailCode.desc": "Scrie codul pe care l-am trimis la noua ta adresă.",

  "settings.savedList": "Lista mea de salvate",
  "settings.reminders": "Memento-uri",
  "settings.howFar": "Cu cât timp înainte",
  "settings.nothingElse":
    "Nu trimitem nimic altceva. Fără newsletter, fără sugestii.",
  "settings.neverName":
    "E-mailurile de memento nu numesc niciodată felul de sprijin, în caz că altcineva îți citește căsuța.",
  "settings.emailChanged":
    "Gata. Contul tău este acum pe această adresă, iar lista salvată a venit cu el.",
  "reminders.beforeDeadline": "Înainte de termen",
  "change.heard": "Iată ce am înțeles",
  "change.weWillShow":
    "Îți vom arăta un număr mic de pași următori, cel mai potrivit primul. Nimeni nu plătește ca să apară aici.",
  "startover.confirm": "Asta îți șterge răspunsurile. Începem din nou?",
  "startover.note":
    "Tot ce ai salvat rămâne unde este. Dispare doar ce ne-ai spus despre ce ai nevoie.",
  "startover.yes": "Da, începe din nou",
  "startover.keep": "Păstrează-mi răspunsurile",
  "legal.onThisPage": "Pe această pagină",
  "legal.questions":
    "Întrebările despre oricare dintre acestea ajung la o persoană, nu la un formular.",
  "legal.draftTitle": "Aceasta este o ciornă",
  "legal.draftBody":
    "Textul de mai jos descrie exact cum funcționează platforma astăzi, dar nu a trecut încă printr-o verificare finală. Este publicat ca să îl poți citi și să ne ții de cuvânt, nu pentru că ar fi terminat.",
  "legal.draftAsk":
    "Dacă ceva de aici contează pentru o decizie pe care o iei, întreabă-ne.",
  "legal.pendingTitle": "Acesta încă se scrie",
  "legal.pendingBody":
    "Textul este la noi și va fi publicat aici înainte ca platforma să se deschidă. Nimic de pe această pagină nu este în vigoare până atunci.",
  "legal.pendingAsk":
    "Dacă vrei să știi între timp ce se întâmplă cu ce scrii, întreabă-ne și îți spunem pe șleau.",
  "photos.aria": "Fotografii de la Holistic Wellbeing Summit",
  "photos.credit": "Holistic Wellbeing Summit",
  "testimonials.aria": "Ce spun femeile",
  "testimonials.prev": "Citatul anterior",
  "testimonials.next": "Citatul următor",
  "form.sendCode": "Trimite-mi un cod de conectare",
  "form.yourCode": "Codul tău de conectare",
  "form.codeWorks": "Codul este valabil 15 minute.",
  "form.newCodeSent": "Am trimis un cod nou. Poate dura un minut să ajungă.",
  "form.sendNewCode": "Trimite un cod nou",
  "form.theCodeWeSent": "Codul pe care l-am trimis",
  "form.newEmail": "Noua adresă de e-mail",
  "form.sendToNew": "Trimite un cod la noua adresă",
  "form.firstName": "Prenume",
  "form.lastName": "Nume",
  "form.phoneOptional": "Număr de telefon (opțional)",
  "form.phoneNote": "Îl folosim doar dacă ne ceri să te sunăm înapoi.",
  "form.continue": "Continuă",
  "org.allOrgs": "Toate organizațiile",
  "org.checked": "Verificată de HWS",
  "org.website": "Site-ul lor",
  "org.whatTheyDo": "Ce fac",
  "org.whatTheyOffer": "Ce oferă",
  "org.whoTheyWorkWith": "Cu cine lucrează",
  "org.whoTheyCanHelp": "Pe cine pot ajuta",
  "org.whoTheyCannot": "Pe cine nu pot ajuta",
  "org.when": "Când",
  "org.howToReach": "Cum îi contactezi",
  "org.zones": "Zone de acces",
  "org.mainOne": "Zona lor principală",
  "org.nothingRunning":
    "Momentan nu au nimic în desfășurare. Spune-ne de ce ai nevoie și căutăm în tot ce avem.",
  "org.orTellUs": "Sau spune-ne de ce ai nevoie și îți găsim noi ceva potrivit",

  "orgpage.heroTitle":
    "Femeile pentru care existați, fără să fie nevoie să vă găsească",
  "orgpage.heroBody":
    "Munca o faceți deja. Problema este că o femeie trebuie să vă știe numele ca să ajungă pe site-ul vostru. Aici ea își descrie situația, iar noi vă punem în fața ei pentru că sunteți răspunsul potrivit, nu pentru că a ghicit.",
  "orgpage.haveAccount": "Am deja un cont",
  "orgpage.freeNote":
    "Gratuit. Fără plasare plătită, fără publicitate, și nimeni nu plătește ca să apară mai sus.",
  "orgpage.whatYouGet": "Ce primiți",
  "orgpage.reach": "Acoperire, și o dovadă a ei",
  "orgpage.gain1Title": "Femei care căutau exact ce faceți",
  "orgpage.gain1Body":
    "Ea își descrie situația cu cuvintele ei. O potrivim cu cine sunteți pregătiți să ajutați, ce oferiți, unde lucrați și cât costă. Ajunge la voi știind deja dacă se încadrează.",
  "orgpage.gain2Title": "Cifre pe care le puteți duce unui finanțator",
  "orgpage.gain2Body":
    "Câte femei au ajuns pe site-ul vostru, câte au citit pagina organizației și cum a mers fiecare lucru publicat. Nu o cifră de fațadă: prima numără oamenii care au dat clic și au ajuns la voi.",
  "orgpage.gain3Title": "Verificare o singură dată, nu la fiecare anunț",
  "orgpage.gain3Body":
    "Vă verificăm într-un registru public sau la finanțatorul vostru când vă înscrieți. După aceea publicați ce vreți, când vreți, fără să ne așteptați.",
  "orgpage.gain4Title": "Mai puține solicitări nepotrivite",
  "orgpage.gain4Body":
    "Spuneți pe cine nu puteți ajuta, iar noi arătăm asta. Femeile se exclud singure înainte să vă contacteze, ceea ce înseamnă timp câștigat pentru cine vă răspunde la mesaje.",
  "orgpage.fourSteps": "Patru pași, iar unul dintre ei este al nostru",
  "orgpage.step1Title": "Spuneți-ne cine sunteți",
  "orgpage.step1Body":
    "Câteva întrebări despre ce faceți, pe cine ajutați și unde. Zece minute, și puteți opri la jumătate și reveni.",
  "orgpage.step2Title": "Vă verificăm",
  "orgpage.step2Body":
    "Într-un registru public sau la finanțatorul vostru. O singură verificare, făcută de un om.",
  "orgpage.step3Title": "Publicați ce este deschis",
  "orgpage.step3Body":
    "Un curs, o finanțare, un program cu acces liber, un program de mentorat. Orice la care o femeie are o cale de intrare.",
  "orgpage.step4Title": "Ea îl găsește când i se potrivește",
  "orgpage.step4Body":
    "Nu pentru că v-a căutat numele. Pentru că ce a descris s-a potrivit cu ce organizați.",
  "orgpage.whereYouSit": "Unde v-ați situa",
  "orgpage.zonesBody":
    "Vă alegeți singuri, una principală și până la încă două. Majoritatea femeilor au nevoie de mai multe deodată, iar majoritatea serviciilor acoperă doar una, și acesta este golul pe care platforma îl închide.",

  "legal.englishApplies":
    "Titlurile de pe această pagină sunt în limba ta. Textul în sine este în engleză, iar versiunea engleză este cea care se aplică.",
  "legal.askInYourLanguage":
    "Întreabă-ne despre orice parte din el și îți răspundem.",

  "reason.youToldUs": "ne-ai spus că #",
  "reason.and": "și",
  "reason.youAskedAbout": "ai întrebat despre #",
  "reason.runsIn": "acesta se desfășoară în #",
  "reason.isOnline": "acesta este online, așa că nu contează unde ești",
  "reason.acrossScotland": "acesta este deschis în toată Scoția",
  "reason.closest":
    "este unul dintre cele mai apropiate lucruri pe care le avem de ce ai descris.",
  "reason.clauseJoin": ", și ",
};

const so: Catalogue = {
  "language.label": "Luqadda",
  "hero.title": "Waxaan ka caawinnaa haweenka inay helaan taageerada ay u baahan yihiin",
  "hero.body":
    "Noo sheeg waxaad u baahan tahay erayadaada, waxaanan ku tusi doonnaa dhowr tallaabo oo mudan in la qaado. Saddex su'aal, xisaab looma baahna.",
  "hero.cta": "Raadi xal",
  "hero.browse": "Ama arag cidda jirta",
  "why.eyebrow": "Sida ay u shaqeyso",
  "why.title":
    "In aad ogaato in wax jiro ma aha sida in aad ogaato inuu kuu furan yahay",
  "hero.begin": "Xaggee ayaad jeclaan lahayd inaad ka bilowdo?",
  "hero.beginFind": "Raadi tallaabadaada xigta",
  "hero.beginBrowse": "Arag cidda jirta",
  "origin.eyebrow": "Sababta ay u jirto",
  "origin.title": "Waxay ka bilaabatay qol sidan oo kale ah",
  "origin.bodyOne":
    "Holistic Wellbeing Summit wuxuu haweenka ku keenaa hal qol dadka runtii caawin kara. Qof ayaa is-barid sameeya. Qof ayaa magacaabaya sanduuq aadan waligaa maqlin, haddana waad ogtahay inuu jiro.",
  "origin.bodyTwo":
    "Kadibna qolku waa madhnaadaa. Hay'aduhu waxay ku noqdaan shaqadooda, haweenkuna weli way u baahan yihiin. Barahan waa qolkaas oo albaabbadiisa la furay, oo loogu talagalay haweeney kasta oo aan halkaas joogin.",
  "how.oneTitle": "Noo sheeg, erayadaada",
  "how.oneBody":
    "Waxaad u baahan tahay, meesha aad ku sugan tahay, iyo wax kasta oo ku saabsan xaaladdaada. Saddex su'aal oo keliya.",
  "how.twoTitle": "Waan miisaameynaa",
  "how.twoBody":
    "Marka la barbar dhigo waxa mid walba loogu talagalay, cidda u furan, meesha uu ka dhacayo iyo sida aad u gaari karto. Natiijada waxaa lagu taageeray AI.",
  "how.threeTitle": "Waxaad heshaa dhowr fursadood oo dhab ah",
  "how.threeBody":
    "Dhowr, ma aha boqol, mid walbana wuxuu leeyahay sababta uu kuugu habboon yahay, intee ku kacayso, cidda loogu talagalay, iyo waxa dhacaya marka aad xiriirto.",
  "how.forWomen": "Haweenka",
  "how.forOrgs": "Hay'adaha",
  "how.orgOneTitle": "Noo sheeg cidda aad tihiin",
  "how.orgOneBody":
    "Dhowr su'aalood oo ku saabsan waxaad qabataan, cidda aad rabtaan inaad xal siisaan iyo meesha. Isdiiwaangelintu waa degdeg.",
  "how.orgTwoTitle": "Hal mar ayaan idin hubinnaa",
  "how.orgTwoBody":
    "Iyadoo lagu salaynayo diiwaan dadweyne ama taariikhda shaqadiinna. Hubinta kadib, waxaad soo dhigtaan waxaad rabtaan, markaad rabtaan.",
  "how.orgThreeTitle": "Way heshaa marka ay ku habboon tahay",
  "how.orgThreeBody":
    "Ma aha sababtoo ah magaciinna ayay raadisay, laakiin waa sababtoo ah waxa ay sharraxday ayaa u dhigma xalka aad bixinaysaan.",
  "zones.eyebrow": "Aagagga Helitaanka",
  "zones.title": "Nooc kasta oo taageero ah, hal meel",
  "zones.body":
    "Shaqo, lacag, waxbarasho, caafimaad, ganacsi, cod lahaansho. Haweenka badidood hal mar ayay u baahan yihiin wax ka badan mid, adeegyada badidooduna mid keliya ayay qabtaan. Taasi waa farqiga uu barahan u jiro inuu xiro.",
  "zones.browse": "Fiiri dhammaan kuwa barahan ku jira",
  "trust.checkedTitle": "Macluumaad la xaqiijiyay",
  "trust.checkedBody":
    "Hay'ad kasta oo halkan ku jirta waa la hubiyay diiwaan dadweyne ama deeq-bixiyeheeda ka hor inta aysan wax soo dhigin. Liis kastaa wuxuu wataa taariikhda ugu dambeysay ee la xaqiijiyay.",
  "trust.privateTitle": "Macluumaadkaagu waa qarsoodi",
  "trust.privateBody":
    "Uma baahnid xisaab si aad u raadiso, u akhriso ama u codsato. Waxa aad qorto waxaa loo isticmaalaa oo keliya in lagu habeeyo natiijooyinkaaga, lamana iibiyo, lama gudbiyo, loomana isticmaalo in lagugu sameeyo astaan.",
  "trust.paidTitle": "Ma jiro wax lacag lagu daabacay",
  "trust.paidBody":
    "Ma jiro boos lacag lagu iibsado iyo xayeysiin toona. Natiijooyinka waxaa loo kala horreysiiyaa sida ay ugu habboon yihiin waxa aad noo sheegtay, liis kastaana wuxuu sheegayaa sababta uu u habboon yahay.",
  "orgs.title": "Ma waxaad maamushaa wax ay haweenku ka ogaan lahaayeen?",
  "orgs.body":
    "Halkan soo dhig, wuxuuna gaadhaa haweenka runtii ku habboon, ee ma aha oo keliya cidda si shil ah u hesha websaydkaaga. Waa bilaash, hal marna ayaan idin hubinnaa, ee ma aha liis walba.",
  "orgs.cta": "La kulan haweenka",

  "flow.back": "Dib u noqo",
  "flow.questionOf": "Su'aasha # ka mid ah 3",
  "flow.next": "Xiga",
  "flow.changeAnswers": "Beddel jawaabahaaga",
  "flow.searchCredit": "Raadinta waxaa taageera AI",
  "flow.orgPrompt":
    "Ma waxaad tahay hay'ad ama qof bixiya xal loogu talagalay haweenka?",
  "flow.orgLink": "Hay'adaha",
  "q1.title": "Maxaad u baahan tahay caawimo?",
  "q1.subline": "Erayadaada. Ma jiro jawaab qaldan.",
  "q1.placeholder":
    "tusaale: ku noqoshada shaqada kadib markii aan hooyaday daryeelay",
  "q1.blank": "Qor dhowr eray si aan u ognaanno meesha aan ka raadinno.",
  "q1.searchOn": "Waxaan ku raadin doonnaa wixii aad qortay.",
  "q1.suggestions": "Talooyin",
  "q2.title": "Xaggee ka raadinnaa taageerada?",
  "q2.subline": "Magaalo, koodh boosto, ama degmadaada.",
  "q2.placeholder": "tusaale EH48",
  "q2.unknown":
    "Meeshaas ma naqaan. Isku day magaalo u dhow, ama ka raadi Scotland oo dhan.",
  "q2.or": "Ama",
  "q2.anywhere": "Meel kasta oo Scotland ah",
  "q2.onlineOnly": "Taageero online oo keliya",
  "q2.hint":
    "Qor meel, ama dooro mid ka mid ah labada ikhtiyaar ee kor ku xusan.",
  "q3.title": "Maxaa si fiican u qeexaya xaaladdaada?",
  "q3.subline":
    "Tani waxay naga caawisaa inaan helno taageero aad xaq u yeelan karto. Waxaad dooran kartaa wax ka badan mid.",
  "q3.hint":
    "Dooro wax kasta oo kugu habboon, ama dooro Doorbidayaa inaanan sheegin.",
  "q3.privacy":
    "Jawaabahaaga ma kaydinno, umana gudbinno hay'adaha aan ku tusinno.",
  "results.title": "Tallaabooyinkaaga xiga",
  "results.refine": "Yaree ama balaadhi",
  "results.ordered":
    "Waxaa loo kala horreysiiyay sida ay ugu habboon yihiin waxa aad noo sheegtay. Qofna lacag uma bixiyo inuu halkan ka muuqdo.",
  "results.orgsOnly":
    "Wax furan oo si dhow kuugu habboon ma jiro, laakiin hay'adahan waxay ka shaqeeyaan waxa aad wax ka weyddiisay.",
  "results.thatsAll":
    "Taasi waa wax kasta oo si dhow u habboon. Waxaad balaadhin kartaa raadinta ama beddeli kartaa wixii aad noo sheegtay.",
  "results.showScotland": "I tus taageero Scotland oo dhan",
  "results.changeMine": "Beddel jawaabahayga",
  "results.startOver": "Dib u bilow",
  "card.bestMatch": "Kan ugu habboon",
  "card.save": "Kaydi",
  "card.saved": "La kaydiyay",
  "card.saveAria": "Kaydi #",
  "card.savedAria": "La kaydiyay: #",
  "card.whoFor": "Yuu u yahay",
  "card.whatToExpect": "Waxa la filayo",
  "card.whyMatched": "Sababta uu kuugu habboon yahay:",
  "card.learnMore": "Wax badan baro",
  "card.missing": "Weli lama buuxin",
  "card.closes": "Wuxuu xirmayaa #",
  "card.closed": "Waxaa la xiray #",
  "card.verified": "La xaqiijiyay",
  "card.verifiedOn": "La xaqiijiyay · cusboonaysiintii ugu dambeysay #",
  "nomatch.title": "Hadda waxba kuuma aanan helin",
  "nomatch.body":
    "Taasi macnaheedu ma aha in caawimo aanay jirin. Macnaheedu waa inaanaan maanta haysan wax u dhigma waxa aad codsatay.",
  "nomatch.tryFirst": "Marka hore tan isku day",
  "nomatch.widen": "U balaadhi Scotland oo dhan",
  "nomatch.onlineTitle": "Taageero online oo keliya",
  "nomatch.changeTitle": "Beddel waxa aad codsatay",
  "nomatch.changeNote":
    "Erayo kala duwan mararka qaar waxay helaan wax kala duwan. Mar kale way mudan tahay.",
  "nomatch.startTitle": "Dib u bilow",
  "nomatch.startNote": "Nadiifi wax walba oo ka bilow su'aasha koowaad.",
  "orgsAnswer.title": "Dadkanna way ku caawin karaan",
  "orgsAnswer.body":
    "Hay'ado ka shaqeeya waxa aad wax ka weyddiisay. Waxaa dhici karta inaanay hadda waxba furnayn, laakiin si toos ah ayaad ugu tegi kartaa.",
  "talkcta.title": "Ma doonaysaa inaad qof la hadasho?",
  "talkcta.body":
    "Qof og waxa jira, oo jihada saxda ah ku tilmaami kara. Dooro waqti kugu habboon. Waxba kuma kacayso, xisaabna looma baahna.",
  "talkcta.cta": "Arag waqtiyada banaan",
  "talkcta.note":
    "Horay ayaan u ogaan doonnaa waxa aad raadisay, markaa mar kale ma sharraxi doontid.",
  "talkcta.today": "Maanta caawimo ma u baahan tahay? Hadda nala soo xiriir.",
  "refine.back": "Ku noqo natiijooyinka",
  "refine.title": "Yaree ama balaadhi",
  "refine.howFar": "Intee in le'eg ayaan raadinnaa",
  "refine.onlyShow": "Tus oo keliya",
  "refine.nothingMatches": "Shaandhayntan waxba lama helin.",
  "refine.tryRemoving": "Isku day inaad ka saarto “#”.",
  "refine.inScope": "Waxaan ka raadinaynaa: #.",
  "refine.tryWiden": "Isku day inaad balaadhiso meesha la raadinayo.",
  "refine.update": "Cusboonaysii raadintayda",
  "scope.myArea": "Aaggayga",
  "scope.nearby": "Aagagga u dhow",
  "scope.allScotland": "Scotland oo dhan",
  "scope.online": "Online oo keliya",
  "filter.free": "Bilaash",
  "filter.openNow": "Hadda furan",
  "filter.noForms": "Foom la'aan",
  "saved.title": "Liiskaaga la kaydiyay",
  "saved.titleNamed": "Liiska # ee la kaydiyay",
  "saved.emptyBody":
    "Markaad hesho wax mudan inaad ku soo noqoto, riix Kaydi. Halkan ayuu joogi doonaa, waanan kuu sheegi doonnaa ka hor inta uusan xirmin.",
  "saved.emptyCta": "Raadi taageero",
  "saved.soonest": "Waxa ugu horreeya waa waxa ugu dhow inuu xirmo.",
  "saved.seeWhatElse": "Arag waxa kale ee jira",
  "saved.findSomethingElse": "Raadi wax kale",
  "saved.settings": "Xusuusinta iyo dejinta xisaabta",
  "saved.noClosingDate": "Taariikh xiritaan ma leh",
  "saved.noLongerRunning": "Mar dambe ma socdo",
  "service.backToResults": "Ku noqo natiijooyinkaaga",
  "service.cost": "Qiimaha",
  "service.where": "Meesha",
  "service.howToTakePart": "Sida aad uga qaybqaadan karto",
  "service.continueTo": "U gudub #",
  "service.closedTitle": "Kan waa la xiray",
  "service.closedBody":
    "Waxaa laga yaabaa inuu mar kale socdo. # ayaa kuu sheegi kara marka kan xiga furmayo, waxaana laga yaabaa inuu hadda jiro wax la mid ah.",
  "service.askNext": "Weydii goorta kan xiga bilaabmayo",
  "service.findSimilar": "Raadi taageero la mid ah",
  "service.somethingWrong": "Ma jiraa wax qaldan oo kan ku saabsan?",
  "discover.title": "Cidda u shaqeysa haweenka Scotland",
  "discover.lede":
    "Hay'ad kasta oo halkan ku jirta waannu hubinnay. Mid magac ku raadi, ama hoos ugu akhri waxa aad u baahan tahay.",
  "discover.searchLabel": "Hay'ado ku raadi magac ama waxa ay qabtaan",
  "discover.searchButton": "Raadi hay'ado",
  "discover.orAnswer": "Ama ka jawaab saddex su'aal oo waannu kuu raadinaynaa",
  "discover.byZone": "Ka eeg Aagga Helitaanka",
  "discover.byZoneNote":
    "Noocyada taageero ee barahan lagu dhisay. Mid kastaa wuxuu ku geynayaa hay'adaha ka shaqeeya.",
  "discover.nobodyYet": "Weli qofna halkan ma joogo",
  "discover.byNeed": "Ka eeg waxa aad u baahan tahay",
  "discover.byNeedNote": "U sheeg sidaad afka uga sheegi lahayd.",
  "zone.allZones": "Dhammaan Aagagga Helitaanka",
  "zone.eyebrow": "Aagga Helitaanka",
  "zone.empty":
    "Weli qofna aaggan kuma qorna. Taasi macnaheedu ma aha in caawimo aanay jirin, markaa noo sheeg waxa aad u baahan tahay waanan ka raadinaynaa wax kasta oo aan haysanno.",
  "zone.tellUs": "Noo sheeg waxa aad u baahan tahay",
  "zone.alsoWorks": "Aaggan sidoo kale way ka shaqeeyaan",
  "need.everything": "Wax kasta oo aad eegi karto",
  "need.eyebrow": "Waxa aad u baahan tahay",
  "discover.eyebrow": "Sahan",
  "discover.searchAria": "Raadi",
  "discover.clear": "Nadiifi",
  "discover.nothingMatches": "Waxba lama helin “#”",
  "discover.forQuery": "ee “#”",
  "discover.searchNote":
    "Sanduuqan wuxuu eegaa magacyada iyo sharraxaadda oo keliya. Haddii aad isku dayeyso inaad sharraxdo xaaladdaada halkii aad ka raadin lahayd hay'ad gaar ah, saddexda su'aal ayaa aad uga fiican.",
  "discover.tryQuestions": "Isku day saddexda su'aal.",
  "need.emptyShort": "Weli qofna halkan kuma qorna.",
  "need.workOnThis": "Kuwa wax furan haysta ayaa hore u yimaada.",
  "need.empty":
    "Weli qofna halkan kuma qorna. Taasi macnaheedu ma aha in caawimo aanay jirin, markaa noo sheeg waxa aad u baahan tahay waanan ka raadinaynaa wax kasta oo aan haysanno.",
  "talk.title": "Qof la hadal",
  "talk.pickTime": "Dooro waqti kugu habboon",
  "talk.pickBody":
    "Waannu ku soo wici doonnaa. Waxay qaadataa qiyaastii nus saac, waxba kuma kacayso, xisaabna looma baahna.",
  "talk.noneTitle": "Toddobaadyada soo socda waqti banaan ma jiro",
  "talk.noneBody":
    "Taasi waa wax aan caadi ahayn, mana aha in qofna uu ku caawin karin. Nala soo xiriir waanan kuu heli doonnaa waqti aan kalandarkan ku jirin.",
  "talk.otherWays": "Siyaabo kale oo nalagu gaari karo",
  "talk.ukTime": "Waqtiyada oo dhan waa waqtiga Boqortooyada Midowday.",
  "talk.todayInstead":
    "Maanta caawimo ma u baahan tahay halkii aad sugi lahayd waqti ballansan? Waxaa jira siyaabo degdeg ah oo nalagu gaari karo.",
  "booking.name": "Magacaaga",
  "booking.nameNote": "Sida aad jeceshahay in lagugu yeedho",
  "booking.email": "Cinwaanka iimaylka",
  "booking.emailNote":
    "Waqtiga halkan ayaan ku soo dirnaa, oo wata fayl kalandar oo aad hal taabasho ku dari karto.",
  "booking.phone": "Lambarka taleefanka",
  "booking.phoneNote":
    "Oo keliya haddii aad door bideyso inaan ku soo wacno halkii aan iimayl kuu dirsan lahayn.",
  "booking.notes": "Wax kasta oo aad doonayso inaan hore u ogaanno",
  "booking.notesNote":
    "Ikhtiyaari. Qofka ku soo wacaya mooyee cidna ma akhrinayso.",
  "booking.optional": "Ikhtiyaari",
  "booking.submit": "Ballanso waqtigan",
  "confirm.title": "Xaqiiji wicitaankaaga",
  "confirm.pickDifferent": "Dooro waqti kale",
  "confirm.privacy":
    "Magacaaga iyo iimaylkaaga waxaan u isticmaalnaa oo keliya inaan wicitaanka sameyno. Xisaab lama abuuro, liis kalena laguma darayo.",
  "booked.title": "Waa la ballansaday",
  "booked.sent":
    "Waqtiga waxaan ku dirnay sanduuqaaga iimaylka, oo wata fayl kalandar oo aad hal taabasho ugu dari karto taleefankaaga. Waxay qaadan kartaa daqiiqad.",
  "booked.reference": "Lambarkaaga tixraaca",
  "booked.prepare":
    "Waxba lama diyaarinayo. Qofka ku soo wacaya wuu akhriyay waxa aad raadinaysay, markaa bilowga kama bilaabaysid.",
  "booked.move":
    "Haddii waqtigu uusan mar dambe kugu habboonayn, ka jawaab iimaylkaas waanan beddelaynaa.",
  "booked.keepLooking": "Inta u dhaxaysa sii raadi",
  "booked.backToStart": "Ku noqo bilowga",
  "account.title": "Gal xisaabtaada",
  "account.saveIt": "Gal si aad u kaydiso",
  "account.saveBody":
    "Kaydintu waa waxa keliya ee halkan xisaab u baahan, si liiskaagu markale u joogo. Waxa aad hadda riixday Kaydi waan hayaa, wuuna ku sugi doonaa markaad gasho.",
  "account.otp":
    "Waxaan kuu soo diri doonnaa koodh hal mar ah oo aad ku gasho. Erayga sirta ah oo la xasuusto ma jiro.",
  "account.emailPrivate": "Iimaylkaaga waa qarsoodi waana ammaan.",
  "account.carryOn": "Sii wad adigoon kaydin",
  "account.signInHere": "Halkan ka gal",
  "code.title": "Fiiri iimaylkaaga",
  "code.sentTo": "Koodhka gelitaanka waxaan u dirnay:",
  "code.justSearch": "Kaliya raadi adigoon gelin",
  "code.enterBelow": "Hoos ku qor waadna gashay.",
  "code.arrive":
    "Waa inuu daqiiqad gudaheed yimaadaa. Haddii uusan iman, fiiri galka spam-ka.",
  "code.different": "Isticmaal cinwaan kale",
  "profile.title": "Deji astaantaada",
  "profile.subline": "Kaliya magac aan kugu salaanno. Waxba halkan looma baahna.",

  "nav.home": "Bogga hore",
  "nav.discover": "Sahan",
  "nav.forOrgs": "Hay'adaha",
  "nav.faq": "Su'aalo",
  "nav.signIn": "Gal",
  "nav.signOut": "Ka bax",
  "nav.saved": "La kaydiyay",
  "nav.settings": "Dejinta",
  "nav.remindersSettings": "Xusuusinta iyo dejinta",
  "nav.sections": "Qaybaha",
  "nav.menu": "liiska",
  "nav.homeAria": "HWS Pathgrid, bogga hore",
  "nav.findNext": "Raadi tallaabadaada xigta",
  "footer.label": "Hoosta bogga",
  "footer.tagline":
    "Haweenka waxaan ku xirnaa fursado — ka baxsan hal qol, hal koodh boosto ama hal maalin.",
  "footer.free":
    "Waa bilaash, xisaabna looma baahna si aad u raadiso, u akhriso ama u codsato.",
  "footer.forYou": "Adiga",
  "footer.find": "Raadi xal",
  "footer.discover": "Sahan hay'adaha",
  "footer.faq": "Su'aalaha badanaa la weydiiyo",
  "footer.help": "Caawimo",
  "footer.forOrgs": "Hay'adaha",
  "footer.meetWomen": "La kulan haweenka",
  "footer.whyList": "Maxaad noola qorataa",
  "footer.whoListed": "Cidda hore u qoran",
  "footer.legal": "Sharci",
  "footer.privacy": "Siyaasadda qarsoodiga",
  "footer.terms": "Shuruudaha isticmaalka",
  "footer.talk": "Qof la hadal",
  "cookie.region": "Ku saabsan cookies",
  "cookie.claim": "Waxaan isticmaalnaa dhowr cookie, midna kuma ilaalinayo.",
  "cookie.detail":
    "Waxay kugu hayaan gal, luqaddaadana way xasuustaan. Waxba lama raadraaco lamana iibiyo.",
  "cookie.more": "Wax badan siyaasadda qarsoodiga",
  "cookie.okay": "Waa hagaag",
  "loading.page": "Boggan waa la soo rarayaa",
  "loading.organisations": "Hay'adaha waa la soo rarayaa",
  "loading.organisation": "Hay'addan waa la soo rarayaa",
  "loading.saved": "Liiskaaga la kaydiyay waa la soo rarayaa",
  "loading.listing": "Liiskan waa la soo rarayaa",

  "faq.title": "Su'aalaha badanaa la weydiiyo",
  "faq.lede":
    "HWS Path Grid wuxuu haweenka Scotland ku xiraa taageerada runtii ku habboon, hay'adaha ka dambeeyana wuxuu siiyaa hal meel oo lagu heli karo.",
  "faq.notHere":
    "Haddii jawaabta aad u baahan tahay aanay halkan ku jirin, fariin kasta waan ka jawaabnaa.",
  "faq.talkPerson": "Qof la hadal.",
  "faq.forWomen": "Haddii aad taageero raadinayso",
  "faq.forOrgs": "Haddii aad hay'ad tahay",

  "meta.home.title": "Raadi taageero haween ah oo Scotland ah",
  "meta.home.desc":
    "Noo sheeg erayadaada waxa aad u baahan tahay, waxaanan ku tusi doonnaa dhowr tallaabo oo mudan in la qaado. Hay'ad kasta waa la hubiyay. Xisaab looma baahna.",
  "meta.find.desc":
    "Noo sheeg erayadaada waxa aad u baahan tahay. Saddex su'aal, xisaab la'aan, waxaanan ka raadinaynaa hay'ad kasta oo Scotland ah oo aan hubinnay.",
  "meta.where.desc":
    "Noo sheeg meesha aad joogto si aan hore u dhigno waxa kuu dhow, haddana aan ku tusno waxa qof kasta u furan.",
  "meta.situation.desc":
    "Dooro wax kasta oo kugu habboon. Taasi way beddeshaa waxa aan ku hor dhigno.",
  "meta.results.desc":
    "Taageerada aan kuu helnay, iyo sababta mid kastaa halkan u joogo.",
  "meta.refine.desc":
    "Yaree raadintaada ama balaadhi, marka natiijooyinka ugu horreeya aanay kuwa saxda ahayn.",
  "meta.change.title": "Beddel jawaabahaaga",
  "meta.change.desc":
    "Beddel wixii aad noo sheegtay waanan dib uga raadinaynaa hay'adaha oo dhan.",
  "meta.startOver.desc": "Nadiifi jawaabahaaga oo saddexda su'aal dib u bilow.",
  "meta.discover.title": "Sahan hay'adaha Scotland oo dhan",
  "meta.discover.desc":
    "Eeg hay'adaha haweenka kala shaqeeya Scotland oo dhan, iyadoo lagu kala saarayo nooca taageerada ay bixiyaan ama waxa aad u baahan tahay.",
  "meta.faq.desc":
    "Waxa haweenku weydiiyaan ka hor inta aysan isticmaalin goobtan, iyo waxa hay'aduhu weydiiyaan ka hor inta aysan ku qorin. Si cad ayaa loogu jawaabay.",
  "meta.orgs.desc":
    "Ku qor waxa aad qabato HWS Path Grid oo gaadh haweenka runtii ku habboon. Bilaash, hal mar la hubiyo, qofna lacag ma bixiyo si uu u muuqdo.",
  "meta.go.title": "Waxaad u baxaysaa inaad codsato",
  "meta.go.desc":
    "Waxaan kuu gudbinaynaa bogga hay'adda si aad halkaas uga codsato.",
  "meta.help.desc":
    "Haddii aadan heli karin waxa aad u baahan tahay, ama wax halkan ku jira ay khaldan u muuqdaan, noo sheeg. Waxaan doorbidaynaa inaan kaa maqalno halkii aad ka quusan lahayd.",
  "meta.saved.desc": "Wax kasta oo aad kaydisay, hal meel.",
  "meta.privacy.desc":
    "Waxa HWS Path Grid uruuriyo marka aad goobta isticmaasho, sababta, iyo waxa aanan weligeen ku samayn doonin.",
  "meta.terms.desc":
    "Xeerarka isticmaalka HWS Path Grid, haweenka halkan raadiya iyo hay'adaha halkan ku qoran.",
  "meta.talk.desc":
    "Ballanso wicitaan bilaash ah oo aad la yeelanayso qof ku tilmaami kara jihada saxda ah.",
  "meta.confirm.desc":
    "Tallaabada ugu dambeysa ka hor inta aan wicitaankaaga la ballansan.",
  "meta.booked.title": "Wicitaankaaga waa la ballansaday",
  "meta.booked.desc": "Waxa xiga.",
  "meta.account.desc":
    "Gal ama xisaab samee, si taageerada aad kaydiso ay u joogto marka xigta ee aad soo noqoto.",
  "meta.accountCode.desc":
    "Waxaan kuu dirnay koodh lix lambar ah oo aad ku gasho.",
  "meta.profile.desc":
    "Ku dar magacaaga si aan si habboon kuugu hadalno. Waxba halkan looma baahna.",
  "meta.settings.desc":
    "Xusuusintaada, luqaddaada, iyo waxa ku dhacaya xisaabtaada.",
  "meta.emailChange.title": "Beddel cinwaankaaga iimaylka",
  "meta.emailChange.desc":
    "U wareeji xisaabtaada, iyo wax kasta oo lagu kaydiyay, cinwaan kale.",
  "meta.emailCode.title": "Fiiri sanduuqaaga cusub",
  "meta.emailCode.desc": "Geli koodhka aan u dirnay cinwaankaaga cusub.",

  "settings.savedList": "Liiskayga la kaydiyay",
  "settings.reminders": "Xusuusinta",
  "settings.howFar": "Intee ka hor",
  "settings.nothingElse":
    "Waxba kale ma dirno. Wargeys ma jiro, talo soo jeedin midna.",
  "settings.neverName":
    "Iimaylada xusuusintu weligood ma sheegaan nooca taageerada, haddii uu qof kale akhriyo sanduuqaaga.",
  "settings.emailChanged":
    "Waa dhammaatay. Xisaabtaadu hadda waa cinwaankan, liiskaagii la kaydiyayna wuu la yimid.",
  "reminders.beforeDeadline": "Ka hor waqtiga kama dambeysta ah",
  "change.heard": "Waa kan waxa aan maqalnay",
  "change.weWillShow":
    "Waxaan ku tusi doonnaa tiro yar oo tallaabooyin xiga ah, kan ugu habboon marka hore. Qofna lacag uma bixiyo inuu halkan ka muuqdo.",
  "startover.confirm":
    "Tani way nadiifinaysaa jawaabahaaga. Dib ma u bilaabaynaa?",
  "startover.note":
    "Wax kasta oo aad kaydisay meeshiisa ayuu ku sii jiraa. Waxa keliya ee baabba'aya waa waxa aad noo sheegtay ee aad u baahan tahay.",
  "startover.yes": "Haa, dib u bilow",
  "startover.keep": "Hay jawaabahayga",
  "legal.onThisPage": "Boggan",
  "legal.questions":
    "Su'aalaha ku saabsan wax kasta oo kan ka mid ah waxay u tagaan qof, ee ma aha foom.",
  "legal.draftTitle": "Kani waa qabyo",
  "legal.draftBody":
    "Qoraalka hoose wuxuu si sax ah u qeexayaa sida barahan maanta u shaqeeyo, laakiin weli ma soo marin dib u eegis kama dambeys ah. Waxaa loo daabacay inaad akhrido oo aad nagu xisaabtanto, ee ma aha inuu dhammaystiran yahay.",
  "legal.draftAsk":
    "Haddii wax halkan ku jira uu khuseeyo go'aan aad qaadanayso, na weydii.",
  "legal.pendingTitle": "Kani weli waa la qorayaa",
  "legal.pendingBody":
    "Qoraalku waa nagu jiraa waxaana halkan lagu daabici doonaa ka hor inta uusan barahan furmin. Waxba boggan kuma shaqeeyaan ilaa taas dhacdo.",
  "legal.pendingAsk":
    "Haddii aad doonayso inaad ogaato inta u dhaxaysa waxa ku dhaca waxa aad qorto, na weydii waanan si cad kuugu sheegaynaa.",
  "photos.aria": "Sawirro ka socda Holistic Wellbeing Summit",
  "photos.credit": "Holistic Wellbeing Summit",
  "testimonials.aria": "Waxa ay haweenku yiraahdaan",
  "testimonials.prev": "Hadalkii hore",
  "testimonials.next": "Hadalka xiga",
  "form.sendCode": "Ii soo dir koodh gelitaan",
  "form.yourCode": "Koodhkaaga gelitaanka",
  "form.codeWorks": "Koodhku wuxuu shaqeeyaa 15 daqiiqo.",
  "form.newCodeSent": "Koodh cusub waa la diray. Waxay qaadan kartaa daqiiqad.",
  "form.sendNewCode": "Dir koodh cusub",
  "form.theCodeWeSent": "Koodhkii aan dirnay",
  "form.newEmail": "Cinwaan iimayl cusub",
  "form.sendToNew": "Koodh u dir cinwaanka cusub",
  "form.firstName": "Magaca koowaad",
  "form.lastName": "Magaca dambe",
  "form.phoneOptional": "Lambarka taleefanka (ikhtiyaari)",
  "form.phoneNote":
    "Waxaan u isticmaalnaa oo keliya haddii aad na weydiisato inaan ku soo wacno.",
  "form.continue": "Sii wad",
  "org.allOrgs": "Dhammaan hay'adaha",
  "org.checked": "Waxaa hubiyay HWS",
  "org.website": "Websaydkooda",
  "org.whatTheyDo": "Waxa ay qabtaan",
  "org.whatTheyOffer": "Waxa ay bixiyaan",
  "org.whoTheyWorkWith": "Cidda ay la shaqeeyaan",
  "org.whoTheyCanHelp": "Cidda ay caawin karaan",
  "org.whoTheyCannot": "Cidda aanay caawin karin",
  "org.when": "Goorma",
  "org.howToReach": "Sida aad u gaari karto",
  "org.zones": "Aagagga Helitaanka",
  "org.mainOne": "Aagooda ugu weyn",
  "org.nothingRunning":
    "Hadda waxba kuma socdaan. Noo sheeg waxa aad u baahan tahay waanan ka raadinaynaa wax kasta oo aan haysanno.",
  "org.orTellUs":
    "Ama noo sheeg waxa aad u baahan tahay oo waannu kuu raadinaynaa",

  "orgpage.heroTitle":
    "Haweenka aad u taagan tihiin, iyagoon u baahnayn inay idin raadiyaan",
  "orgpage.heroBody":
    "Shaqada horay ayaad u qabataan. Dhibaatadu waa in haweeneydu ay tahay inay magacyada ogaato si ay websaydkiinna u hesho. Halkan waxay ku sharraxdaa xaaladdeeda, annaguna waxaan hortaagnaa idinka maxaa yeelay idinku waxaad tihiin jawaabta saxda ah, ee ma aha inay malawaawisay.",
  "orgpage.haveAccount": "Horay ayaan xisaab u lahaa",
  "orgpage.freeNote":
    "Bilaash. Boos lacag lagu iibsado ma jiro, xayeysiis ma jiro, qofna lacag ma bixiyo si uu kor ugu muuqdo.",
  "orgpage.whatYouGet": "Waxa aad heleysaan",
  "orgpage.reach": "Gaadhid, iyo si aad u caddayso",
  "orgpage.gain1Title": "Haween raadinayay waxa aad qabataan",
  "orgpage.gain1Body":
    "Waxay xaaladdeeda ku sharraxdaa erayadeeda. Waxaan la barbar dhignaa cidda aad u diyaar tihiin, waxa aad bixisaan, meesha aad ka shaqeysaan iyo intee ku kacayso. Waxay timaadaa iyadoo horay u og in ay u qalanto iyo in kale.",
  "orgpage.gain2Title": "Tirooyin aad u qaadan karto deeq-bixiye",
  "orgpage.gain2Body":
    "Imisa haween ah ayaa loo diray websaydkiinna, imisa ayaa akhriyay bogga hay'addiinna, iyo sida mid walba oo aad soo dhigteen u shaqeeyay. Ma aha tiro is-bogaadin ah: tan koowaad waxay tirisaa dadka riixay oo idiin yimid.",
  "orgpage.gain3Title": "Hal mar la hubiyo, ee ma aha liis walba",
  "orgpage.gain3Body":
    "Waxaan idinku hubinnaa diiwaan dadweyne ama deeq-bixiyahiinna marka aad soo biirtaan. Taas kadib waxaad soo dhigtaan waxaad doontaan, markaad doontaan, idinkoon na sugin.",
  "orgpage.gain4Title": "Weydiimo khaldan oo yar",
  "orgpage.gain4Body":
    "Waxaad sheegtaan cidda aydaan caawin karin, annaguna waan tusnaa. Haweenku way is saaraan ka hor inta aysan idin soo xiriirin, taasoo waqti u celinaysa qofka ka jawaaba sanduuqiinna.",
  "orgpage.fourSteps": "Afar tallaabo, mid ka mid ahna waa tayada",
  "orgpage.step1Title": "Noo sheega cidda aad tihiin",
  "orgpage.step1Body":
    "Dhowr su'aalood oo ku saabsan waxa aad qabataan, cidda aad u adeegtaan iyo meesha. Toban daqiiqo, waxaadna joojin kartaa badhtanka oo aad dib u soo noqon kartaa.",
  "orgpage.step2Title": "Waan idin hubinnaa",
  "orgpage.step2Body":
    "Diiwaan dadweyne, ama deeq-bixiyahiinna. Hal hubin, oo qof sameeyay.",
  "orgpage.step3Title": "Soo dhiga waxa furan",
  "orgpage.step3Body":
    "Koorso, deeq, imaatin furan, barnaamij hagid ah. Wax kasta oo haweeney albaab u leh.",
  "orgpage.step4Title": "Way heshaa marka ay ku habboon tahay",
  "orgpage.step4Body":
    "Ma aha sababtoo ah magacyada ayay raadisay. Waa sababtoo ah waxa ay sharraxday ayaa u dhigmay waxa aad qabataan.",
  "orgpage.whereYouSit": "Meesha aad ku jiri lahaydeen",
  "orgpage.zonesBody":
    "Idinkaa dooranaya, hal mid oo weyn iyo ilaa laba kale. Haweenka badidood hal mar ayay u baahan yihiin wax ka badan mid, adeegyada badidooduna mid keliya ayay qabtaan, taasina waa farqiga tani u jirto inay xirto.",

  "legal.englishApplies":
    "Cinwaannada boggan waxay ku qoran yihiin luqaddaada. Qoraalka laftiisu waa Ingiriisi, nuqulka Ingiriisiguna waa kan khuseeya.",
  "legal.askInYourLanguage":
    "Qaybo kasta oo ka mid ah na weydii waanan kaaga jawaabaynaa.",

  "reason.youToldUs": "waxaad noo sheegtay in #",
  "reason.and": "iyo",
  "reason.youAskedAbout": "waxaad wax ka weyddiisay #",
  "reason.runsIn": "kani wuxuu ka dhacayaa #",
  "reason.isOnline": "kani waa online, markaa meesha aad joogto muhiim ma aha",
  "reason.acrossScotland": "kani wuxuu u furan yahay Scotland oo dhan",
  "reason.closest":
    "kani waa mid ka mid ah waxyaabaha ugu dhow ee aan haysanno waxa aad sharraxday.",
  "reason.clauseJoin": ", iyo ",
};

const ti: Catalogue = {
  "language.label": "ቋንቋ",
  "hero.title": "ንደቂ ኣንስትዮ ዘድልየን ደገፍ ንኽረኽባ ንሕግዝ",
  "hero.body":
    "ብናትኪ ቃላት እንታይ ከም ዘድልየኪ ንገርና፡ ንሕና ድማ ክትወስድዮም ዝግብኡ ቀጺሎም ዘለዉ ስጉምትታት ከነርእየኪ ኢና። ሰለስተ ሕቶታት፡ ኣካውንት ኣየድልን።",
  "hero.cta": "መፍትሒ ርኸቢ",
  "hero.browse": "ወይ ከኣ መን ከም ዘሎ ረኣዪ",
  "why.eyebrow": "ከመይ ይሰርሕ",
  "why.title":
    "ሓደ ነገር ከም ዘሎ ምፍላጥ፡ ንዓኺ ክፉት ምዃኑ ምፍላጥ ማለት ኣይኮነን",
  "hero.begin": "ካበይ ክትጅምሪ ትደልዪ?",
  "hero.beginFind": "ቀጺሉ ዘሎ ስጉምትኺ ርኸቢ",
  "hero.beginBrowse": "መን ከም ዘሎ ረኣዪ",
  "origin.eyebrow": "ስለምንታይ ኣሎ",
  "origin.title": "ከምዚ ዝኣመሰለ ክፍሊ እዩ ጀሚሩ",
  "origin.bodyOne":
    "Holistic Wellbeing Summit ንደቂ ኣንስትዮ ምስቶም ብሓቂ ክሕግዝወን ዝኽእሉ ሰባት ኣብ ሓደ ክፍሊ የራኽበን። ሓደ ሰብ የላሊ። ሓደ ሰብ ከኣ ፈጺምኪ ሰሚዕክዮ ዘይትፈልጢ ፈንድ ይጠቅስ፡ ሕጂ ድማ ከም ዘሎ ትፈልጢ።",
  "origin.bodyTwo":
    "ድሕሪኡ እቲ ክፍሊ ይጽንቀቕ። እቶም ትካላት ናብ ስርሖም ይምለሱ፡ እተን ደቂ ኣንስትዮ ግን ገና የድልየን። እዚ መድረኽ እዚ ነቲ ክፍሊ ማዕጾኡ ተኸፊቱ ዝተረፈ እዩ፡ ነፍሲ ወከፍ ኣብኡ ዘይነበረት ጓል ኣንስተይቲ።",
  "how.oneTitle": "ብናትኪ ቃላት ንገርና",
  "how.oneBody":
    "እንታይ ከም ዘድልየኪ፡ ኣበይ ከም ዘለኺ፡ ከምኡ ድማ ብዛዕባ ኩነታትኪ ዝኾነ ነገር። ሰለስተ ሕቶታት ጥራይ።",
  "how.twoTitle": "ንመዝኖ",
  "how.twoBody":
    "ነፍሲ ወከፍ ነገር ንምንታይ ከም ዝተዳለወ፡ ንመን ክፉት ከም ዝኾነ፡ ኣበይ ከም ዝካየድን ከመይ ጌርኪ ክትበጽሕዮ ከም እትኽእልን ብምምዛን። እቲ ውጽኢት ብ AI ዝተደገፈ እዩ።",
  "how.threeTitle": "ውሑዳት ግን ሓቀኛታት ኣማራጺታት ትረኽቢ",
  "how.threeBody":
    "ውሑዳት እምበር ሚእቲ ኣይኮኑን፡ ነፍሲ ወከፎም ስለምንታይ ከም ዝሰማምዑ፡ ክንደይ ከም ዝኽፈል፡ ንመን ከም ዝኾኑን ድሕሪ ምርኻብኪ እንታይ ከም ዝኽሰትን ይሕብሩ።",
  "how.forWomen": "ንደቂ ኣንስትዮ",
  "how.forOrgs": "ንትካላት",
  "how.orgOneTitle": "መን ምዃንኩም ንገሩና",
  "how.orgOneBody":
    "ብዛዕባ እትገብርዎ፡ መፍትሒ ክትህብዎም እትደልዩ ሰባትን ቦታን ውሑዳት ሕቶታት። ምምዝጋብ ቅልጡፍ እዩ።",
  "how.orgTwoTitle": "ሓደ ግዜ ንሕልወኩም",
  "how.orgTwoBody":
    "ብህዝባዊ መዝገብ ወይ ብዝሓለፈ ስራሕኩም። ድሕሪ እቲ ምርግጋጽ፡ ዝደለኹምዎ ኣብ ዝደለኹምሉ ግዜ ትዝርግሑ።",
  "how.orgThreeTitle": "ዝሰማማዓላ ግዜ ትረኽቦ",
  "how.orgThreeBody":
    "ስምኩም ስለ ዝደለየት ዘይኮነ፡ እቲ ዝገለጸቶ ነገር ምስቲ እትህብዎ መፍትሒ ስለ ዝሰማምዐ እዩ።",
  "zones.eyebrow": "ዞባታት ተበጻሕነት",
  "zones.title": "ኩሉ ዓይነት ደገፍ፡ ኣብ ሓደ መድረኽ",
  "zones.body":
    "ስራሕ፡ ገንዘብ፡ ትምህርቲ፡ ጥዕና፡ ንግዲ፡ ድምጺ ምህላው። መብዛሕትአን ደቂ ኣንስትዮ ኣብ ሓደ እዋን ካብ ሓደ ንላዕሊ የድልየን፡ መብዛሕትኡ ኣገልግሎት ግን ሓደ ጥራይ እዩ ዝገብር። እዚ ድማ እቲ ክዓጽዎ ዝተፈጥረሉ ጋግ እዩ።",
  "zones.browse": "ኣብዚ መድረኽ ዘለዉ ኩሎም ረኣዪ",
  "trust.checkedTitle": "ዝተረጋገጸ ትሕዝቶ",
  "trust.checkedBody":
    "ኣብዚ ዘሎ ነፍሲ ወከፍ ትካል ዝኾነ ነገር ቅድሚ ምዝርጋሑ ብህዝባዊ መዝገብ ወይ ብወሃቢ ገንዘቡ ተረጋጊጹ እዩ። ነፍሲ ወከፍ ዝርዝር እቲ ዳሕራይ ዝተረጋገጸሉ ዕለት ይሕዝ።",
  "trust.privateTitle": "ሓበሬታኺ ብሕታዊ እዩ",
  "trust.privateBody":
    "ንምድላይ፡ ንምንባብ ወይ ንምምልካት ኣካውንት ኣየድልየክን። እትጽሕፍዮ ነገር ውጽኢትኪ ንምስራዕ ጥራይ እዩ ዝውዕል፡ ኣይሽየጥን፡ ናብ ካልእ ኣይመሓላለፍን፡ ብዛዕባኺ መለለዪ ንምስራሕ ድማ ኣይውዕልን።",
  "trust.paidTitle": "ዝተኸፍለሉ ትሕዝቶ የለን",
  "trust.paidBody":
    "ዝተኸፍለሉ ቦታን መወዓውዒን የለን። ውጽኢታት ምሳና ብዝተዛረብክዮ ክንደይ ከም ዝሰማምዑ ተመርኲሶም እዮም ዝስርዑ፡ ነፍሲ ወከፍ ዝርዝር ድማ ስለምንታይ ከም ዝሰማምዐ ይሕብር።",
  "orgs.title": "ደቂ ኣንስትዮ ክፈልጣኦ ዝግባእ ነገር ተካይዱ ዲኹም?",
  "orgs.body":
    "ኣብዚ ኣስፍርዎ፡ ብሓቂ ንዝሰማምዐን ደቂ ኣንስትዮ ይበጽሕ፡ ዌብሳይትኩም ብኣጋጣሚ ንዝረኸበ ጥራይ ዘይኮነ። ነጻ እዩ፡ ንነፍሲ ወከፍ ዝርዝር ዘይኮነስ ሓደ ግዜ ኢና ንሕልወኩም።",
  "orgs.cta": "ምስ ደቂ ኣንስትዮ ተራኸቡ",

  "flow.back": "ተመለሲ",
  "flow.questionOf": "ሕቶ # ካብ 3",
  "flow.next": "ቀጽሊ",
  "flow.changeAnswers": "መልስታትኪ ቀይሪ",
  "flow.searchCredit": "ድሌት ብ AI ዝተደገፈ",
  "flow.orgPrompt": "ንደቂ ኣንስትዮ መፍትሒ እትህቡ ትካል ወይ ውልቀሰብ ዲኹም?",
  "flow.orgLink": "ንትካላት",
  "q1.title": "ኣብ ምንታይ ሓገዝ የድልየኪ?",
  "q1.subline": "ብናትኪ ቃላት። ጌጋ መልሲ የለን።",
  "q1.placeholder": "ንኣብነት፡ ኣደይ ድሕሪ ምክንኻነይ ናብ ስራሕ ምምላስ",
  "q1.blank": "ኣበይ ከም እንደሊ ንኽንፈልጥ ውሑዳት ቃላት ጽሓፊ።",
  "q1.searchOn": "ኣብቲ ዝጸሓፍክዮ ተመርኲስና ክንደሊ ኢና።",
  "q1.suggestions": "ሓሳባት",
  "q2.title": "ደገፍ ኣበይ ንድለ?",
  "q2.subline": "ከተማ፡ ፖስጣ ኮድ፡ ወይ ናይ ምምሕዳርኪ ከባቢ።",
  "q2.placeholder": "ንኣብነት EH48",
  "q2.unknown": "ነዚ ቦታ ኣይንፈልጦን። ኣብ ጥቓኺ ዘላ ከተማ ፈትኒ፡ ወይ ኣብ ብምሉኡ ስኮትላንድ ድለዪ።",
  "q2.or": "ወይ",
  "q2.anywhere": "ኣብ ዝኾነ ቦታ ስኮትላንድ",
  "q2.onlineOnly": "ኦንላይን ደገፍ ጥራይ",
  "q2.hint": "ቦታ ጽሓፊ፡ ወይ ካብዞም ኣብ ላዕሊ ዘለዉ ክልተ ሓደ ምረጺ።",
  "q3.title": "ኩነታትኪ ብዝበለጸ እንታይ ይገልጾ?",
  "q3.subline": "እዚ ንዓኺ ክኸውን ዝኽእል ደገፍ ንኽንርኢ ይሕግዘና። ካብ ሓደ ንላዕሊ ክትመርጺ ትኽእሊ ኢኺ።",
  "q3.hint": "ዝሰማማዕ ኩሉ ምረጺ፡ ወይ ክዛረብ ኣይደልን ምረጺ።",
  "q3.privacy": "መልስታትኺ ኣይንዕቅቦን፡ ነቶም እነርእየኪ ትካላት እውን ኣይንህቦምን።",
  "results.title": "ንዓኺ ቀጺሎም ዘለዉ ስጉምትታት",
  "results.refine": "ኣጽብብ ወይ ኣስፍሕ",
  "results.ordered": "ምስቲ ዝነገርክና ክንደይ ከም ዝሰማምዑ ተመርኲሶም ተሰሪዖም። ኣብዚ ንምምጻእ ዝኸፍል የለን።",
  "results.orgsOnly": "ብቐረባ ዝሰማማዕ ክፉት ነገር የለን፡ እዞም ትካላት ግን ኣብቲ ዝሓተትክዮ ይሰርሑ እዮም።",
  "results.thatsAll":
    "ብቐረባ ዝሰማማዕ እዚ ጥራይ እዩ። ነቲ ድሌት ከተስፍሕዮ ወይ ነቲ ዝነገርክና ክትቅይርዮ ትኽእሊ።",
  "results.showScotland": "ኣብ ብምሉኡ ስኮትላንድ ዘሎ ደገፍ ኣርእየኒ",
  "results.changeMine": "መልስታተይ ቀይር",
  "results.startOver": "ካብ መጀመርታ ጀምሪ",
  "card.bestMatch": "ዝበለጸ ምስምማዕ",
  "card.save": "ዓቅቢ",
  "card.saved": "ተዓቂቡ",
  "card.saveAria": "# ዓቅቢ",
  "card.savedAria": "ተዓቂቡ፡ #",
  "card.whoFor": "ንመን እዩ",
  "card.whatToExpect": "እንታይ ትጽበዪ",
  "card.whyMatched": "ስለምንታይ ምሳኺ ከም ዝሰማምዐ፡",
  "card.learnMore": "ተወሳኺ ፍለጢ",
  "card.missing": "ገና ኣይተመልአን",
  "card.closes": "ኣብ # ይዕጾ",
  "card.closed": "ኣብ # ተዓጽዩ",
  "card.verified": "ተረጋጊጹ",
  "card.verifiedOn": "ተረጋጊጹ · ናይ መወዳእታ ምሕዳስ #",
  "nomatch.title": "ሕጂ ንዓኺ ዝኸውን ነገር ኣይረኸብናን",
  "nomatch.body": "እዚ ሓገዝ የለን ማለት ኣይኮነን። ሎሚ ምስቲ ዝሓተትክዮ ዝሰማማዕ ነገር የብልናን ማለት እዩ።",
  "nomatch.tryFirst": "ቅድም ነዚ ፈትንዮ",
  "nomatch.widen": "ናብ ብምሉኡ ስኮትላንድ ኣስፍሒ",
  "nomatch.onlineTitle": "ኦንላይን ደገፍ ጥራይ",
  "nomatch.changeTitle": "ነቲ ዝሓተትክዮ ቀይርዮ",
  "nomatch.changeNote": "ካልኦት ቃላት ሓደ ሓደ ግዜ ካልእ ነገር ይረኽቡ። ሓንሳብ ከም ብሓድሽ ምፍታን ይግባእ።",
  "nomatch.startTitle": "ከም ብሓድሽ ጀምሪ",
  "nomatch.startNote": "ኩሉ ኣጽርዪ እሞ ካብ ቀዳማይ ሕቶ ጀምሪ።",
  "orgsAnswer.title": "እዞም ሰባት እውን ክሕግዙኺ ይኽእሉ",
  "orgsAnswer.body":
    "ኣብቲ ዝሓተትክዮ ዝሰርሑ ትካላት። ሕጂ ክፉት ነገር ዘይህልዎም ይኽእል እዩ፡ ግን ብቐጥታ ናባታቶም ክትከዲ ትኽእሊ።",
  "talkcta.title": "ምስ ሰብ ክትዛረቢ ትደልዪ ዲኺ?",
  "talkcta.body":
    "እንታይ ከም ዘሎ ዝፈልጥን ናብ ቅኑዕ መኣዝን ክመርሓኪ ዝኽእልን ሰብ። ዝሰማምዓኪ ግዜ ምረጺ። ዋጋ የብሉን፡ ኣካውንት እውን ኣየድልን።",
  "talkcta.cta": "ዘለዉ ግዜታት ረኣዪ",
  "talkcta.note": "እንታይ ከም ዝደለኺ ኣቐዲምና ክንፈልጦ ኢና፡ ስለዚ ከም ብሓድሽ ክትገልጽዮ ኣየድልየክን።",
  "talkcta.today": "ሎሚ ሓገዝ የድልየኪ ድዩ? ሕጂ ተዘራረብና።",
  "refine.back": "ናብ ውጽኢታት ተመለሲ",
  "refine.title": "ኣጽብብ ወይ ኣስፍሕ",
  "refine.howFar": "ክሳብ ክንደይ ርሑቕ ንደሊ",
  "refine.onlyShow": "እዚ ጥራይ ኣርኢ",
  "refine.nothingMatches": "በዞም መጻረዪታት ዝሰማማዕ የለን።",
  "refine.tryRemoving": "“#” ኣልግስዮ እሞ ፈትኒ።",
  "refine.inScope": "ኣብዚ ንደሊ ኣለና፡ #።",
  "refine.tryWiden": "ናይ ምድላይ ክሊ ከተስፍሕዮ ፈትኒ።",
  "refine.update": "ድሌተይ ኣሐድስ",
  "scope.myArea": "ከባቢየይ",
  "scope.nearby": "ኣብ ጥቓይ ዘለዉ ከባቢታት",
  "scope.allScotland": "ብምሉኡ ስኮትላንድ",
  "scope.online": "ኦንላይን ጥራይ",
  "filter.free": "ነጻ",
  "filter.openNow": "ሕጂ ክፉት",
  "filter.noForms": "ቅጥዒ ዘየድልዮ",
  "saved.title": "ዝዓቀብክዮ ዝርዝር",
  "saved.titleNamed": "ናይ # ዝተዓቀበ ዝርዝር",
  "saved.emptyBody":
    "ተመሊስኪ ክትርእይዮ ዝግባእ ነገር ምስ ረኸብኪ፡ ዓቅቢ ጠውቒ። ኣብዚ ክጸንሕ እዩ፡ ቅድሚ ምዕጻዉ ድማ ክንነግረኪ ኢና።",
  "saved.emptyCta": "ደገፍ ድለዪ",
  "saved.soonest": "ቀዳምነት ነቲ ቀልጢፉ ዝዕጾ።",
  "saved.seeWhatElse": "ካልእ እንታይ ከም ዘሎ ረኣዪ",
  "saved.findSomethingElse": "ካልእ ነገር ድለዪ",
  "saved.settings": "መዘኻኸሪታትን ናይ ኣካውንት ኣቀማምጣን",
  "saved.noClosingDate": "መዕጸዊ ዕለት የብሉን",
  "saved.noLongerRunning": "ደጊም ኣይሰርሕን",
  "service.backToResults": "ናብ ውጽኢታትኪ ተመለሲ",
  "service.cost": "ክፍሊት",
  "service.where": "ኣበይ",
  "service.howToTakePart": "ከመይ ጌርኪ ትሳተፊ",
  "service.continueTo": "ናብ # ቀጽሊ",
  "service.closedTitle": "እዚ ተዓጽዩ እዩ",
  "service.closedBody":
    "ከም ብሓድሽ ክካየድ ይኽእል እዩ። # እቲ ቀጺሉ ዘሎ መዓስ ከም ዝኽፈት ክነግረኪ ይኽእል፡ ሕጂ እውን ተመሳሳሊ ነገር ክህሉ ይኽእል።",
  "service.askNext": "እቲ ቀጺሉ ዘሎ መዓስ ከም ዝጅምር ሕተቲ",
  "service.findSimilar": "ተመሳሳሊ ደገፍ ድለዪ",
  "service.somethingWrong": "ኣብዚ ጌጋ ነገር ኣሎ ድዩ?",
  "discover.title": "ኣብ ስኮትላንድ ንደቂ ኣንስትዮ ዝሰርሕ መን እዩ",
  "discover.lede":
    "ኣብዚ ዘሎ ነፍሲ ወከፍ ትካል ብኣና ተረጋጊጹ እዩ። ብስም ድለዪ፡ ወይ ከኣ በቲ ዘድልየኪ ንታሕቲ ኣንብቢ።",
  "discover.searchLabel": "ትካላት ብስም ወይ በቲ ዝገብርዎ ድለዪ",
  "discover.searchButton": "ትካላት ድለዪ",
  "discover.orAnswer": "ወይ ሰለስተ ሕቶታት መልሲ እሞ ንሕና ክንረኽበልኪ ኢና",
  "discover.byZone": "ብዞባ ተበጻሕነት ረኣዪ",
  "discover.byZoneNote":
    "እቶም ዓይነታት ደገፍ እዚ መድረኽ ዝተሃንጸሎም። ነፍሲ ወከፎም ናብቶም ኣብኡ ዝሰርሑ ትካላት ይመርሑ።",
  "discover.nobodyYet": "ክሳብ ሕጂ ዝኾነ የለን",
  "discover.byNeed": "በቲ ዘድልየኪ ረኣዪ",
  "discover.byNeedNote": "ከምቲ ብኣፍኪ እትብልዮ ኢልክዮ።",
  "zone.allZones": "ኩሎም ዞባታት ተበጻሕነት",
  "zone.eyebrow": "ዞባ ተበጻሕነት",
  "zone.empty":
    "ኣብዚ ዞባ ክሳብ ሕጂ ዝተመዝገበ የለን። እዚ ሓገዝ የለን ማለት ኣይኮነን፡ ስለዚ እንታይ ከም ዘድልየኪ ንገርና እሞ ኣብ ኩሉ ዘሎና ክንደሊ ኢና።",
  "zone.tellUs": "እንታይ ከም ዘድልየኪ ንገርና",
  "zone.alsoWorks": "ኣብዚ ዞባ እውን ይሰርሑ",
  "need.everything": "ክትርእይዮ እትኽእሊ ኩሉ",
  "need.eyebrow": "እንታይ የድልየኪ",
  "discover.eyebrow": "ርኸቢ",
  "discover.searchAria": "ድለዪ",
  "discover.clear": "ኣጽርዪ",
  "discover.nothingMatches": "ምስ “#” ዝሰማማዕ የለን",
  "discover.forQuery": "ን “#”",
  "discover.searchNote":
    "እዚ ሳንዱቕ ኣስማትን መግለጺታትን ጥራይ እዩ ዝርኢ። ፍሉይ ትካል ካብ ምድላይ ንላዕሊ ኩነታትኪ ክትገልጺ እንተ ደሊኺ፡ እቶም ሰለስተ ሕቶታት ብዝያዳ ይሕግዙ።",
  "discover.tryQuestions": "ነቶም ሰለስተ ሕቶታት ፈትንዮም።",
  "need.emptyShort": "ክሳብ ሕጂ ኣብዚ ዝተመዝገበ የለን።",
  "need.workOnThis": "እቶም ክፉት ነገር ዘለዎም ቀዲሞም ይመጹ።",
  "need.empty":
    "ክሳብ ሕጂ ኣብዚ ዝተመዝገበ የለን። እዚ ሓገዝ የለን ማለት ኣይኮነን፡ ስለዚ እንታይ ከም ዘድልየኪ ንገርና እሞ ኣብ ኩሉ ዘሎና ክንደሊ ኢና።",
  "talk.title": "ምስ ሰብ ተዛረቢ",
  "talk.pickTime": "ዝሰማምዓኪ ግዜ ምረጺ",
  "talk.pickBody": "ንሕና ክንድውለልኪ ኢና። ኣስታት ፍርቂ ሰዓት ይወስድ፡ ዋጋ የብሉን፡ ኣካውንት እውን ኣየድልን።",
  "talk.noneTitle": "ኣብዘን ዝመጽኣ ውሑዳት ሰሙናት ነጻ ግዜ የለን",
  "talk.noneBody":
    "እዚ ዘይልሙድ እዩ፡ ዝሕግዝ ሰብ የለን ማለት ድማ ኣይኮነን። ርኸቡና እሞ ካብዚ ዓውደ ኣዋርሕ ወጻኢ ግዜ ክንረኽበልኪ ኢና።",
  "talk.otherWays": "ካልኦት ክትረኽቡና እትኽእሉሉ መንገድታት",
  "talk.ukTime": "ኩሎም ግዜታት ብናይ ብሪጣንያ ሰዓት እዮም።",
  "talk.todayInstead":
    "ኣብ ዝተታሕዘ ግዜ ዘይኮነስ ሎሚ ሓገዝ የድልየኪ ድዩ? ቀልጢፍኩም ክትረኽቡና እትኽእሉሉ መንገድታት ኣሎ።",
  "booking.name": "ስምኪ",
  "booking.nameNote": "ብኸመይ ክንጽውዓኪ ትደልዪ",
  "booking.email": "ኢመይል ኣድራሻ",
  "booking.emailNote": "ነቲ ግዜ ኣብዚ ኢና እንሰዶ፡ ምስ ብሓደ ጠውቕታ እትውስኽዮ ናይ ዓውደ ኣዋርሕ ፋይል።",
  "booking.phone": "ቁጽሪ ስልኪ",
  "booking.phoneNote": "ኢመይል ካብ ምስዳድ ክንድውለልኪ እንተ መሪጽኪ ጥራይ።",
  "booking.notes": "ኣቐዲምና ክንፈልጦ እትደልይዮ ዝኾነ ነገር",
  "booking.notesNote": "ኣማራጺ። ብዘይካ እቲ ዝድውለልኪ ሰብ ዝኾነ ሰብ ኣየንብቦን።",
  "booking.optional": "ኣማራጺ",
  "booking.submit": "ነዚ ግዜ ሓዝዮ",
  "confirm.title": "ጻውዒትኪ ኣረጋግጺ",
  "confirm.pickDifferent": "ካልእ ግዜ ምረጺ",
  "confirm.privacy":
    "ስምክን ኢመይልክን እንጥቀመሉ ነቲ ጻውዒት ንምግባር ጥራይ እዩ። ኣካውንት ኣይፍጠርን፡ ኣብ ዝኾነ ዝርዝር እውን ኣይትውሰኽን።",
  "booked.title": "ተታሒዙ ኣሎ",
  "booked.sent":
    "ነቲ ግዜ ናብ ኢመይልኪ ሰዲድናዮ ኣለና፡ ምስ ብሓደ ጠውቕታ ናብ ስልክኺ እትውስኽዮ ናይ ዓውደ ኣዋርሕ ፋይል። ንኽበጽሕ ደቒቕ ክወስድ ይኽእል።",
  "booked.reference": "መወከሲ ቁጽርኺ",
  "booked.prepare":
    "ዝዳሎ ነገር የለን። እቲ ዝድውለልኪ ሰብ እንታይ ትደልዪ ከም ዝነበርኪ ኣቐዲሙ ኣንቢብዎ ክህሉ እዩ፡ ስለዚ ካብ መጀመርታ ክትጅምሪ ኣየድልየክን።",
  "booked.move": "እቲ ግዜ እንተ ዘይሰማሚዑኪ፡ ነታ ኢመይል መልሽላ እሞ ክንቅይሮ ኢና።",
  "booked.keepLooking": "ኣብ መንጎ እናደለኺ ቀጽሊ",
  "booked.backToStart": "ናብ መጀመርታ ተመለሲ",
  "account.title": "ናብ ኣካውንትኪ እቶዊ",
  "account.saveIt": "ንምዕቃብ እቶዊ",
  "account.saveBody":
    "ኣብዚ ኣካውንት ዘድልዮ እንኮ ነገር ምዕቃብ እዩ፡ ዝርዝርኪ ኣብ ዝመጽእ ግዜ ኣብኡ ንኽህሉ። ሕጂ ዓቅቢ ዝጠወቕክሉ ነገር ሒዝናዮ ኣለና፡ ምስ ኣተኺ ድማ ክጽበየኪ እዩ።",
  "account.otp": "ንምእታው ሓደ ግዜ ዝሰርሕ ኮድ ክንሰደልኪ ኢና። ዝዝከር መሕለፊ ቃል የለን።",
  "account.emailPrivate": "ኢመይልኪ ብሕታውን ውሑስን ኮይኑ ይሕሎ።",
  "account.carryOn": "ከይዓቀብኪ ቀጽሊ",
  "account.signInHere": "ኣብዚ እቶዊ",
  "code.title": "ኢመይልኪ ርኣዪ",
  "code.sentTo": "መእተዊ ኮድ ናብዚ ሰዲድናዮ፡",
  "code.justSearch": "ከይኣተኺ ጥራይ ድለዪ",
  "code.enterBelow": "ኣብ ታሕቲ ኣእትውዮ እሞ ኣቲኺ።",
  "code.arrive": "ኣብ ውሽጢ ደቒቕ ክበጽሕ ኣለዎ። እንተ ዘይበጺሑ፡ ናይ ስፓም ፎልደርኪ ርኣዪ።",
  "code.different": "ካልእ ኣድራሻ ተጠቐሚ",
  "profile.title": "መለለዪኺ ኣዳልዊ",
  "profile.subline": "ክንጽውዓኪ ዝኸውን ስም ጥራይ። ኣብዚ ዝግደድ ነገር የለን።",

  "nav.home": "መበገሲ",
  "nav.discover": "ርኸቢ",
  "nav.forOrgs": "ንትካላት",
  "nav.faq": "ሕቶታት",
  "nav.signIn": "እቶዊ",
  "nav.signOut": "ውጸኢ",
  "nav.saved": "ዝተዓቀበ",
  "nav.settings": "ኣቀማምጣ",
  "nav.remindersSettings": "መዘኻኸሪታትን ኣቀማምጣን",
  "nav.sections": "ክፍልታት",
  "nav.menu": "መዘርዝር",
  "nav.homeAria": "HWS Pathgrid፡ መበገሲ",
  "nav.findNext": "ቀጺሉ ዘሎ ስጉምትኺ ርኸቢ",
  "footer.label": "ታሕተዋይ ክፋል",
  "footer.tagline":
    "ንደቂ ኣንስትዮ ምስ ዕድላት ነራኽብ — ካብ ሓደ ክፍሊ፡ ሓደ ፖስጣ ኮድ ወይ ሓደ መዓልቲ ሓሊፉ።",
  "footer.free": "ንምጥቃም ነጻ እዩ፡ ንምድላይ፡ ንምንባብ ወይ ንምምልካት ኣካውንት ኣየድልን።",
  "footer.forYou": "ንዓኺ",
  "footer.find": "መፍትሒ ርኸቢ",
  "footer.discover": "ትካላት ርኸቢ",
  "footer.faq": "ቀጻሊ ዝሕተቱ ሕቶታት",
  "footer.help": "ሓገዝ",
  "footer.forOrgs": "ንትካላት",
  "footer.meetWomen": "ምስ ደቂ ኣንስትዮ ተራኸቡ",
  "footer.whyList": "ስለምንታይ ምሳና ትምዝገቡ",
  "footer.whoListed": "መን ድሮ ተመዝጊቡ",
  "footer.legal": "ሕጋዊ",
  "footer.privacy": "ናይ ብሕትና ፖሊሲ",
  "footer.terms": "ናይ ኣጠቓቕማ ውዕል",
  "footer.talk": "ምስ ሰብ ተዛረቢ",
  "cookie.region": "ብዛዕባ ኩኪታት",
  "cookie.claim": "ውሑዳት ኩኪታት ንጥቀም፡ ካባታቶም ሓደ እኳ ኣይከታተለክን።",
  "cookie.detail": "ኣትየኺ ከም እትጸንሒ ይገብሩ፡ ቋንቋኺ እውን ይዝክሩ። ዝኾነ ነገር ኣይክትተልን ኣይሽየጥን።",
  "cookie.more": "ተወሳኺ ኣብ ናይ ብሕትና ፖሊሲ",
  "cookie.okay": "\u1215\u122b\u12ed",
  "loading.page": "\u12a5\u12db \u1308\u133d \u1275\u133d\u12d3\u1295 \u12a3\u120b",
  "loading.organisations": "\u1275\u12ab\u120b\u1275 \u12ed\u133d\u12d5\u1291 \u12a3\u1208\u12c9",
  "loading.organisation": "\u12a5\u12da \u1275\u12ab\u120d \u12ed\u133d\u12d3\u1295 \u12a3\u120e",
  "loading.saved": "\u12dd\u12d3\u1240\u1265\u12ad\u12ee \u12dd\u122d\u12dd\u122d \u12ed\u133d\u12d3\u1295 \u12a3\u120e",
  "loading.listing": "\u12a5\u12da \u12dd\u122d\u12dd\u122d \u12ed\u133d\u12d3\u1295 \u12a3\u120e",

  "faq.title": "ቀጻሊ ዝሕተቱ ሕቶታት",
  "faq.lede":
    "HWS Path Grid ኣብ ብምሉኡ ስኮትላንድ ንዘለዋ ደቂ ኣንስትዮ ምስቲ ብሓቂ ዝሰማምዐን ደገፍ የራኽበን፡ ነቶም ኣብ ድሕሪኡ ዘለዉ ትካላት ድማ ክርከቡሉ ዝኽእሉ ሓደ ቦታ ይህብ።",
  "faq.notHere": "እቲ ዘድልየኪ መልሲ ኣብዚ እንተ ዘየሎ፡ ንሕና ንነፍሲ ወከፍ መልእኽቲ ንምልስ ኢና።",
  "faq.talkPerson": "ምስ ሰብ ተዛረቢ።",
  "faq.forWomen": "ደገፍ እትደልዪ እንተ ኾንኪ",
  "faq.forOrgs": "ትካል እንተ ኾይንኩም",

  "meta.home.title": "ኣብ ስኮትላንድ ንደቂ ኣንስትዮ ዝኸውን ደገፍ ርኸቢ",
  "meta.home.desc":
    "ብናትኪ ቃላት እንታይ ከም ዘድልየኪ ንገርና፡ ንሕና ድማ ክትወስድዮም ዝግብኡ ውሑዳት ቀጺሎም ዘለዉ ስጉምትታት ከነርእየኪ ኢና። ነፍሲ ወከፍ ትካል ተረጋጊጹ እዩ። ኣካውንት ኣየድልን።",
  "meta.find.desc":
    "ብናትኪ ቃላት እንታይ ከም ዘድልየኪ ንገርና። ሰለስተ ሕቶታት፡ ብዘይ ኣካውንት፡ ኣብ ስኮትላንድ ዘረጋገጽናዮ ነፍሲ ወከፍ ትካል ድማ ንርኢ።",
  "meta.where.desc":
    "ኣበይ ከም ዘለኺ ንገርና፡ ኣብ ጥቓኺ ዘሎ ቀዲምና ንኽንገብሮ፡ ነቲ ንኹሉ ክፉት ዘሎ እውን ከነርእየኪ።",
  "meta.situation.desc": "ዝሰማማዕ ኩሉ ምረጺ። እዚ ነቲ ኣብ ቅድሜኺ እነቕርቦ ይቕይሮ።",
  "meta.results.desc": "እቲ ዘናደናልኪ ደገፍ፡ ምስቲ ነፍሲ ወከፉ ኣብዚ ዘለወሉ ምኽንያት።",
  "meta.refine.desc": "እቲ ቀዳማይ ውጽኢት እቲ ቅኑዕ እንተ ዘይኮይኑ፡ ድሌትኪ ኣጽብብዮ ወይ ኣስፍሕዮ።",
  "meta.change.title": "መልስታትኪ ቀይሪ",
  "meta.change.desc": "ነቲ ዝነገርክና ቀይርዮ እሞ ኣብ ኩሎም ትካላት ከም ብሓድሽ ክንደሊ ኢና።",
  "meta.startOver.desc": "መልስታትኪ ኣጽርዪ እሞ ነቶም ሰለስተ ሕቶታት ካብ መጀመርታ ጀምሪ።",
  "meta.discover.title": "ኣብ ብምሉኡ ስኮትላንድ ዘለዉ ትካላት ርኸቢ",
  "meta.discover.desc":
    "ኣብ ብምሉኡ ስኮትላንድ ምስ ደቂ ኣንስትዮ ዝሰርሑ ትካላት፡ በቲ ዝህብዎ ዓይነት ደገፍ ወይ በቲ ዘድልየኪ ረኣዪ።",
  "meta.faq.desc":
    "ደቂ ኣንስትዮ ነዚ መርበብ ቅድሚ ምጥቃመን እንታይ ይሓታ፡ ትካላት ድማ ቅድሚ ምምዝጋቦም እንታይ ይሓቱ። ብንጹር ተመሊሱ።",
  "meta.orgs.desc":
    "እቲ እተካይድዎ ኣብ HWS Path Grid ኣስፍርዎ እሞ ነተን ብሓቂ ዝሰማምዐን ደቂ ኣንስትዮ ብጽሓዮም። ነጻ እዩ፡ ሓደ ግዜ ይረጋገጽ፡ ንምንጻር ድማ ዝኸፍል የለን።",
  "meta.go.title": "ንምምልካት ትወጺ ኣለኺ",
  "meta.go.desc": "ናብቲ ናይቲ ትካል ገጽ ነብጽሓኪ ኣለና፡ ኣብኡ ከተመልክቲ።",
  "meta.help.desc":
    "ዘድልየኪ እንተ ዘይረኺብኪ፡ ወይ ኣብዚ ጌጋ ዝመስል ነገር እንተ ሃልዩ፡ ንገርና። ካባኺ ክንሰምዕ ንመርጽ እምበር ክትገድፍዮ ኣይንደልን።",
  "meta.saved.desc": "ዝዓቀብክዮ ኩሉ፡ ኣብ ሓደ ቦታ።",
  "meta.privacy.desc":
    "ነዚ መርበብ ክትጥቀምሉ ከለኺ HWS Path Grid እንታይ ከም ዝእክብ፡ ስለምንታይ፡ ከምኡ ድማ እንታይ ፈጺሙ ከም ዘይገብረሉ።",
  "meta.terms.desc":
    "ናይ HWS Path Grid ናይ ኣጠቓቕማ ሕግታት፡ ነተን ኣብዚ ዝደልያ ደቂ ኣንስትዮን ነቶም ኣብዚ ዝተመዝገቡ ትካላትን።",
  "meta.talk.desc": "ናብ ቅኑዕ መኣዝን ክመርሓኪ ምስ ዝኽእል ሰብ ነጻ ጻውዒት ሓዝዪ።",
  "meta.confirm.desc": "ጻውዒትኪ ቅድሚ ምሓዙ ዘሎ ናይ መወዳእታ ስጉምቲ።",
  "meta.booked.title": "ጻውዒትኪ ተታሒዙ ኣሎ",
  "meta.booked.desc": "ቀጺሉ እንታይ የጋጥም።",
  "meta.account.desc":
    "እቶዊ ወይ ኣካውንት ፍጠሪ፡ እቲ እትዕቅብዮ ደገፍ ኣብ ዝመጽእ ግዜ ምስ ትምለሲ ኣብኡ ምእንቲ ክህሉ።",
  "meta.accountCode.desc": "ክትኣትዊሉ እትኽእሊ ናይ ሽዱሽተ ኣሃዝ ኮድ ሰዲድናልኪ ኣለና።",
  "meta.profile.desc": "ብግቡእ ክንጽውዓኪ ስምኪ ወስኺ። ኣብዚ ዝግደድ ነገር የለን።",
  "meta.settings.desc": "መዘኻኸሪታትኪ፡ ቋንቋኺ፡ ከምኡ ድማ ኣብ ኣካውንትኪ እንታይ ከም ዘጋጥም።",
  "meta.emailChange.title": "ኢመይል ኣድራሻኺ ቀይሪ",
  "meta.emailChange.desc": "ኣካውንትኪን ኣብኡ ዝተዓቀበ ኩሉን ናብ ካልእ ኣድራሻ ኣግዓዝዮ።",
  "meta.emailCode.title": "ሓድሽ ኢመይልኪ ርኣዪ",
  "meta.emailCode.desc": "ናብ ሓድሽ ኣድራሻኺ ዝሰደድናዮ ኮድ ኣእትዊ።",

  "settings.savedList": "ዝዓቀብክዮ ዝርዝረይ",
  "settings.reminders": "መዘኻኸሪታት",
  "settings.howFar": "ክንደይ ኣቐዲሙ",
  "settings.nothingElse": "ካልእ ዝኾነ ነገር ኣይንሰድን። ጋዜጣ የለን፡ ምሕጽንታ የለን።",
  "settings.neverName":
    "መዘኻኸሪ ኢመይላት ካልእ ሰብ ኢመይልኪ እንተ ኣንበቦ ኢሉ፡ ዓይነት እቲ ደገፍ ፈጺሞም ኣይጠቕሱን።",
  "settings.emailChanged":
    "ተዛዚሙ። ኣካውንትኪ ሕጂ ኣብዚ ኣድራሻ እዩ ዘሎ፡ ዝተዓቀበ ዝርዝርኪ እውን ምስኡ መጺኡ።",
  "reminders.beforeDeadline": "ቅድሚ ናይ መወዳእታ ዕለት",
  "change.heard": "ንሕና ዝሰማዕናዮ እዚ እዩ",
  "change.weWillShow":
    "ውሑዳት ቀጺሎም ዘለዉ ስጉምትታት ከነርእየኪ ኢና፡ እቲ ዝበለጸ ዝሰማምዕ ቀዲሙ። ኣብዚ ንምምጻእ ዝኸፍል የለን።",
  "startover.confirm": "እዚ መልስታትኪ የጽሪ። ከም ብሓድሽ ንጀምር?",
  "startover.note": "ዝዓቀብክዮ ኩሉ ኣብ ቦታኡ ይጸንሕ። ዝኸይድ እቲ ብዛዕባ ዘድልየኪ ዝነገርክና ጥራይ እዩ።",
  "startover.yes": "እወ፡ ከም ብሓድሽ ጀምሪ",
  "startover.keep": "መልስታተይ ሓዝዮም",
  "legal.onThisPage": "ኣብዚ ገጽ",
  "legal.questions": "ብዛዕባ ዝኾነ ካብዚ ዘሎ ሕቶታት ናብ ሰብ እዩ ዝኸይድ፡ ናብ ቅጥዒ ኣይኮነን።",
  "legal.draftTitle": "እዚ ንድፊ እዩ",
  "legal.draftBody":
    "እቲ ኣብ ታሕቲ ዘሎ ቃላት እዚ መድረኽ ሎሚ ብኸመይ ከም ዝሰርሕ ብትኽክል ይገልጽ፡ ግን ገና ናይ መወዳእታ ምርመራ ኣይሓለፈን። ዝተዘርግሐ ንኽተንብብዮን ተሓታትነት ንኽትሓትናን እዩ እምበር ስለ ዝተዛዘመ ኣይኮነን።",
  "legal.draftAsk": "ኣብዚ ዘሎ ዝኾነ ነገር ንእትገብርዮ ውሳነ ኣገዳሲ እንተ ኾይኑ፡ ሕተትና።",
  "legal.pendingTitle": "እዚ ገና ይጸሓፍ ኣሎ",
  "legal.pendingBody":
    "እቲ ቃላት ኣባና ኣሎ፡ እዚ መድረኽ ቅድሚ ምኽፋቱ ድማ ኣብዚ ክዝርጋሕ እዩ። ክሳብ ሽዑ ኣብዚ ገጽ ዝሰርሕ ነገር የለን።",
  "legal.pendingAsk":
    "ኣብ መንጎ እቲ እትጽሕፍዮ ነገር እንታይ ከም ዝኸውን ክትፈልጢ እንተ ደሊኺ፡ ሕተትና እሞ ብንጹር ክንነግረኪ ኢና።",
  "photos.aria": "ካብ Holistic Wellbeing Summit ዝተወስዱ ስእልታት",
  "photos.credit": "Holistic Wellbeing Summit",
  "testimonials.aria": "ደቂ ኣንስትዮ ዝብልኦ",
  "testimonials.prev": "ዝሓለፈ ጥቕሲ",
  "testimonials.next": "ቀጺሉ ዘሎ ጥቕሲ",
  "form.sendCode": "መእተዊ ኮድ ስደዱለይ",
  "form.yourCode": "መእተዊ ኮድኪ",
  "form.codeWorks": "እቲ ኮድ ን 15 ደቓይቕ ይሰርሕ።",
  "form.newCodeSent": "ሓድሽ ኮድ ተሰዲዱ። ንኽበጽሕ ደቒቕ ክወስድ ይኽእል።",
  "form.sendNewCode": "ሓድሽ ኮድ ስደዱ",
  "form.theCodeWeSent": "እቲ ዝሰደድናዮ ኮድ",
  "form.newEmail": "ሓድሽ ኢመይል ኣድራሻ",
  "form.sendToNew": "ናብቲ ሓድሽ ኣድራሻ ኮድ ስደዱ",
  "form.firstName": "ቀዳማይ ስም",
  "form.lastName": "ዳሕራይ ስም",
  "form.phoneOptional": "ቁጽሪ ስልኪ (ኣማራጺ)",
  "form.phoneNote": "ንኽንድውለልኪ እንተ ሓቲትክና ጥራይ ኢና እንጥቀመሉ።",
  "form.continue": "ቀጽሊ",
  "org.allOrgs": "ኩሎም ትካላት",
  "org.checked": "ብ HWS ዝተረጋገጸ",
  "org.website": "ናቶም ዌብሳይት",
  "org.whatTheyDo": "እንታይ ይገብሩ",
  "org.whatTheyOffer": "እንታይ የቕርቡ",
  "org.whoTheyWorkWith": "ምስ መን ይሰርሑ",
  "org.whoTheyCanHelp": "ንመን ክሕግዙ ይኽእሉ",
  "org.whoTheyCannot": "ንመን ክሕግዙ ኣይክእሉን",
  "org.when": "መዓስ",
  "org.howToReach": "ከመይ ጌርኪ ትረኽብዮም",
  "org.zones": "ዞባታት ተበጻሕነት",
  "org.mainOne": "ቀንዲ ዞባኦም",
  "org.nothingRunning":
    "ሕጂ ዝካየድ ነገር የብሎምን። እንታይ ከም ዘድልየኪ ንገርና እሞ ኣብ ኩሉ ዘሎና ክንደሊ ኢና።",
  "org.orTellUs": "ወይ እንታይ ከም ዘድልየኪ ንገርና እሞ ንሕና ክንረኽበልኪ ኢና",

  "orgpage.heroTitle": "እተን ንዓኣተን እትሰርሑለን ደቂ ኣንስትዮ፡ ንኣኻትኩም ክደልያ ከየድለየን",
  "orgpage.heroBody":
    "እቲ ስራሕ ድሮ ትሰርሕዎ ኣለኹም። እቲ ጸገም ሓንቲ ጓል ኣንስተይቲ ዌብሳይትኩም ንምርካብ ስምኩም ክትፈልጥ ምግዳዳ እዩ። ኣብዚ ግን ኩነታታ ትገልጽ፡ ንሕና ድማ ቅኑዕ መልሲ ስለ ዝኾንኩም ኣብ ቅድሚኣ ነቐምጠኩም እምበር ስለ ዝገመተት ኣይኮነን።",
  "orgpage.haveAccount": "ድሮ ኣካውንት ኣለኒ",
  "orgpage.freeNote": "ነጻ። ዝተኸፍለሉ ቦታ የለን፡ መወዓውዒ የለን፡ ንላዕሊ ንምውጻእ ዝኸፍል እውን የለን።",
  "orgpage.whatYouGet": "እንታይ ትረኽቡ",
  "orgpage.reach": "ተበጻሕነት፡ ከምኡ ድማ ንምርግጋጹ ዝኸውን መንገዲ",
  "orgpage.gain1Title": "እቲ እትገብርዎ ዝደልያ ዝነበራ ደቂ ኣንስትዮ",
  "orgpage.gain1Body":
    "ኩነታታ ብናታ ቃላት ትገልጽ። ንሕና ድማ ምስ ንመን ተዳሊኹም ከም ዘለኹም፡ እንታይ ከም እትህቡ፡ ኣበይ ከም እትሰርሑን ክንደይ ከም ዝኽፈልን ነወዳድሮ። ብቕዕቲ ምዃናን ዘይምዃናን ፈሊጣ እያ እትመጽእ።",
  "orgpage.gain2Title": "ናብ ወሃቢ ገንዘብ ክትወስድዎ እትኽእሉ ቁጽርታት",
  "orgpage.gain2Body":
    "ክንደይ ደቂ ኣንስትዮ ናብ ናትኩም ዌብሳይት ከም ዝተላእካ፡ ክንደይ ገጽ ትካልኩም ከም ዘንበባ፡ ከምኡ ድማ ዝዘርጋሕኩምዎ ነፍሲ ወከፍ ነገር ከመይ ከም ዝሰርሐ። ናይ ውዳሰ ቁጽሪ ኣይኮነን፡ እቲ ቀዳማይ ነቶም ጠዊቖም ናባኹም ዝመጹ ሰባት እዩ ዝቖጽር።",
  "orgpage.gain3Title": "ሓደ ግዜ ይረጋገጽ፡ ኣብ ነፍሲ ወከፍ ዝርዝር ኣይኮነን",
  "orgpage.gain3Body":
    "ክትጽምበሩ ከለኹም ብህዝባዊ መዝገብ ወይ ብወሃቢ ገንዘብኩም ንሕልወኩም። ድሕሪኡ ዝደለኹምዎ ኣብ ዝደለኹምሉ ግዜ ትዝርግሑ፡ ንዓና ከይተጸበኹም።",
  "orgpage.gain4Title": "ዝወሓደ ዘይተደልየ ሕቶታት",
  "orgpage.gain4Body":
    "ንመን ክትሕግዙ ከም ዘይትኽእሉ ትነግሩ፡ ንሕና ድማ ነርእዮ። ደቂ ኣንስትዮ ቅድሚ ምርካብኩም ባዕላተን ይወጻ፡ እዚ ድማ ነቲ ኢመይልኩም ዝምልስ ሰብ ዝምለሰሉ ግዜ እዩ።",
  "orgpage.fourSteps": "ኣርባዕተ ስጉምትታት፡ ሓደ ካባታቶም ድማ ናትና እዩ",
  "orgpage.step1Title": "መን ምዃንኩም ንገሩና",
  "orgpage.step1Body":
    "ብዛዕባ እትገብርዎ፡ ንመን ከም እተገልግሉን ኣበይን ውሑዳት ሕቶታት። ዓሰርተ ደቒቕ፡ ኣብ መንጎ ደው ኢልኩም ክትምለሱ እውን ትኽእሉ።",
  "orgpage.step2Title": "ንሕልወኩም",
  "orgpage.step2Body": "ብህዝባዊ መዝገብ ወይ ብወሃቢ ገንዘብኩም። ሓደ ምርመራ፡ ብሰብ ዝተገብረ።",
  "orgpage.step3Title": "ክፉት ዘሎ ኣስፍሩ",
  "orgpage.step3Body":
    "ትምህርቲ፡ ገንዘባዊ ሓገዝ፡ ክፉት ኣገልግሎት፡ መደብ ምምካር። ንሓንቲ ጓል ኣንስተይቲ መእተዊ ዘለዎ ዝኾነ ነገር።",
  "orgpage.step4Title": "ዝሰማምዓላ ግዜ ትረኽቦ",
  "orgpage.step4Body": "ስምኩም ስለ ዝደለየት ዘይኮነ፡ እቲ ዝገለጸቶ ነገር ምስቲ እተካይድዎ ስለ ዝሰማምዐ እዩ።",
  "orgpage.whereYouSit": "ኣበይ ምተቐመጥኩም",
  "orgpage.zonesBody":
    "ባዕልኻትኩም ትመርጹ፡ ሓደ ቀንዲን ክሳብ ክልተ ካልኦትን። መብዛሕትአን ደቂ ኣንስትዮ ኣብ ሓደ እዋን ካብ ሓደ ንላዕሊ የድልየን፡ መብዛሕትኡ ኣገልግሎት ግን ሓደ ጥራይ እዩ ዝገብር፡ እዚ ድማ እቲ ክዓጽዎ ዝተፈጥረሉ ጋግ እዩ።",

  "legal.englishApplies":
    "እቶም ኣብዚ ገጽ ዘለዉ ኣርእስትታት ብቋንቋኺ እዮም። እቲ ጽሑፍ ባዕሉ ግን ብእንግሊዝኛ እዩ፡ እቲ ዝሰርሕ ድማ እቲ ናይ እንግሊዝኛ ቅዳሕ እዩ።",
  "legal.askInYourLanguage": "ብዛዕባ ዝኾነ ክፋሉ ሕተቱና እሞ ክንምልሰልኩም ኢና።",

  "reason.youToldUs": "ንዓና ነጊርክና #",
  "reason.and": "ከምኡ ድማ",
  "reason.youAskedAbout": "ብዛዕባ # ሓቲትኪ",
  "reason.runsIn": "እዚ ኣብ # ይካየድ",
  "reason.isOnline": "እዚ ኦንላይን እዩ፡ ስለዚ ኣበይ ከም ዘለኺ ኣገዳሲ ኣይኮነን",
  "reason.acrossScotland": "እዚ ኣብ ብምሉኡ ስኮትላንድ ክፉት እዩ",
  "reason.closest": "ካብቲ ዝገለጽክዮ ዝቐረበ ካብ ዘሎና ሓደ እዚ እዩ።",
  "reason.clauseJoin": "፡ ከምኡ ድማ ",
};

export const MESSAGES: Record<string, Catalogue> & { en: Record<MessageKey, string> } = {
  en,
  gd,
  sco,
  pl,
  uk,
  ar,
  ur,
  pa,
  zh,
  ro,
  so,
  ti,
};
