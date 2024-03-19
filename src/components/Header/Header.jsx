import { TbLocationHeart } from "react-icons/tb";
import styles from './Header.module.css';
import { useSelector } from "react-redux";
import { useFavorites } from "../../store/hooks/useFavorites";

export default function Header() {
  const favorites = useFavorites();

  return (
    <div className={styles.header}>
      <TbLocationHeart fontSize={30}/>
      <span>{favorites.length}</span>
    </div>
  )
}