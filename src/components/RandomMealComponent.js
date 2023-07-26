import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomMealComponent = () => {
  const [meal, setMeal] = useState([]);

  const fetchData = () =>
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((responseJSON) => setMeal(responseJSON.meals[0])); // get the meal details via .meals property & the 0 index - it's an array with 1 value

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Link
      to={`/meals/${meal.idMeal}`}
      className="card shadow text-light m-0 p-0"
      style={{
        background: `url(${meal.strMealThumb}) center`,
      }}
    >
      <div
        className="h-100"
        style={{
          backdropFilter: "blur(2.5px)",
          textShadow: "2px 2px 2px #000",
          color: "#fff",
        }}
      >
        <p className="card-title px-4 pt-2">{meal.strCategory}</p>
        <div className="mb-2 font-monospace px-4">
          <p className="lead card-subtitle fw-semibold ">{meal.strMeal}</p>
        </div>
      </div>
    </Link>
  );
};

export default RandomMealComponent;
