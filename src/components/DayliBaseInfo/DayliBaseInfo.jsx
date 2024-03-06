import * as s from './DayliBaseInfo.styled';
// import { PropTypes } from '@mui/material';
import sprite from '../../images/sprite.svg';

const DailyBaseInfo = ({ iconId, text, value=0, amoutName }) => {



  return (
    <s.Container>
      <s.Wrap>
        <s.Svg>
          <use href={`${sprite}#${iconId}`}></use>
        </s.Svg>
        <s.Text>{text}</s.Text>
      </s.Wrap>
      <s.Amount>{Math.round(value)} {amoutName}</s.Amount>
    </s.Container>
  );
};

export default DailyBaseInfo;
