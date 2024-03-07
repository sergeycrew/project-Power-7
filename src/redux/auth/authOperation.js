// import instance from './apiAuth/apiAuth';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as api from './apiAuth/apiAuth';

// axios.defaults.baseURL = 'https://backend-power-pulse-7.onrender.com/api/';

// const temptoken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU3YWY1MTQwZmI2ZjdmNDRkOGJmOGYiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzA5ODI4MDgxLCJleHAiOjE3MDk5MTA4ODF9.XZ5zY65k5DHoNxhW4HSo2FkecylMGw74PZzTxIM21rc';

// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const register = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.register(data);
      console.log(result);
      toast.success('Registration is successful');
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      toast.error('Oops, something went wrong! Try again later.');
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/signin',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      toast.success('Login is successful');
      console.log(result);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      toast.error('Oops, something went wrong! Try again later.');
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      toast.success('Logout is successful');
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      toast.error('Oops, something went wrong! Try again later.');
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
      // setAuthHeader(temptoken);
      // setAuthHeader(persistedToken);

      // const { data } = await instance.get('users/current');

      // return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const updateUserAvatar = createAsyncThunk(
  'users/updateAvatar',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const { data } = await axios.patch('users/updateAvatar', formData);
      return URL.createObjectURL(file);
      // return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserParams = createAsyncThunk(
  'users/update',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.put('users/update', params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userVerifyAgain = createAsyncThunk(
  'users/verifyAgain',
  async (creds, thunkAPI) => {
    try {
      const { data } = await axios.post('users/verifyAgain', creds);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// credentials
