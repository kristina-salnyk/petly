import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addNotice,
  deleteNotice,
  fetchMyNotices,
  fetchNotices,
  fetchFaviriteNotices,
  addFoviriteNotice,
  fetchOneNotice,
  deleteFoviriteNotice,
} from './operations';

const extraActions = [
  fetchNotices,
  fetchOneNotice,
  addNotice,
  deleteNotice,
  fetchFaviriteNotices,
  addFoviriteNotice,
  deleteFoviriteNotice,
  fetchMyNotices,
];

const noticesInitialState = {
  notices: [],
  myNotices: [],
  favoriteNotices: [],
  category: 'sell',
  searchQuery: '',
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.notices = action.payload;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.notices.push(action.payload);
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        const index = state.items.findIndex(notice => notice.id === action.payload.id);
        state.notices.splice(index, 1);
      })
      .addCase(fetchMyNotices.fulfilled, (state, action) => {
        state.myNotices = action.payload;
      })
      .addCase(fetchFaviriteNotices.fulfilled, (state, action) => {
        state.favoriteNotices = action.payload;
      })
      .addCase(addFoviriteNotice.fulfilled, (state, action) => {
        state.favoriteNotices.push(action.payload);
      })
      .addCase(deleteFoviriteNotice.fulfilled, (state, action) => {
        const index = state.favoriteNotices.findIndex(notice => notice.id === action.payload.id);
        state.favoriteNotices.splice(index, 1);
      })
      .addMatcher(isAnyOf(...extraActions.map(action => action.pending)), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...extraActions.map(action => action.rejected)), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...extraActions.map(action => action.fulfilled)), state => {
        state.isLoading = false;
        state.error = null;
      }),
  reducers: {
    changeSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { changeSearchQuery } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
