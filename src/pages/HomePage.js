import React, { useEffect, useState } from "react";
import MealsListContainer from "../containers/MealsListContainer";
import mockData from "../assets/mock";
// npm install react-router-dom && npm install bootstrap
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
        <div className="d-flex flex-column overflow-x-auto w-100">
          <div className="py-5 px-3">{/* <RandomMealsContainer /> */}</div>
          <MealsListContainer data={meals} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
