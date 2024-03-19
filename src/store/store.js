import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from '../store/favorites/favorites.slices'
import {reducer as userReducer} from './user/user.slices';

const reducers = combineReducers({
  favorites: favoritesReducer,
  user: userReducer
})

export const store = configureStore({
  reducer: reducers
})