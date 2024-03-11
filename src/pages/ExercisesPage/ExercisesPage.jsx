import { ExercisesNav } from 'components/ExercisesNav/ExercisesNav';

import * as s from './ExercisesPage.styled';

import { useSelector } from 'react-redux';
import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';

import { ExercisesListByCategory } from '../../components/ExercisesList/ExercisesList';
import { selectCategoryPicked, selectLoading } from '../../redux/exercises/selectorsExercises';
import { Container } from 'styles/container';
import { SecondaryPageBg } from '../../components/SecondaryPageBg/SecondaryPageBg';
import { Loader } from '../../components/Loader/Loader';




const ExercisesPage = () => {
  const activeCategory = useSelector(selectCategoryPicked);
  // const isLoading = useSelector(selectLoading);
  return (
    // isLoading ? <Loader/> : 
    <SecondaryPageBg>
      <Container>
        <s.ExercisesPageWrap>
          <ExercisesNav />
          {activeCategory ? (
            <ExercisesListByCategory />
          ) : (
            <ExercisesCategories />
          )}
        </s.ExercisesPageWrap>
      </Container>
    </SecondaryPageBg>
  );
};

export default ExercisesPage;
