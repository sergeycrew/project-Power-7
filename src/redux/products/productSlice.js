import { createSlice } from '@reduxjs/toolkit';
import { productList } from './productOperations';




  



export const productSlice = createSlice({
  name: 'products',
  initialState: {
    categories: [],
    items: [],
    isLoading: false,
    filter: {
      title: '',
      category: '',
      type: '',
    },
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(productList.pending, handlePending)
      .addCase(productList.fulfilled, handleFulfilled)
      .addCase(productList.rejected, handleRejected),
});


const handlePending = (state) => {
    state.isLoading = true;
  };
  const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  };
  const handleFulfilled = (state, { payload }) => {
    state.items = payload;
    state.isLoading = false;
  };



export const productsReducer = productSlice.reducer;
export const filterReducer = productSlice.actions.setFilter;
