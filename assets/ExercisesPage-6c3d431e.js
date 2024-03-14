import{u as o,J as M,a as $,b as j,j as t,T as ee,U as R,r as c,V as Q,R as te,W,X as ie,Y as ne,x as T,i as S,Z as se,_ as re,L as oe,$ as ae,a0 as le,a1 as ce,C as de}from"./index-ae06053f.js";import{D as pe}from"./DiaryLoader-54210f81.js";import{e as xe}from"./UserForm.styled-b55abc9c.js";import{T as he,_ as z,C as V,a as me,M as ue,b as ge,B as fe}from"./ExercisesList.styled-5a7186bc.js";import"./formik.esm-14382953.js";const we=o.div`
  max-width: 1440px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 64px;
  }
`,be=o.div`
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,L=o.button`
  padding: 0;
  background-color: inherit;
  color: ${e=>e.theme.kostil?"rgba(239, 237, 232, 0.40)":"#efede8"};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  position: relative;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }


  ${e=>e.theme.kostil} &&::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    bottom: -8px;

    background-color: #ef8964;
    border-radius: 2px;

    @media screen and (min-width: 768px) {
      bottom: 5px;
    }
  }

`,ye=o.h2`
  color: ${e=>e.theme.colors.whiteColor};
  font-size: 24px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,je=o.h2`
  color: ${e=>e.theme.colors.whiteColor};
  font-size: 24px;
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,G=e=>e.exercises.loading,Y=e=>e.exercises.filter,ve=e=>e.exercises.exercises,ke=e=>e.exercises.categories,I=e=>e.exercises.categoryPicked,Ce=e=>e.exercises.maxPage,Ee=e=>e.exercises.exercisesPage,X=M([Y,ke,G],(e,i,n)=>{if(!n)return i.filter(s=>(s==null?void 0:s.filter)===e)}),q=e=>e.exercises.categoriesPage,J=e=>e.exercises.categoriesLimit,Se=M([X,q,J],(e,i,n)=>{let s=[];return(e==null?void 0:e.length)>0&&(s=e.slice((i-1)*n,i*n)),s}),Te=M([X,J],(e,i)=>{let n=[];const s=Math.ceil((e==null?void 0:e.length)/i);if(s>1){for(let r=1;r<=s;r++)n.push(r);return n}}),$e=()=>{const e=$(),i=j(Y),n=j(I),s=r=>{e(ee(r)),e(R(""))};return t.jsxs(we,{children:[n?t.jsx(ye,{children:n}):t.jsx(je,{children:"Exercises"}),t.jsxs(be,{children:[t.jsx(L,{type:"button",onClick:()=>s("Body parts"),theme:{kostil:i==="Body parts"?void 0:"true"},children:"Body parts"}),t.jsx(L,{type:"button",onClick:()=>s("Muscles"),theme:{kostil:i==="Muscles"?void 0:"true"},children:"Muscles"}),t.jsx(L,{type:"button",onClick:()=>s("Equipment"),theme:{kostil:i==="Equipment"?void 0:"true"},children:"Equipment"})]})]})},Ie=o.div`
padding-top: 40px;
padding-bottom: 80px;

@media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 32px;
    }

@media screen and (min-width: 1400px) {
    padding-bottom: 40px;
    }
`,Pe=o.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;


  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
    min-height: 650px;
  }

  @media screen and (min-width: 1400px) {
    min-height: 428px;
  }
`,ze=o.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  gap: 8px;

`;o.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

`;o.ul`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;o.li`
  margin-right: 8px;
`;const Le=o.li`
  position: relative;
  cursor: pointer;
`,Me=o.img`
  z-index: 0;
  display: block;

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  height: 206px;
  filter: brightness(50%);
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 224px;
    height: 206px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
    height: 206px;
  }
