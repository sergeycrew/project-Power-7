import styled from 'styled-components';

import {
  bg_mob_1x,
  bg_mob_2x,
  bg_tab_1x,
  bg_tab_2x,
  bg_desk_1x,
  bg_desk_2x,
} from '../../Helpers/BackgroundImage';

export const HomeBackgroundImage = styled.div`

  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  width: 100%;
  height: 669px;
  margin-top: 190px;
  background-image: image-set(url(${bg_mob_1x}) 1x, url(${bg_mob_2x}) 2x);

  @media screen and (min-width: 375px) {
    
    background-position-y: bottom;
    height: 681px;
    margin-top: 50px;
    margin-left: 57px;
  }
  @media screen and (min-width: 768px) {
    
    background-image: image-set(url(${bg_tab_1x}) 1x, url(${bg_tab_2x}) 2x);
    width: 670px;
    height: 893px;
    margin-top: 180px;
    margin-left: 3px;
  }
  @media screen and (min-width: 1440px) {
    background-size: 100%;
    background-image: image-set(url(${bg_desk_1x}) 1x, url(${bg_desk_2x}) 2x);
    width: 670px;
    height: 800px;
    margin-left: 76px;
    margin-top: 0px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  @media screen and (min-width: 768px) {
    gap: 56px;
  }
  @media screen and (min-width: 1440px) {
    gap: 39px;
  }
`;

export const Tutorial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 20px 36px 20px 23px;
  width: 146px;
  height: 66px;
  margin-left: 42px;
  margin-top: 432px;

  border-radius: 12px;
  background: ${(p) => p.theme.colors.darkGrayColor};

  @media screen and (min-width: 768px) {
    width: 206px;
    height: 96px;
    margin-left: 64px;
    margin-top: 582px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 384px;
    margin-left: 0;
  }
`;

export const IconPlayContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 9px;

  background-color: ${(p) => p.theme.colors.orangeLightColor};

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 11px;
  }
`;

export const Svg = styled.svg`
  display: block;
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const TutorialTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;

  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
  }
`;

export const TextTutorial = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const Calories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-left: 163px;

  width: 119px;
  height: 76px;

  border-radius: 12px;
  background: ${(p) => p.theme.colors.orangeLightColor};

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 110px;
    gap: 12px;

    margin-right: 32px;
    margin-left: 287px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 458px;
  }
`;

export const IconRunManContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: 18px;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 4px;
  background-color: ${(p) => p.theme.colors.biegeColor};

  @media screen and (min-width: 768px) {
    margin-left: 28px;
    width: 24px;
    height: 24px;
  }
`;

export const SvgRunMan = styled.svg`
  display: block;
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const TitleRunMan = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 1; 
  letter-spacing: -1px;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1.04;
  }
`;

export const SpanRunMan = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  text-transform: lowercase;
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
