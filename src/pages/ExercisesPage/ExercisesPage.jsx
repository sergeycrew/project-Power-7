import { ExercisesNav } from 'components/ExercisesNav/ExercisesNav';
import { Outlet, useLocation } from 'react-router-dom';

import { ExercisesPageWrap, Container } from './ExercisesPage.styled';
import { SecondaryPageBg } from 'components/SecondaryPageBg/SecondaryPageBg';

const ExercisesPage = () => {
  const location = useLocation();

  const isFilter = location.pathname.length < 21;

  return (
    <SecondaryPageBg isFilter={isFilter}>
      <Container>
        <ExercisesPageWrap>
          <ExercisesNav />
            <Outlet />
        </ExercisesPageWrap>
      </Container>
    </SecondaryPageBg>
  );
};

export default ExercisesPage;