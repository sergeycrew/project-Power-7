import * as s from './ExercisesCategories.styled';
import { useEffect } from 'react';

import { ExerciseCard } from 'components/ExerciseCard/ExerciseCard';

import { fetchExercisesCategory } from '../../redux/exercises/operationsExercises';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategoriesPage,
  selectMaxCategoriesPage,
  selectPaginCategories,
} from '../../redux/exercises/selectorsExercises';
import {
  changeCategoriesLimit,
  changeCategoriesPage,
} from '../../redux/exercises/sliceExercises';
import { WrapperRadio } from '../UserForm/UserForm.styled';
import { useMediaQuery } from '@mui/system';

export const ExercisesCategories = ({ handleSetExName }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectPaginCategories);

  const maxPage = useSelector(selectMaxCategoriesPage);
  const pagePagin = useSelector(selectCategoriesPage);
  const isTabletScreen = useMediaQuery(
    '(min-width: 768px) and (max-width: 1439px)'
  );

  useEffect(() => {
    if (isTabletScreen) {
      dispatch(changeCategoriesLimit(9));
    } else {
      dispatch(changeCategoriesLimit(10));
    }
  }, [dispatch, isTabletScreen]);

  useEffect(() => {
    dispatch(fetchExercisesCategory());
  }, [dispatch]);

  return (
    <div>
      <s.CategoriesList>
        {categories?.map((card) => (
          <ExerciseCard
            key={card._id}
            handleSetExName={handleSetExName}
            filter={card.filter}
            title={card.name}
            photo={card.imgURL}
          />
        ))}
      </s.CategoriesList>
      <s.Pagination>
        {maxPage?.map((page) => (
          <WrapperRadio key={page}>
            <div className="radio">
              <input
                className="radio-input"
                type="radio"
                id={page}
                value={page}
                checked={pagePagin === page}
                onChange={() => dispatch(changeCategoriesPage(page))}
              />
              <label className="radio-label" htmlFor={page}></label>
            </div>
          </WrapperRadio>
        ))}
      </s.Pagination>
    </div>
  );
};
