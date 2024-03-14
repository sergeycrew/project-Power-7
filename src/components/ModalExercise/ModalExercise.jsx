import thumb_up from '../../images/thumb-up-1x.png';
import * as s from './ModalExercise.styled';
import sprite from '../../images/sprite/sprite.svg';

export const ModalExercise = ({ time, calories, onClose }) => {
  return (
    <s.CustomModale
      modalStyles={{ maxWidth: '430px', width: '100%', height: '384px' }}
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
        <s.MainButton onClick={onClose}>Next exercise </s.MainButton> 
           
         
        </s.BtnWrapper>
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