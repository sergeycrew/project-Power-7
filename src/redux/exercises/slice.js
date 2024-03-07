import { createSlice } from '@reduxjs/toolkit';
import { bodyParts, equipment, exercises, muscules } from './operations';

const initialState = {
  exercises: [],
  bodyParts: [],
  muscules: [],
  equipment: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};


const handleExercisesFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.exercises = payload;
  };

  const handleBodyPartsFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.bodyParts = payload;
  };

  const handlemusculesFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.muscules = payload;
  };

  const handleEquipmentFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.bodyParts = payload;
  };


const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(exercises.pending, handlePending)
      .addCase(exercises.rejected, handleRejected)
      .addCase(exercises.fulfilled, handleExercisesFulfilled)

      .addCase(bodyParts.pending, handlePending)
      .addCase(bodyParts.rejected, handleRejected)
      .addCase(bodyParts.fulfilled, handleBodyPartsFulfilled)


      .addCase(muscules.pending, handlePending)
      .addCase(muscules.rejected, handleRejected)
      .addCase(muscules.fulfilled, handlemusculesFulfilled)
      

      .addCase(equipment.pending, handlePending)
      .addCase(equipment.rejected, handleRejected)
      .addCase(equipment.fulfilled, handleEquipmentFulfilled )
      
});

export const exercisesReducer = exercisesSlice.reducer;