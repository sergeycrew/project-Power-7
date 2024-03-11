import{u as i,E as F,a as z,c as C,j as t,F as V,H as R,I as H,r as m,J,K as X,v as Q,x as T,M as Z,N as ee,L as te,s as ie,O as ne,C as re}from"./index-4117e63b.js";import{e as oe}from"./UserForm.styled-05506f57.js";import{i as $}from"./sprite-e02aacb9.js";import"./formik.esm-7d157dc3.js";const se=i.div`
  max-width: 1440px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 64px;
  }
`,ae=i.div`
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,I=i.button`
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

`,le=i.h2`
  color: ${e=>e.theme.colors.whiteColor};
  font-size: 24px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,de=i.h2`
  color: ${e=>e.theme.colors.whiteColor};
  font-size: 24px;
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 0px;
  }
`,ce=e=>e.exercises.loading,_=e=>e.exercises.filter,pe=e=>e.exercises.exercises,xe=e=>e.exercises.categories,B=e=>e.exercises.categoryPicked,O=F([_,xe,ce],(e,n,s)=>{if(!s)return n.filter(r=>(r==null?void 0:r.filter)===e)}),q=e=>e.exercises.categoriesPage,U=e=>e.exercises.categoriesLimit,he=F([O,q,U],(e,n,s)=>{let r=[];return e.length>0&&(r=e.slice((n-1)*s,n*s)),r}),me=F([O,U],(e,n)=>{let s=[];const r=Math.ceil(e.length/n);if(r>1){for(let a=1;a<=r;a++)s.push(a);return s}}),ge=()=>{const e=z(),n=C(_),s=C(B),r=a=>{e(V(a)),e(R(""))};return t.jsxs(se,{children:[s?t.jsx(le,{children:s}):t.jsx(de,{children:"Exercises"}),t.jsxs(ae,{children:[t.jsx(I,{type:"button",onClick:()=>r("Body parts"),theme:{kostil:n==="Body parts"?void 0:"true"},children:"Body parts"}),t.jsx(I,{type:"button",onClick:()=>r("Muscles"),theme:{kostil:n==="Muscles"?void 0:"true"},children:"Muscles"}),t.jsx(I,{type:"button",onClick:()=>r("Equipment"),theme:{kostil:n==="Equipment"?void 0:"true"},children:"Equipment"})]})]})},fe=i.div`
padding-top: 40px;
padding-bottom: 80px;

@media screen and (min-width: 768px) {
    padding-top: 72px;
    }
`,ue=i.ul`
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
`,we=i.div`
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

  /* ${e=>e.active&&{backgroundColor:"transparent"}} */
`;i.ul`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;i.li`
  margin-right: 8px;
`;const be=i.li`
  position: relative;
  cursor: pointer;
`,ye=i.img`
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
`,je=i.div`
 
  

  


