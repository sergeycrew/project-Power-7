import styled from 'styled-components';

export const Text = styled.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: 'RobotoRegular';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 165px;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: ${p => p.theme.colors.orangeColor};

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 209px;
    height: 108px;
    padding: 14px 18px;
    align-items: flex-start;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 214px;
    height: 108px;
    padding: 14px 18px;
    align-items: flex-start;
    gap: 32px;
  }
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  /* fill: ${p => p.theme.colors.orangeLightColor};
  stroke: ${p => p.theme.colors.orangeLightColor}; */
`;

export const Amount = styled.p`
 color: ${p => p.theme.colors.whiteColor};
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 1.3;
  margin-top: auto;
`;

export const Wrap = styled.div`
display: flex;
align-items: center;
gap: 8px;`