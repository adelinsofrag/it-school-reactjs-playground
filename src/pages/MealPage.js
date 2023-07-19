import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        })
    }, []);

  return <div>{data.meals && data.meals.map((item) => <p>{item.strMeal}</p>)}</div>;
};
