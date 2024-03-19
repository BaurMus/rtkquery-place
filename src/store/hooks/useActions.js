import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {actions as favoritesActions} from '../favorites/favorites.slices';
import * as userActions from '../user/user.actions';
import { useMemo } from "react";

const rootActions = {
  ...favoritesActions,
  ...userActions,
}

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}