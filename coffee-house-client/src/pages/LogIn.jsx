import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/AuthContext";
import { GoArrowLeft } from "react-icons/go";

const LogIn = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const lastSignInTime = result.user?.metadata?.lastSignInTime;
        const updatedData = { email, lastSignInTime };
        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire({
                icon: "success",
                title: "Thank you",
                text: "Login Successfully!",
                showConfirmButton: false,
                timer: 2000,
              });
              form.reset();
            }
          });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="flex flex-col items-center">
      <Link to={"/admin"}>
        <button className="btn btn-secondary border-none btn-outline my-3 fontRancho text-xl text-shadow text-primary pl-0 shadow-none">
          <GoArrowLeft /> Back to home
        </button>
      </Link>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto mt-10">
        <form onSubmit={handleLogin} className="card-body">
          <div>
            <h1 className="text-center text-3xl fontRancho font-semibold text-primary">
              Please Login
            </h1>
          </div>
          <fieldset className="fieldset">
            <label className="label text-primary font-bold">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label text-primary font-bold">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover text-primary font-bold">
                Forgot password?
              </a>
            </div>
            <button className="btn btn-primary mt-4">Login</button>
          </fieldset>
          <div className="flex mt-2">
            <p>Don't you have an account? </p>
            <Link
              to={"/register"}
              className="text-primary font-extrabold underline"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
