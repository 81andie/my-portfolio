function k_(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in r)){const a=Object.getOwnPropertyDescriptor(n,o);a&&Object.defineProperty(r,o,a.get?a:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function tv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var of={exports:{}},Ko={},af={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function z_(){if($p)return pt;$p=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(L,q,Me){this.props=L,this.context=q,this.refs=M,this.updater=Me||S}y.prototype.isReactComponent={},y.prototype.setState=function(L,q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,q,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function x(){}x.prototype=y.prototype;function C(L,q,Me){this.props=L,this.context=q,this.refs=M,this.updater=Me||S}var b=C.prototype=new x;b.constructor=C,E(b,y.prototype),b.isPureReactComponent=!0;var P=Array.isArray,B=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function K(L,q,Me){var Ie,W={},ce=null,ve=null;if(q!=null)for(Ie in q.ref!==void 0&&(ve=q.ref),q.key!==void 0&&(ce=""+q.key),q)B.call(q,Ie)&&!U.hasOwnProperty(Ie)&&(W[Ie]=q[Ie]);var me=arguments.length-2;if(me===1)W.children=Me;else if(1<me){for(var Ae=Array(me),Ge=0;Ge<me;Ge++)Ae[Ge]=arguments[Ge+2];W.children=Ae}if(L&&L.defaultProps)for(Ie in me=L.defaultProps,me)W[Ie]===void 0&&(W[Ie]=me[Ie]);return{$$typeof:r,type:L,key:ce,ref:ve,props:W,_owner:O.current}}function I(L,q){return{$$typeof:r,type:L.type,key:q,ref:L.ref,props:L.props,_owner:L._owner}}function A(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function X(L){var q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Me){return q[Me]})}var le=/\/+/g;function V(L,q){return typeof L=="object"&&L!==null&&L.key!=null?X(""+L.key):q.toString(36)}function ue(L,q,Me,Ie,W){var ce=typeof L;(ce==="undefined"||ce==="boolean")&&(L=null);var ve=!1;if(L===null)ve=!0;else switch(ce){case"string":case"number":ve=!0;break;case"object":switch(L.$$typeof){case r:case e:ve=!0}}if(ve)return ve=L,W=W(ve),L=Ie===""?"."+V(ve,0):Ie,P(W)?(Me="",L!=null&&(Me=L.replace(le,"$&/")+"/"),ue(W,q,Me,"",function(Ge){return Ge})):W!=null&&(A(W)&&(W=I(W,Me+(!W.key||ve&&ve.key===W.key?"":(""+W.key).replace(le,"$&/")+"/")+L)),q.push(W)),1;if(ve=0,Ie=Ie===""?".":Ie+":",P(L))for(var me=0;me<L.length;me++){ce=L[me];var Ae=Ie+V(ce,me);ve+=ue(ce,q,Me,Ae,W)}else if(Ae=v(L),typeof Ae=="function")for(L=Ae.call(L),me=0;!(ce=L.next()).done;)ce=ce.value,Ae=Ie+V(ce,me++),ve+=ue(ce,q,Me,Ae,W);else if(ce==="object")throw q=String(L),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ve}function ae(L,q,Me){if(L==null)return L;var Ie=[],W=0;return ue(L,Ie,"","",function(ce){return q.call(Me,ce,W++)}),Ie}function de(L){if(L._status===-1){var q=L._result;q=q(),q.then(function(Me){(L._status===0||L._status===-1)&&(L._status=1,L._result=Me)},function(Me){(L._status===0||L._status===-1)&&(L._status=2,L._result=Me)}),L._status===-1&&(L._status=0,L._result=q)}if(L._status===1)return L._result.default;throw L._result}var fe={current:null},k={transition:null},te={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:k,ReactCurrentOwner:O};return pt.Children={map:ae,forEach:function(L,q,Me){ae(L,function(){q.apply(this,arguments)},Me)},count:function(L){var q=0;return ae(L,function(){q++}),q},toArray:function(L){return ae(L,function(q){return q})||[]},only:function(L){if(!A(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},pt.Component=y,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=C,pt.StrictMode=n,pt.Suspense=d,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,pt.cloneElement=function(L,q,Me){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ie=E({},L.props),W=L.key,ce=L.ref,ve=L._owner;if(q!=null){if(q.ref!==void 0&&(ce=q.ref,ve=O.current),q.key!==void 0&&(W=""+q.key),L.type&&L.type.defaultProps)var me=L.type.defaultProps;for(Ae in q)B.call(q,Ae)&&!U.hasOwnProperty(Ae)&&(Ie[Ae]=q[Ae]===void 0&&me!==void 0?me[Ae]:q[Ae])}var Ae=arguments.length-2;if(Ae===1)Ie.children=Me;else if(1<Ae){me=Array(Ae);for(var Ge=0;Ge<Ae;Ge++)me[Ge]=arguments[Ge+2];Ie.children=me}return{$$typeof:r,type:L.type,key:W,ref:ce,props:Ie,_owner:ve}},pt.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:a,_context:L},L.Consumer=L},pt.createElement=K,pt.createFactory=function(L){var q=K.bind(null,L);return q.type=L,q},pt.createRef=function(){return{current:null}},pt.forwardRef=function(L){return{$$typeof:c,render:L}},pt.isValidElement=A,pt.lazy=function(L){return{$$typeof:p,_payload:{_status:-1,_result:L},_init:de}},pt.memo=function(L,q){return{$$typeof:h,type:L,compare:q===void 0?null:q}},pt.startTransition=function(L){var q=k.transition;k.transition={};try{L()}finally{k.transition=q}},pt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},pt.useCallback=function(L,q){return fe.current.useCallback(L,q)},pt.useContext=function(L){return fe.current.useContext(L)},pt.useDebugValue=function(){},pt.useDeferredValue=function(L){return fe.current.useDeferredValue(L)},pt.useEffect=function(L,q){return fe.current.useEffect(L,q)},pt.useId=function(){return fe.current.useId()},pt.useImperativeHandle=function(L,q,Me){return fe.current.useImperativeHandle(L,q,Me)},pt.useInsertionEffect=function(L,q){return fe.current.useInsertionEffect(L,q)},pt.useLayoutEffect=function(L,q){return fe.current.useLayoutEffect(L,q)},pt.useMemo=function(L,q){return fe.current.useMemo(L,q)},pt.useReducer=function(L,q,Me){return fe.current.useReducer(L,q,Me)},pt.useRef=function(L){return fe.current.useRef(L)},pt.useState=function(L){return fe.current.useState(L)},pt.useSyncExternalStore=function(L,q,Me){return fe.current.useSyncExternalStore(L,q,Me)},pt.useTransition=function(){return fe.current.useTransition()},pt.version="18.2.0",pt}var qp;function dd(){return qp||(qp=1,af.exports=z_()),af.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function B_(){if(Yp)return Ko;Yp=1;var r=dd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,g={},v=null,S=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)n.call(d,p)&&!a.hasOwnProperty(p)&&(g[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:c,key:v,ref:S,props:g,_owner:o.current}}return Ko.Fragment=t,Ko.jsx=u,Ko.jsxs=u,Ko}var Kp;function H_(){return Kp||(Kp=1,of.exports=B_()),of.exports}var D=H_(),he=dd();const nv=tv(he),V_=k_({__proto__:null,default:nv},[he]);var xl={},lf={exports:{}},Un={},uf={exports:{}},cf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function G_(){return Zp||(Zp=1,function(r){function e(k,te){var L=k.length;k.push(te);e:for(;0<L;){var q=L-1>>>1,Me=k[q];if(0<o(Me,te))k[q]=te,k[L]=Me,L=q;else break e}}function t(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var te=k[0],L=k.pop();if(L!==te){k[0]=L;e:for(var q=0,Me=k.length,Ie=Me>>>1;q<Ie;){var W=2*(q+1)-1,ce=k[W],ve=W+1,me=k[ve];if(0>o(ce,L))ve<Me&&0>o(me,ce)?(k[q]=me,k[ve]=L,q=ve):(k[q]=ce,k[W]=L,q=W);else if(ve<Me&&0>o(me,L))k[q]=me,k[ve]=L,q=ve;else break e}}return te}function o(k,te){var L=k.sortIndex-te.sortIndex;return L!==0?L:k.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();r.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,g=null,v=3,S=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(k){for(var te=t(h);te!==null;){if(te.callback===null)n(h);else if(te.startTime<=k)n(h),te.sortIndex=te.expirationTime,e(d,te);else break;te=t(h)}}function P(k){if(M=!1,b(k),!E)if(t(d)!==null)E=!0,de(B);else{var te=t(h);te!==null&&fe(P,te.startTime-k)}}function B(k,te){E=!1,M&&(M=!1,x(K),K=-1),S=!0;var L=v;try{for(b(te),g=t(d);g!==null&&(!(g.expirationTime>te)||k&&!X());){var q=g.callback;if(typeof q=="function"){g.callback=null,v=g.priorityLevel;var Me=q(g.expirationTime<=te);te=r.unstable_now(),typeof Me=="function"?g.callback=Me:g===t(d)&&n(d),b(te)}else n(d);g=t(d)}if(g!==null)var Ie=!0;else{var W=t(h);W!==null&&fe(P,W.startTime-te),Ie=!1}return Ie}finally{g=null,v=L,S=!1}}var O=!1,U=null,K=-1,I=5,A=-1;function X(){return!(r.unstable_now()-A<I)}function le(){if(U!==null){var k=r.unstable_now();A=k;var te=!0;try{te=U(!0,k)}finally{te?V():(O=!1,U=null)}}else O=!1}var V;if(typeof C=="function")V=function(){C(le)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,ae=ue.port2;ue.port1.onmessage=le,V=function(){ae.postMessage(null)}}else V=function(){y(le,0)};function de(k){U=k,O||(O=!0,V())}function fe(k,te){K=y(function(){k(r.unstable_now())},te)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,de(B))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(d)},r.unstable_next=function(k){switch(v){case 1:case 2:case 3:var te=3;break;default:te=v}var L=v;v=te;try{return k()}finally{v=L}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,te){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var L=v;v=k;try{return te()}finally{v=L}},r.unstable_scheduleCallback=function(k,te,L){var q=r.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?q+L:q):L=q,k){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=L+Me,k={id:p++,callback:te,priorityLevel:k,startTime:L,expirationTime:Me,sortIndex:-1},L>q?(k.sortIndex=L,e(h,k),t(d)===null&&k===t(h)&&(M?(x(K),K=-1):M=!0,fe(P,L-q))):(k.sortIndex=Me,e(d,k),E||S||(E=!0,de(B))),k},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(k){var te=v;return function(){var L=v;v=te;try{return k.apply(this,arguments)}finally{v=L}}}}(cf)),cf}var Qp;function W_(){return Qp||(Qp=1,uf.exports=G_()),uf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function j_(){if(Jp)return Un;Jp=1;var r=dd(),e=W_();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)n.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(i){return d.call(g,i)?!0:d.call(p,i)?!1:h.test(i)?g[i]=!0:(p[i]=!0,!1)}function S(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,f){if(s===null||typeof s>"u"||S(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,l,f,m,_,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function C(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,C);y[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,C);y[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,C);y[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,l,f){var m=y.hasOwnProperty(s)?y[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,m,f)&&(l=null),f||m===null?v(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,f=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),X=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),k=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=k&&i[k]||i["@@iterator"],typeof i=="function"?i:null)}var L=Object.assign,q;function Me(i){if(q===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);q=s&&s[1]||""}return`
`+q+i}var Ie=!1;function W(i,s){if(!i||Ie)return"";Ie=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(re){var f=re}Reflect.construct(i,[],s)}else{try{s.call()}catch(re){f=re}i.call(s.prototype)}else{try{throw Error()}catch(re){f=re}i()}}catch(re){if(re&&f&&typeof re.stack=="string"){for(var m=re.stack.split(`
`),_=f.stack.split(`
`),T=m.length-1,F=_.length-1;1<=T&&0<=F&&m[T]!==_[F];)F--;for(;1<=T&&0<=F;T--,F--)if(m[T]!==_[F]){if(T!==1||F!==1)do if(T--,F--,0>F||m[T]!==_[F]){var H=`
`+m[T].replace(" at new "," at ");return i.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",i.displayName)),H}while(1<=T&&0<=F);break}}}finally{Ie=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Me(i):""}function ce(i){switch(i.tag){case 5:return Me(i.type);case 16:return Me("Lazy");case 13:return Me("Suspense");case 19:return Me("SuspenseList");case 0:case 2:case 15:return i=W(i.type,!1),i;case 11:return i=W(i.type.render,!1),i;case 1:return i=W(i.type,!0),i;default:return""}}function ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case O:return"Portal";case I:return"Profiler";case K:return"StrictMode";case V:return"Suspense";case ue:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case X:return(i.displayName||"Context")+".Consumer";case A:return(i._context.displayName||"Context")+".Provider";case le:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ae:return s=i.displayName||null,s!==null?s:ve(i.type)||"Memo";case de:s=i._payload,i=i._init;try{return ve(i(s))}catch{}}return null}function me(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(s);case 8:return s===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ae(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ge(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Z(i){var s=Ge(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function mt(i){i._valueTracker||(i._valueTracker=Z(i))}function je(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=Ge(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function vt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Xe(i,s){var l=s.checked;return L({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function lt(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=Ae(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function et(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function ut(i,s){et(i,s);var l=Ae(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?z(i,s.type,l):s.hasOwnProperty("defaultValue")&&z(i,s.type,Ae(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function bt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function z(i,s,l){(s!=="number"||vt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var R=Array.isArray;function se(i,s,l,f){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&f&&(i[l].defaultSelected=!0)}else{for(l=""+Ae(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function pe(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return L({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function xe(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(R(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Ae(l)}}function Se(i,s){var l=Ae(s.value),f=Ae(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function We(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function Re(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?Re(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ze,be=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,m)})}:i}(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ze=Ze||document.createElement("div"),Ze.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ze.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Be(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var st={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(st).forEach(function(i){$e.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),st[s]=st[i]})});function De(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||st.hasOwnProperty(i)&&st[i]?(""+s).trim():s+"px"}function tt(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=De(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,m):i[l]=m}}var ct=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(i,s){if(s){if(ct[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function nt(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w=null;function j(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var J=null,ge=null,we=null;function it(i){if(i=Uo(i)){if(typeof J!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Ua(s),J(i.stateNode,i.type,s))}}function ot(i){ge?we?we.push(i):we=[i]:ge=i}function At(){if(ge){var i=ge,s=we;if(we=ge=null,it(i),s)for(i=0;i<s.length;i++)it(s[i])}}function Bt(i,s){return i(s)}function gt(){}var Dt=!1;function wt(i,s,l){if(Dt)return i(s,l);Dt=!0;try{return Bt(i,s,l)}finally{Dt=!1,(ge!==null||we!==null)&&(gt(),At())}}function Cn(i,s){var l=i.stateNode;if(l===null)return null;var f=Ua(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var hn=!1;if(c)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){hn=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{hn=!1}function ni(i,s,l,f,m,_,T,F,H){var re=Array.prototype.slice.call(arguments,3);try{s.apply(l,re)}catch(ye){this.onError(ye)}}var ii=!1,Ci=null,Dr=!1,cs=null,Mu={onError:function(i){ii=!0,Ci=i}};function wu(i,s,l,f,m,_,T,F,H){ii=!1,Ci=null,ni.apply(Mu,arguments)}function Tu(i,s,l,f,m,_,T,F,H){if(wu.apply(this,arguments),ii){if(ii){var re=Ci;ii=!1,Ci=null}else throw Error(t(198));Dr||(Dr=!0,cs=re)}}function N(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,s.flags&4098&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function $(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function oe(i){if(N(i)!==i)throw Error(t(188))}function ie(i){var s=i.alternate;if(!s){if(s=N(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var m=l.return;if(m===null)break;var _=m.alternate;if(_===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===l)return oe(m),i;if(_===f)return oe(m),s;_=_.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=_;else{for(var T=!1,F=m.child;F;){if(F===l){T=!0,l=m,f=_;break}if(F===f){T=!0,f=m,l=_;break}F=F.sibling}if(!T){for(F=_.child;F;){if(F===l){T=!0,l=_,f=m;break}if(F===f){T=!0,f=_,l=m;break}F=F.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function ne(i){return i=ie(i),i!==null?Pe(i):null}function Pe(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Pe(i);if(s!==null)return s;i=i.sibling}return null}var ze=e.unstable_scheduleCallback,Ve=e.unstable_cancelCallback,Ke=e.unstable_shouldYield,rt=e.unstable_requestPaint,Fe=e.unstable_now,ft=e.unstable_getCurrentPriorityLevel,It=e.unstable_ImmediatePriority,$t=e.unstable_UserBlockingPriority,en=e.unstable_NormalPriority,ri=e.unstable_LowPriority,_t=e.unstable_IdlePriority,Qe=null,pn=null;function Ct(i){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Qe,i,void 0,(i.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:go,ya=Math.log,Ir=Math.LN2;function go(i){return i>>>=0,i===0?32:31-(ya(i)/Ir|0)|0}var Ht=64,zn=4194304;function Ri(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function an(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,m=i.suspendedLanes,_=i.pingedLanes,T=l&268435455;if(T!==0){var F=T&~m;F!==0?f=Ri(F):(_&=T,_!==0&&(f=Ri(_)))}else T=l&~m,T!==0?f=Ri(T):_!==0&&(f=Ri(_));if(f===0)return 0;if(s!==0&&s!==f&&!(s&m)&&(m=f&-f,_=s&-s,m>=_||m===16&&(_&4194240)!==0))return s;if(f&4&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-qt(s),m=1<<l,f|=i[l],s&=~m;return f}function vo(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bu(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-qt(_),F=1<<T,H=m[T];H===-1?(!(F&l)||F&f)&&(m[T]=vo(F,s)):H<=s&&(i.expiredLanes|=F),_&=~F}}function fs(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Md(){var i=Ht;return Ht<<=1,!(Ht&4194240)&&(Ht=64),i}function Au(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function _o(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-qt(s),i[s]=l}function o0(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-qt(l),_=1<<m;s[m]=0,f[m]=-1,i[m]=-1,l&=~_}}function Cu(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-qt(l),m=1<<f;m&s|i[f]&s&&(i[f]|=s),l&=~m}}var Et=0;function wd(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Td,Ru,bd,Ad,Cd,Pu=!1,xa=[],Yi=null,Ki=null,Zi=null,yo=new Map,xo=new Map,Qi=[],a0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rd(i,s){switch(i){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":yo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(s.pointerId)}}function So(i,s,l,f,m,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:_,targetContainers:[m]},s!==null&&(s=Uo(s),s!==null&&Ru(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function l0(i,s,l,f,m){switch(s){case"focusin":return Yi=So(Yi,i,s,l,f,m),!0;case"dragenter":return Ki=So(Ki,i,s,l,f,m),!0;case"mouseover":return Zi=So(Zi,i,s,l,f,m),!0;case"pointerover":var _=m.pointerId;return yo.set(_,So(yo.get(_)||null,i,s,l,f,m)),!0;case"gotpointercapture":return _=m.pointerId,xo.set(_,So(xo.get(_)||null,i,s,l,f,m)),!0}return!1}function Pd(i){var s=Ur(i.target);if(s!==null){var l=N(s);if(l!==null){if(s=l.tag,s===13){if(s=$(l),s!==null){i.blockedOn=s,Cd(i.priority,function(){bd(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Sa(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Nu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);w=f,l.target.dispatchEvent(f),w=null}else return s=Uo(l),s!==null&&Ru(s),i.blockedOn=l,!1;s.shift()}return!0}function Ld(i,s,l){Sa(i)&&l.delete(s)}function u0(){Pu=!1,Yi!==null&&Sa(Yi)&&(Yi=null),Ki!==null&&Sa(Ki)&&(Ki=null),Zi!==null&&Sa(Zi)&&(Zi=null),yo.forEach(Ld),xo.forEach(Ld)}function Eo(i,s){i.blockedOn===s&&(i.blockedOn=null,Pu||(Pu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,u0)))}function Mo(i){function s(m){return Eo(m,i)}if(0<xa.length){Eo(xa[0],i);for(var l=1;l<xa.length;l++){var f=xa[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Yi!==null&&Eo(Yi,i),Ki!==null&&Eo(Ki,i),Zi!==null&&Eo(Zi,i),yo.forEach(s),xo.forEach(s),l=0;l<Qi.length;l++)f=Qi[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<Qi.length&&(l=Qi[0],l.blockedOn===null);)Pd(l),l.blockedOn===null&&Qi.shift()}var ds=P.ReactCurrentBatchConfig,Ea=!0;function c0(i,s,l,f){var m=Et,_=ds.transition;ds.transition=null;try{Et=1,Lu(i,s,l,f)}finally{Et=m,ds.transition=_}}function f0(i,s,l,f){var m=Et,_=ds.transition;ds.transition=null;try{Et=4,Lu(i,s,l,f)}finally{Et=m,ds.transition=_}}function Lu(i,s,l,f){if(Ea){var m=Nu(i,s,l,f);if(m===null)Yu(i,s,f,Ma,l),Rd(i,f);else if(l0(m,i,s,l,f))f.stopPropagation();else if(Rd(i,f),s&4&&-1<a0.indexOf(i)){for(;m!==null;){var _=Uo(m);if(_!==null&&Td(_),_=Nu(i,s,l,f),_===null&&Yu(i,s,f,Ma,l),_===m)break;m=_}m!==null&&f.stopPropagation()}else Yu(i,s,f,null,l)}}var Ma=null;function Nu(i,s,l,f){if(Ma=null,i=j(f),i=Ur(i),i!==null)if(s=N(i),s===null)i=null;else if(l=s.tag,l===13){if(i=$(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Ma=i,null}function Nd(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ft()){case It:return 1;case $t:return 4;case en:case ri:return 16;case _t:return 536870912;default:return 16}default:return 16}}var Ji=null,Du=null,wa=null;function Dd(){if(wa)return wa;var i,s=Du,l=s.length,f,m="value"in Ji?Ji.value:Ji.textContent,_=m.length;for(i=0;i<l&&s[i]===m[i];i++);var T=l-i;for(f=1;f<=T&&s[l-f]===m[_-f];f++);return wa=m.slice(i,1<f?1-f:void 0)}function Ta(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function ba(){return!0}function Id(){return!1}function Bn(i){function s(l,f,m,_,T){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var F in i)i.hasOwnProperty(F)&&(l=i[F],this[F]=l?l(_):_[F]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?ba:Id,this.isPropagationStopped=Id,this}return L(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),s}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=Bn(hs),wo=L({},hs,{view:0,detail:0}),d0=Bn(wo),Uu,Ou,To,Aa=L({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==To&&(To&&i.type==="mousemove"?(Uu=i.screenX-To.screenX,Ou=i.screenY-To.screenY):Ou=Uu=0,To=i),Uu)},movementY:function(i){return"movementY"in i?i.movementY:Ou}}),Ud=Bn(Aa),h0=L({},Aa,{dataTransfer:0}),p0=Bn(h0),m0=L({},wo,{relatedTarget:0}),Fu=Bn(m0),g0=L({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=Bn(g0),_0=L({},hs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),y0=Bn(_0),x0=L({},hs,{data:0}),Od=Bn(x0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=M0[i])?!!s[i]:!1}function ku(){return w0}var T0=L({},wo,{key:function(i){if(i.key){var s=S0[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Ta(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?E0[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(i){return i.type==="keypress"?Ta(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ta(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),b0=Bn(T0),A0=L({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fd=Bn(A0),C0=L({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),R0=Bn(C0),P0=L({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=Bn(P0),N0=L({},Aa,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),D0=Bn(N0),I0=[9,13,27,32],zu=c&&"CompositionEvent"in window,bo=null;c&&"documentMode"in document&&(bo=document.documentMode);var U0=c&&"TextEvent"in window&&!bo,kd=c&&(!zu||bo&&8<bo&&11>=bo),zd=" ",Bd=!1;function Hd(i,s){switch(i){case"keyup":return I0.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vd(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ps=!1;function O0(i,s){switch(i){case"compositionend":return Vd(s);case"keypress":return s.which!==32?null:(Bd=!0,zd);case"textInput":return i=s.data,i===zd&&Bd?null:i;default:return null}}function F0(i,s){if(ps)return i==="compositionend"||!zu&&Hd(i,s)?(i=Dd(),wa=Du=Ji=null,ps=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return kd&&s.locale!=="ko"?null:s.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!k0[i.type]:s==="textarea"}function Wd(i,s,l,f){ot(f),s=Na(s,"onChange"),0<s.length&&(l=new Iu("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var Ao=null,Co=null;function z0(i){lh(i,0)}function Ca(i){var s=ys(i);if(je(s))return i}function B0(i,s){if(i==="change")return s}var jd=!1;if(c){var Bu;if(c){var Hu="oninput"in document;if(!Hu){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),Hu=typeof Xd.oninput=="function"}Bu=Hu}else Bu=!1;jd=Bu&&(!document.documentMode||9<document.documentMode)}function $d(){Ao&&(Ao.detachEvent("onpropertychange",qd),Co=Ao=null)}function qd(i){if(i.propertyName==="value"&&Ca(Co)){var s=[];Wd(s,Co,i,j(i)),wt(z0,s)}}function H0(i,s,l){i==="focusin"?($d(),Ao=s,Co=l,Ao.attachEvent("onpropertychange",qd)):i==="focusout"&&$d()}function V0(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ca(Co)}function G0(i,s){if(i==="click")return Ca(s)}function W0(i,s){if(i==="input"||i==="change")return Ca(s)}function j0(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var si=typeof Object.is=="function"?Object.is:j0;function Ro(i,s){if(si(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(s,m)||!si(i[m],s[m]))return!1}return!0}function Yd(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Kd(i,s){var l=Yd(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Yd(l)}}function Zd(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Zd(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Qd(){for(var i=window,s=vt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=vt(i.document)}return s}function Vu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function X0(i){var s=Qd(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Zd(l.ownerDocument.documentElement,l)){if(f!==null&&Vu(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,_=Math.min(f.start,m);f=f.end===void 0?_:Math.min(f.end,m),!i.extend&&_>f&&(m=f,f=_,_=m),m=Kd(l,_);var T=Kd(l,f);m&&T&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var $0=c&&"documentMode"in document&&11>=document.documentMode,ms=null,Gu=null,Po=null,Wu=!1;function Jd(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Wu||ms==null||ms!==vt(f)||(f=ms,"selectionStart"in f&&Vu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Po&&Ro(Po,f)||(Po=f,f=Na(Gu,"onSelect"),0<f.length&&(s=new Iu("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=ms)))}function Ra(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var gs={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},ju={},eh={};c&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Pa(i){if(ju[i])return ju[i];if(!gs[i])return i;var s=gs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in eh)return ju[i]=s[l];return i}var th=Pa("animationend"),nh=Pa("animationiteration"),ih=Pa("animationstart"),rh=Pa("transitionend"),sh=new Map,oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(i,s){sh.set(i,s),a(s,[i])}for(var Xu=0;Xu<oh.length;Xu++){var $u=oh[Xu],q0=$u.toLowerCase(),Y0=$u[0].toUpperCase()+$u.slice(1);er(q0,"on"+Y0)}er(th,"onAnimationEnd"),er(nh,"onAnimationIteration"),er(ih,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(rh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function ah(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,Tu(f,s,void 0,i),i.currentTarget=null}function lh(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],m=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var T=f.length-1;0<=T;T--){var F=f[T],H=F.instance,re=F.currentTarget;if(F=F.listener,H!==_&&m.isPropagationStopped())break e;ah(m,F,re),_=H}else for(T=0;T<f.length;T++){if(F=f[T],H=F.instance,re=F.currentTarget,F=F.listener,H!==_&&m.isPropagationStopped())break e;ah(m,F,re),_=H}}}if(Dr)throw i=cs,Dr=!1,cs=null,i}function Pt(i,s){var l=s[tc];l===void 0&&(l=s[tc]=new Set);var f=i+"__bubble";l.has(f)||(uh(s,i,2,!1),l.add(f))}function qu(i,s,l){var f=0;s&&(f|=4),uh(l,i,f,s)}var La="_reactListening"+Math.random().toString(36).slice(2);function No(i){if(!i[La]){i[La]=!0,n.forEach(function(l){l!=="selectionchange"&&(K0.has(l)||qu(l,!1,i),qu(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[La]||(s[La]=!0,qu("selectionchange",!1,s))}}function uh(i,s,l,f){switch(Nd(s)){case 1:var m=c0;break;case 4:m=f0;break;default:m=Lu}l=m.bind(null,s,l,i),m=void 0,!hn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function Yu(i,s,l,f,m){var _=f;if(!(s&1)&&!(s&2)&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var F=f.stateNode.containerInfo;if(F===m||F.nodeType===8&&F.parentNode===m)break;if(T===4)for(T=f.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===m||H.nodeType===8&&H.parentNode===m))return;T=T.return}for(;F!==null;){if(T=Ur(F),T===null)return;if(H=T.tag,H===5||H===6){f=_=T;continue e}F=F.parentNode}}f=f.return}wt(function(){var re=_,ye=j(l),Ee=[];e:{var _e=sh.get(i);if(_e!==void 0){var Ne=Iu,Oe=i;switch(i){case"keypress":if(Ta(l)===0)break e;case"keydown":case"keyup":Ne=b0;break;case"focusin":Oe="focus",Ne=Fu;break;case"focusout":Oe="blur",Ne=Fu;break;case"beforeblur":case"afterblur":Ne=Fu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=R0;break;case th:case nh:case ih:Ne=v0;break;case rh:Ne=L0;break;case"scroll":Ne=d0;break;case"wheel":Ne=D0;break;case"copy":case"cut":case"paste":Ne=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=Fd}var ke=(s&4)!==0,Vt=!ke&&i==="scroll",Y=ke?_e!==null?_e+"Capture":null:_e;ke=[];for(var G=re,Q;G!==null;){Q=G;var Te=Q.stateNode;if(Q.tag===5&&Te!==null&&(Q=Te,Y!==null&&(Te=Cn(G,Y),Te!=null&&ke.push(Do(G,Te,Q)))),Vt)break;G=G.return}0<ke.length&&(_e=new Ne(_e,Oe,null,l,ye),Ee.push({event:_e,listeners:ke}))}}if(!(s&7)){e:{if(_e=i==="mouseover"||i==="pointerover",Ne=i==="mouseout"||i==="pointerout",_e&&l!==w&&(Oe=l.relatedTarget||l.fromElement)&&(Ur(Oe)||Oe[Pi]))break e;if((Ne||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ne?(Oe=l.relatedTarget||l.toElement,Ne=re,Oe=Oe?Ur(Oe):null,Oe!==null&&(Vt=N(Oe),Oe!==Vt||Oe.tag!==5&&Oe.tag!==6)&&(Oe=null)):(Ne=null,Oe=re),Ne!==Oe)){if(ke=Ud,Te="onMouseLeave",Y="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(ke=Fd,Te="onPointerLeave",Y="onPointerEnter",G="pointer"),Vt=Ne==null?_e:ys(Ne),Q=Oe==null?_e:ys(Oe),_e=new ke(Te,G+"leave",Ne,l,ye),_e.target=Vt,_e.relatedTarget=Q,Te=null,Ur(ye)===re&&(ke=new ke(Y,G+"enter",Oe,l,ye),ke.target=Q,ke.relatedTarget=Vt,Te=ke),Vt=Te,Ne&&Oe)t:{for(ke=Ne,Y=Oe,G=0,Q=ke;Q;Q=vs(Q))G++;for(Q=0,Te=Y;Te;Te=vs(Te))Q++;for(;0<G-Q;)ke=vs(ke),G--;for(;0<Q-G;)Y=vs(Y),Q--;for(;G--;){if(ke===Y||Y!==null&&ke===Y.alternate)break t;ke=vs(ke),Y=vs(Y)}ke=null}else ke=null;Ne!==null&&ch(Ee,_e,Ne,ke,!1),Oe!==null&&Vt!==null&&ch(Ee,Vt,Oe,ke,!0)}}e:{if(_e=re?ys(re):window,Ne=_e.nodeName&&_e.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&_e.type==="file")var He=B0;else if(Gd(_e))if(jd)He=W0;else{He=V0;var qe=H0}else(Ne=_e.nodeName)&&Ne.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(He=G0);if(He&&(He=He(i,re))){Wd(Ee,He,l,ye);break e}qe&&qe(i,_e,re),i==="focusout"&&(qe=_e._wrapperState)&&qe.controlled&&_e.type==="number"&&z(_e,"number",_e.value)}switch(qe=re?ys(re):window,i){case"focusin":(Gd(qe)||qe.contentEditable==="true")&&(ms=qe,Gu=re,Po=null);break;case"focusout":Po=Gu=ms=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,Jd(Ee,l,ye);break;case"selectionchange":if($0)break;case"keydown":case"keyup":Jd(Ee,l,ye)}var Ye;if(zu)e:{switch(i){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else ps?Hd(i,l)&&(Je="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Je="onCompositionStart");Je&&(kd&&l.locale!=="ko"&&(ps||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&ps&&(Ye=Dd()):(Ji=ye,Du="value"in Ji?Ji.value:Ji.textContent,ps=!0)),qe=Na(re,Je),0<qe.length&&(Je=new Od(Je,i,null,l,ye),Ee.push({event:Je,listeners:qe}),Ye?Je.data=Ye:(Ye=Vd(l),Ye!==null&&(Je.data=Ye)))),(Ye=U0?O0(i,l):F0(i,l))&&(re=Na(re,"onBeforeInput"),0<re.length&&(ye=new Od("onBeforeInput","beforeinput",null,l,ye),Ee.push({event:ye,listeners:re}),ye.data=Ye))}lh(Ee,s)})}function Do(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Na(i,s){for(var l=s+"Capture",f=[];i!==null;){var m=i,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=Cn(i,l),_!=null&&f.unshift(Do(i,_,m)),_=Cn(i,s),_!=null&&f.push(Do(i,_,m))),i=i.return}return f}function vs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ch(i,s,l,f,m){for(var _=s._reactName,T=[];l!==null&&l!==f;){var F=l,H=F.alternate,re=F.stateNode;if(H!==null&&H===f)break;F.tag===5&&re!==null&&(F=re,m?(H=Cn(l,_),H!=null&&T.unshift(Do(l,H,F))):m||(H=Cn(l,_),H!=null&&T.push(Do(l,H,F)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var Z0=/\r\n?/g,Q0=/\u0000|\uFFFD/g;function fh(i){return(typeof i=="string"?i:""+i).replace(Z0,`
`).replace(Q0,"")}function Da(i,s,l){if(s=fh(s),fh(i)!==s&&l)throw Error(t(425))}function Ia(){}var Ku=null,Zu=null;function Qu(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,J0=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,e_=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(i){return dh.resolve(null).then(i).catch(t_)}:Ju;function t_(i){setTimeout(function(){throw i})}function ec(i,s){var l=s,f=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){i.removeChild(m),Mo(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Mo(s)}function tr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function hh(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var _s=Math.random().toString(36).slice(2),mi="__reactFiber$"+_s,Io="__reactProps$"+_s,Pi="__reactContainer$"+_s,tc="__reactEvents$"+_s,n_="__reactListeners$"+_s,i_="__reactHandles$"+_s;function Ur(i){var s=i[mi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Pi]||l[mi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=hh(i);i!==null;){if(l=i[mi])return l;i=hh(i)}return s}i=l,l=i.parentNode}return null}function Uo(i){return i=i[mi]||i[Pi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ys(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Ua(i){return i[Io]||null}var nc=[],xs=-1;function nr(i){return{current:i}}function Lt(i){0>xs||(i.current=nc[xs],nc[xs]=null,xs--)}function Rt(i,s){xs++,nc[xs]=i.current,i.current=s}var ir={},mn=nr(ir),Pn=nr(!1),Or=ir;function Ss(i,s){var l=i.type.contextTypes;if(!l)return ir;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in l)m[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Ln(i){return i=i.childContextTypes,i!=null}function Oa(){Lt(Pn),Lt(mn)}function ph(i,s,l){if(mn.current!==ir)throw Error(t(168));Rt(mn,s),Rt(Pn,l)}function mh(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,me(i)||"Unknown",m));return L({},l,f)}function Fa(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ir,Or=mn.current,Rt(mn,i),Rt(Pn,Pn.current),!0}function gh(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=mh(i,s,Or),f.__reactInternalMemoizedMergedChildContext=i,Lt(Pn),Lt(mn),Rt(mn,i)):Lt(Pn),Rt(Pn,l)}var Li=null,ka=!1,ic=!1;function vh(i){Li===null?Li=[i]:Li.push(i)}function r_(i){ka=!0,vh(i)}function rr(){if(!ic&&Li!==null){ic=!0;var i=0,s=Et;try{var l=Li;for(Et=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}Li=null,ka=!1}catch(m){throw Li!==null&&(Li=Li.slice(i+1)),ze(It,rr),m}finally{Et=s,ic=!1}}return null}var Es=[],Ms=0,za=null,Ba=0,$n=[],qn=0,Fr=null,Ni=1,Di="";function kr(i,s){Es[Ms++]=Ba,Es[Ms++]=za,za=i,Ba=s}function _h(i,s,l){$n[qn++]=Ni,$n[qn++]=Di,$n[qn++]=Fr,Fr=i;var f=Ni;i=Di;var m=32-qt(f)-1;f&=~(1<<m),l+=1;var _=32-qt(s)+m;if(30<_){var T=m-m%5;_=(f&(1<<T)-1).toString(32),f>>=T,m-=T,Ni=1<<32-qt(s)+m|l<<m|f,Di=_+i}else Ni=1<<_|l<<m|f,Di=i}function rc(i){i.return!==null&&(kr(i,1),_h(i,1,0))}function sc(i){for(;i===za;)za=Es[--Ms],Es[Ms]=null,Ba=Es[--Ms],Es[Ms]=null;for(;i===Fr;)Fr=$n[--qn],$n[qn]=null,Di=$n[--qn],$n[qn]=null,Ni=$n[--qn],$n[qn]=null}var Hn=null,Vn=null,Ut=!1,oi=null;function yh(i,s){var l=Qn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function xh(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Hn=i,Vn=tr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Hn=i,Vn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Fr!==null?{id:Ni,overflow:Di}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Qn(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Hn=i,Vn=null,!0):!1;default:return!1}}function oc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function ac(i){if(Ut){var s=Vn;if(s){var l=s;if(!xh(i,s)){if(oc(i))throw Error(t(418));s=tr(l.nextSibling);var f=Hn;s&&xh(i,s)?yh(f,l):(i.flags=i.flags&-4097|2,Ut=!1,Hn=i)}}else{if(oc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Ut=!1,Hn=i}}}function Sh(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Hn=i}function Ha(i){if(i!==Hn)return!1;if(!Ut)return Sh(i),Ut=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Qu(i.type,i.memoizedProps)),s&&(s=Vn)){if(oc(i))throw Eh(),Error(t(418));for(;s;)yh(i,s),s=tr(s.nextSibling)}if(Sh(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Vn=tr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Vn=null}}else Vn=Hn?tr(i.stateNode.nextSibling):null;return!0}function Eh(){for(var i=Vn;i;)i=tr(i.nextSibling)}function ws(){Vn=Hn=null,Ut=!1}function lc(i){oi===null?oi=[i]:oi.push(i)}var s_=P.ReactCurrentBatchConfig;function ai(i,s){if(i&&i.defaultProps){s=L({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}var Va=nr(null),Ga=null,Ts=null,uc=null;function cc(){uc=Ts=Ga=null}function fc(i){var s=Va.current;Lt(Va),i._currentValue=s}function dc(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function bs(i,s){Ga=i,uc=Ts=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&s&&(Nn=!0),i.firstContext=null)}function Yn(i){var s=i._currentValue;if(uc!==i)if(i={context:i,memoizedValue:s,next:null},Ts===null){if(Ga===null)throw Error(t(308));Ts=i,Ga.dependencies={lanes:0,firstContext:i}}else Ts=Ts.next=i;return s}var zr=null;function hc(i){zr===null?zr=[i]:zr.push(i)}function Mh(i,s,l,f){var m=s.interleaved;return m===null?(l.next=l,hc(s)):(l.next=m.next,m.next=l),s.interleaved=l,Ii(i,f)}function Ii(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var sr=!1;function pc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Ui(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function or(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,yt&2){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,Ii(i,l)}return m=f.interleaved,m===null?(s.next=s,hc(f)):(s.next=m.next,m.next=s),f.interleaved=s,Ii(i,l)}function Wa(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Cu(i,l)}}function Th(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?m=_=T:_=_.next=T,l=l.next}while(l!==null);_===null?m=_=s:_=_.next=s}else m=_=s;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function ja(i,s,l,f){var m=i.updateQueue;sr=!1;var _=m.firstBaseUpdate,T=m.lastBaseUpdate,F=m.shared.pending;if(F!==null){m.shared.pending=null;var H=F,re=H.next;H.next=null,T===null?_=re:T.next=re,T=H;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==T&&(F===null?ye.firstBaseUpdate=re:F.next=re,ye.lastBaseUpdate=H))}if(_!==null){var Ee=m.baseState;T=0,ye=re=H=null,F=_;do{var _e=F.lane,Ne=F.eventTime;if((f&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Ne,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Oe=i,ke=F;switch(_e=s,Ne=l,ke.tag){case 1:if(Oe=ke.payload,typeof Oe=="function"){Ee=Oe.call(Ne,Ee,_e);break e}Ee=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=ke.payload,_e=typeof Oe=="function"?Oe.call(Ne,Ee,_e):Oe,_e==null)break e;Ee=L({},Ee,_e);break e;case 2:sr=!0}}F.callback!==null&&F.lane!==0&&(i.flags|=64,_e=m.effects,_e===null?m.effects=[F]:_e.push(F))}else Ne={eventTime:Ne,lane:_e,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(re=ye=Ne,H=Ee):ye=ye.next=Ne,T|=_e;if(F=F.next,F===null){if(F=m.shared.pending,F===null)break;_e=F,F=_e.next,_e.next=null,m.lastBaseUpdate=_e,m.shared.pending=null}}while(!0);if(ye===null&&(H=Ee),m.baseState=H,m.firstBaseUpdate=re,m.lastBaseUpdate=ye,s=m.shared.interleaved,s!==null){m=s;do T|=m.lane,m=m.next;while(m!==s)}else _===null&&(m.shared.lanes=0);Vr|=T,i.lanes=T,i.memoizedState=Ee}}function bh(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Ah=new r.Component().refs;function mc(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:L({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Xa={isMounted:function(i){return(i=i._reactInternals)?N(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=wn(),m=cr(i),_=Ui(f,m);_.payload=s,l!=null&&(_.callback=l),s=or(i,_,m),s!==null&&(ci(s,i,m,f),Wa(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=wn(),m=cr(i),_=Ui(f,m);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=or(i,_,m),s!==null&&(ci(s,i,m,f),Wa(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=wn(),f=cr(i),m=Ui(l,f);m.tag=2,s!=null&&(m.callback=s),s=or(i,m,f),s!==null&&(ci(s,i,f,l),Wa(s,i,f))}};function Ch(i,s,l,f,m,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,T):s.prototype&&s.prototype.isPureReactComponent?!Ro(l,f)||!Ro(m,_):!0}function Rh(i,s,l){var f=!1,m=ir,_=s.contextType;return typeof _=="object"&&_!==null?_=Yn(_):(m=Ln(s)?Or:mn.current,f=s.contextTypes,_=(f=f!=null)?Ss(i,m):ir),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Xa,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=_),s}function Ph(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&Xa.enqueueReplaceState(s,s.state,null)}function gc(i,s,l,f){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs=Ah,pc(i);var _=s.contextType;typeof _=="object"&&_!==null?m.context=Yn(_):(_=Ln(s)?Or:mn.current,m.context=Ss(i,_)),m.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(mc(i,s,_,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Xa.enqueueReplaceState(m,m.state,null),ja(i,l,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function Oo(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var m=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(T){var F=m.refs;F===Ah&&(F=m.refs={}),T===null?delete F[_]:F[_]=T},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function $a(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Lh(i){var s=i._init;return s(i._payload)}function Nh(i){function s(Y,G){if(i){var Q=Y.deletions;Q===null?(Y.deletions=[G],Y.flags|=16):Q.push(G)}}function l(Y,G){if(!i)return null;for(;G!==null;)s(Y,G),G=G.sibling;return null}function f(Y,G){for(Y=new Map;G!==null;)G.key!==null?Y.set(G.key,G):Y.set(G.index,G),G=G.sibling;return Y}function m(Y,G){return Y=dr(Y,G),Y.index=0,Y.sibling=null,Y}function _(Y,G,Q){return Y.index=Q,i?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<G?(Y.flags|=2,G):Q):(Y.flags|=2,G)):(Y.flags|=1048576,G)}function T(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function F(Y,G,Q,Te){return G===null||G.tag!==6?(G=Jc(Q,Y.mode,Te),G.return=Y,G):(G=m(G,Q),G.return=Y,G)}function H(Y,G,Q,Te){var He=Q.type;return He===U?ye(Y,G,Q.props.children,Te,Q.key):G!==null&&(G.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===de&&Lh(He)===G.type)?(Te=m(G,Q.props),Te.ref=Oo(Y,G,Q),Te.return=Y,Te):(Te=dl(Q.type,Q.key,Q.props,null,Y.mode,Te),Te.ref=Oo(Y,G,Q),Te.return=Y,Te)}function re(Y,G,Q,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=ef(Q,Y.mode,Te),G.return=Y,G):(G=m(G,Q.children||[]),G.return=Y,G)}function ye(Y,G,Q,Te,He){return G===null||G.tag!==7?(G=Xr(Q,Y.mode,Te,He),G.return=Y,G):(G=m(G,Q),G.return=Y,G)}function Ee(Y,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Jc(""+G,Y.mode,Q),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case B:return Q=dl(G.type,G.key,G.props,null,Y.mode,Q),Q.ref=Oo(Y,null,G),Q.return=Y,Q;case O:return G=ef(G,Y.mode,Q),G.return=Y,G;case de:var Te=G._init;return Ee(Y,Te(G._payload),Q)}if(R(G)||te(G))return G=Xr(G,Y.mode,Q,null),G.return=Y,G;$a(Y,G)}return null}function _e(Y,G,Q,Te){var He=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return He!==null?null:F(Y,G,""+Q,Te);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case B:return Q.key===He?H(Y,G,Q,Te):null;case O:return Q.key===He?re(Y,G,Q,Te):null;case de:return He=Q._init,_e(Y,G,He(Q._payload),Te)}if(R(Q)||te(Q))return He!==null?null:ye(Y,G,Q,Te,null);$a(Y,Q)}return null}function Ne(Y,G,Q,Te,He){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(Q)||null,F(G,Y,""+Te,He);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case B:return Y=Y.get(Te.key===null?Q:Te.key)||null,H(G,Y,Te,He);case O:return Y=Y.get(Te.key===null?Q:Te.key)||null,re(G,Y,Te,He);case de:var qe=Te._init;return Ne(Y,G,Q,qe(Te._payload),He)}if(R(Te)||te(Te))return Y=Y.get(Q)||null,ye(G,Y,Te,He,null);$a(G,Te)}return null}function Oe(Y,G,Q,Te){for(var He=null,qe=null,Ye=G,Je=G=0,rn=null;Ye!==null&&Je<Q.length;Je++){Ye.index>Je?(rn=Ye,Ye=null):rn=Ye.sibling;var St=_e(Y,Ye,Q[Je],Te);if(St===null){Ye===null&&(Ye=rn);break}i&&Ye&&St.alternate===null&&s(Y,Ye),G=_(St,G,Je),qe===null?He=St:qe.sibling=St,qe=St,Ye=rn}if(Je===Q.length)return l(Y,Ye),Ut&&kr(Y,Je),He;if(Ye===null){for(;Je<Q.length;Je++)Ye=Ee(Y,Q[Je],Te),Ye!==null&&(G=_(Ye,G,Je),qe===null?He=Ye:qe.sibling=Ye,qe=Ye);return Ut&&kr(Y,Je),He}for(Ye=f(Y,Ye);Je<Q.length;Je++)rn=Ne(Ye,Y,Je,Q[Je],Te),rn!==null&&(i&&rn.alternate!==null&&Ye.delete(rn.key===null?Je:rn.key),G=_(rn,G,Je),qe===null?He=rn:qe.sibling=rn,qe=rn);return i&&Ye.forEach(function(hr){return s(Y,hr)}),Ut&&kr(Y,Je),He}function ke(Y,G,Q,Te){var He=te(Q);if(typeof He!="function")throw Error(t(150));if(Q=He.call(Q),Q==null)throw Error(t(151));for(var qe=He=null,Ye=G,Je=G=0,rn=null,St=Q.next();Ye!==null&&!St.done;Je++,St=Q.next()){Ye.index>Je?(rn=Ye,Ye=null):rn=Ye.sibling;var hr=_e(Y,Ye,St.value,Te);if(hr===null){Ye===null&&(Ye=rn);break}i&&Ye&&hr.alternate===null&&s(Y,Ye),G=_(hr,G,Je),qe===null?He=hr:qe.sibling=hr,qe=hr,Ye=rn}if(St.done)return l(Y,Ye),Ut&&kr(Y,Je),He;if(Ye===null){for(;!St.done;Je++,St=Q.next())St=Ee(Y,St.value,Te),St!==null&&(G=_(St,G,Je),qe===null?He=St:qe.sibling=St,qe=St);return Ut&&kr(Y,Je),He}for(Ye=f(Y,Ye);!St.done;Je++,St=Q.next())St=Ne(Ye,Y,Je,St.value,Te),St!==null&&(i&&St.alternate!==null&&Ye.delete(St.key===null?Je:St.key),G=_(St,G,Je),qe===null?He=St:qe.sibling=St,qe=St);return i&&Ye.forEach(function(F_){return s(Y,F_)}),Ut&&kr(Y,Je),He}function Vt(Y,G,Q,Te){if(typeof Q=="object"&&Q!==null&&Q.type===U&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case B:e:{for(var He=Q.key,qe=G;qe!==null;){if(qe.key===He){if(He=Q.type,He===U){if(qe.tag===7){l(Y,qe.sibling),G=m(qe,Q.props.children),G.return=Y,Y=G;break e}}else if(qe.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===de&&Lh(He)===qe.type){l(Y,qe.sibling),G=m(qe,Q.props),G.ref=Oo(Y,qe,Q),G.return=Y,Y=G;break e}l(Y,qe);break}else s(Y,qe);qe=qe.sibling}Q.type===U?(G=Xr(Q.props.children,Y.mode,Te,Q.key),G.return=Y,Y=G):(Te=dl(Q.type,Q.key,Q.props,null,Y.mode,Te),Te.ref=Oo(Y,G,Q),Te.return=Y,Y=Te)}return T(Y);case O:e:{for(qe=Q.key;G!==null;){if(G.key===qe)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){l(Y,G.sibling),G=m(G,Q.children||[]),G.return=Y,Y=G;break e}else{l(Y,G);break}else s(Y,G);G=G.sibling}G=ef(Q,Y.mode,Te),G.return=Y,Y=G}return T(Y);case de:return qe=Q._init,Vt(Y,G,qe(Q._payload),Te)}if(R(Q))return Oe(Y,G,Q,Te);if(te(Q))return ke(Y,G,Q,Te);$a(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,G!==null&&G.tag===6?(l(Y,G.sibling),G=m(G,Q),G.return=Y,Y=G):(l(Y,G),G=Jc(Q,Y.mode,Te),G.return=Y,Y=G),T(Y)):l(Y,G)}return Vt}var As=Nh(!0),Dh=Nh(!1),Fo={},gi=nr(Fo),ko=nr(Fo),zo=nr(Fo);function Br(i){if(i===Fo)throw Error(t(174));return i}function vc(i,s){switch(Rt(zo,s),Rt(ko,i),Rt(gi,Fo),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ce(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Ce(s,i)}Lt(gi),Rt(gi,s)}function Cs(){Lt(gi),Lt(ko),Lt(zo)}function Ih(i){Br(zo.current);var s=Br(gi.current),l=Ce(s,i.type);s!==l&&(Rt(ko,i),Rt(gi,l))}function _c(i){ko.current===i&&(Lt(gi),Lt(ko))}var Ot=nr(0);function qa(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var yc=[];function xc(){for(var i=0;i<yc.length;i++)yc[i]._workInProgressVersionPrimary=null;yc.length=0}var Ya=P.ReactCurrentDispatcher,Sc=P.ReactCurrentBatchConfig,Hr=0,Ft=null,Yt=null,tn=null,Ka=!1,Bo=!1,Ho=0,o_=0;function gn(){throw Error(t(321))}function Ec(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!si(i[l],s[l]))return!1;return!0}function Mc(i,s,l,f,m,_){if(Hr=_,Ft=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ya.current=i===null||i.memoizedState===null?c_:f_,i=l(f,m),Bo){_=0;do{if(Bo=!1,Ho=0,25<=_)throw Error(t(301));_+=1,tn=Yt=null,s.updateQueue=null,Ya.current=d_,i=l(f,m)}while(Bo)}if(Ya.current=Ja,s=Yt!==null&&Yt.next!==null,Hr=0,tn=Yt=Ft=null,Ka=!1,s)throw Error(t(300));return i}function wc(){var i=Ho!==0;return Ho=0,i}function vi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ft.memoizedState=tn=i:tn=tn.next=i,tn}function Kn(){if(Yt===null){var i=Ft.alternate;i=i!==null?i.memoizedState:null}else i=Yt.next;var s=tn===null?Ft.memoizedState:tn.next;if(s!==null)tn=s,Yt=i;else{if(i===null)throw Error(t(310));Yt=i,i={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},tn===null?Ft.memoizedState=tn=i:tn=tn.next=i}return tn}function Vo(i,s){return typeof s=="function"?s(i):s}function Tc(i){var s=Kn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=Yt,m=f.baseQueue,_=l.pending;if(_!==null){if(m!==null){var T=m.next;m.next=_.next,_.next=T}f.baseQueue=m=_,l.pending=null}if(m!==null){_=m.next,f=f.baseState;var F=T=null,H=null,re=_;do{var ye=re.lane;if((Hr&ye)===ye)H!==null&&(H=H.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),f=re.hasEagerState?re.eagerState:i(f,re.action);else{var Ee={lane:ye,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};H===null?(F=H=Ee,T=f):H=H.next=Ee,Ft.lanes|=ye,Vr|=ye}re=re.next}while(re!==null&&re!==_);H===null?T=f:H.next=F,si(f,s.memoizedState)||(Nn=!0),s.memoizedState=f,s.baseState=T,s.baseQueue=H,l.lastRenderedState=f}if(i=l.interleaved,i!==null){m=i;do _=m.lane,Ft.lanes|=_,Vr|=_,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function bc(i){var s=Kn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,m=l.pending,_=s.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do _=i(_,T.action),T=T.next;while(T!==m);si(_,s.memoizedState)||(Nn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,f]}function Uh(){}function Oh(i,s){var l=Ft,f=Kn(),m=s(),_=!si(f.memoizedState,m);if(_&&(f.memoizedState=m,Nn=!0),f=f.queue,Ac(zh.bind(null,l,f,i),[i]),f.getSnapshot!==s||_||tn!==null&&tn.memoizedState.tag&1){if(l.flags|=2048,Go(9,kh.bind(null,l,f,m,s),void 0,null),nn===null)throw Error(t(349));Hr&30||Fh(l,s,m)}return m}function Fh(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Ft.updateQueue,s===null?(s={lastEffect:null,stores:null},Ft.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function kh(i,s,l,f){s.value=l,s.getSnapshot=f,Bh(s)&&Hh(i)}function zh(i,s,l){return l(function(){Bh(s)&&Hh(i)})}function Bh(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!si(i,l)}catch{return!0}}function Hh(i){var s=Ii(i,1);s!==null&&ci(s,i,1,-1)}function Vh(i){var s=vi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:i},s.queue=i,i=i.dispatch=u_.bind(null,Ft,i),[s.memoizedState,i]}function Go(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=Ft.updateQueue,s===null?(s={lastEffect:null,stores:null},Ft.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function Gh(){return Kn().memoizedState}function Za(i,s,l,f){var m=vi();Ft.flags|=i,m.memoizedState=Go(1|s,l,void 0,f===void 0?null:f)}function Qa(i,s,l,f){var m=Kn();f=f===void 0?null:f;var _=void 0;if(Yt!==null){var T=Yt.memoizedState;if(_=T.destroy,f!==null&&Ec(f,T.deps)){m.memoizedState=Go(s,l,_,f);return}}Ft.flags|=i,m.memoizedState=Go(1|s,l,_,f)}function Wh(i,s){return Za(8390656,8,i,s)}function Ac(i,s){return Qa(2048,8,i,s)}function jh(i,s){return Qa(4,2,i,s)}function Xh(i,s){return Qa(4,4,i,s)}function $h(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function qh(i,s,l){return l=l!=null?l.concat([i]):null,Qa(4,4,$h.bind(null,s,i),l)}function Cc(){}function Yh(i,s){var l=Kn();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Ec(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function Kh(i,s){var l=Kn();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Ec(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function Zh(i,s,l){return Hr&21?(si(l,s)||(l=Md(),Ft.lanes|=l,Vr|=l,i.baseState=!0),s):(i.baseState&&(i.baseState=!1,Nn=!0),i.memoizedState=l)}function a_(i,s){var l=Et;Et=l!==0&&4>l?l:4,i(!0);var f=Sc.transition;Sc.transition={};try{i(!1),s()}finally{Et=l,Sc.transition=f}}function Qh(){return Kn().memoizedState}function l_(i,s,l){var f=cr(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Jh(i))ep(s,l);else if(l=Mh(i,s,l,f),l!==null){var m=wn();ci(l,i,f,m),tp(l,s,f)}}function u_(i,s,l){var f=cr(i),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Jh(i))ep(s,m);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var T=s.lastRenderedState,F=_(T,l);if(m.hasEagerState=!0,m.eagerState=F,si(F,T)){var H=s.interleaved;H===null?(m.next=m,hc(s)):(m.next=H.next,H.next=m),s.interleaved=m;return}}catch{}finally{}l=Mh(i,s,m,f),l!==null&&(m=wn(),ci(l,i,f,m),tp(l,s,f))}}function Jh(i){var s=i.alternate;return i===Ft||s!==null&&s===Ft}function ep(i,s){Bo=Ka=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function tp(i,s,l){if(l&4194240){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Cu(i,l)}}var Ja={readContext:Yn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},c_={readContext:Yn,useCallback:function(i,s){return vi().memoizedState=[i,s===void 0?null:s],i},useContext:Yn,useEffect:Wh,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Za(4194308,4,$h.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Za(4194308,4,i,s)},useInsertionEffect:function(i,s){return Za(4,2,i,s)},useMemo:function(i,s){var l=vi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=vi();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=l_.bind(null,Ft,i),[f.memoizedState,i]},useRef:function(i){var s=vi();return i={current:i},s.memoizedState=i},useState:Vh,useDebugValue:Cc,useDeferredValue:function(i){return vi().memoizedState=i},useTransition:function(){var i=Vh(!1),s=i[0];return i=a_.bind(null,i[1]),vi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=Ft,m=vi();if(Ut){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),nn===null)throw Error(t(349));Hr&30||Fh(f,s,l)}m.memoizedState=l;var _={value:l,getSnapshot:s};return m.queue=_,Wh(zh.bind(null,f,_,i),[i]),f.flags|=2048,Go(9,kh.bind(null,f,_,l,s),void 0,null),l},useId:function(){var i=vi(),s=nn.identifierPrefix;if(Ut){var l=Di,f=Ni;l=(f&~(1<<32-qt(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ho++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=o_++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},f_={readContext:Yn,useCallback:Yh,useContext:Yn,useEffect:Ac,useImperativeHandle:qh,useInsertionEffect:jh,useLayoutEffect:Xh,useMemo:Kh,useReducer:Tc,useRef:Gh,useState:function(){return Tc(Vo)},useDebugValue:Cc,useDeferredValue:function(i){var s=Kn();return Zh(s,Yt.memoizedState,i)},useTransition:function(){var i=Tc(Vo)[0],s=Kn().memoizedState;return[i,s]},useMutableSource:Uh,useSyncExternalStore:Oh,useId:Qh,unstable_isNewReconciler:!1},d_={readContext:Yn,useCallback:Yh,useContext:Yn,useEffect:Ac,useImperativeHandle:qh,useInsertionEffect:jh,useLayoutEffect:Xh,useMemo:Kh,useReducer:bc,useRef:Gh,useState:function(){return bc(Vo)},useDebugValue:Cc,useDeferredValue:function(i){var s=Kn();return Yt===null?s.memoizedState=i:Zh(s,Yt.memoizedState,i)},useTransition:function(){var i=bc(Vo)[0],s=Kn().memoizedState;return[i,s]},useMutableSource:Uh,useSyncExternalStore:Oh,useId:Qh,unstable_isNewReconciler:!1};function Rs(i,s){try{var l="",f=s;do l+=ce(f),f=f.return;while(f);var m=l}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:m,digest:null}}function Rc(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Pc(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var h_=typeof WeakMap=="function"?WeakMap:Map;function np(i,s,l){l=Ui(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){ol||(ol=!0,jc=f),Pc(i,s)},l}function ip(i,s,l){l=Ui(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;l.payload=function(){return f(m)},l.callback=function(){Pc(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Pc(i,s),typeof f!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),l}function rp(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new h_;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(l)||(m.add(l),i=A_.bind(null,i,s,l),s.then(i,i))}function sp(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function op(i,s,l,f,m){return i.mode&1?(i.flags|=65536,i.lanes=m,i):(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Ui(-1,1),s.tag=2,or(l,s,1))),l.lanes|=1),i)}var p_=P.ReactCurrentOwner,Nn=!1;function Mn(i,s,l,f){s.child=i===null?Dh(s,null,l,f):As(s,i.child,l,f)}function ap(i,s,l,f,m){l=l.render;var _=s.ref;return bs(s,m),f=Mc(i,s,l,f,_,m),l=wc(),i!==null&&!Nn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,Oi(i,s,m)):(Ut&&l&&rc(s),s.flags|=1,Mn(i,s,f,m),s.child)}function lp(i,s,l,f,m){if(i===null){var _=l.type;return typeof _=="function"&&!Qc(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,up(i,s,_,f,m)):(i=dl(l.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,!(i.lanes&m)){var T=_.memoizedProps;if(l=l.compare,l=l!==null?l:Ro,l(T,f)&&i.ref===s.ref)return Oi(i,s,m)}return s.flags|=1,i=dr(_,f),i.ref=s.ref,i.return=s,s.child=i}function up(i,s,l,f,m){if(i!==null){var _=i.memoizedProps;if(Ro(_,f)&&i.ref===s.ref)if(Nn=!1,s.pendingProps=f=_,(i.lanes&m)!==0)i.flags&131072&&(Nn=!0);else return s.lanes=i.lanes,Oi(i,s,m)}return Lc(i,s,l,f,m)}function cp(i,s,l){var f=s.pendingProps,m=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(Ls,Gn),Gn|=l;else{if(!(l&1073741824))return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Rt(Ls,Gn),Gn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:l,Rt(Ls,Gn),Gn|=f}else _!==null?(f=_.baseLanes|l,s.memoizedState=null):f=l,Rt(Ls,Gn),Gn|=f;return Mn(i,s,m,l),s.child}function fp(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Lc(i,s,l,f,m){var _=Ln(l)?Or:mn.current;return _=Ss(s,_),bs(s,m),l=Mc(i,s,l,f,_,m),f=wc(),i!==null&&!Nn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,Oi(i,s,m)):(Ut&&f&&rc(s),s.flags|=1,Mn(i,s,l,m),s.child)}function dp(i,s,l,f,m){if(Ln(l)){var _=!0;Fa(s)}else _=!1;if(bs(s,m),s.stateNode===null)tl(i,s),Rh(s,l,f),gc(s,l,f,m),f=!0;else if(i===null){var T=s.stateNode,F=s.memoizedProps;T.props=F;var H=T.context,re=l.contextType;typeof re=="object"&&re!==null?re=Yn(re):(re=Ln(l)?Or:mn.current,re=Ss(s,re));var ye=l.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==f||H!==re)&&Ph(s,T,f,re),sr=!1;var _e=s.memoizedState;T.state=_e,ja(s,f,T,m),H=s.memoizedState,F!==f||_e!==H||Pn.current||sr?(typeof ye=="function"&&(mc(s,l,ye,f),H=s.memoizedState),(F=sr||Ch(s,l,F,f,_e,H,re))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=H),T.props=f,T.state=H,T.context=re,f=F):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{T=s.stateNode,wh(i,s),F=s.memoizedProps,re=s.type===s.elementType?F:ai(s.type,F),T.props=re,Ee=s.pendingProps,_e=T.context,H=l.contextType,typeof H=="object"&&H!==null?H=Yn(H):(H=Ln(l)?Or:mn.current,H=Ss(s,H));var Ne=l.getDerivedStateFromProps;(ye=typeof Ne=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==Ee||_e!==H)&&Ph(s,T,f,H),sr=!1,_e=s.memoizedState,T.state=_e,ja(s,f,T,m);var Oe=s.memoizedState;F!==Ee||_e!==Oe||Pn.current||sr?(typeof Ne=="function"&&(mc(s,l,Ne,f),Oe=s.memoizedState),(re=sr||Ch(s,l,re,f,_e,Oe,H)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,Oe,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,Oe,H)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=Oe),T.props=f,T.state=Oe,T.context=H,f=re):(typeof T.componentDidUpdate!="function"||F===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),f=!1)}return Nc(i,s,l,f,_,m)}function Nc(i,s,l,f,m,_){fp(i,s);var T=(s.flags&128)!==0;if(!f&&!T)return m&&gh(s,l,!1),Oi(i,s,_);f=s.stateNode,p_.current=s;var F=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&T?(s.child=As(s,i.child,null,_),s.child=As(s,null,F,_)):Mn(i,s,F,_),s.memoizedState=f.state,m&&gh(s,l,!0),s.child}function hp(i){var s=i.stateNode;s.pendingContext?ph(i,s.pendingContext,s.pendingContext!==s.context):s.context&&ph(i,s.context,!1),vc(i,s.containerInfo)}function pp(i,s,l,f,m){return ws(),lc(m),s.flags|=256,Mn(i,s,l,f),s.child}var Dc={dehydrated:null,treeContext:null,retryLane:0};function Ic(i){return{baseLanes:i,cachePool:null,transitions:null}}function mp(i,s,l){var f=s.pendingProps,m=Ot.current,_=!1,T=(s.flags&128)!==0,F;if((F=T)||(F=i!==null&&i.memoizedState===null?!1:(m&2)!==0),F?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Rt(Ot,m&1),i===null)return ac(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(s.mode&1?i.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(T=f.children,i=f.fallback,_?(f=s.mode,_=s.child,T={mode:"hidden",children:T},!(f&1)&&_!==null?(_.childLanes=0,_.pendingProps=T):_=hl(T,f,0,null),i=Xr(i,f,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=Ic(l),s.memoizedState=Dc,i):Uc(s,T));if(m=i.memoizedState,m!==null&&(F=m.dehydrated,F!==null))return m_(i,s,T,f,F,m,l);if(_){_=f.fallback,T=s.mode,m=i.child,F=m.sibling;var H={mode:"hidden",children:f.children};return!(T&1)&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=H,s.deletions=null):(f=dr(m,H),f.subtreeFlags=m.subtreeFlags&14680064),F!==null?_=dr(F,_):(_=Xr(_,T,l,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,T=i.child.memoizedState,T=T===null?Ic(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~l,s.memoizedState=Dc,f}return _=i.child,i=_.sibling,f=dr(_,{mode:"visible",children:f.children}),!(s.mode&1)&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function Uc(i,s){return s=hl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function el(i,s,l,f){return f!==null&&lc(f),As(s,i.child,null,l),i=Uc(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function m_(i,s,l,f,m,_,T){if(l)return s.flags&256?(s.flags&=-257,f=Rc(Error(t(422))),el(i,s,T,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,m=s.mode,f=hl({mode:"visible",children:f.children},m,0,null),_=Xr(_,m,T,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,s.mode&1&&As(s,i.child,null,T),s.child.memoizedState=Ic(T),s.memoizedState=Dc,_);if(!(s.mode&1))return el(i,s,T,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var F=f.dgst;return f=F,_=Error(t(419)),f=Rc(_,f,void 0),el(i,s,T,f)}if(F=(T&i.childLanes)!==0,Nn||F){if(f=nn,f!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(f.suspendedLanes|T)?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,Ii(i,m),ci(f,i,m,-1))}return Zc(),f=Rc(Error(t(421))),el(i,s,T,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=C_.bind(null,i),m._reactRetry=s,null):(i=_.treeContext,Vn=tr(m.nextSibling),Hn=s,Ut=!0,oi=null,i!==null&&($n[qn++]=Ni,$n[qn++]=Di,$n[qn++]=Fr,Ni=i.id,Di=i.overflow,Fr=s),s=Uc(s,f.children),s.flags|=4096,s)}function gp(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),dc(i.return,s,l)}function Oc(i,s,l,f,m){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=l,_.tailMode=m)}function vp(i,s,l){var f=s.pendingProps,m=f.revealOrder,_=f.tail;if(Mn(i,s,f.children,l),f=Ot.current,f&2)f=f&1|2,s.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&gp(i,l,s);else if(i.tag===19)gp(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Rt(Ot,f),!(s.mode&1))s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&qa(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Oc(s,!1,m,l,_);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&qa(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Oc(s,!0,l,null,_);break;case"together":Oc(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function tl(i,s){!(s.mode&1)&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Oi(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Vr|=s.lanes,!(l&s.childLanes))return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=dr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=dr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function g_(i,s,l){switch(s.tag){case 3:hp(s),ws();break;case 5:Ih(s);break;case 1:Ln(s.type)&&Fa(s);break;case 4:vc(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;Rt(Va,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Rt(Ot,Ot.current&1),s.flags|=128,null):l&s.child.childLanes?mp(i,s,l):(Rt(Ot,Ot.current&1),i=Oi(i,s,l),i!==null?i.sibling:null);Rt(Ot,Ot.current&1);break;case 19:if(f=(l&s.childLanes)!==0,i.flags&128){if(f)return vp(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Rt(Ot,Ot.current),f)break;return null;case 22:case 23:return s.lanes=0,cp(i,s,l)}return Oi(i,s,l)}var _p,Fc,yp,xp;_p=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Fc=function(){},yp=function(i,s,l,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,Br(gi.current);var _=null;switch(l){case"input":m=Xe(i,m),f=Xe(i,f),_=[];break;case"select":m=L({},m,{value:void 0}),f=L({},f,{value:void 0}),_=[];break;case"textarea":m=pe(i,m),f=pe(i,f),_=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Ia)}xt(l,f);var T;l=null;for(re in m)if(!f.hasOwnProperty(re)&&m.hasOwnProperty(re)&&m[re]!=null)if(re==="style"){var F=m[re];for(T in F)F.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?_||(_=[]):(_=_||[]).push(re,null));for(re in f){var H=f[re];if(F=m!=null?m[re]:void 0,f.hasOwnProperty(re)&&H!==F&&(H!=null||F!=null))if(re==="style")if(F){for(T in F)!F.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in H)H.hasOwnProperty(T)&&F[T]!==H[T]&&(l||(l={}),l[T]=H[T])}else l||(_||(_=[]),_.push(re,l)),l=H;else re==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(_=_||[]).push(re,H)):re==="children"?typeof H!="string"&&typeof H!="number"||(_=_||[]).push(re,""+H):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(H!=null&&re==="onScroll"&&Pt("scroll",i),_||F===H||(_=[])):(_=_||[]).push(re,H))}l&&(_=_||[]).push("style",l);var re=_;(s.updateQueue=re)&&(s.flags|=4)}},xp=function(i,s,l,f){l!==f&&(s.flags|=4)};function Wo(i,s){if(!Ut)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function vn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function v_(i,s,l){var f=s.pendingProps;switch(sc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(s),null;case 1:return Ln(s.type)&&Oa(),vn(s),null;case 3:return f=s.stateNode,Cs(),Lt(Pn),Lt(mn),xc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Ha(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,oi!==null&&(qc(oi),oi=null))),Fc(i,s),vn(s),null;case 5:_c(s);var m=Br(zo.current);if(l=s.type,i!==null&&s.stateNode!=null)yp(i,s,l,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return vn(s),null}if(i=Br(gi.current),Ha(s)){f=s.stateNode,l=s.type;var _=s.memoizedProps;switch(f[mi]=s,f[Io]=_,i=(s.mode&1)!==0,l){case"dialog":Pt("cancel",f),Pt("close",f);break;case"iframe":case"object":case"embed":Pt("load",f);break;case"video":case"audio":for(m=0;m<Lo.length;m++)Pt(Lo[m],f);break;case"source":Pt("error",f);break;case"img":case"image":case"link":Pt("error",f),Pt("load",f);break;case"details":Pt("toggle",f);break;case"input":lt(f,_),Pt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Pt("invalid",f);break;case"textarea":xe(f,_),Pt("invalid",f)}xt(l,_),m=null;for(var T in _)if(_.hasOwnProperty(T)){var F=_[T];T==="children"?typeof F=="string"?f.textContent!==F&&(_.suppressHydrationWarning!==!0&&Da(f.textContent,F,i),m=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(_.suppressHydrationWarning!==!0&&Da(f.textContent,F,i),m=["children",""+F]):o.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&Pt("scroll",f)}switch(l){case"input":mt(f),bt(f,_,!0);break;case"textarea":mt(f),We(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=Ia)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Re(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=T.createElement(l,{is:f.is}):(i=T.createElement(l),l==="select"&&(T=i,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):i=T.createElementNS(i,l),i[mi]=s,i[Io]=f,_p(i,s,!1,!1),s.stateNode=i;e:{switch(T=nt(l,f),l){case"dialog":Pt("cancel",i),Pt("close",i),m=f;break;case"iframe":case"object":case"embed":Pt("load",i),m=f;break;case"video":case"audio":for(m=0;m<Lo.length;m++)Pt(Lo[m],i);m=f;break;case"source":Pt("error",i),m=f;break;case"img":case"image":case"link":Pt("error",i),Pt("load",i),m=f;break;case"details":Pt("toggle",i),m=f;break;case"input":lt(i,f),m=Xe(i,f),Pt("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=L({},f,{value:void 0}),Pt("invalid",i);break;case"textarea":xe(i,f),m=pe(i,f),Pt("invalid",i);break;default:m=f}xt(l,m),F=m;for(_ in F)if(F.hasOwnProperty(_)){var H=F[_];_==="style"?tt(i,H):_==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&be(i,H)):_==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&Be(i,H):typeof H=="number"&&Be(i,""+H):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?H!=null&&_==="onScroll"&&Pt("scroll",i):H!=null&&b(i,_,H,T))}switch(l){case"input":mt(i),bt(i,f,!1);break;case"textarea":mt(i),We(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Ae(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?se(i,!!f.multiple,_,!1):f.defaultValue!=null&&se(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=Ia)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return vn(s),null;case 6:if(i&&s.stateNode!=null)xp(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=Br(zo.current),Br(gi.current),Ha(s)){if(f=s.stateNode,l=s.memoizedProps,f[mi]=s,(_=f.nodeValue!==l)&&(i=Hn,i!==null))switch(i.tag){case 3:Da(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Da(f.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[mi]=s,s.stateNode=f}return vn(s),null;case 13:if(Lt(Ot),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Ut&&Vn!==null&&s.mode&1&&!(s.flags&128))Eh(),ws(),s.flags|=98560,_=!1;else if(_=Ha(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[mi]=s}else ws(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;vn(s),_=!1}else oi!==null&&(qc(oi),oi=null),_=!0;if(!_)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,s.mode&1&&(i===null||Ot.current&1?Kt===0&&(Kt=3):Zc())),s.updateQueue!==null&&(s.flags|=4),vn(s),null);case 4:return Cs(),Fc(i,s),i===null&&No(s.stateNode.containerInfo),vn(s),null;case 10:return fc(s.type._context),vn(s),null;case 17:return Ln(s.type)&&Oa(),vn(s),null;case 19:if(Lt(Ot),_=s.memoizedState,_===null)return vn(s),null;if(f=(s.flags&128)!==0,T=_.rendering,T===null)if(f)Wo(_,!1);else{if(Kt!==0||i!==null&&i.flags&128)for(i=s.child;i!==null;){if(T=qa(i),T!==null){for(s.flags|=128,Wo(_,!1),f=T.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)_=l,i=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Rt(Ot,Ot.current&1|2),s.child}i=i.sibling}_.tail!==null&&Fe()>Ns&&(s.flags|=128,f=!0,Wo(_,!1),s.lanes=4194304)}else{if(!f)if(i=qa(T),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Wo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Ut)return vn(s),null}else 2*Fe()-_.renderingStartTime>Ns&&l!==1073741824&&(s.flags|=128,f=!0,Wo(_,!1),s.lanes=4194304);_.isBackwards?(T.sibling=s.child,s.child=T):(l=_.last,l!==null?l.sibling=T:s.child=T,_.last=T)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Fe(),s.sibling=null,l=Ot.current,Rt(Ot,f?l&1|2:l&1),s):(vn(s),null);case 22:case 23:return Kc(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&s.mode&1?Gn&1073741824&&(vn(s),s.subtreeFlags&6&&(s.flags|=8192)):vn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function __(i,s){switch(sc(s),s.tag){case 1:return Ln(s.type)&&Oa(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Cs(),Lt(Pn),Lt(mn),xc(),i=s.flags,i&65536&&!(i&128)?(s.flags=i&-65537|128,s):null;case 5:return _c(s),null;case 13:if(Lt(Ot),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ws()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Lt(Ot),null;case 4:return Cs(),null;case 10:return fc(s.type._context),null;case 22:case 23:return Kc(),null;case 24:return null;default:return null}}var nl=!1,_n=!1,y_=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Ps(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){kt(i,s,f)}else l.current=null}function kc(i,s,l){try{l()}catch(f){kt(i,s,f)}}var Sp=!1;function x_(i,s){if(Ku=Ea,i=Qd(),Vu(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var T=0,F=-1,H=-1,re=0,ye=0,Ee=i,_e=null;t:for(;;){for(var Ne;Ee!==l||m!==0&&Ee.nodeType!==3||(F=T+m),Ee!==_||f!==0&&Ee.nodeType!==3||(H=T+f),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(Ne=Ee.firstChild)!==null;)_e=Ee,Ee=Ne;for(;;){if(Ee===i)break t;if(_e===l&&++re===m&&(F=T),_e===_&&++ye===f&&(H=T),(Ne=Ee.nextSibling)!==null)break;Ee=_e,_e=Ee.parentNode}Ee=Ne}l=F===-1||H===-1?null:{start:F,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(Zu={focusedElem:i,selectionRange:l},Ea=!1,Ue=s;Ue!==null;)if(s=Ue,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Ue=i;else for(;Ue!==null;){s=Ue;try{var Oe=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Oe!==null){var ke=Oe.memoizedProps,Vt=Oe.memoizedState,Y=s.stateNode,G=Y.getSnapshotBeforeUpdate(s.elementType===s.type?ke:ai(s.type,ke),Vt);Y.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Q=s.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){kt(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,Ue=i;break}Ue=s.return}return Oe=Sp,Sp=!1,Oe}function jo(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var _=m.destroy;m.destroy=void 0,_!==void 0&&kc(s,l,_)}m=m.next}while(m!==f)}}function il(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function zc(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function Ep(i){var s=i.alternate;s!==null&&(i.alternate=null,Ep(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[mi],delete s[Io],delete s[tc],delete s[n_],delete s[i_])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Mp(i){return i.tag===5||i.tag===3||i.tag===4}function wp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Mp(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Bc(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Ia));else if(f!==4&&(i=i.child,i!==null))for(Bc(i,s,l),i=i.sibling;i!==null;)Bc(i,s,l),i=i.sibling}function Hc(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Hc(i,s,l),i=i.sibling;i!==null;)Hc(i,s,l),i=i.sibling}var ln=null,li=!1;function ar(i,s,l){for(l=l.child;l!==null;)Tp(i,s,l),l=l.sibling}function Tp(i,s,l){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Qe,l)}catch{}switch(l.tag){case 5:_n||Ps(l,s);case 6:var f=ln,m=li;ln=null,ar(i,s,l),ln=f,li=m,ln!==null&&(li?(i=ln,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):ln.removeChild(l.stateNode));break;case 18:ln!==null&&(li?(i=ln,l=l.stateNode,i.nodeType===8?ec(i.parentNode,l):i.nodeType===1&&ec(i,l),Mo(i)):ec(ln,l.stateNode));break;case 4:f=ln,m=li,ln=l.stateNode.containerInfo,li=!0,ar(i,s,l),ln=f,li=m;break;case 0:case 11:case 14:case 15:if(!_n&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var _=m,T=_.destroy;_=_.tag,T!==void 0&&(_&2||_&4)&&kc(l,s,T),m=m.next}while(m!==f)}ar(i,s,l);break;case 1:if(!_n&&(Ps(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(F){kt(l,s,F)}ar(i,s,l);break;case 21:ar(i,s,l);break;case 22:l.mode&1?(_n=(f=_n)||l.memoizedState!==null,ar(i,s,l),_n=f):ar(i,s,l);break;default:ar(i,s,l)}}function bp(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new y_),s.forEach(function(f){var m=R_.bind(null,i,f);l.has(f)||(l.add(f),f.then(m,m))})}}function ui(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var _=i,T=s,F=T;e:for(;F!==null;){switch(F.tag){case 5:ln=F.stateNode,li=!1;break e;case 3:ln=F.stateNode.containerInfo,li=!0;break e;case 4:ln=F.stateNode.containerInfo,li=!0;break e}F=F.return}if(ln===null)throw Error(t(160));Tp(_,T,m),ln=null,li=!1;var H=m.alternate;H!==null&&(H.return=null),m.return=null}catch(re){kt(m,s,re)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ap(s,i),s=s.sibling}function Ap(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(ui(s,i),_i(i),f&4){try{jo(3,i,i.return),il(3,i)}catch(ke){kt(i,i.return,ke)}try{jo(5,i,i.return)}catch(ke){kt(i,i.return,ke)}}break;case 1:ui(s,i),_i(i),f&512&&l!==null&&Ps(l,l.return);break;case 5:if(ui(s,i),_i(i),f&512&&l!==null&&Ps(l,l.return),i.flags&32){var m=i.stateNode;try{Be(m,"")}catch(ke){kt(i,i.return,ke)}}if(f&4&&(m=i.stateNode,m!=null)){var _=i.memoizedProps,T=l!==null?l.memoizedProps:_,F=i.type,H=i.updateQueue;if(i.updateQueue=null,H!==null)try{F==="input"&&_.type==="radio"&&_.name!=null&&et(m,_),nt(F,T);var re=nt(F,_);for(T=0;T<H.length;T+=2){var ye=H[T],Ee=H[T+1];ye==="style"?tt(m,Ee):ye==="dangerouslySetInnerHTML"?be(m,Ee):ye==="children"?Be(m,Ee):b(m,ye,Ee,re)}switch(F){case"input":ut(m,_);break;case"textarea":Se(m,_);break;case"select":var _e=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var Ne=_.value;Ne!=null?se(m,!!_.multiple,Ne,!1):_e!==!!_.multiple&&(_.defaultValue!=null?se(m,!!_.multiple,_.defaultValue,!0):se(m,!!_.multiple,_.multiple?[]:"",!1))}m[Io]=_}catch(ke){kt(i,i.return,ke)}}break;case 6:if(ui(s,i),_i(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,_=i.memoizedProps;try{m.nodeValue=_}catch(ke){kt(i,i.return,ke)}}break;case 3:if(ui(s,i),_i(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Mo(s.containerInfo)}catch(ke){kt(i,i.return,ke)}break;case 4:ui(s,i),_i(i);break;case 13:ui(s,i),_i(i),m=i.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(Wc=Fe())),f&4&&bp(i);break;case 22:if(ye=l!==null&&l.memoizedState!==null,i.mode&1?(_n=(re=_n)||ye,ui(s,i),_n=re):ui(s,i),_i(i),f&8192){if(re=i.memoizedState!==null,(i.stateNode.isHidden=re)&&!ye&&i.mode&1)for(Ue=i,ye=i.child;ye!==null;){for(Ee=Ue=ye;Ue!==null;){switch(_e=Ue,Ne=_e.child,_e.tag){case 0:case 11:case 14:case 15:jo(4,_e,_e.return);break;case 1:Ps(_e,_e.return);var Oe=_e.stateNode;if(typeof Oe.componentWillUnmount=="function"){f=_e,l=_e.return;try{s=f,Oe.props=s.memoizedProps,Oe.state=s.memoizedState,Oe.componentWillUnmount()}catch(ke){kt(f,l,ke)}}break;case 5:Ps(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Pp(Ee);continue}}Ne!==null?(Ne.return=_e,Ue=Ne):Pp(Ee)}ye=ye.sibling}e:for(ye=null,Ee=i;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{m=Ee.stateNode,re?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(F=Ee.stateNode,H=Ee.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=De("display",T))}catch(ke){kt(i,i.return,ke)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=re?"":Ee.memoizedProps}catch(ke){kt(i,i.return,ke)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===i)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===i)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===i)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:ui(s,i),_i(i),f&4&&bp(i);break;case 21:break;default:ui(s,i),_i(i)}}function _i(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(Mp(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Be(m,""),f.flags&=-33);var _=wp(i);Hc(i,_,m);break;case 3:case 4:var T=f.stateNode.containerInfo,F=wp(i);Bc(i,F,T);break;default:throw Error(t(161))}}catch(H){kt(i,i.return,H)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function S_(i,s,l){Ue=i,Cp(i)}function Cp(i,s,l){for(var f=(i.mode&1)!==0;Ue!==null;){var m=Ue,_=m.child;if(m.tag===22&&f){var T=m.memoizedState!==null||nl;if(!T){var F=m.alternate,H=F!==null&&F.memoizedState!==null||_n;F=nl;var re=_n;if(nl=T,(_n=H)&&!re)for(Ue=m;Ue!==null;)T=Ue,H=T.child,T.tag===22&&T.memoizedState!==null?Lp(m):H!==null?(H.return=T,Ue=H):Lp(m);for(;_!==null;)Ue=_,Cp(_),_=_.sibling;Ue=m,nl=F,_n=re}Rp(i)}else m.subtreeFlags&8772&&_!==null?(_.return=m,Ue=_):Rp(i)}}function Rp(i){for(;Ue!==null;){var s=Ue;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:_n||il(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!_n)if(l===null)f.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:ai(s.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&bh(s,_,f);break;case 3:var T=s.updateQueue;if(T!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}bh(s,T,l)}break;case 5:var F=s.stateNode;if(l===null&&s.flags&4){l=F;var H=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var re=s.alternate;if(re!==null){var ye=re.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&Mo(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||s.flags&512&&zc(s)}catch(_e){kt(s,s.return,_e)}}if(s===i){Ue=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ue=l;break}Ue=s.return}}function Pp(i){for(;Ue!==null;){var s=Ue;if(s===i){Ue=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ue=l;break}Ue=s.return}}function Lp(i){for(;Ue!==null;){var s=Ue;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{il(4,s)}catch(H){kt(s,l,H)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(H){kt(s,m,H)}}var _=s.return;try{zc(s)}catch(H){kt(s,_,H)}break;case 5:var T=s.return;try{zc(s)}catch(H){kt(s,T,H)}}}catch(H){kt(s,s.return,H)}if(s===i){Ue=null;break}var F=s.sibling;if(F!==null){F.return=s.return,Ue=F;break}Ue=s.return}}var E_=Math.ceil,rl=P.ReactCurrentDispatcher,Vc=P.ReactCurrentOwner,Zn=P.ReactCurrentBatchConfig,yt=0,nn=null,Wt=null,un=0,Gn=0,Ls=nr(0),Kt=0,Xo=null,Vr=0,sl=0,Gc=0,$o=null,Dn=null,Wc=0,Ns=1/0,Fi=null,ol=!1,jc=null,lr=null,al=!1,ur=null,ll=0,qo=0,Xc=null,ul=-1,cl=0;function wn(){return yt&6?Fe():ul!==-1?ul:ul=Fe()}function cr(i){return i.mode&1?yt&2&&un!==0?un&-un:s_.transition!==null?(cl===0&&(cl=Md()),cl):(i=Et,i!==0||(i=window.event,i=i===void 0?16:Nd(i.type)),i):1}function ci(i,s,l,f){if(50<qo)throw qo=0,Xc=null,Error(t(185));_o(i,l,f),(!(yt&2)||i!==nn)&&(i===nn&&(!(yt&2)&&(sl|=l),Kt===4&&fr(i,un)),In(i,f),l===1&&yt===0&&!(s.mode&1)&&(Ns=Fe()+500,ka&&rr()))}function In(i,s){var l=i.callbackNode;bu(i,s);var f=an(i,i===nn?un:0);if(f===0)l!==null&&Ve(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&Ve(l),s===1)i.tag===0?r_(Dp.bind(null,i)):vh(Dp.bind(null,i)),e_(function(){!(yt&6)&&rr()}),l=null;else{switch(wd(f)){case 1:l=It;break;case 4:l=$t;break;case 16:l=en;break;case 536870912:l=_t;break;default:l=en}l=Hp(l,Np.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function Np(i,s){if(ul=-1,cl=0,yt&6)throw Error(t(327));var l=i.callbackNode;if(Ds()&&i.callbackNode!==l)return null;var f=an(i,i===nn?un:0);if(f===0)return null;if(f&30||f&i.expiredLanes||s)s=fl(i,f);else{s=f;var m=yt;yt|=2;var _=Up();(nn!==i||un!==s)&&(Fi=null,Ns=Fe()+500,Wr(i,s));do try{T_();break}catch(F){Ip(i,F)}while(!0);cc(),rl.current=_,yt=m,Wt!==null?s=0:(nn=null,un=0,s=Kt)}if(s!==0){if(s===2&&(m=fs(i),m!==0&&(f=m,s=$c(i,m))),s===1)throw l=Xo,Wr(i,0),fr(i,f),In(i,Fe()),l;if(s===6)fr(i,f);else{if(m=i.current.alternate,!(f&30)&&!M_(m)&&(s=fl(i,f),s===2&&(_=fs(i),_!==0&&(f=_,s=$c(i,_))),s===1))throw l=Xo,Wr(i,0),fr(i,f),In(i,Fe()),l;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:jr(i,Dn,Fi);break;case 3:if(fr(i,f),(f&130023424)===f&&(s=Wc+500-Fe(),10<s)){if(an(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){wn(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Ju(jr.bind(null,i,Dn,Fi),s);break}jr(i,Dn,Fi);break;case 4:if(fr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var T=31-qt(f);_=1<<T,T=s[T],T>m&&(m=T),f&=~_}if(f=m,f=Fe()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*E_(f/1960))-f,10<f){i.timeoutHandle=Ju(jr.bind(null,i,Dn,Fi),f);break}jr(i,Dn,Fi);break;case 5:jr(i,Dn,Fi);break;default:throw Error(t(329))}}}return In(i,Fe()),i.callbackNode===l?Np.bind(null,i):null}function $c(i,s){var l=$o;return i.current.memoizedState.isDehydrated&&(Wr(i,s).flags|=256),i=fl(i,s),i!==2&&(s=Dn,Dn=l,s!==null&&qc(s)),i}function qc(i){Dn===null?Dn=i:Dn.push.apply(Dn,i)}function M_(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],_=m.getSnapshot;m=m.value;try{if(!si(_(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function fr(i,s){for(s&=~Gc,s&=~sl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-qt(s),f=1<<l;i[l]=-1,s&=~f}}function Dp(i){if(yt&6)throw Error(t(327));Ds();var s=an(i,0);if(!(s&1))return In(i,Fe()),null;var l=fl(i,s);if(i.tag!==0&&l===2){var f=fs(i);f!==0&&(s=f,l=$c(i,f))}if(l===1)throw l=Xo,Wr(i,0),fr(i,s),In(i,Fe()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,jr(i,Dn,Fi),In(i,Fe()),null}function Yc(i,s){var l=yt;yt|=1;try{return i(s)}finally{yt=l,yt===0&&(Ns=Fe()+500,ka&&rr())}}function Gr(i){ur!==null&&ur.tag===0&&!(yt&6)&&Ds();var s=yt;yt|=1;var l=Zn.transition,f=Et;try{if(Zn.transition=null,Et=1,i)return i()}finally{Et=f,Zn.transition=l,yt=s,!(yt&6)&&rr()}}function Kc(){Gn=Ls.current,Lt(Ls)}function Wr(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,J0(l)),Wt!==null)for(l=Wt.return;l!==null;){var f=l;switch(sc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Oa();break;case 3:Cs(),Lt(Pn),Lt(mn),xc();break;case 5:_c(f);break;case 4:Cs();break;case 13:Lt(Ot);break;case 19:Lt(Ot);break;case 10:fc(f.type._context);break;case 22:case 23:Kc()}l=l.return}if(nn=i,Wt=i=dr(i.current,null),un=Gn=s,Kt=0,Xo=null,Gc=sl=Vr=0,Dn=$o=null,zr!==null){for(s=0;s<zr.length;s++)if(l=zr[s],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,_=l.pending;if(_!==null){var T=_.next;_.next=m,f.next=T}l.pending=f}zr=null}return i}function Ip(i,s){do{var l=Wt;try{if(cc(),Ya.current=Ja,Ka){for(var f=Ft.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Ka=!1}if(Hr=0,tn=Yt=Ft=null,Bo=!1,Ho=0,Vc.current=null,l===null||l.return===null){Kt=1,Xo=s,Wt=null;break}e:{var _=i,T=l.return,F=l,H=s;if(s=un,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var re=H,ye=F,Ee=ye.tag;if(!(ye.mode&1)&&(Ee===0||Ee===11||Ee===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ne=sp(T);if(Ne!==null){Ne.flags&=-257,op(Ne,T,F,_,s),Ne.mode&1&&rp(_,re,s),s=Ne,H=re;var Oe=s.updateQueue;if(Oe===null){var ke=new Set;ke.add(H),s.updateQueue=ke}else Oe.add(H);break e}else{if(!(s&1)){rp(_,re,s),Zc();break e}H=Error(t(426))}}else if(Ut&&F.mode&1){var Vt=sp(T);if(Vt!==null){!(Vt.flags&65536)&&(Vt.flags|=256),op(Vt,T,F,_,s),lc(Rs(H,F));break e}}_=H=Rs(H,F),Kt!==4&&(Kt=2),$o===null?$o=[_]:$o.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Y=np(_,H,s);Th(_,Y);break e;case 1:F=H;var G=_.type,Q=_.stateNode;if(!(_.flags&128)&&(typeof G.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(lr===null||!lr.has(Q)))){_.flags|=65536,s&=-s,_.lanes|=s;var Te=ip(_,F,s);Th(_,Te);break e}}_=_.return}while(_!==null)}Fp(l)}catch(He){s=He,Wt===l&&l!==null&&(Wt=l=l.return);continue}break}while(!0)}function Up(){var i=rl.current;return rl.current=Ja,i===null?Ja:i}function Zc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||!(Vr&268435455)&&!(sl&268435455)||fr(nn,un)}function fl(i,s){var l=yt;yt|=2;var f=Up();(nn!==i||un!==s)&&(Fi=null,Wr(i,s));do try{w_();break}catch(m){Ip(i,m)}while(!0);if(cc(),yt=l,rl.current=f,Wt!==null)throw Error(t(261));return nn=null,un=0,Kt}function w_(){for(;Wt!==null;)Op(Wt)}function T_(){for(;Wt!==null&&!Ke();)Op(Wt)}function Op(i){var s=Bp(i.alternate,i,Gn);i.memoizedProps=i.pendingProps,s===null?Fp(i):Wt=s,Vc.current=null}function Fp(i){var s=i;do{var l=s.alternate;if(i=s.return,s.flags&32768){if(l=__(l,s),l!==null){l.flags&=32767,Wt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Kt=6,Wt=null;return}}else if(l=v_(l,s,Gn),l!==null){Wt=l;return}if(s=s.sibling,s!==null){Wt=s;return}Wt=s=i}while(s!==null);Kt===0&&(Kt=5)}function jr(i,s,l){var f=Et,m=Zn.transition;try{Zn.transition=null,Et=1,b_(i,s,l,f)}finally{Zn.transition=m,Et=f}return null}function b_(i,s,l,f){do Ds();while(ur!==null);if(yt&6)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(o0(i,_),i===nn&&(Wt=nn=null,un=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||al||(al=!0,Hp(en,function(){return Ds(),null})),_=(l.flags&15990)!==0,l.subtreeFlags&15990||_){_=Zn.transition,Zn.transition=null;var T=Et;Et=1;var F=yt;yt|=4,Vc.current=null,x_(i,l),Ap(l,i),X0(Zu),Ea=!!Ku,Zu=Ku=null,i.current=l,S_(l),rt(),yt=F,Et=T,Zn.transition=_}else i.current=l;if(al&&(al=!1,ur=i,ll=m),_=i.pendingLanes,_===0&&(lr=null),Ct(l.stateNode),In(i,Fe()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(ol)throw ol=!1,i=jc,jc=null,i;return ll&1&&i.tag!==0&&Ds(),_=i.pendingLanes,_&1?i===Xc?qo++:(qo=0,Xc=i):qo=0,rr(),null}function Ds(){if(ur!==null){var i=wd(ll),s=Zn.transition,l=Et;try{if(Zn.transition=null,Et=16>i?16:i,ur===null)var f=!1;else{if(i=ur,ur=null,ll=0,yt&6)throw Error(t(331));var m=yt;for(yt|=4,Ue=i.current;Ue!==null;){var _=Ue,T=_.child;if(Ue.flags&16){var F=_.deletions;if(F!==null){for(var H=0;H<F.length;H++){var re=F[H];for(Ue=re;Ue!==null;){var ye=Ue;switch(ye.tag){case 0:case 11:case 15:jo(8,ye,_)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,Ue=Ee;else for(;Ue!==null;){ye=Ue;var _e=ye.sibling,Ne=ye.return;if(Ep(ye),ye===re){Ue=null;break}if(_e!==null){_e.return=Ne,Ue=_e;break}Ue=Ne}}}var Oe=_.alternate;if(Oe!==null){var ke=Oe.child;if(ke!==null){Oe.child=null;do{var Vt=ke.sibling;ke.sibling=null,ke=Vt}while(ke!==null)}}Ue=_}}if(_.subtreeFlags&2064&&T!==null)T.return=_,Ue=T;else e:for(;Ue!==null;){if(_=Ue,_.flags&2048)switch(_.tag){case 0:case 11:case 15:jo(9,_,_.return)}var Y=_.sibling;if(Y!==null){Y.return=_.return,Ue=Y;break e}Ue=_.return}}var G=i.current;for(Ue=G;Ue!==null;){T=Ue;var Q=T.child;if(T.subtreeFlags&2064&&Q!==null)Q.return=T,Ue=Q;else e:for(T=G;Ue!==null;){if(F=Ue,F.flags&2048)try{switch(F.tag){case 0:case 11:case 15:il(9,F)}}catch(He){kt(F,F.return,He)}if(F===T){Ue=null;break e}var Te=F.sibling;if(Te!==null){Te.return=F.return,Ue=Te;break e}Ue=F.return}}if(yt=m,rr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Qe,i)}catch{}f=!0}return f}finally{Et=l,Zn.transition=s}}return!1}function kp(i,s,l){s=Rs(l,s),s=np(i,s,1),i=or(i,s,1),s=wn(),i!==null&&(_o(i,1,s),In(i,s))}function kt(i,s,l){if(i.tag===3)kp(i,i,l);else for(;s!==null;){if(s.tag===3){kp(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(lr===null||!lr.has(f))){i=Rs(l,i),i=ip(s,i,1),s=or(s,i,1),i=wn(),s!==null&&(_o(s,1,i),In(s,i));break}}s=s.return}}function A_(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=wn(),i.pingedLanes|=i.suspendedLanes&l,nn===i&&(un&l)===l&&(Kt===4||Kt===3&&(un&130023424)===un&&500>Fe()-Wc?Wr(i,0):Gc|=l),In(i,s)}function zp(i,s){s===0&&(i.mode&1?(s=zn,zn<<=1,!(zn&130023424)&&(zn=4194304)):s=1);var l=wn();i=Ii(i,s),i!==null&&(_o(i,s,l),In(i,l))}function C_(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),zp(i,l)}function R_(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),zp(i,l)}var Bp;Bp=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Pn.current)Nn=!0;else{if(!(i.lanes&l)&&!(s.flags&128))return Nn=!1,g_(i,s,l);Nn=!!(i.flags&131072)}else Nn=!1,Ut&&s.flags&1048576&&_h(s,Ba,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;tl(i,s),i=s.pendingProps;var m=Ss(s,mn.current);bs(s,l),m=Mc(null,s,f,i,m,l);var _=wc();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Ln(f)?(_=!0,Fa(s)):_=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,pc(s),m.updater=Xa,s.stateNode=m,m._reactInternals=s,gc(s,f,i,l),s=Nc(null,s,f,!0,_,l)):(s.tag=0,Ut&&_&&rc(s),Mn(null,s,m,l),s=s.child),s;case 16:f=s.elementType;e:{switch(tl(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=L_(f),i=ai(f,i),m){case 0:s=Lc(null,s,f,i,l);break e;case 1:s=dp(null,s,f,i,l);break e;case 11:s=ap(null,s,f,i,l);break e;case 14:s=lp(null,s,f,ai(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:ai(f,m),Lc(i,s,f,m,l);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:ai(f,m),dp(i,s,f,m,l);case 3:e:{if(hp(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,m=_.element,wh(i,s),ja(s,f,null,l);var T=s.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){m=Rs(Error(t(423)),s),s=pp(i,s,f,l,m);break e}else if(f!==m){m=Rs(Error(t(424)),s),s=pp(i,s,f,l,m);break e}else for(Vn=tr(s.stateNode.containerInfo.firstChild),Hn=s,Ut=!0,oi=null,l=Dh(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ws(),f===m){s=Oi(i,s,l);break e}Mn(i,s,f,l)}s=s.child}return s;case 5:return Ih(s),i===null&&ac(s),f=s.type,m=s.pendingProps,_=i!==null?i.memoizedProps:null,T=m.children,Qu(f,m)?T=null:_!==null&&Qu(f,_)&&(s.flags|=32),fp(i,s),Mn(i,s,T,l),s.child;case 6:return i===null&&ac(s),null;case 13:return mp(i,s,l);case 4:return vc(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=As(s,null,f,l):Mn(i,s,f,l),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:ai(f,m),ap(i,s,f,m,l);case 7:return Mn(i,s,s.pendingProps,l),s.child;case 8:return Mn(i,s,s.pendingProps.children,l),s.child;case 12:return Mn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,_=s.memoizedProps,T=m.value,Rt(Va,f._currentValue),f._currentValue=T,_!==null)if(si(_.value,T)){if(_.children===m.children&&!Pn.current){s=Oi(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var F=_.dependencies;if(F!==null){T=_.child;for(var H=F.firstContext;H!==null;){if(H.context===f){if(_.tag===1){H=Ui(-1,l&-l),H.tag=2;var re=_.updateQueue;if(re!==null){re=re.shared;var ye=re.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),re.pending=H}}_.lanes|=l,H=_.alternate,H!==null&&(H.lanes|=l),dc(_.return,l,s),F.lanes|=l;break}H=H.next}}else if(_.tag===10)T=_.type===s.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=l,F=T.alternate,F!==null&&(F.lanes|=l),dc(T,l,s),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===s){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Mn(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,bs(s,l),m=Yn(m),f=f(m),s.flags|=1,Mn(i,s,f,l),s.child;case 14:return f=s.type,m=ai(f,s.pendingProps),m=ai(f.type,m),lp(i,s,f,m,l);case 15:return up(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:ai(f,m),tl(i,s),s.tag=1,Ln(f)?(i=!0,Fa(s)):i=!1,bs(s,l),Rh(s,f,m),gc(s,f,m,l),Nc(null,s,f,!0,i,l);case 19:return vp(i,s,l);case 22:return cp(i,s,l)}throw Error(t(156,s.tag))};function Hp(i,s){return ze(i,s)}function P_(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(i,s,l,f){return new P_(i,s,l,f)}function Qc(i){return i=i.prototype,!(!i||!i.isReactComponent)}function L_(i){if(typeof i=="function")return Qc(i)?1:0;if(i!=null){if(i=i.$$typeof,i===le)return 11;if(i===ae)return 14}return 2}function dr(i,s){var l=i.alternate;return l===null?(l=Qn(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function dl(i,s,l,f,m,_){var T=2;if(f=i,typeof i=="function")Qc(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case U:return Xr(l.children,m,_,s);case K:T=8,m|=8;break;case I:return i=Qn(12,l,s,m|2),i.elementType=I,i.lanes=_,i;case V:return i=Qn(13,l,s,m),i.elementType=V,i.lanes=_,i;case ue:return i=Qn(19,l,s,m),i.elementType=ue,i.lanes=_,i;case fe:return hl(l,m,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case A:T=10;break e;case X:T=9;break e;case le:T=11;break e;case ae:T=14;break e;case de:T=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=Qn(T,l,s,m),s.elementType=i,s.type=f,s.lanes=_,s}function Xr(i,s,l,f){return i=Qn(7,i,f,s),i.lanes=l,i}function hl(i,s,l,f){return i=Qn(22,i,f,s),i.elementType=fe,i.lanes=l,i.stateNode={isHidden:!1},i}function Jc(i,s,l){return i=Qn(6,i,null,s),i.lanes=l,i}function ef(i,s,l){return s=Qn(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function N_(i,s,l,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Au(0),this.expirationTimes=Au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Au(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function tf(i,s,l,f,m,_,T,F,H){return i=new N_(i,s,l,F,H),s===1?(s=1,_===!0&&(s|=8)):s=0,_=Qn(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},pc(_),i}function D_(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function Vp(i){if(!i)return ir;i=i._reactInternals;e:{if(N(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Ln(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Ln(l))return mh(i,l,s)}return s}function Gp(i,s,l,f,m,_,T,F,H){return i=tf(l,f,!0,i,m,_,T,F,H),i.context=Vp(null),l=i.current,f=wn(),m=cr(l),_=Ui(f,m),_.callback=s??null,or(l,_,m),i.current.lanes=m,_o(i,m,f),In(i,f),i}function pl(i,s,l,f){var m=s.current,_=wn(),T=cr(m);return l=Vp(l),s.context===null?s.context=l:s.pendingContext=l,s=Ui(_,T),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=or(m,s,T),i!==null&&(ci(i,m,T,_),Wa(i,m,T)),T}function ml(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Wp(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function nf(i,s){Wp(i,s),(i=i.alternate)&&Wp(i,s)}var jp=typeof reportError=="function"?reportError:function(i){console.error(i)};function rf(i){this._internalRoot=i}gl.prototype.render=rf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));pl(i,s,null,null)},gl.prototype.unmount=rf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Gr(function(){pl(null,i,null,null)}),s[Pi]=null}};function gl(i){this._internalRoot=i}gl.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ad();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Qi.length&&s!==0&&s<Qi[l].priority;l++);Qi.splice(l,0,i),l===0&&Pd(i)}};function sf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function vl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function I_(i,s,l,f,m){if(m){if(typeof f=="function"){var _=f;f=function(){var re=ml(T);_.call(re)}}var T=Gp(s,f,i,0,null,!1,!1,"",Xp);return i._reactRootContainer=T,i[Pi]=T.current,No(i.nodeType===8?i.parentNode:i),Gr(),T}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var F=f;f=function(){var re=ml(H);F.call(re)}}var H=tf(i,0,!1,null,null,!1,!1,"",Xp);return i._reactRootContainer=H,i[Pi]=H.current,No(i.nodeType===8?i.parentNode:i),Gr(function(){pl(s,H,l,f)}),H}function _l(i,s,l,f,m){var _=l._reactRootContainer;if(_){var T=_;if(typeof m=="function"){var F=m;m=function(){var H=ml(T);F.call(H)}}pl(s,T,i,m)}else T=I_(l,s,i,m,f);return ml(T)}Td=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Ri(s.pendingLanes);l!==0&&(Cu(s,l|1),In(s,Fe()),!(yt&6)&&(Ns=Fe()+500,rr()))}break;case 13:Gr(function(){var f=Ii(i,1);if(f!==null){var m=wn();ci(f,i,1,m)}}),nf(i,1)}},Ru=function(i){if(i.tag===13){var s=Ii(i,134217728);if(s!==null){var l=wn();ci(s,i,134217728,l)}nf(i,134217728)}},bd=function(i){if(i.tag===13){var s=cr(i),l=Ii(i,s);if(l!==null){var f=wn();ci(l,i,s,f)}nf(i,s)}},Ad=function(){return Et},Cd=function(i,s){var l=Et;try{return Et=i,s()}finally{Et=l}},J=function(i,s,l){switch(s){case"input":if(ut(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var m=Ua(f);if(!m)throw Error(t(90));je(f),ut(f,m)}}}break;case"textarea":Se(i,l);break;case"select":s=l.value,s!=null&&se(i,!!l.multiple,s,!1)}},Bt=Yc,gt=Gr;var U_={usingClientEntryPoint:!1,Events:[Uo,ys,Ua,ot,At,Yc]},Yo={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},O_={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ne(i),i===null?null:i.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{Qe=yl.inject(O_),pn=yl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U_,Un.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(s))throw Error(t(200));return D_(i,s,null,l)},Un.createRoot=function(i,s){if(!sf(i))throw Error(t(299));var l=!1,f="",m=jp;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=tf(i,1,!1,null,null,l,!1,f,m),i[Pi]=s.current,No(i.nodeType===8?i.parentNode:i),new rf(s)},Un.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ne(s),i=i===null?null:i.stateNode,i},Un.flushSync=function(i){return Gr(i)},Un.hydrate=function(i,s,l){if(!vl(s))throw Error(t(200));return _l(null,i,s,!0,l)},Un.hydrateRoot=function(i,s,l){if(!sf(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,_="",T=jp;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),s=Gp(s,null,i,1,l??null,m,!1,_,T),i[Pi]=s.current,No(i),f)for(i=0;i<f.length;i++)l=f[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new gl(s)},Un.render=function(i,s,l){if(!vl(s))throw Error(t(200));return _l(null,i,s,!1,l)},Un.unmountComponentAtNode=function(i){if(!vl(i))throw Error(t(40));return i._reactRootContainer?(Gr(function(){_l(null,null,i,!1,function(){i._reactRootContainer=null,i[Pi]=null})}),!0):!1},Un.unstable_batchedUpdates=Yc,Un.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!vl(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return _l(i,s,l,!1,f)},Un.version="18.2.0-next-9e3b772b8-20220608",Un}var em;function iv(){if(em)return lf.exports;em=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),lf.exports=j_(),lf.exports}var tm;function X_(){if(tm)return xl;tm=1;var r=iv();return xl.createRoot=r.createRoot,xl.hydrateRoot=r.hydrateRoot,xl}var $_=X_();const q_=tv($_);iv();/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},oa.apply(this,arguments)}var Er;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Er||(Er={}));const nm="popstate";function Y_(r){r===void 0&&(r={});function e(n,o){let{pathname:a,search:u,hash:c}=n.location;return Xf("",{pathname:a,search:u,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(n,o){return typeof o=="string"?o:Zl(o)}return Z_(e,t,null,r)}function zt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function rv(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function K_(){return Math.random().toString(36).substr(2,8)}function im(r,e){return{usr:r.state,key:r.key,idx:e}}function Xf(r,e,t,n){return t===void 0&&(t=null),oa({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?fo(e):e,{state:t,key:e&&e.key||n||K_()})}function Zl(r){let{pathname:e="/",search:t="",hash:n=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function fo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let n=r.indexOf("?");n>=0&&(e.search=r.substr(n),r=r.substr(0,n)),r&&(e.pathname=r)}return e}function Z_(r,e,t,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:a=!1}=n,u=o.history,c=Er.Pop,d=null,h=p();h==null&&(h=0,u.replaceState(oa({},u.state,{idx:h}),""));function p(){return(u.state||{idx:null}).idx}function g(){c=Er.Pop;let y=p(),x=y==null?null:y-h;h=y,d&&d({action:c,location:M.location,delta:x})}function v(y,x){c=Er.Push;let C=Xf(M.location,y,x);h=p()+1;let b=im(C,h),P=M.createHref(C);try{u.pushState(b,"",P)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;o.location.assign(P)}a&&d&&d({action:c,location:M.location,delta:1})}function S(y,x){c=Er.Replace;let C=Xf(M.location,y,x);h=p();let b=im(C,h),P=M.createHref(C);u.replaceState(b,"",P),a&&d&&d({action:c,location:M.location,delta:0})}function E(y){let x=o.location.origin!=="null"?o.location.origin:o.location.href,C=typeof y=="string"?y:Zl(y);return C=C.replace(/ $/,"%20"),zt(x,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,x)}let M={get action(){return c},get location(){return r(o,u)},listen(y){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(nm,g),d=y,()=>{o.removeEventListener(nm,g),d=null}},createHref(y){return e(o,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:S,go(y){return u.go(y)}};return M}var rm;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(rm||(rm={}));function Q_(r,e,t){t===void 0&&(t="/");let n=typeof e=="string"?fo(e):e,o=oo(n.pathname||"/",t);if(o==null)return null;let a=sv(r);J_(a);let u=null;for(let c=0;u==null&&c<a.length;++c){let d=cy(o);u=ly(a[c],d)}return u}function sv(r,e,t,n){e===void 0&&(e=[]),t===void 0&&(t=[]),n===void 0&&(n="");let o=(a,u,c)=>{let d={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};d.relativePath.startsWith("/")&&(zt(d.relativePath.startsWith(n),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(n.length));let h=wr([n,d.relativePath]),p=t.concat(d);a.children&&a.children.length>0&&(zt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),sv(a.children,e,p,h)),!(a.path==null&&!a.index)&&e.push({path:h,score:oy(h,a.index),routesMeta:p})};return r.forEach((a,u)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))o(a,u);else for(let d of ov(a.path))o(a,u,d)}),e}function ov(r){let e=r.split("/");if(e.length===0)return[];let[t,...n]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(n.length===0)return o?[a,""]:[a];let u=ov(n.join("/")),c=[];return c.push(...u.map(d=>d===""?a:[a,d].join("/"))),o&&c.push(...u),c.map(d=>r.startsWith("/")&&d===""?"/":d)}function J_(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:ay(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}const ey=/^:[\w-]+$/,ty=3,ny=2,iy=1,ry=10,sy=-2,sm=r=>r==="*";function oy(r,e){let t=r.split("/"),n=t.length;return t.some(sm)&&(n+=sy),e&&(n+=ny),t.filter(o=>!sm(o)).reduce((o,a)=>o+(ey.test(a)?ty:a===""?iy:ry),n)}function ay(r,e){return r.length===e.length&&r.slice(0,-1).every((n,o)=>n===e[o])?r[r.length-1]-e[e.length-1]:0}function ly(r,e){let{routesMeta:t}=r,n={},o="/",a=[];for(let u=0;u<t.length;++u){let c=t[u],d=u===t.length-1,h=o==="/"?e:e.slice(o.length)||"/",p=$f({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},h);if(!p)return null;Object.assign(n,p.params);let g=c.route;a.push({params:n,pathname:wr([o,p.pathname]),pathnameBase:py(wr([o,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(o=wr([o,p.pathnameBase]))}return a}function $f(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,n]=uy(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let a=o[0],u=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:n.reduce((h,p,g)=>{let{paramName:v,isOptional:S}=p;if(v==="*"){let M=c[g]||"";u=a.slice(0,a.length-M.length).replace(/(.)\/+$/,"$1")}const E=c[g];return S&&!E?h[v]=void 0:h[v]=(E||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:u,pattern:r}}function uy(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),rv(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let n=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,d)=>(n.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(n.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),n]}function cy(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return rv(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function oo(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=r.charAt(t);return n&&n!=="/"?null:r.slice(t)||"/"}function fy(r,e){e===void 0&&(e="/");let{pathname:t,search:n="",hash:o=""}=typeof r=="string"?fo(r):r;return{pathname:t?t.startsWith("/")?t:dy(t,e):e,search:my(n),hash:gy(o)}}function dy(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ff(r,e,t,n){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hy(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function av(r,e){let t=hy(r);return e?t.map((n,o)=>o===r.length-1?n.pathname:n.pathnameBase):t.map(n=>n.pathnameBase)}function lv(r,e,t,n){n===void 0&&(n=!1);let o;typeof r=="string"?o=fo(r):(o=oa({},r),zt(!o.pathname||!o.pathname.includes("?"),ff("?","pathname","search",o)),zt(!o.pathname||!o.pathname.includes("#"),ff("#","pathname","hash",o)),zt(!o.search||!o.search.includes("#"),ff("#","search","hash",o)));let a=r===""||o.pathname==="",u=a?"/":o.pathname,c;if(u==null)c=t;else{let g=e.length-1;if(!n&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),g-=1;o.pathname=v.join("/")}c=g>=0?e[g]:"/"}let d=fy(o,c),h=u&&u!=="/"&&u.endsWith("/"),p=(a||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||p)&&(d.pathname+="/"),d}const wr=r=>r.join("/").replace(/\/\/+/g,"/"),py=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),my=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,gy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function vy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const uv=["post","put","patch","delete"];new Set(uv);const _y=["get",...uv];new Set(_y);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},aa.apply(this,arguments)}const cu=he.createContext(null),cv=he.createContext(null),Pr=he.createContext(null),fu=he.createContext(null),ls=he.createContext({outlet:null,matches:[],isDataRoute:!1}),fv=he.createContext(null);function yy(r,e){let{relative:t}=e===void 0?{}:e;pa()||zt(!1);let{basename:n,navigator:o}=he.useContext(Pr),{hash:a,pathname:u,search:c}=du(r,{relative:t}),d=u;return n!=="/"&&(d=u==="/"?n:wr([n,u])),o.createHref({pathname:d,search:c,hash:a})}function pa(){return he.useContext(fu)!=null}function ma(){return pa()||zt(!1),he.useContext(fu).location}function dv(r){he.useContext(Pr).static||he.useLayoutEffect(r)}function xy(){let{isDataRoute:r}=he.useContext(ls);return r?Dy():Sy()}function Sy(){pa()||zt(!1);let r=he.useContext(cu),{basename:e,future:t,navigator:n}=he.useContext(Pr),{matches:o}=he.useContext(ls),{pathname:a}=ma(),u=JSON.stringify(av(o,t.v7_relativeSplatPath)),c=he.useRef(!1);return dv(()=>{c.current=!0}),he.useCallback(function(h,p){if(p===void 0&&(p={}),!c.current)return;if(typeof h=="number"){n.go(h);return}let g=lv(h,JSON.parse(u),a,p.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:wr([e,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[e,n,u,a,r])}function du(r,e){let{relative:t}=e===void 0?{}:e,{future:n}=he.useContext(Pr),{matches:o}=he.useContext(ls),{pathname:a}=ma(),u=JSON.stringify(av(o,n.v7_relativeSplatPath));return he.useMemo(()=>lv(r,JSON.parse(u),a,t==="path"),[r,u,a,t])}function Ey(r,e){return My(r,e)}function My(r,e,t,n){pa()||zt(!1);let{navigator:o}=he.useContext(Pr),{matches:a}=he.useContext(ls),u=a[a.length-1],c=u?u.params:{};u&&u.pathname;let d=u?u.pathnameBase:"/";u&&u.route;let h=ma(),p;if(e){var g;let y=typeof e=="string"?fo(e):e;d==="/"||(g=y.pathname)!=null&&g.startsWith(d)||zt(!1),p=y}else p=h;let v=p.pathname||"/",S=v;if(d!=="/"){let y=d.replace(/^\//,"").split("/");S="/"+v.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=Q_(r,{pathname:S}),M=Cy(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:wr([d,o.encodeLocation?o.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:wr([d,o.encodeLocation?o.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),a,t,n);return e&&M?he.createElement(fu.Provider,{value:{location:aa({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Er.Pop}},M):M}function wy(){let r=Ny(),e=vy(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),t?he.createElement("pre",{style:o},t):null,null)}const Ty=he.createElement(wy,null);class by extends he.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?he.createElement(ls.Provider,{value:this.props.routeContext},he.createElement(fv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ay(r){let{routeContext:e,match:t,children:n}=r,o=he.useContext(cu);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),he.createElement(ls.Provider,{value:e},n)}function Cy(r,e,t,n){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),n===void 0&&(n=null),r==null){var a;if((a=t)!=null&&a.errors)r=t.matches;else return null}let u=r,c=(o=t)==null?void 0:o.errors;if(c!=null){let p=u.findIndex(g=>g.route.id&&(c==null?void 0:c[g.route.id]));p>=0||zt(!1),u=u.slice(0,Math.min(u.length,p+1))}let d=!1,h=-1;if(t&&n&&n.v7_partialHydration)for(let p=0;p<u.length;p++){let g=u[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=p),g.route.id){let{loaderData:v,errors:S}=t,E=g.route.loader&&v[g.route.id]===void 0&&(!S||S[g.route.id]===void 0);if(g.route.lazy||E){d=!0,h>=0?u=u.slice(0,h+1):u=[u[0]];break}}}return u.reduceRight((p,g,v)=>{let S,E=!1,M=null,y=null;t&&(S=c&&g.route.id?c[g.route.id]:void 0,M=g.route.errorElement||Ty,d&&(h<0&&v===0?(E=!0,y=null):h===v&&(E=!0,y=g.route.hydrateFallbackElement||null)));let x=e.concat(u.slice(0,v+1)),C=()=>{let b;return S?b=M:E?b=y:g.route.Component?b=he.createElement(g.route.Component,null):g.route.element?b=g.route.element:b=p,he.createElement(Ay,{match:g,routeContext:{outlet:p,matches:x,isDataRoute:t!=null},children:b})};return t&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?he.createElement(by,{location:t.location,revalidation:t.revalidation,component:M,error:S,children:C(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):C()},null)}var hv=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(hv||{}),Ql=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(Ql||{});function Ry(r){let e=he.useContext(cu);return e||zt(!1),e}function Py(r){let e=he.useContext(cv);return e||zt(!1),e}function Ly(r){let e=he.useContext(ls);return e||zt(!1),e}function pv(r){let e=Ly(),t=e.matches[e.matches.length-1];return t.route.id||zt(!1),t.route.id}function Ny(){var r;let e=he.useContext(fv),t=Py(Ql.UseRouteError),n=pv(Ql.UseRouteError);return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Dy(){let{router:r}=Ry(hv.UseNavigateStable),e=pv(Ql.UseNavigateStable),t=he.useRef(!1);return dv(()=>{t.current=!0}),he.useCallback(function(o,a){a===void 0&&(a={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,aa({fromRouteId:e},a)))},[r,e])}function yi(r){zt(!1)}function Iy(r){let{basename:e="/",children:t=null,location:n,navigationType:o=Er.Pop,navigator:a,static:u=!1,future:c}=r;pa()&&zt(!1);let d=e.replace(/^\/*/,"/"),h=he.useMemo(()=>({basename:d,navigator:a,static:u,future:aa({v7_relativeSplatPath:!1},c)}),[d,c,a,u]);typeof n=="string"&&(n=fo(n));let{pathname:p="/",search:g="",hash:v="",state:S=null,key:E="default"}=n,M=he.useMemo(()=>{let y=oo(p,d);return y==null?null:{location:{pathname:y,search:g,hash:v,state:S,key:E},navigationType:o}},[d,p,g,v,S,E,o]);return M==null?null:he.createElement(Pr.Provider,{value:h},he.createElement(fu.Provider,{children:t,value:M}))}function Uy(r){let{children:e,location:t}=r;return Ey(qf(e),t)}new Promise(()=>{});function qf(r,e){e===void 0&&(e=[]);let t=[];return he.Children.forEach(r,(n,o)=>{if(!he.isValidElement(n))return;let a=[...e,o];if(n.type===he.Fragment){t.push.apply(t,qf(n.props.children,a));return}n.type!==yi&&zt(!1),!n.props.index||!n.props.children||zt(!1);let u={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(u.children=qf(n.props.children,a)),t.push(u)}),t}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jl(){return Jl=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Jl.apply(this,arguments)}function mv(r,e){if(r==null)return{};var t={},n=Object.keys(r),o,a;for(a=0;a<n.length;a++)o=n[a],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function Oy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Fy(r,e){return r.button===0&&(!e||e==="_self")&&!Oy(r)}const ky=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],zy=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],By="6";try{window.__reactRouterVersion=By}catch{}const Hy=he.createContext({isTransitioning:!1}),Vy="startTransition",om=V_[Vy];function Gy(r){let{basename:e,children:t,future:n,window:o}=r,a=he.useRef();a.current==null&&(a.current=Y_({window:o,v5Compat:!0}));let u=a.current,[c,d]=he.useState({action:u.action,location:u.location}),{v7_startTransition:h}=n||{},p=he.useCallback(g=>{h&&om?om(()=>d(g)):d(g)},[d,h]);return he.useLayoutEffect(()=>u.listen(p),[u,p]),he.createElement(Iy,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:u,future:n})}const Wy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xy=he.forwardRef(function(e,t){let{onClick:n,relative:o,reloadDocument:a,replace:u,state:c,target:d,to:h,preventScrollReset:p,unstable_viewTransition:g}=e,v=mv(e,ky),{basename:S}=he.useContext(Pr),E,M=!1;if(typeof h=="string"&&jy.test(h)&&(E=h,Wy))try{let b=new URL(window.location.href),P=h.startsWith("//")?new URL(b.protocol+h):new URL(h),B=oo(P.pathname,S);P.origin===b.origin&&B!=null?h=B+P.search+P.hash:M=!0}catch{}let y=yy(h,{relative:o}),x=qy(h,{replace:u,state:c,target:d,preventScrollReset:p,relative:o,unstable_viewTransition:g});function C(b){n&&n(b),b.defaultPrevented||x(b)}return he.createElement("a",Jl({},v,{href:E||y,onClick:M||a?n:C,ref:t,target:d}))}),Jr=he.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:o=!1,className:a="",end:u=!1,style:c,to:d,unstable_viewTransition:h,children:p}=e,g=mv(e,zy),v=du(d,{relative:g.relative}),S=ma(),E=he.useContext(cv),{navigator:M,basename:y}=he.useContext(Pr),x=E!=null&&Yy(v)&&h===!0,C=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,b=S.pathname,P=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;o||(b=b.toLowerCase(),P=P?P.toLowerCase():null,C=C.toLowerCase()),P&&y&&(P=oo(P,y)||P);const B=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let O=b===C||!u&&b.startsWith(C)&&b.charAt(B)==="/",U=P!=null&&(P===C||!u&&P.startsWith(C)&&P.charAt(C.length)==="/"),K={isActive:O,isPending:U,isTransitioning:x},I=O?n:void 0,A;typeof a=="function"?A=a(K):A=[a,O?"active":null,U?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let X=typeof c=="function"?c(K):c;return he.createElement(Xy,Jl({},g,{"aria-current":I,className:A,ref:t,style:X,to:d,unstable_viewTransition:h}),typeof p=="function"?p(K):p)});var Yf;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Yf||(Yf={}));var am;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(am||(am={}));function $y(r){let e=he.useContext(cu);return e||zt(!1),e}function qy(r,e){let{target:t,replace:n,state:o,preventScrollReset:a,relative:u,unstable_viewTransition:c}=e===void 0?{}:e,d=xy(),h=ma(),p=du(r,{relative:u});return he.useCallback(g=>{if(Fy(g,t)){g.preventDefault();let v=n!==void 0?n:Zl(h)===Zl(p);d(r,{replace:v,state:o,preventScrollReset:a,relative:u,unstable_viewTransition:c})}},[h,d,p,n,o,t,r,a,u,c])}function Yy(r,e){e===void 0&&(e={});let t=he.useContext(Hy);t==null&&zt(!1);let{basename:n}=$y(Yf.useViewTransitionState),o=du(r,{relative:e.relative});if(!t.isTransitioning)return!1;let a=oo(t.currentLocation.pathname,n)||t.currentLocation.pathname,u=oo(t.nextLocation.pathname,n)||t.nextLocation.pathname;return $f(o.pathname,u)!=null||$f(o.pathname,a)!=null}var Ky={};function Zy(r){if(Array.isArray(r))return r}function Qy(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,o,a,u,c=[],d=!0,h=!1;try{if(a=(t=t.call(r)).next,e!==0)for(;!(d=(n=a.call(t)).done)&&(c.push(n.value),c.length!==e);d=!0);}catch(p){h=!0,o=p}finally{try{if(!d&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(h)throw o}}return c}}function Kf(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function gv(r,e){if(r){if(typeof r=="string")return Kf(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Kf(r,e)}}function Jy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yl(r,e){return Zy(r)||Qy(r,e)||gv(r,e)||Jy()}function cn(r){"@babel/helpers - typeof";return cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cn(r)}function Zf(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e){for(var n=[],o=0;o<e.length;o++){var a=e[o];if(a){var u=cn(a);if(u==="string"||u==="number")n.push(a);else if(u==="object"){var c=Array.isArray(a)?a:Object.entries(a).map(function(d){var h=Yl(d,2),p=h[0],g=h[1];return g?p:null});n=c.length?n.concat(c.filter(function(d){return!!d})):n}}}return n.join(" ").trim()}}function ex(r){if(Array.isArray(r))return Kf(r)}function tx(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function nx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qf(r){return ex(r)||tx(r)||gv(r)||nx()}function vv(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ix(r,e){if(cn(r)!=="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(cn(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function _v(r){var e=ix(r,"string");return cn(e)==="symbol"?e:String(e)}function rx(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,_v(n.key),n)}}function yv(r,e,t){return t&&rx(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function hd(r,e,t){return e=_v(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function df(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=sx(r))||e){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(h){throw h},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,u=!1,c;return{s:function(){t=t.call(r)},n:function(){var h=t.next();return a=h.done,h},e:function(h){u=!0,c=h},f:function(){try{!a&&t.return!=null&&t.return()}finally{if(u)throw c}}}}function sx(r,e){if(r){if(typeof r=="string")return lm(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return lm(r,e)}}function lm(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var ss=function(){function r(){vv(this,r)}return yv(r,null,[{key:"innerWidth",value:function(t){if(t){var n=t.offsetWidth,o=getComputedStyle(t);return n=n+(parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)),n}return 0}},{key:"width",value:function(t){if(t){var n=t.offsetWidth,o=getComputedStyle(t);return n=n-(parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)),n}return 0}},{key:"getBrowserLanguage",value:function(){return navigator.userLanguage||navigator.languages&&navigator.languages.length&&navigator.languages[0]||navigator.language||navigator.browserLanguage||navigator.systemLanguage||"en"}},{key:"getWindowScrollTop",value:function(){var t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}},{key:"getWindowScrollLeft",value:function(){var t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}},{key:"getOuterWidth",value:function(t,n){if(t){var o=t.getBoundingClientRect().width||t.offsetWidth;if(n){var a=getComputedStyle(t);o=o+(parseFloat(a.marginLeft)+parseFloat(a.marginRight))}return o}return 0}},{key:"getOuterHeight",value:function(t,n){if(t){var o=t.getBoundingClientRect().height||t.offsetHeight;if(n){var a=getComputedStyle(t);o=o+(parseFloat(a.marginTop)+parseFloat(a.marginBottom))}return o}return 0}},{key:"getClientHeight",value:function(t,n){if(t){var o=t.clientHeight;if(n){var a=getComputedStyle(t);o=o+(parseFloat(a.marginTop)+parseFloat(a.marginBottom))}return o}return 0}},{key:"getClientWidth",value:function(t,n){if(t){var o=t.clientWidth;if(n){var a=getComputedStyle(t);o=o+(parseFloat(a.marginLeft)+parseFloat(a.marginRight))}return o}return 0}},{key:"getViewport",value:function(){var t=window,n=document,o=n.documentElement,a=n.getElementsByTagName("body")[0],u=t.innerWidth||o.clientWidth||a.clientWidth,c=t.innerHeight||o.clientHeight||a.clientHeight;return{width:u,height:c}}},{key:"getOffset",value:function(t){if(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}},{key:"index",value:function(t){if(t)for(var n=t.parentNode.childNodes,o=0,a=0;a<n.length;a++){if(n[a]===t)return o;n[a].nodeType===1&&o++}return-1}},{key:"addMultipleClasses",value:function(t,n){if(t&&n)if(t.classList)for(var o=n.split(" "),a=0;a<o.length;a++)t.classList.add(o[a]);else for(var u=n.split(" "),c=0;c<u.length;c++)t.className=t.className+(" "+u[c])}},{key:"removeMultipleClasses",value:function(t,n){if(t&&n)if(t.classList)for(var o=n.split(" "),a=0;a<o.length;a++)t.classList.remove(o[a]);else for(var u=n.split(" "),c=0;c<u.length;c++)t.className=t.className.replace(new RegExp("(^|\\b)"+u[c].split(" ").join("|")+"(\\b|$)","gi")," ")}},{key:"addClass",value:function(t,n){t&&n&&(t.classList?t.classList.add(n):t.className=t.className+(" "+n))}},{key:"removeClass",value:function(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(t,n){return t?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}},{key:"addStyles",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t&&Object.entries(n).forEach(function(o){var a=Yl(o,2),u=a[0],c=a[1];return t.style[u]=c})}},{key:"find",value:function(t,n){return t?Array.from(t.querySelectorAll(n)):[]}},{key:"findSingle",value:function(t,n){return t?t.querySelector(n):null}},{key:"setAttributes",value:function(t){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t){var a=function(c,d){var h,p,g=t!=null&&(h=t.$attrs)!==null&&h!==void 0&&h[c]?[t==null||(p=t.$attrs)===null||p===void 0?void 0:p[c]]:[];return[d].flat().reduce(function(v,S){if(S!=null){var E=cn(S);if(E==="string"||E==="number")v.push(S);else if(E==="object"){var M=Array.isArray(S)?a(c,S):Object.entries(S).map(function(y){var x=Yl(y,2),C=x[0],b=x[1];return c==="style"&&(b||b===0)?"".concat(C.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(b):b?C:void 0});v=M.length?v.concat(M.filter(function(y){return!!y})):v}}return v},g)};Object.entries(o).forEach(function(u){var c=Yl(u,2),d=c[0],h=c[1];if(h!=null){var p=d.match(/^on(.+)/);p?t.addEventListener(p[1].toLowerCase(),h):d==="p-bind"?n.setAttributes(t,h):(h=d==="class"?Qf(new Set(a("class",h))).join(" ").trim():d==="style"?a("style",h).join(";").trim():h,(t.$attrs=t.$attrs||{})&&(t.$attrs[d]=h),t.setAttribute(d,h))}})}}},{key:"getAttribute",value:function(t,n){if(t){var o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}},{key:"isAttributeEquals",value:function(t,n,o){return t?this.getAttribute(t,n)===o:!1}},{key:"isAttributeNotEquals",value:function(t,n,o){return!this.isAttributeEquals(t,n,o)}},{key:"getHeight",value:function(t){if(t){var n=t.offsetHeight,o=getComputedStyle(t);return n=n-(parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth)),n}return 0}},{key:"getWidth",value:function(t){if(t){var n=t.offsetWidth,o=getComputedStyle(t);return n=n-(parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth)),n}return 0}},{key:"alignOverlay",value:function(t,n,o){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;t&&n&&(o==="self"?this.relativePosition(t,n):(a&&(t.style.minWidth=r.getOuterWidth(n)+"px"),this.absolutePosition(t,n)))}},{key:"absolutePosition",value:function(t,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left";if(t&&n){var a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),u=a.height,c=a.width,d=n.offsetHeight,h=n.offsetWidth,p=n.getBoundingClientRect(),g=this.getWindowScrollTop(),v=this.getWindowScrollLeft(),S=this.getViewport(),E,M;p.top+d+u>S.height?(E=p.top+g-u,E<0&&(E=g),t.style.transformOrigin="bottom"):(E=d+p.top+g,t.style.transformOrigin="top");var y=p.left,x=o==="left"?0:c-h;y+h+c>S.width?M=Math.max(0,y+v+h-c):M=y-x+v,t.style.top=E+"px",t.style.left=M+"px"}}},{key:"relativePosition",value:function(t,n){if(t&&n){var o=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,u=n.getBoundingClientRect(),c=this.getViewport(),d,h;u.top+a+o.height>c.height?(d=-1*o.height,u.top+d<0&&(d=-1*u.top),t.style.transformOrigin="bottom"):(d=a,t.style.transformOrigin="top"),o.width>c.width?h=u.left*-1:u.left+o.width>c.width?h=(u.left+o.width-c.width)*-1:h=0,t.style.top=d+"px",t.style.left=h+"px"}}},{key:"flipfitCollision",value:function(t,n){var o=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left top",u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"left bottom",c=arguments.length>4?arguments[4]:void 0;if(t&&n){var d=n.getBoundingClientRect(),h=this.getViewport(),p=a.split(" "),g=u.split(" "),v=function(x,C){return C?+x.substring(x.search(/(\+|-)/g))||0:x.substring(0,x.search(/(\+|-)/g))||x},S={my:{x:v(p[0]),y:v(p[1]||p[0]),offsetX:v(p[0],!0),offsetY:v(p[1]||p[0],!0)},at:{x:v(g[0]),y:v(g[1]||g[0]),offsetX:v(g[0],!0),offsetY:v(g[1]||g[0],!0)}},E={left:function(){var x=S.my.offsetX+S.at.offsetX;return x+d.left+(S.my.x==="left"?0:-1*(S.my.x==="center"?o.getOuterWidth(t)/2:o.getOuterWidth(t)))},top:function(){var x=S.my.offsetY+S.at.offsetY;return x+d.top+(S.my.y==="top"?0:-1*(S.my.y==="center"?o.getOuterHeight(t)/2:o.getOuterHeight(t)))}},M={count:{x:0,y:0},left:function(){var x=E.left(),C=r.getWindowScrollLeft();t.style.left=x+C+"px",this.count.x===2?(t.style.left=C+"px",this.count.x=0):x<0&&(this.count.x++,S.my.x="left",S.at.x="right",S.my.offsetX*=-1,S.at.offsetX*=-1,this.right())},right:function(){var x=E.left()+r.getOuterWidth(n),C=r.getWindowScrollLeft();t.style.left=x+C+"px",this.count.x===2?(t.style.left=h.width-r.getOuterWidth(t)+C+"px",this.count.x=0):x+r.getOuterWidth(t)>h.width&&(this.count.x++,S.my.x="right",S.at.x="left",S.my.offsetX*=-1,S.at.offsetX*=-1,this.left())},top:function(){var x=E.top(),C=r.getWindowScrollTop();t.style.top=x+C+"px",this.count.y===2?(t.style.left=C+"px",this.count.y=0):x<0&&(this.count.y++,S.my.y="top",S.at.y="bottom",S.my.offsetY*=-1,S.at.offsetY*=-1,this.bottom())},bottom:function(){var x=E.top()+r.getOuterHeight(n),C=r.getWindowScrollTop();t.style.top=x+C+"px",this.count.y===2?(t.style.left=h.height-r.getOuterHeight(t)+C+"px",this.count.y=0):x+r.getOuterHeight(n)>h.height&&(this.count.y++,S.my.y="bottom",S.at.y="top",S.my.offsetY*=-1,S.at.offsetY*=-1,this.top())},center:function(x){if(x==="y"){var C=E.top()+r.getOuterHeight(n)/2;t.style.top=C+r.getWindowScrollTop()+"px",C<0?this.bottom():C+r.getOuterHeight(n)>h.height&&this.top()}else{var b=E.left()+r.getOuterWidth(n)/2;t.style.left=b+r.getWindowScrollLeft()+"px",b<0?this.left():b+r.getOuterWidth(t)>h.width&&this.right()}}};M[S.at.x]("x"),M[S.at.y]("y"),this.isFunction(c)&&c(S)}}},{key:"findCollisionPosition",value:function(t){if(t){var n=t==="top"||t==="bottom",o=t==="left"?"right":"left",a=t==="top"?"bottom":"top";return n?{axis:"y",my:"center ".concat(a),at:"center ".concat(t)}:{axis:"x",my:"".concat(o," center"),at:"".concat(t," center")}}}},{key:"getParents",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}},{key:"getScrollableParents",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=[];if(t){var a=this.getParents(t),u=/(auto|scroll)/,c=function(b){var P=b?getComputedStyle(b):null;return P&&(u.test(P.getPropertyValue("overflow"))||u.test(P.getPropertyValue("overflow-x"))||u.test(P.getPropertyValue("overflow-y")))},d=function(b){n?o.push(b.nodeName==="BODY"||b.nodeName==="HTML"||b.nodeType===9?window:b):o.push(b)},h=df(a),p;try{for(h.s();!(p=h.n()).done;){var g=p.value,v=g.nodeType===1&&g.dataset.scrollselectors;if(v){var S=v.split(","),E=df(S),M;try{for(E.s();!(M=E.n()).done;){var y=M.value,x=this.findSingle(g,y);x&&c(x)&&d(x)}}catch(C){E.e(C)}finally{E.f()}}g.nodeType===1&&c(g)&&d(g)}}catch(C){h.e(C)}finally{h.f()}}return o.some(function(C){return C===document.body||C===window})||o.push(window),o}},{key:"getHiddenElementOuterHeight",value:function(t){if(t){t.style.visibility="hidden",t.style.display="block";var n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}return 0}},{key:"getHiddenElementOuterWidth",value:function(t){if(t){t.style.visibility="hidden",t.style.display="block";var n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}return 0}},{key:"getHiddenElementDimensions",value:function(t){var n={};return t&&(t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),n}},{key:"fadeIn",value:function(t,n){if(t){t.style.opacity=0;var o=+new Date,a=0,u=function(){a=+t.style.opacity+(new Date().getTime()-o)/n,t.style.opacity=a,o=+new Date,+a<1&&(window.requestAnimationFrame&&requestAnimationFrame(u)||setTimeout(u,16))};u()}}},{key:"fadeOut",value:function(t,n){if(t)var o=1,a=50,u=a/n,c=setInterval(function(){o=o-u,o<=0&&(o=0,clearInterval(c)),t.style.opacity=o},a)}},{key:"getUserAgent",value:function(){return navigator.userAgent}},{key:"isIOS",value:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}},{key:"isAndroid",value:function(){return/(android)/i.test(navigator.userAgent)}},{key:"isChrome",value:function(){return/(chrome)/i.test(navigator.userAgent)}},{key:"isClient",value:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}},{key:"isFunction",value:function(t){return!!(t&&t.constructor&&t.call&&t.apply)}},{key:"appendChild",value:function(t,n){if(this.isElement(n))n.appendChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw new Error("Cannot append "+n+" to "+t)}},{key:"removeChild",value:function(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw new Error("Cannot remove "+t+" from "+n)}},{key:"isElement",value:function(t){return(typeof HTMLElement>"u"?"undefined":cn(HTMLElement))==="object"?t instanceof HTMLElement:t&&cn(t)==="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}},{key:"scrollInView",value:function(t,n){var o=getComputedStyle(t).getPropertyValue("border-top-width"),a=o?parseFloat(o):0,u=getComputedStyle(t).getPropertyValue("padding-top"),c=u?parseFloat(u):0,d=t.getBoundingClientRect(),h=n.getBoundingClientRect(),p=h.top+document.body.scrollTop-(d.top+document.body.scrollTop)-a-c,g=t.scrollTop,v=t.clientHeight,S=this.getOuterHeight(n);p<0?t.scrollTop=g+p:p+S>v&&(t.scrollTop=g+p-v+S)}},{key:"clearSelection",value:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}},{key:"calculateScrollbarWidth",value:function(t){if(t){var n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var o=document.createElement("div");o.className="p-scrollbar-measure",document.body.appendChild(o);var a=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),this.calculatedScrollbarWidth=a,a}},{key:"calculateBodyScrollbarWidth",value:function(){return window.innerWidth-document.documentElement.offsetWidth}},{key:"getBrowser",value:function(){if(!this.browser){var t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}},{key:"resolveUserAgent",value:function(){var t=navigator.userAgent.toLowerCase(),n=/(chrome)[ ]([\w.]+)/.exec(t)||/(webkit)[ ]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}},{key:"blockBodyScroll",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden",n=!!document.body.style.getPropertyValue("--scrollbar-width");!n&&document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}},{key:"unblockBodyScroll",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}},{key:"isVisible",value:function(t){return t&&(t.clientHeight!==0||t.getClientRects().length!==0||getComputedStyle(t).display!=="none")}},{key:"isExist",value:function(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode)}},{key:"getFocusableElements",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=r.find(t,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)),a=[],u=df(o),c;try{for(u.s();!(c=u.n()).done;){var d=c.value;getComputedStyle(d).display!=="none"&&getComputedStyle(d).visibility!=="hidden"&&a.push(d)}}catch(h){u.e(h)}finally{u.f()}return a}},{key:"getFirstFocusableElement",value:function(t,n){var o=r.getFocusableElements(t,n);return o.length>0?o[0]:null}},{key:"getLastFocusableElement",value:function(t,n){var o=r.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}},{key:"focus",value:function(t,n){var o=n===void 0?!0:!n;t&&document.activeElement!==t&&t.focus({preventScroll:o})}},{key:"focusFirstElement",value:function(t,n){if(t){var o=r.getFirstFocusableElement(t);return o&&r.focus(o,n),o}}},{key:"getCursorOffset",value:function(t,n,o,a){if(t){var u=getComputedStyle(t),c=document.createElement("div");c.style.position="absolute",c.style.top="0px",c.style.left="0px",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.overflow=u.overflow,c.style.width=u.width,c.style.height=u.height,c.style.padding=u.padding,c.style.border=u.border,c.style.overflowWrap=u.overflowWrap,c.style.whiteSpace=u.whiteSpace,c.style.lineHeight=u.lineHeight,c.innerHTML=n.replace(/\r\n|\r|\n/g,"<br />");var d=document.createElement("span");d.textContent=a,c.appendChild(d);var h=document.createTextNode(o);c.appendChild(h),document.body.appendChild(c);var p=d.offsetLeft,g=d.offsetTop,v=d.clientHeight;return document.body.removeChild(c),{left:Math.abs(p-t.scrollLeft),top:Math.abs(g-t.scrollTop)+v}}return{top:"auto",left:"auto"}}},{key:"invokeElementMethod",value:function(t,n,o){t[n].apply(t,o)}},{key:"isClickable",value:function(t){var n=t.nodeName,o=t.parentElement&&t.parentElement.nodeName;return n==="INPUT"||n==="TEXTAREA"||n==="BUTTON"||n==="A"||o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||o==="A"||this.hasClass(t,"p-button")||this.hasClass(t.parentElement,"p-button")||this.hasClass(t.parentElement,"p-checkbox")||this.hasClass(t.parentElement,"p-radiobutton")}},{key:"applyStyle",value:function(t,n){if(typeof n=="string")t.style.cssText=n;else for(var o in n)t.style[o]=n[o]}},{key:"exportCSV",value:function(t,n){var o=new Blob([t],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(o,n+".csv");else{var a=r.saveAs({name:n+".csv",src:URL.createObjectURL(o)});a||(t="data:text/csv;charset=utf-8,"+t,window.open(encodeURI(t)))}}},{key:"saveAs",value:function(t){if(t){var n=document.createElement("a");if(n.download!==void 0){var o=t.name,a=t.src;return n.setAttribute("href",a),n.setAttribute("download",o),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n),!0}}return!1}},{key:"createInlineStyle",value:function(t,n){var o=document.createElement("style");return r.addNonce(o,t),n||(n=document.head),n.appendChild(o),o}},{key:"removeInlineStyle",value:function(t){if(this.isExist(t)){try{t.parentNode.removeChild(t)}catch{}t=null}return t}},{key:"addNonce",value:function(t,n){try{n||(n=Ky.REACT_APP_CSS_NONCE)}catch{}n&&t.setAttribute("nonce",n)}},{key:"getTargetElement",value:function(t){if(!t)return null;if(t==="document")return document;if(t==="window")return window;if(cn(t)==="object"&&t.hasOwnProperty("current"))return this.isExist(t.current)?t.current:null;var n=function(u){return!!(u&&u.constructor&&u.call&&u.apply)},o=n(t)?t():t;return o&&o.nodeType===9||this.isExist(o)?o:null}},{key:"getAttributeNames",value:function(t){var n,o,a;for(o=[],a=t.attributes,n=0;n<a.length;++n)o.push(a[n].nodeName);return o.sort(),o}},{key:"isEqualElement",value:function(t,n){var o,a,u,c,d;if(o=r.getAttributeNames(t),a=r.getAttributeNames(n),o.join(",")!==a.join(","))return!1;for(var h=0;h<o.length;++h)if(u=o[h],u==="style")for(var p=t.style,g=n.style,v=/^\d+$/,S=0,E=Object.keys(p);S<E.length;S++){var M=E[S];if(!v.test(M)&&p[M]!==g[M])return!1}else if(t.getAttribute(u)!==n.getAttribute(u))return!1;for(c=t.firstChild,d=n.firstChild;c&&d;c=c.nextSibling,d=d.nextSibling){if(c.nodeType!==d.nodeType)return!1;if(c.nodeType===1){if(!r.isEqualElement(c,d))return!1}else if(c.nodeValue!==d.nodeValue)return!1}return!(c||d)}},{key:"hasCSSAnimation",value:function(t){if(t){var n=getComputedStyle(t),o=parseFloat(n.getPropertyValue("animation-duration")||"0");return o>0}return!1}},{key:"hasCSSTransition",value:function(t){if(t){var n=getComputedStyle(t),o=parseFloat(n.getPropertyValue("transition-duration")||"0");return o>0}return!1}}])}();hd(ss,"DATA_PROPS",["data-"]);hd(ss,"ARIA_PROPS",["aria","focus-target"]);function ox(){var r=new Map;return{on:function(t,n){var o=r.get(t);o?o.push(n):o=[n],r.set(t,o)},off:function(t,n){var o=r.get(t);o&&o.splice(o.indexOf(n)>>>0,1)},emit:function(t,n){var o=r.get(t);o&&o.slice().forEach(function(a){return a(n)})}}}function ax(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=lx(r))||e){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(h){throw h},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,u=!1,c;return{s:function(){t=t.call(r)},n:function(){var h=t.next();return a=h.done,h},e:function(h){u=!0,c=h},f:function(){try{!a&&t.return!=null&&t.return()}finally{if(u)throw c}}}}function lx(r,e){if(r){if(typeof r=="string")return um(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return um(r,e)}}function um(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var Gt=function(){function r(){vv(this,r)}return yv(r,null,[{key:"equals",value:function(t,n,o){return o&&t&&cn(t)==="object"&&n&&cn(n)==="object"?this.deepEquals(this.resolveFieldData(t,o),this.resolveFieldData(n,o)):this.deepEquals(t,n)}},{key:"deepEquals",value:function(t,n){if(t===n)return!0;if(t&&n&&cn(t)==="object"&&cn(n)==="object"){var o=Array.isArray(t),a=Array.isArray(n),u,c,d;if(o&&a){if(c=t.length,c!==n.length)return!1;for(u=c;u--!==0;)if(!this.deepEquals(t[u],n[u]))return!1;return!0}if(o!==a)return!1;var h=t instanceof Date,p=n instanceof Date;if(h!==p)return!1;if(h&&p)return t.getTime()===n.getTime();var g=t instanceof RegExp,v=n instanceof RegExp;if(g!==v)return!1;if(g&&v)return t.toString()===n.toString();var S=Object.keys(t);if(c=S.length,c!==Object.keys(n).length)return!1;for(u=c;u--!==0;)if(!Object.prototype.hasOwnProperty.call(n,S[u]))return!1;for(u=c;u--!==0;)if(d=S[u],!this.deepEquals(t[d],n[d]))return!1;return!0}return t!==t&&n!==n}},{key:"resolveFieldData",value:function(t,n){if(!t||!n)return null;try{var o=t[n];if(this.isNotEmpty(o))return o}catch{}if(Object.keys(t).length){if(this.isFunction(n))return n(t);if(this.isNotEmpty(t[n]))return t[n];if(n.indexOf(".")===-1)return t[n];for(var a=n.split("."),u=t,c=0,d=a.length;c<d;++c){if(u==null)return null;u=u[a[c]]}return u}return null}},{key:"findDiffKeys",value:function(t,n){return!t||!n?{}:Object.keys(t).filter(function(o){return!n.hasOwnProperty(o)}).reduce(function(o,a){return o[a]=t[a],o},{})}},{key:"reduceKeys",value:function(t,n){var o={};return!t||!n||n.length===0||Object.keys(t).filter(function(a){return n.some(function(u){return a.startsWith(u)})}).forEach(function(a){o[a]=t[a],delete t[a]}),o}},{key:"reorderArray",value:function(t,n,o){t&&n!==o&&(o>=t.length&&(o=o%t.length,n=n%t.length),t.splice(o,0,t.splice(n,1)[0]))}},{key:"findIndexInList",value:function(t,n,o){var a=this;return n?o?n.findIndex(function(u){return a.equals(u,t,o)}):n.findIndex(function(u){return u===t}):-1}},{key:"getJSXElement",value:function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.isFunction(t)?t.apply(void 0,o):t}},{key:"getItemValue",value:function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.isFunction(t)?t.apply(void 0,o):t}},{key:"getProp",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t?t[n]:void 0;return a===void 0?o[n]:a}},{key:"getPropCaseInsensitive",value:function(t,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.toFlatCase(n);for(var u in t)if(t.hasOwnProperty(u)&&this.toFlatCase(u)===a)return t[u];for(var c in o)if(o.hasOwnProperty(c)&&this.toFlatCase(c)===a)return o[c]}},{key:"getMergedProps",value:function(t,n){return Object.assign({},n,t)}},{key:"getDiffProps",value:function(t,n){return this.findDiffKeys(t,n)}},{key:"getPropValue",value:function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.isFunction(t)?t.apply(void 0,o):t}},{key:"getComponentProp",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(t)?this.getProp(t.props,n,o):void 0}},{key:"getComponentProps",value:function(t,n){return this.isNotEmpty(t)?this.getMergedProps(t.props,n):void 0}},{key:"getComponentDiffProps",value:function(t,n){return this.isNotEmpty(t)?this.getDiffProps(t.props,n):void 0}},{key:"isValidChild",value:function(t,n,o){if(t){var a,u=this.getComponentProp(t,"__TYPE")||(t.type?t.type.displayName:void 0);!u&&t!==null&&t!==void 0&&(a=t.type)!==null&&a!==void 0&&(a=a._payload)!==null&&a!==void 0&&a.value&&(u=t.type._payload.value.find(function(h){return h===n}));var c=u===n;try{var d}catch{}return c}return!1}},{key:"getRefElement",value:function(t){return t?cn(t)==="object"&&t.hasOwnProperty("current")?t.current:t:null}},{key:"combinedRefs",value:function(t,n){t&&n&&(typeof n=="function"?n(t.current):n.current=t.current)}},{key:"removeAccents",value:function(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t}},{key:"toFlatCase",value:function(t){return this.isNotEmpty(t)&&this.isString(t)?t.replace(/(-|_)/g,"").toLowerCase():t}},{key:"toCapitalCase",value:function(t){return this.isNotEmpty(t)&&this.isString(t)?t[0].toUpperCase()+t.slice(1):t}},{key:"trim",value:function(t){return this.isNotEmpty(t)&&this.isString(t)?t.trim():t}},{key:"isEmpty",value:function(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&cn(t)==="object"&&Object.keys(t).length===0}},{key:"isNotEmpty",value:function(t){return!this.isEmpty(t)}},{key:"isFunction",value:function(t){return!!(t&&t.constructor&&t.call&&t.apply)}},{key:"isObject",value:function(t){return t!==null&&t instanceof Object&&t.constructor===Object}},{key:"isDate",value:function(t){return t!==null&&t instanceof Date&&t.constructor===Date}},{key:"isArray",value:function(t){return t!==null&&Array.isArray(t)}},{key:"isString",value:function(t){return t!==null&&typeof t=="string"}},{key:"isPrintableCharacter",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)}},{key:"isLetter",value:function(t){return/^[a-zA-Z\u00C0-\u017F]$/.test(t)}},{key:"isScalar",value:function(t){return t!=null&&(typeof t=="string"||typeof t=="number"||typeof t=="bigint"||typeof t=="boolean")}},{key:"findLast",value:function(t,n){var o;if(this.isNotEmpty(t))try{o=t.findLast(n)}catch{o=Qf(t).reverse().find(n)}return o}},{key:"findLastIndex",value:function(t,n){var o=-1;if(this.isNotEmpty(t))try{o=t.findLastIndex(n)}catch{o=t.lastIndexOf(Qf(t).reverse().find(n))}return o}},{key:"sort",value:function(t,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,a=arguments.length>3?arguments[3]:void 0,u=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,c=this.compare(t,n,a,o),d=o;return(this.isEmpty(t)||this.isEmpty(n))&&(d=u===1?o:u),d*c}},{key:"compare",value:function(t,n,o){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,u=-1,c=this.isEmpty(t),d=this.isEmpty(n);return c&&d?u=0:c?u=a:d?u=-a:typeof t=="string"&&typeof n=="string"?u=o(t,n):u=t<n?-1:t>n?1:0,u}},{key:"localeComparator",value:function(t){return new Intl.Collator(t,{numeric:!0}).compare}},{key:"findChildrenByKey",value:function(t,n){var o=ax(t),a;try{for(o.s();!(a=o.n()).done;){var u=a.value;if(u.key===n)return u.children||[];if(u.children){var c=this.findChildrenByKey(u.children,n);if(c.length>0)return c}}}catch(d){o.e(d)}finally{o.f()}return[]}},{key:"mutateFieldData",value:function(t,n,o){if(!(cn(t)!=="object"||typeof n!="string"))for(var a=n.split("."),u=t,c=0,d=a.length;c<d;++c){if(c+1-d===0){u[a[c]]=o;break}u[a[c]]||(u[a[c]]={}),u=u[a[c]]}}}])}();function cm(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function fm(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?cm(Object(t),!0).forEach(function(n){hd(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):cm(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function eu(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(r){var t=function(u){return typeof u=="function"},n=e.classNameMergeFunction,o=t(n);return r.reduce(function(a,u){if(!u)return a;var c=function(){var p=u[d];if(d==="style")a.style=fm(fm({},a.style),u.style);else if(d==="className"){var g="";o?g=n(a.className,u.className):g=[a.className,u.className].join(" ").trim(),a.className=g||void 0}else if(t(p)){var v=a[d];a[d]=v?function(){v.apply(void 0,arguments),p.apply(void 0,arguments)}:p}else a[d]=p};for(var d in u)c();return a},{})}}var yn=Object.freeze({STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter",CUSTOM:"custom"});function la(r){"@babel/helpers - typeof";return la=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},la(r)}function ux(r,e){if(la(r)!=="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(la(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function cx(r){var e=ux(r,"string");return la(e)==="symbol"?e:String(e)}function Xn(r,e,t){return e=cx(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function fx(r,e,t){return Object.defineProperty(r,"prototype",{writable:!1}),r}function dx(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var kn=fx(function r(){dx(this,r)});Xn(kn,"ripple",!1);Xn(kn,"inputStyle","outlined");Xn(kn,"locale","en");Xn(kn,"appendTo",null);Xn(kn,"cssTransition",!0);Xn(kn,"autoZIndex",!0);Xn(kn,"hideOverlaysOnDocumentScrolling",!1);Xn(kn,"nonce",null);Xn(kn,"nullSortOrder",1);Xn(kn,"zIndex",{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200});Xn(kn,"pt",void 0);Xn(kn,"filterMatchModeOptions",{text:[yn.STARTS_WITH,yn.CONTAINS,yn.NOT_CONTAINS,yn.ENDS_WITH,yn.EQUALS,yn.NOT_EQUALS],numeric:[yn.EQUALS,yn.NOT_EQUALS,yn.LESS_THAN,yn.LESS_THAN_OR_EQUAL_TO,yn.GREATER_THAN,yn.GREATER_THAN_OR_EQUAL_TO],date:[yn.DATE_IS,yn.DATE_IS_NOT,yn.DATE_BEFORE,yn.DATE_AFTER]});Xn(kn,"changeTheme",function(r,e,t,n){var o,a=document.getElementById(t);if(!a)throw Error("Element with id ".concat(t," not found."));var u=a.getAttribute("href").replace(r,e),c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("id",t),c.setAttribute("href",u),c.addEventListener("load",function(){n&&n()}),(o=a.parentNode)===null||o===void 0||o.replaceChild(c,a)});var pd=nv.createContext(),hu=kn;function hx(r){if(Array.isArray(r))return r}function px(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,o,a,u,c=[],d=!0,h=!1;try{if(a=(t=t.call(r)).next,e!==0)for(;!(d=(n=a.call(t)).done)&&(c.push(n.value),c.length!==e);d=!0);}catch(p){h=!0,o=p}finally{try{if(!d&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(h)throw o}}return c}}function dm(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function mx(r,e){if(r){if(typeof r=="string")return dm(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return dm(r,e)}}function gx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vx(r,e){return hx(r)||px(r,e)||mx(r,e)||gx()}var _x=function(e){return he.useEffect(function(){return e},[])},yx=function(){var e=he.useContext(pd);return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return eu(n,e==null?void 0:e.ptOptions)}},xx=function(e){var t=he.useRef(!1);return he.useEffect(function(){if(!t.current)return t.current=!0,e()},[])},Sx=0,Sl=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=he.useState(!1),o=vx(n,2),a=o[0],u=o[1],c=he.useRef(null),d=he.useContext(pd),h=ss.isClient()?window.document:void 0,p=t.document,g=p===void 0?h:p,v=t.manual,S=v===void 0?!1:v,E=t.name,M=E===void 0?"style_".concat(++Sx):E,y=t.id,x=y===void 0?void 0:y,C=t.media,b=C===void 0?void 0:C,P=function(I){var A=I.querySelector('style[data-primereact-style-id="'.concat(M,'"]'));if(A)return A;if(x!==void 0){var X=g.getElementById(x);if(X)return X}return g.createElement("style")},B=function(I){a&&e!==I&&(c.current.textContent=I)},O=function(){if(!(!g||a)){var I=(d==null?void 0:d.styleContainer)||g.head;c.current=P(I),c.current.isConnected||(c.current.type="text/css",x&&(c.current.id=x),b&&(c.current.media=b),ss.addNonce(c.current,d&&d.nonce||hu.nonce),I.appendChild(c.current),M&&c.current.setAttribute("data-primereact-style-id",M)),c.current.textContent=e,u(!0)}},U=function(){!g||!c.current||(ss.removeInlineStyle(c.current),u(!1))};return he.useEffect(function(){S||O()},[S]),{id:x,name:M,update:B,unload:U,load:O,isLoaded:a}},Ex=function(e,t){var n=he.useRef(!1);return he.useEffect(function(){if(!n.current){n.current=!0;return}return e()},t)};function Jf(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Mx(r){if(Array.isArray(r))return Jf(r)}function wx(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Tx(r,e){if(r){if(typeof r=="string")return Jf(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Jf(r,e)}}function bx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hm(r){return Mx(r)||wx(r)||Tx(r)||bx()}function ua(r){"@babel/helpers - typeof";return ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ua(r)}function Ax(r,e){if(ua(r)!=="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(ua(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Cx(r){var e=Ax(r,"string");return ua(e)==="symbol"?e:String(e)}function ed(r,e,t){return e=Cx(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function pm(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function on(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pm(Object(t),!0).forEach(function(n){ed(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):pm(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}var Rx=`
.p-hidden-accessible {
    position: absolute;
    pointer-events: none;
    opacity: 0;
    white-space: nowrap;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,Px=`
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-group .p-button {
    margin: 0;
}

.p-button-group .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-button-group .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-button-group .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-button-group .p-button:focus {
    position: relative;
    z-index: 1;
}
`,Lx=`
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,Nx=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g,
.p-disabled svg.p-icon {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Dx=`
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    `.concat(Px,`
    `).concat(Lx,`
    `).concat(Nx,`
}
`),Xt={cProps:void 0,cParams:void 0,cName:void 0,defaultProps:{pt:void 0,ptOptions:void 0,unstyled:!1},context:{},globalCSS:void 0,classes:{},styles:"",extend:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.css,n=on(on({},e.defaultProps),Xt.defaultProps),o={},a=function(p){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Xt.context=g,Xt.cProps=p,Gt.getMergedProps(p,n)},u=function(p){return Gt.getDiffProps(p,n)},c=function(){var p,g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;g.hasOwnProperty("pt")&&g.pt!==void 0&&(g=g.pt);var M=v,y=/./g.test(M)&&!!S[M.split(".")[0]],x=y?Gt.toFlatCase(M.split(".")[1]):Gt.toFlatCase(M),C=S.hostName&&Gt.toFlatCase(S.hostName),b=C||S.props&&S.props.__TYPE&&Gt.toFlatCase(S.props.__TYPE)||"",P=x==="transition",B="data-pc-",O=function(k){return k!=null&&k.props?k.hostName?k.props.__TYPE===k.hostName?k.props:O(k.parent):k.parent:void 0},U=function(k){var te,L;return((te=S.props)===null||te===void 0?void 0:te[k])||((L=O(S))===null||L===void 0?void 0:L[k])};Xt.cParams=S,Xt.cName=b;var K=U("ptOptions")||Xt.context.ptOptions||{},I=K.mergeSections,A=I===void 0?!0:I,X=K.mergeProps,le=X===void 0?!1:X,V=function(){var k=Xi.apply(void 0,arguments);return Array.isArray(k)?{className:Zf.apply(void 0,hm(k))}:Gt.isString(k)?{className:k}:k!=null&&k.hasOwnProperty("className")&&Array.isArray(k.className)?{className:Zf.apply(void 0,hm(k.className))}:k},ue=E?y?xv(V,M,S):Sv(V,M,S):void 0,ae=y?void 0:mu(pu(g,b),V,M,S),de=!P&&on(on({},x==="root"&&ed({},"".concat(B,"name"),S.props&&S.props.__parentMetadata?Gt.toFlatCase(S.props.__TYPE):b)),{},ed({},"".concat(B,"section"),x));return A||!A&&ae?le?eu([ue,ae,Object.keys(de).length?de:{}],{classNameMergeFunction:(p=Xt.context.ptOptions)===null||p===void 0?void 0:p.classNameMergeFunction}):on(on(on({},ue),ae),Object.keys(de).length?de:{}):on(on({},ae),Object.keys(de).length?de:{})},d=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},g=p.props,v=p.state,S=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return c((g||{}).pt,b,on(on({},p),P))},E=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",B=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return c(b,P,B,!1)},M=function(){return Xt.context.unstyled||hu.unstyled||g.unstyled},y=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return M()?void 0:Xi(t&&t.classes,b,on({props:g,state:v},P))},x=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},B=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(B){var O,U=Xi(t&&t.inlineStyles,b,on({props:g,state:v},P)),K=Xi(o,b,on({props:g,state:v},P));return eu([K,U],{classNameMergeFunction:(O=Xt.context.ptOptions)===null||O===void 0?void 0:O.classNameMergeFunction})}};return{ptm:S,ptmo:E,sx:x,cx:y,isUnstyled:M}};return on(on({getProps:a,getOtherProps:u,setMetaData:d},e),{},{defaultProps:n})}},Xi=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=String(Gt.toFlatCase(t)).split("."),a=o.shift(),u=Gt.isNotEmpty(e)?Object.keys(e).find(function(c){return Gt.toFlatCase(c)===a}):"";return a?Gt.isObject(e)?Xi(Gt.getItemValue(e[u],n),o.join("."),n):void 0:Gt.getItemValue(e,n)},pu=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,o=e==null?void 0:e._usept,a=function(c){var d,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=n?n(c):c,g=Gt.toFlatCase(t);return(d=h?g!==Xt.cName?p==null?void 0:p[g]:void 0:p==null?void 0:p[g])!==null&&d!==void 0?d:p};return Gt.isNotEmpty(o)?{_usept:o,originalValue:a(e.originalValue),value:a(e.value)}:a(e,!0)},mu=function(e,t,n,o){var a=function(M){return t(M,n,o)};if(e!=null&&e.hasOwnProperty("_usept")){var u=e._usept||Xt.context.ptOptions||{},c=u.mergeSections,d=c===void 0?!0:c,h=u.mergeProps,p=h===void 0?!1:h,g=u.classNameMergeFunction,v=a(e.originalValue),S=a(e.value);return v===void 0&&S===void 0?void 0:Gt.isString(S)?S:Gt.isString(v)?v:d||!d&&S?p?eu([v,S],{classNameMergeFunction:g}):on(on({},v),S):S}return a(e)},Ix=function(){return pu(Xt.context.pt||hu.pt,void 0,function(e){return Gt.getItemValue(e,Xt.cParams)})},Ux=function(){return pu(Xt.context.pt||hu.pt,void 0,function(e){return Xi(e,Xt.cName,Xt.cParams)||Gt.getItemValue(e,Xt.cParams)})},xv=function(e,t,n){return mu(Ix(),e,t,n)},Sv=function(e,t,n){return mu(Ux(),e,t,n)},Ox=function(e){var t=arguments.length>2?arguments[2]:void 0,n=t.name,o=t.styled,a=o===void 0?!1:o,u=t.hostName,c=u===void 0?"":u,d=xv(Xi,"global.css",Xt.cParams),h=Gt.toFlatCase(n),p=Sl(Rx,{name:"base",manual:!0}),g=p.load,v=Sl(Dx,{name:"common",manual:!0}),S=v.load,E=Sl(d,{name:"global",manual:!0}),M=E.load,y=Sl(e,{name:n,manual:!0}),x=y.load,C=function(P){if(!c){var B=mu(pu((Xt.cProps||{}).pt,h),Xi,"hooks.".concat(P)),O=Sv(Xi,"hooks.".concat(P));B==null||B(),O==null||O()}};C("useMountEffect"),xx(function(){g(),M(),S(),a||x()}),Ex(function(){C("useUpdateEffect")}),_x(function(){C("useUnmountEffect")})};function Fx(){if(console&&console.warn){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const mm={};function td(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];typeof e[0]=="string"&&mm[e[0]]||(typeof e[0]=="string"&&(mm[e[0]]=new Date),Fx(...e))}const Ev=(r,e)=>()=>{if(r.isInitialized)e();else{const t=()=>{setTimeout(()=>{r.off("initialized",t)},0),e()};r.on("initialized",t)}};function gm(r,e,t){r.loadNamespaces(e,Ev(r,t))}function vm(r,e,t,n){typeof t=="string"&&(t=[t]),t.forEach(o=>{r.options.ns.indexOf(o)<0&&r.options.ns.push(o)}),r.loadLanguages(e,Ev(r,n))}function kx(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=e.languages[0],o=e.options?e.options.fallbackLng:!1,a=e.languages[e.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const u=(c,d)=>{const h=e.services.backendConnector.state[`${c}|${d}`];return h===-1||h===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!u(e.isLanguageChangingTo,r)?!1:!!(e.hasResourceBundle(n,r)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||u(n,r)&&(!o||u(a,r)))}function zx(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(td("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(r,{lng:t.lng,precheck:(o,a)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!a(o.isLanguageChangingTo,r))return!1}}):kx(r,e,t)}const Bx=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Hx={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Vx=r=>Hx[r],Gx=r=>r.replace(Bx,Vx);let nd={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Gx};function Wx(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};nd={...nd,...r}}function jx(){return nd}let Mv;function Xx(r){Mv=r}function $x(){return Mv}const qx={type:"3rdParty",init(r){Wx(r.options.react),Xx(r)}},wv=he.createContext();class Yx{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Kx=(r,e)=>{const t=he.useRef();return he.useEffect(()=>{t.current=r},[r,e]),t.current};function Tv(r,e,t,n){return r.getFixedT(e,t,n)}function Zx(r,e,t,n){return he.useCallback(Tv(r,e,t,n),[r,e,t,n])}function ho(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:t}=e,{i18n:n,defaultNS:o}=he.useContext(wv)||{},a=t||n||$x();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new Yx),!a){td("You will need to pass in an i18next instance by using initReactI18next");const P=(O,U)=>typeof U=="string"?U:U&&typeof U=="object"&&typeof U.defaultValue=="string"?U.defaultValue:Array.isArray(O)?O[O.length-1]:O,B=[P,{},!1];return B.t=P,B.i18n={},B.ready=!1,B}a.options.react&&a.options.react.wait!==void 0&&td("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...jx(),...a.options.react,...e},{useSuspense:c,keyPrefix:d}=u;let h=o||a.options&&a.options.defaultNS;h=typeof h=="string"?[h]:h||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(h);const p=(a.isInitialized||a.initializedStoreOnce)&&h.every(P=>zx(P,a,u)),g=Zx(a,e.lng||null,u.nsMode==="fallback"?h:h[0],d),v=()=>g,S=()=>Tv(a,e.lng||null,u.nsMode==="fallback"?h:h[0],d),[E,M]=he.useState(v);let y=h.join();e.lng&&(y=`${e.lng}${y}`);const x=Kx(y),C=he.useRef(!0);he.useEffect(()=>{const{bindI18n:P,bindI18nStore:B}=u;C.current=!0,!p&&!c&&(e.lng?vm(a,e.lng,h,()=>{C.current&&M(S)}):gm(a,h,()=>{C.current&&M(S)})),p&&x&&x!==y&&C.current&&M(S);function O(){C.current&&M(S)}return P&&a&&a.on(P,O),B&&a&&a.store.on(B,O),()=>{C.current=!1,P&&a&&P.split(" ").forEach(U=>a.off(U,O)),B&&a&&B.split(" ").forEach(U=>a.store.off(U,O))}},[a,y]),he.useEffect(()=>{C.current&&p&&M(v)},[a,d,p]);const b=[E,a,p];if(b.t=E,b.i18n=a,b.ready=p,p||!p&&!c)return b;throw new Promise(P=>{e.lng?vm(a,e.lng,h,()=>P()):gm(a,h,()=>P())})}function Qx(r){let{i18n:e,defaultNS:t,children:n}=r;const o=he.useMemo(()=>({i18n:e,defaultNS:t}),[e,t]);return he.createElement(wv.Provider,{value:o},n)}const Jx=()=>{const{t:r}=ho(),[e,t]=he.useState(!1);he.useEffect(()=>{const o=setTimeout(()=>{t(!0)},100);return()=>clearTimeout(o)},[]);const n=[[{src:"img/iPhone 15 Mockup, Perspective.png",title:"SpaceAirTracker",heightClass:"h-auto"},{src:"img/cleopatraCosmetics.jpg",title:"Cleopatra Cosmétics",heightClass:"h-48"}],[{src:"img/macbook-subtle-turn.mp4",title:"Claustrum Aquae",isVideo:!0,heightClass:"h-52"},{src:"img/mockupHp.png",title:"Harry Potter App",heightClass:"h-auto"}],[{src:"img/mockupMex1.png",title:"México Guide",heightClass:"h-auto"},{src:"img/Mobile App Screen Mockup, Mosaic.png",title:"The Holy Wine",heightClass:"h-48"}],[{src:"img/mockuptrafic.png",title:"Traffic Valencia",heightClass:"h-52"},{src:"img/mockupHp.png",title:"Harry Potter App",heightClass:"h-auto"}]];return D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"flex flex-col justify-center items-center mt-10",children:[e&&D.jsxs("span",{className:"span_maqEscribir overflow-hidden border-r-2 border-blue-400",children:[r("header.helloWorld"),D.jsx("br",{})]}),e&&D.jsxs("span",{className:"span_maqEscribir1 overflow-hidden border-r-2 border-orange-400",children:[r("header.Im"),D.jsx("br",{})]})]}),D.jsx("div",{className:"h-auto mb-20 lg:mb-12",children:D.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 ml-10 mr-10",children:n.map((o,a)=>D.jsx("div",{className:"grid gap-4",children:o.map((u,c)=>D.jsxs("figure",{className:"max-w-full relative",children:[u.isVideo?D.jsx("iframe",{className:`object-cover max-w-full rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-300 ${u.heightClass}`,src:u.src,allow:"autoplay; fullscreen; picture-in-picture",title:u.title}):D.jsx("img",{className:`object-cover max-w-full rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300 ${u.heightClass}`,src:u.src,alt:u.title}),D.jsx("figcaption",{className:"span_maqEscribir2 overflow-hidden rounded-md top-1 w-full z-90 absolute bg-gradient-to-r from-zinc-50 text-zinc-700 font-semibold px-5 py-2 text-xs",children:u.title})]},c))},a))})}),D.jsx("div",{className:"flex justify-center mb-20",children:D.jsxs(Jr,{to:"/contacto",className:"conoceme",children:[r("header.contact")," ",D.jsx("i",{className:"pi pi-user",style:{color:"white"},children:" "})]})})]})},eS=()=>{const{t:r}=ho();return D.jsx(D.Fragment,{children:D.jsxs("div",{className:"seccionInformacion",children:[D.jsxs("div",{className:"icon_section",children:[D.jsx("span",{children:D.jsx("i",{className:"pi pi-thumbs-up",style:{color:"#e040a4"}})}),D.jsx("h1",{className:"titsec_Informacion",children:r("sectionInformation.professionalism.title")}),D.jsx("p",{className:"parrsec_Informacion",children:r("sectionInformation.professionalism.description")})]}),D.jsxs("div",{className:"icon_section",children:[D.jsx("span",{children:D.jsx("i",{className:"pi pi-question",style:{color:"#e040a4"}})}),D.jsx("h1",{className:"titsec_Informacion",children:r("sectionInformation.advice.title")}),D.jsx("p",{className:"parrsec_Informacion",children:r("sectionInformation.advice.description")})]}),D.jsxs("div",{className:"icon_section",children:[D.jsx("span",{children:D.jsx("i",{className:"pi pi-tablet",style:{color:"#e040a4"}})}),D.jsx("h1",{className:"titsec_Informacion",children:r("sectionInformation.devices.title")}),D.jsxs("p",{className:"parrsec_Informacion",children:[" ",r("sectionInformation.devices.description")]})]})]})})},tS=()=>D.jsx("div",{children:D.jsx(eS,{})});var Wi=ox();function id(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function nS(r){if(Array.isArray(r))return id(r)}function iS(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function bv(r,e){if(r){if(typeof r=="string")return id(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return id(r,e)}}function rS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _m(r){return nS(r)||iS(r)||bv(r)||rS()}function sS(r){if(Array.isArray(r))return r}function oS(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,o,a,u,c=[],d=!0,h=!1;try{if(a=(t=t.call(r)).next,e!==0)for(;!(d=(n=a.call(t)).done)&&(c.push(n.value),c.length!==e);d=!0);}catch(p){h=!0,o=p}finally{try{if(!d&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(h)throw o}}return c}}function aS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function El(r,e){return sS(r)||oS(r,e)||bv(r,e)||aS()}var lS={root:"p-terminal p-component",content:"p-terminal-content",container:"p-terminal-prompt-container",command:"p-terminal-command",commandText:"p-terminal-input",prompt:"p-terminal-prompt",response:"p-terminal-response"},uS=`
@layer primereact {
    .p-terminal {
        height: 18rem;
        overflow: auto;
    }
    
    .p-terminal-prompt-container {
        display: flex;
        align-items: center;
    }
    
    .p-terminal-input {
        flex: 1 1 auto;
        border: 0 none;
        background-color: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
    }
    
    .p-terminal-input::-ms-clear {
        display: none;
    }        
}
`,Ml=Xt.extend({defaultProps:{__TYPE:"Terminal",id:null,style:null,className:null,welcomeMessage:null,prompt:null,children:void 0},css:{classes:lS,styles:uS}}),Av=he.memo(he.forwardRef(function(r,e){var t=yx(),n=he.useContext(pd),o=Ml.getProps(r,n),a=he.useState(""),u=El(a,2),c=u[0],d=u[1],h=he.useState([]),p=El(h,2),g=p[0],v=p[1],S=he.useState(0),E=El(S,2),M=E[0],y=E[1],x=he.useState(""),C=El(x,2),b=C[0],P=C[1],B=he.useRef(null),O=he.useRef(null),U=he.useRef(!1),K=Ml.setMetaData({props:o,state:{commandText:c,commands:g}}),I=K.ptm,A=K.cx,X=K.isUnstyled;Ox(Ml.css.styles,X,{name:"terminal"});var le=t({className:A("prompt")},I("prompt")),V=function(){ss.focus(O.current)},ue=function(ce){d(ce.target.value)},ae=function(ce){switch(ce.code){case"ArrowUp":if(g&&g.length){var ve=M-1<0?g.length-1:M-1,me=g[ve];y(ve),d(me.text)}break;case"Enter":case"NumpadEnter":if(c){var Ae=_m(g);Ae.push({text:c}),y(function(Ge){return Ge+1}),d(""),v(Ae),P(c),U.current=!0}break}};he.useImperativeHandle(e,function(){return{props:o,focus:function(){return ss.focus(O.current)},getElement:function(){return B.current}}}),he.useEffect(function(){var W=function(me){if(g&&g.length>0){var Ae=_m(g);Ae[Ae.length-1].response=me,v(Ae)}},ce=function(){v([]),y(0)};return Wi.on("response",W),Wi.on("clear",ce),function(){Wi.off("response",W),Wi.off("clear",ce)}},[g]),he.useEffect(function(){U.current&&(Wi.emit("command",b),U.current=!1),B.current.scrollTop=B.current.scrollHeight});var de=function(){if(o.welcomeMessage){var ce=t(I("welcomeMessage"));return he.createElement("div",ce,o.welcomeMessage)}return null},fe=function(ce,ve){var me=ce.text,Ae=ce.response,Ge=me+"_"+ve,Z=t({key:Ge},I("commands")),mt=t({className:A("command")},I("command")),je=t({className:A("response"),"aria-live":"polite"},I("response"));return he.createElement("div",Z,he.createElement("span",le,o.prompt," "),he.createElement("span",mt,me),he.createElement("div",je,Ae))},k=function(){var ce=g.map(fe),ve=t({className:A("content")},I("content"));return he.createElement("div",ve,ce)},te=function(){var ce=t({className:A("container")},I("container")),ve=t({ref:O,value:c,type:"text",className:A("commandText"),autoComplete:"off",onChange:function(Ae){return ue(Ae)},onKeyDown:ae},I("commandText"));return he.createElement("div",ce,he.createElement("span",le,o.prompt," "),he.createElement("input",ve))},L=de(),q=k(),Me=te(),Ie=t({id:o.id,ref:B,className:Zf(o.className,A("root")),style:o.style,onClick:V},Ml.getOtherProps(o),I("root"));return he.createElement("div",Ie,L,q,Me)}));Av.displayName="Terminal";const cS=()=>{const r=e=>{console.log("Comando recibido:",e);let t,n=e.indexOf(" "),o=n!==-1?e.substring(0,n):e;switch(o){case"init":t=`
  /\\_/\\                                         
 ( o.o )   Hello!!!                              
  > ^ <    Bienvenido a mi terminal!!
  
`;break;case"date":t="Today is "+new Date().toDateString();break;case"bienvenida":t="Hola puedes guiarte con los diferentes comandos, ...";break;case"quienSoy":t="Me llamo Andrea, y soy una gerundense que hace más de un año medio desarrollando webs en el sector del Frontend, mis frameworks favoritos son Angular y React";break;case"unMundoDescubierto":t="Desde que descubrí este mundo, hace aproximadamente un año, me he sumergido en este viaje emocionante de aprendizaje constante  y crecimiento personal,en él he aprendido que no hay nada imposible de conseguir si trabajas duro y con disciplina. Con el paso de los meses, la curiosidad y el afán de aprender, han sido el motor incansable que me ha llevado hasta este camino.";break;case"viajeLenguajes":t="Durante este viaje, he adquirido experiencia en el desarrollo Web Frontend y mis pinitos en el Backend, utilizando las tecnologias más demandadas de esta carrera, HTML, CSS, Javascript, React, Node, MongoDb. Además he podido enfrentarme al desafio  de trabajar en proyectos reales que me han permitido mejorar todas mis habilidades y enfrentarme a situaciones en el mundo real. Me he adentrado en el mundo de las librerias de mapas interactivos, como Leaflet, MapLibre, OpenLayers y Mapbox, generando de cada librería un proyecto de cada uno de características distintas";break;case"gracias":t="Si has llegado hasta aqui, queria agradecerte que hayas dedicado tu tiempo a conocerme un poco más, si tienes alguna pregunta o quieres saber más sobre mi, no dudes en contactar conmigo. ¡Gracias!";break;case"clear":t=null;break;case"help":t=D.jsxs("ul",{style:{listStyleType:"none",padding:0},children:[D.jsxs("li",{children:[D.jsx("strong",{style:{color:"#4caf50"},children:"init:"})," Inicializa la terminal."]}),D.jsxs("li",{children:[D.jsx("strong",{style:{color:"#4caf50"},children:"date:"})," Muestra la fecha actual."]}),D.jsxs("li",{children:[D.jsx("strong",{style:{color:"#4caf50"},children:"bienvenida:"})," Un saludo inicial y guía."]}),D.jsxs("li",{children:[D.jsx("strong",{style:{color:"#4caf50"},children:"quienSoy:"})," Información sobre mí."]}),D.jsxs("li",{children:[D.jsx("strong",{style:{color:"#4caf50"},children:"unMundoDescubierto:"})," Mi introducción al desarrollo."]}),D.jsxs("li",{children:[D.jsx("strong",{style:{color:"#4caf50"},children:"viajeLenguajes:"})," Tecnologías y proyectos."]}),D.jsxs("li",{children:[D.jsx("strong",{style:{color:"#4caf50"},children:"gracias:"})," Mensaje de agradecimiento."]}),D.jsxs("li",{children:[D.jsx("strong",{style:{color:"#4caf50"},children:"clear:"})," Limpia la terminal."]})]});break;default:t="Unknown command: "+o;break}t?Wi.emit("response",t):Wi.emit("clear")};return he.useEffect(()=>(Wi.on("command",r),()=>{Wi.off("command",r)}),[]),D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"md:flex flex-col md:flex-row lg:flex-row justify-center  font-mono text-zinc-600 card terminal-demo",children:[D.jsx("div",{className:"grid grid-cols-1 md:grid-rows-2 text-center md:text-left lg-text-left md:mr-5",children:D.jsxs("div",{children:[D.jsx("p",{className:"text-xl font-bold",children:"Instrucciones"}),D.jsxs("p",{children:['Entre "',D.jsx("strong",{children:"date"}),'" la terminal ',D.jsx("br",{}),"le mostrará la fecha."]}),D.jsxs("p",{children:["Si quiere limpiar la terminal ",D.jsx("br",{}),"utilice el prompt ",D.jsx("strong",{children:'"clear"'})]})]})}),D.jsx("div",{className:"flex flex-col text-center md:text-left",children:D.jsxs("ol",{children:[D.jsx("p",{className:"text-xl font-bold",children:"Propmts"}),D.jsx("li",{children:D.jsxs("strong",{children:["init","{0}"]})}),D.jsx("li",{children:D.jsxs("strong",{children:["bienvenida ","{1}"]})}),D.jsx("li",{children:D.jsxs("strong",{children:["date","{2}"]})}),D.jsx("li",{children:D.jsxs("strong",{children:["quienSoy","{3}"]})}),D.jsx("li",{children:D.jsxs("strong",{children:["unMundoDescubierto","{4}"]})}),D.jsx("li",{children:D.jsxs("strong",{children:["viajeLenguajes","{5}"]})}),D.jsx("li",{children:D.jsxs("strong",{children:["gracias","{6}"]})}),D.jsx("li",{children:D.jsxs("strong",{children:["clear","{7}"]})}),D.jsx("li",{children:D.jsxs("strong",{children:["help","{8}"]})})]})})]}),D.jsx("div",{className:"mt-10",children:D.jsx(Av,{welcomeMessage:"Welcome to my Portfolio",prompt:"primereact $",className:"mt-10 whitespace-pre-wrap p-terminal"})})]})},ym=()=>D.jsx("div",{children:D.jsx(Jx,{})}),fS=()=>{const{t:r}=ho();return D.jsxs(D.Fragment,{children:[D.jsx("h1",{className:"skills",children:r("header.skills")}),D.jsxs("div",{className:"contenedor",children:[D.jsxs("figure",{children:[D.jsx("img",{src:"https://miro.medium.com/max/1200/0*2JYJbAv70Asvm2de.png",alt:"img-skills"}),D.jsxs("div",{className:"capa",children:[D.jsx("h2",{children:"100%"}),D.jsx("p",{children:r("skills.markupLanguage")})]})]}),D.jsxs("figure",{children:[D.jsx("img",{src:"https://th.bing.com/th/id/OIP.xEVLs9u_Z6fr-jKrDpWI6AHaD6?rs=1&pid=ImgDetMain",alt:"img-skills"}),D.jsxs("div",{className:"capa",children:[D.jsx("h2",{children:"100%"}),D.jsxs("p",{children:[r("skills.webInterfaceDesign")," "]})]})]}),D.jsxs("figure",{children:[D.jsx("img",{src:"https://blog.faradars.org/wp-content/uploads/2023/01/what-is-JS.jpg",alt:"img-skills"}),D.jsxs("div",{className:"capa",children:[D.jsx("h2",{children:"70%"}),D.jsx("p",{children:r("skills.javascriptKnowledge")})]})]}),D.jsxs("figure",{children:[D.jsx("img",{src:"https://theomnibuzz.com/wp-content/uploads/2020/12/react-js-1_orig.png",alt:"img-skills"}),D.jsxs("div",{className:"capa",children:[D.jsx("h2",{children:"70%"}),D.jsx("p",{children:r("skills.reactExperience")})]})]}),D.jsxs("figure",{children:[D.jsx("img",{src:"https://www.filepicker.io/api/file/7vjtVUXBQHyTO4AhJ7mW",alt:"img-skills"}),D.jsxs("div",{className:"capa",children:[D.jsx("h2",{children:"50%"}),D.jsx("p",{children:r("skills.databaseExperience")})]})]}),D.jsxs("figure",{children:[D.jsx("img",{src:"https://www.themeinthebox.com/wp-content/uploads/elementor/thumbs/Bootstrap-5-q6cc37pc8ekqe5d3vc9scpfvtcdjqj6ei5n4rcfucw.png",alt:"img-skills"}),D.jsxs("div",{className:"capa",children:[D.jsx("h2",{children:"100%"}),D.jsx("p",{children:r("skills.bootstrapKnowledge")})]})]}),D.jsxs("figure",{children:[D.jsx("img",{src:"https://th.bing.com/th/id/OIP.piAMkLAjuBhL3mIPbPgROgHaDm?rs=1&pid=ImgDetMain",alt:"img-skills"}),D.jsxs("div",{className:"capa",children:[D.jsx("h2",{children:"90%"}),D.jsx("p",{children:r("skills.dailyUsage")})]})]}),D.jsxs("figure",{children:[D.jsx("img",{src:"https://miro.medium.com/max/3840/1*fDwzjCH3qzhosC6DVel4ng.jpeg",alt:"img-skills"}),D.jsxs("div",{className:"capa",children:[D.jsx("h2",{children:"90%"}),D.jsx("p",{children:r("skills.gitExperience")})]})]}),D.jsxs("figure",{children:[D.jsx("img",{src:"https://freecodestack.com/wp-content/uploads/2022/12/What-is-tailwind-CSS-and-its-features.jpg"}),D.jsxs("div",{className:"capa",children:[D.jsx("h2",{children:"80%"}),D.jsxs("p",{children:[" ",r("skills.tailwindExperience")]})]})]})]})]})},dS=()=>D.jsxs("div",{children:["Proyectos",D.jsx("h1",{children:"Proyectos"})]}),hS=()=>D.jsx(D.Fragment,{children:D.jsx("form",{class:"mb-20 mr-2 ml-2 mt-32",children:D.jsxs("div",{class:"flex flex-col  lg:flex-row md:flex-row",children:[D.jsx("div",{class:"md:w-2/5 lg:w-2/5 h-96 opacity-65 ",children:D.jsx("img",{src:"https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600",class:"h-96 w-full object-cover rounded-lg"})}),D.jsxs("div",{class:"md:w-4/5 lg:w-4/5 h-96 md:ml-4 lg:ml-8 lg:mr-8",children:[D.jsx("h2",{class:"mb-4 text-2xl tracking-tight font-extrabold text-center text-zinc-700 font-mono",children:"Contacto"}),D.jsx("p",{class:"mb-8 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-base",children:"Quieres accesoramiento, consejo o quieres transmitirme tu idea para tu web, ponte en contacto conmigo"}),D.jsxs("div",{class:"flex flex-row gap-2",children:[D.jsxs("div",{class:"flex flex-col w-full ",children:[D.jsx("label",{for:"email",class:"block mb-1 text-xs font-medium text-gray-900 ",children:"Your email"}),D.jsx("input",{type:"email",id:"email",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ",placeholder:"example@gmail.com",required:!0})]}),D.jsxs("div",{class:"flex flex-col w-full",children:[D.jsx("label",{for:"name",class:"block mb-1 text-xs font-medium text-gray-900 ",children:"Tu nombre"}),D.jsx("input",{type:"text",id:"text",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ",placeholder:"tu nombre y apellidos",required:!0})]})]}),D.jsxs("div",{class:"w-full ",children:[D.jsx("textarea",{id:"message",rows:"4",class:"mt-4  block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Que quieres consultarme..."}),D.jsx("button",{type:"submit",class:" bg-zinc-900 text-white p-1 rounded-sm mt-2 w-28 h-10",children:"Enviar"})]})]})]})})}),pS=()=>{const{t:r}=ho();return D.jsxs(D.Fragment,{children:[D.jsx("h1",{className:"certificaciones_title",children:r("header.certifications")}),D.jsxs("div",{className:"container_certificaciones",children:[D.jsxs("div",{className:"card_google",children:[D.jsx("h2",{children:r("certificationsGoogle.june")}),D.jsxs("h3",{children:[r("certificationsGoogle.course")," ",D.jsx("br",{})," ",r("certificationsGoogle.coursetitle")]}),D.jsx("img",{src:"https://www.emprendedorinteligente.com/wp-content/uploads/2019/11/header-activate-logo-lg-1024x286.png",className:"logo_google"}),D.jsxs("details",{children:[D.jsx("summary",{children:r("certificationsGoogle.summary")}),D.jsx("li",{children:r("certificationsGoogle.topics.history")}),D.jsx("li",{children:r("certificationsGoogle.topics.functioning")}),D.jsx("li",{children:r("certificationsGoogle.topics.writing")}),D.jsx("li",{children:r("certificationsGoogle.topics.publication")}),D.jsx("li",{children:r("certificationsGoogle.topics.page")})]})]}),D.jsxs("div",{className:"card_google1",children:[D.jsx("h2",{children:r("certificationsGoogle1.july")}),D.jsxs("h3",{children:[r("certificationsGoogle1.course")," ",D.jsx("br",{})," ",r("certificationsGoogle1.coursetitle")]}),D.jsx("img",{src:"https://www.emprendedorinteligente.com/wp-content/uploads/2019/11/header-activate-logo-lg-1024x286.png",className:"logo_google"}),D.jsxs("details",{children:[D.jsx("summary",{children:r("certificationsGoogle.summary")}),D.jsx("li",{children:r("certificationsGoogle1.topics.presentationDefinition")}),D.jsx("li",{children:r("certificationsGoogle1.topics.elementsPresentationDefinition")}),D.jsx("li",{children:r("certificationsGoogle1.topics.webSuccessAchievement")}),D.jsx("li",{children:r("certificationsGoogle1.topics.webLayout")})]})]}),D.jsxs("div",{className:"card_google3",children:[D.jsx("h2",{children:r("certificationsUdemy.august")}),D.jsx("h3",{children:r("certificationsUdemy.course")}),D.jsx("img",{src:"https://logosmarcas.net/wp-content/uploads/2021/11/Udemy-Logo-650x366.png",className:"logo_google"}),D.jsxs("details",{children:[D.jsx("summary",{children:r("certificationsGoogle.summary")}),D.jsx("li",{children:r("certificationsUdemy.topics.htmlFundamentals")}),D.jsx("li",{children:r("certificationsUdemy.topics.cssFundamentals")}),D.jsx("li",{children:r("certificationsUdemy.topics.layouts")}),D.jsx("li",{children:r("certificationsUdemy.topics.components")}),D.jsx("li",{children:r("certificationsUdemy.topics.projects")})]})]}),D.jsxs("div",{className:"card_google2",children:[D.jsx("h2",{children:r("certificationsFreeCodeCamp.certification_info.title")}),D.jsx("h3",{children:r("certificationsFreeCodeCamp.certification_info.subtitle")}),D.jsx("img",{src:"https://www.arnoldgelacio.com/images/skills/logo-freecodecamp.png",className:"logo_google"}),D.jsxs("details",{children:[D.jsxs("summary",{children:[r("certificationsGoogle.summary")," 300h"]}),D.jsx("li",{children:r("certificationsFreeCodeCamp.certification_info.summary.details.0")}),D.jsx("li",{children:r("certificationsFreeCodeCamp.certification_info.summary.details.1")}),D.jsx("li",{children:r("certificationsFreeCodeCamp.certification_info.summary.details.2")}),D.jsx("li",{children:r("certificationsFreeCodeCamp.certification_info.summary.details.3")})]})]})]})]})},mS=()=>{let r="img/logo2.png";const{t:e}=ho();return D.jsx(D.Fragment,{children:D.jsx("div",{className:"header flex flex-col justify-center items-center mb-16",children:D.jsxs("div",{className:"flex mb-2 justify-start",children:[D.jsx("img",{src:r,className:"h-auto mb-12 mt-5 w-28 md:",alt:"logo-imagen"}),D.jsxs("div",{className:"flex flex-col p-1 h-8 no-underline list-none ml-0 font-light not-italic",children:[D.jsxs(Jr,{to:"/inicio",className:"enlaces_navbar",children:[" ",e("header.home")]}),D.jsxs("details",{children:[D.jsx("summary",{className:"enlaces_navbar",children:e("header.KnowMe")}),D.jsx(Jr,{to:"/sobremi",className:"enlaces",children:e("header.aboutMe")}),D.jsxs(Jr,{to:"/queofrezco",className:"enlaces",children:[" ",e("header.whatdoIoffer")]})]}),D.jsxs("details",{children:[D.jsx("summary",{className:"enlaces_navbar",children:e("header.training")}),D.jsx(Jr,{to:"/skills",className:"enlaces",children:e("header.skills")}),D.jsxs(Jr,{to:"/certificaciones",className:"enlaces",children:[" ",e("header.certifications")]})]}),D.jsx(Jr,{to:"/contacto",className:"enlaces_navbar",children:e("header.contact")})]})]})})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const md="164",Is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gS=0,xm=1,vS=2,Cv=1,_S=2,Gi=3,Ar=0,On=1,ji=2,Tr=0,io=1,Sm=2,Em=3,Mm=4,yS=5,ts=100,xS=101,SS=102,ES=103,MS=104,wS=200,TS=201,bS=202,AS=203,rd=204,sd=205,CS=206,RS=207,PS=208,LS=209,NS=210,DS=211,IS=212,US=213,OS=214,FS=0,kS=1,zS=2,tu=3,BS=4,HS=5,VS=6,GS=7,Rv=0,WS=1,jS=2,br=0,XS=1,$S=2,qS=3,YS=4,KS=5,ZS=6,QS=7,Pv=300,ao=301,lo=302,od=303,ad=304,gu=306,ld=1e3,is=1001,ud=1002,ti=1003,JS=1004,wl=1005,pi=1006,hf=1007,rs=1008,Cr=1009,eE=1010,tE=1011,Lv=1012,Nv=1013,uo=1014,Mr=1015,vu=1016,Dv=1017,Iv=1018,ga=1020,nE=35902,iE=1021,rE=1022,Mi=1023,sE=1024,oE=1025,ro=1026,ca=1027,aE=1028,Uv=1029,lE=1030,Ov=1031,Fv=1033,pf=33776,mf=33777,gf=33778,vf=33779,wm=35840,Tm=35841,bm=35842,Am=35843,Cm=36196,Rm=37492,Pm=37496,Lm=37808,Nm=37809,Dm=37810,Im=37811,Um=37812,Om=37813,Fm=37814,km=37815,zm=37816,Bm=37817,Hm=37818,Vm=37819,Gm=37820,Wm=37821,_f=36492,jm=36494,Xm=36495,uE=36283,$m=36284,qm=36285,Ym=36286,cE=3200,fE=3201,dE=0,hE=1,Sr="",xi="srgb",Lr="srgb-linear",gd="display-p3",_u="display-p3-linear",nu="linear",Nt="srgb",iu="rec709",ru="p3",Os=7680,Km=519,pE=512,mE=513,gE=514,kv=515,vE=516,_E=517,yE=518,xE=519,Zm=35044,Qm="300 es",$i=2e3,su=2001;class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jm=1234567;const ia=Math.PI/180,fa=180/Math.PI;function po(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function En(r,e,t){return Math.max(e,Math.min(t,r))}function vd(r,e){return(r%e+e)%e}function SE(r,e,t,n,o){return n+(r-e)*(o-n)/(t-e)}function EE(r,e,t){return r!==e?(t-r)/(e-r):0}function ra(r,e,t){return(1-t)*r+t*e}function ME(r,e,t,n){return ra(r,e,1-Math.exp(-t*n))}function wE(r,e=1){return e-Math.abs(vd(r,e*2)-e)}function TE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function bE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function AE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function CE(r,e){return r+Math.random()*(e-r)}function RE(r){return r*(.5-Math.random())}function PE(r){r!==void 0&&(Jm=r);let e=Jm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function LE(r){return r*ia}function NE(r){return r*fa}function DE(r){return(r&r-1)===0&&r!==0}function IE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function UE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function OE(r,e,t,n,o){const a=Math.cos,u=Math.sin,c=a(t/2),d=u(t/2),h=a((e+n)/2),p=u((e+n)/2),g=a((e-n)/2),v=u((e-n)/2),S=a((n-e)/2),E=u((n-e)/2);switch(o){case"XYX":r.set(c*p,d*g,d*v,c*h);break;case"YZY":r.set(d*v,c*p,d*g,c*h);break;case"ZXZ":r.set(d*g,d*v,c*p,c*h);break;case"XZX":r.set(c*p,d*E,d*S,c*h);break;case"YXY":r.set(d*S,c*p,d*E,c*h);break;case"ZYZ":r.set(d*E,d*S,c*p,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function to(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const FE={DEG2RAD:ia,RAD2DEG:fa,generateUUID:po,clamp:En,euclideanModulo:vd,mapLinear:SE,inverseLerp:EE,lerp:ra,damp:ME,pingpong:wE,smoothstep:TE,smootherstep:bE,randInt:AE,randFloat:CE,randFloatSpread:RE,seededRandom:PE,degToRad:LE,radToDeg:NE,isPowerOfTwo:DE,ceilPowerOfTwo:IE,floorPowerOfTwo:UE,setQuaternionFromProperEuler:OE,normalize:Tn,denormalize:to};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(En(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*o+e.x,this.y=a*o+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,o,a,u,c,d,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,u,c,d,h)}set(e,t,n,o,a,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=n,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,u=n[0],c=n[3],d=n[6],h=n[1],p=n[4],g=n[7],v=n[2],S=n[5],E=n[8],M=o[0],y=o[3],x=o[6],C=o[1],b=o[4],P=o[7],B=o[2],O=o[5],U=o[8];return a[0]=u*M+c*C+d*B,a[3]=u*y+c*b+d*O,a[6]=u*x+c*P+d*U,a[1]=h*M+p*C+g*B,a[4]=h*y+p*b+g*O,a[7]=h*x+p*P+g*U,a[2]=v*M+S*C+E*B,a[5]=v*y+S*b+E*O,a[8]=v*x+S*P+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-n*a*p+n*c*d+o*a*h-o*u*d}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=p*u-c*h,v=c*d-p*a,S=h*a-u*d,E=t*g+n*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*h-p*n)*M,e[2]=(c*n-o*u)*M,e[3]=v*M,e[4]=(p*t-o*d)*M,e[5]=(o*a-c*t)*M,e[6]=S*M,e[7]=(n*d-h*t)*M,e[8]=(u*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(yf.makeScale(e,t)),this}rotate(e){return this.premultiply(yf.makeRotation(-e)),this}translate(e,t){return this.premultiply(yf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yf=new ht;function zv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kE(){const r=da("canvas");return r.style.display="block",r}const eg={};function zE(r){r in eg||(eg[r]=!0,console.warn(r))}const tg=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ng=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tl={[Lr]:{transfer:nu,primaries:iu,toReference:r=>r,fromReference:r=>r},[xi]:{transfer:Nt,primaries:iu,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[_u]:{transfer:nu,primaries:ru,toReference:r=>r.applyMatrix3(ng),fromReference:r=>r.applyMatrix3(tg)},[gd]:{transfer:Nt,primaries:ru,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ng),fromReference:r=>r.applyMatrix3(tg).convertLinearToSRGB()}},BE=new Set([Lr,_u]),Tt={enabled:!0,_workingColorSpace:Lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!BE.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Tl[e].toReference,o=Tl[t].fromReference;return o(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Tl[r].primaries},getTransfer:function(r){return r===Sr?nu:Tl[r].transfer}};function so(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xf(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fs;class HE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=da("canvas")),Fs.width=e.width,Fs.height=e.height;const n=Fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=so(a[u]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(so(t[n]/255)*255):t[n]=so(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VE=0;class Bv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(Sf(o[u].image)):a.push(Sf(o[u]))}else a=Sf(o);n.url=a}return t||(e.images[this.uuid]=n),n}}function Sf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?HE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GE=0;class An extends us{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,n=is,o=is,a=pi,u=rs,c=Mi,d=Cr,h=An.DEFAULT_ANISOTROPY,p=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=po(),this.name="",this.source=new Bv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ld:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ld:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Pv;An.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,t=0,n=0,o=1){fn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*o+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,a;const d=e.elements,h=d[0],p=d[4],g=d[8],v=d[1],S=d[5],E=d[9],M=d[2],y=d[6],x=d[10];if(Math.abs(p-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,P=(S+1)/2,B=(x+1)/2,O=(p+v)/4,U=(g+M)/4,K=(E+y)/4;return b>P&&b>B?b<.01?(n=0,o=.707106781,a=.707106781):(n=Math.sqrt(b),o=O/n,a=U/n):P>B?P<.01?(n=.707106781,o=0,a=.707106781):(o=Math.sqrt(P),n=O/o,a=K/o):B<.01?(n=.707106781,o=.707106781,a=0):(a=Math.sqrt(B),n=U/a,o=K/a),this.set(n,o,a,t),this}let C=Math.sqrt((y-E)*(y-E)+(g-M)*(g-M)+(v-p)*(v-p));return Math.abs(C)<.001&&(C=1),this.x=(y-E)/C,this.y=(g-M)/C,this.z=(v-p)/C,this.w=Math.acos((h+S+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WE extends us{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t);const o={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new An(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,o=e.textures.length;n<o;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends WE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hv extends An{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=ti,this.minFilter=ti,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jE extends An{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=ti,this.minFilter=ti,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,a,u,c){let d=n[o+0],h=n[o+1],p=n[o+2],g=n[o+3];const v=a[u+0],S=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(g!==M||d!==v||h!==S||p!==E){let y=1-c;const x=d*v+h*S+p*E+g*M,C=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){const B=Math.sqrt(b),O=Math.atan2(B,x*C);y=Math.sin(y*O)/B,c=Math.sin(c*O)/B}const P=c*C;if(d=d*y+v*P,h=h*y+S*P,p=p*y+E*P,g=g*y+M*P,y===1-c){const B=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=B,h*=B,p*=B,g*=B}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,o,a,u){const c=n[o],d=n[o+1],h=n[o+2],p=n[o+3],g=a[u],v=a[u+1],S=a[u+2],E=a[u+3];return e[t]=c*E+p*g+d*S-h*v,e[t+1]=d*E+p*v+h*g-c*S,e[t+2]=h*E+p*S+c*v-d*g,e[t+3]=p*E-c*g-d*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(n/2),p=c(o/2),g=c(a/2),v=d(n/2),S=d(o/2),E=d(a/2);switch(u){case"XYZ":this._x=v*p*g+h*S*E,this._y=h*S*g-v*p*E,this._z=h*p*E+v*S*g,this._w=h*p*g-v*S*E;break;case"YXZ":this._x=v*p*g+h*S*E,this._y=h*S*g-v*p*E,this._z=h*p*E-v*S*g,this._w=h*p*g+v*S*E;break;case"ZXY":this._x=v*p*g-h*S*E,this._y=h*S*g+v*p*E,this._z=h*p*E+v*S*g,this._w=h*p*g-v*S*E;break;case"ZYX":this._x=v*p*g-h*S*E,this._y=h*S*g+v*p*E,this._z=h*p*E-v*S*g,this._w=h*p*g+v*S*E;break;case"YZX":this._x=v*p*g+h*S*E,this._y=h*S*g+v*p*E,this._z=h*p*E-v*S*g,this._w=h*p*g-v*S*E;break;case"XZY":this._x=v*p*g-h*S*E,this._y=h*S*g-v*p*E,this._z=h*p*E+v*S*g,this._w=h*p*g+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],g=t[10],v=n+c+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(p-d)*S,this._y=(a-h)*S,this._z=(u-o)*S}else if(n>c&&n>g){const S=2*Math.sqrt(1+n-c-g);this._w=(p-d)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(a+h)/S}else if(c>g){const S=2*Math.sqrt(1+c-n-g);this._w=(a-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+g-n-c);this._w=(u-o)/S,this._x=(a+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=n*p+u*c+o*h-a*d,this._y=o*p+u*d+a*c-n*h,this._z=a*p+u*h+n*d-o*c,this._w=u*p-n*c-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=o,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*n+t*this._x,this._y=S*o+t*this._y,this._z=S*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),g=Math.sin((1-t)*p)/h,v=Math.sin(t*p)/h;return this._w=u*g+this._w*v,this._x=n*g+this._x*v,this._y=o*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,n=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ig.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ig.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*o,this.y=a[1]*t+a[4]*n+a[7]*o,this.z=a[2]*t+a[5]*n+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*n),p=2*(c*t-a*o),g=2*(a*n-u*t);return this.x=t+d*h+u*g-c*p,this.y=n+d*p+c*h-a*g,this.z=o+d*g+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o,this.y=a[1]*t+a[5]*n+a[9]*o,this.z=a[2]*t+a[6]*n+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-a*c,this.y=a*u-n*d,this.z=n*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ef.copy(this).projectOnVector(e),this.sub(Ef)}reflect(e){return this.sub(Ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(En(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ef=new ee,ig=new as;class va{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,fi):fi.fromBufferAttribute(a,u),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bl.copy(n.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Al.subVectors(this.max,Zo),ks.subVectors(e.a,Zo),zs.subVectors(e.b,Zo),Bs.subVectors(e.c,Zo),pr.subVectors(zs,ks),mr.subVectors(Bs,zs),$r.subVectors(ks,Bs);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-$r.z,$r.y,pr.z,0,-pr.x,mr.z,0,-mr.x,$r.z,0,-$r.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-$r.y,$r.x,0];return!Mf(t,ks,zs,Bs,Al)||(t=[1,0,0,0,1,0,0,0,1],!Mf(t,ks,zs,Bs,Al))?!1:(Cl.crossVectors(pr,mr),t=[Cl.x,Cl.y,Cl.z],Mf(t,ks,zs,Bs,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],fi=new ee,bl=new va,ks=new ee,zs=new ee,Bs=new ee,pr=new ee,mr=new ee,$r=new ee,Zo=new ee,Al=new ee,Cl=new ee,qr=new ee;function Mf(r,e,t,n,o){for(let a=0,u=r.length-3;a<=u;a+=3){qr.fromArray(r,a);const c=o.x*Math.abs(qr.x)+o.y*Math.abs(qr.y)+o.z*Math.abs(qr.z),d=e.dot(qr),h=t.dot(qr),p=n.dot(qr);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const XE=new va,Qo=new ee,wf=new ee;class _d{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):XE.setFromPoints(e).getCenter(n);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const t=Qo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(Qo,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(wf)),this.expandByPoint(Qo.copy(e.center).sub(wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new ee,Tf=new ee,Rl=new ee,gr=new ee,bf=new ee,Pl=new ee,Af=new ee;class Vv{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){Tf.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(Tf);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Rl),c=gr.dot(this.direction),d=-gr.dot(Rl),h=gr.lengthSq(),p=Math.abs(1-u*u);let g,v,S,E;if(p>0)if(g=u*d-c,v=u*c-d,E=a*p,g>=0)if(v>=-E)if(v<=E){const M=1/p;g*=M,v*=M,S=g*(g+u*v+2*c)+v*(u*g+v+2*d)+h}else v=a,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;else v=-a,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;else v<=-E?(g=Math.max(0,-(-u*a+c)),v=g>0?-a:Math.min(Math.max(-a,-d),a),S=-g*g+v*(v+2*d)+h):v<=E?(g=0,v=Math.min(Math.max(-a,-d),a),S=v*(v+2*d)+h):(g=Math.max(0,-(u*a+c)),v=g>0?a:Math.min(Math.max(-a,-d),a),S=-g*g+v*(v+2*d)+h);else v=u>0?-a:a,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Tf).addScaledVector(Rl,v),S}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const n=zi.dot(this.direction),o=zi.dot(zi)-n*n,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=n-u,d=n+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,a,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(n=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(n=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),p>=0?(a=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),n>u||a>o||((a>n||isNaN(n))&&(n=a),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),n>d||c>o)||((c>n||n!==n)&&(n=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,o,a){bf.subVectors(t,e),Pl.subVectors(n,e),Af.crossVectors(bf,Pl);let u=this.direction.dot(Af),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;gr.subVectors(this.origin,e);const d=c*this.direction.dot(Pl.crossVectors(gr,Pl));if(d<0)return null;const h=c*this.direction.dot(bf.cross(gr));if(h<0||d+h>u)return null;const p=-c*gr.dot(Af);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,n,o,a,u,c,d,h,p,g,v,S,E,M,y){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,u,c,d,h,p,g,v,S,E,M,y)}set(e,t,n,o,a,u,c,d,h,p,g,v,S,E,M,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=o,x[1]=a,x[5]=u,x[9]=c,x[13]=d,x[2]=h,x[6]=p,x[10]=g,x[14]=v,x[3]=S,x[7]=E,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/Hs.setFromMatrixColumn(e,0).length(),a=1/Hs.setFromMatrixColumn(e,1).length(),u=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=u*p,S=u*g,E=c*p,M=c*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=S+E*h,t[5]=v-M*h,t[9]=-c*d,t[2]=M-v*h,t[6]=E+S*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*p,S=d*g,E=h*p,M=h*g;t[0]=v+M*c,t[4]=E*c-S,t[8]=u*h,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=S*c-E,t[6]=M+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*p,S=d*g,E=h*p,M=h*g;t[0]=v-M*c,t[4]=-u*g,t[8]=E+S*c,t[1]=S+E*c,t[5]=u*p,t[9]=M-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*p,S=u*g,E=c*p,M=c*g;t[0]=d*p,t[4]=E*h-S,t[8]=v*h+M,t[1]=d*g,t[5]=M*h+v,t[9]=S*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-v*g,t[8]=E*g+S,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*g+E,t[10]=v-M*g}else if(e.order==="XZY"){const v=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=v*g+M,t[5]=u*p,t[9]=S*g-E,t[2]=E*g-S,t[6]=c*p,t[10]=M*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($E,e,qE)}lookAt(e,t,n){const o=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),vr.crossVectors(n,Wn),vr.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),vr.crossVectors(n,Wn)),vr.normalize(),Ll.crossVectors(Wn,vr),o[0]=vr.x,o[4]=Ll.x,o[8]=Wn.x,o[1]=vr.y,o[5]=Ll.y,o[9]=Wn.y,o[2]=vr.z,o[6]=Ll.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,u=n[0],c=n[4],d=n[8],h=n[12],p=n[1],g=n[5],v=n[9],S=n[13],E=n[2],M=n[6],y=n[10],x=n[14],C=n[3],b=n[7],P=n[11],B=n[15],O=o[0],U=o[4],K=o[8],I=o[12],A=o[1],X=o[5],le=o[9],V=o[13],ue=o[2],ae=o[6],de=o[10],fe=o[14],k=o[3],te=o[7],L=o[11],q=o[15];return a[0]=u*O+c*A+d*ue+h*k,a[4]=u*U+c*X+d*ae+h*te,a[8]=u*K+c*le+d*de+h*L,a[12]=u*I+c*V+d*fe+h*q,a[1]=p*O+g*A+v*ue+S*k,a[5]=p*U+g*X+v*ae+S*te,a[9]=p*K+g*le+v*de+S*L,a[13]=p*I+g*V+v*fe+S*q,a[2]=E*O+M*A+y*ue+x*k,a[6]=E*U+M*X+y*ae+x*te,a[10]=E*K+M*le+y*de+x*L,a[14]=E*I+M*V+y*fe+x*q,a[3]=C*O+b*A+P*ue+B*k,a[7]=C*U+b*X+P*ae+B*te,a[11]=C*K+b*le+P*de+B*L,a[15]=C*I+b*V+P*fe+B*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],g=e[6],v=e[10],S=e[14],E=e[3],M=e[7],y=e[11],x=e[15];return E*(+a*d*g-o*h*g-a*c*v+n*h*v+o*c*S-n*d*S)+M*(+t*d*S-t*h*v+a*u*v-o*u*S+o*h*p-a*d*p)+y*(+t*h*g-t*c*S-a*u*g+n*u*S+a*c*p-n*h*p)+x*(-o*c*p-t*d*g+t*c*v+o*u*g-n*u*v+n*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=e[9],v=e[10],S=e[11],E=e[12],M=e[13],y=e[14],x=e[15],C=g*y*h-M*v*h+M*d*S-c*y*S-g*d*x+c*v*x,b=E*v*h-p*y*h-E*d*S+u*y*S+p*d*x-u*v*x,P=p*M*h-E*g*h+E*c*S-u*M*S-p*c*x+u*g*x,B=E*g*d-p*M*d-E*c*v+u*M*v+p*c*y-u*g*y,O=t*C+n*b+o*P+a*B;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=C*U,e[1]=(M*v*a-g*y*a-M*o*S+n*y*S+g*o*x-n*v*x)*U,e[2]=(c*y*a-M*d*a+M*o*h-n*y*h-c*o*x+n*d*x)*U,e[3]=(g*d*a-c*v*a-g*o*h+n*v*h+c*o*S-n*d*S)*U,e[4]=b*U,e[5]=(p*y*a-E*v*a+E*o*S-t*y*S-p*o*x+t*v*x)*U,e[6]=(E*d*a-u*y*a-E*o*h+t*y*h+u*o*x-t*d*x)*U,e[7]=(u*v*a-p*d*a+p*o*h-t*v*h-u*o*S+t*d*S)*U,e[8]=P*U,e[9]=(E*g*a-p*M*a-E*n*S+t*M*S+p*n*x-t*g*x)*U,e[10]=(u*M*a-E*c*a+E*n*h-t*M*h-u*n*x+t*c*x)*U,e[11]=(p*c*a-u*g*a-p*n*h+t*g*h+u*n*S-t*c*S)*U,e[12]=B*U,e[13]=(p*M*o-E*g*o+E*n*v-t*M*v-p*n*y+t*g*y)*U,e[14]=(E*c*o-u*M*o-E*n*d+t*M*d+u*n*y-t*c*y)*U,e[15]=(u*g*o-p*c*o+p*n*d-t*g*d-u*n*v+t*c*v)*U,this}scale(e){const t=this.elements,n=e.x,o=e.y,a=e.z;return t[0]*=n,t[4]*=o,t[8]*=a,t[1]*=n,t[5]*=o,t[9]*=a,t[2]*=n,t[6]*=o,t[10]*=a,t[3]*=n,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),a=1-n,u=e.x,c=e.y,d=e.z,h=a*u,p=a*c;return this.set(h*u+n,h*c-o*d,h*d+o*c,0,h*c+o*d,p*c+n,p*d-o*u,0,h*d-o*c,p*d+o*u,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,a,u){return this.set(1,n,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,p=u+u,g=c+c,v=a*h,S=a*p,E=a*g,M=u*p,y=u*g,x=c*g,C=d*h,b=d*p,P=d*g,B=n.x,O=n.y,U=n.z;return o[0]=(1-(M+x))*B,o[1]=(S+P)*B,o[2]=(E-b)*B,o[3]=0,o[4]=(S-P)*O,o[5]=(1-(v+x))*O,o[6]=(y+C)*O,o[7]=0,o[8]=(E+b)*U,o[9]=(y-C)*U,o[10]=(1-(v+M))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let a=Hs.set(o[0],o[1],o[2]).length();const u=Hs.set(o[4],o[5],o[6]).length(),c=Hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],di.copy(this);const h=1/a,p=1/u,g=1/c;return di.elements[0]*=h,di.elements[1]*=h,di.elements[2]*=h,di.elements[4]*=p,di.elements[5]*=p,di.elements[6]*=p,di.elements[8]*=g,di.elements[9]*=g,di.elements[10]*=g,t.setFromRotationMatrix(di),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,o,a,u,c=$i){const d=this.elements,h=2*a/(t-e),p=2*a/(n-o),g=(t+e)/(t-e),v=(n+o)/(n-o);let S,E;if(c===$i)S=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===su)S=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=p,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,o,a,u,c=$i){const d=this.elements,h=1/(t-e),p=1/(n-o),g=1/(u-a),v=(t+e)*h,S=(n+o)*p;let E,M;if(c===$i)E=(u+a)*g,M=-2*g;else if(c===su)E=a*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hs=new ee,di=new Zt,$E=new ee(0,0,0),qE=new ee(1,1,1),vr=new ee,Ll=new ee,Wn=new ee,rg=new Zt,sg=new as;class qi{constructor(e=0,t=0,n=0,o=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],d=o[1],h=o[5],p=o[9],g=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(En(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-En(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(En(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-En(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-En(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sg.setFromEuler(this),this.setFromQuaternion(sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Gv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YE=0;const og=new ee,Vs=new as,Bi=new Zt,Nl=new ee,Jo=new ee,KE=new ee,ZE=new as,ag=new ee(1,0,0),lg=new ee(0,1,0),ug=new ee(0,0,1),cg={type:"added"},QE={type:"removed"},Gs={type:"childadded",child:null},Cf={type:"childremoved",child:null};class Fn extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new ee,t=new qi,n=new as,o=new ee(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ht}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(ag,e)}rotateY(e){return this.rotateOnAxis(lg,e)}rotateZ(e){return this.rotateOnAxis(ug,e)}translateOnAxis(e,t){return og.copy(e).applyQuaternion(this.quaternion),this.position.add(og.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ag,e)}translateY(e){return this.translateOnAxis(lg,e)}translateZ(e){return this.translateOnAxis(ug,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nl.copy(e):Nl.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Jo,Nl,this.up):Bi.lookAt(Nl,Jo,this.up),this.quaternion.setFromRotationMatrix(Bi),o&&(Bi.extractRotation(o.matrixWorld),Vs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QE),Cf.child=e,this.dispatchEvent(Cf),Cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,KE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,ZE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++){const c=o[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),g=u(e.shapes),v=u(e.skeletons),S=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),S.length>0&&(n.animations=S),E.length>0&&(n.nodes=E)}return n.object=o,n;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new ee(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new ee,Hi=new ee,Rf=new ee,Vi=new ee,Ws=new ee,js=new ee,fg=new ee,Pf=new ee,Lf=new ee,Nf=new ee;class Ei{constructor(e=new ee,t=new ee,n=new ee){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),hi.subVectors(e,t),o.cross(hi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,n,o,a){hi.subVectors(o,t),Hi.subVectors(n,t),Rf.subVectors(e,t);const u=hi.dot(hi),c=hi.dot(Hi),d=hi.dot(Rf),h=Hi.dot(Hi),p=Hi.dot(Rf),g=u*h-c*c;if(g===0)return a.set(0,0,0),null;const v=1/g,S=(h*d-c*p)*v,E=(u*p-c*d)*v;return a.set(1-S-E,E,S)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,o,a,u,c,d){return this.getBarycoord(e,t,n,o,Vi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Vi.x),d.addScaledVector(u,Vi.y),d.addScaledVector(c,Vi.z),d)}static isFrontFacing(e,t,n,o){return hi.subVectors(n,t),Hi.subVectors(e,t),hi.cross(Hi).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),hi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,a){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,a=this.c;let u,c;Ws.subVectors(o,n),js.subVectors(a,n),Pf.subVectors(e,n);const d=Ws.dot(Pf),h=js.dot(Pf);if(d<=0&&h<=0)return t.copy(n);Lf.subVectors(e,o);const p=Ws.dot(Lf),g=js.dot(Lf);if(p>=0&&g<=p)return t.copy(o);const v=d*g-p*h;if(v<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(n).addScaledVector(Ws,u);Nf.subVectors(e,a);const S=Ws.dot(Nf),E=js.dot(Nf);if(E>=0&&S<=E)return t.copy(a);const M=S*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(n).addScaledVector(js,c);const y=p*E-S*g;if(y<=0&&g-p>=0&&S-E>=0)return fg.subVectors(a,o),c=(g-p)/(g-p+(S-E)),t.copy(o).addScaledVector(fg,c);const x=1/(y+M+v);return u=M*x,c=v*x,t.copy(n).addScaledVector(Ws,u).addScaledVector(js,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Df(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.toWorkingColorSpace(this,o),this}setHSL(e,t,n,o=Tt.workingColorSpace){if(e=vd(e,1),t=En(t,0,1),n=En(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Df(u,a,e+1/3),this.g=Df(u,a,e),this.b=Df(u,a,e-1/3)}return Tt.toWorkingColorSpace(this,o),this}setStyle(e,t=xi){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const n=Wv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}copyLinearToSRGB(e){return this.r=xf(e.r),this.g=xf(e.g),this.b=xf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Tt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(En(Sn.r*255,0,255))*65536+Math.round(En(Sn.g*255,0,255))*256+Math.round(En(Sn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(Sn.copy(this),t);const n=Sn.r,o=Sn.g,a=Sn.b,u=Math.max(n,o,a),c=Math.min(n,o,a);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=p<=.5?g/(u+c):g/(2-u-c),u){case n:d=(o-a)/g+(o<a?6:0);break;case o:d=(a-n)/g+2;break;case a:d=(n-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=xi){Tt.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,n=Sn.g,o=Sn.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(Dl);const n=ra(_r.h,Dl.h,t),o=ra(_r.s,Dl.s,t),a=ra(_r.l,Dl.l,t);return this.setHSL(n,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*o,this.g=a[1]*t+a[4]*n+a[7]*o,this.b=a[2]*t+a[5]*n+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Mt;Mt.NAMES=Wv;let JE=0;class yu extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=po(),this.name="",this.type="Material",this.blending=io,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=tu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(n.blending=this.blending),this.side!==Ar&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rd&&(n.blendSrc=this.blendSrc),this.blendDst!==sd&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tu&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Km&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let a=0;a!==o;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yd extends yu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new ee,Il=new at;class bi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Il.fromBufferAttribute(this,t),Il.applyMatrix3(e),this.setXY(t,Il.x,Il.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=to(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=to(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=to(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=to(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=to(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array),o=Tn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array),o=Tn(o,this.array),a=Tn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zm&&(e.usage=this.usage),e}}class jv extends bi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xv extends bi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ai extends bi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let eM=0;const Jn=new Zt,If=new Fn,Xs=new ee,jn=new va,ea=new va,sn=new ee;class Nr extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?Xv:jv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ht().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return If.lookAt(e),If.updateMatrix(),this.applyMatrix4(If.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=[];for(let n=0,o=e.length;n<o;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ai(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];jn.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _d);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];ea.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(jn.min,ea.min),jn.expandByPoint(sn),sn.addVectors(jn.max,ea.max),jn.expandByPoint(sn)):(jn.expandByPoint(ea.min),jn.expandByPoint(ea.max))}jn.getCenter(n);let o=0;for(let a=0,u=e.count;a<u;a++)sn.fromBufferAttribute(e,a),o=Math.max(o,n.distanceToSquared(sn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)sn.fromBufferAttribute(c,h),d&&(Xs.fromBufferAttribute(e,h),sn.add(Xs)),o=Math.max(o,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let K=0;K<n.count;K++)c[K]=new ee,d[K]=new ee;const h=new ee,p=new ee,g=new ee,v=new at,S=new at,E=new at,M=new ee,y=new ee;function x(K,I,A){h.fromBufferAttribute(n,K),p.fromBufferAttribute(n,I),g.fromBufferAttribute(n,A),v.fromBufferAttribute(a,K),S.fromBufferAttribute(a,I),E.fromBufferAttribute(a,A),p.sub(h),g.sub(h),S.sub(v),E.sub(v);const X=1/(S.x*E.y-E.x*S.y);isFinite(X)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(X),y.copy(g).multiplyScalar(S.x).addScaledVector(p,-E.x).multiplyScalar(X),c[K].add(M),c[I].add(M),c[A].add(M),d[K].add(y),d[I].add(y),d[A].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let K=0,I=C.length;K<I;++K){const A=C[K],X=A.start,le=A.count;for(let V=X,ue=X+le;V<ue;V+=3)x(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new ee,P=new ee,B=new ee,O=new ee;function U(K){B.fromBufferAttribute(o,K),O.copy(B);const I=c[K];b.copy(I),b.sub(B.multiplyScalar(B.dot(I))).normalize(),P.crossVectors(O,I);const X=P.dot(d[K])<0?-1:1;u.setXYZW(K,b.x,b.y,b.z,X)}for(let K=0,I=C.length;K<I;++K){const A=C[K],X=A.start,le=A.count;for(let V=X,ue=X+le;V<ue;V+=3)U(e.getX(V+0)),U(e.getX(V+1)),U(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,S=n.count;v<S;v++)n.setXYZ(v,0,0,0);const o=new ee,a=new ee,u=new ee,c=new ee,d=new ee,h=new ee,p=new ee,g=new ee;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),M=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,y),p.subVectors(u,a),g.subVectors(o,a),p.cross(g),c.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),c.add(p),d.add(p),h.add(p),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(M,d.x,d.y,d.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,a),g.subVectors(o,a),p.cross(g),n.setXYZ(v+0,p.x,p.y,p.z),n.setXYZ(v+1,p.x,p.y,p.z),n.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,g=c.normalized,v=new h.constructor(d.length*p);let S=0,E=0;for(let M=0,y=d.length;M<y;M++){c.isInterleavedBufferAttribute?S=d[M]*c.data.stride+c.offset:S=d[M]*p;for(let x=0;x<p;x++)v[E++]=h[S++]}return new bi(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nr,n=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,g=h.length;p<g;p++){const v=h[p],S=e(v,n);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,v=h.length;g<v;g++){const S=h[g];p.push(S.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],g=a[h];for(let v=0,S=g.length;v<S;v++)p.push(g[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dg=new Zt,Yr=new Vv,Ul=new _d,hg=new ee,$s=new ee,qs=new ee,Ys=new ee,Uf=new ee,Ol=new ee,Fl=new at,kl=new at,zl=new at,pg=new ee,mg=new ee,gg=new ee,Bl=new ee,Hl=new ee;class wi extends Fn{constructor(e=new Nr,t=new yd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){Ol.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],g=a[d];p!==0&&(Uf.fromBufferAttribute(g,e),u?Ol.addScaledVector(Uf,p):Ol.addScaledVector(Uf.sub(t),p))}t.add(Ol)}return t}raycast(e,t){const n=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ul.copy(n.boundingSphere),Ul.applyMatrix4(a),Yr.copy(e.ray).recast(e.near),!(Ul.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Ul,hg)===null||Yr.origin.distanceToSquared(hg)>(e.far-e.near)**2))&&(dg.copy(a).invert(),Yr.copy(e.ray).applyMatrix4(dg),!(n.boundingBox!==null&&Yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,n){let o;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,v=a.groups,S=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const y=v[E],x=u[y.materialIndex],C=Math.max(y.start,S.start),b=Math.min(c.count,Math.min(y.start+y.count,S.start+S.count));for(let P=C,B=b;P<B;P+=3){const O=c.getX(P),U=c.getX(P+1),K=c.getX(P+2);o=Vl(this,x,e,n,h,p,g,O,U,K),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(c.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const C=c.getX(y),b=c.getX(y+1),P=c.getX(y+2);o=Vl(this,u,e,n,h,p,g,C,b,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const y=v[E],x=u[y.materialIndex],C=Math.max(y.start,S.start),b=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let P=C,B=b;P<B;P+=3){const O=P,U=P+1,K=P+2;o=Vl(this,x,e,n,h,p,g,O,U,K),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const C=y,b=y+1,P=y+2;o=Vl(this,u,e,n,h,p,g,C,b,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function tM(r,e,t,n,o,a,u,c){let d;if(e.side===On?d=n.intersectTriangle(u,a,o,!0,c):d=n.intersectTriangle(o,a,u,e.side===Ar,c),d===null)return null;Hl.copy(c),Hl.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Hl);return h<t.near||h>t.far?null:{distance:h,point:Hl.clone(),object:r}}function Vl(r,e,t,n,o,a,u,c,d,h){r.getVertexPosition(c,$s),r.getVertexPosition(d,qs),r.getVertexPosition(h,Ys);const p=tM(r,e,t,n,$s,qs,Ys,Bl);if(p){o&&(Fl.fromBufferAttribute(o,c),kl.fromBufferAttribute(o,d),zl.fromBufferAttribute(o,h),p.uv=Ei.getInterpolation(Bl,$s,qs,Ys,Fl,kl,zl,new at)),a&&(Fl.fromBufferAttribute(a,c),kl.fromBufferAttribute(a,d),zl.fromBufferAttribute(a,h),p.uv1=Ei.getInterpolation(Bl,$s,qs,Ys,Fl,kl,zl,new at)),u&&(pg.fromBufferAttribute(u,c),mg.fromBufferAttribute(u,d),gg.fromBufferAttribute(u,h),p.normal=Ei.getInterpolation(Bl,$s,qs,Ys,pg,mg,gg,new ee),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new ee,materialIndex:0};Ei.getNormal($s,qs,Ys,g.normal),p.face=g}return p}class _a extends Nr{constructor(e=1,t=1,n=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],p=[],g=[];let v=0,S=0;E("z","y","x",-1,-1,n,t,e,u,a,0),E("z","y","x",1,-1,n,t,-e,u,a,1),E("x","z","y",1,1,e,n,t,o,u,2),E("x","z","y",1,-1,e,n,-t,o,u,3),E("x","y","z",1,-1,e,t,n,o,a,4),E("x","y","z",-1,-1,e,t,-n,o,a,5),this.setIndex(d),this.setAttribute("position",new Ai(h,3)),this.setAttribute("normal",new Ai(p,3)),this.setAttribute("uv",new Ai(g,2));function E(M,y,x,C,b,P,B,O,U,K,I){const A=P/U,X=B/K,le=P/2,V=B/2,ue=O/2,ae=U+1,de=K+1;let fe=0,k=0;const te=new ee;for(let L=0;L<de;L++){const q=L*X-V;for(let Me=0;Me<ae;Me++){const Ie=Me*A-le;te[M]=Ie*C,te[y]=q*b,te[x]=ue,h.push(te.x,te.y,te.z),te[M]=0,te[y]=0,te[x]=O>0?1:-1,p.push(te.x,te.y,te.z),g.push(Me/U),g.push(1-L/K),fe+=1}}for(let L=0;L<K;L++)for(let q=0;q<U;q++){const Me=v+q+ae*L,Ie=v+q+ae*(L+1),W=v+(q+1)+ae*(L+1),ce=v+(q+1)+ae*L;d.push(Me,Ie,ce),d.push(Ie,W,ce),k+=6}c.addGroup(S,k,I),S+=k,v+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const o=r[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const n=co(r[t]);for(const o in n)e[o]=n[o]}return e}function nM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $v(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const iM={clone:co,merge:bn};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends yu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=sM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=nM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qv extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new ee,vg=new at,_g=new at;class ei extends qv{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,vg,_g),t.subVectors(_g,vg)}setViewOffset(e,t,n,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*o/d,t-=u.offsetY*n/h,o*=u.width/d,n*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Zs=1;class oM extends Fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ei(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const a=new ei(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const u=new ei(Ks,Zs,e,t);u.layers=this.layers,this.add(u);const c=new ei(Ks,Zs,e,t);c.layers=this.layers,this.add(c);const d=new ei(Ks,Zs,e,t);d.layers=this.layers,this.add(d);const h=new ei(Ks,Zs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===su)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,o),e.render(t,a),e.setRenderTarget(n,1,o),e.render(t,u),e.setRenderTarget(n,2,o),e.render(t,c),e.setRenderTarget(n,3,o),e.render(t,d),e.setRenderTarget(n,4,o),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,o),e.render(t,p),e.setRenderTarget(g,v,S),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Yv extends An{constructor(e,t,n,o,a,u,c,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:ao,super(e,t,n,o,a,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aM extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new Yv(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new _a(5,5,5),a=new Rr({name:"CubemapFromEquirect",uniforms:co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Tr});a.uniforms.tEquirect.value=t;const u=new wi(o,a),c=t.minFilter;return t.minFilter===rs&&(t.minFilter=pi),new oM(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,n,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,o);e.setRenderTarget(a)}}const Of=new ee,lM=new ee,uM=new ht;class xr{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=Of.subVectors(n,t).cross(lM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Of),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||uM.getNormalMatrix(e),o=this.coplanarPoint(Of).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new _d,Gl=new ee;class Kv{constructor(e=new xr,t=new xr,n=new xr,o=new xr,a=new xr,u=new xr){this.planes=[e,t,n,o,a,u]}set(e,t,n,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){const n=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],d=o[3],h=o[4],p=o[5],g=o[6],v=o[7],S=o[8],E=o[9],M=o[10],y=o[11],x=o[12],C=o[13],b=o[14],P=o[15];if(n[0].setComponents(d-a,v-h,y-S,P-x).normalize(),n[1].setComponents(d+a,v+h,y+S,P+x).normalize(),n[2].setComponents(d+u,v+p,y+E,P+C).normalize(),n[3].setComponents(d-u,v-p,y-E,P-C).normalize(),n[4].setComponents(d-c,v-g,y-M,P-b).normalize(),t===$i)n[5].setComponents(d+c,v+g,y+M,P+b).normalize();else if(t===su)n[5].setComponents(c,g,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(Gl.x=o.normal.x>0?e.max.x:e.min.x,Gl.y=o.normal.y>0?e.max.y:e.min.y,Gl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zv(){let r=null,e=!1,t=null,n=null;function o(a,u){t(a,u),n=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function cM(r){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,g=h.byteLength,v=r.createBuffer();r.bindBuffer(d,v),r.bufferData(d,h,p),c.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,d,h){const p=d.array,g=d._updateRange,v=d.updateRanges;if(r.bindBuffer(h,c),g.count===-1&&v.length===0&&r.bufferSubData(h,0,p),v.length!==0){for(let S=0,E=v.length;S<E;S++){const M=v[S];r.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}g.count!==-1&&(r.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(r.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:u}}class xu extends Nr{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(n),d=Math.floor(o),h=c+1,p=d+1,g=e/c,v=t/d,S=[],E=[],M=[],y=[];for(let x=0;x<p;x++){const C=x*v-u;for(let b=0;b<h;b++){const P=b*g-a;E.push(P,-C,0),M.push(0,0,1),y.push(b/c),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let C=0;C<c;C++){const b=C+h*x,P=C+h*(x+1),B=C+1+h*(x+1),O=C+1+h*x;S.push(b,P,O),S.push(P,B,O)}this.setIndex(S),this.setAttribute("position",new Ai(E,3)),this.setAttribute("normal",new Ai(M,3)),this.setAttribute("uv",new Ai(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.width,e.height,e.widthSegments,e.heightSegments)}}var fM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,IM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,GM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,i1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,r1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,u1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,c1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,x1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,b1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,A1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,C1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,I1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,B1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,K1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ew=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_w=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ww=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Aw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:fM,alphahash_pars_fragment:dM,alphamap_fragment:hM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:gM,aomap_fragment:vM,aomap_pars_fragment:_M,batching_pars_vertex:yM,batching_vertex:xM,begin_vertex:SM,beginnormal_vertex:EM,bsdfs:MM,iridescence_fragment:wM,bumpmap_pars_fragment:TM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:RM,color_fragment:PM,color_pars_fragment:LM,color_pars_vertex:NM,color_vertex:DM,common:IM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:OM,displacementmap_pars_vertex:FM,displacementmap_vertex:kM,emissivemap_fragment:zM,emissivemap_pars_fragment:BM,colorspace_fragment:HM,colorspace_pars_fragment:VM,envmap_fragment:GM,envmap_common_pars_fragment:WM,envmap_pars_fragment:jM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:i1,envmap_vertex:$M,fog_vertex:qM,fog_pars_vertex:YM,fog_fragment:KM,fog_pars_fragment:ZM,gradientmap_pars_fragment:QM,lightmap_pars_fragment:JM,lights_lambert_fragment:e1,lights_lambert_pars_fragment:t1,lights_pars_begin:n1,lights_toon_fragment:r1,lights_toon_pars_fragment:s1,lights_phong_fragment:o1,lights_phong_pars_fragment:a1,lights_physical_fragment:l1,lights_physical_pars_fragment:u1,lights_fragment_begin:c1,lights_fragment_maps:f1,lights_fragment_end:d1,logdepthbuf_fragment:h1,logdepthbuf_pars_fragment:p1,logdepthbuf_pars_vertex:m1,logdepthbuf_vertex:g1,map_fragment:v1,map_pars_fragment:_1,map_particle_fragment:y1,map_particle_pars_fragment:x1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:E1,morphinstance_vertex:M1,morphcolor_vertex:w1,morphnormal_vertex:T1,morphtarget_pars_vertex:b1,morphtarget_vertex:A1,normal_fragment_begin:C1,normal_fragment_maps:R1,normal_pars_fragment:P1,normal_pars_vertex:L1,normal_vertex:N1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:I1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:F1,opaque_fragment:k1,packing:z1,premultiplied_alpha_fragment:B1,project_vertex:H1,dithering_fragment:V1,dithering_pars_fragment:G1,roughnessmap_fragment:W1,roughnessmap_pars_fragment:j1,shadowmap_pars_fragment:X1,shadowmap_pars_vertex:$1,shadowmap_vertex:q1,shadowmask_pars_fragment:Y1,skinbase_vertex:K1,skinning_pars_vertex:Z1,skinning_vertex:Q1,skinnormal_vertex:J1,specularmap_fragment:ew,specularmap_pars_fragment:tw,tonemapping_fragment:nw,tonemapping_pars_fragment:iw,transmission_fragment:rw,transmission_pars_fragment:sw,uv_pars_fragment:ow,uv_pars_vertex:aw,uv_vertex:lw,worldpos_vertex:uw,background_vert:cw,background_frag:fw,backgroundCube_vert:dw,backgroundCube_frag:hw,cube_vert:pw,cube_frag:mw,depth_vert:gw,depth_frag:vw,distanceRGBA_vert:_w,distanceRGBA_frag:yw,equirect_vert:xw,equirect_frag:Sw,linedashed_vert:Ew,linedashed_frag:Mw,meshbasic_vert:ww,meshbasic_frag:Tw,meshlambert_vert:bw,meshlambert_frag:Aw,meshmatcap_vert:Cw,meshmatcap_frag:Rw,meshnormal_vert:Pw,meshnormal_frag:Lw,meshphong_vert:Nw,meshphong_frag:Dw,meshphysical_vert:Iw,meshphysical_frag:Uw,meshtoon_vert:Ow,meshtoon_frag:Fw,points_vert:kw,points_frag:zw,shadow_vert:Bw,shadow_frag:Hw,sprite_vert:Vw,sprite_frag:Gw},Le={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Si={basic:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Mt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:bn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:bn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Mt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:bn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:bn([Le.points,Le.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:bn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:bn([Le.common,Le.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:bn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:bn([Le.sprite,Le.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:bn([Le.common,Le.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:bn([Le.lights,Le.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Si.physical={uniforms:bn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Wl={r:0,b:0,g:0},Zr=new qi,Ww=new Zt;function jw(r,e,t,n,o,a,u){const c=new Mt(0);let d=a===!0?0:1,h,p,g=null,v=0,S=null;function E(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function M(C){let b=!1;const P=E(C);P===null?x(c,d):P&&P.isColor&&(x(P,1),b=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)}function y(C,b){const P=E(b);P&&(P.isCubeTexture||P.mapping===gu)?(p===void 0&&(p=new wi(new _a(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:co(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,O,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),Zr.copy(b.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),p.material.uniforms.envMap.value=P,p.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(Zr)),p.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Nt,(g!==P||v!==P.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=P,v=P.version,S=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new wi(new xu(2,2),new Rr({name:"BackgroundMaterial",uniforms:co(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Nt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||S!==r.toneMapping)&&(h.material.needsUpdate=!0,g=P,v=P.version,S=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,b){C.getRGB(Wl,$v(r)),n.buffers.color.setClear(Wl.r,Wl.g,Wl.b,b,u)}return{getClearColor:function(){return c},setClearColor:function(C,b=1){c.set(C),d=b,x(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,x(c,d)},render:M,addToRenderList:y}}function Xw(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},o=v(null);let a=o,u=!1;function c(A,X,le,V,ue){let ae=!1;const de=g(V,le,X);a!==de&&(a=de,h(a.object)),ae=S(A,V,le,ue),ae&&E(A,V,le,ue),ue!==null&&e.update(ue,r.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,P(A,X,le,V),ue!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return r.createVertexArray()}function h(A){return r.bindVertexArray(A)}function p(A){return r.deleteVertexArray(A)}function g(A,X,le){const V=le.wireframe===!0;let ue=n[A.id];ue===void 0&&(ue={},n[A.id]=ue);let ae=ue[X.id];ae===void 0&&(ae={},ue[X.id]=ae);let de=ae[V];return de===void 0&&(de=v(d()),ae[V]=de),de}function v(A){const X=[],le=[],V=[];for(let ue=0;ue<t;ue++)X[ue]=0,le[ue]=0,V[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:le,attributeDivisors:V,object:A,attributes:{},index:null}}function S(A,X,le,V){const ue=a.attributes,ae=X.attributes;let de=0;const fe=le.getAttributes();for(const k in fe)if(fe[k].location>=0){const L=ue[k];let q=ae[k];if(q===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(q=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(q=A.instanceColor)),L===void 0||L.attribute!==q||q&&L.data!==q.data)return!0;de++}return a.attributesNum!==de||a.index!==V}function E(A,X,le,V){const ue={},ae=X.attributes;let de=0;const fe=le.getAttributes();for(const k in fe)if(fe[k].location>=0){let L=ae[k];L===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(L=A.instanceColor));const q={};q.attribute=L,L&&L.data&&(q.data=L.data),ue[k]=q,de++}a.attributes=ue,a.attributesNum=de,a.index=V}function M(){const A=a.newAttributes;for(let X=0,le=A.length;X<le;X++)A[X]=0}function y(A){x(A,0)}function x(A,X){const le=a.newAttributes,V=a.enabledAttributes,ue=a.attributeDivisors;le[A]=1,V[A]===0&&(r.enableVertexAttribArray(A),V[A]=1),ue[A]!==X&&(r.vertexAttribDivisor(A,X),ue[A]=X)}function C(){const A=a.newAttributes,X=a.enabledAttributes;for(let le=0,V=X.length;le<V;le++)X[le]!==A[le]&&(r.disableVertexAttribArray(le),X[le]=0)}function b(A,X,le,V,ue,ae,de){de===!0?r.vertexAttribIPointer(A,X,le,ue,ae):r.vertexAttribPointer(A,X,le,V,ue,ae)}function P(A,X,le,V){M();const ue=V.attributes,ae=le.getAttributes(),de=X.defaultAttributeValues;for(const fe in ae){const k=ae[fe];if(k.location>=0){let te=ue[fe];if(te===void 0&&(fe==="instanceMatrix"&&A.instanceMatrix&&(te=A.instanceMatrix),fe==="instanceColor"&&A.instanceColor&&(te=A.instanceColor)),te!==void 0){const L=te.normalized,q=te.itemSize,Me=e.get(te);if(Me===void 0)continue;const Ie=Me.buffer,W=Me.type,ce=Me.bytesPerElement,ve=W===r.INT||W===r.UNSIGNED_INT||te.gpuType===Nv;if(te.isInterleavedBufferAttribute){const me=te.data,Ae=me.stride,Ge=te.offset;if(me.isInstancedInterleavedBuffer){for(let Z=0;Z<k.locationSize;Z++)x(k.location+Z,me.meshPerAttribute);A.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Z=0;Z<k.locationSize;Z++)y(k.location+Z);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let Z=0;Z<k.locationSize;Z++)b(k.location+Z,q/k.locationSize,W,L,Ae*ce,(Ge+q/k.locationSize*Z)*ce,ve)}else{if(te.isInstancedBufferAttribute){for(let me=0;me<k.locationSize;me++)x(k.location+me,te.meshPerAttribute);A.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let me=0;me<k.locationSize;me++)y(k.location+me);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let me=0;me<k.locationSize;me++)b(k.location+me,q/k.locationSize,W,L,q*ce,q/k.locationSize*me*ce,ve)}}else if(de!==void 0){const L=de[fe];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(k.location,L);break;case 3:r.vertexAttrib3fv(k.location,L);break;case 4:r.vertexAttrib4fv(k.location,L);break;default:r.vertexAttrib1fv(k.location,L)}}}}C()}function B(){K();for(const A in n){const X=n[A];for(const le in X){const V=X[le];for(const ue in V)p(V[ue].object),delete V[ue];delete X[le]}delete n[A]}}function O(A){if(n[A.id]===void 0)return;const X=n[A.id];for(const le in X){const V=X[le];for(const ue in V)p(V[ue].object),delete V[ue];delete X[le]}delete n[A.id]}function U(A){for(const X in n){const le=n[X];if(le[A.id]===void 0)continue;const V=le[A.id];for(const ue in V)p(V[ue].object),delete V[ue];delete le[A.id]}}function K(){I(),u=!0,a!==o&&(a=o,h(a.object))}function I(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:K,resetDefaultState:I,dispose:B,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:y,disableUnusedAttributes:C}}function $w(r,e,t){let n;function o(h){n=h}function a(h,p){r.drawArrays(n,h,p),t.update(p,n,1)}function u(h,p,g){g!==0&&(r.drawArraysInstanced(n,h,p,g),t.update(p,n,g))}function c(h,p,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<g;S++)this.render(h[S],p[S]);else{v.multiDrawArraysWEBGL(n,h,0,p,0,g);let S=0;for(let E=0;E<g;E++)S+=p[E];t.update(S,n,1)}}function d(h,p,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)u(h[E],p[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(n,h,0,p,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=p[M];for(let M=0;M<v.length;M++)t.update(E,n,v[M])}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function qw(r,e,t,n){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Mi&&n.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(O){const U=O===vu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Cr&&n.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Mr&&!U)}function d(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=S>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:x,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:P,maxSamples:B}}function Yw(r){const e=this;let t=null,n=0,o=!1,a=!1;const u=new xr,c=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||n!==0||o;return o=v,n=g.length,S},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,S){const E=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,x=r.get(g);if(!o||E===null||E.length===0||a&&!y)a?p(null):h();else{const C=a?0:n,b=C*4;let P=x.clippingState||null;d.value=P,P=p(E,v,b,S);for(let B=0;B!==b;++B)P[B]=t[B];x.clippingState=P,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,v,S,E){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=d.value,E!==!0||y===null){const x=S+M*4,C=v.matrixWorldInverse;c.getNormalMatrix(C),(y===null||y.length<x)&&(y=new Float32Array(x));for(let b=0,P=S;b!==M;++b,P+=4)u.copy(g[b]).applyMatrix4(C,c),u.normal.toArray(y,P),y[P+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function Kw(r){let e=new WeakMap;function t(u,c){return c===od?u.mapping=ao:c===ad&&(u.mapping=lo),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===od||c===ad)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new aM(d.height);return h.fromEquirectangularTexture(r,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Zw extends qv{constructor(e=-1,t=1,n=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const no=4,yg=[.125,.215,.35,.446,.526,.582],ns=20,Ff=new Zw,xg=new Mt;let kf=null,zf=0,Bf=0,Hf=!1;const es=(1+Math.sqrt(5))/2,Qs=1/es,Sg=[new ee(-es,Qs,0),new ee(es,Qs,0),new ee(-Qs,0,es),new ee(Qs,0,es),new ee(0,es,-Qs),new ee(0,es,Qs),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class Eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100){kf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kf,zf,Bf),this._renderer.xr.enabled=Hf,e.scissorTest=!1,jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ao||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:vu,format:Mi,colorSpace:Lr,depthBuffer:!1},o=Mg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mg(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qw(a)),this._blurMaterial=Jw(a,e,t)}return o}_compileMaterial(e){const t=new wi(this._lodPlanes[0],e);this._renderer.compile(t,Ff)}_sceneToCubeUV(e,t,n,o){const c=new ei(90,1,t,n),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(xg),p.toneMapping=br,p.autoClear=!1;const S=new yd({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),E=new wi(new _a,S);let M=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,M=!0):(S.color.copy(xg),M=!0);for(let x=0;x<6;x++){const C=x%3;C===0?(c.up.set(0,d[x],0),c.lookAt(h[x],0,0)):C===1?(c.up.set(0,0,d[x]),c.lookAt(0,h[x],0)):(c.up.set(0,d[x],0),c.lookAt(0,0,h[x]));const b=this._cubeSize;jl(o,C*b,x>2?b:0,b,b),p.setRenderTarget(o),M&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===ao||e.mapping===lo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wg());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new wi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;jl(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(u,Ff)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Sg[(o-a-1)%Sg.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,o,"latitudinal",a),this._halfBlur(u,e,n,n,o,"longitudinal",a)}_halfBlur(e,t,n,o,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new wi(this._lodPlanes[o],h),v=h.uniforms,S=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*ns-1),M=a/E,y=isFinite(a)?1+Math.floor(p*M):ns;y>ns&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ns}`);const x=[];let C=0;for(let U=0;U<ns;++U){const K=U/M,I=Math.exp(-K*K/2);x.push(I),U===0?C+=I:U<y&&(C+=2*I)}for(let U=0;U<x.length;U++)x[U]=x[U]/C;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:b}=this;v.dTheta.value=E,v.mipInt.value=b-n;const P=this._sizeLods[o],B=3*P*(o>b-no?o-b+no:0),O=4*(this._cubeSize-P);jl(t,B,O,3*P,2*P),d.setRenderTarget(t),d.render(g,Ff)}}function Qw(r){const e=[],t=[],n=[];let o=r;const a=r-no+1+yg.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>r-no?d=yg[u-r+no-1]:u===0&&(d=0),n.push(d);const h=1/(c-2),p=-h,g=1+h,v=[p,p,g,p,g,g,p,p,g,g,p,g],S=6,E=6,M=3,y=2,x=1,C=new Float32Array(M*E*S),b=new Float32Array(y*E*S),P=new Float32Array(x*E*S);for(let O=0;O<S;O++){const U=O%3*2/3-1,K=O>2?0:-1,I=[U,K,0,U+2/3,K,0,U+2/3,K+1,0,U,K,0,U+2/3,K+1,0,U,K+1,0];C.set(I,M*E*O),b.set(v,y*E*O);const A=[O,O,O,O,O,O];P.set(A,x*E*O)}const B=new Nr;B.setAttribute("position",new bi(C,M)),B.setAttribute("uv",new bi(b,y)),B.setAttribute("faceIndex",new bi(P,x)),e.push(B),o>no&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mg(r,e,t){const n=new os(r,e,t);return n.texture.mapping=gu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jl(r,e,t,n,o){r.viewport.set(e,t,n,o),r.scissor.set(e,t,n,o)}function Jw(r,e,t){const n=new Float32Array(ns),o=new ee(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function wg(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Tg(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eT(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,h=d===od||d===ad,p=d===ao||d===lo;if(h||p){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new Eg(r)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const S=c.image;return h&&S&&S.height>0||p&&S&&o(S)?(t===null&&(t=new Eg(r)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function o(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function tT(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function nT(r,e,t,n){const o={},a=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const M=v.morphAttributes[E];for(let y=0,x=M.length;y<x;y++)e.remove(M[y])}v.removeEventListener("dispose",u),delete o[v.id];const S=a.get(v);S&&(e.remove(S),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const E in v)e.update(v[E],r.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const M=S[E];for(let y=0,x=M.length;y<x;y++)e.update(M[y],r.ARRAY_BUFFER)}}function h(g){const v=[],S=g.index,E=g.attributes.position;let M=0;if(S!==null){const C=S.array;M=S.version;for(let b=0,P=C.length;b<P;b+=3){const B=C[b+0],O=C[b+1],U=C[b+2];v.push(B,O,O,U,U,B)}}else if(E!==void 0){const C=E.array;M=E.version;for(let b=0,P=C.length/3-1;b<P;b+=3){const B=b+0,O=b+1,U=b+2;v.push(B,O,O,U,U,B)}}else return;const y=new(zv(v)?Xv:jv)(v,1);y.version=M;const x=a.get(g);x&&e.remove(x),a.set(g,y)}function p(g){const v=a.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&h(g)}else h(g);return a.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function iT(r,e,t){let n;function o(v){n=v}let a,u;function c(v){a=v.type,u=v.bytesPerElement}function d(v,S){r.drawElements(n,S,a,v*u),t.update(S,n,1)}function h(v,S,E){E!==0&&(r.drawElementsInstanced(n,S,a,v*u,E),t.update(S,n,E))}function p(v,S,E){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<E;y++)this.render(v[y]/u,S[y]);else{M.multiDrawElementsWEBGL(n,S,0,a,v,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];t.update(y,n,1)}}function g(v,S,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)h(v[x]/u,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(n,S,0,a,v,0,M,0,E);let x=0;for(let C=0;C<E;C++)x+=S[C];for(let C=0;C<M.length;C++)t.update(x,n,M[C])}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function rT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function sT(r,e,t){const n=new WeakMap,o=new fn;function a(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let v=n.get(c);if(v===void 0||v.count!==g){let A=function(){K.dispose(),n.delete(c),c.removeEventListener("dispose",A)};var S=A;v!==void 0&&v.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let P=0;E===!0&&(P=1),M===!0&&(P=2),y===!0&&(P=3);let B=c.attributes.position.count*P,O=1;B>e.maxTextureSize&&(O=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const U=new Float32Array(B*O*4*g),K=new Hv(U,B,O,g);K.type=Mr,K.needsUpdate=!0;const I=P*4;for(let X=0;X<g;X++){const le=x[X],V=C[X],ue=b[X],ae=B*O*4*X;for(let de=0;de<le.count;de++){const fe=de*I;E===!0&&(o.fromBufferAttribute(le,de),U[ae+fe+0]=o.x,U[ae+fe+1]=o.y,U[ae+fe+2]=o.z,U[ae+fe+3]=0),M===!0&&(o.fromBufferAttribute(V,de),U[ae+fe+4]=o.x,U[ae+fe+5]=o.y,U[ae+fe+6]=o.z,U[ae+fe+7]=0),y===!0&&(o.fromBufferAttribute(ue,de),U[ae+fe+8]=o.x,U[ae+fe+9]=o.y,U[ae+fe+10]=o.z,U[ae+fe+11]=ue.itemSize===4?o.w:1)}}v={count:g,texture:K,size:new at(B,O)},n.set(c,v),c.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",h)}d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:a}}function oT(r,e,t,n){let o=new WeakMap;function a(d){const h=n.render.frame,p=d.geometry,g=e.get(d,p);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}class Qv extends An{constructor(e,t,n,o,a,u,c,d,h,p){if(p=p!==void 0?p:ro,p!==ro&&p!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===ro&&(n=uo),n===void 0&&p===ca&&(n=ga),super(null,o,a,u,c,d,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:ti,this.minFilter=d!==void 0?d:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jv=new An,e0=new Qv(1,1);e0.compareFunction=kv;const t0=new Hv,n0=new jE,i0=new Yv,bg=[],Ag=[],Cg=new Float32Array(16),Rg=new Float32Array(9),Pg=new Float32Array(4);function mo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const o=e*t;let a=bg[o];if(a===void 0&&(a=new Float32Array(o),bg[o]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Su(r,e){let t=Ag[e];t===void 0&&(t=new Int32Array(e),Ag[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function aT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function uT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function cT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function fT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,n))return;Pg.set(n),r.uniformMatrix2fv(this.addr,!1,Pg),Jt(t,n)}}function dT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,n))return;Rg.set(n),r.uniformMatrix3fv(this.addr,!1,Rg),Jt(t,n)}}function hT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,n))return;Cg.set(n),r.uniformMatrix4fv(this.addr,!1,Cg),Jt(t,n)}}function pT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function gT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function vT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function _T(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function xT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function ST(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function ET(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o);const a=this.type===r.SAMPLER_2D_SHADOW?e0:Jv;t.setTexture2D(e||a,o)}function MT(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||n0,o)}function wT(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||i0,o)}function TT(r,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(r.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||t0,o)}function bT(r){switch(r){case 5126:return aT;case 35664:return lT;case 35665:return uT;case 35666:return cT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return vT;case 5125:return _T;case 36294:return yT;case 36295:return xT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return TT}}function AT(r,e){r.uniform1fv(this.addr,e)}function CT(r,e){const t=mo(e,this.size,2);r.uniform2fv(this.addr,t)}function RT(r,e){const t=mo(e,this.size,3);r.uniform3fv(this.addr,t)}function PT(r,e){const t=mo(e,this.size,4);r.uniform4fv(this.addr,t)}function LT(r,e){const t=mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function NT(r,e){const t=mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function DT(r,e){const t=mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function IT(r,e){r.uniform1iv(this.addr,e)}function UT(r,e){r.uniform2iv(this.addr,e)}function OT(r,e){r.uniform3iv(this.addr,e)}function FT(r,e){r.uniform4iv(this.addr,e)}function kT(r,e){r.uniform1uiv(this.addr,e)}function zT(r,e){r.uniform2uiv(this.addr,e)}function BT(r,e){r.uniform3uiv(this.addr,e)}function HT(r,e){r.uniform4uiv(this.addr,e)}function VT(r,e,t){const n=this.cache,o=e.length,a=Su(t,o);Qt(n,a)||(r.uniform1iv(this.addr,a),Jt(n,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Jv,a[u])}function GT(r,e,t){const n=this.cache,o=e.length,a=Su(t,o);Qt(n,a)||(r.uniform1iv(this.addr,a),Jt(n,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||n0,a[u])}function WT(r,e,t){const n=this.cache,o=e.length,a=Su(t,o);Qt(n,a)||(r.uniform1iv(this.addr,a),Jt(n,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||i0,a[u])}function jT(r,e,t){const n=this.cache,o=e.length,a=Su(t,o);Qt(n,a)||(r.uniform1iv(this.addr,a),Jt(n,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||t0,a[u])}function XT(r){switch(r){case 5126:return AT;case 35664:return CT;case 35665:return RT;case 35666:return PT;case 35674:return LT;case 35675:return NT;case 35676:return DT;case 5124:case 35670:return IT;case 35667:case 35671:return UT;case 35668:case 35672:return OT;case 35669:case 35673:return FT;case 5125:return kT;case 36294:return zT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return jT}}class $T{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bT(t.type)}}class qT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XT(t.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],n)}}}const Vf=/(\w+)(\])?(\[|\.)?/g;function Lg(r,e){r.seq.push(e),r.map[e.id]=e}function KT(r,e,t){const n=r.name,o=n.length;for(Vf.lastIndex=0;;){const a=Vf.exec(n),u=Vf.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){Lg(t,h===void 0?new $T(c,r,e):new qT(c,r,e));break}else{let g=t.map[c];g===void 0&&(g=new YT(c),Lg(t,g)),t=g}}}class Kl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);KT(a,u,this)}}setValue(e,t,n,o){const a=this.map[t];a!==void 0&&a.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&n.push(u)}return n}}function Ng(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const ZT=37297;let QT=0;function JT(r,e){const t=r.split(`
`),n=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}function eb(r){const e=Tt.getPrimaries(Tt.workingColorSpace),t=Tt.getPrimaries(r);let n;switch(e===t?n="":e===ru&&t===iu?n="LinearDisplayP3ToLinearSRGB":e===iu&&t===ru&&(n="LinearSRGBToLinearDisplayP3"),r){case Lr:case _u:return[n,"LinearTransferOETF"];case xi:case gd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Dg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(n&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+JT(r.getShaderSource(e),u)}else return o}function tb(r,e){const t=eb(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nb(r,e){let t;switch(e){case XS:t="Linear";break;case $S:t="Reinhard";break;case qS:t="OptimizedCineon";break;case YS:t="ACESFilmic";break;case ZS:t="AgX";break;case QS:t="Neutral";break;case KS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ib(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function rb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const a=r.getActiveAttrib(e,o),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function na(r){return r!==""}function Ig(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ug(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(r){return r.replace(ob,lb)}const ab=new Map;function lb(r,e){let t=dt[e];if(t===void 0){const n=ab.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cd(t)}const ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(r){return r.replace(ub,cb)}function cb(r,e,t,n){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Fg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_S?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function db(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ao:case lo:e="ENVMAP_TYPE_CUBE";break;case gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function pb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Rv:e="ENVMAP_BLENDING_MULTIPLY";break;case WS:e="ENVMAP_BLENDING_MIX";break;case jS:e="ENVMAP_BLENDING_ADD";break}return e}function mb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gb(r,e,t,n){const o=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=fb(t),h=db(t),p=hb(t),g=pb(t),v=mb(t),S=ib(t),E=rb(a),M=o.createProgram();let y,x,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(na).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(na).join(`
`),x.length>0&&(x+=`
`)):(y=[Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),x=[Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==br?"#define TONE_MAPPING":"",t.toneMapping!==br?dt.tonemapping_pars_fragment:"",t.toneMapping!==br?nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,tb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),u=cd(u),u=Ig(u,t),u=Ug(u,t),c=cd(c),c=Ig(c,t),c=Ug(c,t),u=Og(u),c=Og(c),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=C+y+u,P=C+x+c,B=Ng(o,o.VERTEX_SHADER,b),O=Ng(o,o.FRAGMENT_SHADER,P);o.attachShader(M,B),o.attachShader(M,O),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function U(X){if(r.debug.checkShaderErrors){const le=o.getProgramInfoLog(M).trim(),V=o.getShaderInfoLog(B).trim(),ue=o.getShaderInfoLog(O).trim();let ae=!0,de=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,M,B,O);else{const fe=Dg(o,B,"vertex"),k=Dg(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+le+`
`+fe+`
`+k)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(V===""||ue==="")&&(de=!1);de&&(X.diagnostics={runnable:ae,programLog:le,vertexShader:{log:V,prefix:y},fragmentShader:{log:ue,prefix:x}})}o.deleteShader(B),o.deleteShader(O),K=new Kl(o,M),I=sb(o,M)}let K;this.getUniforms=function(){return K===void 0&&U(this),K};let I;this.getAttributes=function(){return I===void 0&&U(this),I};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(M,ZT)),A},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=B,this.fragmentShader=O,this}let vb=0;class _b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yb(e),t.set(e,n)),n}}class yb{constructor(e){this.id=vb++,this.code=e,this.usedTimes=0}}function xb(r,e,t,n,o,a,u){const c=new Gv,d=new _b,h=new Set,p=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(I){return h.add(I),I===0?"uv":`uv${I}`}function y(I,A,X,le,V){const ue=le.fog,ae=V.geometry,de=I.isMeshStandardMaterial?le.environment:null,fe=(I.isMeshStandardMaterial?t:e).get(I.envMap||de),k=fe&&fe.mapping===gu?fe.image.height:null,te=E[I.type];I.precision!==null&&(S=o.getMaxPrecision(I.precision),S!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",S,"instead."));const L=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,q=L!==void 0?L.length:0;let Me=0;ae.morphAttributes.position!==void 0&&(Me=1),ae.morphAttributes.normal!==void 0&&(Me=2),ae.morphAttributes.color!==void 0&&(Me=3);let Ie,W,ce,ve;if(te){const gt=Si[te];Ie=gt.vertexShader,W=gt.fragmentShader}else Ie=I.vertexShader,W=I.fragmentShader,d.update(I),ce=d.getVertexShaderID(I),ve=d.getFragmentShaderID(I);const me=r.getRenderTarget(),Ae=V.isInstancedMesh===!0,Ge=V.isBatchedMesh===!0,Z=!!I.map,mt=!!I.matcap,je=!!fe,vt=!!I.aoMap,Xe=!!I.lightMap,lt=!!I.bumpMap,et=!!I.normalMap,ut=!!I.displacementMap,bt=!!I.emissiveMap,z=!!I.metalnessMap,R=!!I.roughnessMap,se=I.anisotropy>0,pe=I.clearcoat>0,xe=I.dispersion>0,Se=I.iridescence>0,We=I.sheen>0,Re=I.transmission>0,Ce=se&&!!I.anisotropyMap,Ze=pe&&!!I.clearcoatMap,be=pe&&!!I.clearcoatNormalMap,Be=pe&&!!I.clearcoatRoughnessMap,st=Se&&!!I.iridescenceMap,$e=Se&&!!I.iridescenceThicknessMap,De=We&&!!I.sheenColorMap,tt=We&&!!I.sheenRoughnessMap,ct=!!I.specularMap,xt=!!I.specularColorMap,nt=!!I.specularIntensityMap,w=Re&&!!I.transmissionMap,j=Re&&!!I.thicknessMap,J=!!I.gradientMap,ge=!!I.alphaMap,we=I.alphaTest>0,it=!!I.alphaHash,ot=!!I.extensions;let At=br;I.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(At=r.toneMapping);const Bt={shaderID:te,shaderType:I.type,shaderName:I.name,vertexShader:Ie,fragmentShader:W,defines:I.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:S,batching:Ge,instancing:Ae,instancingColor:Ae&&V.instanceColor!==null,instancingMorph:Ae&&V.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Lr,alphaToCoverage:!!I.alphaToCoverage,map:Z,matcap:mt,envMap:je,envMapMode:je&&fe.mapping,envMapCubeUVHeight:k,aoMap:vt,lightMap:Xe,bumpMap:lt,normalMap:et,displacementMap:v&&ut,emissiveMap:bt,normalMapObjectSpace:et&&I.normalMapType===hE,normalMapTangentSpace:et&&I.normalMapType===dE,metalnessMap:z,roughnessMap:R,anisotropy:se,anisotropyMap:Ce,clearcoat:pe,clearcoatMap:Ze,clearcoatNormalMap:be,clearcoatRoughnessMap:Be,dispersion:xe,iridescence:Se,iridescenceMap:st,iridescenceThicknessMap:$e,sheen:We,sheenColorMap:De,sheenRoughnessMap:tt,specularMap:ct,specularColorMap:xt,specularIntensityMap:nt,transmission:Re,transmissionMap:w,thicknessMap:j,gradientMap:J,opaque:I.transparent===!1&&I.blending===io&&I.alphaToCoverage===!1,alphaMap:ge,alphaTest:we,alphaHash:it,combine:I.combine,mapUv:Z&&M(I.map.channel),aoMapUv:vt&&M(I.aoMap.channel),lightMapUv:Xe&&M(I.lightMap.channel),bumpMapUv:lt&&M(I.bumpMap.channel),normalMapUv:et&&M(I.normalMap.channel),displacementMapUv:ut&&M(I.displacementMap.channel),emissiveMapUv:bt&&M(I.emissiveMap.channel),metalnessMapUv:z&&M(I.metalnessMap.channel),roughnessMapUv:R&&M(I.roughnessMap.channel),anisotropyMapUv:Ce&&M(I.anisotropyMap.channel),clearcoatMapUv:Ze&&M(I.clearcoatMap.channel),clearcoatNormalMapUv:be&&M(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&M(I.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&M(I.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&M(I.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(I.sheenColorMap.channel),sheenRoughnessMapUv:tt&&M(I.sheenRoughnessMap.channel),specularMapUv:ct&&M(I.specularMap.channel),specularColorMapUv:xt&&M(I.specularColorMap.channel),specularIntensityMapUv:nt&&M(I.specularIntensityMap.channel),transmissionMapUv:w&&M(I.transmissionMap.channel),thicknessMapUv:j&&M(I.thicknessMap.channel),alphaMapUv:ge&&M(I.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(et||se),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ae.attributes.uv&&(Z||ge),fog:!!ue,useFog:I.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:V.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:Me,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:I.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:At,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Z&&I.map.isVideoTexture===!0&&Tt.getTransfer(I.map.colorSpace)===Nt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ji,flipSided:I.side===On,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:ot&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ot&&I.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Bt.vertexUv1s=h.has(1),Bt.vertexUv2s=h.has(2),Bt.vertexUv3s=h.has(3),h.clear(),Bt}function x(I){const A=[];if(I.shaderID?A.push(I.shaderID):(A.push(I.customVertexShaderID),A.push(I.customFragmentShaderID)),I.defines!==void 0)for(const X in I.defines)A.push(X),A.push(I.defines[X]);return I.isRawShaderMaterial===!1&&(C(A,I),b(A,I),A.push(r.outputColorSpace)),A.push(I.customProgramCacheKey),A.join()}function C(I,A){I.push(A.precision),I.push(A.outputColorSpace),I.push(A.envMapMode),I.push(A.envMapCubeUVHeight),I.push(A.mapUv),I.push(A.alphaMapUv),I.push(A.lightMapUv),I.push(A.aoMapUv),I.push(A.bumpMapUv),I.push(A.normalMapUv),I.push(A.displacementMapUv),I.push(A.emissiveMapUv),I.push(A.metalnessMapUv),I.push(A.roughnessMapUv),I.push(A.anisotropyMapUv),I.push(A.clearcoatMapUv),I.push(A.clearcoatNormalMapUv),I.push(A.clearcoatRoughnessMapUv),I.push(A.iridescenceMapUv),I.push(A.iridescenceThicknessMapUv),I.push(A.sheenColorMapUv),I.push(A.sheenRoughnessMapUv),I.push(A.specularMapUv),I.push(A.specularColorMapUv),I.push(A.specularIntensityMapUv),I.push(A.transmissionMapUv),I.push(A.thicknessMapUv),I.push(A.combine),I.push(A.fogExp2),I.push(A.sizeAttenuation),I.push(A.morphTargetsCount),I.push(A.morphAttributeCount),I.push(A.numDirLights),I.push(A.numPointLights),I.push(A.numSpotLights),I.push(A.numSpotLightMaps),I.push(A.numHemiLights),I.push(A.numRectAreaLights),I.push(A.numDirLightShadows),I.push(A.numPointLightShadows),I.push(A.numSpotLightShadows),I.push(A.numSpotLightShadowsWithMaps),I.push(A.numLightProbes),I.push(A.shadowMapType),I.push(A.toneMapping),I.push(A.numClippingPlanes),I.push(A.numClipIntersection),I.push(A.depthPacking)}function b(I,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),I.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.skinning&&c.enable(4),A.morphTargets&&c.enable(5),A.morphNormals&&c.enable(6),A.morphColors&&c.enable(7),A.premultipliedAlpha&&c.enable(8),A.shadowMapEnabled&&c.enable(9),A.useLegacyLights&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.alphaToCoverage&&c.enable(20),I.push(c.mask)}function P(I){const A=E[I.type];let X;if(A){const le=Si[A];X=iM.clone(le.uniforms)}else X=I.uniforms;return X}function B(I,A){let X;for(let le=0,V=p.length;le<V;le++){const ue=p[le];if(ue.cacheKey===A){X=ue,++X.usedTimes;break}}return X===void 0&&(X=new gb(r,A,I,a),p.push(X)),X}function O(I){if(--I.usedTimes===0){const A=p.indexOf(I);p[A]=p[p.length-1],p.pop(),I.destroy()}}function U(I){d.remove(I)}function K(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:P,acquireProgram:B,releaseProgram:O,releaseShaderCache:U,programs:p,dispose:K}}function Sb(){let r=new WeakMap;function e(a){let u=r.get(a);return u===void 0&&(u={},r.set(a,u)),u}function t(a){r.delete(a)}function n(a,u,c){r.get(a)[u]=c}function o(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:o}}function Eb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function kg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function zg(){const r=[];let e=0;const t=[],n=[],o=[];function a(){e=0,t.length=0,n.length=0,o.length=0}function u(g,v,S,E,M,y){let x=r[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:E,renderOrder:g.renderOrder,z:M,group:y},r[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=M,x.group=y),e++,x}function c(g,v,S,E,M,y){const x=u(g,v,S,E,M,y);S.transmission>0?n.push(x):S.transparent===!0?o.push(x):t.push(x)}function d(g,v,S,E,M,y){const x=u(g,v,S,E,M,y);S.transmission>0?n.unshift(x):S.transparent===!0?o.unshift(x):t.unshift(x)}function h(g,v){t.length>1&&t.sort(g||Eb),n.length>1&&n.sort(v||kg),o.length>1&&o.sort(v||kg)}function p(){for(let g=e,v=r.length;g<v;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:o,init:a,push:c,unshift:d,finish:p,sort:h}}function Mb(){let r=new WeakMap;function e(n,o){const a=r.get(n);let u;return a===void 0?(u=new zg,r.set(n,[u])):o>=a.length?(u=new zg,a.push(u)):u=a[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function wb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new Mt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return r[e.id]=t,t}}}function Tb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let bb=0;function Ab(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Cb(r){const e=new wb,t=Tb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ee);const o=new ee,a=new Zt,u=new Zt;function c(h,p){let g=0,v=0,S=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let E=0,M=0,y=0,x=0,C=0,b=0,P=0,B=0,O=0,U=0,K=0;h.sort(Ab);const I=p===!0?Math.PI:1;for(let X=0,le=h.length;X<le;X++){const V=h[X],ue=V.color,ae=V.intensity,de=V.distance,fe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ue.r*ae*I,v+=ue.g*ae*I,S+=ue.b*ae*I;else if(V.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(V.sh.coefficients[k],ae);K++}else if(V.isDirectionalLight){const k=e.get(V);if(k.color.copy(V.color).multiplyScalar(V.intensity*I),V.castShadow){const te=V.shadow,L=t.get(V);L.shadowBias=te.bias,L.shadowNormalBias=te.normalBias,L.shadowRadius=te.radius,L.shadowMapSize=te.mapSize,n.directionalShadow[E]=L,n.directionalShadowMap[E]=fe,n.directionalShadowMatrix[E]=V.shadow.matrix,b++}n.directional[E]=k,E++}else if(V.isSpotLight){const k=e.get(V);k.position.setFromMatrixPosition(V.matrixWorld),k.color.copy(ue).multiplyScalar(ae*I),k.distance=de,k.coneCos=Math.cos(V.angle),k.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),k.decay=V.decay,n.spot[y]=k;const te=V.shadow;if(V.map&&(n.spotLightMap[O]=V.map,O++,te.updateMatrices(V),V.castShadow&&U++),n.spotLightMatrix[y]=te.matrix,V.castShadow){const L=t.get(V);L.shadowBias=te.bias,L.shadowNormalBias=te.normalBias,L.shadowRadius=te.radius,L.shadowMapSize=te.mapSize,n.spotShadow[y]=L,n.spotShadowMap[y]=fe,B++}y++}else if(V.isRectAreaLight){const k=e.get(V);k.color.copy(ue).multiplyScalar(ae),k.halfWidth.set(V.width*.5,0,0),k.halfHeight.set(0,V.height*.5,0),n.rectArea[x]=k,x++}else if(V.isPointLight){const k=e.get(V);if(k.color.copy(V.color).multiplyScalar(V.intensity*I),k.distance=V.distance,k.decay=V.decay,V.castShadow){const te=V.shadow,L=t.get(V);L.shadowBias=te.bias,L.shadowNormalBias=te.normalBias,L.shadowRadius=te.radius,L.shadowMapSize=te.mapSize,L.shadowCameraNear=te.camera.near,L.shadowCameraFar=te.camera.far,n.pointShadow[M]=L,n.pointShadowMap[M]=fe,n.pointShadowMatrix[M]=V.shadow.matrix,P++}n.point[M]=k,M++}else if(V.isHemisphereLight){const k=e.get(V);k.skyColor.copy(V.color).multiplyScalar(ae*I),k.groundColor.copy(V.groundColor).multiplyScalar(ae*I),n.hemi[C]=k,C++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=v,n.ambient[2]=S;const A=n.hash;(A.directionalLength!==E||A.pointLength!==M||A.spotLength!==y||A.rectAreaLength!==x||A.hemiLength!==C||A.numDirectionalShadows!==b||A.numPointShadows!==P||A.numSpotShadows!==B||A.numSpotMaps!==O||A.numLightProbes!==K)&&(n.directional.length=E,n.spot.length=y,n.rectArea.length=x,n.point.length=M,n.hemi.length=C,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=B,n.spotShadowMap.length=B,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=B+O-U,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=K,A.directionalLength=E,A.pointLength=M,A.spotLength=y,A.rectAreaLength=x,A.hemiLength=C,A.numDirectionalShadows=b,A.numPointShadows=P,A.numSpotShadows=B,A.numSpotMaps=O,A.numLightProbes=K,n.version=bb++)}function d(h,p){let g=0,v=0,S=0,E=0,M=0;const y=p.matrixWorldInverse;for(let x=0,C=h.length;x<C;x++){const b=h[x];if(b.isDirectionalLight){const P=n.directional[g];P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),g++}else if(b.isSpotLight){const P=n.spot[S];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const P=n.rectArea[E];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(y),u.identity(),a.copy(b.matrixWorld),a.premultiply(y),u.extractRotation(a),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),E++}else if(b.isPointLight){const P=n.point[v];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(y),v++}else if(b.isHemisphereLight){const P=n.hemi[M];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(y),M++}}}return{setup:c,setupView:d,state:n}}function Bg(r){const e=new Cb(r),t=[],n=[];function o(p){h.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function u(p){n.push(p)}function c(p){e.setup(t,p)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function Rb(r){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let c;return u===void 0?(c=new Bg(r),e.set(o,[c])):a>=u.length?(c=new Bg(r),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class Pb extends yu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lb extends yu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Db=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ib(r,e,t){let n=new Kv;const o=new at,a=new at,u=new fn,c=new Pb({depthPacking:fE}),d=new Lb,h={},p=t.maxTextureSize,g={[Ar]:On,[On]:Ar,[ji]:ji},v=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Nb,fragmentShader:Db}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Nr;E.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new wi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cv;let x=this.type;this.render=function(O,U,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const I=r.getRenderTarget(),A=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),le=r.state;le.setBlending(Tr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const V=x!==Gi&&this.type===Gi,ue=x===Gi&&this.type!==Gi;for(let ae=0,de=O.length;ae<de;ae++){const fe=O[ae],k=fe.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const te=k.getFrameExtents();if(o.multiply(te),a.copy(k.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/te.x),o.x=a.x*te.x,k.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/te.y),o.y=a.y*te.y,k.mapSize.y=a.y)),k.map===null||V===!0||ue===!0){const q=this.type!==Gi?{minFilter:ti,magFilter:ti}:{};k.map!==null&&k.map.dispose(),k.map=new os(o.x,o.y,q),k.map.texture.name=fe.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const L=k.getViewportCount();for(let q=0;q<L;q++){const Me=k.getViewport(q);u.set(a.x*Me.x,a.y*Me.y,a.x*Me.z,a.y*Me.w),le.viewport(u),k.updateMatrices(fe,q),n=k.getFrustum(),P(U,K,k.camera,fe,this.type)}k.isPointLightShadow!==!0&&this.type===Gi&&C(k,K),k.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(I,A,X)};function C(O,U){const K=e.update(M);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new os(o.x,o.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(U,null,K,v,M,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(U,null,K,S,M,null)}function b(O,U,K,I){let A=null;const X=K.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(X!==void 0)A=X;else if(A=K.isPointLight===!0?d:c,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const le=A.uuid,V=U.uuid;let ue=h[le];ue===void 0&&(ue={},h[le]=ue);let ae=ue[V];ae===void 0&&(ae=A.clone(),ue[V]=ae,U.addEventListener("dispose",B)),A=ae}if(A.visible=U.visible,A.wireframe=U.wireframe,I===Gi?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:g[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,K.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const le=r.properties.get(A);le.light=K}return A}function P(O,U,K,I,A){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===Gi)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,O.matrixWorld);const V=e.update(O),ue=O.material;if(Array.isArray(ue)){const ae=V.groups;for(let de=0,fe=ae.length;de<fe;de++){const k=ae[de],te=ue[k.materialIndex];if(te&&te.visible){const L=b(O,te,I,A);O.onBeforeShadow(r,O,U,K,V,L,k),r.renderBufferDirect(K,null,V,L,O,k),O.onAfterShadow(r,O,U,K,V,L,k)}}}else if(ue.visible){const ae=b(O,ue,I,A);O.onBeforeShadow(r,O,U,K,V,ae,null),r.renderBufferDirect(K,null,V,ae,O,null),O.onAfterShadow(r,O,U,K,V,ae,null)}}const le=O.children;for(let V=0,ue=le.length;V<ue;V++)P(le[V],U,K,I,A)}function B(O){O.target.removeEventListener("dispose",B);for(const K in h){const I=h[K],A=O.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function Ub(r){function e(){let w=!1;const j=new fn;let J=null;const ge=new fn(0,0,0,0);return{setMask:function(we){J!==we&&!w&&(r.colorMask(we,we,we,we),J=we)},setLocked:function(we){w=we},setClear:function(we,it,ot,At,Bt){Bt===!0&&(we*=At,it*=At,ot*=At),j.set(we,it,ot,At),ge.equals(j)===!1&&(r.clearColor(we,it,ot,At),ge.copy(j))},reset:function(){w=!1,J=null,ge.set(-1,0,0,0)}}}function t(){let w=!1,j=null,J=null,ge=null;return{setTest:function(we){we?ve(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(we){j!==we&&!w&&(r.depthMask(we),j=we)},setFunc:function(we){if(J!==we){switch(we){case FS:r.depthFunc(r.NEVER);break;case kS:r.depthFunc(r.ALWAYS);break;case zS:r.depthFunc(r.LESS);break;case tu:r.depthFunc(r.LEQUAL);break;case BS:r.depthFunc(r.EQUAL);break;case HS:r.depthFunc(r.GEQUAL);break;case VS:r.depthFunc(r.GREATER);break;case GS:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=we}},setLocked:function(we){w=we},setClear:function(we){ge!==we&&(r.clearDepth(we),ge=we)},reset:function(){w=!1,j=null,J=null,ge=null}}}function n(){let w=!1,j=null,J=null,ge=null,we=null,it=null,ot=null,At=null,Bt=null;return{setTest:function(gt){w||(gt?ve(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(gt){j!==gt&&!w&&(r.stencilMask(gt),j=gt)},setFunc:function(gt,Dt,wt){(J!==gt||ge!==Dt||we!==wt)&&(r.stencilFunc(gt,Dt,wt),J=gt,ge=Dt,we=wt)},setOp:function(gt,Dt,wt){(it!==gt||ot!==Dt||At!==wt)&&(r.stencilOp(gt,Dt,wt),it=gt,ot=Dt,At=wt)},setLocked:function(gt){w=gt},setClear:function(gt){Bt!==gt&&(r.clearStencil(gt),Bt=gt)},reset:function(){w=!1,j=null,J=null,ge=null,we=null,it=null,ot=null,At=null,Bt=null}}}const o=new e,a=new t,u=new n,c=new WeakMap,d=new WeakMap;let h={},p={},g=new WeakMap,v=[],S=null,E=!1,M=null,y=null,x=null,C=null,b=null,P=null,B=null,O=new Mt(0,0,0),U=0,K=!1,I=null,A=null,X=null,le=null,V=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,de=0;const fe=r.getParameter(r.VERSION);fe.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(fe)[1]),ae=de>=1):fe.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),ae=de>=2);let k=null,te={};const L=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),Me=new fn().fromArray(L),Ie=new fn().fromArray(q);function W(w,j,J,ge){const we=new Uint8Array(4),it=r.createTexture();r.bindTexture(w,it),r.texParameteri(w,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(w,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<J;ot++)w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY?r.texImage3D(j,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(j+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return it}const ce={};ce[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),u.setClear(0),ve(r.DEPTH_TEST),a.setFunc(tu),lt(!1),et(xm),ve(r.CULL_FACE),vt(Tr);function ve(w){h[w]!==!0&&(r.enable(w),h[w]=!0)}function me(w){h[w]!==!1&&(r.disable(w),h[w]=!1)}function Ae(w,j){return p[w]!==j?(r.bindFramebuffer(w,j),p[w]=j,w===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=j),w===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=j),!0):!1}function Ge(w,j){let J=v,ge=!1;if(w){J=g.get(j),J===void 0&&(J=[],g.set(j,J));const we=w.textures;if(J.length!==we.length||J[0]!==r.COLOR_ATTACHMENT0){for(let it=0,ot=we.length;it<ot;it++)J[it]=r.COLOR_ATTACHMENT0+it;J.length=we.length,ge=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,ge=!0);ge&&r.drawBuffers(J)}function Z(w){return S!==w?(r.useProgram(w),S=w,!0):!1}const mt={[ts]:r.FUNC_ADD,[xS]:r.FUNC_SUBTRACT,[SS]:r.FUNC_REVERSE_SUBTRACT};mt[ES]=r.MIN,mt[MS]=r.MAX;const je={[wS]:r.ZERO,[TS]:r.ONE,[bS]:r.SRC_COLOR,[rd]:r.SRC_ALPHA,[NS]:r.SRC_ALPHA_SATURATE,[PS]:r.DST_COLOR,[CS]:r.DST_ALPHA,[AS]:r.ONE_MINUS_SRC_COLOR,[sd]:r.ONE_MINUS_SRC_ALPHA,[LS]:r.ONE_MINUS_DST_COLOR,[RS]:r.ONE_MINUS_DST_ALPHA,[DS]:r.CONSTANT_COLOR,[IS]:r.ONE_MINUS_CONSTANT_COLOR,[US]:r.CONSTANT_ALPHA,[OS]:r.ONE_MINUS_CONSTANT_ALPHA};function vt(w,j,J,ge,we,it,ot,At,Bt,gt){if(w===Tr){E===!0&&(me(r.BLEND),E=!1);return}if(E===!1&&(ve(r.BLEND),E=!0),w!==yS){if(w!==M||gt!==K){if((y!==ts||b!==ts)&&(r.blendEquation(r.FUNC_ADD),y=ts,b=ts),gt)switch(w){case io:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sm:r.blendFunc(r.ONE,r.ONE);break;case Em:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case io:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Em:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}x=null,C=null,P=null,B=null,O.set(0,0,0),U=0,M=w,K=gt}return}we=we||j,it=it||J,ot=ot||ge,(j!==y||we!==b)&&(r.blendEquationSeparate(mt[j],mt[we]),y=j,b=we),(J!==x||ge!==C||it!==P||ot!==B)&&(r.blendFuncSeparate(je[J],je[ge],je[it],je[ot]),x=J,C=ge,P=it,B=ot),(At.equals(O)===!1||Bt!==U)&&(r.blendColor(At.r,At.g,At.b,Bt),O.copy(At),U=Bt),M=w,K=!1}function Xe(w,j){w.side===ji?me(r.CULL_FACE):ve(r.CULL_FACE);let J=w.side===On;j&&(J=!J),lt(J),w.blending===io&&w.transparent===!1?vt(Tr):vt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),o.setMask(w.colorWrite);const ge=w.stencilWrite;u.setTest(ge),ge&&(u.setMask(w.stencilWriteMask),u.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),u.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),bt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(w){I!==w&&(w?r.frontFace(r.CW):r.frontFace(r.CCW),I=w)}function et(w){w!==gS?(ve(r.CULL_FACE),w!==A&&(w===xm?r.cullFace(r.BACK):w===vS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),A=w}function ut(w){w!==X&&(ae&&r.lineWidth(w),X=w)}function bt(w,j,J){w?(ve(r.POLYGON_OFFSET_FILL),(le!==j||V!==J)&&(r.polygonOffset(j,J),le=j,V=J)):me(r.POLYGON_OFFSET_FILL)}function z(w){w?ve(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function R(w){w===void 0&&(w=r.TEXTURE0+ue-1),k!==w&&(r.activeTexture(w),k=w)}function se(w,j,J){J===void 0&&(k===null?J=r.TEXTURE0+ue-1:J=k);let ge=te[J];ge===void 0&&(ge={type:void 0,texture:void 0},te[J]=ge),(ge.type!==w||ge.texture!==j)&&(k!==J&&(r.activeTexture(J),k=J),r.bindTexture(w,j||ce[w]),ge.type=w,ge.texture=j)}function pe(){const w=te[k];w!==void 0&&w.type!==void 0&&(r.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function xe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function We(){try{r.texSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Re(){try{r.texSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ze(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function be(){try{r.texStorage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Be(){try{r.texStorage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function st(){try{r.texImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function $e(){try{r.texImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function De(w){Me.equals(w)===!1&&(r.scissor(w.x,w.y,w.z,w.w),Me.copy(w))}function tt(w){Ie.equals(w)===!1&&(r.viewport(w.x,w.y,w.z,w.w),Ie.copy(w))}function ct(w,j){let J=d.get(j);J===void 0&&(J=new WeakMap,d.set(j,J));let ge=J.get(w);ge===void 0&&(ge=r.getUniformBlockIndex(j,w.name),J.set(w,ge))}function xt(w,j){const ge=d.get(j).get(w);c.get(j)!==ge&&(r.uniformBlockBinding(j,ge,w.__bindingPointIndex),c.set(j,ge))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},k=null,te={},p={},g=new WeakMap,v=[],S=null,E=!1,M=null,y=null,x=null,C=null,b=null,P=null,B=null,O=new Mt(0,0,0),U=0,K=!1,I=null,A=null,X=null,le=null,V=null,Me.set(0,0,r.canvas.width,r.canvas.height),Ie.set(0,0,r.canvas.width,r.canvas.height),o.reset(),a.reset(),u.reset()}return{buffers:{color:o,depth:a,stencil:u},enable:ve,disable:me,bindFramebuffer:Ae,drawBuffers:Ge,useProgram:Z,setBlending:vt,setMaterial:Xe,setFlipSided:lt,setCullFace:et,setLineWidth:ut,setPolygonOffset:bt,setScissorTest:z,activeTexture:R,bindTexture:se,unbindTexture:pe,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:st,texImage3D:$e,updateUBOMapping:ct,uniformBlockBinding:xt,texStorage2D:be,texStorage3D:Be,texSubImage2D:We,texSubImage3D:Re,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ze,scissor:De,viewport:tt,reset:nt}}function Ob(r,e,t,n,o,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new at,p=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(z,R){return S?new OffscreenCanvas(z,R):da("canvas")}function M(z,R,se){let pe=1;const xe=bt(z);if((xe.width>se||xe.height>se)&&(pe=se/Math.max(xe.width,xe.height)),pe<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Se=Math.floor(pe*xe.width),We=Math.floor(pe*xe.height);g===void 0&&(g=E(Se,We));const Re=R?E(Se,We):g;return Re.width=Se,Re.height=We,Re.getContext("2d").drawImage(z,0,0,Se,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Se+"x"+We+")."),Re}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),z;return z}function y(z){return z.generateMipmaps&&z.minFilter!==ti&&z.minFilter!==pi}function x(z){r.generateMipmap(z)}function C(z,R,se,pe,xe=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Se=R;if(R===r.RED&&(se===r.FLOAT&&(Se=r.R32F),se===r.HALF_FLOAT&&(Se=r.R16F),se===r.UNSIGNED_BYTE&&(Se=r.R8)),R===r.RED_INTEGER&&(se===r.UNSIGNED_BYTE&&(Se=r.R8UI),se===r.UNSIGNED_SHORT&&(Se=r.R16UI),se===r.UNSIGNED_INT&&(Se=r.R32UI),se===r.BYTE&&(Se=r.R8I),se===r.SHORT&&(Se=r.R16I),se===r.INT&&(Se=r.R32I)),R===r.RG&&(se===r.FLOAT&&(Se=r.RG32F),se===r.HALF_FLOAT&&(Se=r.RG16F),se===r.UNSIGNED_BYTE&&(Se=r.RG8)),R===r.RG_INTEGER&&(se===r.UNSIGNED_BYTE&&(Se=r.RG8UI),se===r.UNSIGNED_SHORT&&(Se=r.RG16UI),se===r.UNSIGNED_INT&&(Se=r.RG32UI),se===r.BYTE&&(Se=r.RG8I),se===r.SHORT&&(Se=r.RG16I),se===r.INT&&(Se=r.RG32I)),R===r.RGB&&se===r.UNSIGNED_INT_5_9_9_9_REV&&(Se=r.RGB9_E5),R===r.RGBA){const We=xe?nu:Tt.getTransfer(pe);se===r.FLOAT&&(Se=r.RGBA32F),se===r.HALF_FLOAT&&(Se=r.RGBA16F),se===r.UNSIGNED_BYTE&&(Se=We===Nt?r.SRGB8_ALPHA8:r.RGBA8),se===r.UNSIGNED_SHORT_4_4_4_4&&(Se=r.RGBA4),se===r.UNSIGNED_SHORT_5_5_5_1&&(Se=r.RGB5_A1)}return(Se===r.R16F||Se===r.R32F||Se===r.RG16F||Se===r.RG32F||Se===r.RGBA16F||Se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function b(z,R){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==ti&&z.minFilter!==pi?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function P(z){const R=z.target;R.removeEventListener("dispose",P),O(R),R.isVideoTexture&&p.delete(R)}function B(z){const R=z.target;R.removeEventListener("dispose",B),K(R)}function O(z){const R=n.get(z);if(R.__webglInit===void 0)return;const se=z.source,pe=v.get(se);if(pe){const xe=pe[R.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&U(z),Object.keys(pe).length===0&&v.delete(se)}n.remove(z)}function U(z){const R=n.get(z);r.deleteTexture(R.__webglTexture);const se=z.source,pe=v.get(se);delete pe[R.__cacheKey],u.memory.textures--}function K(z){const R=n.get(z);if(z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(R.__webglFramebuffer[pe]))for(let xe=0;xe<R.__webglFramebuffer[pe].length;xe++)r.deleteFramebuffer(R.__webglFramebuffer[pe][xe]);else r.deleteFramebuffer(R.__webglFramebuffer[pe]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[pe])}else{if(Array.isArray(R.__webglFramebuffer))for(let pe=0;pe<R.__webglFramebuffer.length;pe++)r.deleteFramebuffer(R.__webglFramebuffer[pe]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pe=0;pe<R.__webglColorRenderbuffer.length;pe++)R.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[pe]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const se=z.textures;for(let pe=0,xe=se.length;pe<xe;pe++){const Se=n.get(se[pe]);Se.__webglTexture&&(r.deleteTexture(Se.__webglTexture),u.memory.textures--),n.remove(se[pe])}n.remove(z)}let I=0;function A(){I=0}function X(){const z=I;return z>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),I+=1,z}function le(z){const R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function V(z,R){const se=n.get(z);if(z.isVideoTexture&&et(z),z.isRenderTargetTexture===!1&&z.version>0&&se.__version!==z.version){const pe=z.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(se,z,R);return}}t.bindTexture(r.TEXTURE_2D,se.__webglTexture,r.TEXTURE0+R)}function ue(z,R){const se=n.get(z);if(z.version>0&&se.__version!==z.version){Me(se,z,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,se.__webglTexture,r.TEXTURE0+R)}function ae(z,R){const se=n.get(z);if(z.version>0&&se.__version!==z.version){Me(se,z,R);return}t.bindTexture(r.TEXTURE_3D,se.__webglTexture,r.TEXTURE0+R)}function de(z,R){const se=n.get(z);if(z.version>0&&se.__version!==z.version){Ie(se,z,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture,r.TEXTURE0+R)}const fe={[ld]:r.REPEAT,[is]:r.CLAMP_TO_EDGE,[ud]:r.MIRRORED_REPEAT},k={[ti]:r.NEAREST,[JS]:r.NEAREST_MIPMAP_NEAREST,[wl]:r.NEAREST_MIPMAP_LINEAR,[pi]:r.LINEAR,[hf]:r.LINEAR_MIPMAP_NEAREST,[rs]:r.LINEAR_MIPMAP_LINEAR},te={[pE]:r.NEVER,[xE]:r.ALWAYS,[mE]:r.LESS,[kv]:r.LEQUAL,[gE]:r.EQUAL,[yE]:r.GEQUAL,[vE]:r.GREATER,[_E]:r.NOTEQUAL};function L(z,R){if(R.type===Mr&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===pi||R.magFilter===hf||R.magFilter===wl||R.magFilter===rs||R.minFilter===pi||R.minFilter===hf||R.minFilter===wl||R.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,fe[R.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,fe[R.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,fe[R.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,k[R.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,k[R.minFilter]),R.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,te[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ti||R.minFilter!==wl&&R.minFilter!==rs||R.type===Mr&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function q(z,R){let se=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",P));const pe=R.source;let xe=v.get(pe);xe===void 0&&(xe={},v.set(pe,xe));const Se=le(R);if(Se!==z.__cacheKey){xe[Se]===void 0&&(xe[Se]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,se=!0),xe[Se].usedTimes++;const We=xe[z.__cacheKey];We!==void 0&&(xe[z.__cacheKey].usedTimes--,We.usedTimes===0&&U(R)),z.__cacheKey=Se,z.__webglTexture=xe[Se].texture}return se}function Me(z,R,se){let pe=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pe=r.TEXTURE_3D);const xe=q(z,R),Se=R.source;t.bindTexture(pe,z.__webglTexture,r.TEXTURE0+se);const We=n.get(Se);if(Se.version!==We.__version||xe===!0){t.activeTexture(r.TEXTURE0+se);const Re=Tt.getPrimaries(Tt.workingColorSpace),Ce=R.colorSpace===Sr?null:Tt.getPrimaries(R.colorSpace),Ze=R.colorSpace===Sr||Re===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let be=M(R.image,!1,o.maxTextureSize);be=ut(R,be);const Be=a.convert(R.format,R.colorSpace),st=a.convert(R.type);let $e=C(R.internalFormat,Be,st,R.colorSpace,R.isVideoTexture);L(pe,R);let De;const tt=R.mipmaps,ct=R.isVideoTexture!==!0,xt=We.__version===void 0||xe===!0,nt=Se.dataReady,w=b(R,be);if(R.isDepthTexture)$e=r.DEPTH_COMPONENT16,R.type===Mr?$e=r.DEPTH_COMPONENT32F:R.type===uo?$e=r.DEPTH_COMPONENT24:R.type===ga&&($e=r.DEPTH24_STENCIL8),xt&&(ct?t.texStorage2D(r.TEXTURE_2D,1,$e,be.width,be.height):t.texImage2D(r.TEXTURE_2D,0,$e,be.width,be.height,0,Be,st,null));else if(R.isDataTexture)if(tt.length>0){ct&&xt&&t.texStorage2D(r.TEXTURE_2D,w,$e,tt[0].width,tt[0].height);for(let j=0,J=tt.length;j<J;j++)De=tt[j],ct?nt&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,De.width,De.height,Be,st,De.data):t.texImage2D(r.TEXTURE_2D,j,$e,De.width,De.height,0,Be,st,De.data);R.generateMipmaps=!1}else ct?(xt&&t.texStorage2D(r.TEXTURE_2D,w,$e,be.width,be.height),nt&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,be.width,be.height,Be,st,be.data)):t.texImage2D(r.TEXTURE_2D,0,$e,be.width,be.height,0,Be,st,be.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ct&&xt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,w,$e,tt[0].width,tt[0].height,be.depth);for(let j=0,J=tt.length;j<J;j++)De=tt[j],R.format!==Mi?Be!==null?ct?nt&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,De.width,De.height,be.depth,Be,De.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,$e,De.width,De.height,be.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?nt&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,De.width,De.height,be.depth,Be,st,De.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,$e,De.width,De.height,be.depth,0,Be,st,De.data)}else{ct&&xt&&t.texStorage2D(r.TEXTURE_2D,w,$e,tt[0].width,tt[0].height);for(let j=0,J=tt.length;j<J;j++)De=tt[j],R.format!==Mi?Be!==null?ct?nt&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,De.width,De.height,Be,De.data):t.compressedTexImage2D(r.TEXTURE_2D,j,$e,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?nt&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,De.width,De.height,Be,st,De.data):t.texImage2D(r.TEXTURE_2D,j,$e,De.width,De.height,0,Be,st,De.data)}else if(R.isDataArrayTexture)ct?(xt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,w,$e,be.width,be.height,be.depth),nt&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Be,st,be.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,$e,be.width,be.height,be.depth,0,Be,st,be.data);else if(R.isData3DTexture)ct?(xt&&t.texStorage3D(r.TEXTURE_3D,w,$e,be.width,be.height,be.depth),nt&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Be,st,be.data)):t.texImage3D(r.TEXTURE_3D,0,$e,be.width,be.height,be.depth,0,Be,st,be.data);else if(R.isFramebufferTexture){if(xt)if(ct)t.texStorage2D(r.TEXTURE_2D,w,$e,be.width,be.height);else{let j=be.width,J=be.height;for(let ge=0;ge<w;ge++)t.texImage2D(r.TEXTURE_2D,ge,$e,j,J,0,Be,st,null),j>>=1,J>>=1}}else if(tt.length>0){if(ct&&xt){const j=bt(tt[0]);t.texStorage2D(r.TEXTURE_2D,w,$e,j.width,j.height)}for(let j=0,J=tt.length;j<J;j++)De=tt[j],ct?nt&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,Be,st,De):t.texImage2D(r.TEXTURE_2D,j,$e,Be,st,De);R.generateMipmaps=!1}else if(ct){if(xt){const j=bt(be);t.texStorage2D(r.TEXTURE_2D,w,$e,j.width,j.height)}nt&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,st,be)}else t.texImage2D(r.TEXTURE_2D,0,$e,Be,st,be);y(R)&&x(pe),We.__version=Se.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Ie(z,R,se){if(R.image.length!==6)return;const pe=q(z,R),xe=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+se);const Se=n.get(xe);if(xe.version!==Se.__version||pe===!0){t.activeTexture(r.TEXTURE0+se);const We=Tt.getPrimaries(Tt.workingColorSpace),Re=R.colorSpace===Sr?null:Tt.getPrimaries(R.colorSpace),Ce=R.colorSpace===Sr||We===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ze=R.isCompressedTexture||R.image[0].isCompressedTexture,be=R.image[0]&&R.image[0].isDataTexture,Be=[];for(let J=0;J<6;J++)!Ze&&!be?Be[J]=M(R.image[J],!0,o.maxCubemapSize):Be[J]=be?R.image[J].image:R.image[J],Be[J]=ut(R,Be[J]);const st=Be[0],$e=a.convert(R.format,R.colorSpace),De=a.convert(R.type),tt=C(R.internalFormat,$e,De,R.colorSpace),ct=R.isVideoTexture!==!0,xt=Se.__version===void 0||pe===!0,nt=xe.dataReady;let w=b(R,st);L(r.TEXTURE_CUBE_MAP,R);let j;if(Ze){ct&&xt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,w,tt,st.width,st.height);for(let J=0;J<6;J++){j=Be[J].mipmaps;for(let ge=0;ge<j.length;ge++){const we=j[ge];R.format!==Mi?$e!==null?ct?nt&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,we.width,we.height,$e,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,tt,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?nt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,we.width,we.height,$e,De,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,tt,we.width,we.height,0,$e,De,we.data)}}}else{if(j=R.mipmaps,ct&&xt){j.length>0&&w++;const J=bt(Be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,w,tt,J.width,J.height)}for(let J=0;J<6;J++)if(be){ct?nt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Be[J].width,Be[J].height,$e,De,Be[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,tt,Be[J].width,Be[J].height,0,$e,De,Be[J].data);for(let ge=0;ge<j.length;ge++){const it=j[ge].image[J].image;ct?nt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,it.width,it.height,$e,De,it.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,tt,it.width,it.height,0,$e,De,it.data)}}else{ct?nt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,$e,De,Be[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,tt,$e,De,Be[J]);for(let ge=0;ge<j.length;ge++){const we=j[ge];ct?nt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,$e,De,we.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,tt,$e,De,we.image[J])}}}y(R)&&x(r.TEXTURE_CUBE_MAP),Se.__version=xe.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function W(z,R,se,pe,xe,Se){const We=a.convert(se.format,se.colorSpace),Re=a.convert(se.type),Ce=C(se.internalFormat,We,Re,se.colorSpace);if(!n.get(R).__hasExternalTextures){const be=Math.max(1,R.width>>Se),Be=Math.max(1,R.height>>Se);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,Se,Ce,be,Be,R.depth,0,We,Re,null):t.texImage2D(xe,Se,Ce,be,Be,0,We,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,z),lt(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,xe,n.get(se).__webglTexture,0,Xe(R)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,xe,n.get(se).__webglTexture,Se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ce(z,R,se){if(r.bindRenderbuffer(r.RENDERBUFFER,z),R.depthBuffer&&!R.stencilBuffer){let pe=r.DEPTH_COMPONENT24;if(se||lt(R)){const xe=R.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Mr?pe=r.DEPTH_COMPONENT32F:xe.type===uo&&(pe=r.DEPTH_COMPONENT24));const Se=Xe(R);lt(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,pe,R.width,R.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,pe,R.width,R.height)}else r.renderbufferStorage(r.RENDERBUFFER,pe,R.width,R.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,z)}else if(R.depthBuffer&&R.stencilBuffer){const pe=Xe(R);se&&lt(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,r.DEPTH24_STENCIL8,R.width,R.height):lt(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,r.DEPTH24_STENCIL8,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,z)}else{const pe=R.textures;for(let xe=0;xe<pe.length;xe++){const Se=pe[xe],We=a.convert(Se.format,Se.colorSpace),Re=a.convert(Se.type),Ce=C(Se.internalFormat,We,Re,Se.colorSpace),Ze=Xe(R);se&&lt(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,Ce,R.width,R.height):lt(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,Ce,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(z,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),V(R.depthTexture,0);const pe=n.get(R.depthTexture).__webglTexture,xe=Xe(R);if(R.depthTexture.format===ro)lt(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,pe,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,pe,0);else if(R.depthTexture.format===ca)lt(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,pe,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function me(z){const R=n.get(z),se=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!R.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");ve(R.__webglFramebuffer,z)}else if(se){R.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[pe]),R.__webglDepthbuffer[pe]=r.createRenderbuffer(),ce(R.__webglDepthbuffer[pe],z,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=r.createRenderbuffer(),ce(R.__webglDepthbuffer,z,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(z,R,se){const pe=n.get(z);R!==void 0&&W(pe.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),se!==void 0&&me(z)}function Ge(z){const R=z.texture,se=n.get(z),pe=n.get(R);z.addEventListener("dispose",B);const xe=z.textures,Se=z.isWebGLCubeRenderTarget===!0,We=xe.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=R.version,u.memory.textures++),Se){se.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer[Re]=[];for(let Ce=0;Ce<R.mipmaps.length;Ce++)se.__webglFramebuffer[Re][Ce]=r.createFramebuffer()}else se.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer=[];for(let Re=0;Re<R.mipmaps.length;Re++)se.__webglFramebuffer[Re]=r.createFramebuffer()}else se.__webglFramebuffer=r.createFramebuffer();if(We)for(let Re=0,Ce=xe.length;Re<Ce;Re++){const Ze=n.get(xe[Re]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),u.memory.textures++)}if(z.samples>0&&lt(z)===!1){se.__webglMultisampledFramebuffer=r.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Re=0;Re<xe.length;Re++){const Ce=xe[Re];se.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,se.__webglColorRenderbuffer[Re]);const Ze=a.convert(Ce.format,Ce.colorSpace),be=a.convert(Ce.type),Be=C(Ce.internalFormat,Ze,be,Ce.colorSpace,z.isXRRenderTarget===!0),st=Xe(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,st,Be,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,se.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(se.__webglDepthRenderbuffer=r.createRenderbuffer(),ce(se.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Se){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),L(r.TEXTURE_CUBE_MAP,R);for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ce=0;Ce<R.mipmaps.length;Ce++)W(se.__webglFramebuffer[Re][Ce],z,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce);else W(se.__webglFramebuffer[Re],z,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(R)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Re=0,Ce=xe.length;Re<Ce;Re++){const Ze=xe[Re],be=n.get(Ze);t.bindTexture(r.TEXTURE_2D,be.__webglTexture),L(r.TEXTURE_2D,Ze),W(se.__webglFramebuffer,z,Ze,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),y(Ze)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Re=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,pe.__webglTexture),L(Re,R),R.mipmaps&&R.mipmaps.length>0)for(let Ce=0;Ce<R.mipmaps.length;Ce++)W(se.__webglFramebuffer[Ce],z,R,r.COLOR_ATTACHMENT0,Re,Ce);else W(se.__webglFramebuffer,z,R,r.COLOR_ATTACHMENT0,Re,0);y(R)&&x(Re),t.unbindTexture()}z.depthBuffer&&me(z)}function Z(z){const R=z.textures;for(let se=0,pe=R.length;se<pe;se++){const xe=R[se];if(y(xe)){const Se=z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,We=n.get(xe).__webglTexture;t.bindTexture(Se,We),x(Se),t.unbindTexture()}}}const mt=[],je=[];function vt(z){if(z.samples>0){if(lt(z)===!1){const R=z.textures,se=z.width,pe=z.height;let xe=r.COLOR_BUFFER_BIT;const Se=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,We=n.get(z),Re=R.length>1;if(Re)for(let Ce=0;Ce<R.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ce=0;Ce<R.length;Ce++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,We.__webglColorRenderbuffer[Ce]);const Ze=n.get(R[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ze,0)}r.blitFramebuffer(0,0,se,pe,0,0,se,pe,xe,r.NEAREST),d===!0&&(mt.length=0,je.length=0,mt.push(r.COLOR_ATTACHMENT0+Ce),z.depthBuffer&&z.resolveDepthBuffer===!1&&(mt.push(Se),je.push(Se),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,je)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let Ce=0;Ce<R.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,We.__webglColorRenderbuffer[Ce]);const Ze=n.get(R[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,Ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&d){const R=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function Xe(z){return Math.min(o.maxSamples,z.samples)}function lt(z){const R=n.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function et(z){const R=u.render.frame;p.get(z)!==R&&(p.set(z,R),z.update())}function ut(z,R){const se=z.colorSpace,pe=z.format,xe=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||se!==Lr&&se!==Sr&&(Tt.getTransfer(se)===Nt?(pe!==Mi||xe!==Cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),R}function bt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=A,this.setTexture2D=V,this.setTexture2DArray=ue,this.setTexture3D=ae,this.setTextureCube=de,this.rebindTextures=Ae,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=W,this.useMultisampledRTT=lt}function Fb(r,e){function t(n,o=Sr){let a;const u=Tt.getTransfer(o);if(n===Cr)return r.UNSIGNED_BYTE;if(n===Dv)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Iv)return r.UNSIGNED_SHORT_5_5_5_1;if(n===nE)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===eE)return r.BYTE;if(n===tE)return r.SHORT;if(n===Lv)return r.UNSIGNED_SHORT;if(n===Nv)return r.INT;if(n===uo)return r.UNSIGNED_INT;if(n===Mr)return r.FLOAT;if(n===vu)return r.HALF_FLOAT;if(n===iE)return r.ALPHA;if(n===rE)return r.RGB;if(n===Mi)return r.RGBA;if(n===sE)return r.LUMINANCE;if(n===oE)return r.LUMINANCE_ALPHA;if(n===ro)return r.DEPTH_COMPONENT;if(n===ca)return r.DEPTH_STENCIL;if(n===aE)return r.RED;if(n===Uv)return r.RED_INTEGER;if(n===lE)return r.RG;if(n===Ov)return r.RG_INTEGER;if(n===Fv)return r.RGBA_INTEGER;if(n===pf||n===mf||n===gf||n===vf)if(u===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===pf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===pf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wm||n===Tm||n===bm||n===Am)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===wm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Am)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cm||n===Rm||n===Pm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Cm||n===Rm)return u===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Pm)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lm||n===Nm||n===Dm||n===Im||n===Um||n===Om||n===Fm||n===km||n===zm||n===Bm||n===Hm||n===Vm||n===Gm||n===Wm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Lm)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nm)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dm)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Im)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Um)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Om)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fm)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===km)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zm)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bm)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hm)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vm)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gm)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wm)return u===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_f||n===jm||n===Xm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===_f)return u===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uE||n===$m||n===qm||n===Ym)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===_f)return a.COMPRESSED_RED_RGTC1_EXT;if(n===$m)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ym)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ga?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class kb extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xl extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zb={type:"move"};class Gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,n),x=this._getHandJoint(h,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=p.position.distanceTo(g.position),S=.02,E=.005;h.inputState.pinching&&v>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(zb)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const o=new An,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,o=new Rr({vertexShader:Bb,fragmentShader:Hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wi(new xu(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Gb extends us{constructor(e,t){super();const n=this;let o=null,a=1,u=null,c="local-floor",d=1,h=null,p=null,g=null,v=null,S=null,E=null;const M=new Vb,y=t.getContextAttributes();let x=null,C=null;const b=[],P=[],B=new at;let O=null;const U=new ei;U.layers.enable(1),U.viewport=new fn;const K=new ei;K.layers.enable(2),K.viewport=new fn;const I=[U,K],A=new kb;A.layers.enable(1),A.layers.enable(2);let X=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ce=b[W];return ce===void 0&&(ce=new Gf,b[W]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(W){let ce=b[W];return ce===void 0&&(ce=new Gf,b[W]=ce),ce.getGripSpace()},this.getHand=function(W){let ce=b[W];return ce===void 0&&(ce=new Gf,b[W]=ce),ce.getHandSpace()};function V(W){const ce=P.indexOf(W.inputSource);if(ce===-1)return;const ve=b[ce];ve!==void 0&&(ve.update(W.inputSource,W.frame,h||u),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function ue(){o.removeEventListener("select",V),o.removeEventListener("selectstart",V),o.removeEventListener("selectend",V),o.removeEventListener("squeeze",V),o.removeEventListener("squeezestart",V),o.removeEventListener("squeezeend",V),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",ae);for(let W=0;W<b.length;W++){const ce=P[W];ce!==null&&(P[W]=null,b[W].disconnect(ce))}X=null,le=null,M.reset(),e.setRenderTarget(x),S=null,v=null,g=null,o=null,C=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){c=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",V),o.addEventListener("selectstart",V),o.addEventListener("selectend",V),o.addEventListener("squeeze",V),o.addEventListener("squeezestart",V),o.addEventListener("squeezeend",V),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",ae),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(B),o.renderState.layers===void 0){const ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(o,t,ce),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new os(S.framebufferWidth,S.framebufferHeight,{format:Mi,type:Cr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ce=null,ve=null,me=null;y.depth&&(me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=y.stencil?ca:ro,ve=y.stencil?ga:uo);const Ae={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:a};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Ae),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new os(v.textureWidth,v.textureHeight,{format:Mi,type:Cr,depthTexture:new Qv(v.textureWidth,v.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Ie.setContext(o),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function ae(W){for(let ce=0;ce<W.removed.length;ce++){const ve=W.removed[ce],me=P.indexOf(ve);me>=0&&(P[me]=null,b[me].disconnect(ve))}for(let ce=0;ce<W.added.length;ce++){const ve=W.added[ce];let me=P.indexOf(ve);if(me===-1){for(let Ge=0;Ge<b.length;Ge++)if(Ge>=P.length){P.push(ve),me=Ge;break}else if(P[Ge]===null){P[Ge]=ve,me=Ge;break}if(me===-1)break}const Ae=b[me];Ae&&Ae.connect(ve)}}const de=new ee,fe=new ee;function k(W,ce,ve){de.setFromMatrixPosition(ce.matrixWorld),fe.setFromMatrixPosition(ve.matrixWorld);const me=de.distanceTo(fe),Ae=ce.projectionMatrix.elements,Ge=ve.projectionMatrix.elements,Z=Ae[14]/(Ae[10]-1),mt=Ae[14]/(Ae[10]+1),je=(Ae[9]+1)/Ae[5],vt=(Ae[9]-1)/Ae[5],Xe=(Ae[8]-1)/Ae[0],lt=(Ge[8]+1)/Ge[0],et=Z*Xe,ut=Z*lt,bt=me/(-Xe+lt),z=bt*-Xe;ce.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(z),W.translateZ(bt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const R=Z+bt,se=mt+bt,pe=et-z,xe=ut+(me-z),Se=je*mt/se*R,We=vt*mt/se*R;W.projectionMatrix.makePerspective(pe,xe,Se,We,R,se),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function te(W,ce){ce===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ce.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;M.texture!==null&&(W.near=M.depthNear,W.far=M.depthFar),A.near=K.near=U.near=W.near,A.far=K.far=U.far=W.far,(X!==A.near||le!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),X=A.near,le=A.far,U.near=X,U.far=le,K.near=X,K.far=le,U.updateProjectionMatrix(),K.updateProjectionMatrix(),W.updateProjectionMatrix());const ce=W.parent,ve=A.cameras;te(A,ce);for(let me=0;me<ve.length;me++)te(ve[me],ce);ve.length===2?k(A,U,K):A.projectionMatrix.copy(U.projectionMatrix),L(W,A,ce)};function L(W,ce,ve){ve===null?W.matrix.copy(ce.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(ce.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ce.projectionMatrix),W.projectionMatrixInverse.copy(ce.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=fa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(W){d=W,v!==null&&(v.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null};let q=null;function Me(W,ce){if(p=ce.getViewerPose(h||u),E=ce,p!==null){const ve=p.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let me=!1;ve.length!==A.cameras.length&&(A.cameras.length=0,me=!0);for(let Ge=0;Ge<ve.length;Ge++){const Z=ve[Ge];let mt=null;if(S!==null)mt=S.getViewport(Z);else{const vt=g.getViewSubImage(v,Z);mt=vt.viewport,Ge===0&&(e.setRenderTargetTextures(C,vt.colorTexture,v.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(C))}let je=I[Ge];je===void 0&&(je=new ei,je.layers.enable(Ge),je.viewport=new fn,I[Ge]=je),je.matrix.fromArray(Z.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Z.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(mt.x,mt.y,mt.width,mt.height),Ge===0&&(A.matrix.copy(je.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),me===!0&&A.cameras.push(je)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ge=g.getDepthInformation(ve[0]);Ge&&Ge.isValid&&Ge.texture&&M.init(e,Ge,o.renderState)}}for(let ve=0;ve<b.length;ve++){const me=P[ve],Ae=b[ve];me!==null&&Ae!==void 0&&Ae.update(me,ce,h||u)}M.render(e,A),q&&q(W,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Ie=new Zv;Ie.setAnimationLoop(Me),this.setAnimationLoop=function(W){q=W},this.dispose=function(){}}}const Qr=new qi,Wb=new Zt;function jb(r,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,$v(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,C,b,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(y,x):x.isMeshToonMaterial?(a(y,x),g(y,x)):x.isMeshPhongMaterial?(a(y,x),p(y,x)):x.isMeshStandardMaterial?(a(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,P)):x.isMeshMatcapMaterial?(a(y,x),E(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),M(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&c(y,x)):x.isPointsMaterial?d(y,x,C,b):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===On&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===On&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const C=e.get(x),b=C.envMap,P=C.envMapRotation;if(b&&(y.envMap.value=b,Qr.copy(P),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),y.envMapRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(Qr)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap){y.lightMap.value=x.lightMap;const B=r._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=x.lightMapIntensity*B,t(x.lightMap,y.lightMapTransform)}x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function c(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,C,b){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*C,y.scale.value=b*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,C){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===On&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const C=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function Xb(r,e,t,n){let o={},a={},u=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,b){const P=b.program;n.uniformBlockBinding(C,P)}function h(C,b){let P=o[C.id];P===void 0&&(E(C),P=p(C),o[C.id]=P,C.addEventListener("dispose",y));const B=b.program;n.updateUBOMapping(C,B);const O=e.render.frame;a[C.id]!==O&&(v(C),a[C.id]=O)}function p(C){const b=g();C.__bindingPointIndex=b;const P=r.createBuffer(),B=C.__size,O=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,B,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,P),P}function g(){for(let C=0;C<c;C++)if(u.indexOf(C)===-1)return u.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const b=o[C.id],P=C.uniforms,B=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let O=0,U=P.length;O<U;O++){const K=Array.isArray(P[O])?P[O]:[P[O]];for(let I=0,A=K.length;I<A;I++){const X=K[I];if(S(X,O,I,B)===!0){const le=X.__offset,V=Array.isArray(X.value)?X.value:[X.value];let ue=0;for(let ae=0;ae<V.length;ae++){const de=V[ae],fe=M(de);typeof de=="number"||typeof de=="boolean"?(X.__data[0]=de,r.bufferSubData(r.UNIFORM_BUFFER,le+ue,X.__data)):de.isMatrix3?(X.__data[0]=de.elements[0],X.__data[1]=de.elements[1],X.__data[2]=de.elements[2],X.__data[3]=0,X.__data[4]=de.elements[3],X.__data[5]=de.elements[4],X.__data[6]=de.elements[5],X.__data[7]=0,X.__data[8]=de.elements[6],X.__data[9]=de.elements[7],X.__data[10]=de.elements[8],X.__data[11]=0):(de.toArray(X.__data,ue),ue+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,le,X.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(C,b,P,B){const O=C.value,U=b+"_"+P;if(B[U]===void 0)return typeof O=="number"||typeof O=="boolean"?B[U]=O:B[U]=O.clone(),!0;{const K=B[U];if(typeof O=="number"||typeof O=="boolean"){if(K!==O)return B[U]=O,!0}else if(K.equals(O)===!1)return K.copy(O),!0}return!1}function E(C){const b=C.uniforms;let P=0;const B=16;for(let U=0,K=b.length;U<K;U++){const I=Array.isArray(b[U])?b[U]:[b[U]];for(let A=0,X=I.length;A<X;A++){const le=I[A],V=Array.isArray(le.value)?le.value:[le.value];for(let ue=0,ae=V.length;ue<ae;ue++){const de=V[ue],fe=M(de),k=P%B;k!==0&&B-k<fe.boundary&&(P+=B-k),le.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=P,P+=fe.storage}}}const O=P%B;return O>0&&(P+=B-O),C.__size=P,C.__cache={},this}function M(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),b}function y(C){const b=C.target;b.removeEventListener("dispose",y);const P=u.indexOf(b.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(o[b.id]),delete o[b.id],delete a[b.id]}function x(){for(const C in o)r.deleteBuffer(o[C]);u=[],o={},a={}}return{bind:d,update:h,dispose:x}}class $b{constructor(e={}){const{canvas:t=kE(),context:n=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=u;const S=new Uint32Array(4),E=new Int32Array(4);let M=null,y=null;const x=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xi,this._useLegacyLights=!1,this.toneMapping=br,this.toneMappingExposure=1;const b=this;let P=!1,B=0,O=0,U=null,K=-1,I=null;const A=new fn,X=new fn;let le=null;const V=new Mt(0);let ue=0,ae=t.width,de=t.height,fe=1,k=null,te=null;const L=new fn(0,0,ae,de),q=new fn(0,0,ae,de);let Me=!1;const Ie=new Kv;let W=!1,ce=!1;const ve=new Zt,me=new ee,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return U===null?fe:1}let Z=n;function mt(N,$){return t.getContext(N,$)}try{const N={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${md}`),t.addEventListener("webglcontextlost",w,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",J,!1),Z===null){const $="webgl2";if(Z=mt($,N),Z===null)throw mt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let je,vt,Xe,lt,et,ut,bt,z,R,se,pe,xe,Se,We,Re,Ce,Ze,be,Be,st,$e,De,tt,ct;function xt(){je=new tT(Z),je.init(),De=new Fb(Z,je),vt=new qw(Z,je,e,De),Xe=new Ub(Z),lt=new rT(Z),et=new Sb,ut=new Ob(Z,je,Xe,et,vt,De,lt),bt=new Kw(b),z=new eT(b),R=new cM(Z),tt=new Xw(Z,R),se=new nT(Z,R,lt,tt),pe=new oT(Z,se,R,lt),Be=new sT(Z,vt,ut),Ce=new Yw(et),xe=new xb(b,bt,z,je,vt,tt,Ce),Se=new jb(b,et),We=new Mb,Re=new Rb(je),be=new jw(b,bt,z,Xe,pe,v,d),Ze=new Ib(b,pe,vt),ct=new Xb(Z,lt,vt,Xe),st=new $w(Z,je,lt),$e=new iT(Z,je,lt),lt.programs=xe.programs,b.capabilities=vt,b.extensions=je,b.properties=et,b.renderLists=We,b.shadowMap=Ze,b.state=Xe,b.info=lt}xt();const nt=new Gb(b,Z);this.xr=nt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const N=je.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=je.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(N){N!==void 0&&(fe=N,this.setSize(ae,de,!1))},this.getSize=function(N){return N.set(ae,de)},this.setSize=function(N,$,oe=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=N,de=$,t.width=Math.floor(N*fe),t.height=Math.floor($*fe),oe===!0&&(t.style.width=N+"px",t.style.height=$+"px"),this.setViewport(0,0,N,$)},this.getDrawingBufferSize=function(N){return N.set(ae*fe,de*fe).floor()},this.setDrawingBufferSize=function(N,$,oe){ae=N,de=$,fe=oe,t.width=Math.floor(N*oe),t.height=Math.floor($*oe),this.setViewport(0,0,N,$)},this.getCurrentViewport=function(N){return N.copy(A)},this.getViewport=function(N){return N.copy(L)},this.setViewport=function(N,$,oe,ie){N.isVector4?L.set(N.x,N.y,N.z,N.w):L.set(N,$,oe,ie),Xe.viewport(A.copy(L).multiplyScalar(fe).round())},this.getScissor=function(N){return N.copy(q)},this.setScissor=function(N,$,oe,ie){N.isVector4?q.set(N.x,N.y,N.z,N.w):q.set(N,$,oe,ie),Xe.scissor(X.copy(q).multiplyScalar(fe).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(N){Xe.setScissorTest(Me=N)},this.setOpaqueSort=function(N){k=N},this.setTransparentSort=function(N){te=N},this.getClearColor=function(N){return N.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(N=!0,$=!0,oe=!0){let ie=0;if(N){let ne=!1;if(U!==null){const Pe=U.texture.format;ne=Pe===Fv||Pe===Ov||Pe===Uv}if(ne){const Pe=U.texture.type,ze=Pe===Cr||Pe===uo||Pe===Lv||Pe===ga||Pe===Dv||Pe===Iv,Ve=be.getClearColor(),Ke=be.getClearAlpha(),rt=Ve.r,Fe=Ve.g,ft=Ve.b;ze?(S[0]=rt,S[1]=Fe,S[2]=ft,S[3]=Ke,Z.clearBufferuiv(Z.COLOR,0,S)):(E[0]=rt,E[1]=Fe,E[2]=ft,E[3]=Ke,Z.clearBufferiv(Z.COLOR,0,E))}else ie|=Z.COLOR_BUFFER_BIT}$&&(ie|=Z.DEPTH_BUFFER_BIT),oe&&(ie|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",w,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",J,!1),We.dispose(),Re.dispose(),et.dispose(),bt.dispose(),z.dispose(),pe.dispose(),tt.dispose(),ct.dispose(),xe.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",gt),nt.removeEventListener("sessionend",Dt),wt.stop()};function w(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const N=lt.autoReset,$=Ze.enabled,oe=Ze.autoUpdate,ie=Ze.needsUpdate,ne=Ze.type;xt(),lt.autoReset=N,Ze.enabled=$,Ze.autoUpdate=oe,Ze.needsUpdate=ie,Ze.type=ne}function J(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ge(N){const $=N.target;$.removeEventListener("dispose",ge),we($)}function we(N){it(N),et.remove(N)}function it(N){const $=et.get(N).programs;$!==void 0&&($.forEach(function(oe){xe.releaseProgram(oe)}),N.isShaderMaterial&&xe.releaseShaderCache(N))}this.renderBufferDirect=function(N,$,oe,ie,ne,Pe){$===null&&($=Ae);const ze=ne.isMesh&&ne.matrixWorld.determinant()<0,Ve=Mu(N,$,oe,ie,ne);Xe.setMaterial(ie,ze);let Ke=oe.index,rt=1;if(ie.wireframe===!0){if(Ke=se.getWireframeAttribute(oe),Ke===void 0)return;rt=2}const Fe=oe.drawRange,ft=oe.attributes.position;let It=Fe.start*rt,$t=(Fe.start+Fe.count)*rt;Pe!==null&&(It=Math.max(It,Pe.start*rt),$t=Math.min($t,(Pe.start+Pe.count)*rt)),Ke!==null?(It=Math.max(It,0),$t=Math.min($t,Ke.count)):ft!=null&&(It=Math.max(It,0),$t=Math.min($t,ft.count));const en=$t-It;if(en<0||en===1/0)return;tt.setup(ne,ie,Ve,oe,Ke);let ri,_t=st;if(Ke!==null&&(ri=R.get(Ke),_t=$e,_t.setIndex(ri)),ne.isMesh)ie.wireframe===!0?(Xe.setLineWidth(ie.wireframeLinewidth*Ge()),_t.setMode(Z.LINES)):_t.setMode(Z.TRIANGLES);else if(ne.isLine){let Qe=ie.linewidth;Qe===void 0&&(Qe=1),Xe.setLineWidth(Qe*Ge()),ne.isLineSegments?_t.setMode(Z.LINES):ne.isLineLoop?_t.setMode(Z.LINE_LOOP):_t.setMode(Z.LINE_STRIP)}else ne.isPoints?_t.setMode(Z.POINTS):ne.isSprite&&_t.setMode(Z.TRIANGLES);if(ne.isBatchedMesh)ne._multiDrawInstances!==null?_t.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances):_t.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)_t.renderInstances(It,en,ne.count);else if(oe.isInstancedBufferGeometry){const Qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,pn=Math.min(oe.instanceCount,Qe);_t.renderInstances(It,en,pn)}else _t.render(It,en)};function ot(N,$,oe){N.transparent===!0&&N.side===ji&&N.forceSinglePass===!1?(N.side=On,N.needsUpdate=!0,Ci(N,$,oe),N.side=Ar,N.needsUpdate=!0,Ci(N,$,oe),N.side=ji):Ci(N,$,oe)}this.compile=function(N,$,oe=null){oe===null&&(oe=N),y=Re.get(oe),y.init($),C.push(y),oe.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),N!==oe&&N.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),y.setupLights(b._useLegacyLights);const ie=new Set;return N.traverse(function(ne){const Pe=ne.material;if(Pe)if(Array.isArray(Pe))for(let ze=0;ze<Pe.length;ze++){const Ve=Pe[ze];ot(Ve,oe,ne),ie.add(Ve)}else ot(Pe,oe,ne),ie.add(Pe)}),C.pop(),y=null,ie},this.compileAsync=function(N,$,oe=null){const ie=this.compile(N,$,oe);return new Promise(ne=>{function Pe(){if(ie.forEach(function(ze){et.get(ze).currentProgram.isReady()&&ie.delete(ze)}),ie.size===0){ne(N);return}setTimeout(Pe,10)}je.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let At=null;function Bt(N){At&&At(N)}function gt(){wt.stop()}function Dt(){wt.start()}const wt=new Zv;wt.setAnimationLoop(Bt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(N){At=N,nt.setAnimationLoop(N),N===null?wt.stop():wt.start()},nt.addEventListener("sessionstart",gt),nt.addEventListener("sessionend",Dt),this.render=function(N,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera($),$=nt.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,$,U),y=Re.get(N,C.length),y.init($),C.push(y),ve.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ie.setFromProjectionMatrix(ve),ce=this.localClippingEnabled,W=Ce.init(this.clippingPlanes,ce),M=We.get(N,x.length),M.init(),x.push(M),Cn(N,$,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(k,te);const oe=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1;oe&&be.addToRenderList(M,N),this.info.render.frame++,W===!0&&Ce.beginShadows();const ie=y.state.shadowsArray;Ze.render(ie,N,$),W===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=M.opaque,Pe=M.transmissive;if(y.setupLights(b._useLegacyLights),$.isArrayCamera){const ze=$.cameras;if(Pe.length>0)for(let Ve=0,Ke=ze.length;Ve<Ke;Ve++){const rt=ze[Ve];Rn(ne,Pe,N,rt)}oe&&be.render(N);for(let Ve=0,Ke=ze.length;Ve<Ke;Ve++){const rt=ze[Ve];hn(M,N,rt,rt.viewport)}}else Pe.length>0&&Rn(ne,Pe,N,$),oe&&be.render(N),hn(M,N,$);U!==null&&(ut.updateMultisampleRenderTarget(U),ut.updateRenderTargetMipmap(U)),N.isScene===!0&&N.onAfterRender(b,N,$),tt.resetDefaultState(),K=-1,I=null,C.pop(),C.length>0?(y=C[C.length-1],W===!0&&Ce.setGlobalState(b.clippingPlanes,y.state.camera)):y=null,x.pop(),x.length>0?M=x[x.length-1]:M=null};function Cn(N,$,oe,ie){if(N.visible===!1)return;if(N.layers.test($.layers)){if(N.isGroup)oe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update($);else if(N.isLight)y.pushLight(N),N.castShadow&&y.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Ie.intersectsSprite(N)){ie&&me.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ve);const ze=pe.update(N),Ve=N.material;Ve.visible&&M.push(N,ze,Ve,oe,me.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Ie.intersectsObject(N))){const ze=pe.update(N),Ve=N.material;if(ie&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),me.copy(N.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),me.copy(ze.boundingSphere.center)),me.applyMatrix4(N.matrixWorld).applyMatrix4(ve)),Array.isArray(Ve)){const Ke=ze.groups;for(let rt=0,Fe=Ke.length;rt<Fe;rt++){const ft=Ke[rt],It=Ve[ft.materialIndex];It&&It.visible&&M.push(N,ze,It,oe,me.z,ft)}}else Ve.visible&&M.push(N,ze,Ve,oe,me.z,null)}}const Pe=N.children;for(let ze=0,Ve=Pe.length;ze<Ve;ze++)Cn(Pe[ze],$,oe,ie)}function hn(N,$,oe,ie){const ne=N.opaque,Pe=N.transmissive,ze=N.transparent;y.setupLightsView(oe),W===!0&&Ce.setGlobalState(b.clippingPlanes,oe),ie&&Xe.viewport(A.copy(ie)),ne.length>0&&ni(ne,$,oe),Pe.length>0&&ni(Pe,$,oe),ze.length>0&&ni(ze,$,oe),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Rn(N,$,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ie.id]===void 0&&(y.state.transmissionRenderTarget[ie.id]=new os(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?vu:Cr,minFilter:rs,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Pe=y.state.transmissionRenderTarget[ie.id],ze=ie.viewport||A;Pe.setSize(ze.z,ze.w);const Ve=b.getRenderTarget();b.setRenderTarget(Pe),b.getClearColor(V),ue=b.getClearAlpha(),ue<1&&b.setClearColor(16777215,.5),b.clear();const Ke=b.toneMapping;b.toneMapping=br;const rt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),y.setupLightsView(ie),W===!0&&Ce.setGlobalState(b.clippingPlanes,ie),ni(N,oe,ie),ut.updateMultisampleRenderTarget(Pe),ut.updateRenderTargetMipmap(Pe),je.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ft=0,It=$.length;ft<It;ft++){const $t=$[ft],en=$t.object,ri=$t.geometry,_t=$t.material,Qe=$t.group;if(_t.side===ji&&en.layers.test(ie.layers)){const pn=_t.side;_t.side=On,_t.needsUpdate=!0,ii(en,oe,ie,ri,_t,Qe),_t.side=pn,_t.needsUpdate=!0,Fe=!0}}Fe===!0&&(ut.updateMultisampleRenderTarget(Pe),ut.updateRenderTargetMipmap(Pe))}b.setRenderTarget(Ve),b.setClearColor(V,ue),rt!==void 0&&(ie.viewport=rt),b.toneMapping=Ke}function ni(N,$,oe){const ie=$.isScene===!0?$.overrideMaterial:null;for(let ne=0,Pe=N.length;ne<Pe;ne++){const ze=N[ne],Ve=ze.object,Ke=ze.geometry,rt=ie===null?ze.material:ie,Fe=ze.group;Ve.layers.test(oe.layers)&&ii(Ve,$,oe,Ke,rt,Fe)}}function ii(N,$,oe,ie,ne,Pe){N.onBeforeRender(b,$,oe,ie,ne,Pe),N.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ne.onBeforeRender(b,$,oe,ie,N,Pe),ne.transparent===!0&&ne.side===ji&&ne.forceSinglePass===!1?(ne.side=On,ne.needsUpdate=!0,b.renderBufferDirect(oe,$,ie,ne,N,Pe),ne.side=Ar,ne.needsUpdate=!0,b.renderBufferDirect(oe,$,ie,ne,N,Pe),ne.side=ji):b.renderBufferDirect(oe,$,ie,ne,N,Pe),N.onAfterRender(b,$,oe,ie,ne,Pe)}function Ci(N,$,oe){$.isScene!==!0&&($=Ae);const ie=et.get(N),ne=y.state.lights,Pe=y.state.shadowsArray,ze=ne.state.version,Ve=xe.getParameters(N,ne.state,Pe,$,oe),Ke=xe.getProgramCacheKey(Ve);let rt=ie.programs;ie.environment=N.isMeshStandardMaterial?$.environment:null,ie.fog=$.fog,ie.envMap=(N.isMeshStandardMaterial?z:bt).get(N.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&N.envMap===null?$.environmentRotation:N.envMapRotation,rt===void 0&&(N.addEventListener("dispose",ge),rt=new Map,ie.programs=rt);let Fe=rt.get(Ke);if(Fe!==void 0){if(ie.currentProgram===Fe&&ie.lightsStateVersion===ze)return cs(N,Ve),Fe}else Ve.uniforms=xe.getUniforms(N),N.onBuild(oe,Ve,b),N.onBeforeCompile(Ve,b),Fe=xe.acquireProgram(Ve,Ke),rt.set(Ke,Fe),ie.uniforms=Ve.uniforms;const ft=ie.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ft.clippingPlanes=Ce.uniform),cs(N,Ve),ie.needsLights=Tu(N),ie.lightsStateVersion=ze,ie.needsLights&&(ft.ambientLightColor.value=ne.state.ambient,ft.lightProbe.value=ne.state.probe,ft.directionalLights.value=ne.state.directional,ft.directionalLightShadows.value=ne.state.directionalShadow,ft.spotLights.value=ne.state.spot,ft.spotLightShadows.value=ne.state.spotShadow,ft.rectAreaLights.value=ne.state.rectArea,ft.ltc_1.value=ne.state.rectAreaLTC1,ft.ltc_2.value=ne.state.rectAreaLTC2,ft.pointLights.value=ne.state.point,ft.pointLightShadows.value=ne.state.pointShadow,ft.hemisphereLights.value=ne.state.hemi,ft.directionalShadowMap.value=ne.state.directionalShadowMap,ft.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ft.spotShadowMap.value=ne.state.spotShadowMap,ft.spotLightMatrix.value=ne.state.spotLightMatrix,ft.spotLightMap.value=ne.state.spotLightMap,ft.pointShadowMap.value=ne.state.pointShadowMap,ft.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.currentProgram=Fe,ie.uniformsList=null,Fe}function Dr(N){if(N.uniformsList===null){const $=N.currentProgram.getUniforms();N.uniformsList=Kl.seqWithValue($.seq,N.uniforms)}return N.uniformsList}function cs(N,$){const oe=et.get(N);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function Mu(N,$,oe,ie,ne){$.isScene!==!0&&($=Ae),ut.resetTextureUnits();const Pe=$.fog,ze=ie.isMeshStandardMaterial?$.environment:null,Ve=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Lr,Ke=(ie.isMeshStandardMaterial?z:bt).get(ie.envMap||ze),rt=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Fe=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ft=!!oe.morphAttributes.position,It=!!oe.morphAttributes.normal,$t=!!oe.morphAttributes.color;let en=br;ie.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(en=b.toneMapping);const ri=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,_t=ri!==void 0?ri.length:0,Qe=et.get(ie),pn=y.state.lights;if(W===!0&&(ce===!0||N!==I)){const an=N===I&&ie.id===K;Ce.setState(ie,N,an)}let Ct=!1;ie.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==pn.state.version||Qe.outputColorSpace!==Ve||ne.isBatchedMesh&&Qe.batching===!1||!ne.isBatchedMesh&&Qe.batching===!0||ne.isInstancedMesh&&Qe.instancing===!1||!ne.isInstancedMesh&&Qe.instancing===!0||ne.isSkinnedMesh&&Qe.skinning===!1||!ne.isSkinnedMesh&&Qe.skinning===!0||ne.isInstancedMesh&&Qe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Qe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Qe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Qe.instancingMorph===!1&&ne.morphTexture!==null||Qe.envMap!==Ke||ie.fog===!0&&Qe.fog!==Pe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ce.numPlanes||Qe.numIntersection!==Ce.numIntersection)||Qe.vertexAlphas!==rt||Qe.vertexTangents!==Fe||Qe.morphTargets!==ft||Qe.morphNormals!==It||Qe.morphColors!==$t||Qe.toneMapping!==en||Qe.morphTargetsCount!==_t)&&(Ct=!0):(Ct=!0,Qe.__version=ie.version);let qt=Qe.currentProgram;Ct===!0&&(qt=Ci(ie,$,ne));let ya=!1,Ir=!1,go=!1;const Ht=qt.getUniforms(),zn=Qe.uniforms;if(Xe.useProgram(qt.program)&&(ya=!0,Ir=!0,go=!0),ie.id!==K&&(K=ie.id,Ir=!0),ya||I!==N){Ht.setValue(Z,"projectionMatrix",N.projectionMatrix),Ht.setValue(Z,"viewMatrix",N.matrixWorldInverse);const an=Ht.map.cameraPosition;an!==void 0&&an.setValue(Z,me.setFromMatrixPosition(N.matrixWorld)),vt.logarithmicDepthBuffer&&Ht.setValue(Z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ht.setValue(Z,"isOrthographic",N.isOrthographicCamera===!0),I!==N&&(I=N,Ir=!0,go=!0)}if(ne.isSkinnedMesh){Ht.setOptional(Z,ne,"bindMatrix"),Ht.setOptional(Z,ne,"bindMatrixInverse");const an=ne.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ht.setValue(Z,"boneTexture",an.boneTexture,ut))}ne.isBatchedMesh&&(Ht.setOptional(Z,ne,"batchingTexture"),Ht.setValue(Z,"batchingTexture",ne._matricesTexture,ut));const Ri=oe.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Be.update(ne,oe,qt),(Ir||Qe.receiveShadow!==ne.receiveShadow)&&(Qe.receiveShadow=ne.receiveShadow,Ht.setValue(Z,"receiveShadow",ne.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(zn.envMap.value=Ke,zn.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&$.environment!==null&&(zn.envMapIntensity.value=$.environmentIntensity),Ir&&(Ht.setValue(Z,"toneMappingExposure",b.toneMappingExposure),Qe.needsLights&&wu(zn,go),Pe&&ie.fog===!0&&Se.refreshFogUniforms(zn,Pe),Se.refreshMaterialUniforms(zn,ie,fe,de,y.state.transmissionRenderTarget[N.id]),Kl.upload(Z,Dr(Qe),zn,ut)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Kl.upload(Z,Dr(Qe),zn,ut),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ht.setValue(Z,"center",ne.center),Ht.setValue(Z,"modelViewMatrix",ne.modelViewMatrix),Ht.setValue(Z,"normalMatrix",ne.normalMatrix),Ht.setValue(Z,"modelMatrix",ne.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const an=ie.uniformsGroups;for(let vo=0,bu=an.length;vo<bu;vo++){const fs=an[vo];ct.update(fs,qt),ct.bind(fs,qt)}}return qt}function wu(N,$){N.ambientLightColor.needsUpdate=$,N.lightProbe.needsUpdate=$,N.directionalLights.needsUpdate=$,N.directionalLightShadows.needsUpdate=$,N.pointLights.needsUpdate=$,N.pointLightShadows.needsUpdate=$,N.spotLights.needsUpdate=$,N.spotLightShadows.needsUpdate=$,N.rectAreaLights.needsUpdate=$,N.hemisphereLights.needsUpdate=$}function Tu(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(N,$,oe){et.get(N.texture).__webglTexture=$,et.get(N.depthTexture).__webglTexture=oe;const ie=et.get(N);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=oe===void 0,ie.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,$){const oe=et.get(N);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(N,$=0,oe=0){U=N,B=$,O=oe;let ie=!0,ne=null,Pe=!1,ze=!1;if(N){const Ke=et.get(N);Ke.__useDefaultFramebuffer!==void 0?(Xe.bindFramebuffer(Z.FRAMEBUFFER,null),ie=!1):Ke.__webglFramebuffer===void 0?ut.setupRenderTarget(N):Ke.__hasExternalTextures&&ut.rebindTextures(N,et.get(N.texture).__webglTexture,et.get(N.depthTexture).__webglTexture);const rt=N.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(ze=!0);const Fe=et.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Fe[$])?ne=Fe[$][oe]:ne=Fe[$],Pe=!0):N.samples>0&&ut.useMultisampledRTT(N)===!1?ne=et.get(N).__webglMultisampledFramebuffer:Array.isArray(Fe)?ne=Fe[oe]:ne=Fe,A.copy(N.viewport),X.copy(N.scissor),le=N.scissorTest}else A.copy(L).multiplyScalar(fe).floor(),X.copy(q).multiplyScalar(fe).floor(),le=Me;if(Xe.bindFramebuffer(Z.FRAMEBUFFER,ne)&&ie&&Xe.drawBuffers(N,ne),Xe.viewport(A),Xe.scissor(X),Xe.setScissorTest(le),Pe){const Ke=et.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ke.__webglTexture,oe)}else if(ze){const Ke=et.get(N.texture),rt=$||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ke.__webglTexture,oe||0,rt)}K=-1},this.readRenderTargetPixels=function(N,$,oe,ie,ne,Pe,ze){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=et.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){Xe.bindFramebuffer(Z.FRAMEBUFFER,Ve);try{const Ke=N.texture,rt=Ke.format,Fe=Ke.type;if(!vt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=N.width-ie&&oe>=0&&oe<=N.height-ne&&Z.readPixels($,oe,ie,ne,De.convert(rt),De.convert(Fe),Pe)}finally{const Ke=U!==null?et.get(U).__webglFramebuffer:null;Xe.bindFramebuffer(Z.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(N,$,oe=0){const ie=Math.pow(2,-oe),ne=Math.floor($.image.width*ie),Pe=Math.floor($.image.height*ie);ut.setTexture2D($,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,oe,0,0,N.x,N.y,ne,Pe),Xe.unbindTexture()},this.copyTextureToTexture=function(N,$,oe,ie=0){const ne=$.image.width,Pe=$.image.height,ze=De.convert(oe.format),Ve=De.convert(oe.type);ut.setTexture2D(oe,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,oe.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,oe.unpackAlignment),$.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ie,N.x,N.y,ne,Pe,ze,Ve,$.image.data):$.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ie,N.x,N.y,$.mipmaps[0].width,$.mipmaps[0].height,ze,$.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,ie,N.x,N.y,ze,Ve,$.image),ie===0&&oe.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Xe.unbindTexture()},this.copyTextureToTexture3D=function(N,$,oe,ie,ne=0){const Pe=N.max.x-N.min.x,ze=N.max.y-N.min.y,Ve=N.max.z-N.min.z,Ke=De.convert(ie.format),rt=De.convert(ie.type);let Fe;if(ie.isData3DTexture)ut.setTexture3D(ie,0),Fe=Z.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)ut.setTexture2DArray(ie,0),Fe=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ie.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ie.unpackAlignment);const ft=Z.getParameter(Z.UNPACK_ROW_LENGTH),It=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),$t=Z.getParameter(Z.UNPACK_SKIP_PIXELS),en=Z.getParameter(Z.UNPACK_SKIP_ROWS),ri=Z.getParameter(Z.UNPACK_SKIP_IMAGES),_t=oe.isCompressedTexture?oe.mipmaps[ne]:oe.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,_t.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,_t.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,N.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,N.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,N.min.z),oe.isDataTexture||oe.isData3DTexture?Z.texSubImage3D(Fe,ne,$.x,$.y,$.z,Pe,ze,Ve,Ke,rt,_t.data):ie.isCompressedArrayTexture?Z.compressedTexSubImage3D(Fe,ne,$.x,$.y,$.z,Pe,ze,Ve,Ke,_t.data):Z.texSubImage3D(Fe,ne,$.x,$.y,$.z,Pe,ze,Ve,Ke,rt,_t),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,ft),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,It),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,$t),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,en),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,ri),ne===0&&ie.generateMipmaps&&Z.generateMipmap(Fe),Xe.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?ut.setTextureCube(N,0):N.isData3DTexture?ut.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ut.setTexture2DArray(N,0):ut.setTexture2D(N,0),Xe.unbindTexture()},this.resetState=function(){B=0,O=0,U=null,Xe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===gd?"display-p3":"srgb",t.unpackColorSpace=Tt.workingColorSpace===_u?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qb extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sd extends Nr{constructor(e=1,t=32,n=16,o=0,a=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:o,phiLength:a,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(u+c,Math.PI);let h=0;const p=[],g=new ee,v=new ee,S=[],E=[],M=[],y=[];for(let x=0;x<=n;x++){const C=[],b=x/n;let P=0;x===0&&u===0?P=.5/t:x===n&&d===Math.PI&&(P=-.5/t);for(let B=0;B<=t;B++){const O=B/t;g.x=-e*Math.cos(o+O*a)*Math.sin(u+b*c),g.y=e*Math.cos(u+b*c),g.z=e*Math.sin(o+O*a)*Math.sin(u+b*c),E.push(g.x,g.y,g.z),v.copy(g).normalize(),M.push(v.x,v.y,v.z),y.push(O+P,1-b),C.push(h++)}p.push(C)}for(let x=0;x<n;x++)for(let C=0;C<t;C++){const b=p[x][C+1],P=p[x][C],B=p[x+1][C],O=p[x+1][C+1];(x!==0||u>0)&&S.push(b,P,O),(x!==n-1||d<Math.PI)&&S.push(P,B,O)}this.setIndex(S),this.setAttribute("position",new Ai(E,3)),this.setAttribute("normal",new Ai(M,3)),this.setAttribute("uv",new Ai(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Hg={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Yb{constructor(e,t,n){const o=this;let a=!1,u=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){c++,a===!1&&o.onStart!==void 0&&o.onStart(p,u,c),a=!0},this.itemEnd=function(p){u++,o.onProgress!==void 0&&o.onProgress(p,u,c),u===c&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return h.push(p,g),this},this.removeHandler=function(p){const g=h.indexOf(p);return g!==-1&&h.splice(g,2),this},this.getHandler=function(p){for(let g=0,v=h.length;g<v;g+=2){const S=h[g],E=h[g+1];if(S.global&&(S.lastIndex=0),S.test(p))return E}return null}}}const Kb=new Yb;class Ed{constructor(e){this.manager=e!==void 0?e:Kb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(o,a){n.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ed.DEFAULT_MATERIAL_NAME="__DEFAULT";class Zb extends Ed{constructor(e){super(e)}load(e,t,n,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=Hg.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=da("img");function d(){p(),Hg.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(g){p(),o&&o(g),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",d,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class Qb extends Ed{constructor(e){super(e)}load(e,t,n,o){const a=new An,u=new Zb(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,o),a}}class Jb extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class eA extends Jb{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vg{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(En(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);const Gg={type:"change"},Wf={type:"start"},Wg={type:"end"},$l=new Vv,jg=new xr,tA=Math.cos(70*FE.DEG2RAD);class nA extends us{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",Ze),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ze),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Gg),n.update(),a=o.NONE},this.update=function(){const w=new ee,j=new as().setFromUnitVectors(e.up,new ee(0,1,0)),J=j.clone().invert(),ge=new ee,we=new as,it=new ee,ot=2*Math.PI;return function(Bt=null){const gt=n.object.position;w.copy(gt).sub(n.target),w.applyQuaternion(j),c.setFromVector3(w),n.autoRotate&&a===o.NONE&&le(A(Bt)),n.enableDamping?(c.theta+=d.theta*n.dampingFactor,c.phi+=d.phi*n.dampingFactor):(c.theta+=d.theta,c.phi+=d.phi);let Dt=n.minAzimuthAngle,wt=n.maxAzimuthAngle;isFinite(Dt)&&isFinite(wt)&&(Dt<-Math.PI?Dt+=ot:Dt>Math.PI&&(Dt-=ot),wt<-Math.PI?wt+=ot:wt>Math.PI&&(wt-=ot),Dt<=wt?c.theta=Math.max(Dt,Math.min(wt,c.theta)):c.theta=c.theta>(Dt+wt)/2?Math.max(Dt,c.theta):Math.min(wt,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Cn=!1;if(n.zoomToCursor&&O||n.object.isOrthographicCamera)c.radius=L(c.radius);else{const hn=c.radius;c.radius=L(c.radius*h),Cn=hn!=c.radius}if(w.setFromSpherical(c),w.applyQuaternion(J),gt.copy(n.target).add(w),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),p.set(0,0,0)),n.zoomToCursor&&O){let hn=null;if(n.object.isPerspectiveCamera){const Rn=w.length();hn=L(Rn*h);const ni=Rn-hn;n.object.position.addScaledVector(P,ni),n.object.updateMatrixWorld(),Cn=!!ni}else if(n.object.isOrthographicCamera){const Rn=new ee(B.x,B.y,0);Rn.unproject(n.object);const ni=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),Cn=ni!==n.object.zoom;const ii=new ee(B.x,B.y,0);ii.unproject(n.object),n.object.position.sub(ii).add(Rn),n.object.updateMatrixWorld(),hn=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;hn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(hn).add(n.object.position):($l.origin.copy(n.object.position),$l.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot($l.direction))<tA?e.lookAt(n.target):(jg.setFromNormalAndCoplanarPoint(n.object.up,n.target),$l.intersectPlane(jg,n.target))))}else if(n.object.isOrthographicCamera){const hn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),hn!==n.object.zoom&&(n.object.updateProjectionMatrix(),Cn=!0)}return h=1,O=!1,Cn||ge.distanceToSquared(n.object.position)>u||8*(1-we.dot(n.object.quaternion))>u||it.distanceToSquared(n.target)>u?(n.dispatchEvent(Gg),ge.copy(n.object.position),we.copy(n.object.quaternion),it.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",st),n.domElement.removeEventListener("pointerdown",z),n.domElement.removeEventListener("pointercancel",se),n.domElement.removeEventListener("wheel",Se),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",se),n.domElement.getRootNode().removeEventListener("keydown",Re,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ze),n._domElementKeyEvents=null)};const n=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const u=1e-6,c=new Vg,d=new Vg;let h=1;const p=new ee,g=new at,v=new at,S=new at,E=new at,M=new at,y=new at,x=new at,C=new at,b=new at,P=new ee,B=new at;let O=!1;const U=[],K={};let I=!1;function A(w){return w!==null?2*Math.PI/60*n.autoRotateSpeed*w:2*Math.PI/60/60*n.autoRotateSpeed}function X(w){const j=Math.abs(w*.01);return Math.pow(.95,n.zoomSpeed*j)}function le(w){d.theta-=w}function V(w){d.phi-=w}const ue=function(){const w=new ee;return function(J,ge){w.setFromMatrixColumn(ge,0),w.multiplyScalar(-J),p.add(w)}}(),ae=function(){const w=new ee;return function(J,ge){n.screenSpacePanning===!0?w.setFromMatrixColumn(ge,1):(w.setFromMatrixColumn(ge,0),w.crossVectors(n.object.up,w)),w.multiplyScalar(J),p.add(w)}}(),de=function(){const w=new ee;return function(J,ge){const we=n.domElement;if(n.object.isPerspectiveCamera){const it=n.object.position;w.copy(it).sub(n.target);let ot=w.length();ot*=Math.tan(n.object.fov/2*Math.PI/180),ue(2*J*ot/we.clientHeight,n.object.matrix),ae(2*ge*ot/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ue(J*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),ae(ge*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function fe(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(w,j){if(!n.zoomToCursor)return;O=!0;const J=n.domElement.getBoundingClientRect(),ge=w-J.left,we=j-J.top,it=J.width,ot=J.height;B.x=ge/it*2-1,B.y=-(we/ot)*2+1,P.set(B.x,B.y,1).unproject(n.object).sub(n.object.position).normalize()}function L(w){return Math.max(n.minDistance,Math.min(n.maxDistance,w))}function q(w){g.set(w.clientX,w.clientY)}function Me(w){te(w.clientX,w.clientX),x.set(w.clientX,w.clientY)}function Ie(w){E.set(w.clientX,w.clientY)}function W(w){v.set(w.clientX,w.clientY),S.subVectors(v,g).multiplyScalar(n.rotateSpeed);const j=n.domElement;le(2*Math.PI*S.x/j.clientHeight),V(2*Math.PI*S.y/j.clientHeight),g.copy(v),n.update()}function ce(w){C.set(w.clientX,w.clientY),b.subVectors(C,x),b.y>0?fe(X(b.y)):b.y<0&&k(X(b.y)),x.copy(C),n.update()}function ve(w){M.set(w.clientX,w.clientY),y.subVectors(M,E).multiplyScalar(n.panSpeed),de(y.x,y.y),E.copy(M),n.update()}function me(w){te(w.clientX,w.clientY),w.deltaY<0?k(X(w.deltaY)):w.deltaY>0&&fe(X(w.deltaY)),n.update()}function Ae(w){let j=!1;switch(w.code){case n.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):de(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):de(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?le(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):de(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?le(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):de(-n.keyPanSpeed,0),j=!0;break}j&&(w.preventDefault(),n.update())}function Ge(w){if(U.length===1)g.set(w.pageX,w.pageY);else{const j=xt(w),J=.5*(w.pageX+j.x),ge=.5*(w.pageY+j.y);g.set(J,ge)}}function Z(w){if(U.length===1)E.set(w.pageX,w.pageY);else{const j=xt(w),J=.5*(w.pageX+j.x),ge=.5*(w.pageY+j.y);E.set(J,ge)}}function mt(w){const j=xt(w),J=w.pageX-j.x,ge=w.pageY-j.y,we=Math.sqrt(J*J+ge*ge);x.set(0,we)}function je(w){n.enableZoom&&mt(w),n.enablePan&&Z(w)}function vt(w){n.enableZoom&&mt(w),n.enableRotate&&Ge(w)}function Xe(w){if(U.length==1)v.set(w.pageX,w.pageY);else{const J=xt(w),ge=.5*(w.pageX+J.x),we=.5*(w.pageY+J.y);v.set(ge,we)}S.subVectors(v,g).multiplyScalar(n.rotateSpeed);const j=n.domElement;le(2*Math.PI*S.x/j.clientHeight),V(2*Math.PI*S.y/j.clientHeight),g.copy(v)}function lt(w){if(U.length===1)M.set(w.pageX,w.pageY);else{const j=xt(w),J=.5*(w.pageX+j.x),ge=.5*(w.pageY+j.y);M.set(J,ge)}y.subVectors(M,E).multiplyScalar(n.panSpeed),de(y.x,y.y),E.copy(M)}function et(w){const j=xt(w),J=w.pageX-j.x,ge=w.pageY-j.y,we=Math.sqrt(J*J+ge*ge);C.set(0,we),b.set(0,Math.pow(C.y/x.y,n.zoomSpeed)),fe(b.y),x.copy(C);const it=(w.pageX+j.x)*.5,ot=(w.pageY+j.y)*.5;te(it,ot)}function ut(w){n.enableZoom&&et(w),n.enablePan&&lt(w)}function bt(w){n.enableZoom&&et(w),n.enableRotate&&Xe(w)}function z(w){n.enabled!==!1&&(U.length===0&&(n.domElement.setPointerCapture(w.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",se)),!tt(w)&&($e(w),w.pointerType==="touch"?be(w):pe(w)))}function R(w){n.enabled!==!1&&(w.pointerType==="touch"?Be(w):xe(w))}function se(w){switch(De(w),U.length){case 0:n.domElement.releasePointerCapture(w.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",se),n.dispatchEvent(Wg),a=o.NONE;break;case 1:const j=U[0],J=K[j];be({pointerId:j,pageX:J.x,pageY:J.y});break}}function pe(w){let j;switch(w.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Is.DOLLY:if(n.enableZoom===!1)return;Me(w),a=o.DOLLY;break;case Is.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enablePan===!1)return;Ie(w),a=o.PAN}else{if(n.enableRotate===!1)return;q(w),a=o.ROTATE}break;case Is.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enableRotate===!1)return;q(w),a=o.ROTATE}else{if(n.enablePan===!1)return;Ie(w),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&n.dispatchEvent(Wf)}function xe(w){switch(a){case o.ROTATE:if(n.enableRotate===!1)return;W(w);break;case o.DOLLY:if(n.enableZoom===!1)return;ce(w);break;case o.PAN:if(n.enablePan===!1)return;ve(w);break}}function Se(w){n.enabled===!1||n.enableZoom===!1||a!==o.NONE||(w.preventDefault(),n.dispatchEvent(Wf),me(We(w)),n.dispatchEvent(Wg))}function We(w){const j=w.deltaMode,J={clientX:w.clientX,clientY:w.clientY,deltaY:w.deltaY};switch(j){case 1:J.deltaY*=16;break;case 2:J.deltaY*=100;break}return w.ctrlKey&&!I&&(J.deltaY*=10),J}function Re(w){w.key==="Control"&&(I=!0,n.domElement.getRootNode().addEventListener("keyup",Ce,{passive:!0,capture:!0}))}function Ce(w){w.key==="Control"&&(I=!1,n.domElement.getRootNode().removeEventListener("keyup",Ce,{passive:!0,capture:!0}))}function Ze(w){n.enabled===!1||n.enablePan===!1||Ae(w)}function be(w){switch(ct(w),U.length){case 1:switch(n.touches.ONE){case Us.ROTATE:if(n.enableRotate===!1)return;Ge(w),a=o.TOUCH_ROTATE;break;case Us.PAN:if(n.enablePan===!1)return;Z(w),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(n.touches.TWO){case Us.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;je(w),a=o.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;vt(w),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&n.dispatchEvent(Wf)}function Be(w){switch(ct(w),a){case o.TOUCH_ROTATE:if(n.enableRotate===!1)return;Xe(w),n.update();break;case o.TOUCH_PAN:if(n.enablePan===!1)return;lt(w),n.update();break;case o.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ut(w),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;bt(w),n.update();break;default:a=o.NONE}}function st(w){n.enabled!==!1&&w.preventDefault()}function $e(w){U.push(w.pointerId)}function De(w){delete K[w.pointerId];for(let j=0;j<U.length;j++)if(U[j]==w.pointerId){U.splice(j,1);return}}function tt(w){for(let j=0;j<U.length;j++)if(U[j]==w.pointerId)return!0;return!1}function ct(w){let j=K[w.pointerId];j===void 0&&(j=new at,K[w.pointerId]=j),j.set(w.pageX,w.pageY)}function xt(w){const j=w.pointerId===U[0]?U[1]:U[0];return K[j]}n.domElement.addEventListener("contextmenu",st),n.domElement.addEventListener("pointerdown",z),n.domElement.addEventListener("pointercancel",se),n.domElement.addEventListener("wheel",Se,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Re,{passive:!0,capture:!0}),this.update()}}const iA=()=>{const r=he.useRef(null),e=he.useRef(null);return he.useEffect(()=>{const t=new qb,n=new ei(75,window.innerWidth/window.innerHeight,.3,2e3),o=new $b({alpha:!0});o.setSize(window.innerWidth,window.innerHeight);const a=new eA(16777215,.5);t.add(a);const u=new Sd(2.5,25,25),c=new Qb().load("/img/01.jpg"),d=new yd({map:c}),h=new wi(u,d);t.add(h),e.current=h,n.position.z=10;const p=new nA(n,o.domElement);p.enableDamping=!0,p.dampingFactor=.25,p.rotateSpeed=.35;const g=()=>{requestAnimationFrame(g),e.current.rotateY(.005),e.current.position.y=Math.sin(Date.now()*.001)*.5,o.render(t,n),p.update()};g(),r.current.appendChild(o.domElement);const v=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),p.dispose()}},[]),D.jsxs(D.Fragment,{children:[D.jsx("div",{ref:r,style:{position:"absolute",className:"canvasimg",backgroundSize:"cover",left:0,marginTop:"20px",zIndex:1,backgroundImage:"url(/img/espacio1.avif)"}}),D.jsxs("div",{className:"title",children:[D.jsx("h1",{className:"Error_title",children:"Error 404"}),D.jsx("img",{src:"img/Ovni retro.png",className:"ovni"}),D.jsxs("h3",{className:"parr_404",children:["Houston lo sentimos pero ha ocurrido algo desconocido,",D.jsx("br",{})," la página que intentas acceder parece ser que no existe, por favor vuelve a inicio, pero si quieres",D.jsx("br",{})," puedes jugar un rato mientras solucionamos este problema"]}),D.jsx("button",{className:"play",children:"PLAY"})]})]})},rA=()=>D.jsx(D.Fragment,{children:D.jsxs("div",{className:"flex justify-center md:flex-row ",children:[D.jsx("img",{src:"img/logo2.png",className:"w-20 h-20",alt:"logo-imagen"}),D.jsxs("div",{className:"icons_social",children:[D.jsx("i",{className:"pi pi-instagram",style:{color:"#e040a4"}}),D.jsx("i",{className:"pi pi-facebook",style:{color:"#e040a4"}}),D.jsx("i",{className:"pi pi-github",style:{color:"#e040a4"}}),D.jsx("i",{className:"pi pi-telegram",style:{color:"#e040a4"}})]}),D.jsx("div",{className:"contacto_footer",children:D.jsxs("h3",{className:"dev_nombre",children:[" Diseñadora página web y desarrollor Web:",D.jsx("br",{})," Andrea Hernández ",D.jsx("br",{}),"©2024 Andrea Hernández | All Rights Reserved "]})})]})}),sA=()=>D.jsx(D.Fragment,{children:D.jsxs(Gy,{basename:"/my-portfolio",children:[D.jsx(mS,{}),D.jsxs(Uy,{children:[D.jsx(yi,{path:"/",element:D.jsx(ym,{})}),D.jsx(yi,{path:"/inicio",element:D.jsx(ym,{})}),D.jsx(yi,{path:"/sobremi",element:D.jsx(cS,{})}),D.jsx(yi,{path:"/queofrezco",element:D.jsx(tS,{})}),D.jsx(yi,{path:"/skills",element:D.jsx(fS,{})}),D.jsx(yi,{path:"/certificaciones",element:D.jsx(pS,{})}),D.jsx(yi,{path:"/proyectos",element:D.jsx(dS,{})}),D.jsx(yi,{path:"/contacto",element:D.jsx(hS,{})}),D.jsx(yi,{path:"*",element:D.jsx(iA,{})})]}),D.jsx(rA,{})]})}),oA={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){console&&console[r]&&console[r].apply(console,e)}};class ou{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||oA,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,o){return o&&!this.debug?null:(typeof e[0]=="string"&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new ou(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ou(this.logger,e)}}var Ti=new ou;class Eu{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const o=this.observers[n].get(t)||0;this.observers[n].set(t,o+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(u=>{let[c,d]=u;for(let h=0;h<d;h++)c(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[c,d]=u;for(let h=0;h<d;h++)c.apply(c,[e,...n])})}}function ta(){let r,e;const t=new Promise((n,o)=>{r=n,e=o});return t.resolve=r,t.reject=e,t}function Xg(r){return r==null?"":""+r}function aA(r,e,t){r.forEach(n=>{e[n]&&(t[n]=e[n])})}const lA=/###/g;function sa(r,e,t){function n(c){return c&&c.indexOf("###")>-1?c.replace(lA,"."):c}function o(){return!r||typeof r=="string"}const a=typeof e!="string"?e:e.split(".");let u=0;for(;u<a.length-1;){if(o())return{};const c=n(a[u]);!r[c]&&t&&(r[c]=new t),Object.prototype.hasOwnProperty.call(r,c)?r=r[c]:r={},++u}return o()?{}:{obj:r,k:n(a[u])}}function $g(r,e,t){const{obj:n,k:o}=sa(r,e,Object);if(n!==void 0||e.length===1){n[o]=t;return}let a=e[e.length-1],u=e.slice(0,e.length-1),c=sa(r,u,Object);for(;c.obj===void 0&&u.length;)a=`${u[u.length-1]}.${a}`,u=u.slice(0,u.length-1),c=sa(r,u,Object),c&&c.obj&&typeof c.obj[`${c.k}.${a}`]<"u"&&(c.obj=void 0);c.obj[`${c.k}.${a}`]=t}function uA(r,e,t,n){const{obj:o,k:a}=sa(r,e,Object);o[a]=o[a]||[],o[a].push(t)}function au(r,e){const{obj:t,k:n}=sa(r,e);if(t)return t[n]}function cA(r,e,t){const n=au(r,t);return n!==void 0?n:au(e,t)}function r0(r,e,t){for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in r?typeof r[n]=="string"||r[n]instanceof String||typeof e[n]=="string"||e[n]instanceof String?t&&(r[n]=e[n]):r0(r[n],e[n],t):r[n]=e[n]);return r}function Js(r){return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var fA={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function dA(r){return typeof r=="string"?r.replace(/[&<>"'\/]/g,e=>fA[e]):r}class hA{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}const pA=[" ",",","?","!",";"],mA=new hA(20);function gA(r,e,t){e=e||"",t=t||"";const n=pA.filter(u=>e.indexOf(u)<0&&t.indexOf(u)<0);if(n.length===0)return!0;const o=mA.getRegExp(`(${n.map(u=>u==="?"?"\\?":u).join("|")})`);let a=!o.test(r);if(!a){const u=r.indexOf(t);u>0&&!o.test(r.substring(0,u))&&(a=!0)}return a}function fd(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return r[e];const n=e.split(t);let o=r;for(let a=0;a<n.length;){if(!o||typeof o!="object")return;let u,c="";for(let d=a;d<n.length;++d)if(d!==a&&(c+=t),c+=n[d],u=o[c],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&d<n.length-1)continue;a+=d-a+1;break}o=u}return o}function lu(r){return r&&r.indexOf("_")>0?r.replace("_","-"):r}class qg extends Eu{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let c;e.indexOf(".")>-1?c=e.split("."):(c=[e,t],n&&(Array.isArray(n)?c.push(...n):typeof n=="string"&&a?c.push(...n.split(a)):c.push(n)));const d=au(this.data,c);return!d&&!t&&!n&&e.indexOf(".")>-1&&(e=c[0],t=c[1],n=c.slice(2).join(".")),d||!u||typeof n!="string"?d:fd(this.data&&this.data[e]&&this.data[e][t],n,a)}addResource(e,t,n,o){let a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let c=[e,t];n&&(c=c.concat(u?n.split(u):n)),e.indexOf(".")>-1&&(c=e.split("."),o=t,t=c[1]),this.addNamespaces(t),$g(this.data,c,o),a.silent||this.emit("added",e,t,n,o)}addResources(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const a in n)(typeof n[a]=="string"||Object.prototype.toString.apply(n[a])==="[object Array]")&&this.addResource(e,t,a,n[a],{silent:!0});o.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,o,a){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},c=[e,t];e.indexOf(".")>-1&&(c=e.split("."),o=n,n=t,t=c[1]),this.addNamespaces(t);let d=au(this.data,c)||{};u.skipCopy||(n=JSON.parse(JSON.stringify(n))),o?r0(d,n,a):d={...d,...n},$g(this.data,c,d),u.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(o=>t[o]&&Object.keys(t[o]).length>0)}toJSON(){return this.data}}var s0={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,n,o){return r.forEach(a=>{this.processors[a]&&(e=this.processors[a].process(e,t,n,o))}),e}};const Yg={};class uu extends Eu{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),aA(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ti.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const n=this.resolve(e,t);return n&&n.res!==void 0}extractFromKey(e,t){let n=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let a=t.ns||this.options.defaultNS||[];const u=n&&e.indexOf(n)>-1,c=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!gA(e,n,o);if(u&&!c){const d=e.match(this.interpolator.nestingRegexp);if(d&&d.length>0)return{key:e,namespaces:a};const h=e.split(n);(n!==o||n===o&&this.options.ns.indexOf(h[0])>-1)&&(a=h.shift()),e=h.join(o)}return typeof a=="string"&&(a=[a]),{key:e,namespaces:a}}translate(e,t,n){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const o=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,a=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:u,namespaces:c}=this.extractFromKey(e[e.length-1],t),d=c[c.length-1],h=t.lng||this.language,p=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(h&&h.toLowerCase()==="cimode"){if(p){const P=t.nsSeparator||this.options.nsSeparator;return o?{res:`${d}${P}${u}`,usedKey:u,exactUsedKey:u,usedLng:h,usedNS:d,usedParams:this.getUsedParamsDetails(t)}:`${d}${P}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:h,usedNS:d,usedParams:this.getUsedParamsDetails(t)}:u}const g=this.resolve(e,t);let v=g&&g.res;const S=g&&g.usedKey||u,E=g&&g.exactUsedKey||u,M=Object.prototype.toString.apply(v),y=["[object Number]","[object Function]","[object RegExp]"],x=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,C=!this.i18nFormat||this.i18nFormat.handleAsObject;if(C&&v&&(typeof v!="string"&&typeof v!="boolean"&&typeof v!="number")&&y.indexOf(M)<0&&!(typeof x=="string"&&M==="[object Array]")){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const P=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,v,{...t,ns:c}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(g.res=P,g.usedParams=this.getUsedParamsDetails(t),g):P}if(a){const P=M==="[object Array]",B=P?[]:{},O=P?E:S;for(const U in v)if(Object.prototype.hasOwnProperty.call(v,U)){const K=`${O}${a}${U}`;B[U]=this.translate(K,{...t,joinArrays:!1,ns:c}),B[U]===K&&(B[U]=v[U])}v=B}}else if(C&&typeof x=="string"&&M==="[object Array]")v=v.join(x),v&&(v=this.extendTranslation(v,e,t,n));else{let P=!1,B=!1;const O=t.count!==void 0&&typeof t.count!="string",U=uu.hasDefaultValue(t),K=O?this.pluralResolver.getSuffix(h,t.count,t):"",I=t.ordinal&&O?this.pluralResolver.getSuffix(h,t.count,{ordinal:!1}):"",A=O&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),X=A&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${K}`]||t[`defaultValue${I}`]||t.defaultValue;!this.isValidLookup(v)&&U&&(P=!0,v=X),this.isValidLookup(v)||(B=!0,v=u);const V=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&B?void 0:v,ue=U&&X!==v&&this.options.updateMissing;if(B||P||ue){if(this.logger.log(ue?"updateKey":"missingKey",h,d,u,ue?X:v),a){const k=this.resolve(u,{...t,keySeparator:!1});k&&k.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ae=[];const de=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&de&&de[0])for(let k=0;k<de.length;k++)ae.push(de[k]);else this.options.saveMissingTo==="all"?ae=this.languageUtils.toResolveHierarchy(t.lng||this.language):ae.push(t.lng||this.language);const fe=(k,te,L)=>{const q=U&&L!==v?L:V;this.options.missingKeyHandler?this.options.missingKeyHandler(k,d,te,q,ue,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(k,d,te,q,ue,t),this.emit("missingKey",k,d,te,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&O?ae.forEach(k=>{const te=this.pluralResolver.getSuffixes(k,t);A&&t[`defaultValue${this.options.pluralSeparator}zero`]&&te.indexOf(`${this.options.pluralSeparator}zero`)<0&&te.push(`${this.options.pluralSeparator}zero`),te.forEach(L=>{fe([k],u+L,t[`defaultValue${L}`]||X)})}):fe(ae,u,X))}v=this.extendTranslation(v,e,t,g,n),B&&v===u&&this.options.appendNamespaceToMissingKey&&(v=`${d}:${u}`),(B||P)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${d}:${u}`:u,P?v:void 0):v=this.options.parseMissingKeyHandler(v))}return o?(g.res=v,g.usedParams=this.getUsedParamsDetails(t),g):v}extendTranslation(e,t,n,o,a){var u=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const h=typeof e=="string"&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(h){const v=e.match(this.interpolator.nestingRegexp);p=v&&v.length}let g=n.replace&&typeof n.replace!="string"?n.replace:n;if(this.options.interpolation.defaultVariables&&(g={...this.options.interpolation.defaultVariables,...g}),e=this.interpolator.interpolate(e,g,n.lng||this.language,n),h){const v=e.match(this.interpolator.nestingRegexp),S=v&&v.length;p<S&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&o&&o.res&&(n.lng=o.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var v=arguments.length,S=new Array(v),E=0;E<v;E++)S[E]=arguments[E];return a&&a[0]===S[0]&&!n.context?(u.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${t[0]}`),null):u.translate(...S,t)},n)),n.interpolation&&this.interpolator.reset()}const c=n.postProcess||this.options.postProcess,d=typeof c=="string"?[c]:c;return e!=null&&d&&d.length&&n.applyPostProcessor!==!1&&(e=s0.handle(d,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,o,a,u,c;return typeof e=="string"&&(e=[e]),e.forEach(d=>{if(this.isValidLookup(n))return;const h=this.extractFromKey(d,t),p=h.key;o=p;let g=h.namespaces;this.options.fallbackNS&&(g=g.concat(this.options.fallbackNS));const v=t.count!==void 0&&typeof t.count!="string",S=v&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),E=t.context!==void 0&&(typeof t.context=="string"||typeof t.context=="number")&&t.context!=="",M=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);g.forEach(y=>{this.isValidLookup(n)||(c=y,!Yg[`${M[0]}-${y}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(c)&&(Yg[`${M[0]}-${y}`]=!0,this.logger.warn(`key "${o}" for languages "${M.join(", ")}" won't get resolved as namespace "${c}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),M.forEach(x=>{if(this.isValidLookup(n))return;u=x;const C=[p];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(C,p,x,y,t);else{let P;v&&(P=this.pluralResolver.getSuffix(x,t.count,t));const B=`${this.options.pluralSeparator}zero`,O=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&(C.push(p+P),t.ordinal&&P.indexOf(O)===0&&C.push(p+P.replace(O,this.options.pluralSeparator)),S&&C.push(p+B)),E){const U=`${p}${this.options.contextSeparator}${t.context}`;C.push(U),v&&(C.push(U+P),t.ordinal&&P.indexOf(O)===0&&C.push(U+P.replace(O,this.options.pluralSeparator)),S&&C.push(U+B))}}let b;for(;b=C.pop();)this.isValidLookup(n)||(a=b,n=this.getResource(x,y,b,t))}))})}),{res:n,usedKey:o,exactUsedKey:a,usedLng:u,usedNS:c}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,o):this.resourceStore.getResource(e,t,n,o)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&typeof e.replace!="string";let o=n?e.replace:e;if(n&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!n){o={...o};for(const a of t)delete o[a]}return o}static hasDefaultValue(e){const t="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t===n.substring(0,t.length)&&e[n]!==void 0)return!0;return!1}}function jf(r){return r.charAt(0).toUpperCase()+r.slice(1)}class Kg{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ti.create("languageUtils")}getScriptPartFromCode(e){if(e=lu(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=lu(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(typeof e=="string"&&e.indexOf("-")>-1){const t=["hans","hant","latn","cyrl","cans","mong","arab"];let n=e.split("-");return this.options.lowerCaseLng?n=n.map(o=>o.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=jf(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=jf(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=jf(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(n=>{if(t)return;const o=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(o))&&(t=o)}),!t&&this.options.supportedLngs&&e.forEach(n=>{if(t)return;const o=this.getLanguagePartFromCode(n);if(this.isSupportedCode(o))return t=o;t=this.options.supportedLngs.find(a=>{if(a===o)return a;if(!(a.indexOf("-")<0&&o.indexOf("-")<0)&&(a.indexOf("-")>0&&o.indexOf("-")<0&&a.substring(0,a.indexOf("-"))===o||a.indexOf(o)===0&&o.length>1))return a})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),typeof e=="string"&&(e=[e]),Object.prototype.toString.apply(e)==="[object Array]")return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],a=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return typeof e=="string"&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&a(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&a(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&a(this.getLanguagePartFromCode(e))):typeof e=="string"&&a(this.formatLanguageCode(e)),n.forEach(u=>{o.indexOf(u)<0&&a(this.formatLanguageCode(u))}),o}}let vA=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],_A={1:function(r){return+(r>1)},2:function(r){return+(r!=1)},3:function(r){return 0},4:function(r){return r%10==1&&r%100!=11?0:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?1:2},5:function(r){return r==0?0:r==1?1:r==2?2:r%100>=3&&r%100<=10?3:r%100>=11?4:5},6:function(r){return r==1?0:r>=2&&r<=4?1:2},7:function(r){return r==1?0:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?1:2},8:function(r){return r==1?0:r==2?1:r!=8&&r!=11?2:3},9:function(r){return+(r>=2)},10:function(r){return r==1?0:r==2?1:r<7?2:r<11?3:4},11:function(r){return r==1||r==11?0:r==2||r==12?1:r>2&&r<20?2:3},12:function(r){return+(r%10!=1||r%100==11)},13:function(r){return+(r!==0)},14:function(r){return r==1?0:r==2?1:r==3?2:3},15:function(r){return r%10==1&&r%100!=11?0:r%10>=2&&(r%100<10||r%100>=20)?1:2},16:function(r){return r%10==1&&r%100!=11?0:r!==0?1:2},17:function(r){return r==1||r%10==1&&r%100!=11?0:1},18:function(r){return r==0?0:r==1?1:2},19:function(r){return r==1?0:r==0||r%100>1&&r%100<11?1:r%100>10&&r%100<20?2:3},20:function(r){return r==1?0:r==0||r%100>0&&r%100<20?1:2},21:function(r){return r%100==1?1:r%100==2?2:r%100==3||r%100==4?3:0},22:function(r){return r==1?0:r==2?1:(r<0||r>10)&&r%10==0?2:3}};const yA=["v1","v2","v3"],xA=["v4"],Zg={zero:0,one:1,two:2,few:3,many:4,other:5};function SA(){const r={};return vA.forEach(e=>{e.lngs.forEach(t=>{r[t]={numbers:e.nr,plurals:_A[e.fc]}})}),r}class EA{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Ti.create("pluralResolver"),(!this.options.compatibilityJSON||xA.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=SA()}addRule(e,t){this.rules[e]=t}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(lu(e==="dev"?"en":e),{type:t.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,t);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,n).map(o=>`${t}${o}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,t);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((o,a)=>Zg[o]-Zg[a]).map(o=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${o}`):n.numbers.map(o=>this.getSuffix(e,o,t)):[]}getSuffix(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(e,n);return o?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o.select(t)}`:this.getSuffixRetroCompatible(o,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let o=e.numbers[n];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(o===2?o="plural":o===1&&(o=""));const a=()=>this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();return this.options.compatibilityJSON==="v1"?o===1?"":typeof o=="number"?`_plural_${o.toString()}`:a():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?a():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!yA.includes(this.options.compatibilityJSON)}}function Qg(r,e,t){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=cA(r,e,t);return!a&&o&&typeof t=="string"&&(a=fd(r,t,n),a===void 0&&(a=fd(e,t,n))),a}class MA{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ti.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(t=>t),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const t=e.interpolation;this.escape=t.escape!==void 0?t.escape:dA,this.escapeValue=t.escapeValue!==void 0?t.escapeValue:!0,this.useRawValueToEscape=t.useRawValueToEscape!==void 0?t.useRawValueToEscape:!1,this.prefix=t.prefix?Js(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?Js(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?Js(t.nestingPrefix):t.nestingPrefixEscaped||Js("$t("),this.nestingSuffix=t.nestingSuffix?Js(t.nestingSuffix):t.nestingSuffixEscaped||Js(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=t.alwaysFormat!==void 0?t.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,n)=>t&&t.source===n?(t.lastIndex=0,t):new RegExp(n,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,n,o){let a,u,c;const d=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function h(E){return E.replace(/\$/g,"$$$$")}const p=E=>{if(E.indexOf(this.formatSeparator)<0){const C=Qg(t,d,E,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(C,void 0,n,{...o,...t,interpolationkey:E}):C}const M=E.split(this.formatSeparator),y=M.shift().trim(),x=M.join(this.formatSeparator).trim();return this.format(Qg(t,d,y,this.options.keySeparator,this.options.ignoreJSONStructure),x,n,{...o,...t,interpolationkey:y})};this.resetRegExp();const g=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,v=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:E=>h(E)},{regex:this.regexp,safeValue:E=>this.escapeValue?h(this.escape(E)):h(E)}].forEach(E=>{for(c=0;a=E.regex.exec(e);){const M=a[1].trim();if(u=p(M),u===void 0)if(typeof g=="function"){const x=g(e,a,o);u=typeof x=="string"?x:""}else if(o&&Object.prototype.hasOwnProperty.call(o,M))u="";else if(v){u=a[0];continue}else this.logger.warn(`missed to pass in variable ${M} for interpolating ${e}`),u="";else typeof u!="string"&&!this.useRawValueToEscape&&(u=Xg(u));const y=E.safeValue(u);if(e=e.replace(a[0],y),v?(E.regex.lastIndex+=u.length,E.regex.lastIndex-=a[0].length):E.regex.lastIndex=0,c++,c>=this.maxReplaces)break}}),e}nest(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,a,u;function c(d,h){const p=this.nestingOptionsSeparator;if(d.indexOf(p)<0)return d;const g=d.split(new RegExp(`${p}[ ]*{`));let v=`{${g[1]}`;d=g[0],v=this.interpolate(v,u);const S=v.match(/'/g),E=v.match(/"/g);(S&&S.length%2===0&&!E||E.length%2!==0)&&(v=v.replace(/'/g,'"'));try{u=JSON.parse(v),h&&(u={...h,...u})}catch(M){return this.logger.warn(`failed parsing options string in nesting for key ${d}`,M),`${d}${p}${v}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,d}for(;o=this.nestingRegexp.exec(e);){let d=[];u={...n},u=u.replace&&typeof u.replace!="string"?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let h=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const p=o[1].split(this.formatSeparator).map(g=>g.trim());o[1]=p.shift(),d=p,h=!0}if(a=t(c.call(this,o[1].trim(),u),u),a&&o[0]===e&&typeof a!="string")return a;typeof a!="string"&&(a=Xg(a)),a||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),a=""),h&&(a=d.reduce((p,g)=>this.format(p,g,n.lng,{...n,interpolationkey:o[1].trim()}),a.trim())),e=e.replace(o[0],a),this.regexp.lastIndex=0}return e}}function wA(r){let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const n=r.split("(");e=n[0].toLowerCase().trim();const o=n[1].substring(0,n[1].length-1);e==="currency"&&o.indexOf(":")<0?t.currency||(t.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?t.range||(t.range=o.trim()):o.split(";").forEach(u=>{if(!u)return;const[c,...d]=u.split(":"),h=d.join(":").trim().replace(/^'+|'+$/g,"");t[c.trim()]||(t[c.trim()]=h),h==="false"&&(t[c.trim()]=!1),h==="true"&&(t[c.trim()]=!0),isNaN(h)||(t[c.trim()]=parseInt(h,10))})}return{formatName:e,formatOptions:t}}function eo(r){const e={};return function(n,o,a){const u=o+JSON.stringify(a);let c=e[u];return c||(c=r(lu(o),a),e[u]=c),c(n)}}class TA{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ti.create("formatter"),this.options=e,this.formats={number:eo((t,n)=>{const o=new Intl.NumberFormat(t,{...n});return a=>o.format(a)}),currency:eo((t,n)=>{const o=new Intl.NumberFormat(t,{...n,style:"currency"});return a=>o.format(a)}),datetime:eo((t,n)=>{const o=new Intl.DateTimeFormat(t,{...n});return a=>o.format(a)}),relativetime:eo((t,n)=>{const o=new Intl.RelativeTimeFormat(t,{...n});return a=>o.format(a,n.range||"day")}),list:eo((t,n)=>{const o=new Intl.ListFormat(t,{...n});return a=>o.format(a)})},this.init(e)}init(e){const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=eo(t)}format(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return t.split(this.formatSeparator).reduce((c,d)=>{const{formatName:h,formatOptions:p}=wA(d);if(this.formats[h]){let g=c;try{const v=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},S=v.locale||v.lng||o.locale||o.lng||n;g=this.formats[h](c,S,{...p,...o,...v})}catch(v){this.logger.warn(v)}return g}else this.logger.warn(`there was no format function for ${h}`);return c},e)}}function bA(r,e){r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)}class AA extends Eu{constructor(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=o,this.logger=Ti.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,o.backend,o)}queueLoad(e,t,n,o){const a={},u={},c={},d={};return e.forEach(h=>{let p=!0;t.forEach(g=>{const v=`${h}|${g}`;!n.reload&&this.store.hasResourceBundle(h,g)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?u[v]===void 0&&(u[v]=!0):(this.state[v]=1,p=!1,u[v]===void 0&&(u[v]=!0),a[v]===void 0&&(a[v]=!0),d[g]===void 0&&(d[g]=!0)))}),p||(c[h]=!0)}),(Object.keys(a).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(a),pending:Object.keys(u),toLoadLanguages:Object.keys(c),toLoadNamespaces:Object.keys(d)}}loaded(e,t,n){const o=e.split("|"),a=o[0],u=o[1];t&&this.emit("failedLoading",a,u,t),n&&this.store.addResourceBundle(a,u,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2;const c={};this.queue.forEach(d=>{uA(d.loaded,[a],u),bA(d,e),t&&d.errors.push(t),d.pendingCount===0&&!d.done&&(Object.keys(d.loaded).forEach(h=>{c[h]||(c[h]={});const p=d.loaded[h];p.length&&p.forEach(g=>{c[h][g]===void 0&&(c[h][g]=!0)})}),d.done=!0,d.errors.length?d.callback(d.errors):d.callback())}),this.emit("loaded",c),this.queue=this.queue.filter(d=>!d.done)}read(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!e.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:o,wait:a,callback:u});return}this.readingCalls++;const c=(h,p)=>{if(this.readingCalls--,this.waitingReads.length>0){const g=this.waitingReads.shift();this.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}if(h&&p&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,n,o+1,a*2,u)},a);return}u(h,p)},d=this.backend[n].bind(this.backend);if(d.length===2){try{const h=d(e,t);h&&typeof h.then=="function"?h.then(p=>c(null,p)).catch(c):c(null,h)}catch(h){c(h)}return}return d(e,t,c)}prepareLoading(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();typeof e=="string"&&(e=this.languageUtils.toResolveHierarchy(e)),typeof t=="string"&&(t=[t]);const a=this.queueLoad(e,t,n,o);if(!a.toLoad.length)return a.pending.length||o(),null;a.toLoad.forEach(u=>{this.loadOne(u)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=e.split("|"),o=n[0],a=n[1];this.read(o,a,"read",void 0,void 0,(u,c)=>{u&&this.logger.warn(`${t}loading namespace ${a} for language ${o} failed`,u),!u&&c&&this.logger.log(`${t}loaded namespace ${a} for language ${o}`,c),this.loaded(e,u,c)})}saveMissing(e,t,n,o,a){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const d={...u,isUpdate:a},h=this.backend.create.bind(this.backend);if(h.length<6)try{let p;h.length===5?p=h(e,t,n,o,d):p=h(e,t,n,o),p&&typeof p.then=="function"?p.then(g=>c(null,g)).catch(c):c(null,p)}catch(p){c(p)}else h(e,t,n,o,c,d)}!e||!e[0]||this.store.addResource(e[0],t,n,o)}}}function Jg(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){let t={};if(typeof e[1]=="object"&&(t=e[1]),typeof e[1]=="string"&&(t.defaultValue=e[1]),typeof e[2]=="string"&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const n=e[3]||e[2];Object.keys(n).forEach(o=>{t[o]=n[o]})}return t},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function ev(r){return typeof r.ns=="string"&&(r.ns=[r.ns]),typeof r.fallbackLng=="string"&&(r.fallbackLng=[r.fallbackLng]),typeof r.fallbackNS=="string"&&(r.fallbackNS=[r.fallbackNS]),r.supportedLngs&&r.supportedLngs.indexOf("cimode")<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),r}function ql(){}function CA(r){Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})}class ha extends Eu{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=ev(e),this.services={},this.logger=Ti,this.modules={external:[]},CA(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(n=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(typeof t.ns=="string"?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const o=Jg();this.options={...o,...this.options,...ev(t)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...o.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);function a(p){return p?typeof p=="function"?new p:p:null}if(!this.options.isClone){this.modules.logger?Ti.init(a(this.modules.logger),this.options):Ti.init(null,this.options);let p;this.modules.formatter?p=this.modules.formatter:typeof Intl<"u"&&(p=TA);const g=new Kg(this.options);this.store=new qg(this.options.resources,this.options);const v=this.services;v.logger=Ti,v.resourceStore=this.store,v.languageUtils=g,v.pluralResolver=new EA(g,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),p&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=a(p),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new MA(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new AA(a(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(S){for(var E=arguments.length,M=new Array(E>1?E-1:0),y=1;y<E;y++)M[y-1]=arguments[y];e.emit(S,...M)}),this.modules.languageDetector&&(v.languageDetector=a(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=a(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new uu(this.services,this.options),this.translator.on("*",function(S){for(var E=arguments.length,M=new Array(E>1?E-1:0),y=1;y<E;y++)M[y-1]=arguments[y];e.emit(S,...M)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,n||(n=ql),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.length>0&&p[0]!=="dev"&&(this.options.lng=p[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(p=>{this[p]=function(){return e.store[p](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(p=>{this[p]=function(){return e.store[p](...arguments),e}});const d=ta(),h=()=>{const p=(g,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),d.resolve(v),n(g,v)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return p(null,this.t.bind(this));this.changeLanguage(this.options.lng,p)};return this.options.resources||!this.options.initImmediate?h():setTimeout(h,0),d}loadResources(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ql;const o=typeof e=="string"?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(o&&o.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const a=[],u=c=>{if(!c||c==="cimode")return;this.services.languageUtils.toResolveHierarchy(c).forEach(h=>{h!=="cimode"&&a.indexOf(h)<0&&a.push(h)})};o?u(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(d=>u(d)),this.options.preload&&this.options.preload.forEach(c=>u(c)),this.services.backendConnector.load(a,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(c)})}else n(null)}reloadResources(e,t,n){const o=ta();return e||(e=this.languages),t||(t=this.options.ns),n||(n=ql),this.services.backendConnector.reload(e,t,a=>{o.resolve(),n(a)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&s0.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const n=this.languages[t];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;const o=ta();this.emit("languageChanging",e);const a=d=>{this.language=d,this.languages=this.services.languageUtils.toResolveHierarchy(d),this.resolvedLanguage=void 0,this.setResolvedLanguage(d)},u=(d,h)=>{h?(a(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,o.resolve(function(){return n.t(...arguments)}),t&&t(d,function(){return n.t(...arguments)})},c=d=>{!e&&!d&&this.services.languageDetector&&(d=[]);const h=typeof d=="string"?d:this.services.languageUtils.getBestMatchFromCodes(d);h&&(this.language||a(h),this.translator.language||this.translator.changeLanguage(h),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(h)),this.loadResources(h,p=>{u(p,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?c(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(c):this.services.languageDetector.detect(c):c(e),o}getFixedT(e,t,n){var o=this;const a=function(u,c){let d;if(typeof c!="object"){for(var h=arguments.length,p=new Array(h>2?h-2:0),g=2;g<h;g++)p[g-2]=arguments[g];d=o.options.overloadTranslationOptionHandler([u,c].concat(p))}else d={...c};d.lng=d.lng||a.lng,d.lngs=d.lngs||a.lngs,d.ns=d.ns||a.ns,d.keyPrefix=d.keyPrefix||n||a.keyPrefix;const v=o.options.keySeparator||".";let S;return d.keyPrefix&&Array.isArray(u)?S=u.map(E=>`${d.keyPrefix}${v}${E}`):S=d.keyPrefix?`${d.keyPrefix}${v}${u}`:u,o.t(S,d)};return typeof e=="string"?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,a=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const u=(c,d)=>{const h=this.services.backendConnector.state[`${c}|${d}`];return h===-1||h===2};if(t.precheck){const c=t.precheck(this,u);if(c!==void 0)return c}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(n,e)&&(!o||u(a,e)))}loadNamespaces(e,t){const n=ta();return this.options.ns?(typeof e=="string"&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{n.resolve(),t&&t(o)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=ta();typeof e=="string"&&(e=[e]);const o=this.options.preload||[],a=e.filter(u=>o.indexOf(u)<0);return a.length?(this.options.preload=o.concat(a),this.loadResources(u=>{n.resolve(),t&&t(u)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new Kg(Jg());return t.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new ha(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ql;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},a=new ha(o);return(e.debug!==void 0||e.prefix!==void 0)&&(a.logger=a.logger.clone(e)),["store","services","language"].forEach(c=>{a[c]=this[c]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},n&&(a.store=new qg(this.store.data,o),a.services.resourceStore=a.store),a.translator=new uu(a.services,o),a.translator.on("*",function(c){for(var d=arguments.length,h=new Array(d>1?d-1:0),p=1;p<d;p++)h[p-1]=arguments[p];a.emit(c,...h)}),a.init(o,t),a.translator.options=o,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const dn=ha.createInstance();dn.createInstance=ha.createInstance;dn.createInstance;dn.dir;dn.init;dn.loadResources;dn.reloadResources;dn.use;dn.changeLanguage;dn.getFixedT;dn.t;dn.exists;dn.setDefaultNamespace;dn.hasLoadedNamespace;dn.loadNamespaces;dn.loadLanguages;const RA={home:"Home",KnowMe:"Know Me More",aboutMe:"About Me",whatdoIoffer:"What Do I Offer?",training:"Training",skills:"Skills",certifications:"Certifications",contact:"Contact",helloWorld:"Hello World,",Im:"I'm Andrea, a Web Developer"},PA={professionalism:{title:"100% professionalism",description:"I am committed to offering you a service of quality and exceptional professionalism, in the creation of your website. I am here to provide you with a web design and functionality experience, fast, precise, and adapted to all your needs."},advice:{title:"I advise you to choose the best option for your company",description:"I am here to help you find the best solution for your project. If you need guidance on the best available options, I will be happy to offer you my best option for you and your work, the same if you already have a website and want to adapt a new design or functionality."},devices:{title:"Your website on any device",description:"I work diligently to ensure that each element of your website is perfectly optimized and adaptable to different screen sizes. Nowadays, we navigate everything towards mobile devices, so it is important to dedicate a part of the development to responsive design."}},LA={markupLanguage:"Deep domain of markup language, allowing me to create and structure content clearly and concisely.",webInterfaceDesign:"I create and design web interfaces with style and elegance, without forgetting responsiveness on all devices.",javascriptKnowledge:"Solid knowledge of the main functionalities of Javascript, and I continue to learn continuously.",reactExperience:"I have been perfecting my skills in React for several months now, this very page is built in React.",databaseExperience:"My experience covers fundamental aspects such as creating databases and collections, designing basic queries, and document manipulation.",bootstrapKnowledge:"Good knowledge of Bootstrap, I often use it in various projects.",dailyUsage:"In my daily life, I cannot do without Git, it has accompanied me throughout this adventure, 100% of my time.",gitExperience:"Like Github, Git has always been in my learning course, studying has been daily.",tailwindExperience:"I have worked diligently with Tailwind, which has provided me with a deep and balanced mastery of this framework."},NA={june:"June 2023",course:"Introduction Course",coursetitle:"to Web Development: HTML and CSS (I)",summary:"Summary",topics:{history:"History of the Web",functioning:"How the Web Works",writing:"Writing for the Web",publication:"Publishing a Website",page:"Creating a Web Page"}},DA={july:"July 2023",course:"Introduction",coursetitle:"to Web Development: HTML and CSS (II)",summary:"Summary",topics:{presentationDefinition:"How the presentation of a web page is defined",elementsPresentationDefinition:"How the presentation of the elements of a web page is defined",webSuccessAchievement:"How to achieve success for a web page",webLayout:"How to layout a web page"}},IA={august:"August 2023",course:"Build Responsive Real World Websites with HTML AND CSS (Udemy)",summary:"Summary",topics:{htmlFundamentals:"HTML Fundamentals",cssFundamentals:"CSS Fundamentals",layouts:"Layouts",components:"Components",projects:"Projects"}},UA={certification_info:{title:"September 2023",subtitle:"Responsive Web Design Developer Certification",image_source:"https://www.arnoldgelacio.com/images/skills/logo-freecodecamp.png",summary:{title:"Summary 300h",details:["Build a Survey Form","Build a tribute page","Build a Technical Documentation Page","Build a Personal Portfolio Page"]}}},OA={contactUs:"Contact Us",privacyPolicy:"Privacy Policy"},FA={header:RA,sectionInformation:PA,skills:LA,certificationsGoogle:NA,certificationsGoogle1:DA,certificationsUdemy:IA,certificationsFreeCodeCamp:UA,footer:OA},kA={home:"Inicio",KnowMe:"Conóceme un poco más",aboutMe:"Sobre mí",whatdoIoffer:"¿Qué ofrezco?",training:"Formación",skills:"Habilidades",certifications:"Certificaciones",contact:"Contacto",helloWorld:"Hola mundo!",Im:"soy Andrea, una programadora Web"},zA={professionalism:{title:"100% profesionalidad",description:"Me comprometo a ofrecerte un servicio de calidad y profesionalidad excepcional, en la creación de tu página web. Estoy aquí para brindarte una experiencia de diseño web y de funcionalidad, rápida, precisa y adaptada a todas tus necesidades."},advice:{title:"Te aconsejo elegir la mejor opción para tu empresa",description:"Estoy aquí para ayudarte a encontrar la mejor solución para tu proyecto. Si necesitas orientación sobre las mejores opciones disponibles, estaré encantado de ofrecerte mi mejor opción para ti y tu trabajo, lo mismo si ya tienes un sitio web y deseas adaptar un nuevo diseño o funcionalidad."},devices:{title:"Tu sitio web en cualquier dispositivo",description:"Trabajo diligentemente para asegurarme de que cada elemento de tu sitio web esté perfectamente optimizado y sea adaptable a diferentes tamaños de pantalla. Hoy en día, navegamos hacia los dispositivos móviles, por lo que es importante dedicar una parte del desarrollo al diseño responsivo."}},BA={markupLanguage:"Dominio profundo del lenguaje de marcado, lo que me permite crear y estructurar contenido de manera clara y concisa.",webInterfaceDesign:"Creo y diseño interfaces web con estilo y elegancia, sin olvidar la responsividad en todos los dispositivos.",javascriptKnowledge:"Conocimiento sólido de las principales funcionalidades de Javascript, y sigo en continuo aprendizaje.",reactExperience:"Actualmente llevo varios meses perfeccionándome en el dominio de React, esta misma página está construida en React.",databaseExperience:"Mi experiencia abarca aspectos fundamentales como creación de bases de datos y colecciones, diseño de consultas básicas y manipulación de documentos.",bootstrapKnowledge:"Buen conocimiento de Bootstrap, suelo utilizarlo en varios proyectos.",dailyUsage:"En mi día a día, no puedo prescindir de Git, me ha acompañado en toda esta aventura, el 100% de mi tiempo.",gitExperience:"Al igual que Github, Git siempre ha estado en mi curso de aprendizaje, el estudio ha sido diario.",tailwindExperience:"He trabajado asiduamente con Tailwind, lo que me ha proporcionado un dominio profundo y equilibrado de este framework."},HA={june:"Junio de 2023",course:"Curso de introducción",coursetitle:"al desarrollo web: HTML y CSS (I)",summary:"Resumen",topics:{history:"Historia de la Web",functioning:"Cómo funciona la Web",writing:"Escritura para la Web",publication:"Publicación de un sitio web",page:"Creación de una página web"}},VA={july:"Julio 2023",course:"Curso de introducción",coursetitle:"al desarrollo web: HTML and CSS (II)",summary:"Sumario",topics:{presentationDefinition:"Cómo se define la presentación de una página web",elementsPresentationDefinition:"Cómo se define la presentación de los elementos de una página web",webSuccessAchievement:"Cómo se logra que una página web tenga éxito",webLayout:"Cómo se maqueta una página web"}},GA={august:"Agosto 2023",course:"Construcción de sitios web responsivos del mundo real con HTML y CSS (Udemy)",summary:"Sumario",topics:{htmlFundamentals:"Fundamentos de HTML",cssFundamentals:"Fundamentos de CSS",layouts:"Diseños",components:"Componentes",projects:"Proyectos"}},WA={certification_info:{title:"Setiembre 2023",subtitle:"Certificación de Diseño Web Responsivo i Deserrollo",image_source:"https://www.arnoldgelacio.com/images/skills/logo-freecodecamp.png",summary:{title:"Resumen 300h",details:["Construeix un formulari d'enquesta","Construeix una pàgina de tribut","Construeix una pàgina de documentació tècnica","Construeix una pàgina de cartera personal"]}}},jA={text:"Diseñadora de páginas web y desarrolladora web:",contactUs:"Contáctenos",privacyPolicy:"Política de privacidad"},XA={header:kA,sectionInformation:zA,skills:BA,certificationsGoogle:HA,certificationsGoogle1:VA,certificationsUdemy:GA,certificationsFreeCodeCamp:WA,footer:jA},$A={home:"Inici",KnowMe:"Coneix-me una mica més",aboutMe:"Sobre mi",whatdoIoffer:"Què ofereixo?",training:"Formació",skills:"Competències",certifications:"Certificacions",contact:"Contacte",helloWorld:"Hola món!",Im:"sóc Andrea, una programadora web"},qA={professionalism:{title:"100% professionalitat",description:"Estic compromès a oferir-te un servei de qualitat i professionalitat excepcional, en la creació del teu lloc web. Estic aquí per proporcionar-te una experiència de disseny web i funcionalitat, ràpida, precisa i adaptada a totes les teves necessitats."},advice:{title:"T'aconsello a escollir la millor opció per a la teva empresa",description:"Estic aquí per ajudar-te a trobar la millor solució per al teu projecte. Si necessites orientació sobre les millors opcions disponibles, estaré encantat de oferir-te la millor opció per a tu i el teu treball, el mateix si ja tens un lloc web i vols adaptar un nou disseny o funcionalitat."},devices:{title:"El teu lloc web en qualsevol dispositiu",description:"Treballo diligentment per assegurar-me que cada element del teu lloc web estigui perfectament optimitzat i adaptable a diferents mides de pantalla. Avui en dia, naveguem cap a dispositius mòbils, així que és important dedicar una part del desenvolupament al disseny adaptable."}},YA={markupLanguage:"Domini profund del llenguatge de marcat, el que em permet crear i estructurar contingut de manera clara i concisa.",webInterfaceDesign:"Creo i dissenyo interfícies web amb estil i elegància, sense oblidar la responsivitat en tots els dispositius.",javascriptKnowledge:"Coneixement sòlid de les principals funcionalitats de Javascript, i segueixo en continu aprenentatge.",reactExperience:"Actualment porto diversos mesos perfeccionant-me en el domini de React, aquesta mateixa pàgina està construïda en React.",databaseExperience:"La meva experiència abasta aspectes fonamentals com la creació de bases de dades i col·leccions, disseny de consultes bàsiques i manipulació de documents.",bootstrapKnowledge:"Bon coneixement de Bootstrap, solc utilitzar-lo en diversos projectes.",dailyUsage:"En el meu dia a dia, no puc prescindir de Git, m'ha acompanyat en tota aquesta aventura, el 100% del meu temps.",gitExperience:"Al igual que Github, Git sempre ha estat en el meu curs d'aprenentatge, l'estudi ha estat diari.",tailwindExperience:"He treballat assíduament amb Tailwind, el que m'ha proporcionat un domini profund i equilibrat d'aquest framework."},KA={june:"Juny de 2023",course:"Curs d'introducció",coursetitle:"al desenvolupament web: HTML i CSS (I)",summary:"Resum",topics:{history:"Història de la Web",functioning:"Com funciona la Web",writing:"Com s'escriu per a la Web",publication:"Publicació d'un lloc web",page:"Creació d'una pàgina web"}},ZA={july:"Juliol 2023",course:"Curs d'introducció ",coursetitle:"al desenvolupament web: HTML and CSS (II)",summary:"Sumari",topics:{presentationDefinition:"Com es defineix la presentació d'una pàgina web",elementsPresentationDefinition:"Com es defineix la presentació dels elements d'una pàgina web",webSuccessAchievement:"Com aconseguir que una pàgina web tingui èxit",webLayout:"Com maquetar una pàgina web"}},QA={august:"Agost 2023",course:"Construcció de llocs web responsius del món real amb HTML i CSS (Udemy)",summary:"Resum",topics:{htmlFundamentals:"Fonaments d'HTML",cssFundamentals:"Fonaments de CSS",layouts:"Disposicions",components:"Components",projects:"Projectes"}},JA={certification_info:{title:"Setembre 2023",subtitle:"Certificació de Disseny Web Responsiu i Desenvolupament",image_source:"https://www.arnoldgelacio.com/images/skills/logo-freecodecamp.png",summary:{title:"Resum 300h",details:["Construeix un formulari d'enquesta","Construeix una pàgina de tribut","Construeix una pàgina de documentació tècnica","Construeix una pàgina de cartera personal"]}}},eC={text:"Dissenyadora de pàgines web i programadora web",contactUs:"Contacteu-nos",privacyPolicy:"Política de privacitat"},tC={header:$A,sectionInformation:qA,skills:YA,certificationsGoogle:KA,certificationsGoogle1:ZA,certificationsUdemy:QA,certificationsFreeCodeCamp:JA,footer:eC};dn.use(qx).init({resources:{en:{translation:FA},es:{translation:XA},ca:{translation:tC}},lng:"ca",fallbackLng:"en",interpolation:{escapeValue:!1}});function nC(){const{i18n:r}=ho(),e=t=>{r.changeLanguage(t)};return D.jsxs("div",{children:[D.jsx("button",{onClick:()=>e("en"),className:"boton_lenguaje text-base text-white p-1 ml-2 mt-2 rounded font-bold",children:"English"}),D.jsx("button",{onClick:()=>e("es"),className:"boton_lenguaje text-base text-white p-1 ml-2 mt-2 rounded font-bold",children:"Español"}),D.jsx("button",{onClick:()=>e("ca"),className:"boton_lenguaje text-base text-white p-1 ml-2 mt-2 rounded font-bold",children:"Català"})]})}function iC(){return D.jsx(D.Fragment,{children:D.jsx(Qx,{i18n:dn,children:D.jsx("div",{className:" dark:bg-slate-950 ",children:D.jsxs("div",{children:[D.jsx("div",{className:"marquee-wrapper",children:D.jsx("div",{className:"marquee-content",children:D.jsxs("p",{children:["_WEB ",D.jsx("strong",{children:"DEVELOPER FRONTEND"}),"__",D.jsx("strong",{children:"H"}),"TML__ ",D.jsx("strong",{children:"C"}),"SS__",D.jsx("strong",{children:"S"}),"ASS__",D.jsx("strong",{children:"J"}),"S__",D.jsx("strong",{children:"R"}),"EACT__",D.jsx("strong",{children:"A"}),"NGULAR___WEB ",D.jsx("strong",{children:"DEVELOPER FRONTEND"}),"__",D.jsx("strong",{children:"H"}),"TML__ ",D.jsx("strong",{children:"C"}),"SS__",D.jsx("strong",{children:"S"}),"ASS__",D.jsx("strong",{children:"J"}),"S__",D.jsx("strong",{children:"R"}),"EACT__",D.jsx("strong",{children:"A"}),"NGULAR__"]})})}),D.jsx("div",{className:"flex justify-end",children:D.jsx(nC,{})}),D.jsx(sA,{})]})})})})}const rC=q_.createRoot(document.getElementById("root"));rC.render(D.jsx(D.Fragment,{children:D.jsx(iC,{})}));
