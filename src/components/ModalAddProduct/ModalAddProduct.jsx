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

export const AddProductToDiary = () => {

  return (
    <CustomModalWrap

      modalStyles={{ maxWidth: '479px', width: '100%', height: '280px' }}
      modalTabletStyles={{ width: '479', height: '291px' }}
      modalDesktopStyles={{ width: '479px', height: '286px' }}
      //onClose={onClose}
    >
      <ModalWrapper>
        <InputWrapper>
          <InputName
            type="text"
            //value={-}
            readOnly
            disabled
          />
          <GramsSection>
            <InputGrams
              type="number"
              //value={-}
              //onChange={-}
            />
            <Placeholder>grams</Placeholder>
          </GramsSection>
        </InputWrapper>
        <CaloriesWrapper>
          <PCalories>Calories:</PCalories>
          <ValueCalories>{/* {calories} */}</ValueCalories>
        </CaloriesWrapper>
        <BtnWrapper>
          <ButtonAdd
          //onClick={-}
          >
            Add to diary
          </ButtonAdd>
          <ButtonCancel
          // onClick={-}
          >
            Cancel
          </ButtonCancel>
        </BtnWrapper>
      </ModalWrapper>
    </CustomModalWrap>
  );
};
