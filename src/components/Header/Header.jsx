import { Logo } from 'components/Logo/Logo';
import { Logout } from 'components/Logout/Logout';
import { UserNav } from 'components/UserNav/UserNav';
import { UserBar } from 'components/UserBar/UserBar';
import { Container } from 'styles/container';
import { HeaderBar, HideLogout, LogoWrap } from './Header.styled';


import { BurgerMenuButton } from 'components/BurgerMenuButton/BurgerMenuButton';
import { ModalWindowMenuUser } from 'components/ModalWindowBurgerMenu/ModalWindowBurgerMenu'

import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';



export const Header = () => {
  const { isLoggedIn } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);
  const buttonRef = useRef(null);
  const isWideScreen = window.innerWidth >= 1440;
  const headerStyle = {
    borderBottom: isLoggedIn ? '1px solid rgba(239, 237, 232, 0.2)' : '0',
    position: isLoggedIn ? 'static' : 'absolute',
    backgroundColor:
      isWideScreen && !isLoggedIn ? 'transparent' : 'rgba(4, 4, 4, 1)',
  };

  
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = useCallback(() => {
    if (isModalOpen) {
      setModalOpen(false);
      if (buttonRef.current) {
        buttonRef.current.blur();
      }
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  useEffect(() => {
    if (isLoggedIn && isModalOpen) {
      closeModal();
    }
  }, [isLoggedIn, isModalOpen, closeModal]);

  return (
    <Container>
      <HeaderBar style={headerStyle}>
        <LogoWrap>
          <Logo />
        </LogoWrap>

        <UserNav />
        <UserBar />

        <HideLogout>
          <Logout />
        </HideLogout>
        <BurgerMenuButton openModal={openModal} buttonRef={buttonRef}/>
        {isModalOpen && <ModalWindowMenuUser closeModal={closeModal}/>}
      </HeaderBar>
    </Container>
  );
};
