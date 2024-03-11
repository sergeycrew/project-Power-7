import { ExercisesNav } from 'components/ExercisesNav/ExercisesNav';

import * as s from './ExercisesPage.styled';

import { useSelector } from 'react-redux';
import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';

import { ExercisesListByCategory } from '../../components/ExercisesList/ExercisesList';
import { selectCategoryPicked } from '../../redux/exercises/selectorsExercises';
import { Container } from 'styles/container';
import { SecondaryPageBg } from '../../components/SecondaryPageBg/SecondaryPageBg';

const ExercisesPage = () => {
  const activeCategory = useSelector(selectCategoryPicked);
  return (
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
