import styled from 'styled-components';

import bg_img_page from '../../images/desktopImages/exercises-desktop-1x.png';
import bg_img2_page from '../../images/desktopImages/exercises-desktop-2x.png';

export const ExrBackgroundImage = styled.div`
@media (min-width: 1440px) {
 /* position: absolute; */
 /* left: 200px; */
  z-index: 0;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: ${props =>
      props.theme.activeCategory
        ? `image-set(url(${bg_img_page}) 1x, url(${bg_img2_page}) 2x)`
        : 'none'};
  }

 
`

// ${(props) => props.theme.modal320Styles}