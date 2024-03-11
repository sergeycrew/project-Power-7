import{u as s,L as b,r as j,a as $,j as i,s as n,l as v}from"./index-eeb9a07a.js";import{F as S,a as k,b as C}from"./formik.esm-a077424f.js";import{c as z,a as c}from"./index.esm-8d73ea50.js";import{H as P,M as y,a as I}from"./WelcomePage.styled-072f7beb.js";import"./hero-desktop-2x-c0317d06.js";const F=s.h1`
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
`,L=s.p`
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
`,V=s.div`
  display: flex;
  gap: 2px;
`,q=s.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
`,N=s(b)`
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
`,d=s.svg`
  position: absolute;
  top: 1px;
  left: 0;
  width: 16px;
  height: 16px;
`,B=s(S)`
  max-width: 335px;
`,E=s.div`
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
`,h=s.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 364px;
  }
`,p=s(k)`
  width: 100%;
  border: 1px solid ${e=>e.theme.colors.accentColor};
  border-radius: ${e=>e.theme.radii.ld};
  outline: none;
  padding: 14px;
  height: 46px;
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.whiteColor};
  transition: all 0.3s;

  &::placeholder {
    font-size: 14px;
    line-height: 1.29;
    color: rgba(239, 237, 232, 0.6);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  &.invalid {
    border-color: #d80027;
  }

  &.valid {
    border-color: #3cbf61;
  }

  &:hover,
  &:focus,
  &:active {
    border-color: ${e=>e.theme.colors.orangeColor};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: transparent !important;
    -webkit-text-fill-color: ${e=>e.theme.colors.whiteColor} !important;
    transition: background-color 1000s linear 0s;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`,m=s.div`
  position: absolute;
`,a=s.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  padding-left: 20px;

  &.error {
    color: ${e=>e.theme.colors.errorColor};
  }

  &.success {
    color: ${e=>e.theme.colors.successtColor};
  }
`,M=s.button`
  position: absolute;
  top: 13px;
  right: 14px;
  background-color: transparent;
  border: none;
  padding: 0;
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    top: 16px;
  }
`,x=s.svg`
  width: 20px;
  height: 20px;
`,W=s.button`
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
  transition: all 0.3s;

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
`,T=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,A=z().shape({email:c().trim().matches(T,"Please enter a valid email! For example jane@mail.com").required("Email is required"),password:c().trim().min(6,"Password must be at least 6 characters.").max(30,"Password should not exceed 30 characters").matches(/^\S*$/,"Password should not contain spaces").required("Password is required")}),D={email:"",password:""},H=()=>{const[e,g]=j.useState(!1),u=$(),r=i.jsx(d,{children:i.jsx("use",{href:`${n}#success`})}),l=i.jsx(d,{children:i.jsx("use",{href:`${n}#not-success`})}),w=({email:o,password:t},{resetForm:f})=>{u(v({email:o,password:t})),f()};return i.jsx(C,{initialValues:D,onSubmit:w,validationSchema:A,children:({errors:o,touched:t})=>i.jsxs(B,{noValidate:!0,children:[i.jsxs(E,{children:[i.jsxs(h,{children:[i.jsx(p,{autoComplete:"on",type:"email",id:"email",name:"email",placeholder:"Email",required:!0,className:t.email&&o.email?"invalid":t.email&&!o.email?"valid":""}),t.email&&(o.email||!o.email)&&i.jsxs(m,{children:[o.email&&i.jsxs(a,{className:"error",children:[l," ",o.email]}),!o.email&&i.jsxs(a,{className:"success",children:[r," Success email"]})]})]}),i.jsxs(h,{children:[i.jsx(p,{type:e?"text":"password",id:"password",name:"password",placeholder:"Password",required:!0,className:t.password&&o.password?"invalid":t.password&&!o.password?"valid":""}),i.jsx(M,{type:"button",onClick:()=>{g(!e)},children:e?i.jsx(x,{children:i.jsx("use",{href:`${n}#eye`})}):i.jsx(x,{children:i.jsx("use",{href:`${n}#eye-off`})})}),t.password&&(o.password||!o.password)&&i.jsxs(m,{children:[o.password&&i.jsxs(a,{className:"error",children:[l," ",o.password]}),!o.password&&i.jsxs(a,{className:"success",children:[r," Success password"]})]})]})]}),i.jsx(W,{type:"submit",children:"Sign In"})]})})},J=()=>i.jsx(P,{children:i.jsx(y,{children:i.jsxs(I,{children:[i.jsx(F,{children:"Sign In"}),i.jsx(L,{children:"Welcome! Please enter your credentials to login to the platform:"}),i.jsx(H,{}),i.jsxs(V,{children:[i.jsx(q,{children:"Don’t have an account? "}),i.jsx(N,{to:"/signUp",children:"Sign Up"})]})]})})});export{J as default};
