/**
 * The handful of sentences whose wording changes with a number.
 *
 * WHY THESE ARE NOT IN messages.ts
 *
 * A key there holds one string. "1 service supports this" and "2 services
 * support this" are two strings in English, three in Romanian and four in
 * Polish and Arabic, and no amount of care with a single string expresses
 * that. So these six get a shape of their own: a set of forms per language,
 * picked at render time by Intl.PluralRules, which already knows each
 * language's rules and is in every browser this platform supports.
 *
 * THE FORMS
 *
 * Intl names them zero, one, two, few, many and other. Which of those a
 * language uses is not our choice and not a style decision — English uses
 * one and other; Polish uses one, few, many and other; Arabic uses all six.
 * Only `other` is required here. A form a language needs and does not have
 * falls back to `other`, which is wrong-sounding rather than broken, and a
 * whole language missing a key falls back to English.
 *
 * "#" IS THE NUMBER. Same placeholder as messages.ts, replaced with the
 * count formatted for her locale, so Punjabi and Arabic can render their own
 * digits if that is what Intl decides they do.
 *
 * WHAT TO CHECK FIRST. The Slavic forms are the ones most likely to be
 * wrong: Polish and Ukrainian both take `few` for 2 to 4 and `many` for 5
 * and up, with a rule for the teens that is easy to state and easy to get
 * backwards. Arabic's six forms were written to the rule rather than to an
 * ear. All of it is machine-drafted, the same caveat as everywhere else.
 *
 * ONE DELIBERATE REWORDING. The no-match screen used to read "3 services
 * support this, and 2 of them work by phone or online" as a single clause.
 * A comma-joined fragment is the hardest thing in a translation file to get
 * right — the second half has to agree with the first in languages that
 * inflect — so it is two sentences now, in English too.
 */

export type PluralKey =
  | "count.servicesSupport"
  | "count.ofThoseOnline"
  | "count.servicesOnline"
  | "count.showThose"
  | "count.thingsSaved"
  | "count.organisations"
  | "count.thingsOpen"
  | "count.showingSteps"
  | "count.withFilters"
  | "count.closesInDays"
  | "count.organisationsFound"
  | "count.organisationsWork";

/** `other` is required; the rest are filled in where a language uses them. */
export type PluralForms = {
  zero?: string;
  one?: string;
  two?: string;
  few?: string;
  many?: string;
  other: string;
};

type Table = Partial<Record<PluralKey, PluralForms>>;

const en: Record<PluralKey, PluralForms> = {
  "count.organisationsFound": {
    one: "# organisation found",
    other: "# organisations found",
  },
  "count.organisationsWork": {
    one: "# organisation across Scotland works on this.",
    other: "# organisations across Scotland work on this.",
  },
  "count.closesInDays": { one: "Closes in # day", other: "Closes in # days" },
  "count.showingSteps": {
    one: "Showing # next step.",
    other: "Showing # next steps.",
  },
  "count.withFilters": { one: "With # filter.", other: "With # filters." },
  "count.servicesSupport": {
    one: "# service supports this.",
    other: "# services support this.",
  },
  "count.ofThoseOnline": {
    one: "# of them works by phone or online.",
    other: "# of them work by phone or online.",
  },
  "count.servicesOnline": {
    one: "# service works by phone or online, wherever you are.",
    other: "# services work by phone or online, wherever you are.",
  },
  "count.showThose": { one: "Show me that one", other: "Show me those #" },
  "count.thingsSaved": {
    one: "# thing saved",
    other: "# things saved",
  },
  "count.organisations": { one: "# organisation", other: "# organisations" },
  "count.thingsOpen": { one: "# thing open", other: "# things open" },
};

