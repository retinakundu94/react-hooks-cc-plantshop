import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])
  function handleSubmit(plant) {
    fetch("http://localhost:6001/plants", {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          "name": plant.name,
          "image": plant.image,
          "price": plant.price
         })
    })
    .then( res => res.json() )
    .then( newPlant => setPlants( [...plants, newPlant] ) )
  }
  const [newPlants, setNewPlant] = useState({});
  const [isSearched, setNewSearch] = useState(true);
    function displayPlants(plantName) {
      const searchPlant = plants.filter(plant => plant.name.toLowerCase().includes(plantName.toLowerCase()));
      setNewPlant(searchPlant);
      (plantName !== "") ? setNewSearch(false) : setNewSearch(true);
    }
  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit}/>
      <Search displayPlants={displayPlants}/>
      {isSearched ? <PlantList plantArray={plants}/> : <PlantList plantArray={newPlants}/>}
    </main>
  );
}

export default PlantPage;