import React from "react";
import MealDetailsComponent from "../components/MealDetailsComponent";
import MealImageComponent from "../components/MealImageComponent";
import MealVideoTutorial from "../components/MealVideoTutorial";

const MealContainer = ({ strYoutube, strMeal, strMealThumb, strInstructions, data }) => {
  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">{strMeal}</h2>

        <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-black rounded-3">
              <div className="d-flex flex-column h-100 p-3 text-black text-shadow-1">
                <MealDetailsComponent
                  instructions={strInstructions.split(/(?<=[.!?])\s+/)}
                  data={data}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row row-cols-1 align-items-stretch g-4">
              <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-black rounded-3">
                  <div className="d-flex flex-column h-100 text-black text-shadow-1">
                    <MealVideoTutorial src={strYoutube} title={strMeal} />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-black rounded-3">
                  <div className="d-flex flex-column h-100 text-black text-shadow-1">
                    <MealImageComponent src={strMealThumb} alt={strMeal} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealContainer;