const gd: Table = {
  "count.organisationsFound": {
    one: "# bhuidheann air a lorg",
    two: "# bhuidheann air an lorg",
    few: "# buidhnean air an lorg",
    other: "# buidhnean air an lorg",
  },
  "count.organisationsWork": {
    one: "Tha # bhuidheann air feadh Alba ag obair air seo.",
    two: "Tha # bhuidheann air feadh Alba ag obair air seo.",
    few: "Tha # buidhnean air feadh Alba ag obair air seo.",
    other: "Tha # buidhnean air feadh Alba ag obair air seo.",
  },
  "count.closesInDays": {
    one: "A' dùnadh an ceann # latha",
    two: "A' dùnadh an ceann # latha",
    few: "A' dùnadh an ceann # làithean",
    other: "A' dùnadh an ceann # làithean",
  },
  "count.showingSteps": {
    one: "A' sealltainn # ath-cheum.",
    two: "A' sealltainn # ath-cheum.",
    few: "A' sealltainn # ath-cheuman.",
    other: "A' sealltainn # ath-cheuman.",
  },
  "count.withFilters": {
    one: "Le # chriathrag.",
    two: "Le # chriathrag.",
    few: "Le # criathragan.",
    other: "Le # criathragan.",
  },
  "count.servicesSupport": {
    one: "Tha # sheirbheis a' cuideachadh le seo.",
    two: "Tha # sheirbheis a' cuideachadh le seo.",
    few: "Tha # seirbheisean a' cuideachadh le seo.",
    other: "Tha # seirbheisean a' cuideachadh le seo.",
  },
  "count.ofThoseOnline": {
    one: "Tha # dhiubh ag obair air a' fòn no air-loidhne.",
    two: "Tha # dhiubh ag obair air a' fòn no air-loidhne.",
    few: "Tha # dhiubh ag obair air a' fòn no air-loidhne.",
    other: "Tha # dhiubh ag obair air a' fòn no air-loidhne.",
  },
  "count.servicesOnline": {
    one: "Tha # sheirbheis ag obair air a' fòn no air-loidhne, ge bith càite a bheil thu.",
    two: "Tha # sheirbheis ag obair air a' fòn no air-loidhne, ge bith càite a bheil thu.",
    few: "Tha # seirbheisean ag obair air a' fòn no air-loidhne, ge bith càite a bheil thu.",
    other: "Tha # seirbheisean ag obair air a' fòn no air-loidhne, ge bith càite a bheil thu.",
  },
  "count.showThose": {
    one: "Seall dhomh am fear sin",
    other: "Seall dhomh an # sin",
  },
  "count.thingsSaved": {
    one: "# rud air a shàbhaladh",
    two: "# rud air an sàbhaladh",
    few: "# rudan air an sàbhaladh",
    other: "# rudan air an sàbhaladh",
  },
  "count.organisations": {
    one: "# bhuidheann",
    two: "# bhuidheann",
    few: "# buidhnean",
    other: "# buidhnean",
  },
  "count.thingsOpen": {
    one: "# rud fosgailte",
    two: "# rud fosgailte",
    few: "# rudan fosgailte",
    other: "# rudan fosgailte",
  },
};

const sco: Table = {
  "count.organisationsFound": { one: "# organisation fund", other: "# organisations fund" },
  "count.organisationsWork": {
    one: "# organisation ower Scotland warks on this.",
    other: "# organisations ower Scotland wark on this.",
  },
  "count.closesInDays": { one: "Closes in # day", other: "Closes in # days" },
  "count.showingSteps": {
    one: "Shawin # neist step.",
    other: "Shawin # neist steps.",
  },
  "count.withFilters": { one: "Wi # filter.", other: "Wi # filters." },
  "count.servicesSupport": {
    one: "# service supports this.",
    other: "# services support this.",
  },
  "count.ofThoseOnline": {
    one: "# o thaim warks by phone or online.",
    other: "# o thaim wark by phone or online.",
  },
  "count.servicesOnline": {
    one: "# service warks by phone or online, whaurivver ye are.",
    other: "# services wark by phone or online, whaurivver ye are.",
  },
  "count.showThose": { one: "Shaw me that ane", other: "Shaw me thae #" },
  "count.thingsSaved": { one: "# thing saved", other: "# things saved" },
  "count.organisations": { one: "# organisation", other: "# organisations" },
  "count.thingsOpen": { one: "# thing open", other: "# things open" },
};

