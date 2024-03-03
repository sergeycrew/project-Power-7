import * as s from './UserNote.styled';
import sprite from '../../images/sprite.svg';


const UserNote = () => {
    return (
    <s.Container>
    <s.Svg >
            <use href={`${sprite}#icon-attention`}></use>
          </s.Svg>
    <s.Text>
    We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.
    </s.Text>
    </s.Container>
    );
};

export default UserNote;