import React, { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewCoffee = () => {
  const coffee = useLoaderData();
  const { name, supplier, category, chef, taste, details, price, photo } =
    coffee;
  return (
    <div className="bg-[url('https://i.ibb.co/FbhPKvt9/11.png')] bg-cover bg-center min-h-screen">
      <div className="lg:max-w-10/12 mx-auto">
        <Link to={"/admin"}>
          <button className="btn btn-secondary border-none btn-outline my-3 fontRancho text-xl text-shadow text-primary pl-0 shadow-none">
            <GoArrowLeft /> Back to home
          </button>
        </Link>
        <div className="flex justify-center items-center bg-accent py-4 lg:py-20 rounded-lg">
          <div>
            <img className="w-88" src={photo} />
          </div>
          <div className="space-y-3 text-start">
            <h1 className="text-primary text-5xl fontRancho text-shadow">{category}</h1>
            <p className="text-2xl">
              <span className="font-bold">Name:</span> {name}
            </p>
            <p className="text-2xl">
              <span className="font-bold">Supplier:</span> {supplier}
            </p>
            <p className="text-2xl">
              <span className="font-bold">Chef:</span> {chef}
            </p>
            <p className="text-2xl">
              <span className="font-bold">Taste:</span> {taste}
            </p>
            <p className="text-2xl">
              <span className="font-bold">Details:</span> {details}
            </p>
            <p className="text-2xl">
              <span className="font-bold">Price:</span> {price} taka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCoffee;
