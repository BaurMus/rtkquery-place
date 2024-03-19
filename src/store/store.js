import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from '../store/favorites/favorites.slices'
import {reducer as userReducer} from './user/user.slices';
import { api } from "./api/api";

const reducers = combineReducers({
  favorites: favoritesReducer,
  user: userReducer,
  [api.reducerPath]: api.reducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(api.middleware)
})