import{u as t,j as e,s as g,a as v,d as y,e as j,f as L,g as c,i as k,h as N,k as M,m as P,c as H,C as Y}from"./index-df5aa589.js";import{F as G,c as J,b as K,e as u,f as Q,d as X,a as h}from"./index.esm-453a53bc.js";import{W as Z,I as _,i as ee,C as ie}from"./react-datepicker-cssmodules-da1a83e8.js";const te=t.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: 'RobotoRegular';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  
`,ae=t.div`
  display: flex;
  flex-direction: column;
  max-width: 165px;
  width: 100%;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
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
`,ne=t.svg`
  width: 16px;
  height: 16px;
  /* fill: ${i=>i.theme.colors.orangeLightColor};
  stroke: ${i=>i.theme.colors.orangeLightColor}; */
`,re=t.p`
 color: ${i=>i.theme.colors.whiteColor};
  font-family: 'RobotoBold';
  font-size: 18px;
  line-height: 1.3;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,se=t.div`
display: flex;
align-items: center;
gap: 8px;`,W=({iconId:i,text:a,value:s=0,amoutName:l})=>e.jsxs(ae,{children:[e.jsxs(se,{children:[e.jsx(ne,{children:e.jsx("use",{href:`${g}#${i}`})}),e.jsx(te,{children:a})]}),e.jsxs(re,{children:[Math.round(s)," ",l]})]}),le=t.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`,oe=t.div`
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

`,de=t.img`
border-radius: 100px;
width: 100%;
height: 100%;
`;t.div`
cursor: pointer;`;const pe=t.svg`
width: 61px;
height: 62px;
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,ce=t.svg`
  width: 24px;
  height: 24px;
  position: relative;
  /* top: -13px; */
  left: 0px;

  

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    /* top: -17.5px; */
  }`,xe=t.label`
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
  `,he=t.p`
margin-top: 32px;
  color: ${i=>i.theme.colors.whiteColor};
  font-family: 'RobotoRegular';
  @media screen and (min-width: 768px) {
    
    font-size: 24px;
    line-height: 28px;
  }
  
`,me=t.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
  
`,ge=()=>{const i=v(),a=y(j),s=e.jsx(pe,{children:e.jsx("use",{href:`${g}#icon-user`})}),l=e.jsx(de,{src:a.avatarUrl,alt:"Avatar"}),o=a.avatarUrl?l:s,d=x=>{i(L(x.target.files[0]))};return e.jsxs(le,{children:[e.jsx(oe,{children:o}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("input",{type:"file",accept:".jpg, .jpeg",id:"fileInput",name:"fileInput",style:{display:"none"},onChange:d}),e.jsx(xe,{htmlFor:"fileInput",style:{display:a.verify?"inline-block":"none"},children:e.jsx(ce,{children:e.jsx("use",{href:`${g}#icon-add-avatar`})})})]}),e.jsx(he,{children:a.name}),e.jsx(me,{children:"User"})]})},ue=t.div`
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
  }
`,be=t(G)`
  /* margin-top: 20px; */

  @media screen and (min-width: 768px) {
  }
