import React from "react";
import KegiatanCard from "../ui/KegiatanCard";

const KegiatanPageSection = ({allKegiatan}) => {
  return (
    <section className="py-20 px-4 lg:px-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Kegiatan
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {allKegiatan.map((kegiatan) => (
            <KegiatanCard key={kegiatan.slug} image={kegiatan.image}>
              <h3>{kegiatan.title}</h3>
              <span>{kegiatan.date}</span>
              <p>{kegiatan.description}</p>
            </KegiatanCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KegiatanPageSection;
