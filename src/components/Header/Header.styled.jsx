import styled from 'styled-components';

export const HeaderBar = styled.header`
  padding-block: 12px;
  z-index: 10;
  top: 12px;
  left: 50%;
  @media screen and (max-width: 374px) {
    max-width: 374px;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    padding-block: 19px;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 126px;
  height: 13px;
  @media screen and (min-width: 1440px) {
    height: 17px;
    width: 152px;
  }
`;
export const HideLogout = styled.div`
  display: block;
  @media screen and (min-width: 1440px) {
    width: 78px;
    height: 24px;
  }
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
