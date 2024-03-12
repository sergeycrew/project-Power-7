import { useSelector } from 'react-redux';
import { UserNavBar, Link } from './UserNav.styled';
import { selectUserDataComplete } from '../../redux/auth/authSelectors';

export const UserNav = () => {
  const userParams = useSelector(selectUserDataComplete);
  return (
    <UserNavBar>
      {userParams && (
        <>
          <Link to="/diary">Diary</Link>

          <Link to="/products">Products</Link>

          <Link to="/exercises">Exercises</Link>
        </>
      )}
    </UserNavBar>
  );
};
