import{u as D,r as f,A as $n,R as gt,w as Bn,a as Kt,c as ge,j as w,B as jn,D as Xt,E as Hn}from"./index-9c9d3e63.js";import{C as _n}from"./CustomModal-10856d67.js";import{u as Nn}from"./formik.esm-eb69eb56.js";import{b as zn}from"./floating-ui.dom-9d61e2db.js";import{i as Re}from"./sprite-b1eaf365.js";D(_n)`
`;D.div`
  padding: 48px 24px;

  
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`;D.div`
  position: relative;

   @media screen and (min-width: 374px) {
    width: 287px;
    height: 34px;
  };

  
  @media screen and (min-width: 768px) {
    width: 415px;
  }
`;D.input`
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
`;D.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;D.input`
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
`;D.span`
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
`;D.p`
  color: ${t=>t.theme.colors.captionColor};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`;D.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`;D.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;D.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;D.button`
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
`;D.button`
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
`;const Un=t=>t.products.items,Wn=t=>t.products.containsProducts,Gn=t=>t.products.isLoading,Yn=t=>t.categories.categories,qn=t=>t.products.recommendedOptions;function le(t){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(t)}function Kn(t,e){if(le(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e||"default");if(le(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Zt(t){var e=Kn(t,"string");return le(e)=="symbol"?e:String(e)}function ve(t,e,r){return e=Zt(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function bt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,i)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?bt(Object(r),!0).forEach(function(i){ve(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):bt(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function Xn(t){if(Array.isArray(t))return t}function Zn(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,n,a,u,l=[],o=!0,s=!1;try{if(a=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;o=!1}else for(;!(o=(i=a.call(r)).done)&&(l.push(i.value),l.length!==e);o=!0);}catch(c){s=!0,n=c}finally{try{if(!o&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw n}}return l}}function Qe(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function Jt(t,e){if(t){if(typeof t=="string")return Qe(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Qe(t,e)}}function Jn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(t,e){return Xn(t)||Zn(t,e)||Jt(t,e)||Jn()}function Qn(t,e){if(t==null)return{};var r={},i=Object.keys(t),n,a;for(a=0;a<i.length;a++)n=i[a],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}function ie(t,e){if(t==null)return{};var r=Qn(t,e),i,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var er=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function tr(t){var e=t.defaultInputValue,r=e===void 0?"":e,i=t.defaultMenuIsOpen,n=i===void 0?!1:i,a=t.defaultValue,u=a===void 0?null:a,l=t.inputValue,o=t.menuIsOpen,s=t.onChange,c=t.onInputChange,d=t.onMenuClose,v=t.onMenuOpen,g=t.value,b=ie(t,er),m=f.useState(l!==void 0?l:r),p=re(m,2),h=p[0],y=p[1],F=f.useState(o!==void 0?o:n),I=re(F,2),P=I[0],A=I[1],x=f.useState(g!==void 0?g:u),O=re(x,2),R=O[0],H=O[1],z=f.useCallback(function(Y,ae){typeof s=="function"&&s(Y,ae),H(Y)},[s]),_=f.useCallback(function(Y,ae){var oe;typeof c=="function"&&(oe=c(Y,ae)),y(oe!==void 0?oe:Y)},[c]),Q=f.useCallback(function(){typeof v=="function"&&v(),A(!0)},[v]),ee=f.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),B=l!==void 0?l:h,T=o!==void 0?o:P,K=g!==void 0?g:R;return C(C({},b),{},{inputValue:B,menuIsOpen:T,onChange:z,onInputChange:_,onMenuClose:ee,onMenuOpen:Q,value:K})}function S(){return S=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},S.apply(this,arguments)}function nr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xt(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Zt(i.key),i)}}function rr(t,e,r){return e&&xt(t.prototype,e),r&&xt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function et(t,e){return et=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},et(t,e)}function ir(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&et(t,e)}function ke(t){return ke=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ke(t)}function Qt(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Qt=function(){return!!t})()}function ar(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function or(t,e){if(e&&(le(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ar(t)}function ur(t){var e=Qt();return function(){var i=ke(t),n;if(e){var a=ke(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return or(this,n)}}function sr(t){if(Array.isArray(t))return Qe(t)}function lr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function cr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ot(t){return sr(t)||lr(t)||Jt(t)||cr()}function dr(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function pr(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var fr=function(){function t(r){var i=this;this._insertTag=function(n){var a;i.tags.length===0?i.insertionPoint?a=i.insertionPoint.nextSibling:i.prepend?a=i.container.firstChild:a=i.before:a=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(n,a),i.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(pr(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=dr(n);try{a.insertRule(i,a.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),N="-ms-",Le="-moz-",M="-webkit-",en="comm",ut="rule",st="decl",hr="@import",tn="@keyframes",mr="@layer",vr=Math.abs,je=String.fromCharCode,gr=Object.assign;function br(t,e){return j(t,0)^45?(((e<<2^j(t,0))<<2^j(t,1))<<2^j(t,2))<<2^j(t,3):0}function nn(t){return t.trim()}function xr(t,e){return(t=e.exec(t))?t[0]:t}function V(t,e,r){return t.replace(e,r)}function tt(t,e){return t.indexOf(e)}function j(t,e){return t.charCodeAt(e)|0}function be(t,e,r){return t.slice(e,r)}function X(t){return t.length}function lt(t){return t.length}function we(t,e){return e.push(t),t}function Er(t,e){return t.map(e).join("")}var He=1,pe=1,rn=0,U=0,L=0,fe="";function _e(t,e,r,i,n,a,u){return{value:t,root:e,parent:r,type:i,props:n,children:a,line:He,column:pe,length:u,return:""}}function he(t,e){return gr(_e("",null,null,"",null,null,0),t,{length:-t.length},e)}function Cr(){return L}function Sr(){return L=U>0?j(fe,--U):0,pe--,L===10&&(pe=1,He--),L}function G(){return L=U<rn?j(fe,U++):0,pe++,L===10&&(pe=1,He++),L}function J(){return j(fe,U)}function Ie(){return U}function Ce(t,e){return be(fe,t,e)}function xe(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function an(t){return He=pe=1,rn=X(fe=t),U=0,[]}function on(t){return fe="",t}function Pe(t){return nn(Ce(U-1,nt(t===91?t+2:t===40?t+1:t)))}function yr(t){for(;(L=J())&&L<33;)G();return xe(t)>2||xe(L)>3?"":" "}function wr(t,e){for(;--e&&G()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return Ce(t,Ie()+(e<6&&J()==32&&G()==32))}function nt(t){for(;G();)switch(L){case t:return U;case 34:case 39:t!==34&&t!==39&&nt(L);break;case 40:t===41&&nt(t);break;case 92:G();break}return U}function Fr(t,e){for(;G()&&t+L!==47+10;)if(t+L===42+42&&J()===47)break;return"/*"+Ce(e,U-1)+"*"+je(t===47?t:G())}function Or(t){for(;!xe(J());)G();return Ce(t,U)}function Dr(t){return on(Me("",null,null,null,[""],t=an(t),0,[0],t))}function Me(t,e,r,i,n,a,u,l,o){for(var s=0,c=0,d=u,v=0,g=0,b=0,m=1,p=1,h=1,y=0,F="",I=n,P=a,A=i,x=F;p;)switch(b=y,y=G()){case 40:if(b!=108&&j(x,d-1)==58){tt(x+=V(Pe(y),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:x+=Pe(y);break;case 9:case 10:case 13:case 32:x+=yr(b);break;case 92:x+=wr(Ie()-1,7);continue;case 47:switch(J()){case 42:case 47:we(Ar(Fr(G(),Ie()),e,r),o);break;default:x+="/"}break;case 123*m:l[s++]=X(x)*h;case 125*m:case 59:case 0:switch(y){case 0:case 125:p=0;case 59+c:h==-1&&(x=V(x,/\f/g,"")),g>0&&X(x)-d&&we(g>32?Ct(x+";",i,r,d-1):Ct(V(x," ","")+";",i,r,d-2),o);break;case 59:x+=";";default:if(we(A=Et(x,e,r,s,c,n,l,F,I=[],P=[],d),a),y===123)if(c===0)Me(x,e,A,A,I,a,d,l,P);else switch(v===99&&j(x,3)===110?100:v){case 100:case 108:case 109:case 115:Me(t,A,A,i&&we(Et(t,A,A,0,0,n,l,F,n,I=[],d),P),n,P,d,l,i?I:P);break;default:Me(x,A,A,A,[""],P,0,l,P)}}s=c=g=0,m=h=1,F=x="",d=u;break;case 58:d=1+X(x),g=b;default:if(m<1){if(y==123)--m;else if(y==125&&m++==0&&Sr()==125)continue}switch(x+=je(y),y*m){case 38:h=c>0?1:(x+="\f",-1);break;case 44:l[s++]=(X(x)-1)*h,h=1;break;case 64:J()===45&&(x+=Pe(G())),v=J(),c=d=X(F=x+=Or(Ie())),y++;break;case 45:b===45&&X(x)==2&&(m=0)}}return a}function Et(t,e,r,i,n,a,u,l,o,s,c){for(var d=n-1,v=n===0?a:[""],g=lt(v),b=0,m=0,p=0;b<i;++b)for(var h=0,y=be(t,d+1,d=vr(m=u[b])),F=t;h<g;++h)(F=nn(m>0?v[h]+" "+y:V(y,/&\f/g,v[h])))&&(o[p++]=F);return _e(t,e,r,n===0?ut:l,o,s,c)}function Ar(t,e,r){return _e(t,e,r,en,je(Cr()),be(t,2,-2),0)}function Ct(t,e,r,i){return _e(t,e,r,st,be(t,0,i),be(t,i+1,-1),i)}function de(t,e){for(var r="",i=lt(t),n=0;n<i;n++)r+=e(t[n],n,t,e)||"";return r}function Ir(t,e,r,i){switch(t.type){case mr:if(t.children.length)break;case hr:case st:return t.return=t.return||t.value;case en:return"";case tn:return t.return=t.value+"{"+de(t.children,i)+"}";case ut:t.value=t.props.join(",")}return X(r=de(t.children,i))?t.return=t.value+"{"+r+"}":""}function Pr(t){var e=lt(t);return function(r,i,n,a){for(var u="",l=0;l<e;l++)u+=t[l](r,i,n,a)||"";return u}}function Mr(t){return function(e){e.root||(e=e.return)&&t(e)}}var Vr=function(e,r,i){for(var n=0,a=0;n=a,a=J(),n===38&&a===12&&(r[i]=1),!xe(a);)G();return Ce(e,U)},Rr=function(e,r){var i=-1,n=44;do switch(xe(n)){case 0:n===38&&J()===12&&(r[i]=1),e[i]+=Vr(U-1,r,i);break;case 2:e[i]+=Pe(n);break;case 4:if(n===44){e[++i]=J()===58?"&\f":"",r[i]=e[i].length;break}default:e[i]+=je(n)}while(n=G());return e},kr=function(e,r){return on(Rr(an(e),r))},St=new WeakMap,Lr=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,i=e.parent,n=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!St.get(i))&&!n){St.set(e,!0);for(var a=[],u=kr(r,a),l=i.props,o=0,s=0;o<u.length;o++)for(var c=0;c<l.length;c++,s++)e.props[s]=a[o]?u[o].replace(/&\f/g,l[c]):l[c]+" "+u[o]}}},Tr=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function un(t,e){switch(br(t,e)){case 5103:return M+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return M+t+Le+t+N+t+t;case 6828:case 4268:return M+t+N+t+t;case 6165:return M+t+N+"flex-"+t+t;case 5187:return M+t+V(t,/(\w+).+(:[^]+)/,M+"box-$1$2"+N+"flex-$1$2")+t;case 5443:return M+t+N+"flex-item-"+V(t,/flex-|-self/,"")+t;case 4675:return M+t+N+"flex-line-pack"+V(t,/align-content|flex-|-self/,"")+t;case 5548:return M+t+N+V(t,"shrink","negative")+t;case 5292:return M+t+N+V(t,"basis","preferred-size")+t;case 6060:return M+"box-"+V(t,"-grow","")+M+t+N+V(t,"grow","positive")+t;case 4554:return M+V(t,/([^-])(transform)/g,"$1"+M+"$2")+t;case 6187:return V(V(V(t,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),t,"")+t;case 5495:case 3959:return V(t,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return V(V(t,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+t+t;case 4095:case 3583:case 4068:case 2532:return V(t,/(.+)-inline(.+)/,M+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(X(t)-1-e>6)switch(j(t,e+1)){case 109:if(j(t,e+4)!==45)break;case 102:return V(t,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Le+(j(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~tt(t,"stretch")?un(V(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(j(t,e+1)!==115)break;case 6444:switch(j(t,X(t)-3-(~tt(t,"!important")&&10))){case 107:return V(t,":",":"+M)+t;case 101:return V(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(j(t,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+N+"$2box$3")+t}break;case 5936:switch(j(t,e+11)){case 114:return M+t+N+V(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return M+t+N+V(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return M+t+N+V(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return M+t+N+t+t}return t}var $r=function(e,r,i,n){if(e.length>-1&&!e.return)switch(e.type){case st:e.return=un(e.value,e.length);break;case tn:return de([he(e,{value:V(e.value,"@","@"+M)})],n);case ut:if(e.length)return Er(e.props,function(a){switch(xr(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return de([he(e,{props:[V(a,/:(read-\w+)/,":"+Le+"$1")]})],n);case"::placeholder":return de([he(e,{props:[V(a,/:(plac\w+)/,":"+M+"input-$1")]}),he(e,{props:[V(a,/:(plac\w+)/,":"+Le+"$1")]}),he(e,{props:[V(a,/:(plac\w+)/,N+"input-$1")]})],n)}return""})}},Br=[$r],jr=function(e){var r=e.key;if(r==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(m){var p=m.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var n=e.stylisPlugins||Br,a={},u,l=[];u=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(m){for(var p=m.getAttribute("data-emotion").split(" "),h=1;h<p.length;h++)a[p[h]]=!0;l.push(m)});var o,s=[Lr,Tr];{var c,d=[Ir,Mr(function(m){c.insert(m)})],v=Pr(s.concat(n,d)),g=function(p){return de(Dr(p),v)};o=function(p,h,y,F){c=y,g(p?p+"{"+h.styles+"}":h.styles),F&&(b.inserted[h.name]=!0)}}var b={key:r,sheet:new fr({key:r,container:u,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:o};return b.sheet.hydrate(l),b},Hr=!0;function _r(t,e,r){var i="";return r.split(" ").forEach(function(n){t[n]!==void 0?e.push(t[n]+";"):i+=n+" "}),i}var sn=function(e,r,i){var n=e.key+"-"+r.name;(i===!1||Hr===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},Nr=function(e,r,i){sn(e,r,i);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var a=r;do e.insert(r===a?"."+n:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function zr(t){for(var e=0,r,i=0,n=t.length;n>=4;++i,n-=4)r=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Ur={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wr=/[A-Z]|^ms/g,Gr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ln=function(e){return e.charCodeAt(1)===45},yt=function(e){return e!=null&&typeof e!="boolean"},ze=$n(function(t){return ln(t)?t:t.replace(Wr,"-$&").toLowerCase()}),wt=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Gr,function(i,n,a){return Z={name:n,styles:a,next:Z},n})}return Ur[e]!==1&&!ln(e)&&typeof r=="number"&&r!==0?r+"px":r};function Ee(t,e,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return Z={name:r.name,styles:r.styles,next:Z},r.name;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)Z={name:i.name,styles:i.styles,next:Z},i=i.next;var n=r.styles+";";return n}return Yr(t,e,r)}case"function":{if(t!==void 0){var a=Z,u=r(t);return Z=a,Ee(t,e,u)}break}}if(e==null)return r;var l=e[r];return l!==void 0?l:r}function Yr(t,e,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=Ee(t,e,r[n])+";";else for(var a in r){var u=r[a];if(typeof u!="object")e!=null&&e[u]!==void 0?i+=a+"{"+e[u]+"}":yt(u)&&(i+=ze(a)+":"+wt(a,u)+";");else if(Array.isArray(u)&&typeof u[0]=="string"&&(e==null||e[u[0]]===void 0))for(var l=0;l<u.length;l++)yt(u[l])&&(i+=ze(a)+":"+wt(a,u[l])+";");else{var o=Ee(t,e,u);switch(a){case"animation":case"animationName":{i+=ze(a)+":"+o+";";break}default:i+=a+"{"+o+"}"}}}return i}var Ft=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Z,cn=function(e,r,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";Z=void 0;var u=e[0];u==null||u.raw===void 0?(n=!1,a+=Ee(i,r,u)):a+=u[0];for(var l=1;l<e.length;l++)a+=Ee(i,r,e[l]),n&&(a+=u[l]);Ft.lastIndex=0;for(var o="",s;(s=Ft.exec(a))!==null;)o+="-"+s[1];var c=zr(a)+o;return{name:c,styles:a,next:Z}},qr=function(e){return e()},Kr=gt["useInsertionEffect"]?gt["useInsertionEffect"]:!1,Xr=Kr||qr,ct={}.hasOwnProperty,dn=f.createContext(typeof HTMLElement<"u"?jr({key:"css"}):null);dn.Provider;var Zr=function(e){return f.forwardRef(function(r,i){var n=f.useContext(dn);return e(r,n,i)})},Jr=f.createContext({}),rt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Qr=function(e,r){var i={};for(var n in r)ct.call(r,n)&&(i[n]=r[n]);return i[rt]=e,i},ei=function(e){var r=e.cache,i=e.serialized,n=e.isStringTag;return sn(r,i,n),Xr(function(){return Nr(r,i,n)}),null},ti=Zr(function(t,e,r){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var n=t[rt],a=[i],u="";typeof t.className=="string"?u=_r(e.registered,a,t.className):t.className!=null&&(u=t.className+" ");var l=cn(a,void 0,f.useContext(Jr));u+=e.key+"-"+l.name;var o={};for(var s in t)ct.call(t,s)&&s!=="css"&&s!==rt&&(o[s]=t[s]);return o.ref=r,o.className=u,f.createElement(f.Fragment,null,f.createElement(ei,{cache:e,serialized:l,isStringTag:typeof n=="string"}),f.createElement(n,o))}),ni=ti,E=function(e,r){var i=arguments;if(r==null||!ct.call(r,"css"))return f.createElement.apply(void 0,i);var n=i.length,a=new Array(n);a[0]=ni,a[1]=Qr(e,r);for(var u=2;u<n;u++)a[u]=i[u];return f.createElement.apply(null,a)};function dt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return cn(e)}var ri=function(){var e=dt.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function ii(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var it=f.useLayoutEffect,ai=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Te=function(){};function oi(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function ui(t,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];var a=[].concat(i);if(e&&t)for(var u in e)e.hasOwnProperty(u)&&e[u]&&a.push("".concat(oi(t,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Ot=function(e){return vi(e)?e.filter(Boolean):le(e)==="object"&&e!==null?[e]:[]},pn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=ie(e,ai);return C({},r)},k=function(e,r,i){var n=e.cx,a=e.getStyles,u=e.getClassNames,l=e.className;return{css:a(r,e),className:n(i??{},u(r,e),l)}};function Ne(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function si(t){return Ne(t)?window.innerHeight:t.clientHeight}function fn(t){return Ne(t)?window.pageYOffset:t.scrollTop}function $e(t,e){if(Ne(t)){window.scrollTo(0,e);return}t.scrollTop=e}function li(t){var e=getComputedStyle(t),r=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(r&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function ci(t,e,r,i){return r*((t=t/i-1)*t*t+1)+e}function Fe(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Te,n=fn(t),a=e-n,u=10,l=0;function o(){l+=u;var s=ci(l,n,a,r);$e(t,s),l<r?window.requestAnimationFrame(o):i(t)}o()}function Dt(t,e){var r=t.getBoundingClientRect(),i=e.getBoundingClientRect(),n=e.offsetHeight/3;i.bottom+n>r.bottom?$e(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):i.top-n<r.top&&$e(t,Math.max(e.offsetTop-n,0))}function di(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function At(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function pi(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var hn=!1,fi={get passive(){return hn=!0}},Oe=typeof window<"u"?window:{};Oe.addEventListener&&Oe.removeEventListener&&(Oe.addEventListener("p",Te,fi),Oe.removeEventListener("p",Te,!1));var hi=hn;function mi(t){return t!=null}function vi(t){return Array.isArray(t)}function De(t,e,r){return t?e:r}var gi=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];var a=Object.entries(e).filter(function(u){var l=re(u,1),o=l[0];return!i.includes(o)});return a.reduce(function(u,l){var o=re(l,2),s=o[0],c=o[1];return u[s]=c,u},{})},bi=["children","innerProps"],xi=["children","innerProps"];function Ei(t){var e=t.maxHeight,r=t.menuEl,i=t.minHeight,n=t.placement,a=t.shouldScroll,u=t.isFixedPosition,l=t.controlHeight,o=li(r),s={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return s;var c=o.getBoundingClientRect(),d=c.height,v=r.getBoundingClientRect(),g=v.bottom,b=v.height,m=v.top,p=r.offsetParent.getBoundingClientRect(),h=p.top,y=u?window.innerHeight:si(o),F=fn(o),I=parseInt(getComputedStyle(r).marginBottom,10),P=parseInt(getComputedStyle(r).marginTop,10),A=h-P,x=y-m,O=A+F,R=d-F-m,H=g-y+F+I,z=F+m-P,_=160;switch(n){case"auto":case"bottom":if(x>=b)return{placement:"bottom",maxHeight:e};if(R>=b&&!u)return a&&Fe(o,H,_),{placement:"bottom",maxHeight:e};if(!u&&R>=i||u&&x>=i){a&&Fe(o,H,_);var Q=u?x-I:R-I;return{placement:"bottom",maxHeight:Q}}if(n==="auto"||u){var ee=e,B=u?A:O;return B>=i&&(ee=Math.min(B-I-l,e)),{placement:"top",maxHeight:ee}}if(n==="bottom")return a&&$e(o,H),{placement:"bottom",maxHeight:e};break;case"top":if(A>=b)return{placement:"top",maxHeight:e};if(O>=b&&!u)return a&&Fe(o,z,_),{placement:"top",maxHeight:e};if(!u&&O>=i||u&&A>=i){var T=e;return(!u&&O>=i||u&&A>=i)&&(T=u?A-P:O-P),a&&Fe(o,z,_),{placement:"top",maxHeight:T}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return s}function Ci(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var mn=function(e){return e==="auto"?"bottom":e},Si=function(e,r){var i,n=e.placement,a=e.theme,u=a.borderRadius,l=a.spacing,o=a.colors;return C((i={label:"menu"},ve(i,Ci(n),"100%"),ve(i,"position","absolute"),ve(i,"width","100%"),ve(i,"zIndex",1),i),r?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},vn=f.createContext(null),yi=function(e){var r=e.children,i=e.minMenuHeight,n=e.maxMenuHeight,a=e.menuPlacement,u=e.menuPosition,l=e.menuShouldScrollIntoView,o=e.theme,s=f.useContext(vn)||{},c=s.setPortalPlacement,d=f.useRef(null),v=f.useState(n),g=re(v,2),b=g[0],m=g[1],p=f.useState(null),h=re(p,2),y=h[0],F=h[1],I=o.spacing.controlHeight;return it(function(){var P=d.current;if(P){var A=u==="fixed",x=l&&!A,O=Ei({maxHeight:n,menuEl:P,minHeight:i,placement:a,shouldScroll:x,isFixedPosition:A,controlHeight:I});m(O.maxHeight),F(O.placement),c==null||c(O.placement)}},[n,a,u,l,i,c,I]),r({ref:d,placerProps:C(C({},e),{},{placement:y||mn(a),maxHeight:b})})},wi=function(e){var r=e.children,i=e.innerRef,n=e.innerProps;return E("div",S({},k(e,"menu",{menu:!0}),{ref:i},n),r)},Fi=wi,Oi=function(e,r){var i=e.maxHeight,n=e.theme.spacing.baseUnit;return C({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:n,paddingTop:n})},Di=function(e){var r=e.children,i=e.innerProps,n=e.innerRef,a=e.isMulti;return E("div",S({},k(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:n},i),r)},gn=function(e,r){var i=e.theme,n=i.spacing.baseUnit,a=i.colors;return C({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},Ai=gn,Ii=gn,Pi=function(e){var r=e.children,i=r===void 0?"No options":r,n=e.innerProps,a=ie(e,bi);return E("div",S({},k(C(C({},a),{},{children:i,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),i)},Mi=function(e){var r=e.children,i=r===void 0?"Loading...":r,n=e.innerProps,a=ie(e,xi);return E("div",S({},k(C(C({},a),{},{children:i,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),i)},Vi=function(e){var r=e.rect,i=e.offset,n=e.position;return{left:r.left,position:n,top:i,width:r.width,zIndex:1}},Ri=function(e){var r=e.appendTo,i=e.children,n=e.controlElement,a=e.innerProps,u=e.menuPlacement,l=e.menuPosition,o=f.useRef(null),s=f.useRef(null),c=f.useState(mn(u)),d=re(c,2),v=d[0],g=d[1],b=f.useMemo(function(){return{setPortalPlacement:g}},[]),m=f.useState(null),p=re(m,2),h=p[0],y=p[1],F=f.useCallback(function(){if(n){var x=di(n),O=l==="fixed"?0:window.pageYOffset,R=x[v]+O;(R!==(h==null?void 0:h.offset)||x.left!==(h==null?void 0:h.rect.left)||x.width!==(h==null?void 0:h.rect.width))&&y({offset:R,rect:x})}},[n,l,v,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);it(function(){F()},[F]);var I=f.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),n&&o.current&&(s.current=zn(n,o.current,F,{elementResize:"ResizeObserver"in window}))},[n,F]);it(function(){I()},[I]);var P=f.useCallback(function(x){o.current=x,I()},[I]);if(!r&&l!=="fixed"||!h)return null;var A=E("div",S({ref:P},k(C(C({},e),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),a),i);return E(vn.Provider,{value:b},r?Bn.createPortal(A,r):A)},ki=function(e){var r=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},Li=function(e){var r=e.children,i=e.innerProps,n=e.isDisabled,a=e.isRtl;return E("div",S({},k(e,"container",{"--is-disabled":n,"--is-rtl":a}),i),r)},Ti=function(e,r){var i=e.theme.spacing,n=e.isMulti,a=e.hasValue,u=e.selectProps.controlShouldRenderValue;return C({alignItems:"center",display:n&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},$i=function(e){var r=e.children,i=e.innerProps,n=e.isMulti,a=e.hasValue;return E("div",S({},k(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":a}),i),r)},Bi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},ji=function(e){var r=e.children,i=e.innerProps;return E("div",S({},k(e,"indicatorsContainer",{indicators:!0}),i),r)},It,Hi=["size"],_i=["innerProps","isRtl","size"],Ni={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},bn=function(e){var r=e.size,i=ie(e,Hi);return E("svg",S({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ni},i))},pt=function(e){return E(bn,S({size:20},e),E("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},xn=function(e){return E(bn,S({size:20},e),E("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},En=function(e,r){var i=e.isFocused,n=e.theme,a=n.spacing.baseUnit,u=n.colors;return C({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?u.neutral60:u.neutral20,padding:a*2,":hover":{color:i?u.neutral80:u.neutral40}})},zi=En,Ui=function(e){var r=e.children,i=e.innerProps;return E("div",S({},k(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||E(xn,null))},Wi=En,Gi=function(e){var r=e.children,i=e.innerProps;return E("div",S({},k(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||E(pt,null))},Yi=function(e,r){var i=e.isDisabled,n=e.theme,a=n.spacing.baseUnit,u=n.colors;return C({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},qi=function(e){var r=e.innerProps;return E("span",S({},r,k(e,"indicatorSeparator",{"indicator-separator":!0})))},Ki=ri(It||(It=ii([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Xi=function(e,r){var i=e.isFocused,n=e.size,a=e.theme,u=a.colors,l=a.spacing.baseUnit;return C({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?u.neutral60:u.neutral20,padding:l*2})},Ue=function(e){var r=e.delay,i=e.offset;return E("span",{css:dt({animation:"".concat(Ki," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Zi=function(e){var r=e.innerProps,i=e.isRtl,n=e.size,a=n===void 0?4:n,u=ie(e,_i);return E("div",S({},k(C(C({},u),{},{innerProps:r,isRtl:i,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),E(Ue,{delay:0,offset:i}),E(Ue,{delay:160,offset:!0}),E(Ue,{delay:320,offset:!i}))},Ji=function(e,r){var i=e.isDisabled,n=e.isFocused,a=e.theme,u=a.colors,l=a.borderRadius,o=a.spacing;return C({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?u.neutral5:u.neutral0,borderColor:i?u.neutral10:n?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:n?u.primary:u.neutral30}})},Qi=function(e){var r=e.children,i=e.isDisabled,n=e.isFocused,a=e.innerRef,u=e.innerProps,l=e.menuIsOpen;return E("div",S({ref:a},k(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":n,"control--menu-is-open":l}),u,{"aria-disabled":i||void 0}),r)},ea=Qi,ta=["data"],na=function(e,r){var i=e.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},ra=function(e){var r=e.children,i=e.cx,n=e.getStyles,a=e.getClassNames,u=e.Heading,l=e.headingProps,o=e.innerProps,s=e.label,c=e.theme,d=e.selectProps;return E("div",S({},k(e,"group",{group:!0}),o),E(u,S({},l,{selectProps:d,theme:c,getStyles:n,getClassNames:a,cx:i}),s),E("div",null,r))},ia=function(e,r){var i=e.theme,n=i.colors,a=i.spacing;return C({label:"group",cursor:"default",display:"block"},r?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},aa=function(e){var r=pn(e);r.data;var i=ie(r,ta);return E("div",S({},k(e,"groupHeading",{"group-heading":!0}),i))},oa=ra,ua=["innerRef","isDisabled","isHidden","inputClassName"],sa=function(e,r){var i=e.isDisabled,n=e.value,a=e.theme,u=a.spacing,l=a.colors;return C(C({visibility:i?"hidden":"visible",transform:n?"translateZ(0)":""},la),r?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Cn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},la={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":C({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Cn)},ca=function(e){return C({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Cn)},da=function(e){var r=e.cx,i=e.value,n=pn(e),a=n.innerRef,u=n.isDisabled,l=n.isHidden,o=n.inputClassName,s=ie(n,ua);return E("div",S({},k(e,"input",{"input-container":!0}),{"data-value":i||""}),E("input",S({className:r({input:!0},o),ref:a,style:ca(l),disabled:u},s)))},pa=da,fa=function(e,r){var i=e.theme,n=i.spacing,a=i.borderRadius,u=i.colors;return C({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:n.baseUnit/2})},ha=function(e,r){var i=e.theme,n=i.borderRadius,a=i.colors,u=e.cropWithEllipsis;return C({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:n/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},ma=function(e,r){var i=e.theme,n=i.spacing,a=i.borderRadius,u=i.colors,l=e.isFocused;return C({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Sn=function(e){var r=e.children,i=e.innerProps;return E("div",i,r)},va=Sn,ga=Sn;function ba(t){var e=t.children,r=t.innerProps;return E("div",S({role:"button"},r),e||E(pt,{size:14}))}var xa=function(e){var r=e.children,i=e.components,n=e.data,a=e.innerProps,u=e.isDisabled,l=e.removeProps,o=e.selectProps,s=i.Container,c=i.Label,d=i.Remove;return E(s,{data:n,innerProps:C(C({},k(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},E(c,{data:n,innerProps:C({},k(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},r),E(d,{data:n,innerProps:C(C({},k(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},l),selectProps:o}))},Ea=xa,Ca=function(e,r){var i=e.isDisabled,n=e.isFocused,a=e.isSelected,u=e.theme,l=u.spacing,o=u.colors;return C({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?o.primary:n?o.primary25:"transparent",color:i?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:a?o.primary:o.primary50}})},Sa=function(e){var r=e.children,i=e.isDisabled,n=e.isFocused,a=e.isSelected,u=e.innerRef,l=e.innerProps;return E("div",S({},k(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":n,"option--is-selected":a}),{ref:u,"aria-disabled":i},l),r)},ya=Sa,wa=function(e,r){var i=e.theme,n=i.spacing,a=i.colors;return C({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},Fa=function(e){var r=e.children,i=e.innerProps;return E("div",S({},k(e,"placeholder",{placeholder:!0}),i),r)},Oa=Fa,Da=function(e,r){var i=e.isDisabled,n=e.theme,a=n.spacing,u=n.colors;return C({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Aa=function(e){var r=e.children,i=e.isDisabled,n=e.innerProps;return E("div",S({},k(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),n),r)},Ia=Aa,Pa={ClearIndicator:Gi,Control:ea,DropdownIndicator:Ui,DownChevron:xn,CrossIcon:pt,Group:oa,GroupHeading:aa,IndicatorsContainer:ji,IndicatorSeparator:qi,Input:pa,LoadingIndicator:Zi,Menu:Fi,MenuList:Di,MenuPortal:Ri,LoadingMessage:Mi,NoOptionsMessage:Pi,MultiValue:Ea,MultiValueContainer:va,MultiValueLabel:ga,MultiValueRemove:ba,Option:ya,Placeholder:Oa,SelectContainer:Li,SingleValue:Ia,ValueContainer:$i},Ma=function(e){return C(C({},Pa),e.components)},Pt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Va(t,e){return!!(t===e||Pt(t)&&Pt(e))}function Ra(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!Va(t[r],e[r]))return!1;return!0}function ka(t,e){e===void 0&&(e=Ra);var r=null;function i(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(r&&r.lastThis===this&&e(n,r.lastArgs))return r.lastResult;var u=t.apply(this,n);return r={lastResult:u,lastArgs:n,lastThis:this},u}return i.clear=function(){r=null},i}var La={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Ta=function(e){return E("span",S({css:La},e))},Mt=Ta,$a={guidance:function(e){var r=e.isSearchable,i=e.isMulti,n=e.tabSelectsValue,a=e.context,u=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,i=e.label,n=i===void 0?"":i,a=e.labels,u=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var r=e.context,i=e.focused,n=e.options,a=e.label,u=a===void 0?"":a,l=e.selectValue,o=e.isDisabled,s=e.isSelected,c=e.isAppleDevice,d=function(m,p){return m&&m.length?"".concat(m.indexOf(p)+1," of ").concat(m.length):""};if(r==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,i),".");if(r==="menu"&&c){var v=o?" disabled":"",g="".concat(s?" selected":"").concat(v);return"".concat(u).concat(g,", ").concat(d(n,i),".")}return""},onFilter:function(e){var r=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},Ba=function(e){var r=e.ariaSelection,i=e.focusedOption,n=e.focusedValue,a=e.focusableOptions,u=e.isFocused,l=e.selectValue,o=e.selectProps,s=e.id,c=e.isAppleDevice,d=o.ariaLiveMessages,v=o.getOptionLabel,g=o.inputValue,b=o.isMulti,m=o.isOptionDisabled,p=o.isSearchable,h=o.menuIsOpen,y=o.options,F=o.screenReaderStatus,I=o.tabSelectsValue,P=o.isLoading,A=o["aria-label"],x=o["aria-live"],O=f.useMemo(function(){return C(C({},$a),d||{})},[d]),R=f.useMemo(function(){var B="";if(r&&O.onChange){var T=r.option,K=r.options,Y=r.removedValue,ae=r.removedValues,oe=r.value,Se=function(ne){return Array.isArray(ne)?null:ne},$=Y||T||Se(oe),W=$?v($):"",te=K||ae||void 0,ue=te?te.map(v):[],q=C({isDisabled:$&&m($,l),label:W,labels:ue},r);B=O.onChange(q)}return B},[r,O,m,l,v]),H=f.useMemo(function(){var B="",T=i||n,K=!!(i&&l&&l.includes(i));if(T&&O.onFocus){var Y={focused:T,label:v(T),isDisabled:m(T,l),isSelected:K,options:a,context:T===i?"menu":"value",selectValue:l,isAppleDevice:c};B=O.onFocus(Y)}return B},[i,n,v,m,O,a,l,c]),z=f.useMemo(function(){var B="";if(h&&y.length&&!P&&O.onFilter){var T=F({count:a.length});B=O.onFilter({inputValue:g,resultsMessage:T})}return B},[a,g,h,O,y,F,P]),_=(r==null?void 0:r.action)==="initial-input-focus",Q=f.useMemo(function(){var B="";if(O.guidance){var T=n?"value":h?"menu":"input";B=O.guidance({"aria-label":A,context:T,isDisabled:i&&m(i,l),isMulti:b,isSearchable:p,tabSelectsValue:I,isInitialFocus:_})}return B},[A,i,n,b,m,p,h,O,l,I,_]),ee=E(f.Fragment,null,E("span",{id:"aria-selection"},R),E("span",{id:"aria-focused"},H),E("span",{id:"aria-results"},z),E("span",{id:"aria-guidance"},Q));return E(f.Fragment,null,E(Mt,{id:s},_&&ee),E(Mt,{"aria-live":x,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!_&&ee))},ja=Ba,at=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Ha=new RegExp("["+at.map(function(t){return t.letters}).join("")+"]","g"),yn={};for(var We=0;We<at.length;We++)for(var Ge=at[We],Ye=0;Ye<Ge.letters.length;Ye++)yn[Ge.letters[Ye]]=Ge.base;var wn=function(e){return e.replace(Ha,function(r){return yn[r]})},_a=ka(wn),Vt=function(e){return e.replace(/^\s+|\s+$/g,"")},Na=function(e){return"".concat(e.label," ").concat(e.value)},za=function(e){return function(r,i){if(r.data.__isNew__)return!0;var n=C({ignoreCase:!0,ignoreAccents:!0,stringify:Na,trim:!0,matchFrom:"any"},e),a=n.ignoreCase,u=n.ignoreAccents,l=n.stringify,o=n.trim,s=n.matchFrom,c=o?Vt(i):i,d=o?Vt(l(r)):l(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=_a(c),d=wn(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Ua=["innerRef"];function Wa(t){var e=t.innerRef,r=ie(t,Ua),i=gi(r,"onExited","in","enter","exit","appear");return E("input",S({ref:e},i,{css:dt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Ga=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Ya(t){var e=t.isEnabled,r=t.onBottomArrive,i=t.onBottomLeave,n=t.onTopArrive,a=t.onTopLeave,u=f.useRef(!1),l=f.useRef(!1),o=f.useRef(0),s=f.useRef(null),c=f.useCallback(function(p,h){if(s.current!==null){var y=s.current,F=y.scrollTop,I=y.scrollHeight,P=y.clientHeight,A=s.current,x=h>0,O=I-P-F,R=!1;O>h&&u.current&&(i&&i(p),u.current=!1),x&&l.current&&(a&&a(p),l.current=!1),x&&h>O?(r&&!u.current&&r(p),A.scrollTop=I,R=!0,u.current=!0):!x&&-h>F&&(n&&!l.current&&n(p),A.scrollTop=0,R=!0,l.current=!0),R&&Ga(p)}},[r,i,n,a]),d=f.useCallback(function(p){c(p,p.deltaY)},[c]),v=f.useCallback(function(p){o.current=p.changedTouches[0].clientY},[]),g=f.useCallback(function(p){var h=o.current-p.changedTouches[0].clientY;c(p,h)},[c]),b=f.useCallback(function(p){if(p){var h=hi?{passive:!1}:!1;p.addEventListener("wheel",d,h),p.addEventListener("touchstart",v,h),p.addEventListener("touchmove",g,h)}},[g,v,d]),m=f.useCallback(function(p){p&&(p.removeEventListener("wheel",d,!1),p.removeEventListener("touchstart",v,!1),p.removeEventListener("touchmove",g,!1))},[g,v,d]);return f.useEffect(function(){if(e){var p=s.current;return b(p),function(){m(p)}}},[e,b,m]),function(p){s.current=p}}var Rt=["boxSizing","height","overflow","paddingRight","position"],kt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Lt(t){t.preventDefault()}function Tt(t){t.stopPropagation()}function $t(){var t=this.scrollTop,e=this.scrollHeight,r=t+this.offsetHeight;t===0?this.scrollTop=1:r===e&&(this.scrollTop=t-1)}function Bt(){return"ontouchstart"in window||navigator.maxTouchPoints}var jt=!!(typeof window<"u"&&window.document&&window.document.createElement),me=0,ce={capture:!1,passive:!1};function qa(t){var e=t.isEnabled,r=t.accountForScrollbars,i=r===void 0?!0:r,n=f.useRef({}),a=f.useRef(null),u=f.useCallback(function(o){if(jt){var s=document.body,c=s&&s.style;if(i&&Rt.forEach(function(b){var m=c&&c[b];n.current[b]=m}),i&&me<1){var d=parseInt(n.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,g=window.innerWidth-v+d||0;Object.keys(kt).forEach(function(b){var m=kt[b];c&&(c[b]=m)}),c&&(c.paddingRight="".concat(g,"px"))}s&&Bt()&&(s.addEventListener("touchmove",Lt,ce),o&&(o.addEventListener("touchstart",$t,ce),o.addEventListener("touchmove",Tt,ce))),me+=1}},[i]),l=f.useCallback(function(o){if(jt){var s=document.body,c=s&&s.style;me=Math.max(me-1,0),i&&me<1&&Rt.forEach(function(d){var v=n.current[d];c&&(c[d]=v)}),s&&Bt()&&(s.removeEventListener("touchmove",Lt,ce),o&&(o.removeEventListener("touchstart",$t,ce),o.removeEventListener("touchmove",Tt,ce)))}},[i]);return f.useEffect(function(){if(e){var o=a.current;return u(o),function(){l(o)}}},[e,u,l]),function(o){a.current=o}}var Ka=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},Xa={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Za(t){var e=t.children,r=t.lockEnabled,i=t.captureEnabled,n=i===void 0?!0:i,a=t.onBottomArrive,u=t.onBottomLeave,l=t.onTopArrive,o=t.onTopLeave,s=Ya({isEnabled:n,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:o}),c=qa({isEnabled:r}),d=function(g){s(g),c(g)};return E(f.Fragment,null,r&&E("div",{onClick:Ka,css:Xa}),e(d))}var Ja={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Qa=function(e){var r=e.name,i=e.onFocus;return E("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:Ja,value:"",onChange:function(){}})},eo=Qa;function ft(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function to(){return ft(/^iPhone/i)}function Fn(){return ft(/^Mac/i)}function no(){return ft(/^iPad/i)||Fn()&&navigator.maxTouchPoints>1}function ro(){return to()||no()}function io(){return Fn()||ro()}var ao=function(e){return e.label},oo=function(e){return e.label},uo=function(e){return e.value},so=function(e){return!!e.isDisabled},lo={clearIndicator:Wi,container:ki,control:Ji,dropdownIndicator:zi,group:na,groupHeading:ia,indicatorsContainer:Bi,indicatorSeparator:Yi,input:sa,loadingIndicator:Xi,loadingMessage:Ii,menu:Si,menuList:Oi,menuPortal:Vi,multiValue:fa,multiValueLabel:ha,multiValueRemove:ma,noOptionsMessage:Ai,option:Ca,placeholder:wa,singleValue:Da,valueContainer:Ti},co={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},po=4,On=4,fo=38,ho=On*2,mo={baseUnit:On,controlHeight:fo,menuGutter:ho},qe={borderRadius:po,colors:co,spacing:mo},vo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:At(),captureMenuScroll:!At(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:za(),formatGroupLabel:ao,getOptionLabel:oo,getOptionValue:uo,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:so,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!pi(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Ht(t,e,r,i){var n=In(t,e,r),a=Pn(t,e,r),u=An(t,e),l=Be(t,e);return{type:"option",data:e,isDisabled:n,isSelected:a,label:u,value:l,index:i}}function Ve(t,e){return t.options.map(function(r,i){if("options"in r){var n=r.options.map(function(u,l){return Ht(t,u,e,l)}).filter(function(u){return Nt(t,u)});return n.length>0?{type:"group",data:r,options:n,index:i}:void 0}var a=Ht(t,r,e,i);return Nt(t,a)?a:void 0}).filter(mi)}function Dn(t){return t.reduce(function(e,r){return r.type==="group"?e.push.apply(e,ot(r.options.map(function(i){return i.data}))):e.push(r.data),e},[])}function _t(t,e){return t.reduce(function(r,i){return i.type==="group"?r.push.apply(r,ot(i.options.map(function(n){return{data:n.data,id:"".concat(e,"-").concat(i.index,"-").concat(n.index)}}))):r.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),r},[])}function go(t,e){return Dn(Ve(t,e))}function Nt(t,e){var r=t.inputValue,i=r===void 0?"":r,n=e.data,a=e.isSelected,u=e.label,l=e.value;return(!Vn(t)||!a)&&Mn(t,{label:u,value:l,data:n},i)}function bo(t,e){var r=t.focusedValue,i=t.selectValue,n=i.indexOf(r);if(n>-1){var a=e.indexOf(r);if(a>-1)return r;if(n<e.length)return e[n]}return null}function xo(t,e){var r=t.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var Ke=function(e,r){var i,n=(i=e.find(function(a){return a.data===r}))===null||i===void 0?void 0:i.id;return n||null},An=function(e,r){return e.getOptionLabel(r)},Be=function(e,r){return e.getOptionValue(r)};function In(t,e,r){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,r):!1}function Pn(t,e,r){if(r.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,r);var i=Be(t,e);return r.some(function(n){return Be(t,n)===i})}function Mn(t,e,r){return t.filterOption?t.filterOption(e,r):!0}var Vn=function(e){var r=e.hideSelectedOptions,i=e.isMulti;return r===void 0?i:r},Eo=1,Rn=function(t){ir(r,t);var e=ur(r);function r(i){var n;if(nr(this,r),n=e.call(this,i),n.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.isAppleDevice=io(),n.controlRef=null,n.getControlRef=function(o){n.controlRef=o},n.focusedOptionRef=null,n.getFocusedOptionRef=function(o){n.focusedOptionRef=o},n.menuListRef=null,n.getMenuListRef=function(o){n.menuListRef=o},n.inputRef=null,n.getInputRef=function(o){n.inputRef=o},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(o,s){var c=n.props,d=c.onChange,v=c.name;s.name=v,n.ariaOnChange(o,s),d(o,s)},n.setValue=function(o,s,c){var d=n.props,v=d.closeMenuOnSelect,g=d.isMulti,b=d.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:b}),v&&(n.setState({inputIsHiddenAfterUpdate:!g}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(o,{action:s,option:c})},n.selectOption=function(o){var s=n.props,c=s.blurInputOnSelect,d=s.isMulti,v=s.name,g=n.state.selectValue,b=d&&n.isOptionSelected(o,g),m=n.isOptionDisabled(o,g);if(b){var p=n.getOptionValue(o);n.setValue(g.filter(function(h){return n.getOptionValue(h)!==p}),"deselect-option",o)}else if(!m)d?n.setValue([].concat(ot(g),[o]),"select-option",o):n.setValue(o,"select-option");else{n.ariaOnChange(o,{action:"select-option",option:o,name:v});return}c&&n.blurInput()},n.removeValue=function(o){var s=n.props.isMulti,c=n.state.selectValue,d=n.getOptionValue(o),v=c.filter(function(b){return n.getOptionValue(b)!==d}),g=De(s,v,v[0]||null);n.onChange(g,{action:"remove-value",removedValue:o}),n.focusInput()},n.clearValue=function(){var o=n.state.selectValue;n.onChange(De(n.props.isMulti,[],null),{action:"clear",removedValues:o})},n.popValue=function(){var o=n.props.isMulti,s=n.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),v=De(o,d,d[0]||null);n.onChange(v,{action:"pop-value",removedValue:c})},n.getFocusedOptionId=function(o){return Ke(n.state.focusableOptionsWithIds,o)},n.getFocusableOptionsWithIds=function(){return _t(Ve(n.props,n.state.selectValue),n.getElementId("option"))},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return ui.apply(void 0,[n.props.classNamePrefix].concat(s))},n.getOptionLabel=function(o){return An(n.props,o)},n.getOptionValue=function(o){return Be(n.props,o)},n.getStyles=function(o,s){var c=n.props.unstyled,d=lo[o](s,c);d.boxSizing="border-box";var v=n.props.styles[o];return v?v(d,s):d},n.getClassNames=function(o,s){var c,d;return(c=(d=n.props.classNames)[o])===null||c===void 0?void 0:c.call(d,s)},n.getElementId=function(o){return"".concat(n.state.instancePrefix,"-").concat(o)},n.getComponents=function(){return Ma(n.props)},n.buildCategorizedOptions=function(){return Ve(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return Dn(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(o,s){n.setState({ariaSelection:C({value:o},s)})},n.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(o){n.blockOptionHover=!1},n.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&n.onMenuClose():s&&n.openMenu("first"):(s&&(n.openAfterFocus=!0),n.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},n.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!n.props.isDisabled){var s=n.props,c=s.isMulti,d=s.menuIsOpen;n.focusInput(),d?(n.setState({inputIsHiddenAfterUpdate:!c}),n.onMenuClose()):n.openMenu("first"),o.preventDefault()}},n.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(n.clearValue(),o.preventDefault(),n.openAfterFocus=!1,o.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(o){typeof n.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ne(o.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(o)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(o){var s=o.touches,c=s&&s.item(0);c&&(n.initialTouchX=c.clientX,n.initialTouchY=c.clientY,n.userIsDragging=!1)},n.onTouchMove=function(o){var s=o.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-n.initialTouchX),v=Math.abs(c.clientY-n.initialTouchY),g=5;n.userIsDragging=d>g||v>g}},n.onTouchEnd=function(o){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(o.target)&&n.menuListRef&&!n.menuListRef.contains(o.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(o){n.userIsDragging||n.onControlMouseDown(o)},n.onClearIndicatorTouchEnd=function(o){n.userIsDragging||n.onClearIndicatorMouseDown(o)},n.onDropdownIndicatorTouchEnd=function(o){n.userIsDragging||n.onDropdownIndicatorMouseDown(o)},n.handleInputChange=function(o){var s=n.props.inputValue,c=o.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(c,{action:"input-change",prevInputValue:s}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(o){n.props.onFocus&&n.props.onFocus(o),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(o){var s=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(o),n.onInputChange("",{action:"input-blur",prevInputValue:s}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(o){if(!(n.blockOptionHover||n.state.focusedOption===o)){var s=n.getFocusableOptions(),c=s.indexOf(o);n.setState({focusedOption:o,focusedOptionId:c>-1?n.getFocusedOptionId(o):null})}},n.shouldHideSelectedOptions=function(){return Vn(n.props)},n.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),n.focus()},n.onKeyDown=function(o){var s=n.props,c=s.isMulti,d=s.backspaceRemovesValue,v=s.escapeClearsValue,g=s.inputValue,b=s.isClearable,m=s.isDisabled,p=s.menuIsOpen,h=s.onKeyDown,y=s.tabSelectsValue,F=s.openMenuOnFocus,I=n.state,P=I.focusedOption,A=I.focusedValue,x=I.selectValue;if(!m&&!(typeof h=="function"&&(h(o),o.defaultPrevented))){switch(n.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||g)return;n.focusValue("previous");break;case"ArrowRight":if(!c||g)return;n.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(A)n.removeValue(A);else{if(!d)return;c?n.popValue():b&&n.clearValue()}break;case"Tab":if(n.isComposing||o.shiftKey||!p||!y||!P||F&&n.isOptionSelected(P,x))return;n.selectOption(P);break;case"Enter":if(o.keyCode===229)break;if(p){if(!P||n.isComposing)return;n.selectOption(P);break}return;case"Escape":p?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:g}),n.onMenuClose()):b&&v&&n.clearValue();break;case" ":if(g)return;if(!p){n.openMenu("first");break}if(!P)return;n.selectOption(P);break;case"ArrowUp":p?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":p?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!p)return;n.focusOption("pageup");break;case"PageDown":if(!p)return;n.focusOption("pagedown");break;case"Home":if(!p)return;n.focusOption("first");break;case"End":if(!p)return;n.focusOption("last");break;default:return}o.preventDefault()}},n.state.instancePrefix="react-select-"+(n.props.instanceId||++Eo),n.state.selectValue=Ot(i.value),i.menuIsOpen&&n.state.selectValue.length){var a=n.getFocusableOptionsWithIds(),u=n.buildFocusableOptions(),l=u.indexOf(n.state.selectValue[0]);n.state.focusableOptionsWithIds=a,n.state.focusedOption=u[l],n.state.focusedOptionId=Ke(a,u[l])}return n}return rr(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Dt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&n.isDisabled||o&&l&&!n.menuIsOpen)&&this.focusInput(),o&&u&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Dt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,a){this.props.onInputChange(n,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var a=this,u=this.state,l=u.selectValue,o=u.isFocused,s=this.buildFocusableOptions(),c=n==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(n){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(l);l||(o=-1);var s=u.length-1,c=-1;if(u.length){switch(n){case"previous":o===0?c=0:o===-1?c=s:c=o-1;break;case"next":o>-1&&o<s&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var o=0,s=l.indexOf(u);u||(s=-1),n==="up"?o=s>0?s-1:l.length-1:n==="down"?o=(s+1)%l.length:n==="pageup"?(o=s-a,o<0&&(o=0)):n==="pagedown"?(o=s+a,o>l.length-1&&(o=l.length-1)):n==="last"&&(o=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(qe):C(C({},qe),this.props.theme):qe}},{key:"getCommonProps",value:function(){var n=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,o=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,g=d.isRtl,b=d.options,m=this.hasValue();return{clearValue:n,cx:a,getStyles:u,getClassNames:l,getValue:o,hasValue:m,isMulti:v,isRtl:g,options:b,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,a=n.isClearable,u=n.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(n,a){return In(this.props,n,a)}},{key:"isOptionSelected",value:function(n,a){return Pn(this.props,n,a)}},{key:"filterOption",value:function(n,a){return Mn(this.props,n,a)}},{key:"formatOptionLabel",value:function(n,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(n,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,a=n.isDisabled,u=n.isSearchable,l=n.inputId,o=n.inputValue,s=n.tabIndex,c=n.form,d=n.menuIsOpen,v=n.required,g=this.getComponents(),b=g.Input,m=this.state,p=m.inputIsHidden,h=m.ariaSelection,y=this.commonProps,F=l||this.getElementId("input"),I=C(C(C({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?f.createElement(b,S({},y,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:F,innerRef:this.getInputRef,isDisabled:a,isHidden:p,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:o},I)):f.createElement(Wa,S({id:F,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Te,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},I))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,o=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,v=this.commonProps,g=this.props,b=g.controlShouldRenderValue,m=g.isDisabled,p=g.isMulti,h=g.inputValue,y=g.placeholder,F=this.state,I=F.selectValue,P=F.focusedValue,A=F.isFocused;if(!this.hasValue()||!b)return h?null:f.createElement(d,S({},v,{key:"placeholder",isDisabled:m,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),y);if(p)return I.map(function(O,R){var H=O===P,z="".concat(n.getOptionLabel(O),"-").concat(n.getOptionValue(O));return f.createElement(u,S({},v,{components:{Container:l,Label:o,Remove:s},isFocused:H,isDisabled:m,key:z,index:R,removeProps:{onClick:function(){return n.removeValue(O)},onTouchEnd:function(){return n.removeValue(O)},onMouseDown:function(Q){Q.preventDefault()}},data:O}),n.formatOptionLabel(O,"value"))});if(h)return null;var x=I[0];return f.createElement(c,S({},v,{data:x,isDisabled:m}),this.formatOptionLabel(x,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),a=n.ClearIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,S({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),a=n.LoadingIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return f.createElement(a,S({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator,u=n.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused;return f.createElement(u,S({},l,{isDisabled:o,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,o=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,S({},u,{innerProps:s,isDisabled:l,isFocused:o}))}},{key:"renderMenu",value:function(){var n=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,o=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,v=a.NoOptionsMessage,g=a.Option,b=this.commonProps,m=this.state.focusedOption,p=this.props,h=p.captureMenuScroll,y=p.inputValue,F=p.isLoading,I=p.loadingMessage,P=p.minMenuHeight,A=p.maxMenuHeight,x=p.menuIsOpen,O=p.menuPlacement,R=p.menuPosition,H=p.menuPortalTarget,z=p.menuShouldBlockScroll,_=p.menuShouldScrollIntoView,Q=p.noOptionsMessage,ee=p.onMenuScrollToTop,B=p.onMenuScrollToBottom;if(!x)return null;var T=function(W,te){var ue=W.type,q=W.data,se=W.isDisabled,ne=W.isSelected,ye=W.label,kn=W.value,ht=m===q,mt=se?void 0:function(){return n.onOptionHover(q)},Ln=se?void 0:function(){return n.selectOption(q)},vt="".concat(n.getElementId("option"),"-").concat(te),Tn={id:vt,onClick:Ln,onMouseMove:mt,onMouseOver:mt,tabIndex:-1,role:"option","aria-selected":n.isAppleDevice?void 0:ne};return f.createElement(g,S({},b,{innerProps:Tn,data:q,isDisabled:se,isSelected:ne,key:vt,label:ye,type:ue,value:kn,isFocused:ht,innerRef:ht?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(W.data,"menu"))},K;if(this.hasOptions())K=this.getCategorizedOptions().map(function($){if($.type==="group"){var W=$.data,te=$.options,ue=$.index,q="".concat(n.getElementId("group"),"-").concat(ue),se="".concat(q,"-heading");return f.createElement(u,S({},b,{key:q,data:W,options:te,Heading:l,headingProps:{id:se,data:$.data},label:n.formatGroupLabel($.data)}),$.options.map(function(ne){return T(ne,"".concat(ue,"-").concat(ne.index))}))}else if($.type==="option")return T($,"".concat($.index))});else if(F){var Y=I({inputValue:y});if(Y===null)return null;K=f.createElement(d,b,Y)}else{var ae=Q({inputValue:y});if(ae===null)return null;K=f.createElement(v,b,ae)}var oe={minMenuHeight:P,maxMenuHeight:A,menuPlacement:O,menuPosition:R,menuShouldScrollIntoView:_},Se=f.createElement(yi,S({},b,oe),function($){var W=$.ref,te=$.placerProps,ue=te.placement,q=te.maxHeight;return f.createElement(o,S({},b,oe,{innerRef:W,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove},isLoading:F,placement:ue}),f.createElement(Za,{captureEnabled:h,onTopArrive:ee,onBottomArrive:B,lockEnabled:z},function(se){return f.createElement(s,S({},b,{innerRef:function(ye){n.getMenuListRef(ye),se(ye)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:n.getElementId("listbox")},isLoading:F,maxHeight:q,focusedOption:m}),K)}))});return H||R==="fixed"?f.createElement(c,S({},b,{appendTo:H,controlElement:this.controlRef,menuPlacement:O,menuPosition:R}),Se):Se}},{key:"renderFormField",value:function(){var n=this,a=this.props,u=a.delimiter,l=a.isDisabled,o=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return f.createElement(eo,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(o)if(u){var v=d.map(function(m){return n.getOptionValue(m)}).join(u);return f.createElement("input",{name:s,type:"hidden",value:v})}else{var g=d.length>0?d.map(function(m,p){return f.createElement("input",{key:"i-".concat(p),name:s,type:"hidden",value:n.getOptionValue(m)})}):f.createElement("input",{name:s,type:"hidden",value:""});return f.createElement("div",null,g)}else{var b=d[0]?this.getOptionValue(d[0]):"";return f.createElement("input",{name:s,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,o=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return f.createElement(ja,S({},n,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:o,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var n=this.getComponents(),a=n.Control,u=n.IndicatorsContainer,l=n.SelectContainer,o=n.ValueContainer,s=this.props,c=s.className,d=s.id,v=s.isDisabled,g=s.menuIsOpen,b=this.state.isFocused,m=this.commonProps=this.getCommonProps();return f.createElement(l,S({},m,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:b}),this.renderLiveRegion(),f.createElement(a,S({},m,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:b,menuIsOpen:g}),f.createElement(o,S({},m,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(u,S({},m,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,v=a.instancePrefix,g=n.options,b=n.value,m=n.menuIsOpen,p=n.inputValue,h=n.isMulti,y=Ot(b),F={};if(u&&(b!==u.value||g!==u.options||m!==u.menuIsOpen||p!==u.inputValue)){var I=m?go(n,y):[],P=m?_t(Ve(n,y),"".concat(v,"-option")):[],A=l?bo(a,y):null,x=xo(a,I),O=Ke(P,x);F={selectValue:y,focusedOption:x,focusedOptionId:O,focusableOptionsWithIds:P,focusedValue:A,clearFocusValueOnUpdate:!1}}var R=o!=null&&n!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},H=s,z=c&&d;return c&&!z&&(H={value:De(h,y,y[0]||null),options:y,action:"initial-input-focus"},z=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(H=null),C(C(C({},F),R),{},{prevProps:n,ariaSelection:H,prevWasFocused:z})}}]),r}(f.Component);Rn.defaultProps=vo;var Co=f.forwardRef(function(t,e){var r=tr(t);return f.createElement(Rn,S({ref:e},r))}),zt=Co;const So=D.form`
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
`,yo=D.p`
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
`,wo=D.input`
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
`,Fo=D.button`
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
`,Oo=D.svg`
  width: 18px;
  height: 18px;
  stroke: #e6533c;
