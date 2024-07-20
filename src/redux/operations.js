import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCampers, getCamperById } from '../services/advertsApi';

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

export const getAdvertId = createAsyncThunk(
  'adverts/getById',
  async (id, thunkAPI) => {
    try {
      const data = await getCamperById(id);
      return data._id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
