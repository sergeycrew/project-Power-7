import{u as o,L as m,a as x,b as g,c as u,j as i,l as w,C as b}from"./index-057ea621.js";import{b as f,a as j,c as $,d as S}from"./hero-desktop-2x-c0317d06.js";import{s as k,a as v}from"./signup-mob-2x-c155b3ed.js";import{F as C,a as z,E as _,c as y,b as t,d as F}from"./index.esm-a45d50ac.js";const P=o.div`
  position: relative;
  height: 100vh;
  /* width: 100%; */
  padding: 127px 20px 0;

  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(
    url(${k}) 1x,
    url(${v}) 2x
  );

  @media screen and (min-width: 768px) {
    padding: 189px 32px 0;
    background-image: image-set(url(${f}) 1x, url(${j}) 2x);
  }

  @media screen and (min-width: 1440px) {
    padding: 200px 96px 0;
    background-size: contain;
    background-image: image-set(url(${$}) 1x, url(${S}) 2x);
  }
`,U=o.h1`
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
`,I=o.p`
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
`,L=o.div`
  display: flex;
  gap: 2px;
`,q=o.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
`,E=o(m)`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.whiteColor};
  text-decoration: underline;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.orangeColor};
  }
`,T=o(C)`
  max-width: 335px;
`,W=o.div`
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
`,a=o(z)`
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
`,r=o(_)`
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
`,A=o.button`
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
`,R=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,D=y().shape({email:t().trim().matches(R,"Please enter a valid email! For example jane@mail.com").required("Required"),password:t().trim().min(6,"Too Short!").max(30,"Password should not exceed 30 characters").matches(/^\S*$/,"Password should not contain spaces").required("Required")}),M={email:"",password:""},V=()=>{const e=x(),s=g(),{isLoggedIn:d}=u(),l=({email:p,password:c},{resetForm:h})=>{e(w({email:p,password:c})),h(),d&&s("/profile")};return i.jsx(F,{initialValues:M,onSubmit:l,validationSchema:D,children:i.jsxs(T,{autoComplete:"off",children:[i.jsxs(W,{children:[i.jsxs(n,{children:[i.jsx(a,{autoComplete:"on",type:"email",id:"email",name:"email",placeholder:"Email",required:!0}),i.jsx(r,{name:"email",component:"span"})]}),i.jsxs(n,{children:[i.jsx(a,{type:"password",id:"password",name:"password",placeholder:"Password",required:!0}),i.jsx(r,{name:"password",component:"span"})]})]}),i.jsx(A,{type:"submit",children:"Sign In"})]})})},H=()=>i.jsx(b,{children:i.jsxs(P,{children:[i.jsx(U,{children:"Sign In"}),i.jsx(I,{children:"Welcome! Please enter your credentials to login to the platform:"}),i.jsx(V,{}),i.jsxs(L,{children:[i.jsx(q,{children:"Don’t have an account? "}),i.jsx(E,{to:"/signUp",children:"Sign Up"})]})]})});export{H as default};
