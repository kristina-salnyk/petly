import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    changeModal(state) {
      return !state;
    },
  },
});

export const { changeModal, selectId } = slice.actions;
export const modalReducer = slice.reducer;