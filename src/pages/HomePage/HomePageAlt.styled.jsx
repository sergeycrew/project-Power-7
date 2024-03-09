import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeSection = styled.section`
  max-width: 1400px;
  margin: 0 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    max-width: 240px;
    margin: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 96px;
  }
`;

export const Title = styled.h1`
  width: 335px;

  font-family: inherit;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    width: 598px;

    font-size: 70px;
    font-weight: 500;
    line-height: 1.11;
    letter-spacing: 0.7px;
  }
`;

export const SvgCircle = styled.svg`
  position: absolute;
  top: 170px;
  left: -8px;
  width: 98px;
  height: 35px;

  @media screen and (min-width: 768px) {
    top: 210px;
    left: -17px;
    width: 185px;
    height: 67px;
  }

  @media screen and (min-width: 1440px) {
    top: 85px;
  }
`;

export const TitleContainerTablet = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding-top: 127px;
  height: 120px;
  width: 335px;
  gap: 40px;

  @media screen and (min-width: 768px) {
    max-width: 240px;
    margin-top: 90px;
    gap: 64px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 770px;

    margin-top: 200px;
  }
`;

export const BtnHomeDesctop = styled.div`
  display: flex;
  gap: 20px;
`;

export const BtnHomeTablet = styled.div`
  display: flex;
  text-align: center;

  & > a:not(:last-child) {
    margin-right: 14px;
    white-space: nowrap;
  }

  @media screen and (min-width: 768px) {
    display: flex;

    width: 380px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;

  padding: 10px 27px;
  color: ${(p) => p.theme.colors.whiteColor};

  border: 1px solid ${(p) => p.theme.colors.accentColor};
  border-radius: 12px;

  &:hover,
  :focus {
    background-color: ${(p) => p.theme.colors.orangeColor};
  }
  @media screen and (min-width: 375px) {
    width: 136px;
    heigth: 42px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;

    width: 190px;
    height: 56px;

    margin-right: 20px;
    white-space: nowrap;

    padding: 16px 60px;
  }
`;
