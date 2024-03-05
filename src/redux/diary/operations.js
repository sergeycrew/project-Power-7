import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
axios.defaults.baseURL = 'https://backend-power-pulse-7.onrender.com/api/diary';

export const fetchContacts = createAsyncThunk(
  '/alldaydiary/fetchAll',
  async (_, thunkAPI) => {
    try {
      //   const state = thunkAPI.getState();
      const storedToken = state.auth.token;
      setAuthHeader(storedToken);
      const response = await axios.post('/alldaydiary');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (newContact, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', newContact);
//       toast.success('A new contact has been successfully created!');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
