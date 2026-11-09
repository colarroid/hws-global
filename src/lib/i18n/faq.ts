/**
 * The questions and answers, in every language.
 *
 * WHY THESE ARE NOT IN messages.ts
 *
 * They are the one body of real prose on the platform rather than interface
 * copy: twenty-eight questions, fourteen hundred words, and every answer is
 * a promise about how the software behaves. Mixing them into a catalogue of
 * button labels would bury them, and the thing that most needs to be easy
 * here is reading an answer beside its English and checking it is still
 * true.
 *
 * So the shape is the shape of the page: a question and its answer, side by
 * side, keyed by the English question.
 *
 * KEYED BY THE ENGLISH QUESTION, for the same reason the example sentences
 * are, and with the same cost: reword a question in design/faq.ts and eleven
 * translations silently orphan, the answer quietly reverting to English for
 * everybody who does not read it. `npm run check:i18n` fails on that.
 *
 * THESE ANSWERS HAVE TO STAY TRUE. design/faq.ts says it about the English
 * and it is more true here, because a mistranslated promise is still a
 * promise. The three that make specific claims are worth re-reading whenever
 * the software changes: what happens to what she types, that nobody pays to
 * appear, and the emergency numbers. A phone number must survive translation
 * unchanged — 999 and 0800 027 1234 are the only two strings in this file
 * that are not allowed to be improved, and the check enforces that.
 *
 * Machine-drafted, no native speaker, same as everywhere else. The stakes
 * are higher here than on a button: a woman who reads the privacy answer and
 * acts on it is relying on the translation being faithful, not merely
 * fluent.
 */

/** A question and its answer, both already in her language. */
export type FaqEntry = { q: string; a: string };

/** Locale code, to English question, to the translated pair. */
export type FaqTable = Record<string, FaqEntry>;

const gd: FaqTable = {
  "What is HWS Path Grid?": {
    q: "Dè th' ann an HWS Path Grid?",
    a: "Aon àite far an lorg thu taic do bhoireannaich air feadh Alba: cùrsaichean, maoineachadh, comhairle, tadhal a-steach, treòrachadh agus barrachd. Innis dhuinn nad fhaclan fhèin dè tha a dhìth ort agus seallaidh sinn dhut beagan cheumannan as fhiach a ghabhail, seach clàr a dh'fheumadh tu fhèin a rùrachadh.",
  },
  "Do I need an account?": {
    q: "A bheil cunntas a dhìth orm?",
    a: "Chan eil, gus lorg, leughadh no tagradh airson dad. Is e sàbhaladh an aon rud air a bheil cunntas a dhìth: brùth Sàbhail agus thèid iarraidh ort clàradh a-steach, gus am bi do liosta ann an ath-thuras agus gus an urrainn dhuinn innse dhut mus dùin rudeigin. Chan eil dad eile air an àrd-ùrlar ag iarraidh càil ort.",
  },
  "Does it cost anything?": {
    q: "A bheil e a' cosg dad?",
    a: "Chan eil. Tha an t-àrd-ùrlar an-asgaidh ri chleachdadh. Tha cosgais air cuid de na rudan a tha air an liostadh air, agus tha gach clàradh ag innse cò aca — an-asgaidh, an-asgaidh airson tagradh, no tha cosgais ann — mus brùth thu troimhe.",
  },
  "What happens to what I type?": {
    q: "Dè thachras dhan na sgrìobhas mi?",
    a: "Thathar a' cleachdadh do fhreagairtean gus na toraidhean agad a rangachadh agus chan ann airson dad eile. Chan eil iad gan reic, cha tèid an toirt dha na buidhnean a chithear dhut, agus chan eil iad gan cleachdadh gus pròifil a thogail mud dheidhinn. Bidh sinn a' clàradh gun deach clàradh fhaicinn no a bhrùthadh, mar chunntas agus ceann-latha, gun dad na chois a dh'fhaodadh innse gur tusa a bh' ann.",
  },
  "How do you decide what to show me?": {
    q: "Ciamar a cho-dhùineas sibh dè sheallas sibh dhomh?",
    a: "Trì rudan a dh'innseas tu dhuinn: dè tha a dhìth ort nad fhaclan fhèin, mu dhè far a bheil thu, agus rud sam bith mu do shuidheachadh a thaghas tu innse. Tha iad sin gan cothromachadh an aghaidh dè tha gach clàradh air a shon, cò dha a tha e fosgailte, càite a bheil e a' ruith agus ciamar a ruigeas tu e. Tha gach toradh ag innse carson a fhreagair e.",
  },
  "Does anyone pay to appear higher up?": {
    q: "A bheil duine a' pàigheadh gus nochdadh nas àirde?",
    a: "Chan eil. Chan eil àite pàighte no sanasachd an àite sam bith air an àrd-ùrlar. Chan urrainn dad a cheannach a dh'atharraicheas òrdugh nan toraidhean agad.",
  },
  "How do I know these organisations are real?": {
    q: "Ciamar a bhios fios agam gu bheil na buidhnean seo fìor?",
    a: "Tha gach buidheann air a dhearbhadh an aghaidh clàr poblach — Clàr Charthannas na h-Alba no Companies House — no, far nach eil clàradh aca, an aghaidh an luchd-maoineachaidh, mus urrainn dhaibh dad a chur suas. Tha gach clàradh cuideachd a' giùlan an latha mu dheireadh a chaidh a dhearbhadh, gus am faic thu cho ùr 's a tha e.",
  },
  "What if nothing matches what I need?": {
    q: "Dè ma dh'fhreagras dad air na tha a dhìth orm?",
    a: "Thèid lorg nas fharsainge a thabhann dhut seach duilleag fhalamh, agus faodaidh tu gin de na trì freagairtean agad atharrachadh. Mura bheil dad ann fhathast, innis dhuinn: tha lorgaidhean nach lorg dad gan clàradh gun dad a dh'aithnicheas thu, agus is ann asta sin a dh'obraicheas sinn a-mach dè tha a dhìth.",
  },
  "Can I save something and come back to it?": {
    q: "An urrainn dhomh rudeigin a shàbhaladh agus tilleadh thuige?",
    a: "Faodaidh, le cunntas. Brùth Sàbhail air rud sam bith agus thèid iarraidh ort clàradh a-steach le còd aon-turais; tha na bhrùth thu Sàbhail air ga chumail fhad 's a nì thu sin agus tha e a' feitheamh nuair a thilleas tu. Cuiridh sinn nad chuimhne mu sheachd latha ro cheann-latha dùnaidh, agus faodaidh tu sin a chur dheth uair sam bith.",
  },
  "Will anyone know I have been here?": {
    q: "Am bi fios aig duine gu robh mi an seo?",
    a: "Chan ann bhuainne. Chan eil sinn a' cur fios gu duine às do leth, chan eil sinn ag innse do bhuidheann gun do choimhead thu air, agus chan eil dad a nì thu an seo a' nochdadh àite far am faic cuideigin eile e. Cuimhnich ge-tà gu bheil am brabhsair agad fhèin a' cumail eachdraidh, mar a nì e air làrach sam bith.",
  },
  "What if a listing is wrong or out of date?": {
    q: "Dè ma tha clàradh ceàrr no sean?",
    a: "Innis dhuinn. Tha ceangal aithris air gach duilleag clàraidh. Bidh sinn ga sgrùdadh, agus ma tha e ceàrr thèid iarraidh air a' bhuidheann a chàradh; ma chailleadh boireannach feasgar air san eadar-ama, bheir sinn sìos e gus an tèid a rèiteach.",
  },
  "What happens when a closing date passes?": {
    q: "Dè thachras nuair a thèid ceann-latha dùnaidh seachad?",
    a: "Dùinidh an clàradh ach cha tèid e à sealladh. 'S urrainn dhut fhathast a ruigsinn bho liosta shàbhailte no bho cheangal, mar sin cha tionndaidh duilleag a chaidh a chur thugad gu neoni, agus sguiridh e de bhith a' farpais ri rudan a tha fhathast fosgailte.",
  },
  "Is this only for Scotland?": {
    q: "A bheil seo airson Alba a-mhàin?",
    a: "Tha. Tha gach buidheann an seo ag obair ann an Alba, agus is e bailtean agus sgìrean comhairle Albannach na h-àiteachan air am bi sinn a' freagairt. Tha cuid de chlàraidhean air-loidhne agus fosgailte dha duine sam bith, agus tha iad sin ag ràdh sin.",
  },
  "Can I read this in another language?": {
    q: "An urrainn dhomh seo a leughadh ann an cànan eile?",
    a: "'S urrainn. Tha an smachd cànain aig mullach na duilleige a' tabhann Gàidhlig, Scots, Pòlainnis, Ucràinis, Arabais, Urdu, Panjabi, Sìnis shimplidhte, Romàinis, Somàilis agus Tigrinya, agus tha an lorg gu lèir air eadar-theangachadh seach a' chiad duilleag a-mhàin. Fanaidh na sgrìobhas buidhnean mun deidhinn fhèin sa chànan san do sgrìobh iad e, oir chan eil sinn ag eadar-theangachadh faclan duine le inneal. Chaidh gach eadar-theangachadh an seo a dhreachdadh le inneal agus tha e a' feitheamh ri cuideigin aig a bheil an cànan o thùs a leughas e.",
  },
  "I need help right now.": {
    q: "Tha cuideachadh a dhìth orm an-dràsta.",
    a: "Tha an t-àrd-ùrlar seo airson taic a lorg, chan ann airson èiginn, agus chan eil duine ga chumail sùil air. Ma tha thu ann an cunnart sa bhad, cuir fòn gu 999. Tha Loidhne-chuideachaidh Droch-dhìol Dachaigh agus Pòsaidh Èignichte na h-Alba an-asgaidh air 0800 027 1234, latha no oidhche.",
  },
  "Who can list on HWS Path Grid?": {
    q: "Cò as urrainn clàradh air HWS Path Grid?",
    a: "Buidheann sam bith a tha ag obair le boireannaich ann an Alba: carthannasan, iomairtean sòisealta, buidhnean poblach, colaistean, gnothachasan agus buidhnean coimhearsnachd stèidhichte. Chan fheum sibh a bhith airson bhoireannach a-mhàin, ach feumaidh na chlàraicheas sibh a bhith na rud air an urrainn do bhoireannach gnìomh a ghabhail.",
  },
  "Does it cost anything to be listed?": {
    q: "A bheil e a' cosg dad a bhith air a chlàradh?",
    a: "Chan eil. Tha clàradh an-asgaidh agus chan eil àite pàighte ann ri cheannach, mar sin chan atharraich dad a phàigheas sibh càite an nochd sibh ann an toraidhean duine.",
  },
  "How do you check us, and how long does it take?": {
    q: "Ciamar a nì sibh sgrùdadh oirnn, agus dè cho fada 's a bheir e?",
    a: "An aghaidh clàir phoblaich far a bheil fear agaibh — àireamh carthannais no àireamh companaidh — agus an aghaidh an luchd-maoineachaidh agaibh far nach eil. Mar as trice bheir e mu dhà latha obrach bhon àm a chrìochnaicheas sibh a' clàradh. Gheibh sibh post-d an dà chuid, agus ma tha aon rud eile a dhìth oirnn canaidh sinn dìreach dè th' ann.",
  },
  "What do I need to fill in?": {
    q: "Dè dh'fheumas mi lìonadh?",
    a: "Tha clàradh na thrì ceumannan goirid: cò sibh, na Raointean Ruigsinneachd agaibh, agus neach-aithne airson dearbhaidh. Às dèidh sin tha pròifil nas làine: ur rùn, cò leis a bhios sibh ag obair, dè tha sibh a' tabhann, dè cho fada 's a ruigeas sibh agus cò nach urrainn dhuibh a chuideachadh. Is e a' phròifil sin a cho-dhùineas cò na boireannaich a chuireas sinn thugaibh, mar sin is fhiach na fichead mionaid i.",
  },
  "What can I post?": {
    q: "Dè as urrainn dhomh a chur suas?",
    a: "Aon rud air an urrainn do bhoireannach gnìomh a ghabhail: cùrsa, tabhartas, tadhal a-steach, tachartas, àite treòrachaidh, coinneamh phearsanta. Cuiribh suas air leth iad seach gan ceangal còmhla, gus an tèid gach fear a fhreagairt ris na boireannaich a fhreagras air dha-rìribh.",
  },
  "Who decides which women see my listing?": {
    q: "Cò cho-dhùineas cò na boireannaich a chì an clàradh agam?",
    a: "Siostam rangachaidh, bho na sgrìobh ise agus na sgrìobh sibhse. Cothromaichidh e na suidheachaidhean a chomharraich sibh, a faclan fhèin an aghaidh ur faclan, agus a bheil sibh an ruigsinn oirre. Tha gach factar ann an aon fhaidhle agus chan urrainn gin dhiubh a cheannach. Thathar cuideachd ag innse dhi carson a fhreagair an clàradh agaibh oirre.",
  },
  "Can I edit a listing after it is live?": {
    q: "An urrainn dhomh clàradh a dheasachadh às dèidh dha a bhith beò?",
    a: "'S urrainn, uair sam bith, agus fanaidh e beò fhad 's a nì thu sin. Tha an clàradh a' sealltainn an latha mu dheireadh a chaidh ùrachadh, gus am faic boireannach gu bheil e ùr.",
  },
  "What happens when my closing date passes?": {
    q: "Dè thachras nuair a thèid an ceann-latha dùnaidh agam seachad?",
    a: "Dùinidh an clàradh leis fhèin. Chan iarr duine oirbh a dhearbhadh, oir dh'innis sibh an ceann-latha dhuinn mu thràth. Fanaidh e ruigsinneach gus nach bi ceangal marbh aig duine a shàbhail e, agus sguiridh e de bhith a' farpais ri rudan fhathast fosgailte. Gus a leudachadh, deasaich an ceann-latha.",
  },
  "Can colleagues help manage our listings?": {
    q: "An urrainn do cho-obraichean cuideachadh le bhith a' riaghladh nan clàraidhean againn?",
    a: "'S urrainn. Thoir cuireadh dhaibh air post-d bho dhuilleag na buidhne agaibh nuair a tha sibh dearbhte. Gheibh iad an clàradh a-steach fhèin agus sealbhaichidh iad an inbhe dhearbhte agaibh, mar sin chan eil dad ri dhearbhadh a-rithist.",
  },
  "Why has my listing been hidden?": {
    q: "Carson a chaidh an clàradh agam fhalach?",
    a: "Faodaidh rianaire clàradh a thoirt far an taobh a chì boireannaich ma tha rud air a chailleadh a h-ùine: ceangal marbh, ceann-latha a chaidh seachad, cumhaichean nach eil a' freagairt air na thathar a' ruith. Chan eil dad ga dhubhadh às, cumaidh sibh a h-uile dad a sgrìobh sibh, agus thathar ag innse an adhbhair dhuibh air post-d agus air an deas-bhòrd agaibh. Càraich e agus innis dhuinn, agus thèid e suas a-rithist.",
  },
  "What do the figures on my overview mean?": {
    q: "Dè tha na h-àireamhan air an t-sealladh agam a' ciallachadh?",
    a: "Is e boireannaich air an ruigsinn an àireamh a bhrùth troimhe thugaibh. Is e tadhalan pròifil an àireamh a leugh duilleag na buidhne agaibh. Faodar an dà chuid a shealltainn airson na seachdain seo, a' mhìos seo no fad na h-ùine, agus is e cunntasan le cinn-latha nan cois a th' annta, cha mhotha a th' annta mu dheidhinn cò bh' ann.",
  },
  "Can HWS add our organisation for us?": {
    q: "An urrainn do HWS ar buidheann a chur ris às ar leth?",
    a: "'S urrainn. Cha chlàraich cuid de bhuidhnean iad fhèin a-chaoidh, mar sin faodaidh HWS tè a chur a-steach agus postadh às a leth. Ma 's e sin agaibhse agus gum b' fheàrr leibh a riaghladh, iarr oirnn agus bheir sinn seachad i.",
  },
  "How often should we post?": {
    q: "Dè cho tric 's a bu chòir dhuinn postadh?",
    a: "Cho tric 's a tha rudeigin agaibh dha-rìribh. Innsidh sibh dhuinn air a' phròifil agaibh dè an ruitheam ris a bheil dùil — a' mhòr-chuid de sheachdainean, gach mìos, nuair a cheadaicheas am maoineachadh — agus cleachdaidh sinn e gus co-dhùnadh dè cho tric a chuireas sinn fios, seach a bhith a' dranndan air a h-uile duine air an aon ghleoc.",
  },
};

const sco: FaqTable = {
  "What is HWS Path Grid?": {
    q: "Whit is HWS Path Grid?",
    a: "Ae place tae find support for weemen ower Scotland: coorses, fundin, advice, drap-ins, mentorin and mair. Tell us in yer ain wirds whit ye need and we shaw ye a wheen neist steps worth takkin, raither nor a directory tae sairch throu yersel.",
  },
  "Do I need an account?": {
    q: "Dae A need an accoont?",
    a: "No tae sairch, read or apply for onythin. The ae thing that needs an accoont is savin: press Save and ye're asked tae sign in, sae yer leet is still there neist time and we can warn ye afore somethin closes. Naethin else on the platform asks ye for onythin.",
  },
  "Does it cost anything?": {
    q: "Daes it cost onythin?",
    a: "Na. The platform is free tae uise. Some o the things leetit on it hae a cost, and ilka leetin says whilk — free, free tae apply, or there's a cost — afore ye click throu.",
  },
  "What happens to what I type?": {
    q: "Whit happens tae whit A type?",
    a: "Yer answers are uised tae order yer results and naethin else. Thay're no selt, no passed tae the organisations ye're shawn, and no uised tae big a profile o ye. We record that a leetin wis seen or clickit, as a coont and a date, wi naethin attached that could say it wis ye.",
  },
  "How do you decide what to show me?": {
    q: "Hou dae ye decide whit tae shaw me?",
    a: "Three things ye tell us: whit ye need in yer ain wirds, roochly whaur ye are, and onythin aboot yer situation ye chuse tae share. Thae are weighed again whit ilka leetin is for, wha it's open tae, whaur it rins and hou ye can reach it. Ilka result says hou it matched.",
  },
  "Does anyone pay to appear higher up?": {
    q: "Daes onybody pey tae kythe heicher up?",
    a: "Na. There's nae peyed placement and nae advertisin onywhaur on the platform. Naethin aboot the order o yer results can be bocht.",
  },
  "How do I know these organisations are real?": {
    q: "Hou dae A ken thir organisations are real?",
    a: "Ilka organisation is checkit again a public register, the Scottish Chairity Register or Companies House, or, whaur it has nae registration, again its funder, afore it can post onythin. Ilka leetin forby cairries the date it wis hindmaist confirmed, sae ye can see hou current it is.",
  },
  "What if nothing matches what I need?": {
    q: "Whit gin naethin matches whit A need?",
    a: "Ye'll be offert a wider sairch raither nor a tuim page, and ye can chynge ony o yer three answers. Gin there's still naethin, tell us: sairches that find naethin are recordit wioot onythin identifyin ye, and thay're hou we wark oot whit's missin.",
  },
  "Can I save something and come back to it?": {
    q: "Can A save somethin and come back tae it?",
    a: "Aye, wi an accoont. Press Save on onythin and ye're asked tae sign in wi a ane-time code; whit ye pressed Save on is keepit while ye dae and is waitin whan ye get back. We mind ye aboot seiven days afore a closin date, and ye can turn that aff onytime.",
  },
  "Will anyone know I have been here?": {
    q: "Will onybody ken A've been here?",
    a: "No frae us. We dinna contact onybody on yer behauf, we dinna tell an organisation ye luikit at it, and naethin ye dae here kythes onywhaur somebody else can see. Mind that yer ain brouser keeps a history, as it daes on ony site.",
  },
  "What if a listing is wrong or out of date?": {
    q: "Whit gin a leetin is wrang or oot o date?",
    a: "Tell us. There's a report link on ilka leetin page. We check it, and gin it's wrang the organisation is asked tae fix it; gin a wumman wad waste an efternuin on it in the meantime, we tak it doun till it's sortit.",
  },
  "What happens when a closing date passes?": {
    q: "Whit happens whan a closin date gangs by?",
    a: "The leetin closes but disna disappear. Ye can still reach it frae a saved leet or a link, sae a page ye were sent disna turn intae naethin, and it stops competin wi things that are still open.",
  },
  "Is this only for Scotland?": {
    q: "Is this ainly for Scotland?",
    a: "Aye. Ilka organisation here warks in Scotland, and the places we match on are Scots touns and cooncil airts. Some leetins are online and open tae onybody, and thae say sae.",
  },
  "Can I read this in another language?": {
    q: "Can A read this in anither language?",
    a: "Aye. The language control at the tap o the page offers Gaelic, Scots, Polish, Ukrainian, Arabic, Urdu, Punjabi, simplifeed Chinese, Romanian, Somali and Tigrinya, and the hale o the sairch is owerset, no juist the front page. Whit organisations write aboot thairsels bides in the language thay wrote it in, acause we dinna machine-owerset onybody's wirds. Ilka owersettin here wis machine-draftit and is waitin on a native speaker tae read it.",
  },
  "I need help right now.": {
    q: "A need help the nou.",
    a: "This platform is for findin support, no for emergencies, and naebody here is watchin it. Gin ye're in immediate danger, caw 999. Scotland's Domestic Abuse and Forced Marriage Helpline is free on 0800 027 1234, day or nicht.",
  },
  "Who can list on HWS Path Grid?": {
    q: "Wha can leet on HWS Path Grid?",
    a: "Ony organisation warkin wi weemen in Scotland: chairities, social enterprises, public bodies, colleges, businesses and constitutit community groups. Ye dinna hae tae be weemen-ainly, but whit ye leet has tae be somethin a wumman can act on.",
  },
  "Does it cost anything to be listed?": {
    q: "Daes it cost onythin tae be leetit?",
    a: "Na. Leetin is free and there's nae peyed placement tae buy, sae naethin ye pey could chynge whaur ye kythe in onybody's results.",
  },
  "How do you check us, and how long does it take?": {
    q: "Hou dae ye check us, and hou lang daes it tak?",
    a: "Again a public register whaur ye hae ane, a chairity nummer or a company nummer, and again yer funder whaur ye dinna. It uisually taks aboot twa warkin days frae the pynt ye feenish signin up. Ye'll get an email either wey, and gin we need ae mair thing we'll say exactly whit.",
  },
  "What do I need to fill in?": {
    q: "Whit dae A need tae fill in?",
    a: "Signin up is three short steps: wha ye are, yer Access Zones, and a contact for verification. Efter that there's a fuller profile, yer mission, wha ye wark wi, whit ye offer, hou faur ye reach and wha ye canna help. That profile is whit decides whilk weemen we send ye, sae it's worth the twinty meenits.",
  },
  "What can I post?": {
    q: "Whit can A post?",
    a: "Ae thing a wumman can act on: a coorse, a grant, a drap-in, an event, a mentorin place, a ane-tae-ane. Post thaim separate raither nor bundlin thaim, sae ilk ane can be matched tae the weemen it raelly suits.",
  },
  "Who decides which women see my listing?": {
    q: "Wha decides whilk weemen see ma leetin?",
    a: "A ranker, frae whit she typed and whit ye wrote. It weighs the situations ye taggit, her ain wirds again yours, and whether ye're within reach o her. Ilka factor is in ae file and nane o it can be bocht. She's forby telt hou yer leetin matched her.",
  },
  "Can I edit a listing after it is live?": {
    q: "Can A edit a leetin efter it's live?",
    a: "Aye, onytime, and it bides live while ye dae. The leetin shaws the date it wis hindmaist updatit, sae a wumman can see it's current.",
  },
  "What happens when my closing date passes?": {
    q: "Whit happens whan ma closin date gangs by?",
    a: "The leetin closes on its ain. Naebody asks ye tae confirm, acause ye awreadies telt us the date. It bides reachable sae onybody that saved it isna left wi a deid link, and it stops competin wi things still open. Tae extend it, edit the date.",
  },
  "Can colleagues help manage our listings?": {
    q: "Can colleagues help manage oor leetins?",
    a: "Aye. Invite thaim by email frae yer organisation page aince ye're verified. Thay get thair ain sign-in and inherit yer verified status, sae there's naethin tae prove again.",
  },
  "Why has my listing been hidden?": {
    q: "Hou has ma leetin been hidden?",
    a: "An admin can tak a leetin aff the wumman-facin side gin somethin on it wad waste her time, a deid link, a date that's gane by, eligibility that disna match whit's actually rin. Naethin is deletit, ye keep awthing ye wrote, and ye're telt the raeson by email and on yer dashboard. Fix it and tell us, and it gangs back up.",
  },
  "What do the figures on my overview mean?": {
    q: "Whit dae the figures on ma owerview mean?",
    a: "Weemen reached is the nummer that clickit throu tae ye. Profile visits is the nummer that read yer organisation page. Baith can be shawn for this week, this month or aw time, and thay're coonts wi dates attached, niver onythin aboot wha onybody wis.",
  },
  "Can HWS add our organisation for us?": {
    q: "Can HWS add oor organisation for us?",
    a: "Aye. Some organisations will niver sign up thairsels, sae HWS can enter ane and post on its behauf. Gin that's yours and ye'd raither manage it, speir at us and we'll haund it ower.",
  },
  "How often should we post?": {
    q: "Hou aften shid we post?",
    a: "As aften as ye genuinely hae somethin. Ye tell us yer expectit rhythm on yer profile, maist weeks, ilka month, whan fundin alloos, and we uise it tae decide hou aften tae check in, raither nor naggin awbody on the same clock.",
  },
};

