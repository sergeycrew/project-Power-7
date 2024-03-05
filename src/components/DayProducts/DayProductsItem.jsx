import { DayCommonItemTitle } from '../DayCommonItemTitle/DayCommonItemTitle';
import * as s from './DayProductsItem.styled';
// import icons from '../../images/sprite.svg';

export const DayProductItem = () => {
  return (
    <s.ProductsContainer>
      <s.ListItem>
        <DayCommonItemTitle>Title</DayCommonItemTitle>
        <s.DayProductTitleContent>Black bread</s.DayProductTitleContent>
      </s.ListItem>
      <s.ListItem>
        <DayCommonItemTitle>Category</DayCommonItemTitle>
        <s.DayCategoryContent>Black bread</s.DayCategoryContent>
      </s.ListItem>
      <s.ListItem>
        <DayCommonItemTitle>Calories</DayCommonItemTitle>
        <s.DayCaloriesContent>200</s.DayCaloriesContent>
      </s.ListItem>
      <s.ListItem>
        <DayCommonItemTitle>Weight</DayCommonItemTitle>
        <s.DayWeightContent>200</s.DayWeightContent>
      </s.ListItem>
      <s.ListItem>
        <DayCommonItemTitle>Recommend</DayCommonItemTitle>
        <s.DayRecommendContent>
          <s.RecomendalDot></s.RecomendalDot>
          <span>Yes</span>
        </s.DayRecommendContent>
      </s.ListItem>
    </s.ProductsContainer>
  );
  // {
  //   /* <s.DeleteButton>
  //       <s.DeleteIcon>
  //         <use href={`${icons}#icon-trash`}></use>
  //       </s.DeleteIcon>
  //     </s.DeleteButton> */
  // }
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
