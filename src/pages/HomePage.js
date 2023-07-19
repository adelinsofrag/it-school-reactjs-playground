import React, { useEffect, useState } from "react";
import MealsListContainer from "../containers/MealsListContainer";
import RandomMealsContainer from "../containers/RandomMealsContainer";
import SideContainer from "../containers/SideContainer";
import mockData from "../assets/mock";

function HomePage() {
  const [meals, setMeals] = useState(mockData);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setMeals(responseJSON);
      });
  }, [searchValue]);

  return (
    <>
      {/* replaced the TopNav with the actual markup */}
      <div className="d-flex p-2">
        <div className="navbar-brand" style={{ width: "250px" }}>
          Brand
        </div>
        <div className="text-muted w-auto">
          <form className="form form-control-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search"
              value={searchValue}
              onChange={handleInputChange}
            ></input>
          </form>
        </div>
        <div className="btn btn-outline-primary ms-auto">element</div>
      </div>

      <div className="d-flex">
        <SideContainer />
        <div className="d-flex flex-column overflow-x-auto w-100">
          <div className="py-5 px-3">
            <RandomMealsContainer />
          </div>
          <MealsListContainer data={meals} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
