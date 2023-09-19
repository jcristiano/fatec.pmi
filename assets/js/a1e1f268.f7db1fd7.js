"use strict";(self.webpackChunkfatec_pmi=self.webpackChunkfatec_pmi||[]).push([[2879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},a="Tomada de decisao",s={unversionedId:"algoritmos/links-uteis/tomada_de_decisao",id:"algoritmos/links-uteis/tomada_de_decisao",title:"Tomada de decisao",description:"Fundamental Theorem of Calculus",source:"@site/docs/algoritmos/links-uteis/tomada_de_decisao.md",sourceDirName:"algoritmos/links-uteis",slug:"/algoritmos/links-uteis/tomada_de_decisao",permalink:"/fatec.pmi/docs/algoritmos/links-uteis/tomada_de_decisao",draft:!1,editUrl:"https://github.com/jcristiano/fatec.pmi/tree/main/docs/algoritmos/links-uteis/tomada_de_decisao.md",tags:[],version:"current",lastUpdatedAt:1695094213,formattedLastUpdatedAt:"Sep 19, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"algoritmoSidebar",previous:{title:"Referencias Uteis",permalink:"/fatec.pmi/docs/algoritmos/links-uteis/links_uteis"},next:{title:"demo",permalink:"/fatec.pmi/docs/algoritmos/links-uteis/drawio_exemplo"}},d={},c=[],l={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tomada-de-decisao"},"Tomada de decisao"),(0,r.kt)("mermaid",{value:"flowchart TD\n    INICIO([INICIO]) --\x3e A\n    A[Deploy to production] --\x3e B{Is it Friday?};\n    B -- Yes --\x3e C[Do not deploy!];\n    B -- No --\x3e D[Run deploy.sh to deploy!];\n    C ----\x3e E[Enjoy your weekend!];\n    D ----\x3e E[Enjoy your weekend!];\n"}),(0,r.kt)("mermaid",{value:"flowchart TD\n    id1{{In\xedcio do Loop}}\n    id2{{Condi\xe7\xe3o}}\n    id3{{A\xe7\xe3o no Loop}}\n    id4{{Fim do Loop}}\n\n    id1 --\x3e id2\n    id2 -- Verdadeiro --\x3e id3\n    id3 --\x3e id4\n    id2 -- Falso --\x3e id4\n    id4 --\x3e id1"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fundamental Theorem of Calculus"),(0,r.kt)("br",{parentName:"p"}),"\n","Let $f:","[a,b]"," \\to \\R$ be Riemann integrable. Let $F:","[a,b]","\\to\\R$ be $F(x)=\n\\int_{a}^{x}f(t)dt$.\nThen $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$,\n$F$ is differentiable at $x$ with $F'(x)=f(x)$."))}u.isMDXComponent=!0}}]);