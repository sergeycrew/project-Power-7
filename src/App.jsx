import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';

import MainLayout from './components/MainLayout/MainLayout';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('pages/ExercisesPage/ExercisesPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));



const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/profile" element={<ProfilePage />} />


        </Route>
         <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
