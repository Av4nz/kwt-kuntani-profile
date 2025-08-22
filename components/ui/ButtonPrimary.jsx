import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const ButtonPrimary = ({ label, toSection, link }) => {
  const ButtonContent = () => (
    <span className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition duration-300 ease-in-out cursor-pointer">
      {label}
    </span>
  );

  if (link) {
    return (
      <ScrollLink to={toSection} spy={true} smooth={true} duration={500}>
        <Link href={link}>
          <ButtonContent />
        </Link>
      </ScrollLink>
    );
  }

  return (
    <ScrollLink to={toSection} spy={true} smooth={true} duration={500}>
      <ButtonContent />
    </ScrollLink>
  );
};

export default ButtonPrimary;
