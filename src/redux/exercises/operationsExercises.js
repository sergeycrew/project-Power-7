import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchExercisesCategory = createAsyncThunk(
  'exercises/fetchExercisesCategory',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/exercises');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const featchAllExercises = createAsyncThunk(
  'exercises/fetchExercises',
  async (querry, thunkAPI) => {
    try {
      let filter;
      const { exercises } = thunkAPI.getState();
      if (exercises.filter === 'Body parts') {
        filter = 'bodyPart';
      }
      if (exercises.filter === 'Muscles') {
        filter = 'target';
      }
      if (exercises.filter === 'Equipment') {
        filter = 'equipment';
      }
      const res = await axios.get(
        `/exercises/all?${filter}=${querry}&page=${exercises.exercisesPage}&limit=${exercises.exercisesLimit}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const featchAddExercises = createAsyncThunk(
  'exercises/addexercises',
  async (credentials, thunkAPI) => {
    try {
      // credentials = {
      //   exerciseId,
      //   calories,
      //   time,
      // };
      toast.success('Workout is successful');
      const data = await axios.post('diary/addexercises', {
        ...credentials,
        date: Date.now(),
      });

      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
