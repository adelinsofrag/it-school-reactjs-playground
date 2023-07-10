import React from "react";
import MealDetailsComponent from "./MealDetailsComponent";

const MealsListContainer = () => {
  return (
    <>
      <h2>Latest meals</h2>
      <ul>
        <MealDetailsComponent title="reteta 1" description="descriere pentru reteta 1" />
        <MealDetailsComponent title="reteta 2" description="descriere pentru reteta 2" />
        <MealDetailsComponent title="reteta 3" description="descriere pentru reteta 3" />
      </ul>
    </>
  );
};

export default MealsListContainer;
