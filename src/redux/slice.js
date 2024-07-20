import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './operations';

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: { items: [], favorites: [], loading: false, error: null },
  reducers: {
    addAdvent(state, action) {
      state.favorites.push(action.payload);
    },
    deleteAdvent(state, action) {
      state.favorites = state.favorites.filter(
        advent => advent._id !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { addAdvent, deleteAdvent } = advertsSlice.actions;
