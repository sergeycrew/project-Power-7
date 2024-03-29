import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getRecommended = (type) => {
  switch (type) {
    case 'recommended':
      return true;
    case 'not recommended':
      return false;
    default:
      return undefined;
  }
};
const getParams = ({
  filter: { category = '', title: titleFull = '', type = '' },
  products: { productsPage: page = 1, productsLimit: limit },
  auth = '',
}) => {
  const blood = auth.user.blood;
  const recommended = getRecommended(type);
  const title = titleFull.trim();
  if (recommended === true || recommended === false) {
    return { category, title, blood, recommended, page, limit };
  } else {
    return { category, title, blood, page, limit };
  }
};

export const fetchProducts = createAsyncThunk(
  'products/All',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const params = getParams(state);
    try {
      const response = await axios.get(`products/all`, { params });
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

export const featchAddProducts = createAsyncThunk(
  'products/addProducts',
  async (credentials, thunkAPI) => {
    try {
      // credentials = {
      //   productId,
      //   amount,
      //   calories,
      // };
      toast.success('Product added');
      await axios.post('diary/addPoduct', {
        ...credentials,
        date: Date.now(),
      });
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
