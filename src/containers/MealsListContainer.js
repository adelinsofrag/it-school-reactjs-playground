import React from "react";
import MealDetailsComponent from "../components/MealDetailsComponent";
import TitleComponent from "../components/TitleComponent";
import mockData from "../mock";

const style = {
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
  },
};

const MealsListContainer = () => {
  return (
    <div style={{ width: "100%" }}>
      <TitleComponent text="Latest Meals" />

      {mockData.meals.map((meal) => (
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
