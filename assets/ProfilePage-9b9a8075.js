import{u as i,j as e,a as W,c as $,d as F,r as d,e as V,s as C,f as E,h as L,i as T,C as B,k as N}from"./index-5a3dae94.js";import{i as S}from"./sprite-71e31d01.js";import{c as z,a as M,b as j,d as P}from"./index.esm-48d5dd48.js";import{b as H,a as v}from"./formik.esm-4b69aaa3.js";import{I as y,S as G,C as Y,a as I,b as k,F as f,W as D,c as b,d as J,e as K,f as Q,B as X}from"./UserForm.styled-235149c0.js";import{W as Z,I as _,i as ee,C as te}from"./react-datepicker-cssmodules-86ad6b5a.js";import"./floating-ui.dom-9d61e2db.js";const ie=i.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: 'RobotoRegular';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  
`,ae=i.div`
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
`,se=i.svg`
  width: 16px;
  height: 16px;
  /* fill: ${t=>t.theme.colors.orangeLightColor};
  stroke: ${t=>t.theme.colors.orangeLightColor}; */
`,ne=i.p`
 color: ${t=>t.theme.colors.whiteColor};
  font-family: 'RobotoBold';
  font-size: 18px;
  line-height: 1.3;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,re=i.div`
display: flex;
align-items: center;
gap: 8px;`,R=({iconId:t,text:a,value:r=0,amoutName:l})=>e.jsxs(ae,{children:[e.jsxs(re,{children:[e.jsx(se,{children:e.jsx("use",{href:`${S}#${t}`})}),e.jsx(ie,{children:a})]}),e.jsxs(ne,{children:[Math.round(r)," ",l]})]}),le=i.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,de=i.div`
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

`,oe=i.img`
border-radius: 100px;
width: 100%;
height: 100%;
`;i.div`
cursor: pointer;`;const pe=i.svg`
width: 61px;
height: 62px;
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,ce=i.svg`
  width: 24px;
  height: 24px;
  position: relative;
  /* top: -13px; */
  left: 0px;

  

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    /* top: -17.5px; */
  }`,he=i.label`
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
  `,xe=i.p`
margin-top: 32px;
  color: ${t=>t.theme.colors.whiteColor};
  font-family: 'RobotoRegular';
  @media screen and (min-width: 768px) {
    
    font-size: 24px;
    line-height: 28px;
  }
  
