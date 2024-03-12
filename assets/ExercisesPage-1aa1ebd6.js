import{u as i,A as R,a as T,c as v,j as e,I as Q,J as P,r as c,K as X,M as H,N as Z,x as $,s as S,O as ee,P as te,L as ie,Q as ne,i as re,C as oe}from"./index-82489c8a.js";import{D as se}from"./DiaryLoader-00b5a8c2.js";import{e as ae}from"./UserForm.styled-ea35ee60.js";import{i as F}from"./sprite-080ed8c4.js";import{C as O}from"./CustomModal-aaf55d43.js";import"./formik.esm-16ff6db1.js";const le=i.div`
  max-width: 1440px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 64px;
  }
`,de=i.div`
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,I=i.button`
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

`,ce=i.h2`
  color: ${t=>t.theme.colors.whiteColor};
  font-size: 24px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,pe=i.h2`
  color: ${t=>t.theme.colors.whiteColor};
  font-size: 24px;
  margin-bottom: 20px;
  color: ${t=>t.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,q=t=>t.exercises.loading,U=t=>t.exercises.filter,xe=t=>t.exercises.exercises,he=t=>t.exercises.categories,B=t=>t.exercises.categoryPicked,G=R([U,he,q],(t,n,o)=>{if(!o)return n.filter(r=>(r==null?void 0:r.filter)===t)}),V=t=>t.exercises.categoriesPage,K=t=>t.exercises.categoriesLimit,me=R([G,V,K],(t,n,o)=>{let r=[];return t.length>0&&(r=t.slice((n-1)*o,n*o)),r}),ge=R([G,K],(t,n)=>{let o=[];const r=Math.ceil(t.length/n);if(r>1){for(let a=1;a<=r;a++)o.push(a);return o}}),fe=()=>{const t=T(),n=v(U),o=v(B),r=a=>{t(Q(a)),t(P(""))};return e.jsxs(le,{children:[o?e.jsx(ce,{children:o}):e.jsx(pe,{children:"Exercises"}),e.jsxs(de,{children:[e.jsx(I,{type:"button",onClick:()=>r("Body parts"),theme:{kostil:n==="Body parts"?void 0:"true"},children:"Body parts"}),e.jsx(I,{type:"button",onClick:()=>r("Muscles"),theme:{kostil:n==="Muscles"?void 0:"true"},children:"Muscles"}),e.jsx(I,{type:"button",onClick:()=>r("Equipment"),theme:{kostil:n==="Equipment"?void 0:"true"},children:"Equipment"})]})]})},ue=i.div`
padding-top: 40px;
padding-bottom: 80px;

@media screen and (min-width: 768px) {
    padding-top: 72px;
    }
`,we=i.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  }
`,be=i.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  gap: 8px;

`;i.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  /* ${t=>t.active&&{backgroundColor:"transparent"}} */
`;i.ul`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;i.li`
  margin-right: 8px;
`;const ye=i.li`
  position: relative;
  cursor: pointer;
`,je=i.img`
  z-index: 0;
  display: block;
  /* position: relative; */
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  height: 206px;
  filter: brightness(50%);

  @media screen and (min-width: 768px) {
    width: 224px;
    height: 206px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
    height: 206px;
  }
`,ve=i.div`
position : relative;
  height: 206px;
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`,ke=i.div`
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
`,Ce=i.div`
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
`,Ee=i.p`
  margin-top: 2px;
  margin-bottom: 0;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,$e=({title:t,filter:n,photo:o})=>{const r=T(),[a,s]=c.useState(!1),[l,p]=c.useState(!1);c.useEffect(()=>{if(o){const h=new Image;h.src=o,h.onload=()=>{s(!0),p(!0)}}},[o]);const u=h=>{r(X(h)),r(P(h))};return e.jsx(ye,{onClick:()=>u(t),children:e.jsxs(ve,{children:[!o||!a?e.jsx(se,{}):e.jsx(je,{src:o||images,alt:t}),e.jsx(ke,{style:{visibility:l?"visible":"hidden"},children:e.jsxs(Ce,{children:[t,e.jsx(Ee,{children:n})]})})]})})},Te=({handleSetExName:t})=>{const n=T(),o=v(me),r=v(ge),a=v(V);return c.useEffect(()=>{n(H())},[n]),e.jsxs("div",{children:[e.jsx(we,{children:o==null?void 0:o.map(s=>e.jsx($e,{handleSetExName:t,filter:s.filter,title:s.name,photo:s.imgURL},s._id))}),")",e.jsx(be,{children:r==null?void 0:r.map(s=>e.jsx(ae,{children:e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:s,value:s,checked:a===s,onChange:()=>n(Z(s))}),e.jsx("label",{className:"radio-label",htmlFor:s})]})},s))})]})},ze=i.button`
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

`,Ie=i.div`
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
`,Se=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`;i.li`
  max-width: 335px;
  width: 100%;
  min-height: 141px;
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 16px 16px;
  @media (min-width: 1440px) {
    width: 405px;
  }
