import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, supplier, category, chef, taste, details, price, photo } =
    coffee;
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
    Swal.fire({
      title: "Are you sure?",
      html: `
        Name - ${name},<br/><br/>
        Supplier - ${supplier},<br/><br/>
        Category - ${category},<br/><br/>
        Price - ${price} Taka,<br/><br/>
        Chef - ${chef},<br/><br/>
        Taste - ${taste},<br/><br/>
        Details - ${details}
      `,
      imageWidth: 150,
      imageHeight: 170,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, update ${name} !`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/update-coffee/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire({
                icon: "success",
                title: `${name}`,
                imageUrl: `${photo}`,
                imageWidth: 150,
                imageHeight: 170,
                text: "Updated Successfully!",
                showConfirmButton: false,
                timer: 3000,
              });
            }
          });
      }
    });
  };
  return (
    <div className="bg-[url('https://i.ibb.co/FbhPKvt9/11.png')] bg-cover bg-center mb-14">
      <div className="lg:max-w-10/12 mx-auto">
        <Link to={"/admin"}>
          <button className="btn btn-secondary border-none btn-outline my-3 fontRancho text-xl text-shadow text-primary pl-0 shadow-none">
            <GoArrowLeft /> Back to home
          </button>
        </Link>
        <form onSubmit={handleSubmit} className="bg-accent p-28 rounded-xl">
          <div className="text-center w-4/6 mx-auto">
            <h1 className="text-4xl fontRancho text-primary text-shadow">
              Update Existing Coffee Details
            </h1>
            <p className="my-7">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <div className="flex">
            <fieldset className="fieldset w-full px-4">
              <label className="label font-bold text-lg">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                defaultValue={name}
              />

              <label className="label font-bold text-lg">Supplier</label>
              <input
                name="supplier"
                type="text"
                className="input w-full"
                defaultValue={supplier}
              />

              <label className="label font-bold text-lg">Category</label>
              <input
                name="category"
                type="text"
                className="input w-full"
                defaultValue={category}
              />
              <label className="label font-bold text-lg">Price</label>
              <input
                name="price"
                type="text"
                className="input w-full"
                defaultValue={price}
              />
            </fieldset>
            <fieldset className="fieldset w-full px-4">
              <label className="label font-bold text-lg">Chef</label>
              <input
                name="chef"
                type="text"
                className="input w-full"
                defaultValue={chef}
              />

              <label className="label font-bold text-lg">Taste</label>
              <input
                name="taste"
                type="text"
                className="input w-full"
                defaultValue={taste}
              />

              <label className="label font-bold text-lg">Details</label>
              <input
                name="details"
                type="text"
                className="input w-full"
                defaultValue={details}
              />
              <label className="label font-bold text-lg">Photo</label>
              <input
                name="photo"
                type="text"
                className="input w-full"
                defaultValue={photo}
              />
            </fieldset>
          </div>
          <fieldset className="fieldset w-full px-4">
            <input
              className="btn btn-secondary text-primary text-xl shadow-none border-2 border-primary fontRancho mt-4 hover:bg-transparent"
              type="submit"
              value="Update Coffee Details"
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
