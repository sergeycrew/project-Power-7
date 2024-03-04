// import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, Container } from './UserDataPicker.styled';
// import * as s from './UserDataPicker.styled'
import 'react-datepicker/dist/react-datepicker.css';

export const CustomDataPicker = ({ selectedDate, setSelectedDate, isOpen }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
const handleDateChange = date => {
    setSelectedDate(date); }

  return (
    // <Container>
    //   <DatePicker
    //   selected={selectedDate}
    //   onChange={handleDateChange}
    //   dateFormat="dd MM yyyy"
    //   calendarStartDay={1}
    //   formatWeekDay={day => day.substring(0, 1)}
    //   open={isOpen}
    //   customInput={<div style={{ display: 'none' }} />}
    //   popperModifiers={{
    //     preventOverflow: {
    //       enabled: true,
    //       escapeWithReference: false,
    //       boundariesElement: 'viewport',
    //     },
    //   }}
    //   />
     
    //   <CalendarGlobalStyles/>
    //    </Container>

    <Container>
          <DatePicker
          selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd MM yyyy"
            calendarStartDay={1}
            formatWeekDay={day => day.substring(0, 1)}
            open={isOpen}
            // customInput={<div style={{ display: 'none' }} />}
            // popperModifiers={{
            //   preventOverflow: {
            //     enabled: true,
            //     escapeWithReference: false,
            //     boundariesElement: 'viewport',
            //   },
            // }}
          />
          <CalendarGlobalStyles />
          </Container>
        
      

  );
};

export default CustomDataPicker;