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
  | "how.eyebrow"
  | "how.title"
  | "how.body"
  | "how.one"
  | "how.oneTitle"
  | "how.oneBody"
  | "how.two"
  | "how.twoTitle"
  | "how.twoBody"
  | "how.three"
  | "how.threeTitle"
  | "how.threeBody"
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
  "hero.title": "Find support for women in Scotland",
  "hero.body":
    "Tell us what you need in your own words, and we will show you a few next steps worth taking. Three questions, no account needed.",
  "hero.cta": "Find solution",
  "hero.browse": "Or see who is out there",
  "how.eyebrow": "How it works",
  "how.title": "You should not have to know who to ask",
  "how.body":
    "Say “I want to go back to work” or “I need funding” and we do the rest. You never have to pick a category, name an organisation, or work out which scheme you might qualify for.",
  "how.one": "One",
  "how.oneTitle": "Tell us, in your words",
  "how.oneBody":
    "What you need, roughly where you are, and anything about your situation you want us to know. Three questions and none of them are compulsory.",
  "how.two": "Two",
  "how.twoTitle": "We weigh it up",
  "how.twoBody":
    "Against what each thing is for, who it is open to, where it runs and how you can reach it. The reasoning is written down and nothing about it can be bought.",
  "how.three": "Three",
  "how.threeTitle": "You get a few real options",
  "how.threeBody":
    "A handful, not a hundred, each with why it matched, what it costs, who it is for, and exactly what happens after you apply.",
  "zones.eyebrow": "Access Zones",
  "zones.title": "Every kind of support, one platform",
  "zones.body":
    "Work, money, learning, health, enterprise, having a say. Most women need more than one at a time, and most services only do one, which is the gap this exists to close.",
  "zones.browse": "Browse everyone on the platform",
  "trust.checkedTitle": "Somebody checked",
  "trust.checkedBody":
    "Every organisation here has been verified against a public register or its funder before it could post anything. Each listing carries the date it was last confirmed.",
  "trust.privateTitle": "Nothing is shared",
  "trust.privateBody":
    "You do not need an account to search, read or apply. What you type is used to rank your results and is not sold, passed on, or used to build a profile of you.",
  "trust.paidTitle": "Nobody pays to appear",
  "trust.paidBody":
    "There is no paid placement and no advertising. Results are ordered by how well they fit what you told us, and every listing says why it matched.",
  "orgs.title": "Do you run something women should know about?",
  "orgs.body":
    "List it here and it reaches the women it actually suits, rather than whoever happens to find your website. Free, and we check you once rather than checking every listing.",
  "orgs.cta": "List your support",
};

const gd: Catalogue = {
  "language.label": "Cànan",
  "hero.title": "Lorg taic do bhoireannaich an Alba",
  "hero.body":
    "Innis dhuinn dè tha a dhìth ort nad fhaclan fhèin, agus seallaidh sinn dhut beagan cheumannan a b’ fhiach a ghabhail. Trì ceistean, gun fheum air cunntas.",
  "hero.cta": "Lorg fuasgladh",
  "hero.browse": "No faic cò tha ann",
  "how.eyebrow": "Mar a tha e ag obair",
  "how.title": "Cha bu chòir dhut fios a bhith agad cò ris a bhruidhneas tu",
  "how.body":
    "Can “tha mi ag iarraidh tilleadh a dh’obair” no “tha airgead a dhìth orm” agus nì sinne an còrr. Cha leig thu leas roinn a thaghadh, buidheann ainmeachadh, no obrachadh a-mach dè an sgeama dhan tèid thu.",
  "how.one": "A h-aon",
  "how.oneTitle": "Innis dhuinn nad fhaclan fhèin",
  "how.oneBody":
    "Dè tha a dhìth ort, càite a bheil thu gu ìre mhòr, agus rud sam bith mu do shuidheachadh a tha thu airson innse dhuinn. Trì ceistean, agus chan eil gin dhiubh èigneachail.",
  "how.two": "A dhà",
  "how.twoTitle": "Bidh sinn ga mheasadh",
  "how.twoBody":
    "An aghaidh dè tha gach rud air a shon, cò dha a tha e fosgailte, càite a bheil e a’ ruith agus mar a ruigeas tu e. Tha an reusanachadh sgrìobhte sìos agus chan urrainn dad dheth a cheannach.",
  "how.three": "A trì",
  "how.threeTitle": "Gheibh thu beagan roghainnean fìor",
  "how.threeBody":
    "Dòrlach, chan e ceud, gach fear le carson a fhreagair e, dè a chosgas e, cò dha a tha e, agus dè dìreach a thachras às dèidh dhut iarrtas a chur a-steach.",
  "zones.eyebrow": "Raointean Inntrigidh",
  "zones.title": "Gach seòrsa taic, aon àrd-ùrlar",
  "zones.body":
    "Obair, airgead, ionnsachadh, slàinte, gnìomhachas, guth a bhith agad. Feumaidh a’ mhòr-chuid de bhoireannaich barrachd air aon dhiubh aig an aon àm, agus chan eil a’ mhòr-chuid de sheirbheisean a’ dèanamh ach aon, agus is e sin am beàrn a tha seo ann airson a dhùnadh.",
  "zones.browse": "Rùraich a h-uile duine air an àrd-ùrlar",
  "trust.checkedTitle": "Rinn cuideigin sgrùdadh",
  "trust.checkedBody":
    "Chaidh gach buidheann an seo a dhearbhadh an aghaidh clàr poblach no am maoinichear mus b’ urrainn dhaibh dad a phostadh. Tha an ceann-latha mu dheireadh a chaidh a dhearbhadh air gach liosta.",
  "trust.privateTitle": "Cha tèid dad a cho-roinn",
  "trust.privateBody":
    "Chan fheum thu cunntas gus sireadh, leughadh no iarrtas a chur a-steach. Thathar a’ cleachdadh na sgrìobhas tu gus na toraidhean agad a rangachadh, agus cha tèid a reic, a thoirt seachad, no a chleachdadh gus pròifil a thogail mu do dhèidhinn.",
  "trust.paidTitle": "Chan eil duine a’ pàigheadh airson nochdadh",
  "trust.paidBody":
    "Chan eil suidheachadh pàighte no sanasachd ann. Tha na toraidhean air an òrdachadh a rèir cho math ’s a fhreagras iad na dh’innis thu dhuinn, agus tha gach liosta ag innse carson a fhreagair e.",
  "orgs.title": "A bheil thu a’ ruith rudeigin a bu chòir fios a bhith aig boireannaich mu dheidhinn?",
  "orgs.body":
    "Cuir an liosta e an seo agus ruigidh e na boireannaich dhan freagair e, seach ge bith cò a lorgas an làrach-lìn agad. An-asgaidh, agus bidh sinn gad dhearbhadh aon turas seach a bhith a’ sgrùdadh gach liosta.",
  "orgs.cta": "Cuir do thaic air an liosta",
};

