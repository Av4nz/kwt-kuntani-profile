import React from "react";
import { Link as ScrollLink } from "react-scroll";

const ButtonPrimary = ({ label, to }) => {
  return (
    <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition duration-300 ease-in-out cursor-pointer">
      <ScrollLink to={to} spy={true} smooth={true} duration={500}>
        {label}
      </ScrollLink>
    </button>
  );
};

export default ButtonPrimary;
