import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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

  return <div>TestPage with param: {param}</div>;
};

export default TestPage;
