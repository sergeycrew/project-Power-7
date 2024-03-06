import { DayCommonItemTitle } from '../DayCommonItemTitle/DayCommonItemTitle';
import * as s from './DayProductsItem.styled';
import icons from '../../images/sprite/sprite.svg';
// import { useEffect, useRef, useState } from 'react';

export const DayProductItem = () => {
  // const isMounted = useRef(false);
  // console.log(isMounted);
  // const [firstRender, setFirstRender] = useState(true);

  // useEffect(() => {
  //   if (isMounted.current) {
  //     // Логіка, яка виконається після пізнішого рендерингу компонента
  //     console.log(isMounted);
  //   } else {
  //     // Логіка, яка виконається після першого рендерингу компонента
  //     console.log('Компонент зарендерився!');
  //     isMounted.current = true;
  //     setFirstRender(false);
  //   }
  // }, []);

  return (
    <s.ItemProductWrapper>
      <s.ProductsContainer>
        <s.ListItem>
          {/* {(isMobile || firstRender) && ( */}
          <DayCommonItemTitle>Title</DayCommonItemTitle>
          {/* )} */}
          <s.DayItemContent>Black bread</s.DayItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle>Category</DayCommonItemTitle>
          <s.DayItemContent>Black bread</s.DayItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle>Calories</DayCommonItemTitle>
          <s.DayItemContent>200</s.DayItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle>Weight</DayCommonItemTitle>
          <s.DayItemContent>200</s.DayItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle>Recommend</DayCommonItemTitle>
          <s.DayItemContent
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <s.RecomendalDot></s.RecomendalDot>
            <span>Yes</span>
          </s.DayItemContent>
        </s.ListItem>
      </s.ProductsContainer>
      <s.DeleteButton>
        <s.DeleteIcon>
          <use href={`${icons}#trash`}></use>
        </s.DeleteIcon>
      </s.DeleteButton>
    </s.ItemProductWrapper>
  );
};

// export const DayProductItem = () => {
//   return (
//     <s.ProductsContainer>
//       <s.ListItem>
//         <s.DayItemTitle>Title</s.DayItemTitle>
//         <s.DayProductTitleContent>Black bread</s.DayProductTitleContent>
//       </s.ListItem>
//       <s.ListItem>
//         <s.DayItemTitle>Category</s.DayItemTitle>
//         <s.DayCategoryContent>Black bread</s.DayCategoryContent>
//       </s.ListItem>
//       <s.ListItem>
//         <s.DayItemTitle>Calories</s.DayItemTitle>
//         <s.DayCaloriesContent>200</s.DayCaloriesContent>
//       </s.ListItem>
//       <s.ListItem>
//         <s.DayItemTitle>Weight</s.DayItemTitle>
//         <s.DayWeightContent>200</s.DayWeightContent>
//       </s.ListItem>
//       <s.ListItem>
//         <s.DayItemTitle>Recommend</s.DayItemTitle>
//         <s.DayRecommendContent>
//           <s.RecomendalDot></s.RecomendalDot>
//           <span>Yes</span>
//         </s.DayRecommendContent>
//       </s.ListItem>
//     </s.ProductsContainer>
//   );
//   // {
//   //   /* <s.DeleteButton>
//   //       <s.DeleteIcon>
//   //         <use href={`${icons}#icon-trash`}></use>
//   //       </s.DeleteIcon>
//   //     </s.DeleteButton> */
//   // }
// };
