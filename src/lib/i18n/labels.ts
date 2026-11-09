/**
 * The fixed vocabularies and the example sentences, in every language.
 *
 * WHY THIS FILE EXISTS
 *
 * Until now a woman reading the site in Arabic got a translated landing
 * page and then an entirely English result card: "Course or programme",
 * "Free to apply", "Evenings or weekends". The part she came for was the
 * part that stayed in a language she may not read. Translating the shell
 * and not the content is close to the opposite of access.
 *
 * WHAT IS IN HERE AND WHAT IS NOT
 *
 * Only platform words. Two things on the same card are deliberately left
 * alone:
 *
 *   * What an organisation wrote about itself — its name, its blurb, who it
 *     is for, what to expect. Nothing here machine-translates somebody
 *     else's description of their own service, because a wrong word in that
 *     sentence sends a woman to the wrong door. This is the shape the
 *     advisor described: a translated summary around the provider's own
 *     retained wording.
 *   * Access Zones and situations. Both are admin-owned and live in the
 *     database so HWS can add or retire one without a release, so their
 *     names cannot be a constant in a file. The example sentences below are
 *     keyed to situations but are woman-facing copy written here, which is
 *     why they can be translated and the zone names cannot.
 *
 * HOW IT IS KEYED
 *
 * Taxonomy entries by slug, which is the value in the database and does not
 * move. Example sentences by their English text, which is this codebase's
 * existing identity for them — getNeedSuggestions already de-duplicates on
 * the sentence, so two slugs that suggest the same thing are one chip. That
 * makes an English edit able to silently orphan a translation, so
 * `npm run check:i18n` fails on any sentence with no entry behind it. Run it
 * before changing wording in suggestions.ts.
 *
 * English is not in here. It lives in taxonomy.ts and suggestions.ts and
 * stays the single source of truth; a missing key falls back to it, so a
 * half-finished language shows English rather than a slug.
 *
 * SAME CAVEAT AS messages.ts, AND IT MATTERS MORE HERE. Every line below
 * was machine-drafted without a native speaker. These are the words a woman
 * uses to decide whether something is for her — "Free to apply" against
 * "There is a cost" is a decision, not a decoration — so a register that is
 * merely close is a worse failure here than in a heading. Gaelic, Scots and
 * Tigrinya are the three to have read first, for the reasons set out in
 * messages.ts.
 *
 * No interpolation anywhere. Every value is a whole phrase.
 */

/** Locale code to a table of slug or English sentence, to its translation. */
export type LabelTable = Record<string, string>;

const gd: LabelTable = {
  /* Organisation types */
  charity: "Carthannas",
  social_enterprise: "Iomairt shòisealta",
  public_body: "Buidheann phoblach",
  business: "Gnothachas",
  network_or_group: "Lìonra no buidheann",
  college_or_university: "Colaiste no oilthigh",

  /* Solution kinds */
  course_or_programme: "Cùrsa no prògram",
  grant_or_fund: "Tabhartas no maoin",
  advice_or_one_to_one: "Comhairle no coinneamh phearsanta",
  drop_in: "Tadhail a-steach",
  event: "Tachartas",
  mentoring: "Treòrachadh",

  /* Cost */
  free: "An-asgaidh",
  free_to_apply: "An-asgaidh airson tagradh",
  there_is_a_cost: "Tha cosgais ann",

  /* Formats */
  in_person: "An làthair",
  online: "Air-loidhne",
  by_phone: "Air a' fòn",
  evenings_or_weekends: "Feasgair no deireadh-sheachdain",

  /* Audiences */
  any_woman: "Boireannach sam bith",
  women_returning_to_work: "Boireannaich a' tilleadh a dh'obair",
  carers: "Luchd-cùraim",
  single_parents: "Pàrantan singilte",
  survivors_of_abuse: "Boireannaich a thàinig beò à droch-dhìol",
  refugees_and_new_scots: "Fògarraich agus Albannaich Ùra",
  disabled_women: "Boireannaich chiorramach",
  women_on_low_income: "Boireannaich air teachd-a-steach ìosal",
  young_women: "Boireannaich òga, 16 gu 25",
  women_over_50: "Boireannaich os cionn 50",
  women_leaving_prison: "Boireannaich a' fàgail a' phrìosain",

  /* Coverage */
  one_area: "Aon bhaile no nàbaidheachd",
  local_authority: "Aon ùghdarras ionadail",
  several_areas: "Grunn sgìrean",
  scotland_wide: "Alba air fad",
  online_only: "Air-loidhne a-mhàin, àite sam bith",

  /* Posting frequency */
  weekly: "A' mhòr-chuid de sheachdainean",
  monthly: "Gach mìos",
  quarterly: "Gach beagan mhìosan",
  few_times_a_year: "Beagan tursan sa bhliadhna",
  when_funding_allows: "Nuair a cheadaicheas am maoineachadh",

  /* Availability */
  year_round: "Fad na bliadhna",
  term_time: "Ùine teirm a-mhàin",
  seasonal: "Ràitheil",
  funding_dependent: "Fhad 's a tha maoineachadh ann",

  /* Example sentences */
  "getting back to work after a break": "a' tilleadh a dh'obair às dèidh beàrn",
  "support while I care for someone":
    "taic fhad 's a tha mi a' toirt cùram do chuideigin",
  "help as a new parent": "cuideachadh mar phàrant ùr",
  "starting my own business": "a' tòiseachadh gnothachas agam fhìn",
  "finding funding for my business": "a' lorg maoineachadh dhan ghnothachas agam",
  "changing career": "ag atharrachadh dreuchd",
  "finding work after graduating": "a' lorg obair às dèidh ceumnachadh",
  "settling in Scotland": "a' socrachadh ann an Alba",
  "something near me in a rural area": "rudeigin faisg orm ann an sgìre dhùthchail",
  "help when money is tight": "cuideachadh nuair a tha airgead gann",
  "looking after my health": "a' coimhead às dèidh mo shlàinte",
  "retraining for something new": "ag ath-thrèanadh airson rudeigin ùr",
  "finding a job": "a' lorg obair",
  "learning computers and AI": "ag ionnsachadh choimpiutairean agus IF",
  "meeting people in my line of work": "a' coinneachadh ri daoine san obair agam",
  "women's health support": "taic slàinte bhoireannaich",
  "a problem at work": "duilgheadas aig an obair",
  "finding customers or contracts": "a' lorg luchd-ceannach no cùmhnantan",
  "practical help running my business":
    "cuideachadh practaigeach le ruith a' ghnothachais agam",
  "starting a social enterprise": "a' tòiseachadh iomairt shòisealta",
  "starting a community group": "a' tòiseachadh buidheann coimhearsnachd",
  "getting my work seen": "m' obair a chur fa chomhair dhaoine",
  "having a say on things that affect me":
    "guth a bhith agam air rudan a bheir buaidh orm",
  "research or innovation support": "taic rannsachaidh no ùr-ghnàthachaidh",
  "finding money for a course": "a' lorg airgead airson cùrsa",
  "meeting people near me": "a' coinneachadh ri daoine faisg orm",
};

