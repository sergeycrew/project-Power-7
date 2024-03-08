import { useDispatch } from 'react-redux';
import {
  LogoutButtonLink,
  Text,
  LogoWrapper,
  LogOutIcon,
} from './Logout.styled';

import sprite from 'images/sprite/sprite.svg';

import { logOut } from '../../redux/auth/authOperation';

export const Logout = ({ color, closeModal }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logOut());
    // closeModal();
  };

  return (
    <LogoWrapper>
      <LogoutButtonLink to="/" onClick={(e) => handleClick(e)}>
        <Text>Logout</Text>
        <LogOutIcon style={{ '--color1': color }}>
          <use href={`${sprite}#logout`} />
        </LogOutIcon>
      </LogoutButtonLink>
    </LogoWrapper>
  );
};
