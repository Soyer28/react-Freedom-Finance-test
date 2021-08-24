import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';
import { api } from './api';

const NEWS_FETCH = 'news/fetchNews';

export interface CounterState {
  data: any;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  data: {},
  status: 'idle',
};

export const loadNewsAsync = createAsyncThunk(
  NEWS_FETCH,
  async () => {
    const response = await api.get('')
    return JSON.parse(`{${response.data}`)
  }
);


export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadNewsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadNewsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export const selectNews = (state: RootState) => state.news.data;

export default newsSlice.reducer;
