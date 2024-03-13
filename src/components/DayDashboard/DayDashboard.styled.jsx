import styled from 'styled-components';

export const DashboardList = styled.div`
  width: 100%;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
    width: 390px;
  }
`;

export const TabletWrapper = styled.ul`
  display: flex;
  gap: 13px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: block;
  }

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-bottom: 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 8px;
  max-width: 100%;

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 593px;
  }
`;

export const CommonInformation = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${(p) => p.theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const SvgInfo = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
  }
`;
