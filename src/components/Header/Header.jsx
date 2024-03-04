import * as s from './Header.styled';
import sprite from 'assets/sprite.svg';
import {Logo} from 'components/Logo/Logo';
import {Logout} from 'components/Logout/Logout';

export const Header = () => {

  return (
    <s.HeaderContainer>
      <s.Navigation>
        <div><Logo /></div>
        <div><Logout/></div>
        
        <s.StyledLink to="/welcome">
        <s.IconWrapper>
          <use href={`${sprite}#icon-logo`} />
        </s.IconWrapper>
      Welcome page
      </s.StyledLink>
      <s.StyledLink to="/diary">
          Diary
          
    </s.StyledLink>
    <s.StyledLink to="/products">
    Products
    </s.StyledLink>
    <s.StyledLink to="/exercises">
    Exercises
    </s.StyledLink>
    <s.StyledLink to="/profile">
    Profile
    </s.StyledLink>
    <s.LogoutBtn type="button" >
    LogoutBtn
    </s.LogoutBtn>
      </s.Navigation>
    </s.HeaderContainer>
  );
};
