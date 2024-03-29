import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://backend-power-pulse-7.onrender.com/api/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/register', credentials);
      setAuthHeader(data.tokens.accessToken);
      setTimeout(() => {
        toast.success('Registration is successful');
      }, 3000);

      setTimeout(() => {
        toast.success('We sent you a verification Email');
      }, 4000);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);

      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/signin',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      setAuthHeader(data.tokens.accessToken);

      setTimeout(() => {
        toast.success('Login is successful');
      }, 3000);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);

      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');
      clearAuthHeader();

      setTimeout(() => {
        toast.success('Logout is successful');
      }, 3000);
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');

      return rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('users/current');

      return data;
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'users/updateAvatar',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      toast.success('Avatar is updated');
      await axios.patch('users/updateAvatar', formData);
      return URL.createObjectURL(file);
      // return data;
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserParams = createAsyncThunk(
  'users/update',
  async (params, thunkAPI) => {
    try {
      toast.success('User information saved');
      const { data } = await axios.put('users/update', params);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userVerifyAgain = createAsyncThunk(
  'users/verifyAgain',
  async (creds, thunkAPI) => {
    try {
      toast.success('Verifycation Email has been send');
      const { data } = await axios.post('users/verifyAgain', creds);
      return data;
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'users/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistorToken = state.auth.token;
    if (persistorToken === '') {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }
    try {
      const tokens = await axios.post('/users/refresh', {
        refreshToken: persistorToken,
      });
      setAuthHeader(tokens.data.accessToken);
      return tokens.data.refreshToken;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const GoogleSignIn = createAsyncThunk(
  'users/googleAuth',
  async (credentials, thunkApi) => {
    try {
      setAuthHeader(credentials.tokens.accessToken);

      setTimeout(() => {
        toast.success('Login is successful');
      }, 3000);
      return credentials.tokens.refreshToken;
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const Verify = createAsyncThunk(
  'users/verificationToken',
  async (credentials, thunkApi) => {
    try {
      await axios.get(`users/verify/${credentials}`);
      toast.success('Verifycation successful');
      return;
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');

      return thunkApi.rejectWithValue(error.message);
    }
  }
);
