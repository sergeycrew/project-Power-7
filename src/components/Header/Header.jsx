import { Logo } from 'components/Logo/Logo';
import { Logout } from 'components/Logout/Logout';
import { UserNav } from 'components/UserNav/UserNav';
import { UserBar } from 'components/UserBar/UserBar';
import { Container } from 'styles/container';
import { HeaderBar, HideLogout, LogoWrap } from './Header.styled';


import { BurgerMenuButton } from 'components/BurgerMenuButton/BurgerMenuButton';
import { ModalWindowMenuUser } from 'components/ModalWindowBurgerMenu/ModalWindowBurgerMenu'

import { useCallback, useEffect, useRef, useState } from 'react';



export const Header = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const buttonRef = useRef(null);


  
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

  // useEffect(() => {
  //   if (isModalOpen) {
  //     closeModal();
  //   }
  // }, [isModalOpen, closeModal]);

  return (
    <Container>
      <HeaderBar>
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
