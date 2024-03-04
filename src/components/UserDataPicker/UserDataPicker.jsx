// import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, IconSvg, WrappInput } from './UserDataPicker.styled';
import sprite from '../../images/sprite/sprite.svg';
import { InputField } from '../UserForm/UserForm.styled';

// import * as s from './UserDataPicker.styled'
// import 'react-datepicker/dist/react-datepicker.css';

export const CustomDataPicker = ({ selectedDate, setSelectedDate, }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
const handleDateChange = date => {
    setSelectedDate(date); }
    

  return (

    <WrappInput>  
    <label htmlFor="datePicker">Date of birth</label>
      <IconSvg width="18" height="18">
        <use href={`${sprite}#icon-calendar-white`} ></use>
      </IconSvg>
    
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        customInput={<InputField style={{ cursor: 'pointer' }} />}
        dateFormat={'dd.MM.yyyy'}
        calendarStartDay={1}
        formatWeekDay={day => day.substring(0, 1)}
      />


      <CalendarGlobalStyles />
    </WrappInput>

      

    

    // <Container>
    //       <DatePicker
    //       selected={selectedDate}
    //         onChange={handleDateChange}
    //         dateFormat="dd.MM.yyyy"
    //         calendarStartDay={1}
    //         formatWeekDay={day => day.substring(0, 1)}
    //         open={isOpen}
    //         customInput={<div style={{ display: 'none' }} />}
    //         popperModifiers={{
    //           preventOverflow: {
    //             enabled: true,
    //             escapeWithReference: false,
    //             boundariesElement: 'viewport',
    //           },
    //         }}
    //       />
    //       <CalendarGlobalStyles />
    //       </Container>
        
      

  );
};

export default CustomDataPicker;