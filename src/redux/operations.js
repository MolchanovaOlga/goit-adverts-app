import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCampers } from '../services/advertsApi';

export const getAdverts = createAsyncThunk(
  'adverts/getAll',
  async (_, thunkAPI) => {
    try {
      const data = await getAllCampers();
      return data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
