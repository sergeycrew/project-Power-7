import{u as o,J as M,a as $,b as j,j as t,T as te,U as R,r as p,V,R as ie,W,X as ne,Y as se,x as T,i as S,Z as re,_ as oe,L as ae,$ as le,a0 as ce,a1 as de,C as pe}from"./index-8e017a00.js";import{D as xe}from"./DiaryLoader-d2c242d3.js";import{e as he}from"./UserForm.styled-7e1d25d1.js";import{T as me,_ as L,C as G,a as ue,M as ge,L as fe,b as we,B as be}from"./LoaderTrans-597d29f5.js";import"./formik.esm-77838a9c.js";const ye=o.div`
  max-width: 1440px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 64px;
  }
`,je=o.div`
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,z=o.button`
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

`,ve=o.h2`
  color: ${e=>e.theme.colors.whiteColor};
  font-size: 24px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,ke=o.h2`
  color: ${e=>e.theme.colors.whiteColor};
  font-size: 24px;
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,Y=e=>e.exercises.loading,X=e=>e.exercises.filter,Ce=e=>e.exercises.exercises,Ee=e=>e.exercises.categories,I=e=>e.exercises.categoryPicked,Se=e=>e.exercises.maxPage,Te=e=>e.exercises.exercisesPage,q=M([X,Ee,Y],(e,i,n)=>{if(!n)return i.filter(s=>(s==null?void 0:s.filter)===e)}),J=e=>e.exercises.categoriesPage,K=e=>e.exercises.categoriesLimit,$e=M([q,J,K],(e,i,n)=>{let s=[];return(e==null?void 0:e.length)>0&&(s=e.slice((i-1)*n,i*n)),s}),Ie=M([q,K],(e,i)=>{let n=[];const s=Math.ceil((e==null?void 0:e.length)/i);if(s>1){for(let r=1;r<=s;r++)n.push(r);return n}}),Pe=()=>{const e=$(),i=j(X),n=j(I),s=r=>{e(te(r)),e(R(""))};return t.jsxs(ye,{children:[n?t.jsx(ve,{children:n}):t.jsx(ke,{children:"Exercises"}),t.jsxs(je,{children:[t.jsx(z,{type:"button",onClick:()=>s("Body parts"),theme:{kostil:i==="Body parts"?void 0:"true"},children:"Body parts"}),t.jsx(z,{type:"button",onClick:()=>s("Muscles"),theme:{kostil:i==="Muscles"?void 0:"true"},children:"Muscles"}),t.jsx(z,{type:"button",onClick:()=>s("Equipment"),theme:{kostil:i==="Equipment"?void 0:"true"},children:"Equipment"})]})]})},Le=o.div`
padding-top: 40px;
padding-bottom: 80px;

@media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 32px;
    }

@media screen and (min-width: 1400px) {
    padding-bottom: 40px;
    }
`,ze=o.ul`
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
`,Me=o.div`
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
`;const Re=o.li`
  position: relative;
  cursor: pointer;
