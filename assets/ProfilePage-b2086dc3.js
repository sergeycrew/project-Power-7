import{u as i,j as e,d as v,a as j,e as w,f as C,g as N,r as c,i as y,h as M,k as P,m as H,n as Y,C as G,o as J}from"./index-025e3954.js";import{c as K,a as Q,b as u,d as X}from"./index.esm-1505461a.js";import{F as Z,E as _,b as ee,a as h}from"./formik.esm-ea088495.js";import{W as te,I as ie,i as ae,C as ne}from"./react-datepicker-cssmodules-95351803.js";const re=i.p`
  color: rgba(239, 237, 232, 0.8);
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
`,oe=i.svg`
  width: 16px;
  height: 16px;
  /* fill: ${t=>t.theme.colors.orangeLightColor};
  stroke: ${t=>t.theme.colors.orangeLightColor}; */
`,le=i.p`
 color: ${t=>t.theme.colors.whiteColor};
  font-family: 'RobotoBold';
  font-size: 18px;
  line-height: 1.3;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,de=i.div`
display: flex;
align-items: center;
gap: 8px;`,I=({iconId:t,text:a,value:s=0,amoutName:o})=>e.jsxs(se,{children:[e.jsxs(de,{children:[e.jsx(oe,{children:e.jsx("use",{href:`${v}#${t}`})}),e.jsx(re,{children:a})]}),e.jsxs(le,{children:[Math.round(s)," ",o]})]}),pe=i.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,ce=i.div`
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
cursor: pointer;`;const he=i.svg`
width: 61px;
height: 62px;
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,me=i.svg`
  width: 24px;
  height: 24px;
  position: relative;
  /* top: -13px; */
  left: 0px;

  

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    /* top: -17.5px; */
  }`,ge=i.label`
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
  
`,be=i.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
  
`,fe=()=>{const t=j(),a=w(C),s=e.jsx(he,{children:e.jsx("use",{href:`${v}#icon-user`})}),o=e.jsx(xe,{src:a.avatarUrl,alt:"Avatar"}),l=a.avatarUrl?o:s,d=x=>{t(N(x.target.files[0]))};return e.jsxs(pe,{children:[e.jsx(ce,{children:l}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("input",{type:"file",accept:".jpg, .jpeg",id:"fileInput",name:"fileInput",style:{display:"none"},onChange:d}),e.jsx(ge,{htmlFor:"fileInput",style:{display:a.verify?"inline-block":"none"},children:e.jsx(me,{children:e.jsx("use",{href:`${v}#icon-add-avatar`})})})]}),e.jsx(ue,{children:a.name?a.name:"Name"}),e.jsx(be,{children:"User"})]})},ve=i.div`
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
  }
`,ye=i(Z)`
  /* margin-top: 20px; */

  @media screen and (min-width: 768px) {
  }
`,m=i(_)`
  position: absolute;
  top: 48px;
  left: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: ${t=>t.theme.colors.errorColor};

  @media screen and (min-width: 1440px) {
    top: 52px;
  }
`,D=i.p`
  color: ${t=>t.theme.colors.accentColor};
  margin-bottom: 4px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,R=i.input`
  max-width: 335px;
  width: 100%;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${t=>t.theme.colors.accentColor};
  background-color: transparent;
  color: #efede8;
  font-size: 14;
  &:focus,
  &:hover {
    outline: none;
    border-color: ${t=>t.theme.colors.orangeColor};
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 341px;
  }
`,z=i.div`
  display: inline-flex;
  align-items: flex-end;
  margin-top: 20px;
  gap: 14px;
`,je=i.div`
  @media screen and (min-width: 768px) {
    margin-right: 14px;
  }
`,b=i.div`
  position: relative;
  margin-top: 40px;

  label {
    position: absolute;
    font-size: 14px;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    pointer-events: none;
    transition:
      top 0.2s,
      left 0.2s,
      transform 0.2s;
    color: ${t=>t.theme.colors.accentColor};
  }

  input[type='number']:focus + label,
  input[type='number']:not(:placeholder-shown) + label {
    color: ${t=>t.theme.colors.accentColor};
    transform: translateY(-44px);
  }
`,g=i.input`
  max-width: 165px;
  width: 100%;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;
  /* cursor: text; */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    display: none; /* Скрываем стандартные кнопки ввода */
  }

 

  &:focus,
  &:hover {
    outline: none;
    border-color: ${t=>t.theme.colors.orangeColor};
  }


   
`,we=i.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    display: block;
  }

  .radio {
    position: relative;
  }

  .radio-input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .radio-label {
    padding-left: 25px;
    cursor: pointer;
    font-family: 'RobotoRegular';
    font-size: 14px;
    line-height: 1.71em;
    letter-spacing: -0.28px;
    color: #efede8;
    margin-right: 9px;

    @media screen and (min-width: 768px) and (max-width: 1439px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .radio-label::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border: 2px solid #636366;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 0;
  }

  .radio-label::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border: 2px solid ${t=>t.theme.colors.orangeLightColor};
    background-color: ${t=>t.theme.colors.orangeLightColor};
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    top: 7px;
    left: 4px;
    z-index: 2;
  }

  .radio-input:checked + .radio-label::before {
    border-color: ${t=>t.theme.colors.orangeLightColor};
  }

  .radio-input:checked + .radio-label::after {
    opacity: 1;
  }
