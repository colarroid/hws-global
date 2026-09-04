/**
 * The demo roster: who, and what they are running.
 *
 * Names are taken from the HWS PathGrid map, so the platform can be exercised
 * against something shaped like the real thing rather than "Test Org 4".
 * Everything else — the missions, the eligibility lines, every listing — is
 * written for the demo. None of it came from these organisations.
 *
 * That is the whole caveat and it is a real one: these pages carry a "Checked
 * by HWS" stamp against text nobody at NHS Inform has ever seen. It is fine on
 * a platform nobody has been sent to yet, and it stops being fine the day one
 * is. `npm run demo:clean` takes it all out again.
 *
 * Websites are the organisations' real public addresses, because a demo where
 * every link is example.org cannot show whether the logo fetch works.
 */

export const ORGANISATIONS = [
  {
    name: "Business Gateway",
    types: ["public_body"],
    place: "Glasgow · Glasgow City",
    website: "https://www.bgateway.com",
    blurb:
      "Free business advice and support for anyone starting or growing a business in Scotland.",
    mission:
      "We are the national business support service, delivered locally. Whatever stage you are at — a half-formed idea, a first year of trading, or a business ready to take somebody on — there is an adviser in your area whose job is to help you work out the next step. Everything we do is free.",
    uniqueOffer:
      "Every local authority in Scotland has a Business Gateway adviser, so support is a bus ride away rather than a webinar.",
    audiences: ["any_woman", "women_returning_to_work", "women_on_low_income"],
    serviceKinds: ["advice_or_one_to_one", "course_or_programme", "event"],
    accessRoutes: ["in_person", "online", "by_phone"],
    costOptions: ["free"],
    coverage: "scotland_wide",
    eligibility:
      "Anyone in Scotland thinking about starting a business, or already running one. No turnover threshold and no qualifications needed.",
    notEligible:
      "We cannot give you money. We can tell you who does and help you write the application.",
    availability: "year_round",
    postingFrequency: "monthly",
    zone: "enterprise-business-growth",
    alsoZones: ["funding-finance", "business-infrastructure-professional-services"],
    markets: [
      "start-and-grow-a-business",
      "funding-and-investment",
      "digital-and-ai",
      "marketplace-and-procurement",
      "business-infrastructure",
    ],
    listings: [
      {
        name: "Start-up sessions for women",
        kind: "course_or_programme",
        blurb:
          "Six evening sessions covering the practical side of starting up: registering, pricing, tax, and where the money comes from.",
        whoFor:
          "Women in Glasgow with a business idea they have not started yet. No experience needed and nothing to prepare.",
        whatToExpect:
          "Book a place online. Six Tuesday evenings, 6pm to 8pm, in person in the city centre. You leave with a plan you have actually written.",
        cost: "free",
        formats: ["in_person", "evenings_or_weekends"],
        place: "Glasgow",
        deadlineDays: 34,
        applyUrl: "https://www.bgateway.com/events",
        situations: ["starting-or-growing", "changing-career"],
      },
      {
        name: "One-to-one adviser appointment",
        kind: "advice_or_one_to_one",
        blurb:
          "An hour with a local business adviser, on whatever is in your way right now.",
        whoFor:
          "Anyone in Scotland at any stage, including people who have not started yet.",
        whatToExpect:
          "Fill in a short form saying roughly what you need. Someone phones within three working days to arrange a time. Meetings are in person, by phone or online, whichever suits you.",
        cost: "free",
        formats: ["in_person", "online", "by_phone"],
        place: "Scotland-wide",
        deadlineDays: null,
        applyUrl: "https://www.bgateway.com/local-offices",
        situations: ["starting-or-growing", "changing-career"],
      },
      {
        name: "Digital tools for very small businesses",
        kind: "course_or_programme",
        blurb:
          "A short online course on the handful of digital tools that actually save a one-person business time.",
        whoFor:
          "Sole traders and businesses of two or three people who feel behind on the digital side.",
        whatToExpect:
          "Four online sessions of ninety minutes. Recordings if you miss one. Nothing is assumed about what you already know.",
        cost: "free",
        formats: ["online"],
        place: "Online",
        deadlineDays: 20,
        applyUrl: "https://www.bgateway.com/events",
        situations: ["starting-or-growing"],
      },
    ],
  },

  {
    name: "Women's Enterprise Scotland",
    types: ["social_enterprise", "network_or_group"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.wescotland.co.uk",
    blurb:
      "The national body for women-owned businesses in Scotland: research, advocacy and a network of ambassadors.",
    mission:
      "Women-owned businesses contribute billions to the Scottish economy and are still under-supported, under-funded and under-counted. We exist to change that — by gathering the evidence, putting it in front of the people who make policy, and connecting women in business to each other.",
    uniqueOffer:
      "We are the only organisation in Scotland whose whole remit is women's enterprise, so the evidence we publish is the evidence policy gets made on.",
    audiences: ["any_woman", "women_over_50", "women_returning_to_work"],
    serviceKinds: ["mentoring", "event", "advice_or_one_to_one"],
    accessRoutes: ["online", "in_person"],
    costOptions: ["free", "free_to_apply"],
    coverage: "scotland_wide",
    eligibility:
      "Women running or starting a business anywhere in Scotland, at any size and any stage.",
    notEligible:
      "We are not a funder and we do not take equity. If you need capital we will point you at who does.",
    availability: "year_round",
    postingFrequency: "quarterly",
    zone: "enterprise-business-growth",
    alsoZones: ["womens-voice-leadership-civic-influence", "funding-finance"],
    markets: [
      "start-and-grow-a-business",
      "leadership-and-networks",
      "policy-and-advocacy",
      "research-and-innovation",
      "funding-and-investment",
    ],
    listings: [
      {
        name: "Ambassador mentoring programme",
        kind: "mentoring",
        blurb:
          "Six months with a woman who has run a business longer than you have.",
        whoFor:
          "Women who have been trading for at least a year and want to grow rather than survive.",
        whatToExpect:
          "Apply with a short form about where you are and what you are stuck on. We match you by sector and stage. Monthly hour-long sessions, mostly online.",
        cost: "free_to_apply",
        formats: ["online", "in_person"],
        place: "Scotland-wide",
        deadlineDays: 45,
        applyUrl: "https://www.wescotland.co.uk",
        situations: ["starting-or-growing"],
      },
      {
        name: "Women in business research panel",
        kind: "event",
        blurb:
          "Join the panel whose answers become the evidence we put in front of government.",
        whoFor:
          "Any woman running a business in Scotland, including part-time and side businesses.",
        whatToExpect:
          "Two short surveys a year, twenty minutes each. You see the findings before they are published.",
        cost: "free",
        formats: ["online"],
        place: "Online",
        deadlineDays: null,
        applyUrl: "https://www.wescotland.co.uk",
        situations: ["starting-or-growing"],
      },
    ],
  },

  {
    name: "Firstport",
    types: ["charity", "social_enterprise"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.firstport.org.uk",
    blurb:
      "Scotland's development agency for social entrepreneurs, with early-stage funding and support.",
    mission:
      "We back people with an idea for a business that solves a social problem, at the point where nobody else will. That means small grants without a track record, support to test whether the idea works, and a route on to bigger funding once it does.",
    uniqueOffer:
      "We fund at the idea stage. Most funders want a year of accounts; we want to know what you are trying to fix.",
    audiences: ["any_woman", "young_women", "women_on_low_income"],
    serviceKinds: ["grant_or_fund", "advice_or_one_to_one", "course_or_programme"],
    accessRoutes: ["online", "by_phone"],
    costOptions: ["free", "free_to_apply"],
    coverage: "scotland_wide",
    eligibility:
      "People aged 16 and over living in Scotland with an idea for a social enterprise. You do not need to have started anything yet.",
    notEligible:
      "We cannot fund businesses with no social purpose, or organisations already trading at scale.",
    availability: "funding_dependent",
    postingFrequency: "quarterly",
    zone: "enterprise-business-growth",
    alsoZones: ["funding-finance"],
    markets: [
      "social-enterprise",
      "funding-and-investment",
      "start-and-grow-a-business",
      "community-and-third-sector",
    ],
    listings: [
      {
        name: "Start It award",
        kind: "grant_or_fund",
        blurb:
          "Up to £5,000 and a year of support to test whether your social business idea works.",
        whoFor:
          "Anyone 16 or over in Scotland with an idea at the very beginning. No trading history needed.",
        whatToExpect:
          "An online form, then a conversation with an adviser. Decisions in about eight weeks. If it is a no, you get told why.",
        cost: "free_to_apply",
        formats: ["online"],
        place: "Scotland-wide",
        deadlineDays: 26,
        applyUrl: "https://www.firstport.org.uk",
        situations: ["looking-for-funding", "starting-or-growing"],
      },
      {
        name: "Build It award",
        kind: "grant_or_fund",
        blurb:
          "Up to £25,000 for a social enterprise that has proved the idea and needs to grow.",
        whoFor:
          "Social enterprises trading for at least a year with evidence of the difference they make.",
        whatToExpect:
          "A longer application and an interview. Decisions in about twelve weeks.",
        cost: "free_to_apply",
        formats: ["online"],
        place: "Scotland-wide",
        deadlineDays: 61,
        applyUrl: "https://www.firstport.org.uk",
        situations: ["looking-for-funding", "starting-or-growing"],
      },
    ],
  },

  {
    name: "Skills Development Scotland",
    types: ["public_body"],
    place: "Glasgow · Glasgow City",
    website: "https://www.skillsdevelopmentscotland.co.uk",
    blurb:
      "Scotland's national skills body: careers advice, funded training and apprenticeships.",
    mission:
      "We help people work out what they want to do and how to get there, at any age. That is careers advice in centres across Scotland, funding for training when a qualification is what stands in the way, and apprenticeships for people who would rather learn on the job.",
    uniqueOffer:
      "Careers advice is free and available for life, not just at school. Plenty of the people who use it are in their forties and fifties.",
    audiences: [
      "any_woman",
      "women_returning_to_work",
      "women_over_50",
      "young_women",
    ],
    serviceKinds: ["advice_or_one_to_one", "course_or_programme"],
    accessRoutes: ["in_person", "online", "by_phone"],
    costOptions: ["free"],
    coverage: "scotland_wide",
    eligibility:
      "Anyone living in Scotland, at any age and any stage. No referral needed.",
    notEligible:
      "We do not find you a job. We help you work out which one and how to be ready for it.",
    availability: "year_round",
    postingFrequency: "monthly",
    zone: "career-confidence-employability",
    alsoZones: ["education-pathways"],
    markets: [
      "jobs-and-careers",
      "skills-and-retraining",
      "return-to-work",
      "digital-and-ai",
    ],
    listings: [
      {
        name: "Careers appointment for returners",
        kind: "advice_or_one_to_one",
        blurb:
          "An hour with a careers adviser, for people who have been out of work and are working out what is next.",
        whoFor:
          "Anyone who has had a break from work of six months or more, whatever the reason.",
        whatToExpect:
          "Book online or phone. One hour, in a centre or by video. You leave with a written plan and two or three things to do next.",
        cost: "free",
        formats: ["in_person", "online", "by_phone"],
        place: "Scotland-wide",
        deadlineDays: null,
        applyUrl: "https://www.myworldofwork.co.uk",
        situations: ["returning-to-work", "changing-career", "unpaid-carer"],
      },
      {
        name: "Individual Training Account",
        kind: "grant_or_fund",
        blurb:
          "Up to £200 towards a course, for people earning under the threshold or out of work.",
        whoFor:
          "People aged 16 or over, living in Scotland, earning £22,000 a year or less, or unemployed.",
        whatToExpect:
          "Apply online, pick a course from the approved list, and we pay the provider directly. You never handle the money.",
        cost: "free_to_apply",
        formats: ["online"],
        place: "Scotland-wide",
        deadlineDays: null,
        applyUrl: "https://www.myworldofwork.co.uk",
        situations: ["changing-career", "financial-difficulty", "returning-to-work"],
      },
      {
        name: "Modern Apprenticeships in digital",
        kind: "course_or_programme",
        blurb:
          "Paid work with training attached, in software, data and IT support.",
        whoFor:
          "Anyone 16 or over living in Scotland. There is no upper age limit, despite what most people assume.",
        whatToExpect:
          "Search vacancies, apply to the employer directly. You are paid from day one and the qualification is built into the job.",
        cost: "free",
        formats: ["in_person"],
        place: "Scotland-wide",
        deadlineDays: 40,
        applyUrl: "https://www.apprenticeships.scot",
        situations: ["changing-career", "recently-graduated", "returning-to-work"],
      },
    ],
  },

  {
    name: "Fife College",
    types: ["college_or_university"],
    place: "Kirkcaldy · Fife",
    website: "https://www.fife.ac.uk",
    blurb:
      "One of Scotland's largest colleges, with full-time, part-time and evening courses across Fife.",
    mission:
      "We teach people at every stage of life, from school leavers to people retraining in their fifties. Much of what we run is part-time and in the evening, because most of our students are fitting study around work or family.",
    uniqueOffer:
      "Courses run on four campuses across Fife, so nobody has to travel to Edinburgh to retrain.",
    audiences: [
      "any_woman",
      "women_returning_to_work",
      "single_parents",
      "women_over_50",
    ],
    serviceKinds: ["course_or_programme", "advice_or_one_to_one"],
    accessRoutes: ["in_person", "online", "evenings_or_weekends"],
    costOptions: ["free", "there_is_a_cost"],
    costNote: "Most part-time courses are free if you are on a low income or benefits.",
    coverage: "local_authority",
    coverageNote: "Fife, with campuses in Kirkcaldy, Glenrothes, Dunfermline and Leven.",
    eligibility:
      "Anyone 16 or over. Many courses have no entry requirements at all.",
    notEligible:
      "We cannot offer student accommodation, and full-time courses need you to be free during the day.",
    availability: "term_time",
    availabilityNote: "August to June. Applications open in January for the following August.",
    postingFrequency: "quarterly",
    zone: "education-pathways",
    alsoZones: ["career-confidence-employability"],
    markets: [
      "skills-and-retraining",
      "jobs-and-careers",
      "return-to-work",
      "digital-and-ai",
    ],
    listings: [
      {
        name: "Access to Nursing",
        kind: "course_or_programme",
        blurb:
          "A one-year course that gets you to the entry requirements for a nursing degree.",
        whoFor:
          "Adults without the Highers a nursing degree asks for. Care experience helps but is not required.",
        whatToExpect:
          "Apply online by June. Three days a week in Kirkcaldy, August to June. Most people go straight on to university afterwards.",
        cost: "free",
        formats: ["in_person"],
        place: "Kirkcaldy",
        deadlineDays: 52,
        applyUrl: "https://www.fife.ac.uk",
        situations: ["changing-career", "returning-to-work"],
      },
      {
        name: "Evening bookkeeping and payroll",
        kind: "course_or_programme",
        blurb:
          "A practical evening course in the accounts side of running a small business.",
        whoFor:
          "People running their own business, or wanting office work that pays better than the minimum.",
        whatToExpect:
          "One evening a week for twelve weeks in Glenrothes. Free if you are on a low income; £180 otherwise.",
        cost: "there_is_a_cost",
        formats: ["in_person", "evenings_or_weekends"],
        place: "Glenrothes",
        deadlineDays: 24,
        applyUrl: "https://www.fife.ac.uk",
        situations: ["starting-or-growing", "changing-career"],
      },
      {
        name: "Return to Study",
        kind: "course_or_programme",
        blurb:
          "A short course for people who have not been in a classroom for a long time.",
        whoFor:
          "Adults nervous about studying again. Aimed squarely at people who left school without much and have been told since that they are not academic.",
        whatToExpect:
          "Ten weeks, two mornings a week, in Dunfermline. No exams. It exists to get you comfortable, not to test you.",
        cost: "free",
        formats: ["in_person"],
        place: "Dunfermline",
        deadlineDays: 15,
        applyUrl: "https://www.fife.ac.uk",
        situations: ["returning-to-work", "changing-career", "recently-graduated"],
      },
      {
        name: "Introduction to AI at work",
        kind: "course_or_programme",
        blurb:
          "What the new AI tools actually do, and how to use them in an ordinary office job.",
        whoFor:
          "Anyone in work or looking for work who feels they are being left behind by this.",
        whatToExpect:
          "Six online evening sessions. Nothing technical, no coding, and every example is a real task.",
        cost: "free",
        formats: ["online", "evenings_or_weekends"],
        place: "Online",
        deadlineDays: 31,
        applyUrl: "https://www.fife.ac.uk",
        situations: ["changing-career", "returning-to-work"],
      },
    ],
  },

  {
    name: "West Lothian College",
    types: ["college_or_university"],
    place: "Livingston · West Lothian",
    website: "https://www.west-lothian.ac.uk",
    blurb:
      "West Lothian's college, with a strong line in part-time study for people already working.",
    mission:
      "We are the college for West Lothian, and most of our students are local, older than eighteen, and juggling this with something else. Our job is to make that possible rather than to pretend it is easy.",
    uniqueOffer:
      "Childcare on campus, at a subsidised rate, for students with children under five.",
    audiences: [
      "any_woman",
      "single_parents",
      "women_returning_to_work",
      "carers",
    ],
    serviceKinds: ["course_or_programme", "advice_or_one_to_one", "drop_in"],
    accessRoutes: ["in_person", "evenings_or_weekends"],
    costOptions: ["free", "there_is_a_cost"],
    coverage: "local_authority",
    coverageNote: "West Lothian, and the western edge of Edinburgh.",
    eligibility: "Anyone 16 or over living in or near West Lothian.",
    notEligible:
      "We cannot take students who need to study entirely online. Almost everything here is on campus.",
    availability: "term_time",
    availabilityNote: "August to June, with a shorter January intake for some courses.",
    postingFrequency: "quarterly",
    zone: "education-pathways",
    alsoZones: ["career-confidence-employability", "health-wellbeing"],
    markets: [
      "skills-and-retraining",
      "return-to-work",
      "jobs-and-careers",
      "workplace-culture",
    ],
    listings: [
      {
        name: "Workplace clinic drop-in",
        kind: "drop_in",
        blurb:
          "Free, confidential advice on a problem at work: a contract, a grievance, flexible working, or being pushed out.",
        whoFor:
          "Anyone working in West Lothian. You do not need to be a student here.",
        whatToExpect:
          "Turn up any Wednesday between 10am and 2pm. No appointment, no forms. Bring anything in writing that you have.",
        cost: "free",
        formats: ["in_person"],
        place: "Livingston",
        deadlineDays: null,
        applyUrl: null,
        situations: ["returning-to-work", "pregnant-or-new-parent", "unpaid-carer"],
      },
      {
        name: "Care sector fast track",
        kind: "course_or_programme",
        blurb:
          "Eight weeks to the qualification the care sector asks for, with a guaranteed interview at the end.",
        whoFor:
          "People wanting to work in care who have no formal qualification. Experience of caring for family counts.",
        whatToExpect:
          "Four days a week for eight weeks in Livingston, including two weeks on placement. Employers interview everyone who finishes.",
        cost: "free",
        formats: ["in_person"],
        place: "Livingston",
        deadlineDays: 19,
        applyUrl: "https://www.west-lothian.ac.uk",
        situations: ["unpaid-carer", "returning-to-work", "changing-career"],
      },
      {
        name: "Evening access to computing",
        kind: "course_or_programme",
        blurb:
          "The computing qualification you need for a degree, taught two evenings a week.",
        whoFor:
          "Adults wanting to move into tech without giving up a day job to do it.",
        whatToExpect:
          "Two evenings a week for a year. Free if you earn under £22,000; £340 otherwise.",
        cost: "there_is_a_cost",
        formats: ["in_person", "evenings_or_weekends"],
        place: "Livingston",
        deadlineDays: 48,
        applyUrl: "https://www.west-lothian.ac.uk",
        situations: ["changing-career", "returning-to-work"],
      },
    ],
  },

  {
    name: "Carers of West Lothian",
    types: ["charity"],
    place: "Livingston · West Lothian",
    website: "https://www.carers-westlothian.com",
    blurb:
      "Support, advice and a break for unpaid carers across West Lothian.",
    mission:
      "Around one in eight people in West Lothian is looking after somebody without being paid for it, and most of them do not call themselves carers. We exist to find those people and make sure they are not doing it alone — with advice on money and rights, someone to talk to, and time off.",
    uniqueOffer:
      "We arrange replacement care so you can actually attend the things we run. Nothing else works without that.",
    audiences: ["carers", "women_over_50", "women_on_low_income", "any_woman"],
    serviceKinds: ["advice_or_one_to_one", "drop_in", "event"],
    accessRoutes: ["in_person", "by_phone", "online"],
    costOptions: ["free"],
    coverage: "local_authority",
    coverageNote: "West Lothian.",
    eligibility:
      "Anyone 16 or over caring unpaid for a friend, relative or neighbour in West Lothian. It does not matter how many hours.",
    notEligible:
      "We cannot provide the care itself, and we cannot help with a paid caring job. Those are different services.",
    availability: "year_round",
    postingFrequency: "monthly",
    zone: "health-wellbeing",
    alsoZones: ["womens-voice-leadership-civic-influence", "career-confidence-employability"],
    markets: [
      "carers",
      "health-and-wellbeing",
      "financial-wellbeing",
      "return-to-work",
      "community-and-third-sector",
    ],
    listings: [
      {
        name: "Carer's benefits check",
        kind: "advice_or_one_to_one",
        blurb:
          "An hour going through everything you might be entitled to and are not claiming.",
        whoFor:
          "Unpaid carers in West Lothian. Most people who do this find something they were missing.",
        whatToExpect:
          "Phone or email to book. An hour at our office or over the phone. Bring recent letters if you have them; if not, we start from scratch.",
        cost: "free",
        formats: ["in_person", "by_phone"],
        place: "Livingston",
        deadlineDays: null,
        applyUrl: null,
        situations: ["unpaid-carer", "financial-difficulty"],
      },
      {
        name: "Tuesday carers' drop-in",
        kind: "drop_in",
        blurb:
          "Coffee, company, and someone who knows the system, every Tuesday morning.",
        whoFor:
          "Any unpaid carer in West Lothian. Bring the person you care for if you cannot leave them.",
        whatToExpect:
          "Turn up between 10am and 12pm. No booking. Some weeks there is a speaker; most weeks there is not.",
        cost: "free",
        formats: ["in_person"],
        place: "Livingston",
        deadlineDays: null,
        applyUrl: null,
        situations: ["unpaid-carer", "looking-after-my-health"],
      },
      {
        name: "Back to work for carers",
        kind: "course_or_programme",
        blurb:
          "Six sessions on getting back into paid work around caring, with employers who understand it.",
        whoFor:
          "Carers in West Lothian thinking about paid work, including people who have not worked for years.",
        whatToExpect:
          "Six weekly sessions. We arrange replacement care for the hours you are with us. Two local employers come to the last one.",
        cost: "free",
        formats: ["in_person"],
        place: "Livingston",
        deadlineDays: 28,
        applyUrl: null,
        situations: ["unpaid-carer", "returning-to-work"],
      },
    ],
  },

  {
    name: "Engender",
    types: ["charity"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.engender.org.uk",
    blurb:
      "Scotland's feminist policy and advocacy organisation, working on women's economic equality.",
    mission:
      "We work on the structural reasons women in Scotland have less money, less power and less time than men. That means research, policy work and putting evidence in front of the Scottish Parliament — not direct services, but the work that changes what services exist.",
    uniqueOffer:
      "Our research is what a lot of Scottish equality policy is built on, and all of it is free to read.",
    audiences: ["any_woman"],
    serviceKinds: ["event", "advice_or_one_to_one"],
    accessRoutes: ["online", "in_person"],
    costOptions: ["free"],
    coverage: "scotland_wide",
    eligibility:
      "Our research and briefings are open to anyone. Training is aimed at organisations rather than individuals.",
    notEligible:
      "We cannot give individual legal or benefits advice, and we are not a crisis service.",
    availability: "year_round",
    postingFrequency: "few_times_a_year",
    zone: "womens-voice-leadership-civic-influence",
    alsoZones: ["career-confidence-employability"],
    markets: [
      "policy-and-advocacy",
      "research-and-innovation",
      "workplace-culture",
      "leadership-and-networks",
    ],
    listings: [
      {
        name: "Gender Matters roadshow",
        kind: "event",
        blurb:
          "A free half-day on what the evidence says about women's economic position in Scotland, and what to do with it.",
        whoFor:
          "Anyone working in policy, services or community organising. No background in the subject needed.",
        whatToExpect:
          "Register online. Half a day in person, lunch provided. Slides and the underlying research go out afterwards.",
        cost: "free",
        formats: ["in_person"],
        place: "Edinburgh",
        deadlineDays: 38,
        applyUrl: "https://www.engender.org.uk",
        situations: ["recently-graduated", "changing-career"],
      },
    ],
  },

  {
    name: "DataKirk",
    types: ["charity", "social_enterprise"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.thedatakirk.org.uk",
    blurb:
      "Data and digital skills for people who are under-represented in tech, with a focus on Black and minority ethnic communities.",
    mission:
      "The data economy is one of the best-paid parts of the Scottish labour market and one of the least diverse. We teach data skills to the people that industry does not reach, and then introduce them to employers who have said they want to change that.",
    uniqueOffer:
      "Every programme ends with employers in the room, not a certificate in the post.",
    audiences: [
      "refugees_and_new_scots",
      "young_women",
      "women_on_low_income",
      "any_woman",
    ],
    serviceKinds: ["course_or_programme", "mentoring", "event"],
    accessRoutes: ["online", "in_person", "evenings_or_weekends"],
    costOptions: ["free"],
    coverage: "several_areas",
    coverageNote: "Edinburgh, Glasgow and online across Scotland.",
    eligibility:
      "Adults from backgrounds under-represented in tech. No qualifications and no coding experience needed.",
    notEligible:
      "We cannot sponsor visas, and we are not able to fund equipment or childcare.",
    availability: "funding_dependent",
    postingFrequency: "quarterly",
    zone: "education-pathways",
    alsoZones: ["career-confidence-employability", "enterprise-business-growth"],
    markets: [
      "digital-and-ai",
      "skills-and-retraining",
      "jobs-and-careers",
      "new-scots-and-inclusion",
    ],
    listings: [
      {
        name: "Data analytics bootcamp",
        kind: "course_or_programme",
        blurb:
          "Twelve weeks of evening classes in the tools a junior data analyst actually uses.",
        whoFor:
          "Adults from backgrounds under-represented in tech. No maths beyond school level and no coding experience.",
        whatToExpect:
          "Apply with a short form; no CV. Two evenings a week for twelve weeks, online. Employers run mock interviews in the final fortnight.",
        cost: "free",
        formats: ["online", "evenings_or_weekends"],
        place: "Online",
        deadlineDays: 22,
        applyUrl: "https://www.thedatakirk.org.uk",
        situations: ["changing-career", "new-to-scotland", "recently-graduated"],
      },
      {
        name: "Women in data mentoring",
        kind: "mentoring",
        blurb:
          "Four months with a woman already working in data in Scotland.",
        whoFor:
          "Women trying to get into data or move up in it, including career changers.",
        whatToExpect:
          "Fortnightly hour-long sessions, online. We match on sector where we can and on stage where we cannot.",
        cost: "free",
        formats: ["online"],
        place: "Scotland-wide",
        deadlineDays: 33,
        applyUrl: "https://www.thedatakirk.org.uk",
        situations: ["changing-career", "recently-graduated", "returning-to-work"],
      },
    ],
  },

  {
    name: "Digital Sistas",
    types: ["social_enterprise", "network_or_group"],
    place: "Glasgow · Glasgow City",
    website: "https://www.digitalsistas.co.uk",
    blurb:
      "Digital skills, confidence and community for Black and minority ethnic women in Scotland.",
    mission:
      "We started because the digital skills courses on offer were not reaching the women we knew. We run them differently — in community venues, at times that work around children, taught by women who look like the people in the room.",
    uniqueOffer:
      "Everything runs in community venues in the places women already are, not in a university building across the city.",
    audiences: [
      "refugees_and_new_scots",
      "women_on_low_income",
      "single_parents",
      "any_woman",
    ],
    serviceKinds: ["course_or_programme", "drop_in", "event"],
    accessRoutes: ["in_person", "online"],
    costOptions: ["free"],
    coverage: "several_areas",
    coverageNote: "Glasgow and North Lanarkshire.",
    eligibility:
      "Black and minority ethnic women aged 18 and over in the Glasgow area. Every level of experience, including none.",
    notEligible:
      "We do not run advanced or professional-level courses. Once you are past the basics we will point you at who does.",
    availability: "funding_dependent",
    postingFrequency: "monthly",
    zone: "career-confidence-employability",
    alsoZones: ["education-pathways", "womens-voice-leadership-civic-influence"],
    markets: [
      "digital-and-ai",
      "skills-and-retraining",
      "new-scots-and-inclusion",
      "return-to-work",
      "leadership-and-networks",
    ],
    listings: [
      {
        name: "Digital basics for beginners",
        kind: "course_or_programme",
        blurb:
          "Six weeks covering email, forms, online banking and staying safe, at whatever pace suits.",
        whoFor:
          "Women who find everyday digital things difficult, including anyone who has never used a computer.",
        whatToExpect:
          "One morning a week for six weeks in a community centre in Govanhill. Laptops provided. Children welcome.",
        cost: "free",
        formats: ["in_person"],
        place: "Glasgow",
        deadlineDays: 12,
        applyUrl: null,
        situations: ["new-to-scotland", "returning-to-work", "financial-difficulty"],
      },
      {
        name: "Saturday tech drop-in",
        kind: "drop_in",
        blurb:
          "Bring the thing that is not working and somebody will sit with you until it does.",
        whoFor: "Any woman. No booking and nothing to prove.",
        whatToExpect:
          "First Saturday of the month, 11am to 2pm, Govanhill. Bring your phone or laptop. Tea and a crèche.",
        cost: "free",
        formats: ["in_person", "evenings_or_weekends"],
        place: "Glasgow",
        deadlineDays: null,
        applyUrl: null,
        situations: ["new-to-scotland", "returning-to-work"],
      },
      {
        name: "Getting started with AI tools",
        kind: "course_or_programme",
        blurb:
          "What AI actually is, what it is useful for, and what to be careful about.",
        whoFor:
          "Women who keep hearing about this and want to understand it without being made to feel stupid.",
        whatToExpect:
          "Four sessions, online, one evening a week. No jargon and every example is something you might actually do.",
        cost: "free",
        formats: ["online", "evenings_or_weekends"],
        place: "Online",
        deadlineDays: 25,
        applyUrl: null,
        situations: ["changing-career", "returning-to-work"],
      },
    ],
  },

  {
    name: "Scottish Women's Convention",
    types: ["charity"],
    place: "Glasgow · Glasgow City",
    website: "https://www.scottishwomensconvention.org",
    blurb:
      "Taking women's views to the people who make decisions in Scotland.",
    mission:
      "We hold events across Scotland where women say what is going wrong, and we take that to Parliament and to government. The point is that policy affecting women should be made by people who have heard from them first.",
    uniqueOffer:
      "We go to the Highlands, the Borders and the islands, not just the central belt.",
    audiences: ["any_woman", "women_over_50", "carers"],
    serviceKinds: ["event", "drop_in"],
    accessRoutes: ["in_person", "online"],
    costOptions: ["free"],
    coverage: "scotland_wide",
    eligibility: "Any woman living in Scotland. No membership and no fee.",
    notEligible:
      "We are not a service and we cannot help with an individual case. We take the pattern, not the file.",
    availability: "year_round",
    postingFrequency: "monthly",
    zone: "womens-voice-leadership-civic-influence",
    alsoZones: ["health-wellbeing"],
    markets: ["policy-and-advocacy", "leadership-and-networks", "community-and-third-sector"],
    listings: [
      {
        name: "Regional roadshow: Highlands",
        kind: "event",
        blurb:
          "A day in Inverness for women to say what is not working where they live.",
        whoFor:
          "Any woman in the Highlands and Islands. Travel costs covered.",
        whatToExpect:
          "Register online or phone. A day in Inverness, lunch provided, childcare on request. What is said goes into a report to the Scottish Parliament.",
        cost: "free",
        formats: ["in_person"],
        place: "Inverness",
        deadlineDays: 41,
        applyUrl: "https://www.scottishwomensconvention.org",
        situations: ["rural-or-island"],
      },
      {
        name: "Online policy sessions",
        kind: "event",
        blurb:
          "Monthly evening sessions on one thing Parliament is deciding and how to have a say in it.",
        whoFor:
          "Any woman in Scotland, including anyone who has never done anything like this.",
        whatToExpect:
          "An hour online, first Thursday of the month. Nothing to prepare and no need to speak.",
        cost: "free",
        formats: ["online", "evenings_or_weekends"],
        place: "Online",
        deadlineDays: null,
        applyUrl: "https://www.scottishwomensconvention.org",
        situations: ["rural-or-island", "unpaid-carer"],
      },
    ],
  },

  {
    name: "Scottish Enterprise",
    types: ["public_body"],
    place: "Glasgow · Glasgow City",
    website: "https://www.scottish-enterprise.com",
    blurb:
      "Scotland's national economic development agency, working with companies that want to grow.",
    mission:
      "We work with Scottish companies with the ambition and the potential to grow significantly — into new markets, new products, or the investment needed to do either. Our support is hands-on and is aimed at businesses past the start-up stage.",
    uniqueOffer:
      "We can put a specialist adviser alongside a company for months at a time, which nobody else in Scotland does at no cost.",
    audiences: ["any_woman"],
    serviceKinds: ["advice_or_one_to_one", "grant_or_fund", "event"],
    accessRoutes: ["in_person", "online"],
    costOptions: ["free", "free_to_apply"],
    coverage: "scotland_wide",
    eligibility:
      "Scottish companies with growth potential, usually already trading with employees. Business Gateway covers earlier stages.",
    notEligible:
      "We are not the right place for a pre-start idea or a sole trader with no plans to take anyone on.",
    availability: "year_round",
    postingFrequency: "quarterly",
    zone: "enterprise-business-growth",
    alsoZones: ["funding-finance", "business-infrastructure-professional-services"],
    markets: [
      "start-and-grow-a-business",
      "funding-and-investment",
      "research-and-innovation",
      "marketplace-and-procurement",
      "digital-and-ai",
    ],
    listings: [
      {
        name: "Unlocking Ambition for women founders",
        kind: "course_or_programme",
        blurb:
          "A year of intensive support for women running businesses with serious growth ambitions.",
        whoFor:
          "Women founders trading for two years or more, with a business that could realistically double.",
        whatToExpect:
          "A written application and an interview. Successful applicants get an adviser, a peer group and a small grant.",
        cost: "free_to_apply",
        formats: ["in_person", "online"],
        place: "Scotland-wide",
        deadlineDays: 56,
        applyUrl: "https://www.scottish-enterprise.com",
        situations: ["starting-or-growing", "looking-for-funding"],
      },
      {
        name: "Investor readiness workshops",
        kind: "course_or_programme",
        blurb:
          "Three sessions on what an investor is looking for and how to be ready before you ask.",
        whoFor:
          "Founders thinking about raising money in the next year or two.",
        whatToExpect:
          "Three half-days, online. You leave with a deck somebody has actually critiqued.",
        cost: "free",
        formats: ["online"],
        place: "Online",
        deadlineDays: 18,
        applyUrl: "https://www.scottish-enterprise.com",
        situations: ["looking-for-funding", "starting-or-growing"],
      },
    ],
  },

  {
    name: "Public Health Scotland",
    types: ["public_body"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.publichealthscotland.scot",
    blurb:
      "Scotland's national public health body, working on the causes of poor health rather than treating it.",
    mission:
      "Most of what determines how healthy somebody is happens outside a hospital: money, housing, work and who they know. We gather the evidence on that and work with local partners to act on it.",
    uniqueOffer:
      "Our data on health inequality in Scotland is published openly and is what local services plan against.",
    audiences: ["any_woman", "women_on_low_income", "carers"],
    serviceKinds: ["event", "advice_or_one_to_one"],
    accessRoutes: ["online"],
    costOptions: ["free"],
    coverage: "scotland_wide",
    eligibility:
      "Our published work is open to anyone. Programmes are usually run with organisations rather than individuals.",
    notEligible:
      "We are not a clinical service. For a health problem, start with your GP or NHS 24 on 111.",
    availability: "year_round",
    postingFrequency: "few_times_a_year",
    zone: "health-wellbeing",
    alsoZones: ["womens-voice-leadership-civic-influence"],
    markets: [
      "health-and-wellbeing",
      "womens-health",
      "policy-and-advocacy",
      "research-and-innovation",
    ],
    listings: [
      {
        name: "Women's health evidence briefings",
        kind: "event",
        blurb:
          "Quarterly online briefings on what the data says about women's health in Scotland.",
        whoFor:
          "Anyone working in health, care or community services, and anyone else who wants to know.",
        whatToExpect:
          "An hour online, quarterly. Slides and the underlying data published afterwards.",
        cost: "free",
        formats: ["online"],
        place: "Online",
        deadlineDays: null,
        applyUrl: "https://www.publichealthscotland.scot",
        situations: ["looking-after-my-health"],
      },
    ],
  },

  {
    name: "Adelphe Connect",
    types: ["network_or_group", "social_enterprise"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.adelpheconnect.com",
    blurb:
      "A network connecting minority ethnic women in Scotland to work, enterprise and each other.",
    mission:
      "Networks are how most opportunities move, and the women we work with are outside the ones that matter in Scotland. We build the connections deliberately: to employers, to funders, and to other women a step or two further along.",
    uniqueOffer:
      "Introductions are made by a person who knows both sides, rather than left to a directory.",
    audiences: [
      "refugees_and_new_scots",
      "women_returning_to_work",
      "young_women",
      "any_woman",
    ],
    serviceKinds: ["event", "mentoring", "advice_or_one_to_one"],
    accessRoutes: ["in_person", "online", "evenings_or_weekends"],
    costOptions: ["free"],
    coverage: "several_areas",
    coverageNote: "Edinburgh, Glasgow and Dundee.",
    eligibility:
      "Minority ethnic women aged 18 and over living in Scotland.",
    notEligible:
      "We cannot give immigration advice. We can put you in touch with people who can.",
    availability: "year_round",
    postingFrequency: "monthly",
    zone: "womens-voice-leadership-civic-influence",
    alsoZones: ["career-confidence-employability", "enterprise-business-growth"],
    markets: [
      "leadership-and-networks",
      "new-scots-and-inclusion",
      "jobs-and-careers",
      "start-and-grow-a-business",
      "media-and-visibility",
    ],
    listings: [
      {
        name: "Monthly connect evening",
        kind: "event",
        blurb:
          "An evening with women working in the sector you are trying to get into.",
        whoFor:
          "Minority ethnic women in Edinburgh, at any stage including students.",
        whatToExpect:
          "Last Thursday of the month, 6pm, city centre. Food provided. Everybody is introduced to at least two people by name.",
        cost: "free",
        formats: ["in_person", "evenings_or_weekends"],
        place: "Edinburgh",
        deadlineDays: null,
        applyUrl: "https://www.adelpheconnect.com",
        situations: ["new-to-scotland", "recently-graduated", "changing-career"],
      },
      {
        name: "First job in Scotland",
        kind: "course_or_programme",
        blurb:
          "How hiring works here, for people whose qualifications and experience are from elsewhere.",
        whoFor:
          "Women who have moved to Scotland and are finding that experience abroad is not being recognised.",
        whatToExpect:
          "Four weekly sessions, online or in Edinburgh. Covers CVs, how references work here, and what to do about a qualification nobody has heard of.",
        cost: "free",
        formats: ["online", "in_person"],
        place: "Edinburgh",
        deadlineDays: 29,
        applyUrl: "https://www.adelpheconnect.com",
        situations: ["new-to-scotland", "returning-to-work", "changing-career"],
      },
    ],
  },

  {
    name: "Social Enterprise Scotland",
    types: ["charity", "network_or_group"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.socialenterprise.scot",
    blurb:
      "The membership body for Scotland's social enterprises.",
    mission:
      "Scotland has thousands of businesses trading for a social purpose, and they are stronger together than apart. We represent them to government, connect them to each other, and help people who want to start one work out how.",
    uniqueOffer:
      "Membership is priced so the smallest social enterprises can afford it, and much of what we run is open to non-members.",
    audiences: ["any_woman", "women_on_low_income"],
    serviceKinds: ["event", "advice_or_one_to_one", "course_or_programme"],
    accessRoutes: ["online", "in_person"],
    costOptions: ["free", "there_is_a_cost"],
    costNote: "Membership from £50 a year. Most events are free to attend.",
    coverage: "scotland_wide",
    eligibility:
      "Anyone running or starting a social enterprise in Scotland, and anyone curious about it.",
    notEligible: "We are not a funder and cannot make grants.",
    availability: "year_round",
    postingFrequency: "quarterly",
    zone: "enterprise-business-growth",
    alsoZones: ["womens-voice-leadership-civic-influence"],
    markets: [
      "social-enterprise",
      "community-and-third-sector",
      "start-and-grow-a-business",
      "policy-and-advocacy",
    ],
    listings: [
      {
        name: "Is a social enterprise right for me?",
        kind: "event",
        blurb:
          "A free online session on what a social enterprise is, what it is not, and whether it fits what you want to do.",
        whoFor:
          "Anyone considering starting something with a social purpose. No prior knowledge assumed.",
        whatToExpect:
          "Ninety minutes online, monthly. Plenty of time for questions and no sales pitch at the end.",
        cost: "free",
        formats: ["online"],
        place: "Online",
        deadlineDays: 14,
        applyUrl: "https://www.socialenterprise.scot",
        situations: ["starting-or-growing", "changing-career"],
      },
    ],
  },

  {
    name: "Dr Monika Gostić Nutrition",
    types: ["business"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.monikagostic.com",
    blurb:
      "Evidence-based nutrition support, with a focus on women's health through midlife.",
    mission:
      "Most nutrition advice aimed at women is either a diet or a supplement. We work from the research on what actually changes how women feel through perimenopause and beyond, and we work with what somebody can realistically do.",
    uniqueOffer:
      "Everything is grounded in published research, with the papers shared, so you can see where the advice comes from.",
    audiences: ["women_over_50", "any_woman", "carers"],
    serviceKinds: ["advice_or_one_to_one", "course_or_programme"],
    accessRoutes: ["online", "in_person"],
    costOptions: ["there_is_a_cost"],
    costNote: "£70 for the first consultation, £45 after. Reduced rates for anyone on benefits — just ask.",
    coverage: "one_area",
    coverageNote: "Edinburgh, and online across Scotland.",
    eligibility:
      "Adults wanting nutrition support, particularly around perimenopause and menopause.",
    notEligible:
      "We cannot treat eating disorders or replace medical care. If that is what you need, your GP is the right first step.",
    availability: "year_round",
    postingFrequency: "few_times_a_year",
    zone: "health-wellbeing",
    alsoZones: ["business-infrastructure-professional-services"],
    markets: ["womens-health", "health-and-wellbeing", "workplace-culture"],
    listings: [
      {
        name: "Menopause and nutrition workshop",
        kind: "event",
        blurb:
          "Two hours on what the evidence does and does not say about eating through menopause.",
        whoFor:
          "Women in or approaching perimenopause. No previous interest in nutrition required.",
        whatToExpect:
          "Book online. Two hours in central Edinburgh, £25, with notes and references to take away.",
        cost: "there_is_a_cost",
        formats: ["in_person"],
        place: "Edinburgh",
        deadlineDays: 21,
        applyUrl: "https://www.monikagostic.com",
        situations: ["looking-after-my-health"],
      },
    ],
  },

  {
    name: "West Lothian Chamber of Commerce",
    types: ["network_or_group", "business"],
    place: "Livingston · West Lothian",
    website: "https://www.wlchamber.com",
    blurb:
      "The business network for West Lothian, with events, training and a route to local procurement.",
    mission:
      "We connect businesses in West Lothian to each other and to the contracts, people and advice they need. Much of that is unglamorous — an introduction, a room, a conversation with someone who has done it before.",
    uniqueOffer:
      "We know who buys what locally, and we make the introduction rather than publishing a list.",
    audiences: ["any_woman", "women_returning_to_work"],
    serviceKinds: ["event", "course_or_programme", "advice_or_one_to_one"],
    accessRoutes: ["in_person", "online"],
    costOptions: ["free", "there_is_a_cost"],
    costNote: "Membership from £180 a year. Several events each quarter are free to non-members.",
    coverage: "local_authority",
    coverageNote: "West Lothian.",
    eligibility: "Any business based in or trading into West Lothian.",
    notEligible: "We are not able to help with a business idea that has not started yet — Business Gateway is the right first stop.",
    availability: "year_round",
    postingFrequency: "monthly",
    zone: "enterprise-business-growth",
    alsoZones: ["visibility-marketplace-opportunities", "business-infrastructure-professional-services"],
    markets: [
      "marketplace-and-procurement",
      "leadership-and-networks",
      "business-infrastructure",
      "start-and-grow-a-business",
    ],
    listings: [
      {
        name: "Women in business breakfast",
        kind: "event",
        blurb:
          "A monthly breakfast for women running businesses in West Lothian.",
        whoFor:
          "Women running a business of any size in West Lothian, members and non-members.",
        whatToExpect:
          "Third Wednesday, 8am to 9.30am in Livingston. £12 including breakfast, free the first time.",
        cost: "there_is_a_cost",
        formats: ["in_person"],
        place: "Livingston",
        deadlineDays: null,
        applyUrl: "https://www.wlchamber.com",
        situations: ["starting-or-growing"],
      },
      {
        name: "Selling to the public sector",
        kind: "course_or_programme",
        blurb:
          "How public sector tendering works and how a small business can realistically win one.",
        whoFor:
          "Small businesses in West Lothian that have never tendered and assume it is not for them.",
        whatToExpect:
          "Two half-day sessions in Livingston. Free to members, £90 otherwise. You leave having drafted a real response.",
        cost: "there_is_a_cost",
        formats: ["in_person"],
        place: "Livingston",
        deadlineDays: 37,
        applyUrl: "https://www.wlchamber.com",
        situations: ["starting-or-growing"],
      },
    ],
  },

  {
    name: "Jambo Radio Scotland",
    types: ["social_enterprise", "network_or_group"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.jamboradio.org",
    blurb:
      "Community radio by and for Scotland's African, Caribbean and minority ethnic communities.",
    mission:
      "We broadcast in the languages our communities actually speak, about the things that affect them. Alongside that we train people to make radio, because a community talked about is not the same as a community talking.",
    uniqueOffer:
      "Programmes in Swahili, Shona, Arabic and English, made by people from those communities.",
    audiences: ["refugees_and_new_scots", "any_woman", "young_women"],
    serviceKinds: ["course_or_programme", "event", "drop_in"],
    accessRoutes: ["in_person", "online"],
    costOptions: ["free"],
    coverage: "several_areas",
    coverageNote: "Edinburgh and Glasgow, and online everywhere.",
    eligibility:
      "Open to anyone, with training aimed at people from minority ethnic communities in Scotland.",
    notEligible:
      "We are a broadcaster, not an advice service, and cannot help with an individual immigration or housing case.",
    availability: "year_round",
    postingFrequency: "monthly",
    zone: "visibility-marketplace-opportunities",
    alsoZones: ["womens-voice-leadership-civic-influence", "career-confidence-employability"],
    markets: [
      "media-and-visibility",
      "new-scots-and-inclusion",
      "community-and-third-sector",
      "skills-and-retraining",
    ],
    listings: [
      {
        name: "Women's radio training",
        kind: "course_or_programme",
        blurb:
          "Eight weeks learning to plan, record and present a radio programme.",
        whoFor:
          "Women from minority ethnic communities in Edinburgh. No experience and no equipment needed.",
        whatToExpect:
          "One evening a week for eight weeks in Leith. You make a real programme, and it goes out.",
        cost: "free",
        formats: ["in_person", "evenings_or_weekends"],
        place: "Edinburgh",
        deadlineDays: 27,
        applyUrl: "https://www.jamboradio.org",
        situations: ["new-to-scotland", "recently-graduated", "changing-career"],
      },
    ],
  },

  {
    name: "AccelerateHER",
    types: ["network_or_group", "business"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.accelerateher.co",
    blurb:
      "Connecting women founders in Scotland to investors, advisers and each other.",
    mission:
      "Women-led companies raise a fraction of the venture funding men do, and the reasons are structural rather than about the businesses. We work on the parts we can change: who founders know, who sees their deck, and how ready they are when the meeting comes.",
    uniqueOffer:
      "Our awards put founders in front of investors who have actually written cheques in Scotland.",
    audiences: ["any_woman", "young_women"],
    serviceKinds: ["event", "mentoring", "course_or_programme"],
    accessRoutes: ["in_person", "online"],
    costOptions: ["free", "free_to_apply"],
    coverage: "scotland_wide",
    eligibility:
      "Women founders of scalable businesses in Scotland, usually with a product already in the market.",
    notEligible:
      "We are not the right fit for lifestyle businesses or sole traders with no plans to raise investment.",
    availability: "year_round",
    postingFrequency: "quarterly",
    zone: "funding-finance",
    alsoZones: ["enterprise-business-growth", "womens-voice-leadership-civic-influence"],
    markets: [
      "funding-and-investment",
      "leadership-and-networks",
      "start-and-grow-a-business",
      "digital-and-ai",
    ],
    listings: [
      {
        name: "AccelerateHER Awards",
        kind: "grant_or_fund",
        blurb:
          "An award, and a place in front of investors, for women founders in Scotland.",
        whoFor:
          "Women founders of technology or high-growth businesses based in Scotland.",
        whatToExpect:
          "Apply online with a short deck. Shortlisted founders pitch in person. Winners get introductions, not just a photograph.",
        cost: "free_to_apply",
        formats: ["in_person", "online"],
        place: "Scotland-wide",
        deadlineDays: 44,
        applyUrl: "https://www.accelerateher.co",
        situations: ["looking-for-funding", "starting-or-growing"],
      },
    ],
  },

  {
    name: "Hatch Enterprise",
    types: ["charity", "social_enterprise"],
    place: "Glasgow · Glasgow City",
    website: "https://hatchenterprise.org",
    blurb:
      "Business support for entrepreneurs from under-represented backgrounds.",
    mission:
      "Who gets to start a business in the UK is still shaped by who has savings, contacts and a safety net. We run free programmes for founders who have none of those, and we stay with them past the first year.",
    uniqueOffer:
      "Our programmes are free and come with a grant, so somebody without savings is not choosing between the course and the rent.",
    audiences: [
      "women_on_low_income",
      "refugees_and_new_scots",
      "single_parents",
      "any_woman",
    ],
    serviceKinds: ["course_or_programme", "mentoring", "grant_or_fund"],
    accessRoutes: ["online", "in_person", "evenings_or_weekends"],
    costOptions: ["free"],
    coverage: "several_areas",
    coverageNote: "Glasgow, and online across Scotland.",
    eligibility:
      "Founders from under-represented backgrounds: women, people of colour, disabled people, and people on low incomes.",
    notEligible:
      "We cannot support businesses already turning over more than £250,000.",
    availability: "funding_dependent",
    postingFrequency: "quarterly",
    zone: "enterprise-business-growth",
    alsoZones: ["funding-finance", "career-confidence-employability"],
    markets: [
      "start-and-grow-a-business",
      "funding-and-investment",
      "skills-and-retraining",
      "leadership-and-networks",
    ],
    listings: [
      {
        name: "Launchpad for women founders",
        kind: "course_or_programme",
        blurb:
          "Ten weeks from idea to first customer, with a £500 grant to cover the costs of trying.",
        whoFor:
          "Women in Glasgow on a low income with a business idea. No savings and no experience needed.",
        whatToExpect:
          "Apply with a short form and a phone call. One evening a week for ten weeks, online. The grant is paid at week three.",
        cost: "free",
        formats: ["online", "evenings_or_weekends"],
        place: "Glasgow",
        deadlineDays: 23,
        applyUrl: "https://hatchenterprise.org",
        situations: [
          "starting-or-growing",
          "financial-difficulty",
              ],
      },
      {
        name: "Growth programme",
        kind: "mentoring",
        blurb:
          "Six months of one-to-one support for founders past their first year.",
        whoFor:
          "Founders from under-represented backgrounds, trading for a year or more.",
        whatToExpect:
          "Monthly sessions with an adviser plus a peer group of six. Online, with two in-person days.",
        cost: "free",
        formats: ["online"],
        place: "Scotland-wide",
        deadlineDays: 39,
        applyUrl: "https://hatchenterprise.org",
        situations: ["starting-or-growing"],
      },
    ],
  },

  {
    name: "Scottish National Investment Bank",
    types: ["public_body"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.thebank.scot",
    blurb:
      "Scotland's development investment bank, investing patient capital in businesses and projects.",
    mission:
      "We invest for the long term in businesses and projects that support Scotland's transition to net zero, reduce inequality and build a fairer economy. Patient capital means we are not looking for an exit in three years.",
    uniqueOffer:
      "We can hold an investment for ten years or more, which commercial funds cannot.",
    audiences: ["any_woman"],
    serviceKinds: ["grant_or_fund"],
    accessRoutes: ["online"],
    costOptions: ["free_to_apply"],
    coverage: "scotland_wide",
    eligibility:
      "Businesses and projects in Scotland seeking investment from around £1 million upwards.",
    notEligible:
      "We do not make small grants or lend to start-ups. Firstport and Business Gateway are the right places for that.",
    availability: "year_round",
    postingFrequency: "when_funding_allows",
    zone: "funding-finance",
    alsoZones: ["enterprise-business-growth"],
    markets: ["funding-and-investment", "research-and-innovation", "social-enterprise"],
    listings: [
      {
        name: "Investment enquiry",
        kind: "grant_or_fund",
        blurb:
          "Open enquiries for businesses seeking investment of £1 million or more.",
        whoFor:
          "Established Scottish businesses and projects that fit one of the Bank's three missions.",
        whatToExpect:
          "An online enquiry form. If it is a fit, someone gets in touch within a fortnight. Diligence takes months, not weeks.",
        cost: "free_to_apply",
        formats: ["online"],
        place: "Scotland-wide",
        deadlineDays: null,
        applyUrl: "https://www.thebank.scot",
        situations: ["looking-for-funding", "starting-or-growing"],
      },
    ],
  },
];

/**
 * Three listings that were already there, given real content.
 *
 * Matched by id rather than name, because their names are part of what was
 * wrong with them: one of them is spelled "Retgurn to work".
 */
export const LISTING_REWRITES = [
  {
    id: "322cdffb-d0fd-44c2-9651-05579412ab4b",
    name: "Money coaching before you start work",
    kind: "advice_or_one_to_one",
    blurb:
      "Two sessions on what changes financially when you start a job, before it catches you out.",
    whoFor:
      "Women in Edinburgh about to start work after time on benefits. The transition is where people get into trouble.",
    whatToExpect:
      "Two hours in total, split over a fortnight. We go through what stops, what tapers, and what the first month actually looks like.",
    cost: "free",
    formats: ["in_person", "by_phone"],
    place: "Edinburgh",
    deadlineDays: null,
    applyUrl: null,
    situations: ["returning-to-work", "financial-difficulty"],
  },
  {
    id: "b7fbb40c-6fd4-4af5-b2db-6ca75e3864ef",
    name: "Confidence group for returners",
    kind: "course_or_programme",
    blurb:
      "A small group for women going back to work after a long break, meeting weekly for six weeks.",
    whoFor:
      "Women in Edinburgh who have been out of work for two years or more. Eight people, no more.",
    whatToExpect:
      "Thursday mornings for six weeks. Half of it is practical — CVs, interviews — and half is being in a room with people in the same position.",
    cost: "free",
    formats: ["in_person"],
    place: "Edinburgh",
    deadlineDays: 17,
    applyUrl: "https://smartworks.org.uk",
    situations: ["returning-to-work", "unpaid-carer", "pregnant-or-new-parent"],
  },
  {
    id: "774a34e2-868c-4a75-9a64-fb47f96b015c",
    name: "Return to work clinic",
    kind: "drop_in",
    blurb:
      "A monthly drop-in for women thinking about going back to work and not sure where to start.",
    whoFor:
      "Any woman in Edinburgh who has been out of paid work, for any reason and any length of time.",
    whatToExpect:
      "First Tuesday of the month, 10am to 1pm. No appointment. Bring a CV if you have one; most people do not.",
    cost: "free",
    formats: ["in_person"],
    place: "Edinburgh",
    deadlineDays: null,
    applyUrl: null,
    situations: ["returning-to-work", "changing-career", "pregnant-or-new-parent"],
  },
];

/**
 * The organisations that already exist, given something realistic to say.
 *
 * Matched by their current name. Membership is untouched, so whoever is
 * signed in as one still is — they just find a filled-in profile behind it.
 */
export const REWRITES = [
  {
    match: "The Holistic Wellbeing Summit",
    name: "The Holistic Wellbeing Summit",
    types: ["charity", "network_or_group"],
    place: "Kirkcaldy · Fife",
    website: "https://www.theholisticwellbeingsummit.org",
    blurb:
      "The convening organisation behind HWS Path Grid, working on women's participation across Scotland.",
    mission:
      "We bring together the organisations that work with women in Scotland, so a woman does not have to know which one she needs before she can be helped. The Path Grid is the platform side of that; the convening is the rest.",
    uniqueOffer:
      "We are the only organisation convening across all eight Access Zones rather than working inside one.",
    audiences: ["any_woman", "women_returning_to_work", "carers"],
    serviceKinds: ["event", "advice_or_one_to_one"],
    accessRoutes: ["online", "in_person"],
    costOptions: ["free"],
    coverage: "scotland_wide",
    eligibility: "Any woman in Scotland, and any organisation working with women here.",
    notEligible:
      "We are not a direct service. We connect you to the organisations that are.",
    availability: "year_round",
    postingFrequency: "quarterly",
    zone: "womens-voice-leadership-civic-influence",
    alsoZones: ["career-confidence-employability", "health-wellbeing"],
    markets: ["leadership-and-networks", "policy-and-advocacy", "community-and-third-sector"],
  },
  {
    match: "The Holistic wellbeing Summit",
    name: "Edinburgh Women's Enterprise Hub",
    types: ["social_enterprise"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.edinburgh.gov.uk",
    blurb:
      "Workspace, advice and peer support for women starting businesses in Edinburgh.",
    mission:
      "A desk, a door that opens, and other people doing the same thing. We give women starting out somewhere to work that is not the kitchen table, and the practical advice that goes with it.",
    uniqueOffer:
      "Free hot-desking for the first six months for anyone on a low income.",
    audiences: ["any_woman", "single_parents", "women_on_low_income"],
    serviceKinds: ["drop_in", "advice_or_one_to_one", "event"],
    accessRoutes: ["in_person"],
    costOptions: ["free", "there_is_a_cost"],
    costNote: "Free for the first six months on a low income, then £40 a month.",
    coverage: "one_area",
    coverageNote: "Edinburgh.",
    eligibility: "Women in Edinburgh starting or running a small business.",
    notEligible: "We have no space for businesses needing storage or workshop facilities.",
    availability: "year_round",
    postingFrequency: "monthly",
    zone: "enterprise-business-growth",
    alsoZones: ["business-infrastructure-professional-services"],
    markets: ["start-and-grow-a-business", "business-infrastructure", "leadership-and-networks"],
    listings: [
      {
        name: "Hot desk membership",
        kind: "drop_in",
        blurb: "A desk, wifi and other women building something, in the city centre.",
        whoFor: "Women in Edinburgh running or starting a business.",
        whatToExpect:
          "Come and try a day for free. Free for six months if you are on a low income; £40 a month after that.",
        cost: "there_is_a_cost",
        formats: ["in_person"],
        place: "Edinburgh",
        deadlineDays: null,
        applyUrl: null,
        situations: ["starting-or-growing", "financial-difficulty"],
      },
    ],
  },
  {
    match: "New Covenant Assembly",
    name: "Govan Community Project",
    types: ["charity"],
    place: "Glasgow · Glasgow City",
    website: "https://www.govancommunityproject.org.uk",
    blurb:
      "Support for refugees, asylum seekers and migrant communities in Glasgow.",
    mission:
      "We work alongside people who have arrived in Glasgow with very little, on the things that make settling possible: language, food, advice, and company. Most of our staff and volunteers have been through it themselves.",
    uniqueOffer:
      "Interpretation in fourteen languages, so nobody is turned away for not having English yet.",
    audiences: ["refugees_and_new_scots", "women_on_low_income", "single_parents", "any_woman"],
    serviceKinds: ["drop_in", "advice_or_one_to_one", "course_or_programme"],
    accessRoutes: ["in_person", "by_phone"],
    costOptions: ["free"],
    coverage: "one_area",
    coverageNote: "Glasgow, mostly the south side.",
    eligibility:
      "Refugees, asylum seekers and migrants living in Glasgow. No paperwork needed to be seen.",
    notEligible:
      "We are not immigration solicitors and cannot represent you on a case.",
    availability: "year_round",
    postingFrequency: "monthly",
    zone: "health-wellbeing",
    alsoZones: ["career-confidence-employability", "womens-voice-leadership-civic-influence"],
    markets: [
      "new-scots-and-inclusion",
      "community-and-third-sector",
      "financial-wellbeing",
      "health-and-wellbeing",
    ],
    listings: [
      {
        name: "Women's English conversation group",
        kind: "drop_in",
        blurb: "An informal group to practise English with other women, every Thursday.",
        whoFor: "Women new to Scotland at any level of English, including beginners.",
        whatToExpect:
          "Thursdays 10am to 12pm in Govan. Just turn up. Crèche available and no registration.",
        cost: "free",
        formats: ["in_person"],
        place: "Glasgow",
        deadlineDays: null,
        applyUrl: null,
        situations: ["new-to-scotland", "financial-difficulty"],
      },
      {
        name: "Welfare rights appointment",
        kind: "advice_or_one_to_one",
        blurb:
          "Help with benefits, asylum support and what to do when money stops.",
        whoFor: "Anyone in Glasgow who has come here seeking safety.",
        whatToExpect:
          "Phone or come to the drop-in to book. Interpreters arranged. We will come with you to appointments if it helps.",
        cost: "free",
        formats: ["in_person", "by_phone"],
        place: "Glasgow",
        deadlineDays: null,
        applyUrl: null,
        situations: ["new-to-scotland", "financial-difficulty"],
      },
    ],
  },
  {
    match: "Martins Oluwaseun Jojolola",
    name: "Smart Works Edinburgh",
    types: ["charity"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://smartworks.org.uk",
    blurb:
      "Interview clothes and coaching for women going for a job, free of charge.",
    mission:
      "A woman going for an interview with nothing to wear and no one to practise with is at a disadvantage that has nothing to do with whether she can do the job. We fix both, in one two-hour appointment, and again when she gets the offer.",
    uniqueOffer:
      "A second set of clothes for the first week of work, once you have the job.",
    audiences: [
      "women_returning_to_work",
      "women_on_low_income",
      "single_parents",
      "any_woman",
    ],
    serviceKinds: ["advice_or_one_to_one"],
    accessRoutes: ["in_person"],
    costOptions: ["free"],
    coverage: "one_area",
    coverageNote: "Edinburgh and the Lothians.",
    eligibility:
      "Women with a confirmed interview coming up, referred by a jobcentre, college, charity or another service.",
    notEligible:
      "We cannot see you without a confirmed interview date, and we cannot find you the interview.",
    availability: "year_round",
    postingFrequency: "monthly",
    zone: "career-confidence-employability",
    alsoZones: ["visibility-marketplace-opportunities"],
    markets: ["jobs-and-careers", "return-to-work", "workplace-culture"],
    listings: [
      {
        name: "Interview appointment",
        kind: "advice_or_one_to_one",
        blurb:
          "Two hours: clothes that fit and an hour of interview practice with someone who hires people.",
        whoFor:
          "Women in Edinburgh with an interview coming up. A referral is needed and we can tell you how to get one.",
        whatToExpect:
          "Two hours in our Edinburgh centre. You leave with a full outfit to keep and notes from the practice.",
        cost: "free",
        formats: ["in_person"],
        place: "Edinburgh",
        deadlineDays: null,
        applyUrl: "https://smartworks.org.uk",
        situations: ["returning-to-work", "changing-career", "financial-difficulty"],
      },
    ],
  },
  {
    match: "(UCL) University College London",
    name: "University of Strathclyde",
    types: ["college_or_university"],
    place: "Glasgow · Glasgow City",
    website: "https://www.strath.ac.uk",
    blurb:
      "A Glasgow university with a long record in part-time and returner study.",
    mission:
      "We were founded as a place of useful learning and still are. A large part of what we teach is to people already working, in the evening or part-time, because that is who most learning in Scotland is actually for.",
    uniqueOffer:
      "Our Centre for Lifelong Learning runs hundreds of evening courses open to anyone, with no entry requirements.",
    audiences: ["any_woman", "women_over_50", "women_returning_to_work"],
    serviceKinds: ["course_or_programme", "event"],
    accessRoutes: ["in_person", "online", "evenings_or_weekends"],
    costOptions: ["there_is_a_cost", "free"],
    costNote: "Evening courses from £90. Fee waivers for anyone on benefits.",
    coverage: "local_authority",
    coverageNote: "Glasgow, with online options across Scotland.",
    eligibility:
      "Open courses are open to anyone 18 or over. No qualifications needed.",
    notEligible:
      "Degree programmes have entry requirements. The open courses do not.",
    availability: "term_time",
    availabilityNote: "September to May, with a January intake for some courses.",
    postingFrequency: "quarterly",
    zone: "education-pathways",
    alsoZones: ["enterprise-business-growth", "career-confidence-employability"],
    markets: [
      "skills-and-retraining",
      "research-and-innovation",
      "digital-and-ai",
      "jobs-and-careers",
    ],
    listings: [
      {
        name: "Evening degree access courses",
        kind: "course_or_programme",
        blurb:
          "A year of evening study that gets adults to degree entry level.",
        whoFor:
          "Adults without the qualifications for a degree. Aimed at people who left school early.",
        whatToExpect:
          "Two evenings a week from September. Fee waived if you are on benefits or a low income.",
        cost: "there_is_a_cost",
        formats: ["in_person", "evenings_or_weekends"],
        place: "Glasgow",
        deadlineDays: 50,
        applyUrl: "https://www.strath.ac.uk",
        situations: ["changing-career", "returning-to-work", "recently-graduated"],
      },
      {
        name: "Women in STEM returners",
        kind: "course_or_programme",
        blurb:
          "A twelve-week paid placement for women coming back to science or engineering after a break.",
        whoFor:
          "Women with a STEM background who have been out of the field for two years or more.",
        whatToExpect:
          "Apply with a CV and a short statement. Twelve weeks, paid, with a mentor. Most people are offered something at the end.",
        cost: "free_to_apply",
        formats: ["in_person"],
        place: "Glasgow",
        deadlineDays: 43,
        applyUrl: "https://www.strath.ac.uk",
        situations: ["returning-to-work", "unpaid-carer", "pregnant-or-new-parent"],
      },
    ],
  },
  {
    match: "Female Wears",
    name: "Grassmarket Community Project",
    types: ["charity", "social_enterprise"],
    place: "Edinburgh · City of Edinburgh",
    website: "https://www.grassmarket.org",
    blurb:
      "A social enterprise in Edinburgh offering work, training and community to people who have been through a hard time.",
    mission:
      "We run a café, a woodwork shop and a textiles studio, and we employ and train people who most employers will not take a chance on. The work is real, the products are sold, and the point is the person.",
    uniqueOffer:
      "You can start with two hours a week and build up. Nobody is expected to manage a full week from day one.",
    audiences: [
      "women_on_low_income",
      "women_leaving_prison",
      "any_woman",
      "disabled_women",
    ],
    serviceKinds: ["course_or_programme", "drop_in", "event"],
    accessRoutes: ["in_person"],
    costOptions: ["free"],
    coverage: "one_area",
    coverageNote: "Edinburgh.",
    eligibility:
      "Adults in Edinburgh who have experienced homelessness, addiction, prison or long-term unemployment.",
    notEligible:
      "We cannot offer housing, and we are not a crisis or detox service.",
    availability: "year_round",
    postingFrequency: "monthly",
    zone: "career-confidence-employability",
    alsoZones: ["health-wellbeing", "visibility-marketplace-opportunities"],
    markets: [
      "jobs-and-careers",
      "skills-and-retraining",
      "community-and-third-sector",
      "health-and-wellbeing",
    ],
    listings: [
      {
        name: "Textiles studio placement",
        kind: "course_or_programme",
        blurb:
          "Learn machine sewing and production in a working studio, at your own pace.",
        whoFor:
          "Adults in Edinburgh rebuilding after a hard few years. No experience needed.",
        whatToExpect:
          "Start with two hours a week and build up if you want to. Lunch provided. Travel costs covered.",
        cost: "free",
        formats: ["in_person"],
        place: "Edinburgh",
        deadlineDays: null,
        applyUrl: "https://www.grassmarket.org",
        situations: ["returning-to-work", "financial-difficulty", "looking-after-my-health"],
      },
    ],
  },
  {
    match: "The Fast Company",
    name: "Highland Third Sector Interface",
    types: ["charity", "network_or_group"],
    place: "Inverness · Highland",
    website: "https://www.highlandtsi.org.uk",
    blurb:
      "Support for charities, community groups and volunteers across the Highlands.",
    mission:
      "The Highlands are large, thinly populated and badly served by anything designed for a city. We support the community organisations that fill that gap, and help people find volunteering that is actually near them.",
    uniqueOffer:
      "We cover an area the size of Belgium, and we travel to it rather than expecting people to come to Inverness.",
    audiences: ["any_woman", "women_over_50", "carers"],
    serviceKinds: ["advice_or_one_to_one", "event", "course_or_programme"],
    accessRoutes: ["online", "by_phone", "in_person"],
    costOptions: ["free"],
    coverage: "local_authority",
    coverageNote: "The Highland council area, including Skye and the west coast.",
    eligibility:
      "Community groups, charities and volunteers in the Highlands, and anyone thinking of starting one.",
    notEligible:
      "We are not a funder, and we cannot support businesses that are not community-run.",
    availability: "year_round",
    postingFrequency: "monthly",
    zone: "womens-voice-leadership-civic-influence",
    alsoZones: ["enterprise-business-growth", "career-confidence-employability"],
    markets: [
      "community-and-third-sector",
      "social-enterprise",
      "leadership-and-networks",
      "policy-and-advocacy",
    ],
    listings: [
      {
        name: "Starting a community group",
        kind: "advice_or_one_to_one",
        blurb:
          "Help with the constitution, the bank account and the first funding application.",
        whoFor:
          "Anyone in the Highlands wanting to start a community group or small charity.",
        whatToExpect:
          "Phone or email. We come to you, or meet on video if that is easier. No limit on how many times.",
        cost: "free",
        formats: ["in_person", "online", "by_phone"],
        place: "Highland",
        deadlineDays: null,
        applyUrl: "https://www.highlandtsi.org.uk",
        situations: ["rural-or-island", "starting-or-growing"],
      },
      {
        name: "Volunteering in the Highlands",
        kind: "drop_in",
        blurb:
          "Find volunteering that is actually within reach of where you live.",
        whoFor:
          "Anyone in the Highlands, including people in very small communities.",
        whatToExpect:
          "Search online or phone us and we will look for you. We know which groups are genuinely active.",
        cost: "free",
        formats: ["online", "by_phone"],
        place: "Highland",
        deadlineDays: null,
        applyUrl: "https://www.highlandtsi.org.uk",
        situations: ["rural-or-island", "returning-to-work", "recently-graduated"],
      },
    ],
  },
];