`,Be=o.img`
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
`,We=o.div`
position : relative;
  height: 206px;
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`,De=o.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  

  
`,Fe=o.div`
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
`,Ae=o.p`
  margin-top: 2px;
  margin-bottom: 0;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,Oe=({title:e,filter:i,photo:n})=>{const s=$(),[r,a]=p.useState(!1),[l,d]=p.useState(!1);p.useEffect(()=>{if(n){const h=new Image;h.src=n,h.onload=()=>{a(!0),d(!0)}}},[n]);const c=h=>{s(V(h)),s(R(h))};return t.jsx(Re,{onClick:()=>c(e),children:t.jsxs(We,{children:[!n||!r?t.jsx(xe,{}):t.jsx(Be,{src:n,alt:e}),t.jsx(De,{style:{visibility:l?"visible":"hidden"},children:t.jsxs(Fe,{children:[e,t.jsx(Ae,{children:i})]})})]})})};function _e(e){return Object.keys(e).length===0}function Ue(e=null){const i=p.useContext(me);return!i||_e(i)?e:i}function Z(e,i){const n=L({},i);return Object.keys(e).forEach(s=>{if(s.toString().match(/^(components|slots)$/))n[s]=L({},e[s],n[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){const r=e[s]||{},a=i[s];n[s]={},!a||!Object.keys(a)?n[s]=r:!r||!Object.keys(r)?n[s]=a:(n[s]=L({},a),Object.keys(r).forEach(l=>{n[s][l]=Z(r[l],a[l])}))}else n[s]===void 0&&(n[s]=e[s])}),n}function Qe(e){const{theme:i,name:n,props:s}=e;return!i||!i.components||!i.components[n]||!i.components[n].defaultProps?s:Z(i.components[n].defaultProps,s)}const Ve=typeof window<"u"?p.useLayoutEffect:p.useEffect,Ge=Ve;function Ye(e,i,n,s,r){const[a,l]=p.useState(()=>r&&n?n(e).matches:s?s(e).matches:i);return Ge(()=>{let d=!0;if(!n)return;const c=n(e),h=()=>{d&&l(c.matches)};return h(),c.addListener(h),()=>{d=!1,c.removeListener(h)}},[e,n]),a}const H=ie["useSyncExternalStore"];function Xe(e,i,n,s,r){const a=p.useCallback(()=>i,[i]),l=p.useMemo(()=>{if(r&&n)return()=>n(e).matches;if(s!==null){const{matches:u}=s(e);return()=>u}return a},[a,e,s,r,n]),[d,c]=p.useMemo(()=>{if(n===null)return[a,()=>()=>{}];const u=n(e);return[()=>u.matches,m=>(u.addListener(m),()=>{u.removeListener(m)})]},[a,n,e]);return H(c,d,l)}function D(e,i={}){const n=Ue(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:r=!1,matchMedia:a=s?window.matchMedia:null,ssrMatchMedia:l=null,noSsr:d=!1}=Qe({name:"MuiUseMediaQuery",props:i,theme:n});let c=typeof e=="function"?e(n):e;return c=c.replace(/^@media( ?)/m,""),(H!==void 0?Xe:Ye)(c,r,a,l,d)}const qe=({handleSetExName:e})=>{const i=$(),n=j($e),s=j(Ie),r=j(J),a=D("(min-width: 768px) and (max-width: 1439px)"),l=D("(max-width: 767px)");p.useEffect(()=>{i(a?W(9):W(10))},[i,a]),p.useEffect(()=>{i(ne())},[i]);const d=c=>{(l||a)&&window.scrollTo({top:80,behavior:"smooth"}),i(se(c))};return t.jsxs("div",{children:[t.jsx(ze,{children:n==null?void 0:n.map(c=>t.jsx(Oe,{handleSetExName:e,filter:c.filter,title:c.name,photo:c.imgURL},c._id))}),t.jsx(Me,{children:s==null?void 0:s.map(c=>t.jsx(he,{children:t.jsxs("div",{className:"radio",children:[t.jsx("input",{className:"radio-input",type:"radio",id:c,value:c,checked:r===c,onChange:()=>d(c)}),t.jsx("label",{className:"radio-label",htmlFor:c})]})},c))})]})};o.div`
  width: 335px;
  height: 858px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;const Je=o.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`,Ke=o.div`
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
`,Ze=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,He=o.button`
  
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
`,Ne=o.svg`
 width: 24px;
  height: 24px;
`,et=o.p`
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
`;const tt=o.p`
  color: rgba(239, 237, 232, 0.4);

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  &::first-letter {
    text-transform: uppercase;
  }
`,it=o.p`
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
`,nt=o.ul`
  display: flex;
  width: 302px;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;

  @media (min-width: 768px) {
    width: 345px;
  }
