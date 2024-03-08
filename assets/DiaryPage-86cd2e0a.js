import{u as n,L as $,j as e,i as d,d as x,g as w,a as b,p as D,n as v,o as I,q as k}from"./index-f3f57c26.js";import{f as z,i as T,C as B}from"./react-datepicker-cssmodules-528b027b.js";const E=n.div`
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
`,R=n.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 137%;
  }
`,W=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 40px 0 40px 0;

  @media screen and (min-width: 768px) {
    padding: 52px 0 32px 0;
  }
`,L=n.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,S=n.div`
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
`,f=n.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${i=>i.theme.colors.accentColor};
`,P=n.li`
  border: 1px solid ${i=>i.theme.colors.cardBorderColor};
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  height: 100%;
  min-height: 335px;
  max-height: 824px;
  background: ${i=>i.theme.colors.cardBgColor};
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    max-height: 60px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 234px;
    max-height: 234px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`,M=n.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: rgba(239, 237, 232, 0.5);
`,N=n($)`
  display: flex;
  align-items: center;
  gap: 8px;
`,A=n.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.hoverColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,O=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,q=n.svg`
  width: 16px;
  height: 16px;

  fill: ${i=>i.theme.colors.hoverColor};
`,u=({title:i,link:t,to:r,children:s})=>e.jsxs(P,{children:[e.jsxs(O,{children:[e.jsx(M,{children:i}),e.jsxs(N,{to:r,children:[e.jsx(A,{children:t}),e.jsx(q,{children:e.jsx("use",{href:`${d}#icon-arrow`})})]})]}),s]}),C=i=>i.diary.currentDate,_=i=>i.diary.diaryInfo.burnedCalories,G=i=>i.diary.diaryInfo.consumedCalories,U=i=>i.diary.diaryInfo.doneExercisesTime,Y=i=>i.diary.diaryInfo.products,H=i=>i.diary.diaryInfo.exercises,J=n.li`
  box-sizing: border-box;
  /* width: calc((100% - 13px) / 2); */
  width: 157px;
  height: 96px;
  border: 1px solid ${i=>i.theme.colors.cardBorderColor};
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  background: ${i=>i.theme.colors.cardBgColor};

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }
`,K=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: left;
    gap: 8px;
  }
`,Q=n.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,V=n.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${i=>i.theme.colors.captionColor};
  margin-left: 4px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`,X=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
  }
`,p=({subtitle:i,icon:t,children:r})=>e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(Q,{children:e.jsx("use",{href:t})}),e.jsx(V,{children:i})]}),e.jsx(X,{children:r})]}),Z=n.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 13px;
  row-gap: 20px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 593px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,F=n.div`
  display: flex;
  gap: 8px;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    max-width: 593px;
    padding-bottom: 64px;
  }
