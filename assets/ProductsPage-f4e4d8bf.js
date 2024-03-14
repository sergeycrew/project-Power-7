import{J as Ut,r as p,F as Nt,u as E,a as ve,b as Q,j as h,i as ie,K as Wt,M as dt,N as Me,O as Gt,P as Yt,L as qt,Q as Kt,S as Xt,C as Jt}from"./index-ae06053f.js";import{u as Zt}from"./formik.esm-14382953.js";import{h as Qt,E as en,c as tn,s as nn,_ as y,C as pt,B as rn}from"./ExercisesList.styled-5a7186bc.js";import{b as on}from"./floating-ui.dom-9d61e2db.js";const an="/project-Power-7/assets/products-desktop-1x-74f26ba3.png",un="/project-Power-7/assets/products-desktop-2x-c2e987ce.png",ft=n=>n.products.items,sn=n=>n.products.isLoading,ht=n=>n.categories.categories,ln=n=>n.categories.img,cn=n=>n.products.maxPage,dn=n=>n.products.productsPage,pn=Ut([ft],n=>n.length>0);function ee(n){"@babel/helpers - typeof";return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(n)}function fn(n,e){if(ee(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var i=r.call(n,e||"default");if(ee(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function mt(n){var e=fn(n,"string");return ee(e)=="symbol"?e:String(e)}function re(n,e,r){return e=mt(e),e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function je(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function S(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?je(Object(r),!0).forEach(function(i){re(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function hn(n){if(Array.isArray(n))return n}function mn(n,e){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var i,t,a,u,l=[],o=!0,s=!1;try{if(a=(r=r.call(n)).next,e===0){if(Object(r)!==r)return;o=!1}else for(;!(o=(i=a.call(r)).done)&&(l.push(i.value),l.length!==e);o=!0);}catch(c){s=!0,t=c}finally{try{if(!o&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw t}}return l}}function De(n,e){(e==null||e>n.length)&&(e=n.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=n[r];return i}function vt(n,e){if(n){if(typeof n=="string")return De(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return De(n,e)}}function vn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(n,e){return hn(n)||mn(n,e)||vt(n,e)||vn()}function gn(n,e){if(n==null)return{};var r={},i=Object.keys(n),t,a;for(a=0;a<i.length;a++)t=i[a],!(e.indexOf(t)>=0)&&(r[t]=n[t]);return r}function q(n,e){if(n==null)return{};var r=gn(n,e),i,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}var bn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function xn(n){var e=n.defaultInputValue,r=e===void 0?"":e,i=n.defaultMenuIsOpen,t=i===void 0?!1:i,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,o=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,v=n.onMenuOpen,g=n.value,b=q(n,bn),m=p.useState(l!==void 0?l:r),f=Y(m,2),x=f[0],D=f[1],w=p.useState(o!==void 0?o:t),O=Y(w,2),I=O[0],P=O[1],A=p.useState(g!==void 0?g:u),F=Y(A,2),M=F[0],T=F[1],B=p.useCallback(function(H,K){typeof s=="function"&&s(H,K),T(H)},[s]),$=p.useCallback(function(H,K){var X;typeof c=="function"&&(X=c(H,K)),D(X!==void 0?X:H)},[c]),U=p.useCallback(function(){typeof v=="function"&&v(),P(!0)},[v]),N=p.useCallback(function(){typeof d=="function"&&d(),P(!1)},[d]),k=l!==void 0?l:x,L=o!==void 0?o:I,z=g!==void 0?g:M;return S(S({},b),{},{inputValue:k,menuIsOpen:L,onChange:B,onInputChange:$,onMenuClose:N,onMenuOpen:U,value:z})}function En(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function He(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,mt(i.key),i)}}function Cn(n,e,r){return e&&He(n.prototype,e),r&&He(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function Ie(n,e){return Ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,t){return i.__proto__=t,i},Ie(n,e)}function Sn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ie(n,e)}function pe(n){return pe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},pe(n)}function gt(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(gt=function(){return!!n})()}function yn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Fn(n,e){if(e&&(ee(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yn(n)}function wn(n){var e=gt();return function(){var i=pe(n),t;if(e){var a=pe(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return Fn(this,t)}}function On(n){if(Array.isArray(n))return De(n)}function Dn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function In(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ve(n){return On(n)||Dn(n)||vt(n)||In()}var C=function(e,r){var i=arguments;if(r==null||!Qt.call(r,"css"))return p.createElement.apply(void 0,i);var t=i.length,a=new Array(t);a[0]=en,a[1]=tn(e,r);for(var u=2;u<t;u++)a[u]=i[u];return p.createElement.apply(null,a)};function Le(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return nn(e)}var Pn=function(){var e=Le.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function An(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var Pe=p.useLayoutEffect,Mn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],fe=function(){};function Vn(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Ln(n,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),t=2;t<r;t++)i[t-2]=arguments[t];var a=[].concat(i);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&a.push("".concat(Vn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var _e=function(e){return zn(e)?e.filter(Boolean):ee(e)==="object"&&e!==null?[e]:[]},bt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=q(e,Mn);return S({},r)},V=function(e,r,i){var t=e.cx,a=e.getStyles,u=e.getClassNames,l=e.className;return{css:a(r,e),className:t(i??{},u(r,e),l)}};function ge(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Rn(n){return ge(n)?window.innerHeight:n.clientHeight}function xt(n){return ge(n)?window.pageYOffset:n.scrollTop}function he(n,e){if(ge(n)){window.scrollTo(0,e);return}n.scrollTop=e}function kn(n){var e=getComputedStyle(n),r=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(r&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Tn(n,e,r,i){return r*((n=n/i-1)*n*n+1)+e}function ue(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:fe,t=xt(n),a=e-t,u=10,l=0;function o(){l+=u;var s=Tn(l,t,a,r);he(n,s),l<r?window.requestAnimationFrame(o):i(n)}o()}function ze(n,e){var r=n.getBoundingClientRect(),i=e.getBoundingClientRect(),t=e.offsetHeight/3;i.bottom+t>r.bottom?he(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):i.top-t<r.top&&he(n,Math.max(e.offsetTop-t,0))}function $n(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Ue(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Bn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Et=!1,jn={get passive(){return Et=!0}},se=typeof window<"u"?window:{};se.addEventListener&&se.removeEventListener&&(se.addEventListener("p",fe,jn),se.removeEventListener("p",fe,!1));var Hn=Et;function _n(n){return n!=null}function zn(n){return Array.isArray(n)}function le(n,e,r){return n?e:r}var Un=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),t=1;t<r;t++)i[t-1]=arguments[t];var a=Object.entries(e).filter(function(u){var l=Y(u,1),o=l[0];return!i.includes(o)});return a.reduce(function(u,l){var o=Y(l,2),s=o[0],c=o[1];return u[s]=c,u},{})},Nn=["children","innerProps"],Wn=["children","innerProps"];function Gn(n){var e=n.maxHeight,r=n.menuEl,i=n.minHeight,t=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,o=kn(r),s={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return s;var c=o.getBoundingClientRect(),d=c.height,v=r.getBoundingClientRect(),g=v.bottom,b=v.height,m=v.top,f=r.offsetParent.getBoundingClientRect(),x=f.top,D=u?window.innerHeight:Rn(o),w=xt(o),O=parseInt(getComputedStyle(r).marginBottom,10),I=parseInt(getComputedStyle(r).marginTop,10),P=x-I,A=D-m,F=P+w,M=d-w-m,T=g-D+w+O,B=w+m-I,$=160;switch(t){case"auto":case"bottom":if(A>=b)return{placement:"bottom",maxHeight:e};if(M>=b&&!u)return a&&ue(o,T,$),{placement:"bottom",maxHeight:e};if(!u&&M>=i||u&&A>=i){a&&ue(o,T,$);var U=u?A-O:M-O;return{placement:"bottom",maxHeight:U}}if(t==="auto"||u){var N=e,k=u?P:F;return k>=i&&(N=Math.min(k-O-l,e)),{placement:"top",maxHeight:N}}if(t==="bottom")return a&&he(o,T),{placement:"bottom",maxHeight:e};break;case"top":if(P>=b)return{placement:"top",maxHeight:e};if(F>=b&&!u)return a&&ue(o,B,$),{placement:"top",maxHeight:e};if(!u&&F>=i||u&&P>=i){var L=e;return(!u&&F>=i||u&&P>=i)&&(L=u?P-I:F-I),a&&ue(o,B,$),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return s}function Yn(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var Ct=function(e){return e==="auto"?"bottom":e},qn=function(e,r){var i,t=e.placement,a=e.theme,u=a.borderRadius,l=a.spacing,o=a.colors;return S((i={label:"menu"},re(i,Yn(t),"100%"),re(i,"position","absolute"),re(i,"width","100%"),re(i,"zIndex",1),i),r?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},St=p.createContext(null),Kn=function(e){var r=e.children,i=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,u=e.menuPosition,l=e.menuShouldScrollIntoView,o=e.theme,s=p.useContext(St)||{},c=s.setPortalPlacement,d=p.useRef(null),v=p.useState(t),g=Y(v,2),b=g[0],m=g[1],f=p.useState(null),x=Y(f,2),D=x[0],w=x[1],O=o.spacing.controlHeight;return Pe(function(){var I=d.current;if(I){var P=u==="fixed",A=l&&!P,F=Gn({maxHeight:t,menuEl:I,minHeight:i,placement:a,shouldScroll:A,isFixedPosition:P,controlHeight:O});m(F.maxHeight),w(F.placement),c==null||c(F.placement)}},[t,a,u,l,i,c,O]),r({ref:d,placerProps:S(S({},e),{},{placement:D||Ct(a),maxHeight:b})})},Xn=function(e){var r=e.children,i=e.innerRef,t=e.innerProps;return C("div",y({},V(e,"menu",{menu:!0}),{ref:i},t),r)},Jn=Xn,Zn=function(e,r){var i=e.maxHeight,t=e.theme.spacing.baseUnit;return S({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:t,paddingTop:t})},Qn=function(e){var r=e.children,i=e.innerProps,t=e.innerRef,a=e.isMulti;return C("div",y({},V(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},i),r)},yt=function(e,r){var i=e.theme,t=i.spacing.baseUnit,a=i.colors;return S({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},er=yt,tr=yt,nr=function(e){var r=e.children,i=r===void 0?"No options":r,t=e.innerProps,a=q(e,Nn);return C("div",y({},V(S(S({},a),{},{children:i,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),i)},rr=function(e){var r=e.children,i=r===void 0?"Loading...":r,t=e.innerProps,a=q(e,Wn);return C("div",y({},V(S(S({},a),{},{children:i,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),i)},ir=function(e){var r=e.rect,i=e.offset,t=e.position;return{left:r.left,position:t,top:i,width:r.width,zIndex:1}},or=function(e){var r=e.appendTo,i=e.children,t=e.controlElement,a=e.innerProps,u=e.menuPlacement,l=e.menuPosition,o=p.useRef(null),s=p.useRef(null),c=p.useState(Ct(u)),d=Y(c,2),v=d[0],g=d[1],b=p.useMemo(function(){return{setPortalPlacement:g}},[]),m=p.useState(null),f=Y(m,2),x=f[0],D=f[1],w=p.useCallback(function(){if(t){var A=$n(t),F=l==="fixed"?0:window.pageYOffset,M=A[v]+F;(M!==(x==null?void 0:x.offset)||A.left!==(x==null?void 0:x.rect.left)||A.width!==(x==null?void 0:x.rect.width))&&D({offset:M,rect:A})}},[t,l,v,x==null?void 0:x.offset,x==null?void 0:x.rect.left,x==null?void 0:x.rect.width]);Pe(function(){w()},[w]);var O=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),t&&o.current&&(s.current=on(t,o.current,w,{elementResize:"ResizeObserver"in window}))},[t,w]);Pe(function(){O()},[O]);var I=p.useCallback(function(A){o.current=A,O()},[O]);if(!r&&l!=="fixed"||!x)return null;var P=C("div",y({ref:I},V(S(S({},e),{},{offset:x.offset,position:l,rect:x.rect}),"menuPortal",{"menu-portal":!0}),a),i);return C(St.Provider,{value:b},r?Nt.createPortal(P,r):P)},ar=function(e){var r=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},ur=function(e){var r=e.children,i=e.innerProps,t=e.isDisabled,a=e.isRtl;return C("div",y({},V(e,"container",{"--is-disabled":t,"--is-rtl":a}),i),r)},sr=function(e,r){var i=e.theme.spacing,t=e.isMulti,a=e.hasValue,u=e.selectProps.controlShouldRenderValue;return S({alignItems:"center",display:t&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},lr=function(e){var r=e.children,i=e.innerProps,t=e.isMulti,a=e.hasValue;return C("div",y({},V(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),i),r)},cr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},dr=function(e){var r=e.children,i=e.innerProps;return C("div",y({},V(e,"indicatorsContainer",{indicators:!0}),i),r)},Ne,pr=["size"],fr=["innerProps","isRtl","size"],hr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Ft=function(e){var r=e.size,i=q(e,pr);return C("svg",y({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:hr},i))},Re=function(e){return C(Ft,y({size:20},e),C("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},wt=function(e){return C(Ft,y({size:20},e),C("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Ot=function(e,r){var i=e.isFocused,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return S({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?u.neutral60:u.neutral20,padding:a*2,":hover":{color:i?u.neutral80:u.neutral40}})},mr=Ot,vr=function(e){var r=e.children,i=e.innerProps;return C("div",y({},V(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||C(wt,null))},gr=Ot,br=function(e){var r=e.children,i=e.innerProps;return C("div",y({},V(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||C(Re,null))},xr=function(e,r){var i=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return S({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Er=function(e){var r=e.innerProps;return C("span",y({},r,V(e,"indicatorSeparator",{"indicator-separator":!0})))},Cr=Pn(Ne||(Ne=An([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Sr=function(e,r){var i=e.isFocused,t=e.size,a=e.theme,u=a.colors,l=a.spacing.baseUnit;return S({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?u.neutral60:u.neutral20,padding:l*2})},be=function(e){var r=e.delay,i=e.offset;return C("span",{css:Le({animation:"".concat(Cr," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},yr=function(e){var r=e.innerProps,i=e.isRtl,t=e.size,a=t===void 0?4:t,u=q(e,fr);return C("div",y({},V(S(S({},u),{},{innerProps:r,isRtl:i,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),C(be,{delay:0,offset:i}),C(be,{delay:160,offset:!0}),C(be,{delay:320,offset:!i}))},Fr=function(e,r){var i=e.isDisabled,t=e.isFocused,a=e.theme,u=a.colors,l=a.borderRadius,o=a.spacing;return S({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?u.neutral5:u.neutral0,borderColor:i?u.neutral10:t?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},wr=function(e){var r=e.children,i=e.isDisabled,t=e.isFocused,a=e.innerRef,u=e.innerProps,l=e.menuIsOpen;return C("div",y({ref:a},V(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":t,"control--menu-is-open":l}),u,{"aria-disabled":i||void 0}),r)},Or=wr,Dr=["data"],Ir=function(e,r){var i=e.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},Pr=function(e){var r=e.children,i=e.cx,t=e.getStyles,a=e.getClassNames,u=e.Heading,l=e.headingProps,o=e.innerProps,s=e.label,c=e.theme,d=e.selectProps;return C("div",y({},V(e,"group",{group:!0}),o),C(u,y({},l,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:i}),s),C("div",null,r))},Ar=function(e,r){var i=e.theme,t=i.colors,a=i.spacing;return S({label:"group",cursor:"default",display:"block"},r?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Mr=function(e){var r=bt(e);r.data;var i=q(r,Dr);return C("div",y({},V(e,"groupHeading",{"group-heading":!0}),i))},Vr=Pr,Lr=["innerRef","isDisabled","isHidden","inputClassName"],Rr=function(e,r){var i=e.isDisabled,t=e.value,a=e.theme,u=a.spacing,l=a.colors;return S(S({visibility:i?"hidden":"visible",transform:t?"translateZ(0)":""},kr),r?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Dt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},kr={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":S({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Dt)},Tr=function(e){return S({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Dt)},$r=function(e){var r=e.cx,i=e.value,t=bt(e),a=t.innerRef,u=t.isDisabled,l=t.isHidden,o=t.inputClassName,s=q(t,Lr);return C("div",y({},V(e,"input",{"input-container":!0}),{"data-value":i||""}),C("input",y({className:r({input:!0},o),ref:a,style:Tr(l),disabled:u},s)))},Br=$r,jr=function(e,r){var i=e.theme,t=i.spacing,a=i.borderRadius,u=i.colors;return S({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},Hr=function(e,r){var i=e.theme,t=i.borderRadius,a=i.colors,u=e.cropWithEllipsis;return S({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},_r=function(e,r){var i=e.theme,t=i.spacing,a=i.borderRadius,u=i.colors,l=e.isFocused;return S({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},It=function(e){var r=e.children,i=e.innerProps;return C("div",i,r)},zr=It,Ur=It;function Nr(n){var e=n.children,r=n.innerProps;return C("div",y({role:"button"},r),e||C(Re,{size:14}))}var Wr=function(e){var r=e.children,i=e.components,t=e.data,a=e.innerProps,u=e.isDisabled,l=e.removeProps,o=e.selectProps,s=i.Container,c=i.Label,d=i.Remove;return C(s,{data:t,innerProps:S(S({},V(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},C(c,{data:t,innerProps:S({},V(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},r),C(d,{data:t,innerProps:S(S({},V(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},l),selectProps:o}))},Gr=Wr,Yr=function(e,r){var i=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.theme,l=u.spacing,o=u.colors;return S({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?o.primary:t?o.primary25:"transparent",color:i?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:a?o.primary:o.primary50}})},qr=function(e){var r=e.children,i=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.innerRef,l=e.innerProps;return C("div",y({},V(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":t,"option--is-selected":a}),{ref:u,"aria-disabled":i},l),r)},Kr=qr,Xr=function(e,r){var i=e.theme,t=i.spacing,a=i.colors;return S({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},Jr=function(e){var r=e.children,i=e.innerProps;return C("div",y({},V(e,"placeholder",{placeholder:!0}),i),r)},Zr=Jr,Qr=function(e,r){var i=e.isDisabled,t=e.theme,a=t.spacing,u=t.colors;return S({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},ei=function(e){var r=e.children,i=e.isDisabled,t=e.innerProps;return C("div",y({},V(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),t),r)},ti=ei,ni={ClearIndicator:br,Control:Or,DropdownIndicator:vr,DownChevron:wt,CrossIcon:Re,Group:Vr,GroupHeading:Mr,IndicatorsContainer:dr,IndicatorSeparator:Er,Input:Br,LoadingIndicator:yr,Menu:Jn,MenuList:Qn,MenuPortal:or,LoadingMessage:rr,NoOptionsMessage:nr,MultiValue:Gr,MultiValueContainer:zr,MultiValueLabel:Ur,MultiValueRemove:Nr,Option:Kr,Placeholder:Zr,SelectContainer:ur,SingleValue:ti,ValueContainer:lr},ri=function(e){return S(S({},ni),e.components)},We=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function ii(n,e){return!!(n===e||We(n)&&We(e))}function oi(n,e){if(n.length!==e.length)return!1;for(var r=0;r<n.length;r++)if(!ii(n[r],e[r]))return!1;return!0}function ai(n,e){e===void 0&&(e=oi);var r=null;function i(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(r&&r.lastThis===this&&e(t,r.lastArgs))return r.lastResult;var u=n.apply(this,t);return r={lastResult:u,lastArgs:t,lastThis:this},u}return i.clear=function(){r=null},i}var ui={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},si=function(e){return C("span",y({css:ui},e))},Ge=si,li={guidance:function(e){var r=e.isSearchable,i=e.isMulti,t=e.tabSelectsValue,a=e.context,u=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,i=e.label,t=i===void 0?"":i,a=e.labels,u=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var r=e.context,i=e.focused,t=e.options,a=e.label,u=a===void 0?"":a,l=e.selectValue,o=e.isDisabled,s=e.isSelected,c=e.isAppleDevice,d=function(m,f){return m&&m.length?"".concat(m.indexOf(f)+1," of ").concat(m.length):""};if(r==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,i),".");if(r==="menu"&&c){var v=o?" disabled":"",g="".concat(s?" selected":"").concat(v);return"".concat(u).concat(g,", ").concat(d(t,i),".")}return""},onFilter:function(e){var r=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},ci=function(e){var r=e.ariaSelection,i=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,u=e.isFocused,l=e.selectValue,o=e.selectProps,s=e.id,c=e.isAppleDevice,d=o.ariaLiveMessages,v=o.getOptionLabel,g=o.inputValue,b=o.isMulti,m=o.isOptionDisabled,f=o.isSearchable,x=o.menuIsOpen,D=o.options,w=o.screenReaderStatus,O=o.tabSelectsValue,I=o.isLoading,P=o["aria-label"],A=o["aria-live"],F=p.useMemo(function(){return S(S({},li),d||{})},[d]),M=p.useMemo(function(){var k="";if(r&&F.onChange){var L=r.option,z=r.options,H=r.removedValue,K=r.removedValues,X=r.value,oe=function(G){return Array.isArray(G)?null:G},R=H||L||oe(X),j=R?v(R):"",W=z||K||void 0,J=W?W.map(v):[],_=S({isDisabled:R&&m(R,l),label:j,labels:J},r);k=F.onChange(_)}return k},[r,F,m,l,v]),T=p.useMemo(function(){var k="",L=i||t,z=!!(i&&l&&l.includes(i));if(L&&F.onFocus){var H={focused:L,label:v(L),isDisabled:m(L,l),isSelected:z,options:a,context:L===i?"menu":"value",selectValue:l,isAppleDevice:c};k=F.onFocus(H)}return k},[i,t,v,m,F,a,l,c]),B=p.useMemo(function(){var k="";if(x&&D.length&&!I&&F.onFilter){var L=w({count:a.length});k=F.onFilter({inputValue:g,resultsMessage:L})}return k},[a,g,x,F,D,w,I]),$=(r==null?void 0:r.action)==="initial-input-focus",U=p.useMemo(function(){var k="";if(F.guidance){var L=t?"value":x?"menu":"input";k=F.guidance({"aria-label":P,context:L,isDisabled:i&&m(i,l),isMulti:b,isSearchable:f,tabSelectsValue:O,isInitialFocus:$})}return k},[P,i,t,b,m,f,x,F,l,O,$]),N=C(p.Fragment,null,C("span",{id:"aria-selection"},M),C("span",{id:"aria-focused"},T),C("span",{id:"aria-results"},B),C("span",{id:"aria-guidance"},U));return C(p.Fragment,null,C(Ge,{id:s},$&&N),C(Ge,{"aria-live":A,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!$&&N))},di=ci,Ae=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],pi=new RegExp("["+Ae.map(function(n){return n.letters}).join("")+"]","g"),Pt={};for(var xe=0;xe<Ae.length;xe++)for(var Ee=Ae[xe],Ce=0;Ce<Ee.letters.length;Ce++)Pt[Ee.letters[Ce]]=Ee.base;var At=function(e){return e.replace(pi,function(r){return Pt[r]})},fi=ai(At),Ye=function(e){return e.replace(/^\s+|\s+$/g,"")},hi=function(e){return"".concat(e.label," ").concat(e.value)},mi=function(e){return function(r,i){if(r.data.__isNew__)return!0;var t=S({ignoreCase:!0,ignoreAccents:!0,stringify:hi,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,u=t.ignoreAccents,l=t.stringify,o=t.trim,s=t.matchFrom,c=o?Ye(i):i,d=o?Ye(l(r)):l(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=fi(c),d=At(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},vi=["innerRef"];function gi(n){var e=n.innerRef,r=q(n,vi),i=Un(r,"onExited","in","enter","exit","appear");return C("input",y({ref:e},i,{css:Le({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var bi=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function xi(n){var e=n.isEnabled,r=n.onBottomArrive,i=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),o=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(f,x){if(s.current!==null){var D=s.current,w=D.scrollTop,O=D.scrollHeight,I=D.clientHeight,P=s.current,A=x>0,F=O-I-w,M=!1;F>x&&u.current&&(i&&i(f),u.current=!1),A&&l.current&&(a&&a(f),l.current=!1),A&&x>F?(r&&!u.current&&r(f),P.scrollTop=O,M=!0,u.current=!0):!A&&-x>w&&(t&&!l.current&&t(f),P.scrollTop=0,M=!0,l.current=!0),M&&bi(f)}},[r,i,t,a]),d=p.useCallback(function(f){c(f,f.deltaY)},[c]),v=p.useCallback(function(f){o.current=f.changedTouches[0].clientY},[]),g=p.useCallback(function(f){var x=o.current-f.changedTouches[0].clientY;c(f,x)},[c]),b=p.useCallback(function(f){if(f){var x=Hn?{passive:!1}:!1;f.addEventListener("wheel",d,x),f.addEventListener("touchstart",v,x),f.addEventListener("touchmove",g,x)}},[g,v,d]),m=p.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",v,!1),f.removeEventListener("touchmove",g,!1))},[g,v,d]);return p.useEffect(function(){if(e){var f=s.current;return b(f),function(){m(f)}}},[e,b,m]),function(f){s.current=f}}var qe=["boxSizing","height","overflow","paddingRight","position"],Ke={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Xe(n){n.preventDefault()}function Je(n){n.stopPropagation()}function Ze(){var n=this.scrollTop,e=this.scrollHeight,r=n+this.offsetHeight;n===0?this.scrollTop=1:r===e&&(this.scrollTop=n-1)}function Qe(){return"ontouchstart"in window||navigator.maxTouchPoints}var et=!!(typeof window<"u"&&window.document&&window.document.createElement),ne=0,te={capture:!1,passive:!1};function Ei(n){var e=n.isEnabled,r=n.accountForScrollbars,i=r===void 0?!0:r,t=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(o){if(et){var s=document.body,c=s&&s.style;if(i&&qe.forEach(function(b){var m=c&&c[b];t.current[b]=m}),i&&ne<1){var d=parseInt(t.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,g=window.innerWidth-v+d||0;Object.keys(Ke).forEach(function(b){var m=Ke[b];c&&(c[b]=m)}),c&&(c.paddingRight="".concat(g,"px"))}s&&Qe()&&(s.addEventListener("touchmove",Xe,te),o&&(o.addEventListener("touchstart",Ze,te),o.addEventListener("touchmove",Je,te))),ne+=1}},[i]),l=p.useCallback(function(o){if(et){var s=document.body,c=s&&s.style;ne=Math.max(ne-1,0),i&&ne<1&&qe.forEach(function(d){var v=t.current[d];c&&(c[d]=v)}),s&&Qe()&&(s.removeEventListener("touchmove",Xe,te),o&&(o.removeEventListener("touchstart",Ze,te),o.removeEventListener("touchmove",Je,te)))}},[i]);return p.useEffect(function(){if(e){var o=a.current;return u(o),function(){l(o)}}},[e,u,l]),function(o){a.current=o}}var Ci=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},Si={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function yi(n){var e=n.children,r=n.lockEnabled,i=n.captureEnabled,t=i===void 0?!0:i,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,o=n.onTopLeave,s=xi({isEnabled:t,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:o}),c=Ei({isEnabled:r}),d=function(g){s(g),c(g)};return C(p.Fragment,null,r&&C("div",{onClick:Ci,css:Si}),e(d))}var Fi={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},wi=function(e){var r=e.name,i=e.onFocus;return C("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:Fi,value:"",onChange:function(){}})},Oi=wi;function ke(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Di(){return ke(/^iPhone/i)}function Mt(){return ke(/^Mac/i)}function Ii(){return ke(/^iPad/i)||Mt()&&navigator.maxTouchPoints>1}function Pi(){return Di()||Ii()}function Ai(){return Mt()||Pi()}var Mi=function(e){return e.label},Vi=function(e){return e.label},Li=function(e){return e.value},Ri=function(e){return!!e.isDisabled},ki={clearIndicator:gr,container:ar,control:Fr,dropdownIndicator:mr,group:Ir,groupHeading:Ar,indicatorsContainer:cr,indicatorSeparator:xr,input:Rr,loadingIndicator:Sr,loadingMessage:tr,menu:qn,menuList:Zn,menuPortal:ir,multiValue:jr,multiValueLabel:Hr,multiValueRemove:_r,noOptionsMessage:er,option:Yr,placeholder:Xr,singleValue:Qr,valueContainer:sr},Ti={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},$i=4,Vt=4,Bi=38,ji=Vt*2,Hi={baseUnit:Vt,controlHeight:Bi,menuGutter:ji},Se={borderRadius:$i,colors:Ti,spacing:Hi},_i={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ue(),captureMenuScroll:!Ue(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:mi(),formatGroupLabel:Mi,getOptionLabel:Vi,getOptionValue:Li,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Ri,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Bn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function tt(n,e,r,i){var t=kt(n,e,r),a=Tt(n,e,r),u=Rt(n,e),l=me(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:u,value:l,index:i}}function de(n,e){return n.options.map(function(r,i){if("options"in r){var t=r.options.map(function(u,l){return tt(n,u,e,l)}).filter(function(u){return rt(n,u)});return t.length>0?{type:"group",data:r,options:t,index:i}:void 0}var a=tt(n,r,e,i);return rt(n,a)?a:void 0}).filter(_n)}function Lt(n){return n.reduce(function(e,r){return r.type==="group"?e.push.apply(e,Ve(r.options.map(function(i){return i.data}))):e.push(r.data),e},[])}function nt(n,e){return n.reduce(function(r,i){return i.type==="group"?r.push.apply(r,Ve(i.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(i.index,"-").concat(t.index)}}))):r.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),r},[])}function zi(n,e){return Lt(de(n,e))}function rt(n,e){var r=n.inputValue,i=r===void 0?"":r,t=e.data,a=e.isSelected,u=e.label,l=e.value;return(!Bt(n)||!a)&&$t(n,{label:u,value:l,data:t},i)}function Ui(n,e){var r=n.focusedValue,i=n.selectValue,t=i.indexOf(r);if(t>-1){var a=e.indexOf(r);if(a>-1)return r;if(t<e.length)return e[t]}return null}function Ni(n,e){var r=n.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var ye=function(e,r){var i,t=(i=e.find(function(a){return a.data===r}))===null||i===void 0?void 0:i.id;return t||null},Rt=function(e,r){return e.getOptionLabel(r)},me=function(e,r){return e.getOptionValue(r)};function kt(n,e,r){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,r):!1}function Tt(n,e,r){if(r.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,r);var i=me(n,e);return r.some(function(t){return me(n,t)===i})}function $t(n,e,r){return n.filterOption?n.filterOption(e,r):!0}var Bt=function(e){var r=e.hideSelectedOptions,i=e.isMulti;return r===void 0?i:r},Wi=1,jt=function(n){Sn(r,n);var e=wn(r);function r(i){var t;if(En(this,r),t=e.call(this,i),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Ai(),t.controlRef=null,t.getControlRef=function(o){t.controlRef=o},t.focusedOptionRef=null,t.getFocusedOptionRef=function(o){t.focusedOptionRef=o},t.menuListRef=null,t.getMenuListRef=function(o){t.menuListRef=o},t.inputRef=null,t.getInputRef=function(o){t.inputRef=o},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(o,s){var c=t.props,d=c.onChange,v=c.name;s.name=v,t.ariaOnChange(o,s),d(o,s)},t.setValue=function(o,s,c){var d=t.props,v=d.closeMenuOnSelect,g=d.isMulti,b=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:b}),v&&(t.setState({inputIsHiddenAfterUpdate:!g}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(o,{action:s,option:c})},t.selectOption=function(o){var s=t.props,c=s.blurInputOnSelect,d=s.isMulti,v=s.name,g=t.state.selectValue,b=d&&t.isOptionSelected(o,g),m=t.isOptionDisabled(o,g);if(b){var f=t.getOptionValue(o);t.setValue(g.filter(function(x){return t.getOptionValue(x)!==f}),"deselect-option",o)}else if(!m)d?t.setValue([].concat(Ve(g),[o]),"select-option",o):t.setValue(o,"select-option");else{t.ariaOnChange(o,{action:"select-option",option:o,name:v});return}c&&t.blurInput()},t.removeValue=function(o){var s=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(o),v=c.filter(function(b){return t.getOptionValue(b)!==d}),g=le(s,v,v[0]||null);t.onChange(g,{action:"remove-value",removedValue:o}),t.focusInput()},t.clearValue=function(){var o=t.state.selectValue;t.onChange(le(t.props.isMulti,[],null),{action:"clear",removedValues:o})},t.popValue=function(){var o=t.props.isMulti,s=t.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),v=le(o,d,d[0]||null);t.onChange(v,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(o){return ye(t.state.focusableOptionsWithIds,o)},t.getFocusableOptionsWithIds=function(){return nt(de(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return Ln.apply(void 0,[t.props.classNamePrefix].concat(s))},t.getOptionLabel=function(o){return Rt(t.props,o)},t.getOptionValue=function(o){return me(t.props,o)},t.getStyles=function(o,s){var c=t.props.unstyled,d=ki[o](s,c);d.boxSizing="border-box";var v=t.props.styles[o];return v?v(d,s):d},t.getClassNames=function(o,s){var c,d;return(c=(d=t.props.classNames)[o])===null||c===void 0?void 0:c.call(d,s)},t.getElementId=function(o){return"".concat(t.state.instancePrefix,"-").concat(o)},t.getComponents=function(){return ri(t.props)},t.buildCategorizedOptions=function(){return de(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Lt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(o,s){t.setState({ariaSelection:S({value:o},s)})},t.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(o){t.blockOptionHover=!1},t.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&t.onMenuClose():s&&t.openMenu("first"):(s&&(t.openAfterFocus=!0),t.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},t.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!t.props.isDisabled){var s=t.props,c=s.isMulti,d=s.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),o.preventDefault()}},t.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(t.clearValue(),o.preventDefault(),t.openAfterFocus=!1,o.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(o){typeof t.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&ge(o.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(o)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(o){var s=o.touches,c=s&&s.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(o){var s=o.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),v=Math.abs(c.clientY-t.initialTouchY),g=5;t.userIsDragging=d>g||v>g}},t.onTouchEnd=function(o){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(o.target)&&t.menuListRef&&!t.menuListRef.contains(o.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(o){t.userIsDragging||t.onControlMouseDown(o)},t.onClearIndicatorTouchEnd=function(o){t.userIsDragging||t.onClearIndicatorMouseDown(o)},t.onDropdownIndicatorTouchEnd=function(o){t.userIsDragging||t.onDropdownIndicatorMouseDown(o)},t.handleInputChange=function(o){var s=t.props.inputValue,c=o.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:s}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(o){t.props.onFocus&&t.props.onFocus(o),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(o){var s=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(o),t.onInputChange("",{action:"input-blur",prevInputValue:s}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(o){if(!(t.blockOptionHover||t.state.focusedOption===o)){var s=t.getFocusableOptions(),c=s.indexOf(o);t.setState({focusedOption:o,focusedOptionId:c>-1?t.getFocusedOptionId(o):null})}},t.shouldHideSelectedOptions=function(){return Bt(t.props)},t.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),t.focus()},t.onKeyDown=function(o){var s=t.props,c=s.isMulti,d=s.backspaceRemovesValue,v=s.escapeClearsValue,g=s.inputValue,b=s.isClearable,m=s.isDisabled,f=s.menuIsOpen,x=s.onKeyDown,D=s.tabSelectsValue,w=s.openMenuOnFocus,O=t.state,I=O.focusedOption,P=O.focusedValue,A=O.selectValue;if(!m&&!(typeof x=="function"&&(x(o),o.defaultPrevented))){switch(t.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||g)return;t.focusValue("previous");break;case"ArrowRight":if(!c||g)return;t.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(P)t.removeValue(P);else{if(!d)return;c?t.popValue():b&&t.clearValue()}break;case"Tab":if(t.isComposing||o.shiftKey||!f||!D||!I||w&&t.isOptionSelected(I,A))return;t.selectOption(I);break;case"Enter":if(o.keyCode===229)break;if(f){if(!I||t.isComposing)return;t.selectOption(I);break}return;case"Escape":f?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:g}),t.onMenuClose()):b&&v&&t.clearValue();break;case" ":if(g)return;if(!f){t.openMenu("first");break}if(!I)return;t.selectOption(I);break;case"ArrowUp":f?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":f?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!f)return;t.focusOption("pageup");break;case"PageDown":if(!f)return;t.focusOption("pagedown");break;case"Home":if(!f)return;t.focusOption("first");break;case"End":if(!f)return;t.focusOption("last");break;default:return}o.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++Wi),t.state.selectValue=_e(i.value),i.menuIsOpen&&t.state.selectValue.length){var a=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),l=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=a,t.state.focusedOption=u[l],t.state.focusedOptionId=ye(a,u[l])}return t}return Cn(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&ze(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&t.isDisabled||o&&l&&!t.menuIsOpen)&&this.focusInput(),o&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(ze(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,u=this.state,l=u.selectValue,o=u.isFocused,s=this.buildFocusableOptions(),c=t==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(l);l||(o=-1);var s=u.length-1,c=-1;if(u.length){switch(t){case"previous":o===0?c=0:o===-1?c=s:c=o-1;break;case"next":o>-1&&o<s&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var o=0,s=l.indexOf(u);u||(s=-1),t==="up"?o=s>0?s-1:l.length-1:t==="down"?o=(s+1)%l.length:t==="pageup"?(o=s-a,o<0&&(o=0)):t==="pagedown"?(o=s+a,o>l.length-1&&(o=l.length-1)):t==="last"&&(o=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Se):S(S({},Se),this.props.theme):Se}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,o=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,g=d.isRtl,b=d.options,m=this.hasValue();return{clearValue:t,cx:a,getStyles:u,getClassNames:l,getValue:o,hasValue:m,isMulti:v,isRtl:g,options:b,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,u=t.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(t,a){return kt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return Tt(this.props,t,a)}},{key:"filterOption",value:function(t,a){return $t(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,u=t.isSearchable,l=t.inputId,o=t.inputValue,s=t.tabIndex,c=t.form,d=t.menuIsOpen,v=t.required,g=this.getComponents(),b=g.Input,m=this.state,f=m.inputIsHidden,x=m.ariaSelection,D=this.commonProps,w=l||this.getElementId("input"),O=S(S(S({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(x==null?void 0:x.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(b,y({},D,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:o},O)):p.createElement(gi,y({id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:fe,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,o=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,v=this.commonProps,g=this.props,b=g.controlShouldRenderValue,m=g.isDisabled,f=g.isMulti,x=g.inputValue,D=g.placeholder,w=this.state,O=w.selectValue,I=w.focusedValue,P=w.isFocused;if(!this.hasValue()||!b)return x?null:p.createElement(d,y({},v,{key:"placeholder",isDisabled:m,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),D);if(f)return O.map(function(F,M){var T=F===I,B="".concat(t.getOptionLabel(F),"-").concat(t.getOptionValue(F));return p.createElement(u,y({},v,{components:{Container:l,Label:o,Remove:s},isFocused:T,isDisabled:m,key:B,index:M,removeProps:{onClick:function(){return t.removeValue(F)},onTouchEnd:function(){return t.removeValue(F)},onMouseDown:function(U){U.preventDefault()}},data:F}),t.formatOptionLabel(F,"value"))});if(x)return null;var A=O[0];return p.createElement(c,y({},v,{data:A,isDisabled:m}),this.formatOptionLabel(A,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,u=t.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,y({},l,{isDisabled:o,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,o=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:s,isDisabled:l,isFocused:o}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,o=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,v=a.NoOptionsMessage,g=a.Option,b=this.commonProps,m=this.state.focusedOption,f=this.props,x=f.captureMenuScroll,D=f.inputValue,w=f.isLoading,O=f.loadingMessage,I=f.minMenuHeight,P=f.maxMenuHeight,A=f.menuIsOpen,F=f.menuPlacement,M=f.menuPosition,T=f.menuPortalTarget,B=f.menuShouldBlockScroll,$=f.menuShouldScrollIntoView,U=f.noOptionsMessage,N=f.onMenuScrollToTop,k=f.onMenuScrollToBottom;if(!A)return null;var L=function(j,W){var J=j.type,_=j.data,Z=j.isDisabled,G=j.isSelected,ae=j.label,Ht=j.value,Te=m===_,$e=Z?void 0:function(){return t.onOptionHover(_)},_t=Z?void 0:function(){return t.selectOption(_)},Be="".concat(t.getElementId("option"),"-").concat(W),zt={id:Be,onClick:_t,onMouseMove:$e,onMouseOver:$e,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:G};return p.createElement(g,y({},b,{innerProps:zt,data:_,isDisabled:Z,isSelected:G,key:Be,label:ae,type:J,value:Ht,isFocused:Te,innerRef:Te?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(j.data,"menu"))},z;if(this.hasOptions())z=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var j=R.data,W=R.options,J=R.index,_="".concat(t.getElementId("group"),"-").concat(J),Z="".concat(_,"-heading");return p.createElement(u,y({},b,{key:_,data:j,options:W,Heading:l,headingProps:{id:Z,data:R.data},label:t.formatGroupLabel(R.data)}),R.options.map(function(G){return L(G,"".concat(J,"-").concat(G.index))}))}else if(R.type==="option")return L(R,"".concat(R.index))});else if(w){var H=O({inputValue:D});if(H===null)return null;z=p.createElement(d,b,H)}else{var K=U({inputValue:D});if(K===null)return null;z=p.createElement(v,b,K)}var X={minMenuHeight:I,maxMenuHeight:P,menuPlacement:F,menuPosition:M,menuShouldScrollIntoView:$},oe=p.createElement(Kn,y({},b,X),function(R){var j=R.ref,W=R.placerProps,J=W.placement,_=W.maxHeight;return p.createElement(o,y({},b,X,{innerRef:j,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:w,placement:J}),p.createElement(yi,{captureEnabled:x,onTopArrive:N,onBottomArrive:k,lockEnabled:B},function(Z){return p.createElement(s,y({},b,{innerRef:function(ae){t.getMenuListRef(ae),Z(ae)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:t.getElementId("listbox")},isLoading:w,maxHeight:_,focusedOption:m}),z)}))});return T||M==="fixed"?p.createElement(c,y({},b,{appendTo:T,controlElement:this.controlRef,menuPlacement:F,menuPosition:M}),oe):oe}},{key:"renderFormField",value:function(){var t=this,a=this.props,u=a.delimiter,l=a.isDisabled,o=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Oi,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(o)if(u){var v=d.map(function(m){return t.getOptionValue(m)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:v})}else{var g=d.length>0?d.map(function(m,f){return p.createElement("input",{key:"i-".concat(f),name:s,type:"hidden",value:t.getOptionValue(m)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,g)}else{var b=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,o=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(di,y({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:o,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,u=t.IndicatorsContainer,l=t.SelectContainer,o=t.ValueContainer,s=this.props,c=s.className,d=s.id,v=s.isDisabled,g=s.menuIsOpen,b=this.state.isFocused,m=this.commonProps=this.getCommonProps();return p.createElement(l,y({},m,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:b}),this.renderLiveRegion(),p.createElement(a,y({},m,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:b,menuIsOpen:g}),p.createElement(o,y({},m,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,y({},m,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,v=a.instancePrefix,g=t.options,b=t.value,m=t.menuIsOpen,f=t.inputValue,x=t.isMulti,D=_e(b),w={};if(u&&(b!==u.value||g!==u.options||m!==u.menuIsOpen||f!==u.inputValue)){var O=m?zi(t,D):[],I=m?nt(de(t,D),"".concat(v,"-option")):[],P=l?Ui(a,D):null,A=Ni(a,O),F=ye(I,A);w={selectValue:D,focusedOption:A,focusedOptionId:F,focusableOptionsWithIds:I,focusedValue:P,clearFocusValueOnUpdate:!1}}var M=o!=null&&t!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},T=s,B=c&&d;return c&&!B&&(T={value:le(x,D,D[0]||null),options:D,action:"initial-input-focus"},B=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(T=null),S(S(S({},w),M),{},{prevProps:t,ariaSelection:T,prevWasFocused:B})}}]),r}(p.Component);jt.defaultProps=_i;var Gi=p.forwardRef(function(n,e){var r=xn(n);return p.createElement(jt,y({ref:e},r))}),it=Gi;const Yi=E.form`
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
`,qi=E.p`
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
`,Ki=E.input`
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
`,Xi=E.button`
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
    left: 176px;
  }
`,Ji=E.svg`
  width: 18px;
  height: 18px;
  stroke: #e6533c;
`,Zi=E.button`
  height: 18px;
  width: 18px;
  position: absolute;
  padding: 0px;
  border-color: transparent;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    right: 14px;
    top: 14px;
  }

  @media screen and (min-width: 768px) {
    left: 204px;
  }
`,Qi=E.svg`
  width: 18px;
  height: 18px;
`,eo=E.div`
  display: flex;
  width: 100%;
  gap: ${n=>n.theme.spacing(4)};

  @media screen and (min-width: 768px) {
    max-width: 412px;
  }
`;E.div`
  color: ${n=>n.theme.colors.orangeColor};
  font-size: 14px;
`;const Fe="#1c1c1c",ce="#efede8",to="rgba(239, 237, 232, 0.1)",ot={option:n=>({...n,background:Fe,color:ce,textwrap:"nowrap"}),control:n=>({...n,backgroundColor:"transparent",borderRadius:"12px",width:"100%",height:"46px",border:"1px solid rgba(239, 237, 232, 0.2)",boxShadow:"none","&:hover":{borderColor:"#E6533C"},"&:focus":{borderColor:"#E6533C"},"@media (min-width: 768px)":{height:"50px"}}),dropdownIndicator:n=>({...n,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:ce}}),menu:n=>({...n,background:Fe,borderRadius:"12px"}),menuList:n=>({...n,"::-webkit-scrollbar":{width:"22px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:to,borderRadius:"12px",border:"7px solid",borderColor:Fe},maxHeight:"276px",borderRadius:"12px",overflowX:"hidden"}),indicatorSeparator:n=>({...n,display:"none"}),placeholder:n=>({...n,color:ce}),singleValue:n=>({...n,color:ce}),container:n=>({...n,display:"flex",alignItems:"center",border:"1px",height:"46px",width:"100%","&:hover":{borderColor:"#E6533C"},"&:focus":{borderColor:"#E6533C"},"@media (min-width: 768px)":{height:"50px"}}),input:n=>({...n,fontSize:"14px"})},at=[{value:"",label:"All"},{value:"recommended",label:"Recommended"},{value:"not recommended",label:"Not recommended"}],no=()=>{const n=ve(),e=Q(ht),i=Zt({initialValues:{title:"",category:"",type:""},validate:l=>{const o=l.title.trim();o&&o.length<2},onSubmit:l=>a(l)}),t=(l,o)=>{if(l){const s=l.find(c=>c.value==o);return s||""}else return""},a=l=>{n(Wt(l)),n(dt()),n(Me())},u=(l,o)=>{i.setFieldValue(l,o.value);const{initialValues:s,values:c}=i;if(o.value!==s[o.value]){const d={...c,[l]:o.value};a(d)}};return h.jsxs(Yi,{onSubmit:i.handleSubmit,children:[h.jsx(Ki,{type:"text",name:"title",placeholder:"Search",value:i.values.title,onChange:i.handleChange}),i.values.title!==""&&h.jsx(Xi,{type:"button",onClick:()=>{i.setFieldValue("title",""),i.setFieldValue("category",""),i.setFieldValue("type","")},children:h.jsx(Ji,{children:h.jsx("use",{href:`${ie}#x2`})})}),h.jsx(Zi,{type:"submit",children:h.jsx(Qi,{children:h.jsx("use",{href:`${ie}#search`})})}),h.jsxs(eo,{children:[h.jsx(it,{value:t(e,i.values.category),onChange:l=>u("category",l),options:e,placeholder:"Categories",styles:ot}),h.jsx(it,{value:t(at,i.values.type),onChange:l=>u("type",l),options:at,styles:ot})]}),h.jsx(qi,{children:"Filters"})]})},ro=n=>n.$recommended?n.theme.colors.recommendedColor:n.theme.colors.notRecommendedColor,io=E.div`
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
`,oo=E.div`
  display: flex;
  margin-bottom: ${n=>n.theme.spacing(6)};
  align-items: baseline;
  justify-content: space-between;
`,ao=E.span`
  margin-right: auto;
  border-radius: ${n=>n.theme.radii.sd};
  padding: 7px 5px;
  /* width: 40px; */
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${n=>n.theme.colors.cardBgColor};
`,uo=E.span`
  margin-right: ${n=>n.theme.spacing(2)};
  display: block;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${ro};
`,ut=E.p`
  margin-right: ${n=>n.theme.spacing(4)};
  color: ${n=>n.theme.colors.whiteColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::first-letter {
    text-transform: uppercase;
  }
`,so=E.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  color: ${n=>n.theme.colors.hoverColor};
  background: transparent;
`,lo=E.svg`
  margin-left: ${n=>n.theme.spacing(2)};
  width: 16px;
  height: 16px;
`,co=E.div`
  display: flex;
  column-gap: ${n=>n.theme.spacing(4)};
  height: 32px;
  overflow-y: hidden;
  margin-bottom: ${n=>n.theme.spacing(2)};

  @media screen and (max-width: 375px) {
    max-width: 303px;
  }
`,po=E.p`
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
`,fo=E.svg`
  width: 24px;
  height: 24px;
`,ho=E.div`
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
`,Oe=E.p`
  margin-right: 4px;
  color: ${n=>n.theme.colors.captionColor};
`,st=E.p`
  margin-right: ${n=>n.theme.spacing(4)};
  color: ${n=>n.theme.colors.whiteColor};

  &::first-letter {
    text-transform: uppercase;
  }
`,mo=({product:{_id:n,title:e,calories:r,category:i,weight:t,recommended:a=!0},toggleModal:u})=>h.jsxs(io,{children:[h.jsxs(oo,{children:[h.jsx(ao,{children:"diet"}),h.jsx(uo,{$recommended:a}),h.jsx(ut,{children:h.jsx("b",{children:a?"Recommended":"Not recommended"})}),h.jsxs(so,{onClick:()=>u({_id:n,title:e,calories:r,category:i,weight:t}),children:["Add",h.jsx(lo,{children:h.jsx("use",{href:`${ie}#icon-arrow`})})]})]}),h.jsxs(co,{children:[h.jsx(fo,{children:h.jsx("use",{href:`${ie}#icon-icon`})}),h.jsx(po,{children:e})]}),h.jsxs(ho,{children:[h.jsxs(we,{children:[h.jsx(Oe,{children:"Calories:"})," ",h.jsx(st,{children:r})]}),h.jsxs(we,{children:[h.jsx(Oe,{children:"Category: "})," ",h.jsx(ut,{children:i})]}),h.jsxs(we,{children:[h.jsx(Oe,{children:"Weight:"})," ",h.jsx(st,{children:t})]})]})]}),vo=E.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #efede8;
  row-gap: 32px;
  column-gap: 16px;

  @media screen and (min-width: 768px) {
    width: 708px;
    height: 660px;
    column-gap: 16px;
    row-gap: 32px;
    overflow-y: scroll;

    //общее
    &::-webkit-scrollbar {
      width: 8px;
    }

    //дорожка
    &::-webkit-scrollbar-track {
      background: ${n=>n.theme.colors.backgroundColorScroll};
      border-radius: 12px;
    }

    //бегунок
    &::-webkit-scrollbar-thumb {
      background: ${n=>n.theme.colors.orangeLightColor};
      border-radius: 12px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 487px;
    justify-content: start;
  }
`,go=E.li`
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
`,bo=E(pt)`
`,xo=E.div`
  padding: 48px 24px;

  
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,Eo=E.div`
  position: relative;

   @media screen and (min-width: 374px) {
    width: 287px;
    height: 34px;
  };

  
  @media screen and (min-width: 768px) {
    width: 415px;
  }
`,Co=E.input`
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
`,So=E.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`,yo=E.input`
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
`,Fo=E.span`
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
`,wo=E.p`
  color: ${n=>n.theme.colors.captionColor};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,Oo=E.span`
display: block;
color: ${n=>n.theme.colors.whiteColor};
  font-size: 12px;
  line-height: calc(18 / 12);
`,Do=E.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,Io=E.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,Po=E.button`
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
`,Ao=E.button`
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
`,Mo=({onToggle:n,exerciseInfo:e,setIsSuccessOpen:r,setDairyProduct:i})=>{const t=ve(),{weight:a,calories:u,_id:l,title:o}=e,[s,c]=p.useState(a),d=Math.round(s*u/100),g=Q(ht).filter(m=>m.value===e.category)[0].img;t(Gt(g));const b=()=>{if(!d)return;const m={productId:l,amount:s,calories:d};t(Yt(m)),i({calories:m.calories}),r(),n()};return h.jsx(bo,{modalStyles:{maxWidth:"479px",width:"100%"},modalTabletStyles:{width:"479"},modalDesktopStyles:{width:"479px"},onClose:n,children:h.jsxs(xo,{children:[h.jsxs(Eo,{children:[h.jsx(Co,{type:"text",value:o,readOnly:!0,disabled:!0}),h.jsxs(So,{children:[h.jsx(yo,{type:"number",value:s,onChange:m=>{c(m.target.value)}}),h.jsx(Fo,{children:"grams"})]})]}),h.jsxs(Io,{children:[h.jsx(wo,{children:"Calories:"}),h.jsx(Oo,{children:d})]}),h.jsxs(Do,{children:[h.jsx(Po,{onClick:b,children:"Add to diary"}),h.jsx(Ao,{onClick:n,children:"Cancel"})]})]})})},Vo=E(pt)`

`,Lo=E.button`
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
`,Ro=E.img`
  width: 123px;
  height: 97px;
  margin-bottom: 27px;
  margin-top: 48px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 64px;
  }
`,ko=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,To=E.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`,$o=E.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Bo=E.li`
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
`,jo=E.span`
  color: #e6533c;
`,Ho=E.div`
  margin-bottom: 16px;
`,_o=E(qt)`
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
`,zo=({calories:n,onClose:e})=>{const r=Q(ln);return h.jsx(Vo,{modalStyles:{maxWidth:"430px",width:"100%",height:"384px"},modalTabletStyles:{width:"430px",height:"439px"},modalDesktopStyles:{width:"430px",height:"439px"},onClose:e,children:h.jsxs(ko,{children:[h.jsx(Ro,{src:r,alt:"Category Image"}),h.jsxs($o,{children:[h.jsx(To,{children:"Well done"}),h.jsx("ul",{children:h.jsxs(Bo,{children:["Calories:",h.jsx(jo,{children:n||0})]})})]}),h.jsx(Ho,{children:h.jsx(Lo,{onClick:e,children:"Next product "})}),h.jsxs(_o,{to:"/diary",children:["To the diary",h.jsx("svg",{width:" 16px",height:"16px",children:h.jsx("use",{href:`${ie}#arrow_gray`})})]})]})})},Uo=()=>{const n=ve(),e=Q(ft),r=Q(sn),[i,t]=p.useState(!1),[a,u]=p.useState(!1),[l,o]=p.useState(null),[s,c]=p.useState({calories:0}),d=Q(cn),v=Q(dn),g=()=>{n(Kt(1)),n(Me())},b=m=>{t(f=>!f),o(m)};return h.jsxs("div",{children:[h.jsxs(vo,{children:[e.map(m=>h.jsx(go,{children:h.jsx(mo,{product:m,toggleModal:b})},m._id)),!r&&d!==v&&h.jsx(rn,{type:"button",onClick:()=>g(),children:"Load More"})]}),i&&h.jsx(Mo,{onToggle:b,setIsSuccessOpen:()=>u(m=>!m),exerciseInfo:l,setDairyProduct:c}),a&&h.jsx(zo,{onClose:()=>u(m=>!m),calories:s.calories})]})},No=E.div`
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
    height: 487px;
  }
`,lt=E.p`
  color: ${n=>n.theme.colors.accentColor};
  @media screen and (min-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,ct=E.span`
  color: ${n=>n.theme.colors.orangeColor};
`,Wo=()=>h.jsxs(No,{children:[h.jsxs(lt,{children:[h.jsx(ct,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),h.jsx(lt,{children:h.jsx(ct,{children:"Try changing the search parameters."})})]}),Go=E.div`
  padding-top: ${n=>n.theme.spacing(10)};
  padding-bottom: ${n=>n.theme.spacing(20)};

  @media screen and (min-width: 768px) {
    padding-top: ${n=>n.theme.spacing(18)};
    padding-bottom: ${n=>n.theme.spacing(12)};
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: ${n=>n.theme.spacing(20)};
  }
`,Yo=E.div`
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
`,qo=E.h1`
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
`;const Ko=E.div`
  @media screen and (min-width: 1440px) {
    position: relative;
    z-index: 0;
    max-width: 1440px;
    height: 716px;
    background-size: contain;
    margin: 0 auto;
    width: 100%;
    background-repeat: no-repeat;
    background-position: bottom right;
    background-image: image-set(
      url(${an}) 1x,
      url(${un}) 2x
    );
  }
`,Xo=({children:n})=>h.jsx(Ko,{children:n}),ta=()=>{const n=ve(),e=Q(pn);return p.useEffect(()=>{n(Xt()),n(dt()),n(Me())},[n]),h.jsx(Xo,{children:h.jsx(Go,{children:h.jsxs(Jt,{children:[h.jsxs(Yo,{children:[h.jsx(qo,{children:"Products"}),h.jsx(no,{})]}),e?h.jsx(Uo,{}):h.jsx(Wo,{})]})})})};export{ta as default};
