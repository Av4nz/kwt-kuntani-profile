import Image from "next/image";
import CarouselSection from "@/components/sections/CarouselSection";
import TentangSection from "@/components/sections/TentangSection";

export default function Home() {
  return (
    <div className=" text-black">
      <CarouselSection />
      <TentangSection />
    </div>
  );
}
