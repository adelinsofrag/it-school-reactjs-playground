import React, { useEffect, useState } from "react";
import MealsListContainer from "../containers/MealsListContainer";
import RandomMealsContainer from "../containers/RandomMealsContainer";
import SideContainer from "../containers/SideContainer";
import mockData from "../assets/mock";

function HomePage() {
  // TODO: explain these
  const [meals, setMeals] = useState(mockData);
  const [searchValue, setSearchValue] = useState("");

  // TODO: usage?
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // TODO: what does useEffect do?
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`) // TODO: from where does this come?
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setMeals(responseJSON); // TODO: why do this?
      });
  }, [searchValue]); // TODO: what is this array?

  return (
    <>
      {/* TODO: explain the changes */}
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
              value={searchValue} // TODO: What is this prop?
              onChange={handleInputChange} // TODO: What is this prop?
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
          {/* TODO: usage for data prop? */}
          <MealsListContainer data={meals} /> 
        </div>
      </div>
    </>
  );
}

export default HomePage;
