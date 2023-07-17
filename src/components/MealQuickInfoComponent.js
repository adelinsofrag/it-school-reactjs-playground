import React from "react";
// Refactor: (adunam toate variabilele intr-un singur Style Object.)
const style = {
  details: {
    backgroundColor: "blanchedalmond",
    borderRadius: "10px",
    padding: "5px 15px",
  },
  detailsWrapper: {
    padding: "10px 0",
    backgroundColor: "transparent",
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
    fontFamily: "Arial",
  },
};
function MealQuickInfoComponent(props) {
  return (
    <>
      <div style={style.wrapper}>
        <div style={style.detailsWrapper}>
          <div style={style.details}>
            <h3 style={style.title}>{props.title}</h3>

            <div style={style.info}>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MealQuickInfoComponent;