`;i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 27px;
  }
`;i.h3`
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
`;i.svg`
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
`;i.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;i.h2`
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
`;i.ul`
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
`;i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;i.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;i.div`
  width: 335px;
  height: 858px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;const Fe=i.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`,Re=i.div`
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
`,Pe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,Be=i.button`
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
`,Le=i.svg`
 width: 24px;
  height: 24px;
`,We=i.p`
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
`;i.ul`
  display: flex;
  padding: 12px 80px 12px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;const Me=i.p`
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
`,De=i.p`
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
`,Ae=i.ul`
  display: flex;
  width: 302px;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;

  @media (min-width: 768px) {
    width: 345px;
  }
`,Ne=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-items: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,_e=i.li`
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
`,Oe=i.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,qe=i.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,Ue=i.p`
  color: #e6533c;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,Ge=i.button`
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
`,Ve=i.span`
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`,W=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;var M=typeof window>"u"?c.useEffect:c.useLayoutEffect,Ke=({isPlaying:t,duration:n,startAt:o=0,updateInterval:r=0,onComplete:a,onUpdate:s})=>{let[l,p]=c.useState(o),u=c.useRef(0),h=c.useRef(o),w=c.useRef(o*-1e3),x=c.useRef(null),m=c.useRef(null),g=c.useRef(null),j=y=>{let b=y/1e3;if(m.current===null){m.current=b,x.current=requestAnimationFrame(j);return}let d=b-m.current,f=u.current+d;m.current=b,u.current=f;let E=h.current+(r===0?f:(f/r|0)*r),z=h.current+f,L=typeof n=="number"&&z>=n;p(L?n:E),L||(x.current=requestAnimationFrame(j))},k=()=>{x.current&&cancelAnimationFrame(x.current),g.current&&clearTimeout(g.current),m.current=null},C=c.useCallback(y=>{k(),u.current=0;let b=typeof y=="number"?y:o;h.current=b,p(b),t&&(x.current=requestAnimationFrame(j))},[t,o]);return M(()=>{if(s==null||s(l),n&&l>=n){w.current+=n*1e3;let{shouldRepeat:y=!1,delay:b=0,newStartAt:d}=(a==null?void 0:a(w.current/1e3))||{};y&&(g.current=setTimeout(()=>C(d),b*1e3))}},[l,n]),M(()=>(t&&(x.current=requestAnimationFrame(j)),k),[t,n,r]),{elapsedTime:l,reset:C}},Ye=(t,n,o)=>{let r=t/2,a=n/2,s=r-a,l=2*s,p=o==="clockwise"?"1,0":"0,1",u=2*Math.PI*s;return{path:`m ${r},${a} a ${s},${s} 0 ${p} 0,${l} a ${s},${s} 0 ${p} 0,-${l}`,pathLength:u}},D=(t,n)=>t===0||t===n?0:typeof n=="number"?t-n:0,Je=t=>({position:"relative",width:t,height:t}),Qe={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},Y=(t,n,o,r,a)=>{if(r===0)return n;let s=(a?r-t:t)/r;return n+o*s},A=t=>{var n,o;return(o=(n=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(r,a,s,l)=>`#${a}${a}${s}${s}${l}${l}`).substring(1).match(/.{2}/g))==null?void 0:n.map(r=>parseInt(r,16)))!=null?o:[]},Xe=(t,n)=>{var o;let{colors:r,colorsTime:a,isSmoothColorTransition:s=!0}=t;if(typeof r=="string")return r;let l=(o=a==null?void 0:a.findIndex((m,g)=>m>=n&&n>=a[g+1]))!=null?o:-1;if(!a||l===-1)return r[0];if(!s)return r[l];let p=a[l]-n,u=a[l]-a[l+1],h=A(r[l]),w=A(r[l+1]),x=!!t.isGrowing;return`rgb(${h.map((m,g)=>Y(p,m,w[g]-m,u,x)|0).join(",")})`},He=t=>{let{duration:n,initialRemainingTime:o,updateInterval:r,size:a=180,strokeWidth:s=12,trailStrokeWidth:l,isPlaying:p=!1,isGrowing:u=!1,rotation:h="clockwise",onComplete:w,onUpdate:x}=t,m=c.useRef(),g=Math.max(s,l??0),{path:j,pathLength:k}=Ye(a,g,h),{elapsedTime:C}=Ke({isPlaying:p,duration:n,startAt:D(n,o),updateInterval:r,onUpdate:typeof x=="function"?b=>{let d=Math.ceil(n-b);d!==m.current&&(m.current=d,x(d))}:void 0,onComplete:typeof w=="function"?b=>{var d;let{shouldRepeat:f,delay:E,newInitialRemainingTime:z}=(d=w(b))!=null?d:{};if(f)return{shouldRepeat:f,delay:E,newStartAt:D(n,z)}}:void 0}),y=n-C;return{elapsedTime:C,path:j,pathLength:k,remainingTime:Math.ceil(y),rotation:h,size:a,stroke:Xe(t,y),strokeDashoffset:Y(C,0,k,n,u),strokeWidth:s}},J=t=>{let{children:n,strokeLinecap:o,trailColor:r,trailStrokeWidth:a}=t,{path:s,pathLength:l,stroke:p,strokeDashoffset:u,remainingTime:h,elapsedTime:w,size:x,strokeWidth:m}=He(t);return $.createElement("div",{style:Je(x)},$.createElement("svg",{viewBox:`0 0 ${x} ${x}`,width:x,height:x,xmlns:"http://www.w3.org/2000/svg"},$.createElement("path",{d:s,fill:"none",stroke:r??"#d9d9d9",strokeWidth:a??m}),$.createElement("path",{d:s,fill:"none",stroke:p,strokeLinecap:o??"round",strokeWidth:m,strokeDasharray:l,strokeDashoffset:u})),typeof n=="function"&&$.createElement("div",{style:Qe},n({remainingTime:h,elapsedTime:w,color:p})))};J.displayName="CountdownCircleTimer";const Ze=({onToogle:t,exerciseInfo:n,setIsSuccessOpen:o,setWorkoutDoneInfo:r})=>{const a=n.time*60,[s,l]=c.useState(!1),[p,u]=c.useState(0),[h,w]=c.useState(0),[x,m]=c.useState(a),g=T();function j(d){const f=Math.floor(d/60),E=d%60;return`${f}:${E<10?"0":""}${E}`}const k=Math.round(n.burnedCalories/a*100)/100;c.useEffect(()=>{let d;return s&&x!==p?d=setInterval(()=>{u(f=>f+1),w(f=>f+k)},1e3):p===x&&(l(!1),m(f=>f+a)),()=>clearInterval(d)},[a,l,u,s,p,w,k,x]);const C=()=>{l(d=>!d)},y=j(p),b=()=>{if(s||p<1){ee.error("Impossible to add workout. Finish working out before adding!");return}const d={exerciseId:n._id,time:Math.ceil(p/60),calories:Math.ceil(h)};g(te(d)),r({time:d.time,calories:d.calories}),o(),t(),console.log(d)};return e.jsx(O,{onClose:t,modalStyles:{width:"335px",height:"858px",flexDirection:"column",alignItems:"center",display:"flex",padding:"0"},modalTabletStyles:{width:"694px",height:"550px",display:"flex",flexDirection:"inherit",gap:"16px",margin:"0px",alignItems:"flex-start"},children:e.jsxs(e.Fragment,{children:[e.jsxs(W,{children:[e.jsx(Re,{children:e.jsx(Fe,{src:n.gifUrl,alt:"Working out"})}),e.jsxs(Pe,{children:[e.jsx(We,{children:"Time"}),e.jsx(J,{isPlaying:s,duration:a,size:125,colors:"#E6533C",trailColor:"#EFEDE81A",strokeWidth:4,onComplete:()=>{if(s)return{shouldRepeat:!0}},children:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",color:"white"},children:e.jsx("div",{children:y})})})]}),e.jsx(Be,{type:"button",onClick:C,children:e.jsx(Le,{children:s?e.jsx("use",{href:`${S}#pause-square`}):e.jsx("use",{href:`${S}#play`})})}),e.jsxs(Oe,{children:[e.jsx(qe,{children:"Burned calories:"}),e.jsx(Ue,{children:Math.round(h*100)/100})]})]}),e.jsxs(W,{children:[e.jsx(Ae,{children:Object.entries(n).filter(([d,f])=>d!=="gifUrl"&&d!=="burnedCalories"&&d!=="_id").map(([d,f])=>e.jsx(_e,{children:e.jsxs(Ne,{children:[e.jsx(Me,{children:d}),e.jsx(De,{children:f})]})},f))}),e.jsx(Ge,{onClick:b,children:e.jsx(Ve,{children:"Add to diary"})})]})]})})},et="/project-Power-7/assets/thumb-up-1x-575f03e5.png",tt=i(O)`

