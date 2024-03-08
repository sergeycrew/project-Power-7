import{u as i,j as e,s as f,a as y,d as j,e as w,f as N,g as c,i as v,h as O,c as M,k as P,m as H,C as Y,n as G}from"./index-057ea621.js";import{F as J,c as K,b as Q,e as g,f as X,d as Z,a as h}from"./index.esm-a45d50ac.js";import{W as _,I as ee,i as te,C as ie}from"./react-datepicker-cssmodules-7b90ee96.js";const ae=i.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: 'RobotoRegular';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  
`,ne=i.div`
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
`,re=i.svg`
  width: 16px;
  height: 16px;
  /* fill: ${t=>t.theme.colors.orangeLightColor};
  stroke: ${t=>t.theme.colors.orangeLightColor}; */
`,se=i.p`
 color: ${t=>t.theme.colors.whiteColor};
  font-family: 'RobotoBold';
  font-size: 18px;
  line-height: 1.3;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,oe=i.div`
display: flex;
align-items: center;
gap: 8px;`,k=({iconId:t,text:a,value:s=0,amoutName:o})=>e.jsxs(ne,{children:[e.jsxs(oe,{children:[e.jsx(re,{children:e.jsx("use",{href:`${f}#${t}`})}),e.jsx(ae,{children:a})]}),e.jsxs(se,{children:[Math.round(s)," ",o]})]}),le=i.div`
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

`,pe=i.img`
border-radius: 100px;
width: 100%;
height: 100%;
`;i.div`
cursor: pointer;`;const ce=i.svg`
width: 61px;
height: 62px;
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
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
  `,me=i.p`
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
  
`,ue=()=>{const t=y(),a=j(w),s=e.jsx(ce,{children:e.jsx("use",{href:`${f}#icon-user`})}),o=e.jsx(pe,{src:a.avatarUrl,alt:"Avatar"}),l=a.avatarUrl?o:s,d=x=>{t(N(x.target.files[0]))};return e.jsxs(le,{children:[e.jsx(de,{children:l}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("input",{type:"file",accept:".jpg, .jpeg",id:"fileInput",name:"fileInput",style:{display:"none"},onChange:d}),e.jsx(he,{htmlFor:"fileInput",style:{display:a.verify?"inline-block":"none"},children:e.jsx(xe,{children:e.jsx("use",{href:`${f}#icon-add-avatar`})})})]}),e.jsx(me,{children:a.name?a.name:"Name"}),e.jsx(ge,{children:"User"})]})},be=i.div`
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
  }
`,fe=i(J)`
  /* margin-top: 20px; */

  @media screen and (min-width: 768px) {
  }
`,F=i.p`
  color: ${t=>t.theme.colors.accentColor};
  margin-bottom: 4px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,I=i.input`
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
`,D=i.div`
  display: inline-flex;
  align-items: flex-end;
  margin-top: 20px;
  gap: 14px;
`,ve=i.div`
  @media screen and (min-width: 768px) {
    margin-right: 14px;
  }
