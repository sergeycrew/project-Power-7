import{u as o,j as t,s as a,d as h,a as p,z as u,A as m,g as $}from"./index-94108dce.js";import{F as j,a as b,E as y,c as v,b as r,d as w}from"./index.esm-183402c9.js";const _=e=>e.productList.items,C=e=>e.productList.isLoading,k=e=>e.$recommended?e.theme.colors.recommendedColor:e.theme.colors.notRecommendedColor,F=o.div`
  height: 141px;
  width: 405px;
  padding: ${e=>e.theme.spacing(4)};
  border: 1px solid ${e=>e.theme.colors.cardBorderColor};
  border-radius: ${e=>e.theme.radii.ld};
  background-color: ${e=>e.theme.colors.cardBgColor};
  word-wrap: break-word;
`,S=o.div`
  display: flex;
  margin-bottom: ${e=>e.theme.spacing(6)};
  align-items: baseline;
  justify-content: space-between;
`,L=o.span`
  margin-right: auto;
  border-radius: ${e=>e.theme.radii.sd};
  padding: 7.5px 5px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${e=>e.theme.colors.cardBgColor};
`,P=o.span`
  margin-right: ${e=>e.theme.spacing(2)};
  display: block;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${k};
`,c=o.p`
  margin-right: ${e=>e.theme.spacing(4)};
  color: ${e=>e.theme.colors.whiteColor};

  &::first-letter {
    text-transform: uppercase;
  }
`,T=o.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  color: ${e=>e.theme.colors.hoverColor};
  background: transparent;
`,B=o.svg`
  margin-left: ${e=>e.theme.spacing(2)};
  width: 16px;
  height: 16px;
`,E=o.div`
  display: flex;
  column-gap: ${e=>e.theme.spacing(4)};
  height: 32px;
  overflow-y: hidden;
  margin-bottom: ${e=>e.theme.spacing(2)};
`,z=o.p`
  font-size: 24px;
  &::first-letter {
    text-transform: uppercase;
  }
`,R=o.svg`
  width: 24px;
  height: 24px;
`,W=o.div`
  display: flex;
  height: 18px;
  overflow-y: hidden;
`,s=o.p`
  margin-right: ${e=>e.theme.spacing(1)};
  color: ${e=>e.theme.colors.captionColor};
`,A=({product:{id:e,title:i,calories:l,category:x,weight:g,recommended:f=!0}})=>t.jsxs(F,{children:[t.jsxs(S,{children:[t.jsx(L,{children:"diet"}),t.jsx(P,{$recommended:f}),t.jsx(c,{children:t.jsx("b",{children:f?"Recommended":"Not recommended"})}),t.jsxs(T,{children:["Add",t.jsx(B,{children:t.jsx("use",{href:`${a}#icon-arrow-right`})})]})]}),t.jsxs(E,{children:[t.jsx(R,{children:t.jsx("use",{href:`${a}#icon-run-exercises`})}),t.jsx(z,{children:i})]}),t.jsxs(W,{children:[t.jsx(s,{children:"Calories:"})," ",t.jsx(c,{children:l}),t.jsx(s,{children:"Category: "})," ",t.jsx(c,{children:x}),t.jsx(s,{children:"Weight:"})," ",t.jsx(c,{children:g})]})]}),M=o.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  color: #efede8;
  row-gap: 32px;
  column-gap: 16px;
`,I=()=>{const e=h(_);return t.jsx(M,{children:e.map(i=>t.jsx("li",{children:t.jsx(A,{product:i})},i._id))})},D=o(j)`
  display: flex;
  gap: ${e=>e.theme.spacing(4)};
`,N=o.p`
  color: ${e=>e.theme.colors.fornCaptionColor};
  font-size: 14px;
  text-align: right;
`,d=o(b)`
  padding: ${e=>e.theme.spacing(3)};
  color: ${e=>e.theme.colors.whiteColor};
  border: 1px solid ${e=>e.theme.colors.cardBorderColor};
  border-radius: ${e=>e.theme.radii.ld};
  /* background-color: #1c1c1c; */
  background: transparent;

  &::placeholder {
    color: inherit;
  }

  .options {
    background-color: #1c1c1c;
  }
`,O=o.button`
  background: transparent;
`,V=o.svg`
  width: 18px;
  height: 18px;
`,n=o(y)`
  color: ${e=>e.theme.colors.orangeColor};
  font-size: 14px;
`,q=[{_id:{$oid:"65e1c02cf5886fc9ad5f5fb9"},title:"alcoholic drinks"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fba"},title:"berries"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fbb"},title:"cereals"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fbc"},title:"dairy"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fbd"},title:"dried fruits"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fbe"},title:"eggs"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fbf"},title:"fish"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc0"},title:"flour"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc1"},title:"fruits"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc2"},title:"meat"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc3"},title:"mushrooms"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc4"},title:"nuts"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc5"},title:"oils and fats"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc6"},title:"poppy"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc7"},title:"sausage"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc8"},title:"seeds"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc9"},title:"sesame"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fca"},title:"soft drinks"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fcb"},title:"vegetables and herbs"}],G=v().shape({title:r().min(3,"Too Short!"),category:r().strict(!0).oneOf(["dairy","berries","fish"]),type:r().strict(!0).oneOf(["all","recommended","not recommended"])}),H=()=>{const e=p();return t.jsxs("div",{children:[t.jsx(N,{children:"Filters"}),t.jsx(w,{initialValues:{title:"",category:"",type:""},validationSchema:G,onSubmit:(i,l)=>{e(u(i)),e(m())},children:t.jsxs(D,{children:[t.jsxs("label",{children:[t.jsx(d,{name:"title",placeholder:"Search"}),t.jsx(n,{name:"title",component:"span"})]}),t.jsxs("label",{children:[t.jsx(d,{as:"select",name:"category",children:q.map(i=>t.jsx("option",{id:i._id.$oid,name:"category",value:i.title,children:i.title},i._id.$oid))}),t.jsx(n,{name:"category",component:"span"})]}),t.jsxs("label",{children:[t.jsxs(d,{as:"select",name:"type",children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"recommended",children:"Recommended"}),t.jsx("option",{value:"not recommended",children:"Not recommended"})]}),t.jsx(n,{name:"type",component:"span"})]}),t.jsx(O,{type:"submit",children:t.jsx(V,{children:t.jsx("use",{href:`${a}#icon-search`})})})]})})]})},J=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing(7)};
`,K=o.h2`
  color: ${e=>e.theme.colors.whiteColor};
  font-size: 32px;
`;o.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const X=()=>{const e=p();return h(C),$.useEffect(()=>{e(m())},[e]),t.jsxs("div",{children:[t.jsxs(J,{children:[t.jsx(K,{children:"Products"}),t.jsx(H,{})]}),t.jsx(I,{})]})};export{X as default};
