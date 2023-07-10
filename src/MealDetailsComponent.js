import React from "react";

function MealDetailsComponent(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

export default MealDetailsComponent;