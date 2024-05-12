(()=>{"use strict";var n={958:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nform button,\nlabel,\ninput,\nselect,\nprogress,\nmeter {\n  display: block;\n  font-family: inherit;\n  font-size: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n/* End of Custom reset*/\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  min-height: 100vh;\n}\n\n.container {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n.container > div {\n  margin-bottom: 2rem;\n}\n\n.boards {\n  display: flex;\n  gap: 1rem;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n\n.board-space > .text {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.board-space > .board {\n  border: 4px solid black;\n  width: 500px;\n  height: 500px;\n\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.board > .cell {\n  border: 1px solid black;\n  background-color: #ffffff;\n}\n\n.enemy-board > .cell:hover {\n  background-color: #cccccc;\n}\n\n.board > .cell.water {\n  background-color: #999999;\n}\n\n.board > .cell.ship {\n  background-color: #ff0000;\n}\n\n.board > .cell.ship-not-hit {\n  background-color: #00ff00;\n}\n\n.game-state {\n  display: flex;\n}\n\n.game-state > div {\n  border: 4px solid black;\n  padding: 1rem;\n  height: 5rem;\n  flex: 1;\n  font-size: 2rem;\n  font-weight: bold;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n',""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),a=t.n(r),o=t(659),i=t.n(o),s=t(56),c=t.n(s),l=t(540),d=t.n(l),u=t(113),p=t.n(u),m=t(958),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),e()(m.A,h),m.A&&m.A.locals&&m.A.locals;const f=class{#n;#e;#t;constructor(n,e){if("number"!=typeof n)throw new Error("Ship class expects a numeric length!");if("string"!=typeof e)throw new Error("Ship class expects a name!");this.#n=n,this.#e=0,this.#t=e}get length(){return this.#n}get hits(){return this.#e}get name(){return this.#t}hit(){this.#e+=1}isSunk(){return!(this.hits<this.length)}};function b(n){return!("number"!=typeof n[0]||n[0]>9||n[0]<0||"number"!=typeof n[1]||n[1]>9||n[1]<0)}const g=class{constructor(){this.gameboard=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]}placeShip(n,e,t,r){if(!b(n)||"number"!=typeof e||e<1||!["horizontal","vertical"].includes(t)||"string"!=typeof r)return!1;const a=[];for(let r=0;r<e;r++){const e=[];if("horizontal"===t?e.push(n[0],n[1]+r):e.push(n[0]+r,n[1]),!b(e)||0!==this.gameboard[e[0]][e[1]])return!1;a.push(e)}const o=new f(e,r);return a.forEach((n=>{this.gameboard[n[0]][n[1]]={ship:o,hit:!1}})),!0}receiveAttack(n){if(!b(n))return null;const e=this.gameboard[n[0]][n[1]];return"object"==typeof e?!1===e.hit?(e.hit=!0,e.ship.hit(),!0):null:0===e?(this.gameboard[n[0]][n[1]]=1,!1):null}areAllShipsSunk(){for(const n of this.gameboard)for(const e of n)if("object"==typeof e&&!1===e.hit)return!1;return!0}};class v{#t;constructor(n){if("string"!=typeof n)throw new Error("Name of the player must be specified!");this.#t=n,this.gameboard=new g}get name(){return this.#t}}class y extends v{constructor(n){super(n),this.moves=[]}randomCoordinates(){return[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}}const x=v,k=function(n,e){const t=document.querySelector(".board-space > .current-board"),r=document.querySelector(".board-space > .enemy-board");t.textContent="",r.textContent="";for(let e=0;e<n.length;e++)for(let r=0;r<n[e].length;r++){const a=n[e][r],o=document.createElement("div");o.classList.add("cell"),o.dataset.coordinates=`${e},${r}`,1===a?o.classList.add("water"):"object"==typeof a&&(!1===a.hit?o.classList.add("ship-not-hit"):o.classList.add("ship")),t.appendChild(o)}for(let n=0;n<e.length;n++)for(let t=0;t<e[n].length;t++){const a=e[n][t],o=document.createElement("div");o.classList.add("cell"),o.dataset.coordinates=`${n},${t}`,1===a?o.classList.add("water"):"object"==typeof a&&a.hit&&o.classList.add("ship"),r.appendChild(o)}},S=function(n,e,t){const r=document.querySelector(".game-state > .turn"),a=document.querySelector(".game-state > .game-event");r.textContent=`${e.name}'s Turn`,t.hit?a.textContent=`${n.name} hit the ${t.hit}!`:t.sunk?a.textContent=`${n.name} sunk the ${t.sunk}!`:a.textContent=`${n.name} missed!`};!function(){const n=new x("1"),e=new y("Computer");document.querySelector(".game-state > .turn").textContent=`${n.name}'s Turn`,n.gameboard.placeShip([0,0],2,"horizontal","Patrol Boat"),n.gameboard.placeShip([1,0],3,"horizontal","Submarine"),n.gameboard.placeShip([2,0],3,"horizontal","Destroyer"),n.gameboard.placeShip([0,9],4,"vertical","Battleship"),n.gameboard.placeShip([3,0],5,"horizontal","Carrier"),n.gameboard.receiveAttack([0,0]),n.gameboard.receiveAttack([0,1]),n.gameboard.receiveAttack([0,2]),n.gameboard.receiveAttack([0,0]),e.gameboard.placeShip([0,0],2,"horizontal","Patrol Boat"),e.gameboard.placeShip([1,0],3,"horizontal","Submarine"),e.gameboard.placeShip([2,0],3,"horizontal","Destroyer"),e.gameboard.placeShip([0,9],4,"vertical","Battleship"),e.gameboard.placeShip([3,0],5,"horizontal","Carrier"),e.gameboard.receiveAttack([0,8]),e.gameboard.receiveAttack([8,2]),e.gameboard.receiveAttack([3,3]),e.gameboard.receiveAttack([6,4]),k(n.gameboard.gameboard,e.gameboard.gameboard);const t={turn:n};document.querySelector(".boards > .board-space > .enemy-board").addEventListener("click",(r=>{r.target.classList.contains("cell")&&function(n,e,t,r){if(e.turn!==t)return;const a=r.gameboard.receiveAttack(n),o={};if(null!==a){if(!0===a){const e=r.gameboard.gameboard[n[0]][n[1]].ship;e.isSunk()?o.sunk=e.name:o.hit=e.name}S(t,r,o),e.turn=r,k(t.gameboard.gameboard,r.gameboard.gameboard),function(n,e,t){const r={};let a=[],o=null;do{a=t.randomCoordinates(),o=e.gameboard.receiveAttack(a)}while(null===o);if(!0===o){const n=e.gameboard.gameboard[a[0]][a[1]].ship;n.isSunk()?r.sunk=n.name:r.hit=n.name}S(t,e,r),n.turn=e,k(e.gameboard.gameboard,t.gameboard.gameboard)}(e,t,r)}}(r.target.dataset.coordinates.split(",").map((n=>parseInt(n))),t,n,e)}))}()})()})();