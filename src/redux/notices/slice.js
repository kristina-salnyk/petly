import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addNotice,
  deleteNotice,
  fetchNotices,
  addFavorite,
  deleteFavorite,
  fetchNoticeItem,
} from './operations';

const extraActions = [
  fetchNotices,
  addNotice,
  deleteNotice,
  deleteFavorite,
  addFavorite,
  fetchNoticeItem,
];

const noticesInitialState = {
  items: [],
  category: 'sell',
  searchQuery: '',
  isLoading: false,
  error: null,
  noticeItem: {},
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchNoticeItem.fulfilled, (state, action) => {
        state.noticeItem = action.payload;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          notice => notice.id === action.payload.id
        );
        state.items.splice(index, 1);
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
