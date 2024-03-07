import { Route, Routes, Navigate } from 'react-router-dom';

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

import { ExercisesCategories } from './components/ExercisesCategories/ExercisesCategories';
import { ExercisesListByCategory } from './components/ExercisesList/ExercisesList';

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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
