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
  | "orgs.cta";

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
  "orgs.cta": "List your support",
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
  "orgs.cta": "Cuir do thaic air an liosta",
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
  "orgs.cta": "List yer support",
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
  "orgs.cta": "Dodaj swoje wsparcie",
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
  "orgs.cta": "Додати вашу підтримку",
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
  "orgs.cta": "أدرجي الدعم الذي تقدمينه",
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
  "orgs.cta": "اپنی خدمات درج کریں",
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
  "orgs.cta": "ਆਪਣੀ ਸਹਾਇਤਾ ਦਰਜ ਕਰੋ",
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
  "orgs.cta": "登记你的支持",
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
};
