import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantArray}) {
  const renderPlants = plantArray.map(plantcard => <PlantCard key={plantcard.key} plant={plantcard}/>)
  return (
    <ul className="cards">{/* render PlantCards components in here */}
      {renderPlants}
    </ul>
  );
}

export default PlantList;