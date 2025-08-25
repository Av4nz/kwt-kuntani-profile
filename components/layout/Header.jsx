import React from "react";
import Navbar from "./Navbar";
import Logo from "@/public/logo.png"
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-10 w-full bg-primary-700 text-white p-4">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center">
        <a href="/" className="flex font-semibold text-xl gap-2 items-center">
          <Image src={Logo} alt="Logo KWT Kuntani" width={500} height={500} className="w-12"/>
          KWT Kuntani
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
