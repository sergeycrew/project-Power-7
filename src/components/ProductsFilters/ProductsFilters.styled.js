import styled from 'styled-components';
import {
  // Form as FormikForm,
  Field as FormikField,
  // ErrorMessage as FormikError,
} from 'formik';

export const Field = styled(FormikField)`
  padding: 14px;
  color: ${(p) => p.theme.colors.whiteColor};
  border: 1px solid ${(p) => p.theme.colors.cardBorderColor};
  border-radius: ${(p) => p.theme.radii.ld};
  /* background-color: #1c1c1c; */
  background: transparent;

  &::placeholder {
    color: inherit;
  }
`;
