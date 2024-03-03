import styled from 'styled-components';

export const Text = styled.p`
  /* color: ${p => p.theme.colors.whiteColor}; */
  color: rgba(239, 237, 232, 0.3);
  font-family: 'RobotoRegular';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  
`;

export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 96px;
    margin-right: 96px;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.orangeLightColor};
  stroke: ${p => p.theme.colors.orangeLightColor};
`;
