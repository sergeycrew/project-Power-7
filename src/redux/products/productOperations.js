import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getParams = ({
  filter: { category = '', title = '', type = '' },
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
    try {
      // setAuthHeader(temptoken);
      const response = await axios.get('products/all', { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'products/Category',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('products');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
