import React from "react";

const MealImageComponent = ({ src, alt }) => {
  return <img src={src} className="card-img-top img-fluid" alt={alt}/>;
};

export default MealImageComponent;