const pl: FaqTable = {
  "What is HWS Path Grid?": {
    q: "Czym jest HWS Path Grid?",
    a: "Jedno miejsce, w którym można znaleźć wsparcie dla kobiet w całej Szkocji: kursy, finansowanie, porady, dyżury otwarte, mentoring i więcej. Powiedz nam własnymi słowami, czego potrzebujesz, a my pokażemy ci kilka kolejnych kroków wartych zrobienia, zamiast katalogu, który musisz przeszukać sama.",
  },
  "Do I need an account?": {
    q: "Czy potrzebuję konta?",
    a: "Nie, żeby szukać, czytać ani się o cokolwiek ubiegać. Jedyne, co wymaga konta, to zapisywanie: naciskasz Zapisz i prosimy cię o zalogowanie, dzięki czemu twoja lista będzie na miejscu następnym razem i możemy cię ostrzec, zanim coś się zamknie. Nic innego na tej platformie o nic cię nie prosi.",
  },
  "Does it cost anything?": {
    q: "Czy to coś kosztuje?",
    a: "Nie. Platforma jest bezpłatna. Niektóre rzeczy na niej wymienione mają swoją cenę i każdy wpis mówi, która to opcja — bezpłatne, bezpłatne zgłoszenie albo jest opłata — zanim klikniesz dalej.",
  },
  "What happens to what I type?": {
    q: "Co dzieje się z tym, co wpisuję?",
    a: "Twoje odpowiedzi służą wyłącznie do uporządkowania wyników. Nie są sprzedawane, nie trafiają do organizacji, które ci pokazujemy, i nie są używane do budowania twojego profilu. Zapisujemy, że wpis został wyświetlony albo kliknięty, jako liczbę i datę, bez niczego, co mogłoby wskazać, że to byłaś ty.",
  },
  "How do you decide what to show me?": {
    q: "Jak decydujecie, co mi pokazać?",
    a: "Na podstawie trzech rzeczy, które nam mówisz: czego potrzebujesz własnymi słowami, mniej więcej gdzie jesteś i tego, co zechcesz powiedzieć o swojej sytuacji. Zestawiamy to z tym, czemu służy każdy wpis, dla kogo jest otwarty, gdzie się odbywa i jak możesz do niego dotrzeć. Każdy wynik mówi, dlaczego pasuje.",
  },
  "Does anyone pay to appear higher up?": {
    q: "Czy ktoś płaci, żeby pojawić się wyżej?",
    a: "Nie. Nigdzie na platformie nie ma płatnych miejsc ani reklam. Kolejności twoich wyników nie da się kupić.",
  },
  "How do I know these organisations are real?": {
    q: "Skąd mam wiedzieć, że te organizacje są prawdziwe?",
    a: "Każdą organizację sprawdzamy w publicznym rejestrze — szkockim rejestrze organizacji charytatywnych albo Companies House — a jeśli nie jest nigdzie zarejestrowana, u jej finansującego, zanim będzie mogła cokolwiek opublikować. Każdy wpis nosi też datę ostatniego potwierdzenia, więc widzisz, na ile jest aktualny.",
  },
  "What if nothing matches what I need?": {
    q: "A jeśli nic nie pasuje do tego, czego potrzebuję?",
    a: "Zaproponujemy ci szersze wyszukiwanie zamiast pustej strony i możesz zmienić każdą z trzech odpowiedzi. Jeśli nadal nic nie ma, powiedz nam — wyszukiwania, które nic nie znajdują, są zapisywane bez niczego, co by cię identyfikowało, i to dzięki nim ustalamy, czego brakuje.",
  },
  "Can I save something and come back to it?": {
    q: "Czy mogę coś zapisać i wrócić do tego?",
    a: "Tak, mając konto. Naciśnij Zapisz na czymkolwiek, a poprosimy cię o zalogowanie jednorazowym kodem; to, co zapisałaś, jest przechowywane w międzyczasie i czeka, gdy wrócisz. Przypominamy mniej więcej siedem dni przed datą zamknięcia, a przypomnienia możesz wyłączyć w każdej chwili.",
  },
  "Will anyone know I have been here?": {
    q: "Czy ktoś się dowie, że tu byłam?",
    a: "Nie od nas. Nie kontaktujemy się z nikim w twoim imieniu, nie mówimy organizacji, że ją oglądałaś, i nic, co tu robisz, nie pojawia się nigdzie, gdzie ktoś inny mógłby to zobaczyć. Pamiętaj jednak, że twoja własna przeglądarka zapisuje historię, tak jak na każdej stronie.",
  },
  "What if a listing is wrong or out of date?": {
    q: "A jeśli wpis jest błędny albo nieaktualny?",
    a: "Powiedz nam. Na każdej stronie wpisu jest link do zgłoszenia. Sprawdzamy to, a jeśli wpis jest błędny, prosimy organizację o poprawkę; jeśli w międzyczasie kobieta straciłaby na nim pół dnia, zdejmujemy go do czasu wyjaśnienia.",
  },
  "What happens when a closing date passes?": {
    q: "Co się dzieje, gdy minie data zamknięcia?",
    a: "Wpis się zamyka, ale nie znika. Nadal możesz do niego dotrzeć z zapisanej listy albo z linku, więc strona, którą ci ktoś przesłał, nie zamienia się w nic, a jednocześnie przestaje konkurować z tym, co jest wciąż otwarte.",
  },
  "Is this only for Scotland?": {
    q: "Czy to tylko dla Szkocji?",
    a: "Tak. Każda organizacja tutaj działa w Szkocji, a miejsca, które dopasowujemy, to szkockie miasta i gminy. Część wpisów jest online i otwarta dla każdego — te mówią o tym wprost.",
  },
  "Can I read this in another language?": {
    q: "Czy mogę to czytać w innym języku?",
    a: "Tak. Przełącznik języka u góry strony oferuje gaelicki, scots, polski, ukraiński, arabski, urdu, pendżabski, chiński uproszczony, rumuński, somalijski i tigrinia, a przetłumaczone jest całe wyszukiwanie, nie tylko strona główna. To, co organizacje piszą o sobie, pozostaje w języku, w którym to napisały, bo nie tłumaczymy maszynowo cudzych słów. Każde tłumaczenie tutaj powstało maszynowo i czeka, aż przeczyta je rodzimy użytkownik języka.",
  },
  "I need help right now.": {
    q: "Potrzebuję pomocy natychmiast.",
    a: "Ta platforma służy do szukania wsparcia, nie do sytuacji awaryjnych, i nikt jej tu nie monitoruje. Jeśli grozi ci bezpośrednie niebezpieczeństwo, zadzwoń pod 999. Szkocka infolinia ds. przemocy domowej i małżeństw przymusowych jest bezpłatna pod numerem 0800 027 1234, dniem i nocą.",
  },
  "Who can list on HWS Path Grid?": {
    q: "Kto może się zgłosić do HWS Path Grid?",
    a: "Każda organizacja pracująca z kobietami w Szkocji: organizacje charytatywne, przedsiębiorstwa społeczne, instytucje publiczne, uczelnie, firmy i formalnie zawiązane grupy lokalne. Nie musicie działać wyłącznie dla kobiet, ale to, co zgłaszacie, musi być czymś, na co kobieta może odpowiedzieć.",
  },
  "Does it cost anything to be listed?": {
    q: "Czy obecność tutaj coś kosztuje?",
    a: "Nie. Zgłoszenie jest bezpłatne i nie ma płatnych miejsc do kupienia, więc nic, co zapłacicie, nie zmieni waszej pozycji w czyichś wynikach.",
  },
  "How do you check us, and how long does it take?": {
    q: "Jak nas sprawdzacie i ile to trwa?",
    a: "W publicznym rejestrze, jeśli jesteście w nim obecni — numer organizacji charytatywnej albo numer firmy — a jeśli nie, to u waszego finansującego. Zwykle trwa to około dwóch dni roboczych od zakończenia rejestracji. W każdym przypadku dostaniecie e-mail, a jeśli będziemy potrzebowali jeszcze jednej rzeczy, powiemy dokładnie jakiej.",
  },
  "What do I need to fill in?": {
    q: "Co muszę wypełnić?",
    a: "Rejestracja to trzy krótkie kroki: kim jesteście, wasze Strefy Dostępu i kontakt do weryfikacji. Potem jest pełniejszy profil: wasza misja, z kim pracujecie, co oferujecie, jak daleko sięgacie i komu nie możecie pomóc. To właśnie ten profil decyduje, które kobiety do was kierujemy, więc te dwadzieścia minut jest tego warte.",
  },
  "What can I post?": {
    q: "Co mogę opublikować?",
    a: "Jedną rzecz, na którą kobieta może odpowiedzieć: kurs, dotację, dyżur otwarty, wydarzenie, miejsce na mentoringu, spotkanie indywidualne. Publikujcie je osobno, zamiast łączyć w pakiety, żeby każdą dało się dopasować do kobiet, którym faktycznie odpowiada.",
  },
  "Who decides which women see my listing?": {
    q: "Kto decyduje, które kobiety zobaczą mój wpis?",
    a: "Algorytm porządkujący, na podstawie tego, co ona wpisała, i tego, co wy napisaliście. Waży oznaczone przez was sytuacje, jej własne słowa wobec waszych i to, czy jesteście w jej zasięgu. Wszystkie czynniki są w jednym pliku i żadnego nie da się kupić. Ona dowiaduje się też, dlaczego wasz wpis do niej pasował.",
  },
  "Can I edit a listing after it is live?": {
    q: "Czy mogę edytować wpis po opublikowaniu?",
    a: "Tak, w każdej chwili, i pozostaje on aktywny podczas edycji. Wpis pokazuje datę ostatniej aktualizacji, więc kobieta widzi, że jest aktualny.",
  },
  "What happens when my closing date passes?": {
    q: "Co się dzieje, gdy minie moja data zamknięcia?",
    a: "Wpis zamyka się sam. Nikt nie prosi was o potwierdzenie, bo datę podaliście wcześniej. Pozostaje dostępny, żeby ten, kto go zapisał, nie został z martwym linkiem, i przestaje konkurować z tym, co jest wciąż otwarte. Żeby go przedłużyć, zmieńcie datę.",
  },
  "Can colleagues help manage our listings?": {
    q: "Czy współpracownicy mogą pomagać w zarządzaniu wpisami?",
    a: "Tak. Zaproście ich e-mailem ze strony swojej organizacji, gdy już będziecie zweryfikowani. Dostaną własne logowanie i odziedziczą wasz status weryfikacji, więc niczego nie trzeba udowadniać od nowa.",
  },
  "Why has my listing been hidden?": {
    q: "Dlaczego mój wpis został ukryty?",
    a: "Administrator może zdjąć wpis ze strony widocznej dla kobiet, jeśli coś w nim zmarnowałoby jej czas: martwy link, data, która minęła, kryteria niezgodne z tym, co faktycznie prowadzicie. Nic nie jest usuwane, zachowujecie wszystko, co napisaliście, a powód dostajecie e-mailem i na swoim pulpicie. Poprawcie to i dajcie nam znać, a wpis wraca.",
  },
  "What do the figures on my overview mean?": {
    q: "Co oznaczają liczby na moim przeglądzie?",
    a: "Kobiety, do których dotarliście, to liczba tych, które kliknęły i przeszły do was. Wizyty na profilu to liczba tych, które przeczytały stronę waszej organizacji. Obie można pokazać za ten tydzień, ten miesiąc albo od początku, i są to liczby z datami, nigdy nic o tym, kim ktokolwiek był.",
  },
  "Can HWS add our organisation for us?": {
    q: "Czy HWS może dodać naszą organizację za nas?",
    a: "Tak. Niektóre organizacje nigdy nie zgłoszą się same, więc HWS może wprowadzić taką organizację i publikować w jej imieniu. Jeśli to wasza i wolelibyście zarządzać nią sami, poproście nas, a przekażemy ją wam.",
  },
  "How often should we post?": {
    q: "Jak często powinniśmy publikować?",
    a: "Tak często, jak naprawdę macie co. Na profilu podajecie swój spodziewany rytm — prawie co tydzień, co miesiąc, gdy pozwala finansowanie — a my używamy go, żeby ustalić, jak często się odzywać, zamiast nagabywać wszystkich w tym samym rytmie.",
  },
};

const uk: FaqTable = {
  "What is HWS Path Grid?": {
    q: "Що таке HWS Path Grid?",
    a: "Одне місце, де можна знайти підтримку для жінок по всій Шотландії: курси, фінансування, консультації, відкриті прийоми, менторство та інше. Розкажіть своїми словами, що вам потрібно, і ми покажемо кілька наступних кроків, які варто зробити, замість каталогу, який довелося б переглядати самостійно.",
  },
  "Do I need an account?": {
    q: "Чи потрібен мені обліковий запис?",
    a: "Ні, щоб шукати, читати чи подавати заявку. Єдине, для чого потрібен обліковий запис, — це збереження: ви натискаєте Зберегти, і вас просять увійти, щоб ваш список був на місці наступного разу і щоб ми могли попередити вас, перш ніж щось закриється. Більше нічого на платформі у вас нічого не просить.",
  },
  "Does it cost anything?": {
    q: "Чи це щось коштує?",
    a: "Ні. Платформа безкоштовна. Деякі з перелічених тут речей мають вартість, і кожен запис каже, яка саме ситуація — безкоштовно, подання заявки безкоштовне або є оплата — ще до того, як ви перейдете далі.",
  },
  "What happens to what I type?": {
    q: "Що відбувається з тим, що я пишу?",
    a: "Ваші відповіді використовуються лише для впорядкування результатів. Вони не продаються, не передаються організаціям, які ми вам показуємо, і не використовуються для створення вашого профілю. Ми фіксуємо, що запис переглянули або відкрили, як число й дату, без нічого, що могло б вказати на вас.",
  },
  "How do you decide what to show me?": {
    q: "Як ви вирішуєте, що мені показати?",
    a: "За трьома речами, які ви нам кажете: що вам потрібно, своїми словами, приблизно де ви перебуваєте і те, що ви захочете розповісти про свою ситуацію. Це зважується щодо того, для чого призначений кожен запис, кому він відкритий, де відбувається і як до нього дістатися. Кожен результат каже, чому він підійшов.",
  },
  "Does anyone pay to appear higher up?": {
    q: "Чи платить хтось, щоб бути вище?",
    a: "Ні. На платформі немає платного розміщення і немає реклами. Порядок ваших результатів неможливо купити.",
  },
  "How do I know these organisations are real?": {
    q: "Звідки мені знати, що ці організації справжні?",
    a: "Кожну організацію ми перевіряємо в публічному реєстрі — шотландському реєстрі благодійних організацій або Companies House, — а якщо реєстрації немає, то в її донора, перш ніж вона зможе щось опублікувати. Кожен запис також містить дату останнього підтвердження, тож ви бачите, наскільки він актуальний.",
  },
  "What if nothing matches what I need?": {
    q: "А якщо нічого не підходить під мої потреби?",
    a: "Вам запропонують ширший пошук замість порожньої сторінки, і ви можете змінити будь-яку з трьох відповідей. Якщо все одно нічого немає, скажіть нам: пошуки, які нічого не знаходять, записуються без будь-чого, що вас ідентифікує, і саме завдяки їм ми розуміємо, чого бракує.",
  },
  "Can I save something and come back to it?": {
    q: "Чи можу я щось зберегти і повернутися до цього?",
    a: "Так, з обліковим записом. Натисніть Зберегти на будь-чому, і вас попросять увійти за одноразовим кодом; те, що ви зберегли, тримається весь цей час і чекає, коли ви повернетеся. Ми нагадуємо приблизно за сім днів до дати закриття, і це можна вимкнути будь-коли.",
  },
  "Will anyone know I have been here?": {
    q: "Чи дізнається хтось, що я тут була?",
    a: "Не від нас. Ми ні з ким не зв'язуємося від вашого імені, не повідомляємо організації, що ви її переглядали, і ніщо з того, що ви тут робите, не з'являється там, де це міг би побачити хтось інший. Але пам'ятайте, що ваш власний браузер зберігає історію, як і на будь-якому сайті.",
  },
  "What if a listing is wrong or out of date?": {
    q: "А якщо запис неправильний або застарілий?",
    a: "Скажіть нам. На сторінці кожного запису є посилання, щоб повідомити про це. Ми перевіряємо, і якщо запис хибний, просимо організацію виправити його; а якщо тим часом жінка згаяла б на ньому пів дня, ми знімаємо його, доки все не владнається.",
  },
  "What happens when a closing date passes?": {
    q: "Що відбувається, коли минає дата закриття?",
    a: "Запис закривається, але не зникає. До нього все ще можна дістатися зі збереженого списку чи за посиланням, тож сторінка, яку вам надіслали, не перетворюється на ніщо, і водночас вона перестає конкурувати з тим, що ще відкрите.",
  },
  "Is this only for Scotland?": {
    q: "Це тільки для Шотландії?",
    a: "Так. Кожна організація тут працює в Шотландії, а місця, за якими ми добираємо, — це шотландські міста й громади. Частина записів онлайн і відкрита для всіх, і вони про це прямо кажуть.",
  },
  "Can I read this in another language?": {
    q: "Чи можу я читати це іншою мовою?",
    a: "Так. Перемикач мови вгорі сторінки пропонує гельську, скотс, польську, українську, арабську, урду, панджабі, спрощену китайську, румунську, сомалійську та тигринья, і перекладено весь шлях пошуку, а не лише головна сторінка. Те, що організації пишуть про себе, залишається мовою, якою вони це написали, бо ми не перекладаємо машинно чиїсь слова. Кожен переклад тут зроблено машинно, і він чекає, щоб його прочитав носій мови.",
  },
  "I need help right now.": {
    q: "Мені потрібна допомога прямо зараз.",
    a: "Ця платформа призначена для пошуку підтримки, а не для надзвичайних ситуацій, і ніхто її тут не відстежує. Якщо вам загрожує безпосередня небезпека, телефонуйте 999. Шотландська гаряча лінія з питань домашнього насильства та примусового шлюбу працює безкоштовно за номером 0800 027 1234, вдень і вночі.",
  },
  "Who can list on HWS Path Grid?": {
    q: "Хто може бути тут представлений?",
    a: "Будь-яка організація, що працює з жінками в Шотландії: благодійні організації, соціальні підприємства, державні установи, коледжі, бізнеси та офіційно створені громадські групи. Вам не обов'язково працювати лише з жінками, але те, що ви подаєте, має бути тим, на що жінка може відгукнутися.",
  },
  "Does it cost anything to be listed?": {
    q: "Чи коштує щось бути тут представленими?",
    a: "Ні. Розміщення безкоштовне, і немає платних місць, які можна купити, тож ніщо з того, що ви заплатите, не змінить вашу позицію в чиїхось результатах.",
  },
  "How do you check us, and how long does it take?": {
    q: "Як ви нас перевіряєте і скільки це триває?",
    a: "У публічному реєстрі, якщо ви в ньому є — номер благодійної організації або номер компанії, — а якщо ні, то у вашого донора. Зазвичай це займає приблизно два робочі дні з моменту завершення реєстрації. У будь-якому разі ви отримаєте лист, а якщо нам знадобиться ще щось, ми скажемо точно що.",
  },
  "What do I need to fill in?": {
    q: "Що мені потрібно заповнити?",
    a: "Реєстрація — це три короткі кроки: хто ви, ваші Зони доступу і контакт для перевірки. Далі йде повніший профіль: ваша місія, з ким ви працюєте, що пропонуєте, як далеко сягаєте і кому не можете допомогти. Саме цей профіль вирішує, яких жінок ми до вас направляємо, тож ці двадцять хвилин варті того.",
  },
  "What can I post?": {
    q: "Що я можу опублікувати?",
    a: "Одну річ, на яку жінка може відгукнутися: курс, грант, відкритий прийом, подію, місце на менторстві, індивідуальну зустріч. Публікуйте їх окремо, а не пакетом, щоб кожну можна було зіставити з жінками, яким вона справді підходить.",
  },
  "Who decides which women see my listing?": {
    q: "Хто вирішує, які жінки побачать мій запис?",
    a: "Система впорядкування, на основі того, що написала вона, і того, що написали ви. Вона зважує позначені вами ситуації, її власні слова проти ваших і те, чи ви в межах її досяжності. Усі чинники — в одному файлі, і жоден з них не можна купити. Їй також повідомляють, чому ваш запис їй підійшов.",
  },
  "Can I edit a listing after it is live?": {
    q: "Чи можу я редагувати запис після публікації?",
    a: "Так, будь-коли, і він залишається опублікованим під час редагування. Запис показує дату останнього оновлення, тож жінка бачить, що він актуальний.",
  },
  "What happens when my closing date passes?": {
    q: "Що відбувається, коли минає моя дата закриття?",
    a: "Запис закривається сам. Ніхто не просить вас підтверджувати, бо дату ви вже назвали. Він залишається доступним, щоб той, хто його зберіг, не залишився з мертвим посиланням, і перестає конкурувати з тим, що ще відкрите. Щоб продовжити, змініть дату.",
  },
  "Can colleagues help manage our listings?": {
    q: "Чи можуть колеги допомагати керувати записами?",
    a: "Так. Запросіть їх електронною поштою зі сторінки вашої організації, щойно вас перевірять. Вони отримають власний вхід і успадкують ваш перевірений статус, тож доводити нічого не доведеться знову.",
  },
  "Why has my listing been hidden?": {
    q: "Чому мій запис приховали?",
    a: "Адміністратор може зняти запис з боку, який бачать жінки, якщо щось у ньому згаяло б її час: мертве посилання, дата, що минула, умови, які не відповідають тому, що насправді проводиться. Нічого не видаляється, ви зберігаєте все, що написали, а причину вам повідомляють листом і на вашій панелі. Виправте і скажіть нам — і запис повернеться.",
  },
  "What do the figures on my overview mean?": {
    q: "Що означають цифри в моєму огляді?",
    a: "Жінки, направлені до вас, — це кількість тих, хто перейшов до вас. Візити на профіль — це кількість тих, хто прочитав сторінку вашої організації. Обидва показники можна побачити за цей тиждень, цей місяць або за весь час, і це числа з датами, ніколи нічого про те, ким хтось був.",
  },
  "Can HWS add our organisation for us?": {
    q: "Чи може HWS додати нашу організацію за нас?",
    a: "Так. Деякі організації ніколи не зареєструються самі, тож HWS може внести таку організацію і публікувати від її імені. Якщо це ваша і ви б воліли керувати нею самі, попросіть нас — і ми її передамо.",
  },
  "How often should we post?": {
    q: "Як часто нам публікувати?",
    a: "Так часто, як у вас справді є що. У профілі ви вказуєте очікуваний ритм — майже щотижня, щомісяця, коли дозволяє фінансування, — і ми використовуємо його, щоб вирішити, як часто звертатися до вас, замість того щоб нагадувати всім за одним годинником.",
  },
};

