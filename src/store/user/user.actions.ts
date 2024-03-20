import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/user/user.type";

const fetchUserById = (userId: number | undefined): Promise<IUser> => 
  new Promise(resolve => setTimeout(() => resolve({id: userId, name: 'Baur'}), 1000));

export const getUserById = createAsyncThunk<IUser, number | undefined>('user/by-id', async(userId, thunkApi) => {
  try {
    const response = await fetchUserById(userId);
    return response;
  } catch(error) {
    return thunkApi.rejectWithValue(error);
  }
});