import{u as o,L as S,b as x,s as k,c as C,r as y,a as z,j as e,i as n,d as P}from"./index-b51feb05.js";import{F as N,a as q,b as F}from"./formik.esm-17ede76a.js";import{c as I,a as d}from"./index.esm-1288fe1f.js";import{H as L,M as V,a as E}from"./WelcomePage.styled-1ad51df1.js";import"./DiaryLoader-3466e1f7.js";const T=o.h1`
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
`,A=o.p`
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
`,B=o.div`
  display: flex;
  gap: 2px;
`,M=o.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
`,U=o(S)`
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
`,g=o.svg`
  position: absolute;
  top: 1px;
  left: 0;
  width: 16px;
  height: 16px;
`,W=o(N)`
  max-width: 335px;
`,H=o.div`
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
`,m=o.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 364px;
  }
`,h=o(q)`
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
`,p=o.div`
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
`,R=o.button`
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
`,u=o.svg`
  width: 20px;
  height: 20px;
`,Z=o.button`
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
`,D=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,_=I().shape({name:d().trim().required("Name is required"),email:d().trim().matches(D,"Please enter a valid email! For example jane@mail.com").required("Email is required"),password:d().trim().min(6,"Password must be at least 6 characters.").max(30,"Password should not exceed 30 characters.").matches(/^\S*$/,"Password should not contain spaces").required("Password is required")}),G={name:"",email:"",password:""},J=()=>{const i=x(k),w=x(C),[r,f]=y.useState(!1),b=z(),l=e.jsx(g,{children:e.jsx("use",{href:`${n}#success`})}),c=e.jsx(g,{children:e.jsx("use",{href:`${n}#not-success`})}),j=({name:s,email:t,password:v},{resetForm:$})=>{b(P({name:s,email:t,password:v})),!i&&!w&&$()};return e.jsx(F,{initialValues:G,onSubmit:j,validationSchema:_,children:({errors:s,touched:t})=>e.jsxs(W,{noValidate:!0,children:[e.jsxs(H,{children:[e.jsxs(m,{children:[e.jsx(h,{autoComplete:"on",type:"text",id:"name",name:"name",placeholder:"Name",required:!0,className:t.name&&s.name?"invalid":t.name&&!s.name?"valid":""}),t.name&&(s.name||!s.name)&&e.jsxs(p,{children:[s.name&&e.jsxs(a,{className:"error",children:[c," ",s.name]}),!s.name&&e.jsxs(a,{className:"success",children:[l," Success name"]})]})]}),e.jsxs(m,{children:[e.jsx(h,{autoComplete:"on",type:"email",id:"email",name:"email",placeholder:"Email",required:!0,className:t.email&&s.email?"invalid":t.email&&!s.email?"valid":""}),t.email&&(s.email||!s.email)&&e.jsxs(p,{children:[s.email&&e.jsxs(a,{className:"error",children:[c," ",s.email]}),!s.email&&e.jsxs(a,{className:"success",children:[l," Success email"]})]})]}),e.jsxs(m,{children:[e.jsx(h,{type:r?"text":"password",id:"password",name:"password",placeholder:"Password",required:!0,className:t.password&&s.password?"invalid":t.password&&!s.password?"valid":""}),e.jsx(R,{type:"button",onClick:()=>{f(!r)},children:r?e.jsx(u,{children:e.jsx("use",{href:`${n}#eye`})}):e.jsx(u,{children:e.jsx("use",{href:`${n}#eye-off`})})}),t.password&&(s.password||!s.password)&&e.jsxs(p,{children:[s.password&&e.jsxs(a,{className:"error",children:[c," ",s.password]}),!s.password&&e.jsxs(a,{className:"success",children:[l," Success password"]})]})]})]}),e.jsx(Z,{type:"submit",children:"Sign Up"})]})})},ee=()=>e.jsx(L,{children:e.jsx(V,{children:e.jsxs(E,{children:[e.jsx(T,{children:"Sign Up"}),e.jsx(A,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(J,{}),e.jsxs(B,{children:[e.jsx(M,{children:"Already have an account? "}),e.jsx(U,{to:"/signIn",children:"Sign In"})]})]})})});export{ee as default};
