import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productOperations';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
    productsPage: 1,
    productsLimit: 30,
    maxPage: 0,
  },
  reducers: {
    changeProductsPage(state, action) {
      state.productsPage += action.payload;
    },
    changeProductsReset(state, action) {
      state.productsPage = 1;
      state.items = [];
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, pending)
      .addCase(fetchProducts.fulfilled, ListFulfilled)
      .addCase(fetchProducts.rejected, rejected),
});

function ListFulfilled(state, { payload }) {
  state.isLoading = false;
  state.maxPage = payload.maxPage;
  if (state.productsPage === 1 && state.items.length == 0) {
    state.items.push(...payload.data);
  }
  if (state.productsPage > 1) {
    state.items.push(...payload.data);
  }
}

function pending(state) {
  state.isLoading = true;
}

function rejected(state) {
  state.isLoading = false;
}

export const productListReducer = productSlice.reducer;
export const { changeProductsPage, changeProductsReset } = productSlice.actions;
