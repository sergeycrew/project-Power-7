import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
  }
`;

export const StyledForm = styled(Form)`
  /* margin-top: 20px; */

  @media screen and (min-width: 768px) {
  }
`;

export const SectionTitle = styled.p`
  color: ${(p) => p.theme.colors.accentColor};
  margin-bottom: 4px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const Input = styled.input`
  width: 335px;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  background-color: transparent;
  color: #efede8;
  font-size: 14;
  &:focus,
  &:hover {
    outline: none;
    border-color: ${(p) => p.theme.colors.orangeColor};
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 341px;
  }
`;
export const WrappInputFields = styled.div`
  display: inline-flex;
  align-items: flex-end;
  margin-top: 20px;
  gap: 14px;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 14px;
  }
`;

export const WrappInput = styled.div`
  position: relative;
  margin-top: 40px;

  label {
    position: absolute;
    font-size: 14px;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    pointer-events: none;
    transition:
      top 0.2s,
      left 0.2s,
      transform 0.2s;
    color: ${(p) => p.theme.colors.accentColor};
  }

  input[type='number']:focus + label,
  input[type='number']:not(:placeholder-shown) + label {
    color: ${(p) => p.theme.colors.accentColor};
    transform: translateY(-44px);
  }
`;

export const InputField = styled.input`
  width: 165px;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    display: none; /* Скрываем стандартные кнопки ввода */
  }

  /* &::before,
  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 30px;
    height: 30px;
    background-color: ${(p) => p.theme.colors.orangeColor}; /* Цвет кнопок
    color: #fff;
    border: none;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease;
  } */ 

  /* &::before {
    top: 0;
    background-image: url('data:image/svg+xml;utf8,<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
  }

  &::after {
    bottom: 0;
    background-image: url('data:image/svg+xml;utf8,<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
  }

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.colors.orangeColor};
    box-shadow: 0 0 5px ${(p) => p.theme.colors.orangeColor};
  }

  &:hover::before,
  &:hover::after {
    background-color: ${(p) => p.theme.colors.orangeHoverColor}; /* Цвет кнопок при наведении */
  /* }  */

  &:focus,
  &:hover {
    outline: none;
    border-color: ${(p) => p.theme.colors.orangeColor};
  }
`;