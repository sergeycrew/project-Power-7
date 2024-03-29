import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = !isLoggedIn 


  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};