const ar: FaqTable = {
  "What is HWS Path Grid?": {
    q: "ما هو HWS Path Grid؟",
    a: "مكان واحد تجدين فيه الدعم للنساء في جميع أنحاء اسكتلندا: دورات وتمويل واستشارات وزيارات بلا موعد وإرشاد وغير ذلك. أخبرينا بكلماتك ما الذي تحتاجينه، ونعرض عليك بضع خطوات تالية تستحق أن تُتخذ، بدل دليل تبحثين فيه بنفسك.",
  },
  "Do I need an account?": {
    q: "هل أحتاج إلى حساب؟",
    a: "ليس للبحث أو القراءة أو التقديم على أي شيء. الشيء الوحيد الذي يحتاج إلى حساب هو الحفظ: تضغطين حفظ فيُطلب منك تسجيل الدخول، لتبقى قائمتك موجودة في المرة القادمة ولنتمكن من تنبيهك قبل أن يُغلق شيء. لا شيء آخر على المنصة يطلب منك شيئاً.",
  },
  "Does it cost anything?": {
    q: "هل يكلّف شيئاً؟",
    a: "لا. استخدام المنصة مجاني. بعض الأشياء المدرجة عليها لها تكلفة، وكل عرض يقول أيّها ينطبق — مجاني، التقديم مجاني، أو هناك تكلفة — قبل أن تنتقلي إليه.",
  },
  "What happens to what I type?": {
    q: "ماذا يحدث لما أكتبه؟",
    a: "إجاباتك تُستخدم لترتيب نتائجك فقط. لا تُباع، ولا تُمرَّر إلى الجهات التي تُعرض عليك، ولا تُستخدم لبناء ملف عنك. نسجّل أن عرضاً شوهد أو فُتح، كعدد وتاريخ، دون أي شيء مرفق يمكن أن يقول إنك أنتِ.",
  },
  "How do you decide what to show me?": {
    q: "كيف تقررون ما تعرضونه عليّ؟",
    a: "من ثلاثة أشياء تخبريننا بها: ما تحتاجينه بكلماتك، وأين أنتِ تقريباً، وأي شيء عن وضعك تختارين مشاركته. تُوزن هذه مقابل ما هو كل عرض، ولمن هو مفتوح، وأين يُقام، وكيف يمكنك الوصول إليه. كل نتيجة تقول لماذا ناسبتك.",
  },
  "Does anyone pay to appear higher up?": {
    q: "هل يدفع أحد ليظهر في الأعلى؟",
    a: "لا. لا يوجد مكان مدفوع ولا إعلانات في أي مكان على المنصة. ترتيب نتائجك لا يمكن شراؤه.",
  },
  "How do I know these organisations are real?": {
    q: "كيف أعرف أن هذه الجهات حقيقية؟",
    a: "كل جهة تُفحص في سجل عام — السجل الاسكتلندي للجمعيات الخيرية أو Companies House — وحيث لا يوجد تسجيل، تُفحص لدى مموّلها، قبل أن تتمكن من نشر أي شيء. كل عرض يحمل أيضاً تاريخ آخر تأكيد له، لترين إلى أي حد هو حديث.",
  },
  "What if nothing matches what I need?": {
    q: "ماذا لو لم يناسب شيء ما أحتاجه؟",
    a: "سيُعرض عليك بحث أوسع بدل صفحة فارغة، ويمكنك تغيير أي من إجاباتك الثلاث. وإن لم يبقَ شيء، أخبرينا: عمليات البحث التي لا تجد شيئاً تُسجَّل دون أي شيء يعرّف بك، ومنها نعرف ما هو الناقص.",
  },
  "Can I save something and come back to it?": {
    q: "هل يمكنني حفظ شيء والعودة إليه؟",
    a: "نعم، بحساب. اضغطي حفظ على أي شيء فيُطلب منك الدخول برمز لمرة واحدة؛ وما ضغطتِ حفظ عليه يُحتفظ به في هذه الأثناء وينتظرك عند عودتك. نذكّرك قبل سبعة أيام تقريباً من موعد الإغلاق، ويمكنك إيقاف ذلك في أي وقت.",
  },
  "Will anyone know I have been here?": {
    q: "هل سيعرف أحد أنني كنت هنا؟",
    a: "ليس منّا. لا نتواصل مع أحد نيابة عنك، ولا نخبر جهة أنك اطّلعتِ عليها، ولا شيء مما تفعلينه هنا يظهر في مكان يمكن لشخص آخر رؤيته. لكن تذكّري أن متصفحك يحتفظ بسجل، كما في أي موقع.",
  },
  "What if a listing is wrong or out of date?": {
    q: "ماذا لو كان العرض خاطئاً أو قديماً؟",
    a: "أخبرينا. في كل صفحة عرض رابط للإبلاغ. نتحقق من ذلك، وإن كان خاطئاً يُطلب من الجهة تصحيحه؛ وإن كانت امرأة ستضيّع عليه بعد ظهر يوم في هذه الأثناء، نرفعه حتى يُحلّ الأمر.",
  },
  "What happens when a closing date passes?": {
    q: "ماذا يحدث عندما يمرّ موعد الإغلاق؟",
    a: "يُغلق العرض لكنه لا يختفي. لا يزال بإمكانك الوصول إليه من قائمة محفوظة أو من رابط، فلا تتحول صفحة أُرسلت إليك إلى لا شيء، ويتوقف في الوقت نفسه عن مزاحمة ما هو مفتوح.",
  },
  "Is this only for Scotland?": {
    q: "هل هذا لاسكتلندا فقط؟",
    a: "نعم. كل جهة هنا تعمل في اسكتلندا، والأماكن التي نطابق عليها هي بلدات ومناطق بلدية اسكتلندية. بعض العروض عبر الإنترنت ومفتوحة للجميع، وهي تقول ذلك.",
  },
  "Can I read this in another language?": {
    q: "هل يمكنني قراءة هذا بلغة أخرى؟",
    a: "نعم. زرّ اللغة في أعلى الصفحة يقدّم الغيلية والسكوتس والبولندية والأوكرانية والعربية والأردية والبنجابية والصينية المبسطة والرومانية والصومالية والتغرينية، ومسار البحث كله مترجم وليس الصفحة الأولى فقط. ما تكتبه الجهات عن نفسها يبقى باللغة التي كُتب بها، لأننا لا نترجم كلام أحد آلياً. كل ترجمة هنا كُتبت آلياً وتنتظر أن يقرأها متحدث أصلي.",
  },
  "I need help right now.": {
    q: "أحتاج مساعدة الآن.",
    a: "هذه المنصة للعثور على الدعم لا للحالات الطارئة، ولا أحد هنا يراقبها. إن كنتِ في خطر مباشر، اتصلي بالرقم 999. خط اسكتلندا للعنف الأسري والزواج القسري مجاني على الرقم 0800 027 1234، ليلاً ونهاراً.",
  },
  "Who can list on HWS Path Grid?": {
    q: "من يمكنه الإدراج على HWS Path Grid؟",
    a: "أي جهة تعمل مع النساء في اسكتلندا: الجمعيات الخيرية والمؤسسات الاجتماعية والجهات الحكومية والكليات والشركات والمجموعات المجتمعية المسجّلة. لستم مضطرين للعمل مع النساء فقط، لكن ما تدرجونه يجب أن يكون شيئاً يمكن لامرأة أن تتصرف بناءً عليه.",
  },
  "Does it cost anything to be listed?": {
    q: "هل يكلّف الإدراج شيئاً؟",
    a: "لا. الإدراج مجاني ولا توجد أماكن مدفوعة تُشترى، فلا شيء تدفعونه يمكن أن يغيّر موقعكم في نتائج أحد.",
  },
  "How do you check us, and how long does it take?": {
    q: "كيف تتحققون منّا، وكم يستغرق ذلك؟",
    a: "في سجل عام حيث يكون لديكم واحد — رقم جمعية خيرية أو رقم شركة — ولدى مموّلكم حيث لا يكون. يستغرق الأمر عادة نحو يومي عمل من لحظة إنهاء التسجيل. ستصلكم رسالة في الحالتين، وإن احتجنا شيئاً إضافياً سنقول بالضبط ما هو.",
  },
  "What do I need to fill in?": {
    q: "ما الذي يجب أن أملأه؟",
    a: "التسجيل ثلاث خطوات قصيرة: من أنتم، ومجالات الوصول لديكم، وجهة اتصال للتحقق. بعدها يأتي ملف أوفى: رسالتكم، ومع من تعملون، وما تقدّمونه، وإلى أي مدى تصلون، ومن لا تستطيعون مساعدته. ذلك الملف هو ما يقرر أي النساء نرسلهن إليكم، فهو يستحق العشرين دقيقة.",
  },
  "What can I post?": {
    q: "ماذا يمكنني أن أنشر؟",
    a: "شيئاً واحداً يمكن لامرأة أن تتصرف بناءً عليه: دورة، أو منحة، أو زيارة بلا موعد، أو فعالية، أو مكاناً في برنامج إرشاد، أو جلسة فردية. انشروها منفصلة بدل جمعها، ليتسنى مطابقة كل واحدة مع النساء اللواتي تناسبهن فعلاً.",
  },
  "Who decides which women see my listing?": {
    q: "من يقرر أي النساء يرين عرضي؟",
    a: "نظام ترتيب، انطلاقاً مما كتبته هي وما كتبتموه أنتم. يزن الأوضاع التي وسمتموها، وكلماتها مقابل كلماتكم، وما إذا كنتم في متناولها. كل العوامل في ملف واحد ولا شيء منها يُشترى. ويُقال لها أيضاً لماذا ناسبها عرضكم.",
  },
  "Can I edit a listing after it is live?": {
    q: "هل يمكنني تعديل عرض بعد نشره؟",
    a: "نعم، في أي وقت، ويظل منشوراً أثناء ذلك. يعرض العرض تاريخ آخر تحديث، فترى المرأة أنه حديث.",
  },
  "What happens when my closing date passes?": {
    q: "ماذا يحدث عندما يمرّ موعد الإغلاق لدينا؟",
    a: "يُغلق العرض من تلقاء نفسه. لا أحد يطلب منكم التأكيد، لأنكم أخبرتمونا بالتاريخ مسبقاً. يبقى الوصول إليه ممكناً حتى لا يبقى من حفظه أمام رابط ميت، ويتوقف عن مزاحمة ما هو مفتوح. ولتمديده، عدّلوا التاريخ.",
  },
  "Can colleagues help manage our listings?": {
    q: "هل يمكن لزملائنا المساعدة في إدارة عروضنا؟",
    a: "نعم. ادعوهم بالبريد من صفحة جهتكم بعد التحقق. يحصلون على تسجيل دخول خاص بهم ويرثون حالة التحقق لديكم، فلا شيء يحتاج إلى إثبات من جديد.",
  },
  "Why has my listing been hidden?": {
    q: "لماذا أُخفي عرضي؟",
    a: "يمكن لمشرف أن يرفع عرضاً عن الجانب الذي تراه النساء إن كان فيه ما يضيّع وقتها: رابط ميت، أو تاريخ مضى، أو شروط لا تطابق ما يجري فعلاً. لا شيء يُحذف، وتحتفظون بكل ما كتبتم، ويُبلَّغ إليكم السبب بالبريد وعلى لوحتكم. صحّحوه وأخبرونا، فيعود.",
  },
  "What do the figures on my overview mean?": {
    q: "ماذا تعني الأرقام في لوحتي؟",
    a: "النساء اللواتي وصلن إليكم هو عدد من نقرن ووصلن إليكم. زيارات الملف هو عدد من قرأن صفحة جهتكم. ويمكن عرض كليهما لهذا الأسبوع أو هذا الشهر أو منذ البداية، وهي أعداد بتواريخ، لا شيء فيها عن هوية أحد.",
  },
  "Can HWS add our organisation for us?": {
    q: "هل يمكن أن يضيف HWS جهتنا بدلاً عنا؟",
    a: "نعم. بعض الجهات لن تسجّل نفسها أبداً، فيمكن لـ HWS أن يُدخل جهة وينشر نيابة عنها. وإن كانت جهتكم وفضّلتم إدارتها بأنفسكم، اطلبوا منّا وسنسلّمها لكم.",
  },
  "How often should we post?": {
    q: "كم مرة ينبغي أن ننشر؟",
    a: "كلما كان لديكم شيء حقيقي. تخبروننا في ملفكم بالإيقاع المتوقع — معظم الأسابيع، شهرياً، عندما يسمح التمويل — ونستخدمه لنقرر كم مرة نتواصل معكم، بدل مطالبة الجميع على الساعة نفسها.",
  },
};

