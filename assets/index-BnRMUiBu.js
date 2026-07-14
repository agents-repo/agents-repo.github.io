const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutPage-CBLS-vRf.js","assets/vendor-react-Dy_a7XKE.js","assets/rolldown-runtime-Bh1tDfsg.js","assets/vendor-ui-qKSM4xMl.js","assets/AccessibilityPage-ARXR1WzB.js","assets/ContactPage-DZtZLseb.js","assets/HelpUsPage-CnpSr6v5.js","assets/PrivacyPage-DDi0oU7b.js","assets/PrivacyPolicyView-Br7htBhE.js","assets/PrivacidadePage-m9JgIJdF.js"])))=>i.map(i=>d[i]);
import{n as e,t}from"./rolldown-runtime-Bh1tDfsg.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,p as l,r as u,s as d,t as f,u as p}from"./vendor-react-Dy_a7XKE.js";import{_ as m,a as h,c as g,d as _,f as v,g as y,h as b,i as x,l as S,m as C,n as w,o as T,p as E,r as D,s as O,u as k}from"./vendor-ui-qKSM4xMl.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var A=t(((e,t)=>{var n=typeof Element<`u`,r=typeof Map==`function`,i=typeof Set==`function`,a=typeof ArrayBuffer==`function`&&!!ArrayBuffer.isView;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e==`object`&&typeof t==`object`){if(e.constructor!==t.constructor)return!1;var s,c,l;if(Array.isArray(e)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(!o(e[c],t[c]))return!1;return!0}var u;if(r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],t.get(c.value[0])))return!1;return!0}if(i&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(e[c]!==t[c])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf==`function`&&typeof t.valueOf==`function`)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString==`function`&&typeof t.toString==`function`)return e.toString()===t.toString();if(l=Object.keys(e),s=l.length,s!==Object.keys(t).length)return!1;for(c=s;c--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[c]))return!1;if(n&&e instanceof Element)return!1;for(c=s;c--!==0;)if(!((l[c]===`_owner`||l[c]===`__v`||l[c]===`__o`)&&e.$$typeof)&&!o(e[l[c]],t[l[c]]))return!1;return!0}return e!==e&&t!==t}t.exports=function(e,t){try{return o(e,t)}catch(e){if((e.message||``).match(/stack|recursion/i))return console.warn(`react-fast-compare cannot handle circular refs`),!1;throw e}}})),ee=t(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),te=i(),j=e(l()),ne=e(A()),re=e(m()),M=e(ee()),ie=(e=>(e.BASE=`base`,e.BODY=`body`,e.HEAD=`head`,e.HTML=`html`,e.LINK=`link`,e.META=`meta`,e.NOSCRIPT=`noscript`,e.SCRIPT=`script`,e.STYLE=`style`,e.TITLE=`title`,e.FRAGMENT=`Symbol(react.fragment)`,e))(ie||{}),ae={link:{rel:[`amphtml`,`canonical`,`alternate`]},script:{type:[`application/ld+json`]},meta:{charset:``,name:[`generator`,`robots`,`description`],property:[`og:type`,`og:title`,`og:url`,`og:image`,`og:image:alt`,`og:description`,`twitter:url`,`twitter:title`,`twitter:description`,`twitter:image`,`twitter:image:alt`,`twitter:card`,`twitter:site`]}},oe=Object.values(ie),se={accesskey:`accessKey`,charset:`charSet`,class:`className`,contenteditable:`contentEditable`,contextmenu:`contextMenu`,"http-equiv":`httpEquiv`,itemprop:`itemProp`,tabindex:`tabIndex`},ce=Object.entries(se).reduce((e,[t,n])=>(e[n]=t,e),{}),N=`data-rh`,P={DEFAULT_TITLE:`defaultTitle`,DEFER:`defer`,ENCODE_SPECIAL_CHARACTERS:`encodeSpecialCharacters`,ON_CHANGE_CLIENT_STATE:`onChangeClientState`,TITLE_TEMPLATE:`titleTemplate`,PRIORITIZE_SEO_TAGS:`prioritizeSeoTags`},F=(e,t)=>{for(let n=e.length-1;n>=0;--n){let r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},le=e=>{let t=F(e,`title`),n=F(e,P.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join(``)),n&&t)return n.replace(/%s/g,()=>t);let r=F(e,P.DEFAULT_TITLE);return t||r||void 0},ue=e=>F(e,P.ON_CHANGE_CLIENT_STATE)||(()=>{}),de=(e,t)=>t.filter(t=>t[e]!==void 0).map(t=>t[e]).reduce((e,t)=>({...e,...t}),{}),fe=(e,t)=>t.filter(e=>e.base!==void 0).map(e=>e.base).reverse().reduce((t,n)=>{if(!t.length){let r=Object.keys(n);for(let i=0;i<r.length;i+=1){let a=r[i].toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}}return t},[]),pe=e=>console&&typeof console.warn==`function`&&console.warn(e),me=(e,t,n)=>{let r={};return n.filter(t=>Array.isArray(t[e])?!0:(t[e]!==void 0&&pe(`Helmet: ${e} should be of type "Array". Instead found type "${typeof t[e]}"`),!1)).map(t=>t[e]).reverse().reduce((e,n)=>{let i={};n.filter(e=>{let n,a=Object.keys(e);for(let r=0;r<a.length;r+=1){let i=a[r],o=i.toLowerCase();t.indexOf(o)!==-1&&!(n===`rel`&&e[n].toLowerCase()===`canonical`)&&!(o===`rel`&&e[o].toLowerCase()===`stylesheet`)&&(n=o),t.indexOf(i)!==-1&&(i===`innerHTML`||i===`cssText`||i===`itemprop`)&&(n=i)}if(!n||!e[n])return!1;let o=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),r[n][o]?!1:(i[n][o]=!0,!0)}).reverse().forEach(t=>e.push(t));let a=Object.keys(i);for(let e=0;e<a.length;e+=1){let t=a[e],n={...r[t],...i[t]};r[t]=n}return e},[]).reverse()},he=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},ge=e=>({baseTag:fe([`href`],e),bodyAttributes:de(`bodyAttributes`,e),defer:F(e,P.DEFER),encode:F(e,P.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:de(`htmlAttributes`,e),linkTags:me(`link`,[`rel`,`href`],e),metaTags:me(`meta`,[`name`,`charset`,`http-equiv`,`property`,`itemprop`],e),noscriptTags:me(`noscript`,[`innerHTML`],e),onChangeClientState:ue(e),scriptTags:me(`script`,[`src`,`innerHTML`],e),styleTags:me(`style`,[`cssText`],e),title:le(e),titleAttributes:de(`titleAttributes`,e),prioritizeSeoTags:he(e,P.PRIORITIZE_SEO_TAGS)}),_e=e=>Array.isArray(e)?e.join(``):e,ve=(e,t)=>{let n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},ye=(e,t)=>Array.isArray(e)?e.reduce((e,n)=>(ve(n,t)?e.priority.push(n):e.default.push(n),e),{priority:[],default:[]}):{default:e,priority:[]},be=(e,t)=>({...e,[t]:void 0}),xe=[`noscript`,`script`,`style`],Se=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`),Ce=e=>Object.keys(e).reduce((t,n)=>{let r=e[n]===void 0?`${n}`:`${n}="${e[n]}"`;return t?`${t} ${r}`:r},``),we=(e,t,n,r)=>{let i=Ce(n),a=_e(t);return i?`<${e} ${N}="true" ${i}>${Se(a,r)}</${e}>`:`<${e} ${N}="true">${Se(a,r)}</${e}>`},Te=(e,t,n=!0)=>t.reduce((t,r)=>{let i=r,a=Object.keys(i).filter(e=>!(e===`innerHTML`||e===`cssText`)).reduce((e,t)=>{let r=i[t]===void 0?t:`${t}="${Se(i[t],n)}"`;return e?`${e} ${r}`:r},``),o=i.innerHTML||i.cssText||``;return`${t}<${e} ${N}="true" ${a}${xe.indexOf(e)===-1?`/>`:`>${o}</${e}>`}`},``),Ee=(e,t={})=>Object.keys(e).reduce((t,n)=>{let r=se[n];return t[r||n]=e[n],t},t),De=(e,t,n)=>{let r=Ee(n,{key:t,[N]:!0});return[j.createElement(`title`,r,t)]},Oe=(e,t)=>t.map((t,n)=>{let r={key:n,[N]:!0};return Object.keys(t).forEach(e=>{let n=se[e]||e;if(n===`innerHTML`||n===`cssText`){let e=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:e}}else r[n]=t[e]}),j.createElement(e,r)}),I=(e,t,n=!0)=>{switch(e){case`title`:return{toComponent:()=>De(e,t.title,t.titleAttributes),toString:()=>we(e,t.title,t.titleAttributes,n)};case`bodyAttributes`:case`htmlAttributes`:return{toComponent:()=>Ee(t),toString:()=>Ce(t)};default:return{toComponent:()=>Oe(e,t),toString:()=>Te(e,t,n)}}},ke=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{let i=ye(e,ae.meta),a=ye(t,ae.link),o=ye(n,ae.script);return{priorityMethods:{toComponent:()=>[...Oe(`meta`,i.priority),...Oe(`link`,a.priority),...Oe(`script`,o.priority)],toString:()=>`${I(`meta`,i.priority,r)} ${I(`link`,a.priority,r)} ${I(`script`,o.priority,r)}`},metaTags:i.default,linkTags:a.default,scriptTags:o.default}},Ae=e=>{let{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:a,styleTags:o,title:s=``,titleAttributes:c,prioritizeSeoTags:l}=e,{linkTags:u,metaTags:d,scriptTags:f}=e,p={toComponent:()=>[],toString:()=>``};return l&&({priorityMethods:p,linkTags:u,metaTags:d,scriptTags:f}=ke(e)),{priority:p,base:I(`base`,t,r),bodyAttributes:I(`bodyAttributes`,n,r),htmlAttributes:I(`htmlAttributes`,i,r),link:I(`link`,u,r),meta:I(`meta`,d,r),noscript:I(`noscript`,a,r),script:I(`script`,f,r),style:I(`style`,o,r),title:I(`title`,{title:s,titleAttributes:c},r)}},je=[],Me=!!(typeof window<`u`&&window.document&&window.document.createElement),Ne=class{instances=[];canUseDOM=Me;context;value={setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?je:this.instances,add:e=>{(this.canUseDOM?je:this.instances).push(e)},remove:e=>{let t=(this.canUseDOM?je:this.instances).indexOf(e);(this.canUseDOM?je:this.instances).splice(t,1)}}};constructor(e,t){this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Ae({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:``,titleAttributes:{}}))}},Pe=parseInt(`19.2.7`.split(`.`)[0],10)>=19,Fe=j.createContext({}),Ie=class e extends j.Component{static canUseDOM=Me;helmetData;constructor(t){super(t),Pe?this.helmetData=null:this.helmetData=new Ne(this.props.context||{},e.canUseDOM)}render(){return Pe?j.createElement(j.Fragment,null,this.props.children):j.createElement(Fe.Provider,{value:this.helmetData.value},this.props.children)}},Le=(e,t)=>{let n=document.head||document.querySelector(`head`),r=n.querySelectorAll(`${e}[${N}]`),i=[].slice.call(r),a=[],o;return t&&t.length&&t.forEach(t=>{let n=document.createElement(e);for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))if(e===`innerHTML`)n.innerHTML=t.innerHTML;else if(e===`cssText`){let e=t.cssText;n.appendChild(document.createTextNode(e))}else{let r=e,i=t[r]===void 0?``:t[r];n.setAttribute(e,i)}n.setAttribute(N,`true`),i.some((e,t)=>(o=t,n.isEqualNode(e)))?i.splice(o,1):a.push(n)}),i.forEach(e=>e.parentNode?.removeChild(e)),a.forEach(e=>n.appendChild(e)),{oldTags:i,newTags:a}},Re=(e,t)=>{let n=document.getElementsByTagName(e)[0];if(!n)return;let r=n.getAttribute(N),i=r?r.split(`,`):[],a=[...i],o=Object.keys(t);for(let e of o){let r=t[e]||``;n.getAttribute(e)!==r&&n.setAttribute(e,r),i.indexOf(e)===-1&&i.push(e);let o=a.indexOf(e);o!==-1&&a.splice(o,1)}for(let e=a.length-1;e>=0;--e)n.removeAttribute(a[e]);i.length===a.length?n.removeAttribute(N):n.getAttribute(N)!==o.join(`,`)&&n.setAttribute(N,o.join(`,`))},ze=(e,t)=>{e!==void 0&&document.title!==e&&(document.title=_e(e)),Re(`title`,t)},Be=(e,t)=>{let{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:a,metaTags:o,noscriptTags:s,onChangeClientState:c,scriptTags:l,styleTags:u,title:d,titleAttributes:f}=e;Re(`body`,r),Re(`html`,i),ze(d,f);let p={baseTag:Le(`base`,n),linkTags:Le(`link`,a),metaTags:Le(`meta`,o),noscriptTags:Le(`noscript`,s),scriptTags:Le(`script`,l),styleTags:Le(`style`,u)},m={},h={};Object.keys(p).forEach(e=>{let{newTags:t,oldTags:n}=p[e];t.length&&(m[e]=t),n.length&&(h[e]=p[e].oldTags)}),t&&t(),c(e,m,h)},Ve=null,He=e=>{Ve&&cancelAnimationFrame(Ve),e.defer?Ve=requestAnimationFrame(()=>{Be(e,()=>{Ve=null})}):(Be(e),Ve=null)},Ue=class extends j.Component{rendered=!1;shouldComponentUpdate(e){return!(0,M.default)(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){let{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){let{helmetInstances:e,setHelmet:t}=this.props.context,n=null,r=ge(e.get().map(e=>{let{context:t,...n}=e.props;return n}));Ie.canUseDOM?He(r):Ae&&(n=Ae(r)),t(n)}init(){if(this.rendered)return;this.rendered=!0;let{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},We=[],Ge=e=>{let t={};for(let n of Object.keys(e))t[ce[n]||n]=e[n];return t},Ke=e=>{let t={};for(let n of Object.keys(e)){let r=se[n];t[r||n]=e[n]}return t},qe=(e,t)=>{if(!Me)return;let n=document.getElementsByTagName(e)[0];if(!n)return;let r=`data-rh-managed`,i=n.getAttribute(r),a=i?i.split(`,`):[],o=Object.keys(t);for(let e of a)o.includes(e)||n.removeAttribute(e);for(let e of o){let r=t[e];r==null||r===!1?n.removeAttribute(e):r===!0?n.setAttribute(e,``):n.setAttribute(e,String(r))}o.length>0?n.setAttribute(r,o.join(`,`)):n.removeAttribute(r)},Je=()=>{let e={},t={};for(let n of We){let{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(e,Ge(r)),i&&Object.assign(t,Ge(i))}qe(`html`,e),qe(`body`,t)},Ye=class extends j.Component{componentDidMount(){We.push(this),Je()}componentDidUpdate(){Je()}componentWillUnmount(){let e=We.indexOf(this);e!==-1&&We.splice(e,1),Je()}resolveTitle(){let{title:e,titleTemplate:t,defaultTitle:n}=this.props;return e&&t?t.replace(/%s/g,()=>Array.isArray(e)?e.join(``):e):e||n||void 0}renderTitle(){let e=this.resolveTitle();if(e===void 0)return null;let t=this.props.titleAttributes||{};return j.createElement(`title`,Ke(t),e)}renderBase(){let{base:e}=this.props;return e?j.createElement(`base`,Ke(e)):null}renderMeta(){let{meta:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>j.createElement(`meta`,{key:t,...Ke(e)}))}renderLink(){let{link:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>j.createElement(`link`,{key:t,...Ke(e)}))}renderScript(){let{script:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{innerHTML:n,...r}=e,i=Ke(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),j.createElement(`script`,{key:t,...i})})}renderStyle(){let{style:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{cssText:n,...r}=e,i=Ke(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),j.createElement(`style`,{key:t,...i})})}renderNoscript(){let{noscript:e}=this.props;return!e||!Array.isArray(e)?null:e.map((e,t)=>{let{innerHTML:n,...r}=e,i=Ke(r);return n&&(i.dangerouslySetInnerHTML={__html:n}),j.createElement(`noscript`,{key:t,...i})})}render(){return j.createElement(j.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},Xe=class extends j.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(e){return!(0,ne.default)(be(this.props,`helmetData`),be(e,`helmetData`))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case`script`:case`noscript`:return{innerHTML:t};case`style`:return{cssText:t};default:throw Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case`title`:return{...t,[e.type]:r,titleAttributes:{...n}};case`body`:return{...t,bodyAttributes:{...n}};case`html`:return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(t=>{n={...n,[t]:e[t]}}),n}warnOnInvalidChildren(e,t){return(0,re.default)(oe.some(t=>e.type===t),typeof e.type==`function`?`You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.`:`Only elements types ${oe.join(`, `)} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),(0,re.default)(!t||typeof t==`string`||Array.isArray(t)&&!t.some(e=>typeof e!=`string`),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return j.Children.forEach(e,e=>{if(!e||!e.props)return;let{children:r,...i}=e.props,a=Object.keys(i).reduce((e,t)=>(e[ce[t]||t]=i[t],e),{}),{type:o}=e;switch(typeof o==`symbol`?o=o.toString():this.warnOnInvalidChildren(e,r),o){case`Symbol(react.fragment)`:t=this.mapChildrenToProps(r,t);break;case`link`:case`meta`:case`noscript`:case`script`:case`style`:n=this.flattenArrayTypeChildren(e,n,a,r);break;default:t=this.mapObjectTypeChildren(e,t,a,r);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){let{children:e,...t}=this.props,n={...t},{helmetData:r}=t;return e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Ne)&&(r=new Ne(r.context,!0),delete n.helmetData),Pe?j.createElement(Ye,{...n}):r?j.createElement(Ue,{...n,context:r.value}):j.createElement(Fe.Consumer,null,e=>j.createElement(Ue,{...n,context:e}))}},L=s(),R={home:`/`,about:`/about`,contact:`/contact`,helpUs:`/help-us`,accessibility:`/accessibility`,privacy:`/privacy`,privacyPtBr:`/privacidade`};function Ze(e){return e.endsWith(`/`)&&e.length>1?e.slice(0,-1):e}function Qe(e){return Object.values(R).find(t=>t===e)}function $e(e){return Qe(Ze(e))!==void 0}function et(){return!0}var tt=`analytics-consent`;function nt(){try{return globalThis.localStorage}catch{return null}}function rt(e){return e===`accepted`||e===`rejected`}function it(){let e=nt();if(!e)return null;try{let t=e.getItem(tt);return rt(t)?t:null}catch{return null}}function at(e){let t=nt();if(t)try{t.setItem(tt,e)}catch{}}function ot(){return it()!==null}function st(e,t=``){et()&&it()===`accepted`&&$e(e)&&(globalThis.window===void 0||typeof document>`u`||queueMicrotask(()=>{it()===`accepted`&&(globalThis.window.dataLayer=globalThis.window.dataLayer??[],globalThis.window.dataLayer.push({event:`page_view`,page_path:e,page_location:`${globalThis.window.location.origin}${e}${t}`,page_title:document.title}))}))}function ct(){let e=(0,L.c)(4),t=o(),n=(0,j.useRef)(!0),r,i;return e[0]!==t.pathname||e[1]!==t.search?(r=()=>{if(n.current){n.current=!1;return}st(t.pathname,t.search)},i=[t.pathname,t.search],e[0]=t.pathname,e[1]=t.search,e[2]=r,e[3]=i):(r=e[2],i=e[3]),(0,j.useEffect)(r,i),null}var lt={[R.home]:{title:`Home`,routeLabel:`Home`},[R.about]:{title:`About`,routeLabel:`About`},[R.contact]:{title:`Contact`,routeLabel:`Contact`},[R.helpUs]:{title:`Help Us`,routeLabel:`Help Us`},[R.accessibility]:{title:`Accessibility`,routeLabel:`Accessibility statement`},[R.privacy]:{title:`Privacy`,routeLabel:`Privacy policy`},[R.privacyPtBr]:{title:`Privacidade`,routeLabel:`Política de privacidade`}};function ut(e){let t=e.endsWith(`/`)&&e.length>1?e.slice(0,-1):e,n=Object.values(R).find(e=>e===t);return n?lt[n]:lt[R.home]}function dt(e){return e?.getAttribute(`aria-busy`)!==`true`}function ft(e){return e?.querySelector(`[data-route-load-error]`)!==null}function pt(e,t){return ft(t)?`Failed to load ${e}`:`Navigated to ${e}`}var z=f();function mt(){let e=(0,L.c)(7),t=o(),n=(0,j.useRef)(null),r=(0,j.useRef)(!0),i=(0,j.useRef)(t.pathname),a,s;e[0]===t.pathname?(a=e[1],s=e[2]):(a=()=>{i.current=t.pathname},s=[t.pathname],e[0]=t.pathname,e[1]=a,e[2]=s),(0,j.useLayoutEffect)(a,s);let c,l;e[3]===t.pathname?(c=e[4],l=e[5]):(c=()=>{let e=t.pathname;if(r.current){r.current=!1;return}let a=()=>{if(i.current!==e)return!0;let t=document.getElementById(`main-content`);if(!dt(t))return!1;let r=ut(e);return n.current&&(n.current.textContent=pt(r.routeLabel,t)),!document.activeElement?.classList.contains(`skip-link`)&&t&&t.focus({preventScroll:!1}),!0};if(a())return;let o=document.getElementById(`main-content`);if(!o)return;let s=new MutationObserver(()=>{a()&&s.disconnect()});return s.observe(o,{attributes:!0,attributeFilter:[`aria-busy`],childList:!0,subtree:!0}),()=>{s.disconnect()}},l=[t.pathname],e[3]=t.pathname,e[4]=c,e[5]=l),(0,j.useEffect)(c,l);let u;return e[6]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,z.jsx)(`div`,{ref:n,className:`visually-hidden`,"aria-live":`polite`,"aria-atomic":`true`}),e[6]=u):u=e[6],u}var ht=`Agents Repo`;function gt(e){return`${e} — ${ht}`}function _t(){let e=(0,L.c)(3),{pathname:t}=o(),n,r;return e[0]===t?(n=e[1],r=e[2]):(n=()=>{let e=ut(t);document.title=gt(e.title)},r=[t],e[0]=t,e[1]=n,e[2]=r),(0,j.useEffect)(n,r),null}var vt=`https://agents-repo.org`;function yt(e){let t=e??{BASE_URL:`/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_GTM_ID:`GTM-57FJBZ7P`,VITE_SITE_URL:`https://preview.example.test`}.VITE_SITE_URL?.trim();return t&&t.length>0?t.replace(/\/$/,``):vt}var bt=yt(),xt=`/og-image.png`;function St(e=bt){return`${e}${xt}`}var Ct=1200,wt=`Agents Repo — browse, search, and download agents and flows from the registry.`,Tt=ht,Et=`en_US`,Dt=`website`,Ot=`summary_large_image`,kt={[R.home]:{description:`Browse, search, and download agents and flows from the registry.`,canonicalPath:R.home},[R.about]:{description:`Learn about Agents Repo, the web interface for discovering curated agents and flows from the registry.`,canonicalPath:R.about},[R.contact]:{description:`Contact the Agents Repo team for questions, feedback, or support.`,canonicalPath:R.contact},[R.helpUs]:{description:`Help improve Agents Repo and the registry by contributing packages, reporting issues, or sharing feedback.`,canonicalPath:R.helpUs},[R.accessibility]:{description:`Accessibility statement and conformance report for Agents Repo, targeting WCAG 2.2 Level AA.`,canonicalPath:R.accessibility},[R.privacy]:{description:`Privacy policy for Agents Repo: data collection, cookies, analytics consent, and your rights in the EU, US, and Brazil.`,canonicalPath:R.privacy},[R.privacyPtBr]:{description:`Política de privacidade do Agents Repo: coleta de dados, cookies, consentimento de analytics e seus direitos.`,canonicalPath:R.privacyPtBr}};function At(e){let t=Qe(Ze(e));return t?kt[t]:kt[R.home]}function jt(e,t){return t===`/`?`${e}/`:`${e}${t}`}function Mt(e,t,n,r,i){let a=`${e}/#organization`,o=`${e}/#website`;return t===R.home?{"@context":`https://schema.org`,"@graph":[{"@type":`Organization`,"@id":a,name:ht,url:`${e}/`},{"@type":`WebSite`,"@id":o,name:ht,url:`${e}/`,publisher:{"@id":a}}]}:{"@context":`https://schema.org`,"@type":`WebPage`,name:gt(n),description:r,url:i}}function Nt(e,t){let n=yt(t),r=ut(e),i=At(e),a=gt(r.title),o=jt(n,i.canonicalPath),s=St(n);return{documentTitle:a,description:i.description,canonicalUrl:o,ogTitle:a,ogDescription:i.description,ogUrl:o,ogImage:s,ogImageWidth:Ct,ogImageHeight:630,ogImageAlt:wt,ogType:Dt,ogSiteName:Tt,ogLocale:Et,twitterCard:Ot,twitterTitle:a,twitterDescription:i.description,twitterImage:s,jsonLd:Mt(n,i.canonicalPath,r.title,i.description,o)}}function Pt(){let e=(0,L.c)(50),{pathname:t}=o();if(!$e(t)){let t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,z.jsx)(Xe,{children:(0,z.jsx)(`meta`,{name:`robots`,content:`noindex, nofollow`})}),e[0]=t):t=e[0],t}let n,r,i,a,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;if(e[1]!==t){let o=Nt(t);n=Xe,h=(0,z.jsx)(`meta`,{name:`description`,content:o.description}),e[22]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,z.jsx)(`meta`,{name:`robots`,content:`index, follow`}),e[22]=g):g=e[22],_=(0,z.jsx)(`link`,{rel:`canonical`,href:o.canonicalUrl}),v=(0,z.jsx)(`meta`,{property:`og:url`,content:o.ogUrl}),y=(0,z.jsx)(`meta`,{property:`og:title`,content:o.ogTitle}),b=(0,z.jsx)(`meta`,{property:`og:description`,content:o.ogDescription}),x=(0,z.jsx)(`meta`,{property:`og:image`,content:o.ogImage});let C=String(o.ogImageWidth);e[23]===C?S=e[24]:(S=(0,z.jsx)(`meta`,{property:`og:image:width`,content:C}),e[23]=C,e[24]=S);let w=String(o.ogImageHeight);e[25]===w?a=e[26]:(a=(0,z.jsx)(`meta`,{property:`og:image:height`,content:w}),e[25]=w,e[26]=a),s=(0,z.jsx)(`meta`,{property:`og:image:alt`,content:o.ogImageAlt}),c=(0,z.jsx)(`meta`,{property:`og:type`,content:o.ogType}),l=(0,z.jsx)(`meta`,{property:`og:site_name`,content:o.ogSiteName}),u=(0,z.jsx)(`meta`,{property:`og:locale`,content:o.ogLocale}),d=(0,z.jsx)(`meta`,{name:`twitter:card`,content:o.twitterCard}),f=(0,z.jsx)(`meta`,{name:`twitter:title`,content:o.twitterTitle}),p=(0,z.jsx)(`meta`,{name:`twitter:description`,content:o.twitterDescription}),m=(0,z.jsx)(`meta`,{name:`twitter:image`,content:o.twitterImage}),r=`application/ld+json`,i=JSON.stringify(o.jsonLd),e[1]=t,e[2]=n,e[3]=r,e[4]=i,e[5]=a,e[6]=s,e[7]=c,e[8]=l,e[9]=u,e[10]=d,e[11]=f,e[12]=p,e[13]=m,e[14]=h,e[15]=g,e[16]=_,e[17]=v,e[18]=y,e[19]=b,e[20]=x,e[21]=S}else n=e[2],r=e[3],i=e[4],a=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=e[16],v=e[17],y=e[18],b=e[19],x=e[20],S=e[21];let C;e[27]!==r||e[28]!==i?(C=(0,z.jsx)(`script`,{type:r,children:i}),e[27]=r,e[28]=i,e[29]=C):C=e[29];let w;return e[30]!==n||e[31]!==a||e[32]!==s||e[33]!==c||e[34]!==l||e[35]!==u||e[36]!==d||e[37]!==f||e[38]!==p||e[39]!==m||e[40]!==C||e[41]!==h||e[42]!==g||e[43]!==_||e[44]!==v||e[45]!==y||e[46]!==b||e[47]!==x||e[48]!==S?(w=(0,z.jsxs)(n,{children:[h,g,_,v,y,b,x,S,a,s,c,l,u,d,f,p,m,C]}),e[30]=n,e[31]=a,e[32]=s,e[33]=c,e[34]=l,e[35]=u,e[36]=d,e[37]=f,e[38]=p,e[39]=m,e[40]=C,e[41]=h,e[42]=g,e[43]=_,e[44]=v,e[45]=y,e[46]=b,e[47]=x,e[48]=S,e[49]=w):w=e[49],w}function Ft(){let e=(0,L.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,z.jsx)(`a`,{href:`#main-content`,className:`skip-link`,children:`Skip to main content`}),e[0]=t):t=e[0],t}var It=e=>[e.id,e.namespace,`${e.namespace}/${e.package}`,e.name,e.package,e.description,e.owner,`@${e.owner}`,e.tags.join(` `)].join(` `).toLowerCase(),Lt=(e,t)=>{let n=t.trim().toLowerCase(),r=n.startsWith(`@`)?n.slice(1):n;return n?e.packages.filter(e=>{let t=It(e);return t.includes(n)?!0:r!==n&&t.includes(r)}):e.packages},Rt=e=>new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`}).format(new Date(e)),zt=t(((e,t)=>{var n=`2.0.0`,r=256;t.exports={MAX_LENGTH:r,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:r-6,MAX_SAFE_INTEGER:2**53-1||9007199254740991,RELEASE_TYPES:[`major`,`premajor`,`minor`,`preminor`,`patch`,`prepatch`,`prerelease`],SEMVER_SPEC_VERSION:n,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}})),Bt=t(((e,t)=>{t.exports=typeof process==`object`&&{}.NODE_DEBUG&&/\bsemver\b/i.test({}.NODE_DEBUG)?(...e)=>console.error(`SEMVER`,...e):()=>{}})),Vt=t(((e,t)=>{var{MAX_SAFE_COMPONENT_LENGTH:n,MAX_SAFE_BUILD_LENGTH:r,MAX_LENGTH:i}=zt(),a=Bt();e=t.exports={};var o=e.re=[],s=e.safeRe=[],c=e.src=[],l=e.safeSrc=[],u=e.t={},d=0,f=`[a-zA-Z0-9-]`,p=[[`\\s`,1],[`\\d`,i],[f,r]],m=e=>{for(let[t,n]of p)e=e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);return e},h=(e,t,n)=>{let r=m(t),i=d++;a(e,i,t),u[e]=i,c[i]=t,l[i]=r,o[i]=new RegExp(t,n?`g`:void 0),s[i]=new RegExp(r,n?`g`:void 0)};h(`NUMERICIDENTIFIER`,`0|[1-9]\\d*`),h(`NUMERICIDENTIFIERLOOSE`,`\\d+`),h(`NONNUMERICIDENTIFIER`,`\\d*[a-zA-Z-]${f}*`),h(`MAINVERSION`,`(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})`),h(`MAINVERSIONLOOSE`,`(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})`),h(`PRERELEASEIDENTIFIER`,`(?:${c[u.NONNUMERICIDENTIFIER]}|${c[u.NUMERICIDENTIFIER]})`),h(`PRERELEASEIDENTIFIERLOOSE`,`(?:${c[u.NONNUMERICIDENTIFIER]}|${c[u.NUMERICIDENTIFIERLOOSE]})`),h(`PRERELEASE`,`(?:-(${c[u.PRERELEASEIDENTIFIER]}(?:\\.${c[u.PRERELEASEIDENTIFIER]})*))`),h(`PRERELEASELOOSE`,`(?:-?(${c[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[u.PRERELEASEIDENTIFIERLOOSE]})*))`),h(`BUILDIDENTIFIER`,`${f}+`),h(`BUILD`,`(?:\\+(${c[u.BUILDIDENTIFIER]}(?:\\.${c[u.BUILDIDENTIFIER]})*))`),h(`FULLPLAIN`,`v?${c[u.MAINVERSION]}${c[u.PRERELEASE]}?${c[u.BUILD]}?`),h(`FULL`,`^${c[u.FULLPLAIN]}$`),h(`LOOSEPLAIN`,`[v=\\s]*${c[u.MAINVERSIONLOOSE]}${c[u.PRERELEASELOOSE]}?${c[u.BUILD]}?`),h(`LOOSE`,`^${c[u.LOOSEPLAIN]}$`),h(`GTLT`,`((?:<|>)?=?)`),h(`XRANGEIDENTIFIERLOOSE`,`${c[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),h(`XRANGEIDENTIFIER`,`${c[u.NUMERICIDENTIFIER]}|x|X|\\*`),h(`XRANGEPLAIN`,`[v=\\s]*(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:${c[u.PRERELEASE]})?${c[u.BUILD]}?)?)?`),h(`XRANGEPLAINLOOSE`,`[v=\\s]*(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:${c[u.PRERELEASELOOSE]})?${c[u.BUILD]}?)?)?`),h(`XRANGE`,`^${c[u.GTLT]}\\s*${c[u.XRANGEPLAIN]}$`),h(`XRANGELOOSE`,`^${c[u.GTLT]}\\s*${c[u.XRANGEPLAINLOOSE]}$`),h(`COERCEPLAIN`,`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`),h(`COERCE`,`${c[u.COERCEPLAIN]}(?:$|[^\\d])`),h(`COERCEFULL`,c[u.COERCEPLAIN]+`(?:${c[u.PRERELEASE]})?(?:${c[u.BUILD]})?(?:$|[^\\d])`),h(`COERCERTL`,c[u.COERCE],!0),h(`COERCERTLFULL`,c[u.COERCEFULL],!0),h(`LONETILDE`,`(?:~>?)`),h(`TILDETRIM`,`(\\s*)${c[u.LONETILDE]}\\s+`,!0),e.tildeTrimReplace=`$1~`,h(`TILDE`,`^${c[u.LONETILDE]}${c[u.XRANGEPLAIN]}$`),h(`TILDELOOSE`,`^${c[u.LONETILDE]}${c[u.XRANGEPLAINLOOSE]}$`),h(`LONECARET`,`(?:\\^)`),h(`CARETTRIM`,`(\\s*)${c[u.LONECARET]}\\s+`,!0),e.caretTrimReplace=`$1^`,h(`CARET`,`^${c[u.LONECARET]}${c[u.XRANGEPLAIN]}$`),h(`CARETLOOSE`,`^${c[u.LONECARET]}${c[u.XRANGEPLAINLOOSE]}$`),h(`COMPARATORLOOSE`,`^${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]})$|^$`),h(`COMPARATOR`,`^${c[u.GTLT]}\\s*(${c[u.FULLPLAIN]})$|^$`),h(`COMPARATORTRIM`,`(\\s*)${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]}|${c[u.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace=`$1$2$3`,h(`HYPHENRANGE`,`^\\s*(${c[u.XRANGEPLAIN]})\\s+-\\s+(${c[u.XRANGEPLAIN]})\\s*$`),h(`HYPHENRANGELOOSE`,`^\\s*(${c[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[u.XRANGEPLAINLOOSE]})\\s*$`),h(`STAR`,`(<|>)?=?\\s*\\*`),h(`GTE0`,`^\\s*>=\\s*0\\.0\\.0\\s*$`),h(`GTE0PRE`,`^\\s*>=\\s*0\\.0\\.0-0\\s*$`)})),Ht=t(((e,t)=>{var n=Object.freeze({loose:!0}),r=Object.freeze({});t.exports=e=>e?typeof e==`object`?e:n:r})),Ut=t(((e,t)=>{var n=/^[0-9]+$/,r=(e,t)=>{if(typeof e==`number`&&typeof t==`number`)return e===t?0:e<t?-1:1;let r=n.test(e),i=n.test(t);return r&&i&&(e=+e,t=+t),e===t?0:r&&!i?-1:i&&!r?1:e<t?-1:1};t.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}})),B=t(((e,t)=>{var n=Bt(),{MAX_LENGTH:r,MAX_SAFE_INTEGER:i}=zt(),{safeRe:a,t:o}=Vt(),s=Ht(),{compareIdentifiers:c}=Ut(),l=(e,t)=>{let n=t.split(`.`);if(n.length>e.length)return!1;for(let t=0;t<n.length;t++)if(c(e[t],n[t])!==0)return!1;return!0};t.exports=class e{constructor(t,c){if(c=s(c),t instanceof e){if(t.loose===!!c.loose&&t.includePrerelease===!!c.includePrerelease)return t;t=t.version}else if(typeof t!=`string`)throw TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>r)throw TypeError(`version is longer than ${r} characters`);n(`SemVer`,t,c),this.options=c,this.loose=!!c.loose,this.includePrerelease=!!c.includePrerelease;let l=t.trim().match(c.loose?a[o.LOOSE]:a[o.FULL]);if(!l)throw TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+l[1],this.minor=+l[2],this.patch=+l[3],this.major>i||this.major<0)throw TypeError(`Invalid major version`);if(this.minor>i||this.minor<0)throw TypeError(`Invalid minor version`);if(this.patch>i||this.patch<0)throw TypeError(`Invalid patch version`);l[4]?this.prerelease=l[4].split(`.`).map(e=>{if(/^[0-9]+$/.test(e)){let t=+e;if(t>=0&&t<i)return t}return e}):this.prerelease=[],this.build=l[5]?l[5].split(`.`):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(`.`)}`),this.version}toString(){return this.version}compare(t){if(n(`SemVer.compare`,this.version,this.options,t),!(t instanceof e)){if(typeof t==`string`&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),this.major<t.major?-1:this.major>t.major?1:this.minor<t.minor?-1:this.minor>t.minor?1:this.patch<t.patch?-1:+(this.patch>t.patch)}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let r=0;do{let e=this.prerelease[r],i=t.prerelease[r];if(n(`prerelease compare`,r,e,i),e===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(e===void 0)return-1;if(e===i)continue;return c(e,i)}while(++r)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let r=0;do{let e=this.build[r],i=t.build[r];if(n(`build compare`,r,e,i),e===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(e===void 0)return-1;if(e===i)continue;return c(e,i)}while(++r)}inc(e,t,n){if(e.startsWith(`pre`)){if(!t&&n===!1)throw Error(`invalid increment argument: identifier is empty`);if(t){let e=`-${t}`.match(this.options.loose?a[o.PRERELEASELOOSE]:a[o.PRERELEASE]);if(!e||e[1]!==t)throw Error(`invalid identifier: ${t}`)}}switch(e){case`premajor`:this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc(`pre`,t,n);break;case`preminor`:this.prerelease.length=0,this.patch=0,this.minor++,this.inc(`pre`,t,n);break;case`prepatch`:this.prerelease.length=0,this.inc(`patch`,t,n),this.inc(`pre`,t,n);break;case`prerelease`:this.prerelease.length===0&&this.inc(`patch`,t,n),this.inc(`pre`,t,n);break;case`release`:if(this.prerelease.length===0)throw Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case`major`:(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case`minor`:(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case`patch`:this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case`pre`:{let e=+!!Number(n);if(this.prerelease.length===0)this.prerelease=[e];else{let r=this.prerelease.length;for(;--r>=0;)typeof this.prerelease[r]==`number`&&(this.prerelease[r]++,r=-2);if(r===-1){if(t===this.prerelease.join(`.`)&&n===!1)throw Error(`invalid increment argument: identifier already exists`);this.prerelease.push(e)}}if(t){let r=[t,e];if(n===!1&&(r=[t]),l(this.prerelease,t)){let e=this.prerelease[t.split(`.`).length];isNaN(e)&&(this.prerelease=r)}else this.prerelease=r}break}default:throw Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(`.`)}`),this}}})),Wt=t(((e,t)=>{var n=B();t.exports=(e,t,r=!1)=>{if(e instanceof n)return e;try{return new n(e,t)}catch(e){if(!r)return null;throw e}}})),Gt=t(((e,t)=>{var n=Wt();t.exports=(e,t)=>{let r=n(e,t);return r?r.version:null}})),Kt=t(((e,t)=>{var n=Wt();t.exports=(e,t)=>{let r=n(e.trim().replace(/^[=v]+/,``),t);return r?r.version:null}})),qt=t(((e,t)=>{var n=B();t.exports=(e,t,r,i,a)=>{typeof r==`string`&&(a=i,i=r,r=void 0);try{return new n(e instanceof n?e.version:e,r).inc(t,i,a).version}catch{return null}}})),Jt=t(((e,t)=>{var n=Wt();t.exports=(e,t)=>{let r=n(e,null,!0),i=n(t,null,!0),a=r.compare(i);if(a===0)return null;let o=a>0,s=o?r:i,c=o?i:r,l=!!s.prerelease.length;if(c.prerelease.length&&!l){if(!c.patch&&!c.minor)return`major`;if(c.compareMain(s)===0)return c.minor&&!c.patch?`minor`:`patch`}let u=l?`pre`:``;return r.major===i.major?r.minor===i.minor?r.patch===i.patch?`prerelease`:u+`patch`:u+`minor`:u+`major`}})),Yt=t(((e,t)=>{var n=B();t.exports=(e,t)=>new n(e,t).major})),Xt=t(((e,t)=>{var n=B();t.exports=(e,t)=>new n(e,t).minor})),Zt=t(((e,t)=>{var n=B();t.exports=(e,t)=>new n(e,t).patch})),Qt=t(((e,t)=>{var n=Wt();t.exports=(e,t)=>{let r=n(e,t);return r&&r.prerelease.length?r.prerelease:null}})),V=t(((e,t)=>{var n=B();t.exports=(e,t,r)=>new n(e,r).compare(new n(t,r))})),$t=t(((e,t)=>{var n=V();t.exports=(e,t,r)=>n(t,e,r)})),en=t(((e,t)=>{var n=V();t.exports=(e,t)=>n(e,t,!0)})),tn=t(((e,t)=>{var n=B();t.exports=(e,t,r)=>{let i=new n(e,r),a=new n(t,r);return i.compare(a)||i.compareBuild(a)}})),nn=t(((e,t)=>{var n=tn();t.exports=(e,t)=>e.sort((e,r)=>n(e,r,t))})),rn=t(((e,t)=>{var n=tn();t.exports=(e,t)=>e.sort((e,r)=>n(r,e,t))})),an=t(((e,t)=>{var n=V();t.exports=(e,t,r)=>n(e,t,r)>0})),on=t(((e,t)=>{var n=V();t.exports=(e,t,r)=>n(e,t,r)<0})),sn=t(((e,t)=>{var n=V();t.exports=(e,t,r)=>n(e,t,r)===0})),cn=t(((e,t)=>{var n=V();t.exports=(e,t,r)=>n(e,t,r)!==0})),ln=t(((e,t)=>{var n=V();t.exports=(e,t,r)=>n(e,t,r)>=0})),un=t(((e,t)=>{var n=V();t.exports=(e,t,r)=>n(e,t,r)<=0})),dn=t(((e,t)=>{var n=sn(),r=cn(),i=an(),a=ln(),o=on(),s=un();t.exports=(e,t,c,l)=>{switch(t){case`===`:return typeof e==`object`&&(e=e.version),typeof c==`object`&&(c=c.version),e===c;case`!==`:return typeof e==`object`&&(e=e.version),typeof c==`object`&&(c=c.version),e!==c;case``:case`=`:case`==`:return n(e,c,l);case`!=`:return r(e,c,l);case`>`:return i(e,c,l);case`>=`:return a(e,c,l);case`<`:return o(e,c,l);case`<=`:return s(e,c,l);default:throw TypeError(`Invalid operator: ${t}`)}}})),fn=t(((e,t)=>{var n=B(),r=Wt(),{safeRe:i,t:a}=Vt();t.exports=(e,t)=>{if(e instanceof n)return e;if(typeof e==`number`&&(e=String(e)),typeof e!=`string`)return null;t||={};let o=null;if(!t.rtl)o=e.match(t.includePrerelease?i[a.COERCEFULL]:i[a.COERCE]);else{let n=t.includePrerelease?i[a.COERCERTLFULL]:i[a.COERCERTL],r;for(;(r=n.exec(e))&&(!o||o.index+o[0].length!==e.length);)(!o||r.index+r[0].length!==o.index+o[0].length)&&(o=r),n.lastIndex=r.index+r[1].length+r[2].length;n.lastIndex=-1}if(o===null)return null;let s=o[2];return r(`${s}.${o[3]||`0`}.${o[4]||`0`}${t.includePrerelease&&o[5]?`-${o[5]}`:``}${t.includePrerelease&&o[6]?`+${o[6]}`:``}`,t)}})),pn=t(((e,t)=>{var n=Wt(),r=zt(),i=B(),a=(e,t,n)=>{if(!r.RELEASE_TYPES.includes(t))return null;let i=o(e,n);return i&&s(i,t)},o=(e,t)=>n(e instanceof i?e.version:e,t),s=(e,t)=>{if(c(t))return e.version;switch(e.prerelease=[],t){case`major`:e.minor=0,e.patch=0;break;case`minor`:e.patch=0;break}return e.format()},c=e=>e.startsWith(`pre`);t.exports=a})),mn=t(((e,t)=>{t.exports=class{constructor(){this.max=1e3,this.map=new Map}get(e){let t=this.map.get(e);if(t!==void 0)return this.map.delete(e),this.map.set(e,t),t}delete(e){return this.map.delete(e)}set(e,t){if(!this.delete(e)&&t!==void 0){if(this.map.size>=this.max){let e=this.map.keys().next().value;this.delete(e)}this.map.set(e,t)}return this}}})),H=t(((e,t)=>{var n=/\s+/g;t.exports=class e{constructor(t,r){if(r=i(r),t instanceof e)return t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease?t:new e(t.raw,r);if(t instanceof a)return this.raw=t.value,this.set=[[t]],this.formatted=void 0,this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=t.trim().replace(n,` `),this.set=this.raw.split(`||`).map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let e=this.set[0];if(this.set=this.set.filter(e=>!_(e[0])),this.set.length===0)this.set=[e];else if(this.set.length>1){for(let e of this.set)if(e.length===1&&v(e[0])){this.set=[e];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted=``;for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+=`||`);let t=this.set[e];for(let e=0;e<t.length;e++)e>0&&(this.formatted+=` `),this.formatted+=t[e].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){e=e.replace(g,``);let t=((this.options.includePrerelease&&m)|(this.options.loose&&h))+`:`+e,n=r.get(t);if(n)return n;let i=this.options.loose,s=i?c[u.HYPHENRANGELOOSE]:c[u.HYPHENRANGE];e=e.replace(s,ee(this.options.includePrerelease)),o(`hyphen replace`,e),e=e.replace(c[u.COMPARATORTRIM],d),o(`comparator trim`,e),e=e.replace(c[u.TILDETRIM],f),o(`tilde trim`,e),e=e.replace(c[u.CARETTRIM],p),o(`caret trim`,e);let l=e.split(` `).map(e=>b(e,this.options)).join(` `).split(/\s+/).map(e=>A(e,this.options));i&&(l=l.filter(e=>(o(`loose invalid filter`,e,this.options),!!e.match(c[u.COMPARATORLOOSE])))),o(`range list`,l);let v=new Map,y=l.map(e=>new a(e,this.options));for(let e of y){if(_(e))return[e];v.set(e.value,e)}v.size>1&&v.has(``)&&v.delete(``);let x=[...v.values()];return r.set(t,x),x}intersects(t,n){if(!(t instanceof e))throw TypeError(`a Range is required`);return this.set.some(e=>y(e,n)&&t.set.some(t=>y(t,n)&&e.every(e=>t.every(t=>e.intersects(t,n)))))}test(e){if(!e)return!1;if(typeof e==`string`)try{e=new s(e,this.options)}catch{return!1}for(let t=0;t<this.set.length;t++)if(te(this.set[t],e,this.options))return!0;return!1}};var r=new(mn()),i=Ht(),a=hn(),o=Bt(),s=B(),{safeRe:c,src:l,t:u,comparatorTrimReplace:d,tildeTrimReplace:f,caretTrimReplace:p}=Vt(),{FLAG_INCLUDE_PRERELEASE:m,FLAG_LOOSE:h}=zt(),g=new RegExp(l[u.BUILD],`g`),_=e=>e.value===`<0.0.0-0`,v=e=>e.value===``,y=(e,t)=>{let n=!0,r=e.slice(),i=r.pop();for(;n&&r.length;)n=r.every(e=>i.intersects(e,t)),i=r.pop();return n},b=(e,t)=>(e=e.replace(c[u.BUILD],``),o(`comp`,e,t),e=T(e,t),o(`caret`,e),e=C(e,t),o(`tildes`,e),e=D(e,t),o(`xrange`,e),e=k(e,t),o(`stars`,e),e),x=e=>!e||e.toLowerCase()===`x`||e===`*`,S=(e,t,n)=>x(e)&&!x(t)||x(t)&&n&&!x(n),C=(e,t)=>e.trim().split(/\s+/).map(e=>w(e,t)).join(` `),w=(e,t)=>{let n=t.loose?c[u.TILDELOOSE]:c[u.TILDE],r=t.includePrerelease?`-0`:``;return e.replace(n,(t,n,i,a,s)=>{o(`tilde`,e,t,n,i,a,s);let c;return x(n)?c=``:x(i)?c=`>=${n}.0.0${r} <${+n+1}.0.0-0`:x(a)?c=`>=${n}.${i}.0${r} <${n}.${+i+1}.0-0`:s?(o(`replaceTilde pr`,s),c=`>=${n}.${i}.${a}-${s} <${n}.${+i+1}.0-0`):c=`>=${n}.${i}.${a} <${n}.${+i+1}.0-0`,o(`tilde return`,c),c})},T=(e,t)=>e.trim().split(/\s+/).map(e=>E(e,t)).join(` `),E=(e,t)=>{o(`caret`,e,t);let n=t.loose?c[u.CARETLOOSE]:c[u.CARET],r=t.includePrerelease?`-0`:``;return e.replace(n,(t,n,i,a,s)=>{o(`caret`,e,t,n,i,a,s);let c;return x(n)?c=``:x(i)?c=`>=${n}.0.0${r} <${+n+1}.0.0-0`:x(a)?c=n===`0`?`>=${n}.${i}.0${r} <${n}.${+i+1}.0-0`:`>=${n}.${i}.0${r} <${+n+1}.0.0-0`:s?(o(`replaceCaret pr`,s),c=n===`0`?i===`0`?`>=${n}.${i}.${a}-${s} <${n}.${i}.${+a+1}-0`:`>=${n}.${i}.${a}-${s} <${n}.${+i+1}.0-0`:`>=${n}.${i}.${a}-${s} <${+n+1}.0.0-0`):(o(`no pr`),c=n===`0`?i===`0`?`>=${n}.${i}.${a} <${n}.${i}.${+a+1}-0`:`>=${n}.${i}.${a} <${n}.${+i+1}.0-0`:`>=${n}.${i}.${a} <${+n+1}.0.0-0`),o(`caret return`,c),c})},D=(e,t)=>(o(`replaceXRanges`,e,t),e.split(/\s+/).map(e=>O(e,t)).join(` `)),O=(e,t)=>{e=e.trim();let n=t.loose?c[u.XRANGELOOSE]:c[u.XRANGE];return e.replace(n,(n,r,i,a,s,c)=>{if(o(`xRange`,e,n,r,i,a,s,c),S(i,a,s))return e;let l=x(i),u=l||x(a),d=u||x(s),f=d;return r===`=`&&f&&(r=``),c=t.includePrerelease?`-0`:``,l?n=r===`>`||r===`<`?`<0.0.0-0`:`*`:r&&f?(u&&(a=0),s=0,r===`>`?(r=`>=`,u?(i=+i+1,a=0,s=0):(a=+a+1,s=0)):r===`<=`&&(r=`<`,u?i=+i+1:a=+a+1),r===`<`&&(c=`-0`),n=`${r+i}.${a}.${s}${c}`):u?n=`>=${i}.0.0${c} <${+i+1}.0.0-0`:d&&(n=`>=${i}.${a}.0${c} <${i}.${+a+1}.0-0`),o(`xRange return`,n),n})},k=(e,t)=>(o(`replaceStars`,e,t),e.trim().replace(c[u.STAR],``)),A=(e,t)=>(o(`replaceGTE0`,e,t),e.trim().replace(c[t.includePrerelease?u.GTE0PRE:u.GTE0],``)),ee=e=>(t,n,r,i,a,o,s,c,l,u,d,f)=>(n=x(r)?``:x(i)?`>=${r}.0.0${e?`-0`:``}`:x(a)?`>=${r}.${i}.0${e?`-0`:``}`:o?`>=${n}`:`>=${n}${e?`-0`:``}`,c=x(l)?``:x(u)?`<${+l+1}.0.0-0`:x(d)?`<${l}.${+u+1}.0-0`:f?`<=${l}.${u}.${d}-${f}`:e?`<${l}.${u}.${+d+1}-0`:`<=${c}`,`${n} ${c}`.trim()),te=(e,t,n)=>{for(let n=0;n<e.length;n++)if(!e[n].test(t))return!1;if(t.prerelease.length&&!n.includePrerelease){for(let n=0;n<e.length;n++)if(o(e[n].semver),e[n].semver!==a.ANY&&e[n].semver.prerelease.length>0){let r=e[n].semver;if(r.major===t.major&&r.minor===t.minor&&r.patch===t.patch)return!0}return!1}return!0}})),hn=t(((e,t)=>{var n=Symbol(`SemVer ANY`);t.exports=class e{static get ANY(){return n}constructor(t,i){if(i=r(i),t instanceof e){if(t.loose===!!i.loose)return t;t=t.value}t=t.trim().split(/\s+/).join(` `),s(`comparator`,t,i),this.options=i,this.loose=!!i.loose,this.parse(t),this.semver===n?this.value=``:this.value=this.operator+this.semver.version,s(`comp`,this)}parse(e){let t=this.options.loose?i[a.COMPARATORLOOSE]:i[a.COMPARATOR],r=e.match(t);if(!r)throw TypeError(`Invalid comparator: ${e}`);this.operator=r[1]===void 0?``:r[1],this.operator===`=`&&(this.operator=``),r[2]?this.semver=new c(r[2],this.options.loose):this.semver=n}toString(){return this.value}test(e){if(s(`Comparator.test`,e,this.options.loose),this.semver===n||e===n)return!0;if(typeof e==`string`)try{e=new c(e,this.options)}catch{return!1}return o(e,this.operator,this.semver,this.options)}intersects(t,n){if(!(t instanceof e))throw TypeError(`a Comparator is required`);return this.operator===``?this.value===``||new l(t.value,n).test(this.value):t.operator===``?t.value===``||new l(this.value,n).test(t.semver):(n=r(n),n.includePrerelease&&(this.value===`<0.0.0-0`||t.value===`<0.0.0-0`)||!n.includePrerelease&&(this.value.startsWith(`<0.0.0`)||t.value.startsWith(`<0.0.0`))?!1:!!(this.operator.startsWith(`>`)&&t.operator.startsWith(`>`)||this.operator.startsWith(`<`)&&t.operator.startsWith(`<`)||this.semver.version===t.semver.version&&this.operator.includes(`=`)&&t.operator.includes(`=`)||o(this.semver,`<`,t.semver,n)&&this.operator.startsWith(`>`)&&t.operator.startsWith(`<`)||o(this.semver,`>`,t.semver,n)&&this.operator.startsWith(`<`)&&t.operator.startsWith(`>`)))}};var r=Ht(),{safeRe:i,t:a}=Vt(),o=dn(),s=Bt(),c=B(),l=H()})),gn=t(((e,t)=>{var n=H();t.exports=(e,t,r)=>{try{t=new n(t,r)}catch{return!1}return t.test(e)}})),_n=t(((e,t)=>{var n=H();t.exports=(e,t)=>new n(e,t).set.map(e=>e.map(e=>e.value).join(` `).trim().split(` `))})),vn=t(((e,t)=>{var n=B(),r=H();t.exports=(e,t,i)=>{let a=null,o=null,s=null;try{s=new r(t,i)}catch{return null}return e.forEach(e=>{s.test(e)&&(!a||o.compare(e)===-1)&&(a=e,o=new n(a,i))}),a}})),yn=t(((e,t)=>{var n=B(),r=H();t.exports=(e,t,i)=>{let a=null,o=null,s=null;try{s=new r(t,i)}catch{return null}return e.forEach(e=>{s.test(e)&&(!a||o.compare(e)===1)&&(a=e,o=new n(a,i))}),a}})),bn=t(((e,t)=>{var n=B(),r=H(),i=an();t.exports=(e,t)=>{e=new r(e,t);let a=new n(`0.0.0`);if(e.test(a)||(a=new n(`0.0.0-0`),e.test(a)))return a;a=null;for(let t=0;t<e.set.length;++t){let r=e.set[t],o=null;r.forEach(e=>{let t=new n(e.semver.version);switch(e.operator){case`>`:t.prerelease.length===0?t.patch++:t.prerelease.push(0),t.raw=t.format();case``:case`>=`:(!o||i(t,o))&&(o=t);break;case`<`:case`<=`:break;default:throw Error(`Unexpected operation: ${e.operator}`)}}),o&&(!a||i(a,o))&&(a=o)}return a&&e.test(a)?a:null}})),xn=t(((e,t)=>{var n=H();t.exports=(e,t)=>{try{return new n(e,t).range||`*`}catch{return null}}})),Sn=t(((e,t)=>{var n=B(),r=hn(),{ANY:i}=r,a=H(),o=gn(),s=an(),c=on(),l=un(),u=ln();t.exports=(e,t,d,f)=>{e=new n(e,f),t=new a(t,f);let p,m,h,g,_;switch(d){case`>`:p=s,m=l,h=c,g=`>`,_=`>=`;break;case`<`:p=c,m=u,h=s,g=`<`,_=`<=`;break;default:throw TypeError(`Must provide a hilo val of "<" or ">"`)}if(o(e,t,f))return!1;for(let n=0;n<t.set.length;++n){let a=t.set[n],o=null,s=null;if(a.forEach(e=>{e.semver===i&&(e=new r(`>=0.0.0`)),o||=e,s||=e,p(e.semver,o.semver,f)?o=e:h(e.semver,s.semver,f)&&(s=e)}),o.operator===g||o.operator===_||(!s.operator||s.operator===g)&&m(e,s.semver)||s.operator===_&&h(e,s.semver))return!1}return!0}})),Cn=t(((e,t)=>{var n=Sn();t.exports=(e,t,r)=>n(e,t,`>`,r)})),wn=t(((e,t)=>{var n=Sn();t.exports=(e,t,r)=>n(e,t,`<`,r)})),Tn=t(((e,t)=>{var n=H();t.exports=(e,t,r)=>(e=new n(e,r),t=new n(t,r),e.intersects(t,r))})),En=t(((e,t)=>{var n=gn(),r=V();t.exports=(e,t,i)=>{let a=[],o=null,s=null,c=e.sort((e,t)=>r(e,t,i));for(let e of c)n(e,t,i)?(s=e,o||=e):(s&&a.push([o,s]),s=null,o=null);o&&a.push([o,null]);let l=[];for(let[e,t]of a)e===t?l.push(e):!t&&e===c[0]?l.push(`*`):t?e===c[0]?l.push(`<=${t}`):l.push(`${e} - ${t}`):l.push(`>=${e}`);let u=l.join(` || `),d=typeof t.raw==`string`?t.raw:String(t);return u.length<d.length?u:t}})),Dn=t(((e,t)=>{var n=H(),r=hn(),{ANY:i}=r,a=gn(),o=V(),s=(e,t,r={})=>{if(e===t)return!0;e=new n(e,r),t=new n(t,r);let i=!1;OUTER:for(let n of e.set){for(let e of t.set){let t=u(n,e,r);if(i||=t!==null,t)continue OUTER}if(i)return!1}return!0},c=[new r(`>=0.0.0-0`)],l=[new r(`>=0.0.0`)],u=(e,t,n)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===i){if(t.length===1&&t[0].semver===i)return!0;e=n.includePrerelease?c:l}if(t.length===1&&t[0].semver===i){if(n.includePrerelease)return!0;t=l}let r=new Set,s,u;for(let t of e)t.operator===`>`||t.operator===`>=`?s=d(s,t,n):t.operator===`<`||t.operator===`<=`?u=f(u,t,n):r.add(t.semver);if(r.size>1)return null;let p;if(s&&u&&(p=o(s.semver,u.semver,n),p>0||p===0&&(s.operator!==`>=`||u.operator!==`<=`)))return null;for(let e of r){if(s&&!a(e,String(s),n)||u&&!a(e,String(u),n))return null;for(let r of t)if(!a(e,String(r),n))return!1;return!0}let m,h,g,_,v=u&&!n.includePrerelease&&u.semver.prerelease.length?u.semver:!1,y=s&&!n.includePrerelease&&s.semver.prerelease.length?s.semver:!1;v&&v.prerelease.length===1&&u.operator===`<`&&v.prerelease[0]===0&&(v=!1);for(let e of t){if(_=_||e.operator===`>`||e.operator===`>=`,g=g||e.operator===`<`||e.operator===`<=`,s){if(y&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===y.major&&e.semver.minor===y.minor&&e.semver.patch===y.patch&&(y=!1),e.operator===`>`||e.operator===`>=`){if(m=d(s,e,n),m===e&&m!==s)return!1}else if(s.operator===`>=`&&!e.test(s.semver))return!1}if(u){if(v&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===v.major&&e.semver.minor===v.minor&&e.semver.patch===v.patch&&(v=!1),e.operator===`<`||e.operator===`<=`){if(h=f(u,e,n),h===e&&h!==u)return!1}else if(u.operator===`<=`&&!e.test(u.semver))return!1}if(!e.operator&&(u||s)&&p!==0)return!1}return!(s&&g&&!u&&p!==0||u&&_&&!s&&p!==0||y||v)},d=(e,t,n)=>{if(!e)return t;let r=o(e.semver,t.semver,n);return r>0?e:r<0||t.operator===`>`&&e.operator===`>=`?t:e},f=(e,t,n)=>{if(!e)return t;let r=o(e.semver,t.semver,n);return r<0?e:r>0||t.operator===`<`&&e.operator===`<=`?t:e};t.exports=s})),U=e(t(((e,t)=>{var n=Vt(),r=zt(),i=B(),a=Ut();t.exports={parse:Wt(),valid:Gt(),clean:Kt(),inc:qt(),diff:Jt(),major:Yt(),minor:Xt(),patch:Zt(),prerelease:Qt(),compare:V(),rcompare:$t(),compareLoose:en(),compareBuild:tn(),sort:nn(),rsort:rn(),gt:an(),lt:on(),eq:sn(),neq:cn(),gte:ln(),lte:un(),cmp:dn(),coerce:fn(),truncate:pn(),Comparator:hn(),Range:H(),satisfies:gn(),toComparators:_n(),maxSatisfying:vn(),minSatisfying:yn(),minVersion:bn(),validRange:xn(),outside:Sn(),gtr:Cn(),ltr:wn(),intersects:Tn(),simplifyRange:En(),subset:Dn(),SemVer:i,re:n.re,src:n.src,tokens:n.t,SEMVER_SPEC_VERSION:r.SEMVER_SPEC_VERSION,RELEASE_TYPES:r.RELEASE_TYPES,compareIdentifiers:a.compareIdentifiers,rcompareIdentifiers:a.rcompareIdentifiers}}))(),1),On=[`active`,`deprecated`,`archived`,`yanked`],kn=[`minimal`,`low`,`moderate`,`high`,`critical`,`mixed`],An=[`github-copilot`,`claude-code`,`cursor`,`openai-codex`],jn=[`supported`,`experimental`],Mn=e=>{let t=e.charCodeAt(0);return t>=97&&t<=122||t>=48&&t<=57||e===`-`},Nn=e=>{let t=``;for(let n of e.trim().toLowerCase()){if(Mn(n)){t+=n;continue}t+=`_${n.charCodeAt(0).toString(16)}_`}return t.length>0?t:`unknown`},Pn=(e,t)=>`${Nn(e)}--${Nn(t)}`,Fn=e=>typeof e==`object`&&!!e,In=e=>Array.isArray(e)&&e.every(e=>typeof e==`string`),Ln=e=>Number.isFinite(Date.parse(e)),Rn=e=>typeof e==`string`&&On.includes(e),zn=e=>typeof e==`string`&&kn.includes(e),Bn=e=>typeof e==`string`&&An.includes(e),Vn=e=>typeof e==`string`&&jn.includes(e),Hn=e=>!Fn(e)||!zn(e.band)?!1:e.estimatedCost===void 0||typeof e.estimatedCost==`number`&&Number.isInteger(e.estimatedCost)&&e.estimatedCost>=1&&e.estimatedCost<=10,Un=e=>{if(!Array.isArray(e)||e.length===0)return!1;let t=new Set;for(let n of e){if(!Fn(n)||!Bn(n.id)||!Vn(n.status)||t.has(n.id))return!1;t.add(n.id)}return!0},Wn=e=>typeof e.id==`string`&&typeof e.namespace==`string`&&typeof e.package==`string`&&typeof e.name==`string`&&typeof e.description==`string`&&typeof e.owner==`string`&&typeof e.latest==`string`&&typeof e.category==`string`,Gn=e=>!(!Fn(e)||!Wn(e)||!In(e.tags)||!Rn(e.status)||!Hn(e.estimateOverallCost)||e.quickstart!==void 0&&typeof e.quickstart!=`string`||e.installTargets!==void 0&&!Un(e.installTargets)),Kn=e=>Fn(e)?Object.entries(e).every(([e,t])=>typeof e==`string`&&typeof t==`string`):!1,qn=e=>!Fn(e)||typeof e.schemaVersion!=`string`||typeof e.updatedAt!=`string`||!Ln(e.updatedAt)||e.aliases!==void 0&&!Kn(e.aliases)?!1:Array.isArray(e.packages)&&e.packages.every(e=>Gn(e)),Jn=`v2.x`,Yn=`https://registry-proxy.maiconfz.workers.dev?ref=${Jn}`,Xn=`https://github.com/agents-repo/registry/tree/${Jn}`,Zn=`github.com`,Qn=`www.github.com`,$n=new Set([`blob`,`tree`]),er=`refs`,tr=new Set([`heads`,`tags`]),nr=e=>{if(e.length<4||!$n.has(e[2]))return Jn;let t=e.slice(3).filter(e=>e.length>0);if(t.length===0)return Jn;if(t.length>=3&&t[0]===er&&tr.has(t[1])){let e=t.slice(2).join(`/`).trim();return e.length>0?e:Jn}return t[0]},rr=e=>e.replace(/\.git$/i,``),ir=e=>{let t=e;for(;t.endsWith(`/`);)t=t.slice(0,-1);return t},ar=e=>encodeURIComponent(e.trim()),or=e=>{let t=e;for(;t.startsWith(`/`);)t=t.slice(1);return t},sr=e=>{let t=ir(e.trim());try{let e=new URL(t),n=e.pathname.split(`/`).filter(e=>e.length>0);return e.hostname!==Zn&&e.hostname!==Qn||n.length<2?t:`https://raw.githubusercontent.com/${n[0]}/${rr(n[1])}/${nr(n)}`}catch{return t}},cr=`raw.githubusercontent.com`,lr=(e,t)=>{try{let n=new URL(e),r=`/${or(t)}`;if(!n.pathname.endsWith(r))return null;let i=n.pathname.slice(0,-r.length).split(`/`).filter(Boolean);return n.hostname===cr&&i.length>=3?(i[i.length-1]=`{ref}`,`${n.origin}/${i.join(`/`)}${r}`):`${n.origin}${n.pathname}`}catch{return null}},ur=(e,t)=>{let n=lr(fr(sr(e),t),t);return n?{lookupKey:n,indexPath:t,sourceRef:null}:null},dr=(e,t)=>{try{let n=new URL(e),r=`/${or(t)}`;return n.pathname.endsWith(r)&&(n.pathname=n.pathname.slice(0,-r.length)||`/`),ir(n.toString())}catch{return``}},fr=(e,t)=>{let n=ir(e.trim()),r=or(t);try{let e=new URL(n);return e.pathname=`${ir(e.pathname)}/${r}`,e.toString()}catch{}return`${n}/${r}`},pr=(e,t,n,r)=>{let i=ar(n),a=ar(r);return[`packages`,ar(e),ar(t),`versions`,i,`${i}-${a}.zip`].join(`/`)},mr=(e,t,n,r,i)=>fr(e,pr(t,n,r,i)),hr=e=>e===Zn||e===Qn,gr=(e,t,n)=>{let r=t.trim(),i=n.trim();if(r.length===0||i.length===0)return null;try{let t=new URL(ir(e.trim())),n=t.pathname.split(`/`).filter(e=>e.length>0);return!hr(t.hostname)||n.length<2?null:`https://github.com/${n[0]}/${rr(n[1])}/tree/${nr(n)}/packages/${ar(r)}/${ar(i)}`}catch{return null}},_r=/^v?\d+\.x$/i,vr=`github.com`,yr=`www.github.com`,br=`raw.githubusercontent.com`,xr=new Set([`blob`,`tree`]),Sr=`refs`,Cr=new Set([`heads`,`tags`]),wr=e=>e.replace(/\.git$/i,``),Tr=e=>e===vr||e===yr,Er=e=>{if(e.length<4||!xr.has(e[2]))return null;let t=e.slice(3).filter(e=>e.length>0);if(t.length===0)return null;if(t.length>=3&&t[0]===Sr&&Cr.has(t[1])){let e=t.slice(2).join(`/`).trim();return e.length>0?e:null}return t[0]},Dr=e=>{let t=e.trim();if(!_r.test(t))return null;let n=/^v?(\d+)\.x$/i.exec(t);return n?{alias:t,major:Number.parseInt(n[1],10)}:null},Or=e=>{let t=e.trim();if(t.length===0)return null;try{let e=new URL(t),n=e.searchParams.get(`ref`)?.trim();if(n)return n;let r=e.pathname.split(`/`).filter(e=>e.length>0);if(e.hostname===br&&r.length>=3)return r[2];if(Tr(e.hostname)&&r.length>=2){let e=Er(r);if(e!==null)return e;if(r.length===2)return Jn}}catch{return null}return null},kr=e=>{let t=Or(e);return t?Dr(t):null},Ar=e=>{let t=U.default.valid(U.default.coerce(e,{loose:!0}));return t?U.default.major(t):null},jr=(e,t)=>{if(!e&&!t)return!0;if(!e||!t)return!1;if(e===t)return!0;let n=Dr(e);if(!n)return!1;let r=Dr(t);if(r)return r.major===n.major;let i=Ar(t);return i!==null&&i===n.major},Mr=(e,t)=>{let n=t.split(`/`).filter(e=>e.length>0);return`/${[...e.slice(0,2),...n,...e.slice(3)].join(`/`)}`},Nr=(e,t)=>{if(e.length<4||!xr.has(e[2]))return null;let n=e.slice(3).filter(e=>e.length>0);return n.length>=3&&n[0]===Sr&&Cr.has(n[1])?`/${[...e.slice(0,3),Sr,n[1],...t.split(`/`)].join(`/`)}`:`/${[...e.slice(0,3),t,...n.slice(1)].join(`/`)}`},Pr=(e,t)=>{let n=e.trim();try{let e=new URL(n);if(e.searchParams.has(`ref`))return e.searchParams.set(`ref`,t),e.toString();let r=e.pathname.split(`/`).filter(e=>e.length>0);if(Tr(e.hostname)&&r.length===2)return e.pathname=`/${r[0]}/${wr(r[1])}/tree/${t}`,e.toString();if(e.hostname===br&&r.length>=3)return e.pathname=Mr(r,t),e.toString();if(Tr(e.hostname)){let n=Nr(r,t);if(n)return e.pathname=n,e.toString()}}catch{return n}return n},Fr=e=>{let t=e.trim();if(t.length===0)return null;try{let e=new URL(t),n=e.pathname.split(`/`).filter(e=>e.length>0);return!Tr(e.hostname)||n.length<2?null:{owner:n[0],repo:wr(n[1])}}catch{return null}},Ir=(e,t)=>Fr(e)??Fr(t),Lr=`registry.catalog.cache.v1`,Rr=1,zr=1440*60*1e3,Br=5,Vr=new class{#e=new Map;get(e){let t=this.#e.get(e);if(t)return this.#e.delete(e),this.#e.set(e,t),t}set(e,t){for(this.#e.has(e)&&this.#e.delete(e),this.#e.set(e,t);this.#e.size>Br;){let e=this.#e.keys().next().value;if(e===void 0)break;this.#e.delete(e)}}values(){return this.#e.values()}clear(){this.#e.clear()}},Hr=e=>typeof e==`object`&&!!e,Ur=e=>Hr(e)?e.cacheVersion===Rr&&typeof e.cachedAt==`number`&&typeof e.indexUrl==`string`&&qn(e.catalog):!1,Wr=()=>{try{return globalThis.localStorage}catch{return null}},Gr=()=>{let e=Wr();if(!e)return[];try{let t=e.getItem(Lr);if(!t)return[];let n=JSON.parse(t);return Array.isArray(n)?n.filter(e=>Ur(e)):[]}catch{return[]}},Kr=()=>{let e=Wr();if(e)try{e.setItem(Lr,JSON.stringify(Array.from(Vr.values())))}catch{}},qr=e=>{let t=Vr.get(e);if(t)return t;let n=Gr();if(n.length===0)return null;for(let e of n)Vr.set(e.indexUrl,e);return Vr.get(e)??null},Jr=e=>Date.now()-e<=zr,Yr=()=>{let e=Gr();for(let t of e)Vr.get(t.indexUrl)||Vr.set(t.indexUrl,t);return Array.from(Vr.values())},Xr=(e,t)=>{if(lr(e.indexUrl,t.indexPath)!==t.lookupKey)return!1;let n=Or(e.indexUrl);return jr(t.sourceRef,n)},Zr=(e,t)=>Yr().filter(n=>Xr(n,e)&&(!t.freshOnly||Jr(n.cachedAt))).sort((e,t)=>t.cachedAt-e.cachedAt)[0]??null,Qr=e=>Zr(e,{freshOnly:!0}),$r=e=>Zr(e,{freshOnly:!1}),ei=e=>{let t=qr(e);return!t||!Jr(t.cachedAt)?null:t.catalog},ti=e=>qr(e),ni=e=>{let t=qr(e);t&&(Vr.set(e,{...t,cachedAt:Date.now()}),Kr())},ri=(e,t,n,r)=>{Vr.set(e,{cacheVersion:Rr,cachedAt:Date.now(),indexUrl:e,catalog:t,etag:n,lastModified:r}),Kr()},ii=`registry.source.baseUrlOverride`,ai=`registry.source.githubRepositoryUrlOverride`,oi=`github.com`,si=`www.github.com`,ci=()=>{try{return globalThis.localStorage}catch{return null}},li=e=>{try{let t=new URL(e);return t.protocol===`http:`||t.protocol===`https:`}catch{return!1}},ui=e=>e.trim(),di=e=>{let t=ui(e);return t.length===0||li(t)?null:`Enter a valid HTTP or HTTPS URL.`},fi=()=>{let e=ci();if(!e)return null;try{let t=e.getItem(ii);if(!t)return null;let n=ui(t);return n.length===0||!li(n)?null:n}catch{return null}},pi=e=>{let t=ci();if(t)try{t.setItem(ii,ui(e))}catch{}},mi=()=>{let e=ci();if(e)try{e.removeItem(ii)}catch{}},hi=e=>e===oi||e===si,gi=e=>e.trim(),_i=e=>{let t=gi(e);if(t.length===0)return null;if(!li(t))return`Enter a valid GitHub repository URL (https://github.com/owner/repo).`;try{if(!hi(new URL(t).hostname))return`Enter a valid GitHub repository URL (https://github.com/owner/repo).`}catch{return`Enter a valid GitHub repository URL (https://github.com/owner/repo).`}return null},vi=()=>{let e=ci();if(!e)return null;try{let t=e.getItem(ai);if(!t)return null;let n=gi(t);return n.length===0||_i(n)!==null?null:n}catch{return null}},yi=e=>{let t=ci();if(t)try{t.setItem(ai,gi(e))}catch{}},bi=()=>{let e=ci();if(e)try{e.removeItem(ai)}catch{}},xi=`registry.tags.cache.v1`,Si=3600*1e3,Ci=3,wi=new Set([`github.com`,`www.github.com`,`raw.githubusercontent.com`]),Ti=/^\/repos\/([^/]+)\/([^/]+)\/tags\/?$/,Ei=new Map,Di=new Map,Oi=(e,t)=>{let n=Di.get(e)??new Set;n.add(t),Di.set(e,n),t.catch(()=>void 0).finally(()=>{n.delete(t),n.size===0&&Di.delete(e)})},ki=async(e,t)=>{let n=Di.get(e);if(!n)return null;for(let e of n)if(e!==t)try{return await e}catch{continue}return null},Ai=(e,t)=>`${e}/${t}`,ji=()=>{try{return globalThis.localStorage}catch{return null}},Mi=e=>{try{let t=new URL(e);if(t.hostname!==`api.github.com`)return null;let n=Ti.exec(t.pathname);return n?Ai(n[1],n[2]):null}catch{return null}},Ni=(e,t)=>t&&t.trim().length>0?t:Mi(e),Pi=e=>{let t=ji();if(!t)return null;try{let n=t.getItem(xi);if(!n)return null;let r=JSON.parse(n);return r.cacheVersion!==Ci||r.repositoryKey!==e||!Array.isArray(r.tagNames)||Date.now()-r.cachedAt>Si?null:r.tagNames}catch{return null}},Fi=(e,t)=>{let n=ji();if(!n)return;let r={cacheVersion:Ci,cachedAt:Date.now(),repositoryKey:e,tagNames:t};try{n.setItem(xi,JSON.stringify(r))}catch{}},Ii=()=>{Ei.clear(),Di.clear();let e=ji();if(e)try{e.removeItem(xi)}catch{}},Li=(e,t)=>{let n=e.trim();if(n.length>0)try{let e=new URL(n);if(!wi.has(e.hostname))return`${e.origin}/tags`}catch{}let r=Ir(e,t);if(!r)throw Error(`Could not infer a GitHub repository for tag listing.`);return`https://api.github.com/repos/${r.owner}/${r.repo}/tags?per_page=100`},Ri=e=>{try{return new URL(e).hostname===`api.github.com`}catch{return!1}},zi=e=>{if(!e)return null;let t=e.split(`,`).map(e=>e.trim()).find(e=>e.endsWith(`rel="next"`));return t?/^<([^>]+)>/.exec(t)?.[1]??null:null},Bi=e=>e.map(e=>e.name).filter(e=>e.trim().length>0),Vi=async(e,t)=>{let n={};Ri(e)&&(n.Accept=`application/vnd.github+json`,n[`X-GitHub-Api-Version`]=`2022-11-28`);let r=await fetch(e,{signal:t,headers:n});if(!r.ok)throw Error(`Registry tags request failed (${r.status} ${r.statusText})`);return{tagNames:Bi(await r.json()),nextUrl:Ri(e)?zi(r.headers.get(`Link`)):null}},Hi=async(e,t,n)=>{let r=[],i=e;for(;i;){let e=await Vi(i,n);r.push(...e.tagNames),i=e.nextUrl}return Fi(t,r),r},Ui=e=>{let t=e.reason;return t instanceof Error?t:new DOMException(`Aborted`,`AbortError`)},Wi=(e,t)=>t?t.aborted?Promise.reject(Ui(t)):new Promise((n,r)=>{let i=()=>{r(Ui(t))};t.addEventListener(`abort`,i,{once:!0}),e.then(e=>{t.removeEventListener(`abort`,i),n(e)},e=>{t.removeEventListener(`abort`,i),r(e instanceof Error?e:Error(String(e)))})}):e,Gi=async(e,t={})=>{let n=Ni(e,t.repositoryKey);if(!n)throw Error(`Could not resolve a repository key for tag list caching (tags URL: ${e}). Pass repositoryKey (owner/repo) when the tags URL is not a GitHub API /repos/{owner}/{repo}/tags endpoint.`);if(!t.bypassCache){let e=Pi(n);if(e)return e}let r=Ei.get(e);if(r&&(!t.bypassCache||r.bypassCache))return Wi(r.promise,t.signal);let i=(()=>{let r=Hi(e,n,void 0).catch(async e=>{if(!t.bypassCache){let e=Pi(n);if(e)return e;let t=await ki(n,r);if(t)return t}throw e instanceof Error?e:Error(String(e))});Oi(n,r);let i=r.finally(()=>{Ei.get(e)?.promise===i&&Ei.delete(e)});return i})();return Ei.set(e,{promise:i,bypassCache:t.bypassCache===!0}),Wi(i,t.signal)},Ki=(e,t)=>{let n=e.map(e=>({tag:e,version:U.default.valid(U.default.coerce(e,{loose:!0}))})).filter(e=>e.version!==null&&U.default.prerelease(e.version)===null),r=n.map(e=>e.version),i=U.default.maxSatisfying(r,`${t}.x`);return i?n.find(e=>e.version===i)?.tag??null:null},qi=async(e,t,n,r={})=>{let i=Ai(e,t),a=Ki(await Gi(r.sourceUrl&&r.fallbackRepositoryUrl?Li(r.sourceUrl,r.fallbackRepositoryUrl):`https://api.github.com/repos/${e}/${t}/tags?per_page=100`,{...r,repositoryKey:i}),n);if(!a)throw Error(`No stable release tag found for major version line ${n}.x in ${e}/${t}`);return a},Ji=e=>({...e,indexUrl:fr(e.baseUrl,e.indexPath)}),Yi=()=>{let e={BASE_URL:`/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_GTM_ID:`GTM-57FJBZ7P`,VITE_SITE_URL:`https://preview.example.test`},t=e.VITE_REGISTRY_REPOSITORY_URL?.trim()||Yn,n=e.VITE_REGISTRY_BASE_URL?.trim()||t,r=e.VITE_REGISTRY_INDEX_PATH?.trim()||`packages/index.json`,i=e.VITE_REGISTRY_GITHUB_REPOSITORY_URL?.trim()||Xn;return Ji({sourceUrl:t,configuredBaseUrl:n,runtimeBaseUrlOverride:null,baseUrl:sr(n),indexPath:r,sourceMode:`configured`,configuredGithubRepositoryUrl:i,runtimeGithubRepositoryUrlOverride:null,githubRepositoryUrl:i,githubRepositorySourceMode:`configured`,baseUrlRefResolution:null,githubRepositoryRefResolution:null})},Xi=()=>{let e=Yi(),t=fi(),n=vi(),r=n??e.configuredGithubRepositoryUrl,i=n?`runtime-override`:`configured`;if(!t)return Ji({...e,runtimeGithubRepositoryUrlOverride:n,githubRepositoryUrl:r,githubRepositorySourceMode:i});let a=sr(t);return Ji({...e,runtimeBaseUrlOverride:t,baseUrl:a,sourceMode:`runtime-override`,runtimeGithubRepositoryUrlOverride:n,githubRepositoryUrl:r,githubRepositorySourceMode:i})},Zi=async(e,t,n,r)=>{let i=Ir(e,t);if(!i)throw Error(`Could not infer a GitHub repository for major-version line ref resolution.`);let a=await qi(i.owner,i.repo,n.major,{signal:r.signal,bypassCache:r.bypassTagCache,sourceUrl:e,fallbackRepositoryUrl:t});return{resolvedSourceUrl:Pr(e,a),resolution:{alias:n.alias,resolvedRef:a}}},Qi=async(e,t)=>{let n=e.runtimeBaseUrlOverride??e.configuredBaseUrl,r=kr(n);if(!r)return{baseUrlInput:n,baseUrlRefResolution:null};let i=await Zi(n,e.configuredGithubRepositoryUrl,r,t);return{baseUrlInput:i.resolvedSourceUrl,baseUrlRefResolution:i.resolution}},$i=async(e,t)=>{let n=e.githubRepositoryUrl,r=kr(n);if(!r)return{githubRepositoryUrl:n,githubRepositoryRefResolution:null};let i=await Zi(n,e.configuredGithubRepositoryUrl,r,t);return{githubRepositoryUrl:i.resolvedSourceUrl,githubRepositoryRefResolution:i.resolution}},ea=async(e={})=>{let t=Xi();try{return await $i(t,e)}catch{return{githubRepositoryUrl:t.githubRepositoryUrl,githubRepositoryRefResolution:null}}},ta=async(e={})=>{let t=Xi(),n=await Qi(t,e),r=sr(n.baseUrlInput);return Ji({...t,baseUrl:r,baseUrlRefResolution:n.baseUrlRefResolution})},na=async(e={})=>{let[t,n]=await Promise.all([ta(e),ea(e)]);return Ji({...t,githubRepositoryUrl:n.githubRepositoryUrl,githubRepositoryRefResolution:n.githubRepositoryRefResolution})},ra=async(e,t,n={})=>{let r=kr(e);if(!r)return null;try{return await Zi(e,t,r,n),null}catch(e){return e instanceof Error?e.message:`Unable to resolve major-version line ref.`}},ia=(e,t)=>({baseUrlRefResolution:e.baseUrlRefResolution,githubRepositoryUrl:t.githubRepositoryUrl,githubRepositoryRefResolution:t.githubRepositoryRefResolution}),aa=()=>({githubRepositoryUrl:Xi().githubRepositoryUrl,githubRepositoryRefResolution:null}),oa=()=>{let e=Xi(),t=e.runtimeBaseUrlOverride??e.configuredBaseUrl,n=ur(t,e.indexPath);return n?{...n,sourceRef:Or(t)}:null},sa=(e,t)=>{let n=kr(e.runtimeBaseUrlOverride??e.configuredBaseUrl);if(!n)return null;let r=Or(dr(t,e.indexPath));return r?{alias:n.alias,resolvedRef:r}:null},ca=e=>{let t=U.default.valid(U.default.coerce(e,{loose:!0}));return t?U.default.major(t):null},la=(e,t)=>e!==null&&t!==null&&e.owner===t.owner&&e.repo===t.repo,ua=(e,t)=>{let n=e.githubRepositoryUrl,r=kr(n);if(!r)return{githubRepositoryUrl:n,githubRepositoryRefResolution:null};let i=sa(e,t);if(!i||!la(Fr(n),Ir(e.runtimeBaseUrlOverride??e.configuredBaseUrl,e.configuredGithubRepositoryUrl)))return null;let a=ca(i.resolvedRef);return a===null||a!==r.major?null:{githubRepositoryUrl:Pr(n,i.resolvedRef),githubRepositoryRefResolution:{alias:r.alias,resolvedRef:i.resolvedRef}}},da=(e,t,n,r,i)=>({catalog:e.catalog,indexUrl:e.indexUrl,registryBaseUrl:dr(e.indexUrl,t.indexPath),cacheState:r,...i?{errorMessage:i}:{},...ia({...t,baseUrlRefResolution:sa(t,e.indexUrl)},n)}),fa=async(e={})=>{try{return await ea(e)}catch{return aa()}},pa=async(e,t,n={})=>ua(e,t)||fa(n),ma=e=>{try{let t=globalThis.location?.origin;return t?new URL(e).origin!==t:!1}catch{return!1}},ha=(e,t)=>{if(ma(e))return{};let n={};return t?.etag&&(n[`If-None-Match`]=t.etag),t?.lastModified&&(n[`If-Modified-Since`]=t.lastModified),n},ga=async(e,t,n)=>{let r=await fetch(e,{signal:t,cache:`no-store`,headers:{Accept:`application/json`,...n}});if(r.status===304)return{notModified:!0};if(!r.ok)throw Error(`Registry request failed (${r.status} ${r.statusText})`);let i=await r.json();if(!qn(i))throw Error(`Registry payload does not match expected catalog schema`);return{catalog:i,etag:r.headers.get(`ETag`)??void 0,lastModified:r.headers.get(`Last-Modified`)??void 0}},_a=()=>{let e=oa();return e?Qr(e):null},va=async(e,t,n=null)=>{let r=e instanceof Error?e.message:`Unknown registry source resolution error`,i=Xi(),a=await t;if(n)return da(n,i,a,`fresh`,r);let o=oa();if(o){let e=Qr(o);if(e)return da(e,i,a,`fresh`,r);let t=$r(o);if(t)return da(t,i,a,`fresh`,r)}return{catalog:null,indexUrl:``,registryBaseUrl:``,cacheState:`none`,errorMessage:r,...ia(i,a)}},ya=async(e,t)=>{let n=Xi();return da(e,n,await pa(n,e.indexUrl,{signal:t.signal,bypassTagCache:t.bypassTagCache}),`fresh`)},ba=async(e,t,n)=>{let{indexUrl:r,baseUrl:i}=e,a=n.forceSourceResolution?null:ei(r);if(a)return{catalog:a,indexUrl:r,registryBaseUrl:i,cacheState:`fresh`,...ia(e,await t)};let o=ti(r),s=ha(r,o),c;try{let[a,l]=await Promise.all([ga(r,n.signal,s),t]);c=l;let u=ia(e,c);return a.notModified?o?.catalog?(ni(r),{catalog:o.catalog,indexUrl:r,registryBaseUrl:i,cacheState:`fresh`,...u}):{catalog:null,indexUrl:r,registryBaseUrl:i,cacheState:`none`,errorMessage:`Registry returned 304 Not Modified without cached catalog state`,...u}:(ri(r,a.catalog,a.etag,a.lastModified),{catalog:a.catalog,indexUrl:r,registryBaseUrl:i,cacheState:`none`,...u})}catch(n){let a=n instanceof Error?n.message:`Unknown registry loading error`,s=ia(e,c??await t.catch(()=>aa()));return o?.catalog?{catalog:o.catalog,indexUrl:r,registryBaseUrl:i,cacheState:`stale-fallback`,errorMessage:a,...s}:{catalog:null,indexUrl:r,registryBaseUrl:i,cacheState:`none`,errorMessage:a,...s}}},xa=async(e={})=>{let t=_a();if(!e.forceSourceResolution&&t)return ya(t,e);let n=fa({signal:e.signal,bypassTagCache:e.bypassTagCache}),r;try{r=await ta({signal:e.signal,bypassTagCache:e.bypassTagCache})}catch(e){return va(e,n,t)}return ba(r,n,e)},Sa={"github-copilot":`GitHub Copilot`,"claude-code":`Claude Code`,cursor:`Cursor`,"openai-codex":`OpenAI Codex`},Ca=e=>Sa[e],wa=e=>{try{let t=new URL(e);return t.protocol===`http:`||t.protocol===`https:`}catch{return!1}},Ta=(e,t)=>t.trim()?(e.installTargets??[]).map(n=>({...n,label:Ca(n.id),href:mr(t,e.namespace,e.package,e.latest,n.id)})).filter(e=>wa(e.href)):[],Ea=({catalog:e,cacheState:t,isLoading:n,errorMessage:r})=>{if(n)return`loading`;if(!e)return`unavailable`;switch(t){case`fresh`:return r?`cached catalog after source resolution failure`:`fresh cache`;case`stale-fallback`:return`stale cache after refresh failure`;default:return r?`remote refresh failed`:`remote source`}},Da=({hasCatalog:e,cacheState:t,errorMessage:n})=>n?e?t===`stale-fallback`?{variant:`warning`,message:`Remote registry refresh failed. Displaying stale cached catalog while keeping the app available.`}:t===`fresh`?{variant:`warning`,message:`Registry source resolution failed. Displaying cached catalog while keeping the app available.`}:null:{variant:`danger`,message:`Unable to load the registry index. No catalog data is available.`}:null,Oa=({catalog:e,filteredCount:t,isLoading:n})=>e?`Showing ${t} of ${e.packages.length} packages`:n?`Loading registry catalog`:`No catalog data available`,ka=(0,j.createContext)(null);function Aa(){let e=(0,j.useContext)(ka);if(!e)throw Error(`useRegistryCatalog must be used within RegistryCatalogProvider`);return e}var ja=(e,t,n)=>{t.setCatalog(e.catalog),t.setCacheState(e.cacheState),t.setIndexUrl(e.indexUrl),t.setRegistryBaseUrl(e.registryBaseUrl),t.setGithubRepositoryUrl(e.githubRepositoryUrl??``),t.setErrorMessage(e.errorMessage??null);let r=Ea({catalog:e.catalog,cacheState:e.cacheState,isLoading:!1,errorMessage:e.errorMessage??null});n({summaryText:e.catalog?`Updated ${Rt(e.catalog.updatedAt)} with ${e.catalog.packages.length} packages from `:`Registry catalog unavailable from `,sourceUrl:e.indexUrl,statusTag:r,baseUrlRefResolution:e.baseUrlRefResolution??null,githubRepositoryRefResolution:e.githubRepositoryRefResolution??null}),e.errorMessage&&e.catalog&&console.warn(`Registry catalog loading fallback triggered:`,e.errorMessage)};function Ma({children:e,registrySettingsVersion:t,onCatalogStatusNoteChange:n}){let[r,i]=(0,j.useState)(null),[a,o]=(0,j.useState)(`none`),[s,c]=(0,j.useState)(``),[l,u]=(0,j.useState)(``),[d,f]=(0,j.useState)(``),[p,m]=(0,j.useState)(null),[h,g]=(0,j.useState)(!0);(0,j.useEffect)(()=>{let e=new AbortController,r=!0;return(async()=>{g(!0);try{let a=t>0,s=await xa({signal:e.signal,...a?{forceSourceResolution:!0,bypassTagCache:!0}:{}});if(!r)return;ja(s,{setCatalog:i,setCacheState:o,setIndexUrl:c,setRegistryBaseUrl:u,setGithubRepositoryUrl:f,setErrorMessage:m},n)}catch(e){if(!r)return;ja({catalog:null,indexUrl:``,registryBaseUrl:``,cacheState:`none`,errorMessage:e instanceof Error?e.message:`Unknown registry catalog loading error`},{setCatalog:i,setCacheState:o,setIndexUrl:c,setRegistryBaseUrl:u,setGithubRepositoryUrl:f,setErrorMessage:m},n),console.warn(`Registry catalog load failed:`,e)}finally{r&&g(!1)}})(),()=>{r=!1,e.abort()}},[n,t]);let _=(0,j.useMemo)(()=>({catalog:r,cacheState:a,indexUrl:s,registryBaseUrl:l,githubRepositoryUrl:d,errorMessage:p,isLoading:h}),[a,r,p,d,s,h,l]);return(0,z.jsx)(ka.Provider,{value:_,children:e})}function Na(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Pa(e){if(Array.isArray(e))return e}function Fa(e){if(Array.isArray(e))return Na(e)}function Ia(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function La(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,qa(r.key),r)}}function Ra(e,t,n){return t&&La(e.prototype,t),n&&La(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function za(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Ya(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function W(e,t,n){return(t=qa(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ba(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Va(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Ha(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ua(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Wa(Object(n),!0).forEach(function(t){W(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wa(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ga(e,t){return Pa(e)||Va(e,t)||Ya(e,t)||Ha()}function K(e){return Fa(e)||Ba(e)||Ya(e)||Ua()}function Ka(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function qa(e){var t=Ka(e,`string`);return typeof t==`symbol`?t:t+``}function Ja(e){"@babel/helpers - typeof";return Ja=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ja(e)}function Ya(e,t){if(e){if(typeof e==`string`)return Na(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Na(e,t):void 0}}var Xa=function(){},Za={},Qa={},$a=null,eo={mark:Xa,measure:Xa};try{typeof window<`u`&&(Za=window),typeof document<`u`&&(Qa=document),typeof MutationObserver<`u`&&($a=MutationObserver),typeof performance<`u`&&(eo=performance)}catch{}var to=(Za.navigator||{}).userAgent,no=to===void 0?``:to,ro=Za,q=Qa,io=$a,ao=eo;ro.document;var oo=!!q.documentElement&&!!q.head&&typeof q.addEventListener==`function`&&typeof q.createElement==`function`,so=~no.indexOf(`MSIE`)||~no.indexOf(`Trident/`),co,lo=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,uo=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,fo={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},po={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},mo=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],J=`classic`,ho=`duotone`,go=`sharp`,_o=`sharp-duotone`,vo=`chisel`,yo=`etch`,bo=`graphite`,xo=`jelly`,So=`jelly-duo`,Co=`jelly-fill`,wo=`mosaic`,To=`notdog`,Eo=`notdog-duo`,Do=`pixel`,Oo=`slab`,ko=`slab-duo`,Ao=`slab-press`,jo=`slab-press-duo`,Mo=`thumbprint`,No=`utility`,Po=`utility-duo`,Fo=`utility-fill`,Io=`vellum`,Lo=`whiteboard`,Ro=`Classic`,zo=`Duotone`,Bo=`Sharp`,Vo=`Sharp Duotone`,Ho=`Chisel`,Uo=`Etch`,Wo=`Graphite`,Go=`Jelly`,Ko=`Jelly Duo`,qo=`Jelly Fill`,Jo=`Mosaic`,Yo=`Notdog`,Xo=`Notdog Duo`,Zo=`Pixel`,Qo=`Slab`,$o=`Slab Duo`,es=`Slab Press`,ts=`Slab Press Duo`,ns=`Thumbprint`,rs=`Utility`,is=`Utility Duo`,as=`Utility Fill`,os=`Vellum`,ss=`Whiteboard`,cs=[J,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo];co={},W(W(W(W(W(W(W(W(W(W(co,J,Ro),ho,zo),go,Bo),_o,Vo),vo,Ho),yo,Uo),bo,Wo),xo,Go),So,Ko),Co,qo),W(W(W(W(W(W(W(W(W(W(co,wo,Jo),To,Yo),Eo,Xo),Do,Zo),Oo,Qo),ko,$o),Ao,es),jo,ts),Mo,ns),No,rs),W(W(W(W(co,Po,is),Fo,as),Io,os),Lo,ss);var ls={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},us={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},ds=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),fs={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},ps=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ms={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},hs=[`kit`];W(W({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var gs={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},_s={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},vs={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},ys={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},bs,xs={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ss=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];bs={},W(W(W(W(W(W(W(W(W(W(bs,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),W(W(W(W(W(W(W(W(W(W(bs,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),W(W(W(W(bs,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),W(W({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Cs={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},ws={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Ts={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Es=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Ss,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Ds=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Os=[1,2,3,4,5,6,7,8,9,10],ks=Os.concat([11,12,13,14,15,16,17,18,19,20]),As=[].concat(K(Object.keys(ws)),Ds,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,xs.GROUP,xs.SWAP_OPACITY,xs.PRIMARY,xs.SECONDARY],Os.map(function(e){return`${e}x`}),ks.map(function(e){return`w-${e}`})),js={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},Ms=`___FONT_AWESOME___`,Ns=16,Ps=`fa`,Fs=`svg-inline--fa`,Is=`data-fa-i2svg`,Ls=`data-fa-pseudo-element`,Rs=`data-fa-pseudo-element-pending`,zs=`data-prefix`,Bs=`data-icon`,Vs=`fontawesome-i2svg`,Hs=`async`,Us=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ws=[`::before`,`::after`,`:before`,`:after`],Gs=function(){try{return!0}catch{return!1}}();function Ks(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[J]}})}var qs=G({},fo);qs[J]=G(G(G(G({},{"fa-duotone":`duotone`}),fo[J]),ms.kit),ms[`kit-duotone`]);var Js=Ks(qs),Ys=G({},fs);Ys[J]=G(G(G(G({},{duotone:`fad`}),Ys[J]),ys.kit),ys[`kit-duotone`]);var Xs=Ks(Ys),Zs=G({},Ts);Zs[J]=G(G({},Zs[J]),vs.kit);var Qs=Ks(Zs),$s=G({},Cs);$s[J]=G(G({},$s[J]),gs.kit),Ks($s);var ec=lo,tc=`fa-layers-text`,nc=uo;Ks(G({},ls));var rc=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],ic=po,ac=[].concat(K(hs),K(As)),oc=ro.FontAwesomeConfig||{};function sc(e){var t=q.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function cc(e){return e===``?!0:e===`false`?!1:e===`true`||e}q&&typeof q.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Ga(e,2),n=t[0],r=t[1],i=cc(sc(n));i!=null&&(oc[r]=i)});var lc={styleDefault:`solid`,familyDefault:J,cssPrefix:Ps,replacementClass:Fs,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};oc.familyPrefix&&(oc.cssPrefix=oc.familyPrefix);var uc=G(G({},lc),oc);uc.autoReplaceSvg||(uc.observeMutations=!1);var Y={};Object.keys(lc).forEach(function(e){Object.defineProperty(Y,e,{enumerable:!0,set:function(t){uc[e]=t,dc.forEach(function(e){return e(Y)})},get:function(){return uc[e]}})}),Object.defineProperty(Y,"familyPrefix",{enumerable:!0,set:function(e){uc.cssPrefix=e,dc.forEach(function(e){return e(Y)})},get:function(){return uc.cssPrefix}}),ro.FontAwesomeConfig=Y;var dc=[];function fc(e){return dc.push(e),function(){dc.splice(dc.indexOf(e),1)}}var pc=Ns,mc={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hc(e){if(!(!e||!oo)){var t=q.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return q.head.insertBefore(t,r),e}}var gc=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function _c(){for(var e=12,t=``;e-->0;)t+=gc[Math.random()*62|0];return t}function vc(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function yc(e){return e.classList?vc(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function bc(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function xc(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${bc(e[n])}" `},``).trim()}function Sc(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Cc(e){return e.size!==mc.size||e.x!==mc.x||e.y!==mc.y||e.rotate!==mc.rotate||e.flipX||e.flipY}function wc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Tc(e){var t=e.transform,n=e.width,r=n===void 0?Ns:n,i=e.height,a=i===void 0?Ns:i,o=e.startCentered,s=o!==void 0&&o,c=``;return s&&so?c+=`translate(${t.x/pc-r/2}em, ${t.y/pc-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/pc}em), calc(-50% + ${t.y/pc}em)) `:c+=`translate(${t.x/pc}em, ${t.y/pc}em) `,c+=`scale(${t.size/pc*(t.flipX?-1:1)}, ${t.size/pc*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Ec=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Dc(){var e=Ps,t=Fs,n=Y.cssPrefix,r=Y.replacementClass,i=Ec;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Oc=!1;function kc(){Y.autoAddCss&&!Oc&&(hc(Dc()),Oc=!0)}var Ac={mixout:function(){return{dom:{css:Dc,insertCss:kc}}},hooks:function(){return{beforeDOMElementCreation:function(){kc()},beforeI2svg:function(){kc()}}}},jc=ro||{};jc[Ms]||(jc[Ms]={}),jc[Ms].styles||(jc[Ms].styles={}),jc[Ms].hooks||(jc[Ms].hooks={}),jc[Ms].shims||(jc[Ms].shims=[]);var X=jc[Ms],Mc=[],Nc=function(){q.removeEventListener(`DOMContentLoaded`,Nc),Pc=1,Mc.map(function(e){return e()})},Pc=!1;oo&&(Pc=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Pc||q.addEventListener(`DOMContentLoaded`,Nc));function Fc(e){oo&&(Pc?setTimeout(e,0):Mc.push(e))}function Ic(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?bc(e):`<${t} ${xc(r)}>${a.map(Ic).join(``)}</${t}>`}function Lc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Rc=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},zc=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Rc(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Bc(e){return K(e).length===1?e.codePointAt(0).toString(16):null}function Vc(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Hc(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=Vc(t);typeof X.hooks.addPack==`function`&&!r?X.hooks.addPack(e,Vc(t)):X.styles[e]=G(G({},X.styles[e]||{}),i),e===`fas`&&Hc(`fa`,t)}var Uc=X.styles,Wc=X.shims,Gc=Object.keys(Qs),Kc=Gc.reduce(function(e,t){return e[t]=Object.keys(Qs[t]),e},{}),qc=null,Jc={},Yc={},Xc={},Zc={},Qc={};function $c(e){return~ac.indexOf(e)}function el(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!$c(i)?i:null}var tl=function(){var e=function(e){return zc(Uc,function(t,n,r){return t[r]=zc(n,e,{}),t},{})};Jc=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Yc=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Qc=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Uc||Y.autoFetchSvg,n=zc(Wc,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Xc=n.names,Zc=n.unicodes,qc=ul(Y.styleDefault,{family:Y.familyDefault})};fc(function(e){qc=ul(e.styleDefault,{family:Y.familyDefault})}),tl();function nl(e,t){return(Jc[e]||{})[t]}function rl(e,t){return(Yc[e]||{})[t]}function il(e,t){return(Qc[e]||{})[t]}function al(e){return Xc[e]||{prefix:null,iconName:null}}function ol(e){var t=Zc[e],n=nl(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function sl(){return qc}var cl=function(){return{prefix:null,iconName:null,rest:[]}};function ll(e){var t=J,n=Gc.reduce(function(e,t){return e[t]=`${Y.cssPrefix}-${t}`,e},{});return cs.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Kc[r].includes(e)}))&&(t=r)}),t}function ul(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?J:t,r=Js[n][e];if(n===ho&&!e)return`fad`;var i=Xs[n][e]||Xs[n][r],a=e in X.styles?e:null;return i||a||null}function dl(e){var t=[],n=null;return e.forEach(function(e){var r=el(Y.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function fl(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var pl=Es.concat(ps);function ml(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=fl(e.filter(function(e){return pl.includes(e)})),a=fl(e.filter(function(e){return!pl.includes(e)})),o=Ga(i.filter(function(e){return r=e,!mo.includes(e)}),1)[0],s=o===void 0?null:o,c=ll(i),l=G(G({},dl(a)),{},{prefix:ul(s,{family:c})});return G(G(G({},l),vl({values:e,family:c,styles:Uc,config:Y,canonical:l,givenPrefix:r})),hl(n,r,l))}function hl(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?al(i):{},o=il(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Uc.far&&Uc.fas&&!Y.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var gl=cs.filter(function(e){return e!==J||e!==ho}),_l=Object.keys(Ts).filter(function(e){return e!==J}).map(function(e){return Object.keys(Ts[e])}).flat();function vl(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===ho,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&gl.includes(n)&&(Object.keys(s).find(function(e){return _l.includes(e)})||l.autoFetchSvg)&&(r.prefix=ds.get(n).defaultShortPrefixId,r.iconName=il(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=sl()||`fas`),r}var yl=function(){function e(){Ia(this,e),this.definitions={}}return Ra(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=G(G({},e.definitions[n]||{}),t[n]),Hc(n,t[n]);var r=Qs[J][n];r&&Hc(r,t[n]),tl()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),bl=[],xl={},Sl={},Cl=Object.keys(Sl);function wl(e,t){var n=t.mixoutsTo;return bl=e,xl={},Object.keys(Sl).forEach(function(e){Cl.indexOf(e)===-1&&delete Sl[e]}),bl.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Ja(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){xl[e]||(xl[e]=[]),xl[e].push(r[e])})}e.provides&&e.provides(Sl)}),n}function Tl(e,t){var n=[...arguments].slice(2);return(xl[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function El(e){var t=[...arguments].slice(1);(xl[e]||[]).forEach(function(e){e.apply(null,t)})}function Dl(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Sl[e]?Sl[e].apply(null,t):void 0}function Ol(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||sl();if(t)return t=il(n,t)||t,Lc(kl.definitions,n,t)||Lc(X.styles,n,t)}var kl=new yl,Z={noAuto:function(){Y.autoReplaceSvg=!1,Y.observeMutations=!1,El(`noAuto`)},config:Y,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return oo?(El(`beforeI2svg`,e),Dl(`pseudoElements2svg`,e),Dl(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;Y.autoReplaceSvg===!1&&(Y.autoReplaceSvg=!0),Y.observeMutations=!0,Fc(function(){Al({autoReplaceSvgRoot:t}),El(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Ja(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:il(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=ul(e[0]);return{prefix:n,iconName:il(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${Y.cssPrefix}-`)>-1||e.match(ec))){var r=ml(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||sl(),iconName:il(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=sl();return{prefix:i,iconName:il(i,e)||e}}}},library:kl,findIconDefinition:Ol,toHtml:Ic},Al=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?q:e;(Object.keys(X.styles).length>0||Y.autoFetchSvg)&&oo&&Y.autoReplaceSvg&&Z.dom.i2svg({node:t})};function jl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Ic(e)})}}),Object.defineProperty(e,"node",{get:function(){if(oo){var t=q.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Ml(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Cc(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Sc(G(G({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Nl(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${Y.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:G(G({},i),{},{id:o}),children:r}]}]}function Pl(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Fl(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[Y.replacementClass,a?`${Y.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:G(G({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Pl(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Is]=``);var _=G(G({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:G({},l.styles)}),v=r.found&&n.found?Dl(`generateAbstractMask`,_)||{children:[],attributes:{}}:Dl(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Nl(_):Ml(_)}function Il(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=G(G({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Is]=``);var l=G({},a.styles);Cc(i)&&(l.transform=Tc({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Sc(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Ll(e){var t=e.content,n=e.extra,r=G(G({},n.attributes),{},{class:n.classes.join(` `)}),i=Sc(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Rl=X.styles;function zl(e){var t=e[0],n=e[1],r=Ga(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${Y.cssPrefix}-${ic.GROUP}`},children:[{tag:`path`,attributes:{class:`${Y.cssPrefix}-${ic.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${Y.cssPrefix}-${ic.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Bl={found:!1,width:512,height:512};function Vl(e,t){!Gs&&!Y.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Hl(e,t){var n=t;return t===`fa`&&Y.styleDefault!==null&&(t=sl()),new Promise(function(r,i){if(n===`fa`){var a=al(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Rl[t]&&Rl[t][e]){var o=Rl[t][e];return r(zl(o))}Vl(e,t),r(G(G({},Bl),{},{icon:Y.showMissingIcons&&e&&Dl(`missingIconAbstract`)||{}}))})}var Ul=function(){},Wl=Y.measurePerformance&&ao&&ao.mark&&ao.measure?ao:{mark:Ul,measure:Ul},Gl=`FA "7.3.0"`,Kl=function(e){return Wl.mark(`${Gl} ${e} begins`),function(){return ql(e)}},ql=function(e){Wl.mark(`${Gl} ${e} ends`),Wl.measure(`${Gl} ${e}`,`${Gl} ${e} begins`,`${Gl} ${e} ends`)},Jl={begin:Kl,end:ql},Yl=function(){};function Xl(e){return typeof(e.getAttribute?e.getAttribute(Is):null)==`string`}function Zl(e){var t=e.getAttribute?e.getAttribute(zs):null,n=e.getAttribute?e.getAttribute(Bs):null;return t&&n}function Ql(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Y.replacementClass)}function $l(){return Y.autoReplaceSvg===!0?iu.replace:iu[Y.autoReplaceSvg]||iu.replace}function eu(e){return q.createElementNS(`http://www.w3.org/2000/svg`,e)}function tu(e){return q.createElement(e)}function nu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?eu:tu:t;if(typeof e==`string`)return q.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(nu(e,{ceFn:n}))}),r}function ru(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var iu={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(nu(e),t)}),t.getAttribute(Is)===null&&Y.keepOriginalSource){var n=q.createComment(ru(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~yc(t).indexOf(Y.replacementClass))return iu.replace(e);var r=RegExp(`${Y.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===Y.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Ic(e)}).join(`
`);t.setAttribute(Is,``),t.innerHTML=a}};function au(e){e()}function ou(e,t){var n=typeof t==`function`?t:Yl;if(e.length===0)n();else{var r=au;Y.mutateApproach===Hs&&(r=ro.requestAnimationFrame||au),r(function(){var t=$l(),r=Jl.begin(`mutate`);e.map(t),r(),n()})}}var su=!1;function cu(){su=!0}function lu(){su=!1}var uu=null;function du(e){if(io&&Y.observeMutations){var t=e.treeCallback,n=t===void 0?Yl:t,r=e.nodeCallback,i=r===void 0?Yl:r,a=e.pseudoElementsCallback,o=a===void 0?Yl:a,s=e.observeMutationsRoot,c=s===void 0?q:s;uu=new io(function(e){if(!su){var t=sl();vc(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Xl(e.addedNodes[0])&&(Y.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&Y.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Xl(e.target)&&~rc.indexOf(e.attributeName))if(e.attributeName===`class`&&Zl(e.target)){var r=ml(yc(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(zs,a||t),s&&e.target.setAttribute(Bs,s)}else Ql(e.target)&&i(e.target)})}}),oo&&uu.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fu(){uu&&uu.disconnect()}function pu(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function mu(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=ml(yc(e));return i.prefix||=sl(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=rl(i.prefix,e.innerText)||nl(i.prefix,Bc(e.innerText))),!i.iconName&&Y.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function hu(e){return vc(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function gu(){return{iconName:null,prefix:null,transform:mc,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _u(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=mu(e),r=n.iconName,i=n.prefix,a=n.rest,o=hu(e),s=Tl(`parseNodeAttributes`,{},e);return G({iconName:r,prefix:i,transform:mc,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?pu(e):[],attributes:o}},s)}var vu=X.styles;function yu(e){var t=Y.autoReplaceSvg===`nest`?_u(e,{styleParser:!1}):_u(e);return~t.extra.classes.indexOf(tc)?Dl(`generateLayersText`,e,t):Dl(`generateSvgReplacementMutation`,e,t)}function bu(){return[].concat(K(ps),K(Es))}function xu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!oo)return Promise.resolve();var n=q.documentElement.classList,r=function(e){return n.add(`${Vs}-${e}`)},i=function(e){return n.remove(`${Vs}-${e}`)},a=Y.autoFetchSvg?bu():mo.concat(Object.keys(vu));a.includes(`fa`)||a.push(`fa`);var o=[`.${tc}:not([${Is}])`].concat(a.map(function(e){return`.${e}:not([${Is}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=vc(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Jl.begin(`onTree`),l=s.reduce(function(e,t){try{var n=yu(t);n&&e.push(n)}catch(e){Gs||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){ou(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Su(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yu(e).then(function(e){e&&ou([e],t)})}function Cu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ol(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Ol(i||{}),e(r,G(G({},n),{},{mask:i}))}}var wu=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?mc:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return jl(G({type:`icon`},e),function(){return El(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Fl({icons:{main:zl(v),mask:s?zl(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:G(G({},mc),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Tu={mixout:function(){return{icon:Cu(wu)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=xu,e.nodeCallback=Su,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?q:t,r=e.callback;return xu(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Hl(n,r),o.iconName?Hl(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Ga(o,2),u=l[0],d=l[1];t([e,Fl({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Sc(a);o.length>0&&(n.style=o);var s;return Cc(i)&&(s=Dl(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Eu={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return jl({type:`layer`},function(){El(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${Y.cssPrefix}-layers`].concat(K(r)).join(` `)},children:n}]})}}}},Du={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return jl({type:`counter`,content:e},function(){return El(`beforeDOMElementCreation`,{content:e,params:t}),Ll({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${Y.cssPrefix}-layers-counter`].concat(K(a))}})})}}}},Ou={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?mc:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return jl({type:`text`,content:e},function(){return El(`beforeDOMElementCreation`,{content:e,params:t}),Il({content:e,transform:G(G({},mc),r),extra:{attributes:s,styles:l,classes:[`${Y.cssPrefix}-layers-text`].concat(K(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(so){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Il({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},ku=RegExp(`"`,`ug`),Au=[1105920,1112319],ju=G(G(G(G({},{FontAwesome:{normal:`fas`,400:`fas`}}),us),js),_s),Mu=Object.keys(ju).reduce(function(e,t){return e[t.toLowerCase()]=ju[t],e},{}),Nu=Object.keys(Mu).reduce(function(e,t){var n=Mu[t];return e[t]=n[900]||K(Object.entries(n))[0][1],e},{});function Pu(e){return Bc(K(e.replace(ku,``))[0]||``)}function Fu(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(ku,``),r=n.codePointAt(0),i=r>=Au[0]&&r<=Au[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Iu(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Mu[n]||{})[i]||Nu[n]}function Lu(e,t){var n=`${Rs}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=vc(e.children).filter(function(e){return e.getAttribute(Ls)===t})[0],o=ro.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(nc),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Iu(s,l),p=Pu(d),m=c[0].startsWith(`FontAwesome`),h=Fu(o),g=nl(f,p),_=g;if(m){var v=ol(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(zs)!==f||a.getAttribute(Bs)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=gu(),b=y.extra;b.attributes[Ls]=t,Hl(g,f).then(function(i){var a=Fl(G(G({},y),{},{icons:{main:i,mask:cl()},prefix:f,iconName:_,extra:b,watchable:!0})),o=q.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Ic(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Ru(e){return Promise.all([Lu(e,`::before`),Lu(e,`::after`)])}function zu(e){return e.parentNode!==document.head&&!~Us.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ls)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Bu=function(e){return!!e&&Ws.some(function(t){return e.includes(t)})},Vu=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=za(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Bu(a)){var o=Ws.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Hu(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(oo){var n;if(t)n=e;else if(Y.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=za(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=za(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=za(Vu(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){Y.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=vc(n).filter(zu).map(Ru),i=Jl.begin(`searchPseudoElements`);cu(),Promise.all(r).then(function(){i(),lu(),e()}).catch(function(){i(),lu(),t()})})}}var Uu={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Hu,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?q:t;Y.searchPseudoElements&&Hu(n)}}},Wu=!1,Gu={mixout:function(){return{dom:{unwatch:function(){cu(),Wu=!0}}}},hooks:function(){return{bootstrap:function(){du(Tl(`mutationObserverCallbacks`,{}))},noAuto:function(){fu()},watch:function(e){var t=e.observeMutationsRoot;Wu?lu():du(Tl(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Ku=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},qu={mixout:function(){return{parse:{transform:function(e){return Ku(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Ku(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:G({},a.outer),children:[{tag:`g`,attributes:G({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:G(G({},t.icon.attributes),a.path)}]}]}}}},Ju={x:0,y:0,width:`100%`,height:`100%`};function Yu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Xu(e){return e.tag===`g`?e.children:[e]}wl([Ac,Tu,Eu,Du,Ou,Uu,Gu,qu,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?ml(n.split(` `).map(function(e){return e.trim()})):cl();return r.prefix||=sl(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=wc({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:G(G({},Ju),{},{fill:`white`})},p=c.children?{children:c.children.map(Yu)}:{},m={tag:`g`,attributes:G({},d.inner),children:[Yu(G({tag:c.tag,attributes:G(G({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:G({},d.outer),children:[m]},g=`mask-${a||_c()}`,_=`clip-${a||_c()}`,v={tag:`mask`,attributes:G(G({},Ju),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Xu(u)},v]};return t.push(y,{tag:`rect`,attributes:G({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ju)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;ro.matchMedia&&(t=ro.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:G(G({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=G(G({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:G(G({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:G(G({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:G(G({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:G(G({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:G(G({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:G(G({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:G(G({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Z}),Z.noAuto;var Zu=Z.config;Z.library,Z.dom;var Qu=Z.parse;Z.findIconDefinition,Z.toHtml;var $u=Z.icon;Z.layer,Z.text,Z.counter;function ed(e){return e-=0,e===e}function td(e){return ed(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var nd=(e,t)=>j.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function rd(e){return e.charAt(0).toUpperCase()+e.slice(1)}var id=new Map,ad=1e3;function od(e){if(id.has(e))return id.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=td(n);t[e.startsWith(`webkit`)?rd(e):e]=r}}}n=a+1}if(id.size===ad){let e=id.keys().next().value;e&&id.delete(e)}return id.set(e,t),t}function sd(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),sd(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=od(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[td(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(nd)))}return e(t.tag,{...a,...u},...r)}var cd=sd.bind(null,j.createElement),ld=(e,t)=>{let n=(0,j.useId)();return e||(t?n:void 0)},ud=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var dd=`searchPseudoElementsFullScan`in Zu&&typeof Zu.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,fd=Number.parseInt(dd)>=7,pd=()=>fd,md=`fa`,Q={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},hd={left:`fa-pull-left`,right:`fa-pull-right`},gd={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},_d={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},vd={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},yd={default:`fa-layers`};function bd(e){let t=Zu.cssPrefix||Zu.familyPrefix||md;return t===md?e:e.replace(new RegExp(String.raw`(?<=^|\s)${md}-`,`g`),`${t}-`)}function xd(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,flip360:b,buzz:x,float:S,jello:C,spinSnap:w,spinSnap4:T,spinSnap8:E,swing:D,wag:O,className:k}=e,A=[];return k&&A.push(...k.split(` `)),t&&A.push(Q.beat),n&&A.push(Q.fade),r&&A.push(Q.beatFade),i&&A.push(Q.bounce),a&&A.push(Q.shake),o&&A.push(Q.spin),c&&A.push(Q.spinReverse),s&&A.push(Q.spinPulse),l&&A.push(Q.pulse),u&&A.push(vd.fixedWidth),d&&A.push(vd.inverse),f&&A.push(vd.border),p===!0&&A.push(vd.flip),(p===`horizontal`||p===`both`)&&A.push(vd.flipHorizontal),(p===`vertical`||p===`both`)&&A.push(vd.flipVertical),m!=null&&A.push(_d[m]),h!=null&&h!==0&&A.push(gd[h]),g!=null&&A.push(hd[g]),_&&A.push(vd.swapOpacity),pd()?(v&&A.push(vd.rotateBy),y&&A.push(vd.widthAuto),b&&A.push(Q.flip360),x&&A.push(Q.buzz),S&&A.push(Q.float),C&&A.push(Q.jello),w&&A.push(Q.spinSnap),T&&A.push(Q.spinSnap4),E&&A.push(Q.spinSnap8),D&&A.push(Q.swing),O&&A.push(Q.wag),(Zu.cssPrefix||Zu.familyPrefix||md)===md?A:A.map(bd)):A}var Sd=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function Cd(e){if(e)return Sd(e)?e:Qu.icon(e)}function wd(e){return Object.keys(e)}var Td=new ud(`FontAwesomeIcon`),Ed={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},Dd=new Set(Object.keys(Ed)),$=j.forwardRef((e,t)=>{let n={...Ed,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=ld(c,!!i),d=ld(s,!!o),f=Cd(r);if(!f)return Td.error(`Icon lookup is undefined`,r),null;let p=xd(n),m=typeof l==`string`?Qu.transform(l):l,h=Cd(i),g=$u(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return Td.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of wd(n))Dd.has(e)||(v[e]=n[e]);return cd(_[0],v)});$.displayName=`FontAwesomeIcon`,`${yd.default}${vd.fixedWidth}`;var Od={prefix:`fas`,iconName:`scale-balanced`,icon:[640,512,[9878,`balance-scale`],`f24e`,`M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3l0 294.7 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288L584.4 320 512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1-10.8 44.8-63.1 78.9-126 78.9zM126.8 195.8L54.4 320 199.3 320 126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1-10.8 44.8-63.1 78.9-126 78.9S11.7 382 .9 337.1z`]},kd={prefix:`fas`,iconName:`filter`,icon:[512,512,[],`f0b0`,`M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z`]},Ad={prefix:`fas`,iconName:`envelope`,icon:[512,512,[128386,9993,61443],`f0e0`,`M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z`]},jd={prefix:`fas`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`]},Md={prefix:`fas`,iconName:`eye`,icon:[576,512,[128065],`f06e`,`M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`]},Nd={prefix:`fas`,iconName:`circle-half-stroke`,icon:[512,512,[9680,`adjust`],`f042`,`M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z`]},Pd={prefix:`fas`,iconName:`clock`,icon:[512,512,[128339,`clock-four`],`f017`,`M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`]},Fd={prefix:`fas`,iconName:`heart`,icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],`f004`,`M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z`]},Id={prefix:`fas`,iconName:`user-shield`,icon:[576,512,[],`f505`,`M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l251.5 0C261 469.4 240 414.5 240 356.4l0-31.1c0-7.3 1-14.5 2.9-21.3l-48.6 0zm251 184.5l-13.3 6.3 0-188.1 96 32 0 19.6c0 55.8-32.2 106.5-82.7 130.3zM421.9 259.5l-112 37.3c-13.1 4.4-21.9 16.6-21.9 30.4l0 31.1c0 74.4 43 142.1 110.2 173.7l18.5 8.7c4.8 2.2 10 3.4 15.2 3.4s10.5-1.2 15.2-3.4l18.5-8.7C533 500.3 576 432.6 576 358.2l0-31.1c0-13.8-8.8-26-21.9-30.4l-112-37.3c-6.6-2.2-13.7-2.2-20.2 0z`]},Ld={prefix:`fas`,iconName:`sun`,icon:[576,512,[9728],`f185`,`M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z`]},Rd={prefix:`fas`,iconName:`gear`,icon:[512,512,[9881,`cog`],`f013`,`M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z`]},zd={prefix:`fas`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`]},Bd={prefix:`fas`,iconName:`house`,icon:[512,512,[127968,63498,63500,`home`,`home-alt`,`home-lg-alt`],`f015`,`M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z`]},Vd={prefix:`fas`,iconName:`circle-check`,icon:[512,512,[61533,`check-circle`],`f058`,`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},Hd={prefix:`fas`,iconName:`moon`,icon:[512,512,[127769,9214],`f186`,`M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z`]},Ud={prefix:`fas`,iconName:`universal-access`,icon:[512,512,[],`f29a`,`M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm161.5-86.1c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3l0 50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2S339 397 334.8 384.4l-28.7-86.1c-1.4-4.1-2.1-8.3-2.1-12.6l0-50.1c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L338.7 175c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z`]},Wd={prefix:`fas`,iconName:`chevron-down`,icon:[448,512,[],`f078`,`M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`]},Gd={prefix:`fas`,iconName:`download`,icon:[448,512,[],`f019`,`M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z`]},Kd={prefix:`fas`,iconName:`handshake-angle`,icon:[576,512,[`hands-helping`],`f4c4`,`M268.9 53.2L152.3 182.8c-4.6 5.1-4.4 13 .5 17.9 30.5 30.5 80 30.5 110.5 0l31.8-31.8c4.2-4.2 9.5-6.5 14.9-6.9 6.8-.6 13.8 1.7 19 6.9L505.6 344 576 288 576 0 464 64 440.2 48.1C424.4 37.6 405.9 32 386.9 32l-70.4 0c-1.1 0-2.3 0-3.4 .1-16.9 .9-32.8 8.5-44.2 21.1zM116.6 150.7L223.4 32 183.8 32c-25.5 0-49.9 10.1-67.9 28.1L0 192 0 544 144 408 156.4 418.3c23 19.2 52 29.7 81.9 29.7l15.7 0-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l41 41 9 0c19.1 0 37.8-4.3 54.8-12.3L359 409c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l32 32 17.5-17.5c8.9-8.9 11.5-21.8 7.6-33.1l-137.9-136.8-14.9 14.9c-49.3 49.3-129.1 49.3-178.4 0-23-23-23.9-59.9-2.2-84z`]},qd={prefix:`fas`,iconName:`circle-info`,icon:[512,512,[`info-circle`],`f05a`,`M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`]},Jd={prefix:`fab`,iconName:`github`,icon:[512,512,[],`f09b`,`M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z`]},Yd={prefix:`fab`,iconName:`linkedin`,icon:[448,512,[],`f08c`,`M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z`]},Xd=`/assets/agents-repo-logo-BLpkDfv8.svg`;function Zd(e){return`${e} (opens in a new tab)`}var Qd=180,$d={active:{bg:`success`,icon:Vd},deprecated:{bg:`warning`,icon:Pd},archived:{bg:`secondary`,icon:Pd},yanked:{bg:`danger`,icon:Pd}},ef=(e,t,n)=>(0,z.jsxs)(k,{align:`end`,children:[(0,z.jsx)(k.Toggle,{variant:`outline-primary`,size:`lg`,id:`download-actions-${t}`,className:`d-inline-flex align-items-center justify-content-center`,"aria-label":`Download ${e.name}`,children:(0,z.jsx)($,{icon:Gd,"aria-hidden":`true`,className:`me-1`})}),(0,z.jsx)(k.Menu,{children:n.map(t=>(0,z.jsxs)(k.Item,{href:t.href,target:`_blank`,rel:`noreferrer noopener`,"aria-label":`Download ${e.name} for ${t.label} (opens in a new tab)`,children:[t.label,t.status===`experimental`?(0,z.jsx)(b,{bg:`warning`,text:`dark`,pill:!0,className:`ms-2 fw-normal`,children:`experimental`}):null]},t.id))})]});function tf(e){let t=(0,L.c)(74),{setHeaderSearchSlot:n}=e,{catalog:r,cacheState:i,indexUrl:a,registryBaseUrl:o,githubRepositoryUrl:s,errorMessage:c,isLoading:l}=Aa(),[u,d]=(0,j.useState)(``),[f,p]=(0,j.useState)(!1),m;t[0]===u?m=t[1]:(m=u.trim(),t[0]=u,t[1]=m);let h=m,T=r!==null,D;t[2]!==i||t[3]!==c||t[4]!==T?(D=Da({hasCatalog:T,cacheState:i,errorMessage:c}),t[2]=i,t[3]=c,t[4]=T,t[5]=D):D=t[5];let O=D,A;t[6]===a?A=t[7]:(A=wa(a),t[6]=a,t[7]=A);let ee=A,te,ne;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(te=()=>{let e=()=>{let e=globalThis.window.scrollY>Qd;p(t=>t===e?t:e)};return e(),globalThis.window.addEventListener(`scroll`,e,{passive:!0}),()=>{globalThis.window.removeEventListener(`scroll`,e)}},ne=[],t[8]=te,t[9]=ne):(te=t[8],ne=t[9]),(0,j.useEffect)(te,ne);let re;bb0:{if(!r){let e;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(e=[],t[10]=e):e=t[10],re=e;break bb0}let e;t[11]!==r||t[12]!==u?(e=Lt(r,u),t[11]=r,t[12]=u,t[13]=e):e=t[13],re=e}let M=re,ie;t[14]!==r||t[15]!==M.length||t[16]!==l?(ie=Oa({catalog:r,filteredCount:M.length,isLoading:l}),t[14]=r,t[15]=M.length,t[16]=l,t[17]=ie):ie=t[17];let ae=ie,oe;t[18]===Symbol.for(`react.memo_cache_sentinel`)?(oe=(0,z.jsx)(S.Label,{htmlFor:`registry-package-search`,className:`visually-hidden`,children:`Search registry packages`}),t[18]=oe):oe=t[18];let se;t[19]===Symbol.for(`react.memo_cache_sentinel`)?(se=(0,z.jsxs)(g.Text,{className:`bg-primary border-primary text-white`,children:[(0,z.jsx)($,{icon:jd,className:`me-2`,"aria-hidden":`true`}),`Search`]}),t[19]=se):se=t[19];let ce;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(ce=e=>d(e.target.value),t[20]=ce):ce=t[20];let N;t[21]===u?N=t[22]:(N=(0,z.jsxs)(g,{size:`sm`,className:`search-control`,children:[se,(0,z.jsx)(S.Control,{id:`registry-package-search`,size:`sm`,value:u,onChange:ce,placeholder:`Search by package, owner (@slug), description, or tag`,className:`border-secondary search-input`})]}),t[21]=u,t[22]=N);let P;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,z.jsx)(`button`,{type:`submit`,className:`visually-hidden`,children:`Search`}),t[23]=P):P=t[23];let F;t[24]===N?F=t[25]:(F=(0,z.jsxs)(S,{role:`search`,"aria-label":`Search packages`,className:`w-100`,onSubmit:rf,children:[oe,N,P]}),t[24]=N,t[25]=F);let le=F,ue,de;t[26]!==le||t[27]!==n||t[28]!==f?(ue=()=>(n(f?le:null),()=>{n(null)}),de=[le,n,f],t[26]=le,t[27]=n,t[28]=f,t[29]=ue,t[30]=de):(ue=t[29],de=t[30]),(0,j.useEffect)(ue,de);let fe,pe,me,he;t[31]===Symbol.for(`react.memo_cache_sentinel`)?(fe=(0,z.jsx)(`img`,{src:Xd,width:`72`,height:`72`,alt:`Agents Repo brand symbol`}),pe=(0,z.jsx)(b,{bg:`primary`,pill:!0,children:`Curated package registry`}),me=(0,z.jsx)(`h1`,{className:`display-5 fw-semibold mb-0`,children:`Explore ready-to-use agents and flows`}),he=(0,z.jsx)(`p`,{className:`lead fs-6 text-body-secondary mb-0`,children:`Browse agents and flows ready for direct use in your projects, with quick metadata from the registry index.`}),t[31]=fe,t[32]=pe,t[33]=me,t[34]=he):(fe=t[31],pe=t[32],me=t[33],he=t[34]);let ge=`w-100 hero-search${f?` d-lg-none`:``}`,_e;t[35]!==le||t[36]!==ge?(_e=(0,z.jsx)(`section`,{className:`py-4 py-lg-5 border-bottom border-secondary-subtle app-hero`,children:(0,z.jsx)(_,{children:(0,z.jsx)(x,{className:`justify-content-center`,children:(0,z.jsx)(v,{xl:8,className:`text-center`,children:(0,z.jsxs)(w,{gap:3,className:`align-items-center`,children:[fe,pe,me,he,(0,z.jsx)(`div`,{className:ge,children:le})]})})})})}),t[35]=le,t[36]=ge,t[37]=_e):_e=t[37];let ve=h?`Search results for "${h}"`:`Recently updated packages`,ye;t[38]===r?ye=t[39]:(ye=r?(0,z.jsxs)(b,{bg:`secondary`,pill:!0,className:`fw-normal`,children:[`schema v`,r.schemaVersion]}):null,t[38]=r,t[39]=ye);let be;t[40]!==ve||t[41]!==ye?(be=(0,z.jsxs)(`h2`,{className:`h3 mb-1 d-flex align-items-center gap-2 flex-wrap`,children:[ve,ye]}),t[40]=ve,t[41]=ye,t[42]=be):be=t[42];let xe;t[43]===ae?xe=t[44]:(xe=(0,z.jsx)(`p`,{className:`text-body-secondary mb-0 small`,"aria-live":`polite`,"aria-atomic":`true`,children:ae}),t[43]=ae,t[44]=xe);let Se;t[45]!==be||t[46]!==xe?(Se=(0,z.jsx)(x,{className:`align-items-end mb-3 g-2`,children:(0,z.jsxs)(v,{lg:8,children:[be,xe]})}),t[45]=be,t[46]=xe,t[47]=Se):Se=t[47];let Ce;t[48]!==ee||t[49]!==O||t[50]!==c||t[51]!==a?(Ce=O?(0,z.jsxs)(y,{variant:O.variant,className:`mb-3`,children:[O.message,ee?(0,z.jsxs)(z.Fragment,{children:[` `,(0,z.jsx)(`a`,{href:a,target:`_blank`,rel:`noreferrer noopener`,"aria-label":Zd(`Check configured index URL`),children:`Check configured index URL`}),`.`]}):null,c?(0,z.jsx)(`span`,{className:`small`,children:` Details are available in the browser console.`}):null]}):null,t[48]=ee,t[49]=O,t[50]=c,t[51]=a,t[52]=Ce):Ce=t[52];let we;if(t[53]!==M||t[54]!==s||t[55]!==o){let e;t[57]!==s||t[58]!==o?(e=e=>{let t=$d[e.status],n=Pn(e.namespace,e.package),r=Ta(e,o),i=gr(s,e.namespace,e.package),a=i&&wa(i)?i:null;return(0,z.jsx)(v,{children:(0,z.jsxs)(E,{id:`package-card-${n}`,className:`h-100 d-flex flex-column border-secondary-subtle package-card`,children:[(0,z.jsx)(E.Header,{className:`p-3 p-lg-4`,children:(0,z.jsxs)(w,{direction:`horizontal`,className:`justify-content-between align-items-start`,children:[(0,z.jsxs)(`div`,{className:`me-2`,children:[(0,z.jsx)(E.Title,{as:`h3`,className:`h6 fw-semibold mb-0 lh-sm`,children:e.name}),(0,z.jsxs)(E.Subtitle,{as:`div`,className:`small text-body-secondary mb-0 mt-1`,children:[(0,z.jsx)(b,{bg:`light`,text:`dark`,className:`me-2 fw-normal`,children:e.namespace}),`by`,` `,(0,z.jsxs)(k,{as:`div`,align:`end`,className:`d-inline-block`,children:[(0,z.jsxs)(k.Toggle,{as:`button`,id:`owner-actions-${n}`,className:`btn btn-link btn-sm p-0 text-body-secondary text-decoration-underline d-inline-flex align-items-center owner-dropdown-toggle`,"aria-label":`Actions for owner ${e.owner}`,children:[e.owner,(0,z.jsx)($,{icon:Wd,size:`xs`,className:`ms-1`,"aria-hidden":`true`})]}),(0,z.jsxs)(k.Menu,{children:[(0,z.jsxs)(k.Item,{href:`https://github.com/${e.owner}`,target:`_blank`,rel:`noreferrer noopener`,"aria-label":`View GitHub profile for ${e.owner} (opens in a new tab)`,children:[(0,z.jsx)($,{icon:Jd,className:`me-2`,"aria-hidden":`true`}),`View GitHub profile`]}),(0,z.jsxs)(k.Item,{onClick:()=>d(`@${e.owner}`),children:[(0,z.jsx)($,{icon:kd,className:`me-2`,"aria-hidden":`true`}),`Filter packages by this owner`]})]})]})]})]}),(0,z.jsxs)(b,{bg:t.bg,children:[(0,z.jsx)($,{icon:t.icon,className:`me-1`,"aria-hidden":`true`}),e.status]})]})}),(0,z.jsxs)(E.Body,{className:`d-flex flex-column flex-grow-1 gap-3 p-3 p-lg-4`,children:[(0,z.jsx)(E.Text,{as:`p`,className:`small text-body-secondary mb-0 package-description`,children:e.description}),(0,z.jsxs)(w,{direction:`horizontal`,gap:2,className:`flex-wrap`,children:[(0,z.jsxs)(b,{bg:`primary`,children:[`v`,e.latest]}),(0,z.jsx)(b,{bg:`secondary`,children:e.category}),(0,z.jsxs)(b,{bg:`info`,text:`dark`,children:[e.estimateOverallCost.band,` cost`]})]}),(0,z.jsx)(`div`,{className:`d-flex gap-2 flex-wrap`,children:e.tags.map(nf)})]}),r.length>0||a?(0,z.jsxs)(E.Footer,{className:`d-flex justify-content-center gap-2`,children:[r.length>0?ef(e,n,r):null,a?(0,z.jsx)(C,{as:`a`,href:a,target:`_blank`,rel:`noreferrer noopener`,variant:`outline-primary`,size:`lg`,className:`d-inline-flex align-items-center justify-content-center`,"aria-label":`View ${e.name} on GitHub (opens in a new tab)`,children:(0,z.jsx)($,{icon:Md,"aria-hidden":`true`})}):null]}):null]})},n)},t[57]=s,t[58]=o,t[59]=e):e=t[59],we=M.map(e),t[53]=M,t[54]=s,t[55]=o,t[56]=we}else we=t[56];let Te;t[60]===we?Te=t[61]:(Te=(0,z.jsx)(x,{xs:1,md:2,xl:3,className:`g-3`,children:we}),t[60]=we,t[61]=Te);let Ee;t[62]!==r||t[63]!==M.length||t[64]!==l?(Ee=!l&&M.length===0?(0,z.jsx)(E,{className:`mt-4 border-secondary-subtle`,children:(0,z.jsxs)(E.Body,{className:`text-center py-4`,children:[(0,z.jsx)($,{icon:jd,className:`me-2`,"aria-hidden":`true`}),r?`No packages match your current search.`:`No catalog data available.`]})}):null,t[62]=r,t[63]=M.length,t[64]=l,t[65]=Ee):Ee=t[65];let De;t[66]!==Se||t[67]!==Ce||t[68]!==Te||t[69]!==Ee?(De=(0,z.jsx)(`section`,{className:`py-4 py-lg-5`,children:(0,z.jsxs)(_,{children:[Se,Ce,Te,Ee]})}),t[66]=Se,t[67]=Ce,t[68]=Te,t[69]=Ee,t[70]=De):De=t[70];let Oe;return t[71]!==_e||t[72]!==De?(Oe=(0,z.jsxs)(z.Fragment,{children:[_e,De]}),t[71]=_e,t[72]=De,t[73]=Oe):Oe=t[73],Oe}function nf(e){return(0,z.jsxs)(b,{bg:`light`,text:`dark`,pill:!0,className:`fw-normal`,children:[`#`,e]},e)}function rf(e){return e.preventDefault()}var af=(0,j.createContext)(null);function of(){let e=(0,j.useContext)(af);if(!e)throw Error(`useCookieConsent must be used within CookieConsentProvider`);return e}function sf(){let e=(0,L.c)(19),{openCookiePreferences:t}=of(),r;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,z.jsx)(`h2`,{className:`h6 text-uppercase text-body-secondary mb-3 footer-column-title`,children:`Product`}),e[0]=r):r=e[0];let i;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,z.jsxs)(n,{to:R.home,className:`footer-link`,children:[(0,z.jsx)($,{icon:Bd,className:`me-2`,"aria-hidden":`true`}),`Home`]}),e[1]=i):i=e[1];let a;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,z.jsxs)(v,{sm:6,lg:4,children:[r,(0,z.jsx)(`nav`,{"aria-label":`Footer: Product`,children:(0,z.jsxs)(`div`,{className:`d-flex flex-column gap-2`,children:[i,(0,z.jsxs)(n,{to:R.about,className:`footer-link`,children:[(0,z.jsx)($,{icon:qd,className:`me-2`,"aria-hidden":`true`}),`About`]})]})})]}),e[2]=a):a=e[2];let o;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,z.jsx)(`h2`,{className:`h6 text-uppercase text-body-secondary mb-3 footer-column-title`,children:`Connect`}),e[3]=o):o=e[3];let s;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,z.jsxs)(n,{to:R.contact,className:`footer-link`,children:[(0,z.jsx)($,{icon:Ad,className:`me-2`,"aria-hidden":`true`}),`Contact`]}),e[4]=s):s=e[4];let c;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,z.jsxs)(v,{sm:6,lg:4,children:[o,(0,z.jsx)(`nav`,{"aria-label":`Footer: Connect`,children:(0,z.jsxs)(`div`,{className:`d-flex flex-column gap-2`,children:[s,(0,z.jsxs)(n,{to:R.helpUs,className:`footer-link`,children:[(0,z.jsx)($,{icon:Kd,className:`me-2`,"aria-hidden":`true`}),`Help Us`]})]})})]}),e[5]=c):c=e[5];let l;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,z.jsx)(`h2`,{className:`h6 text-uppercase text-body-secondary mb-3 footer-column-title`,children:`Legal`}),e[6]=l):l=e[6];let u;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,z.jsxs)(n,{to:R.accessibility,className:`footer-link`,children:[(0,z.jsx)($,{icon:Ud,className:`me-2`,"aria-hidden":`true`}),`Accessibility`]}),e[7]=u):u=e[7];let d;e[8]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,z.jsxs)(n,{to:R.privacy,className:`footer-link`,children:[(0,z.jsx)($,{icon:Id,className:`me-2`,"aria-hidden":`true`}),`Privacy`]}),e[8]=d):d=e[8];let f;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(f=(0,z.jsxs)(n,{to:R.privacyPtBr,className:`footer-link`,children:[(0,z.jsx)($,{icon:Id,className:`me-2`,"aria-hidden":`true`}),`Privacidade`]}),e[9]=f):f=e[9];let p;e[10]===t?p=e[11]:(p=(0,z.jsxs)(`div`,{className:`d-flex flex-column gap-2 mb-3`,children:[u,d,f,(0,z.jsx)(`button`,{type:`button`,className:`btn btn-link footer-link text-start p-0 border-0`,onClick:t,children:`Cookie preferences`})]}),e[10]=t,e[11]=p);let m;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,z.jsx)($,{icon:Od,className:`me-2`,"aria-hidden":`true`}),e[12]=m):m=e[12];let h;e[13]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,z.jsxs)(`p`,{className:`mb-0 small text-body-secondary footer-note`,children:[m,`Licensed under`,` `,(0,z.jsx)(`a`,{className:`footer-link`,href:`https://github.com/agents-repo/webapp/blob/main/LICENSE`,target:`_blank`,rel:`noreferrer noopener`,"aria-label":Zd(`MIT license`),children:`MIT`}),`.`]}),e[13]=h):h=e[13];let g;e[14]===p?g=e[15]:(g=(0,z.jsxs)(x,{className:`g-3 g-lg-4`,children:[a,c,(0,z.jsxs)(v,{sm:6,lg:4,children:[l,(0,z.jsxs)(`nav`,{"aria-label":`Footer: Legal`,children:[p,h]})]})]}),e[14]=p,e[15]=g);let y;e[16]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,z.jsx)(x,{className:`mt-4 mt-lg-5`,children:(0,z.jsx)(v,{children:(0,z.jsx)(`div`,{className:`footer-credits-row`,children:(0,z.jsxs)(`p`,{className:`mb-0 text-body-secondary text-center`,children:[`Made with `,(0,z.jsx)($,{icon:Fd,className:`text-danger mx-1`,"aria-hidden":`true`}),` by Maicon + collaborators.`]})})})}),e[16]=y):y=e[16];let b;return e[17]===g?b=e[18]:(b=(0,z.jsx)(`footer`,{className:`border-top border-secondary-subtle py-4 py-lg-5 site-footer bg-body-tertiary`,children:(0,z.jsxs)(_,{children:[g,y]})}),e[17]=g,e[18]=b),b}function cf(e){return`prompt`in e&&typeof e.prompt==`function`&&`userChoice`in e}function lf(e,t){return e||t}function uf(){return typeof window>`u`?!1:lf(window.matchMedia(`(display-mode: standalone)`).matches,window.navigator.standalone===!0)}async function df(e){if(!e)return`unavailable`;await e.prompt();let{outcome:t}=await e.userChoice;return t!==`accepted`&&t!==`dismissed`?`unavailable`:t}function ff(){let[e,t]=(0,j.useState)(null),[n,r]=(0,j.useState)(!1);(0,j.useEffect)(()=>{if(uf())return;let e=e=>{cf(e)&&(e.preventDefault(),t(e))},n=()=>{t(null)};return globalThis.window.addEventListener(`beforeinstallprompt`,e),globalThis.window.addEventListener(`appinstalled`,n),()=>{globalThis.window.removeEventListener(`beforeinstallprompt`,e),globalThis.window.removeEventListener(`appinstalled`,n)}},[]);let i=(0,j.useCallback)(async()=>{let n=e;r(!0);try{let e=await df(n);return n&&t(null),e}finally{r(!1)}},[e]);return{canInstall:e!==null&&!uf(),isInstalling:n,promptInstall:i}}function pf(){let e=(0,L.c)(7),{canInstall:t,isInstalling:n,promptInstall:r}=ff();if(!t)return null;let i;e[0]===r?i=e[1]:(i=()=>{r()},e[0]=r,e[1]=i);let a=n?`Installing Agents Repo app`:`Install Agents Repo app`,o;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,z.jsx)($,{icon:Gd,className:`fa-fw`,"aria-hidden":`true`}),e[2]=o):o=e[2];let s;return e[3]!==n||e[4]!==i||e[5]!==a?(s=(0,z.jsx)(C,{variant:`link`,className:`d-inline-flex align-items-center justify-content-center app-header-icon-control`,onClick:i,disabled:n,"aria-busy":n,"aria-label":a,title:`Install app`,children:o}),e[3]=n,e[4]=i,e[5]=a,e[6]=s):s=e[6],s}var mf=`theme`,hf=`(prefers-color-scheme: dark)`,gf=`theme-color`,_f={light:`#ffffff`,dark:`#13101b`};function vf(e){if(typeof document>`u`)return;let t=document.querySelector(`meta[name="${gf}"]`);t||(t=document.createElement(`meta`),t.name=gf,document.head.appendChild(t)),t.content=_f[e]}function yf(e){return e===`light`||e===`dark`||e===`auto`}function bf(){return globalThis.window??null}function xf(){let e=bf();if(!e)return null;try{return e.localStorage}catch{return null}}function Sf(){let e=xf();if(!e)return null;let t=e.getItem(mf);return yf(t)?t:null}function Cf(){return Sf()??`dark`}function wf(e){return e===`auto`?Df():e}function Tf(e){let t=wf(e);return globalThis.document.documentElement.dataset.bsTheme=t,vf(t),t}function Ef(e){let t=xf();t&&t.setItem(mf,e)}function Df(){let e=bf();return e?e.matchMedia(hf).matches?`dark`:`light`:`dark`}function Of(e){let t=bf();if(!t)return()=>{};let n=t.matchMedia(hf);return n.addEventListener(`change`,e),()=>{n.removeEventListener(`change`,e)}}var kf=(0,j.createContext)(void 0);function Af(){let e=(0,j.useContext)(kf);if(!e)throw Error(`useThemeMode must be used within ThemeModeProvider`);return e}var jf=[{mode:`light`,label:`Light`,icon:Ld},{mode:`dark`,label:`Dark`,icon:Hd},{mode:`auto`,label:`Auto`,icon:Nd}];function Mf(){let e=(0,L.c)(16),{mode:t,setMode:n}=Af(),r;e[0]===t?r=e[1]:(r=jf.find(e=>e.mode===t)??jf[1],e[0]=t,e[1]=r);let i=r,a=`Color mode: ${i.label}`,o=`Color mode: ${i.label}`,s;e[2]===i.icon?s=e[3]:(s=(0,z.jsx)($,{icon:i.icon,className:`fa-fw`,"aria-hidden":`true`}),e[2]=i.icon,e[3]=s);let c;e[4]!==a||e[5]!==o||e[6]!==s?(c=(0,z.jsx)(k.Toggle,{id:`theme-mode-dropdown`,variant:`link`,className:`d-inline-flex align-items-center justify-content-center app-header-icon-control`,"aria-label":a,title:o,children:s}),e[4]=a,e[5]=o,e[6]=s,e[7]=c):c=e[7];let l;e[8]!==t||e[9]!==n?(l=jf.map(e=>(0,z.jsxs)(k.Item,{as:`button`,type:`button`,className:`d-flex align-items-center gap-2`,active:t===e.mode,onClick:()=>{n(e.mode)},children:[(0,z.jsx)($,{icon:e.icon,className:`fa-fw`,"aria-hidden":`true`}),(0,z.jsx)(`span`,{className:`flex-grow-1`,children:e.label}),t===e.mode?(0,z.jsx)($,{icon:zd,"aria-hidden":`true`}):null]},e.mode)),e[8]=t,e[9]=n,e[10]=l):l=e[10];let u;e[11]===l?u=e[12]:(u=(0,z.jsx)(k.Menu,{"data-bs-theme":`dark`,children:l}),e[11]=l,e[12]=u);let d;return e[13]!==c||e[14]!==u?(d=(0,z.jsxs)(k,{align:`end`,className:`theme-mode-dropdown`,children:[c,u]}),e[13]=c,e[14]=u,e[15]=d):d=e[15],d}var Nf=e=>e?`${e.alias} → ${e.resolvedRef}`:null,Pf=e=>wa(e)?(0,z.jsx)(`a`,{href:e,target:`_blank`,rel:`noreferrer noopener`,className:`text-reset text-break`,"aria-label":Zd(e),children:e}):(0,z.jsx)(`span`,{className:`text-break`,children:e}),Ff=e=>(0,z.jsxs)(`p`,{className:`small text-body-secondary opacity-75 mb-0`,children:[e.summaryText,wa(e.sourceUrl)?(0,z.jsx)(`a`,{href:e.sourceUrl,target:`_blank`,rel:`noreferrer noopener`,className:`text-reset text-break`,"aria-label":Zd(e.sourceUrl),children:e.sourceUrl}):(0,z.jsx)(`span`,{children:e.sourceUrl||`configured source`}),e.baseUrlRefResolution?(0,z.jsxs)(`span`,{className:`ms-1`,children:[`(`,e.baseUrlRefResolution.alias,` → `,e.baseUrlRefResolution.resolvedRef,`)`]}):null,(0,z.jsxs)(`span`,{className:`opacity-75`,children:[` (`,e.statusTag,`)`]})]});function If(e){let t=(0,L.c)(4),{mode:n}=e,r=n===`runtime-override`,i=r?`info`:`secondary`,a=r?`dark`:void 0,o=r?`runtime override`:`configured source`,s;return t[0]!==i||t[1]!==a||t[2]!==o?(s=(0,z.jsx)(b,{bg:i,text:a,children:o}),t[0]=i,t[1]=a,t[2]=o,t[3]=s):s=t[3],s}function Lf(e){let t=(0,L.c)(2),{label:n}=e;if(!n)return null;let r;return t[0]===n?r=t[1]:(r=(0,z.jsx)(b,{bg:`light`,text:`dark`,children:n}),t[0]=n,t[1]=r),r}function Rf({onSaved:e,registryCatalogStatusNote:t}){let n=Yi(),[r,i]=(0,j.useState)(null),[a,o]=(0,j.useState)(!1),s=(0,j.useRef)(0),[c,l]=(0,j.useState)({showModal:!1,baseUrlInput:``,baseUrlValidationError:null,githubRepositoryUrlInput:``,githubRepositoryUrlValidationError:null,isSaving:!1}),u=async()=>{let e=++s.current;o(!0);try{let t=await na();if(e!==s.current)return;i(t)}catch{if(e!==s.current)return;i(null)}finally{e===s.current&&o(!1)}},d=()=>{i(null),o(!0),l({showModal:!0,baseUrlInput:fi()??``,baseUrlValidationError:null,githubRepositoryUrlInput:vi()??``,githubRepositoryUrlValidationError:null,isSaving:!1}),u()},f=()=>{l(e=>({...e,showModal:!1,baseUrlValidationError:null,githubRepositoryUrlValidationError:null,isSaving:!1}))},p=async()=>{let t=di(c.baseUrlInput),r=_i(c.githubRepositoryUrlInput);if(t||r){l(e=>({...e,baseUrlValidationError:t,githubRepositoryUrlValidationError:r}));return}l(e=>({...e,isSaving:!0,baseUrlValidationError:null,githubRepositoryUrlValidationError:null}));try{let t=ui(c.baseUrlInput),r=gi(c.githubRepositoryUrlInput),i=t.length>0?await ra(t,n.configuredGithubRepositoryUrl,{bypassTagCache:!0}):null,a=r.length>0?await ra(r,n.configuredGithubRepositoryUrl,{bypassTagCache:!0}):null;i||a?l(e=>({...e,baseUrlValidationError:i,githubRepositoryUrlValidationError:a})):(Ii(),t.length===0?mi():pi(t),r.length===0?bi():yi(r),await u(),f(),e?.())}finally{l(e=>({...e,isSaving:!1}))}},m=async()=>{mi(),bi(),Ii(),l(e=>({...e,baseUrlInput:``,baseUrlValidationError:null,githubRepositoryUrlInput:``,githubRepositoryUrlValidationError:null,isSaving:!0}));try{await u(),f(),e?.()}finally{l(e=>({...e,isSaving:!1}))}},h=r??Xi(),g=r!==null&&!a,_=g?Nf(h.baseUrlRefResolution):null,v=g?Nf(h.githubRepositoryRefResolution):null;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(C,{variant:`link`,className:`d-inline-flex align-items-center justify-content-center app-header-icon-control`,onClick:d,"aria-label":`Open website settings`,title:`Website settings`,children:(0,z.jsx)($,{icon:Rd,className:`fa-fw`,"aria-hidden":`true`})}),(0,z.jsxs)(O,{show:c.showModal,onHide:f,centered:!0,children:[(0,z.jsx)(O.Header,{closeButton:!0,children:(0,z.jsx)(O.Title,{as:`h2`,className:`h5 mb-0`,children:`Website settings`})}),(0,z.jsx)(O.Body,{children:(0,z.jsx)(S,{id:`website-settings-form`,noValidate:!0,onSubmit:e=>{e.preventDefault(),p()},children:(0,z.jsxs)(w,{gap:4,children:[(0,z.jsxs)(`section`,{children:[(0,z.jsx)(`h3`,{className:`h6 mb-2`,children:`Registry source`}),(0,z.jsxs)(`p`,{className:`small text-body-secondary mb-3`,children:[`Configure the registry base URL used to load the registry index (`,n.indexPath,`) at runtime. GitHub repository URLs are converted to a raw content URL. Raw and other base URLs are used directly. Major-version line refs such as `,(0,z.jsx)(`code`,{children:`1.x`}),` resolve to the latest stable release tag.`]}),(0,z.jsxs)(S.Group,{controlId:`registry-base-url-override-input`,className:`mb-3`,children:[(0,z.jsx)(S.Label,{children:`Registry base URL override`}),(0,z.jsx)(S.Control,{type:`url`,placeholder:n.configuredBaseUrl,value:c.baseUrlInput,onChange:e=>{l(t=>({...t,baseUrlInput:e.target.value,baseUrlValidationError:null}))},isInvalid:c.baseUrlValidationError!==null,disabled:c.isSaving}),(0,z.jsx)(S.Control.Feedback,{type:`invalid`,children:c.baseUrlValidationError}),(0,z.jsxs)(S.Text,{children:[`Enter a GitHub repository URL like https://github.com/agents-repo/registry, a GitHub tree URL, a proxy URL with `,(0,z.jsx)(`code`,{children:`?ref=1.x`}),`, or any direct base URL. Leave this field empty to use the configured default source: `,n.configuredBaseUrl]})]}),(0,z.jsxs)(`div`,{className:`small text-body-secondary mb-3 d-flex align-items-center gap-2 flex-wrap`,children:[(0,z.jsx)(`span`,{children:`Current source:`}),Pf(h.baseUrl),(0,z.jsx)(If,{mode:h.sourceMode}),a?(0,z.jsx)(`span`,{className:`opacity-75`,children:`Resolving refs…`}):null,(0,z.jsx)(Lf,{label:_})]}),t?Ff(t):null]}),(0,z.jsxs)(`section`,{children:[(0,z.jsx)(`h3`,{className:`h6 mb-2`,children:`Package browse links`}),(0,z.jsxs)(`p`,{className:`small text-body-secondary mb-3`,children:[`Configure the GitHub repository URL used for "view package on GitHub" links in package cards. This does not affect catalog fetching. GitHub tree URLs may use major-version line refs such as`,` `,(0,z.jsx)(`code`,{children:`1.x`}),`.`]}),(0,z.jsxs)(S.Group,{controlId:`registry-github-repository-url-override-input`,children:[(0,z.jsx)(S.Label,{children:`GitHub repository URL`}),(0,z.jsx)(S.Control,{type:`url`,placeholder:n.configuredGithubRepositoryUrl,value:c.githubRepositoryUrlInput,onChange:e=>{l(t=>({...t,githubRepositoryUrlInput:e.target.value,githubRepositoryUrlValidationError:null}))},isInvalid:c.githubRepositoryUrlValidationError!==null,disabled:c.isSaving}),(0,z.jsx)(S.Control.Feedback,{type:`invalid`,children:c.githubRepositoryUrlValidationError}),(0,z.jsxs)(S.Text,{children:[`Enter a GitHub repository URL like https://github.com/agents-repo/registry or a GitHub tree URL such as https://github.com/agents-repo/registry/tree/1.x. Leave this field empty to use the configured default: `,n.configuredGithubRepositoryUrl]})]}),(0,z.jsxs)(`div`,{className:`small text-body-secondary mt-3 d-flex align-items-center gap-2 flex-wrap`,children:[(0,z.jsx)(`span`,{children:`Current GitHub repository:`}),Pf(h.githubRepositoryUrl),(0,z.jsx)(If,{mode:h.githubRepositorySourceMode}),a?(0,z.jsx)(`span`,{className:`opacity-75`,children:`Resolving refs…`}):null,(0,z.jsx)(Lf,{label:v})]})]})]})})}),(0,z.jsxs)(O.Footer,{children:[(0,z.jsx)(C,{variant:`outline-secondary`,onClick:()=>void m(),disabled:c.isSaving,children:`Reset to default`}),(0,z.jsx)(C,{variant:`secondary`,onClick:f,disabled:c.isSaving,children:`Close`}),(0,z.jsx)(C,{variant:`primary`,type:`submit`,form:`website-settings-form`,disabled:c.isSaving,children:c.isSaving?`Saving…`:`Save changes`})]})]})]})}function zf(e){let t=(0,L.c)(20),{searchSlot:r,onRegistrySettingsSaved:i,registryCatalogStatusNote:a}=e,o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,z.jsxs)(h.Brand,{as:n,to:R.home,className:`d-flex align-items-center gap-2 fw-semibold`,children:[(0,z.jsx)(`img`,{src:Xd,width:`30`,height:`30`,alt:`Agents Repo logo`}),(0,z.jsx)(`span`,{children:`Agents Repo`})]}),t[0]=o):o=t[0];let s;t[1]===r?s=t[2]:(s=r?(0,z.jsx)(`div`,{className:`app-navbar-search`,children:r}):null,t[1]=r,t[2]=s);let c;t[3]===s?c=t[4]:(c=(0,z.jsx)(`div`,{className:`app-navbar-search-wrapper d-none d-lg-flex flex-grow-1 justify-content-center`,children:s}),t[3]=s,t[4]=c);let l;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,z.jsx)(h.Toggle,{"aria-controls":`site-navbar-nav`,className:`ms-auto`}),t[5]=l):l=t[5];let u;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,z.jsxs)(T.Link,{as:n,to:R.home,end:!0,className:`app-nav-link px-2`,children:[(0,z.jsx)($,{icon:Bd,className:`me-1`,"aria-hidden":`true`}),`Home`]}),t[6]=u):u=t[6];let d;t[7]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,z.jsxs)(T.Link,{as:n,to:R.about,className:`app-nav-link px-2`,children:[(0,z.jsx)($,{icon:qd,className:`me-1`,"aria-hidden":`true`}),`About`]}),t[7]=d):d=t[7];let f;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(f=(0,z.jsxs)(T.Link,{as:n,to:R.contact,className:`app-nav-link px-2`,children:[(0,z.jsx)($,{icon:Ad,className:`me-1`,"aria-hidden":`true`}),`Contact`]}),t[8]=f):f=t[8];let p;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,z.jsxs)(T.Link,{as:n,to:R.helpUs,className:`app-nav-link px-2`,children:[(0,z.jsx)($,{icon:Kd,className:`me-1`,"aria-hidden":`true`}),`Help Us`]}),t[9]=p):p=t[9];let m;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,z.jsx)(T.Item,{className:`ms-lg-2 d-flex align-items-center`,children:(0,z.jsx)(pf,{})}),t[10]=m):m=t[10];let g;t[11]!==i||t[12]!==a?(g=(0,z.jsx)(T.Item,{className:`ms-lg-2 d-flex align-items-center`,children:(0,z.jsx)(Rf,{onSaved:i,registryCatalogStatusNote:a})}),t[11]=i,t[12]=a,t[13]=g):g=t[13];let v;t[14]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,z.jsx)(T.Item,{className:`ms-lg-2 d-flex align-items-center`,children:(0,z.jsx)(Mf,{})}),t[14]=v):v=t[14];let y;t[15]===g?y=t[16]:(y=(0,z.jsx)(h.Collapse,{id:`site-navbar-nav`,children:(0,z.jsxs)(T,{className:`ms-lg-auto align-items-lg-center gap-lg-2 flex-column flex-lg-row pt-2 pt-lg-0`,navbar:!0,children:[u,d,f,p,m,g,v]})}),t[15]=g,t[16]=y);let b;return t[17]!==y||t[18]!==c?(b=(0,z.jsx)(h,{sticky:`top`,bg:`dark`,variant:`dark`,"data-bs-theme":`dark`,expand:`lg`,collapseOnSelect:!0,className:`border-bottom border-secondary-subtle py-2 app-navbar`,"aria-label":`Primary`,children:(0,z.jsxs)(_,{className:`gap-2 app-navbar-main`,children:[o,c,l,y]})}),t[17]=y,t[18]=c,t[19]=b):b=t[19],b}function Bf(){return globalThis.window===void 0?null:(globalThis.window.dataLayer=globalThis.window.dataLayer??[],typeof globalThis.window.gtag!=`function`&&(globalThis.window.gtag=function(...e){globalThis.window.dataLayer?.push(e)}),globalThis.window.gtag)}function Vf(e,t){let n=Bf();n&&n(`consent`,e,t)}function Hf(){Vf(`update`,{ad_storage:`denied`,ad_user_data:`denied`,ad_personalization:`denied`,analytics_storage:`granted`})}function Uf(){Vf(`update`,{ad_storage:`denied`,ad_user_data:`denied`,ad_personalization:`denied`,analytics_storage:`denied`,functionality_storage:`denied`,personalization_storage:`denied`,security_storage:`granted`})}function Wf(e){globalThis.window!==void 0&&(globalThis.window.dataLayer=globalThis.window.dataLayer??[],globalThis.window.dataLayer.push({event:`consent_update`,analytics_storage:e,ad_storage:`denied`,ad_user_data:`denied`,ad_personalization:`denied`}))}var Gf=`data-gtm-id`,Kf=/^GTM-[A-Z0-9]+$/;function qf(e){return Kf.test(e)}function Jf(){let e=`GTM-57FJBZ7P`,t=e;return qf(t)?t:(console.error(`[analytics] Invalid VITE_GTM_ID: ${e}`),null)}function Yf(e){return typeof document>`u`?null:document.querySelector(`script[${Gf}="${e}"]`)}function Xf(e){if(!et()||typeof document>`u`)return;let t;if(e===void 0)t=Jf();else if(qf(e))t=e;else{console.error(`[analytics] Invalid GTM container ID: ${e}`);return}if(!t||Yf(t))return;let n=document.createElement(`script`);n.setAttribute(Gf,t),n.text=`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${t}');`,document.head.appendChild(n)}function Zf(){let e=(0,L.c)(34),t=(0,j.useId)(),r=o(),{isPreferencesOpen:i,closeCookiePreferences:a}=of(),[,s]=(0,j.useState)(0),c=ot(),l=i||!c,u=(0,j.useRef)(!1),d;e[0]===s?d=e[1]:(d=()=>{s($f)},e[0]=s,e[1]=d);let f=d,p;e[2]===s?p=e[3]:(p=()=>{let e=e=>{e.key!==null&&e.key!==`analytics-consent`||s(Qf)};return globalThis.addEventListener(`storage`,e),()=>{globalThis.removeEventListener(`storage`,e)}},e[2]=s,e[3]=p);let m;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(m=[],e[4]=m):m=e[4],(0,j.useEffect)(p,m);let h,g;e[5]!==r.pathname||e[6]!==r.search?(h=()=>{u.current||it()===`accepted`&&(u.current=!0,Hf(),Wf(`granted`),Xf(),st(r.pathname,r.search))},g=[r.pathname,r.search],e[5]=r.pathname,e[6]=r.search,e[7]=h,e[8]=g):(h=e[7],g=e[8]),(0,j.useEffect)(h,g);let _;e[9]!==f||e[10]!==a||e[11]!==r.pathname||e[12]!==r.search?(_=()=>{let e=it()===`accepted`;at(`accepted`),e||(Hf(),Wf(`granted`),Xf(),st(r.pathname,r.search),u.current=!0),f(),a()},e[9]=f,e[10]=a,e[11]=r.pathname,e[12]=r.search,e[13]=_):_=e[13];let v=_,y;e[14]!==f||e[15]!==a?(y=()=>{at(`rejected`),Uf(),Wf(`denied`),f(),a()},e[14]=f,e[15]=a,e[16]=y):y=e[16];let b=y;if(!l)return null;let x;e[17]===t?x=e[18]:(x=(0,z.jsx)(`h2`,{id:t,className:`h6 mb-2`,children:`Cookie preferences`}),e[17]=t,e[18]=x);let S;e[19]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,z.jsx)(n,{to:R.privacy,className:`footer-link`,children:`Privacy policy`}),e[19]=S):S=e[19];let w;e[20]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,z.jsxs)(`p`,{className:`small text-body-secondary mb-3 mb-md-2`,children:[`We use optional analytics cookies to understand how the site is used. You can accept or reject analytics. See our`,` `,S,` `,`or`,` `,(0,z.jsx)(n,{to:R.privacyPtBr,className:`footer-link`,children:`Política de privacidade`}),` `,`for details, including your rights in Europe, the United States, and Brazil.`]}),e[20]=w):w=e[20];let T;e[21]===v?T=e[22]:(T=(0,z.jsx)(C,{variant:`outline-primary`,size:`sm`,onClick:v,children:`Accept analytics`}),e[21]=v,e[22]=T);let E;e[23]===b?E=e[24]:(E=(0,z.jsx)(C,{variant:`outline-primary`,size:`sm`,onClick:b,children:`Reject analytics`}),e[23]=b,e[24]=E);let D;e[25]!==T||e[26]!==E?(D=(0,z.jsxs)(`div`,{className:`d-flex flex-wrap gap-2`,children:[T,E]}),e[25]=T,e[26]=E,e[27]=D):D=e[27];let O;e[28]!==D||e[29]!==x?(O=(0,z.jsxs)(`div`,{className:`cookie-consent-banner__inner container py-3`,children:[x,w,D]}),e[28]=D,e[29]=x,e[30]=O):O=e[30];let k;return e[31]!==t||e[32]!==O?(k=(0,z.jsx)(`div`,{className:`cookie-consent-banner`,role:`region`,"aria-labelledby":t,children:O}),e[31]=t,e[32]=O,e[33]=k):k=e[33],k}function Qf(e){return e+1}function $f(e){return e+1}function ep(e){let t=(0,L.c)(7),{children:n}=e,[r,i]=(0,j.useState)(!1),a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=()=>{i(!0)},t[0]=a):a=t[0];let o=a,s;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(s=()=>{i(!1)},t[1]=s):s=t[1];let c=s,l;t[2]===r?l=t[3]:(l={isPreferencesOpen:r,openCookiePreferences:o,closeCookiePreferences:c},t[2]=r,t[3]=l);let u=l,d;return t[4]!==n||t[5]!==u?(d=(0,z.jsx)(af.Provider,{value:u,children:n}),t[4]=n,t[5]=u,t[6]=d):d=t[6],d}function tp(){let e=(0,L.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=[],e[0]=t):t=e[0],(0,j.useLayoutEffect)(np,t);let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,z.jsxs)(`div`,{className:`py-5 d-flex justify-content-center`,role:`status`,children:[(0,z.jsx)(`span`,{className:`visually-hidden`,children:`Loading page content`}),(0,z.jsx)(D,{animation:`border`,"aria-hidden":`true`})]}),e[1]=n):n=e[1],n}function np(){let e=document.getElementById(`main-content`);return e?.setAttribute(`aria-busy`,`true`),()=>{e?.removeAttribute(`aria-busy`)}}function rp(e){let t=(0,L.c)(7),{onRetry:n}=e,r,i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,z.jsx)(`h1`,{className:`h2 mb-3`,children:`Page failed to load`}),i=(0,z.jsx)(`p`,{className:`text-body-secondary mb-4`,children:`The page could not be loaded. This can happen when you are offline or after an app update. Try again or return to the home page.`}),t[0]=r,t[1]=i):(r=t[0],i=t[1]);let o;t[2]===n?o=t[3]:(o=(0,z.jsx)(C,{type:`button`,variant:`primary`,onClick:n,children:`Try again`}),t[2]=n,t[3]=o);let s;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,z.jsx)(a,{to:R.home,className:`btn btn-outline-secondary`,children:`Go to home`}),t[4]=s):s=t[4];let c;return t[5]===o?c=t[6]:(c=(0,z.jsx)(`div`,{className:`py-5`,role:`alert`,"data-route-load-error":!0,children:(0,z.jsxs)(_,{children:[r,i,(0,z.jsxs)(`div`,{className:`d-flex flex-wrap gap-2`,children:[o,s]})]})}),t[5]=o,t[6]=c),c}var ip=class extends j.Component{state={hasError:!1,retryKey:0};static getDerivedStateFromError(){return{hasError:!0}}componentDidUpdate(e){this.props.resetKey!==e.resetKey&&this.state.hasError&&(this.props.onLazyRetry?.(),this.setState(e=>({hasError:!1,retryKey:e.retryKey+1})))}componentDidCatch(e,t){console.error(`Lazy route failed to render:`,e,t)}handleRetry=()=>{this.props.onLazyRetry?.(),this.setState(e=>({hasError:!1,retryKey:e.retryKey+1}))};render(){return this.state.hasError?(0,z.jsx)(rp,{onRetry:this.handleRetry}):(0,z.jsx)(`div`,{children:this.props.children},this.state.retryKey)}};function ap(){return{AboutPage:(0,j.lazy)(()=>p(()=>import(`./AboutPage-CBLS-vRf.js`),__vite__mapDeps([0,1,2,3]))),AccessibilityPage:(0,j.lazy)(()=>p(()=>import(`./AccessibilityPage-ARXR1WzB.js`),__vite__mapDeps([4,1,2,3]))),ContactPage:(0,j.lazy)(()=>p(()=>import(`./ContactPage-DZtZLseb.js`),__vite__mapDeps([5,1,2,3]))),HelpUsPage:(0,j.lazy)(()=>p(()=>import(`./HelpUsPage-CnpSr6v5.js`),__vite__mapDeps([6,1,2,3]))),PrivacyPage:(0,j.lazy)(()=>p(()=>import(`./PrivacyPage-DDi0oU7b.js`),__vite__mapDeps([7,1,2,8,3]))),PrivacidadePage:(0,j.lazy)(()=>p(()=>import(`./PrivacidadePage-m9JgIJdF.js`),__vite__mapDeps([9,1,2,8,3])))}}function op(e){let t=(0,L.c)(23),{lazyPages:n,setHeaderSearchSlot:i}=e,{AboutPage:a,AccessibilityPage:o,ContactPage:s,HelpUsPage:l,PrivacyPage:u,PrivacidadePage:f}=n,p;t[0]===i?p=t[1]:(p=(0,z.jsx)(d,{path:R.home,element:(0,z.jsx)(tf,{setHeaderSearchSlot:i})}),t[0]=i,t[1]=p);let m;t[2]===a?m=t[3]:(m=(0,z.jsx)(d,{path:R.about,element:(0,z.jsx)(a,{})}),t[2]=a,t[3]=m);let h;t[4]===s?h=t[5]:(h=(0,z.jsx)(d,{path:R.contact,element:(0,z.jsx)(s,{})}),t[4]=s,t[5]=h);let g;t[6]===l?g=t[7]:(g=(0,z.jsx)(d,{path:R.helpUs,element:(0,z.jsx)(l,{})}),t[6]=l,t[7]=g);let _;t[8]===o?_=t[9]:(_=(0,z.jsx)(d,{path:R.accessibility,element:(0,z.jsx)(o,{})}),t[8]=o,t[9]=_);let v;t[10]===u?v=t[11]:(v=(0,z.jsx)(d,{path:R.privacy,element:(0,z.jsx)(u,{})}),t[10]=u,t[11]=v);let y;t[12]===f?y=t[13]:(y=(0,z.jsx)(d,{path:R.privacyPtBr,element:(0,z.jsx)(f,{})}),t[12]=f,t[13]=y);let b;t[14]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,z.jsx)(d,{path:`*`,element:(0,z.jsx)(c,{to:R.home,replace:!0})}),t[14]=b):b=t[14];let x;return t[15]!==p||t[16]!==m||t[17]!==h||t[18]!==g||t[19]!==_||t[20]!==v||t[21]!==y?(x=(0,z.jsxs)(r,{children:[p,m,h,g,_,v,y,b]}),t[15]=p,t[16]=m,t[17]=h,t[18]=g,t[19]=_,t[20]=v,t[21]=y,t[22]=x):x=t[22],x}function sp(e){let t=(0,L.c)(8),{setHeaderSearchSlot:n}=e,r=o(),[i,a]=(0,j.useState)(ap),s;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=()=>{a(ap())},t[0]=s):s=t[0];let c=s,l;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,z.jsx)(tp,{}),t[1]=l):l=t[1];let u;t[2]!==i||t[3]!==n?(u=(0,z.jsx)(j.Suspense,{fallback:l,children:(0,z.jsx)(op,{lazyPages:i,setHeaderSearchSlot:n})}),t[2]=i,t[3]=n,t[4]=u):u=t[4];let d;return t[5]!==r.pathname||t[6]!==u?(d=(0,z.jsx)(`main`,{id:`main-content`,tabIndex:-1,children:(0,z.jsx)(ip,{resetKey:r.pathname,onLazyRetry:c,children:u})}),t[5]=r.pathname,t[6]=u,t[7]=d):d=t[7],d}function cp(){let e=(0,L.c)(17),[t,n]=(0,j.useState)(null),[r,i]=(0,j.useState)(0),[a,o]=(0,j.useState)(null),s,c,l,u,d,f;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,z.jsx)(Ft,{}),c=(0,z.jsx)(mt,{}),l=(0,z.jsx)(_t,{}),u=(0,z.jsx)(ct,{}),d=(0,z.jsx)(Pt,{}),f=(0,z.jsx)(Zf,{}),e[0]=s,e[1]=c,e[2]=l,e[3]=u,e[4]=d,e[5]=f):(s=e[0],c=e[1],l=e[2],u=e[3],d=e[4],f=e[5]);let p;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(p=()=>{o(null),i(lp)},e[6]=p):p=e[6];let m;e[7]!==t||e[8]!==a?(m=(0,z.jsx)(zf,{searchSlot:t,registryCatalogStatusNote:a,onRegistrySettingsSaved:p}),e[7]=t,e[8]=a,e[9]=m):m=e[9];let h,g;e[10]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,z.jsx)(sp,{setHeaderSearchSlot:n}),g=(0,z.jsx)(sf,{}),e[10]=h,e[11]=g):(h=e[10],g=e[11]);let _;e[12]===m?_=e[13]:(_=(0,z.jsxs)(`div`,{className:`app-shell`,children:[s,c,l,u,d,f,m,h,g]}),e[12]=m,e[13]=_);let v;return e[14]!==r||e[15]!==_?(v=(0,z.jsx)(ep,{children:(0,z.jsx)(Ma,{registrySettingsVersion:r,onCatalogStatusNoteChange:o,children:_})}),e[14]=r,e[15]=_,e[16]=v):v=e[16],v}function lp(e){return e+1}function up(e){let t=(0,L.c)(11),{children:n}=e,[r,i]=(0,j.useState)(dp),a=(0,j.useSyncExternalStore)(Of,Df,Df),o=r===`auto`?a:r,s;t[0]===r?s=t[1]:(s=()=>{Ef(r),Tf(r)},t[0]=r,t[1]=s);let c;t[2]!==o||t[3]!==r?(c=[o,r],t[2]=o,t[3]=r,t[4]=c):c=t[4],(0,j.useEffect)(s,c);let l;t[5]!==o||t[6]!==r?(l={mode:r,appliedMode:o,setMode:i},t[5]=o,t[6]=r,t[7]=l):l=t[7];let u=l,d;return t[8]!==n||t[9]!==u?(d=(0,z.jsx)(kf.Provider,{value:u,children:n}),t[8]=n,t[9]=u,t[10]=d):d=t[10],d}function dp(){return Cf()}Tf(Cf()),(0,te.createRoot)(document.getElementById(`root`)).render((0,z.jsx)(j.StrictMode,{children:(0,z.jsx)(up,{children:(0,z.jsx)(Ie,{children:(0,z.jsx)(u,{children:(0,z.jsx)(cp,{})})})})}));export{R as a,$ as i,Jd as n,Yd as r,Zd as t};