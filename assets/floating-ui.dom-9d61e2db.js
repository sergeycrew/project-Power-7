function N(t){return gt(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function k(t){var e;return(e=(gt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function gt(t){return t instanceof Node||t instanceof O(t).Node}function F(t){return t instanceof Element||t instanceof O(t).Element}function D(t){return t instanceof HTMLElement||t instanceof O(t).HTMLElement}function at(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}function U(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=E(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function At(t){return["table","td","th"].includes(N(t))}function it(t){const e=st(),o=E(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Et(t){let e=z(t);for(;D(e)&&!tt(e);){if(it(e))return e;e=z(e)}return null}function st(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(N(t))}function E(t){return O(t).getComputedStyle(t)}function et(t){return F(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function z(t){if(N(t)==="html")return t;const e=t.assignedSlot||t.parentNode||at(t)&&t.host||k(t);return at(e)?e.host:e}function pt(t){const e=z(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:D(e)&&U(e)?e:pt(e)}function q(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=pt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=O(i);return r?e.concat(s,s.visualViewport||[],U(i)?i:[],s.frameElement&&o?q(s.frameElement):[]):e.concat(i,q(i,[],o))}const _=Math.min,W=Math.max,J=Math.round,G=Math.floor,B=t=>({x:t,y:t}),Ct={left:"right",right:"left",bottom:"top",top:"bottom"},Tt={start:"end",end:"start"};function Lt(t,e,o){return W(t,_(e,o))}function nt(t,e){return typeof t=="function"?t(e):t}function $(t){return t.split("-")[0]}function K(t){return t.split("-")[1]}function Pt(t){return t==="x"?"y":"x"}function rt(t){return t==="y"?"height":"width"}function ct(t){return["top","bottom"].includes($(t))?"y":"x"}function lt(t){return Pt(ct(t))}function Dt(t,e,o){o===void 0&&(o=!1);const n=K(t),i=lt(t),r=rt(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Q(s)),[s,Q(s)]}function St(t){const e=Q(t);return[ot(t),e,ot(e)]}function ot(t){return t.replace(/start|end/g,e=>Tt[e])}function Ft(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function kt(t,e,o,n){const i=K(t);let r=Ft($(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(ot)))),r}function Q(t){return t.replace(/left|right|bottom|top/g,e=>Ct[e])}function Nt(t){return{top:0,right:0,bottom:0,left:0,...t}}function ht(t){return typeof t!="number"?Nt(t):{top:t,right:t,bottom:t,left:t}}function Z(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ut(t,e,o){let{reference:n,floating:i}=t;const r=ct(e),s=lt(e),c=rt(s),l=$(e),f=r==="y",d=n.x+n.width/2-i.width/2,u=n.y+n.height/2-i.height/2,p=n[c]/2-i[c]/2;let a;switch(l){case"top":a={x:d,y:n.y-i.height};break;case"bottom":a={x:d,y:n.y+n.height};break;case"right":a={x:n.x+n.width,y:u};break;case"left":a={x:n.x-i.width,y:u};break;default:a={x:n.x,y:n.y}}switch(K(e)){case"start":a[s]-=p*(o&&f?-1:1);break;case"end":a[s]+=p*(o&&f?-1:1);break}return a}const Bt=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=ut(f,n,l),p=n,a={},m=0;for(let g=0;g<c.length;g++){const{name:w,fn:h}=c[g],{x,y,data:b,reset:v}=await h({x:d,y:u,initialPlacement:n,placement:p,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});d=x??d,u=y??u,a={...a,[w]:{...a[w],...b}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(p=v.placement),v.rects&&(f=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=ut(f,p,l)),g=-1)}return{x:d,y:u,placement:p,strategy:i,middlewareData:a}};async function Vt(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:p=!1,padding:a=0}=nt(e,t),m=ht(a),w=c[p?u==="floating"?"reference":"floating":u],h=Z(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(w)))==null||o?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:d,strategy:l})),x=u==="floating"?{...s.floating,x:n,y:i}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),b=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=Z(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:y,strategy:l}):x);return{top:(h.top-v.top+m.top)/b.y,bottom:(v.bottom-h.bottom+m.bottom)/b.y,left:(h.left-v.left+m.left)/b.x,right:(v.right-h.right+m.right)/b.x}}const Wt=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:r,platform:s,elements:c,middlewareData:l}=e,{element:f,padding:d=0}=nt(t,e)||{};if(f==null)return{};const u=ht(d),p={x:o,y:n},a=lt(i),m=rt(a),g=await s.getDimensions(f),w=a==="y",h=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=r.reference[m]+r.reference[a]-p[a]-r.floating[m],v=p[a]-r.reference[a],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let T=C?C[y]:0;(!T||!await(s.isElement==null?void 0:s.isElement(C)))&&(T=c.floating[y]||r.floating[m]);const V=b/2-v/2,I=T/2-g[m]/2-1,j=_(u[h],I),X=_(u[x],I),A=j,Y=T-g[m]-X,R=T/2-g[m]/2+V,L=Lt(A,R,Y),P=!l.arrow&&K(i)!=null&&R!==L&&r.reference[m]/2-(R<A?j:X)-g[m]/2<0,S=P?R<A?R-A:R-Y:0;return{[a]:p[a]+S,data:{[a]:L,centerOffset:R-L-S,...P&&{alignmentOffset:S}},reset:P}}}),Mt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...w}=nt(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const h=$(i),x=$(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(f.floating)),b=p||(x||!g?[Q(c)]:St(c));!p&&m!=="none"&&b.push(...kt(c,g,m,y));const v=[c,...b],C=await Vt(e,w),T=[];let V=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&T.push(C[h]),u){const A=Dt(i,s,y);T.push(C[A[0]],C[A[1]])}if(V=[...V,{placement:i,overflows:T}],!T.every(A=>A<=0)){var I,j;const A=(((I=r.flip)==null?void 0:I.index)||0)+1,Y=v[A];if(Y)return{data:{index:A,overflows:V},reset:{placement:Y}};let R=(j=V.filter(L=>L.overflows[0]<=0).sort((L,P)=>L.overflows[1]-P.overflows[1])[0])==null?void 0:j.placement;if(!R)switch(a){case"bestFit":{var X;const L=(X=V.map(P=>[P.placement,P.overflows.filter(S=>S>0).reduce((S,Ot)=>S+Ot,0)]).sort((P,S)=>P[1]-S[1])[0])==null?void 0:X[0];L&&(R=L);break}case"initialPlacement":R=c;break}if(i!==R)return{reset:{placement:R}}}return{}}}};async function Ht(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=$(o),c=K(o),l=ct(o)==="y",f=["left","top"].includes(s)?-1:1,d=r&&l?-1:1,u=nt(e,t);let{mainAxis:p,crossAxis:a,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof m=="number"&&(a=c==="end"?m*-1:m),l?{x:a*d,y:p*f}:{x:p*f,y:a*d}}const ne=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:c}=e,l=await Ht(e,t);return s===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:s}}}}};function wt(t){const e=E(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=D(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,c=J(o)!==r||J(n)!==s;return c&&(o=r,n=s),{width:o,height:n,$:c}}function ft(t){return F(t)?t:t.contextElement}function H(t){const e=ft(t);if(!D(e))return B(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=wt(e);let s=(r?J(o.width):o.width)/n,c=(r?J(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const zt=B(0);function xt(t){const e=O(t);return!st()||!e.visualViewport?zt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function _t(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==O(t)?!1:e}function M(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=ft(t);let s=B(1);e&&(n?F(n)&&(s=H(n)):s=H(t));const c=_t(r,o,n)?xt(r):B(0);let l=(i.left+c.x)/s.x,f=(i.top+c.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const p=O(r),a=n&&F(n)?O(n):n;let m=p,g=m.frameElement;for(;g&&n&&a!==m;){const w=H(g),h=g.getBoundingClientRect(),x=E(g),y=h.left+(g.clientLeft+parseFloat(x.paddingLeft))*w.x,b=h.top+(g.clientTop+parseFloat(x.paddingTop))*w.y;l*=w.x,f*=w.y,d*=w.x,u*=w.y,l+=y,f+=b,m=O(g),g=m.frameElement}}return Z({width:d,height:u,x:l,y:f})}const $t=[":popover-open",":modal"];function yt(t){return $t.some(e=>{try{return t.matches(e)}catch{return!1}})}function It(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=k(n),c=e?yt(e.floating):!1;if(n===s||c&&r)return o;let l={scrollLeft:0,scrollTop:0},f=B(1);const d=B(0),u=D(n);if((u||!u&&!r)&&((N(n)!=="body"||U(s))&&(l=et(n)),D(n))){const p=M(n);f=H(n),d.x=p.x+n.clientLeft,d.y=p.y+n.clientTop}return{width:o.width*f.x,height:o.height*f.y,x:o.x*f.x-l.scrollLeft*f.x+d.x,y:o.y*f.y-l.scrollTop*f.y+d.y}}function jt(t){return Array.from(t.getClientRects())}function vt(t){return M(k(t)).left+et(t).scrollLeft}function Xt(t){const e=k(t),o=et(t),n=t.ownerDocument.body,i=W(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=W(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+vt(t);const c=-o.scrollTop;return E(n).direction==="rtl"&&(s+=W(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:c}}function Yt(t,e){const o=O(t),n=k(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const f=st();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function qt(t,e){const o=M(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=D(t)?H(t):B(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,f=n*r.y;return{width:s,height:c,x:l,y:f}}function dt(t,e,o){let n;if(e==="viewport")n=Yt(t,o);else if(e==="document")n=Xt(k(t));else if(F(e))n=qt(e,o);else{const i=xt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return Z(n)}function bt(t,e){const o=z(t);return o===e||!F(o)||tt(o)?!1:E(o).position==="fixed"||bt(o,e)}function Ut(t,e){const o=e.get(t);if(o)return o;let n=q(t,[],!1).filter(c=>F(c)&&N(c)!=="body"),i=null;const r=E(t).position==="fixed";let s=r?z(t):t;for(;F(s)&&!tt(s);){const c=E(s),l=it(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||U(s)&&!l&&bt(t,s))?n=n.filter(d=>d!==s):i=c,s=z(s)}return e.set(t,n),n}function Kt(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?Ut(e,this._c):[].concat(o),n],c=s[0],l=s.reduce((f,d)=>{const u=dt(e,d,i);return f.top=W(u.top,f.top),f.right=_(u.right,f.right),f.bottom=_(u.bottom,f.bottom),f.left=W(u.left,f.left),f},dt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Gt(t){const{width:e,height:o}=wt(t);return{width:e,height:o}}function Jt(t,e,o){const n=D(e),i=k(e),r=o==="fixed",s=M(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=B(0);if(n||!n&&!r)if((N(e)!=="body"||U(i))&&(c=et(e)),n){const u=M(e,!0,r,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else i&&(l.x=vt(i));const f=s.left+c.scrollLeft-l.x,d=s.top+c.scrollTop-l.y;return{x:f,y:d,width:s.width,height:s.height}}function mt(t,e){return!D(t)||E(t).position==="fixed"?null:e?e(t):t.offsetParent}function Rt(t,e){const o=O(t);if(!D(t)||yt(t))return o;let n=mt(t,e);for(;n&&At(n)&&E(n).position==="static";)n=mt(n,e);return n&&(N(n)==="html"||N(n)==="body"&&E(n).position==="static"&&!it(n))?o:n||Et(t)||o}const Qt=async function(t){const e=this.getOffsetParent||Rt,o=this.getDimensions;return{reference:Jt(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await o(t.floating)}}};function Zt(t){return E(t).direction==="rtl"}const te={convertOffsetParentRelativeRectToViewportRelativeRect:It,getDocumentElement:k,getClippingRect:Kt,getOffsetParent:Rt,getElementRects:Qt,getClientRects:jt,getDimensions:Gt,getScale:H,isElement:F,isRTL:Zt};function ee(t,e){let o=null,n;const i=k(t);function r(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:f,top:d,width:u,height:p}=t.getBoundingClientRect();if(c||e(),!u||!p)return;const a=G(d),m=G(i.clientWidth-(f+u)),g=G(i.clientHeight-(d+p)),w=G(f),x={rootMargin:-a+"px "+-m+"px "+-g+"px "+-w+"px",threshold:W(0,_(1,l))||1};let y=!0;function b(v){const C=v[0].intersectionRatio;if(C!==l){if(!y)return s();C?s(!1,C):n=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{o=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(b,x)}o.observe(t)}return s(!0),r}function oe(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,f=ft(t),d=i||r?[...f?q(f):[],...q(e)]:[];d.forEach(h=>{i&&h.addEventListener("scroll",o,{passive:!0}),r&&h.addEventListener("resize",o)});const u=f&&c?ee(f,o):null;let p=-1,a=null;s&&(a=new ResizeObserver(h=>{let[x]=h;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var y;(y=a)==null||y.observe(e)})),o()}),f&&!l&&a.observe(f),a.observe(e));let m,g=l?M(t):null;l&&w();function w(){const h=M(t);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&o(),g=h,m=requestAnimationFrame(w)}return o(),()=>{var h;d.forEach(x=>{i&&x.removeEventListener("scroll",o),r&&x.removeEventListener("resize",o)}),u==null||u(),(h=a)==null||h.disconnect(),a=null,l&&cancelAnimationFrame(m)}}const ie=Mt,se=Wt,re=(t,e,o)=>{const n=new Map,i={platform:te,...o},r={...i.platform,_c:n};return Bt(t,e,{...i,platform:r})};export{se as a,oe as b,re as c,ie as f,F as i,ne as o,te as p};