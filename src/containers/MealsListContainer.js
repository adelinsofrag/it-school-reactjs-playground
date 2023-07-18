import React, { useEffect, useState } from "react";
import MealDetailsComponent from "../components/MealDetailsComponent";
import TitleComponent from "../components/TitleComponent";
import mockData from "../assets/mock";
import { useParams } from "react-router-dom";

const MealsListContainer = (props) => {
  const [meals, setMeals] = useState(mockData);
  let { param } = useParams();
  if (!param) param = "egg";

  const data = props.mock ? mockData : meals;

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${param}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setMeals(responseJSON);
      });
  }, []);

  return (
    <div className="w-100 p-3">
      <TitleComponent text={`Latest Meals`} />

      <div className="row row-gap-5">
        {data.meals.slice(0, 6).map((meal) => (
          <MealDetailsComponent
            title={meal.strMeal}
            imageSRC={meal.strMealThumb}
            key={meal.idMeal}
          />
        ))}
      </div>
    </div>
  );
};

export default MealsListContainer;
