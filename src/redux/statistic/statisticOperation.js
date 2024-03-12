import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStatistic = createAsyncThunk(
  'statistics',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('statistics');
      // console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
