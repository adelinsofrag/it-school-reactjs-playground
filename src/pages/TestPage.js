import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import MealsListContainer from "../containers/MealsListContainer";

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

      <MealsListContainer mock={true} />
    </div>
  );
};

export default TestPage;
