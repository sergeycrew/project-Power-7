import { styled } from 'styled-components';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Wrapper = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  color: ${(p) => p.theme.colors.whiteColor};
  text-align: center;
  background: none;
  border: none;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${(p) => p.theme.colors.orangeLightColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
    align-items: baseline;
  }
`;

export const SwitchButton = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

export const SwitchButtonIcon = styled.svg`
  width: 16px;
  height: 16px;

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: ${(p) => p.theme.colors.orangeLightColor};
  }
`;

export const SwitchButtonWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const CalendarIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    margin-bottom: 10px;
  }
`;