const ur: FaqTable = {
  "What is HWS Path Grid?": {
    q: "HWS Path Grid کیا ہے؟",
    a: "ایک ہی جگہ جہاں سکاٹ لینڈ بھر میں خواتین کے لیے مدد ملتی ہے: کورسز، سرمایہ، مشورہ، بغیر وقت لیے آنے کی سہولت، رہنمائی اور بہت کچھ۔ اپنے الفاظ میں بتائیں کہ آپ کو کیا چاہیے اور ہم آپ کو چند ایسے اگلے قدم دکھائیں گے جو اٹھانے کے قابل ہوں، نہ کہ ایک فہرست جسے آپ خود چھانتی رہیں۔",
  },
  "Do I need an account?": {
    q: "کیا مجھے اکاؤنٹ چاہیے؟",
    a: "تلاش کرنے، پڑھنے یا کسی چیز کے لیے درخواست دینے کے لیے نہیں۔ صرف محفوظ کرنے کے لیے اکاؤنٹ درکار ہے: آپ محفوظ کریں دبائیں گی تو سائن اِن کرنے کو کہا جائے گا، تاکہ اگلی بار آپ کی فہرست موجود ہو اور ہم آپ کو کسی چیز کے بند ہونے سے پہلے بتا سکیں۔ اس پلیٹ فارم پر اور کچھ آپ سے کچھ نہیں مانگتا۔",
  },
  "Does it cost anything?": {
    q: "کیا اس کا کوئی خرچ ہے؟",
    a: "نہیں۔ پلیٹ فارم مفت ہے۔ اس پر درج کچھ چیزوں کی قیمت ہوتی ہے، اور ہر اندراج آگے جانے سے پہلے بتا دیتا ہے کہ کون سی صورت ہے — مفت، درخواست مفت، یا اس کی قیمت ہے۔",
  },
  "What happens to what I type?": {
    q: "میں جو لکھتی ہوں اس کا کیا ہوتا ہے؟",
    a: "آپ کے جوابات صرف آپ کے نتائج ترتیب دینے کے لیے استعمال ہوتے ہیں۔ یہ نہ بیچے جاتے ہیں، نہ ان اداروں کو دیے جاتے ہیں جو آپ کو دکھائے جاتے ہیں، اور نہ آپ کا پروفائل بنانے کے لیے استعمال ہوتے ہیں۔ ہم صرف یہ ریکارڈ کرتے ہیں کہ کوئی اندراج دیکھا یا کھولا گیا، ایک عدد اور تاریخ کے طور پر، ایسی کسی چیز کے بغیر جو بتا سکے کہ وہ آپ تھیں۔",
  },
  "How do you decide what to show me?": {
    q: "آپ کیسے طے کرتے ہیں کہ مجھے کیا دکھانا ہے؟",
    a: "تین چیزیں جو آپ ہمیں بتاتی ہیں: اپنے الفاظ میں آپ کو کیا چاہیے، تقریباً آپ کہاں ہیں، اور اپنی صورتحال کے بارے میں جو کچھ آپ بتانا چاہیں۔ انہیں اس کے مقابل تولا جاتا ہے کہ ہر اندراج کس کے لیے ہے، کس کے لیے کھلا ہے، کہاں ہوتا ہے اور آپ وہاں کیسے پہنچ سکتی ہیں۔ ہر نتیجہ بتاتا ہے کہ وہ کیوں موزوں ہوا۔",
  },
  "Does anyone pay to appear higher up?": {
    q: "کیا کوئی اوپر آنے کے لیے پیسے دیتا ہے؟",
    a: "نہیں۔ پلیٹ فارم پر کہیں بھی ادائیگی کے عوض جگہ یا اشتہار نہیں ہے۔ آپ کے نتائج کی ترتیب خریدی نہیں جا سکتی۔",
  },
  "How do I know these organisations are real?": {
    q: "مجھے کیسے پتا چلے کہ یہ ادارے اصلی ہیں؟",
    a: "ہر ادارے کی جانچ کسی عوامی رجسٹر میں ہوتی ہے — سکاٹش چیریٹی رجسٹر یا Companies House — اور جہاں رجسٹریشن نہ ہو، وہاں اس کے فنڈ دینے والے سے، اس سے پہلے کہ وہ کچھ شائع کر سکے۔ ہر اندراج پر آخری تصدیق کی تاریخ بھی درج ہوتی ہے، تاکہ آپ دیکھ سکیں کہ وہ کتنا تازہ ہے۔",
  },
  "What if nothing matches what I need?": {
    q: "اگر میری ضرورت سے کچھ میل نہ کھائے تو؟",
    a: "آپ کو خالی صفحے کے بجائے وسیع تر تلاش پیش کی جائے گی، اور آپ اپنے تینوں جوابات میں سے کوئی بھی بدل سکتی ہیں۔ پھر بھی کچھ نہ ہو تو ہمیں بتائیں: جو تلاشیں کچھ نہیں ڈھونڈ پاتیں وہ آپ کی شناخت کے بغیر ریکارڈ ہوتی ہیں، اور انہی سے ہمیں پتا چلتا ہے کہ کیا کمی ہے۔",
  },
  "Can I save something and come back to it?": {
    q: "کیا میں کچھ محفوظ کر کے بعد میں واپس آ سکتی ہوں؟",
    a: "جی ہاں، اکاؤنٹ کے ساتھ۔ کسی بھی چیز پر محفوظ کریں دبائیں اور آپ سے ایک بار کے کوڈ سے سائن اِن کرنے کو کہا جائے گا؛ جس چیز پر آپ نے محفوظ دبایا وہ اس دوران روک لی جاتی ہے اور واپسی پر آپ کی منتظر ہوتی ہے۔ ہم بند ہونے کی تاریخ سے تقریباً سات دن پہلے یاد دلاتے ہیں، اور آپ یہ کسی بھی وقت بند کر سکتی ہیں۔",
  },
  "Will anyone know I have been here?": {
    q: "کیا کسی کو پتا چلے گا کہ میں یہاں آئی تھی؟",
    a: "ہماری طرف سے نہیں۔ ہم آپ کی طرف سے کسی سے رابطہ نہیں کرتے، کسی ادارے کو نہیں بتاتے کہ آپ نے اسے دیکھا، اور یہاں آپ جو کچھ کرتی ہیں وہ کہیں ایسی جگہ ظاہر نہیں ہوتا جہاں کوئی اور دیکھ سکے۔ البتہ یاد رکھیں کہ آپ کا اپنا براؤزر تاریخ محفوظ رکھتا ہے، جیسے کسی بھی سائٹ پر۔",
  },
  "What if a listing is wrong or out of date?": {
    q: "اگر کوئی اندراج غلط یا پرانا ہو تو؟",
    a: "ہمیں بتائیں۔ ہر اندراج کے صفحے پر رپورٹ کا لنک موجود ہے۔ ہم جانچ کرتے ہیں، اور اگر وہ غلط ہو تو ادارے سے درست کرنے کو کہتے ہیں؛ اگر اس دوران کسی خاتون کی آدھی دوپہر ضائع ہو سکتی ہو تو ہم اسے معاملہ طے ہونے تک ہٹا دیتے ہیں۔",
  },
  "What happens when a closing date passes?": {
    q: "بند ہونے کی تاریخ گزر جانے پر کیا ہوتا ہے؟",
    a: "اندراج بند ہو جاتا ہے مگر غائب نہیں ہوتا۔ آپ اب بھی محفوظ فہرست یا لنک سے اس تک پہنچ سکتی ہیں، تاکہ جو صفحہ آپ کو بھیجا گیا تھا وہ بے معنی نہ ہو جائے، اور وہ ان چیزوں سے مقابلہ کرنا بند کر دیتا ہے جو ابھی کھلی ہیں۔",
  },
  "Is this only for Scotland?": {
    q: "کیا یہ صرف سکاٹ لینڈ کے لیے ہے؟",
    a: "جی ہاں۔ یہاں ہر ادارہ سکاٹ لینڈ میں کام کرتا ہے، اور جن مقامات پر ہم ملاپ کرتے ہیں وہ سکاٹش قصبے اور کونسل علاقے ہیں۔ کچھ اندراج آن لائن ہیں اور ہر کسی کے لیے کھلے ہیں، اور وہ یہ بات صاف کہتے ہیں۔",
  },
  "Can I read this in another language?": {
    q: "کیا میں یہ کسی اور زبان میں پڑھ سکتی ہوں؟",
    a: "جی ہاں۔ صفحے کے اوپر زبان کا بٹن گیلک، سکاٹس، پولش، یوکرینی، عربی، اردو، پنجابی، آسان چینی، رومانیائی، صومالی اور تگرینیا پیش کرتا ہے، اور پوری تلاش ترجمہ شدہ ہے، صرف پہلا صفحہ نہیں۔ ادارے اپنے بارے میں جو لکھتے ہیں وہ اسی زبان میں رہتا ہے جس میں لکھا گیا، کیونکہ ہم کسی کے الفاظ کا مشینی ترجمہ نہیں کرتے۔ یہاں ہر ترجمہ مشین سے کیا گیا ہے اور اس کا منتظر ہے کہ کوئی مادری زبان بولنے والا اسے پڑھے۔",
  },
  "I need help right now.": {
    q: "مجھے ابھی مدد چاہیے۔",
    a: "یہ پلیٹ فارم مدد ڈھونڈنے کے لیے ہے، ہنگامی حالات کے لیے نہیں، اور یہاں کوئی نگرانی نہیں کر رہا۔ اگر آپ کو فوری خطرہ ہے تو 999 پر فون کریں۔ سکاٹ لینڈ کی ڈومیسٹک ابیوز اینڈ فورسڈ میرج ہیلپ لائن 0800 027 1234 پر مفت دستیاب ہے، دن ہو یا رات۔",
  },
  "Who can list on HWS Path Grid?": {
    q: "HWS Path Grid پر کون درج ہو سکتا ہے؟",
    a: "کوئی بھی ادارہ جو سکاٹ لینڈ میں خواتین کے ساتھ کام کرتا ہے: فلاحی ادارے، سماجی ادارے، سرکاری ادارے، کالج، کاروبار اور باقاعدہ کمیونٹی گروپ۔ آپ کا صرف خواتین کے لیے ہونا ضروری نہیں، مگر جو آپ درج کرتے ہیں وہ ایسی چیز ہونی چاہیے جس پر کوئی خاتون عمل کر سکے۔",
  },
  "Does it cost anything to be listed?": {
    q: "درج ہونے کا کوئی خرچ ہے؟",
    a: "نہیں۔ درج ہونا مفت ہے اور خریدنے کے لیے کوئی ادائیگی والی جگہ نہیں، تو آپ جو بھی ادا کریں اس سے کسی کے نتائج میں آپ کی جگہ نہیں بدل سکتی۔",
  },
  "How do you check us, and how long does it take?": {
    q: "آپ ہماری جانچ کیسے کرتے ہیں، اور کتنا وقت لگتا ہے؟",
    a: "جہاں آپ کا اندراج موجود ہو وہاں عوامی رجسٹر میں — چیریٹی نمبر یا کمپنی نمبر — اور جہاں نہ ہو وہاں آپ کے فنڈ دینے والے سے۔ رجسٹریشن مکمل کرنے کے بعد عموماً دو کاروباری دن لگتے ہیں۔ آپ کو دونوں صورتوں میں ای میل ملے گی، اور اگر ہمیں مزید کوئی چیز درکار ہوئی تو ہم بالکل واضح بتائیں گے کہ کیا۔",
  },
  "What do I need to fill in?": {
    q: "مجھے کیا بھرنا ہوگا؟",
    a: "رجسٹریشن تین مختصر مرحلے ہیں: آپ کون ہیں، آپ کے رسائی زون، اور تصدیق کے لیے ایک رابطہ۔ اس کے بعد ایک مکمل پروفائل ہے: آپ کا مقصد، آپ کن کے ساتھ کام کرتے ہیں، آپ کیا پیش کرتے ہیں، آپ کی رسائی کہاں تک ہے اور آپ کن کی مدد نہیں کر سکتے۔ وہی پروفائل طے کرتا ہے کہ ہم کون سی خواتین آپ کی طرف بھیجیں، تو بیس منٹ اس کے قابل ہیں۔",
  },
  "What can I post?": {
    q: "میں کیا شائع کر سکتا ہوں؟",
    a: "ایک ایسی چیز جس پر کوئی خاتون عمل کر سکے: ایک کورس، ایک گرانٹ، ایک کھلی نشست، ایک تقریب، رہنمائی کی ایک جگہ، ایک انفرادی ملاقات۔ انہیں اکٹھا کرنے کے بجائے الگ الگ شائع کریں، تاکہ ہر ایک کا ملاپ انہی خواتین سے ہو جن کے لیے وہ واقعی موزوں ہے۔",
  },
  "Who decides which women see my listing?": {
    q: "کون طے کرتا ہے کہ کون سی خواتین میرا اندراج دیکھیں؟",
    a: "ایک ترتیب دینے والا نظام، اس بنیاد پر کہ اس نے کیا لکھا اور آپ نے کیا لکھا۔ یہ آپ کی منتخب کردہ صورتحالوں، اس کے اپنے الفاظ بمقابلہ آپ کے الفاظ، اور یہ کہ آپ اس کی پہنچ میں ہیں یا نہیں، سب کو تولتا ہے۔ ہر عنصر ایک ہی فائل میں ہے اور کوئی خریدا نہیں جا سکتا۔ اسے یہ بھی بتایا جاتا ہے کہ آپ کا اندراج اس سے کیوں میل کھایا۔",
  },
  "Can I edit a listing after it is live?": {
    q: "کیا میں اندراج شائع ہونے کے بعد اسے بدل سکتا ہوں؟",
    a: "جی ہاں، کسی بھی وقت، اور اس دوران وہ شائع شدہ رہتا ہے۔ اندراج پر آخری تبدیلی کی تاریخ نظر آتی ہے، تاکہ کوئی خاتون دیکھ سکے کہ وہ تازہ ہے۔",
  },
  "What happens when my closing date passes?": {
    q: "میری بند ہونے کی تاریخ گزر جانے پر کیا ہوتا ہے؟",
    a: "اندراج خود بخود بند ہو جاتا ہے۔ کوئی آپ سے تصدیق نہیں مانگتا، کیونکہ تاریخ آپ پہلے ہی بتا چکے ہیں۔ وہ قابلِ رسائی رہتا ہے تاکہ جس نے اسے محفوظ کیا تھا اس کے پاس مردہ لنک نہ رہ جائے، اور وہ کھلی چیزوں سے مقابلہ کرنا بند کر دیتا ہے۔ بڑھانے کے لیے تاریخ بدل دیں۔",
  },
  "Can colleagues help manage our listings?": {
    q: "کیا ساتھی ہمارے اندراجات سنبھالنے میں مدد کر سکتے ہیں؟",
    a: "جی ہاں۔ تصدیق کے بعد اپنے ادارے کے صفحے سے انہیں ای میل کے ذریعے مدعو کریں۔ انہیں اپنا سائن اِن ملے گا اور آپ کی تصدیق شدہ حیثیت وراثت میں ملے گی، تو دوبارہ کچھ ثابت کرنے کی ضرورت نہیں۔",
  },
  "Why has my listing been hidden?": {
    q: "میرا اندراج کیوں چھپا دیا گیا؟",
    a: "ایک منتظم کسی اندراج کو خواتین کو نظر آنے والے حصے سے ہٹا سکتا ہے اگر اس میں کوئی چیز اُن کا وقت ضائع کرے: مردہ لنک، گزری ہوئی تاریخ، یا ایسی شرائط جو اصل میں چلنے والی چیز سے میل نہ کھاتی ہوں۔ کچھ حذف نہیں ہوتا، آپ کا لکھا سب محفوظ رہتا ہے، اور وجہ آپ کو ای میل اور اپنے ڈیش بورڈ پر بتائی جاتی ہے۔ درست کر کے ہمیں بتائیں، اور یہ دوبارہ لگ جائے گا۔",
  },
  "What do the figures on my overview mean?": {
    q: "میرے خلاصے پر دیے گئے اعداد کا کیا مطلب ہے؟",
    a: "آپ تک پہنچنے والی خواتین وہ تعداد ہے جنہوں نے کلک کر کے آپ تک رسائی کی۔ پروفائل وزٹ وہ تعداد ہے جنہوں نے آپ کے ادارے کا صفحہ پڑھا۔ دونوں اس ہفتے، اس مہینے یا شروع سے دکھائے جا سکتے ہیں، اور یہ تاریخ کے ساتھ اعداد ہیں، کبھی بھی یہ نہیں کہ کوئی کون تھا۔",
  },
  "Can HWS add our organisation for us?": {
    q: "کیا HWS ہماری جگہ ہمارا ادارہ شامل کر سکتا ہے؟",
    a: "جی ہاں۔ کچھ ادارے کبھی خود رجسٹر نہیں ہوں گے، تو HWS ایسا ادارہ درج کر کے اس کی طرف سے شائع کر سکتا ہے۔ اگر وہ آپ کا ہے اور آپ خود سنبھالنا چاہیں تو ہم سے کہیں، ہم آپ کے حوالے کر دیں گے۔",
  },
  "How often should we post?": {
    q: "ہمیں کتنی بار شائع کرنا چاہیے؟",
    a: "جتنی بار آپ کے پاس واقعی کچھ ہو۔ آپ اپنے پروفائل پر اپنی متوقع رفتار بتاتے ہیں — زیادہ تر ہفتوں میں، ماہانہ، جب فنڈنگ اجازت دے — اور ہم اسی سے طے کرتے ہیں کہ کتنی بار رابطہ کریں، بجائے اس کے کہ سب کو ایک ہی گھڑی پر تنگ کریں۔",
  },
};