`,it=i.button`
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
`,nt=i.img`
  width: 118px;
  height: 73px;
  margin-bottom: 27px;
  margin-top: 48px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 64px;
  }
`,rt=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ot=i.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`,st=i.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,N=i.li`
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
`,_=i.span`
  color: #e6533c;
`,at=i.div`
  margin-bottom: 16px;
`,lt=i(ie)`
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
`,dt=({time:t,calories:n,onClick:o,onClose:r})=>e.jsx(tt,{modalStyles:{maxWidth:"430px",width:"100%",height:"384px"},modalTabletStyles:{width:"430px",height:"439px"},modalDesktopStyles:{width:"430px",height:"439px"},onClose:r,children:e.jsxs(rt,{children:[e.jsx(nt,{src:et,alt:"Thumb Up"}),e.jsxs(st,{children:[e.jsx(ot,{children:"Well done"}),e.jsxs("ul",{children:[e.jsxs(N,{children:["Your time:",e.jsxs(_,{children:[t||0," minutes"]})]}),e.jsxs(N,{children:["Burned calories:",e.jsx(_,{children:n||0})]})]})]}),e.jsx(at,{children:e.jsx(it,{onClick:r,children:"Next exercise "})}),e.jsxs(lt,{to:"/diary",children:["To the diary",e.jsx("svg",{width:" 16px",height:"16px",children:e.jsx("use",{href:`${S}#arrow_gray`})})]})]})}),ct=i.li`
  max-width: 335px;
  width: 100%;
  min-height: 141px;
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 16px 16px;
  @media (min-width: 1440px) {
    width: 405px;
  }
`,pt=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 27px;
  }
