import * as s from './ModalSuccessProduct.styled';
import sprite from '../../images/sprite/sprite.svg';
import { useSelector } from 'react-redux';
import { selectCategoriesImg } from '../../redux/products/productsSelectors';

export const ModalSuccessProduct = ({ calories, onClose }) => {
  const img = useSelector(selectCategoriesImg);
  return (
    <s.CustomModale
      modalStyles={{ maxWidth: '335px', width: '100%', height: '384px' }}
      modalTabletStyles={{ width: '430px', height: '439px' }}
      modalDesktopStyles={{ width: '430px', height: '439px' }}
      onClose={onClose}
    >
      <s.Wrapper>
        <s.Img src={img} alt="Category Image" />

        <s.TextWrapper>
          <s.Title>Well done</s.Title>
          <ul>
            <s.Text>
              Calories:<s.Value>{calories ? calories : 0}</s.Value>
            </s.Text>
          </ul>
        </s.TextWrapper>

        <s.MainButton onClick={onClose}>Next product </s.MainButton>

        <s.CustomLink to={'/diary'}>
          To the diary
          <svg width=" 16px" height="16px">
            <use href={`${sprite}#arrow_gray`}></use>
          </svg>
        </s.CustomLink>
      </s.Wrapper>
    </s.CustomModale>
  );
};
