import React, { useEffect, useState } from "react";
import MealComponent from "../components/MealComponent";
import TopNavContainer from "../containers/TopNavContainer";

const FavoritesMealsPage = () => {
  const [meals, setMeals] = useState([{}]);
  useEffect(() => setMeals(JSON.parse(localStorage.getItem("meals"))), []);

  return (
    <>
      <TopNavContainer logoOnly={true} />
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
                  key={meal.idMeal}
                  idMeal={meal.idMeal}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritesMealsPage;