`,Re=o.div`
position : relative;
  height: 206px;
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`,Be=o.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  

  
`,We=o.div`
  margin: 0;
  color: #efede8;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,De=o.p`
  margin-top: 2px;
  margin-bottom: 0;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,Fe=({title:e,filter:i,photo:n})=>{const s=$(),[r,l]=c.useState(!1),[a,d]=c.useState(!1);c.useEffect(()=>{if(n){const h=new Image;h.src=n,h.onload=()=>{l(!0),d(!0)}}},[n]);const x=h=>{s(Q(h)),s(R(h))};return t.jsx(Le,{onClick:()=>x(e),children:t.jsxs(Re,{children:[!n||!r?t.jsx(pe,{}):t.jsx(Me,{src:n,alt:e}),t.jsx(Be,{style:{visibility:a?"visible":"hidden"},children:t.jsxs(We,{children:[e,t.jsx(De,{children:i})]})})]})})};function Ae(e){return Object.keys(e).length===0}function Oe(e=null){const i=c.useContext(he);return!i||Ae(i)?e:i}function K(e,i){const n=z({},i);return Object.keys(e).forEach(s=>{if(s.toString().match(/^(components|slots)$/))n[s]=z({},e[s],n[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){const r=e[s]||{},l=i[s];n[s]={},!l||!Object.keys(l)?n[s]=r:!r||!Object.keys(r)?n[s]=l:(n[s]=z({},l),Object.keys(r).forEach(a=>{n[s][a]=K(r[a],l[a])}))}else n[s]===void 0&&(n[s]=e[s])}),n}function _e(e){const{theme:i,name:n,props:s}=e;return!i||!i.components||!i.components[n]||!i.components[n].defaultProps?s:K(i.components[n].defaultProps,s)}const Ue=typeof window<"u"?c.useLayoutEffect:c.useEffect,Qe=Ue;function Ve(e,i,n,s,r){const[l,a]=c.useState(()=>r&&n?n(e).matches:s?s(e).matches:i);return Qe(()=>{let d=!0;if(!n)return;const x=n(e),h=()=>{d&&a(x.matches)};return h(),x.addListener(h),()=>{d=!1,x.removeListener(h)}},[e,n]),l}const Z=te["useSyncExternalStore"];function Ge(e,i,n,s,r){const l=c.useCallback(()=>i,[i]),a=c.useMemo(()=>{if(r&&n)return()=>n(e).matches;if(s!==null){const{matches:u}=s(e);return()=>u}return l},[l,e,s,r,n]),[d,x]=c.useMemo(()=>{if(n===null)return[l,()=>()=>{}];const u=n(e);return[()=>u.matches,m=>(u.addListener(m),()=>{u.removeListener(m)})]},[l,n,e]);return Z(x,d,a)}function Ye(e,i={}){const n=Oe(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:r=!1,matchMedia:l=s?window.matchMedia:null,ssrMatchMedia:a=null,noSsr:d=!1}=_e({name:"MuiUseMediaQuery",props:i,theme:n});let x=typeof e=="function"?e(n):e;return x=x.replace(/^@media( ?)/m,""),(Z!==void 0?Ge:Ve)(x,r,l,a,d)}const Xe=({handleSetExName:e})=>{const i=$(),n=j(Se),s=j(Te),r=j(q),l=Ye("(min-width: 768px) and (max-width: 1440px)");return c.useEffect(()=>{i(l?W(9):W(10))},[i,l]),c.useEffect(()=>{i(ie())},[i]),t.jsxs("div",{children:[t.jsx(Pe,{children:n==null?void 0:n.map(a=>t.jsx(Fe,{handleSetExName:e,filter:a.filter,title:a.name,photo:a.imgURL},a._id))}),t.jsx(ze,{children:s==null?void 0:s.map(a=>t.jsx(xe,{children:t.jsxs("div",{className:"radio",children:[t.jsx("input",{className:"radio-input",type:"radio",id:a,value:a,checked:r===a,onChange:()=>i(ne(a))}),t.jsx("label",{className:"radio-label",htmlFor:a})]})},a))})]})};o.div`
  width: 335px;
  height: 858px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;const qe=o.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`,Je=o.div`
  display: flex;
  width: 270px;
  height: 226px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: linear-gradient(
    0deg,
    rgba(4, 4, 4, 0.2) 0%,
    rgba(4, 4, 4, 0.2) 100%
  );
  margin-top: 48px;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,Ke=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,Ze=o.button`
  
  border-radius: 5px;
  display: flex;
  background: #e6533c;
  margin-top: 14px;
  outline: none;
  padding: 0;
  width: 24px;
  height: 24px;
  
  border-radius: 5px;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,He=o.svg`
 width: 24px;
  height: 24px;
`,Ne=o.p`
  color: rgba(239, 237, 232, 0.4);

  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 4px;

  @media (min-width: 768px) {
  }
`;o.ul`
  display: flex;
  padding: 12px 80px 12px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;const et=o.p`
  color: rgba(239, 237, 232, 0.4);

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  &::first-letter {
    text-transform: uppercase;
  }
`,tt=o.p`
  color: #efede8;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28;
  align-items: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  &::first-letter {
    text-transform: uppercase;
  }
`,it=o.ul`
  display: flex;
  width: 302px;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;

  @media (min-width: 768px) {
    width: 345px;
  }
`,nt=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-items: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,st=o.li`
  display: flex;
  width: 147px;
  height: 62px;
  justify-content: flex-start;
  padding-left: 18px;
  align-items: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  gap: 32px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  padding: 10px;

  @media (min-width: 768px) {
    width: 168px;
    height: 70px;
  }
`,rt=o.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,ot=o.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,at=o.p`
  color: #e6533c;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,lt=o.button`
  cursor: pointer;

  display: inline-flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 12px;
  background: ${e=>e.theme.colors.orangeColor};
  margin-right: auto;
  margin-top: 24px;

  transition: background-color 200ms ease-out;

  @media (min-width: 768px) {
    margin-top: 176px;
    margin-left: 200px;
    padding: 14px 32px;
  }

  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    background-color: #ef8964;
    border-color: #ef8964;
  }

  &:disabled {
    color: rgba(239, 237, 232, 0.6);
  }
