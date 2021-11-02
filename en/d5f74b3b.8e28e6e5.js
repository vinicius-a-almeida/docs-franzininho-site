(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{138:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),i=(t(0),t(156)),o=["components"],c={id:"leitura-tecla",title:"Leitura de Tecla",slug:"/franzininho-diy/leitura-tecla",description:"Nesse exemplo vamos fazer a leitura de uma tecla e acionar um LED quando a mesma for pressionada."},l={unversionedId:"FranzininhoDIY/exemplos-arduino/leitura-tecla",id:"FranzininhoDIY/exemplos-arduino/leitura-tecla",isDocsHomePage:!1,title:"Leitura de Tecla",description:"Nesse exemplo vamos fazer a leitura de uma tecla e acionar um LED quando a mesma for pressionada.",source:"@site/docs/FranzininhoDIY/exemplos-arduino/leitura-tecla.md",slug:"/franzininho-diy/leitura-tecla",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/leitura-tecla",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/leitura-tecla.md",version:"current",sidebar:"docs",previous:{title:"Controle brilho de LED",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/brilho-led"},next:{title:"Tecla Liga/Desliga",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/tecla-liga-desliga"}},u=[{value:"Materiais",id:"materiais",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"Sketch",id:"sketch",children:[]},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",children:[]},{value:"Video de Funcionamento",id:"video-de-funcionamento",children:[]}],d={toc:u};function s(e){var n=e.components,c=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},d,c,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Nesse exemplo vamos fazer a leitura de uma tecla e acionar um LED quando a mesma for pressionada."),Object(i.b)("h2",{id:"materiais"},"Materiais"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Placa Franzininho;"),Object(i.b)("li",{parentName:"ul"},"Protoboard;"),Object(i.b)("li",{parentName:"ul"},"LED 3mm;"),Object(i.b)("li",{parentName:"ul"},"1 Resistor 330;"),Object(i.b)("li",{parentName:"ul"},"1 Resistor de 1k;"),Object(i.b)("li",{parentName:"ul"},"1 Bot\xe3o;"),Object(i.b)("li",{parentName:"ul"},"Jumpers macho/f\xeamea")),Object(i.b)("h2",{id:"circuito"},"Circuito"),Object(i.b)("p",null,"No protoboard voc\xea deve inserir o LED, resistores e o bot\xe3o, conforme a imagem abaixo:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Circuito leitura tecla",src:t(382).default})),Object(i.b)("h2",{id:"sketch"},"Sketch"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"/*\n  Franzininho\n  Exemplo: Leitura de Tecla - Pull Down\n  Esse exemplo exibe como ler uma tecla com resistor de pull down e acionar um led quando ela for pressionada\n*/\nconst int LED = 1; //pino para o LED\nconst int BOTAO = 2; //pino para o bot\xe3o\nint val = 0; // val ser\xe1 utilizado para armazenar o estado do pino\nvoid setup(){\n  pinMode(LED,OUTPUT); //o LED \xe9 uma sa\xedda\n  pinMode(BOTAO,INPUT); //o BOTAO \xe9 uma entrada\n}\nvoid loop (){\nval = digitalRead(BOTAO); // l\xea e armazena o valor de entrada\ndigitalWrite(LED, val); //aciona LED conforme valor lido do bot\xe3o\n}\n")),Object(i.b)("h2",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),Object(i.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/311373301712683584?view=diagram"}),Object(i.b)("h2",{id:"video-de-funcionamento"},"Video de Funcionamento"),Object(i.b)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/JHdqOuj-WHc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}s.isMDXComponent=!0},156:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),d=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,b=s["".concat(o,".").concat(m)]||s[m]||p[m]||i;return t?r.a.createElement(b,c(c({ref:n},u),{},{components:t})):r.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},382:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/leitura-de-tecla-0133088e4f085079b1a5dc507efc2d45.png"}}]);