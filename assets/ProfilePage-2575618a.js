import{u as i,j as e,a as b,c as w,s as C,d as E,r as p,i as y,e as M,f as P,g as H,C as G,h as Y}from"./index-de2024d6.js";import{i as j}from"./sprite-190cdd2e.js";import{c as J,a as K,b as g,d as Q}from"./index.esm-ba3fba07.js";import{b as X,a as x}from"./formik.esm-693e48b8.js";import{I as u,S as Z,C as _,a as k,b as D,F as m,W as R,c as v,d as ee,e as te,f as ie,B as ae,g as se}from"./UserForm.styled-b1026961.js";import{W as ne,I as re,i as le,C as de}from"./react-datepicker-cssmodules-ea2aa174.js";const oe=i.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: 'RobotoRegular';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  
`,ce=i.div`
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
`,he=i.svg`
  width: 16px;
  height: 16px;
  /* fill: ${t=>t.theme.colors.orangeLightColor};
  stroke: ${t=>t.theme.colors.orangeLightColor}; */
`,pe=i.p`
 color: ${t=>t.theme.colors.whiteColor};
  font-family: 'RobotoBold';
  font-size: 18px;
  line-height: 1.3;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,xe=i.div`
display: flex;
align-items: center;
gap: 8px;`,q=({iconId:t,text:a,value:r=0,amoutName:l})=>e.jsxs(ce,{children:[e.jsxs(xe,{children:[e.jsx(he,{children:e.jsx("use",{href:`${j}#${t}`})}),e.jsx(oe,{children:a})]}),e.jsxs(pe,{children:[Math.round(r)," ",l]})]}),me=i.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,ue=i.div`
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

`,ge=i.img`
border-radius: 100px;
width: 100%;
height: 100%;
`;i.div`
cursor: pointer;`;const ve=i.svg`
width: 61px;
height: 62px;
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,fe=i.svg`
  width: 24px;
  height: 24px;
  position: relative;
  /* top: -13px; */
  left: 0px;

  

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    /* top: -17.5px; */
  }`,ye=i.label`
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
  `,je=i.p`
margin-top: 32px;
  color: ${t=>t.theme.colors.whiteColor};
  font-family: 'RobotoRegular';
  @media screen and (min-width: 768px) {
    
    font-size: 24px;
    line-height: 28px;
  }
  
