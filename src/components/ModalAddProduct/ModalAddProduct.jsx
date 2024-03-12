import {  useState } from 'react';
import { useDispatch } from 'react-redux';
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

export const AddProductToDiary = ({onToggle, exerciseInfo}) => {
  console.log(exerciseInfo)
  const dispatch = useDispatch();
  const { weight, calories, _id, title } = exerciseInfo;
  const [addWeight, setAddWeight] = useState(weight);
  const totalCalories = Math.round((addWeight * calories) / 100);

  const handleSubmitProduct = () => {

    if (!totalCalories) {
      return
    }
  const diaryProduct = {
    productId: _id,
    amount: addWeight,
    calories: totalCalories,
  };
    console.log(diaryProduct)
    dispatch(featchAddProducts(diaryProduct));
    onToggle()
}

  return (
    <CustomModalWrap

      modalStyles={{ maxWidth: '479px', width: '100%', height: '280px' }}
      modalTabletStyles={{ width: '479', height: '291px' }}
      modalDesktopStyles={{ width: '479px', height: '286px' }}
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