`,st=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-items: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,rt=o.li`
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
`,ot=o.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,at=o.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,lt=o.p`
  color: #e6533c;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,ct=o.button`
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
`,dt=o.span`
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`,F=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;var A=typeof window>"u"?p.useEffect:p.useLayoutEffect,pt=({isPlaying:e,duration:i,startAt:n=0,updateInterval:s=0,onComplete:r,onUpdate:a})=>{let[l,d]=p.useState(n),c=p.useRef(0),h=p.useRef(n),u=p.useRef(n*-1e3),m=p.useRef(null),g=p.useRef(null),y=p.useRef(null),v=f=>{let b=f/1e3;if(g.current===null){g.current=b,m.current=requestAnimationFrame(v);return}let x=b-g.current,w=c.current+x;g.current=b,c.current=w;let E=h.current+(s===0?w:(w/s|0)*s),P=h.current+w,B=typeof i=="number"&&P>=i;d(B?i:E),B||(m.current=requestAnimationFrame(v))},k=()=>{m.current&&cancelAnimationFrame(m.current),y.current&&clearTimeout(y.current),g.current=null},C=p.useCallback(f=>{k(),c.current=0;let b=typeof f=="number"?f:n;h.current=b,d(b),e&&(m.current=requestAnimationFrame(v))},[e,n]);return A(()=>{if(a==null||a(l),i&&l>=i){u.current+=i*1e3;let{shouldRepeat:f=!1,delay:b=0,newStartAt:x}=(r==null?void 0:r(u.current/1e3))||{};f&&(y.current=setTimeout(()=>C(x),b*1e3))}},[l,i]),A(()=>(e&&(m.current=requestAnimationFrame(v)),k),[e,i,s]),{elapsedTime:l,reset:C}},xt=(e,i,n)=>{let s=e/2,r=i/2,a=s-r,l=2*a,d=n==="clockwise"?"1,0":"0,1",c=2*Math.PI*a;return{path:`m ${s},${r} a ${a},${a} 0 ${d} 0,${l} a ${a},${a} 0 ${d} 0,-${l}`,pathLength:c}},O=(e,i)=>e===0||e===i?0:typeof i=="number"?e-i:0,ht=e=>({position:"relative",width:e,height:e}),mt={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},N=(e,i,n,s,r)=>{if(s===0)return i;let a=(r?s-e:e)/s;return i+n*a},_=e=>{var i,n;return(n=(i=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(s,r,a,l)=>`#${r}${r}${a}${a}${l}${l}`).substring(1).match(/.{2}/g))==null?void 0:i.map(s=>parseInt(s,16)))!=null?n:[]},ut=(e,i)=>{var n;let{colors:s,colorsTime:r,isSmoothColorTransition:a=!0}=e;if(typeof s=="string")return s;let l=(n=r==null?void 0:r.findIndex((g,y)=>g>=i&&i>=r[y+1]))!=null?n:-1;if(!r||l===-1)return s[0];if(!a)return s[l];let d=r[l]-i,c=r[l]-r[l+1],h=_(s[l]),u=_(s[l+1]),m=!!e.isGrowing;return`rgb(${h.map((g,y)=>N(d,g,u[y]-g,c,m)|0).join(",")})`},gt=e=>{let{duration:i,initialRemainingTime:n,updateInterval:s,size:r=180,strokeWidth:a=12,trailStrokeWidth:l,isPlaying:d=!1,isGrowing:c=!1,rotation:h="clockwise",onComplete:u,onUpdate:m}=e,g=p.useRef(),y=Math.max(a,l??0),{path:v,pathLength:k}=xt(r,y,h),{elapsedTime:C}=pt({isPlaying:d,duration:i,startAt:O(i,n),updateInterval:s,onUpdate:typeof m=="function"?b=>{let x=Math.ceil(i-b);x!==g.current&&(g.current=x,m(x))}:void 0,onComplete:typeof u=="function"?b=>{var x;let{shouldRepeat:w,delay:E,newInitialRemainingTime:P}=(x=u(b))!=null?x:{};if(w)return{shouldRepeat:w,delay:E,newStartAt:O(i,P)}}:void 0}),f=i-C;return{elapsedTime:C,path:v,pathLength:k,remainingTime:Math.ceil(f),rotation:h,size:r,stroke:ut(e,f),strokeDashoffset:N(C,0,k,i,c),strokeWidth:a}},ee=e=>{let{children:i,strokeLinecap:n,trailColor:s,trailStrokeWidth:r}=e,{path:a,pathLength:l,stroke:d,strokeDashoffset:c,remainingTime:h,elapsedTime:u,size:m,strokeWidth:g}=gt(e);return T.createElement("div",{style:ht(m)},T.createElement("svg",{viewBox:`0 0 ${m} ${m}`,width:m,height:m,xmlns:"http://www.w3.org/2000/svg"},T.createElement("path",{d:a,fill:"none",stroke:s??"#d9d9d9",strokeWidth:r??g}),T.createElement("path",{d:a,fill:"none",stroke:d,strokeLinecap:n??"round",strokeWidth:g,strokeDasharray:l,strokeDashoffset:c})),typeof i=="function"&&T.createElement("div",{style:mt},i({remainingTime:h,elapsedTime:u,color:d})))};ee.displayName="CountdownCircleTimer";const ft=({onToogle:e,exerciseInfo:i,setIsSuccessOpen:n,setWorkoutDoneInfo:s})=>{const r=i.time*60,[a,l]=p.useState(!1),[d,c]=p.useState(0),[h,u]=p.useState(0),[m,g]=p.useState(r),y=$();function v(x){const w=Math.floor(x/60),E=x%60;return`${w}:${E<10?"0":""}${E}`}const k=Math.round(i.burnedCalories/r*100)/100;p.useEffect(()=>{let x;return a&&m!==d?x=setInterval(()=>{c(w=>w+1),u(w=>w+k)},1e3):d===m&&(l(!1),g(w=>w+r)),()=>clearInterval(x)},[r,l,c,a,d,u,k,m]);const C=()=>{l(x=>!x)},f=v(d),b=()=>{if(a||d<1){re.error("Impossible to add workout. Finish working out before adding!");return}const x={exerciseId:i._id,time:Math.ceil(d/60),calories:Math.ceil(h)};y(oe(x)),s({time:x.time,calories:x.calories}),n(),e(),console.log(x)};return t.jsx(G,{onClose:e,modalStyles:{width:"335px",height:"858px",flexDirection:"column",alignItems:"center",display:"flex",padding:"0"},modalTabletStyles:{width:"694px",height:"550px",display:"flex",flexDirection:"inherit",gap:"16px",margin:"0px",alignItems:"flex-start"},children:t.jsxs(t.Fragment,{children:[t.jsxs(F,{children:[t.jsx(Ke,{children:t.jsx(Je,{src:i.gifUrl,alt:"Working out"})}),t.jsxs(Ze,{children:[t.jsx(et,{children:"Time"}),t.jsx(ee,{isPlaying:a,duration:r,size:125,colors:"#E6533C",trailColor:"#EFEDE81A",strokeWidth:4,onComplete:()=>{if(a)return{shouldRepeat:!0}},children:()=>t.jsx("div",{style:{display:"flex",flexDirection:"column",color:"white"},children:t.jsx("div",{children:f})})})]}),t.jsx(He,{type:"button",onClick:C,children:t.jsx(Ne,{children:a?t.jsx("use",{href:`${S}#pause-square`}):t.jsx("use",{href:`${S}#play`})})}),t.jsxs(ot,{children:[t.jsx(at,{children:"Burned calories:"}),t.jsx(lt,{children:Math.round(h*100)/100})]})]}),t.jsxs(F,{children:[t.jsx(nt,{children:Object.entries(i).filter(([x])=>x!=="gifUrl"&&x!=="burnedCalories"&&x!=="_id").map(([x,w])=>t.jsx(rt,{children:t.jsxs(st,{children:[t.jsx(tt,{children:x}),t.jsx(it,{children:w})]})},w))}),t.jsx(ct,{onClick:b,children:t.jsx(dt,{children:"Add to diary"})})]})]})})},wt="/project-Power-7/assets/thumb-up-1x-575f03e5.png",bt=o(G)`