const pa: FaqTable = {
  "What is HWS Path Grid?": {
    q: "HWS Path Grid ਕੀ ਹੈ?",
    a: "ਇੱਕ ਹੀ ਥਾਂ ਜਿੱਥੇ ਸਕਾਟਲੈਂਡ ਭਰ ਵਿੱਚ ਔਰਤਾਂ ਲਈ ਸਹਾਰਾ ਮਿਲਦਾ ਹੈ: ਕੋਰਸ, ਪੈਸਾ, ਸਲਾਹ, ਬਿਨਾਂ ਸਮਾਂ ਲਏ ਆਉਣ ਦੀ ਸਹੂਲਤ, ਰਹਿਨੁਮਾਈ ਤੇ ਹੋਰ ਬਹੁਤ ਕੁਝ। ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸੋ ਕਿ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ ਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਕੁਝ ਅਜਿਹੇ ਅਗਲੇ ਕਦਮ ਦਿਖਾਵਾਂਗੇ ਜੋ ਚੁੱਕਣ ਦੇ ਲਾਇਕ ਹਨ, ਨਾ ਕਿ ਇੱਕ ਸੂਚੀ ਜਿਸ ਨੂੰ ਤੁਸੀਂ ਆਪ ਫਰੋਲਦੇ ਰਹੋ।",
  },
  "Do I need an account?": {
    q: "ਕੀ ਮੈਨੂੰ ਖਾਤੇ ਦੀ ਲੋੜ ਹੈ?",
    a: "ਲੱਭਣ, ਪੜ੍ਹਨ ਜਾਂ ਕਿਸੇ ਚੀਜ਼ ਲਈ ਅਰਜ਼ੀ ਦੇਣ ਵਾਸਤੇ ਨਹੀਂ। ਸਿਰਫ਼ ਸੰਭਾਲਣ ਲਈ ਖਾਤਾ ਚਾਹੀਦਾ ਹੈ: ਤੁਸੀਂ ਸੰਭਾਲੋ ਦਬਾਓਗੇ ਤਾਂ ਸਾਈਨ ਇਨ ਕਰਨ ਲਈ ਕਿਹਾ ਜਾਵੇਗਾ, ਤਾਂ ਜੋ ਅਗਲੀ ਵਾਰ ਤੁਹਾਡੀ ਸੂਚੀ ਮੌਜੂਦ ਹੋਵੇ ਤੇ ਅਸੀਂ ਕਿਸੇ ਚੀਜ਼ ਦੇ ਬੰਦ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਨੂੰ ਦੱਸ ਸਕੀਏ। ਇਸ ਪਲੇਟਫਾਰਮ ਤੇ ਹੋਰ ਕੁਝ ਵੀ ਤੁਹਾਡੇ ਤੋਂ ਕੁਝ ਨਹੀਂ ਮੰਗਦਾ।",
  },
  "Does it cost anything?": {
    q: "ਕੀ ਇਸ ਦਾ ਕੋਈ ਖਰਚਾ ਹੈ?",
    a: "ਨਹੀਂ। ਪਲੇਟਫਾਰਮ ਮੁਫ਼ਤ ਹੈ। ਇਸ ਉੱਤੇ ਦਰਜ ਕੁਝ ਚੀਜ਼ਾਂ ਦਾ ਖਰਚਾ ਹੁੰਦਾ ਹੈ, ਤੇ ਹਰ ਇੰਦਰਾਜ ਅੱਗੇ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਦੱਸ ਦਿੰਦਾ ਹੈ ਕਿ ਕਿਹੜੀ ਗੱਲ ਹੈ — ਮੁਫ਼ਤ, ਅਰਜ਼ੀ ਮੁਫ਼ਤ, ਜਾਂ ਇਸ ਦਾ ਖਰਚਾ ਹੈ।",
  },
  "What happens to what I type?": {
    q: "ਮੈਂ ਜੋ ਲਿਖਦੀ ਹਾਂ ਉਸ ਦਾ ਕੀ ਬਣਦਾ ਹੈ?",
    a: "ਤੁਹਾਡੇ ਜਵਾਬ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਨਤੀਜੇ ਤਰਤੀਬ ਦੇਣ ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ। ਇਹ ਨਾ ਵੇਚੇ ਜਾਂਦੇ ਹਨ, ਨਾ ਉਨ੍ਹਾਂ ਅਦਾਰਿਆਂ ਨੂੰ ਦਿੱਤੇ ਜਾਂਦੇ ਹਨ ਜੋ ਤੁਹਾਨੂੰ ਦਿਖਾਏ ਜਾਂਦੇ ਹਨ, ਤੇ ਨਾ ਹੀ ਤੁਹਾਡਾ ਪ੍ਰੋਫਾਈਲ ਬਣਾਉਣ ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ। ਅਸੀਂ ਸਿਰਫ਼ ਇਹ ਦਰਜ ਕਰਦੇ ਹਾਂ ਕਿ ਕੋਈ ਇੰਦਰਾਜ ਵੇਖਿਆ ਜਾਂ ਖੋਲ੍ਹਿਆ ਗਿਆ, ਇੱਕ ਗਿਣਤੀ ਤੇ ਤਾਰੀਖ਼ ਵਜੋਂ, ਬਿਨਾਂ ਕਿਸੇ ਐਸੀ ਚੀਜ਼ ਦੇ ਜੋ ਦੱਸ ਸਕੇ ਕਿ ਉਹ ਤੁਸੀਂ ਸੀ।",
  },
  "How do you decide what to show me?": {
    q: "ਤੁਸੀਂ ਕਿਵੇਂ ਤੈਅ ਕਰਦੇ ਹੋ ਕਿ ਮੈਨੂੰ ਕੀ ਦਿਖਾਉਣਾ ਹੈ?",
    a: "ਤਿੰਨ ਗੱਲਾਂ ਜੋ ਤੁਸੀਂ ਸਾਨੂੰ ਦੱਸਦੇ ਹੋ: ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ, ਤੁਸੀਂ ਲਗਭਗ ਕਿੱਥੇ ਹੋ, ਤੇ ਆਪਣੀ ਹਾਲਤ ਬਾਰੇ ਜੋ ਕੁਝ ਤੁਸੀਂ ਦੱਸਣਾ ਚਾਹੋ। ਇਨ੍ਹਾਂ ਨੂੰ ਇਸ ਨਾਲ ਤੋਲਿਆ ਜਾਂਦਾ ਹੈ ਕਿ ਹਰ ਇੰਦਰਾਜ ਕਿਸ ਲਈ ਹੈ, ਕਿਸ ਲਈ ਖੁੱਲ੍ਹਾ ਹੈ, ਕਿੱਥੇ ਚੱਲਦਾ ਹੈ ਤੇ ਤੁਸੀਂ ਉੱਥੇ ਕਿਵੇਂ ਪਹੁੰਚ ਸਕਦੇ ਹੋ। ਹਰ ਨਤੀਜਾ ਦੱਸਦਾ ਹੈ ਕਿ ਉਹ ਕਿਉਂ ਮੇਲ ਖਾਇਆ।",
  },
  "Does anyone pay to appear higher up?": {
    q: "ਕੀ ਕੋਈ ਉੱਪਰ ਆਉਣ ਲਈ ਪੈਸੇ ਦਿੰਦਾ ਹੈ?",
    a: "ਨਹੀਂ। ਪਲੇਟਫਾਰਮ ਤੇ ਕਿਤੇ ਵੀ ਪੈਸੇ ਲੈ ਕੇ ਥਾਂ ਨਹੀਂ ਦਿੱਤੀ ਜਾਂਦੀ ਤੇ ਨਾ ਹੀ ਕੋਈ ਇਸ਼ਤਿਹਾਰ ਹੈ। ਤੁਹਾਡੇ ਨਤੀਜਿਆਂ ਦੀ ਤਰਤੀਬ ਖਰੀਦੀ ਨਹੀਂ ਜਾ ਸਕਦੀ।",
  },
  "How do I know these organisations are real?": {
    q: "ਮੈਨੂੰ ਕਿਵੇਂ ਪਤਾ ਲੱਗੇ ਕਿ ਇਹ ਅਦਾਰੇ ਅਸਲੀ ਹਨ?",
    a: "ਹਰ ਅਦਾਰੇ ਦੀ ਜਾਂਚ ਕਿਸੇ ਜਨਤਕ ਰਜਿਸਟਰ ਵਿੱਚ ਕੀਤੀ ਜਾਂਦੀ ਹੈ — ਸਕਾਟਿਸ਼ ਚੈਰਿਟੀ ਰਜਿਸਟਰ ਜਾਂ Companies House — ਤੇ ਜਿੱਥੇ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨਾ ਹੋਵੇ, ਉੱਥੇ ਉਸ ਦੇ ਫੰਡ ਦੇਣ ਵਾਲੇ ਤੋਂ, ਇਸ ਤੋਂ ਪਹਿਲਾਂ ਕਿ ਉਹ ਕੁਝ ਪਾ ਸਕੇ। ਹਰ ਇੰਦਰਾਜ ਉੱਤੇ ਆਖ਼ਰੀ ਤਸਦੀਕ ਦੀ ਤਾਰੀਖ਼ ਵੀ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਜੋ ਤੁਸੀਂ ਵੇਖ ਸਕੋ ਕਿ ਉਹ ਕਿੰਨਾ ਤਾਜ਼ਾ ਹੈ।",
  },
  "What if nothing matches what I need?": {
    q: "ਜੇ ਮੇਰੀ ਲੋੜ ਨਾਲ ਕੁਝ ਮੇਲ ਨਾ ਖਾਵੇ ਤਾਂ?",
    a: "ਤੁਹਾਨੂੰ ਖਾਲੀ ਸਫ਼ੇ ਦੀ ਥਾਂ ਵੱਡੇ ਘੇਰੇ ਦੀ ਖੋਜ ਪੇਸ਼ ਕੀਤੀ ਜਾਵੇਗੀ, ਤੇ ਤੁਸੀਂ ਆਪਣੇ ਤਿੰਨਾਂ ਜਵਾਬਾਂ ਵਿੱਚੋਂ ਕੋਈ ਵੀ ਬਦਲ ਸਕਦੇ ਹੋ। ਫਿਰ ਵੀ ਕੁਝ ਨਾ ਹੋਵੇ ਤਾਂ ਸਾਨੂੰ ਦੱਸੋ: ਜੋ ਖੋਜਾਂ ਕੁਝ ਨਹੀਂ ਲੱਭਦੀਆਂ ਉਹ ਤੁਹਾਡੀ ਪਛਾਣ ਤੋਂ ਬਿਨਾਂ ਦਰਜ ਹੁੰਦੀਆਂ ਹਨ, ਤੇ ਉਨ੍ਹਾਂ ਤੋਂ ਹੀ ਸਾਨੂੰ ਪਤਾ ਲੱਗਦਾ ਹੈ ਕਿ ਕੀ ਘਾਟ ਹੈ।",
  },
  "Can I save something and come back to it?": {
    q: "ਕੀ ਮੈਂ ਕੁਝ ਸੰਭਾਲ ਕੇ ਬਾਅਦ ਵਿੱਚ ਵਾਪਸ ਆ ਸਕਦੀ ਹਾਂ?",
    a: "ਹਾਂ, ਖਾਤੇ ਨਾਲ। ਕਿਸੇ ਵੀ ਚੀਜ਼ ਤੇ ਸੰਭਾਲੋ ਦਬਾਓ ਤੇ ਤੁਹਾਨੂੰ ਇੱਕ ਵਾਰ ਦੇ ਕੋਡ ਨਾਲ ਸਾਈਨ ਇਨ ਕਰਨ ਲਈ ਕਿਹਾ ਜਾਵੇਗਾ; ਜਿਸ ਚੀਜ਼ ਤੇ ਤੁਸੀਂ ਸੰਭਾਲੋ ਦਬਾਇਆ ਸੀ ਉਹ ਇਸ ਦੌਰਾਨ ਰੱਖੀ ਰਹਿੰਦੀ ਹੈ ਤੇ ਵਾਪਸੀ ਤੇ ਤੁਹਾਡੀ ਉਡੀਕ ਕਰਦੀ ਹੈ। ਅਸੀਂ ਬੰਦ ਹੋਣ ਦੀ ਤਾਰੀਖ਼ ਤੋਂ ਕਰੀਬ ਸੱਤ ਦਿਨ ਪਹਿਲਾਂ ਯਾਦ ਕਰਾਉਂਦੇ ਹਾਂ, ਤੇ ਤੁਸੀਂ ਇਹ ਕਿਸੇ ਵੀ ਵੇਲੇ ਬੰਦ ਕਰ ਸਕਦੇ ਹੋ।",
  },
  "Will anyone know I have been here?": {
    q: "ਕੀ ਕਿਸੇ ਨੂੰ ਪਤਾ ਲੱਗੇਗਾ ਕਿ ਮੈਂ ਇੱਥੇ ਆਈ ਸੀ?",
    a: "ਸਾਡੇ ਵੱਲੋਂ ਨਹੀਂ। ਅਸੀਂ ਤੁਹਾਡੇ ਵੱਲੋਂ ਕਿਸੇ ਨਾਲ ਰਾਬਤਾ ਨਹੀਂ ਕਰਦੇ, ਕਿਸੇ ਅਦਾਰੇ ਨੂੰ ਨਹੀਂ ਦੱਸਦੇ ਕਿ ਤੁਸੀਂ ਉਸ ਨੂੰ ਵੇਖਿਆ, ਤੇ ਤੁਸੀਂ ਇੱਥੇ ਜੋ ਕੁਝ ਕਰਦੇ ਹੋ ਉਹ ਕਿਤੇ ਵੀ ਐਸੀ ਥਾਂ ਨਹੀਂ ਦਿਸਦਾ ਜਿੱਥੇ ਕੋਈ ਹੋਰ ਵੇਖ ਸਕੇ। ਪਰ ਧਿਆਨ ਰੱਖੋ ਕਿ ਤੁਹਾਡਾ ਆਪਣਾ ਬਰਾਊਜ਼ਰ ਇਤਿਹਾਸ ਰੱਖਦਾ ਹੈ, ਜਿਵੇਂ ਕਿਸੇ ਵੀ ਸਾਈਟ ਤੇ।",
  },
  "What if a listing is wrong or out of date?": {
    q: "ਜੇ ਕੋਈ ਇੰਦਰਾਜ ਗਲਤ ਜਾਂ ਪੁਰਾਣਾ ਹੋਵੇ ਤਾਂ?",
    a: "ਸਾਨੂੰ ਦੱਸੋ। ਹਰ ਇੰਦਰਾਜ ਦੇ ਸਫ਼ੇ ਤੇ ਰਿਪੋਰਟ ਦਾ ਲਿੰਕ ਹੁੰਦਾ ਹੈ। ਅਸੀਂ ਜਾਂਚ ਕਰਦੇ ਹਾਂ, ਤੇ ਜੇ ਉਹ ਗਲਤ ਹੋਵੇ ਤਾਂ ਅਦਾਰੇ ਨੂੰ ਠੀਕ ਕਰਨ ਲਈ ਕਹਿੰਦੇ ਹਾਂ; ਜੇ ਇਸ ਦੌਰਾਨ ਕਿਸੇ ਔਰਤ ਦੀ ਅੱਧੀ ਦੁਪਹਿਰ ਬਰਬਾਦ ਹੋ ਸਕਦੀ ਹੋਵੇ ਤਾਂ ਅਸੀਂ ਉਸ ਨੂੰ ਮਾਮਲਾ ਸੁਲਝਣ ਤੱਕ ਹਟਾ ਦਿੰਦੇ ਹਾਂ।",
  },
  "What happens when a closing date passes?": {
    q: "ਬੰਦ ਹੋਣ ਦੀ ਤਾਰੀਖ਼ ਲੰਘ ਜਾਣ ਤੇ ਕੀ ਹੁੰਦਾ ਹੈ?",
    a: "ਇੰਦਰਾਜ ਬੰਦ ਹੋ ਜਾਂਦਾ ਹੈ ਪਰ ਗਾਇਬ ਨਹੀਂ ਹੁੰਦਾ। ਤੁਸੀਂ ਅਜੇ ਵੀ ਸੰਭਾਲੀ ਸੂਚੀ ਜਾਂ ਲਿੰਕ ਤੋਂ ਉਸ ਤੱਕ ਪਹੁੰਚ ਸਕਦੇ ਹੋ, ਤਾਂ ਜੋ ਜਿਹੜਾ ਸਫ਼ਾ ਤੁਹਾਨੂੰ ਭੇਜਿਆ ਗਿਆ ਸੀ ਉਹ ਕੁਝ ਵੀ ਨਾ ਬਣ ਜਾਵੇ, ਤੇ ਉਹ ਅਜੇ ਵੀ ਖੁੱਲ੍ਹੀਆਂ ਚੀਜ਼ਾਂ ਨਾਲ ਮੁਕਾਬਲਾ ਕਰਨਾ ਛੱਡ ਦਿੰਦਾ ਹੈ।",
  },
  "Is this only for Scotland?": {
    q: "ਕੀ ਇਹ ਸਿਰਫ਼ ਸਕਾਟਲੈਂਡ ਲਈ ਹੈ?",
    a: "ਹਾਂ। ਇੱਥੇ ਹਰ ਅਦਾਰਾ ਸਕਾਟਲੈਂਡ ਵਿੱਚ ਕੰਮ ਕਰਦਾ ਹੈ, ਤੇ ਜਿਨ੍ਹਾਂ ਥਾਵਾਂ ਤੇ ਅਸੀਂ ਮੇਲ ਕਰਦੇ ਹਾਂ ਉਹ ਸਕਾਟਿਸ਼ ਕਸਬੇ ਤੇ ਕੌਂਸਲ ਇਲਾਕੇ ਹਨ। ਕੁਝ ਇੰਦਰਾਜ ਆਨਲਾਈਨ ਹਨ ਤੇ ਸਭ ਲਈ ਖੁੱਲ੍ਹੇ ਹਨ, ਤੇ ਉਹ ਇਹ ਗੱਲ ਸਾਫ਼ ਕਹਿੰਦੇ ਹਨ।",
  },
  "Can I read this in another language?": {
    q: "ਕੀ ਮੈਂ ਇਹ ਕਿਸੇ ਹੋਰ ਭਾਸ਼ਾ ਵਿੱਚ ਪੜ੍ਹ ਸਕਦੀ ਹਾਂ?",
    a: "ਹਾਂ। ਸਫ਼ੇ ਦੇ ਉੱਪਰ ਭਾਸ਼ਾ ਦਾ ਬਟਨ ਗੈਲਿਕ, ਸਕਾਟਸ, ਪੋਲਿਸ਼, ਯੂਕਰੇਨੀ, ਅਰਬੀ, ਉਰਦੂ, ਪੰਜਾਬੀ, ਸਰਲ ਚੀਨੀ, ਰੋਮਾਨੀਅਨ, ਸੋਮਾਲੀ ਤੇ ਤਿਗਰੀਨੀਆ ਪੇਸ਼ ਕਰਦਾ ਹੈ, ਤੇ ਪੂਰੀ ਖੋਜ ਦਾ ਤਰਜਮਾ ਹੋਇਆ ਹੈ, ਸਿਰਫ਼ ਪਹਿਲਾ ਸਫ਼ਾ ਨਹੀਂ। ਅਦਾਰੇ ਆਪਣੇ ਬਾਰੇ ਜੋ ਲਿਖਦੇ ਹਨ ਉਹ ਉਸੇ ਭਾਸ਼ਾ ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ ਜਿਸ ਵਿੱਚ ਲਿਖਿਆ ਗਿਆ, ਕਿਉਂਕਿ ਅਸੀਂ ਕਿਸੇ ਦੇ ਸ਼ਬਦਾਂ ਦਾ ਮਸ਼ੀਨੀ ਤਰਜਮਾ ਨਹੀਂ ਕਰਦੇ। ਇੱਥੇ ਹਰ ਤਰਜਮਾ ਮਸ਼ੀਨ ਨਾਲ ਕੀਤਾ ਗਿਆ ਹੈ ਤੇ ਇਸ ਦੀ ਉਡੀਕ ਹੈ ਕਿ ਕੋਈ ਮਾਤ-ਭਾਸ਼ਾ ਬੋਲਣ ਵਾਲਾ ਇਸ ਨੂੰ ਪੜ੍ਹੇ।",
  },
  "I need help right now.": {
    q: "ਮੈਨੂੰ ਹੁਣੇ ਮਦਦ ਚਾਹੀਦੀ ਹੈ।",
    a: "ਇਹ ਪਲੇਟਫਾਰਮ ਸਹਾਰਾ ਲੱਭਣ ਲਈ ਹੈ, ਐਮਰਜੈਂਸੀ ਲਈ ਨਹੀਂ, ਤੇ ਇੱਥੇ ਕੋਈ ਨਿਗਰਾਨੀ ਨਹੀਂ ਕਰ ਰਿਹਾ। ਜੇ ਤੁਹਾਨੂੰ ਤੁਰੰਤ ਖ਼ਤਰਾ ਹੈ ਤਾਂ 999 ਤੇ ਫ਼ੋਨ ਕਰੋ। ਸਕਾਟਲੈਂਡ ਦੀ ਘਰੇਲੂ ਹਿੰਸਾ ਤੇ ਜਬਰੀ ਵਿਆਹ ਹੈਲਪਲਾਈਨ 0800 027 1234 ਤੇ ਮੁਫ਼ਤ ਹੈ, ਦਿਨ ਹੋਵੇ ਜਾਂ ਰਾਤ।",
  },
  "Who can list on HWS Path Grid?": {
    q: "HWS Path Grid ਤੇ ਕੌਣ ਦਰਜ ਹੋ ਸਕਦਾ ਹੈ?",
    a: "ਕੋਈ ਵੀ ਅਦਾਰਾ ਜੋ ਸਕਾਟਲੈਂਡ ਵਿੱਚ ਔਰਤਾਂ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ: ਚੈਰਿਟੀਆਂ, ਸਮਾਜਿਕ ਅਦਾਰੇ, ਸਰਕਾਰੀ ਅਦਾਰੇ, ਕਾਲਜ, ਕਾਰੋਬਾਰ ਤੇ ਬਾਕਾਇਦਾ ਬਣੇ ਕਮਿਊਨਿਟੀ ਗਰੁੱਪ। ਤੁਹਾਡਾ ਸਿਰਫ਼ ਔਰਤਾਂ ਲਈ ਹੋਣਾ ਜ਼ਰੂਰੀ ਨਹੀਂ, ਪਰ ਜੋ ਤੁਸੀਂ ਦਰਜ ਕਰਦੇ ਹੋ ਉਹ ਐਸੀ ਚੀਜ਼ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ ਜਿਸ ਉੱਤੇ ਕੋਈ ਔਰਤ ਅਮਲ ਕਰ ਸਕੇ।",
  },
  "Does it cost anything to be listed?": {
    q: "ਦਰਜ ਹੋਣ ਦਾ ਕੋਈ ਖਰਚਾ ਹੈ?",
    a: "ਨਹੀਂ। ਦਰਜ ਹੋਣਾ ਮੁਫ਼ਤ ਹੈ ਤੇ ਖਰੀਦਣ ਲਈ ਕੋਈ ਪੈਸੇ ਵਾਲੀ ਥਾਂ ਨਹੀਂ, ਸੋ ਤੁਸੀਂ ਜੋ ਵੀ ਦਿਓ ਉਸ ਨਾਲ ਕਿਸੇ ਦੇ ਨਤੀਜਿਆਂ ਵਿੱਚ ਤੁਹਾਡੀ ਥਾਂ ਨਹੀਂ ਬਦਲ ਸਕਦੀ।",
  },
  "How do you check us, and how long does it take?": {
    q: "ਤੁਸੀਂ ਸਾਡੀ ਜਾਂਚ ਕਿਵੇਂ ਕਰਦੇ ਹੋ, ਤੇ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗਦਾ ਹੈ?",
    a: "ਜਿੱਥੇ ਤੁਹਾਡਾ ਇੰਦਰਾਜ ਹੋਵੇ ਉੱਥੇ ਜਨਤਕ ਰਜਿਸਟਰ ਵਿੱਚ — ਚੈਰਿਟੀ ਨੰਬਰ ਜਾਂ ਕੰਪਨੀ ਨੰਬਰ — ਤੇ ਜਿੱਥੇ ਨਾ ਹੋਵੇ ਉੱਥੇ ਤੁਹਾਡੇ ਫੰਡ ਦੇਣ ਵਾਲੇ ਤੋਂ। ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਪੂਰੀ ਕਰਨ ਤੋਂ ਬਾਅਦ ਆਮ ਤੌਰ ਤੇ ਦੋ ਕੰਮਕਾਜੀ ਦਿਨ ਲੱਗਦੇ ਹਨ। ਦੋਵੇਂ ਹਾਲਤਾਂ ਵਿੱਚ ਤੁਹਾਨੂੰ ਈਮੇਲ ਮਿਲੇਗੀ, ਤੇ ਜੇ ਸਾਨੂੰ ਹੋਰ ਕੋਈ ਚੀਜ਼ ਚਾਹੀਦੀ ਹੋਈ ਤਾਂ ਅਸੀਂ ਬਿਲਕੁਲ ਦੱਸਾਂਗੇ ਕਿ ਕੀ।",
  },
  "What do I need to fill in?": {
    q: "ਮੈਨੂੰ ਕੀ ਭਰਨਾ ਪਵੇਗਾ?",
    a: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਤਿੰਨ ਛੋਟੇ ਕਦਮ ਹਨ: ਤੁਸੀਂ ਕੌਣ ਹੋ, ਤੁਹਾਡੇ ਪਹੁੰਚ ਖੇਤਰ, ਤੇ ਤਸਦੀਕ ਲਈ ਇੱਕ ਸੰਪਰਕ। ਉਸ ਤੋਂ ਬਾਅਦ ਇੱਕ ਪੂਰਾ ਪ੍ਰੋਫਾਈਲ ਹੈ: ਤੁਹਾਡਾ ਮਕਸਦ, ਤੁਸੀਂ ਕਿਨ੍ਹਾਂ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹੋ, ਤੁਸੀਂ ਕੀ ਪੇਸ਼ ਕਰਦੇ ਹੋ, ਤੁਹਾਡੀ ਪਹੁੰਚ ਕਿੱਥੋਂ ਤੱਕ ਹੈ ਤੇ ਤੁਸੀਂ ਕਿਨ੍ਹਾਂ ਦੀ ਮਦਦ ਨਹੀਂ ਕਰ ਸਕਦੇ। ਉਹੀ ਪ੍ਰੋਫਾਈਲ ਤੈਅ ਕਰਦਾ ਹੈ ਕਿ ਅਸੀਂ ਕਿਹੜੀਆਂ ਔਰਤਾਂ ਤੁਹਾਡੇ ਕੋਲ ਭੇਜੀਏ, ਸੋ ਉਹ ਵੀਹ ਮਿੰਟ ਇਸ ਦੇ ਲਾਇਕ ਹਨ।",
  },
  "What can I post?": {
    q: "ਮੈਂ ਕੀ ਪਾ ਸਕਦਾ ਹਾਂ?",
    a: "ਇੱਕ ਐਸੀ ਚੀਜ਼ ਜਿਸ ਉੱਤੇ ਕੋਈ ਔਰਤ ਅਮਲ ਕਰ ਸਕੇ: ਇੱਕ ਕੋਰਸ, ਇੱਕ ਗ੍ਰਾਂਟ, ਇੱਕ ਖੁੱਲ੍ਹੀ ਬੈਠਕ, ਇੱਕ ਸਮਾਗਮ, ਰਹਿਨੁਮਾਈ ਦੀ ਇੱਕ ਥਾਂ, ਇੱਕ ਇਕੱਲੀ ਮੁਲਾਕਾਤ। ਇਨ੍ਹਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਨ ਦੀ ਥਾਂ ਵੱਖ-ਵੱਖ ਪਾਓ, ਤਾਂ ਜੋ ਹਰ ਇੱਕ ਦਾ ਮੇਲ ਉਨ੍ਹਾਂ ਔਰਤਾਂ ਨਾਲ ਹੋਵੇ ਜਿਨ੍ਹਾਂ ਲਈ ਉਹ ਸੱਚਮੁੱਚ ਢੁਕਵੀਂ ਹੈ।",
  },
  "Who decides which women see my listing?": {
    q: "ਕੌਣ ਤੈਅ ਕਰਦਾ ਹੈ ਕਿ ਕਿਹੜੀਆਂ ਔਰਤਾਂ ਮੇਰਾ ਇੰਦਰਾਜ ਵੇਖਣ?",
    a: "ਇੱਕ ਤਰਤੀਬ ਦੇਣ ਵਾਲਾ ਸਿਸਟਮ, ਇਸ ਆਧਾਰ ਤੇ ਕਿ ਉਸ ਨੇ ਕੀ ਲਿਖਿਆ ਤੇ ਤੁਸੀਂ ਕੀ ਲਿਖਿਆ। ਇਹ ਤੁਹਾਡੀਆਂ ਚੁਣੀਆਂ ਹਾਲਤਾਂ, ਉਸ ਦੇ ਆਪਣੇ ਸ਼ਬਦ ਤੁਹਾਡੇ ਸ਼ਬਦਾਂ ਦੇ ਮੁਕਾਬਲੇ, ਤੇ ਇਹ ਕਿ ਤੁਸੀਂ ਉਸ ਦੀ ਪਹੁੰਚ ਵਿੱਚ ਹੋ ਜਾਂ ਨਹੀਂ, ਸਭ ਤੋਲਦਾ ਹੈ। ਹਰ ਗੱਲ ਇੱਕੋ ਫਾਈਲ ਵਿੱਚ ਹੈ ਤੇ ਕੋਈ ਵੀ ਖਰੀਦੀ ਨਹੀਂ ਜਾ ਸਕਦੀ। ਉਸ ਨੂੰ ਇਹ ਵੀ ਦੱਸਿਆ ਜਾਂਦਾ ਹੈ ਕਿ ਤੁਹਾਡਾ ਇੰਦਰਾਜ ਉਸ ਨਾਲ ਕਿਉਂ ਮੇਲ ਖਾਇਆ।",
  },
  "Can I edit a listing after it is live?": {
    q: "ਕੀ ਮੈਂ ਇੰਦਰਾਜ ਲਾਈਵ ਹੋਣ ਤੋਂ ਬਾਅਦ ਬਦਲ ਸਕਦਾ ਹਾਂ?",
    a: "ਹਾਂ, ਕਿਸੇ ਵੀ ਵੇਲੇ, ਤੇ ਇਸ ਦੌਰਾਨ ਉਹ ਲਾਈਵ ਰਹਿੰਦਾ ਹੈ। ਇੰਦਰਾਜ ਉੱਤੇ ਆਖ਼ਰੀ ਅੱਪਡੇਟ ਦੀ ਤਾਰੀਖ਼ ਦਿਸਦੀ ਹੈ, ਤਾਂ ਜੋ ਕੋਈ ਔਰਤ ਵੇਖ ਸਕੇ ਕਿ ਉਹ ਤਾਜ਼ਾ ਹੈ।",
  },
  "What happens when my closing date passes?": {
    q: "ਮੇਰੀ ਬੰਦ ਹੋਣ ਦੀ ਤਾਰੀਖ਼ ਲੰਘ ਜਾਣ ਤੇ ਕੀ ਹੁੰਦਾ ਹੈ?",
    a: "ਇੰਦਰਾਜ ਆਪਣੇ ਆਪ ਬੰਦ ਹੋ ਜਾਂਦਾ ਹੈ। ਕੋਈ ਤੁਹਾਡੇ ਤੋਂ ਪੁਸ਼ਟੀ ਨਹੀਂ ਮੰਗਦਾ, ਕਿਉਂਕਿ ਤਾਰੀਖ਼ ਤੁਸੀਂ ਪਹਿਲਾਂ ਹੀ ਦੱਸ ਚੁੱਕੇ ਹੋ। ਉਹ ਪਹੁੰਚਯੋਗ ਰਹਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਜਿਸ ਨੇ ਉਸ ਨੂੰ ਸੰਭਾਲਿਆ ਸੀ ਉਸ ਕੋਲ ਮਰਿਆ ਲਿੰਕ ਨਾ ਰਹਿ ਜਾਵੇ, ਤੇ ਉਹ ਖੁੱਲ੍ਹੀਆਂ ਚੀਜ਼ਾਂ ਨਾਲ ਮੁਕਾਬਲਾ ਕਰਨਾ ਛੱਡ ਦਿੰਦਾ ਹੈ। ਵਧਾਉਣ ਲਈ ਤਾਰੀਖ਼ ਬਦਲ ਦਿਓ।",
  },
  "Can colleagues help manage our listings?": {
    q: "ਕੀ ਸਾਥੀ ਸਾਡੇ ਇੰਦਰਾਜ ਸੰਭਾਲਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹਨ?",
    a: "ਹਾਂ। ਤਸਦੀਕ ਤੋਂ ਬਾਅਦ ਆਪਣੇ ਅਦਾਰੇ ਦੇ ਸਫ਼ੇ ਤੋਂ ਉਨ੍ਹਾਂ ਨੂੰ ਈਮੇਲ ਰਾਹੀਂ ਸੱਦੋ। ਉਨ੍ਹਾਂ ਨੂੰ ਆਪਣਾ ਸਾਈਨ ਇਨ ਮਿਲੇਗਾ ਤੇ ਤੁਹਾਡੀ ਤਸਦੀਕਸ਼ੁਦਾ ਹੈਸੀਅਤ ਵਿਰਾਸਤ ਵਿੱਚ ਮਿਲੇਗੀ, ਸੋ ਦੁਬਾਰਾ ਕੁਝ ਸਾਬਤ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ।",
  },
  "Why has my listing been hidden?": {
    q: "ਮੇਰਾ ਇੰਦਰਾਜ ਕਿਉਂ ਲੁਕਾਇਆ ਗਿਆ?",
    a: "ਜੇ ਇੰਦਰਾਜ ਵਿੱਚ ਕੋਈ ਐਸੀ ਚੀਜ਼ ਹੋਵੇ ਜੋ ਔਰਤ ਦਾ ਸਮਾਂ ਬਰਬਾਦ ਕਰੇ — ਮਰਿਆ ਲਿੰਕ, ਲੰਘੀ ਹੋਈ ਤਾਰੀਖ਼, ਜਾਂ ਐਸੀਆਂ ਸ਼ਰਤਾਂ ਜੋ ਅਸਲ ਵਿੱਚ ਚੱਲ ਰਹੀ ਚੀਜ਼ ਨਾਲ ਮੇਲ ਨਾ ਖਾਂਦੀਆਂ ਹੋਣ — ਤਾਂ ਪ੍ਰਬੰਧਕ ਉਸ ਨੂੰ ਔਰਤਾਂ ਨੂੰ ਦਿਸਣ ਵਾਲੇ ਪਾਸਿਓਂ ਹਟਾ ਸਕਦਾ ਹੈ। ਕੁਝ ਮਿਟਾਇਆ ਨਹੀਂ ਜਾਂਦਾ, ਤੁਹਾਡਾ ਲਿਖਿਆ ਸਭ ਰਹਿੰਦਾ ਹੈ, ਤੇ ਕਾਰਨ ਤੁਹਾਨੂੰ ਈਮੇਲ ਤੇ ਤੁਹਾਡੇ ਡੈਸ਼ਬੋਰਡ ਉੱਤੇ ਦੱਸਿਆ ਜਾਂਦਾ ਹੈ। ਠੀਕ ਕਰ ਕੇ ਸਾਨੂੰ ਦੱਸੋ, ਤੇ ਇਹ ਮੁੜ ਲੱਗ ਜਾਵੇਗਾ।",
  },
  "What do the figures on my overview mean?": {
    q: "ਮੇਰੇ ਖ਼ੁਲਾਸੇ ਦੇ ਅੰਕੜਿਆਂ ਦਾ ਕੀ ਮਤਲਬ ਹੈ?",
    a: "ਤੁਹਾਡੇ ਤੱਕ ਪਹੁੰਚੀਆਂ ਔਰਤਾਂ ਉਹ ਗਿਣਤੀ ਹੈ ਜਿਨ੍ਹਾਂ ਨੇ ਕਲਿੱਕ ਕਰ ਕੇ ਤੁਹਾਡੇ ਤੱਕ ਪਹੁੰਚ ਕੀਤੀ। ਪ੍ਰੋਫਾਈਲ ਵਿਜ਼ਿਟ ਉਹ ਗਿਣਤੀ ਹੈ ਜਿਨ੍ਹਾਂ ਨੇ ਤੁਹਾਡੇ ਅਦਾਰੇ ਦਾ ਸਫ਼ਾ ਪੜ੍ਹਿਆ। ਦੋਵੇਂ ਇਸ ਹਫ਼ਤੇ, ਇਸ ਮਹੀਨੇ ਜਾਂ ਸ਼ੁਰੂ ਤੋਂ ਵਿਖਾਏ ਜਾ ਸਕਦੇ ਹਨ, ਤੇ ਇਹ ਤਾਰੀਖ਼ਾਂ ਸਮੇਤ ਗਿਣਤੀਆਂ ਹਨ, ਕਦੇ ਵੀ ਇਹ ਨਹੀਂ ਕਿ ਕੋਈ ਕੌਣ ਸੀ।",
  },
  "Can HWS add our organisation for us?": {
    q: "ਕੀ HWS ਸਾਡੀ ਥਾਂ ਸਾਡਾ ਅਦਾਰਾ ਜੋੜ ਸਕਦਾ ਹੈ?",
    a: "ਹਾਂ। ਕੁਝ ਅਦਾਰੇ ਕਦੇ ਆਪ ਰਜਿਸਟਰ ਨਹੀਂ ਹੋਣਗੇ, ਸੋ HWS ਅਜਿਹਾ ਅਦਾਰਾ ਦਰਜ ਕਰ ਕੇ ਉਸ ਵੱਲੋਂ ਪਾ ਸਕਦਾ ਹੈ। ਜੇ ਉਹ ਤੁਹਾਡਾ ਹੈ ਤੇ ਤੁਸੀਂ ਆਪ ਸੰਭਾਲਣਾ ਚਾਹੋ ਤਾਂ ਸਾਨੂੰ ਕਹੋ, ਅਸੀਂ ਤੁਹਾਡੇ ਹਵਾਲੇ ਕਰ ਦੇਵਾਂਗੇ।",
  },
  "How often should we post?": {
    q: "ਸਾਨੂੰ ਕਿੰਨੀ ਵਾਰ ਪਾਉਣਾ ਚਾਹੀਦਾ ਹੈ?",
    a: "ਜਿੰਨੀ ਵਾਰ ਤੁਹਾਡੇ ਕੋਲ ਸੱਚਮੁੱਚ ਕੁਝ ਹੋਵੇ। ਤੁਸੀਂ ਆਪਣੇ ਪ੍ਰੋਫਾਈਲ ਉੱਤੇ ਆਪਣੀ ਉਮੀਦ ਵਾਲੀ ਰਫ਼ਤਾਰ ਦੱਸਦੇ ਹੋ — ਬਹੁਤੇ ਹਫ਼ਤੇ, ਹਰ ਮਹੀਨੇ, ਜਦੋਂ ਫੰਡਿੰਗ ਇਜਾਜ਼ਤ ਦੇਵੇ — ਤੇ ਅਸੀਂ ਉਸੇ ਤੋਂ ਤੈਅ ਕਰਦੇ ਹਾਂ ਕਿ ਕਿੰਨੀ ਵਾਰ ਰਾਬਤਾ ਕਰੀਏ, ਨਾ ਕਿ ਸਭ ਨੂੰ ਇੱਕੋ ਘੜੀ ਉੱਤੇ ਤੰਗ ਕਰੀਏ।",
  },
};

