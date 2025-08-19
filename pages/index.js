import Image from "next/image";
import CarouselSection from "@/components/sections/CarouselSection";
import TentangSection from "@/components/sections/TentangSection";
import ProdukSection from "@/components/sections/ProdukSection";

export default function Home() {
  return (
    <div className=" text-black">
      <CarouselSection />
      <TentangSection />
      <ProdukSection />
    </div>
  );
}
