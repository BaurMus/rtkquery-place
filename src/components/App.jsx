import { useSelector } from "react-redux";
import PlaceItem from "./place-item/PlaceItem";

function App() {
  const state = useSelector(state => state);
  console.log(state);

  return (
    <div>
      <PlaceItem place={{
        id: 1,
        name: 'Moscow'
      }}/>
      <PlaceItem place={{
        id: 2,
        name: 'Almaty'
      }}/>
      <PlaceItem place={{
        id: 3,
        name: 'Astana'
      }}/>
    </div>
  );
}

export default App;
