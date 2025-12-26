import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      price,
      photo,
    };
    fetch("http://localhost:3000/add-coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `${name}`,
            text: "Added Successfully!",
            showConfirmButton: false,
            timer: 2000,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="bg-[url('https://i.ibb.co/FbhPKvt9/11.png')] bg-cover bg-center min-h-screen">
      <div className="lg:max-w-10/12 mx-auto">
        <Link to={"/admin"}>
          <button className="btn btn-secondary border-none btn-outline my-3 fontRancho text-xl text-shadow text-primary pl-0 shadow-none">
            <GoArrowLeft /> Back to home
          </button>
        </Link>
        <form onSubmit={handleSubmit} className="bg-accent p-28 rounded-xl">
          <div className="flex">
            <fieldset className="fieldset w-full px-4">
              <label className="label font-bold text-lg">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Enter coffee name"
              />

              <label className="label font-bold text-lg">Supplier</label>
              <input
                name="supplier"
                type="text"
                className="input w-full"
                placeholder="Enter coffee supplier"
              />

              <label className="label font-bold text-lg">Category</label>
              <input
                name="category"
                type="text"
                className="input w-full"
                placeholder="Enter coffee category"
              />
              <label className="label font-bold text-lg">Price</label>
              <input
                name="price"
                type="text"
                className="input w-full"
                placeholder="Enter coffee price"
              />
            </fieldset>
            <fieldset className="fieldset w-full px-4">
              <label className="label font-bold text-lg">Chef</label>
              <input
                name="chef"
                type="text"
                className="input w-full"
                placeholder="Enter coffee chef"
              />

              <label className="label font-bold text-lg">Taste</label>
              <input
                name="taste"
                type="text"
                className="input w-full"
                placeholder="Enter coffee taste"
              />

              <label className="label font-bold text-lg">Details</label>
              <input
                name="details"
                type="text"
                className="input w-full"
                placeholder="Enter coffee details"
              />
              <label className="label font-bold text-lg">Photo</label>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="Enter photo URL"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset w-full px-4">
            <input
              className="btn btn-secondary text-primary text-xl shadow-none border-2 border-primary fontRancho mt-4 hover:bg-transparent"
              type="submit"
              value="Add coffee"
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
