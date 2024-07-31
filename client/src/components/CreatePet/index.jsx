import { useState } from "react";
import { ADD_TO_USER, CREATE_PET } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";

const CreatePet = () => {
    const [state, dispatch] = useStoreContext();
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newPet = {
            name: name,
            type: type,
            ...state.pet
        };

        dispatch({
            type: CREATE_PET,
            pet: newPet
        });

        dispatch({
            type: ADD_TO_USER,
            pet: newPet
        });

        setName('')
        setType('');
    };

    return (
        <div>
      <h2>Create a New Pet</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="Name">Pet Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="type">Pet Type:</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <button type="submit">Add Pet</button>
      </form>
    </div>
    )
};

export default CreatePet;