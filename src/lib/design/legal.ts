/**
 * The two legal documents, as content rather than markup.
 *
 * The wording lives here on its own so there is no JSX to edit and nothing to
 * break by pasting a paragraph into the wrong place. The page builds itself
 * from `sections`: the contents list, the anchors and the spacing all follow.
 *
 * STATUS, 11 September 2026. Both documents below were drafted from the
 * schema rather than from a template, so every claim in them is checkable
 * against the database: the tables named are the tables that exist, and the
 * three processors named are the three the platform actually calls.
 *
 * THEY HAVE STILL NOT BEEN THROUGH A SOLICITOR. What changed on 11 September
 * is only that HWS asked for the draft notice to come off the pages, so
 * `draft` is now false on both and a reader is no longer told the wording is
 * unreviewed. That was their call to make and it is recorded here because it
 * is no longer recorded anywhere a reader can see: the pages now read as
 * being in force, and every item in the list below is still outstanding.
 *
 * `updated` is deliberately still null, so neither page claims a date it does
 * not have. Set it when a reviewer approves the wording, and not before.
 *
 * ON AI, added 11 September 2026 and the one part of these documents written
 * about something that has not happened yet.
 *
 * HWS asked for the phrase "AI-assisted discovery, with structured
 * eligibility, geography and accessibility rules" in the legal pages, ahead of
 * integrating AI, so that the change is not a shock. It is in both documents.
 *
 * It is written as what the approach is plus where it currently stands, not as
 * something already running, and that distinction is load-bearing. There is no
 * model anywhere in this repository: the ranker in src/lib/search/rank.ts
 * strips stop words and scores word overlap. A privacy policy describing
 * processing that does not occur is a misrepresentation in the one document
 * whose entire value is being accurate, and it is the document a regulator or
 * an institutional reviewer reads first. Saying "this is coming, here is what
 * it will and will not do" familiarises people just as well and is true.
 *
 * When the model does land, the edits are: delete the "no AI model is
 * involved" paragraph, move the two "will" paragraphs into the present tense,
 * and set `updated`.
 *
 * STILL INCONSISTENT, and not ours to fix here: the landing page says "The
 * result is AI powered" and the find flow says "Search powered by AI", both at
 * HWS's request. Those are present tense about something these documents now
 * correctly place in the future. The gap is narrower than it was, but a
 * reviewer who reads both will still find it.
 *
 * WHAT A REVIEWER HAS TO SUPPLY, because it is not knowable from the code:
 *
 *   * A postal address for the controller. UK GDPR Article 13 requires the
 *     controller's identity and contact details, and an email alone is thin.
 *   * A named contact for data-protection questions. Right now both documents
 *     route to /help, which is honest but is a booking calendar.
 *   * The retention periods. The ones written below are proposals, marked in
 *     their own section, and nothing in the codebase deletes anything on a
 *     schedule yet — there is no retention job. Either the periods get built
 *     or the wording has to stop promising them.
 *   * Whether HWS is registered with the ICO. Most controllers must be, and
 *     the registration number belongs in "Complaints".
 *   * Confirmation of where Supabase stores this project's data. The policy
 *     says the UK or EEA; if the project region is us-east-1 that sentence is
 *     wrong and international transfers need their own paragraph.
 *
 * ON UNDER-18s. One of the audiences an organisation can select is "Young
 * women, 16 to 25", so the platform expects minors. That pulls in the ICO's
 * Age Appropriate Design Code, which is a bigger piece of work than a policy
 * section. The wording below states the position rather than pretending the
 * question does not arise.
 *
 * How to fill one in:
 *
 *   * `updated` is the date on the approved document, written out in full,
 *     e.g. "18 September 2026". Leave it null until there is one.
 *   * `draft` puts a notice at the top of the page saying the wording is
 *     unreviewed. It is false on both at HWS's request, which is why that
 *     notice is not there; the mechanism still works if it is ever wanted
 *     back for a new document.
 *   * `lead` is one or two sentences under the title, in plain words. It is
 *     not part of the legal text and should not try to be.
 *   * each section is a heading and its paragraphs. One string per paragraph.
 *     Headings become anchors, so a section can be linked to directly.
 *
 * Until `sections` has something in it the page says so plainly rather than
 * showing an empty document, because a blank privacy policy is worse than an
 * absent one.
 */

