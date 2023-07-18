import React from "react";
import MealsListContainer from "../containers/MealsListContainer";
import RandomMealsContainer from "../containers/RandomMealsContainer";
import SideContainer from "../containers/SideContainer";
import TopNavContainer from "../containers/TopNavContainer";

function HomePage() {
  return (
    <>
      <TopNavContainer />
      <div className="d-flex">
        <SideContainer />
        <div className="d-flex flex-column overflow-x-auto w-100">
          <div className="py-5 px-3">
            <RandomMealsContainer />
          </div>
          <MealsListContainer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
