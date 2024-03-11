import{u as e,a as p,c as x,r as c,g as l,j as t,s as o,L as a}from"./index-5a3dae94.js";import{b as g,a as m,c as w,d as u}from"./hero-desktop-2x-c0317d06.js";const f=e.div`
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
`,b=e.div`
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
`,j=e.div`
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
`,$=e.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,k=e.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,v=e.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`,y=e.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,C=e.div`
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
`,z=e.div`
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
`,T=e.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,_=e.div`
  display: flex;
  gap: 8px;
  align-items: end;

  @media screen and (min-width: 768px) {
    gap: 11px;
  }
`,I=e.span`
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
`,L=e.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.65);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,S=i=>i.statistic.statistic,B=()=>{const i=p(),d=x(S);c.useEffect(()=>{i(l())},[i]);const s=n=>n<1e3?n:(Math.round(n)/1e3).toFixed(1),{allExercisesVideo:r,allBurnedCalories:h}=d;return t.jsxs(f,{children:[t.jsxs(b,{children:[t.jsx(j,{children:t.jsx($,{children:t.jsx("use",{href:`${o}#icon-Polygon-1`})})}),t.jsxs(k,{children:[t.jsx(v,{children:r}),t.jsx(y,{children:"Video tutorial"})]})]}),t.jsxs(C,{children:[t.jsx(z,{children:t.jsx(T,{children:t.jsx("use",{href:`${o}#icon-running-stick-figure`})})}),t.jsxs(_,{children:[t.jsx(I,{children:s(h)}),t.jsx(L,{children:"kcal"})]})]})]})},E="/project-Power-7/assets/bg-mobile-1x-014f5a2c.png",M="/project-Power-7/assets/bg-mobile-2x-ba0edaad.png",H=e.div`
  position: relative;
  z-index: 0;
  max-width: 375px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${E}) 1x, url(${M}) 2x);

  @media screen and (min-width: 375px) and (max-height: 812px) {
    height: 812px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    background-image: image-set(url(${g}) 1x, url(${m}) 2x);
  }

  @media screen and (min-width: 768px) and (max-height: 1024px) {
    height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 100vh;
    background-size: contain;
    background-image: image-set(url(${w}) 1x, url(${u}) 2x);
  }

  @media screen and (min-width: 1440px) and (max-height: 800px) {
    height: 800px;
  }
`,V=({children:i})=>t.jsxs(H,{children:[i,t.jsx(B,{})]}),D=e.section`
  padding-top: 127px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`,F=e.div`
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
`,G=e.div`
  width: 335px;
  /* width: 100%; */
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${i=>i.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    width: 598px;
    gap: 64px;
  }
`,R=e.h1`
  position: relative;
  /* width: 335px; */
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
`,U=e.svg`
  width: 98px;
  height: 35px;
  position: absolute;
  z-index: 0;
  top: 43px;
  left: -9px;

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
    top: 84px;
    left: -16px;
  }

  @media screen and (min-width: 1440px) {
    left: -16px;
  }
`,q=e.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    flex-wrap: nowrap;
  }
`,A=e.li`
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
`,J=e(a)`
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
`,K=e(a)`
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
`;export{V as H,U as I,q as L,D as M,J as S,G as T,F as a,R as b,A as c,K as d};
