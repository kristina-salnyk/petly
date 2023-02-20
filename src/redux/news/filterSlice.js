import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'news',
  initialState: filterInitialState,
  reducers: {
    filterNews(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterNews } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;