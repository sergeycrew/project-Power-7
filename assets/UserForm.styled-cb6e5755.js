import{u as e}from"./index-ada82ef5.js";import{F as r,E as i}from"./formik.esm-dcbbb18d.js";const a=e.div`
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
  }
`,p=e(r)`
  /* margin-top: 20px; */

  @media screen and (min-width: 768px) {
  }
`,d=e(i)`
  position: absolute;
  top: 48px;
  left: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: ${o=>o.theme.colors.errorColor};

  @media screen and (min-width: 1440px) {
    top: 52px;
  }
`,l=e.p`
  color: ${o=>o.theme.colors.accentColor};
  margin-bottom: 4px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,s=e.input`
  max-width: 335px;
  width: 100%;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${o=>o.theme.colors.accentColor};
  background-color: transparent;
  color: #efede8;
  font-size: 14;
  &:focus,
  &:hover {
    outline: none;
    border-color: ${o=>o.theme.colors.orangeColor};
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 341px;
  }
`,x=e.div`
  display: inline-flex;
  align-items: flex-end;
  margin-top: 20px;
  gap: 14px;
`,c=e.div`
  @media screen and (min-width: 768px) {
    margin-right: 14px;
  }
`,m=e.div`
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
    color: ${o=>o.theme.colors.accentColor};
  }

  input[type='number']:focus + label,
  input[type='number']:not(:placeholder-shown) + label {
    color: ${o=>o.theme.colors.accentColor};
    transform: translateY(-44px);
  }
`,g=e.input`
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
    border-color: ${o=>o.theme.colors.orangeColor};
  }


   
`,h=e.div`
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
    border: 2px solid ${o=>o.theme.colors.orangeLightColor};
    background-color: ${o=>o.theme.colors.orangeLightColor};
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    top: 7px;
    left: 4px;
    z-index: 2;
  }

  .radio-input:checked + .radio-label::before {
    border-color: ${o=>o.theme.colors.orangeLightColor};
  }

  .radio-input:checked + .radio-label::after {
    opacity: 1;
  }
`,b=e.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`,u=e.button`
  margin: 40px 0px 44px 20px;
  padding: 12px 40px;
  border-radius: 12px;
  background: ${o=>o.theme.colors.orangeColor};
  color: #EFEDE8;

  &:disabled{
    color: rgba(239, 237, 232, 0.6);
    cursor: default;
  }

  @media screen and (min-width: 768px) {
    margin: 40px 0px 54px 0;
    padding: 16px 50px;
  }
`;e.button`
  margin: 40px 0px 44px 20px;
  /* margin-left: 10px ; */
  padding: 12px 40px;
  border-radius: 12px;
  background: ${o=>o.theme.colors.orangeColor};
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
`;export{u as B,a as C,d as F,g as I,p as S,x as W,l as a,s as b,m as c,c as d,h as e,b as f};
