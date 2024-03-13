import{u as l,I as B,a as P,b as j,j as r,Q as oe,S as z,r as d,T as N,E as se,U as Y,V as ae,W as le,R as T,i as L,X as ce,Y as de,L as pe,Z as he,_ as ue,$ as fe,C as xe}from"./index-fec61946.js";import{D as me}from"./DiaryLoader-dfe1f018.js";import{e as ge}from"./UserForm.styled-31fb0b02.js";import{T as we,_ as M,C as q,a as be,M as ve,b as ye,B as je}from"./ExercisesList.styled-5a2e3545.js";import"./formik.esm-b64eb7c2.js";const Ee=l.div`
  max-width: 1440px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 64px;
  }
`,Se=l.div`
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,R=l.button`
  padding: 0;
  background-color: inherit;
  color: ${t=>t.theme.kostil?"rgba(239, 237, 232, 0.40)":"#efede8"};
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


  ${t=>t.theme.kostil} &&::after {
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

`,Te=l.h2`
  color: ${t=>t.theme.colors.whiteColor};
  font-size: 24px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,ke=l.h2`
  color: ${t=>t.theme.colors.whiteColor};
  font-size: 24px;
  margin-bottom: 20px;
  color: ${t=>t.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,X=t=>t.exercises.loading,K=t=>t.exercises.filter,Ce=t=>t.exercises.exercises,Le=t=>t.exercises.categories,_=t=>t.exercises.categoryPicked,De=t=>t.exercises.maxPage,Pe=t=>t.exercises.exercisesPage,Z=B([K,Le,X],(t,i,n)=>{if(!n)return i.filter(e=>(e==null?void 0:e.filter)===t)}),J=t=>t.exercises.categoriesPage,ee=t=>t.exercises.categoriesLimit,_e=B([Z,J,ee],(t,i,n)=>{let e=[];return(t==null?void 0:t.length)>0&&(e=t.slice((i-1)*n,i*n)),e}),$e=B([Z,ee],(t,i)=>{let n=[];const e=Math.ceil((t==null?void 0:t.length)/i);if(e>1){for(let o=1;o<=e;o++)n.push(o);return n}}),Me=()=>{const t=P(),i=j(K),n=j(_),e=o=>{t(oe(o)),t(z(""))};return r.jsxs(Ee,{children:[n?r.jsx(Te,{children:n}):r.jsx(ke,{children:"Exercises"}),r.jsxs(Se,{children:[r.jsx(R,{type:"button",onClick:()=>e("Body parts"),theme:{kostil:i==="Body parts"?void 0:"true"},children:"Body parts"}),r.jsx(R,{type:"button",onClick:()=>e("Muscles"),theme:{kostil:i==="Muscles"?void 0:"true"},children:"Muscles"}),r.jsx(R,{type:"button",onClick:()=>e("Equipment"),theme:{kostil:i==="Equipment"?void 0:"true"},children:"Equipment"})]})]})},Re=l.div`
padding-top: 40px;
padding-bottom: 80px;

@media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 32px;
    }

@media screen and (min-width: 1400px) {
    padding-bottom: 40px;
    }
`,Ie=l.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  /* margin-left: auto;
  margin-right: auto; */

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
    min-height: 650px;
  }

  @media screen and (min-width: 1400px) {
    min-height: 428px;
  }
`,Be=l.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  gap: 8px;

`;l.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  /* ${t=>t.active&&{backgroundColor:"transparent"}} */
`;l.ul`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;l.li`
  margin-right: 8px;
`;const ze=l.li`
  position: relative;
  cursor: pointer;
