import{u as i,L as m,a as h,j as o,r as x,C as g}from"./index-dfbb16d1.js";import{b as u,a as w,c as b,d as f}from"./hero-desktop-2x-c0317d06.js";import{F as j,a as $,E as S,c as k,b as t,d as C}from"./index.esm-c20aea0b.js";const v="/project-Power-7/assets/signup-mob-1x-303147fd.png",z="/project-Power-7/assets/signup-mob-2x-3ba63a27.png",y=i.div`
  position: relative;
  height: 100vh;
  /* width: 100%; */
  padding: 127px 20px 0;

  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(
    url(${v}) 1x,
    url(${z}) 2x
  );

  @media screen and (min-width: 768px) {
    padding: 189px 32px 0;
    background-image: image-set(url(${u}) 1x, url(${w}) 2x);
  }

  @media screen and (min-width: 1440px) {
    padding: 200px 96px 0;
    background-size: contain;
    background-image: image-set(url(${b}) 1x, url(${f}) 2x);
  }
`,_=i.h1`
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
`,U=i.p`
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
`,q=i.div`
  display: flex;
  gap: 2px;
`,F=i.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
`,P=i(m)`
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
`,L=i(j)`
  max-width: 335px;
`,T=i.div`
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
`,n=i.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 364px;
  }
`,r=i($)`
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
`,a=i(S)`
  position: absolute;
  top: 48px;
  left: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: ${e=>e.theme.colors.errorColor};
`,E=i.button`
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
`,R=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,A=k().shape({name:t().trim().required("Required"),email:t().trim().email().matches(R,"Please enter a valid email! For example jane@mail.com").required("Required"),password:t().trim().min(6,"Too Short!").max(30,"Password should not exceed 30 characters").matches(/^\S*$/,"Password should not contain spaces").required("Required")}),W={name:"",email:"",password:""},I=()=>{const e=h(),s=({name:d,email:p,password:l},{resetForm:c})=>{e(x({name:d,email:p,password:l})),c()};return o.jsx(C,{initialValues:W,onSubmit:s,validationSchema:A,children:o.jsxs(L,{autoComplete:"off",children:[o.jsxs(T,{children:[o.jsxs(n,{children:[o.jsx(r,{autoComplete:"on",type:"text",id:"name",name:"name",placeholder:"Name",required:!0}),o.jsx(a,{name:"name",component:"span"})]}),o.jsxs(n,{children:[o.jsx(r,{autoComplete:"on",type:"email",id:"email",name:"email",placeholder:"Email",required:!0}),o.jsx(a,{name:"email",component:"span"})]}),o.jsxs(n,{children:[o.jsx(r,{type:"password",id:"password",name:"password",placeholder:"Password",required:!0}),o.jsx(a,{name:"password",component:"span"})]})]}),o.jsx(E,{type:"submit",children:"Sign Up"})]})})},B=()=>o.jsx(g,{children:o.jsxs(y,{children:[o.jsx(_,{children:"Sign Up"}),o.jsx(U,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),o.jsx(I,{}),o.jsxs(q,{children:[o.jsx(F,{children:"Already have an account? "}),o.jsx(P,{to:"/signIn",children:"Sign In"})]})]})});export{B as default};
