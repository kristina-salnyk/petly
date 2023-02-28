import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './operations';

const friendsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'news',
  initialState: friendsInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFriends.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFriends.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const friendsReducer = friendsSlice.reducer;