`,be=i.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
  
`,we=()=>{const t=b(),a=w(C),r=e.jsx(ve,{children:e.jsx("use",{href:`${j}#icon-user`})}),l=e.jsx(ge,{src:a.avatarUrl,alt:"Avatar"}),d=a.avatarUrl?l:r,o=h=>{t(E(h.target.files[0]))};return e.jsxs(me,{children:[e.jsx(ue,{children:d}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("input",{type:"file",accept:".jpg, .jpeg",id:"fileInput",name:"fileInput",style:{display:"none"},onChange:o}),e.jsx(ye,{htmlFor:"fileInput",style:{display:a.verify?"inline-block":"none"},children:e.jsx(fe,{children:e.jsx("use",{href:`${j}#icon-add-avatar`})})})]}),e.jsx(je,{children:a.name?a.name:"Name"}),e.jsx(be,{children:"User"})]})},Ce=({selectedDate:t,setSelectedDate:a})=>{const r=c=>{a(c),h()},[l,d]=p.useState(!1),o=()=>{d(c=>!c)},h=()=>{d(!1)};return e.jsxs(ne,{children:[e.jsx("label",{htmlFor:"datePicker",children:"Date of birth"}),e.jsx(re,{width:"18",height:"18",onClick:o,cursor:"pointer",children:e.jsx("use",{href:l?`${y}#icon-calendar`:`${y}#icon-calendar-white`})}),e.jsx(le,{selected:t,onChange:r,customInput:e.jsx(u,{style:{cursor:"text"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:c=>c.substring(0,2),open:l,onClickOutside:h,cursor:"pointer"}),e.jsx(de,{})]})},f=({id:t,name:a,value:r,checked:l,label:d,onChange:o})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:t,name:a,value:r,checked:l,onChange:o}),e.jsx("label",{className:"radio-label",htmlFor:t,children:d})]}),Se=()=>{const t=b(),a=w(C);console.log(a);const r=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],l=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],d=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],o=J().shape({name:K().required(),height:g().positive("Height must be positive").min(150,"Should be at least 1,5m").required("Height is required"),currentWeight:g().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Current weight is required"),desiredWeight:g().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Desired weight is required"),birthday:Q().required("Birthday is required")}),h={name:a.name||"Name",height:a.height||"",currentWeight:a.currentWeight||"",desiredWeight:a.desiredWeight||"",birthday:a.birthday||"2005-01-01",blood:(a.blood??"1").toString()||"1",sex:a.sex||"male",levelActivity:(a.levelActivity??"1").toString()||"1"},c=n=>{t(M(n)),S(!1)},[A,S]=p.useState(!1),W=n=>{S(!0)},U=()=>{N();const n=a.email;console.log({email:n})},[O,V]=p.useState(null),[$,F]=p.useState(!1),[B,I]=p.useState(null),[L,T]=p.useState(!1),N=()=>{F(!0),I(60),V(setInterval(()=>{I(n=>n===1?(clearInterval(O),F(!1),T(!0),null):n-1)},1e3))},z=$?`Try again in ${B}`:L?"Send again":"Verify";return e.jsx(X,{initialValues:h,validationSchema:o,onSubmit:c,validateOnChange:!0,children:n=>e.jsxs(Z,{onChange:W,children:[e.jsxs(_,{children:[e.jsxs("div",{style:{width:"100%"},children:[e.jsx(k,{children:"Name"}),e.jsx(x,{name:"name",type:"text",placeholder:"Your name",as:D,required:!0}),e.jsx(m,{name:"name",component:"span"})]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx(k,{children:"Email"}),e.jsx(D,{type:"text",name:"email",defaultValue:a.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0})]})]}),e.jsxs(R,{children:[e.jsxs(v,{children:[e.jsx(x,{type:"number",name:"height",id:"height",placeholder:"",as:u,required:!0}),e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx(m,{name:"height",component:"span"})]}),e.jsx(ee,{children:e.jsxs(v,{children:[e.jsx(x,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:u,required:!0}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(m,{name:"currentWeight",component:"span"})]})})]}),e.jsxs(R,{children:[e.jsxs(v,{children:[e.jsx(x,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:u,required:!0}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(m,{name:"desiredWeight",component:"span"})]}),e.jsx(Ce,{selectedDate:n.values.birthday,setSelectedDate:s=>{W(),n.setFieldValue("birthday",s.toISOString())}})]}),e.jsxs(te,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsx("div",{style:{display:"flex",marginRight:"20px"},children:r.map(s=>e.jsx(f,{id:s.id,name:"blood",value:s.value,checked:n.values.blood===s.value,label:s.label,onChange:()=>n.setFieldValue("blood",s.value)},s.id))}),e.jsx("div",{style:{display:"flex"},children:l.map(s=>e.jsx(f,{id:s.id,name:"sex",value:s.value,checked:n.values.sex===s.value,label:s.label,onChange:()=>n.setFieldValue("sex",s.value)},s.id))})]}),e.jsx(ie,{children:d.map(s=>e.jsx(f,{id:s.id,name:"levelActivity",value:s.value,checked:n.values.levelActivity===s.value,label:s.label,onChange:()=>n.setFieldValue("levelActivity",s.value)},s.id))})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start"},children:[e.jsx(ae,{type:"submit",disabled:!A||Object.keys(n.errors).length>0,children:"Save"}),e.jsx(se,{type:"submit",disabled:$,onClick:U,style:{display:a.verify?"none":"inline-block"},children:z})]})]})})},We=i.p`
  /* color: ${t=>t.theme.colors.whiteColor}; */
  color: ${t=>t.theme.colors.accentColor};
  font-family: 'RobotoRegular';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  
`,$e=i.div`
  display: flex;
  /* justify-content: center; */
  /* @media screen and (min-width: 768px) and (max-width: 1439px) {
   max-width: 439px;
  } */
`,Fe=i.svg`
  width: 24px;
  height: 24px;
`,Ie=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 24px;
  height: 24px;
  background-color: var(--beige-color);
`,ke=i.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;

  @media screen and (max-width: 768px)  {
   max-width: 335px;
  } 

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`,De=()=>e.jsx($e,{children:e.jsxs(ke,{children:[e.jsx(Ie,{children:e.jsx(Fe,{children:e.jsx("use",{href:`${y}#exclamation`})})}),e.jsx(We,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),Re=i.div`
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
    /* margin-left: 96px;
    margin-right: 96px; */
  }
`,qe=i.h2`
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
`,Ae=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`,Ue=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Oe=i.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;
  }
`,Ve=i.div`
margin-top: 32px;
margin-left: auto;
/* margin-left: auto;
margin-top: 32px;
justify-content: center;
/*  */
/* width: 70px;
  height: 20px; */

  @media screen and (min-width: 768px) {
    width: 78px;
    height: 24px;
  } 
`,Be=i.div`

 @media screen and (min-width: 768px) and (max-width: 1439px) {margin: auto;
    width: 439px;
  }
  /* @media screen and (min-width: 1440px) {
   margin-left: 50px;
  } */
`,Pe=()=>{const t=w(C);b();const{isLoggedIn:a,isLoading:r}=P();return r?e.jsx(H,{}):e.jsx(G,{children:e.jsxs(Re,{children:[e.jsx(qe,{children:"Profile Setings"}),e.jsxs(Ue,{children:[e.jsxs(Be,{children:[e.jsx(we,{}),e.jsxs(Ae,{children:[e.jsx(q,{iconId:"icon-fork-knife",text:"Daily calorie intake",value:t.bmr}),e.jsx(q,{iconId:"icon-dumbbell",text:"Daily physical activity",value:t.timeSport,amoutName:"min"})]}),e.jsx(De,{}),e.jsx(Ve,{children:e.jsx(Y,{})})]}),e.jsx(Oe,{children:e.jsx(Se,{})})]})]})})};export{Pe as default};
