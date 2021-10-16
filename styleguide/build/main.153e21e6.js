(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(t,e,r){"use strict";r.r(e),r.d(e,"CharacterBox",(function(){return a}));r(2);var i=r(51),s=r(52),n=r(4),a=function CharacterBox(t){var e=t.image,r=t.name,a=t.actor,o=t.bookmarked,c=t.clickDetail,p=t.rest,j=t.handleBookmark;return Object(n.jsxs)("div",{className:"text-center block ",style:{height:500},children:[Object(n.jsx)("div",{className:"text-center",style:{height:400},children:Object(n.jsx)("img",{className:"m-auto block overflow-hidden",src:e,style:{height:400,width:300}})}),Object(n.jsxs)("div",{className:"p-2 px-16 text-justify",children:[Object(n.jsx)(i.Bookmarked,{onClick:function onClick(){return j(r)},className:"float-right",state:o}),Object(n.jsxs)("h1",{children:["Character: ",r]}),Object(n.jsxs)("h1",{children:["Actor Name: ",a]})]}),Object(n.jsx)("div",{className:"w-full",children:Object(n.jsx)(s.Button,{onClick:function onClick(){return c(p)},className:"w-2/5",children:"See more"})})]})}},182:function(t,e,r){"use strict";r.r(e),r.d(e,"Detail",(function(){return c}));var i=r(95),s=(r(2),r(91)),n=r(52),a=r(51),o=r(4),c=function Detail(t){var e=t.props,r=t.handleClose,c=t.handleBookmark,p=t.bookmarked,j={name:"Name",species:"Species",gender:"Gender",house:"House",dateOfBirth:"Date of Birth",yearOfBirth:"Year Of Birth",wizard:"Wizard",ancestry:"Ancestry",eyeColour:"Eye Color",hairColour:"Hair Color",actor:"Actor"},_=e.image,l=Object(i.a)(e,["image"]);return Object(o.jsxs)("div",{className:"grid grid-cols-2 gap-3 bg-gray-300 p-4",children:[Object(o.jsx)("div",{className:"relative h-2/3",children:Object(o.jsx)("img",{className:"w-full overflow-hidden",src:_})}),Object(o.jsxs)("div",{className:"relative",children:[Object(o.jsx)(a.Bookmarked,{onClick:function onClick(){return c(l.name)},className:"float-right",state:p}),Object(o.jsx)("div",{className:"text-center",children:Object.keys(l).map((function(t,e){return Object(o.jsx)(s.TextField,{label:j[t],title:l[t]},e)}))}),Object(o.jsx)("div",{className:"absolute bottom-0 w-full text-center inline-block",children:Object(o.jsx)(n.Button,{onClick:r,className:"w-2/5",children:"Back"})})]})]})}},200:function(t,e,r){r(201),t.exports=r(810)},201:function(t,e,r){},381:function(t,e,r){var i={"./Binary_Property/ASCII.js":382,"./Binary_Property/ASCII_Hex_Digit.js":383,"./Binary_Property/Alphabetic.js":384,"./Binary_Property/Any.js":385,"./Binary_Property/Assigned.js":386,"./Binary_Property/Bidi_Control.js":387,"./Binary_Property/Bidi_Mirrored.js":388,"./Binary_Property/Case_Ignorable.js":389,"./Binary_Property/Cased.js":390,"./Binary_Property/Changes_When_Casefolded.js":391,"./Binary_Property/Changes_When_Casemapped.js":392,"./Binary_Property/Changes_When_Lowercased.js":393,"./Binary_Property/Changes_When_NFKC_Casefolded.js":394,"./Binary_Property/Changes_When_Titlecased.js":395,"./Binary_Property/Changes_When_Uppercased.js":396,"./Binary_Property/Dash.js":397,"./Binary_Property/Default_Ignorable_Code_Point.js":398,"./Binary_Property/Deprecated.js":399,"./Binary_Property/Diacritic.js":400,"./Binary_Property/Emoji.js":401,"./Binary_Property/Emoji_Component.js":402,"./Binary_Property/Emoji_Modifier.js":403,"./Binary_Property/Emoji_Modifier_Base.js":404,"./Binary_Property/Emoji_Presentation.js":405,"./Binary_Property/Extended_Pictographic.js":406,"./Binary_Property/Extender.js":407,"./Binary_Property/Grapheme_Base.js":408,"./Binary_Property/Grapheme_Extend.js":409,"./Binary_Property/Hex_Digit.js":410,"./Binary_Property/IDS_Binary_Operator.js":411,"./Binary_Property/IDS_Trinary_Operator.js":412,"./Binary_Property/ID_Continue.js":413,"./Binary_Property/ID_Start.js":414,"./Binary_Property/Ideographic.js":415,"./Binary_Property/Join_Control.js":416,"./Binary_Property/Logical_Order_Exception.js":417,"./Binary_Property/Lowercase.js":418,"./Binary_Property/Math.js":419,"./Binary_Property/Noncharacter_Code_Point.js":420,"./Binary_Property/Pattern_Syntax.js":421,"./Binary_Property/Pattern_White_Space.js":422,"./Binary_Property/Quotation_Mark.js":423,"./Binary_Property/Radical.js":424,"./Binary_Property/Regional_Indicator.js":425,"./Binary_Property/Sentence_Terminal.js":426,"./Binary_Property/Soft_Dotted.js":427,"./Binary_Property/Terminal_Punctuation.js":428,"./Binary_Property/Unified_Ideograph.js":429,"./Binary_Property/Uppercase.js":430,"./Binary_Property/Variation_Selector.js":431,"./Binary_Property/White_Space.js":432,"./Binary_Property/XID_Continue.js":433,"./Binary_Property/XID_Start.js":434,"./General_Category/Cased_Letter.js":435,"./General_Category/Close_Punctuation.js":436,"./General_Category/Connector_Punctuation.js":437,"./General_Category/Control.js":438,"./General_Category/Currency_Symbol.js":439,"./General_Category/Dash_Punctuation.js":440,"./General_Category/Decimal_Number.js":441,"./General_Category/Enclosing_Mark.js":442,"./General_Category/Final_Punctuation.js":443,"./General_Category/Format.js":444,"./General_Category/Initial_Punctuation.js":445,"./General_Category/Letter.js":446,"./General_Category/Letter_Number.js":447,"./General_Category/Line_Separator.js":448,"./General_Category/Lowercase_Letter.js":449,"./General_Category/Mark.js":450,"./General_Category/Math_Symbol.js":451,"./General_Category/Modifier_Letter.js":452,"./General_Category/Modifier_Symbol.js":453,"./General_Category/Nonspacing_Mark.js":454,"./General_Category/Number.js":455,"./General_Category/Open_Punctuation.js":456,"./General_Category/Other.js":457,"./General_Category/Other_Letter.js":458,"./General_Category/Other_Number.js":459,"./General_Category/Other_Punctuation.js":460,"./General_Category/Other_Symbol.js":461,"./General_Category/Paragraph_Separator.js":462,"./General_Category/Private_Use.js":463,"./General_Category/Punctuation.js":464,"./General_Category/Separator.js":465,"./General_Category/Space_Separator.js":466,"./General_Category/Spacing_Mark.js":467,"./General_Category/Surrogate.js":468,"./General_Category/Symbol.js":469,"./General_Category/Titlecase_Letter.js":470,"./General_Category/Unassigned.js":471,"./General_Category/Uppercase_Letter.js":472,"./Script/Adlam.js":473,"./Script/Ahom.js":474,"./Script/Anatolian_Hieroglyphs.js":475,"./Script/Arabic.js":476,"./Script/Armenian.js":477,"./Script/Avestan.js":478,"./Script/Balinese.js":479,"./Script/Bamum.js":480,"./Script/Bassa_Vah.js":481,"./Script/Batak.js":482,"./Script/Bengali.js":483,"./Script/Bhaiksuki.js":484,"./Script/Bopomofo.js":485,"./Script/Brahmi.js":486,"./Script/Braille.js":487,"./Script/Buginese.js":488,"./Script/Buhid.js":489,"./Script/Canadian_Aboriginal.js":490,"./Script/Carian.js":491,"./Script/Caucasian_Albanian.js":492,"./Script/Chakma.js":493,"./Script/Cham.js":494,"./Script/Cherokee.js":495,"./Script/Chorasmian.js":496,"./Script/Common.js":497,"./Script/Coptic.js":498,"./Script/Cuneiform.js":499,"./Script/Cypriot.js":500,"./Script/Cyrillic.js":501,"./Script/Deseret.js":502,"./Script/Devanagari.js":503,"./Script/Dives_Akuru.js":504,"./Script/Dogra.js":505,"./Script/Duployan.js":506,"./Script/Egyptian_Hieroglyphs.js":507,"./Script/Elbasan.js":508,"./Script/Elymaic.js":509,"./Script/Ethiopic.js":510,"./Script/Georgian.js":511,"./Script/Glagolitic.js":512,"./Script/Gothic.js":513,"./Script/Grantha.js":514,"./Script/Greek.js":515,"./Script/Gujarati.js":516,"./Script/Gunjala_Gondi.js":517,"./Script/Gurmukhi.js":518,"./Script/Han.js":519,"./Script/Hangul.js":520,"./Script/Hanifi_Rohingya.js":521,"./Script/Hanunoo.js":522,"./Script/Hatran.js":523,"./Script/Hebrew.js":524,"./Script/Hiragana.js":525,"./Script/Imperial_Aramaic.js":526,"./Script/Inherited.js":527,"./Script/Inscriptional_Pahlavi.js":528,"./Script/Inscriptional_Parthian.js":529,"./Script/Javanese.js":530,"./Script/Kaithi.js":531,"./Script/Kannada.js":532,"./Script/Katakana.js":533,"./Script/Kayah_Li.js":534,"./Script/Kharoshthi.js":535,"./Script/Khitan_Small_Script.js":536,"./Script/Khmer.js":537,"./Script/Khojki.js":538,"./Script/Khudawadi.js":539,"./Script/Lao.js":540,"./Script/Latin.js":541,"./Script/Lepcha.js":542,"./Script/Limbu.js":543,"./Script/Linear_A.js":544,"./Script/Linear_B.js":545,"./Script/Lisu.js":546,"./Script/Lycian.js":547,"./Script/Lydian.js":548,"./Script/Mahajani.js":549,"./Script/Makasar.js":550,"./Script/Malayalam.js":551,"./Script/Mandaic.js":552,"./Script/Manichaean.js":553,"./Script/Marchen.js":554,"./Script/Masaram_Gondi.js":555,"./Script/Medefaidrin.js":556,"./Script/Meetei_Mayek.js":557,"./Script/Mende_Kikakui.js":558,"./Script/Meroitic_Cursive.js":559,"./Script/Meroitic_Hieroglyphs.js":560,"./Script/Miao.js":561,"./Script/Modi.js":562,"./Script/Mongolian.js":563,"./Script/Mro.js":564,"./Script/Multani.js":565,"./Script/Myanmar.js":566,"./Script/Nabataean.js":567,"./Script/Nandinagari.js":568,"./Script/New_Tai_Lue.js":569,"./Script/Newa.js":570,"./Script/Nko.js":571,"./Script/Nushu.js":572,"./Script/Nyiakeng_Puachue_Hmong.js":573,"./Script/Ogham.js":574,"./Script/Ol_Chiki.js":575,"./Script/Old_Hungarian.js":576,"./Script/Old_Italic.js":577,"./Script/Old_North_Arabian.js":578,"./Script/Old_Permic.js":579,"./Script/Old_Persian.js":580,"./Script/Old_Sogdian.js":581,"./Script/Old_South_Arabian.js":582,"./Script/Old_Turkic.js":583,"./Script/Oriya.js":584,"./Script/Osage.js":585,"./Script/Osmanya.js":586,"./Script/Pahawh_Hmong.js":587,"./Script/Palmyrene.js":588,"./Script/Pau_Cin_Hau.js":589,"./Script/Phags_Pa.js":590,"./Script/Phoenician.js":591,"./Script/Psalter_Pahlavi.js":592,"./Script/Rejang.js":593,"./Script/Runic.js":594,"./Script/Samaritan.js":595,"./Script/Saurashtra.js":596,"./Script/Sharada.js":597,"./Script/Shavian.js":598,"./Script/Siddham.js":599,"./Script/SignWriting.js":600,"./Script/Sinhala.js":601,"./Script/Sogdian.js":602,"./Script/Sora_Sompeng.js":603,"./Script/Soyombo.js":604,"./Script/Sundanese.js":605,"./Script/Syloti_Nagri.js":606,"./Script/Syriac.js":607,"./Script/Tagalog.js":608,"./Script/Tagbanwa.js":609,"./Script/Tai_Le.js":610,"./Script/Tai_Tham.js":611,"./Script/Tai_Viet.js":612,"./Script/Takri.js":613,"./Script/Tamil.js":614,"./Script/Tangut.js":615,"./Script/Telugu.js":616,"./Script/Thaana.js":617,"./Script/Thai.js":618,"./Script/Tibetan.js":619,"./Script/Tifinagh.js":620,"./Script/Tirhuta.js":621,"./Script/Ugaritic.js":622,"./Script/Vai.js":623,"./Script/Wancho.js":624,"./Script/Warang_Citi.js":625,"./Script/Yezidi.js":626,"./Script/Yi.js":627,"./Script/Zanabazar_Square.js":628,"./Script_Extensions/Adlam.js":629,"./Script_Extensions/Ahom.js":630,"./Script_Extensions/Anatolian_Hieroglyphs.js":631,"./Script_Extensions/Arabic.js":632,"./Script_Extensions/Armenian.js":633,"./Script_Extensions/Avestan.js":634,"./Script_Extensions/Balinese.js":635,"./Script_Extensions/Bamum.js":636,"./Script_Extensions/Bassa_Vah.js":637,"./Script_Extensions/Batak.js":638,"./Script_Extensions/Bengali.js":639,"./Script_Extensions/Bhaiksuki.js":640,"./Script_Extensions/Bopomofo.js":641,"./Script_Extensions/Brahmi.js":642,"./Script_Extensions/Braille.js":643,"./Script_Extensions/Buginese.js":644,"./Script_Extensions/Buhid.js":645,"./Script_Extensions/Canadian_Aboriginal.js":646,"./Script_Extensions/Carian.js":647,"./Script_Extensions/Caucasian_Albanian.js":648,"./Script_Extensions/Chakma.js":649,"./Script_Extensions/Cham.js":650,"./Script_Extensions/Cherokee.js":651,"./Script_Extensions/Chorasmian.js":652,"./Script_Extensions/Common.js":653,"./Script_Extensions/Coptic.js":654,"./Script_Extensions/Cuneiform.js":655,"./Script_Extensions/Cypriot.js":656,"./Script_Extensions/Cyrillic.js":657,"./Script_Extensions/Deseret.js":658,"./Script_Extensions/Devanagari.js":659,"./Script_Extensions/Dives_Akuru.js":660,"./Script_Extensions/Dogra.js":661,"./Script_Extensions/Duployan.js":662,"./Script_Extensions/Egyptian_Hieroglyphs.js":663,"./Script_Extensions/Elbasan.js":664,"./Script_Extensions/Elymaic.js":665,"./Script_Extensions/Ethiopic.js":666,"./Script_Extensions/Georgian.js":667,"./Script_Extensions/Glagolitic.js":668,"./Script_Extensions/Gothic.js":669,"./Script_Extensions/Grantha.js":670,"./Script_Extensions/Greek.js":671,"./Script_Extensions/Gujarati.js":672,"./Script_Extensions/Gunjala_Gondi.js":673,"./Script_Extensions/Gurmukhi.js":674,"./Script_Extensions/Han.js":675,"./Script_Extensions/Hangul.js":676,"./Script_Extensions/Hanifi_Rohingya.js":677,"./Script_Extensions/Hanunoo.js":678,"./Script_Extensions/Hatran.js":679,"./Script_Extensions/Hebrew.js":680,"./Script_Extensions/Hiragana.js":681,"./Script_Extensions/Imperial_Aramaic.js":682,"./Script_Extensions/Inherited.js":683,"./Script_Extensions/Inscriptional_Pahlavi.js":684,"./Script_Extensions/Inscriptional_Parthian.js":685,"./Script_Extensions/Javanese.js":686,"./Script_Extensions/Kaithi.js":687,"./Script_Extensions/Kannada.js":688,"./Script_Extensions/Katakana.js":689,"./Script_Extensions/Kayah_Li.js":690,"./Script_Extensions/Kharoshthi.js":691,"./Script_Extensions/Khitan_Small_Script.js":692,"./Script_Extensions/Khmer.js":693,"./Script_Extensions/Khojki.js":694,"./Script_Extensions/Khudawadi.js":695,"./Script_Extensions/Lao.js":696,"./Script_Extensions/Latin.js":697,"./Script_Extensions/Lepcha.js":698,"./Script_Extensions/Limbu.js":699,"./Script_Extensions/Linear_A.js":700,"./Script_Extensions/Linear_B.js":701,"./Script_Extensions/Lisu.js":702,"./Script_Extensions/Lycian.js":703,"./Script_Extensions/Lydian.js":704,"./Script_Extensions/Mahajani.js":705,"./Script_Extensions/Makasar.js":706,"./Script_Extensions/Malayalam.js":707,"./Script_Extensions/Mandaic.js":708,"./Script_Extensions/Manichaean.js":709,"./Script_Extensions/Marchen.js":710,"./Script_Extensions/Masaram_Gondi.js":711,"./Script_Extensions/Medefaidrin.js":712,"./Script_Extensions/Meetei_Mayek.js":713,"./Script_Extensions/Mende_Kikakui.js":714,"./Script_Extensions/Meroitic_Cursive.js":715,"./Script_Extensions/Meroitic_Hieroglyphs.js":716,"./Script_Extensions/Miao.js":717,"./Script_Extensions/Modi.js":718,"./Script_Extensions/Mongolian.js":719,"./Script_Extensions/Mro.js":720,"./Script_Extensions/Multani.js":721,"./Script_Extensions/Myanmar.js":722,"./Script_Extensions/Nabataean.js":723,"./Script_Extensions/Nandinagari.js":724,"./Script_Extensions/New_Tai_Lue.js":725,"./Script_Extensions/Newa.js":726,"./Script_Extensions/Nko.js":727,"./Script_Extensions/Nushu.js":728,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":729,"./Script_Extensions/Ogham.js":730,"./Script_Extensions/Ol_Chiki.js":731,"./Script_Extensions/Old_Hungarian.js":732,"./Script_Extensions/Old_Italic.js":733,"./Script_Extensions/Old_North_Arabian.js":734,"./Script_Extensions/Old_Permic.js":735,"./Script_Extensions/Old_Persian.js":736,"./Script_Extensions/Old_Sogdian.js":737,"./Script_Extensions/Old_South_Arabian.js":738,"./Script_Extensions/Old_Turkic.js":739,"./Script_Extensions/Oriya.js":740,"./Script_Extensions/Osage.js":741,"./Script_Extensions/Osmanya.js":742,"./Script_Extensions/Pahawh_Hmong.js":743,"./Script_Extensions/Palmyrene.js":744,"./Script_Extensions/Pau_Cin_Hau.js":745,"./Script_Extensions/Phags_Pa.js":746,"./Script_Extensions/Phoenician.js":747,"./Script_Extensions/Psalter_Pahlavi.js":748,"./Script_Extensions/Rejang.js":749,"./Script_Extensions/Runic.js":750,"./Script_Extensions/Samaritan.js":751,"./Script_Extensions/Saurashtra.js":752,"./Script_Extensions/Sharada.js":753,"./Script_Extensions/Shavian.js":754,"./Script_Extensions/Siddham.js":755,"./Script_Extensions/SignWriting.js":756,"./Script_Extensions/Sinhala.js":757,"./Script_Extensions/Sogdian.js":758,"./Script_Extensions/Sora_Sompeng.js":759,"./Script_Extensions/Soyombo.js":760,"./Script_Extensions/Sundanese.js":761,"./Script_Extensions/Syloti_Nagri.js":762,"./Script_Extensions/Syriac.js":763,"./Script_Extensions/Tagalog.js":764,"./Script_Extensions/Tagbanwa.js":765,"./Script_Extensions/Tai_Le.js":766,"./Script_Extensions/Tai_Tham.js":767,"./Script_Extensions/Tai_Viet.js":768,"./Script_Extensions/Takri.js":769,"./Script_Extensions/Tamil.js":770,"./Script_Extensions/Tangut.js":771,"./Script_Extensions/Telugu.js":772,"./Script_Extensions/Thaana.js":773,"./Script_Extensions/Thai.js":774,"./Script_Extensions/Tibetan.js":775,"./Script_Extensions/Tifinagh.js":776,"./Script_Extensions/Tirhuta.js":777,"./Script_Extensions/Ugaritic.js":778,"./Script_Extensions/Vai.js":779,"./Script_Extensions/Wancho.js":780,"./Script_Extensions/Warang_Citi.js":781,"./Script_Extensions/Yezidi.js":782,"./Script_Extensions/Yi.js":783,"./Script_Extensions/Zanabazar_Square.js":784,"./index.js":785,"./unicode-version.js":786};function webpackContext(t){var e=webpackContextResolve(t);return r(e)}function webpackContextResolve(t){if(!r.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}webpackContext.keys=function webpackContextKeys(){return Object.keys(i)},webpackContext.resolve=webpackContextResolve,t.exports=webpackContext,webpackContext.id=381},51:function(t,e,r){"use strict";r.r(e),r.d(e,"Bookmarked",(function(){return a}));var i=r(132),s=r(95),n=r(4),a=function Bookmarked(t){var e=t.state,r=Object(s.a)(t,["state"]),a=Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 24 24",fill:"currentColor",children:Object(n.jsx)("path",{d:"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"})}),o=Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})});return Object(n.jsx)("button",Object(i.a)(Object(i.a)({},r),{},{children:e?a:o}))}},52:function(t,e,r){"use strict";r.r(e),r.d(e,"Button",(function(){return a}));var i=r(197),s=r.n(i),n=r(4),a=function Button(t){return Object(n.jsx)("button",{type:t.type,onClick:t.onClick,className:s()("\n                w-1/5\n                inline-flex\n                justify-center\n                items-center\n                py-2\n                px-4\n                border border-transparent\n                shadow-sm\n                text-sm\n                font-medium\n                rounded-lg\n                text-white\n                bg-pink-600\n                hover:bg-pink-700\n                focus:outline-none\n                focus:ring-2\n                focus:ring-offset-2\n                focus:ring-pink-500\n              ",t.className),children:t.children})}},798:function(t,e,r){t.exports={doclets:{},displayName:"Bookmarked",description:"",methods:[],props:[],examples:r(799)}},799:function(t,e,r){var i={react:r(2),"./bookmark.jsx":r(51)},s=r(60).default.bind(null,i),n=r(61).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Bookmarked$0 = require('./bookmark.jsx');\nconst Bookmarked = Bookmarked$0.default || (Bookmarked$0['Bookmarked'] || Bookmarked$0);",s);t.exports=[{type:"code",content:"\r\n<Bookmarked \r\n    state={true}/>\r\n<Bookmarked\r\n    state={false}/>\r\n\r\n",settings:{},evalInContext:n}]},800:function(t,e,r){t.exports={doclets:{},displayName:"Button",description:"",methods:[],props:[],examples:r(801)}},801:function(t,e,r){var i={react:r(2),"./button.jsx":r(52)},s=r(60).default.bind(null,i),n=r(61).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Button$0 = require('./button.jsx');\nconst Button = Button$0.default || (Button$0['Button'] || Button$0);",s);t.exports=[{type:"code",content:"<Button>\r\n    press here\r\n</Button>\r\n",settings:{},evalInContext:n}]},802:function(t,e,r){t.exports={doclets:{},displayName:"CharacterBox",description:"",methods:[],props:[],examples:r(803)}},803:function(t,e,r){var i={react:r(2),"./characterBox.jsx":r(181)},s=r(60).default.bind(null,i),n=r(61).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst CharacterBox$0 = require('./characterBox.jsx');\nconst CharacterBox = CharacterBox$0.default || (CharacterBox$0['CharacterBox'] || CharacterBox$0);",s);t.exports=[{type:"code",content:"\r\n<div className='grid grid-cols-2 gap-4'>\r\n    \r\n    <CharacterBox \r\n        image=\"http://hp-api.herokuapp.com/images/harry.jpg\"\r\n        name='Harry Potter'\r\n        actor='Danial Radcliffe'\r\n        bookmarked = {true}/>\r\n\r\n    <CharacterBox \r\n        image=\"http://hp-api.herokuapp.com/images/hermione.jpeg\"\r\n        name='Hermoine Granger'\r\n        actor='Emma Watson'\r\n        bookmarked = {false}/>\r\n</div>",settings:{},evalInContext:n}]},804:function(t,e,r){t.exports={doclets:{},displayName:"Detail",description:"",methods:[],props:[],examples:r(805)}},805:function(t,e,r){var i={react:r(2),"./Detail.jsx":r(182)},s=r(60).default.bind(null,i),n=r(61).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Detail$0 = require('./Detail.jsx');\nconst Detail = Detail$0.default || (Detail$0['Detail'] || Detail$0);",s);t.exports=[{type:"code",content:'const Demo = () => {\r\n\r\n    const toShow = {\r\n        "name": "Arthur Weasley",\r\n        "species": "human",\r\n        "gender": "male",\r\n        "house": "Gryffindor",\r\n        "dateOfBirth": "06-02-1950",\r\n        "yearOfBirth": 1950,\r\n        "ancestry": "pure-blood",\r\n    }\r\n    return(\r\n        <Detail \r\n            imageUrl="http://hp-api.herokuapp.com/images/arthur.jpg"\r\n            toShow={toShow}/>\r\n    )\r\n}\r\n\r\n<Demo/>\r\n\r\n\r\n',settings:{},evalInContext:n}]},806:function(t,e,r){"use strict";r.r(e),r.d(e,"Modal",(function(){return s}));var i=r(4),s=function Modal(t){var e=t.children;return Object(i.jsx)("div",{className:"fixed w-full h-full bg-white overflow-scroll p-10",children:e})}},807:function(t,e,r){t.exports={doclets:{},displayName:"Modal",description:"",methods:[],props:[],examples:null}},808:function(t,e,r){t.exports={doclets:{},displayName:"TextField",description:"",methods:[],props:[{type:{name:"string"},required:!0,description:"",tags:{},name:"label"},{type:{name:"string"},required:!0,description:"",tags:{},name:"title"}],examples:r(809)}},809:function(t,e,r){var i={react:r(2),"./TextField.jsx":r(91)},s=r(60).default.bind(null,i),n=r(61).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TextField$0 = require('./TextField.jsx');\nconst TextField = TextField$0.default || (TextField$0['TextField'] || TextField$0);",s);t.exports=[{type:"code",content:"<TextField \r\n    label='this is label'\r\n    title='this is title'/>\r\n<TextField \r\n    label='this is another labelasdasd asdasda dasd ad a'\r\n    title='this is another title'/>\r\n\r\n",settings:{},evalInContext:n}]},91:function(t,e,r){"use strict";r.r(e),r.d(e,"TextField",(function(){return s}));r(2);var i=r(4),s=function TextField(t){var e=t.label,r=t.title;return Object(i.jsxs)("div",{className:"flex flex-nowrap items-center w-full",children:[Object(i.jsxs)("div",{className:"w-1/3 ",children:[e," :"]}),Object(i.jsx)("div",{className:"w-2/3 left-0 ml-3",children:r})]})}}},[[200,1,2]]]);