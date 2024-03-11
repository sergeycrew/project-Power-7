import{u as n,r as h,w as m,j as o}from"./index-5a3dae94.js";import{i as x}from"./sprite-71e31d01.js";const u=n.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(10, 10, 10, 0.495);

  z-index: 10000;
`,w=n.div`
  position: relative;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 600px;
  height: 300px;
  /* padding: 40px; */
  max-height: 95%;
  overflow-y: auto;

  background-color: #10100f;
  border-radius: 12px;
  border: 1px solid #efede820;
  text-align: center;

  @media screen and (max-width: 374px) {
    ${t=>t.theme.modal320Styles}
  }

  ${t=>t.theme.modalStyles}

  @media screen and (min-width: 768px) {
    ${t=>t.theme.modalTabletStyles}
  }
  @media screen and (min-width: 1440px) {
    ${t=>t.theme.modalDesktopStyles}
  }
`,y=n.button`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 14px;
  right: 14px;
  background-color: #10100f;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
  
  width: 26px;
  height: 26px;
}
`,b=document.querySelector("#modal-root"),k=({onClose:t,children:i,modalStyles:r,modalTabletStyles:s,modalDesktopStyles:a,modal320Styles:c})=>{const d=window.scrollY,l=e=>{e.currentTarget===e.target&&t()};return h.useEffect(()=>{const e=p=>{p.code==="Escape"&&t()};return document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top=`-${d}px`,window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e),document.body.style.position="",window.scrollTo(0,d),document.body.style.top="",document.body.style.width=""}},[t,d]),m.createPortal(o.jsx(u,{onClick:l,children:o.jsxs(w,{theme:{modal320Styles:c,modalStyles:r,modalTabletStyles:s,modalDesktopStyles:a},children:[o.jsx(y,{type:"button",onClick:t,children:o.jsx("svg",{width:"20",height:"20",stroke:"white",children:o.jsx("use",{href:x+"#icon-x"})})}),i]})}),b)};export{k as C};
