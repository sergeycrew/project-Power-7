import { useDispatch, useSelector } from 'react-redux';
import { DayCommonItemTitle } from '../DayCommonItemTitle/DayCommonItemTitle';
import * as s from './DayProductsItem.styled';
import icons from '../../images/sprite/sprite.svg';
import {
  deleteProduct,
  fetchAllDairyInfo,
} from '../../redux/diary/diaryOperations';
import { selectUser } from '../../redux/auth/authSelectors';
import { findRecommendedProduct } from '../../Helpers/GlobalOperations';
import { selectCurrentDate } from '../../redux/diary/diarySelectors';

export const DayProductItem = ({ isFirstItem, value }) => {
  const dispatch = useDispatch();
  let currentTime = useSelector(selectCurrentDate);
  const user = useSelector(selectUser);
  let recommended = findRecommendedProduct(
    value.productId.groupBloodNotAllowed[user.blood]
  );

  const handleDeleteProduct = () => {
    const objForDelete = {
      date: currentTime,
      productId: value._id,
      calories: value.calories,
      amount: value.amount,
    };

    // dispatch(deleteProduct(objForDelete));
    // // Виклик колбек-функції, щоб сповістити про видалення продукту
    // if (onProductDelete) {
    //   onProductDelete();
    // }
    dispatch(deleteProduct(objForDelete)).then(() => {
      dispatch(fetchAllDairyInfo({ date: currentTime }));
    });
    // Виклик колбек-функції, щоб сповістити про видалення продукту
  };

  // const objForDelete = {
  //   date: currentTime,
  //   productId: value._id,
  //   calories: value.calories,
  //   amount: value.amount,
  // };

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
          <s.DayItemContent>{value.calories}</s.DayItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Weight
          </DayCommonItemTitle>
          <s.DayItemContent>{value.amount}</s.DayItemContent>
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
        // onClick={() => dispatch(deleteProduct(objForDelete))}
        onClick={handleDeleteProduct}
        aria-label="delete=button"
      >
        <s.DeleteIcon>
          <use href={`${icons}#trash`}></use>
        </s.DeleteIcon>
      </s.DeleteButton>
    </s.ItemProductWrapper>
  );
};
