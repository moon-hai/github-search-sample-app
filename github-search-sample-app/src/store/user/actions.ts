import apiCaller from '@/core/axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { TUsersSearchReq } from './types';

export const searchGithubUsers = createAsyncThunk('user/search', async (req: TUsersSearchReq) => {
  try {
    const response = await apiCaller.get('/search/users', { params: req });
    if (response.status !== 200) return null;

    return response.data;
  } catch (err) {
    throw err;
  }
});

export const resetUserStore = createAction('user/reset');