const sco: Catalogue = {
  "language.label": "Leid",
  "hero.title": "Finn support for weemen in Scotland",
  "hero.body":
    "Tell us whit ye need in yer ain wirds, an we’ll shaw ye a wheen o next steps worth takkin. Three questions, nae accoont needit.",
  "hero.cta": "Finn solution",
  "hero.browse": "Or see wha’s oot there",
  "how.eyebrow": "Hoo it warks",
  "how.title": "Ye shouldnae hae tae ken wha tae speir at",
  "how.body":
    "Say “A want tae gang back tae wark” or “A need siller” an we dae the lave. Ye niver hae tae pick a category, name an organisation, or wark oot whit scheme ye micht qualify for.",
  "how.one": "Ane",
  "how.oneTitle": "Tell us, in yer ain wirds",
  "how.oneBody":
    "Whit ye need, roughly whaur ye are, an onythin aboot yer situation ye want us tae ken. Three questions an nane o thaim are compulsory.",
  "how.two": "Twa",
  "how.twoTitle": "We wey it up",
  "how.twoBody":
    "Agin whit ilka thing is for, wha it’s open tae, whaur it rins an hoo ye can reach it. The reasonin is written doon an naethin aboot it can be bocht.",
  "how.three": "Three",
  "how.threeTitle": "Ye get a wheen o real options",
  "how.threeBody":
    "A haundfu, no a hunner, ilka ane wi why it matched, whit it costs, wha it’s for, an juist whit happens efter ye apply.",
  "zones.eyebrow": "Access Zones",
  "zones.title": "Ilka kind o support, ae platform",
  "zones.body":
    "Wark, siller, learnin, health, enterprise, haein a say. Maist weemen need mair nor ane at a time, an maist services anly dae ane, an that’s the gap this is here tae steek.",
  "zones.browse": "Brouse awbody on the platform",
  "trust.checkedTitle": "Somebody checkit",
  "trust.checkedBody":
    "Ilka organisation here has been verified agin a public register or its funder afore it could post onythin. Ilka listin cairries the date it wis last confirmed.",
  "trust.privateTitle": "Naethin is shared",
  "trust.privateBody":
    "Ye dinnae need an accoont tae seek, read or apply. Whit ye type is uised tae rank yer results an isnae selt, passed on, or uised tae build a profile o ye.",
  "trust.paidTitle": "Naebody pays tae kythe",
  "trust.paidBody":
    "There’s nae paid placement an nae advertisin. Results are ordert by hoo weel they fit whit ye telt us, an ilka listin says why it matched.",
  "orgs.title": "Dae ye rin somethin weemen should ken aboot?",
  "orgs.body":
    "List it here an it reaches the weemen it actually suits, raither nor whaever happens tae finn yer wabsite. Free, an we check ye the aince raither nor checkin ilka listin.",
  "orgs.cta": "List yer support",
};

