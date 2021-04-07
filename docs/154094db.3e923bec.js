(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,i(i({ref:t},c),{},{components:n})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(151)),s={title:"Json Matchers",slug:"json-matchers.html",sidebar_label:"Json"},i={unversionedId:"assertions/json",id:"assertions/json",isDocsHomePage:!1,title:"Json Matchers",description:"Kotest provides powerful JSON assertions in the kotest-assertions-json module.",source:"@site/docs/assertions/json.md",slug:"/assertions/json-matchers.html",permalink:"/docs/assertions/json-matchers.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/json.md",version:"current",sidebar_label:"Json",sidebar:"assertions",previous:{title:"Core Matchers",permalink:"/docs/assertions/core-matchers.html"},next:{title:"Ktor Matchers",permalink:"/docs/assertions/ktor-matchers.html"}},l=[{value:"shouldEqualJson",id:"shouldequaljson",children:[{value:"CompareMode",id:"comparemode",children:[]},{value:"CompareOrder",id:"compareorder",children:[]}]},{value:"shouldContainJsonKey",id:"shouldcontainjsonkey",children:[]},{value:"shouldContainJsonKeyValue",id:"shouldcontainjsonkeyvalue",children:[]},{value:"shouldMatchJsonResource",id:"shouldmatchjsonresource",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Kotest provides powerful JSON assertions in the ",Object(r.b)("inlineCode",{parentName:"p"},"kotest-assertions-json")," module.\nThese allow flexible testing of json strings without the need to worry about formatting or ordering.\nThey provide precise error messages when comparing json so that the error can be easily found in a large json structure."),Object(r.b)("p",null,"This module is available for JVM and JS targets."),Object(r.b)("h2",{id:"shouldequaljson"},"shouldEqualJson"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"json.shouldEqualJson(other)")," asserts that the left-hand side represents the same\nJSON structure as the right-hand side."),Object(r.b)("p",null,"The matcher allows for different formatting, and for different order of keys."),Object(r.b)("p",null,"For example, the following two JSON strings would be considered equal:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n   "name": "sam",\n   "location": "chicago",\n   "age" : 41\n}\n')),Object(r.b)("p",null,"and"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{ "age" : 41, "name": "sam", "location": "chicago" }\n')),Object(r.b)("p",null,"The inverse of this matcher is ",Object(r.b)("inlineCode",{parentName:"p"},"shouldNotEqualJson")," which will error if two JSON strings\n",Object(r.b)("em",{parentName:"p"},"are")," considered equal."),Object(r.b)("h3",{id:"comparemode"},"CompareMode"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"shouldEqualJson")," supports a parameter called ",Object(r.b)("inlineCode",{parentName:"p"},"CompareMode")," which can be used to guide comparison of types that contain\ncompatible values."),Object(r.b)("p",null,"By setting this to ",Object(r.b)("inlineCode",{parentName:"p"},"CompareMode.Lenient"),", types that can be coerced to match are considered equal. For example,\nthe string value ",Object(r.b)("inlineCode",{parentName:"p"},'"true"')," and the boolean value ",Object(r.b)("inlineCode",{parentName:"p"},"true")," will be considered equal if compare mode is lenient."),Object(r.b)("p",null,"Similarly, the string value ",Object(r.b)("inlineCode",{parentName:"p"},'"123"')," and the number value ",Object(r.b)("inlineCode",{parentName:"p"},"123")," will match in lenient mode."),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'val a = """ { "a": "true", "b": "123" } """\nval b = """ { "a": true, "b": 123 } """\n\n// this would pass\na.shouldEqualJson(b, CompareOrder.Lenient)\n\n// this would fail\na.shouldEqualJson(b)\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Longs and doubles will always attempt to match regardless of this setting."))),Object(r.b)("p",null,"The default is ",Object(r.b)("inlineCode",{parentName:"p"},"CompareMode.Strict")," which will consider any values unequal if they have different types."),Object(r.b)("h3",{id:"compareorder"},"CompareOrder"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"shouldEqualJson")," additionally supports a parameter called ",Object(r.b)("inlineCode",{parentName:"p"},"CompareOrder")," which can be used to force object comparision\nto consider field order. By default, the order of fields in an object does not matter, and so"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{ "a": "foo", "b": "bar" }\n')),Object(r.b)("p",null,"and"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{ "b": "bar", "a": "foo" }\n')),Object(r.b)("p",null,"would be considered equal. Setting this parameter to ",Object(r.b)("inlineCode",{parentName:"p"},"CompareOrder.Strict")," means that the above example would fail. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'val a = """ { "a": "foo", "b": "bar" } """\nval b = """ { "b": "bar", "a": "foo" } """\n\n// this would fail\na.shouldEqualJson(b, CompareOrder.Strict)\n\n// this would pass\na.shouldEqualJson(b)\n')),Object(r.b)("p",null,"Targets: ",Object(r.b)("strong",{parentName:"p"},"JVM"),", ",Object(r.b)("strong",{parentName:"p"},"JS")),Object(r.b)("h2",{id:"shouldcontainjsonkey"},"shouldContainJsonKey"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'json?.shouldContainJsonKey("$.json.path")')," asserts that a JSON string contains the given JSON path."),Object(r.b)("p",null,"The inverse of this matcher is ",Object(r.b)("inlineCode",{parentName:"p"},"shouldNotContainJsonKey")," which will error if a JSON string ",Object(r.b)("em",{parentName:"p"},"does")," contain the given JSON path."),Object(r.b)("p",null,"Targets: ",Object(r.b)("strong",{parentName:"p"},"JVM")),Object(r.b)("h2",{id:"shouldcontainjsonkeyvalue"},"shouldContainJsonKeyValue"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'str?.shouldContainJsonKeyValue("$.json.path", value)')," asserts that a JSON string contains a JSON path with a specific ",Object(r.b)("inlineCode",{parentName:"p"},"value"),"."),Object(r.b)("p",null,"The inverse of this matcher is ",Object(r.b)("inlineCode",{parentName:"p"},"shouldNotContainJsonKeyValue")," which will error if a JSON string ",Object(r.b)("em",{parentName:"p"},"does")," contain the given value at the given JSON path."),Object(r.b)("p",null,"Targets: ",Object(r.b)("strong",{parentName:"p"},"JVM")),Object(r.b)("h2",{id:"shouldmatchjsonresource"},"shouldMatchJsonResource"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'json?.shouldContainJsonKey("$.json.path")')," asserts that the JSON is equal to the existing ",Object(r.b)("inlineCode",{parentName:"p"},"/file.json")," ignoring properties' order and formatting."),Object(r.b)("p",null,"Targets: ",Object(r.b)("strong",{parentName:"p"},"JVM")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"JSON matchers on the JVM are built using the Jackson library."))))}b.isMDXComponent=!0}}]);