const sco: LabelTable = {
  charity: "Chairity",
  social_enterprise: "Social enterprise",
  public_body: "Public body",
  business: "Business",
  network_or_group: "Network or group",
  college_or_university: "College or university",

  course_or_programme: "Coorse or programme",
  grant_or_fund: "Grant or fund",
  advice_or_one_to_one: "Advice or ane tae ane",
  drop_in: "Drap in",
  event: "Event",
  mentoring: "Mentorin",

  free: "Free",
  free_to_apply: "Free tae apply",
  there_is_a_cost: "There's a cost",

  in_person: "In person",
  online: "Online",
  by_phone: "By phone",
  evenings_or_weekends: "Forenichts or weekends",

  any_woman: "Ony wumman",
  women_returning_to_work: "Weemen gaun back tae wark",
  carers: "Carers",
  single_parents: "Single parents",
  survivors_of_abuse: "Survivors o abuse",
  refugees_and_new_scots: "Refugees an New Scots",
  disabled_women: "Disabled weemen",
  women_on_low_income: "Weemen on a laich income",
  young_women: "Young weemen, 16 tae 25",
  women_over_50: "Weemen ower 50",
  women_leaving_prison: "Weemen leavin the jyle",

  one_area: "Ae toun or neebourhuid",
  local_authority: "Ae local authority",
  several_areas: "Sindry airts",
  scotland_wide: "Aw o Scotland",
  online_only: "Online ainly, onywhaur",

  weekly: "Maist weeks",
  monthly: "Ilka month",
  quarterly: "Ilka wheen months",
  few_times_a_year: "A wheen times a year",
  when_funding_allows: "Whan fundin alloos",

  year_round: "Aw year roond",
  term_time: "Term time ainly",
  seasonal: "Saisonal",
  funding_dependent: "Ainly while funded",

  "getting back to work after a break": "gettin back tae wark efter a brek",
  "support while I care for someone": "support while A luik efter somebody",
  "help as a new parent": "help as a new parent",
  "starting my own business": "stertin ma ain business",
  "finding funding for my business": "findin fundin for ma business",
  "changing career": "chyngin career",
  "finding work after graduating": "findin wark efter graduatin",
  "settling in Scotland": "settlin in Scotland",
  "something near me in a rural area": "somethin near me in a kintra airt",
  "help when money is tight": "help whan siller's ticht",
  "looking after my health": "luikin efter ma health",
  "retraining for something new": "retrainin for somethin new",
  "finding a job": "findin a job",
  "learning computers and AI": "learnin computers an AI",
  "meeting people in my line of work": "meetin fowk in ma line o wark",
  "women's health support": "weemen's health support",
  "a problem at work": "a bather at wark",
  "finding customers or contracts": "findin customers or contracts",
  "practical help running my business": "practical help rinnin ma business",
  "starting a social enterprise": "stertin a social enterprise",
  "starting a community group": "stertin a community group",
  "getting my work seen": "gettin ma wark seen",
  "having a say on things that affect me": "haein a say on things that affect me",
  "research or innovation support": "research or innovation support",
  "finding money for a course": "findin siller for a coorse",
  "meeting people near me": "meetin fowk near me",
};

const pl: LabelTable = {
  charity: "Organizacja charytatywna",
  social_enterprise: "Przedsiębiorstwo społeczne",
  public_body: "Instytucja publiczna",
  business: "Firma",
  network_or_group: "Sieć lub grupa",
  college_or_university: "Uczelnia lub uniwersytet",

  course_or_programme: "Kurs lub program",
  grant_or_fund: "Dotacja lub fundusz",
  advice_or_one_to_one: "Porada lub spotkanie indywidualne",
  drop_in: "Dyżur otwarty",
  event: "Wydarzenie",
  mentoring: "Mentoring",

  free: "Bezpłatne",
  free_to_apply: "Zgłoszenie bezpłatne",
  there_is_a_cost: "Jest opłata",

  in_person: "Na miejscu",
  online: "Online",
  by_phone: "Telefonicznie",
  evenings_or_weekends: "Wieczorami lub w weekendy",

  any_woman: "Każda kobieta",
  women_returning_to_work: "Kobiety wracające do pracy",
  carers: "Osoby sprawujące opiekę",
  single_parents: "Samotni rodzice",
  survivors_of_abuse: "Kobiety, które doświadczyły przemocy",
  refugees_and_new_scots: "Uchodźczynie i nowe mieszkanki Szkocji",
  disabled_women: "Kobiety z niepełnosprawnościami",
  women_on_low_income: "Kobiety o niskich dochodach",
  young_women: "Młode kobiety, 16–25 lat",
  women_over_50: "Kobiety po 50. roku życia",
  women_leaving_prison: "Kobiety wychodzące z więzienia",

  one_area: "Jedno miasto lub dzielnica",
  local_authority: "Jeden samorząd lokalny",
  several_areas: "Kilka obszarów",
  scotland_wide: "Cała Szkocja",
  online_only: "Tylko online, z dowolnego miejsca",

  weekly: "Prawie co tydzień",
  monthly: "Co miesiąc",
  quarterly: "Co kilka miesięcy",
  few_times_a_year: "Kilka razy w roku",
  when_funding_allows: "Gdy pozwala finansowanie",

  year_round: "Przez cały rok",
  term_time: "Tylko w roku szkolnym",
  seasonal: "Sezonowo",
  funding_dependent: "Tylko w okresie finansowania",

  "getting back to work after a break": "powrót do pracy po przerwie",
  "support while I care for someone": "wsparcie, gdy opiekuję się kimś bliskim",
  "help as a new parent": "pomoc, gdy właśnie zostałam mamą",
  "starting my own business": "założenie własnej firmy",
  "finding funding for my business": "znalezienie finansowania dla mojej firmy",
  "changing career": "zmiana zawodu",
  "finding work after graduating": "praca po studiach",
  "settling in Scotland": "odnalezienie się w Szkocji",
  "something near me in a rural area": "coś blisko mnie, na wsi",
  "help when money is tight": "pomoc, gdy brakuje pieniędzy",
  "looking after my health": "dbanie o moje zdrowie",
  "retraining for something new": "przekwalifikowanie się",
  "finding a job": "znalezienie pracy",
  "learning computers and AI": "nauka obsługi komputera i AI",
  "meeting people in my line of work": "poznanie ludzi z mojej branży",
  "women's health support": "wsparcie w zdrowiu kobiet",
  "a problem at work": "problem w pracy",
  "finding customers or contracts": "znalezienie klientów lub zleceń",
  "practical help running my business": "praktyczna pomoc w prowadzeniu firmy",
  "starting a social enterprise": "założenie przedsiębiorstwa społecznego",
  "starting a community group": "założenie grupy lokalnej",
  "getting my work seen": "pokazanie tego, co robię",
  "having a say on things that affect me": "głos w sprawach, które mnie dotyczą",
  "research or innovation support": "wsparcie badań lub innowacji",
  "finding money for a course": "pieniądze na kurs",
  "meeting people near me": "poznanie ludzi w okolicy",
};

