import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
axios.defaults.baseURL = 'https://backend-power-pulse-7.onrender.com/api/diary';

export const fetchAllDairyInfo = createAsyncThunk(
  '/alldaydiary',
  async (date, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const storedToken = state.auth.token;
      setAuthHeader(storedToken);
      const response = await axios.post('/alldaydiary', date);
      return response.data;
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  '/deldiaryproduct',
  async (productId, thunkAPI) => {
    try {
      //  const state = thunkAPI.getState();
      //  const storedToken = state.auth.token;
      //  setAuthHeader(storedToken);
      const response = await axios.delete(`/deldiaryproduct/${productId}`);
      toast.success('A product has been successfully deleted!');
      return response.data;
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteExercise = createAsyncThunk(
  '/deldiaryexercisest',
  async (exerciseId, thunkAPI) => {
    try {
      //  const state = thunkAPI.getState();
      //  const storedToken = state.auth.token;
      //  setAuthHeader(storedToken);
      const response = await axios.delete(`/deldiaryexercisest/${exerciseId}`);
      return response.data;
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