`,Fe=l.img`
  z-index: 0;
  display: block;
  /* position: relative; */
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
`,Ye=l.div`
position : relative;
  height: 206px;
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`,Oe=l.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  /* margin-top: 81px; */
  /* margin-bottom: 81px; */

  @media screen and (min-width: 768px) {
    /* margin-top: 77px; */
    /* margin-bottom: 77px; */
  }
`,We=l.div`
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
`,Ae=l.p`
  margin-top: 2px;
  margin-bottom: 0;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,Ue=({title:t,filter:i,photo:n})=>{const e=P(),[o,s]=d.useState(!1),[a,c]=d.useState(!1);d.useEffect(()=>{if(n){const p=new Image;p.src=n,p.onload=()=>{s(!0),c(!0)}}},[n]);const h=p=>{e(N(p)),e(z(p))};return r.jsx(ze,{onClick:()=>h(t),children:r.jsxs(Ye,{children:[!n||!o?r.jsx(me,{}):r.jsx(Fe,{src:n||images,alt:t}),r.jsx(Oe,{style:{visibility:a?"visible":"hidden"},children:r.jsxs(We,{children:[t,r.jsx(Ae,{children:i})]})})]})})};function He(t){return Object.keys(t).length===0}function Qe(t=null){const i=d.useContext(we);return!i||He(i)?t:i}function te(t,i){const n=M({},i);return Object.keys(t).forEach(e=>{if(e.toString().match(/^(components|slots)$/))n[e]=M({},t[e],n[e]);else if(e.toString().match(/^(componentsProps|slotProps)$/)){const o=t[e]||{},s=i[e];n[e]={},!s||!Object.keys(s)?n[e]=o:!o||!Object.keys(o)?n[e]=s:(n[e]=M({},s),Object.keys(o).forEach(a=>{n[e][a]=te(o[a],s[a])}))}else n[e]===void 0&&(n[e]=t[e])}),n}function Ve(t){const{theme:i,name:n,props:e}=t;return!i||!i.components||!i.components[n]||!i.components[n].defaultProps?e:te(i.components[n].defaultProps,e)}const Ge=typeof window<"u"?d.useLayoutEffect:d.useEffect,Ne=Ge;function qe(t,i,n,e,o){const[s,a]=d.useState(()=>o&&n?n(t).matches:e?e(t).matches:i);return Ne(()=>{let c=!0;if(!n)return;const h=n(t),p=()=>{c&&a(h.matches)};return p(),h.addListener(p),()=>{c=!1,h.removeListener(p)}},[t,n]),s}const ne=se["useSyncExternalStore"];function Xe(t,i,n,e,o){const s=d.useCallback(()=>i,[i]),a=d.useMemo(()=>{if(o&&n)return()=>n(t).matches;if(e!==null){const{matches:x}=e(t);return()=>x}return s},[s,t,e,o,n]),[c,h]=d.useMemo(()=>{if(n===null)return[s,()=>()=>{}];const x=n(t);return[()=>x.matches,u=>(x.addListener(u),()=>{x.removeListener(u)})]},[s,n,t]);return ne(h,c,a)}function Ke(t,i={}){const n=Qe(),e=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:o=!1,matchMedia:s=e?window.matchMedia:null,ssrMatchMedia:a=null,noSsr:c=!1}=Ve({name:"MuiUseMediaQuery",props:i,theme:n});let h=typeof t=="function"?t(n):t;return h=h.replace(/^@media( ?)/m,""),(ne!==void 0?Xe:qe)(h,o,s,a,c)}const Ze=({handleSetExName:t})=>{const i=P(),n=j(_e),e=j($e),o=j(J),s=Ke("(min-width: 768px) and (max-width: 1440px)");return d.useEffect(()=>{i(s?Y(9):Y(10))},[i,s]),d.useEffect(()=>{i(ae())},[i]),r.jsxs("div",{children:[r.jsx(Ie,{children:n==null?void 0:n.map(a=>r.jsx(Ue,{handleSetExName:t,filter:a.filter,title:a.name,photo:a.imgURL},a._id))}),r.jsx(Be,{children:e==null?void 0:e.map(a=>r.jsx(ge,{children:r.jsxs("div",{className:"radio",children:[r.jsx("input",{className:"radio-input",type:"radio",id:a,value:a,checked:o===a,onChange:()=>i(le(a))}),r.jsx("label",{className:"radio-label",htmlFor:a})]})},a))})]})};l.div`
  width: 335px;
  height: 858px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;const Je=l.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`,et=l.div`
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
`,tt=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,nt=l.button`
  /* padding: 5px; */
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
`,it=l.svg`
 width: 24px;
  height: 24px;
