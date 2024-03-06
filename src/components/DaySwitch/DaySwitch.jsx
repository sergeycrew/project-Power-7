import { forwardRef, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import * as s from './DaySwitch.styled';
import { CalendarGlobalStyles } from '../UserDataPicker/UserDataPicker.styled';
import icons from '../../images/sprite/sprite.svg';

export const DaySwitch = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <s.DateContainer>
        <s.Wrapper onClick={onClick} ref={ref}>
          {format(selectedDate, 'dd/MM/yyyy')}
        </s.Wrapper>
        <s.CalendarIcon>
          <use href={`${icons}#icon-calendar`}></use>
        </s.CalendarIcon>
      </s.DateContainer>
    );
  });

  //   console.log(selectedDate);
  CustomInput.displayName = 'CustomInput';

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
      />
      <CalendarGlobalStyles />
    </>
  );
};
