import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainSection = styled.section`
  padding-top: 127px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`;

export const MainContainer = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  padding-inline: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-inline: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-inline: 95px;
  }
`;

export const TitleBox = styled.div`
  width: 335px;
  /* width: 100%; */
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    width: 598px;
    gap: 64px;
  }
`;

export const Title = styled.h1`
  position: relative;
  /* width: 335px; */
  z-index: 1;
  color: ${(p) => p.theme.colors.whiteColor};
  font-weight: 500;
  font-size: 38px;
  line-height: 1.05;
  letter-spacing: 0.01em;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 1.11;
  }
`;

// export const AccentWord = styled.span`
//   display: inline-block;
//   position: relative;
//   z-index: 1;
// `;

export const Icon = styled.svg`
  width: 98px;
  height: 35px;
  position: absolute;
  z-index: 0;
  top: 43px;
  left: -9px;

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
    top: 84px;
    left: -16px;
  }

  @media screen and (min-width: 1440px) {
    left: -16px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    flex-wrap: nowrap;
  }
`;

export const ListItem = styled.li`
  width: 130px;
  height: 42px;

  &:first-child {
    width: 136px;
  }

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 56px;

    &:first-child {
      width: 190px;
    }
  }
`;

export const StyledSignUpLink = styled(Link)`
  width: 100%;
  height: 100%;
  border-radius: ${(p) => p.theme.radii.ld};
  background-color: ${(p) => p.theme.colors.orangeColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${(p) => p.theme.colors.whiteColor};
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.orangeLightColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const StyledSignInLink = styled(Link)`
  width: 100%;
  height: 100%;
  border-radius: ${(p) => p.theme.radii.ld};
  background-color: transparent;
  border: 1px solid ${(p) => p.theme.colors.accentColor};

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${(p) => p.theme.colors.whiteColor};
  transition: all 0.3s;

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.orangeColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;
