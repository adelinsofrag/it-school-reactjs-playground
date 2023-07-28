import React from "react";
import MealComponent from "../components/MealComponent";

const FavoriteMealsContainer = ({ meals }) => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Your bookmarked Meals!</h1>
      <div className="col-lg-12 mx-auto">
        <p className="lead fs-2 mb-4">Your most wanted meals!</p>
        <div className="row row-gap-4">
          {meals &&
            meals.map((meal) => (
              <MealComponent
                title={meal.strMeal}
                imageSRC={meal.strMealThumb}
                key={Math.random()}
                idMeal={meal.idMeal}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteMealsContainer;
