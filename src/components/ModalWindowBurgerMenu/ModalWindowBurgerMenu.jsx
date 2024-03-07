import sprite from 'images/sprite/sprite.svg';
import {
  BtnCloseWindow,
  IconCloseWindow,
  LogoutModalWindowWrapper,
  OverlayModal,
  UserNavLinkModal,
  UserNavModalWindow,
  WrapperModalWindowUserMenu,
} from './ModalWindowBurgerMenu.styled';
import { Logout } from 'components/Logout/Logout';

export const ModalWindowMenuUser = ({ closeModal }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      <OverlayModal onClick={handleBackdropClick}></OverlayModal>

      <WrapperModalWindowUserMenu>
        <BtnCloseWindow onClick={closeModal}>
          <IconCloseWindow>
            <use href={`${sprite}#x`} />
          </IconCloseWindow>
        </BtnCloseWindow>
        <UserNavModalWindow>
          <UserNavLinkModal to="/diary" onClick={closeModal}>
            Diary
          </UserNavLinkModal>
          <UserNavLinkModal to="/products" onClick={closeModal}>
            Products
          </UserNavLinkModal>
          <UserNavLinkModal to="/exercises" onClick={closeModal}>
            Exercises
          </UserNavLinkModal>
        </UserNavModalWindow>
        <LogoutModalWindowWrapper>
          <Logout color="#efede8" closeModal={closeModal}/>
        </LogoutModalWindowWrapper>
      </WrapperModalWindowUserMenu>
    </>
  );
};

