import{u as t,L as k,j as e,i as a,b as c,m as y,r as u,a as f,y as T,z as L,A as B,B as E,D as S,E as W}from"./index-682a7bb6.js";import{f as P,i as R,C as A}from"./react-datepicker-cssmodules-e065d8fd.js";import{D as C}from"./DiaryLoader-2186b00f.js";import"./floating-ui.dom-9d61e2db.js";const M=t.div`
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
  line-height: 1.17;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
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
`,U=t.div`
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
`,$=t.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${i=>i.theme.colors.accentColor};
`,D=t.div`
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
`,G=t.li`
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
`,H=t.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${i=>i.theme.colors.fornCaptionColor};
`,O=t(k)`
  display: flex;
  align-items: center;
  gap: 8px;
`,Y=t.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${i=>i.theme.colors.hoverColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
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
`,I=({title:i,link:n,to:d,children:s})=>e.jsxs(G,{children:[e.jsxs(J,{children:[e.jsx(H,{children:i}),e.jsxs(O,{to:d,children:[e.jsx(Y,{children:n}),e.jsx(K,{children:e.jsx("use",{href:`${a}#icon-arrow`})})]})]}),s]}),Q=i=>i.diary.diaryInfo.isLoadingDiary,j=i=>i.diary.currentDate,V=i=>i.diary.diaryInfo.burnedCalories,X=i=>i.diary.diaryInfo.consumedCalories,Z=i=>i.diary.diaryInfo.doneExercisesTime,F=i=>i.diary.diaryInfo.products,ee=i=>i.diary.diaryInfo.exercises,ie=t.li`
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
`,ne=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,te=t.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,re=t.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({$cardTextColor:i})=>{switch(i){case"white":return n=>n.theme.colors.cardTextColor;default:return n=>n.theme.colors.captionColor}}};
`,oe=t.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,x=({subtitle:i,icon:n,children:d,$bgColor:s,$cardTextColor:r,$borderColor:o})=>e.jsxs(ie,{$bgColor:s,$borderColor:o,children:[e.jsxs(ne,{children:[e.jsx(te,{children:e.jsx("use",{href:n})}),e.jsx(re,{$cardTextColor:r,children:i})]}),e.jsx(oe,{children:d})]}),de=t.div`
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
`,b=t.ul`
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
`,se=t.div`
  display: flex;
  gap: 8px;
  max-width: 100%;

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 593px;
  }
`,ae=t.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${i=>i.theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
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
`,he=(i,n)=>i<n?"green":"gray",xe=(i,n)=>i<n?"red":"gray",pe=(i,n)=>i>=n?i-n:`+${n-i}`,me=(i,n)=>i>=n?i-n:`-${n-i}`,we=i=>i?{text:"Yes",color:"green"}:{text:"No",color:"red"},ge=()=>{const i=c(y);let n=c(V),d=c(X),s=c(Z),r=Number(i.timeSport)||110,o=Math.round(i.bmr)||0;return e.jsxs(le,{children:[e.jsxs(de,{children:[e.jsxs(b,{children:[e.jsx(x,{subtitle:"Daily calorie intake",icon:`${a}#food`,$bgColor:"orange",$cardTextColor:"white",children:o}),e.jsx(x,{subtitle:"Daily physical activity",icon:`${a}#dumbbell`,$bgColor:"orange",$cardTextColor:"white",children:`${r} min`})]}),e.jsxs(b,{children:[e.jsx(x,{subtitle:"Сalories consumed",icon:`${a}#apple`,children:Math.abs(d)}),e.jsx(x,{subtitle:"Сalories burned",icon:`${a}#fire`,children:n})]}),e.jsxs(b,{children:[e.jsx(x,{subtitle:"Calories remaining",icon:`${a}#bubble`,$borderColor:xe(o,Math.abs(d)),children:me(o,Math.abs(d))}),e.jsx(x,{subtitle:"Sports remaining",icon:`${a}#figure`,$borderColor:he(r,s),children:`${pe(r,s)} min`})]})]}),e.jsxs(se,{children:[e.jsx(ce,{children:e.jsx("use",{href:`${a}#exclamation`})}),e.jsx(ae,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},ue=t.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${i=>i.theme.colors.orangeLightColor};
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,l=({children:i,isFirstItem:n})=>{const[d,s]=u.useState(window.innerWidth<768);return u.useEffect(()=>{const r=()=>{s(window.innerWidth<768)};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}}),e.jsx(ue,{children:d||n?i:null})},fe=t.ul`
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
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-transform: capitalize;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 14px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,je=t.span`
  display: inline-block;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: ${({$color:i})=>{switch(i){case"red":return n=>n.theme.colors.notRecommendedColor;default:return n=>n.theme.colors.recommendedColor}}};
`,be=t.button`
  padding: 0;
  background: none;
  border: none;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    position: relative;
    right: 16px;
    top: 5px;
  }
