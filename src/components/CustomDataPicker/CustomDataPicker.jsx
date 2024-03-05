import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles } from './CustomDataPicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const CustomDataPicker = ({ customInput }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <DatePicker
        wrapperClassName="datePicker"
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        customInput={customInput}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
      />
      <CalendarGlobalStyles />
    </>
  );
};
