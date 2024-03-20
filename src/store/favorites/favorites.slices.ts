import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, {payload: place}) => {
      const index = state.findIndex(p => p.id === place.id);
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(place);
      }
    }
  }
});

export const {actions, reducer} = favoritesSlice;