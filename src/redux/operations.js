import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCampers } from '../services/advertsApi';

export const getAdverts = createAsyncThunk(
  'adverts/getAll',
  async (_, thunkAPI) => {
    try {
      const results = await getAllCampers();
      console.log(results);
      return results.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
