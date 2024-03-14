import{u as t,j as e,i as m,a as q,b as W,m as S,r as x,n as B,o as T,p as z,q as N,t as E,C as L,v as M}from"./index-06073149.js";import{c as P,a as H,b as j,d as G}from"./index.esm-0dadba0e.js";import{b as Y,a as b}from"./formik.esm-772a2b66.js";import{I as f,S as J,C as K,W as $,a as F,F as y,b as I,c as w,d as Q,e as X,R as Z,f as _,B as ee}from"./UserForm.styled-47ea640b.js";import{W as te,I as ie,i as ae,C as se}from"./react-datepicker-cssmodules-5def2b9d.js";import"./floating-ui.dom-9d61e2db.js";const ne=t.p`
color: white;

  font-family: 'RobotoRegular';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,re=t.div`
  display: flex;
  flex-direction: column;
  max-width: 165px;
  width: 100%;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: ${i=>i.theme.colors.orangeColor};

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
`,le=t.svg`
  width: 20px;
  height: 20px;

`,de=t.p`
  color: ${i=>i.theme.colors.whiteColor};

  font-family: 'RobotoBold';
  font-size: 18px;
  line-height: 1.3;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,oe=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,R=({iconId:i,text:a,value:l=0,amoutName:r})=>e.jsxs(re,{children:[e.jsxs(oe,{children:[e.jsx(le,{children:e.jsx("use",{href:`${m}#${i}`})}),e.jsx(ne,{children:a})]}),e.jsxs(de,{children:[Math.round(l)," ",r]})]}),pe=t.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,ce=t.div`
  border-radius: 100px;
  border: 1px solid ${i=>i.theme.colors.hoverColor};
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,he=t.img`
  border-radius: 100px;
  width: 100%;
  height: 100%;
`;t.div`
  cursor: pointer;
`;const xe=t.svg`
  width: 40px;
  height: 41px;
  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`,me=t.svg`
  width: 24px;
  height: 24px;
  position: relative;
  /* top: -13px; */
  /* left: -1px; */

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    /* top: -17.5px; */
  }
`,ue=t.label`
  cursor: pointer;
  position: absolute;
  top: -13px;
  left: -12px;
  

  @media screen and (min-width: 768px) {
    left: -15px;
    height: 32px;
    top: -17.5px;
  }
