import { api } from '../../utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk('news/fetchAll', async ({ page, search }, thunkAPI) => {
  try {
    const response = await api.get(`/news?page=${page}&limit=6&search=${search}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
