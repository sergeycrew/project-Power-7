import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './productOperations';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    isLoading: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchCategories.pending, pending)
      .addCase(fetchCategories.fulfilled, CategoriesFulfilled)
      .addCase(fetchCategories.rejected, rejected),
});

function CategoriesFulfilled(state, { payload }) {
  state.categories = payload.map(({ title }) => ({
    value: title,
    label: title.charAt(0).toUpperCase() + title.slice(1),
  }));
  state.isLoading = false;
}

function pending(state) {
  state.isLoading = true;
}

function rejected(state) {
  state.isLoading = false;
}

export const categoriesReducer = categoriesSlice.reducer;
