
import { Logo } from 'components/Logo/Logo';
import { Logout } from 'components/Logout/Logout';
import { UserNav } from 'components/UserNav/UserNav';
import { UserBar } from 'components/UserBar/UserBar';
import { Container } from 'styles/container'
import { HeaderBar, HideLogout, LogoWrap } from './Header.styled'
import { Link } from 'react-router-dom';

export const Header = () => {

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
      </HeaderBar>
  
    </Container>
    
  );
};
