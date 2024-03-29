import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.modalOverlay};
  overflow: hidden;
  z-index: 90;
`;
export const WrapperModalWindowUserMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 200px;
  height: 100%;
  background-color: rgba(230, 83, 60, 1);
  z-index: 1200;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 100%;
    padding: 26px 32px 32px 32px;
  }
  @media screen and (max-width: 1439px) {
    &.show {
      display: flex;
    }

    &.hidden {
      display: none;
    }
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BtnCloseWindow = styled.button`
  position: absolute;
  top: 16px;
  right: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
     top: 23px;
  right: 29px;
  }
`;
export const IconCloseWindow = styled.svg`
  width: 24px;
  height: 24px;
  fill: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const UserNavModalWindow = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;
  margin-top: 145px;
  margin-bottom: 282px;
  height: 146px;
  width: 114px;
  @media screen and (min-width: 768px) {
    width: 122px;
    height: 164px;
  }
`;
export const UserNavLinkModal = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #efede8;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: #e6533c;
  }
  font-size: 14px;
  padding: 10px 27px 10px 27px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  &:hover {
    background-color: rgba(239, 137, 100, 1);
  }
  &.active {
    background-color: #e6533c;
    border: 1px solid rgba(239, 237, 232, 1);
    &:hover {
      background-color: rgba(239, 137, 100, 1);
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const LogoutModalWindowWrapper = styled.div`
  position: absolute;
  top: 94%;
  left: 5%;
  height: 20px;
  width: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  @media screen and (min-width: 768px) {
    width: 78px;
    height: 24px;
  }
`;

export const LogoutBtn = styled.button`
  position: absolute;
  bottom: 26px;
  left: 32px;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.33;
  color: rgba(239, 237, 232, 1);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
