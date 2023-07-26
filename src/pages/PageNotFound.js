import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Oops, Page Not Found</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead fs-2 mb-4">Let's go back to out meals</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/"><div className="btn btn-lg btn-outline-dark">Back to Home</div></Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
