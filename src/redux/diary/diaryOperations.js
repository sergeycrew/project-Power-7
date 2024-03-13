import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchAllDairyInfo = createAsyncThunk(
  '/diary/alldaydiary',
  async (date, thunkAPI) => {
    try {
      const response = await axios.post('diary/alldaydiary', date);
      return response.data;
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  '/diary/deldiaryproduct',
  async (product, thunkAPI) => {
    try {
      const response = await axios.delete(`/diary/deldiaryproduct`, {
        data: product,
      });
      toast.success('A product has been successfully deleted!');
      return response.data;
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteExercise = createAsyncThunk(
  '/diary/deldiaryexercisest',
  async (exercise, thunkAPI) => {
    try {
      const response = await axios.delete(`/diary/deldiaryexercisest`, {
        data: exercise,
      });
      toast.success('An exercise has been successfully deleted!');
      return response.data;
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
