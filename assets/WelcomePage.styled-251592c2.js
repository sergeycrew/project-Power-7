import{u as e,a as c,b as o,r as l,g,j as t,s as a,f as m,h as w,i as u,k as f,L as s}from"./index-8d494cf9.js";import{D as b}from"./DiaryLoader-ff61704d.js";const j="/project-Power-7/assets/bg-mobile-1x-014f5a2c.png",k="/project-Power-7/assets/bg-mobile-2x-ba0edaad.png",$=e.div`
  /* position: relative; */
  position: absolute;
  margin-left: auto;
  margin-right: 0;
  width: 234px;
  height: 212px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  right: 20px;
  bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 405px;
    height: 262px;
    gap: 56px;
    right: 32px;
    bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    right: 32px;
    bottom: 171px;
    width: 638px;
    height: 245px;
    gap: 39px;
    margin: 0;
  }
`,y=e.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 146px;
  height: 66px;
  border-radius: ${i=>i.theme.radii.ld};
  background: ${i=>i.theme.colors.darkGrayColor};

  @media screen and (min-width: 768px) {
    width: 206px;
    height: 96px;
    gap: 12px;
    padding-left: 23px;
    justify-content: start;
  }
`,v=e.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${i=>i.theme.colors.orangeLightColor};

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,C=e.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,z=e.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,L=e.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`,T=e.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,_=e.div`
  position: relative;
  margin-left: auto;
  margin-right: 0;
  padding-left: 18px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 4px;
  width: 119px;
  height: 76px;

  border-radius: ${i=>i.theme.radii.ld};
  background: ${i=>i.theme.colors.orangeLightColor};

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 110px;
    gap: 8px;
    padding-left: 28px;
  }
`,I=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${i=>i.theme.colors.biegeColor};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,S=e.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,B=e.div`
  display: flex;
  gap: 8px;
  align-items: end;

  @media screen and (min-width: 768px) {
    gap: 11px;
  }
`,E=e.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1.04;
    letter-spacing: -0.02em;
  }
`,M=e.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.65);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,D=i=>i.statistic.statistic,H=i=>i.statistic.isLoading,N=()=>{const i=c(),r=o(D),d=o(H);l.useEffect(()=>{i(g())},[i]);const h=n=>n<1e3?n:(Math.round(n)/1e3).toFixed(1),{allExercisesVideo:p,allBurnedCalories:x}=r;return t.jsx($,{children:d?t.jsx(b,{}):t.jsxs(t.Fragment,{children:[t.jsxs(y,{children:[t.jsx(v,{children:t.jsx(C,{children:t.jsx("use",{href:`${a}#icon-Polygon-1`})})}),t.jsxs(z,{children:[t.jsx(L,{children:p}),t.jsx(T,{children:"Video tutorial"})]})]}),t.jsxs(_,{children:[t.jsx(I,{children:t.jsx(S,{children:t.jsx("use",{href:`${a}#icon-running-stick-figure`})})}),t.jsxs(B,{children:[t.jsx(E,{children:h(x)}),t.jsx(M,{children:"kcal"})]})]})]})})},P=e.div`
  position: relative;
  z-index: 0;
  margin: 0 auto;
  max-width: 375px;
  width: 100%;
  min-height: 812px;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${j}) 1x, url(${k}) 2x);

  @media screen and (min-width: 768px) {
    max-width: 768px;
    min-height: 1024px;
    background-image: image-set(url(${m}) 1x, url(${w}) 2x);
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    min-height: 800px;
    background-size: contain;
    background-image: image-set(url(${u}) 1x, url(${f}) 2x);
  }
`,V=({children:i})=>t.jsxs(P,{children:[i,t.jsx(N,{}),")"]}),G=e.section`
  padding-top: 127px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`,R=e.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  padding-inline: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-inline: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-inline: 95px;
  }
`,U=e.div`
  max-width: 335px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${i=>i.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    max-width: 598px;
    gap: 64px;
  }
`,W=e.h1`
  position: relative;
  z-index: 1;
  color: ${i=>i.theme.colors.whiteColor};
  font-weight: 500;
  font-size: 38px;
  line-height: 1.05;
  letter-spacing: 0.01em;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 1.11;
  }
`,X=e.span`
  display: inline-block;
  position: relative;
  z-index: 1;
`,Y=e.svg`
  width: 98px;
  height: 35px;
  position: absolute;
  z-index: -10;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
  }
`,q=e.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    flex-wrap: nowrap;
  }
`,J=e.li`
  width: 130px;
  height: 42px;

  &:first-child {
    width: 136px;
  }

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 56px;

    &:first-child {
      width: 190px;
    }
  }
`,K=e(s)`
  width: 100%;
  height: 100%;
  border-radius: ${i=>i.theme.radii.ld};
  background-color: ${i=>i.theme.colors.orangeColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${i=>i.theme.colors.whiteColor};
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: ${i=>i.theme.colors.orangeLightColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`,O=e(s)`
  width: 100%;
  height: 100%;
  border-radius: ${i=>i.theme.radii.ld};
  background-color: transparent;
  border: 1px solid ${i=>i.theme.colors.accentColor};

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${i=>i.theme.colors.whiteColor};
  transition: all 0.3s;

  &:hover,
  &:focus {
    border-color: ${i=>i.theme.colors.orangeColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;export{X as A,V as H,Y as I,q as L,G as M,K as S,U as T,R as a,W as b,J as c,O as d};