const zh: FaqTable = {
  "What is HWS Path Grid?": {
    q: "HWS Path Grid 是什么？",
    a: "一个找到苏格兰各地女性支持的地方：课程、资金、咨询、免预约到访、辅导等等。用你自己的话告诉我们你需要什么，我们会给你几个值得去走的下一步，而不是一份要你自己翻查的名录。",
  },
  "Do I need an account?": {
    q: "我需要账户吗？",
    a: "搜索、阅读或申请都不需要。唯一需要账户的是保存：按下保存后会请你登录，这样下次你的清单还在，我们也能在某项截止前提醒你。平台上没有其他任何地方要求你提供什么。",
  },
  "Does it cost anything?": {
    q: "需要花钱吗？",
    a: "不需要。平台免费使用。上面列出的一些项目本身有费用，每条信息在你点进去之前就会说明是哪一种——免费、申请免费，还是需要费用。",
  },
  "What happens to what I type?": {
    q: "我输入的内容会怎样？",
    a: "你的回答只用来排列你的结果。它们不会被出售，不会转交给展示给你的机构，也不会用来建立关于你的档案。我们只记录某条信息被查看或点击过，记为一个数字和一个日期，不附带任何能说明那是你的内容。",
  },
  "How do you decide what to show me?": {
    q: "你们怎么决定给我看什么？",
    a: "根据你告诉我们的三件事：你用自己的话说出的需要、你大概在哪里，以及你愿意说的任何处境。这些会与每条信息的用途、向谁开放、在哪里进行、你如何能去到那里一起权衡。每条结果都会说明它为什么匹配。",
  },
  "Does anyone pay to appear higher up?": {
    q: "有人付费让自己排得更靠前吗？",
    a: "没有。平台上任何地方都没有付费排位，也没有广告。你的结果顺序是买不到的。",
  },
  "How do I know these organisations are real?": {
    q: "我怎么知道这些机构是真的？",
    a: "每家机构在能发布任何内容之前，都会在公共登记处核实——苏格兰慈善登记册或 Companies House；如果没有登记，就向其资助方核实。每条信息也标有最后确认的日期，你可以看出它有多新。",
  },
  "What if nothing matches what I need?": {
    q: "如果没有符合我需要的怎么办？",
    a: "我们会给你一个范围更大的搜索，而不是一个空页面，你也可以修改三个回答中的任何一个。如果还是没有，请告诉我们：没有结果的搜索会被记录下来，不附带任何能识别你的信息，而我们正是靠这些弄清楚缺了什么。",
  },
  "Can I save something and come back to it?": {
    q: "我能保存某项内容之后再回来看吗？",
    a: "可以，需要账户。在任何内容上按保存，系统会请你用一次性验证码登录；你按下保存的内容会在这期间保留，等你回来时还在。我们会在截止日期前大约七天提醒你，你随时可以关掉提醒。",
  },
  "Will anyone know I have been here?": {
    q: "会有人知道我来过这里吗？",
    a: "不会从我们这里知道。我们不会代你联系任何人，不会告诉机构你看过它，你在这里做的任何事都不会出现在别人能看到的地方。但请记住，你自己的浏览器会保存历史记录，就像在任何网站上一样。",
  },
  "What if a listing is wrong or out of date?": {
    q: "如果某条信息有误或已过时怎么办？",
    a: "告诉我们。每个信息页面上都有举报链接。我们会核查，如果有误就请机构更正；如果在这期间会让一位女性白白耗上一个下午，我们会先把它撤下，直到处理好为止。",
  },
  "What happens when a closing date passes?": {
    q: "截止日期过了会怎样？",
    a: "该项会关闭，但不会消失。你仍然可以从保存的清单或链接找到它，这样别人发给你的页面不会变成空白，同时它也不再与仍然开放的项目争位置。",
  },
  "Is this only for Scotland?": {
    q: "这只针对苏格兰吗？",
    a: "是的。这里的每家机构都在苏格兰工作，我们匹配的地点是苏格兰的城镇和地方政府辖区。部分项目在线上且面向所有人，这些会写明。",
  },
  "Can I read this in another language?": {
    q: "我可以用其他语言阅读吗？",
    a: "可以。页面顶部的语言按钮提供盖尔语、苏格兰语、波兰语、乌克兰语、阿拉伯语、乌尔都语、旁遮普语、简体中文、罗马尼亚语、索马里语和提格雷尼亚语，而且整个搜索流程都已翻译，不只是首页。机构关于自身的描述保留他们书写时所用的语言，因为我们不对任何人的文字做机器翻译。这里的每一处翻译都由机器起草，仍在等待母语者审读。",
  },
  "I need help right now.": {
    q: "我现在就需要帮助。",
    a: "这个平台用于寻找支持，不用于紧急情况，这里也没有人在值守。如果你有立即的危险，请拨打 999。苏格兰家庭暴力与强迫婚姻求助热线免费，号码是 0800 027 1234，日夜开通。",
  },
  "Who can list on HWS Path Grid?": {
    q: "谁可以在 HWS Path Grid 上登记？",
    a: "任何在苏格兰与女性一起工作的机构：慈善机构、社会企业、公共机构、学院、企业，以及有正式章程的社区团体。你们不必只服务女性，但你们登记的内容必须是女性可以采取行动的东西。",
  },
  "Does it cost anything to be listed?": {
    q: "登记需要花钱吗？",
    a: "不需要。登记免费，也没有可以购买的付费排位，所以你们付的任何钱都不会改变你们在别人结果中的位置。",
  },
  "How do you check us, and how long does it take?": {
    q: "你们怎么核实我们，需要多久？",
    a: "有登记的，就在公共登记处核实——慈善编号或公司编号；没有的，就向你们的资助方核实。从你们完成注册起，通常约需两个工作日。无论结果如何你们都会收到邮件，如果我们还需要一样东西，会明确说明是什么。",
  },
  "What do I need to fill in?": {
    q: "我需要填写什么？",
    a: "注册是三个简短步骤：你们是谁、你们的访问领域，以及一位用于核实的联系人。之后还有一份更完整的资料：你们的使命、与谁合作、提供什么、覆盖多远，以及你们帮不上忙的是谁。正是这份资料决定了我们把哪些女性引荐给你们，所以值得花那二十分钟。",
  },
  "What can I post?": {
    q: "我可以发布什么？",
    a: "一件女性可以采取行动的事：一门课程、一笔资助、一次免预约到访、一场活动、一个辅导名额、一次一对一。请分开发布，不要打包在一起，这样每一项才能匹配到真正适合它的女性。",
  },
  "Who decides which women see my listing?": {
    q: "谁决定哪些女性看到我的信息？",
    a: "一个排序程序，依据她输入的内容和你们写下的内容。它会权衡你们标注的处境、她的用词与你们的用词，以及你们是否在她能到达的范围内。所有因素都写在一个文件里，没有一项可以购买。她也会被告知你们的信息为什么与她匹配。",
  },
  "Can I edit a listing after it is live?": {
    q: "发布后我还能修改吗？",
    a: "可以，随时都行，修改期间它仍然在线。信息上会显示最后更新日期，让女性看出它是最新的。",
  },
  "What happens when my closing date passes?": {
    q: "我的截止日期过了会怎样？",
    a: "信息会自动关闭。没有人会要求你们确认，因为日期是你们事先告诉我们的。它仍然可以访问，让保存过它的人不会面对一个失效链接，同时它不再与仍然开放的项目争位置。要延期，请修改日期。",
  },
  "Can colleagues help manage our listings?": {
    q: "同事可以帮忙管理我们的信息吗？",
    a: "可以。通过核实后，从你们的机构页面用邮件邀请他们。他们会有自己的登录方式，并继承你们已核实的状态，所以不需要重新证明任何事。",
  },
  "Why has my listing been hidden?": {
    q: "我的信息为什么被隐藏了？",
    a: "如果信息中有什么会浪费女性的时间——失效链接、已过去的日期、与实际开展情况不符的参加条件——管理员可以把它从面向女性的一侧撤下。没有任何内容被删除，你们写的一切都保留，原因会通过邮件和你们的后台告知你们。改好后告诉我们，它就会重新上线。",
  },
  "What do the figures on my overview mean?": {
    q: "概览上的数字是什么意思？",
    a: "引荐到你们的女性，是点击进入你们页面的人数。资料访问，是读过你们机构页面的人数。两者都可以按本周、本月或全部时间显示，它们是带日期的计数，绝不涉及任何人的身份。",
  },
  "Can HWS add our organisation for us?": {
    q: "HWS 可以代我们添加机构吗？",
    a: "可以。有些机构永远不会自己注册，因此 HWS 可以录入一家机构并代为发布。如果那是你们的机构而你们更想自己管理，告诉我们，我们会移交给你们。",
  },
  "How often should we post?": {
    q: "我们应该多久发布一次？",
    a: "只要你们确实有内容，就可以发布。你们在资料里告诉我们预期的节奏——几乎每周、每月、视经费而定——我们据此决定多久联系你们一次，而不是用同一把尺子催促所有人。",
  },
};

