import { api } from '../../utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async ({page}, thunkAPI) => {
    try {
      const response = await api.get(`/news?page=${page}&limit=6`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);