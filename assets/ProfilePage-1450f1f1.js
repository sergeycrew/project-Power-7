import{u as i,j as e,a as R,b as W,m as S,r as h,i as u,n as z,o as B,p as L,q as N,C as T,t as E}from"./index-0c3acf8a.js";import{c as M,a as P,b as j,d as H}from"./index.esm-676d45d0.js";import{b as G,a as b}from"./formik.esm-12f7b185.js";import{I as y,S as Y,C as J,W as $,a as F,F as f,b as I,c as w,d as K,e as Q,f as X,B as Z}from"./UserForm.styled-c067e25a.js";import{W as _,I as ee,i as te,C as ie}from"./react-datepicker-cssmodules-85dd389e.js";import"./floating-ui.dom-9d61e2db.js";const ae=i.p`
color: white;
  /* color: rgba(239, 237, 232, 0.8); */
  font-family: 'RobotoRegular';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,se=i.div`
  display: flex;
  flex-direction: column;
  max-width: 165px;
  width: 100%;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  gap: 8px;
  /* flex-shrink: 0; */
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: ${t=>t.theme.colors.orangeColor};

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 209px;
    height: 108px;
    padding: 14px 18px;
    align-items: flex-start;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 214px;
    height: 108px;
    padding: 14px 18px;
    align-items: flex-start;
    gap: 32px;
  }
`,ne=i.svg`
  width: 16px;
  height: 16px;
  /* fill: ${t=>t.theme.colors.orangeLightColor};
  stroke: ${t=>t.theme.colors.orangeLightColor}; */
`,re=i.p`
  color: ${t=>t.theme.colors.whiteColor};

  font-family: 'RobotoBold';
  font-size: 18px;
  line-height: 1.3;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,le=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,de="/project-Power-7/assets/sprite-478ebabe.svg",k=({iconId:t,text:a,value:l=0,amoutName:r})=>e.jsxs(se,{children:[e.jsxs(le,{children:[e.jsx(ne,{children:e.jsx("use",{href:`${de}#${t}`})}),e.jsx(ae,{children:a})]}),e.jsxs(re,{children:[Math.round(l)," ",r]})]}),oe=i.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,pe=i.div`
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
`,ce=i.img`
  border-radius: 100px;
  width: 100%;
  height: 100%;
`;i.div`
  cursor: pointer;
`;const he=i.svg`
  width: 40px;
  height: 41px;
  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`,xe=i.svg`
  width: 24px;
  height: 24px;
  position: relative;
  /* top: -13px; */
  left: 0px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    /* top: -17.5px; */
  }
`,me=i.label`
  cursor: pointer;
  position: absolute;
  top: -13px;
  left: -12px;
  /* right: -17px; */

  @media screen and (min-width: 768px) {
    left: -14.5px;
    height: 32px;
    top: -17.5px;
  }
`,ue=i.p`
  margin-top: 32px;
  color: ${t=>t.theme.colors.whiteColor};
  font-family: 'RobotoRegular';
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`,ge=i.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`,ve=i.button`
  margin-top: 2px;
  /* color: ${t=>t.theme.colors.successtColor}; */
  position: relative;
  
  /* color: ${t=>t.theme.colors.errorColor}; */
  padding: 0;
  font-family: 'RobotoRegular';
  font-size: 16px;
  line-height: 18px;
/* font-weight: 500; */
  background: 0;

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    /* border-bottom: 2px solid orange; */
    /* box-shadow: inset 0 -2px #d80027; */
    box-shadow: inset 0 -2px tomato;
  }

  &:disabled {
    /* color: rgba(239, 237, 232, 0.5); */

    cursor: default;
    /* display: none; */
  }
  @media screen and (min-width: 768px) {
    margin-top: 2px;
    /* padding: 16px 50px; */
  }
`;i.svg`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 3px;
  left: 55px;
  /* right: 3px; */
  /* @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    top: 3px;
  } */
`;i.svg`
  width: 13px;
  height: 13px;
  position: absolute;
  top: 2px;
  left: 40px;
  /* right: 3px; */
  /* @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    top: 3px;
  } */
