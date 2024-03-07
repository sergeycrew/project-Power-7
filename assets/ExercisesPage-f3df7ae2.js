import{u as t,N as a,B as s,j as i,D as d,O as r}from"./index-5b8909dd.js";const p=t.div`
    
    
    max-width: 1440px;
    margin-bottom: 40px;
   


    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        gap: 32px;
        margin-bottom: 64px;
    }
`,x=t.div`
    display: flex;
    gap: 28px;

    @media screen and (min-width: 768px) {
        gap: 32px;
        
    }
`,o=t(a)`
color: rgba(239, 237, 232, 0.40);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.28; 
    position: relative; 
    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5; 
    }
    
    &.active::after {
        display: block;
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        left: 0;
        bottom: -8px;
        
        background-color: #EF8964;
        border-radius: 2px;

        @media screen and (min-width: 768px) {
            bottom: 5px;
    }
    }

    &.active {
    color: #efede8;
    }
`,c=t.h1`
font-size: 24px;
 text-transform: capitalize;
 margin-bottom: 20px;

 @media screen and (min-width: 768px) {
        font-size: 32px;
        margin-bottom: 0px;
    }

`,m=t.h1`
font-size: 24px;
margin-bottom: 20px;



@media screen and (min-width: 768px) {
        font-size: 32px;
        margin-bottom: 0px;

    }
`,h=()=>{const{filter:e}=s();return i.jsxs(p,{children:[e?i.jsxs(c,{children:[" ",e," "]}):i.jsx(m,{children:" Exercises "}),i.jsxs(x,{children:[i.jsx(o,{to:"bodyPart",children:"Body parts"}),i.jsx(o,{to:"target",children:"Muscles"}),i.jsx(o,{to:"equipment",children:"Equipment"})]})]})},g=t.div`
padding-top: 40px;
padding-bottom: 80px;

@media screen and (min-width: 768px) {
    padding-top: 72px;
    }
`,l=t.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 62px 20px 20p 20px;

  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 84px 32px 0 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 100vh;
    padding: 84px 96px 0 96px;
  }
`,b="/project-Power-7/assets/exercises-desktop-1x-6d697564.png",u="/project-Power-7/assets/exercises-desktop-2x-a7c1451e.png",w=t.div`
  @media (min-width: 1440px) {
    height: 100vh;
    width: 100%;
    position: relative;
  }
`,v=t.div`
  @media (min-width: 1440px) {
    width: 100%;
    height: 100vh;
    min-height: 780px;
    ${e=>e.hideFilter?"":"min-height: 850px;"}

    position: absolute;
    z-index: -5;

    display: flex;
    justify-content: right;
    gap: 101px;
  }
`,f=t.div`
  ${e=>e.hideFilter?"display: none;":""}
  @media (min-width: 1440px) {
    width: 30%;
    ${e=>e.hideFilter?"":"width: 35%;"}

    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%),
      url(${b});

    background-size: cover;
    background-repeat: no-repeat;
    background-position: right top;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background: linear-gradient(
            89deg,
            #040404 1.1%,
            rgba(4, 4, 4, 0) 70.79%
          ),
          url(${u});

        background-size: cover;
        background-repeat: no-repeat;
        background-position: right bottom;
      }
    }
  }
`,j=({children:e,hideFilter:n})=>i.jsxs(w,{children:[i.jsx(v,{children:i.jsx(f,{hideFilter:n})}),e]}),y=()=>{const n=d().pathname.length<21;return i.jsx(j,{isFilter:n,children:i.jsx(l,{children:i.jsxs(g,{children:[i.jsx(h,{}),i.jsx(r,{})]})})})};export{y as default};
