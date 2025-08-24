import React from "react";
import KegiatanMiniCard from "../ui/KegiatanMiniCard";
import ButtonPrimary from "../ui/ButtonPrimary";

const KegiatanSection = ({ latestKegiatan }) => {
  return (
    <section id="kegiatan" className="py-20 px-4 lg:px-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Kegiatan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {latestKegiatan.map((kegiatan, index) => (
            <KegiatanMiniCard key={index} image={kegiatan.image}>
              <div className="text-lg font-semibold">{kegiatan.title}</div>
              <time className="text-sm text-gray-500">{kegiatan.date}</time>
              <p className="text-gray-600">{kegiatan.description}</p>
            </KegiatanMiniCard>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <ButtonPrimary label="Lihat Semua Kegiatan" link="/kegiatan" />
        </div>
      </div>
    </section>
  );
};

export default KegiatanSection;