`,F=t.p`
  color: ${i=>i.theme.colors.accentColor};
  margin-bottom: 4px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,I=t.input`
  max-width: 335px;
  width: 100%;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${i=>i.theme.colors.accentColor};
  background-color: transparent;
  color: #efede8;
  font-size: 14;
  &:focus,
  &:hover {
    outline: none;
    border-color: ${i=>i.theme.colors.orangeColor};
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 341px;
  }
`,R=t.div`
  display: inline-flex;
  align-items: flex-end;
  margin-top: 20px;
  gap: 14px;
`,fe=t.div`
  @media screen and (min-width: 768px) {
    margin-right: 14px;
  }
`,b=t.div`
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
    color: ${i=>i.theme.colors.accentColor};
  }

  input[type='number']:focus + label,
  input[type='number']:not(:placeholder-shown) + label {
    color: ${i=>i.theme.colors.accentColor};
    transform: translateY(-44px);
  }
`,m=t.input`
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
    border-color: ${i=>i.theme.colors.orangeColor};
  }
`,ve=t.div`
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
    border: 2px solid ${i=>i.theme.colors.orangeLightColor};
    background-color: ${i=>i.theme.colors.orangeLightColor};
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    top: 7px;
    left: 4px;
    z-index: 2;
  }

  .radio-input:checked + .radio-label::before {
    border-color: ${i=>i.theme.colors.orangeLightColor};
  }

  .radio-input:checked + .radio-label::after {
    opacity: 1;
  }
`,ye=t.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`,je=t.button`
  margin: 40px 0px 44px 20px;
  padding: 12px 40px;
  border-radius: 12px;
  background: ${i=>i.theme.colors.orangeColor};
  color: #EFEDE8;

  &:disabled{
    color: rgba(239, 237, 232, 0.6);
    cursor: default;
  }

  @media screen and (min-width: 768px) {
    margin: 40px 0px 54px 0;
    padding: 16px 50px;
  }
`,we=t.button`
  margin: 40px 0px 44px 20px;
  /* margin-left: 10px ; */
  padding: 12px 40px;
  border-radius: 12px;
  background: ${i=>i.theme.colors.orangeColor};
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
`,Ce=({selectedDate:i,setSelectedDate:a})=>{const s=p=>{a(p),x()},[l,o]=c.useState(!1),d=()=>{o(p=>!p)},x=()=>{o(!1)};return e.jsxs(Z,{children:[e.jsx("label",{htmlFor:"datePicker",children:"Date of birth"}),e.jsx(_,{width:"18",height:"18",onClick:d,cursor:"pointer",children:e.jsx("use",{href:l?`${k}#icon-calendar`:`${k}#icon-calendar-white`})}),e.jsx(ee,{selected:i,onChange:s,customInput:e.jsx(m,{style:{cursor:"text"}}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:p=>p.substring(0,2),open:l,onClickOutside:x,cursor:"pointer"}),e.jsx(ie,{})]})},f=({id:i,name:a,value:s,checked:l,label:o,onChange:d})=>e.jsxs("div",{className:"radio",children:[e.jsx("input",{className:"radio-input",type:"radio",id:i,name:a,value:s,checked:l,onChange:d}),e.jsx("label",{className:"radio-label",htmlFor:i,children:o})]}),$e=()=>{const i=v(),a=y(j);console.log(a);const s=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],l=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],o=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],d=J().shape({name:K().required(),height:u().positive("Height must be positive").min(150,"Should be at least 1,5m").required("Height is required"),currentWeight:u().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Current weight is required"),desiredWeight:u().positive("Weight must be positive").min(35,"Should be at least 35kg").required("Desired weight is required"),birthday:Q().required("Birthday is required")}),x={name:a.name||"Name",height:a.height||"150",currentWeight:a.currentWeight||"35",desiredWeight:a.desiredWeight||"35",birthday:a.birthday||"2005-01-01",blood:(a.blood??"1").toString()||"1",sex:a.sex||"male",levelActivity:(a.levelActivity??"1").toString()||"1"},p=r=>{i(N(r)),w(!1)},[D,w]=c.useState(!1),z=r=>{w(!0)},A=()=>{B();const r=a.email;console.log({email:r}),i(M({email:r}))},[E,U]=c.useState(null),[C,$]=c.useState(!1),[V,S]=c.useState(null),[q,T]=c.useState(!1),B=()=>{$(!0),S(60),U(setInterval(()=>{S(r=>r===1?(clearInterval(E),$(!1),T(!0),null):r-1)},1e3))},O=C?`Try again in ${V}`:q?"Send again":"Verify";return e.jsx(X,{initialValues:x,validationSchema:d,onSubmit:p,children:r=>e.jsxs(be,{onChange:z,children:[e.jsxs(ue,{children:[e.jsxs("div",{style:{width:"100%"},children:[e.jsx(F,{children:"Name"}),e.jsx(h,{name:"name",type:"text",placeholder:"Your name",as:I})]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx(F,{children:"Email"}),e.jsx(I,{type:"text",name:"email",defaultValue:a.email,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0})]})]}),e.jsxs(R,{children:[e.jsxs(b,{children:[e.jsx(h,{type:"number",name:"height",id:"height",placeholder:"",as:m}),e.jsx("label",{htmlFor:"height",children:"Height"})]}),e.jsx(fe,{children:e.jsxs(b,{children:[e.jsx(h,{type:"number",name:"currentWeight",id:"currentWeight",placeholder:"",as:m}),e.jsx("label",{htmlFor:"currentWeight",children:"Current Weight"})]})})]}),e.jsxs(R,{children:[e.jsxs(b,{children:[e.jsx(h,{type:"number",name:"desiredWeight",id:"desiredWeight",placeholder:"",as:m}),e.jsx("label",{htmlFor:"desiredWeight",children:"Desired Weight"})]}),e.jsx(Ce,{selectedDate:r.values.birthday,setSelectedDate:n=>{r.setFieldValue("birthday",n.toISOString())}})]}),e.jsxs(ve,{children:[e.jsxs("div",{style:{display:"flex",marginRight:"20px"},children:[e.jsx("div",{style:{display:"flex",marginRight:"20px"},children:s.map(n=>e.jsx(f,{id:n.id,name:"blood",value:n.value,checked:r.values.blood===n.value,label:n.label,onChange:()=>r.setFieldValue("blood",n.value)},n.id))}),e.jsx("div",{style:{display:"flex"},children:l.map(n=>e.jsx(f,{id:n.id,name:"sex",value:n.value,checked:r.values.sex===n.value,label:n.label,onChange:()=>r.setFieldValue("sex",n.value)},n.id))})]}),e.jsx(ye,{children:o.map(n=>e.jsx(f,{id:n.id,name:"levelActivity",value:n.value,checked:r.values.levelActivity===n.value,label:n.label,onChange:()=>r.setFieldValue("levelActivity",n.value)},n.id))})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start"},children:[e.jsx(je,{type:"submit",disabled:!D,children:"Save"}),e.jsx(we,{type:"submit",disabled:C,onClick:A,style:{display:a.verify?"none":"inline-block"},children:O})]})]})})},Se=t.p`
  /* color: ${i=>i.theme.colors.whiteColor}; */
  color: ${i=>i.theme.colors.accentColor};
  font-family: 'RobotoRegular';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  
