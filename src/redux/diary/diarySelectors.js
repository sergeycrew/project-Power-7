export const selectIsLoadingDiary = (state) =>
  state.diary.diaryInfo.isLoadingDiary;
export const selectIsLoadingProducts = (state) =>
  state.diary.diaryInfo.isLoadingProducts;
export const selectIsLoadingExercises = (state) =>
  state.diary.diaryInfo.isLoadingExercises;
export const selectError = (state) => state.diary.diaryInfo.error;
export const selectCurrentDate = (state) => state.diary.currentDate;
export const selectBurnedCalories = (state) =>
  state.diary.diaryInfo.burnedCalories;
export const selectConsumedCalories = (state) =>
  state.diary.diaryInfo.consumedCalories;
export const selectDoneExercisesTime = (state) =>
  state.diary.diaryInfo.doneExercisesTime;
export const selectProducts = (state) => state.diary.diaryInfo.products;
export const selectExercises = (state) => state.diary.diaryInfo.exercises;
