import React from "react";
import { RiCupLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import App from "../App";

const OurProducts = () => {
  return (
    <>
      <App />
      <div className="my-10 text-center">
        <Link to={"/admin/add-coffee"}>
          <button className="btn btn-secondary fontRancho shadow-none text-white text-shadow border-2 border-primary hover:bg-base-100 text-lg">
            Add Coffee <RiCupLine className="text-primary" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default OurProducts;
