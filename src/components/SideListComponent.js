import React from "react";
import { Link } from "react-router-dom";

const SideListComponent = ({ data, field }) => {
  return (
    <>
      <div className="btn-group-vertical">
        {data.meals &&
          data.meals.map((item) => (
            <Link to="/test" key={item[field]}>
              <div className="btn text-start btn-white my-1">{item[field]}</div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default SideListComponent;
