import{u as i,j as e,a as S,c as W,i as $,r as u,s as p,k as T,m as z,n as B,o as E,C as M,p as P}from"./index-fe607193.js";import{i as H}from"./sprite-35d18428.js";import{c as G,a as Y,b,d as J}from"./index.esm-7708be14.js";import{b as K,a as f}from"./formik.esm-c20b314d.js";import{I as y,S as Q,C as X,a as I,b as k,F as j,W as R,c as w,d as Z,e as _,f as ee,B as te}from"./UserForm.styled-18bcf9b4.js";import{W as ie,I as ae,i as se,C as ne}from"./react-datepicker-cssmodules-96d067dc.js";import"./floating-ui.dom-9d61e2db.js";const re=i.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: 'RobotoRegular';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  
`,le=i.div`
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
`,de=i.svg`
  width: 16px;
  height: 16px;
  /* fill: ${t=>t.theme.colors.orangeLightColor};
  stroke: ${t=>t.theme.colors.orangeLightColor}; */
`,oe=i.p`
 color: ${t=>t.theme.colors.whiteColor};
  font-family: 'RobotoBold';
  font-size: 18px;
  line-height: 1.3;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,ce=i.div`
display: flex;
align-items: center;
gap: 8px;`,D=({iconId:t,text:a,value:r=0,amoutName:l})=>e.jsxs(le,{children:[e.jsxs(ce,{children:[e.jsx(de,{children:e.jsx("use",{href:`${H}#${t}`})}),e.jsx(re,{children:a})]}),e.jsxs(oe,{children:[Math.round(r)," ",l]})]}),pe=i.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,he=i.div`
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
`,xe=i.img`
  border-radius: 100px;
  width: 100%;
  height: 100%;
`;i.div`
  cursor: pointer;
`;const me=i.svg`
  width: 40px;
  height: 41px;
  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`,ue=i.svg`
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
`,ge=i.label`
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
`,ve=i.p`
  margin-top: 32px;
  color: ${t=>t.theme.colors.whiteColor};
  font-family: 'RobotoRegular';
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`,fe=i.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`,je=i.button`
  margin-top: 2px;
  /* color: ${t=>t.theme.colors.successtColor}; */
  position: relative;
  /* color: ${t=>t.theme.colors.errorColor}; */
  padding: 0;
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 18px;

  background: 0;

  &:disabled {
    /* color: rgba(239, 237, 232, 0.5); */

    cursor: default;
    /* display: none; */
  }
  @media screen and (min-width: 768px) {
    margin-top: 2px;
    /* padding: 16px 50px; */
  }
`,ye=i.svg`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 3px;
  left: 50px;
  /* @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    top: 3px;
  } */
`,be=i.svg`
  width: 13px;
  height: 13px;
  position: absolute;
  top: 3px;
  left: 36px;
  /* @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    top: 3px;
  } */
