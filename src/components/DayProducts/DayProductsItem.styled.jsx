import styled from 'styled-components';
import { theme } from '../../styles/Theme';

const commonStyles = `
  border: 1px solid ${theme.colors.accentColor};
  border-radius: 12px;
  padding: 10px 14px;
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${theme.colors.whiteColor};
`;

const commonMediaStyles = `
    height: 40px;
    font-size: 16px;
    line-height: 150%;
    padding: 8px 14px;
`;

export const ProductsContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 16px;
  }
`;

export const ListItem = styled.div`
  margin-bottom: 16px;
`;

export const DayItemTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* color: #ef8964; */
  color: ${theme.colors.orangeLightColor};
  margin-bottom: 8px;
`;

export const DayProductTitleContent = styled.p`
  ${commonStyles}
  width: 297px;

  @media screen and (min-width: 768px) {
    ${commonMediaStyles}
    width: 204px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const DayCategoryContent = styled.p`
  ${commonStyles}
  width: 297px;

  @media screen and (min-width: 768px) {
    ${commonMediaStyles}
    width: 128px;
  }

  @media screen and (min-width: 1440px) {
    width: 166px;
  }
`;

export const DayCaloriesContent = styled.p`
  ${commonStyles}
  width: 81px;

  @media screen and (min-width: 768px) {
    ${commonMediaStyles}
    width: 90px;
  }

  @media screen and (min-width: 1440px) {
    width: 105px;
  }
`;

export const DayWeightContent = styled.p`
  ${commonStyles}
  width: 80px;

  @media screen and (min-width: 768px) {
    ${commonMediaStyles}
    width: 90px;
  }

  @media screen and (min-width: 1440px) {
    width: 105px;
  }
`;

export const DayRecommendContent = styled.p`
  ${commonStyles}
  width: 76px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    width: 80px;
    ${commonMediaStyles}
  }

  @media screen and (min-width: 1440px) {
    width: 110px;
  }
`;

export const RecomendalDot = styled.span`
  display: inline-block;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: #419b09;
`;

export const LastItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const DeleteButton = styled.button`
  padding: 0;
  /* height: 20px;
  width: 20px; */
  background: none;
  border: none;
`;

export const DeleteIcon = styled.svg`
  height: 20px;
  width: 20px;
  fill: ${(p) => p.theme.colors.orangeLightColor};
  /* fill: #ef8964; */
`;
