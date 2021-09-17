(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{119:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return u}));var o=t(3),a=t(7),n=(t(0),t(141)),i={id:"circuitpython-primeiros-passos",title:"Primeiros Passos",slug:"/franzininho-wifi/exemplos-circuitpython/primeiros-passos",description:"Aprenda dar os primeiros passo no uso do CircuitPython na Franzininho WiFi",author:"Diana Santos"},c={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-primeiros-passos",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-primeiros-passos",isDocsHomePage:!1,title:"Primeiros Passos",description:"Aprenda dar os primeiros passo no uso do CircuitPython na Franzininho WiFi",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/circuitpython.md",slug:"/franzininho-wifi/exemplos-circuitpython/primeiros-passos",permalink:"/docs-franzininho-site/en/docs/franzininho-wifi/exemplos-circuitpython/primeiros-passos",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/circuitpython.md",version:"current",sidebar:"docs",previous:{title:"PWM com LEDC",permalink:"/docs-franzininho-site/en/docs/franzininho-wifi/exemplos-espidf/ledc"},next:{title:"Instalando as ferramentas",permalink:"/docs-franzininho-site/en/docs/franzininho-wifi/exemplos-circuitpython/ferramentas"}},s=[{value:"O que \xe9 CircuitPython?",id:"o-que-\xe9-circuitpython",children:[]},{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",children:[]},{value:"Grava\xe7\xe3o do CircuitPython na Franzininho WiFi",id:"grava\xe7\xe3o-do-circuitpython-na-franzininho-wifi",children:[]}],p={toc:s};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Este documento pretende ajud\xe1-lo a configurar a placa Franzininho WiFi para ser programada usando o CircuitPython."),Object(n.b)("p",null,"O CircuitPython \xe9 um fork do projeto MicroPython, realizado pela empresa Adafruit. A Adafruit vem desenvolvendo diversas bibliotecas e recursos para programa\xe7\xe3o de microcontroladores com Python. Saiba mais sobre o projeto em: ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://circuitpython.org/"}),"CircuitPython"),"."),Object(n.b)("p",null,"A seguir apresentamos os passos para grava\xe7\xe3o do CircuitPython na Franzininho WiFi e preparar o ambiente."),Object(n.b)("h2",{id:"o-que-\xe9-circuitpython"},"O que \xe9 CircuitPython?"),Object(n.b)("p",null,"CircuitPython \xe9 uma linguagem de programa\xe7\xe3o projetada para simplificar a experimenta\xe7\xe3o e o aprendizado de programa\xe7\xe3o em placas com microcontroladores de baixo custo. Isso torna os primeiros passos mais f\xe1ceis do que nunca, sem a necessidade de downloads iniciais no computador de trabalho. Assim, ap\xf3s configurar a placa, abra qualquer editor de texto e comece a editar o c\xf3digo."),Object(n.b)("p",null,"O CircuitPython traz o Python para dentro dos microcontroladores. Voc\xea pode saber mais sobre o projeto CircuitPython aqui: ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"http://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython"}),"learn.adafruit.com/circuitpython")),Object(n.b)("p",null,"A placa Franzininho WiFi foi ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://circuitpython.org/downloads?q=franzininho"}),"adicionada ao CircuitPython")," e todas as releases do CircuitPyhton ser\xe3o compilados para ela. Esse foi um passo muito importante para o projeto e possibilitar\xe1 o desenvolvimento de aplica\xe7\xf5es com o ESP32-S2 usando a linguagem Python."),Object(n.b)("h2",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),Object(n.b)("p",null,"Antes de come\xe7ar a divers\xe3o de programar a Franzininho WIFI com o CircuitPython, precisamos realizar alguns passos para configura\xe7\xe3o. Nesta etapa gravaremos o firmware do CircuitPython na Franzininho WiFi e prepararemos o ambiente para voc\xea usar sua placa."),Object(n.b)("p",null,"Nesse momento voc\xea precisar\xe1 apenas de um computador com o sistema operacional que voc\xea est\xe1 acostumado a usar e a placa Franzininho WiFi."),Object(n.b)("p",null,"Bora! Colocar a m\xe3o na massa?"),Object(n.b)("h2",{id:"grava\xe7\xe3o-do-circuitpython-na-franzininho-wifi"},"Grava\xe7\xe3o do CircuitPython na Franzininho WiFi"),Object(n.b)("iframe",{width:"809",height:"455",src:"https://www.youtube.com/embed/wU7wvfxmcS0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(n.b)("p",null,"Ferramenta de grava\xe7\xe3o: ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://franzininho.github.io/webdfu-franzininho-wifi/dfu-util/"}),"https://franzininho.github.io/webdfu-franzininho-wifi/dfu-util/")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Autor"),Object(n.b)("th",Object(o.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(o.a)({parentName:"th"},{href:"https://github.com/FBSeletronica"}),"F\xe1bio Souza")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Data:"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"16/09/201")))))}u.isMDXComponent=!0},141:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var o=t(0),a=t.n(o);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,b=l["".concat(i,".").concat(m)]||l[m]||d[m]||n;return t?a.a.createElement(b,c(c({ref:r},p),{},{components:t})):a.a.createElement(b,c({ref:r},p))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<n;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);