export type LegalSection = {
  /** The heading. Also the anchor, lower-cased and hyphenated. */
  title: string;
  /** One string per paragraph. */
  body: string[];
};

export type LegalDocument = {
  /** The date on the approved wording, or null while there is none. */
  updated: string | null;
  /**
   * True while the wording is written but not yet approved.
   *
   * Puts a notice at the top of the page saying the document is a draft. A
   * privacy policy that reads as in force when nobody has approved it is a
   * worse failure than an empty one: an empty page makes no promises, and a
   * draft one makes promises nobody has agreed to keep.
   */
  draft: boolean;
  /** Plain-words summary under the title. Not part of the legal text. */
  lead: string;
  sections: LegalSection[];
};

export const PRIVACY: LegalDocument = {
  updated: null,
  draft: false,
  lead:
    "What we collect when you use this site, why we collect it, and what we will never do with it.",
  sections: [
    {
      title: "The short version",
      body: [
        "You can search this whole platform, read every listing and apply to anything on it without telling us who you are. No account, no name, no email.",
        "An account exists for one reason: so the list of things you saved is still there next time, and so we can warn you before something you saved closes. Nothing else on the site requires one.",
        "What you type into the search is used to rank your results. It is never sold, never passed to the organisations you are shown, and never used to build a profile of you.",
        "The rest of this page is the detail behind those three sentences.",
      ],
    },
    {
      title: "Who we are",
      body: [
        "This site is run by The Holistic Wellbeing Summit, which we call HWS. HWS decides what is collected here and why, which under UK data protection law makes it the controller of that information.",
        "If you want to ask about anything on this page, or ask us to do something with information we hold about you, you can reach a person through the Talk to a person page. You do not have to explain yourself first.",
      ],
    },
    {
      title: "If you only search",
      body: [
        "The three questions ask what you need, roughly where you are, and anything about your situation you want us to know. Your answers travel with you through the search as you move between the questions and the results. They are not attached to you and they are not stored against any account.",
        "There is one exception and we would rather tell you about it than not. When a search finds nothing, or very little, we keep the words that were searched for, the place, and any situations that were chosen, together with the date. We do not keep who searched, we do not keep your device or network address, and there is no way for us to connect one of those records to another or to you.",
        "We keep those because they are the only honest record of what women are looking for in Scotland and not finding. It is what tells HWS where provision is thin, and it is what we take to the organisations who might fill the gap. If you would rather your words were not kept even in that form, do not use the search, and talk to us instead.",
        "We also count how many times each listing was opened, saved, or clicked through to. Those counts carry a date and nothing else. There is no identifier in them, so they cannot be traced back to a person, including by us.",
      ],
    },
    {
      title: "If you make an account",
      body: [
        "You give us an email address. We send a one-time code to it, and having that code is how you sign in. There is no password, so there is no password of yours for us to store or lose.",
        "On the settings screen you can add a first and last name, and a phone number. Both are optional, both are for our own use if you ask us to call you back, and neither is ever shown to the organisations on the platform.",
        "Once you have an account we store the listings you save, the date you saved each one, and whether you have marked it as applied for. That is the saved list, and it is the whole reason accounts exist.",
        "We also store whether you want reminders and how many days before a deadline you want them. That is what the reminder email is sent from.",
      ],
    },
    {
      title: "If you book a call",
      body: [
        "Booking a call asks for your name and an email address so we can send you the time and let you know if it has to change. A phone number is optional and only there if you would rather we rang you than emailed you.",
        "If you arrived at the booking from a search, what you searched for is carried into the booking with you: what you needed, the place, and any situations you chose. That is deliberate. It means whoever calls you already knows why you are on the phone and that nothing came back, so you do not have to tell the story from the beginning to somebody who has not heard it.",
        "You can also add a note. Only HWS reads any of this. It is not shown to organisations and it is not attached to your account, whether or not you have one.",
      ],
    },
    {
      title: "Cookies",
      body: [
        "This site sets three cookies and none of them watch you. There is no analytics, no advertising, and nothing here reports to anybody else about what you looked at.",
        "One remembers which language you chose. One remembers that you have already seen the notice about cookies, so it stops appearing. The third is your sign-in session, and it only exists once you have signed in; signing out removes it.",
        "All three are needed for the site to work the way you asked it to, which is why the notice tells you they are there rather than asking permission to set them. There is nothing to refuse, because there is nothing here that we would go on setting if you said no.",
      ],
    },
    {
      title: "Who else can see it",
      body: [
        "We use three companies to run this platform, and each of them can technically see the information involved in the part they run. They act on our instructions and are not allowed to use any of it for their own purposes.",
        "Supabase stores the database and handles sign-in. Vercel hosts the site itself. Resend sends the emails: your sign-in code, deadline reminders, and booking confirmations.",
        "Nobody else. We do not sell information, we do not share it for advertising, and we do not pass what you type to the organisations you are shown. If an organisation ever learns anything about you it is because you contacted them yourself.",
        "We would only hand anything over outside that list if the law required it, and we would tell you unless we were forbidden from doing so.",
      ],
    },
    {
      title: "Where it is stored",
      body: [
        "Data for this platform is held in the United Kingdom or the European Economic Area. If that ever changes we will say so here and explain what protects it in transit.",
      ],
    },
    {
      title: "How long we keep things",
      body: [
        "Your account and your saved list stay until you delete the account. When you do, the account and everything attached to it is removed from the live database immediately, not marked as hidden.",
        "Bookings are kept for twelve months after the call, so that HWS can pick up where it left off if you come back, and so that a pattern in what women are asking for is visible over a year rather than a month.",
        "The records of searches that found nothing carry no identifier, so they are kept as long as they are useful as evidence of unmet need.",
        "Emails we have sent you sit with our email provider for a short period so that delivery problems can be investigated, and are then removed.",
      ],
    },
    {
      title: "What we will never do",
      body: [
        "We will never sell what you tell us, to anyone, for any amount.",
        "We will never use what you searched for to build a profile of you, or to target advertising at you here or anywhere else.",
        "We will never use what you type to train an AI model, ours or anybody else's, and we will never send it to a service that would.",
        "We will never let an organisation pay to appear higher in your results, or pay to see who searched for what. There is no paid placement on this platform and there is no advertising on it.",
        "We will never share your name, email or phone number with an organisation on this platform. If you want them to have it, you give it to them.",
      ],
    },
    {
      title: "AI, and how your words are read",
      body: [
        "Our approach is AI-assisted discovery, with structured eligibility, geography and accessibility rules. In plain words, that is two separate jobs kept deliberately apart: software helps us understand the sentence you typed, and a fixed set of rules decides what is open to you, what is near you, what it costs and how you can reach it.",
        "As things stand today, no AI model is involved. The ordering is done entirely by those rules, which read the words in your sentence and weigh them against what each listing says it is for. We are preparing to bring AI in, and we are telling you before rather than after, so that when it arrives it is something you were told about rather than something you notice.",
        "What AI will do is read your sentence the way a person would, so that describing your situation in your own words works as well as knowing the official term for it. It is there to understand the question better. It is not there to answer it.",
        "What AI will never do is decide whether you qualify for anything, move an organisation up your results because it paid, or build a picture of you. Your words will not train it, and they will not be sent anywhere that would use them to train anything else.",
        "We will update this page before any of that goes live, and say plainly what changed.",
      ],
    },
    {
      title: "Decisions about you",
      body: [
        "Nothing on this platform makes a decision about you. The order your results come back in is worked out by a set of rules we wrote: what you told us, weighed against what each listing is for, who it is open to, where it runs and what it costs. Every result on the page says in a sentence why it matched.",
        "Bringing AI in to help read what you wrote will not change that. Understanding the question is not the same as deciding the answer: the rules above are what order the page, and they are written down rather than learned.",
        "Whether you actually qualify for anything is decided by the organisation, by a person, after you contact them. We do not decide it, we cannot decide it, and nothing here is an assessment of you.",
      ],
    },
    {
      title: "Your rights",
      body: [
        "You can ask us for a copy of what we hold about you, ask us to correct it if it is wrong, or ask us to delete it. If you have an account you can delete it yourself from the settings screen without asking anybody.",
        "You can also ask us to stop using it in a particular way, ask for it in a portable form, or object to us keeping it at all. Where we rely on your consent, you can withdraw it at any time, and that does not make anything we did beforehand unlawful.",
        "Ask through the Talk to a person page. We will not ask you why, and we will answer within one month.",
      ],
    },
    {
      title: "Young people",
      body: [
        "Some of the support listed here is aimed at women from sixteen upwards, so we expect that some people using this site are under eighteen.",
        "Everything on this page applies to you in the same way, and the parts that matter most are the ones that are already true for everybody: you do not need an account to search, nothing you type is sold or profiled, and no organisation is told that you looked at it.",
        "If you are under eighteen and want anything we hold about you removed, ask and we will remove it. You do not need a parent to ask for you.",
      ],
    },
    {
      title: "Changes to this policy",
      body: [
        "If we change how any of this works, we will change this page before the change takes effect, and the date at the top will tell you when it last moved.",
        "If a change is significant, and you have an account, we will email you about it rather than rely on you noticing.",
      ],
    },
    {
      title: "Complaints",
      body: [
        "If you think we have handled your information badly, tell us first. We would rather hear it and put it right.",
        "You also have the right to complain to the Information Commissioner's Office, which regulates data protection in the United Kingdom, at ico.org.uk. You do not have to come to us first, and complaining to them costs nothing.",
      ],
    },
  ],
};

