import React from "react";
import PengurusCard from "../ui/PengurusCard";

const PengurusSubSection = ({ pengurusList }) => {
  return (
    <section className="py-10">
      <div className="max-w-[1240px] mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
          Pengurus
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pengurusList.map((pengurus) => (
            <PengurusCard
              key={pengurus.id}
              image={pengurus.foto}
              nama={pengurus.nama}
              posisi={pengurus.posisi}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PengurusSubSection;