const pl: Catalogue = {
  "language.label": "Język",
  "hero.title": "Znajdź wsparcie dla kobiet w Szkocji",
  "hero.body":
    "Powiedz nam własnymi słowami, czego potrzebujesz, a pokażemy Ci kilka kolejnych kroków wartych podjęcia. Trzy pytania, bez zakładania konta.",
  "hero.cta": "Znajdź rozwiązanie",
  "hero.browse": "Albo zobacz, kto tu jest",
  "how.eyebrow": "Jak to działa",
  "how.title": "Nie musisz wiedzieć, do kogo się zwrócić",
  "how.body":
    "Powiedz „chcę wrócić do pracy” albo „potrzebuję finansowania”, a resztę zrobimy my. Nigdy nie musisz wybierać kategorii, wskazywać organizacji ani ustalać, do którego programu się kwalifikujesz.",
  "how.one": "Jeden",
  "how.oneTitle": "Powiedz nam własnymi słowami",
  "how.oneBody":
    "Czego potrzebujesz, mniej więcej gdzie jesteś i cokolwiek o swojej sytuacji, co chcesz nam przekazać. Trzy pytania i żadne nie jest obowiązkowe.",
  "how.two": "Dwa",
  "how.twoTitle": "Rozważamy to",
  "how.twoBody":
    "Biorąc pod uwagę, do czego służy każda rzecz, dla kogo jest dostępna, gdzie się odbywa i jak możesz do niej dotrzeć. Uzasadnienie jest spisane i nic z tego nie da się kupić.",
  "how.three": "Trzy",
  "how.threeTitle": "Dostajesz kilka realnych opcji",
  "how.threeBody":
    "Garść, nie setkę, każda z wyjaśnieniem, dlaczego pasuje, ile kosztuje, dla kogo jest i co dokładnie dzieje się po złożeniu wniosku.",
  "zones.eyebrow": "Strefy dostępu",
  "zones.title": "Każdy rodzaj wsparcia, jedna platforma",
  "zones.body":
    "Praca, pieniądze, nauka, zdrowie, przedsiębiorczość, głos w sprawach publicznych. Większość kobiet potrzebuje więcej niż jednej rzeczy naraz, a większość usług robi tylko jedną, i to jest luka, którą to wypełnia.",
  "zones.browse": "Przeglądaj wszystkich na platformie",
  "trust.checkedTitle": "Ktoś to sprawdził",
  "trust.checkedBody":
    "Każda organizacja została zweryfikowana w publicznym rejestrze albo u swojego finansującego, zanim mogła cokolwiek opublikować. Każde ogłoszenie zawiera datę ostatniego potwierdzenia.",
  "trust.privateTitle": "Nic nie jest udostępniane",
  "trust.privateBody":
    "Nie potrzebujesz konta, żeby szukać, czytać ani składać wniosków. To, co wpiszesz, służy do uszeregowania wyników i nie jest sprzedawane, przekazywane ani używane do budowania Twojego profilu.",
  "trust.paidTitle": "Nikt nie płaci za obecność",
  "trust.paidBody":
    "Nie ma płatnych miejsc ani reklam. Wyniki są uporządkowane według tego, jak dobrze pasują do tego, co nam powiedziałaś, a każde ogłoszenie mówi, dlaczego zostało dopasowane.",
  "orgs.title": "Prowadzisz coś, o czym kobiety powinny wiedzieć?",
  "orgs.body":
    "Dodaj to tutaj, a dotrze do kobiet, którym faktycznie odpowiada, zamiast do przypadkowych osób, które trafią na Twoją stronę. Bezpłatnie, i sprawdzamy Cię raz, a nie każde ogłoszenie osobno.",
  "orgs.cta": "Dodaj swoje wsparcie",
};

