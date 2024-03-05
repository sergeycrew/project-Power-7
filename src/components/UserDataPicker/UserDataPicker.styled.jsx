import { createGlobalStyle, styled } from 'styled-components';
import sprite from '../../images/sprite/sprite.svg';
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
  /* &:hover .calendar-icon use,
  &:focus .calendar-icon use {
    content: url('${sprite}#icon-calendar');
  }

  .calendar-icon use {
    content: url('${sprite}#icon-calendar-white');
  } */

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
    // position: relative;
    
  }
  .react-datepicker {
    // width: 201px;
    position: reletive;
    left: -52px;
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
    justify-content: space-around;
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
    // cursor: pointer;
  }
  .react-datepicker__current-month {
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 14px;
    text-align: center;
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
    // z-index: 999;
    
  }
  .react-datepicker-popper {
    z-index: 1;
  
    // Eliminating extra space at the bottom of the container
    line-height: 0;
  
    &[data-placement^="bottom"] {
      .react-datepickertriangle {
        @extend %triangle-arrow-up;
      }
    }
  
    &[data-placement^="top"] {
      .react-datepickertriangle {
        @extend %triangle-arrow-down;
      }
    }
  }


  .react-datepicker__navigation--previous {
    position: absolute;
    background-color: inherit;
    left: 7px;
    padding: 0;
    
    font-size: 0; /* Установите размер шрифта 0, чтобы текст был невидимым */
  line-height: 0;
  }
  .react-datepicker__navigation--next {
    position: absolute;
    background-color: inherit;
    right: 7px;
    padding: 0;
  
    font-size: 0; 
  line-height: 0;
  }
  .react-datepicker__aria-live {
    display: none;
  }
  
  .react-datepicker__navigation-icon:hover::before{
    border-color: #EFEDE8;
  }


  .react-datepicker__navigation-icon{
  position: relative;
  top: -1px;
  z-index:2;

  width: 0;
  

  &::before {
    
    border-color:rgba(239, 237, 232, 0.4);
    border-style: solid;
    border-width: 3px 3px 0 0;
    border-radius: 1.5px;
    content: "";
    display: block;
    height: 9px;
    position: absolute;
    top: -8px;
    width: 9px;
  
    &--disabled,
  &--disabled:hover {
      border-color:tomato;
      cursor: default;
    }
  }

  &--next {
    left: -16px;

    &::before {
      transform: rotate(45deg);
      left: -7px;
    }
  }

  &--previous {
    right: -16px;

    &::before {
      transform: rotate(225deg);
      right: -7px;
    }
  }
}
.react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }


  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    gap: 5px;
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
    // cursor: pointer;
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
    cursor: pointer;
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

//   .WrappInput:hover .calendar-icon use,
//   .WrappInput:focus .calendar-icon use {
//     content: url('${sprite}#icon-calendar');
//   }

//   .WrappInput .calendar-icon use,
//   .WrappInput .calendar-icon use {
//     content: url('${sprite}#icon-calendar-white');
//   }
  
`;
