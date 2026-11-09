/**
 * The privacy policy and the terms, as far as it is safe to translate them.
 *
 * WHAT IS HERE: the plain-words lead under each title, and every section
 * heading. That is enough for a woman to see what the document covers, find
 * the part she cares about, and know that it exists.
 *
 * WHAT IS NOT HERE: the paragraphs. They stay in English, under a notice in
 * her own language saying so and pointing at a person she can ask.
 *
 * WHY THE BODIES ARE NOT TRANSLATED YET
 *
 * Not squeamishness about legal text — the opposite. design/legal.ts has
 * `updated: null` on both documents, which in that file means no reviewed
 * wording exists, and its header lists what a reviewer still has to supply.
 * Three of those are not stylistic:
 *
 *   * The retention periods are proposals. Nothing in this codebase deletes
 *     anything on a schedule; there is no retention job. The English already
 *     promises something the software does not do.
 *   * The storage sentence says the United Kingdom or the EEA, and the
 *     header flags that this is unconfirmed for this Supabase project.
 *   * There is no postal address for the controller, which UK GDPR Article
 *     13 requires.
 *
 * Translating that into eleven languages would take statements the file
 * itself marks as possibly untrue and multiply them by eleven, on the one
 * document that tells a woman what happens to what she types. A wrong
 * promise about where her data lives is worse in her own language than in
 * English, because she is likelier to believe she has understood it.
 *
 * So the headings are translated, the notice is honest, and the paragraphs
 * wait for the approved English. The mechanism below is ready for them: add
 * a `body` array in the same order as the English and the page will use it.
 * `npm run check:i18n` fails if a heading is reworded in design/legal.ts and
 * left behind here, which is the drift that would otherwise go unnoticed.
 *
 * Machine-drafted, no native speaker, no legal review in any language
 * including English.
 */

/**
 * One section. `body` is optional and omitted everywhere today: a section
 * without it shows the English paragraphs under a translated heading.
 */
export type LegalSectionText = { title: string; body?: string[] };

/** One document: the plain-words lead, then the sections by English title. */
export type LegalText = {
  lead: string;
  sections: Record<string, LegalSectionText>;
};

export type LegalPair = { privacy: LegalText; terms: LegalText };

