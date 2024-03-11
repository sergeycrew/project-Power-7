import{u as i,F,a as T,c as C,j as e,H as Y,I as R,J as H,r as h,K as J,M as X,x as $,N as Q,O as Z,L as ee,s as te,P as ie,C as ne}from"./index-974870f1.js";import{e as re}from"./UserForm.styled-858f14a0.js";import{i as z}from"./sprite-2074e98a.js";import{C as _}from"./CustomModal-55fb2f82.js";import"./formik.esm-2b0d1a43.js";const oe=i.div`
  max-width: 1440px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 64px;
  }
`,se=i.div`
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,S=i.button`
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

`,ae=i.h2`
  color: ${t=>t.theme.colors.whiteColor};
  font-size: 24px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,le=i.h2`
  color: ${t=>t.theme.colors.whiteColor};
  font-size: 24px;
  margin-bottom: 20px;
  color: ${t=>t.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,ce=t=>t.exercises.loading,O=t=>t.exercises.filter,de=t=>t.exercises.exercises,pe=t=>t.exercises.categories,P=t=>t.exercises.categoryPicked,q=F([O,pe,ce],(t,n,s)=>{if(!s)return n.filter(r=>(r==null?void 0:r.filter)===t)}),U=t=>t.exercises.categoriesPage,G=t=>t.exercises.categoriesLimit,xe=F([q,U,G],(t,n,s)=>{let r=[];return t.length>0&&(r=t.slice((n-1)*s,n*s)),r}),he=F([q,G],(t,n)=>{let s=[];const r=Math.ceil(t.length/n);if(r>1){for(let a=1;a<=r;a++)s.push(a);return s}}),ge=()=>{const t=T(),n=C(O),s=C(P),r=a=>{t(Y(a)),t(R(""))};return e.jsxs(oe,{children:[s?e.jsx(ae,{children:s}):e.jsx(le,{children:"Exercises"}),e.jsxs(se,{children:[e.jsx(S,{type:"button",onClick:()=>r("Body parts"),theme:{kostil:n==="Body parts"?void 0:"true"},children:"Body parts"}),e.jsx(S,{type:"button",onClick:()=>r("Muscles"),theme:{kostil:n==="Muscles"?void 0:"true"},children:"Muscles"}),e.jsx(S,{type:"button",onClick:()=>r("Equipment"),theme:{kostil:n==="Equipment"?void 0:"true"},children:"Equipment"})]})]})},me=i.div`
padding-top: 40px;
padding-bottom: 80px;

@media screen and (min-width: 768px) {
    padding-top: 72px;
    }
`,fe=i.ul`
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
`,ue=i.div`
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
`;const we=i.li`
  position: relative;
  cursor: pointer;
`,be=i.img`
z-index: 0;
display: block;
position: relative;
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
`,ye=i.div`
 
  

  


