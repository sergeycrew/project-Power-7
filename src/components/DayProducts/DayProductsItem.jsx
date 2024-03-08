import { useDispatch, useSelector } from 'react-redux';
import { DayCommonItemTitle } from '../DayCommonItemTitle/DayCommonItemTitle';
import * as s from './DayProductsItem.styled';
import icons from '../../images/sprite/sprite.svg';
import { deleteProduct } from '../../redux/diary/diaryOperations';
import { selectUser } from '../../redux/auth/authSelectors';
import { findRecommendedProduct } from '../../Helpers/GlobalOperations';

export const DayProductItem = ({ isFirstItem, value }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // let bloodType = user.blood;
  let recommended = findRecommendedProduct(
    value.productId.groupBloodNotAllowed[user.blood]
  );

  return (
    <s.ItemProductWrapper>
      <s.ProductsContainer>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Title
          </DayCommonItemTitle>
          <s.DayItemContent>{value.productId.title}</s.DayItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Category
          </DayCommonItemTitle>
          <s.DayItemContent>{value.productId.category}</s.DayItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Calories
          </DayCommonItemTitle>
          <s.DayItemContent>{value.productId.calories}</s.DayItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Weight
          </DayCommonItemTitle>
          <s.DayItemContent>{value.productId.weight}</s.DayItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Recommend
          </DayCommonItemTitle>
          <s.DayItemContent
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <s.RecomendalDot $color={recommended.color}></s.RecomendalDot>
            <span>{recommended.text}</span>
          </s.DayItemContent>
        </s.ListItem>
      </s.ProductsContainer>
      <s.DeleteButton
        type="button"
        onClick={() => dispatch(deleteProduct(value.productId._id))}
      >
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