const pl: Table = {
  "count.organisationsFound": {
    one: "Znaleziono # organizację",
    few: "Znaleziono # organizacje",
    many: "Znaleziono # organizacji",
    other: "Znaleziono # organizacje",
  },
  "count.organisationsWork": {
    one: "# organizacja w Szkocji zajmuje się tym.",
    few: "# organizacje w Szkocji zajmują się tym.",
    many: "# organizacji w Szkocji zajmuje się tym.",
    other: "# organizacje w Szkocji zajmują się tym.",
  },
  "count.closesInDays": {
    one: "Zamyka się za # dzień",
    few: "Zamyka się za # dni",
    many: "Zamyka się za # dni",
    other: "Zamyka się za # dni",
  },
  "count.showingSteps": {
    one: "Pokazujemy # kolejny krok.",
    few: "Pokazujemy # kolejne kroki.",
    many: "Pokazujemy # kolejnych kroków.",
    other: "Pokazujemy # kolejne kroki.",
  },
  "count.withFilters": {
    one: "Z # filtrem.",
    few: "Z # filtrami.",
    many: "Z # filtrami.",
    other: "Z # filtrami.",
  },
  "count.servicesSupport": {
    one: "# usługa dotyczy tego.",
    few: "# usługi dotyczą tego.",
    many: "# usług dotyczy tego.",
    other: "# usługi dotyczą tego.",
  },
  "count.ofThoseOnline": {
    one: "# z nich działa przez telefon lub online.",
    few: "# z nich działają przez telefon lub online.",
    many: "# z nich działa przez telefon lub online.",
    other: "# z nich działa przez telefon lub online.",
  },
  "count.servicesOnline": {
    one: "# usługa działa przez telefon lub online, gdziekolwiek jesteś.",
    few: "# usługi działają przez telefon lub online, gdziekolwiek jesteś.",
    many: "# usług działa przez telefon lub online, gdziekolwiek jesteś.",
    other: "# usługi działają przez telefon lub online, gdziekolwiek jesteś.",
  },
  "count.showThose": { one: "Pokaż mi tę jedną", other: "Pokaż mi te #" },
  "count.thingsSaved": {
    one: "# zapisana rzecz",
    few: "# zapisane rzeczy",
    many: "# zapisanych rzeczy",
    other: "# zapisane rzeczy",
  },
  "count.organisations": {
    one: "# organizacja",
    few: "# organizacje",
    many: "# organizacji",
    other: "# organizacje",
  },
  "count.thingsOpen": {
    one: "# otwarta propozycja",
    few: "# otwarte propozycje",
    many: "# otwartych propozycji",
    other: "# otwarte propozycje",
  },
};

const uk: Table = {
  "count.organisationsFound": {
    one: "Знайдено # організацію",
    few: "Знайдено # організації",
    many: "Знайдено # організацій",
    other: "Знайдено # організації",
  },
  "count.organisationsWork": {
    one: "# організація в Шотландії працює над цим.",
    few: "# організації в Шотландії працюють над цим.",
    many: "# організацій у Шотландії працює над цим.",
    other: "# організації в Шотландії працюють над цим.",
  },
  "count.closesInDays": {
    one: "Закривається через # день",
    few: "Закривається через # дні",
    many: "Закривається через # днів",
    other: "Закривається через # дні",
  },
  "count.showingSteps": {
    one: "Показуємо # наступний крок.",
    few: "Показуємо # наступні кроки.",
    many: "Показуємо # наступних кроків.",
    other: "Показуємо # наступні кроки.",
  },
  "count.withFilters": {
    one: "З # фільтром.",
    few: "З # фільтрами.",
    many: "З # фільтрами.",
    other: "З # фільтрами.",
  },
  "count.servicesSupport": {
    one: "# послуга стосується цього.",
    few: "# послуги стосуються цього.",
    many: "# послуг стосується цього.",
    other: "# послуги стосуються цього.",
  },
  "count.ofThoseOnline": {
    one: "# з них працює телефоном або онлайн.",
    few: "# з них працюють телефоном або онлайн.",
    many: "# з них працює телефоном або онлайн.",
    other: "# з них працює телефоном або онлайн.",
  },
  "count.servicesOnline": {
    one: "# послуга працює телефоном або онлайн, де б ви не були.",
    few: "# послуги працюють телефоном або онлайн, де б ви не були.",
    many: "# послуг працює телефоном або онлайн, де б ви не були.",
    other: "# послуги працюють телефоном або онлайн, де б ви не були.",
  },
  "count.showThose": { one: "Показати цю одну", other: "Показати ці #" },
  "count.thingsSaved": {
    one: "# збережена річ",
    few: "# збережені речі",
    many: "# збережених речей",
    other: "# збережені речі",
  },
  "count.organisations": {
    one: "# організація",
    few: "# організації",
    many: "# організацій",
    other: "# організації",
  },
  "count.thingsOpen": {
    one: "# відкрита пропозиція",
    few: "# відкриті пропозиції",
    many: "# відкритих пропозицій",
    other: "# відкриті пропозиції",
  },
};