const uk: Catalogue = {
  "language.label": "Мова",
  "hero.title": "Знайдіть підтримку для жінок у Шотландії",
  "hero.body":
    "Розкажіть своїми словами, що вам потрібно, і ми покажемо кілька наступних кроків, які варто зробити. Три питання, обліковий запис не потрібен.",
  "hero.cta": "Знайти рішення",
  "hero.browse": "Або подивіться, хто тут є",
  "how.eyebrow": "Як це працює",
  "how.title": "Вам не треба знати, до кого звертатися",
  "how.body":
    "Скажіть «я хочу повернутися до роботи» або «мені потрібне фінансування», а решту зробимо ми. Вам не доведеться обирати категорію, називати організацію чи з’ясовувати, під яку програму ви підходите.",
  "how.one": "Один",
  "how.oneTitle": "Розкажіть своїми словами",
  "how.oneBody":
    "Що вам потрібно, приблизно де ви живете, і будь-що про вашу ситуацію, чим хочете поділитися. Три питання, і жодне не обов’язкове.",
  "how.two": "Два",
  "how.twoTitle": "Ми це зважуємо",
  "how.twoBody":
    "З огляду на те, для чого призначена кожна пропозиція, для кого вона відкрита, де діє і як до неї дістатися. Обґрунтування записане, і жодну його частину неможливо купити.",
  "how.three": "Три",
  "how.threeTitle": "Ви отримуєте кілька справжніх варіантів",
  "how.threeBody":
    "Кілька, а не сотню, кожен із поясненням, чому він підійшов, скільки коштує, для кого він і що саме відбувається після подання заявки.",
  "zones.eyebrow": "Зони доступу",
  "zones.title": "Кожен вид підтримки, одна платформа",
  "zones.body":
    "Робота, гроші, навчання, здоров’я, підприємництво, право голосу. Більшості жінок потрібно більше ніж одне водночас, а більшість служб робить лише щось одне, саме цю прогалину це й закриває.",
  "zones.browse": "Переглянути всіх на платформі",
  "trust.checkedTitle": "Хтось це перевірив",
  "trust.checkedBody":
    "Кожну організацію перевірено за публічним реєстром або через її донора, перш ніж вона змогла щось опублікувати. У кожній пропозиції вказано дату останнього підтвердження.",
  "trust.privateTitle": "Нічим не діляться",
  "trust.privateBody":
    "Обліковий запис не потрібен, щоб шукати, читати чи подавати заявку. Написане вами використовується лише для впорядкування результатів і не продається, не передається і не використовується для створення вашого профілю.",
  "trust.paidTitle": "Ніхто не платить за появу тут",
  "trust.paidBody":
    "Немає платного розміщення й реклами. Результати впорядковані за тим, наскільки вони відповідають сказаному вами, і кожна пропозиція пояснює, чому вона підійшла.",
  "orgs.title": "Ви керуєте чимось, про що жінкам варто знати?",
  "orgs.body":
    "Додайте це сюди, і воно дійде до жінок, яким справді підходить, а не до випадкових відвідувачів вашого сайту. Безкоштовно, і ми перевіряємо вас один раз, а не кожну пропозицію окремо.",
  "orgs.cta": "Додати вашу підтримку",
};

const ar: Catalogue = {
  "language.label": "اللغة",
  "hero.title": "ابحثي عن الدعم للنساء في اسكتلندا",
  "hero.body":
    "أخبرينا بكلماتك عمّا تحتاجين إليه، وسنعرض عليك بضع خطوات تالية تستحق أن تُتخذ. ثلاثة أسئلة، ولا حاجة إلى حساب.",
  "hero.cta": "ابحثي عن حل",
  "hero.browse": "أو اطّلعي على الجهات الموجودة",
  "how.eyebrow": "طريقة العمل",
  "how.title": "ليس عليك أن تعرفي بمن تتصلين",
  "how.body":
    "قولي «أريد العودة إلى العمل» أو «أحتاج إلى تمويل» ونتولى نحن الباقي. لست مضطرة إلى اختيار فئة، أو تسمية منظمة، أو معرفة البرنامج الذي قد تكونين مؤهلة له.",
  "how.one": "واحد",
  "how.oneTitle": "أخبرينا بكلماتك",
  "how.oneBody":
    "ما تحتاجين إليه، وأين تقيمين تقريبًا، وأي شيء عن وضعك تودّين إخبارنا به. ثلاثة أسئلة، وليس أي منها إلزاميًا.",
  "how.two": "اثنان",
  "how.twoTitle": "ندرس الأمر",
  "how.twoBody":
    "مقارنةً بالغرض من كل خيار، ولمن هو متاح، وأين يُقدَّم، وكيف يمكنك الوصول إليه. المعايير مكتوبة، ولا يمكن شراء أي جزء منها.",
  "how.three": "ثلاثة",
  "how.threeTitle": "تحصلين على بضعة خيارات حقيقية",
  "how.threeBody":
    "حفنة لا مئة، مع سبب المطابقة، والتكلفة، ولمن هو موجَّه، وما يحدث تحديدًا بعد التقديم.",
  "zones.eyebrow": "مجالات الوصول",
  "zones.title": "كل أنواع الدعم، منصة واحدة",
  "zones.body":
    "العمل، والمال، والتعلّم، والصحة، وريادة الأعمال، وإسماع الصوت. معظم النساء يحتجن إلى أكثر من واحد في الوقت نفسه، ومعظم الخدمات تقدّم واحدًا فقط، وهذه هي الفجوة التي وُجدت هذه المنصة لسدّها.",
  "zones.browse": "تصفّحي جميع الجهات على المنصة",
  "trust.checkedTitle": "هناك من تحقّق",
  "trust.checkedBody":
    "كل منظمة هنا جرى التحقق منها في سجل عام أو لدى الجهة الممولة قبل أن تتمكن من نشر أي شيء. وكل إعلان يحمل تاريخ آخر تأكيد له.",
  "trust.privateTitle": "لا شيء يُشارَك",
  "trust.privateBody":
    "لا تحتاجين إلى حساب للبحث أو القراءة أو التقديم. ما تكتبينه يُستخدم لترتيب نتائجك فقط، ولا يُباع ولا يُمرَّر ولا يُستخدم لبناء ملف عنك.",
  "trust.paidTitle": "لا أحد يدفع للظهور",
  "trust.paidBody":
    "لا يوجد إدراج مدفوع ولا إعلانات. تُرتَّب النتائج حسب مدى ملاءمتها لما أخبرتِنا به، وكل إعلان يوضّح سبب مطابقته.",
  "orgs.title": "هل تديرين شيئًا ينبغي أن تعرف عنه النساء؟",
  "orgs.body":
    "أدرجيه هنا ليصل إلى النساء اللواتي يناسبهن فعلًا، بدلًا من أي شخص يصادف موقعك. مجانًا، ونتحقق منك مرة واحدة بدلًا من التحقق من كل إعلان.",
  "orgs.cta": "أدرجي الدعم الذي تقدمينه",
};

