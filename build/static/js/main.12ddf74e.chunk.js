(this["webpackJsonpstarnavi-tt"]=this["webpackJsonpstarnavi-tt"]||[]).push([[0],{136:function(e,t,n){e.exports=n(152)},141:function(e,t,n){},146:function(e,t,n){},148:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),u=n.n(c),o=(n(141),n(142),n(10)),l=n(166),i=n(43),s=(n(146),n(164)),m=n(167),f=n(165),g=n(153),v=n(78),b=n.n(v),p=n(111),d=function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:[],e.next=3,fetch(t,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.getFullYear(),n=e.getMonth().toString(),a=e.getDate().toString(),r=e.getHours().toString(),c=e.getMinutes().toString();return"\n    ".concat(1===a.length?"0"+a:a,".").concat(1===n.length?"0"+n:n,".").concat(t," \n    ").concat(0===r.length?"0"+r:r,":").concat(0===c.length?"0"+c:c)},O="SET_DEFAULT_SETTINGS",h="SET_WINNERS",y="SET_GAME_AREA",S="SET_GAME_ACTIVE_AREA",_="SET_GAME_START",A="SET_PLAYER",w="SET_MESSAGE",N="SET_SCORE",T=function(e){return{type:h,value:e}},M=function(e){return{type:S,value:e}},k=function(e){return{type:_,value:e}},x=function(e){return{type:A,value:e}},C=function(e){return{type:w,value:e}},I=function(e){return{type:N,value:e}},R=n(124),G=(n(148),n(112)),L=n.n(G);function q(e){var t=e.active,n=e.id,c=Object(o.c)((function(e){return e.player})),u=Object(o.c)((function(e){return e.gameStart})),l=Object(o.c)((function(e){return e.gameActiveArea})),s=Object(o.c)((function(e){return e.score})),m=Object(o.b)(),f=Object(a.useState)("0px"),g=Object(i.a)(f,2),v=g[0],b=g[1],p=Object(a.useState)(""),d=Object(i.a)(p,2),O=d[0],h=d[1],y=Object(a.useState)(Math.floor(Math.pow(c.game_settings.field,2)/2)),S=Object(i.a)(y,2),_=S[0],A=S[1],w=function(){b("".concat(L()(L()(".game-field_square")[0]).width(),"px"))};Object(a.useEffect)((function(){w(),A(Math.floor(Math.pow(c.game_settings.field,2)/2))}),[c]),Object(a.useEffect)((function(){h("")}),[u]),Object(a.useEffect)((function(){return window.addEventListener("resize",w),function(){window.removeEventListener("resize",w)}}),[]);var N=c.game_settings.field,x=function(e,t){m(C({message:e,color:t})),setTimeout((function(){m(C({message:"",color:""}))}),3e3)};return r.a.createElement("div",{className:"game-field_square \n         ".concat(u?O?"game-field_square-"+O:"":null,"\n         ").concat(t?"game-field_square-active":"","\n         "),style:{height:v,width:"calc(100% / ".concat(N," - 10px)")},onClick:function(){if(u){var e=Object(R.a)(l).filter((function(e){return e!==n}));if(m(M(e)),t?(s.player+=1,h("player")):(s.computer+=1,h("computer")),m(I(s)),s.player===_){m(k(!1)),m(I({player:0,computer:0})),x("Congratulation! ".concat(c.name," win this game!"),"green");var a={name:c.name,date:E(new Date)};j("/api/winners",[a]).then((function(e){return m(T(e))})).catch((function(e){return console.error(e)}))}else s.computer===_&&(m(k(!1)),m(I({player:0,computer:0})),x("Sorry, but ".concat(c.name," lose"),"red"))}}})}function P(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(o.c)((function(e){return e.player})),l=Object(o.c)((function(e){return e.gameArea})),s=Object(o.c)((function(e){return e.gameActiveArea})),m=Object(o.c)((function(e){return e.gameStart})),f=Object(o.b)(),g=Object(a.useRef)();return Object(a.useEffect)((function(){u.game_settings&&(clearInterval(g.current),m?g.current=setInterval((function(){for(var e=Math.floor(Math.random()*s.length);n===s[e];)c(null),e=Math.floor(Math.random()*s.length);c(s[e])}),u.game_settings.delay):(clearInterval(g.current),f(M(l)),c(null)))}),[m,s]),r.a.createElement("div",{className:"game-field_game"},l&&l.map((function(e,t){return r.a.createElement(q,{active:t===n,id:e,key:e})})))}function D(){var e=Object(o.c)((function(e){return e.alert_message})),t=e.message,n=e.color;return r.a.createElement("div",{className:"game-field_congrats"},r.a.createElement("span",{style:{color:n}},t))}function F(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(o.c)((function(e){return e.gameSettings})),l=Object(o.c)((function(e){return e.gameStart})),v=Object(o.c)((function(e){return e.player})),b=Object(o.b)();return u?r.a.createElement("div",{className:"game-field"},r.a.createElement("div",{className:"game-field_controls"},r.a.createElement(m.a,{placeholder:"Pick game mode",options:u,onChange:function(e,t){var n=t.value,a=t.options,r=a?a.find((function(e){return e.value===n})):5;v.game_settings=r,b(x(v)),b(function(e){return{type:y,value:e}}(function(e){var t=[];e=Math.pow(e,2);for(var n=0;n<e;n++)t.push(n);return t}(r.field)))},disabled:l}),r.a.createElement(f.a,{placeholder:"Enter your name",className:"game-field_input",disabled:l,value:n,onChange:function(e){c(e.target.value)}}),r.a.createElement(g.a,{content:"".concat(l?"Stop":"Play"),onClick:function(){if(""===n||!v.game_settings)return b(C({message:"Fill in all the details above",color:"red"})),void setTimeout((function(){b(C({message:"",color:""}))}),3e3);v.name=n,b(x(v)),b(k(!l)),b(I({player:0,computer:0}))}})),r.a.createElement(D,null),r.a.createElement(P,null)):r.a.createElement("div",{className:"game-field"},r.a.createElement(s.a,{active:!0,inline:"centered"}))}n(151);function J(){var e=Object(o.c)((function(e){return e.winners}));return e?r.a.createElement("div",{className:"game-board"},0!==e.length&&r.a.createElement("span",{className:"game-board_title"},"Leader Board"),r.a.createElement("div",{className:"game-board_playersGroup"},e.map((function(e){var t=e.name,n=e.date;return r.a.createElement("div",{className:"game-board_player",key:n},r.a.createElement("span",{className:"name"},t),r.a.createElement("span",{className:"date"},n))})))):r.a.createElement("div",{className:"game-board"},r.a.createElement(s.a,{active:!0,inline:"centered"}))}var z=function(){var e=Object(o.b)();return Object(a.useEffect)((function(){d("/api/game-settings").then((function(t){var n;e((n=t.map((function(e,t){return e.key=t,e})),{type:O,value:n}))})).catch((function(e){return console.error(e)})),j("/api/winners").then((function(t){e(T(t))})).catch((function(e){return console.error(e)}))}),[]),r.a.createElement(l.a,null,r.a.createElement("div",{className:"main"},r.a.createElement(F,null),r.a.createElement(J,null)))},B=n(13),Y=n(80),H={gameSettings:null,gameArea:null,gameActiveArea:null,gameStart:!1,player:{name:"",game_settings:null},alert_message:{message:"",color:""},score:{computer:0,player:0},winners:null},U=Object(Y.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(B.a)(Object(B.a)({},e),{},{gameSettings:t.value});case y:return Object(B.a)(Object(B.a)({},e),{},{gameArea:t.value,gameActiveArea:t.value});case S:return Object(B.a)(Object(B.a)({},e),{},{gameActiveArea:t.value});case _:return Object(B.a)(Object(B.a)({},e),{},{gameStart:t.value});case A:return Object(B.a)(Object(B.a)({},e),{},{player:Object(B.a)({},t.value)});case w:return Object(B.a)(Object(B.a)({},e),{},{alert_message:Object(B.a)({},t.value)});case N:return Object(B.a)(Object(B.a)({},e),{},{score:Object(B.a)({},t.value)});case h:return Object(B.a)(Object(B.a)({},e),{},{winners:t.value});default:return e}}));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:U},r.a.createElement(z,null))),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.12ddf74e.chunk.js.map