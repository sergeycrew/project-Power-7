import{u as t,j as e,i as m,a as D,b as S,m as $,r as x,n as T,o as B,p as N,q as z,t as E,v as L,C as M,w as P}from"./index-fd6662c4.js";import{c as H,a as G,b as w,d as Y}from"./index.esm-5c04a2f7.js";import{b as J,a as y}from"./formik.esm-fca706c0.js";import{I as j,S as K,C as Q,W as F,a as I,F as f,b as R,c as C,d as X,e as Z,R as _,f as ee,B as te}from"./UserForm.styled-00378625.js";import{W as ie,I as ae,i as se,C as ne}from"./react-datepicker-cssmodules-ee2715db.js";import"./floating-ui.dom-9d61e2db.js";const re=t.p`
color: white;

  font-family: 'RobotoRegular';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,le=t.div`
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
`,de=t.svg`
  width: 20px;
  height: 20px;

`,oe=t.p`
  color: ${i=>i.theme.colors.whiteColor};

  font-family: 'RobotoBold';
  font-size: 18px;
  line-height: 1.3;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,pe=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,q=({iconId:i,text:s,value:n=0,amoutName:l})=>e.jsxs(le,{children:[e.jsxs(pe,{children:[e.jsx(de,{children:e.jsx("use",{href:`${m}#${i}`})}),e.jsx(re,{children:s})]}),e.jsxs(oe,{children:[Math.round(n)," ",l]})]}),ce=t.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,he=t.div`
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
`,xe=t.img`
  border-radius: 100px;
  width: 100%;
  height: 100%;
`;t.div`
  cursor: pointer;
`;const me=t.svg`
  width: 40px;
  height: 41px;
  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`,ue=t.svg`
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
`,ge=t.label`
  cursor: pointer;
  position: absolute;
  top: -13px;
  left: -12px;
  

  @media screen and (min-width: 768px) {
    left: -15px;
    height: 32px;
    top: -17.5px;
  }
`,ve=t.p`
  margin-top: 32px;
  color: ${i=>i.theme.colors.whiteColor};
  font-family: 'RobotoRegular';
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`,be=t.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`,ye=t.button`
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
`;const fe=()=>{const i=D(),s=S($),n=e.jsx(me,{children:e.jsx("use",{href:`${m}#user`})}),l=e.jsx(xe,{src:s.avatarUrl,alt:"Avatar"}),o=s.avatarUrl?l:n,p=h=>{i(T(h.target.files[0]))},[c,d]=x.useState(null),[u,v]=x.useState(!1),[b,g]=x.useState(null),[r,a]=x.useState(!1),k=u?`Try again in ${b}`:r?"Send again":"Verify",A="Verified",V=s.verify?A:k,U=()=>{clearInterval(c),v(!0),g(20),d(setInterval(()=>{g(h=>h===1?(clearInterval(c),v(!1),a(!0),null):h-1)},1e3))},O=()=>{U();const h=s.email;i(B({email:h}))};return e.jsxs(ce,{children:[e.jsx(he,{children:o}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("input",{type:"file",accept:".jpg, .jpeg",id:"fileInput",name:"fileInput",style:{display:"none"},onChange:p}),e.jsx(ge,{htmlFor:"fileInput",style:{display:s.verify?"inline-block":"none"},children:e.jsx(ue,{children:e.jsx("use",{href:`${m}#add`})})})]}),e.jsx(ve,{children:s.name?s.name:"Name"}),e.jsx(be,{children:"User"}),e.jsx(ye,{type:"submit",disabled:u||s.verify,onClick:O,style:{color:s.verify?"#3cbf61":u?"rgba(239, 237, 232, 0.9)":"tomato"},children:V})]})},je=({selectedDate:i,setSelectedDate:s})=>{const n=d=>{s(d),c()},[l,o]=x.useState(!1),p=()=>{o(d=>!d)},c=()=>{o(!1)};return e.jsxs(ie,{children:[e.jsx("label",{htmlFor:"datePicker",children:"Date of birth"}),e.jsx(ae,{width:"18",height:"18",onClick:p,cursor:"pointer",children:e.jsx("use",{href:l?`${m}#icon-calendar`:`${m}#icon-calendar-white`})}),e.jsx(se,{selected:i,onChange:n,customInput:e.jsx(j,{style:{cursor:"text"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:d=>d.substring(0,2),open:l,onClickOutside:c,cursor:"pointer"}),e.jsx(ne,{})]})},W=({id:i,name:s,value:n,checked:l,label:o,onChange:p})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:i,name:s,value:n,checked:l,onChange:p}),e.jsx("label",{className:"radio-label",htmlFor:i,children:o})]}),we=()=>{const i=N(),s=D(),n=S($),l=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],o=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],p=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],c=H().shape({name:G().required(),height:w().positive("Height must be positive").min(150,"Should be at least 1,5m").required("Height is required"),currentWeight:w().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Current weight is required"),desiredWeight:w().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Desired weight is required"),birthday:Y().required("Birthday is required")}),d={name:n.name||"Name",height:n.height||"",currentWeight:n.currentWeight||"",desiredWeight:n.desiredWeight||"",birthday:n.birthday||"2005-01-01",blood:(n.blood??"1").toString()||"1",sex:n.sex||"male",levelActivity:(n.levelActivity??"1").toString()||"1"},u=r=>{s(z(r)),b(!1),i("/diary")},[v,b]=x.useState(!1),g=()=>{b(!0)};return e.jsx(J,{initialValues:d,validationSchema:c,onSubmit:u,validateOnChange:!0,children:r=>e.jsxs(K,{onChange:g,children:[e.jsxs(Q,{children:[e.jsxs(F,{style:{width:"100%"},children:[e.jsx(y,{name:"name",type:"text",placeholder:"Your name",as:I,required:!0}),e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx(f,{name:"name",component:"span"})]}),e.jsxs(F,{style:{width:"100%"},children:[e.jsx(I,{type:"text",name:"email",defaultValue:n.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0}),e.jsx("label",{htmlFor:"email",children:"Email"})]})]}),e.jsxs(R,{children:[e.jsxs(C,{children:[e.jsx(y,{type:"number",name:"height",id:"height",placeholder:"",as:j,required:!0}),e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx(f,{name:"height",component:"span"})]}),e.jsx(X,{children:e.jsxs(C,{children:[e.jsx(y,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:j,required:!0}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(f,{name:"currentWeight",component:"span"})]})})]}),e.jsxs(R,{children:[e.jsxs(C,{children:[e.jsx(y,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:j,required:!0}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(f,{name:"desiredWeight",component:"span"})]}),e.jsx(je,{selectedDate:r.values.birthday,setSelectedDate:a=>{g(),r.setFieldValue("birthday",a.toISOString())}})]}),e.jsxs(Z,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px",position:"relative"},children:[e.jsx(_,{children:"Blood"}),l.map(a=>e.jsx(W,{id:a.id,name:"blood",value:a.value,checked:r.values.blood===a.value,label:a.label,onChange:()=>r.setFieldValue("blood",a.value)},a.id))]}),e.jsx("div",{style:{display:"flex"},children:o.map(a=>e.jsx(W,{id:a.id,name:"sex",value:a.value,checked:r.values.sex===a.value,label:a.label,onChange:()=>r.setFieldValue("sex",a.value)},a.id))})]}),e.jsx(ee,{children:p.map(a=>e.jsx(W,{id:a.id,name:"levelActivity",value:a.value,checked:r.values.levelActivity===a.value,label:a.label,onChange:()=>r.setFieldValue("levelActivity",a.value)},a.id))})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-start"},children:e.jsx(te,{type:"submit",disabled:!v||Object.keys(r.errors).length>0,children:"Save"})})]})})},Ce=t.p`
  color: gray;
  /* color: ${i=>i.theme.colors.accentColor}; */
  font-family: 'RobotoRegular';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`,We=t.div`
  display: flex;
  /* justify-content: center; */
  /* @media screen and (min-width: 768px) and (max-width: 1439px) {
   max-width: 439px;
  } */
