import{u as o,L as j,r as v,a as $,j as e,i as n,b as S}from"./index-22abc787.js";import{F as k,a as C,b as y}from"./formik.esm-95c09dc6.js";import{c as z,a as c}from"./index.esm-ae2ee482.js";import{H as P,M as N,a as q}from"./WelcomePage.styled-1428d8d6.js";import"./hero-desktop-2x-c0317d06.js";const F=o.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${i=>i.theme.colors.whiteColor};
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
  color: ${i=>i.theme.colors.accentColor};
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
    width: 496px;
  }
`,V=o.div`
  display: flex;
  gap: 2px;
`,L=o.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
`,T=o(j)`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${i=>i.theme.colors.whiteColor};
  text-decoration: underline;
  transition: all 0.3s;

  &:hover,
  &:focus {
    color: ${i=>i.theme.colors.orangeColor};
  }
`,p=o.svg`
  position: absolute;
  top: 1px;
  left: 0;
  width: 16px;
  height: 16px;
`,B=o(k)`
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
`,d=o.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 364px;
  }
`,m=o(C)`
  width: 100%;
  border: 1px solid ${i=>i.theme.colors.accentColor};
  border-radius: ${i=>i.theme.radii.ld};
  outline: none;
  padding: 14px;
  height: 46px;
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${i=>i.theme.colors.whiteColor};
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
    border-color: ${i=>i.theme.colors.orangeColor};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: transparent !important;
    -webkit-text-fill-color: ${i=>i.theme.colors.whiteColor} !important;
    transition: background-color 1000s linear 0s;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`,h=o.div`
  position: absolute;
`,a=o.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  padding-left: 20px;

  &.error {
    color: ${i=>i.theme.colors.errorColor};
  }

  &.success {
    color: ${i=>i.theme.colors.successtColor};
  }
`,M=o.button`
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
`,x=o.svg`
  width: 20px;
  height: 20px;
`,U=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${i=>i.theme.radii.ld};
  width: 136px;
  height: 42px;
  background-color: ${i=>i.theme.colors.orangeColor};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${i=>i.theme.colors.whiteColor};
  margin-bottom: 12px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: ${i=>i.theme.colors.orangeLightColor};
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }
`,A=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,W=z().shape({name:c().trim().required("Name is required"),email:c().trim().matches(A,"Please enter a valid email! For example jane@mail.com").required("Email is required"),password:c().trim().min(6,"Password must be at least 6 characters.").max(30,"Password should not exceed 30 characters.").matches(/^\S*$/,"Password should not contain spaces").required("Password is required")}),H={name:"",email:"",password:""},R=()=>{const[i,g]=v.useState(!1),u=$(),r=e.jsx(p,{children:e.jsx("use",{href:`${n}#success`})}),l=e.jsx(p,{children:e.jsx("use",{href:`${n}#not-success`})}),w=({name:s,email:t,password:f},{resetForm:b})=>{u(S({name:s,email:t,password:f})),b()};return e.jsx(y,{initialValues:H,onSubmit:w,validationSchema:W,children:({errors:s,touched:t})=>e.jsxs(B,{noValidate:!0,children:[e.jsxs(E,{children:[e.jsxs(d,{children:[e.jsx(m,{autoComplete:"on",type:"text",id:"name",name:"name",placeholder:"Name",required:!0,className:t.name&&s.name?"invalid":t.name&&!s.name?"valid":""}),t.name&&(s.name||!s.name)&&e.jsxs(h,{children:[s.name&&e.jsxs(a,{className:"error",children:[l," ",s.name]}),!s.name&&e.jsxs(a,{className:"success",children:[r," Success name"]})]})]}),e.jsxs(d,{children:[e.jsx(m,{autoComplete:"on",type:"email",id:"email",name:"email",placeholder:"Email",required:!0,className:t.email&&s.email?"invalid":t.email&&!s.email?"valid":""}),t.email&&(s.email||!s.email)&&e.jsxs(h,{children:[s.email&&e.jsxs(a,{className:"error",children:[l," ",s.email]}),!s.email&&e.jsxs(a,{className:"success",children:[r," Success email"]})]})]}),e.jsxs(d,{children:[e.jsx(m,{type:i?"text":"password",id:"password",name:"password",placeholder:"Password",required:!0,className:t.password&&s.password?"invalid":t.password&&!s.password?"valid":""}),e.jsx(M,{type:"button",onClick:()=>{g(!i)},children:i?e.jsx(x,{children:e.jsx("use",{href:`${n}#eye`})}):e.jsx(x,{children:e.jsx("use",{href:`${n}#eye-off`})})}),t.password&&(s.password||!s.password)&&e.jsxs(h,{children:[s.password&&e.jsxs(a,{className:"error",children:[l," ",s.password]}),!s.password&&e.jsxs(a,{className:"success",children:[r," Success password"]})]})]})]}),e.jsx(U,{type:"submit",children:"Sign Up"})]})})},K=()=>e.jsx(P,{children:e.jsx(N,{children:e.jsxs(q,{children:[e.jsx(F,{children:"Sign Up"}),e.jsx(I,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(R,{}),e.jsxs(V,{children:[e.jsx(L,{children:"Already have an account? "}),e.jsx(T,{to:"/signIn",children:"Sign In"})]})]})})});export{K as default};
