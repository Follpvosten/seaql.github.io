"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[583],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,h=d["".concat(l,".").concat(f)]||d[f]||c[f]||s;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const s={},i="Set up the Graph Query Engine",o={unversionedId:"install-and-config/setup-graph-queery-engine",id:"install-and-config/setup-graph-queery-engine",title:"Set up the Graph Query Engine",description:"Set up the database",source:"@site/docs/01-install-and-config/01-setup-graph-queery-engine.md",sourceDirName:"01-install-and-config",slug:"/install-and-config/setup-graph-queery-engine",permalink:"/StarfishQL/docs/install-and-config/setup-graph-queery-engine",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/01-install-and-config/01-setup-graph-queery-engine.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1666797933,formattedLastUpdatedAt:"Oct 26, 2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"StarfishQL Concepts",permalink:"/StarfishQL/docs/introduction/starfish-ql"},next:{title:"Crawling crates.io Data",permalink:"/StarfishQL/docs/install-and-config/crawling-crates-io-data"}},l={},p=[{value:"Set up the database",id:"set-up-the-database",level:2},{value:"Run the tests",id:"run-the-tests",level:2},{value:"Start the query engine",id:"start-the-query-engine",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-up-the-graph-query-engine"},"Set up the Graph Query Engine"),(0,a.kt)("h2",{id:"set-up-the-database"},"Set up the database"),(0,a.kt)("p",null,"Set up a MySQL",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," database connection with Docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'docker run \\\n    --name "mysql-8.0" \\\n    --env MYSQL_DB="mysql" \\\n    --env MYSQL_USER="sea" \\\n    --env MYSQL_PASSWORD="sea" \\\n    --env MYSQL_ALLOW_EMPTY_PASSWORD="yes" \\\n    --env MYSQL_ROOT_PASSWORD="root" \\\n    -d -p 3306:3306 mysql:8.0\ndocker stop "mysql-8.0"\n')),(0,a.kt)("h2",{id:"run-the-tests"},"Run the tests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# starfish-ql/starfish/\nDATABASE_URL="mysql://root:root@localhost:3306" cargo test --all\n')),(0,a.kt)("h2",{id:"start-the-query-engine"},"Start the query engine"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# starfish-ql/starfish/\ncargo run --release\n")),(0,a.kt)("p",null,"Alternatively, use the default compilation profile so that logs and SQL commands are displayed in the terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# starfish-ql/starfish/\ncargo run\n")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Until ",(0,a.kt)("a",{parentName:"li",href:"https://crates.io/crates/sea-query"},"SeaQuery")," provides more support, only MySQL databases are supported in StarfishQL.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);