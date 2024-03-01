import * as s from './Header.styled';
import sprite from 'assets/sprite.svg';

export const Header = () => {

  return (
    <s.HeaderContainer>
      <s.Navigation>
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
