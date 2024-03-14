import{J as Nt,r as p,E as Wt,u as E,a as ve,b as Y,j as f,i as ie,K as Gt,M as dt,N as Me,O as Yt,P as qt,L as Kt,Q as Xt,S as Jt,C as Zt}from"./index-b51feb05.js";import{u as Qt}from"./formik.esm-17ede76a.js";import{h as en,E as tn,c as nn,s as rn,_ as y,C as pt,B as on}from"./ExercisesList.styled-ffd97116.js";import{b as an}from"./floating-ui.dom-9d61e2db.js";import{D as un}from"./DiaryLoader-3466e1f7.js";const sn="/project-Power-7/assets/products-desktop-1x-74f26ba3.png",ln="/project-Power-7/assets/products-desktop-2x-c2e987ce.png",ft=n=>n.products.items,ht=n=>n.products.isLoading,mt=n=>n.categories.categories,cn=n=>n.categories.img,dn=n=>n.products.maxPage,pn=n=>n.products.productsPage,fn=Nt([ft],n=>n.length>0);function ee(n){"@babel/helpers - typeof";return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(n)}function hn(n,e){if(ee(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var i=r.call(n,e||"default");if(ee(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function vt(n){var e=hn(n,"string");return ee(e)=="symbol"?e:String(e)}function re(n,e,r){return e=vt(e),e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function je(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function S(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?je(Object(r),!0).forEach(function(i){re(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function mn(n){if(Array.isArray(n))return n}function vn(n,e){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var i,t,a,u,l=[],o=!0,s=!1;try{if(a=(r=r.call(n)).next,e===0){if(Object(r)!==r)return;o=!1}else for(;!(o=(i=a.call(r)).done)&&(l.push(i.value),l.length!==e);o=!0);}catch(c){s=!0,t=c}finally{try{if(!o&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw t}}return l}}function De(n,e){(e==null||e>n.length)&&(e=n.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=n[r];return i}function gt(n,e){if(n){if(typeof n=="string")return De(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return De(n,e)}}function gn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(n,e){return mn(n)||vn(n,e)||gt(n,e)||gn()}function bn(n,e){if(n==null)return{};var r={},i=Object.keys(n),t,a;for(a=0;a<i.length;a++)t=i[a],!(e.indexOf(t)>=0)&&(r[t]=n[t]);return r}function K(n,e){if(n==null)return{};var r=bn(n,e),i,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}var xn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function En(n){var e=n.defaultInputValue,r=e===void 0?"":e,i=n.defaultMenuIsOpen,t=i===void 0?!1:i,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,o=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,v=n.onMenuOpen,g=n.value,b=K(n,xn),m=p.useState(l!==void 0?l:r),h=q(m,2),x=h[0],D=h[1],w=p.useState(o!==void 0?o:t),O=q(w,2),I=O[0],P=O[1],A=p.useState(g!==void 0?g:u),F=q(A,2),M=F[0],T=F[1],B=p.useCallback(function(H,X){typeof s=="function"&&s(H,X),T(H)},[s]),$=p.useCallback(function(H,X){var J;typeof c=="function"&&(J=c(H,X)),D(J!==void 0?J:H)},[c]),U=p.useCallback(function(){typeof v=="function"&&v(),P(!0)},[v]),N=p.useCallback(function(){typeof d=="function"&&d(),P(!1)},[d]),k=l!==void 0?l:x,L=o!==void 0?o:I,z=g!==void 0?g:M;return S(S({},b),{},{inputValue:k,menuIsOpen:L,onChange:B,onInputChange:$,onMenuClose:N,onMenuOpen:U,value:z})}function Cn(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function He(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,vt(i.key),i)}}function Sn(n,e,r){return e&&He(n.prototype,e),r&&He(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function Ie(n,e){return Ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,t){return i.__proto__=t,i},Ie(n,e)}function yn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ie(n,e)}function pe(n){return pe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},pe(n)}function bt(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bt=function(){return!!n})()}function Fn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function wn(n,e){if(e&&(ee(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Fn(n)}function On(n){var e=bt();return function(){var i=pe(n),t;if(e){var a=pe(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return wn(this,t)}}function Dn(n){if(Array.isArray(n))return De(n)}function In(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Pn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ve(n){return Dn(n)||In(n)||gt(n)||Pn()}var C=function(e,r){var i=arguments;if(r==null||!en.call(r,"css"))return p.createElement.apply(void 0,i);var t=i.length,a=new Array(t);a[0]=tn,a[1]=nn(e,r);for(var u=2;u<t;u++)a[u]=i[u];return p.createElement.apply(null,a)};function Le(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return rn(e)}var An=function(){var e=Le.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Mn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var Pe=p.useLayoutEffect,Vn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],fe=function(){};function Ln(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Rn(n,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),t=2;t<r;t++)i[t-2]=arguments[t];var a=[].concat(i);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&a.push("".concat(Ln(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var _e=function(e){return Un(e)?e.filter(Boolean):ee(e)==="object"&&e!==null?[e]:[]},xt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=K(e,Vn);return S({},r)},V=function(e,r,i){var t=e.cx,a=e.getStyles,u=e.getClassNames,l=e.className;return{css:a(r,e),className:t(i??{},u(r,e),l)}};function ge(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function kn(n){return ge(n)?window.innerHeight:n.clientHeight}function Et(n){return ge(n)?window.pageYOffset:n.scrollTop}function he(n,e){if(ge(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Tn(n){var e=getComputedStyle(n),r=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(r&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function $n(n,e,r,i){return r*((n=n/i-1)*n*n+1)+e}function ue(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:fe,t=Et(n),a=e-t,u=10,l=0;function o(){l+=u;var s=$n(l,t,a,r);he(n,s),l<r?window.requestAnimationFrame(o):i(n)}o()}function ze(n,e){var r=n.getBoundingClientRect(),i=e.getBoundingClientRect(),t=e.offsetHeight/3;i.bottom+t>r.bottom?he(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):i.top-t<r.top&&he(n,Math.max(e.offsetTop-t,0))}function Bn(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Ue(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function jn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Ct=!1,Hn={get passive(){return Ct=!0}},se=typeof window<"u"?window:{};se.addEventListener&&se.removeEventListener&&(se.addEventListener("p",fe,Hn),se.removeEventListener("p",fe,!1));var _n=Ct;function zn(n){return n!=null}function Un(n){return Array.isArray(n)}function le(n,e,r){return n?e:r}var Nn=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),t=1;t<r;t++)i[t-1]=arguments[t];var a=Object.entries(e).filter(function(u){var l=q(u,1),o=l[0];return!i.includes(o)});return a.reduce(function(u,l){var o=q(l,2),s=o[0],c=o[1];return u[s]=c,u},{})},Wn=["children","innerProps"],Gn=["children","innerProps"];function Yn(n){var e=n.maxHeight,r=n.menuEl,i=n.minHeight,t=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,o=Tn(r),s={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return s;var c=o.getBoundingClientRect(),d=c.height,v=r.getBoundingClientRect(),g=v.bottom,b=v.height,m=v.top,h=r.offsetParent.getBoundingClientRect(),x=h.top,D=u?window.innerHeight:kn(o),w=Et(o),O=parseInt(getComputedStyle(r).marginBottom,10),I=parseInt(getComputedStyle(r).marginTop,10),P=x-I,A=D-m,F=P+w,M=d-w-m,T=g-D+w+O,B=w+m-I,$=160;switch(t){case"auto":case"bottom":if(A>=b)return{placement:"bottom",maxHeight:e};if(M>=b&&!u)return a&&ue(o,T,$),{placement:"bottom",maxHeight:e};if(!u&&M>=i||u&&A>=i){a&&ue(o,T,$);var U=u?A-O:M-O;return{placement:"bottom",maxHeight:U}}if(t==="auto"||u){var N=e,k=u?P:F;return k>=i&&(N=Math.min(k-O-l,e)),{placement:"top",maxHeight:N}}if(t==="bottom")return a&&he(o,T),{placement:"bottom",maxHeight:e};break;case"top":if(P>=b)return{placement:"top",maxHeight:e};if(F>=b&&!u)return a&&ue(o,B,$),{placement:"top",maxHeight:e};if(!u&&F>=i||u&&P>=i){var L=e;return(!u&&F>=i||u&&P>=i)&&(L=u?P-I:F-I),a&&ue(o,B,$),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return s}function qn(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var St=function(e){return e==="auto"?"bottom":e},Kn=function(e,r){var i,t=e.placement,a=e.theme,u=a.borderRadius,l=a.spacing,o=a.colors;return S((i={label:"menu"},re(i,qn(t),"100%"),re(i,"position","absolute"),re(i,"width","100%"),re(i,"zIndex",1),i),r?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},yt=p.createContext(null),Xn=function(e){var r=e.children,i=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,u=e.menuPosition,l=e.menuShouldScrollIntoView,o=e.theme,s=p.useContext(yt)||{},c=s.setPortalPlacement,d=p.useRef(null),v=p.useState(t),g=q(v,2),b=g[0],m=g[1],h=p.useState(null),x=q(h,2),D=x[0],w=x[1],O=o.spacing.controlHeight;return Pe(function(){var I=d.current;if(I){var P=u==="fixed",A=l&&!P,F=Yn({maxHeight:t,menuEl:I,minHeight:i,placement:a,shouldScroll:A,isFixedPosition:P,controlHeight:O});m(F.maxHeight),w(F.placement),c==null||c(F.placement)}},[t,a,u,l,i,c,O]),r({ref:d,placerProps:S(S({},e),{},{placement:D||St(a),maxHeight:b})})},Jn=function(e){var r=e.children,i=e.innerRef,t=e.innerProps;return C("div",y({},V(e,"menu",{menu:!0}),{ref:i},t),r)},Zn=Jn,Qn=function(e,r){var i=e.maxHeight,t=e.theme.spacing.baseUnit;return S({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:t,paddingTop:t})},er=function(e){var r=e.children,i=e.innerProps,t=e.innerRef,a=e.isMulti;return C("div",y({},V(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},i),r)},Ft=function(e,r){var i=e.theme,t=i.spacing.baseUnit,a=i.colors;return S({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},tr=Ft,nr=Ft,rr=function(e){var r=e.children,i=r===void 0?"No options":r,t=e.innerProps,a=K(e,Wn);return C("div",y({},V(S(S({},a),{},{children:i,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),i)},ir=function(e){var r=e.children,i=r===void 0?"Loading...":r,t=e.innerProps,a=K(e,Gn);return C("div",y({},V(S(S({},a),{},{children:i,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),i)},or=function(e){var r=e.rect,i=e.offset,t=e.position;return{left:r.left,position:t,top:i,width:r.width,zIndex:1}},ar=function(e){var r=e.appendTo,i=e.children,t=e.controlElement,a=e.innerProps,u=e.menuPlacement,l=e.menuPosition,o=p.useRef(null),s=p.useRef(null),c=p.useState(St(u)),d=q(c,2),v=d[0],g=d[1],b=p.useMemo(function(){return{setPortalPlacement:g}},[]),m=p.useState(null),h=q(m,2),x=h[0],D=h[1],w=p.useCallback(function(){if(t){var A=Bn(t),F=l==="fixed"?0:window.pageYOffset,M=A[v]+F;(M!==(x==null?void 0:x.offset)||A.left!==(x==null?void 0:x.rect.left)||A.width!==(x==null?void 0:x.rect.width))&&D({offset:M,rect:A})}},[t,l,v,x==null?void 0:x.offset,x==null?void 0:x.rect.left,x==null?void 0:x.rect.width]);Pe(function(){w()},[w]);var O=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),t&&o.current&&(s.current=an(t,o.current,w,{elementResize:"ResizeObserver"in window}))},[t,w]);Pe(function(){O()},[O]);var I=p.useCallback(function(A){o.current=A,O()},[O]);if(!r&&l!=="fixed"||!x)return null;var P=C("div",y({ref:I},V(S(S({},e),{},{offset:x.offset,position:l,rect:x.rect}),"menuPortal",{"menu-portal":!0}),a),i);return C(yt.Provider,{value:b},r?Wt.createPortal(P,r):P)},ur=function(e){var r=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},sr=function(e){var r=e.children,i=e.innerProps,t=e.isDisabled,a=e.isRtl;return C("div",y({},V(e,"container",{"--is-disabled":t,"--is-rtl":a}),i),r)},lr=function(e,r){var i=e.theme.spacing,t=e.isMulti,a=e.hasValue,u=e.selectProps.controlShouldRenderValue;return S({alignItems:"center",display:t&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},cr=function(e){var r=e.children,i=e.innerProps,t=e.isMulti,a=e.hasValue;return C("div",y({},V(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),i),r)},dr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},pr=function(e){var r=e.children,i=e.innerProps;return C("div",y({},V(e,"indicatorsContainer",{indicators:!0}),i),r)},Ne,fr=["size"],hr=["innerProps","isRtl","size"],mr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},wt=function(e){var r=e.size,i=K(e,fr);return C("svg",y({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:mr},i))},Re=function(e){return C(wt,y({size:20},e),C("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ot=function(e){return C(wt,y({size:20},e),C("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Dt=function(e,r){var i=e.isFocused,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return S({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?u.neutral60:u.neutral20,padding:a*2,":hover":{color:i?u.neutral80:u.neutral40}})},vr=Dt,gr=function(e){var r=e.children,i=e.innerProps;return C("div",y({},V(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||C(Ot,null))},br=Dt,xr=function(e){var r=e.children,i=e.innerProps;return C("div",y({},V(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||C(Re,null))},Er=function(e,r){var i=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return S({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Cr=function(e){var r=e.innerProps;return C("span",y({},r,V(e,"indicatorSeparator",{"indicator-separator":!0})))},Sr=An(Ne||(Ne=Mn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),yr=function(e,r){var i=e.isFocused,t=e.size,a=e.theme,u=a.colors,l=a.spacing.baseUnit;return S({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?u.neutral60:u.neutral20,padding:l*2})},be=function(e){var r=e.delay,i=e.offset;return C("span",{css:Le({animation:"".concat(Sr," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Fr=function(e){var r=e.innerProps,i=e.isRtl,t=e.size,a=t===void 0?4:t,u=K(e,hr);return C("div",y({},V(S(S({},u),{},{innerProps:r,isRtl:i,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),C(be,{delay:0,offset:i}),C(be,{delay:160,offset:!0}),C(be,{delay:320,offset:!i}))},wr=function(e,r){var i=e.isDisabled,t=e.isFocused,a=e.theme,u=a.colors,l=a.borderRadius,o=a.spacing;return S({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?u.neutral5:u.neutral0,borderColor:i?u.neutral10:t?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},Or=function(e){var r=e.children,i=e.isDisabled,t=e.isFocused,a=e.innerRef,u=e.innerProps,l=e.menuIsOpen;return C("div",y({ref:a},V(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":t,"control--menu-is-open":l}),u,{"aria-disabled":i||void 0}),r)},Dr=Or,Ir=["data"],Pr=function(e,r){var i=e.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},Ar=function(e){var r=e.children,i=e.cx,t=e.getStyles,a=e.getClassNames,u=e.Heading,l=e.headingProps,o=e.innerProps,s=e.label,c=e.theme,d=e.selectProps;return C("div",y({},V(e,"group",{group:!0}),o),C(u,y({},l,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:i}),s),C("div",null,r))},Mr=function(e,r){var i=e.theme,t=i.colors,a=i.spacing;return S({label:"group",cursor:"default",display:"block"},r?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Vr=function(e){var r=xt(e);r.data;var i=K(r,Ir);return C("div",y({},V(e,"groupHeading",{"group-heading":!0}),i))},Lr=Ar,Rr=["innerRef","isDisabled","isHidden","inputClassName"],kr=function(e,r){var i=e.isDisabled,t=e.value,a=e.theme,u=a.spacing,l=a.colors;return S(S({visibility:i?"hidden":"visible",transform:t?"translateZ(0)":""},Tr),r?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},It={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Tr={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":S({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},It)},$r=function(e){return S({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},It)},Br=function(e){var r=e.cx,i=e.value,t=xt(e),a=t.innerRef,u=t.isDisabled,l=t.isHidden,o=t.inputClassName,s=K(t,Rr);return C("div",y({},V(e,"input",{"input-container":!0}),{"data-value":i||""}),C("input",y({className:r({input:!0},o),ref:a,style:$r(l),disabled:u},s)))},jr=Br,Hr=function(e,r){var i=e.theme,t=i.spacing,a=i.borderRadius,u=i.colors;return S({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},_r=function(e,r){var i=e.theme,t=i.borderRadius,a=i.colors,u=e.cropWithEllipsis;return S({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},zr=function(e,r){var i=e.theme,t=i.spacing,a=i.borderRadius,u=i.colors,l=e.isFocused;return S({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Pt=function(e){var r=e.children,i=e.innerProps;return C("div",i,r)},Ur=Pt,Nr=Pt;function Wr(n){var e=n.children,r=n.innerProps;return C("div",y({role:"button"},r),e||C(Re,{size:14}))}var Gr=function(e){var r=e.children,i=e.components,t=e.data,a=e.innerProps,u=e.isDisabled,l=e.removeProps,o=e.selectProps,s=i.Container,c=i.Label,d=i.Remove;return C(s,{data:t,innerProps:S(S({},V(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},C(c,{data:t,innerProps:S({},V(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},r),C(d,{data:t,innerProps:S(S({},V(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},l),selectProps:o}))},Yr=Gr,qr=function(e,r){var i=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.theme,l=u.spacing,o=u.colors;return S({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?o.primary:t?o.primary25:"transparent",color:i?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:a?o.primary:o.primary50}})},Kr=function(e){var r=e.children,i=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.innerRef,l=e.innerProps;return C("div",y({},V(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":t,"option--is-selected":a}),{ref:u,"aria-disabled":i},l),r)},Xr=Kr,Jr=function(e,r){var i=e.theme,t=i.spacing,a=i.colors;return S({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},Zr=function(e){var r=e.children,i=e.innerProps;return C("div",y({},V(e,"placeholder",{placeholder:!0}),i),r)},Qr=Zr,ei=function(e,r){var i=e.isDisabled,t=e.theme,a=t.spacing,u=t.colors;return S({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},ti=function(e){var r=e.children,i=e.isDisabled,t=e.innerProps;return C("div",y({},V(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),t),r)},ni=ti,ri={ClearIndicator:xr,Control:Dr,DropdownIndicator:gr,DownChevron:Ot,CrossIcon:Re,Group:Lr,GroupHeading:Vr,IndicatorsContainer:pr,IndicatorSeparator:Cr,Input:jr,LoadingIndicator:Fr,Menu:Zn,MenuList:er,MenuPortal:ar,LoadingMessage:ir,NoOptionsMessage:rr,MultiValue:Yr,MultiValueContainer:Ur,MultiValueLabel:Nr,MultiValueRemove:Wr,Option:Xr,Placeholder:Qr,SelectContainer:sr,SingleValue:ni,ValueContainer:cr},ii=function(e){return S(S({},ri),e.components)},We=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function oi(n,e){return!!(n===e||We(n)&&We(e))}function ai(n,e){if(n.length!==e.length)return!1;for(var r=0;r<n.length;r++)if(!oi(n[r],e[r]))return!1;return!0}function ui(n,e){e===void 0&&(e=ai);var r=null;function i(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(r&&r.lastThis===this&&e(t,r.lastArgs))return r.lastResult;var u=n.apply(this,t);return r={lastResult:u,lastArgs:t,lastThis:this},u}return i.clear=function(){r=null},i}var si={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},li=function(e){return C("span",y({css:si},e))},Ge=li,ci={guidance:function(e){var r=e.isSearchable,i=e.isMulti,t=e.tabSelectsValue,a=e.context,u=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,i=e.label,t=i===void 0?"":i,a=e.labels,u=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var r=e.context,i=e.focused,t=e.options,a=e.label,u=a===void 0?"":a,l=e.selectValue,o=e.isDisabled,s=e.isSelected,c=e.isAppleDevice,d=function(m,h){return m&&m.length?"".concat(m.indexOf(h)+1," of ").concat(m.length):""};if(r==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,i),".");if(r==="menu"&&c){var v=o?" disabled":"",g="".concat(s?" selected":"").concat(v);return"".concat(u).concat(g,", ").concat(d(t,i),".")}return""},onFilter:function(e){var r=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},di=function(e){var r=e.ariaSelection,i=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,u=e.isFocused,l=e.selectValue,o=e.selectProps,s=e.id,c=e.isAppleDevice,d=o.ariaLiveMessages,v=o.getOptionLabel,g=o.inputValue,b=o.isMulti,m=o.isOptionDisabled,h=o.isSearchable,x=o.menuIsOpen,D=o.options,w=o.screenReaderStatus,O=o.tabSelectsValue,I=o.isLoading,P=o["aria-label"],A=o["aria-live"],F=p.useMemo(function(){return S(S({},ci),d||{})},[d]),M=p.useMemo(function(){var k="";if(r&&F.onChange){var L=r.option,z=r.options,H=r.removedValue,X=r.removedValues,J=r.value,oe=function(G){return Array.isArray(G)?null:G},R=H||L||oe(J),j=R?v(R):"",W=z||X||void 0,Z=W?W.map(v):[],_=S({isDisabled:R&&m(R,l),label:j,labels:Z},r);k=F.onChange(_)}return k},[r,F,m,l,v]),T=p.useMemo(function(){var k="",L=i||t,z=!!(i&&l&&l.includes(i));if(L&&F.onFocus){var H={focused:L,label:v(L),isDisabled:m(L,l),isSelected:z,options:a,context:L===i?"menu":"value",selectValue:l,isAppleDevice:c};k=F.onFocus(H)}return k},[i,t,v,m,F,a,l,c]),B=p.useMemo(function(){var k="";if(x&&D.length&&!I&&F.onFilter){var L=w({count:a.length});k=F.onFilter({inputValue:g,resultsMessage:L})}return k},[a,g,x,F,D,w,I]),$=(r==null?void 0:r.action)==="initial-input-focus",U=p.useMemo(function(){var k="";if(F.guidance){var L=t?"value":x?"menu":"input";k=F.guidance({"aria-label":P,context:L,isDisabled:i&&m(i,l),isMulti:b,isSearchable:h,tabSelectsValue:O,isInitialFocus:$})}return k},[P,i,t,b,m,h,x,F,l,O,$]),N=C(p.Fragment,null,C("span",{id:"aria-selection"},M),C("span",{id:"aria-focused"},T),C("span",{id:"aria-results"},B),C("span",{id:"aria-guidance"},U));return C(p.Fragment,null,C(Ge,{id:s},$&&N),C(Ge,{"aria-live":A,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!$&&N))},pi=di,Ae=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],fi=new RegExp("["+Ae.map(function(n){return n.letters}).join("")+"]","g"),At={};for(var xe=0;xe<Ae.length;xe++)for(var Ee=Ae[xe],Ce=0;Ce<Ee.letters.length;Ce++)At[Ee.letters[Ce]]=Ee.base;var Mt=function(e){return e.replace(fi,function(r){return At[r]})},hi=ui(Mt),Ye=function(e){return e.replace(/^\s+|\s+$/g,"")},mi=function(e){return"".concat(e.label," ").concat(e.value)},vi=function(e){return function(r,i){if(r.data.__isNew__)return!0;var t=S({ignoreCase:!0,ignoreAccents:!0,stringify:mi,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,u=t.ignoreAccents,l=t.stringify,o=t.trim,s=t.matchFrom,c=o?Ye(i):i,d=o?Ye(l(r)):l(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=hi(c),d=Mt(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},gi=["innerRef"];function bi(n){var e=n.innerRef,r=K(n,gi),i=Nn(r,"onExited","in","enter","exit","appear");return C("input",y({ref:e},i,{css:Le({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var xi=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Ei(n){var e=n.isEnabled,r=n.onBottomArrive,i=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),o=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(h,x){if(s.current!==null){var D=s.current,w=D.scrollTop,O=D.scrollHeight,I=D.clientHeight,P=s.current,A=x>0,F=O-I-w,M=!1;F>x&&u.current&&(i&&i(h),u.current=!1),A&&l.current&&(a&&a(h),l.current=!1),A&&x>F?(r&&!u.current&&r(h),P.scrollTop=O,M=!0,u.current=!0):!A&&-x>w&&(t&&!l.current&&t(h),P.scrollTop=0,M=!0,l.current=!0),M&&xi(h)}},[r,i,t,a]),d=p.useCallback(function(h){c(h,h.deltaY)},[c]),v=p.useCallback(function(h){o.current=h.changedTouches[0].clientY},[]),g=p.useCallback(function(h){var x=o.current-h.changedTouches[0].clientY;c(h,x)},[c]),b=p.useCallback(function(h){if(h){var x=_n?{passive:!1}:!1;h.addEventListener("wheel",d,x),h.addEventListener("touchstart",v,x),h.addEventListener("touchmove",g,x)}},[g,v,d]),m=p.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",v,!1),h.removeEventListener("touchmove",g,!1))},[g,v,d]);return p.useEffect(function(){if(e){var h=s.current;return b(h),function(){m(h)}}},[e,b,m]),function(h){s.current=h}}var qe=["boxSizing","height","overflow","paddingRight","position"],Ke={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Xe(n){n.preventDefault()}function Je(n){n.stopPropagation()}function Ze(){var n=this.scrollTop,e=this.scrollHeight,r=n+this.offsetHeight;n===0?this.scrollTop=1:r===e&&(this.scrollTop=n-1)}function Qe(){return"ontouchstart"in window||navigator.maxTouchPoints}var et=!!(typeof window<"u"&&window.document&&window.document.createElement),ne=0,te={capture:!1,passive:!1};function Ci(n){var e=n.isEnabled,r=n.accountForScrollbars,i=r===void 0?!0:r,t=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(o){if(et){var s=document.body,c=s&&s.style;if(i&&qe.forEach(function(b){var m=c&&c[b];t.current[b]=m}),i&&ne<1){var d=parseInt(t.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,g=window.innerWidth-v+d||0;Object.keys(Ke).forEach(function(b){var m=Ke[b];c&&(c[b]=m)}),c&&(c.paddingRight="".concat(g,"px"))}s&&Qe()&&(s.addEventListener("touchmove",Xe,te),o&&(o.addEventListener("touchstart",Ze,te),o.addEventListener("touchmove",Je,te))),ne+=1}},[i]),l=p.useCallback(function(o){if(et){var s=document.body,c=s&&s.style;ne=Math.max(ne-1,0),i&&ne<1&&qe.forEach(function(d){var v=t.current[d];c&&(c[d]=v)}),s&&Qe()&&(s.removeEventListener("touchmove",Xe,te),o&&(o.removeEventListener("touchstart",Ze,te),o.removeEventListener("touchmove",Je,te)))}},[i]);return p.useEffect(function(){if(e){var o=a.current;return u(o),function(){l(o)}}},[e,u,l]),function(o){a.current=o}}var Si=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},yi={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Fi(n){var e=n.children,r=n.lockEnabled,i=n.captureEnabled,t=i===void 0?!0:i,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,o=n.onTopLeave,s=Ei({isEnabled:t,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:o}),c=Ci({isEnabled:r}),d=function(g){s(g),c(g)};return C(p.Fragment,null,r&&C("div",{onClick:Si,css:yi}),e(d))}var wi={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Oi=function(e){var r=e.name,i=e.onFocus;return C("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:wi,value:"",onChange:function(){}})},Di=Oi;function ke(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ii(){return ke(/^iPhone/i)}function Vt(){return ke(/^Mac/i)}function Pi(){return ke(/^iPad/i)||Vt()&&navigator.maxTouchPoints>1}function Ai(){return Ii()||Pi()}function Mi(){return Vt()||Ai()}var Vi=function(e){return e.label},Li=function(e){return e.label},Ri=function(e){return e.value},ki=function(e){return!!e.isDisabled},Ti={clearIndicator:br,container:ur,control:wr,dropdownIndicator:vr,group:Pr,groupHeading:Mr,indicatorsContainer:dr,indicatorSeparator:Er,input:kr,loadingIndicator:yr,loadingMessage:nr,menu:Kn,menuList:Qn,menuPortal:or,multiValue:Hr,multiValueLabel:_r,multiValueRemove:zr,noOptionsMessage:tr,option:qr,placeholder:Jr,singleValue:ei,valueContainer:lr},$i={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Bi=4,Lt=4,ji=38,Hi=Lt*2,_i={baseUnit:Lt,controlHeight:ji,menuGutter:Hi},Se={borderRadius:Bi,colors:$i,spacing:_i},zi={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ue(),captureMenuScroll:!Ue(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:vi(),formatGroupLabel:Vi,getOptionLabel:Li,getOptionValue:Ri,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:ki,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!jn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function tt(n,e,r,i){var t=Tt(n,e,r),a=$t(n,e,r),u=kt(n,e),l=me(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:u,value:l,index:i}}function de(n,e){return n.options.map(function(r,i){if("options"in r){var t=r.options.map(function(u,l){return tt(n,u,e,l)}).filter(function(u){return rt(n,u)});return t.length>0?{type:"group",data:r,options:t,index:i}:void 0}var a=tt(n,r,e,i);return rt(n,a)?a:void 0}).filter(zn)}function Rt(n){return n.reduce(function(e,r){return r.type==="group"?e.push.apply(e,Ve(r.options.map(function(i){return i.data}))):e.push(r.data),e},[])}function nt(n,e){return n.reduce(function(r,i){return i.type==="group"?r.push.apply(r,Ve(i.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(i.index,"-").concat(t.index)}}))):r.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),r},[])}function Ui(n,e){return Rt(de(n,e))}function rt(n,e){var r=n.inputValue,i=r===void 0?"":r,t=e.data,a=e.isSelected,u=e.label,l=e.value;return(!jt(n)||!a)&&Bt(n,{label:u,value:l,data:t},i)}function Ni(n,e){var r=n.focusedValue,i=n.selectValue,t=i.indexOf(r);if(t>-1){var a=e.indexOf(r);if(a>-1)return r;if(t<e.length)return e[t]}return null}function Wi(n,e){var r=n.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var ye=function(e,r){var i,t=(i=e.find(function(a){return a.data===r}))===null||i===void 0?void 0:i.id;return t||null},kt=function(e,r){return e.getOptionLabel(r)},me=function(e,r){return e.getOptionValue(r)};function Tt(n,e,r){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,r):!1}function $t(n,e,r){if(r.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,r);var i=me(n,e);return r.some(function(t){return me(n,t)===i})}function Bt(n,e,r){return n.filterOption?n.filterOption(e,r):!0}var jt=function(e){var r=e.hideSelectedOptions,i=e.isMulti;return r===void 0?i:r},Gi=1,Ht=function(n){yn(r,n);var e=On(r);function r(i){var t;if(Cn(this,r),t=e.call(this,i),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Mi(),t.controlRef=null,t.getControlRef=function(o){t.controlRef=o},t.focusedOptionRef=null,t.getFocusedOptionRef=function(o){t.focusedOptionRef=o},t.menuListRef=null,t.getMenuListRef=function(o){t.menuListRef=o},t.inputRef=null,t.getInputRef=function(o){t.inputRef=o},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(o,s){var c=t.props,d=c.onChange,v=c.name;s.name=v,t.ariaOnChange(o,s),d(o,s)},t.setValue=function(o,s,c){var d=t.props,v=d.closeMenuOnSelect,g=d.isMulti,b=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:b}),v&&(t.setState({inputIsHiddenAfterUpdate:!g}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(o,{action:s,option:c})},t.selectOption=function(o){var s=t.props,c=s.blurInputOnSelect,d=s.isMulti,v=s.name,g=t.state.selectValue,b=d&&t.isOptionSelected(o,g),m=t.isOptionDisabled(o,g);if(b){var h=t.getOptionValue(o);t.setValue(g.filter(function(x){return t.getOptionValue(x)!==h}),"deselect-option",o)}else if(!m)d?t.setValue([].concat(Ve(g),[o]),"select-option",o):t.setValue(o,"select-option");else{t.ariaOnChange(o,{action:"select-option",option:o,name:v});return}c&&t.blurInput()},t.removeValue=function(o){var s=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(o),v=c.filter(function(b){return t.getOptionValue(b)!==d}),g=le(s,v,v[0]||null);t.onChange(g,{action:"remove-value",removedValue:o}),t.focusInput()},t.clearValue=function(){var o=t.state.selectValue;t.onChange(le(t.props.isMulti,[],null),{action:"clear",removedValues:o})},t.popValue=function(){var o=t.props.isMulti,s=t.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),v=le(o,d,d[0]||null);t.onChange(v,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(o){return ye(t.state.focusableOptionsWithIds,o)},t.getFocusableOptionsWithIds=function(){return nt(de(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return Rn.apply(void 0,[t.props.classNamePrefix].concat(s))},t.getOptionLabel=function(o){return kt(t.props,o)},t.getOptionValue=function(o){return me(t.props,o)},t.getStyles=function(o,s){var c=t.props.unstyled,d=Ti[o](s,c);d.boxSizing="border-box";var v=t.props.styles[o];return v?v(d,s):d},t.getClassNames=function(o,s){var c,d;return(c=(d=t.props.classNames)[o])===null||c===void 0?void 0:c.call(d,s)},t.getElementId=function(o){return"".concat(t.state.instancePrefix,"-").concat(o)},t.getComponents=function(){return ii(t.props)},t.buildCategorizedOptions=function(){return de(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Rt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(o,s){t.setState({ariaSelection:S({value:o},s)})},t.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(o){t.blockOptionHover=!1},t.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&t.onMenuClose():s&&t.openMenu("first"):(s&&(t.openAfterFocus=!0),t.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},t.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!t.props.isDisabled){var s=t.props,c=s.isMulti,d=s.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),o.preventDefault()}},t.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(t.clearValue(),o.preventDefault(),t.openAfterFocus=!1,o.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(o){typeof t.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&ge(o.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(o)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(o){var s=o.touches,c=s&&s.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(o){var s=o.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),v=Math.abs(c.clientY-t.initialTouchY),g=5;t.userIsDragging=d>g||v>g}},t.onTouchEnd=function(o){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(o.target)&&t.menuListRef&&!t.menuListRef.contains(o.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(o){t.userIsDragging||t.onControlMouseDown(o)},t.onClearIndicatorTouchEnd=function(o){t.userIsDragging||t.onClearIndicatorMouseDown(o)},t.onDropdownIndicatorTouchEnd=function(o){t.userIsDragging||t.onDropdownIndicatorMouseDown(o)},t.handleInputChange=function(o){var s=t.props.inputValue,c=o.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:s}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(o){t.props.onFocus&&t.props.onFocus(o),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(o){var s=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(o),t.onInputChange("",{action:"input-blur",prevInputValue:s}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(o){if(!(t.blockOptionHover||t.state.focusedOption===o)){var s=t.getFocusableOptions(),c=s.indexOf(o);t.setState({focusedOption:o,focusedOptionId:c>-1?t.getFocusedOptionId(o):null})}},t.shouldHideSelectedOptions=function(){return jt(t.props)},t.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),t.focus()},t.onKeyDown=function(o){var s=t.props,c=s.isMulti,d=s.backspaceRemovesValue,v=s.escapeClearsValue,g=s.inputValue,b=s.isClearable,m=s.isDisabled,h=s.menuIsOpen,x=s.onKeyDown,D=s.tabSelectsValue,w=s.openMenuOnFocus,O=t.state,I=O.focusedOption,P=O.focusedValue,A=O.selectValue;if(!m&&!(typeof x=="function"&&(x(o),o.defaultPrevented))){switch(t.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||g)return;t.focusValue("previous");break;case"ArrowRight":if(!c||g)return;t.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(P)t.removeValue(P);else{if(!d)return;c?t.popValue():b&&t.clearValue()}break;case"Tab":if(t.isComposing||o.shiftKey||!h||!D||!I||w&&t.isOptionSelected(I,A))return;t.selectOption(I);break;case"Enter":if(o.keyCode===229)break;if(h){if(!I||t.isComposing)return;t.selectOption(I);break}return;case"Escape":h?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:g}),t.onMenuClose()):b&&v&&t.clearValue();break;case" ":if(g)return;if(!h){t.openMenu("first");break}if(!I)return;t.selectOption(I);break;case"ArrowUp":h?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":h?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!h)return;t.focusOption("pageup");break;case"PageDown":if(!h)return;t.focusOption("pagedown");break;case"Home":if(!h)return;t.focusOption("first");break;case"End":if(!h)return;t.focusOption("last");break;default:return}o.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++Gi),t.state.selectValue=_e(i.value),i.menuIsOpen&&t.state.selectValue.length){var a=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),l=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=a,t.state.focusedOption=u[l],t.state.focusedOptionId=ye(a,u[l])}return t}return Sn(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&ze(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&t.isDisabled||o&&l&&!t.menuIsOpen)&&this.focusInput(),o&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(ze(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,u=this.state,l=u.selectValue,o=u.isFocused,s=this.buildFocusableOptions(),c=t==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(l);l||(o=-1);var s=u.length-1,c=-1;if(u.length){switch(t){case"previous":o===0?c=0:o===-1?c=s:c=o-1;break;case"next":o>-1&&o<s&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var o=0,s=l.indexOf(u);u||(s=-1),t==="up"?o=s>0?s-1:l.length-1:t==="down"?o=(s+1)%l.length:t==="pageup"?(o=s-a,o<0&&(o=0)):t==="pagedown"?(o=s+a,o>l.length-1&&(o=l.length-1)):t==="last"&&(o=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Se):S(S({},Se),this.props.theme):Se}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,o=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,g=d.isRtl,b=d.options,m=this.hasValue();return{clearValue:t,cx:a,getStyles:u,getClassNames:l,getValue:o,hasValue:m,isMulti:v,isRtl:g,options:b,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,u=t.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(t,a){return Tt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return $t(this.props,t,a)}},{key:"filterOption",value:function(t,a){return Bt(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,u=t.isSearchable,l=t.inputId,o=t.inputValue,s=t.tabIndex,c=t.form,d=t.menuIsOpen,v=t.required,g=this.getComponents(),b=g.Input,m=this.state,h=m.inputIsHidden,x=m.ariaSelection,D=this.commonProps,w=l||this.getElementId("input"),O=S(S(S({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(x==null?void 0:x.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(b,y({},D,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:o},O)):p.createElement(bi,y({id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:fe,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,o=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,v=this.commonProps,g=this.props,b=g.controlShouldRenderValue,m=g.isDisabled,h=g.isMulti,x=g.inputValue,D=g.placeholder,w=this.state,O=w.selectValue,I=w.focusedValue,P=w.isFocused;if(!this.hasValue()||!b)return x?null:p.createElement(d,y({},v,{key:"placeholder",isDisabled:m,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),D);if(h)return O.map(function(F,M){var T=F===I,B="".concat(t.getOptionLabel(F),"-").concat(t.getOptionValue(F));return p.createElement(u,y({},v,{components:{Container:l,Label:o,Remove:s},isFocused:T,isDisabled:m,key:B,index:M,removeProps:{onClick:function(){return t.removeValue(F)},onTouchEnd:function(){return t.removeValue(F)},onMouseDown:function(U){U.preventDefault()}},data:F}),t.formatOptionLabel(F,"value"))});if(x)return null;var A=O[0];return p.createElement(c,y({},v,{data:A,isDisabled:m}),this.formatOptionLabel(A,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,u=t.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,y({},l,{isDisabled:o,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,o=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:s,isDisabled:l,isFocused:o}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,o=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,v=a.NoOptionsMessage,g=a.Option,b=this.commonProps,m=this.state.focusedOption,h=this.props,x=h.captureMenuScroll,D=h.inputValue,w=h.isLoading,O=h.loadingMessage,I=h.minMenuHeight,P=h.maxMenuHeight,A=h.menuIsOpen,F=h.menuPlacement,M=h.menuPosition,T=h.menuPortalTarget,B=h.menuShouldBlockScroll,$=h.menuShouldScrollIntoView,U=h.noOptionsMessage,N=h.onMenuScrollToTop,k=h.onMenuScrollToBottom;if(!A)return null;var L=function(j,W){var Z=j.type,_=j.data,Q=j.isDisabled,G=j.isSelected,ae=j.label,_t=j.value,Te=m===_,$e=Q?void 0:function(){return t.onOptionHover(_)},zt=Q?void 0:function(){return t.selectOption(_)},Be="".concat(t.getElementId("option"),"-").concat(W),Ut={id:Be,onClick:zt,onMouseMove:$e,onMouseOver:$e,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:G};return p.createElement(g,y({},b,{innerProps:Ut,data:_,isDisabled:Q,isSelected:G,key:Be,label:ae,type:Z,value:_t,isFocused:Te,innerRef:Te?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(j.data,"menu"))},z;if(this.hasOptions())z=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var j=R.data,W=R.options,Z=R.index,_="".concat(t.getElementId("group"),"-").concat(Z),Q="".concat(_,"-heading");return p.createElement(u,y({},b,{key:_,data:j,options:W,Heading:l,headingProps:{id:Q,data:R.data},label:t.formatGroupLabel(R.data)}),R.options.map(function(G){return L(G,"".concat(Z,"-").concat(G.index))}))}else if(R.type==="option")return L(R,"".concat(R.index))});else if(w){var H=O({inputValue:D});if(H===null)return null;z=p.createElement(d,b,H)}else{var X=U({inputValue:D});if(X===null)return null;z=p.createElement(v,b,X)}var J={minMenuHeight:I,maxMenuHeight:P,menuPlacement:F,menuPosition:M,menuShouldScrollIntoView:$},oe=p.createElement(Xn,y({},b,J),function(R){var j=R.ref,W=R.placerProps,Z=W.placement,_=W.maxHeight;return p.createElement(o,y({},b,J,{innerRef:j,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:w,placement:Z}),p.createElement(Fi,{captureEnabled:x,onTopArrive:N,onBottomArrive:k,lockEnabled:B},function(Q){return p.createElement(s,y({},b,{innerRef:function(ae){t.getMenuListRef(ae),Q(ae)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:t.getElementId("listbox")},isLoading:w,maxHeight:_,focusedOption:m}),z)}))});return T||M==="fixed"?p.createElement(c,y({},b,{appendTo:T,controlElement:this.controlRef,menuPlacement:F,menuPosition:M}),oe):oe}},{key:"renderFormField",value:function(){var t=this,a=this.props,u=a.delimiter,l=a.isDisabled,o=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Di,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(o)if(u){var v=d.map(function(m){return t.getOptionValue(m)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:v})}else{var g=d.length>0?d.map(function(m,h){return p.createElement("input",{key:"i-".concat(h),name:s,type:"hidden",value:t.getOptionValue(m)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,g)}else{var b=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,o=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(pi,y({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:o,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,u=t.IndicatorsContainer,l=t.SelectContainer,o=t.ValueContainer,s=this.props,c=s.className,d=s.id,v=s.isDisabled,g=s.menuIsOpen,b=this.state.isFocused,m=this.commonProps=this.getCommonProps();return p.createElement(l,y({},m,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:b}),this.renderLiveRegion(),p.createElement(a,y({},m,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:b,menuIsOpen:g}),p.createElement(o,y({},m,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,y({},m,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,v=a.instancePrefix,g=t.options,b=t.value,m=t.menuIsOpen,h=t.inputValue,x=t.isMulti,D=_e(b),w={};if(u&&(b!==u.value||g!==u.options||m!==u.menuIsOpen||h!==u.inputValue)){var O=m?Ui(t,D):[],I=m?nt(de(t,D),"".concat(v,"-option")):[],P=l?Ni(a,D):null,A=Wi(a,O),F=ye(I,A);w={selectValue:D,focusedOption:A,focusedOptionId:F,focusableOptionsWithIds:I,focusedValue:P,clearFocusValueOnUpdate:!1}}var M=o!=null&&t!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},T=s,B=c&&d;return c&&!B&&(T={value:le(x,D,D[0]||null),options:D,action:"initial-input-focus"},B=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(T=null),S(S(S({},w),M),{},{prevProps:t,ariaSelection:T,prevWasFocused:B})}}]),r}(p.Component);Ht.defaultProps=zi;var Yi=p.forwardRef(function(n,e){var r=En(n);return p.createElement(Ht,y({ref:e},r))}),it=Yi;const qi=E.form`
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
`,Ki=E.p`
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
`,Xi=E.input`
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
`,Ji=E.button`
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
`,Zi=E.svg`
  width: 18px;
  height: 18px;
  stroke: #e6533c;
`,Qi=E.button`
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
`,eo=E.svg`
  width: 18px;
  height: 18px;
`,to=E.div`
  display: flex;
  width: 100%;
  gap: ${n=>n.theme.spacing(4)};

  @media screen and (min-width: 768px) {
    max-width: 412px;
  }
`;E.div`
  color: ${n=>n.theme.colors.orangeColor};
  font-size: 14px;
`;const Fe="#1c1c1c",ce="#efede8",no="rgba(239, 237, 232, 0.1)",ot={option:n=>({...n,background:Fe,color:ce,textwrap:"nowrap"}),control:n=>({...n,backgroundColor:"transparent",borderRadius:"12px",width:"100%",height:"46px",border:"1px solid rgba(239, 237, 232, 0.2)",boxShadow:"none","&:hover":{borderColor:"#E6533C"},"&:focus":{borderColor:"#E6533C"},"@media (min-width: 768px)":{height:"50px"}}),dropdownIndicator:n=>({...n,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:ce}}),menu:n=>({...n,background:Fe,borderRadius:"12px"}),menuList:n=>({...n,"::-webkit-scrollbar":{width:"22px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:no,borderRadius:"12px",border:"7px solid",borderColor:Fe},maxHeight:"276px",borderRadius:"12px",overflowX:"hidden"}),indicatorSeparator:n=>({...n,display:"none"}),placeholder:n=>({...n,color:ce}),singleValue:n=>({...n,color:ce}),container:n=>({...n,display:"flex",alignItems:"center",border:"1px",height:"46px",width:"100%","&:hover":{borderColor:"#E6533C"},"&:focus":{borderColor:"#E6533C"},"@media (min-width: 768px)":{height:"50px"}}),input:n=>({...n,fontSize:"14px"})},at=[{value:"",label:"All"},{value:"recommended",label:"Recommended"},{value:"not recommended",label:"Not recommended"}],ro=()=>{const n=ve(),e=Y(mt),i=Qt({initialValues:{title:"",category:"",type:""},validate:l=>{const o=l.title.trim();o&&o.length<2},onSubmit:l=>a(l)}),t=(l,o)=>{if(l){const s=l.find(c=>c.value==o);return s||""}else return""},a=l=>{n(Gt(l)),n(dt()),n(Me())},u=(l,o)=>{i.setFieldValue(l,o.value);const{initialValues:s,values:c}=i;if(o.value!==s[o.value]){const d={...c,[l]:o.value};a(d)}};return f.jsxs(qi,{onSubmit:i.handleSubmit,children:[f.jsx(Xi,{type:"text",name:"title",placeholder:"Search",value:i.values.title,onChange:i.handleChange}),i.values.title!==""&&f.jsx(Ji,{type:"button",onClick:()=>{i.setFieldValue("title",""),i.setFieldValue("category",""),i.setFieldValue("type","")},children:f.jsx(Zi,{children:f.jsx("use",{href:`${ie}#x2`})})}),f.jsx(Qi,{type:"submit",children:f.jsx(eo,{children:f.jsx("use",{href:`${ie}#search`})})}),f.jsxs(to,{children:[f.jsx(it,{value:t(e,i.values.category),onChange:l=>u("category",l),options:e,placeholder:"Categories",styles:ot}),f.jsx(it,{value:t(at,i.values.type),onChange:l=>u("type",l),options:at,styles:ot})]}),f.jsx(Ki,{children:"Filters"})]})},io=n=>n.$recommended?n.theme.colors.recommendedColor:n.theme.colors.notRecommendedColor,oo=E.div`
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
`,ao=E.div`
  display: flex;
  margin-bottom: ${n=>n.theme.spacing(6)};
  align-items: baseline;
  justify-content: space-between;
`,uo=E.span`
  margin-right: auto;
  border-radius: ${n=>n.theme.radii.sd};
  padding: 7px 5px;
  /* width: 40px; */
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${n=>n.theme.colors.cardBgColor};
`,so=E.span`
  margin-right: ${n=>n.theme.spacing(2)};
  display: block;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${io};
`,ut=E.p`
  margin-right: ${n=>n.theme.spacing(4)};
  color: ${n=>n.theme.colors.whiteColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::first-letter {
    text-transform: uppercase;
  }
`,lo=E.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  color: ${n=>n.theme.colors.hoverColor};
  background: transparent;
`,co=E.svg`
  margin-left: ${n=>n.theme.spacing(2)};
  width: 16px;
  height: 16px;
`,po=E.div`
  display: flex;
  column-gap: ${n=>n.theme.spacing(4)};
  height: 32px;
  overflow-y: hidden;
  margin-bottom: ${n=>n.theme.spacing(2)};

  @media screen and (max-width: 375px) {
    max-width: 303px;
  }
`,fo=E.p`
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
`,ho=E.svg`
  width: 24px;
  height: 24px;
`,mo=E.div`
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
`,vo=({product:{_id:n,title:e,calories:r,category:i,weight:t,recommended:a=!0},toggleModal:u})=>f.jsxs(oo,{children:[f.jsxs(ao,{children:[f.jsx(uo,{children:"diet"}),f.jsx(so,{$recommended:a}),f.jsx(ut,{children:f.jsx("b",{children:a?"Recommended":"Not recommended"})}),f.jsxs(lo,{onClick:()=>u({_id:n,title:e,calories:r,category:i,weight:t}),children:["Add",f.jsx(co,{children:f.jsx("use",{href:`${ie}#icon-arrow`})})]})]}),f.jsxs(po,{children:[f.jsx(ho,{children:f.jsx("use",{href:`${ie}#icon-icon`})}),f.jsx(fo,{children:e})]}),f.jsxs(mo,{children:[f.jsxs(we,{children:[f.jsx(Oe,{children:"Calories:"})," ",f.jsx(st,{children:r})]}),f.jsxs(we,{children:[f.jsx(Oe,{children:"Category: "})," ",f.jsx(ut,{children:i})]}),f.jsxs(we,{children:[f.jsx(Oe,{children:"Weight:"})," ",f.jsx(st,{children:t})]})]})]}),go=E.ul`
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
`,bo=E.li`
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
`,xo=E(pt)`
`,Eo=E.div`
  padding: 48px 24px;

  
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,Co=E.div`
  position: relative;

   @media screen and (min-width: 374px) {
    width: 287px;
    height: 34px;
  };

  
  @media screen and (min-width: 768px) {
    width: 415px;
  }
`,So=E.input`
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
`,yo=E.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`,Fo=E.input`
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
`,wo=E.span`
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
`,Oo=E.p`
  color: ${n=>n.theme.colors.captionColor};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,Do=E.span`
display: block;
color: ${n=>n.theme.colors.whiteColor};
  font-size: 12px;
  line-height: calc(18 / 12);
`,Io=E.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,Po=E.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,Ao=E.button`
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
`,Mo=E.button`
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
`,Vo=({onToggle:n,exerciseInfo:e,setIsSuccessOpen:r,setDairyProduct:i})=>{const t=ve(),{weight:a,calories:u,_id:l,title:o}=e,[s,c]=p.useState(a),d=Math.round(s*u/100),g=Y(mt).filter(m=>m.value===e.category)[0].img;t(Yt(g));const b=()=>{if(!d)return;const m={productId:l,amount:s,calories:d};t(qt(m)),i({calories:m.calories}),r(),n()};return f.jsx(xo,{modalStyles:{maxWidth:"479px",width:"100%"},modalTabletStyles:{width:"479"},modalDesktopStyles:{width:"479px"},onClose:n,children:f.jsxs(Eo,{children:[f.jsxs(Co,{children:[f.jsx(So,{type:"text",value:o,readOnly:!0,disabled:!0}),f.jsxs(yo,{children:[f.jsx(Fo,{type:"number",value:s,onChange:m=>{c(m.target.value)}}),f.jsx(wo,{children:"grams"})]})]}),f.jsxs(Po,{children:[f.jsx(Oo,{children:"Calories:"}),f.jsx(Do,{children:d})]}),f.jsxs(Io,{children:[f.jsx(Ao,{onClick:b,children:"Add to diary"}),f.jsx(Mo,{onClick:n,children:"Cancel"})]})]})})},Lo=E(pt)`

`,Ro=E.button`
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
`,ko=E.img`
  width: 123px;
  height: 97px;
  margin-bottom: 27px;
  margin-top: 48px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 64px;
  }
`,To=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,$o=E.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`,Bo=E.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,jo=E.li`
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
`,Ho=E.span`
  color: #e6533c;
`,_o=E.div`
  margin-bottom: 16px;
`,zo=E(Kt)`
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
`,Uo=({calories:n,onClose:e})=>{const r=Y(cn);return f.jsx(Lo,{modalStyles:{maxWidth:"430px",width:"100%",height:"384px"},modalTabletStyles:{width:"430px",height:"439px"},modalDesktopStyles:{width:"430px",height:"439px"},onClose:e,children:f.jsxs(To,{children:[f.jsx(ko,{src:r,alt:"Category Image"}),f.jsxs(Bo,{children:[f.jsx($o,{children:"Well done"}),f.jsx("ul",{children:f.jsxs(jo,{children:["Calories:",f.jsx(Ho,{children:n||0})]})})]}),f.jsx(_o,{children:f.jsx(Ro,{onClick:e,children:"Next product "})}),f.jsxs(zo,{to:"/diary",children:["To the diary",f.jsx("svg",{width:" 16px",height:"16px",children:f.jsx("use",{href:`${ie}#arrow_gray`})})]})]})})},No=()=>{const n=ve(),e=Y(ft),r=Y(ht),[i,t]=p.useState(!1),[a,u]=p.useState(!1),[l,o]=p.useState(null),[s,c]=p.useState({calories:0}),d=Y(dn),v=Y(pn),g=()=>{n(Xt(1)),n(Me())},b=m=>{t(h=>!h),o(m)};return f.jsxs("div",{children:[f.jsxs(go,{children:[e.map(m=>f.jsx(bo,{children:f.jsx(vo,{product:m,toggleModal:b})},m._id)),!r&&d!==v&&f.jsx(on,{type:"button",onClick:()=>g(),children:"Load More"})]}),i&&f.jsx(Vo,{onToggle:b,setIsSuccessOpen:()=>u(m=>!m),exerciseInfo:l,setDairyProduct:c}),a&&f.jsx(Uo,{onClose:()=>u(m=>!m),calories:s.calories})]})},Wo=E.div`
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
`,Go=()=>f.jsxs(Wo,{children:[f.jsxs(lt,{children:[f.jsx(ct,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),f.jsx(lt,{children:f.jsx(ct,{children:"Try changing the search parameters."})})]}),Yo=E.div`
  padding-top: ${n=>n.theme.spacing(10)};
  padding-bottom: ${n=>n.theme.spacing(20)};

  @media screen and (min-width: 768px) {
    padding-top: ${n=>n.theme.spacing(18)};
    padding-bottom: ${n=>n.theme.spacing(12)};
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: ${n=>n.theme.spacing(20)};
  }
`,qo=E.div`
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
`,Ko=E.h1`
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
`;const Xo=E.div`
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
      url(${sn}) 1x,
      url(${ln}) 2x
    );
  }
`,Jo=({children:n})=>f.jsx(Xo,{children:n}),ra=()=>{const n=ve(),e=Y(fn),r=Y(ht);return p.useEffect(()=>{n(Jt()),n(dt()),n(Me())},[n]),f.jsx(Jo,{children:f.jsx(Yo,{children:f.jsxs(Zt,{children:[f.jsxs(qo,{children:[f.jsx(Ko,{children:"Products"}),f.jsx(ro,{})]}),r?f.jsx(un,{}):e?f.jsx(No,{}):f.jsx(Go,{})]})})})};export{ra as default};
