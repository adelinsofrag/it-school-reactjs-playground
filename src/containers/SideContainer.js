import React from "react";

function SideContainer() {
  return (
    <div className="d-flex flex-column ps-2 pe-5 py-4" style={{ width: "250px" }}>
      <h6 className="text-muted">Discover</h6>
      <div className="btn-group-vertical">
        <div className="btn text-start">Item</div>
        <div className="btn text-start btn-dark rounded-pill">Item</div>
        <div className="btn text-start">Item</div>
      </div>
      <h6 className="text-muted">More</h6>
      <div className="btn-group-vertical">
        <div className="btn text-start">Item</div>
        <div className="btn text-start">Item</div>
        <div className="btn text-start">Item</div>
      </div>
    </div>
  );
}

export default SideContainer;