`,u=i.div`
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
`,m=i.input`
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
`,ye=i.div`
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
`,je=i.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`,we=i.button`
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
`,Ce=i.button`
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
`,$e=({selectedDate:t,setSelectedDate:a})=>{const s=p=>{a(p),x()},[o,l]=c.useState(!1),d=()=>{l(p=>!p)},x=()=>{l(!1)};return e.jsxs(_,{children:[e.jsx("label",{htmlFor:"datePicker",children:"Date of birth"}),e.jsx(ee,{width:"18",height:"18",onClick:d,cursor:"pointer",children:e.jsx("use",{href:o?`${v}#icon-calendar`:`${v}#icon-calendar-white`})}),e.jsx(te,{selected:t,onChange:s,customInput:e.jsx(m,{style:{cursor:"text"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:p=>p.substring(0,2),open:o,onClickOutside:x,cursor:"pointer"}),e.jsx(ie,{})]})},b=({id:t,name:a,value:s,checked:o,label:l,onChange:d})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:t,name:a,value:s,checked:o,onChange:d}),e.jsx("label",{className:"radio-label",htmlFor:t,children:l})]}),Se=()=>{const t=y(),a=j(w);console.log(a);const s=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],o=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],l=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],d=K().shape({name:Q().required(),height:g().positive("Height must be positive").min(150,"Should be at least 1,5m").required("Height is required"),currentWeight:g().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Current weight is required"),desiredWeight:g().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Desired weight is required"),birthday:X().required("Birthday is required")}),x={name:a.name||"Name",height:a.height||"",currentWeight:a.currentWeight||"",desiredWeight:a.desiredWeight||"",birthday:a.birthday||"2005-01-01",blood:(a.blood??"1").toString()||"1",sex:a.sex||"male",levelActivity:(a.levelActivity??"1").toString()||"1"},p=r=>{t(O(r)),C(!1)},[R,C]=c.useState(!1),z=r=>{C(!0)},U=()=>{T();const r=a.email;console.log({email:r})},[A,E]=c.useState(null),[$,S]=c.useState(!1),[L,W]=c.useState(null),[q,V]=c.useState(!1),T=()=>{S(!0),W(60),E(setInterval(()=>{W(r=>r===1?(clearInterval(A),S(!1),V(!0),null):r-1)},1e3))},B=$?`Try again in ${L}`:q?"Send again":"Verify";return e.jsx(Z,{initialValues:x,validationSchema:d,onSubmit:p,children:r=>e.jsxs(fe,{onChange:z,children:[e.jsxs(be,{children:[e.jsxs("div",{style:{width:"100%"},children:[e.jsx(F,{children:"Name"}),e.jsx(h,{name:"name",type:"text",placeholder:"Your name",as:I})]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx(F,{children:"Email"}),e.jsx(I,{type:"text",name:"email",defaultValue:a.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0})]})]}),e.jsxs(D,{children:[e.jsxs(u,{children:[e.jsx(h,{type:"number",name:"height",id:"height",placeholder:"",as:m}),e.jsx("label",{htmlFor:"height",children:"Height"})]}),e.jsx(ve,{children:e.jsxs(u,{children:[e.jsx(h,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:m}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"})]})})]}),e.jsxs(D,{children:[e.jsxs(u,{children:[e.jsx(h,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:m}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"})]}),e.jsx($e,{selectedDate:r.values.birthday,setSelectedDate:n=>{r.setFieldValue("birthday",n.toISOString())}})]}),e.jsxs(ye,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsx("div",{style:{display:"flex",marginRight:"20px"},children:s.map(n=>e.jsx(b,{id:n.id,name:"blood",value:n.value,checked:r.values.blood===n.value,label:n.label,onChange:()=>r.setFieldValue("blood",n.value)},n.id))}),e.jsx("div",{style:{display:"flex"},children:o.map(n=>e.jsx(b,{id:n.id,name:"sex",value:n.value,checked:r.values.sex===n.value,label:n.label,onChange:()=>r.setFieldValue("sex",n.value)},n.id))})]}),e.jsx(je,{children:l.map(n=>e.jsx(b,{id:n.id,name:"levelActivity",value:n.value,checked:r.values.levelActivity===n.value,label:n.label,onChange:()=>r.setFieldValue("levelActivity",n.value)},n.id))})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start"},children:[e.jsx(we,{type:"submit",disabled:!R,children:"Save"}),e.jsx(Ce,{type:"submit",disabled:$,onClick:U,style:{display:a.verify?"none":"inline-block"},children:B})]})]})})},We=i.p`
  /* color: ${t=>t.theme.colors.whiteColor}; */
  color: ${t=>t.theme.colors.accentColor};
  font-family: 'RobotoRegular';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  
`,ke=i.div`
  display: flex;
  justify-content: center;
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
`,De=i.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;

  @media screen and (max-width: 768px)  {
   max-width: 335px;
  } 

  @media screen and (min-width: 768px) {
    width: 440px;
  }
`,Re=()=>e.jsx(ke,{children:e.jsxs(De,{children:[e.jsx(Ie,{children:e.jsx(Fe,{children:e.jsx("use",{href:`${v}#exclamation`})})}),e.jsx(We,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),ze=i.div`
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
`,Ee=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Le=i.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;
  }
`,qe=i.div`
margin-top: 32px;
/* margin-left: auto;
margin-top: 32px;
justify-content: center;
width: 70px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 78px;
    height: 24px;
  } */
`,Ve=i.div`
/* justify-content: center; */
`,Oe=()=>{const t=j(w),a=y(),{isLoggedIn:s,isLoading:o}=M();return c.useEffect(()=>{s&&a(P())},[a,s]),o?e.jsx(H,{}):e.jsx(Y,{children:e.jsxs(ze,{children:[e.jsx(Ue,{children:"Profile Setings"}),e.jsxs(Ee,{children:[e.jsxs(Ve,{children:[e.jsx(ue,{}),e.jsxs(Ae,{children:[e.jsx(k,{iconId:"icon-fork-knife",text:"Daily calorie intake",value:t.bmr}),e.jsx(k,{iconId:"icon-dumbbell",text:"Daily physical activity",value:t.timeSport,amoutName:"min"})]}),e.jsx(Re,{}),e.jsx(qe,{children:e.jsx(G,{})})]}),e.jsx(Le,{children:e.jsx(Se,{})})]})]})})};export{Oe as default};
