import{A as Hn,r as f,B as _n,R as bt,w as Nn,u as C,a as at,c as Ve,j as g,D as zn,E as Zt,F as Un,L as Wn,s as Gn,i as Yn,H as qn}from"./index-1f8405ad.js";import{u as Kn}from"./formik.esm-48ac4799.js";import{b as Xn}from"./floating-ui.dom-9d61e2db.js";import{i as ke}from"./sprite-91ce3379.js";import{C as Jt}from"./CustomModal-d6ffa10f.js";const Zn="/project-Power-7/assets/products-desktop-1x-74f26ba3.png",Jn="/project-Power-7/assets/products-desktop-2x-c2e987ce.png",Qt=t=>t.products.items,Qn=t=>t.products.isLoading,er=t=>t.categories.categories,tr=Hn([Qt],t=>t.length>0);function le(t){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(t)}function nr(t,e){if(le(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e||"default");if(le(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function en(t){var e=nr(t,"string");return le(e)=="symbol"?e:String(e)}function ge(t,e,r){return e=en(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function xt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,i)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?xt(Object(r),!0).forEach(function(i){ge(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):xt(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function rr(t){if(Array.isArray(t))return t}function ir(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,n,o,u,s=[],a=!0,l=!1;try{if(o=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;a=!1}else for(;!(a=(i=o.call(r)).done)&&(s.push(i.value),s.length!==e);a=!0);}catch(c){l=!0,n=c}finally{try{if(!a&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw n}}return s}}function Qe(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function tn(t,e){if(t){if(typeof t=="string")return Qe(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Qe(t,e)}}function or(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(t,e){return rr(t)||ir(t,e)||tn(t,e)||or()}function ar(t,e){if(t==null)return{};var r={},i=Object.keys(t),n,o;for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}function ie(t,e){if(t==null)return{};var r=ar(t,e),i,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var ur=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function sr(t){var e=t.defaultInputValue,r=e===void 0?"":e,i=t.defaultMenuIsOpen,n=i===void 0?!1:i,o=t.defaultValue,u=o===void 0?null:o,s=t.inputValue,a=t.menuIsOpen,l=t.onChange,c=t.onInputChange,d=t.onMenuClose,h=t.onMenuOpen,b=t.value,x=ie(t,ur),v=f.useState(s!==void 0?s:r),p=re(v,2),m=p[0],O=p[1],F=f.useState(a!==void 0?a:n),D=re(F,2),P=D[0],A=D[1],E=f.useState(b!==void 0?b:u),I=re(E,2),k=I[0],H=I[1],z=f.useCallback(function(Y,oe){typeof l=="function"&&l(Y,oe),H(Y)},[l]),_=f.useCallback(function(Y,oe){var ae;typeof c=="function"&&(ae=c(Y,oe)),O(ae!==void 0?ae:Y)},[c]),Q=f.useCallback(function(){typeof h=="function"&&h(),A(!0)},[h]),ee=f.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),B=s!==void 0?s:m,$=a!==void 0?a:P,K=b!==void 0?b:k;return y(y({},x),{},{inputValue:B,menuIsOpen:$,onChange:z,onInputChange:_,onMenuClose:ee,onMenuOpen:Q,value:K})}function w(){return w=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},w.apply(this,arguments)}function lr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Et(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,en(i.key),i)}}function cr(t,e,r){return e&&Et(t.prototype,e),r&&Et(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function et(t,e){return et=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},et(t,e)}function dr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&et(t,e)}function Re(t){return Re=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Re(t)}function nn(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(nn=function(){return!!t})()}function pr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function fr(t,e){if(e&&(le(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pr(t)}function hr(t){var e=nn();return function(){var i=Re(t),n;if(e){var o=Re(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return fr(this,n)}}function mr(t){if(Array.isArray(t))return Qe(t)}function gr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ut(t){return mr(t)||gr(t)||tn(t)||vr()}function br(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function xr(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Er=function(){function t(r){var i=this;this._insertTag=function(n){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(n,o),i.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(xr(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var o=br(n);try{o.insertRule(i,o.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),N="-ms-",Le="-moz-",M="-webkit-",rn="comm",st="rule",lt="decl",Cr="@import",on="@keyframes",Sr="@layer",yr=Math.abs,je=String.fromCharCode,wr=Object.assign;function Or(t,e){return j(t,0)^45?(((e<<2^j(t,0))<<2^j(t,1))<<2^j(t,2))<<2^j(t,3):0}function an(t){return t.trim()}function Fr(t,e){return(t=e.exec(t))?t[0]:t}function V(t,e,r){return t.replace(e,r)}function tt(t,e){return t.indexOf(e)}function j(t,e){return t.charCodeAt(e)|0}function ve(t,e,r){return t.slice(e,r)}function X(t){return t.length}function ct(t){return t.length}function ye(t,e){return e.push(t),t}function Ir(t,e){return t.map(e).join("")}var He=1,pe=1,un=0,U=0,L=0,fe="";function _e(t,e,r,i,n,o,u){return{value:t,root:e,parent:r,type:i,props:n,children:o,line:He,column:pe,length:u,return:""}}function he(t,e){return wr(_e("",null,null,"",null,null,0),t,{length:-t.length},e)}function Ar(){return L}function Dr(){return L=U>0?j(fe,--U):0,pe--,L===10&&(pe=1,He--),L}function G(){return L=U<un?j(fe,U++):0,pe++,L===10&&(pe=1,He++),L}function J(){return j(fe,U)}function Ae(){return U}function Ee(t,e){return ve(fe,t,e)}function be(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sn(t){return He=pe=1,un=X(fe=t),U=0,[]}function ln(t){return fe="",t}function De(t){return an(Ee(U-1,nt(t===91?t+2:t===40?t+1:t)))}function Pr(t){for(;(L=J())&&L<33;)G();return be(t)>2||be(L)>3?"":" "}function Mr(t,e){for(;--e&&G()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return Ee(t,Ae()+(e<6&&J()==32&&G()==32))}function nt(t){for(;G();)switch(L){case t:return U;case 34:case 39:t!==34&&t!==39&&nt(L);break;case 40:t===41&&nt(t);break;case 92:G();break}return U}function Vr(t,e){for(;G()&&t+L!==47+10;)if(t+L===42+42&&J()===47)break;return"/*"+Ee(e,U-1)+"*"+je(t===47?t:G())}function kr(t){for(;!be(J());)G();return Ee(t,U)}function Rr(t){return ln(Pe("",null,null,null,[""],t=sn(t),0,[0],t))}function Pe(t,e,r,i,n,o,u,s,a){for(var l=0,c=0,d=u,h=0,b=0,x=0,v=1,p=1,m=1,O=0,F="",D=n,P=o,A=i,E=F;p;)switch(x=O,O=G()){case 40:if(x!=108&&j(E,d-1)==58){tt(E+=V(De(O),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:E+=De(O);break;case 9:case 10:case 13:case 32:E+=Pr(x);break;case 92:E+=Mr(Ae()-1,7);continue;case 47:switch(J()){case 42:case 47:ye(Lr(Vr(G(),Ae()),e,r),a);break;default:E+="/"}break;case 123*v:s[l++]=X(E)*m;case 125*v:case 59:case 0:switch(O){case 0:case 125:p=0;case 59+c:m==-1&&(E=V(E,/\f/g,"")),b>0&&X(E)-d&&ye(b>32?St(E+";",i,r,d-1):St(V(E," ","")+";",i,r,d-2),a);break;case 59:E+=";";default:if(ye(A=Ct(E,e,r,l,c,n,s,F,D=[],P=[],d),o),O===123)if(c===0)Pe(E,e,A,A,D,o,d,s,P);else switch(h===99&&j(E,3)===110?100:h){case 100:case 108:case 109:case 115:Pe(t,A,A,i&&ye(Ct(t,A,A,0,0,n,s,F,n,D=[],d),P),n,P,d,s,i?D:P);break;default:Pe(E,A,A,A,[""],P,0,s,P)}}l=c=b=0,v=m=1,F=E="",d=u;break;case 58:d=1+X(E),b=x;default:if(v<1){if(O==123)--v;else if(O==125&&v++==0&&Dr()==125)continue}switch(E+=je(O),O*v){case 38:m=c>0?1:(E+="\f",-1);break;case 44:s[l++]=(X(E)-1)*m,m=1;break;case 64:J()===45&&(E+=De(G())),h=J(),c=d=X(F=E+=kr(Ae())),O++;break;case 45:x===45&&X(E)==2&&(v=0)}}return o}function Ct(t,e,r,i,n,o,u,s,a,l,c){for(var d=n-1,h=n===0?o:[""],b=ct(h),x=0,v=0,p=0;x<i;++x)for(var m=0,O=ve(t,d+1,d=yr(v=u[x])),F=t;m<b;++m)(F=an(v>0?h[m]+" "+O:V(O,/&\f/g,h[m])))&&(a[p++]=F);return _e(t,e,r,n===0?st:s,a,l,c)}function Lr(t,e,r){return _e(t,e,r,rn,je(Ar()),ve(t,2,-2),0)}function St(t,e,r,i){return _e(t,e,r,lt,ve(t,0,i),ve(t,i+1,-1),i)}function de(t,e){for(var r="",i=ct(t),n=0;n<i;n++)r+=e(t[n],n,t,e)||"";return r}function $r(t,e,r,i){switch(t.type){case Sr:if(t.children.length)break;case Cr:case lt:return t.return=t.return||t.value;case rn:return"";case on:return t.return=t.value+"{"+de(t.children,i)+"}";case st:t.value=t.props.join(",")}return X(r=de(t.children,i))?t.return=t.value+"{"+r+"}":""}function Tr(t){var e=ct(t);return function(r,i,n,o){for(var u="",s=0;s<e;s++)u+=t[s](r,i,n,o)||"";return u}}function Br(t){return function(e){e.root||(e=e.return)&&t(e)}}var jr=function(e,r,i){for(var n=0,o=0;n=o,o=J(),n===38&&o===12&&(r[i]=1),!be(o);)G();return Ee(e,U)},Hr=function(e,r){var i=-1,n=44;do switch(be(n)){case 0:n===38&&J()===12&&(r[i]=1),e[i]+=jr(U-1,r,i);break;case 2:e[i]+=De(n);break;case 4:if(n===44){e[++i]=J()===58?"&\f":"",r[i]=e[i].length;break}default:e[i]+=je(n)}while(n=G());return e},_r=function(e,r){return ln(Hr(sn(e),r))},yt=new WeakMap,Nr=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,i=e.parent,n=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!yt.get(i))&&!n){yt.set(e,!0);for(var o=[],u=_r(r,o),s=i.props,a=0,l=0;a<u.length;a++)for(var c=0;c<s.length;c++,l++)e.props[l]=o[a]?u[a].replace(/&\f/g,s[c]):s[c]+" "+u[a]}}},zr=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function cn(t,e){switch(Or(t,e)){case 5103:return M+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return M+t+Le+t+N+t+t;case 6828:case 4268:return M+t+N+t+t;case 6165:return M+t+N+"flex-"+t+t;case 5187:return M+t+V(t,/(\w+).+(:[^]+)/,M+"box-$1$2"+N+"flex-$1$2")+t;case 5443:return M+t+N+"flex-item-"+V(t,/flex-|-self/,"")+t;case 4675:return M+t+N+"flex-line-pack"+V(t,/align-content|flex-|-self/,"")+t;case 5548:return M+t+N+V(t,"shrink","negative")+t;case 5292:return M+t+N+V(t,"basis","preferred-size")+t;case 6060:return M+"box-"+V(t,"-grow","")+M+t+N+V(t,"grow","positive")+t;case 4554:return M+V(t,/([^-])(transform)/g,"$1"+M+"$2")+t;case 6187:return V(V(V(t,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),t,"")+t;case 5495:case 3959:return V(t,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return V(V(t,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+t+t;case 4095:case 3583:case 4068:case 2532:return V(t,/(.+)-inline(.+)/,M+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(X(t)-1-e>6)switch(j(t,e+1)){case 109:if(j(t,e+4)!==45)break;case 102:return V(t,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Le+(j(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~tt(t,"stretch")?cn(V(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(j(t,e+1)!==115)break;case 6444:switch(j(t,X(t)-3-(~tt(t,"!important")&&10))){case 107:return V(t,":",":"+M)+t;case 101:return V(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(j(t,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+N+"$2box$3")+t}break;case 5936:switch(j(t,e+11)){case 114:return M+t+N+V(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return M+t+N+V(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return M+t+N+V(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return M+t+N+t+t}return t}var Ur=function(e,r,i,n){if(e.length>-1&&!e.return)switch(e.type){case lt:e.return=cn(e.value,e.length);break;case on:return de([he(e,{value:V(e.value,"@","@"+M)})],n);case st:if(e.length)return Ir(e.props,function(o){switch(Fr(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return de([he(e,{props:[V(o,/:(read-\w+)/,":"+Le+"$1")]})],n);case"::placeholder":return de([he(e,{props:[V(o,/:(plac\w+)/,":"+M+"input-$1")]}),he(e,{props:[V(o,/:(plac\w+)/,":"+Le+"$1")]}),he(e,{props:[V(o,/:(plac\w+)/,N+"input-$1")]})],n)}return""})}},Wr=[Ur],Gr=function(e){var r=e.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(v){var p=v.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var n=e.stylisPlugins||Wr,o={},u,s=[];u=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(v){for(var p=v.getAttribute("data-emotion").split(" "),m=1;m<p.length;m++)o[p[m]]=!0;s.push(v)});var a,l=[Nr,zr];{var c,d=[$r,Br(function(v){c.insert(v)})],h=Tr(l.concat(n,d)),b=function(p){return de(Rr(p),h)};a=function(p,m,O,F){c=O,b(p?p+"{"+m.styles+"}":m.styles),F&&(x.inserted[m.name]=!0)}}var x={key:r,sheet:new Er({key:r,container:u,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return x.sheet.hydrate(s),x},Yr=!0;function qr(t,e,r){var i="";return r.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):i+=n+" "}),i}var dn=function(e,r,i){var n=e.key+"-"+r.name;(i===!1||Yr===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},Kr=function(e,r,i){dn(e,r,i);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var o=r;do e.insert(r===o?"."+n:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function Xr(t){for(var e=0,r,i=0,n=t.length;n>=4;++i,n-=4)r=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Zr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jr=/[A-Z]|^ms/g,Qr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,pn=function(e){return e.charCodeAt(1)===45},wt=function(e){return e!=null&&typeof e!="boolean"},ze=_n(function(t){return pn(t)?t:t.replace(Jr,"-$&").toLowerCase()}),Ot=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Qr,function(i,n,o){return Z={name:n,styles:o,next:Z},n})}return Zr[e]!==1&&!pn(e)&&typeof r=="number"&&r!==0?r+"px":r};function xe(t,e,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return Z={name:r.name,styles:r.styles,next:Z},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)Z={name:i.name,styles:i.styles,next:Z},i=i.next;var n=r.styles+";";return n}return ei(t,e,r)}case"function":{if(t!==void 0){var o=Z,u=r(t);return Z=o,xe(t,e,u)}break}}if(e==null)return r;var s=e[r];return s!==void 0?s:r}function ei(t,e,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=xe(t,e,r[n])+";";else for(var o in r){var u=r[o];if(typeof u!="object")e!=null&&e[u]!==void 0?i+=o+"{"+e[u]+"}":wt(u)&&(i+=ze(o)+":"+Ot(o,u)+";");else if(Array.isArray(u)&&typeof u[0]=="string"&&(e==null||e[u[0]]===void 0))for(var s=0;s<u.length;s++)wt(u[s])&&(i+=ze(o)+":"+Ot(o,u[s])+";");else{var a=xe(t,e,u);switch(o){case"animation":case"animationName":{i+=ze(o)+":"+a+";";break}default:i+=o+"{"+a+"}"}}}return i}var Ft=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Z,fn=function(e,r,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,o="";Z=void 0;var u=e[0];u==null||u.raw===void 0?(n=!1,o+=xe(i,r,u)):o+=u[0];for(var s=1;s<e.length;s++)o+=xe(i,r,e[s]),n&&(o+=u[s]);Ft.lastIndex=0;for(var a="",l;(l=Ft.exec(o))!==null;)a+="-"+l[1];var c=Xr(o)+a;return{name:c,styles:o,next:Z}},ti=function(e){return e()},ni=bt["useInsertionEffect"]?bt["useInsertionEffect"]:!1,ri=ni||ti,dt={}.hasOwnProperty,hn=f.createContext(typeof HTMLElement<"u"?Gr({key:"css"}):null);hn.Provider;var ii=function(e){return f.forwardRef(function(r,i){var n=f.useContext(hn);return e(r,n,i)})},oi=f.createContext({}),rt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ai=function(e,r){var i={};for(var n in r)dt.call(r,n)&&(i[n]=r[n]);return i[rt]=e,i},ui=function(e){var r=e.cache,i=e.serialized,n=e.isStringTag;return dn(r,i,n),ri(function(){return Kr(r,i,n)}),null},si=ii(function(t,e,r){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var n=t[rt],o=[i],u="";typeof t.className=="string"?u=qr(e.registered,o,t.className):t.className!=null&&(u=t.className+" ");var s=fn(o,void 0,f.useContext(oi));u+=e.key+"-"+s.name;var a={};for(var l in t)dt.call(t,l)&&l!=="css"&&l!==rt&&(a[l]=t[l]);return a.ref=r,a.className=u,f.createElement(f.Fragment,null,f.createElement(ui,{cache:e,serialized:s,isStringTag:typeof n=="string"}),f.createElement(n,a))}),li=si,S=function(e,r){var i=arguments;if(r==null||!dt.call(r,"css"))return f.createElement.apply(void 0,i);var n=i.length,o=new Array(n);o[0]=li,o[1]=ai(e,r);for(var u=2;u<n;u++)o[u]=i[u];return f.createElement.apply(null,o)};function pt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return fn(e)}var ci=function(){var e=pt.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function di(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var it=f.useLayoutEffect,pi=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],$e=function(){};function fi(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function hi(t,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];var o=[].concat(i);if(e&&t)for(var u in e)e.hasOwnProperty(u)&&e[u]&&o.push("".concat(fi(t,u)));return o.filter(function(s){return s}).map(function(s){return String(s).trim()}).join(" ")}var It=function(e){return yi(e)?e.filter(Boolean):le(e)==="object"&&e!==null?[e]:[]},mn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=ie(e,pi);return y({},r)},R=function(e,r,i){var n=e.cx,o=e.getStyles,u=e.getClassNames,s=e.className;return{css:o(r,e),className:n(i??{},u(r,e),s)}};function Ne(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function mi(t){return Ne(t)?window.innerHeight:t.clientHeight}function gn(t){return Ne(t)?window.pageYOffset:t.scrollTop}function Te(t,e){if(Ne(t)){window.scrollTo(0,e);return}t.scrollTop=e}function gi(t){var e=getComputedStyle(t),r=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(r&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function vi(t,e,r,i){return r*((t=t/i-1)*t*t+1)+e}function we(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:$e,n=gn(t),o=e-n,u=10,s=0;function a(){s+=u;var l=vi(s,n,o,r);Te(t,l),s<r?window.requestAnimationFrame(a):i(t)}a()}function At(t,e){var r=t.getBoundingClientRect(),i=e.getBoundingClientRect(),n=e.offsetHeight/3;i.bottom+n>r.bottom?Te(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):i.top-n<r.top&&Te(t,Math.max(e.offsetTop-n,0))}function bi(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Dt(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function xi(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var vn=!1,Ei={get passive(){return vn=!0}},Oe=typeof window<"u"?window:{};Oe.addEventListener&&Oe.removeEventListener&&(Oe.addEventListener("p",$e,Ei),Oe.removeEventListener("p",$e,!1));var Ci=vn;function Si(t){return t!=null}function yi(t){return Array.isArray(t)}function Fe(t,e,r){return t?e:r}var wi=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];var o=Object.entries(e).filter(function(u){var s=re(u,1),a=s[0];return!i.includes(a)});return o.reduce(function(u,s){var a=re(s,2),l=a[0],c=a[1];return u[l]=c,u},{})},Oi=["children","innerProps"],Fi=["children","innerProps"];function Ii(t){var e=t.maxHeight,r=t.menuEl,i=t.minHeight,n=t.placement,o=t.shouldScroll,u=t.isFixedPosition,s=t.controlHeight,a=gi(r),l={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return l;var c=a.getBoundingClientRect(),d=c.height,h=r.getBoundingClientRect(),b=h.bottom,x=h.height,v=h.top,p=r.offsetParent.getBoundingClientRect(),m=p.top,O=u?window.innerHeight:mi(a),F=gn(a),D=parseInt(getComputedStyle(r).marginBottom,10),P=parseInt(getComputedStyle(r).marginTop,10),A=m-P,E=O-v,I=A+F,k=d-F-v,H=b-O+F+D,z=F+v-P,_=160;switch(n){case"auto":case"bottom":if(E>=x)return{placement:"bottom",maxHeight:e};if(k>=x&&!u)return o&&we(a,H,_),{placement:"bottom",maxHeight:e};if(!u&&k>=i||u&&E>=i){o&&we(a,H,_);var Q=u?E-D:k-D;return{placement:"bottom",maxHeight:Q}}if(n==="auto"||u){var ee=e,B=u?A:I;return B>=i&&(ee=Math.min(B-D-s,e)),{placement:"top",maxHeight:ee}}if(n==="bottom")return o&&Te(a,H),{placement:"bottom",maxHeight:e};break;case"top":if(A>=x)return{placement:"top",maxHeight:e};if(I>=x&&!u)return o&&we(a,z,_),{placement:"top",maxHeight:e};if(!u&&I>=i||u&&A>=i){var $=e;return(!u&&I>=i||u&&A>=i)&&($=u?A-P:I-P),o&&we(a,z,_),{placement:"top",maxHeight:$}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return l}function Ai(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var bn=function(e){return e==="auto"?"bottom":e},Di=function(e,r){var i,n=e.placement,o=e.theme,u=o.borderRadius,s=o.spacing,a=o.colors;return y((i={label:"menu"},ge(i,Ai(n),"100%"),ge(i,"position","absolute"),ge(i,"width","100%"),ge(i,"zIndex",1),i),r?{}:{backgroundColor:a.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:s.menuGutter,marginTop:s.menuGutter})},xn=f.createContext(null),Pi=function(e){var r=e.children,i=e.minMenuHeight,n=e.maxMenuHeight,o=e.menuPlacement,u=e.menuPosition,s=e.menuShouldScrollIntoView,a=e.theme,l=f.useContext(xn)||{},c=l.setPortalPlacement,d=f.useRef(null),h=f.useState(n),b=re(h,2),x=b[0],v=b[1],p=f.useState(null),m=re(p,2),O=m[0],F=m[1],D=a.spacing.controlHeight;return it(function(){var P=d.current;if(P){var A=u==="fixed",E=s&&!A,I=Ii({maxHeight:n,menuEl:P,minHeight:i,placement:o,shouldScroll:E,isFixedPosition:A,controlHeight:D});v(I.maxHeight),F(I.placement),c==null||c(I.placement)}},[n,o,u,s,i,c,D]),r({ref:d,placerProps:y(y({},e),{},{placement:O||bn(o),maxHeight:x})})},Mi=function(e){var r=e.children,i=e.innerRef,n=e.innerProps;return S("div",w({},R(e,"menu",{menu:!0}),{ref:i},n),r)},Vi=Mi,ki=function(e,r){var i=e.maxHeight,n=e.theme.spacing.baseUnit;return y({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:n,paddingTop:n})},Ri=function(e){var r=e.children,i=e.innerProps,n=e.innerRef,o=e.isMulti;return S("div",w({},R(e,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:n},i),r)},En=function(e,r){var i=e.theme,n=i.spacing.baseUnit,o=i.colors;return y({textAlign:"center"},r?{}:{color:o.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},Li=En,$i=En,Ti=function(e){var r=e.children,i=r===void 0?"No options":r,n=e.innerProps,o=ie(e,Oi);return S("div",w({},R(y(y({},o),{},{children:i,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),i)},Bi=function(e){var r=e.children,i=r===void 0?"Loading...":r,n=e.innerProps,o=ie(e,Fi);return S("div",w({},R(y(y({},o),{},{children:i,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),i)},ji=function(e){var r=e.rect,i=e.offset,n=e.position;return{left:r.left,position:n,top:i,width:r.width,zIndex:1}},Hi=function(e){var r=e.appendTo,i=e.children,n=e.controlElement,o=e.innerProps,u=e.menuPlacement,s=e.menuPosition,a=f.useRef(null),l=f.useRef(null),c=f.useState(bn(u)),d=re(c,2),h=d[0],b=d[1],x=f.useMemo(function(){return{setPortalPlacement:b}},[]),v=f.useState(null),p=re(v,2),m=p[0],O=p[1],F=f.useCallback(function(){if(n){var E=bi(n),I=s==="fixed"?0:window.pageYOffset,k=E[h]+I;(k!==(m==null?void 0:m.offset)||E.left!==(m==null?void 0:m.rect.left)||E.width!==(m==null?void 0:m.rect.width))&&O({offset:k,rect:E})}},[n,s,h,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);it(function(){F()},[F]);var D=f.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),n&&a.current&&(l.current=Xn(n,a.current,F,{elementResize:"ResizeObserver"in window}))},[n,F]);it(function(){D()},[D]);var P=f.useCallback(function(E){a.current=E,D()},[D]);if(!r&&s!=="fixed"||!m)return null;var A=S("div",w({ref:P},R(y(y({},e),{},{offset:m.offset,position:s,rect:m.rect}),"menuPortal",{"menu-portal":!0}),o),i);return S(xn.Provider,{value:x},r?Nn.createPortal(A,r):A)},_i=function(e){var r=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},Ni=function(e){var r=e.children,i=e.innerProps,n=e.isDisabled,o=e.isRtl;return S("div",w({},R(e,"container",{"--is-disabled":n,"--is-rtl":o}),i),r)},zi=function(e,r){var i=e.theme.spacing,n=e.isMulti,o=e.hasValue,u=e.selectProps.controlShouldRenderValue;return y({alignItems:"center",display:n&&o&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},Ui=function(e){var r=e.children,i=e.innerProps,n=e.isMulti,o=e.hasValue;return S("div",w({},R(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":o}),i),r)},Wi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Gi=function(e){var r=e.children,i=e.innerProps;return S("div",w({},R(e,"indicatorsContainer",{indicators:!0}),i),r)},Pt,Yi=["size"],qi=["innerProps","isRtl","size"],Ki={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Cn=function(e){var r=e.size,i=ie(e,Yi);return S("svg",w({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ki},i))},ft=function(e){return S(Cn,w({size:20},e),S("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Sn=function(e){return S(Cn,w({size:20},e),S("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},yn=function(e,r){var i=e.isFocused,n=e.theme,o=n.spacing.baseUnit,u=n.colors;return y({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?u.neutral60:u.neutral20,padding:o*2,":hover":{color:i?u.neutral80:u.neutral40}})},Xi=yn,Zi=function(e){var r=e.children,i=e.innerProps;return S("div",w({},R(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||S(Sn,null))},Ji=yn,Qi=function(e){var r=e.children,i=e.innerProps;return S("div",w({},R(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||S(ft,null))},eo=function(e,r){var i=e.isDisabled,n=e.theme,o=n.spacing.baseUnit,u=n.colors;return y({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?u.neutral10:u.neutral20,marginBottom:o*2,marginTop:o*2})},to=function(e){var r=e.innerProps;return S("span",w({},r,R(e,"indicatorSeparator",{"indicator-separator":!0})))},no=ci(Pt||(Pt=di([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),ro=function(e,r){var i=e.isFocused,n=e.size,o=e.theme,u=o.colors,s=o.spacing.baseUnit;return y({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?u.neutral60:u.neutral20,padding:s*2})},Ue=function(e){var r=e.delay,i=e.offset;return S("span",{css:pt({animation:"".concat(no," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},io=function(e){var r=e.innerProps,i=e.isRtl,n=e.size,o=n===void 0?4:n,u=ie(e,qi);return S("div",w({},R(y(y({},u),{},{innerProps:r,isRtl:i,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),S(Ue,{delay:0,offset:i}),S(Ue,{delay:160,offset:!0}),S(Ue,{delay:320,offset:!i}))},oo=function(e,r){var i=e.isDisabled,n=e.isFocused,o=e.theme,u=o.colors,s=o.borderRadius,a=o.spacing;return y({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?u.neutral5:u.neutral0,borderColor:i?u.neutral10:n?u.primary:u.neutral20,borderRadius:s,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:n?u.primary:u.neutral30}})},ao=function(e){var r=e.children,i=e.isDisabled,n=e.isFocused,o=e.innerRef,u=e.innerProps,s=e.menuIsOpen;return S("div",w({ref:o},R(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":n,"control--menu-is-open":s}),u,{"aria-disabled":i||void 0}),r)},uo=ao,so=["data"],lo=function(e,r){var i=e.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},co=function(e){var r=e.children,i=e.cx,n=e.getStyles,o=e.getClassNames,u=e.Heading,s=e.headingProps,a=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return S("div",w({},R(e,"group",{group:!0}),a),S(u,w({},s,{selectProps:d,theme:c,getStyles:n,getClassNames:o,cx:i}),l),S("div",null,r))},po=function(e,r){var i=e.theme,n=i.colors,o=i.spacing;return y({label:"group",cursor:"default",display:"block"},r?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},fo=function(e){var r=mn(e);r.data;var i=ie(r,so);return S("div",w({},R(e,"groupHeading",{"group-heading":!0}),i))},ho=co,mo=["innerRef","isDisabled","isHidden","inputClassName"],go=function(e,r){var i=e.isDisabled,n=e.value,o=e.theme,u=o.spacing,s=o.colors;return y(y({visibility:i?"hidden":"visible",transform:n?"translateZ(0)":""},vo),r?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:s.neutral80})},wn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},vo={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":y({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},wn)},bo=function(e){return y({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},wn)},xo=function(e){var r=e.cx,i=e.value,n=mn(e),o=n.innerRef,u=n.isDisabled,s=n.isHidden,a=n.inputClassName,l=ie(n,mo);return S("div",w({},R(e,"input",{"input-container":!0}),{"data-value":i||""}),S("input",w({className:r({input:!0},a),ref:o,style:bo(s),disabled:u},l)))},Eo=xo,Co=function(e,r){var i=e.theme,n=i.spacing,o=i.borderRadius,u=i.colors;return y({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:u.neutral10,borderRadius:o/2,margin:n.baseUnit/2})},So=function(e,r){var i=e.theme,n=i.borderRadius,o=i.colors,u=e.cropWithEllipsis;return y({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:n/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},yo=function(e,r){var i=e.theme,n=i.spacing,o=i.borderRadius,u=i.colors,s=e.isFocused;return y({alignItems:"center",display:"flex"},r?{}:{borderRadius:o/2,backgroundColor:s?u.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},On=function(e){var r=e.children,i=e.innerProps;return S("div",i,r)},wo=On,Oo=On;function Fo(t){var e=t.children,r=t.innerProps;return S("div",w({role:"button"},r),e||S(ft,{size:14}))}var Io=function(e){var r=e.children,i=e.components,n=e.data,o=e.innerProps,u=e.isDisabled,s=e.removeProps,a=e.selectProps,l=i.Container,c=i.Label,d=i.Remove;return S(l,{data:n,innerProps:y(y({},R(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),o),selectProps:a},S(c,{data:n,innerProps:y({},R(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},r),S(d,{data:n,innerProps:y(y({},R(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},s),selectProps:a}))},Ao=Io,Do=function(e,r){var i=e.isDisabled,n=e.isFocused,o=e.isSelected,u=e.theme,s=u.spacing,a=u.colors;return y({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:o?a.primary:n?a.primary25:"transparent",color:i?a.neutral20:o?a.neutral0:"inherit",padding:"".concat(s.baseUnit*2,"px ").concat(s.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:o?a.primary:a.primary50}})},Po=function(e){var r=e.children,i=e.isDisabled,n=e.isFocused,o=e.isSelected,u=e.innerRef,s=e.innerProps;return S("div",w({},R(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":n,"option--is-selected":o}),{ref:u,"aria-disabled":i},s),r)},Mo=Po,Vo=function(e,r){var i=e.theme,n=i.spacing,o=i.colors;return y({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:o.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},ko=function(e){var r=e.children,i=e.innerProps;return S("div",w({},R(e,"placeholder",{placeholder:!0}),i),r)},Ro=ko,Lo=function(e,r){var i=e.isDisabled,n=e.theme,o=n.spacing,u=n.colors;return y({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?u.neutral40:u.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},$o=function(e){var r=e.children,i=e.isDisabled,n=e.innerProps;return S("div",w({},R(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),n),r)},To=$o,Bo={ClearIndicator:Qi,Control:uo,DropdownIndicator:Zi,DownChevron:Sn,CrossIcon:ft,Group:ho,GroupHeading:fo,IndicatorsContainer:Gi,IndicatorSeparator:to,Input:Eo,LoadingIndicator:io,Menu:Vi,MenuList:Ri,MenuPortal:Hi,LoadingMessage:Bi,NoOptionsMessage:Ti,MultiValue:Ao,MultiValueContainer:wo,MultiValueLabel:Oo,MultiValueRemove:Fo,Option:Mo,Placeholder:Ro,SelectContainer:Ni,SingleValue:To,ValueContainer:Ui},jo=function(e){return y(y({},Bo),e.components)},Mt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Ho(t,e){return!!(t===e||Mt(t)&&Mt(e))}function _o(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!Ho(t[r],e[r]))return!1;return!0}function No(t,e){e===void 0&&(e=_o);var r=null;function i(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(r&&r.lastThis===this&&e(n,r.lastArgs))return r.lastResult;var u=t.apply(this,n);return r={lastResult:u,lastArgs:n,lastThis:this},u}return i.clear=function(){r=null},i}var zo={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Uo=function(e){return S("span",w({css:zo},e))},Vt=Uo,Wo={guidance:function(e){var r=e.isSearchable,i=e.isMulti,n=e.tabSelectsValue,o=e.context,u=e.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,i=e.label,n=i===void 0?"":i,o=e.labels,u=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return u?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var r=e.context,i=e.focused,n=e.options,o=e.label,u=o===void 0?"":o,s=e.selectValue,a=e.isDisabled,l=e.isSelected,c=e.isAppleDevice,d=function(v,p){return v&&v.length?"".concat(v.indexOf(p)+1," of ").concat(v.length):""};if(r==="value"&&s)return"value ".concat(u," focused, ").concat(d(s,i),".");if(r==="menu"&&c){var h=a?" disabled":"",b="".concat(l?" selected":"").concat(h);return"".concat(u).concat(b,", ").concat(d(n,i),".")}return""},onFilter:function(e){var r=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},Go=function(e){var r=e.ariaSelection,i=e.focusedOption,n=e.focusedValue,o=e.focusableOptions,u=e.isFocused,s=e.selectValue,a=e.selectProps,l=e.id,c=e.isAppleDevice,d=a.ariaLiveMessages,h=a.getOptionLabel,b=a.inputValue,x=a.isMulti,v=a.isOptionDisabled,p=a.isSearchable,m=a.menuIsOpen,O=a.options,F=a.screenReaderStatus,D=a.tabSelectsValue,P=a.isLoading,A=a["aria-label"],E=a["aria-live"],I=f.useMemo(function(){return y(y({},Wo),d||{})},[d]),k=f.useMemo(function(){var B="";if(r&&I.onChange){var $=r.option,K=r.options,Y=r.removedValue,oe=r.removedValues,ae=r.value,Ce=function(ne){return Array.isArray(ne)?null:ne},T=Y||$||Ce(ae),W=T?h(T):"",te=K||oe||void 0,ue=te?te.map(h):[],q=y({isDisabled:T&&v(T,s),label:W,labels:ue},r);B=I.onChange(q)}return B},[r,I,v,s,h]),H=f.useMemo(function(){var B="",$=i||n,K=!!(i&&s&&s.includes(i));if($&&I.onFocus){var Y={focused:$,label:h($),isDisabled:v($,s),isSelected:K,options:o,context:$===i?"menu":"value",selectValue:s,isAppleDevice:c};B=I.onFocus(Y)}return B},[i,n,h,v,I,o,s,c]),z=f.useMemo(function(){var B="";if(m&&O.length&&!P&&I.onFilter){var $=F({count:o.length});B=I.onFilter({inputValue:b,resultsMessage:$})}return B},[o,b,m,I,O,F,P]),_=(r==null?void 0:r.action)==="initial-input-focus",Q=f.useMemo(function(){var B="";if(I.guidance){var $=n?"value":m?"menu":"input";B=I.guidance({"aria-label":A,context:$,isDisabled:i&&v(i,s),isMulti:x,isSearchable:p,tabSelectsValue:D,isInitialFocus:_})}return B},[A,i,n,x,v,p,m,I,s,D,_]),ee=S(f.Fragment,null,S("span",{id:"aria-selection"},k),S("span",{id:"aria-focused"},H),S("span",{id:"aria-results"},z),S("span",{id:"aria-guidance"},Q));return S(f.Fragment,null,S(Vt,{id:l},_&&ee),S(Vt,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!_&&ee))},Yo=Go,ot=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],qo=new RegExp("["+ot.map(function(t){return t.letters}).join("")+"]","g"),Fn={};for(var We=0;We<ot.length;We++)for(var Ge=ot[We],Ye=0;Ye<Ge.letters.length;Ye++)Fn[Ge.letters[Ye]]=Ge.base;var In=function(e){return e.replace(qo,function(r){return Fn[r]})},Ko=No(In),kt=function(e){return e.replace(/^\s+|\s+$/g,"")},Xo=function(e){return"".concat(e.label," ").concat(e.value)},Zo=function(e){return function(r,i){if(r.data.__isNew__)return!0;var n=y({ignoreCase:!0,ignoreAccents:!0,stringify:Xo,trim:!0,matchFrom:"any"},e),o=n.ignoreCase,u=n.ignoreAccents,s=n.stringify,a=n.trim,l=n.matchFrom,c=a?kt(i):i,d=a?kt(s(r)):s(r);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Ko(c),d=In(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Jo=["innerRef"];function Qo(t){var e=t.innerRef,r=ie(t,Jo),i=wi(r,"onExited","in","enter","exit","appear");return S("input",w({ref:e},i,{css:pt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var ea=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function ta(t){var e=t.isEnabled,r=t.onBottomArrive,i=t.onBottomLeave,n=t.onTopArrive,o=t.onTopLeave,u=f.useRef(!1),s=f.useRef(!1),a=f.useRef(0),l=f.useRef(null),c=f.useCallback(function(p,m){if(l.current!==null){var O=l.current,F=O.scrollTop,D=O.scrollHeight,P=O.clientHeight,A=l.current,E=m>0,I=D-P-F,k=!1;I>m&&u.current&&(i&&i(p),u.current=!1),E&&s.current&&(o&&o(p),s.current=!1),E&&m>I?(r&&!u.current&&r(p),A.scrollTop=D,k=!0,u.current=!0):!E&&-m>F&&(n&&!s.current&&n(p),A.scrollTop=0,k=!0,s.current=!0),k&&ea(p)}},[r,i,n,o]),d=f.useCallback(function(p){c(p,p.deltaY)},[c]),h=f.useCallback(function(p){a.current=p.changedTouches[0].clientY},[]),b=f.useCallback(function(p){var m=a.current-p.changedTouches[0].clientY;c(p,m)},[c]),x=f.useCallback(function(p){if(p){var m=Ci?{passive:!1}:!1;p.addEventListener("wheel",d,m),p.addEventListener("touchstart",h,m),p.addEventListener("touchmove",b,m)}},[b,h,d]),v=f.useCallback(function(p){p&&(p.removeEventListener("wheel",d,!1),p.removeEventListener("touchstart",h,!1),p.removeEventListener("touchmove",b,!1))},[b,h,d]);return f.useEffect(function(){if(e){var p=l.current;return x(p),function(){v(p)}}},[e,x,v]),function(p){l.current=p}}var Rt=["boxSizing","height","overflow","paddingRight","position"],Lt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function $t(t){t.preventDefault()}function Tt(t){t.stopPropagation()}function Bt(){var t=this.scrollTop,e=this.scrollHeight,r=t+this.offsetHeight;t===0?this.scrollTop=1:r===e&&(this.scrollTop=t-1)}function jt(){return"ontouchstart"in window||navigator.maxTouchPoints}var Ht=!!(typeof window<"u"&&window.document&&window.document.createElement),me=0,ce={capture:!1,passive:!1};function na(t){var e=t.isEnabled,r=t.accountForScrollbars,i=r===void 0?!0:r,n=f.useRef({}),o=f.useRef(null),u=f.useCallback(function(a){if(Ht){var l=document.body,c=l&&l.style;if(i&&Rt.forEach(function(x){var v=c&&c[x];n.current[x]=v}),i&&me<1){var d=parseInt(n.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,b=window.innerWidth-h+d||0;Object.keys(Lt).forEach(function(x){var v=Lt[x];c&&(c[x]=v)}),c&&(c.paddingRight="".concat(b,"px"))}l&&jt()&&(l.addEventListener("touchmove",$t,ce),a&&(a.addEventListener("touchstart",Bt,ce),a.addEventListener("touchmove",Tt,ce))),me+=1}},[i]),s=f.useCallback(function(a){if(Ht){var l=document.body,c=l&&l.style;me=Math.max(me-1,0),i&&me<1&&Rt.forEach(function(d){var h=n.current[d];c&&(c[d]=h)}),l&&jt()&&(l.removeEventListener("touchmove",$t,ce),a&&(a.removeEventListener("touchstart",Bt,ce),a.removeEventListener("touchmove",Tt,ce)))}},[i]);return f.useEffect(function(){if(e){var a=o.current;return u(a),function(){s(a)}}},[e,u,s]),function(a){o.current=a}}var ra=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},ia={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function oa(t){var e=t.children,r=t.lockEnabled,i=t.captureEnabled,n=i===void 0?!0:i,o=t.onBottomArrive,u=t.onBottomLeave,s=t.onTopArrive,a=t.onTopLeave,l=ta({isEnabled:n,onBottomArrive:o,onBottomLeave:u,onTopArrive:s,onTopLeave:a}),c=na({isEnabled:r}),d=function(b){l(b),c(b)};return S(f.Fragment,null,r&&S("div",{onClick:ra,css:ia}),e(d))}var aa={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},ua=function(e){var r=e.name,i=e.onFocus;return S("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:aa,value:"",onChange:function(){}})},sa=ua;function ht(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function la(){return ht(/^iPhone/i)}function An(){return ht(/^Mac/i)}function ca(){return ht(/^iPad/i)||An()&&navigator.maxTouchPoints>1}function da(){return la()||ca()}function pa(){return An()||da()}var fa=function(e){return e.label},ha=function(e){return e.label},ma=function(e){return e.value},ga=function(e){return!!e.isDisabled},va={clearIndicator:Ji,container:_i,control:oo,dropdownIndicator:Xi,group:lo,groupHeading:po,indicatorsContainer:Wi,indicatorSeparator:eo,input:go,loadingIndicator:ro,loadingMessage:$i,menu:Di,menuList:ki,menuPortal:ji,multiValue:Co,multiValueLabel:So,multiValueRemove:yo,noOptionsMessage:Li,option:Do,placeholder:Vo,singleValue:Lo,valueContainer:zi},ba={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},xa=4,Dn=4,Ea=38,Ca=Dn*2,Sa={baseUnit:Dn,controlHeight:Ea,menuGutter:Ca},qe={borderRadius:xa,colors:ba,spacing:Sa},ya={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Dt(),captureMenuScroll:!Dt(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Zo(),formatGroupLabel:fa,getOptionLabel:ha,getOptionValue:ma,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:ga,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!xi(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function _t(t,e,r,i){var n=Vn(t,e,r),o=kn(t,e,r),u=Mn(t,e),s=Be(t,e);return{type:"option",data:e,isDisabled:n,isSelected:o,label:u,value:s,index:i}}function Me(t,e){return t.options.map(function(r,i){if("options"in r){var n=r.options.map(function(u,s){return _t(t,u,e,s)}).filter(function(u){return zt(t,u)});return n.length>0?{type:"group",data:r,options:n,index:i}:void 0}var o=_t(t,r,e,i);return zt(t,o)?o:void 0}).filter(Si)}function Pn(t){return t.reduce(function(e,r){return r.type==="group"?e.push.apply(e,ut(r.options.map(function(i){return i.data}))):e.push(r.data),e},[])}function Nt(t,e){return t.reduce(function(r,i){return i.type==="group"?r.push.apply(r,ut(i.options.map(function(n){return{data:n.data,id:"".concat(e,"-").concat(i.index,"-").concat(n.index)}}))):r.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),r},[])}function wa(t,e){return Pn(Me(t,e))}function zt(t,e){var r=t.inputValue,i=r===void 0?"":r,n=e.data,o=e.isSelected,u=e.label,s=e.value;return(!Ln(t)||!o)&&Rn(t,{label:u,value:s,data:n},i)}function Oa(t,e){var r=t.focusedValue,i=t.selectValue,n=i.indexOf(r);if(n>-1){var o=e.indexOf(r);if(o>-1)return r;if(n<e.length)return e[n]}return null}function Fa(t,e){var r=t.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var Ke=function(e,r){var i,n=(i=e.find(function(o){return o.data===r}))===null||i===void 0?void 0:i.id;return n||null},Mn=function(e,r){return e.getOptionLabel(r)},Be=function(e,r){return e.getOptionValue(r)};function Vn(t,e,r){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,r):!1}function kn(t,e,r){if(r.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,r);var i=Be(t,e);return r.some(function(n){return Be(t,n)===i})}function Rn(t,e,r){return t.filterOption?t.filterOption(e,r):!0}var Ln=function(e){var r=e.hideSelectedOptions,i=e.isMulti;return r===void 0?i:r},Ia=1,$n=function(t){dr(r,t);var e=hr(r);function r(i){var n;if(lr(this,r),n=e.call(this,i),n.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.isAppleDevice=pa(),n.controlRef=null,n.getControlRef=function(a){n.controlRef=a},n.focusedOptionRef=null,n.getFocusedOptionRef=function(a){n.focusedOptionRef=a},n.menuListRef=null,n.getMenuListRef=function(a){n.menuListRef=a},n.inputRef=null,n.getInputRef=function(a){n.inputRef=a},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(a,l){var c=n.props,d=c.onChange,h=c.name;l.name=h,n.ariaOnChange(a,l),d(a,l)},n.setValue=function(a,l,c){var d=n.props,h=d.closeMenuOnSelect,b=d.isMulti,x=d.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:x}),h&&(n.setState({inputIsHiddenAfterUpdate:!b}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(a,{action:l,option:c})},n.selectOption=function(a){var l=n.props,c=l.blurInputOnSelect,d=l.isMulti,h=l.name,b=n.state.selectValue,x=d&&n.isOptionSelected(a,b),v=n.isOptionDisabled(a,b);if(x){var p=n.getOptionValue(a);n.setValue(b.filter(function(m){return n.getOptionValue(m)!==p}),"deselect-option",a)}else if(!v)d?n.setValue([].concat(ut(b),[a]),"select-option",a):n.setValue(a,"select-option");else{n.ariaOnChange(a,{action:"select-option",option:a,name:h});return}c&&n.blurInput()},n.removeValue=function(a){var l=n.props.isMulti,c=n.state.selectValue,d=n.getOptionValue(a),h=c.filter(function(x){return n.getOptionValue(x)!==d}),b=Fe(l,h,h[0]||null);n.onChange(b,{action:"remove-value",removedValue:a}),n.focusInput()},n.clearValue=function(){var a=n.state.selectValue;n.onChange(Fe(n.props.isMulti,[],null),{action:"clear",removedValues:a})},n.popValue=function(){var a=n.props.isMulti,l=n.state.selectValue,c=l[l.length-1],d=l.slice(0,l.length-1),h=Fe(a,d,d[0]||null);n.onChange(h,{action:"pop-value",removedValue:c})},n.getFocusedOptionId=function(a){return Ke(n.state.focusableOptionsWithIds,a)},n.getFocusableOptionsWithIds=function(){return Nt(Me(n.props,n.state.selectValue),n.getElementId("option"))},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return hi.apply(void 0,[n.props.classNamePrefix].concat(l))},n.getOptionLabel=function(a){return Mn(n.props,a)},n.getOptionValue=function(a){return Be(n.props,a)},n.getStyles=function(a,l){var c=n.props.unstyled,d=va[a](l,c);d.boxSizing="border-box";var h=n.props.styles[a];return h?h(d,l):d},n.getClassNames=function(a,l){var c,d;return(c=(d=n.props.classNames)[a])===null||c===void 0?void 0:c.call(d,l)},n.getElementId=function(a){return"".concat(n.state.instancePrefix,"-").concat(a)},n.getComponents=function(){return jo(n.props)},n.buildCategorizedOptions=function(){return Me(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return Pn(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(a,l){n.setState({ariaSelection:y({value:a},l)})},n.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(a){n.blockOptionHover=!1},n.onControlMouseDown=function(a){if(!a.defaultPrevented){var l=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&n.onMenuClose():l&&n.openMenu("first"):(l&&(n.openAfterFocus=!0),n.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},n.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!n.props.isDisabled){var l=n.props,c=l.isMulti,d=l.menuIsOpen;n.focusInput(),d?(n.setState({inputIsHiddenAfterUpdate:!c}),n.onMenuClose()):n.openMenu("first"),a.preventDefault()}},n.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(n.clearValue(),a.preventDefault(),n.openAfterFocus=!1,a.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(a){typeof n.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&Ne(a.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(a)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(a){var l=a.touches,c=l&&l.item(0);c&&(n.initialTouchX=c.clientX,n.initialTouchY=c.clientY,n.userIsDragging=!1)},n.onTouchMove=function(a){var l=a.touches,c=l&&l.item(0);if(c){var d=Math.abs(c.clientX-n.initialTouchX),h=Math.abs(c.clientY-n.initialTouchY),b=5;n.userIsDragging=d>b||h>b}},n.onTouchEnd=function(a){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(a.target)&&n.menuListRef&&!n.menuListRef.contains(a.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(a){n.userIsDragging||n.onControlMouseDown(a)},n.onClearIndicatorTouchEnd=function(a){n.userIsDragging||n.onClearIndicatorMouseDown(a)},n.onDropdownIndicatorTouchEnd=function(a){n.userIsDragging||n.onDropdownIndicatorMouseDown(a)},n.handleInputChange=function(a){var l=n.props.inputValue,c=a.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(c,{action:"input-change",prevInputValue:l}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(a){n.props.onFocus&&n.props.onFocus(a),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(a){var l=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(a),n.onInputChange("",{action:"input-blur",prevInputValue:l}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(a){if(!(n.blockOptionHover||n.state.focusedOption===a)){var l=n.getFocusableOptions(),c=l.indexOf(a);n.setState({focusedOption:a,focusedOptionId:c>-1?n.getFocusedOptionId(a):null})}},n.shouldHideSelectedOptions=function(){return Ln(n.props)},n.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),n.focus()},n.onKeyDown=function(a){var l=n.props,c=l.isMulti,d=l.backspaceRemovesValue,h=l.escapeClearsValue,b=l.inputValue,x=l.isClearable,v=l.isDisabled,p=l.menuIsOpen,m=l.onKeyDown,O=l.tabSelectsValue,F=l.openMenuOnFocus,D=n.state,P=D.focusedOption,A=D.focusedValue,E=D.selectValue;if(!v&&!(typeof m=="function"&&(m(a),a.defaultPrevented))){switch(n.blockOptionHover=!0,a.key){case"ArrowLeft":if(!c||b)return;n.focusValue("previous");break;case"ArrowRight":if(!c||b)return;n.focusValue("next");break;case"Delete":case"Backspace":if(b)return;if(A)n.removeValue(A);else{if(!d)return;c?n.popValue():x&&n.clearValue()}break;case"Tab":if(n.isComposing||a.shiftKey||!p||!O||!P||F&&n.isOptionSelected(P,E))return;n.selectOption(P);break;case"Enter":if(a.keyCode===229)break;if(p){if(!P||n.isComposing)return;n.selectOption(P);break}return;case"Escape":p?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:b}),n.onMenuClose()):x&&h&&n.clearValue();break;case" ":if(b)return;if(!p){n.openMenu("first");break}if(!P)return;n.selectOption(P);break;case"ArrowUp":p?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":p?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!p)return;n.focusOption("pageup");break;case"PageDown":if(!p)return;n.focusOption("pagedown");break;case"Home":if(!p)return;n.focusOption("first");break;case"End":if(!p)return;n.focusOption("last");break;default:return}a.preventDefault()}},n.state.instancePrefix="react-select-"+(n.props.instanceId||++Ia),n.state.selectValue=It(i.value),i.menuIsOpen&&n.state.selectValue.length){var o=n.getFocusableOptionsWithIds(),u=n.buildFocusableOptions(),s=u.indexOf(n.state.selectValue[0]);n.state.focusableOptionsWithIds=o,n.state.focusedOption=u[s],n.state.focusedOptionId=Ke(o,u[s])}return n}return cr(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&At(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var o=this.props,u=o.isDisabled,s=o.menuIsOpen,a=this.state.isFocused;(a&&!u&&n.isDisabled||a&&s&&!n.menuIsOpen)&&this.focusInput(),a&&u&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!u&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(At(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,o){this.props.onInputChange(n,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var o=this,u=this.state,s=u.selectValue,a=u.isFocused,l=this.buildFocusableOptions(),c=n==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(s[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c],focusedOptionId:this.getFocusedOptionId(l[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(n){var o=this.state,u=o.selectValue,s=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=u.indexOf(s);s||(a=-1);var l=u.length-1,c=-1;if(u.length){switch(n){case"previous":a===0?c=0:a===-1?c=l:c=a-1;break;case"next":a>-1&&a<l&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,u=this.state.focusedOption,s=this.getFocusableOptions();if(s.length){var a=0,l=s.indexOf(u);u||(l=-1),n==="up"?a=l>0?l-1:s.length-1:n==="down"?a=(l+1)%s.length:n==="pageup"?(a=l-o,a<0&&(a=0)):n==="pagedown"?(a=l+o,a>s.length-1&&(a=s.length-1)):n==="last"&&(a=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(s[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(qe):y(y({},qe),this.props.theme):qe}},{key:"getCommonProps",value:function(){var n=this.clearValue,o=this.cx,u=this.getStyles,s=this.getClassNames,a=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,h=d.isMulti,b=d.isRtl,x=d.options,v=this.hasValue();return{clearValue:n,cx:o,getStyles:u,getClassNames:s,getValue:a,hasValue:v,isMulti:h,isRtl:b,options:x,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,o=n.isClearable,u=n.isMulti;return o===void 0?u:o}},{key:"isOptionDisabled",value:function(n,o){return Vn(this.props,n,o)}},{key:"isOptionSelected",value:function(n,o){return kn(this.props,n,o)}},{key:"filterOption",value:function(n,o){return Rn(this.props,n,o)}},{key:"formatOptionLabel",value:function(n,o){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(n,{context:o,inputValue:u,selectValue:s})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,o=n.isDisabled,u=n.isSearchable,s=n.inputId,a=n.inputValue,l=n.tabIndex,c=n.form,d=n.menuIsOpen,h=n.required,b=this.getComponents(),x=b.Input,v=this.state,p=v.inputIsHidden,m=v.ariaSelection,O=this.commonProps,F=s||this.getElementId("input"),D=y(y(y({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?f.createElement(x,w({},O,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:F,innerRef:this.getInputRef,isDisabled:o,isHidden:p,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:a},D)):f.createElement(Qo,w({id:F,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:$e,onFocus:this.onInputFocus,disabled:o,tabIndex:l,inputMode:"none",form:c,value:""},D))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,o=this.getComponents(),u=o.MultiValue,s=o.MultiValueContainer,a=o.MultiValueLabel,l=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,h=this.commonProps,b=this.props,x=b.controlShouldRenderValue,v=b.isDisabled,p=b.isMulti,m=b.inputValue,O=b.placeholder,F=this.state,D=F.selectValue,P=F.focusedValue,A=F.isFocused;if(!this.hasValue()||!x)return m?null:f.createElement(d,w({},h,{key:"placeholder",isDisabled:v,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),O);if(p)return D.map(function(I,k){var H=I===P,z="".concat(n.getOptionLabel(I),"-").concat(n.getOptionValue(I));return f.createElement(u,w({},h,{components:{Container:s,Label:a,Remove:l},isFocused:H,isDisabled:v,key:z,index:k,removeProps:{onClick:function(){return n.removeValue(I)},onTouchEnd:function(){return n.removeValue(I)},onMouseDown:function(Q){Q.preventDefault()}},data:I}),n.formatOptionLabel(I,"value"))});if(m)return null;var E=D[0];return f.createElement(c,w({},h,{data:E,isDisabled:v}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),o=n.ClearIndicator,u=this.commonProps,s=this.props,a=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||a||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(o,w({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),o=n.LoadingIndicator,u=this.commonProps,s=this.props,a=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!o||!l)return null;var d={"aria-hidden":"true"};return f.createElement(o,w({},u,{innerProps:d,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),o=n.DropdownIndicator,u=n.IndicatorSeparator;if(!o||!u)return null;var s=this.commonProps,a=this.props.isDisabled,l=this.state.isFocused;return f.createElement(u,w({},s,{isDisabled:a,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),o=n.DropdownIndicator;if(!o)return null;var u=this.commonProps,s=this.props.isDisabled,a=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(o,w({},u,{innerProps:l,isDisabled:s,isFocused:a}))}},{key:"renderMenu",value:function(){var n=this,o=this.getComponents(),u=o.Group,s=o.GroupHeading,a=o.Menu,l=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,h=o.NoOptionsMessage,b=o.Option,x=this.commonProps,v=this.state.focusedOption,p=this.props,m=p.captureMenuScroll,O=p.inputValue,F=p.isLoading,D=p.loadingMessage,P=p.minMenuHeight,A=p.maxMenuHeight,E=p.menuIsOpen,I=p.menuPlacement,k=p.menuPosition,H=p.menuPortalTarget,z=p.menuShouldBlockScroll,_=p.menuShouldScrollIntoView,Q=p.noOptionsMessage,ee=p.onMenuScrollToTop,B=p.onMenuScrollToBottom;if(!E)return null;var $=function(W,te){var ue=W.type,q=W.data,se=W.isDisabled,ne=W.isSelected,Se=W.label,Tn=W.value,mt=v===q,gt=se?void 0:function(){return n.onOptionHover(q)},Bn=se?void 0:function(){return n.selectOption(q)},vt="".concat(n.getElementId("option"),"-").concat(te),jn={id:vt,onClick:Bn,onMouseMove:gt,onMouseOver:gt,tabIndex:-1,role:"option","aria-selected":n.isAppleDevice?void 0:ne};return f.createElement(b,w({},x,{innerProps:jn,data:q,isDisabled:se,isSelected:ne,key:vt,label:Se,type:ue,value:Tn,isFocused:mt,innerRef:mt?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(W.data,"menu"))},K;if(this.hasOptions())K=this.getCategorizedOptions().map(function(T){if(T.type==="group"){var W=T.data,te=T.options,ue=T.index,q="".concat(n.getElementId("group"),"-").concat(ue),se="".concat(q,"-heading");return f.createElement(u,w({},x,{key:q,data:W,options:te,Heading:s,headingProps:{id:se,data:T.data},label:n.formatGroupLabel(T.data)}),T.options.map(function(ne){return $(ne,"".concat(ue,"-").concat(ne.index))}))}else if(T.type==="option")return $(T,"".concat(T.index))});else if(F){var Y=D({inputValue:O});if(Y===null)return null;K=f.createElement(d,x,Y)}else{var oe=Q({inputValue:O});if(oe===null)return null;K=f.createElement(h,x,oe)}var ae={minMenuHeight:P,maxMenuHeight:A,menuPlacement:I,menuPosition:k,menuShouldScrollIntoView:_},Ce=f.createElement(Pi,w({},x,ae),function(T){var W=T.ref,te=T.placerProps,ue=te.placement,q=te.maxHeight;return f.createElement(a,w({},x,ae,{innerRef:W,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove},isLoading:F,placement:ue}),f.createElement(oa,{captureEnabled:m,onTopArrive:ee,onBottomArrive:B,lockEnabled:z},function(se){return f.createElement(l,w({},x,{innerRef:function(Se){n.getMenuListRef(Se),se(Se)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:n.getElementId("listbox")},isLoading:F,maxHeight:q,focusedOption:v}),K)}))});return H||k==="fixed"?f.createElement(c,w({},x,{appendTo:H,controlElement:this.controlRef,menuPlacement:I,menuPosition:k}),Ce):Ce}},{key:"renderFormField",value:function(){var n=this,o=this.props,u=o.delimiter,s=o.isDisabled,a=o.isMulti,l=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!s)return f.createElement(sa,{name:l,onFocus:this.onValueInputFocus});if(!(!l||s))if(a)if(u){var h=d.map(function(v){return n.getOptionValue(v)}).join(u);return f.createElement("input",{name:l,type:"hidden",value:h})}else{var b=d.length>0?d.map(function(v,p){return f.createElement("input",{key:"i-".concat(p),name:l,type:"hidden",value:n.getOptionValue(v)})}):f.createElement("input",{name:l,type:"hidden",value:""});return f.createElement("div",null,b)}else{var x=d[0]?this.getOptionValue(d[0]):"";return f.createElement("input",{name:l,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,o=this.state,u=o.ariaSelection,s=o.focusedOption,a=o.focusedValue,l=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return f.createElement(Yo,w({},n,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:s,focusedValue:a,isFocused:l,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var n=this.getComponents(),o=n.Control,u=n.IndicatorsContainer,s=n.SelectContainer,a=n.ValueContainer,l=this.props,c=l.className,d=l.id,h=l.isDisabled,b=l.menuIsOpen,x=this.state.isFocused,v=this.commonProps=this.getCommonProps();return f.createElement(s,w({},v,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:x}),this.renderLiveRegion(),f.createElement(o,w({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:x,menuIsOpen:b}),f.createElement(a,w({},v,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(u,w({},v,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,o){var u=o.prevProps,s=o.clearFocusValueOnUpdate,a=o.inputIsHiddenAfterUpdate,l=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,h=o.instancePrefix,b=n.options,x=n.value,v=n.menuIsOpen,p=n.inputValue,m=n.isMulti,O=It(x),F={};if(u&&(x!==u.value||b!==u.options||v!==u.menuIsOpen||p!==u.inputValue)){var D=v?wa(n,O):[],P=v?Nt(Me(n,O),"".concat(h,"-option")):[],A=s?Oa(o,O):null,E=Fa(o,D),I=Ke(P,E);F={selectValue:O,focusedOption:E,focusedOptionId:I,focusableOptionsWithIds:P,focusedValue:A,clearFocusValueOnUpdate:!1}}var k=a!=null&&n!==u?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},H=l,z=c&&d;return c&&!z&&(H={value:Fe(m,O,O[0]||null),options:O,action:"initial-input-focus"},z=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(H=null),y(y(y({},F),k),{},{prevProps:n,ariaSelection:H,prevWasFocused:z})}}]),r}(f.Component);$n.defaultProps=ya;var Aa=f.forwardRef(function(t,e){var r=sr(t);return f.createElement($n,w({ref:e},r))}),Ut=Aa;const Da=C.form`
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
`,Pa=C.p`
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
`,Ma=C.input`
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
`,Va=C.button`
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
`,ka=C.svg`
  width: 18px;
  height: 18px;
  stroke: #e6533c;
`,Ra=C.button`
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
`,La=C.svg`
  width: 18px;
  height: 18px;
`,$a=C.div`
  display: flex;
  width: 100%;
  gap: ${t=>t.theme.spacing(4)};
`,Xe="#1c1c1c",Ie="#efede8",Ta="rgba(239, 237, 232, 0.1)",Wt={option:t=>({...t,background:Xe,color:Ie,textwrap:"nowrap"}),control:t=>({...t,backgroundColor:"transparent",borderRadius:"12px",width:"100%",height:"46px",border:"1px solid rgba(239, 237, 232, 0.2)",boxShadow:"none","&:hover":{borderColor:"#E6533C"},"&:focus":{borderColor:"#E6533C"},"@media (min-width: 768px)":{height:"50px"}}),dropdownIndicator:t=>({...t,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:Ie}}),menu:t=>({...t,background:Xe,borderRadius:"12px"}),menuList:t=>({...t,"::-webkit-scrollbar":{width:"22px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:Ta,borderRadius:"12px",border:"7px solid",borderColor:Xe},maxHeight:"276px",borderRadius:"12px",overflowX:"hidden"}),indicatorSeparator:t=>({...t,display:"none"}),placeholder:t=>({...t,color:Ie}),singleValue:t=>({...t,color:Ie}),container:t=>({...t,display:"flex",alignItems:"center",border:"1px",height:"46px",width:"100%","&:hover":{borderColor:"#E6533C"},"&:focus":{borderColor:"#E6533C"},"@media (min-width: 768px)":{height:"50px"}}),input:t=>({...t,fontSize:"14px"})},Gt=[{value:"",label:"All"},{value:"recommended",label:"Recommended"},{value:"not recommended",label:"Not recommended"}],Ba=()=>{const t=at(),e=Ve(er),i=Kn({initialValues:{title:"",category:"",type:""},validate:s=>{s.title&&s.title.length<2},onSubmit:s=>o(s)}),n=(s,a)=>s?s.find(l=>l.value==a):"",o=s=>{t(zn(s)),t(Zt())},u=(s,a)=>{i.setFieldValue(s,a.value);const{initialValues:l,values:c}=i;if(a.value!==l[a.value]){const d={...c,[s]:a.value};o(d)}};return g.jsxs(Da,{onSubmit:i.handleSubmit,children:[g.jsx(Ma,{type:"text",name:"title",placeholder:"Search",value:i.values.title.trim(),onChange:i.handleChange}),i.values.title.trim()!==""&&g.jsx(Va,{type:"button",onClick:()=>{i.setFieldValue("title",""),o("title")},children:g.jsx(ka,{children:g.jsx("use",{href:`${ke}#icon-x`})})}),g.jsx(Ra,{type:"submit",children:g.jsx(La,{children:g.jsx("use",{href:`${ke}#icon-search`})})}),g.jsxs($a,{children:[g.jsx(Ut,{value:n(e,i.values.category),onChange:s=>u("category",s),options:e,placeholder:"Categories",styles:Wt}),g.jsx(Ut,{value:n(Gt,i.values.type),onChange:s=>u("type",s),options:Gt,styles:Wt})]}),g.jsx(Pa,{children:"Filters"})]})},ja=t=>t.$recommended?t.theme.colors.recommendedColor:t.theme.colors.notRecommendedColor,Ha=C.div`
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
`,_a=C.div`
  display: flex;
  margin-bottom: ${t=>t.theme.spacing(6)};
  align-items: baseline;
  justify-content: space-between;
`,Na=C.span`
  margin-right: auto;
  border-radius: ${t=>t.theme.radii.sd};
  padding: 7px 5px;
  /* width: 40px; */
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${t=>t.theme.colors.cardBgColor};
`,za=C.span`
  margin-right: ${t=>t.theme.spacing(2)};
  display: block;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${ja};
`,Yt=C.p`
  margin-right: ${t=>t.theme.spacing(4)};
  color: ${t=>t.theme.colors.whiteColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::first-letter {
    text-transform: uppercase;
  }
`,Ua=C.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  color: ${t=>t.theme.colors.hoverColor};
  background: transparent;
`,Wa=C.svg`
  margin-left: ${t=>t.theme.spacing(2)};
  width: 16px;
  height: 16px;
`,Ga=C.div`
  display: flex;
  column-gap: ${t=>t.theme.spacing(4)};
  height: 32px;
  overflow-y: hidden;
  margin-bottom: ${t=>t.theme.spacing(2)};

  @media screen and (max-width: 375px) {
    max-width: 303px;
  }
`,Ya=C.p`
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
`,qa=C.svg`
  width: 24px;
  height: 24px;
`,Ka=C.div`
  display: flex;
  height: 18px;
  overflow-y: hidden;
  overflow-x: hidden;

  @media screen and (max-width: 375px) {
    max-width: 303px;
  }
`,Ze=C.div`
  display: flex;
  justify-content: space-between;
  height: 18px;
  overflow-y: hidden;
  overflow-x: hidden;
`,Je=C.p`
  color: ${t=>t.theme.colors.captionColor};
`,qt=C.p`
  margin-right: ${t=>t.theme.spacing(4)};
  color: ${t=>t.theme.colors.whiteColor};

  &::first-letter {
    text-transform: uppercase;
  }
`,Xa=({product:{_id:t,title:e,calories:r,category:i,weight:n,recommended:o=!0},toggleModal:u})=>g.jsxs(Ha,{children:[g.jsxs(_a,{children:[g.jsx(Na,{children:"diet"}),g.jsx(za,{$recommended:o}),g.jsx(Yt,{children:g.jsx("b",{children:o?"Recommended":"Not recommended"})}),g.jsxs(Ua,{onClick:()=>u({_id:t,title:e,calories:r,category:i,weight:n}),children:["Add",g.jsx(Wa,{children:g.jsx("use",{href:`${ke}#icon-arrow-right`})})]})]}),g.jsxs(Ga,{children:[g.jsx(qa,{children:g.jsx("use",{href:`${ke}#icon-run-exercises`})}),g.jsx(Ya,{children:e})]}),g.jsxs(Ka,{children:[g.jsxs(Ze,{children:[g.jsx(Je,{children:"Calories:"})," ",g.jsx(qt,{children:r})]}),g.jsxs(Ze,{children:[g.jsx(Je,{children:"Category: "})," ",g.jsx(Yt,{children:i})]}),g.jsxs(Ze,{children:[g.jsx(Je,{children:"Weight:"})," ",g.jsx(qt,{children:n})]})]})]}),Za=C.ul`
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
`,Ja=C.li`
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
`,Qa=C(Jt)`
`,eu=C.div`
  padding: 48px 24px;

  
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,tu=C.div`
  position: relative;

   @media screen and (min-width: 374px) {
    width: 287px;
    height: 34px;
  };

  
  @media screen and (min-width: 768px) {
    width: 415px;
  }
`,nu=C.input`
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
`,ru=C.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`,iu=C.input`
  width: 100%;

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid ${t=>t.theme.colors.orangeColor};
  background: rgba(0, 0, 0, 0.5);
  color: ${t=>t.theme.colors.whiteColor};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 155px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,ou=C.span`
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
`,au=C.p`
  color: ${t=>t.theme.colors.captionColor};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,uu=C.span`
display: block;
color: ${t=>t.theme.colors.whiteColor};
  font-size: 12px;
  line-height: calc(18 / 12);
`,su=C.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,lu=C.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,cu=C.button`
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
`,du=C.button`
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
`,pu=({onToggle:t,exerciseInfo:e,setIsSuccessOpen:r,setDairyProduct:i})=>{console.log(e);const n=at(),{weight:o,calories:u,_id:s,title:a}=e,[l,c]=f.useState(o),d=Math.round(l*u/100),h=()=>{if(!d)return;const b={productId:s,amount:l,calories:d};console.log(b),n(Un(b)),i({calories:b.calories}),r(),t()};return g.jsx(Qa,{modalStyles:{maxWidth:"479px",width:"100%",height:"280px"},modalTabletStyles:{width:"479",height:"291px"},modalDesktopStyles:{width:"479px",height:"286px"},onClose:t,children:g.jsxs(eu,{children:[g.jsxs(tu,{children:[g.jsx(nu,{type:"text",value:a,readOnly:!0,disabled:!0}),g.jsxs(ru,{children:[g.jsx(iu,{type:"number",value:l,onChange:b=>{c(b.target.value)}}),g.jsx(ou,{children:"grams"})]})]}),g.jsxs(lu,{children:[g.jsx(au,{children:"Calories:"}),g.jsx(uu,{children:d})]}),g.jsxs(su,{children:[g.jsx(cu,{onClick:h,children:"Add to diary"}),g.jsx(du,{onClick:t,children:"Cancel"})]})]})})},fu="/project-Power-7/assets/avocado-1x-2290870f.png",hu=C(Jt)`

`,mu=C.button`
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
`,gu=C.img`
  width: 118px;
  height: 73px;
  margin-bottom: 27px;
  margin-top: 48px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 64px;
  }
`,vu=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,bu=C.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`,xu=C.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Eu=C.li`
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
`,Cu=C.span`
  color: #e6533c;
`,Su=C.div`
  margin-bottom: 16px;
`,yu=C(Wn)`
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
`,wu=({calories:t,onClose:e})=>g.jsx(hu,{modalStyles:{maxWidth:"430px",width:"100%",height:"384px"},modalTabletStyles:{width:"430px",height:"439px"},modalDesktopStyles:{width:"430px",height:"439px"},onClose:e,children:g.jsxs(vu,{children:[g.jsx(gu,{src:fu,alt:"Category Image"}),g.jsxs(xu,{children:[g.jsx(bu,{children:"Well done"}),g.jsx("ul",{children:g.jsxs(Eu,{children:["Calories:",g.jsx(Cu,{children:t||0})]})})]}),g.jsx(Su,{children:g.jsx(mu,{onClick:e,children:"Next product "})}),g.jsxs(yu,{to:"/diary",children:["To the diary",g.jsx("svg",{width:" 16px",height:"16px",children:g.jsx("use",{href:`${Gn}#arrow_gray`})})]})]})}),Ou=()=>{const t=Ve(Qt),e=Ve(Qn),[r,i]=f.useState(!1),[n,o]=f.useState(!1),[u,s]=f.useState(null),[a,l]=f.useState({calories:0}),c=d=>{i(h=>!h),s(d)};return g.jsxs("div",{children:[e&&g.jsx(Yn,{}),g.jsx(Za,{children:t.map(d=>g.jsx(Ja,{children:g.jsx(Xa,{product:d,toggleModal:c})},d._id))}),r&&g.jsx(pu,{onToggle:c,setIsSuccessOpen:()=>o(d=>!d),exerciseInfo:u,setDairyProduct:l}),n&&g.jsx(wu,{onClose:()=>o(d=>!d),calories:a.calories})]})},Fu=C.div`
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
`,Kt=C.p`
  color: ${t=>t.theme.colors.accentColor};
  @media screen and (min-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Xt=C.span`
  color: ${t=>t.theme.colors.orangeColor};
`,Iu=()=>g.jsxs(Fu,{children:[g.jsxs(Kt,{children:[g.jsx(Xt,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),g.jsx(Kt,{children:g.jsx(Xt,{children:"Try changing the search parameters."})})]}),Au=C.div`
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
`,Du=C.div`
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
`,Pu=C.h1`
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
`;C.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const Mu=C.div`
  position: relative;
  z-index: 0;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${Zn}) 1x, url(${Jn}) 2x);
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 100vh;
    background-size: contain;
  }

  @media screen and (min-width: 1440px) and (max-height: 800px) {
    height: 800px;
  }
`,Vu=({children:t})=>g.jsx(Mu,{children:t}),Bu=()=>{const t=at(),e=Ve(tr);return f.useEffect(()=>{t(qn()),t(Zt())},[t]),g.jsx(Vu,{children:g.jsxs(Au,{children:[g.jsxs(Du,{children:[g.jsx(Pu,{children:"Products"}),g.jsx(Ba,{})]}),e?g.jsx(Ou,{}):g.jsx(Iu,{})]})})};export{Bu as default};
