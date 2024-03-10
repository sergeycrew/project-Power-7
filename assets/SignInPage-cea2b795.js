import{u as o,L as c,a as h,j as i,l as m}from"./index-9d6e2318.js";import{b as x,a as g,c as u,d as w}from"./hero-desktop-2x-c0317d06.js";import{s as f,a as b}from"./signup-mob-2x-c155b3ed.js";import{F as j,a as $,E as S,b as k}from"./formik.esm-2dda00f7.js";import{c as z,a as t}from"./index.esm-36389217.js";import{H as v,M as C,a as _}from"./WelcomePage.styled-9cf42398.js";o.div`
  position: relative;
  height: 100vh;
  /* width: 100%; */
  padding: 127px 20px 0;

  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(
    url(${f}) 1x,
    url(${b}) 2x
  );

  @media screen and (min-width: 768px) {
    padding: 189px 32px 0;
    background-image: image-set(url(${x}) 1x, url(${g}) 2x);
  }

  @media screen and (min-width: 1440px) {
    padding: 200px 96px 0;
    background-size: contain;
    background-image: image-set(url(${u}) 1x, url(${w}) 2x);
  }
`;const y=o.h1`
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
`,F=o.p`
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
`,P=o.div`
  display: flex;
  gap: 2px;
`,U=o.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
`,q=o(c)`
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
`,I=o(j)`
  max-width: 335px;
`,L=o.div`
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
`,r=o($)`
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
`,E=o.button`
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
`,M=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,T=z().shape({email:t().trim().matches(M,"Please enter a valid email! For example jane@mail.com").required("Required"),password:t().trim().min(6,"Too Short!").max(30,"Password should not exceed 30 characters").matches(/^\S*$/,"Password should not contain spaces").required("Required")}),W={email:"",password:""},R=()=>{const e=h(),s=({email:d,password:l},{resetForm:p})=>{e(m({email:d,password:l})),p()};return i.jsx(k,{initialValues:W,onSubmit:s,validationSchema:T,children:i.jsxs(I,{autoComplete:"off",children:[i.jsxs(L,{children:[i.jsxs(n,{children:[i.jsx(r,{autoComplete:"on",type:"email",id:"email",name:"email",placeholder:"Email",required:!0}),i.jsx(a,{name:"email",component:"span"})]}),i.jsxs(n,{children:[i.jsx(r,{type:"password",id:"password",name:"password",placeholder:"Password",required:!0}),i.jsx(a,{name:"password",component:"span"})]})]}),i.jsx(E,{type:"submit",children:"Sign In"})]})})},G=()=>i.jsx(v,{children:i.jsx(C,{children:i.jsxs(_,{children:[i.jsx(y,{children:"Sign In"}),i.jsx(F,{children:"Welcome! Please enter your credentials to login to the platform:"}),i.jsx(R,{}),i.jsxs(P,{children:[i.jsx(U,{children:"Don’t have an account? "}),i.jsx(q,{to:"/signUp",children:"Sign Up"})]})]})})});export{G as default};
