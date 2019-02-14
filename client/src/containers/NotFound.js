import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../style/assets/PageNotFound.png";

const NotFound = () => (
  <div>
    <img
      src={PageNotFound}
      alt="Not found logo for API Hub"
      style={{
        width: 400,
        height: 400,
        display: "block",
        margin: "auto",
        position: "relative"
      }}
    />
    <h2 className="text-center mb-4">Page not found</h2>
    <center>
      <Link to="/">Return to Home Page</Link>
    </center>
  </div>
);
export default NotFound;
