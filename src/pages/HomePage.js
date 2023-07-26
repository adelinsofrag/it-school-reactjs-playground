import React, { useEffect, useState } from "react";
import MealsContainer from "../containers/MealsContainer";
import mockData from "../assets/mock";
import TopNavContainer from "../containers/TopNavContainer";
import RandomMealsContainer from "../containers/RadomMealsContainer";
import SideContainer from "../containers/SideContainer";

function HomePage() {
  const [meals, setMeals] = useState(mockData);
  const [searchValue, setSearchValue] = useState("");
  const [title, setTitle] = useState("Latest Meals");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setTitle(`Meals with: ${e.target.value}`);
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
        <SideContainer />
        <div className="d-flex flex-column overflow-x-auto w-100">
          <div className="py-5 px-3">
            <RandomMealsContainer />
          </div>
          <MealsContainer data={meals} title={title} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
