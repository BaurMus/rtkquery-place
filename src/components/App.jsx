import PlaceItem from "./place-item/PlaceItem";

function App() {
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
