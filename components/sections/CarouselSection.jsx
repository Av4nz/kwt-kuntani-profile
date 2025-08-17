import React from "react";
import { Carousel } from "flowbite-react";
import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";
import Image from "next/image";
import Image1 from "../../public/images/static/image1.webp";
import Image2 from "../../public/images/static/image2.webp";
import Image3 from "../../public/images/static/image3.webp";

const CarouselSection = () => {
  const images = [Image1, Image2, Image3];

  return (
    <div className="relative h-[95vh] md:h-[700px] w-full overflow-hidden flex justify-center items-center">
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
      <div className="absolute max-w-[1240px] h-full flex items-center justify-center flex-col z-5 text-white">
        <h1 className="text-center mb-6">
          <span className="text-4xl md:text-6xl font-bold">KWT Kuntani</span>
          <br />
          <span className="text-xl md:text-3xl font-light">
            Kelompok Wanita Tani Kuntani
          </span>
        </h1>
        <div className="flex flex-row gap-4 mx-auto">
          <ButtonPrimary />
          <ButtonSecondary />
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
