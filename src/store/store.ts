import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from './favorites/favorites.slices'
import {reducer as userReducer} from './user/user.slices';
import { api } from "./api/api";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
})

const reducers = combineReducers({
  favorites: favoritesReducer,
  user: userReducer,
  [api.reducerPath]: api.reducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(api.middleware).concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;