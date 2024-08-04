import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllCampers,
  getLimitCampers,
  getCamperById,
} from '../services/advertsApi';

export const getAdverts = createAsyncThunk(
  'adverts/getLimits',
  async ({ page, perPage }, thunkAPI) => {
    try {
      const data = await getLimitCampers({ page, perPage });
      const { length } = await getAllCampers();

      const loadMore =
        length > perPage && page < length / perPage ? true : false;

      return { data, loadMore };
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