`,je=i.div`
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
`,ve=i.div`
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
`,ke=i.p`
  margin-top: 2px;
  margin-bottom: 0;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,Ce=({title:t,filter:n,photo:s})=>{const r=T(),a=o=>{r(H(o)),r(R(o))};return e.jsx(we,{onClick:()=>a(t),children:e.jsxs(ye,{children:[e.jsx(be,{src:s||images,alt:t}),e.jsx(je,{children:e.jsxs(ve,{children:[t,e.jsx(ke,{children:n})]})})]})})},Ee=({handleSetExName:t})=>{const n=T(),s=C(xe),r=C(he),a=C(U);return h.useEffect(()=>{n(J())},[n]),e.jsxs("div",{children:[e.jsx(fe,{children:s==null?void 0:s.map(o=>e.jsx(Ce,{handleSetExName:t,filter:o.filter,title:o.name,photo:o.imgURL},o._id))}),")",e.jsx(ue,{children:r==null?void 0:r.map(o=>e.jsx(re,{children:e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:o,value:o,checked:a===o,onChange:()=>n(X(o))}),e.jsx("label",{className:"radio-label",htmlFor:o})]})},o))})]})},$e=i.button`
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

`,ze=i.div`
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
`,Te=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`;i.li`
  width: 335px;
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
`;const Ie=i.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`,Se=i.div`
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
`,Fe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,Re=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #e6533c;
  margin-top: 14px;
  outline: none;
  border: none;
  border-radius: 5px;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,Pe=i.svg`
  width: 36px;
  height: 36px;
`,Be=i.p`
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
`;const We=i.p`
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
`,Me=i.p`
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
`,De=i.ul`
  display: flex;
  width: 302px;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;

  @media (min-width: 768px) {
    width: 345px;
  }
`,Le=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-items: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ae=i.li`
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
`,Ne=i.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,_e=i.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,Oe=i.p`
  color: #e6533c;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,qe=i.button`
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
`,Ue=i.span`
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
`;var M=typeof window>"u"?h.useEffect:h.useLayoutEffect,Ge=({isPlaying:t,duration:n,startAt:s=0,updateInterval:r=0,onComplete:a,onUpdate:o})=>{let[l,x]=h.useState(s),m=h.useRef(0),f=h.useRef(s),u=h.useRef(s*-1e3),p=h.useRef(null),d=h.useRef(null),b=h.useRef(null),j=y=>{let w=y/1e3;if(d.current===null){d.current=w,p.current=requestAnimationFrame(j);return}let c=w-d.current,g=m.current+c;d.current=w,m.current=g;let E=f.current+(r===0?g:(g/r|0)*r),I=f.current+g,B=typeof n=="number"&&I>=n;x(B?n:E),B||(p.current=requestAnimationFrame(j))},v=()=>{p.current&&cancelAnimationFrame(p.current),b.current&&clearTimeout(b.current),d.current=null},k=h.useCallback(y=>{v(),m.current=0;let w=typeof y=="number"?y:s;f.current=w,x(w),t&&(p.current=requestAnimationFrame(j))},[t,s]);return M(()=>{if(o==null||o(l),n&&l>=n){u.current+=n*1e3;let{shouldRepeat:y=!1,delay:w=0,newStartAt:c}=(a==null?void 0:a(u.current/1e3))||{};y&&(b.current=setTimeout(()=>k(c),w*1e3))}},[l,n]),M(()=>(t&&(p.current=requestAnimationFrame(j)),v),[t,n,r]),{elapsedTime:l,reset:k}},Ke=(t,n,s)=>{let r=t/2,a=n/2,o=r-a,l=2*o,x=s==="clockwise"?"1,0":"0,1",m=2*Math.PI*o;return{path:`m ${r},${a} a ${o},${o} 0 ${x} 0,${l} a ${o},${o} 0 ${x} 0,-${l}`,pathLength:m}},D=(t,n)=>t===0||t===n?0:typeof n=="number"?t-n:0,Ve=t=>({position:"relative",width:t,height:t}),Ye={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},K=(t,n,s,r,a)=>{if(r===0)return n;let o=(a?r-t:t)/r;return n+s*o},L=t=>{var n,s;return(s=(n=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(r,a,o,l)=>`#${a}${a}${o}${o}${l}${l}`).substring(1).match(/.{2}/g))==null?void 0:n.map(r=>parseInt(r,16)))!=null?s:[]},He=(t,n)=>{var s;let{colors:r,colorsTime:a,isSmoothColorTransition:o=!0}=t;if(typeof r=="string")return r;let l=(s=a==null?void 0:a.findIndex((d,b)=>d>=n&&n>=a[b+1]))!=null?s:-1;if(!a||l===-1)return r[0];if(!o)return r[l];let x=a[l]-n,m=a[l]-a[l+1],f=L(r[l]),u=L(r[l+1]),p=!!t.isGrowing;return`rgb(${f.map((d,b)=>K(x,d,u[b]-d,m,p)|0).join(",")})`},Je=t=>{let{duration:n,initialRemainingTime:s,updateInterval:r,size:a=180,strokeWidth:o=12,trailStrokeWidth:l,isPlaying:x=!1,isGrowing:m=!1,rotation:f="clockwise",onComplete:u,onUpdate:p}=t,d=h.useRef(),b=Math.max(o,l??0),{path:j,pathLength:v}=Ke(a,b,f),{elapsedTime:k}=Ge({isPlaying:x,duration:n,startAt:D(n,s),updateInterval:r,onUpdate:typeof p=="function"?w=>{let c=Math.ceil(n-w);c!==d.current&&(d.current=c,p(c))}:void 0,onComplete:typeof u=="function"?w=>{var c;let{shouldRepeat:g,delay:E,newInitialRemainingTime:I}=(c=u(w))!=null?c:{};if(g)return{shouldRepeat:g,delay:E,newStartAt:D(n,I)}}:void 0}),y=n-k;return{elapsedTime:k,path:j,pathLength:v,remainingTime:Math.ceil(y),rotation:f,size:a,stroke:He(t,y),strokeDashoffset:K(k,0,v,n,m),strokeWidth:o}},V=t=>{let{children:n,strokeLinecap:s,trailColor:r,trailStrokeWidth:a}=t,{path:o,pathLength:l,stroke:x,strokeDashoffset:m,remainingTime:f,elapsedTime:u,size:p,strokeWidth:d}=Je(t);return $.createElement("div",{style:Ve(p)},$.createElement("svg",{viewBox:`0 0 ${p} ${p}`,width:p,height:p,xmlns:"http://www.w3.org/2000/svg"},$.createElement("path",{d:o,fill:"none",stroke:r??"#d9d9d9",strokeWidth:a??d}),$.createElement("path",{d:o,fill:"none",stroke:x,strokeLinecap:s??"round",strokeWidth:d,strokeDasharray:l,strokeDashoffset:m})),typeof n=="function"&&$.createElement("div",{style:Ye},n({remainingTime:f,elapsedTime:u,color:x})))};V.displayName="CountdownCircleTimer";const Xe=({onToogle:t,exerciseInfo:n,setIsSuccessOpen:s,setWorkoutDoneInfo:r})=>{const a=n.time*60,[o,l]=h.useState(!1),[x,m]=h.useState(0),[f,u]=h.useState(0),[p,d]=h.useState(a),b=T();function j(c){const g=Math.floor(c/60),E=c%60;return`${g}:${E<10?"0":""}${E}`}const v=Math.round(n.burnedCalories/a*100)/100;h.useEffect(()=>{let c;return o&&p!==x?c=setInterval(()=>{m(g=>g+1),u(g=>g+v)},1e3):x===p&&(l(!1),d(g=>g+a)),()=>clearInterval(c)},[a,l,m,o,x,u,v,p]);const k=()=>{l(c=>!c)},y=j(x),w=()=>{if(o||x<1){Q.error("Impossible to add workout. Finish working out before adding!");return}const c={exerciseId:n._id,time:Math.ceil(x/60),calories:Math.ceil(f)};b(Z(c)),r({time:c.time,calories:c.calories}),s(),t(),console.log(c)};return e.jsx(_,{onClose:t,modalStyles:{width:"335px",height:"858px",flexDirection:"column",alignItems:"center",display:"flex",padding:"0"},modalTabletStyles:{width:"694px",height:"550px",display:"flex",flexDirection:"inherit",gap:"16px",margin:"0px",alignItems:"flex-start"},children:e.jsxs(e.Fragment,{children:[e.jsxs(W,{children:[e.jsx(Se,{children:e.jsx(Ie,{src:n.gifUrl,alt:"Working out"})}),e.jsxs(Fe,{children:[e.jsx(Be,{children:"Time"}),e.jsx(V,{isPlaying:o,duration:a,size:125,colors:"#E6533C",trailColor:"#EFEDE81A",strokeWidth:4,onComplete:()=>{if(o)return{shouldRepeat:!0}},children:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",color:"white"},children:e.jsx("div",{children:y})})})]}),e.jsx(Re,{type:"button",onClick:k,children:e.jsx(Pe,{children:e.jsx("svg",{fill:"#EFEDE8",children:o?e.jsx("use",{href:z+"#icon-pause-square"}):e.jsx("use",{href:z+"#icon-play"})})})}),e.jsxs(Ne,{children:[e.jsx(_e,{children:"Burned calories:"}),e.jsx(Oe,{children:Math.round(f*100)/100})]})]}),e.jsxs(W,{children:[e.jsx(De,{children:Object.entries(n).filter(([c,g])=>c!=="gifUrl"&&c!=="burnedCalories"&&c!=="_id").map(([c,g])=>e.jsx(Ae,{children:e.jsxs(Le,{children:[e.jsx(We,{children:c}),e.jsx(Me,{children:g})]})},g))}),e.jsx(qe,{onClick:w,children:e.jsx(Ue,{children:"Add to diary"})})]})]})})},Qe="/project-Power-7/assets/thumb-up-1x-575f03e5.png",Ze=i(_)`