`,yt=o.button`
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
`,jt=o.img`
  width: 118px;
  height: 73px;
  margin-bottom: 27px;
  margin-top: 48px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 64px;
  }
`,vt=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,kt=o.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`,Ct=o.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,U=o.li`
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
`,Q=o.span`
  color: #e6533c;
`,Et=o.div`
  margin-bottom: 16px;
`,St=o(ae)`
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
`,Tt=({time:e,calories:i,onClose:n})=>t.jsx(bt,{modalStyles:{maxWidth:"430px",width:"100%",height:"384px"},modalTabletStyles:{width:"430px",height:"439px"},modalDesktopStyles:{width:"430px",height:"439px"},onClose:n,children:t.jsxs(vt,{children:[t.jsx(jt,{src:wt,alt:"Thumb Up"}),t.jsxs(Ct,{children:[t.jsx(kt,{children:"Well done"}),t.jsxs("ul",{children:[t.jsxs(U,{children:["Your time:",t.jsxs(Q,{children:[e||0," minutes"]})]}),t.jsxs(U,{children:["Burned calories:",t.jsx(Q,{children:i||0})]})]})]}),t.jsx(Et,{children:t.jsx(yt,{onClick:n,children:"Next exercise "})}),t.jsxs(St,{to:"/diary",children:["To the diary",t.jsx("svg",{width:" 16px",height:"16px",children:t.jsx("use",{href:`${S}#arrow_gray`})})]})]})}),$t=o.li`
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
`,It=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 27px;
  }
