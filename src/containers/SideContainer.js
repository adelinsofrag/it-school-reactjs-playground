import React, { useEffect, useState } from "react";
import SideListComponent from "../components/SideListComponent";

const SideContainer = () => {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  const fetchDataCategories = () =>
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
      .then((response) => response.json())
      .then((responseJSON) => setCategories(responseJSON));

  const fetchDataAreas = () =>
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((response) => response.json())
      .then((responseJSON) => setAreas(responseJSON));

  useEffect(() => {
    fetchDataCategories();
    fetchDataAreas();
  }, []);

  return (
    <div
      className="d-flex flex-column ps-2 pe-5 py-4 d-none d-md-flex overflow-y-scroll"
      style={{ width: "250px" }}
    >
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Categories
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <SideListComponent data={categories} field={"strCategory"} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Areas
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <SideListComponent data={areas} field={"strArea"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContainer;
