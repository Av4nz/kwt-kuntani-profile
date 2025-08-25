import React from "react";
import Image from "next/image";
import PengurusSubSection from "./PengurusSubSection";
import Image1 from "../../public/images/static/hero/hero1_compressed.webp";

const TentangSection = ({ pengurusList }) => {
  return (
    <section id="tentang" className="py-20 px-4 lg:px-16 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Tentang
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl w-full max-h-[400px] overflow-hidden">
            <Image
              src={Image1}
              alt="Tentang KWT Kuntani"
              className="w-full h-full bg-center bg-cover object-cover object-center"
            />
          </div>
          <div className="md:flex md:flex-col">
            <p className="text-lg text-gray-800 text-justify">
              Kelompok Wanita Tani "Rukun Tani" (KWT KUNTANI) bergerak di bidang pengolahan hasil-hasil pertanian, pemanfaatan dan mengolah lahan dengan tanaman sayur mayur serta mengembangkan peternakan di wilayah Padukuhan Manukan. KWT KUNTANI berdiri di Padukuhan Manukan, Condongcatur, Depok, Sleman pada tanggal 13 April 2016. Kami memiliki cita-cita untuk profesionalisme anggota dalam mengelola hasil pertanian dan peternakan. Kami juga ingin mengolah lahan pekarangan dan sawah, menyediakan sarana pertanian yang dibutuhkan, dan membantu anggota menciptakan produk yang kreatif dan sehat. Kami juga berupaya memasarkan hasil pertanian secara kolektif dan menjalin kerjasama dengan berbagai pihak terkait.
            </p>
          </div>
        </div>
        <PengurusSubSection pengurusList={pengurusList} />
      </div>
    </section>
  );
};

export default TentangSection;