`,xt=i.h3`
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
`,ht=i.svg`
  
  

  width: 20px;
  height: 20px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,mt=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`,gt=i.h2`
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
`,ft=i.ul`
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
`,ut=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,wt=i.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,bt=({card:t,toogleModal:n})=>e.jsxs(ct,{children:[e.jsxs(pt,{children:[e.jsx(xt,{children:"WORKOUT"}),e.jsxs(ne,{style:{display:"flex",alignItems:"center"},onClick:()=>n(t),children:[e.jsx(wt,{children:"Start"}),e.jsx(ut,{children:e.jsxs("svg",{fill:"#efede8",children:[" ",e.jsx("use",{href:F+"#icon-arrow-right"})]})})]})]}),e.jsxs(mt,{children:[e.jsx(ht,{children:e.jsx("svg",{children:e.jsx("use",{href:`${F}#icon-run-exercises`})})}),e.jsx(gt,{children:t.name})]}),e.jsxs(ft,{children:[e.jsxs("li",{children:["Burned calories:",e.jsx("span",{children:t.burnedCalories})]}),e.jsxs("li",{children:["Body part: ",e.jsx("span",{children:t.bodyPart})]}),e.jsxs("li",{children:["Target:",e.jsx("span",{children:t.target})]})]})]},t._id),yt=()=>{const t=T(),[n,o]=c.useState({time:0,calories:0}),[r,a]=c.useState(!1),[s,l]=c.useState(!1),[p,u]=c.useState(null),h=g=>{l(j=>!j),u(g)},w=v(xe),x=v(q),m=()=>{t(P(""))};return e.jsxs("div",{style:{position:"relative"},children:[e.jsxs(ze,{onClick:()=>m(),children:[e.jsx("svg",{width:"20",height:"20",stroke:"rgb(239, 237, 232, 0.4)",children:e.jsx("use",{href:F+"#icon-arrow-left"})}),"Back"]}),e.jsxs(Ie,{children:[x&&e.jsx(re,{}),e.jsx(Se,{children:w==null?void 0:w.map(g=>e.jsx(bt,{card:g,toogleModal:h},g._id))})]}),s&&e.jsx(Ze,{onToogle:h,exerciseInfo:p,setIsSuccessOpen:()=>a(g=>!g),setWorkoutDoneInfo:o}),r&&e.jsx(dt,{onClose:()=>a(g=>!g),time:n.time,calories:n.calories})]})},jt="/project-Power-7/assets/exercises-desktop-1x-6d697564.png",vt="/project-Power-7/assets/exercises-desktop-2x-a7c1451e.png",kt=i.div`
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
    background-image: ${t=>t.theme.activeCategory?`image-set(url(${jt}) 1x, url(${vt}) 2x)`:"none"};
  }
`,Ct=({children:t})=>{const n=v(B);return e.jsx(kt,{theme:{activeCategory:n},children:t})},Ft=()=>{const t=v(B);return e.jsx(Ct,{children:e.jsx(oe,{children:e.jsxs(ue,{children:[e.jsx(fe,{}),t?e.jsx(yt,{}):e.jsx(Te,{})]})})})};export{Ft as default};