`,rt=l.p`
  color: rgba(239, 237, 232, 0.4);
  /* font-feature-settings: 'clig' off, 'liga' off; */
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 4px;

  @media (min-width: 768px) {
  }
`;l.ul`
  display: flex;
  padding: 12px 80px 12px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;const ot=l.p`
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  &::first-letter {
    text-transform: uppercase;
  }
`,st=l.p`
  color: #efede8;
  /* font-feature-settings: 'clig' off, 'liga' off; */
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
`,at=l.ul`
  display: flex;
  width: 302px;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;

  @media (min-width: 768px) {
    width: 345px;
  }
`,lt=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-items: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ct=l.li`
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
`,dt=l.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,pt=l.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,ht=l.p`
  color: #e6533c;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,ut=l.button`
  cursor: pointer;

  display: inline-flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 12px;
  background: ${t=>t.theme.colors.orangeColor};
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
`,ft=l.span`
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`,O=l.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;var W=typeof window>"u"?d.useEffect:d.useLayoutEffect,xt=({isPlaying:t,duration:i,startAt:n=0,updateInterval:e=0,onComplete:o,onUpdate:s})=>{let[a,c]=d.useState(n),h=d.useRef(0),p=d.useRef(n),x=d.useRef(n*-1e3),u=d.useRef(null),m=d.useRef(null),b=d.useRef(null),y=g=>{let v=g/1e3;if(m.current===null){m.current=v,u.current=requestAnimationFrame(y);return}let f=v-m.current,w=h.current+f;m.current=v,h.current=w;let k=p.current+(e===0?w:(w/e|0)*e),$=p.current+w,F=typeof i=="number"&&$>=i;c(F?i:k),F||(u.current=requestAnimationFrame(y))},E=()=>{u.current&&cancelAnimationFrame(u.current),b.current&&clearTimeout(b.current),m.current=null},S=d.useCallback(g=>{E(),h.current=0;let v=typeof g=="number"?g:n;p.current=v,c(v),t&&(u.current=requestAnimationFrame(y))},[t,n]);return W(()=>{if(s==null||s(a),i&&a>=i){x.current+=i*1e3;let{shouldRepeat:g=!1,delay:v=0,newStartAt:f}=(o==null?void 0:o(x.current/1e3))||{};g&&(b.current=setTimeout(()=>S(f),v*1e3))}},[a,i]),W(()=>(t&&(u.current=requestAnimationFrame(y)),E),[t,i,e]),{elapsedTime:a,reset:S}},mt=(t,i,n)=>{let e=t/2,o=i/2,s=e-o,a=2*s,c=n==="clockwise"?"1,0":"0,1",h=2*Math.PI*s;return{path:`m ${e},${o} a ${s},${s} 0 ${c} 0,${a} a ${s},${s} 0 ${c} 0,-${a}`,pathLength:h}},A=(t,i)=>t===0||t===i?0:typeof i=="number"?t-i:0,gt=t=>({position:"relative",width:t,height:t}),wt={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},ie=(t,i,n,e,o)=>{if(e===0)return i;let s=(o?e-t:t)/e;return i+n*s},U=t=>{var i,n;return(n=(i=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,o,s,a)=>`#${o}${o}${s}${s}${a}${a}`).substring(1).match(/.{2}/g))==null?void 0:i.map(e=>parseInt(e,16)))!=null?n:[]},bt=(t,i)=>{var n;let{colors:e,colorsTime:o,isSmoothColorTransition:s=!0}=t;if(typeof e=="string")return e;let a=(n=o==null?void 0:o.findIndex((m,b)=>m>=i&&i>=o[b+1]))!=null?n:-1;if(!o||a===-1)return e[0];if(!s)return e[a];let c=o[a]-i,h=o[a]-o[a+1],p=U(e[a]),x=U(e[a+1]),u=!!t.isGrowing;return`rgb(${p.map((m,b)=>ie(c,m,x[b]-m,h,u)|0).join(",")})`},vt=t=>{let{duration:i,initialRemainingTime:n,updateInterval:e,size:o=180,strokeWidth:s=12,trailStrokeWidth:a,isPlaying:c=!1,isGrowing:h=!1,rotation:p="clockwise",onComplete:x,onUpdate:u}=t,m=d.useRef(),b=Math.max(s,a??0),{path:y,pathLength:E}=mt(o,b,p),{elapsedTime:S}=xt({isPlaying:c,duration:i,startAt:A(i,n),updateInterval:e,onUpdate:typeof u=="function"?v=>{let f=Math.ceil(i-v);f!==m.current&&(m.current=f,u(f))}:void 0,onComplete:typeof x=="function"?v=>{var f;let{shouldRepeat:w,delay:k,newInitialRemainingTime:$}=(f=x(v))!=null?f:{};if(w)return{shouldRepeat:w,delay:k,newStartAt:A(i,$)}}:void 0}),g=i-S;return{elapsedTime:S,path:y,pathLength:E,remainingTime:Math.ceil(g),rotation:p,size:o,stroke:bt(t,g),strokeDashoffset:ie(S,0,E,i,h),strokeWidth:s}},re=t=>{let{children:i,strokeLinecap:n,trailColor:e,trailStrokeWidth:o}=t,{path:s,pathLength:a,stroke:c,strokeDashoffset:h,remainingTime:p,elapsedTime:x,size:u,strokeWidth:m}=vt(t);return T.createElement("div",{style:gt(u)},T.createElement("svg",{viewBox:`0 0 ${u} ${u}`,width:u,height:u,xmlns:"http://www.w3.org/2000/svg"},T.createElement("path",{d:s,fill:"none",stroke:e??"#d9d9d9",strokeWidth:o??m}),T.createElement("path",{d:s,fill:"none",stroke:c,strokeLinecap:n??"round",strokeWidth:m,strokeDasharray:a,strokeDashoffset:h})),typeof i=="function"&&T.createElement("div",{style:wt},i({remainingTime:p,elapsedTime:x,color:c})))};re.displayName="CountdownCircleTimer";const yt=({onToogle:t,exerciseInfo:i,setIsSuccessOpen:n,setWorkoutDoneInfo:e})=>{const o=i.time*60,[s,a]=d.useState(!1),[c,h]=d.useState(0),[p,x]=d.useState(0),[u,m]=d.useState(o),b=P();function y(f){const w=Math.floor(f/60),k=f%60;return`${w}:${k<10?"0":""}${k}`}const E=Math.round(i.burnedCalories/o*100)/100;d.useEffect(()=>{let f;return s&&u!==c?f=setInterval(()=>{h(w=>w+1),x(w=>w+E)},1e3):c===u&&(a(!1),m(w=>w+o)),()=>clearInterval(f)},[o,a,h,s,c,x,E,u]);const S=()=>{a(f=>!f)},g=y(c),v=()=>{if(s||c<1){ce.error("Impossible to add workout. Finish working out before adding!");return}const f={exerciseId:i._id,time:Math.ceil(c/60),calories:Math.ceil(p)};b(de(f)),e({time:f.time,calories:f.calories}),n(),t(),console.log(f)};return r.jsx(q,{onClose:t,modalStyles:{width:"335px",height:"858px",flexDirection:"column",alignItems:"center",display:"flex",padding:"0"},modalTabletStyles:{width:"694px",height:"550px",display:"flex",flexDirection:"inherit",gap:"16px",margin:"0px",alignItems:"flex-start"},children:r.jsxs(r.Fragment,{children:[r.jsxs(O,{children:[r.jsx(et,{children:r.jsx(Je,{src:i.gifUrl,alt:"Working out"})}),r.jsxs(tt,{children:[r.jsx(rt,{children:"Time"}),r.jsx(re,{isPlaying:s,duration:o,size:125,colors:"#E6533C",trailColor:"#EFEDE81A",strokeWidth:4,onComplete:()=>{if(s)return{shouldRepeat:!0}},children:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",color:"white"},children:r.jsx("div",{children:g})})})]}),r.jsx(nt,{type:"button",onClick:S,children:r.jsx(it,{children:s?r.jsx("use",{href:`${L}#pause-square`}):r.jsx("use",{href:`${L}#play`})})}),r.jsxs(dt,{children:[r.jsx(pt,{children:"Burned calories:"}),r.jsx(ht,{children:Math.round(p*100)/100})]})]}),r.jsxs(O,{children:[r.jsx(at,{children:Object.entries(i).filter(([f,w])=>f!=="gifUrl"&&f!=="burnedCalories"&&f!=="_id").map(([f,w])=>r.jsx(ct,{children:r.jsxs(lt,{children:[r.jsx(ot,{children:f}),r.jsx(st,{children:w})]})},w))}),r.jsx(ut,{onClick:v,children:r.jsx(ft,{children:"Add to diary"})})]})]})})},jt="/project-Power-7/assets/thumb-up-1x-575f03e5.png",Et=l(q)`

