import{u as i,j as e}from"./index-0df8298d.js";import{i as o}from"./sprite-14bf64df.js";import{F as d}from"./formik.esm-b3e05f03.js";const s=i.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: 'RobotoRegular';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  
`,x=i.div`
  display: flex;
  flex-direction: column;
  width: 165px;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: ${t=>t.theme.colors.orangeColor};

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 209px;
    height: 108px;
    padding: 14px 18px;
    align-items: flex-start;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 214px;
    height: 108px;
    padding: 14px 18px;
    align-items: flex-start;
    gap: 32px;
  }
`,p=i.svg`
  width: 16px;
  height: 16px;
  fill: ${t=>t.theme.colors.orangeLightColor};
  stroke: ${t=>t.theme.colors.orangeLightColor};
`,l=i.p`
 color: ${t=>t.theme.colors.whiteColor};
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 1.3;
  margin-top: auto;
`,h=i.div`
display: flex;
align-items: center;
gap: 8px;`,n=({iconId:t,text:r,value:a})=>e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(p,{children:e.jsx("use",{href:`${o}#${t}`})}),e.jsx(s,{children:r})]}),e.jsx(l,{children:a})]}),c=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,g=i.div`
border-radius: 100px;
border: 1px solid ${t=>t.theme.colors.hoverColor};
width: 90px;
height: 90px;
display: flex;
  justify-content: center;
  align-items: center;

@media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }

`;i.img`
border-radius: 100px;
`;i.div`
cursor: pointer;`;const m=i.svg`
width: 61px;
height: 62px;
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,f=i.svg`
  width: 24px;
  height: 24px;
  position: relative;
  /* top: -13px; */
  left: 0px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    /* top: -17.5px; */
  }`,u=i.label`
  cursor: pointer;
    position: relative;
  top: -13px;
  left: 0px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    top: -17.5px;
  }
  `,b=i.p`
  color: ${t=>t.theme.colors.whiteColor};
  font-family: 'RobotoRegular';
  @media screen and (min-width: 768px) {
    
    font-size: 24px;
    line-height: 28px;
  }
  
`,w=i.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
  
`,j=()=>e.jsxs(c,{children:[e.jsx(g,{children:e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-user`})})}),e.jsx("input",{type:"file",id:"fileInput",name:"fileInput",style:{display:"none"}}),e.jsx(u,{htmlFor:"fileInput",children:e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-add-avatar`})})}),e.jsx(b,{children:"Bon"}),e.jsx(w,{children:"User"})]}),v=i.p`
  /* color: ${t=>t.theme.colors.whiteColor}; */
  color: rgba(239, 237, 232, 0.3);
  font-family: 'RobotoRegular';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  
`,y=i.div`
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 96px;
    margin-right: 96px;
  }
`,$=i.svg`
  width: 24px;
  height: 24px;
  /* fill: ${t=>t.theme.colors.orangeLightColor}; */
  /* stroke: ${t=>t.theme.colors.orangeLightColor}; */
`,C=()=>e.jsxs(y,{children:[e.jsx($,{children:e.jsx("use",{href:`${o}#icon-exclamation`})}),e.jsx(v,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]});i(d)`
  display: flex;
  flex-direction: column;
  width: 300px;
  outline: 1px solid grey;
  border-radius: 20px;
  padding: 10px;
  background-color: black;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: larger;
    color: #e22b2b;
  }
  input {
    margin-top: 6px;
    border-radius: 4px;
  }
  button {
    width: 100px;
    cursor: pointer;
    background-color: aqua;
    background-color: black;
    color: aqua;
    color: red;
    border-radius: 5px;
    border: 1px solid aqua;
    &:hover {
      background-color: aqua;
      transform: scale(1.1);
    }
  }
`;const k=i.div`
    width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,R=i.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;i.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const S=()=>e.jsxs(k,{children:[e.jsx(R,{children:"Profile Setings"}),e.jsx(j,{}),e.jsx(n,{iconId:"icon-fork-knife",text:"Daily calorie intake",value:"100"}),e.jsx(n,{iconId:"icon-dumbbell",text:"Daily physical activity",value:"0"}),e.jsx(C,{})]});export{S as default};
