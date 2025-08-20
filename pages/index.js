import Image from "next/image";
import CarouselSection from "@/components/sections/CarouselSection";
import TentangSection from "@/components/sections/TentangSection";
import ProdukSection from "@/components/sections/ProdukSection";
import KegiatanSection from "@/components/sections/KegiatanSection";

export default function Home() {
  return (
    <div className=" text-black">
      <CarouselSection />
      <TentangSection />
      <ProdukSection />
      <KegiatanSection />
    </div>
  );
}
