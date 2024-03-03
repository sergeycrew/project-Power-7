import * as s from './DayliBaseInfo.styled';
// import { PropTypes } from '@mui/material';
import sprite from '../../images/sprite.svg';

const DailyBaseInfo = ({ iconId, text, value }) => {
  return (
    <s.Container >
<s.Wrap>
<s.Svg>
        <use href={`${sprite}#${iconId}`}></use>
      </s.Svg>
      <s.Text>{text}</s.Text></s.Wrap>
      <s.Amount>{value}</s.Amount>
    </s.Container>
  );
};

// DailyBaseInfo.PropTypes = {
//   color: PropTypes.string.isRequired,
//   iconId: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
// };
export default DailyBaseInfo;
