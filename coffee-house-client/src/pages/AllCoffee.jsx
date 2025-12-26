import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { ImBin2 } from "react-icons/im";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllCoffee = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);

  const handleDelete = (id, name, photo) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${name} will be permanently deleted !`,
      imageUrl: `${photo}`,
      imageWidth: 150,
      imageHeight: 170,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              // remove from UI
              setCoffees((prev) => prev.filter((coffee) => coffee._id !== id));
            }
          });
        Swal.fire({
          icon: "success",
          title: `${name}`,
          text: "Deleted Successfully!",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    });
  };

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
          <div className="space-y-3 lg:space-y-5 text-start">
            <p className="text-sm">
              <span className="font-bold">Name:</span> {coffee.name}
            </p>
            <p className="text-sm">
              <span className="font-bold">Chef:</span> {coffee.chef}
            </p>
            <p className="text-sm">
              <span className="font-bold">Price:</span> {coffee.price} taka
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link to={`/admin/coffees/${coffee._id}`}>
              <button
                className="btn btn-secondary btn-xs lg:btn-sm tooltip tooltip-top"
                data-tip={`${coffee.name} details ?`}
              >
                <FaEye />
              </button>
            </Link>
            <Link to={`/admin/update-coffee/${coffee._id}`}>
              <button className="btn btn-primary btn-xs lg:btn-sm tooltip tooltip-top"
                data-tip={`Update ${coffee.name} ?`}>
                <HiPencil />
              </button>
            </Link>
            <button
              onClick={() =>
                handleDelete(coffee._id, coffee.name, coffee.photo)
              }
              className="btn bg-red-500 btn-xs lg:btn-sm text-white tooltip tooltip-top"
                data-tip={`Delete ${coffee.name} ?`}
            >
              <ImBin2 />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCoffee;