const uk: LabelTable = {
  charity: "Благодійна організація",
  social_enterprise: "Соціальне підприємство",
  public_body: "Державна установа",
  business: "Бізнес",
  network_or_group: "Мережа або група",
  college_or_university: "Коледж або університет",

  course_or_programme: "Курс або програма",
  grant_or_fund: "Грант або фонд",
  advice_or_one_to_one: "Консультація віч-на-віч",
  drop_in: "Відкритий прийом",
  event: "Подія",
  mentoring: "Менторство",

  free: "Безкоштовно",
  free_to_apply: "Подання заявки безкоштовне",
  there_is_a_cost: "Є оплата",

  in_person: "Особисто",
  online: "Онлайн",
  by_phone: "Телефоном",
  evenings_or_weekends: "Увечері або у вихідні",

  any_woman: "Будь-яка жінка",
  women_returning_to_work: "Жінки, які повертаються до роботи",
  carers: "Ті, хто доглядає за близькими",
  single_parents: "Одинокі батьки",
  survivors_of_abuse: "Жінки, які пережили насильство",
  refugees_and_new_scots: "Біженки та нові мешканки Шотландії",
  disabled_women: "Жінки з інвалідністю",
  women_on_low_income: "Жінки з низьким доходом",
  young_women: "Молоді жінки, 16–25 років",
  women_over_50: "Жінки, старші за 50",
  women_leaving_prison: "Жінки, які виходять з ув'язнення",

  one_area: "Одне місто або район",
  local_authority: "Одна місцева громада",
  several_areas: "Кілька регіонів",
  scotland_wide: "Уся Шотландія",
  online_only: "Лише онлайн, звідусіль",

  weekly: "Майже щотижня",
  monthly: "Щомісяця",
  quarterly: "Раз на кілька місяців",
  few_times_a_year: "Кілька разів на рік",
  when_funding_allows: "Коли дозволяє фінансування",

  year_round: "Цілий рік",
  term_time: "Лише під час навчального року",
  seasonal: "Сезонно",
  funding_dependent: "Лише поки є фінансування",

  "getting back to work after a break": "повернення до роботи після перерви",
  "support while I care for someone":
    "підтримка, поки я доглядаю за близькою людиною",
  "help as a new parent": "допомога, коли я щойно стала мамою",
  "starting my own business": "відкриття власної справи",
  "finding funding for my business": "пошук фінансування для моєї справи",
  "changing career": "зміна професії",
  "finding work after graduating": "робота після навчання",
  "settling in Scotland": "облаштування життя в Шотландії",
  "something near me in a rural area": "щось поруч зі мною у сільській місцевості",
  "help when money is tight": "допомога, коли бракує грошей",
  "looking after my health": "турбота про своє здоров'я",
  "retraining for something new": "перенавчання на щось нове",
  "finding a job": "пошук роботи",
  "learning computers and AI": "опанування комп'ютера та ШІ",
  "meeting people in my line of work": "знайомство з людьми з моєї сфери",
  "women's health support": "підтримка жіночого здоров'я",
  "a problem at work": "проблема на роботі",
  "finding customers or contracts": "пошук клієнтів або замовлень",
  "practical help running my business": "практична допомога у веденні справи",
  "starting a social enterprise": "створення соціального підприємства",
  "starting a community group": "створення громадської групи",
  "getting my work seen": "щоб мою роботу побачили",
  "having a say on things that affect me": "право голосу в тому, що мене стосується",
  "research or innovation support": "підтримка досліджень або інновацій",
  "finding money for a course": "гроші на навчання",
  "meeting people near me": "знайомство з людьми поруч",
};