`,et=i.button`
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
`,tt=i.img`
  width: 118px;
  height: 73px;
  margin-bottom: 27px;
  margin-top: 48px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 64px;
  }
`,it=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,nt=i.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`,rt=i.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,A=i.li`
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
`,N=i.span`
  color: #e6533c;
`,ot=i.div`
  margin-bottom: 16px;
`,st=i(ee)`
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
`,at=({time:t,calories:n,onClick:s,onClose:r})=>e.jsx(Ze,{modalStyles:{maxWidth:"430px",width:"100%",height:"384px"},modalTabletStyles:{width:"430px",height:"439px"},modalDesktopStyles:{width:"430px",height:"439px"},onClose:r,children:e.jsxs(it,{children:[e.jsx(tt,{src:Qe,alt:"Thumb Up"}),e.jsxs(rt,{children:[e.jsx(nt,{children:"Well done"}),e.jsxs("ul",{children:[e.jsxs(A,{children:["Your time:",e.jsxs(N,{children:[t||0," minutes"]})]}),e.jsxs(A,{children:["Burned calories:",e.jsx(N,{children:n||0})]})]})]}),e.jsx(ot,{children:e.jsx(et,{children:"Next exercise "})}),e.jsxs(st,{to:"/diary",children:["To the diary",e.jsx("svg",{width:" 16px",height:"16px",children:e.jsx("use",{href:`${te}#arrow_gray`})})]})]})}),lt=i.li`
  width: 335px;
  min-height: 141px;
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 16px 16px;
  @media (min-width: 1440px) {
    width: 405px;
  }
`,ct=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 27px;
  }
