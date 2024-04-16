import React from "react";
import { useState } from "react";

function NewPlantForm({handleSubmit}) {
  const [newPlant, setPlant] = useState({
    "name": "",
    "image": "",
    "price": 0
  })

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={() => handleSubmit(newPlant)}>
        <input type="text" name="name" placeholder="Plant name" onChange={event => setPlant({...newPlant, "name": event.target.value})}/>
        <input type="text" name="image" placeholder="Image URL" onChange={event => setPlant({...newPlant, "image": event.target.value})}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={event => setPlant({...newPlant, "price": event.target.value})}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;