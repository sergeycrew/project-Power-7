import { createSlice } from '@reduxjs/toolkit';
import {
  featchAllExercises,
  fetchExercisesCategory,
} from './operationsExercises';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    categories: [],
    filter: 'Body parts',
    exercises: [],
    exercisesPage: 1,
    exercisesLimit: 20,
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    changeExercisesPage(state, action) {
      state.exercisesPage += action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchExercisesCategory.pending, handlePending)
      .addCase(fetchExercisesCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchExercisesCategory.rejected, handleRejected)
      .addCase(featchAllExercises.pending, handlePending)
      .addCase(featchAllExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.exercises = action.payload;
      })
      .addCase(featchAllExercises.rejected, handleRejected),
});

export const exercisesReducer = exercisesSlice.reducer;

export const { changeFilter, changeExercisesPage } = exercisesSlice.actions;
