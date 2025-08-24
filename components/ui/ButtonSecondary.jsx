import React from "react";
import { Link as ScrollLink } from "react-scroll";

const ButtonSecondary = ({ label, to }) => {
  return (
    <button className="bg-black/40 text-white border-2 border-primary-600 px-8 py-4 rounded-xl hover:border-primary-700 hover:text-primary-500 transition duration-300 ease-in-out cursor-pointer font-semibold">
      <ScrollLink to={to} spy={true} smooth={true} duration={500}>
        {label}
      </ScrollLink>
    </button>
  );
};

export default ButtonSecondary;
