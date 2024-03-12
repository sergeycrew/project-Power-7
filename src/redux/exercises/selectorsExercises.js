import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = (state) => state.exercises.loading;

export const selectFilter = (state) => state.exercises.filter;

export const selectExercises = (state) => state.exercises.exercises;

export const selectCategory = (state) => state.exercises.categories;

export const selectCategoryPicked = (state) => state.exercises.categoryPicked;

export const selectMaxPage = (state) => state.exercises.maxPage;

export const selectExercisesPage = (state) => state.exercises.exercisesPage;
export const selectExercisesLimit = (state) => state.exercises.exercisesLimit;

export const selectFilterCategoruExercises = createSelector(
  [selectFilter, selectCategory, selectLoading],
  (filter, categories, loading) => {
    if (!loading) {
      return categories.filter((item) => item?.filter === filter);
    }
  }
);
export const selectCategoriesPage = (state) => state.exercises.categoriesPage;

export const selectCategoriesLimit = (state) => state.exercises.categoriesLimit;
export const selectPaginCategories = createSelector(
  [selectFilterCategoruExercises, selectCategoriesPage, selectCategoriesLimit],
  (categories, categoriesPage, categoriesLimit) => {
    let newArr = [];
    if (categories?.length > 0) {
      newArr = categories.slice(
        (categoriesPage - 1) * categoriesLimit,
        categoriesPage * categoriesLimit
      );
    }
    return newArr;
  }
);

export const selectMaxCategoriesPage = createSelector(
  [selectFilterCategoruExercises, selectCategoriesLimit],
  (categories, categoriesLimit) => {
    let arrPage = [];
    const maxPage = Math.ceil(categories?.length / categoriesLimit);
    if (maxPage > 1) {
      for (let index = 1; index <= maxPage; index++) {
        arrPage.push(index);
      }
      return arrPage;
    }
  }
);

