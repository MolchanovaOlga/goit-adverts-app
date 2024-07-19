import axios from 'axios';

export const BASE_URL = 'https://6696c80f0312447373c3b3e9.mockapi.io';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const getAllCampers = async () => {
  const results = await instance.get('/adverts');
  console.log(results);
  return results;
};
