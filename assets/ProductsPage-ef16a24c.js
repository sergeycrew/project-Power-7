import{A as jn,r as f,B as Hn,R as gt,w as _n,u as O,a as Xt,c as Ve,j as x,D as Nn,E as Zt,i as zn,F as Un}from"./index-2d6b2d90.js";import{u as Wn}from"./formik.esm-1bfa52b1.js";import{b as Gn}from"./floating-ui.dom-9d61e2db.js";import{i as ke}from"./sprite-b513c5f2.js";import{C as Yn}from"./CustomModal-8e127aa2.js";const qn="/project-Power-7/assets/products-desktop-1x-74f26ba3.png",Kn="/project-Power-7/assets/products-desktop-2x-c2e987ce.png",Jt=t=>t.products.items,Xn=t=>t.products.isLoading,Zn=t=>t.categories.categories,Jn=jn([Jt],t=>t.length>0);function le(t){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(t)}function Qn(t,e){if(le(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e||"default");if(le(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Qt(t){var e=Qn(t,"string");return le(e)=="symbol"?e:String(e)}function ve(t,e,r){return e=Qt(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function bt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,i)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?bt(Object(r),!0).forEach(function(i){ve(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):bt(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function er(t){if(Array.isArray(t))return t}function tr(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,n,a,u,s=[],o=!0,l=!1;try{if(a=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;o=!1}else for(;!(o=(i=a.call(r)).done)&&(s.push(i.value),s.length!==e);o=!0);}catch(c){l=!0,n=c}finally{try{if(!o&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw n}}return s}}function Qe(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function en(t,e){if(t){if(typeof t=="string")return Qe(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Qe(t,e)}}function nr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(t,e){return er(t)||tr(t,e)||en(t,e)||nr()}function rr(t,e){if(t==null)return{};var r={},i=Object.keys(t),n,a;for(a=0;a<i.length;a++)n=i[a],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}function ie(t,e){if(t==null)return{};var r=rr(t,e),i,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var ir=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function ar(t){var e=t.defaultInputValue,r=e===void 0?"":e,i=t.defaultMenuIsOpen,n=i===void 0?!1:i,a=t.defaultValue,u=a===void 0?null:a,s=t.inputValue,o=t.menuIsOpen,l=t.onChange,c=t.onInputChange,d=t.onMenuClose,v=t.onMenuOpen,g=t.value,b=ie(t,ir),m=f.useState(s!==void 0?s:r),p=re(m,2),h=p[0],w=p[1],F=f.useState(o!==void 0?o:n),D=re(F,2),P=D[0],A=D[1],E=f.useState(g!==void 0?g:u),I=re(E,2),k=I[0],H=I[1],z=f.useCallback(function(Y,ae){typeof l=="function"&&l(Y,ae),H(Y)},[l]),_=f.useCallback(function(Y,ae){var oe;typeof c=="function"&&(oe=c(Y,ae)),w(oe!==void 0?oe:Y)},[c]),Q=f.useCallback(function(){typeof v=="function"&&v(),A(!0)},[v]),ee=f.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),B=s!==void 0?s:h,T=o!==void 0?o:P,K=g!==void 0?g:k;return S(S({},b),{},{inputValue:B,menuIsOpen:T,onChange:z,onInputChange:_,onMenuClose:ee,onMenuOpen:Q,value:K})}function y(){return y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},y.apply(this,arguments)}function or(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xt(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Qt(i.key),i)}}function ur(t,e,r){return e&&xt(t.prototype,e),r&&xt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function et(t,e){return et=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},et(t,e)}function sr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&et(t,e)}function Re(t){return Re=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Re(t)}function tn(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(tn=function(){return!!t})()}function lr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function cr(t,e){if(e&&(le(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lr(t)}function dr(t){var e=tn();return function(){var i=Re(t),n;if(e){var a=Re(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return cr(this,n)}}function pr(t){if(Array.isArray(t))return Qe(t)}function fr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ot(t){return pr(t)||fr(t)||en(t)||hr()}function mr(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function vr(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var gr=function(){function t(r){var i=this;this._insertTag=function(n){var a;i.tags.length===0?i.insertionPoint?a=i.insertionPoint.nextSibling:i.prepend?a=i.container.firstChild:a=i.before:a=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(n,a),i.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(vr(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=mr(n);try{a.insertRule(i,a.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),N="-ms-",Le="-moz-",M="-webkit-",nn="comm",ut="rule",st="decl",br="@import",rn="@keyframes",xr="@layer",Er=Math.abs,je=String.fromCharCode,Cr=Object.assign;function Sr(t,e){return j(t,0)^45?(((e<<2^j(t,0))<<2^j(t,1))<<2^j(t,2))<<2^j(t,3):0}function an(t){return t.trim()}function yr(t,e){return(t=e.exec(t))?t[0]:t}function V(t,e,r){return t.replace(e,r)}function tt(t,e){return t.indexOf(e)}function j(t,e){return t.charCodeAt(e)|0}function ge(t,e,r){return t.slice(e,r)}function X(t){return t.length}function lt(t){return t.length}function ye(t,e){return e.push(t),t}function wr(t,e){return t.map(e).join("")}var He=1,pe=1,on=0,U=0,L=0,fe="";function _e(t,e,r,i,n,a,u){return{value:t,root:e,parent:r,type:i,props:n,children:a,line:He,column:pe,length:u,return:""}}function he(t,e){return Cr(_e("",null,null,"",null,null,0),t,{length:-t.length},e)}function Fr(){return L}function Or(){return L=U>0?j(fe,--U):0,pe--,L===10&&(pe=1,He--),L}function G(){return L=U<on?j(fe,U++):0,pe++,L===10&&(pe=1,He++),L}function J(){return j(fe,U)}function Ae(){return U}function Ee(t,e){return ge(fe,t,e)}function be(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function un(t){return He=pe=1,on=X(fe=t),U=0,[]}function sn(t){return fe="",t}function De(t){return an(Ee(U-1,nt(t===91?t+2:t===40?t+1:t)))}function Ir(t){for(;(L=J())&&L<33;)G();return be(t)>2||be(L)>3?"":" "}function Ar(t,e){for(;--e&&G()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return Ee(t,Ae()+(e<6&&J()==32&&G()==32))}function nt(t){for(;G();)switch(L){case t:return U;case 34:case 39:t!==34&&t!==39&&nt(L);break;case 40:t===41&&nt(t);break;case 92:G();break}return U}function Dr(t,e){for(;G()&&t+L!==47+10;)if(t+L===42+42&&J()===47)break;return"/*"+Ee(e,U-1)+"*"+je(t===47?t:G())}function Pr(t){for(;!be(J());)G();return Ee(t,U)}function Mr(t){return sn(Pe("",null,null,null,[""],t=un(t),0,[0],t))}function Pe(t,e,r,i,n,a,u,s,o){for(var l=0,c=0,d=u,v=0,g=0,b=0,m=1,p=1,h=1,w=0,F="",D=n,P=a,A=i,E=F;p;)switch(b=w,w=G()){case 40:if(b!=108&&j(E,d-1)==58){tt(E+=V(De(w),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=De(w);break;case 9:case 10:case 13:case 32:E+=Ir(b);break;case 92:E+=Ar(Ae()-1,7);continue;case 47:switch(J()){case 42:case 47:ye(Vr(Dr(G(),Ae()),e,r),o);break;default:E+="/"}break;case 123*m:s[l++]=X(E)*h;case 125*m:case 59:case 0:switch(w){case 0:case 125:p=0;case 59+c:h==-1&&(E=V(E,/\f/g,"")),g>0&&X(E)-d&&ye(g>32?Ct(E+";",i,r,d-1):Ct(V(E," ","")+";",i,r,d-2),o);break;case 59:E+=";";default:if(ye(A=Et(E,e,r,l,c,n,s,F,D=[],P=[],d),a),w===123)if(c===0)Pe(E,e,A,A,D,a,d,s,P);else switch(v===99&&j(E,3)===110?100:v){case 100:case 108:case 109:case 115:Pe(t,A,A,i&&ye(Et(t,A,A,0,0,n,s,F,n,D=[],d),P),n,P,d,s,i?D:P);break;default:Pe(E,A,A,A,[""],P,0,s,P)}}l=c=g=0,m=h=1,F=E="",d=u;break;case 58:d=1+X(E),g=b;default:if(m<1){if(w==123)--m;else if(w==125&&m++==0&&Or()==125)continue}switch(E+=je(w),w*m){case 38:h=c>0?1:(E+="\f",-1);break;case 44:s[l++]=(X(E)-1)*h,h=1;break;case 64:J()===45&&(E+=De(G())),v=J(),c=d=X(F=E+=Pr(Ae())),w++;break;case 45:b===45&&X(E)==2&&(m=0)}}return a}function Et(t,e,r,i,n,a,u,s,o,l,c){for(var d=n-1,v=n===0?a:[""],g=lt(v),b=0,m=0,p=0;b<i;++b)for(var h=0,w=ge(t,d+1,d=Er(m=u[b])),F=t;h<g;++h)(F=an(m>0?v[h]+" "+w:V(w,/&\f/g,v[h])))&&(o[p++]=F);return _e(t,e,r,n===0?ut:s,o,l,c)}function Vr(t,e,r){return _e(t,e,r,nn,je(Fr()),ge(t,2,-2),0)}function Ct(t,e,r,i){return _e(t,e,r,st,ge(t,0,i),ge(t,i+1,-1),i)}function de(t,e){for(var r="",i=lt(t),n=0;n<i;n++)r+=e(t[n],n,t,e)||"";return r}function kr(t,e,r,i){switch(t.type){case xr:if(t.children.length)break;case br:case st:return t.return=t.return||t.value;case nn:return"";case rn:return t.return=t.value+"{"+de(t.children,i)+"}";case ut:t.value=t.props.join(",")}return X(r=de(t.children,i))?t.return=t.value+"{"+r+"}":""}function Rr(t){var e=lt(t);return function(r,i,n,a){for(var u="",s=0;s<e;s++)u+=t[s](r,i,n,a)||"";return u}}function Lr(t){return function(e){e.root||(e=e.return)&&t(e)}}var Tr=function(e,r,i){for(var n=0,a=0;n=a,a=J(),n===38&&a===12&&(r[i]=1),!be(a);)G();return Ee(e,U)},$r=function(e,r){var i=-1,n=44;do switch(be(n)){case 0:n===38&&J()===12&&(r[i]=1),e[i]+=Tr(U-1,r,i);break;case 2:e[i]+=De(n);break;case 4:if(n===44){e[++i]=J()===58?"&\f":"",r[i]=e[i].length;break}default:e[i]+=je(n)}while(n=G());return e},Br=function(e,r){return sn($r(un(e),r))},St=new WeakMap,jr=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,i=e.parent,n=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!St.get(i))&&!n){St.set(e,!0);for(var a=[],u=Br(r,a),s=i.props,o=0,l=0;o<u.length;o++)for(var c=0;c<s.length;c++,l++)e.props[l]=a[o]?u[o].replace(/&\f/g,s[c]):s[c]+" "+u[o]}}},Hr=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function ln(t,e){switch(Sr(t,e)){case 5103:return M+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return M+t+Le+t+N+t+t;case 6828:case 4268:return M+t+N+t+t;case 6165:return M+t+N+"flex-"+t+t;case 5187:return M+t+V(t,/(\w+).+(:[^]+)/,M+"box-$1$2"+N+"flex-$1$2")+t;case 5443:return M+t+N+"flex-item-"+V(t,/flex-|-self/,"")+t;case 4675:return M+t+N+"flex-line-pack"+V(t,/align-content|flex-|-self/,"")+t;case 5548:return M+t+N+V(t,"shrink","negative")+t;case 5292:return M+t+N+V(t,"basis","preferred-size")+t;case 6060:return M+"box-"+V(t,"-grow","")+M+t+N+V(t,"grow","positive")+t;case 4554:return M+V(t,/([^-])(transform)/g,"$1"+M+"$2")+t;case 6187:return V(V(V(t,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),t,"")+t;case 5495:case 3959:return V(t,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return V(V(t,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+t+t;case 4095:case 3583:case 4068:case 2532:return V(t,/(.+)-inline(.+)/,M+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(X(t)-1-e>6)switch(j(t,e+1)){case 109:if(j(t,e+4)!==45)break;case 102:return V(t,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Le+(j(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~tt(t,"stretch")?ln(V(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(j(t,e+1)!==115)break;case 6444:switch(j(t,X(t)-3-(~tt(t,"!important")&&10))){case 107:return V(t,":",":"+M)+t;case 101:return V(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(j(t,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+N+"$2box$3")+t}break;case 5936:switch(j(t,e+11)){case 114:return M+t+N+V(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return M+t+N+V(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return M+t+N+V(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return M+t+N+t+t}return t}var _r=function(e,r,i,n){if(e.length>-1&&!e.return)switch(e.type){case st:e.return=ln(e.value,e.length);break;case rn:return de([he(e,{value:V(e.value,"@","@"+M)})],n);case ut:if(e.length)return wr(e.props,function(a){switch(yr(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return de([he(e,{props:[V(a,/:(read-\w+)/,":"+Le+"$1")]})],n);case"::placeholder":return de([he(e,{props:[V(a,/:(plac\w+)/,":"+M+"input-$1")]}),he(e,{props:[V(a,/:(plac\w+)/,":"+Le+"$1")]}),he(e,{props:[V(a,/:(plac\w+)/,N+"input-$1")]})],n)}return""})}},Nr=[_r],zr=function(e){var r=e.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(m){var p=m.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var n=e.stylisPlugins||Nr,a={},u,s=[];u=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(m){for(var p=m.getAttribute("data-emotion").split(" "),h=1;h<p.length;h++)a[p[h]]=!0;s.push(m)});var o,l=[jr,Hr];{var c,d=[kr,Lr(function(m){c.insert(m)})],v=Rr(l.concat(n,d)),g=function(p){return de(Mr(p),v)};o=function(p,h,w,F){c=w,g(p?p+"{"+h.styles+"}":h.styles),F&&(b.inserted[h.name]=!0)}}var b={key:r,sheet:new gr({key:r,container:u,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:o};return b.sheet.hydrate(s),b},Ur=!0;function Wr(t,e,r){var i="";return r.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):i+=n+" "}),i}var cn=function(e,r,i){var n=e.key+"-"+r.name;(i===!1||Ur===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},Gr=function(e,r,i){cn(e,r,i);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var a=r;do e.insert(r===a?"."+n:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function Yr(t){for(var e=0,r,i=0,n=t.length;n>=4;++i,n-=4)r=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var qr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kr=/[A-Z]|^ms/g,Xr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,dn=function(e){return e.charCodeAt(1)===45},yt=function(e){return e!=null&&typeof e!="boolean"},ze=Hn(function(t){return dn(t)?t:t.replace(Kr,"-$&").toLowerCase()}),wt=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Xr,function(i,n,a){return Z={name:n,styles:a,next:Z},n})}return qr[e]!==1&&!dn(e)&&typeof r=="number"&&r!==0?r+"px":r};function xe(t,e,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return Z={name:r.name,styles:r.styles,next:Z},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)Z={name:i.name,styles:i.styles,next:Z},i=i.next;var n=r.styles+";";return n}return Zr(t,e,r)}case"function":{if(t!==void 0){var a=Z,u=r(t);return Z=a,xe(t,e,u)}break}}if(e==null)return r;var s=e[r];return s!==void 0?s:r}function Zr(t,e,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=xe(t,e,r[n])+";";else for(var a in r){var u=r[a];if(typeof u!="object")e!=null&&e[u]!==void 0?i+=a+"{"+e[u]+"}":yt(u)&&(i+=ze(a)+":"+wt(a,u)+";");else if(Array.isArray(u)&&typeof u[0]=="string"&&(e==null||e[u[0]]===void 0))for(var s=0;s<u.length;s++)yt(u[s])&&(i+=ze(a)+":"+wt(a,u[s])+";");else{var o=xe(t,e,u);switch(a){case"animation":case"animationName":{i+=ze(a)+":"+o+";";break}default:i+=a+"{"+o+"}"}}}return i}var Ft=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Z,pn=function(e,r,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";Z=void 0;var u=e[0];u==null||u.raw===void 0?(n=!1,a+=xe(i,r,u)):a+=u[0];for(var s=1;s<e.length;s++)a+=xe(i,r,e[s]),n&&(a+=u[s]);Ft.lastIndex=0;for(var o="",l;(l=Ft.exec(a))!==null;)o+="-"+l[1];var c=Yr(a)+o;return{name:c,styles:a,next:Z}},Jr=function(e){return e()},Qr=gt["useInsertionEffect"]?gt["useInsertionEffect"]:!1,ei=Qr||Jr,ct={}.hasOwnProperty,fn=f.createContext(typeof HTMLElement<"u"?zr({key:"css"}):null);fn.Provider;var ti=function(e){return f.forwardRef(function(r,i){var n=f.useContext(fn);return e(r,n,i)})},ni=f.createContext({}),rt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ri=function(e,r){var i={};for(var n in r)ct.call(r,n)&&(i[n]=r[n]);return i[rt]=e,i},ii=function(e){var r=e.cache,i=e.serialized,n=e.isStringTag;return cn(r,i,n),ei(function(){return Gr(r,i,n)}),null},ai=ti(function(t,e,r){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var n=t[rt],a=[i],u="";typeof t.className=="string"?u=Wr(e.registered,a,t.className):t.className!=null&&(u=t.className+" ");var s=pn(a,void 0,f.useContext(ni));u+=e.key+"-"+s.name;var o={};for(var l in t)ct.call(t,l)&&l!=="css"&&l!==rt&&(o[l]=t[l]);return o.ref=r,o.className=u,f.createElement(f.Fragment,null,f.createElement(ii,{cache:e,serialized:s,isStringTag:typeof n=="string"}),f.createElement(n,o))}),oi=ai,C=function(e,r){var i=arguments;if(r==null||!ct.call(r,"css"))return f.createElement.apply(void 0,i);var n=i.length,a=new Array(n);a[0]=oi,a[1]=ri(e,r);for(var u=2;u<n;u++)a[u]=i[u];return f.createElement.apply(null,a)};function dt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return pn(e)}var ui=function(){var e=dt.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function si(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var it=f.useLayoutEffect,li=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Te=function(){};function ci(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function di(t,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];var a=[].concat(i);if(e&&t)for(var u in e)e.hasOwnProperty(u)&&e[u]&&a.push("".concat(ci(t,u)));return a.filter(function(s){return s}).map(function(s){return String(s).trim()}).join(" ")}var Ot=function(e){return Ei(e)?e.filter(Boolean):le(e)==="object"&&e!==null?[e]:[]},hn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=ie(e,li);return S({},r)},R=function(e,r,i){var n=e.cx,a=e.getStyles,u=e.getClassNames,s=e.className;return{css:a(r,e),className:n(i??{},u(r,e),s)}};function Ne(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function pi(t){return Ne(t)?window.innerHeight:t.clientHeight}function mn(t){return Ne(t)?window.pageYOffset:t.scrollTop}function $e(t,e){if(Ne(t)){window.scrollTo(0,e);return}t.scrollTop=e}function fi(t){var e=getComputedStyle(t),r=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(r&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function hi(t,e,r,i){return r*((t=t/i-1)*t*t+1)+e}function we(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Te,n=mn(t),a=e-n,u=10,s=0;function o(){s+=u;var l=hi(s,n,a,r);$e(t,l),s<r?window.requestAnimationFrame(o):i(t)}o()}function It(t,e){var r=t.getBoundingClientRect(),i=e.getBoundingClientRect(),n=e.offsetHeight/3;i.bottom+n>r.bottom?$e(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):i.top-n<r.top&&$e(t,Math.max(e.offsetTop-n,0))}function mi(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function At(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function vi(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var vn=!1,gi={get passive(){return vn=!0}},Fe=typeof window<"u"?window:{};Fe.addEventListener&&Fe.removeEventListener&&(Fe.addEventListener("p",Te,gi),Fe.removeEventListener("p",Te,!1));var bi=vn;function xi(t){return t!=null}function Ei(t){return Array.isArray(t)}function Oe(t,e,r){return t?e:r}var Ci=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];var a=Object.entries(e).filter(function(u){var s=re(u,1),o=s[0];return!i.includes(o)});return a.reduce(function(u,s){var o=re(s,2),l=o[0],c=o[1];return u[l]=c,u},{})},Si=["children","innerProps"],yi=["children","innerProps"];function wi(t){var e=t.maxHeight,r=t.menuEl,i=t.minHeight,n=t.placement,a=t.shouldScroll,u=t.isFixedPosition,s=t.controlHeight,o=fi(r),l={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return l;var c=o.getBoundingClientRect(),d=c.height,v=r.getBoundingClientRect(),g=v.bottom,b=v.height,m=v.top,p=r.offsetParent.getBoundingClientRect(),h=p.top,w=u?window.innerHeight:pi(o),F=mn(o),D=parseInt(getComputedStyle(r).marginBottom,10),P=parseInt(getComputedStyle(r).marginTop,10),A=h-P,E=w-m,I=A+F,k=d-F-m,H=g-w+F+D,z=F+m-P,_=160;switch(n){case"auto":case"bottom":if(E>=b)return{placement:"bottom",maxHeight:e};if(k>=b&&!u)return a&&we(o,H,_),{placement:"bottom",maxHeight:e};if(!u&&k>=i||u&&E>=i){a&&we(o,H,_);var Q=u?E-D:k-D;return{placement:"bottom",maxHeight:Q}}if(n==="auto"||u){var ee=e,B=u?A:I;return B>=i&&(ee=Math.min(B-D-s,e)),{placement:"top",maxHeight:ee}}if(n==="bottom")return a&&$e(o,H),{placement:"bottom",maxHeight:e};break;case"top":if(A>=b)return{placement:"top",maxHeight:e};if(I>=b&&!u)return a&&we(o,z,_),{placement:"top",maxHeight:e};if(!u&&I>=i||u&&A>=i){var T=e;return(!u&&I>=i||u&&A>=i)&&(T=u?A-P:I-P),a&&we(o,z,_),{placement:"top",maxHeight:T}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return l}function Fi(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var gn=function(e){return e==="auto"?"bottom":e},Oi=function(e,r){var i,n=e.placement,a=e.theme,u=a.borderRadius,s=a.spacing,o=a.colors;return S((i={label:"menu"},ve(i,Fi(n),"100%"),ve(i,"position","absolute"),ve(i,"width","100%"),ve(i,"zIndex",1),i),r?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:s.menuGutter,marginTop:s.menuGutter})},bn=f.createContext(null),Ii=function(e){var r=e.children,i=e.minMenuHeight,n=e.maxMenuHeight,a=e.menuPlacement,u=e.menuPosition,s=e.menuShouldScrollIntoView,o=e.theme,l=f.useContext(bn)||{},c=l.setPortalPlacement,d=f.useRef(null),v=f.useState(n),g=re(v,2),b=g[0],m=g[1],p=f.useState(null),h=re(p,2),w=h[0],F=h[1],D=o.spacing.controlHeight;return it(function(){var P=d.current;if(P){var A=u==="fixed",E=s&&!A,I=wi({maxHeight:n,menuEl:P,minHeight:i,placement:a,shouldScroll:E,isFixedPosition:A,controlHeight:D});m(I.maxHeight),F(I.placement),c==null||c(I.placement)}},[n,a,u,s,i,c,D]),r({ref:d,placerProps:S(S({},e),{},{placement:w||gn(a),maxHeight:b})})},Ai=function(e){var r=e.children,i=e.innerRef,n=e.innerProps;return C("div",y({},R(e,"menu",{menu:!0}),{ref:i},n),r)},Di=Ai,Pi=function(e,r){var i=e.maxHeight,n=e.theme.spacing.baseUnit;return S({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:n,paddingTop:n})},Mi=function(e){var r=e.children,i=e.innerProps,n=e.innerRef,a=e.isMulti;return C("div",y({},R(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:n},i),r)},xn=function(e,r){var i=e.theme,n=i.spacing.baseUnit,a=i.colors;return S({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},Vi=xn,ki=xn,Ri=function(e){var r=e.children,i=r===void 0?"No options":r,n=e.innerProps,a=ie(e,Si);return C("div",y({},R(S(S({},a),{},{children:i,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),i)},Li=function(e){var r=e.children,i=r===void 0?"Loading...":r,n=e.innerProps,a=ie(e,yi);return C("div",y({},R(S(S({},a),{},{children:i,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),i)},Ti=function(e){var r=e.rect,i=e.offset,n=e.position;return{left:r.left,position:n,top:i,width:r.width,zIndex:1}},$i=function(e){var r=e.appendTo,i=e.children,n=e.controlElement,a=e.innerProps,u=e.menuPlacement,s=e.menuPosition,o=f.useRef(null),l=f.useRef(null),c=f.useState(gn(u)),d=re(c,2),v=d[0],g=d[1],b=f.useMemo(function(){return{setPortalPlacement:g}},[]),m=f.useState(null),p=re(m,2),h=p[0],w=p[1],F=f.useCallback(function(){if(n){var E=mi(n),I=s==="fixed"?0:window.pageYOffset,k=E[v]+I;(k!==(h==null?void 0:h.offset)||E.left!==(h==null?void 0:h.rect.left)||E.width!==(h==null?void 0:h.rect.width))&&w({offset:k,rect:E})}},[n,s,v,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);it(function(){F()},[F]);var D=f.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),n&&o.current&&(l.current=Gn(n,o.current,F,{elementResize:"ResizeObserver"in window}))},[n,F]);it(function(){D()},[D]);var P=f.useCallback(function(E){o.current=E,D()},[D]);if(!r&&s!=="fixed"||!h)return null;var A=C("div",y({ref:P},R(S(S({},e),{},{offset:h.offset,position:s,rect:h.rect}),"menuPortal",{"menu-portal":!0}),a),i);return C(bn.Provider,{value:b},r?_n.createPortal(A,r):A)},Bi=function(e){var r=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},ji=function(e){var r=e.children,i=e.innerProps,n=e.isDisabled,a=e.isRtl;return C("div",y({},R(e,"container",{"--is-disabled":n,"--is-rtl":a}),i),r)},Hi=function(e,r){var i=e.theme.spacing,n=e.isMulti,a=e.hasValue,u=e.selectProps.controlShouldRenderValue;return S({alignItems:"center",display:n&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},_i=function(e){var r=e.children,i=e.innerProps,n=e.isMulti,a=e.hasValue;return C("div",y({},R(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":a}),i),r)},Ni=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},zi=function(e){var r=e.children,i=e.innerProps;return C("div",y({},R(e,"indicatorsContainer",{indicators:!0}),i),r)},Dt,Ui=["size"],Wi=["innerProps","isRtl","size"],Gi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},En=function(e){var r=e.size,i=ie(e,Ui);return C("svg",y({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Gi},i))},pt=function(e){return C(En,y({size:20},e),C("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Cn=function(e){return C(En,y({size:20},e),C("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Sn=function(e,r){var i=e.isFocused,n=e.theme,a=n.spacing.baseUnit,u=n.colors;return S({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?u.neutral60:u.neutral20,padding:a*2,":hover":{color:i?u.neutral80:u.neutral40}})},Yi=Sn,qi=function(e){var r=e.children,i=e.innerProps;return C("div",y({},R(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||C(Cn,null))},Ki=Sn,Xi=function(e){var r=e.children,i=e.innerProps;return C("div",y({},R(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||C(pt,null))},Zi=function(e,r){var i=e.isDisabled,n=e.theme,a=n.spacing.baseUnit,u=n.colors;return S({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Ji=function(e){var r=e.innerProps;return C("span",y({},r,R(e,"indicatorSeparator",{"indicator-separator":!0})))},Qi=ui(Dt||(Dt=si([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),ea=function(e,r){var i=e.isFocused,n=e.size,a=e.theme,u=a.colors,s=a.spacing.baseUnit;return S({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?u.neutral60:u.neutral20,padding:s*2})},Ue=function(e){var r=e.delay,i=e.offset;return C("span",{css:dt({animation:"".concat(Qi," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},ta=function(e){var r=e.innerProps,i=e.isRtl,n=e.size,a=n===void 0?4:n,u=ie(e,Wi);return C("div",y({},R(S(S({},u),{},{innerProps:r,isRtl:i,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),C(Ue,{delay:0,offset:i}),C(Ue,{delay:160,offset:!0}),C(Ue,{delay:320,offset:!i}))},na=function(e,r){var i=e.isDisabled,n=e.isFocused,a=e.theme,u=a.colors,s=a.borderRadius,o=a.spacing;return S({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?u.neutral5:u.neutral0,borderColor:i?u.neutral10:n?u.primary:u.neutral20,borderRadius:s,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:n?u.primary:u.neutral30}})},ra=function(e){var r=e.children,i=e.isDisabled,n=e.isFocused,a=e.innerRef,u=e.innerProps,s=e.menuIsOpen;return C("div",y({ref:a},R(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":n,"control--menu-is-open":s}),u,{"aria-disabled":i||void 0}),r)},ia=ra,aa=["data"],oa=function(e,r){var i=e.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},ua=function(e){var r=e.children,i=e.cx,n=e.getStyles,a=e.getClassNames,u=e.Heading,s=e.headingProps,o=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return C("div",y({},R(e,"group",{group:!0}),o),C(u,y({},s,{selectProps:d,theme:c,getStyles:n,getClassNames:a,cx:i}),l),C("div",null,r))},sa=function(e,r){var i=e.theme,n=i.colors,a=i.spacing;return S({label:"group",cursor:"default",display:"block"},r?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},la=function(e){var r=hn(e);r.data;var i=ie(r,aa);return C("div",y({},R(e,"groupHeading",{"group-heading":!0}),i))},ca=ua,da=["innerRef","isDisabled","isHidden","inputClassName"],pa=function(e,r){var i=e.isDisabled,n=e.value,a=e.theme,u=a.spacing,s=a.colors;return S(S({visibility:i?"hidden":"visible",transform:n?"translateZ(0)":""},fa),r?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:s.neutral80})},yn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},fa={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":S({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},yn)},ha=function(e){return S({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},yn)},ma=function(e){var r=e.cx,i=e.value,n=hn(e),a=n.innerRef,u=n.isDisabled,s=n.isHidden,o=n.inputClassName,l=ie(n,da);return C("div",y({},R(e,"input",{"input-container":!0}),{"data-value":i||""}),C("input",y({className:r({input:!0},o),ref:a,style:ha(s),disabled:u},l)))},va=ma,ga=function(e,r){var i=e.theme,n=i.spacing,a=i.borderRadius,u=i.colors;return S({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:n.baseUnit/2})},ba=function(e,r){var i=e.theme,n=i.borderRadius,a=i.colors,u=e.cropWithEllipsis;return S({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:n/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},xa=function(e,r){var i=e.theme,n=i.spacing,a=i.borderRadius,u=i.colors,s=e.isFocused;return S({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:s?u.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},wn=function(e){var r=e.children,i=e.innerProps;return C("div",i,r)},Ea=wn,Ca=wn;function Sa(t){var e=t.children,r=t.innerProps;return C("div",y({role:"button"},r),e||C(pt,{size:14}))}var ya=function(e){var r=e.children,i=e.components,n=e.data,a=e.innerProps,u=e.isDisabled,s=e.removeProps,o=e.selectProps,l=i.Container,c=i.Label,d=i.Remove;return C(l,{data:n,innerProps:S(S({},R(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},C(c,{data:n,innerProps:S({},R(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},r),C(d,{data:n,innerProps:S(S({},R(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},s),selectProps:o}))},wa=ya,Fa=function(e,r){var i=e.isDisabled,n=e.isFocused,a=e.isSelected,u=e.theme,s=u.spacing,o=u.colors;return S({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?o.primary:n?o.primary25:"transparent",color:i?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(s.baseUnit*2,"px ").concat(s.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:a?o.primary:o.primary50}})},Oa=function(e){var r=e.children,i=e.isDisabled,n=e.isFocused,a=e.isSelected,u=e.innerRef,s=e.innerProps;return C("div",y({},R(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":n,"option--is-selected":a}),{ref:u,"aria-disabled":i},s),r)},Ia=Oa,Aa=function(e,r){var i=e.theme,n=i.spacing,a=i.colors;return S({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},Da=function(e){var r=e.children,i=e.innerProps;return C("div",y({},R(e,"placeholder",{placeholder:!0}),i),r)},Pa=Da,Ma=function(e,r){var i=e.isDisabled,n=e.theme,a=n.spacing,u=n.colors;return S({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Va=function(e){var r=e.children,i=e.isDisabled,n=e.innerProps;return C("div",y({},R(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),n),r)},ka=Va,Ra={ClearIndicator:Xi,Control:ia,DropdownIndicator:qi,DownChevron:Cn,CrossIcon:pt,Group:ca,GroupHeading:la,IndicatorsContainer:zi,IndicatorSeparator:Ji,Input:va,LoadingIndicator:ta,Menu:Di,MenuList:Mi,MenuPortal:$i,LoadingMessage:Li,NoOptionsMessage:Ri,MultiValue:wa,MultiValueContainer:Ea,MultiValueLabel:Ca,MultiValueRemove:Sa,Option:Ia,Placeholder:Pa,SelectContainer:ji,SingleValue:ka,ValueContainer:_i},La=function(e){return S(S({},Ra),e.components)},Pt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Ta(t,e){return!!(t===e||Pt(t)&&Pt(e))}function $a(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!Ta(t[r],e[r]))return!1;return!0}function Ba(t,e){e===void 0&&(e=$a);var r=null;function i(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(r&&r.lastThis===this&&e(n,r.lastArgs))return r.lastResult;var u=t.apply(this,n);return r={lastResult:u,lastArgs:n,lastThis:this},u}return i.clear=function(){r=null},i}var ja={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Ha=function(e){return C("span",y({css:ja},e))},Mt=Ha,_a={guidance:function(e){var r=e.isSearchable,i=e.isMulti,n=e.tabSelectsValue,a=e.context,u=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,i=e.label,n=i===void 0?"":i,a=e.labels,u=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var r=e.context,i=e.focused,n=e.options,a=e.label,u=a===void 0?"":a,s=e.selectValue,o=e.isDisabled,l=e.isSelected,c=e.isAppleDevice,d=function(m,p){return m&&m.length?"".concat(m.indexOf(p)+1," of ").concat(m.length):""};if(r==="value"&&s)return"value ".concat(u," focused, ").concat(d(s,i),".");if(r==="menu"&&c){var v=o?" disabled":"",g="".concat(l?" selected":"").concat(v);return"".concat(u).concat(g,", ").concat(d(n,i),".")}return""},onFilter:function(e){var r=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},Na=function(e){var r=e.ariaSelection,i=e.focusedOption,n=e.focusedValue,a=e.focusableOptions,u=e.isFocused,s=e.selectValue,o=e.selectProps,l=e.id,c=e.isAppleDevice,d=o.ariaLiveMessages,v=o.getOptionLabel,g=o.inputValue,b=o.isMulti,m=o.isOptionDisabled,p=o.isSearchable,h=o.menuIsOpen,w=o.options,F=o.screenReaderStatus,D=o.tabSelectsValue,P=o.isLoading,A=o["aria-label"],E=o["aria-live"],I=f.useMemo(function(){return S(S({},_a),d||{})},[d]),k=f.useMemo(function(){var B="";if(r&&I.onChange){var T=r.option,K=r.options,Y=r.removedValue,ae=r.removedValues,oe=r.value,Ce=function(ne){return Array.isArray(ne)?null:ne},$=Y||T||Ce(oe),W=$?v($):"",te=K||ae||void 0,ue=te?te.map(v):[],q=S({isDisabled:$&&m($,s),label:W,labels:ue},r);B=I.onChange(q)}return B},[r,I,m,s,v]),H=f.useMemo(function(){var B="",T=i||n,K=!!(i&&s&&s.includes(i));if(T&&I.onFocus){var Y={focused:T,label:v(T),isDisabled:m(T,s),isSelected:K,options:a,context:T===i?"menu":"value",selectValue:s,isAppleDevice:c};B=I.onFocus(Y)}return B},[i,n,v,m,I,a,s,c]),z=f.useMemo(function(){var B="";if(h&&w.length&&!P&&I.onFilter){var T=F({count:a.length});B=I.onFilter({inputValue:g,resultsMessage:T})}return B},[a,g,h,I,w,F,P]),_=(r==null?void 0:r.action)==="initial-input-focus",Q=f.useMemo(function(){var B="";if(I.guidance){var T=n?"value":h?"menu":"input";B=I.guidance({"aria-label":A,context:T,isDisabled:i&&m(i,s),isMulti:b,isSearchable:p,tabSelectsValue:D,isInitialFocus:_})}return B},[A,i,n,b,m,p,h,I,s,D,_]),ee=C(f.Fragment,null,C("span",{id:"aria-selection"},k),C("span",{id:"aria-focused"},H),C("span",{id:"aria-results"},z),C("span",{id:"aria-guidance"},Q));return C(f.Fragment,null,C(Mt,{id:l},_&&ee),C(Mt,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!_&&ee))},za=Na,at=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Ua=new RegExp("["+at.map(function(t){return t.letters}).join("")+"]","g"),Fn={};for(var We=0;We<at.length;We++)for(var Ge=at[We],Ye=0;Ye<Ge.letters.length;Ye++)Fn[Ge.letters[Ye]]=Ge.base;var On=function(e){return e.replace(Ua,function(r){return Fn[r]})},Wa=Ba(On),Vt=function(e){return e.replace(/^\s+|\s+$/g,"")},Ga=function(e){return"".concat(e.label," ").concat(e.value)},Ya=function(e){return function(r,i){if(r.data.__isNew__)return!0;var n=S({ignoreCase:!0,ignoreAccents:!0,stringify:Ga,trim:!0,matchFrom:"any"},e),a=n.ignoreCase,u=n.ignoreAccents,s=n.stringify,o=n.trim,l=n.matchFrom,c=o?Vt(i):i,d=o?Vt(s(r)):s(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Wa(c),d=On(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},qa=["innerRef"];function Ka(t){var e=t.innerRef,r=ie(t,qa),i=Ci(r,"onExited","in","enter","exit","appear");return C("input",y({ref:e},i,{css:dt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Xa=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Za(t){var e=t.isEnabled,r=t.onBottomArrive,i=t.onBottomLeave,n=t.onTopArrive,a=t.onTopLeave,u=f.useRef(!1),s=f.useRef(!1),o=f.useRef(0),l=f.useRef(null),c=f.useCallback(function(p,h){if(l.current!==null){var w=l.current,F=w.scrollTop,D=w.scrollHeight,P=w.clientHeight,A=l.current,E=h>0,I=D-P-F,k=!1;I>h&&u.current&&(i&&i(p),u.current=!1),E&&s.current&&(a&&a(p),s.current=!1),E&&h>I?(r&&!u.current&&r(p),A.scrollTop=D,k=!0,u.current=!0):!E&&-h>F&&(n&&!s.current&&n(p),A.scrollTop=0,k=!0,s.current=!0),k&&Xa(p)}},[r,i,n,a]),d=f.useCallback(function(p){c(p,p.deltaY)},[c]),v=f.useCallback(function(p){o.current=p.changedTouches[0].clientY},[]),g=f.useCallback(function(p){var h=o.current-p.changedTouches[0].clientY;c(p,h)},[c]),b=f.useCallback(function(p){if(p){var h=bi?{passive:!1}:!1;p.addEventListener("wheel",d,h),p.addEventListener("touchstart",v,h),p.addEventListener("touchmove",g,h)}},[g,v,d]),m=f.useCallback(function(p){p&&(p.removeEventListener("wheel",d,!1),p.removeEventListener("touchstart",v,!1),p.removeEventListener("touchmove",g,!1))},[g,v,d]);return f.useEffect(function(){if(e){var p=l.current;return b(p),function(){m(p)}}},[e,b,m]),function(p){l.current=p}}var kt=["boxSizing","height","overflow","paddingRight","position"],Rt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Lt(t){t.preventDefault()}function Tt(t){t.stopPropagation()}function $t(){var t=this.scrollTop,e=this.scrollHeight,r=t+this.offsetHeight;t===0?this.scrollTop=1:r===e&&(this.scrollTop=t-1)}function Bt(){return"ontouchstart"in window||navigator.maxTouchPoints}var jt=!!(typeof window<"u"&&window.document&&window.document.createElement),me=0,ce={capture:!1,passive:!1};function Ja(t){var e=t.isEnabled,r=t.accountForScrollbars,i=r===void 0?!0:r,n=f.useRef({}),a=f.useRef(null),u=f.useCallback(function(o){if(jt){var l=document.body,c=l&&l.style;if(i&&kt.forEach(function(b){var m=c&&c[b];n.current[b]=m}),i&&me<1){var d=parseInt(n.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,g=window.innerWidth-v+d||0;Object.keys(Rt).forEach(function(b){var m=Rt[b];c&&(c[b]=m)}),c&&(c.paddingRight="".concat(g,"px"))}l&&Bt()&&(l.addEventListener("touchmove",Lt,ce),o&&(o.addEventListener("touchstart",$t,ce),o.addEventListener("touchmove",Tt,ce))),me+=1}},[i]),s=f.useCallback(function(o){if(jt){var l=document.body,c=l&&l.style;me=Math.max(me-1,0),i&&me<1&&kt.forEach(function(d){var v=n.current[d];c&&(c[d]=v)}),l&&Bt()&&(l.removeEventListener("touchmove",Lt,ce),o&&(o.removeEventListener("touchstart",$t,ce),o.removeEventListener("touchmove",Tt,ce)))}},[i]);return f.useEffect(function(){if(e){var o=a.current;return u(o),function(){s(o)}}},[e,u,s]),function(o){a.current=o}}var Qa=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},eo={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function to(t){var e=t.children,r=t.lockEnabled,i=t.captureEnabled,n=i===void 0?!0:i,a=t.onBottomArrive,u=t.onBottomLeave,s=t.onTopArrive,o=t.onTopLeave,l=Za({isEnabled:n,onBottomArrive:a,onBottomLeave:u,onTopArrive:s,onTopLeave:o}),c=Ja({isEnabled:r}),d=function(g){l(g),c(g)};return C(f.Fragment,null,r&&C("div",{onClick:Qa,css:eo}),e(d))}var no={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},ro=function(e){var r=e.name,i=e.onFocus;return C("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:no,value:"",onChange:function(){}})},io=ro;function ft(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function ao(){return ft(/^iPhone/i)}function In(){return ft(/^Mac/i)}function oo(){return ft(/^iPad/i)||In()&&navigator.maxTouchPoints>1}function uo(){return ao()||oo()}function so(){return In()||uo()}var lo=function(e){return e.label},co=function(e){return e.label},po=function(e){return e.value},fo=function(e){return!!e.isDisabled},ho={clearIndicator:Ki,container:Bi,control:na,dropdownIndicator:Yi,group:oa,groupHeading:sa,indicatorsContainer:Ni,indicatorSeparator:Zi,input:pa,loadingIndicator:ea,loadingMessage:ki,menu:Oi,menuList:Pi,menuPortal:Ti,multiValue:ga,multiValueLabel:ba,multiValueRemove:xa,noOptionsMessage:Vi,option:Fa,placeholder:Aa,singleValue:Ma,valueContainer:Hi},mo={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},vo=4,An=4,go=38,bo=An*2,xo={baseUnit:An,controlHeight:go,menuGutter:bo},qe={borderRadius:vo,colors:mo,spacing:xo},Eo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:At(),captureMenuScroll:!At(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Ya(),formatGroupLabel:lo,getOptionLabel:co,getOptionValue:po,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:fo,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!vi(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Ht(t,e,r,i){var n=Mn(t,e,r),a=Vn(t,e,r),u=Pn(t,e),s=Be(t,e);return{type:"option",data:e,isDisabled:n,isSelected:a,label:u,value:s,index:i}}function Me(t,e){return t.options.map(function(r,i){if("options"in r){var n=r.options.map(function(u,s){return Ht(t,u,e,s)}).filter(function(u){return Nt(t,u)});return n.length>0?{type:"group",data:r,options:n,index:i}:void 0}var a=Ht(t,r,e,i);return Nt(t,a)?a:void 0}).filter(xi)}function Dn(t){return t.reduce(function(e,r){return r.type==="group"?e.push.apply(e,ot(r.options.map(function(i){return i.data}))):e.push(r.data),e},[])}function _t(t,e){return t.reduce(function(r,i){return i.type==="group"?r.push.apply(r,ot(i.options.map(function(n){return{data:n.data,id:"".concat(e,"-").concat(i.index,"-").concat(n.index)}}))):r.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),r},[])}function Co(t,e){return Dn(Me(t,e))}function Nt(t,e){var r=t.inputValue,i=r===void 0?"":r,n=e.data,a=e.isSelected,u=e.label,s=e.value;return(!Rn(t)||!a)&&kn(t,{label:u,value:s,data:n},i)}function So(t,e){var r=t.focusedValue,i=t.selectValue,n=i.indexOf(r);if(n>-1){var a=e.indexOf(r);if(a>-1)return r;if(n<e.length)return e[n]}return null}function yo(t,e){var r=t.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var Ke=function(e,r){var i,n=(i=e.find(function(a){return a.data===r}))===null||i===void 0?void 0:i.id;return n||null},Pn=function(e,r){return e.getOptionLabel(r)},Be=function(e,r){return e.getOptionValue(r)};function Mn(t,e,r){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,r):!1}function Vn(t,e,r){if(r.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,r);var i=Be(t,e);return r.some(function(n){return Be(t,n)===i})}function kn(t,e,r){return t.filterOption?t.filterOption(e,r):!0}var Rn=function(e){var r=e.hideSelectedOptions,i=e.isMulti;return r===void 0?i:r},wo=1,Ln=function(t){sr(r,t);var e=dr(r);function r(i){var n;if(or(this,r),n=e.call(this,i),n.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.isAppleDevice=so(),n.controlRef=null,n.getControlRef=function(o){n.controlRef=o},n.focusedOptionRef=null,n.getFocusedOptionRef=function(o){n.focusedOptionRef=o},n.menuListRef=null,n.getMenuListRef=function(o){n.menuListRef=o},n.inputRef=null,n.getInputRef=function(o){n.inputRef=o},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(o,l){var c=n.props,d=c.onChange,v=c.name;l.name=v,n.ariaOnChange(o,l),d(o,l)},n.setValue=function(o,l,c){var d=n.props,v=d.closeMenuOnSelect,g=d.isMulti,b=d.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:b}),v&&(n.setState({inputIsHiddenAfterUpdate:!g}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(o,{action:l,option:c})},n.selectOption=function(o){var l=n.props,c=l.blurInputOnSelect,d=l.isMulti,v=l.name,g=n.state.selectValue,b=d&&n.isOptionSelected(o,g),m=n.isOptionDisabled(o,g);if(b){var p=n.getOptionValue(o);n.setValue(g.filter(function(h){return n.getOptionValue(h)!==p}),"deselect-option",o)}else if(!m)d?n.setValue([].concat(ot(g),[o]),"select-option",o):n.setValue(o,"select-option");else{n.ariaOnChange(o,{action:"select-option",option:o,name:v});return}c&&n.blurInput()},n.removeValue=function(o){var l=n.props.isMulti,c=n.state.selectValue,d=n.getOptionValue(o),v=c.filter(function(b){return n.getOptionValue(b)!==d}),g=Oe(l,v,v[0]||null);n.onChange(g,{action:"remove-value",removedValue:o}),n.focusInput()},n.clearValue=function(){var o=n.state.selectValue;n.onChange(Oe(n.props.isMulti,[],null),{action:"clear",removedValues:o})},n.popValue=function(){var o=n.props.isMulti,l=n.state.selectValue,c=l[l.length-1],d=l.slice(0,l.length-1),v=Oe(o,d,d[0]||null);n.onChange(v,{action:"pop-value",removedValue:c})},n.getFocusedOptionId=function(o){return Ke(n.state.focusableOptionsWithIds,o)},n.getFocusableOptionsWithIds=function(){return _t(Me(n.props,n.state.selectValue),n.getElementId("option"))},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return di.apply(void 0,[n.props.classNamePrefix].concat(l))},n.getOptionLabel=function(o){return Pn(n.props,o)},n.getOptionValue=function(o){return Be(n.props,o)},n.getStyles=function(o,l){var c=n.props.unstyled,d=ho[o](l,c);d.boxSizing="border-box";var v=n.props.styles[o];return v?v(d,l):d},n.getClassNames=function(o,l){var c,d;return(c=(d=n.props.classNames)[o])===null||c===void 0?void 0:c.call(d,l)},n.getElementId=function(o){return"".concat(n.state.instancePrefix,"-").concat(o)},n.getComponents=function(){return La(n.props)},n.buildCategorizedOptions=function(){return Me(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return Dn(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(o,l){n.setState({ariaSelection:S({value:o},l)})},n.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(o){n.blockOptionHover=!1},n.onControlMouseDown=function(o){if(!o.defaultPrevented){var l=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&n.onMenuClose():l&&n.openMenu("first"):(l&&(n.openAfterFocus=!0),n.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},n.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!n.props.isDisabled){var l=n.props,c=l.isMulti,d=l.menuIsOpen;n.focusInput(),d?(n.setState({inputIsHiddenAfterUpdate:!c}),n.onMenuClose()):n.openMenu("first"),o.preventDefault()}},n.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(n.clearValue(),o.preventDefault(),n.openAfterFocus=!1,o.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(o){typeof n.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ne(o.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(o)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(o){var l=o.touches,c=l&&l.item(0);c&&(n.initialTouchX=c.clientX,n.initialTouchY=c.clientY,n.userIsDragging=!1)},n.onTouchMove=function(o){var l=o.touches,c=l&&l.item(0);if(c){var d=Math.abs(c.clientX-n.initialTouchX),v=Math.abs(c.clientY-n.initialTouchY),g=5;n.userIsDragging=d>g||v>g}},n.onTouchEnd=function(o){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(o.target)&&n.menuListRef&&!n.menuListRef.contains(o.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(o){n.userIsDragging||n.onControlMouseDown(o)},n.onClearIndicatorTouchEnd=function(o){n.userIsDragging||n.onClearIndicatorMouseDown(o)},n.onDropdownIndicatorTouchEnd=function(o){n.userIsDragging||n.onDropdownIndicatorMouseDown(o)},n.handleInputChange=function(o){var l=n.props.inputValue,c=o.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(c,{action:"input-change",prevInputValue:l}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(o){n.props.onFocus&&n.props.onFocus(o),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(o){var l=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(o),n.onInputChange("",{action:"input-blur",prevInputValue:l}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(o){if(!(n.blockOptionHover||n.state.focusedOption===o)){var l=n.getFocusableOptions(),c=l.indexOf(o);n.setState({focusedOption:o,focusedOptionId:c>-1?n.getFocusedOptionId(o):null})}},n.shouldHideSelectedOptions=function(){return Rn(n.props)},n.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),n.focus()},n.onKeyDown=function(o){var l=n.props,c=l.isMulti,d=l.backspaceRemovesValue,v=l.escapeClearsValue,g=l.inputValue,b=l.isClearable,m=l.isDisabled,p=l.menuIsOpen,h=l.onKeyDown,w=l.tabSelectsValue,F=l.openMenuOnFocus,D=n.state,P=D.focusedOption,A=D.focusedValue,E=D.selectValue;if(!m&&!(typeof h=="function"&&(h(o),o.defaultPrevented))){switch(n.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||g)return;n.focusValue("previous");break;case"ArrowRight":if(!c||g)return;n.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(A)n.removeValue(A);else{if(!d)return;c?n.popValue():b&&n.clearValue()}break;case"Tab":if(n.isComposing||o.shiftKey||!p||!w||!P||F&&n.isOptionSelected(P,E))return;n.selectOption(P);break;case"Enter":if(o.keyCode===229)break;if(p){if(!P||n.isComposing)return;n.selectOption(P);break}return;case"Escape":p?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:g}),n.onMenuClose()):b&&v&&n.clearValue();break;case" ":if(g)return;if(!p){n.openMenu("first");break}if(!P)return;n.selectOption(P);break;case"ArrowUp":p?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":p?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!p)return;n.focusOption("pageup");break;case"PageDown":if(!p)return;n.focusOption("pagedown");break;case"Home":if(!p)return;n.focusOption("first");break;case"End":if(!p)return;n.focusOption("last");break;default:return}o.preventDefault()}},n.state.instancePrefix="react-select-"+(n.props.instanceId||++wo),n.state.selectValue=Ot(i.value),i.menuIsOpen&&n.state.selectValue.length){var a=n.getFocusableOptionsWithIds(),u=n.buildFocusableOptions(),s=u.indexOf(n.state.selectValue[0]);n.state.focusableOptionsWithIds=a,n.state.focusedOption=u[s],n.state.focusedOptionId=Ke(a,u[s])}return n}return ur(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&It(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var a=this.props,u=a.isDisabled,s=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&n.isDisabled||o&&s&&!n.menuIsOpen)&&this.focusInput(),o&&u&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(It(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,a){this.props.onInputChange(n,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var a=this,u=this.state,s=u.selectValue,o=u.isFocused,l=this.buildFocusableOptions(),c=n==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(s[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c],focusedOptionId:this.getFocusedOptionId(l[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(n){var a=this.state,u=a.selectValue,s=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(s);s||(o=-1);var l=u.length-1,c=-1;if(u.length){switch(n){case"previous":o===0?c=0:o===-1?c=l:c=o-1;break;case"next":o>-1&&o<l&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,s=this.getFocusableOptions();if(s.length){var o=0,l=s.indexOf(u);u||(l=-1),n==="up"?o=l>0?l-1:s.length-1:n==="down"?o=(l+1)%s.length:n==="pageup"?(o=l-a,o<0&&(o=0)):n==="pagedown"?(o=l+a,o>s.length-1&&(o=s.length-1)):n==="last"&&(o=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(s[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(qe):S(S({},qe),this.props.theme):qe}},{key:"getCommonProps",value:function(){var n=this.clearValue,a=this.cx,u=this.getStyles,s=this.getClassNames,o=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,g=d.isRtl,b=d.options,m=this.hasValue();return{clearValue:n,cx:a,getStyles:u,getClassNames:s,getValue:o,hasValue:m,isMulti:v,isRtl:g,options:b,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,a=n.isClearable,u=n.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(n,a){return Mn(this.props,n,a)}},{key:"isOptionSelected",value:function(n,a){return Vn(this.props,n,a)}},{key:"filterOption",value:function(n,a){return kn(this.props,n,a)}},{key:"formatOptionLabel",value:function(n,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(n,{context:a,inputValue:u,selectValue:s})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,a=n.isDisabled,u=n.isSearchable,s=n.inputId,o=n.inputValue,l=n.tabIndex,c=n.form,d=n.menuIsOpen,v=n.required,g=this.getComponents(),b=g.Input,m=this.state,p=m.inputIsHidden,h=m.ariaSelection,w=this.commonProps,F=s||this.getElementId("input"),D=S(S(S({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?f.createElement(b,y({},w,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:F,innerRef:this.getInputRef,isDisabled:a,isHidden:p,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:o},D)):f.createElement(Ka,y({id:F,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Te,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},D))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,a=this.getComponents(),u=a.MultiValue,s=a.MultiValueContainer,o=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,v=this.commonProps,g=this.props,b=g.controlShouldRenderValue,m=g.isDisabled,p=g.isMulti,h=g.inputValue,w=g.placeholder,F=this.state,D=F.selectValue,P=F.focusedValue,A=F.isFocused;if(!this.hasValue()||!b)return h?null:f.createElement(d,y({},v,{key:"placeholder",isDisabled:m,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),w);if(p)return D.map(function(I,k){var H=I===P,z="".concat(n.getOptionLabel(I),"-").concat(n.getOptionValue(I));return f.createElement(u,y({},v,{components:{Container:s,Label:o,Remove:l},isFocused:H,isDisabled:m,key:z,index:k,removeProps:{onClick:function(){return n.removeValue(I)},onTouchEnd:function(){return n.removeValue(I)},onMouseDown:function(Q){Q.preventDefault()}},data:I}),n.formatOptionLabel(I,"value"))});if(h)return null;var E=D[0];return f.createElement(c,y({},v,{data:E,isDisabled:m}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),a=n.ClearIndicator,u=this.commonProps,s=this.props,o=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,y({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),a=n.LoadingIndicator,u=this.commonProps,s=this.props,o=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return f.createElement(a,y({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator,u=n.IndicatorSeparator;if(!a||!u)return null;var s=this.commonProps,o=this.props.isDisabled,l=this.state.isFocused;return f.createElement(u,y({},s,{isDisabled:o,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator;if(!a)return null;var u=this.commonProps,s=this.props.isDisabled,o=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,y({},u,{innerProps:l,isDisabled:s,isFocused:o}))}},{key:"renderMenu",value:function(){var n=this,a=this.getComponents(),u=a.Group,s=a.GroupHeading,o=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,v=a.NoOptionsMessage,g=a.Option,b=this.commonProps,m=this.state.focusedOption,p=this.props,h=p.captureMenuScroll,w=p.inputValue,F=p.isLoading,D=p.loadingMessage,P=p.minMenuHeight,A=p.maxMenuHeight,E=p.menuIsOpen,I=p.menuPlacement,k=p.menuPosition,H=p.menuPortalTarget,z=p.menuShouldBlockScroll,_=p.menuShouldScrollIntoView,Q=p.noOptionsMessage,ee=p.onMenuScrollToTop,B=p.onMenuScrollToBottom;if(!E)return null;var T=function(W,te){var ue=W.type,q=W.data,se=W.isDisabled,ne=W.isSelected,Se=W.label,Tn=W.value,ht=m===q,mt=se?void 0:function(){return n.onOptionHover(q)},$n=se?void 0:function(){return n.selectOption(q)},vt="".concat(n.getElementId("option"),"-").concat(te),Bn={id:vt,onClick:$n,onMouseMove:mt,onMouseOver:mt,tabIndex:-1,role:"option","aria-selected":n.isAppleDevice?void 0:ne};return f.createElement(g,y({},b,{innerProps:Bn,data:q,isDisabled:se,isSelected:ne,key:vt,label:Se,type:ue,value:Tn,isFocused:ht,innerRef:ht?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(W.data,"menu"))},K;if(this.hasOptions())K=this.getCategorizedOptions().map(function($){if($.type==="group"){var W=$.data,te=$.options,ue=$.index,q="".concat(n.getElementId("group"),"-").concat(ue),se="".concat(q,"-heading");return f.createElement(u,y({},b,{key:q,data:W,options:te,Heading:s,headingProps:{id:se,data:$.data},label:n.formatGroupLabel($.data)}),$.options.map(function(ne){return T(ne,"".concat(ue,"-").concat(ne.index))}))}else if($.type==="option")return T($,"".concat($.index))});else if(F){var Y=D({inputValue:w});if(Y===null)return null;K=f.createElement(d,b,Y)}else{var ae=Q({inputValue:w});if(ae===null)return null;K=f.createElement(v,b,ae)}var oe={minMenuHeight:P,maxMenuHeight:A,menuPlacement:I,menuPosition:k,menuShouldScrollIntoView:_},Ce=f.createElement(Ii,y({},b,oe),function($){var W=$.ref,te=$.placerProps,ue=te.placement,q=te.maxHeight;return f.createElement(o,y({},b,oe,{innerRef:W,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove},isLoading:F,placement:ue}),f.createElement(to,{captureEnabled:h,onTopArrive:ee,onBottomArrive:B,lockEnabled:z},function(se){return f.createElement(l,y({},b,{innerRef:function(Se){n.getMenuListRef(Se),se(Se)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:n.getElementId("listbox")},isLoading:F,maxHeight:q,focusedOption:m}),K)}))});return H||k==="fixed"?f.createElement(c,y({},b,{appendTo:H,controlElement:this.controlRef,menuPlacement:I,menuPosition:k}),Ce):Ce}},{key:"renderFormField",value:function(){var n=this,a=this.props,u=a.delimiter,s=a.isDisabled,o=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!s)return f.createElement(io,{name:l,onFocus:this.onValueInputFocus});if(!(!l||s))if(o)if(u){var v=d.map(function(m){return n.getOptionValue(m)}).join(u);return f.createElement("input",{name:l,type:"hidden",value:v})}else{var g=d.length>0?d.map(function(m,p){return f.createElement("input",{key:"i-".concat(p),name:l,type:"hidden",value:n.getOptionValue(m)})}):f.createElement("input",{name:l,type:"hidden",value:""});return f.createElement("div",null,g)}else{var b=d[0]?this.getOptionValue(d[0]):"";return f.createElement("input",{name:l,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,a=this.state,u=a.ariaSelection,s=a.focusedOption,o=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return f.createElement(za,y({},n,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:s,focusedValue:o,isFocused:l,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var n=this.getComponents(),a=n.Control,u=n.IndicatorsContainer,s=n.SelectContainer,o=n.ValueContainer,l=this.props,c=l.className,d=l.id,v=l.isDisabled,g=l.menuIsOpen,b=this.state.isFocused,m=this.commonProps=this.getCommonProps();return f.createElement(s,y({},m,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:b}),this.renderLiveRegion(),f.createElement(a,y({},m,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:b,menuIsOpen:g}),f.createElement(o,y({},m,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(u,y({},m,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,a){var u=a.prevProps,s=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,v=a.instancePrefix,g=n.options,b=n.value,m=n.menuIsOpen,p=n.inputValue,h=n.isMulti,w=Ot(b),F={};if(u&&(b!==u.value||g!==u.options||m!==u.menuIsOpen||p!==u.inputValue)){var D=m?Co(n,w):[],P=m?_t(Me(n,w),"".concat(v,"-option")):[],A=s?So(a,w):null,E=yo(a,D),I=Ke(P,E);F={selectValue:w,focusedOption:E,focusedOptionId:I,focusableOptionsWithIds:P,focusedValue:A,clearFocusValueOnUpdate:!1}}var k=o!=null&&n!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},H=l,z=c&&d;return c&&!z&&(H={value:Oe(h,w,w[0]||null),options:w,action:"initial-input-focus"},z=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(H=null),S(S(S({},F),k),{},{prevProps:n,ariaSelection:H,prevWasFocused:z})}}]),r}(f.Component);Ln.defaultProps=Eo;var Fo=f.forwardRef(function(t,e){var r=ar(t);return f.createElement(Ln,y({ref:e},r))}),zt=Fo;const Oo=O.form`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing(4)};
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 664px;
    flex-direction: row;
  }
`,Io=O.p`
  display: none;

  @media screen and (min-width: 1440px) {
    position: absolute;
    display: block;
    top: -22px;
    right: 0px;
    color: ${t=>t.theme.colors.fornCaptionColor};
    font-size: 14px;
    text-align: right;
  }
`,Ao=O.input`
  width: 100%;
  padding: ${t=>t.theme.spacing(3)};
  color: ${t=>t.theme.colors.whiteColor};
  border: 1px solid ${t=>t.theme.colors.cardBorderColor};
  border-radius: ${t=>t.theme.radii.ld};
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
    border-color: ${t=>t.theme.colors.hoverColor};
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    line-height: 1.5em;
  }
`,Do=O.button`
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
`,Po=O.svg`
  width: 18px;
  height: 18px;
  stroke: #e6533c;
`,Mo=O.button`
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
`,Vo=O.svg`
  width: 18px;
  height: 18px;
`,ko=O.div`
  display: flex;
  width: 100%;
  gap: ${t=>t.theme.spacing(4)};
`,Xe="#1c1c1c",Ie="#efede8",Ro="rgba(239, 237, 232, 0.1)",Ut={option:t=>({...t,background:Xe,color:Ie,textwrap:"nowrap"}),control:t=>({...t,backgroundColor:"transparent",borderRadius:"12px",width:"100%",height:"46px",border:"1px solid rgba(239, 237, 232, 0.2)",boxShadow:"none","&:hover":{borderColor:"#E6533C"},"&:focus":{borderColor:"#E6533C"},"@media (min-width: 768px)":{height:"50px"}}),dropdownIndicator:t=>({...t,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:Ie}}),menu:t=>({...t,background:Xe,borderRadius:"12px"}),menuList:t=>({...t,"::-webkit-scrollbar":{width:"22px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:Ro,borderRadius:"12px",border:"7px solid",borderColor:Xe},maxHeight:"276px",borderRadius:"12px",overflowX:"hidden"}),indicatorSeparator:t=>({...t,display:"none"}),placeholder:t=>({...t,color:Ie}),singleValue:t=>({...t,color:Ie}),container:t=>({...t,display:"flex",alignItems:"center",border:"1px",height:"46px",width:"100%","&:hover":{borderColor:"#E6533C"},"&:focus":{borderColor:"#E6533C"},"@media (min-width: 768px)":{height:"50px"}}),input:t=>({...t,fontSize:"14px"})},Wt=[{value:"",label:"All"},{value:"recommended",label:"Recommended"},{value:"not recommended",label:"Not recommended"}],Lo=()=>{const t=Xt(),e=Ve(Zn),i=Wn({initialValues:{title:"",category:"",type:""},validate:s=>{s.title&&s.title.length<2},onSubmit:s=>a(s)}),n=(s,o)=>s?s.find(l=>l.value==o):"",a=s=>{t(Nn(s)),t(Zt())},u=(s,o)=>{i.setFieldValue(s,o.value);const{initialValues:l,values:c}=i;if(o.value!==l[o.value]){const d={...c,[s]:o.value};a(d)}};return x.jsxs(Oo,{onSubmit:i.handleSubmit,children:[x.jsx(Ao,{type:"text",name:"title",placeholder:"Search",value:i.values.title.trim(),onChange:i.handleChange}),i.values.title.trim()!==""&&x.jsx(Do,{type:"button",onClick:()=>{i.setFieldValue("title",""),a("title")},children:x.jsx(Po,{children:x.jsx("use",{href:`${ke}#icon-x`})})}),x.jsx(Mo,{type:"submit",children:x.jsx(Vo,{children:x.jsx("use",{href:`${ke}#icon-search`})})}),x.jsxs(ko,{children:[x.jsx(zt,{value:n(e,i.values.category),onChange:s=>u("category",s),options:e,placeholder:"Categories",styles:Ut}),x.jsx(zt,{value:n(Wt,i.values.type),onChange:s=>u("type",s),options:Wt,styles:Ut})]}),x.jsx(Io,{children:"Filters"})]})},To=t=>t.$recommended?t.theme.colors.recommendedColor:t.theme.colors.notRecommendedColor,$o=O.div`
  height: 141px;
  padding: ${t=>t.theme.spacing(4)};
  border: 1px solid ${t=>t.theme.colors.cardBorderColor};
  border-radius: ${t=>t.theme.radii.ld};
  background-color: ${t=>t.theme.colors.cardBgColor};
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
`,Bo=O.div`
  display: flex;
  margin-bottom: ${t=>t.theme.spacing(6)};
  align-items: baseline;
  justify-content: space-between;
`,jo=O.span`
  margin-right: auto;
  border-radius: ${t=>t.theme.radii.sd};
  padding: 7px 5px;
  /* width: 40px; */
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${t=>t.theme.colors.cardBgColor};
`,Ho=O.span`
  margin-right: ${t=>t.theme.spacing(2)};
  display: block;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${To};
`,Gt=O.p`
  margin-right: ${t=>t.theme.spacing(4)};
  color: ${t=>t.theme.colors.whiteColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::first-letter {
    text-transform: uppercase;
  }
`,_o=O.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  color: ${t=>t.theme.colors.hoverColor};
  background: transparent;
`,No=O.svg`
  margin-left: ${t=>t.theme.spacing(2)};
  width: 16px;
  height: 16px;
`,zo=O.div`
  display: flex;
  column-gap: ${t=>t.theme.spacing(4)};
  height: 32px;
  overflow-y: hidden;
  margin-bottom: ${t=>t.theme.spacing(2)};

  @media screen and (max-width: 375px) {
    max-width: 303px;
  }
`,Uo=O.p`
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
`,Wo=O.svg`
  width: 24px;
  height: 24px;
`,Go=O.div`
  display: flex;
  height: 18px;
  overflow-y: hidden;
  overflow-x: hidden;

  @media screen and (max-width: 375px) {
    max-width: 303px;
  }
`,Ze=O.div`
  display: flex;
  justify-content: space-between;
  height: 18px;
  overflow-y: hidden;
  overflow-x: hidden;
`,Je=O.p`
  color: ${t=>t.theme.colors.captionColor};
`,Yt=O.p`
  margin-right: ${t=>t.theme.spacing(4)};
  color: ${t=>t.theme.colors.whiteColor};

  &::first-letter {
    text-transform: uppercase;
  }
`,Yo=({product:{id:t,title:e,calories:r,category:i,weight:n,recommended:a=!0},toogleModal:u})=>x.jsxs($o,{children:[x.jsxs(Bo,{children:[x.jsx(jo,{children:"diet"}),x.jsx(Ho,{$recommended:a}),x.jsx(Gt,{children:x.jsx("b",{children:a?"Recommended":"Not recommended"})}),x.jsxs(_o,{onClick:()=>u({id:t,title:e,calories:r}),children:["Add",x.jsx(No,{children:x.jsx("use",{href:`${ke}#icon-arrow-right`})})]})]}),x.jsxs(zo,{children:[x.jsx(Wo,{children:x.jsx("use",{href:`${ke}#icon-run-exercises`})}),x.jsx(Uo,{children:e})]}),x.jsxs(Go,{children:[x.jsxs(Ze,{children:[x.jsx(Je,{children:"Calories:"})," ",x.jsx(Yt,{children:r})]}),x.jsxs(Ze,{children:[x.jsx(Je,{children:"Category: "})," ",x.jsx(Gt,{children:i})]}),x.jsxs(Ze,{children:[x.jsx(Je,{children:"Weight:"})," ",x.jsx(Yt,{children:n})]})]})]}),qo=O.ul`
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
      background: ${t=>t.theme.colors.orangeLightColor};
      border-radius: 12px;
      border: 7px solid ${t=>t.theme.colors.blackColor};
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
`,Ko=O.li`
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
`,Xo=O(Yn)`
`,Zo=O.div`
  padding: 48px 24px;

  
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,Jo=O.div`
  position: relative;

   @media screen and (min-width: 374px) {
    width: 287px;
    height: 34px;
  };

  
  @media screen and (min-width: 768px) {
    width: 415px;
  }
`,Qo=O.input`
  width: 100%;
  text-align: left;
  padding: 8px 14px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid ${t=>t.theme.colors.orangeColor};
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${t=>t.theme.colors.grayInput};

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 244px;
    margin-right: 16px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,eu=O.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`,tu=O.input`
  width: 100%;

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid ${t=>t.theme.colors.grayInput};
  background: rgba(0, 0, 0, 0.5);
  color: ${t=>t.theme.colors.orangeColor};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 155px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,nu=O.span`
  position: absolute;
  right: 16px;
  top: 59px;

  color: ${t=>t.theme.colors.captionColor};
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: 768px) {
    right: 16px;
    top: 12px;
  }
`,ru=O.p`
  color: ${t=>t.theme.colors.captionColor};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,iu=O.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`,au=O.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,ou=O.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,uu=O.button`
  padding: 12px 22px;
  border: none;
  color: ${t=>t.theme.colors.whiteColor};

  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  background: ${t=>t.theme.colors.orangeColor};
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${t=>t.theme.colors.orangeColor};
    background: ${t=>t.theme.colors.whiteColor};
  }
  
  @media screen and (max-width: 374px) {
    padding: 12px 32px;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,su=O.button`
  padding: 12px 26px;
  border-radius: 12px;
  border: 1px solid ${t=>t.theme.colors.grayInput};
  background: transparent;
  color: ${t=>t.theme.colors.whiteColor};
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${t=>t.theme.colors.orangeColor};
    background: ${t=>t.theme.colors.whiteColor};
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
`,lu=()=>x.jsx(Xo,{modalStyles:{maxWidth:"479px",width:"100%",height:"280px"},modalTabletStyles:{width:"479",height:"291px"},modalDesktopStyles:{width:"479px",height:"286px"},children:x.jsxs(Zo,{children:[x.jsxs(Jo,{children:[x.jsx(Qo,{type:"text",readOnly:!0,disabled:!0}),x.jsxs(eu,{children:[x.jsx(tu,{type:"number"}),x.jsx(nu,{children:"grams"})]})]}),x.jsxs(ou,{children:[x.jsx(ru,{children:"Calories:"}),x.jsx(iu,{})]}),x.jsxs(au,{children:[x.jsx(uu,{children:"Add to diary"}),x.jsx(su,{children:"Cancel"})]})]})}),cu=()=>{const t=Ve(Jt),e=Ve(Xn),[r,i]=f.useState(!1),[n,a]=f.useState(null),u=s=>{i(o=>!o),a(s)};return x.jsxs("div",{children:[e&&x.jsx(zn,{}),x.jsx(qo,{children:t.map(s=>x.jsx(Ko,{children:x.jsx(Yo,{product:s,toogleModal:u})},s._id))}),r&&x.jsx(lu,{onToogle:u,exerciseInfo:n})]})},du=O.div`
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
`,qt=O.p`
  color: ${t=>t.theme.colors.accentColor};
  @media screen and (min-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Kt=O.span`
  color: ${t=>t.theme.colors.orangeColor};
`,pu=()=>x.jsxs(du,{children:[x.jsxs(qt,{children:[x.jsx(Kt,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),x.jsx(qt,{children:x.jsx(Kt,{children:"Try changing the search parameters."})})]}),fu=O.div`
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
`,hu=O.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: ${t=>t.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${t=>t.theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: ${t=>t.theme.spacing(7)};
  }
`,mu=O.h1`
  margin-bottom: ${t=>t.theme.spacing(8)};
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17em;
  color: ${t=>t.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37em;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;O.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const vu=O.div`
  position: relative;
  z-index: 0;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${qn}) 1x, url(${Kn}) 2x);
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 100vh;
    background-size: contain;
  }

  @media screen and (min-width: 1440px) and (max-height: 800px) {
    height: 800px;
  }
`,gu=({children:t})=>x.jsx(vu,{children:t}),yu=()=>{const t=Xt(),e=Ve(Jn);return f.useEffect(()=>{t(Un()),t(Zt())},[t]),x.jsx(gu,{children:x.jsxs(fu,{children:[x.jsxs(hu,{children:[x.jsx(mu,{children:"Products"}),x.jsx(Lo,{})]}),e?x.jsx(cu,{}):x.jsx(pu,{})]})})};export{yu as default};
