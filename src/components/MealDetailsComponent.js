import React from "react";

// Refactor: (adunam toate variabilele intr-un singur Style Object.)
const style = {
  details: {
    backgroundColor: "blanchedalmond",
    borderRadius: "10px",
    padding: "5px 15px 5px 85px",
  },
  detailsWrapper: {
    padding: "10px 0",
    backgroundColor: "transparent",
    transform: "translate(-75px, 0px)",
    zIndex: "-1",
  },
  title: {
    fontSize: "22px",
    color: "green",
  },
  image: {
    borderRadius: "50%",
    border: "2px solid black",
    width: 180,
    height: 180,
  },
  info: {
    color: "grey",
  },
  label: {
    color: "black",
    fontSize: "12px",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    fontFamily: 'Arial'
  },
};

function MealDetailsComponent(props) {
  return (
    <>
      <div style={style.wrapper}>
        <img src={props.imageSRC} alt={props.title} style={style.image} />

        <div style={style.detailsWrapper}>
          <div style={style.details}>
            <h3 style={style.title}>{props.title}</h3>

            <div style={style.info}>
              <p>
                <span style={style.label}>Area: </span>
                {props.area}
              </p>
              <p>
                <span style={style.label}>Category: </span>
                {props.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MealDetailsComponent;
