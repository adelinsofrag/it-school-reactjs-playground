import React from "react";

const MealVideoTutorial = ({ src, title }) => {
  return (
    <iframe width="auto" height="100%" src={src.replace("watch?v=", "embed/")} title={title} />
  );
};

export default MealVideoTutorial;
