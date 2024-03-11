import{u as n,B as R,a as I,c as $,j as t,D as V,E as F,F as H,r as p,H as J,I as X,v as Q,x as z,J as Z,K as ee,L as te,N as ie,C as ne}from"./index-de2024d6.js";import{e as oe}from"./UserForm.styled-b1026961.js";import{i as S}from"./sprite-190cdd2e.js";import"./formik.esm-693e48b8.js";const re=n.div`
  max-width: 1440px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 64px;
  }
`,se=n.div`
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,B=n.button`
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

`,ae=n.h2`
  color: ${e=>e.theme.colors.whiteColor};
  font-size: 24px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,le=n.h2`
  color: ${e=>e.theme.colors.whiteColor};
  font-size: 24px;
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,de=e=>e.exercises.loading,q=e=>e.exercises.filter,ce=e=>e.exercises.exercises,pe=e=>e.exercises.categories,D=e=>e.exercises.categoryPicked,_=R([q,pe,de],(e,i,s)=>{if(!s)return i.filter(o=>(o==null?void 0:o.filter)===e)}),O=e=>e.exercises.categoriesPage,U=e=>e.exercises.categoriesLimit,xe=R([_,O,U],(e,i,s)=>{let o=[];return e.length>0&&(o=e.slice((i-1)*s,i*s)),o}),he=R([_,U],(e,i)=>{let s=[];const o=Math.ceil(e.length/i);if(o>1){for(let a=1;a<=o;a++)s.push(a);return s}}),me=()=>{const e=I(),i=$(q),s=$(D),o=a=>{e(V(a)),e(F(""))};return t.jsxs(re,{children:[s?t.jsx(ae,{children:s}):t.jsx(le,{children:"Exercises"}),t.jsxs(se,{children:[t.jsx(B,{type:"button",onClick:()=>o("Body parts"),theme:{kostil:i==="Body parts"?void 0:"true"},children:"Body parts"}),t.jsx(B,{type:"button",onClick:()=>o("Muscles"),theme:{kostil:i==="Muscles"?void 0:"true"},children:"Muscles"}),t.jsx(B,{type:"button",onClick:()=>o("Equipment"),theme:{kostil:i==="Equipment"?void 0:"true"},children:"Equipment"})]})]})},ge=n.div`
padding-top: 40px;
padding-bottom: 80px;

@media screen and (min-width: 768px) {
    padding-top: 72px;
    }
`,fe=n.ul`
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
`,ue=n.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  gap: 8px;

`;n.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  /* ${e=>e.active&&{backgroundColor:"transparent"}} */
`;n.ul`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;n.li`
  margin-right: 8px;
`;const be=n.li`
  position: relative;
  cursor: pointer;
`,we=n.img`
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
`,ye=n.div`
 
  

  


`,je=n.div`
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
`,ve=n.div`
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
`,ke=n.p`
  margin-top: 2px;
  margin-bottom: 0;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,Ce=({title:e,filter:i,photo:s})=>{const o=I(),a=r=>{o(H(r)),o(F(r))};return t.jsx(be,{onClick:()=>a(e),children:t.jsxs(ye,{children:[t.jsx(we,{src:s||images,alt:e}),t.jsx(je,{children:t.jsxs(ve,{children:[e,t.jsx(ke,{children:i})]})})]})})},$e=({handleSetExName:e})=>{const i=I(),s=$(xe),o=$(he),a=$(O);return p.useEffect(()=>{i(J())},[i]),t.jsxs("div",{children:[t.jsx(fe,{children:s==null?void 0:s.map(r=>t.jsx(Ce,{handleSetExName:e,filter:r.filter,title:r.name,photo:r.imgURL},r._id))}),")",t.jsx(ue,{children:o==null?void 0:o.map(r=>t.jsx(oe,{children:t.jsxs("div",{className:"radio",children:[t.jsx("input",{className:"radio-input",type:"radio",id:r,value:r,checked:a===r,onChange:()=>i(X(r))}),t.jsx("label",{className:"radio-label",htmlFor:r})]})},r))})]})},Ee=n.button`
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

