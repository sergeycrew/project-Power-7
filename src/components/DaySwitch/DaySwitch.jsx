import { forwardRef } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import * as s from './DaySwitch.styled';
import { CalendarGlobalStyles } from '../UserDataPicker/UserDataPicker.styled';
import icons from '../../images/sprite/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCalendarDay,
  previousDay,
  nextDay,
} from '../../redux/diary/diarySlice';
import { selectCurrentDate } from '../../redux/diary/diarySelectors';

export const DaySwitch = () => {
  const currentDate = useSelector(selectCurrentDate);
  const dispatch = useDispatch();

  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <s.DateContainer>
        <s.Wrapper onClick={onClick} ref={ref}>
          <p>{format(new Date(currentDate), 'dd/MM/yyyy')}</p>
          <s.CalendarIcon>
            <use href={`${icons}#icon-calendar`}></use>
          </s.CalendarIcon>
        </s.Wrapper>
        <s.SwitchButtonWrapper>
          <li>
            <s.SwitchButton
              type="button"
              style={{ opacity: '0.2' }}
              onClick={() => {
                dispatch(previousDay());
              }}
            >
              <s.SwitchButtonIcon>
                <use href={`${icons}#icon-chevron-left`}></use>
              </s.SwitchButtonIcon>
            </s.SwitchButton>
          </li>
          <li>
            <s.SwitchButton
              type="button"
              onClick={() => {
                dispatch(nextDay());
              }}
            >
              <s.SwitchButtonIcon>
                <use href={`${icons}#icon-chevron-right`}></use>
              </s.SwitchButtonIcon>
            </s.SwitchButton>
          </li>
        </s.SwitchButtonWrapper>
      </s.DateContainer>
    );
  });

  CustomInput.displayName = 'CustomInput';

  return (
    <>
      <DatePicker
        selected={currentDate}
        onChange={(date) => {
          dispatch(changeCalendarDay(date.getTime()));
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
      />
      <CalendarGlobalStyles />
    </>
  );
};

// const currentDate = useSelector(selectCurrentDate);
// // const [selectedDate, setSelectedDate] = useState(Date.now());
// const dispatch = useDispatch();

// const CustomInput = forwardRef(({ onClick }, ref) => {
//   return (
//     <s.Wrapper onClick={onClick} ref={ref}>
//       {format(selectedDate, 'dd/MM/yyyy')}
//       <s.CalendarIcon>
//         <use href={`${icons}#icon-calendar`}></use>
//       </s.CalendarIcon>
//     </s.Wrapper>
//   );
// });

// //   console.log(selectedDate);
// CustomInput.displayName = 'CustomInput';

//  return (
//    <>
//      <DatePicker
//        selected={selectedDate}
//        onChange={(date) => {
//          setSelectedDate(date);
//        }}
//        customInput={<CustomInput />}
//        dateFormat={'dd MM yyyy'}
//        calendarStartDay={1}
//      />
//      <CalendarGlobalStyles />
//    </>
//  );