const ro: LabelTable = {
  charity: "Organizație caritabilă",
  social_enterprise: "Întreprindere socială",
  public_body: "Instituție publică",
  business: "Firmă",
  network_or_group: "Rețea sau grup",
  college_or_university: "Colegiu sau universitate",

  course_or_programme: "Curs sau program",
  grant_or_fund: "Finanțare sau fond",
  advice_or_one_to_one: "Consiliere individuală",
  drop_in: "Program cu acces liber",
  event: "Eveniment",
  mentoring: "Mentorat",

  free: "Gratuit",
  free_to_apply: "Înscrierea este gratuită",
  there_is_a_cost: "Există un cost",

  in_person: "În persoană",
  online: "Online",
  by_phone: "Prin telefon",
  evenings_or_weekends: "Seara sau în weekend",

  any_woman: "Orice femeie",
  women_returning_to_work: "Femei care se întorc la muncă",
  carers: "Persoane care îngrijesc pe cineva",
  single_parents: "Părinți singuri",
  survivors_of_abuse: "Femei care au trecut prin abuz",
  refugees_and_new_scots: "Refugiate și nou-venite în Scoția",
  disabled_women: "Femei cu dizabilități",
  women_on_low_income: "Femei cu venituri mici",
  young_women: "Femei tinere, 16–25 de ani",
  women_over_50: "Femei peste 50 de ani",
  women_leaving_prison: "Femei care ies din închisoare",

  one_area: "Un oraș sau un cartier",
  local_authority: "O singură autoritate locală",
  several_areas: "Mai multe zone",
  scotland_wide: "Toată Scoția",
  online_only: "Doar online, de oriunde",

  weekly: "Aproape în fiecare săptămână",
  monthly: "Lunar",
  quarterly: "O dată la câteva luni",
  few_times_a_year: "De câteva ori pe an",
  when_funding_allows: "Când permite finanțarea",

  year_round: "Tot anul",
  term_time: "Doar în perioada școlară",
  seasonal: "Sezonier",
  funding_dependent: "Doar cât există finanțare",

  "getting back to work after a break": "revenirea la muncă după o pauză",
  "support while I care for someone": "sprijin cât timp am grijă de cineva",
  "help as a new parent": "ajutor ca proaspătă mamă",
  "starting my own business": "să-mi deschid propria afacere",
  "finding funding for my business": "să găsesc finanțare pentru afacerea mea",
  "changing career": "schimbarea carierei",
  "finding work after graduating": "să găsesc de lucru după facultate",
  "settling in Scotland": "să mă așez în Scoția",
  "something near me in a rural area": "ceva aproape de mine, la țară",
  "help when money is tight": "ajutor când banii sunt puțini",
  "looking after my health": "grija pentru sănătatea mea",
  "retraining for something new": "recalificare pentru ceva nou",
  "finding a job": "să găsesc un loc de muncă",
  "learning computers and AI": "să învăț calculatorul și inteligența artificială",
  "meeting people in my line of work": "să cunosc oameni din domeniul meu",
  "women's health support": "sprijin pentru sănătatea femeilor",
  "a problem at work": "o problemă la locul de muncă",
  "finding customers or contracts": "să găsesc clienți sau contracte",
  "practical help running my business": "ajutor practic în conducerea afacerii",
  "starting a social enterprise": "să înființez o întreprindere socială",
  "starting a community group": "să înființez un grup în comunitate",
  "getting my work seen": "să fie văzut ce fac",
  "having a say on things that affect me":
    "să am un cuvânt de spus în ce mă privește",
  "research or innovation support": "sprijin pentru cercetare sau inovare",
  "finding money for a course": "bani pentru un curs",
  "meeting people near me": "să cunosc oameni din apropiere",
};

const ar: LabelTable = {
  charity: "جمعية خيرية",
  social_enterprise: "مؤسسة اجتماعية",
  public_body: "جهة حكومية",
  business: "شركة",
  network_or_group: "شبكة أو مجموعة",
  college_or_university: "كلية أو جامعة",

  course_or_programme: "دورة أو برنامج",
  grant_or_fund: "منحة أو صندوق",
  advice_or_one_to_one: "استشارة فردية",
  drop_in: "زيارة بلا موعد",
  event: "فعالية",
  mentoring: "إرشاد",

  free: "مجاني",
  free_to_apply: "التقديم مجاني",
  there_is_a_cost: "هناك تكلفة",

  in_person: "حضورياً",
  online: "عبر الإنترنت",
  by_phone: "عبر الهاتف",
  evenings_or_weekends: "مساءً أو في عطلة نهاية الأسبوع",

  any_woman: "أي امرأة",
  women_returning_to_work: "النساء العائدات إلى العمل",
  carers: "مقدمات الرعاية",
  single_parents: "أمهات أو آباء بمفردهم",
  survivors_of_abuse: "الناجيات من الإساءة",
  refugees_and_new_scots: "اللاجئات والقادمات الجدد إلى اسكتلندا",
  disabled_women: "النساء ذوات الإعاقة",
  women_on_low_income: "النساء ذوات الدخل المحدود",
  young_women: "الشابات، من 16 إلى 25",
  women_over_50: "النساء فوق الخمسين",
  women_leaving_prison: "النساء الخارجات من السجن",

  one_area: "بلدة أو حي واحد",
  local_authority: "سلطة محلية واحدة",
  several_areas: "عدة مناطق",
  scotland_wide: "اسكتلندا كلها",
  online_only: "عبر الإنترنت فقط، من أي مكان",

  weekly: "معظم الأسابيع",
  monthly: "شهرياً",
  quarterly: "كل بضعة أشهر",
  few_times_a_year: "بضع مرات في السنة",
  when_funding_allows: "عندما يسمح التمويل",

  year_round: "طوال السنة",
  term_time: "خلال الفصل الدراسي فقط",
  seasonal: "موسمي",
  funding_dependent: "ما دام التمويل متاحاً",

  "getting back to work after a break": "العودة إلى العمل بعد انقطاع",
  "support while I care for someone": "دعم بينما أرعى شخصاً",
  "help as a new parent": "مساعدة كأم جديدة",
  "starting my own business": "بدء مشروعي الخاص",
  "finding funding for my business": "إيجاد تمويل لمشروعي",
  "changing career": "تغيير مساري المهني",
  "finding work after graduating": "إيجاد عمل بعد التخرج",
  "settling in Scotland": "الاستقرار في اسكتلندا",
  "something near me in a rural area": "شيء قريب مني في منطقة ريفية",
  "help when money is tight": "مساعدة عندما يضيق المال",
  "looking after my health": "الاعتناء بصحتي",
  "retraining for something new": "إعادة التدريب على شيء جديد",
  "finding a job": "إيجاد وظيفة",
  "learning computers and AI": "تعلّم الحاسوب والذكاء الاصطناعي",
  "meeting people in my line of work": "لقاء أشخاص في مجال عملي",
  "women's health support": "دعم صحة المرأة",
  "a problem at work": "مشكلة في العمل",
  "finding customers or contracts": "إيجاد زبائن أو عقود",
  "practical help running my business": "مساعدة عملية في إدارة مشروعي",
  "starting a social enterprise": "بدء مؤسسة اجتماعية",
  "starting a community group": "تأسيس مجموعة مجتمعية",
  "getting my work seen": "أن يُرى عملي",
  "having a say on things that affect me": "أن يكون لي رأي فيما يمسّني",
  "research or innovation support": "دعم البحث أو الابتكار",
  "finding money for a course": "إيجاد مال لدورة",
  "meeting people near me": "لقاء أشخاص قريبين مني",
};

