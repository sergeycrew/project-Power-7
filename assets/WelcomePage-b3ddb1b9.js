import{u as i,j as e,i as a,a as l,r as h,s as d,b as x}from"./index-025e3954.js";import{H as g,M as p,a as m,T as u,b as f,I as j,L as w,c as t,S as k,d as S}from"./WelcomePage.styled-e27f5ffd.js";import"./hero-desktop-2x-c0317d06.js";const b=i.button`

width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid ${n=>n.theme.colors.accentColor};
  border-radius: ${n=>n.theme.radii.ld};
  padding: 7px 10px;

  font-weight: 500;
  font-size: 10px;
  line-height: 1.12;
  color: ${n=>n.theme.colors.whiteColor};
  transition: all 0.3s;

  
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    border-color: ${n=>n.theme.colors.orangeColor};
  }
  @media screen and (min-width: 768px) {
    padding: 15px 25px;
    font-size: 16px;
    line-height: 1.2;
  }
`,y=i.svg`
margin-left: 5px;
width: 15px;
height: 15px;
@media screen and (min-width: 768px) {
margin-left: 10px;
width: 25px;
height: 25px;
  }
`,I=()=>{const n=()=>{window.location.assign("https://backend-power-pulse-7.onrender.com/api/users/googleAuth")};return e.jsxs(b,{type:"button",onClick:n,children:["Sign In with",e.jsx(y,{children:e.jsx("use",{href:`${a}#google`})})]})},B=()=>{const n=l(),r=window.location,s=new URLSearchParams(r.search).get("accesstoken"),o=new URLSearchParams(r.search).get("refreshtoken");return console.log(s,o),h.useEffect(()=>{(async()=>{if(s&&o){n(d(o));try{x.defaults.headers.common.Authorization=`Bearer ${s}`}catch(c){console.error(c)}}})()},[n,s,o]),e.jsx(g,{children:e.jsx(p,{children:e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(f,{children:"Transforming your body shape with Power Pulse"}),e.jsx(j,{children:e.jsx("use",{href:`${a}#slogan-line`})}),e.jsxs(w,{children:[e.jsx(t,{children:e.jsx(k,{to:"/signUp",children:"Sign Up"})}),e.jsx(t,{children:e.jsx(S,{to:"/signIn",children:"Sign In"})}),e.jsx(t,{children:e.jsx(I,{})})]})]})})})})};export{B as default};
