import React from "react";
import KegiatanMiniCard from "../ui/KegiatanMiniCard";

const KegiatanSection = () => {
  return (
    <section id="kegiatan" className="py-20 px-4 lg:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        Kegiatan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KegiatanMiniCard />
      </div>
    </section>
  );
};

export default KegiatanSection;
