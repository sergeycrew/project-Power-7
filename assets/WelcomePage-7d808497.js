import{u as t,L as d,j as i,s as r}from"./index-5caca344.js";const s=t.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,a="/project-Power-7/assets/bg-mobile-1x-014f5a2c.png",p="/project-Power-7/assets/bg-mobile-2x-ba0edaad.png",x="/project-Power-7/assets/hero-tablet-1x-aa5449da.png",c="/project-Power-7/assets/hero-tablet-2x-2500ed2d.png",h="/project-Power-7/assets/hero-desktop-1x-b62653ab.png",l="/project-Power-7/assets/hero-desktop-2x-90fc6b87.png",g=t.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing(10)};
  padding-top: 127px;

  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${a}) 1x, url(${p}) 2x);

  @media screen and (min-width: 768px) {
    gap: 64px;
    padding-top: 189px;
    background-image: image-set(url(${x}) 1x, url(${c}) 2x);
  }

  @media screen and (min-width: 1440px) {
    padding-top: 200px;
    background-size: contain;
    background-image: image-set(url(${h}) 1x, url(${l}) 2x);
  }
`,m=t.div`
  padding: 0 20px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 96px;
  }
`,w=t.h1`
  position: relative;
  z-index: 1;
  max-width: 335px;
  height: 120px;
  color: ${e=>e.theme.colors.whiteColor};
  font-weight: 500;
  font-size: 38px;
  line-height: 1.05;
  letter-spacing: 0.01em;

  @media screen and (min-width: 768px) {
    max-width: 598px;
    height: 234px;
    font-size: 70px;
    line-height: 1.11;
  }
`,b=t.svg`
  width: 98px;
  height: 35px;
  stroke-width: 2px;
  position: absolute;
  top: 43px;
  left: 11px;

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
    top: 84px;
    left: 16px;
  }

  @media screen and (min-width: 1440px) {
    left: 80px;
  }
`,u=t.ul`
  display: flex;
  gap: 14px;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 96px;
  }
`,o=t.li`
  width: 136px;
  height: 42px;
  border-radius: ${e=>e.theme.radii.ld};
  background-color: ${e=>e.theme.colors.orangeColor};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.orangeLightColor};
  }

  &:last-child {
    width: 130px;
    background-color: transparent;
    border: 1px solid ${e=>e.theme.colors.accentColor};

    &:hover,
    &:focus {
      border-color: ${e=>e.theme.colors.orangeColor};
    }
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;

    &:last-child {
      width: 182px;
    }
  }
`,n=t(d)`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${e=>e.theme.colors.whiteColor};
  transition: color 0.3s;
  /* &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.orangeLightColor};
  } */

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`,j=()=>i.jsx(s,{children:i.jsxs(g,{children:[i.jsxs(m,{children:[i.jsx(b,{children:i.jsx("use",{href:`${r}#slogan-line`})}),i.jsx(w,{children:"Transforming your body shape with Power Pulse"})]}),i.jsxs(u,{children:[i.jsx(o,{children:i.jsx(n,{to:"/signUp",children:"Sign Up"})}),i.jsx(o,{children:i.jsx(n,{to:"/signIn",children:"Sign In"})})]})]})});export{j as default};
