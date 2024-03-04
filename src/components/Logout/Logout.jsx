//import { useDispatch } from 'react-redux';
import { LogoutButtonLink, Text } from './Logout.styled';
import sprite from 'images/sprite/sprite.svg';

//import { logOut } from 'redux/auth/authOperations';

export const Logout = () => {
  //const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(logOut());
  // };

  return (
    <LogoutButtonLink
      //onClick={handleClick}
    >
      <Text>Logout</Text>
      <svg width="20" height="20" >
        <use href={`${sprite}#logout`} />
      </svg>
    </LogoutButtonLink>
  );
};

