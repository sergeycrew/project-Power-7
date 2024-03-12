import styled from 'styled-components';

import { prod_desk_1x, prod_desk_2x } from '../../Helpers/BackgroundImage';

export const ProductsBackgroundImage = styled.div`
  @media screen and (min-width: 1440px) {
  position: relative;
  z-index: 0;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: image-set(url(${prod_desk_1x}) 1x, url(${prod_desk_2x}) 2x);

   
  }

  /* @media screen and (min-width: 1440px) and (max-height: 800px) {
    height: 800px;
  } */
`;
