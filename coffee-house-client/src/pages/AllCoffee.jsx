import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { ImBin2 } from "react-icons/im";

const AllCoffee = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);

  return (
    <div className="lg:max-w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {coffees.map((coffee) => (
        <div
          key={coffee._id}
          className="flex justify-between items-center shadow-sm bg-accent py-4 pr-4 lg:py-10 rounded-lg"
        >
          <div>
            <img src={coffee.photo} />
          </div>
          <div className="space-y-3 text-start">
            <p className="text-sm"><span className="font-bold">Name:</span> {coffee.name}</p>
            <p className="text-sm"><span className="font-bold">Chef:</span> {coffee.chef}</p>
            <p className="text-sm"><span className="font-bold">Price:</span> {coffee.price} taka</p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="btn btn-secondary btn-xs lg:btn-sm"><FaEye /></button>
            <button className="btn btn-primary btn-xs lg:btn-sm"><HiPencil /></button>
            <button className="btn bg-red-500 btn-xs lg:btn-sm text-white"><ImBin2 /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCoffee;
