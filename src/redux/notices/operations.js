import { api } from '../../utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotices = createAsyncThunk('notices/fetchAll', async ({ category }, thunkAPI) => {
  try {
    // const params = query ? `?${queryString.stringify({ query })}` : '';
    const response = await api.get(`/notices/${category}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchNoticeItem = createAsyncThunk('notices/fetchOne', async (noticeId, thunkAPI) => {
  try {
    // const params = query ? `?${queryString.stringify({ query })}` : '';
    const response = await api.get(`/notices/${noticeId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (
    { name, category, title, birthday, comments, location, gender, breed, price, image },
    thunkAPI
  ) => {
    try {
      const response = await api.post('/notices', {
        name,
        category,
        title,
        birthday,
        comments,
        location,
        gender,
        breed,
        price,
        image,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk('notices/deleteNotice', async (noticeId, thunkAPI) => {
  try {
    const response = await api.delete(`/notices/${noticeId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addFavorite = createAsyncThunk('notices/addFavorite', async (noticeId, thunkAPI) => {
  try {
    const response = await api.patch(`/notices/favorite/${noticeId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteFavorite = createAsyncThunk(
  'notices/deleteFavorite',
  async (noticeId, thunkAPI) => {
    try {
      const response = await api.delete(`/notices/favorite/${noticeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
