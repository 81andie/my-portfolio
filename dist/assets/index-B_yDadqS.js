function X0(s,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in s)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function _g(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zu={exports:{}},Bo={},Bu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function $0(){if(_p)return pt;_p=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function g(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function x(P,$,Se){this.props=P,this.context=$,this.refs=T,this.updater=Se||S}x.prototype.isReactComponent={},x.prototype.setState=function(P,$){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,$,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function y(){}y.prototype=x.prototype;function D(P,$,Se){this.props=P,this.context=$,this.refs=T,this.updater=Se||S}var R=D.prototype=new y;R.constructor=D,M(R,x.prototype),R.isPureReactComponent=!0;var L=Array.isArray,V=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function ee(P,$,Se){var Ue,Y={},fe=null,Me=null;if($!=null)for(Ue in $.ref!==void 0&&(Me=$.ref),$.key!==void 0&&(fe=""+$.key),$)V.call($,Ue)&&!U.hasOwnProperty(Ue)&&(Y[Ue]=$[Ue]);var me=arguments.length-2;if(me===1)Y.children=Se;else if(1<me){for(var Ne=Array(me),je=0;je<me;je++)Ne[je]=arguments[je+2];Y.children=Ne}if(P&&P.defaultProps)for(Ue in me=P.defaultProps,me)Y[Ue]===void 0&&(Y[Ue]=me[Ue]);return{$$typeof:s,type:P,key:fe,ref:Me,props:Y,_owner:F.current}}function I(P,$){return{$$typeof:s,type:P.type,key:$,ref:P.ref,props:P.props,_owner:P._owner}}function A(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function q(P){var $={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Se){return $[Se]})}var le=/\/+/g;function G(P,$){return typeof P=="object"&&P!==null&&P.key!=null?q(""+P.key):$.toString(36)}function ce(P,$,Se,Ue,Y){var fe=typeof P;(fe==="undefined"||fe==="boolean")&&(P=null);var Me=!1;if(P===null)Me=!0;else switch(fe){case"string":case"number":Me=!0;break;case"object":switch(P.$$typeof){case s:case e:Me=!0}}if(Me)return Me=P,Y=Y(Me),P=Ue===""?"."+G(Me,0):Ue,L(Y)?(Se="",P!=null&&(Se=P.replace(le,"$&/")+"/"),ce(Y,$,Se,"",function(je){return je})):Y!=null&&(A(Y)&&(Y=I(Y,Se+(!Y.key||Me&&Me.key===Y.key?"":(""+Y.key).replace(le,"$&/")+"/")+P)),$.push(Y)),1;if(Me=0,Ue=Ue===""?".":Ue+":",L(P))for(var me=0;me<P.length;me++){fe=P[me];var Ne=Ue+G(fe,me);Me+=ce(fe,$,Se,Ne,Y)}else if(Ne=g(P),typeof Ne=="function")for(P=Ne.call(P),me=0;!(fe=P.next()).done;)fe=fe.value,Ne=Ue+G(fe,me++),Me+=ce(fe,$,Se,Ne,Y);else if(fe==="object")throw $=String(P),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Me}function ae(P,$,Se){if(P==null)return P;var Ue=[],Y=0;return ce(P,Ue,"","",function(fe){return $.call(Se,fe,Y++)}),Ue}function he(P){if(P._status===-1){var $=P._result;$=$(),$.then(function(Se){(P._status===0||P._status===-1)&&(P._status=1,P._result=Se)},function(Se){(P._status===0||P._status===-1)&&(P._status=2,P._result=Se)}),P._status===-1&&(P._status=0,P._result=$)}if(P._status===1)return P._result.default;throw P._result}var ue={current:null},z={transition:null},re={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:z,ReactCurrentOwner:F};return pt.Children={map:ae,forEach:function(P,$,Se){ae(P,function(){$.apply(this,arguments)},Se)},count:function(P){var $=0;return ae(P,function(){$++}),$},toArray:function(P){return ae(P,function($){return $})||[]},only:function(P){if(!A(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},pt.Component=x,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=D,pt.StrictMode=i,pt.Suspense=f,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,pt.cloneElement=function(P,$,Se){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var Ue=M({},P.props),Y=P.key,fe=P.ref,Me=P._owner;if($!=null){if($.ref!==void 0&&(fe=$.ref,Me=F.current),$.key!==void 0&&(Y=""+$.key),P.type&&P.type.defaultProps)var me=P.type.defaultProps;for(Ne in $)V.call($,Ne)&&!U.hasOwnProperty(Ne)&&(Ue[Ne]=$[Ne]===void 0&&me!==void 0?me[Ne]:$[Ne])}var Ne=arguments.length-2;if(Ne===1)Ue.children=Se;else if(1<Ne){me=Array(Ne);for(var je=0;je<Ne;je++)me[je]=arguments[je+2];Ue.children=me}return{$$typeof:s,type:P.type,key:Y,ref:fe,props:Ue,_owner:Me}},pt.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:l,_context:P},P.Consumer=P},pt.createElement=ee,pt.createFactory=function(P){var $=ee.bind(null,P);return $.type=P,$},pt.createRef=function(){return{current:null}},pt.forwardRef=function(P){return{$$typeof:d,render:P}},pt.isValidElement=A,pt.lazy=function(P){return{$$typeof:m,_payload:{_status:-1,_result:P},_init:he}},pt.memo=function(P,$){return{$$typeof:p,type:P,compare:$===void 0?null:$}},pt.startTransition=function(P){var $=z.transition;z.transition={};try{P()}finally{z.transition=$}},pt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},pt.useCallback=function(P,$){return ue.current.useCallback(P,$)},pt.useContext=function(P){return ue.current.useContext(P)},pt.useDebugValue=function(){},pt.useDeferredValue=function(P){return ue.current.useDeferredValue(P)},pt.useEffect=function(P,$){return ue.current.useEffect(P,$)},pt.useId=function(){return ue.current.useId()},pt.useImperativeHandle=function(P,$,Se){return ue.current.useImperativeHandle(P,$,Se)},pt.useInsertionEffect=function(P,$){return ue.current.useInsertionEffect(P,$)},pt.useLayoutEffect=function(P,$){return ue.current.useLayoutEffect(P,$)},pt.useMemo=function(P,$){return ue.current.useMemo(P,$)},pt.useReducer=function(P,$,Se){return ue.current.useReducer(P,$,Se)},pt.useRef=function(P){return ue.current.useRef(P)},pt.useState=function(P){return ue.current.useState(P)},pt.useSyncExternalStore=function(P,$,Se){return ue.current.useSyncExternalStore(P,$,Se)},pt.useTransition=function(){return ue.current.useTransition()},pt.version="18.2.0",pt}var xp;function kd(){return xp||(xp=1,Bu.exports=$0()),Bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function q0(){if(yp)return Bo;yp=1;var s=kd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var m,_={},g=null,S=null;p!==void 0&&(g=""+p),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(S=f.ref);for(m in f)i.call(f,m)&&!l.hasOwnProperty(m)&&(_[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)_[m]===void 0&&(_[m]=f[m]);return{$$typeof:e,type:d,key:g,ref:S,props:_,_owner:o.current}}return Bo.Fragment=t,Bo.jsx=u,Bo.jsxs=u,Bo}var Sp;function Y0(){return Sp||(Sp=1,zu.exports=q0()),zu.exports}var N=Y0(),Ee=kd();const K0=_g(Ee),Z0=X0({__proto__:null,default:K0},[Ee]);var ll={},Hu={exports:{}},Pn={},Vu={exports:{}},Gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function J0(){return Mp||(Mp=1,function(s){function e(z,re){var P=z.length;z.push(re);e:for(;0<P;){var $=P-1>>>1,Se=z[$];if(0<o(Se,re))z[$]=re,z[P]=Se,P=$;else break e}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var re=z[0],P=z.pop();if(P!==re){z[0]=P;e:for(var $=0,Se=z.length,Ue=Se>>>1;$<Ue;){var Y=2*($+1)-1,fe=z[Y],Me=Y+1,me=z[Me];if(0>o(fe,P))Me<Se&&0>o(me,fe)?(z[$]=me,z[Me]=P,$=Me):(z[$]=fe,z[Y]=P,$=Y);else if(Me<Se&&0>o(me,P))z[$]=me,z[Me]=P,$=Me;else break e}}return re}function o(z,re){var P=z.sortIndex-re.sortIndex;return P!==0?P:z.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var f=[],p=[],m=1,_=null,g=3,S=!1,M=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(z){for(var re=t(p);re!==null;){if(re.callback===null)i(p);else if(re.startTime<=z)i(p),re.sortIndex=re.expirationTime,e(f,re);else break;re=t(p)}}function L(z){if(T=!1,R(z),!M)if(t(f)!==null)M=!0,he(V);else{var re=t(p);re!==null&&ue(L,re.startTime-z)}}function V(z,re){M=!1,T&&(T=!1,y(ee),ee=-1),S=!0;var P=g;try{for(R(re),_=t(f);_!==null&&(!(_.expirationTime>re)||z&&!q());){var $=_.callback;if(typeof $=="function"){_.callback=null,g=_.priorityLevel;var Se=$(_.expirationTime<=re);re=s.unstable_now(),typeof Se=="function"?_.callback=Se:_===t(f)&&i(f),R(re)}else i(f);_=t(f)}if(_!==null)var Ue=!0;else{var Y=t(p);Y!==null&&ue(L,Y.startTime-re),Ue=!1}return Ue}finally{_=null,g=P,S=!1}}var F=!1,U=null,ee=-1,I=5,A=-1;function q(){return!(s.unstable_now()-A<I)}function le(){if(U!==null){var z=s.unstable_now();A=z;var re=!0;try{re=U(!0,z)}finally{re?G():(F=!1,U=null)}}else F=!1}var G;if(typeof D=="function")G=function(){D(le)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ae=ce.port2;ce.port1.onmessage=le,G=function(){ae.postMessage(null)}}else G=function(){x(le,0)};function he(z){U=z,F||(F=!0,G())}function ue(z,re){ee=x(function(){z(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,he(V))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(z){switch(g){case 1:case 2:case 3:var re=3;break;default:re=g}var P=g;g=re;try{return z()}finally{g=P}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,re){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var P=g;g=z;try{return re()}finally{g=P}},s.unstable_scheduleCallback=function(z,re,P){var $=s.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=P+Se,z={id:m++,callback:re,priorityLevel:z,startTime:P,expirationTime:Se,sortIndex:-1},P>$?(z.sortIndex=P,e(p,z),t(f)===null&&z===t(p)&&(T?(y(ee),ee=-1):T=!0,ue(L,P-$))):(z.sortIndex=Se,e(f,z),M||S||(M=!0,he(V))),z},s.unstable_shouldYield=q,s.unstable_wrapCallback=function(z){var re=g;return function(){var P=g;g=re;try{return z.apply(this,arguments)}finally{g=P}}}}(Gu)),Gu}var Ep;function Q0(){return Ep||(Ep=1,Vu.exports=J0()),Vu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function e_(){if(wp)return Pn;wp=1;var s=kd(),e=Q0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function g(n){return f.call(_,n)?!0:f.call(m,n)?!1:p.test(n)?_[n]=!0:(m[n]=!0,!1)}function S(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,a,c){if(r===null||typeof r>"u"||S(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(n,r,a,c,h,v,w){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];x[r]=new T(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,D);x[r]=new T(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,D);x[r]=new T(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,D);x[r]=new T(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,r,a,c){var h=x.hasOwnProperty(r)?x[r]:null;(h!==null?h.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,a,h,c)&&(a=null),c||h===null?g(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(r=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(r):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),q=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),z=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var P=Object.assign,$;function Se(n){if($===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);$=r&&r[1]||""}return`
`+$+n}var Ue=!1;function Y(n,r){if(!n||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ie){var c=ie}Reflect.construct(n,[],r)}else{try{r.call()}catch(ie){c=ie}n.call(r.prototype)}else{try{throw Error()}catch(ie){c=ie}n()}}catch(ie){if(ie&&c&&typeof ie.stack=="string"){for(var h=ie.stack.split(`
`),v=c.stack.split(`
`),w=h.length-1,O=v.length-1;1<=w&&0<=O&&h[w]!==v[O];)O--;for(;1<=w&&0<=O;w--,O--)if(h[w]!==v[O]){if(w!==1||O!==1)do if(w--,O--,0>O||h[w]!==v[O]){var B=`
`+h[w].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=w&&0<=O);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Se(n):""}function fe(n){switch(n.tag){case 5:return Se(n.type);case 16:return Se("Lazy");case 13:return Se("Suspense");case 19:return Se("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case F:return"Portal";case I:return"Profiler";case ee:return"StrictMode";case G:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case q:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case le:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ae:return r=n.displayName||null,r!==null?r:Me(n.type)||"Memo";case he:r=n._payload,n=n._init;try{return Me(n(r))}catch{}}return null}function me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(r);case 8:return r===ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ne(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function K(n){var r=je(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,v=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,v.call(this,w)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function gt(n){n._valueTracker||(n._valueTracker=K(n))}function We(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=je(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function vt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xe(n,r){var a=r.checked;return P({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function lt(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Ne(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function et(n,r){r=r.checked,r!=null&&R(n,"checked",r,!1)}function ct(n,r){et(n,r);var a=Ne(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?k(n,r.type,a):r.hasOwnProperty("defaultValue")&&k(n,r.type,Ne(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function At(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function k(n,r,a){(r!=="number"||vt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var C=Array.isArray;function se(n,r,a,c){if(n=n.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=r.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ne(a),r=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function de(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return P({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _e(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(C(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Ne(a)}}function xe(n,r){var a=Ne(r.value),c=Ne(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Re(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Re(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ze,Ae=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,h)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ze=Ze||document.createElement("div"),Ze.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ze.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Be(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var st={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(st).forEach(function(n){$e.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),st[r]=st[n]})});function De(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||st.hasOwnProperty(n)&&st[n]?(""+r).trim():r+"px"}function tt(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=De(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var ut=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yt(n,r){if(r){if(ut[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function nt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var E=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var J=null,pe=null,we=null;function it(n){if(n=To(n)){if(typeof J!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ea(r),J(n.stateNode,n.type,r))}}function ot(n){pe?we?we.push(n):we=[n]:pe=n}function Ct(){if(pe){var n=pe,r=we;if(we=pe=null,it(n),r)for(n=0;n<r.length;n++)it(r[n])}}function Bt(n,r){return n(r)}function mt(){}var Dt=!1;function wt(n,r,a){if(Dt)return n(r,a);Dt=!0;try{return Bt(n,r,a)}finally{Dt=!1,(pe!==null||we!==null)&&(mt(),Ct())}}function En(n,r){var a=n.stateNode;if(a===null)return null;var c=Ea(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var cn=!1;if(d)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){cn=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{cn=!1}function Yn(n,r,a,c,h,v,w,O,B){var ie=Array.prototype.slice.call(arguments,3);try{r.apply(a,ie)}catch(ve){this.onError(ve)}}var Kn=!1,Si=null,wr=!1,es=null,ic={onError:function(n){Kn=!0,Si=n}};function rc(n,r,a,c,h,v,w,O,B){Kn=!1,Si=null,Yn.apply(ic,arguments)}function sc(n,r,a,c,h,v,w,O,B){if(rc.apply(this,arguments),Kn){if(Kn){var ie=Si;Kn=!1,Si=null}else throw Error(t(198));wr||(wr=!0,es=ie)}}function b(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function W(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function oe(n){if(b(n)!==n)throw Error(t(188))}function ne(n){var r=n.alternate;if(!r){if(r=b(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var h=a.return;if(h===null)break;var v=h.alternate;if(v===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===a)return oe(h),n;if(v===c)return oe(h),r;v=v.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=v;else{for(var w=!1,O=h.child;O;){if(O===a){w=!0,a=h,c=v;break}if(O===c){w=!0,c=h,a=v;break}O=O.sibling}if(!w){for(O=v.child;O;){if(O===a){w=!0,a=v,c=h;break}if(O===c){w=!0,c=v,a=h;break}O=O.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function te(n){return n=ne(n),n!==null?be(n):null}function be(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=be(n);if(r!==null)return r;n=n.sibling}return null}var ze=e.unstable_scheduleCallback,Ve=e.unstable_cancelCallback,Ke=e.unstable_shouldYield,rt=e.unstable_requestPaint,Fe=e.unstable_now,dt=e.unstable_getCurrentPriorityLevel,It=e.unstable_ImmediatePriority,Wt=e.unstable_UserBlockingPriority,Jt=e.unstable_NormalPriority,Zn=e.unstable_LowPriority,_t=e.unstable_IdlePriority,Je=null,un=null;function Rt(n){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:so,aa=Math.log,Tr=Math.LN2;function so(n){return n>>>=0,n===0?32:31-(aa(n)/Tr|0)|0}var Ht=64,Dn=4194304;function Mi(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function rn(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,v=n.pingedLanes,w=a&268435455;if(w!==0){var O=w&~h;O!==0?c=Mi(O):(v&=w,v!==0&&(c=Mi(v)))}else w=a&~h,w!==0?c=Mi(w):v!==0&&(c=Mi(v));if(c===0)return 0;if(r!==0&&r!==c&&!(r&h)&&(h=c&-c,v=r&-r,h>=v||h===16&&(v&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Xt(r),h=1<<a,c|=n[a],r&=~h;return c}function oo(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oc(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,v=n.pendingLanes;0<v;){var w=31-Xt(v),O=1<<w,B=h[w];B===-1?(!(O&a)||O&c)&&(h[w]=oo(O,r)):B<=r&&(n.expiredLanes|=O),v&=~O}}function ts(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $d(){var n=Ht;return Ht<<=1,!(Ht&4194240)&&(Ht=64),n}function ac(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function ao(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Xt(r),n[r]=a}function pv(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Xt(a),v=1<<h;r[h]=0,c[h]=-1,n[h]=-1,a&=~v}}function lc(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Xt(a),h=1<<c;h&r|n[c]&r&&(n[c]|=r),a&=~h}}var Mt=0;function qd(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Yd,cc,Kd,Zd,Jd,uc=!1,la=[],Bi=null,Hi=null,Vi=null,lo=new Map,co=new Map,Gi=[],mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(n,r){switch(n){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":lo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(r.pointerId)}}function uo(n,r,a,c,h,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:v,targetContainers:[h]},r!==null&&(r=To(r),r!==null&&cc(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function gv(n,r,a,c,h){switch(r){case"focusin":return Bi=uo(Bi,n,r,a,c,h),!0;case"dragenter":return Hi=uo(Hi,n,r,a,c,h),!0;case"mouseover":return Vi=uo(Vi,n,r,a,c,h),!0;case"pointerover":var v=h.pointerId;return lo.set(v,uo(lo.get(v)||null,n,r,a,c,h)),!0;case"gotpointercapture":return v=h.pointerId,co.set(v,uo(co.get(v)||null,n,r,a,c,h)),!0}return!1}function ef(n){var r=Ar(n.target);if(r!==null){var a=b(r);if(a!==null){if(r=a.tag,r===13){if(r=W(a),r!==null){n.blockedOn=r,Jd(n.priority,function(){Kd(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ca(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=fc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);E=c,a.target.dispatchEvent(c),E=null}else return r=To(a),r!==null&&cc(r),n.blockedOn=a,!1;r.shift()}return!0}function tf(n,r,a){ca(n)&&a.delete(r)}function vv(){uc=!1,Bi!==null&&ca(Bi)&&(Bi=null),Hi!==null&&ca(Hi)&&(Hi=null),Vi!==null&&ca(Vi)&&(Vi=null),lo.forEach(tf),co.forEach(tf)}function fo(n,r){n.blockedOn===r&&(n.blockedOn=null,uc||(uc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vv)))}function ho(n){function r(h){return fo(h,n)}if(0<la.length){fo(la[0],n);for(var a=1;a<la.length;a++){var c=la[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Bi!==null&&fo(Bi,n),Hi!==null&&fo(Hi,n),Vi!==null&&fo(Vi,n),lo.forEach(r),co.forEach(r),a=0;a<Gi.length;a++)c=Gi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Gi.length&&(a=Gi[0],a.blockedOn===null);)ef(a),a.blockedOn===null&&Gi.shift()}var ns=L.ReactCurrentBatchConfig,ua=!0;function _v(n,r,a,c){var h=Mt,v=ns.transition;ns.transition=null;try{Mt=1,dc(n,r,a,c)}finally{Mt=h,ns.transition=v}}function xv(n,r,a,c){var h=Mt,v=ns.transition;ns.transition=null;try{Mt=4,dc(n,r,a,c)}finally{Mt=h,ns.transition=v}}function dc(n,r,a,c){if(ua){var h=fc(n,r,a,c);if(h===null)bc(n,r,c,da,a),Qd(n,c);else if(gv(h,n,r,a,c))c.stopPropagation();else if(Qd(n,c),r&4&&-1<mv.indexOf(n)){for(;h!==null;){var v=To(h);if(v!==null&&Yd(v),v=fc(n,r,a,c),v===null&&bc(n,r,c,da,a),v===h)break;h=v}h!==null&&c.stopPropagation()}else bc(n,r,c,null,a)}}var da=null;function fc(n,r,a,c){if(da=null,n=j(c),n=Ar(n),n!==null)if(r=b(n),r===null)n=null;else if(a=r.tag,a===13){if(n=W(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return da=n,null}function nf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dt()){case It:return 1;case Wt:return 4;case Jt:case Zn:return 16;case _t:return 536870912;default:return 16}default:return 16}}var ji=null,hc=null,fa=null;function rf(){if(fa)return fa;var n,r=hc,a=r.length,c,h="value"in ji?ji.value:ji.textContent,v=h.length;for(n=0;n<a&&r[n]===h[n];n++);var w=a-n;for(c=1;c<=w&&r[a-c]===h[v-c];c++);return fa=h.slice(n,1<c?1-c:void 0)}function ha(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function pa(){return!0}function sf(){return!1}function In(n){function r(a,c,h,v,w){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=v,this.target=w,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(v):v[O]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?pa:sf,this.isPropagationStopped=sf,this}return P(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),r}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=In(is),po=P({},is,{view:0,detail:0}),yv=In(po),mc,gc,mo,ma=P({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==mo&&(mo&&n.type==="mousemove"?(mc=n.screenX-mo.screenX,gc=n.screenY-mo.screenY):gc=mc=0,mo=n),mc)},movementY:function(n){return"movementY"in n?n.movementY:gc}}),of=In(ma),Sv=P({},ma,{dataTransfer:0}),Mv=In(Sv),Ev=P({},po,{relatedTarget:0}),vc=In(Ev),wv=P({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=In(wv),Av=P({},is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Cv=In(Av),Rv=P({},is,{data:0}),af=In(Rv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Lv[n])?!!r[n]:!1}function _c(){return Nv}var Dv=P({},po,{key:function(n){if(n.key){var r=bv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ha(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Pv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(n){return n.type==="keypress"?ha(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ha(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Iv=In(Dv),Uv=P({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lf=In(Uv),Ov=P({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),Fv=In(Ov),kv=P({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=In(kv),Bv=P({},ma,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=In(Bv),Vv=[9,13,27,32],xc=d&&"CompositionEvent"in window,go=null;d&&"documentMode"in document&&(go=document.documentMode);var Gv=d&&"TextEvent"in window&&!go,cf=d&&(!xc||go&&8<go&&11>=go),uf=" ",df=!1;function ff(n,r){switch(n){case"keyup":return Vv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var rs=!1;function jv(n,r){switch(n){case"compositionend":return hf(r);case"keypress":return r.which!==32?null:(df=!0,uf);case"textInput":return n=r.data,n===uf&&df?null:n;default:return null}}function Wv(n,r){if(rs)return n==="compositionend"||!xc&&ff(n,r)?(n=rf(),fa=hc=ji=null,rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return cf&&r.locale!=="ko"?null:r.data;default:return null}}var Xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Xv[n.type]:r==="textarea"}function mf(n,r,a,c){ot(c),r=ya(r,"onChange"),0<r.length&&(a=new pc("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var vo=null,_o=null;function $v(n){Df(n,0)}function ga(n){var r=cs(n);if(We(r))return n}function qv(n,r){if(n==="change")return r}var gf=!1;if(d){var yc;if(d){var Sc="oninput"in document;if(!Sc){var vf=document.createElement("div");vf.setAttribute("oninput","return;"),Sc=typeof vf.oninput=="function"}yc=Sc}else yc=!1;gf=yc&&(!document.documentMode||9<document.documentMode)}function _f(){vo&&(vo.detachEvent("onpropertychange",xf),_o=vo=null)}function xf(n){if(n.propertyName==="value"&&ga(_o)){var r=[];mf(r,_o,n,j(n)),wt($v,r)}}function Yv(n,r,a){n==="focusin"?(_f(),vo=r,_o=a,vo.attachEvent("onpropertychange",xf)):n==="focusout"&&_f()}function Kv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ga(_o)}function Zv(n,r){if(n==="click")return ga(r)}function Jv(n,r){if(n==="input"||n==="change")return ga(r)}function Qv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Jn=typeof Object.is=="function"?Object.is:Qv;function xo(n,r){if(Jn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(r,h)||!Jn(n[h],r[h]))return!1}return!0}function yf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sf(n,r){var a=yf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yf(a)}}function Mf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Mf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ef(){for(var n=window,r=vt();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=vt(n.document)}return r}function Mc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function e0(n){var r=Ef(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Mf(a.ownerDocument.documentElement,a)){if(c!==null&&Mc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,v=Math.min(c.start,h);c=c.end===void 0?v:Math.min(c.end,h),!n.extend&&v>c&&(h=c,c=v,v=h),h=Sf(a,v);var w=Sf(a,c);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),v>c?(n.addRange(r),n.extend(w.node,w.offset)):(r.setEnd(w.node,w.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var t0=d&&"documentMode"in document&&11>=document.documentMode,ss=null,Ec=null,yo=null,wc=!1;function wf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||ss==null||ss!==vt(c)||(c=ss,"selectionStart"in c&&Mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),yo&&xo(yo,c)||(yo=c,c=ya(Ec,"onSelect"),0<c.length&&(r=new pc("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=ss)))}function va(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var os={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},Tc={},Tf={};d&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function _a(n){if(Tc[n])return Tc[n];if(!os[n])return n;var r=os[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Tf)return Tc[n]=r[a];return n}var Af=_a("animationend"),Cf=_a("animationiteration"),Rf=_a("animationstart"),bf=_a("transitionend"),Pf=new Map,Lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(n,r){Pf.set(n,r),l(r,[n])}for(var Ac=0;Ac<Lf.length;Ac++){var Cc=Lf[Ac],n0=Cc.toLowerCase(),i0=Cc[0].toUpperCase()+Cc.slice(1);Wi(n0,"on"+i0)}Wi(Af,"onAnimationEnd"),Wi(Cf,"onAnimationIteration"),Wi(Rf,"onAnimationStart"),Wi("dblclick","onDoubleClick"),Wi("focusin","onFocus"),Wi("focusout","onBlur"),Wi(bf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function Nf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,sc(c,r,void 0,n),n.currentTarget=null}function Df(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var v=void 0;if(r)for(var w=c.length-1;0<=w;w--){var O=c[w],B=O.instance,ie=O.currentTarget;if(O=O.listener,B!==v&&h.isPropagationStopped())break e;Nf(h,O,ie),v=B}else for(w=0;w<c.length;w++){if(O=c[w],B=O.instance,ie=O.currentTarget,O=O.listener,B!==v&&h.isPropagationStopped())break e;Nf(h,O,ie),v=B}}}if(wr)throw n=es,wr=!1,es=null,n}function Pt(n,r){var a=r[Uc];a===void 0&&(a=r[Uc]=new Set);var c=n+"__bubble";a.has(c)||(If(r,n,2,!1),a.add(c))}function Rc(n,r,a){var c=0;r&&(c|=4),If(a,n,c,r)}var xa="_reactListening"+Math.random().toString(36).slice(2);function Mo(n){if(!n[xa]){n[xa]=!0,i.forEach(function(a){a!=="selectionchange"&&(r0.has(a)||Rc(a,!1,n),Rc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[xa]||(r[xa]=!0,Rc("selectionchange",!1,r))}}function If(n,r,a,c){switch(nf(r)){case 1:var h=_v;break;case 4:h=xv;break;default:h=dc}a=h.bind(null,r,a,n),h=void 0,!cn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(r,a,{capture:!0,passive:h}):n.addEventListener(r,a,!0):h!==void 0?n.addEventListener(r,a,{passive:h}):n.addEventListener(r,a,!1)}function bc(n,r,a,c,h){var v=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var O=c.stateNode.containerInfo;if(O===h||O.nodeType===8&&O.parentNode===h)break;if(w===4)for(w=c.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===h||B.nodeType===8&&B.parentNode===h))return;w=w.return}for(;O!==null;){if(w=Ar(O),w===null)return;if(B=w.tag,B===5||B===6){c=v=w;continue e}O=O.parentNode}}c=c.return}wt(function(){var ie=v,ve=j(a),ye=[];e:{var ge=Pf.get(n);if(ge!==void 0){var Le=pc,Oe=n;switch(n){case"keypress":if(ha(a)===0)break e;case"keydown":case"keyup":Le=Iv;break;case"focusin":Oe="focus",Le=vc;break;case"focusout":Oe="blur",Le=vc;break;case"beforeblur":case"afterblur":Le=vc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Fv;break;case Af:case Cf:case Rf:Le=Tv;break;case bf:Le=zv;break;case"scroll":Le=yv;break;case"wheel":Le=Hv;break;case"copy":case"cut":case"paste":Le=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=lf}var ke=(r&4)!==0,Vt=!ke&&n==="scroll",X=ke?ge!==null?ge+"Capture":null:ge;ke=[];for(var H=ie,Z;H!==null;){Z=H;var Te=Z.stateNode;if(Z.tag===5&&Te!==null&&(Z=Te,X!==null&&(Te=En(H,X),Te!=null&&ke.push(Eo(H,Te,Z)))),Vt)break;H=H.return}0<ke.length&&(ge=new Le(ge,Oe,null,a,ve),ye.push({event:ge,listeners:ke}))}}if(!(r&7)){e:{if(ge=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",ge&&a!==E&&(Oe=a.relatedTarget||a.fromElement)&&(Ar(Oe)||Oe[Ei]))break e;if((Le||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Le?(Oe=a.relatedTarget||a.toElement,Le=ie,Oe=Oe?Ar(Oe):null,Oe!==null&&(Vt=b(Oe),Oe!==Vt||Oe.tag!==5&&Oe.tag!==6)&&(Oe=null)):(Le=null,Oe=ie),Le!==Oe)){if(ke=of,Te="onMouseLeave",X="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(ke=lf,Te="onPointerLeave",X="onPointerEnter",H="pointer"),Vt=Le==null?ge:cs(Le),Z=Oe==null?ge:cs(Oe),ge=new ke(Te,H+"leave",Le,a,ve),ge.target=Vt,ge.relatedTarget=Z,Te=null,Ar(ve)===ie&&(ke=new ke(X,H+"enter",Oe,a,ve),ke.target=Z,ke.relatedTarget=Vt,Te=ke),Vt=Te,Le&&Oe)t:{for(ke=Le,X=Oe,H=0,Z=ke;Z;Z=as(Z))H++;for(Z=0,Te=X;Te;Te=as(Te))Z++;for(;0<H-Z;)ke=as(ke),H--;for(;0<Z-H;)X=as(X),Z--;for(;H--;){if(ke===X||X!==null&&ke===X.alternate)break t;ke=as(ke),X=as(X)}ke=null}else ke=null;Le!==null&&Uf(ye,ge,Le,ke,!1),Oe!==null&&Vt!==null&&Uf(ye,Vt,Oe,ke,!0)}}e:{if(ge=ie?cs(ie):window,Le=ge.nodeName&&ge.nodeName.toLowerCase(),Le==="select"||Le==="input"&&ge.type==="file")var He=qv;else if(pf(ge))if(gf)He=Jv;else{He=Kv;var qe=Yv}else(Le=ge.nodeName)&&Le.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(He=Zv);if(He&&(He=He(n,ie))){mf(ye,He,a,ve);break e}qe&&qe(n,ge,ie),n==="focusout"&&(qe=ge._wrapperState)&&qe.controlled&&ge.type==="number"&&k(ge,"number",ge.value)}switch(qe=ie?cs(ie):window,n){case"focusin":(pf(qe)||qe.contentEditable==="true")&&(ss=qe,Ec=ie,yo=null);break;case"focusout":yo=Ec=ss=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,wf(ye,a,ve);break;case"selectionchange":if(t0)break;case"keydown":case"keyup":wf(ye,a,ve)}var Ye;if(xc)e:{switch(n){case"compositionstart":var Qe="onCompositionStart";break e;case"compositionend":Qe="onCompositionEnd";break e;case"compositionupdate":Qe="onCompositionUpdate";break e}Qe=void 0}else rs?ff(n,a)&&(Qe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Qe="onCompositionStart");Qe&&(cf&&a.locale!=="ko"&&(rs||Qe!=="onCompositionStart"?Qe==="onCompositionEnd"&&rs&&(Ye=rf()):(ji=ve,hc="value"in ji?ji.value:ji.textContent,rs=!0)),qe=ya(ie,Qe),0<qe.length&&(Qe=new af(Qe,n,null,a,ve),ye.push({event:Qe,listeners:qe}),Ye?Qe.data=Ye:(Ye=hf(a),Ye!==null&&(Qe.data=Ye)))),(Ye=Gv?jv(n,a):Wv(n,a))&&(ie=ya(ie,"onBeforeInput"),0<ie.length&&(ve=new af("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:ie}),ve.data=Ye))}Df(ye,r)})}function Eo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function ya(n,r){for(var a=r+"Capture",c=[];n!==null;){var h=n,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=En(n,a),v!=null&&c.unshift(Eo(n,v,h)),v=En(n,r),v!=null&&c.push(Eo(n,v,h))),n=n.return}return c}function as(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Uf(n,r,a,c,h){for(var v=r._reactName,w=[];a!==null&&a!==c;){var O=a,B=O.alternate,ie=O.stateNode;if(B!==null&&B===c)break;O.tag===5&&ie!==null&&(O=ie,h?(B=En(a,v),B!=null&&w.unshift(Eo(a,B,O))):h||(B=En(a,v),B!=null&&w.push(Eo(a,B,O)))),a=a.return}w.length!==0&&n.push({event:r,listeners:w})}var s0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function Of(n){return(typeof n=="string"?n:""+n).replace(s0,`
`).replace(o0,"")}function Sa(n,r,a){if(r=Of(r),Of(n)!==r&&a)throw Error(t(425))}function Ma(){}var Pc=null,Lc=null;function Nc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,Ff=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ff<"u"?function(n){return Ff.resolve(null).then(n).catch(c0)}:Dc;function c0(n){setTimeout(function(){throw n})}function Ic(n,r){var a=r,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),ho(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);ho(r)}function Xi(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function kf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var ls=Math.random().toString(36).slice(2),li="__reactFiber$"+ls,wo="__reactProps$"+ls,Ei="__reactContainer$"+ls,Uc="__reactEvents$"+ls,u0="__reactListeners$"+ls,d0="__reactHandles$"+ls;function Ar(n){var r=n[li];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ei]||a[li]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=kf(n);n!==null;){if(a=n[li])return a;n=kf(n)}return r}n=a,a=n.parentNode}return null}function To(n){return n=n[li]||n[Ei],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ea(n){return n[wo]||null}var Oc=[],us=-1;function $i(n){return{current:n}}function Lt(n){0>us||(n.current=Oc[us],Oc[us]=null,us--)}function bt(n,r){us++,Oc[us]=n.current,n.current=r}var qi={},dn=$i(qi),Tn=$i(!1),Cr=qi;function ds(n,r){var a=n.type.contextTypes;if(!a)return qi;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in a)h[v]=r[v];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function An(n){return n=n.childContextTypes,n!=null}function wa(){Lt(Tn),Lt(dn)}function zf(n,r,a){if(dn.current!==qi)throw Error(t(168));bt(dn,r),bt(Tn,a)}function Bf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in r))throw Error(t(108,me(n)||"Unknown",h));return P({},a,c)}function Ta(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||qi,Cr=dn.current,bt(dn,n),bt(Tn,Tn.current),!0}function Hf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Bf(n,r,Cr),c.__reactInternalMemoizedMergedChildContext=n,Lt(Tn),Lt(dn),bt(dn,n)):Lt(Tn),bt(Tn,a)}var wi=null,Aa=!1,Fc=!1;function Vf(n){wi===null?wi=[n]:wi.push(n)}function f0(n){Aa=!0,Vf(n)}function Yi(){if(!Fc&&wi!==null){Fc=!0;var n=0,r=Mt;try{var a=wi;for(Mt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}wi=null,Aa=!1}catch(h){throw wi!==null&&(wi=wi.slice(n+1)),ze(It,Yi),h}finally{Mt=r,Fc=!1}}return null}var fs=[],hs=0,Ca=null,Ra=0,Bn=[],Hn=0,Rr=null,Ti=1,Ai="";function br(n,r){fs[hs++]=Ra,fs[hs++]=Ca,Ca=n,Ra=r}function Gf(n,r,a){Bn[Hn++]=Ti,Bn[Hn++]=Ai,Bn[Hn++]=Rr,Rr=n;var c=Ti;n=Ai;var h=32-Xt(c)-1;c&=~(1<<h),a+=1;var v=32-Xt(r)+h;if(30<v){var w=h-h%5;v=(c&(1<<w)-1).toString(32),c>>=w,h-=w,Ti=1<<32-Xt(r)+h|a<<h|c,Ai=v+n}else Ti=1<<v|a<<h|c,Ai=n}function kc(n){n.return!==null&&(br(n,1),Gf(n,1,0))}function zc(n){for(;n===Ca;)Ca=fs[--hs],fs[hs]=null,Ra=fs[--hs],fs[hs]=null;for(;n===Rr;)Rr=Bn[--Hn],Bn[Hn]=null,Ai=Bn[--Hn],Bn[Hn]=null,Ti=Bn[--Hn],Bn[Hn]=null}var Un=null,On=null,Ut=!1,Qn=null;function jf(n,r){var a=Wn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Wf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Un=n,On=Xi(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Un=n,On=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Rr!==null?{id:Ti,overflow:Ai}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Wn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,Un=n,On=null,!0):!1;default:return!1}}function Bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Hc(n){if(Ut){var r=On;if(r){var a=r;if(!Wf(n,r)){if(Bc(n))throw Error(t(418));r=Xi(a.nextSibling);var c=Un;r&&Wf(n,r)?jf(c,a):(n.flags=n.flags&-4097|2,Ut=!1,Un=n)}}else{if(Bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ut=!1,Un=n}}}function Xf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Un=n}function ba(n){if(n!==Un)return!1;if(!Ut)return Xf(n),Ut=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Nc(n.type,n.memoizedProps)),r&&(r=On)){if(Bc(n))throw $f(),Error(t(418));for(;r;)jf(n,r),r=Xi(r.nextSibling)}if(Xf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){On=Xi(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}On=null}}else On=Un?Xi(n.stateNode.nextSibling):null;return!0}function $f(){for(var n=On;n;)n=Xi(n.nextSibling)}function ps(){On=Un=null,Ut=!1}function Vc(n){Qn===null?Qn=[n]:Qn.push(n)}var h0=L.ReactCurrentBatchConfig;function ei(n,r){if(n&&n.defaultProps){r=P({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}var Pa=$i(null),La=null,ms=null,Gc=null;function jc(){Gc=ms=La=null}function Wc(n){var r=Pa.current;Lt(Pa),n._currentValue=r}function Xc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function gs(n,r){La=n,Gc=ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Cn=!0),n.firstContext=null)}function Vn(n){var r=n._currentValue;if(Gc!==n)if(n={context:n,memoizedValue:r,next:null},ms===null){if(La===null)throw Error(t(308));ms=n,La.dependencies={lanes:0,firstContext:n}}else ms=ms.next=n;return r}var Pr=null;function $c(n){Pr===null?Pr=[n]:Pr.push(n)}function qf(n,r,a,c){var h=r.interleaved;return h===null?(a.next=a,$c(r)):(a.next=h.next,h.next=a),r.interleaved=a,Ci(n,c)}function Ci(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ki=!1;function qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ri(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Zi(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,xt&2){var h=c.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),c.pending=r,Ci(n,a)}return h=c.interleaved,h===null?(r.next=r,$c(c)):(r.next=h.next,h.next=r),c.interleaved=r,Ci(n,a)}function Na(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,lc(n,a)}}function Kf(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?h=v=w:v=v.next=w,a=a.next}while(a!==null);v===null?h=v=r:v=v.next=r}else h=v=r;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Da(n,r,a,c){var h=n.updateQueue;Ki=!1;var v=h.firstBaseUpdate,w=h.lastBaseUpdate,O=h.shared.pending;if(O!==null){h.shared.pending=null;var B=O,ie=B.next;B.next=null,w===null?v=ie:w.next=ie,w=B;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,O=ve.lastBaseUpdate,O!==w&&(O===null?ve.firstBaseUpdate=ie:O.next=ie,ve.lastBaseUpdate=B))}if(v!==null){var ye=h.baseState;w=0,ve=ie=B=null,O=v;do{var ge=O.lane,Le=O.eventTime;if((c&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Le,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Oe=n,ke=O;switch(ge=r,Le=a,ke.tag){case 1:if(Oe=ke.payload,typeof Oe=="function"){ye=Oe.call(Le,ye,ge);break e}ye=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=ke.payload,ge=typeof Oe=="function"?Oe.call(Le,ye,ge):Oe,ge==null)break e;ye=P({},ye,ge);break e;case 2:Ki=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,ge=h.effects,ge===null?h.effects=[O]:ge.push(O))}else Le={eventTime:Le,lane:ge,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ve===null?(ie=ve=Le,B=ye):ve=ve.next=Le,w|=ge;if(O=O.next,O===null){if(O=h.shared.pending,O===null)break;ge=O,O=ge.next,ge.next=null,h.lastBaseUpdate=ge,h.shared.pending=null}}while(!0);if(ve===null&&(B=ye),h.baseState=B,h.firstBaseUpdate=ie,h.lastBaseUpdate=ve,r=h.shared.interleaved,r!==null){h=r;do w|=h.lane,h=h.next;while(h!==r)}else v===null&&(h.shared.lanes=0);Dr|=w,n.lanes=w,n.memoizedState=ye}}function Zf(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Jf=new s.Component().refs;function Yc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:P({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ia={isMounted:function(n){return(n=n._reactInternals)?b(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=xn(),h=tr(n),v=Ri(c,h);v.payload=r,a!=null&&(v.callback=a),r=Zi(n,v,h),r!==null&&(ii(r,n,h,c),Na(r,n,h))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=xn(),h=tr(n),v=Ri(c,h);v.tag=1,v.payload=r,a!=null&&(v.callback=a),r=Zi(n,v,h),r!==null&&(ii(r,n,h,c),Na(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=xn(),c=tr(n),h=Ri(a,c);h.tag=2,r!=null&&(h.callback=r),r=Zi(n,h,c),r!==null&&(ii(r,n,c,a),Na(r,n,c))}};function Qf(n,r,a,c,h,v,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,w):r.prototype&&r.prototype.isPureReactComponent?!xo(a,c)||!xo(h,v):!0}function eh(n,r,a){var c=!1,h=qi,v=r.contextType;return typeof v=="object"&&v!==null?v=Vn(v):(h=An(r)?Cr:dn.current,c=r.contextTypes,v=(c=c!=null)?ds(n,h):qi),r=new r(a,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ia,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=v),r}function th(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Ia.enqueueReplaceState(r,r.state,null)}function Kc(n,r,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs=Jf,qc(n);var v=r.contextType;typeof v=="object"&&v!==null?h.context=Vn(v):(v=An(r)?Cr:dn.current,h.context=ds(n,v)),h.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Yc(n,r,v,a),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&Ia.enqueueReplaceState(h,h.state,null),Da(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ao(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(w){var O=h.refs;O===Jf&&(O=h.refs={}),w===null?delete O[v]:O[v]=w},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ua(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function nh(n){var r=n._init;return r(n._payload)}function ih(n){function r(X,H){if(n){var Z=X.deletions;Z===null?(X.deletions=[H],X.flags|=16):Z.push(H)}}function a(X,H){if(!n)return null;for(;H!==null;)r(X,H),H=H.sibling;return null}function c(X,H){for(X=new Map;H!==null;)H.key!==null?X.set(H.key,H):X.set(H.index,H),H=H.sibling;return X}function h(X,H){return X=ir(X,H),X.index=0,X.sibling=null,X}function v(X,H,Z){return X.index=Z,n?(Z=X.alternate,Z!==null?(Z=Z.index,Z<H?(X.flags|=2,H):Z):(X.flags|=2,H)):(X.flags|=1048576,H)}function w(X){return n&&X.alternate===null&&(X.flags|=2),X}function O(X,H,Z,Te){return H===null||H.tag!==6?(H=Du(Z,X.mode,Te),H.return=X,H):(H=h(H,Z),H.return=X,H)}function B(X,H,Z,Te){var He=Z.type;return He===U?ve(X,H,Z.props.children,Te,Z.key):H!==null&&(H.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===he&&nh(He)===H.type)?(Te=h(H,Z.props),Te.ref=Ao(X,H,Z),Te.return=X,Te):(Te=el(Z.type,Z.key,Z.props,null,X.mode,Te),Te.ref=Ao(X,H,Z),Te.return=X,Te)}function ie(X,H,Z,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==Z.containerInfo||H.stateNode.implementation!==Z.implementation?(H=Iu(Z,X.mode,Te),H.return=X,H):(H=h(H,Z.children||[]),H.return=X,H)}function ve(X,H,Z,Te,He){return H===null||H.tag!==7?(H=Fr(Z,X.mode,Te,He),H.return=X,H):(H=h(H,Z),H.return=X,H)}function ye(X,H,Z){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Du(""+H,X.mode,Z),H.return=X,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case V:return Z=el(H.type,H.key,H.props,null,X.mode,Z),Z.ref=Ao(X,null,H),Z.return=X,Z;case F:return H=Iu(H,X.mode,Z),H.return=X,H;case he:var Te=H._init;return ye(X,Te(H._payload),Z)}if(C(H)||re(H))return H=Fr(H,X.mode,Z,null),H.return=X,H;Ua(X,H)}return null}function ge(X,H,Z,Te){var He=H!==null?H.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return He!==null?null:O(X,H,""+Z,Te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:return Z.key===He?B(X,H,Z,Te):null;case F:return Z.key===He?ie(X,H,Z,Te):null;case he:return He=Z._init,ge(X,H,He(Z._payload),Te)}if(C(Z)||re(Z))return He!==null?null:ve(X,H,Z,Te,null);Ua(X,Z)}return null}function Le(X,H,Z,Te,He){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return X=X.get(Z)||null,O(H,X,""+Te,He);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case V:return X=X.get(Te.key===null?Z:Te.key)||null,B(H,X,Te,He);case F:return X=X.get(Te.key===null?Z:Te.key)||null,ie(H,X,Te,He);case he:var qe=Te._init;return Le(X,H,Z,qe(Te._payload),He)}if(C(Te)||re(Te))return X=X.get(Z)||null,ve(H,X,Te,He,null);Ua(H,Te)}return null}function Oe(X,H,Z,Te){for(var He=null,qe=null,Ye=H,Qe=H=0,tn=null;Ye!==null&&Qe<Z.length;Qe++){Ye.index>Qe?(tn=Ye,Ye=null):tn=Ye.sibling;var St=ge(X,Ye,Z[Qe],Te);if(St===null){Ye===null&&(Ye=tn);break}n&&Ye&&St.alternate===null&&r(X,Ye),H=v(St,H,Qe),qe===null?He=St:qe.sibling=St,qe=St,Ye=tn}if(Qe===Z.length)return a(X,Ye),Ut&&br(X,Qe),He;if(Ye===null){for(;Qe<Z.length;Qe++)Ye=ye(X,Z[Qe],Te),Ye!==null&&(H=v(Ye,H,Qe),qe===null?He=Ye:qe.sibling=Ye,qe=Ye);return Ut&&br(X,Qe),He}for(Ye=c(X,Ye);Qe<Z.length;Qe++)tn=Le(Ye,X,Qe,Z[Qe],Te),tn!==null&&(n&&tn.alternate!==null&&Ye.delete(tn.key===null?Qe:tn.key),H=v(tn,H,Qe),qe===null?He=tn:qe.sibling=tn,qe=tn);return n&&Ye.forEach(function(rr){return r(X,rr)}),Ut&&br(X,Qe),He}function ke(X,H,Z,Te){var He=re(Z);if(typeof He!="function")throw Error(t(150));if(Z=He.call(Z),Z==null)throw Error(t(151));for(var qe=He=null,Ye=H,Qe=H=0,tn=null,St=Z.next();Ye!==null&&!St.done;Qe++,St=Z.next()){Ye.index>Qe?(tn=Ye,Ye=null):tn=Ye.sibling;var rr=ge(X,Ye,St.value,Te);if(rr===null){Ye===null&&(Ye=tn);break}n&&Ye&&rr.alternate===null&&r(X,Ye),H=v(rr,H,Qe),qe===null?He=rr:qe.sibling=rr,qe=rr,Ye=tn}if(St.done)return a(X,Ye),Ut&&br(X,Qe),He;if(Ye===null){for(;!St.done;Qe++,St=Z.next())St=ye(X,St.value,Te),St!==null&&(H=v(St,H,Qe),qe===null?He=St:qe.sibling=St,qe=St);return Ut&&br(X,Qe),He}for(Ye=c(X,Ye);!St.done;Qe++,St=Z.next())St=Le(Ye,X,Qe,St.value,Te),St!==null&&(n&&St.alternate!==null&&Ye.delete(St.key===null?Qe:St.key),H=v(St,H,Qe),qe===null?He=St:qe.sibling=St,qe=St);return n&&Ye.forEach(function(W0){return r(X,W0)}),Ut&&br(X,Qe),He}function Vt(X,H,Z,Te){if(typeof Z=="object"&&Z!==null&&Z.type===U&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:e:{for(var He=Z.key,qe=H;qe!==null;){if(qe.key===He){if(He=Z.type,He===U){if(qe.tag===7){a(X,qe.sibling),H=h(qe,Z.props.children),H.return=X,X=H;break e}}else if(qe.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===he&&nh(He)===qe.type){a(X,qe.sibling),H=h(qe,Z.props),H.ref=Ao(X,qe,Z),H.return=X,X=H;break e}a(X,qe);break}else r(X,qe);qe=qe.sibling}Z.type===U?(H=Fr(Z.props.children,X.mode,Te,Z.key),H.return=X,X=H):(Te=el(Z.type,Z.key,Z.props,null,X.mode,Te),Te.ref=Ao(X,H,Z),Te.return=X,X=Te)}return w(X);case F:e:{for(qe=Z.key;H!==null;){if(H.key===qe)if(H.tag===4&&H.stateNode.containerInfo===Z.containerInfo&&H.stateNode.implementation===Z.implementation){a(X,H.sibling),H=h(H,Z.children||[]),H.return=X,X=H;break e}else{a(X,H);break}else r(X,H);H=H.sibling}H=Iu(Z,X.mode,Te),H.return=X,X=H}return w(X);case he:return qe=Z._init,Vt(X,H,qe(Z._payload),Te)}if(C(Z))return Oe(X,H,Z,Te);if(re(Z))return ke(X,H,Z,Te);Ua(X,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,H!==null&&H.tag===6?(a(X,H.sibling),H=h(H,Z),H.return=X,X=H):(a(X,H),H=Du(Z,X.mode,Te),H.return=X,X=H),w(X)):a(X,H)}return Vt}var vs=ih(!0),rh=ih(!1),Co={},ci=$i(Co),Ro=$i(Co),bo=$i(Co);function Lr(n){if(n===Co)throw Error(t(174));return n}function Zc(n,r){switch(bt(bo,r),bt(Ro,n),bt(ci,Co),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ce(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ce(r,n)}Lt(ci),bt(ci,r)}function _s(){Lt(ci),Lt(Ro),Lt(bo)}function sh(n){Lr(bo.current);var r=Lr(ci.current),a=Ce(r,n.type);r!==a&&(bt(Ro,n),bt(ci,a))}function Jc(n){Ro.current===n&&(Lt(ci),Lt(Ro))}var Ot=$i(0);function Oa(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Qc=[];function eu(){for(var n=0;n<Qc.length;n++)Qc[n]._workInProgressVersionPrimary=null;Qc.length=0}var Fa=L.ReactCurrentDispatcher,tu=L.ReactCurrentBatchConfig,Nr=0,Ft=null,$t=null,Qt=null,ka=!1,Po=!1,Lo=0,p0=0;function fn(){throw Error(t(321))}function nu(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Jn(n[a],r[a]))return!1;return!0}function iu(n,r,a,c,h,v){if(Nr=v,Ft=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Fa.current=n===null||n.memoizedState===null?_0:x0,n=a(c,h),Po){v=0;do{if(Po=!1,Lo=0,25<=v)throw Error(t(301));v+=1,Qt=$t=null,r.updateQueue=null,Fa.current=y0,n=a(c,h)}while(Po)}if(Fa.current=Ha,r=$t!==null&&$t.next!==null,Nr=0,Qt=$t=Ft=null,ka=!1,r)throw Error(t(300));return n}function ru(){var n=Lo!==0;return Lo=0,n}function ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Ft.memoizedState=Qt=n:Qt=Qt.next=n,Qt}function Gn(){if($t===null){var n=Ft.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var r=Qt===null?Ft.memoizedState:Qt.next;if(r!==null)Qt=r,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Qt===null?Ft.memoizedState=Qt=n:Qt=Qt.next=n}return Qt}function No(n,r){return typeof r=="function"?r(n):r}function su(n){var r=Gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=$t,h=c.baseQueue,v=a.pending;if(v!==null){if(h!==null){var w=h.next;h.next=v.next,v.next=w}c.baseQueue=h=v,a.pending=null}if(h!==null){v=h.next,c=c.baseState;var O=w=null,B=null,ie=v;do{var ve=ie.lane;if((Nr&ve)===ve)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),c=ie.hasEagerState?ie.eagerState:n(c,ie.action);else{var ye={lane:ve,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(O=B=ye,w=c):B=B.next=ye,Ft.lanes|=ve,Dr|=ve}ie=ie.next}while(ie!==null&&ie!==v);B===null?w=c:B.next=O,Jn(c,r.memoizedState)||(Cn=!0),r.memoizedState=c,r.baseState=w,r.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do v=h.lane,Ft.lanes|=v,Dr|=v,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function ou(n){var r=Gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,v=r.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do v=n(v,w.action),w=w.next;while(w!==h);Jn(v,r.memoizedState)||(Cn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),a.lastRenderedState=v}return[v,c]}function oh(){}function ah(n,r){var a=Ft,c=Gn(),h=r(),v=!Jn(c.memoizedState,h);if(v&&(c.memoizedState=h,Cn=!0),c=c.queue,au(uh.bind(null,a,c,n),[n]),c.getSnapshot!==r||v||Qt!==null&&Qt.memoizedState.tag&1){if(a.flags|=2048,Do(9,ch.bind(null,a,c,h,r),void 0,null),en===null)throw Error(t(349));Nr&30||lh(a,r,h)}return h}function lh(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ft.updateQueue,r===null?(r={lastEffect:null,stores:null},Ft.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function ch(n,r,a,c){r.value=a,r.getSnapshot=c,dh(r)&&fh(n)}function uh(n,r,a){return a(function(){dh(r)&&fh(n)})}function dh(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Jn(n,a)}catch{return!0}}function fh(n){var r=Ci(n,1);r!==null&&ii(r,n,1,-1)}function hh(n){var r=ui();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},r.queue=n,n=n.dispatch=v0.bind(null,Ft,n),[r.memoizedState,n]}function Do(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ft.updateQueue,r===null?(r={lastEffect:null,stores:null},Ft.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function ph(){return Gn().memoizedState}function za(n,r,a,c){var h=ui();Ft.flags|=n,h.memoizedState=Do(1|r,a,void 0,c===void 0?null:c)}function Ba(n,r,a,c){var h=Gn();c=c===void 0?null:c;var v=void 0;if($t!==null){var w=$t.memoizedState;if(v=w.destroy,c!==null&&nu(c,w.deps)){h.memoizedState=Do(r,a,v,c);return}}Ft.flags|=n,h.memoizedState=Do(1|r,a,v,c)}function mh(n,r){return za(8390656,8,n,r)}function au(n,r){return Ba(2048,8,n,r)}function gh(n,r){return Ba(4,2,n,r)}function vh(n,r){return Ba(4,4,n,r)}function _h(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function xh(n,r,a){return a=a!=null?a.concat([n]):null,Ba(4,4,_h.bind(null,r,n),a)}function lu(){}function yh(n,r){var a=Gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&nu(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Sh(n,r){var a=Gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&nu(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Mh(n,r,a){return Nr&21?(Jn(a,r)||(a=$d(),Ft.lanes|=a,Dr|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=a)}function m0(n,r){var a=Mt;Mt=a!==0&&4>a?a:4,n(!0);var c=tu.transition;tu.transition={};try{n(!1),r()}finally{Mt=a,tu.transition=c}}function Eh(){return Gn().memoizedState}function g0(n,r,a){var c=tr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},wh(n))Th(r,a);else if(a=qf(n,r,a,c),a!==null){var h=xn();ii(a,n,c,h),Ah(a,r,c)}}function v0(n,r,a){var c=tr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(wh(n))Th(r,h);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var w=r.lastRenderedState,O=v(w,a);if(h.hasEagerState=!0,h.eagerState=O,Jn(O,w)){var B=r.interleaved;B===null?(h.next=h,$c(r)):(h.next=B.next,B.next=h),r.interleaved=h;return}}catch{}finally{}a=qf(n,r,h,c),a!==null&&(h=xn(),ii(a,n,c,h),Ah(a,r,c))}}function wh(n){var r=n.alternate;return n===Ft||r!==null&&r===Ft}function Th(n,r){Po=ka=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Ah(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,lc(n,a)}}var Ha={readContext:Vn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},_0={readContext:Vn,useCallback:function(n,r){return ui().memoizedState=[n,r===void 0?null:r],n},useContext:Vn,useEffect:mh,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,za(4194308,4,_h.bind(null,r,n),a)},useLayoutEffect:function(n,r){return za(4194308,4,n,r)},useInsertionEffect:function(n,r){return za(4,2,n,r)},useMemo:function(n,r){var a=ui();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=ui();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=g0.bind(null,Ft,n),[c.memoizedState,n]},useRef:function(n){var r=ui();return n={current:n},r.memoizedState=n},useState:hh,useDebugValue:lu,useDeferredValue:function(n){return ui().memoizedState=n},useTransition:function(){var n=hh(!1),r=n[0];return n=m0.bind(null,n[1]),ui().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ft,h=ui();if(Ut){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),en===null)throw Error(t(349));Nr&30||lh(c,r,a)}h.memoizedState=a;var v={value:a,getSnapshot:r};return h.queue=v,mh(uh.bind(null,c,v,n),[n]),c.flags|=2048,Do(9,ch.bind(null,c,v,a,r),void 0,null),a},useId:function(){var n=ui(),r=en.identifierPrefix;if(Ut){var a=Ai,c=Ti;a=(c&~(1<<32-Xt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Lo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=p0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},x0={readContext:Vn,useCallback:yh,useContext:Vn,useEffect:au,useImperativeHandle:xh,useInsertionEffect:gh,useLayoutEffect:vh,useMemo:Sh,useReducer:su,useRef:ph,useState:function(){return su(No)},useDebugValue:lu,useDeferredValue:function(n){var r=Gn();return Mh(r,$t.memoizedState,n)},useTransition:function(){var n=su(No)[0],r=Gn().memoizedState;return[n,r]},useMutableSource:oh,useSyncExternalStore:ah,useId:Eh,unstable_isNewReconciler:!1},y0={readContext:Vn,useCallback:yh,useContext:Vn,useEffect:au,useImperativeHandle:xh,useInsertionEffect:gh,useLayoutEffect:vh,useMemo:Sh,useReducer:ou,useRef:ph,useState:function(){return ou(No)},useDebugValue:lu,useDeferredValue:function(n){var r=Gn();return $t===null?r.memoizedState=n:Mh(r,$t.memoizedState,n)},useTransition:function(){var n=ou(No)[0],r=Gn().memoizedState;return[n,r]},useMutableSource:oh,useSyncExternalStore:ah,useId:Eh,unstable_isNewReconciler:!1};function xs(n,r){try{var a="",c=r;do a+=fe(c),c=c.return;while(c);var h=a}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:h,digest:null}}function cu(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function uu(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var S0=typeof WeakMap=="function"?WeakMap:Map;function Ch(n,r,a){a=Ri(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){qa||(qa=!0,Tu=c),uu(n,r)},a}function Rh(n,r,a){a=Ri(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=r.value;a.payload=function(){return c(h)},a.callback=function(){uu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){uu(n,r),typeof c!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})}),a}function bh(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new S0;var h=new Set;c.set(r,h)}else h=c.get(r),h===void 0&&(h=new Set,c.set(r,h));h.has(a)||(h.add(a),n=U0.bind(null,n,r,a),r.then(n,n))}function Ph(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Lh(n,r,a,c,h){return n.mode&1?(n.flags|=65536,n.lanes=h,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ri(-1,1),r.tag=2,Zi(a,r,1))),a.lanes|=1),n)}var M0=L.ReactCurrentOwner,Cn=!1;function _n(n,r,a,c){r.child=n===null?rh(r,null,a,c):vs(r,n.child,a,c)}function Nh(n,r,a,c,h){a=a.render;var v=r.ref;return gs(r,h),c=iu(n,r,a,c,v,h),a=ru(),n!==null&&!Cn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,bi(n,r,h)):(Ut&&a&&kc(r),r.flags|=1,_n(n,r,c,h),r.child)}function Dh(n,r,a,c,h){if(n===null){var v=a.type;return typeof v=="function"&&!Nu(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=v,Ih(n,r,v,c,h)):(n=el(a.type,null,c,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,!(n.lanes&h)){var w=v.memoizedProps;if(a=a.compare,a=a!==null?a:xo,a(w,c)&&n.ref===r.ref)return bi(n,r,h)}return r.flags|=1,n=ir(v,c),n.ref=r.ref,n.return=r,r.child=n}function Ih(n,r,a,c,h){if(n!==null){var v=n.memoizedProps;if(xo(v,c)&&n.ref===r.ref)if(Cn=!1,r.pendingProps=c=v,(n.lanes&h)!==0)n.flags&131072&&(Cn=!0);else return r.lanes=n.lanes,bi(n,r,h)}return du(n,r,a,c,h)}function Uh(n,r,a){var c=r.pendingProps,h=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(Ss,Fn),Fn|=a;else{if(!(a&1073741824))return n=v!==null?v.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,bt(Ss,Fn),Fn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:a,bt(Ss,Fn),Fn|=c}else v!==null?(c=v.baseLanes|a,r.memoizedState=null):c=a,bt(Ss,Fn),Fn|=c;return _n(n,r,h,a),r.child}function Oh(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function du(n,r,a,c,h){var v=An(a)?Cr:dn.current;return v=ds(r,v),gs(r,h),a=iu(n,r,a,c,v,h),c=ru(),n!==null&&!Cn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,bi(n,r,h)):(Ut&&c&&kc(r),r.flags|=1,_n(n,r,a,h),r.child)}function Fh(n,r,a,c,h){if(An(a)){var v=!0;Ta(r)}else v=!1;if(gs(r,h),r.stateNode===null)Ga(n,r),eh(r,a,c),Kc(r,a,c,h),c=!0;else if(n===null){var w=r.stateNode,O=r.memoizedProps;w.props=O;var B=w.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=Vn(ie):(ie=An(a)?Cr:dn.current,ie=ds(r,ie));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==c||B!==ie)&&th(r,w,c,ie),Ki=!1;var ge=r.memoizedState;w.state=ge,Da(r,c,w,h),B=r.memoizedState,O!==c||ge!==B||Tn.current||Ki?(typeof ve=="function"&&(Yc(r,a,ve,c),B=r.memoizedState),(O=Ki||Qf(r,a,O,c,ge,B,ie))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=B),w.props=c,w.state=B,w.context=ie,c=O):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{w=r.stateNode,Yf(n,r),O=r.memoizedProps,ie=r.type===r.elementType?O:ei(r.type,O),w.props=ie,ye=r.pendingProps,ge=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=Vn(B):(B=An(a)?Cr:dn.current,B=ds(r,B));var Le=a.getDerivedStateFromProps;(ve=typeof Le=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==ye||ge!==B)&&th(r,w,c,B),Ki=!1,ge=r.memoizedState,w.state=ge,Da(r,c,w,h);var Oe=r.memoizedState;O!==ye||ge!==Oe||Tn.current||Ki?(typeof Le=="function"&&(Yc(r,a,Le,c),Oe=r.memoizedState),(ie=Ki||Qf(r,a,ie,c,ge,Oe,B)||!1)?(ve||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Oe,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Oe,B)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=Oe),w.props=c,w.state=Oe,w.context=B,c=ie):(typeof w.componentDidUpdate!="function"||O===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),c=!1)}return fu(n,r,a,c,v,h)}function fu(n,r,a,c,h,v){Oh(n,r);var w=(r.flags&128)!==0;if(!c&&!w)return h&&Hf(r,a,!1),bi(n,r,v);c=r.stateNode,M0.current=r;var O=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&w?(r.child=vs(r,n.child,null,v),r.child=vs(r,null,O,v)):_n(n,r,O,v),r.memoizedState=c.state,h&&Hf(r,a,!0),r.child}function kh(n){var r=n.stateNode;r.pendingContext?zf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&zf(n,r.context,!1),Zc(n,r.containerInfo)}function zh(n,r,a,c,h){return ps(),Vc(h),r.flags|=256,_n(n,r,a,c),r.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bh(n,r,a){var c=r.pendingProps,h=Ot.current,v=!1,w=(r.flags&128)!==0,O;if((O=w)||(O=n!==null&&n.memoizedState===null?!1:(h&2)!==0),O?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),bt(Ot,h&1),n===null)return Hc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(w=c.children,n=c.fallback,v?(c=r.mode,v=r.child,w={mode:"hidden",children:w},!(c&1)&&v!==null?(v.childLanes=0,v.pendingProps=w):v=tl(w,c,0,null),n=Fr(n,c,a,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=pu(a),r.memoizedState=hu,n):mu(r,w));if(h=n.memoizedState,h!==null&&(O=h.dehydrated,O!==null))return E0(n,r,w,c,O,h,a);if(v){v=c.fallback,w=r.mode,h=n.child,O=h.sibling;var B={mode:"hidden",children:c.children};return!(w&1)&&r.child!==h?(c=r.child,c.childLanes=0,c.pendingProps=B,r.deletions=null):(c=ir(h,B),c.subtreeFlags=h.subtreeFlags&14680064),O!==null?v=ir(O,v):(v=Fr(v,w,a,null),v.flags|=2),v.return=r,c.return=r,c.sibling=v,r.child=c,c=v,v=r.child,w=n.child.memoizedState,w=w===null?pu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},v.memoizedState=w,v.childLanes=n.childLanes&~a,r.memoizedState=hu,c}return v=n.child,n=v.sibling,c=ir(v,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function mu(n,r){return r=tl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Va(n,r,a,c){return c!==null&&Vc(c),vs(r,n.child,null,a),n=mu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function E0(n,r,a,c,h,v,w){if(a)return r.flags&256?(r.flags&=-257,c=cu(Error(t(422))),Va(n,r,w,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=c.fallback,h=r.mode,c=tl({mode:"visible",children:c.children},h,0,null),v=Fr(v,h,w,null),v.flags|=2,c.return=r,v.return=r,c.sibling=v,r.child=c,r.mode&1&&vs(r,n.child,null,w),r.child.memoizedState=pu(w),r.memoizedState=hu,v);if(!(r.mode&1))return Va(n,r,w,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var O=c.dgst;return c=O,v=Error(t(419)),c=cu(v,c,void 0),Va(n,r,w,c)}if(O=(w&n.childLanes)!==0,Cn||O){if(c=en,c!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=h&(c.suspendedLanes|w)?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,Ci(n,h),ii(c,n,h,-1))}return Lu(),c=cu(Error(t(421))),Va(n,r,w,c)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=O0.bind(null,n),h._reactRetry=r,null):(n=v.treeContext,On=Xi(h.nextSibling),Un=r,Ut=!0,Qn=null,n!==null&&(Bn[Hn++]=Ti,Bn[Hn++]=Ai,Bn[Hn++]=Rr,Ti=n.id,Ai=n.overflow,Rr=r),r=mu(r,c.children),r.flags|=4096,r)}function Hh(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Xc(n.return,r,a)}function gu(n,r,a,c,h){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=a,v.tailMode=h)}function Vh(n,r,a){var c=r.pendingProps,h=c.revealOrder,v=c.tail;if(_n(n,r,c.children,a),c=Ot.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hh(n,a,r);else if(n.tag===19)Hh(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(bt(Ot,c),!(r.mode&1))r.memoizedState=null;else switch(h){case"forwards":for(a=r.child,h=null;a!==null;)n=a.alternate,n!==null&&Oa(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),gu(r,!1,h,a,v);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Oa(n)===null){r.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}gu(r,!0,a,null,v);break;case"together":gu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ga(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function bi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Dr|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ir(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ir(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function w0(n,r,a){switch(r.tag){case 3:kh(r),ps();break;case 5:sh(r);break;case 1:An(r.type)&&Ta(r);break;case 4:Zc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,h=r.memoizedProps.value;bt(Pa,c._currentValue),c._currentValue=h;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(bt(Ot,Ot.current&1),r.flags|=128,null):a&r.child.childLanes?Bh(n,r,a):(bt(Ot,Ot.current&1),n=bi(n,r,a),n!==null?n.sibling:null);bt(Ot,Ot.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return Vh(n,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),bt(Ot,Ot.current),c)break;return null;case 22:case 23:return r.lanes=0,Uh(n,r,a)}return bi(n,r,a)}var Gh,vu,jh,Wh;Gh=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vu=function(){},jh=function(n,r,a,c){var h=n.memoizedProps;if(h!==c){n=r.stateNode,Lr(ci.current);var v=null;switch(a){case"input":h=Xe(n,h),c=Xe(n,c),v=[];break;case"select":h=P({},h,{value:void 0}),c=P({},c,{value:void 0}),v=[];break;case"textarea":h=de(n,h),c=de(n,c),v=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ma)}yt(a,c);var w;a=null;for(ie in h)if(!c.hasOwnProperty(ie)&&h.hasOwnProperty(ie)&&h[ie]!=null)if(ie==="style"){var O=h[ie];for(w in O)O.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?v||(v=[]):(v=v||[]).push(ie,null));for(ie in c){var B=c[ie];if(O=h!=null?h[ie]:void 0,c.hasOwnProperty(ie)&&B!==O&&(B!=null||O!=null))if(ie==="style")if(O){for(w in O)!O.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&O[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(v||(v=[]),v.push(ie,a)),a=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,O=O?O.__html:void 0,B!=null&&O!==B&&(v=v||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&Pt("scroll",n),v||O===B||(v=[])):(v=v||[]).push(ie,B))}a&&(v=v||[]).push("style",a);var ie=v;(r.updateQueue=ie)&&(r.flags|=4)}},Wh=function(n,r,a,c){a!==c&&(r.flags|=4)};function Io(n,r){if(!Ut)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function hn(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function T0(n,r,a){var c=r.pendingProps;switch(zc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(r),null;case 1:return An(r.type)&&wa(),hn(r),null;case 3:return c=r.stateNode,_s(),Lt(Tn),Lt(dn),eu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ba(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Qn!==null&&(Ru(Qn),Qn=null))),vu(n,r),hn(r),null;case 5:Jc(r);var h=Lr(bo.current);if(a=r.type,n!==null&&r.stateNode!=null)jh(n,r,a,c,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return hn(r),null}if(n=Lr(ci.current),ba(r)){c=r.stateNode,a=r.type;var v=r.memoizedProps;switch(c[li]=r,c[wo]=v,n=(r.mode&1)!==0,a){case"dialog":Pt("cancel",c),Pt("close",c);break;case"iframe":case"object":case"embed":Pt("load",c);break;case"video":case"audio":for(h=0;h<So.length;h++)Pt(So[h],c);break;case"source":Pt("error",c);break;case"img":case"image":case"link":Pt("error",c),Pt("load",c);break;case"details":Pt("toggle",c);break;case"input":lt(c,v),Pt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},Pt("invalid",c);break;case"textarea":_e(c,v),Pt("invalid",c)}yt(a,v),h=null;for(var w in v)if(v.hasOwnProperty(w)){var O=v[w];w==="children"?typeof O=="string"?c.textContent!==O&&(v.suppressHydrationWarning!==!0&&Sa(c.textContent,O,n),h=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(v.suppressHydrationWarning!==!0&&Sa(c.textContent,O,n),h=["children",""+O]):o.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&Pt("scroll",c)}switch(a){case"input":gt(c),At(c,v,!0);break;case"textarea":gt(c),Ge(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=Ma)}c=h,r.updateQueue=c,c!==null&&(r.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Re(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[li]=r,n[wo]=c,Gh(n,r,!1,!1),r.stateNode=n;e:{switch(w=nt(a,c),a){case"dialog":Pt("cancel",n),Pt("close",n),h=c;break;case"iframe":case"object":case"embed":Pt("load",n),h=c;break;case"video":case"audio":for(h=0;h<So.length;h++)Pt(So[h],n);h=c;break;case"source":Pt("error",n),h=c;break;case"img":case"image":case"link":Pt("error",n),Pt("load",n),h=c;break;case"details":Pt("toggle",n),h=c;break;case"input":lt(n,c),h=Xe(n,c),Pt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=P({},c,{value:void 0}),Pt("invalid",n);break;case"textarea":_e(n,c),h=de(n,c),Pt("invalid",n);break;default:h=c}yt(a,h),O=h;for(v in O)if(O.hasOwnProperty(v)){var B=O[v];v==="style"?tt(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ae(n,B)):v==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Be(n,B):typeof B=="number"&&Be(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?B!=null&&v==="onScroll"&&Pt("scroll",n):B!=null&&R(n,v,B,w))}switch(a){case"input":gt(n),At(n,c,!1);break;case"textarea":gt(n),Ge(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ne(c.value));break;case"select":n.multiple=!!c.multiple,v=c.value,v!=null?se(n,!!c.multiple,v,!1):c.defaultValue!=null&&se(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Ma)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return hn(r),null;case 6:if(n&&r.stateNode!=null)Wh(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Lr(bo.current),Lr(ci.current),ba(r)){if(c=r.stateNode,a=r.memoizedProps,c[li]=r,(v=c.nodeValue!==a)&&(n=Un,n!==null))switch(n.tag){case 3:Sa(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sa(c.nodeValue,a,(n.mode&1)!==0)}v&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[li]=r,r.stateNode=c}return hn(r),null;case 13:if(Lt(Ot),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ut&&On!==null&&r.mode&1&&!(r.flags&128))$f(),ps(),r.flags|=98560,v=!1;else if(v=ba(r),c!==null&&c.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[li]=r}else ps(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;hn(r),v=!1}else Qn!==null&&(Ru(Qn),Qn=null),v=!0;if(!v)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Ot.current&1?qt===0&&(qt=3):Lu())),r.updateQueue!==null&&(r.flags|=4),hn(r),null);case 4:return _s(),vu(n,r),n===null&&Mo(r.stateNode.containerInfo),hn(r),null;case 10:return Wc(r.type._context),hn(r),null;case 17:return An(r.type)&&wa(),hn(r),null;case 19:if(Lt(Ot),v=r.memoizedState,v===null)return hn(r),null;if(c=(r.flags&128)!==0,w=v.rendering,w===null)if(c)Io(v,!1);else{if(qt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(w=Oa(n),w!==null){for(r.flags|=128,Io(v,!1),c=w.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)v=a,n=c,v.flags&=14680066,w=v.alternate,w===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=w.childLanes,v.lanes=w.lanes,v.child=w.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=w.memoizedProps,v.memoizedState=w.memoizedState,v.updateQueue=w.updateQueue,v.type=w.type,n=w.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return bt(Ot,Ot.current&1|2),r.child}n=n.sibling}v.tail!==null&&Fe()>Ms&&(r.flags|=128,c=!0,Io(v,!1),r.lanes=4194304)}else{if(!c)if(n=Oa(w),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Io(v,!0),v.tail===null&&v.tailMode==="hidden"&&!w.alternate&&!Ut)return hn(r),null}else 2*Fe()-v.renderingStartTime>Ms&&a!==1073741824&&(r.flags|=128,c=!0,Io(v,!1),r.lanes=4194304);v.isBackwards?(w.sibling=r.child,r.child=w):(a=v.last,a!==null?a.sibling=w:r.child=w,v.last=w)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=Fe(),r.sibling=null,a=Ot.current,bt(Ot,c?a&1|2:a&1),r):(hn(r),null);case 22:case 23:return Pu(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?Fn&1073741824&&(hn(r),r.subtreeFlags&6&&(r.flags|=8192)):hn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function A0(n,r){switch(zc(r),r.tag){case 1:return An(r.type)&&wa(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return _s(),Lt(Tn),Lt(dn),eu(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Jc(r),null;case 13:if(Lt(Ot),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ps()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Lt(Ot),null;case 4:return _s(),null;case 10:return Wc(r.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var ja=!1,pn=!1,C0=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function ys(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){kt(n,r,c)}else a.current=null}function _u(n,r,a){try{a()}catch(c){kt(n,r,c)}}var Xh=!1;function R0(n,r){if(Pc=ua,n=Ef(),Mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var w=0,O=-1,B=-1,ie=0,ve=0,ye=n,ge=null;t:for(;;){for(var Le;ye!==a||h!==0&&ye.nodeType!==3||(O=w+h),ye!==v||c!==0&&ye.nodeType!==3||(B=w+c),ye.nodeType===3&&(w+=ye.nodeValue.length),(Le=ye.firstChild)!==null;)ge=ye,ye=Le;for(;;){if(ye===n)break t;if(ge===a&&++ie===h&&(O=w),ge===v&&++ve===c&&(B=w),(Le=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Le}a=O===-1||B===-1?null:{start:O,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lc={focusedElem:n,selectionRange:a},ua=!1,Ie=r;Ie!==null;)if(r=Ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ie=n;else for(;Ie!==null;){r=Ie;try{var Oe=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Oe!==null){var ke=Oe.memoizedProps,Vt=Oe.memoizedState,X=r.stateNode,H=X.getSnapshotBeforeUpdate(r.elementType===r.type?ke:ei(r.type,ke),Vt);X.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Z=r.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){kt(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,Ie=n;break}Ie=r.return}return Oe=Xh,Xh=!1,Oe}function Uo(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var v=h.destroy;h.destroy=void 0,v!==void 0&&_u(r,a,v)}h=h.next}while(h!==c)}}function Wa(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function xu(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function $h(n){var r=n.alternate;r!==null&&(n.alternate=null,$h(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[li],delete r[wo],delete r[Uc],delete r[u0],delete r[d0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qh(n){return n.tag===5||n.tag===3||n.tag===4}function Yh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yu(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Ma));else if(c!==4&&(n=n.child,n!==null))for(yu(n,r,a),n=n.sibling;n!==null;)yu(n,r,a),n=n.sibling}function Su(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Su(n,r,a),n=n.sibling;n!==null;)Su(n,r,a),n=n.sibling}var sn=null,ti=!1;function Ji(n,r,a){for(a=a.child;a!==null;)Kh(n,r,a),a=a.sibling}function Kh(n,r,a){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 5:pn||ys(a,r);case 6:var c=sn,h=ti;sn=null,Ji(n,r,a),sn=c,ti=h,sn!==null&&(ti?(n=sn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ti?(n=sn,a=a.stateNode,n.nodeType===8?Ic(n.parentNode,a):n.nodeType===1&&Ic(n,a),ho(n)):Ic(sn,a.stateNode));break;case 4:c=sn,h=ti,sn=a.stateNode.containerInfo,ti=!0,Ji(n,r,a),sn=c,ti=h;break;case 0:case 11:case 14:case 15:if(!pn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var v=h,w=v.destroy;v=v.tag,w!==void 0&&(v&2||v&4)&&_u(a,r,w),h=h.next}while(h!==c)}Ji(n,r,a);break;case 1:if(!pn&&(ys(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(O){kt(a,r,O)}Ji(n,r,a);break;case 21:Ji(n,r,a);break;case 22:a.mode&1?(pn=(c=pn)||a.memoizedState!==null,Ji(n,r,a),pn=c):Ji(n,r,a);break;default:Ji(n,r,a)}}function Zh(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new C0),r.forEach(function(c){var h=F0.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function ni(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var v=n,w=r,O=w;e:for(;O!==null;){switch(O.tag){case 5:sn=O.stateNode,ti=!1;break e;case 3:sn=O.stateNode.containerInfo,ti=!0;break e;case 4:sn=O.stateNode.containerInfo,ti=!0;break e}O=O.return}if(sn===null)throw Error(t(160));Kh(v,w,h),sn=null,ti=!1;var B=h.alternate;B!==null&&(B.return=null),h.return=null}catch(ie){kt(h,r,ie)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Jh(r,n),r=r.sibling}function Jh(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(r,n),di(n),c&4){try{Uo(3,n,n.return),Wa(3,n)}catch(ke){kt(n,n.return,ke)}try{Uo(5,n,n.return)}catch(ke){kt(n,n.return,ke)}}break;case 1:ni(r,n),di(n),c&512&&a!==null&&ys(a,a.return);break;case 5:if(ni(r,n),di(n),c&512&&a!==null&&ys(a,a.return),n.flags&32){var h=n.stateNode;try{Be(h,"")}catch(ke){kt(n,n.return,ke)}}if(c&4&&(h=n.stateNode,h!=null)){var v=n.memoizedProps,w=a!==null?a.memoizedProps:v,O=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{O==="input"&&v.type==="radio"&&v.name!=null&&et(h,v),nt(O,w);var ie=nt(O,v);for(w=0;w<B.length;w+=2){var ve=B[w],ye=B[w+1];ve==="style"?tt(h,ye):ve==="dangerouslySetInnerHTML"?Ae(h,ye):ve==="children"?Be(h,ye):R(h,ve,ye,ie)}switch(O){case"input":ct(h,v);break;case"textarea":xe(h,v);break;case"select":var ge=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var Le=v.value;Le!=null?se(h,!!v.multiple,Le,!1):ge!==!!v.multiple&&(v.defaultValue!=null?se(h,!!v.multiple,v.defaultValue,!0):se(h,!!v.multiple,v.multiple?[]:"",!1))}h[wo]=v}catch(ke){kt(n,n.return,ke)}}break;case 6:if(ni(r,n),di(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,v=n.memoizedProps;try{h.nodeValue=v}catch(ke){kt(n,n.return,ke)}}break;case 3:if(ni(r,n),di(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ho(r.containerInfo)}catch(ke){kt(n,n.return,ke)}break;case 4:ni(r,n),di(n);break;case 13:ni(r,n),di(n),h=n.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||(wu=Fe())),c&4&&Zh(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(pn=(ie=pn)||ve,ni(r,n),pn=ie):ni(r,n),di(n),c&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!ve&&n.mode&1)for(Ie=n,ve=n.child;ve!==null;){for(ye=Ie=ve;Ie!==null;){switch(ge=Ie,Le=ge.child,ge.tag){case 0:case 11:case 14:case 15:Uo(4,ge,ge.return);break;case 1:ys(ge,ge.return);var Oe=ge.stateNode;if(typeof Oe.componentWillUnmount=="function"){c=ge,a=ge.return;try{r=c,Oe.props=r.memoizedProps,Oe.state=r.memoizedState,Oe.componentWillUnmount()}catch(ke){kt(c,a,ke)}}break;case 5:ys(ge,ge.return);break;case 22:if(ge.memoizedState!==null){tp(ye);continue}}Le!==null?(Le.return=ge,Ie=Le):tp(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{h=ye.stateNode,ie?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(O=ye.stateNode,B=ye.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,O.style.display=De("display",w))}catch(ke){kt(n,n.return,ke)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=ie?"":ye.memoizedProps}catch(ke){kt(n,n.return,ke)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ni(r,n),di(n),c&4&&Zh(n);break;case 21:break;default:ni(r,n),di(n)}}function di(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(qh(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Be(h,""),c.flags&=-33);var v=Yh(n);Su(n,v,h);break;case 3:case 4:var w=c.stateNode.containerInfo,O=Yh(n);yu(n,O,w);break;default:throw Error(t(161))}}catch(B){kt(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function b0(n,r,a){Ie=n,Qh(n)}function Qh(n,r,a){for(var c=(n.mode&1)!==0;Ie!==null;){var h=Ie,v=h.child;if(h.tag===22&&c){var w=h.memoizedState!==null||ja;if(!w){var O=h.alternate,B=O!==null&&O.memoizedState!==null||pn;O=ja;var ie=pn;if(ja=w,(pn=B)&&!ie)for(Ie=h;Ie!==null;)w=Ie,B=w.child,w.tag===22&&w.memoizedState!==null?np(h):B!==null?(B.return=w,Ie=B):np(h);for(;v!==null;)Ie=v,Qh(v),v=v.sibling;Ie=h,ja=O,pn=ie}ep(n)}else h.subtreeFlags&8772&&v!==null?(v.return=h,Ie=v):ep(n)}}function ep(n){for(;Ie!==null;){var r=Ie;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:pn||Wa(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!pn)if(a===null)c.componentDidMount();else{var h=r.elementType===r.type?a.memoizedProps:ei(r.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Zf(r,v,c);break;case 3:var w=r.updateQueue;if(w!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Zf(r,w,a)}break;case 5:var O=r.stateNode;if(a===null&&r.flags&4){a=O;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ie=r.alternate;if(ie!==null){var ve=ie.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&ho(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||r.flags&512&&xu(r)}catch(ge){kt(r,r.return,ge)}}if(r===n){Ie=null;break}if(a=r.sibling,a!==null){a.return=r.return,Ie=a;break}Ie=r.return}}function tp(n){for(;Ie!==null;){var r=Ie;if(r===n){Ie=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Ie=a;break}Ie=r.return}}function np(n){for(;Ie!==null;){var r=Ie;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Wa(4,r)}catch(B){kt(r,a,B)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var h=r.return;try{c.componentDidMount()}catch(B){kt(r,h,B)}}var v=r.return;try{xu(r)}catch(B){kt(r,v,B)}break;case 5:var w=r.return;try{xu(r)}catch(B){kt(r,w,B)}}}catch(B){kt(r,r.return,B)}if(r===n){Ie=null;break}var O=r.sibling;if(O!==null){O.return=r.return,Ie=O;break}Ie=r.return}}var P0=Math.ceil,Xa=L.ReactCurrentDispatcher,Mu=L.ReactCurrentOwner,jn=L.ReactCurrentBatchConfig,xt=0,en=null,Gt=null,on=0,Fn=0,Ss=$i(0),qt=0,Oo=null,Dr=0,$a=0,Eu=0,Fo=null,Rn=null,wu=0,Ms=1/0,Pi=null,qa=!1,Tu=null,Qi=null,Ya=!1,er=null,Ka=0,ko=0,Au=null,Za=-1,Ja=0;function xn(){return xt&6?Fe():Za!==-1?Za:Za=Fe()}function tr(n){return n.mode&1?xt&2&&on!==0?on&-on:h0.transition!==null?(Ja===0&&(Ja=$d()),Ja):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:nf(n.type)),n):1}function ii(n,r,a,c){if(50<ko)throw ko=0,Au=null,Error(t(185));ao(n,a,c),(!(xt&2)||n!==en)&&(n===en&&(!(xt&2)&&($a|=a),qt===4&&nr(n,on)),bn(n,c),a===1&&xt===0&&!(r.mode&1)&&(Ms=Fe()+500,Aa&&Yi()))}function bn(n,r){var a=n.callbackNode;oc(n,r);var c=rn(n,n===en?on:0);if(c===0)a!==null&&Ve(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Ve(a),r===1)n.tag===0?f0(rp.bind(null,n)):Vf(rp.bind(null,n)),l0(function(){!(xt&6)&&Yi()}),a=null;else{switch(qd(c)){case 1:a=It;break;case 4:a=Wt;break;case 16:a=Jt;break;case 536870912:a=_t;break;default:a=Jt}a=fp(a,ip.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function ip(n,r){if(Za=-1,Ja=0,xt&6)throw Error(t(327));var a=n.callbackNode;if(Es()&&n.callbackNode!==a)return null;var c=rn(n,n===en?on:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=Qa(n,c);else{r=c;var h=xt;xt|=2;var v=op();(en!==n||on!==r)&&(Pi=null,Ms=Fe()+500,Ur(n,r));do try{D0();break}catch(O){sp(n,O)}while(!0);jc(),Xa.current=v,xt=h,Gt!==null?r=0:(en=null,on=0,r=qt)}if(r!==0){if(r===2&&(h=ts(n),h!==0&&(c=h,r=Cu(n,h))),r===1)throw a=Oo,Ur(n,0),nr(n,c),bn(n,Fe()),a;if(r===6)nr(n,c);else{if(h=n.current.alternate,!(c&30)&&!L0(h)&&(r=Qa(n,c),r===2&&(v=ts(n),v!==0&&(c=v,r=Cu(n,v))),r===1))throw a=Oo,Ur(n,0),nr(n,c),bn(n,Fe()),a;switch(n.finishedWork=h,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Or(n,Rn,Pi);break;case 3:if(nr(n,c),(c&130023424)===c&&(r=wu+500-Fe(),10<r)){if(rn(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){xn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Dc(Or.bind(null,n,Rn,Pi),r);break}Or(n,Rn,Pi);break;case 4:if(nr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,h=-1;0<c;){var w=31-Xt(c);v=1<<w,w=r[w],w>h&&(h=w),c&=~v}if(c=h,c=Fe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*P0(c/1960))-c,10<c){n.timeoutHandle=Dc(Or.bind(null,n,Rn,Pi),c);break}Or(n,Rn,Pi);break;case 5:Or(n,Rn,Pi);break;default:throw Error(t(329))}}}return bn(n,Fe()),n.callbackNode===a?ip.bind(null,n):null}function Cu(n,r){var a=Fo;return n.current.memoizedState.isDehydrated&&(Ur(n,r).flags|=256),n=Qa(n,r),n!==2&&(r=Rn,Rn=a,r!==null&&Ru(r)),n}function Ru(n){Rn===null?Rn=n:Rn.push.apply(Rn,n)}function L0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],v=h.getSnapshot;h=h.value;try{if(!Jn(v(),h))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function nr(n,r){for(r&=~Eu,r&=~$a,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Xt(r),c=1<<a;n[a]=-1,r&=~c}}function rp(n){if(xt&6)throw Error(t(327));Es();var r=rn(n,0);if(!(r&1))return bn(n,Fe()),null;var a=Qa(n,r);if(n.tag!==0&&a===2){var c=ts(n);c!==0&&(r=c,a=Cu(n,c))}if(a===1)throw a=Oo,Ur(n,0),nr(n,r),bn(n,Fe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Or(n,Rn,Pi),bn(n,Fe()),null}function bu(n,r){var a=xt;xt|=1;try{return n(r)}finally{xt=a,xt===0&&(Ms=Fe()+500,Aa&&Yi())}}function Ir(n){er!==null&&er.tag===0&&!(xt&6)&&Es();var r=xt;xt|=1;var a=jn.transition,c=Mt;try{if(jn.transition=null,Mt=1,n)return n()}finally{Mt=c,jn.transition=a,xt=r,!(xt&6)&&Yi()}}function Pu(){Fn=Ss.current,Lt(Ss)}function Ur(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,a0(a)),Gt!==null)for(a=Gt.return;a!==null;){var c=a;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&wa();break;case 3:_s(),Lt(Tn),Lt(dn),eu();break;case 5:Jc(c);break;case 4:_s();break;case 13:Lt(Ot);break;case 19:Lt(Ot);break;case 10:Wc(c.type._context);break;case 22:case 23:Pu()}a=a.return}if(en=n,Gt=n=ir(n.current,null),on=Fn=r,qt=0,Oo=null,Eu=$a=Dr=0,Rn=Fo=null,Pr!==null){for(r=0;r<Pr.length;r++)if(a=Pr[r],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,v=a.pending;if(v!==null){var w=v.next;v.next=h,c.next=w}a.pending=c}Pr=null}return n}function sp(n,r){do{var a=Gt;try{if(jc(),Fa.current=Ha,ka){for(var c=Ft.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}ka=!1}if(Nr=0,Qt=$t=Ft=null,Po=!1,Lo=0,Mu.current=null,a===null||a.return===null){qt=1,Oo=r,Gt=null;break}e:{var v=n,w=a.return,O=a,B=r;if(r=on,O.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,ve=O,ye=ve.tag;if(!(ve.mode&1)&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Le=Ph(w);if(Le!==null){Le.flags&=-257,Lh(Le,w,O,v,r),Le.mode&1&&bh(v,ie,r),r=Le,B=ie;var Oe=r.updateQueue;if(Oe===null){var ke=new Set;ke.add(B),r.updateQueue=ke}else Oe.add(B);break e}else{if(!(r&1)){bh(v,ie,r),Lu();break e}B=Error(t(426))}}else if(Ut&&O.mode&1){var Vt=Ph(w);if(Vt!==null){!(Vt.flags&65536)&&(Vt.flags|=256),Lh(Vt,w,O,v,r),Vc(xs(B,O));break e}}v=B=xs(B,O),qt!==4&&(qt=2),Fo===null?Fo=[v]:Fo.push(v),v=w;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var X=Ch(v,B,r);Kf(v,X);break e;case 1:O=B;var H=v.type,Z=v.stateNode;if(!(v.flags&128)&&(typeof H.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(Qi===null||!Qi.has(Z)))){v.flags|=65536,r&=-r,v.lanes|=r;var Te=Rh(v,O,r);Kf(v,Te);break e}}v=v.return}while(v!==null)}lp(a)}catch(He){r=He,Gt===a&&a!==null&&(Gt=a=a.return);continue}break}while(!0)}function op(){var n=Xa.current;return Xa.current=Ha,n===null?Ha:n}function Lu(){(qt===0||qt===3||qt===2)&&(qt=4),en===null||!(Dr&268435455)&&!($a&268435455)||nr(en,on)}function Qa(n,r){var a=xt;xt|=2;var c=op();(en!==n||on!==r)&&(Pi=null,Ur(n,r));do try{N0();break}catch(h){sp(n,h)}while(!0);if(jc(),xt=a,Xa.current=c,Gt!==null)throw Error(t(261));return en=null,on=0,qt}function N0(){for(;Gt!==null;)ap(Gt)}function D0(){for(;Gt!==null&&!Ke();)ap(Gt)}function ap(n){var r=dp(n.alternate,n,Fn);n.memoizedProps=n.pendingProps,r===null?lp(n):Gt=r,Mu.current=null}function lp(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=A0(a,r),a!==null){a.flags&=32767,Gt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{qt=6,Gt=null;return}}else if(a=T0(a,r,Fn),a!==null){Gt=a;return}if(r=r.sibling,r!==null){Gt=r;return}Gt=r=n}while(r!==null);qt===0&&(qt=5)}function Or(n,r,a){var c=Mt,h=jn.transition;try{jn.transition=null,Mt=1,I0(n,r,a,c)}finally{jn.transition=h,Mt=c}return null}function I0(n,r,a,c){do Es();while(er!==null);if(xt&6)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(pv(n,v),n===en&&(Gt=en=null,on=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Ya||(Ya=!0,fp(Jt,function(){return Es(),null})),v=(a.flags&15990)!==0,a.subtreeFlags&15990||v){v=jn.transition,jn.transition=null;var w=Mt;Mt=1;var O=xt;xt|=4,Mu.current=null,R0(n,a),Jh(a,n),e0(Lc),ua=!!Pc,Lc=Pc=null,n.current=a,b0(a),rt(),xt=O,Mt=w,jn.transition=v}else n.current=a;if(Ya&&(Ya=!1,er=n,Ka=h),v=n.pendingLanes,v===0&&(Qi=null),Rt(a.stateNode),bn(n,Fe()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)h=r[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(qa)throw qa=!1,n=Tu,Tu=null,n;return Ka&1&&n.tag!==0&&Es(),v=n.pendingLanes,v&1?n===Au?ko++:(ko=0,Au=n):ko=0,Yi(),null}function Es(){if(er!==null){var n=qd(Ka),r=jn.transition,a=Mt;try{if(jn.transition=null,Mt=16>n?16:n,er===null)var c=!1;else{if(n=er,er=null,Ka=0,xt&6)throw Error(t(331));var h=xt;for(xt|=4,Ie=n.current;Ie!==null;){var v=Ie,w=v.child;if(Ie.flags&16){var O=v.deletions;if(O!==null){for(var B=0;B<O.length;B++){var ie=O[B];for(Ie=ie;Ie!==null;){var ve=Ie;switch(ve.tag){case 0:case 11:case 15:Uo(8,ve,v)}var ye=ve.child;if(ye!==null)ye.return=ve,Ie=ye;else for(;Ie!==null;){ve=Ie;var ge=ve.sibling,Le=ve.return;if($h(ve),ve===ie){Ie=null;break}if(ge!==null){ge.return=Le,Ie=ge;break}Ie=Le}}}var Oe=v.alternate;if(Oe!==null){var ke=Oe.child;if(ke!==null){Oe.child=null;do{var Vt=ke.sibling;ke.sibling=null,ke=Vt}while(ke!==null)}}Ie=v}}if(v.subtreeFlags&2064&&w!==null)w.return=v,Ie=w;else e:for(;Ie!==null;){if(v=Ie,v.flags&2048)switch(v.tag){case 0:case 11:case 15:Uo(9,v,v.return)}var X=v.sibling;if(X!==null){X.return=v.return,Ie=X;break e}Ie=v.return}}var H=n.current;for(Ie=H;Ie!==null;){w=Ie;var Z=w.child;if(w.subtreeFlags&2064&&Z!==null)Z.return=w,Ie=Z;else e:for(w=H;Ie!==null;){if(O=Ie,O.flags&2048)try{switch(O.tag){case 0:case 11:case 15:Wa(9,O)}}catch(He){kt(O,O.return,He)}if(O===w){Ie=null;break e}var Te=O.sibling;if(Te!==null){Te.return=O.return,Ie=Te;break e}Ie=O.return}}if(xt=h,Yi(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Je,n)}catch{}c=!0}return c}finally{Mt=a,jn.transition=r}}return!1}function cp(n,r,a){r=xs(a,r),r=Ch(n,r,1),n=Zi(n,r,1),r=xn(),n!==null&&(ao(n,1,r),bn(n,r))}function kt(n,r,a){if(n.tag===3)cp(n,n,a);else for(;r!==null;){if(r.tag===3){cp(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Qi===null||!Qi.has(c))){n=xs(a,n),n=Rh(r,n,1),r=Zi(r,n,1),n=xn(),r!==null&&(ao(r,1,n),bn(r,n));break}}r=r.return}}function U0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=xn(),n.pingedLanes|=n.suspendedLanes&a,en===n&&(on&a)===a&&(qt===4||qt===3&&(on&130023424)===on&&500>Fe()-wu?Ur(n,0):Eu|=a),bn(n,r)}function up(n,r){r===0&&(n.mode&1?(r=Dn,Dn<<=1,!(Dn&130023424)&&(Dn=4194304)):r=1);var a=xn();n=Ci(n,r),n!==null&&(ao(n,r,a),bn(n,a))}function O0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),up(n,a)}function F0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),up(n,a)}var dp;dp=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Tn.current)Cn=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Cn=!1,w0(n,r,a);Cn=!!(n.flags&131072)}else Cn=!1,Ut&&r.flags&1048576&&Gf(r,Ra,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ga(n,r),n=r.pendingProps;var h=ds(r,dn.current);gs(r,a),h=iu(null,r,c,n,h,a);var v=ru();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,An(c)?(v=!0,Ta(r)):v=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,qc(r),h.updater=Ia,r.stateNode=h,h._reactInternals=r,Kc(r,c,n,a),r=fu(null,r,c,!0,v,a)):(r.tag=0,Ut&&v&&kc(r),_n(null,r,h,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Ga(n,r),n=r.pendingProps,h=c._init,c=h(c._payload),r.type=c,h=r.tag=z0(c),n=ei(c,n),h){case 0:r=du(null,r,c,n,a);break e;case 1:r=Fh(null,r,c,n,a);break e;case 11:r=Nh(null,r,c,n,a);break e;case 14:r=Dh(null,r,c,ei(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,h=r.pendingProps,h=r.elementType===c?h:ei(c,h),du(n,r,c,h,a);case 1:return c=r.type,h=r.pendingProps,h=r.elementType===c?h:ei(c,h),Fh(n,r,c,h,a);case 3:e:{if(kh(r),n===null)throw Error(t(387));c=r.pendingProps,v=r.memoizedState,h=v.element,Yf(n,r),Da(r,c,null,a);var w=r.memoizedState;if(c=w.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){h=xs(Error(t(423)),r),r=zh(n,r,c,a,h);break e}else if(c!==h){h=xs(Error(t(424)),r),r=zh(n,r,c,a,h);break e}else for(On=Xi(r.stateNode.containerInfo.firstChild),Un=r,Ut=!0,Qn=null,a=rh(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ps(),c===h){r=bi(n,r,a);break e}_n(n,r,c,a)}r=r.child}return r;case 5:return sh(r),n===null&&Hc(r),c=r.type,h=r.pendingProps,v=n!==null?n.memoizedProps:null,w=h.children,Nc(c,h)?w=null:v!==null&&Nc(c,v)&&(r.flags|=32),Oh(n,r),_n(n,r,w,a),r.child;case 6:return n===null&&Hc(r),null;case 13:return Bh(n,r,a);case 4:return Zc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=vs(r,null,c,a):_n(n,r,c,a),r.child;case 11:return c=r.type,h=r.pendingProps,h=r.elementType===c?h:ei(c,h),Nh(n,r,c,h,a);case 7:return _n(n,r,r.pendingProps,a),r.child;case 8:return _n(n,r,r.pendingProps.children,a),r.child;case 12:return _n(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,h=r.pendingProps,v=r.memoizedProps,w=h.value,bt(Pa,c._currentValue),c._currentValue=w,v!==null)if(Jn(v.value,w)){if(v.children===h.children&&!Tn.current){r=bi(n,r,a);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var O=v.dependencies;if(O!==null){w=v.child;for(var B=O.firstContext;B!==null;){if(B.context===c){if(v.tag===1){B=Ri(-1,a&-a),B.tag=2;var ie=v.updateQueue;if(ie!==null){ie=ie.shared;var ve=ie.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),ie.pending=B}}v.lanes|=a,B=v.alternate,B!==null&&(B.lanes|=a),Xc(v.return,a,r),O.lanes|=a;break}B=B.next}}else if(v.tag===10)w=v.type===r.type?null:v.child;else if(v.tag===18){if(w=v.return,w===null)throw Error(t(341));w.lanes|=a,O=w.alternate,O!==null&&(O.lanes|=a),Xc(w,a,r),w=v.sibling}else w=v.child;if(w!==null)w.return=v;else for(w=v;w!==null;){if(w===r){w=null;break}if(v=w.sibling,v!==null){v.return=w.return,w=v;break}w=w.return}v=w}_n(n,r,h.children,a),r=r.child}return r;case 9:return h=r.type,c=r.pendingProps.children,gs(r,a),h=Vn(h),c=c(h),r.flags|=1,_n(n,r,c,a),r.child;case 14:return c=r.type,h=ei(c,r.pendingProps),h=ei(c.type,h),Dh(n,r,c,h,a);case 15:return Ih(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,h=r.pendingProps,h=r.elementType===c?h:ei(c,h),Ga(n,r),r.tag=1,An(c)?(n=!0,Ta(r)):n=!1,gs(r,a),eh(r,c,h),Kc(r,c,h,a),fu(null,r,c,!0,n,a);case 19:return Vh(n,r,a);case 22:return Uh(n,r,a)}throw Error(t(156,r.tag))};function fp(n,r){return ze(n,r)}function k0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(n,r,a,c){return new k0(n,r,a,c)}function Nu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function z0(n){if(typeof n=="function")return Nu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===ae)return 14}return 2}function ir(n,r){var a=n.alternate;return a===null?(a=Wn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function el(n,r,a,c,h,v){var w=2;if(c=n,typeof n=="function")Nu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case U:return Fr(a.children,h,v,r);case ee:w=8,h|=8;break;case I:return n=Wn(12,a,r,h|2),n.elementType=I,n.lanes=v,n;case G:return n=Wn(13,a,r,h),n.elementType=G,n.lanes=v,n;case ce:return n=Wn(19,a,r,h),n.elementType=ce,n.lanes=v,n;case ue:return tl(a,h,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:w=10;break e;case q:w=9;break e;case le:w=11;break e;case ae:w=14;break e;case he:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Wn(w,a,r,h),r.elementType=n,r.type=c,r.lanes=v,r}function Fr(n,r,a,c){return n=Wn(7,n,c,r),n.lanes=a,n}function tl(n,r,a,c){return n=Wn(22,n,c,r),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Du(n,r,a){return n=Wn(6,n,null,r),n.lanes=a,n}function Iu(n,r,a){return r=Wn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function B0(n,r,a,c,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Uu(n,r,a,c,h,v,w,O,B){return n=new B0(n,r,a,O,B),r===1?(r=1,v===!0&&(r|=8)):r=0,v=Wn(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(v),n}function H0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function hp(n){if(!n)return qi;n=n._reactInternals;e:{if(b(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(An(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(An(a))return Bf(n,a,r)}return r}function pp(n,r,a,c,h,v,w,O,B){return n=Uu(a,c,!0,n,h,v,w,O,B),n.context=hp(null),a=n.current,c=xn(),h=tr(a),v=Ri(c,h),v.callback=r??null,Zi(a,v,h),n.current.lanes=h,ao(n,h,c),bn(n,c),n}function nl(n,r,a,c){var h=r.current,v=xn(),w=tr(h);return a=hp(a),r.context===null?r.context=a:r.pendingContext=a,r=Ri(v,w),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Zi(h,r,w),n!==null&&(ii(n,h,w,v),Na(n,h,w)),w}function il(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Ou(n,r){mp(n,r),(n=n.alternate)&&mp(n,r)}var gp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Fu(n){this._internalRoot=n}rl.prototype.render=Fu.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));nl(n,r,null,null)},rl.prototype.unmount=Fu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ir(function(){nl(null,n,null,null)}),r[Ei]=null}};function rl(n){this._internalRoot=n}rl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Zd();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Gi.length&&r!==0&&r<Gi[a].priority;a++);Gi.splice(a,0,n),a===0&&ef(n)}};function ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function sl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vp(){}function V0(n,r,a,c,h){if(h){if(typeof c=="function"){var v=c;c=function(){var ie=il(w);v.call(ie)}}var w=pp(r,c,n,0,null,!1,!1,"",vp);return n._reactRootContainer=w,n[Ei]=w.current,Mo(n.nodeType===8?n.parentNode:n),Ir(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var O=c;c=function(){var ie=il(B);O.call(ie)}}var B=Uu(n,0,!1,null,null,!1,!1,"",vp);return n._reactRootContainer=B,n[Ei]=B.current,Mo(n.nodeType===8?n.parentNode:n),Ir(function(){nl(r,B,a,c)}),B}function ol(n,r,a,c,h){var v=a._reactRootContainer;if(v){var w=v;if(typeof h=="function"){var O=h;h=function(){var B=il(w);O.call(B)}}nl(r,w,n,h)}else w=V0(a,r,n,h,c);return il(w)}Yd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Mi(r.pendingLanes);a!==0&&(lc(r,a|1),bn(r,Fe()),!(xt&6)&&(Ms=Fe()+500,Yi()))}break;case 13:Ir(function(){var c=Ci(n,1);if(c!==null){var h=xn();ii(c,n,1,h)}}),Ou(n,1)}},cc=function(n){if(n.tag===13){var r=Ci(n,134217728);if(r!==null){var a=xn();ii(r,n,134217728,a)}Ou(n,134217728)}},Kd=function(n){if(n.tag===13){var r=tr(n),a=Ci(n,r);if(a!==null){var c=xn();ii(a,n,r,c)}Ou(n,r)}},Zd=function(){return Mt},Jd=function(n,r){var a=Mt;try{return Mt=n,r()}finally{Mt=a}},J=function(n,r,a){switch(r){case"input":if(ct(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var h=Ea(c);if(!h)throw Error(t(90));We(c),ct(c,h)}}}break;case"textarea":xe(n,a);break;case"select":r=a.value,r!=null&&se(n,!!a.multiple,r,!1)}},Bt=bu,mt=Ir;var G0={usingClientEntryPoint:!1,Events:[To,cs,Ea,ot,Ct,bu]},zo={findFiberByHostInstance:Ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},j0={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=te(n),n===null?null:n.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{Je=al.inject(j0),un=al}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G0,Pn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(r))throw Error(t(200));return H0(n,r,null,a)},Pn.createRoot=function(n,r){if(!ku(n))throw Error(t(299));var a=!1,c="",h=gp;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=Uu(n,1,!1,null,null,a,!1,c,h),n[Ei]=r.current,Mo(n.nodeType===8?n.parentNode:n),new Fu(r)},Pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=te(r),n=n===null?null:n.stateNode,n},Pn.flushSync=function(n){return Ir(n)},Pn.hydrate=function(n,r,a){if(!sl(r))throw Error(t(200));return ol(null,n,r,!0,a)},Pn.hydrateRoot=function(n,r,a){if(!ku(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,v="",w=gp;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),r=pp(r,null,n,1,a??null,h,!1,v,w),n[Ei]=r.current,Mo(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,h]:r.mutableSourceEagerHydrationData.push(a,h);return new rl(r)},Pn.render=function(n,r,a){if(!sl(r))throw Error(t(200));return ol(null,n,r,!1,a)},Pn.unmountComponentAtNode=function(n){if(!sl(n))throw Error(t(40));return n._reactRootContainer?(Ir(function(){ol(null,null,n,!1,function(){n._reactRootContainer=null,n[Ei]=null})}),!0):!1},Pn.unstable_batchedUpdates=bu,Pn.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!sl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ol(n,r,a,!1,c)},Pn.version="18.2.0-next-9e3b772b8-20220608",Pn}var Tp;function xg(){if(Tp)return Hu.exports;Tp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Hu.exports=e_(),Hu.exports}var Ap;function t_(){if(Ap)return ll;Ap=1;var s=xg();return ll.createRoot=s.createRoot,ll.hydrateRoot=s.hydrateRoot,ll}var n_=t_();const i_=_g(n_);xg();/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},Ko.apply(this,arguments)}var hr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(hr||(hr={}));const Cp="popstate";function r_(s){s===void 0&&(s={});function e(i,o){let{pathname:l,search:u,hash:d}=i.location;return wd("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Ul(o)}return o_(e,t,null,s)}function zt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function yg(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function s_(){return Math.random().toString(36).substr(2,8)}function Rp(s,e){return{usr:s.state,key:s.key,idx:e}}function wd(s,e,t,i){return t===void 0&&(t=null),Ko({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?to(e):e,{state:t,key:e&&e.key||i||s_()})}function Ul(s){let{pathname:e="/",search:t="",hash:i=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function to(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let i=s.indexOf("?");i>=0&&(e.search=s.substr(i),s=s.substr(0,i)),s&&(e.pathname=s)}return e}function o_(s,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,d=hr.Pop,f=null,p=m();p==null&&(p=0,u.replaceState(Ko({},u.state,{idx:p}),""));function m(){return(u.state||{idx:null}).idx}function _(){d=hr.Pop;let x=m(),y=x==null?null:x-p;p=x,f&&f({action:d,location:T.location,delta:y})}function g(x,y){d=hr.Push;let D=wd(T.location,x,y);p=m()+1;let R=Rp(D,p),L=T.createHref(D);try{u.pushState(R,"",L)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;o.location.assign(L)}l&&f&&f({action:d,location:T.location,delta:1})}function S(x,y){d=hr.Replace;let D=wd(T.location,x,y);p=m();let R=Rp(D,p),L=T.createHref(D);u.replaceState(R,"",L),l&&f&&f({action:d,location:T.location,delta:0})}function M(x){let y=o.location.origin!=="null"?o.location.origin:o.location.href,D=typeof x=="string"?x:Ul(x);return D=D.replace(/ $/,"%20"),zt(y,"No window.location.(origin|href) available to create URL for href: "+D),new URL(D,y)}let T={get action(){return d},get location(){return s(o,u)},listen(x){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Cp,_),f=x,()=>{o.removeEventListener(Cp,_),f=null}},createHref(x){return e(o,x)},createURL:M,encodeLocation(x){let y=M(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:S,go(x){return u.go(x)}};return T}var bp;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(bp||(bp={}));function a_(s,e,t){t===void 0&&(t="/");let i=typeof e=="string"?to(e):e,o=Ks(i.pathname||"/",t);if(o==null)return null;let l=Sg(s);l_(l);let u=null;for(let d=0;u==null&&d<l.length;++d){let f=x_(o);u=v_(l[d],f)}return u}function Sg(s,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,u,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};f.relativePath.startsWith("/")&&(zt(f.relativePath.startsWith(i),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(i.length));let p=mr([i,f.relativePath]),m=t.concat(f);l.children&&l.children.length>0&&(zt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Sg(l.children,e,m,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:m_(p,l.index),routesMeta:m})};return s.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let f of Mg(l.path))o(l,u,f)}),e}function Mg(s){let e=s.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=Mg(i.join("/")),d=[];return d.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&d.push(...u),d.map(f=>s.startsWith("/")&&f===""?"/":f)}function l_(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:g_(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const c_=/^:[\w-]+$/,u_=3,d_=2,f_=1,h_=10,p_=-2,Pp=s=>s==="*";function m_(s,e){let t=s.split("/"),i=t.length;return t.some(Pp)&&(i+=p_),e&&(i+=d_),t.filter(o=>!Pp(o)).reduce((o,l)=>o+(c_.test(l)?u_:l===""?f_:h_),i)}function g_(s,e){return s.length===e.length&&s.slice(0,-1).every((i,o)=>i===e[o])?s[s.length-1]-e[e.length-1]:0}function v_(s,e){let{routesMeta:t}=s,i={},o="/",l=[];for(let u=0;u<t.length;++u){let d=t[u],f=u===t.length-1,p=o==="/"?e:e.slice(o.length)||"/",m=Td({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},p);if(!m)return null;Object.assign(i,m.params);let _=d.route;l.push({params:i,pathname:mr([o,m.pathname]),pathnameBase:E_(mr([o,m.pathnameBase])),route:_}),m.pathnameBase!=="/"&&(o=mr([o,m.pathnameBase]))}return l}function Td(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,i]=__(s.path,s.caseSensitive,s.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((p,m,_)=>{let{paramName:g,isOptional:S}=m;if(g==="*"){let T=d[_]||"";u=l.slice(0,l.length-T.length).replace(/(.)\/+$/,"$1")}const M=d[_];return S&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:s}}function __(s,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),yg(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let i=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(i.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(i.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function x_(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return yg(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function Ks(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=s.charAt(t);return i&&i!=="/"?null:s.slice(t)||"/"}function y_(s,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof s=="string"?to(s):s;return{pathname:t?t.startsWith("/")?t:S_(t,e):e,search:w_(i),hash:T_(o)}}function S_(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ju(s,e,t,i){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function M_(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Eg(s,e){let t=M_(s);return e?t.map((i,o)=>o===s.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function wg(s,e,t,i){i===void 0&&(i=!1);let o;typeof s=="string"?o=to(s):(o=Ko({},s),zt(!o.pathname||!o.pathname.includes("?"),ju("?","pathname","search",o)),zt(!o.pathname||!o.pathname.includes("#"),ju("#","pathname","hash",o)),zt(!o.search||!o.search.includes("#"),ju("#","search","hash",o)));let l=s===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=t;else{let _=e.length-1;if(!i&&u.startsWith("..")){let g=u.split("/");for(;g[0]==="..";)g.shift(),_-=1;o.pathname=g.join("/")}d=_>=0?e[_]:"/"}let f=y_(o,d),p=u&&u!=="/"&&u.endsWith("/"),m=(l||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||m)&&(f.pathname+="/"),f}const mr=s=>s.join("/").replace(/\/\/+/g,"/"),E_=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),w_=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,T_=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function A_(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Tg=["post","put","patch","delete"];new Set(Tg);const C_=["get",...Tg];new Set(C_);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},Zo.apply(this,arguments)}const $l=Ee.createContext(null),Ag=Ee.createContext(null),Sr=Ee.createContext(null),ql=Ee.createContext(null),Jr=Ee.createContext({outlet:null,matches:[],isDataRoute:!1}),Cg=Ee.createContext(null);function R_(s,e){let{relative:t}=e===void 0?{}:e;na()||zt(!1);let{basename:i,navigator:o}=Ee.useContext(Sr),{hash:l,pathname:u,search:d}=Yl(s,{relative:t}),f=u;return i!=="/"&&(f=u==="/"?i:mr([i,u])),o.createHref({pathname:f,search:d,hash:l})}function na(){return Ee.useContext(ql)!=null}function ia(){return na()||zt(!1),Ee.useContext(ql).location}function Rg(s){Ee.useContext(Sr).static||Ee.useLayoutEffect(s)}function b_(){let{isDataRoute:s}=Ee.useContext(Jr);return s?V_():P_()}function P_(){na()||zt(!1);let s=Ee.useContext($l),{basename:e,future:t,navigator:i}=Ee.useContext(Sr),{matches:o}=Ee.useContext(Jr),{pathname:l}=ia(),u=JSON.stringify(Eg(o,t.v7_relativeSplatPath)),d=Ee.useRef(!1);return Rg(()=>{d.current=!0}),Ee.useCallback(function(p,m){if(m===void 0&&(m={}),!d.current)return;if(typeof p=="number"){i.go(p);return}let _=wg(p,JSON.parse(u),l,m.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:mr([e,_.pathname])),(m.replace?i.replace:i.push)(_,m.state,m)},[e,i,u,l,s])}function Yl(s,e){let{relative:t}=e===void 0?{}:e,{future:i}=Ee.useContext(Sr),{matches:o}=Ee.useContext(Jr),{pathname:l}=ia(),u=JSON.stringify(Eg(o,i.v7_relativeSplatPath));return Ee.useMemo(()=>wg(s,JSON.parse(u),l,t==="path"),[s,u,l,t])}function L_(s,e){return N_(s,e)}function N_(s,e,t,i){na()||zt(!1);let{navigator:o}=Ee.useContext(Sr),{matches:l}=Ee.useContext(Jr),u=l[l.length-1],d=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let p=ia(),m;if(e){var _;let x=typeof e=="string"?to(e):e;f==="/"||(_=x.pathname)!=null&&_.startsWith(f)||zt(!1),m=x}else m=p;let g=m.pathname||"/",S=g;if(f!=="/"){let x=f.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let M=a_(s,{pathname:S}),T=F_(M&&M.map(x=>Object.assign({},x,{params:Object.assign({},d,x.params),pathname:mr([f,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?f:mr([f,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,t,i);return e&&T?Ee.createElement(ql.Provider,{value:{location:Zo({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:hr.Pop}},T):T}function D_(){let s=H_(),e=A_(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Ee.createElement(Ee.Fragment,null,Ee.createElement("h2",null,"Unexpected Application Error!"),Ee.createElement("h3",{style:{fontStyle:"italic"}},e),t?Ee.createElement("pre",{style:o},t):null,null)}const I_=Ee.createElement(D_,null);class U_ extends Ee.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Ee.createElement(Jr.Provider,{value:this.props.routeContext},Ee.createElement(Cg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function O_(s){let{routeContext:e,match:t,children:i}=s,o=Ee.useContext($l);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Ee.createElement(Jr.Provider,{value:e},i)}function F_(s,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),s==null){var l;if((l=t)!=null&&l.errors)s=t.matches;else return null}let u=s,d=(o=t)==null?void 0:o.errors;if(d!=null){let m=u.findIndex(_=>_.route.id&&(d==null?void 0:d[_.route.id]));m>=0||zt(!1),u=u.slice(0,Math.min(u.length,m+1))}let f=!1,p=-1;if(t&&i&&i.v7_partialHydration)for(let m=0;m<u.length;m++){let _=u[m];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=m),_.route.id){let{loaderData:g,errors:S}=t,M=_.route.loader&&g[_.route.id]===void 0&&(!S||S[_.route.id]===void 0);if(_.route.lazy||M){f=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((m,_,g)=>{let S,M=!1,T=null,x=null;t&&(S=d&&_.route.id?d[_.route.id]:void 0,T=_.route.errorElement||I_,f&&(p<0&&g===0?(M=!0,x=null):p===g&&(M=!0,x=_.route.hydrateFallbackElement||null)));let y=e.concat(u.slice(0,g+1)),D=()=>{let R;return S?R=T:M?R=x:_.route.Component?R=Ee.createElement(_.route.Component,null):_.route.element?R=_.route.element:R=m,Ee.createElement(O_,{match:_,routeContext:{outlet:m,matches:y,isDataRoute:t!=null},children:R})};return t&&(_.route.ErrorBoundary||_.route.errorElement||g===0)?Ee.createElement(U_,{location:t.location,revalidation:t.revalidation,component:T,error:S,children:D(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):D()},null)}var bg=function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s}(bg||{}),Ol=function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s}(Ol||{});function k_(s){let e=Ee.useContext($l);return e||zt(!1),e}function z_(s){let e=Ee.useContext(Ag);return e||zt(!1),e}function B_(s){let e=Ee.useContext(Jr);return e||zt(!1),e}function Pg(s){let e=B_(),t=e.matches[e.matches.length-1];return t.route.id||zt(!1),t.route.id}function H_(){var s;let e=Ee.useContext(Cg),t=z_(Ol.UseRouteError),i=Pg(Ol.UseRouteError);return e!==void 0?e:(s=t.errors)==null?void 0:s[i]}function V_(){let{router:s}=k_(bg.UseNavigateStable),e=Pg(Ol.UseNavigateStable),t=Ee.useRef(!1);return Rg(()=>{t.current=!0}),Ee.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?s.navigate(o):s.navigate(o,Zo({fromRouteId:e},l)))},[s,e])}function fi(s){zt(!1)}function G_(s){let{basename:e="/",children:t=null,location:i,navigationType:o=hr.Pop,navigator:l,static:u=!1,future:d}=s;na()&&zt(!1);let f=e.replace(/^\/*/,"/"),p=Ee.useMemo(()=>({basename:f,navigator:l,static:u,future:Zo({v7_relativeSplatPath:!1},d)}),[f,d,l,u]);typeof i=="string"&&(i=to(i));let{pathname:m="/",search:_="",hash:g="",state:S=null,key:M="default"}=i,T=Ee.useMemo(()=>{let x=Ks(m,f);return x==null?null:{location:{pathname:x,search:_,hash:g,state:S,key:M},navigationType:o}},[f,m,_,g,S,M,o]);return T==null?null:Ee.createElement(Sr.Provider,{value:p},Ee.createElement(ql.Provider,{children:t,value:T}))}function j_(s){let{children:e,location:t}=s;return L_(Ad(e),t)}new Promise(()=>{});function Ad(s,e){e===void 0&&(e=[]);let t=[];return Ee.Children.forEach(s,(i,o)=>{if(!Ee.isValidElement(i))return;let l=[...e,o];if(i.type===Ee.Fragment){t.push.apply(t,Ad(i.props.children,l));return}i.type!==fi&&zt(!1),!i.props.index||!i.props.children||zt(!1);let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Ad(i.props.children,l)),t.push(u)}),t}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fl(){return Fl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},Fl.apply(this,arguments)}function Lg(s,e){if(s==null)return{};var t={},i=Object.keys(s),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=s[o]);return t}function W_(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function X_(s,e){return s.button===0&&(!e||e==="_self")&&!W_(s)}const $_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],q_=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Y_="6";try{window.__reactRouterVersion=Y_}catch{}const K_=Ee.createContext({isTransitioning:!1}),Z_="startTransition",Lp=Z0[Z_];function J_(s){let{basename:e,children:t,future:i,window:o}=s,l=Ee.useRef();l.current==null&&(l.current=r_({window:o,v5Compat:!0}));let u=l.current,[d,f]=Ee.useState({action:u.action,location:u.location}),{v7_startTransition:p}=i||{},m=Ee.useCallback(_=>{p&&Lp?Lp(()=>f(_)):f(_)},[f,p]);return Ee.useLayoutEffect(()=>u.listen(m),[u,m]),Ee.createElement(G_,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:u,future:i})}const Q_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tx=Ee.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:u,state:d,target:f,to:p,preventScrollReset:m,unstable_viewTransition:_}=e,g=Lg(e,$_),{basename:S}=Ee.useContext(Sr),M,T=!1;if(typeof p=="string"&&ex.test(p)&&(M=p,Q_))try{let R=new URL(window.location.href),L=p.startsWith("//")?new URL(R.protocol+p):new URL(p),V=Ks(L.pathname,S);L.origin===R.origin&&V!=null?p=V+L.search+L.hash:T=!0}catch{}let x=R_(p,{relative:o}),y=ix(p,{replace:u,state:d,target:f,preventScrollReset:m,relative:o,unstable_viewTransition:_});function D(R){i&&i(R),R.defaultPrevented||y(R)}return Ee.createElement("a",Fl({},g,{href:M||x,onClick:T||l?i:D,ref:t,target:f}))}),jr=Ee.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:o=!1,className:l="",end:u=!1,style:d,to:f,unstable_viewTransition:p,children:m}=e,_=Lg(e,q_),g=Yl(f,{relative:_.relative}),S=ia(),M=Ee.useContext(Ag),{navigator:T,basename:x}=Ee.useContext(Sr),y=M!=null&&rx(g)&&p===!0,D=T.encodeLocation?T.encodeLocation(g).pathname:g.pathname,R=S.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;o||(R=R.toLowerCase(),L=L?L.toLowerCase():null,D=D.toLowerCase()),L&&x&&(L=Ks(L,x)||L);const V=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let F=R===D||!u&&R.startsWith(D)&&R.charAt(V)==="/",U=L!=null&&(L===D||!u&&L.startsWith(D)&&L.charAt(D.length)==="/"),ee={isActive:F,isPending:U,isTransitioning:y},I=F?i:void 0,A;typeof l=="function"?A=l(ee):A=[l,F?"active":null,U?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let q=typeof d=="function"?d(ee):d;return Ee.createElement(tx,Fl({},_,{"aria-current":I,className:A,ref:t,style:q,to:f,unstable_viewTransition:p}),typeof m=="function"?m(ee):m)});var Cd;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Cd||(Cd={}));var Np;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Np||(Np={}));function nx(s){let e=Ee.useContext($l);return e||zt(!1),e}function ix(s,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:u,unstable_viewTransition:d}=e===void 0?{}:e,f=b_(),p=ia(),m=Yl(s,{relative:u});return Ee.useCallback(_=>{if(X_(_,t)){_.preventDefault();let g=i!==void 0?i:Ul(p)===Ul(m);f(s,{replace:g,state:o,preventScrollReset:l,relative:u,unstable_viewTransition:d})}},[p,f,m,i,o,t,s,l,u,d])}function rx(s,e){e===void 0&&(e={});let t=Ee.useContext(K_);t==null&&zt(!1);let{basename:i}=nx(Cd.useViewTransitionState),o=Yl(s,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ks(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=Ks(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Td(o.pathname,u)!=null||Td(o.pathname,l)!=null}function sx(){if(console&&console.warn){for(var s=arguments.length,e=new Array(s),t=0;t<s;t++)e[t]=arguments[t];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const Dp={};function Rd(){for(var s=arguments.length,e=new Array(s),t=0;t<s;t++)e[t]=arguments[t];typeof e[0]=="string"&&Dp[e[0]]||(typeof e[0]=="string"&&(Dp[e[0]]=new Date),sx(...e))}const Ng=(s,e)=>()=>{if(s.isInitialized)e();else{const t=()=>{setTimeout(()=>{s.off("initialized",t)},0),e()};s.on("initialized",t)}};function Ip(s,e,t){s.loadNamespaces(e,Ng(s,t))}function Up(s,e,t,i){typeof t=="string"&&(t=[t]),t.forEach(o=>{s.options.ns.indexOf(o)<0&&s.options.ns.push(o)}),s.loadLanguages(e,Ng(s,i))}function ox(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=e.languages[0],o=e.options?e.options.fallbackLng:!1,l=e.languages[e.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const u=(d,f)=>{const p=e.services.backendConnector.state[`${d}|${f}`];return p===-1||p===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!u(e.isLanguageChangingTo,s)?!1:!!(e.hasResourceBundle(i,s)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||u(i,s)&&(!o||u(l,s)))}function ax(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(Rd("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(s,{lng:t.lng,precheck:(o,l)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!l(o.isLanguageChangingTo,s))return!1}}):ox(s,e,t)}const lx=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,cx={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ux=s=>cx[s],dx=s=>s.replace(lx,ux);let bd={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:dx};function fx(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};bd={...bd,...s}}function hx(){return bd}let Dg;function px(s){Dg=s}function mx(){return Dg}const gx={type:"3rdParty",init(s){fx(s.options.react),px(s)}},Ig=Ee.createContext();class vx{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const _x=(s,e)=>{const t=Ee.useRef();return Ee.useEffect(()=>{t.current=s},[s,e]),t.current};function Ug(s,e,t,i){return s.getFixedT(e,t,i)}function xx(s,e,t,i){return Ee.useCallback(Ug(s,e,t,i),[s,e,t,i])}function no(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:t}=e,{i18n:i,defaultNS:o}=Ee.useContext(Ig)||{},l=t||i||mx();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new vx),!l){Rd("You will need to pass in an i18next instance by using initReactI18next");const L=(F,U)=>typeof U=="string"?U:U&&typeof U=="object"&&typeof U.defaultValue=="string"?U.defaultValue:Array.isArray(F)?F[F.length-1]:F,V=[L,{},!1];return V.t=L,V.i18n={},V.ready=!1,V}l.options.react&&l.options.react.wait!==void 0&&Rd("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...hx(),...l.options.react,...e},{useSuspense:d,keyPrefix:f}=u;let p=o||l.options&&l.options.defaultNS;p=typeof p=="string"?[p]:p||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(p);const m=(l.isInitialized||l.initializedStoreOnce)&&p.every(L=>ax(L,l,u)),_=xx(l,e.lng||null,u.nsMode==="fallback"?p:p[0],f),g=()=>_,S=()=>Ug(l,e.lng||null,u.nsMode==="fallback"?p:p[0],f),[M,T]=Ee.useState(g);let x=p.join();e.lng&&(x=`${e.lng}${x}`);const y=_x(x),D=Ee.useRef(!0);Ee.useEffect(()=>{const{bindI18n:L,bindI18nStore:V}=u;D.current=!0,!m&&!d&&(e.lng?Up(l,e.lng,p,()=>{D.current&&T(S)}):Ip(l,p,()=>{D.current&&T(S)})),m&&y&&y!==x&&D.current&&T(S);function F(){D.current&&T(S)}return L&&l&&l.on(L,F),V&&l&&l.store.on(V,F),()=>{D.current=!1,L&&l&&L.split(" ").forEach(U=>l.off(U,F)),V&&l&&V.split(" ").forEach(U=>l.store.off(U,F))}},[l,x]),Ee.useEffect(()=>{D.current&&m&&T(g)},[l,f,m]);const R=[M,l,m];if(R.t=M,R.i18n=l,R.ready=m,m||!m&&!d)return R;throw new Promise(L=>{e.lng?Up(l,e.lng,p,()=>L()):Ip(l,p,()=>L())})}function yx(s){let{i18n:e,defaultNS:t,children:i}=s;const o=Ee.useMemo(()=>({i18n:e,defaultNS:t}),[e,t]);return Ee.createElement(Ig.Provider,{value:o},i)}const Sx=()=>{const{t:s}=no(),[e,t]=Ee.useState(!1);Ee.useEffect(()=>{const o=setTimeout(()=>{t(!0)},100);return()=>clearTimeout(o)},[]);const i=[[{src:"img/iPhone 15 Mockup, Perspective.png",title:"SpaceAirTracker",heightClass:"h-auto"},{src:"img/cleopatraCosmetics.jpg",title:"Cleopatra Cosmétics",heightClass:"h-48"}],[{src:"img/macbook-subtle-turn.mp4",title:"Claustrum Aquae",isVideo:!0,heightClass:"h-52"},{src:"img/mockupHp.png",title:"Harry Potter App",heightClass:"h-auto"}],[{src:"img/mockupMex1.png",title:"México Guide",heightClass:"h-auto"},{src:"img/Mobile App Screen Mockup, Mosaic.png",title:"The Holy Wine",heightClass:"h-48"}],[{src:"img/mockuptrafic.png",title:"Traffic Valencia",heightClass:"h-52"},{src:"img/mockupHp.png",title:"Harry Potter App",heightClass:"h-auto"}]];return N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:"flex flex-col justify-center items-center mt-5",children:[e&&N.jsxs("span",{className:"span_maqEscribir overflow-hidden border-r-2 border-blue-400",children:[s("header.helloWorld"),N.jsx("br",{})]}),e&&N.jsxs("span",{className:"span_maqEscribir1 overflow-hidden border-r-2 border-orange-400",children:[s("header.Im"),N.jsx("br",{})]})]}),N.jsx("div",{className:"h-auto mb-20 lg:mb-12",children:N.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 ml-10 mr-10",children:i.map((o,l)=>N.jsx("div",{className:"grid gap-4",children:o.map((u,d)=>N.jsxs("figure",{className:"max-w-full relative",children:[u.isVideo?N.jsx("iframe",{className:`object-cover max-w-full rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-300 ${u.heightClass}`,src:u.src,allow:"autoplay; fullscreen; picture-in-picture",title:u.title}):N.jsx("img",{className:`object-contain w-full bg-zinc-200 rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300 ${u.heightClass}`,src:u.src,alt:u.title}),N.jsx("figcaption",{className:"span_maqEscribir2 overflow-hidden rounded-md top-1 w-full z-90 absolute bg-gradient-to-r from-zinc-50 text-zinc-700 font-semibold px-5 py-2 text-xs",children:u.title})]},d))},l))})}),N.jsx("div",{className:"flex justify-center mb-20",children:N.jsxs(jr,{to:"/contacto",className:"conoceme",children:[s("header.contact")," ",N.jsx("i",{className:"pi pi-user",style:{color:"white"},children:" "})]})})]})},Mx=()=>{const{t:s}=no();return N.jsx(N.Fragment,{children:N.jsxs("div",{className:"ml-2 mr-2 seccionInformacion justify-center flex flex-col md:flex-row lg:flex-row h-auto mt-20 mb-20 gap-4 font-mono",children:[N.jsxs("div",{className:"icon_section text-center text-sm",children:[N.jsx("span",{children:N.jsx("i",{className:"pi pi-thumbs-up",style:{color:"#e040a4"}})}),N.jsx("h1",{className:"titsec_Informacion",children:s("sectionInformation.professionalism.title")}),N.jsx("p",{className:"parrsec_Informacion",children:s("sectionInformation.professionalism.description")})]}),N.jsxs("div",{className:"icon_section text-center text-sm",children:[N.jsx("span",{children:N.jsx("i",{className:"pi pi-question",style:{color:"#e040a4"}})}),N.jsx("h1",{className:"titsec_Informacion ",children:s("sectionInformation.advice.title")}),N.jsx("p",{className:"parrsec_Informacion",children:s("sectionInformation.advice.description")})]}),N.jsxs("div",{className:"icon_section text-center text-sm",children:[N.jsx("span",{children:N.jsx("i",{className:"pi pi-tablet",style:{color:"#e040a4"}})}),N.jsx("h1",{className:"titsec_Informacion",children:s("sectionInformation.devices.title")}),N.jsxs("p",{className:"parrsec_Informacion",children:[" ",s("sectionInformation.devices.description")]})]})]})})},Ex=()=>N.jsx("div",{children:N.jsx(Mx,{})}),wx=()=>{const[s,e]=Ee.useState(""),[t,i]=Ee.useState(""),o=Ee.useRef();Ee.useEffect(()=>{o.current.focus()});const l=d=>{e(d.target.value)},u=d=>{if(d.key==="Enter"){let f="";switch(f=t+`
$ `+s+`
`,s){case"init":f+=`
  /\\_/\\                                         
 ( o.o )   Hello!!!                              
  > ^ <    Bienvenido a mi terminal!!
  
`;break;case"date":f+="Today is "+new Date().toDateString();break;case"bienvenida":f+="Hola puedes guiarte con los diferentes comandos, ...";break;case"quienSoy":f+="Me llamo Andrea, y soy una gerundense que hace más de un año medio desarrollando webs en el sector del Frontend, mis frameworks favoritos son Angular y React";break;case"unMundoDescubierto":f+="Desde que descubrí este mundo, hace aproximadamente un año, me he sumergido en este viaje emocionante de aprendizaje constante  y crecimiento personal,en él he aprendido que no hay nada imposible de conseguir si trabajas duro y con disciplina. Con el paso de los meses, la curiosidad y el afán de aprender, han sido el motor incansable que me ha llevado hasta este camino.";break;case"viajeLenguajes":f+="Durante este viaje, he adquirido experiencia en el desarrollo Web Frontend y mis pinitos en el Backend, utilizando las tecnologias más demandadas de esta carrera, HTML, CSS, Javascript, React, Node, MongoDb. Además he podido enfrentarme al desafio  de trabajar en proyectos reales que me han permitido mejorar todas mis habilidades y enfrentarme a situaciones en el mundo real. Me he adentrado en el mundo de las librerias de mapas interactivos, como Leaflet, MapLibre, OpenLayers y Mapbox, generando de cada librería un proyecto de cada uno de características distintas";break;case"gracias":f+="Si has llegado hasta aqui, queria agradecerte que hayas dedicado tu tiempo a conocerme un poco más, si tienes alguna pregunta o quieres saber más sobre mi, no dudes en contactar conmigo. ¡Gracias!";break;case"clear":i(""),e("");return;case"help":f+=`Prompts:
          - init: Inicializa la terminal.
          - date: Muestra la fecha actual.
          - bienvenida: Un saludo inicial y guía.
          - quienSoy: Información sobre mí.
          - unMundoDescubierto: Mi introducción al desarrollo.
          - viajeLenguajes: Tecnologías y proyectos.
          - gracias: Mensaje de agradecimiento.
          - clear: Limpia la terminal.
          - help: Muestra esta lista de comandos.
                  `;break;default:f+="Unknown command: "+s;break}i(f),e("")}};return N.jsx(N.Fragment,{children:N.jsxs("div",{className:"container-terminal md:mb-20 lg:mb-20 mt-20 p-4 overflow-auto ",onClick:d=>o.current.focus(),children:[N.jsxs("div",{className:"md:flex flex-col md:flex-row lg:flex-row justify-center  font-mono dark:text-zinc-600 card terminal-demo h-80",children:[N.jsx("div",{className:"grid grid-cols-1 md:grid-rows-2 text-center md:text-left lg-text-left md:mr-5",children:N.jsxs("div",{children:[N.jsx("p",{className:"text-xl font-bold",children:"Instrucciones"}),N.jsxs("p",{children:['Entre "',N.jsx("strong",{children:"date"}),'" la terminal ',N.jsx("br",{}),"le mostrará la fecha."]}),N.jsxs("p",{children:["Si quiere limpiar la terminal ",N.jsx("br",{}),"utilice el prompt ",N.jsx("strong",{children:'"clear"'})]})]})}),N.jsx("div",{className:"flex flex-col text-center md:text-left",children:N.jsxs("ol",{children:[N.jsx("p",{className:"text-xl font-bold",children:"Propmts"}),N.jsx("li",{children:N.jsxs("strong",{children:["init","{0}"]})}),N.jsx("li",{children:N.jsxs("strong",{children:["bienvenida ","{1}"]})}),N.jsx("li",{children:N.jsxs("strong",{children:["date","{2}"]})}),N.jsx("li",{children:N.jsxs("strong",{children:["quienSoy","{3}"]})}),N.jsx("li",{children:N.jsxs("strong",{children:["unMundoDescubierto","{4}"]})}),N.jsx("li",{children:N.jsxs("strong",{children:["viajeLenguajes","{5}"]})}),N.jsx("li",{children:N.jsxs("strong",{children:["gracias","{6}"]})}),N.jsx("li",{children:N.jsxs("strong",{children:["clear","{7}"]})}),N.jsx("li",{children:N.jsxs("strong",{children:["help","{8}"]})})]})})]}),N.jsxs("div",{className:"w-full",children:[N.jsx("input",{type:"text",className:"border-none outline-none m-0 p-0 bg-transparent text-green-500 mt-20 font-mono",placeholder:"Escribe un prompt...",ref:o,value:s,onChange:l,onKeyDown:u}),N.jsx("div",{className:"terminal font-mono mb-2 mt-2",children:N.jsx("p",{class:"p-1",children:t})})]})]})})},Op=()=>N.jsx("div",{children:N.jsx(Sx,{})}),Tx=()=>{const{t:s}=no();return N.jsxs(N.Fragment,{children:[N.jsx("h1",{className:"skills",children:s("header.skills")}),N.jsxs("div",{className:"contenedor",children:[N.jsxs("figure",{children:[N.jsx("img",{src:"https://miro.medium.com/max/1200/0*2JYJbAv70Asvm2de.png",alt:"img-skills"}),N.jsxs("div",{className:"capa",children:[N.jsx("h2",{children:"100%"}),N.jsx("p",{children:s("skills.markupLanguage")})]})]}),N.jsxs("figure",{children:[N.jsx("img",{src:"https://th.bing.com/th/id/OIP.xEVLs9u_Z6fr-jKrDpWI6AHaD6?rs=1&pid=ImgDetMain",alt:"img-skills"}),N.jsxs("div",{className:"capa",children:[N.jsx("h2",{children:"100%"}),N.jsxs("p",{children:[s("skills.webInterfaceDesign")," "]})]})]}),N.jsxs("figure",{children:[N.jsx("img",{src:"https://blog.faradars.org/wp-content/uploads/2023/01/what-is-JS.jpg",alt:"img-skills"}),N.jsxs("div",{className:"capa",children:[N.jsx("h2",{children:"70%"}),N.jsx("p",{children:s("skills.javascriptKnowledge")})]})]}),N.jsxs("figure",{children:[N.jsx("img",{src:"https://theomnibuzz.com/wp-content/uploads/2020/12/react-js-1_orig.png",alt:"img-skills"}),N.jsxs("div",{className:"capa",children:[N.jsx("h2",{children:"70%"}),N.jsx("p",{children:s("skills.reactExperience")})]})]}),N.jsxs("figure",{children:[N.jsx("img",{src:"https://www.filepicker.io/api/file/7vjtVUXBQHyTO4AhJ7mW",alt:"img-skills"}),N.jsxs("div",{className:"capa",children:[N.jsx("h2",{children:"50%"}),N.jsx("p",{children:s("skills.databaseExperience")})]})]}),N.jsxs("figure",{children:[N.jsx("img",{src:"https://www.themeinthebox.com/wp-content/uploads/elementor/thumbs/Bootstrap-5-q6cc37pc8ekqe5d3vc9scpfvtcdjqj6ei5n4rcfucw.png",alt:"img-skills"}),N.jsxs("div",{className:"capa",children:[N.jsx("h2",{children:"100%"}),N.jsx("p",{children:s("skills.bootstrapKnowledge")})]})]}),N.jsxs("figure",{children:[N.jsx("img",{src:"https://th.bing.com/th/id/OIP.piAMkLAjuBhL3mIPbPgROgHaDm?rs=1&pid=ImgDetMain",alt:"img-skills"}),N.jsxs("div",{className:"capa",children:[N.jsx("h2",{children:"90%"}),N.jsx("p",{children:s("skills.dailyUsage")})]})]}),N.jsxs("figure",{children:[N.jsx("img",{src:"https://miro.medium.com/max/3840/1*fDwzjCH3qzhosC6DVel4ng.jpeg",alt:"img-skills"}),N.jsxs("div",{className:"capa",children:[N.jsx("h2",{children:"90%"}),N.jsx("p",{children:s("skills.gitExperience")})]})]}),N.jsxs("figure",{children:[N.jsx("img",{src:"https://freecodestack.com/wp-content/uploads/2022/12/What-is-tailwind-CSS-and-its-features.jpg"}),N.jsxs("div",{className:"capa",children:[N.jsx("h2",{children:"80%"}),N.jsxs("p",{children:[" ",s("skills.tailwindExperience")]})]})]})]})]})},Ax=()=>N.jsxs("div",{children:["Proyectos",N.jsx("h1",{children:"Proyectos"})]}),Cx=()=>N.jsx(N.Fragment,{children:N.jsx("form",{class:"mb-20 mr-2 ml-2 mt-32",children:N.jsxs("div",{class:"flex flex-col  lg:flex-row md:flex-row",children:[N.jsx("div",{class:"md:w-2/5 lg:w-2/5 h-96 opacity-65 ",children:N.jsx("img",{src:"https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600",class:"h-96 w-full object-cover rounded-lg"})}),N.jsxs("div",{class:"md:w-4/5 lg:w-4/5 h-96 md:ml-4 lg:ml-8 lg:mr-8",children:[N.jsx("h2",{class:"mb-4 text-2xl tracking-tight font-extrabold text-center text-zinc-700 font-mono",children:"Contacto"}),N.jsx("p",{class:"mb-8 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-base",children:"Quieres accesoramiento, consejo o quieres transmitirme tu idea para tu web, ponte en contacto conmigo"}),N.jsxs("div",{class:"flex flex-row gap-2",children:[N.jsxs("div",{class:"flex flex-col w-full ",children:[N.jsx("label",{for:"email",class:"block mb-1 text-xs font-medium text-gray-900 ",children:"Your email"}),N.jsx("input",{type:"email",id:"email",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ",placeholder:"example@gmail.com",required:!0})]}),N.jsxs("div",{class:"flex flex-col w-full",children:[N.jsx("label",{for:"name",class:"block mb-1 text-xs font-medium text-gray-900 ",children:"Tu nombre"}),N.jsx("input",{type:"text",id:"text",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ",placeholder:"tu nombre y apellidos",required:!0})]})]}),N.jsxs("div",{class:"w-full ",children:[N.jsx("textarea",{id:"message",rows:"4",class:"mt-4  block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Que quieres consultarme..."}),N.jsx("button",{type:"submit",class:" bg-zinc-900 text-white p-1 rounded-sm mt-2 w-28 h-10",children:"Enviar"})]})]})]})})}),Rx=()=>{const{t:s}=no();return N.jsxs(N.Fragment,{children:[N.jsx("h1",{className:"certificaciones_title",children:s("header.certifications")}),N.jsxs("div",{className:"container_certificaciones",children:[N.jsxs("div",{className:"card_google",children:[N.jsx("h2",{children:s("certificationsGoogle.june")}),N.jsxs("h3",{children:[s("certificationsGoogle.course")," ",N.jsx("br",{})," ",s("certificationsGoogle.coursetitle")]}),N.jsx("img",{src:"https://www.emprendedorinteligente.com/wp-content/uploads/2019/11/header-activate-logo-lg-1024x286.png",className:"logo_google"}),N.jsxs("details",{children:[N.jsx("summary",{children:s("certificationsGoogle.summary")}),N.jsx("li",{children:s("certificationsGoogle.topics.history")}),N.jsx("li",{children:s("certificationsGoogle.topics.functioning")}),N.jsx("li",{children:s("certificationsGoogle.topics.writing")}),N.jsx("li",{children:s("certificationsGoogle.topics.publication")}),N.jsx("li",{children:s("certificationsGoogle.topics.page")})]})]}),N.jsxs("div",{className:"card_google1",children:[N.jsx("h2",{children:s("certificationsGoogle1.july")}),N.jsxs("h3",{children:[s("certificationsGoogle1.course")," ",N.jsx("br",{})," ",s("certificationsGoogle1.coursetitle")]}),N.jsx("img",{src:"https://www.emprendedorinteligente.com/wp-content/uploads/2019/11/header-activate-logo-lg-1024x286.png",className:"logo_google"}),N.jsxs("details",{children:[N.jsx("summary",{children:s("certificationsGoogle.summary")}),N.jsx("li",{children:s("certificationsGoogle1.topics.presentationDefinition")}),N.jsx("li",{children:s("certificationsGoogle1.topics.elementsPresentationDefinition")}),N.jsx("li",{children:s("certificationsGoogle1.topics.webSuccessAchievement")}),N.jsx("li",{children:s("certificationsGoogle1.topics.webLayout")})]})]}),N.jsxs("div",{className:"card_google3",children:[N.jsx("h2",{children:s("certificationsUdemy.august")}),N.jsx("h3",{children:s("certificationsUdemy.course")}),N.jsx("img",{src:"https://logosmarcas.net/wp-content/uploads/2021/11/Udemy-Logo-650x366.png",className:"logo_google"}),N.jsxs("details",{children:[N.jsx("summary",{children:s("certificationsGoogle.summary")}),N.jsx("li",{children:s("certificationsUdemy.topics.htmlFundamentals")}),N.jsx("li",{children:s("certificationsUdemy.topics.cssFundamentals")}),N.jsx("li",{children:s("certificationsUdemy.topics.layouts")}),N.jsx("li",{children:s("certificationsUdemy.topics.components")}),N.jsx("li",{children:s("certificationsUdemy.topics.projects")})]})]}),N.jsxs("div",{className:"card_google2",children:[N.jsx("h2",{children:s("certificationsFreeCodeCamp.certification_info.title")}),N.jsx("h3",{children:s("certificationsFreeCodeCamp.certification_info.subtitle")}),N.jsx("img",{src:"https://www.arnoldgelacio.com/images/skills/logo-freecodecamp.png",className:"logo_google"}),N.jsxs("details",{children:[N.jsxs("summary",{children:[s("certificationsGoogle.summary")," 300h"]}),N.jsx("li",{children:s("certificationsFreeCodeCamp.certification_info.summary.details.0")}),N.jsx("li",{children:s("certificationsFreeCodeCamp.certification_info.summary.details.1")}),N.jsx("li",{children:s("certificationsFreeCodeCamp.certification_info.summary.details.2")}),N.jsx("li",{children:s("certificationsFreeCodeCamp.certification_info.summary.details.3")})]})]})]})]})},bx=()=>{let s="img/logo2.png";const{t:e}=no();return N.jsx(N.Fragment,{children:N.jsx("div",{className:"header flex flex-col justify-center items-center mt-5 bg-transparent",children:N.jsxs("div",{className:"flex mb-2 justify-start",children:[N.jsx("img",{src:s,className:"h-auto mb-12 mt-5 w-28 ",alt:"logo-imagen"}),N.jsxs("div",{className:"flex flex-col p-1 h-8 no-underline list-none ml-0 font-light not-italic",children:[N.jsxs(jr,{to:"/inicio",className:"enlaces_navbar",children:[" ",e("header.home")]}),N.jsxs("details",{children:[N.jsx("summary",{className:"enlaces_navbar",children:e("header.KnowMe")}),N.jsx(jr,{to:"/sobremi",className:"enlaces",children:e("header.aboutMe")}),N.jsxs(jr,{to:"/queofrezco",className:"enlaces",children:[" ",e("header.whatdoIoffer")]})]}),N.jsxs("details",{children:[N.jsx("summary",{className:"enlaces_navbar",children:e("header.training")}),N.jsx(jr,{to:"/skills",className:"enlaces",children:e("header.skills")}),N.jsxs(jr,{to:"/certificaciones",className:"enlaces",children:[" ",e("header.certifications")]})]}),N.jsx(jr,{to:"/contacto",className:"enlaces_navbar",children:e("header.contact")})]})]})})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="164",ws={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Px=0,Fp=1,Lx=2,Og=1,Nx=2,Oi=3,_r=0,Ln=1,Fi=2,gr=0,$s=1,kp=2,zp=3,Bp=4,Dx=5,Xr=100,Ix=101,Ux=102,Ox=103,Fx=104,kx=200,zx=201,Bx=202,Hx=203,Pd=204,Ld=205,Vx=206,Gx=207,jx=208,Wx=209,Xx=210,$x=211,qx=212,Yx=213,Kx=214,Zx=0,Jx=1,Qx=2,kl=3,ey=4,ty=5,ny=6,iy=7,Fg=0,ry=1,sy=2,vr=0,oy=1,ay=2,ly=3,cy=4,uy=5,dy=6,fy=7,kg=300,Zs=301,Js=302,Nd=303,Dd=304,Kl=306,Id=1e3,qr=1001,Ud=1002,qn=1003,hy=1004,cl=1005,ai=1006,Wu=1007,Yr=1008,xr=1009,py=1010,my=1011,zg=1012,Bg=1013,Qs=1014,pr=1015,Zl=1016,Hg=1017,Vg=1018,ra=1020,gy=35902,vy=1021,_y=1022,gi=1023,xy=1024,yy=1025,qs=1026,Jo=1027,Sy=1028,Gg=1029,My=1030,jg=1031,Wg=1033,Xu=33776,$u=33777,qu=33778,Yu=33779,Hp=35840,Vp=35841,Gp=35842,jp=35843,Wp=36196,Xp=37492,$p=37496,qp=37808,Yp=37809,Kp=37810,Zp=37811,Jp=37812,Qp=37813,em=37814,tm=37815,nm=37816,im=37817,rm=37818,sm=37819,om=37820,am=37821,Ku=36492,lm=36494,cm=36495,Ey=36283,um=36284,dm=36285,fm=36286,wy=3200,Ty=3201,Ay=0,Cy=1,fr="",hi="srgb",Mr="srgb-linear",Bd="display-p3",Jl="display-p3-linear",zl="linear",Nt="srgb",Bl="rec709",Hl="p3",As=7680,hm=519,Ry=512,by=513,Py=514,Xg=515,Ly=516,Ny=517,Dy=518,Iy=519,pm=35044,mm="300 es",ki=2e3,Vl=2001;class Qr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gm=1234567;const $o=Math.PI/180,Qo=180/Math.PI;function io(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function vn(s,e,t){return Math.max(e,Math.min(t,s))}function Hd(s,e){return(s%e+e)%e}function Uy(s,e,t,i,o){return i+(s-e)*(o-i)/(t-e)}function Oy(s,e,t){return s!==e?(t-s)/(e-s):0}function qo(s,e,t){return(1-t)*s+t*e}function Fy(s,e,t,i){return qo(s,e,1-Math.exp(-t*i))}function ky(s,e=1){return e-Math.abs(Hd(s,e*2)-e)}function zy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function By(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Hy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Vy(s,e){return s+Math.random()*(e-s)}function Gy(s){return s*(.5-Math.random())}function jy(s){s!==void 0&&(gm=s);let e=gm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wy(s){return s*$o}function Xy(s){return s*Qo}function $y(s){return(s&s-1)===0&&s!==0}function qy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Yy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ky(s,e,t,i,o){const l=Math.cos,u=Math.sin,d=l(t/2),f=u(t/2),p=l((e+i)/2),m=u((e+i)/2),_=l((e-i)/2),g=u((e-i)/2),S=l((i-e)/2),M=u((i-e)/2);switch(o){case"XYX":s.set(d*m,f*_,f*g,d*p);break;case"YZY":s.set(f*g,d*m,f*_,d*p);break;case"ZXZ":s.set(f*_,f*g,d*m,d*p);break;case"XZX":s.set(d*m,f*M,f*S,d*p);break;case"YXY":s.set(f*S,d*m,f*M,d*p);break;case"ZYZ":s.set(f*M,f*S,d*m,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ws(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Zy={DEG2RAD:$o,RAD2DEG:Qo,generateUUID:io,clamp:vn,euclideanModulo:Hd,mapLinear:Uy,inverseLerp:Oy,lerp:qo,damp:Fy,pingpong:ky,smoothstep:zy,smootherstep:By,randInt:Hy,randFloat:Vy,randFloatSpread:Gy,seededRandom:jy,degToRad:Wy,radToDeg:Xy,isPowerOfTwo:$y,ceilPowerOfTwo:qy,floorPowerOfTwo:Yy,setQuaternionFromProperEuler:Ky,normalize:yn,denormalize:Ws};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*i-u*o+e.x,this.y=l*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,i,o,l,u,d,f,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,l,u,d,f,p)}set(e,t,i,o,l,u,d,f,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=d,m[3]=t,m[4]=l,m[5]=f,m[6]=i,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,l=this.elements,u=i[0],d=i[3],f=i[6],p=i[1],m=i[4],_=i[7],g=i[2],S=i[5],M=i[8],T=o[0],x=o[3],y=o[6],D=o[1],R=o[4],L=o[7],V=o[2],F=o[5],U=o[8];return l[0]=u*T+d*D+f*V,l[3]=u*x+d*R+f*F,l[6]=u*y+d*L+f*U,l[1]=p*T+m*D+_*V,l[4]=p*x+m*R+_*F,l[7]=p*y+m*L+_*U,l[2]=g*T+S*D+M*V,l[5]=g*x+S*R+M*F,l[8]=g*y+S*L+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8];return t*u*m-t*d*p-i*l*m+i*d*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],_=m*u-d*p,g=d*f-m*l,S=p*l-u*f,M=t*_+i*g+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=_*T,e[1]=(o*p-m*i)*T,e[2]=(d*i-o*u)*T,e[3]=g*T,e[4]=(m*t-o*f)*T,e[5]=(o*l-d*t)*T,e[6]=S*T,e[7]=(i*f-p*t)*T,e[8]=(u*t-i*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(i*f,i*p,-i*(f*u+p*d)+u+e,-o*p,o*f,-o*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Zu.makeScale(e,t)),this}rotate(e){return this.premultiply(Zu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zu=new ht;function $g(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jy(){const s=ea("canvas");return s.style.display="block",s}const vm={};function Qy(s){s in vm||(vm[s]=!0,console.warn(s))}const _m=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xm=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ul={[Mr]:{transfer:zl,primaries:Bl,toReference:s=>s,fromReference:s=>s},[hi]:{transfer:Nt,primaries:Bl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Jl]:{transfer:zl,primaries:Hl,toReference:s=>s.applyMatrix3(xm),fromReference:s=>s.applyMatrix3(_m)},[Bd]:{transfer:Nt,primaries:Hl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(xm),fromReference:s=>s.applyMatrix3(_m).convertLinearToSRGB()}},eS=new Set([Mr,Jl]),Tt={enabled:!0,_workingColorSpace:Mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!eS.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=ul[e].toReference,o=ul[t].fromReference;return o(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ul[s].primaries},getTransfer:function(s){return s===fr?zl:ul[s].transfer}};function Ys(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ju(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class tS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=ea("canvas")),Cs.width=e.width,Cs.height=e.height;const i=Cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Ys(l[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ys(t[i]/255)*255):t[i]=Ys(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nS=0;class qg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Qu(o[u].image)):l.push(Qu(o[u]))}else l=Qu(o);i.url=l}return t||(e.images[this.uuid]=i),i}}function Qu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?tS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iS=0;class Mn extends Qr{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,i=qr,o=qr,l=ai,u=Yr,d=gi,f=xr,p=Mn.DEFAULT_ANISOTROPY,m=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=io(),this.name="",this.source=new qg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=kg;Mn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,t=0,i=0,o=1){an.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,l;const f=e.elements,p=f[0],m=f[4],_=f[8],g=f[1],S=f[5],M=f[9],T=f[2],x=f[6],y=f[10];if(Math.abs(m-g)<.01&&Math.abs(_-T)<.01&&Math.abs(M-x)<.01){if(Math.abs(m+g)<.1&&Math.abs(_+T)<.1&&Math.abs(M+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,L=(S+1)/2,V=(y+1)/2,F=(m+g)/4,U=(_+T)/4,ee=(M+x)/4;return R>L&&R>V?R<.01?(i=0,o=.707106781,l=.707106781):(i=Math.sqrt(R),o=F/i,l=U/i):L>V?L<.01?(i=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),i=F/o,l=ee/o):V<.01?(i=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),i=U/l,o=ee/l),this.set(i,o,l,t),this}let D=Math.sqrt((x-M)*(x-M)+(_-T)*(_-T)+(g-m)*(g-m));return Math.abs(D)<.001&&(D=1),this.x=(x-M)/D,this.y=(_-T)/D,this.z=(g-m)/D,this.w=Math.acos((p+S+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rS extends Qr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const l=new Mn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends rS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yg extends Mn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=qn,this.minFilter=qn,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sS extends Mn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=qn,this.minFilter=qn,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,l,u,d){let f=i[o+0],p=i[o+1],m=i[o+2],_=i[o+3];const g=l[u+0],S=l[u+1],M=l[u+2],T=l[u+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(d===1){e[t+0]=g,e[t+1]=S,e[t+2]=M,e[t+3]=T;return}if(_!==T||f!==g||p!==S||m!==M){let x=1-d;const y=f*g+p*S+m*M+_*T,D=y>=0?1:-1,R=1-y*y;if(R>Number.EPSILON){const V=Math.sqrt(R),F=Math.atan2(V,y*D);x=Math.sin(x*F)/V,d=Math.sin(d*F)/V}const L=d*D;if(f=f*x+g*L,p=p*x+S*L,m=m*x+M*L,_=_*x+T*L,x===1-d){const V=1/Math.sqrt(f*f+p*p+m*m+_*_);f*=V,p*=V,m*=V,_*=V}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,l,u){const d=i[o],f=i[o+1],p=i[o+2],m=i[o+3],_=l[u],g=l[u+1],S=l[u+2],M=l[u+3];return e[t]=d*M+m*_+f*S-p*g,e[t+1]=f*M+m*g+p*_-d*S,e[t+2]=p*M+m*S+d*g-f*_,e[t+3]=m*M-d*_-f*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(i/2),m=d(o/2),_=d(l/2),g=f(i/2),S=f(o/2),M=f(l/2);switch(u){case"XYZ":this._x=g*m*_+p*S*M,this._y=p*S*_-g*m*M,this._z=p*m*M+g*S*_,this._w=p*m*_-g*S*M;break;case"YXZ":this._x=g*m*_+p*S*M,this._y=p*S*_-g*m*M,this._z=p*m*M-g*S*_,this._w=p*m*_+g*S*M;break;case"ZXY":this._x=g*m*_-p*S*M,this._y=p*S*_+g*m*M,this._z=p*m*M+g*S*_,this._w=p*m*_-g*S*M;break;case"ZYX":this._x=g*m*_-p*S*M,this._y=p*S*_+g*m*M,this._z=p*m*M-g*S*_,this._w=p*m*_+g*S*M;break;case"YZX":this._x=g*m*_+p*S*M,this._y=p*S*_+g*m*M,this._z=p*m*M-g*S*_,this._w=p*m*_-g*S*M;break;case"XZY":this._x=g*m*_-p*S*M,this._y=p*S*_-g*m*M,this._z=p*m*M+g*S*_,this._w=p*m*_+g*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],m=t[6],_=t[10],g=i+d+_;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(m-f)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(i>d&&i>_){const S=2*Math.sqrt(1+i-d-_);this._w=(m-f)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-i-_);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(f+m)/S}else{const S=2*Math.sqrt(1+_-i-d);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(f+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,m=t._w;return this._x=i*m+u*d+o*p-l*f,this._y=o*m+u*f+l*d-i*p,this._z=l*m+u*p+i*f-o*d,this._w=u*m-i*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+i*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=i,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*i+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),m=Math.atan2(p,d),_=Math.sin((1-t)*m)/p,g=Math.sin(t*m)/p;return this._w=u*_+this._w*g,this._x=i*_+this._x*g,this._y=o*_+this._y*g,this._z=l*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*o,this.y=l[1]*t+l[4]*i+l[7]*o,this.z=l[2]*t+l[5]*i+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*i+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*i+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*i+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*o-d*i),m=2*(d*t-l*o),_=2*(l*i-u*t);return this.x=t+f*p+u*_-d*m,this.y=i+f*m+d*p-l*_,this.z=o+f*_+l*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*o,this.y=l[1]*t+l[5]*i+l[9]*o,this.z=l[2]*t+l[6]*i+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*u-i*f,this.z=i*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ed.copy(this).projectOnVector(e),this.sub(ed)}reflect(e){return this.sub(ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new Q,ym=new Zr;class sa{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ri):ri.fromBufferAttribute(l,u),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dl.copy(i.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),fl.subVectors(this.max,Ho),Rs.subVectors(e.a,Ho),bs.subVectors(e.b,Ho),Ps.subVectors(e.c,Ho),sr.subVectors(bs,Rs),or.subVectors(Ps,bs),kr.subVectors(Rs,Ps);let t=[0,-sr.z,sr.y,0,-or.z,or.y,0,-kr.z,kr.y,sr.z,0,-sr.x,or.z,0,-or.x,kr.z,0,-kr.x,-sr.y,sr.x,0,-or.y,or.x,0,-kr.y,kr.x,0];return!td(t,Rs,bs,Ps,fl)||(t=[1,0,0,0,1,0,0,0,1],!td(t,Rs,bs,Ps,fl))?!1:(hl.crossVectors(sr,or),t=[hl.x,hl.y,hl.z],td(t,Rs,bs,Ps,fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ri=new Q,dl=new sa,Rs=new Q,bs=new Q,Ps=new Q,sr=new Q,or=new Q,kr=new Q,Ho=new Q,fl=new Q,hl=new Q,zr=new Q;function td(s,e,t,i,o){for(let l=0,u=s.length-3;l<=u;l+=3){zr.fromArray(s,l);const d=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),f=e.dot(zr),p=t.dot(zr),m=i.dot(zr);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>d)return!1}return!0}const oS=new sa,Vo=new Q,nd=new Q;class Vd{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):oS.setFromPoints(e).getCenter(i);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const t=Vo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Vo,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(nd)),this.expandByPoint(Vo.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new Q,id=new Q,pl=new Q,ar=new Q,rd=new Q,ml=new Q,sd=new Q;class Kg{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){id.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(id);const l=e.distanceTo(t)*.5,u=-this.direction.dot(pl),d=ar.dot(this.direction),f=-ar.dot(pl),p=ar.lengthSq(),m=Math.abs(1-u*u);let _,g,S,M;if(m>0)if(_=u*f-d,g=u*d-f,M=l*m,_>=0)if(g>=-M)if(g<=M){const T=1/m;_*=T,g*=T,S=_*(_+u*g+2*d)+g*(u*_+g+2*f)+p}else g=l,_=Math.max(0,-(u*g+d)),S=-_*_+g*(g+2*f)+p;else g=-l,_=Math.max(0,-(u*g+d)),S=-_*_+g*(g+2*f)+p;else g<=-M?(_=Math.max(0,-(-u*l+d)),g=_>0?-l:Math.min(Math.max(-l,-f),l),S=-_*_+g*(g+2*f)+p):g<=M?(_=0,g=Math.min(Math.max(-l,-f),l),S=g*(g+2*f)+p):(_=Math.max(0,-(u*l+d)),g=_>0?l:Math.min(Math.max(-l,-f),l),S=-_*_+g*(g+2*f)+p);else g=u>0?-l:l,_=Math.max(0,-(u*g+d)),S=-_*_+g*(g+2*f)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(id).addScaledVector(pl,g),S}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),o=Ni.dot(Ni)-i*i,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=i-u,f=i+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,l,u,d,f;const p=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(i=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(i=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),m>=0?(l=(e.min.y-g.y)*m,u=(e.max.y-g.y)*m):(l=(e.max.y-g.y)*m,u=(e.min.y-g.y)*m),i>u||l>o||((l>i||isNaN(i))&&(i=l),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-g.z)*_,f=(e.max.z-g.z)*_):(d=(e.max.z-g.z)*_,f=(e.min.z-g.z)*_),i>f||d>o)||((d>i||i!==i)&&(i=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,o,l){rd.subVectors(t,e),ml.subVectors(i,e),sd.crossVectors(rd,ml);let u=this.direction.dot(sd),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;ar.subVectors(this.origin,e);const f=d*this.direction.dot(ml.crossVectors(ar,ml));if(f<0)return null;const p=d*this.direction.dot(rd.cross(ar));if(p<0||f+p>u)return null;const m=-d*ar.dot(sd);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,i,o,l,u,d,f,p,m,_,g,S,M,T,x){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,l,u,d,f,p,m,_,g,S,M,T,x)}set(e,t,i,o,l,u,d,f,p,m,_,g,S,M,T,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=o,y[1]=l,y[5]=u,y[9]=d,y[13]=f,y[2]=p,y[6]=m,y[10]=_,y[14]=g,y[3]=S,y[7]=M,y[11]=T,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),u=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,l=e.z,u=Math.cos(i),d=Math.sin(i),f=Math.cos(o),p=Math.sin(o),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*m,S=u*_,M=d*m,T=d*_;t[0]=f*m,t[4]=-f*_,t[8]=p,t[1]=S+M*p,t[5]=g-T*p,t[9]=-d*f,t[2]=T-g*p,t[6]=M+S*p,t[10]=u*f}else if(e.order==="YXZ"){const g=f*m,S=f*_,M=p*m,T=p*_;t[0]=g+T*d,t[4]=M*d-S,t[8]=u*p,t[1]=u*_,t[5]=u*m,t[9]=-d,t[2]=S*d-M,t[6]=T+g*d,t[10]=u*f}else if(e.order==="ZXY"){const g=f*m,S=f*_,M=p*m,T=p*_;t[0]=g-T*d,t[4]=-u*_,t[8]=M+S*d,t[1]=S+M*d,t[5]=u*m,t[9]=T-g*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const g=u*m,S=u*_,M=d*m,T=d*_;t[0]=f*m,t[4]=M*p-S,t[8]=g*p+T,t[1]=f*_,t[5]=T*p+g,t[9]=S*p-M,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const g=u*f,S=u*p,M=d*f,T=d*p;t[0]=f*m,t[4]=T-g*_,t[8]=M*_+S,t[1]=_,t[5]=u*m,t[9]=-d*m,t[2]=-p*m,t[6]=S*_+M,t[10]=g-T*_}else if(e.order==="XZY"){const g=u*f,S=u*p,M=d*f,T=d*p;t[0]=f*m,t[4]=-_,t[8]=p*m,t[1]=g*_+T,t[5]=u*m,t[9]=S*_-M,t[2]=M*_-S,t[6]=d*m,t[10]=T*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aS,e,lS)}lookAt(e,t,i){const o=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),lr.crossVectors(i,kn),lr.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),lr.crossVectors(i,kn)),lr.normalize(),gl.crossVectors(kn,lr),o[0]=lr.x,o[4]=gl.x,o[8]=kn.x,o[1]=lr.y,o[5]=gl.y,o[9]=kn.y,o[2]=lr.z,o[6]=gl.z,o[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,l=this.elements,u=i[0],d=i[4],f=i[8],p=i[12],m=i[1],_=i[5],g=i[9],S=i[13],M=i[2],T=i[6],x=i[10],y=i[14],D=i[3],R=i[7],L=i[11],V=i[15],F=o[0],U=o[4],ee=o[8],I=o[12],A=o[1],q=o[5],le=o[9],G=o[13],ce=o[2],ae=o[6],he=o[10],ue=o[14],z=o[3],re=o[7],P=o[11],$=o[15];return l[0]=u*F+d*A+f*ce+p*z,l[4]=u*U+d*q+f*ae+p*re,l[8]=u*ee+d*le+f*he+p*P,l[12]=u*I+d*G+f*ue+p*$,l[1]=m*F+_*A+g*ce+S*z,l[5]=m*U+_*q+g*ae+S*re,l[9]=m*ee+_*le+g*he+S*P,l[13]=m*I+_*G+g*ue+S*$,l[2]=M*F+T*A+x*ce+y*z,l[6]=M*U+T*q+x*ae+y*re,l[10]=M*ee+T*le+x*he+y*P,l[14]=M*I+T*G+x*ue+y*$,l[3]=D*F+R*A+L*ce+V*z,l[7]=D*U+R*q+L*ae+V*re,l[11]=D*ee+R*le+L*he+V*P,l[15]=D*I+R*G+L*ue+V*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],m=e[2],_=e[6],g=e[10],S=e[14],M=e[3],T=e[7],x=e[11],y=e[15];return M*(+l*f*_-o*p*_-l*d*g+i*p*g+o*d*S-i*f*S)+T*(+t*f*S-t*p*g+l*u*g-o*u*S+o*p*m-l*f*m)+x*(+t*p*_-t*d*S-l*u*_+i*u*S+l*d*m-i*p*m)+y*(-o*d*m-t*f*_+t*d*g+o*u*_-i*u*g+i*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],_=e[9],g=e[10],S=e[11],M=e[12],T=e[13],x=e[14],y=e[15],D=_*x*p-T*g*p+T*f*S-d*x*S-_*f*y+d*g*y,R=M*g*p-m*x*p-M*f*S+u*x*S+m*f*y-u*g*y,L=m*T*p-M*_*p+M*d*S-u*T*S-m*d*y+u*_*y,V=M*_*f-m*T*f-M*d*g+u*T*g+m*d*x-u*_*x,F=t*D+i*R+o*L+l*V;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=D*U,e[1]=(T*g*l-_*x*l-T*o*S+i*x*S+_*o*y-i*g*y)*U,e[2]=(d*x*l-T*f*l+T*o*p-i*x*p-d*o*y+i*f*y)*U,e[3]=(_*f*l-d*g*l-_*o*p+i*g*p+d*o*S-i*f*S)*U,e[4]=R*U,e[5]=(m*x*l-M*g*l+M*o*S-t*x*S-m*o*y+t*g*y)*U,e[6]=(M*f*l-u*x*l-M*o*p+t*x*p+u*o*y-t*f*y)*U,e[7]=(u*g*l-m*f*l+m*o*p-t*g*p-u*o*S+t*f*S)*U,e[8]=L*U,e[9]=(M*_*l-m*T*l-M*i*S+t*T*S+m*i*y-t*_*y)*U,e[10]=(u*T*l-M*d*l+M*i*p-t*T*p-u*i*y+t*d*y)*U,e[11]=(m*d*l-u*_*l-m*i*p+t*_*p+u*i*S-t*d*S)*U,e[12]=V*U,e[13]=(m*T*o-M*_*o+M*i*g-t*T*g-m*i*x+t*_*x)*U,e[14]=(M*d*o-u*T*o-M*i*f+t*T*f+u*i*x-t*d*x)*U,e[15]=(u*_*o-m*d*o+m*i*f-t*_*f-u*i*g+t*d*g)*U,this}scale(e){const t=this.elements,i=e.x,o=e.y,l=e.z;return t[0]*=i,t[4]*=o,t[8]*=l,t[1]*=i,t[5]*=o,t[9]*=l,t[2]*=i,t[6]*=o,t[10]*=l,t[3]*=i,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),l=1-i,u=e.x,d=e.y,f=e.z,p=l*u,m=l*d;return this.set(p*u+i,p*d-o*f,p*f+o*d,0,p*d+o*f,m*d+i,m*f-o*u,0,p*f-o*d,m*f+o*u,l*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,l,u){return this.set(1,i,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,m=u+u,_=d+d,g=l*p,S=l*m,M=l*_,T=u*m,x=u*_,y=d*_,D=f*p,R=f*m,L=f*_,V=i.x,F=i.y,U=i.z;return o[0]=(1-(T+y))*V,o[1]=(S+L)*V,o[2]=(M-R)*V,o[3]=0,o[4]=(S-L)*F,o[5]=(1-(g+y))*F,o[6]=(x+D)*F,o[7]=0,o[8]=(M+R)*U,o[9]=(x-D)*U,o[10]=(1-(g+T))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let l=Ls.set(o[0],o[1],o[2]).length();const u=Ls.set(o[4],o[5],o[6]).length(),d=Ls.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],si.copy(this);const p=1/l,m=1/u,_=1/d;return si.elements[0]*=p,si.elements[1]*=p,si.elements[2]*=p,si.elements[4]*=m,si.elements[5]*=m,si.elements[6]*=m,si.elements[8]*=_,si.elements[9]*=_,si.elements[10]*=_,t.setFromRotationMatrix(si),i.x=l,i.y=u,i.z=d,this}makePerspective(e,t,i,o,l,u,d=ki){const f=this.elements,p=2*l/(t-e),m=2*l/(i-o),_=(t+e)/(t-e),g=(i+o)/(i-o);let S,M;if(d===ki)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(d===Vl)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=m,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,l,u,d=ki){const f=this.elements,p=1/(t-e),m=1/(i-o),_=1/(u-l),g=(t+e)*p,S=(i+o)*m;let M,T;if(d===ki)M=(u+l)*_,T=-2*_;else if(d===Vl)M=l*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=T,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ls=new Q,si=new Yt,aS=new Q(0,0,0),lS=new Q(1,1,1),lr=new Q,gl=new Q,kn=new Q,Sm=new Yt,Mm=new Zr;class zi{constructor(e=0,t=0,i=0,o=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],p=o[5],m=o[9],_=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(vn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-vn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(vn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mm.setFromEuler(this),this.setFromQuaternion(Mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cS=0;const Em=new Q,Ns=new Zr,Di=new Yt,vl=new Q,Go=new Q,uS=new Q,dS=new Zr,wm=new Q(1,0,0),Tm=new Q(0,1,0),Am=new Q(0,0,1),Cm={type:"added"},fS={type:"removed"},Ds={type:"childadded",child:null},od={type:"childremoved",child:null};class Nn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new Q,t=new zi,i=new Zr,o=new Q(1,1,1);function l(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ht}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(wm,e)}rotateY(e){return this.rotateOnAxis(Tm,e)}rotateZ(e){return this.rotateOnAxis(Am,e)}translateOnAxis(e,t){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wm,e)}translateY(e){return this.translateOnAxis(Tm,e)}translateZ(e){return this.translateOnAxis(Am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vl.copy(e):vl.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Go,vl,this.up):Di.lookAt(vl,Go,this.up),this.quaternion.setFromRotationMatrix(Di),o&&(Di.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix(Di),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fS),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,dS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++){const l=t[i];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++){const d=o[l];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const _=f[p];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),m=u(e.images),_=u(e.shapes),g=u(e.skeletons),S=u(e.animations),M=u(e.nodes);d.length>0&&(i.geometries=d),f.length>0&&(i.materials=f),p.length>0&&(i.textures=p),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),S.length>0&&(i.animations=S),M.length>0&&(i.nodes=M)}return i.object=o,i;function u(d){const f=[];for(const p in d){const m=d[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Nn.DEFAULT_UP=new Q(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new Q,Ii=new Q,ad=new Q,Ui=new Q,Is=new Q,Us=new Q,Rm=new Q,ld=new Q,cd=new Q,ud=new Q;class mi{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),oi.subVectors(e,t),o.cross(oi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,i,o,l){oi.subVectors(o,t),Ii.subVectors(i,t),ad.subVectors(e,t);const u=oi.dot(oi),d=oi.dot(Ii),f=oi.dot(ad),p=Ii.dot(Ii),m=Ii.dot(ad),_=u*p-d*d;if(_===0)return l.set(0,0,0),null;const g=1/_,S=(p*f-d*m)*g,M=(u*m-d*f)*g;return l.set(1-S-M,M,S)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,i,o,l,u,d,f){return this.getBarycoord(e,t,i,o,Ui)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Ui.x),f.addScaledVector(u,Ui.y),f.addScaledVector(d,Ui.z),f)}static isFrontFacing(e,t,i,o){return oi.subVectors(i,t),Ii.subVectors(e,t),oi.cross(Ii).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),oi.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,i,o,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,l=this.c;let u,d;Is.subVectors(o,i),Us.subVectors(l,i),ld.subVectors(e,i);const f=Is.dot(ld),p=Us.dot(ld);if(f<=0&&p<=0)return t.copy(i);cd.subVectors(e,o);const m=Is.dot(cd),_=Us.dot(cd);if(m>=0&&_<=m)return t.copy(o);const g=f*_-m*p;if(g<=0&&f>=0&&m<=0)return u=f/(f-m),t.copy(i).addScaledVector(Is,u);ud.subVectors(e,l);const S=Is.dot(ud),M=Us.dot(ud);if(M>=0&&S<=M)return t.copy(l);const T=S*p-f*M;if(T<=0&&p>=0&&M<=0)return d=p/(p-M),t.copy(i).addScaledVector(Us,d);const x=m*M-S*_;if(x<=0&&_-m>=0&&S-M>=0)return Rm.subVectors(l,o),d=(_-m)/(_-m+(S-M)),t.copy(o).addScaledVector(Rm,d);const y=1/(x+T+g);return u=T*y,d=g*y,t.copy(i).addScaledVector(Is,u).addScaledVector(Us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function dd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Tt.workingColorSpace){if(e=Hd(e,1),t=vn(t,0,1),i=vn(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,u=2*i-l;this.r=dd(u,l,e+1/3),this.g=dd(u,l,e),this.b=dd(u,l,e-1/3)}return Tt.toWorkingColorSpace(this,o),this}setStyle(e,t=hi){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const i=Jg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=Ju(e.r),this.g=Ju(e.g),this.b=Ju(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Tt.fromWorkingColorSpace(gn.copy(this),e),Math.round(vn(gn.r*255,0,255))*65536+Math.round(vn(gn.g*255,0,255))*256+Math.round(vn(gn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(gn.copy(this),t);const i=gn.r,o=gn.g,l=gn.b,u=Math.max(i,o,l),d=Math.min(i,o,l);let f,p;const m=(d+u)/2;if(d===u)f=0,p=0;else{const _=u-d;switch(p=m<=.5?_/(u+d):_/(2-u-d),u){case i:f=(o-l)/_+(o<l?6:0);break;case o:f=(l-i)/_+2;break;case l:f=(i-o)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=hi){Tt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,i=gn.g,o=gn.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(_l);const i=qo(cr.h,_l.h,t),o=qo(cr.s,_l.s,t),l=qo(cr.l,_l.l,t);return this.setHSL(i,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*o,this.g=l[1]*t+l[4]*i+l[7]*o,this.b=l[2]*t+l[5]*i+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Et;Et.NAMES=Jg;let hS=0;class Ql extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=io(),this.name="",this.type="Material",this.blending=$s,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Ld,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==_r&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ld&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let l=0;l!==o;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gd extends Ql{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new Q,xl=new at;class xi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xl.fromBufferAttribute(this,t),xl.applyMatrix3(e),this.setXY(t,xl.x,xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),o=yn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,l){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),o=yn(o,this.array),l=yn(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),e}}class Qg extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ev extends xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yi extends xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let pS=0;const Xn=new Yt,fd=new Nn,Os=new Q,zn=new sa,jo=new sa,nn=new Q;class Er extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($g(e)?ev:Qg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new ht().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return fd.lookAt(e),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const l=e[i];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const l=t[i];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];jo.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(zn.min,jo.min),zn.expandByPoint(nn),nn.addVectors(zn.max,jo.max),zn.expandByPoint(nn)):(zn.expandByPoint(jo.min),zn.expandByPoint(jo.max))}zn.getCenter(i);let o=0;for(let l=0,u=e.count;l<u;l++)nn.fromBufferAttribute(e,l),o=Math.max(o,i.distanceToSquared(nn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,m=d.count;p<m;p++)nn.fromBufferAttribute(d,p),f&&(Os.fromBufferAttribute(e,p),nn.add(Os)),o=Math.max(o,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),d=[],f=[];for(let ee=0;ee<i.count;ee++)d[ee]=new Q,f[ee]=new Q;const p=new Q,m=new Q,_=new Q,g=new at,S=new at,M=new at,T=new Q,x=new Q;function y(ee,I,A){p.fromBufferAttribute(i,ee),m.fromBufferAttribute(i,I),_.fromBufferAttribute(i,A),g.fromBufferAttribute(l,ee),S.fromBufferAttribute(l,I),M.fromBufferAttribute(l,A),m.sub(p),_.sub(p),S.sub(g),M.sub(g);const q=1/(S.x*M.y-M.x*S.y);isFinite(q)&&(T.copy(m).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(q),x.copy(_).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(q),d[ee].add(T),d[I].add(T),d[A].add(T),f[ee].add(x),f[I].add(x),f[A].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let ee=0,I=D.length;ee<I;++ee){const A=D[ee],q=A.start,le=A.count;for(let G=q,ce=q+le;G<ce;G+=3)y(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const R=new Q,L=new Q,V=new Q,F=new Q;function U(ee){V.fromBufferAttribute(o,ee),F.copy(V);const I=d[ee];R.copy(I),R.sub(V.multiplyScalar(V.dot(I))).normalize(),L.crossVectors(F,I);const q=L.dot(f[ee])<0?-1:1;u.setXYZW(ee,R.x,R.y,R.z,q)}for(let ee=0,I=D.length;ee<I;++ee){const A=D[ee],q=A.start,le=A.count;for(let G=q,ce=q+le;G<ce;G+=3)U(e.getX(G+0)),U(e.getX(G+1)),U(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,S=i.count;g<S;g++)i.setXYZ(g,0,0,0);const o=new Q,l=new Q,u=new Q,d=new Q,f=new Q,p=new Q,m=new Q,_=new Q;if(e)for(let g=0,S=e.count;g<S;g+=3){const M=e.getX(g+0),T=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,x),m.subVectors(u,l),_.subVectors(o,l),m.cross(_),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),p.fromBufferAttribute(i,x),d.add(m),f.add(m),p.add(m),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),m.subVectors(u,l),_.subVectors(o,l),m.cross(_),i.setXYZ(g+0,m.x,m.y,m.z),i.setXYZ(g+1,m.x,m.y,m.z),i.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,f){const p=d.array,m=d.itemSize,_=d.normalized,g=new p.constructor(f.length*m);let S=0,M=0;for(let T=0,x=f.length;T<x;T++){d.isInterleavedBufferAttribute?S=f[T]*d.data.stride+d.offset:S=f[T]*m;for(let y=0;y<m;y++)g[M++]=p[S++]}return new xi(g,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Er,i=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,i);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let m=0,_=p.length;m<_;m++){const g=p[m],S=e(g,i);f.push(S)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const p=i[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let _=0,g=p.length;_<g;_++){const S=p[_];m.push(S.toJSON(e.data))}m.length>0&&(o[f]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],_=l[p];for(let g=0,S=_.length;g<S;g++)m.push(_[g].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bm=new Yt,Br=new Kg,yl=new Vd,Pm=new Q,Fs=new Q,ks=new Q,zs=new Q,hd=new Q,Sl=new Q,Ml=new at,El=new at,wl=new at,Lm=new Q,Nm=new Q,Dm=new Q,Tl=new Q,Al=new Q;class vi extends Nn{constructor(e=new Er,t=new Gd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Sl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const m=d[f],_=l[f];m!==0&&(hd.fromBufferAttribute(_,e),u?Sl.addScaledVector(hd,m):Sl.addScaledVector(hd.sub(t),m))}t.add(Sl)}return t}raycast(e,t){const i=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(l),Br.copy(e.ray).recast(e.near),!(yl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(yl,Pm)===null||Br.origin.distanceToSquared(Pm)>(e.far-e.near)**2))&&(bm.copy(l).invert(),Br.copy(e.ray).applyMatrix4(bm),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Br)))}_computeIntersections(e,t,i){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,g=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,T=g.length;M<T;M++){const x=g[M],y=u[x.materialIndex],D=Math.max(x.start,S.start),R=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let L=D,V=R;L<V;L+=3){const F=d.getX(L),U=d.getX(L+1),ee=d.getX(L+2);o=Cl(this,y,e,i,p,m,_,F,U,ee),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let x=M,y=T;x<y;x+=3){const D=d.getX(x),R=d.getX(x+1),L=d.getX(x+2);o=Cl(this,u,e,i,p,m,_,D,R,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,T=g.length;M<T;M++){const x=g[M],y=u[x.materialIndex],D=Math.max(x.start,S.start),R=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let L=D,V=R;L<V;L+=3){const F=L,U=L+1,ee=L+2;o=Cl(this,y,e,i,p,m,_,F,U,ee),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let x=M,y=T;x<y;x+=3){const D=x,R=x+1,L=x+2;o=Cl(this,u,e,i,p,m,_,D,R,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function mS(s,e,t,i,o,l,u,d){let f;if(e.side===Ln?f=i.intersectTriangle(u,l,o,!0,d):f=i.intersectTriangle(o,l,u,e.side===_r,d),f===null)return null;Al.copy(d),Al.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Al);return p<t.near||p>t.far?null:{distance:p,point:Al.clone(),object:s}}function Cl(s,e,t,i,o,l,u,d,f,p){s.getVertexPosition(d,Fs),s.getVertexPosition(f,ks),s.getVertexPosition(p,zs);const m=mS(s,e,t,i,Fs,ks,zs,Tl);if(m){o&&(Ml.fromBufferAttribute(o,d),El.fromBufferAttribute(o,f),wl.fromBufferAttribute(o,p),m.uv=mi.getInterpolation(Tl,Fs,ks,zs,Ml,El,wl,new at)),l&&(Ml.fromBufferAttribute(l,d),El.fromBufferAttribute(l,f),wl.fromBufferAttribute(l,p),m.uv1=mi.getInterpolation(Tl,Fs,ks,zs,Ml,El,wl,new at)),u&&(Lm.fromBufferAttribute(u,d),Nm.fromBufferAttribute(u,f),Dm.fromBufferAttribute(u,p),m.normal=mi.getInterpolation(Tl,Fs,ks,zs,Lm,Nm,Dm,new Q),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:d,b:f,c:p,normal:new Q,materialIndex:0};mi.getNormal(Fs,ks,zs,_.normal),m.face=_}return m}class oa extends Er{constructor(e=1,t=1,i=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],m=[],_=[];let g=0,S=0;M("z","y","x",-1,-1,i,t,e,u,l,0),M("z","y","x",1,-1,i,t,-e,u,l,1),M("x","z","y",1,1,e,i,t,o,u,2),M("x","z","y",1,-1,e,i,-t,o,u,3),M("x","y","z",1,-1,e,t,i,o,l,4),M("x","y","z",-1,-1,e,t,-i,o,l,5),this.setIndex(f),this.setAttribute("position",new yi(p,3)),this.setAttribute("normal",new yi(m,3)),this.setAttribute("uv",new yi(_,2));function M(T,x,y,D,R,L,V,F,U,ee,I){const A=L/U,q=V/ee,le=L/2,G=V/2,ce=F/2,ae=U+1,he=ee+1;let ue=0,z=0;const re=new Q;for(let P=0;P<he;P++){const $=P*q-G;for(let Se=0;Se<ae;Se++){const Ue=Se*A-le;re[T]=Ue*D,re[x]=$*R,re[y]=ce,p.push(re.x,re.y,re.z),re[T]=0,re[x]=0,re[y]=F>0?1:-1,m.push(re.x,re.y,re.z),_.push(Se/U),_.push(1-P/ee),ue+=1}}for(let P=0;P<ee;P++)for(let $=0;$<U;$++){const Se=g+$+ae*P,Ue=g+$+ae*(P+1),Y=g+($+1)+ae*(P+1),fe=g+($+1)+ae*P;f.push(Se,Ue,fe),f.push(Ue,Y,fe),z+=6}d.addGroup(S,z,I),S+=z,g+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Sn(s){const e={};for(let t=0;t<s.length;t++){const i=eo(s[t]);for(const o in i)e[o]=i[o]}return e}function gS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const vS={clone:eo,merge:Sn};var _S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Ql{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_S,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=gS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nv extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new Q,Im=new at,Um=new at;class $n extends nv{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,t){return this.getViewBounds(e,Im,Um),t.subVectors(Um,Im)}setViewOffset(e,t,i,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($o*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*i/p,o*=u.width/f,i*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,Hs=1;class yS extends Nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new $n(Bs,Hs,e,t);o.layers=this.layers,this.add(o);const l=new $n(Bs,Hs,e,t);l.layers=this.layers,this.add(l);const u=new $n(Bs,Hs,e,t);u.layers=this.layers,this.add(u);const d=new $n(Bs,Hs,e,t);d.layers=this.layers,this.add(d);const f=new $n(Bs,Hs,e,t);f.layers=this.layers,this.add(f);const p=new $n(Bs,Hs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,m]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,l),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,d),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,p),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,o),e.render(t,m),e.setRenderTarget(_,g,S),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class iv extends Mn{constructor(e,t,i,o,l,u,d,f,p,m){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,i,o,l,u,d,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SS extends Kr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new iv(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new oa(5,5,5),l=new yr({name:"CubemapFromEquirect",uniforms:eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:gr});l.uniforms.tEquirect.value=t;const u=new vi(o,l),d=t.minFilter;return t.minFilter===Yr&&(t.minFilter=ai),new yS(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(l)}}const pd=new Q,MS=new Q,ES=new ht;class dr{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=pd.subVectors(i,t).cross(MS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(pd),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ES.getNormalMatrix(e),o=this.coplanarPoint(pd).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Vd,Rl=new Q;class rv{constructor(e=new dr,t=new dr,i=new dr,o=new dr,l=new dr,u=new dr){this.planes=[e,t,i,o,l,u]}set(e,t,i,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(i),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ki){const i=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],f=o[3],p=o[4],m=o[5],_=o[6],g=o[7],S=o[8],M=o[9],T=o[10],x=o[11],y=o[12],D=o[13],R=o[14],L=o[15];if(i[0].setComponents(f-l,g-p,x-S,L-y).normalize(),i[1].setComponents(f+l,g+p,x+S,L+y).normalize(),i[2].setComponents(f+u,g+m,x+M,L+D).normalize(),i[3].setComponents(f-u,g-m,x-M,L-D).normalize(),i[4].setComponents(f-d,g-_,x-T,L-R).normalize(),t===ki)i[5].setComponents(f+d,g+_,x+T,L+R).normalize();else if(t===Vl)i[5].setComponents(d,_,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Rl.x=o.normal.x>0?e.max.x:e.min.x,Rl.y=o.normal.y>0?e.max.y:e.min.y,Rl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sv(){let s=null,e=!1,t=null,i=null;function o(l,u){t(l,u),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function wS(s){const e=new WeakMap;function t(d,f){const p=d.array,m=d.usage,_=p.byteLength,g=s.createBuffer();s.bindBuffer(f,g),s.bufferData(f,p,m),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function i(d,f,p){const m=f.array,_=f._updateRange,g=f.updateRanges;if(s.bindBuffer(p,d),_.count===-1&&g.length===0&&s.bufferSubData(p,0,m),g.length!==0){for(let S=0,M=g.length;S<M;S++){const T=g[S];s.bufferSubData(p,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}f.clearUpdateRanges()}_.count!==-1&&(s.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m,_.offset,_.count),_.count=-1),f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:u}}class ec extends Er{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(i),f=Math.floor(o),p=d+1,m=f+1,_=e/d,g=t/f,S=[],M=[],T=[],x=[];for(let y=0;y<m;y++){const D=y*g-u;for(let R=0;R<p;R++){const L=R*_-l;M.push(L,-D,0),T.push(0,0,1),x.push(R/d),x.push(1-y/f)}}for(let y=0;y<f;y++)for(let D=0;D<d;D++){const R=D+p*y,L=D+p*(y+1),V=D+1+p*(y+1),F=D+1+p*y;S.push(R,L,F),S.push(L,V,F)}this.setIndex(S),this.setAttribute("position",new yi(M,3)),this.setAttribute("normal",new yi(T,3)),this.setAttribute("uv",new yi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.width,e.height,e.widthSegments,e.heightSegments)}}var TS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AS=`#ifdef USE_ALPHAHASH
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
#endif`,CS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LS=`#ifdef USE_AOMAP
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
#endif`,NS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DS=`#ifdef USE_BATCHING
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
#endif`,IS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,US=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kS=`#ifdef USE_IRIDESCENCE
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
#endif`,zS=`#ifdef USE_BUMPMAP
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
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qS=`#define PI 3.141592653589793
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
} // validated`,YS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KS=`vec3 transformedNormal = objectNormal;
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
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",nM=`
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
}`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fM=`#ifdef USE_GRADIENTMAP
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
}`,hM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gM=`uniform bool receiveShadow;
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
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,_M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MM=`PhysicalMaterial material;
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
#endif`,EM=`struct PhysicalMaterial {
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
}`,wM=`
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
#endif`,TM=`#if defined( RE_IndirectDiffuse )
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
#endif`,AM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IM=`#if defined( USE_POINTS_UV )
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
#endif`,UM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zM=`#ifdef USE_MORPHNORMALS
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
#endif`,BM=`#ifdef USE_MORPHTARGETS
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
#endif`,HM=`#ifdef USE_MORPHTARGETS
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
#endif`,VM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$M=`#ifdef USE_NORMALMAP
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
#endif`,qM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cE=`float getShadowMask() {
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
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dE=`#ifdef USE_SKINNING
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
#endif`,fE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
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
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
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
#endif`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TE=`uniform sampler2D t2D;
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`#include <common>
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
}`,LE=`#if DEPTH_PACKING == 3200
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
}`,NE=`#define DISTANCE
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
}`,DE=`#define DISTANCE
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
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`uniform float scale;
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
}`,FE=`uniform vec3 diffuse;
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
}`,kE=`#include <common>
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
}`,zE=`uniform vec3 diffuse;
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
}`,BE=`#define LAMBERT
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
}`,HE=`#define LAMBERT
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
}`,VE=`#define MATCAP
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
}`,GE=`#define MATCAP
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
}`,jE=`#define NORMAL
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
}`,WE=`#define NORMAL
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
}`,XE=`#define PHONG
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
}`,$E=`#define PHONG
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
}`,qE=`#define STANDARD
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
}`,YE=`#define STANDARD
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
}`,KE=`#define TOON
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
}`,ZE=`#define TOON
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
}`,JE=`uniform float size;
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
}`,QE=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,t1=`uniform vec3 color;
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
}`,n1=`uniform float rotation;
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
}`,i1=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:TS,alphahash_pars_fragment:AS,alphamap_fragment:CS,alphamap_pars_fragment:RS,alphatest_fragment:bS,alphatest_pars_fragment:PS,aomap_fragment:LS,aomap_pars_fragment:NS,batching_pars_vertex:DS,batching_vertex:IS,begin_vertex:US,beginnormal_vertex:OS,bsdfs:FS,iridescence_fragment:kS,bumpmap_pars_fragment:zS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:HS,clipping_planes_pars_vertex:VS,clipping_planes_vertex:GS,color_fragment:jS,color_pars_fragment:WS,color_pars_vertex:XS,color_vertex:$S,common:qS,cube_uv_reflection_fragment:YS,defaultnormal_vertex:KS,displacementmap_pars_vertex:ZS,displacementmap_vertex:JS,emissivemap_fragment:QS,emissivemap_pars_fragment:eM,colorspace_fragment:tM,colorspace_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:rM,envmap_pars_fragment:sM,envmap_pars_vertex:oM,envmap_physical_pars_fragment:vM,envmap_vertex:aM,fog_vertex:lM,fog_pars_vertex:cM,fog_fragment:uM,fog_pars_fragment:dM,gradientmap_pars_fragment:fM,lightmap_pars_fragment:hM,lights_lambert_fragment:pM,lights_lambert_pars_fragment:mM,lights_pars_begin:gM,lights_toon_fragment:_M,lights_toon_pars_fragment:xM,lights_phong_fragment:yM,lights_phong_pars_fragment:SM,lights_physical_fragment:MM,lights_physical_pars_fragment:EM,lights_fragment_begin:wM,lights_fragment_maps:TM,lights_fragment_end:AM,logdepthbuf_fragment:CM,logdepthbuf_pars_fragment:RM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:PM,map_fragment:LM,map_pars_fragment:NM,map_particle_fragment:DM,map_particle_pars_fragment:IM,metalnessmap_fragment:UM,metalnessmap_pars_fragment:OM,morphinstance_vertex:FM,morphcolor_vertex:kM,morphnormal_vertex:zM,morphtarget_pars_vertex:BM,morphtarget_vertex:HM,normal_fragment_begin:VM,normal_fragment_maps:GM,normal_pars_fragment:jM,normal_pars_vertex:WM,normal_vertex:XM,normalmap_pars_fragment:$M,clearcoat_normal_fragment_begin:qM,clearcoat_normal_fragment_maps:YM,clearcoat_pars_fragment:KM,iridescence_pars_fragment:ZM,opaque_fragment:JM,packing:QM,premultiplied_alpha_fragment:eE,project_vertex:tE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:rE,roughnessmap_pars_fragment:sE,shadowmap_pars_fragment:oE,shadowmap_pars_vertex:aE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:dE,skinning_vertex:fE,skinnormal_vertex:hE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:vE,transmission_fragment:_E,transmission_pars_fragment:xE,uv_pars_fragment:yE,uv_pars_vertex:SE,uv_vertex:ME,worldpos_vertex:EE,background_vert:wE,background_frag:TE,backgroundCube_vert:AE,backgroundCube_frag:CE,cube_vert:RE,cube_frag:bE,depth_vert:PE,depth_frag:LE,distanceRGBA_vert:NE,distanceRGBA_frag:DE,equirect_vert:IE,equirect_frag:UE,linedashed_vert:OE,linedashed_frag:FE,meshbasic_vert:kE,meshbasic_frag:zE,meshlambert_vert:BE,meshlambert_frag:HE,meshmatcap_vert:VE,meshmatcap_frag:GE,meshnormal_vert:jE,meshnormal_frag:WE,meshphong_vert:XE,meshphong_frag:$E,meshphysical_vert:qE,meshphysical_frag:YE,meshtoon_vert:KE,meshtoon_frag:ZE,points_vert:JE,points_frag:QE,shadow_vert:e1,shadow_frag:t1,sprite_vert:n1,sprite_frag:i1},Pe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},pi={basic:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Sn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Sn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Sn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Sn([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Sn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Sn([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Sn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Sn([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Sn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Sn([Pe.lights,Pe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};pi.physical={uniforms:Sn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const bl={r:0,b:0,g:0},Vr=new zi,r1=new Yt;function s1(s,e,t,i,o,l,u){const d=new Et(0);let f=l===!0?0:1,p,m,_=null,g=0,S=null;function M(D){let R=D.isScene===!0?D.background:null;return R&&R.isTexture&&(R=(D.backgroundBlurriness>0?t:e).get(R)),R}function T(D){let R=!1;const L=M(D);L===null?y(d,f):L&&L.isColor&&(y(L,1),R=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||R)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function x(D,R){const L=M(R);L&&(L.isCubeTexture||L.mapping===Kl)?(m===void 0&&(m=new vi(new oa(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:eo(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(V,F,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Vr.copy(R.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),m.material.uniforms.envMap.value=L,m.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(r1.makeRotationFromEuler(Vr)),m.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Nt,(_!==L||g!==L.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=L,g=L.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new vi(new ec(2,2),new yr({name:"BackgroundMaterial",uniforms:eo(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Nt,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||g!==L.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=L,g=L.version,S=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function y(D,R){D.getRGB(bl,tv(s)),i.buffers.color.setClear(bl.r,bl.g,bl.b,R,u)}return{getClearColor:function(){return d},setClearColor:function(D,R=1){d.set(D),f=R,y(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,y(d,f)},render:T,addToRenderList:x}}function o1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=g(null);let l=o,u=!1;function d(A,q,le,G,ce){let ae=!1;const he=_(G,le,q);l!==he&&(l=he,p(l.object)),ae=S(A,G,le,ce),ae&&M(A,G,le,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,L(A,q,le,G),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function f(){return s.createVertexArray()}function p(A){return s.bindVertexArray(A)}function m(A){return s.deleteVertexArray(A)}function _(A,q,le){const G=le.wireframe===!0;let ce=i[A.id];ce===void 0&&(ce={},i[A.id]=ce);let ae=ce[q.id];ae===void 0&&(ae={},ce[q.id]=ae);let he=ae[G];return he===void 0&&(he=g(f()),ae[G]=he),he}function g(A){const q=[],le=[],G=[];for(let ce=0;ce<t;ce++)q[ce]=0,le[ce]=0,G[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:le,attributeDivisors:G,object:A,attributes:{},index:null}}function S(A,q,le,G){const ce=l.attributes,ae=q.attributes;let he=0;const ue=le.getAttributes();for(const z in ue)if(ue[z].location>=0){const P=ce[z];let $=ae[z];if($===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&($=A.instanceColor)),P===void 0||P.attribute!==$||$&&P.data!==$.data)return!0;he++}return l.attributesNum!==he||l.index!==G}function M(A,q,le,G){const ce={},ae=q.attributes;let he=0;const ue=le.getAttributes();for(const z in ue)if(ue[z].location>=0){let P=ae[z];P===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(P=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(P=A.instanceColor));const $={};$.attribute=P,P&&P.data&&($.data=P.data),ce[z]=$,he++}l.attributes=ce,l.attributesNum=he,l.index=G}function T(){const A=l.newAttributes;for(let q=0,le=A.length;q<le;q++)A[q]=0}function x(A){y(A,0)}function y(A,q){const le=l.newAttributes,G=l.enabledAttributes,ce=l.attributeDivisors;le[A]=1,G[A]===0&&(s.enableVertexAttribArray(A),G[A]=1),ce[A]!==q&&(s.vertexAttribDivisor(A,q),ce[A]=q)}function D(){const A=l.newAttributes,q=l.enabledAttributes;for(let le=0,G=q.length;le<G;le++)q[le]!==A[le]&&(s.disableVertexAttribArray(le),q[le]=0)}function R(A,q,le,G,ce,ae,he){he===!0?s.vertexAttribIPointer(A,q,le,ce,ae):s.vertexAttribPointer(A,q,le,G,ce,ae)}function L(A,q,le,G){T();const ce=G.attributes,ae=le.getAttributes(),he=q.defaultAttributeValues;for(const ue in ae){const z=ae[ue];if(z.location>=0){let re=ce[ue];if(re===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(re=A.instanceColor)),re!==void 0){const P=re.normalized,$=re.itemSize,Se=e.get(re);if(Se===void 0)continue;const Ue=Se.buffer,Y=Se.type,fe=Se.bytesPerElement,Me=Y===s.INT||Y===s.UNSIGNED_INT||re.gpuType===Bg;if(re.isInterleavedBufferAttribute){const me=re.data,Ne=me.stride,je=re.offset;if(me.isInstancedInterleavedBuffer){for(let K=0;K<z.locationSize;K++)y(z.location+K,me.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let K=0;K<z.locationSize;K++)x(z.location+K);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let K=0;K<z.locationSize;K++)R(z.location+K,$/z.locationSize,Y,P,Ne*fe,(je+$/z.locationSize*K)*fe,Me)}else{if(re.isInstancedBufferAttribute){for(let me=0;me<z.locationSize;me++)y(z.location+me,re.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let me=0;me<z.locationSize;me++)x(z.location+me);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let me=0;me<z.locationSize;me++)R(z.location+me,$/z.locationSize,Y,P,$*fe,$/z.locationSize*me*fe,Me)}}else if(he!==void 0){const P=he[ue];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(z.location,P);break;case 3:s.vertexAttrib3fv(z.location,P);break;case 4:s.vertexAttrib4fv(z.location,P);break;default:s.vertexAttrib1fv(z.location,P)}}}}D()}function V(){ee();for(const A in i){const q=i[A];for(const le in q){const G=q[le];for(const ce in G)m(G[ce].object),delete G[ce];delete q[le]}delete i[A]}}function F(A){if(i[A.id]===void 0)return;const q=i[A.id];for(const le in q){const G=q[le];for(const ce in G)m(G[ce].object),delete G[ce];delete q[le]}delete i[A.id]}function U(A){for(const q in i){const le=i[q];if(le[A.id]===void 0)continue;const G=le[A.id];for(const ce in G)m(G[ce].object),delete G[ce];delete le[A.id]}}function ee(){I(),u=!0,l!==o&&(l=o,p(l.object))}function I(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:ee,resetDefaultState:I,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:x,disableUnusedAttributes:D}}function a1(s,e,t){let i;function o(p){i=p}function l(p,m){s.drawArrays(i,p,m),t.update(m,i,1)}function u(p,m,_){_!==0&&(s.drawArraysInstanced(i,p,m,_),t.update(m,i,_))}function d(p,m,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let S=0;S<_;S++)this.render(p[S],m[S]);else{g.multiDrawArraysWEBGL(i,p,0,m,0,_);let S=0;for(let M=0;M<_;M++)S+=m[M];t.update(S,i,1)}}function f(p,m,_,g){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],m[M],g[M]);else{S.multiDrawArraysInstancedWEBGL(i,p,0,m,0,g,0,_);let M=0;for(let T=0;T<_;T++)M+=m[T];for(let T=0;T<g.length;T++)t.update(M,i,g[T])}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function l1(s,e,t,i){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==gi&&i.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const U=F===Zl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==xr&&i.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==pr&&!U)}function f(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=f(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const _=t.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=S>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,maxTextures:g,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:T,maxAttributes:x,maxVertexUniforms:y,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:L,maxSamples:V}}function c1(s){const e=this;let t=null,i=0,o=!1,l=!1;const u=new dr,d=new ht,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const S=_.length!==0||g||i!==0||o;return o=g,i=_.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=m(_,g,0)},this.setState=function(_,g,S){const M=_.clippingPlanes,T=_.clipIntersection,x=_.clipShadows,y=s.get(_);if(!o||M===null||M.length===0||l&&!x)l?m(null):p();else{const D=l?0:i,R=D*4;let L=y.clippingState||null;f.value=L,L=m(M,g,R,S);for(let V=0;V!==R;++V)L[V]=t[V];y.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,g,S,M){const T=_!==null?_.length:0;let x=null;if(T!==0){if(x=f.value,M!==!0||x===null){const y=S+T*4,D=g.matrixWorldInverse;d.getNormalMatrix(D),(x===null||x.length<y)&&(x=new Float32Array(y));for(let R=0,L=S;R!==T;++R,L+=4)u.copy(_[R]).applyMatrix4(D,d),u.normal.toArray(x,L),x[L+3]=u.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function u1(s){let e=new WeakMap;function t(u,d){return d===Nd?u.mapping=Zs:d===Dd&&(u.mapping=Js),u}function i(u){if(u&&u.isTexture){const d=u.mapping;if(d===Nd||d===Dd)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new SS(f.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}class d1 extends nv{constructor(e=-1,t=1,i=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=i-e,u=i+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=4,Om=[.125,.215,.35,.446,.526,.582],$r=20,md=new d1,Fm=new Et;let gd=null,vd=0,_d=0,xd=!1;const Wr=(1+Math.sqrt(5))/2,Vs=1/Wr,km=[new Q(-Wr,Vs,0),new Q(Wr,Vs,0),new Q(-Vs,0,Wr),new Q(Vs,0,Wr),new Q(0,Wr,-Vs),new Q(0,Wr,Vs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,vd,_d),this._renderer.xr.enabled=xd,e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Zl,format:gi,colorSpace:Mr,depthBuffer:!1},o=Bm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f1(l)),this._blurMaterial=h1(l,e,t)}return o}_compileMaterial(e){const t=new vi(this._lodPlanes[0],e);this._renderer.compile(t,md)}_sceneToCubeUV(e,t,i,o){const d=new $n(90,1,t,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,g=m.toneMapping;m.getClearColor(Fm),m.toneMapping=vr,m.autoClear=!1;const S=new Gd({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),M=new vi(new oa,S);let T=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,T=!0):(S.color.copy(Fm),T=!0);for(let y=0;y<6;y++){const D=y%3;D===0?(d.up.set(0,f[y],0),d.lookAt(p[y],0,0)):D===1?(d.up.set(0,0,f[y]),d.lookAt(0,p[y],0)):(d.up.set(0,f[y],0),d.lookAt(0,0,p[y]));const R=this._cubeSize;Pl(o,D*R,y>2?R:0,R,R),m.setRenderTarget(o),T&&m.render(M,d),m.render(e,d)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=g,m.autoClear=_,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Zs||e.mapping===Js;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new vi(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Pl(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,md)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=km[(o-l-1)%km.length];this._blur(e,l-1,l,u,d)}t.autoClear=i}_blur(e,t,i,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",l),this._halfBlur(u,e,i,i,o,"longitudinal",l)}_halfBlur(e,t,i,o,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new vi(this._lodPlanes[o],p),g=p.uniforms,S=this._sizeLods[i]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*$r-1),T=l/M,x=isFinite(l)?1+Math.floor(m*T):$r;x>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${$r}`);const y=[];let D=0;for(let U=0;U<$r;++U){const ee=U/T,I=Math.exp(-ee*ee/2);y.push(I),U===0?D+=I:U<x&&(D+=2*I)}for(let U=0;U<y.length;U++)y[U]=y[U]/D;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:R}=this;g.dTheta.value=M,g.mipInt.value=R-i;const L=this._sizeLods[o],V=3*L*(o>R-Xs?o-R+Xs:0),F=4*(this._cubeSize-L);Pl(t,V,F,3*L,2*L),f.setRenderTarget(t),f.render(_,md)}}function f1(s){const e=[],t=[],i=[];let o=s;const l=s-Xs+1+Om.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let f=1/d;u>s-Xs?f=Om[u-s+Xs-1]:u===0&&(f=0),i.push(f);const p=1/(d-2),m=-p,_=1+p,g=[m,m,_,m,_,_,m,m,_,_,m,_],S=6,M=6,T=3,x=2,y=1,D=new Float32Array(T*M*S),R=new Float32Array(x*M*S),L=new Float32Array(y*M*S);for(let F=0;F<S;F++){const U=F%3*2/3-1,ee=F>2?0:-1,I=[U,ee,0,U+2/3,ee,0,U+2/3,ee+1,0,U,ee,0,U+2/3,ee+1,0,U,ee+1,0];D.set(I,T*M*F),R.set(g,x*M*F);const A=[F,F,F,F,F,F];L.set(A,y*M*F)}const V=new Er;V.setAttribute("position",new xi(D,T)),V.setAttribute("uv",new xi(R,x)),V.setAttribute("faceIndex",new xi(L,y)),e.push(V),o>Xs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bm(s,e,t){const i=new Kr(s,e,t);return i.texture.mapping=Kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function h1(s,e,t){const i=new Float32Array($r),o=new Q(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:jd(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Hm(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Vm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function jd(){return`

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
	`}function p1(s){let e=new WeakMap,t=null;function i(d){if(d&&d.isTexture){const f=d.mapping,p=f===Nd||f===Dd,m=f===Zs||f===Js;if(p||m){let _=e.get(d);const g=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return t===null&&(t=new zm(s)),_=p?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||m&&S&&o(S)?(t===null&&(t=new zm(s)),_=p?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function o(d){let f=0;const p=6;for(let m=0;m<p;m++)d[m]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function m1(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function g1(s,e,t,i){const o={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);for(const M in g.morphAttributes){const T=g.morphAttributes[M];for(let x=0,y=T.length;x<y;x++)e.remove(T[x])}g.removeEventListener("dispose",u),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(_,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function f(_){const g=_.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER);const S=_.morphAttributes;for(const M in S){const T=S[M];for(let x=0,y=T.length;x<y;x++)e.update(T[x],s.ARRAY_BUFFER)}}function p(_){const g=[],S=_.index,M=_.attributes.position;let T=0;if(S!==null){const D=S.array;T=S.version;for(let R=0,L=D.length;R<L;R+=3){const V=D[R+0],F=D[R+1],U=D[R+2];g.push(V,F,F,U,U,V)}}else if(M!==void 0){const D=M.array;T=M.version;for(let R=0,L=D.length/3-1;R<L;R+=3){const V=R+0,F=R+1,U=R+2;g.push(V,F,F,U,U,V)}}else return;const x=new($g(g)?ev:Qg)(g,1);x.version=T;const y=l.get(_);y&&e.remove(y),l.set(_,x)}function m(_){const g=l.get(_);if(g){const S=_.index;S!==null&&g.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:f,getWireframeAttribute:m}}function v1(s,e,t){let i;function o(g){i=g}let l,u;function d(g){l=g.type,u=g.bytesPerElement}function f(g,S){s.drawElements(i,S,l,g*u),t.update(S,i,1)}function p(g,S,M){M!==0&&(s.drawElementsInstanced(i,S,l,g*u,M),t.update(S,i,M))}function m(g,S,M){if(M===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let x=0;x<M;x++)this.render(g[x]/u,S[x]);else{T.multiDrawElementsWEBGL(i,S,0,l,g,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];t.update(x,i,1)}}function _(g,S,M,T){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<g.length;y++)p(g[y]/u,S[y],T[y]);else{x.multiDrawElementsInstancedWEBGL(i,S,0,l,g,0,T,0,M);let y=0;for(let D=0;D<M;D++)y+=S[D];for(let D=0;D<T.length;D++)t.update(y,i,T[D])}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function _1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function x1(s,e,t){const i=new WeakMap,o=new an;function l(u,d,f){const p=u.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=m!==void 0?m.length:0;let g=i.get(d);if(g===void 0||g.count!==_){let A=function(){ee.dispose(),i.delete(d),d.removeEventListener("dispose",A)};var S=A;g!==void 0&&g.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let L=0;M===!0&&(L=1),T===!0&&(L=2),x===!0&&(L=3);let V=d.attributes.position.count*L,F=1;V>e.maxTextureSize&&(F=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const U=new Float32Array(V*F*4*_),ee=new Yg(U,V,F,_);ee.type=pr,ee.needsUpdate=!0;const I=L*4;for(let q=0;q<_;q++){const le=y[q],G=D[q],ce=R[q],ae=V*F*4*q;for(let he=0;he<le.count;he++){const ue=he*I;M===!0&&(o.fromBufferAttribute(le,he),U[ae+ue+0]=o.x,U[ae+ue+1]=o.y,U[ae+ue+2]=o.z,U[ae+ue+3]=0),T===!0&&(o.fromBufferAttribute(G,he),U[ae+ue+4]=o.x,U[ae+ue+5]=o.y,U[ae+ue+6]=o.z,U[ae+ue+7]=0),x===!0&&(o.fromBufferAttribute(ce,he),U[ae+ue+8]=o.x,U[ae+ue+9]=o.y,U[ae+ue+10]=o.z,U[ae+ue+11]=ce.itemSize===4?o.w:1)}}g={count:_,texture:ee,size:new at(V,F)},i.set(d,g),d.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let x=0;x<p.length;x++)M+=p[x];const T=d.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",T),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function y1(s,e,t,i){let o=new WeakMap;function l(f){const p=i.render.frame,m=f.geometry,_=e.get(f,m);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const g=f.skeleton;o.get(g)!==p&&(g.update(),o.set(g,p))}return _}function u(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class ov extends Mn{constructor(e,t,i,o,l,u,d,f,p,m){if(m=m!==void 0?m:qs,m!==qs&&m!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===qs&&(i=Qs),i===void 0&&m===Jo&&(i=ra),super(null,o,l,u,d,f,m,i,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:qn,this.minFilter=f!==void 0?f:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const av=new Mn,lv=new ov(1,1);lv.compareFunction=Xg;const cv=new Yg,uv=new sS,dv=new iv,Gm=[],jm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),$m=new Float32Array(4);function ro(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let l=Gm[o];if(l===void 0&&(l=new Float32Array(o),Gm[o]=l),e!==0){i.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function Kt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function tc(s,e){let t=jm[e];t===void 0&&(t=new Int32Array(e),jm[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function S1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function M1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function E1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function w1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function T1(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;$m.set(i),s.uniformMatrix2fv(this.addr,!1,$m),Zt(t,i)}}function A1(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Xm.set(i),s.uniformMatrix3fv(this.addr,!1,Xm),Zt(t,i)}}function C1(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Wm.set(i),s.uniformMatrix4fv(this.addr,!1,Wm),Zt(t,i)}}function R1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function b1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function P1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function L1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function N1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function D1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function I1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function U1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function O1(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);const l=this.type===s.SAMPLER_2D_SHADOW?lv:av;t.setTexture2D(e||l,o)}function F1(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||uv,o)}function k1(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||dv,o)}function z1(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||cv,o)}function B1(s){switch(s){case 5126:return S1;case 35664:return M1;case 35665:return E1;case 35666:return w1;case 35674:return T1;case 35675:return A1;case 35676:return C1;case 5124:case 35670:return R1;case 35667:case 35671:return b1;case 35668:case 35672:return P1;case 35669:case 35673:return L1;case 5125:return N1;case 36294:return D1;case 36295:return I1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return z1}}function H1(s,e){s.uniform1fv(this.addr,e)}function V1(s,e){const t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function G1(s,e){const t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function j1(s,e){const t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function W1(s,e){const t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function X1(s,e){const t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function $1(s,e){const t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function q1(s,e){s.uniform1iv(this.addr,e)}function Y1(s,e){s.uniform2iv(this.addr,e)}function K1(s,e){s.uniform3iv(this.addr,e)}function Z1(s,e){s.uniform4iv(this.addr,e)}function J1(s,e){s.uniform1uiv(this.addr,e)}function Q1(s,e){s.uniform2uiv(this.addr,e)}function ew(s,e){s.uniform3uiv(this.addr,e)}function tw(s,e){s.uniform4uiv(this.addr,e)}function nw(s,e,t){const i=this.cache,o=e.length,l=tc(t,o);Kt(i,l)||(s.uniform1iv(this.addr,l),Zt(i,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||av,l[u])}function iw(s,e,t){const i=this.cache,o=e.length,l=tc(t,o);Kt(i,l)||(s.uniform1iv(this.addr,l),Zt(i,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||uv,l[u])}function rw(s,e,t){const i=this.cache,o=e.length,l=tc(t,o);Kt(i,l)||(s.uniform1iv(this.addr,l),Zt(i,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||dv,l[u])}function sw(s,e,t){const i=this.cache,o=e.length,l=tc(t,o);Kt(i,l)||(s.uniform1iv(this.addr,l),Zt(i,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||cv,l[u])}function ow(s){switch(s){case 5126:return H1;case 35664:return V1;case 35665:return G1;case 35666:return j1;case 35674:return W1;case 35675:return X1;case 35676:return $1;case 5124:case 35670:return q1;case 35667:case 35671:return Y1;case 35668:case 35672:return K1;case 35669:case 35673:return Z1;case 5125:return J1;case 36294:return Q1;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}class aw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=B1(t.type)}}class lw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ow(t.type)}}class cw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],i)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function qm(s,e){s.seq.push(e),s.map[e.id]=e}function uw(s,e,t){const i=s.name,o=i.length;for(yd.lastIndex=0;;){const l=yd.exec(i),u=yd.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===o){qm(t,p===void 0?new aw(d,s,e):new lw(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new cw(d),qm(t,_)),t=_}}}class Il{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);uw(l,u,this)}}setValue(e,t,i,o){const l=this.map[t];l!==void 0&&l.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=i[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function Ym(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const dw=37297;let fw=0;function hw(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;i.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return i.join(`
`)}function pw(s){const e=Tt.getPrimaries(Tt.workingColorSpace),t=Tt.getPrimaries(s);let i;switch(e===t?i="":e===Hl&&t===Bl?i="LinearDisplayP3ToLinearSRGB":e===Bl&&t===Hl&&(i="LinearSRGBToLinearDisplayP3"),s){case Mr:case Jl:return[i,"LinearTransferOETF"];case hi:case Bd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Km(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(i&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+hw(s.getShaderSource(e),u)}else return o}function mw(s,e){const t=pw(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gw(s,e){let t;switch(e){case oy:t="Linear";break;case ay:t="Reinhard";break;case ly:t="OptimizedCineon";break;case cy:t="ACESFilmic";break;case dy:t="AgX";break;case fy:t="Neutral";break;case uy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function _w(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xw(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Xo(s){return s!==""}function Zm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(s){return s.replace(yw,Mw)}const Sw=new Map;function Mw(s,e){let t=ft[e];if(t===void 0){const i=Sw.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Od(t)}const Ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(s){return s.replace(Ew,ww)}function ww(s,e,t,i){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function eg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Aw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function Rw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fg:e="ENVMAP_BLENDING_MULTIPLY";break;case ry:e="ENVMAP_BLENDING_MIX";break;case sy:e="ENVMAP_BLENDING_ADD";break}return e}function bw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Pw(s,e,t,i){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=Tw(t),p=Aw(t),m=Cw(t),_=Rw(t),g=bw(t),S=vw(t),M=_w(l),T=o.createProgram();let x,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xo).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xo).join(`
`),y.length>0&&(y+=`
`)):(x=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),y=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vr?"#define TONE_MAPPING":"",t.toneMapping!==vr?ft.tonemapping_pars_fragment:"",t.toneMapping!==vr?gw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,mw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),u=Od(u),u=Zm(u,t),u=Jm(u,t),d=Od(d),d=Zm(d,t),d=Jm(d,t),u=Qm(u),d=Qm(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=D+x+u,L=D+y+d,V=Ym(o,o.VERTEX_SHADER,R),F=Ym(o,o.FRAGMENT_SHADER,L);o.attachShader(T,V),o.attachShader(T,F),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function U(q){if(s.debug.checkShaderErrors){const le=o.getProgramInfoLog(T).trim(),G=o.getShaderInfoLog(V).trim(),ce=o.getShaderInfoLog(F).trim();let ae=!0,he=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ae=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,V,F);else{const ue=Km(o,V,"vertex"),z=Km(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+le+`
`+ue+`
`+z)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(G===""||ce==="")&&(he=!1);he&&(q.diagnostics={runnable:ae,programLog:le,vertexShader:{log:G,prefix:x},fragmentShader:{log:ce,prefix:y}})}o.deleteShader(V),o.deleteShader(F),ee=new Il(o,T),I=xw(o,T)}let ee;this.getUniforms=function(){return ee===void 0&&U(this),ee};let I;this.getAttributes=function(){return I===void 0&&U(this),I};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(T,dw)),A},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=F,this}let Lw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Dw(e),t.set(e,i)),i}}class Dw{constructor(e){this.id=Lw++,this.code=e,this.usedTimes=0}}function Iw(s,e,t,i,o,l,u){const d=new Zg,f=new Nw,p=new Set,m=[],_=o.logarithmicDepthBuffer,g=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(I){return p.add(I),I===0?"uv":`uv${I}`}function x(I,A,q,le,G){const ce=le.fog,ae=G.geometry,he=I.isMeshStandardMaterial?le.environment:null,ue=(I.isMeshStandardMaterial?t:e).get(I.envMap||he),z=ue&&ue.mapping===Kl?ue.image.height:null,re=M[I.type];I.precision!==null&&(S=o.getMaxPrecision(I.precision),S!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",S,"instead."));const P=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,$=P!==void 0?P.length:0;let Se=0;ae.morphAttributes.position!==void 0&&(Se=1),ae.morphAttributes.normal!==void 0&&(Se=2),ae.morphAttributes.color!==void 0&&(Se=3);let Ue,Y,fe,Me;if(re){const mt=pi[re];Ue=mt.vertexShader,Y=mt.fragmentShader}else Ue=I.vertexShader,Y=I.fragmentShader,f.update(I),fe=f.getVertexShaderID(I),Me=f.getFragmentShaderID(I);const me=s.getRenderTarget(),Ne=G.isInstancedMesh===!0,je=G.isBatchedMesh===!0,K=!!I.map,gt=!!I.matcap,We=!!ue,vt=!!I.aoMap,Xe=!!I.lightMap,lt=!!I.bumpMap,et=!!I.normalMap,ct=!!I.displacementMap,At=!!I.emissiveMap,k=!!I.metalnessMap,C=!!I.roughnessMap,se=I.anisotropy>0,de=I.clearcoat>0,_e=I.dispersion>0,xe=I.iridescence>0,Ge=I.sheen>0,Re=I.transmission>0,Ce=se&&!!I.anisotropyMap,Ze=de&&!!I.clearcoatMap,Ae=de&&!!I.clearcoatNormalMap,Be=de&&!!I.clearcoatRoughnessMap,st=xe&&!!I.iridescenceMap,$e=xe&&!!I.iridescenceThicknessMap,De=Ge&&!!I.sheenColorMap,tt=Ge&&!!I.sheenRoughnessMap,ut=!!I.specularMap,yt=!!I.specularColorMap,nt=!!I.specularIntensityMap,E=Re&&!!I.transmissionMap,j=Re&&!!I.thicknessMap,J=!!I.gradientMap,pe=!!I.alphaMap,we=I.alphaTest>0,it=!!I.alphaHash,ot=!!I.extensions;let Ct=vr;I.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ct=s.toneMapping);const Bt={shaderID:re,shaderType:I.type,shaderName:I.name,vertexShader:Ue,fragmentShader:Y,defines:I.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:S,batching:je,instancing:Ne,instancingColor:Ne&&G.instanceColor!==null,instancingMorph:Ne&&G.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Mr,alphaToCoverage:!!I.alphaToCoverage,map:K,matcap:gt,envMap:We,envMapMode:We&&ue.mapping,envMapCubeUVHeight:z,aoMap:vt,lightMap:Xe,bumpMap:lt,normalMap:et,displacementMap:g&&ct,emissiveMap:At,normalMapObjectSpace:et&&I.normalMapType===Cy,normalMapTangentSpace:et&&I.normalMapType===Ay,metalnessMap:k,roughnessMap:C,anisotropy:se,anisotropyMap:Ce,clearcoat:de,clearcoatMap:Ze,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Be,dispersion:_e,iridescence:xe,iridescenceMap:st,iridescenceThicknessMap:$e,sheen:Ge,sheenColorMap:De,sheenRoughnessMap:tt,specularMap:ut,specularColorMap:yt,specularIntensityMap:nt,transmission:Re,transmissionMap:E,thicknessMap:j,gradientMap:J,opaque:I.transparent===!1&&I.blending===$s&&I.alphaToCoverage===!1,alphaMap:pe,alphaTest:we,alphaHash:it,combine:I.combine,mapUv:K&&T(I.map.channel),aoMapUv:vt&&T(I.aoMap.channel),lightMapUv:Xe&&T(I.lightMap.channel),bumpMapUv:lt&&T(I.bumpMap.channel),normalMapUv:et&&T(I.normalMap.channel),displacementMapUv:ct&&T(I.displacementMap.channel),emissiveMapUv:At&&T(I.emissiveMap.channel),metalnessMapUv:k&&T(I.metalnessMap.channel),roughnessMapUv:C&&T(I.roughnessMap.channel),anisotropyMapUv:Ce&&T(I.anisotropyMap.channel),clearcoatMapUv:Ze&&T(I.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&T(I.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&T(I.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&T(I.iridescenceThicknessMap.channel),sheenColorMapUv:De&&T(I.sheenColorMap.channel),sheenRoughnessMapUv:tt&&T(I.sheenRoughnessMap.channel),specularMapUv:ut&&T(I.specularMap.channel),specularColorMapUv:yt&&T(I.specularColorMap.channel),specularIntensityMapUv:nt&&T(I.specularIntensityMap.channel),transmissionMapUv:E&&T(I.transmissionMap.channel),thicknessMapUv:j&&T(I.thicknessMap.channel),alphaMapUv:pe&&T(I.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(et||se),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ae.attributes.uv&&(K||pe),fog:!!ce,useFog:I.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:G.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Se,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:I.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ct,useLegacyLights:s._useLegacyLights,decodeVideoTexture:K&&I.map.isVideoTexture===!0&&Tt.getTransfer(I.map.colorSpace)===Nt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Fi,flipSided:I.side===Ln,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:ot&&I.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ot&&I.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function y(I){const A=[];if(I.shaderID?A.push(I.shaderID):(A.push(I.customVertexShaderID),A.push(I.customFragmentShaderID)),I.defines!==void 0)for(const q in I.defines)A.push(q),A.push(I.defines[q]);return I.isRawShaderMaterial===!1&&(D(A,I),R(A,I),A.push(s.outputColorSpace)),A.push(I.customProgramCacheKey),A.join()}function D(I,A){I.push(A.precision),I.push(A.outputColorSpace),I.push(A.envMapMode),I.push(A.envMapCubeUVHeight),I.push(A.mapUv),I.push(A.alphaMapUv),I.push(A.lightMapUv),I.push(A.aoMapUv),I.push(A.bumpMapUv),I.push(A.normalMapUv),I.push(A.displacementMapUv),I.push(A.emissiveMapUv),I.push(A.metalnessMapUv),I.push(A.roughnessMapUv),I.push(A.anisotropyMapUv),I.push(A.clearcoatMapUv),I.push(A.clearcoatNormalMapUv),I.push(A.clearcoatRoughnessMapUv),I.push(A.iridescenceMapUv),I.push(A.iridescenceThicknessMapUv),I.push(A.sheenColorMapUv),I.push(A.sheenRoughnessMapUv),I.push(A.specularMapUv),I.push(A.specularColorMapUv),I.push(A.specularIntensityMapUv),I.push(A.transmissionMapUv),I.push(A.thicknessMapUv),I.push(A.combine),I.push(A.fogExp2),I.push(A.sizeAttenuation),I.push(A.morphTargetsCount),I.push(A.morphAttributeCount),I.push(A.numDirLights),I.push(A.numPointLights),I.push(A.numSpotLights),I.push(A.numSpotLightMaps),I.push(A.numHemiLights),I.push(A.numRectAreaLights),I.push(A.numDirLightShadows),I.push(A.numPointLightShadows),I.push(A.numSpotLightShadows),I.push(A.numSpotLightShadowsWithMaps),I.push(A.numLightProbes),I.push(A.shadowMapType),I.push(A.toneMapping),I.push(A.numClippingPlanes),I.push(A.numClipIntersection),I.push(A.depthPacking)}function R(I,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),I.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.skinning&&d.enable(4),A.morphTargets&&d.enable(5),A.morphNormals&&d.enable(6),A.morphColors&&d.enable(7),A.premultipliedAlpha&&d.enable(8),A.shadowMapEnabled&&d.enable(9),A.useLegacyLights&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.alphaToCoverage&&d.enable(20),I.push(d.mask)}function L(I){const A=M[I.type];let q;if(A){const le=pi[A];q=vS.clone(le.uniforms)}else q=I.uniforms;return q}function V(I,A){let q;for(let le=0,G=m.length;le<G;le++){const ce=m[le];if(ce.cacheKey===A){q=ce,++q.usedTimes;break}}return q===void 0&&(q=new Pw(s,A,I,l),m.push(q)),q}function F(I){if(--I.usedTimes===0){const A=m.indexOf(I);m[A]=m[m.length-1],m.pop(),I.destroy()}}function U(I){f.remove(I)}function ee(){f.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:L,acquireProgram:V,releaseProgram:F,releaseShaderCache:U,programs:m,dispose:ee}}function Uw(){let s=new WeakMap;function e(l){let u=s.get(l);return u===void 0&&(u={},s.set(l,u)),u}function t(l){s.delete(l)}function i(l,u,d){s.get(l)[u]=d}function o(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function Ow(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function tg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ng(){const s=[];let e=0;const t=[],i=[],o=[];function l(){e=0,t.length=0,i.length=0,o.length=0}function u(_,g,S,M,T,x){let y=s[e];return y===void 0?(y={id:_.id,object:_,geometry:g,material:S,groupOrder:M,renderOrder:_.renderOrder,z:T,group:x},s[e]=y):(y.id=_.id,y.object=_,y.geometry=g,y.material=S,y.groupOrder=M,y.renderOrder=_.renderOrder,y.z=T,y.group=x),e++,y}function d(_,g,S,M,T,x){const y=u(_,g,S,M,T,x);S.transmission>0?i.push(y):S.transparent===!0?o.push(y):t.push(y)}function f(_,g,S,M,T,x){const y=u(_,g,S,M,T,x);S.transmission>0?i.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function p(_,g){t.length>1&&t.sort(_||Ow),i.length>1&&i.sort(g||tg),o.length>1&&o.sort(g||tg)}function m(){for(let _=e,g=s.length;_<g;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:o,init:l,push:d,unshift:f,finish:m,sort:p}}function Fw(){let s=new WeakMap;function e(i,o){const l=s.get(i);let u;return l===void 0?(u=new ng,s.set(i,[u])):o>=l.length?(u=new ng,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function kw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Et};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function zw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Bw=0;function Hw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Vw(s){const e=new kw,t=zw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new Q);const o=new Q,l=new Yt,u=new Yt;function d(p,m){let _=0,g=0,S=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let M=0,T=0,x=0,y=0,D=0,R=0,L=0,V=0,F=0,U=0,ee=0;p.sort(Hw);const I=m===!0?Math.PI:1;for(let q=0,le=p.length;q<le;q++){const G=p[q],ce=G.color,ae=G.intensity,he=G.distance,ue=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=ce.r*ae*I,g+=ce.g*ae*I,S+=ce.b*ae*I;else if(G.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(G.sh.coefficients[z],ae);ee++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity*I),G.castShadow){const re=G.shadow,P=t.get(G);P.shadowBias=re.bias,P.shadowNormalBias=re.normalBias,P.shadowRadius=re.radius,P.shadowMapSize=re.mapSize,i.directionalShadow[M]=P,i.directionalShadowMap[M]=ue,i.directionalShadowMatrix[M]=G.shadow.matrix,R++}i.directional[M]=z,M++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(ce).multiplyScalar(ae*I),z.distance=he,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,i.spot[x]=z;const re=G.shadow;if(G.map&&(i.spotLightMap[F]=G.map,F++,re.updateMatrices(G),G.castShadow&&U++),i.spotLightMatrix[x]=re.matrix,G.castShadow){const P=t.get(G);P.shadowBias=re.bias,P.shadowNormalBias=re.normalBias,P.shadowRadius=re.radius,P.shadowMapSize=re.mapSize,i.spotShadow[x]=P,i.spotShadowMap[x]=ue,V++}x++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(ce).multiplyScalar(ae),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),i.rectArea[y]=z,y++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity*I),z.distance=G.distance,z.decay=G.decay,G.castShadow){const re=G.shadow,P=t.get(G);P.shadowBias=re.bias,P.shadowNormalBias=re.normalBias,P.shadowRadius=re.radius,P.shadowMapSize=re.mapSize,P.shadowCameraNear=re.camera.near,P.shadowCameraFar=re.camera.far,i.pointShadow[T]=P,i.pointShadowMap[T]=ue,i.pointShadowMatrix[T]=G.shadow.matrix,L++}i.point[T]=z,T++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(ae*I),z.groundColor.copy(G.groundColor).multiplyScalar(ae*I),i.hemi[D]=z,D++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=g,i.ambient[2]=S;const A=i.hash;(A.directionalLength!==M||A.pointLength!==T||A.spotLength!==x||A.rectAreaLength!==y||A.hemiLength!==D||A.numDirectionalShadows!==R||A.numPointShadows!==L||A.numSpotShadows!==V||A.numSpotMaps!==F||A.numLightProbes!==ee)&&(i.directional.length=M,i.spot.length=x,i.rectArea.length=y,i.point.length=T,i.hemi.length=D,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=V,i.spotShadowMap.length=V,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=V+F-U,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=ee,A.directionalLength=M,A.pointLength=T,A.spotLength=x,A.rectAreaLength=y,A.hemiLength=D,A.numDirectionalShadows=R,A.numPointShadows=L,A.numSpotShadows=V,A.numSpotMaps=F,A.numLightProbes=ee,i.version=Bw++)}function f(p,m){let _=0,g=0,S=0,M=0,T=0;const x=m.matrixWorldInverse;for(let y=0,D=p.length;y<D;y++){const R=p[y];if(R.isDirectionalLight){const L=i.directional[_];L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),_++}else if(R.isSpotLight){const L=i.spot[S];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),S++}else if(R.isRectAreaLight){const L=i.rectArea[M];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(x),u.identity(),l.copy(R.matrixWorld),l.premultiply(x),u.extractRotation(l),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),M++}else if(R.isPointLight){const L=i.point[g];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(x),g++}else if(R.isHemisphereLight){const L=i.hemi[T];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(x),T++}}}return{setup:d,setupView:f,state:i}}function ig(s){const e=new Vw(s),t=[],i=[];function o(m){p.camera=m,t.length=0,i.length=0}function l(m){t.push(m)}function u(m){i.push(m)}function d(m){e.setup(t,m)}function f(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:u}}function Gw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new ig(s),e.set(o,[d])):l>=u.length?(d=new ig(s),u.push(d)):d=u[l],d}function i(){e=new WeakMap}return{get:t,dispose:i}}class jw extends Ql{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ww extends Ql{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
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
}`;function qw(s,e,t){let i=new rv;const o=new at,l=new at,u=new an,d=new jw({depthPacking:Ty}),f=new Ww,p={},m=t.maxTextureSize,_={[_r]:Ln,[Ln]:_r,[Fi]:Fi},g=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Xw,fragmentShader:$w}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new Er;M.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new vi(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Og;let y=this.type;this.render=function(F,U,ee){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const I=s.getRenderTarget(),A=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),le=s.state;le.setBlending(gr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const G=y!==Oi&&this.type===Oi,ce=y===Oi&&this.type!==Oi;for(let ae=0,he=F.length;ae<he;ae++){const ue=F[ae],z=ue.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const re=z.getFrameExtents();if(o.multiply(re),l.copy(z.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/re.x),o.x=l.x*re.x,z.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/re.y),o.y=l.y*re.y,z.mapSize.y=l.y)),z.map===null||G===!0||ce===!0){const $=this.type!==Oi?{minFilter:qn,magFilter:qn}:{};z.map!==null&&z.map.dispose(),z.map=new Kr(o.x,o.y,$),z.map.texture.name=ue.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const P=z.getViewportCount();for(let $=0;$<P;$++){const Se=z.getViewport($);u.set(l.x*Se.x,l.y*Se.y,l.x*Se.z,l.y*Se.w),le.viewport(u),z.updateMatrices(ue,$),i=z.getFrustum(),L(U,ee,z.camera,ue,this.type)}z.isPointLightShadow!==!0&&this.type===Oi&&D(z,ee),z.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(I,A,q)};function D(F,U){const ee=e.update(T);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Kr(o.x,o.y)),g.uniforms.shadow_pass.value=F.map.texture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(U,null,ee,g,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(U,null,ee,S,T,null)}function R(F,U,ee,I){let A=null;const q=ee.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(q!==void 0)A=q;else if(A=ee.isPointLight===!0?f:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const le=A.uuid,G=U.uuid;let ce=p[le];ce===void 0&&(ce={},p[le]=ce);let ae=ce[G];ae===void 0&&(ae=A.clone(),ce[G]=ae,U.addEventListener("dispose",V)),A=ae}if(A.visible=U.visible,A.wireframe=U.wireframe,I===Oi?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:_[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,ee.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const le=s.properties.get(A);le.light=ee}return A}function L(F,U,ee,I,A){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===Oi)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,F.matrixWorld);const G=e.update(F),ce=F.material;if(Array.isArray(ce)){const ae=G.groups;for(let he=0,ue=ae.length;he<ue;he++){const z=ae[he],re=ce[z.materialIndex];if(re&&re.visible){const P=R(F,re,I,A);F.onBeforeShadow(s,F,U,ee,G,P,z),s.renderBufferDirect(ee,null,G,P,F,z),F.onAfterShadow(s,F,U,ee,G,P,z)}}}else if(ce.visible){const ae=R(F,ce,I,A);F.onBeforeShadow(s,F,U,ee,G,ae,null),s.renderBufferDirect(ee,null,G,ae,F,null),F.onAfterShadow(s,F,U,ee,G,ae,null)}}const le=F.children;for(let G=0,ce=le.length;G<ce;G++)L(le[G],U,ee,I,A)}function V(F){F.target.removeEventListener("dispose",V);for(const ee in p){const I=p[ee],A=F.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function Yw(s){function e(){let E=!1;const j=new an;let J=null;const pe=new an(0,0,0,0);return{setMask:function(we){J!==we&&!E&&(s.colorMask(we,we,we,we),J=we)},setLocked:function(we){E=we},setClear:function(we,it,ot,Ct,Bt){Bt===!0&&(we*=Ct,it*=Ct,ot*=Ct),j.set(we,it,ot,Ct),pe.equals(j)===!1&&(s.clearColor(we,it,ot,Ct),pe.copy(j))},reset:function(){E=!1,J=null,pe.set(-1,0,0,0)}}}function t(){let E=!1,j=null,J=null,pe=null;return{setTest:function(we){we?Me(s.DEPTH_TEST):me(s.DEPTH_TEST)},setMask:function(we){j!==we&&!E&&(s.depthMask(we),j=we)},setFunc:function(we){if(J!==we){switch(we){case Zx:s.depthFunc(s.NEVER);break;case Jx:s.depthFunc(s.ALWAYS);break;case Qx:s.depthFunc(s.LESS);break;case kl:s.depthFunc(s.LEQUAL);break;case ey:s.depthFunc(s.EQUAL);break;case ty:s.depthFunc(s.GEQUAL);break;case ny:s.depthFunc(s.GREATER);break;case iy:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=we}},setLocked:function(we){E=we},setClear:function(we){pe!==we&&(s.clearDepth(we),pe=we)},reset:function(){E=!1,j=null,J=null,pe=null}}}function i(){let E=!1,j=null,J=null,pe=null,we=null,it=null,ot=null,Ct=null,Bt=null;return{setTest:function(mt){E||(mt?Me(s.STENCIL_TEST):me(s.STENCIL_TEST))},setMask:function(mt){j!==mt&&!E&&(s.stencilMask(mt),j=mt)},setFunc:function(mt,Dt,wt){(J!==mt||pe!==Dt||we!==wt)&&(s.stencilFunc(mt,Dt,wt),J=mt,pe=Dt,we=wt)},setOp:function(mt,Dt,wt){(it!==mt||ot!==Dt||Ct!==wt)&&(s.stencilOp(mt,Dt,wt),it=mt,ot=Dt,Ct=wt)},setLocked:function(mt){E=mt},setClear:function(mt){Bt!==mt&&(s.clearStencil(mt),Bt=mt)},reset:function(){E=!1,j=null,J=null,pe=null,we=null,it=null,ot=null,Ct=null,Bt=null}}}const o=new e,l=new t,u=new i,d=new WeakMap,f=new WeakMap;let p={},m={},_=new WeakMap,g=[],S=null,M=!1,T=null,x=null,y=null,D=null,R=null,L=null,V=null,F=new Et(0,0,0),U=0,ee=!1,I=null,A=null,q=null,le=null,G=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,he=0;const ue=s.getParameter(s.VERSION);ue.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ae=he>=1):ue.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ae=he>=2);let z=null,re={};const P=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),Se=new an().fromArray(P),Ue=new an().fromArray($);function Y(E,j,J,pe){const we=new Uint8Array(4),it=s.createTexture();s.bindTexture(E,it),s.texParameteri(E,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(E,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<J;ot++)E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(j+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return it}const fe={};fe[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Me(s.DEPTH_TEST),l.setFunc(kl),lt(!1),et(Fp),Me(s.CULL_FACE),vt(gr);function Me(E){p[E]!==!0&&(s.enable(E),p[E]=!0)}function me(E){p[E]!==!1&&(s.disable(E),p[E]=!1)}function Ne(E,j){return m[E]!==j?(s.bindFramebuffer(E,j),m[E]=j,E===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=j),E===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=j),!0):!1}function je(E,j){let J=g,pe=!1;if(E){J=_.get(j),J===void 0&&(J=[],_.set(j,J));const we=E.textures;if(J.length!==we.length||J[0]!==s.COLOR_ATTACHMENT0){for(let it=0,ot=we.length;it<ot;it++)J[it]=s.COLOR_ATTACHMENT0+it;J.length=we.length,pe=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,pe=!0);pe&&s.drawBuffers(J)}function K(E){return S!==E?(s.useProgram(E),S=E,!0):!1}const gt={[Xr]:s.FUNC_ADD,[Ix]:s.FUNC_SUBTRACT,[Ux]:s.FUNC_REVERSE_SUBTRACT};gt[Ox]=s.MIN,gt[Fx]=s.MAX;const We={[kx]:s.ZERO,[zx]:s.ONE,[Bx]:s.SRC_COLOR,[Pd]:s.SRC_ALPHA,[Xx]:s.SRC_ALPHA_SATURATE,[jx]:s.DST_COLOR,[Vx]:s.DST_ALPHA,[Hx]:s.ONE_MINUS_SRC_COLOR,[Ld]:s.ONE_MINUS_SRC_ALPHA,[Wx]:s.ONE_MINUS_DST_COLOR,[Gx]:s.ONE_MINUS_DST_ALPHA,[$x]:s.CONSTANT_COLOR,[qx]:s.ONE_MINUS_CONSTANT_COLOR,[Yx]:s.CONSTANT_ALPHA,[Kx]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(E,j,J,pe,we,it,ot,Ct,Bt,mt){if(E===gr){M===!0&&(me(s.BLEND),M=!1);return}if(M===!1&&(Me(s.BLEND),M=!0),E!==Dx){if(E!==T||mt!==ee){if((x!==Xr||R!==Xr)&&(s.blendEquation(s.FUNC_ADD),x=Xr,R=Xr),mt)switch(E){case $s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kp:s.blendFunc(s.ONE,s.ONE);break;case zp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case $s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case zp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}y=null,D=null,L=null,V=null,F.set(0,0,0),U=0,T=E,ee=mt}return}we=we||j,it=it||J,ot=ot||pe,(j!==x||we!==R)&&(s.blendEquationSeparate(gt[j],gt[we]),x=j,R=we),(J!==y||pe!==D||it!==L||ot!==V)&&(s.blendFuncSeparate(We[J],We[pe],We[it],We[ot]),y=J,D=pe,L=it,V=ot),(Ct.equals(F)===!1||Bt!==U)&&(s.blendColor(Ct.r,Ct.g,Ct.b,Bt),F.copy(Ct),U=Bt),T=E,ee=!1}function Xe(E,j){E.side===Fi?me(s.CULL_FACE):Me(s.CULL_FACE);let J=E.side===Ln;j&&(J=!J),lt(J),E.blending===$s&&E.transparent===!1?vt(gr):vt(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),l.setFunc(E.depthFunc),l.setTest(E.depthTest),l.setMask(E.depthWrite),o.setMask(E.colorWrite);const pe=E.stencilWrite;u.setTest(pe),pe&&(u.setMask(E.stencilWriteMask),u.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),u.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),At(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):me(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(E){I!==E&&(E?s.frontFace(s.CW):s.frontFace(s.CCW),I=E)}function et(E){E!==Px?(Me(s.CULL_FACE),E!==A&&(E===Fp?s.cullFace(s.BACK):E===Lx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):me(s.CULL_FACE),A=E}function ct(E){E!==q&&(ae&&s.lineWidth(E),q=E)}function At(E,j,J){E?(Me(s.POLYGON_OFFSET_FILL),(le!==j||G!==J)&&(s.polygonOffset(j,J),le=j,G=J)):me(s.POLYGON_OFFSET_FILL)}function k(E){E?Me(s.SCISSOR_TEST):me(s.SCISSOR_TEST)}function C(E){E===void 0&&(E=s.TEXTURE0+ce-1),z!==E&&(s.activeTexture(E),z=E)}function se(E,j,J){J===void 0&&(z===null?J=s.TEXTURE0+ce-1:J=z);let pe=re[J];pe===void 0&&(pe={type:void 0,texture:void 0},re[J]=pe),(pe.type!==E||pe.texture!==j)&&(z!==J&&(s.activeTexture(J),z=J),s.bindTexture(E,j||fe[E]),pe.type=E,pe.texture=j)}function de(){const E=re[z];E!==void 0&&E.type!==void 0&&(s.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ge(){try{s.texSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ae(){try{s.texStorage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Be(){try{s.texStorage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function st(){try{s.texImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function De(E){Se.equals(E)===!1&&(s.scissor(E.x,E.y,E.z,E.w),Se.copy(E))}function tt(E){Ue.equals(E)===!1&&(s.viewport(E.x,E.y,E.z,E.w),Ue.copy(E))}function ut(E,j){let J=f.get(j);J===void 0&&(J=new WeakMap,f.set(j,J));let pe=J.get(E);pe===void 0&&(pe=s.getUniformBlockIndex(j,E.name),J.set(E,pe))}function yt(E,j){const pe=f.get(j).get(E);d.get(j)!==pe&&(s.uniformBlockBinding(j,pe,E.__bindingPointIndex),d.set(j,pe))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},z=null,re={},m={},_=new WeakMap,g=[],S=null,M=!1,T=null,x=null,y=null,D=null,R=null,L=null,V=null,F=new Et(0,0,0),U=0,ee=!1,I=null,A=null,q=null,le=null,G=null,Se.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Me,disable:me,bindFramebuffer:Ne,drawBuffers:je,useProgram:K,setBlending:vt,setMaterial:Xe,setFlipSided:lt,setCullFace:et,setLineWidth:ct,setPolygonOffset:At,setScissorTest:k,activeTexture:C,bindTexture:se,unbindTexture:de,compressedTexImage2D:_e,compressedTexImage3D:xe,texImage2D:st,texImage3D:$e,updateUBOMapping:ut,uniformBlockBinding:yt,texStorage2D:Ae,texStorage3D:Be,texSubImage2D:Ge,texSubImage3D:Re,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ze,scissor:De,viewport:tt,reset:nt}}function Kw(s,e,t,i,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new at,m=new WeakMap;let _;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(k,C){return S?new OffscreenCanvas(k,C):ea("canvas")}function T(k,C,se){let de=1;const _e=At(k);if((_e.width>se||_e.height>se)&&(de=se/Math.max(_e.width,_e.height)),de<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const xe=Math.floor(de*_e.width),Ge=Math.floor(de*_e.height);_===void 0&&(_=M(xe,Ge));const Re=C?M(xe,Ge):_;return Re.width=xe,Re.height=Ge,Re.getContext("2d").drawImage(k,0,0,xe,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+xe+"x"+Ge+")."),Re}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),k;return k}function x(k){return k.generateMipmaps&&k.minFilter!==qn&&k.minFilter!==ai}function y(k){s.generateMipmap(k)}function D(k,C,se,de,_e=!1){if(k!==null){if(s[k]!==void 0)return s[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let xe=C;if(C===s.RED&&(se===s.FLOAT&&(xe=s.R32F),se===s.HALF_FLOAT&&(xe=s.R16F),se===s.UNSIGNED_BYTE&&(xe=s.R8)),C===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.R8UI),se===s.UNSIGNED_SHORT&&(xe=s.R16UI),se===s.UNSIGNED_INT&&(xe=s.R32UI),se===s.BYTE&&(xe=s.R8I),se===s.SHORT&&(xe=s.R16I),se===s.INT&&(xe=s.R32I)),C===s.RG&&(se===s.FLOAT&&(xe=s.RG32F),se===s.HALF_FLOAT&&(xe=s.RG16F),se===s.UNSIGNED_BYTE&&(xe=s.RG8)),C===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(xe=s.RG8UI),se===s.UNSIGNED_SHORT&&(xe=s.RG16UI),se===s.UNSIGNED_INT&&(xe=s.RG32UI),se===s.BYTE&&(xe=s.RG8I),se===s.SHORT&&(xe=s.RG16I),se===s.INT&&(xe=s.RG32I)),C===s.RGB&&se===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),C===s.RGBA){const Ge=_e?zl:Tt.getTransfer(de);se===s.FLOAT&&(xe=s.RGBA32F),se===s.HALF_FLOAT&&(xe=s.RGBA16F),se===s.UNSIGNED_BYTE&&(xe=Ge===Nt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function R(k,C){return x(k)===!0||k.isFramebufferTexture&&k.minFilter!==qn&&k.minFilter!==ai?Math.log2(Math.max(C.width,C.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?C.mipmaps.length:1}function L(k){const C=k.target;C.removeEventListener("dispose",L),F(C),C.isVideoTexture&&m.delete(C)}function V(k){const C=k.target;C.removeEventListener("dispose",V),ee(C)}function F(k){const C=i.get(k);if(C.__webglInit===void 0)return;const se=k.source,de=g.get(se);if(de){const _e=de[C.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&U(k),Object.keys(de).length===0&&g.delete(se)}i.remove(k)}function U(k){const C=i.get(k);s.deleteTexture(C.__webglTexture);const se=k.source,de=g.get(se);delete de[C.__cacheKey],u.memory.textures--}function ee(k){const C=i.get(k);if(k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(C.__webglFramebuffer[de]))for(let _e=0;_e<C.__webglFramebuffer[de].length;_e++)s.deleteFramebuffer(C.__webglFramebuffer[de][_e]);else s.deleteFramebuffer(C.__webglFramebuffer[de]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[de])}else{if(Array.isArray(C.__webglFramebuffer))for(let de=0;de<C.__webglFramebuffer.length;de++)s.deleteFramebuffer(C.__webglFramebuffer[de]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let de=0;de<C.__webglColorRenderbuffer.length;de++)C.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[de]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const se=k.textures;for(let de=0,_e=se.length;de<_e;de++){const xe=i.get(se[de]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),u.memory.textures--),i.remove(se[de])}i.remove(k)}let I=0;function A(){I=0}function q(){const k=I;return k>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+o.maxTextures),I+=1,k}function le(k){const C=[];return C.push(k.wrapS),C.push(k.wrapT),C.push(k.wrapR||0),C.push(k.magFilter),C.push(k.minFilter),C.push(k.anisotropy),C.push(k.internalFormat),C.push(k.format),C.push(k.type),C.push(k.generateMipmaps),C.push(k.premultiplyAlpha),C.push(k.flipY),C.push(k.unpackAlignment),C.push(k.colorSpace),C.join()}function G(k,C){const se=i.get(k);if(k.isVideoTexture&&et(k),k.isRenderTargetTexture===!1&&k.version>0&&se.__version!==k.version){const de=k.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(se,k,C);return}}t.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+C)}function ce(k,C){const se=i.get(k);if(k.version>0&&se.__version!==k.version){Se(se,k,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+C)}function ae(k,C){const se=i.get(k);if(k.version>0&&se.__version!==k.version){Se(se,k,C);return}t.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+C)}function he(k,C){const se=i.get(k);if(k.version>0&&se.__version!==k.version){Ue(se,k,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+C)}const ue={[Id]:s.REPEAT,[qr]:s.CLAMP_TO_EDGE,[Ud]:s.MIRRORED_REPEAT},z={[qn]:s.NEAREST,[hy]:s.NEAREST_MIPMAP_NEAREST,[cl]:s.NEAREST_MIPMAP_LINEAR,[ai]:s.LINEAR,[Wu]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},re={[Ry]:s.NEVER,[Iy]:s.ALWAYS,[by]:s.LESS,[Xg]:s.LEQUAL,[Py]:s.EQUAL,[Dy]:s.GEQUAL,[Ly]:s.GREATER,[Ny]:s.NOTEQUAL};function P(k,C){if(C.type===pr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===ai||C.magFilter===Wu||C.magFilter===cl||C.magFilter===Yr||C.minFilter===ai||C.minFilter===Wu||C.minFilter===cl||C.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(k,s.TEXTURE_WRAP_S,ue[C.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,ue[C.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,ue[C.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,z[C.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,z[C.minFilter]),C.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,re[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===qn||C.minFilter!==cl&&C.minFilter!==Yr||C.type===pr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(k,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function $(k,C){let se=!1;k.__webglInit===void 0&&(k.__webglInit=!0,C.addEventListener("dispose",L));const de=C.source;let _e=g.get(de);_e===void 0&&(_e={},g.set(de,_e));const xe=le(C);if(xe!==k.__cacheKey){_e[xe]===void 0&&(_e[xe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,se=!0),_e[xe].usedTimes++;const Ge=_e[k.__cacheKey];Ge!==void 0&&(_e[k.__cacheKey].usedTimes--,Ge.usedTimes===0&&U(C)),k.__cacheKey=xe,k.__webglTexture=_e[xe].texture}return se}function Se(k,C,se){let de=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(de=s.TEXTURE_3D);const _e=$(k,C),xe=C.source;t.bindTexture(de,k.__webglTexture,s.TEXTURE0+se);const Ge=i.get(xe);if(xe.version!==Ge.__version||_e===!0){t.activeTexture(s.TEXTURE0+se);const Re=Tt.getPrimaries(Tt.workingColorSpace),Ce=C.colorSpace===fr?null:Tt.getPrimaries(C.colorSpace),Ze=C.colorSpace===fr||Re===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Ae=T(C.image,!1,o.maxTextureSize);Ae=ct(C,Ae);const Be=l.convert(C.format,C.colorSpace),st=l.convert(C.type);let $e=D(C.internalFormat,Be,st,C.colorSpace,C.isVideoTexture);P(de,C);let De;const tt=C.mipmaps,ut=C.isVideoTexture!==!0,yt=Ge.__version===void 0||_e===!0,nt=xe.dataReady,E=R(C,Ae);if(C.isDepthTexture)$e=s.DEPTH_COMPONENT16,C.type===pr?$e=s.DEPTH_COMPONENT32F:C.type===Qs?$e=s.DEPTH_COMPONENT24:C.type===ra&&($e=s.DEPTH24_STENCIL8),yt&&(ut?t.texStorage2D(s.TEXTURE_2D,1,$e,Ae.width,Ae.height):t.texImage2D(s.TEXTURE_2D,0,$e,Ae.width,Ae.height,0,Be,st,null));else if(C.isDataTexture)if(tt.length>0){ut&&yt&&t.texStorage2D(s.TEXTURE_2D,E,$e,tt[0].width,tt[0].height);for(let j=0,J=tt.length;j<J;j++)De=tt[j],ut?nt&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,De.width,De.height,Be,st,De.data):t.texImage2D(s.TEXTURE_2D,j,$e,De.width,De.height,0,Be,st,De.data);C.generateMipmaps=!1}else ut?(yt&&t.texStorage2D(s.TEXTURE_2D,E,$e,Ae.width,Ae.height),nt&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Be,st,Ae.data)):t.texImage2D(s.TEXTURE_2D,0,$e,Ae.width,Ae.height,0,Be,st,Ae.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ut&&yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,E,$e,tt[0].width,tt[0].height,Ae.depth);for(let j=0,J=tt.length;j<J;j++)De=tt[j],C.format!==gi?Be!==null?ut?nt&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,De.width,De.height,Ae.depth,Be,De.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,$e,De.width,De.height,Ae.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?nt&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,De.width,De.height,Ae.depth,Be,st,De.data):t.texImage3D(s.TEXTURE_2D_ARRAY,j,$e,De.width,De.height,Ae.depth,0,Be,st,De.data)}else{ut&&yt&&t.texStorage2D(s.TEXTURE_2D,E,$e,tt[0].width,tt[0].height);for(let j=0,J=tt.length;j<J;j++)De=tt[j],C.format!==gi?Be!==null?ut?nt&&t.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,De.width,De.height,Be,De.data):t.compressedTexImage2D(s.TEXTURE_2D,j,$e,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?nt&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,De.width,De.height,Be,st,De.data):t.texImage2D(s.TEXTURE_2D,j,$e,De.width,De.height,0,Be,st,De.data)}else if(C.isDataArrayTexture)ut?(yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,E,$e,Ae.width,Ae.height,Ae.depth),nt&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Be,st,Ae.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,$e,Ae.width,Ae.height,Ae.depth,0,Be,st,Ae.data);else if(C.isData3DTexture)ut?(yt&&t.texStorage3D(s.TEXTURE_3D,E,$e,Ae.width,Ae.height,Ae.depth),nt&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Be,st,Ae.data)):t.texImage3D(s.TEXTURE_3D,0,$e,Ae.width,Ae.height,Ae.depth,0,Be,st,Ae.data);else if(C.isFramebufferTexture){if(yt)if(ut)t.texStorage2D(s.TEXTURE_2D,E,$e,Ae.width,Ae.height);else{let j=Ae.width,J=Ae.height;for(let pe=0;pe<E;pe++)t.texImage2D(s.TEXTURE_2D,pe,$e,j,J,0,Be,st,null),j>>=1,J>>=1}}else if(tt.length>0){if(ut&&yt){const j=At(tt[0]);t.texStorage2D(s.TEXTURE_2D,E,$e,j.width,j.height)}for(let j=0,J=tt.length;j<J;j++)De=tt[j],ut?nt&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,Be,st,De):t.texImage2D(s.TEXTURE_2D,j,$e,Be,st,De);C.generateMipmaps=!1}else if(ut){if(yt){const j=At(Ae);t.texStorage2D(s.TEXTURE_2D,E,$e,j.width,j.height)}nt&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,st,Ae)}else t.texImage2D(s.TEXTURE_2D,0,$e,Be,st,Ae);x(C)&&y(de),Ge.__version=xe.version,C.onUpdate&&C.onUpdate(C)}k.__version=C.version}function Ue(k,C,se){if(C.image.length!==6)return;const de=$(k,C),_e=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+se);const xe=i.get(_e);if(_e.version!==xe.__version||de===!0){t.activeTexture(s.TEXTURE0+se);const Ge=Tt.getPrimaries(Tt.workingColorSpace),Re=C.colorSpace===fr?null:Tt.getPrimaries(C.colorSpace),Ce=C.colorSpace===fr||Ge===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ze=C.isCompressedTexture||C.image[0].isCompressedTexture,Ae=C.image[0]&&C.image[0].isDataTexture,Be=[];for(let J=0;J<6;J++)!Ze&&!Ae?Be[J]=T(C.image[J],!0,o.maxCubemapSize):Be[J]=Ae?C.image[J].image:C.image[J],Be[J]=ct(C,Be[J]);const st=Be[0],$e=l.convert(C.format,C.colorSpace),De=l.convert(C.type),tt=D(C.internalFormat,$e,De,C.colorSpace),ut=C.isVideoTexture!==!0,yt=xe.__version===void 0||de===!0,nt=_e.dataReady;let E=R(C,st);P(s.TEXTURE_CUBE_MAP,C);let j;if(Ze){ut&&yt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,E,tt,st.width,st.height);for(let J=0;J<6;J++){j=Be[J].mipmaps;for(let pe=0;pe<j.length;pe++){const we=j[pe];C.format!==gi?$e!==null?ut?nt&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,we.width,we.height,$e,we.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,tt,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?nt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,we.width,we.height,$e,De,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,tt,we.width,we.height,0,$e,De,we.data)}}}else{if(j=C.mipmaps,ut&&yt){j.length>0&&E++;const J=At(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,E,tt,J.width,J.height)}for(let J=0;J<6;J++)if(Ae){ut?nt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Be[J].width,Be[J].height,$e,De,Be[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,tt,Be[J].width,Be[J].height,0,$e,De,Be[J].data);for(let pe=0;pe<j.length;pe++){const it=j[pe].image[J].image;ut?nt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,it.width,it.height,$e,De,it.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,tt,it.width,it.height,0,$e,De,it.data)}}else{ut?nt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,$e,De,Be[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,tt,$e,De,Be[J]);for(let pe=0;pe<j.length;pe++){const we=j[pe];ut?nt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,$e,De,we.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,tt,$e,De,we.image[J])}}}x(C)&&y(s.TEXTURE_CUBE_MAP),xe.__version=_e.version,C.onUpdate&&C.onUpdate(C)}k.__version=C.version}function Y(k,C,se,de,_e,xe){const Ge=l.convert(se.format,se.colorSpace),Re=l.convert(se.type),Ce=D(se.internalFormat,Ge,Re,se.colorSpace);if(!i.get(C).__hasExternalTextures){const Ae=Math.max(1,C.width>>xe),Be=Math.max(1,C.height>>xe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,xe,Ce,Ae,Be,C.depth,0,Ge,Re,null):t.texImage2D(_e,xe,Ce,Ae,Be,0,Ge,Re,null)}t.bindFramebuffer(s.FRAMEBUFFER,k),lt(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,_e,i.get(se).__webglTexture,0,Xe(C)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,_e,i.get(se).__webglTexture,xe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(k,C,se){if(s.bindRenderbuffer(s.RENDERBUFFER,k),C.depthBuffer&&!C.stencilBuffer){let de=s.DEPTH_COMPONENT24;if(se||lt(C)){const _e=C.depthTexture;_e&&_e.isDepthTexture&&(_e.type===pr?de=s.DEPTH_COMPONENT32F:_e.type===Qs&&(de=s.DEPTH_COMPONENT24));const xe=Xe(C);lt(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,de,C.width,C.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,de,C.width,C.height)}else s.renderbufferStorage(s.RENDERBUFFER,de,C.width,C.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,k)}else if(C.depthBuffer&&C.stencilBuffer){const de=Xe(C);se&&lt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,s.DEPTH24_STENCIL8,C.width,C.height):lt(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,s.DEPTH24_STENCIL8,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,k)}else{const de=C.textures;for(let _e=0;_e<de.length;_e++){const xe=de[_e],Ge=l.convert(xe.format,xe.colorSpace),Re=l.convert(xe.type),Ce=D(xe.internalFormat,Ge,Re,xe.colorSpace),Ze=Xe(C);se&&lt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Ce,C.width,C.height):lt(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,Ce,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(k,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),G(C.depthTexture,0);const de=i.get(C.depthTexture).__webglTexture,_e=Xe(C);if(C.depthTexture.format===qs)lt(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(C.depthTexture.format===Jo)lt(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function me(k){const C=i.get(k),se=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!C.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");Me(C.__webglFramebuffer,k)}else if(se){C.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[de]),C.__webglDepthbuffer[de]=s.createRenderbuffer(),fe(C.__webglDepthbuffer[de],k,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),fe(C.__webglDepthbuffer,k,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(k,C,se){const de=i.get(k);C!==void 0&&Y(de.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&me(k)}function je(k){const C=k.texture,se=i.get(k),de=i.get(C);k.addEventListener("dispose",V);const _e=k.textures,xe=k.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=C.version,u.memory.textures++),xe){se.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(C.mipmaps&&C.mipmaps.length>0){se.__webglFramebuffer[Re]=[];for(let Ce=0;Ce<C.mipmaps.length;Ce++)se.__webglFramebuffer[Re][Ce]=s.createFramebuffer()}else se.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){se.__webglFramebuffer=[];for(let Re=0;Re<C.mipmaps.length;Re++)se.__webglFramebuffer[Re]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Re=0,Ce=_e.length;Re<Ce;Re++){const Ze=i.get(_e[Re]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),u.memory.textures++)}if(k.samples>0&&lt(k)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){const Ce=_e[Re];se.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[Re]);const Ze=l.convert(Ce.format,Ce.colorSpace),Ae=l.convert(Ce.type),Be=D(Ce.internalFormat,Ze,Ae,Ce.colorSpace,k.isXRRenderTarget===!0),st=Xe(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,st,Be,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,se.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(se.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),P(s.TEXTURE_CUBE_MAP,C);for(let Re=0;Re<6;Re++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ce=0;Ce<C.mipmaps.length;Ce++)Y(se.__webglFramebuffer[Re][Ce],k,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce);else Y(se.__webglFramebuffer[Re],k,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(C)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Re=0,Ce=_e.length;Re<Ce;Re++){const Ze=_e[Re],Ae=i.get(Ze);t.bindTexture(s.TEXTURE_2D,Ae.__webglTexture),P(s.TEXTURE_2D,Ze),Y(se.__webglFramebuffer,k,Ze,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),x(Ze)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let Re=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Re=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,de.__webglTexture),P(Re,C),C.mipmaps&&C.mipmaps.length>0)for(let Ce=0;Ce<C.mipmaps.length;Ce++)Y(se.__webglFramebuffer[Ce],k,C,s.COLOR_ATTACHMENT0,Re,Ce);else Y(se.__webglFramebuffer,k,C,s.COLOR_ATTACHMENT0,Re,0);x(C)&&y(Re),t.unbindTexture()}k.depthBuffer&&me(k)}function K(k){const C=k.textures;for(let se=0,de=C.length;se<de;se++){const _e=C[se];if(x(_e)){const xe=k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ge=i.get(_e).__webglTexture;t.bindTexture(xe,Ge),y(xe),t.unbindTexture()}}}const gt=[],We=[];function vt(k){if(k.samples>0){if(lt(k)===!1){const C=k.textures,se=k.width,de=k.height;let _e=s.COLOR_BUFFER_BIT;const xe=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=i.get(k),Re=C.length>1;if(Re)for(let Ce=0;Ce<C.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ce=0;Ce<C.length;Ce++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ce]);const Ze=i.get(C[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,se,de,0,0,se,de,_e,s.NEAREST),f===!0&&(gt.length=0,We.length=0,gt.push(s.COLOR_ATTACHMENT0+Ce),k.depthBuffer&&k.resolveDepthBuffer===!1&&(gt.push(xe),We.push(xe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,We)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Ce=0;Ce<C.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ce]);const Ze=i.get(C[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&f){const C=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Xe(k){return Math.min(o.maxSamples,k.samples)}function lt(k){const C=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function et(k){const C=u.render.frame;m.get(k)!==C&&(m.set(k,C),k.update())}function ct(k,C){const se=k.colorSpace,de=k.format,_e=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||se!==Mr&&se!==fr&&(Tt.getTransfer(se)===Nt?(de!==gi||_e!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),C}function At(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(p.width=k.naturalWidth||k.width,p.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(p.width=k.displayWidth,p.height=k.displayHeight):(p.width=k.width,p.height=k.height),p}this.allocateTextureUnit=q,this.resetTextureUnits=A,this.setTexture2D=G,this.setTexture2DArray=ce,this.setTexture3D=ae,this.setTextureCube=he,this.rebindTextures=Ne,this.setupRenderTarget=je,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=lt}function Zw(s,e){function t(i,o=fr){let l;const u=Tt.getTransfer(o);if(i===xr)return s.UNSIGNED_BYTE;if(i===Hg)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Vg)return s.UNSIGNED_SHORT_5_5_5_1;if(i===gy)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===py)return s.BYTE;if(i===my)return s.SHORT;if(i===zg)return s.UNSIGNED_SHORT;if(i===Bg)return s.INT;if(i===Qs)return s.UNSIGNED_INT;if(i===pr)return s.FLOAT;if(i===Zl)return s.HALF_FLOAT;if(i===vy)return s.ALPHA;if(i===_y)return s.RGB;if(i===gi)return s.RGBA;if(i===xy)return s.LUMINANCE;if(i===yy)return s.LUMINANCE_ALPHA;if(i===qs)return s.DEPTH_COMPONENT;if(i===Jo)return s.DEPTH_STENCIL;if(i===Sy)return s.RED;if(i===Gg)return s.RED_INTEGER;if(i===My)return s.RG;if(i===jg)return s.RG_INTEGER;if(i===Wg)return s.RGBA_INTEGER;if(i===Xu||i===$u||i===qu||i===Yu)if(u===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===Xu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$u)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===Xu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$u)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hp||i===Vp||i===Gp||i===jp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Hp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wp||i===Xp||i===$p)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===Wp||i===Xp)return u===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===$p)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qp||i===Yp||i===Kp||i===Zp||i===Jp||i===Qp||i===em||i===tm||i===nm||i===im||i===rm||i===sm||i===om||i===am)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===qp)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yp)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kp)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zp)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jp)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qp)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===em)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tm)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nm)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===im)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rm)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sm)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===om)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===am)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ku||i===lm||i===cm)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===Ku)return u===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ey||i===um||i===dm||i===fm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===Ku)return l.COMPRESSED_RED_RGTC1_EXT;if(i===um)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ra?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class Jw extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ll extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qw={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const x=t.getJointPose(T,i),y=this._getHandJoint(p,T);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const m=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=m.position.distanceTo(_.position),S=.02,M=.005;p.inputState.pinching&&g>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Qw)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ll;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const eT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tT=`
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

}`;class nT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new Mn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,o=new yr({vertexShader:eT,fragmentShader:tT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new ec(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class iT extends Qr{constructor(e,t){super();const i=this;let o=null,l=1,u=null,d="local-floor",f=1,p=null,m=null,_=null,g=null,S=null,M=null;const T=new nT,x=t.getContextAttributes();let y=null,D=null;const R=[],L=[],V=new at;let F=null;const U=new $n;U.layers.enable(1),U.viewport=new an;const ee=new $n;ee.layers.enable(2),ee.viewport=new an;const I=[U,ee],A=new Jw;A.layers.enable(1),A.layers.enable(2);let q=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let fe=R[Y];return fe===void 0&&(fe=new Sd,R[Y]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Y){let fe=R[Y];return fe===void 0&&(fe=new Sd,R[Y]=fe),fe.getGripSpace()},this.getHand=function(Y){let fe=R[Y];return fe===void 0&&(fe=new Sd,R[Y]=fe),fe.getHandSpace()};function G(Y){const fe=L.indexOf(Y.inputSource);if(fe===-1)return;const Me=R[fe];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,p||u),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ce(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",ae);for(let Y=0;Y<R.length;Y++){const fe=L[Y];fe!==null&&(L[Y]=null,R[Y].disconnect(fe))}q=null,le=null,T.reset(),e.setRenderTarget(y),S=null,g=null,_=null,o=null,D=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",ae),x.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(V),o.renderState.layers===void 0){const fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Kr(S.framebufferWidth,S.framebufferHeight,{format:gi,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let fe=null,Me=null,me=null;x.depth&&(me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?Jo:qs,Me=x.stencil?ra:Qs);const Ne={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:l};_=new XRWebGLBinding(o,t),g=_.createProjectionLayer(Ne),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new Kr(g.textureWidth,g.textureHeight,{format:gi,type:xr,depthTexture:new ov(g.textureWidth,g.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(d),Ue.setContext(o),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function ae(Y){for(let fe=0;fe<Y.removed.length;fe++){const Me=Y.removed[fe],me=L.indexOf(Me);me>=0&&(L[me]=null,R[me].disconnect(Me))}for(let fe=0;fe<Y.added.length;fe++){const Me=Y.added[fe];let me=L.indexOf(Me);if(me===-1){for(let je=0;je<R.length;je++)if(je>=L.length){L.push(Me),me=je;break}else if(L[je]===null){L[je]=Me,me=je;break}if(me===-1)break}const Ne=R[me];Ne&&Ne.connect(Me)}}const he=new Q,ue=new Q;function z(Y,fe,Me){he.setFromMatrixPosition(fe.matrixWorld),ue.setFromMatrixPosition(Me.matrixWorld);const me=he.distanceTo(ue),Ne=fe.projectionMatrix.elements,je=Me.projectionMatrix.elements,K=Ne[14]/(Ne[10]-1),gt=Ne[14]/(Ne[10]+1),We=(Ne[9]+1)/Ne[5],vt=(Ne[9]-1)/Ne[5],Xe=(Ne[8]-1)/Ne[0],lt=(je[8]+1)/je[0],et=K*Xe,ct=K*lt,At=me/(-Xe+lt),k=At*-Xe;fe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(k),Y.translateZ(At),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const C=K+At,se=gt+At,de=et-k,_e=ct+(me-k),xe=We*gt/se*C,Ge=vt*gt/se*C;Y.projectionMatrix.makePerspective(de,_e,xe,Ge,C,se),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function re(Y,fe){fe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(fe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;T.texture!==null&&(Y.near=T.depthNear,Y.far=T.depthFar),A.near=ee.near=U.near=Y.near,A.far=ee.far=U.far=Y.far,(q!==A.near||le!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),q=A.near,le=A.far,U.near=q,U.far=le,ee.near=q,ee.far=le,U.updateProjectionMatrix(),ee.updateProjectionMatrix(),Y.updateProjectionMatrix());const fe=Y.parent,Me=A.cameras;re(A,fe);for(let me=0;me<Me.length;me++)re(Me[me],fe);Me.length===2?z(A,U,ee):A.projectionMatrix.copy(U.projectionMatrix),P(Y,A,fe)};function P(Y,fe,Me){Me===null?Y.matrix.copy(fe.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(fe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(g===null&&S===null))return f},this.setFoveation=function(Y){f=Y,g!==null&&(g.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return T.texture!==null};let $=null;function Se(Y,fe){if(m=fe.getViewerPose(p||u),M=fe,m!==null){const Me=m.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let me=!1;Me.length!==A.cameras.length&&(A.cameras.length=0,me=!0);for(let je=0;je<Me.length;je++){const K=Me[je];let gt=null;if(S!==null)gt=S.getViewport(K);else{const vt=_.getViewSubImage(g,K);gt=vt.viewport,je===0&&(e.setRenderTargetTextures(D,vt.colorTexture,g.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(D))}let We=I[je];We===void 0&&(We=new $n,We.layers.enable(je),We.viewport=new an,I[je]=We),We.matrix.fromArray(K.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(K.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(gt.x,gt.y,gt.width,gt.height),je===0&&(A.matrix.copy(We.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),me===!0&&A.cameras.push(We)}const Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const je=_.getDepthInformation(Me[0]);je&&je.isValid&&je.texture&&T.init(e,je,o.renderState)}}for(let Me=0;Me<R.length;Me++){const me=L[Me],Ne=R[Me];me!==null&&Ne!==void 0&&Ne.update(me,fe,p||u)}T.render(e,A),$&&$(Y,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Ue=new sv;Ue.setAnimationLoop(Se),this.setAnimationLoop=function(Y){$=Y},this.dispose=function(){}}}const Gr=new zi,rT=new Yt;function sT(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function i(x,y){y.color.getRGB(x.fogColor.value,tv(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,D,R,L){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),_(x,y)):y.isMeshPhongMaterial?(l(x,y),m(x,y)):y.isMeshStandardMaterial?(l(x,y),g(x,y),y.isMeshPhysicalMaterial&&S(x,y,L)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),T(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&d(x,y)):y.isPointsMaterial?f(x,y,D,R):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Ln&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Ln&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const D=e.get(y),R=D.envMap,L=D.envMapRotation;if(R&&(x.envMap.value=R,Gr.copy(L),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),x.envMapRotation.value.setFromMatrix4(rT.makeRotationFromEuler(Gr)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap){x.lightMap.value=y.lightMap;const V=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=y.lightMapIntensity*V,t(y.lightMap,x.lightMapTransform)}y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function d(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function f(x,y,D,R){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*D,x.scale.value=R*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,D){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Ln&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function T(x,y){const D=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function oT(s,e,t,i){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(D,R){const L=R.program;i.uniformBlockBinding(D,L)}function p(D,R){let L=o[D.id];L===void 0&&(M(D),L=m(D),o[D.id]=L,D.addEventListener("dispose",x));const V=R.program;i.updateUBOMapping(D,V);const F=e.render.frame;l[D.id]!==F&&(g(D),l[D.id]=F)}function m(D){const R=_();D.__bindingPointIndex=R;const L=s.createBuffer(),V=D.__size,F=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,V,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,L),L}function _(){for(let D=0;D<d;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const R=o[D.id],L=D.uniforms,V=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let F=0,U=L.length;F<U;F++){const ee=Array.isArray(L[F])?L[F]:[L[F]];for(let I=0,A=ee.length;I<A;I++){const q=ee[I];if(S(q,F,I,V)===!0){const le=q.__offset,G=Array.isArray(q.value)?q.value:[q.value];let ce=0;for(let ae=0;ae<G.length;ae++){const he=G[ae],ue=T(he);typeof he=="number"||typeof he=="boolean"?(q.__data[0]=he,s.bufferSubData(s.UNIFORM_BUFFER,le+ce,q.__data)):he.isMatrix3?(q.__data[0]=he.elements[0],q.__data[1]=he.elements[1],q.__data[2]=he.elements[2],q.__data[3]=0,q.__data[4]=he.elements[3],q.__data[5]=he.elements[4],q.__data[6]=he.elements[5],q.__data[7]=0,q.__data[8]=he.elements[6],q.__data[9]=he.elements[7],q.__data[10]=he.elements[8],q.__data[11]=0):(he.toArray(q.__data,ce),ce+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,q.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,R,L,V){const F=D.value,U=R+"_"+L;if(V[U]===void 0)return typeof F=="number"||typeof F=="boolean"?V[U]=F:V[U]=F.clone(),!0;{const ee=V[U];if(typeof F=="number"||typeof F=="boolean"){if(ee!==F)return V[U]=F,!0}else if(ee.equals(F)===!1)return ee.copy(F),!0}return!1}function M(D){const R=D.uniforms;let L=0;const V=16;for(let U=0,ee=R.length;U<ee;U++){const I=Array.isArray(R[U])?R[U]:[R[U]];for(let A=0,q=I.length;A<q;A++){const le=I[A],G=Array.isArray(le.value)?le.value:[le.value];for(let ce=0,ae=G.length;ce<ae;ce++){const he=G[ce],ue=T(he),z=L%V;z!==0&&V-z<ue.boundary&&(L+=V-z),le.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=L,L+=ue.storage}}}const F=L%V;return F>0&&(L+=V-F),D.__size=L,D.__cache={},this}function T(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function x(D){const R=D.target;R.removeEventListener("dispose",x);const L=u.indexOf(R.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function y(){for(const D in o)s.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:f,update:p,dispose:y}}class aT{constructor(e={}){const{canvas:t=Jy(),context:i=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=u;const S=new Uint32Array(4),M=new Int32Array(4);let T=null,x=null;const y=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this._useLegacyLights=!1,this.toneMapping=vr,this.toneMappingExposure=1;const R=this;let L=!1,V=0,F=0,U=null,ee=-1,I=null;const A=new an,q=new an;let le=null;const G=new Et(0);let ce=0,ae=t.width,he=t.height,ue=1,z=null,re=null;const P=new an(0,0,ae,he),$=new an(0,0,ae,he);let Se=!1;const Ue=new rv;let Y=!1,fe=!1;const Me=new Yt,me=new Q,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return U===null?ue:1}let K=i;function gt(b,W){return t.getContext(b,W)}try{const b={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zd}`),t.addEventListener("webglcontextlost",E,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",J,!1),K===null){const W="webgl2";if(K=gt(W,b),K===null)throw gt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let We,vt,Xe,lt,et,ct,At,k,C,se,de,_e,xe,Ge,Re,Ce,Ze,Ae,Be,st,$e,De,tt,ut;function yt(){We=new m1(K),We.init(),De=new Zw(K,We),vt=new l1(K,We,e,De),Xe=new Yw(K),lt=new _1(K),et=new Uw,ct=new Kw(K,We,Xe,et,vt,De,lt),At=new u1(R),k=new p1(R),C=new wS(K),tt=new o1(K,C),se=new g1(K,C,lt,tt),de=new y1(K,se,C,lt),Be=new x1(K,vt,ct),Ce=new c1(et),_e=new Iw(R,At,k,We,vt,tt,Ce),xe=new sT(R,et),Ge=new Fw,Re=new Gw(We),Ae=new s1(R,At,k,Xe,de,g,f),Ze=new qw(R,de,vt),ut=new oT(K,lt,vt,Xe),st=new a1(K,We,lt),$e=new v1(K,We,lt),lt.programs=_e.programs,R.capabilities=vt,R.extensions=We,R.properties=et,R.renderLists=Ge,R.shadowMap=Ze,R.state=Xe,R.info=lt}yt();const nt=new iT(R,K);this.xr=nt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const b=We.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=We.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(b){b!==void 0&&(ue=b,this.setSize(ae,he,!1))},this.getSize=function(b){return b.set(ae,he)},this.setSize=function(b,W,oe=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=b,he=W,t.width=Math.floor(b*ue),t.height=Math.floor(W*ue),oe===!0&&(t.style.width=b+"px",t.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(ae*ue,he*ue).floor()},this.setDrawingBufferSize=function(b,W,oe){ae=b,he=W,ue=oe,t.width=Math.floor(b*oe),t.height=Math.floor(W*oe),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,W,oe,ne){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,W,oe,ne),Xe.viewport(A.copy(P).multiplyScalar(ue).round())},this.getScissor=function(b){return b.copy($)},this.setScissor=function(b,W,oe,ne){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,W,oe,ne),Xe.scissor(q.copy($).multiplyScalar(ue).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(b){Xe.setScissorTest(Se=b)},this.setOpaqueSort=function(b){z=b},this.setTransparentSort=function(b){re=b},this.getClearColor=function(b){return b.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(b=!0,W=!0,oe=!0){let ne=0;if(b){let te=!1;if(U!==null){const be=U.texture.format;te=be===Wg||be===jg||be===Gg}if(te){const be=U.texture.type,ze=be===xr||be===Qs||be===zg||be===ra||be===Hg||be===Vg,Ve=Ae.getClearColor(),Ke=Ae.getClearAlpha(),rt=Ve.r,Fe=Ve.g,dt=Ve.b;ze?(S[0]=rt,S[1]=Fe,S[2]=dt,S[3]=Ke,K.clearBufferuiv(K.COLOR,0,S)):(M[0]=rt,M[1]=Fe,M[2]=dt,M[3]=Ke,K.clearBufferiv(K.COLOR,0,M))}else ne|=K.COLOR_BUFFER_BIT}W&&(ne|=K.DEPTH_BUFFER_BIT),oe&&(ne|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",E,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Ge.dispose(),Re.dispose(),et.dispose(),At.dispose(),k.dispose(),de.dispose(),tt.dispose(),ut.dispose(),_e.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",mt),nt.removeEventListener("sessionend",Dt),wt.stop()};function E(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=lt.autoReset,W=Ze.enabled,oe=Ze.autoUpdate,ne=Ze.needsUpdate,te=Ze.type;yt(),lt.autoReset=b,Ze.enabled=W,Ze.autoUpdate=oe,Ze.needsUpdate=ne,Ze.type=te}function J(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pe(b){const W=b.target;W.removeEventListener("dispose",pe),we(W)}function we(b){it(b),et.remove(b)}function it(b){const W=et.get(b).programs;W!==void 0&&(W.forEach(function(oe){_e.releaseProgram(oe)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,oe,ne,te,be){W===null&&(W=Ne);const ze=te.isMesh&&te.matrixWorld.determinant()<0,Ve=ic(b,W,oe,ne,te);Xe.setMaterial(ne,ze);let Ke=oe.index,rt=1;if(ne.wireframe===!0){if(Ke=se.getWireframeAttribute(oe),Ke===void 0)return;rt=2}const Fe=oe.drawRange,dt=oe.attributes.position;let It=Fe.start*rt,Wt=(Fe.start+Fe.count)*rt;be!==null&&(It=Math.max(It,be.start*rt),Wt=Math.min(Wt,(be.start+be.count)*rt)),Ke!==null?(It=Math.max(It,0),Wt=Math.min(Wt,Ke.count)):dt!=null&&(It=Math.max(It,0),Wt=Math.min(Wt,dt.count));const Jt=Wt-It;if(Jt<0||Jt===1/0)return;tt.setup(te,ne,Ve,oe,Ke);let Zn,_t=st;if(Ke!==null&&(Zn=C.get(Ke),_t=$e,_t.setIndex(Zn)),te.isMesh)ne.wireframe===!0?(Xe.setLineWidth(ne.wireframeLinewidth*je()),_t.setMode(K.LINES)):_t.setMode(K.TRIANGLES);else if(te.isLine){let Je=ne.linewidth;Je===void 0&&(Je=1),Xe.setLineWidth(Je*je()),te.isLineSegments?_t.setMode(K.LINES):te.isLineLoop?_t.setMode(K.LINE_LOOP):_t.setMode(K.LINE_STRIP)}else te.isPoints?_t.setMode(K.POINTS):te.isSprite&&_t.setMode(K.TRIANGLES);if(te.isBatchedMesh)te._multiDrawInstances!==null?_t.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances):_t.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)_t.renderInstances(It,Jt,te.count);else if(oe.isInstancedBufferGeometry){const Je=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,un=Math.min(oe.instanceCount,Je);_t.renderInstances(It,Jt,un)}else _t.render(It,Jt)};function ot(b,W,oe){b.transparent===!0&&b.side===Fi&&b.forceSinglePass===!1?(b.side=Ln,b.needsUpdate=!0,Si(b,W,oe),b.side=_r,b.needsUpdate=!0,Si(b,W,oe),b.side=Fi):Si(b,W,oe)}this.compile=function(b,W,oe=null){oe===null&&(oe=b),x=Re.get(oe),x.init(W),D.push(x),oe.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(x.pushLight(te),te.castShadow&&x.pushShadow(te))}),b!==oe&&b.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(x.pushLight(te),te.castShadow&&x.pushShadow(te))}),x.setupLights(R._useLegacyLights);const ne=new Set;return b.traverse(function(te){const be=te.material;if(be)if(Array.isArray(be))for(let ze=0;ze<be.length;ze++){const Ve=be[ze];ot(Ve,oe,te),ne.add(Ve)}else ot(be,oe,te),ne.add(be)}),D.pop(),x=null,ne},this.compileAsync=function(b,W,oe=null){const ne=this.compile(b,W,oe);return new Promise(te=>{function be(){if(ne.forEach(function(ze){et.get(ze).currentProgram.isReady()&&ne.delete(ze)}),ne.size===0){te(b);return}setTimeout(be,10)}We.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Ct=null;function Bt(b){Ct&&Ct(b)}function mt(){wt.stop()}function Dt(){wt.start()}const wt=new sv;wt.setAnimationLoop(Bt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(b){Ct=b,nt.setAnimationLoop(b),b===null?wt.stop():wt.start()},nt.addEventListener("sessionstart",mt),nt.addEventListener("sessionend",Dt),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(W),W=nt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,W,U),x=Re.get(b,D.length),x.init(W),D.push(x),Me.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ue.setFromProjectionMatrix(Me),fe=this.localClippingEnabled,Y=Ce.init(this.clippingPlanes,fe),T=Ge.get(b,y.length),T.init(),y.push(T),En(b,W,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(z,re);const oe=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1;oe&&Ae.addToRenderList(T,b),this.info.render.frame++,Y===!0&&Ce.beginShadows();const ne=x.state.shadowsArray;Ze.render(ne,b,W),Y===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=T.opaque,be=T.transmissive;if(x.setupLights(R._useLegacyLights),W.isArrayCamera){const ze=W.cameras;if(be.length>0)for(let Ve=0,Ke=ze.length;Ve<Ke;Ve++){const rt=ze[Ve];wn(te,be,b,rt)}oe&&Ae.render(b);for(let Ve=0,Ke=ze.length;Ve<Ke;Ve++){const rt=ze[Ve];cn(T,b,rt,rt.viewport)}}else be.length>0&&wn(te,be,b,W),oe&&Ae.render(b),cn(T,b,W);U!==null&&(ct.updateMultisampleRenderTarget(U),ct.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(R,b,W),tt.resetDefaultState(),ee=-1,I=null,D.pop(),D.length>0?(x=D[D.length-1],Y===!0&&Ce.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,y.pop(),y.length>0?T=y[y.length-1]:T=null};function En(b,W,oe,ne){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)oe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){ne&&me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me);const ze=de.update(b),Ve=b.material;Ve.visible&&T.push(b,ze,Ve,oe,me.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const ze=de.update(b),Ve=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),me.copy(b.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),me.copy(ze.boundingSphere.center)),me.applyMatrix4(b.matrixWorld).applyMatrix4(Me)),Array.isArray(Ve)){const Ke=ze.groups;for(let rt=0,Fe=Ke.length;rt<Fe;rt++){const dt=Ke[rt],It=Ve[dt.materialIndex];It&&It.visible&&T.push(b,ze,It,oe,me.z,dt)}}else Ve.visible&&T.push(b,ze,Ve,oe,me.z,null)}}const be=b.children;for(let ze=0,Ve=be.length;ze<Ve;ze++)En(be[ze],W,oe,ne)}function cn(b,W,oe,ne){const te=b.opaque,be=b.transmissive,ze=b.transparent;x.setupLightsView(oe),Y===!0&&Ce.setGlobalState(R.clippingPlanes,oe),ne&&Xe.viewport(A.copy(ne)),te.length>0&&Yn(te,W,oe),be.length>0&&Yn(be,W,oe),ze.length>0&&Yn(ze,W,oe),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function wn(b,W,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ne.id]===void 0&&(x.state.transmissionRenderTarget[ne.id]=new Kr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Zl:xr,minFilter:Yr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const be=x.state.transmissionRenderTarget[ne.id],ze=ne.viewport||A;be.setSize(ze.z,ze.w);const Ve=R.getRenderTarget();R.setRenderTarget(be),R.getClearColor(G),ce=R.getClearAlpha(),ce<1&&R.setClearColor(16777215,.5),R.clear();const Ke=R.toneMapping;R.toneMapping=vr;const rt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),x.setupLightsView(ne),Y===!0&&Ce.setGlobalState(R.clippingPlanes,ne),Yn(b,oe,ne),ct.updateMultisampleRenderTarget(be),ct.updateRenderTargetMipmap(be),We.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let dt=0,It=W.length;dt<It;dt++){const Wt=W[dt],Jt=Wt.object,Zn=Wt.geometry,_t=Wt.material,Je=Wt.group;if(_t.side===Fi&&Jt.layers.test(ne.layers)){const un=_t.side;_t.side=Ln,_t.needsUpdate=!0,Kn(Jt,oe,ne,Zn,_t,Je),_t.side=un,_t.needsUpdate=!0,Fe=!0}}Fe===!0&&(ct.updateMultisampleRenderTarget(be),ct.updateRenderTargetMipmap(be))}R.setRenderTarget(Ve),R.setClearColor(G,ce),rt!==void 0&&(ne.viewport=rt),R.toneMapping=Ke}function Yn(b,W,oe){const ne=W.isScene===!0?W.overrideMaterial:null;for(let te=0,be=b.length;te<be;te++){const ze=b[te],Ve=ze.object,Ke=ze.geometry,rt=ne===null?ze.material:ne,Fe=ze.group;Ve.layers.test(oe.layers)&&Kn(Ve,W,oe,Ke,rt,Fe)}}function Kn(b,W,oe,ne,te,be){b.onBeforeRender(R,W,oe,ne,te,be),b.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),te.onBeforeRender(R,W,oe,ne,b,be),te.transparent===!0&&te.side===Fi&&te.forceSinglePass===!1?(te.side=Ln,te.needsUpdate=!0,R.renderBufferDirect(oe,W,ne,te,b,be),te.side=_r,te.needsUpdate=!0,R.renderBufferDirect(oe,W,ne,te,b,be),te.side=Fi):R.renderBufferDirect(oe,W,ne,te,b,be),b.onAfterRender(R,W,oe,ne,te,be)}function Si(b,W,oe){W.isScene!==!0&&(W=Ne);const ne=et.get(b),te=x.state.lights,be=x.state.shadowsArray,ze=te.state.version,Ve=_e.getParameters(b,te.state,be,W,oe),Ke=_e.getProgramCacheKey(Ve);let rt=ne.programs;ne.environment=b.isMeshStandardMaterial?W.environment:null,ne.fog=W.fog,ne.envMap=(b.isMeshStandardMaterial?k:At).get(b.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,rt===void 0&&(b.addEventListener("dispose",pe),rt=new Map,ne.programs=rt);let Fe=rt.get(Ke);if(Fe!==void 0){if(ne.currentProgram===Fe&&ne.lightsStateVersion===ze)return es(b,Ve),Fe}else Ve.uniforms=_e.getUniforms(b),b.onBuild(oe,Ve,R),b.onBeforeCompile(Ve,R),Fe=_e.acquireProgram(Ve,Ke),rt.set(Ke,Fe),ne.uniforms=Ve.uniforms;const dt=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(dt.clippingPlanes=Ce.uniform),es(b,Ve),ne.needsLights=sc(b),ne.lightsStateVersion=ze,ne.needsLights&&(dt.ambientLightColor.value=te.state.ambient,dt.lightProbe.value=te.state.probe,dt.directionalLights.value=te.state.directional,dt.directionalLightShadows.value=te.state.directionalShadow,dt.spotLights.value=te.state.spot,dt.spotLightShadows.value=te.state.spotShadow,dt.rectAreaLights.value=te.state.rectArea,dt.ltc_1.value=te.state.rectAreaLTC1,dt.ltc_2.value=te.state.rectAreaLTC2,dt.pointLights.value=te.state.point,dt.pointLightShadows.value=te.state.pointShadow,dt.hemisphereLights.value=te.state.hemi,dt.directionalShadowMap.value=te.state.directionalShadowMap,dt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,dt.spotShadowMap.value=te.state.spotShadowMap,dt.spotLightMatrix.value=te.state.spotLightMatrix,dt.spotLightMap.value=te.state.spotLightMap,dt.pointShadowMap.value=te.state.pointShadowMap,dt.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.currentProgram=Fe,ne.uniformsList=null,Fe}function wr(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=Il.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function es(b,W){const oe=et.get(b);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function ic(b,W,oe,ne,te){W.isScene!==!0&&(W=Ne),ct.resetTextureUnits();const be=W.fog,ze=ne.isMeshStandardMaterial?W.environment:null,Ve=U===null?R.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Mr,Ke=(ne.isMeshStandardMaterial?k:At).get(ne.envMap||ze),rt=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Fe=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),dt=!!oe.morphAttributes.position,It=!!oe.morphAttributes.normal,Wt=!!oe.morphAttributes.color;let Jt=vr;ne.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Jt=R.toneMapping);const Zn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,_t=Zn!==void 0?Zn.length:0,Je=et.get(ne),un=x.state.lights;if(Y===!0&&(fe===!0||b!==I)){const rn=b===I&&ne.id===ee;Ce.setState(ne,b,rn)}let Rt=!1;ne.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==un.state.version||Je.outputColorSpace!==Ve||te.isBatchedMesh&&Je.batching===!1||!te.isBatchedMesh&&Je.batching===!0||te.isInstancedMesh&&Je.instancing===!1||!te.isInstancedMesh&&Je.instancing===!0||te.isSkinnedMesh&&Je.skinning===!1||!te.isSkinnedMesh&&Je.skinning===!0||te.isInstancedMesh&&Je.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Je.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Je.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Je.instancingMorph===!1&&te.morphTexture!==null||Je.envMap!==Ke||ne.fog===!0&&Je.fog!==be||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ce.numPlanes||Je.numIntersection!==Ce.numIntersection)||Je.vertexAlphas!==rt||Je.vertexTangents!==Fe||Je.morphTargets!==dt||Je.morphNormals!==It||Je.morphColors!==Wt||Je.toneMapping!==Jt||Je.morphTargetsCount!==_t)&&(Rt=!0):(Rt=!0,Je.__version=ne.version);let Xt=Je.currentProgram;Rt===!0&&(Xt=Si(ne,W,te));let aa=!1,Tr=!1,so=!1;const Ht=Xt.getUniforms(),Dn=Je.uniforms;if(Xe.useProgram(Xt.program)&&(aa=!0,Tr=!0,so=!0),ne.id!==ee&&(ee=ne.id,Tr=!0),aa||I!==b){Ht.setValue(K,"projectionMatrix",b.projectionMatrix),Ht.setValue(K,"viewMatrix",b.matrixWorldInverse);const rn=Ht.map.cameraPosition;rn!==void 0&&rn.setValue(K,me.setFromMatrixPosition(b.matrixWorld)),vt.logarithmicDepthBuffer&&Ht.setValue(K,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ht.setValue(K,"isOrthographic",b.isOrthographicCamera===!0),I!==b&&(I=b,Tr=!0,so=!0)}if(te.isSkinnedMesh){Ht.setOptional(K,te,"bindMatrix"),Ht.setOptional(K,te,"bindMatrixInverse");const rn=te.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ht.setValue(K,"boneTexture",rn.boneTexture,ct))}te.isBatchedMesh&&(Ht.setOptional(K,te,"batchingTexture"),Ht.setValue(K,"batchingTexture",te._matricesTexture,ct));const Mi=oe.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&Be.update(te,oe,Xt),(Tr||Je.receiveShadow!==te.receiveShadow)&&(Je.receiveShadow=te.receiveShadow,Ht.setValue(K,"receiveShadow",te.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Dn.envMap.value=Ke,Dn.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&W.environment!==null&&(Dn.envMapIntensity.value=W.environmentIntensity),Tr&&(Ht.setValue(K,"toneMappingExposure",R.toneMappingExposure),Je.needsLights&&rc(Dn,so),be&&ne.fog===!0&&xe.refreshFogUniforms(Dn,be),xe.refreshMaterialUniforms(Dn,ne,ue,he,x.state.transmissionRenderTarget[b.id]),Il.upload(K,wr(Je),Dn,ct)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Il.upload(K,wr(Je),Dn,ct),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ht.setValue(K,"center",te.center),Ht.setValue(K,"modelViewMatrix",te.modelViewMatrix),Ht.setValue(K,"normalMatrix",te.normalMatrix),Ht.setValue(K,"modelMatrix",te.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const rn=ne.uniformsGroups;for(let oo=0,oc=rn.length;oo<oc;oo++){const ts=rn[oo];ut.update(ts,Xt),ut.bind(ts,Xt)}}return Xt}function rc(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function sc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,W,oe){et.get(b.texture).__webglTexture=W,et.get(b.depthTexture).__webglTexture=oe;const ne=et.get(b);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=oe===void 0,ne.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const oe=et.get(b);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,oe=0){U=b,V=W,F=oe;let ne=!0,te=null,be=!1,ze=!1;if(b){const Ke=et.get(b);Ke.__useDefaultFramebuffer!==void 0?(Xe.bindFramebuffer(K.FRAMEBUFFER,null),ne=!1):Ke.__webglFramebuffer===void 0?ct.setupRenderTarget(b):Ke.__hasExternalTextures&&ct.rebindTextures(b,et.get(b.texture).__webglTexture,et.get(b.depthTexture).__webglTexture);const rt=b.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(ze=!0);const Fe=et.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[W])?te=Fe[W][oe]:te=Fe[W],be=!0):b.samples>0&&ct.useMultisampledRTT(b)===!1?te=et.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?te=Fe[oe]:te=Fe,A.copy(b.viewport),q.copy(b.scissor),le=b.scissorTest}else A.copy(P).multiplyScalar(ue).floor(),q.copy($).multiplyScalar(ue).floor(),le=Se;if(Xe.bindFramebuffer(K.FRAMEBUFFER,te)&&ne&&Xe.drawBuffers(b,te),Xe.viewport(A),Xe.scissor(q),Xe.setScissorTest(le),be){const Ke=et.get(b.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ke.__webglTexture,oe)}else if(ze){const Ke=et.get(b.texture),rt=W||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ke.__webglTexture,oe||0,rt)}ee=-1},this.readRenderTargetPixels=function(b,W,oe,ne,te,be,ze){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){Xe.bindFramebuffer(K.FRAMEBUFFER,Ve);try{const Ke=b.texture,rt=Ke.format,Fe=Ke.type;if(!vt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-ne&&oe>=0&&oe<=b.height-te&&K.readPixels(W,oe,ne,te,De.convert(rt),De.convert(Fe),be)}finally{const Ke=U!==null?et.get(U).__webglFramebuffer:null;Xe.bindFramebuffer(K.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(b,W,oe=0){const ne=Math.pow(2,-oe),te=Math.floor(W.image.width*ne),be=Math.floor(W.image.height*ne);ct.setTexture2D(W,0),K.copyTexSubImage2D(K.TEXTURE_2D,oe,0,0,b.x,b.y,te,be),Xe.unbindTexture()},this.copyTextureToTexture=function(b,W,oe,ne=0){const te=W.image.width,be=W.image.height,ze=De.convert(oe.format),Ve=De.convert(oe.type);ct.setTexture2D(oe,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,oe.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,oe.unpackAlignment),W.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,ne,b.x,b.y,te,be,ze,Ve,W.image.data):W.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,ne,b.x,b.y,W.mipmaps[0].width,W.mipmaps[0].height,ze,W.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,ne,b.x,b.y,ze,Ve,W.image),ne===0&&oe.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Xe.unbindTexture()},this.copyTextureToTexture3D=function(b,W,oe,ne,te=0){const be=b.max.x-b.min.x,ze=b.max.y-b.min.y,Ve=b.max.z-b.min.z,Ke=De.convert(ne.format),rt=De.convert(ne.type);let Fe;if(ne.isData3DTexture)ct.setTexture3D(ne,0),Fe=K.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)ct.setTexture2DArray(ne,0),Fe=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ne.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ne.unpackAlignment);const dt=K.getParameter(K.UNPACK_ROW_LENGTH),It=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Wt=K.getParameter(K.UNPACK_SKIP_PIXELS),Jt=K.getParameter(K.UNPACK_SKIP_ROWS),Zn=K.getParameter(K.UNPACK_SKIP_IMAGES),_t=oe.isCompressedTexture?oe.mipmaps[te]:oe.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,_t.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,_t.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,b.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,b.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,b.min.z),oe.isDataTexture||oe.isData3DTexture?K.texSubImage3D(Fe,te,W.x,W.y,W.z,be,ze,Ve,Ke,rt,_t.data):ne.isCompressedArrayTexture?K.compressedTexSubImage3D(Fe,te,W.x,W.y,W.z,be,ze,Ve,Ke,_t.data):K.texSubImage3D(Fe,te,W.x,W.y,W.z,be,ze,Ve,Ke,rt,_t),K.pixelStorei(K.UNPACK_ROW_LENGTH,dt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,It),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Wt),K.pixelStorei(K.UNPACK_SKIP_ROWS,Jt),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Zn),te===0&&ne.generateMipmaps&&K.generateMipmap(Fe),Xe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ct.setTextureCube(b,0):b.isData3DTexture?ct.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ct.setTexture2DArray(b,0):ct.setTexture2D(b,0),Xe.unbindTexture()},this.resetState=function(){V=0,F=0,U=null,Xe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bd?"display-p3":"srgb",t.unpackColorSpace=Tt.workingColorSpace===Jl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class lT extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wd extends Er{constructor(e=1,t=32,i=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(u+d,Math.PI);let p=0;const m=[],_=new Q,g=new Q,S=[],M=[],T=[],x=[];for(let y=0;y<=i;y++){const D=[],R=y/i;let L=0;y===0&&u===0?L=.5/t:y===i&&f===Math.PI&&(L=-.5/t);for(let V=0;V<=t;V++){const F=V/t;_.x=-e*Math.cos(o+F*l)*Math.sin(u+R*d),_.y=e*Math.cos(u+R*d),_.z=e*Math.sin(o+F*l)*Math.sin(u+R*d),M.push(_.x,_.y,_.z),g.copy(_).normalize(),T.push(g.x,g.y,g.z),x.push(F+L,1-R),D.push(p++)}m.push(D)}for(let y=0;y<i;y++)for(let D=0;D<t;D++){const R=m[y][D+1],L=m[y][D],V=m[y+1][D],F=m[y+1][D+1];(y!==0||u>0)&&S.push(R,L,F),(y!==i-1||f<Math.PI)&&S.push(L,V,F)}this.setIndex(S),this.setAttribute("position",new yi(M,3)),this.setAttribute("normal",new yi(T,3)),this.setAttribute("uv",new yi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const rg={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class cT{constructor(e,t,i){const o=this;let l=!1,u=0,d=0,f;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){d++,l===!1&&o.onStart!==void 0&&o.onStart(m,u,d),l=!0},this.itemEnd=function(m){u++,o.onProgress!==void 0&&o.onProgress(m,u,d),u===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,_){return p.push(m,_),this},this.removeHandler=function(m){const _=p.indexOf(m);return _!==-1&&p.splice(_,2),this},this.getHandler=function(m){for(let _=0,g=p.length;_<g;_+=2){const S=p[_],M=p[_+1];if(S.global&&(S.lastIndex=0),S.test(m))return M}return null}}}const uT=new cT;class Xd{constructor(e){this.manager=e!==void 0?e:uT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,l){i.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xd.DEFAULT_MATERIAL_NAME="__DEFAULT";class dT extends Xd{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=rg.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u;const d=ea("img");function f(){m(),rg.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(_){m(),o&&o(_),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){d.removeEventListener("load",f,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",f,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),l.manager.itemStart(e),d.src=e,d}}class fT extends Xd{constructor(e){super(e)}load(e,t,i,o){const l=new Mn,u=new dT(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},i,o),l}}class hT extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class pT extends hT{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(vn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);const og={type:"change"},Md={type:"start"},ag={type:"end"},Nl=new Kg,lg=new dr,mT=Math.cos(70*Zy.DEG2RAD);class gT extends Qr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",Ze),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ze),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(og),i.update(),l=o.NONE},this.update=function(){const E=new Q,j=new Zr().setFromUnitVectors(e.up,new Q(0,1,0)),J=j.clone().invert(),pe=new Q,we=new Zr,it=new Q,ot=2*Math.PI;return function(Bt=null){const mt=i.object.position;E.copy(mt).sub(i.target),E.applyQuaternion(j),d.setFromVector3(E),i.autoRotate&&l===o.NONE&&le(A(Bt)),i.enableDamping?(d.theta+=f.theta*i.dampingFactor,d.phi+=f.phi*i.dampingFactor):(d.theta+=f.theta,d.phi+=f.phi);let Dt=i.minAzimuthAngle,wt=i.maxAzimuthAngle;isFinite(Dt)&&isFinite(wt)&&(Dt<-Math.PI?Dt+=ot:Dt>Math.PI&&(Dt-=ot),wt<-Math.PI?wt+=ot:wt>Math.PI&&(wt-=ot),Dt<=wt?d.theta=Math.max(Dt,Math.min(wt,d.theta)):d.theta=d.theta>(Dt+wt)/2?Math.max(Dt,d.theta):Math.min(wt,d.theta)),d.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,d.phi)),d.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let En=!1;if(i.zoomToCursor&&F||i.object.isOrthographicCamera)d.radius=P(d.radius);else{const cn=d.radius;d.radius=P(d.radius*p),En=cn!=d.radius}if(E.setFromSpherical(d),E.applyQuaternion(J),mt.copy(i.target).add(E),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),m.set(0,0,0)),i.zoomToCursor&&F){let cn=null;if(i.object.isPerspectiveCamera){const wn=E.length();cn=P(wn*p);const Yn=wn-cn;i.object.position.addScaledVector(L,Yn),i.object.updateMatrixWorld(),En=!!Yn}else if(i.object.isOrthographicCamera){const wn=new Q(V.x,V.y,0);wn.unproject(i.object);const Yn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/p)),i.object.updateProjectionMatrix(),En=Yn!==i.object.zoom;const Kn=new Q(V.x,V.y,0);Kn.unproject(i.object),i.object.position.sub(Kn).add(wn),i.object.updateMatrixWorld(),cn=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;cn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(cn).add(i.object.position):(Nl.origin.copy(i.object.position),Nl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Nl.direction))<mT?e.lookAt(i.target):(lg.setFromNormalAndCoplanarPoint(i.object.up,i.target),Nl.intersectPlane(lg,i.target))))}else if(i.object.isOrthographicCamera){const cn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/p)),cn!==i.object.zoom&&(i.object.updateProjectionMatrix(),En=!0)}return p=1,F=!1,En||pe.distanceToSquared(i.object.position)>u||8*(1-we.dot(i.object.quaternion))>u||it.distanceToSquared(i.target)>u?(i.dispatchEvent(og),pe.copy(i.object.position),we.copy(i.object.quaternion),it.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",st),i.domElement.removeEventListener("pointerdown",k),i.domElement.removeEventListener("pointercancel",se),i.domElement.removeEventListener("wheel",xe),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",se),i.domElement.getRootNode().removeEventListener("keydown",Re,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ze),i._domElementKeyEvents=null)};const i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=o.NONE;const u=1e-6,d=new sg,f=new sg;let p=1;const m=new Q,_=new at,g=new at,S=new at,M=new at,T=new at,x=new at,y=new at,D=new at,R=new at,L=new Q,V=new at;let F=!1;const U=[],ee={};let I=!1;function A(E){return E!==null?2*Math.PI/60*i.autoRotateSpeed*E:2*Math.PI/60/60*i.autoRotateSpeed}function q(E){const j=Math.abs(E*.01);return Math.pow(.95,i.zoomSpeed*j)}function le(E){f.theta-=E}function G(E){f.phi-=E}const ce=function(){const E=new Q;return function(J,pe){E.setFromMatrixColumn(pe,0),E.multiplyScalar(-J),m.add(E)}}(),ae=function(){const E=new Q;return function(J,pe){i.screenSpacePanning===!0?E.setFromMatrixColumn(pe,1):(E.setFromMatrixColumn(pe,0),E.crossVectors(i.object.up,E)),E.multiplyScalar(J),m.add(E)}}(),he=function(){const E=new Q;return function(J,pe){const we=i.domElement;if(i.object.isPerspectiveCamera){const it=i.object.position;E.copy(it).sub(i.target);let ot=E.length();ot*=Math.tan(i.object.fov/2*Math.PI/180),ce(2*J*ot/we.clientHeight,i.object.matrix),ae(2*pe*ot/we.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ce(J*(i.object.right-i.object.left)/i.object.zoom/we.clientWidth,i.object.matrix),ae(pe*(i.object.top-i.object.bottom)/i.object.zoom/we.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ue(E){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?p/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function z(E){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?p*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(E,j){if(!i.zoomToCursor)return;F=!0;const J=i.domElement.getBoundingClientRect(),pe=E-J.left,we=j-J.top,it=J.width,ot=J.height;V.x=pe/it*2-1,V.y=-(we/ot)*2+1,L.set(V.x,V.y,1).unproject(i.object).sub(i.object.position).normalize()}function P(E){return Math.max(i.minDistance,Math.min(i.maxDistance,E))}function $(E){_.set(E.clientX,E.clientY)}function Se(E){re(E.clientX,E.clientX),y.set(E.clientX,E.clientY)}function Ue(E){M.set(E.clientX,E.clientY)}function Y(E){g.set(E.clientX,E.clientY),S.subVectors(g,_).multiplyScalar(i.rotateSpeed);const j=i.domElement;le(2*Math.PI*S.x/j.clientHeight),G(2*Math.PI*S.y/j.clientHeight),_.copy(g),i.update()}function fe(E){D.set(E.clientX,E.clientY),R.subVectors(D,y),R.y>0?ue(q(R.y)):R.y<0&&z(q(R.y)),y.copy(D),i.update()}function Me(E){T.set(E.clientX,E.clientY),x.subVectors(T,M).multiplyScalar(i.panSpeed),he(x.x,x.y),M.copy(T),i.update()}function me(E){re(E.clientX,E.clientY),E.deltaY<0?z(q(E.deltaY)):E.deltaY>0&&ue(q(E.deltaY)),i.update()}function Ne(E){let j=!1;switch(E.code){case i.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):he(0,i.keyPanSpeed),j=!0;break;case i.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):he(0,-i.keyPanSpeed),j=!0;break;case i.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?le(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):he(i.keyPanSpeed,0),j=!0;break;case i.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?le(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):he(-i.keyPanSpeed,0),j=!0;break}j&&(E.preventDefault(),i.update())}function je(E){if(U.length===1)_.set(E.pageX,E.pageY);else{const j=yt(E),J=.5*(E.pageX+j.x),pe=.5*(E.pageY+j.y);_.set(J,pe)}}function K(E){if(U.length===1)M.set(E.pageX,E.pageY);else{const j=yt(E),J=.5*(E.pageX+j.x),pe=.5*(E.pageY+j.y);M.set(J,pe)}}function gt(E){const j=yt(E),J=E.pageX-j.x,pe=E.pageY-j.y,we=Math.sqrt(J*J+pe*pe);y.set(0,we)}function We(E){i.enableZoom&&gt(E),i.enablePan&&K(E)}function vt(E){i.enableZoom&&gt(E),i.enableRotate&&je(E)}function Xe(E){if(U.length==1)g.set(E.pageX,E.pageY);else{const J=yt(E),pe=.5*(E.pageX+J.x),we=.5*(E.pageY+J.y);g.set(pe,we)}S.subVectors(g,_).multiplyScalar(i.rotateSpeed);const j=i.domElement;le(2*Math.PI*S.x/j.clientHeight),G(2*Math.PI*S.y/j.clientHeight),_.copy(g)}function lt(E){if(U.length===1)T.set(E.pageX,E.pageY);else{const j=yt(E),J=.5*(E.pageX+j.x),pe=.5*(E.pageY+j.y);T.set(J,pe)}x.subVectors(T,M).multiplyScalar(i.panSpeed),he(x.x,x.y),M.copy(T)}function et(E){const j=yt(E),J=E.pageX-j.x,pe=E.pageY-j.y,we=Math.sqrt(J*J+pe*pe);D.set(0,we),R.set(0,Math.pow(D.y/y.y,i.zoomSpeed)),ue(R.y),y.copy(D);const it=(E.pageX+j.x)*.5,ot=(E.pageY+j.y)*.5;re(it,ot)}function ct(E){i.enableZoom&&et(E),i.enablePan&&lt(E)}function At(E){i.enableZoom&&et(E),i.enableRotate&&Xe(E)}function k(E){i.enabled!==!1&&(U.length===0&&(i.domElement.setPointerCapture(E.pointerId),i.domElement.addEventListener("pointermove",C),i.domElement.addEventListener("pointerup",se)),!tt(E)&&($e(E),E.pointerType==="touch"?Ae(E):de(E)))}function C(E){i.enabled!==!1&&(E.pointerType==="touch"?Be(E):_e(E))}function se(E){switch(De(E),U.length){case 0:i.domElement.releasePointerCapture(E.pointerId),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",se),i.dispatchEvent(ag),l=o.NONE;break;case 1:const j=U[0],J=ee[j];Ae({pointerId:j,pageX:J.x,pageY:J.y});break}}function de(E){let j;switch(E.button){case 0:j=i.mouseButtons.LEFT;break;case 1:j=i.mouseButtons.MIDDLE;break;case 2:j=i.mouseButtons.RIGHT;break;default:j=-1}switch(j){case ws.DOLLY:if(i.enableZoom===!1)return;Se(E),l=o.DOLLY;break;case ws.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enablePan===!1)return;Ue(E),l=o.PAN}else{if(i.enableRotate===!1)return;$(E),l=o.ROTATE}break;case ws.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enableRotate===!1)return;$(E),l=o.ROTATE}else{if(i.enablePan===!1)return;Ue(E),l=o.PAN}break;default:l=o.NONE}l!==o.NONE&&i.dispatchEvent(Md)}function _e(E){switch(l){case o.ROTATE:if(i.enableRotate===!1)return;Y(E);break;case o.DOLLY:if(i.enableZoom===!1)return;fe(E);break;case o.PAN:if(i.enablePan===!1)return;Me(E);break}}function xe(E){i.enabled===!1||i.enableZoom===!1||l!==o.NONE||(E.preventDefault(),i.dispatchEvent(Md),me(Ge(E)),i.dispatchEvent(ag))}function Ge(E){const j=E.deltaMode,J={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(j){case 1:J.deltaY*=16;break;case 2:J.deltaY*=100;break}return E.ctrlKey&&!I&&(J.deltaY*=10),J}function Re(E){E.key==="Control"&&(I=!0,i.domElement.getRootNode().addEventListener("keyup",Ce,{passive:!0,capture:!0}))}function Ce(E){E.key==="Control"&&(I=!1,i.domElement.getRootNode().removeEventListener("keyup",Ce,{passive:!0,capture:!0}))}function Ze(E){i.enabled===!1||i.enablePan===!1||Ne(E)}function Ae(E){switch(ut(E),U.length){case 1:switch(i.touches.ONE){case Ts.ROTATE:if(i.enableRotate===!1)return;je(E),l=o.TOUCH_ROTATE;break;case Ts.PAN:if(i.enablePan===!1)return;K(E),l=o.TOUCH_PAN;break;default:l=o.NONE}break;case 2:switch(i.touches.TWO){case Ts.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;We(E),l=o.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;vt(E),l=o.TOUCH_DOLLY_ROTATE;break;default:l=o.NONE}break;default:l=o.NONE}l!==o.NONE&&i.dispatchEvent(Md)}function Be(E){switch(ut(E),l){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;Xe(E),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;lt(E),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ct(E),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;At(E),i.update();break;default:l=o.NONE}}function st(E){i.enabled!==!1&&E.preventDefault()}function $e(E){U.push(E.pointerId)}function De(E){delete ee[E.pointerId];for(let j=0;j<U.length;j++)if(U[j]==E.pointerId){U.splice(j,1);return}}function tt(E){for(let j=0;j<U.length;j++)if(U[j]==E.pointerId)return!0;return!1}function ut(E){let j=ee[E.pointerId];j===void 0&&(j=new at,ee[E.pointerId]=j),j.set(E.pageX,E.pageY)}function yt(E){const j=E.pointerId===U[0]?U[1]:U[0];return ee[j]}i.domElement.addEventListener("contextmenu",st),i.domElement.addEventListener("pointerdown",k),i.domElement.addEventListener("pointercancel",se),i.domElement.addEventListener("wheel",xe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Re,{passive:!0,capture:!0}),this.update()}}const vT=()=>{const s=Ee.useRef(null),e=Ee.useRef(null);return Ee.useEffect(()=>{const t=new lT,i=new $n(75,window.innerWidth/window.innerHeight,.3,2e3),o=new aT({alpha:!0});o.setSize(window.innerWidth,window.innerHeight);const l=new pT(16777215,.5);t.add(l);const u=new Wd(2.5,25,25),d=new fT().load("/img/01.jpg"),f=new Gd({map:d}),p=new vi(u,f);t.add(p),e.current=p,i.position.z=10;const m=new gT(i,o.domElement);m.enableDamping=!0,m.dampingFactor=.25,m.rotateSpeed=.35;const _=()=>{requestAnimationFrame(_),e.current.rotateY(.005),e.current.position.y=Math.sin(Date.now()*.001)*.5,o.render(t,i),m.update()};_(),s.current.appendChild(o.domElement);const g=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g),m.dispose()}},[]),N.jsxs(N.Fragment,{children:[N.jsx("div",{ref:s,style:{position:"absolute",className:"canvasimg",backgroundSize:"cover",left:0,marginTop:"20px",zIndex:1,backgroundImage:"url(/img/espacio1.avif)"}}),N.jsxs("div",{className:"title",children:[N.jsx("h1",{className:"Error_title",children:"Error 404"}),N.jsx("img",{src:"img/Ovni retro.png",className:"ovni"}),N.jsxs("h3",{className:"parr_404",children:["Houston lo sentimos pero ha ocurrido algo desconocido,",N.jsx("br",{})," la página que intentas acceder parece ser que no existe, por favor vuelve a inicio, pero si quieres",N.jsx("br",{})," puedes jugar un rato mientras solucionamos este problema"]}),N.jsx("button",{className:"play",children:"PLAY"})]})]})},_T=()=>N.jsx(N.Fragment,{children:N.jsxs("div",{className:"flex flex-col md:flex-row lg:flex-row justify-center items-center gap-2",children:[N.jsx("img",{src:"img/logo2.png",className:"w-28 h-28",alt:"logo-imagen"}),N.jsxs("div",{className:"icons_social flex flex-row text-3xl justify-center",children:[N.jsx("a",{href:"https://github.com/81andie",target:"_blank",rel:"noopener noreferrer",children:N.jsx("i",{className:"pi pi-github mr-1",style:{color:"#e040a4"}})}),N.jsx("a",{href:"https://www.linkedin.com/in/andrea-hern%C3%A0ndez-abbab9288/",target:"_blank",rel:"noopener noreferrer",children:N.jsx("i",{className:"pi pi-linkedin",style:{color:"#e040a4"}})})]}),N.jsx("div",{className:"text-center mb-2",children:N.jsxs("h3",{className:"text-slate-500",children:[" Diseñadora página web y desarrollor Web:",N.jsx("br",{})," Andrea Hernández ",N.jsx("br",{}),"©2024 Andrea Hernández | All Rights Reserved "]})})]})}),xT=()=>N.jsx(N.Fragment,{children:N.jsxs(J_,{basename:"/my-portfolio",children:[N.jsx(bx,{}),N.jsxs(j_,{children:[N.jsx(fi,{path:"/",element:N.jsx(Op,{})}),N.jsx(fi,{path:"/inicio",element:N.jsx(Op,{})}),N.jsx(fi,{path:"/sobremi",element:N.jsx(wx,{})}),N.jsx(fi,{path:"/queofrezco",element:N.jsx(Ex,{})}),N.jsx(fi,{path:"/skills",element:N.jsx(Tx,{})}),N.jsx(fi,{path:"/certificaciones",element:N.jsx(Rx,{})}),N.jsx(fi,{path:"/proyectos",element:N.jsx(Ax,{})}),N.jsx(fi,{path:"/contacto",element:N.jsx(Cx,{})}),N.jsx(fi,{path:"*",element:N.jsx(vT,{})})]}),N.jsx(_T,{})]})}),yT={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){console&&console[s]&&console[s].apply(console,e)}};class Gl{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||yT,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,o){return o&&!this.debug?null:(typeof e[0]=="string"&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Gl(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Gl(this.logger,e)}}var _i=new Gl;class nc{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const o=this.observers[i].get(t)||0;this.observers[i].set(t,o+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(u=>{let[d,f]=u;for(let p=0;p<f;p++)d(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[d,f]=u;for(let p=0;p<f;p++)d.apply(d,[e,...i])})}}function Wo(){let s,e;const t=new Promise((i,o)=>{s=i,e=o});return t.resolve=s,t.reject=e,t}function cg(s){return s==null?"":""+s}function ST(s,e,t){s.forEach(i=>{e[i]&&(t[i]=e[i])})}const MT=/###/g;function Yo(s,e,t){function i(d){return d&&d.indexOf("###")>-1?d.replace(MT,"."):d}function o(){return!s||typeof s=="string"}const l=typeof e!="string"?e:e.split(".");let u=0;for(;u<l.length-1;){if(o())return{};const d=i(l[u]);!s[d]&&t&&(s[d]=new t),Object.prototype.hasOwnProperty.call(s,d)?s=s[d]:s={},++u}return o()?{}:{obj:s,k:i(l[u])}}function ug(s,e,t){const{obj:i,k:o}=Yo(s,e,Object);if(i!==void 0||e.length===1){i[o]=t;return}let l=e[e.length-1],u=e.slice(0,e.length-1),d=Yo(s,u,Object);for(;d.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),d=Yo(s,u,Object),d&&d.obj&&typeof d.obj[`${d.k}.${l}`]<"u"&&(d.obj=void 0);d.obj[`${d.k}.${l}`]=t}function ET(s,e,t,i){const{obj:o,k:l}=Yo(s,e,Object);o[l]=o[l]||[],o[l].push(t)}function jl(s,e){const{obj:t,k:i}=Yo(s,e);if(t)return t[i]}function wT(s,e,t){const i=jl(s,t);return i!==void 0?i:jl(e,t)}function fv(s,e,t){for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in s?typeof s[i]=="string"||s[i]instanceof String||typeof e[i]=="string"||e[i]instanceof String?t&&(s[i]=e[i]):fv(s[i],e[i],t):s[i]=e[i]);return s}function Gs(s){return s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var TT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function AT(s){return typeof s=="string"?s.replace(/[&<>"'\/]/g,e=>TT[e]):s}class CT{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const RT=[" ",",","?","!",";"],bT=new CT(20);function PT(s,e,t){e=e||"",t=t||"";const i=RT.filter(u=>e.indexOf(u)<0&&t.indexOf(u)<0);if(i.length===0)return!0;const o=bT.getRegExp(`(${i.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(s);if(!l){const u=s.indexOf(t);u>0&&!o.test(s.substring(0,u))&&(l=!0)}return l}function Fd(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[e])return s[e];const i=e.split(t);let o=s;for(let l=0;l<i.length;){if(!o||typeof o!="object")return;let u,d="";for(let f=l;f<i.length;++f)if(f!==l&&(d+=t),d+=i[f],u=o[d],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&f<i.length-1)continue;l+=f-l+1;break}o=u}return o}function Wl(s){return s&&s.indexOf("_")>0?s.replace("_","-"):s}class dg extends nc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let d;e.indexOf(".")>-1?d=e.split("."):(d=[e,t],i&&(Array.isArray(i)?d.push(...i):typeof i=="string"&&l?d.push(...i.split(l)):d.push(i)));const f=jl(this.data,d);return!f&&!t&&!i&&e.indexOf(".")>-1&&(e=d[0],t=d[1],i=d.slice(2).join(".")),f||!u||typeof i!="string"?f:Fd(this.data&&this.data[e]&&this.data[e][t],i,l)}addResource(e,t,i,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let d=[e,t];i&&(d=d.concat(u?i.split(u):i)),e.indexOf(".")>-1&&(d=e.split("."),o=t,t=d[1]),this.addNamespaces(t),ug(this.data,d,o),l.silent||this.emit("added",e,t,i,o)}addResources(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in i)(typeof i[l]=="string"||Object.prototype.toString.apply(i[l])==="[object Array]")&&this.addResource(e,t,l,i[l],{silent:!0});o.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},d=[e,t];e.indexOf(".")>-1&&(d=e.split("."),o=i,i=t,t=d[1]),this.addNamespaces(t);let f=jl(this.data,d)||{};u.skipCopy||(i=JSON.parse(JSON.stringify(i))),o?fv(f,i,l):f={...f,...i},ug(this.data,d,f),u.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(o=>t[o]&&Object.keys(t[o]).length>0)}toJSON(){return this.data}}var hv={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,i,o){return s.forEach(l=>{this.processors[l]&&(e=this.processors[l].process(e,t,i,o))}),e}};const fg={};class Xl extends nc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),ST(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=_i.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return i&&i.res!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let l=t.ns||this.options.defaultNS||[];const u=i&&e.indexOf(i)>-1,d=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!PT(e,i,o);if(u&&!d){const f=e.match(this.interpolator.nestingRegexp);if(f&&f.length>0)return{key:e,namespaces:l};const p=e.split(i);(i!==o||i===o&&this.options.ns.indexOf(p[0])>-1)&&(l=p.shift()),e=p.join(o)}return typeof l=="string"&&(l=[l]),{key:e,namespaces:l}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const o=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,l=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:u,namespaces:d}=this.extractFromKey(e[e.length-1],t),f=d[d.length-1],p=t.lng||this.language,m=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(p&&p.toLowerCase()==="cimode"){if(m){const L=t.nsSeparator||this.options.nsSeparator;return o?{res:`${f}${L}${u}`,usedKey:u,exactUsedKey:u,usedLng:p,usedNS:f,usedParams:this.getUsedParamsDetails(t)}:`${f}${L}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:p,usedNS:f,usedParams:this.getUsedParamsDetails(t)}:u}const _=this.resolve(e,t);let g=_&&_.res;const S=_&&_.usedKey||u,M=_&&_.exactUsedKey||u,T=Object.prototype.toString.apply(g),x=["[object Number]","[object Function]","[object RegExp]"],y=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,D=!this.i18nFormat||this.i18nFormat.handleAsObject;if(D&&g&&(typeof g!="string"&&typeof g!="boolean"&&typeof g!="number")&&x.indexOf(T)<0&&!(typeof y=="string"&&T==="[object Array]")){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const L=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,g,{...t,ns:d}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(_.res=L,_.usedParams=this.getUsedParamsDetails(t),_):L}if(l){const L=T==="[object Array]",V=L?[]:{},F=L?M:S;for(const U in g)if(Object.prototype.hasOwnProperty.call(g,U)){const ee=`${F}${l}${U}`;V[U]=this.translate(ee,{...t,joinArrays:!1,ns:d}),V[U]===ee&&(V[U]=g[U])}g=V}}else if(D&&typeof y=="string"&&T==="[object Array]")g=g.join(y),g&&(g=this.extendTranslation(g,e,t,i));else{let L=!1,V=!1;const F=t.count!==void 0&&typeof t.count!="string",U=Xl.hasDefaultValue(t),ee=F?this.pluralResolver.getSuffix(p,t.count,t):"",I=t.ordinal&&F?this.pluralResolver.getSuffix(p,t.count,{ordinal:!1}):"",A=F&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),q=A&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${ee}`]||t[`defaultValue${I}`]||t.defaultValue;!this.isValidLookup(g)&&U&&(L=!0,g=q),this.isValidLookup(g)||(V=!0,g=u);const G=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&V?void 0:g,ce=U&&q!==g&&this.options.updateMissing;if(V||L||ce){if(this.logger.log(ce?"updateKey":"missingKey",p,f,u,ce?q:g),l){const z=this.resolve(u,{...t,keySeparator:!1});z&&z.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ae=[];const he=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&he&&he[0])for(let z=0;z<he.length;z++)ae.push(he[z]);else this.options.saveMissingTo==="all"?ae=this.languageUtils.toResolveHierarchy(t.lng||this.language):ae.push(t.lng||this.language);const ue=(z,re,P)=>{const $=U&&P!==g?P:G;this.options.missingKeyHandler?this.options.missingKeyHandler(z,f,re,$,ce,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(z,f,re,$,ce,t),this.emit("missingKey",z,f,re,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&F?ae.forEach(z=>{const re=this.pluralResolver.getSuffixes(z,t);A&&t[`defaultValue${this.options.pluralSeparator}zero`]&&re.indexOf(`${this.options.pluralSeparator}zero`)<0&&re.push(`${this.options.pluralSeparator}zero`),re.forEach(P=>{ue([z],u+P,t[`defaultValue${P}`]||q)})}):ue(ae,u,q))}g=this.extendTranslation(g,e,t,_,i),V&&g===u&&this.options.appendNamespaceToMissingKey&&(g=`${f}:${u}`),(V||L)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?g=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${f}:${u}`:u,L?g:void 0):g=this.options.parseMissingKeyHandler(g))}return o?(_.res=g,_.usedParams=this.getUsedParamsDetails(t),_):g}extendTranslation(e,t,i,o,l){var u=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const p=typeof e=="string"&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let m;if(p){const g=e.match(this.interpolator.nestingRegexp);m=g&&g.length}let _=i.replace&&typeof i.replace!="string"?i.replace:i;if(this.options.interpolation.defaultVariables&&(_={...this.options.interpolation.defaultVariables,..._}),e=this.interpolator.interpolate(e,_,i.lng||this.language,i),p){const g=e.match(this.interpolator.nestingRegexp),S=g&&g.length;m<S&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&o&&o.res&&(i.lng=o.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var g=arguments.length,S=new Array(g),M=0;M<g;M++)S[M]=arguments[M];return l&&l[0]===S[0]&&!i.context?(u.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${t[0]}`),null):u.translate(...S,t)},i)),i.interpolation&&this.interpolator.reset()}const d=i.postProcess||this.options.postProcess,f=typeof d=="string"?[d]:d;return e!=null&&f&&f.length&&i.applyPostProcessor!==!1&&(e=hv.handle(f,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,o,l,u,d;return typeof e=="string"&&(e=[e]),e.forEach(f=>{if(this.isValidLookup(i))return;const p=this.extractFromKey(f,t),m=p.key;o=m;let _=p.namespaces;this.options.fallbackNS&&(_=_.concat(this.options.fallbackNS));const g=t.count!==void 0&&typeof t.count!="string",S=g&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),M=t.context!==void 0&&(typeof t.context=="string"||typeof t.context=="number")&&t.context!=="",T=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);_.forEach(x=>{this.isValidLookup(i)||(d=x,!fg[`${T[0]}-${x}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(d)&&(fg[`${T[0]}-${x}`]=!0,this.logger.warn(`key "${o}" for languages "${T.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),T.forEach(y=>{if(this.isValidLookup(i))return;u=y;const D=[m];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(D,m,y,x,t);else{let L;g&&(L=this.pluralResolver.getSuffix(y,t.count,t));const V=`${this.options.pluralSeparator}zero`,F=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(g&&(D.push(m+L),t.ordinal&&L.indexOf(F)===0&&D.push(m+L.replace(F,this.options.pluralSeparator)),S&&D.push(m+V)),M){const U=`${m}${this.options.contextSeparator}${t.context}`;D.push(U),g&&(D.push(U+L),t.ordinal&&L.indexOf(F)===0&&D.push(U+L.replace(F,this.options.pluralSeparator)),S&&D.push(U+V))}}let R;for(;R=D.pop();)this.isValidLookup(i)||(l=R,i=this.getResource(y,x,R,t))}))})}),{res:i,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:d}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,i,o):this.resourceStore.getResource(e,t,i,o)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&typeof e.replace!="string";let o=i?e.replace:e;if(i&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!i){o={...o};for(const l of t)delete o[l]}return o}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}function Ed(s){return s.charAt(0).toUpperCase()+s.slice(1)}class hg{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=_i.create("languageUtils")}getScriptPartFromCode(e){if(e=Wl(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Wl(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(typeof e=="string"&&e.indexOf("-")>-1){const t=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(o=>o.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ed(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ed(i[1].toLowerCase())),t.indexOf(i[2].toLowerCase())>-1&&(i[2]=Ed(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const o=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(o))&&(t=o)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const o=this.getLanguagePartFromCode(i);if(this.isSupportedCode(o))return t=o;t=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),typeof e=="string"&&(e=[e]),Object.prototype.toString.apply(e)==="[object Array]")return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return typeof e=="string"&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(e))):typeof e=="string"&&l(this.formatLanguageCode(e)),i.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}let LT=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],NT={1:function(s){return+(s>1)},2:function(s){return+(s!=1)},3:function(s){return 0},4:function(s){return s%10==1&&s%100!=11?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2},5:function(s){return s==0?0:s==1?1:s==2?2:s%100>=3&&s%100<=10?3:s%100>=11?4:5},6:function(s){return s==1?0:s>=2&&s<=4?1:2},7:function(s){return s==1?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2},8:function(s){return s==1?0:s==2?1:s!=8&&s!=11?2:3},9:function(s){return+(s>=2)},10:function(s){return s==1?0:s==2?1:s<7?2:s<11?3:4},11:function(s){return s==1||s==11?0:s==2||s==12?1:s>2&&s<20?2:3},12:function(s){return+(s%10!=1||s%100==11)},13:function(s){return+(s!==0)},14:function(s){return s==1?0:s==2?1:s==3?2:3},15:function(s){return s%10==1&&s%100!=11?0:s%10>=2&&(s%100<10||s%100>=20)?1:2},16:function(s){return s%10==1&&s%100!=11?0:s!==0?1:2},17:function(s){return s==1||s%10==1&&s%100!=11?0:1},18:function(s){return s==0?0:s==1?1:2},19:function(s){return s==1?0:s==0||s%100>1&&s%100<11?1:s%100>10&&s%100<20?2:3},20:function(s){return s==1?0:s==0||s%100>0&&s%100<20?1:2},21:function(s){return s%100==1?1:s%100==2?2:s%100==3||s%100==4?3:0},22:function(s){return s==1?0:s==2?1:(s<0||s>10)&&s%10==0?2:3}};const DT=["v1","v2","v3"],IT=["v4"],pg={zero:0,one:1,two:2,few:3,many:4,other:5};function UT(){const s={};return LT.forEach(e=>{e.lngs.forEach(t=>{s[t]={numbers:e.nr,plurals:NT[e.fc]}})}),s}class OT{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=_i.create("pluralResolver"),(!this.options.compatibilityJSON||IT.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=UT()}addRule(e,t){this.rules[e]=t}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Wl(e==="dev"?"en":e),{type:t.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,t);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(o=>`${t}${o}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,t);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((o,l)=>pg[o]-pg[l]).map(o=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${o}`):i.numbers.map(o=>this.getSuffix(e,o,t)):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(e,i);return o?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o.select(t)}`:this.getSuffixRetroCompatible(o,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const i=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let o=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(o===2?o="plural":o===1&&(o=""));const l=()=>this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();return this.options.compatibilityJSON==="v1"?o===1?"":typeof o=="number"?`_plural_${o.toString()}`:l():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?l():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!DT.includes(this.options.compatibilityJSON)}}function mg(s,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=wT(s,e,t);return!l&&o&&typeof t=="string"&&(l=Fd(s,t,i),l===void 0&&(l=Fd(e,t,i))),l}class FT{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=_i.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(t=>t),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const t=e.interpolation;this.escape=t.escape!==void 0?t.escape:AT,this.escapeValue=t.escapeValue!==void 0?t.escapeValue:!0,this.useRawValueToEscape=t.useRawValueToEscape!==void 0?t.useRawValueToEscape:!1,this.prefix=t.prefix?Gs(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?Gs(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?Gs(t.nestingPrefix):t.nestingPrefixEscaped||Gs("$t("),this.nestingSuffix=t.nestingSuffix?Gs(t.nestingSuffix):t.nestingSuffixEscaped||Gs(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=t.alwaysFormat!==void 0?t.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>t&&t.source===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,o){let l,u,d;const f=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function p(M){return M.replace(/\$/g,"$$$$")}const m=M=>{if(M.indexOf(this.formatSeparator)<0){const D=mg(t,f,M,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(D,void 0,i,{...o,...t,interpolationkey:M}):D}const T=M.split(this.formatSeparator),x=T.shift().trim(),y=T.join(this.formatSeparator).trim();return this.format(mg(t,f,x,this.options.keySeparator,this.options.ignoreJSONStructure),y,i,{...o,...t,interpolationkey:x})};this.resetRegExp();const _=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,g=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:M=>p(M)},{regex:this.regexp,safeValue:M=>this.escapeValue?p(this.escape(M)):p(M)}].forEach(M=>{for(d=0;l=M.regex.exec(e);){const T=l[1].trim();if(u=m(T),u===void 0)if(typeof _=="function"){const y=_(e,l,o);u=typeof y=="string"?y:""}else if(o&&Object.prototype.hasOwnProperty.call(o,T))u="";else if(g){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${T} for interpolating ${e}`),u="";else typeof u!="string"&&!this.useRawValueToEscape&&(u=cg(u));const x=M.safeValue(u);if(e=e.replace(l[0],x),g?(M.regex.lastIndex+=u.length,M.regex.lastIndex-=l[0].length):M.regex.lastIndex=0,d++,d>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;function d(f,p){const m=this.nestingOptionsSeparator;if(f.indexOf(m)<0)return f;const _=f.split(new RegExp(`${m}[ ]*{`));let g=`{${_[1]}`;f=_[0],g=this.interpolate(g,u);const S=g.match(/'/g),M=g.match(/"/g);(S&&S.length%2===0&&!M||M.length%2!==0)&&(g=g.replace(/'/g,'"'));try{u=JSON.parse(g),p&&(u={...p,...u})}catch(T){return this.logger.warn(`failed parsing options string in nesting for key ${f}`,T),`${f}${m}${g}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,f}for(;o=this.nestingRegexp.exec(e);){let f=[];u={...i},u=u.replace&&typeof u.replace!="string"?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let p=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const m=o[1].split(this.formatSeparator).map(_=>_.trim());o[1]=m.shift(),f=m,p=!0}if(l=t(d.call(this,o[1].trim(),u),u),l&&o[0]===e&&typeof l!="string")return l;typeof l!="string"&&(l=cg(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),l=""),p&&(l=f.reduce((m,_)=>this.format(m,_,i.lng,{...i,interpolationkey:o[1].trim()}),l.trim())),e=e.replace(o[0],l),this.regexp.lastIndex=0}return e}}function kT(s){let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const i=s.split("(");e=i[0].toLowerCase().trim();const o=i[1].substring(0,i[1].length-1);e==="currency"&&o.indexOf(":")<0?t.currency||(t.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?t.range||(t.range=o.trim()):o.split(";").forEach(u=>{if(!u)return;const[d,...f]=u.split(":"),p=f.join(":").trim().replace(/^'+|'+$/g,"");t[d.trim()]||(t[d.trim()]=p),p==="false"&&(t[d.trim()]=!1),p==="true"&&(t[d.trim()]=!0),isNaN(p)||(t[d.trim()]=parseInt(p,10))})}return{formatName:e,formatOptions:t}}function js(s){const e={};return function(i,o,l){const u=o+JSON.stringify(l);let d=e[u];return d||(d=s(Wl(o),l),e[u]=d),d(i)}}class zT{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=_i.create("formatter"),this.options=e,this.formats={number:js((t,i)=>{const o=new Intl.NumberFormat(t,{...i});return l=>o.format(l)}),currency:js((t,i)=>{const o=new Intl.NumberFormat(t,{...i,style:"currency"});return l=>o.format(l)}),datetime:js((t,i)=>{const o=new Intl.DateTimeFormat(t,{...i});return l=>o.format(l)}),relativetime:js((t,i)=>{const o=new Intl.RelativeTimeFormat(t,{...i});return l=>o.format(l,i.range||"day")}),list:js((t,i)=>{const o=new Intl.ListFormat(t,{...i});return l=>o.format(l)})},this.init(e)}init(e){const i=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=i.formatSeparator?i.formatSeparator:i.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=js(t)}format(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return t.split(this.formatSeparator).reduce((d,f)=>{const{formatName:p,formatOptions:m}=kT(f);if(this.formats[p]){let _=d;try{const g=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},S=g.locale||g.lng||o.locale||o.lng||i;_=this.formats[p](d,S,{...m,...o,...g})}catch(g){this.logger.warn(g)}return _}else this.logger.warn(`there was no format function for ${p}`);return d},e)}}function BT(s,e){s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)}class HT extends nc{constructor(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=o,this.logger=_i.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,o.backend,o)}queueLoad(e,t,i,o){const l={},u={},d={},f={};return e.forEach(p=>{let m=!0;t.forEach(_=>{const g=`${p}|${_}`;!i.reload&&this.store.hasResourceBundle(p,_)?this.state[g]=2:this.state[g]<0||(this.state[g]===1?u[g]===void 0&&(u[g]=!0):(this.state[g]=1,m=!1,u[g]===void 0&&(u[g]=!0),l[g]===void 0&&(l[g]=!0),f[_]===void 0&&(f[_]=!0)))}),m||(d[p]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(f)}}loaded(e,t,i){const o=e.split("|"),l=o[0],u=o[1];t&&this.emit("failedLoading",l,u,t),i&&this.store.addResourceBundle(l,u,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2;const d={};this.queue.forEach(f=>{ET(f.loaded,[l],u),BT(f,e),t&&f.errors.push(t),f.pendingCount===0&&!f.done&&(Object.keys(f.loaded).forEach(p=>{d[p]||(d[p]={});const m=f.loaded[p];m.length&&m.forEach(_=>{d[p][_]===void 0&&(d[p][_]=!0)})}),f.done=!0,f.errors.length?f.callback(f.errors):f.callback())}),this.emit("loaded",d),this.queue=this.queue.filter(f=>!f.done)}read(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!e.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:o,wait:l,callback:u});return}this.readingCalls++;const d=(p,m)=>{if(this.readingCalls--,this.waitingReads.length>0){const _=this.waitingReads.shift();this.read(_.lng,_.ns,_.fcName,_.tried,_.wait,_.callback)}if(p&&m&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,o+1,l*2,u)},l);return}u(p,m)},f=this.backend[i].bind(this.backend);if(f.length===2){try{const p=f(e,t);p&&typeof p.then=="function"?p.then(m=>d(null,m)).catch(d):d(null,p)}catch(p){d(p)}return}return f(e,t,d)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();typeof e=="string"&&(e=this.languageUtils.toResolveHierarchy(e)),typeof t=="string"&&(t=[t]);const l=this.queueLoad(e,t,i,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),o=i[0],l=i[1];this.read(o,l,"read",void 0,void 0,(u,d)=>{u&&this.logger.warn(`${t}loading namespace ${l} for language ${o} failed`,u),!u&&d&&this.logger.log(`${t}loaded namespace ${l} for language ${o}`,d),this.loaded(e,u,d)})}saveMissing(e,t,i,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const f={...u,isUpdate:l},p=this.backend.create.bind(this.backend);if(p.length<6)try{let m;p.length===5?m=p(e,t,i,o,f):m=p(e,t,i,o),m&&typeof m.then=="function"?m.then(_=>d(null,_)).catch(d):d(null,m)}catch(m){d(m)}else p(e,t,i,o,d,f)}!e||!e[0]||this.store.addResource(e[0],t,i,o)}}}function gg(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){let t={};if(typeof e[1]=="object"&&(t=e[1]),typeof e[1]=="string"&&(t.defaultValue=e[1]),typeof e[2]=="string"&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const i=e[3]||e[2];Object.keys(i).forEach(o=>{t[o]=i[o]})}return t},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function vg(s){return typeof s.ns=="string"&&(s.ns=[s.ns]),typeof s.fallbackLng=="string"&&(s.fallbackLng=[s.fallbackLng]),typeof s.fallbackNS=="string"&&(s.fallbackNS=[s.fallbackNS]),s.supportedLngs&&s.supportedLngs.indexOf("cimode")<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),s}function Dl(){}function VT(s){Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})}class ta extends nc{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=vg(e),this.services={},this.logger=_i,this.modules={external:[]},VT(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(typeof t.ns=="string"?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const o=gg();this.options={...o,...this.options,...vg(t)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...o.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);function l(m){return m?typeof m=="function"?new m:m:null}if(!this.options.isClone){this.modules.logger?_i.init(l(this.modules.logger),this.options):_i.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:typeof Intl<"u"&&(m=zT);const _=new hg(this.options);this.store=new dg(this.options.resources,this.options);const g=this.services;g.logger=_i,g.resourceStore=this.store,g.languageUtils=_,g.pluralResolver=new OT(_,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),m&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(g.formatter=l(m),g.formatter.init(g,this.options),this.options.interpolation.format=g.formatter.format.bind(g.formatter)),g.interpolator=new FT(this.options),g.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},g.backendConnector=new HT(l(this.modules.backend),g.resourceStore,g,this.options),g.backendConnector.on("*",function(S){for(var M=arguments.length,T=new Array(M>1?M-1:0),x=1;x<M;x++)T[x-1]=arguments[x];e.emit(S,...T)}),this.modules.languageDetector&&(g.languageDetector=l(this.modules.languageDetector),g.languageDetector.init&&g.languageDetector.init(g,this.options.detection,this.options)),this.modules.i18nFormat&&(g.i18nFormat=l(this.modules.i18nFormat),g.i18nFormat.init&&g.i18nFormat.init(this)),this.translator=new Xl(this.services,this.options),this.translator.on("*",function(S){for(var M=arguments.length,T=new Array(M>1?M-1:0),x=1;x<M;x++)T[x-1]=arguments[x];e.emit(S,...T)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Dl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=function(){return e.store[m](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=function(){return e.store[m](...arguments),e}});const f=Wo(),p=()=>{const m=(_,g)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),f.resolve(g),i(_,g)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initImmediate?p():setTimeout(p,0),f}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Dl;const o=typeof e=="string"?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(o&&o.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const l=[],u=d=>{if(!d||d==="cimode")return;this.services.languageUtils.toResolveHierarchy(d).forEach(p=>{p!=="cimode"&&l.indexOf(p)<0&&l.push(p)})};o?u(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(f=>u(f)),this.options.preload&&this.options.preload.forEach(d=>u(d)),this.services.backendConnector.load(l,this.options.ns,d=>{!d&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(d)})}else i(null)}reloadResources(e,t,i){const o=Wo();return e||(e=this.languages),t||(t=this.options.ns),i||(i=Dl),this.services.backendConnector.reload(e,t,l=>{o.resolve(),i(l)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&hv.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const o=Wo();this.emit("languageChanging",e);const l=f=>{this.language=f,this.languages=this.services.languageUtils.toResolveHierarchy(f),this.resolvedLanguage=void 0,this.setResolvedLanguage(f)},u=(f,p)=>{p?(l(p),this.translator.changeLanguage(p),this.isLanguageChangingTo=void 0,this.emit("languageChanged",p),this.logger.log("languageChanged",p)):this.isLanguageChangingTo=void 0,o.resolve(function(){return i.t(...arguments)}),t&&t(f,function(){return i.t(...arguments)})},d=f=>{!e&&!f&&this.services.languageDetector&&(f=[]);const p=typeof f=="string"?f:this.services.languageUtils.getBestMatchFromCodes(f);p&&(this.language||l(p),this.translator.language||this.translator.changeLanguage(p),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(p)),this.loadResources(p,m=>{u(m,p)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?d(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(d):this.services.languageDetector.detect(d):d(e),o}getFixedT(e,t,i){var o=this;const l=function(u,d){let f;if(typeof d!="object"){for(var p=arguments.length,m=new Array(p>2?p-2:0),_=2;_<p;_++)m[_-2]=arguments[_];f=o.options.overloadTranslationOptionHandler([u,d].concat(m))}else f={...d};f.lng=f.lng||l.lng,f.lngs=f.lngs||l.lngs,f.ns=f.ns||l.ns,f.keyPrefix=f.keyPrefix||i||l.keyPrefix;const g=o.options.keySeparator||".";let S;return f.keyPrefix&&Array.isArray(u)?S=u.map(M=>`${f.keyPrefix}${g}${M}`):S=f.keyPrefix?`${f.keyPrefix}${g}${u}`:u,o.t(S,f)};return typeof e=="string"?l.lng=e:l.lngs=e,l.ns=t,l.keyPrefix=i,l}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const u=(d,f)=>{const p=this.services.backendConnector.state[`${d}|${f}`];return p===-1||p===2};if(t.precheck){const d=t.precheck(this,u);if(d!==void 0)return d}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(i,e)&&(!o||u(l,e)))}loadNamespaces(e,t){const i=Wo();return this.options.ns?(typeof e=="string"&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=Wo();typeof e=="string"&&(e=[e]);const o=this.options.preload||[],l=e.filter(u=>o.indexOf(u)<0);return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{i.resolve(),t&&t(u)}),i):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new hg(gg());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new ta(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Dl;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},l=new ta(o);return(e.debug!==void 0||e.prefix!==void 0)&&(l.logger=l.logger.clone(e)),["store","services","language"].forEach(d=>{l[d]=this[d]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},i&&(l.store=new dg(this.store.data,o),l.services.resourceStore=l.store),l.translator=new Xl(l.services,o),l.translator.on("*",function(d){for(var f=arguments.length,p=new Array(f>1?f-1:0),m=1;m<f;m++)p[m-1]=arguments[m];l.emit(d,...p)}),l.init(o,t),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ln=ta.createInstance();ln.createInstance=ta.createInstance;ln.createInstance;ln.dir;ln.init;ln.loadResources;ln.reloadResources;ln.use;ln.changeLanguage;ln.getFixedT;ln.t;ln.exists;ln.setDefaultNamespace;ln.hasLoadedNamespace;ln.loadNamespaces;ln.loadLanguages;const GT={home:"Home",KnowMe:"Know Me More",aboutMe:"About Me",whatdoIoffer:"What Do I Offer?",training:"Training",skills:"Skills",certifications:"Certifications",contact:"Contact",helloWorld:"Hello World,",Im:"I'm Andrea, a Web Developer"},jT={professionalism:{title:"100% professionalism",description:"I am committed to offering you a service of quality and exceptional professionalism, in the creation of your website. I am here to provide you with a web design and functionality experience, fast, precise, and adapted to all your needs."},advice:{title:"I advise you to choose the best option for your company",description:"I am here to help you find the best solution for your project. If you need guidance on the best available options, I will be happy to offer you my best option for you and your work, the same if you already have a website and want to adapt a new design or functionality."},devices:{title:"Your website on any device",description:"I work diligently to ensure that each element of your website is perfectly optimized and adaptable to different screen sizes. Nowadays, we navigate everything towards mobile devices, so it is important to dedicate a part of the development to responsive design."}},WT={markupLanguage:"Deep domain of markup language, allowing me to create and structure content clearly and concisely.",webInterfaceDesign:"I create and design web interfaces with style and elegance, without forgetting responsiveness on all devices.",javascriptKnowledge:"Solid knowledge of the main functionalities of Javascript, and I continue to learn continuously.",reactExperience:"I have been perfecting my skills in React for several months now, this very page is built in React.",databaseExperience:"My experience covers fundamental aspects such as creating databases and collections, designing basic queries, and document manipulation.",bootstrapKnowledge:"Good knowledge of Bootstrap, I often use it in various projects.",dailyUsage:"In my daily life, I cannot do without Git, it has accompanied me throughout this adventure, 100% of my time.",gitExperience:"Like Github, Git has always been in my learning course, studying has been daily.",tailwindExperience:"I have worked diligently with Tailwind, which has provided me with a deep and balanced mastery of this framework."},XT={june:"June 2023",course:"Introduction Course",coursetitle:"to Web Development: HTML and CSS (I)",summary:"Summary",topics:{history:"History of the Web",functioning:"How the Web Works",writing:"Writing for the Web",publication:"Publishing a Website",page:"Creating a Web Page"}},$T={july:"July 2023",course:"Introduction",coursetitle:"to Web Development: HTML and CSS (II)",summary:"Summary",topics:{presentationDefinition:"How the presentation of a web page is defined",elementsPresentationDefinition:"How the presentation of the elements of a web page is defined",webSuccessAchievement:"How to achieve success for a web page",webLayout:"How to layout a web page"}},qT={august:"August 2023",course:"Build Responsive Real World Websites with HTML AND CSS (Udemy)",summary:"Summary",topics:{htmlFundamentals:"HTML Fundamentals",cssFundamentals:"CSS Fundamentals",layouts:"Layouts",components:"Components",projects:"Projects"}},YT={certification_info:{title:"September 2023",subtitle:"Responsive Web Design Developer Certification",image_source:"https://www.arnoldgelacio.com/images/skills/logo-freecodecamp.png",summary:{title:"Summary 300h",details:["Build a Survey Form","Build a tribute page","Build a Technical Documentation Page","Build a Personal Portfolio Page"]}}},KT={contactUs:"Contact Us",privacyPolicy:"Privacy Policy"},ZT={header:GT,sectionInformation:jT,skills:WT,certificationsGoogle:XT,certificationsGoogle1:$T,certificationsUdemy:qT,certificationsFreeCodeCamp:YT,footer:KT},JT={home:"Inicio",KnowMe:"Conóceme un poco más",aboutMe:"Sobre mí",whatdoIoffer:"¿Qué ofrezco?",training:"Formación",skills:"Habilidades",certifications:"Certificaciones",contact:"Contacto",helloWorld:"Hola mundo!",Im:"soy Andrea, una programadora Web"},QT={professionalism:{title:"100% profesionalidad",description:"Me comprometo a ofrecerte un servicio de calidad y profesionalidad excepcional, en la creación de tu página web. Estoy aquí para brindarte una experiencia de diseño web y de funcionalidad, rápida, precisa y adaptada a todas tus necesidades."},advice:{title:"Te aconsejo elegir la mejor opción para tu empresa",description:"Estoy aquí para ayudarte a encontrar la mejor solución para tu proyecto. Si necesitas orientación sobre las mejores opciones disponibles, estaré encantado de ofrecerte mi mejor opción para ti y tu trabajo, lo mismo si ya tienes un sitio web y deseas adaptar un nuevo diseño o funcionalidad."},devices:{title:"Tu sitio web en cualquier dispositivo",description:"Trabajo diligentemente para asegurarme de que cada elemento de tu sitio web esté perfectamente optimizado y sea adaptable a diferentes tamaños de pantalla. Hoy en día, navegamos hacia los dispositivos móviles, por lo que es importante dedicar una parte del desarrollo al diseño responsivo."}},eA={markupLanguage:"Dominio profundo del lenguaje de marcado, lo que me permite crear y estructurar contenido de manera clara y concisa.",webInterfaceDesign:"Creo y diseño interfaces web con estilo y elegancia, sin olvidar la responsividad en todos los dispositivos.",javascriptKnowledge:"Conocimiento sólido de las principales funcionalidades de Javascript, y sigo en continuo aprendizaje.",reactExperience:"Actualmente llevo varios meses perfeccionándome en el dominio de React, esta misma página está construida en React.",databaseExperience:"Mi experiencia abarca aspectos fundamentales como creación de bases de datos y colecciones, diseño de consultas básicas y manipulación de documentos.",bootstrapKnowledge:"Buen conocimiento de Bootstrap, suelo utilizarlo en varios proyectos.",dailyUsage:"En mi día a día, no puedo prescindir de Git, me ha acompañado en toda esta aventura, el 100% de mi tiempo.",gitExperience:"Al igual que Github, Git siempre ha estado en mi curso de aprendizaje, el estudio ha sido diario.",tailwindExperience:"He trabajado asiduamente con Tailwind, lo que me ha proporcionado un dominio profundo y equilibrado de este framework."},tA={june:"Junio de 2023",course:"Curso de introducción",coursetitle:"al desarrollo web: HTML y CSS (I)",summary:"Resumen",topics:{history:"Historia de la Web",functioning:"Cómo funciona la Web",writing:"Escritura para la Web",publication:"Publicación de un sitio web",page:"Creación de una página web"}},nA={july:"Julio 2023",course:"Curso de introducción",coursetitle:"al desarrollo web: HTML and CSS (II)",summary:"Sumario",topics:{presentationDefinition:"Cómo se define la presentación de una página web",elementsPresentationDefinition:"Cómo se define la presentación de los elementos de una página web",webSuccessAchievement:"Cómo se logra que una página web tenga éxito",webLayout:"Cómo se maqueta una página web"}},iA={august:"Agosto 2023",course:"Construcción de sitios web responsivos del mundo real con HTML y CSS (Udemy)",summary:"Sumario",topics:{htmlFundamentals:"Fundamentos de HTML",cssFundamentals:"Fundamentos de CSS",layouts:"Diseños",components:"Componentes",projects:"Proyectos"}},rA={certification_info:{title:"Setiembre 2023",subtitle:"Certificación de Diseño Web Responsivo i Deserrollo",image_source:"https://www.arnoldgelacio.com/images/skills/logo-freecodecamp.png",summary:{title:"Resumen 300h",details:["Construeix un formulari d'enquesta","Construeix una pàgina de tribut","Construeix una pàgina de documentació tècnica","Construeix una pàgina de cartera personal"]}}},sA={text:"Diseñadora de páginas web y desarrolladora web:",contactUs:"Contáctenos",privacyPolicy:"Política de privacidad"},oA={header:JT,sectionInformation:QT,skills:eA,certificationsGoogle:tA,certificationsGoogle1:nA,certificationsUdemy:iA,certificationsFreeCodeCamp:rA,footer:sA},aA={home:"Inici",KnowMe:"Coneix-me una mica més",aboutMe:"Sobre mi",whatdoIoffer:"Què ofereixo?",training:"Formació",skills:"Competències",certifications:"Certificacions",contact:"Contacte",helloWorld:"Hola món!",Im:"sóc Andrea, una programadora web"},lA={professionalism:{title:"100% professionalitat",description:"Estic compromès a oferir-te un servei de qualitat i professionalitat excepcional, en la creació del teu lloc web. Estic aquí per proporcionar-te una experiència de disseny web i funcionalitat, ràpida, precisa i adaptada a totes les teves necessitats."},advice:{title:"T'aconsello a escollir la millor opció per a la teva empresa",description:"Estic aquí per ajudar-te a trobar la millor solució per al teu projecte. Si necessites orientació sobre les millors opcions disponibles, estaré encantat de oferir-te la millor opció per a tu i el teu treball, el mateix si ja tens un lloc web i vols adaptar un nou disseny o funcionalitat."},devices:{title:"El teu lloc web en qualsevol dispositiu",description:"Treballo diligentment per assegurar-me que cada element del teu lloc web estigui perfectament optimitzat i adaptable a diferents mides de pantalla. Avui en dia, naveguem cap a dispositius mòbils, així que és important dedicar una part del desenvolupament al disseny adaptable."}},cA={markupLanguage:"Domini profund del llenguatge de marcat, el que em permet crear i estructurar contingut de manera clara i concisa.",webInterfaceDesign:"Creo i dissenyo interfícies web amb estil i elegància, sense oblidar la responsivitat en tots els dispositius.",javascriptKnowledge:"Coneixement sòlid de les principals funcionalitats de Javascript, i segueixo en continu aprenentatge.",reactExperience:"Actualment porto diversos mesos perfeccionant-me en el domini de React, aquesta mateixa pàgina està construïda en React.",databaseExperience:"La meva experiència abasta aspectes fonamentals com la creació de bases de dades i col·leccions, disseny de consultes bàsiques i manipulació de documents.",bootstrapKnowledge:"Bon coneixement de Bootstrap, solc utilitzar-lo en diversos projectes.",dailyUsage:"En el meu dia a dia, no puc prescindir de Git, m'ha acompanyat en tota aquesta aventura, el 100% del meu temps.",gitExperience:"Al igual que Github, Git sempre ha estat en el meu curs d'aprenentatge, l'estudi ha estat diari.",tailwindExperience:"He treballat assíduament amb Tailwind, el que m'ha proporcionat un domini profund i equilibrat d'aquest framework."},uA={june:"Juny de 2023",course:"Curs d'introducció",coursetitle:"al desenvolupament web: HTML i CSS (I)",summary:"Resum",topics:{history:"Història de la Web",functioning:"Com funciona la Web",writing:"Com s'escriu per a la Web",publication:"Publicació d'un lloc web",page:"Creació d'una pàgina web"}},dA={july:"Juliol 2023",course:"Curs d'introducció ",coursetitle:"al desenvolupament web: HTML and CSS (II)",summary:"Sumari",topics:{presentationDefinition:"Com es defineix la presentació d'una pàgina web",elementsPresentationDefinition:"Com es defineix la presentació dels elements d'una pàgina web",webSuccessAchievement:"Com aconseguir que una pàgina web tingui èxit",webLayout:"Com maquetar una pàgina web"}},fA={august:"Agost 2023",course:"Construcció de llocs web responsius del món real amb HTML i CSS (Udemy)",summary:"Resum",topics:{htmlFundamentals:"Fonaments d'HTML",cssFundamentals:"Fonaments de CSS",layouts:"Disposicions",components:"Components",projects:"Projectes"}},hA={certification_info:{title:"Setembre 2023",subtitle:"Certificació de Disseny Web Responsiu i Desenvolupament",image_source:"https://www.arnoldgelacio.com/images/skills/logo-freecodecamp.png",summary:{title:"Resum 300h",details:["Construeix un formulari d'enquesta","Construeix una pàgina de tribut","Construeix una pàgina de documentació tècnica","Construeix una pàgina de cartera personal"]}}},pA={text:"Dissenyadora de pàgines web i programadora web",contactUs:"Contacteu-nos",privacyPolicy:"Política de privacitat"},mA={header:aA,sectionInformation:lA,skills:cA,certificationsGoogle:uA,certificationsGoogle1:dA,certificationsUdemy:fA,certificationsFreeCodeCamp:hA,footer:pA};ln.use(gx).init({resources:{en:{translation:ZT},es:{translation:oA},ca:{translation:mA}},lng:"ca",fallbackLng:"en",interpolation:{escapeValue:!1}});function gA(){const{i18n:s}=no(),e=t=>{s.changeLanguage(t)};return N.jsxs("div",{children:[N.jsx("button",{onClick:()=>e("en"),className:"boton_lenguaje text-base text-white p-1 ml-2 mt-2 rounded font-bold",children:"English"}),N.jsx("button",{onClick:()=>e("es"),className:"boton_lenguaje text-base text-white p-1 ml-2 mt-2 rounded font-bold",children:"Español"}),N.jsx("button",{onClick:()=>e("ca"),className:"boton_lenguaje text-base text-white p-1 ml-2 mt-2 rounded font-bold mr-2",children:"Català"})]})}const vA=()=>N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:N.jsx("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),_A=()=>N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:N.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})});function xA(){const[s,e]=Ee.useState(!1);Ee.useEffect(()=>{localStorage.getItem("theme")==="dark"&&(window.document.documentElement.classList.add("dark"),e(!0))},[]);const t=()=>{s?(window.document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(localStorage.setItem("theme","dark"),window.document.documentElement.classList.add("dark")),e(!s)};return N.jsx(N.Fragment,{children:N.jsx(yx,{i18n:ln,children:N.jsx("div",{className:" dark:bg-zinc-800 ",children:N.jsxs("div",{children:[N.jsx("div",{className:"marquee-wrapper",children:N.jsx("div",{className:"marquee-content",children:N.jsxs("p",{children:["_WEB ",N.jsx("strong",{children:"DEVELOPER FRONTEND"}),"__",N.jsx("strong",{children:"H"}),"TML__ ",N.jsx("strong",{children:"C"}),"SS__",N.jsx("strong",{children:"S"}),"ASS__",N.jsx("strong",{children:"J"}),"S__",N.jsx("strong",{children:"R"}),"EACT__",N.jsx("strong",{children:"A"}),"NGULAR___WEB ",N.jsx("strong",{children:"DEVELOPER FRONTEND"}),"__",N.jsx("strong",{children:"H"}),"TML__ ",N.jsx("strong",{children:"C"}),"SS__",N.jsx("strong",{children:"S"}),"ASS__",N.jsx("strong",{children:"J"}),"S__",N.jsx("strong",{children:"R"}),"EACT__",N.jsx("strong",{children:"A"}),"NGULAR__"]})})}),N.jsxs("div",{className:"flex justify-end items-center",children:[N.jsx("button",{className:"w-8 h-8 text-yellow-300 bg-blue-200 dark:bg-zinc-700 dark:text-white flex justify-center items-center mt-2 rounded-full",onClick:t,"aria-label":`Toggle ${s?"light":"dark"} mode`,children:s?N.jsx(vA,{}):N.jsx(_A,{})}),N.jsx(gA,{})]}),N.jsx(xT,{})]})})})})}const yA=i_.createRoot(document.getElementById("root"));yA.render(N.jsx(N.Fragment,{children:N.jsx(xA,{})}));
