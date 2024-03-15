import{u as s,L as v,b as d,s as S,c as k,r as C,a as z,j as e,i as n,l as P}from"./index-2761ab88.js";import{F as y,a as I,b as F}from"./formik.esm-1e562936.js";import{c as L,a as h}from"./index.esm-8e47cef3.js";import{H as V,M as q,a as N}from"./WelcomePage.styled-96b713bc.js";import"./DiaryLoader-e696dad3.js";const E=s.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${o=>o.theme.colors.whiteColor};
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 16px;
  }
`,B=s.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${o=>o.theme.colors.accentColor};
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
    width: 496px;
  }
`,M=s.div`
  display: flex;
  gap: 2px;
`,W=s.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
`,A=s(v)`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${o=>o.theme.colors.whiteColor};
  text-decoration: underline;
  transition: all 0.3s;

  &:hover,
  &:focus {
    color: ${o=>o.theme.colors.orangeColor};
  }
`,p=s.svg`
  position: absolute;
  top: 1px;
  left: 0;
  width: 16px;
  height: 16px;
`,T=s(y)`
  max-width: 335px;
`,D=s.div`
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
`,m=s.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 364px;
  }
`,x=s(I)`
  width: 100%;
  border: 1px solid ${o=>o.theme.colors.accentColor};
  border-radius: ${o=>o.theme.radii.ld};
  outline: none;
  padding: 14px;
  height: 46px;
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${o=>o.theme.colors.whiteColor};
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
    border-color: ${o=>o.theme.colors.orangeColor};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: transparent !important;
    -webkit-text-fill-color: ${o=>o.theme.colors.whiteColor} !important;
    transition: background-color 1000s linear 0s;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`,g=s.div`
  position: absolute;
`,a=s.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  padding-left: 20px;

  &.error {
    color: ${o=>o.theme.colors.errorColor};
  }

  &.success {
    color: ${o=>o.theme.colors.successtColor};
  }
`,H=s.button`
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
`,u=s.svg`
  width: 20px;
  height: 20px;
`,U=s.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${o=>o.theme.radii.ld};
  width: 136px;
  height: 42px;
  background-color: ${o=>o.theme.colors.orangeColor};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${o=>o.theme.colors.whiteColor};
  margin-bottom: 12px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: ${o=>o.theme.colors.orangeLightColor};
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }
`,Z=/^[a-z0-9._%+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/,R=L().shape({email:h().trim().matches(Z,"Please enter a valid email! For example jane@mail.com").required("Email is required"),password:h().trim().min(6,"Password must be at least 6 characters.").max(30,"Password should not exceed 30 characters").matches(/^\S*$/,"Password should not contain spaces").required("Password is required")}),_={email:"",password:""},G=()=>{const o=d(S),w=d(k),[r,f]=C.useState(!1),b=z(),l=e.jsx(p,{children:e.jsx("use",{href:`${n}#success`})}),c=e.jsx(p,{children:e.jsx("use",{href:`${n}#not-success`})}),j=({email:i,password:t},{resetForm:$})=>{b(P({email:i,password:t})),!o&&!w&&$()};return e.jsx(F,{initialValues:_,onSubmit:j,validationSchema:R,children:({errors:i,touched:t})=>e.jsxs(T,{noValidate:!0,children:[e.jsxs(D,{children:[e.jsxs(m,{children:[e.jsx(x,{autoComplete:"on",type:"email",id:"email",name:"email",placeholder:"Email",required:!0,className:t.email&&i.email?"invalid":t.email&&!i.email?"valid":""}),t.email&&(i.email||!i.email)&&e.jsxs(g,{children:[i.email&&e.jsxs(a,{className:"error",children:[c," ",i.email]}),!i.email&&e.jsxs(a,{className:"success",children:[l," Success email"]})]})]}),e.jsxs(m,{children:[e.jsx(x,{type:r?"text":"password",id:"password",name:"password",placeholder:"Password",required:!0,className:t.password&&i.password?"invalid":t.password&&!i.password?"valid":""}),e.jsx(H,{type:"button",onClick:()=>{f(!r)},children:r?e.jsx(u,{children:e.jsx("use",{href:`${n}#eye`})}):e.jsx(u,{children:e.jsx("use",{href:`${n}#eye-off`})})}),t.password&&(i.password||!i.password)&&e.jsxs(g,{children:[i.password&&e.jsxs(a,{className:"error",children:[c," ",i.password]}),!i.password&&e.jsxs(a,{className:"success",children:[l," Success password"]})]})]})]}),e.jsx(U,{type:"submit",children:"Sign In"})]})})},Y=()=>e.jsx(V,{children:e.jsx(q,{children:e.jsxs(N,{children:[e.jsx(E,{children:"Sign In"}),e.jsx(B,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(G,{}),e.jsxs(M,{children:[e.jsx(W,{children:"Don’t have an account? "}),e.jsx(A,{to:"/signUp",children:"Sign Up"})]})]})})});export{Y as default};
