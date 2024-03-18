import { useSelector } from "react-redux";
import PlaceItem from "./place-item/PlaceItem";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <Header />
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