`,Se=n.div`
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
`,Te=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`;n.li`
  width: 335px;
  min-height: 141px;
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 16px 16px;
  @media (min-width: 1440px) {
    width: 405px;
  }
`;n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 27px;
  }
`;n.h3`
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
`;n.svg`
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
`;n.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;n.h2`
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
`;n.ul`
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
`;n.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;n.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;n.div`
  width: 335px;
  height: 858px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;const ze=n.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`,Ie=n.div`
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
`,Be=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,Re=n.button`
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
`,Fe=n.svg`
  width: 36px;
  height: 36px;
`,De=n.p`
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
`;n.ul`
  display: flex;
  padding: 12px 80px 12px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;const Pe=n.p`
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
`,We=n.p`
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
`,Me=n.ul`
  display: flex;
  width: 302px;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;

  @media (min-width: 768px) {
    width: 345px;
  }
`,Le=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-items: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ae=n.li`
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
`,Ne=n.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,qe=n.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,_e=n.p`
  color: #e6533c;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,Oe=n.button`
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
`,Ue=n.span`
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`,P=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Ge=n.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(10, 10, 10, 0.495);

  z-index: 10000;
`,Ye=n.div`
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
`,Ke=n.button`
  position: absolute;

  top: 14px;
  right: 14px;
  background-color: #10100f;
  border: none;
  outline: none;
  cursor: pointer;
`,Ve=document.querySelector("#modal-root"),G=({onClose:e,children:i,modalStyles:s,modalTabletStyles:o,modalDesktopStyles:a,modal320Styles:r})=>{const l=window.scrollY,c=x=>{x.currentTarget===x.target&&e()};return p.useEffect(()=>{const x=g=>{g.code==="Escape"&&e()};return document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top=`-${l}px`,window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x),document.body.style.position="",window.scrollTo(0,l),document.body.style.top="",document.body.style.width=""}},[e,l]),Q.createPortal(t.jsx(Ge,{onClick:c,children:t.jsxs(Ye,{theme:{modal320Styles:r,modalStyles:s,modalTabletStyles:o,modalDesktopStyles:a},children:[t.jsx(Ke,{type:"button",onClick:e,children:t.jsx("svg",{width:"20",height:"20",stroke:"white",children:t.jsx("use",{href:S+"#icon-x"})})}),i]})}),Ve)};var W=typeof window>"u"?p.useEffect:p.useLayoutEffect,He=({isPlaying:e,duration:i,startAt:s=0,updateInterval:o=0,onComplete:a,onUpdate:r})=>{let[l,c]=p.useState(s),x=p.useRef(0),g=p.useRef(s),u=p.useRef(s*-1e3),m=p.useRef(null),d=p.useRef(null),b=p.useRef(null),k=y=>{let w=y/1e3;if(d.current===null){d.current=w,m.current=requestAnimationFrame(k);return}let j=w-d.current,v=x.current+j;d.current=w,x.current=v;let h=g.current+(o===0?v:(v/o|0)*o),f=g.current+v,T=typeof i=="number"&&f>=i;c(T?i:h),T||(m.current=requestAnimationFrame(k))},E=()=>{m.current&&cancelAnimationFrame(m.current),b.current&&clearTimeout(b.current),d.current=null},C=p.useCallback(y=>{E(),x.current=0;let w=typeof y=="number"?y:s;g.current=w,c(w),e&&(m.current=requestAnimationFrame(k))},[e,s]);return W(()=>{if(r==null||r(l),i&&l>=i){u.current+=i*1e3;let{shouldRepeat:y=!1,delay:w=0,newStartAt:j}=(a==null?void 0:a(u.current/1e3))||{};y&&(b.current=setTimeout(()=>C(j),w*1e3))}},[l,i]),W(()=>(e&&(m.current=requestAnimationFrame(k)),E),[e,i,o]),{elapsedTime:l,reset:C}},Je=(e,i,s)=>{let o=e/2,a=i/2,r=o-a,l=2*r,c=s==="clockwise"?"1,0":"0,1",x=2*Math.PI*r;return{path:`m ${o},${a} a ${r},${r} 0 ${c} 0,${l} a ${r},${r} 0 ${c} 0,-${l}`,pathLength:x}},M=(e,i)=>e===0||e===i?0:typeof i=="number"?e-i:0,Xe=e=>({position:"relative",width:e,height:e}),Qe={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},Y=(e,i,s,o,a)=>{if(o===0)return i;let r=(a?o-e:e)/o;return i+s*r},L=e=>{var i,s;return(s=(i=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,a,r,l)=>`#${a}${a}${r}${r}${l}${l}`).substring(1).match(/.{2}/g))==null?void 0:i.map(o=>parseInt(o,16)))!=null?s:[]},Ze=(e,i)=>{var s;let{colors:o,colorsTime:a,isSmoothColorTransition:r=!0}=e;if(typeof o=="string")return o;let l=(s=a==null?void 0:a.findIndex((d,b)=>d>=i&&i>=a[b+1]))!=null?s:-1;if(!a||l===-1)return o[0];if(!r)return o[l];let c=a[l]-i,x=a[l]-a[l+1],g=L(o[l]),u=L(o[l+1]),m=!!e.isGrowing;return`rgb(${g.map((d,b)=>Y(c,d,u[b]-d,x,m)|0).join(",")})`},et=e=>{let{duration:i,initialRemainingTime:s,updateInterval:o,size:a=180,strokeWidth:r=12,trailStrokeWidth:l,isPlaying:c=!1,isGrowing:x=!1,rotation:g="clockwise",onComplete:u,onUpdate:m}=e,d=p.useRef(),b=Math.max(r,l??0),{path:k,pathLength:E}=Je(a,b,g),{elapsedTime:C}=He({isPlaying:c,duration:i,startAt:M(i,s),updateInterval:o,onUpdate:typeof m=="function"?w=>{let j=Math.ceil(i-w);j!==d.current&&(d.current=j,m(j))}:void 0,onComplete:typeof u=="function"?w=>{var j;let{shouldRepeat:v,delay:h,newInitialRemainingTime:f}=(j=u(w))!=null?j:{};if(v)return{shouldRepeat:v,delay:h,newStartAt:M(i,f)}}:void 0}),y=i-C;return{elapsedTime:C,path:k,pathLength:E,remainingTime:Math.ceil(y),rotation:g,size:a,stroke:Ze(e,y),strokeDashoffset:Y(C,0,E,i,x),strokeWidth:r}},K=e=>{let{children:i,strokeLinecap:s,trailColor:o,trailStrokeWidth:a}=e,{path:r,pathLength:l,stroke:c,strokeDashoffset:x,remainingTime:g,elapsedTime:u,size:m,strokeWidth:d}=et(e);return z.createElement("div",{style:Xe(m)},z.createElement("svg",{viewBox:`0 0 ${m} ${m}`,width:m,height:m,xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:r,fill:"none",stroke:o??"#d9d9d9",strokeWidth:a??d}),z.createElement("path",{d:r,fill:"none",stroke:c,strokeLinecap:s??"round",strokeWidth:d,strokeDasharray:l,strokeDashoffset:x})),typeof i=="function"&&z.createElement("div",{style:Qe},i({remainingTime:g,elapsedTime:u,color:c})))};K.displayName="CountdownCircleTimer";const tt=({onToogle:e,exerciseInfo:i,setIsSuccessOpen:s,setWorkoutDoneInfo:o})=>{const a=i.time*60,[r,l]=p.useState(!1),[c,x]=p.useState(0),[g,u]=p.useState(0),[m,d]=p.useState(0),[b,k]=p.useState(a),E=I();function C(h){const f=Math.floor(h/60),T=h%60;return`${f}:${T<10?"0":""}${T}`}const y=Math.round(i.burnedCalories/a*100)/100;p.useEffect(()=>{let h;return r&&b!==c?h=setInterval(()=>{x(f=>f+1),u(f=>f+y)},1e3):c===b&&(l(!1),k(f=>f+a),d(f=>f+1)),()=>clearInterval(h)},[a,l,x,r,c,u,y,b]);const w=()=>{l(h=>!h)},j=C(c),v=()=>{if(r||c<1){Z.error("Impossible to add workout. Finish working out before adding!");return}const h={exerciseId:i._id,time:Math.ceil(c/60),calories:Math.ceil(g)};E(ee(h)),o({time:h.time,calories:h.calories}),s(),e(),console.log(h)};return t.jsx(G,{onClose:e,modalStyles:{width:"335px",height:"858px",flexDirection:"column",alignItems:"center",display:"flex",padding:"0"},modalTabletStyles:{width:"694px",height:"550px",display:"flex",flexDirection:"inherit",gap:"16px",margin:"0px",alignItems:"flex-start"},children:t.jsxs(t.Fragment,{children:[t.jsxs(P,{children:[t.jsx(Ie,{children:t.jsx(ze,{src:i.gifUrl,alt:"Working out"})}),t.jsxs(Be,{children:[t.jsx(De,{children:"Time"}),t.jsx(K,{isPlaying:r,duration:a,size:125,colors:"#E6533C",trailColor:"#EFEDE81A",strokeWidth:4,onComplete:()=>{if(r)return{shouldRepeat:!0}},children:()=>t.jsx("div",{style:{display:"flex",flexDirection:"column",color:"white"},children:t.jsx("div",{children:j})})})]}),t.jsx(Re,{type:"button",onClick:w,children:t.jsx(Fe,{children:t.jsx("svg",{fill:"#EFEDE8",children:r?t.jsx("use",{href:S+"#icon-pause-square"}):t.jsx("use",{href:S+"#icon-play"})})})}),t.jsxs(Ne,{children:[t.jsx(qe,{children:"Burned calories:"}),t.jsx(_e,{children:Math.round(g*100)/100})]})]}),t.jsxs(P,{children:[t.jsx(Me,{children:Object.entries(i).filter(([h,f])=>h!=="gifUrl"&&h!=="burnedCalories"&&h!=="_id").map(([h,f])=>t.jsx(Ae,{children:t.jsxs(Le,{children:[t.jsx(Pe,{children:h}),t.jsx(We,{children:f})]})},f))}),t.jsx(Oe,{onClick:v,children:t.jsx(Ue,{children:"Add to diary"})})]})]})})},it=[320,768,1440],nt=it.map(e=>`@media screen and (min-width: ${e}px)`),ot=n.button`
  @media screen and (max-width: 374px) {
    ${e=>e.btn320Styles}
  }

  cursor: pointer;

  padding: ${({modalButton:e,filled:i})=>e?i?"12px 32px":"12px 36px":"12px 40px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  color: #efede8;

  background-color: ${e=>e.filled?"#e6533c":"transparent"};

  border: 1px solid;
  border-color: ${e=>e.filled?"#e6533c":"rgba(239, 237, 232, 0.30)"};
  border-radius: 12px;

  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    background-color: ${e=>e.filled?"#ef8964":"transparent"};
    border-color: ${e=>e.filled?"#ef8964":"#e6533c"};
  }

  &:disabled {
    color: rgba(239, 237, 232, 0.6);
  }

  ${e=>e.btnStyles}

  ${nt[1]} {
    padding: 16px 60px;
    padding: ${({modalButton:e,filled:i})=>e?i?"14px 32px":"14px 40px":"16px 60px"};

    font-size: ${({modalButton:e,filled:i})=>e&&i?"16px":"20px"};
    line-height: ${({modalButton:e,filled:i})=>e&&i?"1.5":"1.2"};
  }
`,rt=({type:e,text:i,filled:s,disabled:o,btnStyles:a,modalButton:r,onClick:l,btn320Styles:c})=>t.jsx(ot,{type:e,filled:s,disabled:o,btnStyles:a,btn320Styles:c,modalButton:r,onClick:l,children:i}),st="/project-Power-7/assets/thumb-up-1x-575f03e5.png",at=n.img`
  width: 118px;
  height: 73px;
  margin-bottom: 27px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,lt=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,dt=n.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`,ct=n.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,A=n.li`
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
`,N=n.span`
  color: #e6533c;
`,pt=n.div`
  margin-bottom: 16px;
`,xt=n(te)`
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,ht=({time:e,calories:i,onClick:s,onClose:o})=>t.jsx(G,{modalStyles:{maxWidth:"335px",width:"100%",height:"384px"},modalTabletStyles:{width:"430px",height:"439px"},modalDesktopStyles:{width:"430px",height:"439px"},onClose:o,children:t.jsxs(lt,{children:[t.jsx(at,{src:st,alt:"Thumb Up"}),t.jsxs(ct,{children:[t.jsx(dt,{children:"Well done"}),t.jsxs("ul",{children:[t.jsxs(A,{children:["Your time:",t.jsxs(N,{children:[e||0," minutes"]})]}),t.jsxs(A,{children:["Burned calories:",t.jsx(N,{children:i||0})]})]})]}),t.jsx(pt,{children:t.jsx(rt,{onClick:o,filled:"#E6533C",text:"Next exercise",type:"button",modalButton:"modalButton"})}),t.jsxs(xt,{to:"/diary",children:["To the diary",t.jsx("svg",{width:" 16px",height:"16px",children:t.jsx("use",{href:S+"#icon-arrow-right"})})]})]})}),mt=n.li`
  width: 335px;
  min-height: 141px;
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 16px 16px;
  @media (min-width: 1440px) {
    width: 405px;
  }
