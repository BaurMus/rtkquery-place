import PlaceItem from "./place-item/PlaceItem";
import Header from "./Header/Header";
import User from "./user/User";
import { useEffect } from "react";
import { useActions } from "../store/hooks/useActions";

function App() {
  const {getUserById} = useActions();
  useEffect(() => {getUserById()}, []);

  return (
    <div>
      <Header />
      <User />
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
