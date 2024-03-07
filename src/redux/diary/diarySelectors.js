export const selectIsLoading = (state) => state.diary.isLoading;
export const selectError = (state) => state.diary.error;
export const selectCurrentDate = (state) => state.diary.currentDate;
export const selectBurnedCalories = (state) =>
  state.diary.diaryInfo.burnedCalories;
export const selectConsumedCalories = (state) =>
  state.diary.diaryInfo.consumedCalories;
export const selectDoneExercisesTime = (state) =>
  state.diary.diaryInfo.doneExercisesTime;
export const selectProducts = (state) => state.diary.diaryInfo.products;
export const selectExercises = (state) => state.diary.diaryInfo.exercises;
