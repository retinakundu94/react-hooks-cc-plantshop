import React from "react";
import { useState } from "react";

function PlantCard({plant}) {
  const [stock, setStock] = useState(true);
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (
        <button className="primary" onClick={() => setStock(!stock)}>In Stock</button>
      ) : (
        <button onClick={() => setStock(!stock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;