`,St=l.button`
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
`,Tt=l.img`
  width: 118px;
  height: 73px;
  margin-bottom: 27px;
  margin-top: 48px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 64px;
  }
`,kt=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ct=l.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`,Lt=l.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,H=l.li`
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
`,Q=l.span`
  color: #e6533c;
`,Dt=l.div`
  margin-bottom: 16px;
`,Pt=l(pe)`
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
`,_t=({time:t,calories:i,onClick:n,onClose:e})=>r.jsx(Et,{modalStyles:{maxWidth:"430px",width:"100%",height:"384px"},modalTabletStyles:{width:"430px",height:"439px"},modalDesktopStyles:{width:"430px",height:"439px"},onClose:e,children:r.jsxs(kt,{children:[r.jsx(Tt,{src:jt,alt:"Thumb Up"}),r.jsxs(Lt,{children:[r.jsx(Ct,{children:"Well done"}),r.jsxs("ul",{children:[r.jsxs(H,{children:["Your time:",r.jsxs(Q,{children:[t||0," minutes"]})]}),r.jsxs(H,{children:["Burned calories:",r.jsx(Q,{children:i||0})]})]})]}),r.jsx(Dt,{children:r.jsx(St,{onClick:e,children:"Next exercise "})}),r.jsxs(Pt,{to:"/diary",children:["To the diary",r.jsx("svg",{width:" 16px",height:"16px",children:r.jsx("use",{href:`${L}#arrow_gray`})})]})]})}),$t=l.li`
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
`,Mt=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 27px;
  }
