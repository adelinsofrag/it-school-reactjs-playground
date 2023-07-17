import React, { useEffect, useState } from "react";
import MealDetailsComponent from "../components/MealDetailsComponent";
import TitleComponent from "../components/TitleComponent";
import mockData from "../mock";
import { useParams } from "react-router-dom";

const style = {
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
  },
};

const MealsListContainer = (props) => {
  // mockData pentru ca by default am nevoie de o valoare pentru const meals
  const [meals, setMeals] = useState(mockData);
  let { param } = useParams();
  // in cazul in care ruta mea nu are param, trebuie sa afisam ceva, asa ca hai sa spunem ca by default e 'eggs' related stuff
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
    <div style={{ width: "100%" }}>
      <TitleComponent text={`Latest Meals`} />

      {data.meals.map((meal) => (
        <MealDetailsComponent
          title={meal.strMeal}
          category={meal.strCategory}
          area={meal.strArea}
          imageSRC={meal.strMealThumb}
          key={meal.idMeal}
        />
      ))}
    </div>
  );
};

export default MealsListContainer;
