import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const ItemWrapper = styled.li`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  min-height: 335px;
  max-height: 824px;
  background: rgba(239, 237, 232, 0.05);
  /* overflow-y: scroll; */

  /* $::-webkit-scrollbar {
    width: 8px;
  }

  .book-category-list::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: var(--scroll-bar-color);
  } */

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 234px;
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

  fill: ${theme.colors.hoverColor};
`;
