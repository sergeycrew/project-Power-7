import{u as t,L as k,j as e,s as a,c,d as y,r as f,a as u,n as z,o as T,p as L,q as R,t as B,v as E}from"./index-848d9fc8.js";import{f as S,i as P,C as W}from"./react-datepicker-cssmodules-3b9b867a.js";import{D as b}from"./DiaryLoader-5f5036e1.js";import"./floating-ui.dom-9d61e2db.js";const M=t.div`
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
`,A=t.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 137%;
  }
`,N=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 40px 0 40px 0;

  @media screen and (min-width: 768px) {
    padding: 52px 0 32px 0;
  }
`,_=t.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,q=t.div`
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
`,C=t.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${i=>i.theme.colors.accentColor};
`,$=t.div`
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
`,O=t.li`
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
`,U=t.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.fornCaptionColor};
`,G=t(k)`
  display: flex;
  align-items: center;
  gap: 8px;
`,H=t.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.hoverColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,Y=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,J=t.svg`
  width: 16px;
  height: 16px;

  fill: ${i=>i.theme.colors.hoverColor};
`,D=({title:i,link:n,to:d,children:s})=>e.jsxs(O,{children:[e.jsxs(Y,{children:[e.jsx(U,{children:i}),e.jsxs(G,{to:d,children:[e.jsx(H,{children:n}),e.jsx(J,{children:e.jsx("use",{href:`${a}#icon-arrow`})})]})]}),s]}),K=i=>i.diary.diaryInfo.isLoadingDiary,j=i=>i.diary.currentDate,Q=i=>i.diary.diaryInfo.burnedCalories,V=i=>i.diary.diaryInfo.consumedCalories,X=i=>i.diary.diaryInfo.doneExercisesTime,Z=i=>i.diary.diaryInfo.products,F=i=>i.diary.diaryInfo.exercises,ee=t.li`
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
`,ie=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: left;
    gap: 8px;
  }
`,ne=t.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,te=t.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-left: 4px;
  color: ${({$cardTextColor:i})=>{switch(i){case"white":return n=>n.theme.colors.cardTextColor;default:return n=>n.theme.colors.captionColor}}};

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`,re=t.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
  }
`,x=({subtitle:i,icon:n,children:d,$bgColor:s,$cardTextColor:o,$borderColor:r})=>e.jsxs(ee,{$bgColor:s,$borderColor:r,children:[e.jsxs(ie,{children:[e.jsx(ne,{children:e.jsx("use",{href:n})}),e.jsx(te,{$cardTextColor:o,children:i})]}),e.jsx(re,{children:d})]}),oe=t.ul`
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
`,de=t.div`
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
`,se=t.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,ae=t.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,ce=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
  }
`,le=(i,n)=>i<n?"green":"gray",he=(i,n)=>i<n?"red":"gray",xe=(i,n)=>i>=n?i-n:`+${n-i}`,pe=(i,n)=>i>=n?i-n:`-${n-i}`,me=i=>i?{text:"Yes",color:"green"}:{text:"No",color:"red"},we=()=>{const i=c(y);let n=c(Q),d=c(V),s=c(X),o=Number(i.timeSport)||110,r=Math.round(i.bmr)||0;return console.log(),e.jsxs(ce,{children:[e.jsxs(oe,{children:[e.jsx(x,{subtitle:"Daily calorie intake",icon:`${a}#food`,$bgColor:"orange",$cardTextColor:"white",children:r}),e.jsx(x,{subtitle:"Daily physical activity",icon:`${a}#dumbbell`,$bgColor:"orange",$cardTextColor:"white",children:`${o} min`}),e.jsx(x,{subtitle:"Сalories consumed",icon:`${a}#apple`,children:Math.abs(d)}),e.jsx(x,{subtitle:"Сalories burned",icon:`${a}#fire`,children:n}),e.jsx(x,{subtitle:"Calories remaining",icon:`${a}#bubble`,$borderColor:he(r,Math.abs(d)),children:pe(r,Math.abs(d))}),e.jsx(x,{subtitle:"Sports remaining",icon:`${a}#figure`,$borderColor:le(o,s),children:`${xe(o,s)} min`})]}),e.jsxs(de,{children:[e.jsx(ae,{children:e.jsx("use",{href:`${a}#exclamation`})}),e.jsx(se,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},ge=t.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${i=>i.theme.colors.orangeLightColor};
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,l=({children:i,isFirstItem:n})=>{const[d,s]=f.useState(window.innerWidth<768);return f.useEffect(()=>{const o=()=>{s(window.innerWidth<768)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}}),e.jsx(ge,{children:d||n?i:null})},fe=t.ul`
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
`,ue=t.span`
  display: inline-block;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: ${({$color:i})=>{switch(i){case"red":return n=>n.theme.colors.notRecommendedColor;default:return n=>n.theme.colors.recommendedColor}}};
`,je=t.button`
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
`,be=t.div`
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
`,Ce=({isFirstItem:i,value:n})=>{const d=u();let s=c(j);const o=c(y);let r=me(n.productId.groupBloodNotAllowed[o.blood]);const h={date:s,productId:n._id,calories:n.calories,amount:n.amount};return e.jsxs(be,{children:[e.jsxs(fe,{children:[e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Title"}),e.jsx(g,{children:n.productId.title})]}),e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Category"}),e.jsx(g,{children:n.productId.category})]}),e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Calories"}),e.jsx(g,{children:n.calories})]}),e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Weight"}),e.jsx(g,{children:n.amount})]}),e.jsxs(w,{children:[e.jsx(l,{isFirstItem:i,children:"Recommend"}),e.jsxs(g,{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ue,{$color:r.color}),e.jsx("span",{children:r.text})]})]})]}),e.jsx(je,{type:"button",onClick:()=>d(z(h)),children:e.jsx(ye,{children:e.jsx("use",{href:`${a}#trash`})})})]})},$e=t.ul`
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
`,De=t.button`
  padding: 0;
  background: none;
  border: none;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    position: relative;
    right: 16px;
    top: 5px;
  }
`,Ie=t.svg`
  height: 20px;
  width: 20px;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,ve=t.div`
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
`,ke=({isFirstItem:i,value:n})=>{const d=u(),o={date:c(j),exerciseId:n._id,calories:n.calories,time:n.time};return e.jsxs(ve,{children:[e.jsxs($e,{children:[e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Body Part"}),e.jsx(m,{children:n.exerciseId.bodyPart})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Equipment"}),e.jsx(m,{children:n.exerciseId.equipment})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Name"}),e.jsx(m,{children:n.exerciseId.name})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Target"}),e.jsx(m,{children:n.exerciseId.target})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Burned calories"}),e.jsx(m,{children:n.calories})]}),e.jsxs(p,{children:[e.jsx(l,{isFirstItem:i,children:"Time"}),e.jsx(m,{children:n.time})]})]}),e.jsx(De,{type:"button",onClick:()=>d(T(o)),children:e.jsx(Ie,{children:e.jsx("use",{href:`${a}#trash`})})})]})},ze=t.button`
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
`,I=t.button`
  background: none;
  border: none;
  padding: 0;
