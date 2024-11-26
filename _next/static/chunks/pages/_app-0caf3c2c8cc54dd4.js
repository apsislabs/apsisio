(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(y,T,c){"use strict";var h,m;y.exports=(h=c.g.process)!=null&&h.env&&typeof((m=c.g.process)==null?void 0:m.env)=="object"?c.g.process:c(7663)},6840:function(y,T,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(3893)}])},477:function(y,T,c){"use strict";var h=c(3454);c(1479);var m=c(7294),f=m&&typeof m=="object"&&"default"in m?m:{default:m},l=h!==void 0&&h.env&&!0,d=function(r){return Object.prototype.toString.call(r)==="[object String]"},i=function(){function r(e){var t=e===void 0?{}:e,a=t.name,u=a===void 0?"stylesheet":a,p=t.optimizeForSpeed,x=p===void 0?l:p;s(d(u),"`name` must be a string"),this._name=u,this._deletedRulePlaceholder="#"+u+"-deleted-rule____{}",s(typeof x=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=x,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var R=document.querySelector('meta[property="csp-nonce"]');this._nonce=R?R.getAttribute("content"):null}var n=r.prototype;return n.setOptimizeForSpeed=function(e){s(typeof e=="boolean","`setOptimizeForSpeed` accepts a boolean"),s(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(l||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,a){return typeof a=="number"?e._serverSheet.cssRules[a]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),a},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(s(d(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var a=this.getSheet();typeof t!="number"&&(t=a.cssRules.length);try{a.insertRule(e,t)}catch{return l||console.warn(`StyleSheet: illegal rule: 

`+e+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var u=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,u))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var a=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!a.cssRules[e])return e;a.deleteRule(e);try{a.insertRule(t,e)}catch{l||console.warn(`StyleSheet: illegal rule: 

`+t+`

See https://stackoverflow.com/q/20007992 for more info`),a.insertRule(this._deletedRulePlaceholder,e)}}else{var u=this._tags[e];s(u,"old rule at index `"+e+"` not found"),u.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,a){return a?t=t.concat(Array.prototype.map.call(e.getSheetForTag(a).cssRules,function(u){return u.cssText===e._deletedRulePlaceholder?null:u})):t.push(null),t},[])},n.makeStyleTag=function(e,t,a){t&&s(d(t),"makeStyleTag accepts only strings as second parameter");var u=document.createElement("style");this._nonce&&u.setAttribute("nonce",this._nonce),u.type="text/css",u.setAttribute("data-"+e,""),t&&u.appendChild(document.createTextNode(t));var p=document.head||document.getElementsByTagName("head")[0];return a?p.insertBefore(u,a):p.appendChild(u),u},function(e,t){for(var a=0;a<t.length;a++){var u=t[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}(r.prototype,[{key:"length",get:function(){return this._rulesCount}}]),r}();function s(r,n){if(!r)throw Error("StyleSheet: "+n+".")}var b=function(r){for(var n=5381,e=r.length;e;)n=33*n^r.charCodeAt(--e);return n>>>0},_={};function g(r,n){if(!n)return"jsx-"+r;var e=String(n),t=r+e;return _[t]||(_[t]="jsx-"+b(r+"-"+e)),_[t]}function v(r,n){var e=r+n;return _[e]||(_[e]=n.replace(/__jsx-style-dynamic-selector/g,r)),_[e]}var S=function(){function r(e){var t=e===void 0?{}:e,a=t.styleSheet,u=a===void 0?null:a,p=t.optimizeForSpeed,x=p!==void 0&&p;this._sheet=u||new i({name:"styled-jsx",optimizeForSpeed:x}),this._sheet.inject(),u&&typeof x=="boolean"&&(this._sheet.setOptimizeForSpeed(x),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var n=r.prototype;return n.add=function(e){var t=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(R,z){return R[z]=0,R},{}));var a=this.getIdAndRules(e),u=a.styleId,p=a.rules;if(u in this._instancesCounts){this._instancesCounts[u]+=1;return}var x=p.map(function(R){return t._sheet.insertRule(R)}).filter(function(R){return R!==-1});this._indices[u]=x,this._instancesCounts[u]=1},n.remove=function(e){var t=this,a=this.getIdAndRules(e).styleId;if(function(p,x){if(!p)throw Error("StyleSheetRegistry: "+x+".")}(a in this._instancesCounts,"styleId: `"+a+"` not found"),this._instancesCounts[a]-=1,this._instancesCounts[a]<1){var u=this._fromServer&&this._fromServer[a];u?(u.parentNode.removeChild(u),delete this._fromServer[a]):(this._indices[a].forEach(function(p){return t._sheet.deleteRule(p)}),delete this._indices[a]),delete this._instancesCounts[a]}},n.update=function(e,t){this.add(t),this.remove(e)},n.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},n.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(u){return[u,e._fromServer[u]]}):[],a=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(u){return[u,e._indices[u].map(function(p){return a[p].cssText}).join(e._optimizeForSpeed?"":`
`)]}).filter(function(u){return!!u[1]}))},n.styles=function(e){var t,a;return t=this.cssRules(),(a=e)===void 0&&(a={}),t.map(function(u){var p=u[0],x=u[1];return f.default.createElement("style",{id:"__"+p,key:"__"+p,nonce:a.nonce?a.nonce:void 0,dangerouslySetInnerHTML:{__html:x}})})},n.getIdAndRules=function(e){var t=e.children,a=e.dynamic,u=e.id;if(a){var p=g(u,a);return{styleId:p,rules:Array.isArray(t)?t.map(function(x){return v(p,x)}):[v(p,t)]}}return{styleId:g(u),rules:Array.isArray(t)?t:[t]}},n.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},r}(),F=m.createContext(null);F.displayName="StyleSheetContext";var C=f.default.useInsertionEffect||f.default.useLayoutEffect,E=new S;function o(r){var n=E||m.useContext(F);return n&&C(function(){return n.add(r),function(){n.remove(r)}},[r.id,String(r.dynamic)]),null}o.dynamic=function(r){return r.map(function(n){return g(n[0],n[1])}).join(" ")},T.style=o},1822:function(y,T,c){"use strict";y.exports=c(477).style},3893:function(y,T,c){"use strict";c.r(T),c.d(T,{default:function(){return r},inter:function(){return f.a},mono:function(){return d.a}});var h=c(5893),m=c(4450),f=c.n(m),l=c(4485),d=c.n(l),i=c(1822),s=c.n(i),b=c(1163),_=c.n(b),g=c(4298),v=c.n(g),S=c(4865),F=c.n(S),C=c(1221),E=c.n(C);c(204),c(8199);var o=c(7294);function r(n){let{Component:e,pageProps:t}=n;return(0,o.useEffect)(()=>{E()().listen()},[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s(),{id:"1419fc74709a57c6",dynamic:[f().style.fontFamily,d().style.fontFamily],children:":root{--font-inter:".concat(f().style.fontFamily,";--font-mono:").concat(d().style.fontFamily,"}")}),(0,h.jsx)(v(),{defer:!0,"data-domain":"apsis.io",src:"https://plausible.io/js/script.js"}),(0,h.jsx)("meta",{name:"theme-color",media:"(prefers-color-scheme: light)",content:"#2173aa",className:s().dynamic([["1419fc74709a57c6",[f().style.fontFamily,d().style.fontFamily]]])}),(0,h.jsx)("meta",{name:"theme-color",media:"(prefers-color-scheme: dark)",content:"#2c3e50",className:s().dynamic([["1419fc74709a57c6",[f().style.fontFamily,d().style.fontFamily]]])}),(0,h.jsx)(e,{...t,className:s().dynamic([["1419fc74709a57c6",[f().style.fontFamily,d().style.fontFamily]]])+" "+(t&&t.className!=null&&t.className||"")})]})}_().events.on("routeChangeStart",()=>F().start()),_().events.on("routeChangeComplete",()=>F().done()),_().events.on("routeChangeError",()=>F().done())},1479:function(){},204:function(){},8199:function(){},4485:function(y){y.exports={style:{fontFamily:"'__IBM_Plex_Mono_191acc', '__IBM_Plex_Mono_Fallback_191acc'"},className:"__className_191acc"}},4450:function(y){y.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},7663:function(y){(function(){var T={229:function(f){var l,d,i,s=f.exports={};function b(){throw Error("setTimeout has not been defined")}function _(){throw Error("clearTimeout has not been defined")}function g(n){if(l===setTimeout)return setTimeout(n,0);if((l===b||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch{try{return l.call(null,n,0)}catch{return l.call(this,n,0)}}}(function(){try{l=typeof setTimeout=="function"?setTimeout:b}catch{l=b}try{d=typeof clearTimeout=="function"?clearTimeout:_}catch{d=_}})();var v=[],S=!1,F=-1;function C(){S&&i&&(S=!1,i.length?v=i.concat(v):F=-1,v.length&&E())}function E(){if(!S){var n=g(C);S=!0;for(var e=v.length;e;){for(i=v,v=[];++F<e;)i&&i[F].run();F=-1,e=v.length}i=null,S=!1,function(t){if(d===clearTimeout)return clearTimeout(t);if((d===_||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{d(t)}catch{try{return d.call(null,t)}catch{return d.call(this,t)}}}(n)}}function o(n,e){this.fun=n,this.array=e}function r(){}s.nextTick=function(n){var e=Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];v.push(new o(n,e)),v.length!==1||S||g(E)},o.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=r,s.addListener=r,s.once=r,s.off=r,s.removeListener=r,s.removeAllListeners=r,s.emit=r,s.prependListener=r,s.prependOnceListener=r,s.listeners=function(n){return[]},s.binding=function(n){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(n){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},c={};function h(f){var l=c[f];if(l!==void 0)return l.exports;var d=c[f]={exports:{}},i=!0;try{T[f](d,d.exports,h),i=!1}finally{i&&delete c[f]}return d.exports}h.ab="//";var m=h(229);y.exports=m})()},1163:function(y,T,c){y.exports=c(9090)},4298:function(y,T,c){y.exports=c(2892)},4865:function(y,T,c){var h,m;(m=typeof(h=function(){var f,l,d,i={};i.version="0.2.0";var s=i.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function b(o,r,n){return o<r?r:o>n?n:o}i.configure=function(o){var r,n;for(r in o)(n=o[r])!==void 0&&o.hasOwnProperty(r)&&(s[r]=n);return this},i.status=null,i.set=function(o){var r=i.isStarted();o=b(o,s.minimum,1),i.status=o===1?null:o;var n=i.render(!r),e=n.querySelector(s.barSelector),t=s.speed,a=s.easing;return n.offsetWidth,_(function(u){var p,x;s.positionUsing===""&&(s.positionUsing=i.getPositioningCSS()),g(e,(p=o,(x=s.positionUsing==="translate3d"?{transform:"translate3d("+(-1+p)*100+"%,0,0)"}:s.positionUsing==="translate"?{transform:"translate("+(-1+p)*100+"%,0)"}:{"margin-left":(-1+p)*100+"%"}).transition="all "+t+"ms "+a,x)),o===1?(g(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){g(n,{transition:"all "+t+"ms linear",opacity:0}),setTimeout(function(){i.remove(),u()},t)},t)):setTimeout(u,t)}),this},i.isStarted=function(){return typeof i.status=="number"},i.start=function(){i.status||i.set(0);var o=function(){setTimeout(function(){i.status&&(i.trickle(),o())},s.trickleSpeed)};return s.trickle&&o(),this},i.done=function(o){return o||i.status?i.inc(.3+.5*Math.random()).set(1):this},i.inc=function(o){var r=i.status;return r?(typeof o!="number"&&(o=(1-r)*b(Math.random()*r,.1,.95)),r=b(r+o,0,.994),i.set(r)):i.start()},i.trickle=function(){return i.inc(Math.random()*s.trickleRate)},f=0,l=0,i.promise=function(o){return o&&o.state()!=="resolved"&&(l===0&&i.start(),f++,l++,o.always(function(){--l==0?(f=0,i.done()):i.set((f-l)/f)})),this},i.render=function(o){if(i.isRendered())return document.getElementById("nprogress");S(document.documentElement,"nprogress-busy");var r=document.createElement("div");r.id="nprogress",r.innerHTML=s.template;var n,e=r.querySelector(s.barSelector),t=o?"-100":(-1+(i.status||0))*100,a=document.querySelector(s.parent);return g(e,{transition:"all 0 linear",transform:"translate3d("+t+"%,0,0)"}),!s.showSpinner&&(n=r.querySelector(s.spinnerSelector))&&E(n),a!=document.body&&S(a,"nprogress-custom-parent"),a.appendChild(r),r},i.remove=function(){F(document.documentElement,"nprogress-busy"),F(document.querySelector(s.parent),"nprogress-custom-parent");var o=document.getElementById("nprogress");o&&E(o)},i.isRendered=function(){return!!document.getElementById("nprogress")},i.getPositioningCSS=function(){var o=document.body.style,r="WebkitTransform"in o?"Webkit":"MozTransform"in o?"Moz":"msTransform"in o?"ms":"OTransform"in o?"O":"";return r+"Perspective"in o?"translate3d":r+"Transform"in o?"translate":"margin"};var _=(d=[],function(o){d.push(o),d.length==1&&function r(){var n=d.shift();n&&n(r)}()}),g=function(){var o=["Webkit","O","Moz","ms"],r={};function n(e,t,a){var u;t=r[u=(u=t).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(p,x){return x.toUpperCase()})]||(r[u]=function(p){var x=document.body.style;if(p in x)return p;for(var R,z=o.length,j=p.charAt(0).toUpperCase()+p.slice(1);z--;)if((R=o[z]+j)in x)return R;return p}(u)),e.style[t]=a}return function(e,t){var a,u,p=arguments;if(p.length==2)for(a in t)(u=t[a])!==void 0&&t.hasOwnProperty(a)&&n(e,a,u);else n(e,p[1],p[2])}}();function v(o,r){return(typeof o=="string"?o:C(o)).indexOf(" "+r+" ")>=0}function S(o,r){var n=C(o),e=n+r;v(n,r)||(o.className=e.substring(1))}function F(o,r){var n,e=C(o);v(o,r)&&(n=e.replace(" "+r+" "," "),o.className=n.substring(1,n.length-1))}function C(o){return(" "+(o.className||"")+" ").replace(/\s+/gi," ")}function E(o){o&&o.parentNode&&o.parentNode.removeChild(o)}return i})=="function"?h.call(T,c,T,y):h)!==void 0&&(y.exports=m)},1221:function(y){var T;T=function(){return function(c){function h(f){if(m[f])return m[f].exports;var l=m[f]={i:f,l:!1,exports:{}};return c[f].call(l.exports,l,l.exports,h),l.l=!0,l.exports}var m={};return h.m=c,h.c=m,h.d=function(f,l,d){h.o(f,l)||Object.defineProperty(f,l,{configurable:!1,enumerable:!0,get:d})},h.n=function(f){var l=f&&f.__esModule?function(){return f.default}:function(){return f};return h.d(l,"a",l),l},h.o=function(f,l){return Object.prototype.hasOwnProperty.call(f,l)},h.p="",h(h.s=3)}([function(c,h,m){"use strict";var f=m(1);c.exports=function(l,d){return d=d||{},f.forEach(function(i){var s=typeof i[1]=="function"?i[1](d.retainLength):i[1];l=l.replace(i[0],s)}),l}},function(c){"use strict";c.exports=[[/'''/g,function(h){return"\u2034"+(h?"\u2063\u2063":"")}],[/(\W|^)"(\w)/g,"$1\u201C$2"],[/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g,"$1\u201D$2"],[/([^0-9])"/g,"$1\u201D"],[/''/g,function(h){return"\u2033"+(h?"\u2063":"")}],[/(\W|^)'(\S)/g,"$1\u2018$2"],[/([a-z0-9])'([a-z])/ig,"$1\u2019$2"],[/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/ig,"\u2019$2$3"],[/((\u2018[^']*)|[a-z])'([^0-9]|$)/ig,"$1\u2019$3"],[/(\B|^)\u2018(?=([^\u2018\u2019]*\u2019\b)*([^\u2018\u2019]*\B\W[\u2018\u2019]\b|[^\u2018\u2019]*$))/ig,"$1\u2019"],[/"/g,"\u2033"],[/'/g,"\u2032"]]},function(c,h,m){"use strict";function f(i,s,b){return i.substr(b,s.length).replace("\u2063","")}var l=m(0),d=typeof Element<"u"&&Element.TEXT_NODE||3;c.exports=function(i){return function s(b){if(["CODE","PRE","SCRIPT","STYLE","NOSCRIPT"].indexOf(b.nodeName.toUpperCase())===-1){var _,g,v,S="",F=b.childNodes,C=[];for(_=0;_<F.length;_++)(g=F[_]).nodeType===d||g.nodeName==="#text"?(C.push([g,S.length]),S+=g.nodeValue||g.value):g.childNodes&&g.childNodes.length&&(S+=s(g));for(_ in S=l(S,{retainLength:!0}),C)(v=C[_])[0].nodeValue?v[0].nodeValue=f(S,v[0].nodeValue,v[1]):v[0].value&&(v[0].value=f(S,v[0].value,v[1]));return S}}(i),i}},function(c,h,m){"use strict";var f=m(1),l=m(2),d=m(4),i=m(0);c.exports=function s(b){return typeof document<"u"&&b===void 0?(d.runOnReady(function(){return l(document.body)}),s):typeof b=="string"?i(b):l(b)},c.exports.string=i,c.exports.element=l,c.exports.replacements=f,c.exports.listen=d},function(c,h,m){"use strict";function f(d){var i=new MutationObserver(function(s){s.forEach(function(b){var _,g=!0,v=!1;try{for(var S,F,C=b.addedNodes[Symbol.iterator]();!(g=(S=C.next()).done);g=!0)F=S.value,l(F)}catch(E){v=!0,_=E}finally{try{!g&&C.return&&C.return()}finally{if(v)throw _}}})});return f.runOnReady(function(){i.observe(d||document.body,{childList:!0,subtree:!0})}),i}var l=m(2);m(0),f.runOnReady=function(d){if(document.readyState!=="loading")d();else if(document.addEventListener)document.addEventListener("DOMContentLoaded",d,!1);else var i=setInterval(function(){document.readyState!=="loading"&&(clearInterval(i),d())},10)},c.exports=f}])},y.exports=T()}},function(y){var T=function(c){return y(y.s=c)};y.O(0,[774,179],function(){return T(6840),T(9090)}),_N_E=y.O()}]);