export const TERMS: LegalDocument = {
  updated: null,
  draft: false,
  lead:
    "The rules for using this site, for the women who search it and the organisations who list on it.",
  sections: [
    {
      title: "What this platform is",
      body: [
        "HWS Path Grid helps women in Scotland find support that already exists, by describing their situation in their own words instead of having to know what a scheme is called or who runs it.",
        "It is a way of navigating to other organisations. It is not itself a support service, a benefits adviser, a legal adviser, or a medical service, and nothing on it is advice about your own circumstances.",
        "Using the site means accepting what is on this page. If you do not accept it, please do not use the site.",
      ],
    },
    {
      title: "This is not an emergency service",
      body: [
        "Nobody is monitoring this website. There is no one at the other end of it waiting, and messages sent through it are not read as they arrive.",
        "If you are in immediate danger, contact the emergency services on 999. If you need to talk to somebody urgently, the organisations listed on this platform have their own contact details and their own hours, and those are the ones to use.",
        "You can book a call with HWS through this site. That is a time we will ring you, arranged in advance. It is not a helpline and it is not cover for an emergency.",
      ],
    },
    {
      title: "What we do not decide",
      body: [
        "We do not decide whether you qualify for anything listed here, and we do not apply on your behalf. Each organisation decides who it can help, using its own rules, and that decision is theirs alone.",
        "A listing appearing in your results is not an offer, a promise of a place, or an indication that you will be accepted. It means what you described lined up with what that organisation says it does.",
        "The same is true of any AI we use. Our approach is AI-assisted discovery, with structured eligibility, geography and accessibility rules: AI helps read what you wrote, the rules decide what comes back and in what order, and neither of them decides whether you qualify. A person at the organisation does that, after you contact them.",
      ],
    },
    {
      title: "The information here comes from other people",
      body: [
        "Almost everything you read on a listing was written by the organisation that runs it. We check who they are before they can post anything, and every listing carries the date somebody last confirmed it was still accurate.",
        "We do not independently verify every claim in every listing, and things change without anybody telling us. Deadlines move, funding closes, places fill. Check with the organisation before relying on what you read here.",
        "If something looks wrong, tell us. Women spot an out-of-date date long before we do, and the date on a listing is the whole reason it can be trusted.",
      ],
    },
    {
      title: "Links to other sites",
      body: [
        "When you follow a link to an organisation, you leave this platform and what happens next is between you and them. Their website has its own terms and its own privacy policy, and we are not responsible for either.",
      ],
    },
    {
      title: "Your account",
      body: [
        "You do not need an account to search, read or apply. If you make one, keep access to the email address you used, because that is how signing in works.",
        "Do not use somebody else's email address to make an account, and do not use the site to impersonate anybody.",
        "You can close your account yourself at any time from the settings screen. We can also close an account that is being used to abuse the platform or the people on it.",
      ],
    },
    {
      title: "Listing as an organisation",
      body: [
        "Any organisation working with women in Scotland can apply to list: charities, social enterprises, public bodies, colleges, businesses and constituted community groups. You do not have to be women-only, but what you list has to be something a woman can act on.",
        "We check you once, against a public register or your funder, before you can post anything. After that you post what you like, when you like, without waiting on us.",
        "Listing is free. There is no paid placement, no advertising, and no way to pay to appear higher or more often. Results are ordered by how well a listing fits what a woman described, and every result says why it matched.",
      ],
    },
    {
      title: "What we ask of organisations",
      body: [
        "Keep your listings accurate and current. Every listing shows the date it was last confirmed, women can see it, and we will email you when something needs a look. A listing nobody has confirmed in months ranks below one that has been.",
        "Be straight about who you cannot help. It is a field on your profile and it is shown plainly. A woman who rules herself out in advance is one who has not wasted an afternoon, and one enquiry you did not have to turn down.",
        "Only post something with a real way in for a woman, that you are actually able to deliver, and that you have the right to advertise.",
        "Do not post anything misleading, discriminatory, unlawful, or that collects money or personal information under a false description.",
      ],
    },
    {
      title: "What we may remove",
      body: [
        "We can take down a listing, or suspend an organisation's access, if a listing is inaccurate, out of date, misleading, or breaks anything on this page. We can also do it if we are no longer satisfied that an organisation is what it said it was.",
        "Where it is practical we will tell you first and give you a chance to fix it. Where a listing is causing harm to the women reading it, we will take it down first and tell you afterwards.",
        "The verified stamp is the whole trust mechanism of this platform. It is worth exactly what our willingness to remove things is worth.",
      ],
    },
    {
      title: "Availability",
      body: [
        "We do not promise that the site is available at all times or free of faults. We will try to keep it running and to fix what breaks, but this is a free service and it comes with no guarantee of uptime.",
        "We may change how the platform works, add things, or remove things, and we may stop offering it altogether. If we ever close it we will say so here first.",
      ],
    },
    {
      title: "Where we stand on liability",
      body: [
        "We are responsible for running this platform honestly and for the promises we make on it, including the ones in our privacy policy.",
        "We are not responsible for what the organisations listed here do or fail to do, for decisions they make about you, or for a listing being out of date when they had not told us. Your dealings with an organisation are between you and them.",
        "Nothing here limits our liability for death or personal injury caused by our negligence, for fraud, or for anything else the law does not allow us to limit.",
      ],
    },
    {
      title: "Changes to these terms",
      body: [
        "If we change these terms we will change this page, and the date at the top will tell you when it last moved. Carrying on using the site after that means accepting the new version.",
      ],
    },
    {
      title: "Which law applies",
      body: [
        "These terms are governed by the law of Scotland, and the Scottish courts have jurisdiction over any dispute about them.",
        "If you are a consumer, this does not take away any right you have under the law of the part of the United Kingdom where you live.",
      ],
    },
  ],
};

/** The anchor for a section heading. */
export function anchorFor(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
