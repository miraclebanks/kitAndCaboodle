import React, { Component } from "react";
import { Card } from "../Card/card.jsx";
import "./card-list.styles.css";

const CardList = (props) => (
  <div className="card-list">
    {props.kitties.map((kitties) => (
      <Card key={kitties.id} kitties={kitties}>
        {" "}
      </Card>
    ))}
  </div>
);

export default CardList;
