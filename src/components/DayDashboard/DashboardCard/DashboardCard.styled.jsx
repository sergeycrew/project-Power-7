import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const CardContainer = styled.li`
  box-sizing: border-box;
  /* width: calc((100% - 13px) / 2); */
  width: 157px;
  height: 96px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  background: rgba(239, 237, 232, 0.05);

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
  /* gap: 4px; */

  @media screen and (min-width: 768px) {
    justify-content: left;
    gap: 8px;
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  /* fill: #ef8964; */
  fill: ${theme.colors.orangeLightColor};
`;

export const InnerCardText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(239, 237, 232, 0.4);
  margin-left: 4px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;

export const UserIndicators = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
  }
`;