`,ct=o.span`
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`,D=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;var F=typeof window>"u"?c.useEffect:c.useLayoutEffect,dt=({isPlaying:e,duration:i,startAt:n=0,updateInterval:s=0,onComplete:r,onUpdate:l})=>{let[a,d]=c.useState(n),x=c.useRef(0),h=c.useRef(n),u=c.useRef(n*-1e3),m=c.useRef(null),g=c.useRef(null),y=c.useRef(null),v=f=>{let b=f/1e3;if(g.current===null){g.current=b,m.current=requestAnimationFrame(v);return}let p=b-g.current,w=x.current+p;g.current=b,x.current=w;let E=h.current+(s===0?w:(w/s|0)*s),P=h.current+w,B=typeof i=="number"&&P>=i;d(B?i:E),B||(m.current=requestAnimationFrame(v))},k=()=>{m.current&&cancelAnimationFrame(m.current),y.current&&clearTimeout(y.current),g.current=null},C=c.useCallback(f=>{k(),x.current=0;let b=typeof f=="number"?f:n;h.current=b,d(b),e&&(m.current=requestAnimationFrame(v))},[e,n]);return F(()=>{if(l==null||l(a),i&&a>=i){u.current+=i*1e3;let{shouldRepeat:f=!1,delay:b=0,newStartAt:p}=(r==null?void 0:r(u.current/1e3))||{};f&&(y.current=setTimeout(()=>C(p),b*1e3))}},[a,i]),F(()=>(e&&(m.current=requestAnimationFrame(v)),k),[e,i,s]),{elapsedTime:a,reset:C}},pt=(e,i,n)=>{let s=e/2,r=i/2,l=s-r,a=2*l,d=n==="clockwise"?"1,0":"0,1",x=2*Math.PI*l;return{path:`m ${s},${r} a ${l},${l} 0 ${d} 0,${a} a ${l},${l} 0 ${d} 0,-${a}`,pathLength:x}},A=(e,i)=>e===0||e===i?0:typeof i=="number"?e-i:0,xt=e=>({position:"relative",width:e,height:e}),ht={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},H=(e,i,n,s,r)=>{if(s===0)return i;let l=(r?s-e:e)/s;return i+n*l},O=e=>{var i,n;return(n=(i=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(s,r,l,a)=>`#${r}${r}${l}${l}${a}${a}`).substring(1).match(/.{2}/g))==null?void 0:i.map(s=>parseInt(s,16)))!=null?n:[]},mt=(e,i)=>{var n;let{colors:s,colorsTime:r,isSmoothColorTransition:l=!0}=e;if(typeof s=="string")return s;let a=(n=r==null?void 0:r.findIndex((g,y)=>g>=i&&i>=r[y+1]))!=null?n:-1;if(!r||a===-1)return s[0];if(!l)return s[a];let d=r[a]-i,x=r[a]-r[a+1],h=O(s[a]),u=O(s[a+1]),m=!!e.isGrowing;return`rgb(${h.map((g,y)=>H(d,g,u[y]-g,x,m)|0).join(",")})`},ut=e=>{let{duration:i,initialRemainingTime:n,updateInterval:s,size:r=180,strokeWidth:l=12,trailStrokeWidth:a,isPlaying:d=!1,isGrowing:x=!1,rotation:h="clockwise",onComplete:u,onUpdate:m}=e,g=c.useRef(),y=Math.max(l,a??0),{path:v,pathLength:k}=pt(r,y,h),{elapsedTime:C}=dt({isPlaying:d,duration:i,startAt:A(i,n),updateInterval:s,onUpdate:typeof m=="function"?b=>{let p=Math.ceil(i-b);p!==g.current&&(g.current=p,m(p))}:void 0,onComplete:typeof u=="function"?b=>{var p;let{shouldRepeat:w,delay:E,newInitialRemainingTime:P}=(p=u(b))!=null?p:{};if(w)return{shouldRepeat:w,delay:E,newStartAt:A(i,P)}}:void 0}),f=i-C;return{elapsedTime:C,path:v,pathLength:k,remainingTime:Math.ceil(f),rotation:h,size:r,stroke:mt(e,f),strokeDashoffset:H(C,0,k,i,x),strokeWidth:l}},N=e=>{let{children:i,strokeLinecap:n,trailColor:s,trailStrokeWidth:r}=e,{path:l,pathLength:a,stroke:d,strokeDashoffset:x,remainingTime:h,elapsedTime:u,size:m,strokeWidth:g}=ut(e);return T.createElement("div",{style:xt(m)},T.createElement("svg",{viewBox:`0 0 ${m} ${m}`,width:m,height:m,xmlns:"http://www.w3.org/2000/svg"},T.createElement("path",{d:l,fill:"none",stroke:s??"#d9d9d9",strokeWidth:r??g}),T.createElement("path",{d:l,fill:"none",stroke:d,strokeLinecap:n??"round",strokeWidth:g,strokeDasharray:a,strokeDashoffset:x})),typeof i=="function"&&T.createElement("div",{style:ht},i({remainingTime:h,elapsedTime:u,color:d})))};N.displayName="CountdownCircleTimer";const gt=({onToogle:e,exerciseInfo:i,setIsSuccessOpen:n,setWorkoutDoneInfo:s})=>{const r=i.time*60,[l,a]=c.useState(!1),[d,x]=c.useState(0),[h,u]=c.useState(0),[m,g]=c.useState(r),y=$();function v(p){const w=Math.floor(p/60),E=p%60;return`${w}:${E<10?"0":""}${E}`}const k=Math.round(i.burnedCalories/r*100)/100;c.useEffect(()=>{let p;return l&&m!==d?p=setInterval(()=>{x(w=>w+1),u(w=>w+k)},1e3):d===m&&(a(!1),g(w=>w+r)),()=>clearInterval(p)},[r,a,x,l,d,u,k,m]);const C=()=>{a(p=>!p)},f=v(d),b=()=>{if(l||d<1){se.error("Impossible to add workout. Finish working out before adding!");return}const p={exerciseId:i._id,time:Math.ceil(d/60),calories:Math.ceil(h)};y(re(p)),s({time:p.time,calories:p.calories}),n(),e(),console.log(p)};return t.jsx(V,{onClose:e,modalStyles:{width:"335px",height:"858px",flexDirection:"column",alignItems:"center",display:"flex",padding:"0"},modalTabletStyles:{width:"694px",height:"550px",display:"flex",flexDirection:"inherit",gap:"16px",margin:"0px",alignItems:"flex-start"},children:t.jsxs(t.Fragment,{children:[t.jsxs(D,{children:[t.jsx(Je,{children:t.jsx(qe,{src:i.gifUrl,alt:"Working out"})}),t.jsxs(Ke,{children:[t.jsx(Ne,{children:"Time"}),t.jsx(N,{isPlaying:l,duration:r,size:125,colors:"#E6533C",trailColor:"#EFEDE81A",strokeWidth:4,onComplete:()=>{if(l)return{shouldRepeat:!0}},children:()=>t.jsx("div",{style:{display:"flex",flexDirection:"column",color:"white"},children:t.jsx("div",{children:f})})})]}),t.jsx(Ze,{type:"button",onClick:C,children:t.jsx(He,{children:l?t.jsx("use",{href:`${S}#pause-square`}):t.jsx("use",{href:`${S}#play`})})}),t.jsxs(rt,{children:[t.jsx(ot,{children:"Burned calories:"}),t.jsx(at,{children:Math.round(h*100)/100})]})]}),t.jsxs(D,{children:[t.jsx(it,{children:Object.entries(i).filter(([p])=>p!=="gifUrl"&&p!=="burnedCalories"&&p!=="_id").map(([p,w])=>t.jsx(st,{children:t.jsxs(nt,{children:[t.jsx(et,{children:p}),t.jsx(tt,{children:w})]})},w))}),t.jsx(lt,{onClick:b,children:t.jsx(ct,{children:"Add to diary"})})]})]})})},ft="/project-Power-7/assets/thumb-up-1x-575f03e5.png",wt=o(V)`

