import React from "react";
import MealsListContainer from "../containers/MealsListContainer";
import RandomMealsContainer from "../containers/RandomMealsContainer";
import SideContainer from "../containers/SideContainer";

function HomepageView() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideContainer />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <RandomMealsContainer />
          <MealsListContainer />
        </div>
      </div>
    </>
  );
}

export default HomepageView;
