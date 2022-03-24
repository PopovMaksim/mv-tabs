!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(function(){return(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(81),s=r.n(n),a=r(645),o=r.n(a)()(s());o.push([e.id,"mv-tablist {\r\n  display: flex;\r\n}\r\n\r\nmv-tab {\r\n  padding: 3px 5px;\r\n}\r\nmv-tab:hover {\r\n  cursor: pointer;\r\n  color: #0000f1;\r\n}\r\nmv-tab[selected] {\r\n  color: #551aa9;\r\n  border-bottom: 2px solid #551aa9;\r\n}\r\n\r\nmv-tabpanel:not([hidden]) {\r\n  display: block;\r\n}\r\n",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,s,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&o[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},o=[],i=0;i<e.length;i++){var l=e[i],c=n.base?l[0]+n.base:l[0],u=a[c]||0,d="".concat(c," ").concat(u);a[c]=u+1;var b=r(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==b)t[b].references++,t[b].updater(f);else{var p=s(f,n);n.byIndex=i,t.splice(i,0,{identifier:d,updater:p,references:1})}o.push(d)}return o}function s(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,s){var a=n(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var i=r(a[o]);t[i].references--}for(var l=n(e,s),c=0;c<a.length;c++){var u=r(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var s=void 0!==r.layer;s&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,s&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{Tabs:()=>v});var e=r(379),t=r.n(e),s=r(795),a=r.n(s),o=r(569),i=r.n(o),l=r(565),c=r.n(l),u=r(216),d=r.n(u),b=r(589),f=r.n(b),p=r(426),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;class v extends HTMLElement{constructor(){super()}connectedCallback(){this.addEventListener("keydown",this._onKeyDown),this.addEventListener("click",this._onClick),Promise.all([customElements.whenDefined("mv-tablist"),customElements.whenDefined("mv-tab"),customElements.whenDefined("mv-tabpanel")]).then((()=>this.init()))}disconnectedCallback(){this.removeEventListener("keydown",this._onKeyDown),this.removeEventListener("click",this._onClick)}_tabList(){return this.querySelector("mv-tablist")}_tabAll(){return this.querySelectorAll("mv-tab")}_tabPanelsList(){return this.querySelectorAll("mv-tabpanel")}prevTab(){const e=Array.from(this._tabAll()),t=e.findIndex((e=>e.hasAttribute("selected")))-1;return e[(t+e.length)%e.length]}nextTab(){const e=Array.from(this._tabAll()),t=e.findIndex((e=>e.hasAttribute("selected")))+1;return e[t%e.length]}_reset(){const e=this._tabAll(),t=this._tabPanelsList();for(const t of e)t.selected=!1;for(const e of t)e.hidden=!0}_selectTab(e,t=!1){this._reset();const r=this._panelForSelectedTab(e);if(!r)throw new Error(`No panel with id ${newPanelId}`);e.selected=!0,r.hidden=!1,t&&e.focus()}init(){const e=this._tabAll(),t=this._tabPanelsList();let r=null;e.forEach(((e,n)=>{e.setAttribute("aria-controls",t[n].id),t[n].setAttribute("aria-labelledby",e.id),e.selected&&(r=e)})),this._selectTab(r||e[0])}_panelForSelectedTab(e){const t=e.getAttribute("aria-controls");return this.querySelector(`#${t}`)}_onKeyDown(e){if("tab"!==e.target.getAttribute("role"))return;if(e.altKey)return;let t;switch(e.keyCode){case 37:t=this.prevTab();break;case 39:t=this.nextTab();break;default:return}e.preventDefault(),this._selectTab(t,!0)}_onClick(e){"tab"===e.target.getAttribute("role")&&this._selectTab(e.target,!0)}}customElements.define("mv-tabs",v);class m extends HTMLElement{constructor(){super()}connectedCallback(){this.setAttribute("role","tablist")}}customElements.define("mv-tablist",m);let y=0;class g extends HTMLElement{static get observedAttributes(){return["selected"]}constructor(){super()}connectedCallback(){this.id||(this.id="tab-"+y++),this.setAttribute("role","tab"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-selected","false")}attributeChangedCallback(){const e=this.hasAttribute("selected");this.setAttribute("aria-selected",e),this.setAttribute("tabindex",e?0:-1)}set selected(e){(e=Boolean(e))?this.setAttribute("selected",""):this.removeAttribute("selected")}get selected(){return this.hasAttribute("selected")}}customElements.define("mv-tab",g);let x=0;class A extends HTMLElement{constructor(){super()}connectedCallback(){this.id||(this.id="tabpanel-"+x++),this.setAttribute("role","tabpanel"),this.setAttribute("tabindex","0")}}customElements.define("mv-tabpanel",A)})(),n})()}));