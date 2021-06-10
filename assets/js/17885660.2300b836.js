(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{270:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),m=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=m(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),b=m(n),p=a,u=b["".concat(l,".").concat(p)]||b[p]||d[p]||i;return n?o.a.createElement(u,c(c({ref:t},s),{},{components:n})):o.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(8),i=(n(0),n(270)),l={id:"automatic_schema_matching",title:"Automatic schema-matching",hide_title:!0},c={unversionedId:"upgrades/1.0_to_1.1/automatic_schema_matching",id:"upgrades/1.0_to_1.1/automatic_schema_matching",isDocsHomePage:!1,title:"Automatic schema-matching",description:"In Hydra 1.0, when a config file is loaded, if a config with a matching name and group is present in the ConfigStore,",source:"@site/docs/upgrades/1.0_to_1.1/automatic_schema_matching.md",slug:"/upgrades/1.0_to_1.1/automatic_schema_matching",permalink:"/docs/next/upgrades/1.0_to_1.1/automatic_schema_matching",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/1.0_to_1.1/automatic_schema_matching.md",version:"current",lastUpdatedBy:"Eli Simhayev",lastUpdatedAt:1623345536,formattedLastUpdatedAt:"6/10/2021",sidebar:"docs",previous:{title:"Changes to Package Header",permalink:"/docs/next/upgrades/1.0_to_1.1/changes_to_package_header"},next:{title:"Config path changes",permalink:"/docs/next/upgrades/0.11_to_1.0/config_path_changes"}},r=[{value:"Migration",id:"migration",children:[{value:"Option 1: rename the Structured Config",id:"option-1-rename-the-structured-config",children:[]},{value:"Option 2: rename the config file",id:"option-2-rename-the-config-file",children:[]}]}],s={toc:r};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In Hydra 1.0, when a config file is loaded, if a config with a matching name and group is present in the ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigStore"),",\nit is used as the schema for the newly loaded config."),Object(i.b)("p",null,"There are several problems with this approach:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Inflexible"),": This approach can only be used when a schema should validate a single config file.\nIt does not work if you want to use the same schema to validate multiple config files."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Unexpected"),": This behavior can be unexpected. There is no way to tell this is going to happen when looking at a given\nconfig file.")),Object(i.b)("p",null,"Hydra 1.1 deprecates this behavior in favor of an explicit config extension via the Defaults List.",Object(i.b)("br",{parentName:"p"}),"\n","This upgrade page aims to provide a summary of the required changes. It is highly recommended that you read the following pages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/advanced/defaults_list"},"Background: The Defaults List")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/patterns/extending_configs"},"Background: Extending configs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/next/tutorials/structured_config/schema"},"Tutorial: Structured config schema"))),Object(i.b)("h2",{id:"migration"},"Migration"),Object(i.b)("p",null,"Before the upgrade, you have two different configs with the same name (a config file, and a Structured Config in the ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigStore"),").\nYou need to rename one of them. Depending on the circumstances and your preference you may rename one or the other."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you control both configs, you can rename either of them."),Object(i.b)("li",{parentName:"ul"},"If you only control the config file, rename it.")),Object(i.b)("h3",{id:"option-1-rename-the-structured-config"},"Option 1: rename the Structured Config"),Object(i.b)("p",null,"This option is less disruptive. Use it if you control the Structured Config.  "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Use a different name when storing the schema into the Config Store. Common choices:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"base_")," prefix, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"base_mysql"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"_schema")," suffix, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"mysql_schema"),"."))),Object(i.b)("li",{parentName:"ol"},"Add the schema to the Defaults List of the extending config file.")),Object(i.b)("details",null,Object(i.b)("summary",null,"Click to show an example"),Object(i.b)("h4",{id:"hydra-10"},"Hydra 1.0"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"# @package _group_\nhost: localhost\nport: 3306\n\n\n\n\n\n\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="db/mysql schema in the ConfigStore"',title:'"db/mysql',schema:!0,in:!0,the:!0,'ConfigStore"':!0},'@dataclass\nclass MySQLConfig:\n    host: str\n    port: int\n\ncs = ConfigStore.instance()\ncs.store(group="db",\n         name="mysql", \n         node=MySQLConfig)\n')))),Object(i.b)("h4",{id:"hydra-11"},"Hydra 1.1"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {1,2}',title:'"db/mysql.yaml"',"{1,2}":!0},"defaults:\n  - base_mysql\n\nhost: localhost\nport: 3306\n\n\n\n\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="db/mysql schema in the ConfigStore" {8}',title:'"db/mysql',schema:!0,in:!0,the:!0,'ConfigStore"':!0,"{8}":!0},'@dataclass\nclass MySQLConfig:\n    host: str\n    port: int\n\ncs = ConfigStore.instance()\ncs.store(group="db",\n         name="base_mysql", \n         node=MySQLConfig)\n'))))),Object(i.b)("h3",{id:"option-2-rename-the-config-file"},"Option 2: rename the config file"),Object(i.b)("p",null,"This option is a bit more disruptive. Use it if you only control the config file."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Rename the config file. Common choices are ",Object(i.b)("inlineCode",{parentName:"li"},"custom_")," or ",Object(i.b)("inlineCode",{parentName:"li"},"my_")," prefix, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"custom_mysql.yaml"),". You can also use a domain specific name like ",Object(i.b)("inlineCode",{parentName:"li"},"prod_mysql.yaml"),"."),Object(i.b)("li",{parentName:"ol"},"Add the schema to the Defaults List of the extending config file."),Object(i.b)("li",{parentName:"ol"},"Update references to the config name accordingly, e.g. on the command-line ",Object(i.b)("inlineCode",{parentName:"li"},"db=mysql")," would become ",Object(i.b)("inlineCode",{parentName:"li"},"db=custom_mysql"),", and in a defaults list ",Object(i.b)("inlineCode",{parentName:"li"},"db: mysql")," would become ",Object(i.b)("inlineCode",{parentName:"li"},"db: custom_mysql"),".")),Object(i.b)("details",null,Object(i.b)("summary",null,"Click to show an example"),Object(i.b)("h4",{id:"hydra-10-1"},"Hydra 1.0"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"# @package _group_\nhost: localhost\nport: 3306\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="db/mysql schema in the ConfigStore"',title:'"db/mysql',schema:!0,in:!0,the:!0,'ConfigStore"':!0},'@dataclass\nclass MySQLConfig:\n    host: str\n    port: int\n\ncs = ConfigStore.instance()\ncs.store(group="db",\n         name="mysql", \n         node=MySQLConfig)\n\n')))),Object(i.b)("h4",{id:"hydra-11-1"},"Hydra 1.1"),Object(i.b)("p",null,"Rename ",Object(i.b)("inlineCode",{parentName:"p"},"db/mysql.yaml")," to ",Object(i.b)("inlineCode",{parentName:"p"},"db/custom_mysql.yaml")," and explicitly add the schema to the Defaults List."),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/custom_mysql.yaml" {1,2}',title:'"db/custom_mysql.yaml"',"{1,2}":!0},"defaults:\n  - mysql\n\nhost: localhost\nport: 3306\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {2}',title:'"config.yaml"',"{2}":!0},"defaults:\n  - db: custom_mysql\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="db/mysql schema in the ConfigStore"',title:'"db/mysql',schema:!0,in:!0,the:!0,'ConfigStore"':!0},"\n\n\n\n\n                   NO CHANGES\n\n\n\n\n\n\n")))),Object(i.b)("p",null,"Don't forget to also update your command line overrides from ",Object(i.b)("inlineCode",{parentName:"p"},"db=mysql")," to ",Object(i.b)("inlineCode",{parentName:"p"},"db=custom_mysql"),".")))}m.isMDXComponent=!0}}]);