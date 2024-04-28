// slices/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import productsData from '../products.json';

const productsSlice = createSlice({
  name: 'products',
  initialState: productsData,
  reducers: {},
});

export default productsSlice.reducer;