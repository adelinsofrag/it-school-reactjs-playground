import React from "react";

const MealDetailsComponent = ({ instructions, data }) => {
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">Instructions</h5>
        {instructions.map((instructionRow) => (
          <p className="card-text" key={Math.random()}>
            {instructionRow}
          </p>
        ))}
      </div>

      <div className="card-body">
        <h5 className="card-title">Ingredients</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {data.strIngredient1} : {data.strMeasure1}
          </li>
          <li className="list-group-item">
            {data.strIngredient2} : {data.strMeasure2}
          </li>
          <li className="list-group-item">
            {data.strIngredient3} : {data.strMeasure3}
          </li>
          <li className="list-group-item">
            {data.strIngredient4} : {data.strMeasure4}
          </li>
          <li className="list-group-item">
            {data.strIngredient5} : {data.strMeasure5}
          </li>
        </ul>
      </div>
    </>
  );
};

export default MealDetailsComponent;