`,Ce=i.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`,$e=i.button`
  margin: 40px 0px 44px 20px;
  padding: 12px 40px;
  border-radius: 12px;
  background: ${t=>t.theme.colors.orangeColor};
  color: #EFEDE8;

  &:disabled{
    color: rgba(239, 237, 232, 0.6);
    cursor: default;
  }

  @media screen and (min-width: 768px) {
    margin: 40px 0px 54px 0;
    padding: 16px 50px;
  }
`,Se=i.button`
  margin: 40px 0px 44px 20px;
  /* margin-left: 10px ; */
  padding: 12px 40px;
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
`,We=({selectedDate:t,setSelectedDate:a})=>{const s=p=>{a(p),x()},[o,l]=c.useState(!1),d=()=>{l(p=>!p)},x=()=>{l(!1)};return e.jsxs(te,{children:[e.jsx("label",{htmlFor:"datePicker",children:"Date of birth"}),e.jsx(ie,{width:"18",height:"18",onClick:d,cursor:"pointer",children:e.jsx("use",{href:o?`${y}#icon-calendar`:`${y}#icon-calendar-white`})}),e.jsx(ae,{selected:t,onChange:s,customInput:e.jsx(g,{style:{cursor:"text"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:p=>p.substring(0,2),open:o,onClickOutside:x,cursor:"pointer"}),e.jsx(ne,{})]})},f=({id:t,name:a,value:s,checked:o,label:l,onChange:d})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:t,name:a,value:s,checked:o,onChange:d}),e.jsx("label",{className:"radio-label",htmlFor:t,children:l})]}),ke=()=>{const t=j(),a=w(C);console.log(a);const s=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],o=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],l=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],d=K().shape({name:Q().required(),height:u().positive("Height must be positive").min(150,"Should be at least 1,5m").required("Height is required"),currentWeight:u().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Current weight is required"),desiredWeight:u().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Desired weight is required"),birthday:X().required("Birthday is required")}),x={name:a.name||"Name",height:a.height||"",currentWeight:a.currentWeight||"",desiredWeight:a.desiredWeight||"",birthday:a.birthday||"2005-01-01",blood:(a.blood??"1").toString()||"1",sex:a.sex||"male",levelActivity:(a.levelActivity??"1").toString()||"1"},p=r=>{t(M(r)),$(!1)},[E,$]=c.useState(!1),S=r=>{$(!0)},q=()=>{T();const r=a.email;console.log({email:r})},[U,A]=c.useState(null),[W,k]=c.useState(!1),[L,F]=c.useState(null),[O,V]=c.useState(!1),T=()=>{k(!0),F(60),A(setInterval(()=>{F(r=>r===1?(clearInterval(U),k(!1),V(!0),null):r-1)},1e3))},B=W?`Try again in ${L}`:O?"Send again":"Verify";return e.jsx(ee,{initialValues:x,validationSchema:d,onSubmit:p,validateOnChange:!0,children:r=>e.jsxs(ye,{onChange:S,children:[e.jsxs(ve,{children:[e.jsxs("div",{style:{width:"100%"},children:[e.jsx(D,{children:"Name"}),e.jsx(h,{name:"name",type:"text",placeholder:"Your name",as:R,required:!0}),e.jsx(m,{name:"name",component:"span"})]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx(D,{children:"Email"}),e.jsx(R,{type:"text",name:"email",defaultValue:a.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0})]})]}),e.jsxs(z,{children:[e.jsxs(b,{children:[e.jsx(h,{type:"number",name:"height",id:"height",placeholder:"",as:g,required:!0}),e.jsx("label",{htmlFor:"height",children:"Height"}),e.jsx(m,{name:"height",component:"span"})]}),e.jsx(je,{children:e.jsxs(b,{children:[e.jsx(h,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:g,required:!0}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(m,{name:"currentWeight",component:"span"})]})})]}),e.jsxs(z,{children:[e.jsxs(b,{children:[e.jsx(h,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:g,required:!0}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(m,{name:"desiredWeight",component:"span"})]}),e.jsx(We,{selectedDate:r.values.birthday,setSelectedDate:n=>{S(),r.setFieldValue("birthday",n.toISOString())}})]}),e.jsxs(we,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsx("div",{style:{display:"flex",marginRight:"20px"},children:s.map(n=>e.jsx(f,{id:n.id,name:"blood",value:n.value,checked:r.values.blood===n.value,label:n.label,onChange:()=>r.setFieldValue("blood",n.value)},n.id))}),e.jsx("div",{style:{display:"flex"},children:o.map(n=>e.jsx(f,{id:n.id,name:"sex",value:n.value,checked:r.values.sex===n.value,label:n.label,onChange:()=>r.setFieldValue("sex",n.value)},n.id))})]}),e.jsx(Ce,{children:l.map(n=>e.jsx(f,{id:n.id,name:"levelActivity",value:n.value,checked:r.values.levelActivity===n.value,label:n.label,onChange:()=>r.setFieldValue("levelActivity",n.value)},n.id))})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start"},children:[e.jsx($e,{type:"submit",disabled:!E||Object.keys(r.errors).length>0,children:"Save"}),e.jsx(Se,{type:"submit",disabled:W,onClick:q,style:{display:a.verify?"none":"inline-block"},children:B})]})]})})},Fe=i.p`
  /* color: ${t=>t.theme.colors.whiteColor}; */
  color: ${t=>t.theme.colors.accentColor};
  font-family: 'RobotoRegular';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  
`,Ie=i.div`
  display: flex;
  /* justify-content: center; */
  /* @media screen and (min-width: 768px) and (max-width: 1439px) {
   max-width: 439px;
  } */
`,De=i.svg`
  width: 24px;
  height: 24px;
`,Re=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 24px;
  height: 24px;
  background-color: var(--beige-color);
`,ze=i.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;

  @media screen and (max-width: 768px)  {
   max-width: 335px;
  } 

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`,Ee=()=>e.jsx(Ie,{children:e.jsxs(ze,{children:[e.jsx(Re,{children:e.jsx(De,{children:e.jsx("use",{href:`${y}#exclamation`})})}),e.jsx(Fe,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),qe=i.div`
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
`,Ue=i.h2`
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
`,Le=i.div`
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
`,Te=i.div`

 @media screen and (min-width: 768px) and (max-width: 1439px) {margin: auto;
    width: 439px;
  }
  /* @media screen and (min-width: 1440px) {
   margin-left: 50px;
  } */
`,He=()=>{const t=w(C),a=j(),{isLoggedIn:s,isLoading:o}=P();return c.useEffect(()=>{s&&a(H())},[a,s]),o?e.jsx(Y,{}):e.jsx(G,{children:e.jsxs(qe,{children:[e.jsx(Ue,{children:"Profile Setings"}),e.jsxs(Le,{children:[e.jsxs(Te,{children:[e.jsx(fe,{}),e.jsxs(Ae,{children:[e.jsx(I,{iconId:"icon-fork-knife",text:"Daily calorie intake",value:t.bmr}),e.jsx(I,{iconId:"icon-dumbbell",text:"Daily physical activity",value:t.timeSport,amoutName:"min"})]}),e.jsx(Ee,{}),e.jsx(Ve,{children:e.jsx(J,{})})]}),e.jsx(Oe,{children:e.jsx(ke,{})})]})]})})};export{He as default};
