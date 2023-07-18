import React from "react";
function MealQuickInfoComponent(props) {
  return (
    <>
      <div
        className="card shadow px-4 py-2  text-light"
        style={{
          background: `url(${props.imageSRC}) center`,
          backgroundColor: "#ccc",
          backgroundBlendMode: "multiply",
        }}
      >
        <h3 className="card-title">{props.title}</h3>
        <div className="card-subtitle mb-2 fw-bold font-monospace">
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default MealQuickInfoComponent;
