import { Route, Routes, Navigate } from 'react-router-dom';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';

import { lazy, useEffect } from 'react';

import MainLayout from './components/MainLayout/MainLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('pages/ExercisesPage/ExercisesPage'));
//const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

import { useAuth } from './hooks';
import { Verify, currentUser, refreshUser } from './redux/auth/authOperation';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './components/Loader/Loader';
import { selectUserDataComplete } from './redux/auth/authSelectors';

function App() {
  const { isRefreshing, isLoggedIn, isLoading } = useAuth();
  const userParams = useSelector(selectUserDataComplete);
  const redirectLink = userParams ? '/diary' : '/profile';
  const dispatch = useDispatch();
  const currentLoading = isLoggedIn && !isLoading;
  const url = window.location;
  const verifyToken = new URLSearchParams(url.search).get('verificationToken');

  useEffect(() => {
    const refetch = async () => {
      if (verifyToken) {
        dispatch(Verify(verifyToken))
      }
    };
    refetch();
    dispatch(refreshUser());
    if (isLoggedIn) {
      dispatch(currentUser());
    }
  }, [dispatch, isLoggedIn, verifyToken]);

  // return ( && currentLoading
  return isRefreshing   ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <PublicRoute redirectTo={redirectLink} component={<WelcomePage />} />
            }
          />
          {/* <Route index element={<WelcomePage />} /> */}
          <Route
            path="/signUp"
            element={
              <PublicRoute redirectTo="/profile" component={<SignUpPage />} />
            }
          />
          {/* <Route path="/signUp" element={<SignUpPage />} /> */}
          <Route
            path="/signIn"
            element={
              <PublicRoute redirectTo={redirectLink} component={<SignInPage />} />
            }
          />
          {/* <Route path="/signIn" element={<SignInPage />} /> */}
          <Route
            path="/diary"
            element={<PrivateRoute redirectTo="/" component={<DiaryPage />} />}
          />
          {/* <Route path="/diary" element={<DiaryPage />} /> */}
          <Route
            path="/products"
            element={
              <PrivateRoute redirectTo="/" component={<ProductsPage />} />
            }
          />
          {/* <Route path="/products" element={<ProductsPage />}/> */}
          <Route
            path="/exercises"
            element={
              <PrivateRoute redirectTo="/" component={<ExercisesPage />} />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/" component={<ProfilePage />} />
            }
          />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Route>
        <Route path="/notfound" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </>
  );
}
export default App;
