import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllDairyInfo,
  deleteExercise,
  deleteProduct,
} from './diaryOperations';

const diaryState = {
  date: '',
  burnedCalories: 0,
  consumedCalories: 0,
  products: [],
  exercises: [],
  isLoading: false,
  error: null,
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
  state.isLoading = false;
  state.error = null;
  state.date = payload.data.date;
  state.burnedCalories = payload.data.burnedCalories;
  state.consumedCalories = payload.data.consumedCalories;
  state.products = payload.data.products;
  state.exercises = payload.data.exercises;
};

const handleDeleteProductFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.products.findIndex(
    (product) => product.id === action.payload.id
  );
  state.products.splice(index, 1);
};

const handleDeleteExerciseFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.exercises.findIndex(
    (exercise) => exercise.id === action.payload.id
  );
  state.exercises.splice(index, 1);
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState: diaryState,
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
