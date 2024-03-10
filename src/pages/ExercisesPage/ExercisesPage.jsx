import { ExercisesNav } from 'components/ExercisesNav/ExercisesNav';
import { Outlet, useLocation } from 'react-router-dom';

import { ExercisesPageWrap, Container } from './ExercisesPage.styled';
import { SecondaryPageBg } from 'components/SecondaryPageBg/SecondaryPageBg';
import { useEffect, useState } from 'react';
import { featchAllExercises } from '../../redux/exercises/operationsExercises';
import { useDispatch, useSelector } from 'react-redux';
import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';

import { ExercisesListByCategory } from '../../components/ExercisesList/ExercisesList';
import { selectCategoryPicked, selectExercises } from '../../redux/exercises/selectorsExercises';

const ExercisesPage = () => {
//   const location = useLocation();
const dispatch = useDispatch();

// const [exercisesCategories, setExercisesCategories] = useState(null);
// const [isCategoryPicked, setIsCategoryPicked] = useState(false); 

// const [activeFilter, setActiveFilter] = useState('Body parts');








// const handleFilterClick = filter => {
//   setActiveFilter(filter);
// };
// const handleCategoryPicked = (value) => {
//   setIsCategoryPicked(value); 
// };

// useEffect(() => {
//     dispatch(featchAllExercises(''));
//     // dispatch(selectExercises())
//   }, [dispatch]);

const activeCategory = useSelector(selectCategoryPicked)
  return (

    <SecondaryPageBg 
    // hidefilter={!exerciseName}
    >

      <Container>
        <ExercisesPageWrap>
          <ExercisesNav/>
          {activeCategory ? <ExercisesListByCategory /> : <ExercisesCategories  />}
      </ExercisesPageWrap>
      </Container>
    </SecondaryPageBg>
  );
};

export default ExercisesPage;