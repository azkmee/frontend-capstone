(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(i,s,r){"use strict";r.r(s),r.d(s,"Badges",(function(){return n}));r(2);var t=r(9),n=function Badges(i){var s=i.symbol,r=i.name,n=i.price_usd,e=i.percent_change_24h,a=i.percent_change_1h;return Object(t.jsxs)("div",{className:"text-left p-2 w-1/4 border-2 border-indigo-600 space-y-2 m-0",children:[Object(t.jsxs)("div",{className:"flex flex-nowrap ",children:[Object(t.jsx)("div",{className:"w-1/3 ",children:"Ticker:"}),Object(t.jsx)("div",{className:"w-2/3",children:s})]}),Object(t.jsxs)("div",{className:"flex flex-nowrap",children:[Object(t.jsx)("div",{className:"w-1/3",children:"Name:"}),Object(t.jsx)("div",{className:"w-2/3",children:r})]}),Object(t.jsxs)("div",{className:"flex flex-nowrap",children:[Object(t.jsx)("div",{className:"w-1/3",children:"Price(USD):"}),Object(t.jsxs)("div",{className:"w-2/3",children:["$",n]})]}),Object(t.jsxs)("div",{className:"flex flex-nowrap",children:[Object(t.jsx)("div",{className:"w-1/3",children:"24 hour Price Change(%):"}),Object(t.jsxs)("div",{className:"w-2/3",children:[e," %"]})]}),Object(t.jsxs)("div",{className:"flex flex-nowrap",children:[Object(t.jsx)("div",{className:"w-1/3",children:"1 hour Price Change(%):"}),Object(t.jsxs)("div",{className:"w-2/3",children:[a," %"]})]})]})}},191:function(i,s,r){i.exports=r(792)},371:function(i,s,r){var t={"./Binary_Property/ASCII.js":372,"./Binary_Property/ASCII_Hex_Digit.js":373,"./Binary_Property/Alphabetic.js":374,"./Binary_Property/Any.js":375,"./Binary_Property/Assigned.js":376,"./Binary_Property/Bidi_Control.js":377,"./Binary_Property/Bidi_Mirrored.js":378,"./Binary_Property/Case_Ignorable.js":379,"./Binary_Property/Cased.js":380,"./Binary_Property/Changes_When_Casefolded.js":381,"./Binary_Property/Changes_When_Casemapped.js":382,"./Binary_Property/Changes_When_Lowercased.js":383,"./Binary_Property/Changes_When_NFKC_Casefolded.js":384,"./Binary_Property/Changes_When_Titlecased.js":385,"./Binary_Property/Changes_When_Uppercased.js":386,"./Binary_Property/Dash.js":387,"./Binary_Property/Default_Ignorable_Code_Point.js":388,"./Binary_Property/Deprecated.js":389,"./Binary_Property/Diacritic.js":390,"./Binary_Property/Emoji.js":391,"./Binary_Property/Emoji_Component.js":392,"./Binary_Property/Emoji_Modifier.js":393,"./Binary_Property/Emoji_Modifier_Base.js":394,"./Binary_Property/Emoji_Presentation.js":395,"./Binary_Property/Extended_Pictographic.js":396,"./Binary_Property/Extender.js":397,"./Binary_Property/Grapheme_Base.js":398,"./Binary_Property/Grapheme_Extend.js":399,"./Binary_Property/Hex_Digit.js":400,"./Binary_Property/IDS_Binary_Operator.js":401,"./Binary_Property/IDS_Trinary_Operator.js":402,"./Binary_Property/ID_Continue.js":403,"./Binary_Property/ID_Start.js":404,"./Binary_Property/Ideographic.js":405,"./Binary_Property/Join_Control.js":406,"./Binary_Property/Logical_Order_Exception.js":407,"./Binary_Property/Lowercase.js":408,"./Binary_Property/Math.js":409,"./Binary_Property/Noncharacter_Code_Point.js":410,"./Binary_Property/Pattern_Syntax.js":411,"./Binary_Property/Pattern_White_Space.js":412,"./Binary_Property/Quotation_Mark.js":413,"./Binary_Property/Radical.js":414,"./Binary_Property/Regional_Indicator.js":415,"./Binary_Property/Sentence_Terminal.js":416,"./Binary_Property/Soft_Dotted.js":417,"./Binary_Property/Terminal_Punctuation.js":418,"./Binary_Property/Unified_Ideograph.js":419,"./Binary_Property/Uppercase.js":420,"./Binary_Property/Variation_Selector.js":421,"./Binary_Property/White_Space.js":422,"./Binary_Property/XID_Continue.js":423,"./Binary_Property/XID_Start.js":424,"./General_Category/Cased_Letter.js":425,"./General_Category/Close_Punctuation.js":426,"./General_Category/Connector_Punctuation.js":427,"./General_Category/Control.js":428,"./General_Category/Currency_Symbol.js":429,"./General_Category/Dash_Punctuation.js":430,"./General_Category/Decimal_Number.js":431,"./General_Category/Enclosing_Mark.js":432,"./General_Category/Final_Punctuation.js":433,"./General_Category/Format.js":434,"./General_Category/Initial_Punctuation.js":435,"./General_Category/Letter.js":436,"./General_Category/Letter_Number.js":437,"./General_Category/Line_Separator.js":438,"./General_Category/Lowercase_Letter.js":439,"./General_Category/Mark.js":440,"./General_Category/Math_Symbol.js":441,"./General_Category/Modifier_Letter.js":442,"./General_Category/Modifier_Symbol.js":443,"./General_Category/Nonspacing_Mark.js":444,"./General_Category/Number.js":445,"./General_Category/Open_Punctuation.js":446,"./General_Category/Other.js":447,"./General_Category/Other_Letter.js":448,"./General_Category/Other_Number.js":449,"./General_Category/Other_Punctuation.js":450,"./General_Category/Other_Symbol.js":451,"./General_Category/Paragraph_Separator.js":452,"./General_Category/Private_Use.js":453,"./General_Category/Punctuation.js":454,"./General_Category/Separator.js":455,"./General_Category/Space_Separator.js":456,"./General_Category/Spacing_Mark.js":457,"./General_Category/Surrogate.js":458,"./General_Category/Symbol.js":459,"./General_Category/Titlecase_Letter.js":460,"./General_Category/Unassigned.js":461,"./General_Category/Uppercase_Letter.js":462,"./Script/Adlam.js":463,"./Script/Ahom.js":464,"./Script/Anatolian_Hieroglyphs.js":465,"./Script/Arabic.js":466,"./Script/Armenian.js":467,"./Script/Avestan.js":468,"./Script/Balinese.js":469,"./Script/Bamum.js":470,"./Script/Bassa_Vah.js":471,"./Script/Batak.js":472,"./Script/Bengali.js":473,"./Script/Bhaiksuki.js":474,"./Script/Bopomofo.js":475,"./Script/Brahmi.js":476,"./Script/Braille.js":477,"./Script/Buginese.js":478,"./Script/Buhid.js":479,"./Script/Canadian_Aboriginal.js":480,"./Script/Carian.js":481,"./Script/Caucasian_Albanian.js":482,"./Script/Chakma.js":483,"./Script/Cham.js":484,"./Script/Cherokee.js":485,"./Script/Chorasmian.js":486,"./Script/Common.js":487,"./Script/Coptic.js":488,"./Script/Cuneiform.js":489,"./Script/Cypriot.js":490,"./Script/Cyrillic.js":491,"./Script/Deseret.js":492,"./Script/Devanagari.js":493,"./Script/Dives_Akuru.js":494,"./Script/Dogra.js":495,"./Script/Duployan.js":496,"./Script/Egyptian_Hieroglyphs.js":497,"./Script/Elbasan.js":498,"./Script/Elymaic.js":499,"./Script/Ethiopic.js":500,"./Script/Georgian.js":501,"./Script/Glagolitic.js":502,"./Script/Gothic.js":503,"./Script/Grantha.js":504,"./Script/Greek.js":505,"./Script/Gujarati.js":506,"./Script/Gunjala_Gondi.js":507,"./Script/Gurmukhi.js":508,"./Script/Han.js":509,"./Script/Hangul.js":510,"./Script/Hanifi_Rohingya.js":511,"./Script/Hanunoo.js":512,"./Script/Hatran.js":513,"./Script/Hebrew.js":514,"./Script/Hiragana.js":515,"./Script/Imperial_Aramaic.js":516,"./Script/Inherited.js":517,"./Script/Inscriptional_Pahlavi.js":518,"./Script/Inscriptional_Parthian.js":519,"./Script/Javanese.js":520,"./Script/Kaithi.js":521,"./Script/Kannada.js":522,"./Script/Katakana.js":523,"./Script/Kayah_Li.js":524,"./Script/Kharoshthi.js":525,"./Script/Khitan_Small_Script.js":526,"./Script/Khmer.js":527,"./Script/Khojki.js":528,"./Script/Khudawadi.js":529,"./Script/Lao.js":530,"./Script/Latin.js":531,"./Script/Lepcha.js":532,"./Script/Limbu.js":533,"./Script/Linear_A.js":534,"./Script/Linear_B.js":535,"./Script/Lisu.js":536,"./Script/Lycian.js":537,"./Script/Lydian.js":538,"./Script/Mahajani.js":539,"./Script/Makasar.js":540,"./Script/Malayalam.js":541,"./Script/Mandaic.js":542,"./Script/Manichaean.js":543,"./Script/Marchen.js":544,"./Script/Masaram_Gondi.js":545,"./Script/Medefaidrin.js":546,"./Script/Meetei_Mayek.js":547,"./Script/Mende_Kikakui.js":548,"./Script/Meroitic_Cursive.js":549,"./Script/Meroitic_Hieroglyphs.js":550,"./Script/Miao.js":551,"./Script/Modi.js":552,"./Script/Mongolian.js":553,"./Script/Mro.js":554,"./Script/Multani.js":555,"./Script/Myanmar.js":556,"./Script/Nabataean.js":557,"./Script/Nandinagari.js":558,"./Script/New_Tai_Lue.js":559,"./Script/Newa.js":560,"./Script/Nko.js":561,"./Script/Nushu.js":562,"./Script/Nyiakeng_Puachue_Hmong.js":563,"./Script/Ogham.js":564,"./Script/Ol_Chiki.js":565,"./Script/Old_Hungarian.js":566,"./Script/Old_Italic.js":567,"./Script/Old_North_Arabian.js":568,"./Script/Old_Permic.js":569,"./Script/Old_Persian.js":570,"./Script/Old_Sogdian.js":571,"./Script/Old_South_Arabian.js":572,"./Script/Old_Turkic.js":573,"./Script/Oriya.js":574,"./Script/Osage.js":575,"./Script/Osmanya.js":576,"./Script/Pahawh_Hmong.js":577,"./Script/Palmyrene.js":578,"./Script/Pau_Cin_Hau.js":579,"./Script/Phags_Pa.js":580,"./Script/Phoenician.js":581,"./Script/Psalter_Pahlavi.js":582,"./Script/Rejang.js":583,"./Script/Runic.js":584,"./Script/Samaritan.js":585,"./Script/Saurashtra.js":586,"./Script/Sharada.js":587,"./Script/Shavian.js":588,"./Script/Siddham.js":589,"./Script/SignWriting.js":590,"./Script/Sinhala.js":591,"./Script/Sogdian.js":592,"./Script/Sora_Sompeng.js":593,"./Script/Soyombo.js":594,"./Script/Sundanese.js":595,"./Script/Syloti_Nagri.js":596,"./Script/Syriac.js":597,"./Script/Tagalog.js":598,"./Script/Tagbanwa.js":599,"./Script/Tai_Le.js":600,"./Script/Tai_Tham.js":601,"./Script/Tai_Viet.js":602,"./Script/Takri.js":603,"./Script/Tamil.js":604,"./Script/Tangut.js":605,"./Script/Telugu.js":606,"./Script/Thaana.js":607,"./Script/Thai.js":608,"./Script/Tibetan.js":609,"./Script/Tifinagh.js":610,"./Script/Tirhuta.js":611,"./Script/Ugaritic.js":612,"./Script/Vai.js":613,"./Script/Wancho.js":614,"./Script/Warang_Citi.js":615,"./Script/Yezidi.js":616,"./Script/Yi.js":617,"./Script/Zanabazar_Square.js":618,"./Script_Extensions/Adlam.js":619,"./Script_Extensions/Ahom.js":620,"./Script_Extensions/Anatolian_Hieroglyphs.js":621,"./Script_Extensions/Arabic.js":622,"./Script_Extensions/Armenian.js":623,"./Script_Extensions/Avestan.js":624,"./Script_Extensions/Balinese.js":625,"./Script_Extensions/Bamum.js":626,"./Script_Extensions/Bassa_Vah.js":627,"./Script_Extensions/Batak.js":628,"./Script_Extensions/Bengali.js":629,"./Script_Extensions/Bhaiksuki.js":630,"./Script_Extensions/Bopomofo.js":631,"./Script_Extensions/Brahmi.js":632,"./Script_Extensions/Braille.js":633,"./Script_Extensions/Buginese.js":634,"./Script_Extensions/Buhid.js":635,"./Script_Extensions/Canadian_Aboriginal.js":636,"./Script_Extensions/Carian.js":637,"./Script_Extensions/Caucasian_Albanian.js":638,"./Script_Extensions/Chakma.js":639,"./Script_Extensions/Cham.js":640,"./Script_Extensions/Cherokee.js":641,"./Script_Extensions/Chorasmian.js":642,"./Script_Extensions/Common.js":643,"./Script_Extensions/Coptic.js":644,"./Script_Extensions/Cuneiform.js":645,"./Script_Extensions/Cypriot.js":646,"./Script_Extensions/Cyrillic.js":647,"./Script_Extensions/Deseret.js":648,"./Script_Extensions/Devanagari.js":649,"./Script_Extensions/Dives_Akuru.js":650,"./Script_Extensions/Dogra.js":651,"./Script_Extensions/Duployan.js":652,"./Script_Extensions/Egyptian_Hieroglyphs.js":653,"./Script_Extensions/Elbasan.js":654,"./Script_Extensions/Elymaic.js":655,"./Script_Extensions/Ethiopic.js":656,"./Script_Extensions/Georgian.js":657,"./Script_Extensions/Glagolitic.js":658,"./Script_Extensions/Gothic.js":659,"./Script_Extensions/Grantha.js":660,"./Script_Extensions/Greek.js":661,"./Script_Extensions/Gujarati.js":662,"./Script_Extensions/Gunjala_Gondi.js":663,"./Script_Extensions/Gurmukhi.js":664,"./Script_Extensions/Han.js":665,"./Script_Extensions/Hangul.js":666,"./Script_Extensions/Hanifi_Rohingya.js":667,"./Script_Extensions/Hanunoo.js":668,"./Script_Extensions/Hatran.js":669,"./Script_Extensions/Hebrew.js":670,"./Script_Extensions/Hiragana.js":671,"./Script_Extensions/Imperial_Aramaic.js":672,"./Script_Extensions/Inherited.js":673,"./Script_Extensions/Inscriptional_Pahlavi.js":674,"./Script_Extensions/Inscriptional_Parthian.js":675,"./Script_Extensions/Javanese.js":676,"./Script_Extensions/Kaithi.js":677,"./Script_Extensions/Kannada.js":678,"./Script_Extensions/Katakana.js":679,"./Script_Extensions/Kayah_Li.js":680,"./Script_Extensions/Kharoshthi.js":681,"./Script_Extensions/Khitan_Small_Script.js":682,"./Script_Extensions/Khmer.js":683,"./Script_Extensions/Khojki.js":684,"./Script_Extensions/Khudawadi.js":685,"./Script_Extensions/Lao.js":686,"./Script_Extensions/Latin.js":687,"./Script_Extensions/Lepcha.js":688,"./Script_Extensions/Limbu.js":689,"./Script_Extensions/Linear_A.js":690,"./Script_Extensions/Linear_B.js":691,"./Script_Extensions/Lisu.js":692,"./Script_Extensions/Lycian.js":693,"./Script_Extensions/Lydian.js":694,"./Script_Extensions/Mahajani.js":695,"./Script_Extensions/Makasar.js":696,"./Script_Extensions/Malayalam.js":697,"./Script_Extensions/Mandaic.js":698,"./Script_Extensions/Manichaean.js":699,"./Script_Extensions/Marchen.js":700,"./Script_Extensions/Masaram_Gondi.js":701,"./Script_Extensions/Medefaidrin.js":702,"./Script_Extensions/Meetei_Mayek.js":703,"./Script_Extensions/Mende_Kikakui.js":704,"./Script_Extensions/Meroitic_Cursive.js":705,"./Script_Extensions/Meroitic_Hieroglyphs.js":706,"./Script_Extensions/Miao.js":707,"./Script_Extensions/Modi.js":708,"./Script_Extensions/Mongolian.js":709,"./Script_Extensions/Mro.js":710,"./Script_Extensions/Multani.js":711,"./Script_Extensions/Myanmar.js":712,"./Script_Extensions/Nabataean.js":713,"./Script_Extensions/Nandinagari.js":714,"./Script_Extensions/New_Tai_Lue.js":715,"./Script_Extensions/Newa.js":716,"./Script_Extensions/Nko.js":717,"./Script_Extensions/Nushu.js":718,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":719,"./Script_Extensions/Ogham.js":720,"./Script_Extensions/Ol_Chiki.js":721,"./Script_Extensions/Old_Hungarian.js":722,"./Script_Extensions/Old_Italic.js":723,"./Script_Extensions/Old_North_Arabian.js":724,"./Script_Extensions/Old_Permic.js":725,"./Script_Extensions/Old_Persian.js":726,"./Script_Extensions/Old_Sogdian.js":727,"./Script_Extensions/Old_South_Arabian.js":728,"./Script_Extensions/Old_Turkic.js":729,"./Script_Extensions/Oriya.js":730,"./Script_Extensions/Osage.js":731,"./Script_Extensions/Osmanya.js":732,"./Script_Extensions/Pahawh_Hmong.js":733,"./Script_Extensions/Palmyrene.js":734,"./Script_Extensions/Pau_Cin_Hau.js":735,"./Script_Extensions/Phags_Pa.js":736,"./Script_Extensions/Phoenician.js":737,"./Script_Extensions/Psalter_Pahlavi.js":738,"./Script_Extensions/Rejang.js":739,"./Script_Extensions/Runic.js":740,"./Script_Extensions/Samaritan.js":741,"./Script_Extensions/Saurashtra.js":742,"./Script_Extensions/Sharada.js":743,"./Script_Extensions/Shavian.js":744,"./Script_Extensions/Siddham.js":745,"./Script_Extensions/SignWriting.js":746,"./Script_Extensions/Sinhala.js":747,"./Script_Extensions/Sogdian.js":748,"./Script_Extensions/Sora_Sompeng.js":749,"./Script_Extensions/Soyombo.js":750,"./Script_Extensions/Sundanese.js":751,"./Script_Extensions/Syloti_Nagri.js":752,"./Script_Extensions/Syriac.js":753,"./Script_Extensions/Tagalog.js":754,"./Script_Extensions/Tagbanwa.js":755,"./Script_Extensions/Tai_Le.js":756,"./Script_Extensions/Tai_Tham.js":757,"./Script_Extensions/Tai_Viet.js":758,"./Script_Extensions/Takri.js":759,"./Script_Extensions/Tamil.js":760,"./Script_Extensions/Tangut.js":761,"./Script_Extensions/Telugu.js":762,"./Script_Extensions/Thaana.js":763,"./Script_Extensions/Thai.js":764,"./Script_Extensions/Tibetan.js":765,"./Script_Extensions/Tifinagh.js":766,"./Script_Extensions/Tirhuta.js":767,"./Script_Extensions/Ugaritic.js":768,"./Script_Extensions/Vai.js":769,"./Script_Extensions/Wancho.js":770,"./Script_Extensions/Warang_Citi.js":771,"./Script_Extensions/Yezidi.js":772,"./Script_Extensions/Yi.js":773,"./Script_Extensions/Zanabazar_Square.js":774,"./index.js":775,"./unicode-version.js":776};function webpackContext(i){var s=webpackContextResolve(i);return r(s)}function webpackContextResolve(i){if(!r.o(t,i)){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}return t[i]}webpackContext.keys=function webpackContextKeys(){return Object.keys(t)},webpackContext.resolve=webpackContextResolve,i.exports=webpackContext,webpackContext.id=371},788:function(i,s,r){i.exports={doclets:{},displayName:"Badges",description:"",methods:[],props:[],examples:r(789)}},789:function(i,s,r){var t={react:r(2),"./Badge.jsx":r(174)},n=r(790).default.bind(null,t),e=r(791).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Badges$0 = require('./Badge.jsx');\nconst Badges = Badges$0.default || (Badges$0['Badges'] || Badges$0);",n);i.exports=[{type:"code",content:'    const elem = {\r\n        symbol: "BTC",\r\n        name: "Bitcoin",\r\n        price_usd: "47073.98",\r\n        percent_change_24h: "3.97",\r\n        percent_change_1h: "-0.07",\r\n        percent_change_7d: "0.26",\r\n    }\r\n\r\n    <Badges\r\n        symbol={elem.symbol}\r\n        name = {elem.name}\r\n        price_usd = {elem.price_usd}\r\n        percent_change_24h = {elem.percent_change_24h}\r\n        percent_change_1h ={elem.percent_change_1h}/>\r\n\r\n',settings:{},evalInContext:e}]}},[[191,1,2]]]);