const ur: LabelTable = {
  charity: "فلاحی ادارہ",
  social_enterprise: "سماجی ادارہ",
  public_body: "سرکاری ادارہ",
  business: "کاروبار",
  network_or_group: "نیٹ ورک یا گروپ",
  college_or_university: "کالج یا یونیورسٹی",

  course_or_programme: "کورس یا پروگرام",
  grant_or_fund: "گرانٹ یا فنڈ",
  advice_or_one_to_one: "مشورہ یا انفرادی ملاقات",
  drop_in: "بغیر وقت لیے آنا",
  event: "تقریب",
  mentoring: "رہنمائی",

  free: "مفت",
  free_to_apply: "درخواست دینا مفت ہے",
  there_is_a_cost: "اس کی قیمت ہے",

  in_person: "بالمشافہ",
  online: "آن لائن",
  by_phone: "فون پر",
  evenings_or_weekends: "شام یا ہفتے کے آخر میں",

  any_woman: "کوئی بھی خاتون",
  women_returning_to_work: "کام پر واپس آنے والی خواتین",
  carers: "دیکھ بھال کرنے والی خواتین",
  single_parents: "اکیلے والدین",
  survivors_of_abuse: "زیادتی سے بچ نکلنے والی خواتین",
  refugees_and_new_scots: "پناہ گزین اور سکاٹ لینڈ میں نئی آنے والی خواتین",
  disabled_women: "معذور خواتین",
  women_on_low_income: "کم آمدنی والی خواتین",
  young_women: "نوجوان خواتین، 16 سے 25",
  women_over_50: "50 سال سے زائد عمر کی خواتین",
  women_leaving_prison: "قید سے رہا ہونے والی خواتین",

  one_area: "ایک قصبہ یا محلہ",
  local_authority: "ایک مقامی اتھارٹی",
  several_areas: "کئی علاقے",
  scotland_wide: "پورا سکاٹ لینڈ",
  online_only: "صرف آن لائن، کہیں سے بھی",

  weekly: "زیادہ تر ہفتوں میں",
  monthly: "ماہانہ",
  quarterly: "ہر چند ماہ بعد",
  few_times_a_year: "سال میں چند بار",
  when_funding_allows: "جب فنڈنگ اجازت دے",

  year_round: "سارا سال",
  term_time: "صرف تعلیمی سیشن میں",
  seasonal: "موسمی",
  funding_dependent: "صرف جب تک فنڈنگ ہے",

  "getting back to work after a break": "وقفے کے بعد کام پر واپسی",
  "support while I care for someone": "کسی کی دیکھ بھال کے دوران مدد",
  "help as a new parent": "نئی ماں کے طور پر مدد",
  "starting my own business": "اپنا کاروبار شروع کرنا",
  "finding funding for my business": "اپنے کاروبار کے لیے سرمایہ ڈھونڈنا",
  "changing career": "شعبہ بدلنا",
  "finding work after graduating": "تعلیم مکمل کرنے کے بعد کام ڈھونڈنا",
  "settling in Scotland": "سکاٹ لینڈ میں آباد ہونا",
  "something near me in a rural area": "دیہی علاقے میں میرے قریب کچھ",
  "help when money is tight": "جب پیسوں کی تنگی ہو تو مدد",
  "looking after my health": "اپنی صحت کا خیال رکھنا",
  "retraining for something new": "کسی نئے کام کی تربیت",
  "finding a job": "نوکری ڈھونڈنا",
  "learning computers and AI": "کمپیوٹر اور اے آئی سیکھنا",
  "meeting people in my line of work": "اپنے شعبے کے لوگوں سے ملنا",
  "women's health support": "خواتین کی صحت کے لیے مدد",
  "a problem at work": "کام کی جگہ پر کوئی مسئلہ",
  "finding customers or contracts": "گاہک یا ٹھیکے ڈھونڈنا",
  "practical help running my business": "کاروبار چلانے میں عملی مدد",
  "starting a social enterprise": "سماجی ادارہ شروع کرنا",
  "starting a community group": "کمیونٹی گروپ بنانا",
  "getting my work seen": "اپنا کام لوگوں تک پہنچانا",
  "having a say on things that affect me":
    "جو چیزیں مجھ پر اثر ڈالتی ہیں ان میں رائے دینا",
  "research or innovation support": "تحقیق یا جدت کے لیے مدد",
  "finding money for a course": "کورس کے لیے پیسے ڈھونڈنا",
  "meeting people near me": "اپنے قریب لوگوں سے ملنا",
};