`,ee=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,ie=n.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,ne=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
  }
`,te=()=>{let i=x(_),t=x(G),s=110-x(U);return e.jsxs(ne,{children:[e.jsxs(Z,{children:[e.jsx(p,{subtitle:"Daily calorie intake",icon:`${d}#food`}),e.jsx(p,{subtitle:"Daily physical activity",icon:`${d}#dumbbell`,children:"110 min"}),e.jsx(p,{subtitle:"Сalories consumed",icon:`${d}#apple`,children:t}),e.jsx(p,{subtitle:"Сalories burned",icon:`${d}#fire`,children:i}),e.jsx(p,{subtitle:"Calories remaining",icon:`${d}#bubble`}),e.jsx(p,{subtitle:"Sports remaining",icon:`${d}#figure`,children:`${s} min`})]}),e.jsxs(F,{children:[e.jsx(ie,{children:e.jsx("use",{href:`${d}#exclamation`})}),e.jsx(ee,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},de=n.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${i=>i.theme.colors.orangeLightColor};
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
`,o=({children:i,isFirstItem:t})=>{const[r,s]=w.useState(window.innerWidth<768);return w.useEffect(()=>{const a=()=>{s(window.innerWidth<768)};return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}}),e.jsx(de,{children:r||t?i:null})},re=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-right: 12px;
  }
`,l=n.li`
  &:nth-of-type(1) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 204px;
    }

    @media screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  &:nth-of-type(2) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 128px;
    }

    @media screen and (min-width: 1440px) {
      width: 166px;
    }
  }

  &:nth-of-type(3) {
    width: 81px;

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 105px;
    }
  }

  &:nth-of-type(4) {
    width: 80px;

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 105px;
    }
  }

  &:nth-of-type(5) {
    width: 76px;

    @media screen and (min-width: 768px) {
      width: 80px;
    }

    @media screen and (min-width: 1440px) {
      width: 110px;
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
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
    line-height: 150%;
    padding: 8px 14px;
  }
  /* 
  &:nth-of-type(1) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 204px;
    }

    @media screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  &:nth-of-type(2) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 128px;
    }

    @media screen and (min-width: 1440px) {
      width: 166px;
    }
  }

  &:nth-of-type(3) {
    width: 81px;

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 105px;
    }
  }

  &:nth-of-type(4) {
    width: 80px;

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 105px;
    }
  }

  &:nth-of-type(5) {
    width: 76px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 768px) {
      width: 80px;
    }

    @media screen and (min-width: 1440px) {
      width: 110px;
    }
  } */
`,se=n.span`
  display: inline-block;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: ${i=>i.theme.colors.recommendedColor};
`,oe=n.button`
  position: relative;
  padding: 0;
  background: none;
  border: none;
  top: 4px;

  @media screen and (max-width: 767px) {
    right: 16px;
  }
`,ae=n.svg`
  height: 20px;
  width: 20px;

  fill: ${i=>i.theme.colors.orangeLightColor};
`,xe=n.div`
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
`,pe=({isFirstItem:i})=>e.jsxs(xe,{children:[e.jsxs(re,{children:[e.jsxs(l,{children:[e.jsx(o,{isFirstItem:i,children:"Title"}),e.jsx(m,{children:"Black bread"})]}),e.jsxs(l,{children:[e.jsx(o,{isFirstItem:i,children:"Category"}),e.jsx(m,{children:"Black bread"})]}),e.jsxs(l,{children:[e.jsx(o,{isFirstItem:i,children:"Calories"}),e.jsx(m,{children:"200"})]}),e.jsxs(l,{children:[e.jsx(o,{isFirstItem:i,children:"Weight"}),e.jsx(m,{children:"200"})]}),e.jsxs(l,{children:[e.jsx(o,{isFirstItem:i,children:"Recommend"}),e.jsxs(m,{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(se,{}),e.jsx("span",{children:"Yes"})]})]})]}),e.jsx(oe,{children:e.jsx(ae,{children:e.jsx("use",{href:`${d}#trash`})})})]}),ce=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-right: 12px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 20px;
  }
`,c=n.li`
  &:nth-of-type(1) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 115px;
    }
  }

  &:nth-of-type(2) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 132px;
    }

    @media screen and (min-width: 1440px) {
      width: 157px;
    }
  }

  &:nth-of-type(3) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 128px;
    }

    @media screen and (min-width: 1440px) {
      width: 131px;
    }
  }

  &:nth-of-type(4) {
    width: 81px;

    @media screen and (min-width: 768px) {
      width: 84px;
    }

    @media screen and (min-width: 1440px) {
      width: 106px;
    }
  }

  &:nth-of-type(5) {
    width: 80px;

    @media screen and (min-width: 768px) {
      width: 78px;
    }

    @media screen and (min-width: 1440px) {
      width: 91px;
    }
  }

  &:nth-of-type(6) {
    width: 76px;

    @media screen and (min-width: 1440px) {
      width: 82px;
    }
  }
