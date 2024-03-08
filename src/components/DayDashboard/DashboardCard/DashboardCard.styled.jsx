import styled from 'styled-components';

export const CardContainer = styled.li`
  box-sizing: border-box;
  /* width: calc((100% - 13px) / 2); */
  width: 157px;
  height: 96px;
  /* border: 1px solid ${(p) => p.theme.colors.cardBorderColor}; */
  border: 1px solid;
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${({ $bgColor }) => {
    switch ($bgColor) {
      case 'orange':
        return (p) => p.theme.colors.orangeColor;
      default:
        return (p) => p.theme.colors.cardBgColor;
    }
  }};

  border-color: ${({ $borderColor }) => {
    switch ($borderColor) {
      case 'red':
        return (p) => p.theme.colors.notRecommendedColor;
      case 'green':
        return (p) => p.theme.colors.successtColor;
      default:
        return (p) => p.theme.colors.cardBorderColor;
    }
  }};

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }
`;

export const InnerCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: left;
    gap: 8px;
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: ${(p) => p.theme.colors.orangeLightColor};
`;

export const InnerCardText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-left: 4px;
  color: ${({ $cardTextColor }) => {
    switch ($cardTextColor) {
      case 'white':
        return (p) => p.theme.colors.cardTextColor;
      default:
        return (p) => p.theme.colors.captionColor;
    }
  }};

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;

export const UserIndicators = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
  }
`;
