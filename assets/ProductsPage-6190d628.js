import{A as _t,r as p,w as zt,u as E,a as Ae,c as ce,j as f,B as Ut,D as ct,E as Nt,L as Wt,s as Gt,i as Yt,F as Xt}from"./index-848d9fc8.js";import{u as qt}from"./formik.esm-fca9596e.js";import{h as Kt,E as Zt,c as Jt,s as Qt,_ as y,C as dt}from"./CustomModal-d69ccd50.js";import{b as en}from"./floating-ui.dom-9d61e2db.js";import{i as de}from"./sprite-6e7a68ce.js";const tn="/project-Power-7/assets/products-desktop-1x-74f26ba3.png",nn="/project-Power-7/assets/products-desktop-2x-c2e987ce.png",pt=n=>n.products.items,rn=n=>n.products.isLoading,on=n=>n.categories.categories,an=_t([pt],n=>n.length>0);function Q(n){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(n)}function un(n,e){if(Q(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var i=r.call(n,e||"default");if(Q(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ft(n){var e=un(n,"string");return Q(e)=="symbol"?e:String(e)}function ne(n,e,r){return e=ft(e),e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Be(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function S(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Be(Object(r),!0).forEach(function(i){ne(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function sn(n){if(Array.isArray(n))return n}function ln(n,e){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var i,t,a,u,l=[],o=!0,s=!1;try{if(a=(r=r.call(n)).next,e===0){if(Object(r)!==r)return;o=!1}else for(;!(o=(i=a.call(r)).done)&&(l.push(i.value),l.length!==e);o=!0);}catch(c){s=!0,t=c}finally{try{if(!o&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw t}}return l}}function Oe(n,e){(e==null||e>n.length)&&(e=n.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=n[r];return i}function ht(n,e){if(n){if(typeof n=="string")return Oe(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Oe(n,e)}}function cn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(n,e){return sn(n)||ln(n,e)||ht(n,e)||cn()}function dn(n,e){if(n==null)return{};var r={},i=Object.keys(n),t,a;for(a=0;a<i.length;a++)t=i[a],!(e.indexOf(t)>=0)&&(r[t]=n[t]);return r}function X(n,e){if(n==null)return{};var r=dn(n,e),i,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}var pn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function fn(n){var e=n.defaultInputValue,r=e===void 0?"":e,i=n.defaultMenuIsOpen,t=i===void 0?!1:i,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,o=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,m=n.onMenuOpen,v=n.value,x=X(n,pn),b=p.useState(l!==void 0?l:r),h=Y(b,2),g=h[0],D=h[1],F=p.useState(o!==void 0?o:t),O=Y(F,2),I=O[0],P=O[1],A=p.useState(v!==void 0?v:u),w=Y(A,2),M=w[0],T=w[1],B=p.useCallback(function(H,q){typeof s=="function"&&s(H,q),T(H)},[s]),$=p.useCallback(function(H,q){var K;typeof c=="function"&&(K=c(H,q)),D(K!==void 0?K:H)},[c]),U=p.useCallback(function(){typeof m=="function"&&m(),P(!0)},[m]),N=p.useCallback(function(){typeof d=="function"&&d(),P(!1)},[d]),k=l!==void 0?l:g,L=o!==void 0?o:I,z=v!==void 0?v:M;return S(S({},x),{},{inputValue:k,menuIsOpen:L,onChange:B,onInputChange:$,onMenuClose:N,onMenuOpen:U,value:z})}function hn(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function je(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,ft(i.key),i)}}function mn(n,e,r){return e&&je(n.prototype,e),r&&je(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function De(n,e){return De=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,t){return i.__proto__=t,i},De(n,e)}function vn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&De(n,e)}function pe(n){return pe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},pe(n)}function mt(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(mt=function(){return!!n})()}function gn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function bn(n,e){if(e&&(Q(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gn(n)}function xn(n){var e=mt();return function(){var i=pe(n),t;if(e){var a=pe(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return bn(this,t)}}function En(n){if(Array.isArray(n))return Oe(n)}function Cn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Sn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Me(n){return En(n)||Cn(n)||ht(n)||Sn()}var C=function(e,r){var i=arguments;if(r==null||!Kt.call(r,"css"))return p.createElement.apply(void 0,i);var t=i.length,a=new Array(t);a[0]=Zt,a[1]=Jt(e,r);for(var u=2;u<t;u++)a[u]=i[u];return p.createElement.apply(null,a)};function Ve(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return Qt(e)}var yn=function(){var e=Ve.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function wn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var Ie=p.useLayoutEffect,Fn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],fe=function(){};function On(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Dn(n,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),t=2;t<r;t++)i[t-2]=arguments[t];var a=[].concat(i);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&a.push("".concat(On(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var He=function(e){return Tn(e)?e.filter(Boolean):Q(e)==="object"&&e!==null?[e]:[]},vt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=X(e,Fn);return S({},r)},V=function(e,r,i){var t=e.cx,a=e.getStyles,u=e.getClassNames,l=e.className;return{css:a(r,e),className:t(i??{},u(r,e),l)}};function ve(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function In(n){return ve(n)?window.innerHeight:n.clientHeight}function gt(n){return ve(n)?window.pageYOffset:n.scrollTop}function he(n,e){if(ve(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Pn(n){var e=getComputedStyle(n),r=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(r&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function An(n,e,r,i){return r*((n=n/i-1)*n*n+1)+e}function oe(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:fe,t=gt(n),a=e-t,u=10,l=0;function o(){l+=u;var s=An(l,t,a,r);he(n,s),l<r?window.requestAnimationFrame(o):i(n)}o()}function _e(n,e){var r=n.getBoundingClientRect(),i=e.getBoundingClientRect(),t=e.offsetHeight/3;i.bottom+t>r.bottom?he(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):i.top-t<r.top&&he(n,Math.max(e.offsetTop-t,0))}function Mn(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function ze(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Vn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var bt=!1,Ln={get passive(){return bt=!0}},ae=typeof window<"u"?window:{};ae.addEventListener&&ae.removeEventListener&&(ae.addEventListener("p",fe,Ln),ae.removeEventListener("p",fe,!1));var Rn=bt;function kn(n){return n!=null}function Tn(n){return Array.isArray(n)}function ue(n,e,r){return n?e:r}var $n=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),t=1;t<r;t++)i[t-1]=arguments[t];var a=Object.entries(e).filter(function(u){var l=Y(u,1),o=l[0];return!i.includes(o)});return a.reduce(function(u,l){var o=Y(l,2),s=o[0],c=o[1];return u[s]=c,u},{})},Bn=["children","innerProps"],jn=["children","innerProps"];function Hn(n){var e=n.maxHeight,r=n.menuEl,i=n.minHeight,t=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,o=Pn(r),s={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return s;var c=o.getBoundingClientRect(),d=c.height,m=r.getBoundingClientRect(),v=m.bottom,x=m.height,b=m.top,h=r.offsetParent.getBoundingClientRect(),g=h.top,D=u?window.innerHeight:In(o),F=gt(o),O=parseInt(getComputedStyle(r).marginBottom,10),I=parseInt(getComputedStyle(r).marginTop,10),P=g-I,A=D-b,w=P+F,M=d-F-b,T=v-D+F+O,B=F+b-I,$=160;switch(t){case"auto":case"bottom":if(A>=x)return{placement:"bottom",maxHeight:e};if(M>=x&&!u)return a&&oe(o,T,$),{placement:"bottom",maxHeight:e};if(!u&&M>=i||u&&A>=i){a&&oe(o,T,$);var U=u?A-O:M-O;return{placement:"bottom",maxHeight:U}}if(t==="auto"||u){var N=e,k=u?P:w;return k>=i&&(N=Math.min(k-O-l,e)),{placement:"top",maxHeight:N}}if(t==="bottom")return a&&he(o,T),{placement:"bottom",maxHeight:e};break;case"top":if(P>=x)return{placement:"top",maxHeight:e};if(w>=x&&!u)return a&&oe(o,B,$),{placement:"top",maxHeight:e};if(!u&&w>=i||u&&P>=i){var L=e;return(!u&&w>=i||u&&P>=i)&&(L=u?P-I:w-I),a&&oe(o,B,$),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return s}function _n(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var xt=function(e){return e==="auto"?"bottom":e},zn=function(e,r){var i,t=e.placement,a=e.theme,u=a.borderRadius,l=a.spacing,o=a.colors;return S((i={label:"menu"},ne(i,_n(t),"100%"),ne(i,"position","absolute"),ne(i,"width","100%"),ne(i,"zIndex",1),i),r?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Et=p.createContext(null),Un=function(e){var r=e.children,i=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,u=e.menuPosition,l=e.menuShouldScrollIntoView,o=e.theme,s=p.useContext(Et)||{},c=s.setPortalPlacement,d=p.useRef(null),m=p.useState(t),v=Y(m,2),x=v[0],b=v[1],h=p.useState(null),g=Y(h,2),D=g[0],F=g[1],O=o.spacing.controlHeight;return Ie(function(){var I=d.current;if(I){var P=u==="fixed",A=l&&!P,w=Hn({maxHeight:t,menuEl:I,minHeight:i,placement:a,shouldScroll:A,isFixedPosition:P,controlHeight:O});b(w.maxHeight),F(w.placement),c==null||c(w.placement)}},[t,a,u,l,i,c,O]),r({ref:d,placerProps:S(S({},e),{},{placement:D||xt(a),maxHeight:x})})},Nn=function(e){var r=e.children,i=e.innerRef,t=e.innerProps;return C("div",y({},V(e,"menu",{menu:!0}),{ref:i},t),r)},Wn=Nn,Gn=function(e,r){var i=e.maxHeight,t=e.theme.spacing.baseUnit;return S({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:t,paddingTop:t})},Yn=function(e){var r=e.children,i=e.innerProps,t=e.innerRef,a=e.isMulti;return C("div",y({},V(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},i),r)},Ct=function(e,r){var i=e.theme,t=i.spacing.baseUnit,a=i.colors;return S({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},Xn=Ct,qn=Ct,Kn=function(e){var r=e.children,i=r===void 0?"No options":r,t=e.innerProps,a=X(e,Bn);return C("div",y({},V(S(S({},a),{},{children:i,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),i)},Zn=function(e){var r=e.children,i=r===void 0?"Loading...":r,t=e.innerProps,a=X(e,jn);return C("div",y({},V(S(S({},a),{},{children:i,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),i)},Jn=function(e){var r=e.rect,i=e.offset,t=e.position;return{left:r.left,position:t,top:i,width:r.width,zIndex:1}},Qn=function(e){var r=e.appendTo,i=e.children,t=e.controlElement,a=e.innerProps,u=e.menuPlacement,l=e.menuPosition,o=p.useRef(null),s=p.useRef(null),c=p.useState(xt(u)),d=Y(c,2),m=d[0],v=d[1],x=p.useMemo(function(){return{setPortalPlacement:v}},[]),b=p.useState(null),h=Y(b,2),g=h[0],D=h[1],F=p.useCallback(function(){if(t){var A=Mn(t),w=l==="fixed"?0:window.pageYOffset,M=A[m]+w;(M!==(g==null?void 0:g.offset)||A.left!==(g==null?void 0:g.rect.left)||A.width!==(g==null?void 0:g.rect.width))&&D({offset:M,rect:A})}},[t,l,m,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);Ie(function(){F()},[F]);var O=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),t&&o.current&&(s.current=en(t,o.current,F,{elementResize:"ResizeObserver"in window}))},[t,F]);Ie(function(){O()},[O]);var I=p.useCallback(function(A){o.current=A,O()},[O]);if(!r&&l!=="fixed"||!g)return null;var P=C("div",y({ref:I},V(S(S({},e),{},{offset:g.offset,position:l,rect:g.rect}),"menuPortal",{"menu-portal":!0}),a),i);return C(Et.Provider,{value:x},r?zt.createPortal(P,r):P)},er=function(e){var r=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},tr=function(e){var r=e.children,i=e.innerProps,t=e.isDisabled,a=e.isRtl;return C("div",y({},V(e,"container",{"--is-disabled":t,"--is-rtl":a}),i),r)},nr=function(e,r){var i=e.theme.spacing,t=e.isMulti,a=e.hasValue,u=e.selectProps.controlShouldRenderValue;return S({alignItems:"center",display:t&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},rr=function(e){var r=e.children,i=e.innerProps,t=e.isMulti,a=e.hasValue;return C("div",y({},V(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),i),r)},ir=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},or=function(e){var r=e.children,i=e.innerProps;return C("div",y({},V(e,"indicatorsContainer",{indicators:!0}),i),r)},Ue,ar=["size"],ur=["innerProps","isRtl","size"],sr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},St=function(e){var r=e.size,i=X(e,ar);return C("svg",y({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:sr},i))},Le=function(e){return C(St,y({size:20},e),C("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},yt=function(e){return C(St,y({size:20},e),C("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},wt=function(e,r){var i=e.isFocused,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return S({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?u.neutral60:u.neutral20,padding:a*2,":hover":{color:i?u.neutral80:u.neutral40}})},lr=wt,cr=function(e){var r=e.children,i=e.innerProps;return C("div",y({},V(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||C(yt,null))},dr=wt,pr=function(e){var r=e.children,i=e.innerProps;return C("div",y({},V(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||C(Le,null))},fr=function(e,r){var i=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return S({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},hr=function(e){var r=e.innerProps;return C("span",y({},r,V(e,"indicatorSeparator",{"indicator-separator":!0})))},mr=yn(Ue||(Ue=wn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),vr=function(e,r){var i=e.isFocused,t=e.size,a=e.theme,u=a.colors,l=a.spacing.baseUnit;return S({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?u.neutral60:u.neutral20,padding:l*2})},ge=function(e){var r=e.delay,i=e.offset;return C("span",{css:Ve({animation:"".concat(mr," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},gr=function(e){var r=e.innerProps,i=e.isRtl,t=e.size,a=t===void 0?4:t,u=X(e,ur);return C("div",y({},V(S(S({},u),{},{innerProps:r,isRtl:i,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),C(ge,{delay:0,offset:i}),C(ge,{delay:160,offset:!0}),C(ge,{delay:320,offset:!i}))},br=function(e,r){var i=e.isDisabled,t=e.isFocused,a=e.theme,u=a.colors,l=a.borderRadius,o=a.spacing;return S({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?u.neutral5:u.neutral0,borderColor:i?u.neutral10:t?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},xr=function(e){var r=e.children,i=e.isDisabled,t=e.isFocused,a=e.innerRef,u=e.innerProps,l=e.menuIsOpen;return C("div",y({ref:a},V(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":t,"control--menu-is-open":l}),u,{"aria-disabled":i||void 0}),r)},Er=xr,Cr=["data"],Sr=function(e,r){var i=e.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},yr=function(e){var r=e.children,i=e.cx,t=e.getStyles,a=e.getClassNames,u=e.Heading,l=e.headingProps,o=e.innerProps,s=e.label,c=e.theme,d=e.selectProps;return C("div",y({},V(e,"group",{group:!0}),o),C(u,y({},l,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:i}),s),C("div",null,r))},wr=function(e,r){var i=e.theme,t=i.colors,a=i.spacing;return S({label:"group",cursor:"default",display:"block"},r?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Fr=function(e){var r=vt(e);r.data;var i=X(r,Cr);return C("div",y({},V(e,"groupHeading",{"group-heading":!0}),i))},Or=yr,Dr=["innerRef","isDisabled","isHidden","inputClassName"],Ir=function(e,r){var i=e.isDisabled,t=e.value,a=e.theme,u=a.spacing,l=a.colors;return S(S({visibility:i?"hidden":"visible",transform:t?"translateZ(0)":""},Pr),r?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Ft={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Pr={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":S({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Ft)},Ar=function(e){return S({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Ft)},Mr=function(e){var r=e.cx,i=e.value,t=vt(e),a=t.innerRef,u=t.isDisabled,l=t.isHidden,o=t.inputClassName,s=X(t,Dr);return C("div",y({},V(e,"input",{"input-container":!0}),{"data-value":i||""}),C("input",y({className:r({input:!0},o),ref:a,style:Ar(l),disabled:u},s)))},Vr=Mr,Lr=function(e,r){var i=e.theme,t=i.spacing,a=i.borderRadius,u=i.colors;return S({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},Rr=function(e,r){var i=e.theme,t=i.borderRadius,a=i.colors,u=e.cropWithEllipsis;return S({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},kr=function(e,r){var i=e.theme,t=i.spacing,a=i.borderRadius,u=i.colors,l=e.isFocused;return S({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Ot=function(e){var r=e.children,i=e.innerProps;return C("div",i,r)},Tr=Ot,$r=Ot;function Br(n){var e=n.children,r=n.innerProps;return C("div",y({role:"button"},r),e||C(Le,{size:14}))}var jr=function(e){var r=e.children,i=e.components,t=e.data,a=e.innerProps,u=e.isDisabled,l=e.removeProps,o=e.selectProps,s=i.Container,c=i.Label,d=i.Remove;return C(s,{data:t,innerProps:S(S({},V(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},C(c,{data:t,innerProps:S({},V(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},r),C(d,{data:t,innerProps:S(S({},V(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},l),selectProps:o}))},Hr=jr,_r=function(e,r){var i=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.theme,l=u.spacing,o=u.colors;return S({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?o.primary:t?o.primary25:"transparent",color:i?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:a?o.primary:o.primary50}})},zr=function(e){var r=e.children,i=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.innerRef,l=e.innerProps;return C("div",y({},V(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":t,"option--is-selected":a}),{ref:u,"aria-disabled":i},l),r)},Ur=zr,Nr=function(e,r){var i=e.theme,t=i.spacing,a=i.colors;return S({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},Wr=function(e){var r=e.children,i=e.innerProps;return C("div",y({},V(e,"placeholder",{placeholder:!0}),i),r)},Gr=Wr,Yr=function(e,r){var i=e.isDisabled,t=e.theme,a=t.spacing,u=t.colors;return S({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Xr=function(e){var r=e.children,i=e.isDisabled,t=e.innerProps;return C("div",y({},V(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),t),r)},qr=Xr,Kr={ClearIndicator:pr,Control:Er,DropdownIndicator:cr,DownChevron:yt,CrossIcon:Le,Group:Or,GroupHeading:Fr,IndicatorsContainer:or,IndicatorSeparator:hr,Input:Vr,LoadingIndicator:gr,Menu:Wn,MenuList:Yn,MenuPortal:Qn,LoadingMessage:Zn,NoOptionsMessage:Kn,MultiValue:Hr,MultiValueContainer:Tr,MultiValueLabel:$r,MultiValueRemove:Br,Option:Ur,Placeholder:Gr,SelectContainer:tr,SingleValue:qr,ValueContainer:rr},Zr=function(e){return S(S({},Kr),e.components)},Ne=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Jr(n,e){return!!(n===e||Ne(n)&&Ne(e))}function Qr(n,e){if(n.length!==e.length)return!1;for(var r=0;r<n.length;r++)if(!Jr(n[r],e[r]))return!1;return!0}function ei(n,e){e===void 0&&(e=Qr);var r=null;function i(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(r&&r.lastThis===this&&e(t,r.lastArgs))return r.lastResult;var u=n.apply(this,t);return r={lastResult:u,lastArgs:t,lastThis:this},u}return i.clear=function(){r=null},i}var ti={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},ni=function(e){return C("span",y({css:ti},e))},We=ni,ri={guidance:function(e){var r=e.isSearchable,i=e.isMulti,t=e.tabSelectsValue,a=e.context,u=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,i=e.label,t=i===void 0?"":i,a=e.labels,u=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var r=e.context,i=e.focused,t=e.options,a=e.label,u=a===void 0?"":a,l=e.selectValue,o=e.isDisabled,s=e.isSelected,c=e.isAppleDevice,d=function(b,h){return b&&b.length?"".concat(b.indexOf(h)+1," of ").concat(b.length):""};if(r==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,i),".");if(r==="menu"&&c){var m=o?" disabled":"",v="".concat(s?" selected":"").concat(m);return"".concat(u).concat(v,", ").concat(d(t,i),".")}return""},onFilter:function(e){var r=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},ii=function(e){var r=e.ariaSelection,i=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,u=e.isFocused,l=e.selectValue,o=e.selectProps,s=e.id,c=e.isAppleDevice,d=o.ariaLiveMessages,m=o.getOptionLabel,v=o.inputValue,x=o.isMulti,b=o.isOptionDisabled,h=o.isSearchable,g=o.menuIsOpen,D=o.options,F=o.screenReaderStatus,O=o.tabSelectsValue,I=o.isLoading,P=o["aria-label"],A=o["aria-live"],w=p.useMemo(function(){return S(S({},ri),d||{})},[d]),M=p.useMemo(function(){var k="";if(r&&w.onChange){var L=r.option,z=r.options,H=r.removedValue,q=r.removedValues,K=r.value,re=function(G){return Array.isArray(G)?null:G},R=H||L||re(K),j=R?m(R):"",W=z||q||void 0,Z=W?W.map(m):[],_=S({isDisabled:R&&b(R,l),label:j,labels:Z},r);k=w.onChange(_)}return k},[r,w,b,l,m]),T=p.useMemo(function(){var k="",L=i||t,z=!!(i&&l&&l.includes(i));if(L&&w.onFocus){var H={focused:L,label:m(L),isDisabled:b(L,l),isSelected:z,options:a,context:L===i?"menu":"value",selectValue:l,isAppleDevice:c};k=w.onFocus(H)}return k},[i,t,m,b,w,a,l,c]),B=p.useMemo(function(){var k="";if(g&&D.length&&!I&&w.onFilter){var L=F({count:a.length});k=w.onFilter({inputValue:v,resultsMessage:L})}return k},[a,v,g,w,D,F,I]),$=(r==null?void 0:r.action)==="initial-input-focus",U=p.useMemo(function(){var k="";if(w.guidance){var L=t?"value":g?"menu":"input";k=w.guidance({"aria-label":P,context:L,isDisabled:i&&b(i,l),isMulti:x,isSearchable:h,tabSelectsValue:O,isInitialFocus:$})}return k},[P,i,t,x,b,h,g,w,l,O,$]),N=C(p.Fragment,null,C("span",{id:"aria-selection"},M),C("span",{id:"aria-focused"},T),C("span",{id:"aria-results"},B),C("span",{id:"aria-guidance"},U));return C(p.Fragment,null,C(We,{id:s},$&&N),C(We,{"aria-live":A,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!$&&N))},oi=ii,Pe=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ai=new RegExp("["+Pe.map(function(n){return n.letters}).join("")+"]","g"),Dt={};for(var be=0;be<Pe.length;be++)for(var xe=Pe[be],Ee=0;Ee<xe.letters.length;Ee++)Dt[xe.letters[Ee]]=xe.base;var It=function(e){return e.replace(ai,function(r){return Dt[r]})},ui=ei(It),Ge=function(e){return e.replace(/^\s+|\s+$/g,"")},si=function(e){return"".concat(e.label," ").concat(e.value)},li=function(e){return function(r,i){if(r.data.__isNew__)return!0;var t=S({ignoreCase:!0,ignoreAccents:!0,stringify:si,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,u=t.ignoreAccents,l=t.stringify,o=t.trim,s=t.matchFrom,c=o?Ge(i):i,d=o?Ge(l(r)):l(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=ui(c),d=It(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},ci=["innerRef"];function di(n){var e=n.innerRef,r=X(n,ci),i=$n(r,"onExited","in","enter","exit","appear");return C("input",y({ref:e},i,{css:Ve({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var pi=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function fi(n){var e=n.isEnabled,r=n.onBottomArrive,i=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),o=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(h,g){if(s.current!==null){var D=s.current,F=D.scrollTop,O=D.scrollHeight,I=D.clientHeight,P=s.current,A=g>0,w=O-I-F,M=!1;w>g&&u.current&&(i&&i(h),u.current=!1),A&&l.current&&(a&&a(h),l.current=!1),A&&g>w?(r&&!u.current&&r(h),P.scrollTop=O,M=!0,u.current=!0):!A&&-g>F&&(t&&!l.current&&t(h),P.scrollTop=0,M=!0,l.current=!0),M&&pi(h)}},[r,i,t,a]),d=p.useCallback(function(h){c(h,h.deltaY)},[c]),m=p.useCallback(function(h){o.current=h.changedTouches[0].clientY},[]),v=p.useCallback(function(h){var g=o.current-h.changedTouches[0].clientY;c(h,g)},[c]),x=p.useCallback(function(h){if(h){var g=Rn?{passive:!1}:!1;h.addEventListener("wheel",d,g),h.addEventListener("touchstart",m,g),h.addEventListener("touchmove",v,g)}},[v,m,d]),b=p.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",m,!1),h.removeEventListener("touchmove",v,!1))},[v,m,d]);return p.useEffect(function(){if(e){var h=s.current;return x(h),function(){b(h)}}},[e,x,b]),function(h){s.current=h}}var Ye=["boxSizing","height","overflow","paddingRight","position"],Xe={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function qe(n){n.preventDefault()}function Ke(n){n.stopPropagation()}function Ze(){var n=this.scrollTop,e=this.scrollHeight,r=n+this.offsetHeight;n===0?this.scrollTop=1:r===e&&(this.scrollTop=n-1)}function Je(){return"ontouchstart"in window||navigator.maxTouchPoints}var Qe=!!(typeof window<"u"&&window.document&&window.document.createElement),te=0,ee={capture:!1,passive:!1};function hi(n){var e=n.isEnabled,r=n.accountForScrollbars,i=r===void 0?!0:r,t=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(o){if(Qe){var s=document.body,c=s&&s.style;if(i&&Ye.forEach(function(x){var b=c&&c[x];t.current[x]=b}),i&&te<1){var d=parseInt(t.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,v=window.innerWidth-m+d||0;Object.keys(Xe).forEach(function(x){var b=Xe[x];c&&(c[x]=b)}),c&&(c.paddingRight="".concat(v,"px"))}s&&Je()&&(s.addEventListener("touchmove",qe,ee),o&&(o.addEventListener("touchstart",Ze,ee),o.addEventListener("touchmove",Ke,ee))),te+=1}},[i]),l=p.useCallback(function(o){if(Qe){var s=document.body,c=s&&s.style;te=Math.max(te-1,0),i&&te<1&&Ye.forEach(function(d){var m=t.current[d];c&&(c[d]=m)}),s&&Je()&&(s.removeEventListener("touchmove",qe,ee),o&&(o.removeEventListener("touchstart",Ze,ee),o.removeEventListener("touchmove",Ke,ee)))}},[i]);return p.useEffect(function(){if(e){var o=a.current;return u(o),function(){l(o)}}},[e,u,l]),function(o){a.current=o}}var mi=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},vi={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function gi(n){var e=n.children,r=n.lockEnabled,i=n.captureEnabled,t=i===void 0?!0:i,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,o=n.onTopLeave,s=fi({isEnabled:t,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:o}),c=hi({isEnabled:r}),d=function(v){s(v),c(v)};return C(p.Fragment,null,r&&C("div",{onClick:mi,css:vi}),e(d))}var bi={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},xi=function(e){var r=e.name,i=e.onFocus;return C("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:bi,value:"",onChange:function(){}})},Ei=xi;function Re(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ci(){return Re(/^iPhone/i)}function Pt(){return Re(/^Mac/i)}function Si(){return Re(/^iPad/i)||Pt()&&navigator.maxTouchPoints>1}function yi(){return Ci()||Si()}function wi(){return Pt()||yi()}var Fi=function(e){return e.label},Oi=function(e){return e.label},Di=function(e){return e.value},Ii=function(e){return!!e.isDisabled},Pi={clearIndicator:dr,container:er,control:br,dropdownIndicator:lr,group:Sr,groupHeading:wr,indicatorsContainer:ir,indicatorSeparator:fr,input:Ir,loadingIndicator:vr,loadingMessage:qn,menu:zn,menuList:Gn,menuPortal:Jn,multiValue:Lr,multiValueLabel:Rr,multiValueRemove:kr,noOptionsMessage:Xn,option:_r,placeholder:Nr,singleValue:Yr,valueContainer:nr},Ai={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Mi=4,At=4,Vi=38,Li=At*2,Ri={baseUnit:At,controlHeight:Vi,menuGutter:Li},Ce={borderRadius:Mi,colors:Ai,spacing:Ri},ki={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:ze(),captureMenuScroll:!ze(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:li(),formatGroupLabel:Fi,getOptionLabel:Oi,getOptionValue:Di,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Ii,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Vn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function et(n,e,r,i){var t=Lt(n,e,r),a=Rt(n,e,r),u=Vt(n,e),l=me(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:u,value:l,index:i}}function le(n,e){return n.options.map(function(r,i){if("options"in r){var t=r.options.map(function(u,l){return et(n,u,e,l)}).filter(function(u){return nt(n,u)});return t.length>0?{type:"group",data:r,options:t,index:i}:void 0}var a=et(n,r,e,i);return nt(n,a)?a:void 0}).filter(kn)}function Mt(n){return n.reduce(function(e,r){return r.type==="group"?e.push.apply(e,Me(r.options.map(function(i){return i.data}))):e.push(r.data),e},[])}function tt(n,e){return n.reduce(function(r,i){return i.type==="group"?r.push.apply(r,Me(i.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(i.index,"-").concat(t.index)}}))):r.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),r},[])}function Ti(n,e){return Mt(le(n,e))}function nt(n,e){var r=n.inputValue,i=r===void 0?"":r,t=e.data,a=e.isSelected,u=e.label,l=e.value;return(!Tt(n)||!a)&&kt(n,{label:u,value:l,data:t},i)}function $i(n,e){var r=n.focusedValue,i=n.selectValue,t=i.indexOf(r);if(t>-1){var a=e.indexOf(r);if(a>-1)return r;if(t<e.length)return e[t]}return null}function Bi(n,e){var r=n.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var Se=function(e,r){var i,t=(i=e.find(function(a){return a.data===r}))===null||i===void 0?void 0:i.id;return t||null},Vt=function(e,r){return e.getOptionLabel(r)},me=function(e,r){return e.getOptionValue(r)};function Lt(n,e,r){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,r):!1}function Rt(n,e,r){if(r.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,r);var i=me(n,e);return r.some(function(t){return me(n,t)===i})}function kt(n,e,r){return n.filterOption?n.filterOption(e,r):!0}var Tt=function(e){var r=e.hideSelectedOptions,i=e.isMulti;return r===void 0?i:r},ji=1,$t=function(n){vn(r,n);var e=xn(r);function r(i){var t;if(hn(this,r),t=e.call(this,i),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=wi(),t.controlRef=null,t.getControlRef=function(o){t.controlRef=o},t.focusedOptionRef=null,t.getFocusedOptionRef=function(o){t.focusedOptionRef=o},t.menuListRef=null,t.getMenuListRef=function(o){t.menuListRef=o},t.inputRef=null,t.getInputRef=function(o){t.inputRef=o},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(o,s){var c=t.props,d=c.onChange,m=c.name;s.name=m,t.ariaOnChange(o,s),d(o,s)},t.setValue=function(o,s,c){var d=t.props,m=d.closeMenuOnSelect,v=d.isMulti,x=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:x}),m&&(t.setState({inputIsHiddenAfterUpdate:!v}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(o,{action:s,option:c})},t.selectOption=function(o){var s=t.props,c=s.blurInputOnSelect,d=s.isMulti,m=s.name,v=t.state.selectValue,x=d&&t.isOptionSelected(o,v),b=t.isOptionDisabled(o,v);if(x){var h=t.getOptionValue(o);t.setValue(v.filter(function(g){return t.getOptionValue(g)!==h}),"deselect-option",o)}else if(!b)d?t.setValue([].concat(Me(v),[o]),"select-option",o):t.setValue(o,"select-option");else{t.ariaOnChange(o,{action:"select-option",option:o,name:m});return}c&&t.blurInput()},t.removeValue=function(o){var s=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(o),m=c.filter(function(x){return t.getOptionValue(x)!==d}),v=ue(s,m,m[0]||null);t.onChange(v,{action:"remove-value",removedValue:o}),t.focusInput()},t.clearValue=function(){var o=t.state.selectValue;t.onChange(ue(t.props.isMulti,[],null),{action:"clear",removedValues:o})},t.popValue=function(){var o=t.props.isMulti,s=t.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),m=ue(o,d,d[0]||null);t.onChange(m,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(o){return Se(t.state.focusableOptionsWithIds,o)},t.getFocusableOptionsWithIds=function(){return tt(le(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return Dn.apply(void 0,[t.props.classNamePrefix].concat(s))},t.getOptionLabel=function(o){return Vt(t.props,o)},t.getOptionValue=function(o){return me(t.props,o)},t.getStyles=function(o,s){var c=t.props.unstyled,d=Pi[o](s,c);d.boxSizing="border-box";var m=t.props.styles[o];return m?m(d,s):d},t.getClassNames=function(o,s){var c,d;return(c=(d=t.props.classNames)[o])===null||c===void 0?void 0:c.call(d,s)},t.getElementId=function(o){return"".concat(t.state.instancePrefix,"-").concat(o)},t.getComponents=function(){return Zr(t.props)},t.buildCategorizedOptions=function(){return le(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Mt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(o,s){t.setState({ariaSelection:S({value:o},s)})},t.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(o){t.blockOptionHover=!1},t.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&t.onMenuClose():s&&t.openMenu("first"):(s&&(t.openAfterFocus=!0),t.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},t.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!t.props.isDisabled){var s=t.props,c=s.isMulti,d=s.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),o.preventDefault()}},t.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(t.clearValue(),o.preventDefault(),t.openAfterFocus=!1,o.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(o){typeof t.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&ve(o.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(o)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(o){var s=o.touches,c=s&&s.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(o){var s=o.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),m=Math.abs(c.clientY-t.initialTouchY),v=5;t.userIsDragging=d>v||m>v}},t.onTouchEnd=function(o){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(o.target)&&t.menuListRef&&!t.menuListRef.contains(o.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(o){t.userIsDragging||t.onControlMouseDown(o)},t.onClearIndicatorTouchEnd=function(o){t.userIsDragging||t.onClearIndicatorMouseDown(o)},t.onDropdownIndicatorTouchEnd=function(o){t.userIsDragging||t.onDropdownIndicatorMouseDown(o)},t.handleInputChange=function(o){var s=t.props.inputValue,c=o.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:s}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(o){t.props.onFocus&&t.props.onFocus(o),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(o){var s=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(o),t.onInputChange("",{action:"input-blur",prevInputValue:s}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(o){if(!(t.blockOptionHover||t.state.focusedOption===o)){var s=t.getFocusableOptions(),c=s.indexOf(o);t.setState({focusedOption:o,focusedOptionId:c>-1?t.getFocusedOptionId(o):null})}},t.shouldHideSelectedOptions=function(){return Tt(t.props)},t.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),t.focus()},t.onKeyDown=function(o){var s=t.props,c=s.isMulti,d=s.backspaceRemovesValue,m=s.escapeClearsValue,v=s.inputValue,x=s.isClearable,b=s.isDisabled,h=s.menuIsOpen,g=s.onKeyDown,D=s.tabSelectsValue,F=s.openMenuOnFocus,O=t.state,I=O.focusedOption,P=O.focusedValue,A=O.selectValue;if(!b&&!(typeof g=="function"&&(g(o),o.defaultPrevented))){switch(t.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||v)return;t.focusValue("previous");break;case"ArrowRight":if(!c||v)return;t.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(P)t.removeValue(P);else{if(!d)return;c?t.popValue():x&&t.clearValue()}break;case"Tab":if(t.isComposing||o.shiftKey||!h||!D||!I||F&&t.isOptionSelected(I,A))return;t.selectOption(I);break;case"Enter":if(o.keyCode===229)break;if(h){if(!I||t.isComposing)return;t.selectOption(I);break}return;case"Escape":h?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:v}),t.onMenuClose()):x&&m&&t.clearValue();break;case" ":if(v)return;if(!h){t.openMenu("first");break}if(!I)return;t.selectOption(I);break;case"ArrowUp":h?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":h?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!h)return;t.focusOption("pageup");break;case"PageDown":if(!h)return;t.focusOption("pagedown");break;case"Home":if(!h)return;t.focusOption("first");break;case"End":if(!h)return;t.focusOption("last");break;default:return}o.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++ji),t.state.selectValue=He(i.value),i.menuIsOpen&&t.state.selectValue.length){var a=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),l=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=a,t.state.focusedOption=u[l],t.state.focusedOptionId=Se(a,u[l])}return t}return mn(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&_e(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&t.isDisabled||o&&l&&!t.menuIsOpen)&&this.focusInput(),o&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(_e(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,u=this.state,l=u.selectValue,o=u.isFocused,s=this.buildFocusableOptions(),c=t==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(l);l||(o=-1);var s=u.length-1,c=-1;if(u.length){switch(t){case"previous":o===0?c=0:o===-1?c=s:c=o-1;break;case"next":o>-1&&o<s&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var o=0,s=l.indexOf(u);u||(s=-1),t==="up"?o=s>0?s-1:l.length-1:t==="down"?o=(s+1)%l.length:t==="pageup"?(o=s-a,o<0&&(o=0)):t==="pagedown"?(o=s+a,o>l.length-1&&(o=l.length-1)):t==="last"&&(o=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ce):S(S({},Ce),this.props.theme):Ce}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,o=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,m=d.isMulti,v=d.isRtl,x=d.options,b=this.hasValue();return{clearValue:t,cx:a,getStyles:u,getClassNames:l,getValue:o,hasValue:b,isMulti:m,isRtl:v,options:x,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,u=t.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(t,a){return Lt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return Rt(this.props,t,a)}},{key:"filterOption",value:function(t,a){return kt(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,u=t.isSearchable,l=t.inputId,o=t.inputValue,s=t.tabIndex,c=t.form,d=t.menuIsOpen,m=t.required,v=this.getComponents(),x=v.Input,b=this.state,h=b.inputIsHidden,g=b.ariaSelection,D=this.commonProps,F=l||this.getElementId("input"),O=S(S(S({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(x,y({},D,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:F,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:o},O)):p.createElement(di,y({id:F,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:fe,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,o=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,m=this.commonProps,v=this.props,x=v.controlShouldRenderValue,b=v.isDisabled,h=v.isMulti,g=v.inputValue,D=v.placeholder,F=this.state,O=F.selectValue,I=F.focusedValue,P=F.isFocused;if(!this.hasValue()||!x)return g?null:p.createElement(d,y({},m,{key:"placeholder",isDisabled:b,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),D);if(h)return O.map(function(w,M){var T=w===I,B="".concat(t.getOptionLabel(w),"-").concat(t.getOptionValue(w));return p.createElement(u,y({},m,{components:{Container:l,Label:o,Remove:s},isFocused:T,isDisabled:b,key:B,index:M,removeProps:{onClick:function(){return t.removeValue(w)},onTouchEnd:function(){return t.removeValue(w)},onMouseDown:function(U){U.preventDefault()}},data:w}),t.formatOptionLabel(w,"value"))});if(g)return null;var A=O[0];return p.createElement(c,y({},m,{data:A,isDisabled:b}),this.formatOptionLabel(A,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,u=t.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,y({},l,{isDisabled:o,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,o=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:s,isDisabled:l,isFocused:o}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,o=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,m=a.NoOptionsMessage,v=a.Option,x=this.commonProps,b=this.state.focusedOption,h=this.props,g=h.captureMenuScroll,D=h.inputValue,F=h.isLoading,O=h.loadingMessage,I=h.minMenuHeight,P=h.maxMenuHeight,A=h.menuIsOpen,w=h.menuPlacement,M=h.menuPosition,T=h.menuPortalTarget,B=h.menuShouldBlockScroll,$=h.menuShouldScrollIntoView,U=h.noOptionsMessage,N=h.onMenuScrollToTop,k=h.onMenuScrollToBottom;if(!A)return null;var L=function(j,W){var Z=j.type,_=j.data,J=j.isDisabled,G=j.isSelected,ie=j.label,Bt=j.value,ke=b===_,Te=J?void 0:function(){return t.onOptionHover(_)},jt=J?void 0:function(){return t.selectOption(_)},$e="".concat(t.getElementId("option"),"-").concat(W),Ht={id:$e,onClick:jt,onMouseMove:Te,onMouseOver:Te,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:G};return p.createElement(v,y({},x,{innerProps:Ht,data:_,isDisabled:J,isSelected:G,key:$e,label:ie,type:Z,value:Bt,isFocused:ke,innerRef:ke?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(j.data,"menu"))},z;if(this.hasOptions())z=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var j=R.data,W=R.options,Z=R.index,_="".concat(t.getElementId("group"),"-").concat(Z),J="".concat(_,"-heading");return p.createElement(u,y({},x,{key:_,data:j,options:W,Heading:l,headingProps:{id:J,data:R.data},label:t.formatGroupLabel(R.data)}),R.options.map(function(G){return L(G,"".concat(Z,"-").concat(G.index))}))}else if(R.type==="option")return L(R,"".concat(R.index))});else if(F){var H=O({inputValue:D});if(H===null)return null;z=p.createElement(d,x,H)}else{var q=U({inputValue:D});if(q===null)return null;z=p.createElement(m,x,q)}var K={minMenuHeight:I,maxMenuHeight:P,menuPlacement:w,menuPosition:M,menuShouldScrollIntoView:$},re=p.createElement(Un,y({},x,K),function(R){var j=R.ref,W=R.placerProps,Z=W.placement,_=W.maxHeight;return p.createElement(o,y({},x,K,{innerRef:j,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:F,placement:Z}),p.createElement(gi,{captureEnabled:g,onTopArrive:N,onBottomArrive:k,lockEnabled:B},function(J){return p.createElement(s,y({},x,{innerRef:function(ie){t.getMenuListRef(ie),J(ie)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:t.getElementId("listbox")},isLoading:F,maxHeight:_,focusedOption:b}),z)}))});return T||M==="fixed"?p.createElement(c,y({},x,{appendTo:T,controlElement:this.controlRef,menuPlacement:w,menuPosition:M}),re):re}},{key:"renderFormField",value:function(){var t=this,a=this.props,u=a.delimiter,l=a.isDisabled,o=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Ei,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(o)if(u){var m=d.map(function(b){return t.getOptionValue(b)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:m})}else{var v=d.length>0?d.map(function(b,h){return p.createElement("input",{key:"i-".concat(h),name:s,type:"hidden",value:t.getOptionValue(b)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,v)}else{var x=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,o=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(oi,y({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:o,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,u=t.IndicatorsContainer,l=t.SelectContainer,o=t.ValueContainer,s=this.props,c=s.className,d=s.id,m=s.isDisabled,v=s.menuIsOpen,x=this.state.isFocused,b=this.commonProps=this.getCommonProps();return p.createElement(l,y({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:x}),this.renderLiveRegion(),p.createElement(a,y({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:x,menuIsOpen:v}),p.createElement(o,y({},b,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,y({},b,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,m=a.instancePrefix,v=t.options,x=t.value,b=t.menuIsOpen,h=t.inputValue,g=t.isMulti,D=He(x),F={};if(u&&(x!==u.value||v!==u.options||b!==u.menuIsOpen||h!==u.inputValue)){var O=b?Ti(t,D):[],I=b?tt(le(t,D),"".concat(m,"-option")):[],P=l?$i(a,D):null,A=Bi(a,O),w=Se(I,A);F={selectValue:D,focusedOption:A,focusedOptionId:w,focusableOptionsWithIds:I,focusedValue:P,clearFocusValueOnUpdate:!1}}var M=o!=null&&t!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},T=s,B=c&&d;return c&&!B&&(T={value:ue(g,D,D[0]||null),options:D,action:"initial-input-focus"},B=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(T=null),S(S(S({},F),M),{},{prevProps:t,ariaSelection:T,prevWasFocused:B})}}]),r}(p.Component);$t.defaultProps=ki;var Hi=p.forwardRef(function(n,e){var r=fn(n);return p.createElement($t,y({ref:e},r))}),rt=Hi;const _i=E.form`
  display: flex;
  flex-direction: column;
  gap: ${n=>n.theme.spacing(4)};
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 664px;
    flex-direction: row;
  }
`,zi=E.p`
  display: none;

  @media screen and (min-width: 1440px) {
    position: absolute;
    display: block;
    top: -22px;
    right: 0px;
    color: ${n=>n.theme.colors.fornCaptionColor};
    font-size: 14px;
    text-align: right;
  }
`,Ui=E.input`
  width: 100%;
  padding: ${n=>n.theme.spacing(3)};
  color: ${n=>n.theme.colors.whiteColor};
  border: 1px solid ${n=>n.theme.colors.cardBorderColor};
  border-radius: ${n=>n.theme.radii.ld};
  outline: none;
  background: transparent;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.29em;

  &::placeholder {
    color: inherit;
  }

  &:hover,
  &:focus {
    border-color: ${n=>n.theme.colors.hoverColor};
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    line-height: 1.5em;
  }
`,Ni=E.button`
  height: 18px;
  position: absolute;
  padding: 0px;
  border-color: transparent;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    right: 36px;
    top: 14px;
  }

  @media screen and (min-width: 768px) {
    left: 168px;
  }
`,Wi=E.svg`
  width: 18px;
  height: 18px;
  stroke: #e6533c;
`,Gi=E.button`
  transform: translateX(-30px);
  height: 18px;
  position: absolute;
  padding: 0px;
  border-color: transparent;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    right: 14px;
    top: 14px;
  }

  @media screen and (min-width: 768px) {
    left: 192px;
  }
`,Yi=E.svg`
  width: 18px;
  height: 18px;
`,Xi=E.div`
  display: flex;
  width: 100%;
  gap: ${n=>n.theme.spacing(4)};
`,ye="#1c1c1c",se="#efede8",qi="rgba(239, 237, 232, 0.1)",it={option:n=>({...n,background:ye,color:se,textwrap:"nowrap"}),control:n=>({...n,backgroundColor:"transparent",borderRadius:"12px",width:"100%",height:"46px",border:"1px solid rgba(239, 237, 232, 0.2)",boxShadow:"none","&:hover":{borderColor:"#E6533C"},"&:focus":{borderColor:"#E6533C"},"@media (min-width: 768px)":{height:"50px"}}),dropdownIndicator:n=>({...n,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:se}}),menu:n=>({...n,background:ye,borderRadius:"12px"}),menuList:n=>({...n,"::-webkit-scrollbar":{width:"22px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:qi,borderRadius:"12px",border:"7px solid",borderColor:ye},maxHeight:"276px",borderRadius:"12px",overflowX:"hidden"}),indicatorSeparator:n=>({...n,display:"none"}),placeholder:n=>({...n,color:se}),singleValue:n=>({...n,color:se}),container:n=>({...n,display:"flex",alignItems:"center",border:"1px",height:"46px",width:"100%","&:hover":{borderColor:"#E6533C"},"&:focus":{borderColor:"#E6533C"},"@media (min-width: 768px)":{height:"50px"}}),input:n=>({...n,fontSize:"14px"})},ot=[{value:"",label:"All"},{value:"recommended",label:"Recommended"},{value:"not recommended",label:"Not recommended"}],Ki=()=>{const n=Ae(),e=ce(on),i=qt({initialValues:{title:"",category:"",type:""},validate:l=>{l.title&&l.title.length<2},onSubmit:l=>a(l)}),t=(l,o)=>l?l.find(s=>s.value==o):"",a=l=>{n(Ut(l)),n(ct())},u=(l,o)=>{i.setFieldValue(l,o.value);const{initialValues:s,values:c}=i;if(o.value!==s[o.value]){const d={...c,[l]:o.value};a(d)}};return f.jsxs(_i,{onSubmit:i.handleSubmit,children:[f.jsx(Ui,{type:"text",name:"title",placeholder:"Search",value:i.values.title.trim(),onChange:i.handleChange}),i.values.title.trim()!==""&&f.jsx(Ni,{type:"button",onClick:()=>{i.setFieldValue("title",""),a("title")},children:f.jsx(Wi,{children:f.jsx("use",{href:`${de}#icon-x`})})}),f.jsx(Gi,{type:"submit",children:f.jsx(Yi,{children:f.jsx("use",{href:`${de}#icon-search`})})}),f.jsxs(Xi,{children:[f.jsx(rt,{value:t(e,i.values.category),onChange:l=>u("category",l),options:e,placeholder:"Categories",styles:it}),f.jsx(rt,{value:t(ot,i.values.type),onChange:l=>u("type",l),options:ot,styles:it})]}),f.jsx(zi,{children:"Filters"})]})},Zi=n=>n.$recommended?n.theme.colors.recommendedColor:n.theme.colors.notRecommendedColor,Ji=E.div`
  height: 141px;
  padding: ${n=>n.theme.spacing(4)};
  border: 1px solid ${n=>n.theme.colors.cardBorderColor};
  border-radius: ${n=>n.theme.radii.ld};
  background-color: ${n=>n.theme.colors.cardBgColor};
  word-wrap: break-word;
  font-size: 12px;

  @media screen and (max-width: 335px) {
    max-width: 320px;
    width: 100%;
  }
  @media screen and (min-width: 335px) {
    width: 335px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,Qi=E.div`
  display: flex;
  margin-bottom: ${n=>n.theme.spacing(6)};
  align-items: baseline;
  justify-content: space-between;
`,eo=E.span`
  margin-right: auto;
  border-radius: ${n=>n.theme.radii.sd};
  padding: 7px 5px;
  /* width: 40px; */
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${n=>n.theme.colors.cardBgColor};
`,to=E.span`
  margin-right: ${n=>n.theme.spacing(2)};
  display: block;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${Zi};
`,at=E.p`
  margin-right: ${n=>n.theme.spacing(4)};
  color: ${n=>n.theme.colors.whiteColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::first-letter {
    text-transform: uppercase;
  }
`,no=E.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  color: ${n=>n.theme.colors.hoverColor};
  background: transparent;
`,ro=E.svg`
  margin-left: ${n=>n.theme.spacing(2)};
  width: 16px;
  height: 16px;
`,io=E.div`
  display: flex;
  column-gap: ${n=>n.theme.spacing(4)};
  height: 32px;
  overflow-y: hidden;
  margin-bottom: ${n=>n.theme.spacing(2)};

  @media screen and (max-width: 375px) {
    max-width: 303px;
  }
`,oo=E.p`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,ao=E.svg`
  width: 24px;
  height: 24px;
`,uo=E.div`
  display: flex;
  height: 18px;
  overflow-y: hidden;
  overflow-x: hidden;

  @media screen and (max-width: 375px) {
    max-width: 303px;
  }
`,we=E.div`
  display: flex;
  justify-content: space-between;
  height: 18px;
  overflow-y: hidden;
  overflow-x: hidden;
`,Fe=E.p`
  color: ${n=>n.theme.colors.captionColor};
`,ut=E.p`
  margin-right: ${n=>n.theme.spacing(4)};
  color: ${n=>n.theme.colors.whiteColor};

  &::first-letter {
    text-transform: uppercase;
  }
`,so=({product:{_id:n,title:e,calories:r,category:i,weight:t,recommended:a=!0},toggleModal:u})=>f.jsxs(Ji,{children:[f.jsxs(Qi,{children:[f.jsx(eo,{children:"diet"}),f.jsx(to,{$recommended:a}),f.jsx(at,{children:f.jsx("b",{children:a?"Recommended":"Not recommended"})}),f.jsxs(no,{onClick:()=>u({_id:n,title:e,calories:r,category:i,weight:t}),children:["Add",f.jsx(ro,{children:f.jsx("use",{href:`${de}#icon-arrow-right`})})]})]}),f.jsxs(io,{children:[f.jsx(ao,{children:f.jsx("use",{href:`${de}#icon-run-exercises`})}),f.jsx(oo,{children:e})]}),f.jsxs(uo,{children:[f.jsxs(we,{children:[f.jsx(Fe,{children:"Calories:"})," ",f.jsx(ut,{children:r})]}),f.jsxs(we,{children:[f.jsx(Fe,{children:"Category: "})," ",f.jsx(at,{children:i})]}),f.jsxs(we,{children:[f.jsx(Fe,{children:"Weight:"})," ",f.jsx(ut,{children:t})]})]})]}),lo=E.ul`
  display: flex;
  flex-wrap: wrap;
  color: #efede8;
  row-gap: 32px;
  column-gap: 16px;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    width: 708px;
    height: 660px;
    column-gap: 16px;
    row-gap: 32px;
    overflow-y: scroll;

    //общее
    &::-webkit-scrollbar {
      width: 22px;
      height: 167px;
    }

    //дорожка
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    //бегунок
    &::-webkit-scrollbar-thumb {
      background: ${n=>n.theme.colors.orangeLightColor};
      border-radius: 12px;
      border: 7px solid ${n=>n.theme.colors.blackColor};
    }
  }

  @media screen and (min-width: 1440px) {
    //общее
    &::-webkit-scrollbar {
      width: 22px;
      height: 167px;
    }

    width: 850px;
    height: 487px;
  }
`,co=E.li`
  width: 100%;

  @media screen and (max-width: 335px) {
    max-width: 320px;
  }
  @media screen and (min-width: 335px) {
    width: 335px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,po=E(dt)`
`,fo=E.div`
  padding: 48px 24px;

  
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,ho=E.div`
  position: relative;

   @media screen and (min-width: 374px) {
    width: 287px;
    height: 34px;
  };

  
  @media screen and (min-width: 768px) {
    width: 415px;
  }
`,mo=E.input`
  width: 100%;
  text-align: left;
  padding: 8px 14px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid ${n=>n.theme.colors.orangeColor};
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${n=>n.theme.colors.grayInput};

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 244px;
    margin-right: 16px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,vo=E.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`,go=E.input`
  width: 100%;

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid ${n=>n.theme.colors.orangeColor};
  background: rgba(0, 0, 0, 0.5);
  color: ${n=>n.theme.colors.whiteColor};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 155px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,bo=E.span`
  position: absolute;
  right: 16px;
  top: 59px;

  color: ${n=>n.theme.colors.captionColor};
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: 768px) {
    right: 16px;
    top: 12px;
  }
`,xo=E.p`
  color: ${n=>n.theme.colors.captionColor};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,Eo=E.span`
display: block;
color: ${n=>n.theme.colors.whiteColor};
  font-size: 12px;
  line-height: calc(18 / 12);
`,Co=E.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,So=E.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,yo=E.button`
  padding: 12px 22px;
  border: none;
  color: ${n=>n.theme.colors.whiteColor};

  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  background: ${n=>n.theme.colors.orangeColor};
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${n=>n.theme.colors.orangeColor};
    background: ${n=>n.theme.colors.whiteColor};
  }
  
  @media screen and (max-width: 374px) {
    padding: 12px 32px;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,wo=E.button`
  padding: 12px 26px;
  border-radius: 12px;
  border: 1px solid ${n=>n.theme.colors.grayInput};
  background: transparent;
  color: ${n=>n.theme.colors.whiteColor};
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${n=>n.theme.colors.orangeColor};
    background: ${n=>n.theme.colors.whiteColor};
  }

  @media screen and (max-width: 374px) {
    padding: 12px 32px;
  }

  @media screen and (min-width: 768px) {
    width: 142px;
    padding: 14px 32px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Fo=({onToggle:n,exerciseInfo:e,setIsSuccessOpen:r,setDairyProduct:i})=>{console.log(e);const t=Ae(),{weight:a,calories:u,_id:l,title:o}=e,[s,c]=p.useState(a),d=Math.round(s*u/100),m=()=>{if(!d)return;const v={productId:l,amount:s,calories:d};console.log(v),t(Nt(v)),i({calories:v.calories}),r(),n()};return f.jsx(po,{modalStyles:{maxWidth:"479px",width:"100%",height:"280px"},modalTabletStyles:{width:"479",height:"291px"},modalDesktopStyles:{width:"479px",height:"286px"},onClose:n,children:f.jsxs(fo,{children:[f.jsxs(ho,{children:[f.jsx(mo,{type:"text",value:o,readOnly:!0,disabled:!0}),f.jsxs(vo,{children:[f.jsx(go,{type:"number",value:s,onChange:v=>{c(v.target.value)}}),f.jsx(bo,{children:"grams"})]})]}),f.jsxs(So,{children:[f.jsx(xo,{children:"Calories:"}),f.jsx(Eo,{children:d})]}),f.jsxs(Co,{children:[f.jsx(yo,{onClick:m,children:"Add to diary"}),f.jsx(wo,{onClick:n,children:"Cancel"})]})]})})},Oo="/project-Power-7/assets/avocado-1x-2290870f.png",Do=E(dt)`

`,Io=E.button`
  border-radius: 12px;
  background: #e6533c;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 16px;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  transition: color 0.2s ;

  @media screen and (min-width: 768px) {
    padding: 16px 32px;
  }

  &:hover,
  &:focus {
    background: #ef8964;
    transform: scale(1);
    color: #efede8;
  }
`,Po=E.img`
  width: 118px;
  height: 73px;
  margin-bottom: 27px;
  margin-top: 48px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 64px;
  }
`,Ao=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Mo=E.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`,Vo=E.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Lo=E.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  :not(:last-of-type) {
    margin-bottom: 4px;
  }
`,Ro=E.span`
  color: #e6533c;
`,ko=E.div`
  margin-bottom: 16px;
`,To=E(Wt)`
cursor: pointer;
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  transition: color 0.2s ;
  
  &:hover,
  &:focus {
    color: #EFEDE8; 
    transform: scale(1);

  }
`,$o=({calories:n,onClose:e})=>f.jsx(Do,{modalStyles:{maxWidth:"430px",width:"100%",height:"384px"},modalTabletStyles:{width:"430px",height:"439px"},modalDesktopStyles:{width:"430px",height:"439px"},onClose:e,children:f.jsxs(Ao,{children:[f.jsx(Po,{src:Oo,alt:"Category Image"}),f.jsxs(Vo,{children:[f.jsx(Mo,{children:"Well done"}),f.jsx("ul",{children:f.jsxs(Lo,{children:["Calories:",f.jsx(Ro,{children:n||0})]})})]}),f.jsx(ko,{children:f.jsx(Io,{onClick:e,children:"Next product "})}),f.jsxs(To,{to:"/diary",children:["To the diary",f.jsx("svg",{width:" 16px",height:"16px",children:f.jsx("use",{href:`${Gt}#arrow_gray`})})]})]})}),Bo=()=>{const n=ce(pt),e=ce(rn),[r,i]=p.useState(!1),[t,a]=p.useState(!1),[u,l]=p.useState(null),[o,s]=p.useState({calories:0}),c=d=>{i(m=>!m),l(d)};return f.jsxs("div",{children:[e&&f.jsx(Yt,{}),f.jsx(lo,{children:n.map(d=>f.jsx(co,{children:f.jsx(so,{product:d,toggleModal:c})},d._id))}),r&&f.jsx(Fo,{onToggle:c,setIsSuccessOpen:()=>a(d=>!d),exerciseInfo:u,setDairyProduct:s}),t&&f.jsx($o,{onClose:()=>a(d=>!d),calories:o.calories})]})},jo=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 375px) {
    width: 335px;
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    width: 580px;
    margin-top: 92px;
  }
`,st=E.p`
  color: ${n=>n.theme.colors.accentColor};
  @media screen and (min-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,lt=E.span`
  color: ${n=>n.theme.colors.orangeColor};
`,Ho=()=>f.jsxs(jo,{children:[f.jsxs(st,{children:[f.jsx(lt,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),f.jsx(st,{children:f.jsx(lt,{children:"Try changing the search parameters."})})]}),_o=E.div`
  padding: 40px 20px;

  @media screen and (min-width: 375px) {
    padding: 40px 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 72px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 68px 95px;
  }
`,zo=E.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: ${n=>n.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${n=>n.theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: ${n=>n.theme.spacing(7)};
  }
`,Uo=E.h1`
  margin-bottom: ${n=>n.theme.spacing(8)};
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17em;
  color: ${n=>n.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37em;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;E.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const No=E.div`
  position: relative;
  z-index: 0;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${tn}) 1x, url(${nn}) 2x);
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 100vh;
    background-size: contain;
  }

  @media screen and (min-width: 1440px) and (max-height: 800px) {
    height: 800px;
  }
`,Wo=({children:n})=>f.jsx(No,{children:n}),Zo=()=>{const n=Ae(),e=ce(an);return p.useEffect(()=>{n(Xt()),n(ct())},[n]),f.jsx(Wo,{children:f.jsxs(_o,{children:[f.jsxs(zo,{children:[f.jsx(Uo,{children:"Products"}),f.jsx(Ki,{})]}),e?f.jsx(Bo,{}):f.jsx(Ho,{})]})})};export{Zo as default};
