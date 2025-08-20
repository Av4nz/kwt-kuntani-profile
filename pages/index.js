import Image from "next/image";
import { getPengurus } from "../lib/pengurus";
import CarouselSection from "@/components/sections/CarouselSection";
import TentangSection from "@/components/sections/TentangSection";
import ProdukSection from "@/components/sections/ProdukSection";
import KegiatanSection from "@/components/sections/KegiatanSection";

export async function getStaticProps() {
  const pengurusList = getPengurus();

  return {
    props: {
      pengurusList,
    },
  };
}

export default function Home({ pengurusList }) {
  return (
    <div className=" text-black">
      <CarouselSection />
      <TentangSection pengurusList={pengurusList} />
      <ProdukSection />
      <KegiatanSection />
    </div>
  );
}
