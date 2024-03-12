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
  position: relative;
  z-index: 0;
  margin: 0 auto;
  max-width: 375px;
  width: 100%;
  min-height: 812px;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${bg_mob_1x}) 1x, url(${bg_mob_2x}) 2x);

  @media screen and (min-width: 768px) {
    max-width: 768px;
    min-height: 1024px;
    background-image: image-set(url(${bg_tab_1x}) 1x, url(${bg_tab_2x}) 2x);
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    min-height: 800px;
    background-size: contain;
    background-image: image-set(url(${bg_desk_1x}) 1x, url(${bg_desk_2x}) 2x);
  }
`;
