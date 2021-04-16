import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'shifts',
  initialState: {
    data: [],
    isLoading: false,
    creating: false,
  },
  reducers: {
    createLoading: state => ({ ...state, creating: !state.creating }),
    create: (state, action) => {
      const newData = [...state.data];
      newData.push(action.data);
      return {...state, data: newData};
    },
    loading: state => ({...state, isLoading: !state.isLoading }),
    getAll: (state, action) => ({ ...state, data: action.data }),
  },
});

export const total = (state) => state.shifts.data.length;
export const isLoading = (state) => state.shifts.isLoading;
export const isCreating = (state) => state.shifts.isCreating;
export const userShift = (id) => (state) => state.shifts.data.filter(({ user_id }) => user_id === id);

export default slice.reducer;