const ro: Table = {
  "count.organisationsFound": {
    one: "# organizație găsită",
    few: "# organizații găsite",
    other: "# de organizații găsite",
  },
  "count.organisationsWork": {
    one: "# organizație din Scoția se ocupă de asta.",
    few: "# organizații din Scoția se ocupă de asta.",
    other: "# de organizații din Scoția se ocupă de asta.",
  },
  "count.closesInDays": {
    one: "Se închide peste # zi",
    few: "Se închide peste # zile",
    other: "Se închide peste # de zile",
  },
  "count.showingSteps": {
    one: "Îți arătăm # pas următor.",
    few: "Îți arătăm # pași următori.",
    other: "Îți arătăm # de pași următori.",
  },
  "count.withFilters": {
    one: "Cu # filtru.",
    few: "Cu # filtre.",
    other: "Cu # de filtre.",
  },
  "count.servicesSupport": {
    one: "# serviciu se potrivește cu asta.",
    few: "# servicii se potrivesc cu asta.",
    other: "# de servicii se potrivesc cu asta.",
  },
  "count.ofThoseOnline": {
    one: "# dintre ele funcționează prin telefon sau online.",
    few: "# dintre ele funcționează prin telefon sau online.",
    other: "# dintre ele funcționează prin telefon sau online.",
  },
  "count.servicesOnline": {
    one: "# serviciu funcționează prin telefon sau online, oriunde ai fi.",
    few: "# servicii funcționează prin telefon sau online, oriunde ai fi.",
    other: "# de servicii funcționează prin telefon sau online, oriunde ai fi.",
  },
  "count.showThose": { one: "Arată-mi-l", other: "Arată-mi cele #" },
  "count.thingsSaved": {
    one: "# lucru salvat",
    few: "# lucruri salvate",
    other: "# de lucruri salvate",
  },
  "count.organisations": {
    one: "# organizație",
    few: "# organizații",
    other: "# de organizații",
  },
  "count.thingsOpen": {
    one: "# ofertă deschisă",
    few: "# oferte deschise",
    other: "# de oferte deschise",
  },
};

