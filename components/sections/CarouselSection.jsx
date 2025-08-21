import React from "react";
import { Carousel } from "flowbite-react";
import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";
import Image from "next/image";
import Hero1 from "../../public/images/static/hero/hero1_compressed.webp";
import Hero2 from "../../public/images/static/hero/hero2_compressed.webp";
import Hero3 from "../../public/images/static/hero/hero3_compressed.webp";

const CarouselSection = () => {
  const images = [Hero1, Hero2, Hero3];

  return (
    <section className="relative h-[calc(100vh-60px)] md:h-[700px] w-full overflow-hidden flex justify-center items-center">
      <Carousel
        indicators={false}
        leftControl="."
        rightControl="."
        className="!overflow-x-hidden !rounded-none"
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              className="flex w-full h-full bg-center bg-cover object-cover object-center -z-10"
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </Carousel>
      <div className="absolute w-full h-full bg-black/60" />
      <div className="absolute max-w-[1240px] h-full flex items-center justify-center flex-col z-1 text-white">
        <h1 className="text-center mb-6">
          <span className="text-4xl md:text-6xl font-bold">KWT Kuntani</span>
          <br />
          <span className="text-xl md:text-3xl font-light">
            Kelompok Wanita Tani Kuntani
          </span>
        </h1>
        <div className="flex flex-row gap-4 mx-auto flex-wrap justify-center">
          <ButtonPrimary label={"Lihat Produk"} to={"produk"} />
          <ButtonSecondary label={"Kegiatan"} to={"kegiatan"}/>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
