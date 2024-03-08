import{u as n,L as I,j as e,i as s,d as l,e as $,g,a as f,p as v,q as k,t as z,v as T,w as R,x as B}from"./index-46dec811.js";import{f as E,i as L,C as S}from"./react-datepicker-cssmodules-67ef73ff.js";const W=n.div`
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
`,P=n.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 137%;
  }
`,M=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 40px 0 40px 0;

  @media screen and (min-width: 768px) {
    padding: 52px 0 32px 0;
  }
`,N=n.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,A=n.div`
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
`,_=n.li`
  border: 1px solid ${i=>i.theme.colors.cardBorderColor};
  border-radius: 12px;
  padding: 16px;
  /* width: 335px; */
  width: 100%;
  height: 100%;
  min-height: 335px;
  max-height: 824px;
  background: ${i=>i.theme.colors.cardBgColor};
  position: relative;
  /* overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    max-height: 60px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  } */

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
`,q=n.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: rgba(239, 237, 232, 0.5);
`,O=n(I)`
  display: flex;
  align-items: center;
  gap: 8px;
`,U=n.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.hoverColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,G=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Y=n.svg`
  width: 16px;
  height: 16px;

  fill: ${i=>i.theme.colors.hoverColor};
`,H=n.div`
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
`,j=({title:i,link:t,to:o,children:d})=>e.jsxs(_,{children:[e.jsxs(G,{children:[e.jsx(q,{children:i}),e.jsxs(O,{to:o,children:[e.jsx(U,{children:t}),e.jsx(Y,{children:e.jsx("use",{href:`${s}#icon-arrow`})})]})]}),e.jsxs(H,{children:[" ",d]})]}),u=i=>i.diary.currentDate,J=i=>i.diary.diaryInfo.burnedCalories,K=i=>i.diary.diaryInfo.consumedCalories,Q=i=>i.diary.diaryInfo.doneExercisesTime,V=i=>i.diary.diaryInfo.products,X=i=>i.diary.diaryInfo.exercises,Z=n.li`
  box-sizing: border-box;
  /* width: calc((100% - 13px) / 2); */
  /* width: 157px; */
  width: 100%;
  height: 96px;
  /* border: 1px solid ${i=>i.theme.colors.cardBorderColor}; */
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
`,F=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: left;
    gap: 8px;
  }
`,ee=n.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,ie=n.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-left: 4px;
  color: ${({$cardTextColor:i})=>{switch(i){case"white":return t=>t.theme.colors.cardTextColor;default:return t=>t.theme.colors.captionColor}}};

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`,te=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
  }
`,h=({subtitle:i,icon:t,children:o,$bgColor:d,$cardTextColor:r,$borderColor:a})=>e.jsxs(Z,{$bgColor:d,$borderColor:a,children:[e.jsxs(F,{children:[e.jsx(ee,{children:e.jsx("use",{href:t})}),e.jsx(ie,{$cardTextColor:r,children:i})]}),e.jsx(te,{children:o})]}),ne=n.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 13px;
  row-gap: 20px;
  /* width: 335px; */
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
`,re=n.div`
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
`,oe=n.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${i=>i.theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,de=n.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,se=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
  }
`,ae=(i,t)=>i<t?"green":"gray",ce=(i,t)=>i<t?"red":"gray",le=(i,t)=>i>=t?i-t:`+${t-i}`,he=(i,t)=>i>=t?i-t:`-${t-i}`,xe=i=>i?{text:"Yes",color:"green"}:{text:"No",color:"red"},pe=()=>{const i=l($);let t=l(J),o=l(K),d=l(Q),r=Number(i.timeSport)||110,a=Math.round(i.bmr)||0;return console.log(),e.jsxs(se,{children:[e.jsxs(ne,{children:[e.jsx(h,{subtitle:"Daily calorie intake",icon:`${s}#food`,$bgColor:"orange",$cardTextColor:"white",children:a}),e.jsx(h,{subtitle:"Daily physical activity",icon:`${s}#dumbbell`,$bgColor:"orange",$cardTextColor:"white",children:`${r} min`}),e.jsx(h,{subtitle:"Сalories consumed",icon:`${s}#apple`,children:Math.abs(o)}),e.jsx(h,{subtitle:"Сalories burned",icon:`${s}#fire`,children:t}),e.jsx(h,{subtitle:"Calories remaining",icon:`${s}#bubble`,$borderColor:ce(a,Math.abs(o)),children:he(a,Math.abs(o))}),e.jsx(h,{subtitle:"Sports remaining",icon:`${s}#figure`,$borderColor:ae(r,d),children:`${le(r,d)} min`})]}),e.jsxs(re,{children:[e.jsx(de,{children:e.jsx("use",{href:`${s}#exclamation`})}),e.jsx(oe,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},me=n.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${i=>i.theme.colors.orangeLightColor};
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,c=({children:i,isFirstItem:t})=>{const[o,d]=g.useState(window.innerWidth<768);return g.useEffect(()=>{const r=()=>{d(window.innerWidth<768)};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}}),e.jsx(me,{children:o||t?i:null})},we=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-right: 12px;
  }
`,m=n.li`
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
`,w=n.p`
  border: 1px solid ${i=>i.theme.colors.accentColor};
  border-radius: 12px;
  padding: 10px 14px;
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
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
`,ge=n.span`
  display: inline-block;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: ${({$color:i})=>{switch(i){case"red":return t=>t.theme.colors.notRecommendedColor;default:return t=>t.theme.colors.recommendedColor}}};
`,fe=n.button`
  position: relative;
  padding: 0;
  background: none;
  border: none;
  top: 4px;

  @media screen and (max-width: 767px) {
    right: 16px;
  }
`,ue=n.svg`
  height: 20px;
  width: 20px;

  fill: ${i=>i.theme.colors.orangeLightColor};
`,be=n.div`
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
`,je=({isFirstItem:i,value:t})=>{const o=f();let d=l(u);const r=l($);let a=xe(t.productId.groupBloodNotAllowed[r.blood]);const D={date:d,productId:t._id,calories:t.calories,amount:t.amount};return e.jsxs(be,{children:[e.jsxs(we,{children:[e.jsxs(m,{children:[e.jsx(c,{isFirstItem:i,children:"Title"}),e.jsx(w,{children:t.productId.title})]}),e.jsxs(m,{children:[e.jsx(c,{isFirstItem:i,children:"Category"}),e.jsx(w,{children:t.productId.category})]}),e.jsxs(m,{children:[e.jsx(c,{isFirstItem:i,children:"Calories"}),e.jsx(w,{children:t.calories})]}),e.jsxs(m,{children:[e.jsx(c,{isFirstItem:i,children:"Weight"}),e.jsx(w,{children:t.amount})]}),e.jsxs(m,{children:[e.jsx(c,{isFirstItem:i,children:"Recommend"}),e.jsxs(w,{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ge,{$color:a.color}),e.jsx("span",{children:a.text})]})]})]}),e.jsx(fe,{type:"button",onClick:()=>o(v(D)),children:e.jsx(ue,{children:e.jsx("use",{href:`${s}#trash`})})})]})},ye=n.ul`
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
`,x=n.li`
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
`,p=n.p`
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
`,Ce=n.button`
  position: relative;
  padding: 0;
  background: none;
  border: none;
  top: 4px;

  @media screen and (max-width: 767px) {
    right: 16px;
  }
`,$e=n.svg`
  height: 20px;
  width: 20px;
  fill: ${i=>i.theme.colors.orangeLightColor};
`,De=n.div`
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
`,Ie=({isFirstItem:i,value:t})=>{const o=f(),r={date:l(u),exerciseId:t._id,calories:t.calories,time:t.time};return e.jsxs(De,{children:[e.jsxs(ye,{children:[e.jsxs(x,{children:[e.jsx(c,{isFirstItem:i,children:"Body Part"}),e.jsx(p,{children:t.exerciseId.bodyPart})]}),e.jsxs(x,{children:[e.jsx(c,{isFirstItem:i,children:"Equipment"}),e.jsx(p,{children:t.exerciseId.equipment})]}),e.jsxs(x,{children:[e.jsx(c,{isFirstItem:i,children:"Name"}),e.jsx(p,{children:t.exerciseId.name})]}),e.jsxs(x,{children:[e.jsx(c,{isFirstItem:i,children:"Target"}),e.jsx(p,{children:t.exerciseId.target})]}),e.jsxs(x,{children:[e.jsx(c,{isFirstItem:i,children:"Burned calories"}),e.jsx(p,{children:t.calories})]}),e.jsxs(x,{children:[e.jsx(c,{isFirstItem:i,children:"Time"}),e.jsx(p,{children:t.time})]})]}),e.jsx(Ce,{type:"button",onClick:()=>o(k(r)),children:e.jsx($e,{children:e.jsx("use",{href:`${s}#trash`})})})]})},ve=n.button`
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
`,y=n.button`
  background: none;
  border: none;
  padding: 0;
`,C=n.svg`
  width: 16px;
  height: 16px;
`,ke=n.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,ze=n.svg`
  width: 20px;
  height: 20px;
`,Te=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,Re=()=>{const i=l(u),t=f(),o=g.forwardRef(({onClick:d},r)=>e.jsxs(Te,{children:[e.jsxs(ve,{onClick:d,ref:r,children:[e.jsx("p",{children:E(new Date(i),"dd/MM/yyyy")}),e.jsx(ze,{children:e.jsx("use",{href:`${s}#icon-calendar`})})]}),e.jsxs(ke,{children:[e.jsx("li",{children:e.jsx(y,{type:"button",style:{opacity:"0.2"},onClick:()=>{t(z())},children:e.jsx(C,{children:e.jsx("use",{href:`${s}#icon-chevron-left`})})})}),e.jsx("li",{children:e.jsx(y,{type:"button",onClick:()=>{t(T())},children:e.jsx(C,{children:e.jsx("use",{href:`${s}#icon-chevron-right`})})})})]})]}));return o.displayName="CustomInput",e.jsxs(e.Fragment,{children:[e.jsx(L,{selected:i,onChange:d=>{t(R(d.getTime()))},customInput:e.jsx(o,{}),dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(S,{})]})},Le=()=>{const i=f(),t=l(u),o=l(V),d=l(X);return g.useEffect(()=>{i(B({date:t}))},[i,t]),e.jsxs(W,{children:[e.jsxs(M,{children:[e.jsx(Re,{}),e.jsx(P,{children:"Diary"})]}),e.jsxs(A,{children:[e.jsxs(N,{children:[e.jsx(j,{title:"Products",link:"Add products",to:"/products",children:o.length===0?e.jsx(b,{children:"Not found products"}):o.map((r,a)=>e.jsx(je,{isFirstItem:a===0,value:r},r._id))}),e.jsx(j,{title:"Exercises",link:"Add exercises",to:"/exercises",children:d.length===0?e.jsx(b,{children:"Not found exercises"}):d.map((r,a)=>e.jsx(Ie,{isFirstItem:a===0,value:r},r._id))})]}),e.jsx(pe,{})]})]})};export{Le as default};
