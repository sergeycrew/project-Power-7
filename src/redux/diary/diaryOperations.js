import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const tempToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU3YWY1MTQwZmI2ZjdmNDRkOGJmOGYiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzA5ODI4MDgxLCJleHAiOjE3MDk5MTA4ODF9.XZ5zY65k5DHoNxhW4HSo2FkecylMGw74PZzTxIM21rc';

export const fetchAllDairyInfo = createAsyncThunk(
  '/diary/alldaydiary',
  async (date, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      // const storedToken = state.auth.token;
      // setAuthHeader(storedToken);
      setAuthHeader(tempToken);
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
  async (productId, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const storedToken = state.auth.token;
      // setAuthHeader(storedToken);
      const response = await axios.delete(
        `/diary/deldiaryproduct/${productId}`
      );
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
  async (exerciseId, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const storedToken = state.auth.token;
      // setAuthHeader(storedToken);
      const response = await axios.delete(
        `/diary/deldiaryexercisest/${exerciseId}`
      );
      toast.success('An exercise has been successfully deleted!');
      return response.data;
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
