import styled from 'styled-components';

const getLabelColor = (props) => {
  return props.$recommended
    ? props.theme.colors.recommendedColor
    : props.theme.colors.notRecommendedColor;
};

export const CardWrapper = styled.div`
  height: 141px;
  width: 405px;
  padding: ${(p) => p.theme.spacing(4)};
  border: 1px solid ${(p) => p.theme.colors.cardBorderColor};
  border-radius: ${(p) => p.theme.radii.ld};
  background-color: ${(p) => p.theme.colors.cardBgColor};
  word-wrap: break-word;
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
  padding: 7.5px 5px;
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

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  margin: 0;
  border: none;
  color: ${(p) => p.theme.colors.hoverColor};
  background-color: ${(p) => p.theme.colors.cardBgColor};
`;

export const Title = styled.p`
  font-size: 24px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const MetaWrapper = styled.div`
  display: flex;
  word-wrap: break-word;
`;

export const Caption = styled.p`
  margin-right: 4px;
  color: ${(p) => p.theme.colors.captionColor};
`;
