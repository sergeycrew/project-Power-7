import { createSlice } from '@reduxjs/toolkit';

const productFilterSlice = createSlice({
  name: 'productFilter',
  initialState: {
    title: '',
    category: '',
    type: '',
  },
  reducers: {
    changeFilter: {
      prepare({ title, category, type }) {
        return {
          payload: {
            title,
            category,
            type: type == 'all' ? '' : type,
          },
        };
      },
      reducer(state, action) {
        state.title = action.payload.title;
        state.category = action.payload.category;
        state.type = action.payload.type;
      },
    },
  },
});

export const productFilterReducer = productFilterSlice.reducer;

export const { changeFilter } = productFilterSlice.actions;