`,gt=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 27px;
  }
`,ft=n.h3`
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
`,ut=n.svg`
  
  

  width: 20px;
  height: 20px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,bt=n.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`,wt=n.h2`
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
`,yt=n.ul`
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
`,jt=n.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,vt=n.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,kt=({card:e,toogleModal:i})=>t.jsxs(mt,{children:[t.jsxs(gt,{children:[t.jsx(ft,{children:"WORKOUT"}),t.jsxs(ie,{style:{display:"flex",alignItems:"center"},onClick:()=>i(e),children:[t.jsx(vt,{children:"Start"}),t.jsx(jt,{children:t.jsxs("svg",{fill:"#efede8",children:[" ",t.jsx("use",{href:S+"#icon-arrow-right"})]})})]})]}),t.jsxs(bt,{children:[t.jsx(ut,{children:t.jsx("svg",{children:t.jsx("use",{href:`${S}#icon-run-exercises`})})}),t.jsx(wt,{children:e.name})]}),t.jsxs(yt,{children:[t.jsxs("li",{children:["Burned calories:",t.jsx("span",{children:e.burnedCalories})]}),t.jsxs("li",{children:["Body part: ",t.jsx("span",{children:e.bodyPart})]}),t.jsxs("li",{children:["Target:",t.jsx("span",{children:e.target})]})]})]},e._id),Ct=()=>{const e=I(),[i,s]=p.useState({time:0,calories:0}),[o,a]=p.useState(!1),[r,l]=p.useState(!1),[c,x]=p.useState(null),g=d=>{l(b=>!b),x(d)},u=$(ce),m=()=>{e(F(""))};return t.jsxs("div",{style:{position:"relative"},children:[t.jsxs(Ee,{onClick:()=>m(),children:[t.jsx("svg",{width:"20",height:"20",stroke:"rgb(239, 237, 232, 0.4)",children:t.jsx("use",{href:S+"#icon-arrow-left"})}),"Back"]}),t.jsx(Se,{children:t.jsx(Te,{children:u==null?void 0:u.map(d=>t.jsx(kt,{card:d,toogleModal:g},d._id))})}),r&&t.jsx(tt,{onToogle:g,exerciseInfo:c,setIsSuccessOpen:()=>a(d=>!d),setWorkoutDoneInfo:s}),o&&t.jsx(ht,{onClose:()=>a(d=>!d),time:i.time,calories:i.calories})]})},$t="/project-Power-7/assets/exercises-desktop-1x-6d697564.png",Et="/project-Power-7/assets/exercises-desktop-2x-a7c1451e.png",St=n.div`
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
  background-image: ${e=>e.theme.activeCategory?`image-set(url(${$t}) 1x, url(${Et}) 2x)`:"none"};
  }

 
`,Tt=({children:e})=>{const i=$(D);return t.jsx(St,{theme:{activeCategory:i},children:e})},Ft=()=>{const e=$(D);return t.jsx(Tt,{children:t.jsx(ne,{children:t.jsxs(ge,{children:[t.jsx(me,{}),e?t.jsx(Ct,{}):t.jsx($e,{})]})})})};export{Ft as default};