`,Do=D.button`
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
`,Ao=D.svg`
  width: 18px;
  height: 18px;
`,Io=D.div`
  display: flex;
  width: 100%;
  gap: ${t=>t.theme.spacing(4)};
`,Xe="#1c1c1c",Ae="#efede8",Po="rgba(239, 237, 232, 0.1)",Ut={option:t=>({...t,background:Xe,color:Ae,textwrap:"nowrap"}),control:t=>({...t,backgroundColor:"transparent",borderRadius:"12px",width:"100%",height:"46px",border:"1px solid rgba(239, 237, 232, 0.2)",boxShadow:"none","&:hover":{borderColor:"#E6533C"},"&:focus":{borderColor:"#E6533C"},"@media (min-width: 768px)":{height:"50px"}}),dropdownIndicator:t=>({...t,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:Ae}}),menu:t=>({...t,background:Xe,borderRadius:"12px"}),menuList:t=>({...t,"::-webkit-scrollbar":{width:"22px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:Po,borderRadius:"12px",border:"7px solid",borderColor:Xe},maxHeight:"276px",borderRadius:"12px",overflowX:"hidden"}),indicatorSeparator:t=>({...t,display:"none"}),placeholder:t=>({...t,color:Ae}),singleValue:t=>({...t,color:Ae}),container:t=>({...t,display:"flex",alignItems:"center",border:"1px",height:"46px",width:"100%","&:hover":{borderColor:"#E6533C"},"&:focus":{borderColor:"#E6533C"},"@media (min-width: 768px)":{height:"50px"}}),input:t=>({...t,fontSize:"14px"})},Mo=()=>{const t=Kt(),e=ge(Yn),r=ge(qn),n=Nn({initialValues:{title:"",category:"",type:""},validate:o=>{o.title&&o.title.length<2},onSubmit:o=>u(o)}),a=(o,s)=>o?o.find(c=>c.value==s):"",u=o=>{t(jn(o)),t(Xt())},l=(o,s)=>{n.setFieldValue(o,s.value);const{initialValues:c,values:d}=n;if(s.value!==c[s.value]){const v={...d,[o]:s.value};u(v)}};return w.jsxs(So,{onSubmit:n.handleSubmit,children:[w.jsx(wo,{type:"text",name:"title",placeholder:"Search",value:n.values.title.trim(),onChange:n.handleChange}),n.values.title!==""&&w.jsx(Fo,{type:"button",onClick:()=>{n.setFieldValue("title",""),n.setFieldValue("categoty",""),n.setFieldValue("type",""),u("title")},children:w.jsx(Oo,{children:w.jsx("use",{href:`${Re}#icon-x`})})}),w.jsx(Do,{type:"submit",children:w.jsx(Ao,{children:w.jsx("use",{href:`${Re}#icon-search`})})}),w.jsxs(Io,{children:[w.jsx(zt,{value:a(e,n.values.category),onChange:o=>l("category",o),options:e,placeholder:"Categories",styles:Ut}),w.jsx(zt,{value:a(r,n.values.type),onChange:o=>l("type",o),options:r,styles:Ut})]}),w.jsx(yo,{children:"Filters"})]})},Vo=t=>t.$recommended?t.theme.colors.recommendedColor:t.theme.colors.notRecommendedColor,Ro=D.div`
  height: 141px;
  padding: ${t=>t.theme.spacing(4)};
  border: 1px solid ${t=>t.theme.colors.cardBorderColor};
  border-radius: ${t=>t.theme.radii.ld};
  background-color: ${t=>t.theme.colors.cardBgColor};
  word-wrap: break-word;
  font-size: 12px;

  @media screen and (max-width: 335px) {
    max-width: 320px;
  }
  @media screen and (min-width: 335px) {
    width: 335px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,ko=D.div`
  display: flex;
  margin-bottom: ${t=>t.theme.spacing(6)};
  align-items: baseline;
  justify-content: space-between;
`,Lo=D.span`
  margin-right: auto;
  border-radius: ${t=>t.theme.radii.sd};
  padding: 7px 5px;
  /* width: 40px; */
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${t=>t.theme.colors.cardBgColor};
`,To=D.span`
  margin-right: ${t=>t.theme.spacing(2)};
  display: block;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${Vo};
`,Wt=D.p`
  margin-right: ${t=>t.theme.spacing(4)};
  color: ${t=>t.theme.colors.whiteColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::first-letter {
    text-transform: uppercase;
  }
`,$o=D.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  color: ${t=>t.theme.colors.hoverColor};
  background: transparent;
`,Bo=D.svg`
  margin-left: ${t=>t.theme.spacing(2)};
  width: 16px;
  height: 16px;
`,jo=D.div`
  display: flex;
  column-gap: ${t=>t.theme.spacing(4)};
  height: 32px;
  overflow-y: hidden;
  margin-bottom: ${t=>t.theme.spacing(2)};

  @media screen and (max-width: 375px) {
    max-width: 303px;
  }
`,Ho=D.p`
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
`,_o=D.svg`
  width: 24px;
  height: 24px;
`,No=D.div`
  display: flex;
  height: 18px;
  overflow-y: hidden;
  overflow-x: hidden;

  @media screen and (max-width: 375px) {
    max-width: 303px;
  }
`,Ze=D.div`
  display: flex;
  justify-content: space-between;
  height: 18px;
  overflow-y: hidden;
  overflow-x: hidden;
`,Je=D.p`
  color: ${t=>t.theme.colors.captionColor};
`,Gt=D.p`
  margin-right: ${t=>t.theme.spacing(4)};
  color: ${t=>t.theme.colors.whiteColor};

  &::first-letter {
    text-transform: uppercase;
  }
`,zo=({product:{id:t,title:e,calories:r,category:i,weight:n,recommended:a=!0}})=>w.jsxs(Ro,{children:[w.jsxs(ko,{children:[w.jsx(Lo,{children:"diet"}),w.jsx(To,{$recommended:a}),w.jsx(Wt,{children:w.jsx("b",{children:a?"Recommended":"Not recommended"})}),w.jsxs($o,{children:["Add",w.jsx(Bo,{children:w.jsx("use",{href:`${Re}#icon-arrow-right`})})]})]}),w.jsxs(jo,{children:[w.jsx(_o,{children:w.jsx("use",{href:`${Re}#icon-run-exercises`})}),w.jsx(Ho,{children:e})]}),w.jsxs(No,{children:[w.jsxs(Ze,{children:[w.jsx(Je,{children:"Calories:"})," ",w.jsx(Gt,{children:r})]}),w.jsxs(Ze,{children:[w.jsx(Je,{children:"Category: "})," ",w.jsx(Wt,{children:i})]}),w.jsxs(Ze,{children:[w.jsx(Je,{children:"Weight:"})," ",w.jsx(Gt,{children:n})]})]})]}),Uo=D.ul`
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
`,Wo=()=>{const t=ge(Un);return w.jsx(Uo,{children:t.map(e=>w.jsx("li",{children:w.jsx(zo,{product:e})},e._id))})},Go=D.div`
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
`,Yt=D.p`
  color: ${t=>t.theme.colors.accentColor};
  @media screen and (min-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,qt=D.span`
  color: ${t=>t.theme.colors.orangeColor};
`,Yo=()=>w.jsxs(Go,{children:[w.jsxs(Yt,{children:[w.jsx(qt,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),w.jsx(Yt,{children:w.jsx(qt,{children:"Try changing the search parameters."})})]}),qo=D.div`
  margin: 0 auto;
  padding-top: 40px auto;
  padding-bottom: 40px;
  width: 100%;

  @media screen and (min-width: 375px) {
    padding: 40px 20px;
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding: 72px 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 68px 96px;
    max-width: 1440px;
  }
`,Ko=D.div`
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
`,Xo=D.h1`
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
`;D.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const nu=()=>{const t=Kt();ge(Gn);const e=ge(Wn);return f.useEffect(()=>{t(Hn()),t(Xt())},[t]),w.jsxs(qo,{children:[w.jsxs(Ko,{children:[w.jsx(Xo,{children:"Products"}),w.jsx(Mo,{})]}),e?w.jsx(Wo,{}):w.jsx(Yo,{})]})};export{nu as default};
