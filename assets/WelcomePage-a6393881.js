import{u as r,j as e,s as c,a as l,r as h,G as d}from"./index-82489c8a.js";import{H as g,M as p,a as x,T as m,b as u,L as f,c as t,S as j,d as w,I as k}from"./WelcomePage.styled-2d013525.js";import"./hero-desktop-2x-c0317d06.js";const S=r.button`
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
`,I=r.svg`
  /* margin-left: 5px; */
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    /* margin-left: 10px; */
    width: 25px;
    height: 25px;
  }
`,b=()=>{const n=()=>{window.location.assign("https://backend-power-pulse-7.onrender.com/api/users/googleAuth")};return e.jsxs(S,{type:"button",onClick:n,children:["Sign In with",e.jsx(I,{children:e.jsx("use",{href:`${c}#google`})})]})},T=()=>{const n=l(),i=window.location,s=new URLSearchParams(i.search).get("accesstoken"),o=new URLSearchParams(i.search).get("refreshtoken");console.log(s,o),h.useEffect(()=>{(async()=>{s&&o&&n(d({tokens:{accessToken:s,refreshToken:o}}))})()},[n,s,o]);const a=e.jsx(k,{children:e.jsx("use",{href:`${c}#slogan-line`})});return e.jsx(g,{children:e.jsx(p,{children:e.jsx(x,{children:e.jsxs(m,{children:[e.jsx(u,{children:"Transforming your body shape with Power Pulse"}),a,e.jsxs(f,{children:[e.jsx(t,{children:e.jsx(j,{to:"/signUp",children:"Sign Up"})}),e.jsx(t,{children:e.jsx(w,{to:"/signIn",children:"Sign In"})}),e.jsx(t,{children:e.jsx(b,{})})]})]})})})})};export{T as default};
