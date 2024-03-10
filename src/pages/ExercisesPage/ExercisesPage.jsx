import { ExercisesNav } from 'components/ExercisesNav/ExercisesNav';
import { Outlet, useLocation } from 'react-router-dom';

import { ExercisesPageWrap, Container } from './ExercisesPage.styled';
import { SecondaryPageBg } from 'components/SecondaryPageBg/SecondaryPageBg';
import { useEffect, useState } from 'react';
import { featchAllExercises } from '../../redux/exercises/operationsExercises';
import { useDispatch } from 'react-redux';
import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';

const ExercisesPage = () => {
//   const location = useLocation();
const dispatch = useDispatch();

// const [exercisesCategories, setExercisesCategories] = useState(null);



useEffect(() => {
    dispatch(featchAllExercises());
  }, [dispatch]);

  return (

    <SecondaryPageBg 
    // hideFilter={isFilter}
    >

      <Container>
        <ExercisesPageWrap>
          <ExercisesNav/>
          <ExercisesCategories/>
     
        </ExercisesPageWrap>
      </Container>
    </SecondaryPageBg>
  );
};

export default ExercisesPage;