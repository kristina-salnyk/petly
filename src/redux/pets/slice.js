import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchPets, addPet, deletePet } from './operations';

const extraActions = [fetchPets, addPet, deletePet];
const petsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        const index = state.items.findIndex(pet => pet._id === action.payload._id);
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
});

export const petsReducer = petsSlice.reducer;