`,Se=t.svg`
  width: 24px;
  height: 24px;
`,$e=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 24px;
  height: 24px;
  background-color: var(--beige-color);
`,Fe=t.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`,Ie=()=>e.jsx(We,{children:e.jsxs(Fe,{children:[e.jsx($e,{children:e.jsx(Se,{children:e.jsx("use",{href:`${m}#exclamation`})})}),e.jsx(Ce,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),Re=t.div`
 

  @media screen and (min-width: 768px) and (max-width: 1439px) {
  
  }

  @media screen and (min-width: 1440px) {

  }
`,qe=t.h2`
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
`,De=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`,ke=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Ae=t.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;
  }
`,Ve=t.div`
margin-top: 32px;
margin-left: auto;

width: 70px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 78px;
    height: 24px;
  } 
`,Ue=t.div`

 @media screen and (min-width: 768px) and (max-width: 1439px) {margin: auto;
    width: 439px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 36px;
  }
`,Le=()=>{const i=S($),{isLoading:s}=E();return s?e.jsx(L,{}):e.jsx(M,{children:e.jsxs(Re,{children:[e.jsx(qe,{children:"Profile Setings"}),e.jsxs(ke,{children:[e.jsxs(Ue,{children:[e.jsx(fe,{}),e.jsxs(De,{children:[e.jsx(q,{iconId:"food",text:"Daily calorie intake",value:i.bmr}),e.jsx(q,{iconId:"dumbbell",text:"Daily physical activity",value:i.timeSport,amoutName:"min"})]}),e.jsx(Ie,{}),e.jsx(Ve,{children:e.jsx(P,{})})]}),e.jsx(Ae,{children:e.jsx(we,{})})]})]})})};export{Le as default};
