import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const StyledForm = styled(FormikForm)`
  display: flex;
  gap: ${(p) => p.theme.spacing(4)};
`;

export const FormTitle = styled.p`
  color: ${(p) => p.theme.colors.fornCaptionColor};
  font-size: 14px;
  text-align: right;
`;

export const Field = styled(FormikField)`
  padding: ${(p) => p.theme.spacing(3)};
  color: ${(p) => p.theme.colors.whiteColor};
  border: 1px solid ${(p) => p.theme.colors.cardBorderColor};
  border-radius: ${(p) => p.theme.radii.ld};
  /* background-color: #1c1c1c; */
  background: transparent;

  &::placeholder {
    color: inherit;
  }

  .options {
    background-color: #1c1c1c;
  }
`;

export const FindBtn = styled.button`
  background: transparent;
`;

export const SvgMagnifier = styled.svg`
  width: 18px;
  height: 18px;
`;

export const ErrorMessage = styled(FormikError)`
  color: ${(p) => p.theme.colors.orangeColor};
  font-size: 14px;
`;
