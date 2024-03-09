import * as s from './UserNote.styled';
// import sprite from '../../images/sprite.svg';
import sprite from '../../images/sprite/sprite.svg';

const UserNote = () => {
  return (
    <s.Container>
      <s.Wrapp>
        <s.WrappSvg>
          <s.Svg>
            <use href={`${sprite}#exclamation`}></use>
          </s.Svg>
        </s.WrappSvg>
        <s.Text>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </s.Text>
      </s.Wrapp>
    </s.Container>
  );
};

export default UserNote;
