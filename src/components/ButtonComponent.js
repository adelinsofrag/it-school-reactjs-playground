import React from "react";

const ButtonComponent = ({ onClickEvent, text, type }) => {
  return (
    <div
      onClick={onClickEvent}
      className={`btn ms-auto ${type ? `btn-${type}` : "btn-outline-dark"}`}
    >
      {text}
    </div>
  );
};

export default ButtonComponent;