const ur: Catalogue = {
  "language.label": "زبان",
  "hero.title": "اسکاٹ لینڈ میں خواتین کے لیے مدد تلاش کریں",
  "hero.body":
    "اپنے الفاظ میں بتائیں کہ آپ کو کیا چاہیے، اور ہم آپ کو چند اگلے قدم دکھائیں گے جو اٹھانے کے قابل ہیں۔ تین سوال، کوئی اکاؤنٹ درکار نہیں۔",
  "hero.cta": "حل تلاش کریں",
  "hero.browse": "یا دیکھیں کون کون موجود ہے",
  "how.eyebrow": "یہ کیسے کام کرتا ہے",
  "how.title": "آپ کو یہ جاننے کی ضرورت نہیں کہ کس سے پوچھیں",
  "how.body":
    "کہیں ”میں کام پر واپس جانا چاہتی ہوں“ یا ”مجھے فنڈنگ چاہیے“ اور باقی کام ہم کریں گے۔ آپ کو کبھی زمرہ منتخب کرنے، کسی ادارے کا نام لینے، یا یہ سوچنے کی ضرورت نہیں کہ آپ کس اسکیم کے اہل ہیں۔",
  "how.one": "ایک",
  "how.oneTitle": "اپنے الفاظ میں بتائیں",
  "how.oneBody":
    "آپ کو کیا چاہیے، آپ تقریباً کہاں ہیں، اور اپنی صورتحال کے بارے میں جو کچھ آپ بتانا چاہیں۔ تین سوال، اور کوئی بھی لازمی نہیں۔",
  "how.two": "دو",
  "how.twoTitle": "ہم اسے پرکھتے ہیں",
  "how.twoBody":
    "اس بنیاد پر کہ ہر چیز کس مقصد کے لیے ہے، کن کے لیے کھلی ہے، کہاں چلتی ہے اور آپ اس تک کیسے پہنچ سکتی ہیں۔ وجوہات لکھی ہوئی ہیں اور ان میں سے کچھ بھی خریدا نہیں جا سکتا۔",
  "how.three": "تین",
  "how.threeTitle": "آپ کو چند حقیقی اختیارات ملتے ہیں",
  "how.threeBody":
    "مٹھی بھر، سو نہیں، ہر ایک کے ساتھ یہ کہ وہ کیوں موزوں ہے، اس کی قیمت کیا ہے، کس کے لیے ہے، اور درخواست کے بعد بالکل کیا ہوتا ہے۔",
  "zones.eyebrow": "رسائی کے شعبے",
  "zones.title": "ہر قسم کی مدد، ایک پلیٹ فارم",
  "zones.body":
    "کام، پیسہ، تعلیم، صحت، کاروبار، اپنی بات کہنے کا حق۔ زیادہ تر خواتین کو ایک وقت میں ایک سے زیادہ کی ضرورت ہوتی ہے، اور زیادہ تر خدمات صرف ایک ہی کام کرتی ہیں، یہی وہ خلا ہے جسے پُر کرنے کے لیے یہ موجود ہے۔",
  "zones.browse": "پلیٹ فارم پر سب کو دیکھیں",
  "trust.checkedTitle": "کسی نے جانچ کی ہے",
  "trust.checkedBody":
    "یہاں ہر ادارے کی کسی عوامی رجسٹر یا اس کے فنڈ دینے والے کے ذریعے تصدیق کی گئی ہے، اس سے پہلے کہ وہ کچھ شائع کر سکے۔ ہر اندراج پر آخری تصدیق کی تاریخ درج ہے۔",
  "trust.privateTitle": "کچھ بھی شیئر نہیں کیا جاتا",
  "trust.privateBody":
    "تلاش کرنے، پڑھنے یا درخواست دینے کے لیے آپ کو اکاؤنٹ کی ضرورت نہیں۔ آپ جو لکھتی ہیں وہ صرف آپ کے نتائج ترتیب دینے کے لیے استعمال ہوتا ہے، اسے بیچا، آگے دیا، یا آپ کا پروفائل بنانے کے لیے استعمال نہیں کیا جاتا۔",
  "trust.paidTitle": "یہاں آنے کے لیے کوئی ادائیگی نہیں کرتا",
  "trust.paidBody":
    "کوئی ادا شدہ جگہ یا اشتہار نہیں ہے۔ نتائج اس بنیاد پر ترتیب دیے جاتے ہیں کہ وہ آپ کی بتائی ہوئی بات سے کتنے مطابق ہیں، اور ہر اندراج بتاتا ہے کہ وہ کیوں موزوں ہے۔",
  "orgs.title": "کیا آپ کچھ ایسا چلا رہی ہیں جس کے بارے میں خواتین کو معلوم ہونا چاہیے؟",
  "orgs.body":
    "اسے یہاں درج کریں اور یہ ان خواتین تک پہنچے گا جن کے لیے یہ واقعی موزوں ہے، نہ کہ جو اتفاق سے آپ کی ویب سائٹ تک پہنچ جائے۔ مفت، اور ہم آپ کی ایک بار تصدیق کرتے ہیں، ہر اندراج کی نہیں۔",
  "orgs.cta": "اپنی خدمات درج کریں",
};

