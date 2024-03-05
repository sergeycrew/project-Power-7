import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


axios.defaults.baseURL = 'https://backend-power-pulse-7.onrender.com/api/';

const temptoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU3NDhhOTY2MmE1YTUzNGNhNjI4MTIiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzA5NjU2MjUwLCJleHAiOjE3MDk3MzkwNTB9.tO0F8cqQ-DCzboHx8z0DF8iQhiYLyRplYPBqmGw6Oe4';


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
      setAuthHeader(data.token);
      toast.success('Registration is successful');
      console.log(data);
      return data;

    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/signin',
  async (credentials, { rejectWithValue }) => {
    try {

      const { data } = await axios.post('users/login', credentials);
      setAuthHeader(data.token);
      toast.success('Login is successful');
      console.log(data);
      return data;

    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      console.log(error.message);
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
      toast.success('Logout is successful');
    } catch (error) {
      toast.error('Oops, something went wrong! Try again later.');
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }

    try {
      setAuthHeader(temptoken);

      const { data } = await axios.get('users/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getUserParams = createAsyncThunk(
//   'users/params',
//   async(_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
  
//   } 
// )


export const updateUserParams = createAsyncThunk(
  'users/update',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.put('users/update', params)
      return data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)


