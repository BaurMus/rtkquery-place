import PlaceItem from "./place-item/PlaceItem";
import Header from "./Header/Header";
import User from "./user/User";
import { useEffect, useState } from "react";
import { useActions } from "../store/hooks/useActions";
import { useGetPlacesQuery } from "../store/api/api";
import CreatePlace from "./create-place/CreatePlace";

const userId = 1;

function App() {
  const [searchPlaceForm, setSearchPlaceForm] = useState('');
  const [searchPlaceQuery, setSearchPlaceQuery] = useState('');

  const {getUserById} = useActions();
  useEffect(() => {getUserById()}, []);

  const {isLoading,data} = useGetPlacesQuery(searchPlaceQuery, {
    skip: !userId
  });

  const handleSearch = () => {
    setSearchPlaceQuery(searchPlaceForm);
    setSearchPlaceForm('');
  }

  return (
    <div>
      <Header />
      <User />
      <CreatePlace />
      <div>
        <p>Search place: </p>
        <input 
          type="search"
          placeholder="Search"
          value={searchPlaceForm}
          onChange={e => setSearchPlaceForm(e.target.value)} 
        />
        <button onClick={() => handleSearch()}>
          Search
        </button>
      </div>
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
