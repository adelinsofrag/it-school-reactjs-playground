import React from "react";

function TopNavContainer() {
  return (
    <div className="d-flex p-2">
      <div className="navbar-brand" style={{width: "250px"}}>Brand</div>
      <div className="text-muted w-auto">Search ...</div>
      <div className="btn btn-outline-primary ms-auto">element</div>
    </div>
  );
}

export default TopNavContainer;
