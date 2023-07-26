import React from "react";
import logo from "./../assets/img/fork-spoon-with-egg-logo-design-vector_15473-14619.jpg";
import { Link } from "react-router-dom";

function TopNavContainer({ searchValue, handleInputChange, logoOnly }) {
  return (
    <div className="d-flex p-2 sticky-top bg-white">
      <div className="navbar-brand" style={{ width: "250px", height: "60px" }}>
        <Link to="/">
          <img src={logo} className="img-fluid h-100" alt="logo" />
        </Link>
      </div>
      {!logoOnly ? (
        <div className="text-muted w-100">
          <form className="form form-control-group d-flex">
            <input
              type="text"
              className="form-control form-control-lg self-center"
              placeholder="Search"
              value={searchValue}
              onChange={handleInputChange}
            ></input>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TopNavContainer;
