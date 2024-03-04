import { Loader } from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from './MainLayout.styled';
import { Header } from '../Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Layout>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Layout>
      <footer></footer>
    </>
  );
};

export default MainLayout;