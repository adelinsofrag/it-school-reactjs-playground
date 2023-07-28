import React from "react";
import logo from "./../assets/img/fork-spoon-with-egg-logo-design-vector_15473-14619.jpg";
import { Link, useLocation } from "react-router-dom";

const TopNavContainer = ({ searchValue, handleInputChange, noSearchBar }) => {
  const location = useLocation();

  return (
    <div className="d-flex p-2 sticky-top bg-white align-items-center">
      <div className="navbar-brand" style={{ width: "250px", height: "60px" }}>
        <Link to="/">
          <img src={logo} className="img-fluid h-100" alt="logo" />
        </Link>
      </div>
      {!noSearchBar ? (
        <div className="text-muted w-100">
          <form className="form form-control-group d-flex">
            <input
              type="text"
              className="form-control form-control-lg self-center border-bottom border-0 rounded-0"
              placeholder="🔎 Search meals"
              value={searchValue}
              onChange={handleInputChange}
            ></input>
          </form>
        </div>
      ) : (
        ""
      )}
      {location.pathname !== "/" && (
        <div className="d-flex gap-4 ms-auto">
          <Link
            to="/"
            className="btn bg-white text-start border-bottom rounded-0 text-dark fw-bold px-0"
          >
            🏠 Back to Home
          </Link>
          <Link
            to="/favorites"
            className="btn bg-white text-start border-bottom rounded-0 text-dark fw-bold px-0"
          >
            ♡ Favorites
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopNavContainer;
