import{u as t,V as o,j as i}from"./index-848d9fc8.js";import{b as n,a as r,c as a,d as h}from"./hero-desktop-2x-c0317d06.js";const d="/project-Power-7/assets/hero-mobile-1x-1bba6f7c.png",s="/project-Power-7/assets/hero-mobile-2x-98b0b14f.png",x=t.section`
  position: relative;
  height: 100vh;
  max-width: 375px;
  width: 100%;
  margin-inline: auto;

  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${d}) 1x, url(${s}) 2x);

  @media screen and (max-width: 767px) and (max-height: 812px) {
    height: 812px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    background-image: image-set(url(${n}) 1x, url(${r}) 2x);
  }

  @media screen and (min-width: 768px) and (max-height: 1024px) {
    height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 100vh;
    background-size: contain;
    background-image: image-set(url(${a}) 1x, url(${h}) 2x);
  }

  @media screen and (min-width: 1440px) and (max-height: 800px) {
    height: 800px;
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
`,c=t.h1`
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
`,m=t.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,g=t.button`
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
  transition: all 0.3s;

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.orangeColor};
    background-color: ${e=>e.theme.colors.orangeLightColor};
  }

  @media screen and (min-width: 768px) {
    width: 204px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }
`,u=()=>{const e=o();return i.jsx(x,{children:i.jsxs(p,{children:[i.jsx(c,{children:"404"}),i.jsx(m,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),i.jsx(g,{type:"button",onClick:()=>e("/"),children:"Go Home"})]})})};export{u as default};
