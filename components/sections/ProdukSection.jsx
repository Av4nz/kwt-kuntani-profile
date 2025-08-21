import React from "react";
import { Carousel } from "flowbite-react";
import ProductCard from "../ui/ProductCard";
import Image1 from "@/public/images/static/produk/produk_kangkung.webp";
import Image2 from "@/public/images/static/produk/produk_kacang_panjang.webp";
import Image3 from "@/public/images/static/produk/produk_daun_pohpohan.webp";
import Image4 from "@/public/images/static/produk/produk_sawi.webp";

const ProdukSection = () => {
  const products = [
    { image: Image1, productName: "Kangkung" },
    { image: Image2, productName: "Kacang Panjang" },
    { image: Image3, productName: "Daun Pohpohan" },
    { image: Image4, productName: "Sawi" },
    { image: Image4, productName: "Sawi" },
    { image: Image4, productName: "Sawi" },
  ];

  return (
    <section id="produk" className="py-20 px-4 lg:px-16 bg-slate-100">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Produk
        </h2>

        <div className="md:hidden">
          <div className="h-[550px]">
            <Carousel 
              slide={false}
              indicators={true}
              leftControl={
                <button className="flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              }
              rightControl={
                <button className="flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              }
            >
              {products.map((product, index) => {
                return (
                  <div
                    key={`slide-${product.productName}-${index}`}
                    className="flex justify-center items-center h-full px-4"
                  >
                    <div className="w-full max-w-sm mx-auto">
                      <ProductCard
                        image={product.image}
                        productName={product.productName}
                      />
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProdukSection;