const pa: LabelTable = {
  charity: "ਚੈਰਿਟੀ",
  social_enterprise: "ਸਮਾਜਿਕ ਅਦਾਰਾ",
  public_body: "ਸਰਕਾਰੀ ਅਦਾਰਾ",
  business: "ਕਾਰੋਬਾਰ",
  network_or_group: "ਨੈੱਟਵਰਕ ਜਾਂ ਗਰੁੱਪ",
  college_or_university: "ਕਾਲਜ ਜਾਂ ਯੂਨੀਵਰਸਿਟੀ",

  course_or_programme: "ਕੋਰਸ ਜਾਂ ਪ੍ਰੋਗਰਾਮ",
  grant_or_fund: "ਗ੍ਰਾਂਟ ਜਾਂ ਫੰਡ",
  advice_or_one_to_one: "ਸਲਾਹ ਜਾਂ ਇਕੱਲੇ-ਇਕੱਲੇ ਮੁਲਾਕਾਤ",
  drop_in: "ਬਿਨਾਂ ਸਮਾਂ ਲਏ ਆਉਣਾ",
  event: "ਸਮਾਗਮ",
  mentoring: "ਰਹਿਨੁਮਾਈ",

  free: "ਮੁਫ਼ਤ",
  free_to_apply: "ਅਰਜ਼ੀ ਦੇਣਾ ਮੁਫ਼ਤ ਹੈ",
  there_is_a_cost: "ਇਸ ਦਾ ਖਰਚਾ ਹੈ",

  in_person: "ਰੂਬਰੂ",
  online: "ਆਨਲਾਈਨ",
  by_phone: "ਫ਼ੋਨ ਰਾਹੀਂ",
  evenings_or_weekends: "ਸ਼ਾਮ ਨੂੰ ਜਾਂ ਵੀਕਐਂਡ ਤੇ",

  any_woman: "ਕੋਈ ਵੀ ਔਰਤ",
  women_returning_to_work: "ਕੰਮ ਤੇ ਵਾਪਸ ਆ ਰਹੀਆਂ ਔਰਤਾਂ",
  carers: "ਸੰਭਾਲ ਕਰਨ ਵਾਲੀਆਂ",
  single_parents: "ਇਕੱਲੇ ਮਾਪੇ",
  survivors_of_abuse: "ਦੁਰਵਿਵਹਾਰ ਤੋਂ ਬਚ ਨਿਕਲੀਆਂ ਔਰਤਾਂ",
  refugees_and_new_scots: "ਸ਼ਰਨਾਰਥੀ ਅਤੇ ਸਕਾਟਲੈਂਡ ਵਿੱਚ ਨਵੀਆਂ ਆਈਆਂ",
  disabled_women: "ਅਪਾਹਜ ਔਰਤਾਂ",
  women_on_low_income: "ਘੱਟ ਆਮਦਨ ਵਾਲੀਆਂ ਔਰਤਾਂ",
  young_women: "ਨੌਜਵਾਨ ਔਰਤਾਂ, 16 ਤੋਂ 25",
  women_over_50: "50 ਤੋਂ ਵੱਧ ਉਮਰ ਦੀਆਂ ਔਰਤਾਂ",
  women_leaving_prison: "ਜੇਲ੍ਹ ਤੋਂ ਰਿਹਾਅ ਹੋ ਰਹੀਆਂ ਔਰਤਾਂ",

  one_area: "ਇੱਕ ਕਸਬਾ ਜਾਂ ਮੁਹੱਲਾ",
  local_authority: "ਇੱਕ ਸਥਾਨਕ ਅਥਾਰਟੀ",
  several_areas: "ਕਈ ਇਲਾਕੇ",
  scotland_wide: "ਸਾਰਾ ਸਕਾਟਲੈਂਡ",
  online_only: "ਸਿਰਫ਼ ਆਨਲਾਈਨ, ਕਿਤੋਂ ਵੀ",

  weekly: "ਬਹੁਤੇ ਹਫ਼ਤੇ",
  monthly: "ਹਰ ਮਹੀਨੇ",
  quarterly: "ਹਰ ਕੁਝ ਮਹੀਨਿਆਂ ਬਾਅਦ",
  few_times_a_year: "ਸਾਲ ਵਿੱਚ ਕੁਝ ਵਾਰ",
  when_funding_allows: "ਜਦੋਂ ਫੰਡਿੰਗ ਇਜਾਜ਼ਤ ਦੇਵੇ",

  year_round: "ਸਾਰਾ ਸਾਲ",
  term_time: "ਸਿਰਫ਼ ਪੜ੍ਹਾਈ ਦੇ ਸਮੇਂ",
  seasonal: "ਮੌਸਮੀ",
  funding_dependent: "ਸਿਰਫ਼ ਜਦੋਂ ਤੱਕ ਫੰਡਿੰਗ ਹੈ",

  "getting back to work after a break": "ਵਕਫ਼ੇ ਤੋਂ ਬਾਅਦ ਕੰਮ ਤੇ ਵਾਪਸੀ",
  "support while I care for someone": "ਕਿਸੇ ਦੀ ਸੰਭਾਲ ਕਰਦਿਆਂ ਸਹਾਰਾ",
  "help as a new parent": "ਨਵੀਂ ਮਾਂ ਵਜੋਂ ਮਦਦ",
  "starting my own business": "ਆਪਣਾ ਕਾਰੋਬਾਰ ਸ਼ੁਰੂ ਕਰਨਾ",
  "finding funding for my business": "ਆਪਣੇ ਕਾਰੋਬਾਰ ਲਈ ਪੈਸਾ ਲੱਭਣਾ",
  "changing career": "ਕਿੱਤਾ ਬਦਲਣਾ",
  "finding work after graduating": "ਪੜ੍ਹਾਈ ਮੁਕਾਉਣ ਤੋਂ ਬਾਅਦ ਕੰਮ ਲੱਭਣਾ",
  "settling in Scotland": "ਸਕਾਟਲੈਂਡ ਵਿੱਚ ਵੱਸਣਾ",
  "something near me in a rural area": "ਪੇਂਡੂ ਇਲਾਕੇ ਵਿੱਚ ਮੇਰੇ ਨੇੜੇ ਕੁਝ",
  "help when money is tight": "ਜਦੋਂ ਪੈਸੇ ਦੀ ਤੰਗੀ ਹੋਵੇ ਤਾਂ ਮਦਦ",
  "looking after my health": "ਆਪਣੀ ਸਿਹਤ ਦਾ ਖ਼ਿਆਲ ਰੱਖਣਾ",
  "retraining for something new": "ਕਿਸੇ ਨਵੇਂ ਕੰਮ ਦੀ ਸਿਖਲਾਈ",
  "finding a job": "ਨੌਕਰੀ ਲੱਭਣਾ",
  "learning computers and AI": "ਕੰਪਿਊਟਰ ਅਤੇ ਏਆਈ ਸਿੱਖਣਾ",
  "meeting people in my line of work": "ਆਪਣੇ ਕਿੱਤੇ ਦੇ ਲੋਕਾਂ ਨੂੰ ਮਿਲਣਾ",
  "women's health support": "ਔਰਤਾਂ ਦੀ ਸਿਹਤ ਲਈ ਸਹਾਰਾ",
  "a problem at work": "ਕੰਮ ਵਾਲੀ ਥਾਂ ਤੇ ਕੋਈ ਮੁਸ਼ਕਲ",
  "finding customers or contracts": "ਗਾਹਕ ਜਾਂ ਠੇਕੇ ਲੱਭਣਾ",
  "practical help running my business": "ਕਾਰੋਬਾਰ ਚਲਾਉਣ ਵਿੱਚ ਅਮਲੀ ਮਦਦ",
  "starting a social enterprise": "ਸਮਾਜਿਕ ਅਦਾਰਾ ਸ਼ੁਰੂ ਕਰਨਾ",
  "starting a community group": "ਕਮਿਊਨਿਟੀ ਗਰੁੱਪ ਬਣਾਉਣਾ",
  "getting my work seen": "ਆਪਣਾ ਕੰਮ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚਾਉਣਾ",
  "having a say on things that affect me":
    "ਜੋ ਗੱਲਾਂ ਮੇਰੇ ਤੇ ਅਸਰ ਪਾਉਂਦੀਆਂ ਹਨ ਉਨ੍ਹਾਂ ਵਿੱਚ ਰਾਇ ਦੇਣਾ",
  "research or innovation support": "ਖੋਜ ਜਾਂ ਨਵੀਨਤਾ ਲਈ ਸਹਾਰਾ",
  "finding money for a course": "ਕੋਰਸ ਲਈ ਪੈਸੇ ਲੱਭਣਾ",
  "meeting people near me": "ਆਪਣੇ ਨੇੜੇ ਲੋਕਾਂ ਨੂੰ ਮਿਲਣਾ",
};

