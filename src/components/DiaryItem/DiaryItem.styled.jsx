import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ItemWrapper = styled.li`
  border: 1px solid ${(p) => p.theme.colors.cardBorderColor};
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  height: 100%;
  min-height: 335px;
  max-height: 824px;
  background: ${(p) => p.theme.colors.cardBgColor};
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    max-height: 60px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 234px;
    max-height: 234px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`;

export const DiaryItemTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: rgba(239, 237, 232, 0.5);
`;

export const LinkToOtherPage = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LinkText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${(p) => p.theme.colors.hoverColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;

  fill: ${(p) => p.theme.colors.hoverColor};
`;
