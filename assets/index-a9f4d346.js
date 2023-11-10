import"./main-dbe372d7.js";function we(e,t){return function(){return e.apply(t,arguments)}}const{toString:Je}=Object.prototype,{getPrototypeOf:Q}=Object,j=(e=>t=>{const n=Je.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),g=e=>(e=e.toLowerCase(),t=>j(t)===e),q=e=>t=>typeof t===e,{isArray:N}=Array,_=q("undefined");function Ve(e){return e!==null&&!_(e)&&e.constructor!==null&&!_(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ee=g("ArrayBuffer");function We(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ee(e.buffer),t}const Ke=q("string"),S=q("function"),Se=q("number"),k=e=>e!==null&&typeof e=="object",Ze=e=>e===!0||e===!1,B=e=>{if(j(e)!=="object")return!1;const t=Q(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Xe=g("Date"),Ge=g("File"),Ye=g("Blob"),Qe=g("FileList"),et=e=>k(e)&&S(e.pipe),tt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=j(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},nt=g("URLSearchParams"),rt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),N(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function Oe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Re=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ge=e=>!_(e)&&e!==Re;function K(){const{caseless:e}=ge(this)&&this||{},t={},n=(r,s)=>{const o=e&&Oe(t,s)||s;B(t[o])&&B(r)?t[o]=K(t[o],r):B(r)?t[o]=K({},r):N(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&L(arguments[r],n);return t}const st=(e,t,n,{allOwnKeys:r}={})=>(L(t,(s,o)=>{n&&S(s)?e[o]=we(s,n):e[o]=s},{allOwnKeys:r}),e),ot=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),it=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},at=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&Q(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ct=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ut=e=>{if(!e)return null;if(N(e))return e;let t=e.length;if(!Se(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},lt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Q(Uint8Array)),dt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},ft=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},pt=g("HTMLFormElement"),ht=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),oe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mt=g("RegExp"),Ae=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},yt=e=>{Ae(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},bt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return N(e)?r(e):r(String(e).split(t)),n},wt=()=>{},Et=(e,t)=>(e=+e,Number.isFinite(e)?e:t),M="abcdefghijklmnopqrstuvwxyz",ie="0123456789",xe={DIGIT:ie,ALPHA:M,ALPHA_DIGIT:M+M.toUpperCase()+ie},St=(e=16,t=xe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ot(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Rt=e=>{const t=new Array(10),n=(r,s)=>{if(k(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=N(r)?[]:{};return L(r,(i,u)=>{const d=n(i,s+1);!_(d)&&(o[u]=d)}),t[s]=void 0,o}}return r};return n(e,0)},gt=g("AsyncFunction"),At=e=>e&&(k(e)||S(e))&&S(e.then)&&S(e.catch),a={isArray:N,isArrayBuffer:Ee,isBuffer:Ve,isFormData:tt,isArrayBufferView:We,isString:Ke,isNumber:Se,isBoolean:Ze,isObject:k,isPlainObject:B,isUndefined:_,isDate:Xe,isFile:Ge,isBlob:Ye,isRegExp:mt,isFunction:S,isStream:et,isURLSearchParams:nt,isTypedArray:lt,isFileList:Qe,forEach:L,merge:K,extend:st,trim:rt,stripBOM:ot,inherits:it,toFlatObject:at,kindOf:j,kindOfTest:g,endsWith:ct,toArray:ut,forEachEntry:dt,matchAll:ft,isHTMLForm:pt,hasOwnProperty:oe,hasOwnProp:oe,reduceDescriptors:Ae,freezeMethods:yt,toObjectSet:bt,toCamelCase:ht,noop:wt,toFiniteNumber:Et,findKey:Oe,global:Re,isContextDefined:ge,ALPHABET:xe,generateString:St,isSpecCompliantForm:Ot,toJSONObject:Rt,isAsyncFn:gt,isThenable:At};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Te=m.prototype,Ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ce[e]={value:e}});Object.defineProperties(m,Ce);Object.defineProperty(Te,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Te);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const xt=null;function Z(e){return a.isPlainObject(e)||a.isArray(e)}function Ne(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ae(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ne(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Tt(e){return a.isArray(e)&&!e.some(Z)}const Ct=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,w){return!a.isUndefined(w[h])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!d&&a.isBlob(l))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?d&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function c(l,h,w){let A=l;if(l&&!w&&typeof l=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&Tt(l)||(a.isFileList(l)||a.endsWith(h,"[]"))&&(A=a.toArray(l)))return h=Ne(h),A.forEach(function(D,$e){!(a.isUndefined(D)||D===null)&&t.append(i===!0?ae([h],$e,o):i===null?h:h+"[]",f(D))}),!1}return Z(l)?!0:(t.append(ae(w,h,o),f(l)),!1)}const p=[],b=Object.assign(Ct,{defaultVisitor:c,convertValue:f,isVisitable:Z});function E(l,h){if(!a.isUndefined(l)){if(p.indexOf(l)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(l),a.forEach(l,function(A,O){(!(a.isUndefined(A)||A===null)&&s.call(t,A,a.isString(O)?O.trim():O,h,b))===!0&&E(A,h?h.concat(O):[O])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function ce(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ee(e,t){this._pairs=[],e&&z(e,this,t)}const Pe=ee.prototype;Pe.append=function(t,n){this._pairs.push([t,n])};Pe.toString=function(t){const n=t?function(r){return t.call(this,r,ce)}:ce;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Nt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _e(e,t,n){if(!t)return e;const r=n&&n.encode||Nt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ee(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Pt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ue=Pt,Le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_t=typeof URLSearchParams<"u"?URLSearchParams:ee,Lt=typeof FormData<"u"?FormData:null,Ft=typeof Blob<"u"?Blob:null,Dt={isBrowser:!0,classes:{URLSearchParams:_t,FormData:Lt,Blob:Ft},protocols:["http","https","file","blob","url","data"]},Fe=typeof window<"u"&&typeof document<"u",Bt=(e=>Fe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),It=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ut=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fe,hasStandardBrowserEnv:Bt,hasStandardBrowserWebWorkerEnv:It},Symbol.toStringTag,{value:"Module"})),R={...Ut,...Dt};function vt(e,t){return z(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function jt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function qt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function De(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=qt(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(jt(r),s,n,0)}),n}return null}function kt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const te={transitional:Le,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(De(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return vt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return z(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),kt(t)):t}],transformResponse:[function(t){const n=this.transitional||te.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{te.headers[e]={}});const ne=te,zt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ht=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&zt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},le=Symbol("internals");function P(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function Mt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const $t=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function $(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Jt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Vt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class H{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,d,f){const c=P(d);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(s,c);(!p||s[p]===void 0||f===!0||f===void 0&&s[p]!==!1)&&(s[p||d]=I(u))}const i=(u,d)=>a.forEach(u,(f,c)=>o(f,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!$t(t)?i(Ht(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=P(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Mt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=P(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||$(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=P(i),i){const u=a.findKey(r,i);u&&(!n||$(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||$(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=I(s),delete n[o];return}const u=t?Jt(o):String(o).trim();u!==o&&delete n[o],n[u]=I(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[le]=this[le]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=P(i);r[u]||(Vt(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}H.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(H.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(H);const x=H;function J(e,t){const n=this||ne,r=t||n,s=x.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Be(e){return!!(e&&e.__CANCEL__)}function F(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(F,m,{__CANCEL__:!0});function Wt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Kt=R.hasStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Zt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Xt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!Zt(t)?Xt(e,t):t}const Gt=R.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function Yt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Qt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),c=r[o];i||(i=f),n[s]=d,r[s]=f;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const E=c&&f-c;return E?Math.round(b*1e3/E):void 0}}function de(e,t){let n=0;const r=Qt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,d=r(u),f=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&f?(i-o)/d:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const en=typeof XMLHttpRequest<"u",tn=en&&function(e){return new Promise(function(n,r){let s=e.data;const o=x.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let f;if(a.isFormData(s)){if(R.hasStandardBrowserEnv||R.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[l,...h]=f?f.split(";").map(w=>w.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...h].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const l=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(l+":"+h))}const p=Ie(e.baseURL,e.url);c.open(e.method.toUpperCase(),_e(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const l=x.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:l,config:e,request:c};Wt(function(O){n(O),d()},function(O){r(O),d()},w),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Le;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new m(h,w.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},R.hasStandardBrowserEnv){const l=Gt(p)&&e.xsrfCookieName&&Kt.read(e.xsrfCookieName);l&&o.set(e.xsrfHeaderName,l)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(h,w){c.setRequestHeader(w,h)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",de(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",de(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=l=>{c&&(r(!l||l.type?new F(null,e,c):l),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const E=Yt(p);if(E&&R.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},X={http:xt,xhr:tn};a.forEach(X,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const fe=e=>`- ${e}`,nn=e=>a.isFunction(e)||e===null||e===!1,Ue={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!nn(n)&&(r=X[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([u,d])=>`adapter ${u} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(fe).join(`
`):" "+fe(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:X};function V(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new F(null,e)}function pe(e){return V(e),e.headers=x.from(e.headers),e.data=J.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ue.getAdapter(e.adapter||ne.adapter)(e).then(function(r){return V(e),r.data=J.call(e,e.transformResponse,r),r.headers=x.from(r.headers),r},function(r){return Be(r)||(V(e),r&&r.response&&(r.response.data=J.call(e,e.transformResponse,r.response),r.response.headers=x.from(r.response.headers))),Promise.reject(r)})}const he=e=>e instanceof x?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(f,c,p){return a.isPlainObject(f)&&a.isPlainObject(c)?a.merge.call({caseless:p},f,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(f,c,p){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f,p)}else return r(f,c,p)}function o(f,c){if(!a.isUndefined(c))return r(void 0,c)}function i(f,c){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,c)}function u(f,c,p){if(p in t)return r(f,c);if(p in e)return r(void 0,f)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(f,c)=>s(he(f),he(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=d[c]||s,b=p(e[c],t[c],c);a.isUndefined(b)&&p!==u||(n[c]=b)}),n}const ve="1.6.1",re={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{re[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const me={};re.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ve+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!me[i]&&(me[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function rn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],d=u===void 0||i(u,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const G={assertOptions:rn,validators:re},T=G.validators;class v{constructor(t){this.defaults=t,this.interceptors={request:new ue,response:new ue}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&G.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:G.assertOptions(s,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],l=>{delete o[l]}),n.headers=x.concat(i,o);const u=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const f=[];this.interceptors.response.forEach(function(h){f.push(h.fulfilled,h.rejected)});let c,p=0,b;if(!d){const l=[pe.bind(this),void 0];for(l.unshift.apply(l,u),l.push.apply(l,f),b=l.length,c=Promise.resolve(n);p<b;)c=c.then(l[p++],l[p++]);return c}b=u.length;let E=n;for(p=0;p<b;){const l=u[p++],h=u[p++];try{E=l(E)}catch(w){h.call(this,w);break}}try{c=pe.call(this,E)}catch(l){return Promise.reject(l)}for(p=0,b=f.length;p<b;)c=c.then(f[p++],f[p++]);return c}getUri(t){t=C(this.defaults,t);const n=Ie(t.baseURL,t.url);return _e(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){v.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(C(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}v.prototype[t]=n(),v.prototype[t+"Form"]=n(!0)});const U=v;class se{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new F(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new se(function(s){t=s}),cancel:t}}}const sn=se;function on(e){return function(n){return e.apply(null,n)}}function an(e){return a.isObject(e)&&e.isAxiosError===!0}const Y={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y).forEach(([e,t])=>{Y[t]=e});const cn=Y;function je(e){const t=new U(e),n=we(U.prototype.request,t);return a.extend(n,U.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return je(C(e,s))},n}const y=je(ne);y.Axios=U;y.CanceledError=F;y.CancelToken=sn;y.isCancel=Be;y.VERSION=ve;y.toFormData=z;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=on;y.isAxiosError=an;y.mergeConfig=C;y.AxiosHeaders=x;y.formToJSON=e=>De(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=Ue.getAdapter;y.HttpStatusCode=cn;y.default=y;const un=y,ye="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qa3VpZXZ1ZnJlZWZqd252dW9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTI5MzU5NywiZXhwIjoyMDE0ODY5NTk3fQ.XLifW8hovrcSmar-NZzTg1zUV9i6OBa5PDBazlPExrQ",ln="https://mjkuievufreefjwnvuos.supabase.co/rest/v1",dn=un.create({baseURL:ln,headers:{common:{apikey:ye,Authorization:`Bearer ${ye}`},post:{Prefer:"return=representation"},patch:{Prefer:"return=representation"}}});function W(e){return e/100}class qe{constructor(t,n,r,s){this.id=t,this.quantidade=n,this.valor=r,this.cc_for_unit=s}}function fn(e){return`<div id="card" data-product_id="${e.id}" class="shadow-inner rounded-lg space-y-8 mx-auto mb-4">
      <div id="tipo-preco" class="flex m-4 justify-between">
          <p class="font-semibold text-2xl">${e.name}</p>
          <p>R$ ${W(e.price)}/Litro</p>
      </div>
      <div class="flex space-x-8 mx-4 justify-between flex-wrap">
          <div class="space-y-2">
              <p class="text-md">Litros (L)</p>
              <input type="number" step="0.01" min="0" oninput="onChangeInputLitro(event, ${W(e.price)})" class="border-[--gasify-cinza] border-2 rounded-md p-2 " id="quantidade" placeholder="0"/>
              <div id="alertDiv-litro" class="alertDiv text-red-500 self-center mb-2 hidden"></div>
          </div>
          <div class="space-y-2">
              <p class="text-md">Valor (R$)</p>
              <input type="number" step="0.01" min="0" oninput="onChangeInputValor(event, ${W(e.price)})" class="border-[--gasify-cinza] border-2 rounded-md p-2" id="valor" placeholder="0,00"/>
              <div id="alertDiv-valor" class="alertDiv text-red-500 self-center mb-2 hidden"></div>
          </div>
      </div>
      <div id="cc-value" data-cc_for_unit="${e.cc_for_unit}" class="transition bg-[--gasify-cinza] w-[100%] mt-2 text-white text-center font-medium p-1 rounded-bl-md rounded-br-md">
          + ${e.cc_for_unit} CC por litro!
      </div></div>`}window.onChangeInputLitro=(e,t)=>{const n=e.target.closest("#card"),r=Number(e.target.value);if(r<0){e.target.classList.add("border-red-500"),ke(n.querySelector("#alertDiv-litro"),"Insira uma quantidade válida!");return}else e.target.classList.remove("border-red-500"),n.querySelector("#valor").classList.remove("border-red-500"),ze(n);const s=n.querySelector("#valor"),o=r*t;s.value=o.toFixed(2),He(n,r),Me(new qe(n.dataset.product_id,r,o,Number(n.querySelector("#cc-value").dataset.cc_for_unit)))};window.onChangeInputValor=(e,t)=>{const n=e.target.closest("#card"),r=Number(e.target.value);if(r<0){e.target.classList.add("border-red-500"),ke(n.querySelector("#alertDiv-valor"),"Insira um valor válido!");return}else e.target.classList.remove("border-red-500"),n.querySelector("#quantidade").classList.remove("border-red-500"),ze(n);const s=n.querySelector("#quantidade"),o=r/t;s.value=o.toFixed(2),He(e.target.closest("#card"),o),Me(new qe(n.dataset.product_id,o,r,Number(n.querySelector("#cc-value").dataset.cc_for_unit)))};function ke(e,t){e.classList.remove("hidden"),e.textContent=`⚠ ${t}`}function be(e){e.classList.add("hidden"),e.textContent=""}function ze(e){be(e.querySelector("#alertDiv-litro")),be(e.querySelector("#alertDiv-valor"))}function He(e,t=0){const n=e.querySelector("#cc-value"),r=Number(n.dataset.cc_for_unit),s=r*t;s>0?(e.querySelector("#cc-value").textContent=`+ ${s.toFixed(2)} CC`,n.classList.remove("bg-[--gasify-cinza]"),n.classList.add("bg-[--gasify-verde]")):(s<=0||t<0)&&(e.querySelector("#cc-value").textContent=`+ ${r.toFixed(2)} CC por litro!`,n.classList.remove("bg-[--gasify-verde]"),n.classList.add("bg-[--gasify-cinza]"))}async function pn(){return(await dn.get("/combustivel")).data}(async()=>{const e=document.querySelector("#card-combustiveis"),t=await pn();e.innerHTML=t.map(fn).join(""),window.localStorage.setItem("@gasify-carrinho",JSON.stringify([]))})();function Me(e){const t=JSON.parse(window.localStorage.getItem("@gasify-carrinho"));if(t&&t.find(s=>s.id===e.id)){let s=t.findIndex(o=>o.id===e.id);e.quantidade===0?t.splice(s,1):t[s]=e}else t.push(e);window.localStorage.setItem("@gasify-carrinho",JSON.stringify(t));const n=t.reduce((s,o)=>s+o.valor,0),r=t.reduce((s,o)=>s+o.cc_for_unit*o.quantidade,0);hn(n),mn(r)}function hn(e){document.querySelector("#total").textContent=`R$ ${e.toFixed(2)}`}function mn(e){document.querySelector("#total-cc-text").innerHTML=`${e.toFixed(2)} CC`}
