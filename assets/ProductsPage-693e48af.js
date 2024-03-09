import{u as i,a as g,j as t,s as a,B as w,D as u,b as p,e as j}from"./index-fe4668e7.js";import{u as v}from"./formik.esm-1d1b6046.js";const y=e=>e.productList.items,C=e=>e.productList.containsProducts,S=e=>e.productList.isLoading,_=[{_id:{$oid:"65e1c02cf5886fc9ad5f5fb9"},title:"alcoholic drinks"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fba"},title:"berries"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fbb"},title:"cereals"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fbc"},title:"dairy"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fbd"},title:"dried fruits"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fbe"},title:"eggs"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fbf"},title:"fish"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc0"},title:"flour"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc1"},title:"fruits"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc2"},title:"meat"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc3"},title:"mushrooms"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc4"},title:"nuts"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc5"},title:"oils and fats"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc6"},title:"poppy"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc7"},title:"sausage"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc8"},title:"seeds"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fc9"},title:"sesame"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fca"},title:"soft drinks"},{_id:{$oid:"65e1c02cf5886fc9ad5f5fcb"},title:"vegetables and herbs"}],k=i.form`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing(4)};
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;i.p`
  color: ${e=>e.theme.colors.fornCaptionColor};
  font-size: 14px;
  text-align: right;
`;const P=i.input`
  width: 100%;
  padding: ${e=>e.theme.spacing(3)};
  color: ${e=>e.theme.colors.whiteColor};
  border: 1px solid ${e=>e.theme.colors.cardBorderColor};
  border-radius: ${e=>e.theme.radii.ld};
  outline: none;
  background: transparent;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.29em;
  &::placeholder {
    color: inherit;
  }

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.hoverColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5em;
  }
`,z=i.button`
  height: 18px;
  position: absolute;
  padding: 0px;
  border-color: transparent;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    right: 36px;
    top: 14px;
  }

  @media screen and (min-width: 768px) {
    left: 238px;
  }

  @media screen and (min-width: 1440px) {
    left: 168px;
  }
`,F=i.svg`
  width: 18px;
  height: 18px;
  stroke: #e6533c;
`,L=i.button`
  height: 18px;
  position: absolute;
  padding: 0px;
  border-color: transparent;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    right: 14px;
    top: 14px;
  }

  @media screen and (min-width: 768px) {
    left: 260px;
  }

  @media screen and (min-width: 1440px) {
    left: 192px;
  }
`,B=i.svg`
  width: 18px;
  height: 18px;
`,W=i.div`
  display: flex;
  gap: ${e=>e.theme.spacing(4)};
`,h=i.select`
  padding: ${e=>e.theme.spacing(3)};
  color: ${e=>e.theme.colors.whiteColor};
  border: 1px solid ${e=>e.theme.colors.cardBorderColor};
  border-radius: ${e=>e.theme.radii.ld};
  outline: none;
  background: transparent;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.29em;
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5em;
  }
`,T="_prodFilterCategorySlct_1jl47_1",m={prodFilterCategorySlct:T},R=()=>{const e=g(),o=v({initialValues:{title:"",category:"",type:""},onSubmit:r=>n(r)}),n=r=>{console.log("paramsSearch",r),e(w(r)),e(u())},c=r=>{o.handleChange(r);const{initialValues:d,values:$}=o;if(r.target.value!==d[r.target.value]){const b={...$,[r.target.name]:r.target.value};n(b)}};return t.jsxs(k,{onSubmit:o.handleSubmit,children:[t.jsx(P,{type:"text",name:"title",placeholder:"Search",value:o.values.title,onChange:o.handleChange}),o.values.title!==""&&t.jsx(z,{type:"button",onClick:()=>{o.setFieldValue("title",""),o.handleSubmit()},children:t.jsx(F,{children:t.jsx("use",{href:`${a}#icon-x`})})}),t.jsx(L,{type:"submit",children:t.jsx(B,{children:t.jsx("use",{href:`${a}#icon-search`})})}),t.jsxs(W,{children:[t.jsxs(h,{className:m.prodFilterCategorySlct,name:"category",value:o.values.category,onChange:c,children:[t.jsx("option",{value:"",children:"Categories"}),_.map(r=>t.jsx("option",{value:r.title,children:r.title},r._id.$oid))]}),t.jsxs(h,{className:m.prodFilterCategorySlct,name:"type",value:o.values.type,onChange:c,children:[t.jsx("option",{value:"",children:"All"}),t.jsx("option",{value:"recommended",children:"Recommended"}),t.jsx("option",{value:"not recommended",children:"Not recommended"})]})]})]})},A=e=>e.$recommended?e.theme.colors.recommendedColor:e.theme.colors.notRecommendedColor,D=i.div`
  height: 141px;
  width: 405px;
  padding: ${e=>e.theme.spacing(4)};
  border: 1px solid ${e=>e.theme.colors.cardBorderColor};
  border-radius: ${e=>e.theme.radii.ld};
  background-color: ${e=>e.theme.colors.cardBgColor};
  word-wrap: break-word;
`,E=i.div`
  display: flex;
  margin-bottom: ${e=>e.theme.spacing(6)};
  align-items: baseline;
  justify-content: space-between;
`,N=i.span`
  margin-right: auto;
  border-radius: ${e=>e.theme.radii.sd};
  padding: 7.5px 5px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${e=>e.theme.colors.cardBgColor};
`,I=i.span`
  margin-right: ${e=>e.theme.spacing(2)};
  display: block;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${A};
`,s=i.p`
  margin-right: ${e=>e.theme.spacing(4)};
  color: ${e=>e.theme.colors.whiteColor};

  &::first-letter {
    text-transform: uppercase;
  }
`,V=i.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  color: ${e=>e.theme.colors.hoverColor};
  background: transparent;
