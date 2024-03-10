import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = (state) => state.exercises.loading;

export const selectFilter = (state) => state.exercises.filter;

export const selectExercises = (state) => state.exercises.exercises;

export const selectCategory = (state) => state.exercises.categories;

export const selectCategoryPicked = (state) => state.exercises.categoryPicked;

export const selectExercisesPage = (state) => state.exercises.exercisesPage;

export const selectFilterCategoruExercises = createSelector(
  [selectFilter, selectCategory, selectLoading],
  (filter, categories, loading) => {
    if (!loading) {
      return categories.filter((item) => item?.filter === filter);
    }
  }
);
