import { TbLocationHeart } from "react-icons/tb";
import styles from './Header.module.css';
import { useSelector } from "react-redux";

export default function Header() {
  const favorites = useSelector(state => state);

  return (
    <div className={styles.header}>
      <TbLocationHeart fontSize={30}/>
      <span>{favorites.length}</span>
    </div>
  )
}