export const LEGAL: Record<string, LegalPair> = {
  pl: {
    privacy: {
      lead: "Co zbieramy, gdy korzystasz z tej strony, po co to zbieramy i czego nigdy z tym nie zrobimy.",
      sections: {
      "The short version": { title: "W skrócie" },
      "Who we are": { title: "Kim jesteśmy" },
      "If you only search": { title: "Jeśli tylko szukasz" },
      "If you make an account": { title: "Jeśli założysz konto" },
      "If you book a call": { title: "Jeśli umówisz rozmowę" },
      "Cookies": { title: "Pliki cookie" },
      "Who else can see it": { title: "Kto jeszcze to widzi" },
      "Where it is stored": { title: "Gdzie to jest przechowywane" },
      "How long we keep things": { title: "Jak długo to trzymamy" },
      "What we will never do": { title: "Czego nigdy nie zrobimy" },
      "AI, and how your words are read": { title: "AI i to, jak czytane są twoje słowa" },
      "Decisions about you": { title: "Decyzje o tobie" },
      "Your rights": { title: "Twoje prawa" },
      "Young people": { title: "Osoby młode" },
      "Changes to this policy": { title: "Zmiany w tej polityce" },
      "Complaints": { title: "Skargi" },
      },
    },
    terms: {
      lead: "Zasady korzystania z tej strony, dla kobiet, które tu szukają, i organizacji, które się tu zgłaszają.",
      sections: {
      "What this platform is": { title: "Czym jest ta platforma" },
      "This is not an emergency service": { title: "To nie jest służba ratunkowa" },
      "What we do not decide": { title: "Czego nie rozstrzygamy" },
      "The information here comes from other people": { title: "Informacje tutaj pochodzą od innych" },
      "Links to other sites": { title: "Linki do innych stron" },
      "Your account": { title: "Twoje konto" },
      "Listing as an organisation": { title: "Zgłoszenie jako organizacja" },
      "What we ask of organisations": { title: "Czego oczekujemy od organizacji" },
      "What we may remove": { title: "Co możemy usunąć" },
      "Availability": { title: "Dostępność" },
      "Where we stand on liability": { title: "Nasze stanowisko w sprawie odpowiedzialności" },
      "Changes to these terms": { title: "Zmiany w tych warunkach" },
      "Which law applies": { title: "Jakie prawo obowiązuje" },
      },
    },
  },
  ro: {
    privacy: {
      lead: "Ce colectăm când folosești acest site, de ce colectăm și ce nu vom face niciodată cu aceste date.",
      sections: {
      "The short version": { title: "Pe scurt" },
      "Who we are": { title: "Cine suntem" },
      "If you only search": { title: "Dacă doar cauți" },
      "If you make an account": { title: "Dacă îți faci cont" },
      "If you book a call": { title: "Dacă rezervi un apel" },
      "Cookies": { title: "Cookie-uri" },
      "Who else can see it": { title: "Cine altcineva vede" },
      "Where it is stored": { title: "Unde sunt stocate" },
      "How long we keep things": { title: "Cât timp păstrăm" },
      "What we will never do": { title: "Ce nu vom face niciodată" },
      "AI, and how your words are read": { title: "Inteligența artificială și cum îți sunt citite cuvintele" },
      "Decisions about you": { title: "Decizii despre tine" },
      "Your rights": { title: "Drepturile tale" },
      "Young people": { title: "Persoane tinere" },
      "Changes to this policy": { title: "Modificări ale acestei politici" },
      "Complaints": { title: "Reclamații" },
      },
    },
    terms: {
      lead: "Regulile de folosire a acestui site, pentru femeile care caută aici și pentru organizațiile înscrise.",
      sections: {
      "What this platform is": { title: "Ce este această platformă" },
      "This is not an emergency service": { title: "Acesta nu este un serviciu de urgență" },
      "What we do not decide": { title: "Ce nu decidem noi" },
      "The information here comes from other people": { title: "Informațiile de aici vin de la alții" },
      "Links to other sites": { title: "Legături către alte site-uri" },
      "Your account": { title: "Contul tău" },
      "Listing as an organisation": { title: "Înscrierea ca organizație" },
      "What we ask of organisations": { title: "Ce le cerem organizațiilor" },
      "What we may remove": { title: "Ce putem elimina" },
      "Availability": { title: "Disponibilitate" },
      "Where we stand on liability": { title: "Poziția noastră privind răspunderea" },
      "Changes to these terms": { title: "Modificări ale acestor termeni" },
      "Which law applies": { title: "Ce lege se aplică" },
      },
    },
  },
  uk: {
    privacy: {
      lead: "Що ми збираємо, коли ви користуєтеся цим сайтом, навіщо і чого ніколи з цим не зробимо.",
      sections: {
      "The short version": { title: "Коротко" },
      "Who we are": { title: "Хто ми" },
      "If you only search": { title: "Якщо ви лише шукаєте" },
      "If you make an account": { title: "Якщо ви створюєте обліковий запис" },
      "If you book a call": { title: "Якщо ви бронюєте розмову" },
      "Cookies": { title: "Файли cookie" },
      "Who else can see it": { title: "Хто ще це бачить" },
      "Where it is stored": { title: "Де це зберігається" },
      "How long we keep things": { title: "Скільки ми це зберігаємо" },
      "What we will never do": { title: "Чого ми ніколи не зробимо" },
      "AI, and how your words are read": { title: "Штучний інтелект і як читаються ваші слова" },
      "Decisions about you": { title: "Рішення щодо вас" },
      "Your rights": { title: "Ваші права" },
      "Young people": { title: "Молоді люди" },
      "Changes to this policy": { title: "Зміни до цієї політики" },
      "Complaints": { title: "Скарги" },
      },
    },
    terms: {
      lead: "Правила користування цим сайтом — для жінок, які тут шукають, і для організацій, які тут представлені.",
      sections: {
      "What this platform is": { title: "Що це за платформа" },
      "This is not an emergency service": { title: "Це не служба екстреної допомоги" },
      "What we do not decide": { title: "Чого ми не вирішуємо" },
      "The information here comes from other people": { title: "Інформація тут надходить від інших" },
      "Links to other sites": { title: "Посилання на інші сайти" },
      "Your account": { title: "Ваш обліковий запис" },
      "Listing as an organisation": { title: "Розміщення як організація" },
      "What we ask of organisations": { title: "Чого ми очікуємо від організацій" },
      "What we may remove": { title: "Що ми можемо видалити" },
      "Availability": { title: "Доступність" },
      "Where we stand on liability": { title: "Наша позиція щодо відповідальності" },
      "Changes to these terms": { title: "Зміни до цих умов" },
      "Which law applies": { title: "Яке право застосовується" },
      },
    },
  },
  gd: {
    privacy: {
      lead: "Na bhios sinn a' cruinneachadh nuair a chleachdas tu an làrach seo, carson, agus na nach dèan sinn a-chaoidh leis.",
      sections: {
      "The short version": { title: "An tionndadh goirid" },
      "Who we are": { title: "Cò sinne" },
      "If you only search": { title: "Ma nì thu lorg a-mhàin" },
      "If you make an account": { title: "Ma nì thu cunntas" },
      "If you book a call": { title: "Ma chuireas tu gairm air dòigh" },
      "Cookies": { title: "Briosgaidean" },
      "Who else can see it": { title: "Cò eile a chì e" },
      "Where it is stored": { title: "Càite a bheil e ga stòradh" },
      "How long we keep things": { title: "Dè cho fada 's a chumas sinn rudan" },
      "What we will never do": { title: "Na nach dèan sinn a-chaoidh" },
      "AI, and how your words are read": { title: "IF, agus mar a thathar a' leughadh nam faclan agad" },
      "Decisions about you": { title: "Co-dhùnaidhean mud dheidhinn" },
      "Your rights": { title: "Do chòraichean" },
      "Young people": { title: "Daoine òga" },
      "Changes to this policy": { title: "Atharrachaidhean air a' phoileasaidh seo" },
      "Complaints": { title: "Gearanan" },
      },
    },
    terms: {
      lead: "Na riaghailtean airson an làrach seo a chleachdadh, dha na boireannaich a nì lorg oirre agus dha na buidhnean a chlàraicheas oirre.",
      sections: {
      "What this platform is": { title: "Dè th' anns an àrd-ùrlar seo" },
      "This is not an emergency service": { title: "Chan e seirbheis èiginn a tha seo" },
      "What we do not decide": { title: "Na nach co-dhùin sinn" },
      "The information here comes from other people": { title: "Tha am fiosrachadh an seo a' tighinn bho dhaoine eile" },
      "Links to other sites": { title: "Ceanglaichean gu làraichean eile" },
      "Your account": { title: "An cunntas agad" },
      "Listing as an organisation": { title: "A' clàradh mar bhuidheann" },
      "What we ask of organisations": { title: "Na dh'iarras sinn air buidhnean" },
      "What we may remove": { title: "Na dh'fhaodas sinn a thoirt air falbh" },
      "Availability": { title: "Ruigsinneachd" },
      "Where we stand on liability": { title: "Far a bheil sinn a thaobh uallaich" },
      "Changes to these terms": { title: "Atharrachaidhean air na cumhaichean seo" },
      "Which law applies": { title: "Dè an lagh a tha an sàs" },
      },
    },
  },
  sco: {
    privacy: {
      lead: "Whit we collect whan ye uise this site, hou we collect it, and whit we'll niver dae wi it.",
      sections: {
      "The short version": { title: "The short version" },
      "Who we are": { title: "Wha we are" },
      "If you only search": { title: "Gin ye ainly sairch" },
      "If you make an account": { title: "Gin ye mak an accoont" },
      "If you book a call": { title: "Gin ye buik a caw" },
      "Cookies": { title: "Cookies" },
      "Who else can see it": { title: "Wha else can see it" },
      "Where it is stored": { title: "Whaur it's stored" },
      "How long we keep things": { title: "Hou lang we keep things" },
      "What we will never do": { title: "Whit we'll niver dae" },
      "AI, and how your words are read": { title: "AI, and hou yer wirds are read" },
      "Decisions about you": { title: "Decisions aboot ye" },
      "Your rights": { title: "Yer richts" },
      "Young people": { title: "Young fowk" },
      "Changes to this policy": { title: "Chynges tae this policy" },
      "Complaints": { title: "Complaints" },
      },
    },
    terms: {
      lead: "The rules for uisin this site, for the weemen that sairch it and the organisations that leet on it.",
      sections: {
      "What this platform is": { title: "Whit this platform is" },
      "This is not an emergency service": { title: "This isna an emergency service" },
      "What we do not decide": { title: "Whit we dinna decide" },
      "The information here comes from other people": { title: "The information here comes frae ither fowk" },
      "Links to other sites": { title: "Links tae ither sites" },
      "Your account": { title: "Yer accoont" },
      "Listing as an organisation": { title: "Leetin as an organisation" },
      "What we ask of organisations": { title: "Whit we ask o organisations" },
      "What we may remove": { title: "Whit we micht remove" },
      "Availability": { title: "Availability" },
      "Where we stand on liability": { title: "Whaur we staund on liability" },
      "Changes to these terms": { title: "Chynges tae thir terms" },
      "Which law applies": { title: "Whilk law applies" },
      },
    },
  },
  ar: {
    privacy: {
      lead: "ما نجمعه عند استخدامك هذا الموقع، ولماذا نجمعه، وما لن نفعله به أبداً.",
      sections: {
      "The short version": { title: "باختصار" },
      "Who we are": { title: "من نحن" },
      "If you only search": { title: "إن كنتِ تبحثين فقط" },
      "If you make an account": { title: "إن أنشأتِ حساباً" },
      "If you book a call": { title: "إن حجزتِ مكالمة" },
      "Cookies": { title: "ملفات تعريف الارتباط" },
      "Who else can see it": { title: "من غيرنا يمكنه رؤيته" },
      "Where it is stored": { title: "أين يُخزَّن" },
      "How long we keep things": { title: "كم نحتفظ بالأشياء" },
      "What we will never do": { title: "ما لن نفعله أبداً" },
      "AI, and how your words are read": { title: "الذكاء الاصطناعي، وكيف تُقرأ كلماتك" },
      "Decisions about you": { title: "القرارات المتعلقة بك" },
      "Your rights": { title: "حقوقك" },
      "Young people": { title: "الشابات" },
      "Changes to this policy": { title: "تغييرات على هذه السياسة" },
      "Complaints": { title: "الشكاوى" },
      },
    },
    terms: {
      lead: "قواعد استخدام هذا الموقع، للنساء اللواتي يبحثن فيه وللجهات المدرجة عليه.",
      sections: {
      "What this platform is": { title: "ما هي هذه المنصة" },
      "This is not an emergency service": { title: "هذه ليست خدمة طوارئ" },
      "What we do not decide": { title: "ما الذي لا نقرره" },
      "The information here comes from other people": { title: "المعلومات هنا تأتي من آخرين" },
      "Links to other sites": { title: "روابط إلى مواقع أخرى" },
      "Your account": { title: "حسابك" },
      "Listing as an organisation": { title: "الإدراج كجهة" },
      "What we ask of organisations": { title: "ما نطلبه من الجهات" },
      "What we may remove": { title: "ما قد نحذفه" },
      "Availability": { title: "التوفّر" },
      "Where we stand on liability": { title: "موقفنا من المسؤولية" },
      "Changes to these terms": { title: "تغييرات على هذه الشروط" },
      "Which law applies": { title: "أي قانون ينطبق" },
      },
    },
  },
  ur: {
    privacy: {
      lead: "جب آپ یہ سائٹ استعمال کرتی ہیں تو ہم کیا جمع کرتے ہیں، کیوں، اور اس کے ساتھ ہم کبھی کیا نہیں کریں گے۔",
      sections: {
      "The short version": { title: "مختصراً" },
      "Who we are": { title: "ہم کون ہیں" },
      "If you only search": { title: "اگر آپ صرف تلاش کرتی ہیں" },
      "If you make an account": { title: "اگر آپ اکاؤنٹ بناتی ہیں" },
      "If you book a call": { title: "اگر آپ کال بُک کرتی ہیں" },
      "Cookies": { title: "کوکیز" },
      "Who else can see it": { title: "اور کون یہ دیکھ سکتا ہے" },
      "Where it is stored": { title: "یہ کہاں محفوظ ہوتا ہے" },
      "How long we keep things": { title: "ہم چیزیں کتنی دیر رکھتے ہیں" },
      "What we will never do": { title: "ہم کبھی کیا نہیں کریں گے" },
      "AI, and how your words are read": { title: "اے آئی، اور آپ کے الفاظ کیسے پڑھے جاتے ہیں" },
      "Decisions about you": { title: "آپ کے بارے میں فیصلے" },
      "Your rights": { title: "آپ کے حقوق" },
      "Young people": { title: "نوجوان افراد" },
      "Changes to this policy": { title: "اس پالیسی میں تبدیلیاں" },
      "Complaints": { title: "شکایات" },
      },
    },
    terms: {
      lead: "اس سائٹ کے استعمال کے اصول، ان خواتین کے لیے جو یہاں تلاش کرتی ہیں اور ان اداروں کے لیے جو یہاں درج ہیں۔",
      sections: {
      "What this platform is": { title: "یہ پلیٹ فارم کیا ہے" },
      "This is not an emergency service": { title: "یہ ہنگامی سروس نہیں ہے" },
      "What we do not decide": { title: "ہم کیا فیصلہ نہیں کرتے" },
      "The information here comes from other people": { title: "یہاں کی معلومات دوسروں سے آتی ہے" },
      "Links to other sites": { title: "دوسری سائٹس کے لنکس" },
      "Your account": { title: "آپ کا اکاؤنٹ" },
      "Listing as an organisation": { title: "بطور ادارہ درج ہونا" },
      "What we ask of organisations": { title: "ہم اداروں سے کیا چاہتے ہیں" },
      "What we may remove": { title: "ہم کیا ہٹا سکتے ہیں" },
      "Availability": { title: "دستیابی" },
      "Where we stand on liability": { title: "ذمہ داری کے بارے میں ہمارا مؤقف" },
      "Changes to these terms": { title: "ان شرائط میں تبدیلیاں" },
      "Which law applies": { title: "کون سا قانون لاگو ہوتا ہے" },
      },
    },
  },
  pa: {
    privacy: {
      lead: "ਜਦੋਂ ਤੁਸੀਂ ਇਹ ਸਾਈਟ ਵਰਤਦੇ ਹੋ ਤਾਂ ਅਸੀਂ ਕੀ ਇਕੱਠਾ ਕਰਦੇ ਹਾਂ, ਕਿਉਂ, ਤੇ ਉਸ ਨਾਲ ਅਸੀਂ ਕਦੇ ਕੀ ਨਹੀਂ ਕਰਾਂਗੇ।",
      sections: {
      "The short version": { title: "ਸੰਖੇਪ ਵਿੱਚ" },
      "Who we are": { title: "ਅਸੀਂ ਕੌਣ ਹਾਂ" },
      "If you only search": { title: "ਜੇ ਤੁਸੀਂ ਸਿਰਫ਼ ਲੱਭਦੇ ਹੋ" },
      "If you make an account": { title: "ਜੇ ਤੁਸੀਂ ਖਾਤਾ ਬਣਾਉਂਦੇ ਹੋ" },
      "If you book a call": { title: "ਜੇ ਤੁਸੀਂ ਕਾਲ ਬੁੱਕ ਕਰਦੇ ਹੋ" },
      "Cookies": { title: "ਕੂਕੀਜ਼" },
      "Who else can see it": { title: "ਹੋਰ ਕੌਣ ਇਹ ਵੇਖ ਸਕਦਾ ਹੈ" },
      "Where it is stored": { title: "ਇਹ ਕਿੱਥੇ ਸੰਭਾਲਿਆ ਜਾਂਦਾ ਹੈ" },
      "How long we keep things": { title: "ਅਸੀਂ ਚੀਜ਼ਾਂ ਕਿੰਨੀ ਦੇਰ ਰੱਖਦੇ ਹਾਂ" },
      "What we will never do": { title: "ਅਸੀਂ ਕਦੇ ਕੀ ਨਹੀਂ ਕਰਾਂਗੇ" },
      "AI, and how your words are read": { title: "ਏਆਈ, ਤੇ ਤੁਹਾਡੇ ਸ਼ਬਦ ਕਿਵੇਂ ਪੜ੍ਹੇ ਜਾਂਦੇ ਹਨ" },
      "Decisions about you": { title: "ਤੁਹਾਡੇ ਬਾਰੇ ਫ਼ੈਸਲੇ" },
      "Your rights": { title: "ਤੁਹਾਡੇ ਹੱਕ" },
      "Young people": { title: "ਨੌਜਵਾਨ ਲੋਕ" },
      "Changes to this policy": { title: "ਇਸ ਨੀਤੀ ਵਿੱਚ ਤਬਦੀਲੀਆਂ" },
      "Complaints": { title: "ਸ਼ਿਕਾਇਤਾਂ" },
      },
    },
    terms: {
      lead: "ਇਸ ਸਾਈਟ ਦੀ ਵਰਤੋਂ ਦੇ ਨਿਯਮ, ਉਨ੍ਹਾਂ ਔਰਤਾਂ ਲਈ ਜੋ ਇੱਥੇ ਲੱਭਦੀਆਂ ਹਨ ਤੇ ਉਨ੍ਹਾਂ ਅਦਾਰਿਆਂ ਲਈ ਜੋ ਇੱਥੇ ਦਰਜ ਹਨ।",
      sections: {
      "What this platform is": { title: "ਇਹ ਪਲੇਟਫਾਰਮ ਕੀ ਹੈ" },
      "This is not an emergency service": { title: "ਇਹ ਐਮਰਜੈਂਸੀ ਸੇਵਾ ਨਹੀਂ ਹੈ" },
      "What we do not decide": { title: "ਅਸੀਂ ਕੀ ਤੈਅ ਨਹੀਂ ਕਰਦੇ" },
      "The information here comes from other people": { title: "ਇੱਥੇ ਦੀ ਜਾਣਕਾਰੀ ਹੋਰਾਂ ਤੋਂ ਆਉਂਦੀ ਹੈ" },
      "Links to other sites": { title: "ਹੋਰ ਸਾਈਟਾਂ ਦੇ ਲਿੰਕ" },
      "Your account": { title: "ਤੁਹਾਡਾ ਖਾਤਾ" },
      "Listing as an organisation": { title: "ਅਦਾਰੇ ਵਜੋਂ ਦਰਜ ਹੋਣਾ" },
      "What we ask of organisations": { title: "ਅਸੀਂ ਅਦਾਰਿਆਂ ਤੋਂ ਕੀ ਚਾਹੁੰਦੇ ਹਾਂ" },
      "What we may remove": { title: "ਅਸੀਂ ਕੀ ਹਟਾ ਸਕਦੇ ਹਾਂ" },
      "Availability": { title: "ਉਪਲਬਧਤਾ" },
      "Where we stand on liability": { title: "ਜ਼ਿੰਮੇਵਾਰੀ ਬਾਰੇ ਸਾਡਾ ਪੱਖ" },
      "Changes to these terms": { title: "ਇਨ੍ਹਾਂ ਸ਼ਰਤਾਂ ਵਿੱਚ ਤਬਦੀਲੀਆਂ" },
      "Which law applies": { title: "ਕਿਹੜਾ ਕਾਨੂੰਨ ਲਾਗੂ ਹੁੰਦਾ ਹੈ" },
      },
    },
  },
  zh: {
    privacy: {
      lead: "你使用本站时我们收集什么、为什么收集，以及我们绝不会拿它做什么。",
      sections: {
      "The short version": { title: "简短版本" },
      "Who we are": { title: "我们是谁" },
      "If you only search": { title: "如果你只是搜索" },
      "If you make an account": { title: "如果你创建账户" },
      "If you book a call": { title: "如果你预约通话" },
      "Cookies": { title: "Cookie" },
      "Who else can see it": { title: "还有谁能看到" },
      "Where it is stored": { title: "存储在哪里" },
      "How long we keep things": { title: "我们保存多久" },
      "What we will never do": { title: "我们绝不会做的事" },
      "AI, and how your words are read": { title: "人工智能，以及你的文字如何被读取" },
      "Decisions about you": { title: "关于你的决定" },
      "Your rights": { title: "你的权利" },
      "Young people": { title: "年轻人" },
      "Changes to this policy": { title: "本政策的变更" },
      "Complaints": { title: "投诉" },
      },
    },
    terms: {
      lead: "使用本站的规则，适用于在此搜索的女性和在此登记的机构。",
      sections: {
      "What this platform is": { title: "这个平台是什么" },
      "This is not an emergency service": { title: "这不是紧急服务" },
      "What we do not decide": { title: "我们不决定什么" },
      "The information here comes from other people": { title: "这里的信息来自他人" },
      "Links to other sites": { title: "指向其他网站的链接" },
      "Your account": { title: "你的账户" },
      "Listing as an organisation": { title: "作为机构登记" },
      "What we ask of organisations": { title: "我们对机构的要求" },
      "What we may remove": { title: "我们可能移除什么" },
      "Availability": { title: "可用性" },
      "Where we stand on liability": { title: "我们在责任上的立场" },
      "Changes to these terms": { title: "本条款的变更" },
      "Which law applies": { title: "适用何种法律" },
      },
    },
  },
  so: {
    privacy: {
      lead: "Waxa aan uruurinno marka aad goobtan isticmaasho, sababta, iyo waxa aanan weligeen ku samayn doonin.",
      sections: {
      "The short version": { title: "Nooca gaaban" },
      "Who we are": { title: "Cidda aan nahay" },
      "If you only search": { title: "Haddii aad kaliya raadinayso" },
      "If you make an account": { title: "Haddii aad xisaab samaysato" },
      "If you book a call": { title: "Haddii aad wicitaan ballansato" },
      "Cookies": { title: "Cookies" },
      "Who else can see it": { title: "Cidda kale ee arki karta" },
      "Where it is stored": { title: "Meesha lagu kaydiyo" },
      "How long we keep things": { title: "Inta aan waxyaabaha haynno" },
      "What we will never do": { title: "Waxa aanan weligeen samayn doonin" },
      "AI, and how your words are read": { title: "AI, iyo sida erayadaada loo akhriyo" },
      "Decisions about you": { title: "Go'aamada kugu saabsan" },
      "Your rights": { title: "Xuquuqdaada" },
      "Young people": { title: "Dadka dhallinyarada ah" },
      "Changes to this policy": { title: "Isbeddelada siyaasaddan" },
      "Complaints": { title: "Cabashooyinka" },
      },
    },
    terms: {
      lead: "Xeerarka isticmaalka goobtan, haweenka halkan raadiya iyo hay'adaha halkan ku qoran.",
      sections: {
      "What this platform is": { title: "Waxa uu barahani yahay" },
      "This is not an emergency service": { title: "Kani ma aha adeeg degdeg ah" },
      "What we do not decide": { title: "Waxa aanan go'aaminnin" },
      "The information here comes from other people": { title: "Macluumaadka halkan wuxuu ka yimaadaa dad kale" },
      "Links to other sites": { title: "Xiriirinta goobo kale" },
      "Your account": { title: "Xisaabtaada" },
      "Listing as an organisation": { title: "Ku qorista hay'ad ahaan" },
      "What we ask of organisations": { title: "Waxa aan ka codsanno hay'adaha" },
      "What we may remove": { title: "Waxa aan qaadi karno" },
      "Availability": { title: "Helitaanka" },
      "Where we stand on liability": { title: "Mowqifkayaga masuuliyadda" },
      "Changes to these terms": { title: "Isbeddelada shuruudahan" },
      "Which law applies": { title: "Sharciga khuseeya" },
      },
    },
  },
  ti: {
    privacy: {
      lead: "ነዚ መርበብ ክትጥቀምሉ ከለኺ እንታይ ንእክብ፡ ስለምንታይ፡ ከምኡ ድማ እንታይ ፈጺምና ከም ዘይንገብረሉ።",
      sections: {
      "The short version": { title: "ሓጺር ትሕዝቶ" },
      "Who we are": { title: "መን ኢና" },
      "If you only search": { title: "ምድላይ ጥራይ እንተ ገይርኪ" },
      "If you make an account": { title: "ኣካውንት እንተ ፈጢርኪ" },
      "If you book a call": { title: "ጻውዒት እንተ ሒዝኪ" },
      "Cookies": { title: "ኩኪታት" },
      "Who else can see it": { title: "ካልእ መን ክርእዮ ይኽእል" },
      "Where it is stored": { title: "ኣበይ ይዕቀብ" },
      "How long we keep things": { title: "ክሳብ ክንደይ ንዕቅቦ" },
      "What we will never do": { title: "ፈጺምና ዘይንገብሮ" },
      "AI, and how your words are read": { title: "AI፡ ከምኡ ድማ ቃላትኪ ብኸመይ ከም ዝንበባ" },
      "Decisions about you": { title: "ብዛዕባኺ ዝውሰኑ ውሳነታት" },
      "Your rights": { title: "መሰላትኪ" },
      "Young people": { title: "መንእሰያት" },
      "Changes to this policy": { title: "ለውጥታት ኣብዚ ፖሊሲ" },
      "Complaints": { title: "ጥርዓናት" },
      },
    },
    terms: {
      lead: "ናይዚ መርበብ ናይ ኣጠቓቕማ ሕግታት፡ ነተን ኣብዚ ዝደልያ ደቂ ኣንስትዮን ነቶም ኣብዚ ዝተመዝገቡ ትካላትን።",
      sections: {
      "What this platform is": { title: "እዚ መድረኽ እንታይ እዩ" },
      "This is not an emergency service": { title: "እዚ ናይ ህጹጽ ኩነታት ኣገልግሎት ኣይኮነን" },
      "What we do not decide": { title: "ንሕና ዘይንውስኖ" },
      "The information here comes from other people": { title: "እቲ ኣብዚ ዘሎ ሓበሬታ ካብ ካልኦት እዩ ዝመጽእ" },
      "Links to other sites": { title: "ናብ ካልኦት መርበባት ዝወስዱ መላግቦታት" },
      "Your account": { title: "ኣካውንትኺ" },
      "Listing as an organisation": { title: "ከም ትካል ምምዝጋብ" },
      "What we ask of organisations": { title: "ካብ ትካላት እንሓቶ" },
      "What we may remove": { title: "እንታይ ከነውርድ ንኽእል" },
      "Availability": { title: "ተበጻሕነት" },
      "Where we stand on liability": { title: "ብዛዕባ ተሓታትነት ዘሎና ኣቋውማ" },
      "Changes to these terms": { title: "ለውጥታት ኣብዚ ውዕል" },
      "Which law applies": { title: "ኣየናይ ሕጊ ይምልከት" },
      },
    },
  },
};
