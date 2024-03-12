import styled from 'styled-components';

const getLabelColor = (props) => {
  return props.$recommended
    ? props.theme.colors.recommendedColor
    : props.theme.colors.notRecommendedColor;
};

export const CardWrapper = styled.div`
  height: 141px;
  padding: ${(p) => p.theme.spacing(4)};
  border: 1px solid ${(p) => p.theme.colors.cardBorderColor};
  border-radius: ${(p) => p.theme.radii.ld};
  background-color: ${(p) => p.theme.colors.cardBgColor};
  word-wrap: break-word;
  font-size: 12px;

  @media screen and (max-width: 335px) {
    max-width: 320px;
    width: 100%;
  }
  @media screen and (min-width: 335px) {
    width: 335px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`;

export const TopInfoWrapper = styled.div`
  display: flex;
  margin-bottom: ${(p) => p.theme.spacing(6)};
  align-items: baseline;
  justify-content: space-between;
`;

export const Decor = styled.span`
  margin-right: auto;
  border-radius: ${(p) => p.theme.radii.sd};
  padding: 7px 5px;
  /* width: 40px; */
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${(p) => p.theme.colors.cardBgColor};
`;

export const LabelRecommended = styled.span`
  margin-right: ${(p) => p.theme.spacing(2)};
  display: block;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${getLabelColor};
`;

export const Text = styled.p`
  margin-right: ${(p) => p.theme.spacing(4)};
  color: ${(p) => p.theme.colors.whiteColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  color: ${(p) => p.theme.colors.hoverColor};
  background: transparent;
`;

export const SvgArrow = styled.svg`
  margin-left: ${(p) => p.theme.spacing(2)};
  width: 16px;
  height: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  column-gap: ${(p) => p.theme.spacing(4)};
  height: 32px;
  overflow-y: hidden;
  margin-bottom: ${(p) => p.theme.spacing(2)};

  @media screen and (max-width: 375px) {
    max-width: 303px;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SvgIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const MetaWrapper = styled.div`
  display: flex;
  height: 18px;
  overflow-y: hidden;
  overflow-x: hidden;

  @media screen and (max-width: 375px) {
    max-width: 303px;
  }
`;

export const DetailsMetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 18px;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const Caption = styled.p`
  margin-right: 4px;
  color: ${(p) => p.theme.colors.captionColor};
`;

export const TextFull = styled.p`
  margin-right: ${(p) => p.theme.spacing(4)};
  color: ${(p) => p.theme.colors.whiteColor};

  &::first-letter {
    text-transform: uppercase;
  }
`;
