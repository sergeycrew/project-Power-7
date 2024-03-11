import{u as t,L as k,j as e,i as a,c,s as y,r as f,a as u,m as z,n as T,p as L,o as R,q as S,$ as B,t as E}from"./index-22abc787.js";import{f as W,i as P,C as M}from"./react-datepicker-cssmodules-6102f31f.js";const A=t.div`
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
`,N=t.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 137%;
  }
`,_=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 40px 0 40px 0;

  @media screen and (min-width: 768px) {
    padding: 52px 0 32px 0;
  }
`,q=t.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,O=t.div`
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
`,b=t.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${i=>i.theme.colors.accentColor};
`,C=t.div`
  max-height: 167px;
  margin-right: -10px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    max-height: 60px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${i=>i.theme.colors.backgroundColorScroll};
    border-radius: 12px;
  }

  @media screen and (max-width: 767px) {
    max-height: 750px;
    margin-right: -15px;
  }
`,U=t.li`
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
`,G=t.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.fornCaptionColor};
`,H=t(k)`
  display: flex;
  align-items: center;
  gap: 8px;
`,Y=t.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.hoverColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,J=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,K=t.svg`
  width: 16px;
  height: 16px;

  fill: ${i=>i.theme.colors.hoverColor};
`,$=({title:i,link:n,to:d,children:s})=>e.jsxs(U,{children:[e.jsxs(J,{children:[e.jsx(G,{children:i}),e.jsxs(H,{to:d,children:[e.jsx(Y,{children:n}),e.jsx(K,{children:e.jsx("use",{href:`${a}#icon-arrow`})})]})]}),s]}),Q=i=>i.diary.diaryInfo.isLoadingDiary,j=i=>i.diary.currentDate,V=i=>i.diary.diaryInfo.burnedCalories,X=i=>i.diary.diaryInfo.consumedCalories,Z=i=>i.diary.diaryInfo.doneExercisesTime,F=i=>i.diary.diaryInfo.products,ee=i=>i.diary.diaryInfo.exercises,ie=t.li`
  width: 100%;
  height: 96px;
  border: 1px solid;
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${({$bgColor:i})=>{switch(i){case"orange":return n=>n.theme.colors.orangeColor;default:return n=>n.theme.colors.cardBgColor}}};

  border-color: ${({$borderColor:i})=>{switch(i){case"red":return n=>n.theme.colors.notRecommendedColor;case"green":return n=>n.theme.colors.successtColor;default:return n=>n.theme.colors.cardBorderColor}}};

  @media screen and (min-width: 375px) {
    width: 157px;
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }
`,ne=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: left;
    gap: 8px;
  }
`,te=t.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,re=t.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-left: 4px;
  color: ${({$cardTextColor:i})=>{switch(i){case"white":return n=>n.theme.colors.cardTextColor;default:return n=>n.theme.colors.captionColor}}};

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`,oe=t.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
  }
`,x=({subtitle:i,icon:n,children:d,$bgColor:s,$cardTextColor:o,$borderColor:r})=>e.jsxs(ie,{$bgColor:s,$borderColor:r,children:[e.jsxs(ne,{children:[e.jsx(te,{children:e.jsx("use",{href:n})}),e.jsx(re,{$cardTextColor:o,children:i})]}),e.jsx(oe,{children:d})]}),de=t.ul`
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
`,se=t.div`
  display: flex;
  gap: 8px;
  max-width: 100%;

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 593px;
    padding-bottom: 64px;
  }
