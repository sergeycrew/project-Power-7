import * as s from './ExercisesCategories.styled';
import { useCallback, useEffect } from 'react';
import { useState } from 'react';



import { ExerciseCard } from 'components/ExerciseCard/ExerciseCard';

import { fetchExercisesCategory } from '../../redux/exercises/operationsExercises';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategoriesPage,
  selectCategory,
  // selectCategoryPicked,
  selectFilter,
  selectMaxCategoriesPage,
  selectPaginCategories,
} from '../../redux/exercises/selectorsExercises';
import { changeCategoriesPage } from '../../redux/exercises/sliceExercises';
import { WrapperRadio } from '../UserForm/UserForm.styled';

export const ExercisesCategories = ({ handleSetExName }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectPaginCategories);

  const maxPage = useSelector(selectMaxCategoriesPage);
  const pagePagin = useSelector(selectCategoriesPage);





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
      )
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
