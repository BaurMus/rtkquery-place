import { createSlice } from "@reduxjs/toolkit";
import { IPlace } from "../../types/places/places.type";

const initialState: IPlace[] = [];

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