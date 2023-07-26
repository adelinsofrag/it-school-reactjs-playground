import React from "react";

const ButtonComponent = ({ onClickEvent, text }) => {
  return (
    <div onClick={onClickEvent} className="btn btn-outline-dark">
      {text}
    </div>
  );
};

export default ButtonComponent;
