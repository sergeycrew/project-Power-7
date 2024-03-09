import styled from 'styled-components';

import bg_img_page from '../../images/desktopImages/exercises-desktop-1x.png';
import bg_img2_page from '../../images/desktopImages/exercises-desktop-2x.png';

export const Wrapper = styled.div`
  @media (min-width: 1440px) {
    height: 100vh;
    width: 100%;
    position: relative;
  }
`;

export const BgContainer = styled.div`
  @media (min-width: 1440px) {
    width: 100%;
    height: 100vh;
    min-height: 780px;
    ${props => (!props.hideFilter ? 'min-height: 850px;' : '')}

    position: absolute;
    // z-index: -5;

    display: flex;
    justify-content: right;
    gap: 101px;
  }
`;

export const BgImage = styled.div`
  ${props => (props.hideFilter ? 'display: none;' : '')}
  @media (min-width: 1440px) {
    width: 30%;
    ${props => (!props.hideFilter ? 'width: 35%;' : '')}

    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%),
      url(${bg_img_page});

    background-size: cover;
    background-repeat: no-repeat;
    background-position: right top;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background: linear-gradient(
            89deg,
            #040404 1.1%,
            rgba(4, 4, 4, 0) 70.79%
          ),
          url(${bg_img2_page});

        background-size: cover;
        background-repeat: no-repeat;
        background-position: right bottom;
      }
    }
  }
`;