import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ItemWrapper = styled.li`
  border: 1px solid ${(p) => p.theme.colors.cardBorderColor};
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  height: 100%;
  min-height: 335px;
  max-height: 824px;
  background: ${(p) => p.theme.colors.cardBgColor};
  position: relative;

  overflow: hidden;

  @media screen and (min-width: 375px) {
    width: 335px;
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
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${(p) => p.theme.colors.fornCaptionColor};
`;

export const LinkToOtherPage = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LinkText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${(p) => p.theme.colors.hoverColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
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
