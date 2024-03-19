import PlaceItem from "./place-item/PlaceItem";
import Header from "./Header/Header";
import User from "./user/User";
import { useEffect } from "react";
import { useActions } from "../store/hooks/useActions";
import { useGetPlacesQuery } from "../store/api/api";

function App() {
  const {getUserById} = useActions();
  useEffect(() => {getUserById()}, []);

  const {isLoading,data} = useGetPlacesQuery();

  return (
    <div>
      <Header />
      <User />
      {isLoading
        ? <div>Loading...</div>
        : data && data.length !== 0
          ? data.map(place => 
            <PlaceItem 
              key={place.id}
              place={place}
            />)
          : <h3>Places not found</h3>
      }
      
    </div>
  );
}

export default App;
