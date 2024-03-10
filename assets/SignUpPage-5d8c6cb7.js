import{u as o,L as c,a as h,j as i,c as x}from"./index-025e3954.js";import{b as g,a as u,c as f,d as w}from"./hero-desktop-2x-c0317d06.js";import{s as b,a as j}from"./signup-mob-2x-c155b3ed.js";import{F as $,a as k,E as S,b as v}from"./formik.esm-ea088495.js";import{c as z,a as t}from"./index.esm-1505461a.js";import{H as C,M as y,a as _}from"./WelcomePage.styled-e27f5ffd.js";o.div`
  /* height: 100vh; */
  /* background-image: linear-gradient(82deg, #040404 1.35%, #040404 100%), */
  /* linear-gradient(155deg, #040404 21.1%, #040404 100%); */
  /* position: relative;
  height: 100vh;
    padding: 127px 20px 0;

  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(
    url(${b}) 1x,
    url(${j}) 2x
  );

  @media screen and (min-width: 768px) {
    padding: 189px 32px 0;
    background-image: image-set(url(${g}) 1x, url(${u}) 2x);
  }

  @media screen and (min-width: 1440px) {
    padding: 200px 96px 0;
    background-size: contain;
    background-image: image-set(url(${f}) 1x, url(${w}) 2x);
  } */
`;const U=o.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${e=>e.theme.colors.whiteColor};
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 16px;
  }
`,q=o.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${e=>e.theme.colors.accentColor};
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
    width: 496px;
  }
`,F=o.div`
  display: flex;
  gap: 2px;
`,P=o.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
`,L=o(c)`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.whiteColor};
  text-decoration: underline;
  transition: all 0.3s;

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.orangeColor};
  }
`,T=o($)`
  max-width: 335px;
`,E=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 18px;
  padding-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    padding-bottom: 64px;
  }
`,n=o.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 364px;
  }
`,r=o(k)`
  /* position: relative; */
  width: 100%;
  border: 1px solid ${e=>e.theme.colors.accentColor};
  border-radius: ${e=>e.theme.radii.ld};
  padding: 14px;
  height: 46px;
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.whiteColor};

  &::placeholder {
    font-size: 14px;
    line-height: 1.29;
    color: rgba(239, 237, 232, 0.6);
  }

  @media screen and (min-width: 768px) {
    height: 46px;
  }

  @media screen and (min-width: 1440px) {
    height: 52px;
  }
`,a=o(S)`
  position: absolute;
  top: 48px;
  left: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: ${e=>e.theme.colors.errorColor};

  @media screen and (min-width: 1440px) {
    top: 52px;
  }
`,R=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${e=>e.theme.radii.ld};
  width: 136px;
  height: 42px;
  background-color: ${e=>e.theme.colors.orangeColor};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${e=>e.theme.colors.whiteColor};
  margin-bottom: 12px;

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.orangeLightColor};
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }
`,M=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,A=z().shape({name:t().trim().required("Required"),email:t().trim().matches(M,"Please enter a valid email! For example jane@mail.com").required("Required"),password:t().trim().min(6,"Too Short!").max(30,"Password should not exceed 30 characters").matches(/^\S*$/,"Password should not contain spaces").required("Required")}),W={name:"",email:"",password:""},B=()=>{const e=h(),s=({name:d,email:p,password:l},{resetForm:m})=>{e(x({name:d,email:p,password:l})),m()};return i.jsx(v,{initialValues:W,onSubmit:s,validationSchema:A,children:i.jsxs(T,{autoComplete:"off",children:[i.jsxs(E,{children:[i.jsxs(n,{children:[i.jsx(r,{autoComplete:"on",type:"text",id:"name",name:"name",placeholder:"Name",required:!0}),i.jsx(a,{name:"name",component:"span"})]}),i.jsxs(n,{children:[i.jsx(r,{autoComplete:"on",type:"email",id:"email",name:"email",placeholder:"Email",required:!0}),i.jsx(a,{name:"email",component:"span"})]}),i.jsxs(n,{children:[i.jsx(r,{type:"password",id:"password",name:"password",placeholder:"Password",required:!0}),i.jsx(a,{name:"password",component:"span"})]})]}),i.jsx(R,{type:"submit",children:"Sign Up"})]})})},G=()=>i.jsx(C,{children:i.jsx(y,{children:i.jsxs(_,{children:[i.jsx(U,{children:"Sign Up"}),i.jsx(q,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),i.jsx(B,{}),i.jsxs(F,{children:[i.jsx(P,{children:"Already have an account? "}),i.jsx(L,{to:"/signIn",children:"Sign In"})]})]})})});export{G as default};