`,ve=i.div`
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
`,ke=i.div`
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
`,Ce=i.p`
  margin-top: 2px;
  margin-bottom: 0;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,Ee=({title:e,filter:n,photo:s})=>{const r=z(),a=o=>{r(H(o)),r(R(o))};return t.jsx(be,{onClick:()=>a(e),children:t.jsxs(je,{children:[t.jsx(ye,{src:s||images,alt:e}),t.jsx(ve,{children:t.jsxs(ke,{children:[e,t.jsx(Ce,{children:n})]})})]})})},$e=({handleSetExName:e})=>{const n=z(),s=C(he),r=C(me),a=C(q);return m.useEffect(()=>{n(J())},[n]),t.jsxs("div",{children:[t.jsx(ue,{children:s==null?void 0:s.map(o=>t.jsx(Ee,{handleSetExName:e,filter:o.filter,title:o.name,photo:o.imgURL},o._id))}),")",t.jsx(we,{children:r==null?void 0:r.map(o=>t.jsx(oe,{children:t.jsxs("div",{className:"radio",children:[t.jsx("input",{className:"radio-input",type:"radio",id:o,value:o,checked:a===o,onChange:()=>n(X(o))}),t.jsx("label",{className:"radio-label",htmlFor:o})]})},o))})]})},Te=i.button`
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
`,Se=i.ul`
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
`,Fe=i.div`
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
`,Re=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,Be=i.button`
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
`,De=i.svg`
  width: 36px;
  height: 36px;
`,Me=i.p`
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
`;const Pe=i.p`
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
`,We=i.p`
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
`,Le=i.ul`
  display: flex;
  width: 302px;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;

  @media (min-width: 768px) {
    width: 345px;
  }
`,Ae=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-items: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ne=i.li`
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
`,_e=i.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`,Oe=i.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,qe=i.p`
  color: #e6533c;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`,Ue=i.button`
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
`,Ge=i.span`
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`,M=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Ye=i.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(10, 10, 10, 0.495);

  z-index: 10000;
`,Ke=i.div`
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
`,Ve=i.button`
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
`,He=document.querySelector("#modal-root"),G=({onClose:e,children:n,modalStyles:s,modalTabletStyles:r,modalDesktopStyles:a,modal320Styles:o})=>{const l=window.scrollY,p=h=>{h.currentTarget===h.target&&e()};return m.useEffect(()=>{const h=f=>{f.code==="Escape"&&e()};return document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top=`-${l}px`,window.addEventListener("keydown",h),()=>{window.removeEventListener("keydown",h),document.body.style.position="",window.scrollTo(0,l),document.body.style.top="",document.body.style.width=""}},[e,l]),Q.createPortal(t.jsx(Ye,{onClick:p,children:t.jsxs(Ke,{theme:{modal320Styles:o,modalStyles:s,modalTabletStyles:r,modalDesktopStyles:a},children:[t.jsx(Ve,{type:"button",onClick:e,children:t.jsx("svg",{width:"20",height:"20",stroke:"white",children:t.jsx("use",{href:$+"#icon-x"})})}),n]})}),He)};var P=typeof window>"u"?m.useEffect:m.useLayoutEffect,Je=({isPlaying:e,duration:n,startAt:s=0,updateInterval:r=0,onComplete:a,onUpdate:o})=>{let[l,p]=m.useState(s),h=m.useRef(0),f=m.useRef(s),u=m.useRef(s*-1e3),x=m.useRef(null),c=m.useRef(null),b=m.useRef(null),j=y=>{let w=y/1e3;if(c.current===null){c.current=w,x.current=requestAnimationFrame(j);return}let d=w-c.current,g=h.current+d;c.current=w,h.current=g;let E=f.current+(r===0?g:(g/r|0)*r),S=f.current+g,D=typeof n=="number"&&S>=n;p(D?n:E),D||(x.current=requestAnimationFrame(j))},v=()=>{x.current&&cancelAnimationFrame(x.current),b.current&&clearTimeout(b.current),c.current=null},k=m.useCallback(y=>{v(),h.current=0;let w=typeof y=="number"?y:s;f.current=w,p(w),e&&(x.current=requestAnimationFrame(j))},[e,s]);return P(()=>{if(o==null||o(l),n&&l>=n){u.current+=n*1e3;let{shouldRepeat:y=!1,delay:w=0,newStartAt:d}=(a==null?void 0:a(u.current/1e3))||{};y&&(b.current=setTimeout(()=>k(d),w*1e3))}},[l,n]),P(()=>(e&&(x.current=requestAnimationFrame(j)),v),[e,n,r]),{elapsedTime:l,reset:k}},Xe=(e,n,s)=>{let r=e/2,a=n/2,o=r-a,l=2*o,p=s==="clockwise"?"1,0":"0,1",h=2*Math.PI*o;return{path:`m ${r},${a} a ${o},${o} 0 ${p} 0,${l} a ${o},${o} 0 ${p} 0,-${l}`,pathLength:h}},W=(e,n)=>e===0||e===n?0:typeof n=="number"?e-n:0,Qe=e=>({position:"relative",width:e,height:e}),Ze={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},Y=(e,n,s,r,a)=>{if(r===0)return n;let o=(a?r-e:e)/r;return n+s*o},L=e=>{var n,s;return(s=(n=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(r,a,o,l)=>`#${a}${a}${o}${o}${l}${l}`).substring(1).match(/.{2}/g))==null?void 0:n.map(r=>parseInt(r,16)))!=null?s:[]},et=(e,n)=>{var s;let{colors:r,colorsTime:a,isSmoothColorTransition:o=!0}=e;if(typeof r=="string")return r;let l=(s=a==null?void 0:a.findIndex((c,b)=>c>=n&&n>=a[b+1]))!=null?s:-1;if(!a||l===-1)return r[0];if(!o)return r[l];let p=a[l]-n,h=a[l]-a[l+1],f=L(r[l]),u=L(r[l+1]),x=!!e.isGrowing;return`rgb(${f.map((c,b)=>Y(p,c,u[b]-c,h,x)|0).join(",")})`},tt=e=>{let{duration:n,initialRemainingTime:s,updateInterval:r,size:a=180,strokeWidth:o=12,trailStrokeWidth:l,isPlaying:p=!1,isGrowing:h=!1,rotation:f="clockwise",onComplete:u,onUpdate:x}=e,c=m.useRef(),b=Math.max(o,l??0),{path:j,pathLength:v}=Xe(a,b,f),{elapsedTime:k}=Je({isPlaying:p,duration:n,startAt:W(n,s),updateInterval:r,onUpdate:typeof x=="function"?w=>{let d=Math.ceil(n-w);d!==c.current&&(c.current=d,x(d))}:void 0,onComplete:typeof u=="function"?w=>{var d;let{shouldRepeat:g,delay:E,newInitialRemainingTime:S}=(d=u(w))!=null?d:{};if(g)return{shouldRepeat:g,delay:E,newStartAt:W(n,S)}}:void 0}),y=n-k;return{elapsedTime:k,path:j,pathLength:v,remainingTime:Math.ceil(y),rotation:f,size:a,stroke:et(e,y),strokeDashoffset:Y(k,0,v,n,h),strokeWidth:o}},K=e=>{let{children:n,strokeLinecap:s,trailColor:r,trailStrokeWidth:a}=e,{path:o,pathLength:l,stroke:p,strokeDashoffset:h,remainingTime:f,elapsedTime:u,size:x,strokeWidth:c}=tt(e);return T.createElement("div",{style:Qe(x)},T.createElement("svg",{viewBox:`0 0 ${x} ${x}`,width:x,height:x,xmlns:"http://www.w3.org/2000/svg"},T.createElement("path",{d:o,fill:"none",stroke:r??"#d9d9d9",strokeWidth:a??c}),T.createElement("path",{d:o,fill:"none",stroke:p,strokeLinecap:s??"round",strokeWidth:c,strokeDasharray:l,strokeDashoffset:h})),typeof n=="function"&&T.createElement("div",{style:Ze},n({remainingTime:f,elapsedTime:u,color:p})))};K.displayName="CountdownCircleTimer";const it=({onToogle:e,exerciseInfo:n,setIsSuccessOpen:s,setWorkoutDoneInfo:r})=>{const a=n.time*60,[o,l]=m.useState(!1),[p,h]=m.useState(0),[f,u]=m.useState(0),[x,c]=m.useState(a),b=z();function j(d){const g=Math.floor(d/60),E=d%60;return`${g}:${E<10?"0":""}${E}`}const v=Math.round(n.burnedCalories/a*100)/100;m.useEffect(()=>{let d;return o&&x!==p?d=setInterval(()=>{h(g=>g+1),u(g=>g+v)},1e3):p===x&&(l(!1),c(g=>g+a)),()=>clearInterval(d)},[a,l,h,o,p,u,v,x]);const k=()=>{l(d=>!d)},y=j(p),w=()=>{if(o||p<1){Z.error("Impossible to add workout. Finish working out before adding!");return}const d={exerciseId:n._id,time:Math.ceil(p/60),calories:Math.ceil(f)};b(ee(d)),r({time:d.time,calories:d.calories}),s(),e(),console.log(d)};return t.jsx(G,{onClose:e,modalStyles:{width:"335px",height:"858px",flexDirection:"column",alignItems:"center",display:"flex",padding:"0"},modalTabletStyles:{width:"694px",height:"550px",display:"flex",flexDirection:"inherit",gap:"16px",margin:"0px",alignItems:"flex-start"},children:t.jsxs(t.Fragment,{children:[t.jsxs(M,{children:[t.jsx(Fe,{children:t.jsx(Ie,{src:n.gifUrl,alt:"Working out"})}),t.jsxs(Re,{children:[t.jsx(Me,{children:"Time"}),t.jsx(K,{isPlaying:o,duration:a,size:125,colors:"#E6533C",trailColor:"#EFEDE81A",strokeWidth:4,onComplete:()=>{if(o)return{shouldRepeat:!0}},children:()=>t.jsx("div",{style:{display:"flex",flexDirection:"column",color:"white"},children:t.jsx("div",{children:y})})})]}),t.jsx(Be,{type:"button",onClick:k,children:t.jsx(De,{children:t.jsx("svg",{fill:"#EFEDE8",children:o?t.jsx("use",{href:$+"#icon-pause-square"}):t.jsx("use",{href:$+"#icon-play"})})})}),t.jsxs(_e,{children:[t.jsx(Oe,{children:"Burned calories:"}),t.jsx(qe,{children:Math.round(f*100)/100})]})]}),t.jsxs(M,{children:[t.jsx(Le,{children:Object.entries(n).filter(([d,g])=>d!=="gifUrl"&&d!=="burnedCalories"&&d!=="_id").map(([d,g])=>t.jsx(Ne,{children:t.jsxs(Ae,{children:[t.jsx(Pe,{children:d}),t.jsx(We,{children:g})]})},g))}),t.jsx(Ue,{onClick:w,children:t.jsx(Ge,{children:"Add to diary"})})]})]})})},nt="/project-Power-7/assets/thumb-up-1x-575f03e5.png",rt=i(G)`

`,ot=i.button`
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
`,st=i.img`
  width: 118px;
  height: 73px;
  margin-bottom: 27px;
  margin-top: 48px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 64px;
  }
`,at=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,lt=i.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`,dt=i.div`
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
`,ct=i.div`
  margin-bottom: 16px;
