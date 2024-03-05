import { createGlobalStyle, styled } from 'styled-components';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Wrapper = styled.button`
  width: 239px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: #efede8;
  text-align: center;
  /* text-transform: uppercase; */
  justify-content: space-around;
  align-items: center;
  background: none;
  border: none;
`;

export const CalendarGlobalStyles = createGlobalStyle`
 .react-datepicker__wrapper {
    position: relative;

  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 215px;
    min-height: 260px;
    /* max-height: 300px; */
    max-block-size: 320px;
    padding: 14px;
    background-color:  #ef8964;
    font-family: "Roboto", sans-serif;;
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #ef8964;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 1px solid rgb(174 174 174 / 0%);

    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.02em;
    text-align: center;
    color: #efede8;
    border-bottom: 1px solid rgba(239, 237, 232, 0.2);
    padding-bottom: 14px;
  }
  .react-datepicker__day-name {
    margin: 0;
    /* padding: 14px 11px 11px 11px; */
    padding-top: 14px;
    font-family: "Roboto", sans-serif;;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: rgba(239, 237, 232, 0.5);
    text-align: center;
  }
  .react-datepicker__navigation {
    margin-top: 19px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 14px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 14px;
    width: 18px;
    height: 18px;
  }
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
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color:  #efede8;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 11px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color:  #efede8;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: #040404;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: #040404;
    color:  #efede8;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: #040404;
    color:  #efede8;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
  .react-datepicker__day-names {
    padding: 0;
  }
`;
