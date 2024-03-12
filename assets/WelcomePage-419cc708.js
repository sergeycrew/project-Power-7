import{u as r,j as e,s as c,a as l,r as h,G as d}from"./index-03c7c0df.js";import{H as g,M as x,a as p,T as u,b as m,A as f,L as j,c as t,S as w,d as k,I as S}from"./WelcomePage.styled-acf6d4fa.js";const I=r.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid ${n=>n.theme.colors.accentColor};
  border-radius: ${n=>n.theme.radii.ld};
  /* padding: 7px 10px; */

  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${n=>n.theme.colors.whiteColor};
  transition: all 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  &:hover,
  &:focus {
    border-color: ${n=>n.theme.colors.orangeColor};
  }

  @media screen and (min-width: 768px) {
    /* padding: 15px 25px; */
    font-size: 20px;
    line-height: 1.2;
    gap: 10px;
  }
`,b=r.svg`
  /* margin-left: 5px; */
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    /* margin-left: 10px; */
    width: 25px;
    height: 25px;
  }
`,y=()=>{const n=()=>{window.location.assign("https://backend-power-pulse-7.onrender.com/api/users/googleAuth")};return e.jsxs(I,{type:"button",onClick:n,children:["Sign In with",e.jsx(b,{children:e.jsx("use",{href:`${c}#google`})})]})},T=()=>{const n=l(),i=window.location,s=new URLSearchParams(i.search).get("accesstoken"),o=new URLSearchParams(i.search).get("refreshtoken");console.log(s,o),h.useEffect(()=>{(async()=>{s&&o&&n(d({tokens:{accessToken:s,refreshToken:o}}))})()},[n,s,o]);const a=e.jsx(S,{children:e.jsx("use",{href:`${c}#slogan-line`})});return e.jsx(g,{children:e.jsx(x,{children:e.jsx(p,{children:e.jsxs(u,{children:[e.jsxs(m,{children:["Transforming your"," ",e.jsxs(f,{children:["body",a]})," ","shape with Power Pulse"]}),e.jsxs(j,{children:[e.jsx(t,{children:e.jsx(w,{to:"/signUp",children:"Sign Up"})}),e.jsx(t,{children:e.jsx(k,{to:"/signIn",children:"Sign In"})}),e.jsx(t,{children:e.jsx(y,{})})]})]})})})})};export{T as default};
