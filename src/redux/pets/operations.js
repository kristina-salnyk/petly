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
  async ({ name, birthday, breed, petImage, comments }, thunkAPI) => {
    try {
      const response = await api.post('/pets', {
        name,
        birthday,
        breed,
        petImage,
        comments,
      });
      console.log(response.data);
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