`,we=()=>{const t=S(),a=W($),r=e.jsx(me,{children:e.jsx("use",{href:`${p}#user`})}),l=e.jsx(xe,{src:a.avatarUrl,alt:"Avatar"}),o=a.avatarUrl?l:r,c=e.jsx(ye,{children:e.jsx("use",{href:`${p}#success`})}),h=e.jsx(be,{children:e.jsx("use",{href:`${p}#not-success`})}),d=m=>{t(T(m.target.files[0]))},[g,v]=u.useState(null),[x,n]=u.useState(!1),[s,F]=u.useState(null),[q,V]=u.useState(!1),A=x?`Try again in ${s}`:q?"Send again":e.jsxs(e.Fragment,{children:["Verify",h]}),U=a.verify?N:A,O=()=>{clearInterval(g),n(!0),F(20),v(setInterval(()=>{F(m=>m===1?(clearInterval(g),n(!1),V(!0),null):m-1)},1e3))},L=()=>{O();const m=a.email;console.log({email:m})},N=e.jsxs(e.Fragment,{children:["Verified",c]});return e.jsxs(pe,{children:[e.jsx(he,{children:o}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("input",{type:"file",accept:".jpg, .jpeg",id:"fileInput",name:"fileInput",style:{display:"none"},onChange:d}),e.jsx(ge,{htmlFor:"fileInput",style:{display:a.verify?"none":"inline-block"},children:e.jsx(ue,{children:e.jsx("use",{href:`${p}#icon-add-avatar`})})})]}),e.jsx(ve,{children:a.name?a.name:"Name"}),e.jsx(fe,{children:"User"}),e.jsx(je,{type:"submit",disabled:x||a.verify,onClick:L,style:{color:a.verify?"#3cbf61":x?"rgba(239, 237, 232, 0.5)":"#d80027"},children:U})]})},Ce=({selectedDate:t,setSelectedDate:a})=>{const r=d=>{a(d),h()},[l,o]=u.useState(!1),c=()=>{o(d=>!d)},h=()=>{o(!1)};return e.jsxs(ie,{children:[e.jsx("label",{htmlFor:"datePicker",children:"Date of birth"}),e.jsx(ae,{width:"18",height:"18",onClick:c,cursor:"pointer",children:e.jsx("use",{href:l?`${p}#icon-calendar`:`${p}#icon-calendar-white`})}),e.jsx(se,{selected:t,onChange:r,customInput:e.jsx(y,{style:{cursor:"text"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:d=>d.substring(0,2),open:l,onClickOutside:h,cursor:"pointer"}),e.jsx(ne,{})]})},C=({id:t,name:a,value:r,checked:l,label:o,onChange:c})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:t,name:a,value:r,checked:l,onChange:c}),e.jsx("label",{className:"radio-label",htmlFor:t,children:o})]}),Se=()=>{const t=S(),a=W($);console.log(a);const r=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],l=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],o=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],c=G().shape({name:Y().required(),height:b().positive("Height must be positive").min(150,"Should be at least 1,5m").required("Height is required"),currentWeight:b().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Current weight is required"),desiredWeight:b().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Desired weight is required"),birthday:J().required("Birthday is required")}),h={name:a.name||"Name",height:a.height||"",currentWeight:a.currentWeight||"",desiredWeight:a.desiredWeight||"",birthday:a.birthday||"2005-01-01",blood:(a.blood??"1").toString()||"1",sex:a.sex||"male",levelActivity:(a.levelActivity??"1").toString()||"1"},d=n=>{t(z(n)),v(!1)},[g,v]=u.useState(!1),x=n=>{v(!0)};return e.jsx(K,{initialValues:h,validationSchema:c,onSubmit:d,validateOnChange:!0,children:n=>e.jsxs(Q,{onChange:x,children:[e.jsxs(X,{children:[e.jsxs("div",{style:{width:"100%"},children:[e.jsx(I,{children:"Name"}),e.jsx(f,{name:"name",type:"text",placeholder:"Your name",as:k,required:!0}),e.jsx(j,{name:"name",component:"span"})]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx(I,{children:"Email"}),e.jsx(k,{type:"text",name:"email",defaultValue:a.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0})]})]}),e.jsxs(R,{children:[e.jsxs(w,{children:[e.jsx(f,{type:"number",name:"height",id:"height",placeholder:"",as:y,required:!0}),e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx(j,{name:"height",component:"span"})]}),e.jsx(Z,{children:e.jsxs(w,{children:[e.jsx(f,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:y,required:!0}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(j,{name:"currentWeight",component:"span"})]})})]}),e.jsxs(R,{children:[e.jsxs(w,{children:[e.jsx(f,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:y,required:!0}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(j,{name:"desiredWeight",component:"span"})]}),e.jsx(Ce,{selectedDate:n.values.birthday,setSelectedDate:s=>{x(),n.setFieldValue("birthday",s.toISOString())}})]}),e.jsxs(_,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsx("div",{style:{display:"flex",marginRight:"20px"},children:r.map(s=>e.jsx(C,{id:s.id,name:"blood",value:s.value,checked:n.values.blood===s.value,label:s.label,onChange:()=>n.setFieldValue("blood",s.value)},s.id))}),e.jsx("div",{style:{display:"flex"},children:l.map(s=>e.jsx(C,{id:s.id,name:"sex",value:s.value,checked:n.values.sex===s.value,label:s.label,onChange:()=>n.setFieldValue("sex",s.value)},s.id))})]}),e.jsx(ee,{children:o.map(s=>e.jsx(C,{id:s.id,name:"levelActivity",value:s.value,checked:n.values.levelActivity===s.value,label:s.label,onChange:()=>n.setFieldValue("levelActivity",s.value)},s.id))})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-start"},children:e.jsx(te,{type:"submit",disabled:!g||Object.keys(n.errors).length>0,children:"Save"})})]})})},We=i.p`
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
`,Re=()=>e.jsx($e,{children:e.jsxs(ke,{children:[e.jsx(Ie,{children:e.jsx(Fe,{children:e.jsx("use",{href:`${p}#exclamation`})})}),e.jsx(We,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),De=i.div`
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
`,Ve=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`,Ae=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Ue=i.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;
  }
`,Oe=i.div`
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
`,Le=i.div`

 @media screen and (min-width: 768px) and (max-width: 1439px) {margin: auto;
    width: 439px;
  }
  /* @media screen and (min-width: 1440px) {
   margin-left: 50px;
  } */
`,He=()=>{const t=W($);S();const{isLoggedIn:a,isLoading:r}=B();return r?e.jsx(E,{}):e.jsx(M,{children:e.jsxs(De,{children:[e.jsx(qe,{children:"Profile Setings"}),e.jsxs(Ae,{children:[e.jsxs(Le,{children:[e.jsx(we,{}),e.jsxs(Ve,{children:[e.jsx(D,{iconId:"icon-fork-knife",text:"Daily calorie intake",value:t.bmr}),e.jsx(D,{iconId:"icon-dumbbell",text:"Daily physical activity",value:t.timeSport,amoutName:"min"})]}),e.jsx(Re,{}),e.jsx(Oe,{children:e.jsx(P,{})})]}),e.jsx(Ue,{children:e.jsx(Se,{})})]})]})})};export{He as default};
