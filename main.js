/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,r,e)=>{var n=e(698).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var r={},e=Object.prototype,a=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=E(i,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,i),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p={};function d(){}function v(){}function y(){}var m={};h(m,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(S([])));w&&w!==e&&a.call(w,c)&&(m=w);var x=y.prototype=d.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(o,i,c,u){var s=f(t[o],t,i);if("throw"!==s.type){var h=s.arg,l=h.value;return l&&"object"==n(l)&&a.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(l).then((function(t){h.value=t,c(h)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function E(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(a.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=y,h(x,"constructor",y),h(y,"constructor",v),v.displayName=h(y,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},b(L.prototype),h(L.prototype,u,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new L(l(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(x),h(x,s,"Generator"),h(x,c,(function(){return this})),h(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:S(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,r,e)=>{var n=e(61)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";function t(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function r(r){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=r.apply(e,n);function c(r){t(i,o,a,c,u,"next",r)}function u(r){t(i,o,a,c,u,"throw",r)}c(void 0)}))}}var n=e(687),o=e.n(n);var a="https://rickandmortyapi.com/api/character/";const i=function(){var t=r(o().mark((function t(r){var e,n,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r?"".concat(a).concat(r):a,t.prev=1,t.next=4,fetch(e);case 4:return n=t.sent,i=n.json(),t.abrupt("return",i);case 9:t.prev=9,t.t0=t.catch(1),console.log("Fetch error",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(r){return t.apply(this,arguments)}}(),c=function(){return location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"},u=function(){return'\n        <div class="error-404">\n            <h2>Error 404</h2>\n        </div>\n    '},s=function(t){return t.length<=3?"/"===t?t:"/:id":"/".concat(t)};var h={"/":function(){var t=r(o().mark((function t(){var r,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i();case 2:return r=t.sent,e='\n        <div class="characters">\n        '.concat(r.results.map((function(t){return'\n            <article class="character-item">\n                <a href=\'#/'.concat(t.id,"'/>\n                    <img src=\"").concat(t.image,'" alt="').concat(t.name,'"/>\n                    <h2>').concat(t.name,"</h2>\n                </a>\n            </article>\n        ")})).join(""),";\n        </div>\n    "),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),"/:id":function(){var t=r(o().mark((function t(){var r,e,n,a,u,s,h,l,f,p,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c(),t.next=3,i(r);case 3:return e=t.sent,n=e.name,a=e.status,u=e.species,s=e.gender,h=e.origin,l=e.image,f=e.location,p=e.episode,d='\n        <div class="characters-inner">\n            <article class="characters-card">\n                <img src="'.concat(l,'" alt="').concat(n,'">\n                <h2>').concat(n,'</h2>\n            </article>\n            <article class="characters-card">\n                <h3>Episodes: ').concat(p.length,"</h3>\n                <h3>Status: ").concat(a,"</h3>\n                <h3>Species: ").concat(u,"</h3>\n                <h3>Gender: ").concat(s,"</h3>\n                <h3>Origin: ").concat(h.name,"</h3>\n                <h3>Last Location: ").concat(f.name,"</h3>\n            </article>\n        </div>\n    "),t.abrupt("return",d);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),"/contact":"Contact"};const l=function(){var t=r(o().mark((function t(){var r,e,n,a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.getElementById("header"),e=document.getElementById("content"),t.next=4,'\n        <div class="header-main">\n            <div class="header-logo">\n                <h1>\n                    <a href="/">100tifi.co</a>\n                </h1>\n            </div>\n            <div class="header-nav">\n                <a href="#/about/">\n                    About\n                </a>\n            </div>\n        </div>\n    ';case 4:return r.innerHTML=t.sent,n=c(),t.next=8,s(n);case 8:return a=t.sent,i=h[a]?h[a]:u,t.next=12,i();case 12:e.innerHTML=t.sent;case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();window.addEventListener("load",l),window.addEventListener("hashchange",l)})()})();