const zh: LabelTable = {
  charity: "慈善机构",
  social_enterprise: "社会企业",
  public_body: "公共机构",
  business: "企业",
  network_or_group: "网络或团体",
  college_or_university: "学院或大学",

  course_or_programme: "课程或项目",
  grant_or_fund: "补助金或基金",
  advice_or_one_to_one: "咨询或一对一",
  drop_in: "免预约到访",
  event: "活动",
  mentoring: "辅导",

  free: "免费",
  free_to_apply: "申请免费",
  there_is_a_cost: "需要费用",

  in_person: "线下面对面",
  online: "线上",
  by_phone: "电话",
  evenings_or_weekends: "晚间或周末",

  any_woman: "任何女性",
  women_returning_to_work: "重返职场的女性",
  carers: "照顾者",
  single_parents: "单亲家长",
  survivors_of_abuse: "遭受过虐待的女性",
  refugees_and_new_scots: "难民与新到苏格兰的女性",
  disabled_women: "残障女性",
  women_on_low_income: "低收入女性",
  young_women: "年轻女性，16 至 25 岁",
  women_over_50: "50 岁以上女性",
  women_leaving_prison: "刑满出狱的女性",

  one_area: "一个城镇或社区",
  local_authority: "一个地方政府辖区",
  several_areas: "多个地区",
  scotland_wide: "全苏格兰",
  online_only: "仅限线上，不限地点",

  weekly: "几乎每周",
  monthly: "每月",
  quarterly: "每隔几个月",
  few_times_a_year: "一年几次",
  when_funding_allows: "视经费而定",

  year_round: "全年",
  term_time: "仅学期内",
  seasonal: "季节性",
  funding_dependent: "仅在有经费期间",

  "getting back to work after a break": "休息一段时间后重返工作",
  "support while I care for someone": "照顾家人期间需要支持",
  "help as a new parent": "刚当妈妈，需要帮助",
  "starting my own business": "开办自己的生意",
  "finding funding for my business": "为我的生意找资金",
  "changing career": "转行",
  "finding work after graduating": "毕业后找工作",
  "settling in Scotland": "在苏格兰安顿下来",
  "something near me in a rural area": "乡村地区离我近的服务",
  "help when money is tight": "手头紧时的帮助",
  "looking after my health": "照顾自己的健康",
  "retraining for something new": "重新培训，转做新的工作",
  "finding a job": "找一份工作",
  "learning computers and AI": "学习电脑和人工智能",
  "meeting people in my line of work": "认识同行的人",
  "women's health support": "女性健康方面的支持",
  "a problem at work": "工作上遇到的问题",
  "finding customers or contracts": "寻找客户或合同",
  "practical help running my business": "经营生意的实际帮助",
  "starting a social enterprise": "创办社会企业",
  "starting a community group": "创办社区团体",
  "getting my work seen": "让更多人看到我的作品",
  "having a say on things that affect me": "对影响我的事情有发言权",
  "research or innovation support": "研究或创新方面的支持",
  "finding money for a course": "找钱上课程",
  "meeting people near me": "认识附近的人",
};

const so: LabelTable = {
  charity: "Samafal",
  social_enterprise: "Ganacsi bulsheed",
  public_body: "Hay'ad dowladeed",
  business: "Ganacsi",
  network_or_group: "Shabakad ama koox",
  college_or_university: "Kuliyad ama jaamacad",

  course_or_programme: "Koorso ama barnaamij",
  grant_or_fund: "Deeq ama sanduuq",
  advice_or_one_to_one: "Talo ama kulan gaar ah",
  drop_in: "Imaatin aan ballan lahayn",
  event: "Munaasabad",
  mentoring: "Hagid",

  free: "Bilaash",
  free_to_apply: "Codsigu waa bilaash",
  there_is_a_cost: "Waxaa jira qiime",

  in_person: "Shaqsi ahaan",
  online: "Online",
  by_phone: "Telefoon",
  evenings_or_weekends: "Fiidkii ama maalmaha fasaxa",

  any_woman: "Haweeney kasta",
  women_returning_to_work: "Haween ku soo laabanaya shaqada",
  carers: "Dadka qof daryeela",
  single_parents: "Waalid keligii ah",
  survivors_of_abuse: "Haween ka badbaaday xadgudub",
  refugees_and_new_scots: "Qaxooti iyo haween cusub oo Scotland yimid",
  disabled_women: "Haween naafo ah",
  women_on_low_income: "Haween dakhli yar leh",
  young_women: "Haween dhallinyaro ah, 16 ilaa 25",
  women_over_50: "Haween ka weyn 50 sano",
  women_leaving_prison: "Haween ka soo baxaya xabsiga",

  one_area: "Hal magaalo ama xaafad",
  local_authority: "Hal maamul deegaan",
  several_areas: "Dhowr gobol",
  scotland_wide: "Scotland oo dhan",
  online_only: "Online oo keliya, meel kasta",

  weekly: "Toddobaadyada badankood",
  monthly: "Bishiiba mar",
  quarterly: "Dhowr bilood kasta",
  few_times_a_year: "Dhowr jeer sanadkii",
  when_funding_allows: "Marka maalgelintu ogolaato",

  year_round: "Sanadka oo dhan",
  term_time: "Waqtiga iskuulka oo keliya",
  seasonal: "Xilli ahaan",
  funding_dependent: "Inta maalgelintu jirto oo keliya",

  "getting back to work after a break": "ku noqoshada shaqada kadib nasasho",
  "support while I care for someone": "taageero inta aan qof daryeelayo",
  "help as a new parent": "caawimo anigoo hooyo cusub ah",
  "starting my own business": "bilaabista ganacsigayga",
  "finding funding for my business": "helitaanka maalgelin ganacsigayga",
  "changing career": "beddelidda xirfaddayda",
  "finding work after graduating": "helitaanka shaqo kadib qalin-jabinta",
  "settling in Scotland": "degitaanka Scotland",
  "something near me in a rural area": "wax ii dhow oo miyi ah",
  "help when money is tight": "caawimo marka lacagtu yar tahay",
  "looking after my health": "daryeelka caafimaadkayga",
  "retraining for something new": "tababar cusub oo wax kale ah",
  "finding a job": "helitaanka shaqo",
  "learning computers and AI": "barashada kombiyuutarka iyo AI",
  "meeting people in my line of work": "la kulanka dadka xirfaddayda",
  "women's health support": "taageero caafimaadka haweenka",
  "a problem at work": "dhibaato ka jirta shaqada",
  "finding customers or contracts": "helitaanka macaamiil ama qandaraas",
  "practical help running my business": "caawimo wax ku ool ah oo ganacsiga ah",
  "starting a social enterprise": "bilaabista ganacsi bulsheed",
  "starting a community group": "bilaabista koox bulsheed",
  "getting my work seen": "in shaqadayda la arko",
  "having a say on things that affect me":
    "inaan ka hadlo waxyaabaha i saameeya",
  "research or innovation support": "taageero cilmi-baaris ama hal-abuur",
  "finding money for a course": "helitaanka lacag koorso",
  "meeting people near me": "la kulanka dadka ii dhow",
};