`,Pt=o.h3`
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
`,Lt=o.svg`
  
  

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
`,Mt=o.h2`
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
`,Rt=o.ul`
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
`,Bt=o.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,Wt=o.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Dt=({card:e,toogleModal:i})=>t.jsxs($t,{children:[t.jsxs(It,{children:[t.jsx(Pt,{children:"WORKOUT"}),t.jsxs(le,{style:{display:"flex",alignItems:"center"},onClick:()=>i(e),children:[t.jsx(Wt,{children:"Start"}),t.jsx(Bt,{children:t.jsxs("svg",{fill:"#efede8",children:[" ",t.jsx("use",{href:S+"#icon-arrow"})]})})]})]}),t.jsxs(zt,{children:[t.jsx(Lt,{children:t.jsx("svg",{children:t.jsx("use",{href:`${S}#icon-icon`})})}),t.jsx(Mt,{children:e.name})]}),t.jsxs(Rt,{children:[t.jsxs("li",{children:["Burned calories:",t.jsx("span",{children:e.burnedCalories})]}),t.jsxs("li",{children:["Body part: ",t.jsx("span",{children:e.bodyPart})]}),t.jsxs("li",{children:["Target:",t.jsx("span",{children:e.target})]})]})]},e._id),Ft=()=>{const e=$(),[i,n]=p.useState({time:0,calories:0}),[s,r]=p.useState(!1),[a,l]=p.useState(!1),[d,c]=p.useState(null),h=f=>{l(b=>!b),c(f)},u=j(Ce),m=j(Y),g=j(I),y=j(Te),v=j(Se),k=()=>{e(R("")),e(ce())},C=()=>{e(de(1)),e(V(g))};return t.jsxs("div",{style:{position:"relative"},children:[t.jsxs(ue,{onClick:()=>k(),children:[t.jsx("svg",{width:"20",height:"20",stroke:"rgb(239, 237, 232, 0.4)",children:t.jsx("use",{href:`${S}#icon-arrow-left`})}),"Back"]}),t.jsxs(ge,{children:[m&&t.jsx(fe,{}),t.jsxs(we,{children:[u==null?void 0:u.map(f=>t.jsx(Dt,{card:f,toogleModal:h},f._id)),!m&&v!==y&&t.jsx(be,{type:"button",onClick:()=>C(),children:"Load More"})]})]}),a&&t.jsx(ft,{onToogle:h,exerciseInfo:d,setIsSuccessOpen:()=>r(f=>!f),setWorkoutDoneInfo:n}),s&&t.jsx(Tt,{onClose:()=>r(f=>!f),time:i.time,calories:i.calories})]})},At="/project-Power-7/assets/exercises-desktop-1x-6d697564.png",Ot="/project-Power-7/assets/exercises-desktop-2x-a7c1451e.png",_t=o.div`
  @media (min-width: 1440px) {
    
    z-index: 0;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: bottom right;
    background-image: ${e=>e.theme.activeCategory?`image-set(url(${At}) 1x, url(${Ot}) 2x)`:"none"};
  }
`,Ut=({children:e})=>{const i=j(I);return t.jsx(_t,{theme:{activeCategory:i},children:e})},qt=()=>{const e=j(I);return t.jsx(Ut,{children:t.jsx(pe,{children:t.jsxs(Le,{children:[t.jsx(Pe,{}),e?t.jsx(Ft,{}):t.jsx(qe,{})]})})})};export{qt as default};
