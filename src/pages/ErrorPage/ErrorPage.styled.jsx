import styled from 'styled-components';
import {
  error_mob_1x,
  error_mob_2x,
  bg_tab_1x,
  bg_tab_2x,
  bg_desk_1x,
  bg_desk_2x,
} from '../../Helpers/BackgroundImage';

export const Wrapper = styled.div`
  width: 100%;
  height: 100hv;
  background-color: ${(p) => p.theme.colors.blackColor};
`;

export const ErrorWrap = styled.section`
  position: relative;
  max-width: 375px;
  width: 100%;
  min-height: 812px;
  height: 100vh;
  margin-inline: auto;
  /* background-color: ${(p) => p.theme.colors.blackColor}; */
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${error_mob_1x}) 1x, url(${error_mob_2x}) 2x);

  @media screen and (min-width: 768px) {
    max-width: 768px;
    min-height: 1024px;
    background-image: image-set(url(${bg_tab_1x}) 1x, url(${bg_tab_2x}) 2x);
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    min-height: 800px;
    background-color: ${(p) => p.theme.colors.blackColor};
    background-size: contain;
    background-image: image-set(url(${bg_desk_1x}) 1x, url(${bg_desk_2x}) 2x);
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 20px;

  @media screen and (min-width: 768px) {
    top: 32px;
    left: 32px;
  }

  @media screen and (min-width: 1440px) {
    left: 96px;
  }
`;

export const ErrorBox = styled.div`
  max-width: 240px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 20px;
  background-color: ${(p) => p.theme.colors.orangeColor};
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (max-width: 767px) and (max-height: 812px) {
    height: 812px;
  }

  @media screen and (min-width: 768px) {
    max-width: 420px;
    padding-inline: 32px;
  }

  @media screen and (min-width: 768px) and (max-height: 1024px) {
    height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 669px;
    padding-inline: 96px;
    height: 100vh;
  }

  @media screen and (min-width: 1440px) and (max-height: 800px) {
    height: 800px;
  }
`;

export const ErrorTitle = styled.h1`
  font-weight: 500;
  font-size: 66px;
  line-height: 1;
  letter-spacing: 0.01em;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 0.94;
    margin-bottom: 28px;
  }
`;

export const ErrorText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ErrorBtn = styled.button`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 147px;
  height: 42px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${(p) => p.theme.colors.whiteColor};
  transition: all 0.3s;

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.orangeColor};
    background-color: ${(p) => p.theme.colors.orangeLightColor};
  }

  @media screen and (min-width: 768px) {
    width: 204px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
