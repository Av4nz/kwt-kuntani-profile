import React from "react";
import Image from "next/image";

const PengurusCard = ({ image, nama, posisi }) => {
  return (
    <div className="shadow rounded-2xl w-full h-[28rem] sm:h-[24rem] lg:h-[28rem] relative overflow-hidden flex">
      <Image
        src={image}
        className="w-full h-full bg-center bg-cover object-cover object-center"
      />
      <div className="absolute w-full bg-linear-to-t from-black to-transparent bottom-0 left-0 h-[40%]" />
      <div>
        <h4 className="absolute bottom-8 left-6 text-white font-semibold text-xl mb-2">
          {nama || "Nama Pengurus"}
        </h4>
        <p className="absolute bottom-4 left-6 text-white font-light">
          {posisi || "Posisi Pengurus"}
        </p>
      </div>
    </div>
  );
};

export default PengurusCard;