`,h=n.p`
  border: 1px solid ${i=>i.theme.colors.accentColor};
  border-radius: 12px;
  padding: 10px 14px;
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
    line-height: 150%;
    padding: 8px 14px;
  }
`,he=n.button`
  position: relative;
  padding: 0;
  background: none;
  border: none;
  top: 4px;

  @media screen and (max-width: 767px) {
    right: 16px;
  }
`,le=n.svg`
  height: 20px;
  width: 20px;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,me=n.div`
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
`,we=({isFirstItem:i})=>e.jsxs(me,{children:[e.jsxs(ce,{children:[e.jsxs(c,{children:[e.jsx(o,{isFirstItem:i,children:"Body Part"}),e.jsx(h,{children:"Waist"})]}),e.jsxs(c,{children:[e.jsx(o,{isFirstItem:i,children:"Equipment"}),e.jsx(h,{children:"Black bread"})]}),e.jsxs(c,{children:[e.jsx(o,{isFirstItem:i,children:"Name"}),e.jsx(h,{children:"Black bread"})]}),e.jsxs(c,{children:[e.jsx(o,{isFirstItem:i,children:"Target"}),e.jsx(h,{children:"200"})]}),e.jsxs(c,{children:[e.jsx(o,{isFirstItem:i,children:"Burned cal.."}),e.jsx(h,{children:"200"})]}),e.jsxs(c,{children:[e.jsx(o,{isFirstItem:i,children:"Time"}),e.jsx(h,{children:"200"})]})]}),e.jsx(he,{children:e.jsx(le,{children:e.jsx("use",{href:`${d}#trash`})})})]}),ge=n.button`
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

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
    align-items: baseline;
  }
`,j=n.button`
  background: none;
  border: none;
  padding: 0;
`,y=n.svg`
  width: 16px;
  height: 16px;
`,fe=n.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,ue=n.svg`
  width: 20px;
  height: 20px;
`,je=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,ye=()=>{const i=x(C),t=b(),r=w.forwardRef(({onClick:s},a)=>e.jsxs(je,{children:[e.jsxs(ge,{onClick:s,ref:a,children:[e.jsx("p",{children:z(new Date(i),"dd/MM/yyyy")}),e.jsx(ue,{children:e.jsx("use",{href:`${d}#icon-calendar`})})]}),e.jsxs(fe,{children:[e.jsx("li",{children:e.jsx(j,{type:"button",style:{opacity:"0.2"},onClick:()=>{t(D())},children:e.jsx(y,{children:e.jsx("use",{href:`${d}#icon-chevron-left`})})})}),e.jsx("li",{children:e.jsx(j,{type:"button",onClick:()=>{t(v())},children:e.jsx(y,{children:e.jsx("use",{href:`${d}#icon-chevron-right`})})})})]})]}));return r.displayName="CustomInput",e.jsxs(e.Fragment,{children:[e.jsx(T,{selected:i,onChange:s=>{t(I(s.getTime()))},customInput:e.jsx(r,{}),dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(B,{})]})},$e=()=>{const i=b(),t=x(C),r=x(Y),s=x(H);return w.useEffect(()=>{i(k({date:t}))},[i,t]),e.jsxs(E,{children:[e.jsxs(W,{children:[e.jsx(ye,{}),e.jsx(R,{children:"Diary"})]}),e.jsxs(S,{children:[e.jsxs(L,{children:[e.jsx(u,{title:"Products",link:"Add products",to:"/products",children:r.length===0?e.jsx(f,{children:"Not found products"}):r.map((a,g)=>e.jsx(pe,{isFirstItem:a===0},g._id))}),e.jsx(u,{title:"Exercises",link:"Add exercises",to:"/exercises",children:s.length===0?e.jsx(f,{children:"Not found exercises"}):s.map((a,g)=>e.jsx(we,{isFirstItem:a===0},g._id))})]}),e.jsx(te,{})]})]})};export{$e as default};
