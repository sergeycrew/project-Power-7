import{u as n,L as z,j as e,i as a,e as c,f as y,r as f,a as u,q as k,t as T,v as L,w as R,x as B,$ as E,y as S}from"./index-025e3954.js";import{f as W,i as P,C as M}from"./react-datepicker-cssmodules-95351803.js";const A=n.div`
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
`,N=n.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 137%;
  }
`,_=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 40px 0 40px 0;

  @media screen and (min-width: 768px) {
    padding: 52px 0 32px 0;
  }
`,q=n.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,O=n.div`
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
`,b=n.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${i=>i.theme.colors.accentColor};
`,C=n.div`
  max-height: 167px;
  margin-right: -10px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    max-height: 60px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  @media screen and (max-width: 767px) {
    max-height: 750px;
    margin-right: -15px;
  }
`,U=n.li`
  border: 1px solid ${i=>i.theme.colors.cardBorderColor};
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  height: 100%;
  min-height: 335px;
  max-height: 824px;
  background: ${i=>i.theme.colors.cardBgColor};
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
`,G=n.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: rgba(239, 237, 232, 0.5);
`,H=n(z)`
  display: flex;
  align-items: center;
  gap: 8px;
`,Y=n.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.hoverColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,J=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,K=n.svg`
  width: 16px;
  height: 16px;

  fill: ${i=>i.theme.colors.hoverColor};
`,$=({title:i,link:t,to:o,children:s})=>e.jsxs(U,{children:[e.jsxs(J,{children:[e.jsx(G,{children:i}),e.jsxs(H,{to:o,children:[e.jsx(Y,{children:t}),e.jsx(K,{children:e.jsx("use",{href:`${a}#icon-arrow`})})]})]}),s]}),Q=i=>i.diary.diaryInfo.isLoadingDiary,j=i=>i.diary.currentDate,V=i=>i.diary.diaryInfo.burnedCalories,X=i=>i.diary.diaryInfo.consumedCalories,Z=i=>i.diary.diaryInfo.doneExercisesTime,F=i=>i.diary.diaryInfo.products,ee=i=>i.diary.diaryInfo.exercises,ie=n.li`
  width: 100%;
  height: 96px;
  border: 1px solid;
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${({$bgColor:i})=>{switch(i){case"orange":return t=>t.theme.colors.orangeColor;default:return t=>t.theme.colors.cardBgColor}}};

  border-color: ${({$borderColor:i})=>{switch(i){case"red":return t=>t.theme.colors.notRecommendedColor;case"green":return t=>t.theme.colors.successtColor;default:return t=>t.theme.colors.cardBorderColor}}};

  @media screen and (min-width: 375px) {
    width: 157px;
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }
`,te=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: left;
    gap: 8px;
  }
`,ne=n.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,re=n.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-left: 4px;
  color: ${({$cardTextColor:i})=>{switch(i){case"white":return t=>t.theme.colors.cardTextColor;default:return t=>t.theme.colors.captionColor}}};

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`,oe=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
  }
`,x=({subtitle:i,icon:t,children:o,$bgColor:s,$cardTextColor:d,$borderColor:r})=>e.jsxs(ie,{$bgColor:s,$borderColor:r,children:[e.jsxs(te,{children:[e.jsx(ne,{children:e.jsx("use",{href:t})}),e.jsx(re,{$cardTextColor:d,children:i})]}),e.jsx(oe,{children:o})]}),de=n.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 13px;
  row-gap: 20px;
  width: 100%;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,se=n.div`
  display: flex;
  gap: 8px;
  max-width: 100%;
  /* max-width: 335px; */

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 593px;
    padding-bottom: 64px;
  }
