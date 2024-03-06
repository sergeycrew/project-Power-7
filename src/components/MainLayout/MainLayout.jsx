import { Loader } from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from './MainLayout.styled';
import { Header } from '../Header/Header';

const MainLayout = () => {
  return (
    
      <Layout>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
        <footer></footer>
        </Layout>
    
  );
};

export default MainLayout;