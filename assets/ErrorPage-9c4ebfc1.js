import{u as t,b as i,j as o,C as n}from"./index-d8640c36.js";import{b as r,a,c as s,d}from"./hero-desktop-2x-c0317d06.js";const h="/project-Power-7/assets/hero-mobile-1x-1bba6f7c.png",c="/project-Power-7/assets/hero-mobile-2x-98b0b14f.png",x=t.section`
  position: relative;
  height: 100vh;

  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${h}) 1x, url(${c}) 2x);

  @media screen and (min-width: 768px) {
    background-image: image-set(url(${r}) 1x, url(${a}) 2x);
  }

  @media screen and (min-width: 1440px) {
    background-size: contain;
    background-image: image-set(url(${s}) 1x, url(${d}) 2x);
  }
`,p=t.div`
  max-width: 240px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 20px;
  background-color: ${e=>e.theme.colors.orangeColor};
  color: ${e=>e.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    max-width: 420px;
    padding-inline: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 669px;
    padding-inline: 96px;
  }
`,l=t.h1`
  font-weight: 500;
  font-size: 66px;
  line-height: 1;
  letter-spacing: 0.01em;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 0.94;
    margin-bottom: 28px;
  }
`,g=t.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,m=t.button`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 147px;
  height: 42px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${e=>e.theme.colors.whiteColor};

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.orangeColor};
  }

  @media screen and (min-width: 768px) {
    width: 204px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }
`,f=()=>{const e=i();return o.jsx(n,{children:o.jsx(x,{children:o.jsxs(p,{children:[o.jsx(l,{children:"404"}),o.jsx(g,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),o.jsx(m,{type:"button",onClick:()=>e("/"),children:"Go Home"})]})})})};export{f as default};
