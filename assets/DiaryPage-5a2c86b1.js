import{u as n,L,j as i,i as c,b as a,m as $,r as u,a as b,y as E,z as P,A as B,B as S,D as W,E as R}from"./index-06073149.js";import{f as A,i as M,C as N}from"./react-datepicker-cssmodules-5def2b9d.js";import{D}from"./DiaryLoader-37238540.js";import"./floating-ui.dom-9d61e2db.js";const _=n.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 96px;
    max-width: 1440px;
  }
`,q=n.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${e=>e.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
  }
`,U=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 40px 0 40px 0;

  @media screen and (min-width: 768px) {
    padding: 52px 0 32px 0;
  }
`,G=n.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,H=n.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 64px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
    padding-bottom: 68px;
  }
`,I=n.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${e=>e.theme.colors.accentColor};
`,v=n.div`
  max-height: 167px;
  margin-right: -10px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    max-height: 60px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.colors.backgroundColorScroll};
    border-radius: 12px;
  }

  @media screen and (max-width: 767px) {
    max-height: 750px;
    margin-right: -15px;
  }
`,O=n.li`
  border: 1px solid ${e=>e.theme.colors.cardBorderColor};
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  height: 100%;
  min-height: 335px;
  max-height: 824px;
  background: ${e=>e.theme.colors.cardBgColor};
  position: relative;

  overflow: hidden;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 234px;
    max-height: 234px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`,Y=n.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e=>e.theme.colors.fornCaptionColor};
`,J=n(L)`
  display: flex;
  align-items: center;
  gap: 8px;
`,K=n.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${e=>e.theme.colors.hoverColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Q=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,V=n.svg`
  width: 16px;
  height: 16px;

  fill: ${e=>e.theme.colors.hoverColor};
`,k=({title:e,link:t,to:o,children:d})=>i.jsxs(O,{children:[i.jsxs(Q,{children:[i.jsx(Y,{children:e}),i.jsxs(J,{to:o,children:[i.jsx(K,{children:t}),i.jsx(V,{children:i.jsx("use",{href:`${c}#icon-arrow`})})]})]}),d]}),X=e=>e.diary.diaryInfo.isLoadingDiary,Z=e=>e.diary.diaryInfo.isLoadingProducts,F=e=>e.diary.diaryInfo.isLoadingExercises,j=e=>e.diary.currentDate,ee=e=>e.diary.diaryInfo.burnedCalories,ie=e=>e.diary.diaryInfo.consumedCalories,te=e=>e.diary.diaryInfo.doneExercisesTime,ne=e=>e.diary.diaryInfo.products,re=e=>e.diary.diaryInfo.exercises,oe=n.li`
  width: 100%;
  height: 96px;
  border: 1px solid;
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${({$bgColor:e})=>{switch(e){case"orange":return t=>t.theme.colors.orangeColor;default:return t=>t.theme.colors.cardBgColor}}};

  border-color: ${({$borderColor:e})=>{switch(e){case"red":return t=>t.theme.colors.notRecommendedColor;case"green":return t=>t.theme.colors.successtColor;default:return t=>t.theme.colors.cardBorderColor}}};

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    &:first-child {
      margin-bottom: 16px;
    }
  }
`,de=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,se=n.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: ${e=>e.theme.colors.orangeLightColor};
`,ae=n.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({$cardTextColor:e})=>{switch(e){case"white":return t=>t.theme.colors.cardTextColor;default:return t=>t.theme.colors.captionColor}}};
`,ce=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  color: ${e=>e.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,x=({subtitle:e,icon:t,children:o,$bgColor:d,$cardTextColor:r,$borderColor:s})=>i.jsxs(oe,{$bgColor:d,$borderColor:s,children:[i.jsxs(de,{children:[i.jsx(se,{children:i.jsx("use",{href:t})}),i.jsx(ae,{$cardTextColor:r,children:e})]}),i.jsx(ce,{children:o})]}),le=n.div`
  width: 100%;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
    width: 390px;
  }
`,C=n.ul`
  display: flex;
  gap: 13px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: block;
  }

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-bottom: 0;
  }
`,he=n.div`
  display: flex;
  gap: 8px;
  max-width: 100%;

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 593px;
  }
`,xe=n.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e=>e.theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,pe=n.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,me=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
  }
`,ge=(e,t)=>e<t?"green":"gray",we=(e,t)=>e<t?"red":"gray",fe=(e,t)=>e>=t?e-t:`+${t-e}`,ue=(e,t)=>e>=t?e-t:`-${t-e}`,be=e=>e?{text:"Yes",color:"green"}:{text:"No",color:"red"},je=()=>{const e=a($);let t=a(ee),o=a(ie),d=a(te),r=Number(e.timeSport)||110,s=Math.round(e.bmr)||0;return i.jsxs(me,{children:[i.jsxs(le,{children:[i.jsxs(C,{children:[i.jsx(x,{subtitle:"Daily calorie intake",icon:`${c}#food`,$bgColor:"orange",$cardTextColor:"white",children:s}),i.jsx(x,{subtitle:"Daily physical activity",icon:`${c}#dumbbell`,$bgColor:"orange",$cardTextColor:"white",children:`${r} min`})]}),i.jsxs(C,{children:[i.jsx(x,{subtitle:"Сalories consumed",icon:`${c}#apple`,children:Math.abs(o)}),i.jsx(x,{subtitle:"Сalories burned",icon:`${c}#fire`,children:t})]}),i.jsxs(C,{children:[i.jsx(x,{subtitle:"Calories remaining",icon:`${c}#bubble`,$borderColor:we(s,Math.abs(o)),children:ue(s,Math.abs(o))}),i.jsx(x,{subtitle:"Sports remaining",icon:`${c}#figure`,$borderColor:ge(r,d),children:`${fe(r,d)} min`})]})]}),i.jsxs(he,{children:[i.jsx(pe,{children:i.jsx("use",{href:`${c}#exclamation`})}),i.jsx(xe,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},ye=n.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.orangeLightColor};
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,l=({children:e,isFirstItem:t})=>{const[o,d]=u.useState(window.innerWidth<768);return u.useEffect(()=>{const r=()=>{d(window.innerWidth<768)};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}}),i.jsx(ye,{children:o||t?e:null})},Ce=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: -4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-right: 12px;
  }
