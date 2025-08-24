import React from "react";
import { getAllKegiatan } from "@/lib/kegiatan";
import KegiatanPageSection from "@/components/sections/KegiatanPageSection";

export async function getStaticProps() {
  const latestKegiatan = getAllKegiatan(4);

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
      allKegiatan: serialized,
    },
  };
}

const index = ({allKegiatan}) => {
  return (
    <div className="text-black">
      <KegiatanPageSection allKegiatan={allKegiatan}/>
    </div>
  );
};

export default index;