`,ge=t.p`
  margin-top: 32px;
  color: ${i=>i.theme.colors.whiteColor};
  font-family: 'RobotoRegular';
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`,ve=t.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`,be=t.button`
  margin-top: 2px;
  /* color: ${i=>i.theme.colors.successtColor}; */
  position: relative;
  
  /* color: ${i=>i.theme.colors.errorColor}; */
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
`;t.svg`
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
`;t.svg`
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
`;const ye=()=>{const i=q(),a=W(S),l=e.jsx(xe,{children:e.jsx("use",{href:`${m}#user`})}),r=e.jsx(he,{src:a.avatarUrl,alt:"Avatar"}),o=a.avatarUrl?r:l,p=h=>{i(B(h.target.files[0]))},[c,d]=x.useState(null),[u,g]=x.useState(!1),[v,n]=x.useState(null),[s,D]=x.useState(!1),k=u?`Try again in ${v}`:s?"Send again":"Verify",A="Verified",V=a.verify?A:k,U=()=>{clearInterval(c),g(!0),n(20),d(setInterval(()=>{n(h=>h===1?(clearInterval(c),g(!1),D(!0),null):h-1)},1e3))},O=()=>{U();const h=a.email;i(T({email:h}))};return e.jsxs(pe,{children:[e.jsx(ce,{children:o}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("input",{type:"file",accept:".jpg, .jpeg",id:"fileInput",name:"fileInput",style:{display:"none"},onChange:p}),e.jsx(ue,{htmlFor:"fileInput",style:{display:a.verify?"inline-block":"none"},children:e.jsx(me,{children:e.jsx("use",{href:`${m}#add`})})})]}),e.jsx(ge,{children:a.name?a.name:"Name"}),e.jsx(ve,{children:"User"}),e.jsx(be,{type:"submit",disabled:u||a.verify,onClick:O,style:{color:a.verify?"#3cbf61":u?"rgba(239, 237, 232, 0.9)":"tomato"},children:V})]})},fe=({selectedDate:i,setSelectedDate:a})=>{const l=d=>{a(d),c()},[r,o]=x.useState(!1),p=()=>{o(d=>!d)},c=()=>{o(!1)};return e.jsxs(te,{children:[e.jsx("label",{htmlFor:"datePicker",children:"Date of birth"}),e.jsx(ie,{width:"18",height:"18",onClick:p,cursor:"pointer",children:e.jsx("use",{href:r?`${m}#icon-calendar`:`${m}#icon-calendar-white`})}),e.jsx(ae,{selected:i,onChange:l,customInput:e.jsx(f,{style:{cursor:"text"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:d=>d.substring(0,2),open:r,onClickOutside:c,cursor:"pointer"}),e.jsx(se,{})]})},C=({id:i,name:a,value:l,checked:r,label:o,onChange:p})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:i,name:a,value:l,checked:r,onChange:p}),e.jsx("label",{className:"radio-label",htmlFor:i,children:o})]}),je=()=>{const i=q(),a=W(S),l=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],r=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],o=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],p=P().shape({name:H().required(),height:j().positive("Height must be positive").min(150,"Should be at least 1,5m").required("Height is required"),currentWeight:j().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Current weight is required"),desiredWeight:j().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Desired weight is required"),birthday:G().required("Birthday is required")}),c={name:a.name||"Name",height:a.height||"",currentWeight:a.currentWeight||"",desiredWeight:a.desiredWeight||"",birthday:a.birthday||"2005-01-01",blood:(a.blood??"1").toString()||"1",sex:a.sex||"male",levelActivity:(a.levelActivity??"1").toString()||"1"},d=n=>{i(z(n)),g(!1)},[u,g]=x.useState(!1),v=()=>{g(!0)};return e.jsx(Y,{initialValues:c,validationSchema:p,onSubmit:d,validateOnChange:!0,children:n=>e.jsxs(J,{onChange:v,children:[e.jsxs(K,{children:[e.jsxs($,{style:{width:"100%"},children:[e.jsx(b,{name:"name",type:"text",placeholder:"Your name",as:F,required:!0}),e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx(y,{name:"name",component:"span"})]}),e.jsxs($,{style:{width:"100%"},children:[e.jsx(F,{type:"text",name:"email",defaultValue:a.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0}),e.jsx("label",{htmlFor:"email",children:"Email"})]})]}),e.jsxs(I,{children:[e.jsxs(w,{children:[e.jsx(b,{type:"number",name:"height",id:"height",placeholder:"",as:f,required:!0}),e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx(y,{name:"height",component:"span"})]}),e.jsx(Q,{children:e.jsxs(w,{children:[e.jsx(b,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:f,required:!0}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(y,{name:"currentWeight",component:"span"})]})})]}),e.jsxs(I,{children:[e.jsxs(w,{children:[e.jsx(b,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:f,required:!0}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(y,{name:"desiredWeight",component:"span"})]}),e.jsx(fe,{selectedDate:n.values.birthday,setSelectedDate:s=>{v(),n.setFieldValue("birthday",s.toISOString())}})]}),e.jsxs(X,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px",position:"relative"},children:[e.jsx(Z,{children:"Blood"}),l.map(s=>e.jsx(C,{id:s.id,name:"blood",value:s.value,checked:n.values.blood===s.value,label:s.label,onChange:()=>n.setFieldValue("blood",s.value)},s.id))]}),e.jsx("div",{style:{display:"flex"},children:r.map(s=>e.jsx(C,{id:s.id,name:"sex",value:s.value,checked:n.values.sex===s.value,label:s.label,onChange:()=>n.setFieldValue("sex",s.value)},s.id))})]}),e.jsx(_,{children:o.map(s=>e.jsx(C,{id:s.id,name:"levelActivity",value:s.value,checked:n.values.levelActivity===s.value,label:s.label,onChange:()=>n.setFieldValue("levelActivity",s.value)},s.id))})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-start"},children:e.jsx(ee,{type:"submit",disabled:!u||Object.keys(n.errors).length>0,children:"Save"})})]})})},we=t.p`
  color: gray;
  /* color: ${i=>i.theme.colors.accentColor}; */
  font-family: 'RobotoRegular';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`,Ce=t.div`
  display: flex;
  /* justify-content: center; */
  /* @media screen and (min-width: 768px) and (max-width: 1439px) {
   max-width: 439px;
  } */
`,We=t.svg`
  width: 24px;
  height: 24px;
`,Se=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 24px;
  height: 24px;
  background-color: var(--beige-color);
`,$e=t.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`,Fe=()=>e.jsx(Ce,{children:e.jsxs($e,{children:[e.jsx(Se,{children:e.jsx(We,{children:e.jsx("use",{href:`${m}#exclamation`})})}),e.jsx(we,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),Ie=t.div`
 

  @media screen and (min-width: 768px) and (max-width: 1439px) {
  
  }

  @media screen and (min-width: 1440px) {

  }
`,Re=t.h2`
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
`,qe=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`,De=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,ke=t.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;
  }
`,Ae=t.div`
margin-top: 32px;
margin-left: auto;

width: 70px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 78px;
    height: 24px;
  } 
`,Ve=t.div`

 @media screen and (min-width: 768px) and (max-width: 1439px) {margin: auto;
    width: 439px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 36px;
  }
`,Ee=()=>{const i=W(S),{isLoading:a}=N();return a?e.jsx(E,{}):e.jsx(L,{children:e.jsxs(Ie,{children:[e.jsx(Re,{children:"Profile Setings"}),e.jsxs(De,{children:[e.jsxs(Ve,{children:[e.jsx(ye,{}),e.jsxs(qe,{children:[e.jsx(R,{iconId:"food",text:"Daily calorie intake",value:i.bmr}),e.jsx(R,{iconId:"dumbbell",text:"Daily physical activity",value:i.timeSport,amoutName:"min"})]}),e.jsx(Fe,{}),e.jsx(Ae,{children:e.jsx(M,{})})]}),e.jsx(ke,{children:e.jsx(je,{})})]})]})})};export{Ee as default};