`,w=n.li`
  width: 100%;
  position: relative;
  &:nth-of-type(1) {
    @media screen and (min-width: 375px) {
      width: 297px;
    }

    @media screen and (min-width: 768px) {
      width: 204px;
    }

    @media screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  &:nth-of-type(2) {
    @media screen and (min-width: 375px) {
      width: 297px;
    }

    @media screen and (min-width: 768px) {
      width: 128px;
    }

    @media screen and (min-width: 1440px) {
      width: 166px;
    }
  }

  &:nth-of-type(3) {
    @media screen and (min-width: 375px) {
      width: 81px;
    }

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 105px;
    }
  }

  &:nth-of-type(4) {
    @media screen and (min-width: 375px) {
      width: 80px;
    }

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 105px;
    }
  }

  &:nth-of-type(5) {
    @media screen and (min-width: 375px) {
      width: 76px;
    }

    @media screen and (min-width: 768px) {
      width: 80px;
    }

    @media screen and (min-width: 1440px) {
      width: 110px;
    }
  }
`,f=n.p`
  border: 1px solid ${e=>e.theme.colors.accentColor};
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-transform: capitalize;
  color: ${e=>e.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 14px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,$e=n.span`
  display: inline-block;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: ${({$color:e})=>{switch(e){case"red":return t=>t.theme.colors.notRecommendedColor;default:return t=>t.theme.colors.recommendedColor}}};
`,De=n.button`
  padding: 0;
  background: none;
  border: none;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    position: relative;
    right: 16px;
    top: 5px;
  }
`,Ie=n.svg`
  height: 20px;
  width: 20px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    animation: shake 3s;
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }

    10% {
      transform: rotate(-5deg);
    }

    20% {
      transform: rotate(5deg);
    }

    30% {
      transform: rotate(-5deg);
    }

    40% {
      transform: rotate(5deg);
    }

    50% {
      transform: rotate(0deg);
      stroke: wheat;
    }

    100% {
      transform: rotate(0deg);
    }
  }
`,ve=n.div`
  display: flex;
  align-items: last baseline;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,ke=({isFirstItem:e,value:t})=>{const o=b();let d=a(j);const r=a($);let s=be(t.productId.groupBloodNotAllowed[r.blood]);const h={date:d,productId:t._id,calories:t.calories,amount:t.amount};return i.jsxs(ve,{children:[i.jsxs(Ce,{children:[i.jsxs(w,{children:[i.jsx(l,{isFirstItem:e,children:"Title"}),i.jsx(f,{children:t.productId.title})]}),i.jsxs(w,{children:[i.jsx(l,{isFirstItem:e,children:"Category"}),i.jsx(f,{children:t.productId.category})]}),i.jsxs(w,{children:[i.jsx(l,{isFirstItem:e,children:"Calories"}),i.jsx(f,{children:t.calories})]}),i.jsxs(w,{children:[i.jsx(l,{isFirstItem:e,children:"Weight"}),i.jsx(f,{children:t.amount})]}),i.jsxs(w,{children:[i.jsx(l,{isFirstItem:e,children:"Recommend"}),i.jsxs(f,{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx($e,{$color:s.color}),i.jsx("span",{children:s.text})]})]})]}),i.jsx(De,{type:"button",onClick:()=>o(E(h)),"aria-label":"delete=button",children:i.jsx(Ie,{children:i.jsx("use",{href:`${c}#trash`})})})]})},ze=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: -4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-right: 12px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 20px;
  }
