import { createGlobalStyle, styled } from 'styled-components';
// import 'react-datepicker/dist/react-datepicker.css';

export const WrappInput = styled.div`
  position: relative;
  margin-top: 40px;

  label {
    position: absolute;
    font-size: 14px;
    top: 50%;
    left: 14px;
    transform: translateY(-44px);
    pointer-events: none;
    transition:
      top 0.2s,
      left 0.2s,
      transform 0.2s;
    color: ${(p) => p.theme.colors.accentColor};
  }

`;
export const TitleWrapper = styled.button`
  width: 195px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;

export const IconSvg = styled.svg`
  position: absolute;
 
  top: 14px;
  right: 14px;
`;

export const CalendarGlobalStyles = createGlobalStyle`
 .react-datepicker__wrapper {
    position: relative;
    
  }
  .react-datepicker {
    width: 201px;
    position: absolute;
    left: -50px;
    top: 50%;
    transform: translate(-15%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding: 14px;
    background-color: #ef8964;
    font-family: 'Roboto', sans-serif;
    border-radius: 8px;
  }
  .react-datepicker__month-container {

    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    margin-bottom: 8px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-datepicker__header {
    position: relative;
    background-color: #ef8964;    
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day
    react-datepicker__day--018.react-datepicker__day--selected
    react-datepicker__day--today {
    outline: none;
    border: none;
  }
  .react-datepicker__current-month {
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 14px;
  }
  .react-datepicker__day-name {
    margin: 0;
    color: rgba(239, 237, 232, 0.5);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .react-datepicker__day--disabled {
    opacity: 25%;
  }
  .react-datepicker__navigation {
    margin-top: 14px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
    font-size: 0; /* Установите размер шрифта 0, чтобы текст был невидимым */
  line-height: 0;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
    font-size: 0; 
  line-height: 0;
  }
  .react-datepicker__aria-live {
    display: none;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
//   .react-datepicker__navigation-icon {
//       position: relative;
//       top: -1px;
//   font-size: 20px;
//   width: 0;

//   &::before {
//     @extend %navigation-chevron;
//   }

//   &--next {
//     left: -2px;

//     &::before {
//       transform: rotate(45deg);
//       left: -7px;
//     }
//   }

//      &--previous {
//     right: -2px;

//     &::before {
//       transform: rotate(225deg);
//         right: -7px;
//     }
//   }
// }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    border-radius: 50%;
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    width: 24px;
    height: 24px;
  }
  .react-datepicker__month {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color: #efede8;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--outside-month {
    opacity: 50%;
  }
  .react-datepicker__triangle {
    display: none;
  }
`;

// export const Container = styled.div`
//   /* position: absolute; */
//   left: -40%;
//   top: 50%;
//   transform: translate(0%, 0%);
//   z-index: 999;
// `;

// export const CalendarGlobalStyles = createGlobalStyle`
//   .react-datepicker__wrapper {
//     position: absolute;
  

//   }
//   .react-datepicker {
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-1%, 0%);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
 
//     padding: 9px 18px;
//   background-color: #EF8964;
//         font-family: 'RobotoRegular';
//     border-radius: 8px;
//   }
//   .react-datepicker__month-container {
//     float: inherit;
//     box-sizing: border-box;
    
//   }
//    .react-datepicker__day-names {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 8px 8px;
//     border-bottom: 1px solid rgba(255, 255, 255, 0.4);
//   }
//   .react-datepicker__header {
//     position: relative;
//     background-color: #ef8964;
//   }
 
//   .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
//     border-bottom: 0px;
//     padding: 0;
//   }
//   .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
//     outline: none;
//     border: none;
// }
//   .react-datepicker__current-month {
//     color:  #efede8;
//         font-family: 'RobotoMedium';
// font-size: 16px;
// font-style: normal;
// font-weight: 500;
// line-height: normal;
// letter-spacing: -0.32px;
//   }
//   .react-datepicker__day-name {
//     margin: 0;
//    padding: 8px 8px;
//    color: rgba(239, 237, 232, 0.50);
//         font-family: 'RobotoMedium';
// font-size: 14px;
// font-style: normal;
// font-weight: 500;
// line-height: normal;
// letter-spacing: -0.28px;
//   }
//   .react-datepicker__navigation {
//     margin-top: 24px;
//     color: white;
//   }
//   .react-datepicker__navigation--previous {
//     left: 7px;
//     width: 18px;
//     height: 18px;
//   }
//   .react-datepicker__navigation--next {
//     right: 7px;
//     width: 18px;
//     height: 18px;
//   }
//   .react-datepicker__navigation-icon::before:hover:focus {
//     border-color: white;
//   }
//   .react-datepicker__week {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     color: white;
//   }
//   .react-datepicker__day {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 8px;
//     flex-shrink: 0;
//     margin: 0;
//     width: 32px;
//     height: 32px;
//     border-radius: 50%;
//    color: #efede8;
//         font-family: 'RobotoRegular';
// font-size: 14px;
// font-style: normal;
// font-weight: 400;
// line-height: 18px; 
// letter-spacing: -0.28px;
//     text-align: center;
//   }
//   .react-datepicker__month {
//     display: flex;
//     gap: 7px;
//     flex-direction: column;
//     justify-content: space-between;
//     padding-top: 16px;
//     margin: 0;
//   }
//   .react-datepicker__day--selected {
//     background-color: #040404;
//     color: #efede8;
//     font-size: 14px;
//   }
//   .react-datepicker__day--selected:hover {
//     border-radius: 50%;
//   background-color:white;
//   }
//   .react-datepicker__day:hover {
//     border-radius: 50%;
//     background-color:white;
//     color:#3e85f3;
//   }
//   .react-datepicker__day--keyboard-selected {
//     border-radius: 50%;
//     background-color:white;
//     color:#3e85f3;
//   }
//   .react-datepicker__day--weekend {
//     opacity: 50%;
//   }
// .react-datepicker__day--outside-month {
//     background-color: transparent;
//     pointer-events: none;
//     opacity: 0;
//   }
//   .react-datepicker__view-calendar-icon input {
//     padding: 6px 10px 5px 13px;
//   }
//   .react-datepicker__triangle {
//     visibility: hidden;
//   }
// `;