const ro: FaqTable = {
  "What is HWS Path Grid?": {
    q: "Ce este HWS Path Grid?",
    a: "Un singur loc în care găsești sprijin pentru femei în toată Scoția: cursuri, finanțări, consiliere, programe cu acces liber, mentorat și altele. Spune-ne cu cuvintele tale de ce ai nevoie și îți arătăm câțiva pași următori care merită făcuți, în loc de un catalog pe care să îl răsfoiești singură.",
  },
  "Do I need an account?": {
    q: "Am nevoie de cont?",
    a: "Nu, ca să cauți, să citești sau să aplici pentru ceva. Singurul lucru care are nevoie de cont este salvarea: apeși Salvează și ți se cere să te conectezi, ca lista ta să fie acolo data viitoare și ca să te putem anunța înainte să se închidă ceva. Nimic altceva pe platformă nu îți cere nimic.",
  },
  "Does it cost anything?": {
    q: "Costă ceva?",
    a: "Nu. Platforma este gratuită. Unele dintre lucrurile listate aici au un cost, iar fiecare anunț spune care este situația — gratuit, înscriere gratuită sau există un cost — înainte să dai clic mai departe.",
  },
  "What happens to what I type?": {
    q: "Ce se întâmplă cu ce scriu?",
    a: "Răspunsurile tale sunt folosite doar ca să îți ordoneze rezultatele. Nu sunt vândute, nu ajung la organizațiile pe care ți le arătăm și nu sunt folosite ca să se construiască un profil despre tine. Înregistrăm că un anunț a fost văzut sau accesat, ca număr și dată, fără nimic atașat care să spună că ai fost tu.",
  },
  "How do you decide what to show me?": {
    q: "Cum decideți ce să îmi arătați?",
    a: "După trei lucruri pe care ni le spui: de ce ai nevoie, cu cuvintele tale, aproximativ unde ești și orice vrei să împărtășești despre situația ta. Acestea sunt cântărite față de ce este fiecare anunț, cui îi este deschis, unde se desfășoară și cum poți ajunge acolo. Fiecare rezultat spune de ce s-a potrivit.",
  },
  "Does anyone pay to appear higher up?": {
    q: "Plătește cineva ca să apară mai sus?",
    a: "Nu. Nu există plasare plătită și nici publicitate nicăieri pe platformă. Ordinea rezultatelor tale nu poate fi cumpărată.",
  },
  "How do I know these organisations are real?": {
    q: "De unde știu că aceste organizații sunt reale?",
    a: "Fiecare organizație este verificată într-un registru public — registrul scoțian al organizațiilor caritabile sau Companies House — iar acolo unde nu are înregistrare, la finanțatorul ei, înainte să poată publica ceva. Fiecare anunț poartă și data la care a fost confirmat ultima dată, ca să vezi cât de actual este.",
  },
  "What if nothing matches what I need?": {
    q: "Dacă nimic nu se potrivește cu ce am nevoie?",
    a: "Îți vom propune o căutare mai largă în loc de o pagină goală și poți schimba oricare dintre cele trei răspunsuri. Dacă tot nu este nimic, spune-ne: căutările care nu găsesc nimic sunt înregistrate fără nimic care să te identifice și tocmai din ele aflăm ce lipsește.",
  },
  "Can I save something and come back to it?": {
    q: "Pot salva ceva și să revin mai târziu?",
    a: "Da, cu un cont. Apasă Salvează pe orice și ți se cere să te conectezi cu un cod de unică folosință; ce ai salvat este păstrat între timp și te așteaptă când revii. Îți amintim cam cu șapte zile înainte de data închiderii, iar asta o poți opri oricând.",
  },
  "Will anyone know I have been here?": {
    q: "Va ști cineva că am fost aici?",
    a: "Nu de la noi. Nu contactăm pe nimeni în numele tău, nu spunem unei organizații că te-ai uitat la ea și nimic din ce faci aici nu apare undeva unde altcineva poate vedea. Ține totuși cont că propriul tău browser păstrează un istoric, ca pe orice site.",
  },
  "What if a listing is wrong or out of date?": {
    q: "Dacă un anunț este greșit sau depășit?",
    a: "Spune-ne. Pe fiecare pagină de anunț există un link de raportare. Verificăm, iar dacă este greșit, cerem organizației să îl corecteze; dacă între timp o femeie ar pierde o după-amiază pe el, îl luăm jos până se rezolvă.",
  },
  "What happens when a closing date passes?": {
    q: "Ce se întâmplă când trece data de închidere?",
    a: "Anunțul se închide, dar nu dispare. Poți încă ajunge la el dintr-o listă salvată sau dintr-un link, așa că o pagină care ți-a fost trimisă nu se transformă în nimic, și încetează să concureze cu lucrurile încă deschise.",
  },
  "Is this only for Scotland?": {
    q: "Este doar pentru Scoția?",
    a: "Da. Fiecare organizație de aici lucrează în Scoția, iar locurile după care potrivim sunt orașe și autorități locale scoțiene. Unele anunțuri sunt online și deschise oricui, iar acestea o spun.",
  },
  "Can I read this in another language?": {
    q: "Pot citi asta în altă limbă?",
    a: "Da. Butonul de limbă din partea de sus a paginii oferă gaelică, scots, poloneză, ucraineană, arabă, urdu, punjabi, chineză simplificată, română, somaleză și tigrină, iar tot parcursul de căutare este tradus, nu doar prima pagină. Ce scriu organizațiile despre ele însele rămâne în limba în care au scris, pentru că nu traducem automat cuvintele nimănui. Fiecare traducere de aici a fost făcută automat și așteaptă să fie citită de un vorbitor nativ.",
  },
  "I need help right now.": {
    q: "Am nevoie de ajutor chiar acum.",
    a: "Această platformă este pentru găsirea de sprijin, nu pentru urgențe, și nimeni nu o monitorizează. Dacă ești în pericol imediat, sună la 999. Linia telefonică din Scoția pentru violență domestică și căsătorie forțată este gratuită la 0800 027 1234, zi și noapte.",
  },
  "Who can list on HWS Path Grid?": {
    q: "Cine poate fi listat pe HWS Path Grid?",
    a: "Orice organizație care lucrează cu femei în Scoția: organizații caritabile, întreprinderi sociale, instituții publice, colegii, firme și grupuri comunitare constituite. Nu trebuie să lucrați doar cu femei, dar ceea ce listați trebuie să fie ceva la care o femeie poate răspunde.",
  },
  "Does it cost anything to be listed?": {
    q: "Costă ceva să fim listați?",
    a: "Nu. Listarea este gratuită și nu există plasare plătită de cumpărat, deci nimic din ce ați plăti nu v-ar putea schimba poziția în rezultatele cuiva.",
  },
  "How do you check us, and how long does it take?": {
    q: "Cum ne verificați și cât durează?",
    a: "Într-un registru public, acolo unde aveți unul — un număr de organizație caritabilă sau un număr de firmă — și la finanțatorul vostru acolo unde nu aveți. De obicei durează aproximativ două zile lucrătoare din momentul în care terminați înscrierea. Primiți un e-mail în orice caz, iar dacă mai avem nevoie de ceva, vă spunem exact ce.",
  },
  "What do I need to fill in?": {
    q: "Ce trebuie să completez?",
    a: "Înscrierea are trei pași scurți: cine sunteți, Zonele voastre de acces și o persoană de contact pentru verificare. După aceea urmează un profil mai complet: misiunea voastră, cu cine lucrați, ce oferiți, cât de departe ajungeți și pe cine nu puteți ajuta. Acel profil decide ce femei vă trimitem, așa că merită cele douăzeci de minute.",
  },
  "What can I post?": {
    q: "Ce pot publica?",
    a: "Un singur lucru la care o femeie poate răspunde: un curs, o finanțare, un program cu acces liber, un eveniment, un loc la mentorat, o întâlnire individuală. Publicați-le separat, nu la pachet, ca fiecare să poată fi potrivit cu femeile cărora li se potrivește cu adevărat.",
  },
  "Who decides which women see my listing?": {
    q: "Cine decide ce femei îmi văd anunțul?",
    a: "Un sistem de ordonare, pornind de la ce a scris ea și ce ați scris voi. Cântărește situațiile pe care le-ați marcat, cuvintele ei față de ale voastre și dacă sunteți la îndemâna ei. Toți factorii sunt într-un singur fișier și niciunul nu poate fi cumpărat. Ea află și de ce i s-a potrivit anunțul vostru.",
  },
  "Can I edit a listing after it is live?": {
    q: "Pot edita un anunț după ce este public?",
    a: "Da, oricând, și rămâne public în timp ce îl editați. Anunțul arată data ultimei actualizări, ca o femeie să vadă că este actual.",
  },
  "What happens when my closing date passes?": {
    q: "Ce se întâmplă când trece data mea de închidere?",
    a: "Anunțul se închide singur. Nimeni nu vă cere să confirmați, pentru că ne-ați spus deja data. Rămâne accesibil, ca oricine l-a salvat să nu rămână cu un link mort, și încetează să concureze cu ce este încă deschis. Ca să îl prelungiți, modificați data.",
  },
  "Can colleagues help manage our listings?": {
    q: "Pot colegii să ne ajute să gestionăm anunțurile?",
    a: "Da. Invitați-i prin e-mail de pe pagina organizației, odată ce sunteți verificați. Primesc propria conectare și moștenesc statutul vostru de verificare, deci nu mai este nimic de dovedit din nou.",
  },
  "Why has my listing been hidden?": {
    q: "De ce a fost ascuns anunțul meu?",
    a: "Un administrator poate scoate un anunț de pe partea văzută de femei dacă ceva din el i-ar pierde timpul: un link mort, o dată care a trecut, criterii care nu se potrivesc cu ce se desfășoară de fapt. Nimic nu este șters, păstrați tot ce ați scris, iar motivul vă este spus prin e-mail și pe panoul vostru. Corectați și spuneți-ne, iar anunțul revine.",
  },
  "What do the figures on my overview mean?": {
    q: "Ce înseamnă cifrele din prezentarea mea generală?",
    a: "Femei trimise către voi este numărul celor care au dat clic și au ajuns la voi. Vizite pe profil este numărul celor care au citit pagina organizației voastre. Ambele pot fi arătate pentru săptămâna aceasta, luna aceasta sau de la început, și sunt numere cu date atașate, niciodată ceva despre cine a fost cineva.",
  },
  "Can HWS add our organisation for us?": {
    q: "Poate HWS să ne adauge organizația în locul nostru?",
    a: "Da. Unele organizații nu se vor înscrie niciodată singure, așa că HWS poate introduce una și poate publica în numele ei. Dacă este a voastră și ați prefera să o gestionați voi, cereți-ne și v-o predăm.",
  },
  "How often should we post?": {
    q: "Cât de des ar trebui să publicăm?",
    a: "Atât de des cât aveți cu adevărat ceva. Ne spuneți pe profil ritmul la care vă așteptați — aproape în fiecare săptămână, lunar, când permite finanțarea — iar noi îl folosim ca să decidem cât de des să vă scriem, în loc să îi batem la cap pe toți după același ceas.",
  },
};

const so: FaqTable = {
  "What is HWS Path Grid?": {
    q: "Waa maxay HWS Path Grid?",
    a: "Hal meel oo aad kaga heli karto taageero haween ah oo Scotland oo dhan ah: koorsooyin, maalgelin, talo, imaatin aan ballan lahayn, hagid iyo wax kale. Noo sheeg erayadaada waxa aad u baahan tahay, waxaanan ku tusi doonnaa dhowr tallaabo oo mudan in la qaado, halkii aad liis adigu baadhi lahayd.",
  },
  "Do I need an account?": {
    q: "Ma u baahanahay xisaab?",
    a: "Maya, si aad u raadiso, u akhriso ama wax u codsato. Waxa kaliya ee xisaab u baahan waa kaydinta: waxaad riixdaa Kaydi oo waxaa lagu weydiinayaa inaad gasho, si liiskaagu markale u joogo oo aan kuugu sheegno ka hor inta uusan wax xirmin. Wax kale oo barahan kaa codsanaya ma jiro.",
  },
  "Does it cost anything?": {
    q: "Wax qiime ah ma leh?",
    a: "Maya. Barahan isticmaalkiisu waa bilaash. Waxyaabaha halkan lagu taxay qaarkood qiime ayay leeyihiin, liis kastaana wuxuu sheegayaa midka ah — bilaash, codsiga bilaash, ama waxaa jira qiime — ka hor inta aadan gudbin.",
  },
  "What happens to what I type?": {
    q: "Maxaa ku dhaca waxa aan qoro?",
    a: "Jawaabahaaga waxaa loo isticmaalaa oo keliya in lagu habeeyo natiijooyinkaaga. Lama iibiyo, looma gudbiyo hay'adaha lagu tusayo, loomana isticmaalo in lagugu sameeyo astaan. Waxaan duubnaa in liiska la arkay ama la riixay, tiro iyo taariikh ahaan, iyadoo aan la lifaaqin wax sheegaya inaad adigu ahayd.",
  },
  "How do you decide what to show me?": {
    q: "Sidee u go'aansataan waxa la i tusayo?",
    a: "Saddex shay oo aad noo sheegto: waxa aad u baahan tahay erayadaada, meesha aad ku takhalusan tahay, iyo wax kasta oo ku saabsan xaaladdaada oo aad doorato inaad sheegto. Kuwaas waxaa la barbar dhigaa waxa liis kastaa yahay, cidda u furan, meesha uu ka dhacayo iyo sida aad u gaari karto. Natiijo kastaa wuxuu sheegayaa sababta uu u habboonaaday.",
  },
  "Does anyone pay to appear higher up?": {
    q: "Qof ma bixiyaa lacag si uu kor ugu muuqdo?",
    a: "Maya. Meelna barahan laguma iibsan karo boos, xayeysiisna ma jirto. Nidaamka natiijooyinkaaga lama iibsan karo.",
  },
  "How do I know these organisations are real?": {
    q: "Sidee ku ogaanayaa in hay'adahanu dhab yihiin?",
    a: "Hay'ad kasta waxaa lagu hubiyaa diiwaan dadweyne — Diiwaanka Samafalka ee Scotland ama Companies House — halka aan diiwaangelin lahayna, waxaa lagu hubiyaa deeq-bixiyaheeda, ka hor inta aysan wax soo dhigin. Liis kastaa wuxuu sidoo kale wataa taariikhda ugu dambeysay ee la xaqiijiyay, si aad u aragto sida uu u cusub yahay.",
  },
  "What if nothing matches what I need?": {
    q: "Haddii aanay waxba u dhigmin waxa aan u baahanahay?",
    a: "Waxaa lagu siin doonaa raadin ballaaran halkii bog madhan, waxaadna beddeli kartaa mid kasta oo ka mid ah saddexdaada jawaab. Haddii weli waxba aan jirin, noo sheeg: raadinta aan waxba helin waxaa la duubaa iyadoo aan lagu lifaaqin wax ku aqoonsanaya, waana sida aan ku ogaanno waxa maqan.",
  },
  "Can I save something and come back to it?": {
    q: "Ma kaydin karaa wax oo aan dib ugu soo noqdaa?",
    a: "Haa, adigoo xisaab leh. Wax kasta ku riix Kaydi, waxaana lagu weydiinayaa inaad ku gasho koodh hal mar ah; waxa aad riixday waa la hayaa inta aad taas samaynayso, wuuna ku sugayaa markaad soo noqoto. Waxaan ku xusuusinnaa ilaa toddoba maalmood ka hor taariikhda xiritaanka, waqti kastana way demin kartaa.",
  },
  "Will anyone know I have been here?": {
    q: "Qof ma ogaan doonaa inaan halkan joogay?",
    a: "Annaga nagama ogaan doono. Qofna uma soo wacno adiga darteed, hay'adna uma sheegno inaad fiirisay, waxa aad halkan ku samaysana meelna kama muuqdo oo qof kale arki karo. Laakiin xusuusnow in browser-kaaga uu taariikh hayo, sida ay ku jirto goob kasta oo internet ah.",
  },
  "What if a listing is wrong or out of date?": {
    q: "Haddii liis khaldan yahay ama duugoobay?",
    a: "Noo sheeg. Bog kasta oo liis ah waxaa ku yaal link lagu soo sheego. Waannu hubinnaa, haddiise khaldan yahay waxaan hay'adda weydiinnaa inay hagaajiso; haddii haweeney galab ku lumin karto inta la hagaajinayo, waannu qaadnaa ilaa laga saaro.",
  },
  "What happens when a closing date passes?": {
    q: "Maxaa dhaca marka taariikhda xiritaanka dhaafto?",
    a: "Liisku waa xirmaa laakiin ma baabba'o. Weli waxaad ka gaari kartaa liis la kaydiyay ama link, si uusan boggii lagu soo diray waxba u noqon, wuxuuna joojiyaa inuu la tartamo waxyaabaha weli furan.",
  },
  "Is this only for Scotland?": {
    q: "Kaliya Scotland ma u yahay?",
    a: "Haa. Hay'ad kasta oo halkan ku jirta waxay ka shaqeysaa Scotland, meelaha aan ku habeynnana waa magaalooyin iyo degmooyin Scotland ah. Liisaska qaarkood waa online waana u furan yihiin qof kasta, waxayna taas si cad u sheegaan.",
  },
  "Can I read this in another language?": {
    q: "Ma ku akhriyi karaa luqad kale?",
    a: "Haa. Badhanka luqadda ee bogga korkiisa wuxuu bixiyaa Gaelic, Scots, Boolish, Yukreeniyaan, Carabi, Urdu, Punjabi, Shiineys fudud, Romanian, Soomaali iyo Tigrinya, raadinta oo dhanna waa la turjumay ee ma aha bogga hore oo keliya. Waxa hay'aduhu naftooda ka qoraan wuxuu ku hadhayaa luqaddii ay ku qoreen, maxaa yeelay erayada qofna si mashiin ah uma turjunno. Turjumaad kasta oo halkan ku jirta waxaa qabtay mashiin, waxayna sugaysaa in qof afkaas u dhashay uu akhriyo.",
  },
  "I need help right now.": {
    q: "Hadda caawimo ayaan u baahanahay.",
    a: "Barahan waxaa loo sameeyay in taageero lagu raadiyo, ee ma aha xaalado degdeg ah, qofna lama ilaalinayo. Haddii aad khatar degdeg ah ku jirto, wac 999. Khadka Caawimaadda Tacaddiga Qoyska iyo Guurka Qasabka ah ee Scotland waa bilaash 0800 027 1234, habeen iyo maalin.",
  },
  "Who can list on HWS Path Grid?": {
    q: "Yaa ku qori kara HWS Path Grid?",
    a: "Hay'ad kasta oo haweenka kala shaqeysa Scotland: samafal, ganacsi bulsheed, hay'ado dowladeed, kuliyado, ganacsiyo iyo kooxo bulsho oo rasmi ah. Looma baahna inaad haween keliya u shaqayso, laakiin waxa aad qorayso waa inuu noqdaa wax ay haweeney ku dhaqaaqi karto.",
  },
  "Does it cost anything to be listed?": {
    q: "Wax qiime ah ma leh in la qoro?",
    a: "Maya. Qoristu waa bilaash, boos lacag lagu iibsadona ma jiro, markaa wax aad bixiso ma beddeli karo meesha aad ka muuqato natiijada qofna.",
  },
  "How do you check us, and how long does it take?": {
    q: "Sidee noo hubisaan, intee in le'egna qaadataa?",
    a: "Diiwaan dadweyne haddii aad leedahay — lambar samafal ama lambar shirkadeed — iyo deeq-bixiyahaaga haddii aadan lahayn. Badanaa waxay qaadataa ilaa laba maalmood oo shaqo laga bilaabo markaad dhammeyso isdiiwaangelinta. Labada dhinacba iimayl ayaad heli doontaa, haddiise aan hal shay oo kale u baahanno waanu sheegaynaa waxa uu yahay.",
  },
  "What do I need to fill in?": {
    q: "Maxaan buuxinayaa?",
    a: "Isdiiwaangelintu waa saddex tallaabo oo gaaban: cidda aad tahay, Aagagga Helitaanka ee aad leedahay, iyo xiriiriye lagu xaqiijinayo. Taas kadib waxaa jira astaan buuxda: ujeeddadaada, cidda aad la shaqeyso, waxa aad bixiso, inta aad gaari karto iyo cidda aadan caawin karin. Astaantaas ayaa go'aamisa haweenka aan kuu dirno, markaa labaatanka daqiiqo way mudan tahay.",
  },
  "What can I post?": {
    q: "Maxaan soo dhigi karaa?",
    a: "Hal shay oo haweeney ku dhaqaaqi karto: koorso, deeq, imaatin furan, munaasabad, boos hagid ah, kulan gaar ah. Si gooni ah u soo dhig halkii aad isku xidhi lahayd, si mid kastaa loogu habeeyo haweenka runtii ku habboon.",
  },
  "Who decides which women see my listing?": {
    q: "Yaa go'aamiya haweenka arka liiskayga?",
    a: "Nidaam kala saaraya, oo ku saleysan waxa ay qortay iyo waxa aad qortay. Wuxuu miisaamaa xaaladaha aad calaamadisay, erayadeeda iyo kuwaaga, iyo inaad gacanteeda ku jirtid iyo in kale. Qodob kastaa wuxuu ku jiraa hal fayl, midna lama iibsan karo. Waxaa sidoo kale loo sheegaa sababta liiskaagu ugu habboonaaday.",
  },
  "Can I edit a listing after it is live?": {
    q: "Ma beddeli karaa liis kadib markuu soo baxo?",
    a: "Haa, waqti kasta, wuuna sii socdaa inta aad beddelayso. Liisku wuxuu muujiyaa taariikhda ugu dambeysay ee la cusbooneysiiyay, si haweeneydu u aragto inuu cusub yahay.",
  },
  "What happens when my closing date passes?": {
    q: "Maxaa dhaca marka taariikhdayda xiritaanku dhaafto?",
    a: "Liisku isagaa iskii u xirma. Qofna kaa codsan maayo inaad xaqiijiso, maxaa yeelay taariikhda horay ayaad noogu sheegtay. Wuu sii gaari karaa si qofkii kaydiyay uusan ugu harin link meyd ah, wuxuuna joojiyaa inuu la tartamo waxyaabaha weli furan. Si aad u kordhiso, beddel taariikhda.",
  },
  "Can colleagues help manage our listings?": {
    q: "Asxaabta shaqada ma naga caawin karaan maaraynta liisaskayaga?",
    a: "Haa. Kadib markii la ku xaqiijiyo, bogga hay'addaada iimayl kaga casuun. Waxay helayaan gelitaankooda gaarka ah waxayna dhaxlayaan xaaladdaada la xaqiijiyay, markaa wax dib loo caddeeyo ma jiro.",
  },
  "Why has my listing been hidden?": {
    q: "Maxaa liiskayga loo qariyay?",
    a: "Maamule wuxuu liiska ka saari karaa dhinaca haweenku arkaan haddii wax ku jira ay waqtigeeda lumin lahaayeen: link meyd ah, taariikh dhaaftay, ama shuruudo aan waafaqsanayn waxa dhab ahaan socda. Waxba lama tirtiro, waxaad haysataa wax kasta oo aad qortay, sababtana waxaa laguugu sheegaa iimayl iyo shaashaddaada. Hagaaji oo noo sheeg, wuuna soo noqonayaa.",
  },
  "What do the figures on my overview mean?": {
    q: "Maxay ka dhigan yihiin tirooyinka guudmarkayga?",
    a: "Haweenka laguu soo diray waa tirada riixday oo kuu timid. Booqashada astaanta waa tirada akhriday bogga hay'addaada. Labadaba waxaa lagu tusi karaa toddobaadkan, bishan ama waqti kasta, waana tirooyin taariikh wata, waligood ma aha wax ku saabsan cidda qof ahaa.",
  },
  "Can HWS add our organisation for us?": {
    q: "HWS ma noo diiwaangelin karaa hay'addayada?",
    a: "Haa. Hay'adaha qaarkood waligood isma diiwaangelin doonaan, markaa HWS wuu geli karaa mid wuxuuna wax u soo dhigi karaa. Haddii taasi ay tahay taada oo aad doorbideyso inaad adigu maamusho, na weydii waanan kuu wareejinaynaa.",
  },
  "How often should we post?": {
    q: "Imisa jeer ayaan wax soo dhigeynaa?",
    a: "Inta aad runtii wax hayso. Astaantaada waxaad noogu sheegtaa heerka aad filayso — toddobaadyada badankood, bishiiba mar, marka maalgelintu ogolaato — waxaanan u isticmaalnaa inaan go'aansanno inta jeer ee aan ku soo xiriirno, halkii aan qof walba isku saacad ugu celcelin lahayn.",
  },
};

