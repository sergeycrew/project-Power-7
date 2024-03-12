import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllDairyInfo,
  deleteExercise,
  deleteProduct,
} from './diaryOperations';

const initialState = {
  currentDate: Date.now(),
  diaryInfo: {
    burnedCalories: 0,
    consumedCalories: 0,
    doneExercisesTime: 0,
    products: [],
    exercises: [],
    isLoadingDiary: false,
    error: null,
  },
};

const handlePending = (state) => {
  state.diaryInfo.isLoadingDiary = true;
  state.diaryInfo.error = null;
};

const handleRejected = (state, action) => {
  state.diaryInfo.isLoadingDiary = false;
  state.diaryInfo.error = action.payload;
};

const handleFetchAllFulfilled = (state, { payload }) => {
  state.diaryInfo.isLoadingDiary = false;
  state.diaryInfo.error = null;
  state.diaryInfo.burnedCalories = payload.data.burnedCalories;
  state.diaryInfo.consumedCalories = payload.data.consumedCalories;
  state.diaryInfo.doneExercisesTime = payload.data.doneExercisesTime;
  state.diaryInfo.products = payload.data.products;
  state.diaryInfo.exercises = payload.data.exercises;
};

const handleDeleteProductFulfilled = (state, { payload }) => {
  state.diaryInfo.isLoadingDiary = false;
  state.diaryInfo.error = null;

  state.diaryInfo.products = payload.data.products;
  state.diaryInfo.consumedCalories = payload.data.consumedCalories;
  console.log(state.diaryInfo.consumedCalories);
};

const handleDeleteExerciseFulfilled = (state, { payload }) => {
  state.diaryInfo.isLoadingDiary = false;
  state.diaryInfo.error = null;

  state.diaryInfo.exercises = payload.data.exercises;
  state.diaryInfo.doneExercisesTime = payload.data.doneExercisesTime;
  state.diaryInfo.burnedCalories = payload.data.burnedCalories;
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    changeCalendarDay(state, action) {
      const date = new Date(action.payload);
      state.currentDate = date.getTime();
    },
    previousDay(state) {
      let date = new Date(state.currentDate);
      date.setDate(date.getDate() - 1);
      state.currentDate = date.getTime();
    },
    nextDay(state) {
      let date = new Date(state.currentDate);
      date.setDate(date.getDate() + 1);
      state.currentDate = date.getTime();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDairyInfo.pending, handlePending)
      .addCase(fetchAllDairyInfo.fulfilled, handleFetchAllFulfilled)
      .addCase(fetchAllDairyInfo.rejected, handleRejected)
      .addCase(deleteProduct.pending, handlePending)
      .addCase(deleteProduct.fulfilled, handleDeleteProductFulfilled)
      .addCase(deleteProduct.rejected, handleRejected)
      .addCase(deleteExercise.pending, handlePending)
      .addCase(deleteExercise.fulfilled, handleDeleteExerciseFulfilled)
      .addCase(deleteExercise.rejected, handleRejected);
  },
});

export const diaryReducer = diarySlice.reducer;
export const { changeCalendarDay } = diarySlice.actions;
export const { previousDay } = diarySlice.actions;
export const { nextDay } = diarySlice.actions;
