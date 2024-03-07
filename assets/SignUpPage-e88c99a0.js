import{u as o,L as x,a as g,b as u,c as f,j as i,r as w,C as b}from"./index-df5aa589.js";import{b as j,a as $,c as S,d as k}from"./hero-desktop-2x-c0317d06.js";import{s as v,a as C}from"./signup-mob-2x-c155b3ed.js";import{F as z,a as y,E as _,c as U,b as t,d as q}from"./index.esm-453a53bc.js";const F=o.div`
  position: relative;
  height: 100vh;
  /* width: 100%; */
  padding: 127px 20px 0;

  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(
    url(${v}) 1x,
    url(${C}) 2x
  );

  @media screen and (min-width: 768px) {
    padding: 189px 32px 0;
    background-image: image-set(url(${j}) 1x, url(${$}) 2x);
  }

  @media screen and (min-width: 1440px) {
    padding: 200px 96px 0;
    background-size: contain;
    background-image: image-set(url(${S}) 1x, url(${k}) 2x);
  }
`,L=o.h1`
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
`,P=o.p`
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
`,T=o.div`
  display: flex;
  gap: 2px;
`,E=o.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
`,R=o(x)`
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
`,A=o(z)`
  max-width: 335px;
`,I=o.div`
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
`,r=o(y)`
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
`,a=o(_)`
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
`,W=o.button`
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
`,M=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,N=U().shape({name:t().trim().required("Required"),email:t().trim().matches(M,"Please enter a valid email! For example jane@mail.com").required("Required"),password:t().trim().min(6,"Too Short!").max(30,"Password should not exceed 30 characters").matches(/^\S*$/,"Password should not contain spaces").required("Required")}),V={name:"",email:"",password:""},Z=()=>{const e=g(),s=u(),{isLoggedIn:d}=f(),p=({name:l,email:c,password:m},{resetForm:h})=>{e(w({name:l,email:c,password:m})),h(),d&&s("/profile")};return i.jsx(q,{initialValues:V,onSubmit:p,validationSchema:N,children:i.jsxs(A,{autoComplete:"off",children:[i.jsxs(I,{children:[i.jsxs(n,{children:[i.jsx(r,{autoComplete:"on",type:"text",id:"name",name:"name",placeholder:"Name",required:!0}),i.jsx(a,{name:"name",component:"span"})]}),i.jsxs(n,{children:[i.jsx(r,{autoComplete:"on",type:"email",id:"email",name:"email",placeholder:"Email",required:!0}),i.jsx(a,{name:"email",component:"span"})]}),i.jsxs(n,{children:[i.jsx(r,{type:"password",id:"password",name:"password",placeholder:"Password",required:!0}),i.jsx(a,{name:"password",component:"span"})]})]}),i.jsx(W,{type:"submit",children:"Sign Up"})]})})},J=()=>i.jsx(b,{children:i.jsxs(F,{children:[i.jsx(L,{children:"Sign Up"}),i.jsx(P,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),i.jsx(Z,{}),i.jsxs(T,{children:[i.jsx(E,{children:"Already have an account? "}),i.jsx(R,{to:"/signIn",children:"Sign In"})]})]})});export{J as default};
