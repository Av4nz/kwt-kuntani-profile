import { getPengurus } from "@/lib/pengurus";
import { getLatestKegiatan } from "@/lib/kegiatan";
import { getProduk } from "@/lib/produk";
import Head from "next/head";
import CarouselSection from "@/components/sections/CarouselSection";
import TentangSection from "@/components/sections/TentangSection";
import ProdukSection from "@/components/sections/ProdukSection";
import KegiatanSection from "@/components/sections/KegiatanSection";

export async function getStaticProps() {
  const pengurusList = getPengurus();
  const latestKegiatan = getLatestKegiatan(4);
  const produkList = getProduk();

  const serialized = latestKegiatan.map((item) => ({
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
      pengurusList,
      produkList,
      latestKegiatan: serialized,
    },
  };
}

export default function Home({ pengurusList, latestKegiatan, produkList }) {
  return (
    <>
      <Head>
        <title>KWT Kuntani</title>
        <meta
          name="description"
          content="Website resmi KWT Kuntani yang berisi profil, kegiatan, dan program pemberdayaan masyarakat."
        />
        <meta
          name="keywords"
          content="KWT, Kuntani, kelompok wanita tani, pertanian, Sleman, DIY, padukuhan manukan, condongcatur, depok, sayuran segar, produk pertanian, kangkung, kacang panjang, sawi, jamur, jamur crispy"
        />
        <meta name="author" content="KWT Kuntani" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="KWT Kuntani" />
        <meta
          property="og:description"
          content="Website resmi KWT Kuntani yang berisi profil, kegiatan, dan program pemberdayaan masyarakat."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kwtkuntani.netlify.app" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KWT Kuntani",
              url: "https://kwtkuntani.netlify.app",
              logo: "https://kwtkuntani.netlify.app/logo.png",
              sameAs: ["https://www.facebook.com/share/g/1FSQ92D9RX/"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-823-1495-4133",
                contactType: "Customer Service",
                areaServed: "ID",
                availableLanguage: "Indonesian",
              },
            }),
          }}
        />
      </Head>
      <div className="text-black">
        <CarouselSection />
        <TentangSection pengurusList={pengurusList} />
        <ProdukSection produkList={produkList}/>
        <KegiatanSection latestKegiatan={latestKegiatan} />
      </div>
    </>
  );
}
