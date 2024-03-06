import { Route, Routes, Navigate } from 'react-router-dom';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import SignInPage from 'pages/SignInPage/SignInPage';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import MainLayout from './components/MainLayout/MainLayout';
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
            <Route path="bodyPart" element={<ExercisesCategories query={'Body parts'} />}></Route>
            <Route path="bodyPart/:filter" element={<ExercisesListByCategory />} />
            <Route path="target" element={<ExercisesCategories query={'Muscles'} />} ></Route>
            <Route path="target/:filter" element={<ExercisesListByCategory />} />
            <Route path="equipment" element={<ExercisesCategories query={'Equipment'} />} ></Route>
            <Route path="equipment/:filter" element={<ExercisesListByCategory />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />


        </Route>
         <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;          
