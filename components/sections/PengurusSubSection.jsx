import React from "react";
import PengurusCard from "../ui/PengurusCard";
import Pengurus3 from "../../public/images/static/pengurus/pengurus_dariyah.webp";
import Pengurus2 from "../../public/images/static/pengurus/pengurus_ratih.webp";
import Pengurus1 from "../../public/images/static/pengurus/pengurus_suratmi.webp";

const detailPengurus = {
  suratmi: {
    name: "Suratmi",
    position: "Ketua",
    image: Pengurus1,
  },
  ratih: {
    name: "Ratih Budi Arifiyanti",
    position: "Sekeretaris",
    image: Pengurus2,
  },
  dariyah: {
    name: "Dariyah",
    position: "Bendahara",
    image: Pengurus3,
  },
}

const PengurusSubSection = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1240px] mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
          Pengurus
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(detailPengurus).map(([key, { name, position, image }]) => (
            <PengurusCard
              key={key}
              image={image}
              nama={name}
              posisi={position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PengurusSubSection;
