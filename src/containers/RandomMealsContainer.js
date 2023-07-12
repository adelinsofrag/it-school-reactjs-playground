import React from "react";
import logo from "./../logo.svg";

import MealDetailsComponent from "../components/MealDetailsComponent";

function RandomMealsContainer() {
  return (
    <div style={{ display: "flex" }}>
      <MealDetailsComponent imageSRC={logo} />
      <MealDetailsComponent imageSRC={logo} />
      <MealDetailsComponent imageSRC={logo} />
      <MealDetailsComponent imageSRC={logo} />
      <MealDetailsComponent imageSRC={logo} />
      <MealDetailsComponent imageSRC={logo} />
    </div>
  );
}

export default RandomMealsContainer;