const ar: Table = {
  "count.organisationsFound": {
    zero: "لم يُعثر على جهات",
    one: "عُثر على جهة واحدة",
    two: "عُثر على جهتين",
    few: "عُثر على # جهات",
    many: "عُثر على # جهة",
    other: "عُثر على # جهة",
  },
  "count.organisationsWork": {
    one: "جهة واحدة في اسكتلندا تعمل على هذا.",
    two: "جهتان في اسكتلندا تعملان على هذا.",
    few: "# جهات في اسكتلندا تعمل على هذا.",
    many: "# جهة في اسكتلندا تعمل على هذا.",
    other: "# جهة في اسكتلندا تعمل على هذا.",
  },
  "count.closesInDays": {
    one: "يُغلق خلال يوم واحد",
    two: "يُغلق خلال يومين",
    few: "يُغلق خلال # أيام",
    many: "يُغلق خلال # يوماً",
    other: "يُغلق خلال # يوم",
  },
  "count.showingSteps": {
    zero: "لا توجد خطوات.",
    one: "نعرض خطوة تالية واحدة.",
    two: "نعرض خطوتين تاليتين.",
    few: "نعرض # خطوات تالية.",
    many: "نعرض # خطوة تالية.",
    other: "نعرض # خطوة تالية.",
  },
  "count.withFilters": {
    one: "بمُرشِّح واحد.",
    two: "بمُرشِّحين.",
    few: "بـ # مُرشِّحات.",
    many: "بـ # مُرشِّحاً.",
    other: "بـ # مُرشِّح.",
  },
  "count.servicesSupport": {
    zero: "لا توجد خدمات تناسب هذا.",
    one: "خدمة واحدة تناسب هذا.",
    two: "خدمتان تناسبان هذا.",
    few: "# خدمات تناسب هذا.",
    many: "# خدمة تناسب هذا.",
    other: "# خدمة تناسب هذا.",
  },
  "count.ofThoseOnline": {
    zero: "لا شيء منها يعمل عبر الهاتف أو الإنترنت.",
    one: "واحدة منها تعمل عبر الهاتف أو الإنترنت.",
    two: "اثنتان منها تعملان عبر الهاتف أو الإنترنت.",
    few: "# منها تعمل عبر الهاتف أو الإنترنت.",
    many: "# منها تعمل عبر الهاتف أو الإنترنت.",
    other: "# منها تعمل عبر الهاتف أو الإنترنت.",
  },
  "count.servicesOnline": {
    zero: "لا توجد خدمات تعمل عبر الهاتف أو الإنترنت.",
    one: "خدمة واحدة تعمل عبر الهاتف أو الإنترنت، أينما كنتِ.",
    two: "خدمتان تعملان عبر الهاتف أو الإنترنت، أينما كنتِ.",
    few: "# خدمات تعمل عبر الهاتف أو الإنترنت، أينما كنتِ.",
    many: "# خدمة تعمل عبر الهاتف أو الإنترنت، أينما كنتِ.",
    other: "# خدمة تعمل عبر الهاتف أو الإنترنت، أينما كنتِ.",
  },
  "count.showThose": { one: "أريني تلك الواحدة", other: "أريني تلك الـ #" },
  "count.thingsSaved": {
    zero: "لا شيء محفوظ",
    one: "عنصر واحد محفوظ",
    two: "عنصران محفوظان",
    few: "# عناصر محفوظة",
    many: "# عنصراً محفوظاً",
    other: "# عنصر محفوظ",
  },
  "count.organisations": {
    zero: "لا توجد جهات",
    one: "جهة واحدة",
    two: "جهتان",
    few: "# جهات",
    many: "# جهة",
    other: "# جهة",
  },
  "count.thingsOpen": {
    zero: "لا يوجد شيء متاح",
    one: "فرصة واحدة متاحة",
    two: "فرصتان متاحتان",
    few: "# فرص متاحة",
    many: "# فرصة متاحة",
    other: "# فرصة متاحة",
  },
};

const ur: Table = {
  "count.organisationsFound": { one: "# ادارہ ملا", other: "# ادارے ملے" },
  "count.organisationsWork": {
    one: "سکاٹ لینڈ بھر میں # ادارہ اس پر کام کرتا ہے۔",
    other: "سکاٹ لینڈ بھر میں # ادارے اس پر کام کرتے ہیں۔",
  },
  "count.closesInDays": { one: "# دن میں بند", other: "# دن میں بند" },
  "count.showingSteps": {
    one: "# اگلا قدم دکھایا جا رہا ہے۔",
    other: "# اگلے قدم دکھائے جا رہے ہیں۔",
  },
  "count.withFilters": { one: "# فلٹر کے ساتھ۔", other: "# فلٹرز کے ساتھ۔" },
  "count.servicesSupport": {
    one: "# سروس اس سے متعلق ہے۔",
    other: "# سروسز اس سے متعلق ہیں۔",
  },
  "count.ofThoseOnline": {
    one: "ان میں سے # فون یا آن لائن کام کرتی ہے۔",
    other: "ان میں سے # فون یا آن لائن کام کرتی ہیں۔",
  },
  "count.servicesOnline": {
    one: "# سروس فون یا آن لائن کام کرتی ہے، آپ جہاں بھی ہوں۔",
    other: "# سروسز فون یا آن لائن کام کرتی ہیں، آپ جہاں بھی ہوں۔",
  },
  "count.showThose": { one: "مجھے وہ ایک دکھائیں", other: "مجھے وہ # دکھائیں" },
  "count.thingsSaved": { one: "# چیز محفوظ", other: "# چیزیں محفوظ" },
  "count.organisations": { one: "# ادارہ", other: "# ادارے" },
  "count.thingsOpen": { one: "# چیز دستیاب", other: "# چیزیں دستیاب" },
};