`,M=i.svg`
  margin-left: ${e=>e.theme.spacing(2)};
  width: 16px;
  height: 16px;
`,O=i.div`
  display: flex;
  column-gap: ${e=>e.theme.spacing(4)};
  height: 32px;
  overflow-y: hidden;
  margin-bottom: ${e=>e.theme.spacing(2)};
`,X=i.p`
  font-size: 24px;
  &::first-letter {
    text-transform: uppercase;
  }
`,Y=i.svg`
  width: 24px;
  height: 24px;
`,q=i.div`
  display: flex;
  height: 18px;
  overflow-y: hidden;
`,l=i.p`
  margin-right: ${e=>e.theme.spacing(1)};
  color: ${e=>e.theme.colors.captionColor};
`,G=({product:{id:e,title:o,calories:n,category:c,weight:r,recommended:d=!0}})=>t.jsxs(D,{children:[t.jsxs(E,{children:[t.jsx(N,{children:"diet"}),t.jsx(I,{$recommended:d}),t.jsx(s,{children:t.jsx("b",{children:d?"Recommended":"Not recommended"})}),t.jsxs(V,{children:["Add",t.jsx(M,{children:t.jsx("use",{href:`${a}#icon-arrow-right`})})]})]}),t.jsxs(O,{children:[t.jsx(Y,{children:t.jsx("use",{href:`${a}#icon-run-exercises`})}),t.jsx(X,{children:o})]}),t.jsxs(q,{children:[t.jsx(l,{children:"Calories:"})," ",t.jsx(s,{children:n}),t.jsx(l,{children:"Category: "})," ",t.jsx(s,{children:c}),t.jsx(l,{children:"Weight:"})," ",t.jsx(s,{children:r})]})]}),H=i.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  color: #efede8;
  row-gap: 32px;
  column-gap: 16px;
`,J=()=>{const e=p(y);return t.jsx(H,{children:e.map(o=>t.jsx("li",{children:t.jsx(G,{product:o})},o._id))})},K=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 375px) {
    width: 335px;
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    width: 580px;
    margin-top: 92px;
  }
`,x=i.p`
  color: ${e=>e.theme.colors.accentColor};
  @media screen and (min-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,f=i.span`
  color: ${e=>e.theme.colors.orangeColor};
`,Q=()=>t.jsxs(K,{children:[t.jsxs(x,{children:[t.jsx(f,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),t.jsx(x,{children:t.jsx(f,{children:"Try changing the search parameters."})})]}),U=i.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 96px;
    max-width: 1440px;
  }
`,Z=i.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: column;
  margin-bottom: ${e=>e.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${e=>e.theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: ${e=>e.theme.spacing(7)};
  }
`,ee=i.h1`
  margin-bottom: ${e=>e.theme.spacing(8)};
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17em;
  color: ${e=>e.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37em;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;i.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const oe=()=>{const e=g();p(S);const o=p(C);return j.useEffect(()=>{e(u())},[e]),t.jsxs(U,{children:[t.jsxs(Z,{children:[t.jsx(ee,{children:"Products"}),t.jsx(R,{})]}),o?t.jsx(J,{}):t.jsx(Q,{})]})};export{oe as default};
