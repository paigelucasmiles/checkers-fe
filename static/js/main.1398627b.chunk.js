(this["webpackJsonpcheckers-frontend"]=this["webpackJsonpcheckers-frontend"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),o=n(4),i=n.n(o),u=(n(10),n(11),n(2));n(12);function l(e){var t=e.pawnColor,n=e.turn,r=e.currentPlayerAction,o=e.coordinates,i=e.updateCurrentPlayerAction,l=e.selectedPawnLocation,s=e.updateSelectedPawnLocation,d=Object(a.useState)(!1),f=Object(u.a)(d,2),b=f[0],p=f[1];return Object(c.jsx)("div",{className:b?"red":t,onClick:function(e){n!==t||"click pawn"!==r||l?n===t&&"click square"===r&&l===o&&(e.stopPropagation(),p(!b),i(r),s(o,t)):(e.stopPropagation(),p(!b),i(r),s(o,t))}})}function s(e){var t=e.color,n=e.occupied,a=e.turn,r=e.currentPlayerAction,o=e.coordinates,i=e.updateCurrentPlayerAction,u=e.selectedPawnLocation,s=e.updateSelectedPawnLocation,d=e.legalMoves,f=e.movePawn;return Object(c.jsx)("div",{className:d.includes(o)?"blue":t,onClick:function(e){e.stopPropagation(),f(o,n)},children:"white"===n?Object(c.jsx)(l,{pawnColor:"white",turn:a,currentPlayerAction:r,updateCurrentPlayerAction:i,coordinates:o,selectedPawnLocation:u,updateSelectedPawnLocation:s}):"black"===n?Object(c.jsx)(l,{pawnColor:"black",turn:a,currentPlayerAction:r,updateCurrentPlayerAction:i,coordinates:o,selectedPawnLocation:u,updateSelectedPawnLocation:s}):void 0})}function d(e){var t=e.whitePawnPositions,n=e.blackPawnPositions,a=e.currentPlayerAction,r=e.legalMoves,o=e.turn,i=e.updateCurrentPlayerAction,u=e.selectedPawnLocation,l=e.updateSelectedPawnLocation,d=e.movePawn,f=function(e){return t.find((function(t){return t===e}))?"white":n.find((function(t){return t===e}))?"black":void 0};return Object(c.jsx)("div",{className:"board-container",children:function(){for(var e=new Array(8),t=0;t<e.length;t++)e[t]=new Array(8);for(var n=0;n<e.length;n++)for(var b=e[n].length,p=0;p<b;p++){var w=(n+p)%2===0?"beige":"green",h={0:"a",1:"b",2:"c",3:"d",4:"e",5:"f",6:"g",7:"h"},P={0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"7",7:"8"};e[n][p]=Object(c.jsx)(s,{coordinates:"".concat(h[p]).concat(P[n]),color:w,occupied:f("".concat(h[p]).concat(P[n])),turn:o,currentPlayerAction:a,legalMoves:r,updateCurrentPlayerAction:i,selectedPawnLocation:u,updateSelectedPawnLocation:l,movePawn:d},"".concat(n).concat(p))}return e}()})}function f(){var e=Object(a.useState)(["b1","d1","f1","h1","a2","c2","e2","g2","b3","d3","f3","h3"]),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(["a6","c6","e6","g6","b7","d7","f7","h7","a8","c8","e8","g8"]),i=Object(u.a)(o,2),l=i[0],s=i[1],f=Object(a.useState)("white"),b=Object(u.a)(f,2),p=b[0],w=b[1],h=Object(a.useState)("click pawn"),P=Object(u.a)(h,2),j=P[0],v=P[1],O={"click square":"click pawn","click pawn":"click square"},g=Object(a.useState)(""),k=Object(u.a)(g,2),C=k[0],S=k[1],A=Object(a.useState)([]),y=Object(u.a)(A,2),L=y[0],m=y[1],x=Object(a.useState)(""),M=Object(u.a)(x,2),F=M[0],I=M[1],N=Object(a.useState)(""),q=Object(u.a)(N,2),B=q[0],E=q[1],J=function(e,t){"white"===t&&T("white",e),"black"===t&&T("black",e)},T=function(e,t){var c=t.split("")[0].charCodeAt(0),a=parseInt(t.split("")[1]),r=String.fromCharCode(c-1),o=String.fromCharCode(c+1),i="white"===e?n:l,u="white"===e?l:n,s="white"===e?1:-1,d=a+1*s,f=[r.concat(d),o.concat(d)],b=f.filter((function(e){return u.includes(e)}));b&&(f=function(e,t,n,c,a){return e.forEach((function(e){var r=e.split("")[0].charCodeAt(0),o=t+2*(r-t),i=parseInt(n)+2*c,u=String.fromCharCode(o).concat(i);(a=a.filter((function(t){return t!==e}))).push(u),E(u)})),a}(b,c,a,s,f)),f=f.filter((function(e){return!1===u.includes(e)&&!1===i.includes(e)})),I(b),m(f),v(O[j])};return Object(c.jsx)("div",{children:Object(c.jsx)(d,{whitePawnPositions:n,blackPawnPositions:l,turn:p,currentPlayerAction:j,legalMoves:L,updateCurrentPlayerAction:function(e){v(O[e])},selectedPawnLocation:C,updateSelectedPawnLocation:function(e,t){e===C?(S(""),m([])):(S(e),J(e,t))},movePawn:function(e){if(L.find((function(t){return t===e})))if("white"===p){var t=n.filter((function(e){return e!==C}));if(t.push(e),"white"===p&&e===B){var c=l.filter((function(e){return!1===F.includes(e)}));console.log("filter black pieces"),s(c)}r(t),S(""),m([]),w("black"),v(O[j])}else if("black"===p){var a=l.filter((function(e){return e!==C}));if(a.push(e),"black"===p&&e===B){var o=n.filter((function(e){return!1===F.includes(e)}));console.log("filter White pieces"),r(o)}s(a),S(""),m([]),w("white"),v(O[j])}}})})}var b=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Checkers App"}),Object(c.jsx)(f,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),p()}],[[13,1,2]]]);
//# sourceMappingURL=main.1398627b.chunk.js.map