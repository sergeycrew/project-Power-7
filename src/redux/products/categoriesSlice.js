import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './productOperations';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    isLoading: false,
    img: '',
  },
  reducers: {
    addImg(state, action){
      state.img = action.payload
    }
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchCategories.pending, pending)
      .addCase(fetchCategories.fulfilled, CategoriesFulfilled)
      .addCase(fetchCategories.rejected, rejected),
});

function CategoriesFulfilled(state, { payload }) {
  state.categories = payload.map(({ title, img }) => ({
    value: title,
    label: title.charAt(0).toUpperCase() + title.slice(1),
    img: img
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
export const { addImg } = categoriesSlice.actions;
