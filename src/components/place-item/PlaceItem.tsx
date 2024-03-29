import styles from './PlaceItem.module.css';
import { useActions } from '../../store/hooks/useActions';
import { useFavorites } from '../../store/hooks/useFavorites';
import { IPlace } from '../../types/places/places.type';

interface IPlaceItem {
  place: IPlace
}

export default function PlaceItem({place}: IPlaceItem) {
  const {toggleFavorites} = useActions();
  const {isExists} = useFavorites(place.id);

  return (
    <div className={styles.place}>
      <img src={place.image} alt={place.name} width={100}/>
      <h2>{place.name}</h2>
      <button onClick={() => toggleFavorites(place)}>
        {isExists ? 'Remove from' : 'Add to'} favorites
      </button>
    </div>
  )
}