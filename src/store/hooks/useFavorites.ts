import { useCallback } from "react";
import { useTypedSelector } from "./useTypedSelector";

export const useFavorites = (placeId: number | null = null) => {
  const favorites = useTypedSelector(state => state.favorites);
  const isExistsFunc = useCallback(() => favorites.some(p => p.id === placeId), [favorites]);
  const isExists = isExistsFunc();
  return {favorites, isExists};
}