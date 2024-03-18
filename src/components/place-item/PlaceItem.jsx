import styles from './PlaceItem.module.css';

export default function PlaceItem({place}) {
  return (
    <div className={styles.place}>
      <h2>{place.name}</h2>
      <button>Add to favorites</button>
    </div>
  )
}