(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),s=(n(0),n(151)),a={id:"framework_config_props",title:"Framework configuration properties",sidebar_label:"System properties",slug:"framework-config-props.html"},i={unversionedId:"framework/framework_config_props",id:"framework/framework_config_props",isDocsHomePage:!1,title:"Framework configuration properties",description:"---",source:"@site/docs/framework/config_props.md",slug:"/framework/framework-config-props.html",permalink:"/docs/framework/framework-config-props.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/config_props.md",version:"current",sidebar_label:"System properties",sidebar:"framework",previous:{title:"Project Level Config",permalink:"/docs/framework/project-config.html"},next:{title:"Test Extensions",permalink:"/docs/framework/test-extensions.html"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("hr",null),Object(s.b)("h4",{id:"kotestenginepropertieskt"},"KotestEngineProperties.kt"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'package io.kotest.core.internal\n\n@Deprecated("Renamed to KotestEngineProperties. Will be replaced in 4.7")\nval KotestEngineSystemProperties = KotestEngineProperties\n\nobject KotestEngineProperties {\n\n   const val springIgnoreWarning = "kotest.listener.spring.ignore.warning"\n\n   const val gradle5 = "kotest.gradle5.compatibility"\n\n   const val scriptsEnabled = "kotest.framework.scripts.enabled"\n\n   /**\n    * Sets the tag expression that determines included/excluded tags.\n    */\n   const val tagExpression = "kotest.tags"\n\n   const val excludeTags = "kotest.tags.exclude"\n\n   const val includeTags = "kotest.tags.include"\n\n   const val propertiesFilename = "kotest.properties.filename"\n\n   /**\n    * If set to true, then source ref\'s will not be created for test cases.\n    * This may reduce functionality (for example if using the intellij plugin).\n    */\n   const val disableSourceRef = "kotest.framework.sourceref.disable"\n\n   /**\n    * If set to true, disables the use of \'!\' as a prefix to disable tests.\n    */\n   const val disableBangPrefix = "kotest.bang.disable"\n\n   /**\n    * The default [IsolationMode] for specs.\n    */\n   const val isolationMode = "kotest.framework.isolation.mode"\n\n   /**\n    * The default [AssertionMode] for specs.\n    */\n   const val assertionMode = "kotest.framework.assertion.mode"\n\n   /**\n    * The default parallelism for specs.\n    */\n   const val parallelism = "kotest.framework.parallelism"\n\n   const val timeout = "kotest.framework.timeout"\n\n   const val invocationTimeout = "kotest.framework.invocation.timeout"\n\n   const val concurrentSpecs = "kotest.framework.spec.concurrent"\n\n   const val concurrentTests = "kotest.framework.test.concurrent"\n\n   /**\n    * Disable scanning the classpath for configuration classes by setting this property to true\n    */\n   const val disableConfigurationClassPathScanning = "kotest.framework.classpath.scanning.config.disable"\n\n   /**\n    * Disable scanning the classpath for listeners with @AutoScan by setting this property to true\n    */\n   const val disableAutoScanClassPathScanning = "kotest.framework.classpath.scanning.autoscan.disable"\n\n   const val allowMultilineTestName = "kotest.framework.testname.multiline"\n\n   /**\n    *  If set -> filter testCases by this severity level and higher, else running all\n    */\n   const val severityPrefix = "kotest.framework.test.severity"\n\n   /**\n    * Enable assert softly globally.\n    * */\n   const val globalAssertSoftly = "kotest.framework.assertion.globalassertsoftly"\n\n   /**\n    * Appends all tags associated with a test case to its display name.\n    * */\n   const val testNameAppendTags = "kotest.framework.testname.append.tags"\n}\n')))}p.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,d=f["".concat(a,".").concat(m)]||f[m]||u[m]||s;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);