const ti: FaqTable = {
  "What is HWS Path Grid?": {
    q: "HWS Path Grid እንታይ እዩ?",
    a: "ኣብ ብምሉኡ ስኮትላንድ ንደቂ ኣንስትዮ ዝኸውን ደገፍ እትረኽብሉ ሓደ ቦታ፡ ትምህርትታት፡ ገንዘባዊ ሓገዝ፡ ምኽሪ፡ ብዘይ ቆጸራ ምእታው፡ ምምካርን ካልእን። ብናትኪ ቃላት እንታይ ከም ዘድልየኪ ንገርና፡ ንሕና ድማ ባዕልኺ እትድህስስዮ ዝርዝር ዘይኮነስ ክትወስድዮም ዝግባእ ውሑዳት ቀጺሎም ዘለዉ ስጉምትታት ከነርእየኪ ኢና።",
  },
  "Do I need an account?": {
    q: "ኣካውንት የድልየኒ ድዩ?",
    a: "ንምድላይ፡ ንምንባብ ወይ ንምምልካት ኣየድልን። ኣካውንት ዘድልዮ እንኮ ነገር ምዕቃብ እዩ፡ ዓቅቢ ትጠውቒ እሞ ክትኣትዊ ይሕተትኪ፡ ዝርዝርኪ ኣብ ዝመጽእ ግዜ ምእንቲ ክህሉን ሓደ ነገር ቅድሚ ምዕጻዉ ክንነግረክን። ኣብዚ መድረኽ ካልእ ዝሓትተኪ ነገር የለን።",
  },
  "Does it cost anything?": {
    q: "ገንዘብ የድልዮ ድዩ?",
    a: "ኣይፋሉን። እዚ መድረኽ ንምጥቃም ነጻ እዩ። ኣብኡ ካብ ዝተዘርዘሩ ገሊኣቶም ክፍሊት ኣለዎም፡ ነፍሲ ወከፍ ዝርዝር ድማ ቅድሚ ምጥዋቕኪ ኣየናይ ምዃኑ ይነግር፡ ነጻ፡ ምምልካት ነጻ፡ ወይ ክፍሊት ኣለዎ።",
  },
  "What happens to what I type?": {
    q: "እቲ ዝጽሕፎ ነገር እንታይ ይኸውን?",
    a: "መልስታትኪ ውጽኢትኪ ንምስራዕ ጥራይ እየን ዝውዕላ። ኣይሽየጣን፡ ነቶም ዝርኣዩኺ ትካላት ኣይወሃባን፡ ብዛዕባኺ መለለዪ ንምስራሕ እውን ኣይውዕላን። ሓደ ዝርዝር ከም ዝተራእየ ወይ ከም ዝተጠወቐ ከም ቁጽርን ዕለትን ንምዝግብ፡ ንስኺ ምዃንኪ ክሕብር ዝኽእል ዝኾነ ነገር ከይተታሓሓዘ።",
  },
  "How do you decide what to show me?": {
    q: "እንታይ ከም እተርእዩኒ ከመይ ጌርኩም ትውስኑ?",
    a: "ካብ ሰለስተ ነገራት እትነግርና፡ ብናትኪ ቃላት እንታይ ከም ዘድልየኪ፡ ኣበይ ከም እትርከቢ ብግምት፡ ከምኡ ድማ ብዛዕባ ኩነታትኪ ክትነግሪ እትመርጽዮ ዝኾነ ነገር። እዚኦም ምስቲ ነፍሲ ወከፍ ዝርዝር ንምንታይ ከም ዝኾነ፡ ንመን ክፉት ከም ዝኾነ፡ ኣበይ ከም ዝካየድን ከመይ ጌርኪ ክትበጽሕዮ ከም እትኽእልን ይምዘኑ። ነፍሲ ወከፍ ውጽኢት ስለምንታይ ከም ዝሰማምዐ ይነግር።",
  },
  "Does anyone pay to appear higher up?": {
    q: "ንላዕሊ ንምውጻእ ዝኸፍል ሰብ ኣሎ ድዩ?",
    a: "የለን። ኣብዚ መድረኽ ኣብ ዝኾነ ቦታ ዝተኸፍለሉ ቦታን መወዓውዒን የለን። መስርዕ ውጽኢትኪ ክዕደግ ኣይክእልን።",
  },
  "How do I know these organisations are real?": {
    q: "እዞም ትካላት ሓቀኛታት ምዃኖም ከመይ ጌረ እፈልጥ?",
    a: "ነፍሲ ወከፍ ትካል ዝኾነ ነገር ቅድሚ ምዝርጋሑ ኣብ ህዝባዊ መዝገብ ይረጋገጽ፡ ናይ ስኮትላንድ መዝገብ ግብረ ሰናይ ወይ Companies House፡ መዝገብ ዘይብሉ እንተ ኾይኑ ድማ ኣብ ወሃቢ ገንዘቡ። ነፍሲ ወከፍ ዝርዝር እውን እቲ ዳሕራይ ዝተረጋገጸሉ ዕለት ይሕዝ፡ ክሳብ ክንደይ ሓድሽ ምዃኑ ክትርእዪ።",
  },
  "What if nothing matches what I need?": {
    q: "ምስቲ ዘድልየኒ ዝሰማማዕ እንተ ዘየልዩኸ?",
    a: "ባዶ ገጽ ዘይኮነስ ዝሰፍሐ ድሌት ክቐርበልኪ እዩ፡ ካብቶም ሰለስተ መልስታትኪ ዝኾነ ክትቅይሪ ድማ ትኽእሊ። ገና እንተ ዘየልዩ፡ ንገርና፡ ዋላ ሓንቲ ዘይረኽባ ድሌታት ንዓኺ ዝሕብር ነገር ከይሓዛ ይምዝገባ፡ ብኣታተን ድማ እንታይ ይጎድል ከም ዘሎ ንፈልጥ።",
  },
  "Can I save something and come back to it?": {
    q: "ሓደ ነገር ዓቂበ ተመሊሰ ክርእዮ እኽእል ድየ?",
    a: "እወ፡ ብኣካውንት። ኣብ ዝኾነ ነገር ዓቅቢ ጠውቒ እሞ ብናይ ሓደ ግዜ ኮድ ክትኣትዊ ትሕተቲ፡ እቲ ዓቅቢ ዝጠወቕክሉ ነገር ኣብኡ እናተሓዘ ይጸንሕ ምልስ ምስ በልኪ ድማ ይጽበየኪ። ቅድሚ መዕጸዊ ዕለት ኣስታት ሸውዓተ መዓልቲ ነዘኻኽረኪ፡ ንሱ ድማ ኣብ ዝኾነ ግዜ ከተጥፍእዮ ትኽእሊ።",
  },
  "Will anyone know I have been here?": {
    q: "ኣብዚ ከም ዝነበርኩ ዝፈልጥ ሰብ ኣሎ ድዩ?",
    a: "ካባና ኣይኮነን። ብስምኪ ንዝኾነ ሰብ ኣይንረኽቦን፡ ንትካል ከም ዝረኣኽዮ ኣይንነግርን፡ ኣብዚ እትገብርዮ ነገር ድማ ካልእ ሰብ ክርእዮ ኣብ ዝኽእል ቦታ ኣይወጽእን። ይኹን እምበር ናትኪ መርበብ መድህስሲ ከም ኣብ ዝኾነ መርበብ ታሪኽ ከም ዝሕዝ ኣይትረስዒ።",
  },
  "What if a listing is wrong or out of date?": {
    q: "ሓደ ዝርዝር ጌጋ ወይ ዝደሓረ እንተ ኾይኑኸ?",
    a: "ንገርና። ኣብ ነፍሲ ወከፍ ገጽ ዝርዝር መጠንቀቕታ ዝህብ መላግቦ ኣሎ። ንሕና ንምርምሮ፡ ጌጋ እንተ ኾይኑ ድማ ነቲ ትካል ከስተኻኽሎ ንሓቶ፡ ኣብ መንጎ ግን ሓንቲ ጓል ኣንስተይቲ ፍርቂ መዓልቲ ክትጥፍእ እንተ ኾይና፡ ክሳብ ዝስተኻኸል ነውርዶ።",
  },
  "What happens when a closing date passes?": {
    q: "መዕጸዊ ዕለት ምስ ሓለፈ እንታይ የጋጥም?",
    a: "እቲ ዝርዝር ይዕጾ እምበር ኣይጠፍእን። ካብ ዝተዓቀበ ዝርዝር ወይ ካብ መላግቦ ገና ክትበጽሕዮ ትኽእሊ፡ ስለዚ እቲ ዝተላእከልኪ ገጽ ናብ ዋላ ሓንቲ ኣይቕየርን፡ ምስቶም ገና ክፉታት ዘለዉ ምውድዳር ድማ የቋርጽ።",
  },
  "Is this only for Scotland?": {
    q: "እዚ ንስኮትላንድ ጥራይ ድዩ?",
    a: "እወ። ኣብዚ ዘሎ ነፍሲ ወከፍ ትካል ኣብ ስኮትላንድ እዩ ዝሰርሕ፡ ዝሰማምዑ ቦታታት ድማ ናይ ስኮትላንድ ከተማታትን ናይ ከባቢ ምምሕዳራትን እዮም። ገሊኦም ዝርዝራት ኦንላይን ኮይኖም ንዝኾነ ሰብ ክፉታት እዮም፡ ንሳቶም ድማ ነዚ ይገልጹ።",
  },
  "Can I read this in another language?": {
    q: "ነዚ ብኻልእ ቋንቋ ከንብቦ እኽእል ድየ?",
    a: "እወ። እቲ ኣብ ላዕሊ ገጽ ዘሎ መቐየሪ ቋንቋ ጋኤሊክ፡ ስኮትስ፡ ፖላንድኛ፡ ዩክሬይንኛ፡ ዓረብኛ፡ ኡርዱ፡ ፑንጃቢ፡ ቀሊል ቻይንኛ፡ ሮማንያ፡ ሶማሊን ትግርኛን የቕርብ፡ እቲ ናይ ምድላይ መስርሕ ብምሉኡ እውን ተተርጒሙ ኣሎ እምበር ቀዳማይ ገጽ ጥራይ ኣይኮነን። ትካላት ብዛዕባ ርእሶም ዝጽሕፍዎ ብዝጸሓፍዎ ቋንቋ እዩ ዝጸንሕ፡ ምኽንያቱ ናይ ዝኾነ ሰብ ቃላት ብማሽን ኣይንትርጉምን። ኣብዚ ዘሎ ነፍሲ ወከፍ ትርጉም ብማሽን ዝተዳለወ ኮይኑ ብወዲ ዓዲ ክንበብ ይጽበ ኣሎ።",
  },
  "I need help right now.": {
    q: "ሕጂ ሓገዝ የድልየኒ ኣሎ።",
    a: "እዚ መድረኽ ደገፍ ንምርካብ እዩ እምበር ንህጹጽ ኩነታት ኣይኮነን፡ ኣብዚ ዝከታተል ሰብ እውን የለን። ኣብ ቅጽበታዊ ሓደጋ እንተ ሃሊኺ፡ ናብ 999 ደውሊ። ናይ ስኮትላንድ መስመር ሓገዝ ናይ ገዛ ጐነጽን ናይ ግዴታ መርዓን ብ 0800 027 1234 ነጻ እዩ፡ ለይትን መዓልትን።",
  },
  "Who can list on HWS Path Grid?": {
    q: "ኣብ HWS Path Grid መን ክምዝገብ ይኽእል?",
    a: "ኣብ ስኮትላንድ ምስ ደቂ ኣንስትዮ ዝሰርሕ ዝኾነ ትካል፡ ግብረ ሰናይ ትካላት፡ ማሕበራዊ ትካላት፡ መንግስታዊ ትካላት፡ ኮሌጃት፡ ንግዲታትን ሕጋዊ ኣቃውማ ዘለዎም ናይ ሕብረተሰብ ጉጅለታትን። ንደቂ ኣንስትዮ ጥራይ ክትሰርሑ ግድን ኣይኮነን፡ እቲ እተስፍርዎ ግን ሓንቲ ጓል ኣንስተይቲ ክትወስዶ እትኽእል ነገር ክኸውን ኣለዎ።",
  },
  "Does it cost anything to be listed?": {
    q: "ምስፋር ክፍሊት ኣለዎ ድዩ?",
    a: "የብሉን። ምስፋር ነጻ እዩ፡ ዝዕደግ ዝተኸፍለሉ ቦታ እውን የለን፡ ስለዚ እትኸፍልዎ ዝኾነ ነገር ኣብ ውጽኢት ናይ ዝኾነ ሰብ ዘለኩም ቦታ ክቕይሮ ኣይክእልን።",
  },
  "How do you check us, and how long does it take?": {
    q: "ከመይ ጌርኩም ትሕልዉና፡ ክንደይ ድማ ይወስድ?",
    a: "መዝገብ እንተ ሃልይኩም ኣብ ህዝባዊ መዝገብ፡ ቁጽሪ ግብረ ሰናይ ወይ ቁጽሪ ትካል፡ እንተ ዘይብልኩም ድማ ኣብ ወሃቢ ገንዘብኩም። መብዛሕትኡ ግዜ ምዝገባ ካብ እትውድኡሉ ግዜ ኣስታት ክልተ ናይ ስራሕ መዓልቲ ይወስድ። ብዝኾነ መንገዲ ኢመይል ክመጸኩም እዩ፡ ተወሳኺ ሓደ ነገር እንተ ኣድልዩና ድማ እንታይ ምዃኑ ብንጹር ክንነግረኩም ኢና።",
  },
  "What do I need to fill in?": {
    q: "እንታይ ክመልእ ኣለኒ?",
    a: "ምዝገባ ሰለስተ ሓጺር ስጉምቲ እዩ፡ መን ምዃንኩም፡ ዞባታት ተበጻሕነትኩም፡ ከምኡ ድማ ንምርግጋጽ ዝኸውን ኣድራሻ። ድሕሪኡ ዝሰፍሐ መለለዪ ኣሎ፡ ዕላማኹም፡ ምስ መን ከም እትሰርሑ፡ እንታይ ከም እትህቡ፡ ክሳብ ክንደይ ከም እትበጽሑን ንመን ክትሕግዙ ከም ዘይትኽእሉን። እቲ መለለዪ እዩ ኣየኖት ደቂ ኣንስትዮ ናባኹም ከም እንሰድድ ዝውስን፡ ስለዚ እቲ ዕስራ ደቒቕ ይበቅዕ።",
  },
  "What can I post?": {
    q: "እንታይ ክዝርግሕ እኽእል?",
    a: "ሓንቲ ጓል ኣንስተይቲ ክትወስዶ እትኽእል ሓደ ነገር፡ ትምህርቲ፡ ገንዘባዊ ሓገዝ፡ ክፉት ኣገልግሎት፡ ኣጋጣሚ፡ ናይ ምምካር ቦታ፡ ናይ ሓደ ንሓደ ርክብ። ኣብ ሓደ ካብ ምጥርናፍ ፈላሊኹም ኣስፍሩ፡ ነፍሲ ወከፍ ምስተን ብሓቂ ዝሰማምዓኦ ደቂ ኣንስትዮ ክሰማማዕ።",
  },
  "Who decides which women see my listing?": {
    q: "ዝርዝረይ ኣየኖት ደቂ ኣንስትዮ ከም ዝርእይኦ መን ይውስን?",
    a: "ካብቲ ንሳ ዝጸሓፈቶን ካብቲ ንስኻትኩም ዝጸሓፍኩምዎን ተበጊሱ ዝሰርዕ ስርዓት። ነቶም ዝሰየምኩምዎም ኩነታት፡ ናታ ቃላት ምስ ናትኩም፡ ከምኡ ድማ ኣብ ክሊኣ ትርከቡ ምህላውኩም ይምዝን። ኩሉ ረቛሒ ኣብ ሓደ ፋይል ኣሎ፡ ሓደ እኳ ክዕደግ ኣይክእልን። ንሳ እውን ዝርዝርኩም ስለምንታይ ከም ዝሰማምዓ ይንገራ።",
  },
  "Can I edit a listing after it is live?": {
    q: "ዝርዝር ምስ ተዘርግሐ ክእርሞ እኽእል ድየ?",
    a: "እወ፡ ኣብ ዝኾነ ግዜ፡ ኣብ እትእርሙሉ እዋን እውን ተዘርጊሑ ይጸንሕ። እቲ ዝርዝር ዳሕራይ ዝተሓደሰሉ ዕለት የርኢ፡ ሓንቲ ጓል ኣንስተይቲ ሓድሽ ምዃኑ ክትርኢ።",
  },
  "What happens when my closing date passes?": {
    q: "መዕጸዊ ዕለተይ ምስ ሓለፈ እንታይ የጋጥም?",
    a: "እቲ ዝርዝር ባዕሉ ይዕጾ። ዕለት ኣቐዲምኩም ስለ ዝነገርኩምና ዝኾነ ሰብ ከተረጋግጹ ኣይሓተኩምን። እቲ ዝዓቀቦ ሰብ ምዉት መላግቦ ከይተርፎ ተበጻሒ ኮይኑ ይጸንሕ፡ ምስቶም ገና ክፉታት ዘለዉ ምውድዳር ድማ የቋርጽ። ንምንዋሕ ነቲ ዕለት ኣርሙ።",
  },
  "Can colleagues help manage our listings?": {
    q: "መሳርሕትና ኣብ ምምሕዳር ዝርዝራትና ክሕግዙ ይኽእሉ ድዮም?",
    a: "እወ። ምስ ተረጋገጽኩም ካብ ገጽ ትካልኩም ብኢመይል ዓድምዎም። ናቶም መእተዊ ይረኽቡ፡ ናትኩም ዝተረጋገጸ ደረጃ ድማ ይወርሱ፡ ስለዚ ከም ብሓድሽ ዝረጋገጽ ነገር የለን።",
  },
  "Why has my listing been hidden?": {
    q: "ዝርዝረይ ስለምንታይ ተሰዊሩ?",
    a: "ኣብቲ ዝርዝር ግዜኣ ዘባኽን ነገር እንተ ሃልዩ፡ ምዉት መላግቦ፡ ዝሓለፈ ዕለት፡ ወይ ምስቲ ብተግባር ዝካየድ ዘይሰማማዕ ቅድመ ኩነት፡ ኣመሓዳሪ ነቲ ዝርዝር ካብቲ ደቂ ኣንስትዮ ዝርእይኦ ክፋል ከውርዶ ይኽእል። ዝጠፍእ ነገር የለን፡ ዝጸሓፍኩምዎ ኩሉ ይጸንሓኩም፡ ምኽንያቱ ድማ ብኢመይልን ኣብ ዳሽቦርድኩምን ይንገረኩም። ኣስተኻኺልኩም ንገሩና፡ ከም ብሓድሽ ይዝርጋሕ።",
  },
  "What do the figures on my overview mean?": {
    q: "ኣብ ሓፈሻዊ መርኣዪይ ዘለዉ ቁጽርታት እንታይ ማለቶም እዮም?",
    a: "ናባኹም ዝተመርሓ ደቂ ኣንስትዮ ማለት እተን ጠዊቐን ናባኹም ዝመጻ ቁጽሪ እዩ። ምብጻሕ መለለዪ ማለት እተን ገጽ ትካልኩም ዘንበባ ቁጽሪ እዩ። ክልቲኦም ነዛ ሰሙን፡ ነዛ ወርሒ ወይ ካብ መጀመርታ ክርኣዩ ይኽእሉ፡ ምስ ዕለት ዝተታሓሐዙ ቁጽርታት እዮም፡ ብዛዕባ መን ምዃን ዝሕብሩ ዋላ ሓደ ነገር የብሎምን።",
  },
  "Can HWS add our organisation for us?": {
    q: "HWS ኣብ ክንዳና ትካልና ክውስኾ ይኽእል ድዩ?",
    a: "እወ። ገሊኦም ትካላት ፈጺሞም ባዕሎም ኣይምዝገቡን፡ ስለዚ HWS ሓደ ኣእትዩ ኣብ ክንድኡ ክዝርግሕ ይኽእል። ናትኩም እንተ ኾይኑ ባዕልኹም ከተመሓድርዎ እንተ መሪጽኩም፡ ሕተቱና እሞ ነረክበኩም።",
  },
  "How often should we post?": {
    q: "ክንደይ ግዜ ክንዝርግሕ ኣሎና?",
    a: "ብሓቂ ዝዝርጋሕ ነገር ኣብ ዘለኩምሉ ግዜ። ኣብ መለለዪኹም እትጽበይዎ ምትእትታው ትነግሩና፡ መብዛሕትኡ ሰሙን፡ ወርሓዊ፡ ባጀት ምስ ዘፍቅድ፡ ንሕና ድማ ንኹሉ ሰብ ብሓደ ሰዓት ካብ ምድጋም ንላዕሊ ክንደይ ግዜ ከም እንረኽበኩም ንምውሳን ንጥቀመሉ።",
  },
};

export const FAQ: Record<string, FaqTable> = {
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
