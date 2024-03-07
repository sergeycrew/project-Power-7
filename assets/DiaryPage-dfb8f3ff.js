import{u as i,t as n,L as C,j as e,i as t,e as f}from"./index-80db8d55.js";const D=i.div`
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
`,v=i.h1`
  padding: 40px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  /* color: #efede8; */
  color: ${n.colors.whiteColor};

  @media screen and (min-width: 768px) {
    padding: 72px 0 32px 0;
    font-size: 32px;
    line-height: 137%;
  }
`,j=i.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,k=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 32px;
  }
`,I=i.li`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  min-height: 335px;
  max-height: 824px;
  background: rgba(239, 237, 232, 0.05);
  /* overflow-y: scroll; */

  /* $::-webkit-scrollbar {
    width: 8px;
  }

  .book-category-list::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: var(--scroll-bar-color);
  } */

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 234px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`,z=i.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: rgba(239, 237, 232, 0.5);
`,L=i(C)`
  display: flex;
  align-items: center;
  gap: 8px;
`,T=i.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  /* color: #e6533c; */
  color: ${n.colors.hoverColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,W=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,R=i.svg`
  width: 16px;
  height: 16px;

  fill: ${n.colors.hoverColor};
`,w=({title:d,link:x,to:g,children:$})=>e.jsxs(I,{children:[e.jsxs(W,{children:[e.jsx(z,{children:d}),e.jsxs(L,{to:g,children:[e.jsx(T,{children:x}),e.jsx(R,{children:e.jsx("use",{href:`${t}#icon-arrow-right`})})]})]}),$]}),E=i.li`
  box-sizing: border-box;
  /* width: calc((100% - 13px) / 2); */
  width: 157px;
  height: 96px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }
`,P=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 4px; */

  @media screen and (min-width: 768px) {
    justify-content: left;
    gap: 8px;
  }
`,B=i.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  /* fill: #ef8964; */
  fill: ${n.colors.orangeLightColor};
`,S=i.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(239, 237, 232, 0.4);
  margin-left: 4px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`,A=i.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
  }
`,s=({subtitle:d,icon:x})=>e.jsxs(E,{children:[e.jsxs(P,{children:[e.jsx(B,{children:e.jsx("use",{href:x})}),e.jsx(S,{children:d})]}),e.jsx(A,{children:"2000"})]}),q=i.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 13px;
  row-gap: 20px;
  width: 335px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 593px;
    gap: 16px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
    margin-bottom: 48px;
  }
`,M=i.div`
  display: flex;
  gap: 8px;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    max-width: 593px;
    padding-bottom: 64px;
  }
`,N=i.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  /* color: rgba(239, 237, 232, 0.3); */
  color: ${d=>d.theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,F=i.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,O=i.div`
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`,b=()=>e.jsxs(O,{children:[e.jsxs(q,{children:[e.jsx(s,{subtitle:"Daily calorie intake",icon:`${t}#icon-fork-knife`}),e.jsx(s,{subtitle:"Daily physical activity",icon:`${t}#icon-dumbbell`}),e.jsx(s,{subtitle:"Сalories consumed",icon:`${t}#icon-apple`}),e.jsx(s,{subtitle:"Сalories burned",icon:`${t}#icon-fire`}),e.jsx(s,{subtitle:"Calories remaining",icon:`${t}#icon-bubble`}),e.jsx(s,{subtitle:"Sports remaining",icon:`${t}#icon-running-figure`})]}),e.jsxs(M,{children:[e.jsx(F,{children:e.jsx("use",{href:`${t}#icon-attention`})}),e.jsx(N,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]}),h=`
  border: 1px solid ${n.colors.accentColor};
  border-radius: 12px;
  padding: 10px 14px;
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${n.colors.whiteColor};
`,l=`
    height: 40px;
    font-size: 16px;
    line-height: 150%;
    padding: 8px 14px;
`,U=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 16px;
  }
`,c=i.div`
  margin-bottom: 16px;
`,p=i.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* color: #ef8964; */
  color: ${n.colors.orangeLightColor};
  margin-bottom: 8px;
