import React from "react";

const ButtonComponent = ({ onClickEvent, text }) => {
  return (
    <div onClick={onClickEvent} className="btn btn-outline-dark ms-auto">
      {text}
    </div>
  );
};

export default ButtonComponent;
