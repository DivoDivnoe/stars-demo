(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Fl={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:qc,function(e,t){var n=[],s=Object.getPrototypeOf,a=n.slice,f=n.flat?function(r){return n.flat.call(r)}:function(r){return n.concat.apply([],r)},c=n.push,d=n.indexOf,p={},g=p.toString,_=p.hasOwnProperty,x=_.toString,y=x.call(Object),T={},b=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},S=function(o){return o!=null&&o===o.window},m=e.document,B={type:!0,src:!0,nonce:!0,noModule:!0};function R(r,o,u){u=u||m;var h,v,M=u.createElement("script");if(M.text=r,o)for(h in B)v=o[h]||o.getAttribute&&o.getAttribute(h),v&&M.setAttribute(h,v);u.head.appendChild(M).parentNode.removeChild(M)}function U(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?p[g.call(r)]||"object":typeof r}var F="3.7.1",k=/HTML$/i,l=function(r,o){return new l.fn.init(r,o)};l.fn=l.prototype={jquery:F,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(r){return r==null?a.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=l.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return l.each(this,r)},map:function(r){return this.pushStack(l.map(this,function(o,u){return r.call(o,u,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,u=+r+(r<0?o:0);return this.pushStack(u>=0&&u<o?[this[u]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:n.sort,splice:n.splice},l.extend=l.fn.extend=function(){var r,o,u,h,v,M,E=arguments[0]||{},N=1,D=arguments.length,V=!1;for(typeof E=="boolean"&&(V=E,E=arguments[N]||{},N++),typeof E!="object"&&!b(E)&&(E={}),N===D&&(E=this,N--);N<D;N++)if((r=arguments[N])!=null)for(o in r)h=r[o],!(o==="__proto__"||E===h)&&(V&&h&&(l.isPlainObject(h)||(v=Array.isArray(h)))?(u=E[o],v&&!Array.isArray(u)?M=[]:!v&&!l.isPlainObject(u)?M={}:M=u,v=!1,E[o]=l.extend(V,M,h)):h!==void 0&&(E[o]=h));return E},l.extend({expando:"jQuery"+(F+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,u;return!r||g.call(r)!=="[object Object]"?!1:(o=s(r),o?(u=_.call(o,"constructor")&&o.constructor,typeof u=="function"&&x.call(u)===y):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,u){R(r,{nonce:o&&o.nonce},u)},each:function(r,o){var u,h=0;if(le(r))for(u=r.length;h<u&&o.call(r[h],h,r[h])!==!1;h++);else for(h in r)if(o.call(r[h],h,r[h])===!1)break;return r},text:function(r){var o,u="",h=0,v=r.nodeType;if(!v)for(;o=r[h++];)u+=l.text(o);return v===1||v===11?r.textContent:v===9?r.documentElement.textContent:v===3||v===4?r.nodeValue:u},makeArray:function(r,o){var u=o||[];return r!=null&&(le(Object(r))?l.merge(u,typeof r=="string"?[r]:r):c.call(u,r)),u},inArray:function(r,o,u){return o==null?-1:d.call(o,r,u)},isXMLDoc:function(r){var o=r&&r.namespaceURI,u=r&&(r.ownerDocument||r).documentElement;return!k.test(o||u&&u.nodeName||"HTML")},merge:function(r,o){for(var u=+o.length,h=0,v=r.length;h<u;h++)r[v++]=o[h];return r.length=v,r},grep:function(r,o,u){for(var h,v=[],M=0,E=r.length,N=!u;M<E;M++)h=!o(r[M],M),h!==N&&v.push(r[M]);return v},map:function(r,o,u){var h,v,M=0,E=[];if(le(r))for(h=r.length;M<h;M++)v=o(r[M],M,u),v!=null&&E.push(v);else for(M in r)v=o(r[M],M,u),v!=null&&E.push(v);return f(E)},guid:1,support:T}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=n[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){p["[object "+o+"]"]=o.toLowerCase()});function le(r){var o=!!r&&"length"in r&&r.length,u=U(r);return b(r)||S(r)?!1:u==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}function w(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var I=n.pop,me=n.sort,Me=n.splice,W="[\\x20\\t\\r\\n\\f]",ie=new RegExp("^"+W+"+|((?:^|[^\\\\])(?:\\\\.)*)"+W+"+$","g");l.contains=function(r,o){var u=o&&o.parentNode;return r===u||!!(u&&u.nodeType===1&&(r.contains?r.contains(u):r.compareDocumentPosition&&r.compareDocumentPosition(u)&16))};var ae=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ge(r,o){return o?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}l.escapeSelector=function(r){return(r+"").replace(ae,ge)};var oe=m,he=c;(function(){var r,o,u,h,v,M=he,E,N,D,V,te,ue=l.expando,K=0,Se=0,Je=Zr(),xt=Zr(),lt=Zr(),Yt=Zr(),Ht=function(C,H){return C===H&&(v=!0),0},Dn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Un="(?:\\\\[\\da-fA-F]{1,6}"+W+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",_t="\\["+W+"*("+Un+")(?:"+W+"*([*^$|!~]?=)"+W+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Un+"))|)"+W+"*\\]",vi=":("+Un+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+_t+")*)|.*)\\)|)",Mt=new RegExp(W+"+","g"),It=new RegExp("^"+W+"*,"+W+"*"),Tr=new RegExp("^"+W+"*([>+~]|"+W+")"+W+"*"),Ws=new RegExp(W+"|>"),In=new RegExp(vi),br=new RegExp("^"+Un+"$"),Nn={ID:new RegExp("^#("+Un+")"),CLASS:new RegExp("^\\.("+Un+")"),TAG:new RegExp("^("+Un+"|[*])"),ATTR:new RegExp("^"+_t),PSEUDO:new RegExp("^"+vi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+W+"*(even|odd|(([+-]|)(\\d*)n|)"+W+"*(?:([+-]|)"+W+"*(\\d+)|))"+W+"*\\)|)","i"),bool:new RegExp("^(?:"+Dn+")$","i"),needsContext:new RegExp("^"+W+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+W+"*((?:-\\d)?\\d*)"+W+"*\\)|)(?=[^-]|$)","i")},ti=/^(?:input|select|textarea|button)$/i,ni=/^h\d$/i,_n=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Xs=/[+~]/,Wn=new RegExp("\\\\[\\da-fA-F]{1,6}"+W+"?|\\\\([^\\r\\n\\f])","g"),Xn=function(C,H){var j="0x"+C.slice(1)-65536;return H||(j<0?String.fromCharCode(j+65536):String.fromCharCode(j>>10|55296,j&1023|56320))},Hc=function(){ii()},zc=Qr(function(C){return C.disabled===!0&&w(C,"fieldset")},{dir:"parentNode",next:"legend"});function Gc(){try{return E.activeElement}catch{}}try{M.apply(n=a.call(oe.childNodes),oe.childNodes),n[oe.childNodes.length].nodeType}catch{M={apply:function(H,j){he.apply(H,a.call(j))},call:function(H){he.apply(H,a.call(arguments,1))}}}function Et(C,H,j,J){var ce,Ae,Ue,Fe,Ie,pt,Ke,et=H&&H.ownerDocument,mt=H?H.nodeType:9;if(j=j||[],typeof C!="string"||!C||mt!==1&&mt!==9&&mt!==11)return j;if(!J&&(ii(H),H=H||E,D)){if(mt!==11&&(Ie=_n.exec(C)))if(ce=Ie[1]){if(mt===9)if(Ue=H.getElementById(ce)){if(Ue.id===ce)return M.call(j,Ue),j}else return j;else if(et&&(Ue=et.getElementById(ce))&&Et.contains(H,Ue)&&Ue.id===ce)return M.call(j,Ue),j}else{if(Ie[2])return M.apply(j,H.getElementsByTagName(C)),j;if((ce=Ie[3])&&H.getElementsByClassName)return M.apply(j,H.getElementsByClassName(ce)),j}if(!Yt[C+" "]&&(!V||!V.test(C))){if(Ke=C,et=H,mt===1&&(Ws.test(C)||Tr.test(C))){for(et=Xs.test(C)&&qs(H.parentNode)||H,(et!=H||!T.scope)&&((Fe=H.getAttribute("id"))?Fe=l.escapeSelector(Fe):H.setAttribute("id",Fe=ue)),pt=Ar(C),Ae=pt.length;Ae--;)pt[Ae]=(Fe?"#"+Fe:":scope")+" "+Jr(pt[Ae]);Ke=pt.join(",")}try{return M.apply(j,et.querySelectorAll(Ke)),j}catch{Yt(C,!0)}finally{Fe===ue&&H.removeAttribute("id")}}}return io(C.replace(ie,"$1"),H,j,J)}function Zr(){var C=[];function H(j,J){return C.push(j+" ")>o.cacheLength&&delete H[C.shift()],H[j+" "]=J}return H}function En(C){return C[ue]=!0,C}function Bi(C){var H=E.createElement("fieldset");try{return!!C(H)}catch{return!1}finally{H.parentNode&&H.parentNode.removeChild(H),H=null}}function kc(C){return function(H){return w(H,"input")&&H.type===C}}function Vc(C){return function(H){return(w(H,"input")||w(H,"button"))&&H.type===C}}function to(C){return function(H){return"form"in H?H.parentNode&&H.disabled===!1?"label"in H?"label"in H.parentNode?H.parentNode.disabled===C:H.disabled===C:H.isDisabled===C||H.isDisabled!==!C&&zc(H)===C:H.disabled===C:"label"in H?H.disabled===C:!1}}function xi(C){return En(function(H){return H=+H,En(function(j,J){for(var ce,Ae=C([],j.length,H),Ue=Ae.length;Ue--;)j[ce=Ae[Ue]]&&(j[ce]=!(J[ce]=j[ce]))})})}function qs(C){return C&&typeof C.getElementsByTagName<"u"&&C}function ii(C){var H,j=C?C.ownerDocument||C:oe;return j==E||j.nodeType!==9||!j.documentElement||(E=j,N=E.documentElement,D=!l.isXMLDoc(E),te=N.matches||N.webkitMatchesSelector||N.msMatchesSelector,N.msMatchesSelector&&oe!=E&&(H=E.defaultView)&&H.top!==H&&H.addEventListener("unload",Hc),T.getById=Bi(function(J){return N.appendChild(J).id=l.expando,!E.getElementsByName||!E.getElementsByName(l.expando).length}),T.disconnectedMatch=Bi(function(J){return te.call(J,"*")}),T.scope=Bi(function(){return E.querySelectorAll(":scope")}),T.cssHas=Bi(function(){try{return E.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),T.getById?(o.filter.ID=function(J){var ce=J.replace(Wn,Xn);return function(Ae){return Ae.getAttribute("id")===ce}},o.find.ID=function(J,ce){if(typeof ce.getElementById<"u"&&D){var Ae=ce.getElementById(J);return Ae?[Ae]:[]}}):(o.filter.ID=function(J){var ce=J.replace(Wn,Xn);return function(Ae){var Ue=typeof Ae.getAttributeNode<"u"&&Ae.getAttributeNode("id");return Ue&&Ue.value===ce}},o.find.ID=function(J,ce){if(typeof ce.getElementById<"u"&&D){var Ae,Ue,Fe,Ie=ce.getElementById(J);if(Ie){if(Ae=Ie.getAttributeNode("id"),Ae&&Ae.value===J)return[Ie];for(Fe=ce.getElementsByName(J),Ue=0;Ie=Fe[Ue++];)if(Ae=Ie.getAttributeNode("id"),Ae&&Ae.value===J)return[Ie]}return[]}}),o.find.TAG=function(J,ce){return typeof ce.getElementsByTagName<"u"?ce.getElementsByTagName(J):ce.querySelectorAll(J)},o.find.CLASS=function(J,ce){if(typeof ce.getElementsByClassName<"u"&&D)return ce.getElementsByClassName(J)},V=[],Bi(function(J){var ce;N.appendChild(J).innerHTML="<a id='"+ue+"' href='' disabled='disabled'></a><select id='"+ue+"-\r\\' disabled='disabled'><option selected=''></option></select>",J.querySelectorAll("[selected]").length||V.push("\\["+W+"*(?:value|"+Dn+")"),J.querySelectorAll("[id~="+ue+"-]").length||V.push("~="),J.querySelectorAll("a#"+ue+"+*").length||V.push(".#.+[+~]"),J.querySelectorAll(":checked").length||V.push(":checked"),ce=E.createElement("input"),ce.setAttribute("type","hidden"),J.appendChild(ce).setAttribute("name","D"),N.appendChild(J).disabled=!0,J.querySelectorAll(":disabled").length!==2&&V.push(":enabled",":disabled"),ce=E.createElement("input"),ce.setAttribute("name",""),J.appendChild(ce),J.querySelectorAll("[name='']").length||V.push("\\["+W+"*name"+W+"*="+W+`*(?:''|"")`)}),T.cssHas||V.push(":has"),V=V.length&&new RegExp(V.join("|")),Ht=function(J,ce){if(J===ce)return v=!0,0;var Ae=!J.compareDocumentPosition-!ce.compareDocumentPosition;return Ae||(Ae=(J.ownerDocument||J)==(ce.ownerDocument||ce)?J.compareDocumentPosition(ce):1,Ae&1||!T.sortDetached&&ce.compareDocumentPosition(J)===Ae?J===E||J.ownerDocument==oe&&Et.contains(oe,J)?-1:ce===E||ce.ownerDocument==oe&&Et.contains(oe,ce)?1:h?d.call(h,J)-d.call(h,ce):0:Ae&4?-1:1)}),E}Et.matches=function(C,H){return Et(C,null,null,H)},Et.matchesSelector=function(C,H){if(ii(C),D&&!Yt[H+" "]&&(!V||!V.test(H)))try{var j=te.call(C,H);if(j||T.disconnectedMatch||C.document&&C.document.nodeType!==11)return j}catch{Yt(H,!0)}return Et(H,E,null,[C]).length>0},Et.contains=function(C,H){return(C.ownerDocument||C)!=E&&ii(C),l.contains(C,H)},Et.attr=function(C,H){(C.ownerDocument||C)!=E&&ii(C);var j=o.attrHandle[H.toLowerCase()],J=j&&_.call(o.attrHandle,H.toLowerCase())?j(C,H,!D):void 0;return J!==void 0?J:C.getAttribute(H)},Et.error=function(C){throw new Error("Syntax error, unrecognized expression: "+C)},l.uniqueSort=function(C){var H,j=[],J=0,ce=0;if(v=!T.sortStable,h=!T.sortStable&&a.call(C,0),me.call(C,Ht),v){for(;H=C[ce++];)H===C[ce]&&(J=j.push(ce));for(;J--;)Me.call(C,j[J],1)}return h=null,C},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},o=l.expr={cacheLength:50,createPseudo:En,match:Nn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(C){return C[1]=C[1].replace(Wn,Xn),C[3]=(C[3]||C[4]||C[5]||"").replace(Wn,Xn),C[2]==="~="&&(C[3]=" "+C[3]+" "),C.slice(0,4)},CHILD:function(C){return C[1]=C[1].toLowerCase(),C[1].slice(0,3)==="nth"?(C[3]||Et.error(C[0]),C[4]=+(C[4]?C[5]+(C[6]||1):2*(C[3]==="even"||C[3]==="odd")),C[5]=+(C[7]+C[8]||C[3]==="odd")):C[3]&&Et.error(C[0]),C},PSEUDO:function(C){var H,j=!C[6]&&C[2];return Nn.CHILD.test(C[0])?null:(C[3]?C[2]=C[4]||C[5]||"":j&&In.test(j)&&(H=Ar(j,!0))&&(H=j.indexOf(")",j.length-H)-j.length)&&(C[0]=C[0].slice(0,H),C[2]=j.slice(0,H)),C.slice(0,3))}},filter:{TAG:function(C){var H=C.replace(Wn,Xn).toLowerCase();return C==="*"?function(){return!0}:function(j){return w(j,H)}},CLASS:function(C){var H=Je[C+" "];return H||(H=new RegExp("(^|"+W+")"+C+"("+W+"|$)"))&&Je(C,function(j){return H.test(typeof j.className=="string"&&j.className||typeof j.getAttribute<"u"&&j.getAttribute("class")||"")})},ATTR:function(C,H,j){return function(J){var ce=Et.attr(J,C);return ce==null?H==="!=":H?(ce+="",H==="="?ce===j:H==="!="?ce!==j:H==="^="?j&&ce.indexOf(j)===0:H==="*="?j&&ce.indexOf(j)>-1:H==="$="?j&&ce.slice(-j.length)===j:H==="~="?(" "+ce.replace(Mt," ")+" ").indexOf(j)>-1:H==="|="?ce===j||ce.slice(0,j.length+1)===j+"-":!1):!0}},CHILD:function(C,H,j,J,ce){var Ae=C.slice(0,3)!=="nth",Ue=C.slice(-4)!=="last",Fe=H==="of-type";return J===1&&ce===0?function(Ie){return!!Ie.parentNode}:function(Ie,pt,Ke){var et,mt,ke,wt,on,$t=Ae!==Ue?"nextSibling":"previousSibling",vn=Ie.parentNode,On=Fe&&Ie.nodeName.toLowerCase(),Hi=!Ke&&!Fe,tn=!1;if(vn){if(Ae){for(;$t;){for(ke=Ie;ke=ke[$t];)if(Fe?w(ke,On):ke.nodeType===1)return!1;on=$t=C==="only"&&!on&&"nextSibling"}return!0}if(on=[Ue?vn.firstChild:vn.lastChild],Ue&&Hi){for(mt=vn[ue]||(vn[ue]={}),et=mt[C]||[],wt=et[0]===K&&et[1],tn=wt&&et[2],ke=wt&&vn.childNodes[wt];ke=++wt&&ke&&ke[$t]||(tn=wt=0)||on.pop();)if(ke.nodeType===1&&++tn&&ke===Ie){mt[C]=[K,wt,tn];break}}else if(Hi&&(mt=Ie[ue]||(Ie[ue]={}),et=mt[C]||[],wt=et[0]===K&&et[1],tn=wt),tn===!1)for(;(ke=++wt&&ke&&ke[$t]||(tn=wt=0)||on.pop())&&!((Fe?w(ke,On):ke.nodeType===1)&&++tn&&(Hi&&(mt=ke[ue]||(ke[ue]={}),mt[C]=[K,tn]),ke===Ie)););return tn-=ce,tn===J||tn%J===0&&tn/J>=0}}},PSEUDO:function(C,H){var j,J=o.pseudos[C]||o.setFilters[C.toLowerCase()]||Et.error("unsupported pseudo: "+C);return J[ue]?J(H):J.length>1?(j=[C,C,"",H],o.setFilters.hasOwnProperty(C.toLowerCase())?En(function(ce,Ae){for(var Ue,Fe=J(ce,H),Ie=Fe.length;Ie--;)Ue=d.call(ce,Fe[Ie]),ce[Ue]=!(Ae[Ue]=Fe[Ie])}):function(ce){return J(ce,0,j)}):J}},pseudos:{not:En(function(C){var H=[],j=[],J=$s(C.replace(ie,"$1"));return J[ue]?En(function(ce,Ae,Ue,Fe){for(var Ie,pt=J(ce,null,Fe,[]),Ke=ce.length;Ke--;)(Ie=pt[Ke])&&(ce[Ke]=!(Ae[Ke]=Ie))}):function(ce,Ae,Ue){return H[0]=ce,J(H,null,Ue,j),H[0]=null,!j.pop()}}),has:En(function(C){return function(H){return Et(C,H).length>0}}),contains:En(function(C){return C=C.replace(Wn,Xn),function(H){return(H.textContent||l.text(H)).indexOf(C)>-1}}),lang:En(function(C){return br.test(C||"")||Et.error("unsupported lang: "+C),C=C.replace(Wn,Xn).toLowerCase(),function(H){var j;do if(j=D?H.lang:H.getAttribute("xml:lang")||H.getAttribute("lang"))return j=j.toLowerCase(),j===C||j.indexOf(C+"-")===0;while((H=H.parentNode)&&H.nodeType===1);return!1}}),target:function(C){var H=e.location&&e.location.hash;return H&&H.slice(1)===C.id},root:function(C){return C===N},focus:function(C){return C===Gc()&&E.hasFocus()&&!!(C.type||C.href||~C.tabIndex)},enabled:to(!1),disabled:to(!0),checked:function(C){return w(C,"input")&&!!C.checked||w(C,"option")&&!!C.selected},selected:function(C){return C.parentNode&&C.parentNode.selectedIndex,C.selected===!0},empty:function(C){for(C=C.firstChild;C;C=C.nextSibling)if(C.nodeType<6)return!1;return!0},parent:function(C){return!o.pseudos.empty(C)},header:function(C){return ni.test(C.nodeName)},input:function(C){return ti.test(C.nodeName)},button:function(C){return w(C,"input")&&C.type==="button"||w(C,"button")},text:function(C){var H;return w(C,"input")&&C.type==="text"&&((H=C.getAttribute("type"))==null||H.toLowerCase()==="text")},first:xi(function(){return[0]}),last:xi(function(C,H){return[H-1]}),eq:xi(function(C,H,j){return[j<0?j+H:j]}),even:xi(function(C,H){for(var j=0;j<H;j+=2)C.push(j);return C}),odd:xi(function(C,H){for(var j=1;j<H;j+=2)C.push(j);return C}),lt:xi(function(C,H,j){var J;for(j<0?J=j+H:j>H?J=H:J=j;--J>=0;)C.push(J);return C}),gt:xi(function(C,H,j){for(var J=j<0?j+H:j;++J<H;)C.push(J);return C})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=kc(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=Vc(r);function no(){}no.prototype=o.filters=o.pseudos,o.setFilters=new no;function Ar(C,H){var j,J,ce,Ae,Ue,Fe,Ie,pt=xt[C+" "];if(pt)return H?0:pt.slice(0);for(Ue=C,Fe=[],Ie=o.preFilter;Ue;){(!j||(J=It.exec(Ue)))&&(J&&(Ue=Ue.slice(J[0].length)||Ue),Fe.push(ce=[])),j=!1,(J=Tr.exec(Ue))&&(j=J.shift(),ce.push({value:j,type:J[0].replace(ie," ")}),Ue=Ue.slice(j.length));for(Ae in o.filter)(J=Nn[Ae].exec(Ue))&&(!Ie[Ae]||(J=Ie[Ae](J)))&&(j=J.shift(),ce.push({value:j,type:Ae,matches:J}),Ue=Ue.slice(j.length));if(!j)break}return H?Ue.length:Ue?Et.error(C):xt(C,Fe).slice(0)}function Jr(C){for(var H=0,j=C.length,J="";H<j;H++)J+=C[H].value;return J}function Qr(C,H,j){var J=H.dir,ce=H.next,Ae=ce||J,Ue=j&&Ae==="parentNode",Fe=Se++;return H.first?function(Ie,pt,Ke){for(;Ie=Ie[J];)if(Ie.nodeType===1||Ue)return C(Ie,pt,Ke);return!1}:function(Ie,pt,Ke){var et,mt,ke=[K,Fe];if(Ke){for(;Ie=Ie[J];)if((Ie.nodeType===1||Ue)&&C(Ie,pt,Ke))return!0}else for(;Ie=Ie[J];)if(Ie.nodeType===1||Ue)if(mt=Ie[ue]||(Ie[ue]={}),ce&&w(Ie,ce))Ie=Ie[J]||Ie;else{if((et=mt[Ae])&&et[0]===K&&et[1]===Fe)return ke[2]=et[2];if(mt[Ae]=ke,ke[2]=C(Ie,pt,Ke))return!0}return!1}}function js(C){return C.length>1?function(H,j,J){for(var ce=C.length;ce--;)if(!C[ce](H,j,J))return!1;return!0}:C[0]}function Wc(C,H,j){for(var J=0,ce=H.length;J<ce;J++)Et(C,H[J],j);return j}function es(C,H,j,J,ce){for(var Ae,Ue=[],Fe=0,Ie=C.length,pt=H!=null;Fe<Ie;Fe++)(Ae=C[Fe])&&(!j||j(Ae,J,ce))&&(Ue.push(Ae),pt&&H.push(Fe));return Ue}function Ys(C,H,j,J,ce,Ae){return J&&!J[ue]&&(J=Ys(J)),ce&&!ce[ue]&&(ce=Ys(ce,Ae)),En(function(Ue,Fe,Ie,pt){var Ke,et,mt,ke,wt=[],on=[],$t=Fe.length,vn=Ue||Wc(H||"*",Ie.nodeType?[Ie]:Ie,[]),On=C&&(Ue||!H)?es(vn,wt,C,Ie,pt):vn;if(j?(ke=ce||(Ue?C:$t||J)?[]:Fe,j(On,ke,Ie,pt)):ke=On,J)for(Ke=es(ke,on),J(Ke,[],Ie,pt),et=Ke.length;et--;)(mt=Ke[et])&&(ke[on[et]]=!(On[on[et]]=mt));if(Ue){if(ce||C){if(ce){for(Ke=[],et=ke.length;et--;)(mt=ke[et])&&Ke.push(On[et]=mt);ce(null,ke=[],Ke,pt)}for(et=ke.length;et--;)(mt=ke[et])&&(Ke=ce?d.call(Ue,mt):wt[et])>-1&&(Ue[Ke]=!(Fe[Ke]=mt))}}else ke=es(ke===Fe?ke.splice($t,ke.length):ke),ce?ce(null,Fe,ke,pt):M.apply(Fe,ke)})}function Ks(C){for(var H,j,J,ce=C.length,Ae=o.relative[C[0].type],Ue=Ae||o.relative[" "],Fe=Ae?1:0,Ie=Qr(function(et){return et===H},Ue,!0),pt=Qr(function(et){return d.call(H,et)>-1},Ue,!0),Ke=[function(et,mt,ke){var wt=!Ae&&(ke||mt!=u)||((H=mt).nodeType?Ie(et,mt,ke):pt(et,mt,ke));return H=null,wt}];Fe<ce;Fe++)if(j=o.relative[C[Fe].type])Ke=[Qr(js(Ke),j)];else{if(j=o.filter[C[Fe].type].apply(null,C[Fe].matches),j[ue]){for(J=++Fe;J<ce&&!o.relative[C[J].type];J++);return Ys(Fe>1&&js(Ke),Fe>1&&Jr(C.slice(0,Fe-1).concat({value:C[Fe-2].type===" "?"*":""})).replace(ie,"$1"),j,Fe<J&&Ks(C.slice(Fe,J)),J<ce&&Ks(C=C.slice(J)),J<ce&&Jr(C))}Ke.push(j)}return js(Ke)}function Xc(C,H){var j=H.length>0,J=C.length>0,ce=function(Ae,Ue,Fe,Ie,pt){var Ke,et,mt,ke=0,wt="0",on=Ae&&[],$t=[],vn=u,On=Ae||J&&o.find.TAG("*",pt),Hi=K+=vn==null?1:Math.random()||.1,tn=On.length;for(pt&&(u=Ue==E||Ue||pt);wt!==tn&&(Ke=On[wt])!=null;wt++){if(J&&Ke){for(et=0,!Ue&&Ke.ownerDocument!=E&&(ii(Ke),Fe=!D);mt=C[et++];)if(mt(Ke,Ue||E,Fe)){M.call(Ie,Ke);break}pt&&(K=Hi)}j&&((Ke=!mt&&Ke)&&ke--,Ae&&on.push(Ke))}if(ke+=wt,j&&wt!==ke){for(et=0;mt=H[et++];)mt(on,$t,Ue,Fe);if(Ae){if(ke>0)for(;wt--;)on[wt]||$t[wt]||($t[wt]=I.call(Ie));$t=es($t)}M.apply(Ie,$t),pt&&!Ae&&$t.length>0&&ke+H.length>1&&l.uniqueSort(Ie)}return pt&&(K=Hi,u=vn),on};return j?En(ce):ce}function $s(C,H){var j,J=[],ce=[],Ae=lt[C+" "];if(!Ae){for(H||(H=Ar(C)),j=H.length;j--;)Ae=Ks(H[j]),Ae[ue]?J.push(Ae):ce.push(Ae);Ae=lt(C,Xc(ce,J)),Ae.selector=C}return Ae}function io(C,H,j,J){var ce,Ae,Ue,Fe,Ie,pt=typeof C=="function"&&C,Ke=!J&&Ar(C=pt.selector||C);if(j=j||[],Ke.length===1){if(Ae=Ke[0]=Ke[0].slice(0),Ae.length>2&&(Ue=Ae[0]).type==="ID"&&H.nodeType===9&&D&&o.relative[Ae[1].type]){if(H=(o.find.ID(Ue.matches[0].replace(Wn,Xn),H)||[])[0],H)pt&&(H=H.parentNode);else return j;C=C.slice(Ae.shift().value.length)}for(ce=Nn.needsContext.test(C)?0:Ae.length;ce--&&(Ue=Ae[ce],!o.relative[Fe=Ue.type]);)if((Ie=o.find[Fe])&&(J=Ie(Ue.matches[0].replace(Wn,Xn),Xs.test(Ae[0].type)&&qs(H.parentNode)||H))){if(Ae.splice(ce,1),C=J.length&&Jr(Ae),!C)return M.apply(j,J),j;break}}return(pt||$s(C,Ke))(J,H,!D,j,!H||Xs.test(C)&&qs(H.parentNode)||H),j}T.sortStable=ue.split("").sort(Ht).join("")===ue,ii(),T.sortDetached=Bi(function(C){return C.compareDocumentPosition(E.createElement("fieldset"))&1}),l.find=Et,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Et.compile=$s,Et.select=io,Et.setDocument=ii,Et.tokenize=Ar,Et.escape=l.escapeSelector,Et.getText=l.text,Et.isXML=l.isXMLDoc,Et.selectors=l.expr,Et.support=l.support,Et.uniqueSort=l.uniqueSort})();var ve=function(r,o,u){for(var h=[],v=u!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(v&&l(r).is(u))break;h.push(r)}return h},de=function(r,o){for(var u=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&u.push(r);return u},Q=l.expr.match.needsContext,re=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Le(r,o,u){return b(o)?l.grep(r,function(h,v){return!!o.call(h,v,h)!==u}):o.nodeType?l.grep(r,function(h){return h===o!==u}):typeof o!="string"?l.grep(r,function(h){return d.call(o,h)>-1!==u}):l.filter(o,r,u)}l.filter=function(r,o,u){var h=o[0];return u&&(r=":not("+r+")"),o.length===1&&h.nodeType===1?l.find.matchesSelector(h,r)?[h]:[]:l.find.matches(r,l.grep(o,function(v){return v.nodeType===1}))},l.fn.extend({find:function(r){var o,u,h=this.length,v=this;if(typeof r!="string")return this.pushStack(l(r).filter(function(){for(o=0;o<h;o++)if(l.contains(v[o],this))return!0}));for(u=this.pushStack([]),o=0;o<h;o++)l.find(r,v[o],u);return h>1?l.uniqueSort(u):u},filter:function(r){return this.pushStack(Le(this,r||[],!1))},not:function(r){return this.pushStack(Le(this,r||[],!0))},is:function(r){return!!Le(this,typeof r=="string"&&Q.test(r)?l(r):r||[],!1).length}});var De,Oe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ve=l.fn.init=function(r,o,u){var h,v;if(!r)return this;if(u=u||De,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?h=[null,r,null]:h=Oe.exec(r),h&&(h[1]||!o))if(h[1]){if(o=o instanceof l?o[0]:o,l.merge(this,l.parseHTML(h[1],o&&o.nodeType?o.ownerDocument||o:m,!0)),re.test(h[1])&&l.isPlainObject(o))for(h in o)b(this[h])?this[h](o[h]):this.attr(h,o[h]);return this}else return v=m.getElementById(h[2]),v&&(this[0]=v,this.length=1),this;else return!o||o.jquery?(o||u).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(b(r))return u.ready!==void 0?u.ready(r):r(l)}return l.makeArray(r,this)};Ve.prototype=l.fn,De=l(m);var Ze=/^(?:parents|prev(?:Until|All))/,Ge={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(r){var o=l(r,this),u=o.length;return this.filter(function(){for(var h=0;h<u;h++)if(l.contains(this,o[h]))return!0})},closest:function(r,o){var u,h=0,v=this.length,M=[],E=typeof r!="string"&&l(r);if(!Q.test(r)){for(;h<v;h++)for(u=this[h];u&&u!==o;u=u.parentNode)if(u.nodeType<11&&(E?E.index(u)>-1:u.nodeType===1&&l.find.matchesSelector(u,r))){M.push(u);break}}return this.pushStack(M.length>1?l.uniqueSort(M):M)},index:function(r){return r?typeof r=="string"?d.call(l(r),this[0]):d.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function gt(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}l.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return ve(r,"parentNode")},parentsUntil:function(r,o,u){return ve(r,"parentNode",u)},next:function(r){return gt(r,"nextSibling")},prev:function(r){return gt(r,"previousSibling")},nextAll:function(r){return ve(r,"nextSibling")},prevAll:function(r){return ve(r,"previousSibling")},nextUntil:function(r,o,u){return ve(r,"nextSibling",u)},prevUntil:function(r,o,u){return ve(r,"previousSibling",u)},siblings:function(r){return de((r.parentNode||{}).firstChild,r)},children:function(r){return de(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(w(r,"template")&&(r=r.content||r),l.merge([],r.childNodes))}},function(r,o){l.fn[r]=function(u,h){var v=l.map(this,o,u);return r.slice(-5)!=="Until"&&(h=u),h&&typeof h=="string"&&(v=l.filter(h,v)),this.length>1&&(Ge[r]||l.uniqueSort(v),Ze.test(r)&&v.reverse()),this.pushStack(v)}});var Tt=/[^\x20\t\r\n\f]+/g;function rt(r){var o={};return l.each(r.match(Tt)||[],function(u,h){o[h]=!0}),o}l.Callbacks=function(r){r=typeof r=="string"?rt(r):l.extend({},r);var o,u,h,v,M=[],E=[],N=-1,D=function(){for(v=v||r.once,h=o=!0;E.length;N=-1)for(u=E.shift();++N<M.length;)M[N].apply(u[0],u[1])===!1&&r.stopOnFalse&&(N=M.length,u=!1);r.memory||(u=!1),o=!1,v&&(u?M=[]:M="")},V={add:function(){return M&&(u&&!o&&(N=M.length-1,E.push(u)),function te(ue){l.each(ue,function(K,Se){b(Se)?(!r.unique||!V.has(Se))&&M.push(Se):Se&&Se.length&&U(Se)!=="string"&&te(Se)})}(arguments),u&&!o&&D()),this},remove:function(){return l.each(arguments,function(te,ue){for(var K;(K=l.inArray(ue,M,K))>-1;)M.splice(K,1),K<=N&&N--}),this},has:function(te){return te?l.inArray(te,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return v=E=[],M=u="",this},disabled:function(){return!M},lock:function(){return v=E=[],!u&&!o&&(M=u=""),this},locked:function(){return!!v},fireWith:function(te,ue){return v||(ue=ue||[],ue=[te,ue.slice?ue.slice():ue],E.push(ue),o||D()),this},fire:function(){return V.fireWith(this,arguments),this},fired:function(){return!!h}};return V};function q(r){return r}function Ct(r){throw r}function ze(r,o,u,h){var v;try{r&&b(v=r.promise)?v.call(r).done(o).fail(u):r&&b(v=r.then)?v.call(r,o,u):o.apply(void 0,[r].slice(h))}catch(M){u.apply(void 0,[M])}}l.extend({Deferred:function(r){var o=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],u="pending",h={state:function(){return u},always:function(){return v.done(arguments).fail(arguments),this},catch:function(M){return h.then(null,M)},pipe:function(){var M=arguments;return l.Deferred(function(E){l.each(o,function(N,D){var V=b(M[D[4]])&&M[D[4]];v[D[1]](function(){var te=V&&V.apply(this,arguments);te&&b(te.promise)?te.promise().progress(E.notify).done(E.resolve).fail(E.reject):E[D[0]+"With"](this,V?[te]:arguments)})}),M=null}).promise()},then:function(M,E,N){var D=0;function V(te,ue,K,Se){return function(){var Je=this,xt=arguments,lt=function(){var Ht,Dn;if(!(te<D)){if(Ht=K.apply(Je,xt),Ht===ue.promise())throw new TypeError("Thenable self-resolution");Dn=Ht&&(typeof Ht=="object"||typeof Ht=="function")&&Ht.then,b(Dn)?Se?Dn.call(Ht,V(D,ue,q,Se),V(D,ue,Ct,Se)):(D++,Dn.call(Ht,V(D,ue,q,Se),V(D,ue,Ct,Se),V(D,ue,q,ue.notifyWith))):(K!==q&&(Je=void 0,xt=[Ht]),(Se||ue.resolveWith)(Je,xt))}},Yt=Se?lt:function(){try{lt()}catch(Ht){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(Ht,Yt.error),te+1>=D&&(K!==Ct&&(Je=void 0,xt=[Ht]),ue.rejectWith(Je,xt))}};te?Yt():(l.Deferred.getErrorHook?Yt.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Yt.error=l.Deferred.getStackHook()),e.setTimeout(Yt))}}return l.Deferred(function(te){o[0][3].add(V(0,te,b(N)?N:q,te.notifyWith)),o[1][3].add(V(0,te,b(M)?M:q)),o[2][3].add(V(0,te,b(E)?E:Ct))}).promise()},promise:function(M){return M!=null?l.extend(M,h):h}},v={};return l.each(o,function(M,E){var N=E[2],D=E[5];h[E[1]]=N.add,D&&N.add(function(){u=D},o[3-M][2].disable,o[3-M][3].disable,o[0][2].lock,o[0][3].lock),N.add(E[3].fire),v[E[0]]=function(){return v[E[0]+"With"](this===v?void 0:this,arguments),this},v[E[0]+"With"]=N.fireWith}),h.promise(v),r&&r.call(v,v),v},when:function(r){var o=arguments.length,u=o,h=Array(u),v=a.call(arguments),M=l.Deferred(),E=function(N){return function(D){h[N]=this,v[N]=arguments.length>1?a.call(arguments):D,--o||M.resolveWith(h,v)}};if(o<=1&&(ze(r,M.done(E(u)).resolve,M.reject,!o),M.state()==="pending"||b(v[u]&&v[u].then)))return M.then();for(;u--;)ze(v[u],E(u),M.reject);return M.promise()}});var Qe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(r,o){e.console&&e.console.warn&&r&&Qe.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},l.readyException=function(r){e.setTimeout(function(){throw r})};var We=l.Deferred();l.fn.ready=function(r){return We.then(r).catch(function(o){l.readyException(o)}),this},l.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(r!==!0&&--l.readyWait>0)&&We.resolveWith(m,[l]))}}),l.ready.then=We.then;function St(){m.removeEventListener("DOMContentLoaded",St),e.removeEventListener("load",St),l.ready()}m.readyState==="complete"||m.readyState!=="loading"&&!m.documentElement.doScroll?e.setTimeout(l.ready):(m.addEventListener("DOMContentLoaded",St),e.addEventListener("load",St));var je=function(r,o,u,h,v,M,E){var N=0,D=r.length,V=u==null;if(U(u)==="object"){v=!0;for(N in u)je(r,o,N,u[N],!0,M,E)}else if(h!==void 0&&(v=!0,b(h)||(E=!0),V&&(E?(o.call(r,h),o=null):(V=o,o=function(te,ue,K){return V.call(l(te),K)})),o))for(;N<D;N++)o(r[N],u,E?h:h.call(r[N],N,o(r[N],u)));return v?r:V?o.call(r):D?o(r[0],u):M},tt=/^-ms-/,vt=/-([a-z])/g;function Nt(r,o){return o.toUpperCase()}function yt(r){return r.replace(tt,"ms-").replace(vt,Nt)}var P=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function A(){this.expando=l.expando+A.uid++}A.uid=1,A.prototype={cache:function(r){var o=r[this.expando];return o||(o={},P(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,u){var h,v=this.cache(r);if(typeof o=="string")v[yt(o)]=u;else for(h in o)v[yt(h)]=o[h];return v},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][yt(o)]},access:function(r,o,u){return o===void 0||o&&typeof o=="string"&&u===void 0?this.get(r,o):(this.set(r,o,u),u!==void 0?u:o)},remove:function(r,o){var u,h=r[this.expando];if(h!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(yt):(o=yt(o),o=o in h?[o]:o.match(Tt)||[]),u=o.length;u--;)delete h[o[u]];(o===void 0||l.isEmptyObject(h))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!l.isEmptyObject(o)}};var z=new A,pe=new A,xe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ye=/[A-Z]/g;function Be(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:xe.test(r)?JSON.parse(r):r}function Ee(r,o,u){var h;if(u===void 0&&r.nodeType===1)if(h="data-"+o.replace(ye,"-$&").toLowerCase(),u=r.getAttribute(h),typeof u=="string"){try{u=Be(u)}catch{}pe.set(r,o,u)}else u=void 0;return u}l.extend({hasData:function(r){return pe.hasData(r)||z.hasData(r)},data:function(r,o,u){return pe.access(r,o,u)},removeData:function(r,o){pe.remove(r,o)},_data:function(r,o,u){return z.access(r,o,u)},_removeData:function(r,o){z.remove(r,o)}}),l.fn.extend({data:function(r,o){var u,h,v,M=this[0],E=M&&M.attributes;if(r===void 0){if(this.length&&(v=pe.get(M),M.nodeType===1&&!z.get(M,"hasDataAttrs"))){for(u=E.length;u--;)E[u]&&(h=E[u].name,h.indexOf("data-")===0&&(h=yt(h.slice(5)),Ee(M,h,v[h])));z.set(M,"hasDataAttrs",!0)}return v}return typeof r=="object"?this.each(function(){pe.set(this,r)}):je(this,function(N){var D;if(M&&N===void 0)return D=pe.get(M,r),D!==void 0||(D=Ee(M,r),D!==void 0)?D:void 0;this.each(function(){pe.set(this,r,N)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){pe.remove(this,r)})}}),l.extend({queue:function(r,o,u){var h;if(r)return o=(o||"fx")+"queue",h=z.get(r,o),u&&(!h||Array.isArray(u)?h=z.access(r,o,l.makeArray(u)):h.push(u)),h||[]},dequeue:function(r,o){o=o||"fx";var u=l.queue(r,o),h=u.length,v=u.shift(),M=l._queueHooks(r,o),E=function(){l.dequeue(r,o)};v==="inprogress"&&(v=u.shift(),h--),v&&(o==="fx"&&u.unshift("inprogress"),delete M.stop,v.call(r,E,M)),!h&&M&&M.empty.fire()},_queueHooks:function(r,o){var u=o+"queueHooks";return z.get(r,u)||z.access(r,u,{empty:l.Callbacks("once memory").add(function(){z.remove(r,[o+"queue",u])})})}}),l.fn.extend({queue:function(r,o){var u=2;return typeof r!="string"&&(o=r,r="fx",u--),arguments.length<u?l.queue(this[0],r):o===void 0?this:this.each(function(){var h=l.queue(this,r,o);l._queueHooks(this,r),r==="fx"&&h[0]!=="inprogress"&&l.dequeue(this,r)})},dequeue:function(r){return this.each(function(){l.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var u,h=1,v=l.Deferred(),M=this,E=this.length,N=function(){--h||v.resolveWith(M,[M])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";E--;)u=z.get(M[E],r+"queueHooks"),u&&u.empty&&(h++,u.empty.add(N));return N(),v.promise(o)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,O=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),fe=["Top","Right","Bottom","Left"],we=m.documentElement,Te=function(r){return l.contains(r.ownerDocument,r)},Pe={composed:!0};we.getRootNode&&(Te=function(r){return l.contains(r.ownerDocument,r)||r.getRootNode(Pe)===r.ownerDocument});var Xe=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&Te(r)&&l.css(r,"display")==="none"};function ut(r,o,u,h){var v,M,E=20,N=h?function(){return h.cur()}:function(){return l.css(r,o,"")},D=N(),V=u&&u[3]||(l.cssNumber[o]?"":"px"),te=r.nodeType&&(l.cssNumber[o]||V!=="px"&&+D)&&O.exec(l.css(r,o));if(te&&te[3]!==V){for(D=D/2,V=V||te[3],te=+D||1;E--;)l.style(r,o,te+V),(1-M)*(1-(M=N()/D||.5))<=0&&(E=0),te=te/M;te=te*2,l.style(r,o,te+V),u=u||[]}return u&&(te=+te||+D||0,v=u[1]?te+(u[1]+1)*u[2]:+u[2],h&&(h.unit=V,h.start=te,h.end=v)),v}var G={};function Re(r){var o,u=r.ownerDocument,h=r.nodeName,v=G[h];return v||(o=u.body.appendChild(u.createElement(h)),v=l.css(o,"display"),o.parentNode.removeChild(o),v==="none"&&(v="block"),G[h]=v,v)}function Z(r,o){for(var u,h,v=[],M=0,E=r.length;M<E;M++)h=r[M],h.style&&(u=h.style.display,o?(u==="none"&&(v[M]=z.get(h,"display")||null,v[M]||(h.style.display="")),h.style.display===""&&Xe(h)&&(v[M]=Re(h))):u!=="none"&&(v[M]="none",z.set(h,"display",u)));for(M=0;M<E;M++)v[M]!=null&&(r[M].style.display=v[M]);return r}l.fn.extend({show:function(){return Z(this,!0)},hide:function(){return Z(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){Xe(this)?l(this).show():l(this).hide()})}});var _e=/^(?:checkbox|radio)$/i,be=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ot=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=m.createDocumentFragment(),o=r.appendChild(m.createElement("div")),u=m.createElement("input");u.setAttribute("type","radio"),u.setAttribute("checked","checked"),u.setAttribute("name","t"),o.appendChild(u),T.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",T.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",T.option=!!o.lastChild})();var st={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};st.tbody=st.tfoot=st.colgroup=st.caption=st.thead,st.th=st.td,T.option||(st.optgroup=st.option=[1,"<select multiple='multiple'>","</select>"]);function at(r,o){var u;return typeof r.getElementsByTagName<"u"?u=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?u=r.querySelectorAll(o||"*"):u=[],o===void 0||o&&w(r,o)?l.merge([r],u):u}function qt(r,o){for(var u=0,h=r.length;u<h;u++)z.set(r[u],"globalEval",!o||z.get(o[u],"globalEval"))}var At=/<|&#?\w+;/;function fn(r,o,u,h,v){for(var M,E,N,D,V,te,ue=o.createDocumentFragment(),K=[],Se=0,Je=r.length;Se<Je;Se++)if(M=r[Se],M||M===0)if(U(M)==="object")l.merge(K,M.nodeType?[M]:M);else if(!At.test(M))K.push(o.createTextNode(M));else{for(E=E||ue.appendChild(o.createElement("div")),N=(be.exec(M)||["",""])[1].toLowerCase(),D=st[N]||st._default,E.innerHTML=D[1]+l.htmlPrefilter(M)+D[2],te=D[0];te--;)E=E.lastChild;l.merge(K,E.childNodes),E=ue.firstChild,E.textContent=""}for(ue.textContent="",Se=0;M=K[Se++];){if(h&&l.inArray(M,h)>-1){v&&v.push(M);continue}if(V=Te(M),E=at(ue.appendChild(M),"script"),V&&qt(E),u)for(te=0;M=E[te++];)ot.test(M.type||"")&&u.push(M)}return ue}var Wt=/^([^.]*)(?:\.(.+)|)/;function zn(){return!0}function Gn(){return!1}function _r(r,o,u,h,v,M){var E,N;if(typeof o=="object"){typeof u!="string"&&(h=h||u,u=void 0);for(N in o)_r(r,N,u,h,o[N],M);return r}if(h==null&&v==null?(v=u,h=u=void 0):v==null&&(typeof u=="string"?(v=h,h=void 0):(v=h,h=u,u=void 0)),v===!1)v=Gn;else if(!v)return r;return M===1&&(E=v,v=function(D){return l().off(D),E.apply(this,arguments)},v.guid=E.guid||(E.guid=l.guid++)),r.each(function(){l.event.add(this,o,v,h,u)})}l.event={global:{},add:function(r,o,u,h,v){var M,E,N,D,V,te,ue,K,Se,Je,xt,lt=z.get(r);if(P(r))for(u.handler&&(M=u,u=M.handler,v=M.selector),v&&l.find.matchesSelector(we,v),u.guid||(u.guid=l.guid++),(D=lt.events)||(D=lt.events=Object.create(null)),(E=lt.handle)||(E=lt.handle=function(Yt){return typeof l<"u"&&l.event.triggered!==Yt.type?l.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(Tt)||[""],V=o.length;V--;)N=Wt.exec(o[V])||[],Se=xt=N[1],Je=(N[2]||"").split(".").sort(),Se&&(ue=l.event.special[Se]||{},Se=(v?ue.delegateType:ue.bindType)||Se,ue=l.event.special[Se]||{},te=l.extend({type:Se,origType:xt,data:h,handler:u,guid:u.guid,selector:v,needsContext:v&&l.expr.match.needsContext.test(v),namespace:Je.join(".")},M),(K=D[Se])||(K=D[Se]=[],K.delegateCount=0,(!ue.setup||ue.setup.call(r,h,Je,E)===!1)&&r.addEventListener&&r.addEventListener(Se,E)),ue.add&&(ue.add.call(r,te),te.handler.guid||(te.handler.guid=u.guid)),v?K.splice(K.delegateCount++,0,te):K.push(te),l.event.global[Se]=!0)},remove:function(r,o,u,h,v){var M,E,N,D,V,te,ue,K,Se,Je,xt,lt=z.hasData(r)&&z.get(r);if(!(!lt||!(D=lt.events))){for(o=(o||"").match(Tt)||[""],V=o.length;V--;){if(N=Wt.exec(o[V])||[],Se=xt=N[1],Je=(N[2]||"").split(".").sort(),!Se){for(Se in D)l.event.remove(r,Se+o[V],u,h,!0);continue}for(ue=l.event.special[Se]||{},Se=(h?ue.delegateType:ue.bindType)||Se,K=D[Se]||[],N=N[2]&&new RegExp("(^|\\.)"+Je.join("\\.(?:.*\\.|)")+"(\\.|$)"),E=M=K.length;M--;)te=K[M],(v||xt===te.origType)&&(!u||u.guid===te.guid)&&(!N||N.test(te.namespace))&&(!h||h===te.selector||h==="**"&&te.selector)&&(K.splice(M,1),te.selector&&K.delegateCount--,ue.remove&&ue.remove.call(r,te));E&&!K.length&&((!ue.teardown||ue.teardown.call(r,Je,lt.handle)===!1)&&l.removeEvent(r,Se,lt.handle),delete D[Se])}l.isEmptyObject(D)&&z.remove(r,"handle events")}},dispatch:function(r){var o,u,h,v,M,E,N=new Array(arguments.length),D=l.event.fix(r),V=(z.get(this,"events")||Object.create(null))[D.type]||[],te=l.event.special[D.type]||{};for(N[0]=D,o=1;o<arguments.length;o++)N[o]=arguments[o];if(D.delegateTarget=this,!(te.preDispatch&&te.preDispatch.call(this,D)===!1)){for(E=l.event.handlers.call(this,D,V),o=0;(v=E[o++])&&!D.isPropagationStopped();)for(D.currentTarget=v.elem,u=0;(M=v.handlers[u++])&&!D.isImmediatePropagationStopped();)(!D.rnamespace||M.namespace===!1||D.rnamespace.test(M.namespace))&&(D.handleObj=M,D.data=M.data,h=((l.event.special[M.origType]||{}).handle||M.handler).apply(v.elem,N),h!==void 0&&(D.result=h)===!1&&(D.preventDefault(),D.stopPropagation()));return te.postDispatch&&te.postDispatch.call(this,D),D.result}},handlers:function(r,o){var u,h,v,M,E,N=[],D=o.delegateCount,V=r.target;if(D&&V.nodeType&&!(r.type==="click"&&r.button>=1)){for(;V!==this;V=V.parentNode||this)if(V.nodeType===1&&!(r.type==="click"&&V.disabled===!0)){for(M=[],E={},u=0;u<D;u++)h=o[u],v=h.selector+" ",E[v]===void 0&&(E[v]=h.needsContext?l(v,this).index(V)>-1:l.find(v,this,null,[V]).length),E[v]&&M.push(h);M.length&&N.push({elem:V,handlers:M})}}return V=this,D<o.length&&N.push({elem:V,handlers:o.slice(D)}),N},addProp:function(r,o){Object.defineProperty(l.Event.prototype,r,{enumerable:!0,configurable:!0,get:b(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(u){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:u})}})},fix:function(r){return r[l.expando]?r:new l.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return _e.test(o.type)&&o.click&&w(o,"input")&&kn(o,"click",!0),!1},trigger:function(r){var o=this||r;return _e.test(o.type)&&o.click&&w(o,"input")&&kn(o,"click"),!0},_default:function(r){var o=r.target;return _e.test(o.type)&&o.click&&w(o,"input")&&z.get(o,"click")||w(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function kn(r,o,u){if(!u){z.get(r,o)===void 0&&l.event.add(r,o,zn);return}z.set(r,o,!1),l.event.add(r,o,{namespace:!1,handler:function(h){var v,M=z.get(this,o);if(h.isTrigger&1&&this[o]){if(M)(l.event.special[o]||{}).delegateType&&h.stopPropagation();else if(M=a.call(arguments),z.set(this,o,M),this[o](),v=z.get(this,o),z.set(this,o,!1),M!==v)return h.stopImmediatePropagation(),h.preventDefault(),v}else M&&(z.set(this,o,l.event.trigger(M[0],M.slice(1),this)),h.stopPropagation(),h.isImmediatePropagationStopped=zn)}})}l.removeEvent=function(r,o,u){r.removeEventListener&&r.removeEventListener(o,u)},l.Event=function(r,o){if(!(this instanceof l.Event))return new l.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?zn:Gn,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&l.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:Gn,isPropagationStopped:Gn,isImmediatePropagationStopped:Gn,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=zn,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=zn,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=zn,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(r,o){function u(h){if(m.documentMode){var v=z.get(this,"handle"),M=l.event.fix(h);M.type=h.type==="focusin"?"focus":"blur",M.isSimulated=!0,v(h),M.target===M.currentTarget&&v(M)}else l.event.simulate(o,h.target,l.event.fix(h))}l.event.special[r]={setup:function(){var h;if(kn(this,r,!0),m.documentMode)h=z.get(this,o),h||this.addEventListener(o,u),z.set(this,o,(h||0)+1);else return!1},trigger:function(){return kn(this,r),!0},teardown:function(){var h;if(m.documentMode)h=z.get(this,o)-1,h?z.set(this,o,h):(this.removeEventListener(o,u),z.remove(this,o));else return!1},_default:function(h){return z.get(h.target,r)},delegateType:o},l.event.special[o]={setup:function(){var h=this.ownerDocument||this.document||this,v=m.documentMode?this:h,M=z.get(v,o);M||(m.documentMode?this.addEventListener(o,u):h.addEventListener(r,u,!0)),z.set(v,o,(M||0)+1)},teardown:function(){var h=this.ownerDocument||this.document||this,v=m.documentMode?this:h,M=z.get(v,o)-1;M?z.set(v,o,M):(m.documentMode?this.removeEventListener(o,u):h.removeEventListener(r,u,!0),z.remove(v,o))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){l.event.special[r]={delegateType:o,bindType:o,handle:function(u){var h,v=this,M=u.relatedTarget,E=u.handleObj;return(!M||M!==v&&!l.contains(v,M))&&(u.type=E.origType,h=E.handler.apply(this,arguments),u.type=o),h}}}),l.fn.extend({on:function(r,o,u,h){return _r(this,r,o,u,h)},one:function(r,o,u,h){return _r(this,r,o,u,h,1)},off:function(r,o,u){var h,v;if(r&&r.preventDefault&&r.handleObj)return h=r.handleObj,l(r.delegateTarget).off(h.namespace?h.origType+"."+h.namespace:h.origType,h.selector,h.handler),this;if(typeof r=="object"){for(v in r)this.off(v,o,r[v]);return this}return(o===!1||typeof o=="function")&&(u=o,o=void 0),u===!1&&(u=Gn),this.each(function(){l.event.remove(this,r,u,o)})}});var Yr=/<script|<style|<link/i,Ii=/checked\s*(?:[^=]|=\s*.checked.)/i,Kr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function $r(r,o){return w(r,"table")&&w(o.nodeType!==11?o:o.firstChild,"tr")&&l(r).children("tbody")[0]||r}function Ns(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function Os(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function L(r,o){var u,h,v,M,E,N,D;if(o.nodeType===1){if(z.hasData(r)&&(M=z.get(r),D=M.events,D)){z.remove(o,"handle events");for(v in D)for(u=0,h=D[v].length;u<h;u++)l.event.add(o,v,D[v][u])}pe.hasData(r)&&(E=pe.access(r),N=l.extend({},E),pe.set(o,N))}}function Y(r,o){var u=o.nodeName.toLowerCase();u==="input"&&_e.test(r.type)?o.checked=r.checked:(u==="input"||u==="textarea")&&(o.defaultValue=r.defaultValue)}function ne(r,o,u,h){o=f(o);var v,M,E,N,D,V,te=0,ue=r.length,K=ue-1,Se=o[0],Je=b(Se);if(Je||ue>1&&typeof Se=="string"&&!T.checkClone&&Ii.test(Se))return r.each(function(xt){var lt=r.eq(xt);Je&&(o[0]=Se.call(this,xt,lt.html())),ne(lt,o,u,h)});if(ue&&(v=fn(o,r[0].ownerDocument,!1,r,h),M=v.firstChild,v.childNodes.length===1&&(v=M),M||h)){for(E=l.map(at(v,"script"),Ns),N=E.length;te<ue;te++)D=v,te!==K&&(D=l.clone(D,!0,!0),N&&l.merge(E,at(D,"script"))),u.call(r[te],D,te);if(N)for(V=E[E.length-1].ownerDocument,l.map(E,Os),te=0;te<N;te++)D=E[te],ot.test(D.type||"")&&!z.access(D,"globalEval")&&l.contains(V,D)&&(D.src&&(D.type||"").toLowerCase()!=="module"?l._evalUrl&&!D.noModule&&l._evalUrl(D.src,{nonce:D.nonce||D.getAttribute("nonce")},V):R(D.textContent.replace(Kr,""),D,V))}return r}function $(r,o,u){for(var h,v=o?l.filter(o,r):r,M=0;(h=v[M])!=null;M++)!u&&h.nodeType===1&&l.cleanData(at(h)),h.parentNode&&(u&&Te(h)&&qt(at(h,"script")),h.parentNode.removeChild(h));return r}l.extend({htmlPrefilter:function(r){return r},clone:function(r,o,u){var h,v,M,E,N=r.cloneNode(!0),D=Te(r);if(!T.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!l.isXMLDoc(r))for(E=at(N),M=at(r),h=0,v=M.length;h<v;h++)Y(M[h],E[h]);if(o)if(u)for(M=M||at(r),E=E||at(N),h=0,v=M.length;h<v;h++)L(M[h],E[h]);else L(r,N);return E=at(N,"script"),E.length>0&&qt(E,!D&&at(r,"script")),N},cleanData:function(r){for(var o,u,h,v=l.event.special,M=0;(u=r[M])!==void 0;M++)if(P(u)){if(o=u[z.expando]){if(o.events)for(h in o.events)v[h]?l.event.remove(u,h):l.removeEvent(u,h,o.handle);u[z.expando]=void 0}u[pe.expando]&&(u[pe.expando]=void 0)}}}),l.fn.extend({detach:function(r){return $(this,r,!0)},remove:function(r){return $(this,r)},text:function(r){return je(this,function(o){return o===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return ne(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=$r(this,r);o.appendChild(r)}})},prepend:function(){return ne(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=$r(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return ne(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return ne(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(l.cleanData(at(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r??!1,o=o??r,this.map(function(){return l.clone(this,r,o)})},html:function(r){return je(this,function(o){var u=this[0]||{},h=0,v=this.length;if(o===void 0&&u.nodeType===1)return u.innerHTML;if(typeof o=="string"&&!Yr.test(o)&&!st[(be.exec(o)||["",""])[1].toLowerCase()]){o=l.htmlPrefilter(o);try{for(;h<v;h++)u=this[h]||{},u.nodeType===1&&(l.cleanData(at(u,!1)),u.innerHTML=o);u=0}catch{}}u&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return ne(this,arguments,function(o){var u=this.parentNode;l.inArray(this,r)<0&&(l.cleanData(at(this)),u&&u.replaceChild(o,this))},r)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){l.fn[r]=function(u){for(var h,v=[],M=l(u),E=M.length-1,N=0;N<=E;N++)h=N===E?this:this.clone(!0),l(M[N])[o](h),c.apply(v,h.get());return this.pushStack(v)}});var se=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ne=/^--/,He=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(r)},Ye=function(r,o,u){var h,v,M={};for(v in o)M[v]=r.style[v],r.style[v]=o[v];h=u.call(r);for(v in o)r.style[v]=M[v];return h},$e=new RegExp(fe.join("|"),"i");(function(){function r(){if(V){D.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",V.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",we.appendChild(D).appendChild(V);var te=e.getComputedStyle(V);u=te.top!=="1%",N=o(te.marginLeft)===12,V.style.right="60%",M=o(te.right)===36,h=o(te.width)===36,V.style.position="absolute",v=o(V.offsetWidth/3)===12,we.removeChild(D),V=null}}function o(te){return Math.round(parseFloat(te))}var u,h,v,M,E,N,D=m.createElement("div"),V=m.createElement("div");V.style&&(V.style.backgroundClip="content-box",V.cloneNode(!0).style.backgroundClip="",T.clearCloneStyle=V.style.backgroundClip==="content-box",l.extend(T,{boxSizingReliable:function(){return r(),h},pixelBoxStyles:function(){return r(),M},pixelPosition:function(){return r(),u},reliableMarginLeft:function(){return r(),N},scrollboxSize:function(){return r(),v},reliableTrDimensions:function(){var te,ue,K,Se;return E==null&&(te=m.createElement("table"),ue=m.createElement("tr"),K=m.createElement("div"),te.style.cssText="position:absolute;left:-11111px;border-collapse:separate",ue.style.cssText="box-sizing:content-box;border:1px solid",ue.style.height="1px",K.style.height="9px",K.style.display="block",we.appendChild(te).appendChild(ue).appendChild(K),Se=e.getComputedStyle(ue),E=parseInt(Se.height,10)+parseInt(Se.borderTopWidth,10)+parseInt(Se.borderBottomWidth,10)===ue.offsetHeight,we.removeChild(te)),E}}))})();function nt(r,o,u){var h,v,M,E,N=Ne.test(o),D=r.style;return u=u||He(r),u&&(E=u.getPropertyValue(o)||u[o],N&&E&&(E=E.replace(ie,"$1")||void 0),E===""&&!Te(r)&&(E=l.style(r,o)),!T.pixelBoxStyles()&&se.test(E)&&$e.test(o)&&(h=D.width,v=D.minWidth,M=D.maxWidth,D.minWidth=D.maxWidth=D.width=E,E=u.width,D.width=h,D.minWidth=v,D.maxWidth=M)),E!==void 0?E+"":E}function qe(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var it=["Webkit","Moz","ms"],Rt=m.createElement("div").style,Lt={};function an(r){for(var o=r[0].toUpperCase()+r.slice(1),u=it.length;u--;)if(r=it[u]+o,r in Rt)return r}function hn(r){var o=l.cssProps[r]||Lt[r];return o||(r in Rt?r:Lt[r]=an(r)||r)}var Ut=/^(none|table(?!-c[ea]).+)/,ft={position:"absolute",visibility:"hidden",display:"block"},Ni={letterSpacing:"0",fontWeight:"400"};function Dt(r,o,u){var h=O.exec(o);return h?Math.max(0,h[2]-(u||0))+(h[3]||"px"):o}function Sn(r,o,u,h,v,M){var E=o==="width"?1:0,N=0,D=0,V=0;if(u===(h?"border":"content"))return 0;for(;E<4;E+=2)u==="margin"&&(V+=l.css(r,u+fe[E],!0,v)),h?(u==="content"&&(D-=l.css(r,"padding"+fe[E],!0,v)),u!=="margin"&&(D-=l.css(r,"border"+fe[E]+"Width",!0,v))):(D+=l.css(r,"padding"+fe[E],!0,v),u!=="padding"?D+=l.css(r,"border"+fe[E]+"Width",!0,v):N+=l.css(r,"border"+fe[E]+"Width",!0,v));return!h&&M>=0&&(D+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-M-D-N-.5))||0),D+V}function vr(r,o,u){var h=He(r),v=!T.boxSizingReliable()||u,M=v&&l.css(r,"boxSizing",!1,h)==="border-box",E=M,N=nt(r,o,h),D="offset"+o[0].toUpperCase()+o.slice(1);if(se.test(N)){if(!u)return N;N="auto"}return(!T.boxSizingReliable()&&M||!T.reliableTrDimensions()&&w(r,"tr")||N==="auto"||!parseFloat(N)&&l.css(r,"display",!1,h)==="inline")&&r.getClientRects().length&&(M=l.css(r,"boxSizing",!1,h)==="border-box",E=D in r,E&&(N=r[D])),N=parseFloat(N)||0,N+Sn(r,o,u||(M?"border":"content"),E,h,N)+"px"}l.extend({cssHooks:{opacity:{get:function(r,o){if(o){var u=nt(r,"opacity");return u===""?"1":u}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,o,u,h){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var v,M,E,N=yt(o),D=Ne.test(o),V=r.style;if(D||(o=hn(N)),E=l.cssHooks[o]||l.cssHooks[N],u!==void 0){if(M=typeof u,M==="string"&&(v=O.exec(u))&&v[1]&&(u=ut(r,o,v),M="number"),u==null||u!==u)return;M==="number"&&!D&&(u+=v&&v[3]||(l.cssNumber[N]?"":"px")),!T.clearCloneStyle&&u===""&&o.indexOf("background")===0&&(V[o]="inherit"),(!E||!("set"in E)||(u=E.set(r,u,h))!==void 0)&&(D?V.setProperty(o,u):V[o]=u)}else return E&&"get"in E&&(v=E.get(r,!1,h))!==void 0?v:V[o]}},css:function(r,o,u,h){var v,M,E,N=yt(o),D=Ne.test(o);return D||(o=hn(N)),E=l.cssHooks[o]||l.cssHooks[N],E&&"get"in E&&(v=E.get(r,!0,u)),v===void 0&&(v=nt(r,o,h)),v==="normal"&&o in Ni&&(v=Ni[o]),u===""||u?(M=parseFloat(v),u===!0||isFinite(M)?M||0:v):v}}),l.each(["height","width"],function(r,o){l.cssHooks[o]={get:function(u,h,v){if(h)return Ut.test(l.css(u,"display"))&&(!u.getClientRects().length||!u.getBoundingClientRect().width)?Ye(u,ft,function(){return vr(u,o,v)}):vr(u,o,v)},set:function(u,h,v){var M,E=He(u),N=!T.scrollboxSize()&&E.position==="absolute",D=N||v,V=D&&l.css(u,"boxSizing",!1,E)==="border-box",te=v?Sn(u,o,v,V,E):0;return V&&N&&(te-=Math.ceil(u["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(E[o])-Sn(u,o,"border",!1,E)-.5)),te&&(M=O.exec(h))&&(M[3]||"px")!=="px"&&(u.style[o]=h,h=l.css(u,o)),Dt(u,h,te)}}}),l.cssHooks.marginLeft=qe(T.reliableMarginLeft,function(r,o){if(o)return(parseFloat(nt(r,"marginLeft"))||r.getBoundingClientRect().left-Ye(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(r,o){l.cssHooks[r+o]={expand:function(u){for(var h=0,v={},M=typeof u=="string"?u.split(" "):[u];h<4;h++)v[r+fe[h]+o]=M[h]||M[h-2]||M[0];return v}},r!=="margin"&&(l.cssHooks[r+o].set=Dt)}),l.fn.extend({css:function(r,o){return je(this,function(u,h,v){var M,E,N={},D=0;if(Array.isArray(h)){for(M=He(u),E=h.length;D<E;D++)N[h[D]]=l.css(u,h[D],!1,M);return N}return v!==void 0?l.style(u,h,v):l.css(u,h)},r,o,arguments.length>1)}});function Ot(r,o,u,h,v){return new Ot.prototype.init(r,o,u,h,v)}l.Tween=Ot,Ot.prototype={constructor:Ot,init:function(r,o,u,h,v,M){this.elem=r,this.prop=u,this.easing=v||l.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=h,this.unit=M||(l.cssNumber[u]?"":"px")},cur:function(){var r=Ot.propHooks[this.prop];return r&&r.get?r.get(this):Ot.propHooks._default.get(this)},run:function(r){var o,u=Ot.propHooks[this.prop];return this.options.duration?this.pos=o=l.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):Ot.propHooks._default.set(this),this}},Ot.prototype.init.prototype=Ot.prototype,Ot.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=l.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){l.fx.step[r.prop]?l.fx.step[r.prop](r):r.elem.nodeType===1&&(l.cssHooks[r.prop]||r.elem.style[hn(r.prop)]!=null)?l.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},Ot.propHooks.scrollTop=Ot.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},l.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},l.fx=Ot.prototype.init,l.fx.step={};var Pn,Ft,Vn=/^(?:toggle|show|hide)$/,xr=/queueHooks$/;function jt(){Ft&&(m.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(jt):e.setTimeout(jt,l.fx.interval),l.fx.tick())}function Oi(){return e.setTimeout(function(){Pn=void 0}),Pn=Date.now()}function Fi(r,o){var u,h=0,v={height:r};for(o=o?1:0;h<4;h+=2-o)u=fe[h],v["margin"+u]=v["padding"+u]=r;return o&&(v.opacity=v.width=r),v}function Mr(r,o,u){for(var h,v=(yn.tweeners[o]||[]).concat(yn.tweeners["*"]),M=0,E=v.length;M<E;M++)if(h=v[M].call(u,o,r))return h}function vc(r,o,u){var h,v,M,E,N,D,V,te,ue="width"in o||"height"in o,K=this,Se={},Je=r.style,xt=r.nodeType&&Xe(r),lt=z.get(r,"fxshow");u.queue||(E=l._queueHooks(r,"fx"),E.unqueued==null&&(E.unqueued=0,N=E.empty.fire,E.empty.fire=function(){E.unqueued||N()}),E.unqueued++,K.always(function(){K.always(function(){E.unqueued--,l.queue(r,"fx").length||E.empty.fire()})}));for(h in o)if(v=o[h],Vn.test(v)){if(delete o[h],M=M||v==="toggle",v===(xt?"hide":"show"))if(v==="show"&&lt&&lt[h]!==void 0)xt=!0;else continue;Se[h]=lt&&lt[h]||l.style(r,h)}if(D=!l.isEmptyObject(o),!(!D&&l.isEmptyObject(Se))){ue&&r.nodeType===1&&(u.overflow=[Je.overflow,Je.overflowX,Je.overflowY],V=lt&&lt.display,V==null&&(V=z.get(r,"display")),te=l.css(r,"display"),te==="none"&&(V?te=V:(Z([r],!0),V=r.style.display||V,te=l.css(r,"display"),Z([r]))),(te==="inline"||te==="inline-block"&&V!=null)&&l.css(r,"float")==="none"&&(D||(K.done(function(){Je.display=V}),V==null&&(te=Je.display,V=te==="none"?"":te)),Je.display="inline-block")),u.overflow&&(Je.overflow="hidden",K.always(function(){Je.overflow=u.overflow[0],Je.overflowX=u.overflow[1],Je.overflowY=u.overflow[2]})),D=!1;for(h in Se)D||(lt?"hidden"in lt&&(xt=lt.hidden):lt=z.access(r,"fxshow",{display:V}),M&&(lt.hidden=!xt),xt&&Z([r],!0),K.done(function(){xt||Z([r]),z.remove(r,"fxshow");for(h in Se)l.style(r,h,Se[h])})),D=Mr(xt?lt[h]:0,h,K),h in lt||(lt[h]=D.start,xt&&(D.end=D.start,D.start=0))}}function xc(r,o){var u,h,v,M,E;for(u in r)if(h=yt(u),v=o[h],M=r[u],Array.isArray(M)&&(v=M[1],M=r[u]=M[0]),u!==h&&(r[h]=M,delete r[u]),E=l.cssHooks[h],E&&"expand"in E){M=E.expand(M),delete r[h];for(u in M)u in r||(r[u]=M[u],o[u]=v)}else o[h]=v}function yn(r,o,u){var h,v,M=0,E=yn.prefilters.length,N=l.Deferred().always(function(){delete D.elem}),D=function(){if(v)return!1;for(var ue=Pn||Oi(),K=Math.max(0,V.startTime+V.duration-ue),Se=K/V.duration||0,Je=1-Se,xt=0,lt=V.tweens.length;xt<lt;xt++)V.tweens[xt].run(Je);return N.notifyWith(r,[V,Je,K]),Je<1&&lt?K:(lt||N.notifyWith(r,[V,1,0]),N.resolveWith(r,[V]),!1)},V=N.promise({elem:r,props:l.extend({},o),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},u),originalProperties:o,originalOptions:u,startTime:Pn||Oi(),duration:u.duration,tweens:[],createTween:function(ue,K){var Se=l.Tween(r,V.opts,ue,K,V.opts.specialEasing[ue]||V.opts.easing);return V.tweens.push(Se),Se},stop:function(ue){var K=0,Se=ue?V.tweens.length:0;if(v)return this;for(v=!0;K<Se;K++)V.tweens[K].run(1);return ue?(N.notifyWith(r,[V,1,0]),N.resolveWith(r,[V,ue])):N.rejectWith(r,[V,ue]),this}}),te=V.props;for(xc(te,V.opts.specialEasing);M<E;M++)if(h=yn.prefilters[M].call(V,r,te,V.opts),h)return b(h.stop)&&(l._queueHooks(V.elem,V.opts.queue).stop=h.stop.bind(h)),h;return l.map(te,Mr,V),b(V.opts.start)&&V.opts.start.call(r,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),l.fx.timer(l.extend(D,{elem:r,anim:V,queue:V.opts.queue})),V}l.Animation=l.extend(yn,{tweeners:{"*":[function(r,o){var u=this.createTween(r,o);return ut(u.elem,r,O.exec(o),u),u}]},tweener:function(r,o){b(r)?(o=r,r=["*"]):r=r.match(Tt);for(var u,h=0,v=r.length;h<v;h++)u=r[h],yn.tweeners[u]=yn.tweeners[u]||[],yn.tweeners[u].unshift(o)},prefilters:[vc],prefilter:function(r,o){o?yn.prefilters.unshift(r):yn.prefilters.push(r)}}),l.speed=function(r,o,u){var h=r&&typeof r=="object"?l.extend({},r):{complete:u||!u&&o||b(r)&&r,duration:r,easing:u&&o||o&&!b(o)&&o};return l.fx.off?h.duration=0:typeof h.duration!="number"&&(h.duration in l.fx.speeds?h.duration=l.fx.speeds[h.duration]:h.duration=l.fx.speeds._default),(h.queue==null||h.queue===!0)&&(h.queue="fx"),h.old=h.complete,h.complete=function(){b(h.old)&&h.old.call(this),h.queue&&l.dequeue(this,h.queue)},h},l.fn.extend({fadeTo:function(r,o,u,h){return this.filter(Xe).css("opacity",0).show().end().animate({opacity:o},r,u,h)},animate:function(r,o,u,h){var v=l.isEmptyObject(r),M=l.speed(o,u,h),E=function(){var N=yn(this,l.extend({},r),M);(v||z.get(this,"finish"))&&N.stop(!0)};return E.finish=E,v||M.queue===!1?this.each(E):this.queue(M.queue,E)},stop:function(r,o,u){var h=function(v){var M=v.stop;delete v.stop,M(u)};return typeof r!="string"&&(u=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var v=!0,M=r!=null&&r+"queueHooks",E=l.timers,N=z.get(this);if(M)N[M]&&N[M].stop&&h(N[M]);else for(M in N)N[M]&&N[M].stop&&xr.test(M)&&h(N[M]);for(M=E.length;M--;)E[M].elem===this&&(r==null||E[M].queue===r)&&(E[M].anim.stop(u),v=!1,E.splice(M,1));(v||!u)&&l.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,u=z.get(this),h=u[r+"queue"],v=u[r+"queueHooks"],M=l.timers,E=h?h.length:0;for(u.finish=!0,l.queue(this,r,[]),v&&v.stop&&v.stop.call(this,!0),o=M.length;o--;)M[o].elem===this&&M[o].queue===r&&(M[o].anim.stop(!0),M.splice(o,1));for(o=0;o<E;o++)h[o]&&h[o].finish&&h[o].finish.call(this);delete u.finish})}}),l.each(["toggle","show","hide"],function(r,o){var u=l.fn[o];l.fn[o]=function(h,v,M){return h==null||typeof h=="boolean"?u.apply(this,arguments):this.animate(Fi(o,!0),h,v,M)}}),l.each({slideDown:Fi("show"),slideUp:Fi("hide"),slideToggle:Fi("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){l.fn[r]=function(u,h,v){return this.animate(o,u,h,v)}}),l.timers=[],l.fx.tick=function(){var r,o=0,u=l.timers;for(Pn=Date.now();o<u.length;o++)r=u[o],!r()&&u[o]===r&&u.splice(o--,1);u.length||l.fx.stop(),Pn=void 0},l.fx.timer=function(r){l.timers.push(r),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Ft||(Ft=!0,jt())},l.fx.stop=function(){Ft=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(r,o){return r=l.fx&&l.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(u,h){var v=e.setTimeout(u,r);h.stop=function(){e.clearTimeout(v)}})},function(){var r=m.createElement("input"),o=m.createElement("select"),u=o.appendChild(m.createElement("option"));r.type="checkbox",T.checkOn=r.value!=="",T.optSelected=u.selected,r=m.createElement("input"),r.value="t",r.type="radio",T.radioValue=r.value==="t"}();var Xa,Sr=l.expr.attrHandle;l.fn.extend({attr:function(r,o){return je(this,l.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){l.removeAttr(this,r)})}}),l.extend({attr:function(r,o,u){var h,v,M=r.nodeType;if(!(M===3||M===8||M===2)){if(typeof r.getAttribute>"u")return l.prop(r,o,u);if((M!==1||!l.isXMLDoc(r))&&(v=l.attrHooks[o.toLowerCase()]||(l.expr.match.bool.test(o)?Xa:void 0)),u!==void 0){if(u===null){l.removeAttr(r,o);return}return v&&"set"in v&&(h=v.set(r,u,o))!==void 0?h:(r.setAttribute(o,u+""),u)}return v&&"get"in v&&(h=v.get(r,o))!==null?h:(h=l.find.attr(r,o),h??void 0)}},attrHooks:{type:{set:function(r,o){if(!T.radioValue&&o==="radio"&&w(r,"input")){var u=r.value;return r.setAttribute("type",o),u&&(r.value=u),o}}}},removeAttr:function(r,o){var u,h=0,v=o&&o.match(Tt);if(v&&r.nodeType===1)for(;u=v[h++];)r.removeAttribute(u)}}),Xa={set:function(r,o,u){return o===!1?l.removeAttr(r,u):r.setAttribute(u,u),u}},l.each(l.expr.match.bool.source.match(/\w+/g),function(r,o){var u=Sr[o]||l.find.attr;Sr[o]=function(h,v,M){var E,N,D=v.toLowerCase();return M||(N=Sr[D],Sr[D]=E,E=u(h,v,M)!=null?D:null,Sr[D]=N),E}});var Mc=/^(?:input|select|textarea|button)$/i,Sc=/^(?:a|area)$/i;l.fn.extend({prop:function(r,o){return je(this,l.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[l.propFix[r]||r]})}}),l.extend({prop:function(r,o,u){var h,v,M=r.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!l.isXMLDoc(r))&&(o=l.propFix[o]||o,v=l.propHooks[o]),u!==void 0?v&&"set"in v&&(h=v.set(r,u,o))!==void 0?h:r[o]=u:v&&"get"in v&&(h=v.get(r,o))!==null?h:r[o]},propHooks:{tabIndex:{get:function(r){var o=l.find.attr(r,"tabindex");return o?parseInt(o,10):Mc.test(r.nodeName)||Sc.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),T.optSelected||(l.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function gi(r){var o=r.match(Tt)||[];return o.join(" ")}function _i(r){return r.getAttribute&&r.getAttribute("class")||""}function Fs(r){return Array.isArray(r)?r:typeof r=="string"?r.match(Tt)||[]:[]}l.fn.extend({addClass:function(r){var o,u,h,v,M,E;return b(r)?this.each(function(N){l(this).addClass(r.call(this,N,_i(this)))}):(o=Fs(r),o.length?this.each(function(){if(h=_i(this),u=this.nodeType===1&&" "+gi(h)+" ",u){for(M=0;M<o.length;M++)v=o[M],u.indexOf(" "+v+" ")<0&&(u+=v+" ");E=gi(u),h!==E&&this.setAttribute("class",E)}}):this)},removeClass:function(r){var o,u,h,v,M,E;return b(r)?this.each(function(N){l(this).removeClass(r.call(this,N,_i(this)))}):arguments.length?(o=Fs(r),o.length?this.each(function(){if(h=_i(this),u=this.nodeType===1&&" "+gi(h)+" ",u){for(M=0;M<o.length;M++)for(v=o[M];u.indexOf(" "+v+" ")>-1;)u=u.replace(" "+v+" "," ");E=gi(u),h!==E&&this.setAttribute("class",E)}}):this):this.attr("class","")},toggleClass:function(r,o){var u,h,v,M,E=typeof r,N=E==="string"||Array.isArray(r);return b(r)?this.each(function(D){l(this).toggleClass(r.call(this,D,_i(this),o),o)}):typeof o=="boolean"&&N?o?this.addClass(r):this.removeClass(r):(u=Fs(r),this.each(function(){if(N)for(M=l(this),v=0;v<u.length;v++)h=u[v],M.hasClass(h)?M.removeClass(h):M.addClass(h);else(r===void 0||E==="boolean")&&(h=_i(this),h&&z.set(this,"__className__",h),this.setAttribute&&this.setAttribute("class",h||r===!1?"":z.get(this,"__className__")||""))}))},hasClass:function(r){var o,u,h=0;for(o=" "+r+" ";u=this[h++];)if(u.nodeType===1&&(" "+gi(_i(u))+" ").indexOf(o)>-1)return!0;return!1}});var yc=/\r/g;l.fn.extend({val:function(r){var o,u,h,v=this[0];return arguments.length?(h=b(r),this.each(function(M){var E;this.nodeType===1&&(h?E=r.call(this,M,l(this).val()):E=r,E==null?E="":typeof E=="number"?E+="":Array.isArray(E)&&(E=l.map(E,function(N){return N==null?"":N+""})),o=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,E,"value")===void 0)&&(this.value=E))})):v?(o=l.valHooks[v.type]||l.valHooks[v.nodeName.toLowerCase()],o&&"get"in o&&(u=o.get(v,"value"))!==void 0?u:(u=v.value,typeof u=="string"?u.replace(yc,""):u??"")):void 0}}),l.extend({valHooks:{option:{get:function(r){var o=l.find.attr(r,"value");return o??gi(l.text(r))}},select:{get:function(r){var o,u,h,v=r.options,M=r.selectedIndex,E=r.type==="select-one",N=E?null:[],D=E?M+1:v.length;for(M<0?h=D:h=E?M:0;h<D;h++)if(u=v[h],(u.selected||h===M)&&!u.disabled&&(!u.parentNode.disabled||!w(u.parentNode,"optgroup"))){if(o=l(u).val(),E)return o;N.push(o)}return N},set:function(r,o){for(var u,h,v=r.options,M=l.makeArray(o),E=v.length;E--;)h=v[E],(h.selected=l.inArray(l.valHooks.option.get(h),M)>-1)&&(u=!0);return u||(r.selectedIndex=-1),M}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=l.inArray(l(r).val(),o)>-1}},T.checkOn||(l.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var yr=e.location,qa={guid:Date.now()},Bs=/\?/;l.parseXML=function(r){var o,u;if(!r||typeof r!="string")return null;try{o=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return u=o&&o.getElementsByTagName("parsererror")[0],(!o||u)&&l.error("Invalid XML: "+(u?l.map(u.childNodes,function(h){return h.textContent}).join(`
`):r)),o};var ja=/^(?:focusinfocus|focusoutblur)$/,Ya=function(r){r.stopPropagation()};l.extend(l.event,{trigger:function(r,o,u,h){var v,M,E,N,D,V,te,ue,K=[u||m],Se=_.call(r,"type")?r.type:r,Je=_.call(r,"namespace")?r.namespace.split("."):[];if(M=ue=E=u=u||m,!(u.nodeType===3||u.nodeType===8)&&!ja.test(Se+l.event.triggered)&&(Se.indexOf(".")>-1&&(Je=Se.split("."),Se=Je.shift(),Je.sort()),D=Se.indexOf(":")<0&&"on"+Se,r=r[l.expando]?r:new l.Event(Se,typeof r=="object"&&r),r.isTrigger=h?2:3,r.namespace=Je.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+Je.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=u),o=o==null?[r]:l.makeArray(o,[r]),te=l.event.special[Se]||{},!(!h&&te.trigger&&te.trigger.apply(u,o)===!1))){if(!h&&!te.noBubble&&!S(u)){for(N=te.delegateType||Se,ja.test(N+Se)||(M=M.parentNode);M;M=M.parentNode)K.push(M),E=M;E===(u.ownerDocument||m)&&K.push(E.defaultView||E.parentWindow||e)}for(v=0;(M=K[v++])&&!r.isPropagationStopped();)ue=M,r.type=v>1?N:te.bindType||Se,V=(z.get(M,"events")||Object.create(null))[r.type]&&z.get(M,"handle"),V&&V.apply(M,o),V=D&&M[D],V&&V.apply&&P(M)&&(r.result=V.apply(M,o),r.result===!1&&r.preventDefault());return r.type=Se,!h&&!r.isDefaultPrevented()&&(!te._default||te._default.apply(K.pop(),o)===!1)&&P(u)&&D&&b(u[Se])&&!S(u)&&(E=u[D],E&&(u[D]=null),l.event.triggered=Se,r.isPropagationStopped()&&ue.addEventListener(Se,Ya),u[Se](),r.isPropagationStopped()&&ue.removeEventListener(Se,Ya),l.event.triggered=void 0,E&&(u[D]=E)),r.result}},simulate:function(r,o,u){var h=l.extend(new l.Event,u,{type:r,isSimulated:!0});l.event.trigger(h,null,o)}}),l.fn.extend({trigger:function(r,o){return this.each(function(){l.event.trigger(r,o,this)})},triggerHandler:function(r,o){var u=this[0];if(u)return l.event.trigger(r,o,u,!0)}});var Ec=/\[\]$/,Ka=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function Hs(r,o,u,h){var v;if(Array.isArray(o))l.each(o,function(M,E){u||Ec.test(r)?h(r,E):Hs(r+"["+(typeof E=="object"&&E!=null?M:"")+"]",E,u,h)});else if(!u&&U(o)==="object")for(v in o)Hs(r+"["+v+"]",o[v],u,h);else h(r,o)}l.param=function(r,o){var u,h=[],v=function(M,E){var N=b(E)?E():E;h[h.length]=encodeURIComponent(M)+"="+encodeURIComponent(N??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!l.isPlainObject(r))l.each(r,function(){v(this.name,this.value)});else for(u in r)Hs(u,r[u],o,v);return h.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=l.prop(this,"elements");return r?l.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!l(this).is(":disabled")&&bc.test(this.nodeName)&&!Tc.test(r)&&(this.checked||!_e.test(r))}).map(function(r,o){var u=l(this).val();return u==null?null:Array.isArray(u)?l.map(u,function(h){return{name:o.name,value:h.replace(Ka,`\r
`)}}):{name:o.name,value:u.replace(Ka,`\r
`)}}).get()}});var Ac=/%20/g,wc=/#.*$/,Rc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)$/mg,Lc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Pc=/^(?:GET|HEAD)$/,Dc=/^\/\//,$a={},zs={},Za="*/".concat("*"),Gs=m.createElement("a");Gs.href=yr.href;function Ja(r){return function(o,u){typeof o!="string"&&(u=o,o="*");var h,v=0,M=o.toLowerCase().match(Tt)||[];if(b(u))for(;h=M[v++];)h[0]==="+"?(h=h.slice(1)||"*",(r[h]=r[h]||[]).unshift(u)):(r[h]=r[h]||[]).push(u)}}function Qa(r,o,u,h){var v={},M=r===zs;function E(N){var D;return v[N]=!0,l.each(r[N]||[],function(V,te){var ue=te(o,u,h);if(typeof ue=="string"&&!M&&!v[ue])return o.dataTypes.unshift(ue),E(ue),!1;if(M)return!(D=ue)}),D}return E(o.dataTypes[0])||!v["*"]&&E("*")}function ks(r,o){var u,h,v=l.ajaxSettings.flatOptions||{};for(u in o)o[u]!==void 0&&((v[u]?r:h||(h={}))[u]=o[u]);return h&&l.extend(!0,r,h),r}function Uc(r,o,u){for(var h,v,M,E,N=r.contents,D=r.dataTypes;D[0]==="*";)D.shift(),h===void 0&&(h=r.mimeType||o.getResponseHeader("Content-Type"));if(h){for(v in N)if(N[v]&&N[v].test(h)){D.unshift(v);break}}if(D[0]in u)M=D[0];else{for(v in u){if(!D[0]||r.converters[v+" "+D[0]]){M=v;break}E||(E=v)}M=M||E}if(M)return M!==D[0]&&D.unshift(M),u[M]}function Ic(r,o,u,h){var v,M,E,N,D,V={},te=r.dataTypes.slice();if(te[1])for(E in r.converters)V[E.toLowerCase()]=r.converters[E];for(M=te.shift();M;)if(r.responseFields[M]&&(u[r.responseFields[M]]=o),!D&&h&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),D=M,M=te.shift(),M){if(M==="*")M=D;else if(D!=="*"&&D!==M){if(E=V[D+" "+M]||V["* "+M],!E){for(v in V)if(N=v.split(" "),N[1]===M&&(E=V[D+" "+N[0]]||V["* "+N[0]],E)){E===!0?E=V[v]:V[v]!==!0&&(M=N[0],te.unshift(N[1]));break}}if(E!==!0)if(E&&r.throws)o=E(o);else try{o=E(o)}catch(ue){return{state:"parsererror",error:E?ue:"No conversion from "+D+" to "+M}}}}return{state:"success",data:o}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yr.href,type:"GET",isLocal:Lc.test(yr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Za,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?ks(ks(r,l.ajaxSettings),o):ks(l.ajaxSettings,r)},ajaxPrefilter:Ja($a),ajaxTransport:Ja(zs),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var u,h,v,M,E,N,D,V,te,ue,K=l.ajaxSetup({},o),Se=K.context||K,Je=K.context&&(Se.nodeType||Se.jquery)?l(Se):l.event,xt=l.Deferred(),lt=l.Callbacks("once memory"),Yt=K.statusCode||{},Ht={},Dn={},Un="canceled",_t={readyState:0,getResponseHeader:function(Mt){var It;if(D){if(!M)for(M={};It=Cc.exec(v);)M[It[1].toLowerCase()+" "]=(M[It[1].toLowerCase()+" "]||[]).concat(It[2]);It=M[Mt.toLowerCase()+" "]}return It==null?null:It.join(", ")},getAllResponseHeaders:function(){return D?v:null},setRequestHeader:function(Mt,It){return D==null&&(Mt=Dn[Mt.toLowerCase()]=Dn[Mt.toLowerCase()]||Mt,Ht[Mt]=It),this},overrideMimeType:function(Mt){return D==null&&(K.mimeType=Mt),this},statusCode:function(Mt){var It;if(Mt)if(D)_t.always(Mt[_t.status]);else for(It in Mt)Yt[It]=[Yt[It],Mt[It]];return this},abort:function(Mt){var It=Mt||Un;return u&&u.abort(It),vi(0,It),this}};if(xt.promise(_t),K.url=((r||K.url||yr.href)+"").replace(Dc,yr.protocol+"//"),K.type=o.method||o.type||K.method||K.type,K.dataTypes=(K.dataType||"*").toLowerCase().match(Tt)||[""],K.crossDomain==null){N=m.createElement("a");try{N.href=K.url,N.href=N.href,K.crossDomain=Gs.protocol+"//"+Gs.host!=N.protocol+"//"+N.host}catch{K.crossDomain=!0}}if(K.data&&K.processData&&typeof K.data!="string"&&(K.data=l.param(K.data,K.traditional)),Qa($a,K,o,_t),D)return _t;V=l.event&&K.global,V&&l.active++===0&&l.event.trigger("ajaxStart"),K.type=K.type.toUpperCase(),K.hasContent=!Pc.test(K.type),h=K.url.replace(wc,""),K.hasContent?K.data&&K.processData&&(K.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(K.data=K.data.replace(Ac,"+")):(ue=K.url.slice(h.length),K.data&&(K.processData||typeof K.data=="string")&&(h+=(Bs.test(h)?"&":"?")+K.data,delete K.data),K.cache===!1&&(h=h.replace(Rc,"$1"),ue=(Bs.test(h)?"&":"?")+"_="+qa.guid+++ue),K.url=h+ue),K.ifModified&&(l.lastModified[h]&&_t.setRequestHeader("If-Modified-Since",l.lastModified[h]),l.etag[h]&&_t.setRequestHeader("If-None-Match",l.etag[h])),(K.data&&K.hasContent&&K.contentType!==!1||o.contentType)&&_t.setRequestHeader("Content-Type",K.contentType),_t.setRequestHeader("Accept",K.dataTypes[0]&&K.accepts[K.dataTypes[0]]?K.accepts[K.dataTypes[0]]+(K.dataTypes[0]!=="*"?", "+Za+"; q=0.01":""):K.accepts["*"]);for(te in K.headers)_t.setRequestHeader(te,K.headers[te]);if(K.beforeSend&&(K.beforeSend.call(Se,_t,K)===!1||D))return _t.abort();if(Un="abort",lt.add(K.complete),_t.done(K.success),_t.fail(K.error),u=Qa(zs,K,o,_t),!u)vi(-1,"No Transport");else{if(_t.readyState=1,V&&Je.trigger("ajaxSend",[_t,K]),D)return _t;K.async&&K.timeout>0&&(E=e.setTimeout(function(){_t.abort("timeout")},K.timeout));try{D=!1,u.send(Ht,vi)}catch(Mt){if(D)throw Mt;vi(-1,Mt)}}function vi(Mt,It,Tr,Ws){var In,br,Nn,ti,ni,_n=It;D||(D=!0,E&&e.clearTimeout(E),u=void 0,v=Ws||"",_t.readyState=Mt>0?4:0,In=Mt>=200&&Mt<300||Mt===304,Tr&&(ti=Uc(K,_t,Tr)),!In&&l.inArray("script",K.dataTypes)>-1&&l.inArray("json",K.dataTypes)<0&&(K.converters["text script"]=function(){}),ti=Ic(K,ti,_t,In),In?(K.ifModified&&(ni=_t.getResponseHeader("Last-Modified"),ni&&(l.lastModified[h]=ni),ni=_t.getResponseHeader("etag"),ni&&(l.etag[h]=ni)),Mt===204||K.type==="HEAD"?_n="nocontent":Mt===304?_n="notmodified":(_n=ti.state,br=ti.data,Nn=ti.error,In=!Nn)):(Nn=_n,(Mt||!_n)&&(_n="error",Mt<0&&(Mt=0))),_t.status=Mt,_t.statusText=(It||_n)+"",In?xt.resolveWith(Se,[br,_n,_t]):xt.rejectWith(Se,[_t,_n,Nn]),_t.statusCode(Yt),Yt=void 0,V&&Je.trigger(In?"ajaxSuccess":"ajaxError",[_t,K,In?br:Nn]),lt.fireWith(Se,[_t,_n]),V&&(Je.trigger("ajaxComplete",[_t,K]),--l.active||l.event.trigger("ajaxStop")))}return _t},getJSON:function(r,o,u){return l.get(r,o,u,"json")},getScript:function(r,o){return l.get(r,void 0,o,"script")}}),l.each(["get","post"],function(r,o){l[o]=function(u,h,v,M){return b(h)&&(M=M||v,v=h,h=void 0),l.ajax(l.extend({url:u,type:o,dataType:M,data:h,success:v},l.isPlainObject(u)&&u))}}),l.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),l._evalUrl=function(r,o,u){return l.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(h){l.globalEval(h,o,u)}})},l.fn.extend({wrapAll:function(r){var o;return this[0]&&(b(r)&&(r=r.call(this[0])),o=l(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var u=this;u.firstElementChild;)u=u.firstElementChild;return u}).append(this)),this},wrapInner:function(r){return b(r)?this.each(function(o){l(this).wrapInner(r.call(this,o))}):this.each(function(){var o=l(this),u=o.contents();u.length?u.wrapAll(r):o.append(r)})},wrap:function(r){var o=b(r);return this.each(function(u){l(this).wrapAll(o?r.call(this,u):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(r){return!l.expr.pseudos.visible(r)},l.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Nc={0:200,1223:204},Er=l.ajaxSettings.xhr();T.cors=!!Er&&"withCredentials"in Er,T.ajax=Er=!!Er,l.ajaxTransport(function(r){var o,u;if(T.cors||Er&&!r.crossDomain)return{send:function(h,v){var M,E=r.xhr();if(E.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(M in r.xhrFields)E[M]=r.xhrFields[M];r.mimeType&&E.overrideMimeType&&E.overrideMimeType(r.mimeType),!r.crossDomain&&!h["X-Requested-With"]&&(h["X-Requested-With"]="XMLHttpRequest");for(M in h)E.setRequestHeader(M,h[M]);o=function(N){return function(){o&&(o=u=E.onload=E.onerror=E.onabort=E.ontimeout=E.onreadystatechange=null,N==="abort"?E.abort():N==="error"?typeof E.status!="number"?v(0,"error"):v(E.status,E.statusText):v(Nc[E.status]||E.status,E.statusText,(E.responseType||"text")!=="text"||typeof E.responseText!="string"?{binary:E.response}:{text:E.responseText},E.getAllResponseHeaders()))}},E.onload=o(),u=E.onerror=E.ontimeout=o("error"),E.onabort!==void 0?E.onabort=u:E.onreadystatechange=function(){E.readyState===4&&e.setTimeout(function(){o&&u()})},o=o("abort");try{E.send(r.hasContent&&r.data||null)}catch(N){if(o)throw N}},abort:function(){o&&o()}}}),l.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return l.globalEval(r),r}}}),l.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),l.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,u;return{send:function(h,v){o=l("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",u=function(M){o.remove(),u=null,M&&v(M.type==="error"?404:200,M.type)}),m.head.appendChild(o[0])},abort:function(){u&&u()}}}});var eo=[],Vs=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=eo.pop()||l.expando+"_"+qa.guid++;return this[r]=!0,r}}),l.ajaxPrefilter("json jsonp",function(r,o,u){var h,v,M,E=r.jsonp!==!1&&(Vs.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Vs.test(r.data)&&"data");if(E||r.dataTypes[0]==="jsonp")return h=r.jsonpCallback=b(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,E?r[E]=r[E].replace(Vs,"$1"+h):r.jsonp!==!1&&(r.url+=(Bs.test(r.url)?"&":"?")+r.jsonp+"="+h),r.converters["script json"]=function(){return M||l.error(h+" was not called"),M[0]},r.dataTypes[0]="json",v=e[h],e[h]=function(){M=arguments},u.always(function(){v===void 0?l(e).removeProp(h):e[h]=v,r[h]&&(r.jsonpCallback=o.jsonpCallback,eo.push(h)),M&&b(v)&&v(M[0]),M=v=void 0}),"script"}),T.createHTMLDocument=function(){var r=m.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),l.parseHTML=function(r,o,u){if(typeof r!="string")return[];typeof o=="boolean"&&(u=o,o=!1);var h,v,M;return o||(T.createHTMLDocument?(o=m.implementation.createHTMLDocument(""),h=o.createElement("base"),h.href=m.location.href,o.head.appendChild(h)):o=m),v=re.exec(r),M=!u&&[],v?[o.createElement(v[1])]:(v=fn([r],o,M),M&&M.length&&l(M).remove(),l.merge([],v.childNodes))},l.fn.load=function(r,o,u){var h,v,M,E=this,N=r.indexOf(" ");return N>-1&&(h=gi(r.slice(N)),r=r.slice(0,N)),b(o)?(u=o,o=void 0):o&&typeof o=="object"&&(v="POST"),E.length>0&&l.ajax({url:r,type:v||"GET",dataType:"html",data:o}).done(function(D){M=arguments,E.html(h?l("<div>").append(l.parseHTML(D)).find(h):D)}).always(u&&function(D,V){E.each(function(){u.apply(this,M||[D.responseText,V,D])})}),this},l.expr.pseudos.animated=function(r){return l.grep(l.timers,function(o){return r===o.elem}).length},l.offset={setOffset:function(r,o,u){var h,v,M,E,N,D,V,te=l.css(r,"position"),ue=l(r),K={};te==="static"&&(r.style.position="relative"),N=ue.offset(),M=l.css(r,"top"),D=l.css(r,"left"),V=(te==="absolute"||te==="fixed")&&(M+D).indexOf("auto")>-1,V?(h=ue.position(),E=h.top,v=h.left):(E=parseFloat(M)||0,v=parseFloat(D)||0),b(o)&&(o=o.call(r,u,l.extend({},N))),o.top!=null&&(K.top=o.top-N.top+E),o.left!=null&&(K.left=o.left-N.left+v),"using"in o?o.using.call(r,K):ue.css(K)}},l.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(v){l.offset.setOffset(this,r,v)});var o,u,h=this[0];if(h)return h.getClientRects().length?(o=h.getBoundingClientRect(),u=h.ownerDocument.defaultView,{top:o.top+u.pageYOffset,left:o.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,o,u,h=this[0],v={top:0,left:0};if(l.css(h,"position")==="fixed")o=h.getBoundingClientRect();else{for(o=this.offset(),u=h.ownerDocument,r=h.offsetParent||u.documentElement;r&&(r===u.body||r===u.documentElement)&&l.css(r,"position")==="static";)r=r.parentNode;r&&r!==h&&r.nodeType===1&&(v=l(r).offset(),v.top+=l.css(r,"borderTopWidth",!0),v.left+=l.css(r,"borderLeftWidth",!0))}return{top:o.top-v.top-l.css(h,"marginTop",!0),left:o.left-v.left-l.css(h,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&l.css(r,"position")==="static";)r=r.offsetParent;return r||we})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var u=o==="pageYOffset";l.fn[r]=function(h){return je(this,function(v,M,E){var N;if(S(v)?N=v:v.nodeType===9&&(N=v.defaultView),E===void 0)return N?N[o]:v[M];N?N.scrollTo(u?N.pageXOffset:E,u?E:N.pageYOffset):v[M]=E},r,h,arguments.length)}}),l.each(["top","left"],function(r,o){l.cssHooks[o]=qe(T.pixelPosition,function(u,h){if(h)return h=nt(u,o),se.test(h)?l(u).position()[o]+"px":h})}),l.each({Height:"height",Width:"width"},function(r,o){l.each({padding:"inner"+r,content:o,"":"outer"+r},function(u,h){l.fn[h]=function(v,M){var E=arguments.length&&(u||typeof v!="boolean"),N=u||(v===!0||M===!0?"margin":"border");return je(this,function(D,V,te){var ue;return S(D)?h.indexOf("outer")===0?D["inner"+r]:D.document.documentElement["client"+r]:D.nodeType===9?(ue=D.documentElement,Math.max(D.body["scroll"+r],ue["scroll"+r],D.body["offset"+r],ue["offset"+r],ue["client"+r])):te===void 0?l.css(D,V,N):l.style(D,V,te,N)},o,E?v:void 0,E)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){l.fn[o]=function(u){return this.on(o,u)}}),l.fn.extend({bind:function(r,o,u){return this.on(r,null,o,u)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,u,h){return this.on(o,r,u,h)},undelegate:function(r,o,u){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",u)},hover:function(r,o){return this.on("mouseenter",r).on("mouseleave",o||r)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){l.fn[o]=function(u,h){return arguments.length>0?this.on(o,null,u,h):this.trigger(o)}});var Oc=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(r,o){var u,h,v;if(typeof o=="string"&&(u=r[o],o=r,r=u),!!b(r))return h=a.call(arguments,2),v=function(){return r.apply(o||this,h.concat(a.call(arguments)))},v.guid=r.guid=r.guid||l.guid++,v},l.holdReady=function(r){r?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=w,l.isFunction=b,l.isWindow=S,l.camelCase=yt,l.type=U,l.now=Date.now,l.isNumeric=function(r){var o=l.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},l.trim=function(r){return r==null?"":(r+"").replace(Oc,"$1")};var Fc=e.jQuery,Bc=e.$;return l.noConflict=function(r){return e.$===l&&(e.$=Bc),r&&e.jQuery===l&&(e.jQuery=Fc),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(Fl);var Yc=Fl.exports;const wr=jc(Yc);class Fa{constructor(){this._markers=[]}add({position:e,name:t}){const n={},s=wr("<p>").append(t),a=wr("<div>").addClass("marker").append(s);n.text=a,n.position=e,this._markers.push(n),wr(document.getElementById("container")).append(a)}hideMarkers(){wr(".marker").hide()}showMarkers(){wr(".marker").show()}static toXYCoords({position:e,camera:t,screen:n}){const{width:s,height:a}=n,f=e.clone();return f.project(t),f.x=Math.round((f.x+1)*s/2),f.y=Math.round((-f.y+1)*a/2)+15,f}update({camera:e,screen:t}){for(var n=0;n<this._markers.length;n++){const{position:s,text:a}=this._markers[n],f=Fa.toXYCoords({position:s,camera:e,screen:t});a.css({top:f.y,left:f.x}),f.z>1?a.css({display:"none"}):a.css({display:"inline-block"})}}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="156",zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kc=0,ro=1,$c=2,Bl=1,Zc=2,Jn=3,mi=0,ln=1,Qn=2,hi=0,lr=1,ws=2,so=3,ao=4,Jc=5,sr=100,Qc=101,eu=102,oo=103,lo=104,tu=200,nu=201,iu=202,ru=203,Hl=204,zl=205,su=206,au=207,ou=208,lu=209,cu=210,uu=0,fu=1,hu=2,wa=3,du=4,pu=5,mu=6,gu=7,Gl=0,_u=1,vu=2,di=0,xu=1,Mu=2,Su=3,yu=4,Eu=5,kl=300,ur=301,fr=302,Ra=303,Ca=304,Ls=306,La=1e3,Cn=1001,Pa=1002,Qt=1003,co=1004,Zs=1005,mn=1006,Tu=1007,Fr=1008,pi=1009,bu=1010,Au=1011,Ha=1012,Vl=1013,ci=1014,ui=1015,Br=1016,Wl=1017,Xl=1018,Ai=1020,wu=1021,Ln=1023,Ru=1024,Cu=1025,wi=1026,hr=1027,Lu=1028,ql=1029,Pu=1030,jl=1031,Yl=1033,Js=33776,Qs=33777,ea=33778,ta=33779,uo=35840,fo=35841,ho=35842,po=35843,Du=36196,mo=37492,go=37496,_o=37808,vo=37809,xo=37810,Mo=37811,So=37812,yo=37813,Eo=37814,To=37815,bo=37816,Ao=37817,wo=37818,Ro=37819,Co=37820,Lo=37821,na=36492,Po=36494,Do=36495,Uu=36283,Uo=36284,Io=36285,No=36286,Kl=3e3,Ri=3001,Iu=3200,Nu=3201,Ou=0,Fu=1,Ci="",Pt="srgb",Hn="srgb-linear",Ps="display-p3",ia=7680,Bu=519,Hu=512,zu=513,Gu=514,ku=515,Vu=516,Wu=517,Xu=518,qu=519,Oo=35044,Fo="300 es",Da=1035,ei=2e3,Rs=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,f=s.length;a<f;a++)s[a].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bo=1234567;const Ur=Math.PI/180,Hr=180/Math.PI;function pr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function za(i,e){return(i%e+e)%e}function ju(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yu(i,e,t){return i!==e?(t-i)/(e-i):0}function Ir(i,e,t){return(1-t)*i+t*e}function Ku(i,e,t,n){return Ir(i,e,1-Math.exp(-t*n))}function $u(i,e=1){return e-Math.abs(za(i,e*2)-e)}function Zu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ef(i,e){return i+Math.random()*(e-i)}function tf(i){return i*(.5-Math.random())}function nf(i){i!==void 0&&(Bo=i);let e=Bo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rf(i){return i*Ur}function sf(i){return i*Hr}function Ua(i){return(i&i-1)===0&&i!==0}function af(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function of(i,e,t,n,s){const a=Math.cos,f=Math.sin,c=a(t/2),d=f(t/2),p=a((e+n)/2),g=f((e+n)/2),_=a((e-n)/2),x=f((e-n)/2),y=a((n-e)/2),T=f((n-e)/2);switch(s){case"XYX":i.set(c*g,d*_,d*x,c*p);break;case"YZY":i.set(d*x,c*g,d*_,c*p);break;case"ZXZ":i.set(d*_,d*x,c*g,c*p);break;case"XZX":i.set(c*g,d*T,d*y,c*p);break;case"YXY":i.set(d*y,c*g,d*T,c*p);break;case"ZYZ":i.set(d*T,d*y,c*g,c*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ar(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const lf={DEG2RAD:Ur,RAD2DEG:Hr,generateUUID:pr,clamp:en,euclideanModulo:za,mapLinear:ju,inverseLerp:Yu,lerp:Ir,damp:Ku,pingpong:$u,smoothstep:Zu,smootherstep:Ju,randInt:Qu,randFloat:ef,randFloatSpread:tf,seededRandom:nf,degToRad:rf,radToDeg:sf,isPowerOfTwo:Ua,ceilPowerOfTwo:af,floorPowerOfTwo:Cs,setQuaternionFromProperEuler:of,normalize:nn,denormalize:ar};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,f=this.y-e.y;return this.x=a*n-f*s+e.x,this.y=a*s+f*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,s,a,f,c,d,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,f,c,d,p)}set(e,t,n,s,a,f,c,d,p){const g=this.elements;return g[0]=e,g[1]=s,g[2]=c,g[3]=t,g[4]=a,g[5]=d,g[6]=n,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,f=n[0],c=n[3],d=n[6],p=n[1],g=n[4],_=n[7],x=n[2],y=n[5],T=n[8],b=s[0],S=s[3],m=s[6],B=s[1],R=s[4],U=s[7],F=s[2],k=s[5],l=s[8];return a[0]=f*b+c*B+d*F,a[3]=f*S+c*R+d*k,a[6]=f*m+c*U+d*l,a[1]=p*b+g*B+_*F,a[4]=p*S+g*R+_*k,a[7]=p*m+g*U+_*l,a[2]=x*b+y*B+T*F,a[5]=x*S+y*R+T*k,a[8]=x*m+y*U+T*l,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],f=e[4],c=e[5],d=e[6],p=e[7],g=e[8];return t*f*g-t*c*p-n*a*g+n*c*d+s*a*p-s*f*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],f=e[4],c=e[5],d=e[6],p=e[7],g=e[8],_=g*f-c*p,x=c*d-g*a,y=p*a-f*d,T=t*_+n*x+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=_*b,e[1]=(s*p-g*n)*b,e[2]=(c*n-s*f)*b,e[3]=x*b,e[4]=(g*t-s*d)*b,e[5]=(s*a-c*t)*b,e[6]=y*b,e[7]=(n*d-p*t)*b,e[8]=(f*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,f,c){const d=Math.cos(a),p=Math.sin(a);return this.set(n*d,n*p,-n*(d*f+p*c)+f+e,-s*p,s*d,-s*(-p*f+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new ht;function $l(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cf(){const i=zr("canvas");return i.style.display="block",i}const Ho={};function Nr(i){i in Ho||(Ho[i]=!0,console.warn(i))}function cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const uf=new ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ff=new ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function hf(i){return i.convertSRGBToLinear().applyMatrix3(ff)}function df(i){return i.applyMatrix3(uf).convertLinearToSRGB()}const pf={[Hn]:i=>i,[Pt]:i=>i.convertSRGBToLinear(),[Ps]:hf},mf={[Hn]:i=>i,[Pt]:i=>i.convertLinearToSRGB(),[Ps]:df},Tn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Hn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=pf[e],s=mf[t];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let ki;class Zl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=zr("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let f=0;f<a.length;f++)a[f]=cr(a[f]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gf=0;class Jl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=pr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let f=0,c=s.length;f<c;f++)s[f].isDataTexture?a.push(aa(s[f].image)):a.push(aa(s[f]))}else a=aa(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _f=0;class cn extends Ui{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Cn,s=Cn,a=mn,f=Fr,c=Ln,d=pi,p=cn.DEFAULT_ANISOTROPY,g=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=pr(),this.name="",this.source=new Jl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=f,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=d,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Ri?Pt:Ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case La:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case La:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?Ri:Kl}set encoding(e){Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ri?Pt:Ci}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=kl;cn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,n=0,s=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,f=e.elements;return this.x=f[0]*t+f[4]*n+f[8]*s+f[12]*a,this.y=f[1]*t+f[5]*n+f[9]*s+f[13]*a,this.z=f[2]*t+f[6]*n+f[10]*s+f[14]*a,this.w=f[3]*t+f[7]*n+f[11]*s+f[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const d=e.elements,p=d[0],g=d[4],_=d[8],x=d[1],y=d[5],T=d[9],b=d[2],S=d[6],m=d[10];if(Math.abs(g-x)<.01&&Math.abs(_-b)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+b)<.1&&Math.abs(T+S)<.1&&Math.abs(p+y+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,U=(y+1)/2,F=(m+1)/2,k=(g+x)/4,l=(_+b)/4,le=(T+S)/4;return R>U&&R>F?R<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(R),s=k/n,a=l/n):U>F?U<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(U),n=k/s,a=le/s):F<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(F),n=l/a,s=le/a),this.set(n,s,a,t),this}let B=Math.sqrt((S-T)*(S-T)+(_-b)*(_-b)+(x-g)*(x-g));return Math.abs(B)<.001&&(B=1),this.x=(S-T)/B,this.y=(_-b)/B,this.z=(x-g)/B,this.w=Math.acos((p+y+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vf extends Ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Nr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ri?Pt:Ci),this.texture=new cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends vf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ql extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xf extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,f,c){let d=n[s+0],p=n[s+1],g=n[s+2],_=n[s+3];const x=a[f+0],y=a[f+1],T=a[f+2],b=a[f+3];if(c===0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(c===1){e[t+0]=x,e[t+1]=y,e[t+2]=T,e[t+3]=b;return}if(_!==b||d!==x||p!==y||g!==T){let S=1-c;const m=d*x+p*y+g*T+_*b,B=m>=0?1:-1,R=1-m*m;if(R>Number.EPSILON){const F=Math.sqrt(R),k=Math.atan2(F,m*B);S=Math.sin(S*k)/F,c=Math.sin(c*k)/F}const U=c*B;if(d=d*S+x*U,p=p*S+y*U,g=g*S+T*U,_=_*S+b*U,S===1-c){const F=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=F,p*=F,g*=F,_*=F}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,s,a,f){const c=n[s],d=n[s+1],p=n[s+2],g=n[s+3],_=a[f],x=a[f+1],y=a[f+2],T=a[f+3];return e[t]=c*T+g*_+d*y-p*x,e[t+1]=d*T+g*x+p*_-c*y,e[t+2]=p*T+g*y+c*x-d*_,e[t+3]=g*T-c*_-d*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,a=e._z,f=e._order,c=Math.cos,d=Math.sin,p=c(n/2),g=c(s/2),_=c(a/2),x=d(n/2),y=d(s/2),T=d(a/2);switch(f){case"XYZ":this._x=x*g*_+p*y*T,this._y=p*y*_-x*g*T,this._z=p*g*T+x*y*_,this._w=p*g*_-x*y*T;break;case"YXZ":this._x=x*g*_+p*y*T,this._y=p*y*_-x*g*T,this._z=p*g*T-x*y*_,this._w=p*g*_+x*y*T;break;case"ZXY":this._x=x*g*_-p*y*T,this._y=p*y*_+x*g*T,this._z=p*g*T+x*y*_,this._w=p*g*_-x*y*T;break;case"ZYX":this._x=x*g*_-p*y*T,this._y=p*y*_+x*g*T,this._z=p*g*T-x*y*_,this._w=p*g*_+x*y*T;break;case"YZX":this._x=x*g*_+p*y*T,this._y=p*y*_+x*g*T,this._z=p*g*T-x*y*_,this._w=p*g*_-x*y*T;break;case"XZY":this._x=x*g*_-p*y*T,this._y=p*y*_-x*g*T,this._z=p*g*T+x*y*_,this._w=p*g*_+x*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],f=t[1],c=t[5],d=t[9],p=t[2],g=t[6],_=t[10],x=n+c+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-d)*y,this._y=(a-p)*y,this._z=(f-s)*y}else if(n>c&&n>_){const y=2*Math.sqrt(1+n-c-_);this._w=(g-d)/y,this._x=.25*y,this._y=(s+f)/y,this._z=(a+p)/y}else if(c>_){const y=2*Math.sqrt(1+c-n-_);this._w=(a-p)/y,this._x=(s+f)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+_-n-c);this._w=(f-s)/y,this._x=(a+p)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,f=e._w,c=t._x,d=t._y,p=t._z,g=t._w;return this._x=n*g+f*c+s*p-a*d,this._y=s*g+f*d+a*c-n*p,this._z=a*g+f*p+n*d-s*c,this._w=f*g-n*c-s*d-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,f=this._w;let c=f*e._w+n*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=n,this._y=s,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const y=1-t;return this._w=y*f+t*this._w,this._x=y*n+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(d),g=Math.atan2(p,c),_=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=f*_+this._w*x,this._x=n*_+this._x*x,this._y=s*_+this._y*x,this._z=a*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(a),n*Math.cos(a),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,f=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*f,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*f,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*f,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,f=e.y,c=e.z,d=e.w,p=d*t+f*s-c*n,g=d*n+c*t-a*s,_=d*s+a*n-f*t,x=-a*t-f*n-c*s;return this.x=p*d+x*-a+g*-c-_*-f,this.y=g*d+x*-f+_*-a-p*-c,this.z=_*d+x*-c+p*-f-g*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,f=t.x,c=t.y,d=t.z;return this.x=s*d-a*c,this.y=a*f-n*d,this.z=n*c-s*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new X,zo=new Pi;class Vr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Vi.copy(e.boundingBox),Vi.applyMatrix4(e.matrixWorld),this.union(Vi);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const a=s.attributes.position;for(let f=0,c=a.count;f<c;f++)jn.fromBufferAttribute(a,f).applyMatrix4(e.matrixWorld),this.expandByPoint(jn)}else s.boundingBox===null&&s.computeBoundingBox(),Vi.copy(s.boundingBox),Vi.applyMatrix4(e.matrixWorld),this.union(Vi)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),ts.subVectors(this.max,Rr),Wi.subVectors(e.a,Rr),Xi.subVectors(e.b,Rr),qi.subVectors(e.c,Rr),ri.subVectors(Xi,Wi),si.subVectors(qi,Xi),Mi.subVectors(Wi,qi);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,si.z,0,-si.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-si.y,si.x,0,-Mi.y,Mi.x,0];return!la(t,Wi,Xi,qi,ts)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Wi,Xi,qi,ts))?!1:(ns.crossVectors(ri,si),t=[ns.x,ns.y,ns.z],la(t,Wi,Xi,qi,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new X,new X,new X,new X,new X,new X,new X,new X],jn=new X,Vi=new Vr,Wi=new X,Xi=new X,qi=new X,ri=new X,si=new X,Mi=new X,Rr=new X,ts=new X,ns=new X,Si=new X;function la(i,e,t,n,s){for(let a=0,f=i.length-3;a<=f;a+=3){Si.fromArray(i,a);const c=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),d=e.dot(Si),p=t.dot(Si),g=n.dot(Si);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>c)return!1}return!0}const Mf=new Vr,Cr=new X,ca=new X;class Wr{constructor(e=new X,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Mf.setFromPoints(e).getCenter(n);let s=0;for(let a=0,f=e.length;a<f;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(ca)),this.expandByPoint(Cr.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new X,ua=new X,is=new X,ai=new X,fa=new X,rs=new X,ha=new X;class Ds{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ua.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(ua);const a=e.distanceTo(t)*.5,f=-this.direction.dot(is),c=ai.dot(this.direction),d=-ai.dot(is),p=ai.lengthSq(),g=Math.abs(1-f*f);let _,x,y,T;if(g>0)if(_=f*d-c,x=f*c-d,T=a*g,_>=0)if(x>=-T)if(x<=T){const b=1/g;_*=b,x*=b,y=_*(_+f*x+2*c)+x*(f*_+x+2*d)+p}else x=a,_=Math.max(0,-(f*x+c)),y=-_*_+x*(x+2*d)+p;else x=-a,_=Math.max(0,-(f*x+c)),y=-_*_+x*(x+2*d)+p;else x<=-T?(_=Math.max(0,-(-f*a+c)),x=_>0?-a:Math.min(Math.max(-a,-d),a),y=-_*_+x*(x+2*d)+p):x<=T?(_=0,x=Math.min(Math.max(-a,-d),a),y=x*(x+2*d)+p):(_=Math.max(0,-(f*a+c)),x=_>0?a:Math.min(Math.max(-a,-d),a),y=-_*_+x*(x+2*d)+p);else x=f>0?-a:a,_=Math.max(0,-(f*x+c)),y=-_*_+x*(x+2*d)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(ua).addScaledVector(is,x),y}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,a=e.radius*e.radius;if(s>a)return null;const f=Math.sqrt(a-s),c=n-f,d=n+f;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,f,c,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(n=(e.min.x-x.x)*p,s=(e.max.x-x.x)*p):(n=(e.max.x-x.x)*p,s=(e.min.x-x.x)*p),g>=0?(a=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(a=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),n>f||a>s||((a>n||isNaN(n))&&(n=a),(f<s||isNaN(s))&&(s=f),_>=0?(c=(e.min.z-x.z)*_,d=(e.max.z-x.z)*_):(c=(e.max.z-x.z)*_,d=(e.min.z-x.z)*_),n>d||c>s)||((c>n||n!==n)&&(n=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,a){fa.subVectors(t,e),rs.subVectors(n,e),ha.crossVectors(fa,rs);let f=this.direction.dot(ha),c;if(f>0){if(s)return null;c=1}else if(f<0)c=-1,f=-f;else return null;ai.subVectors(this.origin,e);const d=c*this.direction.dot(rs.crossVectors(ai,rs));if(d<0)return null;const p=c*this.direction.dot(fa.cross(ai));if(p<0||d+p>f)return null;const g=-c*ai.dot(ha);return g<0?null:this.at(g/f,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,n,s,a,f,c,d,p,g,_,x,y,T,b,S){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,f,c,d,p,g,_,x,y,T,b,S)}set(e,t,n,s,a,f,c,d,p,g,_,x,y,T,b,S){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=a,m[5]=f,m[9]=c,m[13]=d,m[2]=p,m[6]=g,m[10]=_,m[14]=x,m[3]=y,m[7]=T,m[11]=b,m[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),a=1/ji.setFromMatrixColumn(e,1).length(),f=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*f,t[9]=n[9]*f,t[10]=n[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,f=Math.cos(n),c=Math.sin(n),d=Math.cos(s),p=Math.sin(s),g=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const x=f*g,y=f*_,T=c*g,b=c*_;t[0]=d*g,t[4]=-d*_,t[8]=p,t[1]=y+T*p,t[5]=x-b*p,t[9]=-c*d,t[2]=b-x*p,t[6]=T+y*p,t[10]=f*d}else if(e.order==="YXZ"){const x=d*g,y=d*_,T=p*g,b=p*_;t[0]=x+b*c,t[4]=T*c-y,t[8]=f*p,t[1]=f*_,t[5]=f*g,t[9]=-c,t[2]=y*c-T,t[6]=b+x*c,t[10]=f*d}else if(e.order==="ZXY"){const x=d*g,y=d*_,T=p*g,b=p*_;t[0]=x-b*c,t[4]=-f*_,t[8]=T+y*c,t[1]=y+T*c,t[5]=f*g,t[9]=b-x*c,t[2]=-f*p,t[6]=c,t[10]=f*d}else if(e.order==="ZYX"){const x=f*g,y=f*_,T=c*g,b=c*_;t[0]=d*g,t[4]=T*p-y,t[8]=x*p+b,t[1]=d*_,t[5]=b*p+x,t[9]=y*p-T,t[2]=-p,t[6]=c*d,t[10]=f*d}else if(e.order==="YZX"){const x=f*d,y=f*p,T=c*d,b=c*p;t[0]=d*g,t[4]=b-x*_,t[8]=T*_+y,t[1]=_,t[5]=f*g,t[9]=-c*g,t[2]=-p*g,t[6]=y*_+T,t[10]=x-b*_}else if(e.order==="XZY"){const x=f*d,y=f*p,T=c*d,b=c*p;t[0]=d*g,t[4]=-_,t[8]=p*g,t[1]=x*_+b,t[5]=f*g,t[9]=y*_-T,t[2]=T*_-y,t[6]=c*g,t[10]=b*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sf,e,yf)}lookAt(e,t,n){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),oi.crossVectors(n,dn),oi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),oi.crossVectors(n,dn)),oi.normalize(),ss.crossVectors(dn,oi),s[0]=oi.x,s[4]=ss.x,s[8]=dn.x,s[1]=oi.y,s[5]=ss.y,s[9]=dn.y,s[2]=oi.z,s[6]=ss.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,f=n[0],c=n[4],d=n[8],p=n[12],g=n[1],_=n[5],x=n[9],y=n[13],T=n[2],b=n[6],S=n[10],m=n[14],B=n[3],R=n[7],U=n[11],F=n[15],k=s[0],l=s[4],le=s[8],w=s[12],I=s[1],me=s[5],Me=s[9],W=s[13],ie=s[2],ae=s[6],ge=s[10],oe=s[14],he=s[3],ve=s[7],de=s[11],Q=s[15];return a[0]=f*k+c*I+d*ie+p*he,a[4]=f*l+c*me+d*ae+p*ve,a[8]=f*le+c*Me+d*ge+p*de,a[12]=f*w+c*W+d*oe+p*Q,a[1]=g*k+_*I+x*ie+y*he,a[5]=g*l+_*me+x*ae+y*ve,a[9]=g*le+_*Me+x*ge+y*de,a[13]=g*w+_*W+x*oe+y*Q,a[2]=T*k+b*I+S*ie+m*he,a[6]=T*l+b*me+S*ae+m*ve,a[10]=T*le+b*Me+S*ge+m*de,a[14]=T*w+b*W+S*oe+m*Q,a[3]=B*k+R*I+U*ie+F*he,a[7]=B*l+R*me+U*ae+F*ve,a[11]=B*le+R*Me+U*ge+F*de,a[15]=B*w+R*W+U*oe+F*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],f=e[1],c=e[5],d=e[9],p=e[13],g=e[2],_=e[6],x=e[10],y=e[14],T=e[3],b=e[7],S=e[11],m=e[15];return T*(+a*d*_-s*p*_-a*c*x+n*p*x+s*c*y-n*d*y)+b*(+t*d*y-t*p*x+a*f*x-s*f*y+s*p*g-a*d*g)+S*(+t*p*_-t*c*y-a*f*_+n*f*y+a*c*g-n*p*g)+m*(-s*c*g-t*d*_+t*c*x+s*f*_-n*f*x+n*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],f=e[4],c=e[5],d=e[6],p=e[7],g=e[8],_=e[9],x=e[10],y=e[11],T=e[12],b=e[13],S=e[14],m=e[15],B=_*S*p-b*x*p+b*d*y-c*S*y-_*d*m+c*x*m,R=T*x*p-g*S*p-T*d*y+f*S*y+g*d*m-f*x*m,U=g*b*p-T*_*p+T*c*y-f*b*y-g*c*m+f*_*m,F=T*_*d-g*b*d-T*c*x+f*b*x+g*c*S-f*_*S,k=t*B+n*R+s*U+a*F;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const l=1/k;return e[0]=B*l,e[1]=(b*x*a-_*S*a-b*s*y+n*S*y+_*s*m-n*x*m)*l,e[2]=(c*S*a-b*d*a+b*s*p-n*S*p-c*s*m+n*d*m)*l,e[3]=(_*d*a-c*x*a-_*s*p+n*x*p+c*s*y-n*d*y)*l,e[4]=R*l,e[5]=(g*S*a-T*x*a+T*s*y-t*S*y-g*s*m+t*x*m)*l,e[6]=(T*d*a-f*S*a-T*s*p+t*S*p+f*s*m-t*d*m)*l,e[7]=(f*x*a-g*d*a+g*s*p-t*x*p-f*s*y+t*d*y)*l,e[8]=U*l,e[9]=(T*_*a-g*b*a-T*n*y+t*b*y+g*n*m-t*_*m)*l,e[10]=(f*b*a-T*c*a+T*n*p-t*b*p-f*n*m+t*c*m)*l,e[11]=(g*c*a-f*_*a-g*n*p+t*_*p+f*n*y-t*c*y)*l,e[12]=F*l,e[13]=(g*b*s-T*_*s+T*n*x-t*b*x-g*n*S+t*_*S)*l,e[14]=(T*c*s-f*b*s-T*n*d+t*b*d+f*n*S-t*c*S)*l,e[15]=(f*_*s-g*c*s+g*n*d-t*_*d-f*n*x+t*c*x)*l,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,f=e.x,c=e.y,d=e.z,p=a*f,g=a*c;return this.set(p*f+n,p*c-s*d,p*d+s*c,0,p*c+s*d,g*c+n,g*d-s*f,0,p*d-s*c,g*d+s*f,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,f){return this.set(1,n,a,0,e,1,f,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,f=t._y,c=t._z,d=t._w,p=a+a,g=f+f,_=c+c,x=a*p,y=a*g,T=a*_,b=f*g,S=f*_,m=c*_,B=d*p,R=d*g,U=d*_,F=n.x,k=n.y,l=n.z;return s[0]=(1-(b+m))*F,s[1]=(y+U)*F,s[2]=(T-R)*F,s[3]=0,s[4]=(y-U)*k,s[5]=(1-(x+m))*k,s[6]=(S+B)*k,s[7]=0,s[8]=(T+R)*l,s[9]=(S-B)*l,s[10]=(1-(x+b))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=ji.set(s[0],s[1],s[2]).length();const f=ji.set(s[4],s[5],s[6]).length(),c=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],bn.copy(this);const p=1/a,g=1/f,_=1/c;return bn.elements[0]*=p,bn.elements[1]*=p,bn.elements[2]*=p,bn.elements[4]*=g,bn.elements[5]*=g,bn.elements[6]*=g,bn.elements[8]*=_,bn.elements[9]*=_,bn.elements[10]*=_,t.setFromRotationMatrix(bn),n.x=a,n.y=f,n.z=c,this}makePerspective(e,t,n,s,a,f,c=ei){const d=this.elements,p=2*a/(t-e),g=2*a/(n-s),_=(t+e)/(t-e),x=(n+s)/(n-s);let y,T;if(c===ei)y=-(f+a)/(f-a),T=-2*f*a/(f-a);else if(c===Rs)y=-f/(f-a),T=-f*a/(f-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,a,f,c=ei){const d=this.elements,p=1/(t-e),g=1/(n-s),_=1/(f-a),x=(t+e)*p,y=(n+s)*g;let T,b;if(c===ei)T=(f+a)*_,b=-2*_;else if(c===Rs)T=a*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-x,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=b,d[14]=-T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new X,bn=new Gt,Sf=new X(0,0,0),yf=new X(1,1,1),oi=new X,ss=new X,dn=new X,Go=new Gt,ko=new Pi;class Us{constructor(e=0,t=0,n=0,s=Us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],f=s[4],c=s[8],d=s[1],p=s[5],g=s[9],_=s[2],x=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-en(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(en(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-en(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ko.setFromEuler(this),this.setFromQuaternion(ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Us.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ef=0;const Vo=new X,Yi=new Pi,Kn=new Gt,as=new X,Lr=new X,Tf=new X,bf=new Pi,Wo=new X(1,0,0),Xo=new X(0,1,0),qo=new X(0,0,1),Af={type:"added"},wf={type:"removed"};class sn extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new X,t=new Us,n=new Pi,s=new X(1,1,1);function a(){n.setFromEuler(t,!1)}function f(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ht}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Wo,e)}rotateY(e){return this.rotateOnAxis(Xo,e)}rotateZ(e){return this.rotateOnAxis(qo,e)}translateOnAxis(e,t){return Vo.copy(e).applyQuaternion(this.quaternion),this.position.add(Vo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wo,e)}translateY(e){return this.translateOnAxis(Xo,e)}translateZ(e){return this.translateOnAxis(qo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Lr,as,this.up):Kn.lookAt(as,Lr,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Kn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Af)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const f=this.children[n].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,a=this.children.length;s<a;s++){const f=this.children[s].getObjectsByProperty(e,t);f.length>0&&(n=n.concat(f))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,Tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,f=s.length;a<f;a++){const c=s[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];a(e.shapes,_)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,p=this.material.length;d<p;d++)c.push(a(e.materials,this.material[d]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(a(e.animations,d))}}if(t){const c=f(e.geometries),d=f(e.materials),p=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),y=f(e.animations),T=f(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),p.length>0&&(n.textures=p),g.length>0&&(n.images=g),_.length>0&&(n.shapes=_),x.length>0&&(n.skeletons=x),y.length>0&&(n.animations=y),T.length>0&&(n.nodes=T)}return n.object=s,n;function f(c){const d=[];for(const p in c){const g=c[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}sn.DEFAULT_UP=new X(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new X,$n=new X,da=new X,Zn=new X,Ki=new X,$i=new X,jo=new X,pa=new X,ma=new X,ga=new X;let os=!1;class Rn{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),An.subVectors(e,t),s.cross(An);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){An.subVectors(s,t),$n.subVectors(n,t),da.subVectors(e,t);const f=An.dot(An),c=An.dot($n),d=An.dot(da),p=$n.dot($n),g=$n.dot(da),_=f*p-c*c;if(_===0)return a.set(-2,-1,-1);const x=1/_,y=(p*d-c*g)*x,T=(f*g-c*d)*x;return a.set(1-y-T,T,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,t,n,s,a,f,c,d){return os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),os=!0),this.getInterpolation(e,t,n,s,a,f,c,d)}static getInterpolation(e,t,n,s,a,f,c,d){return this.getBarycoord(e,t,n,s,Zn),d.setScalar(0),d.addScaledVector(a,Zn.x),d.addScaledVector(f,Zn.y),d.addScaledVector(c,Zn.z),d}static isFrontFacing(e,t,n,s){return An.subVectors(n,t),$n.subVectors(e,t),An.cross($n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),An.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,a){return os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),os=!0),Rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}getInterpolation(e,t,n,s,a){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let f,c;Ki.subVectors(s,n),$i.subVectors(a,n),pa.subVectors(e,n);const d=Ki.dot(pa),p=$i.dot(pa);if(d<=0&&p<=0)return t.copy(n);ma.subVectors(e,s);const g=Ki.dot(ma),_=$i.dot(ma);if(g>=0&&_<=g)return t.copy(s);const x=d*_-g*p;if(x<=0&&d>=0&&g<=0)return f=d/(d-g),t.copy(n).addScaledVector(Ki,f);ga.subVectors(e,a);const y=Ki.dot(ga),T=$i.dot(ga);if(T>=0&&y<=T)return t.copy(a);const b=y*p-d*T;if(b<=0&&p>=0&&T<=0)return c=p/(p-T),t.copy(n).addScaledVector($i,c);const S=g*T-y*_;if(S<=0&&_-g>=0&&y-T>=0)return jo.subVectors(a,s),c=(_-g)/(_-g+(y-T)),t.copy(s).addScaledVector(jo,c);const m=1/(S+b+x);return f=b*m,c=x*m,t.copy(n).addScaledVector(Ki,f).addScaledVector($i,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rf=0;class mr extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=lr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=zl,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const f=[];for(const c in a){const d=a[c];delete d.metadata,f.push(d)}return f}if(t){const a=s(e.textures),f=s(e.images);a.length>0&&(n.textures=a),f.length>0&&(n.images=f)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},ls={h:0,s:0,l:0};function _a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Tn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Tn.workingColorSpace){if(e=za(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,f=2*n-a;this.r=_a(f,a,e+1/3),this.g=_a(f,a,e),this.b=_a(f,a,e-1/3)}return Tn.toWorkingColorSpace(this,s),this}setStyle(e,t=Pt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const f=s[1],c=s[2];switch(f){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],f=a.length;if(f===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Tn.fromWorkingColorSpace(Jt.copy(this),e),Math.round(en(Jt.r*255,0,255))*65536+Math.round(en(Jt.g*255,0,255))*256+Math.round(en(Jt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tn.workingColorSpace){Tn.fromWorkingColorSpace(Jt.copy(this),t);const n=Jt.r,s=Jt.g,a=Jt.b,f=Math.max(n,s,a),c=Math.min(n,s,a);let d,p;const g=(c+f)/2;if(c===f)d=0,p=0;else{const _=f-c;switch(p=g<=.5?_/(f+c):_/(2-f-c),f){case n:d=(s-a)/_+(s<a?6:0);break;case s:d=(a-n)/_+2;break;case a:d=(n-s)/_+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=Tn.workingColorSpace){return Tn.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Pt){Tn.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,s=Jt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),wn.h+=e,wn.s+=t,wn.l+=n,this.setHSL(wn.h,wn.s,wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(ls);const n=Ir(wn.h,ls.h,t),s=Ir(wn.s,ls.s,t),a=Ir(wn.l,ls.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new bt;bt.NAMES=tc;class nc extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new X,cs=new dt;class Bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oo,this.updateRange={offset:0,count:-1},this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ar(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array),a=nn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ic extends Bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rc extends Bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends Bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cf=0;const xn=new Gt,va=new sn,Zi=new X,pn=new Vr,Pr=new Vr,Xt=new X;class gn extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($l(e)?rc:ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ht().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];pn.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let a=0,f=t.length;a<f;a++){const c=t[a];Pr.setFromBufferAttribute(c),this.morphTargetsRelative?(Xt.addVectors(pn.min,Pr.min),pn.expandByPoint(Xt),Xt.addVectors(pn.max,Pr.max),pn.expandByPoint(Xt)):(pn.expandByPoint(Pr.min),pn.expandByPoint(Pr.max))}pn.getCenter(n);let s=0;for(let a=0,f=e.count;a<f;a++)Xt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let a=0,f=t.length;a<f;a++){const c=t[a],d=this.morphTargetsRelative;for(let p=0,g=c.count;p<g;p++)Xt.fromBufferAttribute(c,p),d&&(Zi.fromBufferAttribute(e,p),Xt.add(Zi)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,a=t.normal.array,f=t.uv.array,c=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*c),4));const d=this.getAttribute("tangent").array,p=[],g=[];for(let I=0;I<c;I++)p[I]=new X,g[I]=new X;const _=new X,x=new X,y=new X,T=new dt,b=new dt,S=new dt,m=new X,B=new X;function R(I,me,Me){_.fromArray(s,I*3),x.fromArray(s,me*3),y.fromArray(s,Me*3),T.fromArray(f,I*2),b.fromArray(f,me*2),S.fromArray(f,Me*2),x.sub(_),y.sub(_),b.sub(T),S.sub(T);const W=1/(b.x*S.y-S.x*b.y);isFinite(W)&&(m.copy(x).multiplyScalar(S.y).addScaledVector(y,-b.y).multiplyScalar(W),B.copy(y).multiplyScalar(b.x).addScaledVector(x,-S.x).multiplyScalar(W),p[I].add(m),p[me].add(m),p[Me].add(m),g[I].add(B),g[me].add(B),g[Me].add(B))}let U=this.groups;U.length===0&&(U=[{start:0,count:n.length}]);for(let I=0,me=U.length;I<me;++I){const Me=U[I],W=Me.start,ie=Me.count;for(let ae=W,ge=W+ie;ae<ge;ae+=3)R(n[ae+0],n[ae+1],n[ae+2])}const F=new X,k=new X,l=new X,le=new X;function w(I){l.fromArray(a,I*3),le.copy(l);const me=p[I];F.copy(me),F.sub(l.multiplyScalar(l.dot(me))).normalize(),k.crossVectors(le,me);const W=k.dot(g[I])<0?-1:1;d[I*4]=F.x,d[I*4+1]=F.y,d[I*4+2]=F.z,d[I*4+3]=W}for(let I=0,me=U.length;I<me;++I){const Me=U[I],W=Me.start,ie=Me.count;for(let ae=W,ge=W+ie;ae<ge;ae+=3)w(n[ae+0]),w(n[ae+1]),w(n[ae+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,y=n.count;x<y;x++)n.setXYZ(x,0,0,0);const s=new X,a=new X,f=new X,c=new X,d=new X,p=new X,g=new X,_=new X;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),b=e.getX(x+1),S=e.getX(x+2);s.fromBufferAttribute(t,T),a.fromBufferAttribute(t,b),f.fromBufferAttribute(t,S),g.subVectors(f,a),_.subVectors(s,a),g.cross(_),c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,b),p.fromBufferAttribute(n,S),c.add(g),d.add(g),p.add(g),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(b,d.x,d.y,d.z),n.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=t.count;x<y;x+=3)s.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),f.fromBufferAttribute(t,x+2),g.subVectors(f,a),_.subVectors(s,a),g.cross(_),n.setXYZ(x+0,g.x,g.y,g.z),n.setXYZ(x+1,g.x,g.y,g.z),n.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(c,d){const p=c.array,g=c.itemSize,_=c.normalized,x=new p.constructor(d.length*g);let y=0,T=0;for(let b=0,S=d.length;b<S;b++){c.isInterleavedBufferAttribute?y=d[b]*c.data.stride+c.offset:y=d[b]*g;for(let m=0;m<g;m++)x[T++]=p[y++]}return new Bn(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,n=this.index.array,s=this.attributes;for(const c in s){const d=s[c],p=e(d,n);t.setAttribute(c,p)}const a=this.morphAttributes;for(const c in a){const d=[],p=a[c];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=e(x,n);d.push(y)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,d=f.length;c<d;c++){const p=f[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const p=n[d];e.data.attributes[d]=p.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(s[d]=g,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const p in s){const g=s[p];this.setAttribute(p,g.clone(t))}const a=e.morphAttributes;for(const p in a){const g=[],_=a[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yo=new Gt,yi=new Ds,us=new Wr,Ko=new X,Ji=new X,Qi=new X,er=new X,xa=new X,fs=new X,hs=new dt,ds=new dt,ps=new dt,$o=new X,Zo=new X,Jo=new X,ms=new X,gs=new X;class fi extends sn{constructor(e=new gn,t=new nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=s.length;a<f;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,f=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){fs.set(0,0,0);for(let d=0,p=a.length;d<p;d++){const g=c[d],_=a[d];g!==0&&(xa.fromBufferAttribute(_,e),f?fs.addScaledVector(xa,g):fs.addScaledVector(xa.sub(t),g))}t.add(fs)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(a),yi.copy(e.ray).recast(e.near),!(us.containsPoint(yi.origin)===!1&&(yi.intersectSphere(us,Ko)===null||yi.origin.distanceToSquared(Ko)>(e.far-e.near)**2))&&(Yo.copy(a).invert(),yi.copy(e.ray).applyMatrix4(Yo),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let s;const a=this.geometry,f=this.material,c=a.index,d=a.attributes.position,p=a.attributes.uv,g=a.attributes.uv1,_=a.attributes.normal,x=a.groups,y=a.drawRange;if(c!==null)if(Array.isArray(f))for(let T=0,b=x.length;T<b;T++){const S=x[T],m=f[S.materialIndex],B=Math.max(S.start,y.start),R=Math.min(c.count,Math.min(S.start+S.count,y.start+y.count));for(let U=B,F=R;U<F;U+=3){const k=c.getX(U),l=c.getX(U+1),le=c.getX(U+2);s=_s(this,m,e,n,p,g,_,k,l,le),s&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const T=Math.max(0,y.start),b=Math.min(c.count,y.start+y.count);for(let S=T,m=b;S<m;S+=3){const B=c.getX(S),R=c.getX(S+1),U=c.getX(S+2);s=_s(this,f,e,n,p,g,_,B,R,U),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(f))for(let T=0,b=x.length;T<b;T++){const S=x[T],m=f[S.materialIndex],B=Math.max(S.start,y.start),R=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let U=B,F=R;U<F;U+=3){const k=U,l=U+1,le=U+2;s=_s(this,m,e,n,p,g,_,k,l,le),s&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const T=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let S=T,m=b;S<m;S+=3){const B=S,R=S+1,U=S+2;s=_s(this,f,e,n,p,g,_,B,R,U),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function Lf(i,e,t,n,s,a,f,c){let d;if(e.side===ln?d=n.intersectTriangle(f,a,s,!0,c):d=n.intersectTriangle(s,a,f,e.side===mi,c),d===null)return null;gs.copy(c),gs.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(gs);return p<t.near||p>t.far?null:{distance:p,point:gs.clone(),object:i}}function _s(i,e,t,n,s,a,f,c,d,p){i.getVertexPosition(c,Ji),i.getVertexPosition(d,Qi),i.getVertexPosition(p,er);const g=Lf(i,e,t,n,Ji,Qi,er,ms);if(g){s&&(hs.fromBufferAttribute(s,c),ds.fromBufferAttribute(s,d),ps.fromBufferAttribute(s,p),g.uv=Rn.getInterpolation(ms,Ji,Qi,er,hs,ds,ps,new dt)),a&&(hs.fromBufferAttribute(a,c),ds.fromBufferAttribute(a,d),ps.fromBufferAttribute(a,p),g.uv1=Rn.getInterpolation(ms,Ji,Qi,er,hs,ds,ps,new dt),g.uv2=g.uv1),f&&($o.fromBufferAttribute(f,c),Zo.fromBufferAttribute(f,d),Jo.fromBufferAttribute(f,p),g.normal=Rn.getInterpolation(ms,Ji,Qi,er,$o,Zo,Jo,new X),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const _={a:c,b:d,c:p,normal:new X,materialIndex:0};Rn.getNormal(Ji,Qi,er,_.normal),g.face=_}return g}class Xr extends gn{constructor(e=1,t=1,n=1,s=1,a=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:f};const c=this;s=Math.floor(s),a=Math.floor(a),f=Math.floor(f);const d=[],p=[],g=[],_=[];let x=0,y=0;T("z","y","x",-1,-1,n,t,e,f,a,0),T("z","y","x",1,-1,n,t,-e,f,a,1),T("x","z","y",1,1,e,n,t,s,f,2),T("x","z","y",1,-1,e,n,-t,s,f,3),T("x","y","z",1,-1,e,t,n,s,a,4),T("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(d),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(_,2));function T(b,S,m,B,R,U,F,k,l,le,w){const I=U/l,me=F/le,Me=U/2,W=F/2,ie=k/2,ae=l+1,ge=le+1;let oe=0,he=0;const ve=new X;for(let de=0;de<ge;de++){const Q=de*me-W;for(let re=0;re<ae;re++){const Le=re*I-Me;ve[b]=Le*B,ve[S]=Q*R,ve[m]=ie,p.push(ve.x,ve.y,ve.z),ve[b]=0,ve[S]=0,ve[m]=k>0?1:-1,g.push(ve.x,ve.y,ve.z),_.push(re/l),_.push(1-de/le),oe+=1}}for(let de=0;de<le;de++)for(let Q=0;Q<l;Q++){const re=x+Q+ae*de,Le=x+Q+ae*(de+1),De=x+(Q+1)+ae*(de+1),Oe=x+(Q+1)+ae*de;d.push(re,Le,Oe),d.push(Le,De,Oe),he+=6}c.addGroup(y,he,w),y+=he,x+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function rn(i){const e={};for(let t=0;t<i.length;t++){const n=dr(i[t]);for(const s in n)e[s]=n[s]}return e}function Pf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sc(i){return i.getRenderTarget()===null?i.outputColorSpace:Hn}const Df={clone:dr,merge:rn};var Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=Pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const f=this.uniforms[s].value;f&&f.isTexture?t.uniforms[s]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[s]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[s]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[s]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[s]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[s]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[s]={type:"m4",value:f.toArray()}:t.uniforms[s]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ac extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mn extends ac{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,a,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,p=f.fullHeight;a+=f.offsetX*s/d,t-=f.offsetY*n/p,s*=f.width/d,n*=f.height/p}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class Nf extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const s=new Mn(tr,nr,e,t);s.layers=this.layers,this.add(s);const a=new Mn(tr,nr,e,t);a.layers=this.layers,this.add(a);const f=new Mn(tr,nr,e,t);f.layers=this.layers,this.add(f);const c=new Mn(tr,nr,e,t);c.layers=this.layers,this.add(c);const d=new Mn(tr,nr,e,t);d.layers=this.layers,this.add(d);const p=new Mn(tr,nr,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,f,c,d]=t;for(const p of t)this.remove(p);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,f,c,d,p]=this.children,g=e.getRenderTarget(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,f),e.setRenderTarget(n,3),e.render(t,c),e.setRenderTarget(n,4),e.render(t,d),n.texture.generateMipmaps=x,e.setRenderTarget(n,5),e.render(t,p),e.setRenderTarget(g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class oc extends cn{constructor(e,t,n,s,a,f,c,d,p,g){e=e!==void 0?e:[],t=t!==void 0?t:ur,super(e,t,n,s,a,f,c,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Of extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Nr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ri?Pt:Ci),this.texture=new oc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xr(5,5,5),a=new Di({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:hi});a.uniforms.tEquirect.value=t;const f=new fi(s,a),c=t.minFilter;return t.minFilter===Fr&&(t.minFilter=mn),new Nf(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,n,s);e.setRenderTarget(a)}}const Ma=new X,Ff=new X,Bf=new ht;class li{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ma.subVectors(n,t).cross(Ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bf.getNormalMatrix(e),s=this.coplanarPoint(Ma).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Wr,vs=new X;class lc{constructor(e=new li,t=new li,n=new li,s=new li,a=new li,f=new li){this.planes=[e,t,n,s,a,f]}set(e,t,n,s,a,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(a),c[5].copy(f),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,s=e.elements,a=s[0],f=s[1],c=s[2],d=s[3],p=s[4],g=s[5],_=s[6],x=s[7],y=s[8],T=s[9],b=s[10],S=s[11],m=s[12],B=s[13],R=s[14],U=s[15];if(n[0].setComponents(d-a,x-p,S-y,U-m).normalize(),n[1].setComponents(d+a,x+p,S+y,U+m).normalize(),n[2].setComponents(d+f,x+g,S+T,U+B).normalize(),n[3].setComponents(d-f,x-g,S-T,U-B).normalize(),n[4].setComponents(d-c,x-_,S-b,U-R).normalize(),t===ei)n[5].setComponents(d+c,x+_,S+b,U+R).normalize();else if(t===Rs)n[5].setComponents(c,_,b,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(vs.x=s.normal.x>0?e.max.x:e.min.x,vs.y=s.normal.y>0?e.max.y:e.min.y,vs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cc(){let i=null,e=!1,t=null,n=null;function s(a,f){t(a,f),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Hf(i,e){const t=e.isWebGL2,n=new WeakMap;function s(p,g){const _=p.array,x=p.usage,y=i.createBuffer();i.bindBuffer(g,y),i.bufferData(g,_,x),p.onUploadCallback();let T;if(_ instanceof Float32Array)T=i.FLOAT;else if(_ instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)T=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=i.UNSIGNED_SHORT;else if(_ instanceof Int16Array)T=i.SHORT;else if(_ instanceof Uint32Array)T=i.UNSIGNED_INT;else if(_ instanceof Int32Array)T=i.INT;else if(_ instanceof Int8Array)T=i.BYTE;else if(_ instanceof Uint8Array)T=i.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)T=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:y,type:T,bytesPerElement:_.BYTES_PER_ELEMENT,version:p.version}}function a(p,g,_){const x=g.array,y=g.updateRange;i.bindBuffer(_,p),y.count===-1?i.bufferSubData(_,0,x):(t?i.bufferSubData(_,y.offset*x.BYTES_PER_ELEMENT,x,y.offset,y.count):i.bufferSubData(_,y.offset*x.BYTES_PER_ELEMENT,x.subarray(y.offset,y.offset+y.count)),y.count=-1),g.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),n.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=n.get(p);g&&(i.deleteBuffer(g.buffer),n.delete(p))}function d(p,g){if(p.isGLBufferAttribute){const x=n.get(p);(!x||x.version<p.version)&&n.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const _=n.get(p);_===void 0?n.set(p,s(p,g)):_.version<p.version&&(a(_.buffer,p,g),_.version=p.version)}return{get:f,remove:c,update:d}}class Ga extends gn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,f=t/2,c=Math.floor(n),d=Math.floor(s),p=c+1,g=d+1,_=e/c,x=t/d,y=[],T=[],b=[],S=[];for(let m=0;m<g;m++){const B=m*x-f;for(let R=0;R<p;R++){const U=R*_-a;T.push(U,-B,0),b.push(0,0,1),S.push(R/c),S.push(1-m/d)}}for(let m=0;m<d;m++)for(let B=0;B<c;B++){const R=B+p*m,U=B+p*(m+1),F=B+1+p*(m+1),k=B+1+p*m;y.push(R,U,k),y.push(U,F,k)}this.setIndex(y),this.setAttribute("position",new un(T,3)),this.setAttribute("normal",new un(b,3)),this.setAttribute("uv",new un(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.widthSegments,e.heightSegments)}}var zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zf=`#ifdef USE_IRIDESCENCE
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
#endif`,Jf=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,oh=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
} // validated`,lh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,ch=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",mh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,_h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Th=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bh=`#ifdef USE_GRADIENTMAP
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
}`,Ah=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Ph=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Dh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Fh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Bh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Gh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yh=`#if defined( USE_POINTS_UV )
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
#endif`,Kh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jh=`#ifdef USE_MORPHNORMALS
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
#endif`,Qh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,ed=`#ifdef USE_MORPHTARGETS
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
#endif`,td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ad=`#ifdef USE_NORMALMAP
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
#endif`,od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yd=`float getShadowMask() {
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
}`,Ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Td=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
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
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ld=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pd=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Od=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bd=`uniform sampler2D t2D;
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
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Wd=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,Xd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,qd=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zd=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Jd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,ep=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,np=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rp=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,ap=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,op=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,lp=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,up=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fp=`uniform float size;
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
}`,hp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,dp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,pp=`uniform vec3 color;
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
}`,mp=`uniform float rotation;
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
}`,gp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ct={alphahash_fragment:zf,alphahash_pars_fragment:Gf,alphamap_fragment:kf,alphamap_pars_fragment:Vf,alphatest_fragment:Wf,alphatest_pars_fragment:Xf,aomap_fragment:qf,aomap_pars_fragment:jf,begin_vertex:Yf,beginnormal_vertex:Kf,bsdfs:$f,iridescence_fragment:Zf,bumpmap_pars_fragment:Jf,clipping_planes_fragment:Qf,clipping_planes_pars_fragment:eh,clipping_planes_pars_vertex:th,clipping_planes_vertex:nh,color_fragment:ih,color_pars_fragment:rh,color_pars_vertex:sh,color_vertex:ah,common:oh,cube_uv_reflection_fragment:lh,defaultnormal_vertex:ch,displacementmap_pars_vertex:uh,displacementmap_vertex:fh,emissivemap_fragment:hh,emissivemap_pars_fragment:dh,colorspace_fragment:ph,colorspace_pars_fragment:mh,envmap_fragment:gh,envmap_common_pars_fragment:_h,envmap_pars_fragment:vh,envmap_pars_vertex:xh,envmap_physical_pars_fragment:Ph,envmap_vertex:Mh,fog_vertex:Sh,fog_pars_vertex:yh,fog_fragment:Eh,fog_pars_fragment:Th,gradientmap_pars_fragment:bh,lightmap_fragment:Ah,lightmap_pars_fragment:wh,lights_lambert_fragment:Rh,lights_lambert_pars_fragment:Ch,lights_pars_begin:Lh,lights_toon_fragment:Dh,lights_toon_pars_fragment:Uh,lights_phong_fragment:Ih,lights_phong_pars_fragment:Nh,lights_physical_fragment:Oh,lights_physical_pars_fragment:Fh,lights_fragment_begin:Bh,lights_fragment_maps:Hh,lights_fragment_end:zh,logdepthbuf_fragment:Gh,logdepthbuf_pars_fragment:kh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:Wh,map_fragment:Xh,map_pars_fragment:qh,map_particle_fragment:jh,map_particle_pars_fragment:Yh,metalnessmap_fragment:Kh,metalnessmap_pars_fragment:$h,morphcolor_vertex:Zh,morphnormal_vertex:Jh,morphtarget_pars_vertex:Qh,morphtarget_vertex:ed,normal_fragment_begin:td,normal_fragment_maps:nd,normal_pars_fragment:id,normal_pars_vertex:rd,normal_vertex:sd,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:od,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:cd,iridescence_pars_fragment:ud,opaque_fragment:fd,packing:hd,premultiplied_alpha_fragment:dd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:gd,roughnessmap_fragment:_d,roughnessmap_pars_fragment:vd,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:Md,shadowmap_vertex:Sd,shadowmask_pars_fragment:yd,skinbase_vertex:Ed,skinning_pars_vertex:Td,skinning_vertex:bd,skinnormal_vertex:Ad,specularmap_fragment:wd,specularmap_pars_fragment:Rd,tonemapping_fragment:Cd,tonemapping_pars_fragment:Ld,transmission_fragment:Pd,transmission_pars_fragment:Dd,uv_pars_fragment:Ud,uv_pars_vertex:Id,uv_vertex:Nd,worldpos_vertex:Od,background_vert:Fd,background_frag:Bd,backgroundCube_vert:Hd,backgroundCube_frag:zd,cube_vert:Gd,cube_frag:kd,depth_vert:Vd,depth_frag:Wd,distanceRGBA_vert:Xd,distanceRGBA_frag:qd,equirect_vert:jd,equirect_frag:Yd,linedashed_vert:Kd,linedashed_frag:$d,meshbasic_vert:Zd,meshbasic_frag:Jd,meshlambert_vert:Qd,meshlambert_frag:ep,meshmatcap_vert:tp,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:rp,meshphong_vert:sp,meshphong_frag:ap,meshphysical_vert:op,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:up,points_vert:fp,points_frag:hp,shadow_vert:dp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp},Ce={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Fn={basic:{uniforms:rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new bt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:rn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:rn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new bt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:rn([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:rn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:rn([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:rn([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:rn([Ce.common,Ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:rn([Ce.lights,Ce.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Fn.physical={uniforms:rn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const xs={r:0,b:0,g:0};function _p(i,e,t,n,s,a,f){const c=new bt(0);let d=a===!0?0:1,p,g,_=null,x=0,y=null;function T(S,m){let B=!1,R=m.isScene===!0?m.background:null;R&&R.isTexture&&(R=(m.backgroundBlurriness>0?t:e).get(R)),R===null?b(c,d):R&&R.isColor&&(b(R,1),B=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,f),(i.autoClear||B)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Ls)?(g===void 0&&(g=new fi(new Xr(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:dr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,k,l){this.matrixWorld.copyPosition(l.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,g.material.toneMapped=R.colorSpace!==Pt,(_!==R||x!==R.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,_=R,x=R.version,y=i.toneMapping),g.layers.enableAll(),S.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new fi(new Ga(2,2),new Di({name:"BackgroundMaterial",uniforms:dr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.toneMapped=R.colorSpace!==Pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||x!==R.version||y!==i.toneMapping)&&(p.material.needsUpdate=!0,_=R,x=R.version,y=i.toneMapping),p.layers.enableAll(),S.unshift(p,p.geometry,p.material,0,0,null))}function b(S,m){S.getRGB(xs,sc(i)),n.buffers.color.setClear(xs.r,xs.g,xs.b,m,f)}return{getClearColor:function(){return c},setClearColor:function(S,m=1){c.set(S),d=m,b(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(S){d=S,b(c,d)},render:T}}function vp(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),f=n.isWebGL2||a!==null,c={},d=S(null);let p=d,g=!1;function _(ie,ae,ge,oe,he){let ve=!1;if(f){const de=b(oe,ge,ae);p!==de&&(p=de,y(p.object)),ve=m(ie,oe,ge,he),ve&&B(ie,oe,ge,he)}else{const de=ae.wireframe===!0;(p.geometry!==oe.id||p.program!==ge.id||p.wireframe!==de)&&(p.geometry=oe.id,p.program=ge.id,p.wireframe=de,ve=!0)}he!==null&&t.update(he,i.ELEMENT_ARRAY_BUFFER),(ve||g)&&(g=!1,le(ie,ae,ge,oe),he!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(he).buffer))}function x(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function y(ie){return n.isWebGL2?i.bindVertexArray(ie):a.bindVertexArrayOES(ie)}function T(ie){return n.isWebGL2?i.deleteVertexArray(ie):a.deleteVertexArrayOES(ie)}function b(ie,ae,ge){const oe=ge.wireframe===!0;let he=c[ie.id];he===void 0&&(he={},c[ie.id]=he);let ve=he[ae.id];ve===void 0&&(ve={},he[ae.id]=ve);let de=ve[oe];return de===void 0&&(de=S(x()),ve[oe]=de),de}function S(ie){const ae=[],ge=[],oe=[];for(let he=0;he<s;he++)ae[he]=0,ge[he]=0,oe[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ae,enabledAttributes:ge,attributeDivisors:oe,object:ie,attributes:{},index:null}}function m(ie,ae,ge,oe){const he=p.attributes,ve=ae.attributes;let de=0;const Q=ge.getAttributes();for(const re in Q)if(Q[re].location>=0){const De=he[re];let Oe=ve[re];if(Oe===void 0&&(re==="instanceMatrix"&&ie.instanceMatrix&&(Oe=ie.instanceMatrix),re==="instanceColor"&&ie.instanceColor&&(Oe=ie.instanceColor)),De===void 0||De.attribute!==Oe||Oe&&De.data!==Oe.data)return!0;de++}return p.attributesNum!==de||p.index!==oe}function B(ie,ae,ge,oe){const he={},ve=ae.attributes;let de=0;const Q=ge.getAttributes();for(const re in Q)if(Q[re].location>=0){let De=ve[re];De===void 0&&(re==="instanceMatrix"&&ie.instanceMatrix&&(De=ie.instanceMatrix),re==="instanceColor"&&ie.instanceColor&&(De=ie.instanceColor));const Oe={};Oe.attribute=De,De&&De.data&&(Oe.data=De.data),he[re]=Oe,de++}p.attributes=he,p.attributesNum=de,p.index=oe}function R(){const ie=p.newAttributes;for(let ae=0,ge=ie.length;ae<ge;ae++)ie[ae]=0}function U(ie){F(ie,0)}function F(ie,ae){const ge=p.newAttributes,oe=p.enabledAttributes,he=p.attributeDivisors;ge[ie]=1,oe[ie]===0&&(i.enableVertexAttribArray(ie),oe[ie]=1),he[ie]!==ae&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](ie,ae),he[ie]=ae)}function k(){const ie=p.newAttributes,ae=p.enabledAttributes;for(let ge=0,oe=ae.length;ge<oe;ge++)ae[ge]!==ie[ge]&&(i.disableVertexAttribArray(ge),ae[ge]=0)}function l(ie,ae,ge,oe,he,ve,de){de===!0?i.vertexAttribIPointer(ie,ae,ge,he,ve):i.vertexAttribPointer(ie,ae,ge,oe,he,ve)}function le(ie,ae,ge,oe){if(n.isWebGL2===!1&&(ie.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const he=oe.attributes,ve=ge.getAttributes(),de=ae.defaultAttributeValues;for(const Q in ve){const re=ve[Q];if(re.location>=0){let Le=he[Q];if(Le===void 0&&(Q==="instanceMatrix"&&ie.instanceMatrix&&(Le=ie.instanceMatrix),Q==="instanceColor"&&ie.instanceColor&&(Le=ie.instanceColor)),Le!==void 0){const De=Le.normalized,Oe=Le.itemSize,Ve=t.get(Le);if(Ve===void 0)continue;const Ze=Ve.buffer,Ge=Ve.type,gt=Ve.bytesPerElement,Tt=n.isWebGL2===!0&&(Ge===i.INT||Ge===i.UNSIGNED_INT||Le.gpuType===Vl);if(Le.isInterleavedBufferAttribute){const rt=Le.data,q=rt.stride,Ct=Le.offset;if(rt.isInstancedInterleavedBuffer){for(let ze=0;ze<re.locationSize;ze++)F(re.location+ze,rt.meshPerAttribute);ie.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ze=0;ze<re.locationSize;ze++)U(re.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ze=0;ze<re.locationSize;ze++)l(re.location+ze,Oe/re.locationSize,Ge,De,q*gt,(Ct+Oe/re.locationSize*ze)*gt,Tt)}else{if(Le.isInstancedBufferAttribute){for(let rt=0;rt<re.locationSize;rt++)F(re.location+rt,Le.meshPerAttribute);ie.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let rt=0;rt<re.locationSize;rt++)U(re.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let rt=0;rt<re.locationSize;rt++)l(re.location+rt,Oe/re.locationSize,Ge,De,Oe*gt,Oe/re.locationSize*rt*gt,Tt)}}else if(de!==void 0){const De=de[Q];if(De!==void 0)switch(De.length){case 2:i.vertexAttrib2fv(re.location,De);break;case 3:i.vertexAttrib3fv(re.location,De);break;case 4:i.vertexAttrib4fv(re.location,De);break;default:i.vertexAttrib1fv(re.location,De)}}}}k()}function w(){Me();for(const ie in c){const ae=c[ie];for(const ge in ae){const oe=ae[ge];for(const he in oe)T(oe[he].object),delete oe[he];delete ae[ge]}delete c[ie]}}function I(ie){if(c[ie.id]===void 0)return;const ae=c[ie.id];for(const ge in ae){const oe=ae[ge];for(const he in oe)T(oe[he].object),delete oe[he];delete ae[ge]}delete c[ie.id]}function me(ie){for(const ae in c){const ge=c[ae];if(ge[ie.id]===void 0)continue;const oe=ge[ie.id];for(const he in oe)T(oe[he].object),delete oe[he];delete ge[ie.id]}}function Me(){W(),g=!0,p!==d&&(p=d,y(p.object))}function W(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:_,reset:Me,resetDefaultState:W,dispose:w,releaseStatesOfGeometry:I,releaseStatesOfProgram:me,initAttributes:R,enableAttribute:U,disableUnusedAttributes:k}}function xp(i,e,t,n){const s=n.isWebGL2;let a;function f(p){a=p}function c(p,g){i.drawArrays(a,p,g),t.update(g,a,1)}function d(p,g,_){if(_===0)return;let x,y;if(s)x=i,y="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](a,p,g,_),t.update(g,a,_)}this.setMode=f,this.render=c,this.renderInstances=d}function Mp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const l=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(l){if(l==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const d=a(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=f||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),T=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),B=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,U=f||e.has("OES_texture_float"),F=R&&U,k=f?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:s,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:g,maxTextures:_,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:T,maxAttributes:b,maxVertexUniforms:S,maxVaryings:m,maxFragmentUniforms:B,vertexTextures:R,floatFragmentTextures:U,floatVertexTextures:F,maxSamples:k}}function Sp(i){const e=this;let t=null,n=0,s=!1,a=!1;const f=new li,c=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||n!==0||s;return s=x,n=_.length,y},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,x){t=g(_,x,0)},this.setState=function(_,x,y){const T=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,m=i.get(_);if(!s||T===null||T.length===0||a&&!S)a?g(null):p();else{const B=a?0:n,R=B*4;let U=m.clippingState||null;d.value=U,U=g(T,x,R,y);for(let F=0;F!==R;++F)U[F]=t[F];m.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=B}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(_,x,y,T){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=d.value,T!==!0||S===null){const m=y+b*4,B=x.matrixWorldInverse;c.getNormalMatrix(B),(S===null||S.length<m)&&(S=new Float32Array(m));for(let R=0,U=y;R!==b;++R,U+=4)f.copy(_[R]).applyMatrix4(B,c),f.normal.toArray(S,U),S[U+3]=f.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function yp(i){let e=new WeakMap;function t(f,c){return c===Ra?f.mapping=ur:c===Ca&&(f.mapping=fr),f}function n(f){if(f&&f.isTexture&&f.isRenderTargetTexture===!1){const c=f.mapping;if(c===Ra||c===Ca)if(e.has(f)){const d=e.get(f).texture;return t(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const p=new Of(d.height/2);return p.fromEquirectangularTexture(i,f),e.set(f,p),f.addEventListener("dispose",s),t(p.texture,f.mapping)}else return null}}return f}function s(f){const c=f.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Ep extends ac{constructor(e=-1,t=1,n=1,s=-1,a=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,f=n+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,f=a+p*this.view.width,c-=g*this.view.offsetY,d=c-g*this.view.height}this.projectionMatrix.makeOrthographic(a,f,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const or=4,Qo=[.125,.215,.35,.446,.526,.582],bi=20,Sa=new Ep,el=new bt;let ya=null;const Ti=(1+Math.sqrt(5))/2,ir=1/Ti,tl=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Ti,ir),new X(0,Ti,-ir),new X(ir,0,Ti),new X(-ir,0,Ti),new X(Ti,ir,0),new X(-Ti,ir,0)];class nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ya=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya),e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Br,format:Ln,colorSpace:Hn,depthBuffer:!1},s=il(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tp(a)),this._blurMaterial=bp(a,e,t)}return s}_compileMaterial(e){const t=new fi(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,n,s){const c=new Mn(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,x=g.toneMapping;g.getClearColor(el),g.toneMapping=di,g.autoClear=!1;const y=new nc({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),T=new fi(new Xr,y);let b=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,b=!0):(y.color.copy(el),b=!0);for(let m=0;m<6;m++){const B=m%3;B===0?(c.up.set(0,d[m],0),c.lookAt(p[m],0,0)):B===1?(c.up.set(0,0,d[m]),c.lookAt(0,p[m],0)):(c.up.set(0,d[m],0),c.lookAt(0,0,p[m]));const R=this._cubeSize;Ms(s,B*R,m>2?R:0,R,R),g.setRenderTarget(s),b&&g.render(T,c),g.render(e,c)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=x,g.autoClear=_,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ur||e.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const a=s?this._cubemapMaterial:this._equirectMaterial,f=new fi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;Ms(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(f,Sa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),f=tl[(s-1)%tl.length];this._blur(e,s-1,s,a,f)}t.autoClear=n}_blur(e,t,n,s,a){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,n,s,"latitudinal",a),this._halfBlur(f,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,f,c){const d=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new fi(this._lodPlanes[s],p),x=p.uniforms,y=this._sizeLods[n]-1,T=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*bi-1),b=a/T,S=isFinite(a)?1+Math.floor(g*b):bi;S>bi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${bi}`);const m=[];let B=0;for(let l=0;l<bi;++l){const le=l/b,w=Math.exp(-le*le/2);m.push(w),l===0?B+=w:l<S&&(B+=2*w)}for(let l=0;l<m.length;l++)m[l]=m[l]/B;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=m,x.latitudinal.value=f==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:R}=this;x.dTheta.value=T,x.mipInt.value=R-n;const U=this._sizeLods[s],F=3*U*(s>R-or?s-R+or:0),k=4*(this._cubeSize-U);Ms(t,F,k,3*U,2*U),d.setRenderTarget(t),d.render(_,Sa)}}function Tp(i){const e=[],t=[],n=[];let s=i;const a=i-or+1+Qo.length;for(let f=0;f<a;f++){const c=Math.pow(2,s);t.push(c);let d=1/c;f>i-or?d=Qo[f-i+or-1]:f===0&&(d=0),n.push(d);const p=1/(c-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,T=6,b=3,S=2,m=1,B=new Float32Array(b*T*y),R=new Float32Array(S*T*y),U=new Float32Array(m*T*y);for(let k=0;k<y;k++){const l=k%3*2/3-1,le=k>2?0:-1,w=[l,le,0,l+2/3,le,0,l+2/3,le+1,0,l,le,0,l+2/3,le+1,0,l,le+1,0];B.set(w,b*T*k),R.set(x,S*T*k);const I=[k,k,k,k,k,k];U.set(I,m*T*k)}const F=new gn;F.setAttribute("position",new Bn(B,b)),F.setAttribute("uv",new Bn(R,S)),F.setAttribute("faceIndex",new Bn(U,m)),e.push(F),s>or&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function il(i,e,t){const n=new Li(i,e,t);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bp(i,e,t){const n=new Float32Array(bi),s=new X(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ka(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function rl(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function sl(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ka(){return`

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
	`}function Ap(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,p=d===Ra||d===Ca,g=d===ur||d===fr;if(p||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new nl(i)),_=p?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(p&&_&&_.height>0||g&&_&&s(_)){t===null&&(t=new nl(i));const x=p?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,x),c.addEventListener("dispose",a),x.texture}else return null}}}return c}function s(c){let d=0;const p=6;for(let g=0;g<p;g++)c[g]!==void 0&&d++;return d===p}function a(c){const d=c.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:f}}function wp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rp(i,e,t,n){const s={},a=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const b=x.morphAttributes[T];for(let S=0,m=b.length;S<m;S++)e.remove(b[S])}x.removeEventListener("dispose",f),delete s[x.id];const y=a.get(x);y&&(e.remove(y),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(_,x){return s[x.id]===!0||(x.addEventListener("dispose",f),s[x.id]=!0,t.memory.geometries++),x}function d(_){const x=_.attributes;for(const T in x)e.update(x[T],i.ARRAY_BUFFER);const y=_.morphAttributes;for(const T in y){const b=y[T];for(let S=0,m=b.length;S<m;S++)e.update(b[S],i.ARRAY_BUFFER)}}function p(_){const x=[],y=_.index,T=_.attributes.position;let b=0;if(y!==null){const B=y.array;b=y.version;for(let R=0,U=B.length;R<U;R+=3){const F=B[R+0],k=B[R+1],l=B[R+2];x.push(F,k,k,l,l,F)}}else if(T!==void 0){const B=T.array;b=T.version;for(let R=0,U=B.length/3-1;R<U;R+=3){const F=R+0,k=R+1,l=R+2;x.push(F,k,k,l,l,F)}}else return;const S=new($l(x)?rc:ic)(x,1);S.version=b;const m=a.get(_);m&&e.remove(m),a.set(_,S)}function g(_){const x=a.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return a.get(_)}return{get:c,update:d,getWireframeAttribute:g}}function Cp(i,e,t,n){const s=n.isWebGL2;let a;function f(x){a=x}let c,d;function p(x){c=x.type,d=x.bytesPerElement}function g(x,y){i.drawElements(a,y,c,x*d),t.update(y,a,1)}function _(x,y,T){if(T===0)return;let b,S;if(s)b=i,S="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),S="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[S](a,y,c,x*d,T),t.update(y,a,T)}this.setMode=f,this.setIndex=p,this.render=g,this.renderInstances=_}function Lp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,f,c){switch(t.calls++,f){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pp(i,e){return i[0]-e[0]}function Dp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Up(i,e,t){const n={},s=new Float32Array(8),a=new WeakMap,f=new Kt,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function d(p,g,_){const x=p.morphTargetInfluences;if(e.isWebGL2===!0){const T=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,b=T!==void 0?T.length:0;let S=a.get(g);if(S===void 0||S.count!==b){let ae=function(){W.dispose(),a.delete(g),g.removeEventListener("dispose",ae)};var y=ae;S!==void 0&&S.texture.dispose();const R=g.morphAttributes.position!==void 0,U=g.morphAttributes.normal!==void 0,F=g.morphAttributes.color!==void 0,k=g.morphAttributes.position||[],l=g.morphAttributes.normal||[],le=g.morphAttributes.color||[];let w=0;R===!0&&(w=1),U===!0&&(w=2),F===!0&&(w=3);let I=g.attributes.position.count*w,me=1;I>e.maxTextureSize&&(me=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const Me=new Float32Array(I*me*4*b),W=new Ql(Me,I,me,b);W.type=ui,W.needsUpdate=!0;const ie=w*4;for(let ge=0;ge<b;ge++){const oe=k[ge],he=l[ge],ve=le[ge],de=I*me*4*ge;for(let Q=0;Q<oe.count;Q++){const re=Q*ie;R===!0&&(f.fromBufferAttribute(oe,Q),Me[de+re+0]=f.x,Me[de+re+1]=f.y,Me[de+re+2]=f.z,Me[de+re+3]=0),U===!0&&(f.fromBufferAttribute(he,Q),Me[de+re+4]=f.x,Me[de+re+5]=f.y,Me[de+re+6]=f.z,Me[de+re+7]=0),F===!0&&(f.fromBufferAttribute(ve,Q),Me[de+re+8]=f.x,Me[de+re+9]=f.y,Me[de+re+10]=f.z,Me[de+re+11]=ve.itemSize===4?f.w:1)}}S={count:b,texture:W,size:new dt(I,me)},a.set(g,S),g.addEventListener("dispose",ae)}let m=0;for(let R=0;R<x.length;R++)m+=x[R];const B=g.morphTargetsRelative?1:1-m;_.getUniforms().setValue(i,"morphTargetBaseInfluence",B),_.getUniforms().setValue(i,"morphTargetInfluences",x),_.getUniforms().setValue(i,"morphTargetsTexture",S.texture,t),_.getUniforms().setValue(i,"morphTargetsTextureSize",S.size)}else{const T=x===void 0?0:x.length;let b=n[g.id];if(b===void 0||b.length!==T){b=[];for(let U=0;U<T;U++)b[U]=[U,0];n[g.id]=b}for(let U=0;U<T;U++){const F=b[U];F[0]=U,F[1]=x[U]}b.sort(Dp);for(let U=0;U<8;U++)U<T&&b[U][1]?(c[U][0]=b[U][0],c[U][1]=b[U][1]):(c[U][0]=Number.MAX_SAFE_INTEGER,c[U][1]=0);c.sort(Pp);const S=g.morphAttributes.position,m=g.morphAttributes.normal;let B=0;for(let U=0;U<8;U++){const F=c[U],k=F[0],l=F[1];k!==Number.MAX_SAFE_INTEGER&&l?(S&&g.getAttribute("morphTarget"+U)!==S[k]&&g.setAttribute("morphTarget"+U,S[k]),m&&g.getAttribute("morphNormal"+U)!==m[k]&&g.setAttribute("morphNormal"+U,m[k]),s[U]=l,B+=l):(S&&g.hasAttribute("morphTarget"+U)===!0&&g.deleteAttribute("morphTarget"+U),m&&g.hasAttribute("morphNormal"+U)===!0&&g.deleteAttribute("morphNormal"+U),s[U]=0)}const R=g.morphTargetsRelative?1:1-B;_.getUniforms().setValue(i,"morphTargetBaseInfluence",R),_.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:d}}function Ip(i,e,t,n){let s=new WeakMap;function a(d){const p=n.render.frame,g=d.geometry,_=e.get(d,g);if(s.get(_)!==p&&(e.update(_),s.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,p))),d.isSkinnedMesh){const x=d.skeleton;s.get(x)!==p&&(x.update(),s.set(x,p))}return _}function f(){s=new WeakMap}function c(d){const p=d.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:f}}const uc=new cn,fc=new Ql,hc=new xf,dc=new oc,al=[],ol=[],ll=new Float32Array(16),cl=new Float32Array(9),ul=new Float32Array(4);function gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=al[s];if(a===void 0&&(a=new Float32Array(s),al[s]=a),e!==0){n.toArray(a,0);for(let f=1,c=0;f!==e;++f)c+=t,i[f].toArray(a,c)}return a}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Is(i,e){let t=ol[e];t===void 0&&(t=new Int32Array(e),ol[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Np(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function Hp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;ul.set(n),i.uniformMatrix2fv(this.addr,!1,ul),Vt(t,n)}}function zp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;cl.set(n),i.uniformMatrix3fv(this.addr,!1,cl),Vt(t,n)}}function Gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;ll.set(n),i.uniformMatrix4fv(this.addr,!1,ll),Vt(t,n)}}function kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function qp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function $p(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||uc,s)}function Zp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hc,s)}function Jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||dc,s)}function Qp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fc,s)}function em(i){switch(i){case 5126:return Np;case 35664:return Op;case 35665:return Fp;case 35666:return Bp;case 35674:return Hp;case 35675:return zp;case 35676:return Gp;case 5124:case 35670:return kp;case 35667:case 35671:return Vp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return qp;case 36294:return jp;case 36295:return Yp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Qp}}function tm(i,e){i.uniform1fv(this.addr,e)}function nm(i,e){const t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function im(i,e){const t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function rm(i,e){const t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function sm(i,e){const t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function am(i,e){const t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function om(i,e){const t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lm(i,e){i.uniform1iv(this.addr,e)}function cm(i,e){i.uniform2iv(this.addr,e)}function um(i,e){i.uniform3iv(this.addr,e)}function fm(i,e){i.uniform4iv(this.addr,e)}function hm(i,e){i.uniform1uiv(this.addr,e)}function dm(i,e){i.uniform2uiv(this.addr,e)}function pm(i,e){i.uniform3uiv(this.addr,e)}function mm(i,e){i.uniform4uiv(this.addr,e)}function gm(i,e,t){const n=this.cache,s=e.length,a=Is(t,s);kt(n,a)||(i.uniform1iv(this.addr,a),Vt(n,a));for(let f=0;f!==s;++f)t.setTexture2D(e[f]||uc,a[f])}function _m(i,e,t){const n=this.cache,s=e.length,a=Is(t,s);kt(n,a)||(i.uniform1iv(this.addr,a),Vt(n,a));for(let f=0;f!==s;++f)t.setTexture3D(e[f]||hc,a[f])}function vm(i,e,t){const n=this.cache,s=e.length,a=Is(t,s);kt(n,a)||(i.uniform1iv(this.addr,a),Vt(n,a));for(let f=0;f!==s;++f)t.setTextureCube(e[f]||dc,a[f])}function xm(i,e,t){const n=this.cache,s=e.length,a=Is(t,s);kt(n,a)||(i.uniform1iv(this.addr,a),Vt(n,a));for(let f=0;f!==s;++f)t.setTexture2DArray(e[f]||fc,a[f])}function Mm(i){switch(i){case 5126:return tm;case 35664:return nm;case 35665:return im;case 35666:return rm;case 35674:return sm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return um;case 35669:case 35673:return fm;case 5125:return hm;case 36294:return dm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return xm}}class Sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=em(t.type)}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Mm(t.type)}}class Em{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,f=s.length;a!==f;++a){const c=s[a];c.setValue(e,t[c.id],n)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function fl(i,e){i.seq.push(e),i.map[e.id]=e}function Tm(i,e,t){const n=i.name,s=n.length;for(Ea.lastIndex=0;;){const a=Ea.exec(n),f=Ea.lastIndex;let c=a[1];const d=a[2]==="]",p=a[3];if(d&&(c=c|0),p===void 0||p==="["&&f+2===s){fl(t,p===void 0?new Sm(c,i,e):new ym(c,i,e));break}else{let _=t.map[c];_===void 0&&(_=new Em(c),fl(t,_)),t=_}}}class As{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),f=e.getUniformLocation(t,a.name);Tm(a,f,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,f=t.length;a!==f;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const f=e[s];f.id in t&&n.push(f)}return n}}function hl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let bm=0;function Am(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let f=s;f<a;f++){const c=f+1;n.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return n.join(`
`)}function wm(i){switch(i){case Hn:return["Linear","( value )"];case Pt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function dl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const f=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Am(i.getShaderSource(e),f)}else return s}function Rm(i,e){const t=wm(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Cm(i,e){let t;switch(e){case xu:t="Linear";break;case Mu:t="Reinhard";break;case Su:t="OptimizedCineon";break;case yu:t="ACESFilmic";break;case Eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Lm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dr).join(`
`)}function Pm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),f=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[f]={type:a.type,location:i.getAttribLocation(e,f),locationSize:c}}return t}function Dr(i){return i!==""}function pl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ml(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(Um,Nm)}const Im=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nm(i,e){let t=ct[e];if(t===void 0){const n=Im.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const Om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(Om,Fm)}function Fm(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function _l(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ur:case fr:e="ENVMAP_TYPE_CUBE";break;case Ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function Gm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case _u:e="ENVMAP_BLENDING_MIX";break;case vu:e="ENVMAP_BLENDING_ADD";break}return e}function km(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vm(i,e,t,n){const s=i.getContext(),a=t.defines;let f=t.vertexShader,c=t.fragmentShader;const d=Bm(t),p=Hm(t),g=zm(t),_=Gm(t),x=km(t),y=t.isWebGL2?"":Lm(t),T=Pm(a),b=s.createProgram();let S,m,B=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Dr).join(`
`),S.length>0&&(S+=`
`),m=[y,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Dr).join(`
`),m.length>0&&(m+=`
`)):(S=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),m=[y,_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?ct.tonemapping_pars_fragment:"",t.toneMapping!==di?Cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Rm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),f=Ia(f),f=pl(f,t),f=ml(f,t),c=Ia(c),c=pl(c,t),c=ml(c,t),f=gl(f),c=gl(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,S=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=B+S+f,U=B+m+c,F=hl(s,s.VERTEX_SHADER,R),k=hl(s,s.FRAGMENT_SHADER,U);if(s.attachShader(b,F),s.attachShader(b,k),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b),i.debug.checkShaderErrors){const w=s.getProgramInfoLog(b).trim(),I=s.getShaderInfoLog(F).trim(),me=s.getShaderInfoLog(k).trim();let Me=!0,W=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,F,k);else{const ie=dl(s,F,"vertex"),ae=dl(s,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+ie+`
`+ae)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(I===""||me==="")&&(W=!1);W&&(this.diagnostics={runnable:Me,programLog:w,vertexShader:{log:I,prefix:S},fragmentShader:{log:me,prefix:m}})}s.deleteShader(F),s.deleteShader(k);let l;this.getUniforms=function(){return l===void 0&&(l=new As(s,b)),l};let le;return this.getAttributes=function(){return le===void 0&&(le=Dm(s,b)),le},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=F,this.fragmentShader=k,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),f=this._getShaderCacheForMaterial(e);return f.has(s)===!1&&(f.add(s),s.usedTimes++),f.has(a)===!1&&(f.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qm(e),t.set(e,n)),n}}class qm{constructor(e){this.id=Wm++,this.code=e,this.usedTimes=0}}function jm(i,e,t,n,s,a,f){const c=new ec,d=new Xm,p=[],g=s.isWebGL2,_=s.logarithmicDepthBuffer,x=s.vertexTextures;let y=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return w===0?"uv":`uv${w}`}function S(w,I,me,Me,W){const ie=Me.fog,ae=W.geometry,ge=w.isMeshStandardMaterial?Me.environment:null,oe=(w.isMeshStandardMaterial?t:e).get(w.envMap||ge),he=oe&&oe.mapping===Ls?oe.image.height:null,ve=T[w.type];w.precision!==null&&(y=s.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const de=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Q=de!==void 0?de.length:0;let re=0;ae.morphAttributes.position!==void 0&&(re=1),ae.morphAttributes.normal!==void 0&&(re=2),ae.morphAttributes.color!==void 0&&(re=3);let Le,De,Oe,Ve;if(ve){const At=Fn[ve];Le=At.vertexShader,De=At.fragmentShader}else Le=w.vertexShader,De=w.fragmentShader,d.update(w),Oe=d.getVertexShaderID(w),Ve=d.getFragmentShaderID(w);const Ze=i.getRenderTarget(),Ge=W.isInstancedMesh===!0,gt=!!w.map,Tt=!!w.matcap,rt=!!oe,q=!!w.aoMap,Ct=!!w.lightMap,ze=!!w.bumpMap,Qe=!!w.normalMap,We=!!w.displacementMap,St=!!w.emissiveMap,je=!!w.metalnessMap,tt=!!w.roughnessMap,vt=w.anisotropy>0,Nt=w.clearcoat>0,yt=w.iridescence>0,P=w.sheen>0,A=w.transmission>0,z=vt&&!!w.anisotropyMap,pe=Nt&&!!w.clearcoatMap,xe=Nt&&!!w.clearcoatNormalMap,ye=Nt&&!!w.clearcoatRoughnessMap,Be=yt&&!!w.iridescenceMap,Ee=yt&&!!w.iridescenceThicknessMap,ee=P&&!!w.sheenColorMap,O=P&&!!w.sheenRoughnessMap,fe=!!w.specularMap,we=!!w.specularColorMap,Te=!!w.specularIntensityMap,Pe=A&&!!w.transmissionMap,Xe=A&&!!w.thicknessMap,ut=!!w.gradientMap,G=!!w.alphaMap,Re=w.alphaTest>0,Z=!!w.alphaHash,_e=!!w.extensions,be=!!ae.attributes.uv1,ot=!!ae.attributes.uv2,st=!!ae.attributes.uv3;let at=di;return w.toneMapped&&(Ze===null||Ze.isXRRenderTarget===!0)&&(at=i.toneMapping),{isWebGL2:g,shaderID:ve,shaderType:w.type,shaderName:w.name,vertexShader:Le,fragmentShader:De,defines:w.defines,customVertexShaderID:Oe,customFragmentShaderID:Ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,instancing:Ge,instancingColor:Ge&&W.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:Ze===null?i.outputColorSpace:Ze.isXRRenderTarget===!0?Ze.texture.colorSpace:Hn,map:gt,matcap:Tt,envMap:rt,envMapMode:rt&&oe.mapping,envMapCubeUVHeight:he,aoMap:q,lightMap:Ct,bumpMap:ze,normalMap:Qe,displacementMap:x&&We,emissiveMap:St,normalMapObjectSpace:Qe&&w.normalMapType===Fu,normalMapTangentSpace:Qe&&w.normalMapType===Ou,metalnessMap:je,roughnessMap:tt,anisotropy:vt,anisotropyMap:z,clearcoat:Nt,clearcoatMap:pe,clearcoatNormalMap:xe,clearcoatRoughnessMap:ye,iridescence:yt,iridescenceMap:Be,iridescenceThicknessMap:Ee,sheen:P,sheenColorMap:ee,sheenRoughnessMap:O,specularMap:fe,specularColorMap:we,specularIntensityMap:Te,transmission:A,transmissionMap:Pe,thicknessMap:Xe,gradientMap:ut,opaque:w.transparent===!1&&w.blending===lr,alphaMap:G,alphaTest:Re,alphaHash:Z,combine:w.combine,mapUv:gt&&b(w.map.channel),aoMapUv:q&&b(w.aoMap.channel),lightMapUv:Ct&&b(w.lightMap.channel),bumpMapUv:ze&&b(w.bumpMap.channel),normalMapUv:Qe&&b(w.normalMap.channel),displacementMapUv:We&&b(w.displacementMap.channel),emissiveMapUv:St&&b(w.emissiveMap.channel),metalnessMapUv:je&&b(w.metalnessMap.channel),roughnessMapUv:tt&&b(w.roughnessMap.channel),anisotropyMapUv:z&&b(w.anisotropyMap.channel),clearcoatMapUv:pe&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:xe&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:O&&b(w.sheenRoughnessMap.channel),specularMapUv:fe&&b(w.specularMap.channel),specularColorMapUv:we&&b(w.specularColorMap.channel),specularIntensityMapUv:Te&&b(w.specularIntensityMap.channel),transmissionMapUv:Pe&&b(w.transmissionMap.channel),thicknessMapUv:Xe&&b(w.thicknessMap.channel),alphaMapUv:G&&b(w.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Qe||vt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:ot,vertexUv3s:st,pointsUvs:W.isPoints===!0&&!!ae.attributes.uv&&(gt||G),fog:!!ie,useFog:w.fog===!0,fogExp2:ie&&ie.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:W.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:re,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&me.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,useLegacyLights:i._useLegacyLights,decodeVideoTexture:gt&&w.map.isVideoTexture===!0&&w.map.colorSpace===Pt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Qn,flipSided:w.side===ln,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:_e&&w.extensions.derivatives===!0,extensionFragDepth:_e&&w.extensions.fragDepth===!0,extensionDrawBuffers:_e&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function m(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const me in w.defines)I.push(me),I.push(w.defines[me]);return w.isRawShaderMaterial===!1&&(B(I,w),R(I,w),I.push(i.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function B(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function R(w,I){c.disableAll(),I.isWebGL2&&c.enable(0),I.supportsVertexTextures&&c.enable(1),I.instancing&&c.enable(2),I.instancingColor&&c.enable(3),I.matcap&&c.enable(4),I.envMap&&c.enable(5),I.normalMapObjectSpace&&c.enable(6),I.normalMapTangentSpace&&c.enable(7),I.clearcoat&&c.enable(8),I.iridescence&&c.enable(9),I.alphaTest&&c.enable(10),I.vertexColors&&c.enable(11),I.vertexAlphas&&c.enable(12),I.vertexUv1s&&c.enable(13),I.vertexUv2s&&c.enable(14),I.vertexUv3s&&c.enable(15),I.vertexTangents&&c.enable(16),I.anisotropy&&c.enable(17),w.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.skinning&&c.enable(4),I.morphTargets&&c.enable(5),I.morphNormals&&c.enable(6),I.morphColors&&c.enable(7),I.premultipliedAlpha&&c.enable(8),I.shadowMapEnabled&&c.enable(9),I.useLegacyLights&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),w.push(c.mask)}function U(w){const I=T[w.type];let me;if(I){const Me=Fn[I];me=Df.clone(Me.uniforms)}else me=w.uniforms;return me}function F(w,I){let me;for(let Me=0,W=p.length;Me<W;Me++){const ie=p[Me];if(ie.cacheKey===I){me=ie,++me.usedTimes;break}}return me===void 0&&(me=new Vm(i,I,w,a),p.push(me)),me}function k(w){if(--w.usedTimes===0){const I=p.indexOf(w);p[I]=p[p.length-1],p.pop(),w.destroy()}}function l(w){d.remove(w)}function le(){d.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:U,acquireProgram:F,releaseProgram:k,releaseShaderCache:l,programs:p,dispose:le}}function Ym(){let i=new WeakMap;function e(a){let f=i.get(a);return f===void 0&&(f={},i.set(a,f)),f}function t(a){i.delete(a)}function n(a,f,c){i.get(a)[f]=c}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Km(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xl(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function f(_,x,y,T,b,S){let m=i[e];return m===void 0?(m={id:_.id,object:_,geometry:x,material:y,groupOrder:T,renderOrder:_.renderOrder,z:b,group:S},i[e]=m):(m.id=_.id,m.object=_,m.geometry=x,m.material=y,m.groupOrder=T,m.renderOrder=_.renderOrder,m.z=b,m.group=S),e++,m}function c(_,x,y,T,b,S){const m=f(_,x,y,T,b,S);y.transmission>0?n.push(m):y.transparent===!0?s.push(m):t.push(m)}function d(_,x,y,T,b,S){const m=f(_,x,y,T,b,S);y.transmission>0?n.unshift(m):y.transparent===!0?s.unshift(m):t.unshift(m)}function p(_,x){t.length>1&&t.sort(_||Km),n.length>1&&n.sort(x||vl),s.length>1&&s.sort(x||vl)}function g(){for(let _=e,x=i.length;_<x;_++){const y=i[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:c,unshift:d,finish:g,sort:p}}function $m(){let i=new WeakMap;function e(n,s){const a=i.get(n);let f;return a===void 0?(f=new xl,i.set(n,[f])):s>=a.length?(f=new xl,a.push(f)):f=a[s],f}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new bt};break;case"SpotLight":t={position:new X,direction:new X,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function Jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qm=0;function eg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tg(i,e){const t=new Zm,n=Jm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)s.probe.push(new X);const a=new X,f=new Gt,c=new Gt;function d(g,_){let x=0,y=0,T=0;for(let me=0;me<9;me++)s.probe[me].set(0,0,0);let b=0,S=0,m=0,B=0,R=0,U=0,F=0,k=0,l=0,le=0;g.sort(eg);const w=_===!0?Math.PI:1;for(let me=0,Me=g.length;me<Me;me++){const W=g[me],ie=W.color,ae=W.intensity,ge=W.distance,oe=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)x+=ie.r*ae*w,y+=ie.g*ae*w,T+=ie.b*ae*w;else if(W.isLightProbe)for(let he=0;he<9;he++)s.probe[he].addScaledVector(W.sh.coefficients[he],ae);else if(W.isDirectionalLight){const he=t.get(W);if(he.color.copy(W.color).multiplyScalar(W.intensity*w),W.castShadow){const ve=W.shadow,de=n.get(W);de.shadowBias=ve.bias,de.shadowNormalBias=ve.normalBias,de.shadowRadius=ve.radius,de.shadowMapSize=ve.mapSize,s.directionalShadow[b]=de,s.directionalShadowMap[b]=oe,s.directionalShadowMatrix[b]=W.shadow.matrix,U++}s.directional[b]=he,b++}else if(W.isSpotLight){const he=t.get(W);he.position.setFromMatrixPosition(W.matrixWorld),he.color.copy(ie).multiplyScalar(ae*w),he.distance=ge,he.coneCos=Math.cos(W.angle),he.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),he.decay=W.decay,s.spot[m]=he;const ve=W.shadow;if(W.map&&(s.spotLightMap[l]=W.map,l++,ve.updateMatrices(W),W.castShadow&&le++),s.spotLightMatrix[m]=ve.matrix,W.castShadow){const de=n.get(W);de.shadowBias=ve.bias,de.shadowNormalBias=ve.normalBias,de.shadowRadius=ve.radius,de.shadowMapSize=ve.mapSize,s.spotShadow[m]=de,s.spotShadowMap[m]=oe,k++}m++}else if(W.isRectAreaLight){const he=t.get(W);he.color.copy(ie).multiplyScalar(ae),he.halfWidth.set(W.width*.5,0,0),he.halfHeight.set(0,W.height*.5,0),s.rectArea[B]=he,B++}else if(W.isPointLight){const he=t.get(W);if(he.color.copy(W.color).multiplyScalar(W.intensity*w),he.distance=W.distance,he.decay=W.decay,W.castShadow){const ve=W.shadow,de=n.get(W);de.shadowBias=ve.bias,de.shadowNormalBias=ve.normalBias,de.shadowRadius=ve.radius,de.shadowMapSize=ve.mapSize,de.shadowCameraNear=ve.camera.near,de.shadowCameraFar=ve.camera.far,s.pointShadow[S]=de,s.pointShadowMap[S]=oe,s.pointShadowMatrix[S]=W.shadow.matrix,F++}s.point[S]=he,S++}else if(W.isHemisphereLight){const he=t.get(W);he.skyColor.copy(W.color).multiplyScalar(ae*w),he.groundColor.copy(W.groundColor).multiplyScalar(ae*w),s.hemi[R]=he,R++}}B>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=x,s.ambient[1]=y,s.ambient[2]=T;const I=s.hash;(I.directionalLength!==b||I.pointLength!==S||I.spotLength!==m||I.rectAreaLength!==B||I.hemiLength!==R||I.numDirectionalShadows!==U||I.numPointShadows!==F||I.numSpotShadows!==k||I.numSpotMaps!==l)&&(s.directional.length=b,s.spot.length=m,s.rectArea.length=B,s.point.length=S,s.hemi.length=R,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=k,s.spotShadowMap.length=k,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=k+l-le,s.spotLightMap.length=l,s.numSpotLightShadowsWithMaps=le,I.directionalLength=b,I.pointLength=S,I.spotLength=m,I.rectAreaLength=B,I.hemiLength=R,I.numDirectionalShadows=U,I.numPointShadows=F,I.numSpotShadows=k,I.numSpotMaps=l,s.version=Qm++)}function p(g,_){let x=0,y=0,T=0,b=0,S=0;const m=_.matrixWorldInverse;for(let B=0,R=g.length;B<R;B++){const U=g[B];if(U.isDirectionalLight){const F=s.directional[x];F.direction.setFromMatrixPosition(U.matrixWorld),a.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(m),x++}else if(U.isSpotLight){const F=s.spot[T];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(m),F.direction.setFromMatrixPosition(U.matrixWorld),a.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(m),T++}else if(U.isRectAreaLight){const F=s.rectArea[b];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(m),c.identity(),f.copy(U.matrixWorld),f.premultiply(m),c.extractRotation(f),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),F.halfWidth.applyMatrix4(c),F.halfHeight.applyMatrix4(c),b++}else if(U.isPointLight){const F=s.point[y];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(m),y++}else if(U.isHemisphereLight){const F=s.hemi[S];F.direction.setFromMatrixPosition(U.matrixWorld),F.direction.transformDirection(m),S++}}}return{setup:d,setupView:p,state:s}}function Ml(i,e){const t=new tg(i,e),n=[],s=[];function a(){n.length=0,s.length=0}function f(_){n.push(_)}function c(_){s.push(_)}function d(_){t.setup(n,_)}function p(_){t.setupView(n,_)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:d,setupLightsView:p,pushLight:f,pushShadow:c}}function ng(i,e){let t=new WeakMap;function n(a,f=0){const c=t.get(a);let d;return c===void 0?(d=new Ml(i,e),t.set(a,[d])):f>=c.length?(d=new Ml(i,e),c.push(d)):d=c[f],d}function s(){t=new WeakMap}return{get:n,dispose:s}}class ig extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rg extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
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
}`;function og(i,e,t){let n=new lc;const s=new dt,a=new dt,f=new Kt,c=new ig({depthPacking:Nu}),d=new rg,p={},g=t.maxTextureSize,_={[mi]:ln,[ln]:mi,[Qn]:Qn},x=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:sg,fragmentShader:ag}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new gn;T.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new fi(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let m=this.type;this.render=function(F,k,l){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const le=i.getRenderTarget(),w=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),me=i.state;me.setBlending(hi),me.buffers.color.setClear(1,1,1,1),me.buffers.depth.setTest(!0),me.setScissorTest(!1);const Me=m!==Jn&&this.type===Jn,W=m===Jn&&this.type!==Jn;for(let ie=0,ae=F.length;ie<ae;ie++){const ge=F[ie],oe=ge.shadow;if(oe===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;s.copy(oe.mapSize);const he=oe.getFrameExtents();if(s.multiply(he),a.copy(oe.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(a.x=Math.floor(g/he.x),s.x=a.x*he.x,oe.mapSize.x=a.x),s.y>g&&(a.y=Math.floor(g/he.y),s.y=a.y*he.y,oe.mapSize.y=a.y)),oe.map===null||Me===!0||W===!0){const de=this.type!==Jn?{minFilter:Qt,magFilter:Qt}:{};oe.map!==null&&oe.map.dispose(),oe.map=new Li(s.x,s.y,de),oe.map.texture.name=ge.name+".shadowMap",oe.camera.updateProjectionMatrix()}i.setRenderTarget(oe.map),i.clear();const ve=oe.getViewportCount();for(let de=0;de<ve;de++){const Q=oe.getViewport(de);f.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),me.viewport(f),oe.updateMatrices(ge,de),n=oe.getFrustum(),U(k,l,oe.camera,ge,this.type)}oe.isPointLightShadow!==!0&&this.type===Jn&&B(oe,l),oe.needsUpdate=!1}m=this.type,S.needsUpdate=!1,i.setRenderTarget(le,w,I)};function B(F,k){const l=e.update(b);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Li(s.x,s.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(k,null,l,x,b,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(k,null,l,y,b,null)}function R(F,k,l,le){let w=null;const I=l.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(I!==void 0)w=I;else if(w=l.isPointLight===!0?d:c,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const me=w.uuid,Me=k.uuid;let W=p[me];W===void 0&&(W={},p[me]=W);let ie=W[Me];ie===void 0&&(ie=w.clone(),W[Me]=ie),w=ie}if(w.visible=k.visible,w.wireframe=k.wireframe,le===Jn?w.side=k.shadowSide!==null?k.shadowSide:k.side:w.side=k.shadowSide!==null?k.shadowSide:_[k.side],w.alphaMap=k.alphaMap,w.alphaTest=k.alphaTest,w.map=k.map,w.clipShadows=k.clipShadows,w.clippingPlanes=k.clippingPlanes,w.clipIntersection=k.clipIntersection,w.displacementMap=k.displacementMap,w.displacementScale=k.displacementScale,w.displacementBias=k.displacementBias,w.wireframeLinewidth=k.wireframeLinewidth,w.linewidth=k.linewidth,l.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const me=i.properties.get(w);me.light=l}return w}function U(F,k,l,le,w){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===Jn)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(l.matrixWorldInverse,F.matrixWorld);const Me=e.update(F),W=F.material;if(Array.isArray(W)){const ie=Me.groups;for(let ae=0,ge=ie.length;ae<ge;ae++){const oe=ie[ae],he=W[oe.materialIndex];if(he&&he.visible){const ve=R(F,he,le,w);i.renderBufferDirect(l,null,Me,ve,F,oe)}}}else if(W.visible){const ie=R(F,W,le,w);i.renderBufferDirect(l,null,Me,ie,F,null)}}const me=F.children;for(let Me=0,W=me.length;Me<W;Me++)U(me[Me],k,l,le,w)}}function lg(i,e,t){const n=t.isWebGL2;function s(){let G=!1;const Re=new Kt;let Z=null;const _e=new Kt(0,0,0,0);return{setMask:function(be){Z!==be&&!G&&(i.colorMask(be,be,be,be),Z=be)},setLocked:function(be){G=be},setClear:function(be,ot,st,at,qt){qt===!0&&(be*=at,ot*=at,st*=at),Re.set(be,ot,st,at),_e.equals(Re)===!1&&(i.clearColor(be,ot,st,at),_e.copy(Re))},reset:function(){G=!1,Z=null,_e.set(-1,0,0,0)}}}function a(){let G=!1,Re=null,Z=null,_e=null;return{setTest:function(be){be?Ze(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(be){Re!==be&&!G&&(i.depthMask(be),Re=be)},setFunc:function(be){if(Z!==be){switch(be){case uu:i.depthFunc(i.NEVER);break;case fu:i.depthFunc(i.ALWAYS);break;case hu:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case du:i.depthFunc(i.EQUAL);break;case pu:i.depthFunc(i.GEQUAL);break;case mu:i.depthFunc(i.GREATER);break;case gu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=be}},setLocked:function(be){G=be},setClear:function(be){_e!==be&&(i.clearDepth(be),_e=be)},reset:function(){G=!1,Re=null,Z=null,_e=null}}}function f(){let G=!1,Re=null,Z=null,_e=null,be=null,ot=null,st=null,at=null,qt=null;return{setTest:function(At){G||(At?Ze(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(At){Re!==At&&!G&&(i.stencilMask(At),Re=At)},setFunc:function(At,fn,Wt){(Z!==At||_e!==fn||be!==Wt)&&(i.stencilFunc(At,fn,Wt),Z=At,_e=fn,be=Wt)},setOp:function(At,fn,Wt){(ot!==At||st!==fn||at!==Wt)&&(i.stencilOp(At,fn,Wt),ot=At,st=fn,at=Wt)},setLocked:function(At){G=At},setClear:function(At){qt!==At&&(i.clearStencil(At),qt=At)},reset:function(){G=!1,Re=null,Z=null,_e=null,be=null,ot=null,st=null,at=null,qt=null}}}const c=new s,d=new a,p=new f,g=new WeakMap,_=new WeakMap;let x={},y={},T=new WeakMap,b=[],S=null,m=!1,B=null,R=null,U=null,F=null,k=null,l=null,le=null,w=!1,I=null,me=null,Me=null,W=null,ie=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ge=!1,oe=0;const he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(he)[1]),ge=oe>=1):he.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),ge=oe>=2);let ve=null,de={};const Q=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),Le=new Kt().fromArray(Q),De=new Kt().fromArray(re);function Oe(G,Re,Z,_e){const be=new Uint8Array(4),ot=i.createTexture();i.bindTexture(G,ot),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<Z;st++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(Re,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(Re+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return ot}const Ve={};Ve[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ve[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ve[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ve[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Ze(i.DEPTH_TEST),d.setFunc(wa),We(!1),St(ro),Ze(i.CULL_FACE),ze(hi);function Ze(G){x[G]!==!0&&(i.enable(G),x[G]=!0)}function Ge(G){x[G]!==!1&&(i.disable(G),x[G]=!1)}function gt(G,Re){return y[G]!==Re?(i.bindFramebuffer(G,Re),y[G]=Re,n&&(G===i.DRAW_FRAMEBUFFER&&(y[i.FRAMEBUFFER]=Re),G===i.FRAMEBUFFER&&(y[i.DRAW_FRAMEBUFFER]=Re)),!0):!1}function Tt(G,Re){let Z=b,_e=!1;if(G)if(Z=T.get(Re),Z===void 0&&(Z=[],T.set(Re,Z)),G.isWebGLMultipleRenderTargets){const be=G.texture;if(Z.length!==be.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,st=be.length;ot<st;ot++)Z[ot]=i.COLOR_ATTACHMENT0+ot;Z.length=be.length,_e=!0}}else Z[0]!==i.COLOR_ATTACHMENT0&&(Z[0]=i.COLOR_ATTACHMENT0,_e=!0);else Z[0]!==i.BACK&&(Z[0]=i.BACK,_e=!0);_e&&(t.isWebGL2?i.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function rt(G){return S!==G?(i.useProgram(G),S=G,!0):!1}const q={[sr]:i.FUNC_ADD,[Qc]:i.FUNC_SUBTRACT,[eu]:i.FUNC_REVERSE_SUBTRACT};if(n)q[oo]=i.MIN,q[lo]=i.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(q[oo]=G.MIN_EXT,q[lo]=G.MAX_EXT)}const Ct={[tu]:i.ZERO,[nu]:i.ONE,[iu]:i.SRC_COLOR,[Hl]:i.SRC_ALPHA,[cu]:i.SRC_ALPHA_SATURATE,[ou]:i.DST_COLOR,[su]:i.DST_ALPHA,[ru]:i.ONE_MINUS_SRC_COLOR,[zl]:i.ONE_MINUS_SRC_ALPHA,[lu]:i.ONE_MINUS_DST_COLOR,[au]:i.ONE_MINUS_DST_ALPHA};function ze(G,Re,Z,_e,be,ot,st,at){if(G===hi){m===!0&&(Ge(i.BLEND),m=!1);return}if(m===!1&&(Ze(i.BLEND),m=!0),G!==Jc){if(G!==B||at!==w){if((R!==sr||k!==sr)&&(i.blendEquation(i.FUNC_ADD),R=sr,k=sr),at)switch(G){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ws:i.blendFunc(i.ONE,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ao:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ws:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ao:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}U=null,F=null,l=null,le=null,B=G,w=at}return}be=be||Re,ot=ot||Z,st=st||_e,(Re!==R||be!==k)&&(i.blendEquationSeparate(q[Re],q[be]),R=Re,k=be),(Z!==U||_e!==F||ot!==l||st!==le)&&(i.blendFuncSeparate(Ct[Z],Ct[_e],Ct[ot],Ct[st]),U=Z,F=_e,l=ot,le=st),B=G,w=!1}function Qe(G,Re){G.side===Qn?Ge(i.CULL_FACE):Ze(i.CULL_FACE);let Z=G.side===ln;Re&&(Z=!Z),We(Z),G.blending===lr&&G.transparent===!1?ze(hi):ze(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),c.setMask(G.colorWrite);const _e=G.stencilWrite;p.setTest(_e),_e&&(p.setMask(G.stencilWriteMask),p.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),p.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),tt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ze(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(G){I!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),I=G)}function St(G){G!==Kc?(Ze(i.CULL_FACE),G!==me&&(G===ro?i.cullFace(i.BACK):G===$c?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),me=G}function je(G){G!==Me&&(ge&&i.lineWidth(G),Me=G)}function tt(G,Re,Z){G?(Ze(i.POLYGON_OFFSET_FILL),(W!==Re||ie!==Z)&&(i.polygonOffset(Re,Z),W=Re,ie=Z)):Ge(i.POLYGON_OFFSET_FILL)}function vt(G){G?Ze(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function Nt(G){G===void 0&&(G=i.TEXTURE0+ae-1),ve!==G&&(i.activeTexture(G),ve=G)}function yt(G,Re,Z){Z===void 0&&(ve===null?Z=i.TEXTURE0+ae-1:Z=ve);let _e=de[Z];_e===void 0&&(_e={type:void 0,texture:void 0},de[Z]=_e),(_e.type!==G||_e.texture!==Re)&&(ve!==Z&&(i.activeTexture(Z),ve=Z),i.bindTexture(G,Re||Ve[G]),_e.type=G,_e.texture=Re)}function P(){const G=de[ve];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function A(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function O(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(G){Le.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Le.copy(G))}function Te(G){De.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),De.copy(G))}function Pe(G,Re){let Z=_.get(Re);Z===void 0&&(Z=new WeakMap,_.set(Re,Z));let _e=Z.get(G);_e===void 0&&(_e=i.getUniformBlockIndex(Re,G.name),Z.set(G,_e))}function Xe(G,Re){const _e=_.get(Re).get(G);g.get(Re)!==_e&&(i.uniformBlockBinding(Re,_e,G.__bindingPointIndex),g.set(Re,_e))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),x={},ve=null,de={},y={},T=new WeakMap,b=[],S=null,m=!1,B=null,R=null,U=null,F=null,k=null,l=null,le=null,w=!1,I=null,me=null,Me=null,W=null,ie=null,Le.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Ze,disable:Ge,bindFramebuffer:gt,drawBuffers:Tt,useProgram:rt,setBlending:ze,setMaterial:Qe,setFlipSided:We,setCullFace:St,setLineWidth:je,setPolygonOffset:tt,setScissorTest:vt,activeTexture:Nt,bindTexture:yt,unbindTexture:P,compressedTexImage2D:A,compressedTexImage3D:z,texImage2D:O,texImage3D:fe,updateUBOMapping:Pe,uniformBlockBinding:Xe,texStorage2D:Ee,texStorage3D:ee,texSubImage2D:pe,texSubImage3D:xe,compressedTexSubImage2D:ye,compressedTexSubImage3D:Be,scissor:we,viewport:Te,reset:ut}}function cg(i,e,t,n,s,a,f){const c=s.isWebGL2,d=s.maxTextures,p=s.maxCubemapSize,g=s.maxTextureSize,_=s.maxSamples,x=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap;let b;const S=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function B(P,A){return m?new OffscreenCanvas(P,A):zr("canvas")}function R(P,A,z,pe){let xe=1;if((P.width>pe||P.height>pe)&&(xe=pe/Math.max(P.width,P.height)),xe<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ye=A?Cs:Math.floor,Be=ye(xe*P.width),Ee=ye(xe*P.height);b===void 0&&(b=B(Be,Ee));const ee=z?B(Be,Ee):b;return ee.width=Be,ee.height=Ee,ee.getContext("2d").drawImage(P,0,0,Be,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Be+"x"+Ee+")."),ee}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function U(P){return Ua(P.width)&&Ua(P.height)}function F(P){return c?!1:P.wrapS!==Cn||P.wrapT!==Cn||P.minFilter!==Qt&&P.minFilter!==mn}function k(P,A){return P.generateMipmaps&&A&&P.minFilter!==Qt&&P.minFilter!==mn}function l(P){i.generateMipmap(P)}function le(P,A,z,pe,xe=!1){if(c===!1)return A;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ye=A;return A===i.RED&&(z===i.FLOAT&&(ye=i.R32F),z===i.HALF_FLOAT&&(ye=i.R16F),z===i.UNSIGNED_BYTE&&(ye=i.R8)),A===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(ye=i.R8UI),z===i.UNSIGNED_SHORT&&(ye=i.R16UI),z===i.UNSIGNED_INT&&(ye=i.R32UI),z===i.BYTE&&(ye=i.R8I),z===i.SHORT&&(ye=i.R16I),z===i.INT&&(ye=i.R32I)),A===i.RG&&(z===i.FLOAT&&(ye=i.RG32F),z===i.HALF_FLOAT&&(ye=i.RG16F),z===i.UNSIGNED_BYTE&&(ye=i.RG8)),A===i.RGBA&&(z===i.FLOAT&&(ye=i.RGBA32F),z===i.HALF_FLOAT&&(ye=i.RGBA16F),z===i.UNSIGNED_BYTE&&(ye=pe===Pt&&xe===!1?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(ye=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(ye=i.RGB5_A1)),(ye===i.R16F||ye===i.R32F||ye===i.RG16F||ye===i.RG32F||ye===i.RGBA16F||ye===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function w(P,A,z){return k(P,z)===!0||P.isFramebufferTexture&&P.minFilter!==Qt&&P.minFilter!==mn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function I(P){return P===Qt||P===co||P===Zs?i.NEAREST:i.LINEAR}function me(P){const A=P.target;A.removeEventListener("dispose",me),W(A),A.isVideoTexture&&T.delete(A)}function Me(P){const A=P.target;A.removeEventListener("dispose",Me),ae(A)}function W(P){const A=n.get(P);if(A.__webglInit===void 0)return;const z=P.source,pe=S.get(z);if(pe){const xe=pe[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&ie(P),Object.keys(pe).length===0&&S.delete(z)}n.remove(P)}function ie(P){const A=n.get(P);i.deleteTexture(A.__webglTexture);const z=P.source,pe=S.get(z);delete pe[A.__cacheKey],f.memory.textures--}function ae(P){const A=P.texture,z=n.get(P),pe=n.get(A);if(pe.__webglTexture!==void 0&&(i.deleteTexture(pe.__webglTexture),f.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(z.__webglFramebuffer[xe]))for(let ye=0;ye<z.__webglFramebuffer[xe].length;ye++)i.deleteFramebuffer(z.__webglFramebuffer[xe][ye]);else i.deleteFramebuffer(z.__webglFramebuffer[xe]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[xe])}else{if(Array.isArray(z.__webglFramebuffer))for(let xe=0;xe<z.__webglFramebuffer.length;xe++)i.deleteFramebuffer(z.__webglFramebuffer[xe]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let xe=0;xe<z.__webglColorRenderbuffer.length;xe++)z.__webglColorRenderbuffer[xe]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[xe]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let xe=0,ye=A.length;xe<ye;xe++){const Be=n.get(A[xe]);Be.__webglTexture&&(i.deleteTexture(Be.__webglTexture),f.memory.textures--),n.remove(A[xe])}n.remove(A),n.remove(P)}let ge=0;function oe(){ge=0}function he(){const P=ge;return P>=d&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+d),ge+=1,P}function ve(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function de(P,A){const z=n.get(P);if(P.isVideoTexture&&Nt(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(z,P,A);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+A)}function Q(P,A){const z=n.get(P);if(P.version>0&&z.__version!==P.version){gt(z,P,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+A)}function re(P,A){const z=n.get(P);if(P.version>0&&z.__version!==P.version){gt(z,P,A);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+A)}function Le(P,A){const z=n.get(P);if(P.version>0&&z.__version!==P.version){Tt(z,P,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+A)}const De={[La]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},Oe={[Qt]:i.NEAREST,[co]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Tu]:i.LINEAR_MIPMAP_NEAREST,[Fr]:i.LINEAR_MIPMAP_LINEAR},Ve={[Hu]:i.NEVER,[qu]:i.ALWAYS,[zu]:i.LESS,[ku]:i.LEQUAL,[Gu]:i.EQUAL,[Xu]:i.GEQUAL,[Vu]:i.GREATER,[Wu]:i.NOTEQUAL};function Ze(P,A,z){if(z?(i.texParameteri(P,i.TEXTURE_WRAP_S,De[A.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,De[A.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,De[A.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Oe[A.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Oe[A.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Cn||A.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,I(A.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,I(A.minFilter)),A.minFilter!==Qt&&A.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ve[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Qt||A.minFilter!==Zs&&A.minFilter!==Fr||A.type===ui&&e.has("OES_texture_float_linear")===!1||c===!1&&A.type===Br&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(P,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Ge(P,A){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",me));const pe=A.source;let xe=S.get(pe);xe===void 0&&(xe={},S.set(pe,xe));const ye=ve(A);if(ye!==P.__cacheKey){xe[ye]===void 0&&(xe[ye]={texture:i.createTexture(),usedTimes:0},f.memory.textures++,z=!0),xe[ye].usedTimes++;const Be=xe[P.__cacheKey];Be!==void 0&&(xe[P.__cacheKey].usedTimes--,Be.usedTimes===0&&ie(A)),P.__cacheKey=ye,P.__webglTexture=xe[ye].texture}return z}function gt(P,A,z){let pe=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=i.TEXTURE_3D);const xe=Ge(P,A),ye=A.source;t.bindTexture(pe,P.__webglTexture,i.TEXTURE0+z);const Be=n.get(ye);if(ye.version!==Be.__version||xe===!0){t.activeTexture(i.TEXTURE0+z),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Ee=F(A)&&U(A.image)===!1;let ee=R(A.image,Ee,!1,g);ee=yt(A,ee);const O=U(ee)||c,fe=a.convert(A.format,A.colorSpace);let we=a.convert(A.type),Te=le(A.internalFormat,fe,we,A.colorSpace,A.isVideoTexture);Ze(pe,A,O);let Pe;const Xe=A.mipmaps,ut=c&&A.isVideoTexture!==!0,G=Be.__version===void 0||xe===!0,Re=w(A,ee,O);if(A.isDepthTexture)Te=i.DEPTH_COMPONENT,c?A.type===ui?Te=i.DEPTH_COMPONENT32F:A.type===ci?Te=i.DEPTH_COMPONENT24:A.type===Ai?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:A.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===wi&&Te===i.DEPTH_COMPONENT&&A.type!==Ha&&A.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ci,we=a.convert(A.type)),A.format===hr&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,A.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ai,we=a.convert(A.type))),G&&(ut?t.texStorage2D(i.TEXTURE_2D,1,Te,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Te,ee.width,ee.height,0,fe,we,null));else if(A.isDataTexture)if(Xe.length>0&&O){ut&&G&&t.texStorage2D(i.TEXTURE_2D,Re,Te,Xe[0].width,Xe[0].height);for(let Z=0,_e=Xe.length;Z<_e;Z++)Pe=Xe[Z],ut?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Pe.width,Pe.height,fe,we,Pe.data):t.texImage2D(i.TEXTURE_2D,Z,Te,Pe.width,Pe.height,0,fe,we,Pe.data);A.generateMipmaps=!1}else ut?(G&&t.texStorage2D(i.TEXTURE_2D,Re,Te,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,we,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Te,ee.width,ee.height,0,fe,we,ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ut&&G&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Te,Xe[0].width,Xe[0].height,ee.depth);for(let Z=0,_e=Xe.length;Z<_e;Z++)Pe=Xe[Z],A.format!==Ln?fe!==null?ut?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Pe.width,Pe.height,ee.depth,fe,Pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Te,Pe.width,Pe.height,ee.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Pe.width,Pe.height,ee.depth,fe,we,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Te,Pe.width,Pe.height,ee.depth,0,fe,we,Pe.data)}else{ut&&G&&t.texStorage2D(i.TEXTURE_2D,Re,Te,Xe[0].width,Xe[0].height);for(let Z=0,_e=Xe.length;Z<_e;Z++)Pe=Xe[Z],A.format!==Ln?fe!==null?ut?t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Pe.width,Pe.height,fe,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Te,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Pe.width,Pe.height,fe,we,Pe.data):t.texImage2D(i.TEXTURE_2D,Z,Te,Pe.width,Pe.height,0,fe,we,Pe.data)}else if(A.isDataArrayTexture)ut?(G&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Te,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,we,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,fe,we,ee.data);else if(A.isData3DTexture)ut?(G&&t.texStorage3D(i.TEXTURE_3D,Re,Te,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,we,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,fe,we,ee.data);else if(A.isFramebufferTexture){if(G)if(ut)t.texStorage2D(i.TEXTURE_2D,Re,Te,ee.width,ee.height);else{let Z=ee.width,_e=ee.height;for(let be=0;be<Re;be++)t.texImage2D(i.TEXTURE_2D,be,Te,Z,_e,0,fe,we,null),Z>>=1,_e>>=1}}else if(Xe.length>0&&O){ut&&G&&t.texStorage2D(i.TEXTURE_2D,Re,Te,Xe[0].width,Xe[0].height);for(let Z=0,_e=Xe.length;Z<_e;Z++)Pe=Xe[Z],ut?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,fe,we,Pe):t.texImage2D(i.TEXTURE_2D,Z,Te,fe,we,Pe);A.generateMipmaps=!1}else ut?(G&&t.texStorage2D(i.TEXTURE_2D,Re,Te,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,we,ee)):t.texImage2D(i.TEXTURE_2D,0,Te,fe,we,ee);k(A,O)&&l(pe),Be.__version=ye.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Tt(P,A,z){if(A.image.length!==6)return;const pe=Ge(P,A),xe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+z);const ye=n.get(xe);if(xe.version!==ye.__version||pe===!0){t.activeTexture(i.TEXTURE0+z),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Be=A.isCompressedTexture||A.image[0].isCompressedTexture,Ee=A.image[0]&&A.image[0].isDataTexture,ee=[];for(let Z=0;Z<6;Z++)!Be&&!Ee?ee[Z]=R(A.image[Z],!1,!0,p):ee[Z]=Ee?A.image[Z].image:A.image[Z],ee[Z]=yt(A,ee[Z]);const O=ee[0],fe=U(O)||c,we=a.convert(A.format,A.colorSpace),Te=a.convert(A.type),Pe=le(A.internalFormat,we,Te,A.colorSpace),Xe=c&&A.isVideoTexture!==!0,ut=ye.__version===void 0||pe===!0;let G=w(A,O,fe);Ze(i.TEXTURE_CUBE_MAP,A,fe);let Re;if(Be){Xe&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Pe,O.width,O.height);for(let Z=0;Z<6;Z++){Re=ee[Z].mipmaps;for(let _e=0;_e<Re.length;_e++){const be=Re[_e];A.format!==Ln?we!==null?Xe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,be.width,be.height,we,Te,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,Pe,be.width,be.height,0,we,Te,be.data)}}}else{Re=A.mipmaps,Xe&&ut&&(Re.length>0&&G++,t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Pe,ee[0].width,ee[0].height));for(let Z=0;Z<6;Z++)if(Ee){Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ee[Z].width,ee[Z].height,we,Te,ee[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Pe,ee[Z].width,ee[Z].height,0,we,Te,ee[Z].data);for(let _e=0;_e<Re.length;_e++){const ot=Re[_e].image[Z].image;Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,ot.width,ot.height,we,Te,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,Pe,ot.width,ot.height,0,we,Te,ot.data)}}else{Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,Te,ee[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Pe,we,Te,ee[Z]);for(let _e=0;_e<Re.length;_e++){const be=Re[_e];Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,we,Te,be.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,Pe,we,Te,be.image[Z])}}}k(A,fe)&&l(i.TEXTURE_CUBE_MAP),ye.__version=xe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function rt(P,A,z,pe,xe,ye){const Be=a.convert(z.format,z.colorSpace),Ee=a.convert(z.type),ee=le(z.internalFormat,Be,Ee,z.colorSpace);if(!n.get(A).__hasExternalTextures){const fe=Math.max(1,A.width>>ye),we=Math.max(1,A.height>>ye);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,ye,ee,fe,we,A.depth,0,Be,Ee,null):t.texImage2D(xe,ye,ee,fe,we,0,Be,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),vt(A)?x.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,xe,n.get(z).__webglTexture,0,tt(A)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,xe,n.get(z).__webglTexture,ye),t.bindFramebuffer(i.FRAMEBUFFER,null)}function q(P,A,z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let pe=i.DEPTH_COMPONENT16;if(z||vt(A)){const xe=A.depthTexture;xe&&xe.isDepthTexture&&(xe.type===ui?pe=i.DEPTH_COMPONENT32F:xe.type===ci&&(pe=i.DEPTH_COMPONENT24));const ye=tt(A);vt(A)?x.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,pe,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,pe,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,pe,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const pe=tt(A);z&&vt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,i.DEPTH24_STENCIL8,A.width,A.height):vt(A)?x.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const pe=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let xe=0;xe<pe.length;xe++){const ye=pe[xe],Be=a.convert(ye.format,ye.colorSpace),Ee=a.convert(ye.type),ee=le(ye.internalFormat,Be,Ee,ye.colorSpace),O=tt(A);z&&vt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,O,ee,A.width,A.height):vt(A)?x.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O,ee,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ee,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),de(A.depthTexture,0);const pe=n.get(A.depthTexture).__webglTexture,xe=tt(A);if(A.depthTexture.format===wi)vt(A)?x.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(A.depthTexture.format===hr)vt(A)?x.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function ze(P){const A=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ct(A.__webglFramebuffer,P)}else if(z){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]=i.createRenderbuffer(),q(A.__webglDepthbuffer[pe],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),q(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(P,A,z){const pe=n.get(P);A!==void 0&&rt(pe.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ze(P)}function We(P){const A=P.texture,z=n.get(P),pe=n.get(A);P.addEventListener("dispose",Me),P.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=A.version,f.memory.textures++);const xe=P.isWebGLCubeRenderTarget===!0,ye=P.isWebGLMultipleRenderTargets===!0,Be=U(P)||c;if(xe){z.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(c&&A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer[Ee]=[];for(let ee=0;ee<A.mipmaps.length;ee++)z.__webglFramebuffer[Ee][ee]=i.createFramebuffer()}else z.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(c&&A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)z.__webglFramebuffer[Ee]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ye)if(s.drawBuffers){const Ee=P.texture;for(let ee=0,O=Ee.length;ee<O;ee++){const fe=n.get(Ee[ee]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&P.samples>0&&vt(P)===!1){const Ee=ye?A:[A];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ee=0;ee<Ee.length;ee++){const O=Ee[ee];z.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ee]);const fe=a.convert(O.format,O.colorSpace),we=a.convert(O.type),Te=le(O.internalFormat,fe,we,O.colorSpace,P.isXRRenderTarget===!0),Pe=tt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Te,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,z.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),q(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,A,Be);for(let Ee=0;Ee<6;Ee++)if(c&&A.mipmaps&&A.mipmaps.length>0)for(let ee=0;ee<A.mipmaps.length;ee++)rt(z.__webglFramebuffer[Ee][ee],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ee);else rt(z.__webglFramebuffer[Ee],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);k(A,Be)&&l(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){const Ee=P.texture;for(let ee=0,O=Ee.length;ee<O;ee++){const fe=Ee[ee],we=n.get(fe);t.bindTexture(i.TEXTURE_2D,we.__webglTexture),Ze(i.TEXTURE_2D,fe,Be),rt(z.__webglFramebuffer,P,fe,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D,0),k(fe,Be)&&l(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(c?Ee=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,pe.__webglTexture),Ze(Ee,A,Be),c&&A.mipmaps&&A.mipmaps.length>0)for(let ee=0;ee<A.mipmaps.length;ee++)rt(z.__webglFramebuffer[ee],P,A,i.COLOR_ATTACHMENT0,Ee,ee);else rt(z.__webglFramebuffer,P,A,i.COLOR_ATTACHMENT0,Ee,0);k(A,Be)&&l(Ee),t.unbindTexture()}P.depthBuffer&&ze(P)}function St(P){const A=U(P)||c,z=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let pe=0,xe=z.length;pe<xe;pe++){const ye=z[pe];if(k(ye,A)){const Be=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ee=n.get(ye).__webglTexture;t.bindTexture(Be,Ee),l(Be),t.unbindTexture()}}}function je(P){if(c&&P.samples>0&&vt(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],z=P.width,pe=P.height;let xe=i.COLOR_BUFFER_BIT;const ye=[],Be=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(P),ee=P.isWebGLMultipleRenderTargets===!0;if(ee)for(let O=0;O<A.length;O++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let O=0;O<A.length;O++){ye.push(i.COLOR_ATTACHMENT0+O),P.depthBuffer&&ye.push(Be);const fe=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(fe===!1&&(P.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),ee&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[O]),fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Be])),ee){const we=n.get(A[O]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,z,pe,0,0,z,pe,xe,i.NEAREST),y&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let O=0;O<A.length;O++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[O]);const fe=n.get(A[O]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function tt(P){return Math.min(_,P.samples)}function vt(P){const A=n.get(P);return c&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Nt(P){const A=f.render.frame;T.get(P)!==A&&(T.set(P,A),P.update())}function yt(P,A){const z=P.colorSpace,pe=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Da||z!==Hn&&z!==Ci&&(z===Pt||z===Ps?c===!1?e.has("EXT_sRGB")===!0&&pe===Ln?(P.format=Da,P.minFilter=mn,P.generateMipmaps=!1):A=Zl.sRGBToLinear(A):(pe!==Ln||xe!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),A}this.allocateTextureUnit=he,this.resetTextureUnits=oe,this.setTexture2D=de,this.setTexture2DArray=Q,this.setTexture3D=re,this.setTextureCube=Le,this.rebindTextures=Qe,this.setupRenderTarget=We,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=vt}const ug=0,zt=1;function fg(i,e,t){const n=t.isWebGL2;function s(a,f=Ci){let c;const d=f===Pt||f===Ps?zt:ug;if(a===pi)return i.UNSIGNED_BYTE;if(a===Wl)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Xl)return i.UNSIGNED_SHORT_5_5_5_1;if(a===bu)return i.BYTE;if(a===Au)return i.SHORT;if(a===Ha)return i.UNSIGNED_SHORT;if(a===Vl)return i.INT;if(a===ci)return i.UNSIGNED_INT;if(a===ui)return i.FLOAT;if(a===Br)return n?i.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===wu)return i.ALPHA;if(a===Ln)return i.RGBA;if(a===Ru)return i.LUMINANCE;if(a===Cu)return i.LUMINANCE_ALPHA;if(a===wi)return i.DEPTH_COMPONENT;if(a===hr)return i.DEPTH_STENCIL;if(a===Da)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===Lu)return i.RED;if(a===ql)return i.RED_INTEGER;if(a===Pu)return i.RG;if(a===jl)return i.RG_INTEGER;if(a===Yl)return i.RGBA_INTEGER;if(a===Js||a===Qs||a===ea||a===ta)if(d===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Js)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Qs)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ea)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ta)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Js)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Qs)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ea)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ta)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===uo||a===fo||a===ho||a===po)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===uo)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===fo)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ho)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===po)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Du)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===mo||a===go)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===mo)return d===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===go)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===_o||a===vo||a===xo||a===Mo||a===So||a===yo||a===Eo||a===To||a===bo||a===Ao||a===wo||a===Ro||a===Co||a===Lo)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===_o)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===vo)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===xo)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Mo)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===So)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===yo)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Eo)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===To)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===bo)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ao)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===wo)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ro)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Co)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Lo)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===na||a===Po||a===Do)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===na)return d===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Po)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Do)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Uu||a===Uo||a===Io||a===No)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===na)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Uo)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Io)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===No)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ai?n?i.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:s}}class hg extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dg={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,f=null;const c=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const b of e.hand.values()){const S=t.getJointPose(b,n),m=this._getHandJoint(p,b);S!==null&&(m.matrix.fromArray(S.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=S.radius),m.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,T=.005;p.inputState.pinching&&x>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=a!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pg extends cn{constructor(e,t,n,s,a,f,c,d,p,g){if(g=g!==void 0?g:wi,g!==wi&&g!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===wi&&(n=ci),n===void 0&&g===hr&&(n=Ai),super(null,s,a,f,c,d,g,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Qt,this.minFilter=d!==void 0?d:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mg extends Ui{constructor(e,t){super();const n=this;let s=null,a=1,f=null,c="local-floor",d=1,p=null,g=null,_=null,x=null,y=null,T=null;const b=t.getContextAttributes();let S=null,m=null;const B=[],R=[],U=new Mn;U.layers.enable(1),U.viewport=new Kt;const F=new Mn;F.layers.enable(2),F.viewport=new Kt;const k=[U,F],l=new hg;l.layers.enable(1),l.layers.enable(2);let le=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=B[Q];return re===void 0&&(re=new Ta,B[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=B[Q];return re===void 0&&(re=new Ta,B[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=B[Q];return re===void 0&&(re=new Ta,B[Q]=re),re.getHandSpace()};function I(Q){const re=R.indexOf(Q.inputSource);if(re===-1)return;const Le=B[re];Le!==void 0&&(Le.update(Q.inputSource,Q.frame,p||f),Le.dispatchEvent({type:Q.type,data:Q.inputSource}))}function me(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",me),s.removeEventListener("inputsourceschange",Me);for(let Q=0;Q<B.length;Q++){const re=R[Q];re!==null&&(R[Q]=null,B[Q].disconnect(re))}le=null,w=null,e.setRenderTarget(S),y=null,x=null,_=null,s=null,m=null,de.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",me),s.addEventListener("inputsourceschange",Me),b.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:y}),m=new Li(y.framebufferWidth,y.framebufferHeight,{format:Ln,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let re=null,Le=null,De=null;b.depth&&(De=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=b.stencil?hr:wi,Le=b.stencil?Ai:ci);const Oe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:a};_=new XRWebGLBinding(s,t),x=_.createProjectionLayer(Oe),s.updateRenderState({layers:[x]}),m=new Li(x.textureWidth,x.textureHeight,{format:Ln,type:pi,depthTexture:new pg(x.textureWidth,x.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const Ve=e.properties.get(m);Ve.__ignoreDepthValues=x.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(d),p=null,f=await s.requestReferenceSpace(c),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Me(Q){for(let re=0;re<Q.removed.length;re++){const Le=Q.removed[re],De=R.indexOf(Le);De>=0&&(R[De]=null,B[De].disconnect(Le))}for(let re=0;re<Q.added.length;re++){const Le=Q.added[re];let De=R.indexOf(Le);if(De===-1){for(let Ve=0;Ve<B.length;Ve++)if(Ve>=R.length){R.push(Le),De=Ve;break}else if(R[Ve]===null){R[Ve]=Le,De=Ve;break}if(De===-1)break}const Oe=B[De];Oe&&Oe.connect(Le)}}const W=new X,ie=new X;function ae(Q,re,Le){W.setFromMatrixPosition(re.matrixWorld),ie.setFromMatrixPosition(Le.matrixWorld);const De=W.distanceTo(ie),Oe=re.projectionMatrix.elements,Ve=Le.projectionMatrix.elements,Ze=Oe[14]/(Oe[10]-1),Ge=Oe[14]/(Oe[10]+1),gt=(Oe[9]+1)/Oe[5],Tt=(Oe[9]-1)/Oe[5],rt=(Oe[8]-1)/Oe[0],q=(Ve[8]+1)/Ve[0],Ct=Ze*rt,ze=Ze*q,Qe=De/(-rt+q),We=Qe*-rt;re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(We),Q.translateZ(Qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const St=Ze+Qe,je=Ge+Qe,tt=Ct-We,vt=ze+(De-We),Nt=gt*Ge/je*St,yt=Tt*Ge/je*St;Q.projectionMatrix.makePerspective(tt,vt,Nt,yt,St,je),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ge(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;l.near=F.near=U.near=Q.near,l.far=F.far=U.far=Q.far,(le!==l.near||w!==l.far)&&(s.updateRenderState({depthNear:l.near,depthFar:l.far}),le=l.near,w=l.far);const re=Q.parent,Le=l.cameras;ge(l,re);for(let De=0;De<Le.length;De++)ge(Le[De],re);Le.length===2?ae(l,U,F):l.projectionMatrix.copy(U.projectionMatrix),oe(Q,l,re)};function oe(Q,re,Le){Le===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(Le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Hr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return l},this.getFoveation=function(){if(!(x===null&&y===null))return d},this.setFoveation=function(Q){d=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)};let he=null;function ve(Q,re){if(g=re.getViewerPose(p||f),T=re,g!==null){const Le=g.views;y!==null&&(e.setRenderTargetFramebuffer(m,y.framebuffer),e.setRenderTarget(m));let De=!1;Le.length!==l.cameras.length&&(l.cameras.length=0,De=!0);for(let Oe=0;Oe<Le.length;Oe++){const Ve=Le[Oe];let Ze=null;if(y!==null)Ze=y.getViewport(Ve);else{const gt=_.getViewSubImage(x,Ve);Ze=gt.viewport,Oe===0&&(e.setRenderTargetTextures(m,gt.colorTexture,x.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(m))}let Ge=k[Oe];Ge===void 0&&(Ge=new Mn,Ge.layers.enable(Oe),Ge.viewport=new Kt,k[Oe]=Ge),Ge.matrix.fromArray(Ve.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ve.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Oe===0&&(l.matrix.copy(Ge.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale)),De===!0&&l.cameras.push(Ge)}}for(let Le=0;Le<B.length;Le++){const De=R[Le],Oe=B[Le];De!==null&&Oe!==void 0&&Oe.update(De,re,p||f)}he&&he(Q,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),T=null}const de=new cc;de.setAnimationLoop(ve),this.setAnimationLoop=function(Q){he=Q},this.dispose=function(){}}}function gg(i,e){function t(S,m){S.matrixAutoUpdate===!0&&S.updateMatrix(),m.value.copy(S.matrix)}function n(S,m){m.color.getRGB(S.fogColor.value,sc(i)),m.isFog?(S.fogNear.value=m.near,S.fogFar.value=m.far):m.isFogExp2&&(S.fogDensity.value=m.density)}function s(S,m,B,R,U){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(S,m):m.isMeshToonMaterial?(a(S,m),_(S,m)):m.isMeshPhongMaterial?(a(S,m),g(S,m)):m.isMeshStandardMaterial?(a(S,m),x(S,m),m.isMeshPhysicalMaterial&&y(S,m,U)):m.isMeshMatcapMaterial?(a(S,m),T(S,m)):m.isMeshDepthMaterial?a(S,m):m.isMeshDistanceMaterial?(a(S,m),b(S,m)):m.isMeshNormalMaterial?a(S,m):m.isLineBasicMaterial?(f(S,m),m.isLineDashedMaterial&&c(S,m)):m.isPointsMaterial?d(S,m,B,R):m.isSpriteMaterial?p(S,m):m.isShadowMaterial?(S.color.value.copy(m.color),S.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(S,m){S.opacity.value=m.opacity,m.color&&S.diffuse.value.copy(m.color),m.emissive&&S.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(S.map.value=m.map,t(m.map,S.mapTransform)),m.alphaMap&&(S.alphaMap.value=m.alphaMap,t(m.alphaMap,S.alphaMapTransform)),m.bumpMap&&(S.bumpMap.value=m.bumpMap,t(m.bumpMap,S.bumpMapTransform),S.bumpScale.value=m.bumpScale,m.side===ln&&(S.bumpScale.value*=-1)),m.normalMap&&(S.normalMap.value=m.normalMap,t(m.normalMap,S.normalMapTransform),S.normalScale.value.copy(m.normalScale),m.side===ln&&S.normalScale.value.negate()),m.displacementMap&&(S.displacementMap.value=m.displacementMap,t(m.displacementMap,S.displacementMapTransform),S.displacementScale.value=m.displacementScale,S.displacementBias.value=m.displacementBias),m.emissiveMap&&(S.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,S.emissiveMapTransform)),m.specularMap&&(S.specularMap.value=m.specularMap,t(m.specularMap,S.specularMapTransform)),m.alphaTest>0&&(S.alphaTest.value=m.alphaTest);const B=e.get(m).envMap;if(B&&(S.envMap.value=B,S.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=m.reflectivity,S.ior.value=m.ior,S.refractionRatio.value=m.refractionRatio),m.lightMap){S.lightMap.value=m.lightMap;const R=i._useLegacyLights===!0?Math.PI:1;S.lightMapIntensity.value=m.lightMapIntensity*R,t(m.lightMap,S.lightMapTransform)}m.aoMap&&(S.aoMap.value=m.aoMap,S.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,S.aoMapTransform))}function f(S,m){S.diffuse.value.copy(m.color),S.opacity.value=m.opacity,m.map&&(S.map.value=m.map,t(m.map,S.mapTransform))}function c(S,m){S.dashSize.value=m.dashSize,S.totalSize.value=m.dashSize+m.gapSize,S.scale.value=m.scale}function d(S,m,B,R){S.diffuse.value.copy(m.color),S.opacity.value=m.opacity,S.size.value=m.size*B,S.scale.value=R*.5,m.map&&(S.map.value=m.map,t(m.map,S.uvTransform)),m.alphaMap&&(S.alphaMap.value=m.alphaMap,t(m.alphaMap,S.alphaMapTransform)),m.alphaTest>0&&(S.alphaTest.value=m.alphaTest)}function p(S,m){S.diffuse.value.copy(m.color),S.opacity.value=m.opacity,S.rotation.value=m.rotation,m.map&&(S.map.value=m.map,t(m.map,S.mapTransform)),m.alphaMap&&(S.alphaMap.value=m.alphaMap,t(m.alphaMap,S.alphaMapTransform)),m.alphaTest>0&&(S.alphaTest.value=m.alphaTest)}function g(S,m){S.specular.value.copy(m.specular),S.shininess.value=Math.max(m.shininess,1e-4)}function _(S,m){m.gradientMap&&(S.gradientMap.value=m.gradientMap)}function x(S,m){S.metalness.value=m.metalness,m.metalnessMap&&(S.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,S.metalnessMapTransform)),S.roughness.value=m.roughness,m.roughnessMap&&(S.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,S.roughnessMapTransform)),e.get(m).envMap&&(S.envMapIntensity.value=m.envMapIntensity)}function y(S,m,B){S.ior.value=m.ior,m.sheen>0&&(S.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),S.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(S.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,S.sheenColorMapTransform)),m.sheenRoughnessMap&&(S.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,S.sheenRoughnessMapTransform))),m.clearcoat>0&&(S.clearcoat.value=m.clearcoat,S.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(S.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,S.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(S.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&S.clearcoatNormalScale.value.negate())),m.iridescence>0&&(S.iridescence.value=m.iridescence,S.iridescenceIOR.value=m.iridescenceIOR,S.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(S.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,S.iridescenceMapTransform)),m.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),m.transmission>0&&(S.transmission.value=m.transmission,S.transmissionSamplerMap.value=B.texture,S.transmissionSamplerSize.value.set(B.width,B.height),m.transmissionMap&&(S.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,S.transmissionMapTransform)),S.thickness.value=m.thickness,m.thicknessMap&&(S.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=m.attenuationDistance,S.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(S.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(S.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=m.specularIntensity,S.specularColor.value.copy(m.specularColor),m.specularColorMap&&(S.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,S.specularColorMapTransform)),m.specularIntensityMap&&(S.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,m){m.matcap&&(S.matcap.value=m.matcap)}function b(S,m){const B=e.get(m).light;S.referencePosition.value.setFromMatrixPosition(B.matrixWorld),S.nearDistance.value=B.shadow.camera.near,S.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _g(i,e,t,n){let s={},a={},f=[];const c=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(B,R){const U=R.program;n.uniformBlockBinding(B,U)}function p(B,R){let U=s[B.id];U===void 0&&(T(B),U=g(B),s[B.id]=U,B.addEventListener("dispose",S));const F=R.program;n.updateUBOMapping(B,F);const k=e.render.frame;a[B.id]!==k&&(x(B),a[B.id]=k)}function g(B){const R=_();B.__bindingPointIndex=R;const U=i.createBuffer(),F=B.__size,k=B.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,F,k),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,U),U}function _(){for(let B=0;B<c;B++)if(f.indexOf(B)===-1)return f.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const R=s[B.id],U=B.uniforms,F=B.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let k=0,l=U.length;k<l;k++){const le=U[k];if(y(le,k,F)===!0){const w=le.__offset,I=Array.isArray(le.value)?le.value:[le.value];let me=0;for(let Me=0;Me<I.length;Me++){const W=I[Me],ie=b(W);typeof W=="number"?(le.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,w+me,le.__data)):W.isMatrix3?(le.__data[0]=W.elements[0],le.__data[1]=W.elements[1],le.__data[2]=W.elements[2],le.__data[3]=W.elements[0],le.__data[4]=W.elements[3],le.__data[5]=W.elements[4],le.__data[6]=W.elements[5],le.__data[7]=W.elements[0],le.__data[8]=W.elements[6],le.__data[9]=W.elements[7],le.__data[10]=W.elements[8],le.__data[11]=W.elements[0]):(W.toArray(le.__data,me),me+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,w,le.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(B,R,U){const F=B.value;if(U[R]===void 0){if(typeof F=="number")U[R]=F;else{const k=Array.isArray(F)?F:[F],l=[];for(let le=0;le<k.length;le++)l.push(k[le].clone());U[R]=l}return!0}else if(typeof F=="number"){if(U[R]!==F)return U[R]=F,!0}else{const k=Array.isArray(U[R])?U[R]:[U[R]],l=Array.isArray(F)?F:[F];for(let le=0;le<k.length;le++){const w=k[le];if(w.equals(l[le])===!1)return w.copy(l[le]),!0}}return!1}function T(B){const R=B.uniforms;let U=0;const F=16;let k=0;for(let l=0,le=R.length;l<le;l++){const w=R[l],I={boundary:0,storage:0},me=Array.isArray(w.value)?w.value:[w.value];for(let Me=0,W=me.length;Me<W;Me++){const ie=me[Me],ae=b(ie);I.boundary+=ae.boundary,I.storage+=ae.storage}if(w.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=U,l>0){k=U%F;const Me=F-k;k!==0&&Me-I.boundary<0&&(U+=F-k,w.__offset=U)}U+=I.storage}return k=U%F,k>0&&(U+=F-k),B.__size=U,B.__cache={},this}function b(B){const R={boundary:0,storage:0};return typeof B=="number"?(R.boundary=4,R.storage=4):B.isVector2?(R.boundary=8,R.storage=8):B.isVector3||B.isColor?(R.boundary=16,R.storage=12):B.isVector4?(R.boundary=16,R.storage=16):B.isMatrix3?(R.boundary=48,R.storage=48):B.isMatrix4?(R.boundary=64,R.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),R}function S(B){const R=B.target;R.removeEventListener("dispose",S);const U=f.indexOf(R.__bindingPointIndex);f.splice(U,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete a[R.id]}function m(){for(const B in s)i.deleteBuffer(s[B]);f=[],s={},a={}}return{bind:d,update:p,dispose:m}}class pc{constructor(e={}){const{canvas:t=cf(),context:n=null,depth:s=!0,stencil:a=!0,alpha:f=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let x;n!==null?x=n.getContextAttributes().alpha:x=f;const y=new Uint32Array(4),T=new Int32Array(4);let b=null,S=null;const m=[],B=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;const R=this;let U=!1,F=0,k=0,l=null,le=-1,w=null;const I=new Kt,me=new Kt;let Me=null;const W=new bt(0);let ie=0,ae=t.width,ge=t.height,oe=1,he=null,ve=null;const de=new Kt(0,0,ae,ge),Q=new Kt(0,0,ae,ge);let re=!1;const Le=new lc;let De=!1,Oe=!1,Ve=null;const Ze=new Gt,Ge=new dt,gt=new X,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return l===null?oe:1}let q=n;function Ct(L,Y){for(let ne=0;ne<L.length;ne++){const $=L[ne],se=t.getContext($,Y);if(se!==null)return se}return null}try{const L={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ba}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",_e,!1),q===null){const Y=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&Y.shift(),q=Ct(Y,L),q===null)throw Ct(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ze,Qe,We,St,je,tt,vt,Nt,yt,P,A,z,pe,xe,ye,Be,Ee,ee,O,fe,we,Te,Pe,Xe;function ut(){ze=new wp(q),Qe=new Mp(q,ze,e),ze.init(Qe),Te=new fg(q,ze,Qe),We=new lg(q,ze,Qe),St=new Lp(q),je=new Ym,tt=new cg(q,ze,We,je,Qe,Te,St),vt=new yp(R),Nt=new Ap(R),yt=new Hf(q,Qe),Pe=new vp(q,ze,yt,Qe),P=new Rp(q,yt,St,Pe),A=new Ip(q,P,yt,St),O=new Up(q,Qe,tt),Be=new Sp(je),z=new jm(R,vt,Nt,ze,Qe,Pe,Be),pe=new gg(R,je),xe=new $m,ye=new ng(ze,Qe),ee=new _p(R,vt,Nt,We,A,x,d),Ee=new og(R,A,Qe),Xe=new _g(q,St,Qe,We),fe=new xp(q,ze,St,Qe),we=new Cp(q,ze,St,Qe),St.programs=z.programs,R.capabilities=Qe,R.extensions=ze,R.properties=je,R.renderLists=xe,R.shadowMap=Ee,R.state=We,R.info=St}ut();const G=new mg(R,q);this.xr=G,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const L=ze.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ze.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(L){L!==void 0&&(oe=L,this.setSize(ae,ge,!1))},this.getSize=function(L){return L.set(ae,ge)},this.setSize=function(L,Y,ne=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=L,ge=Y,t.width=Math.floor(L*oe),t.height=Math.floor(Y*oe),ne===!0&&(t.style.width=L+"px",t.style.height=Y+"px"),this.setViewport(0,0,L,Y)},this.getDrawingBufferSize=function(L){return L.set(ae*oe,ge*oe).floor()},this.setDrawingBufferSize=function(L,Y,ne){ae=L,ge=Y,oe=ne,t.width=Math.floor(L*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,L,Y)},this.getCurrentViewport=function(L){return L.copy(I)},this.getViewport=function(L){return L.copy(de)},this.setViewport=function(L,Y,ne,$){L.isVector4?de.set(L.x,L.y,L.z,L.w):de.set(L,Y,ne,$),We.viewport(I.copy(de).multiplyScalar(oe).floor())},this.getScissor=function(L){return L.copy(Q)},this.setScissor=function(L,Y,ne,$){L.isVector4?Q.set(L.x,L.y,L.z,L.w):Q.set(L,Y,ne,$),We.scissor(me.copy(Q).multiplyScalar(oe).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(L){We.setScissorTest(re=L)},this.setOpaqueSort=function(L){he=L},this.setTransparentSort=function(L){ve=L},this.getClearColor=function(L){return L.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(L=!0,Y=!0,ne=!0){let $=0;if(L){let se=!1;if(l!==null){const Ne=l.texture.format;se=Ne===Yl||Ne===jl||Ne===ql}if(se){const Ne=l.texture.type,He=Ne===pi||Ne===ci||Ne===Ha||Ne===Ai||Ne===Wl||Ne===Xl,Ye=ee.getClearColor(),$e=ee.getClearAlpha(),nt=Ye.r,qe=Ye.g,it=Ye.b;He?(y[0]=nt,y[1]=qe,y[2]=it,y[3]=$e,q.clearBufferuiv(q.COLOR,0,y)):(T[0]=nt,T[1]=qe,T[2]=it,T[3]=$e,q.clearBufferiv(q.COLOR,0,T))}else $|=q.COLOR_BUFFER_BIT}Y&&($|=q.DEPTH_BUFFER_BIT),ne&&($|=q.STENCIL_BUFFER_BIT),q.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),xe.dispose(),ye.dispose(),je.dispose(),vt.dispose(),Nt.dispose(),A.dispose(),Pe.dispose(),Xe.dispose(),z.dispose(),G.dispose(),G.removeEventListener("sessionstart",At),G.removeEventListener("sessionend",fn),Ve&&(Ve.dispose(),Ve=null),Wt.stop()};function Re(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const L=St.autoReset,Y=Ee.enabled,ne=Ee.autoUpdate,$=Ee.needsUpdate,se=Ee.type;ut(),St.autoReset=L,Ee.enabled=Y,Ee.autoUpdate=ne,Ee.needsUpdate=$,Ee.type=se}function _e(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function be(L){const Y=L.target;Y.removeEventListener("dispose",be),ot(Y)}function ot(L){st(L),je.remove(L)}function st(L){const Y=je.get(L).programs;Y!==void 0&&(Y.forEach(function(ne){z.releaseProgram(ne)}),L.isShaderMaterial&&z.releaseShaderCache(L))}this.renderBufferDirect=function(L,Y,ne,$,se,Ne){Y===null&&(Y=Tt);const He=se.isMesh&&se.matrixWorld.determinant()<0,Ye=$r(L,Y,ne,$,se);We.setMaterial($,He);let $e=ne.index,nt=1;if($.wireframe===!0){if($e=P.getWireframeAttribute(ne),$e===void 0)return;nt=2}const qe=ne.drawRange,it=ne.attributes.position;let Rt=qe.start*nt,Lt=(qe.start+qe.count)*nt;Ne!==null&&(Rt=Math.max(Rt,Ne.start*nt),Lt=Math.min(Lt,(Ne.start+Ne.count)*nt)),$e!==null?(Rt=Math.max(Rt,0),Lt=Math.min(Lt,$e.count)):it!=null&&(Rt=Math.max(Rt,0),Lt=Math.min(Lt,it.count));const an=Lt-Rt;if(an<0||an===1/0)return;Pe.setup(se,$,Ye,ne,$e);let hn,Ut=fe;if($e!==null&&(hn=yt.get($e),Ut=we,Ut.setIndex(hn)),se.isMesh)$.wireframe===!0?(We.setLineWidth($.wireframeLinewidth*rt()),Ut.setMode(q.LINES)):Ut.setMode(q.TRIANGLES);else if(se.isLine){let ft=$.linewidth;ft===void 0&&(ft=1),We.setLineWidth(ft*rt()),se.isLineSegments?Ut.setMode(q.LINES):se.isLineLoop?Ut.setMode(q.LINE_LOOP):Ut.setMode(q.LINE_STRIP)}else se.isPoints?Ut.setMode(q.POINTS):se.isSprite&&Ut.setMode(q.TRIANGLES);if(se.isInstancedMesh)Ut.renderInstances(Rt,an,se.count);else if(ne.isInstancedBufferGeometry){const ft=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ni=Math.min(ne.instanceCount,ft);Ut.renderInstances(Rt,an,Ni)}else Ut.render(Rt,an)},this.compile=function(L,Y){function ne($,se,Ne){$.transparent===!0&&$.side===Qn&&$.forceSinglePass===!1?($.side=ln,$.needsUpdate=!0,Ii($,se,Ne),$.side=mi,$.needsUpdate=!0,Ii($,se,Ne),$.side=Qn):Ii($,se,Ne)}S=ye.get(L),S.init(),B.push(S),L.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),S.setupLights(R._useLegacyLights),L.traverse(function($){const se=$.material;if(se)if(Array.isArray(se))for(let Ne=0;Ne<se.length;Ne++){const He=se[Ne];ne(He,L,$)}else ne(se,L,$)}),B.pop(),S=null};let at=null;function qt(L){at&&at(L)}function At(){Wt.stop()}function fn(){Wt.start()}const Wt=new cc;Wt.setAnimationLoop(qt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(L){at=L,G.setAnimationLoop(L),L===null?Wt.stop():Wt.start()},G.addEventListener("sessionstart",At),G.addEventListener("sessionend",fn),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(Y),Y=G.getCamera()),L.isScene===!0&&L.onBeforeRender(R,L,Y,l),S=ye.get(L,B.length),S.init(),B.push(S),Ze.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Le.setFromProjectionMatrix(Ze),Oe=this.localClippingEnabled,De=Be.init(this.clippingPlanes,Oe),b=xe.get(L,m.length),b.init(),m.push(b),zn(L,Y,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(he,ve),this.info.render.frame++,De===!0&&Be.beginShadows();const ne=S.state.shadowsArray;if(Ee.render(ne,L,Y),De===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(b,L),S.setupLights(R._useLegacyLights),Y.isArrayCamera){const $=Y.cameras;for(let se=0,Ne=$.length;se<Ne;se++){const He=$[se];Gn(b,L,He,He.viewport)}}else Gn(b,L,Y);l!==null&&(tt.updateMultisampleRenderTarget(l),tt.updateRenderTargetMipmap(l)),L.isScene===!0&&L.onAfterRender(R,L,Y),Pe.resetDefaultState(),le=-1,w=null,B.pop(),B.length>0?S=B[B.length-1]:S=null,m.pop(),m.length>0?b=m[m.length-1]:b=null};function zn(L,Y,ne,$){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)ne=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLight)S.pushLight(L),L.castShadow&&S.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Le.intersectsSprite(L)){$&&gt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ze);const He=A.update(L),Ye=L.material;Ye.visible&&b.push(L,He,Ye,ne,gt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Le.intersectsObject(L))){const He=A.update(L),Ye=L.material;if($&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),gt.copy(L.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),gt.copy(He.boundingSphere.center)),gt.applyMatrix4(L.matrixWorld).applyMatrix4(Ze)),Array.isArray(Ye)){const $e=He.groups;for(let nt=0,qe=$e.length;nt<qe;nt++){const it=$e[nt],Rt=Ye[it.materialIndex];Rt&&Rt.visible&&b.push(L,He,Rt,ne,gt.z,it)}}else Ye.visible&&b.push(L,He,Ye,ne,gt.z,null)}}const Ne=L.children;for(let He=0,Ye=Ne.length;He<Ye;He++)zn(Ne[He],Y,ne,$)}function Gn(L,Y,ne,$){const se=L.opaque,Ne=L.transmissive,He=L.transparent;S.setupLightsView(ne),De===!0&&Be.setGlobalState(R.clippingPlanes,ne),Ne.length>0&&_r(se,Ne,Y,ne),$&&We.viewport(I.copy($)),se.length>0&&kn(se,Y,ne),Ne.length>0&&kn(Ne,Y,ne),He.length>0&&kn(He,Y,ne),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function _r(L,Y,ne,$){const se=Qe.isWebGL2;Ve===null&&(Ve=new Li(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")?Br:pi,minFilter:Fr,samples:se?4:0})),R.getDrawingBufferSize(Ge),se?Ve.setSize(Ge.x,Ge.y):Ve.setSize(Cs(Ge.x),Cs(Ge.y));const Ne=R.getRenderTarget();R.setRenderTarget(Ve),R.getClearColor(W),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear();const He=R.toneMapping;R.toneMapping=di,kn(L,ne,$),tt.updateMultisampleRenderTarget(Ve),tt.updateRenderTargetMipmap(Ve);let Ye=!1;for(let $e=0,nt=Y.length;$e<nt;$e++){const qe=Y[$e],it=qe.object,Rt=qe.geometry,Lt=qe.material,an=qe.group;if(Lt.side===Qn&&it.layers.test($.layers)){const hn=Lt.side;Lt.side=ln,Lt.needsUpdate=!0,Yr(it,ne,$,Rt,Lt,an),Lt.side=hn,Lt.needsUpdate=!0,Ye=!0}}Ye===!0&&(tt.updateMultisampleRenderTarget(Ve),tt.updateRenderTargetMipmap(Ve)),R.setRenderTarget(Ne),R.setClearColor(W,ie),R.toneMapping=He}function kn(L,Y,ne){const $=Y.isScene===!0?Y.overrideMaterial:null;for(let se=0,Ne=L.length;se<Ne;se++){const He=L[se],Ye=He.object,$e=He.geometry,nt=$===null?He.material:$,qe=He.group;Ye.layers.test(ne.layers)&&Yr(Ye,Y,ne,$e,nt,qe)}}function Yr(L,Y,ne,$,se,Ne){L.onBeforeRender(R,Y,ne,$,se,Ne),L.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),se.onBeforeRender(R,Y,ne,$,L,Ne),se.transparent===!0&&se.side===Qn&&se.forceSinglePass===!1?(se.side=ln,se.needsUpdate=!0,R.renderBufferDirect(ne,Y,$,se,L,Ne),se.side=mi,se.needsUpdate=!0,R.renderBufferDirect(ne,Y,$,se,L,Ne),se.side=Qn):R.renderBufferDirect(ne,Y,$,se,L,Ne),L.onAfterRender(R,Y,ne,$,se,Ne)}function Ii(L,Y,ne){Y.isScene!==!0&&(Y=Tt);const $=je.get(L),se=S.state.lights,Ne=S.state.shadowsArray,He=se.state.version,Ye=z.getParameters(L,se.state,Ne,Y,ne),$e=z.getProgramCacheKey(Ye);let nt=$.programs;$.environment=L.isMeshStandardMaterial?Y.environment:null,$.fog=Y.fog,$.envMap=(L.isMeshStandardMaterial?Nt:vt).get(L.envMap||$.environment),nt===void 0&&(L.addEventListener("dispose",be),nt=new Map,$.programs=nt);let qe=nt.get($e);if(qe!==void 0){if($.currentProgram===qe&&$.lightsStateVersion===He)return Kr(L,Ye),qe}else Ye.uniforms=z.getUniforms(L),L.onBuild(ne,Ye,R),L.onBeforeCompile(Ye,R),qe=z.acquireProgram(Ye,$e),nt.set($e,qe),$.uniforms=Ye.uniforms;const it=$.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(it.clippingPlanes=Be.uniform),Kr(L,Ye),$.needsLights=Os(L),$.lightsStateVersion=He,$.needsLights&&(it.ambientLightColor.value=se.state.ambient,it.lightProbe.value=se.state.probe,it.directionalLights.value=se.state.directional,it.directionalLightShadows.value=se.state.directionalShadow,it.spotLights.value=se.state.spot,it.spotLightShadows.value=se.state.spotShadow,it.rectAreaLights.value=se.state.rectArea,it.ltc_1.value=se.state.rectAreaLTC1,it.ltc_2.value=se.state.rectAreaLTC2,it.pointLights.value=se.state.point,it.pointLightShadows.value=se.state.pointShadow,it.hemisphereLights.value=se.state.hemi,it.directionalShadowMap.value=se.state.directionalShadowMap,it.directionalShadowMatrix.value=se.state.directionalShadowMatrix,it.spotShadowMap.value=se.state.spotShadowMap,it.spotLightMatrix.value=se.state.spotLightMatrix,it.spotLightMap.value=se.state.spotLightMap,it.pointShadowMap.value=se.state.pointShadowMap,it.pointShadowMatrix.value=se.state.pointShadowMatrix);const Rt=qe.getUniforms(),Lt=As.seqWithValue(Rt.seq,it);return $.currentProgram=qe,$.uniformsList=Lt,qe}function Kr(L,Y){const ne=je.get(L);ne.outputColorSpace=Y.outputColorSpace,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function $r(L,Y,ne,$,se){Y.isScene!==!0&&(Y=Tt),tt.resetTextureUnits();const Ne=Y.fog,He=$.isMeshStandardMaterial?Y.environment:null,Ye=l===null?R.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:Hn,$e=($.isMeshStandardMaterial?Nt:vt).get($.envMap||He),nt=$.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,qe=!!ne.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),it=!!ne.morphAttributes.position,Rt=!!ne.morphAttributes.normal,Lt=!!ne.morphAttributes.color;let an=di;$.toneMapped&&(l===null||l.isXRRenderTarget===!0)&&(an=R.toneMapping);const hn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ut=hn!==void 0?hn.length:0,ft=je.get($),Ni=S.state.lights;if(De===!0&&(Oe===!0||L!==w)){const jt=L===w&&$.id===le;Be.setState($,L,jt)}let Dt=!1;$.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==Ni.state.version||ft.outputColorSpace!==Ye||se.isInstancedMesh&&ft.instancing===!1||!se.isInstancedMesh&&ft.instancing===!0||se.isSkinnedMesh&&ft.skinning===!1||!se.isSkinnedMesh&&ft.skinning===!0||se.isInstancedMesh&&ft.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&ft.instancingColor===!1&&se.instanceColor!==null||ft.envMap!==$e||$.fog===!0&&ft.fog!==Ne||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==Be.numPlanes||ft.numIntersection!==Be.numIntersection)||ft.vertexAlphas!==nt||ft.vertexTangents!==qe||ft.morphTargets!==it||ft.morphNormals!==Rt||ft.morphColors!==Lt||ft.toneMapping!==an||Qe.isWebGL2===!0&&ft.morphTargetsCount!==Ut)&&(Dt=!0):(Dt=!0,ft.__version=$.version);let Sn=ft.currentProgram;Dt===!0&&(Sn=Ii($,Y,se));let vr=!1,Ot=!1,Pn=!1;const Ft=Sn.getUniforms(),Vn=ft.uniforms;if(We.useProgram(Sn.program)&&(vr=!0,Ot=!0,Pn=!0),$.id!==le&&(le=$.id,Ot=!0),vr||w!==L){Ft.setValue(q,"projectionMatrix",L.projectionMatrix),Ft.setValue(q,"viewMatrix",L.matrixWorldInverse);const jt=Ft.map.cameraPosition;jt!==void 0&&jt.setValue(q,gt.setFromMatrixPosition(L.matrixWorld)),Qe.logarithmicDepthBuffer&&Ft.setValue(q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ft.setValue(q,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,Ot=!0,Pn=!0)}if(se.isSkinnedMesh){Ft.setOptional(q,se,"bindMatrix"),Ft.setOptional(q,se,"bindMatrixInverse");const jt=se.skeleton;jt&&(Qe.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Ft.setValue(q,"boneTexture",jt.boneTexture,tt),Ft.setValue(q,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xr=ne.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0&&Qe.isWebGL2===!0)&&O.update(se,ne,Sn),(Ot||ft.receiveShadow!==se.receiveShadow)&&(ft.receiveShadow=se.receiveShadow,Ft.setValue(q,"receiveShadow",se.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Vn.envMap.value=$e,Vn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),Ot&&(Ft.setValue(q,"toneMappingExposure",R.toneMappingExposure),ft.needsLights&&Ns(Vn,Pn),Ne&&$.fog===!0&&pe.refreshFogUniforms(Vn,Ne),pe.refreshMaterialUniforms(Vn,$,oe,ge,Ve),As.upload(q,ft.uniformsList,Vn,tt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(As.upload(q,ft.uniformsList,Vn,tt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ft.setValue(q,"center",se.center),Ft.setValue(q,"modelViewMatrix",se.modelViewMatrix),Ft.setValue(q,"normalMatrix",se.normalMatrix),Ft.setValue(q,"modelMatrix",se.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const jt=$.uniformsGroups;for(let Oi=0,Fi=jt.length;Oi<Fi;Oi++)if(Qe.isWebGL2){const Mr=jt[Oi];Xe.update(Mr,Sn),Xe.bind(Mr,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function Ns(L,Y){L.ambientLightColor.needsUpdate=Y,L.lightProbe.needsUpdate=Y,L.directionalLights.needsUpdate=Y,L.directionalLightShadows.needsUpdate=Y,L.pointLights.needsUpdate=Y,L.pointLightShadows.needsUpdate=Y,L.spotLights.needsUpdate=Y,L.spotLightShadows.needsUpdate=Y,L.rectAreaLights.needsUpdate=Y,L.hemisphereLights.needsUpdate=Y}function Os(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(L,Y,ne){je.get(L.texture).__webglTexture=Y,je.get(L.depthTexture).__webglTexture=ne;const $=je.get(L);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=ne===void 0,$.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,Y){const ne=je.get(L);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(L,Y=0,ne=0){l=L,F=Y,k=ne;let $=!0,se=null,Ne=!1,He=!1;if(L){const $e=je.get(L);$e.__useDefaultFramebuffer!==void 0?(We.bindFramebuffer(q.FRAMEBUFFER,null),$=!1):$e.__webglFramebuffer===void 0?tt.setupRenderTarget(L):$e.__hasExternalTextures&&tt.rebindTextures(L,je.get(L.texture).__webglTexture,je.get(L.depthTexture).__webglTexture);const nt=L.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(He=!0);const qe=je.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?se=qe[Y][ne]:se=qe[Y],Ne=!0):Qe.isWebGL2&&L.samples>0&&tt.useMultisampledRTT(L)===!1?se=je.get(L).__webglMultisampledFramebuffer:Array.isArray(qe)?se=qe[ne]:se=qe,I.copy(L.viewport),me.copy(L.scissor),Me=L.scissorTest}else I.copy(de).multiplyScalar(oe).floor(),me.copy(Q).multiplyScalar(oe).floor(),Me=re;if(We.bindFramebuffer(q.FRAMEBUFFER,se)&&Qe.drawBuffers&&$&&We.drawBuffers(L,se),We.viewport(I),We.scissor(me),We.setScissorTest(Me),Ne){const $e=je.get(L.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$e.__webglTexture,ne)}else if(He){const $e=je.get(L.texture),nt=Y||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,$e.__webglTexture,ne||0,nt)}le=-1},this.readRenderTargetPixels=function(L,Y,ne,$,se,Ne,He){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=je.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&He!==void 0&&(Ye=Ye[He]),Ye){We.bindFramebuffer(q.FRAMEBUFFER,Ye);try{const $e=L.texture,nt=$e.format,qe=$e.type;if(nt!==Ln&&Te.convert(nt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=qe===Br&&(ze.has("EXT_color_buffer_half_float")||Qe.isWebGL2&&ze.has("EXT_color_buffer_float"));if(qe!==pi&&Te.convert(qe)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===ui&&(Qe.isWebGL2||ze.has("OES_texture_float")||ze.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=L.width-$&&ne>=0&&ne<=L.height-se&&q.readPixels(Y,ne,$,se,Te.convert(nt),Te.convert(qe),Ne)}finally{const $e=l!==null?je.get(l).__webglFramebuffer:null;We.bindFramebuffer(q.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(L,Y,ne=0){const $=Math.pow(2,-ne),se=Math.floor(Y.image.width*$),Ne=Math.floor(Y.image.height*$);tt.setTexture2D(Y,0),q.copyTexSubImage2D(q.TEXTURE_2D,ne,0,0,L.x,L.y,se,Ne),We.unbindTexture()},this.copyTextureToTexture=function(L,Y,ne,$=0){const se=Y.image.width,Ne=Y.image.height,He=Te.convert(ne.format),Ye=Te.convert(ne.type);tt.setTexture2D(ne,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ne.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ne.unpackAlignment),Y.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,$,L.x,L.y,se,Ne,He,Ye,Y.image.data):Y.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,$,L.x,L.y,Y.mipmaps[0].width,Y.mipmaps[0].height,He,Y.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,$,L.x,L.y,He,Ye,Y.image),$===0&&ne.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),We.unbindTexture()},this.copyTextureToTexture3D=function(L,Y,ne,$,se=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=L.max.x-L.min.x+1,He=L.max.y-L.min.y+1,Ye=L.max.z-L.min.z+1,$e=Te.convert($.format),nt=Te.convert($.type);let qe;if($.isData3DTexture)tt.setTexture3D($,0),qe=q.TEXTURE_3D;else if($.isDataArrayTexture)tt.setTexture2DArray($,0),qe=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment);const it=q.getParameter(q.UNPACK_ROW_LENGTH),Rt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Lt=q.getParameter(q.UNPACK_SKIP_PIXELS),an=q.getParameter(q.UNPACK_SKIP_ROWS),hn=q.getParameter(q.UNPACK_SKIP_IMAGES),Ut=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Ut.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ut.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,L.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,L.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,L.min.z),ne.isDataTexture||ne.isData3DTexture?q.texSubImage3D(qe,se,Y.x,Y.y,Y.z,Ne,He,Ye,$e,nt,Ut.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(qe,se,Y.x,Y.y,Y.z,Ne,He,Ye,$e,Ut.data)):q.texSubImage3D(qe,se,Y.x,Y.y,Y.z,Ne,He,Ye,$e,nt,Ut),q.pixelStorei(q.UNPACK_ROW_LENGTH,it),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Rt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Lt),q.pixelStorei(q.UNPACK_SKIP_ROWS,an),q.pixelStorei(q.UNPACK_SKIP_IMAGES,hn),se===0&&$.generateMipmaps&&q.generateMipmap(qe),We.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?tt.setTextureCube(L,0):L.isData3DTexture?tt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?tt.setTexture2DArray(L,0):tt.setTexture2D(L,0),We.unbindTexture()},this.resetState=function(){F=0,k=0,l=null,We.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?Ri:Kl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ri?Pt:Hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class vg extends pc{}vg.prototype.isWebGL1Renderer=!0;class xg extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Va extends mr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sl=new X,yl=new X,El=new Gt,ba=new Ds,ys=new Wr;class mc extends sn{constructor(e=new gn,t=new Va){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Sl.fromBufferAttribute(t,s-1),yl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Sl.distanceTo(yl);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,f=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(s),ys.radius+=a,e.ray.intersectsSphere(ys)===!1)return;El.copy(s).invert(),ba.copy(e.ray).applyMatrix4(El);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,p=new X,g=new X,_=new X,x=new X,y=this.isLineSegments?2:1,T=n.index,S=n.attributes.position;if(T!==null){const m=Math.max(0,f.start),B=Math.min(T.count,f.start+f.count);for(let R=m,U=B-1;R<U;R+=y){const F=T.getX(R),k=T.getX(R+1);if(p.fromBufferAttribute(S,F),g.fromBufferAttribute(S,k),ba.distanceSqToSegment(p,g,x,_)>d)continue;x.applyMatrix4(this.matrixWorld);const le=e.ray.origin.distanceTo(x);le<e.near||le>e.far||t.push({distance:le,point:_.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,f.start),B=Math.min(S.count,f.start+f.count);for(let R=m,U=B-1;R<U;R+=y){if(p.fromBufferAttribute(S,R),g.fromBufferAttribute(S,R+1),ba.distanceSqToSegment(p,g,x,_)>d)continue;x.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(x);k<e.near||k>e.far||t.push({distance:k,point:_.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=s.length;a<f;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}const Tl=new X,bl=new X;class Mg extends mc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)Tl.fromBufferAttribute(t,s),bl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tl.distanceTo(bl);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Na extends mr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Al=new Gt,Oa=new Ds,Es=new Wr,Ts=new X;class wl extends sn{constructor(e=new gn,t=new Na){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,f=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),Es.radius+=a,e.ray.intersectsSphere(Es)===!1)return;Al.copy(s).invert(),Oa.copy(e.ray).applyMatrix4(Al);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,p=n.index,_=n.attributes.position;if(p!==null){const x=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let T=x,b=y;T<b;T++){const S=p.getX(T);Ts.fromBufferAttribute(_,S),Rl(Ts,S,d,s,e,t,this)}}else{const x=Math.max(0,f.start),y=Math.min(_.count,f.start+f.count);for(let T=x,b=y;T<b;T++)Ts.fromBufferAttribute(_,T),Rl(Ts,T,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=s.length;a<f;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Rl(i,e,t,n,s,a,f){const c=Oa.distanceSqToPoint(i);if(c<t){const d=new X;Oa.closestPointToPoint(i,d),d.applyMatrix4(n);const p=s.ray.origin.distanceTo(d);if(p<s.near||p>s.far)return;a.push({distance:p,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,object:f})}}const Cl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Sg{constructor(e,t,n){const s=this;let a=!1,f=0,c=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(g){c++,a===!1&&s.onStart!==void 0&&s.onStart(g,f,c),a=!0},this.itemEnd=function(g){f++,s.onProgress!==void 0&&s.onProgress(g,f,c),f===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const y=p[_],T=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return T}return null}}}const yg=new Sg;class Wa{constructor(e){this.manager=e!==void 0?e:yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Eg extends Wa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,f=Cl.get(e);if(f!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(f),a.manager.itemEnd(e)},0),f;const c=zr("img");function d(){g(),Cl.add(e,this),t&&t(this),a.manager.itemEnd(e)}function p(_){g(),s&&s(_),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){c.removeEventListener("load",d,!1),c.removeEventListener("error",p,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class Ll extends Wa{constructor(e){super(e)}load(e,t,n,s){const a=new cn,f=new Eg(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class Pl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(en(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tg extends Mg{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new gn;s.setAttribute("position",new un(t,3)),s.setAttribute("color",new un(n,3));const a=new Va({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(e,t,n){const s=new bt,a=this.geometry.attributes.color.array;return s.set(e),s.toArray(a,0),s.toArray(a,3),s.set(t),s.toArray(a,6),s.toArray(a,9),s.set(n),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const Dl={type:"change"},Aa={type:"start"},Ul={type:"end"},bs=new Ds,Il=new li,bg=Math.cos(70*lf.DEG2RAD);class Ag extends Ui{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",A),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Dl),n.update(),a=s.NONE},this.update=function(){const O=new X,fe=new Pi().setFromUnitVectors(e.up,new X(0,1,0)),we=fe.clone().invert(),Te=new X,Pe=new Pi,Xe=new X,ut=2*Math.PI;return function(Re=null){const Z=n.object.position;O.copy(Z).sub(n.target),O.applyQuaternion(fe),c.setFromVector3(O),n.autoRotate&&a===s.NONE&&me(w(Re)),n.enableDamping?(c.theta+=d.theta*n.dampingFactor,c.phi+=d.phi*n.dampingFactor):(c.theta+=d.theta,c.phi+=d.phi);let _e=n.minAzimuthAngle,be=n.maxAzimuthAngle;isFinite(_e)&&isFinite(be)&&(_e<-Math.PI?_e+=ut:_e>Math.PI&&(_e-=ut),be<-Math.PI?be+=ut:be>Math.PI&&(be-=ut),_e<=be?c.theta=Math.max(_e,Math.min(be,c.theta)):c.theta=c.theta>(_e+be)/2?Math.max(_e,c.theta):Math.min(be,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),n.zoomToCursor&&k||n.object.isOrthographicCamera?c.radius=ve(c.radius):c.radius=ve(c.radius*p),O.setFromSpherical(c),O.applyQuaternion(we),Z.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),g.set(0,0,0));let ot=!1;if(n.zoomToCursor&&k){let st=null;if(n.object.isPerspectiveCamera){const at=O.length();st=ve(at*p);const qt=at-st;n.object.position.addScaledVector(U,qt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const at=new X(F.x,F.y,0);at.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/p)),n.object.updateProjectionMatrix(),ot=!0;const qt=new X(F.x,F.y,0);qt.unproject(n.object),n.object.position.sub(qt).add(at),n.object.updateMatrixWorld(),st=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;st!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(st).add(n.object.position):(bs.origin.copy(n.object.position),bs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(bs.direction))<bg?e.lookAt(n.target):(Il.setFromNormalAndCoplanarPoint(n.object.up,n.target),bs.intersectPlane(Il,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/p)),n.object.updateProjectionMatrix(),ot=!0);return p=1,k=!1,ot||Te.distanceToSquared(n.object.position)>f||8*(1-Pe.dot(n.object.quaternion))>f||Xe.distanceToSquared(n.target)>0?(n.dispatchEvent(Dl),Te.copy(n.object.position),Pe.copy(n.object.quaternion),Xe.copy(n.target),ot=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",xe),n.domElement.removeEventListener("pointerdown",je),n.domElement.removeEventListener("pointercancel",vt),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",vt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",A),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const f=1e-6,c=new Pl,d=new Pl;let p=1;const g=new X,_=new dt,x=new dt,y=new dt,T=new dt,b=new dt,S=new dt,m=new dt,B=new dt,R=new dt,U=new X,F=new dt;let k=!1;const l=[],le={};function w(O){return O!==null?2*Math.PI/60*n.autoRotateSpeed*O:2*Math.PI/60/60*n.autoRotateSpeed}function I(){return Math.pow(.95,n.zoomSpeed)}function me(O){d.theta-=O}function Me(O){d.phi-=O}const W=function(){const O=new X;return function(we,Te){O.setFromMatrixColumn(Te,0),O.multiplyScalar(-we),g.add(O)}}(),ie=function(){const O=new X;return function(we,Te){n.screenSpacePanning===!0?O.setFromMatrixColumn(Te,1):(O.setFromMatrixColumn(Te,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(we),g.add(O)}}(),ae=function(){const O=new X;return function(we,Te){const Pe=n.domElement;if(n.object.isPerspectiveCamera){const Xe=n.object.position;O.copy(Xe).sub(n.target);let ut=O.length();ut*=Math.tan(n.object.fov/2*Math.PI/180),W(2*we*ut/Pe.clientHeight,n.object.matrix),ie(2*Te*ut/Pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(we*(n.object.right-n.object.left)/n.object.zoom/Pe.clientWidth,n.object.matrix),ie(Te*(n.object.top-n.object.bottom)/n.object.zoom/Pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ge(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?p/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?p*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function he(O){if(!n.zoomToCursor)return;k=!0;const fe=n.domElement.getBoundingClientRect(),we=O.clientX-fe.left,Te=O.clientY-fe.top,Pe=fe.width,Xe=fe.height;F.x=we/Pe*2-1,F.y=-(Te/Xe)*2+1,U.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function ve(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function de(O){_.set(O.clientX,O.clientY)}function Q(O){he(O),m.set(O.clientX,O.clientY)}function re(O){T.set(O.clientX,O.clientY)}function Le(O){x.set(O.clientX,O.clientY),y.subVectors(x,_).multiplyScalar(n.rotateSpeed);const fe=n.domElement;me(2*Math.PI*y.x/fe.clientHeight),Me(2*Math.PI*y.y/fe.clientHeight),_.copy(x),n.update()}function De(O){B.set(O.clientX,O.clientY),R.subVectors(B,m),R.y>0?ge(I()):R.y<0&&oe(I()),m.copy(B),n.update()}function Oe(O){b.set(O.clientX,O.clientY),S.subVectors(b,T).multiplyScalar(n.panSpeed),ae(S.x,S.y),T.copy(b),n.update()}function Ve(O){he(O),O.deltaY<0?oe(I()):O.deltaY>0&&ge(I()),n.update()}function Ze(O){let fe=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?Me(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(0,n.keyPanSpeed),fe=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?Me(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(0,-n.keyPanSpeed),fe=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?me(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(n.keyPanSpeed,0),fe=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?me(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(-n.keyPanSpeed,0),fe=!0;break}fe&&(O.preventDefault(),n.update())}function Ge(){if(l.length===1)_.set(l[0].pageX,l[0].pageY);else{const O=.5*(l[0].pageX+l[1].pageX),fe=.5*(l[0].pageY+l[1].pageY);_.set(O,fe)}}function gt(){if(l.length===1)T.set(l[0].pageX,l[0].pageY);else{const O=.5*(l[0].pageX+l[1].pageX),fe=.5*(l[0].pageY+l[1].pageY);T.set(O,fe)}}function Tt(){const O=l[0].pageX-l[1].pageX,fe=l[0].pageY-l[1].pageY,we=Math.sqrt(O*O+fe*fe);m.set(0,we)}function rt(){n.enableZoom&&Tt(),n.enablePan&&gt()}function q(){n.enableZoom&&Tt(),n.enableRotate&&Ge()}function Ct(O){if(l.length==1)x.set(O.pageX,O.pageY);else{const we=ee(O),Te=.5*(O.pageX+we.x),Pe=.5*(O.pageY+we.y);x.set(Te,Pe)}y.subVectors(x,_).multiplyScalar(n.rotateSpeed);const fe=n.domElement;me(2*Math.PI*y.x/fe.clientHeight),Me(2*Math.PI*y.y/fe.clientHeight),_.copy(x)}function ze(O){if(l.length===1)b.set(O.pageX,O.pageY);else{const fe=ee(O),we=.5*(O.pageX+fe.x),Te=.5*(O.pageY+fe.y);b.set(we,Te)}S.subVectors(b,T).multiplyScalar(n.panSpeed),ae(S.x,S.y),T.copy(b)}function Qe(O){const fe=ee(O),we=O.pageX-fe.x,Te=O.pageY-fe.y,Pe=Math.sqrt(we*we+Te*Te);B.set(0,Pe),R.set(0,Math.pow(B.y/m.y,n.zoomSpeed)),ge(R.y),m.copy(B)}function We(O){n.enableZoom&&Qe(O),n.enablePan&&ze(O)}function St(O){n.enableZoom&&Qe(O),n.enableRotate&&Ct(O)}function je(O){n.enabled!==!1&&(l.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",tt),n.domElement.addEventListener("pointerup",vt)),ye(O),O.pointerType==="touch"?z(O):Nt(O))}function tt(O){n.enabled!==!1&&(O.pointerType==="touch"?pe(O):yt(O))}function vt(O){Be(O),l.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",vt)),n.dispatchEvent(Ul),a=s.NONE}function Nt(O){let fe;switch(O.button){case 0:fe=n.mouseButtons.LEFT;break;case 1:fe=n.mouseButtons.MIDDLE;break;case 2:fe=n.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case zi.DOLLY:if(n.enableZoom===!1)return;Q(O),a=s.DOLLY;break;case zi.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;re(O),a=s.PAN}else{if(n.enableRotate===!1)return;de(O),a=s.ROTATE}break;case zi.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;de(O),a=s.ROTATE}else{if(n.enablePan===!1)return;re(O),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(Aa)}function yt(O){switch(a){case s.ROTATE:if(n.enableRotate===!1)return;Le(O);break;case s.DOLLY:if(n.enableZoom===!1)return;De(O);break;case s.PAN:if(n.enablePan===!1)return;Oe(O);break}}function P(O){n.enabled===!1||n.enableZoom===!1||a!==s.NONE||(O.preventDefault(),n.dispatchEvent(Aa),Ve(O),n.dispatchEvent(Ul))}function A(O){n.enabled===!1||n.enablePan===!1||Ze(O)}function z(O){switch(Ee(O),l.length){case 1:switch(n.touches.ONE){case Gi.ROTATE:if(n.enableRotate===!1)return;Ge(),a=s.TOUCH_ROTATE;break;case Gi.PAN:if(n.enablePan===!1)return;gt(),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(n.touches.TWO){case Gi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;rt(),a=s.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;q(),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(Aa)}function pe(O){switch(Ee(O),a){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ct(O),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ze(O),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;We(O),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;St(O),n.update();break;default:a=s.NONE}}function xe(O){n.enabled!==!1&&O.preventDefault()}function ye(O){l.push(O)}function Be(O){delete le[O.pointerId];for(let fe=0;fe<l.length;fe++)if(l[fe].pointerId==O.pointerId){l.splice(fe,1);return}}function Ee(O){let fe=le[O.pointerId];fe===void 0&&(fe=new dt,le[O.pointerId]=fe),fe.set(O.pageX,O.pageY)}function ee(O){const fe=O.pointerId===l[0].pointerId?l[1]:l[0];return le[fe.pointerId]}n.domElement.addEventListener("contextmenu",xe),n.domElement.addEventListener("pointerdown",je),n.domElement.addEventListener("pointercancel",vt),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const Gr={width:1024,height:512},rr=40,wg=Gr.width/Gr.height,qr=new pc;qr.setSize(Gr.width,Gr.height);qr.setClearColor(2820410);document.querySelector("#container").appendChild(qr.domElement);const Or=new xg,kr=new Mn(55,wg,.1,1e11);kr.position.set(-.5,0,0);kr.lookAt(new X(0,-50,0));const jr=new Ag(kr,qr.domElement);jr.target.set(0,0,0);jr.enableZoom=!1;jr.enablePan=!1;jr.update();const Nl=new gn,Ol=new gn,Rg=new Tg(3);Or.add(Rg);const gc=new Fa,Cg=async()=>{const e=await(await fetch("./constellations.json")).json(),t=[],n=[],s=new Va({color:"#40e0d0"});e.forEach(y=>{const T={common:[],exact:[]};y.stars[0].forEach(({x:R,y:U,z:F,rus:k})=>{const l=new X(R,U,F);l.normalize();const[le,w,I]=[0,1,2].map(Me=>l.getComponent(Me));k?T.exact.push(le*rr,w*rr,I*rr):T.common.push(le*rr,w*rr,I*rr);const me=new X(R,U,F);k&&gc.add({position:me,name:k})});const b=new gn,S=T.common.concat(T.exact),m=new un(S,3);b.setAttribute("position",m);const B=new mc(b,s);Or.add(B),n.push(...T.exact),t.push(...T.common)});const a=new un(t,3),f=new un(n,3);Nl.setAttribute("position",a),Ol.setAttribute("position",f);const c=new Ll().load("./star.svg"),d=new Ll().load("./common.svg");[c,d].forEach(y=>{y.mapping=void 0,y.magFilter=mn,y.minFilter=Qt});const p=new Na({color:16777215,size:5,map:c,blending:ws,transparent:!0}),g=new Na({color:16777215,size:2,map:d,blending:ws,transparent:!0}),_=new wl(Nl,g),x=new wl(Ol,p);Or.add(_),Or.add(x)};function _c(){requestAnimationFrame(_c),jr.update(),qr.render(Or,kr),gc.update({camera:kr,screen:Gr})}_c();Cg();
//# sourceMappingURL=index-beff67f7.js.map
