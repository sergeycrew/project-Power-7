import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllDairyInfo,
  deleteExercise,
  deleteProduct,
} from './diaryOperations';


const diaryState = {
  currentDate: new Date().toISOString(),
  diaryInfo: {
    burnedCalories: 0,
    consumedCalories: 0,
    products: [],
    exercises: [],
    isLoading: false,
    error: null,
  },
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchAllFulfilled = (state, { payload }) => {
  state.diaryInfo.isLoading = false;
  state.diaryInfo.error = null;
  state.diaryInfo.burnedCalories = payload.data.burnedCalories;
  state.diaryInfo.consumedCalories = payload.data.consumedCalories;
  state.diaryInfo.products = payload.data.products;
  state.diaryInfo.exercises = payload.data.exercises;
};

const handleDeleteProductFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.diaryInfo.products.findIndex(
    (product) => product.id === action.payload.id
  );
  state.diaryInfo.products.splice(index, 1);
};

const handleDeleteExerciseFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.diaryInfo.exercises.findIndex(
    (exercise) => exercise.id === action.payload.id
  );
  state.diaryInfo.exercises.splice(index, 1);
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState: diaryState,
  reducers: {
    changeCalendarDay(state, action) {
      state.currentDate = action.payload;
    },
    previousDay(state) {
      let date = new Date(state.currentDate);
      date.setDate(date.getDate() - 1);
      state.currentDate = date.toISOString();
    },
    nextDay(state) {
      let date = new Date(state.currentDate);
      date.setDate(date.getDate() + 1);
      state.currentDate = date.toISOString();
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