`,ae=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,ce=n.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,he=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
  }
`,le=(i,t)=>i<t?"green":"gray",xe=(i,t)=>i<t?"red":"gray",pe=(i,t)=>i>=t?i-t:`+${t-i}`,me=(i,t)=>i>=t?i-t:`-${t-i}`,we=i=>i?{text:"Yes",color:"green"}:{text:"No",color:"red"},ge=()=>{const i=c(y);let t=c(V),o=c(X),s=c(Z),d=Number(i.timeSport)||110,r=Math.round(i.bmr)||0;return console.log(),e.jsxs(he,{children:[e.jsxs(de,{children:[e.jsx(x,{subtitle:"Daily calorie intake",icon:`${a}#food`,$bgColor:"orange",$cardTextColor:"white",children:r}),e.jsx(x,{subtitle:"Daily physical activity",icon:`${a}#dumbbell`,$bgColor:"orange",$cardTextColor:"white",children:`${d} min`}),e.jsx(x,{subtitle:"Сalories consumed",icon:`${a}#apple`,children:Math.abs(o)}),e.jsx(x,{subtitle:"Сalories burned",icon:`${a}#fire`,children:t}),e.jsx(x,{subtitle:"Calories remaining",icon:`${a}#bubble`,$borderColor:xe(r,Math.abs(o)),children:me(r,Math.abs(o))}),e.jsx(x,{subtitle:"Sports remaining",icon:`${a}#figure`,$borderColor:le(d,s),children:`${pe(d,s)} min`})]}),e.jsxs(se,{children:[e.jsx(ce,{children:e.jsx("use",{href:`${a}#exclamation`})}),e.jsx(ae,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},fe=n.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${i=>i.theme.colors.orangeLightColor};
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,h=({children:i,isFirstItem:t})=>{const[o,s]=f.useState(window.innerWidth<768);return f.useEffect(()=>{const d=()=>{s(window.innerWidth<768)};return window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}}),e.jsx(fe,{children:o||t?i:null})},ue=n.ul`
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

    /* width: 297px; */

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

    /* width: 81px; */

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

    /* width: 80px; */

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

    /* width: 76px; */

    @media screen and (min-width: 768px) {
      width: 80px;
    }

    @media screen and (min-width: 1440px) {
      width: 110px;
    }
  }
`,g=n.p`
  border: 1px solid ${i=>i.theme.colors.accentColor};
  border-radius: 12px;
  padding: 10px 14px;
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  word-wrap: break-word;
  white-space: nowrap;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
    line-height: 150%;
    padding: 8px 14px;
  }
`,je=n.span`
  display: inline-block;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: ${({$color:i})=>{switch(i){case"red":return t=>t.theme.colors.notRecommendedColor;default:return t=>t.theme.colors.recommendedColor}}};
`,ye=n.button`
  /* position: relative; */
  padding: 0;
  background: none;
  border: none;
  /* top: 4px;
  right: -8px; */

  @media screen and (min-width: 375px) and (max-width: 767px) {
    position: relative;
    right: 16px;
    top: 5px;
  }
`,be=n.svg`
  height: 20px;
  width: 20px;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,Ce=n.div`
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
`,$e=({isFirstItem:i,value:t})=>{const o=u();let s=c(j);const d=c(y);let r=we(t.productId.groupBloodNotAllowed[d.blood]);const l={date:s,productId:t._id,calories:t.calories,amount:t.amount};return e.jsxs(Ce,{children:[e.jsxs(ue,{children:[e.jsxs(w,{children:[e.jsx(h,{isFirstItem:i,children:"Title"}),e.jsx(g,{children:t.productId.title})]}),e.jsxs(w,{children:[e.jsx(h,{isFirstItem:i,children:"Category"}),e.jsx(g,{children:t.productId.category})]}),e.jsxs(w,{children:[e.jsx(h,{isFirstItem:i,children:"Calories"}),e.jsx(g,{children:t.calories})]}),e.jsxs(w,{children:[e.jsx(h,{isFirstItem:i,children:"Weight"}),e.jsx(g,{children:t.amount})]}),e.jsxs(w,{children:[e.jsx(h,{isFirstItem:i,children:"Recommend"}),e.jsxs(g,{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(je,{$color:r.color}),e.jsx("span",{children:r.text})]})]})]}),e.jsx(ye,{type:"button",onClick:()=>o(k(l)),children:e.jsx(be,{children:e.jsx("use",{href:`${a}#trash`})})})]})},De=n.ul`
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
    /* width: 297px; */

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

    /* width: 297px; */

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

    /* width: 297px; */

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

    /* width: 81px; */

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

    /* width: 80px; */

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

    /* width: 76px; */

    @media screen and (min-width: 1440px) {
      width: 82px;
    }
  }
`,m=n.p`
  border: 1px solid ${i=>i.theme.colors.accentColor};
  border-radius: 12px;
  padding: 10px 14px;
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  text-transform: capitalize;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
    line-height: 150%;
    padding: 8px 14px;
  }
`,Ie=n.button`
  padding: 0;
  background: none;
  border: none;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    position: relative;
    right: 16px;
    top: 5px;
  }
`,ve=n.svg`
  height: 20px;
  width: 20px;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,ze=n.div`
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
`,ke=({isFirstItem:i,value:t})=>{const o=u(),d={date:c(j),exerciseId:t._id,calories:t.calories,time:t.time};return console.log(t._id),e.jsxs(ze,{children:[e.jsxs(De,{children:[e.jsxs(p,{children:[e.jsx(h,{isFirstItem:i,children:"Body Part"}),e.jsx(m,{children:t.exerciseId.bodyPart})]}),e.jsxs(p,{children:[e.jsx(h,{isFirstItem:i,children:"Equipment"}),e.jsx(m,{children:t.exerciseId.equipment})]}),e.jsxs(p,{children:[e.jsx(h,{isFirstItem:i,children:"Name"}),e.jsx(m,{children:t.exerciseId.name})]}),e.jsxs(p,{children:[e.jsx(h,{isFirstItem:i,children:"Target"}),e.jsx(m,{children:t.exerciseId.target})]}),e.jsxs(p,{children:[e.jsx(h,{isFirstItem:i,children:"Burned calories"}),e.jsx(m,{children:t.calories})]}),e.jsxs(p,{children:[e.jsx(h,{isFirstItem:i,children:"Time"}),e.jsx(m,{children:t.time})]})]}),e.jsx(Ie,{type:"button",onClick:()=>o(T(d)),children:e.jsx(ve,{children:e.jsx("use",{href:`${a}#trash`})})})]})},Te=n.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  color: ${i=>i.theme.colors.whiteColor};
  text-align: center;
  background: none;
  border: none;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${i=>i.theme.colors.orangeLightColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
    align-items: baseline;
  }
`,D=n.button`
  background: none;
  border: none;
  padding: 0;
`,I=n.svg`
  width: 16px;
  height: 16px;

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: ${i=>i.theme.colors.orangeLightColor};
  }
`,Le=n.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,Re=n.svg`
  width: 20px;
  height: 20px;
`,Be=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    margin-bottom: 10px;
  }
`,Ee=()=>{const i=c(j),t=u(),o=c(y),s=()=>{let r=new Date(o.createdAt),l=new Date(i);return l.setHours(0,0,0,0),r.getTime()>=l},d=f.forwardRef(({onClick:r},l)=>e.jsxs(Be,{children:[e.jsxs(Te,{onClick:r,ref:l,children:[e.jsx("p",{children:W(new Date(i),"dd/MM/yyyy")}),e.jsx(Re,{children:e.jsx("use",{href:`${a}#icon-calendar`})})]}),e.jsxs(Le,{children:[e.jsx("li",{children:e.jsx(D,{type:"button",disabled:s(),style:{opacity:s()?"0.2":"1"},onClick:()=>{t(L())},children:e.jsx(I,{children:e.jsx("use",{href:`${a}#icon-chevron-left`})})})}),e.jsx("li",{children:e.jsx(D,{type:"button",onClick:()=>{t(R())},children:e.jsx(I,{children:e.jsx("use",{href:`${a}#icon-chevron-right`})})})})]})]}));return d.displayName="CustomInput",e.jsxs(e.Fragment,{children:[e.jsx(P,{selected:i,onChange:r=>{t(B(r.getTime()))},customInput:e.jsx(d,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,minDate:o.createdAt}),e.jsx(M,{})]})},Se=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  width: 100%;
  height: 100%;
`,v=()=>e.jsx(Se,{children:e.jsx(E,{color:"#ef8964",visible:!0,height:100,width:100,ariaLabel:"infinity-spin-loading"})}),Me=()=>{const i=u(),t=c(j),o=c(F),s=c(ee);let d=c(Q);return f.useEffect(()=>{i(S({date:t}))},[i,t]),e.jsxs(A,{children:[e.jsxs(_,{children:[e.jsx(Ee,{}),e.jsx(N,{children:"Diary"})]}),e.jsxs(O,{children:[e.jsxs(q,{children:[e.jsx($,{title:"Products",link:"Add product",to:"/products",children:e.jsx(C,{children:d?e.jsx(v,{}):o.length===0?e.jsx(b,{children:"Not found products"}):o.map((r,l)=>e.jsx($e,{isFirstItem:l===0,value:r},r._id))})}),e.jsx($,{title:"Exercises",link:"Add exercise",to:"/exercises",children:e.jsx(C,{children:d?e.jsx(v,{}):s.length===0?e.jsx(b,{children:"Not found exercises"}):s.map((r,l)=>e.jsx(ke,{isFirstItem:l===0,value:r},r._id))})})]}),e.jsx(ge,{})]})]})};export{Me as default};