`,ye=t.svg`
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
`,$e=({isFirstItem:i,value:n})=>{const d=f();let s=c(j);const r=c(y);let o=we(n.productId.groupBloodNotAllowed[r.blood]);const h={date:s,productId:n._id,calories:n.calories,amount:n.amount};return e.jsxs(Ce,{children:[e.jsxs(fe,{children:[e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Title"}),e.jsx(g,{children:n.productId.title})]}),e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Category"}),e.jsx(g,{children:n.productId.category})]}),e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Calories"}),e.jsx(g,{children:n.calories})]}),e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Weight"}),e.jsx(g,{children:n.amount})]}),e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Recommend"}),e.jsxs(g,{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(je,{$color:o.color}),e.jsx("span",{children:o.text})]})]})]}),e.jsx(be,{type:"button",onClick:()=>d(T(h)),"aria-label":"delete=button",children:e.jsx(ye,{children:e.jsx("use",{href:`${a}#trash`})})})]})},De=t.ul`
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
  /* height: 38px; */
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-transform: capitalize;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 14px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
`,ze=t.div`
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
`,ke=({isFirstItem:i,value:n})=>{const d=f(),r={date:c(j),exerciseId:n._id,calories:n.calories,time:n.time};return e.jsxs(ze,{children:[e.jsxs(De,{children:[e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Body Part"}),e.jsx(m,{children:n.exerciseId.bodyPart})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Equipment"}),e.jsx(m,{children:n.exerciseId.equipment})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Name"}),e.jsx(m,{children:n.exerciseId.name})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Target"}),e.jsx(m,{children:n.exerciseId.target})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Burned calories"}),e.jsx(m,{children:n.calories})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Time"}),e.jsx(m,{children:n.time})]})]}),e.jsx(Ie,{type:"button",onClick:()=>d(L(r)),"aria-label":"delete=button",children:e.jsx(ve,{children:e.jsx("use",{href:`${a}#trash`})})})]})},Te=t.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
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
    line-height: 1.33;
    align-items: baseline;
  }
`,v=t.button`
  background: none;
  border: none;
  padding: 0;
`,z=t.svg`
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
`,Be=t.svg`
  width: 20px;
  height: 20px;
`,Ee=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    margin-bottom: 10px;
  }
`,Se=()=>{const i=c(j),n=f(),d=c(y),s=()=>{let o=new Date(d.createdAt),h=new Date(i);return h.setHours(0,0,0,0),o.getTime()>=h},r=u.forwardRef(({onClick:o},h)=>e.jsxs(Ee,{children:[e.jsxs(Te,{onClick:o,ref:h,"aria-label":"calendar",children:[e.jsx("p",{children:P(new Date(i),"dd/MM/yyyy")}),e.jsx(Be,{children:e.jsx("use",{href:`${a}#icon-calendar`})})]}),e.jsxs(Le,{children:[e.jsx("li",{children:e.jsx(v,{type:"button",disabled:s(),style:{opacity:s()?"0.2":"1"},onClick:()=>{n(B())},"aria-label":"previous-day",children:e.jsx(z,{children:e.jsx("use",{href:`${a}#icon-chevron-left`})})})}),e.jsx("li",{children:e.jsx(v,{type:"button",onClick:()=>{n(E())},"aria-label":"next-day",children:e.jsx(z,{children:e.jsx("use",{href:`${a}#icon-chevron-right`})})})})]})]}));return r.displayName="CustomInput",e.jsxs(e.Fragment,{children:[e.jsx(R,{selected:i,onChange:o=>{n(S(o.getTime()))},customInput:e.jsx(r,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,minDate:d.createdAt}),e.jsx(A,{})]})},Me=()=>{const i=f(),n=c(j),d=c(F),s=c(ee);let r=c(Q);return u.useEffect(()=>{i(W(n.toString()))},[i,n]),e.jsxs(M,{children:[e.jsxs(_,{children:[e.jsx(Se,{}),e.jsx(N,{children:"Diary"})]}),e.jsxs(U,{children:[e.jsxs(q,{children:[e.jsx(I,{title:"Products",link:"Add product",to:"/products",children:e.jsx(D,{children:r?e.jsx(C,{}):!r&&d.length===0?e.jsx($,{children:"Not found products"}):d.map((o,h)=>e.jsx($e,{isFirstItem:h===0,value:o},o._id))})}),e.jsx(I,{title:"Exercises",link:"Add exercise",to:"/exercises",children:e.jsx(D,{children:r?e.jsx(C,{}):!r&&s.length===0?e.jsx($,{children:"Not found exercises"}):s.map((o,h)=>e.jsx(ke,{isFirstItem:h===0,value:o},o._id))})})]}),e.jsx(ge,{})]})]})};export{Me as default};
