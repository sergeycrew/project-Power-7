import { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  IconSvg,
  WrappInput,
} from './UserDataPicker.styled';

import sprite from '../../images/sprite/sprite.svg';
import { InputField } from '../UserForm/UserForm.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


export const CustomDataPicker = ({ selectedDate, setSelectedDate }) => {


  const handleDateChange = (date) => {
    setSelectedDate(date);
    closeCalendar();
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeCalendar = () => {
    setIsOpen(false);
  };

  return (
    <WrappInput>
      <label htmlFor="datePicker" >Date of birth</label>
      <IconSvg width="18" height="18" onClick={toggleCalendar} cursor="pointer">
        <use
          href={
            isOpen ? `${sprite}#icon-calendar` : `${sprite}#icon-calendar-white`
          }
        ></use>
      </IconSvg>

      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        customInput={<InputField style={{ cursor: 'text' }} />}
        dateFormat={'dd.MM.yyyy'}
        calendarStartDay={1}
        formatWeekDay={(dayOfWeek) => dayOfWeek.substring(0, 2)}
        open={isOpen}
        onClickOutside={closeCalendar}
        cursor="pointer"

      />

      <CalendarGlobalStyles />
    </WrappInput>
  );
};

export default CustomDataPicker;
