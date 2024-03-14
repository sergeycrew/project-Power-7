import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllDairyInfo,
  deleteExercise,
  deleteProduct,
} from './diaryOperations';
import {
  logOut,
  logIn,
  register,
  GoogleSignIn,
  refreshUser,
} from '../auth/authOperation';

const initialState = {
  currentDate: 0,
  diaryInfo: {
    burnedCalories: 0,
    consumedCalories: 0,
    doneExercisesTime: 0,
    products: [],
    exercises: [],
    isLoadingDiary: false,
    isLoadingProducts: false,
    isLoadingExercises: false,
    error: null,
  },
};

const handleLogOutFulfilled = (state) => {
  state.diaryInfo = initialState.diaryInfo;
  state.currentDate = 0;
};

const updateCurrentDate = (state) => {
  state.currentDate = Date.now();
};

const handlePending = (state) => {
  state.diaryInfo.isLoadingDiary = true;
  state.diaryInfo.error = null;
};

const handlePendingDeleteProduct = (state) => {
  state.diaryInfo.isLoadingProducts = true;
  state.diaryInfo.error = null;
};

const handlePendingDeleteExercise = (state) => {
  state.diaryInfo.isLoadingExercises = true;
  state.diaryInfo.error = null;
};

const handleRejected = (state, action) => {
  state.diaryInfo.isLoadingDiary = false;
  state.diaryInfo.error = action.payload;
};

const handleRejectedDeleteProduct = (state, action) => {
  state.diaryInfo.isLoadingProducts = false;
  state.diaryInfo.error = action.payload;
};

const handleRejectedDeleteExercise = (state, action) => {
  state.diaryInfo.isLoadingExercises = false;
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
  state.diaryInfo.isLoadingProducts = false;
  state.diaryInfo.error = null;

  const newArrProducts = state.diaryInfo.products.filter(
    (product) => product._id !== payload.products
  );
  state.diaryInfo.products = newArrProducts;
  state.diaryInfo.consumedCalories = payload.data.consumedCalories;
};

const handleDeleteExerciseFulfilled = (state, { payload }) => {
  state.diaryInfo.isLoadingExercises = false;
  state.diaryInfo.error = null;

  const newArrExercises = state.diaryInfo.exercises.filter(
    (exercise) => exercise._id !== payload.exercises
  );

  state.diaryInfo.exercises = newArrExercises;
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
      .addCase(register.fulfilled, updateCurrentDate)
      .addCase(logIn.fulfilled, updateCurrentDate)
      .addCase(GoogleSignIn.fulfilled, updateCurrentDate)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refreshUser.fulfilled, updateCurrentDate)
      .addCase(fetchAllDairyInfo.pending, handlePending)
      .addCase(fetchAllDairyInfo.fulfilled, handleFetchAllFulfilled)
      .addCase(fetchAllDairyInfo.rejected, handleRejected)
      .addCase(deleteProduct.pending, handlePendingDeleteProduct)
      .addCase(deleteProduct.fulfilled, handleDeleteProductFulfilled)
      .addCase(deleteProduct.rejected, handleRejectedDeleteProduct)
      .addCase(deleteExercise.pending, handlePendingDeleteExercise)
      .addCase(deleteExercise.fulfilled, handleDeleteExerciseFulfilled)
      .addCase(deleteExercise.rejected, handleRejectedDeleteExercise);
  },
});

export const diaryReducer = diarySlice.reducer;
export const { changeCalendarDay } = diarySlice.actions;
export const { previousDay } = diarySlice.actions;
export const { nextDay } = diarySlice.actions;
