import { api } from '../../utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPets = createAsyncThunk('pets/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await api.get('/pets');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addPet = createAsyncThunk(
  'pets/addPet',

  async (fields, thunkAPI) => {
    try {
      console.log('fields', fields);

      const response = await api.post('/pets', fields);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk('pets/deletePet', async (petId, thunkAPI) => {
  try {
    const response = await api.delete(`/pets/${petId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
