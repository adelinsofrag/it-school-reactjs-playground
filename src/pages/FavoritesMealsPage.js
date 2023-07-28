import React, { useEffect, useState } from "react";
import TopNavContainer from "../containers/TopNavContainer";
import FavoriteMealsContainer from "../containers/FavoriteMealsContainer";

const FavoritesMealsPage = () => {
  const [meals, setMeals] = useState([{}]);
  useEffect(() => setMeals(JSON.parse(localStorage.getItem("meals"))), []);

  return (
    <>
      <TopNavContainer noSearchBar={true} />
      <FavoriteMealsContainer meals={meals} />
    </>
  );
};

export default FavoritesMealsPage;
