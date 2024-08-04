import axios from 'axios';

export const BASE_URL = 'https://6696c80f0312447373c3b3e9.mockapi.io';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const getAllCampers = async () => {
  try {
    const results = await instance.get('/adverts');
    return results.data;
  } catch (er) {
    console.log(er);
  }
};

export const getLimitCampers = async ({ page, perPage }) => {
  try {
    const results = await instance.get(
      `/adverts?page=${page}&limit=${perPage}`
    );
    return results.data;
  } catch (er) {
    console.log(er);
  }
};

export const getCamperById = async id => {
  try {
    const results = await instance.get(`/adverts/${id}`);
    return results.data;
  } catch (er) {
    console.log(er);
  }
};