const pa: Table = {
  "count.organisationsFound": { one: "# ਅਦਾਰਾ ਮਿਲਿਆ", other: "# ਅਦਾਰੇ ਮਿਲੇ" },
  "count.organisationsWork": {
    one: "ਸਕਾਟਲੈਂਡ ਭਰ ਵਿੱਚ # ਅਦਾਰਾ ਇਸ ਉੱਤੇ ਕੰਮ ਕਰਦਾ ਹੈ।",
    other: "ਸਕਾਟਲੈਂਡ ਭਰ ਵਿੱਚ # ਅਦਾਰੇ ਇਸ ਉੱਤੇ ਕੰਮ ਕਰਦੇ ਹਨ।",
  },
  "count.closesInDays": { one: "# ਦਿਨ ਵਿੱਚ ਬੰਦ", other: "# ਦਿਨਾਂ ਵਿੱਚ ਬੰਦ" },
  "count.showingSteps": {
    one: "# ਅਗਲਾ ਕਦਮ ਦਿਖਾਇਆ ਜਾ ਰਿਹਾ ਹੈ।",
    other: "# ਅਗਲੇ ਕਦਮ ਦਿਖਾਏ ਜਾ ਰਹੇ ਹਨ।",
  },
  "count.withFilters": { one: "# ਫਿਲਟਰ ਨਾਲ।", other: "# ਫਿਲਟਰਾਂ ਨਾਲ।" },
  "count.servicesSupport": {
    one: "# ਸੇਵਾ ਇਸ ਨਾਲ ਮੇਲ ਖਾਂਦੀ ਹੈ।",
    other: "# ਸੇਵਾਵਾਂ ਇਸ ਨਾਲ ਮੇਲ ਖਾਂਦੀਆਂ ਹਨ।",
  },
  "count.ofThoseOnline": {
    one: "ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ # ਫ਼ੋਨ ਜਾਂ ਆਨਲਾਈਨ ਕੰਮ ਕਰਦੀ ਹੈ।",
    other: "ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ # ਫ਼ੋਨ ਜਾਂ ਆਨਲਾਈਨ ਕੰਮ ਕਰਦੀਆਂ ਹਨ।",
  },
  "count.servicesOnline": {
    one: "# ਸੇਵਾ ਫ਼ੋਨ ਜਾਂ ਆਨਲਾਈਨ ਕੰਮ ਕਰਦੀ ਹੈ, ਤੁਸੀਂ ਜਿੱਥੇ ਵੀ ਹੋਵੋ।",
    other: "# ਸੇਵਾਵਾਂ ਫ਼ੋਨ ਜਾਂ ਆਨਲਾਈਨ ਕੰਮ ਕਰਦੀਆਂ ਹਨ, ਤੁਸੀਂ ਜਿੱਥੇ ਵੀ ਹੋਵੋ।",
  },
  "count.showThose": { one: "ਮੈਨੂੰ ਉਹ ਇੱਕ ਦਿਖਾਓ", other: "ਮੈਨੂੰ ਉਹ # ਦਿਖਾਓ" },
  "count.thingsSaved": { one: "# ਚੀਜ਼ ਸੰਭਾਲੀ", other: "# ਚੀਜ਼ਾਂ ਸੰਭਾਲੀਆਂ" },
  "count.organisations": { one: "# ਅਦਾਰਾ", other: "# ਅਦਾਰੇ" },
  "count.thingsOpen": { one: "# ਚੀਜ਼ ਖੁੱਲ੍ਹੀ", other: "# ਚੀਜ਼ਾਂ ਖੁੱਲ੍ਹੀਆਂ" },
};

const zh: Table = {
  "count.organisationsFound": { other: "找到 # 家机构" },
  "count.organisationsWork": { other: "苏格兰有 # 家机构从事这方面的工作。" },
  "count.closesInDays": { other: "# 天后截止" },
  "count.showingSteps": { other: "正在显示 # 个下一步。" },
  "count.withFilters": { other: "已套用 # 个筛选条件。" },
  "count.servicesSupport": { other: "有 # 项服务与此相关。" },
  "count.ofThoseOnline": { other: "其中 # 项可通过电话或线上进行。" },
  "count.servicesOnline": {
    other: "有 # 项服务可通过电话或线上进行，无论你在哪里。",
  },
  "count.showThose": { other: "显示这 # 项" },
  "count.thingsSaved": { other: "已保存 # 项" },
  "count.organisations": { other: "# 家机构" },
  "count.thingsOpen": { other: "# 项开放中" },
};