const pa: Catalogue = {
  "language.label": "ਭਾਸ਼ਾ",
  "hero.title": "ਸਕਾਟਲੈਂਡ ਵਿੱਚ ਔਰਤਾਂ ਲਈ ਸਹਾਇਤਾ ਲੱਭੋ",
  "hero.body":
    "ਸਾਨੂੰ ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸੋ ਕਿ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ, ਅਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਕੁਝ ਅਗਲੇ ਕਦਮ ਦਿਖਾਵਾਂਗੇ ਜੋ ਚੁੱਕਣ ਯੋਗ ਹਨ। ਤਿੰਨ ਸਵਾਲ, ਕੋਈ ਖਾਤਾ ਨਹੀਂ ਚਾਹੀਦਾ।",
  "hero.cta": "ਹੱਲ ਲੱਭੋ",
  "hero.browse": "ਜਾਂ ਵੇਖੋ ਕੌਣ ਮੌਜੂਦ ਹੈ",
  "how.eyebrow": "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
  "how.title": "ਤੁਹਾਨੂੰ ਇਹ ਜਾਣਨ ਦੀ ਲੋੜ ਨਹੀਂ ਕਿ ਕਿਸ ਨੂੰ ਪੁੱਛਣਾ ਹੈ",
  "how.body":
    "ਕਹੋ “ਮੈਂ ਕੰਮ ’ਤੇ ਵਾਪਸ ਜਾਣਾ ਚਾਹੁੰਦੀ ਹਾਂ” ਜਾਂ “ਮੈਨੂੰ ਫੰਡਿੰਗ ਚਾਹੀਦੀ ਹੈ” ਅਤੇ ਬਾਕੀ ਅਸੀਂ ਕਰਾਂਗੇ। ਤੁਹਾਨੂੰ ਕਦੇ ਸ਼੍ਰੇਣੀ ਚੁਣਨ, ਕਿਸੇ ਸੰਸਥਾ ਦਾ ਨਾਂ ਲੈਣ, ਜਾਂ ਇਹ ਪਤਾ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ ਕਿ ਤੁਸੀਂ ਕਿਸ ਯੋਜਨਾ ਲਈ ਯੋਗ ਹੋ।",
  "how.one": "ਇੱਕ",
  "how.oneTitle": "ਸਾਨੂੰ ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸੋ",
  "how.oneBody":
    "ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ, ਤੁਸੀਂ ਲਗਭਗ ਕਿੱਥੇ ਹੋ, ਅਤੇ ਆਪਣੀ ਸਥਿਤੀ ਬਾਰੇ ਜੋ ਵੀ ਤੁਸੀਂ ਸਾਨੂੰ ਦੱਸਣਾ ਚਾਹੁੰਦੀਆਂ ਹੋ। ਤਿੰਨ ਸਵਾਲ, ਅਤੇ ਕੋਈ ਵੀ ਲਾਜ਼ਮੀ ਨਹੀਂ।",
  "how.two": "ਦੋ",
  "how.twoTitle": "ਅਸੀਂ ਇਸ ਨੂੰ ਤੋਲਦੇ ਹਾਂ",
  "how.twoBody":
    "ਇਸ ਦੇ ਆਧਾਰ ’ਤੇ ਕਿ ਹਰ ਚੀਜ਼ ਕਿਸ ਲਈ ਹੈ, ਕਿਸ ਲਈ ਖੁੱਲ੍ਹੀ ਹੈ, ਕਿੱਥੇ ਚੱਲਦੀ ਹੈ ਅਤੇ ਤੁਸੀਂ ਉਸ ਤੱਕ ਕਿਵੇਂ ਪਹੁੰਚ ਸਕਦੀਆਂ ਹੋ। ਕਾਰਨ ਲਿਖੇ ਹੋਏ ਹਨ ਅਤੇ ਇਸ ਵਿੱਚੋਂ ਕੁਝ ਵੀ ਖਰੀਦਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ।",
  "how.three": "ਤਿੰਨ",
  "how.threeTitle": "ਤੁਹਾਨੂੰ ਕੁਝ ਅਸਲੀ ਵਿਕਲਪ ਮਿਲਦੇ ਹਨ",
  "how.threeBody":
    "ਮੁੱਠੀ ਭਰ, ਸੌ ਨਹੀਂ, ਹਰ ਇੱਕ ਦੇ ਨਾਲ ਇਹ ਕਿ ਉਹ ਕਿਉਂ ਢੁਕਵਾਂ ਹੈ, ਕੀ ਖਰਚਾ ਹੈ, ਕਿਸ ਲਈ ਹੈ, ਅਤੇ ਅਰਜ਼ੀ ਤੋਂ ਬਾਅਦ ਬਿਲਕੁਲ ਕੀ ਹੁੰਦਾ ਹੈ।",
  "zones.eyebrow": "ਪਹੁੰਚ ਖੇਤਰ",
  "zones.title": "ਹਰ ਕਿਸਮ ਦੀ ਸਹਾਇਤਾ, ਇੱਕ ਪਲੇਟਫਾਰਮ",
  "zones.body":
    "ਕੰਮ, ਪੈਸਾ, ਸਿੱਖਿਆ, ਸਿਹਤ, ਕਾਰੋਬਾਰ, ਆਪਣੀ ਗੱਲ ਕਹਿਣ ਦਾ ਹੱਕ। ਜ਼ਿਆਦਾਤਰ ਔਰਤਾਂ ਨੂੰ ਇੱਕੋ ਸਮੇਂ ਇੱਕ ਤੋਂ ਵੱਧ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ, ਅਤੇ ਜ਼ਿਆਦਾਤਰ ਸੇਵਾਵਾਂ ਸਿਰਫ਼ ਇੱਕ ਹੀ ਕਰਦੀਆਂ ਹਨ, ਇਹੀ ਉਹ ਪਾੜਾ ਹੈ ਜਿਸ ਨੂੰ ਭਰਨ ਲਈ ਇਹ ਮੌਜੂਦ ਹੈ।",
  "zones.browse": "ਪਲੇਟਫਾਰਮ ’ਤੇ ਸਾਰਿਆਂ ਨੂੰ ਵੇਖੋ",
  "trust.checkedTitle": "ਕਿਸੇ ਨੇ ਜਾਂਚ ਕੀਤੀ ਹੈ",
  "trust.checkedBody":
    "ਇੱਥੇ ਹਰ ਸੰਸਥਾ ਦੀ ਕਿਸੇ ਜਨਤਕ ਰਜਿਸਟਰ ਜਾਂ ਉਸ ਦੇ ਫੰਡ ਦੇਣ ਵਾਲੇ ਰਾਹੀਂ ਪੁਸ਼ਟੀ ਕੀਤੀ ਗਈ ਹੈ, ਇਸ ਤੋਂ ਪਹਿਲਾਂ ਕਿ ਉਹ ਕੁਝ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰ ਸਕੇ। ਹਰ ਇੰਦਰਾਜ਼ ’ਤੇ ਆਖਰੀ ਪੁਸ਼ਟੀ ਦੀ ਤਾਰੀਖ ਹੁੰਦੀ ਹੈ।",
  "trust.privateTitle": "ਕੁਝ ਵੀ ਸਾਂਝਾ ਨਹੀਂ ਕੀਤਾ ਜਾਂਦਾ",
  "trust.privateBody":
    "ਖੋਜਣ, ਪੜ੍ਹਨ ਜਾਂ ਅਰਜ਼ੀ ਦੇਣ ਲਈ ਤੁਹਾਨੂੰ ਖਾਤੇ ਦੀ ਲੋੜ ਨਹੀਂ। ਤੁਸੀਂ ਜੋ ਲਿਖਦੀਆਂ ਹੋ ਉਹ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਨਤੀਜੇ ਕ੍ਰਮਬੱਧ ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਵੇਚਿਆ, ਅੱਗੇ ਦਿੱਤਾ ਜਾਂ ਤੁਹਾਡਾ ਪ੍ਰੋਫਾਈਲ ਬਣਾਉਣ ਲਈ ਨਹੀਂ ਵਰਤਿਆ ਜਾਂਦਾ।",
  "trust.paidTitle": "ਇੱਥੇ ਦਿਖਣ ਲਈ ਕੋਈ ਪੈਸੇ ਨਹੀਂ ਦਿੰਦਾ",
  "trust.paidBody":
    "ਕੋਈ ਅਦਾਇਗੀ ਵਾਲੀ ਥਾਂ ਜਾਂ ਇਸ਼ਤਿਹਾਰ ਨਹੀਂ ਹੈ। ਨਤੀਜੇ ਇਸ ਆਧਾਰ ’ਤੇ ਕ੍ਰਮਬੱਧ ਹੁੰਦੇ ਹਨ ਕਿ ਉਹ ਤੁਹਾਡੀ ਦੱਸੀ ਗੱਲ ਨਾਲ ਕਿੰਨੇ ਮੇਲ ਖਾਂਦੇ ਹਨ, ਅਤੇ ਹਰ ਇੰਦਰਾਜ਼ ਦੱਸਦਾ ਹੈ ਕਿ ਉਹ ਕਿਉਂ ਢੁਕਵਾਂ ਹੈ।",
  "orgs.title": "ਕੀ ਤੁਸੀਂ ਕੁਝ ਅਜਿਹਾ ਚਲਾ ਰਹੀਆਂ ਹੋ ਜਿਸ ਬਾਰੇ ਔਰਤਾਂ ਨੂੰ ਪਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ?",
  "orgs.body":
    "ਇਸ ਨੂੰ ਇੱਥੇ ਦਰਜ ਕਰੋ ਅਤੇ ਇਹ ਉਨ੍ਹਾਂ ਔਰਤਾਂ ਤੱਕ ਪਹੁੰਚੇਗਾ ਜਿਨ੍ਹਾਂ ਲਈ ਇਹ ਸੱਚਮੁੱਚ ਢੁਕਵਾਂ ਹੈ, ਨਾ ਕਿ ਜੋ ਕੋਈ ਵੀ ਤੁਹਾਡੀ ਵੈੱਬਸਾਈਟ ’ਤੇ ਪਹੁੰਚ ਜਾਵੇ। ਮੁਫ਼ਤ, ਅਤੇ ਅਸੀਂ ਤੁਹਾਡੀ ਇੱਕ ਵਾਰ ਜਾਂਚ ਕਰਦੇ ਹਾਂ, ਹਰ ਇੰਦਰਾਜ਼ ਦੀ ਨਹੀਂ।",
  "orgs.cta": "ਆਪਣੀ ਸਹਾਇਤਾ ਦਰਜ ਕਰੋ",
};

