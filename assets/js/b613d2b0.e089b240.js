(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2339],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return u},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),d=o,f=g["".concat(c,".").concat(d)]||g[d]||s[d]||l;return n?t.createElement(f,a(a({ref:r},u),{},{components:n})):t.createElement(f,a({ref:r},u))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=g;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5154:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return g}});var t=n(2122),o=n(9756),l=(n(7294),n(3905)),a=["components"],i={id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},c=void 0,p={unversionedId:"plugins/colorlog",id:"version-0.11/plugins/colorlog",isDocsHomePage:!1,title:"Colorlog plugin",description:"Adds colorlog colored logs for hydra/joblogging and hydra/hydralogging.",source:"@site/versioned_docs/version-0.11/plugins/colorlog.md",sourceDirName:"plugins",slug:"/plugins/colorlog",permalink:"/docs/0.11/plugins/colorlog",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/plugins/colorlog.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1631625704,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},sidebar:"version-0.11/docs",previous:{title:"Customizing Application's help",permalink:"/docs/0.11/configure_hydra/app_help"},next:{title:"Application packaging",permalink:"/docs/0.11/advanced/app_packaging"}},u=[],s={toc:u};function g(e){var r=e.components,i=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,t.Z)({},s,i,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Adds ",(0,l.kt)("a",{class:"external",href:"https://github.com/borntyping/python-colorlog",target:"_blank"},"colorlog")," colored logs for ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/hydra_logging"),"."),(0,l.kt)("p",null,"Install with "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install hydra_colorlog\n")),(0,l.kt)("p",null,"Once installed, override ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/hydra_logging")," your config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging: colorlog\n  - hydra/hydra_logging: colorlog\n")),(0,l.kt)("p",null,"See included ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/plugins/hydra_colorlog/example"},"example"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Colored log output",src:n(98).Z})))}g.isMDXComponent=!0},98:function(e,r,n){"use strict";r.Z=n.p+"assets/images/colorlog-b20147697b9d16362f62a5d0bb58347f.png"}}]);