import { forwardRef, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, Wrapper } from './DaySwitch.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DaySwitch = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <Wrapper onClick={onClick} ref={ref}>
        {format(selectedDate, 'dd/MM/yyyy')}
      </Wrapper>
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
