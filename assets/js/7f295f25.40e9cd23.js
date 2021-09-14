(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7782],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),h=a,p=m["".concat(d,".").concat(h)]||m[h]||s[h]||o;return t?r.createElement(p,i(i({ref:n},u),{},{components:t})):r.createElement(p,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3899:function(e,n,t){"use strict";t.d(n,{Z:function(){return d},T:function(){return c}});var r=t(2122),a=t(7294),o=t(6742),i=t(2263),l=t(907);function d(e){return a.createElement(o.Z,(0,r.Z)({},e,{to:(n=e.to,d=(0,l.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==d?void 0:d.name)?t:"current"]+n),target:"_blank"}));var n,t,d}function c(e){var n,t=null!=(n=e.text)?n:"Example";return a.createElement(d,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}},173:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return h}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=t(3899),l=["components"],d={id:"job",title:"Job Configuration"},c=void 0,u={unversionedId:"configure_hydra/job",id:"configure_hydra/job",isDocsHomePage:!1,title:"Job Configuration",description:"The job configuration resides in hydra.job.",source:"@site/docs/configure_hydra/job.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/job",permalink:"/docs/next/configure_hydra/job",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/configure_hydra/job.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1631625704,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"job",title:"Job Configuration"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/configure_hydra/intro"},next:{title:"Customizing logging",permalink:"/docs/next/configure_hydra/logging"}},s=[{value:"hydra.job.name",id:"hydrajobname",children:[]},{value:"hydra.job.override_dirname",id:"hydrajoboverride_dirname",children:[]},{value:"hydra.job.id",id:"hydrajobid",children:[]},{value:"hydra.job.num",id:"hydrajobnum",children:[]},{value:"hydra.job.config_name",id:"hydrajobconfig_name",children:[]},{value:"hydra.job.env_set",id:"hydrajobenv_set",children:[]},{value:"hydra.job.env_copy",id:"hydrajobenv_copy",children:[]}],m={toc:s};function h(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The job configuration resides in ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra.job"),".\nThe Structured Config is below, the latest definition is ",(0,o.kt)(i.Z,{to:"hydra/conf/__init__.py",mdxType:"GithubLink"},"here"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# job runtime information will be populated here\n@dataclass\nclass JobConf:\n    # Job name, populated automatically unless specified by the user (in config or cli)\n    name: str = MISSING\n\n    # Concatenation of job overrides that can be used as a part\n    # of the directory name.\n    # This can be configured in hydra.job.config.override_dirname\n    override_dirname: str = MISSING\n\n    # Job ID in underlying scheduling system\n    id: str = MISSING\n\n    # Job number if job is a part of a sweep\n    num: int = MISSING\n\n    # The config name used by the job\n    config_name: Optional[str] = MISSING\n\n    # Environment variables to set remotely\n    env_set: Dict[str, str] = field(default_factory=dict)\n    # Environment variables to copy from the launching machine\n    env_copy: List[str] = field(default_factory=list)\n\n    # Job config\n    @dataclass\n    class JobConfig:\n        @dataclass\n        # configuration for the ${hydra.job.override_dirname} runtime variable\n        class OverrideDirname:\n            kv_sep: str = "="\n            item_sep: str = ","\n            exclude_keys: List[str] = field(default_factory=list)\n\n        override_dirname: OverrideDirname = OverrideDirname()\n\n    config: JobConfig = JobConfig()\n'))),(0,o.kt)("h3",{id:"hydrajobname"},"hydra.job.name"),(0,o.kt)(i.T,{text:"Example application",to:"examples/configure_hydra/job_name",mdxType:"ExampleGithubLink"}),(0,o.kt)("p",null,"The job name is used by different things in Hydra, such as the log file name (",(0,o.kt)("inlineCode",{parentName:"p"},"${hydra.job.name}.log"),").\nIt is normally derived from the Python file name (The job name of the file ",(0,o.kt)("inlineCode",{parentName:"p"},"train.py")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"train"),").\nYou can override it via the command line, or your config file. "),(0,o.kt)("h3",{id:"hydrajoboverride_dirname"},"hydra.job.override_dirname"),(0,o.kt)("p",null,"Enables the creation of an output directory which is based on command line overrides.\nLearn more at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/configure_hydra/workdir"},"Customizing Working Directory")," page."),(0,o.kt)("h3",{id:"hydrajobid"},"hydra.job.id"),(0,o.kt)("p",null,"The job ID is populated by the active Hydra launcher. For the basic launcher, the job ID is just a serial job number.\nOther launchers will set it to an ID that makes sense like SLURM job ID. "),(0,o.kt)("h3",{id:"hydrajobnum"},"hydra.job.num"),(0,o.kt)("p",null,"Serial job number within this current sweep run. (0 to n-1)."),(0,o.kt)("h3",{id:"hydrajobconfig_name"},"hydra.job.config_name"),(0,o.kt)("p",null,"The config name used by the job, this is populated automatically to match the config name in ",(0,o.kt)("inlineCode",{parentName:"p"},"@hydra.main()"),"."),(0,o.kt)("h3",{id:"hydrajobenv_set"},"hydra.job.env_set"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Dict[str, str]")," that is used to set the environment variables of the running job.\nSome common use cases are to automatically set environment variables that are affecting underlying libraries.\nFor example, the following will disables multithreading in Intel IPP and MKL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_set:\n      OMP_NUM_THREADS: 1\n")),(0,o.kt)("p",null,"Another example, is to use interpolation to automatically set the rank\nfor ",(0,o.kt)("a",{parentName:"p",href:"https://pytorch.org/tutorials/intermediate/dist_tuto.html"},"Torch Distributed")," run to match the job number\nin the sweep. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_set:\n      RANK: ${hydra:job.num}\n")),(0,o.kt)("h3",{id:"hydrajobenv_copy"},"hydra.job.env_copy"),(0,o.kt)("p",null,"In some cases you want to automatically copy local environment variables to the running job environment variables.\nThis is particularly useful for remote runs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_copy:\n      - AWS_KEY\n")))}h.isMDXComponent=!0}}]);