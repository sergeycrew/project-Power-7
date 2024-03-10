import { Route, Routes, Navigate } from 'react-router-dom';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';

import { lazy, useEffect } from 'react';

import MainLayout from './components/MainLayout/MainLayout';
//import {HomePage} from './pages/HomePage/HomePageAlt'


const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('pages/ExercisesPage/ExercisesPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

import { ExercisesCategories } from './components/ExercisesCategories/ExercisesCategories';
import { ExercisesListByCategory } from './components/ExercisesList/ExercisesList';
import { useAuth } from './hooks';
import { refreshUser } from './redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { Loader } from './components/Loader/Loader';





function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isRefreshing } = useAuth();
  // return (
  return isRefreshing ? (
    
    <Loader/>
  ) :   (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PublicRoute redirectTo="/diary" component={<WelcomePage/>}/>}/>
          {/* <Route index element={<WelcomePage />} /> */}
          <Route path="/signUp" element={<PublicRoute redirectTo="/profile" component={<SignUpPage />}/>}/>
          {/* <Route path="/signUp" element={<SignUpPage />} /> */}
          <Route path="/signIn" element={<PublicRoute redirectTo="/diary" component={<SignInPage />}/>}/>
          {/* <Route path="/signIn" element={<SignInPage />} /> */}
          <Route path="/diary" element={<PrivateRoute redirectTo="/" component={<DiaryPage />}/>}/>
          {/* <Route path="/diary" element={<DiaryPage />} /> */}
          <Route path="/products" element={<PrivateRoute redirectTo="/" component={<ProductsPage />}/>}/>
          {/* <Route path="/products" element={<ProductsPage />}/> */}
          <Route path="/exercises" element={<ExercisesPage />}>
            <Route index element={<Navigate to="bodyPart" />} />
            <Route
              path="bodyPart"
              element={<ExercisesCategories query={'Body parts'} />}
            ></Route>
            <Route
              path="bodyPart/:filter"
              element={<ExercisesListByCategory />}
            />
            <Route
              path="target"
              element={<ExercisesCategories query={'Muscles'} />}
            ></Route>
            <Route
              path="target/:filter"
              element={<ExercisesListByCategory />}
            />
            <Route
              path="equipment"
              element={<ExercisesCategories query={'Equipment'} />}
            ></Route>
            <Route
              path="equipment/:filter"
              element={<ExercisesListByCategory />}
            />
          </Route>
          <Route path="/profile" element={<PrivateRoute redirectTo="/" component={<ProfilePage/>}/>} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