`,me=i.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
  
`,ue=i.button`
  margin: 40px 0px 44px 20px;
  /* margin-left: 10px ; */
  padding: 0;
  border-radius: 12px;
  background: ${t=>t.theme.colors.orangeColor};
  color: #EFEDE8;
  
  /* .hidden {
  display: none;
} */

  &:disabled{
    color: rgba(239, 237, 232, 0.6);
    cursor: default;
    display: none;
  }
  @media screen and (min-width: 768px) {
    margin: 40px 0px 54px 20px;
    padding: 16px 50px;
  }
`,ge=()=>{const t=W(),a=$(F),r=e.jsx(pe,{children:e.jsx("use",{href:`${S}#icon-user`})}),l=e.jsx(oe,{src:a.avatarUrl,alt:"Avatar"}),p=a.avatarUrl?l:r,c=x=>{t(V(x.target.files[0]))},[h,o]=d.useState(null),[u,m]=d.useState(!1),[g,n]=d.useState(null),[s,q]=d.useState(!1),A=u?`Try again in ${g}`:s?"Send again":"Verify",U=()=>{m(!0),n(60),o(setInterval(()=>{n(x=>x===1?(clearInterval(h),m(!1),q(!0),null):x-1)},1e3))},O=()=>{U();const x=a.email;console.log({email:x})};return e.jsxs(le,{children:[e.jsx(de,{children:p}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("input",{type:"file",accept:".jpg, .jpeg",id:"fileInput",name:"fileInput",style:{display:"none"},onChange:c}),e.jsx(he,{htmlFor:"fileInput",style:{display:a.verify?"none":"inline-block"},children:e.jsx(ce,{children:e.jsx("use",{href:`${S}#icon-add-avatar`})})})]}),e.jsx(xe,{children:a.name?a.name:"Name"}),e.jsx(me,{children:"User"}),e.jsx(ue,{type:"submit",disabled:u,onClick:O,style:{display:a.verify?"none":"inline-block"},children:A})]})},ve=({selectedDate:t,setSelectedDate:a})=>{const r=o=>{a(o),h()},[l,p]=d.useState(!1),c=()=>{p(o=>!o)},h=()=>{p(!1)};return e.jsxs(Z,{children:[e.jsx("label",{htmlFor:"datePicker",children:"Date of birth"}),e.jsx(_,{width:"18",height:"18",onClick:c,cursor:"pointer",children:e.jsx("use",{href:l?`${C}#icon-calendar`:`${C}#icon-calendar-white`})}),e.jsx(ee,{selected:t,onChange:r,customInput:e.jsx(y,{style:{cursor:"text"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:o=>o.substring(0,2),open:l,onClickOutside:h,cursor:"pointer"}),e.jsx(te,{})]})},w=({id:t,name:a,value:r,checked:l,label:p,onChange:c})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:t,name:a,value:r,checked:l,onChange:c}),e.jsx("label",{className:"radio-label",htmlFor:t,children:p})]}),fe=()=>{const t=W(),a=$(F);console.log(a);const r=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],l=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],p=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],c=z().shape({name:M().required(),height:j().positive("Height must be positive").min(150,"Should be at least 1,5m").required("Height is required"),currentWeight:j().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Current weight is required"),desiredWeight:j().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Desired weight is required"),birthday:P().required("Birthday is required")}),h={name:a.name||"Name",height:a.height||"",currentWeight:a.currentWeight||"",desiredWeight:a.desiredWeight||"",birthday:a.birthday||"2005-01-01",blood:(a.blood??"1").toString()||"1",sex:a.sex||"male",levelActivity:(a.levelActivity??"1").toString()||"1"},o=n=>{t(E(n)),m(!1)},[u,m]=d.useState(!1),g=n=>{m(!0)};return d.useState(null),d.useState(!1),d.useState(null),d.useState(!1),e.jsx(H,{initialValues:h,validationSchema:c,onSubmit:o,validateOnChange:!0,children:n=>e.jsxs(G,{onChange:g,children:[e.jsxs(Y,{children:[e.jsxs("div",{style:{width:"100%"},children:[e.jsx(I,{children:"Name"}),e.jsx(v,{name:"name",type:"text",placeholder:"Your name",as:k,required:!0}),e.jsx(f,{name:"name",component:"span"})]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx(I,{children:"Email"}),e.jsx(k,{type:"text",name:"email",defaultValue:a.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0})]})]}),e.jsxs(D,{children:[e.jsxs(b,{children:[e.jsx(v,{type:"number",name:"height",id:"height",placeholder:"",as:y,required:!0}),e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx(f,{name:"height",component:"span"})]}),e.jsx(J,{children:e.jsxs(b,{children:[e.jsx(v,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:y,required:!0}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(f,{name:"currentWeight",component:"span"})]})})]}),e.jsxs(D,{children:[e.jsxs(b,{children:[e.jsx(v,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:y,required:!0}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(f,{name:"desiredWeight",component:"span"})]}),e.jsx(ve,{selectedDate:n.values.birthday,setSelectedDate:s=>{g(),n.setFieldValue("birthday",s.toISOString())}})]}),e.jsxs(K,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsx("div",{style:{display:"flex",marginRight:"20px"},children:r.map(s=>e.jsx(w,{id:s.id,name:"blood",value:s.value,checked:n.values.blood===s.value,label:s.label,onChange:()=>n.setFieldValue("blood",s.value)},s.id))}),e.jsx("div",{style:{display:"flex"},children:l.map(s=>e.jsx(w,{id:s.id,name:"sex",value:s.value,checked:n.values.sex===s.value,label:s.label,onChange:()=>n.setFieldValue("sex",s.value)},s.id))})]}),e.jsx(Q,{children:p.map(s=>e.jsx(w,{id:s.id,name:"levelActivity",value:s.value,checked:n.values.levelActivity===s.value,label:s.label,onChange:()=>n.setFieldValue("levelActivity",s.value)},s.id))})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-start"},children:e.jsx(X,{type:"submit",disabled:!u||Object.keys(n.errors).length>0,children:"Save"})})]})})},ye=i.p`
  /* color: ${t=>t.theme.colors.whiteColor}; */
  color: ${t=>t.theme.colors.accentColor};
  font-family: 'RobotoRegular';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  
`,je=i.div`
  display: flex;
  /* justify-content: center; */
  /* @media screen and (min-width: 768px) and (max-width: 1439px) {
   max-width: 439px;
  } */
`,be=i.svg`
  width: 24px;
  height: 24px;
`,we=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 24px;
  height: 24px;
  background-color: var(--beige-color);
`,Ce=i.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;

  @media screen and (max-width: 768px)  {
   max-width: 335px;
  } 

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`,Se=()=>e.jsx(je,{children:e.jsxs(Ce,{children:[e.jsx(we,{children:e.jsx(be,{children:e.jsx("use",{href:`${C}#exclamation`})})}),e.jsx(ye,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),We=i.div`
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
`,$e=i.h2`
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
`,Fe=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`,Ie=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,ke=i.div`
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
/* width: 70px;
  height: 20px; */

  @media screen and (min-width: 768px) {
    width: 78px;
    height: 24px;
  } 
`,Re=i.div`

 @media screen and (min-width: 768px) and (max-width: 1439px) {margin: auto;
    width: 439px;
  }
  /* @media screen and (min-width: 1440px) {
   margin-left: 50px;
  } */
`,Te=()=>{const t=$(F);W();const{isLoggedIn:a,isLoading:r}=L();return r?e.jsx(T,{}):e.jsx(B,{children:e.jsxs(We,{children:[e.jsx($e,{children:"Profile Setings"}),e.jsxs(Ie,{children:[e.jsxs(Re,{children:[e.jsx(ge,{}),e.jsxs(Fe,{children:[e.jsx(R,{iconId:"icon-fork-knife",text:"Daily calorie intake",value:t.bmr}),e.jsx(R,{iconId:"icon-dumbbell",text:"Daily physical activity",value:t.timeSport,amoutName:"min"})]}),e.jsx(Se,{}),e.jsx(De,{children:e.jsx(N,{})})]}),e.jsx(ke,{children:e.jsx(fe,{})})]})]})})};export{Te as default};