`,pt=i(te)`
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
`,xt=({time:e,calories:n,onClick:s,onClose:r})=>t.jsx(rt,{modalStyles:{maxWidth:"430px",width:"100%",height:"384px"},modalTabletStyles:{width:"430px",height:"439px"},modalDesktopStyles:{width:"430px",height:"439px"},onClose:r,children:t.jsxs(at,{children:[t.jsx(st,{src:nt,alt:"Thumb Up"}),t.jsxs(dt,{children:[t.jsx(lt,{children:"Well done"}),t.jsxs("ul",{children:[t.jsxs(A,{children:["Your time:",t.jsxs(N,{children:[e||0," minutes"]})]}),t.jsxs(A,{children:["Burned calories:",t.jsx(N,{children:n||0})]})]})]}),t.jsx(ct,{children:t.jsx(ot,{children:"Next exercise "})}),t.jsxs(pt,{to:"/diary",children:["To the diary",t.jsx("svg",{width:" 16px",height:"16px",children:t.jsx("use",{href:`${ie}#arrow_gray`})})]})]})}),ht=i.li`
  width: 335px;
  min-height: 141px;
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 16px 16px;
  @media (min-width: 1440px) {
    width: 405px;
  }
`,mt=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 27px;
  }
`,gt=i.h3`
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
`,ft=i.svg`
  
  

  width: 20px;
  height: 20px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,ut=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`,wt=i.h2`
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
`,bt=i.ul`
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
`,yt=i.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,jt=i.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,vt=({card:e,toogleModal:n})=>t.jsxs(ht,{children:[t.jsxs(mt,{children:[t.jsx(gt,{children:"WORKOUT"}),t.jsxs(ne,{style:{display:"flex",alignItems:"center"},onClick:()=>n(e),children:[t.jsx(jt,{children:"Start"}),t.jsx(yt,{children:t.jsxs("svg",{fill:"#efede8",children:[" ",t.jsx("use",{href:$+"#icon-arrow-right"})]})})]})]}),t.jsxs(ut,{children:[t.jsx(ft,{children:t.jsx("svg",{children:t.jsx("use",{href:`${$}#icon-run-exercises`})})}),t.jsx(wt,{children:e.name})]}),t.jsxs(bt,{children:[t.jsxs("li",{children:["Burned calories:",t.jsx("span",{children:e.burnedCalories})]}),t.jsxs("li",{children:["Body part: ",t.jsx("span",{children:e.bodyPart})]}),t.jsxs("li",{children:["Target:",t.jsx("span",{children:e.target})]})]})]},e._id),kt=()=>{const e=z(),[n,s]=m.useState({time:0,calories:0}),[r,a]=m.useState(!1),[o,l]=m.useState(!1),[p,h]=m.useState(null),f=c=>{l(b=>!b),h(c)},u=C(pe),x=()=>{e(R(""))};return t.jsxs("div",{style:{position:"relative"},children:[t.jsxs(Te,{onClick:()=>x(),children:[t.jsx("svg",{width:"20",height:"20",stroke:"rgb(239, 237, 232, 0.4)",children:t.jsx("use",{href:$+"#icon-arrow-left"})}),"Back"]}),t.jsx(ze,{children:t.jsx(Se,{children:u==null?void 0:u.map(c=>t.jsx(vt,{card:c,toogleModal:f},c._id))})}),o&&t.jsx(it,{onToogle:f,exerciseInfo:p,setIsSuccessOpen:()=>a(c=>!c),setWorkoutDoneInfo:s}),r&&t.jsx(xt,{onClose:()=>a(c=>!c),time:n.time,calories:n.calories})]})},Ct="/project-Power-7/assets/exercises-desktop-1x-6d697564.png",Et="/project-Power-7/assets/exercises-desktop-2x-a7c1451e.png",$t=i.div`
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
  background-image: ${e=>e.theme.activeCategory?`image-set(url(${Ct}) 1x, url(${Et}) 2x)`:"none"};
  }

 
`,Tt=({children:e})=>{const n=C(B);return t.jsx($t,{theme:{activeCategory:n},children:e})},Rt=()=>{const e=C(B);return t.jsx(Tt,{children:t.jsx(re,{children:t.jsxs(fe,{children:[t.jsx(ge,{}),e?t.jsx(kt,{}):t.jsx($e,{})]})})})};export{Rt as default};