`,ke=t.div`
  display: flex;
  justify-content: center;
`,We=t.svg`
  width: 24px;
  height: 24px;
`,Fe=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 24px;
  height: 24px;
  background-color: var(--beige-color);
`,Ie=t.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 440px;
  }
`,Re=()=>e.jsx(ke,{children:e.jsxs(Ie,{children:[e.jsx(Fe,{children:e.jsx(We,{children:e.jsx("use",{href:`${g}#icon-exclamation`})})}),e.jsx(Se,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})}),De=t.div`
 margin-left: 20px;
  margin-right: 20px;
  /* padding-top: 40px; */

  /* @media screen and (min-width: 768px) {
    padding-top: 72px;
  } */

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 96px;
    margin-right: 96px;
  }
`,ze=t.h2`
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
`,Ae=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`,Ee=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Ue=t.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 100px;
  }
`,Be=()=>{const i=y(j),a=v();c.useEffect(()=>{a(P())},[a]);const{isRefreshing:s}=H();return s?e.jsx("b",{children:"Refreshing user..."}):e.jsx(Y,{children:e.jsxs(De,{children:[e.jsx(ze,{children:"Profile Setings"}),e.jsxs(Ee,{children:[e.jsxs("div",{children:[e.jsx(ge,{}),e.jsxs(Ae,{children:[e.jsx(W,{iconId:"icon-fork-knife",text:"Daily calorie intake",value:i.bmr}),e.jsx(W,{iconId:"icon-dumbbell",text:"Daily physical activity",value:i.timeSport,amoutName:"min"})]}),e.jsx(Re,{})]}),e.jsx(Ue,{children:e.jsx($e,{})})]})]})})};export{Be as default};
