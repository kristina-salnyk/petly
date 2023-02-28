import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './operations';

const newsInitialState = {
  items: [],
  searchQuery: '',
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchNews.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const newsReducer = newsSlice.reducer;
