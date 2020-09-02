import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster-photo"
      src={`https://robohash.org/${props.kitties.id}?set=set4&size=180x180`}
    />
    <h1>{props.kitties.name}</h1>
  </div>
);
