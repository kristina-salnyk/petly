import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state) {
      console.log('1/:', state.isModalOpen);
      return !state.isModalOpen, console.log('2/:', !state.isModalOpen);
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
