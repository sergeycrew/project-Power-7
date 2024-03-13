import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  InputName,
  InputGrams,
  PCalories,
  ValueCalories,
  ButtonAdd,
  ButtonCancel,
  ModalWrapper,
  InputWrapper,
  GramsSection,
  Placeholder,
  CaloriesWrapper,
  BtnWrapper,
  CustomModalWrap,
} from './ModalAddProduct.styled';
import {featchAddProducts} from '../../redux/products/productOperations'
import { selectCategories } from '../../redux/products/productsSelectors';
import { addImg } from '../../redux/products/categoriesSlice';

export const AddProductToDiary = ({onToggle, exerciseInfo, setIsSuccessOpen, setDairyProduct}) => {

  const dispatch = useDispatch();
  const { weight, calories, _id, title } = exerciseInfo;
  const [addWeight, setAddWeight] = useState(weight);
  const totalCalories = Math.round((addWeight * calories) / 100);
  const categories = useSelector(selectCategories);
  const imgCategory = categories.filter(
    (categor) => categor.value === exerciseInfo.category
  )[0].img;
  dispatch(addImg(imgCategory));

  const handleSubmitProduct = () => {

    if (!totalCalories) {
      return
    }
  const diaryProduct = {
    productId: _id,
    amount: addWeight,
    calories: totalCalories,
  };

    dispatch(featchAddProducts(diaryProduct));
    setDairyProduct({calories: diaryProduct.calories})
    setIsSuccessOpen();
    onToggle()
}

  return (
    <CustomModalWrap
      modalStyles={{ maxWidth: '479px', width: '100%' }}
      modalTabletStyles={{ width: '479' }}
      modalDesktopStyles={{ width: '479px' }}
      onClose={onToggle}
    >
      <ModalWrapper>
        <InputWrapper>
          <InputName
            type="text" value={title} readOnly disabled />
          <GramsSection>
            <InputGrams
              type="number" value={addWeight} onChange={e => { setAddWeight(e.target.value);}}/>
            <Placeholder>grams</Placeholder>
          </GramsSection>
        </InputWrapper>
        <CaloriesWrapper>
          <PCalories>Calories:</PCalories>
          <ValueCalories>{totalCalories}</ValueCalories>
        </CaloriesWrapper>
        <BtnWrapper>
          <ButtonAdd
          onClick={handleSubmitProduct}
          >
            Add to diary
          </ButtonAdd>
          <ButtonCancel onClick={onToggle}>
            Cancel
          </ButtonCancel>
        </BtnWrapper>
      </ModalWrapper>
    </CustomModalWrap>
  );
};
