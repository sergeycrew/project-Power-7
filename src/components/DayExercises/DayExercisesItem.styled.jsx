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

  /* &:nth-last-child(-n + 3) {
    margin-bottom: 0;
  } */

  /* @media screen and (min-width: 768px) {
    margin-bottom: 0;
  } */
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

export const DayItemBodyPartContent = styled.p`
  ${commonStyles}
  width: 297px;

  @media screen and (min-width: 768px) {
    ${commonMediaStyles}
    width: 90px;
  }

  @media screen and (min-width: 1440px) {
    width: 115px;
  }
`;

export const DayItemEquipmentContent = styled.p`
  ${commonStyles}
  width: 297px;

  @media screen and (min-width: 768px) {
    ${commonMediaStyles}
    width: 132px;
  }

  @media screen and (min-width: 1440px) {
    width: 157px;
  }
`;

export const DayItemNameContent = styled.p`
  ${commonStyles}
  width: 297px;

  @media screen and (min-width: 768px) {
    ${commonMediaStyles}
    width: 128px;
  }

  @media screen and (min-width: 1440px) {
    width: 131px;
  }
`;

export const DayTargetContent = styled.p`
  ${commonStyles}
  width: 81px;

  @media screen and (min-width: 768px) {
    ${commonMediaStyles}
    width: 84px;
  }

  @media screen and (min-width: 1440px) {
    width: 106px;
  }
`;

export const DayCaloriesContent = styled.p`
  ${commonStyles}
  width: 80px;

  @media screen and (min-width: 768px) {
    ${commonMediaStyles}
    width: 78px;
  }

  @media screen and (min-width: 1440px) {
    width: 91px;
  }
`;

export const DayTimeContent = styled.p`
  ${commonStyles}
  width: 76px;

  @media screen and (min-width: 1440px) {
    width: 82px;
  }
`;

// export const DayItemShortContent = styled.p`
//   border: 1px solid rgba(239, 237, 232, 0.3);
//   border-radius: 12px;
//   padding: 10px 43px 10px 14px;
//   width: 81px;
//   height: 38px;
//   font-family: "Roboto", sans-serif;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 129%;
//   color: #efede8;
// `;

export const LastItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const DeleteButton = styled.button`
  height: 20px;
  width: 20px;
  padding: 0;
  background: none;
  border: none;
`;

export const DeleteIcon = styled.svg`
  height: 20px;
  width: 20px;
  fill: ${theme.colors.orangeLightColor};
  /* fill: #ef8964; */
`;
