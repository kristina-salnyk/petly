import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, clearAuthHeader, setAuthHeader } from '../../utils/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const response = await api.post('/auth/register', credentials);
    return response.data;
  } catch (error) {
    const message = [409, 401, 400].includes(error?.response?.status)
      ? error?.response?.data?.message
      : `Request was failed with code ${error?.response?.status}`;

    Notify.failure(`Registration is not completed. ${message}`, {
      timeout: 5000,
    });
    return thunkAPI.rejectWithValue({
      message: error?.response?.data?.message,
      status: error?.response?.status,
    });
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await api.post('/auth/login', credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    const message = [409, 401, 400].includes(error?.response?.status)
      ? error?.response?.data?.message
      : `Request was failed with code ${error?.response?.status}`;

    Notify.failure(`Registration is not completed. ${message}`, {
      timeout: 5000,
    });
    return thunkAPI.rejectWithValue({
      message: error?.response?.data?.message,
      status: error?.response?.status,
    });
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.get('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (defaultToken, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = defaultToken ?? state.auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue('No valid token');
  }
  try {
    setAuthHeader(token);
    const response = await api.get('/auth/refresh');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getUserInfo = createAsyncThunk('auth/user', async (_, thunkAPI) => {
  try {
    const response = await api.get('/user/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk('auth/update', async (credentials, thunkAPI) => {
  try {
    const response = await api.patch('/user/update', credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      Notify.failure('An error occurred while trying to update the data.')
    );
  }
});

export const verifyUser = createAsyncThunk('auth/verify', async (token, thunkAPI) => {
  try {
    const response = await api.get(`/auth/verify/${token}`);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error?.response?.data?.message,
      status: error?.response?.status,
    });
  }
});
