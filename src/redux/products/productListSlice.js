import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productOperations';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, pending)
      .addCase(fetchProducts.fulfilled, ListFulfilled)
      .addCase(fetchProducts.rejected, rejected),
});

function ListFulfilled(state, { payload }) {
  state.items = payload;
  state.isLoading = false;
}

function pending(state) {
  state.isLoading = true;
}

function rejected(state) {
  state.isLoading = false;
}

export const productListReducer = productSlice.reducer;
