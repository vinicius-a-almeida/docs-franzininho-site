(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{162:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return b}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),d=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=d(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return t?r.a.createElement(b,l(l({ref:a},s),{},{components:t})):r.a.createElement(b,l({ref:a},s))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},309:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/circuito-tecla-liga-desliga-0133088e4f085079b1a5dc507efc2d45.png"},96:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return u}));var n=t(3),r=t(7),i=(t(0),t(162)),o=["components"],l={id:"tecla-liga-desliga",title:"Tecla Liga/Desliga",slug:"/franzininho-diy/tecla-liga-desliga",description:"Nesse exemplo vamos fazer uma tecla liga/desliga, que pode ser usada para acionamentos diversos."},c={unversionedId:"FranzininhoDIY/exemplos-arduino/tecla-liga-desliga",id:"FranzininhoDIY/exemplos-arduino/tecla-liga-desliga",isDocsHomePage:!1,title:"Tecla Liga/Desliga",description:"Nesse exemplo vamos fazer uma tecla liga/desliga, que pode ser usada para acionamentos diversos.",source:"@site/docs/FranzininhoDIY/exemplos-arduino/tecla-liga-desliga.md",slug:"/franzininho-diy/tecla-liga-desliga",permalink:"/docs/franzininho-diy/tecla-liga-desliga",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/tecla-liga-desliga.md",version:"current",sidebar:"docs",previous:{title:"Leitura de Tecla",permalink:"/docs/franzininho-diy/leitura-tecla"},next:{title:"LED RGB",permalink:"/docs/franzininho-diy/led-rgb"}},s=[{value:"Materiais",id:"materiais",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"Sketch",id:"sketch",children:[]},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",children:[]},{value:"Video de Funcionamento",id:"video-de-funcionamento",children:[]}],d={toc:s};function u(e){var a=e.components,l=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},d,l,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Nesse exemplo vamos fazer uma tecla liga/desliga, que pode ser usada para acionamentos diversos."),Object(i.b)("h2",{id:"materiais"},"Materiais"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Placa Franzininho;"),Object(i.b)("li",{parentName:"ul"},"Protoboard;"),Object(i.b)("li",{parentName:"ul"},"LED 3mm; "),Object(i.b)("li",{parentName:"ul"},"1 Resistor 3300; "),Object(i.b)("li",{parentName:"ul"},"1 Resistor de 1K; "),Object(i.b)("li",{parentName:"ul"},"1 Bot\xe3o; "),Object(i.b)("li",{parentName:"ul"},"Jumpers;")),Object(i.b)("h2",{id:"circuito"},"Circuito"),Object(i.b)("p",null,"No protoboard voc\xea deve inserir o LED, resistores e o bot\xe3o, conforme a imagem abaixo:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Circuito ",src:t(309).default})),Object(i.b)("h2",{id:"sketch"},"Sketch"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"/*\n  Franzininho\n  Exemplo: Tecla liga/desliga\n  Esse exemplo exibe como fazer ligar e desligar uma sa\xedda atrav\xe9s de uma tecla\n*/\nconst int LED = 1; //pino para o LED\nconst int BOTAO = 2; //pino para o bot\xe3o\nint estadoAnteriorBotao = 0;   // armazena o estado anterior do bot\xe3o\n\nvoid setup(){\n  pinMode(LED,OUTPUT); //o LED \xe9 uma sa\xedda\n  pinMode(BOTAO,INPUT); //o BOTAO \xe9 uma entrada\n}\n\nvoid loop (){\n int estadoAtualBT= digitalRead(BOTAO);      // L\xea estado do bot\xe3o\n delay(10);\n\nif ((estadoAtualBT != estadoAnteriorBotao)&& (estadoAtualBT == LOW)){       //Se o bot\xe3o foi pressionado e o seu estado mudou\n  digitalWrite(LED,!digitalRead(LED)); //inverte estado do LED\n}\n  estadoAnteriorBotao = estadoAtualBT;  //salva o estado do bot\xe3o para comparar na pr\xf3xima leitura\n}\n")),Object(i.b)("h2",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),Object(i.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/311373968060711489?view=diagram"}),Object(i.b)("h2",{id:"video-de-funcionamento"},"Video de Funcionamento"),Object(i.b)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/Aht0fUuGIjQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0}}]);