const zh: Catalogue = {
  "language.label": "语言",
  "hero.title": "为苏格兰的女性寻找支持",
  "hero.body":
    "用你自己的话告诉我们你需要什么，我们会为你列出几个值得迈出的下一步。三个问题，无需注册账户。",
  "hero.cta": "寻找方案",
  "hero.browse": "或看看有哪些机构",
  "how.eyebrow": "运作方式",
  "how.title": "你不需要知道该去问谁",
  "how.body":
    "说一句「我想重返职场」或「我需要资金」，其余的交给我们。你无需选择分类、说出机构名称，也不必弄清楚自己符合哪个计划的条件。",
  "how.one": "一",
  "how.oneTitle": "用你自己的话告诉我们",
  "how.oneBody":
    "你需要什么、大致住在哪里，以及任何你愿意让我们知道的情况。三个问题，没有一个是必答的。",
  "how.two": "二",
  "how.twoTitle": "我们来权衡",
  "how.twoBody":
    "根据每一项的用途、面向的对象、开展的地点，以及你可以如何接触到它。评判依据都写在明处，其中没有任何一项可以用钱买到。",
  "how.three": "三",
  "how.threeTitle": "你会得到几个真正可行的选择",
  "how.threeBody":
    "是几个，而不是一百个。每一个都会说明为什么匹配、费用如何、面向谁，以及申请之后究竟会发生什么。",
  "zones.eyebrow": "支持领域",
  "zones.title": "各类支持，一个平台",
  "zones.body":
    "工作、金钱、学习、健康、创业、发声。大多数女性同时需要不止一项，而大多数服务只做其中一项，这正是这个平台要填补的空白。",
  "zones.browse": "浏览平台上的所有机构",
  "trust.checkedTitle": "有人核实过",
  "trust.checkedBody":
    "这里的每一家机构，在能够发布任何内容之前，都已通过公开登记册或其资助方核实。每条信息都标有最近一次确认的日期。",
  "trust.privateTitle": "不会外传任何信息",
  "trust.privateBody":
    "搜索、阅读或申请都不需要账户。你输入的内容仅用于为你排序结果，不会被出售、转交，也不会用来建立关于你的档案。",
  "trust.paidTitle": "没有人靠付费出现在这里",
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