`;const be=()=>{const t=R(),a=W(S),l=e.jsx(he,{children:e.jsx("use",{href:`${u}#user`})}),r=e.jsx(ce,{src:a.avatarUrl,alt:"Avatar"}),o=a.avatarUrl?r:l,p=v=>{t(z(v.target.files[0]))},[c,d]=h.useState(null),[x,m]=h.useState(!1),[g,n]=h.useState(null),[s,q]=h.useState(!1),D=x?`Try again in ${g}`:s?"Send again":"Verify",A="Verified",U=a.verify?A:D,V=()=>{clearInterval(c),m(!0),n(20),d(setInterval(()=>{n(v=>v===1?(clearInterval(c),m(!1),q(!0),null):v-1)},1e3))},O=()=>{V(),a.email};return e.jsxs(oe,{children:[e.jsx(pe,{children:o}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("input",{type:"file",accept:".jpg, .jpeg",id:"fileInput",name:"fileInput",style:{display:"none"},onChange:p}),e.jsx(me,{htmlFor:"fileInput",style:{display:a.verify?"none":"inline-block"},children:e.jsx(xe,{children:e.jsx("use",{href:`${u}#add`})})})]}),e.jsx(ue,{children:a.name?a.name:"Name"}),e.jsx(ge,{children:"User"}),e.jsx(ve,{type:"submit",disabled:x||a.verify,onClick:O,style:{color:a.verify?"#3cbf61":x?"rgba(239, 237, 232, 0.9)":"tomato"},children:U})]})},fe=({selectedDate:t,setSelectedDate:a})=>{const l=d=>{a(d),c()},[r,o]=h.useState(!1),p=()=>{o(d=>!d)},c=()=>{o(!1)};return e.jsxs(_,{children:[e.jsx("label",{htmlFor:"datePicker",children:"Date of birth"}),e.jsx(ee,{width:"18",height:"18",onClick:p,cursor:"pointer",children:e.jsx("use",{href:r?`${u}#icon-calendar`:`${u}#icon-calendar-white`})}),e.jsx(te,{selected:t,onChange:l,customInput:e.jsx(y,{style:{cursor:"text"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:d=>d.substring(0,2),open:r,onClickOutside:c,cursor:"pointer"}),e.jsx(ie,{})]})},C=({id:t,name:a,value:l,checked:r,label:o,onChange:p})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:t,name:a,value:l,checked:r,onChange:p}),e.jsx("label",{className:"radio-label",htmlFor:t,children:o})]}),ye=()=>{const t=R(),a=W(S);console.log(a);const l=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],r=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],o=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],p=M().shape({name:P().required(),height:j().positive("Height must be positive").min(150,"Should be at least 1,5m").required("Height is required"),currentWeight:j().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Current weight is required"),desiredWeight:j().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Desired weight is required"),birthday:H().required("Birthday is required")}),c={name:a.name||"Name",height:a.height||"",currentWeight:a.currentWeight||"",desiredWeight:a.desiredWeight||"",birthday:a.birthday||"2005-01-01",blood:(a.blood??"1").toString()||"1",sex:a.sex||"male",levelActivity:(a.levelActivity??"1").toString()||"1"},d=n=>{t(B(n)),m(!1)},[x,m]=h.useState(!1),g=n=>{m(!0)};return e.jsx(G,{initialValues:c,validationSchema:p,onSubmit:d,validateOnChange:!0,children:n=>e.jsxs(Y,{onChange:g,children:[e.jsxs(J,{children:[e.jsxs($,{style:{width:"100%"},children:[e.jsx(b,{name:"name",type:"text",placeholder:"Your name",as:F,required:!0}),e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx(f,{name:"name",component:"span"})]}),e.jsxs($,{style:{width:"100%"},children:[e.jsx(F,{type:"text",name:"email",defaultValue:a.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0}),e.jsx("label",{htmlFor:"email",children:"Email"})]})]}),e.jsxs(I,{children:[e.jsxs(w,{children:[e.jsx(b,{type:"number",name:"height",id:"height",placeholder:"",as:y,required:!0}),e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx(f,{name:"height",component:"span"})]}),e.jsx(K,{children:e.jsxs(w,{children:[e.jsx(b,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:y,required:!0}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(f,{name:"currentWeight",component:"span"})]})})]}),e.jsxs(I,{children:[e.jsxs(w,{children:[e.jsx(b,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:y,required:!0}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(f,{name:"desiredWeight",component:"span"})]}),e.jsx(fe,{selectedDate:n.values.birthday,setSelectedDate:s=>{g(),n.setFieldValue("birthday",s.toISOString())}})]}),e.jsxs(Q,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsx("div",{style:{display:"flex",marginRight:"20px"},children:l.map(s=>e.jsx(C,{id:s.id,name:"blood",value:s.value,checked:n.values.blood===s.value,label:s.label,onChange:()=>n.setFieldValue("blood",s.value)},s.id))}),e.jsx("div",{style:{display:"flex"},children:r.map(s=>e.jsx(C,{id:s.id,name:"sex",value:s.value,checked:n.values.sex===s.value,label:s.label,onChange:()=>n.setFieldValue("sex",s.value)},s.id))})]}),e.jsx(X,{children:o.map(s=>e.jsx(C,{id:s.id,name:"levelActivity",value:s.value,checked:n.values.levelActivity===s.value,label:s.label,onChange:()=>n.setFieldValue("levelActivity",s.value)},s.id))})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-start"},children:e.jsx(Z,{type:"submit",disabled:!x||Object.keys(n.errors).length>0,children:"Save"})})]})})},je=i.p`
  color: gray;
  /* color: ${t=>t.theme.colors.accentColor}; */
  font-family: 'RobotoRegular';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`,we=i.div`
  display: flex;
  /* justify-content: center; */
  /* @media screen and (min-width: 768px) and (max-width: 1439px) {
   max-width: 439px;
  } */
