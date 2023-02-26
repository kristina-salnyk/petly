import { createSelector } from '@reduxjs/toolkit';

export const selectNotices = state => state.notices.items;
export const selectNoticeItem = state => state.notices.noticeItem;
export const selectIsLoading = state => state.notices.isLoading;
export const selectError = state => state.notices.error;
export const selectNoticesFilter = state => state.notices.filter;
export const selectSearchQuery = state => state.notices.searchQuery;
export const selectSearchedNotices = createSelector(
  [selectNotices, selectSearchQuery],
  (notices, searchQuery) => {
    const normalizedSearchQuery = searchQuery.toLowerCase();
    return notices.filter(item => item.title.toLowerCase().includes(normalizedSearchQuery));
  }
);
