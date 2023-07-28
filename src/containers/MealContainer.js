import React, { useEffect, useState } from "react";
import MealDetailsComponent from "../components/MealDetailsComponent";
import MealImageComponent from "../components/MealImageComponent";
import MealVideoTutorial from "../components/MealVideoTutorial";
import ButtonComponent from "../components/ButtonComponent";

const MealContainer = ({ strYoutube, strMeal, strMealThumb, strInstructions, data }) => {
  // get values from LStorage
  // but if there's nothing
  // add an empty structure
  const mealDataFromLocalStorage = JSON.parse(localStorage.getItem("meals")) || [{}];
  const [mealData, setMealData] = useState(mealDataFromLocalStorage);
  const [text, setText] = useState("♡ Add to Favorites");

  const handleClick = () => {
    // check if it's already there
    if (!mealDataFromLocalStorage.some((itemInLS) => itemInLS.idMeal === data.idMeal))
      // set the meal data into stat by pushing the current values
      setMealData([
        ...mealData,
        {
          strMeal,
          strMealThumb,
          idMeal: data.idMeal,
        },
      ]);

    setText("♡ Added");
  };

  useEffect(() => {
    // when the meaData is updated by the click event,
    // add the new structure into the LStorage
    localStorage.setItem("meals", JSON.stringify(mealData));
  }, [mealData]);

  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <div className="d-flex flex-row justify-content-between w-100 align-items-center">
          <h2 className="mb-2 text-dark fw-bold">{strMeal}</h2>
          <ButtonComponent text={text} onClickEvent={handleClick} />
        </div>
        <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-black rounded-3">
              <div className="d-flex flex-column h-100 p-3 text-black text-shadow-1">
                <MealDetailsComponent instructions={strInstructions} data={data} />
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