`,bt=o.button`
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
`,yt=o.img`
  width: 118px;
  height: 73px;
  margin-bottom: 27px;
  margin-top: 48px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 64px;
  }
`,jt=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,vt=o.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`,kt=o.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,_=o.li`
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
`,U=o.span`
  color: #e6533c;
`,Ct=o.div`
  margin-bottom: 16px;
`,Et=o(oe)`
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
`,St=({time:e,calories:i,onClose:n})=>t.jsx(wt,{modalStyles:{maxWidth:"430px",width:"100%",height:"384px"},modalTabletStyles:{width:"430px",height:"439px"},modalDesktopStyles:{width:"430px",height:"439px"},onClose:n,children:t.jsxs(jt,{children:[t.jsx(yt,{src:ft,alt:"Thumb Up"}),t.jsxs(kt,{children:[t.jsx(vt,{children:"Well done"}),t.jsxs("ul",{children:[t.jsxs(_,{children:["Your time:",t.jsxs(U,{children:[e||0," minutes"]})]}),t.jsxs(_,{children:["Burned calories:",t.jsx(U,{children:i||0})]})]})]}),t.jsx(Ct,{children:t.jsx(bt,{onClick:n,children:"Next exercise "})}),t.jsxs(Et,{to:"/diary",children:["To the diary",t.jsx("svg",{width:" 16px",height:"16px",children:t.jsx("use",{href:`${S}#arrow_gray`})})]})]})}),Tt=o.li`
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
`,$t=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 27px;
  }
