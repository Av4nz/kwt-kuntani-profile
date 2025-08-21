import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-10 w-full bg-primary-700 text-white p-4">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center">
        <a href="/" className="font-semibold text-xl">
          KWT Kuntani
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
