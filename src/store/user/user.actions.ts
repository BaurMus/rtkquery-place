import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = (userId) => 
  new Promise(resolve => setTimeout(() => resolve({id: userId, name: 'Baur'}), 1000));

export const getUserById = createAsyncThunk('user/by-id', async(userId, thunkApi) => {
  try {
    const response = await fetchUserById(userId);
    return response;
  } catch(error) {
    return thunkApi.rejectWithValue(error);
  }
});