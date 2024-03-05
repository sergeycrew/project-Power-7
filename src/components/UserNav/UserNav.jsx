import { UserNavBar, Link } from './UserNav.styled';

export const UserNav = () => {
  return (
    <UserNavBar>
      
          <Link to="/diary">Diary</Link>
       
          <Link to="/products">Products</Link>
        
          <Link to="/exercises">Exercises</Link>
     
    </UserNavBar>
  );
};

