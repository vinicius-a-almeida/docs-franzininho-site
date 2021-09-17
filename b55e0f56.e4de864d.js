(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return i})),o.d(a,"metadata",(function(){return l})),o.d(a,"toc",(function(){return s})),o.d(a,"default",(function(){return u}));var n=o(3),r=o(7),t=(o(0),o(141)),i={id:"hello-world",title:"Hello, World!",slug:"/franzininho-diy/exemplos-avr-libc/hello-world",description:"Nesse primeiros exemplo vamos dar os primeiros passos na programa\xe7\xe3o da Franzininho DIY",authors:"F\xe1bio Souza",date:"24/04/2021",some_url:"https://github.com/FBSeletronica"},l={unversionedId:"FranzininhoDIY/exemplos-avr-libc/hello-world",id:"FranzininhoDIY/exemplos-avr-libc/hello-world",isDocsHomePage:!1,title:"Hello, World!",description:"Nesse primeiros exemplo vamos dar os primeiros passos na programa\xe7\xe3o da Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/hello-world.md",slug:"/franzininho-diy/exemplos-avr-libc/hello-world",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/hello-world",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-avr-libc/hello-world.md",version:"current",sidebar:"docs",previous:{title:"Primeiros Passos",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/primeiros-passos"},next:{title:"Sa\xedda Digital",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/saida-digital"}},s=[{value:"Recursos Necess\xe1rios",id:"recursos-necess\xe1rios",children:[]},{value:"Hello, World em linguagem C",id:"hello-world-em-linguagem-c",children:[{value:"C\xf3digo",id:"c\xf3digo",children:[]},{value:"Compila\xe7\xe3o e upload",id:"compila\xe7\xe3o-e-upload",children:[]},{value:"Resultados",id:"resultados",children:[]}]},{value:"Conclus\xe3o",id:"conclus\xe3o",children:[]}],c={toc:s};function u(e){var a=e.components,o=Object(r.a)(e,["components"]);return Object(t.b)("wrapper",Object(n.a)({},c,o,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Nesse exemplo vamos dar os nossos primeiros passos na programa\xe7\xe3o da Franzininho DIY usando a ",Object(t.b)("a",Object(n.a)({parentName:"p"},{href:"https://nongnu.org/avr-libc/"}),"AVR Libc"),"."),Object(t.b)("p",null,'Como de costume o nosso "Hello, World!" na eletr\xf4nica ser\xe1 um blink LED. Ao final desse experimento voc\xea ter\xe1 uma estrutura m\xednima para desenvolver aplica\xe7\xf5es para o ATtiny85 em C.'),Object(t.b)("p",null,"Bora, colocar em pr\xe1tica!"),Object(t.b)("h2",{id:"recursos-necess\xe1rios"},"Recursos Necess\xe1rios"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Placa Franzininho DIY(com Micronucleus)"),Object(t.b)("li",{parentName:"ul"},"Computador com as ferramentas de software instaladas(link)")),Object(t.b)("h2",{id:"hello-world-em-linguagem-c"},"Hello, World em linguagem C"),Object(t.b)("p",null,"Esse exemplo b\xe1sico nos dar\xe1 estrutura para todos nossos exemplos daqui pra frente. Como j\xe1 mencionado, vamos usar a linguagem C em conjunto com a biblioteca AVR Libc. Para esse exemplo voc\xea s\xf3 precisar\xe1 da placa Franzininho DIY e as ferramentas de softwares."),Object(t.b)("p",null,"O c\xf3digo exibe a estrutura m\xednima de um programa em linguagem C para microcontroladores. Se voc\xea tem dificuldades com a linguagem C, recomendo que confira os seguintes materiais:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=l9ZdS8kph0A&list=PLqY1DITQ0sB_5yUBqhnm37J5PxsjrVPKT"}),"Playlist Linguagem C")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.slideshare.net/FabioSouza9/resumo-linguagem-c-para-microcontroladores-pic-usando-mikroc"}),"Slideshare"))),Object(t.b)("p",null,"Nesse momento \xe9 importante que voc\xea se atente a estrutura do c\xf3digo. Vamos usar alguns registradores para acionar o LED, mas n\xe3o ser\xe3o o foco da explica\xe7\xe3o. Confira os coment\xe1rios no c\xf3digo a seguir:"),Object(t.b)("h3",{id:"c\xf3digo"},"C\xf3digo"),Object(t.b)("pre",null,Object(t.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"#include <avr/io.h>            // Biblioteca para acesso aos registradores do MCU\n#include <util/delay.h>        // Biblioteca para fun\xe7\xf5es de delay\n\n#define F_CPU 16500000L        // Frequencia de clock que o mcu est\xe1 trabalhando\n\n/**\n  Essa \xe9 a fun\xe7\xe3o principal onde \xe9 iniciada aplica\xe7\xe3o\n*/\nint main(void)\n{\n    DDRB |= (1 << PB1);        // Configura Pino PB1 como sa\xedda (Pino do LED)\n\n    // O programar ficar\xe1 nesse loop enquanto a placa estiver ligada\n    while (1)\n    {\n        PORTB |= (1 << PB1);   // Liga LED\n        _delay_ms(500);        // Aguarda 500 ms\n\n        PORTB &= ~(1 << PB1);  // Desliga LED\n        _delay_ms(500);        // Aguarda 500 ms\n    }\n\n    return (0);                // Necess\xe1rio um retorno (pois a fun\xe7\xe3o retorna int) mesmo que a fun\xe7\xe3o nunca retornar\xe1\n}\n")),Object(t.b)("h3",{id:"compila\xe7\xe3o-e-upload"},"Compila\xe7\xe3o e upload"),Object(t.b)("p",null,"para compilar o programa, acesse a pasta do exemplo e em seguida o comando  ",Object(t.b)("inlineCode",{parentName:"p"},"make"),":"),Object(t.b)("pre",null,Object(t.b)("code",Object(n.a)({parentName:"pre"},{}),"exemplos-avr-libc/exemplos/hello$ make\n")),Object(t.b)("p",null,"J\xe1 temos o makefile configurado na pasta, assim, ser\xe1 feita a compila\xe7\xe3o e em seguida aparecer\xe1 a mensagem para conectar a placa:"),Object(t.b)("pre",null,Object(t.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"../../micronucleus/2.0a4/launcher  -cdigispark --timeout 60 -Uflash:w:main.hex:i\nRunning Digispark Uploader...\nPlug in device now... (will timeout in 60 seconds)\n> Please plug in the device (will time out in 60 seconds) ...\n")),Object(t.b)("p",null,"Conecte a placa no PC ou pressione o bot\xe3o de RESET se ela j\xe1 estiver conectada."),Object(t.b)("p",null,"Ser\xe1 iniciado o upload."),Object(t.b)("h3",{id:"resultados"},"Resultados"),Object(t.b)("p",null,"Nesse exemplo o LED ir\xe1 piscar em intervalos de 500 ms (on) e 500 ms (off)."),Object(t.b)("p",null,"No pr\xf3ximo exemplo vamos detalhar sobre os registradores de IO. Nesse momento, al\xe9m da estrutura inicial \xe9 importante que voc\xea entenda como usar a fun\xe7\xe3o ",Object(t.b)("inlineCode",{parentName:"p"},"_delay_ms()"),"."),Object(t.b)("p",null,"Essa fun\xe7\xe3o espera o tempo passado em milissegundos."),Object(t.b)("p",null,"Altere o c\xf3digo para que o led fique 100 ms(on) e 1000 ms (off), veja o efeito."),Object(t.b)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),Object(t.b)("p",null,"Nesse exemplo tivemos o primeiro contato com a programa\xe7\xe3o em linguagem C para microcontroladores. Notamos que devemos incluir as bibliotecas externas atrav\xe9s do ",Object(t.b)("inlineCode",{parentName:"p"},"#include")," e que o programa precisa necessariamente ter a fun\xe7\xe3o ",Object(t.b)("inlineCode",{parentName:"p"},"int main(void)"),"."),Object(t.b)("p",null,"Dentro da fun\xe7\xe3o main temos um loop infinito onde os comandos se repetir\xe3o enquanto a placa estiver ligada."),Object(t.b)("table",null,Object(t.b)("thead",{parentName:"table"},Object(t.b)("tr",{parentName:"thead"},Object(t.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Autor"),Object(t.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(t.b)("a",Object(n.a)({parentName:"th"},{href:"https://github.com/FBSeletronica"}),"F\xe1bio Souza")))),Object(t.b)("tbody",{parentName:"table"},Object(t.b)("tr",{parentName:"tbody"},Object(t.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data:"),Object(t.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"24/04/2021")))))}u.isMDXComponent=!0},141:function(e,a,o){"use strict";o.d(a,"a",(function(){return m})),o.d(a,"b",(function(){return b}));var n=o(0),r=o.n(n);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),u=function(e){var a=r.a.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):l(l({},a),e)),o},m=function(e){var a=u(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var o=e.components,n=e.mdxType,t=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(o),d=n,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||t;return o?r.a.createElement(b,l(l({ref:a},c),{},{components:o})):r.a.createElement(b,l({ref:a},c))}));function b(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=o.length,i=new Array(t);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<t;c++)i[c]=o[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);