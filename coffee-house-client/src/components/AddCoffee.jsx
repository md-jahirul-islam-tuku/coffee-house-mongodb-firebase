import React from "react";
import { GoArrowLeft } from "react-icons/go";

const AddCoffee = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/FbhPKvt9/11.png')] bg-cover bg-center min-h-screen">
      <div className="lg:max-w-10/12 mx-auto">
        <button className="btn btn-secondary border-none btn-outline my-3 fontRancho text-xl text-shadow text-primary px-0">
          <GoArrowLeft /> Back to home
        </button>
        <div className="flex bg-accent p-28 rounded-xl">
          <fieldset className="fieldset w-full p-4">
            <label className="label">Title</label>
            <input
              type="text"
              className="input w-full"
              placeholder="My awesome page"
            />

            <label className="label">Slug</label>
            <input
              type="text"
              className="input w-full"
              placeholder="my-awesome-page"
            />

            <label className="label">Author</label>
            <input type="text" className="input w-full" placeholder="Name" />
          </fieldset>
          <fieldset className="fieldset w-full p-4">
            <label className="label">Title</label>
            <input
              type="text"
              className="input w-full"
              placeholder="My awesome page"
            />

            <label className="label">Slug</label>
            <input
              type="text"
              className="input w-full"
              placeholder="my-awesome-page"
            />

            <label className="label">Author</label>
            <input type="text" className="input w-full" placeholder="Name" />
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