const ti: LabelTable = {
  charity: "ግብረ ሰናይ ትካል",
  social_enterprise: "ማሕበራዊ ትካል",
  public_body: "መንግስታዊ ትካል",
  business: "ንግዲ",
  network_or_group: "መርበብ ወይ ጉጅለ",
  college_or_university: "ኮሌጅ ወይ ዩኒቨርሲቲ",

  course_or_programme: "ትምህርቲ ወይ መደብ",
  grant_or_fund: "ሓገዝ ወይ ፈንድ",
  advice_or_one_to_one: "ምኽሪ ወይ ብሓደ ንሓደ",
  drop_in: "ብዘይ ቆጸራ ምእታው",
  event: "ኣጋጣሚ",
  mentoring: "ምምካር",

  free: "ነጻ",
  free_to_apply: "ምምልካት ነጻ እዩ",
  there_is_a_cost: "ክፍሊት ኣለዎ",

  in_person: "ብኣካል",
  online: "ኦንላይን",
  by_phone: "ብስልኪ",
  evenings_or_weekends: "ምሸት ወይ ቀዳመ ሰንበት",

  any_woman: "ዝኾነት ጓል ኣንስተይቲ",
  women_returning_to_work: "ናብ ስራሕ ዝምለሳ ደቂ ኣንስትዮ",
  carers: "ተኸናኸንቲ",
  single_parents: "በይኖም ዘዕብዩ ወለዲ",
  survivors_of_abuse: "ካብ ጐነጽ ዝደሓና ደቂ ኣንስትዮ",
  refugees_and_new_scots: "ስደተኛታትን ናብ ስኮትላንድ ሓደስቲ ዝመጻን",
  disabled_women: "ስንኩላት ደቂ ኣንስትዮ",
  women_on_low_income: "ትሑት እቶት ዘለወን ደቂ ኣንስትዮ",
  young_women: "መንእሰያት ደቂ ኣንስትዮ፡ ካብ 16 ክሳብ 25",
  women_over_50: "ልዕሊ 50 ዓመት ዝዕድመአን ደቂ ኣንስትዮ",
  women_leaving_prison: "ካብ ቤት ማእሰርቲ ዝወጻ ደቂ ኣንስትዮ",

  one_area: "ሓደ ከተማ ወይ ከባቢ",
  local_authority: "ሓደ ናይ ከባቢ ምምሕዳር",
  several_areas: "ብዙሓት ከባቢታት",
  scotland_wide: "ብምሉኡ ስኮትላንድ",
  online_only: "ኦንላይን ጥራይ፡ ካብ ዝኾነ ቦታ",

  weekly: "መብዛሕትኡ ሰሙን",
  monthly: "ወርሓዊ",
  quarterly: "ኣብ ነፍሲ ወከፍ ውሑዳት ኣዋርሕ",
  few_times_a_year: "ኣብ ዓመት ውሑዳት ግዜ",
  when_funding_allows: "ባጀት ምስ ዘፍቅድ",

  year_round: "ምሉእ ዓመት",
  term_time: "ናይ ትምህርቲ ግዜ ጥራይ",
  seasonal: "ወቕታዊ",
  funding_dependent: "ባጀት ክሳብ ዘሎ ጥራይ",

  "getting back to work after a break": "ድሕሪ ዕረፍቲ ናብ ስራሕ ምምላስ",
  "support while I care for someone": "ንሓደ ሰብ እናተኸናኸንኩ ደገፍ",
  "help as a new parent": "ሓዳስ ኣደ ኮይነ ሓገዝ",
  "starting my own business": "ናተይ ንግዲ ምጅማር",
  "finding funding for my business": "ንንግደይ ገንዘብ ምርካብ",
  "changing career": "ሞያ ምቕያር",
  "finding work after graduating": "ድሕሪ ምምራቕ ስራሕ ምርካብ",
  "settling in Scotland": "ኣብ ስኮትላንድ ምጥያስ",
  "something near me in a rural area": "ኣብ ገጠር ኣብ ጥቓይ ዘሎ ነገር",
  "help when money is tight": "ገንዘብ ምስ ዝጽብብ ሓገዝ",
  "looking after my health": "ጥዕናይ ምክንኻን",
  "retraining for something new": "ሓድሽ ነገር ንምስራሕ ስልጠና",
  "finding a job": "ስራሕ ምርካብ",
  "learning computers and AI": "ኮምፒተርን AIን ምምሃር",
  "meeting people in my line of work": "ኣብ ሞያይ ዘለዉ ሰባት ምርኻብ",
  "women's health support": "ናይ ደቂ ኣንስትዮ ጥዕና ደገፍ",
  "a problem at work": "ኣብ ስራሕ ዘጋጠመ ጸገም",
  "finding customers or contracts": "ዓማዊል ወይ ውዕል ምርካብ",
  "practical help running my business": "ንግዲ ኣብ ምምራሕ ግብራዊ ሓገዝ",
  "starting a social enterprise": "ማሕበራዊ ትካል ምጅማር",
  "starting a community group": "ናይ ሕብረተሰብ ጉጅለ ምጅማር",
  "getting my work seen": "ስራሐይ ክረአ",
  "having a say on things that affect me": "ኣብ ዝጸልወኒ ነገራት ድምጺ ክህልወኒ",
  "research or innovation support": "ናይ መጽናዕቲ ወይ ምህዞ ደገፍ",
  "finding money for a course": "ንትምህርቲ ገንዘብ ምርካብ",
  "meeting people near me": "ኣብ ጥቓይ ዘለዉ ሰባት ምርኻብ",
};

export const LABELS: Record<string, LabelTable> = {
  gd,
  sco,
  pl,
  uk,
  ro,
  ar,
  ur,
  pa,
  zh,
  so,
  ti,
};
