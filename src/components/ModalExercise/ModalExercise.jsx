// import { CustomModal } from 'components/CustomModal/CustomModal';
import { MainButton } from 'components/MainButton/MainButton';
import thumb_up from '../../images/thumb-up-1x.png';
import * as s from './ModalExercise.styled';
import sprite from '../../images/sprite.svg';

export const ModalExercise = ({ time, calories, onClick, onClose }) => {
  return (
    <s.CustomModale
      modalStyles={{ maxWidth: '335px', width: '100%', height: '384px' }}
      modalTabletStyles={{ width: '430px', height: '439px' }}
      modalDesktopStyles={{ width: '430px', height: '439px' }}
      onClose={onClose}
    >
      <s.Wrapper>
        <s.Img src={thumb_up} alt="Thumb Up" />
        <s.TextWrapper>
          <s.Title>Well done</s.Title>
          <ul>
            <s.Text>
              Your time:<s.Value>{time ? time : 0} minutes</s.Value>
            </s.Text>
            <s.Text>
              Burned calories:<s.Value>{calories ? calories : 0}</s.Value>
            </s.Text>
          </ul>
        </s.TextWrapper>
        <s.BtnWrapper>
          <MainButton
            onClick={onClose}
            filled={'#E6533C'}
            text={'Next exercise'}
            type={'button'}
            modalButton={'modalButton'}
          />
        </s.BtnWrapper>
        <s.CustomLink to={'/diary'}>
          To the diary
          <svg width=" 16px" height="16px">
            <use href={sprite + '#icon-arrow-right'}></use>
          </svg>
        </s.CustomLink>
      </s.Wrapper>
    </s.CustomModale>
  );
};