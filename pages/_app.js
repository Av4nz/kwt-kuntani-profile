import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "KWT Kuntani - Kelompok Wanita Tani",
  description: "KWT Kuntani menyediakan berbagai produk sayuran segar dan berkualitas. Kami adalah kelompok wanita tani yang berkomitmen untuk menghasilkan produk pertanian terbaik.",
  keywords: ["KWT Kuntani", "sayuran segar", "produk pertanian", "kelompok wanita tani", "kangkung", "kacang panjang", "daun pohpohan", "sawi", "padukuhan manukan", "condongcatur", "depok", "sleman"],
  openGraph: {
    title: "KWT Kuntani - Kelompok Wanita Tani",
    description: "Penyedia sayuran segar dan berkualitas",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KWT Kuntani",
      },
    ],
  },
};

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} font-poppins min-h-screen flex flex-col`}>
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
