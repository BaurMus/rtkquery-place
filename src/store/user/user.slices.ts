import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";
import { IUser, IUserInitial } from "../../types/user/user.type";

const initialState: IUserInitial = {
  isLoading: false,
  error: null,
  user: {} as IUser
};

export const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.user = {} as IUser;
      })
  }
})

export const {reducer} = userSlices;