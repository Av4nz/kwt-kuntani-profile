import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  return (
    <nav className="text-white">
      <ul
        className={
          nav
            ? "hidden md:flex space-x-6 justify-between"
            : "hidden md:flex space-x-6 justify-between"
        }
      >
        <li>
          <a href="/" className="hover:underline">
            Beranda
          </a>
        </li>
        <li>
          <a href="" className="hover:underline">
            Tentang
          </a>
        </li>
        <li>
          <a href="" className="hover:underline">
            Produk
          </a>
        </li>
        <li>
          <a href="" className="hover:underline">
            Kegiatan
          </a>
        </li>
        <li>
          <a href="" className="hover:underline">
            Kontak
          </a>
        </li>
      </ul>
      <div className="md:hidden flex items-center" onClick={toggleNav}>
        <button className="cursor-pointer">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>
      </div>
      <div className={`md:hidden fixed left-0 w-full transition-all duration-500 ease-in-out ${nav ? 'top-[60px] opacity-100' : 'top-[-100%] opacity-0'}`}>
        <ul className="bg-primary-700 text-white">
          <li className="py-4 px-6 border-b border-white">
            <a href="/" className="hover:underline">Beranda</a>
          </li>
          <li className="py-4 px-6 border-b border-white">
            <a href="" className="hover:underline">Tentang</a>
          </li>
          <li className="py-4 px-6 border-b border-white">
            <a href="" className="hover:underline">Produk</a>
          </li>
          <li className="py-4 px-6 border-b border-white">
            <a href="" className="hover:underline">Kegiatan</a>
          </li>
          <li className="py-4 px-6">
            <a href="" className="hover:underline">Kontak</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
