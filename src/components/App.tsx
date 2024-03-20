import PlaceItem from "./place-item/PlaceItem";
import Header from "./Header/Header";
import User from "./user/User";
import { useEffect } from "react";
import { useActions } from "../store/hooks/useActions";
import { useGetPlacesQuery } from "../store/api/api";
import CreatePlace from "./create-place/CreatePlace";

const userId = 1;

function App() {
  const {getUserById} = useActions();
  useEffect(() => {getUserById()}, []);

  const {isLoading,data} = useGetPlacesQuery(null, {
    skip: !userId
  });

  return (
    <div>
      <Header />
      <User />
      <CreatePlace />
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
