import React from "react";

function TopNavContainer({ searchValue, handleInputChange }) {
  return (
    <div className="d-flex p-2">
      <div className="navbar-brand" style={{ width: "250px" }}>
        Brand
      </div>
      <div className="text-muted w-auto">
        <form className="form form-control-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search"
            value={searchValue}
            onChange={handleInputChange}
          ></input>
        </form>
      </div>
      <div className="btn btn-outline-primary ms-auto">element</div>
    </div>
  );
}

export default TopNavContainer;
