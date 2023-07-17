import React from "react";
import MealQuickInfoComponent from "../components/MealQuickInfoComponent";
import mockData from "../mock";

function RandomMealsContainer() {
  return (
    <div>
      {mockData.meals.map((meal) => (
        <MealQuickInfoComponent
          key={meal.idMeal}
          title={meal.strMeal}
          description={meal.strArea}
        />
      ))}
    </div>
  );
}

export default RandomMealsContainer;
