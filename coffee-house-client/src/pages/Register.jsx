import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Swal from "sweetalert2";
import { GoArrowLeft } from "react-icons/go";

const Register = () => {
  const { register } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUserDB = { email, name, photo, phone };
    register(email, password).then((result) => {
      const lastSignInTime = result.user?.metadata?.lastSignInTime;
      const updatedUserDB = { ...newUserDB, lastSignInTime };
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUserDB),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: `${name}`,
              text: "Register Successfully!",
              showConfirmButton: false,
              timer: 2000,
            });
            form.reset();
          }
        });
    });
  };
  return (
    <div className="flex flex-col items-center">
      <Link to={"/admin"}>
        <button className="btn btn-secondary border-none btn-outline my-3 fontRancho text-xl text-shadow text-primary pl-0 shadow-none">
          <GoArrowLeft /> Back to home
        </button>
      </Link>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto mt-10">
        <form onSubmit={handleRegister} className="card-body">
          <div>
            <h1 className="text-center text-3xl fontRancho font-semibold text-primary">
              Please Register
            </h1>
          </div>
          <fieldset className="fieldset">
            <label className="label text-primary font-bold">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Name"
              required
            />
            <label className="label text-primary font-bold">Photo</label>
            <input
              name="photo"
              type="text"
              className="input w-full"
              placeholder="Photo URL"
              required
            />
            <label className="label text-primary font-bold">Phone Number</label>
            <input
              name="phone"
              type="tel"
              className="input w-full"
              placeholder="Phone Number"
              required
            />
            <label className="label text-primary font-bold">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="label text-primary font-bold">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <label className="label mt-3 font-semibold">
              <input type="checkbox" className="checkbox checkbox-xs" />
              Accept Terms & Conditions
            </label>
            <button className="btn btn-primary mt-4">Register</button>
          </fieldset>
          <div className="flex mt-2">
            <p>Already have an account?</p>
            <Link
              to={"/login"}
              className="text-primary font-extrabold underline"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
