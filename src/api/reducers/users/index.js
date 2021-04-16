import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    loading: state => ({...state, isLoading: !state.isLoading }),
    getAll: (state, action) => ({ ...state, data: action.data }),
  },
});

export const total = (state) => state.users.data.length;
export const isLoading = (state) => state.users.isLoading;
export const users = (state) => state.users.data;

export default slice.reducer;
