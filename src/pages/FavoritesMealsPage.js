import React, { useEffect, useState } from "react";
import MealComponent from "../components/MealComponent";

const FavoritesMealsPage = () => {
  const [meals, setMeals] = useState([{}]);
  useEffect(() => setMeals(JSON.parse(localStorage.getItem("meals"))), []);

  return (
    meals &&
    meals.map((meal) => (
      <MealComponent
        title={meal.strMeal}
        imageSRC={meal.strMealThumb}
        key={meal.idMeal}
        idMeal={meal.idMeal}
      />
    ))
  );
};

export default FavoritesMealsPage;
