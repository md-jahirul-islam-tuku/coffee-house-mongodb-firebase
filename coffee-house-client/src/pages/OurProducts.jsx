import React from "react";
import { RiCupLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import AllCoffee from "./AllCoffee";

const OurProducts = () => {
  return (
    <>
      <div className="my-10 lg:my-28 text-center bg-[url('https://i.ibb.co/fdDWvryG/1.png')] bg-cover">
        <p>-- Sip & Savor--</p>
        <h1 className="text-4xl font-semibold fontRancho my-4">Our Popular Products</h1>
        <Link to={"/admin/add-coffee"}>
          <button className="btn btn-secondary fontRancho shadow-none text-white text-shadow border-2 border-primary hover:bg-transparent text-lg mb-12">
            Add Coffee <RiCupLine className="text-primary" />
          </button>
        </Link>
        <AllCoffee/>
      </div>
    </>
  );
};

export default OurProducts;
