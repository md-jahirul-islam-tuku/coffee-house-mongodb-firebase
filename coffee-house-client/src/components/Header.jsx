import React from "react";

const Header = () => {
  return (
    <div
      className="flex items-center gap-3 justify-center bg-[url('https://i.ibb.co/N6xGRWJv/15.jpg')] bg-cover bg-center"
    >
      <img
        className="w-10"
        src="https://i.ibb.co/20KtJC9k/logo1.png"
        alt="logo1.png"
      />
      <h1 className="fontRancho text-center text-4xl my-3 text-white">
        Espresso Emporium
      </h1>
    </div>
  );
};

export default Header;
