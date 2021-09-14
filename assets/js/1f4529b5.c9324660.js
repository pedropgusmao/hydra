(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7951],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(d,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9823:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={id:"adding_a_package_directive",title:"Adding an @package directive",hide_title:!0},d=void 0,c={unversionedId:"upgrades/0.11_to_1.0/adding_a_package_directive",id:"version-1.1/upgrades/0.11_to_1.0/adding_a_package_directive",isDocsHomePage:!1,title:"Adding an @package directive",description:"Adding an @package directive",source:"@site/versioned_docs/version-1.1/upgrades/0.11_to_1.0/adding_a_package_directive.md",sourceDirName:"upgrades/0.11_to_1.0",slug:"/upgrades/0.11_to_1.0/adding_a_package_directive",permalink:"/docs/upgrades/0.11_to_1.0/adding_a_package_directive",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/upgrades/0.11_to_1.0/adding_a_package_directive.md",version:"1.1",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1631625704,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"adding_a_package_directive",title:"Adding an @package directive",hide_title:!0},sidebar:"version-1.1/docs",previous:{title:"Config path changes",permalink:"/docs/upgrades/0.11_to_1.0/config_path_changes"},next:{title:"strict flag mode deprecation",permalink:"/docs/upgrades/0.11_to_1.0/strict_mode_flag_deprecated"}},p=[{value:"Adding an @package directive",id:"adding-an-package-directive",children:[]},{value:"Upgrade instructions:",id:"upgrade-instructions",children:[{value:"Recommended (~10 seconds per config file):",id:"recommended-10-seconds-per-config-file",children:[]},{value:"Alternative (not recommended):",id:"alternative-not-recommended",children:[]},{value:"Example for <code>case 1</code>:",id:"example-for-case-1",children:[]},{value:"Example for <code>case 2</code>:",id:"example-for-case-2",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"adding-an-package-directive"},"Adding an @package directive"),(0,i.kt)("p",null,"Hydra 1.0 introduces the concept of a config ",(0,i.kt)("inlineCode",{parentName:"p"},"package"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"package")," is the common parent\npath of all nodes in the config file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In Hydra 0.11, there was an implicit default of ",(0,i.kt)("inlineCode",{parentName:"li"},"_global_"),' ("")'),(0,i.kt)("li",{parentName:"ul"},"In Hydra 1.1 the default will be ",(0,i.kt)("inlineCode",{parentName:"li"},"_group_")," (the name of the config group)."),(0,i.kt)("li",{parentName:"ul"},"Hydra 1.0 maintains the implicit default of ",(0,i.kt)("inlineCode",{parentName:"li"},"_global_")," and issues a warning for\nany config group file without a ",(0,i.kt)("inlineCode",{parentName:"li"},"@package")," directive.")),(0,i.kt)("p",null,"By adding an explicit ",(0,i.kt)("inlineCode",{parentName:"p"},"@package")," to these configs now, you guarantee that your configs\nwill not break when you upgrade to Hydra 1.1."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@package")," directive is described in details ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/overriding_packages"},"here"),".  "),(0,i.kt)("h2",{id:"upgrade-instructions"},"Upgrade instructions:"),(0,i.kt)("h3",{id:"recommended-10-seconds-per-config-file"},"Recommended (~10 seconds per config file):"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Case 1"),": For config files where the common parent path matches the config group name:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"# @package _group_")," to the top of every config group file"),(0,i.kt)("li",{parentName:"ul"},"Remove the common parent path config file like in the example below.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Case 2"),": For files without a common parent path:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"# @package _global_"),".")),(0,i.kt)("h3",{id:"alternative-not-recommended"},"Alternative (not recommended):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you do not want to restructure the config at this time use ",(0,i.kt)("inlineCode",{parentName:"li"},"Case 2")," for all your config files.")),(0,i.kt)("h3",{id:"example-for-case-1"},"Example for ",(0,i.kt)("inlineCode",{parentName:"h3"},"case 1"),":"),(0,i.kt)("h4",{id:"before"},"Before"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"db:\n  driver: mysql\n  host: localhost\n  port: 3306\n")),(0,i.kt)("h4",{id:"after"},"After"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"# @package _group_\ndriver: mysql\nhost: localhost\nport: 3306\n")),(0,i.kt)("p",null,"The interpretations of the before and after files are identical."),(0,i.kt)("h3",{id:"example-for-case-2"},"Example for ",(0,i.kt)("inlineCode",{parentName:"h3"},"case 2"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="env/prod.yaml"',title:'"env/prod.yaml"'},"# @package _global_\ndb:\n  driver: mysql\n  host: 10.0.0.11\n  port: 3306\n\nwebserver:\n  host: 10.0.0.11\n  port: 443\n")))}u.isMDXComponent=!0}}]);