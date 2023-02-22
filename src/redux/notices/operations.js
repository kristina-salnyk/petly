import { api } from '../../utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await api.get('/notices');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async ({ announcement, title, name, birthday, breed, theSex, location, price, image, comments, owner }, thunkAPI) => {
    try {
      const response = await api.post('/notices', { announcement, title, name, birthday, breed, theSex, location, price, image, comments, owner });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (noticeId, thunkAPI) => {
    try {
      const response = await api.delete(`/notices/${noticeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



