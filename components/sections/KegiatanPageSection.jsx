import React from "react";
import KegiatanCard from "../ui/KegiatanCard";

const KegiatanPageSection = () => {
  return (
    <section className="py-20 px-4 lg:px-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Kegiatan
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
            <KegiatanCard />
            <KegiatanCard />
            <KegiatanCard />
        </div>
      </div>
    </section>
  );
};

export default KegiatanPageSection;
