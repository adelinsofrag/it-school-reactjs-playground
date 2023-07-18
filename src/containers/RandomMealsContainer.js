import React from "react";
import MealQuickInfoComponent from "../components/MealQuickInfoComponent";
import mockData from "../assets/mock";

function RandomMealsContainer() {
  return (
    <div className="d-flex flex-row gap-4 flex-nowrap">
      {mockData.meals.slice(0, 4).map((meal) => (
        <MealQuickInfoComponent key={meal.idMeal} title={meal.strMeal} description={meal.strArea} />
      ))}
    </div>
  );
}

export default RandomMealsContainer;
