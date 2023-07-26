import React from "react";
import RandomMealComponent from "../components/RandomMealComponent";

const RandomMealsContainer = () => {
  return (
    <div className="row row-cols-5 justify-content-between g-1 d-none d-md-flex">
      <RandomMealComponent />
      <RandomMealComponent />
      <RandomMealComponent />
      <RandomMealComponent />
    </div>
  );
};

export default RandomMealsContainer;