`,ae=t.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,ce=t.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,le=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
  }
`,he=(i,n)=>i<n?"green":"gray",xe=(i,n)=>i<n?"red":"gray",pe=(i,n)=>i>=n?i-n:`+${n-i}`,me=(i,n)=>i>=n?i-n:`-${n-i}`,we=i=>i?{text:"Yes",color:"green"}:{text:"No",color:"red"},ge=()=>{const i=c(y);let n=c(V),d=c(X),s=c(Z),o=Number(i.timeSport)||110,r=Math.round(i.bmr)||0;return console.log(),e.jsxs(le,{children:[e.jsxs(de,{children:[e.jsx(x,{subtitle:"Daily calorie intake",icon:`${a}#food`,$bgColor:"orange",$cardTextColor:"white",children:r}),e.jsx(x,{subtitle:"Daily physical activity",icon:`${a}#dumbbell`,$bgColor:"orange",$cardTextColor:"white",children:`${o} min`}),e.jsx(x,{subtitle:"Сalories consumed",icon:`${a}#apple`,children:Math.abs(d)}),e.jsx(x,{subtitle:"Сalories burned",icon:`${a}#fire`,children:n}),e.jsx(x,{subtitle:"Calories remaining",icon:`${a}#bubble`,$borderColor:xe(r,Math.abs(d)),children:me(r,Math.abs(d))}),e.jsx(x,{subtitle:"Sports remaining",icon:`${a}#figure`,$borderColor:he(o,s),children:`${pe(o,s)} min`})]}),e.jsxs(se,{children:[e.jsx(ce,{children:e.jsx("use",{href:`${a}#exclamation`})}),e.jsx(ae,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},fe=t.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${i=>i.theme.colors.orangeLightColor};
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,l=({children:i,isFirstItem:n})=>{const[d,s]=f.useState(window.innerWidth<768);return f.useEffect(()=>{const o=()=>{s(window.innerWidth<768)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}}),e.jsx(fe,{children:d||n?i:null})},ue=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: -4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-right: 12px;
  }
`,w=t.li`
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
`,g=t.p`
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
`,je=t.span`
  display: inline-block;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: ${({$color:i})=>{switch(i){case"red":return n=>n.theme.colors.notRecommendedColor;default:return n=>n.theme.colors.recommendedColor}}};
`,ye=t.button`
  padding: 0;
  background: none;
  border: none;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    position: relative;
    right: 16px;
    top: 5px;
  }
`,be=t.svg`
  height: 20px;
  width: 20px;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,Ce=t.div`
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
`,$e=({isFirstItem:i,value:n})=>{const d=u();let s=c(j);const o=c(y);let r=we(n.productId.groupBloodNotAllowed[o.blood]);const h={date:s,productId:n._id,calories:n.calories,amount:n.amount};return e.jsxs(Ce,{children:[e.jsxs(ue,{children:[e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Title"}),e.jsx(g,{children:n.productId.title})]}),e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Category"}),e.jsx(g,{children:n.productId.category})]}),e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Calories"}),e.jsx(g,{children:n.calories})]}),e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Weight"}),e.jsx(g,{children:n.amount})]}),e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Recommend"}),e.jsxs(g,{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(je,{$color:r.color}),e.jsx("span",{children:r.text})]})]})]}),e.jsx(ye,{type:"button",onClick:()=>d(z(h)),children:e.jsx(be,{children:e.jsx("use",{href:`${a}#trash`})})})]})},De=t.ul`
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
`,p=t.li`
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
`,m=t.p`
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
`,Ie=t.button`
  padding: 0;
  background: none;
  border: none;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    position: relative;
    right: 16px;
    top: 5px;
  }
`,ve=t.svg`
  height: 20px;
  width: 20px;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,ke=t.div`
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
`,ze=({isFirstItem:i,value:n})=>{const d=u(),o={date:c(j),exerciseId:n._id,calories:n.calories,time:n.time};return e.jsxs(ke,{children:[e.jsxs(De,{children:[e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Body Part"}),e.jsx(m,{children:n.exerciseId.bodyPart})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Equipment"}),e.jsx(m,{children:n.exerciseId.equipment})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Name"}),e.jsx(m,{children:n.exerciseId.name})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Target"}),e.jsx(m,{children:n.exerciseId.target})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Burned calories"}),e.jsx(m,{children:n.calories})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Time"}),e.jsx(m,{children:n.time})]})]}),e.jsx(Ie,{type:"button",onClick:()=>d(T(o)),children:e.jsx(ve,{children:e.jsx("use",{href:`${a}#trash`})})})]})},Te=t.button`
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
`,D=t.button`
  background: none;
  border: none;
  padding: 0;
`,I=t.svg`
  width: 16px;
  height: 16px;

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: ${i=>i.theme.colors.orangeLightColor};
  }
`,Le=t.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,Re=t.svg`
  width: 20px;
  height: 20px;
`,Se=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    margin-bottom: 10px;
  }
`,Be=()=>{const i=c(j),n=u(),d=c(y),s=()=>{let r=new Date(d.createdAt),h=new Date(i);return h.setHours(0,0,0,0),r.getTime()>=h},o=f.forwardRef(({onClick:r},h)=>e.jsxs(Se,{children:[e.jsxs(Te,{onClick:r,ref:h,children:[e.jsx("p",{children:W(new Date(i),"dd/MM/yyyy")}),e.jsx(Re,{children:e.jsx("use",{href:`${a}#icon-calendar`})})]}),e.jsxs(Le,{children:[e.jsx("li",{children:e.jsx(D,{type:"button",disabled:s(),style:{opacity:s()?"0.2":"1"},onClick:()=>{n(L())},children:e.jsx(I,{children:e.jsx("use",{href:`${a}#icon-chevron-left`})})})}),e.jsx("li",{children:e.jsx(D,{type:"button",onClick:()=>{n(R())},children:e.jsx(I,{children:e.jsx("use",{href:`${a}#icon-chevron-right`})})})})]})]}));return o.displayName="CustomInput",e.jsxs(e.Fragment,{children:[e.jsx(P,{selected:i,onChange:r=>{n(S(r.getTime()))},customInput:e.jsx(o,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,minDate:d.createdAt}),e.jsx(M,{})]})},Ee=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  width: 100%;
  height: 100%;
`,v=()=>e.jsx(Ee,{children:e.jsx(B,{color:"#ef8964",visible:!0,height:100,width:100,ariaLabel:"infinity-spin-loading"})}),Me=()=>{const i=u(),n=c(j),d=c(F),s=c(ee);let o=c(Q);return f.useEffect(()=>{i(E({date:n}))},[i,n]),e.jsxs(A,{children:[e.jsxs(_,{children:[e.jsx(Be,{}),e.jsx(N,{children:"Diary"})]}),e.jsxs(O,{children:[e.jsxs(q,{children:[e.jsx($,{title:"Products",link:"Add product",to:"/products",children:e.jsx(C,{children:o?e.jsx(v,{}):!o&&d.length===0?e.jsx(b,{children:"Not found products"}):d.map((r,h)=>e.jsx($e,{isFirstItem:h===0,value:r},r._id))})}),e.jsx($,{title:"Exercises",link:"Add exercise",to:"/exercises",children:e.jsx(C,{children:o?e.jsx(v,{}):!o&&s.length===0?e.jsx(b,{children:"Not found exercises"}):s.map((r,h)=>e.jsx(ze,{isFirstItem:h===0,value:r},r._id))})})]}),e.jsx(ge,{})]})]})};export{Me as default};
