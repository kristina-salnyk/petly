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
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchNews.pending, state => {
        state.isLoading = true  })
      .addCase(fetchNews.rejected, (state, action) => {
        const index = state.items.findIndex(
          article => article.id === action.payload.id
        );
        state.items.splice(index, 1);
      })})
     

export const newsReducer = newsSlice.reducer;
