import React from "react";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/LDGPSLmt/3.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-start">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold fontRancho">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn btn-secondary text-primary text-xl shadow-none fontRancho hover:bg-transparent rounded-none hover:text-white hover:border-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-info py-8 lg:py-14">
        <div className="flex lg:max-w-10/12 mx-auto">
          <div className="p-4 lg:px-10">
            <img src="https://i.ibb.co/HDP5dJy0/1.png" alt="logo1" />
            <h2 className="text-2xl lg:text-3xl fontRancho my-2 text-primary">
              Awesome Aroma
            </h2>
            <p className="">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="p-4 lg:px-10">
            <img src="https://i.ibb.co/LGTJkLD/2.png" alt="logo1" />
            <h2 className="text-2xl lg:text-3xl fontRancho my-2 text-primary">
              High Quality
            </h2>
            <p className="">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="p-4 lg:px-10">
            <img src="https://i.ibb.co/GfBdPLd0/3.png" alt="logo1" />
            <h2 className="text-2xl lg:text-3xl fontRancho my-2 text-primary">
              Pure Grades
            </h2>
            <p className="">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="p-4 lg:px-10">
            <img src="https://i.ibb.co/mFPGcPBP/4.png" alt="logo1" />
            <h2 className="text-2xl lg:text-3xl fontRancho my-2 text-primary">
              Proper Roasting
            </h2>
            <p className="">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
