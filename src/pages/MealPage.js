import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealContainer from "../containers/MealContainer";

export const MealPage = () => {
  let { idMeal } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setData(responseJSON);
      });
  }, [idMeal]);

  return (
    data.meals &&
    data.meals.map((item) => (
      <MealContainer
        key={item.idMeal}
        strYoutube={item.strYoutube}
        strMeal={item.strMeal}
        strMealThumb={item.strMealThumb}
        strInstructions={item.strInstructions}
        data={item}
      />
    ))
  );
};
