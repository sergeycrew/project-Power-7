import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const tempToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWUyM2MwZDkwZGNmMGFkM2ZjNzMwOWMiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzA5ODU5MDg4LCJleHAiOjE3MDk5NDE4ODh9._w4BrKwN4EJn5MIQKxFXQtiUNeHXjhYdEfIEYUMq_0g';

export const fetchAllDairyInfo = createAsyncThunk(
  '/diary/alldaydiary',
  async (date, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      // const storedToken = state.auth.token;
      // setAuthHeader(storedToken);
      // setAuthHeader(tempToken);
      const response = await axios.post('diary/alldaydiary', date);
      console.log(response.data);
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
    console.log(product);
    try {
      // const state = thunkAPI.getState();
      // const storedToken = state.auth.token;
      // setAuthHeader(storedToken);
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
      // const state = thunkAPI.getState();
      // const storedToken = state.auth.token;
      // setAuthHeader(storedToken);
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
