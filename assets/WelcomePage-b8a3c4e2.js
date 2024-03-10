import{u as r,j as e,i as a,a as c,r as l,G as h}from"./index-bb9b8e75.js";import{H as d,M as g,a as p,T as x,b as u,I as m,L as f,c as t,S as j,d as w}from"./WelcomePage.styled-d29538fe.js";import"./hero-desktop-2x-c0317d06.js";const S=r.button`
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
`,k=r.svg`
  /* margin-left: 5px; */
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    /* margin-left: 10px; */
    width: 25px;
    height: 25px;
  }
`,I=()=>{const n=()=>{window.location.assign("https://backend-power-pulse-7.onrender.com/api/users/googleAuth")};return e.jsxs(S,{type:"button",onClick:n,children:["Sign In with",e.jsx(k,{children:e.jsx("use",{href:`${a}#google`})})]})},C=()=>{const n=c(),i=window.location,s=new URLSearchParams(i.search).get("accesstoken"),o=new URLSearchParams(i.search).get("refreshtoken");return console.log(s,o),l.useEffect(()=>{(async()=>{s&&o&&n(h({accessToken:s,refreshToken:o}))})()},[n,s,o]),e.jsx(d,{children:e.jsx(g,{children:e.jsx(p,{children:e.jsxs(x,{children:[e.jsx(u,{children:"Transforming your body shape with Power Pulse"}),e.jsx(m,{children:e.jsx("use",{href:`${a}#slogan-line`})}),e.jsxs(f,{children:[e.jsx(t,{children:e.jsx(j,{to:"/signUp",children:"Sign Up"})}),e.jsx(t,{children:e.jsx(w,{to:"/signIn",children:"Sign In"})}),e.jsx(t,{children:e.jsx(I,{})})]})]})})})})};export{C as default};
