import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const temptoken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU3YWY1MTQwZmI2ZjdmNDRkOGJmOGYiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzA5NzQyNzkzLCJleHAiOjE3MDk4MjU1OTN9.cPR4Cz8wSDqtjENdqpJxs5AlmbjMRwVqxpezsGA3HuM';
// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// axios.defaults.baseURL = 'https://backend-power-pulse-7.onrender.com/';
const getParams = ({
  productFilter: { category = '', title = '', type = '' },
  auth = '',
}) => {
  const blood = auth.user.blood;
  return { category, title, blood, recomended: type };
};

export const fetchProducts = createAsyncThunk(
  'products/All',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const params = getParams(state);
    console.dir(params);
    try {
      // setAuthHeader(temptoken);

      const response = await axios.get('products/all', { params });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const productList = createAsyncThunk(
  'products/All',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get('products/all');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);