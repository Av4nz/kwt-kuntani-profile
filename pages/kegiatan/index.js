import React from "react";
import Head from "next/head";
import { getAllKegiatan } from "@/lib/kegiatan";
import KegiatanPageSection from "@/components/sections/KegiatanPageSection";

export async function getStaticProps() {
  const allKegiatan = getAllKegiatan(4);

  const serialized = allKegiatan.map((item) => ({
    ...item,
    date: item.date
      ? new Date(item.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : null,
    image: item.image || null,
  }));

  return {
    props: {
      allKegiatan: serialized,
    },
  };
}

const index = ({ allKegiatan }) => {
  return (
    <>
      <Head>
        <title>Kegiatan KWT Kuntani</title>
        <meta
          name="description"
          content="Kegiatan-kegiatan yang dilakukan oleh KWT Kuntani dalam rangka pemberdayaan masyarakat dan pengembangan pertanian."
        />
      </Head>
      <main className="text-black">
        <KegiatanPageSection allKegiatan={allKegiatan} />
      </main>
    </>
  );
};

export default index;