`,Ce=i.svg`
  width: 24px;
  height: 24px;
`,We=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 24px;
  height: 24px;
  background-color: var(--beige-color);
`,Se=i.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`,$e=()=>e.jsx(we,{children:e.jsxs(Se,{children:[e.jsx(We,{children:e.jsx(Ce,{children:e.jsx("use",{href:`${u}#exclamation`})})}),e.jsx(je,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),Fe=i.div`
 /* margin-left: 20px; */
  /* margin-right: 20px; */
  /* padding-top: 40px; */

  /* @media screen and (min-width: 768px) {
    padding-top: 72px;
  } */

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    /* margin-left: 32px; */
    /* margin-right: 32px; */
  }

  @media screen and (min-width: 1440px) {
   /* padding-bottom: 36px; */
  }
`,Ie=i.h2`
   color: #efede8;
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 28px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    padding-top: 72px;
  }
`,ke=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`,Re=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,qe=i.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;
  }
`,De=i.div`
margin-top: 32px;
margin-left: auto;
/* margin-left: auto;
margin-top: 32px;
justify-content: center;
/*  */
width: 70px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 78px;
    height: 24px;
  } 
`,Ae=i.div`

 @media screen and (min-width: 768px) and (max-width: 1439px) {margin: auto;
    width: 439px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 36px;
  }
`,Ne=()=>{const t=W(S),{isLoading:a}=L();return a?e.jsx(N,{}):e.jsx(T,{children:e.jsxs(Fe,{children:[e.jsx(Ie,{children:"Profile Setings"}),e.jsxs(Re,{children:[e.jsxs(Ae,{children:[e.jsx(be,{}),e.jsxs(ke,{children:[e.jsx(k,{iconId:"icon-fork-knife",text:"Daily calorie intake",value:t.bmr}),e.jsx(k,{iconId:"icon-dumbbell",text:"Daily physical activity",value:t.timeSport,amoutName:"min"})]}),e.jsx($e,{}),e.jsx(De,{children:e.jsx(E,{})})]}),e.jsx(qe,{children:e.jsx(ye,{})})]})]})})};export{Ne as default};
