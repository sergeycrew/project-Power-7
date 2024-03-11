import { createSlice } from '@reduxjs/toolkit';
import { getStatistic } from './statisticOperation';

const initialState = {
  statistic: {
    allExercisesVideo: 350,
    allBurnedCalories: 500,
    allUsers: 0,
    allDoneExercisesTime: 0,
    allDoneExercises: 0,
  },
  isLoading: false,
  error: null,
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getStatistic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStatistic.fulfilled, (state, action) => {
        state.statistic = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getStatistic.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const statisticReducer = statisticSlice.reducer;
