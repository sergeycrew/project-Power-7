import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(4)};
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 664px;
    flex-direction: row;
  }
`;

export const FormTitle = styled.p`
  display: none;

  @media screen and (min-width: 1440px) {
    position: absolute;
    display: block;
    top: -22px;
    right: 0px;
    color: ${(p) => p.theme.colors.fornCaptionColor};
    font-size: 14px;
    text-align: right;
  }
`;

export const Field = styled.input`
  width: 100%;
  padding: ${(p) => p.theme.spacing(3)};
  color: ${(p) => p.theme.colors.whiteColor};
  border: 1px solid ${(p) => p.theme.colors.cardBorderColor};
  border-radius: ${(p) => p.theme.radii.ld};
  outline: none;
  background: transparent;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.29em;

  &::placeholder {
    color: inherit;
  }

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.hoverColor};
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    line-height: 1.5em;
  }
`;

export const BtnCancel = styled.button`
  height: 18px;
  position: absolute;
  padding: 0px;
  border-color: transparent;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    right: 36px;
    top: 14px;
  }

  @media screen and (min-width: 768px) {
    left: 168px;
  }
`;

export const SvgX = styled.svg`
  width: 18px;
  height: 18px;
  stroke: #e6533c;
`;

export const BtnSearch = styled.button`
  transform: translateX(-30px);
  height: 18px;
  position: absolute;
  padding: 0px;
  border-color: transparent;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    right: 14px;
    top: 14px;
  }

  @media screen and (min-width: 768px) {
    left: 192px;
  }
`;

export const SvgSearch = styled.svg`
  width: 18px;
  height: 18px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: ${(p) => p.theme.spacing(4)};
`;

// export const ErrorMessage = styled(FormikError)`
//   color: ${(p) => p.theme.colors.orangeColor};
//   font-size: 14px;
// `;
