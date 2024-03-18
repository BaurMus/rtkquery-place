import { configureStore } from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from '../store/favorites/favorites.slices'

export const store = configureStore({
  reducer: favoritesReducer
})