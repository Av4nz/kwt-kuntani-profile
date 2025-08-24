import { getPengurus } from "@/lib/pengurus";
import { getLatestKegiatan } from "@/lib/kegiatan";
import CarouselSection from "@/components/sections/CarouselSection";
import TentangSection from "@/components/sections/TentangSection";
import ProdukSection from "@/components/sections/ProdukSection";
import KegiatanSection from "@/components/sections/KegiatanSection";

export async function getStaticProps() {
  const pengurusList = getPengurus();
  const latestKegiatan = getLatestKegiatan(4);

  const serialized = latestKegiatan.map((item) => ({
    ...item,
    date: item.date
      ? new Date(item.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : null,
  }));


  return {
    props: {
      pengurusList,
      latestKegiatan: serialized,
    },
  };
}

export default function Home({ pengurusList, latestKegiatan }) {
  return (
    <div className="text-black">
      <CarouselSection />
      <TentangSection pengurusList={pengurusList} />
      <ProdukSection />
      <KegiatanSection latestKegiatan={latestKegiatan} />
    </div>
  );
}
