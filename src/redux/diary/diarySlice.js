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

const handleDeleteProductFulfilled = (state, action) => {
  state.diaryInfo.isLoadingDiary = false;
  state.diaryInfo.error = null;

  const productIdToDelete = action.payload.data;
  console.log(
    'Product._id:',
    state.diaryInfo.products.map((product) => product._id)
  );
  console.log('action.payload.productId:', productIdToDelete);

  const newProductsArr = state.diaryInfo.products.filter(
    (product) => product._id !== action.payload.data.productId
  );
  state.diaryInfo.products = newProductsArr;
  // const index = state.diaryInfo.products.findIndex(
  //   (product) => product._id === action.payload.productId
  // );
  // state.diaryInfo.products.splice(index, 1);
};

const handleDeleteExerciseFulfilled = (state, action) => {
  state.diaryInfo.isLoadingDiary = false;
  state.diaryInfo.error = null;

  console.log(action.payload.data);
  console.log(state.diaryInfo.products);

  const exerciseIdToDelete = action.payload.data;
  console.log(
    'Exercise._id:',
    state.diaryInfo.exercise.map((exercise) => exercise._id)
  );
  console.log('action.payload.data.exerciseId:', exerciseIdToDelete);

  const newExercisesArr = state.diaryInfo.exercises.filter(
    (exercise) => exercise._id !== action.payload.data
  );
  state.diaryInfo.exercises = newExercisesArr;
  // const index = state.diaryInfo.exercises.findIndex(
  //   (exercise) => exercise._id === action.payload.data.exerciseId
  // );
  // state.diaryInfo.exercises.splice(index, 1);
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