`,It=o.h3`
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
`,Pt=o.svg`
  
  

  width: 20px;
  height: 20px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,zt=o.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`,Lt=o.h2`
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
`,Mt=o.ul`
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
`,Rt=o.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,Bt=o.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Wt=({card:e,toogleModal:i})=>t.jsxs(Tt,{children:[t.jsxs($t,{children:[t.jsx(It,{children:"WORKOUT"}),t.jsxs(ae,{style:{display:"flex",alignItems:"center"},onClick:()=>i(e),children:[t.jsx(Bt,{children:"Start"}),t.jsx(Rt,{children:t.jsxs("svg",{fill:"#efede8",children:[" ",t.jsx("use",{href:S+"#icon-arrow"})]})})]})]}),t.jsxs(zt,{children:[t.jsx(Pt,{children:t.jsx("svg",{children:t.jsx("use",{href:`${S}#icon-icon`})})}),t.jsx(Lt,{children:e.name})]}),t.jsxs(Mt,{children:[t.jsxs("li",{children:["Burned calories:",t.jsx("span",{children:e.burnedCalories})]}),t.jsxs("li",{children:["Body part: ",t.jsx("span",{children:e.bodyPart})]}),t.jsxs("li",{children:["Target:",t.jsx("span",{children:e.target})]})]})]},e._id),Dt=()=>{const e=$(),[i,n]=c.useState({time:0,calories:0}),[s,r]=c.useState(!1),[l,a]=c.useState(!1),[d,x]=c.useState(null),h=f=>{a(b=>!b),x(f)},u=j(ve),m=j(G),g=j(I),y=j(Ee),v=j(Ce),k=()=>{e(R("")),e(le())},C=()=>{e(ce(1)),e(Q(g))};return t.jsxs("div",{style:{position:"relative"},children:[t.jsxs(me,{onClick:()=>k(),children:[t.jsx("svg",{width:"20",height:"20",stroke:"rgb(239, 237, 232, 0.4)",children:t.jsx("use",{href:`${S}#icon-arrow-left`})}),"Back"]}),t.jsx(ue,{children:t.jsxs(ge,{children:[u==null?void 0:u.map(f=>t.jsx(Wt,{card:f,toogleModal:h},f._id)),!m&&v!==y&&t.jsx(fe,{type:"button",onClick:()=>C(),children:"Load More"})]})}),l&&t.jsx(gt,{onToogle:h,exerciseInfo:d,setIsSuccessOpen:()=>r(f=>!f),setWorkoutDoneInfo:n}),s&&t.jsx(St,{onClose:()=>r(f=>!f),time:i.time,calories:i.calories})]})},Ft="/project-Power-7/assets/exercises-desktop-1x-6d697564.png",At="/project-Power-7/assets/exercises-desktop-2x-a7c1451e.png",Ot=o.div`
  @media (min-width: 1440px) {
    
    z-index: 0;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: bottom right;
    background-image: ${e=>e.theme.activeCategory?`image-set(url(${Ft}) 1x, url(${At}) 2x)`:"none"};
  }
`,_t=({children:e})=>{const i=j(I);return t.jsx(Ot,{theme:{activeCategory:i},children:e})},Xt=()=>{const e=j(I);return t.jsx(_t,{children:t.jsx(de,{children:t.jsxs(Ie,{children:[t.jsx($e,{}),e?t.jsx(Dt,{}):t.jsx(Xe,{})]})})})};export{Xt as default};