`,p=n.li`
  width: 100%;
  position: relative;

  &:nth-of-type(1) {
    @media screen and (min-width: 375px) {
      width: 297px;
    }

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 115px;
    }
  }

  &:nth-of-type(2) {
    @media screen and (min-width: 375px) {
      width: 297px;
    }

    @media screen and (min-width: 768px) {
      width: 132px;
    }

    @media screen and (min-width: 1440px) {
      width: 157px;
    }
  }

  &:nth-of-type(3) {
    @media screen and (min-width: 375px) {
      width: 297px;
    }

    @media screen and (min-width: 768px) {
      width: 128px;
    }

    @media screen and (min-width: 1440px) {
      width: 131px;
    }
  }

  &:nth-of-type(4) {
    @media screen and (min-width: 375px) {
      width: 81px;
    }

    @media screen and (min-width: 768px) {
      width: 84px;
    }

    @media screen and (min-width: 1440px) {
      width: 106px;
    }
  }

  &:nth-of-type(5) {
    @media screen and (min-width: 375px) {
      width: 80px;
    }

    @media screen and (min-width: 768px) {
      width: 78px;
    }

    @media screen and (min-width: 1440px) {
      width: 91px;
    }
  }

  &:nth-of-type(6) {
    @media screen and (min-width: 375px) {
      width: 76px;
    }

    @media screen and (min-width: 1440px) {
      width: 82px;
    }
  }
`,m=n.p`
  border: 1px solid ${e=>e.theme.colors.accentColor};
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-transform: capitalize;
  color: ${e=>e.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 14px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`,Te=n.button`
  padding: 0;
  background: none;
  border: none;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    position: relative;
    right: 16px;
    top: 5px;
  }
`,Le=n.svg`
  height: 20px;
  width: 20px;
  fill: ${e=>e.theme.colors.orangeLightColor};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    animation: shake 3s;
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }

    10% {
      transform: rotate(-5deg);
    }

    20% {
      transform: rotate(5deg);
    }

    30% {
      transform: rotate(-5deg);
    }

    40% {
      transform: rotate(5deg);
    }

    50% {
      transform: rotate(0deg);
      stroke: wheat;
    }

    100% {
      transform: rotate(0deg);
    }
  }
