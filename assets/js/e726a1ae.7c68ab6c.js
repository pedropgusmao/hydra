(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return g}));var r,o=n(3),i=n(8),a=(n(0),n(270)),c=n(277),s={id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},u={unversionedId:"plugins/colorlog",id:"plugins/colorlog",isDocsHomePage:!1,title:"Colorlog plugin",description:"PyPI",source:"@site/docs/plugins/colorlog.md",slug:"/plugins/colorlog",permalink:"/docs/next/plugins/colorlog",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/colorlog.md",version:"current",lastUpdatedBy:"Eli Simhayev",lastUpdatedAt:1623345536,formattedLastUpdatedAt:"6/10/2021",sidebar_label:"Colorlog plugin",sidebar:"docs",previous:{title:"Customizing Application's help",permalink:"/docs/next/configure_hydra/app_help"},next:{title:"Joblib Launcher plugin",permalink:"/docs/next/plugins/joblib_launcher"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],p=(r="GithubLink",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),d={toc:l};function g(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://pypi.org/project/hydra-colorlog/"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-colorlog",alt:"PyPI"})),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-colorlog",alt:"PyPI - License"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-colorlog",alt:"PyPI - Python Version"}),"\n",Object(a.b)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-colorlog"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-colorlog.svg",alt:"PyPI - Downloads"})),Object(a.b)(c.a,{text:"Example application",to:"plugins/hydra_colorlog/example",mdxType:"ExampleGithubLink"}),Object(a.b)(c.a,{text:"Plugin source",to:"plugins/hydra_colorlog",mdxType:"ExampleGithubLink"})),Object(a.b)("p",null,"Adds ",Object(a.b)("a",{class:"external",href:"https://github.com/borntyping/python-colorlog",target:"_blank"},"colorlog")," colored logs for ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/hydra_logging"),"."),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra_colorlog --upgrade\n")),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("p",null,"Override ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/hydra_logging")," in your config:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/job_logging: colorlog\n  - override hydra/hydra_logging: colorlog\n")),Object(a.b)("p",null,"There are several standard approaches for configuring plugins. Check ",Object(a.b)("a",{parentName:"p",href:"/docs/next/patterns/configuring_plugins"},"this page")," for more information."),Object(a.b)("p",null,"See included ",Object(a.b)(p,{to:"plugins/hydra_colorlog/example",mdxType:"GithubLink"},"example application"),"."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Colored log output",src:n(288).default})))}g.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,f=p["".concat(a,".").concat(g)]||p[g]||d[g]||i;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},272:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(11),a=n(271),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(273),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,g=e.to,f=e.href,b=e.activeClassName,v=e.isActive,m=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,D=Object(r.useContext)(s),P=g||f,x=Object(a.a)(P),w=null==P?void 0:P.replace("pathname://",""),A=void 0!==w?(n=w,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,C=Object(r.useRef)(!1),V=d?i.e:i.c,E=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&x&&window.docusaurus.prefetch(A),function(){E&&p&&p.disconnect()}}),[A,E,x]);var k=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,L=!A||!x||k;return A&&x&&!k&&!m&&D.collectLink(A),L?o.a.createElement("a",Object.assign({href:A},P&&!x&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(V,Object.assign({},O,{onMouseEnter:function(){C.current||(window.docusaurus.preload(A),C.current=!0)},innerRef:function(e){var t,n;E&&e&&x&&(t=e,n=function(){window.docusaurus.prefetch(A)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:A||""},d&&{isActive:v,activeClassName:b}))}},273:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(10),o=n(271);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},274:function(e,t,n){try{e.exports=n(275)}catch(o){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),o=n(38),i=n(276);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=r.useLocation().pathname;return i.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getDocVersionSuggestions(n,o)}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,i,a=t.getActiveVersion(e,n),c=null==a?void 0:a.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:c,alternateDocVersions:c?(o=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},277:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),o=n(0),i=n.n(o),a=n(272),c=n(10),s=n(274);function u(e){return i.a.createElement(a.a,Object(r.a)({},e,{to:(t=e.to,o=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==o?void 0:o.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,o}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(u,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},288:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/colorlog-b20147697b9d16362f62a5d0bb58347f.png"}}]);