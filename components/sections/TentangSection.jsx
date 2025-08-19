import React from "react";
import Image from "next/image";
import PengurusSubSection from "./PengurusSubSection";
import Image1 from "../../public/images/static/hero/hero1_compressed.webp";

const TentangSection = () => {
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
              className="w-full h-full bg-center bg-cover object-cover object-center"
              
            />
          </div>
          <div className="md:flex md:flex-col">
            <p className="text-lg text-gray-800 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae consectetur error sit, perferendis incidunt fugit ipsum
              quibusdam amet consequatur accusamus. Voluptatibus consectetur
              vitae natus atque nam, qui rerum non sit minima harum et enim ut
              deleniti vero ducimus eius officiis earum dignissimos autem
              reprehenderit laudantium? Tempora excepturi illum sit porro. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Neque quia
              delectus explicabo dicta exercitationem quos obcaecati architecto
              sit perspiciatis impedit?
            </p>
          </div>
        </div>
        <PengurusSubSection />
      </div>
    </section>
  );
};

export default TentangSection;