`,Ee=n.div`
  display: flex;
  align-items: last baseline;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,Pe=({isFirstItem:e,value:t})=>{const o=b(),r={date:a(j),exerciseId:t._id,calories:t.calories,time:t.time};return i.jsxs(Ee,{children:[i.jsxs(ze,{children:[i.jsxs(p,{children:[i.jsx(l,{isFirstItem:e,children:"Body Part"}),i.jsx(m,{children:t.exerciseId.bodyPart})]}),i.jsxs(p,{children:[i.jsx(l,{isFirstItem:e,children:"Equipment"}),i.jsx(m,{children:t.exerciseId.equipment})]}),i.jsxs(p,{children:[i.jsx(l,{isFirstItem:e,children:"Name"}),i.jsx(m,{children:t.exerciseId.name})]}),i.jsxs(p,{children:[i.jsx(l,{isFirstItem:e,children:"Target"}),i.jsx(m,{children:t.exerciseId.target})]}),i.jsxs(p,{children:[i.jsx(l,{isFirstItem:e,children:"Burned calories"}),i.jsx(m,{children:t.calories})]}),i.jsxs(p,{children:[i.jsx(l,{isFirstItem:e,children:"Time"}),i.jsx(m,{children:t.time})]})]}),i.jsx(Te,{type:"button",onClick:()=>o(P(r)),"aria-label":"delete=button",children:i.jsx(Le,{children:i.jsx("use",{href:`${c}#trash`})})})]})},Be=n.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  color: ${e=>e.theme.colors.whiteColor};
  text-align: center;
  background: none;
  border: none;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: rgba(239, 137, 100, 0.885);
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
    align-items: baseline;
  }
`,z=n.button`
  background: none;
  border: none;
  padding: 0;
`,T=n.svg`
  width: 16px;
  height: 16px;
  fill: ${e=>e.theme.colors.whiteColor};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${e=>e.disabled&&`
    opacity: 0.2;
    cursor: not-allowed;
  `}

  &:hover, &:focus {
    ${e=>!e.disabled&&`fill: ${e.theme.colors.orangeLightColor};`}
  }
`,Se=n.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,We=n.svg`
  width: 20px;
  height: 20px;
`,Re=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    margin-bottom: 10px;
  }
`,Ae=()=>{const e=a(j),t=b(),o=a($),d=()=>{let s=new Date(o.createdAt),h=new Date(e);return h.setHours(0,0,0,0),s.getTime()>=h},r=u.forwardRef(({onClick:s},h)=>i.jsxs(Re,{children:[i.jsxs(Be,{onClick:s,ref:h,"aria-label":"calendar",children:[i.jsx("p",{children:A(new Date(e),"dd/MM/yyyy")}),i.jsx(We,{children:i.jsx("use",{href:`${c}#icon-calendar`})})]}),i.jsxs(Se,{children:[i.jsx("li",{children:i.jsx(z,{type:"button",disabled:d(),onClick:()=>{t(B())},"aria-label":"previous-day",children:i.jsx(T,{disabled:d(),children:i.jsx("use",{href:`${c}#icon-chevron-left`})})})}),i.jsx("li",{children:i.jsx(z,{type:"button",onClick:()=>{t(S())},"aria-label":"next-day",children:i.jsx(T,{children:i.jsx("use",{href:`${c}#icon-chevron-right`})})})})]})]}));return r.displayName="CustomInput",i.jsxs(i.Fragment,{children:[i.jsx(M,{selected:e,onChange:s=>{t(W(s.getTime()))},customInput:i.jsx(r,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,minDate:o.createdAt}),i.jsx(N,{})]})},Ue=()=>{const e=b(),t=a(j),o=a(ne),d=a(re);let r=a(X),s=a(Z),h=a(F);return u.useEffect(()=>{e(R(t.toString()))},[e,t]),i.jsxs(_,{children:[i.jsxs(U,{children:[i.jsx(Ae,{}),i.jsx(q,{children:"Diary"})]}),i.jsxs(H,{children:[i.jsxs(G,{children:[i.jsx(k,{title:"Products",link:"Add product",to:"/products",children:i.jsx(v,{children:r||s?i.jsx(D,{}):!r&&o.length===0?i.jsx(I,{children:"Not found products"}):o.map((g,y)=>i.jsx(ke,{isFirstItem:y===0,value:g},g._id))})}),i.jsx(k,{title:"Exercises",link:"Add exercise",to:"/exercises",children:i.jsx(v,{children:r||h?i.jsx(D,{}):!r&&d.length===0?i.jsx(I,{children:"Not found exercises"}):d.map((g,y)=>i.jsx(Pe,{isFirstItem:y===0,value:g},g._id))})})]}),i.jsx(je,{})]})]})};export{Ue as default};
