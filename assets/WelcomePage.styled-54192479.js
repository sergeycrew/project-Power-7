import{u as e,j as t,s as n,L as o}from"./index-4117e63b.js";import{b as a,a as d,c as r,d as s}from"./hero-desktop-2x-c0317d06.js";const h=e.div`
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
`,p=e.div`
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
`,x=e.div`
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
`,l=e.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,c=e.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,g=e.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  color: ${i=>i.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`,m=e.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,w=e.div`
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
`,f=e.div`
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
`,u=e.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,b=e.div`
  display: flex;
  gap: 8px;
  align-items: end;

  @media screen and (min-width: 768px) {
    gap: 11px;
  }
`,j=e.span`
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
`,$=e.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.65);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,k=()=>t.jsxs(h,{children:[t.jsxs(p,{children:[t.jsx(x,{children:t.jsx(l,{children:t.jsx("use",{href:`${n}#icon-Polygon-1`})})}),t.jsxs(c,{children:[t.jsx(g,{children:"350+"}),t.jsx(m,{children:"Video tutorial"})]})]}),t.jsxs(w,{children:[t.jsx(f,{children:t.jsx(u,{children:t.jsx("use",{href:`${n}#icon-running-stick-figure`})})}),t.jsxs(b,{children:[t.jsx(j,{children:"500"}),t.jsx($,{children:"cal"})]})]})]}),v="/project-Power-7/assets/bg-mobile-1x-014f5a2c.png",y="/project-Power-7/assets/bg-mobile-2x-ba0edaad.png",C=e.div`
  position: relative;
  z-index: 0;
  max-width: 375px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${v}) 1x, url(${y}) 2x);

  @media screen and (min-width: 375px) and (max-height: 812px) {
    height: 812px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    background-image: image-set(url(${a}) 1x, url(${d}) 2x);
  }

  @media screen and (min-width: 768px) and (max-height: 1024px) {
    height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 100vh;
    background-size: contain;
    background-image: image-set(url(${r}) 1x, url(${s}) 2x);
  }

  @media screen and (min-width: 1440px) and (max-height: 800px) {
    height: 800px;
  }
`,_=({children:i})=>t.jsxs(C,{children:[i,t.jsx(k,{})]}),I=e.section`
  padding-top: 127px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`,L=e.div`
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
`,B=e.div`
  width: 335px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${i=>i.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    width: 598px;
    gap: 64px;
  }
`,S=e.h1`
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
`,H=e.svg`
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
`,M=e.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    flex-wrap: nowrap;
  }
`,P=e.li`
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
`,N=e(o)`
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
`,E=e(o)`
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
`;export{_ as H,H as I,M as L,I as M,N as S,B as T,L as a,S as b,P as c,E as d};
