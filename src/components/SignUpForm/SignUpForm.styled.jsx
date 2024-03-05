import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const SignUpForm = styled(Form)`
  max-width: 335px;
`;

export const SignUpWrap = styled.div`
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

export const SignUpFieldWrap = styled.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 364px;
  }
`;

export const SignUpField = styled(Field)`
  /* position: relative; */
  width: 100%;
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  border-radius: ${(p) => p.theme.radii.ld};
  padding: 14px;
  height: 46px;
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.whiteColor};

  &::placeholder {
    font-size: 14px;
    line-height: 1.29;
    color: rgba(239, 237, 232, 0.6);
  }

  @media screen and (min-width: 768px) {
    height: 46px;
  }

  @media screen and (min-width: 1440px) {
    height: 52px;
  }
`;

export const SignUpError = styled(ErrorMessage)`
  position: absolute;
  top: 48px;
  left: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.errorColor};
`;

export const SignUpBtn = styled.button`
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