`,Y=i.p`
  ${h}
  width: 297px;

  @media screen and (min-width: 768px) {
    ${l}
    width: 204px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,G=i.p`
  ${h}
  width: 297px;

  @media screen and (min-width: 768px) {
    ${l}
    width: 128px;
  }

  @media screen and (min-width: 1440px) {
    width: 166px;
  }
`,H=i.p`
  ${h}
  width: 81px;

  @media screen and (min-width: 768px) {
    ${l}
    width: 90px;
  }

  @media screen and (min-width: 1440px) {
    width: 105px;
  }
`,J=i.p`
  ${h}
  width: 80px;

  @media screen and (min-width: 768px) {
    ${l}
    width: 90px;
  }

  @media screen and (min-width: 1440px) {
    width: 105px;
  }
`,K=i.p`
  ${h}
  width: 76px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    width: 80px;
    ${l}
  }

  @media screen and (min-width: 1440px) {
    width: 110px;
  }
`,Q=i.span`
  display: inline-block;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: #419b09;
`,V=i.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,X=i.button`
  padding: 0;
  /* height: 20px;
  width: 20px; */
  background: none;
  border: none;
`,Z=i.svg`
  height: 20px;
  width: 20px;
  fill: ${d=>d.theme.colors.orangeLightColor};
  /* fill: #ef8964; */
`,u=()=>e.jsxs(U,{children:[e.jsxs(c,{children:[e.jsx(p,{children:"Title"}),e.jsx(Y,{children:"Black bread"})]}),e.jsxs(c,{children:[e.jsx(p,{children:"Category"}),e.jsx(G,{children:"Black bread"})]}),e.jsxs(V,{children:[e.jsxs(c,{children:[e.jsx(p,{children:"Calories"}),e.jsx(H,{children:"200"})]}),e.jsxs(c,{children:[e.jsx(p,{children:"Weight"}),e.jsx(J,{children:"200"})]}),e.jsxs(c,{children:[e.jsx(p,{children:"Recommend"}),e.jsxs(K,{children:[e.jsx(Q,{}),e.jsx("span",{children:"Yes"})]})]})]}),e.jsx(X,{children:e.jsx(Z,{children:e.jsx("use",{href:`${t}#icon-trash`})})})]}),a=`
  border: 1px solid ${n.colors.accentColor};
  border-radius: 12px;
  padding: 10px 14px;
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${n.colors.whiteColor};
`,m=`
    height: 40px;
    font-size: 16px;
    line-height: 150%;
    padding: 8px 14px;
`,_=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 16px;
  }
`,o=i.div`
  margin-bottom: 16px;

  /* &:nth-last-child(-n + 3) {
    margin-bottom: 0;
  } */

  /* @media screen and (min-width: 768px) {
    margin-bottom: 0;
  } */
`,r=i.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* color: #ef8964; */
  color: ${n.colors.orangeLightColor};
  margin-bottom: 8px;
`,ee=i.p`
  ${a}
  width: 297px;

  @media screen and (min-width: 768px) {
    ${m}
    width: 90px;
  }

  @media screen and (min-width: 1440px) {
    width: 115px;
  }
`,ie=i.p`
  ${a}
  width: 297px;

  @media screen and (min-width: 768px) {
    ${m}
    width: 132px;
  }

  @media screen and (min-width: 1440px) {
    width: 157px;
  }
`,ne=i.p`
  ${a}
  width: 297px;

  @media screen and (min-width: 768px) {
    ${m}
    width: 128px;
  }

  @media screen and (min-width: 1440px) {
    width: 131px;
  }
`,te=i.p`
  ${a}
  width: 81px;

  @media screen and (min-width: 768px) {
    ${m}
    width: 84px;
  }

  @media screen and (min-width: 1440px) {
    width: 106px;
  }
`,de=i.p`
  ${a}
  width: 80px;

  @media screen and (min-width: 768px) {
    ${m}
    width: 78px;
  }

  @media screen and (min-width: 1440px) {
    width: 91px;
  }
`,se=i.p`
  ${a}
  width: 76px;

  @media screen and (min-width: 1440px) {
    width: 82px;
  }
`,oe=i.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,re=i.button`
  height: 20px;
  width: 20px;
  padding: 0;
  background: none;
  border: none;
`,ae=i.svg`
  height: 20px;
  width: 20px;
  fill: ${n.colors.orangeLightColor};
  /* fill: #ef8964; */
`,y=()=>e.jsxs(_,{children:[e.jsxs(o,{children:[e.jsx(r,{children:"Body Part"}),e.jsx(ee,{children:"Waist"})]}),e.jsxs(o,{children:[e.jsx(r,{children:"Equipment"}),e.jsx(ie,{children:"Black bread"})]}),e.jsxs(o,{children:[e.jsx(r,{children:"Name"}),e.jsx(ne,{children:"Black bread"})]}),e.jsxs(oe,{children:[e.jsxs(o,{children:[e.jsx(r,{children:"Target"}),e.jsx(te,{children:"200"})]}),e.jsxs(o,{children:[e.jsx(r,{children:"Burned cal.."}),e.jsx(de,{children:"200"})]}),e.jsxs(o,{children:[e.jsx(r,{children:"Time"}),e.jsx(se,{children:"200"})]})]}),e.jsx(re,{children:e.jsx(ae,{children:e.jsx("use",{href:`${t}#icon-trash`})})})]}),ce=()=>{const[d,x]=f.useState(window.innerWidth);return f.useEffect(()=>{const g=()=>{x(window.innerWidth)};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]),e.jsxs(D,{children:[e.jsx(v,{children:"Diary"}),d>=768?e.jsxs(k,{children:[e.jsxs(j,{children:[e.jsx(w,{title:"Products",link:"Add products",to:"/products",children:e.jsx(u,{})}),e.jsx(w,{title:"Exercises",link:"Add exercises",to:"/exercises",children:e.jsx(y,{})})]}),e.jsx(b,{})]}):e.jsxs(e.Fragment,{children:[e.jsx(b,{}),e.jsxs(j,{children:[e.jsx(w,{title:"Products",link:"Add products",to:"/products",children:e.jsx(u,{})}),e.jsx(w,{title:"Exercises",link:"Add exercises",to:"/exercises",children:e.jsx(y,{})})]})]})]})};export{ce as default};
