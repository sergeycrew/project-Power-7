import{u as f,L as o,j as t}from"./index-5caca344.js";const a=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,x=f.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;f.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const e=f(o)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: block;
  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`,n=()=>t.jsxs(a,{children:[t.jsx(x,{children:"Sign In"}),t.jsx(e,{to:"/signUp",children:"Sign Up"})]});export{n as default};
