import{a3 as Se,R as se,r as P,u as v,F as $e,j as _,i as Ae}from"./index-247e5f7f.js";function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},oe.apply(this,arguments)}function Oe(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Re(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Pe=function(){function e(t){var n=this;this._insertTag=function(i){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,a),n.tags.push(i)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Re(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Oe(i);try{a.insertRule(n,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),y="-ms-",U="-moz-",f="-webkit-",pe="comm",ne="rule",ie="decl",Te="@import",xe="@keyframes",Me="@layer",Ne=Math.abs,Z=String.fromCharCode,Ie=Object.assign;function ze(e,r){return g(e,0)^45?(((r<<2^g(e,0))<<2^g(e,1))<<2^g(e,2))<<2^g(e,3):0}function me(e){return e.trim()}function Fe(e,r){return(e=r.exec(e))?e[0]:e}function d(e,r,t){return e.replace(r,t)}function ee(e,r){return e.indexOf(r)}function g(e,r){return e.charCodeAt(r)|0}function B(e,r,t){return e.slice(r,t)}function O(e){return e.length}function ae(e){return e.length}function K(e,r){return r.push(e),e}function je(e,r){return e.map(r).join("")}var J=1,F=1,ge=0,C=0,x=0,j="";function Q(e,r,t,n,i,a,s){return{value:e,root:r,parent:t,type:n,props:i,children:a,line:J,column:F,length:s,return:""}}function L(e,r){return Ie(Q("",null,null,"",null,null,0),e,{length:-e.length},r)}function _e(){return x}function Le(){return x=C>0?g(j,--C):0,F--,x===10&&(F=1,J--),x}function S(){return x=C<ge?g(j,C++):0,F++,x===10&&(F=1,J++),x}function T(){return g(j,C)}function V(){return C}function G(e,r){return B(j,e,r)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function be(e){return J=F=1,ge=O(j=e),C=0,[]}function we(e){return j="",e}function q(e){return me(G(C-1,re(e===91?e+2:e===40?e+1:e)))}function Be(e){for(;(x=T())&&x<33;)S();return W(e)>2||W(x)>3?"":" "}function We(e,r){for(;--r&&S()&&!(x<48||x>102||x>57&&x<65||x>70&&x<97););return G(e,V()+(r<6&&T()==32&&S()==32))}function re(e){for(;S();)switch(x){case e:return C;case 34:case 39:e!==34&&e!==39&&re(x);break;case 40:e===41&&re(e);break;case 92:S();break}return C}function De(e,r){for(;S()&&e+x!==47+10;)if(e+x===42+42&&T()===47)break;return"/*"+G(r,C-1)+"*"+Z(e===47?e:S())}function Ge(e){for(;!W(T());)S();return G(e,C)}function Ye(e){return we(H("",null,null,null,[""],e=be(e),0,[0],e))}function H(e,r,t,n,i,a,s,o,c){for(var h=0,m=0,b=s,M=0,N=0,E=0,l=1,k=1,p=1,w=0,$="",Y=i,I=a,A=n,u=$;k;)switch(E=w,w=S()){case 40:if(E!=108&&g(u,b-1)==58){ee(u+=d(q(w),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:u+=q(w);break;case 9:case 10:case 13:case 32:u+=Be(E);break;case 92:u+=We(V()-1,7);continue;case 47:switch(T()){case 42:case 47:K(Ke(De(S(),V()),r,t),c);break;default:u+="/"}break;case 123*l:o[h++]=O(u)*p;case 125*l:case 59:case 0:switch(w){case 0:case 125:k=0;case 59+m:p==-1&&(u=d(u,/\f/g,"")),N>0&&O(u)-b&&K(N>32?fe(u+";",n,t,b-1):fe(d(u," ","")+";",n,t,b-2),c);break;case 59:u+=";";default:if(K(A=ce(u,r,t,h,m,i,o,$,Y=[],I=[],b),a),w===123)if(m===0)H(u,r,A,A,Y,a,b,o,I);else switch(M===99&&g(u,3)===110?100:M){case 100:case 108:case 109:case 115:H(e,A,A,n&&K(ce(e,A,A,0,0,i,o,$,i,Y=[],b),I),i,I,b,o,n?Y:I);break;default:H(u,A,A,A,[""],I,0,o,I)}}h=m=N=0,l=p=1,$=u="",b=s;break;case 58:b=1+O(u),N=E;default:if(l<1){if(w==123)--l;else if(w==125&&l++==0&&Le()==125)continue}switch(u+=Z(w),w*l){case 38:p=m>0?1:(u+="\f",-1);break;case 44:o[h++]=(O(u)-1)*p,p=1;break;case 64:T()===45&&(u+=q(S())),M=T(),m=b=O($=u+=Ge(V())),w++;break;case 45:E===45&&O(u)==2&&(l=0)}}return a}function ce(e,r,t,n,i,a,s,o,c,h,m){for(var b=i-1,M=i===0?a:[""],N=ae(M),E=0,l=0,k=0;E<n;++E)for(var p=0,w=B(e,b+1,b=Ne(l=s[E])),$=e;p<N;++p)($=me(l>0?M[p]+" "+w:d(w,/&\f/g,M[p])))&&(c[k++]=$);return Q(e,r,t,i===0?ne:o,c,h,m)}function Ke(e,r,t){return Q(e,r,t,pe,Z(_e()),B(e,2,-2),0)}function fe(e,r,t,n){return Q(e,r,t,ie,B(e,0,n),B(e,n+1,-1),n)}function z(e,r){for(var t="",n=ae(e),i=0;i<n;i++)t+=r(e[i],i,e,r)||"";return t}function Ve(e,r,t,n){switch(e.type){case Me:if(e.children.length)break;case Te:case ie:return e.return=e.return||e.value;case pe:return"";case xe:return e.return=e.value+"{"+z(e.children,n)+"}";case ne:e.value=e.props.join(",")}return O(t=z(e.children,n))?e.return=e.value+"{"+t+"}":""}function qe(e){var r=ae(e);return function(t,n,i,a){for(var s="",o=0;o<r;o++)s+=e[o](t,n,i,a)||"";return s}}function He(e){return function(r){r.root||(r=r.return)&&e(r)}}var Ue=function(r,t,n){for(var i=0,a=0;i=a,a=T(),i===38&&a===12&&(t[n]=1),!W(a);)S();return G(r,C)},Ze=function(r,t){var n=-1,i=44;do switch(W(i)){case 0:i===38&&T()===12&&(t[n]=1),r[n]+=Ue(C-1,t,n);break;case 2:r[n]+=q(i);break;case 4:if(i===44){r[++n]=T()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=Z(i)}while(i=S());return r},Je=function(r,t){return we(Ze(be(r),t))},de=new WeakMap,Qe=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,i=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!de.get(n))&&!i){de.set(r,!0);for(var a=[],s=Je(t,a),o=n.props,c=0,h=0;c<s.length;c++)for(var m=0;m<o.length;m++,h++)r.props[h]=a[c]?s[c].replace(/&\f/g,o[m]):o[m]+" "+s[c]}}},Xe=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function ye(e,r){switch(ze(e,r)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+U+e+y+e+e;case 6828:case 4268:return f+e+y+e+e;case 6165:return f+e+y+"flex-"+e+e;case 5187:return f+e+d(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+y+"flex-$1$2")+e;case 5443:return f+e+y+"flex-item-"+d(e,/flex-|-self/,"")+e;case 4675:return f+e+y+"flex-line-pack"+d(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+y+d(e,"shrink","negative")+e;case 5292:return f+e+y+d(e,"basis","preferred-size")+e;case 6060:return f+"box-"+d(e,"-grow","")+f+e+y+d(e,"grow","positive")+e;case 4554:return f+d(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-r>6)switch(g(e,r+1)){case 109:if(g(e,r+4)!==45)break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+U+(g(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~ee(e,"stretch")?ye(d(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(g(e,r+1)!==115)break;case 6444:switch(g(e,O(e)-3-(~ee(e,"!important")&&10))){case 107:return d(e,":",":"+f)+e;case 101:return d(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(g(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+y+"$2box$3")+e}break;case 5936:switch(g(e,r+11)){case 114:return f+e+y+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+y+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+y+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+y+e+e}return e}var er=function(r,t,n,i){if(r.length>-1&&!r.return)switch(r.type){case ie:r.return=ye(r.value,r.length);break;case xe:return z([L(r,{value:d(r.value,"@","@"+f)})],i);case ne:if(r.length)return je(r.props,function(a){switch(Fe(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return z([L(r,{props:[d(a,/:(read-\w+)/,":"+U+"$1")]})],i);case"::placeholder":return z([L(r,{props:[d(a,/:(plac\w+)/,":"+f+"input-$1")]}),L(r,{props:[d(a,/:(plac\w+)/,":"+U+"$1")]}),L(r,{props:[d(a,/:(plac\w+)/,y+"input-$1")]})],i)}return""})}},rr=[er],tr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(l){var k=l.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(l),l.setAttribute("data-s",""))})}var i=r.stylisPlugins||rr,a={},s,o=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(l){for(var k=l.getAttribute("data-emotion").split(" "),p=1;p<k.length;p++)a[k[p]]=!0;o.push(l)});var c,h=[Qe,Xe];{var m,b=[Ve,He(function(l){m.insert(l)})],M=qe(h.concat(i,b)),N=function(k){return z(Ye(k),M)};c=function(k,p,w,$){m=w,N(k?k+"{"+p.styles+"}":p.styles),$&&(E.inserted[p.name]=!0)}}var E={key:t,sheet:new Pe({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:a,registered:{},insert:c};return E.sheet.hydrate(o),E},nr=!0;function ir(e,r,t){var n="";return t.split(" ").forEach(function(i){e[i]!==void 0?r.push(e[i]+";"):n+=i+" "}),n}var ve=function(r,t,n){var i=r.key+"-"+t.name;(n===!1||nr===!1)&&r.registered[i]===void 0&&(r.registered[i]=t.styles)},ar=function(r,t,n){ve(r,t,n);var i=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var a=t;do r.insert(t===a?"."+i:"",a,r.sheet,!0),a=a.next;while(a!==void 0)}};function sr(e){for(var r=0,t,n=0,i=e.length;i>=4;++n,i-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(i){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var or={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cr=/[A-Z]|^ms/g,fr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ke=function(r){return r.charCodeAt(1)===45},ue=function(r){return r!=null&&typeof r!="boolean"},X=Se(function(e){return ke(e)?e:e.replace(cr,"-$&").toLowerCase()}),he=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(fr,function(n,i,a){return R={name:i,styles:a,next:R},i})}return or[r]!==1&&!ke(r)&&typeof t=="number"&&t!==0?t+"px":t};function D(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return R={name:t.name,styles:t.styles,next:R},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)R={name:n.name,styles:n.styles,next:R},n=n.next;var i=t.styles+";";return i}return dr(e,r,t)}case"function":{if(e!==void 0){var a=R,s=t(e);return R=a,D(e,r,s)}break}}if(r==null)return t;var o=r[t];return o!==void 0?o:t}function dr(e,r,t){var n="";if(Array.isArray(t))for(var i=0;i<t.length;i++)n+=D(e,r,t[i])+";";else for(var a in t){var s=t[a];if(typeof s!="object")r!=null&&r[s]!==void 0?n+=a+"{"+r[s]+"}":ue(s)&&(n+=X(a)+":"+he(a,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var o=0;o<s.length;o++)ue(s[o])&&(n+=X(a)+":"+he(a,s[o])+";");else{var c=D(e,r,s);switch(a){case"animation":case"animationName":{n+=X(a)+":"+c+";";break}default:n+=a+"{"+c+"}"}}}return n}var le=/label:\s*([^\s;\n{]+)\s*(;|$)/g,R,ur=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var i=!0,a="";R=void 0;var s=r[0];s==null||s.raw===void 0?(i=!1,a+=D(n,t,s)):a+=s[0];for(var o=1;o<r.length;o++)a+=D(n,t,r[o]),i&&(a+=s[o]);le.lastIndex=0;for(var c="",h;(h=le.exec(a))!==null;)c+="-"+h[1];var m=sr(a)+c;return{name:m,styles:a,next:R}},hr=function(r){return r()},lr=se["useInsertionEffect"]?se["useInsertionEffect"]:!1,pr=lr||hr,Ce={}.hasOwnProperty,Ee=P.createContext(typeof HTMLElement<"u"?tr({key:"css"}):null);Ee.Provider;var xr=function(r){return P.forwardRef(function(t,n){var i=P.useContext(Ee);return r(t,i,n)})},mr=P.createContext({}),te="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Er=function(r,t){var n={};for(var i in t)Ce.call(t,i)&&(n[i]=t[i]);return n[te]=r,n},gr=function(r){var t=r.cache,n=r.serialized,i=r.isStringTag;return ve(t,n,i),pr(function(){return ar(t,n,i)}),null},br=xr(function(e,r,t){var n=e.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var i=e[te],a=[n],s="";typeof e.className=="string"?s=ir(r.registered,a,e.className):e.className!=null&&(s=e.className+" ");var o=ur(a,void 0,P.useContext(mr));s+=r.key+"-"+o.name;var c={};for(var h in e)Ce.call(e,h)&&h!=="css"&&h!==te&&(c[h]=e[h]);return c.ref=t,c.className=s,P.createElement(P.Fragment,null,P.createElement(gr,{cache:r,serialized:o,isStringTag:typeof i=="string"}),P.createElement(i,c))}),Sr=br;const wr=v.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(10, 10, 10, 0.495);

  z-index: 10000;
`,yr=v.div`
  position: relative;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 600px;
  height: 300px;
  /* padding: 40px; */
  max-height: 95%;
  overflow-y: auto;

  background-color: #10100f;
  border-radius: 12px;
  border: 1px solid #efede820;
  text-align: center;

  @media screen and (max-width: 374px) {
    ${e=>e.theme.modal320Styles}
  }

  ${e=>e.theme.modalStyles}

  @media screen and (min-width: 768px) {
    ${e=>e.theme.modalTabletStyles}
  }
  @media screen and (min-width: 1440px) {
    ${e=>e.theme.modalDesktopStyles}
  }
`,vr=v.button`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 14px;
  right: 14px;
  background-color: #10100f;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
  
  width: 26px;
  height: 26px;
}
`,kr=document.querySelector("#modal-root"),$r=({onClose:e,children:r,modalStyles:t,modalTabletStyles:n,modalDesktopStyles:i,modal320Styles:a})=>{const s=window.scrollY,o=c=>{c.currentTarget===c.target&&e()};return P.useEffect(()=>{const c=h=>{h.code==="Escape"&&e()};return document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top=`-${s}px`,window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c),document.body.style.position="",window.scrollTo(0,s),document.body.style.top="",document.body.style.width=""}},[e,s]),$e.createPortal(_.jsx(wr,{onClick:o,children:_.jsxs(yr,{theme:{modal320Styles:a,modalStyles:t,modalTabletStyles:n,modalDesktopStyles:i},children:[_.jsx(vr,{type:"button",onClick:e,children:_.jsx("svg",{width:"20",height:"20",stroke:"white",children:_.jsx("use",{href:Ae+"#x"})})}),r]})}),kr)},Ar=v.button`
background-color: inherit;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0;
  color: rgb(239, 237, 232, 0.4);
  text-decoration: none;
  font-weight: 500;
  position: absolute;
  top: -140px;

`,Or=v.button`
  display: flex;
  color: ${e=>e.theme.colors.orangeColor};
  border: none;
  position: relative;
  background-color: transparent;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;

  width: 166px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  padding: 10px 27px 10px 27px;

  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  &:hover {
    border-color: ${e=>e.theme.colors.hoverColor};
  }

`,Rr=v.div`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      #ef8964 0%,
      #ef8964 30%,
      #ef8964 50%,
      #ef8964 70%,
      #ef8964 100%
    );
    border-radius: 12px;
  }

  @media (min-width: 768px) {
    overflow-y: auto;
    height: 507px;
    gap: 32px 16px;
  }
  @media (min-width: 1440px) {
    width: 850px;
  }
`,Pr=v.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`;v.li`
  max-width: 335px;
  width: 100%;
  min-height: 141px;
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 16px 16px;
  @media (min-width: 1440px) {
    max-width: 405px;
  }
`;v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 27px;
  }
`;v.h3`
  color: #FFFFFF;
  padding: 5px 7.5px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;v.svg`
  background-color: #efa082;
  fill:#ffffff;
  padding: 4px;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;v.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;v.h2`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #efede8;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  width: 250px;

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    width: 330px;
  }
`;v.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  & li {
    color: rgba(239, 237, 232, 0.4);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    @media screen and (min-width: 768px) {
    }
    & span {
      color: #efede8;
      margin-left: 4px;
    }
  }
`;v.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;v.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;export{Or as B,$r as C,Sr as E,Rr as M,mr as T,oe as _,Ar as a,Pr as b,Er as c,Ce as h,ur as s};
