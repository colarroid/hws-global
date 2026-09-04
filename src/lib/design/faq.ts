/**
 * The questions people actually ask, and honest answers to them.
 *
 * Two audiences, kept apart. A woman wants to know whether this is safe and
 * whether it will waste her time; an organisation wants to know what it costs
 * and what happens to what it posts. Mixing them makes both scroll past half
 * the page to find themselves.
 *
 * Every answer here has to stay true of the software. Several of these are
 * promises — nobody pays to appear, no account is needed, nothing is sold —
 * and the moment one of them stops being true in the code, it becomes a lie
 * on a page whose whole job is being trusted. If a behaviour changes, this
 * file changes with it.
 */

export type Question = { q: string; a: string };

export const FOR_WOMEN: Question[] = [
  {
    q: "What is HWS Path Grid?",
    a: "One place to find support for women across Scotland: courses, funding, advice, drop-ins, mentoring and more. Tell us what you need in your own words and we show you a few next steps worth taking, rather than a directory to search through yourself.",
  },
  {
    q: "Do I need an account?",
    a: "No. You never need one to search, read or apply for anything. An account exists only so you can save something to come back to and be reminded before a closing date, and you are asked for one after you save, never before.",
  },
  {
    q: "Does it cost anything?",
    a: "No. The platform is free to use. Some of the things listed on it have a cost, and every listing says which, free, free to apply, or there is a cost, before you click through.",
  },
  {
    q: "What happens to what I type?",
    a: "Your answers are used to rank your results and nothing else. They are not sold, not passed to the organisations you are shown, and not used to build a profile of you. We record that a listing was viewed or clicked, as a count and a date, with nothing attached that could say it was you.",
  },
  {
    q: "How do you decide what to show me?",
    a: "Three things you tell us: what you need in your own words, roughly where you are, and anything about your situation you choose to share. Those are weighed against what each listing is for, who it is open to, where it runs and how you can reach it. Every result says why it matched.",
  },
  {
    q: "Does anyone pay to appear higher up?",
    a: "No. There is no paid placement and no advertising anywhere on the platform. Nothing about the order of your results can be bought.",
  },
  {
    q: "How do I know these organisations are real?",
    a: "Every organisation is checked against a public register, the Scottish Charity Register or Companies House, or, where it has no registration, against its funder, before it can post anything. Each listing also carries the date it was last confirmed, so you can see how current it is.",
  },
  {
    q: "What if nothing matches what I need?",
    a: "You will be offered a wider search rather than an empty page, and you can change any of your three answers. If there is still nothing, tell us, searches that find nothing are recorded without anything identifying you, and they are how we work out what is missing.",
  },
  {
    q: "Can I save something and come back to it?",
    a: "Yes. Save anything from your results and it is there when you return. If you add an email address we will remind you about seven days before a closing date, and you can turn that off at any time.",
  },
  {
    q: "Will anyone know I have been here?",
    a: "Not from us. We do not contact anyone on your behalf, we do not tell an organisation you looked at it, and nothing you do here appears anywhere someone else can see. Bear in mind that your own browser keeps a history, as it does on any site.",
  },
  {
    q: "What if a listing is wrong or out of date?",
    a: "Tell us. There is a report link on every listing page. We check it, and if it is wrong the organisation is asked to fix it; if a woman would waste an afternoon on it in the meantime, we take it down until it is sorted.",
  },
  {
    q: "What happens when a closing date passes?",
    a: "The listing closes but does not disappear. You can still reach it from a saved list or a link, so a page you were sent does not turn into nothing, and it stops competing with things that are still open.",
  },
  {
    q: "Is this only for Scotland?",
    a: "Yes. Every organisation here works in Scotland, and the places we match on are Scottish towns and council areas. Some listings are online and open to anyone, and those say so.",
  },
  {
    q: "Can I read this in another language?",
    a: "Parts of it. The language control at the top of the page offers Gaelic, Scots, Polish, Ukrainian, Arabic, Urdu, Punjabi and simplified Chinese. What organisations write about themselves stays in the language they wrote it in, we do not machine-translate anybody's words.",
  },
  {
    q: "I need help right now.",
    a: "This platform is for finding support, not for emergencies, and nobody here is monitoring it. If you are in immediate danger, call 999. Scotland's Domestic Abuse and Forced Marriage Helpline is free on 0800 027 1234, day or night.",
  },
];

export const FOR_ORGANISATIONS: Question[] = [
  {
    q: "Who can list on HWS Path Grid?",
    a: "Any organisation working with women in Scotland: charities, social enterprises, public bodies, colleges, businesses and constituted community groups. You do not have to be women-only, but what you list has to be something a woman can act on.",
  },
  {
    q: "Does it cost anything to be listed?",
    a: "No. Listing is free and there is no paid placement to buy, so nothing you pay could change where you appear in anybody's results.",
  },
  {
    q: "How do you check us, and how long does it take?",
    a: "Against a public register where you have one, a charity number or a company number, and against your funder where you do not. It usually takes about two working days from the point you finish signing up. You will get an email either way, and if we need one more thing we will say exactly what.",
  },
  {
    q: "What do I need to fill in?",
    a: "Signing up is three short steps: who you are, your Access Zones, and a contact for verification. After that there is a fuller profile, your mission, who you work with, what you offer, how far you reach and who you cannot help. That profile is what decides which women we send you, so it is worth the twenty minutes.",
  },
  {
    q: "What can I post?",
    a: "One thing a woman can act on: a course, a grant, a drop-in, an event, a mentoring place, a one-to-one. Post them separately rather than bundling them, so each can be matched to the women it actually suits.",
  },
  {
    q: "Who decides which women see my listing?",
    a: "A ranker, from what she typed and what you wrote. It weighs the situations you tagged, her own words against yours, and whether you are within reach of her. Every factor is in one file and none of it can be bought. She is also told why your listing matched her.",
  },
  {
    q: "Can I edit a listing after it is live?",
    a: "Yes, at any time, and it stays live while you do. The listing shows the date it was last updated, so a woman can see it is current.",
  },
  {
    q: "What happens when my closing date passes?",
    a: "The listing closes on its own. Nobody asks you to confirm, because you already told us the date. It stays reachable so anyone who saved it is not left with a dead link, and it stops competing with things still open. To extend it, edit the date.",
  },
  {
    q: "Can colleagues help manage our listings?",
    a: "Yes. Invite them by email from your organisation page once you are verified. They get their own sign-in and inherit your verified status, so there is nothing to prove again.",
  },
  {
    q: "Why has my listing been hidden?",
    a: "An admin can take a listing off the woman-facing side if something on it would waste her time, a dead link, a date that has passed, eligibility that does not match what is actually run. Nothing is deleted, you keep everything you wrote, and you are told the reason by email and on your dashboard. Fix it and tell us, and it goes back up.",
  },
  {
    q: "What do the figures on my overview mean?",
    a: "Women reached is the number who clicked through to you. Profile visits is the number who read your organisation page. Both can be shown for this week, this month or all time, and they are counts with dates attached, never anything about who anybody was.",
  },
  {
    q: "Can HWS add our organisation for us?",
    a: "Yes. Some organisations will never sign up themselves, so HWS can enter one and post on its behalf. If that is yours and you would rather manage it, ask us and we will hand it over.",
  },
  {
    q: "How often should we post?",
    a: "As often as you genuinely have something. You tell us your expected rhythm on your profile, most weeks, monthly, when funding allows, and we use it to decide how often to check in, rather than nagging everybody on the same clock.",
  },
];
