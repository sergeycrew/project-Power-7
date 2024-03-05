import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  bg_mob_1x,
  bg_mob_2x,
  bg_tab_1x,
  bg_tab_2x,
  bg_desk_1x,
  bg_desk_2x,
} from '../../Helpers/BackgroundImage';

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(10)};
  padding-top: 127px;

  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${bg_mob_1x}) 1x, url(${bg_mob_2x}) 2x);

  @media screen and (min-width: 768px) {
    gap: 64px;
    padding-top: 189px;
    background-image: image-set(url(${bg_tab_1x}) 1x, url(${bg_tab_2x}) 2x);
  }

  @media screen and (min-width: 1440px) {
    padding-top: 200px;
    background-size: contain;
    background-image: image-set(url(${bg_desk_1x}) 1x, url(${bg_desk_2x}) 2x);
  }
`;

export const TitleWrap = styled.div`
  padding: 0 20px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 96px;
  }
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  max-width: 335px;
  height: 120px;
  color: ${(p) => p.theme.colors.whiteColor};
  font-weight: 500;
  font-size: 38px;
  line-height: 1.05;
  letter-spacing: 0.01em;

  @media screen and (min-width: 768px) {
    max-width: 598px;
    height: 234px;
    font-size: 70px;
    line-height: 1.11;
  }
`;

export const Icon = styled.svg`
  width: 98px;
  height: 35px;
  stroke-width: 2px;
  position: absolute;
  top: 43px;
  left: 11px;

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
    top: 84px;
    left: 16px;
  }

  @media screen and (min-width: 1440px) {
    left: 80px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 14px;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 96px;
  }
`;

export const ListItem = styled.li`
  width: 136px;
  height: 42px;
  border-radius: ${(p) => p.theme.radii.ld};
  background-color: ${(p) => p.theme.colors.orangeColor};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.orangeLightColor};
  }

  &:last-child {
    width: 130px;
    background-color: transparent;
    border: 1px solid ${(p) => p.theme.colors.accentColor};

    &:hover,
    &:focus {
      border-color: ${(p) => p.theme.colors.orangeColor};
    }
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;

    &:last-child {
      width: 182px;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${(p) => p.theme.colors.whiteColor};
  transition: color 0.3s;
  /* &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.orangeLightColor};
  } */

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;
