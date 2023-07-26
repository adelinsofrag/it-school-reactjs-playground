import React, { useEffect, useState } from "react";
import MealsContainer from "../containers/MealsContainer";
import mockData from "../assets/mock";
import TopNavContainer from "../containers/TopNavContainer";

function HomePage() {
  const [meals, setMeals] = useState(mockData);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const fetchData = (searchValue) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((response) => response.json())
      .then((responseJSON) => setMeals(responseJSON));

  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

  return (
    <>
      <TopNavContainer searchValue={searchValue} handleInputChange={handleInputChange} />
      <div className="d-flex">
        <div className="d-flex flex-column overflow-x-auto w-100">
          <div className="py-5 px-3">{/* <RandomMealsContainer /> */}</div>
          <MealsContainer data={meals} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
