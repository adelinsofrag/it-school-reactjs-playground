import React from "react";
import { Link } from "react-router-dom";

const style = {
  details: {
    backgroundColor: "blanchedalmond",
    borderRadius: "10px",
    textAlign: "center",
  },
  detailsWrapper: {
    backgroundColor: "transparent",
    zIndex: "-1",
  },
  image: {
    borderRadius: "50%",
    border: "2px solid black",
    width: 120,
    height: 120,
    top: "-50%",
    left: "-10px",
    zIndex: 1,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Arial",
  },
};

function MealComponent(props) {
  return (
    <div className="col-12 col-md-4 gx-4 py-4">
      <Link to={`/meals/${props.idMeal}`} className="text-decoration-none">
        <div style={style.wrapper}>
          <div style={style.detailsWrapper} className="w-100 position-relative">
            <img
              src={props.imageSRC}
              alt={props.title}
              style={style.image}
              className="position-absolute"
            />
            <div className="card w-75">
              <p className="mb-0 card-body text-truncate text-end text-dark lead">{props.title}</p>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark opacity-75">
                {props.area}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MealComponent;
