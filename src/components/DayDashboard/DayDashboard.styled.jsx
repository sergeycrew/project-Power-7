import styled from 'styled-components';

export const DashboardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 13px;
  row-gap: 20px;
  width: 335px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 593px;
    gap: 16px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
    margin-bottom: 48px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 8px;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    max-width: 593px;
    padding-bottom: 64px;
  }
`;

export const CommonInformation = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${(p) => p.theme.colors.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const SvgInfo = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const DashboardWrapper = styled.div`
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;