`,v=t.svg`
  width: 16px;
  height: 16px;

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: ${i=>i.theme.colors.orangeLightColor};
  }
`,Te=t.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,Le=t.svg`
  width: 20px;
  height: 20px;
`,Re=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    margin-bottom: 10px;
  }
`,Be=()=>{const i=c(j),n=u(),d=c(y),s=()=>{let r=new Date(d.createdAt),h=new Date(i);return h.setHours(0,0,0,0),r.getTime()>=h},o=f.forwardRef(({onClick:r},h)=>e.jsxs(Re,{children:[e.jsxs(ze,{onClick:r,ref:h,children:[e.jsx("p",{children:S(new Date(i),"dd/MM/yyyy")}),e.jsx(Le,{children:e.jsx("use",{href:`${a}#icon-calendar`})})]}),e.jsxs(Te,{children:[e.jsx("li",{children:e.jsx(I,{type:"button",disabled:s(),style:{opacity:s()?"0.2":"1"},onClick:()=>{n(L())},children:e.jsx(v,{children:e.jsx("use",{href:`${a}#icon-chevron-left`})})})}),e.jsx("li",{children:e.jsx(I,{type:"button",onClick:()=>{n(R())},children:e.jsx(v,{children:e.jsx("use",{href:`${a}#icon-chevron-right`})})})})]})]}));return o.displayName="CustomInput",e.jsxs(e.Fragment,{children:[e.jsx(P,{selected:i,onChange:r=>{n(B(r.getTime()))},customInput:e.jsx(o,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,minDate:d.createdAt}),e.jsx(W,{})]})},Me=()=>{const i=u(),n=c(j),d=c(Z),s=c(F);let o=c(K);return f.useEffect(()=>{i(E({date:n}))},[i,n]),e.jsxs(M,{children:[e.jsxs(N,{children:[e.jsx(Be,{}),e.jsx(A,{children:"Diary"})]}),e.jsxs(q,{children:[e.jsxs(_,{children:[e.jsx(D,{title:"Products",link:"Add product",to:"/products",children:e.jsx($,{children:o?e.jsx(b,{}):!o&&d.length===0?e.jsx(C,{children:"Not found products"}):d.map((r,h)=>e.jsx(Ce,{isFirstItem:h===0,value:r},r._id))})}),e.jsx(D,{title:"Exercises",link:"Add exercise",to:"/exercises",children:e.jsx($,{children:o?e.jsx(b,{}):!o&&s.length===0?e.jsx(C,{children:"Not found exercises"}):s.map((r,h)=>e.jsx(ke,{isFirstItem:h===0,value:r},r._id))})})]}),e.jsx(we,{})]})]})};export{Me as default};
