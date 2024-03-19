import { useState } from "react"
import { useCreatePlaceMutation } from "../../store/api/createPlaceApi";

const initialState = {
  name: '',
  image: ''
};

export default function CreatePlace() {
  const [placeForm, setPlaceForm] = useState(initialState);
  const [mutate] = useCreatePlaceMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(placeForm).then(() => setPlaceForm(initialState));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Create place: </p>
        <input 
          type="text" 
          placeholder="Name" 
          value={placeForm.name} 
          onChange={e => setPlaceForm({...placeForm, name: e.target.value})}
        />
        <input 
          type="text" 
          placeholder="Image" 
          value={placeForm.image} 
          onChange={e => setPlaceForm({...placeForm, image: e.target.value})}
        />
        <button type="submit">
          Create
        </button>
      </form>
    </div>
  )
}