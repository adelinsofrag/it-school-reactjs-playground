import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import mockData from "../assets/mock";

const TestPage = () => {
  const { param } = useParams();

  const fetchUserData = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${param}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  });

  return (
    <div>
      <h1>TestPage with param: {param}</h1>
      <p> and there's a mock meal in {mockData.meals[0].strMeal}</p>

      
    </div>
  );
};

export default TestPage;
