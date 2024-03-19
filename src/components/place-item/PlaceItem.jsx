import { useDispatch, useSelector } from 'react-redux';
import styles from './PlaceItem.module.css';
import { actions } from '../../store/favorites/favorites.slices';

export default function PlaceItem({place}) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isExists = favorites.some(p => p.id === place.id)

  return (
    <div className={styles.place}>
      <h2>{place.name}</h2>
      <button onClick={() => dispatch(actions.toggleFavorites(place))}>
        {isExists ? 'Remove from' : 'Add to'} favorites
      </button>
    </div>
  )
}