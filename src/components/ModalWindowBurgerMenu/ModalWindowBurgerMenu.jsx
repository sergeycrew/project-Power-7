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
import { useSelector } from 'react-redux';
import { selectUserDataComplete } from '../../redux/auth/authSelectors';

export const ModalWindowMenuUser = ({ closeModal }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const userParams = useSelector(selectUserDataComplete);

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
        {userParams && (
          <>
          <UserNavLinkModal to="/diary" onClick={closeModal}>
            Diary
          </UserNavLinkModal>
          <UserNavLinkModal to="/products" onClick={closeModal}>
            Products
          </UserNavLinkModal>
          <UserNavLinkModal to="/exercises" onClick={closeModal}>
            Exercises
          </UserNavLinkModal>
          </>
          )}
        </UserNavModalWindow>
        <LogoutModalWindowWrapper>
          <Logout color="#efede8" closeModal={closeModal}/>
        </LogoutModalWindowWrapper>
      </WrapperModalWindowUserMenu>
    </>
  );
};

