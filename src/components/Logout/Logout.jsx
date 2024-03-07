//import { useDispatch } from 'react-redux';
import {
  LogoutButtonLink,
  Text,
  LogoWrapper,
  LogOutIcon,
} from './Logout.styled';
import sprite from 'images/sprite/sprite.svg';

//import { logOut } from 'redux/auth/authOperations';

export const Logout = () => {
  //const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(logOut());
  // };

  return (
    <LogoWrapper>
      <LogoutButtonLink
      //onClick={handleClick}
      >
        <Text>Logout</Text>
        <LogOutIcon>
          <use href={`${sprite}#logout`} />
        </LogOutIcon>
      </LogoutButtonLink>
    </LogoWrapper>
  );
};