`,Rt=l.h3`
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
`,It=l.svg`
  
  

  width: 20px;
  height: 20px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Bt=l.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`,zt=l.h2`
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
`,Ft=l.ul`
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
`,Yt=l.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,Ot=l.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Wt=({card:t,toogleModal:i})=>r.jsxs($t,{children:[r.jsxs(Mt,{children:[r.jsx(Rt,{children:"WORKOUT"}),r.jsxs(he,{style:{display:"flex",alignItems:"center"},onClick:()=>i(t),children:[r.jsx(Ot,{children:"Start"}),r.jsx(Yt,{children:r.jsxs("svg",{fill:"#efede8",children:[" ",r.jsx("use",{href:L+"#icon-arrow"})]})})]})]}),r.jsxs(Bt,{children:[r.jsx(It,{children:r.jsx("svg",{children:r.jsx("use",{href:`${L}#icon-icon`})})}),r.jsx(zt,{children:t.name})]}),r.jsxs(Ft,{children:[r.jsxs("li",{children:["Burned calories:",r.jsx("span",{children:t.burnedCalories})]}),r.jsxs("li",{children:["Body part: ",r.jsx("span",{children:t.bodyPart})]}),r.jsxs("li",{children:["Target:",r.jsx("span",{children:t.target})]})]})]},t._id);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var I=function(t,i){return I=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o])},I(t,i)};function At(t,i){I(t,i);function n(){this.constructor=t}t.prototype=i===null?Object.create(i):(n.prototype=i.prototype,new n)}var D=function(){return D=Object.assign||function(i){for(var n,e=1,o=arguments.length;e<o;e++){n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i},D.apply(this,arguments)};function Ut(t,i,n,e){var o,s=!1,a=0;function c(){o&&clearTimeout(o)}function h(){c(),s=!0}typeof i!="boolean"&&(e=n,n=i,i=void 0);function p(){var x=this,u=Date.now()-a,m=arguments;if(s)return;function b(){a=Date.now(),n.apply(x,m)}function y(){o=void 0}e&&!o&&b(),c(),e===void 0&&u>t?b():i!==!0&&(o=setTimeout(e?y:b,e===void 0?t-u:t))}return p.cancel=h,p}var C={Pixel:"Pixel",Percent:"Percent"},V={unit:C.Percent,value:.8};function G(t){return typeof t=="number"?{unit:C.Percent,value:t*100}:typeof t=="string"?t.match(/^(\d*(\.\d+)?)px$/)?{unit:C.Pixel,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:C.Percent,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),V):(console.warn("scrollThreshold should be string or number"),V)}(function(t){At(i,t);function i(n){var e=t.call(this,n)||this;return e.lastScrollTop=0,e.actionTriggered=!1,e.startY=0,e.currentY=0,e.dragging=!1,e.maxPullDownDistance=0,e.getScrollableTarget=function(){return e.props.scrollableTarget instanceof HTMLElement?e.props.scrollableTarget:typeof e.props.scrollableTarget=="string"?document.getElementById(e.props.scrollableTarget):(e.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},e.onStart=function(o){e.lastScrollTop||(e.dragging=!0,o instanceof MouseEvent?e.startY=o.pageY:o instanceof TouchEvent&&(e.startY=o.touches[0].pageY),e.currentY=e.startY,e._infScroll&&(e._infScroll.style.willChange="transform",e._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},e.onMove=function(o){e.dragging&&(o instanceof MouseEvent?e.currentY=o.pageY:o instanceof TouchEvent&&(e.currentY=o.touches[0].pageY),!(e.currentY<e.startY)&&(e.currentY-e.startY>=Number(e.props.pullDownToRefreshThreshold)&&e.setState({pullToRefreshThresholdBreached:!0}),!(e.currentY-e.startY>e.maxPullDownDistance*1.5)&&e._infScroll&&(e._infScroll.style.overflow="visible",e._infScroll.style.transform="translate3d(0px, "+(e.currentY-e.startY)+"px, 0px)")))},e.onEnd=function(){e.startY=0,e.currentY=0,e.dragging=!1,e.state.pullToRefreshThresholdBreached&&(e.props.refreshFunction&&e.props.refreshFunction(),e.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){e._infScroll&&(e._infScroll.style.overflow="auto",e._infScroll.style.transform="none",e._infScroll.style.willChange="unset")})},e.onScrollListener=function(o){typeof e.props.onScroll=="function"&&setTimeout(function(){return e.props.onScroll&&e.props.onScroll(o)},0);var s=e.props.height||e._scrollableNode?o.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!e.actionTriggered){var a=e.props.inverse?e.isElementAtTop(s,e.props.scrollThreshold):e.isElementAtBottom(s,e.props.scrollThreshold);a&&e.props.hasMore&&(e.actionTriggered=!0,e.setState({showLoader:!0}),e.props.next&&e.props.next()),e.lastScrollTop=s.scrollTop}},e.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:n.dataLength},e.throttledOnScrollListener=Ut(150,e.onScrollListener).bind(e),e.onStart=e.onStart.bind(e),e.onMove=e.onMove.bind(e),e.onEnd=e.onEnd.bind(e),e}return i.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},i.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},i.prototype.componentDidUpdate=function(n){this.props.dataLength!==n.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},i.getDerivedStateFromProps=function(n,e){var o=n.dataLength!==e.prevDataLength;return o?D(D({},e),{prevDataLength:n.dataLength}):null},i.prototype.isElementAtTop=function(n,e){e===void 0&&(e=.8);var o=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,s=G(e);return s.unit===C.Pixel?n.scrollTop<=s.value+o-n.scrollHeight+1:n.scrollTop<=s.value/100+o-n.scrollHeight+1},i.prototype.isElementAtBottom=function(n,e){e===void 0&&(e=.8);var o=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,s=G(e);return s.unit===C.Pixel?n.scrollTop+o>=n.scrollHeight-s.value:n.scrollTop+o>=s.value/100*n.scrollHeight},i.prototype.render=function(){var n=this,e=D({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),s=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return T.createElement("div",{style:s,className:"infinite-scroll-component__outerdiv"},T.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(a){return n._infScroll=a},style:e},this.props.pullDownToRefresh&&T.createElement("div",{style:{position:"relative"},ref:function(a){return n._pullDown=a}},T.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},i})(d.Component);const Ht=()=>{const t=P(),[i,n]=d.useState({time:0,calories:0}),[e,o]=d.useState(!1),[s,a]=d.useState(!1),[c,h]=d.useState(null),p=g=>{a(v=>!v),h(g)},x=j(Ce),u=j(X),m=j(_),b=j(Pe),y=j(De),E=()=>{t(z("")),t(ue())},S=()=>{t(fe(1)),t(N(m))};return r.jsxs("div",{style:{position:"relative"},children:[r.jsxs(be,{onClick:()=>E(),children:[r.jsx("svg",{width:"20",height:"20",stroke:"rgb(239, 237, 232, 0.4)",children:r.jsx("use",{href:`${L}#icon-arrow-left`})}),"Back"]}),r.jsxs(ve,{children:[r.jsx(ye,{children:x==null?void 0:x.map(g=>r.jsx(Wt,{card:g,toogleModal:p},g._id))}),!u&&y!==b&&r.jsx(je,{type:"button",onClick:()=>S(),children:"Load More"})]}),s&&r.jsx(yt,{onToogle:p,exerciseInfo:c,setIsSuccessOpen:()=>o(g=>!g),setWorkoutDoneInfo:n}),e&&r.jsx(_t,{onClose:()=>o(g=>!g),time:i.time,calories:i.calories})]})},Qt="/project-Power-7/assets/exercises-desktop-1x-6d697564.png",Vt="/project-Power-7/assets/exercises-desktop-2x-a7c1451e.png",Gt=l.div`
  @media (min-width: 1440px) {
    /* position: absolute; */
    /* left: 200px; */
    z-index: 0;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: bottom right;
    background-image: ${t=>t.theme.activeCategory?`image-set(url(${Qt}) 1x, url(${Vt}) 2x)`:"none"};
  }
`,Nt=({children:t})=>{const i=j(_);return r.jsx(Gt,{theme:{activeCategory:i},children:t})},en=()=>{const t=j(_);return r.jsx(Nt,{children:r.jsx(xe,{children:r.jsxs(Re,{children:[r.jsx(Me,{}),t?r.jsx(Ht,{}):r.jsx(Ze,{})]})})})};export{en as default};