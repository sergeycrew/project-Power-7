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
import { selectUser } from '../../redux/auth/authSelectors';

export const DaySwitch = () => {
  const currentDate = useSelector(selectCurrentDate);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const isPreviousButtonDisabled = () => {
    let userCreationDate = new Date(user.createdAt);
    let currentDateAsDate = new Date(currentDate);
    currentDateAsDate.setHours(0, 0, 0, 0);
    return userCreationDate.getTime() >= currentDateAsDate;

    // return userCreationDate.getTime() >= currentDate - 86400000;
  };

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
              disabled={isPreviousButtonDisabled()}
              style={{ opacity: isPreviousButtonDisabled() ? '0.2' : '1' }}
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
        minDate={user.createdAt}
      />
      <CalendarGlobalStyles />
    </>
  );
};
