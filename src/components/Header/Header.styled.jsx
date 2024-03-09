import styled from 'styled-components';

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  padding-inline: 20px;
  padding: 20px 24px;
  margin-inline: auto;
  z-index: 10;

  @media screen and (min-width: 768px) {
    padding-inline: 32px;
    padding: 30px 34px;
  }

  @media screen and (min-width: 1440px) {
    padding-inline: 90px;
    padding: 30px 90px;
  }
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
