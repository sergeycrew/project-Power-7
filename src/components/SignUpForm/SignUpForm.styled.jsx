import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ValidateImg = styled.svg`
  position: absolute;
  top: 1px;
  left: 0;
  width: 16px;
  height: 16px;
`;

export const SignForm = styled(Form)`
  max-width: 335px;
`;

export const SignWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 18px;
  padding-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    padding-bottom: 64px;
  }
`;

export const SignFieldWrap = styled.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 364px;
  }
`;

export const SignField = styled(Field)`
  width: 100%;
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  border-radius: ${(p) => p.theme.radii.ld};
  outline: none;
  padding: 14px;
  height: 46px;
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.whiteColor};
  transition: all 0.3s;

  &::placeholder {
    font-size: 14px;
    line-height: 1.29;
    color: rgba(239, 237, 232, 0.6);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  &.invalid {
    border-color: #d80027;
  }

  &.valid {
    border-color: #3cbf61;
  }

  &:hover,
  &:focus,
  &:active {
    border-color: ${(p) => p.theme.colors.orangeColor};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: transparent !important;
    -webkit-text-fill-color: ${(p) => p.theme.colors.whiteColor} !important;
    transition: background-color 1000s linear 0s;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`;

export const ValidateBox = styled.div`
  position: absolute;
`;

export const Message = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  padding-left: 20px;

  &.error {
    color: ${(p) => p.theme.colors.errorColor};
  }

  &.success {
    color: ${(p) => p.theme.colors.successtColor};
  }
`;

export const PasswordBth = styled.button`
  position: absolute;
  top: 13px;
  right: 14px;
  background-color: transparent;
  border: none;
  padding: 0;
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    top: 16px;
  }
`;

export const PasswordIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(p) => p.theme.radii.ld};
  width: 136px;
  height: 42px;
  background-color: ${(p) => p.theme.colors.orangeColor};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${(p) => p.theme.colors.whiteColor};
  margin-bottom: 12px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.orangeLightColor};
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