`,dt=i.h3`
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
`,pt=i.svg`
  
  

  width: 20px;
  height: 20px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,xt=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`,ht=i.h2`
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
`,gt=i.ul`
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
`,mt=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,ft=i.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,ut=({card:t,toogleModal:n})=>e.jsxs(lt,{children:[e.jsxs(ct,{children:[e.jsx(dt,{children:"WORKOUT"}),e.jsxs(ie,{style:{display:"flex",alignItems:"center"},onClick:()=>n(t),children:[e.jsx(ft,{children:"Start"}),e.jsx(mt,{children:e.jsxs("svg",{fill:"#efede8",children:[" ",e.jsx("use",{href:z+"#icon-arrow-right"})]})})]})]}),e.jsxs(xt,{children:[e.jsx(pt,{children:e.jsx("svg",{children:e.jsx("use",{href:`${z}#icon-run-exercises`})})}),e.jsx(ht,{children:t.name})]}),e.jsxs(gt,{children:[e.jsxs("li",{children:["Burned calories:",e.jsx("span",{children:t.burnedCalories})]}),e.jsxs("li",{children:["Body part: ",e.jsx("span",{children:t.bodyPart})]}),e.jsxs("li",{children:["Target:",e.jsx("span",{children:t.target})]})]})]},t._id),wt=()=>{const t=T(),[n,s]=h.useState({time:0,calories:0}),[r,a]=h.useState(!1),[o,l]=h.useState(!1),[x,m]=h.useState(null),f=d=>{l(b=>!b),m(d)},u=C(de),p=()=>{t(R(""))};return e.jsxs("div",{style:{position:"relative"},children:[e.jsxs($e,{onClick:()=>p(),children:[e.jsx("svg",{width:"20",height:"20",stroke:"rgb(239, 237, 232, 0.4)",children:e.jsx("use",{href:z+"#icon-arrow-left"})}),"Back"]}),e.jsx(ze,{children:e.jsx(Te,{children:u==null?void 0:u.map(d=>e.jsx(ut,{card:d,toogleModal:f},d._id))})}),o&&e.jsx(Xe,{onToogle:f,exerciseInfo:x,setIsSuccessOpen:()=>a(d=>!d),setWorkoutDoneInfo:s}),r&&e.jsx(at,{onClose:()=>a(d=>!d),time:n.time,calories:n.calories})]})},bt="/project-Power-7/assets/exercises-desktop-1x-6d697564.png",yt="/project-Power-7/assets/exercises-desktop-2x-a7c1451e.png",jt=i.div`
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
    background-image: ${t=>t.theme.activeCategory?`image-set(url(${bt}) 1x, url(${yt}) 2x)`:"none"};
  }
`,vt=({children:t})=>{const n=C(P);return e.jsx(jt,{theme:{activeCategory:n},children:t})},Tt=()=>{const t=C(P);return e.jsx(vt,{children:e.jsx(ne,{children:e.jsxs(me,{children:[e.jsx(ge,{}),t?e.jsx(wt,{}):e.jsx(Ee,{})]})})})};export{Tt as default};