const so: Table = {
  "count.organisationsFound": { one: "# hay'ad ayaa la helay", other: "# hay'adood ayaa la helay" },
  "count.organisationsWork": {
    one: "# hay'ad oo Scotland ah ayaa arrintan ka shaqeysa.",
    other: "# hay'adood oo Scotland ah ayaa arrintan ka shaqeeya.",
  },
  "count.closesInDays": { one: "Wuxuu xirmayaa # maalmood", other: "Wuxuu xirmayaa # maalmood" },
  "count.showingSteps": {
    one: "Waxaa la tusayaa # tallaabo xigta.",
    other: "Waxaa la tusayaa # tallaabo xigta.",
  },
  "count.withFilters": { one: "Leh # shaandhayn.", other: "Leh # shaandhayn." },
  "count.servicesSupport": {
    one: "# adeeg ayaa arrintan khuseeya.",
    other: "# adeeg ayaa arrintan khuseeya.",
  },
  "count.ofThoseOnline": {
    one: "# ka mid ah ayaa ka shaqeeya telefoon ama online.",
    other: "# ka mid ah ayaa ka shaqeeya telefoon ama online.",
  },
  "count.servicesOnline": {
    one: "# adeeg ayaa ka shaqeeya telefoon ama online, meel kasta oo aad joogtoba.",
    other: "# adeeg ayaa ka shaqeeya telefoon ama online, meel kasta oo aad joogtoba.",
  },
  "count.showThose": { one: "I tus kaas", other: "I tus kuwaas #" },
  "count.thingsSaved": { one: "# shay la kaydiyay", other: "# shay la kaydiyay" },
  "count.organisations": { one: "# hay'ad", other: "# hay'adood" },
  "count.thingsOpen": { one: "# fursad furan", other: "# fursadood oo furan" },
};

const ti: Table = {
  "count.organisationsFound": { one: "# ትካል ተረኺቡ", other: "# ትካላት ተረኺቦም" },
  "count.organisationsWork": {
    one: "ኣብ ስኮትላንድ # ትካል ኣብዚ ይሰርሕ።",
    other: "ኣብ ስኮትላንድ # ትካላት ኣብዚ ይሰርሑ።",
  },
  "count.closesInDays": { one: "ድሕሪ # መዓልቲ ይዕጾ", other: "ድሕሪ # መዓልትታት ይዕጾ" },
  "count.showingSteps": {
    one: "# ቀጺሉ ዘሎ ስጉምቲ ይርአ ኣሎ።",
    other: "# ቀጺሎም ዘለዉ ስጉምትታት ይርኣዩ ኣለዉ።",
  },
  "count.withFilters": { one: "ብ # መጻረዪ።", other: "ብ # መጻረዩታት።" },
  "count.servicesSupport": {
    one: "# ኣገልግሎት ነዚ ይምልከት።",
    other: "# ኣገልግሎታት ነዚ ይምልከቱ።",
  },
  "count.ofThoseOnline": {
    one: "ካብኣቶም # ብስልኪ ወይ ኦንላይን ይሰርሕ።",
    other: "ካብኣቶም # ብስልኪ ወይ ኦንላይን ይሰርሑ።",
  },
  "count.servicesOnline": {
    one: "# ኣገልግሎት ኣበይ ኳ እንተሃለኺ ብስልኪ ወይ ኦንላይን ይሰርሕ።",
    other: "# ኣገልግሎታት ኣበይ ኳ እንተሃለኺ ብስልኪ ወይ ኦንላይን ይሰርሑ።",
  },
  "count.showThose": { one: "ነቲ ሓደ ኣርእየኒ", other: "ነቶም # ኣርእየኒ" },
  "count.thingsSaved": { one: "# ዝተዓቀበ ነገር", other: "# ዝተዓቀቡ ነገራት" },
  "count.organisations": { one: "# ትካል", other: "# ትካላት" },
  "count.thingsOpen": { one: "# ክፉት ዕድል", other: "# ክፉታት ዕድላት" },
};

export const PLURALS: Record<string, Table> = {
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

export const ENGLISH_PLURALS = en;
